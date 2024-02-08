# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PaymentViewSet, OrderViewSet, OrderedFoodViewSet

router = DefaultRouter()
router.register(r'payments', PaymentViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'orderedfoods', OrderedFoodViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
