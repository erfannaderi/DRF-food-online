# Generated by Django 5.0.1 on 2024-02-08 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0004_remove_openinghours_deleted_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='vendor',
            name='restaurant_picture',
            field=models.ImageField(blank=True, null=True, upload_to='vendor/picture'),
        ),
    ]
