from datetime import timedelta

from django.conf import settings
from django.core.mail import send_mail
from django.utils import timezone

from accounts.models import User
from maktab_polo.celery import app


# @app.task
# def notify_user_account_status(user_id):
#     """
#     Celery task to notify a user about their account status.
#
#     Parameters:
#     - user_id: The ID of the user to notify.
#
#     The task sends an email to the user informing them that their account is logged in.
#     """
#     email_from = settings.EMAIL_HOST_USER
#     user = User.objects.get(id=user_id)
#     subject = 'Account Status'
#     message = f'Dear {user.first_name},\n\nYour account is logged in.\n\nThank you for being with us!'
#     recipient_list = [user.email]
#
#     send_mail(subject, message, email_from, recipient_list)


# @app.task
# def send_purchase_confirmation_email(user_id, order_id):
#     """
#     Celery task to send a purchase confirmation email to a user.
#
#     Parameters:
#     - user_id: The ID of the user who made the purchase.
#     - order_id: The ID of the order being confirmed.
#
#     The task sends an email to the user confirming the successful completion of their purchase.
#     """
#     email_from = settings.EMAIL_HOST_USER
#     user = User.objects.get(id=user_id)
#     purchase = Order.objects.get(id=order_id)
#     subject = 'Purchase Confirmation'
#     message = f'Dear {user.username},\n\nYour purchase with ID {purchase.id} has been successfully completed.\n\nThank you for shopping with us!'
#     recipient_list = [user.email]
#
#     send_mail(subject, message, email_from, recipient_list)


@app.task
def delete_inactive_users():
    """
    Celery task to delete inactive users.

    The task deletes users who are marked as inactive and whose registration date is older than 1 minute.
    """
    inactive_users = User.objects.filter(is_active=False, date_joined__lt=timezone.now() - timedelta(minutes=60 * 72))
    inactive_users.delete()
    subject = 'account deleted'
    email_from = settings.EMAIL_HOST_USER
    message = f'your account has been deleted after 3 days due to not acivating it'
    for user in inactive_users:
        send_mail(subject, message, email_from, user.email, [user.email])
