from django.urls import path
from rest_framework.routers import DefaultRouter

from main.views import VendorList, VendorDetail, ProductList, ProductDetail, CustomerList, CustomerDetail, OrderList, \
    OrderDetail, CustomerAddressViewSet, ProductRattingViewSet

router = DefaultRouter()
router.register('customer-address', CustomerAddressViewSet)
router.register('product-ratting', ProductRattingViewSet)
urlpatterns = [
    path('vendors/', VendorList.as_view()),
    path('vendor/<int:pk>/', VendorDetail.as_view()),
    path('products/', ProductList.as_view()),
    path('product/<int:pk>/', ProductDetail.as_view()),
    path('customer/', CustomerList.as_view()),
    path('customer/<int:pk>/', CustomerDetail.as_view()),
    path('order/', OrderList.as_view()),
    path('order/<int:pk>/', OrderDetail.as_view()),
]
urlpatterns += router.urls
