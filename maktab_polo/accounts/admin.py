# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from accounts.models import User, Address


class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_active', 'first_name', 'last_name')
    ordering = ('-created_date',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(User, CustomUserAdmin)


class AddressAdmin(admin.ModelAdmin):
    list_display = ('address', 'country', 'state', 'city')
    fieldsets = (
        ("user", {'fields': ('user',)}
         ),
        ("user's address", {'fields': ('address', 'country', 'state', 'city')}
         ),
        ("user's technical address info", {'fields': ('pin_code', 'latitude', 'longitude')}),
    )


admin.site.register(Address, AddressAdmin)


class AddressAdminSite(admin.AdminSite):
    site_header = 'Addresses Administration'


address_admin_site = AddressAdminSite(name='address_admin')

# Register your Address model with the custom admin site
address_admin_site.register(Address)
