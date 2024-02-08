from rest_framework import serializers
from .models import Category, ProductRatting, FoodItem, RawItem


class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = '__all__'


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'vendor', 'category_name', 'description', 'slug', 'parent_category', 'created_at', 'updated_at',
                  'is_deleted']

    def __init__(self, *args, **kwargs):
        super(CategoryListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CategoryDetailSerializer(serializers.ModelSerializer):
    fooditems = FoodItemSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'vendor', 'category_name', 'description', 'slug', 'parent_category', 'created_at', 'updated_at',
                  'is_deleted', 'fooditems']

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductRattingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRatting
        fields = ('id', 'customer', 'product', 'ratings', 'reviews', 'add_time')

    def __init__(self, *args, **kwargs):
        super(ProductRattingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class RawItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RawItem
        fields = '__all__'
