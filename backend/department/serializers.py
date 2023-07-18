from rest_framework import serializers

from .models import Department


class DepartmentSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='dep-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Department
        fields = [
            'short_name',
            'full_name',
            'floor'
        ]
