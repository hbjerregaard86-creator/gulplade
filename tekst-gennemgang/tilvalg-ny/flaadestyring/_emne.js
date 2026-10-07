// Emnesiden /til-varebilen/flaadestyring/ (07-10-2026)
var SKAT = `https://skat.dk/erhverv/ansatte-og-loen/koerselsgodtgoerelse/dokumentation-og-kontrol-af-koerselsgodtgoerelse`;
var JV11 = `https://info.skat.dk/data.aspx?oid=1947973`;
var JV12 = `https://info.skat.dk/data.aspx?oid=1947974`;
var JVB = `https://info.skat.dk/data.aspx?oid=2061750`;
var MST = `https://motorst.dk/borger/gule-plader-og-papegoejeplader/regler-for-gule-plader`;
var DT = `https://cdn.datatilsynet.dk/datatilsynet/Media/638348919997326341/Kontrol%20af%20medarbejdere.pdf`;
var DTF = `https://www.datatilsynet.dk/afgoerelser/generelt-om-tilsyn/saerlige-fokusomraader-for-datatilsynets-tilsynsaktiviteter-i-2026`;
var DALO = `https://www.3f.dk/-/media/files/artikler/dit-arbejdsliv/aftaleomkontrolforanstaltninger.pdf`;
var DN = `https://www.driversnote.dk/priser`;
var GSM = `https://gsmteknik.dk/shop/98-gps-flaadestyring-koerebog/1635-elektronisk-korebog/`;
var MT = `https://metatrak.dk/koerebog/`;
var GPST = `https://gps-tracker.dk/priser/`;
var FC = `https://fleetcomplete.dk/flaadestyring/`;
var MAPON = `https://help.mapon.com/da/articles/195131-hvad-er-can-bus-data-og-hvordan-forbedrer-det-fladestyring`;
var CK = `https://www.circlek.dk/vilkar-og-betingelser-europe-card-da`;
var UNOX = `https://unoxmobility.dk/erhverv/produkter/firmabiler`;
var VWFID = `https://www.volkswagen.dk/da/vaerksted/digitale-ekstrafunktioner/volkswagen-fleet-interface.html`;
var VWCF = `https://www.volkswagen.dk/da/erhvervsbiler/connectedfleet.html`;
var FORD = `https://www.ford.dk/erhverv/flaadebiler/store-vognparker`;
var FORDPR = `https://www.mynewsdesk.com/dk/ford-motor-company/pressreleases/ford-pro-oeger-produktiviteten-for-europas-varebilsflaader-3179178`;
var WF = `https://itsupplychain.com/webfleet-extends-oem-connect-programme-to-support-electric-vehicles/`;
var KIA = `https://api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-priser.pdf`;
var EU = `https://digital-strategy.ec.europa.eu/da/policies/data-act`;
var FSTYR = `https://www.fstyr.dk/nyheder/2026/jul/nye-regler-for-varebiler`;
var FSTYRK = `https://www.fstyr.dk/erhverv/gods-bus-og-varebil/takograf/ansoeg-om-takografkort-mv`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "flaadestyring",
  side: {
    slug: "flaadestyring",
    navn: "Flådestyring og kørebog",
    titel: "Flådestyring og elektronisk kørebog til varebil",
    kort: `Elektronisk kørebog, GPS, flådestyringssystem, tank- og ladekort, takograf og data fra producenten. Reglerne, typerne og priserne.`,
    beskrivelse: `Kørebog, GPS og flådestyring til varebiler: Skattestyrelsens og Datatilsynets krav og priser fra 20 kr. pr. bil om måneden hos danske forhandlere.`,
    manchet: `Flådestyring dækker alt fra en kørebogs-app på telefonen til et system, der læser kilometerstand og batteriniveau direkte fra bilen. Skattestyrelsen stiller krav til kørselsregnskabet, og Datatilsynet stiller krav til GPS i firmabiler. Her er værktøjerne, reglerne og priserne fra danske forhandlere.`,
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["GPS-sporing", "fra 20 kr. pr. md.", "+ moms pr. bil hos GPS-Tracker.dk"],
        ["Kørebogs-app", "0 kr.", "til op til 15 ture om måneden hos Driversnote"],
        ["Information til ansatte", "Senest ved start", "når GPS'en tages i brug"],
        ["Takograf i varebiler", "1. juli 2026", "over 2,5 tons i international godskørsel"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Syv værktøjer til flåden",
        tekst: [
          `Flådestyring er de værktøjer, en virksomhed bruger til at holde styr på sine biler, kørslen og udgifterne. For en håndværker med én varebil kan det være en app, der laver kørebogen. For en virksomhed med 20 biler kan det være et system, der viser alle bilerne på et kort og giver besked, når de skal til service.`,
          `Værktøjerne overlapper. En GPS-kørebog er også GPS-sporing, og et flådestyringssystem har som regel en kørebog indbygget. Derfor gælder reglerne fra både Skattestyrelsen og Datatilsynet ofte for det samme udstyr. Hvert værktøj har sin egen side.`
        ],
        kort: [
          ["Elektronisk kørebog", "App eller GPS-boks, der registrerer turene og laver kørselsregnskabet. <a href=\"/til-varebilen/flaadestyring/elektronisk-koerebog/\">Krav og priser</a>."],
          ["GPS-sporing af medarbejdere", "Position og ruter. Datatilsynet stiller krav til formål, information og privat kørsel. <a href=\"/til-varebilen/flaadestyring/gps-sporing-af-medarbejdere/\">Reglerne</a>."],
          ["Flådestyringssystem", "Position, kørselsdata, service, skader og data fra bilens CAN-bus samlet ét sted. <a href=\"/til-varebilen/flaadestyring/flaadestyringssystem/\">Funktioner og priser</a>."],
          ["Brændstofkort og ladekort", "Ét kort pr. bil med samlet faktura for diesel, opladning, vask og bro. <a href=\"/til-varebilen/flaadestyring/braendstofkort-og-ladekort/\">Typer og gebyrer</a>."],
          ["Takograf-udstyr", "Udstyret til varebiler i international godskørsel med montering, pris og kort. <a href=\"/til-varebilen/flaadestyring/takograf-udstyr/\">Det praktiske</a>."],
          ["Telematik fra producenten", "Data fra bilens indbyggede modem uden en ekstra boks. <a href=\"/til-varebilen/flaadestyring/telematik-data-fra-producenten/\">Løsningerne</a>."],
          ["Kørselsregnskab: skabelon", "Felterne i Skattestyrelsens skema og underskrifterne. <a href=\"/til-varebilen/flaadestyring/koerselsregnskab-skabelon/\">Skabelonen</a>."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 256" role="img" aria-label="Varebil set fra siden med fire værktøjer: GPS og kørebog i en fast boks, OBD-stik eller app, producentens data fra bilens indbyggede modem, takograf i førerhuset og tank- og ladekort med samlet faktura."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="240" y="78" width="20" height="6"/><rect class="tg-modul" x="268" y="140" width="16" height="10"/><rect class="tg-kasse" x="286" y="124" width="20" height="8"/><rect class="tg-kuffert" x="230" y="150" width="12" height="8"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="276" y1="145" x2="100" y2="46"/><circle cx="276" cy="145" r="3"/><text class="tg-call__navn" x="5" y="24">GPS og kørebog</text><text class="tg-call__under" x="5" y="38">fast boks, OBD-stik eller app</text></g><g class="tg-call"><line x1="250" y1="81" x2="330" y2="46"/><circle cx="250" cy="81" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Producentens data</text><text class="tg-call__under" x="395" y="38" text-anchor="end">bilens indbyggede modem</text></g><g class="tg-call"><line x1="296" y1="128" x2="345" y2="222"/><circle cx="296" cy="128" r="3"/><text class="tg-call__navn" x="395" y="236" text-anchor="end">Takograf</text><text class="tg-call__under" x="395" y="250" text-anchor="end">international godskørsel</text></g><g class="tg-call"><line x1="236" y1="154" x2="150" y2="224"/><circle cx="236" cy="154" r="3"/><text class="tg-call__navn" x="5" y="236">Tank- og ladekort</text><text class="tg-call__under" x="5" y="250">én samlet faktura</text></g></svg>`,
          tekst: `Skematisk. Værktøjerne på de syv sider i emnet. Kilder: ${a(GSM, "GSM Teknik")} og ${a(VWFID, "Volkswagen: Fleet Interface Data")}, set den 4. oktober 2026, og ${a(FSTYR, "Færdselsstyrelsen")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det kræver reglerne",
        tekst: [
          `Ingen regel kræver, at alle firmabiler har kørebog eller GPS. Kravene opstår, når virksomheden eller medarbejderen skal dokumentere noget. Det kan være skattefri godtgørelse, at en firmabil ikke bruges privat, eller at en mandskabsvogn kører efter reglerne. Oversigten viser, hvem der stiller kravet.`
        ],
        punkter: [
          `<strong>Kørselsgodtgørelse i egen bil.</strong> Skattefri godtgørelse kræver et kørselsregnskab med formål, mål og delmål, dato og kilometer, og arbejdsgiveren skal kontrollere det synligt, fx med underskrift eller stempel. Ellers er godtgørelsen A-indkomst.`,
          `<strong>Firmabil ved bopælen.</strong> Holder bilen ved hjemmet uden for arbejdstid, formodes den brugt privat. Ifølge Den juridiske vejledning føres beviset i praksis kun med et kørselsregnskab, ført dagligt og ikke rekonstrueret bagefter.`,
          `<strong>Varebil på gule plader.</strong> Er der trukket moms, og betales der ikke privatbenyttelsesafgift, lægger Skattestyrelsen som udgangspunkt til grund, at bilen kun bruges erhvervsmæssigt. Reglerne for kørsel hjem står i <a href="/haandbogen/tage-varebilen-med-hjem/">tage varebilen med hjem</a>.`,
          `<strong>Mandskabsvogne og vagtordninger.</strong> Motorstyrelsen skriver, at dokumentation for lovlig kørsel i en mandskabsvogn fx kan være GPS-oplysninger om den kørte rute. Ved vagtordning skal virksomheden kunne dokumentere, at bilen er brugt til de enkelte vagter.`,
          `<strong>GPS og medarbejdere.</strong> Datatilsynet kræver et sagligt formål, information til de ansatte senest når overvågningen begynder, og mulighed for at slukke, hvis bilen må bruges privat.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Situation", "Krav til dokumentation", "Myndighed"],
          raekker: [
            ["Kørselsgodtgørelse i egen bil", "Kørselsregnskab, kontrolleret af arbejdsgiveren", "Skattestyrelsen"],
            ["Firmabil, der holder ved bopælen", "Kørselsregnskab, ført dagligt", "Skattestyrelsen"],
            ["Varebil på gule plader med momsfradrag og uden privatbenyttelsesafgift", "Ingen kørebog som udgangspunkt", "Skattestyrelsen"],
            ["Mandskabsvogn ved kontrol", "Fx GPS-oplysninger om ruten", "Motorstyrelsen"],
            ["Varebil ved vagtordning", "Bevis for brug til de enkelte vagter", "Motorstyrelsen"],
            ["GPS i firmabilen", "Information til de ansatte senest ved start", "Datatilsynet"]
          ],
          note: `Kilder: ${a(SKAT, "Skattestyrelsen")}, ${a(JV11, "Den juridiske vejledning C.A.5.14.1.11")}, ${a(JV12, "C.A.5.14.1.12")}, ${a(MST, "Motorstyrelsen: Regler for gule plader")} og ${a(DT, "Datatilsynet: Kontrol af medarbejdere")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kørselsregnskab efter skema",
        tekst: [
          `Skattestyrelsen kræver ingen bestemt blanket, men har et skema til kørselsafregning med felterne for kørselsgodtgørelse. Du kan se felterne og underskrifterne under <a href="/til-varebilen/flaadestyring/koerselsregnskab-skabelon/">kørselsregnskab: skabelon</a>.`,
          `Seks oplysninger skal stå på bilaget og være kontrolleret af arbejdsgiveren. Det er formålet, målet med eventuelle delmål, datoen, antal kilometer, beregningen efter satserne og at kørslen er sket i medarbejderens egen bil. Kilometersatsen nedsættes ved kørsel over 20.000 km i kalenderåret, og grænsen gælder for den enkelte arbejdsgiver.`,
          `Er der tvivl om kørslen mellem hjem og arbejde efter 60-dages-reglen, kan Skatteforvaltningen give pålæg om kørselsregnskab i op til 12 måneder. Hvordan en elektronisk kørebog dækker kravene, står i <a href="/til-varebilen/flaadestyring/elektronisk-koerebog/">elektronisk kørebog</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Oplysninger på bilaget", "6", "kontrolleret af arbejdsgiveren"],
            ["Lavere sats over", "20.000", "km i kalenderåret"],
            ["Pålæg om kørselsregnskab", "12", "måneder højst"]
          ],
          note: `Kilder: ${a(SKAT, "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse")} og ${a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2")}, set den 7. oktober 2026. Satserne står hos Skattestyrelsen.`
        }
      },
      {
        overskrift: "Priser i overblik",
        tekst: [
          `Priserne er vejledende fra danske forhandlere, set den 4. oktober 2026. Hardware og abonnement er adskilt, og flere af abonnementerne har 12 måneders binding. Driversnote, GSM Teknik, GPS-Tracker.dk og Fleet Complete oplyser abonnementet uden moms, og Meta Trak oplyser sine priser med moms.`,
          `Den billigste løsning er en app, fordi der ikke skal købes en enhed. En fast boks koster mere at komme i gang med end en app, men registrerer alle ture, også når telefonen ligger hjemme. Et flådestyringssystem rummer flere moduler end en kørebog, fx service og udgifter.`
        ],
        tabel: {
          kolonner: ["Løsning", "Eksempel", "Hardware", "Abonnement pr. md."],
          raekker: [
            ["Kørebogs-app", "Driversnote Pro", "iBeacon med ved årsabonnement", "85 kr. + moms"],
            ["GPS-kørebog, fastmonteret", "GSM Teknik, Teltonika FMC130", "1.595 kr. med moms og 12 mdr. abonnement", "40 kr. + moms"],
            ["GPS-kørebog, OBD", "Meta Trak VL512", "699 kr. med moms", "129 kr. med moms"],
            ["GPS-sporing", "GPS-Tracker.dk Economic", "Købes særskilt", "20 kr. + moms"],
            ["Sporing med kørebog", "GPS-Tracker.dk LogPRO", "Købes særskilt", "70 kr. + moms"],
            ["Flådestyringssystem", "Fleet Complete Basic–Enterprise", "OBD eller fast montering", "89–119 kr. + moms"]
          ],
          note: `Kilder: ${a(DN, "Driversnote")}, ${a(GSM, "GSM Teknik")}, ${a(MT, "Meta Trak")}, ${a(GPST, "GPS-Tracker.dk")} og ${a(FC, "Fleet Complete")}, set den 4. oktober 2026. Montering er ikke med i priserne.`
        },
        figur: {
          type: "soejler",
          enhed: "kr. pr. md.",
          data: [
            ["GPS-Tracker.dk Economic", 20, "sporing, + moms"],
            ["GSM Teknik", 40, "fast GPS-kørebog, + moms"],
            ["GPS-Tracker.dk LogPRO", 70, "sporing og kørebog, + moms"],
            ["Driversnote Pro", 85, "app, + moms"],
            ["Fleet Complete Basic", 89, "flådesystem, + moms"],
            ["Fleet Complete Enterprise", 119, "flådesystem, + moms"],
            ["Meta Trak", 129, "OBD-kørebog, med moms"]
          ],
          note: `Abonnementet pr. bil uden hardware og montering. Kilder: ${a(DN, "Driversnote")}, ${a(GSM, "GSM Teknik")}, ${a(MT, "Meta Trak")}, ${a(GPST, "GPS-Tracker.dk")} og ${a(FC, "Fleet Complete")}, set den 4. oktober 2026.`
        },
        efter: [
          `Flere systemer og prismodeller står på <a href="/til-varebilen/flaadestyring/flaadestyringssystem/">flådestyringssystem</a>.`
        ]
      },
      {
        overskrift: "OBD, cigarstik, fast montering eller app",
        tekst: [
          `Hvor GPS'en sidder, afgør, om den kan flyttes til næste bil, og om der skal en montør til. Det betyder noget for en leaset varebil, der bliver skiftet ud efter et par år.`
        ],
        punkter: [
          `<strong>OBD-tracker.</strong> Sættes i bilens diagnosestik. Ingen værkstedsmontering, og den kan flyttes med til næste bil.`,
          `<strong>Cigarstik.</strong> Sættes i 12 V-udtaget.`,
          `<strong>Fastmonteret.</strong> Tilsluttes bilens strømforsyning. Meta Trak sælger en fastmonteret model, de kalder forsikringsgodkendt.`,
          `<strong>App.</strong> Telefonens GPS registrerer turene. Driversnote bruger en lille iBeacon i bilen, så turen starter automatisk.`
        ]
      },
      {
        overskrift: "Tre veje for data ud af bilen",
        tekst: [
          `Data fra bilen kan nå frem til virksomheden på tre måder. To af dem kræver en enhed i bilen, mens den tredje bruger bilens eget modem.`
        ],
        punkter: [
          `<strong>OBD-tracker.</strong> Den sidder i diagnosestikket og sender selv data over mobilnettet.`,
          `<strong>Fastmonteret boks.</strong> Boksen tilsluttes bilens strøm. GSM Tekniks kørebog monteres med to ledninger, stel og 12 V.`,
          `<strong>Indbygget modem.</strong> Producenten henter data fra bilen, og flådesystemet får dem via en API. Volkswagens Fleet Interface Data leverer fx data direkte til eksisterende flådesystemer.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Tre veje for data ud af varebilen: OBD-tracker, fastmonteret boks og bilens indbyggede modem"><defs><marker id="pil-emne-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect x="10" y="55" width="175" height="110" rx="8" class="tg-rum"/><circle cx="50" cy="168" r="12" class="tg-kasse"/><circle cx="150" cy="168" r="12" class="tg-kasse"/><rect x="22" y="72" width="40" height="18" class="tg-kasse"/><text x="70" y="85">OBD-tracker</text><rect x="22" y="102" width="40" height="18" class="tg-kasse"/><text x="70" y="115">Fast boks</text><rect x="22" y="132" width="40" height="18" class="tg-modul"/><text x="70" y="145">Modem</text><rect x="245" y="65" width="70" height="30" class="tg-kasse"/><text x="280" y="84" text-anchor="middle">Platform</text><rect x="245" y="135" width="70" height="30" class="tg-kasse"/><text x="280" y="154" text-anchor="middle">Producent</text><rect x="330" y="65" width="65" height="30" class="tg-modul"/><text x="362" y="84" text-anchor="middle">Regnskab</text><g class="tg-maal"><line x1="150" y1="81" x2="243" y2="78" marker-end="url(#pil-emne-1)"/><line x1="140" y1="111" x2="243" y2="86" marker-end="url(#pil-emne-1)"/><line x1="120" y1="141" x2="243" y2="150" marker-end="url(#pil-emne-1)"/><line x1="280" y1="135" x2="280" y2="97" marker-end="url(#pil-emne-1)"/><line x1="315" y1="80" x2="328" y2="80" marker-end="url(#pil-emne-1)"/></g><text x="286" y="120">API</text><text x="10" y="210" class="tg-lille">Tracker sender selv. Modemdata går via producenten.</text></svg>`,
          tekst: `Skematisk. Tre veje for data ud af varebilen. Kilder: ${a(GSM, "GSM Teknik")} og ${a(VWFID, "Volkswagen")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Data fra bilen selv",
        tekst: [
          `Et system med CAN-bus læser kilometertæller, brændstofniveau og -forbrug og motortimer direkte fra bilens computer, oplyser Mapon. CAN-bussen er bilens interne datanet, hvor styreenhederne taler sammen.`,
          `Nogle producenter leverer data uden ekstra hardware. Webfleet henter fx ladetid, rækkevidde og batteristatus fra Mercedes-Benz' elvarebiler alene ud fra stelnummeret. For en flåde med mange elvarebiler kan det spare monteringen af en boks i hver bil.`
        ]
      },
      {
        overskrift: "Producenternes egne løsninger",
        tekst: [
          `Flere bilproducenter sælger adgang til de data, bilen selv sender. Løsningerne gælder kun bestemte mærker og årgange, og flere af dem forudsætter, at bilen har indbygget onlineforbindelse.`,
          `ConnectedFleet fra Volkswagen er gratis, når bilerne serviceres på et autoriseret værksted i VW-koncernen, og én bil er nok. Fleet Interface Data sælges som datapakker efter aftale. På Kia PV5 Cargo er Kia Connect med navigation og app inkluderet i 7 år, men prislisten nævner ikke adgang for et flådesystem.`
        ],
        tabel: {
          kolonner: ["Løsning", "Biler", "Hardware"],
          raekker: [
            ["VW ConnectedFleet", "Alle mærker fra efter 2010", "Dongle bag instrumentbrættet"],
            ["VW Fleet Interface Data", "VW Connect, We Connect og OCU Gen. 3", "Indbygget"],
            ["Ford Pro Telematics", "Vognparker med mindst fem Ford-erhvervsbiler med FordPass Connect", "Indbygget (FordPass Connect)"],
            ["Webfleet OEM.connect", "Mercedes-Benz el-varebiler", "Ingen, kun stelnummer"],
            ["Kia Connect", "Kia PV5 Cargo (navigation og app)", "Indbygget"]
          ],
          note: `Kilder: ${a(VWCF, "Volkswagen ConnectedFleet")}, ${a(VWFID, "Fleet Interface Data")}, ${a(FORD, "Ford: Store vognparker")}, ${a(WF, "IT Supply Chain om Webfleet")} og ${a(KIA, "Kias prisliste")}, set den 4. oktober 2026.`
        },
        figur: {
          type: "noegletal",
          data: [
            ["ConnectedFleet: biler fra", "2010", ""],
            ["Ford Pro Telematics: vognpark fra", "5", "biler"],
            ["Kia Connect inkluderet", "7", "år"]
          ],
          note: `Kilder: ${a(VWCF, "Volkswagen")}, ${a(FORD, "Ford: Store vognparker")} og ${a(KIA, "Kia")}, set den 4. oktober 2026.`
        },
        efter: [
          `Ford Pro samler også data fra Fords varebiler fra 2019 og frem med indbygget modem (${a(FORDPR, "Ford, maj 2022")}). Du kan læse mere om hver løsning under <a href="/til-varebilen/flaadestyring/telematik-data-fra-producenten/">telematik fra producenten</a>.`
        ]
      },
      {
        overskrift: "GPS og medarbejderne",
        tekst: [
          `Datatilsynet nævner ruteplanlægning, overvågning af transport af varer og de ansattes sikkerhed som berettigede formål. Data indsamlet til ét formål må ikke bruges til at overvåge chaufførens adfærd eller opholdssted. Se <a href="/til-varebilen/flaadestyring/gps-sporing-af-medarbejdere/">GPS-sporing af medarbejdere</a>.`,
          `Gælder DA og LO's aftale om kontrolforanstaltninger, skal medarbejderne have besked senest 6 uger, før GPS'en tages i brug. Efter aftalen kan den enkelte lønmodtager ikke give samtykke til kontrol, så en underskrift fra medarbejderen erstatter ikke varslet.`,
          `Reglerne gælder også for en GPS-kørebog og for data fra bilens eget modem, når arbejdsgiveren bruger dem til at følge kørslen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Datatilsynets fire krav til GPS i firmabiler, nummereret fra et til fire: sagligt formål, information senest ved start, slukning ved privat kørsel og ingen nye formål uden besked."><g class="tg-nr"><circle cx="16" cy="28" r="12"/><text x="16" y="32" text-anchor="middle">1</text></g><text class="tg-fremhaev" x="40" y="24">Sagligt formål</text><text x="40" y="40">fx ruteplanlægning eller transport af varer</text><g class="tg-nr"><circle cx="16" cy="76" r="12"/><text x="16" y="80" text-anchor="middle">2</text></g><text class="tg-fremhaev" x="40" y="72">Information senest ved start</text><text x="40" y="88">formål, omfang og brug af data</text><g class="tg-nr"><circle cx="16" cy="124" r="12"/><text x="16" y="128" text-anchor="middle">3</text></g><text class="tg-fremhaev" x="40" y="120">Slukning ved privat kørsel</text><text x="40" y="136">når bilen må bruges privat</text><g class="tg-nr"><circle cx="16" cy="172" r="12"/><text x="16" y="176" text-anchor="middle">4</text></g><text class="tg-fremhaev" x="40" y="168">Ingen nye formål uden besked</text><text x="40" y="184">fx ikke kontrol af chaufførens adfærd</text></svg>`,
          tekst: `Skematisk. Kilde: ${a(DT, "Datatilsynet: Kontrol af medarbejdere")}, afsnittet om GPS-overvågning af køretøjer, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: ${a(DT, "Datatilsynet: Kontrol af medarbejdere")} og ${a(DALO, "DA og LO: Aftale om kontrolforanstaltninger")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Tank- og ladekort",
        tekst: [
          `Kædernes erhvervskort samler tankning, vask og opladning på én faktura. Uno-X Firmakort er gratis at bestille og giver op til 40 dages rentefri kredit. Hos Circle K koster en faktura med brev 19 kr., mens en faktura på e-mail er gratis.`,
          `Til elvarebiler findes ladebrikker, der følger bilen, og abonnementer med fri opladning. Se <a href="/til-varebilen/flaadestyring/braendstofkort-og-ladekort/">brændstofkort og ladekort</a>. Ladestandere på adressen og hjemme hos medarbejderen står under <a href="/til-varebilen/el-abonnement/">el-abonnement</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Diesel, opladning og vask betales med samme erhvervskort, og virksomheden får én samlet faktura."><defs><marker id="pil-emne-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="0" y="14" width="100" height="30"/><text x="50" y="33" text-anchor="middle">Diesel</text><rect class="tg-kasse" x="0" y="64" width="100" height="30"/><text x="50" y="83" text-anchor="middle">Opladning</text><rect class="tg-kasse" x="0" y="114" width="100" height="30"/><text x="50" y="133" text-anchor="middle">Vask</text><line class="tg-skillevaeg" x1="100" y1="29" x2="150" y2="68"/><line class="tg-skillevaeg" x1="100" y1="79" x2="150" y2="79"/><line class="tg-skillevaeg" x1="100" y1="129" x2="150" y2="90"/><rect class="tg-modul" x="150" y="54" width="104" height="50" rx="6"/><text class="tg-fremhaev" x="202" y="84" text-anchor="middle">Erhvervskort</text><line class="tg-gulvlinje" x1="254" y1="79" x2="286" y2="79" marker-end="url(#pil-emne-2)"/><rect class="tg-kasse" x="290" y="59" width="108" height="40"/><text x="344" y="83" text-anchor="middle">Én faktura</text><text class="tg-lille" x="0" y="164">ET KORT PR. BIL</text></svg>`,
          tekst: `Skematisk. Kilder: ${a(UNOX, "Uno-X: Firmakort")} og ${a(CK, "Circle K: Vilkår for EUROPE Card")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Takograf på varebilen",
        tekst: [
          `Fra 1. juli 2026 skal varebiler over 2,5 tons i international godskørsel have takograf. Kravet gælder ved godskørsel for fremmed regning og ved kørsel for virksomhedens eller førerens egen regning, når transporten er førerens hovedaktivitet. Bilerne skal samtidig følge reglerne om køre- og hviletid.`,
          `Hvem der er omfattet, står i <a href="/haandbogen/takograf-paa-varebil/">skal din varebil have takograf</a>. Montering, pris og kort står i <a href="/til-varebilen/flaadestyring/takograf-udstyr/">takograf-udstyr</a>. Færdselsstyrelsen tager 350 kr. for hvert takografkort, både førerkort og virksomhedskort.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Krav fra", "1. juli 2026", "international godskørsel"],
            ["Varebiler over", "2,5", "tons"],
            ["Takografkort", "350", "kr. pr. kort"]
          ],
          note: `Kilder: ${a(FSTYR, "Færdselsstyrelsen: Nye regler for varebiler")} og ${a(FSTYRK, "Færdselsstyrelsen: Ansøg om takografkort")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kørebog og privat kørsel på gule plader",
        tekst: [
          `En kørebog med privat-knap gør ikke privat kørsel lovlig i en gulpladebil. Privat kørsel kræver <a href="/haandbogen/dagsbevis-varebil/">dagsbevis</a> eller <a href="/haandbogen/papegoejeplader/">papegøjeplader</a>. Kørebogen dokumenterer, hvordan bilen er brugt.`,
          `Datatilsynets krav om at kunne slukke GPS'en gælder, når privat kørsel er tilladt. I en varebil på gule plader uden dagsbevis er privat kørsel ikke tilladt. Reglerne for mandskabsvogne står i <a href="/haandbogen/mandskabsvogn-regler/">mandskabsvogn: regler</a>.`
        ]
      },
      {
        overskrift: "Dataforordningen",
        tekst: [
          `EU's dataforordning gælder fra 12. september 2025. Den giver brugere, både forbrugere og virksomheder, ret til at få adgang til de data, som deres forbundne produkter, fx biler, genererer. Forordningen skal også sikre, at produkterne er designet til datadeling, skriver ${a(EU, "Europa-Kommissionen")}.`,
          `For en flåde betyder det, at virksomheden som bruger af bilerne har ret til at få adgang til de data, bilerne producerer. Hvordan producenterne giver adgang i praksis, står på siden om <a href="/til-varebilen/flaadestyring/telematik-data-fra-producenten/">telematik fra producenten</a>.`
        ]
      },
      {
        overskrift: "Nye regler og tilsyn",
        tekst: [
          `Flere datoer i 2025 og 2026 har betydning for udstyret i flåden. Overvågning af ansatte er et af Datatilsynets fokusområder i 2026, og tilsynet gennemfører målrettede tilsyn med arbejdsgiveres kontrol af ansatte.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["2024", "Datatilsynet kortlægger overvågning af ansatte."],
            ["12. september 2025", "EU's dataforordning gælder. Brugere får ret til data fra forbundne produkter, fx biler."],
            ["2026", "Datatilsynet gennemfører målrettede tilsyn med arbejdsgiveres kontrol af ansatte."],
            ["1. juli 2026", "Varebiler over 2,5 tons i international godskørsel skal have takograf."]
          ],
          note: `Kilder: ${a(DTF, "Datatilsynet: Særlige fokusområder i 2026")}, ${a(EU, "Europa-Kommissionen: Dataforordningen")} og ${a(FSTYR, "Færdselsstyrelsen: Nye regler for varebiler")}, set den 4. og 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fra behov til system",
        tekst: [
          `Valget af udstyr begynder med formålet. En virksomhed, der kun skal bruge en kørebog til kørselsgodtgørelse, har ikke brug for de samme moduler som en flåde, der skal planlægge ruter og holde styr på service.`,
          `Formålet styrer også reglerne. Det skal stå i informationen til medarbejderne, og data må ikke senere bruges til noget uforeneligt med det. Trinene her følger de spørgsmål, forhandlerne skal have svar på.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Formålet", "Kørebog, ruteplanlægning, service eller tyverisikring. Formålet afgør både systemet og reglerne for GPS."],
            ["Bilerne", "Mærker, årgange og elbiler. Nogle biler kan levere data uden en boks."],
            ["Monteringen", "App, OBD-stik eller fast boks. En OBD-enhed kan flyttes til næste bil."],
            ["Medarbejderne", "Information senest ved start og eventuelt 6 ugers varsel efter DA og LO's aftale."],
            ["Data videre", "Rapporter til løn og bogføring eller en API til virksomhedens egne systemer."]
          ]
        }
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så kan løsningen passe til flåden og til reglerne.",
    spoergsmaal: [
      "Antal biler, mærker og årgange, og om nogle er elbiler.",
      "Om bilerne må bruges privat, så systemet skal kunne slukkes eller skifte til privat.",
      "Hvad data skal bruges til: kørebog, ruteplanlægning, service eller tyverisikring.",
      "Om enheden skal kunne flyttes til næste bil, når leasingaftalen udløber.",
      "Hvilke systemer data skal over i: løn, bogføring eller ordrestyring.",
      "Om nogle biler kører international godskørsel og skal have takograf.",
      "Om der er en kollektiv aftale om kontrolforanstaltninger i virksomheden."
    ],
    faq: [
      ["Hvad koster en elektronisk kørebog?", "En app er gratis til rapporter med op til 15 ture om måneden og koster ellers 85 kr. om måneden uden moms (Driversnote). En fastmonteret GPS-kørebog koster 1.595 kr. med moms og 12 måneders abonnement og derefter 40 kr. om måneden + moms (GSM Teknik). Priserne er set den 4. oktober 2026."],
      ["Godkender Skattestyrelsen elektroniske kørebøger?", "Skattestyrelsens sider om kørselsgodtgørelse nævner ikke bestemte systemer. Kravene gælder indholdet: formål, mål, dato, kilometer og beregning."],
      ["Må arbejdsgiveren GPS-spore firmabilen?", "Ja, med et sagligt formål. Datatilsynet kræver, at de ansatte får besked senest når overvågningen begynder, og at GPS'en kan slukkes, hvis bilen må bruges privat."],
      ["Hvad er forskellen på GPS-tracker og flådestyringssystem?", "En tracker viser position og ture. Et flådestyringssystem lægger kørebog, service, skader, brændstof og data fra bilens CAN-bus oveni."],
      ["Skal en varebil på gule plader have kørebog?", "Der er ikke et generelt krav. Når der er trukket moms, og der ikke betales privatbenyttelsesafgift, skal skattemyndighederne som udgangspunkt lægge til grund, at bilen kun bruges erhvervsmæssigt. Ifølge Den juridiske vejledning gælder de bevis- og dokumentationskrav, herunder kørebøger, der er udviklet for fri bil, derfor ikke for sådanne biler."],
      ["Kan bilproducenten levere flådedata uden ekstra boks?", "Ja, for flere mærker. Volkswagens Fleet Interface Data leverer data fra biler med indbygget onlineforbindelse via en API, Ford Pro Telematics bruger FordPass Connect i vognparker med mindst fem Ford-erhvervsbiler, og Webfleet henter data fra Mercedes-Benz el-varebiler ud fra stelnummeret."],
      ["Er Volkswagens ConnectedFleet gratis?", "Ja, når bilerne serviceres på et autoriseret værksted i VW-koncernen. Det gælder alle bilmærker fra efter 2010, og én bil er nok."],
      ["Hvor lang tid før skal medarbejderne have besked om GPS?", "Datatilsynet kræver information senest, når GPS'en tages i brug. Gælder DA og LO's aftale om kontrolforanstaltninger, skal medarbejderne underrettes senest 6 uger før."],
      ["Hvad koster et takografkort?", "Færdselsstyrelsen tager 350 kr. for et førerkort og 350 kr. for et virksomhedskort."]
    ],
    kilder: [
      { navn: "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse", url: SKAT, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: C.A.5.14.1.11 Vurderingen af, hvornår en bil er til rådighed for privat kørsel", url: JV11, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: C.A.5.14.1.12 Varebil på gule plader", url: JV12, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: C.A.4.3.3.3.2 Godtgørelse for erhvervsmæssig befordring", url: JVB, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Regler for gule plader", url: MST, dato: "2026-10-07" },
      { navn: "Datatilsynet: Kontrol af medarbejdere (november 2023)", url: DT, dato: "2026-10-07" },
      { navn: "Datatilsynet: Særlige fokusområder for tilsynsaktiviteter i 2026", url: DTF, dato: "2026-10-07" },
      { navn: "DA og LO: Aftale om kontrolforanstaltninger af 27. oktober 2006 (pdf hos 3F)", url: DALO, dato: "2026-10-07" },
      { navn: "Driversnote: Priser", url: DN, dato: "2026-10-04" },
      { navn: "GSM Teknik: Kørebog med knap, Teltonika FMC130", url: GSM, dato: "2026-10-04" },
      { navn: "Meta Trak: Elektronisk kørebog", url: MT, dato: "2026-10-04" },
      { navn: "GPS-Tracker.dk: Priser på abonnementer", url: GPST, dato: "2026-10-04" },
      { navn: "Fleet Complete: Flådestyring", url: FC, dato: "2026-10-04" },
      { navn: "Mapon: Hvad er CAN bus data, og hvordan forbedrer det flådestyring", url: MAPON, dato: "2026-10-04" },
      { navn: "Circle K: Vilkår og betingelser for EUROPE Card (gældende fra 1. september 2025)", url: CK, dato: "2026-10-04" },
      { navn: "Uno-X: Uno-X Firmakort", url: UNOX, dato: "2026-10-04" },
      { navn: "Volkswagen: Fleet Interface Data", url: VWFID, dato: "2026-10-04" },
      { navn: "Volkswagen: ConnectedFleet", url: VWCF, dato: "2026-10-04" },
      { navn: "Ford: Store vognparker (Ford Pro Telematics)", url: FORD, dato: "2026-10-05" },
      { navn: "Ford: Ford Pro øger produktiviteten for Europas varebilsflåder (pressemeddelelse 4. maj 2022)", url: FORDPR, dato: "2026-10-04" },
      { navn: "IT Supply Chain: Webfleet extends OEM.connect programme to support electric vehicles (26.09.2023)", url: WF, dato: "2026-10-04" },
      { navn: "Kia: Priser PV5 Cargo L2H1", url: KIA, dato: "2026-10-04" },
      { navn: "Europa-Kommissionen: Dataforordningen", url: EU, dato: "2026-10-04" },
      { navn: "Færdselsstyrelsen: Nye regler for varebiler (juli 2026)", url: FSTYR, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Ansøg om takografkort", url: FSTYRK, dato: "2026-10-07" }
    ],
    cta_saetning: "Skal bilen leveres med kørebog eller GPS, så skriv det, så kommer det med i forespørgslen."
  },
  nye_fakta: [
    ["Skattestyrelsen: seks oplysninger skal både fremgå af arbejdsgiverens bilag og være synligt kontrolleret: kørslens formål, kørslens mål med eventuelle delmål, dato, antal kørte kilometer, beregning efter satser og at kørslen er i medarbejderens eget køretøj.", SKAT],
    ["Grænsen på 20.000 km gælder kun for den enkelte arbejdsgiver.", JVB],
    ["Skatteforvaltningen kan med fremadrettet virkning i op til 12 måneder give pålæg om at dokumentere ved et kørselsregnskab, at der er tale om erhvervsmæssig befordring efter 60-dages-reglen (LL § 9 B, stk. 3).", JVB],
    ["Driversnote, GSM Teknik, GPS-Tracker.dk og Fleet Complete oplyser abonnementspriser ekskl. moms; Meta Trak oplyser priser inkl. moms.", GPST],
    ["DA/LO-aftalen om kontrolforanstaltninger: underretning senest 6 uger før iværksættelse (punkt 2); den enkelte lønmodtager kan ikke meddele samtykke til kontrolforanstaltninger (punkt 3).", DALO],
    ["Fra 1. juli 2026 skal varebiler over 2,5 ton i international varebilskørsel have takograf og overholde køre- og hviletidsreglerne; det gælder godskørsel for fremmed regning og kørsel for virksomhedens eller førerens regning, når transporten er førerens hovedaktivitet.", FSTYR],
    ["Færdselsstyrelsen: førerkort, virksomhedskort og værkstedskort koster 350 kr. hver.", FSTYRK],
    ["Datatilsynet kortlagde overvågning af ansatte i 2024 og gennemfører i 2026 målrettede tilsyn med arbejdsgiveres behandling af personoplysninger ved kontrol af ansatte.", DTF]
  ]
};
