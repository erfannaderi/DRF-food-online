# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DiscountViewSet, CartViewSet, TaxViewSet

router = DefaultRouter()
router.register(r'discounts', DiscountViewSet)
router.register(r'carts', CartViewSet)
router.register(r'taxes', TaxViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
