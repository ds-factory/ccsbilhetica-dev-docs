# POS (React + Vite)

Repositório: [github.com/ds-factory/ccsbilhetica-pos.git](https://github.com/ds-factory/ccsbilhetica-pos.git)

## Executar com Docker

```bash
git clone https://github.com/ds-factory/ccsbilhetica-pos.git
cd ccsbilhetica-pos
docker compose up -d    # compila a imagem e inicia o contêiner
```

A aplicação estará disponível em [http://localhost:5174](http://localhost:5174).

### Login no GitHub Packages

```bash
npm login --registry=https://npm.pkg.github.com
# username → GitHub user
# token    → GH_TOKEN com escopo read:packages
```

### Workflows

`POS – Development/Staging/Production Deploy` publicam a pasta `dist/` via FTP após build.