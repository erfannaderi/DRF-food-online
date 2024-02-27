# views.py
import datetime

import jwt
from django.utils.timezone import now
from rest_framework import viewsets
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView

from maktab_polo.settings import GOOGLE_PLACES_KEY
from .emails import send_otp_via_email
from .models import User, Address
from .serializers import UserSerializer, AddressSerializer, UserRegister, VerifyAccountSerializer
import requests
from rest_framework import views
from rest_framework.response import Response

class PlacesProxyView(views.APIView):
    def get(self, request, *args, **kwargs):

        url = f"https://maps.googleapis.com/maps/api/js?key={GOOGLE_PLACES_KEY}&libraries=places&query=&libraries=places"
        response = requests.get(url)

        return Response(response.json())



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class RegisterView(APIView):
    def post(self, request):
        try:
            serializer = UserRegister(data=request.data)
            # serializer.is_valid(raise_exception=True)
            if serializer.is_valid():
                serializer.save()
                send_otp_via_email(serializer.data['email'])
                return Response({
                    "status": 200,
                    "message": "User successfully registered check email for verification",
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


# class UserAPIView(APIView):
#     def get(self, request):
#         token = request.COOKIES.get('jwt')
#         if not token:
#             raise AuthenticationFailed("unauthenticated")
#         try:
#             payload = jwt.decode(token, 'secret', algorithm=['HS256'])
#         except jwt.ExpiredSignatureError:
#             raise AuthenticationFailed("unauthenticated")
#         user = User.objects.filter(payload['id']).first()
#         return Response(token)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {'message': 'you have logged out'}
        return Response(response)


class VerificationView(APIView):
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
