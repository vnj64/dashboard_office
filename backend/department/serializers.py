from rest_framework import serializers
from rest_framework.reverse import reverse

from .models import Department


class DepartmentSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='dep-detail',
        lookup_field='pk'
    )
    edit_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Department
        fields = [
            'short_name',
            'full_name',
            'floor'
        ]

    def get_edit_url(self, obj):
        request = self.context.get('request')
        if not request:
            return None
        if not isinstance(obj, Department):
            return None
        return obj.get_short_name()