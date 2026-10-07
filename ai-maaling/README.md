# Månedlig måling af gulplade.dk i AI-svar

Hver måned stilles de 20 spørgsmål i `spoergsmaal.json` til de samme
tjenester. Resultatet gemmes i `ÅÅÅÅ-MM.json`. Mappen kommer ikke med i `dist/`.

## Tjenester

| Tjeneste | Hvorfor |
|---|---|
| Perplexity | Viser altid sine kilder, så det er nemt at se, om gulplade.dk er kilde |
| ChatGPT (med søgning) | Den største. Søgningen bygger på Bings indeks |
| Copilot | Bings egen AI. Kan holdes op mod rapporten "AI Performance" i Bing Webmaster Tools |
| Google (AI-oversigt) | Den AI-boks, der står øverst i Googles resultater |

## Sådan stilles spørgsmålene

- Stil spørgsmålet ordret, i en ny samtale, og på dansk.
- Ved måling med login: slå hukommelse/personalisering fra, hvis tjenesten har det, så
  tidligere samtaler om gulplade.dk ikke påvirker svaret.
- Formuleringerne må ikke ændres. Nye spørgsmål får et nyt id.

## Point pr. spørgsmål og tjeneste

- **2**: en gulplade.dk-side er kilde (der er link til den)
- **1**: Gulplade.dk nævnes, men en anden side er kilden
- **0**: ikke med

Notér også de andre kilder, svaret bygger på. Så kan man se, hvem der vinder de
spørgsmål, gulplade.dk taber.

Perplexity uden login stopper efter ca. 3 spørgsmål, og Claude må ikke oprette konti.
En fuld måling kræver derfor en browser, hvor brugeren allerede er logget ind.
