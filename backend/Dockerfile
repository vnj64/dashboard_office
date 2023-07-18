FROM python:3.10.6-slim

WORKDIR /app/backend/

ADD requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

ADD . .
