---
name: ai-synlighed
description: "AI-synlighed (GEO) for gulplade.dk: Cloudflare blokerede GPTBot/ClaudeBot/CCBot, llms.txt bygges automatisk, Product-schema må ikke genindføres"
metadata:
  node_type: memory
  type: project
  originSessionId: 3ddff587-45ef-469c-a8ca-16912251af80
  modified: 2026-10-04T11:46:24.784Z
---

Brugeren bad 04-10-2026 om stort fokus på at blive vist i AI-svar (ChatGPT, Perplexity, Gemini, Copilot), når folk søger på varebiler.

**Fund 04-10-2026:** GPTBot, ClaudeBot og CCBot fik 403 fra Cloudflare. Løst samme dag: Security → Settings → "Configure AI bot policies" → Training = Allow (Search og Agent = Allow, Bot Preference Sync slået til). Alle AI-bots får nu 200. Tjek igen med `curl -A "GPTBot/1.2" https://gulplade.dk/`.

**Bygget og live 04-10-2026:**
- `llms.txt` genereres af `genererLlms()` i generate-pages.js ved hver bygning (modeller med fra-priser og Håndbogens guider).
- Modelsiderne har WebPage-schema med `dateModified` = modelDato().
- Pris-FAQ'en siger nu "(opdateret <dato>)".

**Why:** Product/AggregateOffer blev fjernet med vilje (Search Console: fejl i sælgeropslag, "pr. md." kan ikke udtrykkes). Car og Vehicle er undertyper af Product. **How to apply:** Brug aldrig Product, Car eller Vehicle på modelsiderne. Brug WebPage og FAQ.

**"Bedst til X":** /bedste-tilbud/ havde allerede 50 guider (inkl. 9 fag). 04-10 kom 3 til: største varebil på B-kørekort, elvarebil med hurtig opladning (DC kW, ikke ladetid — intervallerne er forskellige), elvarebil med V2L. Deres første FAQ-svar regnes ud af listen (`tilpas`). Lang garanti er dækket af /garanti/.

**Bing Webmaster Tools:** oprettet 04-10-2026 (import fra GSC). Rapporten "AI Performance" (beta) viser citater i Copilot/Bing-AI — tjek den fra ca. 11-10.

**Prisindeks:** idé forklaret og accepteret 04-10-2026 (median pr. klasse, el mod diesel, hvad aftalerne indeholder; annoncerede priser, ikke handelspriser). Første skridt er bygget: `gemPrisbillede()` skriver `prishistorik/<dato>.json` ved hver bygning (ikke med GULPLADE_IDAG), og mappen holdes ude af dist. Første billede 2026-10-04 (121 tilbud). Mappen ligger kun lokalt, for sitet er ikke et git-repo. Selve indekssiden er ikke bygget endnu.

**Månedlig måling:** Planlagt opgave "gulplade-ai-maaling" kører d. 1. kl. 9 i brugerens Chrome (ChatGPT midlertidig chat, Perplexity, Google AI-oversigt). ChatGPT-kontoen har projekter om Leasio og varebiler, og midlertidige chats står som standard på "Personligt tilpasset", så svarene kan være farvet. Perplexity er ikke logget ind i Chrome. `ai-maaling/` (spoergsmaal.json med 20 faste spørgsmål s01–s20, README med pointskala 0/1/2, resultater i ÅÅÅÅ-MM.json; holdes ude af dist). Perplexity uden login stopper efter 3 spørgsmål, så en fuld måling kræver brugerens indloggede browser. Første resultat 04-10: s01 og s02 fik 1 point. Perplexity kalder sitet "Gulplade.dk (Leasio) – Leasios erhvervsside", med leasio.dk/erhvervsbiler som kilde og ikke gulplade.dk.

**El mod diesel (04-10-2026):** Nyheden /nyheder/elvarebil-eller-diesel-maanedlig-pris/ er i produktion. Pressegrafikken ligger i assets/img/presse/elvarebil-diesel-2026-10.png og tegnes med PIL; diesel er #b88300 og el #2f63b0, valideret for farveblindhed. Siden /presse/ (presseHTML og PRESSEMEDDELELSER i generate-pages.js) er i produktion fra 04-10-2026 med link i sidefoden og i sitemappet; GULPLADE_PRESSE=0 slår den fra. Kontakt står kun som kontakt@gulplade.dk. Udkast til pressemails ligger i presse-udkast/ (ikke presse/, som er sidens mappe). Brugeren har ikke afgjort, om der skal stå navn og telefon i pressemeddelelsen; ejeren ønsker ikke at blive forbundet med LinkedIn-siden. Mail: kontakt@gulplade.dk og kontakt@leasio.dk sendes videre til Gmail via Cloudflare Email Routing og sendes ud via Gmails "Send mail som" (smtp.gmail.com og app-adgangskode). 04-10-2026 blev _dmarc på gulplade.dk ændret fra p=reject (streng) til p=none, og begge SPF-poster har fået include:_spf.google.com, ellers blev mailen afvist. leasio.dk har ingen DMARC; sæt aldrig p=reject, så længe der sendes via Gmail.

**Mangler:** selve prisindeks-siden og pressemeddelelsen. Se [[linkedin-side]] og [[gulplade-haandbogen]].

**Guiderne (04-10-2026):** De 53 guider under /bedste-tilbud/ har fået nyt udseende: kort med de tre bedste biler, knapper og tillidspunkter. Siden "Bedste varebil 2026" har fået kort i stedet for tabellen. Desuden har guiderne fået nye Google-tekster i guide-tekster.json i roden (title, desc, h1, intro og svar pr. slug, med %fra%, %n% og %aar%). Godkendt og i produktion 04-10-2026. Det er nu standard, og GULPLADE_GUIDE_NY=0 giver det gamle udseende. GULPLADE_DUMP_GUIDER=1 skriver de nuværende tekster til tekst-gennemgang/guider.json.

**Guiderne mere levende (04-10-2026, på preview, ikke godkendt):** `GULPLADE_GUIDE_LIV=1` giver de 53 guider nøgletal (`.guidetal`, ikke `.noegletal`, som er optaget), prisdiagram pr. model (`.prisgraf`, diesel/el-farver som pressegrafikken), en opsummering i hele sætninger, WebPage-schema med dateModified (nyeste kildedato) og #1-bilens `-del.jpg` som og:image. Preview: https://guide-liv.gulplade.pages.dev. Tekster godkendt af tekstredaktoer. Ved godkendelse: gør flaget standard (`!== "0"`) og deploy.
