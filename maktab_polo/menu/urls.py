from django.urls import path
from rest_framework.routers import DefaultRouter

from menu.views import CategoryList, CategoryDetail, ProductRattingViewSet, FoodItemViewSet, RawItemViewSet

router = DefaultRouter()
router.register(r'fooditems', FoodItemViewSet)
router.register('product-ratting', ProductRattingViewSet)
router.register(r'rawitems', RawItemViewSet)
urlpatterns = [
    path('Categories/', CategoryList.as_view()),
    path('Category/<int:pk>/', CategoryDetail.as_view()),
]
urlpatterns += router.urls
