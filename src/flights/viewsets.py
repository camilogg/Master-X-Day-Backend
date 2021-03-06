from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from flights.models import Flight, City, FlightStatus, PassengerByFlight
from flights.serializers import FlightSerializer, CitySerializer, \
    FlightStatusSerializer, PassengerByFlightSerializer, PassengerSerializer


class FlightModelViewSet(ModelViewSet):
    serializer_class = FlightSerializer
    queryset = Flight.objects.all()
    permission_classes = (AllowAny,)


class CityModelViewSet(ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()
    permission_classes = (AllowAny,)


class FlightStatusModelViewSet(ModelViewSet):
    serializer_class = FlightStatusSerializer
    queryset = FlightStatus.objects.all()
    permission_classes = (AllowAny,)


class PassengerByFlightModelViewSet(ModelViewSet):
    serializer_class = PassengerByFlightSerializer
    queryset = PassengerByFlight.objects.all()
    permission_classes = (AllowAny,)


class PassengerModelViewSet(ModelViewSet):
    serializer_class = PassengerSerializer
    queryset = User.objects.all()
    permission_classes = (AllowAny,)


def prueba(request):
    return HttpResponse('prueba')
