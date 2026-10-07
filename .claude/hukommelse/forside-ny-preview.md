---
name: forside-ny-preview
description: Kort forside, /alle-tilbud/ og artikelmodul i hero ("Det skal du vide, før du leaser") i produktion fra 05-10-2026
metadata:
  node_type: memory
  type: project
  originSessionId: 443c35f7-9d93-4b69-b9eb-84a680593223
  modified: 2026-10-05T11:30:27.242Z
---

Den 5. oktober 2026 blev der bygget en kortere forside som en del af SEO-planen for "erhvervsleasing" og "varebilsleasing". Forsiden fik ingen visninger på de brede leasingord i GSC, se [[gsc-indekseringsanmodninger]].

- Forsiden vises kun med `GULPLADE_FORSIDE_NY=1`. Preview: `npx wrangler pages deploy dist --project-name=gulplade --branch=forside`, som giver https://forside.gulplade.pages.dev.
- Siden viser 12 modelkort (6 på mobil) og knappen "Vis alle N varebiler". Et filter viser alle de modeller, der passer.
- Tabellen med alle tilbud er flyttet til den nye side /alle-tilbud/. Den side skrives kun med flaget. Uden flaget sletter generate-pages.js mappen, så et produktionsbyg ikke kommer til at indeholde den.
- Ny rækkefølge: hero, modelkort, link til alle tilbud, FAQ, guider efter behov, tilbudstjek, artikelbåndet og resten.
- Sektionerne er variabler (s_hero, s_vaelger …) i forsideHTML, og `raekkefoelge` vælger rækkefølgen.
- Desktop: 34.600 px → 9.500 px. HTML: 495 KB → 338 KB.

**Why:** Svarene (FAQ og guider) lå efter 29.000 px. Nye visuelle elementer skal på preview først, se [[maalskitse-godkendelse]].

**How to apply:** Når brugeren godkender, skal flaget gøres til standard (`!== "0"`, som de andre flag). Derefter skal der bygges og deployes, /alle-tilbud/ skal anmodes i GSC, og forsiden skal genanmodes.

**Status 05-10-2026, eftermiddag:** Den korte forside kom i produktion, og flaget er nu `!== "0"`. Brugeren ville IKKE have "producenter" med i teksten om de 17. Bagefter var brugeren i tvivl, fordi artikelbåndet var væk. Derfor står der nu et lille artikelmodul (heroArtiklerHTML) til højre for H1, og det store bånd er fjernet fra den korte forside. Modulet ligger på forside.gulplade.pages.dev. Det ligger også i det lokale byg, så næste produktionsdeploy tager det med. /alle-tilbud/ og / er ikke anmodet i GSC.

**Godkendt og i produktion 05-10-2026:** Artikelmodulet har overskriften "Det skal du vide, før du leaser" og linket "Se alle guider". Brugeren syntes, at "Artikler og guides" var en kedelig overskrift.
