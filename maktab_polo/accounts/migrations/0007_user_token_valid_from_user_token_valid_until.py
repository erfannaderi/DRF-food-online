# Generated by Django 5.0.1 on 2024-02-19 22:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_remove_user_last_otp_sent'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='token_valid_from',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 19, 22, 24, 0, 766725, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AddField(
            model_name='user',
            name='token_valid_until',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 19, 22, 29, 0, 766725, tzinfo=datetime.timezone.utc)),
        ),
    ]