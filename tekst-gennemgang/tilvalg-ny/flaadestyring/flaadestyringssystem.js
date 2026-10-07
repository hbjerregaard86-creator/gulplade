// Underside /til-varebilen/flaadestyring/flaadestyringssystem/ (07-10-2026)
var GPST = `https://gps-tracker.dk/priser/`;
var FC = `https://fleetcomplete.dk/flaadestyring/`;
var DIIMS = `https://www.mydiims.dk/flaadestyring`;
var ORDRE = `https://ordrestyring.dk/vehicle-og-tooltracker/`;
var UPT = `https://uptimus.dk/priser/`;
var QANTO = `https://www.qantofleet.dk/`;
var MAPON1 = `https://help.mapon.com/da/articles/195131-hvad-er-can-bus-data-og-hvordan-forbedrer-det-fladestyring`;
var MAPON2 = `https://help.mapon.com/da/articles/174310-hvorfor-er-der-forskel-pa-afstandsdata-mellem-kilometertaeller-og-gps`;
var WF = `https://itsupplychain.com/webfleet-extends-oem-connect-programme-to-support-electric-vehicles/`;
var FORD = `https://www.mynewsdesk.com/dk/ford-motor-company/pressreleases/ford-pro-oeger-produktiviteten-for-europas-varebilsflaader-3179178`;
var VWFID = `https://www.volkswagen.dk/da/vaerksted/digitale-ekstrafunktioner/volkswagen-fleet-interface.html`;
var DT = `https://cdn.datatilsynet.dk/datatilsynet/Media/638348919997326341/Kontrol%20af%20medarbejdere.pdf`;
var DALO = `https://www.3f.dk/-/media/files/artikler/dit-arbejdsliv/aftaleomkontrolforanstaltninger.pdf`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "flaadestyring/flaadestyringssystem",
  side: {
    slug: "flaadestyringssystem",
    navn: "Flådestyringssystem",
    titel: "Flådestyringssystem til varebiler: pris",
    kort: `Position, kørebog, service, skader, CAN-bus og elbil-data samlet ét sted. Danske forhandlere, pakker og priser pr. bil pr. måned.`,
    beskrivelse: `Flådestyringssystem til varebiler: position, kørebog, service, CAN-bus og elbil-data. Priser fra 20 kr. pr. bil om måneden hos seks danske forhandlere.`,
    manchet: `Et flådestyringssystem samler bilernes position, kørsel, service og udgifter ét sted. Prisen er typisk et abonnement pr. bil pr. måned plus en GPS-enhed, der købes én gang. Her kan du se funktionerne, pakkerne og priserne hos danske forhandlere, og hvor data kommer fra i bilen.`,
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["Abonnement", "fra 20 kr. pr. md.", "+ moms for ren positionsvisning"],
        ["Hardware", "fra 399 kr.", "hos Ordrestyring, moms ikke angivet"],
        ["Opdatering", "ca. 10 sek.", "i GPS-Tracker.dk's Standard-pakke"],
        ["Binding", "12 mdr.", "hos GPS-Tracker.dk"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det kan et flådestyringssystem",
        tekst: [
          `Et flådestyringssystem er en platform på nettet og i en app, hvor virksomheden ser alle sine biler samlet. Data kommer fra en GPS-enhed i hver bil eller fra bilens eget modem. Jo dyrere pakken er, jo flere moduler følger med.`,
          `Har virksomheden fem varebiler, kan position og en automatisk kørebog være nok. Med 20 biler kan modulerne til service, udgifter og skader få større betydning, fordi bilerne skal til service og syn på hver sit tidspunkt.`
        ],
        punkter: [
          `<strong>Position.</strong> Bilerne på et kort, live eller med få minutters forsinkelse.`,
          `<strong>Kørselsdata.</strong> Ture, stop, rapporter og elektronisk kørebog.`,
          `<strong>Service.</strong> Påmindelser om service og syn og fejlkoder fra bilen.`,
          `<strong>Skader.</strong> Enkelte systemer har digitale skadesinspektioner.`,
          `<strong>CAN-bus.</strong> Km-stand, brændstof og motordata direkte fra bilens computer.`,
          `<strong>Elbil-data.</strong> Batteriniveau, rækkevidde og ladestatus.`,
          `<strong>Værktøj.</strong> Små trackere på maskiner og værktøj i samme system.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Flådesystemet i midten med otte moduler omkring: position, kørebog, service, elbil, udgifter, skader, CAN-bus og værktøj."><rect class="tg-kasse" x="10" y="20" width="100" height="32"/><text x="60" y="40" text-anchor="middle">Position</text><rect class="tg-kasse" x="150" y="20" width="100" height="32"/><text x="200" y="40" text-anchor="middle">Kørebog</text><rect class="tg-kasse" x="290" y="20" width="100" height="32"/><text x="340" y="40" text-anchor="middle">Service</text><rect class="tg-kasse" x="10" y="99" width="100" height="32"/><text x="60" y="119" text-anchor="middle">Elbil</text><rect class="tg-kasse" x="290" y="99" width="100" height="32"/><text x="340" y="119" text-anchor="middle">Udgifter</text><rect class="tg-kasse" x="10" y="178" width="100" height="32"/><text x="60" y="198" text-anchor="middle">Skader</text><rect class="tg-kasse" x="150" y="178" width="100" height="32"/><text x="200" y="198" text-anchor="middle">CAN-bus</text><rect class="tg-kasse" x="290" y="178" width="100" height="32"/><text x="340" y="198" text-anchor="middle">Værktøj</text><line class="tg-skillevaeg" x1="90" y1="52" x2="150" y2="96"/><line class="tg-skillevaeg" x1="200" y1="52" x2="200" y2="96"/><line class="tg-skillevaeg" x1="310" y1="52" x2="250" y2="96"/><line class="tg-skillevaeg" x1="110" y1="115" x2="140" y2="115"/><line class="tg-skillevaeg" x1="260" y1="115" x2="290" y2="115"/><line class="tg-skillevaeg" x1="90" y1="178" x2="150" y2="134"/><line class="tg-skillevaeg" x1="200" y1="134" x2="200" y2="178"/><line class="tg-skillevaeg" x1="310" y1="178" x2="250" y2="134"/><rect class="tg-modul" x="140" y="96" width="120" height="38"/><text class="tg-fremhaev" x="200" y="120" text-anchor="middle">Flådesystem</text></svg>`,
          tekst: `Skematisk. Modulerne, som de danske forhandlere nævner. Kilder: ${a(FC, "Fleet Complete")}, ${a(UPT, "Uptimus")}, ${a(ORDRE, "Ordrestyring")} og ${a(MAPON1, "Mapon")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tracker, kørebog eller flådesystem",
        tekst: [
          `En GPS-tracker viser position og ture. Et flådestyringssystem lægger kørebog, service, skader, brændstof og data fra bilens CAN-bus oveni. Forskellen ses tydeligt i pakkerne hos GPS-Tracker.dk.`,
          `Economic er enkel sporing med historik. Light lægger kørselsark og rapporter til, og Standard giver hurtigere opdatering, alarmer, geofence, brugerstyring og livstidsgaranti på trackeren. Et geofence er et virtuelt hegn på kortet, der giver besked, når en bil kører ind eller ud af et område.`,
          `Kørebogen findes i to udgaver. Den enkle kørebog i Light og Standard viser adresser, kilometer og køretider. LogPRO er et særskilt kørebogssystem med formål, godkendelser og kørselsgodtgørelse. Kravene til en kørebog står i <a href="/til-varebilen/flaadestyring/elektronisk-koerebog/">elektronisk kørebog</a>.`
        ],
        efter: [
          `Kilde: ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Danske forhandlere og priser",
        tekst: [
          `Priserne er vejledende og gælder pr. enhed pr. måned. GPS-Tracker.dk, DIIMS og Fleet Complete oplyser priserne uden moms. Ordrestyring og Uptimus skriver ikke, om momsen er med. Montering er ikke med i nogen af priserne.`,
          `Spændet er stort, fordi pakkerne indeholder meget forskelligt. Den billigste pakke viser kun positionen, mens de dyreste har kørebog, skadesinspektion og opgavestyring. Sammenlign derfor de moduler, du skal bruge, og ikke kun prisen.`
        ],
        tabel: {
          kolonner: ["Udbyder", "Pakke", "Abonnement pr. md.", "Hardware"],
          raekker: [
            ["GPS-Tracker.dk", "Economic, Light, Standard, LogPRO", "20–70 kr. + moms", "Købes særskilt"],
            ["DIIMS (SmartVan)", "Flådestyring", "79 kr. + moms", "799 kr. + moms"],
            ["Ordrestyring", "Vehicle", "89 kr. (moms ikke angivet)", "399 kr. (moms ikke angivet)"],
            ["Fleet Complete", "Basic, Professional, Enterprise", "89–119 kr. + moms", "OBD eller fast montering"],
            ["Uptimus", "Basic, Premium, Pro", "100–350 kr. (moms ikke angivet)", "Ingen boks, bilen tilmeldes med nummerplade eller stelnummer"],
            ["Qanto Fleet", "Light, Manager, Professionel (administration)", "Fra 7–17 kr. ved 199 køretøjer (moms ikke angivet)", "Ingen"]
          ],
          note: `Kilder: ${a(GPST, "GPS-Tracker.dk")}, ${a(DIIMS, "DIIMS")}, ${a(ORDRE, "Ordrestyring")}, ${a(FC, "Fleet Complete")}, ${a(UPT, "Uptimus")} og ${a(QANTO, "Qanto Fleet")}, set den 4. oktober 2026 og igen den 7. oktober 2026. Uptimus Basic er gratis for de to første biler. Fleet Complete viser Basic til både 89 og 92 kr. DIIMS oplyser, at der kan være tillæg for elbiler.`
        },
        figur: {
          type: "soejler",
          enhed: "kr. pr. bil pr. md.",
          data: [
            ["GPS-Tracker.dk Economic", 20, "+ moms"],
            ["GPS-Tracker.dk LogPRO", 70, "+ moms"],
            ["DIIMS", 79, "+ moms"],
            ["Ordrestyring Vehicle", 89, "moms ikke angivet"],
            ["Fleet Complete Professional", 99, "+ moms"],
            ["Fleet Complete Enterprise", 119, "+ moms"],
            ["Uptimus Premium", 250, "moms ikke angivet"],
            ["Uptimus Pro", 350, "moms ikke angivet"]
          ],
          note: `Abonnementet uden enhed og montering. Qanto Fleet er ikke med, fordi prisen pr. køretøj afhænger af flådens størrelse. Kilder: ${a(GPST, "GPS-Tracker.dk")}, ${a(DIIMS, "DIIMS")}, ${a(ORDRE, "Ordrestyring")}, ${a(FC, "Fleet Complete")} og ${a(UPT, "Uptimus")}, set den 7. oktober 2026.`
        },
        efter: [
          `Priserne er pr. enhed og uden montering. Ordrestyring leverer enhederne med en installationsguide.`
        ]
      },
      {
        overskrift: "Prismodellerne",
        tekst: [
          `De fleste forhandlere tager betaling på samme måde: en enhed pr. bil, der købes én gang, og et abonnement pr. enhed. Forskellene ligger i binding, opsigelse og i, hvad der følger med i abonnementet.`,
          `Hos GPS-Tracker.dk er SIM-kort, mobildata, opsætning og 12 måneders historik med i abonnementet. Hos Uptimus kan du opsige abonnementet når som helst, men du betaler for den løbende måned og en måned mere.`
        ],
        punkter: [
          `<strong>Pr. enhed pr. måned.</strong> Den almindelige model. Én GPS-enhed pr. bil.`,
          `<strong>Pakker.</strong> Mere opdatering, flere rapporter og flere moduler i de dyrere pakker.`,
          `<strong>Binding.</strong> GPS-Tracker.dk binder i 12 måneder, og Fleet Complete fakturerer årligt.`,
          `<strong>Mængde.</strong> Qanto Fleets pris pr. køretøj afhænger af flådens størrelse.`,
          `<strong>Hardware.</strong> Købes én gang, fra 399 kr. (moms ikke angivet) hos Ordrestyring og 799 kr. hos DIIMS.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Binding, GPS-Tracker.dk", 12, "måneder"],
            ["Hardware, Ordrestyring", "fra 399", "kr., moms ikke angivet"],
            ["Hardware, DIIMS", 799, "kr. + moms"]
          ],
          note: `Fleet Complete fakturerer årligt. Kilder: ${a(GPST, "GPS-Tracker.dk")}, ${a(ORDRE, "Ordrestyring")}, ${a(DIIMS, "DIIMS")} og ${a(FC, "Fleet Complete")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: ${a(GPST, "GPS-Tracker.dk")} og ${a(UPT, "Uptimus")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pakkerne hos Fleet Complete",
        tekst: [
          `Fleet Complete har tre pakker, og prisen betales for 12 måneder ad gangen. Basic har køretøjer, ture og journal, rapporter, hændelser og områder. Professional lægger udgifter, påmindelser, kunder, KPI, Green Driving og elektronisk kørebog til.`,
          `Enterprise har desuden godkendelsesflow, projekter og adgang via app eller iFrame. Opgavestyring, chauffør-id og API til integration er tillægsmoduler i alle tre pakker.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Modul", "Basic", "Professional", "Enterprise"],
          raekker: [
            ["Køretøjer, ture og rapporter", "ja", "ja", "ja"],
            ["Hændelser og områder", "ja", "ja", "ja"],
            ["Udgifter og påmindelser", "ikke med", "ja", "ja"],
            ["Elektronisk kørebog", "ikke med", "ja", "ja"],
            ["Kunder, KPI og Green Driving", "ikke med", "ja", "ja"],
            ["Godkendelsesflow og projekter", "ikke nævnt", "ikke nævnt", "ja"],
            ["Opgavestyring, chauffør-id og API", "tilvalg", "tilvalg", "tilvalg"]
          ],
          note: `Basic koster 89 eller 92 kr., Professional 99 kr. og Enterprise 119 kr. pr. måned, alle + moms og betalt for 12 måneder ad gangen. Kilde: ${a(FC, "Fleet Complete: Flådestyring")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor ofte positionen opdateres",
        tekst: [
          `Opdateringen afgør, hvor præcist kortet og ruterne er. Med en position cirka hvert 10. minut kan du se, hvor bilen holder. Ruten mellem to positioner bliver først tydelig med kortere intervaller, og derfor har kørebogspakken LogPRO opdatering cirka hvert 10. sekund.`,
          `GPS-Tracker.dk skriver, at intervallerne er vejledende og afhænger af bevægelse, opsætning og dækning. Meta Traks kørebogs-tracker sender en position hvert 4. sekund.`
        ],
        tabel: {
          kolonner: ["Pakke (GPS-Tracker.dk)", "Opdatering", "Indhold", "Pr. md. + moms"],
          raekker: [
            ["Economic", "Ca. 10 min.", "Position og 12 mdr. historik", "20 kr."],
            ["Light", "Ca. 5 min.", "Kørselsark, stop og rapporter", "30 kr."],
            ["Standard", "Ca. 10 sek.", "Alarmer, geofence og rettigheder", "40 kr."],
            ["LogPRO Kørebog", "Ca. 10 sek.", "Standard plus fører-id og deling i privat og erhverv", "70 kr."]
          ],
          note: `Kilde: ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 4. oktober 2026. 12 måneders binding, SIM og data er med.`,
          visning: "kort"
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 172" role="img" aria-label="Tre rækker, der viser en times kørsel. Economic giver en position cirka hvert 10. minut, Light cirka hvert 5. minut, og Standard cirka hvert 10. sekund, så ruten ses som en sammenhængende linje."><text class="tg-lille" x="110" y="14">EN TIMES KØRSEL</text><text class="tg-fremhaev" x="0" y="44">Economic</text><text class="tg-lille" x="0" y="58">CA. 10 MIN.</text><line class="tg-gulvlinje" x1="110" y1="40" x2="390" y2="40"/><circle class="tg-modul" cx="110" cy="40" r="5"/><circle class="tg-modul" cx="157" cy="40" r="5"/><circle class="tg-modul" cx="203" cy="40" r="5"/><circle class="tg-modul" cx="250" cy="40" r="5"/><circle class="tg-modul" cx="297" cy="40" r="5"/><circle class="tg-modul" cx="343" cy="40" r="5"/><circle class="tg-modul" cx="390" cy="40" r="5"/><text class="tg-fremhaev" x="0" y="94">Light</text><text class="tg-lille" x="0" y="108">CA. 5 MIN.</text><line class="tg-gulvlinje" x1="110" y1="90" x2="390" y2="90"/><circle class="tg-modul" cx="110" cy="90" r="4"/><circle class="tg-modul" cx="133" cy="90" r="4"/><circle class="tg-modul" cx="157" cy="90" r="4"/><circle class="tg-modul" cx="180" cy="90" r="4"/><circle class="tg-modul" cx="203" cy="90" r="4"/><circle class="tg-modul" cx="227" cy="90" r="4"/><circle class="tg-modul" cx="250" cy="90" r="4"/><circle class="tg-modul" cx="273" cy="90" r="4"/><circle class="tg-modul" cx="297" cy="90" r="4"/><circle class="tg-modul" cx="320" cy="90" r="4"/><circle class="tg-modul" cx="343" cy="90" r="4"/><circle class="tg-modul" cx="367" cy="90" r="4"/><circle class="tg-modul" cx="390" cy="90" r="4"/><text class="tg-fremhaev" x="0" y="144">Standard</text><text class="tg-lille" x="0" y="158">CA. 10 SEK.</text><line class="tg-skinne" x1="110" y1="140" x2="390" y2="140"/></svg>`,
          tekst: `Skematisk. Antallet af positioner i en times kørsel med de tre opdateringsintervaller. Kilde: ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Pris for 12 måneder",
        tekst: [
          `GPS-Tracker.dk binder abonnementet i 12 måneder. Søjlerne viser prisen for hele bindingsperioden pr. tracker, som forhandleren selv oplyser den.`,
          `Prisen for trackeren kommer oveni og betales kun én gang. En OBD-enhed kan flyttes med til næste bil, når leasingaftalen slutter.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Economic", 240],
            ["Light", 360],
            ["Standard", 480],
            ["LogPRO Kørebog", 840]
          ],
          note: `Kilde: ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 4. oktober 2026. Priserne er + moms med SIM og data, og hardware købes særskilt.`
        }
      },
      {
        overskrift: "Hvor data hentes i bilen",
        tekst: [
          `Bilens styreenheder er forbundet på CAN-bussen. Telematikenheden sender de rå data fra CAN-bussen videre, typisk km-stand, brændstofdata og motortimer, oplyser Mapon. Biler med indbygget modem sender data til producenten.`,
          `CAN står for Controller Area Network. Mapon skriver, at telematikenheden ikke ændrer eller beregner noget, men blot sender de rå data videre til serveren. Det, du ser i systemet, er derfor i de fleste tilfælde præcis det, bilen selv har målt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Bilens CAN-bus med styreenhed, instrument og modem samt OBD-tracker og fastmonteret boks"><text x="320" y="16" text-anchor="middle" class="tg-lille">til producenten</text><line x1="320" y1="22" x2="320" y2="40" class="tg-skinne-tynd"/><rect x="40" y="40" width="90" height="28" class="tg-kasse"/><text x="85" y="58" text-anchor="middle">Styreenhed</text><rect x="160" y="40" width="80" height="28" class="tg-kasse"/><text x="200" y="58" text-anchor="middle">Instrument</text><rect x="280" y="40" width="80" height="28" class="tg-modul"/><text x="320" y="58" text-anchor="middle">Modem</text><line x1="20" y1="110" x2="380" y2="110" class="tg-gulvlinje"/><text x="20" y="100" class="tg-fremhaev">CAN-bus</text><line x1="85" y1="68" x2="85" y2="110" class="tg-skinne-tynd"/><line x1="200" y1="68" x2="200" y2="110" class="tg-skinne-tynd"/><line x1="320" y1="68" x2="320" y2="110" class="tg-skinne-tynd"/><line x1="95" y1="110" x2="95" y2="145" class="tg-skinne-tynd"/><line x1="240" y1="110" x2="240" y2="145" class="tg-skinne-tynd"/><rect x="60" y="145" width="70" height="26" class="tg-kasse"/><text x="95" y="162" text-anchor="middle">OBD-stik</text><rect x="60" y="180" width="70" height="24" class="tg-modul"/><text x="95" y="196" text-anchor="middle">Tracker</text><rect x="200" y="145" width="80" height="26" class="tg-modul"/><text x="240" y="162" text-anchor="middle">Fast boks</text><text x="200" y="196">Læser km, tank, motortimer</text></svg>`,
          tekst: `Skematisk. CAN-bus, OBD-tracker og fastmonteret boks. Kilde: ${a(MAPON1, "Mapon")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: ${a(MAPON1, "Mapon: Hvad er CAN bus data")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kilometer fra GPS og fra bilen",
        tekst: [
          `En enhed tilsluttet CAN-bussen læser km-stand, brændstofniveau og -forbrug, motortimer, omdrejninger og temperatur, oplyser Mapon.`,
          `Km-tal fra GPS og fra kilometertælleren er ikke ens, fordi de måles forskelligt. Slidte dæk eller en anden dækstørrelse giver også forskel, skriver Mapon. Kilometertælleren må også have en vis tilladt fejl, og satellitsignalet kan blive forstyrret af vejret.`,
          `GPS'ens kilometertal starter ved 0, når enheden monteres. Mapon anbefaler at sætte det til bilens aktuelle kilometertal én gang om året eller efter et dækskift.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Kilometertælleren måler hjulets omdrejninger, GPS måler med satellitter."><text class="tg-fremhaev" x="90" y="24" text-anchor="middle">Kilometertæller</text><text x="90" y="40" text-anchor="middle">hjulets omdrejninger</text><path class="tg-pil" d="M90,70 A50,50 0 0 1 140,120"/><circle class="tg-kasse" cx="90" cy="120" r="40"/><circle class="tg-profil" cx="90" cy="120" r="14"/><rect class="tg-modul" x="250" y="22" width="36" height="18"/><text class="tg-fremhaev" x="296" y="30">GPS</text><text x="296" y="46">satellitter</text><line class="tg-skinne-tynd" x1="268" y1="40" x2="245" y2="128"/><line class="tg-skinne-tynd" x1="268" y1="40" x2="295" y2="128"/><rect class="tg-profil" x="225" y="128" width="90" height="32" rx="4"/><text x="270" y="148" text-anchor="middle">bilen</text><line class="tg-gulvlinje" x1="20" y1="160" x2="380" y2="160"/><text class="tg-lille" x="20" y="188">SLIDTE DÆK OG ANDEN DÆKSTØRRELSE GIVER FORSKEL</text></svg>`,
          tekst: `Skematisk. Kilometertælleren og GPS måler afstanden forskelligt. Kilde: ${a(MAPON2, "Mapon")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: ${a(MAPON2, "Mapon: Forskel på kilometertæller og GPS")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sensordata afhænger af tracker og bil",
        tekst: [
          `Hos GPS-Tracker.dk er sensorfunktioner som tænding, batteristatus, kilometerstand, brændstofdata og temperatur med i alle pakker. De konkrete data afhænger af trackeren, bilen og tilsluttet udstyr, og km-stand via OBD kræver en understøttet bil. Standard og LogPRO har livstidsgaranti på trackeren.`,
          `GPS-Tracker.dk anbefaler derfor at vælge tracker efter de oplysninger, virksomheden skal bruge. Skal systemet fx vise kilometerstanden til serviceplanen, er det bilmodellen, der afgør, om det kan lade sig gøre.`
        ],
        efter: [
          `Kilde: ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Producentens data via API",
        tekst: [
          `Volkswagens Fleet Interface Data leverer liveposition, servicedata, tankniveau, køredata, resterende rækkevidde og advarsler til det flådesystem, virksomheden bruger i forvejen, via en API. Det gælder VW-biler forberedt til VW Connect eller We Connect og Audi, Škoda, SEAT og CUPRA med Onboard Connectivity Unit Gen. 3. Se <a href="/til-varebilen/flaadestyring/telematik-data-fra-producenten/">telematik fra producenten</a>.`,
          `En API er en fast forbindelse, hvor to systemer udveksler data automatisk. Data går så fra bilens modem til producenten og derfra videre til flådesystemet, uden en eftermonteret boks i bilen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 186" role="img" aria-label="To veje til flådesystemet. En eftermonteret tracker sender til forhandlerens platform. Bilens indbyggede modem sender til producenten, der sender data videre via en API."><defs><marker id="pil-flaade-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="10" y="36" width="110" height="34"/><text x="65" y="57" text-anchor="middle">Tracker</text><rect class="tg-kasse" x="150" y="36" width="100" height="34"/><text x="200" y="57" text-anchor="middle">Platform</text><rect class="tg-kasse" x="10" y="114" width="110" height="34"/><text x="65" y="135" text-anchor="middle">Bilens modem</text><rect class="tg-kasse" x="150" y="114" width="100" height="34"/><text x="200" y="135" text-anchor="middle">Producenten</text><rect class="tg-modul" x="282" y="36" width="108" height="112"/><text class="tg-fremhaev" x="336" y="96" text-anchor="middle">Flådesystem</text><g class="tg-maal"><line x1="120" y1="53" x2="148" y2="53" marker-end="url(#pil-flaade-1)"/><line x1="250" y1="53" x2="280" y2="53" marker-end="url(#pil-flaade-1)"/><line x1="120" y1="131" x2="148" y2="131" marker-end="url(#pil-flaade-1)"/><line x1="250" y1="131" x2="280" y2="131" marker-end="url(#pil-flaade-1)"/></g><text x="265" y="124" text-anchor="middle">API</text><text class="tg-lille" x="10" y="92">EFTERMONTERET</text><text class="tg-lille" x="10" y="170">INDBYGGET I BILEN</text></svg>`,
          tekst: `Skematisk. Kilder: ${a(VWFID, "Volkswagen: Fleet Interface Data")}, set den 4. oktober 2026, og ${a(GPST, "GPS-Tracker.dk")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tilmelding med stelnummer",
        tekst: [
          `Nogle systemer kobler sig på bilen uden en boks. Uptimus skal bruge bilens nummerplade eller stelnummer og giver derefter besked om, hvorvidt opkoblingen er mulig. Webfleet henter data fra Mercedes-Benz' elbiler alene ud fra stelnummeret.`,
          `Uptimus kalder det trådløs flådestyring, og Basic er gratis for de to første biler. Derefter koster Basic 100 kr. pr. bil om måneden. Svaret kommer bil for bil, så det kan afklares, før hele flåden tilmeldes.`
        ],
        efter: [
          `Kilder: ${a(UPT, "Uptimus: Priser")}, set den 7. oktober 2026, og ${a(WF, "IT Supply Chain om Webfleet")}, september 2023.`
        ]
      },
      {
        overskrift: "Elvarebiler",
        tekst: [
          `Webfleet henter ladetid, rækkevidde, batteristatus og strømforbrug fra Mercedes-Benz' elbiler og elvarebiler uden ekstra hardware. Det kræver kun stelnummeret (september 2023).`,
          `Ford Pro samler data fra Fords varebiler fra 2019 og frem med indbygget modem, og Ford Pro Charging dækker opladning på adressen, offentligt og hjemme (Ford, maj 2022). DIIMS oplyser, at der kan være tillæg for elbiler.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Data fra Mercedes-Benz' elbiler", "Webfleet"],
          raekker: [
            ["Ladetid", "ja"],
            ["Rækkevidde", "ja"],
            ["Batteristatus", "ja"],
            ["Strømforbrug", "ja"],
            ["Kræver ekstra hardware", "nej"]
          ],
          note: `Webfleet skal kun bruge stelnummeret. Kilde: ${a(WF, "IT Supply Chain om Webfleet")}, september 2023.`
        },
        efter: [
          `Kilder: ${a(FORD, "Ford: Ford Pro øger produktiviteten for Europas varebilsflåder")}, maj 2022, og ${a(DIIMS, "DIIMS")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Service, skader og udgifter",
        tekst: [
          `Modulerne til service og skader følger med i de dyrere pakker. Hos Fleet Complete kommer påmindelser og udgifter først med i Professional, og hos Uptimus kommer dæktryk og skadesinspektion først med i Pro.`,
          `Uptimus Premium har også arbejdstidsregistrering og opgavestyring med en AI-assistent, og Pro tjekker chaufførernes dokumenter automatisk. Fleet Completes påmindelsesmodul holder styr på servicetider og giver besked, før næste vedligeholdelse.`
        ],
        punkter: [
          `<strong>Påmindelser.</strong> Fleet Completes Professional-pakke har påmindelser og udgifter.`,
          `<strong>Km-stand og fejlkoder.</strong> Uptimus Premium henter dem automatisk.`,
          `<strong>Dæk og skader.</strong> Uptimus Pro har dæktryksovervågning og AI-baserede inspektioner og skadesgenkendelse.`,
          `<strong>Fakturaer.</strong> Qanto Fleet Professionel har en fakturaindlæser til omkostningerne.`
        ],
        efter: [
          `Kilder: ${a(UPT, "Uptimus")}, ${a(FC, "Fleet Complete")} og ${a(QANTO, "Qanto Fleet")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Administration uden GPS",
        tekst: [
          `Qanto Fleet er et system til at administrere flåden og ikke til at spore bilerne. Det minder om leasingudløb, syn og leveringer og holder øje med omkostningerne og klimaregnskabet.`,
          `Prisen pr. køretøj afhænger af flådens størrelse. Ved 199 køretøjer begynder Light ved 7 kr., Manager ved 12 kr. og Professionel ved 17 kr. pr. køretøj om måneden. Qanto opdaterer køretøjsdata hver dag og har en API, så data kan hentes ind i virksomhedens egne systemer.`
        ],
        efter: [
          `Kilde: ${a(QANTO, "Qanto Fleet")}, set den 4. og 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Montering",
        tekst: [
          `Fleet Complete og DIIMS leverer både OBD-enheder, der sættes i diagnosestikket, og enheder til fast montering. En OBD-enhed kan flyttes med til næste bil, når leasingaftalen slutter.`,
          `DIIMS beskriver plug and play i OBD-porten som ideel til mindre flåder og fast montering ved en installatør som en løsning til større flåder, eller når enheden skal sidde skjult. Hos Ordrestyring kommer enhederne med posten sammen med en installationsguide, og derefter forbindes de til appen med det login, Ordrestyring sender.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Bestil enheder", "Én enhed pr. bil. Ordrestyring sender enhederne med en installationsguide."],
            ["Montér", "OBD-enheden sættes i diagnosestikket. En fast enhed monteres af en installatør, hos DIIMS skjult i bilen."],
            ["Forbind", "Enhederne tilknyttes appen eller platformen med det login, forhandleren sender."],
            ["Juster kilometertallet", "GPS'ens kilometertal starter ved 0 og sættes til bilens tæller."],
            ["Informér medarbejderne", "Senest når systemet tages i brug, efter Datatilsynets krav."]
          ]
        },
        efter: [
          `Kilder: ${a(FC, "Fleet Complete")}, ${a(DIIMS, "DIIMS")}, ${a(ORDRE, "Ordrestyring")}, ${a(MAPON2, "Mapon")} og ${a(DT, "Datatilsynet")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Værktøj i samme system",
        tekst: [
          `Ordrestyring sælger Tool Tracker som tilkøb til Vehicle, 95 kr. om måneden for fem enheder. Tyverisikring af bil og værktøj står i <a href="/til-varebilen/varerumssikring/">varerumssikring</a>.`,
          `Tool Tracker bruger en lille Bluetooth-enhed, der sættes på værktøjet, og den sælges kun i pakker med fem. GPS-Tracker.dk tager 5 kr. pr. tag om måneden for værktøjssporing oven i biltrackerens abonnement.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Vehicle, Ordrestyring", 89, "kr. pr. måned"],
            ["Tool Tracker, tilkøb", 95, "kr. pr. måned for fem enheder"],
            ["Værktøjstag, GPS-Tracker.dk", 5, "kr. pr. tag pr. måned + moms"]
          ],
          note: `Ordrestyring angiver ikke moms på Vehicle og Tool Tracker. Kilder: ${a(ORDRE, "Ordrestyring")}, set den 4. oktober 2026, og ${a(GPST, "GPS-Tracker.dk")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Rapporter og eksport",
        tekst: [
          `Fleet Complete eksporterer rapporter til PDF og Excel eller integrerer direkte med ERP-systemer. Kunderne kan importeres og vises på kortet til ruteplanlægning.`,
          `Ordrestyring overfører kørsler og køretimer direkte til sit sagsstyringssystem til håndværkere. Ifølge Ordrestyring sparer det registrering af kilometer, arbejdstider og ankomsttider og gør det muligt at fakturere køretiden præcist. GPS-Tracker.dk eksporterer rapporter til PDF, HTML og Excel og kan sende dem automatisk på mail hver dag eller hver uge.`
        ],
        efter: [
          `Kilder: ${a(FC, "Fleet Complete")}, ${a(ORDRE, "Ordrestyring")} og ${a(GPST, "GPS-Tracker.dk")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Medarbejderne",
        tekst: [
          `Et flådestyringssystem er GPS-overvågning af de medarbejdere, der kører bilerne. De skal have information om formålet, omfanget og brugen af oplysningerne senest, når systemet tages i brug.`,
          `Gælder DA og LO's aftale om kontrolforanstaltninger, skal medarbejderne have besked senest 6 uger før. Datatilsynets krav står på <a href="/til-varebilen/flaadestyring/gps-sporing-af-medarbejdere/">GPS-sporing af medarbejdere</a>.`
        ],
        efter: [
          `Kilder: ${a(DT, "Datatilsynet: Kontrol af medarbejdere")} og ${a(DALO, "DA og LO: Aftale om kontrolforanstaltninger")}, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så kan tilbuddet regnes på den rigtige flåde.",
    spoergsmaal: [
      "Antal biler, mærker, modeller og årgange.",
      "Hvor mange der er elbiler.",
      "Hvilke moduler der skal bruges: kørebog, service, skader, værktøj.",
      "Om enhederne skal kunne flyttes, når bilerne udskiftes.",
      "Hvilke systemer data skal integreres med.",
      "Ønsket binding og fakturering.",
      "Hvor ofte positionen skal opdateres."
    ],
    faq: [
      ["Hvad koster flådestyring pr. bil?", "Fra 20 kr. om måneden uden moms for ren positionsvisning og 70–119 kr. for pakker med kørebog og rapporter hos GPS-Tracker.dk og Fleet Complete. Hardwaren koster fra 399 kr. hos Ordrestyring, moms ikke angivet (set den 4. oktober 2026)."],
      ["Hvad er CAN-bus i flådestyring?", "Bilens interne datanet. Et system tilsluttet CAN-bussen læser km-stand, brændstof og motordata direkte fra bilen."],
      ["Kan flådestyring vise batteriniveau på elvarebiler?", "Ja, i flere systemer. Webfleet henter fx batteristatus, rækkevidde og ladetid fra Mercedes-Benz' elvarebiler ud fra stelnummeret."],
      ["Kræver flådestyring montering på værksted?", "Ikke altid. OBD-enheder sættes i diagnosestikket. Fastmonterede enheder kobles på bilens strøm."],
      ["Hvorfor passer GPS-kilometer ikke med kilometertælleren?", "De måles forskelligt. Kilometertælleren regner ud fra hjulenes omdrejninger, GPS ud fra satellitter, og dækslid giver også forskel. Mapon anbefaler at justere GPS'ens kilometertal én gang om året eller efter et dækskift."],
      ["Hvilke data kan en OBD-tracker læse?", "Det afhænger af trackeren og bilen. Typisk kan den læse tænding, batteristatus, km-stand og brændstofdata. GPS-Tracker.dk skriver, at km-stand via OBD kræver en understøttet bil."],
      ["Kan bilens eget modem erstatte en GPS-tracker?", "Det kan det for nogle mærker. Volkswagens Fleet Interface Data leverer liveposition, servicedata og tankniveau via API uden eftermonteret telematik."],
      ["Hvad er forskellen på en GPS-tracker og et flådestyringssystem?", "En tracker viser position og ture. Et flådestyringssystem lægger kørebog, service, skader, udgifter og data fra bilens CAN-bus oveni."],
      ["Kan værktøjet spores i samme system?", "Ja, hos flere. Ordrestyring sælger Tool Tracker med Bluetooth som tilkøb til Vehicle, og GPS-Tracker.dk tager betaling pr. tag oven i biltrackerens abonnement."]
    ],
    kilder: [
      { navn: "GPS-Tracker.dk: Priser på abonnementer", url: GPST, dato: "2026-10-07" },
      { navn: "Fleet Complete: Flådestyring", url: FC, dato: "2026-10-07" },
      { navn: "DIIMS: Flådestyring", url: DIIMS, dato: "2026-10-07" },
      { navn: "Ordrestyring: Vehicle og Tool Tracker", url: ORDRE, dato: "2026-10-07" },
      { navn: "Uptimus: Priser", url: UPT, dato: "2026-10-07" },
      { navn: "Qanto Fleet: Priser", url: QANTO, dato: "2026-10-07" },
      { navn: "Mapon: Hvad er CAN bus data, og hvordan forbedrer det flådestyring", url: MAPON1, dato: "2026-10-07" },
      { navn: "Mapon: Hvorfor er der forskel på afstandsdata mellem kilometertæller og GPS", url: MAPON2, dato: "2026-10-07" },
      { navn: "IT Supply Chain: Webfleet extends OEM.connect programme to support electric vehicles (26.09.2023)", url: WF, dato: "2026-10-04" },
      { navn: "Ford: Ford Pro øger produktiviteten for Europas varebilsflåder (04.05.2022)", url: FORD, dato: "2026-10-04" },
      { navn: "Volkswagen: Fleet Interface Data", url: VWFID, dato: "2026-10-04" },
      { navn: "Datatilsynet: Kontrol af medarbejdere (november 2023)", url: DT, dato: "2026-10-07" },
      { navn: "DA og LO: Aftale om kontrolforanstaltninger af 27. oktober 2006 (pdf hos 3F)", url: DALO, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["GPS-Tracker.dk: Economic er enkel GPS-sporing og historik; Light tilføjer kørselsark og rapporter; Standard giver hurtigere opdateringer, alarmer, geofence, brugerstyring og livstidsgaranti på trackeren; LogPRO er et særskilt kørebogssystem med formål, godkendelser og kørselsgodtgørelse.", GPST],
    ["GPS-Tracker.dk: den enkle kørebog i Light og Standard giver kørselsark med adresser, kilometer og køre- og stoptider.", GPST],
    ["Uptimus: bilen tilmeldes med nummerplade eller stelnummer, hvorefter kunden får besked om, hvorvidt opkoblingen er mulig; Uptimus kalder det trådløs flådestyring.", UPT],
    ["GPS-Tracker.dk: SIM-kort, mobildata, opsætning, adgang til app og platform og 12 måneders GPS-historik er inkluderet i abonnementet.", GPST],
    ["Uptimus: abonnementet kan opsiges til enhver tid, men der betales for løbende måned plus en måned.", UPT],
    ["Uptimus: Premium 250 kr. og Pro 350 kr. pr. bil pr. måned; Basic er gratis for de 2 første biler og derefter 100 kr. pr. bil pr. måned.", UPT],
    ["Fleet Complete: Basic (køretøjer, ture og journal, rapporter, hændelser, områder) 89 eller 92 kr., Professional (tilføjer udgifter, påmindelser, kunder, KPI, Green Driving, elektronisk kørebog) 99 kr., Enterprise (tilføjer godkendelsesflow, projekter, app/iFrame) 119 kr. pr. måned ekskl. moms; abonnementet betales for 12 måneder ad gangen; opgavestyring, chauffør-id og API er tillægsmoduler.", FC],
    ["GPS-Tracker.dk: opdateringsintervaller er vejledende og afhænger af bevægelse, konfiguration og dækning.", GPST],
    ["Meta Traks kørebogs-tracker sender positioner hvert 4. sekund.", "https://metatrak.dk/koerebog/"],
    ["Mapon: CAN står for Controller Area Network; telematikenheden ændrer eller beregner ikke noget, men sender de rå data direkte til serveren, så det, man ser i softwaren, i de fleste tilfælde er det, der er læst fra køretøjets systemer.", MAPON1],
    ["Mapon: forskellen mellem kilometertæller og GPS påvirkes også af tilladte kilometertællerfejl og midlertidige forstyrrelser af satellitsignalet; GPS-kilometertal starter fra 0 ved installation, og Mapon anbefaler at opdatere det en gang om året eller efter et dækskift.", MAPON2],
    ["GPS-Tracker.dk anbefaler at vælge tracker efter de oplysninger, man har brug for, fordi de konkrete sensordata afhænger af tracker, bil og udstyr.", GPST],
    ["DIIMS: Plug & Play-installation via OBD-port til mindre flåder eller hurtig implementering; fastmontering af professionel installatør til større flåder eller en mere diskret løsning, hvor enheden monteres permanent og skjult.", DIIMS],
    ["Uptimus Premium har arbejdstidsregistrering og opgavestyring med AI-assistent; Pro har automatisk tjek af chaufførdokumenter.", UPT],
    ["Fleet Completes påmindelsesmodul holder styr på bilernes servicetider og advarer om snarlig vedligeholdelse.", FC],
    ["Qanto Fleet minder om leasingudløb, syn og leveringer og giver værktøjer til omkostninger og klimaregnskab; køretøjsdata opdateres hver dag, og der er et køretøjs-API.", QANTO],
    ["Ordrestyring: enhederne sendes i en Vehicle-pakke med installationsguide; efter installation forbindes de til Vehicle-appen med loginoplysninger fra Ordrestyring.", ORDRE],
    ["Ordrestyring Tool Tracker bruger en Bluetooth (BLE)-enhed på værktøjet og sælges kun som 5-pak; GPS-Tracker.dk tager 5 kr. ekskl. moms pr. tag pr. måned for værktøjssporing ud over biltrackerens abonnement.", ORDRE],
    ["Ordrestyring: integrationen overfører kørsler og køretimer automatisk til Ordrestyring, så man sparer registrering af kilometer, arbejdstider og ankomsttider, og køretiden kan faktureres præcist.", ORDRE],
    ["GPS-Tracker.dk: rapporteksport til PDF, HTML og Excel og automatiske rapportmails dagligt eller ugentligt (i pakkerne med rapporter).", GPST],
    ["Datatilsynet: ansatte skal senest ved etablering af GPS-overvågning informeres om formål, omfang og anvendelse.", DT],
    ["DA/LO-aftalen om kontrolforanstaltninger: underretning senest 6 uger før iværksættelse (punkt 2).", DALO]
  ]
};
