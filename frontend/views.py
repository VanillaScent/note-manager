from django.shortcuts import render
from notes.models import Note

# Create your views here.
def index(request):
    notes = Note.objects.all()

    return render(request, 'frontend/index.html')