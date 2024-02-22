# import random
#
# from django.conf import settings
# from django.core.cache import cache
# from django.core.mail import send_mail
#
# from accounts.models import User
#
#
# def send_otp_via_email(email):
#     if cache.get(email) :
#         return False
#     try:
#         subject = f'your email verification otp'
#         otp = random.randint(100000, 999999)
#         cache.set(email, otp, timeout=60 * 5)  # 60seconds * 5 = 5min
#         email_from = settings.EMAIL_HOST_USER
#         message = f'you otp is {otp}'
#         send_mail(subject, message, email_from, [email])
#         user_obj = User.objects.get(email=email)
#         user_obj.otp = otp
#         user_obj.save()
#         return  True
#     except Exception as e:
#         print(e)

import random
from datetime import timedelta

from django.conf import settings
from django.core.cache import cache
from django.core.mail import send_mail
from django.utils.timezone import now

from accounts.models import User


def send_otp_via_email(email):
    otp_key = f"otp_{email}"  # Cache key for the OTP
    cooldown_key = f"cooldown_{email}"  # Cache key for the cooldown period

    # Check if a cooldown is active
    if cache.get(cooldown_key):
        return False  # Cooldown in progress

    # Generate or retrieve an OTP
    otp = cache.get(otp_key)
    if not otp:
        # Generate a new OTP if none exists
        otp = random.randint(100000, 999999)
        cache.set(otp_key, otp, timeout=60)  # 5-minute OTP expiry

    # Send the email
    try:
        subject = 'Your email verification OTP'
        email_from = settings.EMAIL_HOST_USER
        message = f'Your OTP is {otp}'
        send_mail(subject, message, email_from, [email])

        # Update User model
        user_obj = User.objects.get(email=email)
        user_obj.otp = otp
        user_obj.token_valid_from = now()
        user_obj.token_valid_until = now() + timedelta(seconds=300)
        user_obj.save()


    except Exception as e:
        print(e)
        return False  # Indicate email sending failure

    # Set a cooldown period
    cache.set(cooldown_key, True, timeout=60)  # 5-minute cooldown

    return True  # Indicate success
