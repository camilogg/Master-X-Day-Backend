from django.contrib.auth.models import User
from django.db import models


class City(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name = 'city'
        verbose_name_plural = 'cities'

    def __str__(self):
        return self.name


class FlightStatus(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name = 'flight status'
        verbose_name_plural = 'flight statuses'

    def __str__(self):
        return self.name


class Flight(models.Model):
    departure_date = models.DateField()
    departure_time = models.TimeField()
    flight_number = models.PositiveSmallIntegerField()
    boarding_gate = models.CharField(max_length=5)
    passengers_limit = models.PositiveSmallIntegerField()
    origin = models.ForeignKey(
        City, on_delete=models.CASCADE, related_name='origins'
    )
    destination = models.ForeignKey(
        City, on_delete=models.CASCADE, related_name='destinations'
    )
    status = models.ForeignKey(FlightStatus, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'flight'
        verbose_name_plural = 'flights'

    def __str__(self):
        return f'Flight #{self.id}'


class PassengerByFlight(models.Model):
    passenger = models.ForeignKey(User, on_delete=models.CASCADE)
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'passenger by flight'
        verbose_name_plural = 'passengers by flight'

    def __str__(self):
        return f'PassengerByFlight #{self.pk}'
