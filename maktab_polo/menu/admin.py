from django.contrib import admin

from menu.models import FoodItem, Category


# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('category_name',)}
    list_display = ('category_name', 'vendor', 'updated_at')
    search_fields = ('category_name', 'vendor__vendor_name')
    fieldsets = (
        ("user", {"classes": ("collapse", "expanded"), 'fields': ('vendor', 'is_deleted')}
         ),
        ("Category's info",
         {"classes": ("collapse", "expanded"), 'fields': ('category_name', 'description', 'slug', 'parent_category','image')}
         ),
    )


class FoodItemAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('food_title',)}
    list_display = ('food_title', 'vendor', 'price', 'is_available', 'category')
    search_fields = ('food_title', 'price', 'category__category_name')
    list_filter = ('is_available',)
    fieldsets = (
        ("user", {"classes": ("collapse", "expanded"), 'fields': ('vendor', 'is_deleted')}
         ),
        ("food item's items",
         {"classes": ("collapse", "expanded"),
          'fields': ('food_title', 'description', 'category', 'slug', 'price', 'image', 'is_available', 'raw_items')}
         ),
    )


admin.site.register(Category, CategoryAdmin)
admin.site.register(FoodItem, FoodItemAdmin)
