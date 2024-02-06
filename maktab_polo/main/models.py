from django.contrib.auth.models import User
from django.db import models
from django.db import models
from django.utils import timezone


class SoftDeleteManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted_at__isnull=True)


class BaseModel(models.Model):
    objects = SoftDeleteManager()
    deleted_at = models.DateTimeField(null=True, blank=True)

    def delete(self, *args, **kwargs):
        self.deleted_at = timezone.now()
        self.save()

    def restore(self):
        self.deleted_at = None
        self.save()

    class Meta:
        abstract = True


# Create your seller models
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.user.username


class ProductCategory(models.Model):
    title = models.CharField(max_length=100)
    detail = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, null=True, related_name='category_product')
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    detail = models.TextField(blank=True, null=True)
    price = models.FloatField(default=0)

    def __str__(self):
        return self.title


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.title


class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_addresses')
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address


class ProductRatting(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='ratting_customers')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_ratings')
    ratings = models.IntegerField()
    reviews = models.TextField(blank=True, null=True)
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.ratings} - {self.reviews}'
