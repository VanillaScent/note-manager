from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Note(models.Model):
    objects = models.Manager()

    published     = models.BooleanField()
    title         = models.CharField(max_length=100)
    content       = models.CharField(max_length=2500)
    date_created  = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    owner         = models.ForeignKey(
                        User, 
                        related_name="notes", 
                        on_delete=models.CASCADE, 
                        null=True
                )

    def __str__(self):
        return self.title
    