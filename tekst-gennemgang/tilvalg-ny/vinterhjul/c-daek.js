// Underside /til-varebilen/vinterhjul/c-daek/ (07-10-2026)
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var MICH_C = `https://www.michelin.co.uk/auto/advice/van/reinforced-tyres-utility-vehicles`;
var MICH_STR = `https://www.michelin.co.uk/auto/advice/van/van-tyre-size`;
var FDM = `https://fdm.dk/nyheder/bilist/2017-11-loadindex-tabel`;
var CONT_SI = `https://www.continental-tires.com/at/de/tire-knowledge/speed-index--si-/`;
var CONT_DOT = `https://www.continental-tires.com/dk/da/products/car/technical-services-ok/vikingcontact-7/identification/`;
var CONT_TRYK = `https://www.continental-tires.com/dk/da/tire-knowledge/tire-pressure/`;
var VW = `https://shop.volkswagen.dk/shop/vw-caddy-16-2868p.html`;
var EU = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32020R0740`;
var EPREL_4S = `https://eprel.ec.europa.eu/informationsheet/Fiche_483054_DA.pdf`;
var CONT_VS = `https://www.continental-tires.com/dk/da/tire-knowledge/winter-tires-in-summer/`;
var EPREL_C1 = `https://eprel.ec.europa.eu/informationsheet/Fiche_511349_DA.pdf`;
var TH1 = `https://www.thansen.dk/bil/daek-og-faelge/helaarsdaek/16-daek/continental-215-65-16c-109-107t-vancontact-4-season-8pr/n-241666596/pn-234101745/`;
var TH2 = `https://www.thansen.dk/bil/daek-og-faelge/vinterdaek/16-daek/continental-215-65-16c-109-107r-vancontact-winter-8p/n-1930828057/pn-245851087`;
var TH3 = `https://www.thansen.dk/bil/daek-og-faelge/vinterdaek/16-daek/continental-215-65-16c-106-104r-vancontact-winter/n-1930828057/pn-245767309/`;

module.exports = {
  id: "vinterhjul/c-daek",
  side: {
    slug: "c-daek",
    navn: "C-dæk til varebil",
    titel: "C-dæk til varebil: mærkning og belastning",
    kort: `Hvad C-mærket betyder, hvordan belastnings- og hastighedsindeks læses, og forskellen på C, XL og reinforced.`,
    beskrivelse: `C-dæk til varebil: hvad C betyder, belastningsindeks i kg, to tal som 109/107, hastighedsindeks og forskellen på C-dæk, XL og reinforced.`,
    manchet: `C-dæk er dæk til varebiler og lette erhvervskøretøjer. De har et højere belastningsindeks end personbildæk i samme størrelse og bærer derfor mere. Her kan du se, hvordan du læser sidevæggen, og hvordan du regner ud, om dækkene bærer bilen fuldt lastet.`,
    visuel: {
      hero: "vinterhjul",
      kort_fortalt: [
        ["Indeks 109", "1.030 kg", "pr. dæk ved enkeltmontering"],
        ["To dæk med indeks 109", "2.060 kg", "dækker et akseltryk på op til 2.060 kg"],
        ["Vinterdæk med M+S", "mindst 160 km/t", "hastighedsindeks Q"],
        ["Varebildæk i EU", "Klasse C2", "personbildæk er C1, tunge køretøjer C3"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvad C betyder",
        tekst: [
          `C står efter dimensionen, fx 215/65 R16C. Michelin beskriver C-mærkningen som mærket for varebiler og lette erhvervskøretøjer, der typisk kører med tung last, og C-dæk har et højere belastningsindeks end almindelige dæk.`,
          `Forskellen sidder i dækkets opbygning. Michelin skriver, at et C-dæk har en forstærket karkasse, altså det indre skelet af stål og stof, som bærer vægten. Forstærkningen gør også dækket mere modstandsdygtigt, når det rammer en kantsten eller et hul i vejen.`,
          `Færdselsstyrelsen skelner mellem personbildæk og vare- og lastbildæk, som er dæk hovedsageligt beregnet til vare- og lastbiler, busser og påhængskøretøjer hertil. Michelin nævner håndværkere og pakkeudbringning som typiske eksempler på den slags kørsel med tung last.`
        ]
      },
      {
        overskrift: "Sådan læses sidevæggen",
        tekst: [
          `Eksempel: <strong>215/65 R16C 109/107T</strong>, mærkningen på Continental VanContact 4Season hos Thansen.`,
          `Tallene står i en fast rækkefølge. Først kommer målene på dækket og fælgen, så C for varebildæk, derefter hvor meget dækket må bære, og til sidst hvor hurtigt det må køre med den last. Michelin skriver, at dimensionen altid står på sidevæggen, så du kan læse den direkte på bilen.`
        ],
        tabel: {
          kolonner: ["Mærkning", "Betyder", "I eksemplet"],
          raekker: [
            ["215", "Dækkets bredde i mm", "215 mm"],
            ["65", "Sidevæggens højde i procent af bredden", "65 %"],
            ["R", "Radialdæk", "Radial"],
            ["16", "Fælgdiameter i tommer", "16\""],
            ["C", "Vare- og lastbildæk (commercial)", "C-dæk"],
            ["109/107", "Belastningsindeks ved enkelt- og tvillingmontering", "1.030 kg / 975 kg"],
            ["T", "Hastighedsindeks", "190 km/t"],
            ["M+S / 3PMSF", "Vinterdæk / vinterdæk til krævende sneforhold", "—"],
            ["DOT … 4424", "Produktionsuge og -år (de sidste fire cifre)", "Uge 44, 2024"]
          ],
          note: `Kilder: <a href="${MICH_C}" rel="noopener">Michelin</a> (C), <a href="${MICH_STR}" rel="noopener">Michelin, van tyre size</a> (dobbelt belastningstal), <a href="${FDM}" rel="noopener">FDM</a> (kg), <a href="${CONT_SI}" rel="noopener">Continental</a> (hastighed), <a href="${CONT_DOT}" rel="noopener">Continental Danmark</a> (DOT), set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Mærkningen på et varebildæks sidevæg: dimension, C, belastnings- og hastighedsindeks, DOT-dato og alpesymbol"><rect x="10" y="80" width="380" height="60" rx="8" class="tg-rum"/><text x="24" y="117" class="tg-fremhaev">215</text><text x="54" y="117" class="tg-fremhaev">/65</text><text x="92" y="117" class="tg-fremhaev">R16</text><text x="124" y="117" class="tg-fremhaev">C</text><text x="148" y="117" class="tg-fremhaev">109/107</text><text x="218" y="117" class="tg-fremhaev">T</text><text x="244" y="116">DOT … 4424</text><path d="M346,128 L358,104 L365,116 L372,102 L386,128 Z" class="tg-profil"/><g class="tg-call"><line x1="38" y1="80" x2="38" y2="62"/><circle cx="38" cy="80" r="3"/><text x="14" y="40" class="tg-call__navn">215</text><text x="14" y="54" class="tg-call__under">bredde, mm</text></g><g class="tg-call"><line x1="108" y1="80" x2="108" y2="62"/><circle cx="108" cy="80" r="3"/><text x="90" y="40" class="tg-call__navn">R16</text><text x="90" y="54" class="tg-call__under">radial, 16" fælg</text></g><g class="tg-call"><line x1="180" y1="80" x2="205" y2="62"/><circle cx="180" cy="80" r="3"/><text x="196" y="40" class="tg-call__navn">109/107</text><text x="196" y="54" class="tg-call__under">1.030 / 975 kg</text></g><g class="tg-call"><line x1="318" y1="80" x2="318" y2="62"/><circle cx="318" cy="80" r="3"/><text x="300" y="40" class="tg-call__navn">4424</text><text x="300" y="54" class="tg-call__under">uge 44, 2024</text></g><g class="tg-call"><line x1="68" y1="140" x2="40" y2="160"/><circle cx="68" cy="140" r="3"/><text x="14" y="176" class="tg-call__navn">65</text><text x="14" y="190" class="tg-call__under">profil, %</text></g><g class="tg-call"><line x1="129" y1="140" x2="134" y2="160"/><circle cx="129" cy="140" r="3"/><text x="130" y="176" class="tg-call__navn">C</text><text x="130" y="190" class="tg-call__under">varebildæk</text></g><g class="tg-call"><line x1="223" y1="140" x2="223" y2="160"/><circle cx="223" cy="140" r="3"/><text x="215" y="176" class="tg-call__navn">T</text><text x="215" y="190" class="tg-call__under">190 km/t</text></g><g class="tg-call"><line x1="366" y1="140" x2="340" y2="160"/><circle cx="366" cy="140" r="3"/><text x="310" y="176" class="tg-call__navn">3PMSF</text><text x="310" y="190" class="tg-call__under">alpesymbol</text></g></svg>`,
          tekst: `Sidevæggen foldet ud, eksempel 215/65 R16C 109/107T. Skematisk. Kilder som i tabellen.`
        },
        efter: [
          `Det fulde DOT-nummer med produktionsdatoen står kun på den ene side af dækket, oplyser Continental.`
        ]
      },
      {
        overskrift: "Her står bilens dækstørrelse",
        tekst: [
          `Før du bestiller dæk, skal du kende tre ting: dimensionen, belastningsindekset og hastighedsindekset. Dimensionen og de to indeks står på de dæk, bilen kører på nu. Er du i tvivl om, hvad bilen skal have, er det bilproducentens oplysninger, der gælder.`,
          `Continental skriver, at det anbefalede dæktryk står i instruktionsbogen, på indersiden af tankdækslet eller på stolpen ved førerdøren. Den anbefalede hastighedsklasse står i instruktionsbogen eller på en dækmærkat, som ofte sidder i dørkarmen ved førerdøren eller i handskerummet.`,
          `Bilens tilladte akseltryk står i registreringsattesten. Det er det tal, du skal bruge, når du regner ud, om dækkene bærer nok.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 256" role="img" aria-label="Varebil set fra siden og en registreringsattest. Dimensionen står på dækkets sidevæg, dæktryk og hastighedsindeks på en mærkat ved førerdøren, og det tilladte akseltryk i registreringsattesten."><text class="tg-call__navn" x="14" y="22">Registreringsattest</text><text class="tg-call__under" x="14" y="36">tilladt akseltryk</text><rect class="tg-kasse" x="14" y="52" width="96" height="100" rx="4"/><line class="tg-skillevaeg" x1="24" y1="72" x2="100" y2="72"/><line class="tg-skillevaeg" x1="24" y1="88" x2="100" y2="88"/><line class="tg-skillevaeg" x1="24" y1="104" x2="100" y2="104"/><rect class="tg-modul" x="22" y="114" width="80" height="12"/><line class="tg-skillevaeg" x1="24" y1="138" x2="100" y2="138"/><g transform="translate(150,196)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="322" y="118" width="10" height="16"/><line class="tg-gulvlinje" x1="120" y1="213" x2="398" y2="213"/><g class="tg-call"><line x1="327" y1="118" x2="350" y2="48"/><circle cx="327" cy="118" r="3"/><text class="tg-call__navn" x="395" y="22" text-anchor="end">Dørstolpen</text><text class="tg-call__under" x="395" y="36" text-anchor="end">dæktryk og hastighedsindeks</text></g><g class="tg-call"><line x1="350" y1="206" x2="350" y2="224"/><circle cx="350" cy="206" r="3"/><text class="tg-call__navn" x="395" y="236" text-anchor="end">Sidevæggen</text><text class="tg-call__under" x="395" y="250" text-anchor="end">dimension og indeks</text></g></svg>`,
          tekst: `Skematisk. Mærkatens placering varierer fra bil til bil. Kilder: <a href="${CONT_TRYK}" rel="noopener">Continental: Dæktryk</a>, <a href="${CONT_SI}" rel="noopener">Continental: Geschwindigkeitsindex</a> og <a href="${MICH_STR}" rel="noopener">Michelin: Van tyre size</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Belastningsindeks i kg",
        tekst: [
          `Tallet er den største last pr. dæk. Varebildæk ligger typisk i den høje ende af tabellen.`,
          `Selve indekset er ikke et antal kilo. Det er et kodetal, som du slår op i en tabel. FDM skriver, at et dæk mærket 88 må belastes med højst 560 kg. Fra indeks 100 til 120 stiger lasten med 25 til 40 kg for hvert trin, så et par trin betyder mere, end det ser ud til.`,
          `Søjlerne viser spændet mellem Caddyens XL-dæk med indeks 96 og et C-dæk med indeks 120. Indeks 96 bærer 710 kg, og indeks 120 bærer 1.400 kg pr. dæk, næsten det dobbelte.`
        ],
        tabel: {
          kolonner: ["Indeks", "Kg pr. dæk", "Indeks", "Kg pr. dæk"],
          raekker: [
            ["100", "800 kg", "111", "1.090 kg"],
            ["102", "850 kg", "112", "1.120 kg"],
            ["104", "900 kg", "113", "1.150 kg"],
            ["105", "925 kg", "114", "1.180 kg"],
            ["106", "950 kg", "115", "1.215 kg"],
            ["107", "975 kg", "116", "1.250 kg"],
            ["108", "1.000 kg", "117", "1.285 kg"],
            ["109", "1.030 kg", "118", "1.320 kg"],
            ["110", "1.060 kg", "120", "1.400 kg"]
          ],
          note: `Kilde: <a href="${FDM}" rel="noopener">FDM, loadindex-tabel</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Indeks 96", 710, "fx Caddy med XL-dæk"],
            ["Indeks 100", 800],
            ["Indeks 104", 900],
            ["Indeks 106", 950],
            ["Indeks 109", 1030, "eksemplet på sidevæggen"],
            ["Indeks 112", 1120],
            ["Indeks 115", 1215],
            ["Indeks 120", 1400]
          ],
          note: `Søjlerne viser den største last pr. dæk for udvalgte indeks. Kilde: <a href="${FDM}" rel="noopener">FDM, loadindex-tabel</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kravet til bæreevnen",
        tekst: [
          `Dækkene skal have en bæreevne, der mindst svarer til bilens tilladte akseltryk, og være beregnet til bilens tophastighed. Kravet står i Færdselsstyrelsens synsvejledning, afsnit 8.02.002. Fælgene skal også være beregnet til det tilladte akseltryk.`,
          `Regnestykket: to dæk med indeks 109 bærer 2 × 1.030 kg = 2.060 kg. Det dækker en aksel med et tilladt akseltryk på op til 2.060 kg. Akseltrykket står i registreringsattesten.`,
          `Synshallen kan bruge en af databøgerne fra STRO, den skandinaviske organisation for dæk og fælge, når den kontrollerer bæreevnen. Den samlede bæreevne for dækkene på samme aksel afrundes til nærmeste hele kilo.`,
          `Kravet gælder hver aksel for sig, så du skal regne på både forakslen og bagakslen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 205" role="img" aria-label="En aksel med to dæk med belastningsindeks 109, der hver bærer 1.030 kg, i alt 2.060 kg"><text class="tg-lille" x="0" y="16">TO DÆK PÅ SAMME AKSEL</text><rect class="tg-modul" x="130" y="28" width="140" height="26"/><text class="tg-modul__tekst" x="142" y="45">TILLADT AKSELTRYK</text><line class="tg-pil" x1="200" y1="54" x2="200" y2="92"/><path class="tg-pil" d="M194,85 L200,93 L206,85"/><rect class="tg-profil" x="50" y="60" width="40" height="80" rx="8"/><rect class="tg-profil" x="310" y="60" width="40" height="80" rx="8"/><line class="tg-gulvlinje" x1="90" y1="100" x2="310" y2="100"/><line class="tg-gulvlinje" x1="20" y1="140" x2="380" y2="140"/><text x="30" y="160">indeks 109</text><text class="tg-fremhaev" x="30" y="176">1.030 kg</text><text x="300" y="160">indeks 109</text><text class="tg-fremhaev" x="300" y="176">1.030 kg</text><text x="160" y="160">2 × 1.030 kg</text><text class="tg-fremhaev" x="160" y="176">= 2.060 kg</text><text class="tg-lille" x="0" y="198">DÆKKER ET AKSELTRYK PÅ OP TIL 2.060 KG</text></svg>`,
          tekst: `Tegningen er skematisk og viser regnestykket for to dæk med belastningsindeks 109 på samme aksel.`
        },
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.002</a>, set den 7. oktober 2026. Mere om vægt og akseltryk i Håndbogen: <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`
        ]
      },
      {
        overskrift: "Eksempel med en lille varebil",
        tekst: [
          `Volkswagens originale vinterhjul til Caddy er monteret med 205/60 R16 96H XL. Volkswagen oplyser, at hjulene må bære et akseltryk på højst 1.420 kg.`,
          `Tallene passer med tabellen. I FDM's tabel svarer indeks 96 til 710 kg pr. dæk, og to dæk på samme aksel bærer altså 2 × 710 kg = 1.420 kg. Har en Caddy et tilladt akseltryk over 1.420 kg, er sættet ikke nok til den bil.`,
          `Hjulene er retningsbestemte og sælges i sæt med to til højre og to til venstre. Ved hvert skift skal hjulene derfor tilbage på den rigtige side af bilen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Belastningsindeks, Caddy-sættet", "96", "XL"],
            ["Bæreevne pr. dæk", "710", "kg"],
            ["Akseltryk, højst", "1.420", "kg"]
          ],
          note: `Kilder: <a href="${VW}" rel="noopener">Volkswagen shop: VW Caddy 16" vinterkomplethjul</a> og <a href="${FDM}" rel="noopener">FDM, loadindex-tabel</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "To belastningstal på samme dæk",
        tekst: [
          `C-dæk har ofte to tal, fx 112/110. Det første gælder ved enkeltmontering, det andet pr. dæk ved tvillingmontering. Michelins eksempel: 112/110 svarer til 1.120 kg pr. dæk ved enkeltmontering og 1.060 kg pr. dæk ved tvillingmontering.`,
          `Tvillingmontering betyder, at der sidder to hjul side om side i hver ende af akslen. Det ses fx på varebiler med dobbelte baghjul. Hvert dæk må her bære lidt mindre end ved enkeltmontering.`,
          `Samme dimension kan findes med flere belastningsniveauer. Michelin nævner 235/65R16 Agilis CrossClimate med 115/113 eller 121/119 og skriver, at du skal vælge efter bilens last.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="To akselender set bagfra. Med ét hjul i enden bærer et dæk mærket 112/110 1.120 kg. Med to hjul side om side bærer hvert dæk 1.060 kg."><text class="tg-lille" x="20" y="20">ENKELTMONTERING</text><rect class="tg-profil" x="40" y="36" width="40" height="114" rx="8"/><rect class="tg-hylde" x="80" y="86" width="10" height="20"/><line class="tg-gulvlinje" x1="90" y1="96" x2="170" y2="96"/><line class="tg-gulvlinje" x1="20" y1="150" x2="180" y2="150"/><text class="tg-fremhaev" x="40" y="172">112</text><text x="40" y="190">1.120 kg pr. dæk</text><text class="tg-lille" x="220" y="20">TVILLINGMONTERING</text><rect class="tg-profil" x="232" y="36" width="40" height="114" rx="8"/><rect class="tg-profil" x="276" y="36" width="40" height="114" rx="8"/><rect class="tg-hylde" x="316" y="86" width="10" height="20"/><line class="tg-gulvlinje" x1="326" y1="96" x2="396" y2="96"/><line class="tg-gulvlinje" x1="220" y1="150" x2="396" y2="150"/><text class="tg-fremhaev" x="232" y="172">110</text><text x="232" y="190">1.060 kg pr. dæk</text><text class="tg-lille" x="20" y="214">SAMME DÆK, MÆRKET 112/110</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${MICH_STR}" rel="noopener">Michelin: Van tyre size</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Et tredje tal i parentes",
        tekst: [
          `Nogle varebildæk har en ekstra mærkning i parentes, fx 205/65 R16C 107/105T (103H). Michelin forklarer, at tallet i parentes giver dækket en højere hastighedsklasse med en lavere last.`,
          `I eksemplet bærer dækket 975 kg ved enkeltmontering og 925 kg pr. dæk ved tvillingmontering, når det kører højst 190 km/t (T). Ved højst 210 km/t (H) må det kun bære 875 kg. Hastighedsbogstavet efter de to første tal gælder for dem begge.`,
          `I EU's produktdatabase EPREL hedder den ekstra mærkning en yderligere driftsbeskrivelse. Databladet for VanContact 4Season i 215/65 R16C 109/107T har fx en yderligere driftsbeskrivelse med indeks 106 og hastighedsklasse T.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["107, enkeltmontering", "975", "kg pr. dæk"],
            ["105, tvillingmontering", "925", "kg pr. dæk"],
            ["103H i parentes", "875", "kg pr. dæk"]
          ],
          note: `Michelins eksempel 205/65 R16C 107/105T (103H). Kilder: <a href="${MICH_STR}" rel="noopener">Michelin: Van tyre size</a> og <a href="${EPREL_4S}" rel="noopener">EPREL, datablad 483054</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hastighedsindeks",
        tekst: [
          `Bogstavet efter belastningsindekset er den højeste hastighed, dækket kan holde med den last og det tryk, producenten har fastsat. Continental skriver, at klassen bliver fundet på prøvestande i laboratoriet, og at bogstaverne går fra A til Z.`,
          `Hastigheden stiger som regel med bogstavet, men H er en undtagelse og ligger mellem U og V. Det skyldes, at H tidligere stod for high performance.`
        ],
        tabel: {
          kolonner: ["Bogstav", "Højst"],
          raekker: [
            ["N", "140 km/t"],
            ["P", "150 km/t"],
            ["Q", "160 km/t"],
            ["R", "170 km/t"],
            ["S", "180 km/t"],
            ["T", "190 km/t"],
            ["H", "210 km/t"],
            ["V", "240 km/t"]
          ],
          note: `Kilde: <a href="${CONT_SI}" rel="noopener">Continental, Speed Index</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "km/t",
          data: [
            ["N", 140],
            ["P", 150],
            ["Q", 160, "mindst dette på vinterdæk med M+S"],
            ["R", 170],
            ["S", 180],
            ["T", 190, "eksemplet på sidevæggen"],
            ["H", 210],
            ["V", 240]
          ],
          note: `Søjlerne viser den højeste hastighed for hvert bogstav. Kilde: <a href="${CONT_SI}" rel="noopener">Continental, Speed Index</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Vinterdæk med M+S må være beregnet til mindst 160 km/t (Q), selv om bilens tophastighed er højere. Reglen står i synsvejledningen, afsnit 8.02.020.`
        ]
      },
      {
        overskrift: "Hastighedsbegrænser og tophastighed",
        tekst: [
          `Dækkene skal mindst være beregnet til bilens tophastighed. Har bilen en hastighedsbegrænser, regnes den begrænsede hastighed som tophastighed. En ændring af begrænseren er en konstruktiv ændring, der skal godkendes og registreres. Kilde: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.002</a>, set den 4. oktober 2026.`,
          `Synsvejledningen nævner, at en begrænser kan bruges til at sænke tophastigheden, hvis dækkenes bæreevne ikke slår til ved den oprindelige hastighed. Det er typisk på mobilkraner og lignende biler. På en almindelig varebil er det dækkets bogstav, der skal passe til bilen.`
        ]
      },
      {
        overskrift: "C mod XL og reinforced",
        tekst: [
          `XL og REINF står også for dæk, der bærer mere end standarddækket i samme størrelse. Forskellen er, hvilken bil dækket er bygget til.`,
          `Michelin skriver, at mindre varebiler på størrelse med en personbil, fx Citroën Berlingo og Renault Kangoo, ikke behøver C-dæk, men nogle gange skal have XL- eller REINF-dæk. Står der ikke i instruktionsbogen, at bilen skal have C-dæk, er det belastningsindekset, du skal overholde.`,
          `Michelin skriver, at XL-dækket har et højere belastningsindeks end standarddækket i samme størrelse og derfor tåler et højere tryk.`
        ],
        tabel: {
          kolonner: ["Mærkning", "Beregnet til", "Hvad den siger"],
          raekker: [
            ["C", "Varebiler og lette erhvervskøretøjer", "Højere belastningsindeks til erhvervsbrug"],
            ["XL (Extra Load)", "Personbiler med høj egenvægt", "Højere belastning end standarddækket, tåler højere tryk"],
            ["REINF / RF", "Personbiler med høj last", "Belastningsindekset er hævet"]
          ],
          note: `Kilde: <a href="${MICH_C}" rel="noopener">Michelin, Reinforced tyres for utility vehicles</a>, set den 4. oktober 2026. Michelin skriver, at XL og REINF ikke er beregnet til erhvervskøretøjer.`,
          visning: "kort"
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 238" role="img" aria-label="Beslutningstræ. Kræver instruktionsbogen C-dæk, skal bilen have C-dæk med mindst bilens indeks. Ellers er det nok med dæk, der har mindst bilens belastningsindeks, fx XL. I begge tilfælde skal dækkene på en aksel bære det tilladte akseltryk."><defs><marker id="pil-c-daek-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="20" y="6" width="360" height="54"/><text x="200" y="28" text-anchor="middle">Står der i instruktionsbogen,</text><text class="tg-fremhaev" x="200" y="46" text-anchor="middle">at bilen skal have C-dæk?</text><line class="tg-pil" x1="130" y1="60" x2="100" y2="96" marker-end="url(#pil-c-daek-1)"/><line class="tg-pil" x1="270" y1="60" x2="300" y2="96" marker-end="url(#pil-c-daek-1)"/><text x="104" y="82" text-anchor="end">Ja</text><text x="296" y="82">Nej</text><rect class="tg-modul" x="20" y="100" width="170" height="52"/><text class="tg-modul__tekst" x="105" y="122" text-anchor="middle">C-DÆK MED MINDST</text><text class="tg-modul__tekst" x="105" y="138" text-anchor="middle">BILENS INDEKS</text><rect class="tg-kasse" x="210" y="100" width="170" height="52"/><text x="295" y="122" text-anchor="middle">Dæk med mindst bilens</text><text x="295" y="138" text-anchor="middle">indeks, fx XL</text><line class="tg-skinne-tynd" x1="105" y1="152" x2="105" y2="180"/><line class="tg-skinne-tynd" x1="295" y1="152" x2="295" y2="180"/><rect class="tg-kasse" x="20" y="180" width="360" height="50"/><text x="200" y="201" text-anchor="middle">Dækkene på en aksel skal tilsammen</text><text x="200" y="219" text-anchor="middle">bære mindst det tilladte akseltryk</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${MICH_C}" rel="noopener">Michelin: Reinforced tyres for utility vehicles</a> og <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.002</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Det afgørende er bilens godkendelse og akseltryk. Ikke alle varebiler står på C-dæk: Volkswagens originale vinterhjul til Caddy er monteret med 205/60 R16 96H XL.`
        ]
      },
      {
        overskrift: "Mærker, der også står på dækket",
        tekst: [
          `Ud over dimensionen og de to indeks har dækket en række godkendelsesmærker. Synshallen kontrollerer dem efter synsvejledningen.`,
          `Dækket skal også være tydeligt mærket med dimensionen og med fabrikantens eller regummieringsfirmaets navn eller varemærke. Et regummieret dæk må ikke have to forskellige mærkninger for bæreevne og hastighed.`
        ],
        punkter: [
          `<strong>Godkendelsesmærke.</strong> Dæk skal være godkendt og mærket efter direktiv 92/23/EØF eller FN-regulativ 30, 54 eller 64. Regummierede dæk efter FN-regulativ 108 eller 109.`,
          `<strong>Støjmærke.</strong> Et »s« eller »S« lige efter godkendelsesnummeret, fx E1 013456 S.`,
          `<strong>TWI.</strong> Slidindikatorer i hovedmønsteret, der viser 1,6 mm.`,
          `<strong>Regroovable.</strong> Kun dæk med denne mærkning må få skåret nyt mønster.`
        ],
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, Vejledning om syn af køretøjer, afsnit 8.02</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "EU-dækmærket",
        tekst: [
          `Forhandlerne viser EU-mærkets tre værdier, som er brændstofklasse, vådgreb og ekstern støj i dB. Tabellen har eksempler fra Thansen i 215/65-16C.`,
          `Brændstofklassen viser dækkets rullemodstand. Continental skriver, at en højere rullemodstand giver et højere forbrug. Vådgrebet viser dækkets greb på våd vej, og støjen er den lyd, dækket sender ud til omgivelserne.`
        ],
        tabel: {
          kolonner: ["Dæk", "Indeks", "Brændstof", "Vådgreb", "Støj"],
          raekker: [
            ["Continental VanContact 4Season", "109/107T", "B", "A", "73 dB"],
            ["Continental VanContact Winter 8P", "109/107R", "C", "B", "73 dB"],
            ["Continental VanContact Winter", "106/104R", "E", "B", "73 dB"]
          ],
          note: `Kilde: Thansens produktsider (<a href="${TH1}" rel="noopener">1</a>, <a href="${TH2}" rel="noopener">2</a>, <a href="${TH3}" rel="noopener">3</a>), set den 4. oktober 2026.`
        },
        efter: [
          `Du kan selv slå dækket op i EPREL med QR-koden på dækmærket. Databladet for VanContact 4Season viser de samme klasser som hos Thansen og oplyser desuden, at dækket er godkendt til krævende sneforhold.`
        ]
      },
      {
        overskrift: "Varebildæk er C2-dæk i EU",
        tekst: [
          `EU's dækmærkeforordning deler dæk i tre klasser: C1 til biler, C2 til varevogne og C3 til tunge køretøjer. Hver dækklasse har sine egne grænser for klasserne på dækmærket.`,
          `Et C2-dæk med vådgreb A kan derfor ikke sammenlignes direkte med et personbildæk med vådgreb A.`,
          `Databladene i EPREL er også bygget forskelligt. Et personbildæk har en linje, der siger, om dækket er godkendt til krævende isforhold. Den linje er der ikke på databladet for et C2-dæk, som til gengæld har belastningstal for både enkelt- og tvillingmontering.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["C1, vådgreb A fra", "1,55", "indeks"],
            ["C2, vådgreb A fra", "1,40", "indeks"],
            ["C3, vådgreb A fra", "1,25", "indeks"]
          ],
          note: `Vådgrebsindeks G for klasse A. Kilde: <a href="${EU}" rel="noopener">forordning (EU) 2020/740, bilag I, del B</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Leverandøren skal registrere dæk, der er fremstillet efter 1. maj 2021, i EU's produktdatabase, før de kommer i handlen. Dækmærket har en QR-kode til databasen.`,
          `Kilder: <a href="${EPREL_4S}" rel="noopener">EPREL, datablad 483054 (C2)</a> og <a href="${EPREL_C1}" rel="noopener">EPREL, datablad 511349 (C1)</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Støjgodkendelse efter FN-regulativ 117-04",
        tekst: [
          `Dæk skal være støjgodkendt og mærket efter FN-regulativ 117-04. Dæk godkendt efter 117-02 eller 117-03 og fremstillet senest 6. juli 2026 kan fortsat monteres til 6. januar 2029.`,
          `For en virksomhed med dæk på lager betyder overgangsreglen, at et sæt, der er produceret før skiftet, stadig kan monteres i et par år endnu. Produktionsugen står i DOT-nummeret.`
        ],
        punkter: [
          `<strong>Undtaget:</strong> regummierede dæk, dæk til under 80 km/t, dæk til fælge på højst 10" eller mindst 25", nødreservehjul af T-typen og pigdæk.`,
          `<strong>Ikke undtaget:</strong> vinterdæk med huller til pigge, men uden pigge.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Hovedreglen", "Dæk skal være støjgodkendt og mærket efter FN-regulativ 117-04."],
            ["Fremstillet senest 6. juli 2026", "Dæk, der er godkendt efter 117-02 eller 117-03, er omfattet af en overgangsregel."],
            ["Til 6. januar 2029", "Indtil da kan dækkene fortsat monteres."]
          ]
        },
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.020</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Fælgen skal også bære akseltrykket",
        tekst: [
          `Dækket skal være dimensioneret og udformet, så det passer til fælgen, og fælgen skal selv kunne bære bilens tilladte akseltryk. Kommer et sæt vinterhjul på nye fælge, gælder kravet altså både dækket og fælgen.`,
          `Synshallen beder kun om oplysninger fra fælgfabrikanten, hvis der er tvivl. Er fælgen et kendt fabrikat, og er der ingen mistanke om, at den bærer for lidt, skal synsvirksomheden ikke spørge.`
        ],
        punkter: [
          `<strong>Belastning.</strong> Fælgene skal være beregnet til bilens tilladte akseltryk.`,
          `<strong>Fabrikant.</strong> Fælgen skal være produceret af en egentlig fælgfabrikant. Hjemmefræsede og hjemmesvejsede fælge godkendes ikke.`,
          `<strong>Mærkning.</strong> Fælgens tilladte belastning står oftest ikke på selve fælgen.`,
          `<strong>Bearbejdning.</strong> Fælgen skal bearbejdes efter køretøjsfabrikantens forskrifter.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 248" role="img" aria-label="Hjul set fra siden og forfra med målene i 215/65 R16C. Bredden er 215 mm, sidevæggen er 65 procent af bredden, og fælgen, som er fremhævet, er 16 tommer."><circle class="tg-profil" cx="110" cy="120" r="95"/><circle class="tg-modul" cx="110" cy="120" r="56"/><circle class="tg-kasse" cx="110" cy="120" r="16"/><circle class="tg-hylde" cx="110" cy="96" r="3"/><circle class="tg-hylde" cx="133" cy="113" r="3"/><circle class="tg-hylde" cx="124" cy="140" r="3"/><circle class="tg-hylde" cx="96" cy="140" r="3"/><circle class="tg-hylde" cx="87" cy="113" r="3"/><line class="tg-skinne-tynd" x1="110" y1="25" x2="230" y2="25"/><line class="tg-skinne-tynd" x1="110" y1="64" x2="230" y2="64"/><line class="tg-skinne-tynd" x1="110" y1="176" x2="230" y2="176"/><g class="tg-maal"><line x1="222" y1="25" x2="222" y2="64"/><line x1="217" y1="25" x2="227" y2="25"/><line x1="217" y1="64" x2="227" y2="64"/><text x="232" y="42">sidevæg:</text><text x="232" y="56">65 % af bredden</text></g><g class="tg-maal"><line x1="222" y1="64" x2="222" y2="176"/><line x1="217" y1="176" x2="227" y2="176"/><text x="232" y="116">fælg:</text><text x="232" y="130">16 tommer</text></g><rect class="tg-profil" x="346" y="25" width="40" height="190" rx="14"/><g class="tg-maal"><line x1="346" y1="14" x2="386" y2="14"/><line x1="346" y1="9" x2="346" y2="19"/><line x1="386" y1="9" x2="386" y2="19"/><text x="366" y="8" text-anchor="middle">215 mm</text></g><text class="tg-lille" x="56" y="240">SET FRA SIDEN</text><text class="tg-lille" x="330" y="240">FORFRA</text></svg>`,
          tekst: `Skematisk. Dimensionen 215/65 R16C vist på hjulet. Kilder: <a href="${MICH_STR}" rel="noopener">Michelin: Van tyre size</a> og <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.003</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.003</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Samme dæk på samme aksel",
        tekst: [
          `Dækkene på samme aksel skal have samme dimension og være af samme type. Reservehjulet må godt have en anden dimension og type, når det kun er til midlertidig brug.`,
          `Synsvejledningen deler typen op på to måder. Dækket er enten radialdæk eller diagonaldæk, og det er enten et almindeligt dæk, et M+S-dæk eller et vinterdæk til krævende sneforhold med både M+S og alpesymbolet. Et dæk med alpesymbol og et dæk med kun M+S er altså to forskellige typer.`,
          `Skal et enkelt dæk skiftes efter en skade, skal det nye dæk derfor have samme dimension og type som det dæk, der sidder i den anden ende af akslen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Dækkene på samme aksel", "Tilladt"],
          raekker: [
            ["Samme dimension og type", "ja"],
            ["Forskellig dimension", "nej"],
            ["Ét dæk med M+S og ét uden", "nej"],
            ["Ét med alpesymbol og ét med kun M+S", "nej"],
            ["Radialdæk og diagonaldæk", "nej"],
            ["Reservehjul af en anden type", "Midlertidigt"]
          ],
          note: `Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.002, stk. 5 og 6</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal dækleverandøren vide",
    spoergsmaal_manchet: "Så får bilen dæk med den rigtige bæreevne.",
    spoergsmaal: [
      "Bilens model, årgang og registreringsnummer.",
      "Tilladt akseltryk for og bag fra registreringsattesten.",
      "Nuværende dimension og belastningsindeks.",
      "Om instruktionsbogen kræver C-dæk, eller om XL-dæk er godkendt.",
      "Om bilen har enkelt- eller tvillingmontering bag.",
      "Om bilen kører med fuld last eller trækker anhænger.",
      "Om bilen har direkte TPMS med sensorer i hjulene."
    ],
    faq: [
      ["Hvad betyder C på et dæk?", "At dækket er et vare- og lastbildæk med højere belastningsindeks end et personbildæk i samme størrelse. Michelin beskriver det som mærket for varebiler og lette erhvervskøretøjer."],
      ["Hvad betyder 109/107 på et varebildæk?", "109 er belastningsindekset ved enkeltmontering (1.030 kg pr. dæk), 107 ved tvillingmontering (975 kg pr. dæk)."],
      ["Må jeg køre med XL-dæk på en varebil?", "Det afhænger af bilens godkendelse. Dækkenes bæreevne skal mindst svare til det tilladte akseltryk. Michelin skriver, at XL og REINF er beregnet til personbiler. Volkswagens originale Caddy-vinterhjul er XL-dæk."],
      ["Skal en lille varebil have C-dæk?", "Ikke nødvendigvis. Michelin skriver, at varebiler på størrelse med en personbil, fx Berlingo og Kangoo, ikke behøver C-dæk. Står kravet ikke i instruktionsbogen, skal du overholde belastningsindekset."],
      ["Hvor stort skal belastningsindekset være?", "Så stort, at to dæk på samme aksel tilsammen bærer mindst det tilladte akseltryk. Det står i Færdselsstyrelsens synsvejledning."],
      ["Hvad betyder tallet i parentes efter belastningsindekset?", "Det er en ekstra mærkning med en højere hastighed og en lavere last. Michelins eksempel 107/105T (103H) betyder, at dækket bærer 875 kg pr. dæk ved højst 210 km/t."],
      ["Hvor står dækkets alder?", "I de sidste fire cifre i DOT-nummeret: uge og år. 4424 betyder uge 44 i 2024. Nummeret står kun på den ene side af dækket."],
      ["Hvilket hastighedsindeks skal vinterdæk have?", "Vinterdæk med M+S må være beregnet til mindst 160 km/t (Q), selv om bilens tophastighed er højere."],
      ["Hvad er et C2-dæk?", "Det er EU's betegnelse for dæk til varevogne. Personbildæk er C1, og dæk til tunge køretøjer er C3."],
      ["Hvilket støjregulativ skal dæk opfylde?", "Dæk skal opfylde FN-regulativ 117-04. Dæk godkendt efter 117-02 eller 117-03 og fremstillet senest 6. juli 2026 kan monteres til 6. januar 2029."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, gældende fra 1. september 2026 (afsnit 8.02 Hjul og dæk)", url: SYN, dato: "2026-10-07" },
      { navn: "Michelin: Reinforced tyres for utility vehicles (C, XL og REINF)", url: MICH_C, dato: "2026-10-07" },
      { navn: "Michelin: Van tyre size (mærkning og dobbelt belastningstal)", url: MICH_STR, dato: "2026-10-07" },
      { navn: "FDM: Loadindex-tabel", url: FDM, dato: "2026-10-07" },
      { navn: "Continental: Speed Index (hastighedsindeks)", url: CONT_SI, dato: "2026-10-07" },
      { navn: "Continental: Identifikation af dæk (DOT-nummer og produktionsuge)", url: CONT_DOT, dato: "2026-10-07" },
      { navn: "Continental: Dæktryk", url: CONT_TRYK, dato: "2026-10-07" },
      { navn: "Volkswagen shop: VW Caddy 16\" vinterkomplethjul på stålfælge", url: VW, dato: "2026-10-07" },
      { navn: "Thansen: Continental 215/65-16C 109/107T VanContact 4Season", url: TH1, dato: "2026-10-04" },
      { navn: "Thansen: Continental 215/65-16C 109/107R VanContact Winter 8P", url: TH2, dato: "2026-10-04" },
      { navn: "Thansen: Continental 215/65-16C 106/104R VanContact Winter", url: TH3, dato: "2026-10-04" },
      { navn: "EUR-Lex: Forordning (EU) 2020/740 om dækmærkning", url: EU, dato: "2026-10-04" },
      { navn: "Continental: Vinterdæk om sommeren (rullemodstand og forbrug)", url: CONT_VS, dato: "2026-10-07" },
      { navn: "EPREL: Produktdatablad 483054, Continental VanContact 4Season 215/65 R 16 C (C2)", url: EPREL_4S, dato: "2026-10-07" },
      { navn: "EPREL: Produktdatablad 511349, Nokian Seasonproof 245/40R18 (C1)", url: EPREL_C1, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Michelin nævner håndværk og pakkeudbringning som eksempler på kørsel med tung last, der kræver forstærkede dæk.", MICH_C],
    ["Michelin skriver, at C-dæk har en forstærket karkasse, og at forstærkede dæk er mere modstandsdygtige over for slag fra fx kantsten og huller i vejen.", MICH_C],
    ["Michelin: mindre varebiler på størrelse med en personbil (fx Citroën Berlingo og Renault Kangoo) har ikke pligt til C-dæk, men nogle gange til XL- eller REINF-dæk; står kravet om C-dæk ikke i instruktionsbogen, skal man kun overholde det angivne belastningsindeks.", MICH_C],
    ["Michelin: XL-mærkningen betyder, at dækket kan tåle højere tryk end standarddækket i samme størrelse.", MICH_C],
    ["Michelin skriver, at dækdimensionen altid står på dækkets sidevæg.", MICH_STR],
    ["Michelin: ved dobbeltmærkningen 205/65 R16C 107/105T (103H) svarer 107 til 975 kg pr. dæk ved enkeltmontering, 105 til 925 kg pr. dæk ved tvillingmontering, og punktet i parentes (103H) er en ekstra mærkning med højere hastighedsklasse og lavere last, 875 kg pr. dæk; hastighedsbogstavet efter det andet tal gælder for begge belastningstal.", MICH_STR],
    ["Michelin: man skal vælge belastningsniveau efter bilens last (eksemplet 235/65R16 Agilis CrossClimate med 115/113 eller 121/119).", MICH_C],
    ["Continental: det anbefalede dæktryk står i bilens brugermanual, på indersiden af tankdækslet eller på stolpen ved førerdøren.", CONT_TRYK],
    ["Continental: den anbefalede hastighedsklasse står i instruktionsbogen eller på dækmærkaten, der ofte sidder i dørkarmen ved førerdøren eller i handskerummet; hastighedsindekset fastsættes på prøvestande i laboratoriet, bogstaverne går fra A til Z, og H (tidligere high performance, 210 km/t) er en undtagelse fra den alfabetiske rækkefølge.", CONT_SI],
    ["FDM: et dæk mærket 88 må belastes med højst 560 kg; indeks 96 svarer til 710 kg.", FDM],
    ["Synsvejledningen 8.02.002: ved kontrol af dækkenes bæreevne kan en af STRO's databøger benyttes, og den samlede bæreevne i kg for dæk på samme aksel afrundes til nærmeste hele tal.", SYN],
    ["Synsvejledningen 8.02.002: en hastighedsbegrænser kan bruges til at reducere tophastigheden, hvis dækkenes bæreevne ikke er tilstrækkelig ved den oprindelige tophastighed (typisk mobilkran og lignende).", SYN],
    ["Synsvejledningen 8.02.002: dæk skal være dimensioneret og udformet, så det svarer til fælgen, og være tydeligt og holdbart mærket med dimensionsbetegnelse og fabrikantens og/eller regummieringsfirmaets navn eller varemærke; på regummierede dæk må der ikke være to forskellige mærkninger for bæreevne og hastighed.", SYN],
    ["Synsvejledningen 8.02.003: er fælgen et kendt fabrikat, og har synsvirksomheden ikke mistanke om, at den er beregnet til for lille belastning, skal der ikke anmodes om oplysninger fra fælgfabrikanten.", SYN],
    ["Synsvejledningen 8.02.002, stk. 5 og 6: dæk på samme aksel skal have samme dimension og type, bortset fra dæk til midlertidig brug; reservehjul kan have afvigende dimension og type; dæk opdeles efter opbygning (radial, diagonal) og anvendelseskategori (almindeligt dæk uden M+S, terræn- og vinterdæk med M+S, vinterdæk til krævende sneforhold med M+S og alpint symbol, dæk til midlertidig brug).", SYN],
    ["Volkswagens originale vinterkomplethjul til Caddy er monteret med 205/60 R16 96H XL (Semperit Master-Grip 2), har et maksimalt akseltryk på 1.420 kg, er retningsbestemte og sælges i sæt af 4 (2 højre og 2 venstre).", VW],
    ["EPREL-databladet for Continental VanContact 4Season 215/65 R 16 C 109/107T (C2) viser brændstofklasse B, vådgrebsklasse A, støjklasse B med 73 dB, godkendt til krævende sneforhold og en yderligere driftsbeskrivelse med belastningstal 106 og hastighedskategori T.", EPREL_4S],
    ["Continental: en højere rullemodstand giver et højere brændstofforbrug (om vinterdæk på varme veje).", CONT_VS],
    ["EPREL-databladet for et C1-dæk (Nokian Seasonproof) har linjen 'Dæk til krævende isforhold'; databladet for C2-dækket VanContact 4Season har ikke den linje, men har belastningstal for både enkelt- og dobbeltmontering.", EPREL_C1]
  ]
};
