from rest_framework import serializers
from .models import ProductFinder

class ProductFinderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFinder
        fields = '__all__'