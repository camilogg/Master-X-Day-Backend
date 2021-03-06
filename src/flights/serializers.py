from django.contrib.auth.models import User
from rest_framework import serializers

from flights.models import City, FlightStatus, Flight, PassengerByFlight


class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email')


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class FlightStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlightStatus
        fields = '__all__'


class FlightSerializer(serializers.ModelSerializer):
    destination = CitySerializer()
    origin = CitySerializer()
    status = FlightStatusSerializer()

    class Meta:
        model = Flight
        fields = (
            'id', 'departure_date', 'departure_time', 'flight_number',
            'boarding_gate', 'passengers_limit', 'origin', 'destination',
            'status'
        )


class PassengerByFlightSerializer(serializers.ModelSerializer):
    passenger = PassengerSerializer()
    flight = FlightSerializer()

    class Meta:
        model = PassengerByFlight
        fields = ('id', 'passenger', 'flight')
