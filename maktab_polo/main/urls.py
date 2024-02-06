from django.urls import path
from rest_framework.routers import DefaultRouter

from main.views import VendorList, VendorDetail, ProductList, ProductDetail, CustomerList, CustomerDetail, OrderList, \
    OrderDetail, CustomerAddressViewSet, ProductRattingViewSet, CategoryDetail, CategoryList

router = DefaultRouter()
router.register('customer-address', CustomerAddressViewSet)
router.register('product-ratting', ProductRattingViewSet)
urlpatterns = [
    # sellers
    path('vendors/', VendorList.as_view()),
    path('vendor/<int:pk>/', VendorDetail.as_view()),
    # products
    path('products/', ProductList.as_view()),
    path('product/<int:pk>/', ProductDetail.as_view()),
    # products Categories
    path('Categories/', CategoryList.as_view()),
    path('Category/<int:pk>/', CategoryDetail.as_view()),
    # customers
    path('customer/', CustomerList.as_view()),
    path('customer/<int:pk>/', CustomerDetail.as_view()),
    # orders
    path('order/', OrderList.as_view()),
    path('order/<int:pk>/', OrderDetail.as_view()),
]
urlpatterns += router.urls
