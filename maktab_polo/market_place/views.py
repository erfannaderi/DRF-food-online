# views.py
from drf_spectacular.utils import extend_schema
from rest_framework import viewsets
from .models import Discount, Cart, Tax
from .serializers import DiscountSerializer, CartSerializer, TaxSerializer


@extend_schema(responses=DiscountSerializer)
class DiscountViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer


@extend_schema(responses=CartSerializer)
class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


@extend_schema(responses=TaxSerializer)
class TaxViewSet(viewsets.ModelViewSet):
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer
