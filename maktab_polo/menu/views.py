from django.shortcuts import render
from rest_framework import permissions, pagination
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet

from menu.models import Category
from menu.serializers import CategoryListSerializer, CategoryDetailSerializer


# Create your views here.

class CategoryList(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer
    # permission_classes = [permissions.IsAuthenticated]


class CategoryDetail(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
