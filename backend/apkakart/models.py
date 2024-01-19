from django.db import models

from django.db import models

class ProductFinder(models.Model):
    search = models.CharField(max_length=255)
    amazon = models.TextField()
    flipkart = models.TextField()
    walmart = models.TextField()