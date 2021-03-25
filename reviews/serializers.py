from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from django.contrib.auth.models import User
from .models import Review, Comment


class ReviewSerializer(serializers.ModelSerializer):
    title    = serializers.CharField(required=True, max_length=100)
    content  = serializers.CharField(required=True, max_length=2500)

    class Meta:
        model = Review
        exclude = ["owner"]
        read_only_fields = ['date_modified', 'date_created', 'owner']

    def create(self, data):
        review = Review(**data)

        review.save()
        return review


class CommentSerializer(serializers.ModelSerializer):
    title    = serializers.CharField(required=True, max_length=100)
    content  = serializers.CharField(required=True, max_length=2500)

    class Meta:
        model = Comment
        exclude = ["owner"]
        read_only_fields = ['date_modified', 'date_created', 'owner']

    def create(self, data):
        comment = Comment(**data)

        comment.save()
        return comment