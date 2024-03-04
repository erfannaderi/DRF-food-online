# serializers.py
from rest_framework import serializers
from .models import Discount, Cart, Tax


class DiscountSerializer(serializers.ModelSerializer):
    """
      Serializer for Discount model.
      """
    class Meta:
        model = Discount
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    """
    Serializer for Cart model.
    """
    class Meta:
        model = Cart
        fields = '__all__'


class TaxSerializer(serializers.ModelSerializer):
    """
    Serializer for Tax model.
    """
    class Meta:
        model = Tax
        fields = '__all__'
