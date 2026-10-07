# Datarunde 3: indretning med danske priser (gulplade.dk, 06-10-2026)

Projektmappe: `C:\biltilbud\gulplade claude` (læs, men RET IKKE i projektfilerne uden for `prisdata\`).
- Gem kilder i `prisdata\indretning-kilder\<leverandør>-<model eller emne>.<pdf|html|json>`.
- Skriv resultatet til `prisdata\priser-kladde\indretning-<gruppe>.json` (gruppen står i din opgave).
- Skriv JSON med Python (`json.dump(..., ensure_ascii=False, indent=2)`) eller Write-værktøjet. Ikke bash-heredocs med backslash.

## Formålet

Gulplade.dk har en prisberegner for nye varebiler: man vælger bil og udgave, sætter kryds ved udstyr og ser prisen i alt.
Brugeren vil have indretning med: reoler, skuffer, gulv, sidebeklædning, lastsikring og færdige pakker til netop den bil.
I dag har kun 18 af 63 modeller reoler (mest Sortimo Xpress til mellemstore biler). Især små varebiler (Caddy, Berlingo,
Partner, Combo, Kangoo, Transit Connect/Courier, Citan, Proace City, PV5) og store (Sprinter, Crafter, TGE, Transit,
Master, Movano, Boxer, Jumper, Ducato, Proace Max, Interstar) mangler. Modellernes id'er står i `varebiler.json`.

## Hvad der skal med

Kun færdige produkter med en offentlig dansk pris, som en kunde kan købe til en bestemt model:
- `reol`: reolmoduler, skuffesektioner, kassettereoler, færdige "opstillinger" eller "kits" til modellen
- `gulv`: gulvplader (krydsfiner, skridsikkert, aluminium) skåret til modellen
- `beklaedning`: sidebeklædning, vægplader, hjulkassebeklædning til modellen
- `lastsikring`: surringsskinner, lastsikringssæt til modellen
- `pakke`: en samlet pakke (fx gulv + beklædning + reol) til modellen

Spring over: løse kasser, kufferter og værktøj uden binding til en model, generiske reoler uden modelangivelse,
produkter uden pris ("pris på forespørgsel"), og priser, der kun findes hos en forhandler eller i en annonce.

## Kilder

Leverandørernes egne danske sider, webshops og prislister med pris. Startsteder (tjek selv, hvem der har priser):
- Sortimo: mysortimo.dk (Xpress-moduler, SoboPro-gulv, pakker). Sortimo er partner hos os, og 11 Xpress-moduler til 17
  mellemstore modeller står allerede i `partnere.json` under slug "sortimo" (produkter[].modeller). Find de moduler og gulve,
  der mangler, især til små og store varebiler, og skriv dem i SAMME form som i partnere.json (id, navn, side, laengde_mm,
  hoejde_mm, vaegt_kg, pris, tekst, url, modeller). Billeder er ikke nødvendige.
- Bott (bott.dk / bott-group), Würth Danmark (ORSY mobil / bilindretning i webshoppen), Modul-System (modul-system.dk),
  System Edström (kun aktuelle priser), og danske webshops eller værksteder, der sælger færdige indretningssæt pr. model
  med pris på siden.
- Priser uden moms. Står der kun pris med moms, så divider med 1,25 og skriv det i noten. Skriv, om montering er med.
- Gæt aldrig en pris eller en model. "Passer til" skal komme fra leverandørens egen side (model, årgang, længde/højde).
  Passer et produkt kun til en bestemt længde (fx L1H1), så skriv det i `gaelder` som "L1" eller "L1H1".

## Format: `prisdata\priser-kladde\indretning-<gruppe>.json`

```json
{
  "produkter": [
    {
      "leverandoer": "Bott",
      "navn": "vario3 Smart-sæt til Ford Transit Custom L1, venstre side",
      "type": "reol",
      "pris_kr": 14995,
      "montering_inkl": false,
      "vaegt_kg": 38,
      "modeller": ["ford-transit-custom", "ford-e-transit-custom", "ford-transit-custom-phev"],
      "gaelder": "L1",
      "url": "https://...",
      "dato": "2026-10-06",
      "note": "Kort, faktuel note: hvad sættet indeholder, og hvad der ikke er med."
    }
  ],
  "sortimo_nye_moduler": [ { "id": "...", "navn": "...", "side": "venstre", "laengde_mm": 0, "hoejde_mm": 0, "vaegt_kg": 0, "pris": 0, "tekst": "...", "url": "...", "modeller": ["..."] } ],
  "afvigelser": [ "Hvad du ikke kunne finde, og hvilke leverandører der ikke har priser." ]
}
```

## Kontrol

- Kontrollér mindst fem tilfældige priser pr. leverandør mod kilden igen.
- Svar kort: antal produkter pr. leverandør og pr. modelgruppe (små, mellemstore, store), kilder og afvigelser.
