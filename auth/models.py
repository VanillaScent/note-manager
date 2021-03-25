from django.db import models

# Create your models here.
class Account(models.Model):
    objects = models.Manager()
    

    def __str__(self):
        return ""