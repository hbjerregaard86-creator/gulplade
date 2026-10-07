// Underside /til-varebilen/forsikring/selvrisiko/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var GFG = `https://www.gfforsikring.dk/om-gf/gebyr-og-afgifter/`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var GJP = `https://www.gjensidige.dk/erhverv/pris-forsikring`;
var ALMB = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/`;
var CODAN = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/`;
var TOPA = `https://www.topdanmark.dk/erhverv/gode-raad/monter-en-alarm-i-din-varevogn-og-spar-5000-kr-i-selvrisiko/`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;

module.exports = {
  id: "forsikring/selvrisiko",
  side: {
    slug: "selvrisiko",
    navn: "Selvrisiko",
    titel: "Selvrisiko på varebilforsikring til erhverv",
    kort: `Se den aftalte selvrisiko, de særlige selvrisici ved glas, unge førere, spiritus og frihøjde, hvem der betaler, og de skader, der er fri for selvrisiko.`,
    beskrivelse: `Selvrisiko på varebilforsikring: aftalt og særlig selvrisiko, beløb fra GF, Tryg og Gjensidige, friskade, frihøjde, glas og skader uden selvrisiko.`,
    manchet: `Selvrisikoen er den del af en skade, virksomheden selv betaler. Ud over den aftalte selvrisiko har selskaberne særlige selvrisici for glas, unge førere, spiritus og lav frihøjde. Her finder du beløbene og reglerne fra selskabernes erhvervsbetingelser, og hvem der betaler, når skaden sker hos andre.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Spiritus eller uden kørekort, GF", "19.762 kr.", "ekstra selvrisiko (basisår 2023)"],
        ["Fører under 26 år, GF", "6.587 kr.", "ekstra ved udlån (basisår 2023)"],
        ["Betalingsfrist, Tryg", "14 dage", "efter opkrævningen"],
        ["Alarmrabat, Topdanmark", "5.000 kr.", "i selvrisiko ved indbrud"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Den aftalte selvrisiko",
        tekst: [
          `Selvrisikoen er det beløb, virksomheden selv betaler af hver skade, før forsikringen betaler resten. Hos GF gælder den for enhver ansvars- og kaskoskade, og hos Tryg gælder den for den første del af enhver skade. Tryg opkræver selvrisikoen samtidig med, at selskabet betaler erstatningen.`,
          `Beløbet står i policen, og virksomheden vælger det selv, når forsikringen bliver købt. Tryg skriver, at selvrisici bliver indeksreguleret hvert år den 1. januar, medmindre andet står i betingelserne eller aftalen.`
        ],
        punkter: [
          `<strong>Beløbet.</strong> Beløbet står i policen og gælder den første del af enhver skade.`,
          `<strong>Én begivenhed.</strong> Giver samme begivenhed både en ansvars- og en kaskoskade, betaler du kun én selvrisiko hos GF og Tryg.`,
          `<strong>Små skader.</strong> Er skaden mindre end selvrisikoen, opkræver GF kun skadeudgiften.`,
          `<strong>Indeksregulering.</strong> GF regulerer selvrisici med lønindekset for den private sektor hvert år den 1. januar.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.7 og 13.13</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 9</a>, set den 4. oktober 2026, og <a href="${TRYG}" rel="noopener">Tryg, afsnit 13</a>, set den 7. oktober 2026.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 158" role="img" aria-label="Selvrisikoen er den første del af en skade, og selskabet betaler resten. Er skaden mindre end selvrisikoen, opkræver GF kun skadeudgiften."><text class="tg-fremhaev" x="0" y="16">Skade større end selvrisikoen</text><rect class="tg-modul" x="0" y="24" width="110" height="28"/><text class="tg-modul__tekst" x="10" y="42">SELVRISIKO</text><rect class="tg-kasse" x="110" y="24" width="250" height="28"/><text x="120" y="42">selskabet betaler resten</text><text class="tg-fremhaev" x="0" y="84">Skade mindre end selvrisikoen</text><rect class="tg-modul" x="0" y="92" width="70" height="28"/><text class="tg-modul__tekst" x="10" y="110">SKADE</text><line class="tg-skinne-tynd" x1="110" y1="20" x2="110" y2="128"/><text x="120" y="110">GF opkræver kun skadeudgiften</text><text class="tg-lille" x="0" y="150">SELVRISIKOEN ER DEN FØRSTE DEL AF SKADEN</text></svg>`,
          tekst: `Skematisk. Sådan fungerer den aftalte selvrisiko hos GF. Kilde: <a href="${GF}" rel="noopener">GF, punkt 13.7</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Basisår og indeksregulering",
        tekst: [
          `GF skriver sine beløb med et basisår, fx 6.587 kr. (basisår 2023). Basisåret er det år, beløbet senest er rettet i betingelserne. Står der et basisår efter beløbet, bliver det reguleret hvert år den 1. januar.`,
          `Reguleringen følger den årlige udvikling i lønindekset for den private sektor fra Danmarks Statistik, og GF bruger indekset for første kvartal året før. Beløbene i 2026 afviger derfor fra tallene i betingelserne fra januar 2023, som GF stadig linker til.`,
          `Selvrisikoen og summen på retshjælpsforsikringen bliver ikke reguleret. Her gælder 10 procent af omkostningerne, dog mindst 2.500 kr.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Basisåret", "Beløbet står i GF's betingelser med et basisår, fx 6.587 kr. (basisår 2023)."],
            ["Hvert år den 1. januar", "Beløbet reguleres med lønindekset for den private sektor fra Danmarks Statistik."],
            ["Beregningsgrundlaget", "GF bruger indekset for første kvartal året før."],
            ["I dag", "Beløbet er reguleret hvert år siden basisåret og afviger derfor fra tallet i betingelserne."]
          ],
          note: `Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.13</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Særlige selvrisici",
        tekst: [
          `Oven i den aftalte selvrisiko kommer særlige selvrisici i bestemte situationer. Nogle af dem står med beløb i betingelserne, andre står i policen.`,
          `Tryg har også en særlig selvrisiko, når en udlejningsbil forsvinder under bortkomstdækningen, og en særlig selvrisiko på retshjælp. Begge beløb står i policen. Hos GF beregnes der ingen selvrisiko på retshjælp, hvis virksomheden kan få fri proces.`
        ],
        tabel: {
          kolonner: ["Situation", "Selskab", "Selvrisiko"],
          raekker: [
            ["Udskiftning af glas med Udvidet glas", "GF", "1.606 kr. (basisår 2023)"],
            ["Udskiftning af forrude med Glasskade", "Gjensidige", "1.000 kr."],
            ["Udlån til fører under 26 år", "GF", "6.587 kr. ekstra (basisår 2023)"],
            ["Promille over 0,50, stoffer eller uden kørekort", "GF", "19.762 kr. ekstra (basisår 2023)"],
            ["Påkørsel pga. frihøjde, bil over 2,30 m", "Tryg", "Særlig selvrisiko i policen"],
            ["Retshjælp", "GF", "10 %, mindst 2.500 kr."]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.5, 6.3 og 13.7</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 9</a>, set den 4. oktober 2026. GF's beløb reguleres fra basisåret og er derfor højere i 2026.`
        },
        figur: {
          type: "noegletal",
          data: [
            ["Udlån til fører under 26 år", "6.587", "kr. ekstra"],
            ["Spiritus eller uden kørekort", "19.762", "kr. ekstra"],
            ["Udskiftning af glas", "1.606", "kr."]
          ],
          note: `GF, basisår 2023. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde til Trygs bortkomst og retshjælp: <a href="${TRYG}" rel="noopener">Tryg, afsnit 7 og 9</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Udlån til unge førere",
        tekst: [
          `GF's ekstra selvrisiko på 6.587 kr. (basisår 2023) gælder, når bilen er lånt ud til en fører under 26 år, som ikke er forsikringstageren, den registrerede bruger eller en af deres ægtefæller eller samlevere.`,
          `Den gælder ikke, når føreren er ansat i virksomheden og kører som led i ansættelsen. En 22-årig lærling, der kører firmabilen til en kunde, udløser altså ikke den ekstra selvrisiko. Er selvrisikoen faldet bort efter Friskade eller Udvidet glas, opkræver GF heller ikke den ekstra selvrisiko.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 296" role="img" aria-label="Beslutningstræ for GF's ekstra selvrisiko ved udlån. Er føreren under 26 år og hverken ansat i arbejdet, forsikringstager, registreret bruger eller ægtefælle, og er selvrisikoen ikke fjernet af Friskade eller Udvidet glas, gælder en ekstra selvrisiko på 6.587 kroner."><defs><marker id="pil-selvrisiko-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="150" y="8" width="250" height="40"/><text x="275" y="32" text-anchor="middle">Er føreren under 26 år?</text><rect class="tg-kasse" x="0" y="8" width="110" height="40"/><text x="55" y="25" text-anchor="middle">Kun aftalt</text><text x="55" y="40" text-anchor="middle">selvrisiko</text><line class="tg-pil" x1="148" y1="28" x2="114" y2="28" marker-end="url(#pil-selvrisiko-1)"/><text x="131" y="22" text-anchor="middle">nej</text><line class="tg-pil" x1="275" y1="48" x2="275" y2="70" marker-end="url(#pil-selvrisiko-1)"/><text x="283" y="64">ja</text><rect class="tg-kasse" x="150" y="72" width="250" height="40"/><text x="275" y="96" text-anchor="middle">Ansat og kørsel i arbejdet?</text><rect class="tg-kasse" x="0" y="72" width="110" height="40"/><text x="55" y="96" text-anchor="middle">Ingen ekstra</text><line class="tg-pil" x1="148" y1="92" x2="114" y2="92" marker-end="url(#pil-selvrisiko-1)"/><text x="131" y="86" text-anchor="middle">ja</text><line class="tg-pil" x1="275" y1="112" x2="275" y2="134" marker-end="url(#pil-selvrisiko-1)"/><text x="283" y="128">nej</text><rect class="tg-kasse" x="150" y="136" width="250" height="40"/><text x="275" y="153" text-anchor="middle">Forsikringstager, bruger</text><text x="275" y="168" text-anchor="middle">eller ægtefælle?</text><rect class="tg-kasse" x="0" y="136" width="110" height="40"/><text x="55" y="160" text-anchor="middle">Ingen ekstra</text><line class="tg-pil" x1="148" y1="156" x2="114" y2="156" marker-end="url(#pil-selvrisiko-1)"/><text x="131" y="150" text-anchor="middle">ja</text><line class="tg-pil" x1="275" y1="176" x2="275" y2="198" marker-end="url(#pil-selvrisiko-1)"/><text x="283" y="192">nej</text><rect class="tg-kasse" x="150" y="200" width="250" height="40"/><text x="275" y="217" text-anchor="middle">Selvrisikoen fjernet af</text><text x="275" y="232" text-anchor="middle">Friskade eller Udvidet glas?</text><rect class="tg-kasse" x="0" y="200" width="110" height="40"/><text x="55" y="224" text-anchor="middle">Ingen ekstra</text><line class="tg-pil" x1="148" y1="220" x2="114" y2="220" marker-end="url(#pil-selvrisiko-1)"/><text x="131" y="214" text-anchor="middle">ja</text><line class="tg-pil" x1="275" y1="240" x2="275" y2="256" marker-end="url(#pil-selvrisiko-1)"/><text x="283" y="252">nej</text><rect class="tg-modul" x="150" y="258" width="250" height="34"/><text class="tg-modul__tekst" x="275" y="280" text-anchor="middle">6.587 KR. EKSTRA (BASISÅR 2023)</text></svg>`,
          tekst: `Skematisk. GF's regel for ekstra selvrisiko ved udlån. Kilde: <a href="${GF}" rel="noopener">GF, punkt 13.7.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Spiritus, stoffer og kørekort",
        tekst: [
          `GF opkræver en ekstra selvrisiko på 19.762 kr. (basisår 2023), når føreren på skadetidspunktet havde en promille over 0,50, påviseligt havde indtaget euforiserende stoffer, eller når bilen blev ført af en person uden gyldigt kørekort. Det er en forudsætning, at føreren kan pålægges et ansvar.`,
          `GF opkræver ikke den ekstra selvrisiko, hvis forsikringstageren, de ansatte, husstanden eller ægtefællen ikke var fører af bilen og ikke vidste noget. Uvidenheden må ikke skyldes grov uagtsomhed. GF opkræver heller ikke spiritusselvrisiko, hvis forsikringstageren ikke kørte og ikke vidste noget.`,
          `Kaskoen dækker desuden ikke skader på bilen, når føreren var påvirket af alkohol, medicin eller euforiserende stoffer, eller kørte uden lovbefalet kørekort. Det gælder både hos GF og hos Tryg.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.2.1 og 13.7.2</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Lav frihøjde",
        tekst: [
          `Tryg har en særlig selvrisiko, når en varebil over 2,30 m bliver skadet, fordi frihøjden ikke rækker, fx ved en bro, et parkeringshus eller taget på en tankstation. Beløbet står i policen.`,
          `Reglen gælder kun varebiler, der er højere end 2,30 m, og beløbet afhænger af den enkelte aftale. GF's erhvervsbilbetingelser nævner ikke en tilsvarende særlig selvrisiko for frihøjde.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Høj varebil, der kører ind under en bro med for lav frihøjde. Varebilens højde er over 2,30 meter."><defs><marker id="pil-forsikring-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(70,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-hylde" x="240" y="60" width="160" height="32"/><rect class="tg-hylde" x="372" y="92" width="18" height="125"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-maal"><line x1="40" y1="215" x2="40" y2="86" marker-start="url(#pil-forsikring-2)" marker-end="url(#pil-forsikring-2)"/><text x="30" y="150" transform="rotate(-90 30 150)" text-anchor="middle">over 2,30 m</text></g><g class="tg-call"><line x1="296" y1="90" x2="250" y2="44"/><circle cx="296" cy="90" r="3"/><text class="tg-call__navn" x="90" y="24">Påkørsel pga. frihøjde</text><text class="tg-call__under" x="90" y="38">Tryg: særlig selvrisiko, beløb i policen</text></g></svg>`,
          tekst: `Skematisk. Kilde: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 9</a>, set den 4. oktober 2026. Varebilernes højder står i <a href="/haandbogen/l1h1-l2h2-l3h2-varebil/">L1H1, L2H2 og L3H2</a>.`
        }
      },
      {
        overskrift: "Glas og forrude",
        tekst: [
          `Glasskader har deres egne regler. GF opkræver ikke selvrisiko, når kun frontruden er skadet og bliver repareret i stedet for skiftet. Kan en glasskade lovligt og forsvarligt repareres, betaler GF kun reparationsprisen, selvom virksomheden ønsker ruden skiftet.`,
          `Med GF's tilvalg Udvidet glas er der heller ingen selvrisiko ved reparation af andet glas end frontruden, og ved udskiftning er selvrisikoen 1.606 kr. (basisår 2023). Gjensidige reparerer stenslag på ruderne uden selvrisiko, og med tilvalget Glasskade er selvrisikoen 1.000 kr. ved udskiftning af forruden. If skriver, at virksomheden ikke betaler selvrisiko, hvis ruden kan repareres.`,
          `Hos Tryg betyder tilvalget Glas, at der ikke er selvrisiko ved reparation af stenslag og ved udskiftning af andet glas. Ved udskiftning af forruden gælder en fast selvrisiko, som står i policen.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Frontrude repareret", 0, "GF"],
            ["Stenslag repareret", 0, "Gjensidige"],
            ["Rude repareret", 0, "If"],
            ["Forrude udskiftet, tilvalget Glasskade", 1000, "Gjensidige"],
            ["Glas udskiftet, tilvalget Udvidet glas", 1606, "GF, basisår 2023"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.3.1.3, 6 og 13.7.3</a>, <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${IF}" rel="noopener">If: Varebilforsikring</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.4</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skader uden selvrisiko",
        tekst: [
          `Nogle skader er fri for selvrisiko uden tilvalg. Hos GF gælder det, når en kendt skadevolder har anerkendt erstatningspligten eller er dømt til at betale, når kun ladekablet er skadet, og når skaden ikke giver GF udgifter. Skadevolderen må ikke være føreren eller en anden fra virksomhedens egen kreds.`,
          `Hos begge selskaber er der ingen selvrisiko for personskade på andre, når føreren af varebilen er uden skyld. Tryg tager ingen selvrisiko ved tyveri eller hærværk begået af en kendt ansvarlig skadevolder, som har erkendt eller er dømt for skaden.`,
          `Bliver bilnøglerne stjålet, kan GF dække omkodning af låse eller startspærre uden selvrisiko, når GF vurderer, at det skal til for at undgå tyveri af bilen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Skade", "GF", "Tryg"],
          raekker: [
            ["Forrude repareret", "ja", "Glas-tilvalg"],
            ["Kun skade på ladekablet", "ja", "El-tilvalg"],
            ["Kendt skadevolder har anerkendt ansvaret", "ja", "Tyveri og hærværk"],
            ["Personskade på andre, føreren uden skyld", "ja", "ja"],
            ["Brand, tyveri og nedstyrtende genstande", "Friskade", "Nulselvrisiko"],
            ["Assistance fra vejhjælpen", "–", "ja"]
          ],
          note: `Ja betyder ingen selvrisiko uden tilvalg. Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.7</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 9</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde til nøgletyveri: <a href="${GF}" rel="noopener">GF, punkt 4.1.6</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Friskade og nulselvrisiko",
        tekst: [
          `Flere selskaber sælger et tilvalg, der fjerner selvrisikoen ved skader, som føreren typisk ikke selv er skyld i. Hos GF kan Friskade kun vælges sammen med kasko, og skaderne har heller ingen betydning for pristrinnet.`,
          `Trygs Nulselvrisiko dækker også udgiften til en selvrisikoforsikring på lånebilen, når bilen bliver repareret på et Tryg Reparationsværksted. Gjensidige sælger tilvalget Parkering Plus, der fjerner selvrisikoen, når bilen får en bule, en ridse eller hærværk, mens den holder lovligt parkeret.`
        ],
        tabel: {
          kolonner: ["Selskab", "Navn", "Ingen selvrisiko ved"],
          raekker: [
            ["Alm. Brand", "Med i Kasko", "Brand, tyveri, seriehærværk og nedstyrtede genstande"],
            ["Codan", "Friskade", "Ruder, spejle, lygteglas, tyveri, hærværk, brand og nedstyrtende genstande"],
            ["GF", "Friskade", "Brand, røveri, tyveri, seriehærværk, nedstyrtende genstande og påkørsel af dyr"],
            ["Gjensidige", "Friskade", "Brand, tyveri, røveri, seriehærværk, nedstyrtende genstande og påkørsel af dyr"],
            ["Tryg", "Nulselvrisiko og Glas", "Brand, tyveri ved ukendt skadevolder, hærværk, nedstyrtende genstande, påkørsel af dyr og skader fra mår, mus og rotter"]
          ],
          note: `Kilder: <a href="${ALMB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GF}" rel="noopener">GF, punkt 5</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.4</a>, set den 4. oktober 2026.`,
          visning: "kort"
        },
        efter: [
          `Hos GF og Gjensidige påvirker friskadeskaderne heller ikke pristrinnet. Kilder til lånebil og parkering: <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.4</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Selvrisiko og pris",
        tekst: [
          `En højere selvrisiko giver en lavere pris, fordi virksomheden selv bærer en større del af skaderne. Gjensidige, Alm. Brand og Codan skriver, at den valgte selvrisiko er med til at bestemme prisen.`,
          `Topdanmark giver 5.000 kr. i rabat på selvrisikoen ved indbrud i en varebil med godkendt alarm. Er den normale selvrisiko lavere end 5.000 kr., betaler virksomheden ingen selvrisiko ved indbruddet. Læs mere i <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a>.`,
          `Selvrisikoen kan også blive ændret af selskabet. Efter mange skader kan Tryg indføre skærpede vilkår, fx en tvungen selvrisiko eller en ændring af den eksisterende selvrisiko. Tryg skriver, at der i helt særlige tilfælde kan blive opkrævet både den aftalte og en ekstra selvrisiko.`
        ],
        efter: [
          `Kilder: <a href="${GJP}" rel="noopener">Gjensidige: Pris</a>, <a href="${ALMB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a> og <a href="${TOPA}" rel="noopener">Topdanmark</a>, set den 4. oktober 2026, og <a href="${TRYG}" rel="noopener">Tryg, afsnit 9 og 13</a>, set den 7. oktober 2026.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Skematisk sammenligning: en lav selvrisiko giver en højere pris, og en høj selvrisiko giver en lavere pris."><text class="tg-lille" x="110" y="16">SELVRISIKO</text><text class="tg-lille" x="260" y="16">PRIS</text><text class="tg-fremhaev" x="0" y="47">Lav selvrisiko</text><rect class="tg-modul" x="110" y="30" width="40" height="24"/><rect class="tg-kasse" x="260" y="30" width="130" height="24"/><text class="tg-fremhaev" x="0" y="97">Høj selvrisiko</text><rect class="tg-modul" x="110" y="80" width="130" height="24"/><rect class="tg-kasse" x="260" y="80" width="60" height="24"/><text class="tg-lille" x="0" y="140">HØJERE SELVRISIKO GIVER LAVERE PRIS</text></svg>`,
          tekst: `Skematisk. Sammenhængen mellem selvrisiko og pris, som Gjensidige, Alm. Brand og Codan beskriver den. Tegningen viser ingen beløb.`
        }
      },
      {
        overskrift: "Hvem betaler",
        tekst: [
          `Det er som udgangspunkt forsikringstageren, der betaler selvrisikoen. Der er dog situationer, hvor en anden betaler, eller hvor ingen gør.`,
          `Sælger virksomheden bilen, dækker forsikringen den nye ejer i tre uger. Sker der en skade i den periode, hæfter den nye ejer for selvrisikoen, uanset hvor stor den er. Står bilen på værksted, hæfter reparatøren hos Tryg for den selvrisiko, der står i policen.`
        ],
        punkter: [
          `<strong>Ny ejer.</strong> Sker skaden inden for tre uger efter et salg, opkræves selvrisikoen hos den nye ejer.`,
          `<strong>Værkstedet.</strong> Sker skaden, mens bilen er på værksted, hæfter reparatøren for selvrisikoen hos Tryg.`,
          `<strong>Ansatte under 26 år.</strong> GF opkræver ikke ekstra selvrisiko, når den ansatte kører som led i ansættelsen.`,
          `<strong>Uvidende ejer.</strong> GF opkræver ikke spiritusselvrisiko, hvis forsikringstageren ikke kørte og ikke vidste noget.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 238" role="img" aria-label="Hvem der betaler selvrisikoen. Som udgangspunkt virksomheden. Den nye ejer ved en skade inden tre uger efter et salg. Værkstedet hos Tryg, når bilen var overladt til reparatøren. Ingen, når en kendt skadevolder har erkendt ansvaret."><rect class="tg-rum" x="130" y="6" width="140" height="34"/><text class="tg-fremhaev" x="200" y="28" text-anchor="middle">Selvrisikoen</text><line class="tg-skillevaeg" x1="200" y1="40" x2="200" y2="195"/><line class="tg-skillevaeg" x1="195" y1="105" x2="205" y2="105"/><line class="tg-skillevaeg" x1="195" y1="195" x2="205" y2="195"/><rect class="tg-modul" x="5" y="70" width="190" height="70"/><text class="tg-modul__tekst" x="100" y="98" text-anchor="middle">VIRKSOMHEDEN</text><text x="100" y="118" text-anchor="middle">som udgangspunkt</text><rect class="tg-kasse" x="205" y="70" width="190" height="70"/><text class="tg-fremhaev" x="300" y="94" text-anchor="middle">Ny ejer</text><text x="300" y="112" text-anchor="middle">skade inden 3 uger</text><text x="300" y="128" text-anchor="middle">efter salg</text><rect class="tg-kasse" x="5" y="160" width="190" height="70"/><text class="tg-fremhaev" x="100" y="184" text-anchor="middle">Værkstedet</text><text x="100" y="202" text-anchor="middle">bilen var overladt</text><text x="100" y="218" text-anchor="middle">til reparatør, Tryg</text><rect class="tg-kasse" x="205" y="160" width="190" height="70"/><text class="tg-fremhaev" x="300" y="184" text-anchor="middle">Ingen</text><text x="300" y="202" text-anchor="middle">kendt skadevolder</text><text x="300" y="218" text-anchor="middle">har erkendt ansvaret</text></svg>`,
          tekst: `Skematisk. Hos Tryg gælder fritagelsen for kendt skadevolder ved tyveri og hærværk. Kilder: <a href="${GF}" rel="noopener">GF, punkt 2.1 og 13.7.3</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 2, 9 og 11.2</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 2 og 9</a> og <a href="${GF}" rel="noopener">GF, punkt 2.1 og 13.7</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Betaling af selvrisikoen",
        tekst: [
          `Har selskabet lagt selvrisikoen ud, sender det en opkrævning til virksomheden. Hos Tryg skal beløbet være betalt senest 14 dage efter opkrævningen, ellers kan Tryg opsige kasko og stilstand med 14 dages varsel og sende kravet til retslig inkasso.`,
          `GF opkræver et gebyr sammen med selvrisikoen og sender et rykkerbrev med gebyr, hvis den ikke bliver betalt til tiden. GF kan også opsige kaskoen eller kræve skærpede betingelser med 14 dages varsel, hvis selvrisikoen ikke bliver betalt ved påkrav.`
        ],
        punkter: [
          `<strong>Frist hos Tryg.</strong> Selvrisikoen skal betales senest 14 dage efter opkrævningen. Ellers kan Tryg opsige kasko og stilstand med 14 dages varsel.`,
          `<strong>Gebyr hos GF.</strong> GF tager 30 kr. for en opkrævning på indbetalingskort og 100 kr. pr. rykkerbrev.`,
          `<strong>Udlæg.</strong> Har selskabet lagt selvrisikoen ud, kan det kræve den betalt med det samme.`
        ],
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 9</a> og <a href="${GFG}" rel="noopener">GF: Bidrag, afgifter og gebyrer</a>, set den 4. oktober 2026, og <a href="${GF}" rel="noopener">GF, punkt 13.7.4, 13.7.5 og 13.15</a>, set den 7. oktober 2026.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Betalingsfrist, Tryg", 14, "dage efter opkrævningen"],
            ["Indbetalingskort, GF", 30, "kr. pr. opkrævning"],
            ["Rykkerbrev, GF", 100, "kr. pr. brev"]
          ],
          note: `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 9</a> og <a href="${GFG}" rel="noopener">GF: Bidrag, afgifter og gebyrer</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Moms ved skader",
        tekst: [
          `For en momsregistreret virksomhed kommer momsen oven i selvrisikoen. Hos GF bliver kaskoskader opgjort uden momsen, når virksomheden kan trække momsen fra, og virksomheden betaler selv momsen til værkstedet efter sin fradragsprocent.`,
          `Ved ansvarsskader lægger GF momsen ud over for værkstedet, og virksomheden betaler den tilbage efter sin fradragsprocent. Tryg lægger også momsen ud og sender opgørelsen til virksomheden. Betales momsen ikke senest 14 dage efter påkrav, kan Tryg opsige kaskoen med 14 dages varsel.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.9</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.7</a>, set den 7. oktober 2026. Mere om reglerne i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`
        ]
      },
      {
        overskrift: "Selvrisiko ved aflevering af leasingbil",
        tekst: [
          `Tryg og Alm. Brand trækker kun selvrisikoen én gang for mindre skader ved aflevering. Hos GF er selvrisikoen på afleveringsforsikringen 6.587 kr. (basisår 2023). Læs mere i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`,
          `GF's afleveringsforsikring dækker højst 32.942 kr. (basisår 2023) og kan kun vælges sammen med kasko og Friskade. Gjensidiges Leasing Basis dækker op til 5 skader ved afleveringen, når hver reparation højst koster 5.000 kr.`
        ],
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.3</a>, <a href="${ALMB}" rel="noopener">Alm. Brand</a> og <a href="${GF}" rel="noopener">GF, punkt 12.5</a>, set den 4. oktober 2026, og <a href="${GF}" rel="noopener">GF, punkt 12</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så kan du vælge den selvrisiko, der passer til virksomheden.",
    spoergsmaal: [
      "Ønsket selvrisiko pr. skade, og hvor mange skader flåden plejer at have.",
      "Om friskade, nulselvrisiko eller glasdækning skal med.",
      "Om der er førere under 26 år, og om de er ansat.",
      "Bilernes højde, hvis de er over 2,30 m.",
      "Alarm og anden sikring i varerummet.",
      "Om bilerne er leaset, og om der skal være en afleveringsforsikring.",
      "Om virksomheden er momsregistreret og kan trække momsen fra."
    ],
    faq: [
      ["Hvad er selvrisiko på en varebilforsikring?", "Det er den del af en skade, virksomheden selv betaler. Beløbet står i policen og gælder den første del af enhver skade."],
      ["Betaler man selvrisiko, når en anden er skyld i skaden?", "Hos GF betaler du ikke selvrisiko, når skadevolderen er kendt og har anerkendt erstatningspligten. Hos Tryg betaler du ikke selvrisiko ved tyveri og hærværk, når en kendt skadevolder er ansvarlig."],
      ["Hvad er friskade?", "Det er et tilvalg til kaskoen, der fjerner selvrisikoen ved bl.a. brand, tyveri, seriehærværk og nedstyrtende genstande. Hos Tryg hedder det Nulselvrisiko."],
      ["Koster det ekstra selvrisiko at låne varebilen ud til en ung fører?", "Hos GF koster det 6.587 kr. ekstra (basisår 2023), når bilen lånes ud til en fører under 26 år. Ansatte, der kører i arbejdet, er undtaget."],
      ["Hvad er særlig selvrisiko ved frihøjde?", "Tryg har en særlig selvrisiko, når en varebil over 2,30 m bliver skadet ved påkørsel af fx en bro eller et parkeringshus. Beløbet står i policen."],
      ["Hvad betyder basisår 2023 ved GF's beløb?", "Det betyder, at beløbet bliver reguleret hvert år den 1. januar med lønindekset for den private sektor. Det aktuelle beløb afviger derfor fra tallet i betingelserne."],
      ["Betaler man selvrisiko ved en glasskade?", "Ikke hos GF, når frontruden kan repareres. Ved udskiftning er selvrisikoen 1.606 kr. (basisår 2023) med tilvalget Udvidet glas og 1.000 kr. for forruden hos Gjensidige med tilvalget Glasskade."],
      ["Hvem betaler selvrisikoen, når bilen er på værksted?", "Hos Tryg hæfter reparatøren for selvrisikoen, når skaden sker, mens bilen er overladt til værkstedet."],
      ["Hvad sker der, hvis selvrisikoen ikke bliver betalt?", "Hos Tryg skal den betales inden 14 dage, ellers kan Tryg opsige kaskoen med 14 dages varsel. GF sender et rykkerbrev med gebyr og kan opsige kaskoen."]
    ],
    kilder: [
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "Gjensidige: Billigere forsikringer til virksomheden", url: GJP, dato: "2026-10-07" },
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: ALMB, dato: "2026-10-04" },
      { navn: "Codan: Firmabilforsikring", url: CODAN, dato: "2026-10-04" },
      { navn: "GF Forsikring: Bidrag, afgifter og gebyrer", url: GFG, dato: "2026-10-07" },
      { navn: "Topdanmark: Montér en alarm i din varebil og spar 5.000 kr. i selvrisiko", url: TOPA, dato: "2026-10-07" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Tryg: selvrisikoen opkræves samtidig med, at Tryg betaler erstatning (afsnit 9).", TRYG],
    ["Tryg: selvrisici indeksreguleres hvert år den 1. januar, medmindre andet fremgår af forsikringsbetingelserne eller forsikringsaftalen (afsnit 13).", TRYG],
    ["GF: beløb med basisår indeksreguleres hvert år den 1. januar; basisåret er det år, beløbet senest er ajourført i betingelserne; reguleringen følger lønindeks for den private sektor fra Danmarks Statistik med indekset for første kvartal året før som beregningsgrundlag; forsikringssum og selvrisiko på retshjælpsforsikringen indeksreguleres ikke (punkt 13.13).", GF],
    ["GF linker i oktober 2026 til betingelser nr. 130-1 fra januar 2023 fra siden om erhvervsbilforsikring.", "https://www.gfforsikring.dk/erhverv/forsikringer/erhvervsbilforsikring/"],
    ["Tryg: særlig selvrisiko ved bortkomstdækning for udlejningsbiler og særlig selvrisiko for retshjælpsforsikringen; beløbene fremgår af forsikringsaftalen (afsnit 7 og 9).", TRYG],
    ["GF: kan den sikrede opnå fri proces, beregnes der ikke selvrisiko på retshjælpsforsikringen (punkt 4.5).", GF],
    ["GF: den ekstra selvrisiko ved udlån gælder ved udlån til andre end forsikringstager, registreret bruger eller disses ægtefælle eller samlever, når føreren er under 26 år; den opkræves ikke, hvis selvrisikoen er bortfaldet efter punkt 5 (Friskade) eller 6 (Udvidet glas) (punkt 13.7.1).", GF],
    ["GF: den ekstra selvrisiko ved spiritus mv. forudsætter, at føreren kan pålægges et ansvar, og opkræves ikke, hvis forsikringstager, ansatte, husstand eller ægtefælle ikke var fører og ikke vidste det, og uvidenheden ikke skyldes grov uagtsomhed (punkt 13.7.2).", GF],
    ["GF og Tryg: kaskoen dækker ikke skade, der sker, fordi føreren er påvirket af alkohol, medicin (GF), narkotika eller euforiserende stoffer, eller mens bilen føres af en person uden lovbefalet eller gyldigt kørekort (GF punkt 4.2.1, Tryg afsnit 4.5).", GF],
    ["GF's erhvervsbilbetingelser nr. 130-1 nævner ingen særlig selvrisiko for skader på grund af manglende frihøjde (ordene frihøjde, højde og 2,30 forekommer ikke i betingelserne).", GF],
    ["GF: kan en glasskade lovligt og forsvarligt repareres, betaler GF kun reparationsprisen, selvom forsikringstager ønsker ruden udskiftet (punkt 4.3.1.3 og 6.2).", GF],
    ["Gjensidige: stenslag på bilens ruder repareres uden selvrisiko; skal ruden skiftes, betales den valgte selvrisiko.", GJ],
    ["If: hvis ruden kan repareres, betaler man ikke selvrisiko.", IF],
    ["Tryg Glas: ingen selvrisiko ved reparation af stenslag, udskiftning af glas (bortset fra en fast selvrisiko ved udskiftning af forruden, der står i forsikringsaftalen) og sidespejl ved samtidig skade på spejlglas (afsnit 5.4).", TRYG],
    ["GF: der opkræves ikke selvrisiko, hvis skaden ikke medfører udgifter for GF; fritagelsen ved kendt skadevolder gælder ikke, hvis skadevolderen er fører og sikret på policen, den registrerede bruger, forsikringstageren, deres ægtefælle eller husstanden (punkt 13.7.3).", GF],
    ["Tryg: en kendt ansvarlig skadevolder er kendt af Tryg og har erkendt eller er dømt for at have forvoldt skaden (afsnit 9).", TRYG],
    ["GF: Friskade kan kun vælges sammen med Kasko (punkt 5).", GF],
    ["Tryg Nulselvrisiko omfatter også udgiften til selvrisikoforsikring for lånebil, når bilen repareres på et Tryg Reparationsværksted (afsnit 5.4).", TRYG],
    ["Gjensidige Parkering Plus fjerner selvrisikoen, hvis bilen får en bule, ridse eller hærværk, mens den er lovligt parkeret, og skaden påvirker ikke præmietrinnet.", GJ],
    ["Gjensidige: med en højere selvrisiko betaler virksomheden en større andel selv ved en skade og tager en større del af risikoen, og så bliver forsikringen billigere.", GJP],
    ["Topdanmark: er den normale selvrisiko lavere end 5.000 kr., skal man slet ikke betale selvrisiko ved indbrud i en varebil med godkendt alarm.", TOPA],
    ["Tryg: skærpede vilkår kan fx være tvungen selvrisiko eller ændring af den eksisterende selvrisiko; i helt særlige tilfælde kan både den aftalte selvrisiko og en ekstra selvrisiko opkræves (afsnit 9 og 13).", TRYG],
    ["GF: den nye ejer hæfter for en eventuel selvrisiko uanset størrelsen (punkt 2.1); Tryg: forhandleren eller værkstedet hæfter for den aftalte selvrisiko, når skaden er sket, mens bilen var overladt til reparatør (afsnit 9 og 11.2).", GF],
    ["Tryg: ikke betalt selvrisiko kan sendes til retslig inkasso med omkostninger (afsnit 9).", TRYG],
    ["GF: sammen med selvrisikoen opkræves et opkrævnings- og administrationsgebyr, og betales selvrisikoen ikke til tiden, udsendes et rykkerbrev med gebyr; GF kan med 14 dages varsel opsige kaskoen eller kræve skærpede betingelser, hvis selvrisiko ikke betales ved påkrav (punkt 13.7.4, 13.7.5 og 13.15).", GF],
    ["GF: for momsregistrerede opgøres kaskoskader eksklusiv moms, når momsen kan medregnes som indgående afgift, og ejeren betaler selv moms til reparatøren efter sin fradragsprocent; ved ansvarsskader lægger GF momsen ud, og ejeren godtgør den efter sin fradragsprocent (punkt 13.9).", GF],
    ["Tryg: Tryg lægger momsen ud over for reparatøren og sender opgørelsen til virksomheden; betales momsen ikke senest 14 dage efter påkrav, kan Tryg opsige kaskoforsikringen med 14 dages varsel (afsnit 11.7).", TRYG],
    ["GF Afleveringsforsikring ved leasing: kan kun vælges sammen med Kasko og Friskade, erstatningen er højst 32.942 kr. (basisår 2023) (punkt 12 og 12.2).", GF],
    ["Gjensidige Leasing Basis dækker op til 5 skader konstateret ved aflevering, når hver skades reparation ikke overstiger 5.000 kr.", GJ]
  ]
};
