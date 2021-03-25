from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated  # <-- Here

from notes.models import Note
from notes.serializers import NoteSerializer

class NoteListView(APIView):
    queryset = Note.objects.filter(published=True)
    permission_classes = (IsAuthenticated,)
    
    def get(self, request):
        query_set = Note.objects.filter(owner=request.user).all()
        serializer = NoteSerializer(query_set, many=True)
        
        content = serializer.data
        return Response(content)
    
    def post(self, request):
        data = request.data


        note = NoteSerializer(data=data)
        if note.is_valid():
            note.save(owner=self.request.user)
            return Response(data=note.data, status=status.HTTP_201_CREATED)
        return Response(data=note.errors, status=status.HTTP_400_BAD_REQUEST)


from reviews.models import Review
from reviews.serializers import ReviewSerializer

class ReviewListView(APIView):
    queryset = Review.objects.filter(published=True)
    
    def get(self, request):
        #get all reviews owned by user
        query_set = Review.objects.all()
        serializer = ReviewSerializer(query_set, many=True)
        
        content = serializer.data
        return Response(content)
    
    def post(self, request):
        permission_classes = (IsAuthenticated,)
        data = request.data


        review = ReviewSerializer(data=data)
        if note.is_valid():
            review.save(owner=self.request.user)
            return Response(data=note.data, status=status.HTTP_201_CREATED)
        return Response(data=note.errors, status=status.HTTP_400_BAD_REQUEST)