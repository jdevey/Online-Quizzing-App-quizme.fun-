
from django.urls import path
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('quiz-creation', views.quizcreation, name='quiz-creation'),
    path('question-creation', views.questioncreation, name='question-creation')
    ]
