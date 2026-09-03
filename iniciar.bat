@echo off
title LojaProject Fullstack

cd /d "%~dp0"

if "%DB_USERNAME%"=="" set DB_USERNAME=root
if "%DB_PASSWORD%"=="" set DB_PASSWORD=123

echo =====================================
echo      Verificando banco de dados...
echo =====================================

mysql -u %DB_USERNAME% -p%DB_PASSWORD% -e "CREATE DATABASE IF NOT EXISTS produto_pedido_db;"

echo.
echo =====================================
echo      Iniciando LojaProject...
echo =====================================

npm start

pause