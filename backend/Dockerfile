# Python runtime as a parent image
FROM python:3.12.2-slim-bullseye

WORKDIR /usr/src/backend/

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN apt-get update && apt-get install -y netcat 

RUN pip install --upgrade pip 

COPY ./requirements.txt .
RUN pip install -r requirements.txt 

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' ./entrypoint.sh 
RUN chmod +x ./entrypoint.sh 

COPY . .

ENTRYPOINT [ "/usr/src/backend/entrypoint.sh" ]

