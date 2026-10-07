// Emnesiden /til-varebilen/service/ (07-10-2026)
// mercedes-benz.dk var spærret i dag. Mercedes-Benz' tal er fra den 4. oktober 2026.
var MB_EL = `https://www.mercedes-benz.dk/vans/services/electric-vehicle-services.html`;
var MB_VM = `https://www.mercedes-benz.dk/vans/services/vehicle-maintenance.html`;
var MB_SC = `https://www.mercedes-benz.dk/vans/services/service-care.html`;
var MB_VS = `https://www.mercedes-benz.dk/vans/services/van-service.html`;
var MB_MOB = `https://www.mercedes-benz.dk/vans/services/mobile-service.html`;
var MB_CTRL = `https://www.mercedes-benz.dk/vans/services/vehicle-control.html`;
var TOYOTA = `https://www.toyota.dk/erhvervsbiler/professional/toyota-relax`;
var FORD_INT = `https://www.ford.dk/min-bil/service-og-vedligeholdelse/service/serviceintervaller`;
var FORD_G = `https://www.ford.dk/min-bil/garanti/varebiler`;
var FORD_PRO = `https://www.ford.dk/erhverv/ford-pro-service`;
var VW_G = `https://ww4.volkswagen.dk/media/hcdf4g1k/garanti_vwe_100042_sep26_web.pdf`;
var VW_ERHV = `https://www.volkswagen.dk/da/erhvervsbiler/service.html`;
var VW_5 = `https://www.volkswagen.dk/da/vaerksted/service/vw-service5plus.html`;
var VW_PM = `https://www.volkswagen.dk/da/vaerksted/service/prismatch.html`;
var VW_ABO = `https://www.volkswagen.dk/da/vaerksted/service/serviceabonnementer.html`;
var VW_EL = `https://www.volkswagen.dk/da/vaerksted/service/elbil-service.html`;
var NORD = `https://www.nordania.dk/erhverv/find-hjaelp/service-skader-reparation/forhaandsgodkendelse`;
var AYV_S = `https://www.ayvens.com/da-dk/for-foerere/service-og-vedligeholdelse/`;
var AYV_D = `https://www.ayvens.com/da-dk/for-foerere/daek/`;
var AYV_V = `https://www.ayvens.com/da-dk/for-foerere/vejhjaelp/`;
var R822 = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32023R0822`;
var RETN23 = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:52023XC0417(02)`;
var H_PRO = `https://www.hessel.dk/erhverv/service-vaerksted/proplus`;
var H_VAN = `https://www.hessel.dk/erhverv/service-vaerksted/van-pro`;
var H_REN = `https://www.hessel.dk/vaerksted-service/ydelser/service/renault`;
var H_MB = `https://www.hessel.dk/vaerksted-service/ydelser/service/mercedes-benz`;
var DIN = `https://dinitrol.dk/undervognsbehandling-pris/`;
var TEC_KOMPLET = `https://tectyldanmark.dk/undervognsbehandling/komplet-rustbeskyttelse/`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "service",
  side: {
    slug: "service",
    navn: "Service og værksted",
    titel: "Service og værksted til varebil",
    kort: `Serviceintervaller, garanti og frit værkstedsvalg, serviceaftaler i leasing, lånebil og rustbeskyttelse.`,
    beskrivelse: `Service på varebil: intervaller, garantier på op til 12 år, frit værkstedsvalg, serviceaftaler ved leasing, lånebil og rustbeskyttelse.`,
    manchet: `Fabriksgarantien kræver, at bilen serviceres efter producentens forskrifter, men ikke nødvendigvis på et mærkeværksted. Ved leasing bestemmer aftalen, hvor bilen skal serviceres, og hvad der er med. Her er intervallerne, garantierne og ordningerne hos producenterne og leasingselskaberne.`,
    visuel: {
      hero: "service",
      kort_fortalt: [
        ["Rustgaranti, Ford og VW", "12 år", "mod gennemtæring indefra"],
        ["Elvarebil, Mercedes-Benz", "1 år", "eller 40.000 km mellem eftersyn"],
        ["Godkendelse hos Nordania", "over 1.500 kr.", "før en reparation går i gang"],
        ["Frit værksted", "Garantien består", "når servicen følger forskrifterne"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Service på en varebil",
        tekst: [
          `En varebil skal til eftersyn efter producentens serviceprogram, og intervallet står i instruktionsbogen eller servicehæftet. Fabriksgarantien kræver, at bilen bliver serviceret efter producentens forskrifter, men ikke nødvendigvis på et mærkeværksted.`,
          `Ved leasing bestemmer aftalen, hvor bilen skal serviceres, og hvad der er med. Ved køb vælger virksomheden selv værkstedet inden for garantibetingelserne. Valget har betydning for garantien, for vejhjælpen og for, hvem der betaler, når bilen står på værkstedet.`,
          `Tidslinjen viser, hvornår de vigtigste garantier og ordninger slutter i en varebils første 12 år. Tallene er fra Ford, Volkswagen, Toyota og Mercedes-Benz.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Levering", "Garantierne begynder typisk ved bilens første indregistrering."],
            ["Hvert år eller hvert 2. år", "Mercedes-Benz’ elvarebiler skal til service hvert år eller hver 40.000 km, og en Toyota Proace hvert 2. år eller hver 30.000 km."],
            ["2–3 år", "Nybilsgarantien udløber efter 2 år hos Ford og Volkswagen og efter 3 år eller 100.000 km hos Toyota."],
            ["5 år", "Ford Protect udløber på udvalgte modeller, eller ved 150.000 km. Volkswagen Service 5+ er til biler på 5 år eller mere."],
            ["8 år", "Batterigarantien på elvarebiler udløber, eller ved 160.000 km."],
            ["10 år", "Toyota Relax slutter, eller ved 185.000 km."],
            ["12 år", "Rustgarantien hos Ford og Volkswagen udløber."]
          ],
          note: `Det, der kommer først af tid og kilometer, gælder. Kilder: ${a(FORD_G, "Ford")}, ${a(VW_G, "Volkswagen")}, ${a(VW_5, "Volkswagen Service 5+")} og ${a(TOYOTA, "Toyota")}, set den 7. oktober 2026, og ${a(MB_EL, "Mercedes-Benz")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Serviceintervaller hos producenterne",
        tekst: [
          `Producenterne angiver intervallet i både tid og kilometer, og det, der kommer først, gælder. Mercedes-Benz’ elektriske varebiler skal til service hvert år eller hver 40.000 km, og servicearbejdet ved de første fire eftersyn er med i prisen. Toyota bruger Proace som eksempel med service hvert 2. år eller hver 30.000 km.`,
          `Hos Ford afhænger intervallet af model og motor og står i servicehæftet, mens olieskiftet styres af bilens oliemonitor. Det gældende interval står i bilens instruktionsbog eller servicehæfte. Mere om elbiler i <a href="/til-varebilen/service/service-paa-elvarebil/">service på elvarebil</a>.`
        ],
        tabel: {
          kolonner: ["Producent", "Interval", "Bemærkning"],
          raekker: [
            ["Mercedes-Benz, elektriske varebiler", "1 år eller 40.000 km", "Servicearbejdet ved de første fire eftersyn er med i prisen"],
            ["Toyota Proace", "2 år eller 30.000 km", "Toyotas eget eksempel"],
            ["Ford", "Efter model og motor", "Står i servicehæftet. Olieskift styres af bilens oliemonitor"]
          ],
          note: `Kilder: ${a(MB_EL, "Mercedes-Benz")}, set den 4. oktober 2026, og ${a(TOYOTA, "Toyota")} og ${a(FORD_INT, "Ford")}, set den 7. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tidslinje over fire år med serviceintervallerne for Mercedes-Benz elvarebiler og Toyota Proace"><defs><marker id="pil-service-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g class="tg-maal"><line x1="140" y1="32" x2="380" y2="32" marker-start="url(#pil-service-1)" marker-end="url(#pil-service-1)"/><text x="222" y="24" text-anchor="middle">første fire eftersyn inkluderet</text></g><text x="20" y="52">Mercedes-Benz, elvarebiler: 1 år eller 40.000 km</text><rect x="134" y="60" width="12" height="12" class="tg-modul"/><rect x="214" y="60" width="12" height="12" class="tg-modul"/><rect x="294" y="60" width="12" height="12" class="tg-modul"/><rect x="374" y="60" width="12" height="12" class="tg-modul"/><text x="20" y="100">Toyota Proace: 2 år eller 30.000 km</text><rect x="214" y="108" width="12" height="12" class="tg-kuffert"/><rect x="374" y="108" width="12" height="12" class="tg-kuffert"/><line x1="60" y1="150" x2="380" y2="150" class="tg-gulvlinje"/><line x1="60" y1="144" x2="60" y2="156" class="tg-gulvlinje"/><text x="60" y="170" text-anchor="middle">start</text><line x1="140" y1="144" x2="140" y2="156" class="tg-gulvlinje"/><text x="140" y="170" text-anchor="middle">1 år</text><line x1="220" y1="144" x2="220" y2="156" class="tg-gulvlinje"/><text x="220" y="170" text-anchor="middle">2 år</text><line x1="300" y1="144" x2="300" y2="156" class="tg-gulvlinje"/><text x="300" y="170" text-anchor="middle">3 år</text><line x1="380" y1="144" x2="380" y2="156" class="tg-gulvlinje"/><text x="380" y="170" text-anchor="middle">4 år</text><text x="20" y="192" class="tg-lille">DET, DER KOMMER FØRST, AF TID OG KILOMETER</text></svg>`,
          tekst: `Skematisk. Serviceintervaller over fire år. Kilder: ${a(MB_EL, "Mercedes-Benz, Elbilsservice")}, set den 4. oktober 2026, og ${a(TOYOTA, "Toyota Relax")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Garantierne på nye varebiler",
        tekst: [
          `Fabriksgarantien dækker materiale- og fabrikationsfejl, ikke slid. Ford og Volkswagen giver 2 år på nye varebiler, og Toyota giver 3 år eller 100.000 km uden kilometergrænse det første år. Garantien mod gennemtæring er længere, og elvarebiler har en særskilt garanti på højvoltsbatteriet.`,
          `Toyota giver 5 år eller 100.000 km mod fejl på batteriet og sikrer mindst 70 % kapacitet i 8 år eller 160.000 km. Mercedes-Benz garanterer også mindst 70 % kapacitet i 8 år eller 160.000 km. Hos både Ford og Volkswagen følger garantien bilen, hvis den bliver solgt.`
        ],
        tabel: {
          kolonner: ["Producent", "Nybilsgaranti", "Gennemtæring", "Højvoltsbatteri"],
          raekker: [
            ["Ford", "2 år. 5 år/150.000 km på udvalgte modeller", "12 år", "8 år/160.000 km"],
            ["Volkswagen Erhvervsbiler", "2 år", "12 år", "8 år/160.000 km"]
          ],
          note: `Kilder: ${a(FORD_G, "Ford")}, ${a(VW_G, "Volkswagen")} og ${a(TOYOTA, "Toyota")}, set den 7. oktober 2026, og ${a(MB_EL, "Mercedes-Benz")}, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 244" role="img" aria-label="Varebil set fra siden med garantierne: nybilsgaranti på 2–3 år mod fabrikationsfejl, 10–12 års garanti mod gennemtæring og 2–3 år på lakken og 8 år eller 160.000 km på højvoltsbatteriet. Sliddele og skader er ikke omfattet."><g transform="translate(80,180)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="150" y="170" width="110" height="8"/><line class="tg-gulvlinje" x1="5" y1="197" x2="395" y2="197"/><g class="tg-call"><line x1="150" y1="110" x2="60" y2="46"/><circle cx="150" cy="110" r="3"/><text class="tg-call__navn" x="5" y="24">Karrosseri og lak</text><text class="tg-call__under" x="5" y="38">rust 10–12 år, lak 2–3 år</text></g><g class="tg-call"><line x1="290" y1="120" x2="330" y2="46"/><circle cx="290" cy="120" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Fabrikationsfejl</text><text class="tg-call__under" x="395" y="38" text-anchor="end">nybilsgaranti 2–3 år</text></g><g class="tg-call"><line x1="220" y1="176" x2="220" y2="208"/><circle cx="220" cy="176" r="3"/><text class="tg-call__navn" x="226" y="222">Højvoltsbatteri</text><text class="tg-call__under" x="226" y="236">8 år eller 160.000 km</text></g><g class="tg-call"><line x1="128" y1="186" x2="60" y2="208"/><circle cx="128" cy="186" r="3"/><text class="tg-call__navn" x="5" y="222">Sliddele og skader</text><text class="tg-call__under" x="5" y="236">ikke omfattet</text></g></svg>`,
          tekst: `Skematisk. Tallene dækker Ford, Volkswagen og Toyota. Transit City har 10 års rustgaranti, de øvrige Ford- og Volkswagen-modeller 12 år. Ford giver 2 år på lakken og Volkswagen 3 år. Kilder: ${a(FORD_G, "Ford")}, ${a(VW_G, "Volkswagen")} og ${a(TOYOTA, "Toyota")}, set den 7. oktober 2026.`
        },
        efter: [
          `Fords femårige garanti gælder E-Transit Courier, E-Transit Custom, E-Transit, Transit Custom diesel og PHEV, Transit City og Explorer VAN, solgt via autoriserede forhandlere og indregistreret fra den 13. marts 2025. For Transit Custom diesel og PHEV gælder den fra indregistrering den 14. juli 2026.`
        ]
      },
      {
        overskrift: "Olieskift efter brugen",
        tekst: [
          `Fords Oil-Life-monitor følger motorolien og melder, når den skal skiftes. Olieintervallet varierer, men de faste vedligeholdelsesintervaller er de samme. Ford forklarer, at olien nedbrydes hurtigere under nogle kørselsforhold, og at intervallet derfor kan blive kortere end det højeste interval i serviceplanen.`,
          `Står bilen ubrugt i længere tid, anbefaler Ford at køre den over 1.700 omdrejninger i minuttet i mindst 15 minutter hver uge. Ford anbefaler også at undgå, at motoren kører, mens bilen holder stille.`
        ],
        punkter: [
          "<strong>Kortere interval.</strong> Intervallet bliver kortere ved bykørsel under 48 km/t, med fuldt lastet bil, med anhænger og på strækninger med mange bakker.",
          "<strong>Når meddelelsen kommer.</strong> Olien skiftes inden for 1.600 km eller 1 måned, hvad der kommer først.",
          "<strong>Nulstilling.</strong> Ford-forhandleren nulstiller monitoren efter olieskiftet."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Skematisk. Fords Oil-Life-monitor kan gøre intervallet for olieskift kortere end det højeste interval i serviceplanen ved bykørsel under 48 km/t, fuld last, anhænger og mange bakker. Når meddelelsen kommer, skal olien skiftes inden 1.600 km eller 1 måned."><text class="tg-fremhaev" x="20" y="18">Olieskift med Oil-Life-monitor</text><rect class="tg-kasse" x="20" y="32" width="360" height="28"/><text x="28" y="50">Højeste interval i serviceplanen</text><rect class="tg-modul" x="20" y="72" width="220" height="28"/><text class="tg-modul__tekst" x="28" y="90">KORTERE VED HÅRD BRUG</text><line class="tg-skinne" x1="240" y1="64" x2="240" y2="110"/><text class="tg-fremhaev" x="240" y="128" text-anchor="middle">Meddelelsen kommer</text><text x="240" y="144" text-anchor="middle">olien skiftes inden 1.600 km</text><text x="240" y="160" text-anchor="middle">eller 1 måned</text><text class="tg-lille" x="20" y="190">BYKØRSEL UNDER 48 KM/T, FULD LAST, ANHÆNGER, BAKKER</text></svg>`,
          tekst: `Skematisk. Længderne er ikke målfaste. Kilde: ${a(FORD_INT, "Ford, Serviceintervaller")}, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: ${a(FORD_INT, "Ford, Serviceintervaller")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Garanti og frit værkstedsvalg",
        tekst: [
          `Ford skriver, at man ikke er forpligtet til at bruge et autoriseret Ford-værksted. Service og vedligeholdelse skal følge Fords forskrifter og kunne dokumenteres, mens garantiarbejde udføres på et autoriseret værksted.`,
          `EU’s gruppefritagelse for bilbranchen, forordning (EU) nr. 461/2010, gælder til 31. maj 2028. Efter EU-Kommissionens retningslinjer er det misbrug af garantien at kræve, at alt arbejde uden for garantien laves på et autoriseret værksted. Siden 2023 nævner retningslinjerne også bilens egne data blandt de input, uafhængige værksteder kan have brug for.`,
          `Gennemgang i <a href="/til-varebilen/service/frit-vaerkstedsvalg/">frit værkstedsvalg</a>.`
        ],
        efter: [
          `Kilder: ${a(FORD_G, "Ford")}, ${a(R822, "Forordning (EU) 2023/822")} og ${a(RETN23, "Ændring af de supplerende retningslinjer, 2023")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ordninger, der følger mærkeværkstedet",
        tekst: [
          `Flere producenter giver ekstra ydelser, når bilen bliver serviceret på et autoriseret værksted. Ordningerne gælder ikke ved service på et uafhængigt værksted, selvom fabriksgarantien består.`
        ],
        punkter: [
          "<strong>Toyota Relax.</strong> Når fabriksgarantien udløber, giver hvert service på et autoriseret Toyota-værksted garanti til næste eftersyn, indtil bilen er 10 år eller har kørt 185.000 km.",
          "<strong>Mercedes-Benz MobiloVan.</strong> Mobilitetsgarantien gælder i op til 30 år i hele Europa, når bilen serviceres til tiden hos en autoriseret Mercedes-Benz-partner.",
          "<strong>Ford Assistance.</strong> Ford giver op til 24 måneders europæisk vejhjælp ved hvert service hos Ford. Varigheden følger bilens serviceinterval."
        ],
        efter: [
          `Kilder: ${a(TOYOTA, "Toyota")} og ${a(FORD_PRO, "Ford")}, set den 7. oktober 2026, og ${a(MB_VM, "Mercedes-Benz")}, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Erhvervsværkstederne",
        tekst: [
          `Flere forhandlere har værksteder, der er indrettet til erhvervskunder. Hessels Renault Pro+ har altid en erstatningsbil til rådighed, udvidede åbningstider, en fast kontaktperson og faste priser. Volkswagens ServicePlus-værksteder har et samlet erhvervsteam, fleksible åbningstider og hente-bringe-service, og nogle af dem har aftenservice.`
        ],
        kort: [
          ["Ford Pro Service", "Ford Transit Erhvervscentrene har udvidede åbningstider. De sætter flere teknikere på bilen, tilbyder hente-bringe-service og stiller en erstatningsbil, hvis bilen ikke bliver færdig samme dag."],
          ["Renault Pro+", "Hessel i Aalborg, Aarhus og Avedøre stiller en diagnose inden for 1 time og har plads til serviceeftersyn inden for 8 timer uden tidsbestilling. Centrene tager varebiler op til 7 tons."],
          ["Mercedes-Benz Van ProCenter", "Hessel har van-mekanikere på vagt døgnet rundt og har erstatnings-, leje- og servicebiler."],
          ["Volkswagen Erhvervsbiler", "Værkstederne dækker hele landet, og der er højst 25 km til nærmeste værksted, bortset fra få steder i yderområderne."]
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Renault Pro+: diagnose", "1", "time"],
            ["Renault Pro+: tilbud med fast pris", "4", "timer"],
            ["Renault Pro+: til service inden for", "8", "timer"],
            ["VW: til nærmeste værksted", "25", "km"]
          ],
          note: `Kilder: ${a(FORD_PRO, "Ford Pro Service")}, ${a(H_PRO, "Hessel, Renault Pro+")}, ${a(H_VAN, "Hessel, Van ProCenter")} og ${a(VW_ERHV, "Volkswagen Erhvervsbiler")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Service i leasingaftalen",
        tekst: [
          `Ved operationel leasing ligger service ofte i ydelsen. Leasingselskabet bestemmer, hvor bilen serviceres. Nordania skriver, at kun autoriserede mærkeværksteder må servicere og reparere Nordanias biler, og at reparationer over 1.500 kr. kræver forhåndsgodkendelse.`,
          `Dæk, skader og erstatningsbil er særskilte dele af kontrakten. Hos Ayvens kan sæsondæk være en del af aftalen, og det står i leasingkontrakten. Skader går til forsikringen og ikke til serviceaftalen.`,
          `Mere i <a href="/til-varebilen/service/serviceaftale-ved-leasing/">serviceaftale ved leasing</a> og i Håndbogen: <a href="/haandbogen/finansiel-og-operationel-leasing/">finansiel og operationel leasing</a>.`
        ],
        efter: [
          `Kilder: ${a(NORD, "Nordania")} og ${a(AYV_D, "Ayvens: Dæk")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Producenternes serviceaftaler",
        tekst: [
          `Mercedes-Benz ServiceCare findes som pakker til vedligeholdelse, udvidet garanti og fuld servicedækning til faste priser i op til otte år eller 300.000 km, afhængigt af aftalen. Der er separate prislister for diesel og el.`,
          `Volkswagen Erhvervsbiler har tre abonnementer. Service- og Reparationsabonnementet skal oprettes, før bilen er 24 måneder gammel, mens Basisabonnementet kan oprettes til biler fra 4 måneder og løber 3 år ad gangen. Vejhjælp døgnet rundt er med i alle tre.`
        ],
        efter: [
          `Kilder: ${a(MB_SC, "Mercedes-Benz ServiceCare")} og ${a(MB_VS, "Mercedes-Benz varebilsservice")}, set den 4. oktober 2026, og ${a(VW_ABO, "Volkswagen, Serviceabonnementer")} og ${a(VW_ERHV, "Volkswagen Erhvervsbiler")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Lånebil og vejhjælp",
        tekst: [
          `Ford Pro Service stiller en erstatningsbil, hvis varebilen ikke bliver færdig samme dag. Toyota bestræber sig på at finde en lånebil, der matcher behovet. Volkswagens garanti giver ikke i sig selv ret til en erstatningsbil.`,
          `Ved leasing kommer erstatningsbilen kun med, hvis den står i kontrakten, skriver Ayvens. Ayvens Assistance kan ringes op 24 timer i døgnet, 365 dage om året. Mere i <a href="/til-varebilen/service/erstatningsbil/">erstatningsbil og lånebil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Mærke", "Lånebil under service", "Vejhjælp"],
          raekker: [
            ["Ford", "Erstatningsbil, hvis bilen ikke bliver færdig samme dag", "Op til 24 måneder i Europa ved hver service"],
            ["Volkswagen", "Lånebil mod betaling", "Gratis i Europa efter seneste store service hos Volkswagen"],
            ["Toyota", "Toyota bestræber sig på at finde en, der passer til behovet", "Hjælp på stedet og bugsering til værksted"],
            ["Mercedes-Benz", "Erstatnings-, leje- og servicebiler hos Hessel Van ProCenter", "MobiloVan i op til 30 år ved service til tiden"]
          ],
          note: `Kilder: ${a(FORD_PRO, "Ford Pro Service")}, ${a(VW_PM, "Volkswagen")}, ${a(VW_G, "Volkswagens garantibestemmelser")}, ${a(TOYOTA, "Toyota")}, ${a(H_VAN, "Hessel, Van ProCenter")} og ${a(AYV_V, "Ayvens: Vejhjælp")}, set den 7. oktober 2026, og ${a(MB_VM, "Mercedes-Benz")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Mobilt værksted",
        tekst: [
          `Mercedes-Benz Mobile Service kommer ud med værkstedet til firmaet. Stilstandstiden kan planlægges på forhånd, og flere biler kan serviceres på én gang.`,
          `Hessel har en Mobile Service i områderne omkring Roskilde og Kastrup. Teknikerne kører ud til den adresse, du vælger, og laver serviceeftersyn, mindre reparationer og softwareopdateringer.`
        ],
        efter: [
          `Kilder: ${a(MB_MOB, "Mercedes-Benz Mobile Service")}, set den 4. oktober 2026, og ${a(H_MB, "Hessel, Mercedes-Benz")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Elvarebilen på værkstedet",
        tekst: [
          `En elvarebil har færre dele, der slides, men den har et højvoltsbatteri, som kun særligt uddannede teknikere må arbejde på. Hos Volkswagen skal batteriet åbnes på et servicecenter med service på højspændingssystemer, mens arbejde som dækskift kan laves af medarbejdere, der har gennemført en træning i elbiler.`,
          `Bremserne bliver brugt mindre, fordi bilen bremser ved at lade strøm tilbage til batteriet. Volkswagen skriver, at de derfor kan ruste, før de bliver slidt, og at de skal efterses ved hvert service. Mere i <a href="/til-varebilen/service/service-paa-elvarebil/">service på elvarebil</a>.`
        ],
        efter: [
          `Kilde: ${a(VW_EL, "Volkswagen, Service på elbil")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Rustbeskyttelse",
        tekst: [
          `Ford og Volkswagen giver 12 års garanti mod gennemtæring indefra. Fords garanti forudsætter karrosseriinspektioner, som udføres uden beregning.`,
          `Undervognsbehandling er et tilvalg fra rustbeskyttelseskæderne. Hos Dinitrol koster en komplet behandling typisk 4.000–5.500 kr., og Tectyl giver højst 12 års garanti på varevogne og gulpladebiler. Priser og intervaller for undervognsbehandling står i <a href="/til-varebilen/service/undervognsbehandling/">undervognsbehandling</a>.`
        ],
        efter: [
          `Kilder: ${a(FORD_G, "Ford")}, ${a(VW_G, "Volkswagen")} og ${a(TEC_KOMPLET, "Tectyl")}, set den 7. oktober 2026, og ${a(DIN, "Dinitrol")}, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Dokumentation fra værkstedet",
        tekst: [
          `Flere mærkeværksteder viser med video, hvad bilen skal have lavet, før arbejdet går i gang. Ford skriver også, at du kan blive bedt om at dokumentere, at eftersynene er udført korrekt og til tiden, når du gør garantien gældende.`
        ],
        punkter: [
          "<strong>Ford Video Check.</strong> Du får en gratis video, der dokumenterer og forklarer det arbejde, bilen skal have. Værkstedet går ikke i gang uden din accept.",
          "<strong>Volkswagen ServiceCam.</strong> Du kan følge med under eftersynet. Dialogmodtagelsen før service er gratis og tager cirka 20 minutter.",
          "<strong>Mercedes-Benz Mobile Service.</strong> Alt servicearbejde registreres i den digitale servicebog."
        ],
        figur: {
          type: "trin",
          trin: [
            ["Gennemgang", "Volkswagens dialogmodtagelse før service er gratis og tager cirka 20 minutter."],
            ["Video", "Ford Video Check og Volkswagen ServiceCam viser, hvad bilen skal have lavet."],
            ["Accept", "Værkstedet går ikke i gang uden din accept."],
            ["Servicebog", "Arbejdet bliver registreret, hos Mercedes-Benz i den digitale servicebog."]
          ]
        },
        efter: [
          `Kilder: ${a(FORD_PRO, "Ford")}, ${a(FORD_G, "Ford: Garanti")}, ${a(VW_5, "Volkswagen Service 5+")} og ${a(VW_PM, "Volkswagen servicefordele")}, set den 7. oktober 2026, og ${a(MB_MOB, "Mercedes-Benz")}, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Digital overvågning af bilerne",
        tekst: [
          `Mercedes-Benz har tre gratis digitale tjenester: administration af serviceeftersyn, telediagnose og fjernaflæsning af bilens status. Van Uptime Monitor sender besked i realtid, hvis der er risiko for skader, og med Onboard Service-appen i MBUX kan føreren booke værkstedstid fra førerhuset.`,
          `Volkswagen Erhvervsbiler har ConnectedFleet, et gratis flådesystem, der løbende viser bilernes sundhedstilstand. Du kan læse mere om kørebog og flådedata i <a href="/til-varebilen/flaadestyring/">flådestyring og kørebog</a>.`
        ],
        efter: [
          `Kilder: ${a(MB_CTRL, "Mercedes-Benz, Intelligent bilstyring")}, set den 4. oktober 2026, og ${a(VW_ERHV, "Volkswagen Erhvervsbiler")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Syn",
        tekst: [
          `Reglerne for, hvornår varebilen skal til syn, står i Håndbogen: <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>.`,
          `Er bilen leaset hos Ayvens, kan den synes hos FDM og Applus. Når føreren oplyser registreringsnummeret og leasingselskabet, sender de fakturaen direkte til Ayvens.`
        ],
        efter: [
          `Kilde: ${a(AYV_S, "Ayvens: Service og vedligehold")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pris på et serviceeftersyn",
        tekst: [
          `Hessel har faste priser på service til ældre biler. En +4-service koster fx 1.795 kr. på en Renault med diesel og 1.395 kr. på en elbil. Servicen er til biler på fire år eller mere og omfatter bl.a. rusteftersyn, en kontrol på 30 punkter og olieskift med nyt filter.`,
          `Hessels serviceaftale til Renault koster fra 189 kr. om måneden. Alle priser er fra oktober 2026. Du kan se flere priser, og hvad eftersynene indeholder, i <a href="/til-varebilen/service/pris-paa-service/">pris på service</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["+4 service, Renault med diesel", "1.795", "kr."],
            ["+4 service, Renault elbil", "1.395", "kr."],
            ["Renault serviceaftale, fra", "189", "kr. pr. md."]
          ],
          note: `Priserne er Hessels. Moms er ikke oplyst. Kilde: ${a(H_REN, "Hessel, Renault service")}, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så kan service og lånebil planlægges efter driften.",
    spoergsmaal: [
      "Model, årgang og kilometerstand.",
      "Kilometer om året og kørselsmønster, fx bykørsel eller fuld last.",
      "Om bilen er leaset, og hvilket leasingselskab der skal godkende arbejdet.",
      "Om der skal bruges en lånebil, og hvilken størrelse.",
      "Indretning, træk og ombygninger, der kan påvirke garantien.",
      "Om service kan udføres på firmaets adresse.",
      "Om bilen er en elvarebil, så arbejdet kan planlægges hos en højvoltstekniker."
    ],
    faq: [
      ["Skal en ny varebil serviceres hos mærkeværkstedet for at bevare garantien?", "Ikke ifølge Ford, der skriver, at service skal følge Fords forskrifter og kunne dokumenteres. Volkswagens garanti forudsætter, at alle eftersyn er udført efter Volkswagens forskrifter. Garantiarbejde udføres på et autoriseret værksted."],
      ["Hvor ofte skal en elvarebil til service?", "Hos Mercedes-Benz hvert år eller hver 40.000 km. Andre producenter oplyser intervallet i servicehæftet."],
      ["Hvor lang garanti er der mod rust?", "Ford og Volkswagen giver 12 år mod gennemtæring indefra. Hos Ford er Bronco og Transit City begrænset til 10 år."],
      ["Hvem bestemmer værkstedet, når bilen er leaset?", "Leasingselskabet i aftalen. Nordania kræver autoriserede mærkeværksteder og forhåndsgodkendelse over 1.500 kr."],
      ["Får jeg en lånebil, når varebilen er til service?", "Det afhænger af værkstedet og aftalen. Ford Pro Service stiller en erstatningsbil, hvis bilen ikke bliver færdig samme dag. Ayvens leverer erstatningsbil, hvis den er med i kontrakten."],
      ["Hvornår skal varebilen til syn?", "Det står i Håndbogen: <a href=\"/haandbogen/syn-af-varebil/\">syn af varebil</a>."],
      ["Hvad betyder \"olieskift påkrævet\" på en Ford?", "Det betyder, at olien skal skiftes inden for 1.600 km eller 1 måned. Fords Oil-Life-monitor beregner intervallet ud fra brugen, og forhandleren nulstiller den efter skiftet."],
      ["Hvor hurtigt kan en varebil komme på værksted?", "Det afhænger af værkstedet. Hessels Renault Pro+-centre lover diagnose inden for 1 time og plads til serviceeftersyn inden for 8 timer uden tidsbestilling."],
      ["Følger garantien med, hvis varebilen bliver solgt?", "Ja, hos Ford og Volkswagen. Ford skriver, at garantien følger bilen og ikke ejeren, og Volkswagens garantibestemmelser lader den nye køber overtage garantien."]
    ],
    kilder: [
      { navn: "Mercedes-Benz Vans: Service på elektriske varebiler", url: MB_EL, dato: "2026-10-04" },
      { navn: "Toyota: Tryghed med Toyota (fabriksgaranti og Toyota Relax, erhvervsbiler)", url: TOYOTA, dato: "2026-10-07" },
      { navn: "Ford: Serviceintervaller og Intelligent Oil-Life-monitor", url: FORD_INT, dato: "2026-10-07" },
      { navn: "Ford: Garanti på nye Ford varebiler (Ford Protect og fabriksgaranti)", url: FORD_G, dato: "2026-10-07" },
      { navn: "Volkswagen: Garantibestemmelser for erhvervsbiler fra modelår 2020 (sept. 2026)", url: VW_G, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Bilservice og eftersyn (MobiloVan)", url: MB_VM, dato: "2026-10-04" },
      { navn: "Mercedes-Benz Vans: ServiceCare serviceaftaler til varebiler", url: MB_SC, dato: "2026-10-04" },
      { navn: "Mercedes-Benz Vans: Varebilsservice (ServiceCare op til otte år/300.000 km, Mobile Service)", url: MB_VS, dato: "2026-10-04" },
      { navn: "Nordania: Forhåndsgodkendelse af service og reparation", url: NORD, dato: "2026-10-07" },
      { navn: "Ford: Ford Pro Service til erhvervsbiler", url: FORD_PRO, dato: "2026-10-07" },
      { navn: "EU: Kommissionens forordning (EU) 2023/822 (forlængelse til 31. maj 2028)", url: R822, dato: "2026-10-07" },
      { navn: "EU: Ændring af de supplerende retningslinjer for motorkøretøjer (2023/C 133 I/01)", url: RETN23, dato: "2026-10-07" },
      { navn: "Hessel: Renault Pro+ erhvervscenter", url: H_PRO, dato: "2026-10-07" },
      { navn: "Hessel: Mercedes-Benz Van ProCenter", url: H_VAN, dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: Service", url: VW_ERHV, dato: "2026-10-07" },
      { navn: "Volkswagen: Service 5+", url: VW_5, dato: "2026-10-07" },
      { navn: "Volkswagen: Prismatch og servicefordele", url: VW_PM, dato: "2026-10-07" },
      { navn: "Volkswagen: Serviceabonnementer", url: VW_ABO, dato: "2026-10-07" },
      { navn: "Volkswagen: Service på elbil", url: VW_EL, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Mobile Service", url: MB_MOB, dato: "2026-10-04" },
      { navn: "Mercedes-Benz Vans: Intelligent bilstyring", url: MB_CTRL, dato: "2026-10-04" },
      { navn: "Hessel: Renault +4 service og serviceaftale", url: H_REN, dato: "2026-10-07" },
      { navn: "Hessel: Service på Mercedes-Benz (Mobile Service)", url: H_MB, dato: "2026-10-07" },
      { navn: "Ayvens: Service og vedligeholdelse", url: AYV_S, dato: "2026-10-07" },
      { navn: "Ayvens: Dæk", url: AYV_D, dato: "2026-10-07" },
      { navn: "Ayvens: Vejhjælp", url: AYV_V, dato: "2026-10-07" },
      { navn: "Dinitrol: Undervognsbehandling, pris og behandling", url: DIN, dato: "2026-10-04" },
      { navn: "Tectyl Danmark: Kompletbehandling", url: TEC_KOMPLET, dato: "2026-10-07" }
    ],
    cta_saetning: "Service og reparation kommer med i tilbuddet, hvis du ønsker det."
  },
  nye_fakta: [
    ["Toyota: fabriksgarantien gælder 3 år/100.000 km uden kilometerbegrænsning det første år.", TOYOTA],
    ["Volkswagen: højvoltsbatteriet på BEV har garanti i 8 år eller 160.000 km, og nettobatterienergiindholdet garanteres over 70 % (afsnit C); ved salg overtager den nye køber garantien (A.8); garantien omfatter ikke erstatningsbil (A.6.3).", VW_G],
    ["Ford: garantien følger bilen og ikke ejeren ved ejerskifte; man kan blive bedt om at dokumentere, at serviceeftersyn er udført korrekt og rettidigt.", FORD_G],
    ["Ford: hvis bilen ikke bruges regelmæssigt, skal den køres over 1.700 o/min i mindst 15 minutter hver uge; undgå at lade motoren køre, når bilen holder stille; motorolien kan kræve udskiftning før de offentliggjorte maksimale serviceintervaller.", FORD_INT],
    ["Hessel Renault Pro+ har altid en erstatningsbil til rådighed, udvidede åbningstider for Pro+ kunder, en fast kontaktperson og faste priser; centrene ligger i Aalborg, Århus og Avedøre.", H_PRO],
    ["Volkswagen ServicePlus-værksteder tilbyder et samlet erhvervsteam og fast kontaktperson, fleksible åbningstider, hente-bringe-service og aftenservice hos nogle af værkstederne; ConnectedFleet er et gratis flådesystem, der løbende viser bilernes sundhedstilstand.", VW_ERHV],
    ["Volkswagen: Service- og Reparationsabonnement og Serviceabonnement kan oprettes, før bilen er 24 måneder; Basisabonnement fra 4 måneder og 3 år ad gangen.", VW_ABO],
    ["Ayvens: sæsondæk kan være en del af aftalen, og det fremgår af leasingkontrakten.", AYV_D],
    ["Ayvens Assistance kan ringes op 24 timer i døgnet, 365 dage om året; erstatningsbil leveres, hvis den er inkluderet i kontrakten.", AYV_V],
    ["Ayvens: bilen kan synes hos FDM og Applus, og fakturaen sendes direkte til Ayvens, når registreringsnummer og leasingselskab oplyses.", AYV_S],
    ["Volkswagen: man kan låne en Volkswagen, mens ens egen er på værksted, og det koster ikke alverden (lånebil mod betaling).", VW_PM],
    ["Toyota vejhjælp: hjælper med det samme, fikser hvad der kan fikses på stedet og bugserer til nærmeste værksted, hvis der er behov.", TOYOTA],
    ["Hessel Van ProCenter har altid et bredt udvalg af erstatningsbiler klar og tilbyder lån og leje af varebiler; van-mekanikere på vagt døgnet rundt; MobiloVan-aftalen giver op til 30 års bekymringsfri kørsel.", H_VAN],
    ["Hessel Mobile Service kører ud i områderne omkring Roskilde og Kastrup og udfører serviceeftersyn, mindre reparationer og softwareopdateringer på kundens adresse.", H_MB],
    ["Volkswagen: skal højvoltsbatteriet åbnes, skal bilen til et servicecenter med service på højspændingssystemer, hvor kun særligt kvalificerede højspændingsteknikere er autoriseret; arbejde uden for højspændingssystemet, fx dækskift, kan udføres af medarbejdere med træning i elbiler.", VW_EL],
    ["Volkswagen: bremserne på en elbil bruges så lidt, at de kan ruste, før de bliver slidt, og skal derfor efterses korrekt ved hvert service.", VW_EL],
    ["Tectyl: varevogne og gulpladebiler får maks. 12 års rustgaranti.", TEC_KOMPLET],
    ["Hessel +4 service til Renault på fire år eller mere omfatter rusteftersyn, 30 punkts kontrol og olieskift inkl. skift af filter og pakning; Renault serviceaftale fra 189 kr./md.", H_REN],
    ["Retningslinjerne fra 2023 nævner køretøjsgenererede data blandt de input, der kan være afgørende for reparation og vedligeholdelse (punkt 62 og 67a).", RETN23]
  ]
};
