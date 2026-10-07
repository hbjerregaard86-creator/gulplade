// Underside /til-varebilen/vinterhjul/vinterhjul-pris/ (07-10-2026)
var AS_ST = `https://www.astina.dk/transit-custom-ii-transporter-nsn-16-komplethjul-stalfaelge-6x120-fortuna-vinterdaek-p-155064.html`;
var AS_YO = `https://www.astina.dk/ford-transit-custom-ii-vw-transporter-nsn-16-komplethjul-stalfaelge-yokohama-vinterdaek-p-156089.html`;
var AS_CO = `https://www.astina.dk/transit-custom-ii-transporter-nsn-16-komplethjul-stalfaelge-6x120-continental-vinterdaek-p-155075.html`;
var AS_A16 = `https://www.astina.dk/transit-custom-ii-transporter-nsn-16-komplethjul-alufaelge-mak-gravel-6x120-fortuna-vinterdaek-p-155084.html`;
var AS_A17 = `https://www.astina.dk/transit-custom-ii-transporter-nsn-17-komplethjul-alufaelge-mak-gravel-6x120-fortuna-vinterdaek-p-155177.html`;
var AS_TP = `https://www.astina.dk/autel-mx-tpms-sensor-pr-stk-433mhz-solv-p-22089.html`;
var VWC = `https://shop.volkswagen.dk/shop/vw-caddy-16-2868p.html`;
var HVITO = `https://shop.hessel.dk/erhverv/ekstraudstyr/17-Vinterhjul-EQVVito-e-Tourer-/p-14400`;
var HSPR = `https://shop.hessel.dk/erhverv/ekstraudstyr/Staal-Vinterhjul-16/p-1738`;
var HES = `https://www.hessel.dk/vaerksted-service/ydelser/daek-og-hjulskifte`;
var HFORD = `https://www.hessel.dk/vaerksted-service/ydelser/daek-og-hjulskifte/ford-komplethjul`;
var THW = `https://www.thansen.dk/bil/daek-og-faelge/vinterdaek/16-daek/continental-215-65-16c-106-104r-vancontact-winter/n-1930828057/pn-245767309/`;
var THW8 = `https://www.thansen.dk/bil/daek-og-faelge/vinterdaek/16-daek/continental-215-65-16c-109-107r-vancontact-winter-8p/n-1930828057/pn-245851087`;
var AYV = `https://www.ayvens.com/da-dk/for-foerere/daek/`;
var CTPMS = `https://www.continental-tires.com/dk/da/tire-knowledge/tire-pressure-monitoring-system/`;
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var FSDAEK = `https://www.fstyr.dk/privat/krav-til-koeretoejer/vejledning-om-daek`;

var ASTINA3 = `Astina (<a href="${AS_ST}" rel="noopener">billigste stålsæt</a>, <a href="${AS_YO}" rel="noopener">Yokohama</a>, <a href="${AS_CO}" rel="noopener">Continental</a>)`;

module.exports = {
  id: "vinterhjul/vinterhjul-pris",
  side: {
    slug: "vinterhjul-pris",
    navn: "Pris på vinterhjul til varebil",
    titel: "Vinterhjul til varebil: priser 2026",
    kort: `Priser på komplette vinterhjul til Transit Custom, Transporter, Caddy, Vito og Sprinter, på løse vinterdæk, sensorer, hjulskift og dækhotel.`,
    beskrivelse: `Vinterhjul til varebil fra 7.640 kr.: komplette sæt til Transit Custom, Transporter, Caddy, Vito og Sprinter, løse dæk, sensorer og montering.`,
    manchet: `Et komplet sæt vinterhjul på stålfælge til en mellemstor varebil koster fra 7.640 kr. hos de danske forhandlere, vi har set på. Alufælge og originale sæt fra mærkeforhandlerne koster mere. Alle priser er vejledende og inkl. moms, og de er set den 7. oktober 2026, bortset fra Thansens, som er set den 4. oktober 2026.`,
    visuel: {
      hero: "vinterhjul",
      kort_fortalt: [
        ["Komplet sæt, Transit Custom II", "fra 7.640 kr.", "16\" stål med TPMS hos Astina"],
        ["VW Caddy, originalt sæt", "7.995 kr.", "16\" stål fra Volkswagen shop"],
        ["Løst vinterdæk, Thansen", "fra 1.449 kr.", "pr. dæk i 215/65 R16C"],
        ["TPMS-sensor, Astina", "319 kr.", "pr. stk."]
      ],
      toc: true,
      stribe: {
        ids: ["ford-transit-custom", "volkswagen-transporter", "vw-caddy"],
        titel: "Varebiler fra pristabellen med tilbud lige nu"
      }
    },
    afsnit: [
      {
        overskrift: "Komplette vintersæt",
        tekst: [
          `Et komplet sæt består af fire fælge med dæk, der er monteret og afbalanceret, så hjulene er klar til at sætte på bilen. Astinas sæt indeholder også centreringsringe og bespænding, altså møtrikker eller bolte. Vi har fundet sæt til fem modeller hos tre forhandlere.`,
          `Astina sælger de samme sæt til Transit Custom II og den nye Transporter. Den 4. oktober 2026 fandt vi ingen komplette sæt til Renault Trafic og Opel Vivaro med opslåede priser hos danske forhandlere.`,
          `Priserne i webshoppene ændrer sig. Astinas billigste sæt kostede 7.639 kr. den 4. oktober og 7.640 kr. den 7. oktober 2026.`
        ],
        tabel: {
          kolonner: ["Bil", "Sæt", "Forhandler", "Pris"],
          raekker: [
            ["Ford Transit Custom II / VW Transporter (2023-)", "16\" stål, 215/65-16, TPMS", "Astina", "7.640 kr."],
            ["Ford Transit Custom II / VW Transporter (2023-)", "16\" stål, Yokohama W.Drive WY01 215/65-16, TPMS", "Astina", "9.110 kr."],
            ["Ford Transit Custom II / VW Transporter (2023-)", "16\" stål, Continental VanContact Winter 215/65-16, TPMS", "Astina", "10.287 kr."],
            ["VW Caddy", "16\" stål, Semperit Master-Grip 2 205/60 R16 96H XL", "Volkswagen shop", "7.995 kr."],
            ["Mercedes Sprinter (2006–2017)", "16\" stål, Continental 235/65 R16, med montering", "Hessel", "13.305 kr."],
            ["Mercedes eVito Tourer / EQV (2014–03/2024)", "17\" alu, Goodyear, TPMS", "Hessel", "20.065 kr."]
          ],
          note: `Kilder: ${ASTINA3}, <a href="${VWC}" rel="noopener">Volkswagen shop</a>, Hessel (<a href="${HVITO}" rel="noopener">Vito</a>, <a href="${HSPR}" rel="noopener">Sprinter</a>), set den 7. oktober 2026. Vejledende priser. Astina: plus fragt, uden montering på bilen. Astina kalder det billigste sæt »m. Fortuna Vinterdæk«, men specifikationen nævner Landsail-dæk. Volkswagen: uden montering. Hessel eVito Tourer og EQV: kun til elbilerne, montering kan tilvælges. Hessel Sprinter: inkl. montering og afbalancering.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Transit Custom II / Transporter (2023-), billigste sæt", 7640, "16\" stål, TPMS, Astina"],
            ["VW Caddy, Semperit Master-Grip 2 205/60 R16 96H XL", 7995, "16\" stål, Volkswagen shop"],
            ["Transit Custom II / Transporter (2023-), Yokohama 215/65-16", 9110, "16\" stål, TPMS, Astina"],
            ["Transit Custom II / Transporter (2023-), Continental 215/65-16", 10287, "16\" stål, TPMS, Astina"],
            ["Mercedes Sprinter (2006–2017), Continental 235/65 R16", 13305, "16\" stål, med montering, Hessel"],
            ["Mercedes eVito Tourer / EQV (2014–03/2024), Goodyear", 20065, "17\" alu, TPMS, Hessel"]
          ],
          note: `Søjlerne viser prisen for fire hjul med dæk på fælg. Kilder: ${ASTINA3}, <a href="${VWC}" rel="noopener">Volkswagen shop</a> og Hessel (<a href="${HVITO}" rel="noopener">Vito</a>, <a href="${HSPR}" rel="noopener">Sprinter</a>), set den 7. oktober 2026. Hos Astina kommer fragten oveni, og montering på bilen er ikke med. Volkswagens sæt er uden montering. Hessels Vito-sæt passer kun til elbilerne eVito Tourer og EQV, og montering kan tilvælges. Hessels Sprinter-sæt er med montering og afbalancering.`
        }
      },
      {
        overskrift: "Det følger med i sættet",
        tekst: [
          `Sættene er ikke ens, selvom de alle er fire hjul. Hos Astina følger der TPMS-sensorer med, altså de tryksensorer, som bilens dæktrykovervågning bruger. Hessels sæt til eVito Tourer og EQV har fire dæktryksensorer og fire centerkapsler.`,
          `Volkswagen skriver, at Caddy-sættets pris er uden montering, og at sættet kun sendes gratis til den Volkswagen-forhandler, du vælger. Hos Astina kommer fragten oveni, og sættet er klar til at blive sat på bilen. Hessels Sprinter-sæt er det eneste af sættene, hvor montering og afbalancering er med i prisen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Med i prisen", "Astina", "Volkswagen shop", "Hessel, Vito", "Hessel, Sprinter"],
          raekker: [
            ["Dæk monteret på fælgene", "ja", "ja", "ja", "ja"],
            ["TPMS-sensorer", "ja", "ikke nævnt", "ja", "ikke nævnt"],
            ["Montering på bilen", "nej", "nej", "tilvalg", "ja"],
            ["Fragt", "kommer oveni", "gratis til Volkswagen-forhandler", "ikke nævnt", "ikke nævnt"]
          ],
          note: `Kilder: ${ASTINA3}, <a href="${VWC}" rel="noopener">Volkswagen shop</a> og Hessel (<a href="${HVITO}" rel="noopener">Vito</a>, <a href="${HSPR}" rel="noopener">Sprinter</a>), set den 7. oktober 2026. Astina leverer sættet monteret og afbalanceret, så det er klar til montering på bilen.`
        }
      },
      {
        overskrift: "Det afgør prisen",
        tekst: [
          `Prisen på et vintersæt afhænger især af fem ting. Nogle af dem kan du se i sættets navn, mens andre står i den lille skrift om fragt og montering.`
        ],
        punkter: [
          `<strong>Fælge.</strong> Stål eller alu, og originale fælge fra mærkeforhandleren eller fælge fra et andet mærke.`,
          `<strong>Dækmærke.</strong> Astinas tre stålsæt til Transit Custom II har samme fælg og koster 7.640 kr., 9.110 kr. og 10.287 kr. med hver sine dæk.`,
          `<strong>TPMS-sensorer.</strong> Astinas og Hessels Vito-sæt leveres med sensorer.`,
          `<strong>Montering.</strong> Hessels værkstedsside lover gratis montering og afbalancering ved køb af komplette hjul. Hos Astina og Volkswagen er montering ikke med i prisen.`,
          `<strong>Belastningsindeks.</strong> Dækkene skal bære bilens tilladte akseltryk.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Komplet vinterhjul med dæk, fælg og TPMS-sensor"><circle class="tg-profil" cx="130" cy="108" r="85"/><circle class="tg-hylde" cx="130" cy="108" r="55"/><circle class="tg-kasse" cx="130" cy="108" r="16"/><rect class="tg-modul" x="168" y="98" width="14" height="20"/><g class="tg-call"><line x1="190" y1="48" x2="244" y2="40"/><circle cx="190" cy="48" r="3"/><text class="tg-call__navn" x="250" y="36">Dækmærke</text><text class="tg-call__under" x="250" y="50">og belastningsindeks</text></g><g class="tg-call"><line x1="182" y1="108" x2="244" y2="84"/><circle cx="182" cy="108" r="3"/><text class="tg-call__navn" x="250" y="80">TPMS-sensorer</text><text class="tg-call__under" x="250" y="94">med i nogle sæt</text></g><g class="tg-call"><line x1="160" y1="150" x2="244" y2="128"/><circle cx="160" cy="150" r="3"/><text class="tg-call__navn" x="250" y="124">Fælge</text><text class="tg-call__under" x="250" y="138">stål eller alu</text></g><text class="tg-lille" x="0" y="214">MONTERING ER IKKE ALTID MED I PRISEN</text></svg>`,
          tekst: `Skematisk. De dele af et komplet vinterhjul, der påvirker prisen.`
        }
      },
      {
        overskrift: "Samme fælg, forskellige dæk",
        tekst: [
          `Astinas tre sæt på 16" stålfælge til Transit Custom II og Transporter har den samme fælg og TPMS-sensorer. Forskellen på 2.647 kr. mellem det billigste og det dyreste sæt ligger derfor i dækkene.`,
          `Astina oplyser tallene fra EU-dækmærket på flere af sættene. Sættet med Continental VanContact Winter har brændstofklasse C, vådgrebsklasse B og 73 dB. Sættet med Yokohama W.Drive WY01 har brændstofklasse E, vådgrebsklasse B og 72 dB.`,
          `Brændstofklassen viser dækkets rullemodstand og påvirker forbruget af diesel eller strøm. Vådgrebet viser, hvor godt dækket bremser på våd vej, og støjen er målt uden for bilen. Mere om mærket på siden om <a href="/til-varebilen/vinterhjul/daek-til-elvarebil/">dæk til elvarebil</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Continental VanContact Winter, 16\" stål", "10.287", "kr., brændstof C, vådgreb B, 73 dB"],
            ["Yokohama W.Drive WY01, 16\" stål", "9.110", "kr., brændstof E, vådgreb B, 72 dB"],
            ["Billigste sæt, 16\" stål", "7.640", "kr., dækmærke ikke oplyst"]
          ],
          note: `Astina kalder det billigste sæt »m. Fortuna Vinterdæk«, men specifikationen nævner Landsail-dæk. Kilde: ${ASTINA3}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Stål eller alu, 16 eller 17 tommer",
        tekst: [
          `Astina sælger også sæt på alufælge af mærket MAK Gravel. Sættet på 16" alu har de samme Yokohama-dæk som det ene stålsæt, så her kan du se, hvad alufælgene koster. Med de samme dæk koster alufælgene 1.177 kr. mere end stålfælgene.`,
          `Sættet på 17" alu har Fortuna Gowin Van i 215/60 R17 og koster 11.757 kr. Dækkene har brændstofklasse C, vådgrebsklasse A og 70 dB, oplyser Astina. Alle sættene er monteret og afbalanceret på fælgene, men ikke på bilen, og fragten kommer oveni.`,
          `Astina kalder begge alusæt »m. Fortuna Vinterdæk«, men specifikationen for 16"-sættet nævner Yokohama W.Drive WY01 109T.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["16\" stål, billigste sæt", 7640, "dæk efter Astinas specifikation: Landsail"],
            ["16\" stål, Yokohama W.Drive WY01", 9110],
            ["16\" alu MAK Gravel, Yokohama W.Drive WY01", 10287],
            ["17\" alu MAK Gravel, Fortuna Gowin Van", 11757]
          ],
          note: `Sæt til Transit Custom II og Transporter med TPMS-sensorer. Kilder: Astina (<a href="${AS_ST}" rel="noopener">16" stål</a>, <a href="${AS_YO}" rel="noopener">16" stål, Yokohama</a>, <a href="${AS_A16}" rel="noopener">16" alu</a>, <a href="${AS_A17}" rel="noopener">17" alu</a>), set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fælgens bæreevne",
        tekst: [
          `Fælgen skal være beregnet til bilens tilladte akseltryk, skriver Færdselsstyrelsen i synsvejledningen. Astina oplyser bæreevnen pr. fælg i sættene til Transit Custom II. Den er 1.000 kg for stålfælgen og 1.215 kg for alufælgen MAK Gravel.`,
          `Astina skriver, at alle fælge har korrekt bæreevne til den bil, sættet er beregnet til. Volkswagen oplyser et maksimalt akseltryk på 1.420 kg for Caddy-sættet.`,
          `Køber du et sæt, der ikke er lavet til netop din model, er det bæreevnen pr. fælg og akseltrykket i registreringsattesten, der skal passe sammen. Mere om dækkenes bæreevne i <a href="/til-varebilen/vinterhjul/c-daek/">C-dæk til varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To fælge side om side: stålfælgen i Astinas sæt bærer op til 1.000 kg, og alufælgen MAK Gravel bærer op til 1.215 kg."><text class="tg-lille" x="200" y="16" text-anchor="middle">BÆREEVNE PR. FÆLG I ASTINAS SÆT</text><circle class="tg-modul" cx="100" cy="92" r="55"/><circle class="tg-hylde" cx="100" cy="92" r="42"/><circle class="tg-kasse" cx="100" cy="92" r="12"/><circle class="tg-modul" cx="300" cy="92" r="55"/><circle class="tg-rum" cx="300" cy="92" r="42"/><line class="tg-skillevaeg" x1="300" y1="92" x2="300" y2="50"/><line class="tg-skillevaeg" x1="300" y1="92" x2="260" y2="79"/><line class="tg-skillevaeg" x1="300" y1="92" x2="275" y2="126"/><line class="tg-skillevaeg" x1="300" y1="92" x2="325" y2="126"/><line class="tg-skillevaeg" x1="300" y1="92" x2="340" y2="79"/><circle class="tg-kasse" cx="300" cy="92" r="12"/><text class="tg-fremhaev" x="100" y="168" text-anchor="middle">Stålfælg 16"</text><text x="100" y="186" text-anchor="middle">op til 1.000 kg</text><text class="tg-fremhaev" x="300" y="168" text-anchor="middle">Alufælg MAK Gravel</text><text x="300" y="186" text-anchor="middle">op til 1.215 kg</text></svg>`,
          tekst: `Skematisk. Fælgenes bæreevne, som Astina oplyser den. Kilder: Astina (<a href="${AS_CO}" rel="noopener">16" stål</a>, <a href="${AS_A16}" rel="noopener">16" alu</a>) og <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.003</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "TPMS i vintersættet",
        tekst: [
          `Har bilen direkte dæktrykovervågning, skal vinterhjulene også have sensorer. Astinas Transit Custom-sæt leveres med TPMS-sensorer, og Hessels sæt til eVito Tourer og EQV med fire dæktryksensorer. Reglerne står i <a href="/til-varebilen/vinterhjul/daektryk-og-moensterdybde/">dæktryk og mønsterdybde</a>.`,
          `Varebiler, der er registreret første gang fra 1. januar 2026, skal have dæktrykovervågning. Et indirekte system bruger bilens ABS-sensorer og kræver ingen sensorer i hjulene, men skal nulstilles efter hjulskiftet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Snit gennem dæk og fælg med TPMS-sensoren på ventilen inde i hjulet"><path d="M80,150 V70 Q80,40 110,40 H290 Q320,40 320,70 V150 H300 V75 Q300,60 285,60 H115 Q100,60 100,75 V150 Z" class="tg-rum"/><rect x="70" y="150" width="260" height="12" class="tg-hylde"/><rect x="182" y="132" width="36" height="18" rx="3" class="tg-modul"/><line x1="200" y1="162" x2="200" y2="196" class="tg-doer"/><path d="M226,128 Q236,120 226,112" fill="none" class="tg-skinne-tynd"/><path d="M234,134 Q250,120 234,106" fill="none" class="tg-skinne-tynd"/><text x="114" y="112" class="tg-lille">LUFTRUM</text><g class="tg-call"><line x1="200" y1="132" x2="196" y2="98"/><circle cx="200" cy="132" r="3"/><text x="170" y="78" class="tg-call__navn">TPMS-sensor</text><text x="170" y="92" class="tg-call__under">batteri og sender</text></g><g class="tg-call"><line x1="200" y1="190" x2="240" y2="206"/><circle cx="200" cy="190" r="3"/><text x="246" y="206" class="tg-call__navn">Ventil</text><text x="246" y="220" class="tg-call__under">sensoren sidder på den</text></g><g class="tg-call"><line x1="84" y1="156" x2="40" y2="196"/><circle cx="84" cy="156" r="3"/><text x="10" y="206" class="tg-call__navn">Fælg</text></g><g class="tg-call"><line x1="90" y1="60" x2="40" y2="30"/><circle cx="90" cy="60" r="3"/><text x="10" y="22" class="tg-call__navn">Dæk</text></g></svg>`,
          tekst: `Skematisk. TPMS-sensoren inde i hjulet. Kilder: <a href="${CTPMS}" rel="noopener">Continental</a> og <a href="${AS_TP}" rel="noopener">Astina</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "TPMS-sensorer for sig",
        tekst: [
          `Har bilen direkte TPMS, skal alle hjul have sensorer, skriver Færdselsstyrelsen i synsvejledningen, afsnit 8.02.004. Hos Astina koster en løs Autel MX-sensor på 433 MHz 319 kr. pr. stk., og fragten kommer oveni. Fire sensorer koster 1.276 kr. før montering og kodning.`,
          `Sensoren sidder på fælgen, bygget sammen med ventilen, skriver Continental. Den er batteridrevet og sender trykket trådløst til bilen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Autel MX-sensor, 433 MHz", "319", "kr. pr. stk."],
            ["Fire sensorer", "1.276", "kr. før montering og kodning"]
          ],
          note: `Kilde: <a href="${AS_TP}" rel="noopener">Astina: Autel MX TPMS-sensor</a>, set den 7. oktober 2026. Fragten kommer oveni.`
        }
      },
      {
        overskrift: "Originale komplethjul fra mærkeforhandleren",
        tekst: [
          `Mærkeforhandlerne sælger originale sæt, hvor fælgene er fra bilens fabrikant. Hessel skriver, at alle vinterhjul fra Ford er fremstillet og testet til den enkelte model. Hessels komplethjul til Ford er sammensat sådan:`
        ],
        punkter: [
          `<strong>Fælge og navkapsler.</strong> Fælgene og navkapslerne er originale fra Ford, i stål eller letmetal.`,
          `<strong>Sensorer.</strong> Dæktrykssensorerne er originale.`,
          `<strong>Dæk.</strong> Dækkene er fra Continental eller tilsvarende mærker.`,
          `<strong>Montering.</strong> Montering og afbalancering følger med.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Volkswagens originale sæt til Caddy er retningsbestemt, så dækkene skal rulle en bestemt vej. Derfor sælges det som fire hjul, to til højre side og to til venstre.`,
          `Kilder: <a href="${HFORD}" rel="noopener">Hessel, Ford komplethjul</a> og <a href="${VWC}" rel="noopener">Volkswagen shop</a>, set den 7. oktober 2026. Webshoppernes priser er uden montering.`
        ]
      },
      {
        overskrift: "Løse vinterdæk",
        tekst: [
          `Har bilen allerede et sæt fælge, kan du nøjes med at købe dækkene. Thansens priser pr. dæk i 215/65 R16C ses i tabellen.`,
          `Hessel forklarer forskellen sådan. Ved et dækskift monteres nye dæk på bilens egne fælge, og ved et hjulskift tages hele hjulet med fælg og dæk af. Med løse dæk skal dækkene altså monteres på fælgene, før de kan sættes på bilen.`
        ],
        tabel: {
          kolonner: ["Dæk", "Indeks", "Pr. dæk", "4 dæk"],
          raekker: [
            ["Continental VanContact Winter", "106/104R", "1.449 kr.", "5.796 kr."],
            ["Continental VanContact Winter 8P", "109/107R", "1.469 kr.", "5.876 kr."]
          ],
          note: `Kilde: Thansens produktsider (<a href="${THW}" rel="noopener">1</a>, <a href="${THW8}" rel="noopener">2</a>), set den 4. oktober 2026. Montage koster 149 kr. (dæk på fælg) eller 249,95 kr. (dæk på fælg og bil).`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="To løsninger side om side. Til venstre et komplet sæt, hvor fælg, dæk og sensor skiftes som ét hjul. Til højre løse dæk, der monteres på bilens egne fælge."><text class="tg-fremhaev" x="10" y="20">Komplet sæt</text><text class="tg-lille" x="10" y="36">HJULSKIFT</text><circle class="tg-modul" cx="100" cy="102" r="55"/><circle class="tg-modul" cx="100" cy="102" r="33"/><circle class="tg-kasse" cx="100" cy="102" r="9"/><rect class="tg-kuffert" x="126" y="95" width="10" height="14"/><text x="10" y="180">Fælg, dæk og sensor</text><text x="10" y="196">skiftes som ét hjul</text><line class="tg-skillevaeg" x1="200" y1="10" x2="200" y2="200"/><text class="tg-fremhaev" x="214" y="20">Løse dæk</text><text class="tg-lille" x="214" y="36">DÆKSKIFT</text><circle class="tg-modul" cx="300" cy="102" r="55"/><circle class="tg-hylde" cx="300" cy="102" r="33"/><circle class="tg-kasse" cx="300" cy="102" r="9"/><text x="214" y="180">Nye dæk på bilens</text><text x="214" y="196">egne fælge</text></svg>`,
          tekst: `Skematisk. Den fremhævede del er det, du køber. Kilder: <a href="${HES}" rel="noopener">Hessel</a> og <a href="${VWC}" rel="noopener">Volkswagen shop</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Montering og afbalancering",
        tekst: [
          `Hos Thansen koster montage 149 kr. for dæk på fælg og 249,95 kr. for dæk på fælg og bil. Hessel tager 1.000 kr. for et dækskift, hvor løse dæk monteres på fælgene og sættes på bilen, og 625 kr. for medlemmer af Hessels fordelsklubber.`,
          `Afbalancering betyder, at vægten fordeles ligeligt rundt om hjulet. Hessel afbalancerer gratis, når du køber komplette hjul, og skriver, at hjul uden afbalancering giver rystelser og slid på ophæng, styretøj og dæk.`,
          `Hos Astina og Volkswagen er montering på bilen ikke med i prisen. Medlemmer af Hessels fordelsklubber for Mercedes, Renault, Ford og Dacia får to gratis hjulskift om året.`
        ],
        efter: [
          `Kilder: <a href="${HES}" rel="noopener">Hessel</a>, set den 7. oktober 2026, og Thansen (<a href="${THW}" rel="noopener">produktside</a>), set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Skift og opbevaring",
        tekst: [
          `Et hjulskift koster 500 kr. hos Hessel, når hjulene står på Hessels dækhotel, og 800 kr., når du selv kommer med dem. Dækhotellet koster 495 kr. pr. sæson, eller 995 kr. med hjulskift. Priserne gælder komplette hjul.`,
          `Hessel vasker og kontrollerer hjulene og opbevarer dem mørkt, køligt og tørt. Flere priser i <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel til varebil</a>.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Dækhotel pr. sæson", 495],
            ["Hjulskift, hjulene står på Hessels dækhotel", 500],
            ["Dækskift for medlemmer af fordelsklub", 625],
            ["Hjulskift, du kommer selv med hjulene", 800],
            ["Dækhotel med hjulskift pr. sæson", 995],
            ["Dækskift, løse dæk på fælg og bil", 1000]
          ],
          note: `Hessels priser. Kilde: <a href="${HES}" rel="noopener">Hessel: Dækskifte, hjulskifte og dækhotel</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Prisen over et år",
        tekst: [
          `Et eksempel med Hessels priser viser udgiften over tid. Står hjulene på dækhotellet med hjulskift, koster det 995 kr. pr. sæson. Med en vintersæson og en sommersæson bliver det 1.990 kr. om året, og over fire år bliver det 7.960 kr.`,
          `Hessel anbefaler at skifte til vinterhjul, når temperaturen ligger stabilt omkring 7 °C eller derunder. Færdselsstyrelsen anbefaler at skifte tilbage til sommerdæk, når risikoen for frost er ovre, typisk i løbet af foråret.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Omkring 7 °C eller koldere", "Hessel anbefaler at skifte til vinterhjul. Sommerhjulene kommer på dækhotellet."],
            ["Vintersæsonen", "Dækhotel med hjulskift koster 995 kr. hos Hessel."],
            ["Når frosten er ovre", "Færdselsstyrelsen anbefaler at skifte til sommerdæk, typisk i løbet af foråret."],
            ["Sommersæsonen", "Vinterhjulene står på dækhotellet, igen for 995 kr. med hjulskift."]
          ],
          note: `Eksemplet giver 1.990 kr. om året. Kilder: <a href="${HES}" rel="noopener">Hessel</a> og <a href="${FSDAEK}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Vinterhjul eller helårsdæk",
        tekst: [
          `Helårsdæk kræver ingen skift og ingen opbevaring, så udgiften til hjulskift og dækhotel falder væk. Færdselsstyrelsen skriver, at helårsdæk er en markedsføringsbetegnelse, og at mærkningen og egenskaberne varierer mellem fabrikaterne. Det er mærkningen på dækket, der viser, om det er godkendt som vinterdæk.`,
          `Priser og sammenligning står i <a href="/til-varebilen/vinterhjul/helaarsdaek-til-varebil/">helårsdæk til varebil</a>.`
        ]
      },
      {
        overskrift: "Vinterhjul i leasingaftalen",
        tekst: [
          `Hos Ayvens kan sæsondæk være en del af leasingaftalen, og det står i kontrakten. Leveres bilen mellem 15. oktober og 31. marts, kommer den med vinterdæk på stålfælge uden hjulkapsler. Føreren kan få skiftet dækkene hos Dækpartner eller Superdæk, skriver Ayvens.`,
          `{{daek_ikke}} af de {{tilbud}} tilbud, vi har samlet på gulplade.dk, skriver, at dæk ikke er med i ydelsen, og {{daek_tavs}} nævner det ikke. Mere om dæk i leasingaftalen på siden om <a href="/til-varebilen/vinterhjul/">vinterhjul</a>.`
        ],
        efter: [
          `Kilde: <a href="${AYV}" rel="noopener">Ayvens: Dæk til din leasingbil</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Leveringstid og ventetid",
        tekst: [
          `Flere af Astinas sæt stod den 7. oktober 2026 som restordre med ubekræftet leveringstid, mens sættet med Yokohama-dæk havde en forventet leveringstid på 3–5 dage. Hessel oplyser 3–4 ugers leveringstid på sættet til eVito Tourer og EQV.`,
          `Ayvens skriver, at der kan være lang ventetid hos værkstederne i højsæsonen. Står hjulene på Hessels dækhotel, beder Hessel om, at du booker tid mindst en uge i forvejen.`
        ],
        efter: [
          `Kilder: ${ASTINA3}, <a href="${HVITO}" rel="noopener">Hessel, Vito</a>, <a href="${HES}" rel="noopener">Hessel, dækhotel</a> og <a href="${AYV}" rel="noopener">Ayvens</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer sættet til bilen første gang.",
    spoergsmaal: [
      "Registreringsnummer, model og årgang.",
      "Boltmønster og fælgstørrelse, fx 6x120 og 16\".",
      "Dimension og belastningsindeks på de nuværende dæk.",
      "Tilladt akseltryk for og bag.",
      "Om bilen har direkte TPMS.",
      "Om sættet skal monteres og afbalanceres.",
      "Stål- eller alufælge."
    ],
    faq: [
      ["Hvad koster vinterhjul til en Transit Custom?", "Hos Astina fra 7.640 kr. for 16\" stålfælge med vinterdæk og TPMS-sensorer, plus fragt og uden montering på bilen (7. oktober 2026)."],
      ["Hvad koster vinterhjul til en VW Caddy?", "Volkswagens originale 16\" vinterkomplethjul på stålfælge koster 7.995 kr. uden montering (7. oktober 2026)."],
      ["Hvad koster et vinterdæk til en varebil?", "Hos Thansen fra 1.449 kr. pr. dæk for Continental VanContact Winter i 215/65 R16C (4. oktober 2026)."],
      ["Er montering med i prisen?", "Det varierer. Hessels værkstedsside lover gratis montering og afbalancering ved køb af komplette hjul, og Hessels Sprinter-sæt er med montering. Astina og Volkswagen sælger uden montering."],
      ["Hvad koster en TPMS-sensor til vinterhjul?", "En Autel MX-sensor koster 319 kr. pr. stk. hos Astina (oktober 2026). Montering og kodning kommer oveni."],
      ["Hvor meget dyrere er vinterhjul på alufælge?", "Hos Astina koster sættet til Transit Custom II med Yokohama-dæk 9.110 kr. på 16\" stål og 10.287 kr. på 16\" alu, altså 1.177 kr. mere, plus fragt (7. oktober 2026)."],
      ["Hvad koster hjulskift og dækhotel?", "Hos Hessel koster et hjulskift 500 kr., når hjulene står på dækhotellet, og 800 kr. ellers. Dækhotel med hjulskift koster 995 kr. pr. sæson (7. oktober 2026)."],
      ["Kan vinterhjul være med i leasingaftalen?", "Ja, hos Ayvens kan sæsondæk være en del af aftalen. Leveres bilen mellem 15. oktober og 31. marts, kommer den med vinterdæk på stålfælge."]
    ],
    kilder: [
      { navn: "Astina: Transit Custom II og Transporter 16\" komplethjul, stålfælge, »Fortuna vinterdæk« (specifikation: Landsail)", url: AS_ST, dato: "2026-10-07" },
      { navn: "Astina: Transit Custom II og Transporter 16\" komplethjul, stålfælge, Yokohama vinterdæk", url: AS_YO, dato: "2026-10-07" },
      { navn: "Astina: Transit Custom II og Transporter 16\" komplethjul, stålfælge, Continental vinterdæk", url: AS_CO, dato: "2026-10-07" },
      { navn: "Volkswagen shop: VW Caddy 16\" vinterkomplethjul på stålfælge", url: VWC, dato: "2026-10-07" },
      { navn: "Hessel: 17\" vinterhjul til EQV og Vito e-Tourer", url: HVITO, dato: "2026-10-07" },
      { navn: "Hessel: Stål vinterhjul 16\" til Sprinter", url: HSPR, dato: "2026-10-07" },
      { navn: "Hessel: Dækskifte, hjulskifte og dækhotel", url: HES, dato: "2026-10-07" },
      { navn: "Thansen: Continental 215/65-16C 106/104R VanContact Winter", url: THW, dato: "2026-10-04" },
      { navn: "Thansen: Continental 215/65-16C 109/107R VanContact Winter 8P", url: THW8, dato: "2026-10-04" },
      { navn: "Ayvens: Dæk til din leasingbil", url: AYV, dato: "2026-10-07" },
      { navn: "Astina: Transit Custom II og Transporter 16\" komplethjul, alufælge MAK Gravel (specifikation: Yokohama W.Drive WY01)", url: AS_A16, dato: "2026-10-07" },
      { navn: "Astina: Transit Custom II og Transporter 17\" komplethjul, alufælge MAK Gravel, Fortuna Gowin Van", url: AS_A17, dato: "2026-10-07" },
      { navn: "Astina: Autel MX TPMS-sensor, 433 MHz, pr. stk.", url: AS_TP, dato: "2026-10-07" },
      { navn: "Continental: Dæktryksovervågningssystem (TPMS)", url: CTPMS, dato: "2026-10-04" },
      { navn: "Hessel: Originale Ford komplethjul", url: HFORD, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, afsnit 8.02", url: SYN, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om dæk", url: FSDAEK, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: Astinas billigste 16\" stålsæt til Transit Custom II / Transporter koster 7.640 kr. inkl. moms plus fragt (før 7.639 kr. den 4. oktober). Produktnavnet siger »m. Fortuna Vinterdæk«, men specifikationen nævner 215/65-16 Landsail; TPMS inkluderet.", AS_ST],
    ["RETTET: Astinas 16\" stålsæt med Yokohama vinterdæk koster 9.110 kr. inkl. moms plus fragt (før 9.119 kr.); dæk Yokohama W.Drive WY01 215/65-16 109T, brændstof E, vådgreb B, 72 dB, inkl. TPMS-sensorer, fælg max belastning 1000 kg.", AS_YO],
    ["RETTET: Astinas 16\" stålsæt med Continental vinterdæk koster 10.287 kr. inkl. moms plus fragt (før 10.289 kr.); dæk Continental VanContactWinter 215/65-16 109R, brændstof C, vådgreb B, 73 dB, inkl. TPMS-sensorer, fælg max belastning 1000 kg.", AS_CO],
    ["RETTET: Astinas 16\" alusæt MAK Gravel koster 10.287 kr. (før 10.289 kr.). Produktnavnet siger »m. Fortuna Vinterdæk«, men specifikationen nævner Yokohama W.Drive WY01 109T 215/65-16 (brændstof E, vådgreb B, 72 dB); fælg max belastning 1215 kg. Den gamle side skrev, at de tre alu- og stålsæt havde samme Fortuna-dæk, og at alufælgene kostede 2.650 kr. mere i 16\"; med samme Yokohama-dæk er forskellen 1.177 kr. (10.287 − 9.110). Den gamle sides 4.120 kr. for 17\" er udeladt, fordi 17\"-sættet har andre dæk end stålsættet.", AS_A16],
    ["RETTET: Astinas 17\" alusæt MAK Gravel koster 11.757 kr. (før 11.759 kr.); dæk Fortuna Gowin Van 215/60-17 109T, brændstof C, vådgreb A, 70 dB, inkl. TPMS-sensorer, fælg max belastning 1215 kg pr. fælg.", AS_A17],
    ["Astina: sættene leveres med 4 fælge og 4 dæk inkl. centreringsringe og bespænding, færdigmonteret og afbalanceret og klar til montering på bilen; alle fælge har korrekt bæreevne til det specifikke køretøj; de tre 16\" stålsæt har samme fælg 6.50x16 6x120 ET50 CB74.6.", AS_CO],
    ["Astina den 7. oktober 2026: flere sæt står som restordre med ubekræftet leveringstid; Yokohama-sættet har forventet leveringstid 3-5 dage.", AS_YO],
    ["Volkswagen shop: VW Caddy 16\" vinterkomplethjul koster 7.995 kr. inkl. moms, uden montering; maksimalt akseltryk 1.420 kg; retningsbestemte og sælges i sæt af 4 (2 højre og 2 venstre); sendes kun via Collect@store som gratis levering til den valgte Volkswagen Partner.", VWC],
    ["Hessel: 17\" vinterhjul til EQV/Vito e-Tourer (Vito 2014-03/2024) koster 20.065 kr. inkl. moms og indeholder 4 Goodyear vinterdæk, 4 alufælge, 4 sorte centerkapsler og 4 dæktrykssensorer; montering kan tilvælges; leveringstid 3-4 uger.", HVITO],
    ["Hessel: originale Mercedes-Benz 16\" stålfælge med Continental vinterdæk 235/65R16 til Sprinter 2006-2017 (chassis, kassevogn, kombi) koster 13.305 kr. inkl. moms og inkl. montering og afbalancering.", HSPR],
    ["Hessel: hjulskifte 500 kr. med hjul på Hessels dækhotel, 800 kr. ellers; dækskifte (løse dæk på fælge og bil) 1.000 kr., 625 kr. for medlemmer af fordelsklubber; dækhotel 495 kr. pr. sæson, 995 kr. inkl. hjulskift; priserne gælder komplette hjul; opbevaring mørkt, køligt og tørt med vask og kontrol; book min. én uge i forvejen.", HES],
    ["Hessel: dækskifte er nye dæk på eksisterende fælge, hjulskifte er hele hjulet med dæk og fælg; afbalancering gratis ved køb af komplette hjul; ikke-afbalancerede hjul giver rystelser og slid på ophæng, styretøj, dæk og roterende dele; fordelsklubber for Mercedes, Renault, Ford og Dacia giver 2 årlige gratis hjulskift; tommelfingerregel: skift ved stabilt omkring 7 °C eller derunder.", HES],
    ["Hessel: alle vinterhjul fra Ford er særligt fremstillet og gennemtestet med udgangspunkt i den enkelte model.", HFORD],
    ["Ayvens: dæk kan skiftes hos Dækpartner eller Superdæk; der kan være lang ventetid hos værkstederne i højsæsonen.", AYV],
    ["Synsvejledningen 8.02.003: fælge skal være beregnet til en belastning svarende til det tilladte akseltryk.", SYN],
    ["Færdselsstyrelsen: helårsdæk er en markedsføringsbetegnelse, og mærkning og egenskaber varierer mellem fabrikater; skift til sommerdæk, når risikoen for frost er ovre, typisk i løbet af foråret.", FSDAEK]
  ]
};
