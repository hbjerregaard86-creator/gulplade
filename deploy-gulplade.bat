@echo off
setlocal
cd /d "C:\biltilbud\gulplade claude"

echo === 1/2: Genererer sider ===
call node generate-viden.js && call node generate-tilvalg.js && call node generate-brugte.js && call node generate-pages.js && call node generate-viden.js && call node byg-dist.js
if errorlevel 1 goto fejl

echo.
echo === 2/2: Deployer til Cloudflare Pages ===
call npx wrangler pages deploy dist --project-name=gulplade
if errorlevel 1 goto fejl

echo.
echo === FAERDIG ===
goto slut

:fejl
echo.
echo *** DER GIK NOGET GALT - se fejlen ovenfor ***

:slut
echo.
pause
