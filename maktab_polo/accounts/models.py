# Create your models here.
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin, Group, Permission


# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, first_name: str, last_name: str, username: str, email: str, password: str = None) -> 'User':
        # Check for required fields
        if not email:
            raise ValueError("Please provide an email address")
        if not username:
            raise ValueError("Please provide a username")
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            first_name=first_name,
            last_name=last_name,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name: str, last_name: str, username: str, email: str,
                         password: str = None) -> 'User':
        # extra_fields.setdefault("is_staff", True),
        # extra_fields.setdefault("is_superuser", True),
        # extra_fields.setdefault("is_active", True),
        # extra_fields.setdefault("is_admin", True),
        # if extra_fields.get("is_staff") is not True:
        #     raise ValueError("Superuser must have is_staff=True.")
        # if extra_fields.get("is_superuser") is not True:
        #     raise ValueError("Superuser must have is_superuser=True.")
        user = self.create_user(
            first_name,
            last_name,
            username,
            email,
            password,
        )
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


# always use permission mixin
class User(AbstractBaseUser, PermissionsMixin):
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        related_name='custom_user_groups',  # Add a related_name argument to provide a unique reverse relation name
        help_text=_(
            'The groups this user belongs to. A user will get all permissions granted to each of their groups.'
        ),
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        related_name='custom_user_permissions',  # Add a related_name argument to provide a unique reverse relation name
        help_text=_('Specific permissions for this user.'),
    )
    RESTAURANT = 1
    CLIENT = 2
    ROLE_CHOICE = ((RESTAURANT, 'RESTAURANT'), (CLIENT, "CLIENT"))
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=60)
    username = models.CharField(max_length=40, unique=True)
    email = models.CharField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=14, blank=True)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICE, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='media/user/profile_picture', blank=True, null=True)
    cover_photos = models.ImageField(upload_to='media/user/cover_photos', blank=True, null=True)
    # required fields
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now_add=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
    objects = UserManager()

    def __str__(self) -> str:
        return self.email

    def has_perm(self, perm: str, obj=None) -> bool:
        return self.is_admin

    def has_module_perms(self, app_label: str) -> bool:
        return True

    def get_role(self):
        if self.role == self.RESTAURANT:
            return 'RESTAURANT'
        elif self.role == self.CLIENT:
            return 'CLIENT'
        else:
            return 'UNKNOWN'


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=250, blank=True, null=True)
    country = models.CharField(max_length=20, blank=True, null=True)
    state = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    pin_code = models.CharField(max_length=70, blank=True, null=True)
    latitude = models.CharField(max_length=20, blank=True, null=True)
    longitude = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.address
