from django.urls import path, include
from rest_framework.routers import SimpleRouter

from flights.viewsets import (
    FlightModelViewSet,
    PassengerModelViewSet,
    FlightStatusModelViewSet,
    CityModelViewSet
)

router = SimpleRouter()
router.register('flights', FlightModelViewSet)
router.register('cities', CityModelViewSet)
router.register('flight-statuses', FlightStatusModelViewSet)
router.register('passengers', PassengerModelViewSet)

app_name = 'flights'
urlpatterns = [
    path('', include(router.urls)),
]
