---
name: nye-sider-nat-0710
description: "Grafik i stedet for tabeldumps (sider-ny.js): /elvarebiler/, /garanti/ og /varebiler/ i produktion 07-10-2026; /udstyr/ og /udbydere/ kun på preview (ingen SEO-værdi)"
metadata:
  node_type: memory
  type: project
  originSessionId: e5a1483d-84bd-40a7-8e3a-8fbec0b3fb00
  modified: 2026-10-07T07:25:59.054Z
---

Brugeren bad 06-10-2026 sent: "Find flere af vores eksisterende sider som du kan optimere ala denne" (som [[hub-bedste-tilbud-ny]]) og "lav en ordentlig omgang".

- Koden står i **sider-ny.js** (modul som koeb.js), koblet til generate-pages.js med `SIDE_NY` og `sideNy()`. Hvert flag har én sidetype. CSS-blokken hedder "Nye sider 07-10-2026" i style.css.
- **I produktion fra 07-10-2026** (brugeren: "De andre skal"): /elvarebiler/ (`GULPLADE_ELSIDE_NY=0` slår fra), /garanti/ (`GULPLADE_GARANTI_NY=0`) og /varebiler/ (`GULPLADE_OVERSIGT_NY=0`).
- **Kun preview** (nat.gulplade.pages.dev): /udstyr/ med 31 sider (`GULPLADE_UDSTYR_NY=1`) og /udbydere/ med 17 sider (`GULPLADE_UDBYDER_NY=1`). Brugeren: "Hvis disse giver SEO værdi skal de deploy men ellers ikke." GSC (90 dage, 07-10): /udstyr/ 28 visninger, 0 klik. /udbydere/ 119 visninger, 0 klik, plads 20, mest på mærke-søgninger, som mærkesiderne dækker bedre. Derfor blev de ikke deployet.
- De gamle tabeller klippes ud af den gamle side (`data._gammel`) og står foldet sammen under figurerne. På /varebiler/ står tabellen åben.
- Byggeklodser: `skiftgraf` (figur med knapper, der sorterer om), `stablet`, `faktaboks`, `stige`, `podium`, `talkort` og `chips`.
- 07-10-2026 er de gamle tekster også rettet efter tekstredaktoer: "Garanti på en leaset varebil", "Rækkevidde i praksis" og footerens to afsnit i alle fire generatorer samt tilbudstjek og saadan-tjener-vi-penge ("Hverken forhandlere eller leasingselskaber kan købe en placering"). "Ingen udbyder kan købe en placering" står stadig i forsidens FAQ og i et h2 på forsiden (generate-pages.js ca. linje 3818 og 4441), og det er ikke rettet.
- /elvarebiler/, /garanti/, /varebiler/ og /bedste-tilbud/ er IKKE genanmodet i GSC (kvoten var brugt 07-10 om morgenen).

Se [[css-hash-alle-generatorer]] og [[skaermbilleder-headless]].
