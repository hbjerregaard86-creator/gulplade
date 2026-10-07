#!/bin/bash
# preview.sh — bygger Til varebilen med de nye sider (GULPLADE_TILVALG_NY=1) i en
# KOPI af projektet og lægger den på preview-grenen. Arbejdsmappen er den, der
# går i produktion, så den må ikke få preview-sider (andre sessioner deployer
# derfra).
#
#   bash tekst-gennemgang/tilvalg-ny/preview.sh            flet, byg og deploy
#   bash tekst-gennemgang/tilvalg-ny/preview.sh --kun-byg  flet og byg, ingen deploy
#
# Preview: https://til-varebilen-v3.gulplade.pages.dev/til-varebilen/
set -e
ROD="C:/biltilbud/gulplade claude"
KOPI="${GULPLADE_KOPI:-$TEMP/gulplade-tilvalg-preview}"
GREN="til-varebilen-v3"

node "$ROD/tekst-gennemgang/tilvalg-ny/flet.js"

rm -rf "$KOPI"
mkdir -p "$KOPI"
tar -C "$ROD" --exclude=./dist --exclude=./prisdata --exclude=./node_modules --exclude=./.wrangler \
  --exclude=./skitser --exclude=./presse-udkast --exclude=./ai-maaling -cf - . | tar -C "$KOPI" -xf -

cd "$KOPI"
export GULPLADE_TILVALG_NY=1 GULPLADE_PREVIEW=1
node generate-viden.js > /dev/null
node generate-tilvalg.js
node generate-brugte.js > /dev/null
node generate-pages.js > /dev/null
node generate-viden.js > /dev/null
node byg-dist.js
echo "Kopien: $KOPI"
if [ "$1" != "--kun-byg" ]; then
  npx wrangler pages deploy dist --project-name=gulplade --branch="$GREN" --commit-dirty=true
fi
