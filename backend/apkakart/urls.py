from rest_framework import routers
from django.urls import path, include
from .views import ProductFinderViewSet

router = routers.DefaultRouter()
router.register(r'ProductFinder', ProductFinderViewSet, basename='Product Finder')

urlpatterns = [
    path('', include(router.urls)),
]
