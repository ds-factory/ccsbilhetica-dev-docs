# Setup

## 1 — Ativar os componentes do Windows

Abra o **PowerShell** como Administrador e execute:

```powershell
wsl --install
```

O comando activa as funcionalidades **Subsistema Windows para Linux** e **Plataforma de Máquina Virtual**, transfere o kernel Linux e configura o WSL 2 como padrão.

> Se o comando não estiver disponível, instale a actualização KB5004296 ou superior e confirme que o `wsl --update` conclui sem erros.

Reinicie o computador quando for pedido.

## 2 — Escolher a distribuição Linux

Na primeira execução, a Microsoft Store surge com as distribuições sugeridas. Recomendamos **Ubuntu 22.04 LTS**.
Depois de instalar, abra o aplicativo *Ubuntu*, defina um utilizador e uma palavra‑passe.

```powershell
wsl -l -v    # lista as distribuições instaladas
```

Verifique que a coluna **VERSION** mostra `2`.

## 3 — Instalar o Docker Desktop

1. Transfira o instalador em [docs.docker.com/desktop](https://docs.docker.com/desktop/install/windows-install/).
2. Durante o assistente, marque **“Use WSL 2 backend”** e seleccione a distribuição Ubuntu.
3. Conclua a instalação e reinicie caso seja solicitado.

⚠️ Em redes corporativas, confirme nas **Settings ▸ Resources ▸ WSL Integration** que a sua distribuição está marcada.

## 4 — Teste rápido

Abra o **Ubuntu (WSL)**:

```bash
docker --version
docker run hello-world
```

Se tudo estiver correcto, verá a mensagem **“Hello from Docker!”**.

## 5 — Clonar um repositório e levantar serviços

Exemplo com a API:

```bash
cd /mnt/c/Dev
git clone https://github.com/ds-factory/ccsbilhetica-api.git
cd ccsbilhetica-api
cp .env.example .env
docker compose up -d
```

## 6 — Dicas de desempenho

| Boa prática | Porquê |
|-------------|--------|
| Trabalhar em **/mnt/c/** | Evita penalizações de I/O entre o Windows e o WSL   |
| Montar volumes com `:cached` | Reduz latência para hot‑reload                    |
| Limitar memória/CPU no Docker Desktop | Impede que containers monopolizem recursos |

Com estes passos, o Docker fica totalmente funcional no Windows usando o WSL 2, pronto para desenvolver os projectos CCS Bilhética.