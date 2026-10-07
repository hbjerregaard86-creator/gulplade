---
name: cloudflare-pages-faelder
description: "Tre ting Cloudflare Pages gør anderledes end forventet — bløde 404'er, Cache-Control og _redirects"
metadata:
  node_type: memory
  type: reference
  originSessionId: 5f94f33c-65e3-4668-96fb-ba8dd1d36194
  modified: 2026-09-27T11:02:20.469Z
---

Cloudflare Pages (gulplade.dk deployes med `npx wrangler pages deploy .`) har tre
adfærd, der koster tid at opdage:

**1. Uden `404.html` i roden svarer hver ukendt URL 200 med forsiden.**
`/findes-ikke/`, `/assets/`, `/assets/img/` — alle serverede forsidens HTML med status
200. Search Console flagger det som „Dublet uden kanonisk side“ og „Ikke fundet“.
Læg en `404.html` i roden, så serveres den med rigtig 404-status. Fundet 24-09-2026.

**2. `_headers` kan ikke overskrive Cache-Control.** Pages **tilføjer** sin egen efter
din, så resultatet bliver `max-age=31536000, immutable, public, max-age=0, must-revalidate`
— selvmodsigende, og max-age ender på Pages' egne 14400. Sikkerhedsheaders (CSP,
X-Frame-Options, Permissions-Policy) virker derimod fint. Længere cache kræver en
**Cache Rule i dashboardet**.

**3. `_redirects` virker kun på stier, ikke på hostnavne.** `https://www.…` → roddomæne
skal være en **Redirect Rule** i dashboardet. Sti-redirects som
`/viden/* /haandbogen/:splat 301` virker fint.

**4. `_headers` forstår derimod hostnavne** (`https://gulplade.pages.dev/*`,
`https://:version.gulplade.pages.dev/*`). Brugt 27-09-2026 til `X-Robots-Tag: noindex`
kun på pages.dev-kopien. gulplade.dk berøres ikke (verificeret med curl).

Se også [[gulplade-haandbogen]].

**5. Deploy kun `dist/` (fra 28-09-2026).** `wrangler pages deploy .` lagde hele projektmappen
offentligt: README, generatorerne, brugte.json (med de omstridte Brdr. Jensen-tal) og .claude/launch.json
svarede 200. Scannere prøver den slags stier dagligt (.env, .git/config, deployment-config.json).
Nu: `node byg-dist.js && npx wrangler pages deploy dist --project-name=gulplade`.

**6. Slettede filer lever videre i zonecachen.** Efter det rene deploy svarede allerede hentede
filer stadig 200 på gulplade.dk (.js og .json caches som statiske filer, `s-maxage=604800`).
En purge alene hjalp ikke: filen blev hentet igen fra et lag, der stadig havde den.
Det, der virkede: 301-linjer i `_redirects` for stierne, et nyt deploy og så en Custom Purge af
de præcise URL'er. Linjerne står øverst i `_redirects` og må ikke slettes, før cachen er udløbet.
Brugeren gav lov til purge den 28-09-2026.

**CSS-versionen og Håndbogen:** generate-viden.js henter style-hashen fra den forrige kørsel af generate-pages. Når assets/style.css er ændret, skal generate-viden.js køres igen efter generate-pages.js, ellers mangler Håndbogens sider stylesheet (sket 30-09-2026). Tjek før deploy: `grep -rho 'style\.[a-f0-9]*\.css' --include=index.html dist | sort | uniq -c` skal give én hash.

**02-10-2026: byg-dist.js gør nu to ting selv:**
1. Den kopierer de gamle samtykke-navne (91804e40, 32534652, 707186f9, 3483fb75). Man skal ikke længere kopiere dem i hånden.
2. Den sætter lastmod i sitemappet pr. side ud fra et hash af indholdet. Hashet gemmes i lastmod.json i roden, og CSS/JS-filnavne fjernes, før der hashes.

deploy-gulplade.bat kører nu også generate-viden.js anden gang.

**Email Obfuscation (06-10-2026):** Cloudflare skrev mailto:kontakt@gulplade.dk om til /cdn-cgi/l/email-protection, som giver 404 for crawlere (Ahrefs: 388 sider med brudt link). byg-dist.js sætter nu `<!--email_off-->` om body på sider med en e-mailadresse, efter lastmod-blokken. Slå ikke markørerne fra uden at slå funktionen fra i Cloudflare.
