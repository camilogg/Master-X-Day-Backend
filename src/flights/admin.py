from django.contrib import admin

from flights.models import City, Flight, FlightStatus, PassengerByFlight


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_display_links = list_display
    search_fields = ('name',)


@admin.register(FlightStatus)
class FlightStatusAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_display_links = list_display
    search_fields = ('name',)


@admin.register(Flight)
class FlightAdmin(admin.ModelAdmin):
    list_display = (
        'status', 'origin', 'destination', 'boarding_gate', 'departure_date',
        'departure_time', 'flight_number', 'passengers_limit'
    )
    list_display_links = list_display
    list_filter = ('origin', 'destination')
    raw_id_fields = ('origin', 'destination', 'status')


@admin.register(PassengerByFlight)
class PassengerByFlightAdmin(admin.ModelAdmin):
    list_display = ('passenger', 'flight')
    list_display_links = list_display
