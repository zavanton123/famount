up-dev:
	docker-compose -f docker-compose.dev.yml up --build -d

down-dev:
	docker-compose -f docker-compose.dev.yml down

up-prod:
	docker-compose -f docker-compose.yml up --build -d

down-prod:
	docker-compose -f docker-compose.yml down

logs-api:
	docker-compose -f docker-compose.dev.yml logs api

logs-web:
	docker-compose -f docker-compose.dev.yml logs web

logs-db:
	docker-compose -f docker-compose.dev.yml logs database
