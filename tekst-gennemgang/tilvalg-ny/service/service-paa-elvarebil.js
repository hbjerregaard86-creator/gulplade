// Underside /til-varebilen/service/service-paa-elvarebil/ (07-10-2026)
var MB = `https://www.mercedes-benz.dk/vans/services/electric-vehicle-services.html`;
var TOY = `https://www.toyota.dk/erhvervsbiler/professional/toyota-relax`;
var FINT = `https://www.ford.dk/min-bil/service-og-vedligeholdelse/service/serviceintervaller`;
var FGAR = `https://www.ford.dk/min-bil/garanti/varebiler`;
var VWGS = `https://www.volkswagen.dk/da/vaerksted/nyttig-viden/garanti.html`;
var VWGAR = `https://ww4.volkswagen.dk/media/hcdf4g1k/garanti_vwe_100042_sep26_web.pdf`;
var NOR = `https://www.nordania.dk/erhverv/find-hjaelp/service-skader-reparation/forhaandsgodkendelse`;
var MICH = `https://www.michelin.ca/en/auto/electric-vehicles-faq`;
var VWEL = `https://www.volkswagen.dk/da/vaerksted/service/elbil-service.html`;
var HESB = `https://www.hessel.dk/vaerksted-service/ydelser/bremseservice-mercedes-benz`;
var DIN = `https://dinitrol.dk/rustbeskyttelse-pris/`;
var VW5 = `https://www.volkswagen.dk/da/vaerksted/service/vw-service5plus.html`;

module.exports = {
  id: "service/service-paa-elvarebil",
  side: {
    slug: "service-paa-elvarebil",
    navn: "Service på elvarebil",
    titel: "Service på elvarebil: interval og indhold",
    kort: `Hvor ofte en elvarebil skal til service, hvad der falder væk mod en dieselbil, og hvad batterigarantien dækker hos producenterne.`,
    beskrivelse: `Service på elvarebil: intervaller, hvad der falder væk mod diesel, batterigaranti på 8 år, kapacitetsmåling, bremser, dæk og software.`,
    manchet: `En elvarebil har ingen motorolie, brændstoffilter eller partikelfilter, men den skal stadig til eftersyn. Mercedes-Benz servicerer sine elektriske varebiler hvert år eller hver 40.000 km, og Volkswagens ID.-modeller skal til service hvert andet år. Her er intervallerne, indholdet og batterigarantierne, som producenterne beskriver dem.`,
    visuel: {
      hero: "service",
      hero_el: true,
      kort_fortalt: [
        ["Eftersyn, Mercedes-Benz", "1 år", "eller 40.000 km"],
        ["Batterigaranti, Ford og VW", "8 år", "eller 160.000 km"],
        ["Kapacitet efter 8 år", "70 %", "mindst, garanteret af VW, Toyota og Mercedes-Benz"],
        ["Bremsevæske, VW ID.", "2 år", "mellem skiftene"]
      ],
      toc: true,
      stribe: { drivmiddel: "el", titel: "Elvarebiler med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Intervaller",
        tekst: [
          `En elvarebil skal til eftersyn med faste mellemrum ligesom en dieselbil, og intervallet står i servicehæftet. Producenterne bruger forskellige intervaller, og nogle tæller både tid og kilometer.`,
          `Mercedes-Benz servicerer sine elektriske varebiler hvert år eller hver 40.000 km. Servicearbejdet ved de første fire eftersyn inden for 4 år eller 160.000 km er med i prisen, og servicepakken kan overdrages til en ny ejer.`,
          `Volkswagens ID.-modeller har et fast serviceinterval hvert andet år, og der er ingen kilometergrænse mellem eftersynene. Serviceindikatoren i displayet viser, hvornår bilen skal til service. Toyota bruger Proace med service hvert 2. år eller hver 30.000 km som eksempel, og hos Ford står intervallet i servicehæftet efter model og motor.`
        ],
        tabel: {
          kolonner: ["Producent", "Interval", "Bemærk"],
          raekker: [
            ["Mercedes-Benz, elektriske varebiler", "1 år eller 40.000 km", "Servicearbejdet ved de første fire eftersyn inden for 4 år eller 160.000 km er med i prisen"],
            ["Volkswagen ID.-modeller", "Hvert 2. år, ingen kilometergrænse", "Serviceindikatoren viser næste service"],
            ["Toyota Proace", "2 år eller 30.000 km (Toyotas eksempel)", "Toyota Relax følger samme interval"],
            ["Ford", "Efter model og motor, står i servicehæftet", "Garantien kræver service efter Fords forskrifter"]
          ],
          note: `Kilder: <a href="${MB}" rel="noopener">Mercedes-Benz</a>, set den 4. oktober 2026, og <a href="${VWEL}" rel="noopener">Volkswagen</a>, <a href="${TOY}" rel="noopener">Toyota</a> og <a href="${FINT}" rel="noopener">Ford</a>, set den 7. oktober 2026. Mercedes-Benz’ servicepakke kan overdrages til en ny ejer.`,
          visning: "kort"
        },
        figur: {
          type: "soejler",
          enhed: "måneder",
          data: [
            ["Mercedes-Benz, elektriske varebiler", 12, "eller 40.000 km"],
            ["Volkswagen ID.-modeller", 24, "ingen kilometergrænse"],
            ["Toyota Proace, Toyotas eksempel", 24, "eller 30.000 km"]
          ],
          note: `Højeste tid mellem to eftersyn. Kilder: <a href="${MB}" rel="noopener">Mercedes-Benz</a>, set den 4. oktober 2026, og <a href="${VWEL}" rel="noopener">Volkswagen</a> og <a href="${TOY}" rel="noopener">Toyota</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det falder væk mod en dieselbil",
        tekst: [
          `En elvarebil har hverken motorolie, brændstoffilter eller partikelfilter, og derfor er der færre poster på servicen. Nordanias værkstedsrekvisition viser som eksempel de poster, der hører til en dieselbil.`,
          `Volkswagen skriver, at en elbil har færre komponenter og dermed mindre slid og færre reparationer. Ekstra eftersyn som en udstødningstest er heller ikke nødvendige på en batteridrevet bil.`,
          `På en dieselbil afhænger olieskiftet også af, hvordan bilen bliver brugt. Fords Intelligent Oil-Life-monitor giver besked, når olien skal skiftes, og så skal det ske inden for 1.600 km eller 1 måned. Kørsel med fuld last eller anhænger, ture under 3 km og bykørsel under 48 km i timen gør tiden mellem olieskiftene kortere. Det hensyn er der ikke på en elvarebil.`
        ],
        punkter: [
          "<strong>Olieservice</strong> og motoroliemonitor. Ford styrer olieskift med en Intelligent Oil-Life-monitor.",
          "<strong>Brændstoffilter og brændstofdyser.</strong> Nordania har dem som særskilte poster på rekvisitionen.",
          "<strong>Partikelfilter</strong>, regenerering og additiv.",
          "<strong>Drivrem</strong> til forbrændingsmotoren."
        ],
        punkt_ikon: "nej",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 280" role="img" aria-label="To varebiler set fra siden. Dieselbilen har motorolie, filtre, drivrem, partikelfilter og udstødning, der skal serviceres. Elvarebilen har et højvoltsbatteri i bunden og ingen motorolie eller partikelfilter."><g transform="translate(10,104)"><path class="tg-rum" d="M0,0 L0,-84 Q0,-90 6,-90 L170,-90 L196,-58 L210,-52 Q216,-49 216,-43 L216,-6 Q216,0 210,0 Z"/><path class="tg-profil" d="M156,-84 L170,-84 L192,-58 L156,-58 Z"/><line class="tg-skinne-tynd" x1="150" y1="-90" x2="150" y2="0"/><circle class="tg-profil" cx="40" cy="0" r="13"/><circle class="tg-profil" cx="40" cy="0" r="5"/><circle class="tg-profil" cx="176" cy="0" r="13"/><circle class="tg-profil" cx="176" cy="0" r="5"/></g><rect class="tg-modul" x="190" y="58" width="30" height="30"/><rect class="tg-modul" x="106" y="98" width="30" height="8"/><line class="tg-gulvlinje" x1="4" y1="117" x2="236" y2="117"/><text class="tg-fremhaev" x="24" y="44">Diesel</text><g class="tg-call"><line x1="205" y1="73" x2="246" y2="50"/><circle cx="205" cy="73" r="3"/><text class="tg-call__navn" x="250" y="46">Motorolie og filtre</text><text class="tg-call__under" x="250" y="60">brændstof og drivrem</text></g><g class="tg-call"><line x1="121" y1="106" x2="121" y2="124"/><circle cx="121" cy="106" r="3"/><text class="tg-call__navn" x="127" y="136">Partikelfilter</text><text class="tg-call__under" x="127" y="150">og udstødning</text></g><g transform="translate(10,256)"><path class="tg-rum" d="M0,0 L0,-84 Q0,-90 6,-90 L170,-90 L196,-58 L210,-52 Q216,-49 216,-43 L216,-6 Q216,0 210,0 Z"/><path class="tg-profil" d="M156,-84 L170,-84 L192,-58 L156,-58 Z"/><line class="tg-skinne-tynd" x1="150" y1="-90" x2="150" y2="0"/><circle class="tg-profil" cx="40" cy="0" r="13"/><circle class="tg-profil" cx="40" cy="0" r="5"/><circle class="tg-profil" cx="176" cy="0" r="13"/><circle class="tg-profil" cx="176" cy="0" r="5"/></g><rect class="tg-modul" x="66" y="238" width="104" height="14"/><line class="tg-gulvlinje" x1="4" y1="269" x2="236" y2="269"/><text class="tg-fremhaev" x="24" y="196">Elvarebil</text><g class="tg-call"><line x1="150" y1="245" x2="246" y2="204"/><circle cx="150" cy="245" r="3"/><text class="tg-call__navn" x="250" y="200">Højvoltsbatteri</text><text class="tg-call__under" x="250" y="214">i bunden af bilen</text></g><g class="tg-call"><line x1="206" y1="226" x2="246" y2="240"/><circle cx="206" cy="226" r="3"/><text class="tg-call__navn" x="250" y="236">Ingen motorolie</text><text class="tg-call__under" x="250" y="250">eller partikelfilter</text></g></svg>`,
          tekst: `Skematisk. Serviceposterne under motorhjelmen og under bunden på en diesel- og en elvarebil. Kilder: <a href="${NOR}" rel="noopener">Nordania, værkstedsrekvisition</a> og <a href="${VWEL}" rel="noopener">Volkswagen, service på elbil</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${NOR}" rel="noopener">Nordania</a> og <a href="${FINT}" rel="noopener">Ford</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Det serviceres stadig",
        tekst: [
          `Selvom motoren ikke skal have olie, er der stadig meget at efterse. Mercedes-Benz efterser højspændingskomponenterne ved hvert eftersyn sammen med bilens øvrige dele og funktioner.`,
          `Hos Volkswagen måler mekanikeren ladetilstanden på 12-volts-batteriet og højvoltsbatteriet med testere, der er koblet direkte til fabrikkens diagnosesystem. Højvoltskomponenter og ledninger bliver kontrolleret for skader, og ved Service 5+ bliver lugt- og allergenfilteret skiftet.`,
          `Lygterne kræver også særligt udstyr. De fleste ID.-modeller har Light Assist, hvor en lille computer ved lygterne sørger for, at de lyser vejen rigtigt op og ikke blænder, uanset om bilen er tungt lastet. Alle autoriserede Volkswagen-værksteder har et lygteapparat, der passer til bilen.`
        ],
        punkter: [
          "<strong>Højspændingskomponenterne.</strong> Mercedes-Benz efterser dem ved hvert eftersyn sammen med de øvrige dele og funktioner.",
          "<strong>Dæk.</strong> Elbiler slider i gennemsnit dæk 20 procent hurtigere, oplyser Michelin.",
          "<strong>Software.</strong> Opdateringer fra producenten."
        ],
        punkt_ikon: "ja",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Elvarebil set fra siden med de dele, der stadig efterses: 12-volts-batteri, kabinefilter, dæk, højvoltsbatteri med kabler og bremser."><g transform="translate(80,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="150" y="172" width="108" height="14"/><line class="tg-doer" x1="258" y1="178" x2="288" y2="160"/><rect class="tg-kasse" x="288" y="148" width="24" height="18"/><rect class="tg-kuffert" x="290" y="120" width="18" height="12"/><line class="tg-gulvlinje" x1="10" y1="207" x2="390" y2="207"/><g class="tg-call"><line x1="299" y1="126" x2="340" y2="46"/><circle cx="299" cy="126" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">12-volts-batteri</text><text class="tg-call__under" x="395" y="38" text-anchor="end">ladetilstand måles</text></g><g class="tg-call"><line x1="262" y1="124" x2="200" y2="46"/><circle cx="262" cy="124" r="3"/><text class="tg-call__navn" x="120" y="24">Kabinefilter</text><text class="tg-call__under" x="120" y="38">skiftes ved eftersyn</text></g><g class="tg-call"><line x1="116" y1="198" x2="70" y2="214"/><circle cx="116" cy="198" r="3"/><text class="tg-call__navn" x="5" y="226">Dæk</text><text class="tg-call__under" x="5" y="240">slides hurtigere</text></g><g class="tg-call"><line x1="204" y1="179" x2="204" y2="214"/><circle cx="204" cy="179" r="3"/><text class="tg-call__navn" x="150" y="226">Højvoltsbatteri</text><text class="tg-call__under" x="150" y="240">og kabler kontrolleres</text></g><g class="tg-call"><line x1="280" y1="190" x2="350" y2="214"/><circle cx="280" cy="190" r="3"/><text class="tg-call__navn" x="395" y="226" text-anchor="end">Bremser</text><text class="tg-call__under" x="395" y="240" text-anchor="end">kan ruste</text></g></svg>`,
          tekst: `Skematisk. De dele, der stadig efterses på en elvarebil. Kilder: <a href="${VWEL}" rel="noopener">Volkswagen, service på elbil</a>, <a href="${VW5}" rel="noopener">Volkswagen Service 5+</a> og <a href="${MICH}" rel="noopener">Michelin</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dæk på elvarebilen",
        tekst: [
          `Dækkene slides hurtigere på en elbil. Michelin oplyser, at elbiler i gennemsnit slider dæk 20 procent hurtigere end sammenlignelige biler med forbrændingsmotor.`,
          `Michelin forklarer det med tre ting. Elbiler er generelt tungere, de har mere moment til hurtig acceleration, og de bremser ved at lade strøm tilbage til batteriet. Vægten er en afgørende faktor for, hvor hurtigt et dæk bliver slidt.`,
          `Michelin skriver også, at et slidt dæk giver omkring 6 procent bedre rækkevidde end et nyt, fordi en del af rullemodstanden kommer fra mønsteret. Rækkevidden kan derfor falde lidt, når bilen får nye dæk af samme model.`,
          `Mere om dæk står i <a href="/til-varebilen/vinterhjul/daek-til-elvarebil/">dæk til elvarebil</a> og <a href="/til-varebilen/vinterhjul/daektryk-og-moensterdybde/">dæktryk og mønsterdybde</a>.`
        ]
      },
      {
        overskrift: "Garanti på højvoltsbatteriet",
        tekst: [
          `Højvoltsbatteriet har sin egen garanti, og den er længere end garantien på resten af bilen. Ford, Volkswagen og Mercedes-Benz dækker 8 år eller 160.000 km, alt efter hvad der kommer først.`,
          `Garantierne dækker to forskellige ting. Den ene er fejl i materialer og produktion, og den anden er et for stort tab af kapacitet, altså hvor meget strøm batteriet kan rumme. Volkswagen, Toyota og Mercedes-Benz garanterer mindst 70 procent efter 8 år eller 160.000 km, og Ford dækker en væsentlig reduktion af kapaciteten.`,
          `Toyota dækker fejl på batteriet i 5 år eller 100.000 km. Mercedes-Benz udsteder et battericertifikat, og på eSprinter fra modelår 2024 kan garantien forlænges til 8 år eller 300.000 km med ServiceCare eComplete+. Volkswagens batterigaranti følger bilen, når den bliver solgt.`
        ],
        tabel: {
          kolonner: ["Producent", "Garanti", "Kapacitet"],
          raekker: [
            ["Ford", "8 år eller 160.000 km", "Dækker væsentlig reduktion af kapaciteten"],
            ["Volkswagen", "8 år eller 160.000 km", "78 % ved 3 år/60.000 km, 74 % ved 5 år/100.000 km, 70 % ved 8 år/160.000 km"],
            ["Toyota", "Fejl: 5 år eller 100.000 km", "Mindst 70 % i 8 år eller 160.000 km"],
            ["Mercedes-Benz", "Battericertifikat", "Mindst 70 % i 8 år eller 160.000 km. eSprinter fra modelår 2024 kan forlænges til 8 år/300.000 km med ServiceCare eComplete+"]
          ],
          note: `Kilder: <a href="${FGAR}" rel="noopener">Ford</a>, <a href="${VWGAR}" rel="noopener">Volkswagens garantibestemmelser for erhvervsbiler</a> og <a href="${TOY}" rel="noopener">Toyota</a>, set den 7. oktober 2026, og <a href="${MB}" rel="noopener">Mercedes-Benz</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "%",
          data: [
            ["3 år eller 60.000 km", 78],
            ["5 år eller 100.000 km", 74],
            ["8 år eller 160.000 km", 70]
          ],
          max: 100,
          note: `Volkswagen garanterer denne kapacitet på højvoltsbatteriet i sine erhvervsbiler. Kilde: <a href="${VWGAR}" rel="noopener">Volkswagens garantibestemmelser for erhvervsbiler</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan måler Volkswagen kapaciteten",
        tekst: [
          `Volkswagen regner med batteriets nettoindhold, altså den del af batteriet, bilen faktisk kan bruge. Det står i kWh i papirerne fra bestillingen. Batteriets nominelle indhold er større, fordi systemet holder en del af batteriet i reserve.`,
          `Målingen skal laves hos en Volkswagen-servicepartner inden for garantiperioden. Viser den under 70 procent af indholdet ved udleveringen, er det en garantisag, og Volkswagen udbedrer det gratis.`,
          `Hvor langt op batteriet skal, afhænger af bilens alder og kilometertal. Det er 78 procent op til 3 år eller 60.000 km, 74 procent op til 5 år eller 100.000 km og 70 procent op til 8 år eller 160.000 km.`,
          `Volkswagen giver selv et eksempel. Har bilen kørt 90.000 km på 4 år, og måler batteriet 69 procent, skal det efter afhjælpningen kunne mindst 74 procent.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Batteri, hvor 69 procent af indholdet ved udleveringen er tilbage efter 4 år og 90.000 km. Under 70 procent er det en garantisag, og efter afhjælpningen skal batteriet kunne mindst 74 procent."><text class="tg-fremhaev" x="20" y="30">Målt: 69 %</text><text x="20" y="48">efter 4 år og 90.000 km</text><text class="tg-fremhaev" x="290" y="22">Mindst 74 % efter</text><text class="tg-fremhaev" x="290" y="38">afhjælpningen</text><rect class="tg-kasse" x="20" y="60" width="360" height="40" rx="4"/><rect class="tg-hylde" x="20" y="60" width="248" height="40"/><rect class="tg-hylde" x="380" y="72" width="8" height="16" rx="2"/><line class="tg-skinne-tynd" x1="272" y1="54" x2="272" y2="110"/><line class="tg-skinne" x1="286" y1="44" x2="286" y2="106"/><text x="268" y="126" text-anchor="end">Under 70 %: garantisag</text><text class="tg-lille" x="20" y="150">0 %</text><text class="tg-lille" x="380" y="150" text-anchor="end">100 %</text><text class="tg-lille" x="20" y="172">100 % ER INDHOLDET VED UDLEVERINGEN</text></svg>`,
          tekst: `Skematisk. Volkswagens eget eksempel på en garantisag på højvoltsbatteriet. Kilde: <a href="${VWGAR}" rel="noopener">Volkswagens garantibestemmelser for erhvervsbiler, punkt C.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det kan udelukke batterigarantien",
        tekst: [
          `Volkswagens garantibestemmelser nævner fire forhold, der udelukker en garantisag på højvoltsbatteriet. De handler om, hvordan batteriet bliver behandlet, opladet og rengjort.`,
          `Punktet om rengøring betyder noget for en varebil, der bliver vasket ofte. Vand og aggressive væsker må ikke komme direkte på batteriet, og det må ikke rengøres med højtryksspuler eller damprenser. Ford undtager på samme måde skader som følge af uheld, forkert brug eller mangelfuld vedligeholdelse fra garantien Ford Protect New.`
        ],
        punkter: [
          "Batteriet er fjernet fra bilen eller åbnet ukorrekt.",
          "Instruktionsbogens anvisninger om opladning og ladetilstand er ikke fulgt.",
          "Batteriet har været i kontakt med åben ild.",
          "Batteriet er rengjort med højtryksspuler eller damprenser, eller der er kommet vand eller aggressive væsker direkte på det."
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilder: <a href="${VWGAR}" rel="noopener">Volkswagen, garantibestemmelser for erhvervsbiler</a> og <a href="${FGAR}" rel="noopener">Ford, garanti på varebiler</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fords råd om batteriet",
        tekst: [
          `Ford skriver, at et højvoltsbatteri over tid bliver påvirket af almindeligt slid, men at lade- og kørselsvaner kan være med til at bevare kapaciteten. Rådene handler om at undgå, at batteriet er helt fuldt eller helt tomt i lang tid.`,
          `Ford fraråder, at bilen står parkeret i længere perioder med et næsten fuldt batteri, og at batteriet bliver helt afladet. Står en varebil stille i en ferie, betyder det mindst 20 procent ved normale temperaturer og mindst 40 procent i kolde perioder.`
        ],
        punkter: [
          "<strong>Dagligt.</strong> Lad til højst 80 procent og kun til 100 procent før lange ture.",
          "<strong>Parkering.</strong> Hold mindst 20 procent ved normale temperaturer og 40 procent i kolde perioder.",
          "<strong>AC frem for DC.</strong> Meget hyppig lynladning kan over tid påvirke kapaciteten."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Batteri fra 0 til 100 procent. Ford anbefaler mindst 20 procent ved parkering, mindst 40 procent i kolde perioder, højst 80 procent til daglig og 100 procent før lange ture."><rect class="tg-kasse" x="20" y="56" width="360" height="48" rx="6"/><rect class="tg-modul" x="92" y="56" width="216" height="48"/><rect class="tg-hylde" x="380" y="70" width="8" height="20" rx="2"/><text class="tg-modul__tekst" x="200" y="84" text-anchor="middle">DAGLIG BRUG</text><line class="tg-skinne-tynd" x1="92" y1="46" x2="92" y2="114"/><line class="tg-skinne-tynd" x1="164" y1="46" x2="164" y2="114"/><line class="tg-skinne-tynd" x1="308" y1="46" x2="308" y2="114"/><text class="tg-fremhaev" x="92" y="22" text-anchor="middle">Mindst 20 %</text><text x="92" y="36" text-anchor="middle">ved parkering</text><text class="tg-fremhaev" x="308" y="22" text-anchor="middle">Højst 80 %</text><text x="308" y="36" text-anchor="middle">til daglig</text><text class="tg-fremhaev" x="164" y="132" text-anchor="middle">Mindst 40 %</text><text x="164" y="146" text-anchor="middle">i kolde perioder</text><text class="tg-fremhaev" x="380" y="132" text-anchor="end">100 %</text><text x="380" y="146" text-anchor="end">før lange ture</text></svg>`,
          tekst: `Skematisk. Fords råd om højvoltsbatteriet.`
        },
        efter: [
          `Kilde: <a href="${FGAR}" rel="noopener">Ford, pleje af højvoltsbatteriet</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Lynladning, tovejsopladning og ladekablet",
        tekst: [
          `Både Ford og Volkswagen anbefaler at lade med vekselstrøm til daglig, fx fra en ladestander på adressen. Volkswagen skriver, at hyppig lynladning med jævnstrøm kan give en varig nedsættelse af batteriets kapacitet, og Ford skriver, at meget hyppig brug over tid kan påvirke den.`,
          `Nogle modeller kan lade tovejs, så strømmen også kan gå fra bilen til et hus, til elnettet eller til eksterne apparater. Volkswagen regner den strøm om til en virtuel afstand, som bliver lagt oven i kilometertallet i batterigarantien.`,
          `Volkswagen giver et regneeksempel. Trækker bilen 20 kWh ud tovejs, og er bilens hypotetiske forbrug 20 kWh pr. 100 km, svarer det til 100 km ekstra. Forbruget er det højeste, bilen bruger under de mest ugunstige testforhold, og den virtuelle afstand står i bilens serviceindstillinger.`,
          `Ladekablet skal også behandles rigtigt. Volkswagen skriver, at det ikke må foldes eller bøjes over skarpe kanter, og at det ikke må ligge i stærkt sollys ved temperaturer over 50 °C. Ladestik og kabler skal tjekkes for skader og snavs før brug, og et beskadiget kabel må ikke bruges.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Strøm afgivet tovejs", "20", "kWh"],
            ["Hypotetisk forbrug", "20", "kWh pr. 100 km"],
            ["Lagt til kilometertallet", "100", "km"]
          ],
          note: `Volkswagens eget eksempel på virtuel afstand. Kilder: <a href="${VWGAR}" rel="noopener">Volkswagens garantibestemmelser for erhvervsbiler, punkt C.3</a> og <a href="${VWEL}" rel="noopener">Volkswagen, service på elbil</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Garantien på resten af bilen",
        tekst: [
          `Resten af bilen har en kortere garanti end batteriet. Fords elektriske varebiler E-Transit Courier, E-Transit Custom, E-Transit og Explorer VAN har 2 års fabriksgaranti og 3 års udvidet garanti, Ford Protect New. Det giver i alt op til 5 år eller 150.000 km fra første indregistrering, og den udvidede garanti ændrer ikke batterigarantien.`,
          `Ford kræver ikke, at bilen bliver serviceret på et autoriseret Ford-værksted. Service og vedligeholdelse skal laves efter Fords forskrifter og kunne dokumenteres, men selve garantiarbejdet skal laves på et autoriseret Ford-værksted. Mere om reglerne står i <a href="/til-varebilen/service/frit-vaerkstedsvalg/">frit værkstedsvalg</a>.`,
          `Toyotas fabriksgaranti gælder 3 år eller 100.000 km, og det første år er der ingen kilometergrænse. Derefter får bilen Toyota Relax, hver gang den bliver serviceret på et autoriseret Toyota-værksted. Relax dækker frem til næste eftersyn, indtil bilen er 10 år eller har kørt 185.000 km.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 248" role="img" aria-label="Garantiperioder i år. Ford dækker de elektriske varebiler i op til 5 år og batteriet i 8 år. Volkswagen dækker batteriet i 8 år. Toyota dækker bilen i 3 år, batterifejl i 5 år, kapaciteten i 8 år og giver Toyota Relax op til 10 år."><text x="0" y="41">Ford E-Transit, bil</text><rect class="tg-kasse" x="150" y="30" width="120" height="14"/><text x="210" y="41" text-anchor="middle">150.000 km</text><text x="0" y="65">Ford, HV-batteri</text><rect class="tg-modul" x="150" y="54" width="192" height="14"/><text class="tg-modul__tekst" x="336" y="65" text-anchor="end">160.000 km</text><text x="0" y="89">VW, HV-batteri</text><rect class="tg-modul" x="150" y="78" width="192" height="14"/><text class="tg-modul__tekst" x="336" y="89" text-anchor="end">160.000 km</text><text x="0" y="113">Toyota, bil</text><rect class="tg-kasse" x="150" y="102" width="72" height="14"/><text x="228" y="113">100.000 km</text><text x="0" y="137">Toyota, batterifejl</text><rect class="tg-modul" x="150" y="126" width="120" height="14"/><text class="tg-modul__tekst" x="264" y="137" text-anchor="end">100.000 km</text><text x="0" y="161">Toyota, 70 % kapacitet</text><rect class="tg-modul" x="150" y="150" width="192" height="14"/><text class="tg-modul__tekst" x="336" y="161" text-anchor="end">160.000 km</text><text x="0" y="185">Toyota Relax</text><rect class="tg-kasse" x="222" y="174" width="168" height="14"/><line class="tg-skinne-tynd" x1="222" y1="181" x2="390" y2="181"/><text x="384" y="170" text-anchor="end">185.000 km</text><line class="tg-gulvlinje" x1="150" y1="200" x2="390" y2="200"/><line class="tg-skillevaeg" x1="150" y1="196" x2="150" y2="204"/><line class="tg-skillevaeg" x1="198" y1="196" x2="198" y2="204"/><line class="tg-skillevaeg" x1="246" y1="196" x2="246" y2="204"/><line class="tg-skillevaeg" x1="294" y1="196" x2="294" y2="204"/><line class="tg-skillevaeg" x1="342" y1="196" x2="342" y2="204"/><line class="tg-skillevaeg" x1="390" y1="196" x2="390" y2="204"/><text class="tg-lille" x="150" y="218" text-anchor="middle">0</text><text class="tg-lille" x="198" y="218" text-anchor="middle">2</text><text class="tg-lille" x="246" y="218" text-anchor="middle">4</text><text class="tg-lille" x="294" y="218" text-anchor="middle">6</text><text class="tg-lille" x="342" y="218" text-anchor="middle">8</text><text class="tg-lille" x="388" y="218" text-anchor="middle">10</text><text class="tg-lille" x="0" y="240">ÅR. KILOMETERGRÆNSEN KAN KOMME FØRST</text></svg>`,
          tekst: `Skematisk. Garantiperioderne regnet i år, hvor kilometergrænsen ved hver bjælke kan komme først. Toyota Relax skal fornys ved hvert eftersyn. Kilder: <a href="${FGAR}" rel="noopener">Ford, garanti på varebiler</a>, <a href="${VWGAR}" rel="noopener">Volkswagens garantibestemmelser</a> og <a href="${TOY}" rel="noopener">Toyota</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Software og fjernovervågning",
        tekst: [
          `Volkswagens garanti dækker ikke fejl, der skyldes, at en softwareopdatering fra producenten ikke er installeret. Mercedes-Benz tilbyder fjernovervågning af elvarebilens tilstand, så behovet for eftersyn kan ses på forhånd.`,
          `Volkswagen skriver, at software og assistentsystemer kræver mere af værkstedet på en elbil. På et autoriseret Volkswagen-værksted bliver bilen koblet direkte på fabrikkens systemer og får den nyeste opdatering, og det gælder også en importeret bil.`,
          `Med Volkswagen ServiceCam får du en video på e-mail eller sms, der viser, hvilke reparationer der skal laves. Du kan godkende eller afvise dem med få klik, mens bilen står på værkstedet.`
        ]
      },
      {
        overskrift: "Kontrolpunkter ved et eftersyn",
        tekst: [
          `Volkswagens Service 5+ er et eftersyn til biler på 5 år eller mere, og det findes også til erhvervsbiler. Listen over kontrolpunkter viser forskellen på et eftersyn af en elbil og af en diesel- eller benzinbil.`,
          `Mange punkter er de samme, fx forrude, gearkasse og aksler, karrosseri, ophæng, bremser og undervogn. På elbilen kommer højvoltsbatteriet, 12-volts-batteriet og højvoltskomponenterne til, og udstødningen står kun på listen for diesel og benzin.`,
          `Kontrollen af højvoltsbatteriet ved Service 5+ er en visuel kontrol af, hvor mange procent batteriet har ved ankomst. Det er ikke en måling af kapaciteten som den, Volkswagen bruger i batterigarantien.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Kontrolpunkt", "Diesel eller benzin", "Elbil"],
          raekker: [
            ["Bremser, ophæng og undervogn", "ja", "ja"],
            ["Karrosseri og forrude", "ja", "ja"],
            ["Gearkasse, aksler og manchetter", "ja", "ja"],
            ["Udstødningssystem", "ja", "ikke på listen"],
            ["Startbatteri", "Batteritest", "12-volts-batteriets ladetilstand"],
            ["Højvoltsbatteriets ladetilstand", "ikke på listen", "Visuel kontrol"],
            ["Højvoltskomponenter og ledninger", "ikke på listen", "ja"],
            ["Lugt- og allergenfilter skiftes", "ikke på listen", "ja"]
          ],
          note: `Kontrolpunkterne ved Volkswagen Service 5+. Kilde: <a href="${VW5}" rel="noopener">Volkswagen Service 5+</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bremserne på elvarebilen",
        tekst: [
          `På Volkswagens ID.-modeller bruges cirka den første centimeter af bremsepedalens vandring kun til at regenerere strøm. Bremserne bruges så lidt, at de kan ruste, før de slides. De kontrolleres ved hvert service. Bremsevæsken skiftes hvert andet år, fordi den optager vand.`,
          `Hessel skriver, at et egentligt bremseservice, hvor bremserne skilles ad, renses og smøres, ikke er en del af det faste serviceinterval. Hessel anbefaler bremseservice mindst hvert andet år og skriver, at det er særlig vigtigt på en elbil.`,
          `Forklaringen er, at de mekaniske bremser bliver brugt sjældnere og derfor lettere ruster eller sætter sig fast. Samtidig er elbiler ofte tungere på grund af batteriet, så bremserne har mere at bestille, når de bliver brugt. Hessel råder også ejere af elbiler til at træde på den mekaniske bremse en gang imellem, så klodserne sliber rust og snavs af skiverne.`,
          `Prisen på et bremseservice står i <a href="/til-varebilen/service/pris-paa-service/">pris på service</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Bremsevæske, VW ID.", "2", "år"],
            ["Pedalvandring kun til regenerering", "ca. 1", "cm"],
            ["Højvoltsteknikere hos VW", "700+", ""]
          ],
          note: `Kilder: <a href="${VWEL}" rel="noopener">Volkswagen, service på elbil</a> og <a href="${HESB}" rel="noopener">Hessel, bremseservice</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Rustbeskyttelse uden om højvoltsdelene",
        tekst: [
          `Volkswagen skriver, at en elbil gerne må undervognsbehandles efter forskrifterne. Fire ting skal holdes fri af rustbeskyttelse, nemlig højvoltskablerne, batteripakken, udluftningsventilen og advarselsskiltene for højvolt.`,
          `Volkswagen skriver også, at der er eksempler på ID.-modeller, hvor rustbeskyttelsen dækker advarselsskiltene, og at det kan være farligt, når skiltene ikke længere kan ses. Mere om behandlingen står i <a href="/til-varebilen/service/undervognsbehandling/">undervognsbehandling</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Elvarebilens undervogn set nedefra. Batteripakke, højvoltskabler, udluftningsventil og advarselsskilte holdes fri af rustbeskyttelse, mens vanger og hulrum behandles."><rect x="40" y="55" width="320" height="140" rx="14" class="tg-rum"/><rect x="60" y="62" width="290" height="6" class="tg-hylde"/><rect x="60" y="182" width="290" height="6" class="tg-hylde"/><rect x="120" y="78" width="200" height="94" rx="4" class="tg-modul"/><line x1="60" y1="125" x2="120" y2="125" class="tg-doer"/><rect x="300" y="84" width="12" height="12" class="tg-kasse"/><rect x="200" y="148" width="26" height="14" class="tg-kuffert"/><text x="150" y="122" class="tg-fremhaev">Batteripakke</text><g class="tg-call"><line x1="80" y1="125" x2="60" y2="30"/><circle cx="80" cy="125" r="3"/><text x="10" y="22" class="tg-call__navn">Højvoltskabler</text></g><g class="tg-call"><line x1="306" y1="84" x2="306" y2="30"/><circle cx="306" cy="84" r="3"/><text x="262" y="22" class="tg-call__navn">Udluftningsventil</text></g><g class="tg-call"><line x1="213" y1="162" x2="230" y2="222"/><circle cx="213" cy="162" r="3"/><text x="200" y="232" class="tg-call__navn">Advarselsskilte</text></g><g class="tg-call"><line x1="70" y1="185" x2="50" y2="222"/><circle cx="70" cy="185" r="3"/><text x="10" y="232" class="tg-call__navn">Vanger og hulrum</text><text x="10" y="246" class="tg-call__under">behandles</text></g></svg>`,
          tekst: `Skematisk. Elvarebilens undervogn set nedefra. Kilder: <a href="${VWEL}" rel="noopener">Volkswagen</a>, set den 7. oktober 2026, og <a href="${DIN}" rel="noopener">Dinitrol</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Dinitrol behandler karrosseri, hulrum og undervogn omkring batteriet og bruger et tyndt, gennemsigtigt produkt på batteriet. Dinitrols behandling af en elbil koster fra ca. 5.000 kr. inkl. moms.`
        ]
      },
      {
        overskrift: "Værkstedet til højvolt",
        tekst: [
          `Arbejde på højvoltssystemet kræver særlig uddannelse og særligt udstyr. Hos Volkswagen må reparationer, der ikke har med højspændingssystemet at gøre, fx dækskift, laves af en medarbejder, der har gennemført træningen i elbiler. Skal højvoltsbatteriet åbnes, skal bilen på et af Volkswagens servicecentre med service på højspændingssystemer.`,
          `Volkswagen har over 700 uddannede højvoltsteknikere og -eksperter på sine autoriserede værksteder. Batteriet i bunden gør det sværere at komme til andre dele, og derfor bruger værkstederne specialværktøj til ID.-modellerne. Går bilen i stå, sender Volkswagen Vejhjælp medarbejdere, der er uddannet til at tage sig af en elbil.`
        ],
        punkter: [
          "<strong>Udstyr.</strong> Værkstedet har højvoltsbeklædning, gummimåtter og værktøj, der kan aflede strøm.",
          "<strong>Test.</strong> Mekanikeren aflæser ladetilstanden på 12-volts- og højvoltsbatteriet med testere, der er koblet til fabrikkens diagnosesystem.",
          "<strong>Service 5+ på elbil.</strong> Eftersynet omfatter en visuel kontrol af ladetilstanden, kontrol af højvoltskomponenter og -ledninger og skift af lugt- og allergenfilter.",
          "<strong>Kasserede dele.</strong> Mange kasserede dele sendes retur til Volkswagen AG til bortskaffelse eller genbrug."
        ],
        efter: [
          `Kilder: <a href="${VWEL}" rel="noopener">Volkswagen, service på elbil</a> og <a href="${VW5}" rel="noopener">Volkswagen Service 5+</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Reparation af batteriet",
        tekst: [
          `Mercedes-Benz har et reparationscenter for højspændingsbatterier, hvor næsten alle komponenter kan repareres, fra moduler og styreelektronik til strømsensorer, i stedet for at skifte hele batteriet.`,
          `Producenterne løser et for stort tab af kapacitet på hver sin måde. Toyota skriver, at de skifter batteriet, hvis det præsterer dårligere end 70 procent inden for 8 år eller 160.000 km. Volkswagen udbedrer batteriet, så det når op på det niveau, garantien kræver for bilens alder.`,
          `Rækkevidde, opladning og drift står i <a href="/haandbogen/elvarebil-i-praksis/">elvarebil i praksis</a> og under <a href="/elvarebiler/">elvarebiler</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så kan eftersyn og batteritest planlægges.",
    spoergsmaal: [
      "Model, årgang og kilometerstand.",
      "Ladevaner, fx andel lynladning.",
      "Om bilen lader tovejs, fx til et hus eller elnettet.",
      "Om bilen har fået de seneste softwareopdateringer.",
      "Om der ønskes en måling af batteriets kapacitet.",
      "Om der skal laves bremseservice eller skiftes bremsevæske.",
      "Om service kan udføres på firmaets adresse."
    ],
    faq: [
      ["Hvor ofte skal en elvarebil til service?", "Hos Mercedes-Benz hvert år eller hver 40.000 km. Volkswagens ID.-modeller skal til service hvert andet år uden kilometergrænse. Andre producenter oplyser intervallet i servicehæftet."],
      ["Hvad serviceres ikke på en elvarebil?", "Der er ingen olieservice, brændstoffilter, brændstofdyser eller partikelfilter. Mercedes-Benz har servicearbejdet ved de første fire eftersyn med i prisen på sine elektriske varebiler."],
      ["Hvor lang garanti er der på batteriet?", "8 år eller 160.000 km hos Ford, Volkswagen og Mercedes-Benz. Volkswagen og Mercedes-Benz garanterer mindst 70 procent kapacitet, og Ford dækker en væsentlig reduktion af kapaciteten. Toyota giver 5 år eller 100.000 km mod fejl og mindst 70 procent kapacitet i 8 år eller 160.000 km."],
      ["Hvordan bliver batteriets kapacitet målt?", "Hos Volkswagen måler en servicepartner batteriets nettoindhold og sammenligner med indholdet ved udleveringen. Er det under 70 procent inden for 8 år eller 160.000 km, er det en garantisag."],
      ["Kan en elvarebil serviceres på et almindeligt værksted?", "Garantien hos Ford kræver service efter Fords forskrifter, ikke et bestemt værksted. Garantiarbejdet skal dog laves på et autoriseret Ford-værksted. Se <a href=\"/til-varebilen/service/frit-vaerkstedsvalg/\">frit værkstedsvalg</a>."],
      ["Slider en elvarebil mere på dækkene?", "Michelin oplyser, at elbiler i gennemsnit slider dæk 20 procent hurtigere end sammenlignelige biler med forbrændingsmotor."],
      ["Skal bremsevæsken skiftes på en elvarebil?", "Ja. Volkswagen skifter bremsevæsken på ID.-modellerne hvert andet år, fordi væsken optager vand, uanset hvor meget der bremses."],
      ["Må en elvarebil undervognsbehandles?", "Ja, efter forskrifterne. Volkswagen skriver, at batteripakke, højvoltskabler, udluftningsventil og advarselsskilte ikke må dækkes."],
      ["Slider lynladning på batteriet?", "Volkswagen skriver, at hyppig lynladning kan give en varig nedsættelse af kapaciteten, og Ford skriver, at meget hyppig brug over tid kan påvirke den. Begge anbefaler vekselstrøm til daglig opladning."]
    ],
    kilder: [
      { navn: "Mercedes-Benz Vans: Service på elektriske varebiler", url: MB, dato: "2026-10-04" },
      { navn: "Toyota: Tryghed med Toyota (fabriksgaranti og Toyota Relax, erhvervsbiler)", url: TOY, dato: "2026-10-07" },
      { navn: "Ford: Serviceintervaller og Intelligent Oil-Life-monitor", url: FINT, dato: "2026-10-07" },
      { navn: "Ford: Garanti på nye Ford varebiler (Ford Protect og fabriksgaranti)", url: FGAR, dato: "2026-10-07" },
      { navn: "Volkswagen: Garanti på din nye Volkswagen", url: VWGS, dato: "2026-10-04" },
      { navn: "Volkswagen: Garantibestemmelser for erhvervsbiler fra modelår 2020 (sept. 2026)", url: VWGAR, dato: "2026-10-07" },
      { navn: "Nordania: Forhåndsgodkendelse af service og reparation", url: NOR, dato: "2026-10-07" },
      { navn: "Michelin: Electric vehicles FAQ (dækslid)", url: MICH, dato: "2026-10-07" },
      { navn: "Volkswagen: Service på elbil", url: VWEL, dato: "2026-10-07" },
      { navn: "Hessel: Bremseservice til Mercedes-Benz", url: HESB, dato: "2026-10-07" },
      { navn: "Dinitrol: Undervognsbehandling til elbil", url: DIN, dato: "2026-10-04" },
      { navn: "Volkswagen: Service 5+", url: VW5, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Volkswagens ID.-modeller har fast serviceinterval hvert 2. år uden kilometerbegrænsning mellem hvert service; serviceindikatoren i displayet viser næste service.", VWEL],
    ["Volkswagen: en elbil har færre komponenter, mindre slitage og mindre behov for reparationer, og yderligere serviceeftersyn som fx en udstødningstest er ikke nødvendige på en batteridrevet bil.", VWEL],
    ["Ford: vises 'Olieskift påkrævet', skal olien skiftes inden for 1.600 km eller 1 måned; hyppig bykørsel under 48 km i timen, korte ture under 3 km og høj motorbelastning (fuld last, anhænger, bakker) kan reducere tiden mellem olieskift.", FINT],
    ["Volkswagen: ved service måles ladetilstanden på 12-volts-batteriet og højvoltsbatteriet via testere med direkte opkobling til fabrikkens online diagnosesystem.", VWEL],
    ["Volkswagen: de fleste ID.-modeller har Light Assist, hvor en computer ved lygterne sikrer korrekt lys uden at blænde, uanset last; alle autoriserede Volkswagen-værksteder har et lygteapparat, der passer.", VWEL],
    ["Michelin: elbiler er generelt tungere, har mere moment og bruger regenerativ bremsning, hvilket giver hurtigere dækslid; vægt er en afgørende faktor; et slidt dæk er omkring 6 % bedre for rækkevidden end et nyt.", MICH],
    ["Volkswagens HV-garanti: nettobatterienergiindholdet er det anvendelige indhold og står i aftaledokumenterne (kWh); nominelt indhold ligger systembetinget over; målingen udføres hos en Volkswagen servicepartner inden for garantiperioden; under 70 % af udgangsværdien er et overproportionelt tab, som afhjælpes gratis til mindst 78/74/70 % afhængigt af alder og km; eksempel 4 år og 90.000 km med 69 % skal op på mindst 74 % (punkt C.2).", VWGAR],
    ["Volkswagens garanti følger bilen ved salg, og nybilsgarantiens bestemmelser gælder tilsvarende for højvoltsbatteriet.", VWGAR],
    ["Ford: undgå at lade bilen stå parkeret i længere perioder med et næsten fuldt opladet batteri, og undgå så vidt muligt, at batteriet bliver helt afladet; et højvoltsbatteri påvirkes over tid af naturligt slid.", FGAR],
    ["Volkswagen anbefaler primært opladning med vekselstrøm; hyppig DC-opladning (lynopladning) kan medføre en permanent reducering af lagringskapaciteten i højvoltsbatteriet.", VWEL],
    ["Volkswagen, tovejsopladning (punkt C.3): energi afgivet tovejs omregnes til virtuel afstand med det hypotetiske energiforbrug (det maksimale under mest ugunstige certificerede testforhold) og lægges til kilometertallet i HV-garantien; 20 kWh ved 20 kWh/100 km giver 100 km; vises i bilens serviceindstillinger.", VWGAR],
    ["Volkswagen: ladekablet må ikke foldes eller bøjes over skarpe kanter, ikke udsættes for stærkt sollys (udetemperaturer ikke højere end 50 °C), og beskadigede ladestik og kabler må ikke bruges; tjek for skader og snavs før brug.", VWEL],
    ["Ford Protect New: 2 + 3 års garanti på E-Transit Courier, E-Transit Custom, E-Transit og Ford Explorer VAN (BEV) m.fl., i op til 5 år fra første indregistrering eller 150.000 km; den udvidede garanti ændrer ikke HV-batterigarantien; service skal ikke ske på autoriseret værksted, men efter Fords forskrifter og dokumenteret; garantiarbejde skal udføres på autoriseret Ford-værksted; skader fra uheld, forkert brug eller mangelfuld vedligeholdelse er ikke dækket.", FGAR],
    ["Toyota: fabriksgaranti 3 år/100.000 km uden kilometerbegrænsning det første år; Toyota Relax gives ved hvert service på autoriseret Toyota-værksted og dækker til næste eftersyn, indtil bilen er 10 år eller har kørt 185.000 km; performer batteriet under 70 % inden for 8 år/160.000 km, skifter Toyota det.", TOY],
    ["Volkswagen: software og assistentsystemer kræver mere af værkstedet; på autoriseret værksted kobles bilen til fabrikkens systemer og får nyeste opdatering, også en importeret bil; ServiceCam sender video på e-mail eller sms, og reparationer kan godkendes eller afvises med få klik.", VWEL],
    ["Volkswagen Service 5+ er til biler på 5 år eller mere (også erhvervsbiler) og har forskellige kontrollister: elbil (forrude, gearkasse og drivlinje, karrosseri, affjedring og ophæng, bremser, undervogn, visuel kontrol af HV-ladetilstand, 12-volts SOC, HV-komponenter, skift af lugt- og allergenfilter) og diesel/benzin (batteritest, udstødningssystem m.fl.).", VW5],
    ["Hessel: på elbiler bruges de mekaniske bremser sjældnere og har større risiko for at ruste eller sætte sig fast, og elbiler er ofte tungere; Hessel anbefaler bremseservice mindst hvert andet år og råder ejere til at bruge den mekaniske bremse en gang imellem.", HESB],
    ["Volkswagen: der er eksempler på ID.-modeller, hvor rustbeskyttelsen dækker højvoltsadvarselsskiltene, hvilket kan være farligt.", VWEL],
    ["Volkswagen: reparationer, der ikke har med højspændingssystemet at gøre, fx dækskift, kan udføres af en person, der har gennemført træningen i elbiler; skal højvoltsbatteriet åbnes, skal bilen på et servicecenter med service på højspændingssystemer; batteriet gør det svært at komme til andre dele, så der bruges specialværktøj; Volkswagen Vejhjælp sender medarbejdere med undervisning i elbiler.", VWEL]
  ]
};
