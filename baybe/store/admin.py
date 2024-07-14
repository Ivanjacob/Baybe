from django.contrib import admin
from .models import Product, Order

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'condition', 'created_at')
    list_filter = ('condition', 'created_at', 'updated_at')
    search_fields = ('name', 'description')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('buyer', 'product', 'ordered_at')
    list_filter = ('ordered_at',)
    search_fields = ('buyer__username', 'product__name')
