from django.db import models
from django.utils.translation import gettext_lazy as _
from accounts.models import User
from menu.models import FoodItem
from main.models import BaseModel

class Discount(models.Model):
    """
    Model representing a discount that can be applied to a user's cart.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, help_text="The user associated with the discount.")
    discount_code = models.CharField(max_length=50, help_text="The unique code for the discount.")
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2, verbose_name='Discount Percentage (%)', help_text="The percentage of discount applied.")
    minimum = models.DecimalField(max_digits=5, decimal_places=2, default=10, help_text="The minimum amount required for the discount to be applicable.")
    maximum = models.DecimalField(max_digits=12, decimal_places=2, default=800, help_text="The maximum amount up to which the discount is valid.")
    start_date = models.DateField(help_text="The start date of the discount validity.")
    counter = models.IntegerField(default=0, help_text="The usage counter for the discount.")
    end_date = models.DateField(help_text="The end date of the discount validity.")
    created_at = models.DateTimeField(auto_now_add=True, help_text="The date and time the discount was created.")
    updated_at = models.DateTimeField(auto_now=True, help_text="The date and time the discount was last updated.")
    is_deleted = models.BooleanField(default=False, help_text="A flag indicating if the discount is deleted or not.")

    def __str__(self):
        return f"{self.user.username}'s Discount ({self.discount_code})"

class Cart(models.Model):
    """
    Model representing a user's cart containing items and discounts.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_index=True, help_text="The user who owns the cart.")
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE, help_text="The food item added to the cart.")
    quantity = models.SmallIntegerField(help_text="The quantity of the food item in the cart.")
    discount = models.ForeignKey(Discount, on_delete=models.CASCADE, blank=True, null=True, related_name='cart_discount', help_text="The discount applied to the cart.")
    created_at = models.DateTimeField(auto_now_add=True, help_text="The date and time the cart entry was created.")
    updated_at = models.DateTimeField(auto_now=True, help_text="The date and time the cart entry was last updated.")
    is_deleted = models.BooleanField(default=False, help_text="A flag indicating if the cart entry is deleted or not.")

    def __str__(self):
        return str(self.user)

class Tax(models.Model):
    """
    Model representing a tax type and percentage.
    """
    tax_type = models.CharField(max_length=20, unique=True, db_index=True, help_text="The type of tax.")
    tax_percentage = models.DecimalField(max_digits=5, decimal_places=2, verbose_name='Tax Percentage (%)', help_text="The percentage of tax applied.")
    is_active = models.BooleanField(default=True, help_text="A flag indicating if the tax is active or not.")
    is_deleted = models.BooleanField(default=False, help_text="A flag indicating if the tax is deleted or not.")

    class Meta:
        verbose_name = _('tax')
        verbose_name_plural = _('taxes')

    def __str__(self):
        return self.tax_type
