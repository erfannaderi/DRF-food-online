from django.contrib import admin
from vendor.models import Vendor, OpeningHours, Staff


class VendorAdmin(admin.ModelAdmin):
    list_display = ('user', 'vendor_name', 'is_approved', 'created_at')
    list_display_links = ('user', 'vendor_name')
    list_editable = ('is_approved',)
    fieldsets = (
        ("user", {"classes": ("collapse", "expanded"), 'fields': ('user', 'is_deleted')}
         ),
        ("Vendor's Info", {"classes": ("collapse", "expanded"), 'fields': ('vendor_name', 'vendor_slug',
                                                                           'vendor_license', 'restaurant_picture',
                                                                           'is_approved')}
         ),
    )


class OpeningHoursAdmin(admin.ModelAdmin):
    list_display = ('vendor', 'day', 'from_hours', 'to_hours')
    fieldsets = (
        ("user", {'fields': ('vendor', 'is_deleted')}
         ),
        ("Opening hour's info", {'fields': ('day', 'from_hours', 'to_hours', 'is_closed')}
         ),
    )


admin.site.register(Vendor, VendorAdmin)

admin.site.register(OpeningHours, OpeningHoursAdmin)

admin.site.register(Staff)
