from django.contrib import admin

from menu.models import FoodItem, Category


# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('category_name',)}
    list_display = ('category_name', 'vendor','updated_at')
    search_fields = ('category_name', 'vendor__vendor_name')


class FoodItemAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('food_title',)}
    list_display = ('food_title', 'vendor', 'price', 'is_available', 'category')
    search_fields = ('food_title', 'price', 'category__category_name')
    list_filter = ('is_available',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(FoodItem, FoodItemAdmin)
