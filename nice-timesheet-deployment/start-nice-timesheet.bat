@echo off
cd %~dp0

echo Avvio Nice-Timesheet
echo ===========================
echo 1. Avvia: infrastruttura
echo 2. Avvia: infrastruttura e Backend
echo 3. Avvia: Infrastruttura, Backend e Frontend
echo 0. Esci senza avviare nulla
echo.

set /p choice=Inserisci la tua scelta (0-3): 

if "%choice%"=="1" (
    echo Avvio di: infrastruttura ...
    docker compose up -d --build
) else if "%choice%"=="2" (
    echo Avvio di: infrastruttura e backend ...
    docker compose --profile backend up -d --build
) else if "%choice%"=="3" (
    echo Avvio di: infrastruttura, backend e frontend ...
    docker compose --profile backend --profile frontend up -d --build
) else if "%choice%"=="0" (
    echo Uscita senza avviare nulla.
    exit /b 0
) else (
    echo Scelta non valida. Uscita.
    exit /b 1
)

echo.
echo L'app si sta avviando
echo Tra poco dovresti essere in grado di raggiungere:
echo https://www.nice-timesheet.io
echo https://sso.nice-timesheet.io
echo https://api.nice-timesheet.io
echo.
echo Premi un qualunque pulsante per stoppare i containers
pause

echo.
echo Vuoi anche brasare i volumi relativi a questo progetto?
echo Se scegli 'si' tutti i DB del progetto verranno piallati
echo 1. Si - brasa tutto
echo 2. NO
echo.

set /p delete_choice=Inserisci la tua scelta (1-2): 

if "%delete_choice%"=="1" (
    echo.
    echo Arresto e rimozione dei container in corso...
    docker compose down
    echo.
    echo Eliminazione dei volumi in corso...
    docker volume rm nice_timesheet_postgres_data
) else if "%delete_choice%"=="2" (
    echo.
    echo Arresto in corso...
    docker compose down
    echo.
    echo I volumi NON sono stati brasati.
) else (
    echo.
    echo Arresto in corso...
    docker compose down
    echo.
    echo I volumi NON sono stati brasati.
)

exit /b 0
