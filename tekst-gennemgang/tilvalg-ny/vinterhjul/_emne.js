// Emnesiden /til-varebilen/vinterhjul/ (07-10-2026)
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var FS_VEJ = `https://www.fstyr.dk/privat/krav-til-koeretoejer/vejledning-om-daek`;
var FS_MIS = `https://www.fstyr.dk/nyheder/2025/okt/misforstaaelser-om-vinterdaek-det-siger-reglerne`;
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var EU = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32020R0740`;
var EPREL = `https://eprel.ec.europa.eu/informationsheet/Fiche_483054_DA.pdf`;
var MICH = `https://www.michelin.co.uk/auto/advice/van/reinforced-tyres-utility-vehicles`;
var CONT_TRYK = `https://www.continental-tires.com/dk/da/tire-knowledge/tire-pressure/`;
var CONT_VH = `https://www.continental-tires.com/dk/da/tire-knowledge/winter-vs-all-season-tires/`;
var HESSEL = `https://www.hessel.dk/vaerksted-service/ydelser/daek-og-hjulskifte`;
var AYVENS = `https://www.ayvens.com/da-dk/for-foerere/daek/`;
var NORDANIA = `https://www.nordania.dk/erhverv/nyheder/fleet/nye-regler-for-vinterdaek-i-danmark`;
var ASTINA = `https://www.astina.dk/transit-custom-ii-transporter-nsn-16-komplethjul-stalfaelge-6x120-fortuna-vinterdaek-p-155064.html`;
var VW = `https://shop.volkswagen.dk/shop/vw-caddy-16-2868p.html`;

module.exports = {
  id: "vinterhjul",
  side: {
    slug: "vinterhjul",
    navn: "Vinterhjul og dæk",
    titel: "Vinterhjul og dæk til varebil",
    kort: `Krav til mønster og mærkning, C-dæk til varebiler og reglerne for vinterføre. Ingen af de {{tilbud}} tilbud inkluderer dæk.`,
    beskrivelse: `Dæk til varebil: krav til mønster og bæreevne, C-dæk, M+S og 3PMSF, reglen for vinterføre fra 1. juli 2025, pigdæk, dækhotel og priser på vintersæt.`,
    manchet: `Varebildæk er bygget til at bære mere end persondæk, og kravene til mønster og mærkning gælder året rundt. Der er ingen vinterdækpligt i Danmark, men siden 1. juli 2025 må man ikke køre på dæk, der er åbenlyst uegnede til føret. Dæk er ikke med i nogen af de {{tilbud}} tilbud på siden, så her kan du se reglerne, valget mellem dæktyperne og priserne.`,
    visuel: {
      hero: "vinterhjul",
      kort_fortalt: [
        ["Mønsterdybde", "1,6 mm", "mindst, for alle dæk hele året"],
        ["Krav om vinterdæk", "Nej", "men dækkene må ikke være åbenbart uegnede"],
        ["Pigdæk", "1. nov.–15. apr.", "og kun på alle hjul"],
        ["Dæk i leasingydelsen", "Nej", "i ingen af de {{tilbud}} tilbud på siden"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Kravene til dækkene",
        tekst: [
          `Kravene til dæk står i Færdselsstyrelsens synsvejledning og gælder hele året. Synshallen kontrollerer dem ved hvert syn, og politiet kan give en bøde, hvis dækkene ikke opfylder dem.`,
          `Mønsterdybden måles i hovedmønsteret, som er de brede riller i den midterste del af slidbanen og dækker cirka tre fjerdedele af bredden. Dæktrykket skal følge bilproducentens anvisning, og dækkene skal passe til fælgen.`
        ],
        punkter: [
          `<strong>Mønsterdybde:</strong> mindst 1,6 mm.`,
          `<strong>Samme aksel, samme dæk:</strong> dækkene på en aksel skal have samme størrelse og være af samme type. For- og bagaksel må være forskellige.`,
          `<strong>M+S</strong> betyder mudder og sne. <strong>3PMSF</strong>, alpesymbolet med tre tinder og et snefnug, er testet på sne og beskrives af Færdselsstyrelsen som særligt egnet til hårde vinterdage.`
        ],
        figur: [
          {
            type: "noegletal",
            data: [
              ["Nye dæk", "7–8", "mm"],
              ["Lovkrav", "1,6", "mm"],
              ["M+S-dæk må nøjes med", "160", "km/t"],
              ["TPMS-lampe ved trykfald", "20", "%"]
            ],
            note: `Kilder: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen, Vejledning om dæk</a> og <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02</a>, set den 4. oktober 2026.`
          }
        ]
      },
      {
        overskrift: "Hvem har ansvaret for dækkene",
        tekst: [
          `Færdselsloven fordeler ansvaret på to personer. Efter § 67, stk. 2, er ejeren eller den bruger, der har varig rådighed over bilen, ansvarlig for, at den er i lovlig stand. Efter stk. 3 skal føreren til enhver tid sikre, at bilen ikke kører på åbenbart uegnede dæk.`,
          `For en virksomhed betyder det, at både den, der står for bilerne, og den medarbejder, der kører, har et ansvar. Føreren skal vurdere dækkene og føret, inden turen begynder, skriver Færdselsstyrelsen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Varebil set fra siden med fremhævede dæk. Ejeren eller brugeren med varig rådighed har ansvaret for, at bilen er i lovlig stand. Føreren skal sikre, at bilen ikke kører på åbenbart uegnede dæk."><g transform="translate(80,206)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-modul" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-modul" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="10" y1="223" x2="390" y2="223"/><g class="tg-call"><line x1="150" y1="140" x2="110" y2="42"/><circle cx="150" cy="140" r="3"/><text class="tg-call__navn" x="5" y="18">Ejeren eller brugeren</text><text class="tg-call__under" x="5" y="32">bilen i lovlig stand, § 67, stk. 2</text></g><g class="tg-call"><line x1="270" y1="116" x2="330" y2="78"/><circle cx="270" cy="116" r="3"/><text class="tg-call__navn" x="395" y="56" text-anchor="end">Føreren</text><text class="tg-call__under" x="395" y="70" text-anchor="end">ingen åbenbart uegnede dæk, stk. 3</text></g></svg>`,
          tekst: `Skematisk. Dækkene er fremhævet. Kilder: <a href="${FL}" rel="noopener">færdselsloven, LBK nr. 118 af 12/01/2026, § 67</a> og <a href="${FS_MIS}" rel="noopener">Færdselsstyrelsen: Misforståelser om vinterdæk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "C-dæk og belastningsindeks",
        tekst: [
          `Varebildæk er mærket med et C efter dimensionen og har et højere belastningsindeks end persondæk i samme størrelse. Belastningsindekset skal passe til bilens tilladte akseltryk, så dækkene bærer bilen fuldt lastet.`,
          `Indekset er et kodetal. Et dæk mærket 109 bærer fx 1.030 kg, og to af dem på samme aksel bærer altså 2.060 kg. Akseltrykket står i registreringsattesten, og dækkene skal også være beregnet til bilens tophastighed.`,
          `Ikke alle varebiler skal have C-dæk. Michelin skriver, at mindre varebiler på størrelse med en personbil kan nøjes med det belastningsindeks, producenten angiver, og nogle gange skal have XL-dæk. Hvordan du læser sidevæggen, står i <a href="/til-varebilen/vinterhjul/c-daek/">C-dæk til varebil</a>.`
        ]
      },
      {
        overskrift: "Vinterføre",
        tekst: [
          `Der er hverken krav om vinterdæk eller nye regler om dem, oplyser Færdselsstyrelsen. Siden 1. juli 2025 står det i færdselsloven, at man ikke må køre på dæk, der er åbenlyst uegnede til føret. Politiet vurderer det i den enkelte situation.`,
          `Vinterføre er is, sjap og sne på vejene. Færdselsstyrelsen skriver, at dæk med M+S er godkendte vinterdæk, og anbefaler dæk med 3PMSF, hvis bilen skal køre i hårdt vinterføre. Bliver bilen fanget af vinterføre under turen, og passer dækkene ikke til det, må den ikke køre videre.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["1. juli 2025", "Færdselsloven blev præciseret, så føreren har ansvaret for, at dækkene passer til føret nu og det føre, der er ventet."],
            ["10. oktober 2025", "Færdselsstyrelsen gjorde opmærksom på, at der hverken er krav om vinterdæk eller nye regler om dem."],
            ["1. januar 2026", "Varebiler, der bliver registreret første gang fra denne dato, skal have dæktrykovervågning."],
            ["6. juli 2026", "Dæk skal være støjgodkendt efter FN-regulativ 117-04. Dæk efter de ældre udgaver, fremstillet senest den dag, kan monteres til 6. januar 2029."]
          ],
          note: `Kilder: <a href="${FS_MIS}" rel="noopener">Færdselsstyrelsen: Misforståelser om vinterdæk</a> og <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.020 og 8.02.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sommer-, vinter- eller helårsdæk",
        tekst: [
          `Færdselsstyrelsen skriver, at sommerdæk egner sig til kørsel hele året undtagen i vinterføre, og at vinterdæk egner sig til vinterføre. Helårsdæk er ikke en dæktype i reglerne, men en betegnelse fra markedsføringen. Det er mærkningen, der afgør, om et helårsdæk er et vinterdæk.`,
          `Med sommer- og vinterhjul skal hjulene skiftes to gange om året og opbevares imellem. Med helårsdæk falder skift og opbevaring væk. Valget mellem de to løsninger står i <a href="/til-varebilen/vinterhjul/helaarsdaek-til-varebil/">helårsdæk til varebil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "Sommerdæk", "Helårsdæk med 3PMSF", "Vinterdæk med 3PMSF"],
          raekker: [
            ["Vinterdæk efter reglerne", "nej", "ja", "ja"],
            ["Kørsel i vinterføre", "nej", "ja", "ja"],
            ["Kørsel om sommeren", "ja", "ja", "Dårligere bremser"],
            ["Skift om året", "To", "Ingen", "To"]
          ],
          note: `Kilder: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.002</a> og <a href="${CONT_VH}" rel="noopener">Continental: Vinterdæk eller helårsdæk</a>, set den 7. oktober 2026. Færdselsstyrelsen skriver, at vinterdæk om sommeren giver dårligere bremseevne og højere forbrug.`
        }
      },
      {
        overskrift: "Pigdæk i Danmark",
        tekst: [
          `Pigdæk må kun bruges fra 1. november til 15. april. Alle hjul på bilen skal have pigdæk, og kører bilen med en registreringspligtig anhænger, gælder det hele vogntoget.`,
          `Antallet af pigge skal være tilnærmelsesvis det samme på alle hjul. Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsens detailforskrifter, § 18</a>, set den 4. oktober 2026.`,
          `Pigdæk er undtaget fra kravet om støjgodkendelse. Et vinterdæk med huller til pigge, men uden pigge, er ikke undtaget og skal være støjgodkendt som andre dæk, skriver synsvejledningen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Året fra januar til december. Pigdæk er tilladt fra 1. november til 15. april, og de skal sidde på alle hjul på bil og registreringspligtig anhænger."><text class="tg-fremhaev" x="0" y="66">Pigdæk</text><text class="tg-lille" x="158" y="30" text-anchor="middle">15. APRIL</text><text class="tg-lille" x="340" y="30" text-anchor="middle">1. NOVEMBER</text><rect class="tg-kasse" x="60" y="44" width="336" height="30"/><rect class="tg-modul" x="60" y="44" width="98" height="30"/><rect class="tg-modul" x="340" y="44" width="56" height="30"/><text class="tg-modul__tekst" x="70" y="63">TILLADT</text><text class="tg-modul__tekst" x="346" y="63">TILLADT</text><text x="200" y="63">ikke tilladt</text><line class="tg-doer" x1="158" y1="38" x2="158" y2="80"/><line class="tg-doer" x1="340" y1="38" x2="340" y2="80"/><text class="tg-lille" x="74" y="100" text-anchor="middle">J</text><text class="tg-lille" x="102" y="100" text-anchor="middle">F</text><text class="tg-lille" x="130" y="100" text-anchor="middle">M</text><text class="tg-lille" x="158" y="100" text-anchor="middle">A</text><text class="tg-lille" x="186" y="100" text-anchor="middle">M</text><text class="tg-lille" x="214" y="100" text-anchor="middle">J</text><text class="tg-lille" x="242" y="100" text-anchor="middle">J</text><text class="tg-lille" x="270" y="100" text-anchor="middle">A</text><text class="tg-lille" x="298" y="100" text-anchor="middle">S</text><text class="tg-lille" x="326" y="100" text-anchor="middle">O</text><text class="tg-lille" x="354" y="100" text-anchor="middle">N</text><text class="tg-lille" x="382" y="100" text-anchor="middle">D</text><text class="tg-lille" x="60" y="132">KUN PÅ ALLE HJUL, OGSÅ PÅ ANHÆNGEREN</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsens detailforskrifter, § 18</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Færdselsstyrelsens anbefalinger",
        tekst: [
          `Ud over reglerne giver Færdselsstyrelsen en række anbefalinger. De er ikke krav, men de viser, hvordan myndigheden selv ser på vinterdæk, helårsdæk og skiftet om foråret.`,
          `Styrelsen skriver også, at et nedslidt vinterdæk kan være farligere i vinterføre end et nyt sommerdæk.`
        ],
        kort: [
          ["Skift i god tid", "Skift til vinterdæk, hvis du ikke kan undvære bilen på dage med risiko for sne, is og sjap. Vinterføre er is, sjap og sne på vejene."],
          ["3PMSF på sne", "Det bedste dæk på sne er mærket 3PMSF, skriver Færdselsstyrelsen."],
          ["Helårsdæk", "Helårsdæk er en betegnelse fra markedsføringen. Mærkningen og egenskaberne varierer fra fabrikat til fabrikat."],
          ["Om foråret", "Skift til sommerdæk, når frostrisikoen er ovre. Vinterdæk om sommeren giver dårligere bremseevne og højere forbrug."],
          ["Anhængeren", "Styrelsen vurderer, at dæktypen på en anhænger som udgangspunkt ikke er afgørende for vejgrebet i vinterføre."]
        ],
        efter: [
          `Kilde: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen, Vejledning om dæk</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Dækmærket og M+S",
        tekst: [
          `Nye dæk sælges med et EU-dækmærke. Det viser bl.a. størrelse, vådgrebsklasse, støj og et piktogram, hvis dækket har 3PMSF. M+S står ikke på dækmærket, kun på selve dækket.`,
          `Dækmærket gælder også varebildæk. EU's forordning kalder dem C2-dæk, mens personbildæk er C1.`,
          `Dækmærket har en QR-kode til EU's produktdatabase EPREL, hvor databladet ligger. På databladet for et C2-dæk står belastningsindekset for både enkelt- og tvillingmontering, og om dækket er godkendt til krævende sneforhold.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="EU-dækmærkets felter og dækkets sidevæg med M+S og alpesymbol"><rect x="20" y="20" width="150" height="185" rx="6" class="tg-rum"/><text x="32" y="44" class="tg-fremhaev">EU-dækmærke</text><rect x="32" y="56" width="126" height="26" class="tg-kasse"/><text x="40" y="73">Brændstof A–E</text><rect x="32" y="90" width="126" height="26" class="tg-kasse"/><text x="40" y="107">Vådgreb A–E</text><rect x="32" y="124" width="126" height="26" class="tg-kasse"/><text x="40" y="141">Støj i dB</text><rect x="32" y="158" width="126" height="26" class="tg-modul"/><text x="40" y="175">3PMSF / isgreb</text><text x="32" y="198" class="tg-lille">QR-KODE</text><text x="210" y="50" class="tg-lille">DÆKKETS SIDEVÆG</text><rect x="210" y="60" width="175" height="80" rx="6" class="tg-rum"/><text x="226" y="110" class="tg-fremhaev">M+S</text><path d="M300,120 L314,92 L321,104 L328,90 L342,120 Z" class="tg-profil"/><g class="tg-maal"><line x1="355" y1="96" x2="371" y2="96"/><line x1="363" y1="88" x2="363" y2="104"/><line x1="357" y1="90" x2="369" y2="102"/><line x1="369" y1="90" x2="357" y2="102"/></g><g class="tg-call"><line x1="300" y1="125" x2="160" y2="171"/><circle cx="300" cy="125" r="3"/></g><text x="210" y="166" class="tg-lille">M+S: KUN PÅ DÆKKET</text><text x="210" y="182" class="tg-lille">3PMSF: DÆK OG DÆKMÆRKE</text></svg>`,
          tekst: `EU-dækmærkets felter og dækkets sidevæg. Skematisk. Kilder: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen</a> og <a href="${EU}" rel="noopener">forordning (EU) 2020/740</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde om databladet: <a href="${EPREL}" rel="noopener">EPREL, datablad 483054</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Dæktrykovervågning (TPMS) på nye varebiler",
        tekst: [
          `Varebiler (N1), der er registreret første gang 1. januar 2026 eller senere, skal ifølge Færdselsstyrelsens synsvejledning have dæktrykovervågning. Kravet gælder ikke ældre varebiler. En original TPMS tænder en gul kontrollampe, når trykket i et eller flere dæk er faldet 20 procent eller mere.`,
          `Et direkte system har en sensor i hvert hjul, så vinterhjulene skal også have sensorer. Et indirekte system bruger ABS-sensorerne og virker uden ekstra dele. Mere i <a href="/til-varebilen/vinterhjul/daektryk-og-moensterdybde/">dæktryk og mønsterdybde</a>.`,
          `Kravet gælder ikke varebiler, der er fremstillet i lille serie. For en virksomhed, der køber nye biler, betyder kravet, at et ekstra sæt hjul skal bestilles med sensorer, hvis bilen har et direkte system.`
        ]
      },
      {
        overskrift: "Mønsterdybde og dæktryk i praksis",
        tekst: [
          `Nye dæk har typisk en mønsterdybde på 7 til 8 mm, og dækket er ulovligt, når mønsteret kommer under 1,6 mm. Slidindikatorerne i rillerne viser, når grænsen er nået. Færdselsstyrelsen anbefaler at skifte dækkene, før de når grænsen.`,
          `Værkstederne har deres egne grænser. Hessel anbefaler at skifte sommerdæk ved 3 mm og vinterdæk ved 4 mm og altid, når dækkene er mere end 6 år gamle.`,
          `Dæktrykket skal følge bilproducentens anvisning. Continental skriver, at instruktionsbogen kan have ét tryk til normal kørsel og ét til fuld last, og anbefaler at tjekke trykket én eller to gange om måneden og altid, når bilen skal bære mere.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Snit gennem en mønsterrille. Et nyt dæk har 7 til 8 mm mønster. Hessel anbefaler at skifte vinterdæk ved 4 mm og sommerdæk ved 3 mm. Lovkravet på 1,6 mm er fremhævet med den tykke stiplede linje, hvor slidindikatoren sidder."><rect class="tg-profil" x="20" y="40" width="100" height="96"/><rect class="tg-profil" x="170" y="40" width="100" height="96"/><rect class="tg-kasse" x="20" y="136" width="250" height="20"/><rect class="tg-hylde" x="132" y="117" width="26" height="19"/><line class="tg-skinne-tynd" x1="120" y1="40" x2="278" y2="40"/><line class="tg-skinne-tynd" x1="120" y1="88" x2="278" y2="88"/><line class="tg-skinne-tynd" x1="120" y1="100" x2="278" y2="100"/><line class="tg-skinne" x1="120" y1="117" x2="278" y2="117"/><text x="284" y="44">7–8 mm: nyt</text><text x="284" y="92">4 mm: vinter</text><text x="284" y="104">3 mm: sommer</text><text class="tg-fremhaev" x="284" y="121">1,6 mm: lov</text><text class="tg-lille" x="20" y="180">SNIT GENNEM EN MØNSTERRILLE</text></svg>`,
          tekst: `Skematisk. Dybderne er tegnet i målestok, og 3 og 4 mm er Hessels anbefalinger. Kilder: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a> og <a href="${HESSEL}" rel="noopener">Hessel</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde om dæktryk: <a href="${CONT_TRYK}" rel="noopener">Continental: Dæktryk</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Skader og lapning",
        tekst: [
          `Dæk, fælge og hjullejer skal være ubeskadigede. Synsvejledningen nævner fire slags skader, der gør et dæk ulovligt.`,
          `Lappespray og propper, der sættes i udefra, regnes ikke som en permanent reparation. De er kun beregnet til at køre bilen til nærmeste fagmand. En permanent reparation skal følge dækfabrikantens forskrifter.`
        ],
        punkter: [
          `Brud eller skade på dækkets bærende eller lufttætte lag.`,
          `Stik- eller snitskader.`,
          `Revner i gummiet, der går ind til den indre opbygning af stål eller lærred.`,
          `Lokale buler, som tyder på en fejl inde i dækket.`
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.001</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Elvarebilen og dækkene",
        tekst: [
          `Kravene i synsvejledningen er de samme for en elvarebil som for en dieselbil. Bæreevnen skal passe til akseltrykket, og mønsteret skal være mindst 1,6 mm.`,
          `Hvordan elbilens vægt, støj og rækkevidde hænger sammen med valget af dæk, står i <a href="/til-varebilen/vinterhjul/daek-til-elvarebil/">dæk til elvarebil</a>.`
        ]
      },
      {
        overskrift: "Dæk i leasingaftalen",
        tekst: [
          `{{daek_ikke}} af de {{tilbud}} tilbud på siden skriver, at dæk ikke er med, og {{daek_tavs}} nævner det ikke. Vinterhjul og dækhotel kan ofte lægges ind i aftalen. Ved operationel leasing står kravet til mønsterdybde ved tilbagelevering i aftalen.`,
          `Ayvens skriver, at sæsondæk kan være en del af aftalen. Er de med, kommer en bil, der leveres mellem 15. oktober og 31. marts, med vinterdæk på stålfælge. Nordania monterer vinterdæk med 3PMSF på biler med en dækaftale.`,
          `Priser og indhold i et dækhotel står i <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel til varebil</a>, og afleveringen af bilen står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        efter: [
          `Kilder: <a href="${AYVENS}" rel="noopener">Ayvens: Dæk til din leasingbil</a> og <a href="${NORDANIA}" rel="noopener">Nordania: Nye regler for vinterdæk</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvad et vintersæt koster",
        tekst: [
          `Et komplet sæt vinterhjul på stålfælge til en Transit Custom koster fra 7.640 kr. hos Astina, og Volkswagens originale vintersæt til Caddy koster 7.995 kr. Begge priser er med moms og uden montering på bilen. Flere priser i <a href="/til-varebilen/vinterhjul/vinterhjul-pris/">pris på vinterhjul</a>, og opbevaring i <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel</a>.`,
          `Oveni kommer opbevaring og skift. Hos Hessel koster dækhotel med hjulskift 995 kr. pr. sæson, og hos de værksteder, vi har set på, ligger prisen på 499–1.195 kr. pr. sæson. Med helårsdæk falder den udgift væk.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Vintersæt, Transit Custom, Astina", "7.640", "kr."],
            ["Originalt vintersæt, Caddy", "7.995", "kr."],
            ["Dækhotel med hjulskift, Hessel", "995", "kr. pr. sæson"]
          ],
          note: `Astinas pris for 16" stålfælge med Fortuna-vinterdæk. Kilder: <a href="${ASTINA}" rel="noopener">Astina</a>, <a href="${VW}" rel="noopener">Volkswagen shop</a> og <a href="${HESSEL}" rel="noopener">Hessel</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Vinterdæk på ture over grænsen",
        tekst: [
          `Reglerne i nabolandene er strammere end de danske. Tyskland kræver alpesymbolet ved glat føre, og Sverige og Norge kræver 3 mm mønster om vinteren.`
        ],
        tabel: {
          kolonner: ["Land", "Krav til en varebil", "Mønster om vinteren"],
          raekker: [
            ["Danmark", "Ingen vinterdækpligt. Dæk må ikke være åbenbart uegnede til føret", "1,6 mm"],
            ["Tyskland", "Ved glat føre: dæk med alpesymbol på alle hjul", "1,6 mm"],
            ["Sverige", "1. december–31. marts ved vinterføre: vinterdæk", "3 mm"],
            ["Norge", "Vinterdæk eller kæder, når føret kræver det", "3 mm fra 1. november"]
          ],
          note: `Kilder: <a href="${FS_MIS}" rel="noopener">Færdselsstyrelsen</a>, <a href="https://www.gesetze-im-internet.de/stvo_2013/__2.html" rel="noopener">StVO § 2</a> og <a href="https://www.gesetze-im-internet.de/stvzo_2012/__36.html" rel="noopener">StVZO § 36</a>, <a href="https://www.transportstyrelsen.se/sv/vagtrafik/fordon/fordonsregler/dack/vinterdack/" rel="noopener">Transportstyrelsen</a> og <a href="https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/vinterdekk/" rel="noopener">Statens vegvesen</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Du kan læse om perioderne, pigdæk og anhængere i <a href="/til-varebilen/vinterhjul/vinterdaek-i-udlandet/">vinterdæk i udlandet</a>.`
        ]
      },
      {
        overskrift: "Sådan finder du de rigtige dæk",
        tekst: [
          `Skal en eller flere varebiler have nye dæk, kan du gå frem i fem trin. Hvert trin har sin egen side med detaljerne.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Find tallene", "Dimension og indeks står på dækket, akseltrykket i registreringsattesten. Se <a href=\"/til-varebilen/vinterhjul/c-daek/\">C-dæk</a>."],
            ["Vælg dæktype", "Sommer og vinter eller helårsdæk efter kørslen. Se <a href=\"/til-varebilen/vinterhjul/helaarsdaek-til-varebil/\">helårsdæk</a>."],
            ["Regn på prisen", "Dæk, fælge, montering og evt. sensorer. Se <a href=\"/til-varebilen/vinterhjul/vinterhjul-pris/\">pris på vinterhjul</a>."],
            ["Planlæg skift", "Dækhotel eller egen opbevaring. Se <a href=\"/til-varebilen/vinterhjul/daekhotel/\">dækhotel</a>."],
            ["Hold øje", "Tryk og mønster året rundt. Se <a href=\"/til-varebilen/vinterhjul/daektryk-og-moensterdybde/\">dæktryk og mønsterdybde</a>."]
          ]
        },
        efter: [
          `Har virksomheden elvarebiler, så læs også <a href="/til-varebilen/vinterhjul/daek-til-elvarebil/">dæk til elvarebil</a>, og kører bilerne til Tyskland, Sverige eller Norge om vinteren, står reglerne i <a href="/til-varebilen/vinterhjul/vinterdaek-i-udlandet/">vinterdæk i udlandet</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal dækleverandøren vide",
    spoergsmaal_manchet: "Så passer tilbuddet til bilen og brugen.",
    spoergsmaal: [
      "Dækdimension og belastningsindeks.",
      "Tilladt akseltryk for og bag fra registreringsattesten.",
      "Sommer-, vinter- eller helårsdæk.",
      "Om hjulene skal på fælge, så skiftet går hurtigt.",
      "Om bilen har direkte TPMS med sensorer i hjulene.",
      "Om der skal være dækhotel.",
      "Leasingaftalens krav til mønsterdybde ved tilbagelevering."
    ],
    faq: [
      ["Er vinterdæk lovpligtige i Danmark?", "Nej. Siden 1. juli 2025 må man dog ikke køre på dæk, der er åbenlyst uegnede til føret. Politiet vurderer det i den enkelte situation."],
      ["Hvor dybt skal mønstret være?", "Mindst 1,6 mm."],
      ["Er dæk med i leasingydelsen?", "Ikke i nogen af de {{tilbud}} tilbud på siden. {{daek_ikke}} skriver det, og {{daek_tavs}} nævner det ikke."],
      ["Må man blande to dækmærker?", "Ikke på den samme aksel. Dækkene på en aksel skal have samme størrelse og type. For- og bagaksel må være forskellige."],
      ["Hvornår må en varebil køre med pigdæk?", "Fra 1. november til 15. april, og kun hvis alle hjul har pigdæk. Med en registreringspligtig anhænger gælder det hele vogntoget."],
      ["Står M+S på EU-dækmærket?", "Nej. M+S står kun på dækket. 3PMSF vises både på dækket og som piktogram på dækmærket."],
      ["Skal varebilen have vinterdæk i Tyskland?", "Ved glat føre skal alle hjul have dæk med alpesymbolet (3PMSF). Der er ingen fast periode. Læs mere i <a href=\"/til-varebilen/vinterhjul/vinterdaek-i-udlandet/\">vinterdæk i udlandet</a>."],
      ["Hvem har ansvaret for dækkene på en firmabil?", "Ejeren eller brugeren med varig rådighed har ansvaret for, at bilen er i lovlig stand, og føreren skal sikre, at den ikke kører på åbenbart uegnede dæk. Det står i færdselslovens § 67."],
      ["Må man køre videre på lappespray?", "Kun til nærmeste fagmand. Synsvejledningen regner ikke lappespray og udvendige propper som en permanent reparation."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Vejledning om dæk", url: FS_VEJ, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Misforståelser om vinterdæk — det siger reglerne", url: FS_MIS, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, gældende fra 1. september 2026", url: SYN, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, detailforskrifter § 18 (pigdæk)", url: SYN, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven, LBK nr. 118 af 12/01/2026", url: FL, dato: "2026-10-07" },
      { navn: "EUR-Lex: Forordning (EU) 2020/740 om dækmærkning", url: EU, dato: "2026-10-04" },
      { navn: "EPREL: Produktdatablad 483054, Continental VanContact 4Season 215/65 R 16 C (C2)", url: EPREL, dato: "2026-10-07" },
      { navn: "Michelin: Reinforced tyres for utility vehicles (C, XL og REINF)", url: MICH, dato: "2026-10-07" },
      { navn: "Continental: Dæktryk", url: CONT_TRYK, dato: "2026-10-07" },
      { navn: "Continental: Vinterdæk eller helårsdæk", url: CONT_VH, dato: "2026-10-07" },
      { navn: "Hessel: Dækskifte, hjulskifte og dækhotel", url: HESSEL, dato: "2026-10-07" },
      { navn: "Ayvens: Dæk til din leasingbil", url: AYVENS, dato: "2026-10-07" },
      { navn: "Nordania: Nye regler for vinterdæk i Danmark (dækaftale og booking)", url: NORDANIA, dato: "2026-10-07" },
      { navn: "Astina: Transit Custom II / Transporter 16\" komplethjul på stålfælge med Fortuna vinterdæk", url: ASTINA, dato: "2026-10-07" },
      { navn: "Volkswagen shop: VW Caddy 16\" vinterkomplethjul på stålfælge", url: VW, dato: "2026-10-07" },
      { navn: "Tyskland, StVO § 2, stk. 3a (dæk ved glat føre)", url: "https://www.gesetze-im-internet.de/stvo_2013/__2.html", dato: "2026-10-04" },
      { navn: "Tyskland, StVZO § 36 (dæk, alpesymbol og mønsterdybde)", url: "https://www.gesetze-im-internet.de/stvzo_2012/__36.html", dato: "2026-10-04" },
      { navn: "Transportstyrelsen (Sverige): Vinterdäck", url: "https://www.transportstyrelsen.se/sv/vagtrafik/fordon/fordonsregler/dack/vinterdack/", dato: "2026-10-04" },
      { navn: "Statens vegvesen (Norge): Krav til dekk", url: "https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/vinterdekk/", dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["RETTET: Astinas komplette vintersæt på stålfælge til Transit Custom (Fortuna vinterdæk, 16\") koster 7.640 kr. inkl. moms den 7. oktober 2026. Den gamle side skrev 7.639 kr. (set den 4. oktober).", ASTINA],
    ["Volkswagens originale vinterkomplethjul til Caddy koster 7.995 kr. inkl. moms (uændret fra den gamle side).", VW],
    ["Færdselslovens § 67, stk. 2: ejeren eller brugeren med varig rådighed er ansvarlig for, at køretøjet er i lovlig stand; stk. 3: føreren skal til enhver tid være opmærksom på, at køretøjet ikke er forsynet med åbenbart uegnede dæk.", FL],
    ["Færdselsstyrelsen: man skal vurdere, om bilens dæk er egnede til føret, inden man kører; bliver man under kørsel fanget i vejr med vinterglatte veje, som dækkene ikke er egnet til, må man ikke køre videre; nyheden er fra 10. oktober 2025.", FS_MIS],
    ["Synsvejledningen 8.02.002: mønsterdybden måles i hovedmønsteret, de brede riller i slidbanens midterste del, der dækker ca. 3/4 af slidbanens bredde; oppumpningstrykket skal være i overensstemmelse med køretøjsfabrikantens forskrift; dækket skal svare til fælgen.", SYN],
    ["Michelin: mindre varebiler på størrelse med en personbil har ikke pligt til C-dæk, men nogle gange XL- eller REINF-dæk; står kravet ikke i instruktionsbogen, skal belastningsindekset overholdes.", MICH],
    ["Færdselsstyrelsen: sommerdæk er egnet til kørsel hele året, undtagen i vinterføre; vinterdæk er egnet til kørsel i vinterføre; helårsdæk er en markedsføringsbetegnelse; et nedslidt vinterdæk kan være farligere i vinterføre end et nyt sommerdæk i vinterføre; Færdselsstyrelsen anbefaler at udskifte dæk, før de når minimumsgrænsen.", FS_VEJ],
    ["Synsvejledningen 8.02.020: vinterdæk med huller til pigge (pigdæk uden pigge) er ikke undtaget fra kravet om støjgodkendelse; fra 6. juli 2026 skal dæk være støjgodkendt efter FN-regulativ 117-04.", SYN],
    ["Synsvejledningen 8.02.024: kravet om dæktrykovervågning på varebil N1 gælder ikke varebiler fremstillet i lille serie.", SYN],
    ["EPREL-databladet for et C2-dæk viser belastningstal for både enkelt- og dobbeltmontering og om dækket er til krævende sneforhold; dækmærket har en QR-kode til EPREL.", EPREL],
    ["Continental: helårsdæk kan bruges hele året rundt og virker godt under milde vinterforhold.", CONT_VH],
    ["Hessel anbefaler at skifte sommerdæk ved 3 mm, vinterdæk ved 4 mm og dæk, der er mere end 6 år gamle.", HESSEL],
    ["Continental: instruktionsbogen kan have ét dæktryk til normal brug og ét til fuld belastning; trykket bør tjekkes 1-2 gange om måneden og altid før en længere rejse, eller hvis bilen skal bære mere vægt.", CONT_TRYK],
    ["Synsvejledningen 8.02.001: dæk, fælge og hjullejer skal være ubeskadigede; beskadigelser kan være brud eller skade på dækkets bærende eller lufttætte lag, stik- eller snitskader, revner til den indre opbygning i stål, lærred el.lign. og lokale udbulinger, der indikerer indre fejl; lappespray og udefra foretagne propninger er ikke permanent reparation, men kun til kørsel til nærmeste fagmand; ved permanent reparation skal dækfabrikantens forskrifter overholdes.", SYN],
    ["Ayvens: er sæsondæk en del af kontrakten, og leveres bilen 15. oktober-31. marts, leveres den med vinterdæk på stålfælge uden hjulkapsler.", AYVENS],
    ["Nordania monterer vinterdæk med 3PMSF på firmabiler med dækaftale.", NORDANIA]
  ]
};
