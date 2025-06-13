# Workflows GitHub

| Projeto | Arquivo CI | Gatilho | Destino |
|---------|-----------|---------|---------|
| API | `develop.yml` | push `develop` | Staging |
| API | `staging.yml` | push `main` | Produção |
| API | `production.yml` | release published | Produção |
| Backoffice | `*-Deploy` | develop/main/release | FTP |
| Web | idem Backoffice | FTP |
| POS | idem Backoffice | FTP |