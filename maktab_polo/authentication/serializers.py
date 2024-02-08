from rest_framework import serializers
from accounts.models import User


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()  # we ganna put number maybe
    password = serializers.CharField(style={'input_type': 'password'})


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = '__all__'
