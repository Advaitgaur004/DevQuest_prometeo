from rest_framework import routers
from django.urls import path, include
from .views import ProductFinderViewSet, ProductCreateViewSet

router = routers.DefaultRouter()
router.register(r'ProductFinder', ProductFinderViewSet, basename='Product Finder')
router.register(r'ProductCreator', ProductCreateViewSet, basename='Product Creator')

urlpatterns = [
    path('', include(router.urls)),
]
