# Datarunde: fulde prislister og ekstraudstyr (gulplade.dk, 05-10-2026)

Projektmappe: `C:\biltilbud\gulplade claude` (læs, men RET IKKE i projektfilerne).
Arbejdsmappe: `C:\Users\hbjer\AppData\Local\Temp\claude\C--biltilbud-gulplade-claude\f3836557-4bc0-4d0c-bd58-4fbb5e0465a3\scratchpad`
- Gem hentede prislister i `scratchpad\prislister\<model-id>.<pdf|html|json>` (så de kan efterkontrolleres).
- Skriv dit resultat til `scratchpad\priser-kladde\<gruppe>.json` (gruppenavnet står i din opgave).
- Skriv JSON med Python (`json.dump(..., ensure_ascii=False, indent=1)`) eller Write-værktøjet. Ikke bash-heredocs med backslash.

## Formålet

Sitet viser i dag én vejledende nypris pr. model (`nypris` i `varebiler.json`). Vi vil have HELE producentens
danske prisliste for hver model: alle udgaver med pris, alle tilvalg med pris (anhængertræk især) og pakker.
Det skal bruges på en ny side om køb af ny varebil og på modelsiderne. Markedsføringsloven kræver, at hver pris
kan dokumenteres, så kilde-URL og dato skal være præcise.

## Kilder

- Start med kilden i `varebiler.json` → `nypris.kilde_url` og `udstyr.json` → `modeller.<id>.kilde.url`.
  Tjek, om producenten har en NYERE dansk prisliste end den, vi har. Brug altid den nyeste danske.
- Kun producentens/importørens egne danske prislister og konfiguratorer. Ingen forhandleres annoncer.
- Kendte fælder (fra tidligere datarunder):
  - Peugeot, Citroën, Opel og Kia svarer 403 på nøgne klienter. Send fuldt browser-headersæt: User-Agent (Chrome),
    `sec-ch-ua`, `sec-fetch-*`, `Accept-Language: da-DK` og `Referer` fra deres eget domæne. Mercedes kræver det samme.
  - iPaper-kataloger (Peugeot, Citroën, Opel, Ford, Fiat/wismo, Toyota): sæt `GetPDF.ashx` efter katalog-URL'en for at få PDF'en.
  - Priserne står forskudt en linje fra teksten i Renault-, Ford- og Opel-PDF'erne. Læs med pdfplumber
    `extract_words()` grupperet på `top`, ikke kun `extract_text()`. Kontrollér altid nogle rækker mod det, du ser.
  - Peugeot/Citroën/Opel har tekniske tabeller på side 2–5; tilvalg står ofte bagerst.
  - VW Transporter og e-Transporter har kun HTML-prislister (`/app/da/erhvervsbiler/prisliste/...`).
  - Toyota: `modelinformation.toyota.dk/Toyota/specs/...` (PDF-prislister) og konfiguratoren. Toyota sælger få fabrikstilvalg.
  - Renault/Nissan: Hedin-PDF'er på `edge.sitecorecloud.io/...`. Renaults lister fra 1. juli–30. september 2026 er
    UDLØBET. Find de nye (fra 1. oktober 2026) via renault.dk's prislisteside. Findes de ikke, så brug den nyeste og skriv `gyldig_til`.
  - Mercedes: prislisterne på `mercedes-benz.dk/vans/finance/pricelists.html` (PDF'er) og konfiguratoren voc.mercedes-benz.com.
- Kan en liste ikke hentes, så skriv det i `afvigelser` og gå videre. Gæt aldrig en pris.

## Hvilke udgaver hører til hvilken model-id

- Hver model-id har en karrosseri og et drivmiddel i `varebiler.json`. Tag kun udgaver med den karrosseri:
  kassevogn → kun kassevogne (ikke kombi, mandskabsvogn, dobbeltkabine, chassis eller personbil);
  ladvogn → chassis/ladvogn; pickup → alle pickup-udgaver.
- Drivmiddel: udgaver, hvis drivlinje har sin egen model-id (fx el eller plugin-hybrid), hører til den model-id.
  Resten hører til basismodellen (fx får `vw-caddy` både benzin- og dieselkassevognene, `ford-transit-courier` både benzin og diesel).
- Tag ALLE længder, højder, totalvægte, motorer, gear og udstyrsniveauer med.

## Format: `scratchpad\priser-kladde\<gruppe>.json`

```json
{
  "priser": {
    "<model-id>": {
      "kilde_url": "URL til præcis det dokument, du har læst",
      "kilde_navn": "Fords vejledende prisliste for Transit Custom Van",
      "prisliste_dato": "2026-07-08",
      "hentet": "2026-10-05",
      "gyldig_fra": null,
      "gyldig_til": null,
      "levering_kr": 4620,
      "levering_i_listen": false,
      "registreringsafgift_i_prisen": true,
      "pris_note": "Kort, intern note på dansk: hvad priserne indeholder, og hvad der var svært.",
      "udgaver": [
        {
          "navn": "320 L1H1 Trend 2.0 EcoBlue 136 hk 6-trins manuel",
          "niveau": "Trend",
          "laengde": "L1",
          "hoejde": "H1",
          "totalvaegt_kg": 3200,
          "drivmiddel": "diesel",
          "motor": "2.0 EcoBlue",
          "hk": 136,
          "kw": null,
          "batteri_kwh": null,
          "gear": "manuel",
          "hjultraek": "forhjul",
          "pris_kr": 281995
        }
      ],
      "tilvalg": [
        {
          "navn": "Anhængertræk, aftageligt",
          "gruppe": "traek",
          "pris_kr": 3550,
          "gaelder": "alle",
          "niveau_priser": null,
          "post": "anhaengertraek",
          "kode": "B3KAP",
          "tilbehoer": false,
          "note": null
        }
      ],
      "pakker": [
        {
          "navn": "Vinterpakke",
          "pris_kr": 6052,
          "gaelder": "Caddy Cargo",
          "indhold": ["Sædevarme", "Opvarmet forrude"],
          "niveau_priser": null
        }
      ]
    }
  },
  "udstyr_patch": {
    "<model-id>": { "<post-id>": [ { "s": "tilvalg", "pris": 3550, "note": "Aftageligt" } ] }
  },
  "udstyr_nye_modeller": { },
  "afvigelser": [ "Fri tekst: alt, der ikke passer med de data, vi har, eller som du ikke kunne finde." ]
}
```

Regler for felterne:
- **Alle beløb er i hele kroner uden moms.** Giver listen kun priser med moms, så divider med 1,25, rund til hele kroner
  og skriv det i `pris_note`.
- `pris_kr` på en udgave er UDEN levering. Indeholder listens pris leveringen (fx Ford Courier, Mercedes Citan), så træk den fra,
  sæt `levering_i_listen: true` og skriv det i `pris_note`.
- `levering_kr`: leveringsomkostninger uden moms, som listen oplyser dem. `null`, hvis listen ikke oplyser beløbet.
- Ukendte felter er `null`. Gæt aldrig. `gear` er "manuel" eller "automat". `hjultraek` er "forhjul", "baghjul", "firhjul" eller null.
- `drivmiddel`: "diesel", "benzin", "el", "plugin" eller "hybrid".
- `navn` på udgaven: som listen skriver den, men læsbart (ingen interne koder, med motor og gear).
- `tilvalg`: ALLE fabrikstilvalg med pris i prislisten. Sæt `tilbehoer: true` på dele, listen selv kalder tilbehør eller
  forhandlermonteret. Spring over: serviceaftaler, garantiforlængelse, finansiering, forsikring og ting fra separate
  tilbehørskataloger. Er prisen forskellig fra niveau til niveau, så sæt `pris_kr` til den laveste og `niveau_priser`
  til fx `{"Trend": 3550, "Limited": "std", "Sport": "nej"}`. Er tilvalget kun til nogle udgaver, så skriv dem i `gaelder`.
- `gruppe` er én af: `traek`, `varerum`, `komfort`, `parkering`, `assistent`, `ydre` (lak, fælge, hjul, ruder, tag),
  `el` (opladning, batteri, varmepumpe), `andet`.
- `post`: sæt id'et fra tjeklisten herunder, hvis tilvalget svarer til en post. Ellers `null`.

## Tjeklisten (udstyr.json)

`udstyr.json` har en tjekliste med poster pr. udstyrsniveau (`modeller.<id>.niveauer` og `modeller.<id>.udstyr.<post>`,
ét felt pr. niveau i samme rækkefølge). Status: `std`, `tilvalg` (med `pris`), `pakke` (med `pris` og `pakke`), `nej`, `ukendt`.

Eksisterende poster: aircondition, fartpilot, carplay, dab, noeglefri, saedevarme, opvarmet_forrude, parkeringsvarmer,
psensor_bag, psensor_for, bakkamera, led_forlygter, elspejle_klap, adaptiv_fartpilot, blindvinkel, skillevaeg,
skydedoer_hoejre, skydedoer_venstre, bagdoere_rude, gulv_varerum, varerumslys_led, stik_12v_varerum, anhaengertraek.

NYE poster, som du skal udfylde for alle niveauer på dine modeller:
- `metallak` — Metallak (gruppe ydre)
- `reservehjul` — Reservehjul (ydre)
- `tagbaerer` — Tagbøjler eller tagræling (ydre)
- `alarm` — Tyverialarm (ydre)
- `dobbelt_passagersaede` — Dobbelt passagersæde (komfort)
- `navigation` — Navigation i bilen, ikke kun via telefonen (komfort)
- `beklaedning_varerum` — Beklædning af siderne i varerummet (varerum)
- `stik_230v` — 230V-stikkontakt (varerum)
- `lader_22kw` — 22 kW AC-lader (el; kun elbiler og plugin, ellers udelad posten)
- `varmepumpe` — Varmepumpe (el; kun elbiler og plugin, ellers udelad posten)

`udstyr_patch` skal indeholde:
1. De nye poster for hver af dine modeller (et felt pr. niveau, samme rækkefølge som `niveauer`).
2. Eksisterende felter med `"s": "ukendt"`, som prislisten nu kan afgøre. Kun dem.
3. Ret ALDRIG et eksisterende felt, der ikke er `ukendt`. Er det forkert efter den nye liste, så skriv det i `afvigelser`.
4. For `anhaengertraek` skriver du typen i `note`, hvis listen siger den (fast, aftageligt, svingbart, elektrisk).

Mangler modellen helt i `udstyr.json` (mercedes-citan, toyota-bz4x-van, toyota-bz4x-touring-van, toyota-c-hr-van,
toyota-urban-cruiser-van), så lav en hel post i `udstyr_nye_modeller` i samme form som de eksisterende
(`kilde` {url, dato, note}, `niveauer` [{navn, fra_pris, note}], `udstyr` med ALLE poster, gamle og nye).

## Kontrol, før du afleverer

- Find udgaven fra `varebiler.json` → `nypris.variant` i din liste og sammenlign prisen. Er den ændret, så skriv
  gammel og ny pris i `afvigelser`.
- Kontrollér mindst fem tilfældige priser pr. model mod dokumentet igen (især når teksten var forskudt).
- Svar til sidst med et kort resumé: antal udgaver og tilvalg pr. model, hvilke lister du brugte (dato) og afvigelserne.
