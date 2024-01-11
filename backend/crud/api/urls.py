from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('project', views.ProjectViewset,basename='project')
router.register('projectmanager', views.ProjectManagerViewset,basename='projectmanager')
urlpatterns = router.urls
# urlpatterns = [
#     path('',views.home)
# ]
