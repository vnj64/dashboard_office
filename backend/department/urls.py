from django.urls import path

from . import views

urlpatterns = [
    path('<int:pk>', views.department_detail_view, name='dep-detail'),
    path('', views.department_list_create_view),
    path('<int:pk>/delete', views.department_delete_view),
    path('<int:pk>/update', views.department_update_view)
]
