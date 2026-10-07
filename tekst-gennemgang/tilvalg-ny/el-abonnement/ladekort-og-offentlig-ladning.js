// Underside /til-varebilen/el-abonnement/ladekort-og-offentlig-ladning/ (07-10-2026)
var OK = `https://www.ok.dk/erhverv/produkter/ladestandere/ladestationspriser`;
var CKP = `https://www.circlek.dk/priser`;
var CKO = `https://www.circlek.dk/opladning/pris`;
var CK = `https://www.circlek.dk/vilkar-og-betingelser-europe-card-da`;
var IONITY = `https://www.ionity.eu/subscriptions`;
var KEY = `https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-key/`;
var VAN = `https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-one-business-van/`;
var ROAM = `https://clever.dk/erhverv/clevers-ladenetvaerk-erhverv/opladning-paa-andre-netvaerk-erhverv/`;
var CLEVER = `https://clever.dk/erhverv/`;
var UNOX = `https://unoxmobility.dk/erhverv/produkter/firmabiler`;
var FORDPL = `https://katalog.ford.dk/prislister/varebiler/e-transit-custom-van/GetPDF.ashx`;
var FORD = `https://www.ford.dk/erhverv/opladning`;
var SIK = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/opladning-el-biler`;
var KIA = `https://api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-priser.pdf`;
var RENAULT = `https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/transportvehiclesrenaultdksite/cardocuments/prisliste-master-e-tech-electric.pdf`;
var SKAT = `https://skat.dk/erhverv/afgifter-paa-varer-og-ydelser-punktafgifter/nyhedsbrev-afgifter/udvidet-refusionsordning-for-elafgift-ved-opladning-af-elbiler`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "el-abonnement/ladekort-og-offentlig-ladning",
  side: {
    slug: "ladekort-og-offentlig-ladning",
    navn: "Ladekort og offentlig ladning",
    titel: "Ladekort til firmabil: priser og roaming",
    kort: `kWh-priser hos danske ladeselskaber, hvornår et abonnement betaler sig, ladebrik på firmaets aftale og roaming.`,
    beskrivelse: `Ladekort til elvarebiler: kWh-priser hos OK, Circle K, IONITY og Clever, hvornår et abonnement betaler sig, ladebrik og roaming. Priser fra oktober 2026.`,
    manchet: `På ruten lader elvarebilen på offentlige ladere. Du kan betale for hver opladning i en app, tegne et abonnement med lavere kWh-pris eller give bilen en ladebrik på firmaets aftale. Her er priserne fra OK, Circle K, IONITY og Clever og et regneeksempel, der viser, hvornår et abonnement betaler sig.`,
    visuel: {
      hero: "el-abonnement",
      hero_el: true,
      kort_fortalt: [
        ["Hurtig- og lynladning uden abonnement", "3,69–3,99 kr.", "pr. kWh hos OK og Circle K"],
        ["IONITY Power", "2,29 kr.", "pr. kWh plus 90 kr. om måneden"],
        ["IONITY Motion betaler sig", "fra 45 kWh", "om måneden hos IONITY"],
        ["Clevers ladepunkter", "66.697", "heraf 1.743 hurtig- og lynladere"]
      ],
      toc: true,
      stribe: { drivmiddel: "el", titel: "Elvarebiler med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Ladeporten på bilen",
        tekst: [
          `Elvarebilerne lader AC med Type 2-stik og DC med CCS, skriver Ford i prislisten for E-Transit Custom. CCS kaldes også Combo 2. Indtaget på bilen består af Type 2-delen og to ekstra ben til jævnstrøm, så bilen bruger det samme indtag på begge slags ladere.`,
          `Sikkerhedsstyrelsen gengiver reglerne for offentlige ladestandere. En normal ladestander kan overføre højst 22 kW og skal mindst have Type 2-stik efter EN 62196-2. En ladestander, der kan mere end 22 kW, er en højeffektladestander. Bruger den jævnstrøm, skal den mindst have Combo 2-stik efter EN 62196-3.`,
          `Reglen betyder, at en offentlig lynlader skal have det stik, elvarebilerne bruger. Det er betalingen, der er forskellig fra ladeselskab til ladeselskab, og det handler resten af siden om.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Bilens ladeport efter Combo 2: Type 2-delen til AC-ladning og to DC-ben til lynladning"><rect x="130" y="16" width="140" height="190" rx="20" class="tg-rum"/><circle cx="200" cy="80" r="45" class="tg-profil"/><rect x="160" y="140" width="80" height="50" rx="22" class="tg-profil"/><circle cx="182" cy="165" r="12" class="tg-kasse"/><circle cx="218" cy="165" r="12" class="tg-kasse"/><g class="tg-call"><line x1="162" y1="70" x2="98" y2="58"/><circle cx="162" cy="70" r="3"/><text x="10" y="50" class="tg-call__navn">AC-ladning</text><text x="10" y="64" class="tg-call__under">Type 2-delen</text></g><g class="tg-call"><line x1="218" y1="165" x2="296" y2="146"/><circle cx="218" cy="165" r="3"/><text x="300" y="140" class="tg-call__navn">Lynladning</text><text x="300" y="154" class="tg-call__under">DC-ben, CCS</text></g><text x="200" y="224" text-anchor="middle" class="tg-lille">Combo 2-indtag, skematisk</text></svg>`,
          tekst: `Skematisk. I Combo 2-indtaget bruges Type 2-delen til AC og de to DC-ben til lynladning. Kilder: ` + a(FORDPL, "Ford") + `, set den 4. oktober 2026, og ` + a(SIK, "Sikkerhedsstyrelsen") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tre måder at betale",
        tekst: [
          `Der er tre måder at betale for strøm på ruten. Den enkleste er at betale for hver opladning i ladeselskabets app eller med betalingskort. Den næste er et abonnement, hvor en fast månedspris giver en lavere pris pr. kWh. Den tredje er en ladebrik eller et ladekort på firmaets aftale, så regningen går direkte til virksomheden.`,
          `Valget afhænger af, hvor bilerne lader. En varebil, der lader om natten ved firmaets adresse eller hjemme hos medarbejderen, bruger kun de offentlige ladere en gang imellem. En bil, der kører langt hver dag, lader oftere på lynladere, og så betyder kWh-prisen mere for regnskabet.`
        ],
        kort: [
          ["Uden abonnement", "Du betaler i appen eller med betalingskort. OK og Circle K kræver intet abonnement, og IONITY har priser uden abonnement."],
          ["Abonnement", "Du betaler en fast månedspris og får en lavere kWh-pris, fx med IONITY Motion og Power."],
          ["Ladebrik eller ladekort", "Opladningen faktureres virksomheden, fx med Clever Key, som er en brik, der følger bilen."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tre steder, hvor en elvarebil lader: ved firmaets adresse, hjemme hos medarbejderen og på en offentlig lader på ruten, og hvordan strømmen betales hvert sted."><line class="tg-skillevaeg" x1="133" y1="24" x2="133" y2="190"/><line class="tg-skillevaeg" x1="267" y1="24" x2="267" y2="190"/><rect class="tg-rum" x="22" y="40" width="64" height="60"/><rect class="tg-profil" x="32" y="52" width="16" height="14"/><rect class="tg-profil" x="58" y="52" width="16" height="14"/><rect class="tg-profil" x="44" y="76" width="18" height="24"/><rect class="tg-modul" x="96" y="66" width="14" height="34"/><line class="tg-gulvlinje" x1="10" y1="100" x2="124" y2="100"/><path class="tg-rum" d="M164,100 L164,62 L196,38 L228,62 L228,100 Z"/><rect class="tg-profil" x="186" y="74" width="20" height="26"/><rect class="tg-modul" x="236" y="70" width="12" height="30"/><line class="tg-gulvlinje" x1="144" y1="100" x2="258" y2="100"/><rect class="tg-modul" x="316" y="40" width="28" height="60"/><rect class="tg-kasse" x="322" y="48" width="16" height="14"/><path class="tg-pil" d="M344,72 Q362,72 362,86 L362,100"/><line class="tg-gulvlinje" x1="278" y1="100" x2="392" y2="100"/><text class="tg-fremhaev" x="66" y="124" text-anchor="middle">Firmaets adresse</text><text x="66" y="142" text-anchor="middle">Egen ladeboks</text><text x="66" y="158" text-anchor="middle">Firmaet betaler</text><text x="66" y="174" text-anchor="middle">strømmen</text><text class="tg-fremhaev" x="200" y="124" text-anchor="middle">Hjemme</text><text x="200" y="142" text-anchor="middle">Ladeboks hjemme</text><text x="200" y="158" text-anchor="middle">Udlæg betales</text><text x="200" y="174" text-anchor="middle">tilbage</text><text class="tg-fremhaev" x="334" y="124" text-anchor="middle">På ruten</text><text x="334" y="142" text-anchor="middle">Offentlig lader</text><text x="334" y="158" text-anchor="middle">App, kort</text><text x="334" y="174" text-anchor="middle">eller brik</text></svg>`,
          tekst: `Skematisk. De tre steder, en elvarebil lader, og hvordan strømmen betales. Hjemmeladningen er vist, som Clever gør det, hvor medarbejderen lægger ud og får pengene tilbage hver måned. Kilde: ` + a(VAN, "Clever: Clever One Business Van") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser uden abonnement",
        tekst: [
          `Uden abonnement betaler du kun for den strøm, bilen lader. OK skriver, at der ikke er noget abonnement, og at betalingen klares i OK Erhverv-appen. OK oplyser også, hvor man kan betale med betalingskort. Circle K kræver heller ikke abonnement på sine lynladere.`,
          `Hos IONITY hedder prisen uden abonnement og uden registrering IONITY Direct. Betaler chaufføren i IONITY-appen, er prisen lidt lavere, stadig uden abonnement og uden fast månedspris.`,
          `OK's pris afhænger af laderens effekt. Normalladere på 3,7–22 kW koster mindst, og lynladere på 100 kW og derover koster mest. Priserne fra OK, Circle K og IONITY er med moms, mens Clevers priser længere nede er uden moms, sådan som ladeselskaberne selv skriver dem.`
        ],
        tabel: {
          kolonner: ["Udbyder", "Ladertype", "Pr. kWh"],
          raekker: [
            ["OK", "Normallader, 3,7–22 kW", "3,49 kr."],
            ["OK", "Hurtiglader, 23–99 kW", "3,69 kr."],
            ["OK", "Lynlader, 100 kW og derover", "3,89 kr."],
            ["Circle K", "Lynlader", "3,99 kr."],
            ["IONITY", "Lynlader, IONITY-appen", "3,67 kr."],
            ["IONITY", "Lynlader, IONITY Direct", "3,86 kr."]
          ],
          note: `Kilder: ` + a(OK, "OK: Priser på opladning til erhverv") + ` (vejledende priser, gældende den 7. oktober 2026), ` + a(CKP, "Circle K: Ladepriser i dag") + ` (1. oktober 2026) og ` + a(IONITY, "IONITY") + `, set den 7. oktober 2026. Priserne kan variere efter sted og tidspunkt.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr./kWh",
          data: [
            ["OK, normallader", 3.49, "3,7–22 kW"],
            ["IONITY-appen", 3.67, "lynlader, intet abonnement"],
            ["OK, hurtiglader", 3.69, "23–99 kW"],
            ["IONITY Direct", 3.86, "lynlader, ingen registrering"],
            ["OK, lynlader", 3.89, "100 kW og derover"],
            ["Circle K", 3.99, "lynlader"]
          ],
          note: `Pris pr. kWh uden abonnement. Kilder: ` + a(OK, "OK") + ` (vejledende priser, gældende den 7. oktober 2026), ` + a(CKP, "Circle K") + ` (1. oktober 2026) og ` + a(IONITY, "IONITY") + `, set den 7. oktober 2026. Priserne kan variere efter sted og tidspunkt.`
        }
      },
      {
        overskrift: "Opladning i appen",
        tekst: [
          `Uden abonnement foregår opladningen næsten ens hos de store ladeselskaber. OK skriver, at chaufføren i OK Erhverv-appen kan finde den nærmeste ladestation, se prisen, starte og stoppe ladningen og betale. Det eneste, chaufføren skal gøre ved standeren, er at sætte stikket i.`,
          `IONITY Direct kræver ingen registrering. Chaufføren scanner QR-koden på laderen eller bruger IONITY-appen, lægger sine betalingsoplysninger ind og starter opladningen. Det passer til en bil, der kun af og til lader hos IONITY.`,
          `IONITY skriver, at priserne på selskabets side er minimumspriser, som IONITY kan ændre når som helst, og at prisen ved ladestanderen kan være højere. Det er derfor prisen i appen eller på standeren, der gælder for den enkelte opladning.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Find laderen", "I appen finder chaufføren den nærmeste lader og ser prisen pr. kWh."],
            ["Start opladningen", "Opladningen startes i appen eller, hos IONITY Direct, med QR-koden på laderen."],
            ["Stop og betal", "Chaufføren stopper ladningen i appen og betaler med de betalingsoplysninger, der er lagt ind."]
          ]
        },
        efter: [
          `Kilder: ` + a(OK, "OK: Priser på opladning til erhverv") + ` og ` + a(IONITY, "IONITY: Subscriptions") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Abonnementer",
        tekst: [
          `Med et abonnement betaler virksomheden et fast beløb om måneden og får en lavere pris pr. kWh eller fri opladning. IONITY har to månedsabonnementer, Motion og Power, som gælder på IONITY's lynladere i 23 europæiske lande. De har ingen mindsteperiode og kan opsiges med en måneds varsel.`,
          `IONITY sælger også Motion 365 og Power 365, som betales forud for 12 måneder. Prisen pr. kWh er den samme som i månedsabonnementet, og aftalen slutter af sig selv efter 12 måneder uden at blive fornyet.`,
          `Clevers abonnementer til varebiler giver fri opladning i Clevers netværk for en fast pris om måneden. De er beskrevet i afsnittet om Clever One Business Van nedenfor.`
        ],
        tabel: {
          kolonner: ["Abonnement", "Pr. md.", "Pr. kWh", "Moms"],
          raekker: [
            ["IONITY Motion", "45 kr.", "2,86 kr.", "Inkl."],
            ["IONITY Power", "90 kr.", "2,29 kr.", "Inkl."],
            ["Clever One Business Van", "999 kr.", "Fri opladning i Clevers netværk", "Ekskl."],
            ["Clever One Business Van Premium", "1.099 kr.", "Som ovenfor, døgnrefusion hjemme", "Ekskl."]
          ],
          note: `Kilder: ` + a(IONITY, "IONITY") + ` og ` + a(VAN, "Clever One Business Van") + `, set den 4. oktober 2026.`
        },
        figur: {
          type: "daekning",
          kolonner: ["Vilkår", "IONITY Motion og Power", "IONITY Motion 365 og Power 365", "Clever One Business Van"],
          raekker: [
            ["Betaling", "hver måned", "én gang for 12 måneder", "hver måned"],
            ["Binding", "ingen mindsteperiode", "12 måneder", "2 måneder"],
            ["Pris pr. kWh", "2,86 eller 2,29 kr.", "som månedsabonnementet", "fri opladning"],
            ["Gælder", "IONITY i 23 lande", "IONITY i 23 lande", "Clevers netværk og ladeboks hjemme"]
          ],
          note: `IONITY's månedsabonnementer kan opsiges med en måneds varsel, og årsabonnementerne fornyes ikke af sig selv. Kilder: ` + a(IONITY, "IONITY: Subscriptions") + ` og ` + a(VAN, "Clever: Clever One Business Van") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvornår abonnementet betaler sig",
        tekst: [
          `IONITY Motion koster 45 kr. om måneden og sænker prisen fra 3,86 kr. til 2,86 kr. pr. kWh. Besparelsen er 1,00 kr. pr. kWh, så abonnementet går lige op ved 45 kWh om måneden. IONITY Power koster 90 kr. om måneden og sparer 1,57 kr. pr. kWh, så det går lige op ved cirka 57 kWh.`,
          `Betaler chaufføren i stedet i IONITY-appen uden abonnement, er prisen 3,67 kr. pr. kWh. Så sparer Motion 0,81 kr. pr. kWh og går lige op ved cirka 56 kWh om måneden. Power går lige op ved cirka 65 kWh.`,
          `Beregningen bygger på IONITY's danske priser, set den 7. oktober 2026. Den gælder kun ladning hos IONITY, og prisen kan være en anden i udlandet.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr./kWh",
          data: [
            ["IONITY Direct", 3.86, "intet abonnement"],
            ["IONITY-appen", 3.67, "intet abonnement"],
            ["IONITY Motion", 2.86, "plus 45 kr. om måneden"],
            ["IONITY Power", 2.29, "plus 90 kr. om måneden"]
          ],
          note: `Søjlerne viser IONITY's kWh-pris på lynladere i Danmark med moms. Kilde: ` + a(IONITY, "IONITY") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Motion eller Power",
        tekst: [
          `Hvilket abonnement der er billigst, afhænger af, hvor meget bilen lader hos IONITY om måneden. Figuren viser den samlede pris for en måned, hvor månedsprisen og prisen for strømmen er lagt sammen. Det er et regneeksempel med IONITY's danske priser.`,
          `Under 45 kWh om måneden er IONITY Direct billigst. Mellem 45 og cirka 79 kWh er Motion billigst. Over cirka 79 kWh er Power billigst, fordi de 45 kr. ekstra om måneden bliver tjent ind med 0,57 kr. pr. kWh.`,
          `Et eksempel med tal viser forskellen. En varebil, der lader 100 kWh hos IONITY på en måned, betaler 386 kr. med Direct, 331 kr. med Motion og 319 kr. med Power. Ved 100 kWh er forskellen mellem Motion og Power altså 12 kr. om måneden.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Linjediagram over den samlede pris for en måned hos IONITY ved 0 til 100 kWh. IONITY Direct er billigst under 45 kWh, Motion mellem 45 og cirka 79 kWh, og Power over cirka 79 kWh."><text class="tg-lille" x="0" y="10">KR. OM MÅNEDEN</text><line class="tg-skillevaeg" x1="50" y1="20" x2="50" y2="220"/><line class="tg-skillevaeg" x1="50" y1="220" x2="320" y2="220"/><line class="tg-skillevaeg" x1="45" y1="20" x2="50" y2="20"/><line class="tg-skillevaeg" x1="45" y1="70" x2="50" y2="70"/><line class="tg-skillevaeg" x1="45" y1="120" x2="50" y2="120"/><line class="tg-skillevaeg" x1="45" y1="170" x2="50" y2="170"/><text x="42" y="24" text-anchor="end">400</text><text x="42" y="74" text-anchor="end">300</text><text x="42" y="124" text-anchor="end">200</text><text x="42" y="174" text-anchor="end">100</text><text x="42" y="224" text-anchor="end">0</text><line class="tg-skinne-tynd" x1="171.5" y1="133" x2="171.5" y2="220"/><line class="tg-skinne-tynd" x1="263" y1="85" x2="263" y2="220"/><line class="tg-skinne" x1="50" y1="220" x2="320" y2="27"/><line class="tg-gulvlinje" x1="50" y1="197.5" x2="320" y2="54.5"/><line class="tg-doer" x1="50" y1="175" x2="320" y2="60.5"/><circle class="tg-kasse" cx="171.5" cy="133.2" r="4"/><circle class="tg-kasse" cx="263" cy="84.6" r="4"/><line class="tg-skillevaeg" x1="321" y1="53" x2="327" y2="44"/><line class="tg-skillevaeg" x1="321" y1="62" x2="327" y2="70"/><text x="326" y="28">Direct</text><text x="330" y="46">Motion</text><text x="330" y="78">Power</text><text x="50" y="237" text-anchor="middle">0</text><text x="171.5" y="237" text-anchor="middle">45</text><text x="263" y="237" text-anchor="middle">79</text><text x="320" y="237" text-anchor="middle">100</text><text class="tg-lille" x="50" y="256">KWH OM MÅNEDEN HOS IONITY</text></svg>`,
          tekst: `Skematisk. Regneeksempel med månedsprisen og prisen pr. kWh lagt sammen. Den stiplede linje er IONITY Direct, den tynde linje er Motion, og den tykke linje er Power. Kilde: ` + a(IONITY, "IONITY") + `, danske priser set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Clever One Business Van",
        tekst: [
          `Clever One Business Van er et abonnement til firmabiler på gule plader og papegøjeplader. Det koster 999 kr. om måneden og giver fri opladning på hele Clevers netværk, også på lynladerne. Clever skelner efter nummerpladen, så en ombygget personbil på gule plader skal også have Van-abonnementet.`,
          `Bindingsperioden er 2 måneder. Mindsteprisen i perioden er 1.998 kr. for Van og 2.198 kr. for Premium, som koster 1.099 kr. om måneden. Clever skriver, at der kan komme et tillæg oveni, som Clever kalder energitillæg.`,
          `Abonnementet dækker også opladning hjemme, hvis medarbejderen får en ladeboks fra Clever. Medarbejderen betaler først selv strømmen, og Clever betaler udgiften tilbage hver måned efter en sats. Med Premium bygger satsen på elprisen over hele døgnet, så tilbagebetalingen bliver højere. Hjemmeladningen er forklaret i <a href="/til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/">ladestander hjemme hos medarbejderen</a>.`
        ]
      },
      {
        overskrift: "Ladebrik på firmaets aftale",
        tekst: [
          `Clever Key er en ladebrik til virksomhedens pulje- og flådebiler. Opladningen afregnes efter forbrug, så virksomheden kun betaler for det, bilerne lader. Det koster ikke noget at komme i gang, og virksomheden får én faktura om måneden med det samlede ladeforbrug.`,
          `Brikken følger bilen og kan ikke bruges til flere biler. Clever foreslår, at brikken bliver i bilen, så flere chauffører kan lade med den samme brik. Opladningen bliver derfor gjort op pr. bil og ikke pr. medarbejder, og det passer til en flåde, hvor flere deler bilerne.`,
          `På Clevers offentlige netværk får virksomheden en nedsat kWh-pris. Prisen varierer over døgnet og mellem stederne, men Clever skriver, at den altid er lavere end Clevers standardpris. På virksomhedens egne Clever-ladebokse koster normal- og hurtigopladning op til 99 kW 1,41 kr. pr. kWh.`,
          `Clever Key kan ikke købes af privatpersoner. Til medarbejdernes private elbiler har Clever et andet produkt, Clever Link.`
        ],
        efter: [
          `Kilde: ` + a(KEY, "Clever: Clever Key") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Roaming",
        tekst: [
          `Roaming betyder, at bilen kan lade hos et andet ladeselskab med brikken eller appen fra sit eget. Clever har aftaler med IONITY, Apcoa, By&amp;Havn, EWII, Stella, PowerGo, Eviny, Allego og EDF Power Solutions. Prisen hos partnerne vises i Clever-appen, og Clever skriver, at partnerskaberne skifter.`,
          `Clever skriver, at man med Clever One Business kan lade frit hos alle Clevers ladepartnere. I appen kan chaufføren se prisen, starte opladningen og sende udgiften videre til virksomheden. Går opladningen galt hos en partner, er det partneren, chaufføren skal kontakte, fordi Clever ikke giver support på andres netværk.`,
          `Circle K har også roamingaftaler på en række ladepunkter i Danmark. Med Circle K's kort kan man kun købe strøm på Circle K's egne stationer og hos Circle K's roamingpartnere i Danmark.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="En ladebrik fra Clever virker også hos partnere som IONITY, EWII og Allego."><rect class="tg-modul" x="0" y="80" width="72" height="36"/><text class="tg-modul__tekst" x="8" y="102">LADEBRIK</text><line class="tg-pil" x1="72" y1="98" x2="140" y2="98"/><path class="tg-pil" d="M132,92 L140,98 L132,104"/><rect class="tg-kasse" x="140" y="76" width="90" height="44"/><text class="tg-fremhaev" x="152" y="102">Clever</text><line class="tg-pil" x1="230" y1="98" x2="280" y2="39"/><line class="tg-pil" x1="230" y1="98" x2="280" y2="99"/><line class="tg-pil" x1="230" y1="98" x2="280" y2="159"/><rect class="tg-profil" x="280" y="24" width="110" height="30"/><text x="292" y="43">IONITY</text><rect class="tg-profil" x="280" y="84" width="110" height="30"/><text x="292" y="103">EWII</text><rect class="tg-profil" x="280" y="144" width="110" height="30"/><text x="292" y="163">Allego</text><text x="280" y="190">og flere</text><text x="100" y="144">Prisen hos partnerne</text><text x="100" y="158">står i Clever-appen</text></svg>`,
          tekst: `Skematisk. Clevers ladebrik virker også hos partnere som IONITY, EWII og Allego. Kilde: ` + a(ROAM, "Clever: Opladning på andre netværk") + `, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: ` + a(ROAM, "Clever: Opladning på andre netværk") + ` og ` + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 1 og 3.5") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Rabat via tankkortet",
        tekst: [
          `Har virksomheden allerede et tankkort, kan det ofte også bruges til strøm. Uno-X Firmakort giver automatisk rabat, når chaufføren tanker, oplader eller vasker hos Uno-X. Kortet virker på alle Uno-X' lynladere og på mere end 5.000 ladepunkter i Danmark, og alle udgifter samles på én faktura.`,
          `Circle K's EUROPE Card kan bruges til opladning, hvis kortet er udstedt med et ladesymbol. På Circle K's egne ladere betaler virksomheden Circle K's listepris på strøm med fradrag af den rabat, der er aftalt. På E.ON's danske ladere gælder en fast pris uden virksomhedens rabat, medmindre andet er aftalt.`,
          `Opladning med Circle K's kort kræver ingen pinkode, og chaufføren kan ikke taste kilometer, chauffør-ID eller bil-ID. Opladningerne tæller heller ikke med i kortets beløbsgrænser. OK's erhvervskort dækker også opladning. Kortene og gebyrerne står i <a href="/til-varebilen/flaadestyring/braendstofkort-og-ladekort/">brændstofkort og ladekort</a>.`
        ],
        efter: [
          `Kilder: ` + a(UNOX, "Uno-X Firmakort") + ` og ` + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 3.2 og 3.5") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Netværkets størrelse",
        tekst: [
          `Et ladekort er mest værd, hvis der er en lader på ruten. Clever oplyser 66.697 ladepunkter, heraf 1.743 hurtig- og lynladere, og skriver, at selskabet sætter fire nye ladepunkter op hver dag.`,
          `Circle K EUROPE Card kan ifølge Circle K's vilkår bruges på mere end 21.000 stationer i 34 europæiske lande. Tallet gælder stationer i hele Europa, mens strøm kun kan købes med kortet i Danmark.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Clever", "66.697", "ladepunkter"],
            ["Heraf hurtig- og lynladere", "1.743", "ladepunkter"],
            ["Circle K EUROPE Card, mere end", "21.000", "stationer"],
            ["Circle K EUROPE Card", 34, "europæiske lande"]
          ],
          note: `Kilder: ` + a(CLEVER, "Clever") + ` og ` + a(CK, "Circle K's vilkår for EUROPE Card") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Prisforskel mellem ladertyper",
        tekst: [
          `OK's lynlader koster 0,40 kr. mere pr. kWh end normalladeren. Med WLTP-forbrug på 19,1–25,1 kWh pr. 100 km fra Kias og Renaults prislister er forskellen 8–10 kr. pr. 100 km.`,
          `Lynladeren er hurtigere, så prisforskellen betaler for den tid, chaufføren sparer. En normallader passer til en bil, der holder stille i flere timer, fx mens chaufføren arbejder hos en kunde. En lynlader passer til en kort pause på ruten.`,
          `Et regneeksempel viser, hvad det betyder over en måned. En varebil, der kører 1.000 km og lader det hele på OK's lynladere, betaler cirka 76–100 kr. mere end på OK's normalladere, regnet med det samme WLTP-forbrug.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr./kWh",
          data: [
            ["Normallader, 3,7–22 kW", 3.49],
            ["Hurtiglader, 23–99 kW", 3.69],
            ["Lynlader, 100 kW og derover", 3.89]
          ],
          note: `Kilde: ` + a(OK, "OK") + `, vejledende priser gældende den 4. oktober 2026 og uændrede den 7. oktober 2026. WLTP-forbruget er fra prislisterne for ` + a(KIA, "Kia PV5 Cargo") + ` og ` + a(RENAULT, "Renault Master E-Tech") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Prisen ændrer sig",
        tekst: [
          `Circle K's pris varierer fra dag til dag, Clevers over døgnet og mellem stederne, og OK skriver, at prisen kan afvige på enkelte lokationer. IONITY skriver, at selskabet kan ændre priserne når som helst.`,
          `Priserne på siden er derfor et øjebliksbillede fra begyndelsen af oktober 2026, og datoen står ved hver kilde. Den pris, der gælder for en opladning, er den, chaufføren ser i appen eller på standeren.`
        ]
      },
      {
        overskrift: "Ladetid på ruten",
        tekst: [
          `Hvor lang tid lynladningen tager, afhænger af bilens højeste DC-effekt. En bil lader ikke hurtigere end den effekt, den selv kan tage imod, selvom laderen kan levere mere.`,
          `Ladetiderne for de enkelte modeller står i <a href="/til-varebilen/el-abonnement/opladning-af-elvarebil-i-praksis/">opladning af elvarebil i praksis</a>.`
        ]
      },
      {
        overskrift: "Lynladning i udlandet",
        tekst: [
          `Kører varebilen til udlandet, skal den lade på et netværk, der virker der. IONITY skriver, at månedsprisen for et abonnement er den samme i alle lande, men at prisen pr. kWh kan variere fra land til land. Circle K's kort kan ikke bruges til strøm uden for Danmark.`
        ],
        punkter: [
          `<strong>IONITY.</strong> Abonnementerne gælder i 23 markeder i Europa.`,
          `<strong>Circle K EUROPE Card.</strong> Med kortet kan du kun købe strøm på Circle K-stationer og hos Circle K's roamingpartnere i Danmark.`,
          `<strong>Ford.</strong> Ford giver erhvervskunder adgang til BlueOval Charge Network med over 450.000 offentlige ladepunkter, herunder IONITY.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["IONITY-abonnementer gælder i", 23, "markeder"],
            ["BlueOval Charge Network, over", "450.000", "ladepunkter"]
          ],
          note: `Ford giver erhvervskunder adgang til BlueOval Charge Network. Kilder: ` + a(IONITY, "IONITY") + ` og ` + a(FORD, "Ford") + `, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: ` + a(IONITY, "IONITY") + `, ` + a(CK, "Circle K") + ` og ` + a(FORD, "Ford") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kvittering og refusion",
        tekst: [
          `Når du lader med Circle K's kort, får du ingen kvittering ved ladestanderen, og fakturaen kan ikke bruges til at søge refusion af elafgift, står der i Circle K's vilkår. Refusionen går til den, der driver ladestanderen, og ` + a(SKAT, "Skattestyrelsen") + ` beskriver ordningen som en refusion til ladeoperatører.`,
          `Reglerne og beløbene står hos Skattestyrelsen. Hvordan virksomheden får refusion for strøm i sine egne ladestandere, står i <a href="/til-varebilen/el-abonnement/refusion-af-elafgift/">refusion af elafgift</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal ladeselskabet vide",
    spoergsmaal_manchet: "Så kan aftalen passe til kørslen.",
    spoergsmaal: [
      "Antal elbiler og forventet kWh pr. bil pr. måned.",
      "Hvor stor en del der lades offentligt, og hvor meget på lynladere.",
      "De ruter og byer, bilerne kører i.",
      "Om opladningen skal faktureres pr. bil eller pr. medarbejder.",
      "Om chaufførerne også skal kunne lade hjemme på samme aftale.",
      "Om bilerne kører i udlandet."
    ],
    faq: [
      ["Hvad koster lynladning pr. kWh?", "Uden abonnement koster det 3,89 kr. på OK's lynladere, 3,99 kr. hos Circle K og 3,86 kr. med IONITY Direct (oktober 2026). Med IONITY Power er prisen 2,29 kr. pr. kWh plus 90 kr. om måneden."],
      ["Skal man have abonnement for at lade?", "Nej. OK og Circle K kræver intet abonnement, og IONITY har både IONITY Direct og en pris i appen uden abonnement."],
      ["Hvornår betaler et ladeabonnement sig?", "IONITY Motion går lige op ved 45 kWh om måneden hos IONITY og Power ved cirka 57 kWh, sammenlignet med IONITY Direct. Over cirka 79 kWh om måneden er Power billigere end Motion. Vi har regnet med priserne den 7. oktober 2026."],
      ["Kan firmabilen lade hos andre ladeselskaber med samme brik?", "Ja, via roaming. Med Clever kan bilen fx lade hos IONITY, EWII, Allego og flere til den pris, der står i Clever-appen."],
      ["Hvad er et ladekort til firmabil?", "Det er en brik eller et kort, hvor opladningen faktureres virksomheden. Clever Key er knyttet til bilen og afregnes efter forbrug med én faktura om måneden."],
      ["Hvilket stik bruger lynladere til varebiler?", "De bruger CCS (Combo 2). En offentlig ladestander over 22 kW, der bruger jævnstrøm, skal mindst have Combo 2-stik, skriver Sikkerhedsstyrelsen. AC-ladning sker med Type 2."],
      ["Kan man bruge ladefakturaen til refusion af elafgift?", "Ikke fakturaen fra Circle K's EUROPE Card, står der i Circle K's vilkår. Refusionen går til den, der driver ladestanderen."],
      ["Kan et IONITY-abonnement opsiges?", "Ja. Motion og Power har ingen mindsteperiode og kan opsiges med en måneds varsel. Motion 365 og Power 365 løber i 12 måneder og slutter af sig selv."],
      ["Hvad koster Clever One Business Van?", "Abonnementet koster 999 kr. om måneden, og Premium koster 1.099 kr. Bindingsperioden er 2 måneder, og abonnementet giver fri opladning i Clevers netværk, også på lynladerne."]
    ],
    kilder: [
      { navn: "OK: Priser på elbil-opladning til erhverv", url: OK, dato: "2026-10-07" },
      { navn: "Circle K: Ladepriser i dag", url: CKP, dato: "2026-10-07" },
      { navn: "Circle K: Priser på opladning af elbil", url: CKO, dato: "2026-10-07" },
      { navn: "IONITY: Subscriptions", url: IONITY, dato: "2026-10-07" },
      { navn: "Clever: Clever Key", url: KEY, dato: "2026-10-07" },
      { navn: "Clever: Clever One Business Van", url: VAN, dato: "2026-10-07" },
      { navn: "Clever: Opladning på andre netværk (erhverv)", url: ROAM, dato: "2026-10-07" },
      { navn: "Clever: Erhverv", url: CLEVER, dato: "2026-10-07" },
      { navn: "Uno-X: Uno-X Firmakort", url: UNOX, dato: "2026-10-07" },
      { navn: "Circle K: Vilkår og betingelser for EUROPE Card (gældende fra 1. september 2025)", url: CK, dato: "2026-10-07" },
      { navn: "Ford: Prisliste E-Transit Custom (07-07-2026)", url: FORDPL, dato: "2026-10-04" },
      { navn: "Ford: Opladning til erhverv", url: FORD, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Opladning af el-biler", url: SIK, dato: "2026-10-07" },
      { navn: "Kia: Priser PV5 Cargo L2H1", url: KIA, dato: "2026-10-04" },
      { navn: "Renault: Prisliste Master E-Tech electric (1.10.–31.12.2026)", url: RENAULT, dato: "2026-10-04" },
      { navn: "Skattestyrelsen: Udvidet refusionsordning for elafgift ved opladning af elbiler", url: SKAT, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Sikkerhedsstyrelsen (efter bekendtgørelse nr. 57): en normal ladestander kan overføre højst 22 kW og skal mindst have Type 2-stik efter EN 62196-2; en ladestander, der kan overføre mere end 22 kW, er en højeffektladestander, og bruger den jævnstrøm, skal den mindst have Combo 2-stik efter EN 62196-3.", SIK],
    ["OK: der er ikke noget abonnement på OK's ladestationer; betalingen klares med OK Erhverv-appen, hvor man kan finde nærmeste ladestation, se priser, starte og stoppe ladningen og betale; OK oplyser også steder, hvor man kan betale opladning med betalingskort.", OK],
    ["OK's vejledende priser 3,49 kr. (normallader 3,7-22 kW), 3,69 kr. (hurtiglader 23-99 kW) og 3,89 kr. (lynlader 100+ kW) pr. kWh inkl. moms er gældende den 07.10.2026.", OK],
    ["Circle K: opladning på Circle K's lynladestandere kræver intet abonnement, man betaler kun for den strøm, man bruger, og prisen varierer fra dag til dag.", CKO],
    ["RETTET: Circle K's prisside angiver nu, at lynladerprisen 3,99 kr. pr. kWh (dato 2026-10-01) er inkl. moms. Den gamle note skrev, at siden ikke angiver moms.", CKP],
    ["IONITY Direct: opladning uden forudgående registrering og uden abonnement eller månedsgebyr; QR-koden på laderen scannes eller IONITY-appen bruges, betalingsoplysninger lægges ind; dansk pris 3,86 kr. pr. kWh.", IONITY],
    ["IONITY-appen uden abonnement giver en lidt lavere kWh-pris; dansk pris 3,67 kr. pr. kWh (go-kwh-price).", IONITY],
    ["IONITY: priserne er de aktuelle minimumspriser og kan ændres af IONITY når som helst; prisen ved ladestanderen kan være højere; alle priser er inkl. lokal moms.", IONITY],
    ["IONITY Motion og Power (månedsabonnementer) gælder i 23 europæiske lande, har ingen mindsteperiode og kan opsiges når som helst med en måneds varsel.", IONITY],
    ["IONITY Motion 365 og Power 365 betales som et engangsbeløb forud for 12 måneder, har samme kWh-pris som det tilsvarende månedsabonnement og slutter automatisk efter 12 måneder uden at blive fornyet.", IONITY],
    ["IONITY: månedsprisen og årsprisen er den samme, men kWh-prisen kan variere fra land til land.", IONITY],
    ["Regneeksempel med IONITY's danske priser (Direct 3,86, app 3,67, Motion 45 kr. + 2,86, Power 90 kr. + 2,29): Power er billigere end Motion over ca. 79 kWh om måneden (45 kr. / 0,57 kr.); ved 100 kWh koster Direct 386 kr., Motion 331 kr. og Power 319 kr.; mod app-prisen går Motion lige op ved ca. 56 kWh (45/0,81) og Power ved ca. 65 kWh (90/1,38).", IONITY],
    ["Clever One Business Van er til firmabiler på gule plader og papegøjeplader; Clever skelner på nummerpladen, så en ombygget personbil på gule plader skal have Van; bindingsperiode 2 måneder med mindstepris 1.998 kr. (Van) og 2.198 kr. (Premium) ekskl. moms; + evt. energitillæg; fri opladning på hele netværket inkl. lyn og hjemme ved tilvalg af ladeboks.", VAN],
    ["Clever One Business Van: med ladeboks hjemme betaler medarbejderen først selv strømmen, og Clever tilbagebetaler hver måned efter en sats; Premium bygger satsen på elpriserne over hele døgnet og giver højere tilbagebetaling.", VAN],
    ["Clever Key: forbrugsafregnet ladebrik til pulje- og flådebiler; gratis at komme i gang; én månedlig faktura med samlet ladeforbrug; brikken skal følge bilen og kan ikke bruges til flere biler, men kan blive i bilen, så flere brugere lader med samme brik; 1,41 kr. pr. kWh ekskl. moms for normal- og hurtigopladning op til 99 kW på virksomhedens egne erhvervsladebokse; på Clevers offentlige netværk altid en nedsat pris sammenlignet med standardprisen; kan ikke købes af privatpersoner; Clever Link er til medarbejdernes private elbil.", KEY],
    ["Clever: med Clever One Business kan man lade frit hos alle Clevers ladepartnere; i Clever-appen kan man se priser, starte opladning og fakturere omkostninger videre til virksomheden; Clever yder ikke support på andres netværk, og ved problemer kontaktes den pågældende ladeoperatør.", ROAM],
    ["Clever sætter fire nye ladepunkter op hver eneste dag.", CLEVER],
    ["Circle K har indgået roamingsamarbejde på en række ladepunkter i Danmark (vilkår, afsnit 1).", CK],
    ["Circle K, vilkår afsnit 3.5: el kræver et kort med ladesymbol; på Circle K's egne ladestandere er prisen Circle K's gældende listepris på el med fradrag af evt. aftalt rabat; på E.ON's danske ladestandere gælder en fast prisaftale uden fradrag af den aftalte rabat, hvis ikke andet er aftalt; opladning kræver ikke pinkode, og km, chauffør- og bil-ID kan ikke indtastes.", CK],
    ["Circle K, vilkår afsnit 3.2: transaktioner vedrørende opladning indgår ikke i beløbsbegrænsningerne.", CK],
    ["Uno-X Firmakort: automatisk rabat ved tankning, opladning og vask hos Uno-X; opladning på alle Uno-X' lynladere og på mere end 5.000 ladepunkter i hele Danmark; én samlet faktura.", UNOX],
    ["Skattestyrelsen beskriver refusionsordningen for elafgift ved opladning af elbiler som en ordning, hvor ladeoperatører får refusion.", SKAT],
    ["Regneeksempel: OK's lynlader koster 0,40 kr. mere pr. kWh end normalladeren; 1.000 km med WLTP-forbrug 19,1-25,1 kWh pr. 100 km er 191-251 kWh, så forskellen er ca. 76-100 kr.", OK]
  ]
};
