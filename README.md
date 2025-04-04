# nice-timesheet

timesheet for enterprise

## Repo

https://github.com/black-arm/nice-timesheet

## Setup for local development

* Aggiungere al file host: `127.0.0.1	sso.nice-timesheet.io`
* Aggiungere al file host: `127.0.0.1	api.nice-timesheet.io`
* Aggiungere i certificati nel sistema
* Quando si lancia il BE con start dev, dare come variabile d'ambiente `NODE_TLS_REJECT_UNAUTHORIZED=0` 

## Puntamenti

* Keycloak: https://sso.nice-timesheet.io/

## Comandi Docker & Profili

* Lanciare il compose SENZA il be: `docker compose up -d `
* Lanciare il compose CON il be: `docker compose --profile backend up -d `
* lanciare il compose CON il be aggiornato: `docker compose --profile backend up -d --build`