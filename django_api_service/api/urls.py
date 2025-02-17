from django.urls import path
from .view import noteview

urlpatterns = [
    path("notes/",noteview.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", noteview.NoteDelete.as_view(), name="delete-note")
]