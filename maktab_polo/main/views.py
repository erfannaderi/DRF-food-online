# # from django.shortcuts import render
# from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
# from rest_framework import permissions, pagination
# from rest_framework.viewsets import ModelViewSet
#
# from . import models
# from .serializers import  ProductListSerializer, ProductDetailSerializer, \
#     CustomerListSerializer, CustomerDetailSerializer, OrderListSerializer, OrderDetailSerializer, \
#     CustomerAddressSerializer, ProductRattingSerializer, CategoryListSerializer, CategoryDetailSerializer
#
#
# # Create your views here.
# # class VendorList(ListAPIView):
# #     queryset = models.Vendor.objects.all()
# #     serializer_class = VendorListSerializer
# #     # permission_classes = [permissions.IsAuthenticated]
# #
# #
# # class VendorDetail(RetrieveUpdateDestroyAPIView):
# #     queryset = models.Vendor.objects.all()
# #     serializer_class = VendorDetailSerializer
# #     # permission_classes = [permissions.IsAuthenticated]
#
#
# class ProductList(ListCreateAPIView):
#     queryset = models.Product.objects.all()
#     serializer_class = ProductListSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#
#
# class ProductDetail(RetrieveUpdateDestroyAPIView):
#     queryset = models.Product.objects.all()
#     serializer_class = ProductDetailSerializer
#
#
# class CustomerList(ListAPIView):
#     queryset = models.Customer.objects.all()
#     serializer_class = CustomerListSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#
#
# class CustomerDetail(RetrieveUpdateDestroyAPIView):
#     queryset = models.Customer.objects.all()
#     serializer_class = CustomerDetailSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#
#
# class OrderList(ListAPIView):
#     queryset = models.Order.objects.all()
#     serializer_class = OrderListSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#
#
# class OrderDetail(ListAPIView):
#     # queryset = models.OrderItem.objects.all()
#     serializer_class = OrderDetailSerializer
#
#     # pagination_class = pagination.LimitOffsetPagination
#
#     def get_queryset(self):
#         # return super().get_queryset()
#         order_id = self.kwargs['pk']
#         order = models.Order.objects.get(pk=order_id)
#         order_items = models.OrderItem.objects.filter(order=order)
#         return order_items
#
#
# class CustomerAddressViewSet(ModelViewSet):
#     queryset = models.CustomerAddress.objects.all()
#     serializer_class = CustomerAddressSerializer
#
#     # def get_queryset(self):
#     #     # return super().get_queryset()
#     #     customer_id = self.kwargs['pk']
#     #     customer = models.Customer.objects.get(pk=customer_id)
#     #     customer_address = models.CustomerAddress.objects.filter(customer=customer)
#     #     return customer_address
#
#
# class ProductRattingViewSet(ModelViewSet):
#     queryset = models.ProductRatting.objects.all()
#     serializer_class = ProductRattingSerializer
#
#
# class CategoryList(ListAPIView):
#     queryset = models.ProductCategory.objects.all()
#     serializer_class = CategoryListSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#
#
# class CategoryDetail(RetrieveUpdateDestroyAPIView):
#     queryset = models.ProductCategory.objects.all()
#     serializer_class = CategoryDetailSerializer
#     # permission_classes = [permissions.IsAuthenticated]
