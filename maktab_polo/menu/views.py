# from django.shortcuts import render
# from rest_framework import permissions, pagination
# from django.views.decorators.cache import cache_page
from drf_spectacular.utils import extend_schema
from rest_framework import filters
# from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
# from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet

from menu.models import Category, ProductRatting, FoodItem, RawItem
from menu.serializers import CategoryListSerializer, CategoryDetailSerializer, ProductRattingSerializer, \
    FoodItemSerializer, RawItemSerializer


# Create your views here.

# class FoodItemPagination(PageNumberPagination):
#     page_size = 1
#     page_size_query_param = 'page_size'
#     max_page_size = 1


@extend_schema(responses=CategoryListSerializer)
class CategoryList(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['category_name', 'description', 'slug', 'vendor']
    # permission_classes = [permissions.IsAuthenticated]


@extend_schema(responses=CategoryDetailSerializer)
class CategoryDetail(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
    # pagination_class = FoodItemPagination


@extend_schema(responses=ProductRattingSerializer)
class ProductRattingViewSet(ModelViewSet):
    queryset = ProductRatting.objects.all()
    serializer_class = ProductRattingSerializer


@extend_schema(responses=FoodItemSerializer)
class FoodItemViewSet(ModelViewSet):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'vendor']


@extend_schema(responses=RawItemSerializer)
class RawItemViewSet(ModelViewSet):
    queryset = RawItem.objects.all()
    serializer_class = RawItemSerializer
