# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VendorViewSet, OpeningHoursViewSet, StaffViewSet

router = DefaultRouter()
router.register(r'vendors', VendorViewSet)
router.register(r'openinghours', OpeningHoursViewSet)
router.register(r'staff', StaffViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
