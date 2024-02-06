from rest_framework import serializers

from main.models import Vendor, Product, Customer, Order, OrderItem, CustomerAddress, ProductRatting, ProductCategory


class VendorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(VendorListSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductListSerializer(serializers.ModelSerializer):
    product_ratings = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'category', 'title', 'detail', 'price', 'product_ratings']

    def __init__(self, *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductDetailSerializer(serializers.ModelSerializer):
    # product_ratings = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    product_ratings = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'category', 'title', 'detail', 'price', 'product_ratings']

    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CustomerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'mobile']

    def __init__(self, *args, **kwargs):
        super(CustomerListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'mobile']

    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class OrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'customer', 'order_time']

    def __init__(self, *args, **kwargs):
        super(OrderListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product']

    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAddress
        fields = ('id', 'customer', 'address', 'default_address')

    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class ProductRattingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRatting
        fields = ('id', 'customer', 'product', 'ratings', 'reviews', 'add_time')

    def __init__(self, *args, **kwargs):
        super(ProductRattingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id', 'title', 'detail']

    def __init__(self, *args, **kwargs):
        super(CategoryListSerializer, self).__init__(*args, **kwargs)
        # self.Meta.depth = 1


class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id', 'title', 'detail']

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
