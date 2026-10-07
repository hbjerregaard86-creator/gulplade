# Datarunde 4: udstyr pr. niveau (06-10-2026)

Brugeren vil kunne se, hvad der er forskelligt i udstyret mellem niveauerne på en model. Et eksempel er Toyota Proace City, der fås som Comfort Master, Nordic Edition og Comfort Master+. Prislisterne har normalt en liste pr. niveau, fx "Nordic Edition indeholder Comfort Master-udstyr samt 230V udtag i passagersiden, A/C automatisk, …". Den liste skal vi have ud.

## Hvad du skal levere

En JSON-fil `prisdata/priser-kladde/niveauer-<gruppe>.json` (gruppen står i din opgave):

```json
{
  "niveauer": {
    "toyota-proace-city": {
      "kilde_fil": "prislister/toyota-proace-city.pdf",
      "niveauer": [
        { "navn": "Comfort Master", "bygger_paa": "Comfort", "beregnet": false, "side": 3,
          "ekstra": ["11 kW lader", "10\" touchskærm", "Bakkamera", "Dobbelt passagersæde, yderste sæde el-opvarmet"] },
        { "navn": "Nordic Edition", "bygger_paa": "Comfort Master", "beregnet": false, "side": 3,
          "ekstra": ["230V-udtag i passagersiden", "Automatisk aircondition", "Ekstra kraftigt lys i varerummet"] }
      ],
      "note": null
    }
  }
}
```

- `navn` skal være præcis det samme som `niveau` på udgaverne i `C:\biltilbud\gulplade claude\priser.json` for den model. Tag alle niveauer, som modellen har i priser.json, og i samme orden som prisen (billigste først).
- `bygger_paa` er det niveau, prislisten selv siger, at niveauet bygger på ("Indeholder Comfort Master-udstyr samt"). Det må gerne være et niveau, modellen ikke fås i (fx "Comfort" på elbilen). Siger listen det ikke, så brug niveauet lige under i pris, og sæt `beregnet` til true (se nedenfor). Er det modellens laveste niveau, og listen ikke bygger på noget, så sæt `bygger_paa` til null og `ekstra` til de vigtigste punkter i niveauets standardudstyr. Det må højst være 12 punkter, og de skal være dem, en håndværker lægger mærke til.
- `ekstra` er det udstyr, niveauet har ud over `bygger_paa`. Tag hele listen, også når den er lang.
- `side` er sidetallet i PDF'en (1 = første side).
- `beregnet`: true, når prislisten viser hele standardudstyret pr. niveau, og du selv har fundet forskellen (punkterne i niveauet, der ikke står i niveauet under). Er et punkt skiftet ud med et bedre ("Manuel aircondition" → "Automatisk aircondition"), så skriv det bedre punkt i `ekstra`.
- `note`: kort forklaring, når noget er særligt, fx at to niveauer har samme udstyr og kun forskellig motor, eller at prislisten ikke har udstyr pr. niveau.

## Sådan skriver du punkterne

- På dansk, som i prislisten, men med almindelig stavning: stort begyndelsesbogstav, ingen punkttegn, ingen fodnotetal, ingen "•".
- Ret kun det åbenlyse: "A/C, automatisk" → "Automatisk aircondition", "El-foldbare sidespejle" må stå. Engelske ord fra listen må stå, når de er navne (fx "Apple CarPlay", "SmartCargo", "Pro Power Onboard").
- Fjern punkter, der ikke gælder modellen: "(kun EV)" på en dieselmodel fjernes, og på en elmodel fjernes selve parentesen.
- Bevar oplysninger, der ændrer betydningen: "17\" alufælge", "LED-forlygter med automatisk nærlys".
- Skriv ikke noget, der ikke står i kilden. Gæt aldrig. Ingen priser i punkterne.

## Kilder

- Brug de gemte filer i `C:\biltilbud\gulplade claude\prisdata\prislister\` (`<model-id>.pdf` og eventuelle `<model-id>.*.pdf`, `.json` og `.html`). Læs dem med `pdftotext -layout fil.pdf -` (findes i Git Bash) eller pypdf i Python.
- Står udstyret pr. niveau ikke i den gemte fil, må du bruge producentens officielle danske side for mærket (se `prisdata/kilder-maerker.json`). Gem i så fald filen i `prisdata/niveau-kilder/<model-id>.<pdf|html>`, skriv `kilde_fil` og `kilde_url`, og nævn det i `note`.
- Mercedes har konfiguratordata i `.konfigurator.json`. Ford har et løsblad (`.loesblad.pdf`) ved siden af prislisten.

## Regler

- Du må kun skrive din egen JSON-fil og evt. filer i `prisdata/niveau-kilder/`. Rør ikke priser.json, udstyr.json, varebiler.json eller andre projektfiler.
- Hvert punkt i `ekstra` skal kunne findes i kilden (små forskelle i stavning og mellemrum er i orden). Vi kører et kontrolscript bagefter.
- Skriv JSON med UTF-8 og indrykning 2. Tjek, at filen kan læses med `python -c "import json; json.load(open('fil', encoding='utf-8'))"`.
- Afslut med en kort rapport: hvor mange modeller og niveauer du har udfyldt, og hvilke modeller der mangler eller er usikre, og hvorfor.
