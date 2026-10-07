// Underside /til-varebilen/varerumssikring/alarm-og-gps-tracker/ (07-10-2026)
var AL1 = `https://autolock.dk/tyverisikring/varebil/`;
var AL2 = `https://autolock.dk/tyverisikring/varebil/?p=2`;
var ALDEFA = `https://autolock.dk/defa/`;
var DEFAABO = `https://www.defa.com/dk/about-defa/warmup-finder-link/`;
var DEFAALARM = `https://www.defa.com/dk/defa-alarmer-finder-link/`;
var SVDIIMS = `https://smartvan.dk/produkt/diims-forsikringsgodkendt-gps-tracker/`;
var SVPRIS = `https://smartvan.dk/tyverisikring-til-varebilen-2025/`;
var SVKAT3 = `https://smartvan.dk/kategori/tyverisikring-til-varevogn/page/3/`;
var TDALARM = `https://www.topdanmark.dk/erhverv/gode-raad/monter-en-alarm-i-din-varevogn-og-spar-5000-kr-i-selvrisiko/`;
var TDFOREBYG = `https://www.topdanmark.dk/erhverv/gode-raad/forebyg-indbrud-i-vare-vognen/`;
var GJ = `https://gjensidige.dk/filer/erhverv/storkunde-og-maegler/Sikringsoversigt-Forsikringsbetingelserne`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var SGSPOR = `https://www.sikringsguiden.dk/raadgivning/raad-om-tyveri/sporingssystemer/`;
var INST25 = `https://www.installator.dk/tyveri-af-vaerktoj-fra-varebiler-boomer-det-gor-maerkningen-ikke`;
var INST26 = `https://www.installator.dk/nye-tal-tyverier-fra-varebiler-falder-markant`;
var CG1 = `https://www.cargosikring.dk/product-page/ante-larm-1-pack`;
var CG2 = `https://www.cargosikring.dk/product-page/ante-larm-2-pack`;
var CG3 = `https://www.cargosikring.dk/product-page/ante-larm-3-pack`;

module.exports = {
  id: "varerumssikring/alarm-og-gps-tracker",
  side: {
    slug: "alarm-og-gps-tracker",
    navn: "Alarm og GPS-tracker",
    titel: "Alarm og GPS-tracker til varebil: priser",
    kort: `Alarmer med varerumssensor og GPS-trackere med alarmcentral: priser, abonnementer og forsikringens krav.`,
    beskrivelse: `Alarm og GPS-tracker til varebil: DEFA DVS90, Patrolline, Finder Link og DiiMS med priser og abonnementer, og hvad forsikringen kræver af dem.`,
    manchet: `En alarm skræmmer tyven væk fra varerummet, og en GPS-tracker hjælper med at finde bilen igen. Her kan du se, hvordan de to virker, hvad de koster hos danske forhandlere, hvad abonnementet indeholder, og hvilke krav forsikringsselskaberne stiller.`,
    visuel: {
      hero: "varerumssikring",
      kort_fortalt: [
        ["Alarmkit, AutoLock", "1.650 kr.", "Patrolline uden montering"],
        ["Monteret alarm, SmartVan", "fra 5.263 kr.", "afhænger af bilmodellen"],
        ["Selvrisikorabat, Topdanmark", "5.000 kr.", "ved indbrud med godkendt alarm"],
        ["GPS-tracker, DiiMS", "1.199 kr. om året", "med moms og alarmcentral"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Tre slags udstyr",
        tekst: [
          `En alarm og en GPS-tracker løser to forskellige opgaver. Alarmen larmer, når nogen bryder ind, og skal få tyven til at opgive, før varerummet er tømt. Trackeren gør ikke noget ved selve indbruddet, men den viser, hvor bilen er, hvis den bliver kørt væk.`,
          `De to kan kobles sammen. AutoLock skriver, at DEFA DVS90 kan kobles til en lang række trackere, fx DEFA Finder Link. En røgkanon er en tredje løsning, som fylder varerummet med røg.`
        ],
        kort: [
          ["Alarm", "Sirene og sensorer i kabine og varerum, koblet til bilens CAN-bus."],
          ["GPS-tracker", "Sender bilens position til en app eller en alarmcentral. Den kræver et abonnement."],
          ["Røgkanon", "Fylder varerummet med røg ved indbrud. AutoLock sælger kanonen og patroner til den."]
        ]
      },
      {
        overskrift: "Alarmens dele i bilen",
        tekst: [
          `Tegningen viser, hvor alarmens dele typisk sidder i en kassevogn. DEFA DVS90 tilsluttes bilens CAN-bus, så alarmen går, hvis nogen åbner en dør eller motorhjelmen uden lov. Den slås til og fra med bilens egen nøgle.`,
          `Kittet består af en alarmboks, en sirene på 116 dB, en blinkdiode med glasknusesensor og ledninger. Alarmen fungerer med 8-32 V. Vil du have en særskilt nøgle til alarmen, sælger AutoLock en fjernbetjening til dobbeltsikring. Nogle bilmodeller kræver en diode eller modstande for ikke at forstyrre fx blinklyset, og det er med i AutoLocks montering.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="Kassevogn set oppefra med alarmens dele: sirene foran, sensor i kabinen, sensor i varerummet og åbningskontakter på førerdøre, skydedør og bagdøre">
<rect x="50" y="60" width="330" height="120" rx="14" class="tg-rum"/>
<line x1="130" y1="60" x2="130" y2="180" class="tg-skillevaeg"/>
<line x1="380" y1="66" x2="380" y2="174" class="tg-doer"/>
<line x1="180" y1="180" x2="250" y2="180" class="tg-doer"/>
<line x1="80" y1="60" x2="115" y2="60" class="tg-doer"/>
<line x1="80" y1="180" x2="115" y2="180" class="tg-doer"/>
<rect x="44" y="110" width="10" height="20" class="tg-hylde"/>
<rect x="88" y="113" width="14" height="14" class="tg-modul"/>
<circle cx="95" cy="120" r="30" fill="none" class="tg-skinne-tynd"/>
<rect x="138" y="113" width="14" height="14" class="tg-modul"/>
<path d="M152,120 L370,78 M152,120 L370,162" fill="none" class="tg-skinne-tynd"/>
<rect x="372" y="88" width="8" height="8" class="tg-kuffert"/>
<rect x="372" y="146" width="8" height="8" class="tg-kuffert"/>
<rect x="211" y="172" width="8" height="8" class="tg-kuffert"/>
<rect x="94" y="56" width="8" height="8" class="tg-kuffert"/>
<rect x="94" y="176" width="8" height="8" class="tg-kuffert"/>
<text x="90" y="216" text-anchor="middle" class="tg-lille">KABINE</text>
<text x="350" y="200" text-anchor="middle" class="tg-lille">VARERUM</text>
<g class="tg-call"><line x1="49" y1="120" x2="20" y2="40"/><circle cx="49" cy="120" r="3"/><text x="8" y="22" class="tg-call__navn">Sirene</text><text x="8" y="37" class="tg-call__under">kobles til horn</text></g>
<g class="tg-call"><line x1="145" y1="113" x2="180" y2="40"/><circle cx="145" cy="113" r="3"/><text x="160" y="22" class="tg-call__navn">Sensor i varerum</text><text x="160" y="37" class="tg-call__under">bevægelse</text></g>
<g class="tg-call"><line x1="376" y1="92" x2="372" y2="44"/><circle cx="376" cy="92" r="3"/><text x="318" y="22" class="tg-call__navn">Kontakt</text><text x="318" y="37" class="tg-call__under">på hver dør</text></g>
<g class="tg-call"><line x1="215" y1="176" x2="300" y2="222"/><circle cx="215" cy="176" r="3"/><text x="306" y="220" class="tg-call__navn">Skydedør</text><text x="306" y="235" class="tg-call__under">åbningskontakt</text></g>
</svg>`,
          tekst: `Skematisk. Sirenen sidder foran og bevægelsessensorerne i kabinen (stiplet cirkel) og varerummet. Der er åbningskontakter på førerdøre, skydedør og bagdøre. Har virksomheden transportforsikring hos Gjensidige, og er værdien over 100.000 kr. pr. transport, kræver Gjensidige overvågning af kabine og varerum, kontakter på alle døre, glasbrudsdetektorer og kobling til hornet.`
        },
        efter: [
          `Kilde: <a href="${ALDEFA}" rel="noopener">AutoLock: DEFA DVS90 og tilbehør</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sensorerne",
        tekst: [
          `Alarmen reagerer kun på det, sensorerne kan mærke. Til varebiler anbefaler AutoLock en bevægelsessensor i varerummet, så alarmen går, når nogen kommer ind eller prøver på det. En ekstra bevægelsessensor i førerhuset giver mere sikring.`,
          `Niveausensoren opfanger, hvis bilen bliver løftet eller trukket, fx når nogen stjæler hjul og fælge. Glasknusesensoren sidder i blinkdioden og reagerer, når en rude bliver slået ind. Tryg skriver, at de fleste indbrud i varebiler sker gennem vinduet i førerhuset.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 280" role="img" aria-label="Varebil set fra siden med tre slags sensorer. En bevægelsessensor dækker varerummet, en glasknusesensor sidder i førerhuset, og en niveausensor opfanger, hvis bilen løftes med en donkraft ved baghjulet."><defs><marker id="pil-alarm-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><path class="tg-skinne-tynd" fill="none" d="M236,96 L92,96 M236,96 L92,180 M236,96 L160,180"/><rect class="tg-modul" x="230" y="88" width="14" height="12"/><rect class="tg-modul" x="262" y="98" width="10" height="10"/><path class="tg-kasse" d="M116,232 L140,232 L134,218 L122,218 Z"/><line class="tg-pil" x1="104" y1="230" x2="104" y2="206" marker-end="url(#pil-alarm-1)"/><line class="tg-gulvlinje" x1="5" y1="234" x2="395" y2="234"/><g class="tg-call"><line x1="237" y1="94" x2="200" y2="48"/><circle cx="237" cy="94" r="3"/><text class="tg-call__navn" x="120" y="24">Bevægelsessensor</text><text class="tg-call__under" x="120" y="38">dækker varerummet</text></g><g class="tg-call"><line x1="267" y1="103" x2="320" y2="56"/><circle cx="267" cy="103" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Glasknusesensor</text><text class="tg-call__under" x="395" y="38" text-anchor="end">i blinkdioden</text></g><g class="tg-call"><line x1="134" y1="226" x2="160" y2="250"/><circle cx="134" cy="226" r="3"/><text class="tg-call__navn" x="166" y="258">Niveausensor</text><text class="tg-call__under" x="166" y="272">bilen løftes eller trækkes</text></g></svg>`,
          tekst: `Skematisk. Sensorernes placering varierer fra bil til bil. Kilder: <a href="${ALDEFA}" rel="noopener">AutoLock: DEFA DVS90</a> og <a href="https://tryg.dk/erhverv/rabatter/varebilsikring" rel="noopener">Tryg: Varevognssikring</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Alarmer og priser",
        tekst: [
          `Alle priser på siden er uden moms, sådan som SmartVan og CargoSikring skriver dem. AutoLock viser begge priser. AutoLocks priser er uden montering, mens SmartVans monterede alarm afhænger af bilmodellen.`,
          `SmartVans alarm består ifølge Topdanmark af en central enhed, der styrer sirenen, en glasknusesensor i kabinen, en blinkende diode i forruden og en sensor i varerummet. Alarmen er forbundet med bilens elektronik, så bilnøglen også tænder og slukker den.`
        ],
        tabel: {
          kolonner: ["Produkt", "Forhandler", "Pris"],
          raekker: [
            ["Patrolline Canbus alarm kit", "AutoLock", "1.650 kr."],
            ["DEFA DVS90", "AutoLock", "fra 2.825 kr."],
            ["DEFA DVS90", "SmartVan", "3.426 kr., webshoppris"],
            ["Alarm med sirene, kabine- og varerumssikring", "SmartVan", "fra 5.263 kr., monteret"]
          ],
          note: `Kilder: <a href="${ALDEFA}" rel="noopener">AutoLock: DEFA</a>, <a href="${AL2}" rel="noopener">AutoLock: varebil side 2</a>, <a href="${SVKAT3}" rel="noopener">SmartVan: webshop</a> og <a href="${SVPRIS}" rel="noopener">SmartVan: priser med montering</a>, set den 7. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Patrolline Canbus alarm kit", 1650, "AutoLock, uden montering"],
            ["DEFA DVS90", 2825, "AutoLock, uden montering, fra"],
            ["DEFA DVS90", 3426, "SmartVan, webshoppris"],
            ["Alarm med kabine- og varerumssikring", 5263, "SmartVan, monteret, fra"]
          ],
          note: `Kilder: <a href="${ALDEFA}" rel="noopener">AutoLock: DEFA</a>, <a href="${AL2}" rel="noopener">AutoLock: varebil side 2</a>, <a href="${SVKAT3}" rel="noopener">SmartVan: webshop</a> og <a href="${SVPRIS}" rel="noopener">SmartVan: priser med montering</a>, set den 7. oktober 2026. Prisen på SmartVans monterede alarm afhænger af bilmodellen.`
        },
        efter: [
          `Kilde til beskrivelsen af SmartVans alarm: <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Tilbehør til DVS90",
        tekst: [
          `DVS90 har 116 dB sirene, CAN-bus-tilslutning til døre og motorhjelm og 8-32 V forsyning. Sensorer til varerum og kabine købes til. AutoLock giver 2 års garanti.`,
          `AutoLock sælger også en backup-sirene med eget batteri og et splitterkit til sensorerne. Prisen på selve alarmen dækker ikke sensorerne, så de skal lægges oveni.`
        ],
        tabel: {
          kolonner: ["Tilbehør", "Pris"],
          raekker: [
            ["Sensor 4,9 m til varerum", "385 kr."],
            ["Sensor 2,5 m til kabine", "375 kr."],
            ["Niveausensor", "375 kr."],
            ["Blinkdiode med glasknusesensor", "275 kr."],
            ["Backup-sirene med eget batteri", "995 kr."],
            ["Fjernbetjening til dobbeltsikring", "650 kr."],
            ["Splitterkit til sensorer", "225 kr."]
          ],
          note: `Kilde: <a href="${ALDEFA}" rel="noopener">AutoLock: DEFA DVS90</a>, vejledende priser uden montering, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forsikringens krav til alarmen",
        tekst: [
          `Forsikringsselskaberne stiller krav til alarmen på to måder. Nogle kræver den, når værdien i bilen er høj, og andre giver rabat, når den er monteret. Kravene er forskellige, så det er policen, der afgør, hvad bilen skal have.`,
          `Gjensidige skriver i sin sikringsoversigt, at der oftest skal være synlige tegn på opbrud, før selskabet anerkender en tyveriskade. GF's kasko dækker en eftermonteret tyverialarm og GPS-overvågning på linje med fabriksmonteret udstyr.`
        ],
        punkter: [
          `<strong>Topdanmark.</strong> DEFA DVS90 eller tilsvarende, monteret af professionelle, med bevægelsessensor i varerummet, åbningskontakter på dørene, sirene og tydelig skiltning om alarmovervågning. Giver 5.000 kr. i rabat på selvrisikoen ved indbrud, medmindre Topdanmark har stillet krav om alarm i vilkårene.`,
          `<strong>Gjensidige.</strong> Ved over 100.000 kr. i værdi pr. transport kræver Gjensidige en aktiv alarm, der overvåger kabine og varerum, åbningskontakter på alle døre, glasbrudsdetektorer og kobling til bilens horn.`,
          `<strong>Tilkoblet.</strong> Topdanmark kræver, at alarmen var slået til og fungerede på tidspunktet for indbruddet.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Krav", "Topdanmark", "Gjensidige"],
          raekker: [
            ["Sensor i varerummet", "ja", "ja"],
            ["Overvågning af kabinen", "ikke nævnt", "ja"],
            ["Åbningskontakter", "På dørene", "På alle døre"],
            ["Glasbrudsdetektorer", "ikke nævnt", "ja"],
            ["Sirene eller horn", "Sirene", "Kobling til hornet"],
            ["Monteret af professionelle", "ja", "ikke nævnt"],
            ["Skilte om alarmovervågning", "ja", "ikke nævnt"],
            ["Slået til ved indbruddet", "ja", "Funktionsdygtig og aktiv"]
          ],
          note: `Topdanmarks krav gælder rabatten på 5.000 kr. i selvrisiko. Gjensidiges krav gælder, når værdien pr. transport er over 100.000 kr. Kilder: <a href="${TDALARM}" rel="noopener">Topdanmark</a> og <a href="${GJ}" rel="noopener">Gjensidige: Sikringsoversigt</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde om GF: <a href="${GF}" rel="noopener">GF, erhvervsbilbetingelser nr. 130-1, punkt 4.1.2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Selvrisikorabat og alarmpris",
        tekst: [
          `Topdanmark giver 5.000 kr. i rabat på selvrisikoen ved indbrud, når der er monteret en alarm, der lever op til kravene. Er selvrisikoen lavere end 5.000 kr., betaler du ingen selvrisiko. Har bilen allerede en alarm, får du rabatten automatisk, og du behøver ikke kontakte Topdanmark først.`,
          `SmartVan monterer en alarm med sirene og kabine- og varerumssikring fra 5.263 kr. Ved ét indbrud og en selvrisiko på mindst 5.000 kr. svarer rabatten til 95 procent af SmartVans fra-pris for den monterede alarm.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Rabat på selvrisikoen ved indbrud", 5000, "Topdanmark"],
            ["Monteret alarm, fra", 5263, "SmartVan"]
          ],
          note: `Kilder: <a href="${TDALARM}" rel="noopener">Topdanmark</a> og <a href="${SVPRIS}" rel="noopener">SmartVan: priser med montering</a>, set den 7. oktober 2026. Prisen på SmartVans monterede alarm afhænger af bilmodellen.`
        },
        efter: [
          `Topdanmark, der i dag er en del af If, giver også 20 procent rabat på et alarmkit hos Avant Denmark og op til 15 procent hos SmartVan.`
        ]
      },
      {
        overskrift: "GPS-trackere og abonnementer",
        tekst: [
          `En GPS-tracker består af en enhed i bilen og et abonnement, der sender positionen videre. Uden abonnementet virker enheden ikke, så det er den samlede pris over flere år, der er interessant. Montering kommer oveni.`,
          `DiiMS sælges til to slags brug. Det forsikringsgodkendte abonnement er med alarmcentral, mens flådestyringen viser alle virksomhedens biler på samme konto.`
        ],
        tabel: {
          kolonner: ["Løsning", "Enhed", "Abonnement"],
          raekker: [
            ["DEFA Finder Link", "2.395 kr. (AutoLock)", "250 kr. i oprettelse og 1.056 kr. om året"],
            ["DEFA Finder Link med Falck alarmcentral", "Som ovenfor", "156 kr. om måneden inkl. Chip Sim"],
            ["DiiMS, forsikringsgodkendt brug", "799 kr. (SmartVan)", "1.199 kr. om året med moms og alarmcentral"],
            ["DiiMS, flådestyring", "799 kr. (SmartVan)", "79 kr. om måneden"]
          ],
          note: `Kilder: <a href="${DEFAABO}" rel="noopener">DEFA: abonnementsgebyrer Danmark</a>, set den 4. oktober 2026 (DEFA oplyser ikke, om momsen er med), <a href="${AL1}" rel="noopener">AutoLock</a> og <a href="${SVDIIMS}" rel="noopener">SmartVan: DiiMS</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan når signalet frem",
        tekst: [
          `Trackeren henter sin position fra GPS-satellitterne og sender den videre over mobilnettet. SmartVan skriver, at DiiMS sender data til en server og en godkendt alarmcentral, som kontakter bilejeren, hvis en alarm bliver udløst. Alarmcentralen holder øje med bilen hele døgnet.`,
          `DEFA Finder Link giver besked i en app, hvis bilen flyttes, startes eller brydes op. Bilen kan findes via GPS, og koordinaterne kan gives til politi og forsikring.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Forløb med pile. Bilen henter sin position fra GPS-satellitterne og sender den over mobilnettet til en server og en alarmcentral. Alarmcentralen kontakter bilejeren, og positionen kan gives videre til politi og forsikring."><defs><marker id="pil-alarm-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="40" y="14" width="24" height="16"/><rect class="tg-profil" x="20" y="18" width="18" height="8"/><rect class="tg-profil" x="66" y="18" width="18" height="8"/><text x="96" y="27">GPS-satellitter</text><line class="tg-skinne-tynd" x1="52" y1="32" x2="52" y2="104"/><path class="tg-rum" d="M14,150 L14,112 Q14,108 18,108 L72,108 L84,124 L90,127 L90,150 Z"/><circle class="tg-profil" cx="32" cy="150" r="7"/><circle class="tg-profil" cx="74" cy="150" r="7"/><rect class="tg-modul" x="40" y="128" width="12" height="10"/><text x="52" y="178" text-anchor="middle">bilen med</text><text x="52" y="192" text-anchor="middle">tracker</text><line class="tg-pil" x1="96" y1="130" x2="138" y2="130" marker-end="url(#pil-alarm-2)"/><path class="tg-profil" d="M150,150 L160,100 L170,150 Z"/><line class="tg-skillevaeg" x1="153" y1="135" x2="167" y2="135"/><text x="160" y="178" text-anchor="middle">mobilnettet</text><line class="tg-pil" x1="178" y1="130" x2="216" y2="130" marker-end="url(#pil-alarm-2)"/><rect class="tg-modul" x="222" y="104" width="108" height="52"/><text class="tg-modul__tekst" x="276" y="126" text-anchor="middle">SERVER OG</text><text class="tg-modul__tekst" x="276" y="142" text-anchor="middle">ALARMCENTRAL</text><line class="tg-pil" x1="300" y1="158" x2="330" y2="194" marker-end="url(#pil-alarm-2)"/><line class="tg-pil" x1="252" y1="158" x2="222" y2="194" marker-end="url(#pil-alarm-2)"/><rect class="tg-kasse" x="290" y="198" width="104" height="30"/><text x="342" y="217" text-anchor="middle">bilejeren</text><rect class="tg-kasse" x="150" y="198" width="124" height="30"/><text x="212" y="217" text-anchor="middle">politi, forsikring</text><text class="tg-lille" x="395" y="24" text-anchor="end">SKEMATISK</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${SVDIIMS}" rel="noopener">SmartVan: DiiMS</a>, set den 7. oktober 2026, og <a href="${DEFAABO}" rel="noopener">DEFA: Finder Link</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Det følger med abonnementet",
        tekst: [
          `Abonnementet er det, der holder trackeren i gang. Begge forhandlere skriver, hvad der sker, når abonnementet stopper, og det betyder noget, hvis bilen skifter hænder, eller trackeren skal flyttes til en ny bil.`
        ],
        punkter: [
          `<strong>Finder Link.</strong> Besked i appen, hvis bilen flyttes, startes eller brydes op. Bilen kan findes via GPS, og koordinaterne kan gives til politi og forsikring.`,
          `<strong>Forudbetaling.</strong> DEFA-abonnementet betales et år ad gangen og fornyes automatisk. SMS-varsling koster 2 kr. pr. stk.`,
          `<strong>Uden abonnement.</strong> En DEFA Link-enhed uden aktivt abonnement i 6 måneder holder op med at virke. DiiMS stopper ved opsigelse, og kørselsdata slettes.`,
          `<strong>Montering.</strong> DiiMS skal monteres af en autoriseret montør, for at forsikringsselskabet godkender installationen.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Hvert år", "DEFA-abonnementet betales et år ad gangen og fornyes automatisk."],
            ["6 måneder uden abonnement", "En DEFA Link-enhed holder op med at virke."],
            ["Når DiiMS opsiges", "Trackeren stopper, og kørselsdata slettes."]
          ],
          note: `Kilder: <a href="${DEFAABO}" rel="noopener">DEFA</a>, set den 4. oktober 2026, og <a href="${SVDIIMS}" rel="noopener">SmartVan: DiiMS</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tracker over tre år",
        tekst: [
          `Vi har lagt SmartVans pris for DiiMS-enheden på 799 kr. sammen med tre års abonnement uden montering. Det forsikringsgodkendte abonnement på 1.199 kr. om året med moms svarer til 959,20 kr. om året.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["DiiMS flådestyring, 36 mdr.", 3643],
            ["DiiMS forsikringsgodkendt, 3 år", 3677]
          ],
          note: `Beregnet ud fra <a href="${SVDIIMS}" rel="noopener">SmartVan: DiiMS</a>, set den 7. oktober 2026: 799 + 36 × 79 kr. og 799 + 3 × 959,20 kr. Uden montering.`
        },
        efter: [
          `De to abonnementer indeholder forskellige ting. Det forsikringsgodkendte omfatter en alarmcentral. Flådestyringen viser bilerne på et kort med ruter, start og stop og kan skelne mellem privat kørsel og erhvervskørsel.`
        ]
      },
      {
        overskrift: "Forsikringens GPS-krav",
        tekst: [
          `SmartVan skriver, at mange forsikrings- og leasingselskaber kræver en satellitsikring i biler, som har en høj værdi eller er særligt udsat for tyveri. Hos Tryg står kravet i policen, og betingelserne beskriver, hvad der så gælder.`,
          `Trackeren skal være fastmonteret senest 8 dage efter, at policen er udstedt. En autoriseret montør skal montere den og udstede en installationserklæring, som virksomheden skal gemme. Enheden skal have backup-strøm til mindst 12 timer og være tilsluttet en døgnbemandet kontrolcentral, når tyveriet sker.`,
          `Bliver bilen stjålet, skal virksomheden straks gøre noget aktivt for at finde den. Er kravet ikke overholdt, kan Tryg nedsætte erstatningen eller kræve den betalt tilbage. Kaskoens øvrige regler står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Monteret senest", "8", "dage efter policen"],
            ["Backup-strøm, mindst", "12", "timer"],
            ["Kontrolcentral", "Døgnbemandet", ""]
          ],
          note: `Gælder, når Trygs police har GPS-krav. Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 10</a> og <a href="${SVDIIMS}" rel="noopener">SmartVan: DiiMS</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Godkendelse hos F&amp;P",
        tekst: [
          `Sporingssystemer, der opfylder forsikringsselskabernes krav, kan registreres gratis hos F&amp;P på Sikringsguiden. FORCE Technology står for den uafhængige test. SmartVan oplyser, at DiiMS er registreret hos Forsikring &amp; Pension og godkendt hos en række forsikringsselskaber.`,
          `Ved tyveri modtager en alarmcentral alarmen og hjælper med at finde bilen via GPS.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Test", "FORCE Technology tester sporingssystemet uafhængigt."],
            ["Registrering", "Et system, der opfylder forsikringsselskabernes krav, kan registreres gratis hos F&amp;P på Sikringsguiden."],
            ["Montering", "DiiMS skal monteres af en autoriseret montør for at være forsikringsgodkendt."],
            ["Ved tyveri", "En alarmcentral modtager alarmen og hjælper med at finde bilen via GPS."]
          ]
        },
        efter: [
          `Kilder: <a href="${SGSPOR}" rel="noopener">Sikringsguiden: Sporingssystemer</a>, set den 4. oktober 2026, og <a href="${SVDIIMS}" rel="noopener">SmartVan: DiiMS</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Tracker på værktøjet",
        tekst: [
          `F&amp;P's Sikringsguiden peger på GPS-tracking og geofencing mod tyveri fra varebiler. Topdanmark foreslår at sætte en GPS-tracker på dyre og større værktøj og maskiner, så de kan spores.`,
          `Positionen skal være præcis, hvis politiet skal kunne bruge den. Unisecure forklarede i 2025 fagbladet Installatør, at politiet kun må ransage en bestemt bolig, et kælderrum eller en etage, når der er præcise oplysninger om, hvor de stjålne ting er. Peger en tracker på en adresse med flere boliger, kan politiet ikke ransage dem alle.`,
          `TEKNIQ skrev i 2026, at mange virksomheder allerede sikrer sig med GPS og DNA-mærkning af værktøjet. Mærkning står i <a href="/til-varebilen/varerumssikring/maerkning-af-vaerktoej/">mærkning af værktøj</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Etageejendom med seks lejligheder. En upræcis position dækker hele ejendommen som en stiplet cirkel, mens en præcis position peger på én bestemt lejlighed."><rect class="tg-rum" x="40" y="40" width="150" height="150"/><line class="tg-skillevaeg" x1="115" y1="40" x2="115" y2="190"/><line class="tg-skillevaeg" x1="40" y1="90" x2="190" y2="90"/><line class="tg-skillevaeg" x1="40" y1="140" x2="190" y2="140"/><circle class="tg-skinne" fill="none" cx="115" cy="115" r="86"/><rect class="tg-rum" x="230" y="40" width="150" height="150"/><line class="tg-skillevaeg" x1="305" y1="40" x2="305" y2="190"/><line class="tg-skillevaeg" x1="230" y1="90" x2="380" y2="90"/><line class="tg-skillevaeg" x1="230" y1="140" x2="380" y2="140"/><rect class="tg-modul" x="306" y="91" width="73" height="48"/><circle class="tg-hylde" cx="342" cy="115" r="5"/><line class="tg-gulvlinje" x1="10" y1="190" x2="390" y2="190"/><text x="115" y="212" text-anchor="middle">flere boliger</text><text x="115" y="226" text-anchor="middle">i samme felt</text><text x="305" y="212" text-anchor="middle">én bestemt</text><text x="305" y="226" text-anchor="middle">bolig</text><text class="tg-lille" x="115" y="14" text-anchor="middle">UPRÆCIS POSITION</text><text class="tg-lille" x="305" y="14" text-anchor="middle">PRÆCIS POSITION</text></svg>`,
          tekst: `Skematisk. Ifølge Unisecure kan politiet ikke ransage alle boliger på en adresse, hvis trackeren ikke viser den bestemte bolig. Kilde: <a href="${INST25}" rel="noopener">Installatør, 13. februar 2025</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a> og <a href="${INST26}" rel="noopener">Installatør: Nye tal, tyverier fra varebiler falder</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kørebog og flådestyring",
        tekst: [
          `DiiMS kan også bruges til flådestyring. Den viser bilernes position på et kort, ruter, start og stop og registrerer kilometer og timer, og den fører kørebog med privat kørsel og erhvervskørsel. Alle virksomhedens biler kan ligge på den samme konto.`,
          `En tracker i en medarbejders bil er også en måde at registrere, hvor medarbejderen er. Reglerne for det står i <a href="/til-varebilen/flaadestyring/gps-sporing-af-medarbejdere/">GPS-sporing af medarbejdere</a>, og kørebogen står i <a href="/til-varebilen/flaadestyring/">flådestyring og kørebog</a>.`
        ]
      },
      {
        overskrift: "Røgkanon",
        tekst: [
          `En røgkanon fylder varerummet med røg, når alarmen går, så tyven ikke kan se noget. AutoLock sælger en røgkanon til 797,50 kr. og 2 patroner til 896,25 kr.`,
          `Patronerne købes for sig. Kilder: <a href="${AL1}" rel="noopener">AutoLock</a> og <a href="${AL2}" rel="noopener">AutoLock side 2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Udvendig alarm uden boring",
        tekst: [
          `Ante Larm sidder udenpå karrosseriet og udløser en sirene på 110 dB, når nogen rører karrosseriet. Den monteres uden boring og leveres med fjernbetjening. Ifølge CargoSikring vejer den 0,16 kg og kan bruges fra −20 til +50 °C.`,
          `Alarmen er lavet af ABS-plast og er i tæthedsklasse IP56. Da den monteres uden boring, efterlader den ingen huller i en leaset bil.`
        ],
        tabel: {
          kolonner: ["Ante Larm", "Pris"],
          raekker: [
            ["1-pak", "1.800 kr."],
            ["2-pak", "3.600 kr."],
            ["3-pak", "5.400 kr."]
          ],
          note: `Kilde: CargoSikring, <a href="${CG1}" rel="noopener">1-pak</a>, set den 7. oktober 2026, og <a href="${CG2}" rel="noopener">2-pak</a> og <a href="${CG3}" rel="noopener">3-pak</a>, set den 4. oktober 2026. Uden montering.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer alarm og tracker til bilen og forsikringen.",
    spoergsmaal: [
      "Bilens mærke, model og årgang.",
      "Forsikringsselskabets krav til alarm og tracker.",
      "Værdien af værktøj og maskiner i bilen ved hver transport.",
      "Om trackeren skal kobles til en alarmcentral.",
      "Om data skal bruges til kørebog og flådestyring.",
      "Hvem der har adgang til appen og positionerne.",
      "Om udstyret skal flyttes til næste bil."
    ],
    faq: [
      ["Hvad koster en alarm til varebil?", "Hos AutoLock koster et Patrolline-kit 1.650 kr. og en DEFA DVS90 fra 2.825 kr. uden montering. SmartVan monterer en alarm fra 5.263 kr. Priserne er uden moms (oktober 2026)."],
      ["Hvad koster abonnement på en GPS-tracker?", "DEFA Finder Link koster 1.056 kr. om året plus 250 kr. i oprettelse, eller 156 kr. om måneden med Falck alarmcentral. DiiMS koster 1.199 kr. om året med alarmcentral, eller 79 kr. om måneden til flådestyring."],
      ["Kræver forsikringen alarm i varebilen?", "Gjensidige kræver alarm, når værdien pr. transport er over 100.000 kr. Topdanmark giver 5.000 kr. i selvrisikorabat for en godkendt alarm."],
      ["Hvad er en forsikringsgodkendt GPS-tracker?", "En tracker, der opfylder forsikringsselskabernes krav og er registreret hos F&amp;P efter test hos FORCE Technology. DiiMS skal desuden monteres af en autoriseret montør."],
      ["Virker trackeren uden abonnement?", "Nej. En DEFA Link-enhed holder op med at virke efter 6 måneder uden aktivt abonnement, og DiiMS stopper ved opsigelse."],
      ["Hvad kræver Tryg, når policen har GPS-krav?", "Trackeren skal være fastmonteret af en autoriseret montør senest 8 dage efter, at policen er udstedt, have backup-strøm til mindst 12 timer og være tilsluttet en døgnbemandet kontrolcentral."],
      ["Findes der en alarm til varebil uden boring?", "Ja. Ante Larm hos CargoSikring monteres udenpå uden boring og koster 1.800 kr. for én enhed (oktober 2026)."],
      ["Hvad koster en GPS-tracker over tre år?", "Med SmartVans priser for DiiMS koster den ca. 3.640-3.680 kr. inkl. enheden, alt efter abonnement. Montering kommer oveni."]
    ],
    kilder: [
      { navn: "AutoLock: DEFA DVS90 og tilbehør", url: ALDEFA, dato: "2026-10-07" },
      { navn: "AutoLock: Tyverisikring til varebil (side 1)", url: AL1, dato: "2026-10-07" },
      { navn: "AutoLock: Tyverisikring til varebil (side 2)", url: AL2, dato: "2026-10-07" },
      { navn: "DEFA: WarmUp og Finder Link, abonnementsgebyrer Danmark", url: DEFAABO, dato: "2026-10-04" },
      { navn: "DEFA: Alarmer og Finder Link", url: DEFAALARM, dato: "2026-10-04" },
      { navn: "SmartVan: DiiMS forsikringsgodkendt GPS-tracker", url: SVDIIMS, dato: "2026-10-07" },
      { navn: "SmartVan: Tyverisikring til varebilen 2025", url: SVPRIS, dato: "2026-10-07" },
      { navn: "Topdanmark: Montér en alarm i din varebil og spar 5.000 kr. i selvrisiko", url: TDALARM, dato: "2026-10-07" },
      { navn: "Topdanmark: Forebyg indbrud i varebilen", url: TDFOREBYG, dato: "2026-10-07" },
      { navn: "Gjensidige: Sikringsoversigt jf. forsikringsbetingelserne", url: GJ, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Tryg: Varevognssikring", url: "https://tryg.dk/erhverv/rabatter/varebilsikring", dato: "2026-10-07" },
      { navn: "Sikringsguiden (F&P): Sporingssystemer", url: SGSPOR, dato: "2026-10-04" },
      { navn: "Installatør: Tyveri af værktøj fra varebiler boomer, det gør mærkningen ikke (13.02.2025)", url: INST25, dato: "2026-10-07" },
      { navn: "Installatør: Nye tal, tyverier fra varebiler falder markant (Rigspolitiets tal)", url: INST26, dato: "2026-10-07" },
      { navn: "SmartVan: Tyverisikring til varevogn (webshop, side 3)", url: SVKAT3, dato: "2026-10-07" },
      { navn: "CargoSikring: Ante Larm 1-pak", url: CG1, dato: "2026-10-07" },
      { navn: "CargoSikring: Ante Larm 2-pak", url: CG2, dato: "2026-10-04" },
      { navn: "CargoSikring: Ante Larm 3-pak", url: CG3, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["RETTET: AutoLock-priserne står nu uden moms, som AutoLock selv viser dem: Patrolline Canbus alarm kit 1.650 kr. (2.062,50 kr. med moms), DEFA DVS90 fra 2.825 kr. (3.531,25 kr.), DEFA Finder Link 2.395 kr. (2.993,75 kr.), sensor 4,9 m 385 kr., sensor 2,5 m 375 kr., niveausensor 375 kr., blinkdiode 275 kr., backup-sirene 995 kr., fjernbetjening 650 kr. og 2 patroner til røgkanon 896,25 kr. (1.120,31 kr.). Siden nævner moms én gang.", ALDEFA],
    ["RETTET: Topdanmarks krav til alarmen omfatter nu også sirene: bevægelsessensor i varerummet, åbningskontakter på døre, sirene og tydelig skiltning om alarmovervågning.", TDALARM],
    ["AutoLock: DEFA DVS90 kan tilkobles en lang række trackere og notifikationsenheder, fx DEFA Finder Link.", ALDEFA],
    ["AutoLock: DEFA DVS90 tilkobles og frakobles via bilens egen nøgle; kittet indeholder alarmboks, blinkdiode med glasknusesensor, sirene og ledninger; vil man have særskilt nøgle til alarmen, findes en fjernbetjening til dobbeltsikring; nogle bilmodeller kræver diode eller modstande for at undgå forstyrrelse på fx blinklys, og det er med i AutoLocks montering.", ALDEFA],
    ["AutoLock anbefaler til varebiler en DEFA-bevægelsessensor i varerummet og eventuelt en ekstra i førerhuset; DEFA-niveausensoren opfanger fx tyveri af hjul og fælge, eller hvis bilen trækkes eller løftes.", ALDEFA],
    ["Tryg skriver, at de fleste indbrud i varebiler sker gennem vinduet i førerhuset, hvor centrallåsen aktiveres.", "https://tryg.dk/erhverv/rabatter/varebilsikring"],
    ["Topdanmark beskriver SmartVans bilalarm som en central enhed, der styrer sirene, glasknusesensor i kabinen, en blinkende LED-diode i forruden og en varerumssensor; alarmen er forbundet med bilens elektronik, så bilnøglen tænder og slukker den.", TDFOREBYG],
    ["AutoLock sælger DEFA backup-sirene med eget batteri til 995 kr. og splitterkit til sensorer til 225 kr., uden moms.", ALDEFA],
    ["Gjensidige: der skal oftest være synlige tegn på opbrud, før Gjensidige anerkender en tyveriskade.", GJ],
    ["GF: kaskoen dækker tyverialarm og GPS-overvågning, selvom udstyret ikke er monteret af forhandleren inden levering (punkt 4.1.2).", GF],
    ["Gjensidige kræver ved over 100.000 kr. pr. transport en funktionsdygtig og aktiv tyverialarm.", GJ],
    ["Topdanmark: er den normale selvrisiko lavere end 5.000 kr., betales ingen selvrisiko; er bilen allerede udstyret med alarm, får man rabatten automatisk ved indbrud uden at kontakte Topdanmark.", TDALARM],
    ["Topdanmark er en del af If og giver 20 % rabat på et alarmkit hos Avant Denmark og op til 15 % hos SmartVan.", TDFOREBYG],
    ["SmartVan: DiiMS henter sin position fra GPS-satellitter, kommunikerer via mobiltelefonnettet, sender data til en server og en godkendt alarmcentral, som kontakter bilejeren, hvis en alarm udløses, og alarmcentralen holder øje med bilen 24 timer i døgnet.", SVDIIMS],
    ["SmartVan: DiiMS-flådestyring giver overblik over lokationen af alle virksomhedens køretøjer på samme konto.", SVDIIMS],
    ["SmartVan: mange forsikrings- og leasingselskaber kræver en satellitsikring i biler med høj værdi eller særlig risiko for tyveri; DiiMS er registreret hos Forsikring og Pension og godkendt hos en række forsikringsselskaber.", SVDIIMS],
    ["Tryg GPS-krav: GPS-enheden skal være fastmonteret senest 8 dage efter policens udstedelse af autoriseret montør med installationserklæring, som skal gemmes; backup-strøm til mindst 12 timer; aktiveret og tilsluttet døgnbemandet kontrolcentral ved tyveri; brugeren skal straks handle aktivt for at finde bilen; ellers kan erstatningen nedsættes eller bortfalde, og Tryg kan kræve erstatningen tilbagebetalt (afsnit 10 og 11.8).", TRYG],
    ["Topdanmark foreslår at sætte en GPS-tracker på dyre og større værktøj og maskiner, så de kan spores.", TDFOREBYG],
    ["Unisecure til Installatør 2025: politiet må kun ransage en specifik bolig, et kælderrum eller en etage, når de har præcise oplysninger om, hvor de stjålne genstande er; peger en GPS-tracker på en adresse med flere boliger, kan politiet ikke ransage dem alle.", INST25],
    ["TEKNIQ (Installatør 2026): mange virksomheder sikrer sig allerede med GPS og DNA-mærkning af værktøj.", INST26],
    ["AutoLock sælger en røgkanon til 797,50 kr. uden moms.", AL1],
    ["CargoSikring: Ante Larm reagerer ved kontakt med bilens karrosseri, er af ABS-plast og i IP-klasse IP56.", CG1]
  ]
};
