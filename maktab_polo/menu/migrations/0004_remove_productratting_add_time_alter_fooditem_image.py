# Generated by Django 5.0.1 on 2024-02-15 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_remove_category_deleted_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productratting',
            name='add_time',
        ),
        migrations.AlterField(
            model_name='fooditem',
            name='image',
            field=models.ImageField(upload_to='media/food_images'),
        ),
    ]