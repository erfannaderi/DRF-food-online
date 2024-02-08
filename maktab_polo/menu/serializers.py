from rest_framework import serializers
from .models import Category


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'vendor', 'category_name', 'description', 'slug', 'parent_category', 'created_at', 'updated_at',
                  'is_deleted']

    def __init__(self, *args, **kwargs):
        super(CategoryListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'vendor', 'category_name', 'description', 'slug', 'parent_category', 'created_at', 'updated_at',
                  'is_deleted']

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

