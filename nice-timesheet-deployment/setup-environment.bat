@echo off
setlocal enabledelayedexpansion

echo Avvio installazione ...

:: Check if running as Administrator
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Lo script richiede i permessi di amministratore per:
    echo 1. Aggiungere i nomi di dominio necessari nel file host
    echo 2. Aggiungere i certificati self-signed alle ca-root affidabili
    echo Per lanciare come amministratore, eseguire un click-destro sullo script e selezionare "Esegui come amministratore".
    pause
    exit /b 1
)

:: 1. Add entries to hosts file
set "HOSTS_FILE=%windir%\System32\drivers\etc\hosts"
set "HOSTS_ENTRY=127.0.0.1 sso.nice-timesheet.io api.nice-timesheet.io www.nice-timesheet.io"

:: Check if entry already exists
findstr /c:"%HOSTS_ENTRY%" "%HOSTS_FILE%" >nul
if %errorlevel% equ 0 (
    echo Host gia esistenti.
) else (
    echo Aggiunta degli hosts...
    echo %HOSTS_ENTRY% >> "%HOSTS_FILE%"
    if %errorlevel% equ 0 (
        echo Hosts aggiunti correttamente.
    )
)

:: 2. Add certificate to trusted root CA store
set "CERT_PATH=%~dp0_nginx\certs\nice-timesheet.io.crt"

echo Aggiunta dei certificati alla lista di CA root affidabili...
certutil -addstore -f "ROOT" "%CERT_PATH%"
if %errorlevel% equ 0 (
    echo Certificati aggiunti con successo.
)

echo.
echo Installazione completata

pause