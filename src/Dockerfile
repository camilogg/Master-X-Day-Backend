FROM python:3.9.0-slim-buster

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN apt-get update && apt-get -y install gcc

WORKDIR /src
COPY requirements.txt /src/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . /src/
EXPOSE 8000

#RUN useradd user
#RUN chown -R user:user /src
#RUN chmod -R 755 /src
#USER user
