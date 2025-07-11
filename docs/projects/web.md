# Web (React + Vite)

Repositório: [github.com/ds-factory/ccsbilhetica-backoffice.git](https://github.com/ds-factory/ccsbilhetica-backoffice.git)

---

## Executar com Docker

```bash
git clone https://github.com/ds-factory/ccsbilhetica-web.git
cd ccsbilhetica-web

# Copiar variáveis de ambiente antes de subir o contêiner
cp .env.example .env

docker compose up -d    # compila a imagem e inicia o contêiner
```

A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

---

## Executar sem Docker

Para executar localmente, é necessário:

- Node na versão **20.11.1**
- Yarn instalado

### Passos:

```bash
git clone https://github.com/ds-factory/ccsbilhetica-web.git
cd ccsbilhetica-web

# Copiar variáveis de ambiente
cp .env.example .env

# Exportar o token do GitHub Packages
export GH_TOKEN=seu_token_github_aqui

# Autenticar no GitHub Packages
npm login --registry=https://npm.pkg.github.com
# username → seu usuário do GitHub
# token    → GH_TOKEN com escopo read:packages

# Instalar dependências e iniciar o projeto
yarn install
yarn start
```

A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

---

## Workflows

Os workflows `Web – Development/Staging/Production Deploy` publicam a pasta `dist/` via FTP após o build.
