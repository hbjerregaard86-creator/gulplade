// Underside /til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/ (07-10-2026)
var JV9 = `https://info.skat.dk/data.aspx?oid=1947971`;
var JV8 = `https://info.skat.dk/data.aspx?oid=1947969`;
var SKAT = `https://skat.dk/erhverv/ansatte-og-loen/personalegoder-naar-du-er-arbejdsgiver/fri-bil-til-dine-medarbejdere-firmabil`;
var CT = `https://clever.dk/erhverv/viden/forstaa-clevers-tilbagebetaling/`;
var CV = `https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-one-business-van/`;
var OK = `https://www.ok.dk/privat/produkter/opladning/hjemme/ladeboks-priser`;
var NF = `https://norlys.dk/erhverv/opladning/firmabil/`;
var NI = `https://norlys.dk/opladning/ladeboks-og-installation/`;
var SIK = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/opladning-el-biler`;
var UDV = `https://skat.dk/erhverv/afgifter-paa-varer-og-ydelser-punktafgifter/nyhedsbrev-afgifter/udvidet-refusionsordning-for-elafgift-ved-opladning-af-elbiler`;

module.exports = {
  id: "el-abonnement/ladestander-hjemme-hos-medarbejderen",
  side: {
    slug: "ladestander-hjemme-hos-medarbejderen",
    navn: "Ladestander hjemme hos medarbejderen",
    titel: "Ladestander hos medarbejder: skat og strøm",
    kort: `Afregning af strømmen hjemme og Skattestyrelsens regler for arbejdsgiverbetalt ladestander og el.`,
    beskrivelse: `Ladestander hjemme hos medarbejderen: Skattestyrelsens regler for arbejdsgiverbetalt ladestander og strøm, afregning med måler og priser på ladeboks.`,
    manchet: `Kører varebilen hjem, kan den lade i medarbejderens indkørsel. Strømmen løber gennem medarbejderens elmåler, og arbejdsgiveren betaler den tilbage. Skattestyrelsen har regler for ladestanderen, og Skatterådet har taget stilling til refusion af strømmen.`,
    visuel: {
      hero: "el-abonnement",
      hero_el: true,
      kort_fortalt: [
        ["Skattefri ladestander", "fra 1. juli 2021", "til fri elbil eller plug-in hybrid"],
        ["Ladestander som gave", "mindst 6 mdr.", "sammenhængende med fri elbil gør gaven skattefri"],
        ["Clever One Business Van", "999 kr. pr. md.", "med fri opladning i Clevers netværk"],
        ["Ladeboks og installation", "5.999 kr.", "hos Clever, standardinstallation"]
      ],
      toc: true,
      stribe: { drivmiddel: "el", titel: "Elvarebiler med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Hvornår bilen lader hjemme",
        tekst: [
          `En varebil på gule plader må kun køre hjem i bestemte situationer, fx ved skiftende arbejdssteder eller vagtordning. Reglerne står i <a href="/haandbogen/tage-varebilen-med-hjem/">tage varebilen med hjem</a>.`,
          `Når bilen må holde ved medarbejderens bolig om natten, kan den lade der. Så starter den dagen med det batteri, den skal bruge, og medarbejderen skal ikke forbi en lader eller firmaets adresse først.`,
          `Strømmen løber gennem medarbejderens egen elmåler. Derfor kræver hjemmeladning en aftale om, hvordan strømmen bliver målt og betalt tilbage, og om hvem der ejer ladeboksen.`
        ]
      },
      {
        overskrift: "Strømmens vej hjemme",
        tekst: [
          `Ladeboksen er tilsluttet medarbejderens egen eltavle, så husstanden betaler først strømmen over sin elregning. Ladeoperatøren aflæser boksens måler hver måned og refunderer de målte kWh, skriver Clever.`,
          `Clever kalder det tilbagebetaling, fordi medarbejderen først selv lægger ud for strømmen. Strømmen til firmabilen er allerede betalt af virksomheden gennem abonnementet.`,
          `Måleren i ladeboksen skiller bilens strøm fra resten af husstandens forbrug. Det er den måling, både afregningen og skattereglerne bygger på.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Strømmen går fra nettet gennem husstandens elmåler og eltavle til ladeboksen og firmabilen"><defs><marker id="pil-el-abonnement-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><polygon points="10,90 95,45 180,90" class="tg-profil"/><rect x="20" y="90" width="150" height="110" class="tg-rum"/><line x1="0" y1="200" x2="400" y2="200" class="tg-gulvlinje"/><text x="2" y="132">Net</text><rect x="35" y="125" width="50" height="30" class="tg-kasse"/><text x="60" y="144" text-anchor="middle">Måler</text><rect x="105" y="125" width="50" height="30" class="tg-kasse"/><text x="130" y="144" text-anchor="middle">Tavle</text><g class="tg-maal"><line x1="0" y1="140" x2="33" y2="140" marker-end="url(#pil-el-abonnement-3)"/><line x1="85" y1="140" x2="103" y2="140" marker-end="url(#pil-el-abonnement-3)"/><line x1="155" y1="140" x2="178" y2="140" marker-end="url(#pil-el-abonnement-3)"/></g><rect x="180" y="115" width="26" height="45" class="tg-modul"/><line x1="206" y1="150" x2="255" y2="158" class="tg-doer"/><rect x="255" y="120" width="135" height="62" rx="8" class="tg-rum"/><circle cx="285" cy="189" r="11" class="tg-kasse"/><circle cx="360" cy="189" r="11" class="tg-kasse"/><g class="tg-call"><line x1="193" y1="128" x2="230" y2="44"/><circle cx="193" cy="128" r="3"/><text x="215" y="24" class="tg-call__navn">Måler i ladeboksen</text><text x="215" y="38" class="tg-call__under">kWh til firmabilen</text></g><g class="tg-call"><line x1="60" y1="152" x2="60" y2="214"/><circle cx="60" cy="152" r="3"/><text x="14" y="228" class="tg-call__navn">Husstandens elmåler</text><text x="14" y="242" class="tg-call__under">betaler elregningen</text></g><g class="tg-call"><line x1="193" y1="158" x2="225" y2="214"/><circle cx="193" cy="158" r="3"/><text x="215" y="228" class="tg-call__navn">Ladeoperatøren</text><text x="215" y="242" class="tg-call__under">refunderer målte kWh</text></g></svg>`,
          tekst: `Skematisk. Strømmen fra nettet til ladeboksen hos medarbejderen. Kilde: <a href="${CT}" rel="noopener">Clever</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Skattestyrelsens regler",
        tekst: [
          `Skattereglerne for ladestandere hjemme er knyttet til beskatningen af fri bil. Tabellen viser de situationer, Skattestyrelsen og Den juridiske vejledning beskriver.`,
          `Strøm er en almindelig driftsudgift ved en firmabil, på samme måde som forsikring, vægtafgift og reparationer. Ved fri bil er strømmen derfor allerede med i den skattepligtige værdi af bilen.`
        ],
        tabel: {
          kolonner: ["Situation", "Hvad Skattestyrelsen skriver"],
          raekker: [
            ["Ladestander til fri elbil eller plug-in hybrid", "Skattefri for medarbejderen fra 1. juli 2021, også installationen"],
            ["Ladestanderen foræres til medarbejderen", "Skattefri, hvis medarbejderen har haft fri elbil i mindst 6 sammenhængende måneder; ellers beskattes værdi og installation"],
            ["Ladestander til konventionel fri bil", "Ikke omfattet af skattefriheden"],
            ["Strøm til firmabeskattet elbil", "Driftsudgift, der er indeholdt i beskatningen af fri bil; refusion kræver, at strømmen kan dokumenteres, fx med separat måler"],
            ["Strøm til specialindrettet firmabil", "Arbejdsgiveren kan refundere udgiften uden beskatning af sparet privatforbrug, når den kan individualiseres via en måler"]
          ],
          note: `Kilder: <a href="${SKAT}" rel="noopener">Skattestyrelsen: Fri bil til dine medarbejdere</a>, <a href="${JV9}" rel="noopener">Den juridiske vejledning C.A.5.14.1.9</a> og <a href="${JV8}" rel="noopener">C.A.5.14.1.8</a> (SKM2015.376.SR og SKM2021.283.SR), set den 4. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Ladestanderen til fri elbil",
        tekst: [
          `Fra 1. juli 2021 skal værdien af ladestanderen og installationen ikke længere lægges oven i værdien af fri elbil eller plug-in hybridbil. Før da regnede Skatterådet ladestanderen og installationen med i beregningsgrundlaget for fri bil.`,
          `Skattefriheden gælder kun, når arbejdsgiveren samtidig stiller en fri elbil eller plug-in hybridbil til rådighed, som lader via ladestanderen. En ladestander hjemme hos en medarbejder med en konventionel fri bil er ikke omfattet.`,
          `Overtager medarbejderen ladestanderen til privat brug, er den skattefri efter mindst 6 sammenhængende måneder med fri elbil eller plug-in hybridbil. Ladestanderen skal have været der i samme periode. Er perioden kortere, skal arbejdsgiveren indberette markedsværdien af ladestanderen og installationen.`,
          `Samme skattefrihed gælder for selvstændige, der bruger virksomhedsordningen, og for hovedaktionærer.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Beslutningstræ. Er den fri bil en elbil eller plug-in hybrid, er ladestanderen og installationen skattefri. Foræres ladestanderen til medarbejderen, er den skattefri efter mindst 6 sammenhængende måneder med fri elbil, ellers beskattes den. En konventionel fri bil er ikke omfattet."><rect class="tg-kasse" x="100" y="4" width="200" height="44"/><text x="200" y="22" text-anchor="middle">Er den fri bil en elbil</text><text x="200" y="38" text-anchor="middle">eller plug-in hybrid?</text><line class="tg-skillevaeg" x1="200" y1="48" x2="200" y2="64"/><line class="tg-skillevaeg" x1="60" y1="64" x2="300" y2="64"/><line class="tg-skillevaeg" x1="60" y1="64" x2="60" y2="86"/><line class="tg-skillevaeg" x1="300" y1="64" x2="300" y2="80"/><text x="66" y="80">nej</text><text x="306" y="76">ja</text><rect class="tg-kasse" x="0" y="86" width="120" height="44"/><text x="60" y="104" text-anchor="middle">Konventionel bil</text><text x="60" y="120" text-anchor="middle">ikke omfattet</text><rect class="tg-modul" x="200" y="80" width="200" height="44"/><text class="tg-modul__tekst" x="300" y="98" text-anchor="middle">LADESTANDER OG</text><text class="tg-modul__tekst" x="300" y="114" text-anchor="middle">INSTALLATION SKATTEFRI</text><line class="tg-skillevaeg" x1="300" y1="124" x2="300" y2="150"/><rect class="tg-kasse" x="200" y="150" width="200" height="36"/><text x="300" y="172" text-anchor="middle">Foræres til medarbejderen?</text><line class="tg-skillevaeg" x1="250" y1="186" x2="250" y2="200"/><line class="tg-skillevaeg" x1="350" y1="186" x2="350" y2="200"/><text class="tg-fremhaev" x="250" y="214" text-anchor="middle">mindst 6 mdr.</text><text x="250" y="228" text-anchor="middle">skattefri</text><text class="tg-fremhaev" x="350" y="214" text-anchor="middle">under 6 mdr.</text><text x="350" y="228" text-anchor="middle">beskattes</text><text class="tg-lille" x="0" y="228">FRA 1. JULI 2021</text></svg>`,
          tekst: `Skematisk. Månederne er sammenhængende måneder med fri elbil eller plug-in hybridbil og ladestander ved bopælen. Kilder: <a href="${JV9}" rel="noopener">Den juridiske vejledning C.A.5.14.1.9</a> og <a href="${SKAT}" rel="noopener">Skattestyrelsen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Varebilen uden fri bil",
        tekst: [
          `En varebil på gule plader beskattes som udgangspunkt ikke som fri bil. Skatterådets svar i SKM2021.283.SR handlede om opladning af et specialindrettet køretøj ved medarbejderens bopæl. Medarbejderen skulle ikke beskattes af arbejdsgiverens refusion, fordi eludgiften kunne individualiseres via en måler.`,
          `At udgiften kan individualiseres betyder, at strømmen til bilen kan måles for sig og skilles fra husstandens øvrige forbrug. I sagen sørgede arbejdsgiveren for installationen af ladestanderen.`
        ]
      },
      {
        overskrift: "Separat måling",
        tekst: [
          `I SKM2015.376.SR var det en forudsætning, at ladestanderen kun blev brugt til den pågældende firmabil. Så kunne en separat elmåler, der kun måler ladestanderens forbrug, danne grundlag for refusionen.`,
          `Det skulle samtidig kun være muligt at lade bilens batteri og ikke medarbejderens andre elektriske apparater.`,
          `I SKM2025.394.SR fik en arbejdsgiver et nej. Arbejdsgiveren ville skattefrit betale medarbejderne for strøm til at lade elektronikken i indsatslederbiler hjemme, men modellen gav ikke tilstrækkelig dokumentation for den enkelte medarbejders forbrug.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Skatterådets svar", "Bilen og målingen", "Skattefri refusion"],
          raekker: [
            ["SKM2015.376.SR", "Firmabil med fri bil, ladestander kun til bilen", "ja"],
            ["SKM2021.283.SR", "Specialindrettet køretøj, strømmen målt med måler", "ja"],
            ["SKM2025.394.SR", "Elektronik i indsatslederbiler, uden tilstrækkelig dokumentation", "nej"]
          ],
          note: `Kilde: <a href="${JV9}" rel="noopener">Den juridiske vejledning C.A.5.14.1.9</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tre måder at afregne strømmen",
        tekst: [
          `Arbejdsgiveren kan betale strømmen på tre måder. Fælles for dem er, at udgiften skal kunne knyttes til bilen.`
        ],
        punkter: [
          `<strong>Direkte betaling.</strong> Arbejdsgiveren kan afholde udgiften direkte, fx med en brugerkonto på offentlige ladere eller ladestanderen på arbejdspladsen.`,
          `<strong>Refusion af udlæg.</strong> Medarbejderen betaler over sin elregning, og arbejdsgiveren refunderer de målte kWh.`,
          `<strong>Via ladeoperatør.</strong> Operatøren måler forbruget i ladeboksen og refunderer medarbejderen hver måned. Clever beregner refusionen ud fra boksens målte kWh og udbetaler den i starten af den næstkommende måned, fx for januar i starten af marts.`
        ],
        efter: [
          `Arbejdsgiveren kan afholde udgifterne direkte eller efter medarbejderens udlæg. Afgørende er, at udgifterne kan individualiseres til bilen, skriver Den juridiske vejledning.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Tre måder at afregne strømmen: arbejdsgiveren betaler direkte, arbejdsgiveren refunderer medarbejderens udlæg, eller ladeoperatøren refunderer medarbejderen hver måned."><text class="tg-fremhaev" x="0" y="16">Direkte betaling</text><rect class="tg-modul" x="0" y="30" width="120" height="36"/><text class="tg-modul__tekst" x="8" y="53">ARBEJDSGIVER</text><line class="tg-pil" x1="14" y1="66" x2="14" y2="148"/><path class="tg-pil" d="M8,140 L14,148 L20,140"/><text x="24" y="100">betaler</text><text x="24" y="114">direkte</text><rect class="tg-kasse" x="0" y="150" width="120" height="36"/><text x="8" y="173">Ladestander</text><text x="0" y="206">fx brugerkonto</text><text class="tg-fremhaev" x="140" y="16">Refusion af udlæg</text><rect class="tg-modul" x="140" y="30" width="120" height="36"/><text class="tg-modul__tekst" x="148" y="53">ARBEJDSGIVER</text><line class="tg-pil" x1="154" y1="66" x2="154" y2="148"/><path class="tg-pil" d="M148,140 L154,148 L160,140"/><text x="164" y="100">refunderer</text><text x="164" y="114">målte kWh</text><rect class="tg-kasse" x="140" y="150" width="120" height="36"/><text x="148" y="173">Medarbejder</text><text x="140" y="206">betaler elregning</text><text class="tg-fremhaev" x="280" y="16">Via ladeoperatør</text><rect class="tg-modul" x="280" y="30" width="120" height="36"/><text class="tg-modul__tekst" x="288" y="53">LADEOPERATØR</text><line class="tg-pil" x1="294" y1="66" x2="294" y2="148"/><path class="tg-pil" d="M288,140 L294,148 L300,140"/><text x="304" y="100">refunderer</text><text x="304" y="114">hver måned</text><rect class="tg-kasse" x="280" y="150" width="120" height="36"/><text x="288" y="173">Medarbejder</text><text x="280" y="206">målt i ladeboksen</text></svg>`,
          tekst: `Tegningen er skematisk og viser de tre måder, arbejdsgiveren kan betale strømmen på. Kilder: <a href="${JV9}" rel="noopener">Den juridiske vejledning C.A.5.14.1.9</a> og <a href="${CT}" rel="noopener">Clever</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan beregnes tilbagebetalingssatsen",
        tekst: [
          `Hos Clever ganges forbruget i ladeboksen med en sats, der skifter hver måned. Satsen afhænger af produktet. Clever skriver, at tilbagebetalingen med Premium er højere end med det almindelige produkt.`
        ],
        punkter: [
          `<strong>Clever One Business.</strong> Satsen er gennemsnitsprisen kl. 24–06 hele året og kl. 11–17 i april–september.`,
          `<strong>Clever One Business Premium.</strong> Satsen er gennemsnitsprisen over hele døgnet på tværs af Danmark.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Måneden slutter", "Operatøren aflæser, hvor mange kWh boksen har brugt."],
            ["Satsen", "Forbruget i kWh ganges med månedens tilbagebetalingssats."],
            ["Udbetaling", "Pengene for en måned bliver udbetalt i starten af den anden måned efter, så januar bliver betalt i starten af marts."]
          ]
        },
        efter: [
          `Kilder: <a href="${CT}" rel="noopener">Clever: Forstå Clevers tilbagebetaling</a>, set den 4. oktober 2026, og <a href="${CV}" rel="noopener">Clever One Business Van</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvad satsen består af",
        tekst: [
          `Clevers sats består af fire dele. Det er indkøbsprisen på strøm fra elbørsen Nord Pool, elafgiften, nettariffen til det lokale netselskab som landsgennemsnit og systemtariffen til Energinet.`,
          `Har husstanden elvarme eller egen produktion af strøm, er elafgiften ikke med i tilbagebetalingen. Clever nævner jordvarme, elradiatorer og varmepumpe som elvarme og solceller og egen vindmølle som egen produktion.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Clevers tilbagebetalingssats består af strømprisen fra Nord Pool, elafgift, nettarif og systemtarif. Elafgiften er ikke med, hvis husstanden har elvarme eller egen produktion af strøm. Satsen ganges med de kWh, ladeboksen har målt."><text class="tg-fremhaev" x="0" y="16">Tilbagebetalingssatsen pr. kWh</text><rect class="tg-kasse" x="0" y="30" width="82" height="50"/><text x="41" y="52" text-anchor="middle">Strøm</text><text x="41" y="68" text-anchor="middle">Nord Pool</text><text class="tg-fremhaev" x="94" y="60" text-anchor="middle">+</text><rect class="tg-modul" x="106" y="30" width="82" height="50"/><text class="tg-modul__tekst" x="147" y="52" text-anchor="middle">ELAFGIFT</text><text x="147" y="68" text-anchor="middle">fra staten</text><text class="tg-fremhaev" x="200" y="60" text-anchor="middle">+</text><rect class="tg-kasse" x="212" y="30" width="82" height="50"/><text x="253" y="52" text-anchor="middle">Nettarif</text><text x="253" y="68" text-anchor="middle">gennemsnit</text><text class="tg-fremhaev" x="306" y="60" text-anchor="middle">+</text><rect class="tg-kasse" x="318" y="30" width="82" height="50"/><text x="359" y="52" text-anchor="middle">Systemtarif</text><text x="359" y="68" text-anchor="middle">Energinet</text><g class="tg-call"><line x1="147" y1="80" x2="147" y2="104"/><circle cx="147" cy="80" r="3"/><text class="tg-call__navn" x="154" y="104">Ikke med ved elvarme</text><text class="tg-call__under" x="154" y="118">eller egen produktion</text></g><text x="0" y="150">kWh i ladeboksen × satsen = tilbagebetaling</text></svg>`,
          tekst: `Skematisk. Kasserne viser ikke, hvor stor hver del er. Kilde: <a href="${CT}" rel="noopener">Clever: Forstå Clevers tilbagebetaling</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Solceller hos medarbejderen",
        tekst: [
          `Fra 1. januar 2026 kan ladeoperatører få refusion af elafgift også hos husstande med solceller eller andre VE-anlæg. Det kræver husstandens samtykke og timedata fra DataHub. Se <a href="/til-varebilen/el-abonnement/refusion-af-elafgift/">refusion af elafgift</a>.`,
          `Det er ladeoperatøren, der får refusionen, og ikke medarbejderen eller virksomheden. Operatøren kan kun få refusion for den strøm, husstanden trækker fra nettet og bruger i ladestanderen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Samtykke", "Husstanden giver samtykke."],
            ["Timedata", "Ladeoperatøren bruger timedata fra DataHub."],
            ["Refusion", "Ladeoperatøren kan få refusion af elafgift, også når husstanden har solceller."]
          ]
        }
      },
      {
        overskrift: "Uden udlæg for medarbejderen",
        tekst: [
          `Clever sælger også strømproduktet Clever Power til medarbejderens hjem. Med det trækkes ladeboksens forbrug automatisk fra på husstandens samlede elregning, så medarbejderen hverken lægger ud eller venter på tilbagebetalingen.`,
          `Clever kalder det modregning en til en, og firmakørsel og privatøkonomi bliver holdt adskilt. Clever Power er et variabelt strømprodukt, så husstanden køber sin strøm hos Clever.`,
          `Clever skriver, at de fleste virksomheder ikke vil blande sig i, hvilken elaftale medarbejderne har derhjemme. Det er som oftest virksomhedens bilpolitik, der bestemmer, hvilket produkt der bruges til opladning.`
        ]
      },
      {
        overskrift: "Abonnement med hjemmeladning",
        tekst: [
          `Clever One Business Van er Clevers abonnement til firmabiler på gule plader og papegøjeplader. Det giver fri opladning i Clevers netværk med 60.000 ladepunkter og fri opladning hjemme, hvis virksomheden vælger en ladeboks til.`,
          `Clevers priser på siden er uden moms. Abonnementet koster 999 kr. om måneden eller 1.099 kr. med Premium, plus et eventuelt energitillæg. Mindsteprisen i bindingsperioden på 2 måneder er 1.998 kr. og 2.198 kr.`,
          `Clever skelner mellem varebil og personbil på nummerpladen. En ombygget personbil på gule plader skal derfor have et af Van-produkterne.`
        ],
        tabel: {
          kolonner: ["Produkt", "Refusion af hjemmeladning", "Pr. md."],
          raekker: [
            ["Clever One Business Van", "Nat (kl. 24–06) hele året og kl. 11–17 i april–september", "999 kr."],
            ["Clever One Business Van Premium", "Døgnet rundt", "1.099 kr."]
          ],
          note: `Kilde: <a href="${CV}" rel="noopener">Clever One Business Van</a>, set den 7. oktober 2026. Fri opladning i Clevers netværk er med. Mindst 2 måneders binding. Ladeboks og standardinstallation 5.999 kr., 2.000 kr. mindre ved eksisterende kabelføring, hvis Clevers installationspartner godkender installationen.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Priser på ladeboks til privatkunder",
        tekst: [
          `Køber medarbejderen selv ladeboksen, gælder forhandlernes privatpriser. OK sælger og udlejer en Domo-ladeboks uden fast kabel, og prisen afhænger af, om husstanden også køber strøm hos OK.`,
          `Prisen er med standardinstallation, og en udvidet installation kan koste ekstra. Der er 6 måneders binding, og priserne gælder til den 2. februar 2027.`
        ],
        tabel: {
          kolonner: ["OK ladeboks", "Engangspris", "Pr. md."],
          raekker: [
            ["Køb, med el fra OK", "4.995 kr.", "49 kr."],
            ["Køb, uden el fra OK", "6.995 kr.", "69 kr."],
            ["Leje, med el fra OK", "0 kr.", "169 kr."],
            ["Leje, uden el fra OK", "2.000 kr.", "219 kr."]
          ],
          note: `Kilde: <a href="${OK}" rel="noopener">OK: Ladeboks-priser</a>, set den 7. oktober 2026. OK's vejledende priser til privatkunder med standardinstallation, gældende til 2. februar 2027, 6 måneders binding. Strømmen afregnes særskilt.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr. pr. md.",
          data: [
            ["Køb, med el fra OK", 49, "engangspris 4.995 kr."],
            ["Køb, uden el fra OK", 69, "engangspris 6.995 kr."],
            ["Leje, med el fra OK", 169, "engangspris 0 kr."],
            ["Leje, uden el fra OK", 219, "engangspris 2.000 kr."]
          ],
          note: `Kilde: <a href="${OK}" rel="noopener">OK: Ladeboks-priser</a>, set den 7. oktober 2026. OK's priser til privatkunder er vejledende og med moms og standardinstallation. De gælder til den 2. februar 2027 med 6 måneders binding. Strømmen betales for sig.`
        }
      },
      {
        overskrift: "Forbrug eller fast pris",
        tekst: [
          `Norlys afregner opladning af firmabiler på to måder: efter faktisk forbrug, hvor virksomheden betaler for den strøm, der bruges, eller som fast pris pr. måned med et antal inkluderede kWh.`,
          `Ifølge Norlys passer forbrug bedst, når kørslen svinger fra måned til måned. Fast pris passer til en stabil kørsel, fordi udgiften er nem at budgettere.`,
          `Løsningen dækker opladning hjemme, på arbejdet og på farten, også når medarbejderen ikke er elkunde hos Norlys. Tilbagebetalingen for hjemmeladning beregnes som udgangspunkt ud fra Nord Pools spotpris og afhænger af, om medarbejderen har elaftale hos Norlys.`
        ],
        efter: [
          `Kilde: <a href="${NF}" rel="noopener">Norlys: Ladeboks til firmabiler</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Standardinstallation",
        tekst: [
          `Norlys' standardinstallation af en ladeboks hos private omfatter rådgivning om placering, opsætning og test af en autoriseret elektriker og en introduktion til boks, ladebrik og app. Længere kabel, en gruppetavle eller gravning af en rende er ekstra arbejde, som afregnes med installatøren Gronell.`,
          `Står der allerede en ladeboks, kan nedtagningen af den være med i standardinstallationen. Elektrikeren gennemgår opgaven på forhånd, så husstanden kender pris og muligheder, før arbejdet går i gang.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Kabel fra eltavle, op til", "20", "m"],
            ["Kombirelæ", "20", "A"],
            ["Gennemboringer, op til", "2", "stk."]
          ],
          note: `Kilde: <a href="${NI}" rel="noopener">Norlys: Ladeboks og installation</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Med eller uden fast kabel",
        tekst: [
          `Norlys sælger ladebokse med fast ladekabel og uden kabel, hvor brugeren sætter sit eget kabel i. Boksen uden kabel bestilles gennem kundeservice.`,
          `Begge bokse lader med op til 11 kW. Boksen med fast kabel har et 6 meter langt Type 2-kabel, og Norlys skriver, at de fleste vælger den. Boksen uden kabel passer, hvis man skifter mellem biler.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "Med fast kabel", "Uden fast kabel"],
          raekker: [
            ["Model", "Amina C", "Alfen Eve Single S-line"],
            ["Ladeeffekt", "Op til 11 kW", "Op til 11 kW"],
            ["Kabel", "6 m fast Type 2-kabel", "Type 2-stik, eget kabel"],
            ["Tåler temperaturer", "-30 til +40 °C", "-25 til +45 °C"]
          ],
          note: `Kilde: <a href="${NI}" rel="noopener">Norlys: Ladeboks og installation</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Installationen",
        tekst: [
          `En ladeboks og en ekstra sikringsgruppe i medarbejderens eltavle skal installeres af en autoriseret elinstallatørvirksomhed, skriver Sikkerhedsstyrelsen. Dagligt brug af et mode 2-kabel i en almindelig stikkontakt frarådes, og Sikkerhedsstyrelsen anbefaler en vægmonteret ladeboks.`,
          `Opladning med et mode 2-kabel i en almindelig stikkontakt kaldes ofte mormorladning. En almindelig stikkontakt bør ikke belastes med mere end 6 A over længere tid, fordi normerne for danske husholdningsstikkontakter ikke tager højde for den slags belastning.`,
          `Belastes stikkontakten med over 6 A i mere end 2 timer, skal den være beregnet til længerevarende høj belastning, og der bør være en separat gruppe. En dedikeret stikkontakt til opladning skal have sin egen fejlstrømsafbryder, mindst type A og højst 30 mA. Forlængerledninger er ikke tilladt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To måder at lade hjemme. Til venstre et mode 2-kabel i en almindelig stikkontakt, som højst bør belastes med 6 A over længere tid. Til højre en vægmonteret ladeboks, der er sluttet fast til installationen med egen fejlstrømsafbryder i tavlen."><text class="tg-fremhaev" x="0" y="16">Mode 2-kabel</text><text class="tg-fremhaev" x="210" y="16">Vægmonteret ladeboks</text><line class="tg-skillevaeg" x1="200" y1="26" x2="200" y2="180"/><rect class="tg-kasse" x="10" y="40" width="40" height="50"/><text x="30" y="80" text-anchor="middle">Tavle</text><line class="tg-skillevaeg" x1="50" y1="65" x2="112" y2="65"/><line class="tg-skillevaeg" x1="112" y1="65" x2="112" y2="92"/><rect class="tg-kasse" x="104" y="92" width="16" height="16"/><line class="tg-doer" x1="112" y1="108" x2="140" y2="120"/><rect class="tg-profil" x="140" y="113" width="24" height="14"/><line class="tg-doer" x1="164" y1="120" x2="190" y2="132"/><text x="0" y="160">almindelig stikkontakt</text><text x="0" y="176">højst 6 A over længere tid</text><rect class="tg-kasse" x="220" y="40" width="40" height="50"/><rect class="tg-modul" x="226" y="46" width="28" height="14"/><text class="tg-modul__tekst" x="240" y="57" text-anchor="middle">RCD</text><text x="240" y="80" text-anchor="middle">Tavle</text><line class="tg-skinne" x1="260" y1="65" x2="330" y2="65"/><rect class="tg-modul" x="330" y="44" width="30" height="46"/><path class="tg-doer" fill="none" d="M345,90 Q350,120 385,132"/><text x="210" y="160">sluttet fast til</text><text x="210" y="176">installationen</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${SIK}" rel="noopener">Sikkerhedsstyrelsen: Opladning af el-biler</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal ladeoperatøren vide",
    spoergsmaal_manchet: "Så kan afregningen sættes op rigtigt fra start.",
    spoergsmaal: [
      "Om bilen er en varebil på gule plader eller beskattes som fri bil.",
      "Om ladeboksen kun skal bruges til firmabilen.",
      "Om medarbejderen har solceller eller elvarme.",
      "Om medarbejderen vil købe strøm hos ladeoperatøren, så forbruget modregnes på elregningen.",
      "Hvor ofte refusionen skal udbetales, og til hvem.",
      "Hvem ladeboksen tilhører, når ansættelsen slutter."
    ],
    faq: [
      ["Skal medarbejderen betale skat af en ladestander fra arbejdsgiveren?", "Ikke hvis den stilles til rådighed sammen med en fri elbil eller plug-in hybrid. Det har været skattefrit siden 1. juli 2021, også installationen."],
      ["Kan firmaet betale strømmen til opladning hjemme?", "Ja. Arbejdsgiveren kan afholde udgiften direkte eller refundere medarbejderens udlæg, når udgiften kan individualiseres til bilen, fx med en separat måler."],
      ["Hvad sker der, hvis ladestanderen foræres til medarbejderen?", "Den er skattefri, hvis medarbejderen har haft fri elbil eller plug-in hybrid i mindst 6 sammenhængende måneder med ladestanderen ved bopælen. Ellers beskattes værdien og installationen."],
      ["Hvad koster en ladeboks hjemme?", "Til privatkunder hos OK fra 4.995 kr. med standardinstallation ved køb med el fra OK, eller leje fra 169 kr. om måneden (set den 7. oktober 2026). Clever tager 5.999 kr. for ladeboks og standardinstallation til Clever One Business Van."],
      ["Hvordan måles strømmen til firmabilen?", "Med en måler i ladeboksen eller en separat elmåler, der kun måler ladeboksens forbrug."],
      ["Hvordan beregnes refusionen af strøm til hjemmeladning?", "Hos Clever ganges boksens målte kWh med månedens tilbagebetalingssats, som består af Nord Pool-pris, elafgift, nettarif og systemtarif. Norlys bruger som udgangspunkt Nord Pools spotpris."],
      ["Hvad er med i en standardinstallation af en ladeboks?", "Hos Norlys er op til 20 meter kabel fra eltavlen, en automatisk afbryder (kombirelæ 20 A) og op til to gennemboringer af vægge med. Ekstra arbejde afregnes særskilt."],
      ["Kan medarbejderen slippe for at lægge ud for strømmen?", "Ja, hvis husstanden køber strøm hos ladeoperatøren. Med Clever Power trækkes ladeboksens forbrug fra på husstandens samlede elregning."],
      ["Må varebilen lade fra en almindelig stikkontakt?", "Det kan lade sig gøre med et mode 2-kabel, men Sikkerhedsstyrelsen fraråder daglig opladning på den måde og anbefaler en vægmonteret ladeboks. En almindelig stikkontakt bør ikke belastes med mere end 6 A over længere tid."]
    ],
    kilder: [
      { navn: "Skattestyrelsen: Fri bil til dine medarbejdere (firmabil)", url: SKAT, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Skat af fri bil (firmabil)", url: "https://skat.dk/borger/personalegoder-hvis-du-er-medarbejder/skat-af-fri-bil-firmabil", dato: "2026-10-04" },
      { navn: "Den juridiske vejledning: C.A.5.14.1.9 Udgifter i forbindelse med firmabil", url: JV9, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: C.A.5.14.1.8 Den ansattes egenbetaling for rådigheden", url: JV8, dato: "2026-10-04" },
      { navn: "Skattestyrelsen: Udvidet refusionsordning for elafgift ved opladning af elbiler (18.12.2025)", url: UDV, dato: "2026-10-07" },
      { navn: "Clever: Forstå Clevers tilbagebetaling", url: CT, dato: "2026-10-07" },
      { navn: "Clever: Clever One Business Van", url: CV, dato: "2026-10-07" },
      { navn: "OK: Ladeboks-priser", url: OK, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Opladning af el-biler", url: SIK, dato: "2026-10-07" },
      { navn: "Norlys: Ladeboks til firmabiler", url: NF, dato: "2026-10-07" },
      { navn: "Norlys: Ladeboks og installation", url: NI, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Clever kalder det tilbagebetaling, fordi firmabilisten først selv lægger ud; strøm til opladning er allerede betalt af virksomheden.", CT],
    ["Elektricitet til opladning af en elbil er en sædvanlig driftsudgift, som indgår i den skattepligtige værdi af fri bil; el til el- og hybridbiler er en ordinær driftsudgift ligesom forsikringer, vægtafgift og nødvendige reparationer.", JV9],
    ["Før 1. juli 2021 skulle værdien af en ladestander og installationen medregnes i beregningsgrundlaget for fri bil (Skatterådets afgørelse).", JV9],
    ["Skattefritagelsen omfatter kun tilfælde, hvor arbejdsgiveren samtidig stiller en fri elbil eller pluginhybridbil til rådighed; en ladestander til en konventionel fri bil er ikke omfattet; det er ikke nok at have haft fri elbil i 6 måneder uden ladestander ved bopælen.", JV9],
    ["Er perioden med fri elbil kortere end 6 sammenhængende måneder, medregnes markedsværdien af ladestander og installation, hvis installationen overgår til privat brug.", JV9],
    ["Skattefriheden for arbejdsgiverbetalt ladestander gælder tilsvarende for selvstændige i virksomhedsordningen og hovedaktionærer (LL § 16 A, stk. 5, og VSL § 5, stk. 4).", JV9],
    ["I SKM2021.283.SR sørgede arbejdsgiveren for installationen af ladestanderen ved medarbejderens adresse.", JV9],
    ["SKM2015.376.SR forudsatte også, at det kun var muligt at oplade bilens batteri og ikke medarbejderens andre elektriske apparater.", JV9],
    ["SKM2025.394.SR: Skatterådet kunne ikke bekræfte, at en arbejdsgiver skattefrit kunne udbetale godtgørelse for medarbejdernes strøm til ladning af elektronikken i indsatslederbiler på hjemadressen, fordi modellen ikke gav tilstrækkelig dokumentation for den enkelte medarbejders forbrug.", JV9],
    ["Clever skriver, at tilbagebetalingen for Premium er højere end for det almindelige produkt.", CV],
    ["Clevers tilbagebetalingssats indeholder ikke elafgift, hvis husstanden har elvarme (fx jordvarme, elradiatorer eller varmepumpe) eller egenproduktion (fx solceller eller egen vindmølle).", CT],
    ["Ladeoperatøren kan kun få refusion for den strøm, husstanden trækker fra det kollektive elnet og bruger i ladestanderen.", UDV],
    ["Med Clever Power, et variabelt strømprodukt, trækkes ladeboksens forbrug automatisk fra på den samlede elregning (1:1 modregning), så man slipper for udlæg og tilbagebetaling.", CT],
    ["Clever skriver, at de fleste virksomheder ikke vil blande sig i medarbejdernes elaftale, og at det som oftest er bilpolitikken, der bestemmer produktet.", CV],
    ["Clever One Business Van er til firmabiler på gule plader og papegøjeplader; Clevers netværk har 60.000 ladepunkter; abonnementet er + evt. energitillæg; mindstepris i bindingsperioden på 2 mdr. er 1.998 kr. (Van) og 2.198 kr. (Premium), ekskl. moms.", CV],
    ["Clever skelner på nummerpladen; en ombygget personbil på gule plader skal have et af Clever One Business Van-produkterne.", CV],
    ["OK's priser gælder Domo-ladeboksen uden fastmonteret kabel; der kan forekomme ekstra omkostninger ved en udvidet installation.", OK],
    ["Norlys: afregning efter forbrug passer bedst, når kørselsbehovet varierer fra måned til måned; fast pris passer ved stabilt kørselsbehov og er nem at budgettere; løsningen gælder, uanset om medarbejderen er elkunde hos Norlys.", NF],
    ["Norlys' standardinstallation kan omfatte nedtagning af eksisterende ladeboks; elektrikeren gennemgår opgaven på forhånd, så man kender muligheder og pris.", NI],
    ["Norlys' boks med fast kabel er Amina C (op til 11 kW, 6 m fast Type 2-kabel, -30 til +40 °C); boksen uden kabel er Alfen Eve Single S-line (op til 11 kW, Type 2-stik, -25 til +45 °C); de fleste vælger boksen med fast kabel; boksen uden kabel passer, hvis man skifter mellem biler.", NI],
    ["Opladning med mode 2-kabel i almindelig stikkontakt kaldes ofte mormorladning; en almindelig husholdningsstikkontakt bør ikke belastes med mere end 6 A over længere tid, fordi normerne ikke tager højde for belastningsmønstret.", SIK],
    ["Belastes stikkontakten med over 6 A i mere end 2 timer, skal den være beregnet til længerevarende høj belastning, og der bør installeres en separat gruppe; en dedikeret stikkontakt skal have egen RCD, mindst type A og højst 30 mA; forlængerledninger er ikke tilladt.", SIK]
  ]
};
