import datetime

from django.db import models
from django.utils.translation import gettext_lazy as _

from accounts.models import User
from main.models import BaseModel
from menu.models import FoodItem
from vendor.models import Vendor

TEXT_CHOICES = models.TextChoices


# Create your models here.


class Payment(models.Model):
    PAYMENT_METHOD = (
        ('PayPal', 'PayPal'),
        ('zarinpal', 'zarinpal'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=100)
    payment_method = models.CharField(choices=PAYMENT_METHOD, max_length=100)
    amount = models.CharField(max_length=10)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.transaction_id


class Order(models.Model):
    STATUS = (
        ('New', 'New'),
        ('Accepted', 'Accepted'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    )

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    payment = models.ForeignKey(Payment, on_delete=models.SET_NULL, blank=True, null=True)
    vendors = models.ManyToManyField(Vendor, blank=True)
    order_number = models.CharField(max_length=20)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, blank=True)
    email = models.EmailField(max_length=50)
    address = models.CharField(max_length=200)
    country = models.CharField(max_length=15, blank=True)
    state = models.CharField(max_length=15, blank=True)
    city = models.CharField(max_length=50)
    pin_code = models.CharField(max_length=10)
    total = models.FloatField()
    tax_data = models.JSONField(blank=True, help_text="Data format: {'tax_type':{'tax_percentage':'tax_amount'}}")
    total_data = models.JSONField(blank=True, null=True)
    total_tax = models.FloatField()
    payment_method = models.CharField(max_length=25)
    status = models.CharField(max_length=15, choices=STATUS, default='New')
    is_ordered = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    # Concatenate first name and last name
    @property
    def name(self):
        return f'{self.first_name} {self.last_name}'

    def __str__(self):
        return self.order_number


class OrderedFood(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    payment = models.ForeignKey(Payment, on_delete=models.SET_NULL, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fooditem = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.FloatField()
    amount = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.fooditem.food_title


class BankType(TEXT_CHOICES):
    ZARINPAL = "ZARINPAL", _("Zarinpal")


class CurrencyEnum(TEXT_CHOICES):
    IRR = "IRR", _("Rial")
    IRT = "IRT", _("Toman")

    @classmethod
    def rial_to_toman(cls, amount):
        return amount / 10

    @classmethod
    def toman_to_rial(cls, amount):
        return amount * 10


class PaymentStatus(TEXT_CHOICES):
    WAITING = "Waiting"
    REDIRECT_TO_BANK = "Redirect to bank"
    RETURN_FROM_BANK = "Return from bank"
    CANCEL_BY_USER = "Cancel by user"
    EXPIRE_GATEWAY_TOKEN = "Expire gateway token"
    EXPIRE_VERIFY_PAYMENT = "Expire verify payment"
    COMPLETE = "Complete"
    ERROR = "Unknown error acquired"


class BankQuerySet(models.QuerySet):
    def __init__(self, *args, **kwargs):
        super(BankQuerySet, self).__init__(*args, **kwargs)

    def active(self):
        return self.filter()


class BankManager(models.Manager):
    def get_queryset(self):
        return BankQuerySet(self.model, using=self._db)

    def active(self):
        return self.get_queryset().active()

    def update_expire_records(self):
        count = (
            self.active()
            .filter(
                status=PaymentStatus.RETURN_FROM_BANK,
                update_at__lte=datetime.datetime.now() - datetime.timedelta(minutes=15),
            )
            .update(status=PaymentStatus.EXPIRE_VERIFY_PAYMENT)
        )

        count = count + self.active().filter(
            status=PaymentStatus.REDIRECT_TO_BANK,
            update_at__lt=datetime.datetime.now() - datetime.timedelta(minutes=15),
        ).update(status=PaymentStatus.EXPIRE_GATEWAY_TOKEN)
        return count

    def filter_return_from_bank(self):
        return self.active().filter(status=PaymentStatus.RETURN_FROM_BANK)


class Bank(models.Model):
    status = models.CharField(
        max_length=50,
        null=False,
        blank=False,
        choices=PaymentStatus.choices,
        verbose_name=_("Status"),
    )
    bank_type = models.CharField(
        max_length=50,
        choices=BankType.choices,
        verbose_name=_("Bank"),
    )
    # It's local and generate locally
    tracking_code = models.CharField(max_length=255, null=False, blank=False, verbose_name=_("Tracking code"))
    amount = models.CharField(max_length=10, null=False, blank=False, verbose_name=_("Amount"))
    # Reference number return from bank
    reference_number = models.CharField(
        unique=True,
        max_length=255,
        null=False,
        blank=False,
        verbose_name=_("Reference number"),
    )
    response_result = models.TextField(null=True, blank=True, verbose_name=_("Bank result"))
    callback_url = models.TextField(null=False, blank=False, verbose_name=_("Callback url"))
    extra_information = models.TextField(null=True, blank=True, verbose_name=_("Extra information"))
    bank_choose_identifier = models.CharField(
        max_length=255, blank=True, null=True, verbose_name=_("Bank choose identifier")
    )

    created_at = models.DateTimeField(auto_now_add=True, editable=False, verbose_name=_("Created at"))
    update_at = models.DateTimeField(auto_now=True, editable=False, verbose_name=_("Updated at"))

    objects = BankManager()

    class Meta:
        verbose_name = _("Bank gateway")
        verbose_name_plural = _("Bank gateways")

    def __str__(self):
        return "{}-{}".format(self.pk, self.tracking_code)

    @property
    def is_success(self):
        return self.status == PaymentStatus.COMPLETE
