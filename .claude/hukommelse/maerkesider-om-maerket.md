---
name: maerkesider-om-maerket
description: Alle 14 mærkesider har "Om mærket" (fabrikker, historie, DK, service, forhandlere) fra maerker.json, i produktion 05-10-2026; stående deploy-godkendelse
metadata:
  node_type: memory
  type: project
  originSessionId: a75e346c-aa15-48f8-89c8-82325f2afe52
  modified: 2026-10-05T06:17:29.444Z
---

Brugeren bad 05-10-2026 om mere indhold på mærkesiderne /varebiler/<maerke>/: sælgende titel/indledning ("her kan du læse om mærket"), fabrikker, historie, mærket i Danmark, service, forhandlere og billeder. Rækkefølge: Ford, Renault, Mercedes-Benz, Toyota, derefter de øvrige mærker ét ad gangen.

- Teksten står i `maerker.json` (én post pr. mærke, alle fakta med kilde-URL). Generatoren er `maerkeOmHTML`/`maerkeGalleri` i generate-pages.js.
- Godkendt og i produktion 05-10-2026. `GULPLADE_MAERKE_NY=0` slår det fra. Et mærke uden post i maerker.json får den gamle side.
- Status 05-10-2026: alle 14 mærker er i produktion. Nye mærker skal have en post i maerker.json; uden den får siden det gamle udseende. Tallene og forhandlerantallene har dato og bør tjekkes igen, når de bliver gamle.
- Registreringstal kommer fra Mobility Denmarks interaktive tabel på mobility.dk/nyregistreringer/. Den kan kun læses i browseren, ikke med WebFetch.

**Why:** Mærkesiderne fik eksponeringer i Google, men ingen klik (Ford: 19 eksponeringer og 0 klik).

**Stående godkendelse (05-10-2026):** Brugeren skrev "De deployer løbende. Det er godkendt på mærkesider." Nye mærker deployes til produktion, så snart teksten er gennemgået af tekstredaktoer, uden at spørge først.

**How to apply:** Byg preview i en kopi i scratchpad, fordi andre sessioner bygger i projektmappen og overskriver flag-bygninger. Nye mærker bruger samme skabelon og kan gå direkte i produktion, når teksten er gennemgået. Se også [[maalskitse-godkendelse]] og [[hverdagsord]].
