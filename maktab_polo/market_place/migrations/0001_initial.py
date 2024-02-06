# Generated by Django 5.0.1 on 2024-02-06 19:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tax',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('tax_type', models.CharField(db_index=True, max_length=20, unique=True)),
                ('tax_percentage', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Tax Percentage (%)')),
                ('is_active', models.BooleanField(default=True)),
                ('is_deleted', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'tax',
                'verbose_name_plural': 'taxes',
            },
        ),
        migrations.CreateModel(
            name='Discount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('discount_code', models.CharField(max_length=50)),
                ('discount_percentage', models.DecimalField(decimal_places=2, max_digits=5, verbose_name='Discount Percentage (%)')),
                ('minimum', models.DecimalField(decimal_places=2, default=10, max_digits=5)),
                ('maximum', models.DecimalField(decimal_places=2, default=800, max_digits=12)),
                ('start_date', models.DateField()),
                ('counter', models.IntegerField(default=0)),
                ('end_date', models.DateField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.user')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('quantity', models.SmallIntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('food_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.fooditem')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.user')),
                ('discount', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='market_place.discount')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
