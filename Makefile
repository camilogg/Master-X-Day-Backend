migrate:
	docker-compose exec aeroplatzi ./manage.py makemigrations
	docker-compose exec aeroplatzi ./manage.py migrate

superuser:
	docker-compose exec aeroplatzi ./manage.py createsuperuser

test:
	docker-compose exec aeroplatzi ./manage.py test

statics:
	docker-compose exec aeroplatzi ./manage.py collectstatic --no-input
