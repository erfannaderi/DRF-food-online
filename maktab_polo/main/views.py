from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import OTPSerializer
import redis

class GenerateOTP(APIView):
    def post(self, request):
        serializer = OTPSerializer(data=request.data)
        if serializer.is_valid():
            phone_number = serializer.validated_data['phone_number']
            # Generate and store OTP using the signal
            # Return success response
            return Response({"detail": "OTP generated and sent to the phone number"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VerifyOTP(APIView):
    def post(self, request):
        serializer = OTPSerializer(data=request.data)
        if serializer.is_valid():
            phone_number = serializer.validated_data['phone_number']
            otp_entered = serializer.validated_data['otp']
            # Verify OTP from Redis
            r = redis.StrictRedis(host='localhost', port=6379, db=0)
            stored_otp = r.get(f"otp:{phone_number}")
            if stored_otp and stored_otp.decode('utf-8') == otp_entered:
                # OTP is verified successfully
                return Response({"detail": "OTP verified successfully"}, status=status.HTTP_200_OK)
            else:
                return Response({"detail": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
