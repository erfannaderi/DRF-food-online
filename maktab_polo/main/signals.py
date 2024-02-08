# signals.py

from django.dispatch import receiver
from django.db.models.signals import pre_save
from .models import OTP
import random
import string
import redis

@receiver(pre_save, sender=OTP)
def generate_otp(sender, instance, **kwargs):
    if not instance.otp:
        instance.otp = ''.join(random.choices(string.digits, k=6))

    # Store the OTP in Redis
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    r.set(f"otp:{instance.phone_number}", instance.otp, ex=300)