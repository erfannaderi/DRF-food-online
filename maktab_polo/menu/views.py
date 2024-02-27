# views
from drf_spectacular.utils import extend_schema
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet

from menu.models import Category, ProductRatting, FoodItem, RawItem
from menu.serializers import CategoryListSerializer, CategoryDetailSerializer, ProductRattingSerializer, \
    FoodItemSerializer, RawItemSerializer


@extend_schema(responses=CategoryListSerializer)
class CategoryList(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['category_name', 'description', 'slug']


@extend_schema(responses=CategoryDetailSerializer)
class CategoryDetail(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer


@extend_schema(responses=ProductRattingSerializer)
class ProductRattingViewSet(ModelViewSet):
    queryset = ProductRatting.objects.all()
    serializer_class = ProductRattingSerializer


# class FoodItemPagination(PageNumberPagination):
#     page_size = 1
#     page_size_query_param = 'page_size'
#     max_page_size = 100


@extend_schema(responses=FoodItemSerializer)
class FoodItemViewSet(ModelViewSet):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['food_title', 'description', 'slug']

    def get_queryset(self):
        qs = super().get_queryset()

        if 'category' in self.request.GET:
            category_id = self.request.GET['category']
            category = Category.objects.get(id=category_id)
            qs = qs.filter(category=category)

        return qs

    # def list(self, request, *args, **kwargs):
    #     cached_data = cache.get('food_items')  # Check if data is in cache
    #
    #     if cached_data:
    #         return Response(cached_data)
    #
    #     queryset = self.filter_queryset(self.get_queryset())
    #     page = self.paginate_queryset(queryset)
    #
    #     if page is not None:
    #         serializer = self.get_serializer(page, many=True)
    #         response = self.get_paginated_response(serializer.data)
    #
    #         # Cache the paginated data for future requests
    #         cache.set('food_items', response.data, timeout=60 * 60)  # Cache for 1 hour
    #
    #         return response
    #
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)


@extend_schema(responses=RawItemSerializer)
class RawItemViewSet(ModelViewSet):
    queryset = RawItem.objects.all()
    serializer_class = RawItemSerializer
