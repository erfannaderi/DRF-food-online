from django.contrib import admin

from market_place.models import Cart, Discount, Tax


# Register your models here.

class CartAdmin(admin.ModelAdmin):
    list_display = ('user', 'food_item', 'quantity', 'updated_at')
    fieldsets = (
        ("user", {'fields': ('user', 'is_deleted')}
         ),
        ("Cart's items", {'fields': ('food_item', 'quantity', 'discount')}
         ),
    )


admin.site.register(Cart, CartAdmin)


class DiscountAdmin(admin.ModelAdmin):
    list_display = ('user', 'discount_percentage', 'discount_code', 'start_date', 'end_date', 'updated_at')
    fieldsets = (
        ("user", {'fields': ('user', 'is_deleted')}
         ),
        ("Discount's items", {'fields': ('discount_code', 'discount_percentage', 'minimum', 'maximum', 'counter')}
         ),
        ("Discount's dates", {'fields': ('start_date', 'end_date')}
         ),
    )


admin.site.register(Discount, DiscountAdmin)


class TaxAdmin(admin.ModelAdmin):
    list_display = ('tax_type', 'tax_percentage', 'is_active')
    fieldsets = (
        ("user", {'fields': ('is_deleted',)}
         ),
        ("tax's info", {'fields': ('tax_type', 'tax_percentage', 'is_active')}
         ),
    )


admin.site.register(Tax, TaxAdmin)
