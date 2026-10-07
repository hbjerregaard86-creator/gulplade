// Underside /til-varebilen/service/serviceaftale-ved-leasing/ (07-10-2026)
var NORD = `https://www.nordania.dk/erhverv/find-hjaelp/service-skader-reparation/forhaandsgodkendelse`;
var ARVAL = `https://www.arval.dk/erhvervsleasing-smv/full-service-leasing`;
var AYV_S = `https://www.ayvens.com/da-dk/for-foerere/service-og-vedligeholdelse/`;
var AYV_D = `https://www.ayvens.com/da-dk/for-foerere/daek/`;
var AYV_V = `https://www.ayvens.com/da-dk/for-foerere/vejhjaelp/`;
var MB_SC = `https://www.mercedes-benz.dk/vans/services/service-care.html`;
var MB_VS = `https://www.mercedes-benz.dk/vans/services/van-service.html`;
var MB_EL = `https://www.mercedes-benz.dk/vans/services/electric-vehicle-services.html`;
var MB_VM = `https://www.mercedes-benz.dk/vans/services/vehicle-maintenance.html`;
var FORD_G = `https://www.ford.dk/min-bil/garanti/varebiler`;
var FORD_PRO = `https://www.ford.dk/erhverv/ford-pro-service`;
var VW_G = `https://ww4.volkswagen.dk/media/hcdf4g1k/garanti_vwe_100042_sep26_web.pdf`;
var VW_ABO = `https://www.volkswagen.dk/da/vaerksted/service/serviceabonnementer.html`;
var VW_ERHV = `https://www.volkswagen.dk/da/erhvervsbiler/service.html`;
var VW_PM = `https://www.volkswagen.dk/da/vaerksted/service/prismatch.html`;
var VW_AUT = `https://www.volkswagen.dk/da/vaerksted/autoriseret-vaerksted-erhvervsbiler.html`;
var VW_5 = `https://www.volkswagen.dk/da/vaerksted/service/vw-service5plus.html`;
var H_REN = `https://www.hessel.dk/vaerksted-service/ydelser/service/renault`;
var H_FORD = `https://www.hessel.dk/vaerksted-service/ydelser/service/ford`;
var H_MB = `https://www.hessel.dk/vaerksted-service/ydelser/service/mercedes-benz`;
var TOYOTA = `https://www.toyota.dk/erhvervsbiler/professional/toyota-relax`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "service/serviceaftale-ved-leasing",
  side: {
    slug: "serviceaftale-ved-leasing",
    navn: "Serviceaftale ved leasing",
    titel: "Serviceaftale ved leasing af varebil",
    kort: `Hvad en serviceaftale i en leasingkontrakt dækker, hvad der typisk ligger uden for, og hvordan forhåndsgodkendelse fungerer.`,
    beskrivelse: `Serviceaftale ved leasing af varebil: hvad Arval, Ayvens og Nordania dækker, godkendelse over 1.500 kr., dæk, skader og erstatningsbil.`,
    manchet: `Ved operationel leasing ligger service og vedligeholdelse typisk i den månedlige ydelse. Dæk, skader og erstatningsbil er særskilte dele, som enten står i kontrakten eller ikke gør. Her kan du se, hvordan Arval, Ayvens og Nordania beskriver aftalen, og hvordan et værksted får godkendt arbejdet.`,
    visuel: {
      hero: "service",
      kort_fortalt: [
        ["Godkendelse hos Nordania", "over 1.500 kr.", "reparationen godkendes, før den går i gang"],
        ["ServiceCare, Mercedes-Benz", "op til 8 år", "eller 300.000 km"],
        ["Renault serviceaftale, Hessel", "fra 189 kr./md.", "sammensættes efter behov"],
        ["Skader", "Forsikringen", "ligger ikke i serviceaftalen"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Serviceaftalen i leasingydelsen",
        tekst: [
          `Ved operationel leasing ligger service og vedligeholdelse typisk i den månedlige ydelse. Leasingselskabet ejer bilen, og derfor bestemmer det, hvor bilen skal serviceres, og hvilke reparationer der skal godkendes, før værkstedet går i gang.`,
          `Dæk, skader og erstatningsbil er særskilte dele. De står enten i kontrakten, eller også gør de ikke. To tilbud med samme ydelse kan derfor dække forskelligt, og det er kontrakten, der viser forskellen. Forskellen på de to former for leasing står i <a href="/haandbogen/finansiel-og-operationel-leasing/">finansiel og operationel leasing</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Skematisk oversigt over en serviceaftale i leasingydelsen. Service og vedligeholdelse er med, dæk kun med en dækaftale og erstatningsbil kun efter kontrakten. Skader ligger uden for aftalen og går til forsikringen."><text class="tg-fremhaev" x="8" y="18">Serviceaftalen i ydelsen</text><rect class="tg-rum" x="8" y="28" width="262" height="180"/><rect class="tg-modul" x="22" y="44" width="234" height="44"/><text class="tg-modul__tekst" x="34" y="71">SERVICE OG VEDLIGEHOLDELSE</text><rect class="tg-kasse" x="22" y="98" width="234" height="48"/><text class="tg-fremhaev" x="34" y="118">Dæk</text><text x="34" y="136">kun med en dækaftale</text><rect class="tg-kasse" x="22" y="154" width="234" height="48"/><text class="tg-fremhaev" x="34" y="174">Erstatningsbil</text><text x="34" y="192">kun hvis den står i kontrakten</text><text class="tg-lille" x="346" y="88" text-anchor="middle">UDEN FOR AFTALEN</text><rect class="tg-kasse" x="300" y="98" width="92" height="48"/><text class="tg-fremhaev" x="346" y="118" text-anchor="middle">Skader</text><text x="346" y="136" text-anchor="middle">forsikringen</text><line class="tg-skinne-tynd" x1="270" y1="122" x2="300" y2="122"/><text class="tg-lille" x="8" y="228">OPERATIONEL LEASING</text></svg>`,
          tekst: `Skematisk. Hvad serviceaftalen typisk dækker, og hvad der ligger uden for. Kilder: ${a(AYV_D, "Ayvens: Dæk")}, ${a(AYV_V, "Ayvens: Vejhjælp")} og ${a(NORD, "Nordania: Forhåndsgodkendelse")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvad leasingselskaberne skriver",
        tekst: [
          `Arval, Ayvens og Nordania beskriver serviceaftalen hver på sin måde. Arval lægger alle de løbende udgifter ind i ydelsen ved operationel leasing. Ayvens og Nordania beskriver især, hvordan service bookes, og hvilke værksteder der må bruges.`,
          `Hos Ayvens booker føreren service og reparation online og finder de anbefalede værksteder samme sted. Forsikringssager er undtaget fra bookingen. Ayvens har også en hente-bringe-service, som kan koste ekstra. Bilen kan synes hos FDM og Applus, som sender fakturaen direkte til Ayvens, når føreren oplyser registreringsnummeret og leasingselskabet.`
        ],
        kort: [
          ["Arval", "Ved operationel leasing er alle løbende udgifter med, herunder service, forsikring, afgifter og dæk. Arval stiller en lånebil, hvis bilen skal til reparation."],
          ["Ayvens", "Service bookes hos Ayvens’ samarbejdsværksteder, og sæsondæk kan være en del af aftalen. Ayvens har vejhjælp døgnet rundt og leverer en erstatningsbil, hvis den er med i kontrakten."],
          ["Nordania", "Kun autoriserede mærkeværksteder må servicere og reparere Nordanias biler. Reparationer over 1.500 kr. skal forhåndsgodkendes."]
        ],
        efter: [
          `Kilder: ${a(ARVAL, "Arval")}, set den 4. oktober 2026, og ${a(AYV_S, "Ayvens: Service og vedligehold")}, ${a(AYV_D, "Ayvens: Dæk")}, ${a(AYV_V, "Ayvens: Vejhjælp")} og ${a(NORD, "Nordania")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvor de enkelte ydelser typisk ligger",
        tekst: [
          `Nordanias formular til forhåndsgodkendelse spørger både om typen af serviceaftale, om der er en dækaftale, og hvilket forsikringsselskab bilen er forsikret hos. Det er tre særskilte aftaler, og oversigten bygger på den opdeling.`,
          `Vejhjælp og erstatningsbil kan komme fra leasingselskabet, men også fra producenten, når bilen bliver serviceret på et autoriseret værksted. Derfor kan bilen være dækket af to ordninger med hver sine betingelser.`
        ],
        tabel: {
          kolonner: ["Ydelse", "Ligger typisk i", "Eksempel"],
          raekker: [
            ["Serviceeftersyn", "Serviceaftalen", "Olieservice, serviceeftersyn, filtre, drivrem"],
            ["Slidreparationer", "Serviceaftalen, med godkendelse", "Bremseklodser og -skiver efter målt slid"],
            ["Dæk", "En særskilt dækaftale", "Ayvens: sæsondæk kan være med"],
            ["Skader", "Forsikringen", "Nordania: faktura ved modpartskader eller over selvrisiko sendes til forsikringsselskabet"],
            ["Vejhjælp", "Leasingselskabet eller producenten", "Ayvens Assistance døgnet rundt"],
            ["Erstatningsbil", "Kontrakten", "Ayvens: hvis den er med i kontrakten"]
          ],
          note: `Kilder: ${a(NORD, "Nordanias værkstedsrekvisition")}, ${a(AYV_D, "Ayvens")} og ${a(AYV_V, "Ayvens vejhjælp")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forhåndsgodkendelse",
        tekst: [
          `En forhåndsgodkendelse er leasingselskabets accept af service eller vedligeholdelse, før værkstedet går i gang. Hos Nordania skal en reparation forhåndsgodkendes, når den koster mere end 1.500 kr. På lastbiler er grænsen 5.000 kr., og værksteder med en værkstedsaftale med Nordania kan have en anden grænse.`,
          `Nordania godkender kun en reparation, hvis brugeren har udfyldt og afleveret en værkstedsrekvisition eller har booket værkstedsbesøget i Nordania Bil App. Godkendelsen gives ikke over telefonen. En ansøgning, der først bliver oprettet efter reparationen, bliver som hovedregel afvist.`,
          `Finder værkstedet en fejl til mere end 1.500 kr. under et eftersyn, skal godkendelsen derfor være på plads, før reparationen går i gang. Ellers står reparationen stille, indtil leasingselskabet har svaret.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Biler, Nordania", 1500, "kr."],
            ["Lastbiler, Nordania", 5000, "kr."]
          ],
          note: `Over beløbet skal reparationen godkendes, før den går i gang. Værksteder med en værkstedsaftale kan have en anden grænse. Kilde: ${a(NORD, "Nordania, Forhåndsgodkendelse")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan bliver arbejdet godkendt",
        tekst: [
          `Forløbet er det samme, uanset om det gælder et almindeligt eftersyn eller en reparation, der dukker op undervejs. Værkstedet prissætter hver post på leasingselskabets formular, og leasingselskabet godkender eller afviser, før arbejdet går i gang.`,
          `Skader følger et andet spor, fordi de hører under forsikringen. Hos Nordania må kun autoriserede mærkeværksteder lave arbejdet, mens Ayvens henviser til sine samarbejdsværksteder.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Booking", "Du booker tid hos leasingselskabets samarbejdsværksted eller et autoriseret mærkeværksted."],
            ["Rekvisition", "Hos Nordania prissætter værkstedet hver post på formularen."],
            ["Godkendelse", "Hos Nordania skal arbejde over 1.500 kr. godkendes, før det går i gang."],
            ["Skader", "Skader går til forsikringen, ikke til serviceaftalen."]
          ]
        }
      },
      {
        overskrift: "Det står på værkstedsrekvisitionen",
        tekst: [
          `Nordanias formular viser, hvilke poster værkstedet prissætter. Priserne skrives uden moms, og til sidst angiver værkstedet en samlet pris for alt arbejdet. Formularen spørger også om kilometerstand, type af serviceaftale, dækaftale, forsikringsselskab og selvrisiko.`,
          `Listen viser, hvor bredt en serviceaftale kan række. Værkstedet kan vedhæfte filer, fx billeder i JPG eller PNG, på op til 30 MB i alt og højst 7 MB pr. fil.`
        ],
        punkter: [
          `<strong>Service.</strong> Formularen har poster for olieservice, serviceeftersyn, gearolie, brændstoffilter, drivrem, opretholdelse af rustgaranti og karosseriinspektion.`,
          `<strong>Bremser.</strong> Klodser og skiver for og bag står med faktisk mål og fabrikkens minimumsmål, og rensning af bremserne og bremsevæske har egne poster.`,
          `<strong>Motor.</strong> Værkstedet kan prissætte partikelfilter, regenerering af partikelfilteret, brændstofdyse, tandrem, vandpumpe og EGR-ventil.`,
          `<strong>Undervogn.</strong> Bærekugler, styrekugler, krængningsstabilisator og 4-hjulsudmåling har hver sin post.`,
          `<strong>El-anlæg.</strong> Udlæsning af fejlkoder, startbatteri og pærer står for sig.`,
          `<strong>Dæk.</strong> Formularen dækker komplette vinterhjul, udskiftning af dæk og fælge, beskadigede dæk og lapning.`,
          `<strong>Ruder.</strong> Forrude og reparation af stenslag står under skader.`,
          `<strong>Erstatningsbil.</strong> Den kan også bestilles ved en skade, og værkstedet prissætter forsikring, selvrisikoafdækning, brændstof og overkørte kilometer.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Varebil set fra siden med de dele, som værkstedsrekvisitionen har poster for: motor, ruder, karrosseri, bremser og dæk."><path class="tg-rum" d="M30,175 V120 L72,78 H370 V175 Z"/><path class="tg-profil" d="M40,118 L74,86 H110 V118 Z"/><circle class="tg-profil" cx="95" cy="180" r="22"/><circle class="tg-profil" cx="305" cy="180" r="22"/><line class="tg-gulvlinje" x1="10" y1="202" x2="390" y2="202"/><g class="tg-call"><line x1="50" y1="145" x2="40" y2="44"/><circle cx="50" cy="145" r="3"/><text class="tg-call__navn" x="10" y="22">Service og motor</text><text class="tg-call__under" x="10" y="36">olie, filtre, partikelfilter</text></g><g class="tg-call"><line x1="72" y1="100" x2="196" y2="44"/><circle cx="72" cy="100" r="3"/><text class="tg-call__navn" x="196" y="22">Ruder</text><text class="tg-call__under" x="196" y="36">forrude, stenslag</text></g><g class="tg-call"><line x1="330" y1="120" x2="330" y2="44"/><circle cx="330" cy="120" r="3"/><text class="tg-call__navn" x="305" y="22">Karrosseri</text><text class="tg-call__under" x="305" y="36">rustgaranti</text></g><g class="tg-call"><line x1="95" y1="180" x2="60" y2="222"/><circle cx="95" cy="180" r="3"/><text class="tg-call__navn" x="10" y="236">Bremser</text><text class="tg-call__under" x="10" y="250">klodser og skiver</text></g><g class="tg-call"><line x1="305" y1="196" x2="200" y2="222"/><circle cx="305" cy="196" r="3"/><text class="tg-call__navn" x="160" y="236">Dæk</text><text class="tg-call__under" x="160" y="250">skift og lapning</text></g></svg>`,
          tekst: `Skematisk. De dele af bilen, som Nordanias værkstedsrekvisition har poster for. Erstatningsbilen er også en post på formularen. Kilde: ${a(NORD, "Nordania")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bremser og dæk bliver målt",
        tekst: [
          `Slidreparationer hører typisk under serviceaftalen, men leasingselskabet vil kunne se, at delene faktisk er slidt. Når bremseklodser eller bremseskiver skal skiftes, skriver værkstedet derfor både det faktiske mål og fabrikkens minimumsmål i millimeter på Nordanias formular. Det gælder for og bag hver for sig.`,
          `Dækkene følger samme princip. Skal dæk og fælge skiftes, skriver værkstedet, hvor mange millimeter mønster der er tilbage på hvert af de fire hjul. Dækmærke, størrelse og en eventuel rabat på nye dæk skal også stå på formularen. Reglerne for mønsterdybde står i <a href="/til-varebilen/vinterhjul/daektryk-og-moensterdybde/">dæktryk og mønsterdybde</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Skematisk snit gennem en bremseklods og en bremseskive. For begge dele skriver værkstedet det faktiske mål i millimeter og fabrikkens minimumsmål, som er vist med stiplede linjer."><defs><marker id="pil-serviceaftale-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="20" y="18">Bremseklods</text><rect class="tg-hylde" x="30" y="34" width="14" height="140"/><rect class="tg-modul" x="44" y="34" width="46" height="140"/><line class="tg-skinne" x1="58" y1="28" x2="58" y2="180"/><g class="tg-call"><line x1="58" y1="70" x2="120" y2="70"/><circle cx="58" cy="70" r="3"/><text class="tg-call__navn" x="124" y="66">Minimumsmål</text><text class="tg-call__under" x="124" y="80">fra fabrikken</text></g><g class="tg-call"><line x1="37" y1="150" x2="120" y2="150"/><circle cx="37" cy="150" r="3"/><text class="tg-call__navn" x="124" y="146">Bagplade</text><text class="tg-call__under" x="124" y="160">belægningen sidder på</text></g><g class="tg-maal"><line x1="44" y1="196" x2="90" y2="196" marker-start="url(#pil-serviceaftale-2)" marker-end="url(#pil-serviceaftale-2)"/><text x="20" y="216">faktisk mål i mm</text></g><text class="tg-fremhaev" x="240" y="18">Bremseskive</text><rect class="tg-profil" x="260" y="34" width="34" height="140"/><line class="tg-skinne-tynd" x1="266" y1="34" x2="266" y2="174"/><line class="tg-skinne-tynd" x1="288" y1="34" x2="288" y2="174"/><g class="tg-call"><line x1="288" y1="100" x2="300" y2="100"/><circle cx="288" cy="100" r="3"/><text class="tg-call__navn" x="304" y="96">Minimumsmål</text><text class="tg-call__under" x="304" y="110">fra fabrikken</text></g><g class="tg-maal"><line x1="260" y1="196" x2="294" y2="196" marker-start="url(#pil-serviceaftale-2)" marker-end="url(#pil-serviceaftale-2)"/><text x="236" y="216">faktisk mål i mm</text></g><text class="tg-lille" x="20" y="236">BEGGE MÅL SKAL STÅ PÅ FORMULAREN, FOR OG BAG</text></svg>`,
          tekst: `Skematisk. Nordanias formular kræver begge mål, når klodser eller skiver skal skiftes. Kilde: ${a(NORD, "Nordania, Forhåndsgodkendelse")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skader og forsikringen",
        tekst: [
          `Skader ligger uden for serviceaftalen. På Nordanias formular står der, at fakturaen ved modpartsskader eller skader over selvrisikoen skal sendes til forsikringsselskabet. Ayvens undtager forsikringssager fra sin online booking af værksted.`,
          `Grænsen mellem slid og skade afgør altså, hvem der får regningen. En bremseskive, der er slidt ned til minimumsmålet, er service. En bule efter en påkørsel er en skade. Formularen har dog en afdeling for skader med poster for forrude og reparation af stenslag.`,
          `Hvad kaskoen dækker, står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>, og beløbene står i <a href="/til-varebilen/forsikring/selvrisiko/">selvrisiko</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 216" role="img" aria-label="Skematisk forløb. Service og slid hører under serviceaftalen, hvor Nordania skal godkende arbejde over 1.500 kr. Ved en skade med modpart eller over selvrisikoen sendes fakturaen til forsikringsselskabet."><defs><marker id="pil-serviceaftale-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="100" y="6" width="200" height="34"/><text x="200" y="28" text-anchor="middle">Bilen skal på værksted</text><g class="tg-maal"><line x1="150" y1="40" x2="106" y2="76" marker-end="url(#pil-serviceaftale-3)"/><line x1="250" y1="40" x2="294" y2="76" marker-end="url(#pil-serviceaftale-3)"/><line x1="100" y1="124" x2="100" y2="150" marker-end="url(#pil-serviceaftale-3)"/><line x1="300" y1="124" x2="300" y2="150" marker-end="url(#pil-serviceaftale-3)"/></g><rect class="tg-modul" x="8" y="80" width="184" height="44"/><text class="tg-modul__tekst" x="100" y="98" text-anchor="middle">SERVICE OG SLID</text><text x="100" y="116" text-anchor="middle">fx bremser og olie</text><rect class="tg-kasse" x="208" y="80" width="184" height="44"/><text class="tg-fremhaev" x="300" y="98" text-anchor="middle">Skade med modpart</text><text x="300" y="116" text-anchor="middle">eller over selvrisiko</text><rect class="tg-kasse" x="8" y="154" width="184" height="44"/><text x="100" y="172" text-anchor="middle">Serviceaftalen</text><text x="100" y="190" text-anchor="middle">godkendes over 1.500 kr.</text><rect class="tg-kasse" x="208" y="154" width="184" height="44"/><text x="300" y="172" text-anchor="middle">Fakturaen sendes til</text><text x="300" y="190" text-anchor="middle">forsikringsselskabet</text><text class="tg-lille" x="200" y="212" text-anchor="middle">EKSEMPEL FRA NORDANIA</text></svg>`,
          tekst: `Skematisk. Hvem der får regningen hos Nordania. Kilde: ${a(NORD, "Nordania, Forhåndsgodkendelse")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det ligger typisk uden for",
        tekst: [
          `Fire ting går igen i leasingselskabernes og producenternes beskrivelser som noget, der ikke automatisk følger med en serviceaftale. Det er skader, dæk, erstatningsbil og udstyr, der er monteret efter levering fra fabrikken.`
        ],
        punkter: [
          `<strong>Skader.</strong> De går til forsikringen. Se <a href="/til-varebilen/forsikring/">forsikring af varebilen</a>.`,
          `<strong>Dæk.</strong> De er kun med, hvis der er en dækaftale.`,
          `<strong>Erstatningsbil.</strong> Den er kun med, hvis den står i kontrakten.`,
          `<strong>Indretning og ombygning.</strong> Ford Protect dækker ikke tilbehør og ombygninger, der er monteret efter levering fra fabrikken eller ikke er godkendt af Ford. Volkswagens garanti dækker ikke uoriginale opbygninger og tilbehør, som fabrikken ikke har monteret eller leveret.`
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilder: ${a(NORD, "Nordania")}, ${a(AYV_V, "Ayvens")}, ${a(FORD_G, "Ford")} og ${a(VW_G, "Volkswagen")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Dæk i aftalen",
        tekst: [
          `Hos Ayvens kan sæsondæk til sommer og vinter være en del af aftalen, og det står i leasingkontrakten. Er sæsondæk med, og bliver bilen leveret mellem den 15. oktober og den 31. marts, kommer den på vinterdæk, der som standard sidder på stålfælge uden hjulkapsler. Dækkene skiftes hos Dækpartner eller Superdæk.`,
          `Nordanias formular har en særskilt post for komplette vinterhjul med fælgtype, dækmærke, dækstørrelse, dæktryksensorer og hjulbolte. Dæk og opbevaring uden for en leasingaftale står i <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel</a> og <a href="/til-varebilen/vinterhjul/">vinterhjul</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Skematisk årsoversigt. Fra den 15. oktober til den 31. marts leverer Ayvens bilen på vinterdæk på stålfælge uden hjulkapsler, når sæsondæk er med i kontrakten."><rect class="tg-kasse" x="20" y="50" width="360" height="30"/><line class="tg-skillevaeg" x1="50" y1="50" x2="50" y2="80"/><line class="tg-skillevaeg" x1="80" y1="50" x2="80" y2="80"/><line class="tg-skillevaeg" x1="110" y1="50" x2="110" y2="80"/><line class="tg-skillevaeg" x1="140" y1="50" x2="140" y2="80"/><line class="tg-skillevaeg" x1="170" y1="50" x2="170" y2="80"/><line class="tg-skillevaeg" x1="200" y1="50" x2="200" y2="80"/><line class="tg-skillevaeg" x1="230" y1="50" x2="230" y2="80"/><line class="tg-skillevaeg" x1="260" y1="50" x2="260" y2="80"/><line class="tg-skillevaeg" x1="290" y1="50" x2="290" y2="80"/><line class="tg-skillevaeg" x1="320" y1="50" x2="320" y2="80"/><line class="tg-skillevaeg" x1="350" y1="50" x2="350" y2="80"/><rect class="tg-modul" x="20" y="50" width="90" height="30"/><rect class="tg-modul" x="305" y="50" width="75" height="30"/><text class="tg-modul__tekst" x="65" y="69" text-anchor="middle">VINTERDÆK</text><text class="tg-modul__tekst" x="342" y="69" text-anchor="middle">VINTERDÆK</text><text class="tg-fremhaev" x="110" y="40" text-anchor="middle">31. marts</text><text class="tg-fremhaev" x="305" y="40" text-anchor="middle">15. oktober</text><text class="tg-lille" x="35" y="96" text-anchor="middle">J</text><text class="tg-lille" x="65" y="96" text-anchor="middle">F</text><text class="tg-lille" x="95" y="96" text-anchor="middle">M</text><text class="tg-lille" x="125" y="96" text-anchor="middle">A</text><text class="tg-lille" x="155" y="96" text-anchor="middle">M</text><text class="tg-lille" x="185" y="96" text-anchor="middle">J</text><text class="tg-lille" x="215" y="96" text-anchor="middle">J</text><text class="tg-lille" x="245" y="96" text-anchor="middle">A</text><text class="tg-lille" x="275" y="96" text-anchor="middle">S</text><text class="tg-lille" x="305" y="96" text-anchor="middle">O</text><text class="tg-lille" x="335" y="96" text-anchor="middle">N</text><text class="tg-lille" x="365" y="96" text-anchor="middle">D</text><text x="20" y="118">Leveres bilen i den fremhævede periode,</text><text x="20" y="134">kommer den på vinterdæk på stålfælge.</text></svg>`,
          tekst: `Skematisk. Gælder hos Ayvens, når sæsondæk er med i kontrakten. Fælgene leveres som standard uden hjulkapsler. Kilde: ${a(AYV_D, "Ayvens: Dæk")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Vejhjælp og erstatningsbil",
        tekst: [
          `Ayvens Assistance kan ringes op 24 timer i døgnet, 365 dage om året, og hjælper både i Danmark og i udlandet. I udlandet tilkaldes hjælpen via SOS Rødt Kort. Vejhjælpen bringer fører, passagerer og bagage til et sikkert sted, og en erstatningsbil kommer kun, hvis den er med i kontrakten. Arval skriver, at de stiller en lånebil, hvis bilen skal til reparation.`,
          `Står erstatningsbilen på Nordanias rekvisition, prissætter værkstedet også forsikring, selvrisikoafdækning, brændstof og overkørte kilometer. Prisen for en erstatningsbil kan altså bestå af flere poster end selve lejen.`,
          `Producentens garanti giver ikke i sig selv ret til en erstatningsbil. Volkswagens garantibestemmelser undtager udtrykkeligt krav om, at der stilles en erstatningsbil til rådighed. Mere i <a href="/til-varebilen/service/erstatningsbil/">erstatningsbil og lånebil</a> og <a href="/til-varebilen/forsikring/vejhjaelp-til-varebil/">vejhjælp til varebil</a>.`
        ]
      },
      {
        overskrift: "Producentens serviceaftale",
        tekst: [
          `Til en købt bil sælger producenterne egne aftaler, og de kan også bruges, når service ikke er med i en leasingaftale. Mercedes-Benz ServiceCare findes som pakker til vedligeholdelse, udvidet garanti og fuld servicedækning i op til 8 år eller 300.000 km med separate prislister for diesel og el.`,
          `Elektriske Mercedes-Benz varebiler har en integreret servicepakke som standard. Den dækker de første fire eftersyn inden for fire år eller 160.000 km.`,
          `Hessel beskriver to serviceaftaler til Mercedes-Benz. ServiceCare samler den planlagte service i én fast månedlig ydelse, og prisen er låst i aftaleperioden. CompleteCare samler service, reparationer og sliddele og skal tegnes, inden bilen er et år gammel.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["ServiceCare, op til", 8, "år eller 300.000 km"],
            ["Servicepakke til elvarebiler, de første", 4, "eftersyn"],
            ["Servicepakken gælder i", 4, "år eller 160.000 km"]
          ],
          note: `Tallene gælder Mercedes-Benz varebiler. Servicepakken er standard på de elektriske modeller. Kilder: ${a(MB_SC, "Mercedes-Benz ServiceCare")}, ${a(MB_VS, "Mercedes-Benz varebilsservice")} og ${a(MB_EL, "Mercedes-Benz service på elektriske varebiler")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde til CompleteCare: ${a(H_MB, "Hessel, Mercedes-Benz")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Volkswagens tre abonnementer",
        tekst: [
          `Volkswagen Erhvervsbiler har tre abonnementer, og bilens alder afgør, hvilke du kan vælge. Service- og Reparationsabonnementet og Serviceabonnementet skal oprettes, før bilen er 24 måneder gammel regnet fra første indregistrering. Service- og Reparationsabonnementet kræver desuden, at producentens serviceplan er fulgt. Basisabonnementet dækker fastsatte services på en brugt bil og kan oprettes, når bilen er mindst 4 måneder gammel.`,
          `Volkswagen kalder Service- og Reparationsabonnementet den store pakke, der dækker al service og de reparationer, bilen har brug for. Vejhjælp døgnet rundt er en fast del af alle tre abonnementer. De kan bruges på alle Volkswagen Erhvervscentre i landet, og der er højst 25 km til nærmeste værksted, bortset fra få steder i yderområderne.`,
          `Sælger virksomheden bilen, mens abonnementet løber, kan den nye ejer overtage det. Volkswagen får ikke automatisk besked om salget, så virksomheden skal selv opsige abonnementet eller melde ejerskiftet. Er abonnementet tegnet mere end 30 dage efter første registrering, kan det tidligst opsiges fem måneder efter start med en måneds varsel.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Ny bil", "Service- og Reparationsabonnementet og Serviceabonnementet kan oprettes."],
            ["4 måneder", "Basisabonnementet kan oprettes fra nu."],
            ["24 måneder", "Sidste frist for Service- og Reparationsabonnementet og Serviceabonnementet."],
            ["3 år ad gangen", "Så længe løber et Basisabonnement, før det skal fornyes."]
          ],
          note: `Alderen regnes fra bilens første indregistrering. Kilder: ${a(VW_ABO, "Volkswagen, Serviceabonnementer")} og ${a(VW_ERHV, "Volkswagen Erhvervsbiler")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forhandlernes egne aftaler",
        tekst: [
          `Forhandlerne sælger både serviceaftaler og rabatordninger. Hessel sælger en serviceaftale til Renault fra 189 kr. om måneden. Hessel skriver, at aftalen giver små faste betalinger, sikrer mod prisstigninger og kan sammensættes efter behov.`,
          `FordPlus og Hessel Plus til Renault koster 649 kr. om året. Begge giver 15 % rabat på værkstedet, 12 gratis bilvaske og 2 gratis hjulskift om året og 18 øre i rabat pr. liter brændstof. Mercedes-medlemskaberne Business og Complete koster 179 og 219 kr. om måneden. Alle priser er fra oktober 2026.`
        ],
        tabel: {
          kolonner: ["Aftale", "Hos", "Pris", "Indhold"],
          raekker: [
            ["Renault serviceaftale", "Hessel", "Fra 189 kr./md.", "Faste betalinger, sammensættes efter behov"],
            ["FordPlus", "Hessel", "649 kr./år", "15 % rabat på værkstedet, 2 hjulskift og 12 bilvaske om året"],
            ["Hessel Plus, Renault", "Hessel", "649 kr./år", "15 % rabat på værkstedet, 2 hjulskift og 12 bilvaske om året"],
            ["Mercedes-Benz Business", "Hessel", "179 kr./md.", "Medlemskab med fordele"],
            ["Mercedes-Benz Complete", "Hessel", "219 kr./md.", "Medlemskab med flere fordele"]
          ],
          note: `Kilder: ${a(H_REN, "Hessel, Renault")}, ${a(H_FORD, "Hessel, Ford")} og ${a(H_MB, "Hessel, Mercedes-Benz")}, set den 7. oktober 2026. Moms er ikke oplyst.`,
          visning: "kort"
        },
        efter: [
          `FordPlus, Hessel Plus og Mercedes-medlemskaberne er rabatordninger, ikke serviceaftaler. Hessel skifter hjul på en Mercedes-Benz for 400 kr. og opbevarer dem for 495 kr. pr. sæson.`
        ]
      },
      {
        overskrift: "Vejhjælp, der følger servicen",
        tekst: [
          `Flere producenter knytter vejhjælpen til servicen på et autoriseret værksted. Volkswagen giver gratis vejhjælp i hele Europa, døgnet rundt og alle årets dage, så længe bilens seneste store serviceeftersyn er lavet på et autoriseret Volkswagen-værksted.`,
          `Ford giver op til 24 måneders europæisk vejhjælp, hver gang varebilen bliver serviceret på et autoriseret Ford-værksted, og varigheden følger bilens serviceinterval. Mercedes-Benz MobiloVan kræver service til tiden hos en autoriseret partner. På en Volkswagen, der er 5 år eller ældre, giver en Service 5+ vejhjælp indtil næste eftersyn.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Mærke", "Vejhjælp", "Betingelse"],
          raekker: [
            ["Volkswagen", "Gratis i hele Europa", "Seneste store serviceeftersyn er lavet på et autoriseret Volkswagen-værksted"],
            ["Ford", "Op til 24 måneder", "Gives ved hver service"],
            ["Mercedes-Benz", "MobiloVan", "Service til tiden hos en autoriseret partner"]
          ],
          note: `Kilder: ${a(VW_PM, "Volkswagen")}, ${a(VW_AUT, "Volkswagen, autoriseret værksted")}, ${a(VW_5, "Volkswagen Service 5+")} og ${a(FORD_PRO, "Ford")}, set den 7. oktober 2026, og ${a(MB_VM, "Mercedes-Benz")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Garanti og serviceaftale",
        tekst: [
          `Garantien dækker materiale- og fabrikationsfejl, ikke slid. Ford Protect udelukker almindelig slitage og sliddele, skader fra uheld, forkert brug eller mangelfuld vedligeholdelse, lak- og karrosseriskader, der dækkes af andre garantibestemmelser, og vejhjælp. Ford skriver også, at garantien ikke dækker stenslag, ridser, buler og lignende brugsskader.`,
          `Volkswagens garanti udelukker skader fra for stort læs, skader udefra som ulykke, hagl og oversvømmelse og fejl, der skyldes, at en softwareopdatering ikke er installeret. Hos både Ford og Volkswagen følger garantien bilen, hvis den bliver solgt, inden garantien udløber.`,
          `Garantien og serviceaftalen supplerer altså hinanden. Serviceaftalen betaler eftersyn og slid, garantien betaler fabriksfejl, og forsikringen betaler skader.`
        ],
        efter: [
          `Kilder: ${a(FORD_G, "Ford: Garanti på varebiler")} og ${a(VW_G, "Volkswagen: Garantibestemmelser for erhvervsbiler")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Før aftalen skrives under",
        tekst: [
          `Håndbogen gennemgår de poster, der ofte mangler i et tilbud: <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">det står ikke i leasingtilbuddet</a>. Dæk og dækhotel er beskrevet under <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel</a>.`,
          `Kilometergrænsen i leasingaftalen hænger sammen med servicen, fordi producenterne angiver intervallerne i både tid og kilometer. Toyota nævner fx 2 år eller 30.000 km på en Proace, alt efter hvad der kommer først. Mere om grænsen i <a href="/haandbogen/kilometergraensen-paa-leasingaftalen/">kilometergrænsen på leasingaftalen</a>.`
        ],
        efter: [
          `Kilde: ${a(TOYOTA, "Toyota: Tryghed med Toyota")}, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leasingselskabet svare på",
    spoergsmaal_manchet: "Så står det klart, hvad ydelsen dækker.",
    spoergsmaal: [
      "Er service og slidreparationer med, og hvilke sliddele?",
      "Er dæk og skift med, og hvor mange sæt?",
      "Er vejhjælp og erstatningsbil med, og hvilken størrelse bil?",
      "Hvilke værksteder må bruges, og hvad er beløbsgrænsen for godkendelse?",
      "Hvem skal værkstedet kontakte for at få et arbejde godkendt?",
      "Er hente-bringe-service med, eller koster den ekstra?",
      "Hvad gælder for indretning og ombygning?"
    ],
    faq: [
      ["Hvad dækker en serviceaftale ved leasing?", "Typisk serviceeftersyn og vedligeholdelse efter producentens program. Arval skriver, at operationel leasing omfatter service, forsikring, afgifter og dæk. Indholdet står i den enkelte kontrakt."],
      ["Er dæk med i serviceaftalen?", "Kun hvis der er en dækaftale. Ayvens skriver, at sæsondæk kan være en del af aftalen, og at det står i leasingkontrakten."],
      ["Er skader dækket af serviceaftalen?", "Nej. Skader går til forsikringen. Nordania beder værkstedet sende faktura ved modpartskader eller over selvrisiko til forsikringsselskabet."],
      ["Skal værkstedet have godkendelse til en reparation?", "Hos Nordania ved reparationer over 1.500 kr. Godkendelsen gives ikke telefonisk, og ansøgninger efter endt reparation bliver som hovedregel afvist."],
      ["Får jeg erstatningsbil med en serviceaftale?", "Kun hvis den står i kontrakten, skriver Ayvens. Arval skriver, at de stiller en lånebil ved reparation."],
      ["Kan man tegne serviceabonnement på en brugt VW varebil?", "Ja. Volkswagens Basisabonnement kan oprettes, når bilen er mindst 4 måneder gammel, og løber 3 år ad gangen."],
      ["Hvad koster en serviceaftale til en Renault varebil?", "Hessel oplyser en pris fra 189 kr. om måneden (oktober 2026). Indholdet sammensættes efter behov."],
      ["Hvorfor skal værkstedet skrive bremsernes mål?", "Nordania vil se, at delene er slidt. Værkstedet skriver derfor både det faktiske mål og fabrikkens minimumsmål i millimeter, når klodser eller skiver skal skiftes."]
    ],
    kilder: [
      { navn: "Arval: Operationel leasing af firmabil", url: ARVAL, dato: "2026-10-04" },
      { navn: "Ayvens: Service og vedligeholdelse", url: AYV_S, dato: "2026-10-07" },
      { navn: "Ayvens: Dæk", url: AYV_D, dato: "2026-10-07" },
      { navn: "Ayvens: Vejhjælp", url: AYV_V, dato: "2026-10-07" },
      { navn: "Nordania: Forhåndsgodkendelse af service og reparation", url: NORD, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: ServiceCare serviceaftaler til varebiler", url: MB_SC, dato: "2026-10-04" },
      { navn: "Mercedes-Benz Vans: Varebilsservice (ServiceCare op til otte år/300.000 km, Mobile Service)", url: MB_VS, dato: "2026-10-04" },
      { navn: "Mercedes-Benz Vans: Service på elektriske varebiler", url: MB_EL, dato: "2026-10-04" },
      { navn: "Ford: Garanti på nye Ford varebiler (Ford Protect og fabriksgaranti)", url: FORD_G, dato: "2026-10-07" },
      { navn: "Volkswagen: Garantibestemmelser for erhvervsbiler fra modelår 2020 (sept. 2026)", url: VW_G, dato: "2026-10-07" },
      { navn: "Volkswagen: Serviceabonnementer", url: VW_ABO, dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: Service", url: VW_ERHV, dato: "2026-10-07" },
      { navn: "Hessel: Renault +4 service og serviceaftale", url: H_REN, dato: "2026-10-07" },
      { navn: "Hessel: Ford +4 serviceeftersyn og FordPlus", url: H_FORD, dato: "2026-10-07" },
      { navn: "Hessel: Service på Mercedes-Benz (serviceaftaler, hjulskifte, opbevaring)", url: H_MB, dato: "2026-10-07" },
      { navn: "Volkswagen: Prismatch og servicefordele", url: VW_PM, dato: "2026-10-07" },
      { navn: "Volkswagen: Autoriseret værksted til erhvervsbiler", url: VW_AUT, dato: "2026-10-07" },
      { navn: "Volkswagen: Service 5+", url: VW_5, dato: "2026-10-07" },
      { navn: "Ford: Ford Pro Service", url: FORD_PRO, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Bilservice og eftersyn", url: MB_VM, dato: "2026-10-04" },
      { navn: "Toyota: Tryghed med Toyota (fabriksgaranti og Toyota Relax, erhvervsbiler)", url: TOYOTA, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Nordanias formular til forhåndsgodkendelse spørger om serviceaftaletype, serviceaftalens udløb, dækaftale, forsikringsselskab, selvrisiko og kilometerstand.", NORD],
    ["Nordania: en forhåndsgodkendelse er Nordanias accept af service eller vedligeholdelse på et køretøj, der er leaset hos Nordania.", NORD],
    ["Nordanias formular: priser angives ekskl. moms, og værkstedet angiver en totalpris ekskl. moms for alt arbejde.", NORD],
    ["Nordanias formular har poster for tandrem, vandpumpe og EGR-ventil (motor), bærekugler, styrekugler, krængningsstabilisator og 4-hjulsudmåling (undervogn) samt udlæsning af fejlkoder, startbatteri og pærer (el-anlæg).", NORD],
    ["Nordanias formular: ved udskiftning af bremseklodser og -skiver for og bag angives det faktiske mål og fabrikkens minimumsmål i mm.", NORD],
    ["Nordanias formular: ved udskiftning af dæk og fælge angives resterende mm for hvert af de fire hjul, dækmærke, dækstørrelse og rabat på nye dæk i procent.", NORD],
    ["Nordanias formular har en post for komplette vinterhjul med fælgtype, dækmærke, dækstørrelse, TPMS og hjulbolte.", NORD],
    ["Nordanias formular: erstatningsbil har underposter for forsikring, selvrisikoafdækning, brændstof og overkørte km; under skader er der poster for forrude og reparation af stenslag.", NORD],
    ["Nordanias formular: filer kan vedhæftes (Word, Excel, PDF, TXT, JPG og PNG), samlet højst 30 MB og højst 7 MB pr. fil.", NORD],
    ["Ayvens: service og reparation bookes online via Ayvens servicebooking, forsikringssager undtaget; hente-bringe-service kan medføre ekstra omkostning.", AYV_S],
    ["Ayvens: bilen kan synes hos FDM og Applus, og fakturaen sendes direkte til Ayvens, når registreringsnummer og Ayvens som leasingselskab oplyses.", AYV_S],
    ["Ayvens: er sæsondæk en del af kontrakten, og leveres bilen i perioden 15. oktober til 31. marts, leveres den med vinterdæk, som standard på stålfælge uden hjulkapsler; dæk skiftes hos Dækpartner eller Superdæk.", AYV_D],
    ["Ayvens Assistance kan ringes op 24 timer i døgnet, 365 dage om året; vejhjælp i udlandet tilkaldes via SOS Rødt Kort; vejhjælpen omfatter at få fører, passagerer og bagage til et sikkert sted.", AYV_V],
    ["Volkswagens garanti omfatter ikke erstatningskrav som fx at der stilles en erstatningsbil til rådighed (afsnit A.6.3).", VW_G],
    ["Volkswagens garanti er udelukket, hvis bilen er beskadiget udefra, fx ved ulykke, hagl eller oversvømmelse (afsnit A.5.1); ved salg overtager den nye køber garantien (afsnit A.8).", VW_G],
    ["Ford: garantien omfatter ikke kosmetiske skader, udefra kommende skader, stenslag, ridser, buler eller lignende brugsskader; garantien følger bilen ved ejerskifte.", FORD_G],
    ["Hessel: ServiceCare samler Mercedes' planlagte service i én fast månedlig ydelse med låst pris i aftaleperioden; CompleteCare samler service, reparationer og sliddele og skal tegnes inden bilens første leveår.", H_MB],
    ["Hessel: hjulskifte på Mercedes-Benz koster 400 kr., hjulopbevaring 495 kr. pr. sæson.", H_MB],
    ["Hessel Plus (Renault fordelsaftale) koster 649 kr./år og giver 15 % rabat på værkstedet, 12 gratis bilvaske og 2 gratis hjulskifte pr. år og 18 øre rabat pr. liter brændstof; FordPlus giver også 18 øre rabat pr. liter.", H_REN],
    ["Hessel: Renault serviceaftale fra 189 kr./md. giver små faste betalinger, sikrer mod prisstigninger og inflation og kan sammensættes efter behov.", H_REN],
    ["Volkswagen: Service- og Reparationsabonnementet er 'den store pakke, som dækker al service og de reparationer, din bil har brug for'; Volkswagen Vejhjælp 24/7 er en fast del af abonnementerne; max 25 km til nærmeste værksted bortset fra få lokationer i yderområder.", VW_ERHV],
    ["Volkswagen: sælges bilen, mens abonnementet er aktivt, kan den nye ejer overtage det; Volkswagen får ikke automatisk besked og skal kontaktes for opsigelse eller ejerskifte; tegnes abonnementet senere end 30 dage efter registrering, kan det opsiges med 1 måneds varsel, dog tidligst 5 måneder efter start.", VW_ABO],
    ["Volkswagen: på et autoriseret Volkswagen-værksted får man gratis vejhjælp i hele Europa, døgnet rundt, 365 dage om året.", VW_AUT],
    ["Volkswagen Service 5+ (biler på 5 år eller ældre) giver Volkswagen Vejhjælp indtil næste serviceeftersyn.", VW_5],
    ["Ford: op til 24 måneders europæisk vejhjælp hver gang varebilen serviceres på et autoriseret Ford-værksted; varigheden afhænger af bilens serviceinterval.", FORD_PRO],
    ["Toyota: Proace skal til serviceeftersyn hver 2 år eller 30.000 km, hvad der kommer først.", TOYOTA]
  ]
};
