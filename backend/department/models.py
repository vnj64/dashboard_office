from django.db import models


class Department(models.Model):
    short_name = models.TextField(primary_key=True, null=True)
    full_name = models.CharField(null=True, max_length=50)
    floor = models.IntegerField(default=1)

    @property
    def get_short_name(self):
        return self.short_name
