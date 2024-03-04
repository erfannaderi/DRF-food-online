# views.py
import datetime

import jwt
import requests
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.utils.timezone import now
from django.views.decorators.csrf import csrf_exempt
from rest_framework import views
from rest_framework import viewsets
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView

from maktab_polo.settings import GOOGLE_PLACES_KEY
from .emails import send_otp_via_email
from .models import User, Address
from .serializers import UserSerializer, AddressSerializer, UserRegister, VerifyAccountSerializer
from .tasks import delete_inactive_users


class PlacesProxyView(views.APIView):
    """
       API endpoint to proxy requests to Google Places API for fetching necessary scripts.

       Methods:
       - get(self, request, *args, **kwargs):
           Retrieves the Google Places API script using the provided API key and returns the response.
       """
    def get(self, request, *args, **kwargs):
        url = f"https://maps.googleapis.com/maps/api/js?key={GOOGLE_PLACES_KEY}&libraries=places&query=&libraries=places"
        response = requests.get(url)

        return Response(response.json())


class UserViewSet(viewsets.ModelViewSet):
    """
       API endpoint that allows users to be viewed or edited.

       Attributes:
       - queryset: Queryset containing all User objects.
       - serializer_class: Serializer class for User objects.
       """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    delete_inactive_users()


class AddressViewSet(viewsets.ModelViewSet):
    """
      API endpoint that allows addresses to be viewed or edited.

      Attributes:
      - queryset: Queryset containing all Address objects.
      - serializer_class: Serializer class for Address objects.
      """
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class RegisterView(APIView):
    """
      API endpoint for user registration and OTP email verification.

      Methods:
      - post(self, request):
          Handles POST requests for user registration.
          - Validates user data using UserRegister serializer.
          - Saves the user if valid and sends an OTP email for verification.
          - Returns a response with status and data messages.
      """

    def post(self, request):
        try:
            serializer = UserRegister(data=request.data)
            # serializer.is_valid(raise_exception=True)
            if serializer.is_valid():
                serializer.save()
                send_otp_via_email(serializer.data['email'])
                return Response({
                    "status": 200,
                    "message": "User successfully registered check email for verification click on the button Verfy Otp in the bottum right hand corner",
                    "data": serializer.data
                })
            else:
                return Response({
                    'status': 400,
                    'message': 'somthing went wrong',
                    'data': serializer.errors
                })

        except Exception as e:
            print(e)


class LoginView(APIView):
    """
     API endpoint for user login and JWT token generation.

     Methods:
     - post(self, request):
         Handles POST requests for user login.
         - Authenticates user based on email and password.
         - Generates a JWT token with user ID and expiration time.
         - Sets the JWT token in a response cookie for client-side storage.
         - Returns a response with the JWT token.
     """
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed("user not found")
        if not user.check_password(password):
            raise AuthenticationFailed("password not provided")
        payload = {
            'id': user.id,
            'exp': datetime.datetime.now() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.now()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        data = {"jwt": token}
        response = Response(data)
        response.set_cookie(key='jwt', value=token, httponly=True)
        # response.data = {"jwt": token}
        return response


@csrf_exempt
def customer_login(request):
    """
     Custom login view for authenticating users via POST request.

     Logic:
     - Authenticates the user based on email and password.
     - Returns a JSON response indicating successful login or invalid credentials.
     """
    email = request.POST.get('email', None)
    password = request.POST.get('password')
    user = authenticate(request, email=email, password=password)
    if user:
        msg = {
            "bool": True,
            "user": user.email
        }
    else:
        msg = {
            "bool": False,
            "message": "invalid email or password"
        }
    # notify_user_account_status(user.id)

    return JsonResponse(msg)


class UserAPIView(APIView):
    """
      API endpoint for user authentication and JWT token validation.

      Methods:
      - get(self, request):
          Handles GET requests to validate JWT token and retrieve user data.
          - Verifies the JWT token and retrieves user information based on the token.
          - Returns a response with the decoded token data.
      """
    def get(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed("unauthenticated")
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("unauthenticated")
        user = User.objects.filter(payload['id']).first()
        return Response(token)


class LogoutView(APIView):
    """
      API endpoint for user logout and clearing JWT token.

      Methods:
      - post(self, request):
          Handles POST requests to clear the JWT token stored in the client's cookies.
          - Deletes the JWT token cookie from the response.
          - Returns a response indicating successful logout.
      """
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {'message': 'you have logged out'}
        return Response(response)


class VerificationView(APIView):
    """
       API endpoint for verifying user accounts using OTP.

       Methods:
       - post(self, request):
           Handles POST requests for verifying user accounts with OTP.
           - Validates the email and OTP provided in the request.
           - Checks if the email exists, OTP is correct, and token is not expired.
           - Activates the user account if verification is successful.
           Returns:
           - JSON response indicating the verification status and message.

       - patch(self, request):
           Handles PATCH requests for resending OTP and activating user accounts.
           - Resends the OTP email for the provided email address.
           - Optionally activates the user account on successful OTP resend.
           Returns:
           - JSON response confirming the OTP resend status and message.

       Note:
       - The 'post' method is used for initial account verification with OTP.
       - The 'patch' method is used for OTP resend and potential user account activation.
       - Responses include status codes, messages, and data for different verification scenarios.
       - Error handling is implemented to manage exceptions and provide appropriate responses.
       """
    def post(self, request):
        try:
            serializer = VerifyAccountSerializer(data=request.data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                otp = serializer.validated_data['otp']
                user = User.objects.filter(email=email)
                if not user.exists():
                    return Response({
                        'status': 400,
                        'message': 'invalid email',
                        'data': serializer.errors
                    })
                if user[0].otp != otp:
                    return Response({
                        'status': 400,
                        'message': 'wrong otp',
                        'data': serializer.errors
                    })

                user = user.first()
                if now() >= user.token_valid_until:
                    return Response({
                        'status': 403,
                        'message': 'your otp expired',
                        'data': serializer.errors
                    })
                else:
                    user.is_active = True
                    user.save()
                    return Response({
                        "status": 200,
                        "message": "User verified",
                        "data": serializer.data
                    })
            else:
                return Response({
                    'status': 400,
                    'message': 'somthing went wrong',
                    'data': serializer.errors
                })

        except Exception as e:
            return Response({
                'status': 500,
                'message': 'An error occurred during verification',
                'data': {}  # Don't send sensitive error details in production
            })

    def patch(self, request):
        try:
            email = request.data['email']
            user = User.objects.filter(email=email).first()

            if not user:
                return Response({
                    "status": 404,
                    "message": "User with this email address doesn't exist.",
                    "data": {}
                })

            # OTP Resend and User Activation Logic
            if send_otp_via_email(email):
                # user.is_active = True # Activate the user on successful resend
                # user.save()  # Save the change
                return Response({
                    'status': 200,
                    'message': 'OTP resent successfully. Please try to verfy again you have 5 minutes',
                    'data': {}
                })
            else:
                return Response({
                    'status': 429,  # Can use 429 or 503
                    'message': f'Cannot resend OTP at this time. Please try again later in .',
                    'data': {}
                })

        except Exception as e:
            print(e)  # Replace with proper logging in production
            return Response({
                'status': 500,
                'message': 'An error occurred. Please try again.',
                'data': {}
            })


class LoginWithOTPView(APIView):
    def post(self, request):
        try:
            serializer = VerifyAccountSerializer(data=request.data)
            if serializer.is_valid():
                email = serializer.validated_data['email']
                otp = serializer.validated_data['otp']
                user = User.objects.filter(email=email)

                if not user.exists():
                    return Response({
                        'status': 400,
                        'message': 'Invalid email',
                        'data': serializer.errors
                    })

                user = user.first()

                if user.otp != otp:
                    return Response({
                        'status': 400,
                        'message': 'Incorrect OTP',
                        'data': serializer.errors
                    })

                if now() >= user.token_valid_until:
                    return Response({
                        'status': 403,
                        'message': 'Your OTP has expired',
                        'data': serializer.errors
                    })

                # Generate JWT token
                payload = {
                    'id': user.id,
                    'exp': datetime.datetime.now() + datetime.timedelta(minutes=60),
                    'iat': datetime.datetime.now()
                }
                token = jwt.encode(payload, 'secret', algorithm='HS256')

                # Set JWT token in response cookie for client-side storage
                response = Response({
                    "status": 200,
                    "message": "Logged in",
                    "data": serializer.data,
                    "jwt": token.decode('utf-8')  # Convert bytes to string for JSON serialization
                })
                response.set_cookie(key='jwt', value=token, httponly=True)

                return response

            else:
                return Response({
                    'status': 400,
                    'message': 'Something went wrong',
                    'data': serializer.errors
                })

        except Exception as e:
            return Response({
                'status': 500,
                'message': 'An error occurred during login',
                'data': {}
            })

    def patch(self, request):
        try:
            email = request.data['email']
            user = User.objects.filter(email=email).first()

            if not user:
                return Response({
                    "status": 404,
                    "message": "User with this email address doesn't exist.",
                    "data": {}
                })

            # OTP Resend and User Activation Logic
            if send_otp_via_email(email):
                # user.is_active = True # Activate the user on successful resend
                # user.save()  # Save the change
                return Response({
                    'status': 200,
                    'message': 'OTP resent successfully. Please try to verfy again you have 5 minutes',
                    'data': {}
                })
            else:
                return Response({
                    'status': 429,  # Can use 429 or 503
                    'message': f'Cannot resend OTP at this time. Please try again later in .',
                    'data': {}
                })

        except Exception as e:
            print(e)  # Replace with proper logging in production
            return Response({
                'status': 500,
                'message': 'An error occurred. Please try again.',
                'data': {}
            })
