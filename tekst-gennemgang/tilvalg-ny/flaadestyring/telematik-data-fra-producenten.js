// Telematik fra producenten: ny udgave til tilvalg-ny.json (07-10-2026).
var FORD = "https://www.ford.dk/erhverv/flaadebiler/store-vognparker";
var FORDPM = "https://www.mynewsdesk.com/dk/ford-motor-company/pressreleases/ford-pro-oeger-produktiviteten-for-europas-varebilsflaader-3179178";
var FORDOPL = "https://www.ford.dk/erhverv/opladning";
var VWCF = "https://www.volkswagen.dk/da/erhvervsbiler/connectedfleet.html";
var VWFI = "https://www.volkswagen.dk/da/vaerksted/digitale-ekstrafunktioner/volkswagen-fleet-interface.html";
var ITSC = "https://itsupplychain.com/webfleet-extends-oem-connect-programme-to-support-electric-vehicles/";
var WF = "https://www.webfleet.com/da_dk/webfleet/products/oem-connect/";
var KIA = "https://api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-priser.pdf";
var EU = "https://digital-strategy.ec.europa.eu/da/policies/data-act";
var DT = "https://www.datatilsynet.dk/regler-og-vejledning/forbundne-biler-og-datasikkerhed";

function a(url, navn) { return '<a href="' + url + '" rel="noopener">' + navn + '</a>'; }

module.exports = {
  id: "flaadestyring/telematik-data-fra-producenten",
  side: {
    slug: "telematik-data-fra-producenten",
    navn: "Telematik fra producenten",
    titel: "Telematik fra producenten: Ford, VW, Mercedes",
    kort: "Sådan får du flådedata direkte fra bilens indbyggede modem hos Ford Pro, Volkswagen, Mercedes-Benz via Webfleet og Kia Connect.",
    beskrivelse: "Telematik fra Ford Pro, VW ConnectedFleet, VW Fleet Interface Data og Webfleet OEM.connect: hvilke data du får, hvad det koster, og hvad det kræver.",
    manchet: "Nyere varebiler har et indbygget modem, og producenterne sælger adgang til data om position, service og batteri. Nogle løsninger kræver ingen eftermonteret boks. Her kan du se, hvad Ford, Volkswagen, Mercedes-Benz og Kia tilbyder, og hvad reglerne om data og persondata betyder for firmaet.",
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["Ford Pro Telematics", "mindst 5 biler", "Ford-erhvervsbiler med FordPass Connect"],
        ["VW ConnectedFleet", "Gratis", "ved service på autoriseret VW-koncernværksted"],
        ["Webfleet", "Kun stelnummer", "ingen ekstra hardware til Mercedes-elvarebiler"],
        ["Dataforordningen", "12. sep. 2025", "ret til data fra forbundne produkter"]
      ],
      toc: true,
      stribe: {
        ids: ["ford-transit-custom", "mercedes-esprinter", "kia-pv5-cargo"],
        titel: "Varebiler fra Ford, Mercedes-Benz og Kia med tilbud lige nu"
      }
    },
    afsnit: [
      {
        overskrift: "To måder at få data",
        tekst: [
          "En nyere varebil har et modem med sit eget SIM-kort, som sender data om bilen til producenten. Producenten kan give data videre til virksomheden i sin egen portal eller sende dem til det flådesystem, virksomheden bruger, gennem en API. En API er en teknisk grænseflade, som to systemer bruger til at udveksle data automatisk.",
          "Den anden måde er en boks, der eftermonteres i bilen. Den sender selv data til flådesystemet og virker også i ældre biler og på tværs af mærker. Volkswagens ConnectedFleet er et eksempel, hvor boksen er en dongle, der sidder bag instrumentbrættet."
        ],
        kort: [
          ["Indbygget modem", "Bilen sender data til producenten. Flådesystemet henter dem via en API, fx Volkswagens Fleet Interface Data, eller via et program som Webfleets OEM.connect."],
          ["Eftermonteret dongle", "En enhed i bilen sender selv data. Volkswagens ConnectedFleet bruger en dongle bag instrumentbrættet og virker i biler af alle mærker fra efter 2010."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Producentdata går fra modemmet i bilen over producentens server og en API til flådesystemet. En eftermonteret dongle sender data direkte til flådesystemet."><defs><marker id="pil-telematik-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="8" y="40" width="100" height="44"/><text class="tg-modul__tekst" x="58" y="66" text-anchor="middle">Modem i bilen</text><rect class="tg-kasse" x="146" y="40" width="96" height="44"/><text x="194" y="58" text-anchor="middle">Producentens</text><text x="194" y="74" text-anchor="middle">server</text><rect class="tg-kasse" x="284" y="40" width="108" height="124"/><text class="tg-fremhaev" x="338" y="106" text-anchor="middle">Flådesystem</text><rect class="tg-kasse" x="8" y="120" width="100" height="44"/><text x="58" y="138" text-anchor="middle">Dongle</text><text x="58" y="154" text-anchor="middle">i bilen</text><line class="tg-pil" x1="108" y1="62" x2="144" y2="62" marker-end="url(#pil-telematik-1)"/><line class="tg-pil" x1="242" y1="62" x2="282" y2="62" marker-end="url(#pil-telematik-1)"/><line class="tg-pil" x1="108" y1="142" x2="282" y2="142" marker-end="url(#pil-telematik-1)"/><text x="262" y="54" text-anchor="middle">API</text><text class="tg-lille" x="194" y="102" text-anchor="middle">FORD, VW, MERCEDES</text><text class="tg-lille" x="195" y="134" text-anchor="middle">EFTERMONTERET</text><text class="tg-lille" x="8" y="196">PERSONDATA: GPS-REGLERNE GÆLDER OGSÅ HER</text></svg>`,
          tekst: "Skematisk. Producentdata via API eller en eftermonteret dongle. Kilder: " + a(VWFI, "Volkswagen: Fleet Interface Data") + " og " + a(VWCF, "Volkswagen: ConnectedFleet") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Løsningerne",
        tekst: [
          "Fire mærker har en løsning til varebiler, og løsningerne er bygget forskelligt. Ford og Volkswagen sælger selv adgang til data. Mercedes-Benz' elbiler kan kobles på Webfleet, og Kia PV5 Cargo har Kia Connect med fra fabrikken.",
          "Prisen er sjældent en fast liste. ConnectedFleet er gratis, når bilerne serviceres på et autoriseret værksted i Volkswagen-koncernen. Fleet Interface Data sælges i datapakker efter aftale, og Ford henviser til sit team for at høre om det samlede telematiktilbud. Webfleet skriver, at virksomheden undgår forudbetaling, når løsningen sættes op."
        ],
        tabel: {
          kolonner: ["Løsning", "Biler", "Hardware", "Pris"],
          raekker: [
            ["Ford Pro Telematics", "Vognparker med mindst fem Ford-erhvervsbiler med FordPass Connect", "Indbygget (FordPass Connect)", "Efter aftale med Ford"],
            ["VW ConnectedFleet", "Alle mærker fra efter 2010", "Dongle", "Gratis ved service på autoriseret VW-koncernværksted"],
            ["VW Fleet Interface Data", "VW, Audi, Škoda, SEAT og CUPRA med onlinetjenester", "Indbygget", "Datapakker efter aftale"],
            ["Webfleet OEM.connect", "Mercedes-Benz' elbiler og el-varebiler og flere andre mærker", "Ingen, kun stelnummer", "Uden forudbetaling ifølge Webfleet"],
            ["Kia Connect", "Kia PV5 Cargo (navigation og app)", "Indbygget", "7 år inkluderet"]
          ],
          note: "Kilder: " + a(FORD, "Ford: Store vognparker") + ", " + a(VWCF, "Volkswagen ConnectedFleet") + ", " + a(VWFI, "Fleet Interface Data") + ", " + a(WF, "Webfleet: OEM.connect") + " og " + a(KIA, "Kias prisliste") + ", set den 7. oktober 2026, og " + a(ITSC, "IT Supply Chain om Webfleet") + ", set den 4. oktober 2026.",
          visning: "kort"
        }
      },
      {
        overskrift: "Hvilke data",
        tekst: [
          "Løsningerne leverer ikke de samme data. Oversigten bygger på producenternes egne beskrivelser, og står der \"ikke nævnt\", skriver producenten ikke noget om det. Det betyder ikke nødvendigvis, at data mangler.",
          "Service og advarsler er det, alle fire nævner. Data om batteri, rækkevidde og opladning er vigtigst for elvarebiler, og her nævner Webfleet og Fleet Interface Data flest. Liveposition er den oplysning, der oftest er persondata, fordi den viser, hvor føreren er."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Data", "Ford Pro", "ConnectedFleet", "Fleet Interface Data", "Webfleet OEM.connect"],
          raekker: [
            ["Service og advarsler", "ja", "ja", "ja", "ja"],
            ["Fejlkoder", "ikke nævnt", "ja", "ikke nævnt", "ikke nævnt"],
            ["Tank eller batteri", "ikke nævnt", "ja", "ja", "ja"],
            ["Rækkevidde", "ikke nævnt", "ikke nævnt", "ja", "ja"],
            ["Liveposition", "ja", "parkering", "ja", "ja"],
            ["Kilometertæller", "ikke nævnt", "ikke nævnt", "køredata", "ja, i realtid"],
            ["Opladning", "Ford Pro Charging", "ikke nævnt", "ikke nævnt", "ladetid (Mercedes)"]
          ],
          note: "Tabellen bygger på producenternes egne beskrivelser. Kilder: " + a(FORD, "Ford: Store vognparker") + ", " + a(FORDPM, "Ford, pressemeddelelse 4. maj 2022") + ", " + a(VWCF, "Volkswagen") + ", " + a(VWFI, "Volkswagen") + " og " + a(WF, "Webfleet") + ", set den 7. oktober 2026, og " + a(ITSC, "IT Supply Chain") + ", set den 4. oktober 2026."
        }
      },
      {
        overskrift: "Hvilke biler kan levere data",
        tekst: [
          "Bilens alder afgør, hvilken løsning der kan bruges. En eftermonteret dongle som ConnectedFleet virker i biler af alle mærker fra efter 2010. Producenternes egne løsninger kræver, at bilen har det rigtige modem og de rigtige onlinetjenester.",
          "Fleet Interface Data virker i Volkswagens erhvervsbiler og personbiler, der er forberedt til VW Connect eller We Connect. Audi, Škoda, SEAT og CUPRA skal have den nyeste generation af onlinetjenester, som Volkswagen kalder Onboard Connectivity Unit Gen. 3. Har firmaet biler af flere mærker og årgange, ender det ofte med en blanding af producentdata og eftermonterede bokse."
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Efter 2010", "ConnectedFleet kan monteres i biler af alle mærker fra efter 2010."],
            ["Fra 2019", "Ford Pro virker i Fords varebiler fra 2019 og frem, der har indbygget modem."],
            ["Marts 2021", "FORDLiive blev indført på udvalgte markeder."],
            ["September 2023", "Webfleet udvidede OEM.connect til Mercedes-Benz' elbiler og el-varebiler."],
            ["12. september 2025", "EU's dataforordning gælder og giver brugerne ret til data fra forbundne produkter."],
            ["Modelår 2027", "Kia PV5 Cargo har Kia Connect med 7 år inkluderet."]
          ],
          note: "Kilder: " + a(VWCF, "Volkswagen: ConnectedFleet") + ", " + a(FORDPM, "Ford, pressemeddelelse 4. maj 2022") + ", " + a(EU, "Europa-Kommissionen") + " og " + a(KIA, "Kias prisliste for PV5 Cargo") + ", set den 7. oktober 2026, og " + a(ITSC, "IT Supply Chain") + ", set den 4. oktober 2026."
        }
      },
      {
        overskrift: "Ford Pro Telematics",
        tekst: [
          "Ford Pro er Fords samlede program for erhvervskunder med flådestyring, service, opladning og finansiering. Ifølge Fords pressemeddelelse fra 4. maj 2022 er kernen data fra et indbygget modem, der holder både kunden og Fords serviceteam orienteret om bilens tilstand.",
          "Ford skriver i samme pressemeddelelse, at Ford Pro kan bruges, uanset om varebilerne kører på benzin, diesel eller el, og selv hvis varebilen ikke er en Ford. Selve Ford Pro Telematics kræver dog en vognpark med mindst fem Ford-erhvervsbiler med FordPass Connect."
        ],
        punkter: [
          "<strong>Ford Pro Telematics.</strong> Tjenesten er til vognparker med fem eller flere erhvervsbiler med FordPass Connect og viser ydeevne, placering, brug og kørsel i realtid i en webbaseret grænseflade.",
          "<strong>FORDLiive.</strong> Ifølge Fords pressemeddelelse fra 4. maj 2022 aktiverer kunden selv tjenesten og deler livedata med Ford Transit Erhvervscentre og Ford Pro-specialister. Centret kan gå 60 dage tilbage i kørselshistorikken.",
          "<strong>Nedetid.</strong> Ford anslår, at FORDLiive kan reducere den tid, varebilerne holder stille, med op til 60 %."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ford Pro Telematics", "mindst 5", "erhvervsbiler med FordPass Connect"],
            ["Kørselshistorik i FORDLiive", 60, "dage"],
            ["Mindre nedetid, Fords skøn", "op til 60", "%"]
          ],
          note: "Ford anslår selv, hvor meget nedetiden kan falde. Kilder: " + a(FORD, "Ford: Store vognparker") + " og " + a(FORDPM, "Ford Danmark, pressemeddelelse 4. maj 2022") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "FORDLiive og værkstedet",
        tekst: [
          "Med FORDLiive kan værkstedet se bilens tilstand, før bilen kommer ind. Ford skriver, at Ford Transit Erhvervscentret kan bruge Ford Telematics Essentials til at bestille de reservedele hjem på forhånd, som bilen skal bruge.",
          "Ford oplyser, at systemet fra introduktionen i marts 2021 til maj 2022 gav næsten 125.000 flere dage på vejen for biler med systemet end for biler uden. Skønnet på op til 60 % mindre nedetid bygger på, at kunden reagerer hurtigt på bilens advarsler, og at bilen vedligeholdes hos Ford Transit Erhvervscentre. Ford skriver selv, at den faktiske nedgang afhænger af bl.a. kørestil og brug af bilen."
        ]
      },
      {
        overskrift: "Volkswagen ConnectedFleet",
        tekst: [
          "ConnectedFleet er Volkswagens gratis flådeværktøj. Donglen sender data trådløst til flådeejerens computer, tablet eller telefon, og flådeejeren kan se bilens tilstand, forbrug, og hvornår den skal til service. Værktøjet har også en chat mellem flådeejeren, chaufførerne og værkstedet.",
          "Løsningen virker på biler af alle mærker fra efter 2010, men den er kun gratis, når bilerne serviceres på et autoriseret Volkswagen-, Audi-, Škoda-, SEAT- eller CUPRA-værksted. Vil firmaet ikke længere have bilerne med, beder det værkstedet om at deaktivere dem."
        ],
        punkter: [
          "<strong>Data.</strong> ConnectedFleet viser tid til næste service, vigtige fejlkoder, motorlamper og batterispænding.",
          "<strong>Krav.</strong> Én bil er nok, og bilen kan være leaset. Den skal være fra efter 2010.",
          "<strong>Kendetegn.</strong> Et klistermærke på indersiden af dørrammen ved førersædet viser, at ConnectedFleet er installeret.",
          "<strong>Brugere.</strong> Flådeadministratoren inviterer brugere og bestemmer deres rettigheder. Chaufførerne kan bruge appen ConnectedFleetCar og se bilens stand, parkering, brændstofniveau og kørte ruter, og hvornår bilen skal på værksted.",
          "<strong>Deaktivering.</strong> Bilen kan deaktiveres, og aktiveres den igen, er data fra perioden ikke tilgængelige."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="ConnectedFleet i bilen: dongle bag instrumentbrættet og klistermærke i dørrammen ved førersædet."><text class="tg-lille" x="20" y="52">INSTRUMENTBRÆT</text><rect class="tg-hylde" x="20" y="60" width="150" height="26"/><rect class="tg-modul" x="120" y="90" width="24" height="12"/><g class="tg-call"><line x1="132" y1="102" x2="132" y2="140"/><circle cx="132" cy="102" r="3"/><text class="tg-call__navn" x="60" y="156">Dongle</text><text class="tg-call__under" x="60" y="170">bag instrumentbrættet</text></g><text class="tg-lille" x="230" y="30">DØRRAMME VED FØRERSÆDET</text><rect class="tg-rum" x="230" y="40" width="110" height="120"/><rect class="tg-kuffert" x="240" y="110" width="20" height="14"/><g class="tg-call"><line x1="250" y1="124" x2="250" y2="166"/><circle cx="250" cy="124" r="3"/><text class="tg-call__navn" x="230" y="180">Klistermærke</text><text class="tg-call__under" x="230" y="194">viser ConnectedFleet</text></g></svg>`,
          tekst: "Skematisk. Donglen sidder bag instrumentbrættet, og et klistermærke i dørrammen ved førersædet viser, at systemet er installeret. Kilde: " + a(VWCF, "Volkswagen") + ", set den 7. oktober 2026."
        },
        efter: [
          "Kilde: " + a(VWCF, "Volkswagen: ConnectedFleet") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Sådan kommer ConnectedFleet i bilen",
        tekst: [
          "Firmaet starter hos sin lokale bilforhandler, som inviterer firmaet til ConnectedFleet og aftaler, hvornår donglen skal monteres. Når bilen er tilmeldt, sætter værkstedet et klistermærke i dørrammen, så alle kan se, at bilen sender data.",
          "Data behandles af Connected Cars, som bruger dem til de tjenester, appen ConnectedWorkshop viser. Kunden underskriver en databehandleraftale, når ConnectedFleet aktiveres, og aftalen beskriver, hvad data bruges til."
        ],
        figur: {
          type: "trin",
          trin: [
            ["Kontakt forhandleren", "Den lokale bilforhandler inviterer firmaet til ConnectedFleet og aftaler installationen."],
            ["Donglen monteres", "Donglen sættes bag instrumentbrættet, og et klistermærke kommer i dørrammen ved førersædet."],
            ["Aftalen underskrives", "Firmaet underskriver en databehandleraftale, når ConnectedFleet aktiveres."],
            ["Brugere inviteres", "Flådeadministratoren inviterer brugere og bestemmer deres rettigheder. Chaufførerne bruger appen ConnectedFleetCar."]
          ]
        },
        efter: [
          "Kilde: " + a(VWCF, "Volkswagen: ConnectedFleet") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "ABAX på samme dongle",
        tekst: [
          "Vil firmaet have mere end ConnectedFleet, fx kort, geofencing og sporing af udstyr, har Volkswagen et samarbejde med ABAX, som bruger samme teknologi og dongle, så bilerne hurtigt kan kobles på. Firmaet tilmelder sig gennem sin ConnectedFleet-konto.",
          "ABAX tilbyder bl.a. kort, kørte ruter, geofencing og parkering. Geofencing betyder, at systemet giver besked, når en bil kører ind i eller ud af et område, man har tegnet på kortet. ABAX har også trackere til værktøj og andet udstyr uden motor, fx boremaskiner og stiger, og tilpasser produkt og pris til den enkelte virksomhed."
        ]
      },
      {
        overskrift: "Volkswagen Fleet Interface Data",
        tekst: [
          "Data fra Volkswagen-koncernens biler leveres via en teknisk grænseflade (API) direkte til det flådesystem, virksomheden bruger. Der er datapakker med reparations-, service- og driftsdata, og løsningen går på tværs af koncernens mærker.",
          "Volkswagen skriver, at firmaet får data fra flere bilmærker i flåden uden at eftermontere en telematikløsning. Volkswagen Group Info Services AG hjælper med aftalen og integrationen, og der er en servicehotline, der har åbent døgnet rundt."
        ],
        punkter: [
          "Liveposition",
          "Servicedata",
          "Tankniveau",
          "Køredata",
          "Resterende rækkevidde",
          "Advarsler"
        ],
        punkt_ikon: "ja"
      },
      {
        overskrift: "Webfleet og OEM.connect",
        tekst: [
          "Webfleet er et flådesystem fra Bridgestone. Programmet OEM.connect kobler bilens fabriksmonterede telematik til Webfleet, og firmaet skal kun bruge bilens stelnummer for at aktivere forbindelsen. Webfleet skriver, at bilen kan kobles på hurtigt og uden at blive taget af vejen.",
          "Webfleet henter ladetid, rækkevidde, batteristatus og strømforbrug fra Mercedes-Benz' elbiler og el-varebiler gennem OEM.connect. Det kræver kun stelnummeret og ingen ekstra hardware, skrev IT Supply Chain i september 2023. På Webfleets danske side om OEM.connect står logoerne for bl.a. Ford, Mercedes-Benz, Volkswagen, Renault, Peugeot, Citroën, Opel og Fiat.",
          "Til elbiler kan Webfleet vise batteriniveau og resterende rækkevidde og sende en besked, når batteriet er ved at være tomt. Kilometertællerens stand hentes i realtid fra bilen, og Webfleet viser tidligere ture med start, slut, varighed og distance."
        ]
      },
      {
        overskrift: "Kia Connect i PV5 Cargo",
        tekst: [
          "Kia PV5 Cargo har en 12,9 tommer touchskærm med navigation og Kia Connect som standard. Ifølge Kias prisliste er Kia Connect inkluderet i 7 år, og softwareopdatering over nettet er inkluderet i 1 år.",
          "Prislisten nævner ikke, om flådesystemer kan hente data fra Kia Connect. Det kan forhandleren svare på, hvis data skal ind i firmaets eget system. Standardudstyret omfatter også fjernstyret opvarmning af kabinen og eCall, som ringer til alarmcentralen ved en ulykke."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Kia Connect inkluderet", 7, "år"],
            ["Softwareopdatering over nettet", 1, "år inkluderet"]
          ],
          note: "Gælder Kia PV5 Cargo L2H1, modelår 2027. Kilde: " + a(KIA, "Kia: Priser PV5 Cargo L2H1") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Opladning fra producenten",
        tekst: [
          "Ifølge Fords pressemeddelelse fra maj 2022 dækker Ford Pro Charging opladning på adressen, offentligt og hjemme hos føreren med Ford Connected Wallbox, og den flådeansvarlige kan følge opladningen. Ford installerer det nødvendige udstyr og samler faktureringen i softwaren, uanset hvor føreren lader.",
          "Ford giver adgang til BlueOval Charge Network med over 450.000 offentlige ladepunkter, herunder IONITY-lynladere. Hjemme hos chaufføren kan varebilen lade natten over med Ford Connected Wallbox. Andre måder at betale strømmen på står i <a href=\"/til-varebilen/flaadestyring/braendstofkort-og-ladekort/\">brændstofkort og ladekort</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Ford Pro Charging dækker opladning på adressen, offentligt og hjemme, og den flådeansvarlige følger opladningen."><rect class="tg-kasse" x="10" y="20" width="120" height="44"/><text x="70" y="46" text-anchor="middle">På adressen</text><rect class="tg-kasse" x="140" y="20" width="120" height="44"/><text x="200" y="46" text-anchor="middle">Offentligt</text><rect class="tg-kasse" x="270" y="20" width="120" height="44"/><text x="330" y="38" text-anchor="middle">Hjemme</text><text x="330" y="54" text-anchor="middle">med wallbox</text><path class="tg-pil" d="M70,64 L160,110"/><path class="tg-pil" d="M200,64 L200,110"/><path class="tg-pil" d="M330,64 L240,110"/><rect class="tg-modul" x="120" y="110" width="160" height="34"/><text class="tg-modul__tekst" x="200" y="131" text-anchor="middle">FORD PRO CHARGING</text><text x="200" y="170" text-anchor="middle">Den flådeansvarlige følger opladningen</text><text class="tg-lille" x="200" y="192" text-anchor="middle">FORD, PRESSEMEDDELELSE MAJ 2022</text></svg>`,
          tekst: "Skematisk. De tre steder, Ford Pro Charging dækker opladning, ifølge " + a(FORDPM, "Fords pressemeddelelse fra maj 2022") + ". Hjemme hos føreren sker det med Ford Connected Wallbox. Kilde: " + a(FORDOPL, "Ford: Opladning til erhverv") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Dataforordningen",
        tekst: [
          "EU's dataforordning gælder fra 12. september 2025 og giver brugere af forbundne produkter, også virksomheder, ret til adgang til de data, produkterne genererer, skriver " + a(EU, "Europa-Kommissionen") + ". Kommissionen nævner biler som et eksempel på forbundne produkter.",
          "Brugeren kan også vælge at dele data med en tredjepart, fx et værksted. Kommissionen skriver, at det skal give brugerne mulighed for at vælge et billigere værksted eller selv stå for reparation og vedligeholdelse. Forordningen forbyder også urimelige kontraktvilkår, der skal forhindre datadeling.",
          "For en flåde betyder det, at data ikke kun tilhører producentens egen portal. Hvordan producenterne konkret giver adgang, og hvad det koster, er stadig noget, firmaet skal aftale med hver enkelt."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Dataforordningen. Data fra bilen ligger hos producenten. Virksomheden, der bruger bilen, har ret til adgang og kan vælge at dele data med et værksted eller et flådesystem."><defs><marker id="pil-telematik-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(8,104) scale(0.45)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="17"/></g><text class="tg-lille" x="8" y="136">BILEN</text><rect class="tg-kasse" x="150" y="52" width="100" height="44"/><text x="200" y="70" text-anchor="middle">Producentens</text><text x="200" y="86" text-anchor="middle">server</text><rect class="tg-modul" x="288" y="14" width="108" height="44"/><text class="tg-modul__tekst" x="342" y="32" text-anchor="middle">Virksomheden</text><text class="tg-modul__tekst" x="342" y="48" text-anchor="middle">ret til adgang</text><rect class="tg-kasse" x="288" y="116" width="108" height="44"/><text x="342" y="134" text-anchor="middle">Værksted eller</text><text x="342" y="150" text-anchor="middle">flådesystem</text><line class="tg-pil" x1="120" y1="74" x2="148" y2="74" marker-end="url(#pil-telematik-2)"/><line class="tg-pil" x1="250" y1="66" x2="286" y2="42" marker-end="url(#pil-telematik-2)"/><line class="tg-skinne-tynd" x1="342" y1="58" x2="342" y2="114" marker-end="url(#pil-telematik-2)"/><text class="tg-lille" x="334" y="84" text-anchor="end">DELER, HVIS</text><text class="tg-lille" x="334" y="98" text-anchor="end">BRUGEREN VIL</text><line class="tg-gulvlinje" x1="8" y1="178" x2="392" y2="178"/><text class="tg-lille" x="8" y="200">DATAFORORDNINGEN GÆLDER FRA 12. SEPTEMBER 2025</text></svg>`,
          tekst: "Skematisk. Brugerens ret til data efter dataforordningen. Kilde: " + a(EU, "Europa-Kommissionen: Dataforordningen") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Persondata",
        tekst: [
          "Forbundne biler registrerer lokation, ruter og køreadfærd, som ofte kan knyttes til en person, skriver Datatilsynet. Køreadfærd omfatter fx hastighed, acceleration, opbremsninger og sving. Data om bilens motor, brændstofforbrug, dæktryk og vedligeholdelse regner Datatilsynet derimod ikke som persondata, fordi de ikke direkte kan knyttes til en bestemt person.",
          "Datatilsynet skriver også, at systemer, der indsamler data uden et lovkrav, som udgangspunkt skal være slået fra. eCall er et eksempel på et system, der kræves ved lov. Det ringer automatisk til alarmcentralen ved en ulykke, kan ikke slås fra og sender kun bilens position til myndighederne, når det bliver aktiveret.",
          "Kunden underskriver en databehandleraftale, når ConnectedFleet aktiveres. Du kan læse reglerne for GPS i firmabiler under <a href=\"/til-varebilen/flaadestyring/gps-sporing-af-medarbejdere/\">GPS-sporing af medarbejdere</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Data fra bilen deles i to. Data om bilen, som motorydelse, brændstofforbrug, dæktryk og vedligeholdelse, er ikke persondata. Data om føreren, som position, ruter, hastighed og opbremsninger, er ofte persondata."><defs><marker id="pil-telematik-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="130" y="8" width="140" height="32"/><text class="tg-fremhaev" x="200" y="29" text-anchor="middle">Data fra bilen</text><line class="tg-pil" x1="170" y1="40" x2="110" y2="66" marker-end="url(#pil-telematik-3)"/><line class="tg-pil" x1="230" y1="40" x2="290" y2="66" marker-end="url(#pil-telematik-3)"/><rect class="tg-kasse" x="8" y="70" width="184" height="120"/><text class="tg-fremhaev" x="20" y="92">Om bilen</text><text x="20" y="114">motorydelse</text><text x="20" y="132">brændstofforbrug</text><text x="20" y="150">dæktryk</text><text x="20" y="168">vedligeholdelse</text><rect class="tg-modul" x="208" y="70" width="184" height="120"/><text class="tg-modul__tekst" x="220" y="92">Om føreren</text><text class="tg-modul__tekst" x="220" y="114">position og ruter</text><text class="tg-modul__tekst" x="220" y="132">hastighed</text><text class="tg-modul__tekst" x="220" y="150">acceleration og</text><text class="tg-modul__tekst" x="220" y="168">opbremsninger</text><text class="tg-lille" x="100" y="214" text-anchor="middle">IKKE PERSONDATA</text><text class="tg-lille" x="300" y="214" text-anchor="middle">OFTE PERSONDATA</text></svg>`,
          tekst: "Skematisk. Datatilsynets skel mellem data om bilen og data om føreren. Kilde: " + a(DT, "Datatilsynet: Forbundne biler og datasikkerhed") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Producentdata eller eftermonteret boks",
        tekst: [
          "Producentens egne data kræver ingen montering, og bilen skal ikke på værksted. Til gengæld dækker hver løsning kun de mærker og årgange, producenten understøtter. Et program som Webfleets OEM.connect samler flere mærker i ét system, men kun for biler med det rigtige modem.",
          "En eftermonteret boks virker på tværs af mærker og i ældre biler, men skal monteres og afmonteres, når bilen skifter hænder. Valget afhænger af, hvor ensartet flåden er, og hvilke data firmaet vil bruge.",
          "Skal data bruges til kørebogen, står kravene til en elektronisk kørebog i <a href=\"/til-varebilen/flaadestyring/elektronisk-koerebog/\">elektronisk kørebog</a>. Et flådesystem med begge slags data står i <a href=\"/til-varebilen/flaadestyring/flaadestyringssystem/\">flådestyringssystem</a>."
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren svare på",
    spoergsmaal_manchet: "Så ved I, hvilke data bilen kan levere.",
    spoergsmaal: [
      "Om bilen har indbygget modem, og hvilke tjenester der er aktiveret fra fabrikken.",
      "Hvor længe tjenesten er inkluderet, og hvad den koster bagefter.",
      "Hvilke data der leveres: position, km, service, batteri og opladning.",
      "Om data kan hentes via API til jeres flådesystem, fx gennem Fleet Interface Data eller Webfleet.",
      "Om bilen kan kobles på et flådesystem med stelnummeret alene, eller om der skal monteres en boks.",
      "Om løsningen kræver service på et bestemt værksted for at være gratis.",
      "Hvem der er dataansvarlig, og om der skal underskrives en databehandleraftale."
    ],
    faq: [
      ["Kan man få flådedata fra bilen uden at montere en GPS-tracker?", "Ja, for flere mærker. Ford Pro Telematics bruger FordPass Connect i vognparker med mindst fem Ford-erhvervsbiler, Volkswagens Fleet Interface Data leverer data via API, og Webfleet henter data fra Mercedes-Benz el-varebiler ud fra stelnummeret."],
      ["Hvad koster Volkswagens ConnectedFleet?", "Den er gratis, når bilerne serviceres på et autoriseret værksted i VW-koncernen, og den virker på alle bilmærker fra efter 2010."],
      ["Hvad er FORDLiive?", "Det er en tjeneste fra Ford, hvor kunden deler livedata fra varebilen med Ford Transit Erhvervscentre, ifølge Fords pressemeddelelse fra maj 2022. Centret kan se 60 dages kørselshistorik og bestille reservedele hjem på forhånd."],
      ["Kan flådesystemet vise batteriniveau fra producentens data?", "Ja. Webfleet henter batteristatus, rækkevidde og ladetid fra Mercedes-Benz el-varebiler, og Volkswagens Fleet Interface Data leverer resterende rækkevidde."],
      ["Har virksomheden ret til data fra sine biler?", "Ja. Fra 12. september 2025 giver EU's dataforordning brugerne, også virksomheder, ret til adgang til data fra forbundne produkter som biler."],
      ["Er data fra bilen persondata?", "Det afhænger af data. Datatilsynet skriver, at position, ruter og køreadfærd ofte kan knyttes til en person, mens data om motor, brændstofforbrug, dæktryk og vedligeholdelse ikke regnes som persondata."],
      ["Hvad er en API?", "En teknisk grænseflade, som to systemer bruger til at udveksle data automatisk. Med en API kan producentens data gå direkte ind i det flådesystem, firmaet bruger i forvejen."],
      ["Har Kia PV5 Cargo telematik fra fabrikken?", "Kia PV5 Cargo har Kia Connect med 7 år inkluderet ifølge Kias prisliste. Prislisten nævner ikke, om flådesystemer kan hente data fra Kia Connect."]
    ],
    kilder: [
      { navn: "Ford: Store vognparker (Ford Pro Telematics)", url: FORD, dato: "2026-10-07" },
      { navn: "Ford: Ford Pro øger produktiviteten for Europas varebilsflåder (pressemeddelelse 4. maj 2022)", url: FORDPM, dato: "2026-10-07" },
      { navn: "Ford: Opladning til erhverv", url: FORDOPL, dato: "2026-10-07" },
      { navn: "Volkswagen: ConnectedFleet", url: VWCF, dato: "2026-10-07" },
      { navn: "Volkswagen: Fleet Interface Data", url: VWFI, dato: "2026-10-07" },
      { navn: "Webfleet: OEM.connect-flådestyring", url: WF, dato: "2026-10-07" },
      { navn: "IT Supply Chain: Webfleet extends OEM.connect programme to support electric vehicles (26.09.2023)", url: ITSC, dato: "2026-10-04" },
      { navn: "Kia: Priser PV5 Cargo L2H1", url: KIA, dato: "2026-10-07" },
      { navn: "Europa-Kommissionen: Dataforordningen", url: EU, dato: "2026-10-07" },
      { navn: "Datatilsynet: Forbundne biler og datasikkerhed", url: DT, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Ford Pro: kernen er data via et indbygget modem, der holder kunderne og serviceteamet orienteret om bilens tilstand; Ford Pro kan bruges, uanset om varebilerne kører på benzin, diesel eller el, og selv hvis varebilen ikke er en Ford.", FORDPM],
    ["Ford Pro er tilgængelig i Fords varebiler fra 2019 og frem, der har indbygget modem (pressemeddelelse 4. maj 2022).", FORDPM],
    ["Ford Pro Telematics er et webbaseret værktøj, der for vognparker med fem eller flere erhvervsbiler med FordPass Connect viser ydeevne, placering, brug og kørsel i realtid; Ford beder kunden kontakte teamet for det komplette telematiktilbud.", FORD],
    ["FORDLiive: siden introduktionen på udvalgte markeder i marts 2021 har systemet sikret næsten 125.000 flere dage på vejene for biler med systemet; Ford Transit Erhvervscentret kan med Ford Telematics Essentials bestille reservedele hjem på forhånd; skønnet på op til 60 % bygger på, at kunden reagerer hurtigt på advarsler og bruger Ford Transit Erhvervscentre, og den faktiske reduktion afhænger af bl.a. kørestil og brug.", FORDPM],
    ["Ford Pro Charging: Ford installerer den nødvendige hardware og giver en forenklet fakturering via softwaren, uanset hvor føreren lader.", FORDPM],
    ["Ford: adgang til BlueOval Charge Network med over 450.000 offentlige ladepunkter, herunder IONITY-lynladere; hjemmeopladning natten over med Ford Connected Wallbox.", FORDOPL],
    ["ConnectedFleet er gratis og overfører trådløst bilens data til flådeejerens computer, tablet eller smartphone; den viser bilens tilstand, forbrug og servicebehov og har en chatfunktion mellem flådeejer, chauffører og værksteder.", VWCF],
    ["ConnectedFleet: bilerne deaktiveres ved at kontakte værkstedet; ConnectedFleetCar-appen viser parkering, brændstofniveau og hvornår der bør bestilles tid på værksted, og chaufførernes gratis app viser bilens stand og kørte ruter; gratis ved service på autoriseret Volkswagen-, Audi-, Skoda-, Seat- eller Cupra-værksted.", VWCF],
    ["ConnectedFleet: man får løsningen ved at kontakte den lokale bilforhandler, som inviterer til applikationen og aftaler installation; Connected Cars bruger data til tjenesterne i ConnectedWorkshop; kunden underskriver en DPA ved aktivering.", VWCF],
    ["ABAX bruger samme teknologi og dongle som ConnectedFleet og tilbyder kort, kørte ruter, geofencing, parkering og trackere til håndholdte og ikke-drevne aktiver som boremaskiner og stiger; tilmelding sker via ConnectedFleet-kontoen.", VWCF],
    ["Fleet Interface Data fås til Volkswagen erhvervsbiler og personbiler forberedt til VW Connect eller We Connect og til Audi, Škoda, SEAT og CUPRA med Onboard Connectivity Unit Gen. 3; data fra flere bilmærker uden eftermonteret telematik; Volkswagen Group Info Services AG hjælper med aftale og integration; 24/7-servicehotline.", VWFI],
    ["Webfleet OEM.connect forbinder bilen med fabriksinstalleret telematikhardware, og man skal kun bruge stelnummeret (VIN); man undgår forskudsbetalinger, og et køretøj kan forbindes uden at blive taget af vejen.", WF],
    ["Webfleet OEM.connect understøtter elbiler uden ekstra hardware: batteriniveau, resterende rækkevidde og alarm ved kritisk batteriniveau; tidligere ture med start, slut, varighed og distance; kilometertællerdata i realtid fra bilens kilometertæller; position på kortet.", WF],
    ["Webfleets danske side om OEM.connect viser logoer for bl.a. Ford, Mercedes-Benz, Volkswagen, Renault, Peugeot, Citroën, Opel og Fiat under OEM-partnere.", WF],
    ["Kia PV5 Cargo (modelår 2027, Work-standardudstyr): 12,9” touchskærm med navigation og Kia Connect, 7 år inkluderet; Over The Air softwareopdatering 1 år inkluderet; fjernstyret opvarmning af kabine; E-call.", KIA],
    ["Europa-Kommissionen: dataforordningen finder anvendelse fra 12. september 2025; brugere kan dele data med tredjeparter som reparatører og dermed vælge billigere reparation og vedligeholdelse eller selv udføre det; urimelige kontraktvilkår, der hindrer datadeling, forbydes; biler nævnes som eksempel på forbundne enheder.", EU],
    ["Datatilsynet: køreadfærd omfatter hastighed, acceleration, opbremsninger og sving; data om motorydelse, brændstofforbrug, dæktryk og nødvendig vedligeholdelse betragtes ikke som persondata, da de ikke direkte kan henføres til en bestemt person.", DT],
    ["Datatilsynet: systemer, der indsamler data uden lovkrav, skal som udgangspunkt være deaktiverede; eCall kontakter automatisk alarmcentralen ved en ulykke, kan ikke deaktiveres og videregiver kun bilens lokation til myndighederne, når det aktiveres.", DT]
  ]
};
