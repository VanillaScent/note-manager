from django.db import models
from django.contrib.auth.models import User

class Comment(models.Model):

    published     = models.BooleanField()
    title         = models.CharField(max_length=100)
    content       = models.CharField(max_length=2500)
    date_created  = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    owner         = models.ForeignKey(
                        User, 
                        related_name="review_comments", 
                        on_delete=models.CASCADE, 
                        null=True
                )

    def __str__(self):
        return self.title
    

class Review(models.Model):
    objects = models.Manager()

    published     = models.BooleanField()
    title         = models.CharField(max_length=100)
    content       = models.CharField(max_length=2500)
    date_created  = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    comments      = models.ManyToManyField(Comment, related_name="review_comments")
    owner         = models.ForeignKey(
                        User, 
                        related_name="reviews", 
                        on_delete=models.CASCADE, 
                        null=True
                )

    def __str__(self):
        return self.title
    