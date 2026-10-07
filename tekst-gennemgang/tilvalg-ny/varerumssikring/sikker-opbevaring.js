// Underside /til-varebilen/varerumssikring/sikker-opbevaring/ (07-10-2026)
var AL1 = `https://autolock.dk/tyverisikring/varebil/`;
var AL2 = `https://autolock.dk/tyverisikring/varebil/?p=2`;
var ALTREK = `https://autolock.dk/armorgard-trekdror/`;
var ALSTAT = `https://autolock.dk/statement-lock/`;
var ARMTB = `https://www.armorgard.co.uk/products/tool-and-equipment-storage/tuffbank/`;
var ARMV = `https://www.armorgard.co.uk/markets/vehicle-fit-out/`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var GJ = `https://gjensidige.dk/filer/erhverv/storkunde-og-maegler/Sikringsoversigt-Forsikringsbetingelserne`;
var SVS = `https://smartvan.dk/produkt/vaerktoejskasse-til-varerummet/`;
var SVM = `https://smartvan.dk/produkt/vaerktoejskasse-til-varevognen/`;
var SVL = `https://smartvan.dk/produkt/vaerktoejskasse-til-varebilen/`;
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf`;
var TDFAQ = `https://www.topdanmark.dk/faq/erhverv/er-vaerktoj-daekket-af-min-koretojsforsikring/`;
var TDFOREBYG = `https://www.topdanmark.dk/erhverv/gode-raad/forebyg-indbrud-i-vare-vognen/`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;

module.exports = {
  id: "varerumssikring/sikker-opbevaring",
  side: {
    slug: "sikker-opbevaring",
    navn: "Sikker opbevaring",
    titel: "Sikker opbevaring i varebilen: armerede kasser",
    kort: `Armerede kasser og skuffer i stål til varerummet, fastgørelse i gulvet og priser på Armorgard og SmartVans kasser hos danske forhandlere.`,
    beskrivelse: `Sikker opbevaring af værktøj i varebilen: armerede kasser og skuffer med mål, vægt og priser fra 3.680 kr., fastgørelse i gulvet og kaskoens regler.`,
    manchet: `Det, der ikke kan bæres ud, bliver liggende. Armerede kasser og skuffer i stål låser værktøjet inde i varerummet, også hvis døren er brudt op. Her kan du se modellerne, mål, vægt og priser, og hvad fastgørelse, nyttelast og en leaset bil betyder for valget.`,
    visuel: {
      hero: "varerumssikring",
      kort_fortalt: [
        ["Armeret kasse, AutoLock", "fra 4.086,21 kr.", "Armorgard OxBox uden montering"],
        ["Værktøjskasse S, SmartVan", "3.680 kr.", "uden montering"],
        ["Armeret skuffe", "44-63 kg", "Armorgard TrekDror, går fra nyttelasten"],
        ["Stål i SmartVans kasser", "1,5 mm", "galvaniseret, med indbyggede låse"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Fire typer",
        tekst: [
          `En armeret kasse er det sidste lag i sikringen af varerummet. Den holder ikke tyven ude af bilen, men den gør det sværere at tage værktøjet med, når døren først er åbnet. En kasse, der er boltet fast, kan ikke løftes ud samlet.`,
          `Kasserne findes i fire hovedtyper, der passer til forskellige slags værktøj og forskellige varerum.`
        ],
        kort: [
          ["Armeret kasse", "Kasse med låg i stål og indbygget lås, fx Armorgard TuffBank og OxBox."],
          ["Armeret skuffe", "Udtræksskuffe i stål til gulvet, fx Armorgard TrekDror."],
          ["Stor boks", "Stor armeret kasse til maskiner og større værktøj, fx Armorgard BarroBox."],
          ["Skab", "Højt sikkerhedsskab, fx Armorgard TuffStor."]
        ]
      },
      {
        overskrift: "Det skal en armeret kasse kunne",
        tekst: [
          `Låsen er det første, tyven går efter. SmartVans kasser har integrerede låse, så der ikke er en hængelås at klippe, og låsene er boringssikre. AutoLock skriver om Armorgard TrekDror, at skuffen er bygget med bukkede og svejsede samlinger uden synlige bolte eller popnitter, så der ikke er svage monteringspunkter, hvor kassen kan angribes.`,
          `De praktiske detaljer betyder også noget i hverdagen. SmartVans kasser har et låsehængsel, der holder låget oppe, en gummipakning, så låget ikke rasler under kørslen, og forborede huller i bunden til fastmontering. Der er et håndtag i hver ende, så kassen også kan bruges uden for bilen. SmartVan skriver, at kassen holder til udendørs brug, men at den ikke er vandtæt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Armeret kasse set fra siden med låget åbent. Låsen sidder i kassen, et låsehængsel holder låget oppe, en gummipakning sidder langs kanten, samlingerne er bukkede og svejsede, og bunden har huller til bolte i gulvet."><rect class="tg-hylde" x="40" y="196" width="320" height="8"/><path class="tg-profil" d="M120,110 L196,56 L204,64 L128,116 Z"/><rect class="tg-rum" x="120" y="110" width="180" height="86"/><line class="tg-skinne" x1="130" y1="110" x2="296" y2="110"/><line class="tg-gulvlinje" x1="140" y1="124" x2="172" y2="84"/><rect class="tg-modul" x="282" y="124" width="14" height="18"/><circle class="tg-hylde" cx="289" cy="133" r="3"/><line class="tg-gulvlinje" x1="150" y1="186" x2="150" y2="214"/><line class="tg-gulvlinje" x1="270" y1="186" x2="270" y2="214"/><rect class="tg-kasse" x="143" y="212" width="14" height="6"/><rect class="tg-kasse" x="263" y="212" width="14" height="6"/><g class="tg-call"><line x1="156" y1="104" x2="110" y2="48"/><circle cx="156" cy="104" r="3"/><text class="tg-call__navn" x="5" y="24">Låsehængsel</text><text class="tg-call__under" x="5" y="38">holder låget oppe</text></g><g class="tg-call"><line x1="250" y1="110" x2="290" y2="56"/><circle cx="250" cy="110" r="3"/><text class="tg-call__navn" x="395" y="34" text-anchor="end">Gummipakning</text><text class="tg-call__under" x="395" y="48" text-anchor="end">låget rasler ikke</text></g><g class="tg-call"><line x1="296" y1="133" x2="330" y2="100"/><circle cx="296" cy="133" r="3"/><text class="tg-call__navn" x="395" y="80" text-anchor="end">Integreret lås</text><text class="tg-call__under" x="395" y="94" text-anchor="end">ingen hængelås</text></g><g class="tg-call"><line x1="300" y1="190" x2="330" y2="226"/><circle cx="300" cy="190" r="3"/><text class="tg-call__navn" x="395" y="238" text-anchor="end">Bukket og svejst</text><text class="tg-call__under" x="395" y="252" text-anchor="end">ingen synlige bolte</text></g><g class="tg-call"><line x1="150" y1="200" x2="110" y2="226"/><circle cx="150" cy="200" r="3"/><text class="tg-call__navn" x="5" y="238">Huller i bunden</text><text class="tg-call__under" x="5" y="252">til bolte i gulvet</text></g></svg>`,
          tekst: `Skematisk. Tegningen samler detaljer fra SmartVans værktøjskasser og Armorgard TrekDror. Kilder: <a href="${SVS}" rel="noopener">SmartVan: Værktøjskasse S</a> og <a href="${ALTREK}" rel="noopener">AutoLock: Armorgard TrekDror</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser hos AutoLock",
        tekst: [
          `Alle priser på siden er uden moms. Det er sådan, SmartVan skriver dem, og AutoLock viser både prisen med og uden moms. Priserne er uden montering og uden beslag.`,
          `Prisen stiger med størrelsen. En OxBox koster fra 4.086,21 kr., og BarroBox, der er beregnet til maskiner og større værktøj, koster 13.148,16 kr. StrimmerSafe Vault er en kasse til langskaftet værktøj, som fx en buskrydder.`
        ],
        tabel: {
          kolonner: ["Produkt", "Type", "Pris"],
          raekker: [
            ["Armorgard OxBox", "Armeret kasse", "fra 4.086,21 kr."],
            ["Armorgard TuffBank", "Armeret kasse", "fra 5.087,89 kr."],
            ["Armorgard TrekDror", "Armeret skuffe", "fra 5.406,30 kr."],
            ["Armorgard OxBox OX2", "Armeret kasse, større model", "6.302,48 kr."],
            ["Armorgard StrimmerSafe Vault", "Kasse til langskaftet værktøj", "fra 7.621,49 kr."],
            ["Armorgard BarroBox", "Stor armeret kasse", "13.148,16 kr."],
            ["Fastgørelsesbeslag til TrekDror", "Beslag", "546,50 kr."]
          ],
          note: `Kilder: <a href="${AL1}" rel="noopener">AutoLock: side 1</a>, <a href="${AL2}" rel="noopener">side 2</a> og <a href="${ALTREK}" rel="noopener">TrekDror</a>, AutoLocks webshoppriser uden montering, set den 7. oktober 2026. AutoLock angiver en vejledende pris med moms på TrekDror på 9.654,10 kr.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Armorgard OxBox", 4086.21, "armeret kasse, fra"],
            ["Armorgard TuffBank", 5087.89, "armeret kasse, fra"],
            ["Armorgard TrekDror", 5406.3, "armeret skuffe, fra"],
            ["Armorgard OxBox OX2", 6302.48, "armeret kasse, større model"],
            ["Armorgard StrimmerSafe Vault", 7621.49, "kasse til langskaftet værktøj, fra"],
            ["Armorgard BarroBox", 13148.16, "stor armeret kasse"],
            ["Fastgørelsesbeslag til TrekDror", 546.5, "beslag"]
          ],
          note: `Kilder: <a href="${AL1}" rel="noopener">AutoLock: side 1</a>, <a href="${AL2}" rel="noopener">side 2</a> og <a href="${ALTREK}" rel="noopener">TrekDror</a>, AutoLocks webshoppriser uden montering, set den 7. oktober 2026. AutoLock angiver en vejledende pris med moms på TrekDror på 9.654,10 kr.`
        }
      },
      {
        overskrift: "TuffBank til køretøjer",
        tekst: [
          `TuffBank findes i mange størrelser, men kun tre af dem er beregnet til køretøjer. Armorgards øvrige TuffBank-modeller er lavet til byggepladser. TB1 og TB12 er egnet til at blive monteret i bilen, og TB6 er den største af de tre.`
        ],
        tabel: {
          kolonner: ["Model", "Mål (B x D x H)", "Brug"],
          raekker: [
            ["TB1", "950 x 510 x 460 mm", "Køretøj, egnet til montering"],
            ["TB12", "1150 x 495 x 460 mm", "Køretøj, egnet til montering"],
            ["TB6", "1925 x 615 x 640 mm", "Køretøj"]
          ],
          note: `Kilde: <a href="${ARMTB}" rel="noopener">Armorgard: TuffBank</a>, set den 4. oktober 2026. Armorgards øvrige TuffBank-modeller er beregnet til byggepladser.`
        },
        efter: [
          `TuffBank er bygget af 2 og 3 mm stål, TB1 af 2 og 5 mm, med Armorgards IntaLokt-lås. Armorgard oplyser, at TuffBank opfylder Sold Secure og Secured by Design.`
        ]
      },
      {
        overskrift: "TrekDror-skuffer",
        tekst: [
          `TrekDror er en skuffe i 1,5 mm pulverlakeret stål med integrerede låse. Skuffen kan trækkes 80 procent ud. Flere skuffer kan stables oven på hinanden med stabelbeslag.`,
          `AutoLock anbefaler at fastgøre skufferne for ekstra sikring. Fastgørelsesbeslag koster 546,50 kr., stabelbeslag 425 kr. og et skillevægssæt til TKD2 440,20 kr.`
        ],
        tabel: {
          kolonner: ["Model", "Mål (B x D x H)", "Vægt"],
          raekker: [
            ["TKD1", "490 x 1105 x 300 mm", "44 kg"],
            ["TKD2", "980 x 1105 x 200 mm", "63 kg"],
            ["TKD3", "490 x 1105 x 490 mm", "58 kg"]
          ],
          note: `Kilde: <a href="${ALTREK}" rel="noopener">AutoLock: Armorgard TrekDror</a>, set den 7. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 244" role="img" aria-label="Bagenden af et varerum set fra siden. En skuffe står på gulvet ved bagdørene og er trukket 80 procent ud gennem døråbningen. Skuffehuset er 1.105 mm dybt."><rect class="tg-hylde" x="20" y="170" width="264" height="8"/><line class="tg-gulvlinje" x1="20" y1="60" x2="284" y2="60"/><line class="tg-skinne-tynd" x1="284" y1="60" x2="284" y2="170"/><rect class="tg-kasse" x="150" y="128" width="130" height="42"/><rect class="tg-modul" x="254" y="134" width="130" height="32"/><line class="tg-gulvlinje" x1="370" y1="142" x2="370" y2="158"/><g class="tg-maal"><line x1="284" y1="112" x2="384" y2="112"/><line x1="284" y1="106" x2="284" y2="118"/><line x1="384" y1="106" x2="384" y2="118"/><text x="334" y="102" text-anchor="middle">80 % ude</text></g><g class="tg-maal"><line x1="150" y1="196" x2="280" y2="196"/><line x1="150" y1="190" x2="150" y2="202"/><line x1="280" y1="190" x2="280" y2="202"/><text x="215" y="214" text-anchor="middle">1.105 mm</text></g><text class="tg-lille" x="24" y="52">VARERUM</text><text class="tg-lille" x="290" y="52">BAGDØRE</text><text class="tg-lille" x="24" y="238">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: `Skematisk. TrekDror-skuffen kan trækkes 80 procent ud, og alle tre modeller er 1.105 mm dybe. Kilde: <a href="${ALTREK}" rel="noopener">AutoLock: Armorgard TrekDror</a>, set den 7. oktober 2026.`
        },
        efter: [
          `AutoLock oplyser 1,5 mm pulverlakeret stål, integrerede låse og bukkede og svejsede samlinger. Skufferne kan stables med stabelbeslag, og skillevægge sælges som tilvalg.`
        ]
      },
      {
        overskrift: "Værktøjskasser hos SmartVan",
        tekst: [
          `SmartVans kasser er af 1,5 mm galvaniseret stål med nittede samlinger og en pulverlakering. Låsene er integrerede og boringssikre, så der ikke er en hængelås at klippe. Bunden er forboret til fastmontering i varerummet.`,
          `Indvendigt er S 690 x 365 x 300 mm (B x H x D), M 830 x 475 x 410 mm og L 1.290 x 475 x 410 mm.`
        ],
        tabel: {
          kolonner: ["Model", "Udvendige mål (B × H × D)", "Vægt", "Pris"],
          raekker: [
            ["S", "770 × 370 × 370 mm", "23 kg", "3.680 kr."],
            ["M", "910 × 480 × 480 mm", "33 kg", "7.160 kr."],
            ["L", "1.370 × 480 × 480 mm", "44 kg", "6.540 kr."]
          ],
          note: `Kilde: SmartVan, <a href="${SVS}" rel="noopener">model S</a>, <a href="${SVM}" rel="noopener">model M</a> og <a href="${SVL}" rel="noopener">model L</a>, webshoppriser uden montering, set den 7. oktober 2026.`
        },
        figur: {
          type: "noegletal",
          data: [
            ["Galvaniseret stål", "1,5", "mm"],
            ["Vægt, S til L", "23-44", "kg"],
            ["Indbyggede låse", "1-2", "pr. kasse"]
          ],
          note: `Kilde: SmartVan, <a href="${SVS}" rel="noopener">model S</a>, <a href="${SVM}" rel="noopener">model M</a> og <a href="${SVL}" rel="noopener">model L</a>, set den 7. oktober 2026.`
        },
        efter: [
          `S og M har 1 lås og 2 nøgler, og L har 2 låse og 4 nøgler. Et låsehængsel holder låget oppe, og en gummipakning forhindrer det i at rasle under kørsel.`
        ]
      },
      {
        overskrift: "Kasse eller skuffe",
        tekst: [
          `En kasse med låg åbnes oppefra, og en skuffe trækkes ud mod døren. SmartVans kasser har et håndtag i hver ende, så de kan bruges uden for bilen. TrekDror-skuffen står fladt på gulvet, og flere skuffer kan stables oven på hinanden.`,
          `Skuffen trækkes ud mod bagdørene, mens låget på en kasse skal kunne åbnes opad. Sikre værktøjskasser kan ofte flyttes med til næste bil.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="To løsninger side om side. Til venstre en kasse med låg, der åbnes oppefra. Til højre to skuffer stablet oven på hinanden, hvor den øverste er trukket ud mod døren."><defs><marker id="pil-opbevaring-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="20" y="20">Kasse med låg</text><text class="tg-fremhaev" x="220" y="20">Stablede skuffer</text><rect class="tg-hylde" x="10" y="170" width="180" height="6"/><rect class="tg-rum" x="40" y="110" width="120" height="60"/><path class="tg-profil" d="M40,110 L92,72 L98,78 L46,116 Z"/><line class="tg-pil" x1="130" y1="50" x2="130" y2="100" marker-end="url(#pil-opbevaring-1)"/><text x="100" y="200" text-anchor="middle">åbnes oppefra</text><rect class="tg-hylde" x="210" y="170" width="180" height="6"/><rect class="tg-kasse" x="220" y="140" width="110" height="30"/><rect class="tg-kasse" x="220" y="108" width="110" height="30"/><rect class="tg-modul" x="290" y="112" width="96" height="22"/><line class="tg-pil" x1="300" y1="92" x2="380" y2="92" marker-end="url(#pil-opbevaring-1)"/><line class="tg-skinne-tynd" x1="336" y1="40" x2="336" y2="170"/><text class="tg-lille" x="342" y="52">DØR</text><text x="300" y="200" text-anchor="middle">trækkes ud mod døren</text><text class="tg-lille" x="200" y="224" text-anchor="middle">SKEMATISK</text></svg>`,
          tekst: `Skematisk. En kasse åbnes oppefra, og en skuffe trækkes ud mod døren. TrekDror-skufferne kan stables med stabelbeslag. Kilder: <a href="${ALTREK}" rel="noopener">AutoLock: Armorgard TrekDror</a> og <a href="${SVL}" rel="noopener">SmartVan: Værktøjskasse L</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fastgørelse i gulvet",
        tekst: [
          `AutoLock anbefaler at fastgøre TrekDror-skufferne og sælger fastgørelsesbeslag til 546,50 kr. Armorgard angiver TuffBank TB1 og TB12 som egnet til montering i køretøj, og SmartVans kasser har forborede huller i bunden.`,
          `En fastgjort kasse kan ikke løftes ud samlet. GF regner udstyr for fastmonteret, når det er fastsat med bolt, skrue, svejsning eller tilsvarende og ikke kan fjernes uden værktøj. Bolte gennem bunden af varerummet betyder huller i gulvet, og det har betydning ved aflevering af en leaset bil.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Armeret kasse set fra siden, boltet fast gennem bunden af varerummet"><rect class="tg-modul" x="120" y="60" width="160" height="80"/><text class="tg-modul__tekst" x="200" y="104" text-anchor="middle">ARMERET KASSE</text><line class="tg-gulvlinje" x1="20" y1="140" x2="380" y2="140"/><rect class="tg-hylde" x="20" y="141" width="360" height="9"/><text class="tg-lille" x="380" y="134" text-anchor="end">GULV</text><line class="tg-gulvlinje" x1="140" y1="126" x2="140" y2="162"/><rect class="tg-kasse" x="133" y="160" width="14" height="6"/><line class="tg-gulvlinje" x1="260" y1="126" x2="260" y2="162"/><rect class="tg-kasse" x="253" y="160" width="14" height="6"/><g class="tg-call"><line x1="140" y1="64" x2="110" y2="42"/><circle cx="140" cy="64" r="3"/><text class="tg-call__navn" x="20" y="22">Fastgjort kasse</text><text class="tg-call__under" x="20" y="36">kan ikke løftes ud samlet</text></g><g class="tg-call"><line x1="140" y1="164" x2="96" y2="174"/><circle cx="140" cy="164" r="3"/><text class="tg-call__navn" x="20" y="180">Bolt</text><text class="tg-call__under" x="20" y="194">gennem bunden af varerummet</text></g><text class="tg-lille" x="380" y="204" text-anchor="end">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: `Tegningen er skematisk og viser en kasse, der er boltet gennem bunden af varerummet. Boltene giver huller i gulvet. Kilde om fastmontering: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Huller i en leaset bil",
        tekst: [
          `En leaset bil bliver gennemgået, når den afleveres, og hos Ayvens er det FDM, der gør det. Ayvens godtager monteringshuller fra eftermonteret udstyr og reoler i varerummet, når de er udbedret tilfredsstillende. Almindeligt slid i varerummet godtages også.`,
          `Udstyr, du selv har monteret i leasingperioden, skal være taget af før afleveringen. Ellers tager Ayvens et gebyr på 1.500 kr. efter gebyrlisten fra juni 2025. Reglerne for afleveringen står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Ved aflevering hos Ayvens", "Godtaget"],
          raekker: [
            ["Udbedrede monteringshuller i varerummet", "ja"],
            ["Almindeligt slid i varerummet", "ja"],
            ["Synlige monteringshuller i kabinen", "nej"],
            ["Eget udstyr, der ikke er taget af", "Gebyr på 1.500 kr."]
          ],
          note: `Kilde: <a href="${AYV}" rel="noopener">Ayvens: Afleveringsguide, erhverv, person- og varebiler</a> (gebyrliste pr. juni 2025), set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kassens plads i varerummet",
        tekst: [
          `Varerummets smalleste sted er mellem hjulkasserne. AutoLock bruger betegnelserne D for lastrumslængden, E for bredden mellem væggene og F for bredden mellem hjulkasserne.`,
          `Armorgard TrekDror TKD2 måler 980 × 1.105 × 200 mm og TKD1 490 × 1.105 × 300 mm (B × D × H). En skuffe, der står mellem hjulkasserne, skal være smallere end F, og en kasse, der står på tværs foran hjulkasserne, skal være smallere end E.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="Varerum set oppefra med lastrumslængde D, bredde E og bredden mellem hjulkasserne F, og en armeret skuffe placeret ved bagdørene">
<defs><marker id="pil-varerumssikring-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<rect x="70" y="40" width="280" height="150" class="tg-rum"/>
<line x1="350" y1="44" x2="350" y2="186" class="tg-doer"/>
<rect x="190" y="40" width="70" height="24" class="tg-hylde"/>
<rect x="190" y="166" width="70" height="24" class="tg-hylde"/>
<rect x="270" y="72" width="76" height="86" class="tg-modul"/>
<text x="308" y="119" text-anchor="middle" class="tg-modul__tekst">SKUFFE</text>
<text x="70" y="30" class="tg-lille">KABINE</text>
<text x="350" y="30" text-anchor="end" class="tg-lille">BAGDØRE</text>
<g class="tg-maal"><line x1="70" y1="215" x2="350" y2="215" marker-start="url(#pil-varerumssikring-1)" marker-end="url(#pil-varerumssikring-1)"/><text x="210" y="232" text-anchor="middle">D  lastrumslængde</text></g>
<g class="tg-maal"><line x1="372" y1="40" x2="372" y2="190" marker-start="url(#pil-varerumssikring-1)" marker-end="url(#pil-varerumssikring-1)"/><text x="378" y="119">E bredde</text></g>
<g class="tg-maal"><line x1="225" y1="64" x2="225" y2="166" marker-start="url(#pil-varerumssikring-1)" marker-end="url(#pil-varerumssikring-1)"/><text x="219" y="119" text-anchor="end">F</text></g>
</svg>`,
          tekst: `Skematisk varerum set oppefra med AutoLocks målbetegnelser. F er den smalleste bredde i varerummet. Kilde: <a href="${ALSTAT}" rel="noopener">AutoLock: L4V Statement Lock (målskema)</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Målene for de enkelte modeller står i <a href="/haandbogen/maal-du-skal-tjekke-foer-du-skriver-under/">mål, du skal tjekke, før du skriver under</a> og i <a href="/til-varebilen/indretning/">indretning</a>.`
        ]
      },
      {
        overskrift: "Vægt og nyttelast",
        tekst: [
          `Kassens egen vægt går fra bilens nyttelast, før der er lagt værktøj i den. En TrekDror-skuffe vejer 44-63 kg tom, og to SmartVan L-kasser vejer 88 kg tomme.`,
          `Et eksempel: To SmartVan L-kasser og en TrekDror TKD2 vejer tilsammen 151 kg. Har bilen fx 800 kg i nyttelast, er der 649 kg tilbage til værktøj, materialer, passagerer og anden indretning. Regnestykket står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["SmartVan S", 23],
            ["SmartVan M", 33],
            ["SmartVan L", 44],
            ["TrekDror TKD1", 44],
            ["TrekDror TKD3", 58],
            ["TrekDror TKD2", 63]
          ],
          note: `Tom kasse. Kilder: <a href="${SVS}" rel="noopener">SmartVan</a> og <a href="${ALTREK}" rel="noopener">AutoLock: Armorgard TrekDror</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kaskoen og fastmonteret indretning",
        tekst: [
          `GF's kasko dækker reoler, skuffer og lignende indretning af bilen, også når den er monteret efter levering. Udstyr er kun dækket, når det er fastmonteret, dvs. ikke kan fjernes uden værktøj, og udelukkende er konstrueret til brug i bilen.`,
          `Indholdet i kassen er ikke dækket af kaskoen. Det kræver en transportforsikring. Se <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a> og <a href="/til-varebilen/forsikring/forsikring-af-indretning-og-udstyr/">forsikring af indretning og udstyr</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "GF's kasko"],
          raekker: [
            ["Reoler, skuffer og lignende indretning", "ja"],
            ["Indretning monteret efter levering", "ja"],
            ["Udstyr, der kan fjernes uden værktøj", "nej"],
            ["Indholdet i kassen", "nej"]
          ],
          note: `Udstyr er kun dækket, når det er fastmonteret og udelukkende er konstrueret til brug i bilen. Indholdet i kassen skal dækkes af en transportforsikring. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Indholdet kræver transportforsikring",
        tekst: [
          `Topdanmark svarer kort nej til, om værktøj er dækket af køretøjsforsikringen. Værktøjet kræver en transportforsikring, som er et tilvalg til løsøreforsikringen. Gjensidige skriver, at dækningen ved indbrud i biler ikke omfatter de personaleudgifter, der følger med tyveriet, fx spildtid, når medarbejderne mangler værktøj, og tid til at købe nyt og dokumentere kravet.`,
          `Tryg kræver i sine varebilbetingelser, at værdigenstande og mobilt elektronisk udstyr bliver fjernet fra kabinen eller lagt i det aflåste handskerum, når brugeren forlader bilen. Topdanmark foreslår at tømme varebilen for værktøj om natten.`
        ],
        efter: [
          `Kilder: <a href="${TDFAQ}" rel="noopener">Topdanmark: Er værktøj dækket af min køretøjsforsikring?</a>, <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a>, <a href="${GJ}" rel="noopener">Gjensidige: Sikringsoversigt</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Forsikringens krav",
        tekst: [
          `Gjensidiges krav går på alarm, låse og gitter i bilen efter værdien pr. transport, ikke på kassen. Over 100.000 kr. skal bilen have en alarm i kabine og varerum. Over 200.000 kr. skal låsene være dirkefri og boringssikre, og vinduer til varerummet skal have stålgitter.`,
          `Gjensidige skriver også, at der oftest skal være synlige tegn på opbrud, før selskabet anerkender en tyveriskade. Låse står i <a href="/til-varebilen/varerumssikring/ekstra-laas-til-varebil/">ekstra lås til varebil</a> og alarmer i <a href="/til-varebilen/varerumssikring/alarm-og-gps-tracker/">alarm og GPS-tracker</a>.`
        ]
      },
      {
        overskrift: "Fra mål til montering",
        tekst: [
          `Valget af kasse hænger sammen med målene, nyttelasten, fastgørelsen og forsikringen. Trinene viser rækkefølgen, og forhandleren skal vide, hvor kassen skal stå, og om den skal boltes fast.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Mål varerummet", "Længden, bredden og bredden mellem hjulkasserne afgør, hvad der kan stå hvor."],
            ["Regn nyttelasten", "Kassens egen vægt går fra nyttelasten, før værktøjet er lagt i."],
            ["Vælg fastgørelse", "Beslag eller bolte gennem gulvet, og tjek leasingselskabets regler for huller."],
            ["Tjek forsikringen", "Kaskoen dækker fastmonteret indretning, men indholdet kræver transportforsikring."]
          ]
        }
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer kassen til varerummet.",
    spoergsmaal: [
      "Bilens model og varerummets længde, bredde og højde.",
      "Bredden mellem hjulkasserne.",
      "Hvad der skal i kassen: håndværktøj, maskiner, batterier.",
      "Om kassen skal fastgøres i gulvet, og om der må bores.",
      "Hvor meget nyttelast der er tilbage.",
      "Om kassen skal flyttes til næste bil.",
      "Om der allerede er indretning med reoler og skuffer."
    ],
    faq: [
      ["Hvad koster en armeret værktøjskasse til varebil?", "Hos AutoLock fra 4.086,21 kr. for en Armorgard OxBox og 5.087,89 kr. for en TuffBank, uden montering. Priserne er uden moms (oktober 2026)."],
      ["Kan en værktøjskasse boltes fast i varebilen?", "Ja. AutoLock sælger fastgørelsesbeslag til Armorgard TrekDror, Armorgard angiver TuffBank TB1 og TB12 som egnet til montering i køretøj, og SmartVans kasser har forborede huller i bunden."],
      ["Hvor meget vejer en armeret skuffe?", "Armorgard TrekDror vejer 44-63 kg afhængigt af størrelsen."],
      ["Er værktøjskassen dækket af kaskoen?", "Hos GF er fastmonteret indretning som reoler og skuffer dækket. Indholdet kræver en transportforsikring."],
      ["Hvilket stål er Armorgard TuffBank lavet af?", "2 og 3 mm stål, TB1 dog 2 og 5 mm, med IntaLokt-lås."],
      ["Hvad koster en værktøjskasse med lås til varerummet?", "Hos SmartVan koster model S 3.680 kr., og L og M koster 6.540-7.160 kr., uden montering (oktober 2026)."],
      ["Hvor meget vejer en værktøjskasse i stål til varebilen?", "SmartVans kasser vejer 23-44 kg, og Armorgard TrekDror-skufferne vejer 44-63 kg."],
      ["Må jeg bolte en kasse fast i en leaset varebil?", "Det afhænger af leasingselskabet. Ayvens godtager monteringshuller i varerummet, når de er udbedret tilfredsstillende, men tager 1.500 kr., hvis eget udstyr ikke er taget af ved afleveringen."]
    ],
    kilder: [
      { navn: "AutoLock: Tyverisikring til varebil (side 1)", url: AL1, dato: "2026-10-07" },
      { navn: "AutoLock: Tyverisikring til varebil (side 2)", url: AL2, dato: "2026-10-07" },
      { navn: "AutoLock: Armorgard TrekDror", url: ALTREK, dato: "2026-10-07" },
      { navn: "Armorgard: TuffBank", url: ARMTB, dato: "2026-10-04" },
      { navn: "Armorgard: Vehicle fit-out", url: ARMV, dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Gjensidige: Sikringsoversigt jf. forsikringsbetingelserne", url: GJ, dato: "2026-10-07" },
      { navn: "SmartVan: Værktøjskasse til varerummet, S", url: SVS, dato: "2026-10-07" },
      { navn: "SmartVan: Værktøjskasse til varevognen, M", url: SVM, dato: "2026-10-07" },
      { navn: "SmartVan: Værktøjskasse til varebilen, L", url: SVL, dato: "2026-10-07" },
      { navn: "AutoLock: L4V Statement Lock (målskema A-H for varerummet)", url: ALSTAT, dato: "2026-10-04" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler (gebyrliste pr. juni 2025)", url: AYV, dato: "2026-10-07" },
      { navn: "Topdanmark: Er værktøj dækket af min køretøjsforsikring?", url: TDFAQ, dato: "2026-10-07" },
      { navn: "Topdanmark: Forebyg indbrud i varebilen", url: TDFOREBYG, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: AutoLock-priserne står nu uden moms, som AutoLock selv viser dem: OxBox fra 4.086,21 kr. (5.107,76 kr. med moms), TuffBank fra 5.087,89 kr. (6.359,86 kr.), TrekDror fra 5.406,30 kr. (6.757,88 kr.), OX2 6.302,48 kr. (7.878,10 kr.), StrimmerSafe Vault fra 7.621,49 kr. (9.526,86 kr.), BarroBox 13.148,16 kr. (16.435,20 kr.) og fastgørelsesbeslag 546,50 kr. (683,13 kr.). Siden nævner moms én gang.", AL1],
    ["AutoLock: TrekDror er opbygget med bukkede og svejsede samlinger uden svage monteringspunkter, hvor kassen kan angribes, og uden synlige bolte, popnitter mv.; AutoLock anbefaler at fastgøre skufferne for ekstra tyverisikring.", ALTREK],
    ["AutoLock: TrekDror-skufferne har 80 % udtræk, og flere skuffer kan stables oven på hinanden; stabelbeslag koster 425 kr. og skillevægssæt til TKD2 440,20 kr. uden moms.", ALTREK],
    ["SmartVan: værktøjskasserne har integrerede, boringssikre låse, så en tyv ikke kan klippe en hængelås, et låsehængsel, der forhindrer låget i at klappe ned, gummipakning, så låget ikke rasler, forborede huller i bunden, et robust håndtag i hver ende, og de holder til udendørs brug, men er ikke vandtætte.", SVS],
    ["SmartVan: indvendige mål (B x H x D) er 690 x 365 x 300 mm for S, 830 x 475 x 410 mm for M og 1290 x 475 x 410 mm for L; S har 1 lås og 2 nøgler.", SVS],
    ["SmartVan: kasserne er af 1,5 mm galvaniseret stål med nittede samlinger og pulverlakering.", SVM],
    ["GF: udstyr er fastmonteret, når det er fastsat med bolt, skrue, svejsning eller tilsvarende integreret i bilens karosseri eller interiør og ikke kan fjernes uden brug af værktøj.", GF],
    ["Ayvens: FDM gennemgår bilen ved aflevering; tilfredsstillende udbedring af monteringshuller fra eftermonteret udstyr og reoler i varerummet og almindelig slitage i varerummet godtages; synlige monteringshuller i kabinen godtages ikke; udstyr, man selv har tilføjet i leasingperioden, skal fjernes, og manglende afmontering af ekstra udstyr koster 1.500 kr. (gebyrliste pr. juni 2025).", AYV],
    ["Topdanmark: værktøj er ikke dækket af køretøjsforsikringen; det kræver en transportforsikring, som er et tilvalg til løsøreforsikringen.", TDFAQ],
    ["Gjensidige: dækningen ved indbrud fra biler omfatter ikke umiddelbart personaleudgifterne ved tyveriet, fx spildtid når medarbejdere mangler værktøj, tid til genanskaffelse og tid til opgørelse og dokumentation af kravet.", GJ],
    ["Gjensidige: der skal oftest være synligt tegn på opbrud, før Gjensidige anerkender en tyveriskade.", GJ],
    ["Tryg: værdigenstande og mobilt elektronisk udstyr skal fjernes fra kabinen eller placeres i aflåst handskerum, når brugeren forlader varebilen.", TRYG],
    ["Topdanmark foreslår at tømme varebilen for værktøj om natten.", TDFOREBYG],
    ["Gjensidige kræver ved over 100.000 kr. pr. transport en alarm, der overvåger både kabine og varerum.", GJ]
  ]
};
