# Datarunde 2: importørernes tilbehørslister (gulplade.dk, 06-10-2026)

Projektmappe: `C:\biltilbud\gulplade claude` (læs, men RET IKKE i projektfilerne uden for `prisdata\`).
- Gem hentede lister i `prisdata\tilbehoer-kilder\<model-id eller mærke>.<pdf|html>`.
- Skriv dit resultat til `prisdata\priser-kladde\tilbehoer-<gruppe>.json` (gruppen står i din opgave).
- Skriv JSON med Python (`json.dump(..., ensure_ascii=False, indent=2)`) eller Write-værktøjet. Ikke bash-heredocs med backslash.

## Formålet

`priser.json` har allerede alle fabrikstilvalg fra producenternes prislister. Brugeren vil have MERE ekstraudstyr:
det tilbehør, som forhandleren monterer, og som importøren selv sætter pris på i en dansk tilbehørsliste,
-katalog eller -webshop. Det skal bruges i en prisberegner på sitet, hvor en håndværker vælger bil, udgave og
udstyr og ser prisen i alt. Hver pris skal kunne dokumenteres med kilde-URL og dato (markedsføringsloven).

## Hvad der skal med

Kun dele til selve varebilen, som en erhvervskunde typisk køber med:
- `traek`: anhængertræk (fast, aftageligt, svingbart), el-sæt og ledningsnet til træk
- `tag`: tagbøjler, tagræling, tagbagagebærer, lastholder, rørholder, stige- og tagrampe
- `varerum`: gulv, sidebeklædning, beskyttelse, reoler/indretning, surringsskinner, varerumsbelysning, skillevæg, gitter
- `hjul`: vinterhjul/-dæk, fælge, reservehjul, helårsdæk
- `kabine`: måtter, sædebetræk, holdere, opbevaring, armlæn
- `ydre`: stænklapper, trinbrædt, kofangerbeskyttelse, folie
- `el`: ladekabel, ladeboks, adaptere (kun til elbiler/plugin)
- `sikkerhed`: alarm, sporing (GPS-tracker), ekstra lås, eftermonteret kamera eller sensorer
- `andet`: alt andet relevant til bilen

Spring over: tøj, merchandise, bilpleje og rengøring, nøgleringe, cykelholdere og andet fritidsudstyr,
service- og garantiprodukter, og ting, der ikke er knyttet til den pågældende model.

## Kilder

- Kun importørens/producentens egne danske tilbehørslister, -kataloger eller webshops med pris. Ikke forhandleres annoncer,
  ikke udenlandske lister.
- Kendte steder fra tidligere runder (tjek også, om der er nyere):
  - Opel, Peugeot, Citroën, Fiat (Stellantis): separate tilbehørsprislister pr. model, ofte på de samme iPaper/pdf-sider som
    prislisterne (pdf.opel.dk, ipaper.ipapercms.dk/Peugeot, brochurer.citroen.dk, ipaper.wismo.dk/fiat-pro). udstyr.json's
    noter nævner fx Opel Combo "fast anhængertræk inkl. 13-polet ledningsnet og 13/7-adapter, L1 (L2: 9.949 kr.)".
    403 på nøgne klienter: send fuldt Chrome-headersæt (sec-ch-ua, sec-fetch-*, Accept-Language da-DK, Referer fra eget domæne).
  - Toyota: tilbehør står delvis i prislisterne på modelinformation.toyota.dk; Toyota har også tilbehørssider/-kataloger.
  - Renault: Hedin-PDF'er "tilbehør" for Kangoo og Trafic findes på erhverv.renault.dk/kob/prislister-og-brochurer.
  - Nissan: tilbehøret står i selve prislisterne (allerede i priser.json som tilvalg med tilbehoer: true) — tag kun nyt.
  - Kia: separat tilbehørsliste for PV5 (api.kiaonline.dk/dokumenter/...).
  - Volkswagen/MAN, Ford, Mercedes-Benz: find importørens danske tilbehørsliste eller -webshop med pris. Findes der ingen
    dansk liste med pris, så skriv det i `afvigelser` og gå videre.
- Gæt aldrig en pris. Kan en liste ikke hentes, så skriv det i `afvigelser`.

## Format: `prisdata\priser-kladde\tilbehoer-<gruppe>.json`

```json
{
  "tilbehoer": {
    "<model-id>": {
      "kilder": [ { "url": "...", "navn": "Opel Danmarks tilbehørsprisliste for Combo", "dato": "2026-09-01", "hentet": "2026-10-06" } ],
      "montering_note": "Kort, intern note: er montering med i prisen, timepris, osv.",
      "dele": [
        {
          "navn": "Anhængertræk, fast, inkl. 13-polet ledningsnet",
          "gruppe": "traek",
          "pris_kr": 9899,
          "montering_inkl": true,
          "gaelder": "L1",
          "kode": "9837…",
          "post": "anhaengertraek",
          "note": null,
          "kilde": 0
        }
      ]
    }
  },
  "afvigelser": [ "..." ]
}
```

- **Alle beløb i hele kroner uden moms.** Står listen kun med moms, så divider med 1,25 (tilbehør har ingen registreringsafgift), rund og skriv det i `montering_note`.
- `montering_inkl`: true, hvis prisen er inkl. montering; false, hvis montering kommer oveni; null, hvis listen ikke siger det.
- `kilde`: indeks i `kilder`.
- `post`: id fra udstyr.json's tjekliste, hvis delen svarer til en post (anhaengertraek, tagbaerer, gulv_varerum,
  beklaedning_varerum, alarm, reservehjul, skillevaeg, varerumslys_led, stik_12v_varerum, stik_230v, bakkamera,
  psensor_bag, psensor_for, parkeringsvarmer, metallak). Ellers null.
- `gaelder`: længde/højde/årgang/udgave, delen gælder for, eller "alle".
- Gælder samme tilbehørsliste flere model-id'er (fx diesel og el af samme bil), så gentag delene under hvert id, hvor de passer
  (et ladekabel kun under elbilen).
- Hold det til det relevante: typisk 10–80 dele pr. model. Er listen meget lang (fx 300 linjer), så tag de vigtigste for en
  håndværker og skriv i `afvigelser`, hvad du har udeladt.

## Kontrol, før du afleverer

- Kontrollér mindst fem tilfældige priser pr. kilde mod dokumentet igen.
- Svar kort: antal dele pr. model, hvilke kilder (dato) og afvigelserne.
