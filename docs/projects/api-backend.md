# CCS Bilhética – API Backend

Este é o backend API do sistema **CCS Bilhética**, responsável por gerenciar eventos, bilhetes, assentos, pedidos e operadores. Construído com **Laravel** e **Docker**, oferece uma estrutura robusta e escalável para operações de bilhetagem em tempo real.

---

## Arquitetura

A aplicação utiliza uma estrutura moderna em Docker com:

- **PHP-FPM**: Gerenciador de processos FastCGI, garantindo melhor performance e gerenciamento de recursos.
- **Nginx**: Servidor web de alto desempenho atuando como proxy reverso.
- **MySQL/PostgreSQL**: Suporte a bancos de dados relacionais.
- **phpMyAdmin**: Interface para administração do banco de dados.

---

## Requisitos

- Docker
- Docker Compose

---

## Como iniciar o ambiente de desenvolvimento

### 1. Configurar variáveis de ambiente

Copie o arquivo de exemplo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário:

```bash
cp .env.example .env
```

Este arquivo define as variáveis necessárias para a aplicação se conectar ao banco de dados.

---

### 2. Build e start dos containers

Utilize o Docker Compose para construir as imagens e iniciar os containers em modo destacado:

```bash
docker-compose up -d --build
```

Este comando irá criar a imagem (caso necessário) e iniciar os containers em segundo plano.

---

### 3. Instalar dependências do Laravel

Acesse o container da aplicação e instale as dependências usando o Composer:

```bash
docker exec -it ccsbilhetica-api bash -c "composer install"
```

---

### 4. Executar as migrations do banco de dados

Com o ambiente rodando, execute as migrations:

```bash
docker exec -it ccsbilhetica-api bash -c "php artisan migrate"
```

Se desejar, execute também as seeds para popular o banco de dados com dados iniciais:

```bash
docker exec -it ccsbilhetica-api bash -c "php artisan db:seed"
```

---

### 5. Gerar chave da aplicação Laravel

Para garantir a segurança da aplicação, gere uma nova chave:

```bash
docker exec -it ccsbilhetica-api bash -c "php artisan key:generate"
```

---

### 6. Ajustar permissões e limpar caches

Garanta as permissões corretas dos diretórios `storage` e `bootstrap/cache` e limpe caches do Laravel:

```bash
docker exec -it ccsbilhetica-api bash -c "chown -R www-data:www-data storage bootstrap/cache && chmod -R 775 storage bootstrap/cache && php artisan view:clear"
```

---

### 7. Criar link simbólico para o storage

Se necessário, crie o link simbólico para o diretório de storage:

```bash
docker exec -it ccsbilhetica-api bash -c "php artisan storage:link"
```

---

### 8. Acessar a API

A API estará disponível em [http://localhost](http://localhost).

---

## Comandos úteis

- **Parar containers:**

  ```bash
  docker-compose down
  ```

- **Reiniciar containers:**

  ```bash
  docker-compose up -d
  ```

- **Acessar o container:**

  ```bash
  docker exec -it ccsbilhetica-api bash
  ```

---

## Observações

- Certifique-se de que o Docker e o Docker Compose estão instalados e atualizados.
- Verifique e ajuste as permissões dos diretórios `storage` e `bootstrap/cache` caso ocorra erro de permissão.

---

## Teste de autenticação do super usuário

Após subir a aplicação, execute este comando CURL para testar o login como super usuário:

```bash
curl -X POST http://localhost:8083/api/admin/login \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "super_user@datasmart.pt",
    "password": "root"
  }'
```

Se tudo estiver correto, a resposta deve conter o token de autenticação JWT.

---

**CCS Bilhética** – Sistema de Bilhetagem em Tempo Real

