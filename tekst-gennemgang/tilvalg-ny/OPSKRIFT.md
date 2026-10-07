# Opskrift: Til varebilen, længere tekster og mere grafik (07-10-2026)

Brugeren skrev: "Jeg vil gerne have at tekstredaktøren gør alle gamle tekster igennem i til varebilen
og optimere dem. De skal være længere og der skal være mere grafik og illustrationer. De må gerne fylde
en del da det er opslagstekster."

Siderne under /til-varebilen/ står i `tilvalg.json` (11 emner med 74 undersider). Du skriver en ny
udgave af hver side i dit emne. De nye sider lægges i `tilvalg-ny.json` og bygges kun til preview
(`GULPLADE_TILVALG_NY=1`). Brugeren godkender, før de går i produktion.

## Læs først

1. **CLAUDE.md** i projektets rod, afsnittet "Skrivestil": de 12 regler og før/efter-tabellen. Reglerne
   gælder al tekst, også overskrifter, billedtekster, aria-labels, noter, FAQ og kort fortalt.
2. Dine sider, som de står i dag:
   `node tekst-gennemgang/tilvalg-ny/vis-side.js <emne>` (emnesiden) og
   `node tekst-gennemgang/tilvalg-ny/vis-side.js <emne> <slug>` (en underside).
   `node tekst-gennemgang/tilvalg-ny/vis-side.js --alle` viser alle sider med ord og figurer.
3. `tilvalg-figurer.js` (figurtyperne) og en side med gode tegninger, fx
   `vis-side.js forsikring selvrisiko` (afsnittet "Lav frihøjde" har bilsilhuetten).

## Læserne

Håndværkere, firmaer og flådeansvarlige. De er professionelle, men ikke bilnørder eller jurister.
De slår siden op, når de skal vælge, købe, forsikre, indrette eller sælge, og de vil have hele svaret ét sted.
Skriv neutralt og konkret. Ingen advarsler, moraler, "pas på" eller "husk at". Ingen reklame, og ingen
"bedst" eller "billigst" om selskaber eller produkter. Tal gerne direkte til læseren med "du" og "din virksomhed".

## Målet for hver side

**Længere.** Brødteksten (afsnittenes tekst, punkter, kort og tekst efter figuren) skal mindst fordobles.
Mindst 1.100 ord på en underside og 1.300 på en emneside, typisk 1.200–2.000. 14–20 afsnit.
Hvert afsnit har mindst ét tekstafsnit med hele sætninger (2–4 korte tekstafsnit er normalt), og
punkter, tabel, kort og figur kommer oven i. Et afsnit, der kun er en punktliste eller en tabel, skal have
tekst, der forklarer den.

Gode måder at gøre teksten længere på:
- Forklar hvorfor og hvordan, ikke kun hvad. Hvad betyder reglen i praksis for en tømrer eller en flåde på 20 biler?
- Forklar fagudtryk første gang, de bruges (friskade, C-dæk, totalvægt, restværdi, lastbalancering …).
- Beskriv typiske situationer og forløb trin for trin.
- Vis forskellene mellem selskaber, løsninger eller regler med de tal og vilkår, kilderne giver.
- Regneeksempler med tal fra kilderne. Skriv, at det er et eksempel, og regn rigtigt.
- Hvad står der i betingelserne, og hvad skal virksomheden have på skrift?

Fyld ikke på. Ingen indledninger som "I denne guide ser vi på …", ingen opsummeringer, der gentager, og
ingen sætninger, der kunne stå på enhver side. Hver sætning skal give læseren noget nyt.

**Mere grafik.** Mindst 3 nye figurer pr. side, heraf mindst 2 nye tegninger (`svg`). En underside ender
typisk med 9–14 figurer og en emneside med 7–12. Brug mindst 4 forskellige figurtyper på siden. Fordel
figurerne over siden, så de står ved den tekst, de viser, og hovedregel højst én figur pr. afsnit.
Gamle figurer må gerne forbedres eller udskiftes, men ikke mistes uden grund.

**Emnesiden** er indgangen til emnet. Den forklarer emnet bredt, viser de vigtigste tal og linker videre til
undersiderne med `<a href="/til-varebilen/<emne>/<slug>/">`. Den skal ikke kopiere undersidernes indhold.

## Fakta

Regel 11 i CLAUDE.md: fakta ændres aldrig for sprogets skyld.

- **Behold alle fakta, tal og kilder fra den gamle side.** Tjekket advarer om tal, der ikke længere står på
  siden. Er et tal forældet, så ret det med en ny kilde, og skriv det i `nye_fakta` som `"RETTET: …"`.
- **Nye fakta kun fra kilder, du selv har åbnet i dag** (WebFetch; tal i tabeller og PDF'er læser du selv
  med curl, for resuméer gengiver tal forkert). Skriv hver ny påstand i `nye_fakta` som
  `["påstand", "https://kilde"]`. En faktatjekker gennemgår hver eneste, så skriv påstanden præcist.
- **Kilder:** regler skal have en myndighed som kilde (retsinformation.dk, skat.dk og info.skat.dk, motorst.dk,
  fstyr.dk, at.dk, datatilsynet.dk, sik.dk, ens.dk, forbrugerombudsmanden.dk, Ankenævnet for Forsikring).
  Produkter og vilkår har selskabets, producentens eller forhandlerens egne sider og betingelser som kilde.
  Ikke leasingportaler, blogs, fora eller AI-svar.
- **Afgifts- og refusionssatser skrives aldrig ind** (elafgift, ejerafgift, vægtafgift,
  privatbenyttelsesafgift, kr. pr. kWh). Beskriv reglen, og henvis til myndigheden for beløbet.
- **Udled eller par ikke tal**, som kilden ikke selv parrer, fx en vægt fra én kilde og en pris fra en
  anden. Skriv ikke "nej" i en dækningsfigur, hvis kilden ikke siger nej.
- Priser kun med kilde og dato. Gengiv "fra"-priser præcist, som kilden skriver dem.
- Ingen opdigtede firmaer, personer eller kundecases.
- Tal fra vores egne data står som pladsholdere: `{{tilbud}}`, `{{modeller}}`, `{{daek_inkl}}`,
  `{{daek_ikke}}`, `{{daek_tavs}}`, `{{forsikring_inkl}}`, `{{forsikring_ikke}}`, `{{forsikring_tavs}}`,
  `{{el_modeller}}`, `{{el_tilbud}}`, `{{nyttelast_modeller}}` (og `{{ind_*}}` på indretning). Sætningen
  skal være rigtig, også når tallet ændrer sig.
- Kildenoter skrives sådan: `Kilde: <a href="…" rel="noopener">Navn</a>, set den 7. oktober 2026.`
  Gamle noter beholder deres dato. Nye kilder kommer også i `kilder`: `{ "navn", "url", "dato": "2026-10-07" }`.
- Står et tal, der kan ændre sig, så står datoen ved (regel 9). Moms nævnes højst én gang pr. side.

## Figurer

En sektion kan have `figur` (ét objekt eller en liste). Typerne (se `tilvalg-figurer.js`):

| Type | Data | Brug den til |
|---|---|---|
| `noegletal` | `{ data: [[etiket, tal, enhed], …], note }`, 2–4 felter | De vigtigste tal i et afsnit |
| `soejler` | `{ enhed, data: [[navn, tal, under?], …], max?, note }`, tal er et JS-tal | Sammenligning af beløb, tider, mål |
| `daekning` | `{ kolonner, raekker: [[navn, "ja"/"nej"/"tilvalg"/kort tekst, …]], note }` | Hvad dækker hvad, hos hvem |
| `trin` | `{ trin: [[titel, tekst], …] }`, 3–6 trin | Forløb og fremgangsmåder |
| `tidslinje` | `{ punkter: [[hvornår, tekst], …], note }` | Frister, året, forløb over tid |
| `svg` | `{ svg: "<svg …>", tekst }` | Tegninger |

Figurer med tal skal have en note med kilde og dato. Figuren skal vise det samme som teksten, med de samme tal.

### Tegninger (svg)

Tegningerne er skematiske stregtegninger i sitets stil. Gode emner: bilen set fra siden, ovenfra eller
bagfra med de dele, siden handler om; lastrummet; et snit gennem et dæk, en lås eller en lift; et forløb
med pile; to løsninger side om side; en grænse eller et mål; hvem betaler hvilken del af en skade;
et beslutningstræ med ja og nej.

Regler (tjekket fanger dem):
- `<svg viewBox="0 0 400 H" role="img" aria-label="…">`. Bredden er 400 (300–640 er tilladt), højden helst
  under 300. aria-label beskriver, hvad tegningen viser, i en hel sætning.
- **Kun klasser fra style.css, aldrig faste farver.** Ingen `fill="#…"`, `stroke="#…"`, farvenavne eller
  farver i `style`. `fill="none"` er tilladt. Så virker tegningen i mørk tilstand.
- Ingen `<style>`, `<script>`, `<image>`, `<use>` eller links.
- id'er (fx pilehoveder) skal være entydige på siden: `id="pil-<slug>-1"`, `id="pil-<slug>-2"` osv.
- Teksten skal være inden for viewBox. Almindelig `<text>` er 11 px monospace, ca. 6,6 px pr. tegn.
  Del lange etiketter på to linjer.
- Ingen farveord i billedtekst eller aria-label (gul, grå, rød …), for farverne skifter i mørk tilstand.
  Skriv "den fremhævede del" eller "den stiplede linje".
- Billedteksten (`tekst`) begynder med "Skematisk." og har kilden med, når tegningen viser fakta.
- Genbrug gerne bilsilhuetten fra eksisterende tegninger, så bilerne ligner hinanden.

Klasserne:

| Klasse | Udseende | Brug |
|---|---|---|
| `tg-rum` | flade i baggrundsfarven med kraftig kant | karrosseri, rum, store kasser |
| `tg-profil` | flade med tynd kant | hjul, dele, ruder |
| `tg-kasse` | flade med tynd kant | kasser, bokse, felter med tekst |
| `tg-modul` + `tg-modul__tekst` | fremhævet flade (gul) med kant, og tekst til den | det, afsnittet handler om |
| `tg-kuffert` | fremhævet flade med mørk kant | fremhævet genstand |
| `tg-hylde`, `tg-gulv` | massiv dæmpet flade | massive dele, broer, vægge |
| `tg-gulvlinje` | streg, 2 px | vej, jord, akser |
| `tg-skinne` | tyk fremhævet stiplet linje | bevægelse, rute, fremhævet grænse |
| `tg-skinne-tynd` | tynd stiplet linje | hjælpelinjer og grænser |
| `tg-skillevaeg` | tynd streg | opdelinger |
| `tg-doer` | tyk fremhævet streg | døre, åbninger, fremhævede kanter |
| `tg-pil` | pilehoved (path i `<marker>`) | pile |
| `<g class="tg-maal">` | mållinje med tekst | mål og afstande |
| `<g class="tg-call">` med `tg-call__navn` og `tg-call__under` | linje, prik og to linjers etiket | forklaring af en del |
| `<g class="tg-nr">` med circle og text | nummer i en mørk cirkel | nummererede dele |
| `tg-fremhaev` | fed tekst | overskrift i tegningen |
| `tg-lille` | lille tekst med versaler | etiketter, akser |
| `tg-handtag`, `tg-greb`, `tg-skuffe`, `tg-bakke`, `tg-last` + `tg-last__tekst`, `tg-kraft`, `tg-kraftpil`, `tg-kraft__tekst` | se indretningens tegninger | detaljer |

## Felterne

Hver side er et modul i `tekst-gennemgang/tilvalg-ny/<emne>/<slug>.js` (emnesiden: `<emne>/_emne.js`):

```js
module.exports = {
  id: "forsikring/selvrisiko",          // emnesiden: "forsikring"
  side: {
    slug: "selvrisiko",                 // uændret
    navn: "Selvrisiko",                 // uændret
    titel: "…",                         // uændret (Google)
    kort: "…",                          // én sætning til lister og kort
    beskrivelse: "…",                   // højst 155 tegn; må sælge med det konkrete (regel 12)
    manchet: "…",                       // 2–3 sætninger
    visuel: {
      hero: "forsikring",               // emnets topbillede (emnets slug)
      hero_el: true,                    // kun på sider om elvarebiler
      kort_fortalt: [["Etiket", "Tal", "forklaring"], …],   // 3–4 felter
      toc: true,
      stribe: { … }                     // behold den gamle side's stribe, hvis den har en
    },
    afsnit: [
      { overskrift: "…",                // h2, kort og entydig på siden
        tekst: ["…", "…"],              // tekstafsnit (HTML: <a>, <strong>)
        punkter: ["…"], punkt_ikon: "ja" | "nej" | "trin",
        tabel: { kolonner: […], raekker: [[…]], note: "…", visning: "kort" | "skjul" },
        kort: [["titel", "tekst"], …],
        figur: { … } eller [{ … }, { … }],
        efter: ["…"] }                   // tekst efter figuren, typisk kildenoten
    ],
    spoergsmaal_titel: "…", spoergsmaal_manchet: "…", spoergsmaal: ["…"],   // 6–10
    faq: [["Spørgsmål?", "Svar på 2–4 sætninger."], …],                    // 6–10
    kilder: [{ navn: "…", url: "https://…", dato: "2026-10-04" }, …],
    cta_saetning: "…"                   // kun emnesider, og kun hvis den gamle har en
  },
  nye_fakta: [["påstand", "https://kilde"], …]
};
```

Sektionen vises i rækkefølgen overskrift, tekst, punkter, tabel, kort, figur, efter.
Emnesiden har ikke `undersider`, `data` eller `fag_ekstra` (de bliver stående fra tilvalg.json). På
indretning beholder afsnittene deres `grafik` (anatomi, plan, maaltabel, nyttelast, pris, proces).

- Tabeller: højst ca. 8 rækker, ingen "Ikke oplyst"-celler. Udelad felter uden oplysning.
- Interne links kun til sider i `sitemap.xml` (`grep "haandbogen/moms" sitemap.xml`). Link gerne til
  Håndbogen og til andre sider under /til-varebilen/. Eksterne links har `rel="noopener"`.
- Skriv filerne med Write-værktøjet, ikke med heredocs (backslashes forsvinder). Brug backticks til
  svg-strengene, så du slipper for at escape anførselstegn, men skriv aldrig `${` i dem.

## Arbejdsgangen

1. Læs dine sider og deres kilder.
2. Find kilder til de nye fakta, og åbn dem.
3. Skriv én fil pr. side.
4. Kør `node tekst-gennemgang/tilvalg-ny/tjek.js <emne>` og ret alle FEJL. Læs ADVARSLERNE, og ret dem,
   der er rigtige (de fleste er).
5. Kør **ikke** generate-*.js, byg-dist.js eller wrangler, og ret ikke i tilvalg.json, style.css eller andre
   filer uden for din egen mappe. Andre arbejder i samme projekt samtidig.
6. Slut med en kort rapport: siderne med ord og figurer før og efter, antal nye fakta, og de steder, hvor
   du var i tvivl.
