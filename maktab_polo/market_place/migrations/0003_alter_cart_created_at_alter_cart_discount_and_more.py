# Generated by Django 5.0.1 on 2024-03-04 13:42

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market_place', '0002_remove_cart_deleted_at_remove_discount_deleted_at_and_more'),
        ('menu', '0007_remove_fooditem_tags'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, help_text='The date and time the cart entry was created.'),
        ),
        migrations.AlterField(
            model_name='cart',
            name='discount',
            field=models.ForeignKey(blank=True, help_text='The discount applied to the cart.', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cart_discount', to='market_place.discount'),
        ),
        migrations.AlterField(
            model_name='cart',
            name='food_item',
            field=models.ForeignKey(help_text='The food item added to the cart.', on_delete=django.db.models.deletion.CASCADE, to='menu.fooditem'),
        ),
        migrations.AlterField(
            model_name='cart',
            name='is_deleted',
            field=models.BooleanField(default=False, help_text='A flag indicating if the cart entry is deleted or not.'),
        ),
        migrations.AlterField(
            model_name='cart',
            name='quantity',
            field=models.SmallIntegerField(help_text='The quantity of the food item in the cart.'),
        ),
        migrations.AlterField(
            model_name='cart',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, help_text='The date and time the cart entry was last updated.'),
        ),
        migrations.AlterField(
            model_name='cart',
            name='user',
            field=models.ForeignKey(help_text='The user who owns the cart.', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='discount',
            name='counter',
            field=models.IntegerField(default=0, help_text='The usage counter for the discount.'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, help_text='The date and time the discount was created.'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='discount_code',
            field=models.CharField(help_text='The unique code for the discount.', max_length=50),
        ),
        migrations.AlterField(
            model_name='discount',
            name='discount_percentage',
            field=models.DecimalField(decimal_places=2, help_text='The percentage of discount applied.', max_digits=5, verbose_name='Discount Percentage (%)'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='end_date',
            field=models.DateField(help_text='The end date of the discount validity.'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='is_deleted',
            field=models.BooleanField(default=False, help_text='A flag indicating if the discount is deleted or not.'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='maximum',
            field=models.DecimalField(decimal_places=2, default=800, help_text='The maximum amount up to which the discount is valid.', max_digits=12),
        ),
        migrations.AlterField(
            model_name='discount',
            name='minimum',
            field=models.DecimalField(decimal_places=2, default=10, help_text='The minimum amount required for the discount to be applicable.', max_digits=5),
        ),
        migrations.AlterField(
            model_name='discount',
            name='start_date',
            field=models.DateField(help_text='The start date of the discount validity.'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, help_text='The date and time the discount was last updated.'),
        ),
        migrations.AlterField(
            model_name='discount',
            name='user',
            field=models.ForeignKey(help_text='The user associated with the discount.', null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='tax',
            name='is_active',
            field=models.BooleanField(default=True, help_text='A flag indicating if the tax is active or not.'),
        ),
        migrations.AlterField(
            model_name='tax',
            name='is_deleted',
            field=models.BooleanField(default=False, help_text='A flag indicating if the tax is deleted or not.'),
        ),
        migrations.AlterField(
            model_name='tax',
            name='tax_percentage',
            field=models.DecimalField(decimal_places=2, help_text='The percentage of tax applied.', max_digits=5, verbose_name='Tax Percentage (%)'),
        ),
        migrations.AlterField(
            model_name='tax',
            name='tax_type',
            field=models.CharField(db_index=True, help_text='The type of tax.', max_length=20, unique=True),
        ),
    ]