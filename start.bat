@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "NODE_DIR=%~dp0.tools\node-v22.14.0-win-x64"
if exist "%NODE_DIR%\npm.cmd" set "PATH=%NODE_DIR%;%PATH%"

where npm >nul 2>&1
if errorlevel 1 (
  echo Node.js не найден. Установите Node.js с https://nodejs.org
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Устанавливаю зависимости...
  call npm install
  if errorlevel 1 (
    echo Ошибка установки зависимостей.
    pause
    exit /b 1
  )
)

powershell -NoProfile -Command "try { (Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:5173' -TimeoutSec 2).StatusCode | Out-Null; exit 0 } catch { exit 1 }"
if not errorlevel 1 (
  echo Сервер уже запущен.
  start "" "http://127.0.0.1:5173"
  exit /b 0
)

echo.
echo Запускаю визитку...
echo Откроется браузер автоматически.
echo Чтобы остановить — закройте это окно или нажмите Ctrl+C
echo.

call npm start
