from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('notes/', views.NoteListView.as_view(), name='note_list'),
    path('reviews/', views.ReviewListView.as_view(), name='review_list'),
    path('auth/', obtain_auth_token, name='api_auth'),

]