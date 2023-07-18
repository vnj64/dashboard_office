from django.urls import path, include

from .views import api_home
from ..department.views import department_list_create_view

url_patterns = [
    path('', api_home),
    path('departments/', department_list_create_view, name='department-list'),
    path('api/department/', include('department.urls'))
]
