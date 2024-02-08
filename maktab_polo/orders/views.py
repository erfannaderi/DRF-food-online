from rest_framework import viewsets
from .models import Payment, Order, OrderedFood
from .serializers import PaymentSerializer, OrderSerializer, OrderedFoodSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderedFoodViewSet(viewsets.ModelViewSet):
    queryset = OrderedFood.objects.all()
    serializer_class = OrderedFoodSerializer
