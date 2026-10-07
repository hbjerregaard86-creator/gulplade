# gulplade.dk

Erhvervsrettet leasingsite. Forket fra leasio.dk — samme arkitektur: statisk HTML genereret
fra JSON med Node, deployet på Cloudflare Pages.

## Struktur

```
index.html                       genereret: forside
tilbudstjek/index.html           landingsside for den betalte ydelse (håndskrevet)
assets/style.css                 designsystem
assets/img/varebiler/            bilbilleder, 16:9 webp (800x450 og 1280x720)
varebiler.json                   datafil — priser, tilbud, specs
generate-pages.js                generator
varebiler/                       genereret: oversigt + modelsider
sitemap.xml, robots.txt          genereret
```

## Kør

```bash
node generate-pages.js
node byg-dist.js && npx wrangler pages deploy dist --project-name=gulplade
```

## Logo

Mærket er **den gule nummerplade**. Sidens navn er gulplade, og den gule plade
er det mest genkendelige signal for varebil til erhverv i Danmark — der er ikke
noget mere ejerbart at bygge på.

Formen følger den korte danske plade (305 × 160 mm, altså ca. 1,9:1) med sort
ramme og to mørke tegngrupper, der læses som et registreringsnummer.

Ligger som `assets/logo.svg` og bruges som inline SVG i headeren, så den skalerer
og ikke koster en ekstra forespørgsel. `favicon.svg` sætter pladen i et mørkt
afrundet kvadrat, ellers bliver den en streg i browserfanen. Plus
`apple-touch-icon.png` (180 px) og `favicon-32.png`.

**Tegnene bliver sorte i begge temaer.** En nummerplade er sort på gul, og at
vende den om i mørk tilstand ville ødelægge signalet. Til gengæld forsvinder den
sorte ramme mod mørk baggrund, så den får en tynd lys ring i `prefers-color-scheme: dark`.

### Forkastede forslag

| Forslag | Hvorfor ikke |
|---|---|
| Plade med mørkt sidebånd (som EU-feltet) | Båndet smelter sammen med mørk baggrund og spiser for meget af mærket ved 22 px |
| Varebil i silhuet med gul plade | Den mørke bil forsvinder helt på mørk baggrund — kun den gule plade bliver tilbage som en tilfældig streg. Og ved 22 px er den mos |
| Plade i perspektiv | Skævheden ser ud som en fejl frem for et valg, når mærket er lille |

## Sidebredde

`--bredde: 1280px` — samme mål som leasio.dk kører med. Var 1200 px. Gutteren
`clamp(1rem, 4vw, 2.5rem)` var allerede ens. `--prosa` er `100%`; se nedenfor.

## Designsystem

Stylesheetet er skrevet om efter leasio.dk’s struktur: alle designværdier ligger som
CSS-variabler i ét `:root`-blok, og ingen farve, størrelse eller afstand må defineres
udenfor det. Rækkefølgen i filen er tokens → base → layout → komponenter → mørk
tilstand → smalle skærme.

- **Fonte:** Geist til brugerflade og brødtekst, Geist Mono til de store tal.
  Samme par som leasio.dk. Inter og JetBrains Mono er væk, og Syne før dem.
- **Monofont bruges sparsomt.** Kun til de store priser, tabelceller og nøgletal,
  hvor cifre skal flugte. Metatekst og kortenes måletal står i sans med
  `tabular-nums` — monofont i 11 px metatekst var det, der fik kortene at se
  rodede ud.
- **Ingen spatierede mikroversaler.** Kortetiketterne var 10 px versaler med
  0,07em spatiering. Nu 12 px sætningsversaler. Det var den enkeltændring, der
  gjorde mest.
- **Tal er højrestillet.** Kortenes måletal stod i to kolonner med etiketten
  over tallet. Nu én kolonne pr. række med etiket til venstre og tallet
  højrestillet, adskilt af tynde linjer. Cifrene flugter lodret, hvilket er
  hele grunden til `tabular-nums`. Samme princip i modelsidens spec-tabel,
  tilbudstabellen og sammenligningsmodalen: tal til højre, tekst til venstre,
  og kolonnehovedet flugter med sin egen kolonne.
- **Typografi:** tæt skala med 14px brødtekst, som leasio. Tætsluttende
  letter-spacing på overskrifter.
- **Palet:** næsten hvid baggrund i stedet for den varme papirfarve. Gul bruges
  **sparsomt** — fokusring, badge, understregning, det fremhævede tal. Grøn til
  “bedst” og god dækning, brændt orange til lav dækning.
- **Mørk tilstand** via `prefers-color-scheme`. Den virker, fordi alt er
  tokeniseret; kun en håndfuld komponenter har brug for en rettelse.
- Respekterer `prefers-reduced-motion` og har et print-stylesheet.

## Forsiden

Forsiden er **genereret** — `forsideHTML()` i `generate-pages.js` skriver `index.html`.
Den følger leasio.dk: sammenligningen er sidens krop, og tilbudstjekket er ét punkt i
menuen plus én sektion. Tidligere pegede hele forsiden på tilbudstjekket, og
prissammenligningen lå som en knap langt nede.

Rækkefølge: hero med nøgletal fra data · chips med antal · værktøjslinje · kortgrid ·
hvad udbyderne oplyser · erhverv vs. privat · tilbudstjek · FAQ · uafhængighed ·
forbehold. Plus sammenligningsbar og -modal.

### Reglerne bag bilkortet

**Ét kort = ét tilbud.** Kortet vælger det tilbud med lavest samlet pris pr. md. blandt
dem, hvor den kan beregnes, og alle kortets tal kommer fra det samme tilbud. Tidligere
viste kortet den lavest annoncerede pris og den lavest samlede pris på tværs af tilbud —
på Caddy Cargo betød det 2.245 kr. fra Nordania sammen med 3.078 kr. fra Semler Finans, og
løbetiden fra ingen af dem. Nordanias tilbud oplyser ikke udbetaling, så dets samlede pris
kan slet ikke beregnes. Et blandet regnestykke er værre end en lidt højere annonceret pris.

**Trækvægt står altid,** når den er oplyst — den afgør, om varebilen kan trække det den
skal. El-modeller får batteri og rækkevidde med. Felterne udfyldes i prioriteret orden:
lastrum, nyttelast, trækvægt, batteri, rækkevidde, totalvægt, længde — højst seks.

**Varianten vises kun, når den siger noget nyt.** Udbydernes `variant`-felt gentager tit
modelnavnet, så kortet skrev “Berlingo” under “Berlingo”. Nu skjules den, hvis den er
indeholdt i modelnavnet eller omvendt.

**“Mest solgte” kræver kilde.** Badgen vises kun, hvor `note` og `note_kilde_url` findes.
`populaer: true` står på fire modeller i datafilen, men kun Transit Custom har
dokumentation — de tre andre hævdede dermed noget, vi ikke kan vise. Flaget alene er ikke
nok til en faktuel påstand om markedet.

**Ingen “bedst oplyst”-badge.** Den modsagde kortet: badgen så på modellens bedste tilbud,
mens kortet viste et andet. I stedet står der en linje, når et dyrere tilbud på samme model
oplyser mere — “Et dyrere tilbud oplyser 4/5”. Det er en oplysning frem for et mærkat.

### Understregning

`li a { text-decoration: underline }` understregede **alt** i bilkortet — navn, priser,
labels, datoer — fordi hele kortet er et `<a>` inde i et `<li>`. Understregning gælder nu
kun `a:not([class])` i løbende tekst plus de få komponentlinks der skal have den. Alle
komponentanker har en klasse, så reglen rammer kun prosalinks.

### Funktioner

| Funktion | Detaljer |
|---|---|
| Chips | 8 typer med antal. Chips uden træffere udelades automatisk |
| Filtre | søg (model, mærke, udbyder), mærke, udbyder, nyttelast, lastrum, løbetid |
| Sortering | annonceret, samlet pr. md., udbetaling, nyttelast, lastrum, bedst oplyst |
| Visning | kort eller tabel. Tabel falder tilbage til kort under 720px |
| Sammenligning | vælg op til 4, sticky bar, modal med 19 rækker side om side |
| Delbar tilstand | filtre, sortering, visning og valgte modeller ligger i URL’en |

Sammenligningstabellen markerer den bedste værdi i hver række med en prik — men kun
når den er **entydigt** bedst. To modeller med 5,8 m³ får ingen markering. Retningen
er sat pr. række: lavest er bedst for priser og CO₂, højest for nyttelast og volumen,
og for totalvægt og løbetid markeres intet, fordi hverken højt eller lavt er bedre.

Kortene renderes i generatoren. Browseren **sorterer og skjuler kun** kort der allerede
står i HTML-en, og sammenligningstabellen bygges af den samme data som kortene. Der
skabes intet indhold klientside, så siden virker uden JavaScript og kan indekseres.

### Alle tilbud i én tabel

Kortene viser det **billigste** tilbud pr. model. Det svarer ikke på “hvilken udbyder er
billigst” eller “hvem oplyser mest”, for de spørgsmål går på tværs af modeller. Derfor
står hvert enkelt tilbud også i en sorterbar tabel nederst på forsiden — udbyder, model,
pris, udbetaling, samlet pr. md., løbetid, km/år, leasingtype, hvad der er inkluderet,
oplysningsgrad og kilde med dato. Filtrerbar på udbyder og model.

Rækken med lavest samlet pris pr. md. markeres grønt, så den kan findes på seksten linjer
uden at læse alle tal.

Sektionen åbner med en note, der er **beregnet fra data** og derfor ikke kan blive
forældet: hvor mange tilbud der inkluderer en driftspost, og på hvor mange modeller det
billigste tilbud inkluderer ingenting. Lige nu står der 2 af 16 og 8 af 8. Det er sidens
vigtigste pointe sagt i tal frem for i adjektiver.

Kortene viser desuden hvad det billigste tilbud inkluderer — som grønne postmærker, eller
“Ingen driftsposter inkluderet” i advarselsfarve.

### Tilgængelighed

Sammenligningsmodalen har fokusfælde: tabulator ruller rundt inde i dialogen, shift+tabulator
den anden vej, Escape lukker, fokus sættes på lukkeknappen ved åbning og returneres til det
element der åbnede den. `body` låses mod scroll mens den er åben. Sorterbare
kolonneknapper sætter `aria-sort`.

## Hvor de nye felter vises

Et felt i datamodellen er ikke noget værd, før det står et sted, hvor nogen
træffer en beslutning. De nye mål er derfor lagt ind fire steder:

| Sted | Hvad der kom til |
|---|---|
| Modelsidens specifikationstabel | alle felter, med kildenote under |
| Forsidens sammenligning (2–4 modeller) | nypris, maks. lastrumsbredde, læssehøjde, udvendig højde og længde |
| `/varebiler/` — den sorterbare oversigt | **Udv. højde** og **Nypris** som egne kolonner |
| Forsidens kortgitter | sorteringspillen **Købspris**, et prisloft-filter og nyprisen på hvert kort |
| Guiderne | højden bærer hele parkeringskælder-guiden |

I sammenligningen markerer prikken den bedste værdi i rækken. For udvendig
højde, udvendig længde og læssehøjde er det **laveste** tal, fordi en lav bil
kommer ind flere steder og en lav læssekant er nemmere at løfte op på.

**Venderadius og vendediameter vises ikke i sammenligningen.** Producenterne
opgiver det ene eller det andet, og de to mål kan ikke stilles op mod hinanden i
samme række. De står hver for sig på modelsiden, med deres eget navn.

### Købsprisen kan sorteres og filtreres

Nyprisen lå først kun som en kolonne i oversigtstabellen. Den er nu også på
forsiden, hvor sammenligningen faktisk foregår:

- **Sorteringspille „Købspris“** ved siden af Annonceret, Samlet og Udbetaling.
- **Prisloft-filter** med tre trin: under 200.000, 250.000 og 300.000 kr.
- **Nyprisen står på hvert kort**, lige under månedsydelsen. De to tal skal
  læses sammen — en ydelse siger ikke meget uden bilens værdi ved siden af.

To detaljer i filtreringen:

- En model **uden oplyst nypris kan ikke opfylde et prisloft** og holdes ude af
  resultatet. Ellers ville Iveco Daily, som ingen pris har, dukke op under
  „under 200.000 kr.“, som om den var billig.
- Ved sortering falder modeller uden pris **bagerst**, ikke forrest. Det er
  samme regel som for alle andre manglende tal på siden.

Volkswagen Crafters fra-pris sorterer med, men vises som „Nypris fra 320.995 kr.“
både på kortet og i specifikationstabellen, så det fremgår at tallet ikke gælder
den variant, målene er taget på.

Valget gemmes i URL'en som `?nypris=200000&sorter=nypris`, så en filtreret liste
kan deles.

## Biler med lad er deres egne karrosserier

`karrosseri` har tre værdier: `kassevogn`, `pickup` og `ladvogn`. Alle tre køres
på samme kørekort og under samme momsregler, men man vælger dem af forskellige
grunde, og de skal kunne findes hver for sig.

- **Pickup** er en lukket førerkabine med et lad bagved — Ranger, Amarok.
- **Ladvogn** er en chassiskabine, som en opbygger sætter et lad på — Iveco
  Daily Ladbil, Renault Master Chassis. Man vælger den, når lasten skal kunne
  læsses fra siden og ovenfra.

Fælles for de to:

- **Etiketterne skifter med karrosseriet.** De har et lad, ikke et lastrum, så
  tabellen skriver Ladlængde og Ladhøjde i stedet for Lastrumslængde og
  Lastrumshøjde. Koden afgør det på `harLad`, ikke på `pickup` alene.
- **Lastrumsvolumen står tomt med vilje.** Et åbent lad har ikke et rumfang, og
  ingen af producenterne opgiver et. At udfylde feltet med et tal beregnet af
  ladets tre mål ville være opdigtet.
- **Ladmålene mangler på begge ladvogne, og det er ikke en forglemmelse.** Et
  chassis leveres uden lad; opbygningen bestemmer selv målene, og hverken Iveco
  eller Hessel opgiver dem. Det står i `_mangler` på hver model.

## Størrelsesknapperne

Forsiden sorterer kassevogne i tre størrelser. Grænsen er **udvendig længde**,
fordi det er det mål, der afgør, om bilen kan parkeres, vendes i en bagård og
komme ind ad en port:

| Klasse | Længde | Eksempler |
| --- | --- | --- |
| Pizzabil | under 4.750 mm | Caddy, Berlingo, Combo, Transit Courier, ID. Buzz Cargo, PV5 |
| Mellem kassevogn | 4.750–5.400 mm | Transit Custom, Trafic, Vito, Transporter, Jumpy, Proace |
| Stor kassevogn | over 5.400 mm | Jumper, Boxer, Master, Daily, Sprinter, Crafter, TGE, Proace Max |

Indtil 28-09-2026 var der fire klasser: Transit Custom-klassen hed „lille“ og
Jumper/Master/Daily „mellem“. Det passede ikke med, hvad nogen i branchen kalder
bilerne, så „lille“ blev til mellem, og mellem + stor blev slået sammen.

`stoerrelse()` læser længden først og falder tilbage på lastrumsvolumen, hvor
længden ikke er oplyst. Findes ingen af delene, står klassen i data som
`stoerrelse` med en begrundelse i `_stoerrelse_grundlag` — fire modeller har det,
fordi Volkswagen, MAN og Toyota ikke offentliggør mål for dem. Uden det ville de
falde stiltiende ud af **alle** knapper og se ud, som om de ikke fandtes.

Grænserne står **ikke** på siden. Der stod en linje om, at størrelsen følger
bilens udvendige længde; den er fjernet igen. Det er en intern regel, ikke noget
en køber skal forholde sig til — han ved godt, hvor stor en bil han har brug for.

Pickup og ladvogn har **ingen** størrelsesklasse — de har deres egne knapper.
En knap uden biler bag sig renderes ikke.

## Færre valg

Vælgeren voksede til 13 knapper, 7 rullemenuer, 3 afkrydsningsfelter og 8
sorteringer — omkring **tredive kontroller, før man nåede den første bil**. Hver
enkelt gav mening, da den kom til. Tilsammen gav de ingen: når alt kan vælges,
er der ikke noget, der er vigtigt.

### Forsiden

| | Før | Nu |
| --- | --- | --- |
| Knapper | 13 | **7** — kun størrelse og karrosseri |
| Rullemenuer | 7 | **4** — søg, mærke, drivmiddel, købspris |
| Leasingtype | 3 | 3 — bliver, de er bevidst valgt |
| Sorteringer | 7 | **4** — pris pr. md., købspris, nyttelast, bedst oplyst |

Det fjernede er ikke tabt:

- **Diesel, el og benzin** blev én rullemenu i stedet for tre knapper.
- **Lastrum** er dækket af størrelsesknapperne, som bygger på samme tal.
- **Udbyder** har sin egen sektion på `/udbydere/`.
- **Løbetid** står ved hvert enkelt tilbud, hvor den hører hjemme.
- **Nyttelast over 1 t** og **2 europaller** var to knapper for to tal, der
  allerede står på hvert kort.
- **Udbetaling** som sortering var overflødig: „samlet pr. md.“ indregner den.

`FELTER` i forsidens script holder nu listen over rullemenuer ét sted. Den stod
før tre steder — i URL-læsningen, i bindingen og i nulstillingen — og skulle
holdes ens i hånden.

### De brugte biler

11 knapper blev til 6: karrosseriet plus værkstedsbil og kølebil, som folk
faktisk søger på. Mærke-rullemenuen røg, fordi rækken med mærkelinks står lige
ovenover og gør det samme, bare tydeligere.

### Knapperne ombryder

De lå før i en vandret scroller uden nogen antydning af, at der var mere. Et
filter, man ikke kan se, findes ikke. Nu ombryder de. Det er også grunden til,
at antallet skulle ned: syv knapper ombryder pænt, tretten gjorde ikke.

### Telefonen

Den første bil lå 1.368 px nede — knap tre skærmfulde. Taltavlen i heroen gik
fra fem tal til tre („Udbydere“ og „Opdateret“ stod allerede i linjen over
overskriften), linjen om at sammenligne to biler skjules under 560 px med
`.kun-bred`, og knapperne bliver en anelse mindre. Nu er tallet 1.207 px.

Mærkelinkene fik deres egen `.maerkelinks` i stedet for `.guidelinks`:
guide-gitteret er bygget til links, der er en hel sætning, og ti tostavelses
mærkenavne fyldte fire rækker halvtomme kasser. Som piller fylder de én række
på 31 px.
## Nyttelast som interval

Producenterne opgiver næsten altid lasteevnen som et spænd, fordi ekstraudstyr
trækker fra. `nyttelast_kg` holder det **laveste** tal — det er det, der sorteres
og filtreres på, og det konservative valg — og `nyttelast_max_kg` det højeste.

Intervallet **vises kun, når spændet er over 50 kg**. Under det er forskellen uden
betydning for et køb, og to tal ville bare støje. Ford Transit Custom vises derfor
som 1.125–1.216 kg, mens Toyota Proace vises som 836 kg, selv om tabellen giver
836–846.

For Toyota er lasteevnen **udledt**: totalvægt minus køreklar vægt, som begge står
i Toyotas egen tabel. Trækket er eksakt pr. definition, ikke et skøn, og det står
i kildenoten.

### Hvilket tal vi vælger, når kilden giver et spænd

Reglen er **det mindst flatterende**: laveste nyttelast, laveste km/l, højeste
CO₂, højeste udvendige højde. Hvor et spænd ikke kan reduceres til ét meningsfuldt
tal — fx Fords grønne ejerafgift på 5.980–6.480 kr. for hele motorrækken — står
feltet tomt, og grunden står i `_mangler`.

## Salgsprisen står samme sted på alle kort

Nyprislinjen renderes **altid**, også når prisen mangler, hvor der så står
„Nypris ikke oplyst“. Det er ikke kosmetik: uden den ville kortene have
forskelligt antal linjer, og prisen ville stå i forskellig højde fra kort til
kort.

Navneblokken har desuden en fast højde, og modelnavnet klippes ved to linjer,
varianten ved én. Uden det svingede blokken fra 20 til 89 px, fordi nogle
varianttekster fylder fire linjer. Nu sidder nyprisen 173 px fra kortets top på
**alle** kort, så øjet kan scanne lodret ned gennem gitteret.

## Guider — landingssider pr. behov

`/bedste-tilbud/` var før én lang side med seks ranglister. Den er nu en **hub**
med tretten guidekort, hver med sit eget tal, der linker til sin egen landingsside
under `/bedste-tilbud/<slug>/`. Opbygningen følger leasio.dk's hub: kort → proces
→ metode → FAQ → CTA.

| Guide | Kriterium | Tilbud |
|---|---|---|
| billigste-varebil | samlet pris pr. md. | 48 |
| finansiel-eller-operationel-leasing | aftaletypen oplyst | 46 |
| varebil-med-traek | anhængervægt fra 2.000 kg | 27 |
| stor-varebil | totalvægt fra 3.000 kg | 25 |
| varebil-til-parkeringskaelder | udvendig højde under 2,10 m | 25 |
| varebil-med-service-inkluderet | service dækket af ydelsen | 22 |
| varebil-med-hoej-nyttelast | nyttelast fra 1.000 kg | 20 |
| varebil-til-europaller | mindst to europaller | 20 |
| varebil-under-3500-kr | samlet pris under 3.500 kr./md. | 16 |
| varebil-med-kort-loebetid | 36 eller 48 måneder | 15 |
| lille-varebil | lastrum op til 4 m³ | 12 |
| el-varebil | samlet pris blandt elektriske | 10 |
| varebil-med-lav-udbetaling | førstegangsydelse op til 40.000 kr. | 9 |

Guiderne er defineret i ét array, `GUIDER`. Hver har et `filtrer()`, der afgør
hvilke tilbud der kvalificerer, og et `maal()`, der afgør rækkefølgen.

### Reglen: en tom guide skrives ikke

`guideRaekker()` køres før siden skrives. Er der nul kvalificerede tilbud,
springes guiden over — både som side, som kort på hub'en og i sitemappet. En
landingsside, der lover tilbud og ikke har nogen, er værre end ingen side.

Det er også grunden til, at guiden om lav udbetaling hedder netop det og ikke
„uden udbetaling“: ingen af de udbydere, vi følger, tilbyder varebilsleasing
uden førstegangsydelse. En side om noget, der ikke findes, ville trække trafik
og skuffe den.

### Hver guide viser to tal

Ranglisten sorterer på guidens eget kriterium, men tabellen viser også en
`ekstra`-kolonne — typisk prisen. På parkeringskælder-guiden sorteres der på
højde, men prisen står ved siden af, så læseren ikke skal klikke videre for at
se, om den lave bil også er dyr.

Hver guideside har FAQ med `FAQPage`-schema, så spørgsmålene kan vises direkte i
søgeresultatet. Spørgsmålene er skrevet som nogen faktisk ville stille dem, og
svarene siger også hvad vi **ikke** ved.

### Hvad hub'en beholdt

Fire rangordner har ingen egen guide, men flyttede op på hub'en: lavest
annonceret månedsydelse, bedst oplyste tilbud, billigst pr. kilo nyttelast og
billigst pr. kubikmeter lastrum. Den første står der med vilje — den viser,
hvordan rækkefølgen ser ud, når man kun ser på det tal, udbyderne annoncerer,
og hvor meget den afviger fra den rigtige.

Guidekortene ligger også på forsiden. Det er siden med flest links ind, og
guiderne er dem, der skal findes i en søgning.

## Landingssider

Sider med købsintention frem for guides. Alt indhold beregnes fra `varebiler.json`, så
der ikke kan opstå sider med tom eller opdigtet tekst. 26 URL-er i sitemap mod 12 før.

| Side | Antal | Indhold |
|---|---|---|
| `/bedste-tilbud/` | 1 | Seks ranglister, hver med sit kriterium |
| `/varebiler/<mærke>/` | 6 | Mærkets modeller, alle dets tilbud, position i feltet |
| `/udbydere/` | 1 | Alle udbydere rangeret efter oplysningsgrad |
| `/udbydere/<udbyder>/` | 6 | Udbyderens tilbud, inkluderet vs. ikke inkluderet |

Mærkesiderne lukkede samtidig et hul: `/varebiler/ford/` gav før 404, selvom
`/varebiler/ford/transit-custom/` fandtes.

### Ranglisterne oplyser altid kriteriet

`/bedste-tilbud/` kårer **ingen vinder**. En “bedste”-liste uden oplyst kriterium er en
påstand, ikke en oplysning — og det er den slags siden findes for at afkode. Derfor står
kriteriet over hver liste, og der sorteres på ét synligt tal:

- Lavest samlet pris pr. md.
- Lavest annonceret månedsydelse
- Lavest udbetaling
- Bedst oplyste tilbud (kun tilbud der oplyser mindst én post)
- Billigst pr. kilo nyttelast
- Billigst pr. kubikmeter lastrum

De to sidste er `samlet pris / nyttelast` og `samlet pris / volumen`. De favoriserer de
store varebiler, og det er meningen: skal der bæres meget, er en billig lille bil ikke
billig. De kræver, at producenten oplyser målet, så modeller uden mål står ikke på dem.

De to øverste lister giver **forskellig rækkefølge**. Det er hele grunden til, at
annoncerede månedsydelser er dårlige at træffe beslutninger på, og de står derfor ved
siden af hinanden.

### Mærkesiderne sætter mærket i feltet

`maerkeIMarkedet()` beregner et afsnit, der sammenligner mærket med medianen for alle
tilbud: billigste samlet, pris pr. kg og pr. m³, oplysningsgrad, og hvilke drivmidler
mærket er repræsenteret med. Uden det var Kia-siden 261 ord — for tyndt til at rangere.
Med det er den 488, og indholdet er tal vi kan dokumentere frem for fyld.

Afsnittet håndterer manglende data: mangler en model nyttelast, udelades
nyttelast-sammenligningen i stedet for at stå tom. (Kia manglede den indtil
28-09-2026, hvor Kia Import Danmarks specifikationsark for PV5 Cargo L2H1 kom
ind: `api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-specifikationer.pdf`. Arket
opgiver ikke nyttelasten direkte; den er totalvægt minus køreklar vægt, som
for Toyota Proace. Kias forbehold om „ikke lanceret i Danmark“ står ikke
længere i prislisten.)

## Modelsiden

Heroen er to kolonner: tekst til venstre, bilens billede til højre i 16:10.
Modeller uden billede får mono-pladsholderen, samme som kortene. Før viste
modelsiden **intet** billede — kun tekst.

Nøgletallene er udvidet fra tre til op til seks og viser det man kom efter:
billigste annonceret, billigste inkl. udbetaling, nyttelast, lastrum, trækvægt
og antal udbydere. Felter uden data udelades, så en model med få mål ikke får
tomme kolonner. Batteri erstatter et felt på elmodeller.

Uden redaktionel `note` skrives manchetten af data — antal tilbud og hvilke
udbydere — så heroen ikke står tom. Variantlinjen siger hvilken variant målene
gælder.

Den lange forklaring af kolonnerne er skåret fra ca. 500 til 224 tegn. Den
fulde tekst stod i forvejen i “Om tallene” nederst, så intet forsvandt — men
den lå som en mur af brødtekst før tabellen på hver enkelt modelside.

Spredningsnoten (“forskel mellem billigste og dyreste”) er flyttet fra før
overskriften til efter tabellen, som den kommenterer.

### Brødteksten fylder spalten

Modelsiden havde først **fem forskellige tekstbredder** — 45, 53, 63, 90 og 93
procent af spalten — så teksten stoppede vilkårligt midt på siden. Samme klasse
`.kilde` var 541 px under tabellen og 1.120 px under specifikationerne.

Rodårsagen var, at `--prosa` var sat i **`ch`**. Den enhed skalerer med
fontstørrelsen, så 72ch gav 672 px i 14 px brødtekst og 576 px i 12 px
metatekst — to blokke med samme `max-width` flugtede aldrig. Første rettelse
gjorde målet fast (`36rem`).

Det løste flugtningen, men ikke det, brugeren faktisk så: teksten stoppede
stadig før spaltens kant. `--prosa` er derfor nu **`100%`**. Det giver lange
linjer, og det er et bevidst valg — siden er et opslagsværktøj, hvor noter og
kildeangivelser læses i spring, ikke i flow, og en tekst der stopper midt på
siden ser ud som om der mangler noget. De to hero-overskrifters `ch`-lofter
(24ch og 26ch) er fjernet af samme grund.

`ch` bruges nu kun i tabelceller, hvor målet skal følge elementets egen
fontstørrelse: variantlabelen (27ch) og den højrestillede tekstcelle i
specifikationsgitteret (30rem). Begge er højrestillede, så loftet ikke efterlader
et synligt hul.

### Hero uden billede fyldte kun halvdelen

`.bil-hero` bruges både på modelsiderne, hvor der står et billede i højre side,
og på `/varebiler/`, `/udbydere/` og `/bedste-tilbud/`, hvor der ikke gør.
Gitteret var fast `minmax(0,1fr) minmax(0,46%)`, så de tre oversigtssider
reserverede knap halvdelen af bredden til et billede der aldrig kom — og
manchetten stoppede ved 49 %.

Gitteret er nu én kolonne som udgangspunkt, og to kun når der faktisk er et
billede (`.bil-hero:has(.bil-hero__billede)`). Browsere uden `:has()` får én
kolonne overalt, hvilket er den læselige af de to udfald.

Den håndskrevne `/saadan-tjener-vi-penge/` havde sin egen inline `max-width:60ch`
på manchetten; den er fjernet. De to håndskrevne sider har eget markup og skal
altid rettes særskilt.

Flex-rækker som hero-eyebrowen, knapperækken og statuslinjen fylder fortsat
bredden — de er layout, ikke brødtekst. Det samme gælder kort i gitre
(`.kort`, `.bilkort`, `.rangblok`, `.udbyder`), der måler 20–28 % hver: de er
kolonner, ikke afkortet tekst.

### Specifikationerne fylder spalten

`.specs-tabel` var låst til 640 px, så den højre halvdel af siden stod tom.
Erstattet af `.specs-grid`: et gitter med `auto-fit, minmax(290px, 1fr)` — tre
kolonner på desktop, én på mobil — med etiket til venstre og tal højrestillet,
samme opbygning som kortenes måletal. Variantnavnet er tekst og fylder hele
rækken.

### Danske bogstaver i noterne

64 tekstfelter i `varebiler.json` stod med ASCII-translitteration — “paa”,
“staar”, “Vilkaar ikke oplyst”, “daek” — fordi de blev skrevet gennem
shell-scripts. Felterne er **brugervendte**: de står under tabelrækkerne og
under specifikationerne.

Rettet med en ordliste frem for blind søg-erstat. Feltnøglerne (`nyttelast_kg`,
`anhaengervaegt_kg`, `foerstegangsydelse`, `daek`, `vejhjaelp`) er urørte — de er
datamodel, ikke tekst. Og `Citroen` blev beskyttet først, ellers var det blevet
“Citroøn”.

### To formuleringer der ikke må forveksles

Kolonnen **Inkluderet** skrev “Intet oplyst”, når `inkluderet` var tom — også
når udbyderen eksplicit havde skrevet at posterne *ikke* er med. Det stod side
om side med “2/5 oplyst” og modsagde sig selv. Nu:

- poster inkluderet → de listes
- intet inkluderet, men noget fravalgt → **“Intet inkluderet”**
- hverken det ene eller det andet → **“Intet oplyst”**

Forskellen er hele sidens præmis: at tage stilling er ikke det samme som at tie.
Ford Transit Custom viser nu begge — tre tilbud der intet oplyser, og ét der
oplyser at ingenting er inkluderet.

Datoer vises som “22. sep. 2026” i stedet for `2026-09-22`.

## /varebiler/ — specifikationstabel

Ikke en kopi af forsiden. Det er alle modellers tekniske tal i én sorterbar tabel med
15 kolonner, så lastrumsmål og nyttelast kan læses på tværs. Modelnavnet bliver stående
når tabellen scrolles sidelæns. Tomme felter vises som tankestreg og sorteres altid
sidst i begge retninger — et manglende mål er ikke nul.

De to sider har bevidst forskellig opgave: forsiden sammenligner **tilbud**, oversigten
sammenligner **biler**.

### Billeder

`assets/img/varebiler/<id>.webp` (800×450) og `<id>-stor.webp` (1280×720). Kortene viser
dem i 16:10. **26 af 28 modeller har billede**; MAN TGE og VW Amarok mangler, og
grunden står i modellens `_billede_mangler`.

Husets stil er **studierendering på hvid**, set forfra i tre kvart eller fra siden.
Miljøbilleder bruges kun når der ikke findes en ren rendering.

Klargøringen skelner mellem de to:

- **studie** — hele bilen bevares. Rammen *polstres* op til 16:9 med billedets egen
  baggrundsfarve, som læses i hjørnet. At beskaere en studierendering klipper halen
  af bilen; det skete for Vito i første forsøg.
- **miljø** — beskaeres til 16:9, for her er baggrunden en del af billedet.

Hvert billede vurderes på et kontaktark før det installeres (`ark-lokal.js` i
scratchpad). Det er hurtigere end at åbne dem enkeltvis, og det er nødvendigt:

- **Volkswagens egne** billeder af Transporter og Crafter kunne ikke bruges. Crafter
  kører væk fra kameraet med bevægelsesslør, og Transporter står langt inde i en
  gård bag en parasol og nogle mennesker. ID. Buzz Cargo vises kun med fiktiv
  firmabemaling („KloaKim“, „Reklamekongen“). Renderingerne kom i stedet fra
  Volkswagens prislisteside og fra Leasing.dk.
- **Leasing.dk's Transporter-miniature var en Multivan** — ruder hele vejen langs
  siden, altså persontransport, ikke den kassevogn vi fører. Forkastet.
- **MAN TGE har intet billede.** TGE og VW Crafter er samme bil fra samme fabrik,
  kun mærket er forskelligt. MAN Scandinavias danske varevognssider svarer 404, og
  på det ene billede vi fandt kunne mærket ikke læses. Et Crafter-billede på
  MAN-siden ville være misvisende, så den står med pladsholder.
- **VW Amarok har heller intet.** Volkswagen.dk har kun to Amarok-billeder: et
  bagfra-skål på en landevej, hvor bilen ikke kan genkendes, og et bannerbillede
  med „5 års garanti“ brændt ind i billedfladen — det ville læses som vores eget
  udsagn. Begge forkastet.

**Volkswagens billedserver låser hver størrelse.** `assets.volkswagen.com/is/image/`
er Scene7, og forespørgslen er base64 i query-strengen. Den slutter på en fire-tegns
nøgle — `&67de` — som hører til præcis den kombination af parametre. Ændrer man `wid`,
`hei` eller `fmt`, svarer serveren `invalid lock` som ren tekst med status 200, så
filen ser hentet ud, indtil man kigger i den. Nøglerne står i sidens egne `srcset`;
afkod dem med base64 og brug en størrelse der allerede er der.

**Peugeot og Opel afviser nøgne klienter med 403** — samme som Citroën og Kia.
De kræver et fuldt browser-headersæt med `sec-ch-ua`, `sec-fetch-*` og en
`Referer` fra deres eget domæne.

Mercedes' billedserver udleverer hverken PDF'er eller billeder til os. Sprinter og
Vito er derfor forhandlerrenderinger fra Ejner Hessel — samme kilde som de tekniske
tal på de to modeller.

Samlet vejer de 52 bilfiler 1,4 MB. Dertil én `pladsholder.webp`.

**Fem er studierenders på hvid**, hentet fra producenternes egne render-tjenester:

| Model | Kilde | Oplysning |
|---|---|---|
| Ford Transit Custom | `assets.ford.dk` modeloversigt | 1600×900 |
| Ford Transit Courier | `assets.ford.dk` modeloversigt | 1600×900 |
| Kia PV5 Cargo | Kias 360-visning, Clear White + stålfælge, ramme 0000 | 1920×1080 |
| Citroën Berlingo | Citroën DK variantbilleder | 800×400 |
| Renault Kangoo | Renaults billed-CDN, beskåret | 2560×1440 |
| Ford Ranger | `assets.ford.dk` 360-spinner, Wildtrak Double Cab i Agate Black | 1600×900 |
| Iveco Daily Ladbil | Ivecos kampagneside | 1920×1080 |
| Renault Master Chassis | Ejner Hessels bilside | 1571×1080 |

De to ladvogne viser bilen, som den faktisk leveres: Renault Master som bart
chassis uden lad, Iveco Daily med ladet på. Det er ikke en inkonsekvens — Hessel
sælger et chassis, Iveco sælger en færdig ladbil, og billedet skal vise det, man
får. Ivecos side har også samme rendering med et „Fast Lane“-mærke lagt ind i
billedfladen; vi bruger den rene.

Ford har også en 360-spinner i `frozen-white` på modelsiden, hvis der skal bruges en
anden vinkel — farven vælges ved at klikke swatchen, hvorefter URL-erne dukker op i DOM-en.

**To er miljøbilleder**, fordi producenten ikke udstiller studierenders offentligt:
VW Caddy (livsstilsbillede, beskåret om bilen) og Renault Trafic (kørende 3/4-skud;
Renaults Trafic-sæt på 13 billeder indeholder intet studieskud).

#### Normalisering

Renders kommer i vildt forskellig indramning — Ford fylder rammen, Kia har luft hele
vejen rundt. `normaliser-renders.js` trimmer den ensfarvede kant væk og skalerer bilen
til 90 % af kortets bredde på hvid. Uden det stod Kia som en legetøjsbil ved siden af
Fords. Råfilerne gemmes, så indramningen kan justeres uden at hente igen.

#### Rettigheder

`billede_kilde` i `varebiler.json` holder url, ophavsmand, dato, `stil` (studie eller
miljoe) og et forbehold pr. billede. **Billederne er ikke licenseret til os.**

Modeller uden billede får ikke en pladsholdergrafik. De får modelnavnet sat i monofont,
som leasio gør det. Det ser bevidst ud frem for ødelagt, og det er ærligt: vi har ikke
et billede.

## Brugte varebiler — annoncesamarbejde med Brdr. Jensen

`/brugte-varebiler/` udstiller Brdr. Jensens lager af brugte varebiler efter
aftale med dem. Det er **annonceplads**, ikke en sammenligning, og det er den
eneste del af siden, hvor vi har en økonomisk interesse i, at nogen køber noget.

### Det ændrede loftet i bunden af hver side

Der stod: „Vi modtager ikke provision, betaling for placeringer, affiliatehonorar
eller anden betaling fra leasingselskaber, forhandlere eller importører.“ Med en
salgsaftale med en forhandler er den sætning ikke sand længere.

Den blev ikke fjernet — den blev præcis. Nu står der, at det gælder
**sammenligningen af leasingtilbud**, med de brugte biler nævnt som undtagelsen.
Det samme sted fire steder mere:

| Hvor | Før | Nu |
| --- | --- | --- |
| Bundtekst, alle sider | „Vi modtager ikke provision …“ | Samme, men afgrænset til leasingsammenligningen + link til undtagelsen |
| CTA-blok, 28 modelsider + guider | „Uvildigt — vi får ikke en krone fra branchen“ | „Leasingselskabet betaler os ikke en krone for at sige god for tilbuddet“ |
| Forsidens hæfte | „Uafhængig — vi får ikke penge fra branchen“ | „Uafhængig — ingen udbyder kan købe en placering“ |
| Forsidens afsnit | „Vi får ikke penge fra branchen“ | „Ingen udbyder kan købe en placering“ + undtagelsen |
| /saadan-tjener-vi-penge/ | To indtægtskilder | Tre, med „Betalt af forhandleren“ som sin egen række |

Og `samarbejde()` i `generate-brugte.js` sætter oplysningen øverst på **hver
eneste** side i afsnittet — både oversigten og alle 325 bilsider. En linje i
bunden opfylder ikke markedsføringslovens krav om, at kommerciel hensigt skal
fremgå klart.

### Hvordan lageret hentes

Brdr. Jensens side rendres af CarAds i browseren, så HTML'en er tom for biler.
Men:

1. `https://www.jensenas.dk/carads-sitemap-167.xml` lister alle varebils-URL'er,
   og produkt-id'et står sidst i hver slug.
2. `https://nextgen.carads.io/products/167/x<id>` giver hele bilen som JSON —
   mærke, variant, km, årgang, forbrug, CO₂, grøn ejerafgift, trækvægt, udstyr,
   beskrivelse, billed-id'er, kontantpris og leasingforslag.
3. `https://nextgen.carads.io/assets/translations/da` oversætter udstyrsnøglerne
   (`hndfritelefon`) til læsbare etiketter („Håndfri telefon“). Uden den er
   nøglerne ubrugelige — de danske bogstaver er strippet.

`scratchpad/jensen-hent.py` henter, `scratchpad/jensen-byg.py` bygger
`brugte.json`. Henteren springer filer over, den allerede har, så den kan
køres igen uden at belaste deres server.

### To tal vi nægter at gengive

Brdr. Jensens leasingforslag indeholder to tal, der ikke hænger sammen:

- **Restværdien.** Deres bilside viser præcis 1,25 gange det tal, deres eget
  lagersystem indeholder, og kalder begge dele „ekskl. moms“. På Sprinter 215
  står 50.000 mod 40.000, på Daily 35S18 75.000 mod 60.000. Faktoren er momsen,
  så ét af de to tal bærer den forkerte etiket.
- **„Totalpris i løbetiden“.** 15.000 kr. på en bil med 2.695 kr./md. i 60
  måneder. Det kan ikke være en totalpris.

Begge ligger i `brugte.json` under `leasing._omstridt` og vises ikke. Vi gengiver
månedsydelse, løbetid og udbetaling, som står ens begge steder, og skriver på
bilsiden hvorfor restværdien mangler — på finansiel leasing er det netop den, der
afgør, hvad bilen koster. **Skal de vises, skal forhandleren bekræfte dem
skriftligt først.**

### Hvad vi ikke har

Lasteevne og totalvægt. CarAds' `capacity` indeholder kun trækvægt — ikke et
eneste af de 325 køretøjer har en lasteevne registreret. Vi regner den ikke ud:
på en brugt bil afhænger den af den konkrete opbygning, og reoler, lift og
alukasse vejer hver deres.

### Billederne hotlinkes

Fra `nextgen.carads.io/media/<id>/<format>`, ikke fra vores egen server. Det er
bevidst: sælges bilen, forsvinder billedet, og det er bedre end at vi viser et
foto af en bil, der ikke står der længere.

CarAds leverer ukomprimeret PNG. `800x0` vejer 600 kB, `400x300/cover` vejer 150.
Kortene er 284 px brede, så de beder om det beskaarne 400 px-format; heroen på
bilsiden bruger `1280x0` og galleriet `700x0`.

### Kategorierne

`details.body` bliver til vores eget `karrosseri` — `kassevogn`, `ladvogn`,
`pickup`. Dertil `personbil-van`: ni biler er Ford Kuga, Mercedes B-klasse,
Audi SQ5 og lignende på gule plader. De er varevogne i registret, men en helt
anden slags bil, og de har deres egen knap, så de kan filtreres fra.

CarAds' `categories` bliver til `opbygning` — værkstedsbil, alukasse, kølebil,
mandskabsvogn. En bil kan have flere.

### Stylesheetet fik en version

Cloudflare serverer `style.css` med `max-age=14400`. Da de brugte biler blev
rullet ud, fik en tilbagevendende besøgende ny HTML og fire timer gammel CSS —
gitteret faldt sammen til én spalte, fordi `.brugtgitter` ikke fandtes i det
cachede ark. Linket hedder nu `/assets/style.css?v=<hash>`, hvor hashen er
filens egen sha1. Generatorerne udregner den selv; `stemplCssVersion()` i
`generate-pages.js` stempler den ind i de to håndskrevne sider, så det ikke kan
glemmes.

### Kør

```
python scratchpad/jensen-hent.py     # henter lageret (springer kendte over)
python scratchpad/jensen-byg.py      # bygger brugte.json
node generate-brugte.js              # 325 bilsider + oversigt
node generate-pages.js               # sitemap, menu, CSS-stempel
```

Rensning mellem kørsler: slet `scratchpad/jensen/raa/` for at hente forfra, og
`brugte-varebiler/` for at fjerne sider til biler, der er solgt.

## Gulpladehåndbogen — /haandbogen/

Formålet er at møde folk, der endnu ikke leder efter et leasingtilbud. „Må jeg
køre hjem i firmabilen?“ kommer før „hvad koster en Transit Custom“, og den
første søgning er der ingen leasingportal, der svarer på.

`viden.json` → `generate-viden.js` → `/haandbogen/` + én mappe pr. artikel. Artiklerne
er struktureret data, ikke HTML: `afsnit[]` med `h2`, `tekst[]`, `punkter[]` og
`efter[]`, plus `kilder[]` og `faq[]`.

### Reglen er den samme som for priserne

**Hvert faktuelt udsagn har en kilde med url og dato**, og kilderne står i
artiklen — ikke i en fodnote. Hele sidens præmis er, at et tal uden kilde ikke
er et tal; det gælder også en regel.

Og **hvor en sats reguleres årligt, skriver vi den ikke**. Privatbenyttelses-
afgiften er det tydeligste eksempel: strukturen står (to vægtklasser, halv sats
ved delvis privat brug, opkræves med den grønne ejerafgift), men beløbet henviser
vi til Motorstyrelsen for. Et forældet tal er værre end intet tal — her koster
det læseren rigtige penge.

### Artiklerne

| Artikel | Emne | Grundlag |
| --- | --- | --- |
| Hvad må du køre i en varebil på gule plader? | Regler | Motorstyrelsen, Den juridiske vejledning |
| Moms på varebil: hvornår får du fuldt fradrag? | Moms og afgift | Den juridiske vejledning (momsloven §§ 41, 42) |
| Totalvægt, nyttelast og kørekort | Mål og vægt | Færdselsstyrelsen, borger.dk |
| **Det står ikke i leasingtilbuddet** | Sammenligning | **Vores egen tabel** |
| Leasing eller køb af varebil? | Økonomi | Den juridiske vejledning + vores egen tabel |
| Varebil eller pickup? | Valg af bil | Færdselsstyrelsen + vores egen tabel |
| Grøn ejerafgift på varebil | Moms og afgift | Motorstyrelsen + vores egen tabel |
| Specialindretning | Regler | Den juridiske vejledning, Motorstyrelsen |
| Målene du skal tjekke, før du skriver under | Mål og vægt | Vores egne måltabeller |
| Fri bil på gule plader | Regler | Den juridiske vejledning C.A.5.14.1.12 |
| Syn af varebil | Drift | Færdselsstyrelsen |
| Kilometergrænsen på en leasingaftale | Sammenligning | **Vores egen tabel** |
| Elvarebil i praksis | Vælg den rigtige bil | Motorstyrelsen + vores egne mål |
| Halvdelen af nye varebiler er elektriske | Vælg den rigtige bil | Mobility Denmark |

### Artiklerne er delt i fire

Tretten kort i ét gitter er en liste, ikke en håndbog — og syv emner, hvor to af dem
havde én artikel hver, var ikke en inddeling, men et uheld. Grupperne står i
`viden.json` under `grupper`, så rækkefølgen er en redaktionel beslutning:

1. **Reglerne** (4) — det folk søger på
2. **Moms og afgift** (2)
3. **Leasingaftalen** (3) — bygget på vores egen tabel
4. **Vælg den rigtige bil** (5) — der man ender

En tom gruppe renderes ikke, og en artikel med et emne, der ikke findes i
`grupper`, havner under „Øvrige“ i stedet for at forsvinde uden at nogen opdager det.

På oversigten vises kortene **uden** emne-etiket — gruppens overskrift står lige
ovenover, og „Reglerne“ fem gange i træk er støj. `kortHTML(a, udenEmne)`.

### „Læs også“ viser tre, ikke tolv

Nederst på en artikel stod alle de andre. Det er en indholdsfortegnelse, ikke en
anbefaling. Nu tre stykker, med **samme gruppe først**: den, der læser om moms,
skal ikke have syn som det første forslag.

### Modelsidernes tre artikler roterer

Første version tog de tre højest vægtede — og da vægtene er næsten ens for alle
kassevogne, viste **alle 28 modelsider de samme tre**. Tre artikler fik 84 links
tilsammen, og fire fik nul udefra.

Nu står kun den mest relevante fast (pickup-artiklen på en pickup, elartiklen på en
elbil). De to andre roterer over de næste ni med et **fast forskud udregnet af
modellens eget id** — ikke tilfældigt, så siden bygger ens hver gang, og en URL
viser det samme i morgen som i dag. Resultat: alle fjorten artikler har nu mellem
2 og 24 links ind udefra.

`scratchpad/linkkilder.py` viser fordelingen og skelner mellem links fra håndbogen
selv og links udefra — det er de sidste, der trækker læsere ind.

**Split- og deleleasing er valgt fra.** Reglerne er rodede, de ændrer sig, og et
forkert svar koster læseren rigtige penge. Artiklen skrives ikke, før grundlaget er
fast nok til, at den kan stå med kilde på hvert udsagn.

### Tal fra vores egne data står som pladsholdere

„Det står ikke i leasingtilbuddet“ er den eneste af artiklerne, ingen anden kan
skrive: den bygger på en gennemgang af hvert eneste tilbud i tabellen. Men en
artikel, der siger „ét af 54 tilbud nævner vejhjælp“, er forkert i det øjeblik,
der kommer et tilbud mere.

Tallene skrives derfor ikke i hånden. Artiklen indeholder `{{noegle}}`, og
`beregnTal()` i `generate-viden.js` regner værdien ud af `varebiler.json`, hver
gang siden bygges. Mangler en nøgle, **brækker bygningen med det samme** — en tom
pladsholder i en færdig artikel er værre end en fejlmeddelelse.

Nøglerne: `tilbud`, `modeller`, `intet`, `finansiel`, `operationel`, `utypet`,
`uden_km`, `l36`/`l48`/`l60`, `fg_lav`/`fg_hoej`/`fg_antal`, og for hver af de fem
driftsposter `<post>_inkl`, `<post>_ikke` og `<post>_tavs`. Dertil afgiftsnøglerne
`afgift_lav_bil`/`afgift_lav_aar`, `afgift_hoej_bil`/`afgift_hoej_aar`,
`afgift_forskel_5aar` og de tilsvarende `diesel_*`, plus målnøglerne
`hoejde_modeller`, `under_210`, `paller_modeller` og `laesse_modeller`.

**Hele artiklen køres gennem `fyldUd()`, ikke felt for felt.** Første version
erstattede kun i brødteksten, og så stod der `{{tilbud}}` råt i FAQ, titel,
beskrivelse og schema. Nu køres hele datastrukturen igennem én gang, lige efter den
er læst — så kan det ikke glemmes i det næste felt, nogen tilføjer.

**Sætningerne skal tåle et nul.** Første udkast sagde „0 tilbud inkluderer dæk“,
hvilket læses som en tastefejl. Nu står der „{{daek_inkl}} af {{tilbud}} tilbud
inkluderer dæk“, som også fungerer, hvis tallet en dag bliver tre.

### Navnet

Afsnittet hed `/viden/` i ét døgn. „Viden“ siger ingenting — enhver side kan påstå
at have viden. **En håndbog er noget, man slår op i og vender tilbage til**, og det
er præcis, hvad et afsnit med kildehenvisning på hvert udsagn skal være.

„Gulpladehåndbogen“ er samtidig et udtryk, ingen andre ejer. Menupunktet hedder
„Håndbogen“, URL'en `/haandbogen/`, og h1 på oversigten er det fulde navn.

De gamle URL'er redirecter. `_redirects` håndterer stier (i modsætning til
hostnavne, som Pages ignorerer — www-redirecten er en Redirect Rule i
dashboardet):

```
/viden/*  /haandbogen/:splat  301
/viden    /haandbogen/        301
```

Krydslinkene **inde i artiklerne** skulle med over særskilt — de står som
markdown i `viden.json`, ikke som kode. Linkcheckeren fangede dem: otte døde mål.

### Krydslinks

Artiklerne lå kun i menuen og med en knap på forsiden. En sektion uden
indgående links bliver hverken fundet af læsere, der er midt i noget, eller af
Google.

`videnBlokHTML()` sætter derfor **„Før du skriver under“** på alle 28 modelsider,
med tre artikler valgt efter bilen. `videnForModel()` vægter „Varebil eller
pickup?“ højest på en pickup eller ladvogn og lavest på en kassevogn, og sætter
„Grøn ejerafgift“ lavt på elbiler, hvor afgiften næsten ingenting er. Listen
læses af `viden.json`, så den ikke skal holdes to steder.
### Let opmærkning

`tekst()` i generatoren kan `**fed**` og `[tekst](link)` — ikke mere. Det er
ikke et markdown-bibliotek: artiklerne skrives af os, og de to ting er alt,
brødteksten har brug for. Der escapes **først**, så en artikel aldrig kan smugle
HTML ind i siden.

### Kør

```
node generate-viden.js       # /haandbogen/ + artiklerne
node generate-pages.js       # sitemap og CSS-stempel
```

## „Mest solgte“ sad på ni biler, der ikke var det

Badgen stod på **10 af 28 biler** på forsiden. Kun én af dem er Danmarks mest
solgte varebil; de ni andre er nr. 2 til nr. 10. Badgen påstod altså noget
forkert om ni biler — det var ikke rod, det var en faktuel fejl ganget med ni.

Et badge har ikke plads til forskellen på „nr. 1“ og „nr. 7“. En manchet har,
og den fandtes allerede: modelsiden skriver „Nr. 6 på listen over Danmarks mest
solgte varebiler — 154 nyregistreringer i marts 2026“ med kilde. Badgen er
væk, `bil.note` står. **Ingen oplysning gik tabt — kun påstanden.**

Forsiden gik fra 17 badges til 7: fem „El“, én „5 tilbud“, én „Lavest samlet“.

### Elbilerne fik rammen i stedet

`.bilkort--el` giver grøn venstrekant og en tone i rammen. Ikke en fuldt farvet
kasse: den **gule** ramme betyder allerede „valgt til sammenligning“, og en
elbil må ikke råbe højere end det, brugeren selv har valgt. Derfor vinder
`.bilkort--valgt` også eksplicit over `.bilkort--el`.

## Topmenuen: kortere ord, og forsiden fik et menupunkt

| Før | Nu |
| --- | --- |
| *(kun logoet)* | **Leasing** |
| Bedste tilbud | *(ude af toppen)* |
| Gulplade Håndbogen | Håndbogen |
| Brugte biler | Brugte |
| Tilbudstjek | Tjek dit tilbud |
| Personbiler | Personbiler ↗ |
| Få tilbud hjem | Få tilbud |

- **Sammenligningen af leasingtilbud** er sidens vigtigste funktion og havde
  intet menupunkt — kun logoet. Nu hedder den „Leasing“.
- **Toplisterne** under /bedste-tilbud/ er ude af toppen, men linkes 17 gange
  fra forsiden og fra bundmenuen.
- **Pilen** på Personbiler viser, at den fører videre til Leasio. Den er
  `aria-hidden`, så skærmlæsere ikke læser „pil op til højre“ op.

Menuen fylder 516 px mod 653 før. På mobil kan man nu se „Leasing“ ved siden
af „Få tilbud“ uden at svippe. Den er ens på alle 458 sider — fire
generatorer og to håndskrevne sider rettet i samme kørsel.

### Resten af siden bruger nu de samme ord

Knapper, brødkrummer, 404-siden og bundmenuen sagde stadig „Få tilbud hjem“,
„Få tjekket dit tilbud“ og „Gulplade Håndbogen“. De hedder nu „Få tilbud“,
„Tjek dit tilbud“ og „Håndbogen“ som i toppen. Undtagelser:

- **Håndbogens egen H1 og titel** hedder stadig „Gulplade Håndbogen“ — det
  er navnet på udgivelsen, ikke et menupunkt.
- **Bundmenuen** siger „Brugte varebiler“ og „Leasing af varebiler“, ikke
  „Brugte“ og „Leasing“. Bundmenuen står på alle sider, og linkteksten er
  det, Google læser som emnet for siden bag linket.

## SEO for „brugte varebiler“

- **Bilsidernes titel** starter med „Brugt“ („Brugt Ford Transit Custom
  2022, 48.000 km — 219.000 kr.“) — det er ordet, folk søger på. Kun hvis
  titlen stadig kan stå helt inden for 60 tegn; prisen til sidst må ikke
  klippes af. 327 af 329 biler får det.
- **Struktureret data**: `itemCondition: UsedCondition` på både bil og tilbud,
  billede, og en `priceSpecification` med `valueAddedTaxIncluded: false`, så
  prisen ikke læses som inkl. moms.
- **Oversigtens H1** er „Brugte varebiler til salg“ (titlen var det allerede).
- **Forsiden** har et afsnit „Brugte varebiler til salg“ lige under
  tilbudstabellen, med links til kassevogn, ladvogn, billige, nyere,
  automatgear og el. Antallet læses af brugte.json; en liste linkes kun, hvis
  generatoren faktisk skrev den.
- **Håndbogen**: seks artikler, hvor en brugt bil er et naturligt næste skridt
  (leasing eller køb, syn, grøn ejerafgift, pickup, specialindretning, el),
  linker til den liste, der passer.
- **Sitemap**: alle brugtsider har `lastmod` = lagerets hentedato, så nye
  biler crawles hurtigere.
- **To par ens biler** havde samme beskrivelse. De får lagernummeret med,
  som titlen allerede gjorde.

Landingssiderne (brugt kassevogn, ladvogn, elvarebil osv.) havde allerede
søgeordet i titel, H1 og beskrivelse og er ikke rørt.

### Spørgsmål om brugte varebiler

Oversigten har fået en FAQ med `FAQPage`-schema: hvad koster en brugt
varebil, moms, kilometertal, elvarebiler, engros, leasing og hvem der sælger.
Det er de spørgsmål, folk skriver i Google. **Hvert tal regnes ud af lageret
ved hver kørsel**; et svar, der ikke kan regnes ud (fx ingen elbiler på
lager), udelades. „Typisk“ betyder median, og det står i svaret.

### „Sælges engros“

57 af 329 biler sælges ifølge Brdr. Jensen engros, som de står eller til
afhentning — som regel uden klargøring og ofte kun til CVR-nummer. Det stod
kun i fritekst („AFHENTNINGS SPRINTER …“, „Sælges engros til CVR nummer“)
eller i udstyrsfeltet „Afhentning“. Alle 57 træf er gennemgået; ingen falske.

- **Kortet** har et gult skilt „Sælges engros“ oven på billedet, så kortet
  ikke bliver højere end naboerne.
- **Bilens side** har en gul boks over knapperne, der forklarer, hvad det
  betyder — før man kontakter nogen eller kører til Horsens.
- **FAQ'en** forklarer det og giver tallene: halvdelen af engrosbilerne koster
  under 64.800 kr. mod 169.800 kr. for hele lageret (regnes ud ved hver kørsel).

Det er ikke en chip i filteret — der blev bedt om færre kategorier.

### Search Console: sælgeropslag og produktuddrag

- **De 28 leasingmodelsider havde `Product` + `AggregateOffer`** med den
  billigste *månedsydelse* som `lowPrice`. schema.org kan ikke sige „pr. md.“
  der, så Google ville vise „Fra 2.224 kr.“ som bilens pris. De manglede også
  billede, og `AggregateOffer` er ikke tilladt i sælgeropslag. Vi sælger ikke
  leasingaftalen selv. Produktdataene er fjernet; brødkrummerne er der stadig.
- **De brugte biler** var markeret som `Car`, som Googles test slet ikke læste
  som produkt. De er nu `["Product", "Car"]` med beskrivelse, lagernummer som
  `sku`, op til tre billeder og tilbuddets `url` på vores egen side.
  Valgt 25-09-2026 med viden om, at Google viser prisen uden „ekskl. moms“ —
  det står i `priceSpecification` (`valueAddedTaxIncluded: false`) og på siden.
- **Biler uden en pris, vi tror på**, får ingen produktdata. Et tilbud uden
  pris er en fejl i rapporten; hellere intet end en halv pris.
- **Forhandlerens adresse** er delt op i gade, postnummer, by og land.
- Googles test (25-09-2026): produktuddrag, brødkrummer, lokal virksomhed og
  organisation gyldige. Tilbage er kun valgfrie felter: anmeldelser og
  bedømmelser (vi har ingen), prisniveau og billede af forhandleren.

### Mobil

- **Bilsiderne** stod med billede og tekst side om side på telefon, og
  nøgletallene løb ud over kanten. Reglen med `:has()` vejede tungere end
  mobilreglen. Rettet for både brugte biler og leasingmodeller.
- **Forsiden** kunne skubbes 32 px til siden på en 375 px telefon, fordi
  leasingtypefilteret ikke måtte krympe. Det bryder nu om.

### Småting

- /kontakt/ havde en titel på 21 tegn („Kontakt | Gulplade.dk“). Nu: „Kontakt
  os om varebiler og leasing“.
- Billedernes alt-tekst på brugtsiderne starter med „Brugt“, og galleriets
  billeder er nummereret („billede 2 af 12“) i stedet for 11 ens alt-tekster.


## Indretning: chippen „Værkstedsbil“ fangede kun 43 af 72

Chippen brugte kun CarAds' kategori. Men indretning i varerummet står tre
steder, og hver for sig fanger de kun en del:

| Kilde | Biler |
| --- | --- |
| CarAds' kategori „Værkstedsbil“ | 43 |
| Udstyrsfeltet „Reolsystem / indretning“ | 40 |
| Beskrivelsen nævner reol, hylde, skuffe, Sortimo eller BOTT | 63 |
| **Tilsammen** | **72** |

29 biler med indretning var usynlige for den, der klikkede på chippen — f.eks.
*„Ford Connect med reol og inverter“*. De 18, der kun findes via teksten, er
gennemgået én for én: alle har indretning i varerummet.

Chippen hedder nu **„Med indretning“**. Samme antal chips som før — ingen ny
kategori, bare en rigtig.

### Tallet og klikket var uenige

Chippen **talte** 72 ved bygning, men browserens filter var en separat kopi
af reglen og brugte stadig kun CarAds' kategori. Et klik ville have vist 43.
Nu afgør `harIndretning()` det én gang på serveren og skriver
`data-indretning="1"` på kortet; browseren læser bare flaget. Testet ved
klik: chippen siger 72, listen viser 72.

### Lift og kran

Findes kun i fritekst. Lift gav 28 træf, men to var forkerte:

- *„Lift kan eftermonteres for 40.000“* — Renault Master EL. **Bilen har ingen lift.**
- *„aircondition BAR lift“* — skabelontekst kopieret ind på to Ford Transit
  med samme stelnummer-rest. Kun den ene har liften i overskriften.

Begge holdes ude eksplicit i `harLift()`. Resultat: **26 med lift, 11 med
kran.**

Lift og kran er også chips ved siden af „Med indretning“, efter samme mønster:
`harLift()` og `harKran()` afgør det på serveren, kortet får `data-lift` og
`data-kran`, og browseren læser flagene. Testet ved klik: 26 og 11, som chippen siger. De tre nye sider — indretning, lift, kran — linkes fra „Flere
lister“ nederst, ikke fra menuen, fordi der lige var blevet bedt om færre
kategorier i toppen.

### Det, teksterne ikke siger

Kun **én** af 329 biler nævner udtrykkeligt en tidligere brug: *„Køreklar
elektrikervito med to skydedøre“*. De rå CarAds-data har ingen felter for
antal ejere, servicehistorik eller tidligere brug — kun „nysynet“ på 2 biler.
Indretningen afslører håndværkerbilen, men ikke faget.


## Rammen forsvandt fra 375 sider

Brugtsiderne gik fra kant til kant i browseren, mens menuen stod
centreret — syv bilkort i bredden på en 1900 px skærm. Det var en fejl fra
dagen før: `<main>` fik `class="brugt-side"` for at stramme luften, og
rammen hang på to regler, der begge holdt op med at matche:

```css
.forside, .indhold, .bil-side, .oversigt, .artikel-side { max-width: … }
main:not([class]) { max-width: … }
```

Da jeg talte efter, var det ikke kun de 361 brugtsider. **Håndbogens 14
sider havde `class="viden-side"` og havde aldrig haft en regel overhovedet.**

Listen af klasser blev ved med at glemme nogen, så rammen gælder nu `main`
direkte. Hver side har ét `<main>`, og de skal alle have samme ramme. En
klasse kan ikke længere koste en side dens ramme.

### Menuen stod 52 px uden for indholdet

Det blev synligt, da indholdet fik sin ramme igen: logoet stod ved 291 px og
indholdet ved 343. Headerens børn havde `margin: 0 auto` inde i en flexboks,
og det skubbede dem ind mod midten fra en for bred kant. Headeren har nu
samme indre bredde som `<main>`:

```css
padding-inline: max(var(--luft), calc((100% - var(--bredde)) / 2 + var(--luft)));
```

Målt på forsiden, en håndbogsartikel, en modelside, tilbudstjek og
brugtoversigten ved 1900 px: logo ved **343**, menuen slutter ved **1543**,
indholdet 343–1543 — alle steder. På mobil 16 px til begge sider.

### To rækker piller, to komponenter

Undermenuen og chipsene løste samme visuelle opgave, men var skrevet hver
for sig: undermenuen i `--t-sm` med grå tæller uden baggrund, chipsene i
`--t-base` med tæller i en lille pille. Undermenuen bruger nu `.chip` og
`.chip__tal` direkte — JS'en binder på `[data-chip]`, ikke på klassen, så
linkene får ikke chipsenes klikhåndtering ved et uheld. Målt: begge 14 px,
vægt 500, 37 px høje, samme tæller.

### De håndskrevne sider manglede et menupunkt

Tilbudstjek og „Sådan tjener vi penge“ havde en menu uden „Bedste tilbud“.
De bygges ikke af generatorerne og havde ikke fået ændringen med.


## Oversigten havde to rækker kategorier, der sagde det samme

Undermenuen og de eksisterende chips overlappede hinanden:

| | Undermenu | Chips |
| --- | --- | --- |
| Kassevogn | 243 | 243 |
| Ladvogn | 70 | 70 |
| Pickup | 7 | 7 |

Samme kategorier, samme tal, to forskellige stilarter — med en overskrift
og 150 px imellem. Chipsene filtrerer på stedet; undermenuen går til egne
sider. Begge dele er nyttige, men ikke for de samme kategorier.

Undermenuen viser nu kun det, chipsene **ikke** kan: pris, kilometer,
årgang og gear. Siderne for kassevogn, ladvogn, pickup, el og Horsens
bliver stående — de er søgemål — men linkes fra „Flere lister“ nederst.

### Og mærkelinkene stod også i vejen

„Gå direkte til et mærke“ lå med 10 links **mellem** annoncelinjen og
bilerne. I alt 22 kategorier at klikke på, før man så den første bil. De er
navigationshjælp, ikke sidens indhold, og er flyttet ned under listen.

| | Før | Efter |
| --- | --- | --- |
| Kategorier over første bil | 22 | **10** |
| Første bil ved | ~900 px | **637 px** |

Luften er strammet med en `.brugt-side`-klasse på `<main>`: `--s7` er 3rem,
og sektionerne havde den både før og efter, så der stod 6rem mellem to
blokke. Kun her — på artiklerne er luften en del af læsbarheden.

Afsnittet om de to biler uden pris er væk fra oversigten. Kortene siger
stadig „under afklaring“, og forklaringen står på bilernes egne sider.

## Bilsidens knap pegede væk fra os

`tilbudsformular.tally_id` er tom for de brugte biler, så den eneste knap
var „Se bilen hos Brdr. Jensen“ — et link **ud** af sitet. Der var ingen
måde at høre nærmere hos os.

Den primære handling er nu **„Hør nærmere om denne bil“**. Er der sat et
Tally-id, bruges formularen; ellers en mailto, hvor bilen er skrevet ind:

```
Emne:  Spørgsmål om Mercedes-Benz Sprinter (611941)

Mercedes-Benz Sprinter 211 2,1 CDI R2 114HK Van Aut.
Årgang: 2016
Kilometer: 257.000
Kontantpris: 44.800 kr. ekskl. moms
Lagernummer: 611941
https://gulplade.dk/brugte-varebiler/mercedes-benz-sprinter-…

Hvad vil du gerne vide om bilen?
```

Så skal den, der skriver, ikke selv finde ud af, hvad vi har brug for at
vide — og vi skal ikke spørge tilbage. Adressen er pakket i Cloudflares
`email_off`, ellers skjuler de den.


## Lageret opdateres nu — og solgte biler bliver ikke til døde URL'er

### Høsten kunne ikke opdatere

`jensen-hent.py` springer over, hvad der allerede ligger i cachen. Det er
rigtigt, når en kørsel skal genoptages, men ubrugeligt til en opdatering: en
bil, der var faldet 20.000 kr., ville aldrig blive hentet igen, og en solgt
bil ville blive stående på siden.

`jensen-opdater.py` henter alle biler i deres sitemap lige nu og sletter
cachefiler for biler, der ikke længere er til salg. 0,35 sekunds pause
mellem kaldene — det er deres server, ikke vores.

Første kørsel, 25-09-2026: **344 hentet, 0 fejl, 6 nye, 2 solgt, ingen
prisændringer.** Lageret gik fra 325 til 329 biler.

Datoen i `jensen-byg.py` stod hårdkodet til 23-09 og følger nu dagen — ellers
ville der stå en forkert kildedato på hver eneste bil.

### Solgte biler får en 301, ikke en 404

Lageret omsættes. Hver solgt bil efterlod før en mappe, der blev ved med at
vise en bil, der var væk — og fjernede man mappen, gav URL'en 404, selvom den
kan være indekseret og delt.

Nu læses den gamle sides krummesti for at finde nærmeste side, der stadig
findes, mappen slettes, og der lægges en 301. Posterne står i `solgte.json`
og **udløber efter 180 dage**, så `_redirects` ikke vokser i det uendelige.

### Det gjaldt også landingssiderne

Første version fangede kun bilsider. Men da de to Toyota Proace blev solgt,
faldt modellen under grænsen for at få sin egen side — og
`/brugte-varebiler/toyota/proace/` blev liggende og serverede en liste,
**hvor de to solgte biler stadig stod**.

Oprydningen tager nu alt, generatoren ikke skrev i den kørsel: bilsider,
mærkesider og modelsider. Den går nedefra og op, så en modelside når at pege
på sit mærke, før mærket selv ryddes.

### Bilsiderne sprang mærket over i krummestien

Det blev fundet undervejs, fordi omdirigeringen ikke kunne udlede et
fornuftigt mål. Krummestien var:

```
Forsiden > Brugte varebiler > Toyota ProAce
```

Tre ting på én gang: man kunne ikke gå fra en bil op til „alle Toyota“, de
**329 bilsider gav ingen interne links til mærkesiderne**, og en solgt bil
efterlod ingen spor at omdirigere efter. Nu:

```
Forsiden > Brugte varebiler > Mercedes-Benz > Sprinter > Mercedes-Benz Sprinter
```

Leddene tilføjes kun, hvis siden faktisk er skrevet — Audi med én bil får
kun oversigten, Dacia med fire får sin mærkeside.


## Brugtsektionen fik landingssider og sin egen menu

Sektionen havde 325 bilsider og 23 mærke-/modelsider, men ingen sider for
de søgninger, folk faktisk laver. Det er præcis det mønster, der allerede
virker på de nye biler med de 14 guider.

| Side | Biler |
| --- | --- |
| Brugt kassevogn | 240 |
| Brugt varebil med automatgear | 181 |
| Brugt varebil med lav kilometerstand | 144 |
| Nyere brugte varebiler (2022+) | 128 |
| Billige brugte varebiler (under 100.000 kr.) | 74 |
| Brugt ladvogn og ladbil | 69 |
| Brugt elvarebil | 8 |
| Brugt pickup | 7 |
| Brugte varebiler i Horsens | 325 |

Antallene blev **talt i data, før siderne blev skrevet**. En side med tre
biler er ikke en side, den er en skuffelse — grænsen står som `MIN_FACET`.
De to mindste er med alligevel, fordi de er egne søgeintentioner og siden
selv siger, hvor mange der er.

### Undermenuen

Sektionens egen navigation, på oversigten, alle facetsider, alle mærke- og
modelsider og **alle 325 bilsider**. Uden den findes facetsiderne kun i
sitemappet — og en bilside er ofte det første, en besøgende lander på fra en
søgning. På mobil er den én række, man kan svippe i, frem for fire rækker
piller.

### Sproget kunne ikke limes sammen

Første forsøg byggede manchetten som „N af de 325 … er <kriterium>“. Det
holder kun, hvis kriteriet tilfældigvis er et tillægsord:

> 74 … **er kontantpris under 100.000 kr.**
> 325 af de 325 … **er hele lageret**

Hver facet har derfor sin egen sætning med `%n%` og `%alt%`. Tre linjer mere
i data og en linje mindre kløgt i koden.

### De nye biler linker nu til de brugte

**15 af de 28 modeller findes også brugt.** Modelsiderne linkede kun til
brugtsektionen gennem menuen og bunden. Nu står der:

> Der står **98 brugte Mercedes-Benz Sprinter** på lageret hos Brdr. Jensen i
> Horsens, fra 28.500 kr. ekskl. moms. En brugt bil har ingen førstegangsydelse
> og ingen bindingsperiode — til gengæld står du selv med værditabet.

Linket peger på den mest præcise side, der **faktisk er skrevet**: model,
ellers mærke, ellers oversigten. Mapperne læses fra disken frem for at
gentage reglen om, hvor mange biler der skal til for at få en side — Citroën
Berlingo med én brugt bil falder derfor til mærkesiden, og Kia PV5 uden
brugte får ingen blok.

### Prisfejlen for tredje gang

`landingHTML()` sorterede også med `a.pris - b.pris`. Samme fejl som på
oversigten og i filtret — rettet samme sted.

Sektionen er nu **358 URL'er**, og sitet i alt 451.


## Tastatur: ringen var usynlig, og der var ingen vej udenom menuen

### Fokusringen kunne ikke ses i lys tilstand

Den var tegnet med brandets gule, `#f2b705`:

| Baggrund | Kontrast | Krav |
| --- | --- | --- |
| hvid | **1,82** | 3,0 |
| `--bg-alt` | **1,69** | 3,0 |
| mørk baggrund | 10,38 | 3,0 |

Den virkede altså fint i mørk tilstand og var praktisk talt usynlig i lys —
som er standarden. Ringen har nu sit eget token, `--fokus`: mørk blæk på lys
baggrund (18,11:1), den gule på mørk (10,38:1).

### `outline: none` sad netop på filtrene

```css
.filtre input:focus, .filtre select:focus { border-color: var(--text); outline: none; }
```

Ringen var fjernet præcis på de kontroller, en tastaturbruger har mest brug
for den. Den er nu betinget af `:focus:not(:focus-visible)` — musebrugere ser
stadig kun kanten skifte farve, fordi `:focus-visible` ikke udløses af et klik.

### Springlink

Der var intet. Hver side tvinger ellers en tastaturbruger gennem seks
menupunkter før indholdet. **21 `<main>` fik `id="indhold"`** på tværs af de
fire generatorer og de to håndskrevne sider, og linket er nu det første
fokusbare element på alle **443 sider** — talt efter, ingen mangler hverken
link eller mål, og ingen har id'et to gange.

### En fælde i selve målingen

To ting gjorde browsermålingerne misvisende, og begge er værd at kende:

**Browseren havde cachet en gammel CSS-krop under den nye `?v=`-URL.**
`fetch(url)` gav 80.851 bytes uden de nye regler; `fetch(url, {cache:'reload'})`
gav 82.086 med. Det skyldes, at der blev udrullet og målt i hurtig
rækkefølge — ikke noget en besøgende rammer, da HTML og CSS følges ad i samme
udrulning.

**`:focus` matcher ikke, når browservinduet ikke har fokus.**
`document.activeElement` var rigtigt sat, men `el.matches(':focus')` var
`false`, så springlinket så ud til ikke at virke. Reglerne blev derfor
efterprøvet direkte i `document.styleSheets` i stedet for på den beregnede
stil.


## Kontrasttjek: den farve, der siger „vi har ikke tallet“, var den dårligst læselige

Kontrasten var aldrig blevet regnet efter. WCAG 2.1 AA kræver 4,5:1 for
brødtekst. Tre fejl:

| Hvad | Lys | Mørk | Krav |
| --- | --- | --- | --- |
| `--text-hint` | **2,37** | **3,61** | 4,5 |
| Hvid tekst på Leasio-knappen | 5,30 | **2,20** | 4,5 |

`--text-hint` bruges **15 steder**, og flere af dem er sidens egne
ærlighedsmarkører: tankestregen for et manglende tal, „ikke oplyst“ og
„under afklaring“. Farven, der siger *vi har ikke tallet*, var den dårligst
læselige på siden — 2,37:1 er under halvdelen af kravet.

### Der er ikke plads til et tredje tekstniveau i lys tilstand

Det var det interessante ved regnestykket. `--text-muted` ligger på **4,51**
mod `--bg-alt` — altså lige præcis på grænsen. **Alt lysere end muted falder
under kravet.** Hint er derfor sat lig muted i lys tilstand, og rangordenen
bæres af størrelse, versaler og spærring, som elementerne allerede har.

I mørk tilstand er der plads: `#7b828e` klarer 4,51 og er stadig synligt
stillere end muted (`#939aa4`).

### Knappen var min egen fejl fra samme dag

`--anden` bliver til en **lys** grøn i mørk tilstand (`#57c295`), og jeg havde
sat teksten til hvid. 2,20:1 — ulæseligt. Knappen bruger nu `--anden-tekst`,
som er hvid i lys tilstand og `#14161a` i mørk (8,24:1). Hover er skiftet fra
en fast farve til `filter: brightness(.88)`, så den følger med af sig selv.

Efter rettelsen: **0 fejl.** Den lyse Leasio-grønne er også tjekket — 5,30 på
hvid, 4,94 på `--bg-alt` og 4,67 på kortets egen baggrund.


## Eftersøgning: findes den samme fejl andre steder?

Efter prisfejlen i brugtfiltret blev al klientkode på sitet gennemgået for
samme fejltype — tal, der sammenlignes eller sorteres, uden at der tjekkes
for manglende værdi.

| Hvor | Sorteringer | Resultat |
| --- | --- | --- |
| Forsiden | 2 | **Rigtig** — `-1` håndteres eksplicit i begge retninger |
| `/varebiler/` specifikationstabel | 1 | **Rigtig** — har endda kommentaren „Tomme felter skal ligge sidst i begge retninger — de er ikke nul“ |
| `/brugte-varebiler/` | 1 | **Var forkert.** Rettet. |
| Mærke- og modelsider under brugte | — | Intet script |
| `/bedste-tilbud/`, håndbogen, til-varebilen | — | Intet script |

Fejlen var altså isoleret til ét sted. Det er værd at bemærke, at de to
steder, der var rigtige, begge havde en kommentar om netop det problem —
nogen havde tænkt over det dér. Brugtsektionen blev bygget senere og arvede
ikke tænkningen.

## „Under afklaring“ stod uden forklaring på oversigten

De to kort sagde „Kontantpris under afklaring“, og hvorfor stod kun på bilens
egen side. Det hjælper ikke den, der scanner 325 kort — og det forklarede
heller ikke den nye statuslinje, når den siger „2 biler uden oplyst pris er
ikke med“.

Oversigten har nu en linje, der kun vises, når der faktisk er biler uden
pris:

> 2 biler står med „kontantpris under afklaring“. Det er ikke en tastefejl
> hos os: forhandlerens eget tal kan ikke passe, og vi gengiver det hverken
> som pris eller regner det med i gennemsnittene. Hvorfor, står på bilernes
> egne sider.


## De to biler, vi ikke troede på prisen på, lå som de billigste

Den værste fejl, der er fundet på siden. To Sprintere fra 2026 er sat til
15.000 kr. hos forhandleren — et tal, vi bevidst har holdt tilbage som
utroværdigt og markeret med `_pris_tvivl`, så der står „under afklaring“ i
stedet for et beløb.

**De lå som nr. 1 og 2 på „billigste først“** — over en bil til 14.500 kr. —
**og de dukkede op, når man filtrerede på „under 75.000“.** Præcis det, det
tilbageholdte tal skulle forhindre.

### Årsagen

JavaScripts talomskrivning. `d.pris` er `null` for de to biler, og:

```js
null < 75000   // true — null bliver til 0
null - 200000  // -200000 — sorterer først
```

Filtrene på **km og årgang tjekker udtrykkeligt for `null`**. Prisen gjorde
ikke. Forsidens tilsvarende filter var allerede rigtigt og havde endda en
kommentar om det — nogen havde tænkt over det dér, men ikke her.

### Tre rettelser

| | Før | Efter |
| --- | --- | --- |
| Filter „under 75.000“ | 52 biler, begge uden pris med | 50 biler, ingen af dem |
| Billigst først | de to uden pris øverst | 14.500 kr. øverst, de to nederst |
| Dyrest først | de to uden pris nederst | 525.000 kr. øverst, de to stadig nederst |

Bemærk den sidste: **ukendt pris ligger sidst i begge retninger.** „Mangler“
er hverken billigst eller dyrest, og en sortering, der lader dem skifte ende,
lader som om tallet betyder noget.

Statuslinjen siger det nu også, som på forsiden:

```
Viser 50 biler — 2 biler uden oplyst pris er ikke med
```

De øvrige sorteringer blev tjekket samtidig og er i orden: km bruger
`Infinity`, årgang `|| 0` faldende, leasing `Infinity`. Prisen var den eneste.

### Brugtkortene behøvede ikke at følge med

`.brugtkort` har sit eget navnerum og fik ikke bilkortenes rettelser. Målt
efter er de landet samme sted alligevel: 12 px mellem blokkene, etiket til
venstre og tal til højre med `space-between`. Ingen ændring nødvendig.


## Tre sider, siden manglede helt

### /kontakt/

Der var **ingen kontaktside, intet CVR og ingen identifikation af, hvem der
driver siden** — på en side, der nu tager provision og beder virksomheder om
navn, firma og telefonnummer. E-handelsloven kræver, at en erhvervsdrivende
på nettet er let at identificere, og en side, der beder om oplysninger uden
selv at sige hvem den er, er svær at stole på.

Siden har fire afsnit: hvordan man får **rettet et tal**, vi har gengivet
forkert (med det løfte, at vi ikke fjerner et tilbud, fordi en udbyder er
utilfreds med at stå ved siden af et billigere), hvordan forhandlere kommer
med i netværket, hvad vi ikke kan hjælpe med, og adressen.

**Mangler stadig: virksomhedsnavn, adresse og CVR.** Byggeren skriver det i
loggen ved hver kørsel, så det ikke bliver glemt.

### /privatliv/

Vigtigere end CVR, fordi formularen er i drift: der var **ingen
privatlivspolitik**, mens Tally-formularen indsamler navn, firma, e-mail og
telefon og sender dem videre til en forhandler. At oplysningerne deles er
netop det, der skal stå på indsamlingstidspunktet.

Til gengæld står siden stærkt: **ingen eksterne scripts, ingen analyse,
ingen cookies, ingen localStorage.** Det er efterprøvet i den byggede HTML,
ikke et løfte — og det står på siden, at læseren selv kan tjekke det i
udviklerværktøjet. Derfor er der heller ingen cookiebanner: der er ikke
noget at give samtykke til.

**Mangler stadig: dataansvarlig med CVR og opbevaringsperiode.**

### Cloudflare skjulte adressen

Cloudflare obfuskerer automatisk e-mailadresser i HTML — også den synlige
tekst, som bliver til `[email protected]`. På en kontaktside er det selve
pointen, der forsvinder. Cloudflare har en officiel undtagelse, og adressen
står nu mellem `<!--email_off-->` og `<!--email_on-->`.

## /personbiler/ — henvisning til leasio.dk

Gulplade dækker varebiler på gule plader. Skal man bruge en personbil, er
det en anden side. **Skillelinjen er karrosseriet, ikke firmaet** — en
firmabil på hvide plader hører også til hos Leasio. Det er værd at skrive
præcist, for „erhverv“ bruges om begge dele.

Menupunktet bærer **Leasios egen grønne accent, #1a7a56**, hentet fra deres
eget stylesheet og ikke gættet, så det er tydeligt, at linket fører et andet
sted hen end resten af menuen.

Forholdet mellem de to sider står som det, der kan efterprøves: samme
opbygning, samme princip om kilde og dato på hvert tal, og **begge sider
oplyser selv, at de kan få provision for formidlede kundehenvendelser**.
Leasios egen bund siger det ordret. Er der fælles ejerskab, skal det skrives
ind — en henvisning uden oplyst interesse er præcis det, resten af siden
kritiserer andre for.


## Filtret sagde ikke, hvorfor en model forsvandt

Filtrene på nyttelast og nypris holder de modeller ude, hvor vi ikke har
tallet — de kan ikke bevise, at de klarer grænsen. Det er rigtigt. Men det
skete **tavst**, og brugeren kunne ikke se forskel på „for lille“ og „vi ved
det ikke“.

Statuslinjen siger det nu:

```
Viser 15 af 28 modeller — 7 modeller uden oplyst nyttelast er ikke med
Viser 6 af 28 modeller — 2 modeller uden oplyst nypris er ikke med
```

Uden filter står der stadig bare „Viser alle 28 modeller“ — tilføjelsen
kommer kun, når den betyder noget.

**Størrelseschippene blev tjekket samtidig og er rene:** alle 28 modeller
får en klasse, fordi `stoerrelse()` falder tilbage på lastrumsvolumen, når
den udvendige længde mangler. Ingen model falder ud af alle chips.

## Flere måltal, og to blindgyder mere

**VW Transporter blev næsten fuldt udfyldt.** VW gemmer måltabellen i et
„lag“ bag modelsiden, som intet synligt link peger på:

```
volkswagen.dk/da/erhvervsbiler/<model>.html/__layer/carfeatures/
  features/models/<Model>/teknisk-data/master.layer
```

Den har én tabel pr. karrosserilængde — for Transporter både Kort og Lang,
og vores variant er den lange. Det gav lastrum 3.002 × 1.392 × 1.433 mm,
6,8 m³, udvendig længde 5.450 mm, bredde 2.032 mm uden spejle og 2.275 med,
akselafstand 3.500 mm. **Virkede ikke for Crafter.**

Den udvendige højde blev bevidst ikke skrevet ind: VW opgiver **1.969–2.062
mm**, og spændet ligger hen over 2,00 m — netop den grænse, tallet bruges til
at vurdere en p-kælder efter. Et enkelt tal ville enten overdrive eller
underdrive. Spændet står i kildenoten.

**Kia PV5 Cargo er ikke en manglende indtastning — tallene findes ikke.**
Kias egen danske prisliste skriver: „PV5 Cargo er ikke lanceret i Danmark —
alle tekniske data og specifikationer er foreløbige og afventer endelig
homologering.“ Det står nu på modelsiden. Prislisten bekræftede til gengæld
nyprisen på 250.000 kr. ekskl. moms.

**Iveco offentliggør ingenting.** Hverken modelsiden for Daily Kassevogn
eller kampagnesiden oplyser mål, vægt eller pris. Det er de eneste to
modeller på siden uden nypris, og det er skrevet ned, så der ikke søges igen.

Huller i alt: **111 → 95**.

### En fejl i mine egne noter

`_mangler` og `maal_kilde.note` køres begge gennem `esc()`. Jeg havde skrevet
`<strong>` i to af dem, og de viste sig som rå tags på siden. Fremhævning i
de felter skal laves med ord, ikke med markup.


## Forsiden følger leasio.dk's opbygning

Fire ændringer i toppen, efter forlægget.

### Én knap, og oplysningen står under den

Heroen havde ingen handling. Nu står der én sort knap — ikke en række — og
lige under den den lille grå linje om honoraret. Det er nøjagtig dér, leasio
sætter sin, og det er det rigtige sted: man læser vilkåret i samme øjeblik,
man overvejer at trykke.

### To sorte knapper blev til én primær handling

Da heroknappen kom på, havde siden **to sorte knapper på samme skærm, der
pegede hver sin vej**: menuens „Få tjekket dit tilbud“ (betalt) og heroens
„Få tilbud hjem“ (gratis). To primære handlinger er ingen primær handling.

Leasio har én knap i heroen og tilbudstjekket som et almindeligt menupunkt.
Samme opdeling nu:

| | Før | Efter |
| --- | --- | --- |
| Menuens knap | Tilbudstjek (betalt) | **Få tilbud hjem** (gratis) |
| Tilbudstjek | sort pille | almindeligt menupunkt |
| Heroen | ingen knap | én sort knap, samme mål som menuens |

Den gratis vej er både den, der åbner tragten, og den, der tjener penge. Den
betalte gennemgang er for dem, der allerede har et tilbud — den behøver ikke
en knap på hver side.

### Nøgletal uden kasse

De tre tal lå i en ramme med lodrette skillestreger og så ud som et skema.
Nu står de bare som tal med etiketten under, som hos leasio — og datoen er
flyttet ned som det fjerde nøgletal i stedet for at stå i linjen over
overskriften. Den er et tal, ikke en indledning.

I markuppen står `<dt>` stadig før `<dd>`, fordi det er den rigtige
rækkefølge i en definitionsliste. Rækkefølgen vendes med
`flex-direction: column-reverse`, ikke i HTML.

Tallene skiftede fra mono til sans med tabulære cifre. Mono hører til i
tabeller, hvor kolonner skal flugte — her er der fire tal ved siden af
hinanden, og „23. sep. 2026“ i mono lignede en kodestreng.

### Artikelbåndet

Mellem heroen og filtrene: ét stort kort med sidens egen tese og fire korte
indgange ved siden af, på grå bund med „Se alle“ i højre hjørne.

**Båndet er en afrundet flade inde i spalten, ikke fuld bredde.** Fuld bredde
kræver `100vw`, og på Windows tæller rullepanelet med i `vw` — siden ville
få vandret scroll. Det er en dårlig handel for en baggrundsfarve.

Leasios store kort har et foto. Det har vi ikke til artiklerne, så kortet er
bygget på tekst alene i stedet for at finde et billede, der ikke viser noget.


## /til-varebilen/ — det, ydelsen ikke dækker

Fire poster, der ligger uden for leasingydelsen: forsikring, vinterhjul,
indretning og el-abonnement. Afsættet er sidens egne tal, og de er hårde:

| Post | Inkluderet | Siger nej | Tavs |
| --- | --- | --- | --- |
| Forsikring | **0 af 54** | 40 | 14 |
| Dæk | **0 af 54** | 21 | 33 |
| Indretning | — | — | ikke engang en af de fem poster |

Tallene regnes ud af `varebiler.json` ved bygning, som i håndbogen. Og
generatoren **advarer**, hvis et tilbud en dag inkluderer dæk eller
forsikring — for så holder teksterne ikke længere.

### Hvorfor en egen sektion og ikke artikler i håndbogen

Håndbogen er udtrykkeligt ikke-kommerciel. De her sider har knapper, der
samler leads. Blandes de to, undergraver det håndbogens egen troværdighed.
De linker til hinanden i stedet — indretningssiden peger på håndbogens
artikel om **specialindretning**, som handler om skattereglen, ikke om
produktet.

### Der står ingen priser

Erhvervsforsikring og opbygning prissættes på virksomheden og findes ikke i
offentlige prislister, vi kan indsamle og datere. kWh-priser er forkerte tre
uger efter. Et skøn ville se ud som en oplysning uden at være det, og det
står på siderne, at det er grunden.

Det gælder også bøden for „åbenlyst uegnede dæk“: et søgeresultat nævnte
et beløb pr. dæk, men Færdselsstyrelsens egen side oplyser det ikke, så det
er ikke skrevet ind.

### Det, der faktisk kunne verificeres

- Der er **ingen vinterdækpligt** i Danmark — Færdselsstyrelsen skriver det
  selv: „Der er altså hverken tale om nye regler eller krav om vinterdæk“.
- **Færdselsloven blev præciseret 1. juli 2025**: man må ikke køre på dæk,
  der er åbenlyst uegnede til føret. Det er nyt for de fleste.
- Mønsterdybde mindst **1,6 mm**; samme aksel skal have samme størrelse og
  type; `3PMSF` er det, styrelsen kalder særligt egnet til sne og is —
  `M+S` er ikke det samme.

### Indgange

Sektionen ligger i bundmenuen på alle sider og har en blok på forsiden lige
efter „Hvad udbyderne oplyser“ — dér hvor de fem driftsposter allerede er
på tale. **Den står ikke i topmenuen**; den er holdt på fire punkter med
vilje. Det er én linje at ændre i de tre generatorer, hvis den skal ind.


## På mobil kunne man ikke navigere

Fundet, mens den nye prisrække blev målt efter på telefonbredde. Under 720 px
stod der:

```css
.site-header nav a:not(.nav-cta) { display: none; }
```

— og **der kom ikke noget i stedet.** Ingen burgermenu, ingen bundmenu. På en
telefon kunne man altså ikke komme til Bedste tilbud, Gulplade Håndbogen eller
Brugte biler fra andet end links inde i brødteksten. Håndbogen findes for at
trække søgetrafik ind, og søgetrafik er overvejende mobil.

### Bundmenu på alle 434 sider

Bunden havde ingen navigation overhovedet — kun brødtekst og copyright. Den har
nu otte links: forsiden, Bedste tilbud, Håndbogen, Brugte biler, Udbydere,
Få tilbud hjem, Tilbudstjek og Sådan tjener vi penge. To kolonner på mobil
(4 rækker, 103 px), to rækker på desktop (42 px).

Den løser tre ting på én gang:

1. navigation på mobil
2. **Udbydere er nåelig igen** efter at afsnittet røg ud af topmenuen
3. `/faa-tilbud/` står nu på hver eneste side

### Topmenuen blev en strimmel, ikke to rækker

Headeren er `position: sticky`. En menu i to rækker ville æde skærmhøjde på
hver eneste side, hele tiden. I stedet er `nav` nu vandret rulbar med CTA'en
først (`order: -1`), så den altid er synlig, og det næste link er delvist
synligt i kanten — det er selve signalet om, at der er mere. Headeren bliver
på 52 px, og siden får ingen vandret scroll.


## Bilkortet: prisen fik en etiket, og luften kom ud

Beløbet stod bart i venstre side uden at sige, hvad det var, mens felterne
nedenunder — Nypris, Lastrum, Nyttelast — allerede var etiket til venstre og tal
til højre. Kortet havde altså **to læseretninger**.

Prisen er nu den samme række: „Billigste leasingpris“ til venstre, beløbet til
højre. Målt flugter den på pixel med felterne under (17 px i begge sider, samme
baselinje).

| | Før | Efter |
| --- | --- | --- |
| Korthøjde | 676 px | 637 px |
| Luft under modelnavnet | 15 px | 12 px |
| Luft under prisblokken | 16 px | 12 px |
| Navneblokkens højde | 62 px | 38 px |

Navneblokken havde `min-height: 3.85rem` for at reservere plads til et tolinjet
modelnavn. De fleste navne er én linje, så der stod godt 20 px tomt på de fleste
kort. Bundlinjen holdes stadig på plads af `margin-top: auto` på
`.bilkort__felter`, så kortene flugter forneden uanset navnets længde.

### To kort mere, der skulle følge med

`.bilkort__pris` bruges to steder. **Mærkesidernes kort havde stadig den gamle
markup**, og med den nye regel (`justify-content: space-between`) ville beløbet
og ordet „annonceret“ blive skubbet ud i hver sin ende. Det kort har fået samme
række — og det er også rigtigt i sig selv: de to kort viser det samme tal.

I **tabelvisningen** er rækken smal, og etiketten på samme linje som tallet
ville kræve knap 200 px. Dér står etiketten over tallet i stedet.

De brugte biler har deres eget navnerum (`.brugtkort`) og er urørte.

## Hullerne i måltallene

Da Sprinteren blev udfyldt, viste et gennemløb, at **20 af 28 modeller** mangler
noget. Metoden derfra blev prøvet af på de værste. Udbyttet og — lige så
vigtigt — blindgyderne:

| Model | Resultat |
| --- | --- |
| Mercedes Sprinter | **Fuldt udfyldt** fra producentens danske HTML-tabel |
| VW Crafter | **3 felter**: længde 4.240 mm, mellem hjulkasser 1.380 mm, maks. bredde 1.832 mm |
| MAN TGE | **Totalvægt 3.500 kg** — står i modelbetegnelsen „3.5T“ |
| Toyota Proace Max | **Totalvægt 3.500 kg og rækkevidde 376 km** |
| Mercedes Vito | **Intet** — se nedenfor |
| Iveco Daily | **Intet** — kampagnesiden oplyser hverken mål, vægt eller pris |

### Tre blindgyder, der er skrevet ned, så de ikke skal findes igen

**Vito.** Mercedes' danske tabel viser kun én opbygning — billængde 4.895 mm,
altså den kompakte. Vores variant er A2, som Hessel opgiver til 5,14 m.
Tabellens længde- og volumental gælder altså en anden bil, og der er ingen side,
hvor længden kan vælges. **Sprinter-siden viste tilfældigvis den rigtige** (5.932
mm, akselafstand 3.665 mm = A2) — det skal tjekkes hver gang.

**Crafter.** Målene stod på den side, vi allerede citerede — de var bare aldrig
hentet ud. Men højde og volumen har to sæt tal med fodnoterne „* baghjulstræk og
4MOTION“ og „** forhjulstræk“: 1.861 mm/13,6 m³ mod 1.961 mm/14,4 m³. Tilbuddet
oplyser ikke trækket, og 0,8 m³ er for meget at vælge på følelsen. Længde og
bredder er ens for begge og er skrevet ind.

**Proace Max.** Toyotas specifikationsside viser en **diesel** (2.184 ccm, Euro
6, 13,5 km/l). Vores bil er elektrisk med 110 kWh. Siden gælder altså ikke
modellen, uanset at overskriften passer.

### Det, der skal tjekkes

Toyotas kampagneside opgiver vægtafgiften som **460 kr. helårlig**. VW's ID. Buzz
står med **460** i feltet `ejerafgift_halvaar_kr`.

**Afklaret — det var et tilfælde.** VW's egen prisliste skriver det rent ud:
„CO2-ejerafgiften er vist pr. halvår“. ID. Buzz' 460 står altså rigtigt.
Toyotas 460 er årligt, og det tal blev aldrig skrevet ind — vi omregner ikke
et beløb, kilden ikke selv har opgjort for den periode, feltet bruger. De to
tal er ens ved et tilfælde og dækker hver sin periode.

## De sidste to modeller fik billeder

MAN TGE og VW Amarok stod med „billede mangler“ på kortet. Nu har **alle 28
modeller billede**.

VW's første Amarok-billede var fotograferet **bagfra** — ubrugeligt på et
sammenligningskort. Siden har et andet aktiv, `Amarok-darklabel`: studierender
på hvid, skråt forfra, Dark Label i sort, altså præcis den variant tilbuddet
gælder. Det findes **kun i 800×480** — adressen er låst med en signatur, og
både den nøgne URL, `?$original$` og `?wid=1600` svarer `invalid lock` (se
[[gulplade-datakilder]]). Heroen er skaleret op derfra; på en studierender på
hvid bærer det.

MAN-billedet er et landskabsfoto og vejede tre gange så meget som
studierenderne. Kvaliteten er sat ned til 70/72/78, så det lander på 34 kB for
kortet i stedet for 51.


## Sprinteren — to kilder, der ikke er enige

Sprinteren manglede totalvægt, alle lastrumsmål og volumen. Mercedes' egen
**danske** tabel „Alle tekniske data“ har det hele i HTML (det er kun deres
PDF'er og billeder, serveren ikke udleverer — se [[gulplade-datakilder]]).

Undervejs dukkede en uenighed op:

| Kilde | Nyttelast, 315 CDI |
| --- | --- |
| Mercedes-Benz' egen tabel | **1.297 kg** (og 1.318 kg for 311 CDI) |
| Ejner Hessel, konkret bil | 1.318 kg |

Siden viste 1.318. Vi viser nu producentens tal for den navngivne variant og
har lagt uenigheden i `_omstridt`, som [[brdr-jensen-carads]]-tallene. Den er
**ikke opklaret** — den skal bekræftes hos Mercedes-Benz Danmark.

To ting blev bevidst *ikke* skrevet ind:

- **Bilbredden 2.345 mm.** Producenten siger ikke, om spejlene er målt med, og
  feltet hedder „udvendig bredde uden spejle“. Bredden er netop det, folk
  bruger til at vurdere, om bilen kan stå i porten.
- **CO₂ og forbrug.** De bliver hos Hessel (227 g/km, 11,6 km/l), selvom
  Mercedes skriver 212 og 12,3. De to tal hører sammen med den grønne
  ejerafgift, og afgiften følger det registrerede forbrug. Blandede vi
  kilderne, ville siden vise et forbrug, der ikke passer til dens egen afgift.

Begge dele står i kildenoten på modelsiden.

## Topmenuen: fire punkter

„Udbydere“ er ude, og „Brugte“ hedder nu „Brugte biler“. Udbydersiderne blev
**ikke** forældreløse — de har stadig indgående links fra tilbudstabellerne,
hvilket `linktjek.py` bekræfter. Det var netop den fælde, `/varebiler/` faldt i.


## /faa-tilbud/ — forhandleren betaler for henvendelsen

Vi henter tilbud hjem på kundens vegne, og den forhandler, vi sender
henvendelsen til, betaler os et honorar for den. Det er gratis for kunden.

To ting styrer, hvordan siden er skrevet.

**Honoraret står øverst.** Ikke i bunden, ikke med lille. En læser, der først
opdager det til sidst, er ført bag lyset — og med rette. Står det først, er det
et vilkår, man kan forholde sig til.

**Honoraret er bundet til henvendelsen, ikke til underskriften.** Det er den
eneste ting, vi kan love at holde, og det er en rigtig strukturel forskel fra
en provisionsmodel: vi tjener det samme, hvad enten vurderingen lyder „tag
det“ eller „lad være“. Interessen forsvinder ikke — vi har stadig en
interesse i, at nogen beder om tilbud — men den ligger ikke i det øjeblik,
hvor kunden skal beslutte sig.

Og mennesket står i overskriften, ikke i en bisætning. Der ringes selv rundt,
der ringes tilbage efter de tal, der mangler, og vurderingen skrives ned. Det
er hele forskellen på os og en formular, der bliver videresendt.

### Samme honorar fra alle forhandlere

Bekræftet af ejeren 24-09-2026: **honoraret er det samme beløb fra hver
forhandler i netværket.** Det er den stærkeste sætning, siden kan skrive.

Uden den kunne vi kun love, at honoraret ikke afhang af underskriften — og
det løste kun den halve interessekonflikt. Vi kunne stadig have tjent på at
pege kunden mod én bestemt forhandler. Med den er begge motiver væk, og det
står nu fem steder: i oplysningen øverst på `/faa-tilbud/`, i afsnittet om
opmærksomhedspunkter, i FAQ-svaret, i `ctaBlok()` og på forsiden.

### Leadhenvendelser går til ejerens egen adresse

`tilbudsknapHTML()` sender til `h.bjerregaard86@gmail.com`, ikke til
`hej@gulplade.dk`. **Cloudflare obfuskerer `mailto:` i HTML** — linket bliver
til `/cdn-cgi/l/email-protection#…`, som Cloudflares eget script afkoder ved
klik. Det virker for besøgende med JavaScript, men det er endnu en grund til
at få Tally-id'et på plads i `forudsaetninger.leadformular`.

### De fem steder, der lovede det modsatte

Den nye side kunne ikke udrulles alene. Siden lovede fem steder noget, der
blev usandt i samme øjeblik:

| Hvor | Stod der | Står der nu |
| --- | --- | --- |
| Bunden, alle 434 sider | „Undtagelsen er de brugte varebiler“ | To undtagelser, begge nævnt |
| `/saadan-tjener-vi-penge/` | „du betaler os, og branchen gør ikke“ | „tre indtægter: én fra dig, to fra branchen“ |
| Samme side | „Vi sælger ikke leads“ | væk |
| Samme side | „portalen tjener mest, når du siger ja“ | samme pointe, men med vores egen model holdt op mod den |
| Forsidens FAQ | „Kunderne betaler os … den eneste indtægt vi har“ | hvem der betaler hvad, ydelse for ydelse |

Bunden fandtes i **tre forskellige formuleringer** på tværs af de tre
generatorer og de to håndskrevne sider. De er nu én og samme tekst fem steder,
så de ikke kan nå at komme fra hinanden igen.

### Tilbudstjekket blev ikke afskaffet — det blev afgrænset

Der er stadig én ydelse, hvor ingen forhandler er inde over: har du allerede
et tilbud, gennemgår vi det mod et honorar, du betaler selv. Det er derfor,
`ctaBlok()` nu viser **to veje side om side** i stedet for én knap — den
gratis, hvor forhandleren betaler, og den betalte, hvor kunden gør. Forskellen
står i kassen, ikke i en fodnote; ellers ser de to ud som det samme tilbud.

Det gamle priskort „Tilbudstjek + tilbudsindhentning, 499 kr.“ er væk. At tage
499 kr. for noget, der nu er gratis, ville være den slags, siden findes for at
fange.

### Formular-id'et

`varebiler.json → forudsaetninger.leadformular` holder Tally-id'et. **Er den
tom, bliver knappen en `mailto:`** i stedet — så der aldrig står en knap på
siden, der ikke virker. På en modelside tager den bilens navn med sig.


## Annoncesamarbejdet fylder én linje

Oplysningen om aftalen med Brdr. Jensen stod som to afsnit i en gul kasse på hver
eneste af de 349 sider i afsnittet. Den er nu **én linje** med en lille
„Annonce“-etiket: hvem bilerne står hos, at vi har aftale om salget, og et link
til det fulde svar. 110 px blev til 37.

Det er ikke en svaghed i oplysningen. Markedsføringslovens krav er, at den
kommercielle hensigt fremgår **klart** — og en kort, tydelig linje øverst på
siden opfylder det bedre end tre afsnit, ingen læser til ende. Læserne er
professionelle indkøbere; de skal oplyses, ikke belæres. Den fulde redegørelse
står stadig på `/saadan-tjener-vi-penge/` og i bundteksten på hver side.

Til gengæld har forhandleren fået en rigtig præsentation. `omForhandler()`
skriver `forhandler.om[]` fra `brugte.json` ud på oversigten og mærkesiderne —
tyve års erfaring, tæt på tusind handler om året, eget værksted og autolakereri,
eget leasingselskab. Alt sammen fra deres egen side, med kilde.

Felterne `kort`, `by`, `om`, `om_kilde` og `aabningstider` er skrevet i hånden.
`jensen-byg.py` læser dem ud af den gamle fil og skriver dem med igen, så de
ikke forsvinder, når lageret hentes forfra.

## /varebiler/ er ikke længere i menuen

Specifikationstabellen bliver stående — modelsiderne og brødkrummerne linker til
den, den er indekseret, og den indeholder mål for alle 28 modeller. Den er bare
ikke et menupunkt mere. Menuen er nu **Bedste tilbud · Viden · Brugte ·
Udbydere** plus tilbudstjekket.

Skal den bruges til noget igen, skal den have en grund til at eksistere ud over
at være en tabel: filtrering på de mål, den viser, eller sammenligning af to
modeller side om side. Ellers gør modelsiderne det samme bedre.

## Værktøjsbæltet: ét system

Filterbåndet på forsiden var vokset et element ad gangen, og i ét bånd på 120 px
stod der til sidst:

| Element | Størrelse | Vægt | Familie |
| --- | --- | --- | --- |
| chip | 14 px | 500 | sans |
| chip__tal | 11 px | 500 | **mono** |
| søgefelt og selects | 14 px | 400 | sans |
| „Leasingtype“ | 12 px | 400 | sans |
| „Finansiel“ | 14 px | 400 | sans |
| „m. restværdi“ | 12 px | 400 | sans |
| „SORTÉR“ | 11 px | 500 | sans, VERSALER, spærret |
| sortpille | 12 px | 400 | sans |
| sortpille, valgt | 12 px | **500** | sans |

Fire størrelser, tre vægte, to familier, ét versal-spærret ord — og en knap, der
**skiftede tykkelse, når man klikkede på den**, så hele rækken hoppede en pixel.

### Gruppenavnene lå ikke på linje

„Leasingtype“ lå **6 px højere** end alt andet i rækken. Årsagen var markuppen,
ikke stilen: et `<legend>` har sin egen særlige rendering, og den `float: left`,
der skal til for at få det ind i kassen, tager det ud af flex-centreringen.

| | Midte før |
| --- | --- |
| Leasingtype (`<legend>`) | 564 |
| Sortér (`<span>`) | 570 |
| Alt andet i rækken | 570 |

Det kan ikke rettes med CSS alene. `<fieldset><legend>` blev derfor til
`<div role="group" aria-label="Leasingtype"><span class="gruppe__navn">` —
præcis som sorteringen allerede var bygget. **De to gruppenavne er nu det samme
element med den samme klasse**, så de ikke kan komme fra hinanden igen.

Og de fik en tydelig etiket-typografi: 11 px, vægt 600, versaler, spærret, i den
stille grå. Før var de 12 px almindelig brødtekst og lignede noget, man kunne
klikke på. Nu ser en etiket ud som en etiket — og de to ser ens ud.


### Reglen

- **Alt klikbart:** 14 px, vægt 500.
- **Alle gruppenavne:** 12 px, vægt 400, dæmpet. Ingen versaler, ingen spærring.
  „Leasingtype“ og „Sortér“ er det samme slags ord og ser derfor ens ud.
- **Tal i mærkater:** 12 px mono. Mono er husets konvention for tal.
- **Valgt tilstand skifter farve — aldrig vægt eller størrelse.**
- **Alle kontroller samme højde** (`--h-felt`, 38 px), så rækkerne flugter.
- **Én form pr. række.** Tredje række havde tre slags indpakning: leasingtypen i
  en ramme, sorteringen nøgen, Kort/Tabel i sin egen grå bakke. Nu er alle tre
  indrammede kasser af samme højde.

Reglerne står **sidst i `style.css` med vilje**: de skal vinde over alt det, der er
vokset frem ovenfor. Den tidligere mobilregel gjorde kun kategoriknapperne
mindre; nu gælder den alle kontroller i bæltet.

„m. restværdi“ og „u. restværdi“ er væk. De var en tredje tekststørrelse inde i en
enkelt kontrol, og forskellen står forklaret ved hvert eneste tilbud i tabellen.

### Kortene flugter også

Samme princip på håndbogens kort: titlen klippes ved to linjer, manchetten ved
tre, og meta-linjen får `margin-top: auto`. **`margin-top: var(--s4)` skubber
ikke noget til bunden** — det sætter bare en fast afstand, og det var den fejl,
der gjorde første forsøg virkningsløst.

### Og bilkortene

De to korttyper havde samme problem som bæltet. **Forsidens bilkort brugte otte**
kombinationer af størrelse og vægt, **det brugte bilkort seks** — og på det brugte
stod modelnavnet og prisen, de to ting øjet skal finde, i *samme størrelse med
forskellig vægt* (600 mod 700, fordi `<strong>` arver browserens fede). Gange 325
kort giver det en side, der aldrig falder til ro.

Reglen er den samme som i bæltet, oversat til kort:

| Rolle | Vægt |
| --- | --- |
| Værdier og navne | 600 |
| Hovedtallet (månedsprisen) | 500 — stort og mono, det behøver ikke også være fedt |
| Etiketter og enheder | 400 |

Og **11 px findes ikke længere på et kort**: to ord i en størrelse for sig er ikke
en størrelse, det er en undtagelse. Mærkatet „Opel“, dækningstallet „4/5“ og
nøgletalsetiketterne er alle 12 px nu.

Resultat: forsidens kort gik fra 8 kombinationer til 5, det brugte fra 6 til 3.

### Introen handler om læseren, ikke om os

Den gamle var tre sætninger, der alle begyndte med „Vi“:

> Vi samler tilbuddene fra udbydernes egne prislister, viser hvad der står i
> dem — og hvad der ikke gør. Alle priser ekskl. moms. Vi regner kun på tal,
> udbyderen selv har annonceret.

Det er en beskrivelse af en arbejdsgang, ikke en grund til at blive. Den nye
begynder med læserens problem og bruger vores egne tal til at vise, at
problemet er virkeligt:

> To tilbud på den samme varebil kan se ens ud og koste tusinder til forskel.
> Udbetalingen spænder fra 32.000 til 64.000 kr., løbetiden strækker
> månedsprisen, og 11 af de 54 tilbud her nævner ikke én eneste
> driftsomkostning. Her står tallene side om side — alle ekskl. moms.

**Tallene regnes ud ved bygning**, ikke skrevet i hånden — samme regel som i
håndbogen. En intro, der siger „11 af 54“, er forkert i det øjeblik, der
kommer et tilbud mere.


### Knappernes række i heroen er væk

„Bedste tilbud lige nu“, „Håndbogen“ og „Få tjekket dit eget tilbud“ står alle
tre i topmenuen — den sidste endda som fremhævet knap. Rækken gentog menuen og
skubbede bilerne længere ned.


## Headers og hastighed

### `_headers` kan ikke overskrive Cache-Control

Filen satte først et års cache på billeder og stylesheet. Cloudflare Pages
**tilføjer** bare sin egen Cache-Control efter vores i stedet for at erstatte den,
og resultatet var selvmodsigende:

```
Cache-Control: public, max-age=31536000, immutable, public, max-age=0, must-revalidate
```

På domænet blev det normaliseret til `max-age=14400, immutable, must-revalidate`
— altså stadig fire timer, plus to direktiver der siger hver sit. Linjerne er
fjernet igen; en malformet header er værre end Pages' egen standard.

**Skal billederne caches længere, skal det sættes som en Cache Rule i
dashboardet** — samme sted som www-redirecten. Filnavnet er indholdet, og
stylesheetet hentes som `?v=<hash>`, så begge kan caches for evigt uden risiko.

### Det filen til gengæld virker til

Sikkerhedsheaders, som Pages ikke sætter selv: `frame-ancestors 'none'` og
`X-Frame-Options: DENY`, så ingen kan lægge siden i en iframe — en uvildig
sammenligning i en ramme på en forhandlers domæne ville se ud, som om
forhandleren stod bag tallene. Dertil `Permissions-Policy`, der lukker kamera,
mikrofon og position, som siden alligevel ikke bruger.

### Ressourcehints

- **Modelsiden** preloader sit hero-billede og giver det `fetchpriority="high"`.
  Browseren fandt det ellers først, når layoutet var bygget.
- **De brugte biler** henter hvert billede fra `nextgen.carads.io`.
  `preconnect` + `dns-prefetch` starter DNS, TCP og TLS med det samme i stedet
  for, når det første `<img>` noteres. Bilsiden preloader også sit første foto.

`hoved()` tager derfor et femte argument, `forud`: en liste af `<link>`-tags,
der skrives i hovedet.

### Komprimering er ikke et problem

Cloudflare brotli-komprimerer alt. Oversigten over brugte biler er 440 kB rå og
**29 kB over tråden**. Forsiden det samme. Sidevægten er altså ikke der, indsatsen
skal lægges.

## Den bløde 404

Search Console meldte fire sider som ikke indekseret — heraf én „Ikke fundet“ og
én „Dublet uden kanonisk side valgt af brugeren“. Rapporten siger ikke hvilke.

Alle 433 URL'er i sitemappet var i orden — 200, korrekt canonical, ingen
omdirigering (`scratchpad/crawltjek.py` henter dem alle og tjekker netop de tre
ting). Problemet lå uden for sitemappet:

```
/findes-ikke-overhovedet/   200  „Erhvervsleasing af varebiler — 54 tilbud“
/assets/                    200  samme
/assets/img/                200  samme
/haandbogen/findes-ikke/    200  samme
```

**Uden en `404.html` i roden serverer Cloudflare Pages forsiden med status 200
for hver eneste URL, der ikke findes.** Hver tastefejl, hvert dødt link udefra
og hver mappe uden index blev til endnu en side med identisk indhold — og en
død URL blev aldrig ryddet ud af indekset, fordi den aldrig sagde 404.

`fejlsideHTML()` bygger nu en `404.html` sammen med resten af siden, så den har
samme menu, samme bund og samme stylesheet-version. Den har **ingen canonical**
— den findes ikke på én adresse, den er svaret på alle de adresser, der ikke
findes — og den er `noindex`.

Efter udrulning svarer de testede ikke-eksisterende URL'er 404, og alle 433
rigtige sider svarer stadig 200.


## Strukturtjek af alle sider

`scratchpad/htmltjek.py` kører hver eneste genererede side igennem. Ikke en fuld
HTML-validator, men de fejl der faktisk opstår, når sider bygges af
strengsammensætning:

- ubalancerede tags (`html`, `body`, `main`, `section`, `table`, `ul` …)
- dublerede `id`-attributter
- formularfelter uden tilgængeligt navn
- tabeller uden `<th>`
- JSON-LD der ikke kan parses

**Den fandt med det samme, at de 14 guidesider aldrig lukkede `</body></html>`.**
`guideSideHTML()` var den eneste af de syv sidebyggere, der manglede det — og en
browser lukker selv, så det var usynligt i seks måneders brug.

Kør den efter enhver ændring i en generator. Den tager to sekunder og fanger
præcis den slags fejl, man ikke kan se.

## Tre nøgletal, ikke fem

Forsiden, oversigten over brugte biler og mærkesiderne viser nu alle **tre** tal i
heroen — ikke fire eller fem. „Udbydere“ og „Opdateret“ stod allerede i linjen
over overskriften; „Mærker“ står i mærkerækken lige nedenunder; „Med
leasingforslag“ er et filter, ikke et nøgletal.

På en telefon stakkede de fem tal i tre rækker og skubbede bilerne ned. Og de
variabler, der blev tilovers i generatoren, blev slettet med — død kode i en
generator er farlig, fordi det næste menneske tror, tallene stadig bruges.

## Interne links

### Brødkrummen går gennem mærket

De elleve mærkesider under `/varebiler/<mærke>/` havde **ikke ét eneste internt
link ind**. De lå i sitemappet, men hverken en læser eller en søgemaskine kunne
klikke sig frem til dem.

Brødkrummen på modelsiden gik `Forsiden / Varebiler / Ford Transit Custom`. Nu
går den `Forsiden / Varebiler / Ford / Transit Custom` — både synligt og i
`BreadcrumbList`-schemaet. Det giver hver mærkeside ét til fem links ind, og en
læser en vej fra én model til alle mærkets.

`scratchpad/linktjek.py` kører hele sitet igennem: døde interne links, og sider
uden et eneste link ind. Begge tal er nul.

### Vidensmodulet linkes fra 42 sider

Artiklerne lå kun i menuen. Nu står de to steder mere:

- **„Før du skriver under“** på alle 28 modelsider, med tre artikler valgt efter
  bilen. `videnForModel()` vægter: pickup-artiklen højest på en pickup eller
  ladvogn, specialindretning højt på kassevogne (reoler sidder i kassevogne),
  grøn ejerafgift lavt på elbiler (de betaler næsten ingen).
- **„Læs også“** på alle 14 guider, styret af `GUIDE_VIDEN`. En guide om
  parkeringskældre får mål-artiklen; en om pris får den om det, der ikke står i
  tilbuddet.

Resultatet: hver af de ni artikler har mellem 13 og 43 links ind. **Vægtene skal
ligge spredt** — første forsøg gav to artikler samme tal, og så faldt den ene
altid ud af top tre.

## Indsamling af tilbud

Udbydernes prissider er strukturerede nok til at hentes maskinelt, og
høsterne ligger i scratchpad:

| Kilde | Modeller | Hvad de oplyser |
|---|---|---|
| `kassebil.dk` | 25 | variant, leasingtype, løbetid, km/år, udbetaling, restværdi, ydelse, totalvægt, varerumslængde |
| `leasing.dk` | 35 | variant, løbetid, km/år, førstegangsydelse, ydelse — flere varianter pr. model |

Begge leverer tallene i rå HTML, så de kan hentes med `curl` og parses.

### Regler ved indflettning

- **Kassebil.dk** har én konfiguration pr. modelside. De tilbyder service og
  forsikring som tilvalg på alle 25 sider, altså *forholder de sig* til begge
  poster — de er `ikke_inkluderet`, ikke uoplyste. Det giver 2/5 i dækning,
  hvor datafilen før havde 0/5.
- **Leasing.dk** har op til 14 varianter pr. model. Vi tager den billigste målt
  på samlet pris pr. md., så tabellen ikke fyldes med fjorten rækker fra samme
  udbyder. Antallet af varianter står i tilbuddets `note`.
  De skriver eksplicit: service inkluderet, dæk/forsikring/ejerafgift ikke.
  Vejhjælp nævner de ikke — altså 4/5.
- Elbilsider oplyser rækkevidden som “NNN km” ved siden af kilometertallet.
  Høsteren filtrerer værdier under 5.000 væk, ellers blev rækkevidden læst som
  kilometer pr. år.

### Tilføjet 22.09.2026

Syv modeller med tilbud fra **begge** udbydere, så de kan sammenlignes fra dag ét:

| Model | Mål fra | Hvad kilden mangler |
|---|---|---|
| Citroën Jumpy | Citroën DK, opd. 16-03-2026 | intet |
| Citroën Jumper | Citroën DK, opd. 30-04-2026 | volumen, lastrumsmål |
| Renault Master | Renault DK, gyldig 1.7–30.9.2026 | lastrumsmål (grafik) |
| Peugeot Partner | Peugeot DK, Q4 2025 | totalvægt, nyttelast, lastrumsmål |
| Peugeot Expert | Peugeot DK, opd. 13-03-2026 | CO₂, forbrug, ejerafgift |
| Peugeot Boxer | Peugeot DK, læst 22-09-2026 | volumen, lastrumsmål |
| Opel Combo | Opel DK, læst 22-09-2026 | totalvægt, nyttelast, lastrumsmål |

Peugeot Expert og Citroën Jumpy er **samme bil** med forskelligt bomærke, og de to
prislister har komplementære huller: Citroën oplyser CO₂ men Peugeot ikke; Peugeot
oplyser vægte som Citroën også gør. Tallene er alligevel ikke overført mellem dem.
Et tal skal stå i den kilde, det tilskrives — ellers kan `maal_kilde` ikke
dokumentere det, og så er §13-disciplinen brudt.

Partner, Expert, Boxer og Combo har **intet billede**. Peugeot udstiller kun showroom-skud af
el-varianterne på turkis baggrund med ladestander — forkert bil og helt uden for
sættets stil. Mono-pladsholderen er ærligere.

### Et mønster i prislisterne

De store varebiler dokumenteres bedre end de små. Citroën Jumpy og Peugeot
Expert — mellemklassen — har fulde vægt- og målsider. Citroën Jumper, Peugeot
Boxer og Renault Master har vægte men ingen lastrumsmål. Og de små —
Peugeot Partner og Opel Combo — har hverken totalvægt eller nyttelast i
prislisten, kun volumen, forbrug, CO₂, afgift og anhængervægt.

Det betyder, at ranglisten over pris pr. kilo nyttelast systematisk udelader de
små varebiler. Det er ikke en fejl i beregningen, men i kilderne — og det står
på `/bedste-tilbud/`, hvor der oplyses hvor mange modeller der kan rangeres.

### Hvad der stadig kan hentes

**27 modeller** findes hos de to kilder uden at være på siden — blandt andet VW
Transporter og Crafter, Mercedes Vito og Citan, Renault Master, Ford Transit og
Transit Connect, hele Stellantis-familien (Jumpy/Expert/Vivaro,
Jumper/Boxer/Movano, Partner/Combo), Toyota Proace, Nissan Primastar og
Interstar, Iveco Daily, Fiat Ducato og Doblo. Syv af dem har tilbud fra **begge**
udbydere og ville dermed kunne sammenlignes fra dag ét.

Flaskehalsen er ikke tilbuddene — det er de **tekniske mål**. Nyttelast,
lastrumsvolumen og trækvægt skal hentes fra producenternes danske prislister, og
det er én kilde pr. mærke. Tilføjer man modellerne uden mål, står kortene med
tomme felter og kan ikke indgå i ranglisterne over pris pr. kg og pr. m³.

## Leasingtype

Finansiel leasing har en aftalt **restværdi**: når aftalen udløber, kan du selv
eller en køber du anviser overtage bilen til det beløb. Operationel leasing har
ingen — bilen leveres tilbage, og udbyderen bærer risikoen for hvad den er værd
til sidst. Det er to forskellige produkter, og to ydelser af hver sin type kan
ikke sammenlignes direkte. Crafter er det tydeligste eksempel på siden:
Volkswagens operationelle aftale på en 177 hk koster 3.795 kr./md., mens
Kassebils finansielle på en 140 hk koster 5.164 kr./md. — fordi den sidste
afdrager bilen ned til restværdien.

Hvert tilbud har `leasingtype` og `leasingtype_grundlag`:

| grundlag | betyder |
|---|---|
| `oplyst` | udbyderen skriver selv hvilken type aftalen er |
| `restvaerdi` | udbyderen oplyser en restværdi, men ikke typen. Typen er sluttet af restværdien |
| `null` | udbyderen oplyser ingen af delene. Feltet står tomt |

En udledt type vises med stjerne og stiplet understregning (`.udledt`), så det
fremgår at det er vores slutning og ikke udbyderens ord. Toyota er den eneste
udbyder i den kategori lige nu: de oplyser restværdi på hvert tilbud, men
skriver aldrig typen.

Vi udleder **ikke** operationel af en manglende restværdi. At en udbyder ikke
offentliggør et tal betyder ikke at tallet ikke findes.

Forsiden har et afkrydsningsfelt pr. type. Ingen afkrydsning viser alt; en
afkrydsning viser de modeller der har mindst ét tilbud af den type. Valget
gemmes i URL'en som `?leasing=finansiel,operationel`.

Restværdien har egen kolonne på modelsiden. Den var i datamodellen fra starten,
men blev aldrig vist — og den er hele forskellen mellem de to produkter.

## Vejledende nypris

`nypris` er prisen på en fabriksny bil, ekskl. moms, med egen kilde og dato.
Reglen er, at **nyprisen skal gælde præcis den variant målene gælder**. Ellers
viser siden en pris på én udgave og mål på en anden, og det er værre end ingen
pris.

Siden skriver selv forbeholdet: en vejledende pris er importørens pris til
forhandleren, og den enkelte forhandler fastsætter selv sin pris og sine
rabatter. Det står ordret i både Volkswagens, Peugeots og Citroëns prislister.

**23 af 24 modeller har nypris.** Kun Iveco Daily mangler: Iveco offentliggør
ingen dansk prisliste — hverken modelsiden eller kampagnesiden opgiver en
nyvognspris, kun leasingydelsen.

### Når producenten kun har en fra-pris

Volkswagen offentliggør ingen variantpris på Crafter. Prislistetjenesten svarer
„Der findes i øjeblikket ikke priser på den valgte model“, og modelsiden har kun
én samlet fra-pris for hele serien plus intervaller for alt andet.

En fra-pris må ikke læse som prisen på den variant målene gælder. Derfor har
`nypris` feltet `fra: true`, som ændrer to ting: værdien vises som „fra 320.995
kr.“, og kildelinjen skriver at prisen er en fra-pris for hele serien og
**ikke** gælder den målte variant. Uden den markering ville tallet være en
stiltiende påstand om noget, producenten ikke har sagt.

### MAN's prisliste lå et helt andet sted

MAN Scandinavias danske sider svarer 404, men MAN har en dansk TGE-prisliste for
modelår 2026 på `man.eu`. Den fyldte fire tomme felter på én gang: CO₂ 243 g/km,
10,8 km/l, 5.080 kr. i halvårlig ejerafgift og 363.929 kr. i nypris.

Rækken for vores variant står brudt over to linjer i PDF'ens tekstlag —
„3.140 L3H3 3.5T Forhjulstræk 140 HK Automat 5.080 363.929“ efterfulgt af
„3.000 kg 10,8 243“. Kolonneraekkefoelgen blev bekræftet mod naboraekkerne, hvor
alt står samlet.

### Hvor priserne kommer fra

| Kilde | Mærker | Hvordan |
|---|---|---|
| `prislister-erhverv.volkswagen.dk` | VW Transporter | PDF, læses med pdfjs |
| `ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/<Model>.pdf` | VW Caddy, ID. Buzz | PDF, forudsigeligt navn |
| iPaper (`ipaper.ipapercms.dk`, `brochurer.citroen.dk`, `pdf.opel.dk`, `katalog.ford.dk`) | Peugeot, Citroën, Opel, Ford, Toyota | tekstlag i DOM, læses i browseren |
| `edge.sitecorecloud.io/.../prisliste-<model>.pdf` | Renault | PDF, forudsigeligt navn |
| `press.kiamotors.dk` | Kia | importørens prismeddelelse |
| `hessel.dk` | Mercedes-Benz | forhandler; Mercedes' egen server udleverer ikke PDF'erne |

### iPaper-katalogerne kan alligevel læses

Det var flaskehalsen i lang tid. iPaper render sider som billeder, men lægger
**et tekstlag i DOM'en**, som `get_page_text` i browserpanelet læser direkte.
Ingen PDF-øvelser nødvendige.

Teksten kommer **kolonneordnet**, ikke rækkeordnet: først alle modelnavne, så
alle forbrugstal, så alle CO₂-tal, så alle ejerafgifter, til sidst priserne.
Kolonnerne har lige mange poster, så rækkerne kan stilles op igen — men det er
netop den slags opstilling der tidligere gav forkerte ejerafgifter. Derfor
krydstjekkes hver aflæsning mod de tal vi allerede har, før prisen skrives ind.

Det krydstjek fandt to fejl:

- **Berlingos trækvægt blev rettet forkert og er rettet tilbage.** Side 1 i
  Citroëns prisliste har kolonnen „Maks anhængt vægt u/m bremser“ med værdien
  720 / 1.000, og den fik mig til at sætte trækvægten ned fra 1.350 til
  1.000 kg. **Side 2 i samme dokument** har en variantopdelt vægttabel med to
  adskilte rækker: „med bremser 1.350 kg“ og „uden bremser 730 kg“. Den er
  eksplicit mærket og pr. variant, så den vinder. Opel opgiver 1.350 kg for
  Combo, og Peugeot 690 / 1.350 for Partner — hvor 1.350 må være værdien med
  bremser, fordi en uafbremset anhænger ikke kan være tungere end en afbremset.
  Læringen: læs hele dokumentet før en rettelse, ikke kun den side tallet
  først blev fundet på.
- **Andersen Bilers restværdi** på Transit Custom stod som 152.500 kr. — et
  midtpunkt vi selv havde regnet af „150.000–155.000“. Der er ikke tale om et
  interval: Andersen viser to forskellige tilbud, 15.000 km/år med 150.000 kr.
  og fri km med 155.000 kr. Rettet til 150.000, som er det tilbud vi viser.

Samme krydstjek bekræftede til gengæld Renault (seks felter pr. model), Peugeot,
Opel og VW Caddy (fem felter) uden afvigelser.

### Forhandlerne er ikke der, priserne er

Det var den intuitive antagelse, og den holdt ikke. bn.dk, Bilernes Hus,
Autohuset Vestergaard og P. Christensen har alle en side pr. model, men de
færreste skriver et tal — de ender i „Få et leasingtilbud“ eller sender videre
til LEASING DK. Det er **importørernes egne kampagnesider** der offentliggør
ydelse, udbetaling og løbetid.

Den store undtagelse er **Ejner Hessel**, hvis enkeltbilssider oplyser alt:
leasingtype (de skriver udtrykkeligt „Finansiel leasing: Ikke muligt“),
løbetid, km/år, totalomkostninger, hvad ydelsen dækker, nyttelast, CO₂,
forbrug, trækvægt, ejerafgift og nypris. Det er den bedste enkeltkilde på siden
og grænsen til importørniveau.

**Pas på forældede kampagner.** Andersen Bilers Nissan-kampagne (Primastar
1.998 kr., Interstar 2.698 kr.) lå stadig offentligt fremme i september 2026,
men gjaldt kun til 31. oktober 2025. Den blev holdt ude. Tjek altid
gyldighedsdatoen, ikke bare at siden svarer.

## Udvendige mål

Feltet `udvendig` kom til, fordi ét tal afgør et køb og ingen leasingside viser
det: **højden**. Danske parkeringskældre ligger typisk mellem 1,90 og 2,10 m.
Skellet i vores data er skarpt:

| Passer i 2,10 m | For høj |
|---|---|
| Transit Courier 1.827, Caddy 1.856, Proace City 1.880, Vito 1.920, ID. Buzz 1.938, Proace 1.955, Transit Custom 2.040 | Sprinter 2.430, Master 2.500 |

Under tabellen står en note om, at højden er målt uden tagantenne og tilbehør,
og at tagbøjler lægger oveni.

### Mål der ligner hinanden, men ikke er det samme

Fire par blev holdt adskilt, fordi producenterne blander dem sammen:

| | |
|---|---|
| `lastrum.bredde_max_mm` | bredden øverst i rummet |
| `lastrum.bredde_mellem_hjulkasser_mm` | bredden på gulvet — den afgør om en europalle kan stå |
| `venderadius_m` | Toyota og Renault opgiver radius |
| `vendediameter_m` | Volkswagen opgiver diameter |
| `udvendig.bredde_mm` | uden spejle |
| `udvendig.bredde_med_spejle_mm` / `bredde_spejle_inde_mm` | Ford opgiver begge, aldrig uden |

Vi regner **ikke** om mellem radius og diameter, og lægger ikke en maksimal
bredde i feltet for bredden mellem hjulkasserne. Toyotas „Varerum, bredde“ på
1.636 mm kan ikke være målt mellem hjulkasserne på en Proace; den hører i
`bredde_max_mm`.

### Hvor målene kommer fra — og hvor de ikke findes

| Kilde | Hvad den giver |
|---|---|
| Fords specifikationskataloger | fulde mål pr. karrosseri, højde som interval |
| Toyotas specifikationskataloger, side 4 | fulde mål + venderadius, for Proace og Proace City |
| Volkswagens detailprislister | fulde mål + vendediameter + læssekantshøjde + europaller |
| Renaults Master-prisliste | fuld måltabel som tekst |
| Ejner Hessels konfigurator | længde og højde i meter, med målemetoden defineret |

Og hvor de **ikke** findes, med grunden skrevet ind i modellens `_mangler`:

- **Peugeot, Citroën og Opel** viser målene som tegninger på *modelsiderne*, men
  deres **prislister har rigtige måltabeller** — de står bare på side 2–5, ikke
  side 1. Det blev overset i første omgang. Tabellerne gav udvendige mål,
  varerumsmål, læssehøjde og antal europaller for Berlingo, Jumpy, Jumper,
  Expert, Boxer og Combo. Kun **Peugeot Partner** mangler: dens prisliste har
  ingen mål- eller vægttabel for dieselen, selv om Citroën og Opel
  offentliggør dem for den samme bil.
- **Renault Trafic og Kangoo** har samme tabel som Master, men som tegning.
- **Volkswagen Transporter og Crafter** har ingen måltabel i prislisten, og
  „Teknisk data“-linket på modelsiden fører tilbage til forsiden.
- **MAN's prisliste** har pris, ejerafgift, forbrug og CO₂ — ingen mål.
- **Iveco** opgiver kun intervaller for hele serien: fem længder fra 508 til
  754 cm og tre højder fra 154,5 til 210 cm.

En højde opgivet som et interval føres som det **højeste** tal, fordi en ulæsset
bil er den højeste, og det er den højde der afgør om bilen kan køre ind. Det står
i kildenoten hver gang.

## Datamodellen

Hver model i `varebiler.json` har en liste af `tilbud` fra forskellige udbydere. Hvert tilbud
skal have `kilde_url` og `kilde_dato` — generatoren advarer hvis de mangler.
Markedsføringslovens § 13 kræver at rigtigheden af faktiske oplysninger kan dokumenteres.

### Det ene tal vi selv beregner

Tilbud annonceres med forskellig udbetaling. Generatoren beregner derfor:

```
månedspris inkl. udbetaling = førstegangsydelse / løbetid + månedsydelse
```

Og ikke mere end det. Tallet består udelukkende af to beløb udbyderen selv har
annonceret. Det er markeret som egen sammenstilling alle steder det vises, og må ikke
præsenteres som et tal udbyderen har oplyst.

### Hvorfor der ikke lægges estimater til

En tidligere version lagde et estimat til for hver af de fem driftsposter — service og
reparation, dæk, forsikring, grøn ejerafgift, vejhjælp — som udbyderen ikke inkluderede.
Tanken var, at et uoplyst tilbud ikke skulle fremstå billigere end et oplyst.

Det er droppet, og det skal det blive. Estimaterne var vores gæt på omkostninger,
udbyderen ikke havde oplyst, og gættet afgjorde rangordenen i tabellen. Ejerafgiften
illustrerer problemet. Producenternes danske prislister oplyser den halvårlige grønne
ejerafgift direkte pr. variant, og spredningen er stor:

| Model | Kr. pr. halvår | Kr. pr. md. |
|---|---:|---:|
| Kia PV5 Cargo (el) | 460 | 77 |
| Renault Kangoo | 1.800 | 300 |
| Citroën Berlingo | 1.800 | 300 |
| VW Caddy Cargo | 2.220 | 370 |
| Renault Trafic | 3.360 | 560 |

Et fladt tal er dermed forkert for stort set alle. Og forsikring og service afhænger af
virksomhedens skadeshistorik, førernes alder og aftalte serviceniveau, som vi ikke kender.

En tidligere version af dette afsnit angav tal beregnet ud fra satstabellen i
brændstofforbrugsafgiftsloven. Udligningsafgift-kolonnen i det udtræk var forskudt, og
tallene for dieselmodellerne var derfor for lave. Tallene ovenfor står i prislisterne og
skal foretrækkes — de er også indskrevet pr. model i varebiler.json.

I stedet bærer **dækningsgraden** signalet: hvor mange af de fem poster udbyderen
overhovedet forholder sig til. En post som udbyderen slet ikke nævner tæller som
manglende oplysning. Den kolonne skal læses sammen med prisen, og siderne siger det
eksplicit: et tilbud der inkluderer service og forsikring står med et højere tal uden at
være dyrere, og et tilbud der ikke oplyser noget er ikke billigere — det er ufuldstændigt.

Den konkrete prissætning af de fem poster hører hjemme i rådgivningsrapporten, hvor der
er en kendt kunde, kendte tal og et forbehold.

### Hvorfor løbetider ikke omregnes

Løbetid og kilometertal omregnes **ikke** til fælles vilkår. Det er en beslutning, ikke en
mangel, og den følger af at siden kun viser tilbud, der er aktuelle hos udbyderen: et
60-måneders tilbud omregnet til 36 måneder er ikke et tilbud, nogen kan tage imod. Prisen
ville være opfundet af os — samme problem som driftsestimaterne ovenfor.

Prisen at betale er, at sorteringen efter månedspris inkl. udbetaling favoriserer lange
løbetider, fordi udbetalingen fordeles over flere måneder. Det håndteres ved at vise
løbetid, kilometertal og leasingtype ved hvert tilbud og sige det direkte i forbeholdet —
ikke ved at regne om.

`samlet` (udbetaling + ydelse × løbetid) beregnes i `beregn()` og vises ikke endnu. Det er
et faktisk tal for et faktisk tilbud og kræver ingen omregning, så det er den oplagte måde
at gøre løbetidens betydning synlig, hvis sorteringen skal balanceres.

## Inden publicering

- [ ] Sæt priserne på `/tilbudstjek/` — står som `[pris]`
- [ ] Indsæt Tally-formular-URL'er på `/tilbudstjek/` (to steder, markeret med `TODO`)
- [ ] Opret `/saadan-tjener-vi-penge/` — footeren linker til den
- [ ] Indtast tekniske mål på variantniveau (lastrumsmål, nyttelast, totalvægt) fra
      producenternes danske prislister. Feltet `_mangler` markerer hvor det står tilbage
- [ ] Tjek at inkl. moms vises læsbart sammen med prisen, hvis siden får privattrafik

## Hvad der bevidst ikke er med

Ingen momsberegner og ingen skatteberegner. Reglerne gengives med kilde og dato i det
redaktionelle indhold; den konkrete stillingtagen hører hjemme i rådgivningsrapporten, hvor
der er en kendt kunde og et forbehold.

Ingen leadsalg. Forretningsmodellen er kundefinansieret rådgivning, og man kan ikke tage
betaling for at vurdere et tilbud og samtidig sælge kunden videre til den udbyder man vurderer.

## pages.dev-kopien er noindex

`gulplade.pages.dev` serverede hele sitet med status 200 — en fuld kopi af
gulplade.dk under en anden vært. Canonical pegede rigtigt, men det er kun et
hint. `_headers` sætter nu `X-Robots-Tag: noindex` på `gulplade.pages.dev` og
preview-adresserne under den. gulplade.dk får ikke headeren (tjekket med curl
27-09-2026).

## De gamle .html-adresser

Search Console (data fra 21-09-2026) kendte fire adresser uden for sitemappet:
`/maerke-opel.html` (404), `/maerke-volkswagen.html` og `/bedste-tilbud.html`
(omdirigering, nu 404) og `http://gulplade.dk/` (dublet — svarer nu 301 til
https). De tre `.html`-adresser er fra sitets første udgave med flade filer.
De får nu 301 i den håndskrevne del af `_redirects` til `/varebiler/<mærke>/`
og `/bedste-tilbud/`. Alle elleve mærker er med, ikke kun de to, Google har
set.

Cloudflare havde cachet 404-svaret. Lige efter udrulning svarede adressen
stadig 404, men en frisk forespørgsel gav 301. Cachen udløber af sig selv.

## Søgeordene, folk faktisk bruger (27-09-2026)

Search Console viste 19 forespørgsler og 50 visninger på de første 28 dage. De
afslørede tre huller:

- **„Varevogn“, ikke kun „varebil“.** Den største forespørgsel var „bedste
  varevogn til prisen“ med 18 visninger, og ordet stod næsten ingen steder.
  `/bedste-tilbud/` hedder nu „Bedste varevogn til prisen“ med H1'en „Find den
  bedste varebil til prisen“. De to guider om billigste og lille varebil har
  fået „varevogn“ og „bedste“ i titel og beskrivelse.
- **„Gulpladebil“.** Det er sidens eget navn, men ordet stod kun på to sider.
  Forsidens titel er nu „Erhvervsleasing af varebil og gulpladebil — 54
  tilbud“. Den er for lang til „| Gulplade.dk“, og `titel()` dropper det selv.
- **Hvide plader og papegøjeplader.** 7 af 19 forespørgsler handlede om det.
  Den nye artikel `/haandbogen/gule-hvide-eller-papegoejeplader/` bygger på
  Motorstyrelsens sider om omregistrering og papegøjeplader. Som i resten af
  Håndbogen står der **ingen satser**. Eneste beløb er Motorstyrelsens egne
  eksempler fra 2020, og det står ved dem.

Artiklen linkes fra tre steder i artiklen om gule plader og fra modelsiderne.
På pickups og ladvogne vejer den tungt, fordi en pickup med bagsæde er
Motorstyrelsens eget eksempel. FAQ'en på `/brugte-varebiler/` har desuden fået
„Er varebilerne på gule eller hvide plader?“. Lagerdataene oplyser ikke
pladetypen, så svaret påstår intet om bilerne. Det henviser til Motorregistret.

## IndexNow (Bing m.fl.)

`indexnow.js` melder hver URL i sitemappet til IndexNow via Bing. Nøglen ligger
som `5477165fb45f19e30c3dd6c5b90ef5a8.txt` i roden, og filen må ikke slettes.
Kør `node indexnow.js` efter et deploy med nye sider. Første indsendelse
27-09-2026: 458 URL'er, svar 200. Google bruger ikke IndexNow. Her er
Search Console stadig vejen.

## Bilsiderne var en kopi af forhandlerens

351 af 458 sider er brugtbilsider. Beskrivelse, specifikationer og udstyr står
ordret på Brdr. Jensens egen side. Den har været der først, peger på sig selv
som kanonisk og er åben for indeksering (tjekket 27-09-2026). Uden noget eget
har Google ingen grund til at vælge vores side frem for deres.

`sammenlignHTML()` giver hver bilside afsnittet **„Sammenlignet med lageret“**,
som kun vi kan skrive:

- **Pris mod samme model** fra årgange inden for ±2 år: antal, spænd, typisk
  pris, hvor mange der er billigere, og afstanden til den typiske pris. Er der
  under tre at sammenligne med i årgangsspændet, bruges hele modellen, og så
  står årgangene ikke i teksten. Et forbehold står altid ved: årgang,
  kilometer og opbygning forklarer det meste, og engros trækker prisen ned.
- **Kilometer om året** siden første registrering mod samme gruppe. Biler
  under et år gamle udelades.
- **„Tæt på i pris“**: de tre nærmeste af samme model, fyldt op med samme
  karrosseri. Det giver også interne links mellem bilsiderne.
- **„Ny i stedet?“**: link til samme model i leasingtabellen med antal tilbud
  og laveste ydelse før udbetaling. Kun ved præcist navnematch. Første udgave
  matchede på begyndelsen af navnet og koblede alle 23 Transit til Transit
  Custom. Chassis- og ladbiludgaver vælges efter karrosseri, så en Master
  ladvogn går til Master Chassis.

Dækning ved første kørsel: prisen er sammenlignet på 288 af 329 biler (262
af dem inden for årgangsspændet), kilometer på 277, alternativer på 327 og
leasing på 281. Bilsiderne gik fra typisk 459 til 588 ord.

Hold øje i Search Console med „Dublet, Google valgte en anden kanonisk side“ på
bilsiderne. Viser det sig i stor stil, skal det overvejes at sætte selve
bilsiderne til `noindex` og lade landingssiderne bære søgeordene.

## Brugtsektionen: pris pr. årgang, FAQ og fem nye lister (27-09-2026)

**Model- og mærkesiderne** (`indsigt()` i `generate-brugte.js`) svarer nu på det,
folk søger på, og ikke kun med en liste:

- **„Hvad koster en brugt X?“**: spænd og typisk pris, pris efter karrosseri
  (kun når begge grupper har mindst tre biler), og en tabel med typisk pris og
  kilometer pr. årgang. En årgang skal have mindst to biler med pris for at
  komme i tabellen.
- **FAQ** som også går ud som `FAQPage`: pris, kilometer, automatgear, leasing
  af den brugte, og hvad samme model koster ny i leasing (med link). Et svar,
  der ikke kan regnes ud, udelades. Nul hedder „Ingen af de 5“, ikke „0 af de 5“.

**Fem nye facetter**, alle med `imenu: false`:

| Side | Biler | Kilde |
|---|---|---|
| `/brugt-varebil-med-traek/` | 154 | udstyrsfeltet „Anhængertræk“ |
| `/brugt-varebil-under-50000-kr/` | 24 | pris, kun biler med troværdig pris |
| `/brugt-4x4-varebil/` | 17 | variantnavn: 4x4, 4WD, AWD, 4Matic, 4Motion, quattro |
| `/brugt-mandskabsvogn/` | 29 | DobKab, dobbelt kabine, mandskabsbil/-vogn |
| `/brugt-koelebil/` | 10 | „kølebil“ eller „køle/frys“ |

Alle fritekst-træf er gennemgået ét for ét. „Køle“ alene fangede en Sprinter
med køleboks i førerhuset, så mønstret er strammet. Mandskabsvogn gav 29 og
ikke 20, fordi „DobKab“ i variantnavnet også fanger fem Ford Ranger-pickupper.
De har ægte dobbeltkabine og er med, og det står i teksten.

**Miljøzonenote** på de 27 dieselvarebiler, der er registreret før 1. september
2016 (`miljoezoneHTML()`). Euronormen står ikke i forhandlerens data, så noten
påstår intet om den enkelte bil. Den siger, hvor man slår det op. Står
partikelfilteret i udstyrslisten, siges det, at det er registreringen, der
tæller.

## Varerumssikring — /til-varebilen/varerumssikring/

En markedsgennemgang: seks kategorier (udvendige ekstralåse, indvendige
elektroniske låse, forstærkninger, alarm og sporing, sikker opbevaring,
mærkning) og en pristabel. Tabellen viser **forhandlernes egne priser inkl. moms
uden montering** (AutoLock, CargoSikring, læst 27-09-2026). Det er det eneste
sted på sitet, hvor priser står inkl. moms, og det står over tabellen.

Holdt ude, fordi det ikke kunne findes i en primær kilde: F&P-sikringsniveauer
specifikt for køretøjer og tyvenes brug af „jamming“. Sikringskatalogets
kapitler om sikringsniveauer handler om bygninger.

`generate-tilvalg.js` understøtter nu `punkter`, `tabel` og `efter` i et afsnit.

## Tilbudsguider og Bedste varebil 2026

Fire nye guider: `mellemstor-varebil` (4–8 m³), `operationel-leasing-varebil`,
`finansiel-leasing-varebil` (restværdien vises, men regnes ikke med) og
`diesel-varebil`.

`/bedste-tilbud/bedste-varebil-2026/` (`aaretsHTML()`) viser vinderen i hver
guide med det tal, den vinder på. Tallene kommer fra `guideRaekker()`, så siden
kan ikke blive uenig med guiderne. Året læses af `varebiler.json`s dato. **Når
året skifter, får siden en ny URL, og den gamle skal have en 301 i
`_redirects`.**

## Håndbogen: fire nye artikler

`miljoezoner-og-varebiler`, `takograf-paa-varebil` (EU-reglen fra 1. juli 2026
for varebiler over 2,5 t i international kørsel), `anhaenger-bag-varebilen` (B,
B+/kode 96, BE) og `hastighedsgraenser-for-varebiler`. Kilderne er
Færdselsstyrelsen, miljoezoner.dk og Sikker Trafik.

Færdselsstyrelsens vejledning fra 22-08-2024 om elvarebiler på 3.500–4.250 kg
(B-kørekort) siger, at de er lastbiler: 80 km/t, takograf, førerkort, mindst to
års kørekort og kun kørsel i Danmark. Det står i både takograf- og
hastighedsartiklen og vægter tungt på modelsider over 3.500 kg.

Håndbogens tekst escaper HTML og kender kun `**fed**` og `[tekst](link)`.

## Udstyr: standard og tilvalg pr. niveau (28-09-2026)

Ny datafil: `udstyr.json`. Den samme tjekliste med 23 poster for alle modeller, én
celle pr. udstyrsniveau, så en Caddy og en Berlingo kan læses mod hinanden. Det er
netop det, der er svært at finde hos producenterne: hver prisliste har sin egen
opstilling og sine egne navne.

- `poster` + `grupper`: tjeklisten. Id'erne er faste — de bruges i URL'erne
  (`/udstyr/<slug af navnet>/`) og i sammenligningen på forsiden.
- `modeller.<id>`: `kilde` (producentens prisliste, dato, sider), `niveauer`
  (trim i stigende rækkefølge med `fra_pris` ekskl. moms), `udstyr.<post>` = liste
  med én celle pr. niveau, og `tilbud_niveau` = hvilket niveau hvert tilbud gælder
  (nøgle `udbyder|variant`, afgjort ud fra variantnavnet; `null` hvis det ikke kan).
- Celle: `s` = `std` | `tilvalg` | `pakke` | `nej` | `ukendt`, `pris` ekskl. moms,
  `pakke` = pakkens navn, `note`. `tilvalg` med `pris: 0` vises som „Uden merpris“.

**`ukendt` er ikke `nej`.** `nej` bruges kun, når prislisten viser, at udstyret ikke
kan fås på niveauet (eller karrosseriet udelukker det, fx skydedør på en pickup).
Står det ikke i nogen producentkilde, er det `ukendt` og vises som „Ikke oplyst“.
Stellantis (Citroën, Peugeot, Opel) har tynde prislister, der kun fremhæver udvalgt
udstyr — derfor flest huller der.

**Bevidst udeladt:** nødbremse, vognbaneassistent, eCall og fartbegrænser. De er
lovkrav på alle nye varebiler siden juli 2024 (GSR2) og siger intet om forskellen.

**Faldgrube i PDF'erne:** Renault, Ford og Opel sætter prisen en linje forskudt i
forhold til udstyrsteksten, når man trækker tekst ud. Læs efter placering
(`pdfplumber` → `extract_words()` grupperet på `top`), ikke efter rækkefølge. VW
sætter prisen ekskl. moms før udstyrskoden og inkl. moms til sidst.

Hvor det bruges:
- **Modelsiden:** sektionen „Udstyr: standard og tilvalg“ (`#udstyr`) med én kolonne
  pr. niveau, og „Niveau X · N af 23 standard“ ved hvert tilbud, hvor niveauet kendes.
- **`/udstyr/`** + én side pr. post („Varebiler med bakkamera som standard“),
  sorteret: standard → tilvalg efter pris → pakke → fås ikke → ikke oplyst.
- **Forsidens sammenligning:** udstyret på det niveau, det billigste tilbud gælder
  (ellers det billigste niveau, og det står i rækken).
- **`/varebiler/`:** kolonnen „Std.-udstyr“ = antal standardposter på billigste niveau.
- Forsiden har en kort sektion med links, og bundmenuen et punkt „Udstyr“.

Opdatering: ret i `udstyr.json`, kør `node generate-pages.js`. Prislisterne skifter
typisk hvert kvartal (Renault: 1/7–30/9 2026) — tjek datoen i `kilde`.

**Anden runde (28-09-2026):** huller lukket med producenternes konfiguratorer,
lagerbilslister (VW og Citroën/Peugeot har S/–-matricer pr. niveau) og
tilbehørsprislister. Resultat: 205 af 1.311 celler (15,6 %) står stadig som
`ukendt` — flest hos Iveco (ingen offentlig prisliste) og Stellantis.
- **Udledte celler** (fx „rude i skillevæggen er tilvalg, altså er der en
  skillevæg“) har en note, der starter med „Udledt“, og vises med `*`.
- **Forhandlermonteret tilbehør** (træk hos Toyota, Citroën, Peugeot, Kia) står som
  `tilvalg` med noten „Tilbehør, forhandlermonteret“ — ikke fabrikstilvalg.
- **VW Transporters HTML-prisliste viser tilvalg inkl. moms**, selv om siden også
  skriver „ekskl. moms“ ved bilpriserne. Omregnet og bekræftet mod VW's lagerliste.
- **„Leveres uden“ er ikke „fås ikke“:** MAN Pure-fodnoten siger, hvad modellen
  mangler, ikke hvad der kan tilvælges → `ukendt`.
- Sektionen på modelsiden hedder `.udstyrsektion`, ikke `.udstyr`: den klasse
  bruges allerede af brugtbilssidernes udstyrsliste og gør elementet til et gitter.
- Arbejdsfiler og byggescripts for hver mærkegruppe ligger ikke i projektet; kør
  en ny runde ved at læse `udstyr.json` og rette direkte i den.

## Garanti (28-09-2026)

Ny datafil: `garanti.json`, én post pr. model: `fabrik`, `forlaenget`, `batteri`
(kun elbiler), `gennemtaering`, `lak`, `vejhjaelp`, hver `{aar, km, note}` + `kilde`,
`kilder_ekstra`, `_mangler`. Kun producentens/importørens egne danske garantisider,
garantibestemmelser og prislister.

- **`km: null` = ubegrænset**, medmindre `km_ukendt: true` — så vises „km-grænse ikke
  oplyst“ (MAN og Ford nævner ingen km-grænse for de to fabriksår).
- **Forlænget garanti** er den, der følger med bilen på vilkår (VW/Semler 5 år, Renault
  Extended, Peugeot 5 år, Toyota Relax). Koster den noget, står prisen i `pris` og vises
  som „tilkøb“ (Citroën/Opel FLEX) — og så tæller den ikke med i „længste garanti“.
- **`null` = mærket giver den ikke** („Ingen“) — *medmindre* posten er nævnt i
  `_mangler`, så vises „Ikke oplyst“ (`garantiTom()`). Et felt, der mangler helt, er
  også „Ikke oplyst“.
- Varebiler har ofte anden garanti end personbiler fra samme mærke (Renault 3 år mod
  2; Peugeot 5 års gennemtæring mod 12). Tallene gælder varebilen.

Vises: sektion `#garanti` på modelsiden, en linje i udstyrsboksen i toppen,
hopknappen „Garanti“, to rækker i forsidens sammenligning, og `/garanti/` sorteret
efter den længste garanti uden tilkøb.

## Tekniske data fyldt ud (28-09-2026)

210 af 224 kernefelter (nyttelast, totalvægt, lastrumsmål, udvendige mål, nypris)
er nu udfyldt. Vigtigst:
- **Iveco Daily**: Ivecos danske faktablade (iveco.dk/shopping-varktojer/faktablade).
- **Crafter/TGE**: de gamle lastrumstal var fra L4H3-kolonnen; nu L3H3 (11,3 m³).
- **Kia PV5**: Kias eget specifikationsark (`api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-specifikationer.pdf`).
- **Peugeot Partner**: prislistens side 6 har en fuld måltabel (den gamle note tog fejl).
- **Renault Trafic/Kangoo**: aflæst af de målsatte tegninger på prislistens side 6.
- **Sprinter og Vito**: Mercedes' konfigurator i stedet for Ejner Hessel (udbyder på
  siden). Sprinterens trækvægt fra Hessel er fjernet og står som mangel.
- Iveco Daily-tilbuddet rettet fra 3.700 til 3.850 kr./md. (fodnotens aftalevilkår).
- Tvillingmodellers tal overføres ikke (Proace ↔ Expert, Proace City ↔ Partner).

## Fra 28 til 56 modeller (28-09-2026)

En kortlægning af markedet fandt 29 manglende modeller med et aktuelt, offentligt
erhvervsleasingtilbud. **El- og dieselversioner har hver sin modelside** (beslutning
28-09-2026): de har egne mål, vægte, rækkevidde, udstyr og garanti. eVito er derfor
flyttet ud af `mercedes-vito` til `mercedes-evito`.

Nye: Nissan Interstar og Primastar; Ford Transit Connect (diesel + PHEV), Transit,
E-Transit, E-Transit Custom, E-Transit Courier; Opel Movano (diesel + el), Vivaro, Combo
Electric; Fiat Ducato; Peugeot e-Partner, e-Expert, e-Boxer; Citroën ë-Jumpy, ë-Jumper;
Mercedes Citan, eCitan, eSprinter, eVito; Renault Master E-Tech, Kangoo E-Tech; Toyota
Proace (diesel), Proace Max (diesel); VW e-Transporter; Iveco Daily boks/lift. Kia PV5
fik L1-tilbuddet fra Leasing.dk.

Bevidst udeladt:
- **Farizon SV og V7E** — tilbuddene står som „gældende indtil 31.08.2026“. Data ligger i
  scratchpad (`nye/diverse/farizon-udeladt.json`), klar hvis Farizon forlænger.
- **Renault Trafic E-Tech** — Kassebil.dk's tilbud gælder en udgave, Renault ikke sælger.
- **Mercedes EQV** — MPV-baseret til 915.500 kr.; ikke en varebil i sidens forstand.

Nye regler, der kom ud af arbejdet:
- **Ét tilbud pr. udbyder pr. model**: det billigste målt på samlet pris pr. md.; antallet
  af varianter står i noten.
- **Drivmiddel `plugin`** (plug-in hybrid) — vises som „plug-in hybrid“, får batterigaranti
  og sit eget filter. `drivmiddelNavn()` og `harBatteri()` i generatoren.
- **Størrelsesklassen følger modelfamilien**, når variantens længde ville placere den
  forkert (Primastar = mellem, Transit Connect = pizzabil, Transit = stor).
- **Udbydere må være kilde til tilbud og billeder, aldrig til mål og nypris.**
- **Nyttelast regnes kun inden for én og samme tabel** — aldrig dansk totalvægt minus
  udenlandsk køreklar vægt (Citan står derfor uden nyttelast).
- Etableringsomkostninger og gebyrer står i noten, ikke i tallene (som på Iveco).

Kør alle generatorer efter en større dataændring — håndbogen og „Til varebilen“ regner
deres tal ud af varebiler.json og står ellers med de gamle:
```
node generate-viden.js && node generate-tilvalg.js && node generate-brugte.js && node generate-pages.js
```

## Batteri og opladning (28-09-2026)

Ny datafil: `elbil.json` med én post pr. elbil og plug-in hybrid (22 modeller):
`batteri_netto_kwh`, `batteri_brutto_kwh` (eller `batteri_kwh`, når producenten ikke siger
hvilken — vises med *), `raekkevidde_km` (+ `raekkevidde_by_km`), `forbrug_kwh_100km`,
`ac_kw`/`ac_kw_tilvalg`/`ac_tid_min`/`ac_tid_note`, `dc_kw`/`dc_tid_min`/`dc_tid_note`,
`ladestik`, `v2l`/`v2l_kw`, `varmepumpe`, `kilde`, `_mangler`. Kun producentens/importørens
tal. Ladetider opgives med forskellige intervaller (0–100, 10–80, 15–80 %) — intervallet
står i noten, og kun intervallet (`interval()`) vises ved tiden.

Vises: sektion `#opladning` på modelsiden, en „Opladning:“-linje i toppen, hopknap,
fire rækker i forsidens sammenligning (AC, DC, ladetid DC, forbrug) og `/elvarebiler/`
sorteret efter rækkevidde. Mangler el-kilden batteristørrelse, bruges `batteri_kwh` fra
varebiler.json (samme prisliste) uden betegnelse.

Åbne punkter: VW's nyeste ID. Buzz Cargo-prisliste (MY2027) har skiftet 170 hk ud med
190 hk (58/61 kWh, 354 km, 105 kW DC) — `variant_for_maal` bør måske skiftes, når
tilbuddene gør det.

## Google Analytics med samtykke (28-09-2026)

GA4 (`G-2E2BJJGRLX`) indlæses **kun efter samtykke**. `assets/samtykke.js` viser et
banner nederst (Afvis og Acceptér lige store), gemmer valget i localStorage
(`gulplade-samtykke` = ja/nej — ikke en cookie) og henter først gtag.js efter „Acceptér“.
Trækkes samtykket tilbage, slettes `_ga`-cookierne, og siden genindlæses. Scriptet
indsætter selv „Cookieindstillinger“ i bundmenuen, og links med klassen
`aabn-samtykke` åbner banneret.

Scriptet hentes af alle fire generatorer (`SAMTYKKE_V` er filens sha1, som `CSS_V`) og
stemples ind i de to håndskrevne sider af `stemplCssVersion()`. **Ret aldrig i sidernes
`<head>` for at tilføje sporing direkte** — koden, der blev leveret til indsætning, satte
cookies uden samtykke, og det er i strid med cookiebekendtgørelsen.

Privatlivssiden er skrevet om: afsnittet `#statistik` beskriver GA, cookies, formål,
Google som databehandler (EU-US Data Privacy Framework) og hvordan man trækker samtykket
tilbage. Tidligere lovede siden „ingen cookies, intet analyseværktøj“.

## Modelsiden, redesign (28-09-2026)

Siden var vokset sektion for sektion og havde ingen fælles opbygning. Nu:
- **Toppen** (`.modelhero`): „Erhvervsleasing · <klasse>“, H1 med modelnavnet,
  `bilBeskrivelse()`, faktachips (lastrum, nyttelast, rækkevidde/trækvægt, højde,
  garanti) og en **prisboks** med billigste ydelse, samlet pr. md., antal tilbud og to
  knapper. Den gule udstyrsboks og nøgletalsrækken er fjernet — de gentog det samme.
- **Fast navigation** (`.sidenav`, sticky under sidehovedet): Tilbud · Mål og vægt ·
  Opladning · Udstyr · Garanti; `sidenavScript()` markerer det aktive modul.
- **Moduler** (`modulHTML(id, titel, resumé, indhold, kilder)`): alle sektioner har samme
  form. Kildenoterne står i en sammenklappet „Kilde og noter“ — de skal kunne efterprøves,
  men druknede tallene. „Mangler: …“ står synligt under indholdet.
- Tilbuddenes lange noter er klappet sammen under „Detaljer“ i udbydercellen.
- Elbilernes rækkevidde, batteri og CO₂ (0 g/km) står ikke længere både i „Mål og vægt“
  og i „Batteri og opladning“.
- „Om tallene på denne side“ er klappet sammen i bunden.

## Versionen står i filnavnet, ikke i ?v= (28-09-2026)

Efter redesignet så en besøgende siden helt uden de nye stilarter: HTML'en kom fra
den nye udgivelse, men `/assets/style.css?v=<ny>` blev under udgivelsen hentet fra den
gamle — og Cloudflare cachede den gamle fil under den nye adresse (4 timer).

Nu bygger `skrivVersioneredeFiler()` i generate-pages.js `assets/style.<sha1>.css` og
`assets/samtykke.<sha1>.js` og sletter de forældede kopier; alle generatorer og de to
håndskrevne sider peger på filnavnene. En ny version er en ny fil, som ikke findes i den
gamle udgivelse, så de to kan ikke blandes. `style.css` og `samtykke.js` er stadig
kilden — ret dem, aldrig kopierne.

## SEO-gennemgang (28-09-2026)

Teknisk gennemgang af alle 536 sider (scratchpad `seo-audit.js`): ingen for lange/korte
eller dublerede titler og beskrivelser, præcis én H1 pr. side, korrekt canonical, alle i
sitemap, ingen brudte links, gyldig JSON-LD, alt-tekst på alle billeder.

Rettet:
- **Modelsidernes titel og beskrivelse** var én skabelon („… fra 1 udbydere“ på 24 sider).
  Nu: „<model> leasing fra <pris> kr./md. — N tilbud“ og en beskrivelse med pris, lastrum,
  nyttelast og rækkevidde/træk.
- **Interne links:** udbydernavnet i hver tilbudstabel linker til udbydersiden (de havde 2
  links ind), `/varebiler/` har en række mærkelinks, og forsiden linker til Bedste varebil.
- **Ny guide `/bedste-tilbud/ladbil/`** — „ladbil leasing“ gav visninger, før siden havde
  ladbiler.
- „gulpladebil“ i titel/beskrivelse på Billigste varebil („billig gulpladebil“ lå på plads 12).

Search Console 28-09: sitemappet læst samme dag (473/497 sider), men kun 3 indekseret —
Google har ikke nået at gennemgå siderne. 70 visninger, 0 klik, gennemsnitsplacering 32.

## Mobilmenu, sammenligninger og søgeord (28-09-2026)

- **Mobilmenu:** den vandrette strimmel, der skulle swipes, er erstattet af logo + „Få
  tilbud“ + Menu-knap. Menuen bygges i `assets/samtykke.js` (sidens eneste globale script)
  ud af den eksisterende nav og får også Bedste tilbud, Elvarebiler, Udstyr, Garanti og
  Alle mål. Headeren findes i seks kopier; scriptet rører ingen af dem.
- **`/sammenlign/a-vs-b/`** (109 sider): hver model mod sine tre nærmeste konkurrenter i
  samme klasse og drivlinje, valgt på samlet pris og lastrum. Konklusionen skrives kun af
  rækker med tal på begge sider; tabellen markerer det bedste tal; forskelle i
  standardudstyr (billigste niveau, kun hvor begge er oplyst). Modelsiderne linker til
  deres sammenligninger. `sammenlignPar()` bestemmer parrene.
- **Søgeord fra Search Console:**
  - „bedste varevogn til prisen“ → `/bedste-tilbud/` har H1'en ordret og en tabel med den
    billigste i hver klasse (`klasseVindereHTML()`), med kriteriet over.
  - „billig gulpladebil“ → Billigste-guiden: H1, svarboks („Billigste gulpladebil lige
    nu: …“) og et FAQ-svar.
  - „ladbil leasing“ → H1 „Ladbil leasing: …“ og svarboks.
  - Hvide plader/papegøjeplader → artiklens titel „Varebil på hvide, gule eller
    papegøjeplader?“.
  - **Svarboksen** vises kun på guider med et kurateret `svar:`-felt.
- **Størrelsesguiderne** (lille/mellemstor/stor) filtrerer nu på `stoerrelse()` — før
  talte „stor“ alt over 3.000 kg totalvægt med, fx Opel Vivaro.
- **`beskrivelse()`** skar beskrivelser af ved „ekskl.“ og andre forkortelser.

## Forsidens filtre: udstyr, garanti og rækkevidde (28-09-2026)

Tre nye rullemenuer i samme `FELTER`-mekanisme som de gamle (så nulstilling og deling via
URL — `?udstyr=bakkamera&garanti=5&raekkevidde=350` — følger med):
- **Standardudstyr** (`FILTER_UDSTYR`): kortets `data-udstyr` er de poster, der er standard
  på det niveau, kortets tilbud gælder (`kortUdstyr()`), ellers det billigste niveau.
- **Garanti:** længste garanti uden tilkøb (`garantiLaengst()`).
- **Rækkevidde (el):** WLTP fra elbil.json; ikke-elbiler falder ud, når filteret er sat.

## Mærkesider, samlet betaling og garantifejl (28-09-2026)

- **Mærkesiderne** har fået „Garanti hos <mærke>“ (ens garantier slået sammen, elbilernes
  batterigaranti med) og „<mærke> sammenlignet med andre mærker“ (sammenligninger, hvor én
  af mærkets modeller møder et andet mærke). Titel med pris: „Ford varebil leasing fra
  1.969 kr./md. — 9 modeller“.
- **Samlet betaling over aftalen** står nu under „Inkl. udbetaling“ i modelsidernes
  tilbudstabel: udbetaling + ydelse × løbetid (`beregn().samlet`), uden restværdi og
  driftsomkostninger. Det viser, hvad en lang løbetid koster — fx er et 60-måneders
  tilbud med lavere månedstal dyrere i alt end et 48-måneders.
- **Fejl:** `garantiLaengst()` tabte `km_ukendt`, så Ford og MAN stod med „ubegrænset km“
  i toppen af modelsiderne, i sammenligningerne og på mærkesiderne. Rettet.

## Udbydersider (/udbydere/<slug>/)

Landingssider til søgninger som "Ayvens leasing varebil": titel og H1 med udbyderens navn, alle tilbud, tabellen "Samme bil hos andre udbydere" (billigste andet tilbud målt på samlet pris pr. md.) og FAQ med FAQPage-schema, besvaret ud fra tallene. Ejefald via `ejefald()` (Ayvens', Leasing.dk's). Siderne må ikke påstå, at vi ikke modtager honorar — forhandlerne betaler pr. henvendelse.

## Modelguides (unikModel)

`varebil-med-lav-ejerafgift`, `varebil-med-lavt-braendstofforbrug` og `elvarebil-med-lang-raekkevidde` rangerer modeller på et modeltal (ikke tilbud). Ved lige mål vinder det billigste tilbud på samlet pris; både rangliste og tabel dedupliker på model. Svarboksen nævner ikke udbyderen på modelguides, fordi tallet ikke kommer fra udbyderen.

## Brugte: leasing- og størrelseslister

`brugt-varebil-leasing` (sorteret efter forhandlerens ydelse via `facet.sorter`, titel via `facet.titel`, `%lfra%` = laveste ydelse; restværdi og "totalpris" vises aldrig), `brugt-lille-varebil`, `brugt-mellemstor-varebil`, `brugt-stor-varebil` (klasse efter modelfamilie i `MODEL_KLASSE`, fordi CarAds ikke oplyser længden). Guidesiderne for nye biler linker til den brugte pendant via `GUIDE_BRUGT` i generate-pages.js — kør derfor generate-brugte.js før generate-pages.js.

## Kun dist/ deployes

`byg-dist.js` kopierer det offentlige (HTML-mapperne, assets, sitemap, robots, _headers, _redirects, favicons, IndexNow-nøglen) til `dist/` og stopper, hvis en .json/.md/.bat/.py eller en rod-.js slipper med. Før 28-09-2026 blev hele mappen deployet, så README, generatorerne, datafilerne (inkl. brugte.json med de omstridte Brdr. Jensen-tal) og .claude/launch.json lå offentligt. Deploy aldrig `.` igen.

## Feltkilder (28-09-2026)

Nye felter på modellerne: `motor_hk`, `motor_kw`, `gearkasse`, `vendediameter_m`/`venderadius_m` (aldrig omregnet),
`egenvaegt_kg` (vises som "Vægt uden last", fordi producenterne oftest oplyser køreklar vægt inkl. fører) og
`udvendig.akselafstand_mm`. Hvert tal hentet uden for den primære måltabel har sin egen kilde i `feltkilder`
(`{felt: {url, sted, note, dato}}`), og modelsiden viser dem under "Øvrige tal". Sammenligningssiderne viser motor,
gearkasse og vendediameter (kun når begge biler har vendediameter — ikke radius mod diameter).

Indsamlingen: agenter pr. mærke skrev JSON med kilde, sted og ordret citat; `flet.js` (scratchpad) afviste
udbyder-/forhandlerkilder, uplausible værdier og felter, der allerede havde et tal, og tvivlstilfælde blev sprunget
over manuelt (fx Citroën Berlingos vægttabel med Opels udstyrsnavn, Proace City EV's modstridende vægte).

## Tilbud: gyldighed, fri km og modeller uden tilbud (28-09-2026)

- **`gyldig_til`** (YYYY-MM-DD, sidste gyldige dag) på et tilbud: fra dagen efter sorteres det fra ved bygning, også
  selv om ingen har rettet datafilen. `GULPLADE_IDAG=2026-10-01 node generate-pages.js` prøver en dato af.
- **`km_fri: true`** når udbyderen oplyser fri kilometer (så er `km_pr_aar` tom). Vises som „fri km“ og tæller ikke
  som manglende oplysning.
- **En model uden aktuelle tilbud** beholder sin modelside (mål, udstyr, garanti, „Ingen aktuelle tilbud“ og
  tilbudsknappen), står i sitemappet og linkes fra mærkesiden under „Uden aktuelle tilbud“ — men er ude af forsiden,
  guiderne og sammenligningerne, som alle regner med mindst ét tilbud.
- **Udbydersider** for en udbyder uden aktuelle tilbud slettes ved bygning.
- **`sammenlign-par.json`** (deployes ikke) husker alle udgivne sammenligningspar. Parrene vælges efter nærmeste pris,
  så uden registret ville en prisændring på et par kroner fjerne en indekseret side. Et par bliver stående, så
  længe begge modeller har tilbud; forældede mapper under /sammenlign/ slettes.

Kontrol 28-09-2026: alle 97 tilbud tjekket mod kilden — 80 uændrede, 15 ændrede (bl.a. Ayvens og Nordania er finansiel
leasing med fri km, Andersen Biler skiftede Transit Custom-tilbud, Leasing.dk-varianter rettet), 2 væk (Kassebil.dk har
fjernet Volkswagen), og Leasing.dk's andet TGE-tilbud fjernet (ét tilbud pr. udbyder pr. model). Fem kampagner hos
Opel, Peugeot og Citroën har `gyldig_til` 2026-09-30.

## 62 modeller (28-09-2026, runde 2)

Seks nye modeller med gyldige erhvervstilbud: Fiat E-Ducato, Renault Trafic E-Tech, Renault Master E-Tech Chassis,
Ford Transit Custom PHEV, Toyota Proace City (diesel) og Farizon SV (nyt mærke). Kortlagt 32 andre kandidater uden
gyldigt tilbud (Doblò/Scudo, Townstar, Hilux, D-Max, Maxus, chassis-udgaver m.fl. — kun kontantpris eller udløbet).
Uggerhøjs ë-Berlingo og Vivaro Electric blev holdt ude: tallene lignede kopier eller forældede sider.
Bygget med `scratchpad/nye/BRIEF.md` + `BRIEF-TILLAEG-2.md`; `flet.js` fletter nu også `elbil.json` og afviser
tilbud med `citat` eller arbejdsnoter. Alle modeller har nu `-del.jpg` (1200×630, polstret) — før manglede 28.

## Leasingberegneren — /leasingberegner/ (30-09-2026)

`beregner.js` (kaldes fra generate-pages.js, deployes ikke) bygger siden. Brugeren taster ydelse, førstegangsydelse,
løbetid, km/år og evt. restværdi for op til to tilbud; siden viser reel pris pr. md. (ydelse + udbetaling ÷ løbetid —
samme tal som hele sitet), inkl. moms, samlet betaling, pris pr. kørt km, og hvor mange af vores tilbud der er
billigere (alle eller pr. størrelsesklasse; fordelingen indlejres ved bygning). Alt regnes i browseren, intet sendes.
Linket fra footer, alle modelsider („Før du skriver under“) og alle guider (under tabellen). WebApplication + FAQPage-schema.

## Søgeord og sitemap-datoer (30-09-2026)

- `/bedste-tilbud/kassevogn-leasing/` (alle kassevognstilbud) og `/bedste-tilbud/erhvervsbil-leasing/` (billigste pr.
  model, med type) — for søgningerne kassevogn, kassebil og erhvervsbil. Linket fra en ny footer-række „Leasing efter type“.
- `navnMedType(bil)` sætter biltypen på modelnavnet i meta-beskrivelsen og alle billedtekster („Ford Transit Custom
  kassevogn“, „Kia PV5 Cargo el-kassevogn“, „Ford Ranger pickup“) — ikke hvor typen står i navnet.
- **Sitemap har `<lastmod>`**: modelsider = nyeste dato i modellens data (tilbud, mål, nypris, feltkilder);
  sammenligninger = nyeste af de to modeller; udbydersider = nyeste tilbudsdato; håndbogen = artiklens `opdateret`;
  forside, guider og mærkesider = nyeste dato i hele datasættet. Aldrig byggedatoen — så ignorerer Google feltet.

## Henvendelser via popup og anonym forhandler (30-09-2026)

- **Popup-formular** i `assets/samtykke.js` (indlæses på alle sider): `data-lead="brugt"` (brugtbilsider, knapper +
  fast bund-knap på mobil) og `data-lead="ny"` (alle `tilbudsknapHTML()`-knapper på nye modeller). Felter: navn,
  telefon, e-mail, firma/CVR, ønske/km, besked, samtykke. Sendes til Web3Forms (Leasios nøgle). Uden JavaScript følger
  knappen sit href (mailto for brugte, Tally for nye).
- **Brdr. Jensen navngives ikke længere** nogen steder — se memory og kommentarerne i generate-brugte.js. Horsens-siden er
  fjernet (301). Footerløftet siger nu, at de brugte biler formidles for en forhandler, vi samarbejder med.
- Privatlivssiden nævner formularen og Web3Forms som databehandler.
- Popup-type `data-lead="soeg"` („Vi finder bilen til dig“: budget + hvad bilen skal kunne) — `soegBoks()` efter alle
  brugtlister og i „ingen biler passer“-teksten. Nye modeller har en „Vil du have et bedre tilbud?“-boks under
  tilbudstabellen og en fast mobilknap („fra X kr./md. · Få tilbud“). GA-hændelser: `lead_open` og `generate_lead`
  (med `lead_type` brugt/ny/soeg), kun med samtykke.
- `data-lead="ring"` („Ring mig op“: kun navn + telefon + samtykke; emnet starter med „RING OP“) — anden knap i toppen af
  hver brugtbilside. Håndbogsartiklerne har en afdæmpet boks „Skal du have en ny varebil?“ (popup uden bil: „Få tilbud på
  en varebil“). Forsidens top har bevidst ingen tilbudsknap — ejeren bad om at få den fjernet.
- Popuppen husker navn/telefon/e-mail/firma i `localStorage["gulplade-kontakt"]` efter en sendt henvendelse og udfylder
  dem næste gang. Hver henvendelse får `kom_fra` (henviser eller utm_source) og `landingsside`; gemt i
  `sessionStorage` kun med samtykke til statistik, ellers kun den aktuelle sides henviser. Fast mobilknap på
  brugtlister („Find bilen til mig“) og guider („Få tilbud“).
- Popuppen husker navn/telefon/e-mail/firma i `localStorage["gulplade-kontakt"]` efter en sendt henvendelse. Hver
  henvendelse får `kom_fra` og `landingsside` (gemt i sessionStorage kun med samtykke). Fast mobilknap på brugtlister og
  guider. **Privatlivssiden bygges af generate-pages.js** — ret teksten dér, ikke i privatliv/index.html.

## Strukturerede data og brugtbil-opsummering (30-09-2026)

- Forsiden: `Organization` + `WebSite` (sidenavn og logo til søgeresultatet). Guiderne: `BreadcrumbList` + `ItemList`
  (top 10 modeller). Mærkesider, /varebiler/, /bedste-tilbud/ og beregneren: `BreadcrumbList`.
- Brugtbilsider: `bilOpsummering(b)` — én faktuel sætning af bilens egne felter (type, årgang, hk, drivmiddel, gear, km,
  pris, trækvægt, forbrug, leasing) under „Specifikationer“. Erstatter den unikke tekst, der forsvandt med
  sammenligningen og miljøzone-afsnittet, så ingen bilside er tynd.

## Målskitse på modelsiden

`maalskitse.js` (kaldes fra generate-pages.js, deployes ikke) tegner bilen set fra siden og bagfra som to SVG'er i
"Mål og vægt". Målene tegnes i skala ud fra `udvendig` og `lastrum` i varebiler.json. Hver streg får kun et tal, når
producenten har oplyst målet; mangler et mål, udelades stregen.

Bilens form, hjul, frihøjde og overhæng er skematiske og får aldrig et tal. Kassevogn, pickup og ladvogn/chassis har
hver sin silhuet. Uden `udvendig.laengde_mm` og `udvendig.hoejde_mm` tegnes der ingen skitse (i dag gælder det
Iveco Daily, Daily ladbil og Daily boks).

På computer står visningerne side om side, og på mobil står de under hinanden (CSS `.maalskitse__*`).

**Slået fra 30-09-2026:** Ejeren syntes ikke, skitsen så professionel ud. Den vises kun med `GULPLADE_SKITSE=1` (til preview-deploy med `--branch=skitse`), indtil en ny version er godkendt.

## Køb ny varebil (i produktion fra 06-10-2026)

`/koeb-ny-varebil/` viser producenternes vejledende listepriser for alle udgaver af hver model, med
levering, anhængertræk og ekstraudstyr og den billigste leasingpris ved siden af. Modelsiderne får
sektionen **Pris ved køb** (`#koeb`) og nøgletallet "Ny fra", mærkesiderne en pristabel.

- **Data:** `priser.json` (én post pr. model-id: kilde, dato, gyldighed, levering, `udgaver`,
  `tilvalg`, `pakker`). Alle beløb er uden moms, og `pris_kr` er uden levering. Den vejledende pris er
  den pris, importøren anbefaler forhandleren at sælge for, og ikke forhandlerens indkøbspris.
  `nypris` i varebiler.json bliver stående, fordi mål og sammenligning bygger på den udgave.
- **Kode:** `koeb.js`, koblet på generate-pages.js via `koeb()`.
- **Flag:** Købsdelen er standard fra 06-10-2026. `GULPLADE_KOEB_NY=0` slår siden, sektionerne,
  menupunktet "Nye" og de nye udstyrsposter (`"ny": true` i udstyr.json) fra igen.
  `/bedste-tilbud/hvad-koster-en-varebil/` har en 301 til `/koeb-ny-varebil/` i `_redirects`.
- **Preview af nye ting:** sæt `GULPLADE_PREVIEW=1` (så gemmes lastmod.json ikke) og deploy med
  `--branch=<navn>`, fx `GULPLADE_PREVIEW=1 node byg-dist.js && npx wrangler pages deploy dist --project-name=gulplade --branch=koeb`.
- **Prisdata:** `prisdata/` (kommer ikke i dist) har prislisterne som PDF, holdenes kladder, `flet-priser.py` (bygger priser.json og fletter udstyr.json) og `kontrol-priser.py` (står hvert tal i kilden?). Opgavebeskrivelsen til næste prisrunde er `prisdata/priser-spec.md`.
- **lastmod:** byg-dist.js gemmer kun ikke lastmod.json, når `GULPLADE_PREVIEW=1` er sat.
- **Henvendelser:** `data-lead="koeb"` i samtykke.js ("KØB af ny varebil" i emnet).
  Forhandlerne betaler det samme for købshenvendelser som for leasing.
- **Udstyr:** nye poster i udstyr.json (metallak, reservehjul, tagbøjler, alarm, dobbelt passagersæde,
  navigation, beklædning, 230V) har `"ny": true`. Elposterne (22 kW-lader, varmepumpe) har `kun_el` og
  bruges kun af købssiden. Anhængertræk fra tilbehørslister er mærket "tilbehør" (forhandlermonteret).
