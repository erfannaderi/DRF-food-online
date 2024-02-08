# serializers.py
from rest_framework import serializers
from .models import Payment, Order, OrderedFood


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderedFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderedFood
        fields = '__all__'
