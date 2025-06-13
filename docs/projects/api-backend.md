# API Backend (Laravel)

Repositório: [github.com/ds-factory/ccsbilhetica-api.git](https://github.com/ds-factory/ccsbilhetica-api.git)

## Resumo

API central que gerencia eventos, bilhetes, assentos, pedidos e operadores. Construída em **Laravel 10** com ambiente multi‑container (**PHP‑FPM + Nginx + MySQL + PhpMyAdmin**).

## Como executar

```bash
git clone https://github.com/ds-factory/ccsbilhetica-api.git
cd ccsbilhetica-api
cp .env.example .env            # ajuste credenciais se necessário
docker compose up -d --build    # inicia app, Nginx, base de dados e PhpMyAdmin
```

### Pós‑deploy

```bash
docker compose exec app composer install
docker compose exec app php artisan key:generate
docker compose exec app php artisan migrate --seed
```

A API fica disponível em [http://localhost:8000](http://localhost:8000).

### Estrutura Docker

* **Dockerfile** instala PHP 8.2, extensões, Composer e prepara permissões.
* **docker-compose.yml** define:
  * `app` – PHP‑FPM
  * `nginx` – porta 8000
  * `phpmyadmin` – porta 8081

### Workflows CI/CD

* `develop.yml` – deploy FTP para staging em cada push `develop`
* `staging.yml` – deploy FTP para staging em push `main`
* `production.yml` – deploy FTP para produção em release publicado