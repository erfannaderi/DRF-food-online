from datetime import time, datetime, date

from django.db import models

from accounts.models import User
# from accounts.utils import send_notification
from main.models import BaseModel


# Create your models here.
class Vendor(models.Model):
    user = models.OneToOneField(User, related_name='user', on_delete=models.CASCADE)
    # user_profile = models.OneToOneField(UserProfile, related_name='user_profile', on_delete=models.CASCADE)
    vendor_name = models.CharField(max_length=50)
    vendor_slug = models.SlugField(max_length=100, unique=True)
    vendor_license = models.ImageField(upload_to='media/vendor/license')
    restaurant_picture = models.ImageField(upload_to='media/vendor/picture',blank=True, null=True)
    is_approved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.vendor_name

    def is_open(self):
        today_date = date.today()
        today_int = today_date.isoweekday()
        if today_int == 6 or today_int == 7:
            today_int -= 5
        else:
            today_int += 2
        # addresses = Address.objects.filter(user=vendor)
        current_opening_hours = OpeningHours.objects.filter(vendor=self, day=today_int)
        now = datetime.now()
        current_time = now.strftime("%H:%M:%S")
        is_open = True
        for i in current_opening_hours:
            if not i.is_closed:
                start = str(datetime.strptime(i.from_hours, '%I:%M %p').time())
                end = str(datetime.strptime(i.to_hours, '%I:%M %p').time())
                # print("Start time:", start)
                # print("End time:", end)
                # print("Current time:", current_time)
                if start < current_time < end and not i.is_closed:
                    is_open = True
                    break
                else:
                    is_open = False
            else:
                is_open = False
        # print("Is open:", is_open)
        return is_open


class OpeningHours(models.Model):
    days = [
        (1, 'saturday'),
        (2, 'sunday'),
        (3, 'monday'),
        (4, 'tuesday'),
        (5, 'wednesday'),
        (6, 'thursday'),
        (7, 'friday'),
    ]
    hours_of_day_24 = [(time(h, m).strftime('%I:%M %p'), time(h, m).strftime('%I:%M %p')) for h in range(0, 24) for m in
                       range(0, 60, 30)]
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    day = models.SmallIntegerField(choices=days)
    from_hours = models.CharField(choices=hours_of_day_24, max_length=22, blank=True)
    to_hours = models.CharField(choices=hours_of_day_24, max_length=22, blank=True)
    is_closed = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ('day', 'from_hours', 'to_hours')
        unique_together = ('vendor', 'day', 'from_hours', 'to_hours')

    def __str__(self):
        return self.get_day_display()


class Staff(models.Model):
    # Define the role choices using small integers
    ROLE_OPERATOR = 1
    ROLE_DELIVERY_PERSON = 2
    ROLE_MANAGER = 3
    ROLE_ACCOUNTANT = 4
    ROLE_CHEF = 5
    ROLE_CHOICES = (
        (ROLE_OPERATOR, 'Operator'),
        (ROLE_DELIVERY_PERSON, 'Delivery Person'),
        (ROLE_MANAGER, 'Manager'),
        (ROLE_ACCOUNTANT, 'Accountant'),
        (ROLE_CHEF, 'Chef'),

    )

    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE, limit_choices_to={'role': User.RESTAURANT})
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    role = models.SmallIntegerField(choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.user.username} - {self.get_role_display()}"
