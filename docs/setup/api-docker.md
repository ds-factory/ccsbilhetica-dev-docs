# API + Banco de Dados com Docker

Crie um arquivo `docker-compose.yml` na raiz do repositório **api**:

```yaml
version: '3.9'
services:
  db:
    image: postgres:15
    container_name: ccs-db
    restart: unless-stopped
    environment:
      POSTGRES_DB: ccs
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

  app:
    build:
      context: ./api
      dockerfile: Dockerfile
    container_name: ccs-api
    restart: unless-stopped
    depends_on:
      - db
    environment:
      DB_CONNECTION: pgsql
      DB_HOST: db
      DB_PORT: 5432
      DB_DATABASE: ccs
      DB_USERNAME: postgres
      DB_PASSWORD: secret
    ports:
      - "8000:8000"
    volumes:
      - ./api:/var/www/html
    command: >-
      sh -c "composer install --no-interaction && php artisan key:generate --ansi && php artisan migrate --seed && php artisan serve --host=0.0.0.0 --port=8000"

volumes:
  db_data:
```

### Passo‑a‑passo rápido

```bash
# 1. Copie o .env
cd api && cp .env.example .env

# 2. Suba os containers
docker compose up -d

# 3. Verifique
curl http://localhost:8000/api/health
```

> 💡 **Laravel Sail** também funciona: `./vendor/bin/sail up -d`