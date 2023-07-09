from rest_framework import generics

from .models import Department
from .serializers import DepartmentSerializer
from ..api.mixins import StaffEditorPermissionMixin


class DepartmentListCreateApiView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    def perform_create(self, serializer):
        short_name = serializer.validated_data.get('short_name')
        full_name = serializer.validated_data.get('full_name')
        if not short_name:
            short_name = full_name
        serializer.save(short_name=short_name)


department_list_create_view = DepartmentListCreateApiView.as_view()


class DepartmentDetailApiView(StaffEditorPermissionMixin, generics.RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


department_detail_view = DepartmentDetailApiView.as_view()


class DepartmentUpdateApiView(StaffEditorPermissionMixin, generics.UpdateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    lookup_field = 'pk'

    def perform_update(self, serializer):
        instance = serializer.save()
        if not instance.short_name:
            instance.short_name = instance.full_name


department_update_view = DepartmentUpdateApiView.as_view()


class DepartmentDeleteApiView(StaffEditorPermissionMixin, generics.DestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)


department_delete_view = DepartmentDeleteApiView.as_view()