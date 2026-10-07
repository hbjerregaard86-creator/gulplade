// Emnesiden /til-varebilen/ombygning/ (07-10-2026)
var SYN = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var MST = `https://motorst.dk/erhverv/registrering-og-omregistrering/aendring-af-koeretoejets-udstyr-eller-anvendelse`;
var BEK428 = `https://www.retsinformation.dk/eli/lta/2022/428`;
var ATP = `https://www.retsinformation.dk/eli/lta/2025/1330`;
var FSTYR = `https://www.fstyr.dk/privat/syn/registreringssyn`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var FVT = `https://foedevarestyrelsen.dk/kost-og-foedevarer/start-og-drift-af-foedevarevirksomhed/virksomhedstyper-hygiejneregler/transportoer-af-foedevarer`;
var AYVENS = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf`;
var NORDANIA = `https://nordania.dk/erhverv/find-hjaelp/aflevering/leaset-bil-hos-nordania`;
var MST_MV = `https://motorst.dk/media/jl3aolmk/mandskabsvogn-0924.pdf`;
var AUTOLOCK = `https://autolock.dk/statement-lock/`;
var BN = `https://www.bn.dk/erhverv/nye-varebiler/ford/transit-ladvogn`;
var B750 = `https://www.bar-cargolift.dk/lift-750kg`;
var VAN = `https://www.bar-cargolift.dk/vanlift`;
var DHOL = `https://www.dhollandia.com/dk/da`;
var HMF270 = `https://dk.hmfcranes.com/produkter/lastbilkraner/krantyper/knaekarmskraner-k/270k-rc`;
var HMF340 = `https://dk.hmfcranes.com/produkter/lastbilkraner/krantyper/knaekarmskraner-k/340k-rc`;
var AT = `https://at.dk/faa-viden/fysisk-arbejde/tekniske-hjaelpemidler/krav-til-certifikat-ved-brug-af-forskellige-maskiner/`;

module.exports = {
  id: "ombygning",
  side: {
    slug: "ombygning",
    navn: "Ombygning",
    titel: "Ombygning af varebil: lift, lad, køl og syn",
    kort: `Lift, lad, tipper, køl, kran og mandskabskabine: hvad ombygningen kræver af syn, registrering, eftersyn og nyttelast.`,
    beskrivelse: `Bagsmæklift, lad, tipper, kølebil, kran og mandskabsvogn. Hvornår ombygningen skal synes, hvad den vejer, og hvad leasingselskabet siger.`,
    manchet: `En varebil kan bygges om til næsten alt: lift, lad, tipper, køl, kran eller ekstra personkabine. Fælles for dem er, at ombygningen ændrer bilens vægt og ofte dens registrerede data, og så skal bilen til <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">registreringssyn</a>, før den må køre. Her kan du se typerne, reglerne og tallene.`,
    visuel: {
      hero: "ombygning",
      kort_fortalt: [
        ["Registreringssyn", "over 50 kg", "ændret egenvægt kræver syn"],
        ["Bagsmæklift til chassis", "160 kg", "Bär BC 750 S2L, går fra nyttelasten"],
        ["Hovedeftersyn", "hver 12. måned", "på lift, tiplad og kran"],
        ["Kran uden certifikat", "til og med 8 tm", "ifølge Arbejdstilsynet"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Seks slags ombygning",
        tekst: [
          `En ombygning giver varebilen udstyr, den ikke har fra fabrikken. Det kan være en lift til paller, et lad eller en tipper til materialer, en isoleret kasse til kølevarer, en kran eller en ekstra personkabine til et sjak.`,
          `Opbygningerne kan kombineres. En ladvogn kan fx have dobbeltkabine, kran, tiplad og lift på samme chassis, og så lægges vægten af det hele til bilens egenvægt. Hver type har sin egen side med tal og regler.`
        ],
        kort: [
          ["Bagsmæklift", "Lift bag på kassevognen eller ladbilen til paller, rullebure og tunge emner. <a href=\"/til-varebilen/ombygning/bagsmaeklift/\">Bagsmæklift</a>"],
          ["Lad og tipper", "Chassis med førerhus og et fast alu-lad, en bagtipper eller en 3-vejs tipper. <a href=\"/til-varebilen/ombygning/lad-og-tipper/\">Lad og tipper</a>"],
          ["Kølebil", "Isoleret varerum og køleaggregat, med ATP-godkendelse, når varerne krydser grænsen. <a href=\"/til-varebilen/ombygning/koelebil/\">Kølebil</a>"],
          ["Mandskabsvogn", "Ekstra personkabine i en kassevogn eller dobbeltkabine med lad. <a href=\"/til-varebilen/ombygning/mandskabsvogn-ombygning/\">Ombygning til mandskabsvogn</a>"],
          ["Kran", "Knækarmskran på en ladbil, med egne regler for certifikat og eftersyn. <a href=\"/til-varebilen/ombygning/ladbil-med-kran/\">Ladbil med kran</a>"],
          ["Godkendelse", "Registreringssyn, godkendelseserklæring og typegodkendelse i flere trin. <a href=\"/til-varebilen/ombygning/godkendelse-af-ombygning/\">Godkendelse af ombygning</a>"]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 234" role="img" aria-label="Ladvogn set fra siden med fire opbygninger: dobbeltkabine, kran bag kabinen, tiplad og bagsmæklift bagerst."><rect class="tg-rum" x="20" y="96" width="96" height="84" rx="6"/><line class="tg-skillevaeg" x1="66" y1="100" x2="66" y2="180"/><rect class="tg-hylde" x="116" y="176" width="250" height="6"/><rect class="tg-rum" x="140" y="140" width="220" height="36"/><rect class="tg-modul" x="120" y="118" width="14" height="58"/><polygon class="tg-modul" points="122,120 330,104 330,112 124,130"/><rect class="tg-modul" x="362" y="128" width="6" height="52"/><circle class="tg-kasse" cx="60" cy="184" r="16"/><circle class="tg-kasse" cx="300" cy="184" r="16"/><line class="tg-gulvlinje" x1="0" y1="200" x2="400" y2="200"/><line class="tg-skinne-tynd" x1="68" y1="89" x2="68" y2="100"/><line class="tg-skinne-tynd" x1="200" y1="73" x2="200" y2="114"/><line class="tg-skinne-tynd" x1="365" y1="105" x2="365" y2="128"/><g class="tg-nr"><circle cx="68" cy="80" r="9"/><text x="68" y="84" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="200" cy="64" r="9"/><text x="200" y="68" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="250" cy="158" r="9"/><text x="250" y="162" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="365" cy="96" r="9"/><text x="365" y="100" text-anchor="middle">4</text></g><text x="20" y="226">1 Dobbeltkabine · 2 Kran · 3 Tiplad · 4 Lift</text></svg>`,
          tekst: `Skematisk. En ladvogn kan have flere opbygninger på én gang, og hver af dem lægges til egenvægten.`
        }
      },
      {
        overskrift: "Ombygningen skal synes",
        tekst: [
          `Ændres en registreret varebils indretning eller udstyr på en af disse måder, skal den godkendes ved et registreringssyn, før den igen tages i brug, efter bekendtgørelsen om godkendelse og syn af køretøjer, § 5:`
        ],
        punkter: [
          `<strong>Konstruktive ændringer</strong> af styreapparat, bremser, motor eller bærende elementer.`,
          `<strong>Egenvægten ændres med mere end 50 kg.</strong> En lift, et lad eller en køleopbygning gør det næsten altid.`,
          `<strong>Tilladte vægte ændres</strong>, fx totalvægt eller tilladt vægt af påhængskøretøj.`,
          `<strong>Andre registrerede tekniske data ændres</strong>, fx antal siddepladser.`,
          `<strong>Montering eller ændring af tilkoblingsanordning</strong>, dog med undtagelser for trækkroge, se <a href="/til-varebilen/traek-og-tagudstyr/">træk og tagudstyr</a>.`
        ],
        efter: [
          `En ændring på 50 kg eller derunder skal kun synes, hvis du vil have den nye vægt registreret. Monterer du en trækkrog på en bil, der er registreret for mindre end 8 år siden og højst må veje 3.500 kg, godkendes den hos en nummerpladeoperatør. Skifter bilen fra benzin til diesel, skal den også til syn.`,
          `Synsvirksomheden registrerer ændringen i Motorregistret, skriver Motorstyrelsen. Det almindelige periodiske syn står i <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>. Kilder: <a href="${SYN}" rel="noopener">BEK nr. 1685 af 16/12/2025, § 5</a> og <a href="${MST}" rel="noopener">Motorstyrelsen: Ændring af køretøjets udstyr eller anvendelse</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvad er en konstruktiv ændring",
        tekst: [
          `Bekendtgørelsen om detailforskrifter for køretøjer definerer i bilag 2 enhver ændring af styreapparat, bremser, motor og bærende elementer som en konstruktiv ændring, medmindre bilaget undtager den. Godkendelsen sker ved syn på grundlag af dokumentation fra bilfabrikanten eller fra en godkendt prøvningsinstans.`,
          `Ændringer af karrosseri og chassisramme er som udgangspunkt konstruktive. En ventilationsklap eller et soltag er det ikke, når udskæringen højst er 1,00 × 0,50 m, ligger symmetrisk, har en ramme om kanten, sidder mindst 0,15 m fra tagkanten, og der ikke skæres i afstivende profiler. Påboltede skærme og døre må også skiftes til et andet materiale uden syn.`,
          `Forlænges eller forkortes chassisrammen, så akselafstand eller overhæng ændres, er det en konstruktiv ændring af de bærende dele. Den kræver dokumentation fra bilfabrikanten, en godkendelse eller en prøvningsinstans.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Ændring", "Registreringssyn"],
          raekker: [
            ["Lift, der vejer mere end 50 kg", "ja"],
            ["Ny akselafstand eller nyt overhæng", "ja, konstruktiv ændring"],
            ["Soltag eller ventilationsklap inden for målene", "nej, ikke konstruktiv"],
            ["Påboltede skærme og døre i andet materiale", "nej, ikke konstruktiv"],
            ["Ændring på 50 kg eller derunder", "kun hvis den skal registreres"],
            ["Trækkrog på bil under 8 år og højst 3.500 kg", "nummerpladeoperatør i stedet"],
            ["Skift fra benzin til diesel", "ja"]
          ],
          note: `Kilder: <a href="${SYN}" rel="noopener">BEK nr. 1685 af 16/12/2025, § 5</a>, <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 2, pkt. 2.8.1 og 2.8.2.3</a> og <a href="${MST}" rel="noopener">Motorstyrelsen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bilens mål",
        tekst: [
          `Opbyggeren regner ud fra bilens mål, fordi de afgør, hvad der kan monteres, og hvor det kan sidde. AutoLock bruger disse betegnelser:`
        ],
        punkter: [
          `<strong>A akselafstand.</strong> Fra midt forhjul til midt baghjul.`,
          `<strong>B bageste overhæng.</strong> Fra bageste hjul til bilens bagende.`,
          `<strong>C samlet længde.</strong> Fra kofanger til kofanger.`,
          `<strong>D lastrumslængde.</strong> Indvendig længde i varerummet.`,
          `<strong>G lastrumshøjde.</strong> Fra gulv til loft i varerummet.`,
          `<strong>H højde.</strong> Bilens samlede ydre højde.`
        ],
        efter: [
          `Bär Cargolift har et målark med de mål på bilen, der skal bruges for at tjekke, om en lift kan monteres.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 260" role="img" aria-label="Kassevogn set fra siden med målene A akselafstand, B bageste overhæng, C samlet længde, D lastrumslængde, G lastrumshøjde og H køretøjets højde"><defs><marker id="pil-ombygning-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><path d="M40,180 L40,120 L85,62 L380,62 L380,180 Z" class="tg-rum"/><rect x="135" y="72" width="235" height="96" fill="none" class="tg-skinne-tynd"/><circle cx="100" cy="182" r="20" class="tg-kasse"/><circle cx="320" cy="182" r="20" class="tg-kasse"/><line x1="20" y1="202" x2="420" y2="202" class="tg-gulvlinje"/><g class="tg-maal"><line x1="40" y1="34" x2="380" y2="34" marker-start="url(#pil-ombygning-1)" marker-end="url(#pil-ombygning-1)"/><text x="210" y="28" text-anchor="middle">C  samlet længde</text></g><g class="tg-maal"><line x1="135" y1="150" x2="370" y2="150" marker-start="url(#pil-ombygning-1)" marker-end="url(#pil-ombygning-1)"/><text x="252" y="144" text-anchor="middle">D  lastrumslængde</text></g><g class="tg-maal"><line x1="355" y1="72" x2="355" y2="168" marker-start="url(#pil-ombygning-1)" marker-end="url(#pil-ombygning-1)"/><text x="349" y="112" text-anchor="end">G</text></g><g class="tg-maal"><line x1="402" y1="62" x2="402" y2="202" marker-start="url(#pil-ombygning-1)" marker-end="url(#pil-ombygning-1)"/><text x="408" y="136">H</text></g><g class="tg-maal"><line x1="100" y1="226" x2="320" y2="226" marker-start="url(#pil-ombygning-1)" marker-end="url(#pil-ombygning-1)"/><text x="210" y="244" text-anchor="middle">A  akselafstand</text></g><g class="tg-maal"><line x1="320" y1="226" x2="380" y2="226" marker-start="url(#pil-ombygning-1)" marker-end="url(#pil-ombygning-1)"/><text x="350" y="244" text-anchor="middle">B</text></g></svg>`,
          tekst: `Skematisk kassevogn med AutoLocks målbetegnelser. E (bredde i lastrummet) og F (mellem hjulkasserne) ses kun oppefra.`
        }
      },
      {
        overskrift: "Det koster nyttelast",
        tekst: [
          `Ombygningen lægges til bilens egenvægt. Totalvægten er den samme, så hvert kilo i opbygningen er et kilo mindre i lasteevne. Hvorfor det betyder noget på en 3.500 kg-bil, står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`,
          `Derfor spørger opbyggeren til den nyttelast, der skal være tilbage. En lift, et lad og en kran kan hver for sig være små, men tilsammen tage en stor del af lasteevnen. Monteringsbeslag og hjælperammer kommer oven i vægten af selve udstyret.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 178" role="img" aria-label="To bjælker med samme længde for totalvægten. Efter ombygningen fylder opbygningen en del af bjælken, og nyttelasten bliver tilsvarende mindre."><text class="tg-fremhaev" x="0" y="16">Fra fabrikken</text><rect class="tg-profil" x="0" y="24" width="200" height="28"/><text x="10" y="42">egenvægt</text><rect class="tg-kasse" x="200" y="24" width="180" height="28"/><text x="210" y="42">nyttelast</text><text class="tg-fremhaev" x="0" y="84">Efter ombygning</text><rect class="tg-profil" x="0" y="92" width="200" height="28"/><text x="10" y="110">egenvægt</text><rect class="tg-modul" x="200" y="92" width="72" height="28"/><text class="tg-modul__tekst" x="205" y="110">OPBYGNING</text><rect class="tg-kasse" x="272" y="92" width="108" height="28"/><text x="282" y="110">nyttelast</text><line class="tg-skinne-tynd" x1="380" y1="16" x2="380" y2="128"/><text class="tg-lille" x="0" y="150">TOTALVÆGTEN ER DEN SAMME</text><text class="tg-lille" x="0" y="168">OPBYGNINGEN TAGES FRA NYTTELASTEN</text></svg>`,
          tekst: `Skematisk. Opbygningen flytter vægt fra nyttelasten til egenvægten, mens totalvægten står fast.`
        }
      },
      {
        overskrift: "Hvad opbygningerne vejer",
        tekst: [
          `Producenterne oplyser vægten på selve udstyret. En lift til chassis vejer omkring 160 kg, og HMF's kraner 270K-RC og 340K-RC vejer 445 og 490 kg i den korteste udgave med standardstøtteben. Bär oplyser ikke vægten på sine lifte til kassevogne.`
        ],
        tabel: {
          kolonner: ["Opbygning", "Eksempel", "Egenvægt"],
          raekker: [
            ["Lift til chassis, 750 kg løfteevne", "Bär BC 750 S2L", "160 kg"],
            ["Standardlift, 1.450 mm plade", "Dhollandia DH-LMA.08.03", "lidt over 160 kg"]
          ],
          note: `Kilder: <a href="${B750}" rel="noopener">Bär Cargolift</a> og <a href="${DHOL}" rel="noopener">Dhollandia</a>, set den 4. oktober 2026. Vægten er producentens oplysning for selve liften. Bär VanLift og Zepro ZHZ 500 til kassevogne løfter 500–600 kg.`
        },
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [["Kuglekobling til VanLift", 24], ["Trækbeslag til BC 750", 45], ["Bär BC 750 S2L, lift", 160], ["HMF 270K-RC, kran", 445], ["HMF 340K-RC, kran", 490]],
          note: `Kilder: <a href="${VAN}" rel="noopener">Bär VanLift</a>, <a href="${B750}" rel="noopener">Bär 750 kg</a>, <a href="${HMF270}" rel="noopener">HMF 270K-RC</a> og <a href="${HMF340}" rel="noopener">HMF 340K-RC</a>, set den 4. oktober 2026. Kranerne i korteste udgave med standardstøtteben. Monteringsadapter og hjælperamme kommer oveni.`
        }
      },
      {
        overskrift: "Registreringssynet i fire trin",
        tekst: [
          `Sådan beskriver Færdselsstyrelsen forløbet. Ved synet kontrolleres bl.a. styretøj, bremser, lygter og reflekser og bærende dele som hjulophæng, støddæmpere og dæk, og desuden røg, kulilte og støj. Du kan læse mere i <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`,
          `Kan bilen godkendes efter omsyn, skal den vises frem igen inden for 60 kalenderdage. Indtil fejlene er rettet, må en betinget godkendt bil eller en bil til omsyn kun køre den tur, der er nødvendig for at få den repareret.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Bestil tid", "Oplys ved bestillingen, at det er et registreringssyn, og hvorfor."],
            ["Mød op", "Tag bilens registreringsattest med."],
            ["Synsrapport", "Bilen bliver godkendt, betinget godkendt, kan godkendes efter omsyn eller bliver ikke godkendt."],
            ["Kvittering", "Tjek ejer, stelnummer, anvendelse og godkendelsesdato på kvitteringen."]
          ]
        },
        efter: [
          `Kilde: <a href="${FSTYR}" rel="noopener">Færdselsstyrelsen: Registreringssyn</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Lastbil kræver godkendelseserklæring",
        tekst: [
          `Får bilen en tilladt totalvægt over 3.500 kg, er den en lastbil. En lastbil skal godkendes af Færdselsstyrelsen med en godkendelseserklæring, før den kan godkendes ved et registreringssyn.`,
          `Ændres en lastbil senere, så den ikke længere svarer til erklæringen, skal Færdselsstyrelsen udstede en ny erklæring, og bilen skal synes igen. Forløbet står i <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`
        ],
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">BEK nr. 1685 af 16/12/2025, §§ 14 og 15</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fra fabrikken eller bagefter",
        tekst: [
          `Lad, tipper og køl bygges typisk på et chassis med førerhus. Forhandleren kan levere bilen færdigopbygget, eller opbyggeren kan bygge på et chassis, I selv har købt eller leaset. Ford-forhandleren BN skriver, at Transit-chassiset er udviklet sammen med karrosseriopbyggere, så standardopbygninger kan monteres uden eller med små ændringer.`,
          `Lift, kran og tiplad skal monteres efter bilfabrikantens anvisninger. Har bilen en chassisramme af stål, kan en prøvningsinstans i stedet dokumentere, at spændingerne i rammen ikke overstiger 150 newton pr. kvadratmillimeter, når udstyret bruges.`,
          `Et chassis kan være EU-typegodkendt som ukomplet køretøj og færdiggøres i flere trin. Hvordan den færdige bil godkendes, står i <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`
        ],
        efter: [
          `Kilder: <a href="${BN}" rel="noopener">BN: Ford Transit Ladvogn</a>, set den 4. oktober 2026, og <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 2, pkt. 2.8.2.4</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ombygning af en leaset varebil",
        tekst: [
          `Leasingselskabet ejer bilen. Ved operationel leasing kræver leasingselskaberne eftermonteret udstyr fjernet før aflevering, se eksemplerne herunder. Ved finansiel leasing indfrier leasingtager altid restværdien, enten ved selv at købe bilen eller ved at anvise en køber. Forskellen står i <a href="/haandbogen/finansiel-og-operationel-leasing/">finansiel og operationel leasing</a>.`
        ],
        punkter: [
          `<strong>Ayvens</strong> fakturerer 2.500 kr. plus udbedring for ulovlige konstruktionsændringer og 1.500 kr. for manglende afmontering af ekstra udstyr, ifølge gebyrlisten fra juni 2025.`,
          `<strong>Monteringshuller</strong> fra reoler og eftermonteret udstyr accepteres hos Ayvens, når de er udbedret tilfredsstillende. Synlige huller faktureres.`,
          `<strong>Nordania</strong> kræver logo og folie fjernet før aflevering.`
        ],
        figur: {
          type: "noegletal",
          data: [["Ulovlige konstruktionsændringer", "2.500", "kr. plus udbedring"], ["Ekstra udstyr, der ikke er afmonteret", "1.500", "kr."]],
          note: `Ayvens' gebyrer ifølge gebyrlisten fra juni 2025. Beløbene er uden moms. Kilde: <a href="${AYVENS}" rel="noopener">Ayvens: Afleveringsguide</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Mere om tilbageleveringen i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>. Kilde: <a href="${NORDANIA}" rel="noopener">Nordania: Aflevering</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Lift, tiplad og kran skal have hovedeftersyn",
        tekst: [
          `Bekendtgørelsen om anvendelse af tekniske hjælpemidler undtager selve den indregistrerede bil, fordi den synes. Mekanisk drevet udstyr, der er monteret på bilen, fx en lift eller et tiplad, skal derimod have hovedeftersyn mindst hver 12. måned af en sagkyndig person, jf. § 40, stk. 3. Detaljerne står under <a href="/til-varebilen/ombygning/bagsmaeklift/">bagsmæklift</a>.`,
          `Kraner og andet udstyr, der løfter byrder, skal også have hovedeftersyn hver 12. måned efter § 58. En kran på højst 8 tonsmeter, der er fast monteret på en indregistreret last- eller varebil, er fritaget for det særlige 10-års eftersyn.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Ladvogn med lift. Selve bilen kommer til periodisk syn, mens lift, tiplad og kran skal have hovedeftersyn hver 12. måned af en sagkyndig person."><rect class="tg-rum" x="20" y="60" width="50" height="50" rx="5"/><rect class="tg-rum" x="74" y="80" width="120" height="30"/><rect class="tg-modul" x="196" y="70" width="6" height="40"/><circle class="tg-kasse" cx="45" cy="116" r="10"/><circle class="tg-kasse" cx="165" cy="116" r="10"/><line class="tg-gulvlinje" x1="10" y1="126" x2="214" y2="126"/><line class="tg-skinne-tynd" x1="110" y1="80" x2="240" y2="48"/><line class="tg-skinne-tynd" x1="202" y1="96" x2="240" y2="138"/><rect class="tg-kasse" x="240" y="20" width="150" height="56"/><text class="tg-fremhaev" x="315" y="42" text-anchor="middle">Bilen</text><text x="315" y="62" text-anchor="middle">periodisk syn</text><rect class="tg-modul" x="240" y="110" width="150" height="56"/><text class="tg-modul__tekst" x="315" y="132" text-anchor="middle">HOVEDEFTERSYN</text><text class="tg-modul__tekst" x="315" y="152" text-anchor="middle">hver 12. måned</text><text class="tg-lille" x="315" y="186" text-anchor="middle">AF EN SAGKYNDIG PERSON</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${BEK428}" rel="noopener">Bekendtgørelse om anvendelse af tekniske hjælpemidler (BEK nr. 428 af 05/04/2022), §§ 40, 58 og 73</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forsikring af opbygningen",
        tekst: [
          `En ombygning skal også meldes til forsikringsselskabet. Tryg nævner ændringer af styretøj, bremser, motorens ydeevne og bærende dele og en specialopbygning til anden brug end almindelig varebil. Får selskabet ikke besked, kan erstatningen blive nedsat eller falde helt bort.`,
          `Hos Tryg er værdien af en specialopbygning, fx en kran, en spulevogn eller mobil madlavning, kun dækket, hvis den står i policen, og kun op til den valgte sum. Summen skal svare til købsprisen inkl. moms for opbygningen med montering. Mere om dækningen i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ],
        efter: [
          `Kilde: <a href="${TRYG}" rel="noopener">Tryg: Varebilforsikring, betingelser nr. 2303, afsnit 1, 4.5 og 11.5</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Mandskabsvogn kræver klausul",
        tekst: [
          `En kassevogn med ekstra personkabine eller en dobbeltkabine med lad kan blive en mandskabsvogn. Fritagelsen for registreringsafgift kræver en klausul fra Motorstyrelsen, før bilen indregistreres. Selve ombygningen står i <a href="/til-varebilen/ombygning/mandskabsvogn-ombygning/">ombygning til mandskabsvogn</a>, reglerne for kørslen i <a href="/haandbogen/mandskabsvogn-regler/">mandskabsvogn regler</a>.`
        ],
        efter: [
          `Kilde: <a href="${MST_MV}" rel="noopener">Motorstyrelsen: Mandskabsvogne (pjece, september 2024)</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Kølebil og fødevarer",
        tekst: [
          `En kølebil har to sæt regler oven i registreringssynet. Kører den letfordærvelige fødevarer til eller fra et andet ATP-land, skal kassen og aggregatet være ATP-godkendt og have certifikat. Inden for Danmark gælder Fødevarestyrelsens hygiejneregler.`,
          `Virksomheder, der transporterer fødevarer, skal være registreret som transportør hos Fødevarestyrelsen og have et egenkontrolprogram. Klasserne, kravene til kassen og gebyrerne står i <a href="/til-varebilen/ombygning/koelebil/">kølebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen (BEK nr. 1330 af 20/11/2025), § 1</a> og <a href="${FVT}" rel="noopener">Fødevarestyrelsen: Transportør af fødevarer</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Overblik",
        tekst: [
          `Tabellen samler, hvad hver ombygning typisk bygges på, og hvilke regler der gælder ud over registreringssynet.`
        ],
        tabel: {
          kolonner: ["Ombygning", "Typisk grundbil", "Godkendelse", "Særlige regler"],
          raekker: [
            ["Bagsmæklift", "Kassevogn eller chassis", "Registreringssyn ved over 50 kg", "Hovedeftersyn hver 12. måned"],
            ["Alu-lad", "Chassis med førerhus", "Registreringssyn", "Ladet skal være solidt fastgjort"],
            ["Tipper", "Chassis med førerhus", "Registreringssyn", "Hovedeftersyn hver 12. måned"],
            ["Kran", "Chassis med lad", "Registreringssyn", "Kranførercertifikat over 8 tm"],
            ["Kølebil", "Kassevogn eller chassis", "Registreringssyn", "ATP ved transport til og fra ATP-lande"],
            ["Mandskabsvogn", "Kassevogn eller dobbeltkabine", "Registreringssyn og klausul", "Begrænset kørsel"]
          ],
          note: `Kilder: Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685/2025), bekendtgørelse om anvendelse af tekniske hjælpemidler (BEK nr. 428/2022) og ATP-bekendtgørelsen (BEK nr. 1330/2025), set den 4. oktober 2026, og detailforskrifterne (BEK nr. 1484/2025) og Arbejdstilsynet, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Opbyggere og mærker",
        tekst: [
          `Karrosseriopbyggere og liftforhandlere laver ombygningen. Her er to eksempler på, hvad de fører og laver:`
        ],
        punkter: [
          `<strong>Fyns Karosseribyg</strong> fører bl.a. Bär Cargolift og Zepro (lifte), HMF og Palfinger (kraner), Meiller (tiplad og kroghejs) og AluTeam (kasser).`,
          `<strong>Bilstrup Karosseri</strong> bygger tiplad fra 3,5 til 20 tons tipkapacitet til chassis fra 3,5 til 32 tons og udfører lovpligtigt eftersyn af kran, hejs og tip.`
        ],
        efter: [
          `Opbyggeren kan også stå for registreringssynet. Det er en af de ting, du kan aftale, når du beder om tilbud på opbygningen.`
        ]
      },
      {
        overskrift: "Kran på ladet",
        tekst: [
          `En kran på en ladbil tæller med i egenvægten og har egne regler for certifikat og eftersyn. HMF 270K-RC har et lastmoment på 2,4–2,5 tm og vejer 445 kg med standardstøtteben i den korteste udgave. Kraner til og med 8 tm kræver ikke kranførercertifikat, oplyser Arbejdstilsynet. Du kan læse mere i <a href="/til-varebilen/ombygning/ladbil-med-kran/">ladbil med kran</a>.`,
          `Lastmomentet i tonsmeter er den last, kranen kan løfte, gange afstanden ud til lasten. Både Arbejdstilsynets certifikatgrænse og fritagelsen for 10-års eftersynet bruger tonsmeter.`
        ],
        efter: [
          `Kilder: <a href="${HMF270}" rel="noopener">HMF: 270K-RC</a> og <a href="${AT}" rel="noopener">Arbejdstilsynet: Krav til certifikat</a>, set den 4. oktober 2026, og <a href="${BEK428}" rel="noopener">BEK nr. 428 af 05/04/2022, § 73</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal opbyggeren vide",
    spoergsmaal_manchet: "Så kan opbyggeren regne vægt, pris og leveringstid rigtigt.",
    spoergsmaal: [
      "Bilens mærke, model, akselafstand og tilladte totalvægt, eller om chassiset først skal bestilles.",
      "Hvad der skal løftes, læsses eller køles, og hvor meget det vejer.",
      "Den nyttelast, der skal være tilbage efter ombygningen.",
      "Om bilen er leaset, og hvad leasingaftalen siger om ombygning og aflevering.",
      "Om opbyggeren står for registreringssynet, eller om I selv skal.",
      "Om varerne skal over grænsen, så køleopbygningen skal være ATP-godkendt.",
      "Om forsikringsselskabet skal have besked om opbygningen og dens værdi."
    ],
    faq: [
      ["Skal en ombygget varebil synes?", "Ja, hvis ændringen er konstruktiv, ændrer egenvægten med mere end 50 kg, ændrer tilladte vægte eller andre registrerede data. Så skal bilen godkendes ved et registreringssyn, før den tages i brug."],
      ["Hvad hedder synet efter en ombygning?", "Registreringssyn. Bekendtgørelsen om godkendelse og syn af køretøjer bruger ikke ordet ændringssyn. Omsyn er kontrollen af, at fejl fra et tidligere syn er rettet."],
      ["Hvor meget nyttelast koster en bagsmæklift?", "Liftens egenvægt. Bär oplyser 160 kg for sin 750 kg-lift til chassis, og Dhollandia lidt over 160 kg for en standardlift med 1.450 mm plade."],
      ["Må man bygge om på en leaset varebil?", "Det afgør leasingaftalen. Ayvens fakturerer ulovlige konstruktionsændringer med 2.500 kr. plus udbedring og kræver eftermonteret udstyr afmonteret ved aflevering."],
      ["Skal en bagsmæklift efterses?", "Ja. Bekendtgørelsen om anvendelse af tekniske hjælpemidler kræver hovedeftersyn mindst hver 12. måned af en sagkyndig person, også for udstyr, der er monteret på en indregistreret bil."],
      ["Hvilke mål skal opbyggeren bruge?", "Typisk bruger opbyggeren akselafstand, bageste overhæng, samlet længde, lastrumsmål og højde. Bär Cargolift har et målark til at tjekke, om en lift kan monteres."],
      ["Hvor meget vejer en kran til en ladbil?", "HMF 270K-RC vejer 386–421 kg plus 59 kg standardstøtteben, og HMF 340K-RC vejer 418–508 kg plus 72 kg, ifølge HMF."],
      ["Kræver et soltag i en varebil syn?", "Ikke når udskæringen højst er 1,00 × 0,50 m, ligger symmetrisk, har en ramme og sidder mindst 0,15 m fra tagkanten, uden at der skæres i afstivende profiler."],
      ["Skal forsikringsselskabet vide, at bilen er bygget om?", "Ja. Hos Tryg kan erstatningen blive nedsat eller falde bort, hvis selskabet ikke får besked, og en specialopbygning er kun dækket op til den sum, der står i policen."],
      ["Hvor længe har man til et omsyn?", "Kan bilen godkendes efter omsyn, skal den vises frem igen inden for 60 kalenderdage. Indtil da må den kun køre den tur, der er nødvendig for reparationen."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025)", url: SYN, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), bilag 2", url: DETAIL, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Ændring af køretøjets udstyr eller anvendelse", url: MST, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om anvendelse af tekniske hjælpemidler (BEK nr. 428 af 05/04/2022)", url: BEK428, dato: "2026-10-07" },
      { navn: "Bär Cargolift: Standard / FreeAccess 750 kg", url: B750, dato: "2026-10-04" },
      { navn: "Dhollandia: forside (DH-LMA.08.03)", url: DHOL, dato: "2026-10-04" },
      { navn: "BN: Ford Transit Ladvogn", url: BN, dato: "2026-10-04" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYVENS, dato: "2026-10-04" },
      { navn: "Nordania: Aflevering af firmabil leaset direkte hos Nordania", url: NORDANIA, dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Mandskabsvogne (pjece, september 2024)", url: MST_MV, dato: "2026-10-04" },
      { navn: "AutoLock: L4V Statement Lock (målskema A–H for varebiler)", url: AUTOLOCK, dato: "2026-10-04" },
      { navn: "Færdselsstyrelsen: Registreringssyn", url: FSTYR, dato: "2026-10-07" },
      { navn: "Bär Cargolift: VanLift", url: VAN, dato: "2026-10-04" },
      { navn: "HMF: 270K-RC", url: HMF270, dato: "2026-10-04" },
      { navn: "HMF: 340K-RC", url: HMF340, dato: "2026-10-04" },
      { navn: "Fyns Karosseribyg: Bär Cargolift", url: "https://fyns-karosseribyg.dk/brands/bar-cargolift/", dato: "2026-10-04" },
      { navn: "Fyns Karosseribyg: Zepro lifte", url: "https://fyns-karosseribyg.dk/brands/zepro-lifte/", dato: "2026-10-04" },
      { navn: "Fyns Karosseribyg: Meiller", url: "https://fyns-karosseribyg.dk/brands/meiller/", dato: "2026-10-04" },
      { navn: "Fyns Karosseribyg: AluTeam", url: "https://fyns-karosseribyg.dk/brands/alu-team/", dato: "2026-10-04" },
      { navn: "Fyns Karosseribyg: HMF kran", url: "https://fyns-karosseribyg.dk/brands/hmf/kran/", dato: "2026-10-04" },
      { navn: "Fyns Karosseribyg: Palfinger kran", url: "https://fyns-karosseribyg.dk/brands/palfinger/kran/", dato: "2026-10-04" },
      { navn: "Bilstrup Karosseri: Tiplad", url: "https://bilstrup-karosseri.dk/galleri/tiplad", dato: "2026-10-07" },
      { navn: "Bilstrup Karosseri: Eftersyn", url: "https://bilstrup-karosseri.dk/eftersyn", dato: "2026-10-04" },
      { navn: "Arbejdstilsynet: Krav til certifikat ved brug af forskellige maskiner", url: AT, dato: "2026-10-04" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om international transport af letfordærvelige fødevarer (BEK nr. 1330 af 20/11/2025)", url: ATP, dato: "2026-10-07" },
      { navn: "Fødevarestyrelsen: Transportør af fødevarer", url: FVT, dato: "2026-10-07" }
    ],
    cta_saetning: "Skal bilen bygges om, så skriv det, så kommer opbygningen med i forespørgslen."
  },
  nye_fakta: [
    ["BEK 1685/2025 § 5, stk. 1, nr. 4: ændring af køreklar vægt eller egenvægt på 50 kg eller derunder kræver registreringssyn, hvis ændringen ønskes registreret i Køretøjsregisteret.", SYN],
    ["Motorstyrelsen: montering af trækkrog på en bil, der er registreret for mindre end 8 år siden og har en tilladt totalvægt på højst 3.500 kg, godkendes hos en nummerpladeoperatør; køretøjet skal også til syn, hvis det skifter drivkraft fra benzin til diesel.", MST],
    ["Detailforskrifterne, bilag 2, pkt. 2.8.1 (1) b): udskiftning af påboltede skærme og klapper/døre til andet materiale anses ikke som en konstruktiv ændring.", DETAIL],
    ["Detailforskrifterne, bilag 2, pkt. 2.8.2.3: ændring af akselafstand og overhæng er en konstruktiv ændring af de bærende elementer, der godkendes ved syn på baggrund af dokumentation fra bilfabrikanten, en godkendelse eller dokumentation fra en prøvningsinstans.", DETAIL],
    ["Detailforskrifterne, bilag 2, pkt. 2.8.2.4: læssekran, læssebagsmæk og tippelad skal monteres efter køretøjsfabrikantens anvisninger; ved chassisramme af stål kan en prøvningsinstans alternativt dokumentere, at spændingerne ikke overstiger 150 N/mm2.", DETAIL],
    ["Færdselsstyrelsen: ved registreringssynet kontrolleres bl.a. styretøj, bremser, lygter og reflekser samt bærende dele som hjulophæng, støddæmpere og dæk, og den miljømæssige stand som røg, kulilte og støj.", FSTYR],
    ["Færdselsstyrelsen: kan køretøjet godkendes efter omsyn, kan det fremstilles til omsyn inden for 60 kalenderdage; betinget godkendt eller til omsyn må køretøjet kun bruges til den kørsel, der er nødvendig for reparationen.", FSTYR],
    ["BEK 1685/2025 §§ 14 og 15: en lastbil skal godkendes af Færdselsstyrelsen ved en godkendelseserklæring og derefter ved registreringssyn; ændringer, der gør, at køretøjet ikke længere svarer til godkendelseserklæringen, kræver ny erklæring og registreringssyn.", SYN],
    ["BEK 428/2022 § 58: tekniske hjælpemidler til løft af byrder skal have hovedeftersyn mindst hver 12. måned af en sagkyndig person; § 73, stk. 2: mekanisk drevne hjælpemidler til løft af frithængende byrder, der er fast monteret på indregistrerede last- og varebiler med en maksimal tilladelig belastning på 8 tonsmeter eller derunder, skal ikke have 10-års eftersyn.", BEK428],
    ["Tryg: ændringer af styretøj, bremser, motorens ydeevne eller bærende elementer og specialopbygning eller ombygning til anden brug end almindelig varebil skal meldes; uden besked kan erstatningen nedsættes eller bortfalde; en specialopbygning (fx mobil madlavning, spulevogn, monteret kran) er kun dækket, hvis den står i policen, op til den valgte sum, der skal svare til købsprisen inkl. moms inklusive montering (afsnit 1 og 4.5).", TRYG],
    ["ATP-bekendtgørelsen § 1: til erhvervsmæssig transport af de omfattede fødevarer ind i Danmark eller ud til et ATP-land skal der bruges godkendt og mærket isoleret materiel med ATP-certifikat.", ATP],
    ["Fødevarestyrelsen: transportører af fødevarer skal være registreret hos Fødevarestyrelsen og have et egenkontrolprogram.", FVT]
  ]
};
