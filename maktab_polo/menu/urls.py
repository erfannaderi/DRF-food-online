from django.urls import path
from rest_framework.routers import DefaultRouter

from menu.views import CategoryList, CategoryDetail

router = DefaultRouter()
# router.register('customer-address', CustomerAddressViewSet)
# router.register('product-ratting', ProductRattingViewSet)
urlpatterns = [
    path('Categories/', CategoryList.as_view()),
    path('Category/<int:pk>/', CategoryDetail.as_view()),
]
urlpatterns += router.urls
