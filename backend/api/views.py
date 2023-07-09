from rest_framework.decorators import api_view
from rest_framework.response import Response

from backend.department.serializers import DepartmentSerializer


@api_view(['POST'])
def api_home(request, *args, **kwargs):
    serializer = DepartmentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        print(serializer.data)
        return Response(serializer.data)
    return Response({'invalid': 'incorrect data'}, status=400)
