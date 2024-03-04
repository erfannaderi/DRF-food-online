# serializers.py
from rest_framework import serializers

from .models import User, Address


class UserSerializer(serializers.ModelSerializer):
    """
       Serializer for the User model.
    """
    class Meta:
        model = User
        fields = '__all__'



class AddressSerializer(serializers.ModelSerializer):
    """
    Serializer for the Address model.
    """
    class Meta:
        model = Address
        fields = '__all__'


class UserRegister(serializers.ModelSerializer):
    """
    Serializer for user registration.
    """

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name', 'role')
        extra_kwargs = {
            'password': {'write_only': True}

        }

    def create(self, validated_data):
        """
              Method to create a new user instance with hashed password.
        """
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance


class VerifyAccountSerializer(serializers.Serializer):
    """
     Serializer for verifying user account with email and OTP.
     """
    email = serializers.EmailField()
    otp = serializers.CharField()
