# Deploy af gulplade.dk

Samme flow som leasio.dk. Statisk site, Cloudflare Pages, wrangler.

## Kommandoer

```
cd "C:\biltilbud\gulplade claude"
node generate-viden.js
node generate-tilvalg.js
node generate-brugte.js
node generate-pages.js
node byg-dist.js && npx wrangler pages deploy dist --project-name=gulplade
node indexnow.js
```

Håndbogen (`generate-viden.js`) og „Til varebilen“ (`generate-tilvalg.js`) regner deres
tal ud af varebiler.json. Køres de ikke efter en dataændring, står de med de gamle tal.
`generate-pages.js` skal køre sidst (sitemap, menu, CSS-stempel).

`generate-pages.js` gemmer også et øjebliksbillede af de aktuelle tilbud i
`prishistorik/ÅÅÅÅ-MM-DD.json` (grundlaget for prisindekset). Mappen kommer ikke i
`dist/` og ligger kun her. Slet den ikke: udløbne tilbud findes ingen andre steder.

Første deploy opretter Pages-projektet `gulplade`. Det lander på `gulplade.pages.dev`.
Domænet `gulplade.dk` bindes bagefter i Cloudflare-dashboardet under projektets
Custom domains — samme sted som leasio.

## Til Claude

Når en session har shell-adgang til denne maskine (`device_bash`): kør de tre kommandoer
ovenfor uden at spørge, hver gang der er ændret i `varebiler.json`, `generate-pages.js`,
`assets/` eller en håndskrevet side. Det er den faste aftale — samme som på leasio.dk.

En session uden shell kan skrive filer ind i mappen, men ikke deploye. Så skal deployet
vente på en session startet fra Claude-appen på lenovo med `C:\biltilbud` tilføjet.

## Før første deploy til domænet

- [ ] Priser på `/tilbudstjek/` — står som `[pris]` tre steder
- [ ] Tally-formular-URL'er på `/tilbudstjek/` — to steder, markeret `TODO`
- [ ] Tekniske mål på variantniveau — feltet `_mangler` markerer hvor

Ingen af delene blokerer et deploy til `pages.dev`. Alle fire skal være på plads før
domænet peges derover.

## Efter deploy

- Google Search Console: tilføj `gulplade.dk`, indsend `https://gulplade.dk/sitemap.xml`
- Bing Webmaster Tools: samme
