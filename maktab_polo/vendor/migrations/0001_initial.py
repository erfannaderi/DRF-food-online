# Generated by Django 5.0.1 on 2024-02-06 19:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vendor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('vendor_name', models.CharField(max_length=50)),
                ('vendor_slug', models.SlugField(max_length=100, unique=True)),
                ('vendor_license', models.ImageField(upload_to='vendor/license')),
                ('is_approved', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user', to='accounts.user')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.SmallIntegerField(choices=[(1, 'Operator'), (2, 'Delivery Person'), (3, 'Manager'), (4, 'Accountant'), (5, 'Chef')])),
                ('user', models.OneToOneField(limit_choices_to={'role': 1}, on_delete=django.db.models.deletion.CASCADE, to='accounts.user')),
                ('vendor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vendor.vendor')),
            ],
        ),
        migrations.CreateModel(
            name='OpeningHours',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('day', models.SmallIntegerField(choices=[(1, 'saturday'), (2, 'sunday'), (3, 'monday'), (4, 'tuesday'), (5, 'wednesday'), (6, 'thursday'), (7, 'friday')])),
                ('from_hours', models.CharField(blank=True, choices=[('12:00 AM', '12:00 AM'), ('12:30 AM', '12:30 AM'), ('01:00 AM', '01:00 AM'), ('01:30 AM', '01:30 AM'), ('02:00 AM', '02:00 AM'), ('02:30 AM', '02:30 AM'), ('03:00 AM', '03:00 AM'), ('03:30 AM', '03:30 AM'), ('04:00 AM', '04:00 AM'), ('04:30 AM', '04:30 AM'), ('05:00 AM', '05:00 AM'), ('05:30 AM', '05:30 AM'), ('06:00 AM', '06:00 AM'), ('06:30 AM', '06:30 AM'), ('07:00 AM', '07:00 AM'), ('07:30 AM', '07:30 AM'), ('08:00 AM', '08:00 AM'), ('08:30 AM', '08:30 AM'), ('09:00 AM', '09:00 AM'), ('09:30 AM', '09:30 AM'), ('10:00 AM', '10:00 AM'), ('10:30 AM', '10:30 AM'), ('11:00 AM', '11:00 AM'), ('11:30 AM', '11:30 AM'), ('12:00 PM', '12:00 PM'), ('12:30 PM', '12:30 PM'), ('01:00 PM', '01:00 PM'), ('01:30 PM', '01:30 PM'), ('02:00 PM', '02:00 PM'), ('02:30 PM', '02:30 PM'), ('03:00 PM', '03:00 PM'), ('03:30 PM', '03:30 PM'), ('04:00 PM', '04:00 PM'), ('04:30 PM', '04:30 PM'), ('05:00 PM', '05:00 PM'), ('05:30 PM', '05:30 PM'), ('06:00 PM', '06:00 PM'), ('06:30 PM', '06:30 PM'), ('07:00 PM', '07:00 PM'), ('07:30 PM', '07:30 PM'), ('08:00 PM', '08:00 PM'), ('08:30 PM', '08:30 PM'), ('09:00 PM', '09:00 PM'), ('09:30 PM', '09:30 PM'), ('10:00 PM', '10:00 PM'), ('10:30 PM', '10:30 PM'), ('11:00 PM', '11:00 PM'), ('11:30 PM', '11:30 PM')], max_length=22)),
                ('to_hours', models.CharField(blank=True, choices=[('12:00 AM', '12:00 AM'), ('12:30 AM', '12:30 AM'), ('01:00 AM', '01:00 AM'), ('01:30 AM', '01:30 AM'), ('02:00 AM', '02:00 AM'), ('02:30 AM', '02:30 AM'), ('03:00 AM', '03:00 AM'), ('03:30 AM', '03:30 AM'), ('04:00 AM', '04:00 AM'), ('04:30 AM', '04:30 AM'), ('05:00 AM', '05:00 AM'), ('05:30 AM', '05:30 AM'), ('06:00 AM', '06:00 AM'), ('06:30 AM', '06:30 AM'), ('07:00 AM', '07:00 AM'), ('07:30 AM', '07:30 AM'), ('08:00 AM', '08:00 AM'), ('08:30 AM', '08:30 AM'), ('09:00 AM', '09:00 AM'), ('09:30 AM', '09:30 AM'), ('10:00 AM', '10:00 AM'), ('10:30 AM', '10:30 AM'), ('11:00 AM', '11:00 AM'), ('11:30 AM', '11:30 AM'), ('12:00 PM', '12:00 PM'), ('12:30 PM', '12:30 PM'), ('01:00 PM', '01:00 PM'), ('01:30 PM', '01:30 PM'), ('02:00 PM', '02:00 PM'), ('02:30 PM', '02:30 PM'), ('03:00 PM', '03:00 PM'), ('03:30 PM', '03:30 PM'), ('04:00 PM', '04:00 PM'), ('04:30 PM', '04:30 PM'), ('05:00 PM', '05:00 PM'), ('05:30 PM', '05:30 PM'), ('06:00 PM', '06:00 PM'), ('06:30 PM', '06:30 PM'), ('07:00 PM', '07:00 PM'), ('07:30 PM', '07:30 PM'), ('08:00 PM', '08:00 PM'), ('08:30 PM', '08:30 PM'), ('09:00 PM', '09:00 PM'), ('09:30 PM', '09:30 PM'), ('10:00 PM', '10:00 PM'), ('10:30 PM', '10:30 PM'), ('11:00 PM', '11:00 PM'), ('11:30 PM', '11:30 PM')], max_length=22)),
                ('is_closed', models.BooleanField(default=False)),
                ('is_deleted', models.BooleanField(default=False)),
                ('vendor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vendor.vendor')),
            ],
            options={
                'ordering': ('day', 'from_hours', 'to_hours'),
                'unique_together': {('vendor', 'day', 'from_hours', 'to_hours')},
            },
        ),
    ]