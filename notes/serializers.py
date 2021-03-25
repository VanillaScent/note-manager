from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from django.contrib.auth.models import User
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    title    = serializers.CharField(required=True, max_length=100)
    content  = serializers.CharField(required=True, max_length=2500)

    class Meta:
        model = Note
        exclude = ["owner"]
        read_only_fields = ['date_modified', 'date_created', 'owner']

    def create(self, data):
        note = Note(**data)

        note.save()
        return note