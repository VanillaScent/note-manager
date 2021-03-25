from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Company(models.Model):
    class Meta:
        verbose_name_plural = "companies"

    objects = models.Manager()

    published     = models.BooleanField()
    title         = models.CharField(max_length=100)
    description   = models.CharField(max_length=2500)
    location      = models.CharField(max_length=100)

    date_created  = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    owner         = models.ForeignKey(
                        User, 
                        related_name="companies", 
                        on_delete=models.CASCADE, 
                        null=True
                )

    def __str__(self):
        return self.title