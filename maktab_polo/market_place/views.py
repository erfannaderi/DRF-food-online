from django.core.cache import cache
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Discount, Cart, Tax
from .serializers import DiscountSerializer, CartSerializer, TaxSerializer


class DiscountViewSet(viewsets.ModelViewSet):
    """
       A viewset for handling Discount objects with caching enabled for list and retrieve actions.
    """
    queryset = Discount.objects.all()
    serializer_class = DiscountSerializer

    @method_decorator(cache_page(60 * 60 * 2))  # Cache for 2 hours
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @method_decorator(cache_page(60 * 60 * 2))  # Cache for 2 hours
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)


class CartViewSet(viewsets.ModelViewSet):
    """
       A viewset for handling Cart objects with caching enabled for the list action.
    """
    queryset = Cart.objects.select_related('user', 'food_item', 'discount').all()
    serializer_class = CartSerializer

    def list(self, request, *args, **kwargs):
        cached_data = cache.get('cart')  # Check if data is in cache

        if cached_data:
            return Response(cached_data)

        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        response = Response(serializer.data)

        # Cache the data for future requests
        cache.set('cart', serializer.data, timeout=60 * 60)  # Cache for 1 hour

        return response


class TaxViewSet(viewsets.ModelViewSet):
    """
       A viewset for handling Tax objects without caching.
       """
    queryset = Tax.objects.all()
    serializer_class = TaxSerializer
