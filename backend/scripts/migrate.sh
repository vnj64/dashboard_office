#!/bin/bash

cd /app/backend/

python3 manage.py makemigrations --noinput
python3 manage.py migrate --noinput
python3 manage.py createsuperuser --noinput || true