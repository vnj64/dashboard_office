from django.urls import path

from . import views

urlpatterns = [
    path('<str:pk>', views.department_detail_view, name='dep-detail'),
    path('', views.department_list_create_view),
    path('<str:pk>/delete', views.department_delete_view),
    path('<str:pk>/update', views.department_update_view)
]
