from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    CONDITION_CHOICES = [
        ('EX', 'Excellent'),
        ('VG', 'Very Good'),
        ('GD', 'Good'),
        ('FR', 'Fair'),
    ]

    name = models.CharField(max_length=100)
    descrption = models.TextField()
    condition = models.CharField(max_length=2, choices=CONDITION_CHOICES, default='EX')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Order(models.Model):
    buyer = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    ordered_at = models.DateTimeField(auto_now_add=True) 