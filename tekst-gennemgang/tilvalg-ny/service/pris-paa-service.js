// Underside /til-varebilen/service/pris-paa-service/ (07-10-2026)
var HFORD = `https://www.hessel.dk/vaerksted-service/ydelser/service/ford`;
var HREN = `https://www.hessel.dk/vaerksted-service/ydelser/service/renault`;
var HBMB = `https://www.hessel.dk/vaerksted-service/ydelser/bremseservice-mercedes-benz`;
var HBREN = `https://www.hessel.dk/vaerksted-service/ydelser/bremseservice-renault`;
var HAC = `https://www.hessel.dk/vaerksted-service/ydelser/airconditionservice-mercedes-benz`;
var HMB = `https://www.hessel.dk/vaerksted-service/ydelser/service/mercedes-benz`;
var HA = `https://www.hessel.dk/vaerksted-service/ydelser/service/mercedes-benz/a-service`;
var HB3 = `https://www.hessel.dk/vaerksted-service/ydelser/service/mercedes-benz/b3-service`;
var MBV = `https://www.mercedes-benz.dk/vans/services/vehicle-maintenance.html`;
var VW5 = `https://www.volkswagen.dk/da/vaerksted/service/vw-service5plus.html`;
var FINT = `https://www.ford.dk/min-bil/service-og-vedligeholdelse/service/serviceintervaller`;
var FPRO = `https://www.ford.dk/erhverv/ford-pro-service`;
var VWPM = `https://www.volkswagen.dk/da/vaerksted/service/prismatch.html`;
var HPRO = `https://www.hessel.dk/erhverv/service-vaerksted/proplus`;
var SDS = `https://www.superdaek.dk/`;
var FGAR = `https://www.ford.dk/min-bil/garanti/varebiler`;
var VWEL = `https://www.volkswagen.dk/da/vaerksted/service/elbil-service.html`;
var SKAT = `https://skat.dk/erhverv/moms/fradrag-for-moms/udgifter-du-kan-faa-momsfradrag-for/fradrag-for-moms-af-biludgifter`;

module.exports = {
  id: "service/pris-paa-service",
  side: {
    slug: "pris-paa-service",
    navn: "Pris på service",
    titel: "Service på varebil: pris og indhold",
    kort: `Se priserne på serviceeftersyn, bremse- og airconditionservice, og hvad et eftersyn indeholder hos mærkeværkstederne.`,
    beskrivelse: `Se faste priser på eftersyn, bremseservice, aircondition og hjulskift, Mercedes' service A og B, tillægsarbejde, prismatch og fordelsaftaler.`,
    manchet: `Mærkeværkstederne har faste priser på nogle eftersyn, mens du skal bede om et tilbud på andre. Her finder du priserne hos en dansk forhandler, hvad eftersynene indeholder, hvad der kan komme oveni, og hvad værkstedet skal vide for at give dig en pris.`,
    visuel: {
      hero: "service",
      kort_fortalt: [
        ["+4 service, Renault diesel", "1.795 kr.", "hos Hessel"],
        ["+4 service, Renault elbil", "1.395 kr.", "hos Hessel"],
        ["Bremseservice, for og bag", "995 kr.", "Mercedes-Benz og Renault hos Hessel"],
        ["Bremseservice anbefales", "hvert 2. år", "uden for det faste interval"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Priserne hos Hessel",
        tekst: [
          `Mærkeværkstederne har faste priser på de almindelige eftersyn, mens større service og reparationer bliver prissat efter tilbud. Ejner Hessel har autoriserede værksteder til blandt andet Ford, Renault og Mercedes-Benz og slår priserne op på sin hjemmeside.`,
          `+4-servicen er Hessels faste pris på service til biler, der er fire år eller ældre. På en Renault koster den 1.795 kr. med benzin eller diesel og 1.395 kr. på en elbil. Hos Ford gælder tilbuddet personbiler på fire år eller mere.`,
          `Bremseservice for og bag koster 995 kr. på Mercedes-Benz og Renault, og en airconditionservice på Mercedes-Benz koster 995 kr. uden kølemiddel. Hjulskifte koster 400 kr., og opbevaring af et sæt hjul koster 495 kr. pr. sæson. Priserne er set på Hessels hjemmeside den 7. oktober 2026.`
        ],
        tabel: {
          kolonner: ["Ydelse", "Gælder", "Pris"],
          raekker: [
            ["+4 serviceeftersyn", "Ford personbil på 4 år eller mere", "1.795 kr."],
            ["+4 service, benzin og diesel", "Renault", "1.795 kr."],
            ["+4 service, elbil", "Renault", "1.395 kr."],
            ["Bremseservice, for og bag", "Mercedes-Benz og Renault", "995 kr."],
            ["Airconditionservice", "Mercedes-Benz, ekskl. kølemiddel", "995 kr."],
            ["Hjulskifte", "Mercedes-Benz", "400 kr."],
            ["Hjulopbevaring", "Mercedes-Benz, pr. sæson", "495 kr."],
            ["Brugtbilstjek", "Brugt eller importeret Mercedes-Benz", "499 kr."]
          ],
          note: `Kilder: Hessel (<a href="${HFORD}" rel="noopener">Ford</a>, <a href="${HREN}" rel="noopener">Renault</a>, <a href="${HBMB}" rel="noopener">bremser Mercedes-Benz</a>, <a href="${HBREN}" rel="noopener">bremser Renault</a>, <a href="${HAC}" rel="noopener">aircondition</a>, <a href="${HMB}" rel="noopener">Mercedes-Benz</a>), set den 7. oktober 2026. Moms er ikke oplyst.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["+4 service, diesel", 1795],
            ["+4 service, elbil", 1395],
            ["Bremseservice", 995],
            ["Aircondition", 995],
            ["Hjulopbevaring, pr. sæson", 495],
            ["Hjulskifte", 400]
          ],
          note: `Hessels opslåede priser, set den 7. oktober 2026. Kilder: <a href="${HREN}" rel="noopener">Hessel, Renault</a>, <a href="${HBMB}" rel="noopener">bremseservice</a>, <a href="${HAC}" rel="noopener">aircondition</a> og <a href="${HMB}" rel="noopener">Mercedes-Benz</a>.`
        }
      },
      {
        overskrift: "Indholdet i en +4-service",
        tekst: [
          `En +4-service er et serviceeftersyn efter fabrikkens forskrifter med et autoriseret stempel i servicebogen. Hessel skriver, at behovet for service og reparationer stiger, når bilerne bliver ældre, og at eftersynet også omfatter fabriksopdateringer og rustkontroller.`,
          `Hessel tilbyder servicen til Renault, uanset om bilen kører på benzin, diesel eller strøm, og på en elbil koster den 400 kr. mindre. Hos Renault får du desuden 15 procent rabat på arbejde og reservedele, der bliver lavet efter servicen. Begge mærker får bilen tilbage vasket og støvsuget.`
        ],
        punkter: [
          "Rusteftersyn og 30 punkters kontrol.",
          "Olieskift med filter og pakning.",
          "Sprinkler- og kølervæske fyldes op.",
          "Bilen tjekkes for fabriksopdateringer og serviceaktioner.",
          "Vask og støvsugning. Hos Renault får du også 15 % rabat på efterfølgende arbejde og dele."
        ],
        punkt_ikon: "ja",
        figur: {
          type: "noegletal",
          data: [
            ["Kontrol", 30, "punkter"],
            ["Rabat bagefter, Renault", 15, "% på arbejde og dele"]
          ],
          note: `Tallene er fra Hessels +4-service. Kilder: <a href="${HFORD}" rel="noopener">Hessel, Ford</a> og <a href="${HREN}" rel="noopener">Hessel, Renault</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${HFORD}" rel="noopener">Hessel, Ford</a> og <a href="${HREN}" rel="noopener">Hessel, Renault</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Service A og service B hos Mercedes-Benz",
        tekst: [
          `Mercedes-Benz' varebiler følger servicetyperne A og B. Service A bliver lavet efter det første år og service B efter to år.`,
          `Service A er mere end et skift af olie og oliefilter. Bremser, kølervæske, sprinklersystem, dæktryk, lygter og sikkerhedsopdateringer bliver også kontrolleret efter fabrikkens forskrifter. Service B er større, og her bliver pollenfilteret skiftet, og styretøj, profilrem og parkeringsbremse bliver tjekket.`,
          `Hessel nævner A1, A3 og A9 som eksempler på service A og B3, B5 og B7 som eksempler på service B. Ved service B3 kommer luftfilter, støvfilter og brændstoffilter eller tændrør oveni. Ældre modeller giver besked om B3 i displayet, mens nyere modeller blot viser service B.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Indhold", "Service A", "Service B"],
          raekker: [
            ["Udføres", "Efter første år", "Efter to år"],
            ["Motorolie og oliefilter", "ja", "ja"],
            ["Bremser, kølervæske, sprinkler, lygter", "ja", "ja"],
            ["Pollenfilter", "nej", "ja"],
            ["Styretøj, profilrem, parkeringsbremse", "nej", "ja"],
            ["Luftfilter, støvfilter, brændstoffilter eller tændrør", "ikke nævnt", "Ved service B3"]
          ],
          note: `Service B3 omfatter også luftfilter, støvfilter og brændstoffilter eller tændrør. Kilder: <a href="${MBV}" rel="noopener">Mercedes-Benz</a>, set den 4. oktober 2026, og <a href="${HA}" rel="noopener">Hessel, service A</a>, <a href="${HB3}" rel="noopener">Hessel, service B3</a> og <a href="${HMB}" rel="noopener">Hessel, Mercedes-Benz</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tillægsarbejde og ekstraarbejde",
        tekst: [
          `Den faste pris dækker selve servicen. Hessel skriver, at et Mercedes-service som regel består af skift af oliefilter, aftapning og påfyldning af motorolie og kontrol af bilens vigtigste dele og filtre.`,
          `Afhængig af bilens alder og kilometerstand er der ofte tillægsarbejde, som skal laves, for at fabrikkens krav til servicen er opfyldt. Det kan fx være nyt brændstoffilter, pollenfilter eller bremsevæske.`,
          `Kontrollen kan også vise behov for ekstraarbejde, som værkstedet anbefaler, fx nedslidte bremser eller dele i styretøjet. Du kan bede værkføreren om at kontakte dig med en pris, før tillægs- eller ekstraarbejde går i gang.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Tre felter. Servicen efter servicebogen, tillægsarbejde efter bilens alder og kilometer, fx brændstoffilter eller bremsevæske, og ekstraarbejde, som kontrollen finder, fx slidte bremser. Du kan bede om en pris, før tillægs- og ekstraarbejde går i gang."><text class="tg-lille" x="0" y="20">GRUNDPRISEN</text><rect class="tg-modul" x="0" y="30" width="128" height="100"/><text class="tg-modul__tekst" x="8" y="52">SERVICE</text><text class="tg-modul__tekst" x="8" y="72">olie og filter,</text><text class="tg-modul__tekst" x="8" y="90">kontrol efter</text><text class="tg-modul__tekst" x="8" y="108">servicebogen</text><text class="tg-fremhaev" x="132" y="86" text-anchor="middle">+</text><rect class="tg-kasse" x="136" y="30" width="128" height="100"/><text class="tg-fremhaev" x="142" y="52">Tillægsarbejde</text><text x="142" y="72">efter alder og km</text><text x="142" y="90">fx brændstoffilter</text><text x="142" y="108">eller bremsevæske</text><text class="tg-fremhaev" x="268" y="86" text-anchor="middle">+</text><rect class="tg-kasse" x="272" y="30" width="128" height="100"/><text class="tg-fremhaev" x="278" y="52">Ekstraarbejde</text><text x="278" y="72">fundet ved</text><text x="278" y="90">kontrollen, fx</text><text x="278" y="108">slidte bremser</text><line class="tg-skinne-tynd" x1="136" y1="146" x2="400" y2="146"/><line class="tg-skinne-tynd" x1="136" y1="140" x2="136" y2="152"/><line class="tg-skinne-tynd" x1="400" y1="140" x2="400" y2="152"/><text x="268" y="168" text-anchor="middle">Du kan bede om en pris,</text><text x="268" y="184" text-anchor="middle">før arbejdet går i gang</text></svg>`,
          tekst: `Skematisk. Det, der kan komme oveni den faste pris for et eftersyn. Kilde: <a href="${HMB}" rel="noopener">Hessel, service på Mercedes-Benz</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kontrolpunkterne ved et eftersyn",
        tekst: [
          `Volkswagens Service 5+ er et eftersyn efter fabrikkens forskrifter til biler på 5 år eller mere, og det findes også til erhvervsbiler. På en diesel- eller benzinbil gennemgår værkstedet blandt andet forrude, karrosseri, udstødning, bremser, undervogn og ophæng.`,
          `Værkstedet måler bremseklodsernes tykkelse og ser bremseskiverne efter for slid, både for og bag. Undervognsbeskyttelse, beklædninger, ledninger, rør og slanger bliver gennemgået for skader, og bærekugler, lejer og gummibøsninger bliver tjekket for slid.`,
          `Med Service 5+ følger et stempel i den digitale servicebog og Volkswagen Vejhjælp til næste service. Super Dæk Service skriver, at kædens eftersyn tjekker bilen på mindst 34 punkter.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Varebil set fra siden med kontrolpunkterne ved et serviceeftersyn."><path d="M30,175 V120 L72,78 H370 V175 Z" class="tg-rum"/><path d="M40,118 L74,86 H110 V118 Z" class="tg-profil"/><circle cx="95" cy="180" r="22" class="tg-profil"/><circle cx="305" cy="180" r="22" class="tg-profil"/><line x1="10" y1="202" x2="390" y2="202" class="tg-gulvlinje"/><g class="tg-call"><line x1="70" y1="95" x2="54" y2="44"/><circle cx="70" cy="95" r="3"/><text x="10" y="22" class="tg-call__navn">Forrude</text><text x="10" y="36" class="tg-call__under">stenslag</text></g><g class="tg-call"><line x1="230" y1="100" x2="230" y2="44"/><circle cx="230" cy="100" r="3"/><text x="170" y="22" class="tg-call__navn">Karrosseri</text><text x="170" y="36" class="tg-call__under">rust og korrosion</text></g><g class="tg-call"><line x1="350" y1="172" x2="350" y2="74"/><circle cx="350" cy="172" r="3"/><text x="300" y="52" class="tg-call__navn">Udstødning</text><text x="300" y="66" class="tg-call__under">utætheder</text></g><g class="tg-call"><line x1="95" y1="180" x2="60" y2="228"/><circle cx="95" cy="180" r="3"/><text x="10" y="236" class="tg-call__navn">Bremser</text><text x="10" y="250" class="tg-call__under">klodser, skiver</text></g><g class="tg-call"><line x1="170" y1="175" x2="150" y2="228"/><circle cx="170" cy="175" r="3"/><text x="120" y="236" class="tg-call__navn">Undervogn</text><text x="120" y="250" class="tg-call__under">rør og slanger</text></g><g class="tg-call"><line x1="305" y1="165" x2="260" y2="228"/><circle cx="305" cy="165" r="3"/><text x="220" y="236" class="tg-call__navn">Ophæng</text><text x="220" y="250" class="tg-call__under">bærekugler, bøsninger</text></g></svg>`,
          tekst: `Skematisk. Kontrolpunkter ved Volkswagens Service 5+. Kilde: <a href="${VW5}" rel="noopener">Volkswagen, Service 5+</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Eftersynet omfatter desuden en batteritest, kontrol af gearkasse, aksler og manchetter og nulstilling af serviceindikatoren. Kilder: <a href="${VW5}" rel="noopener">Volkswagen, Service 5+</a> og <a href="${SDS}" rel="noopener">Super Dæk Service</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Bremseservice ligger uden for intervallet",
        tekst: [
          `Ved et bremseservice skilles bremserne ad, renses og smøres, så bevægelige dele ikke sætter sig fast. Bagefter testes bremserne på prøvestand. Hessel anbefaler det hvert andet år og skriver, at det ikke er en del af bilens faste serviceinterval.`,
          `Ved et almindeligt eftersyn måler værkstedet klodser og skiver. Et bremseservice går videre end den visuelle kontrol, fordi bremserne bliver skilt ad, og derfor skal du selv bestille det.`,
          `Hos Hessel koster et bremseservice 995 kr. for både for- og bagbremser på Mercedes-Benz og Renault. Hessel skriver, at det er særlig vigtigt på elbiler, fordi de mekaniske bremser bliver brugt mindre. Mere om det står i <a href="/til-varebilen/service/service-paa-elvarebil/">service på elvarebil</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Adskillelse", "Hjulene og bremseklodserne bliver taget af, så bremserne er frit tilgængelige."],
            ["Kontrol", "Skiver og kalibre bliver kontrolleret for slid, rust og ujævnheder."],
            ["Rens", "Kalibrene, glidestifterne og anlægsfladerne bliver renset for skidt og rust."],
            ["Smøring", "Alle bevægelige dele bliver smurt med specialfedt, så de ikke sætter sig fast."],
            ["Samling", "Klodserne bliver monteret, og funktionen bliver kontrolleret, før hjulene kommer på."],
            ["Prøvestand", "Bremserne bliver testet på prøvestand."]
          ]
        },
        efter: [
          `Kilder: <a href="${HBMB}" rel="noopener">Hessel, bremseservice Mercedes-Benz</a> og <a href="${HBREN}" rel="noopener">Hessel, bremseservice Renault</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Bremsens dele",
        tekst: [
          `En skivebremse består af en bremseskive, der drejer med hjulet, og en bremsekaliber med bremseklodser, der klemmer om skiven. Kaliberen bevæger sig på glidestifter, og når de ruster eller bliver snavsede, kan bremsen sætte sig fast eller bremse ujævnt.`,
          `Ved Hessels bremseservice bliver skiver og kalibre kontrolleret for slid, rust og ujævnheder. Kalibrene bliver renset, glidestifter og anlægsflader bliver renset for skidt og rust, og alle bevægelige dele bliver smurt med specialfedt.`,
          `Hessel råder også til at træde på den mekaniske bremse en gang imellem. Når klodserne arbejder mod skiverne, bliver rust og snavs slebet væk.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Skivebremse set fra siden med bremseskive, bremsekaliber, bremseklodser og glidestifter markeret."><circle class="tg-profil" cx="150" cy="120" r="90"/><circle class="tg-kasse" cx="150" cy="120" r="30"/><circle class="tg-profil" cx="150" cy="100" r="4"/><circle class="tg-profil" cx="169" cy="114" r="4"/><circle class="tg-profil" cx="162" cy="136" r="4"/><circle class="tg-profil" cx="138" cy="136" r="4"/><circle class="tg-profil" cx="131" cy="114" r="4"/><rect class="tg-modul" x="212" y="80" width="44" height="80" rx="6"/><rect class="tg-kuffert" x="222" y="88" width="10" height="64"/><circle class="tg-kasse" cx="248" cy="90" r="4"/><circle class="tg-kasse" cx="248" cy="150" r="4"/><g class="tg-call"><line x1="96" y1="66" x2="60" y2="42"/><circle cx="96" cy="66" r="3"/><text class="tg-call__navn" x="5" y="22">Bremseskive</text><text class="tg-call__under" x="5" y="36">slid og rust</text></g><g class="tg-call"><line x1="240" y1="84" x2="290" y2="44"/><circle cx="240" cy="84" r="3"/><text class="tg-call__navn" x="294" y="36">Bremsekaliber</text><text class="tg-call__under" x="294" y="50">renses</text></g><g class="tg-call"><line x1="227" y1="120" x2="290" y2="112"/><circle cx="227" cy="120" r="3"/><text class="tg-call__navn" x="294" y="108">Bremseklodser</text><text class="tg-call__under" x="294" y="122">skilles ad</text></g><g class="tg-call"><line x1="248" y1="150" x2="290" y2="180"/><circle cx="248" cy="150" r="3"/><text class="tg-call__navn" x="294" y="176">Glidestifter</text><text class="tg-call__under" x="294" y="190">renses og smøres</text></g><text class="tg-lille" x="5" y="232">SKIVEBREMSE SET FRA SIDEN</text></svg>`,
          tekst: `Skematisk. De dele, der bliver kontrolleret, renset og smurt ved et bremseservice. Kilde: <a href="${HBMB}" rel="noopener">Hessel, bremseservice</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Aircondition, hjul og brugtbilstjek",
        tekst: [
          `En airconditionservice på Mercedes-Benz koster 995 kr. hos Hessel. Mangler anlægget kølemiddel, bliver det afregnet efter den mængde, der bliver brugt. Skift af kabinefilter og rens af fordamperen kommer også oveni.`,
          `Hessel skriver, at de fleste Mercedes-ejere har både vinterhjul og sommerhjul, så hjulene skal skiftes to gange om året. Hjulskifte koster 400 kr., og opbevaring af hjulene koster 495 kr. pr. sæson. Som eksempel koster to hjulskift og to sæsoners opbevaring 2 × 400 kr. + 2 × 495 kr. = 1.790 kr. om året. Mere om opbevaring står i <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel</a>.`,
          `Har virksomheden købt en brugt eller importeret Mercedes-Benz, kan Hessel tjekke den igennem for 499 kr. Tjekket omfatter bilens fysiske og digitale stand.`
        ],
        efter: [
          `Kilder: <a href="${HAC}" rel="noopener">Hessel, airconditionservice</a> og <a href="${HMB}" rel="noopener">Hessel, service på Mercedes-Benz</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Brugen flytter olieintervallet",
        tekst: [
          `På en Ford afhænger intervallet for olieskift af, hvordan bilen bliver brugt. Fords Intelligent Oil-Life-monitor holder øje med motorolien og giver besked i instrumentpanelet, når den skal skiftes.`,
          `Ford nævner tre slags kørsel, der gør tiden mellem olieskiftene kortere. Det er hyppig bykørsel under 48 km i timen, mange korte ture under 3 km og høj belastning af motoren, fx med fuldt lastet bil, anhænger eller kørsel op ad bakke. Når beskeden kommer, skal olien skiftes inden for 1.600 km eller 1 måned.`,
          `En varebil med fuld last og trailer kan altså skulle have olieskift før det interval, der står i servicehæftet. Ford skriver, at den variable olieservice ikke ændrer de faste vedligeholdelsesintervaller.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Det offentliggjorte interval for olieskift bliver kortere ved fuld last, anhænger, korte ture under 3 kilometer og bykørsel under 48 kilometer i timen. Beder displayet om olieskift, skal det ske inden for 1.600 kilometer eller 1 måned."><defs><marker id="pil-pris-paa-service-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="0" y="20" width="360" height="24"/><text x="8" y="37">Det offentliggjorte maksimale interval</text><rect class="tg-modul" x="0" y="64" width="220" height="24"/><text class="tg-modul__tekst" x="8" y="81">KORTERE VED HÅRD BRUG</text><line class="tg-skinne-tynd" x1="360" y1="44" x2="360" y2="76"/><line class="tg-pil" x1="356" y1="76" x2="226" y2="76" marker-end="url(#pil-pris-paa-service-1)"/><line class="tg-skillevaeg" x1="110" y1="88" x2="110" y2="104"/><line class="tg-skillevaeg" x1="47" y1="104" x2="353" y2="104"/><line class="tg-skillevaeg" x1="47" y1="104" x2="47" y2="120"/><line class="tg-skillevaeg" x1="149" y1="104" x2="149" y2="120"/><line class="tg-skillevaeg" x1="251" y1="104" x2="251" y2="120"/><line class="tg-skillevaeg" x1="353" y1="104" x2="353" y2="120"/><rect class="tg-kasse" x="0" y="120" width="94" height="48"/><text x="47" y="148" text-anchor="middle">Fuld last</text><rect class="tg-kasse" x="102" y="120" width="94" height="48"/><text x="149" y="148" text-anchor="middle">Anhænger</text><rect class="tg-kasse" x="204" y="120" width="94" height="48"/><text x="251" y="140" text-anchor="middle">Ture under</text><text x="251" y="156" text-anchor="middle">3 km</text><rect class="tg-kasse" x="306" y="120" width="94" height="48"/><text x="353" y="140" text-anchor="middle">Bykørsel</text><text x="353" y="156" text-anchor="middle">under 48 km/t</text><text class="tg-lille" x="0" y="194">BEDER DISPLAYET OM OLIESKIFT:</text><text class="tg-lille" x="0" y="210">INDEN FOR 1.600 KM ELLER 1 MÅNED</text></svg>`,
          tekst: `Skematisk. Fords regler for den variable olieservice. Kilde: <a href="${FINT}" rel="noopener">Ford, serviceintervaller og Intelligent Oil-Life-monitor</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det flytter prisen",
        tekst: [
          `Prisen på servicen afhænger af bilens alder, brugen og de dele, der kommer oveni. Flere mærker har særlige eftersyn til ældre biler.`,
          `Ford Økonomi Service gælder biler over 5 år, og Volkswagens Service 5+ gælder biler på 5 år eller mere. Hessels +4-service gælder fra fire år.`
        ],
        punkter: [
          "<strong>Brugen.</strong> Fuld last, anhænger og bykørsel giver kortere olieinterval på en Ford.",
          "<strong>Kølemiddel og filtre.</strong> Kølemiddel, kabinefilter og rens af fordamperen kommer oveni Hessels airconditionservice.",
          "<strong>Bilens alder.</strong> Ford Økonomi Service gælder biler over 5 år, og Volkswagen Service 5+ gælder biler på 5 år eller mere.",
          "<strong>Prismatch.</strong> Volkswagen matcher et tilbud med samme indhold, som er indhentet inden for 40 km."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ford Økonomi Service, biler over", 5, "år"],
            ["VW Service 5+, biler fra", 5, "år"],
            ["Prismatch, tilbud inden for", 40, "km"]
          ],
          note: `Kilder: <a href="${FPRO}" rel="noopener">Ford Pro</a>, <a href="${VW5}" rel="noopener">Volkswagen Service 5+</a> og <a href="${VWPM}" rel="noopener">Volkswagen Prismatch</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${FINT}" rel="noopener">Ford</a>, <a href="${HAC}" rel="noopener">Hessel</a>, <a href="${FPRO}" rel="noopener">Ford Pro</a>, <a href="${VW5}" rel="noopener">Volkswagen Service 5+</a> og <a href="${VWPM}" rel="noopener">Volkswagen Prismatch</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fast pris før arbejdet",
        tekst: [
          `Hessel lover en fast pris eller et tilbud med arbejdsløn og reservedele, før arbejdet går i gang. Bruger værkstedet mere tid end aftalt, er det Hessels problem og ikke dit, og intet arbejde bliver lavet uden din accept.`,
          `Ford og Volkswagen viser arbejdet på video. Ford Video Check er gratis og dokumenterer og forklarer, hvilket arbejde der skal laves, og værkstedet går ikke i gang uden din tilladelse. Med Volkswagen ServiceCam får du en video på e-mail eller sms og kan godkende eller afvise reparationerne med få klik.`
        ],
        punkter: [
          "<strong>Hessel.</strong> Du får en fast pris eller et tilbud med arbejdsløn og reservedele, før arbejdet går i gang.",
          "<strong>Renault Pro+.</strong> Du får et tilbud på reparationen med fast pris og tid inden for 4 timer.",
          "<strong>Ford Video Check.</strong> Værkstedet går ikke i gang uden din accept."
        ],
        efter: [
          `Kilder: <a href="${HREN}" rel="noopener">Hessel</a>, <a href="${HPRO}" rel="noopener">Hessel, Renault Pro+</a>, <a href="${FPRO}" rel="noopener">Ford</a> og <a href="${VWEL}" rel="noopener">Volkswagen, ServiceCam</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Prismatch hos Volkswagen",
        tekst: [
          `Volkswagen matcher prisen på et serviceeftersyn, hvis du kommer med et tilbud fra et andet værksted, der lever op til en række krav. Tilbuddet skal være på skrift, højst 14 dage gammelt og indhentet i Danmark højst 40 km fra det autoriserede Volkswagen-værksted.`,
          `Tilbuddet skal omfatte det samme arbejde, de samme reservedele og de samme servicepunkter efter bilens serviceskema. Det skal bygge på originale Volkswagen-dele og anbefalede væsker, og det gælder serviceeftersyn, ikke tandrem eller andre separate dele. Volkswagen skriver, at ikke alle forhandlere er med i ordningen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Indhent et tilbud", "Tilbuddet skal være på skrift og fra et værksted i Danmark højst 40 km fra Volkswagen-værkstedet."],
            ["Tjek indholdet", "Det skal have samme arbejde og dele efter serviceskemaet, originale dele og anbefalede væsker."],
            ["Fremlæg det før servicen", "Tilbuddet må højst være 14 dage gammelt."],
            ["Prisen bliver matchet", "Værkstedet laver servicen til tilbuddets pris, hvis forhandleren er med i ordningen."]
          ]
        },
        efter: [
          `Kilde: <a href="${VWPM}" rel="noopener">Volkswagen Prismatch</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fordelsaftaler på værkstedet",
        tekst: [
          `Hessel har fordelsaftaler til ejere af flere mærker. Aftalen til Ford og Renault koster 649 kr. om året og giver 15 procent rabat på værkstedet, 12 gratis bilvaske og 2 gratis hjulskift om året samt 18 øre rabat pr. liter brændstof.`,
          `Et regneeksempel viser, hvornår aftalen kan betale sig. Koster et værkstedsbesøg fx 5.000 kr., giver 15 procent rabat 750 kr. Det er mere end de 649 kr., aftalen koster om året, og så er hjulskift og bilvask ikke regnet med.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Fordelsaftale, Ford og Renault", "649", "kr. om året"],
            ["Rabat på værkstedet", "15", "%"],
            ["Gratis hjulskift", "2", "om året"],
            ["Gratis bilvaske", "12", "om året"]
          ],
          note: `Hessels fordelsaftaler HESSEL FORDPLUS og HESSEL PLUS. Kilder: <a href="${HFORD}" rel="noopener">Hessel, Ford</a> og <a href="${HREN}" rel="noopener">Hessel, Renault</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Serviceaftale eller betaling hver gang",
        tekst: [
          `I stedet for at betale for hvert eftersyn kan du samle servicen i en fast månedlig betaling. Hessels serviceaftale til Renault koster fra 189 kr. om måneden og kan sammensættes efter behov.`,
          `Til Mercedes-Benz har Hessel to aftaler. ServiceCare samler den planlagte service i én fast månedlig ydelse med låst pris i aftaleperioden. CompleteCare samler service, reparationer og sliddele og skal tegnes, inden bilen er et år gammel. Hessel skriver, at kunderne typisk sparer 10-20 procent med en aftale frem for at betale hver gang.`,
          `Hessel sælger også garantiforlængelse til Mercedes-Benz i op til 10 år eller 200.000 km på samme vilkår som nybilsgarantien, og den skal tegnes, inden bilen fylder 2 år. Leasingselskabernes aftaler står i <a href="/til-varebilen/service/serviceaftale-ved-leasing/">serviceaftale ved leasing</a>.`
        ],
        efter: [
          `Kilder: <a href="${HREN}" rel="noopener">Hessel, Renault</a> og <a href="${HMB}" rel="noopener">Hessel, Mercedes-Benz</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Uafhængige værksteder",
        tekst: [
          `Kæder som Super Dæk Service tilbyder både egne servicetyper og service efter bilfabrikantens anvisninger med stempel i servicebogen. Du kan læse om garantireglerne i <a href="/til-varebilen/service/frit-vaerkstedsvalg/">frit værkstedsvalg</a>.`,
          `Super Dæk Service har servicetyperne Service, Service+ og Service efter bilfabrikantens anvisninger, og de samme tre som E-CARE til elbiler. Kæden servicerer biler for private, erhverv, industri og landbrug.`,
          `Ford kræver ikke, at bilen bliver serviceret på et autoriseret værksted for at bevare garantien. Servicen skal laves efter Fords forskrifter og kunne dokumenteres, mens garantiarbejde skal laves på et autoriseret Ford-værksted.`
        ],
        efter: [
          `Kilder: <a href="${SDS}" rel="noopener">Super Dæk Service</a> og <a href="${FGAR}" rel="noopener">Ford, garanti på varebiler</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Moms og fradrag",
        tekst: [
          `Hessel oplyser ikke, om de opslåede priser er med eller uden moms.`,
          `Skattestyrelsen skriver, at en virksomhed kan trække momsen fra på reparation og vedligeholdelse af en varebil på gule plader eller papegøjeplader, når bilen bliver brugt til momspligtige formål. Hvor meget virksomheden kan trække fra, afhænger af, hvad bilen bliver brugt til.`,
          `Skattestyrelsen beskriver reglerne særskilt for varebiler til og med 3 tons og over 3 tons. Mere om reglerne står i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`
        ],
        efter: [
          `Kilde: <a href="${SKAT}" rel="noopener">Skattestyrelsen: Fradrag for moms af biludgifter</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så kan det give en pris, der passer til bilen.",
    spoergsmaal: [
      "Nummerplade, model, og om bilen kører på diesel, benzin eller strøm.",
      "Kilometerstand i dag og ved sidste service.",
      "Om bilen har automatgear, firehjulstræk og start-stop.",
      "Om bilen kører med fuld last eller anhænger.",
      "Om der er en service- eller leasingaftale.",
      "Om du vil kontaktes med en pris, før tillægs- eller ekstraarbejde går i gang.",
      "Om bremseservice eller airconditionservice skal med."
    ],
    faq: [
      ["Hvad koster service på en varebil?", "Det afhænger af model og eftersyn. Hos Hessel koster en +4-service fx 1.795 kr. på en Renault med diesel og 1.395 kr. på en elbil (oktober 2026). Mange eftersyn prissættes efter tilbud."],
      ["Hvad koster et bremseservice?", "Hessel tager 995 kr. for for- og bagbremser på Mercedes-Benz og Renault (oktober 2026)."],
      ["Hvad er forskellen på service A og service B hos Mercedes-Benz?", "Service A er efter første år og omfatter olie, filter og kontrol af bl.a. bremser og lygter. Service B er efter to år og omfatter også pollenfilter, styretøj, profilrem og parkeringsbremse."],
      ["Er bremseservice en del af det almindelige eftersyn?", "Nej, skriver Hessel. Et egentligt bremseservice, hvor bremserne skilles ad og renses, ligger uden for det faste serviceinterval."],
      ["Hvad er tillægsarbejde?", "Det er arbejde, der skal laves ud over selve servicen for at opfylde fabrikkens krav, afhængigt af bilens alder og kilometerstand. Hessel nævner fx brændstoffilter, pollenfilter og bremsevæske."],
      ["Hvad koster hjulskift og opbevaring?", "Hos Hessel koster hjulskifte 400 kr. og opbevaring 495 kr. pr. sæson på Mercedes-Benz (oktober 2026)."],
      ["Kan Volkswagen matche en pris fra et andet værksted?", "Ja, med Prismatch, hvis tilbuddet er på skrift, højst 14 dage gammelt, indhentet højst 40 km væk og har samme indhold. Ikke alle Volkswagen-forhandlere er med."],
      ["Er moms med i værkstedspriserne?", "Hessel oplyser ikke, om de opslåede priser er inkl. eller ekskl. moms."],
      ["Kan virksomheden trække momsen fra på service?", "Skattestyrelsen skriver, at momsen på reparation og vedligeholdelse kan trækkes fra, når varebilen på gule plader eller papegøjeplader bruges til momspligtige formål. Fradraget afhænger af, hvad bilen bruges til."]
    ],
    kilder: [
      { navn: "Hessel: Ford +4 serviceeftersyn og FordPlus", url: HFORD, dato: "2026-10-07" },
      { navn: "Hessel: Renault +4 service og serviceaftale", url: HREN, dato: "2026-10-07" },
      { navn: "Hessel: Bremseservice til Mercedes-Benz", url: HBMB, dato: "2026-10-07" },
      { navn: "Hessel: Bremseservice til Renault", url: HBREN, dato: "2026-10-07" },
      { navn: "Hessel: Airconditionservice til Mercedes-Benz", url: HAC, dato: "2026-10-07" },
      { navn: "Hessel: Service på Mercedes-Benz (hjulskifte, opbevaring, Mobile Service)", url: HMB, dato: "2026-10-07" },
      { navn: "Hessel: Mercedes-Benz service A", url: HA, dato: "2026-10-07" },
      { navn: "Hessel: Mercedes-Benz service B3", url: HB3, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Bilservice og eftersyn", url: MBV, dato: "2026-10-04" },
      { navn: "Volkswagen: Service 5+", url: VW5, dato: "2026-10-07" },
      { navn: "Ford: Serviceintervaller", url: FINT, dato: "2026-10-07" },
      { navn: "Ford: Ford Pro Service", url: FPRO, dato: "2026-10-07" },
      { navn: "Volkswagen: Prismatch og servicefordele", url: VWPM, dato: "2026-10-07" },
      { navn: "Hessel: Renault Pro+ erhvervscenter", url: HPRO, dato: "2026-10-07" },
      { navn: "Super Dæk Service: Ydelser og tilbud", url: SDS, dato: "2026-10-07" },
      { navn: "Ford: Garanti på nye Ford varebiler", url: FGAR, dato: "2026-10-07" },
      { navn: "Volkswagen: Service på elbil (ServiceCam)", url: VWEL, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Fradrag for moms af biludgifter", url: SKAT, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Hessel: hjulopbevaring på Mercedes-Benz koster 495 kr. pr. sæson, og et brugtbilstjek af en brugt eller importeret Mercedes-Benz koster 499 kr. og giver vished om bilens fysiske og digitale stand.", HMB],
    ["Hessel: +4-servicen giver et 5-stjernet autoriseret stempel i servicebogen, omfatter fabriksopdateringer og rustkontroller, og behovet for service og reparationer stiger, når bilerne bliver ældre; Renault +4 tilbydes til benzin, diesel og elbil.", HREN],
    ["Hessel: Mercedes service A udføres efter første år og omfatter kontrol af bremsekomponenter, kølervæske, sprinklersystem, dæktryk, lygter og sikkerhedsopdateringer; eksempler er A1, A3 og A9; eksempler på service B er B3, B5 og B7; ældre modeller giver besked om B3, nyere viser blot service B.", HMB],
    ["Hessel: et Mercedes-service består som regel af oliefilterskift, aftapning og påfyldning af motorolie og kontrol af komponenter og filtre; afhængig af alder og km er der ofte tillægsarbejde, fx brændstoffilter, pollenfilter eller bremsevæske; kontrollen kan vise ekstraarbejde, fx nedslidte bremser eller dele i styretøjet; kunden kan bede om at blive kontaktet med en pris, før tillægs- eller ekstraarbejde påbegyndes.", HMB],
    ["Volkswagen Service 5+ (biler på 5 år eller mere, også erhvervsbiler): måling af bremseklodsernes tykkelse og kontrol af skiver for og bag, gennemgang af undervognsbeskyttelse, beklædninger, ledninger, rør og slanger, kontrol af bærekugler, lejer og gummibøsninger; stempel i digital servicebog og Volkswagen Vejhjælp til næste service.", VW5],
    ["Super Dæk Service tjekker bilen på mindst 34 punkter og har servicetyperne Service, Service+, Service efter bilfabrikantens anvisninger og tilsvarende E-CARE-typer; kæden betjener private, erhverv, industri og landbrug.", SDS],
    ["Hessel bremseservice: afmontering af hjul og klodser, kontrol af skiver og kalibre for slid, rust og ujævnheder, rens af kalibre, glidestifter og anlægsflader, smøring af bevægelige dele med specialfedt, samling og funktionskontrol, bremsetest på prøvestand; går ud over en visuel kontrol og er ikke en del af det faste serviceinterval; særligt vigtigt for elbiler; Hessel råder til at bruge den mekaniske bremse en gang imellem.", HBMB],
    ["Hessel: ved airconditionservice afregnes manglende kølemiddel efter forbrugt mængde, og skift af kabinefilter og rens af fordamperen kommer oveni 995 kr.", HAC],
    ["Hessel: de fleste Mercedes-ejere har både vinter- og sommerhjul, så hjulene skal skiftes to gange om året.", HMB],
    ["Ford: Intelligent Oil-Life-monitor overvåger motorolien; hyppig bykørsel under 48 km i timen, korte ture under 3 km og høj motorbelastning (fuld last, anhænger, bakker) reducerer tiden mellem olieskift; ved beskeden skal olien skiftes inden for 1.600 km eller 1 måned; den variable olieservice ændrer ikke de obligatoriske vedligeholdelsesintervaller.", FINT],
    ["Hessel: bruger værkstedet mere tid end aftalt, er det Hessels problem og ikke kundens; intet arbejde udføres uden kundens accept.", HREN],
    ["Ford Video Check er gratis, dokumenterer og forklarer arbejdet, og intet arbejde udføres uden kundens tilladelse.", FPRO],
    ["Volkswagen ServiceCam sender en video på e-mail eller sms, og reparationer kan godkendes eller afvises med få klik.", VWEL],
    ["Volkswagen Prismatch: tilbuddet skal være på skrift, højst 14 dage gammelt, indhentet maks. 40 km fra værkstedet i Danmark, have samme arbejde, dele og servicepunkter efter serviceskemaet, bygge på originale dele og anbefalede væsker og gælde serviceeftersyn, ikke tandrem eller andre separate komponenter; ikke alle forhandlere deltager.", VWPM],
    ["Hessel FORDPLUS og HESSEL PLUS (Renault): 649 kr. om året, 15 % rabat på værkstedet, 12 gratis bilvaske pr. år, 2 gratis hjulskift pr. år og 18 øre rabat pr. liter brændstof.", HFORD],
    ["Hessel: Renault serviceaftale fra 189 kr. pr. måned, kan sammensættes efter behov.", HREN],
    ["Hessel: Mercedes ServiceCare samler planlagt service i én fast månedlig ydelse med låst pris; CompleteCare samler service, reparationer og sliddele og skal tegnes inden bilens første leveår; kunderne sparer typisk 10-20 % frem for at betale gang for gang; WarrantyExtension op til 10 år/200.000 km, skal tegnes før bilen fylder 2 år.", HMB],
    ["Ford: service skal ikke ske på autoriseret værksted, men efter Fords forskrifter og dokumenteret; garantiarbejde skal udføres på autoriseret Ford-værksted.", FGAR],
    ["Skattestyrelsen: når varebilen på gule plader eller papegøjeplader bruges til momspligtige formål, kan momsen på bl.a. reparation og vedligeholdelse trækkes fra; fradraget afhænger af brugen, og reglerne beskrives særskilt for varebiler til og med 3 tons og over 3 tons.", SKAT]
  ]
};
