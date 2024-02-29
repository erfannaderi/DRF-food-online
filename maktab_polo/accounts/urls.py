# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserViewSet, AddressViewSet, RegisterView, LoginView, VerificationView, PlacesProxyView, \
    customer_login, LoginWithOTPView

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'addresses', AddressViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view()),
    path('customer/login-2/', LoginView.as_view()),
    path('customer/login-OTP/', LoginWithOTPView.as_view()),
    path('customer/login-1/', customer_login),
    path('verify/', VerificationView.as_view()),
    path('places-proxy/', PlacesProxyView.as_view()),
    # path('user/', UserAPIView.as_view()),
]
