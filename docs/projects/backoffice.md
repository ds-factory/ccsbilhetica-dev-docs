# Backoffice (React + Vite)

Repositório: [github.com/ds-factory/ccsbilhetica-backoffice.git](https://github.com/ds-factory/ccsbilhetica-backoffice.git)

## Executar com Docker

```bash
git clone https://github.com/ds-factory/ccsbilhetica-backoffice.git
cd ccsbilhetica-backoffice
docker compose up -d    # compila a imagem e inicia o contêiner
```

A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).

---

## Login no GitHub Packages

```bash
export GH_TOKEN=seu_token_github_aqui

npm login --registry=https://npm.pkg.github.com
# username → seu usuário do GitHub
# token    → GH_TOKEN com escopo read:packages
```

---

## Workflows

Os workflows `Backoffice – Development/Staging/Production Deploy` publicam a pasta `dist/` via FTP após o build.
