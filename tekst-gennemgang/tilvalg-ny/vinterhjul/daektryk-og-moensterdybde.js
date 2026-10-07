// Underside /til-varebilen/vinterhjul/daektryk-og-moensterdybde/ (07-10-2026)
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var FSNY = `https://www.fstyr.dk/nyheder/2025/jun/aendringer-i-detailforskrifter-for-koeretoejers-indretning-udstyr-og-anvendelse-pr-1-juli-2025`;
var FSDAEK = `https://www.fstyr.dk/privat/krav-til-koeretoejer/vejledning-om-daek`;
var CMOEN = `https://www.continental-tires.com/dk/da/tire-knowledge/tread-depth/`;
var CTRYK = `https://www.continental-tires.com/dk/da/tire-knowledge/tire-pressure/`;
var CTPMS = `https://www.continental-tires.com/dk/da/tire-knowledge/tire-pressure-monitoring-system/`;
var MICHC = `https://www.michelin.co.uk/auto/advice/van/reinforced-tyres-utility-vehicles`;
var HES = `https://www.hessel.dk/vaerksted-service/ydelser/daek-og-hjulskifte`;
var TSV = `https://www.transportstyrelsen.se/sv/vagtrafik/fordon/fordonsregler/dack/vinterdack/`;
var SVV = `https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/vinterdekk/`;

module.exports = {
  id: "vinterhjul/daektryk-og-moensterdybde",
  side: {
    slug: "daektryk-og-moensterdybde",
    navn: "Dæktryk og mønsterdybde",
    titel: "Mønsterdybde og dæktryk på varebil",
    kort: `Lovkravet på 1,6 mm, hvordan mønsteret måles, dæktryk ved fuld last og reglerne for TPMS på varebiler.`,
    beskrivelse: `Mønsterdybde på varebil: kravet på 1,6 mm og sådan måles det, slidindikatorer, dæktryk ved fuld last og TPMS-kravet for varebiler fra 2026.`,
    manchet: `Mønsterdybden skal være mindst 1,6 mm på alle biler, og siden 1. juli 2025 gælder det også tunge køretøjer. Dæktrykket skal følge bilfabrikantens anvisning, og varebiler registreret fra 1. januar 2026 skal have dæktrykovervågning. Her er reglerne fra Færdselsstyrelsens synsvejledning, og sådan måler du selv.`,
    visuel: {
      hero: "vinterhjul",
      kort_fortalt: [
        ["Mønsterdybde", "mindst 1,6 mm", "på alle biler"],
        ["Nye dæk", "7–8 mm", "typisk mønster ifølge Færdselsstyrelsen"],
        ["TPMS-krav", "1. januar 2026", "for varebiler registreret første gang fra den dato"],
        ["TPMS-lampen tænder", "20 %", "trykfald eller mere i et dæk"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Kravet til mønsterdybde",
        tekst: [
          `Mønsterdybden skal være mindst 1,6 mm på alle biler, der må køre over 40 km/t. Kravet står i Færdselsstyrelsens synsvejledning og gælder både biler med en tilladt totalvægt på højst 3.500 kg og tungere biler.`,
          `Kravet til tunge køretøjer blev hævet fra 1,0 til 1,6 mm den 1. juli 2025. En virksomhed med både varebiler og lastbiler har derfor den samme grænse for hele flåden.`,
          `Mønsterdybden er dybden af rillerne i slidbanen, som er den del af dækket, der rører vejen. Nye dæk har typisk 7–8 mm mønster, skriver Færdselsstyrelsen.`
        ],
        tabel: {
          kolonner: ["Køretøj", "Mindst"],
          raekker: [
            ["Tilladt totalvægt højst 3.500 kg", "1,6 mm"],
            ["Tilladt totalvægt over 3.500 kg", "1,6 mm"]
          ],
          note: `Gælder køretøjer med en tilladt hastighed over 40 km/t. Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, Vejledning om syn af køretøjer, afsnit 8.02</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før 1. juli 2025", "Tunge køretøjer skulle have mindst 1,0 mm mønster."],
            ["Fra 1. juli 2025", "Kravet er 1,6 mm for alle biler, også over 3.500 kg."]
          ],
          note: `Kilde: <a href="${FSNY}" rel="noopener">Færdselsstyrelsen</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${FSNY}" rel="noopener">Færdselsstyrelsen, ændringer fra 1. juli 2025</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvorfor mønsteret betyder noget",
        tekst: [
          `Rillerne leder vandet væk fra den flade, hvor dækket rører vejen. Continental skriver, at et dæk med lav mønsterdybde har sværere ved at lede vandet væk på våde veje. Så opstår der lettere akvaplaning, hvor dækket flyder oven på vandet.`,
          `Under 1,6 mm har dækket ikke ordentligt vejgreb, og både bremselængden og styreegenskaberne bliver dårligere, skriver Continental. Færdselsstyrelsen anbefaler at skifte dækkene, før de når minimumsgrænsen, fordi mere mønster giver større sikkerhed på våde og glatte veje.`,
          `Færdselsstyrelsen skriver også, at et nedslidt vinterdæk kan være farligere i vinterføre end et nyt sommerdæk.`
        ],
        efter: [
          `Kilder: <a href="${CMOEN}" rel="noopener">Continental: Mønsterdybde</a> og <a href="${FSDAEK}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvor der måles",
        tekst: [
          `Mønsterdybden måles i hovedmønsteret. Det er de brede riller i slidbanens midterste del, der dækker cirka tre fjerdedele af bredden. Støtteribber, supplerende mønster og dræn tæller ikke med.`,
          `Continental skriver, at dækkets mønsterdybde bestemmes af den laveste målte dybde, og at nye dæk har op til 8 mm. Er du i tvivl, kan dækværkstedet måle mønsteret for dig, skriver Færdselsstyrelsen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Slidbanen set ovenfra med hovedmønsteret i den midterste del, cirka tre fjerdedele af bredden"><line class="tg-pil" x1="88" y1="28" x2="312" y2="28"/><line class="tg-pil" x1="88" y1="22" x2="88" y2="34"/><line class="tg-pil" x1="312" y1="22" x2="312" y2="34"/><text x="200" y="18" text-anchor="middle">ca. 3/4 af bredden</text><rect class="tg-profil" x="50" y="40" width="300" height="120" rx="6"/><rect class="tg-modul" x="88" y="40" width="224" height="120"/><rect class="tg-hylde" x="124" y="40" width="12" height="120"/><rect class="tg-hylde" x="194" y="40" width="12" height="120"/><rect class="tg-hylde" x="264" y="40" width="12" height="120"/><line class="tg-pil" x1="56" y1="60" x2="80" y2="70"/><line class="tg-pil" x1="56" y1="90" x2="80" y2="100"/><line class="tg-pil" x1="56" y1="120" x2="80" y2="130"/><line class="tg-pil" x1="320" y1="70" x2="344" y2="60"/><line class="tg-pil" x1="320" y1="100" x2="344" y2="90"/><line class="tg-pil" x1="320" y1="130" x2="344" y2="120"/><g class="tg-call"><line x1="200" y1="150" x2="200" y2="176"/><circle cx="200" cy="150" r="3"/><text class="tg-call__navn" x="150" y="188">Hovedmønster</text><text class="tg-call__under" x="150" y="202">her måles dybden</text></g><g class="tg-call"><line x1="332" y1="150" x2="340" y2="176"/><circle cx="332" cy="150" r="3"/><text class="tg-call__navn" x="290" y="188">Yderkant</text><text class="tg-call__under" x="290" y="202">uden for midten</text></g></svg>`,
          tekst: `Skematisk. Slidbanen set ovenfra med hovedmønsteret i den midterste del, hvor mønsterdybden måles. Kilde: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan måler du mønsterdybden",
        tekst: [
          `En mønsterdybdemåler er en lille pind med en skala. Du sætter pinden ned i en rille i hovedmønsteret og skubber måleren ned, til kraven flugter med slidbanens top. Så kan du aflæse dybden, skriver Continental. En lille lineal kan også bruges.`,
          `Continental nævner en 20-kroners mønt som en grov pejling. Kan du se teksten på mønten over mønsteret, er det tid til at overveje nye dæk, men målingen er ikke præcis.`,
          `Mål flere steder på dækket. Et forkert indstillet hjul kan give uens slid, og det er den laveste dybde, der tæller.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Find hovedmønsteret", "Det er de brede riller midt på slidbanen, cirka tre fjerdedele af bredden."],
            ["Sæt måleren i rillen", "Skub måleren ned, til kraven flugter med slidbanens top, og aflæs dybden."],
            ["Mål flere steder", "Slidet kan være uens, fx hvis hjulet er indstillet forkert."],
            ["Brug det laveste tal", "Dækkets mønsterdybde er den laveste dybde, du har målt."]
          ]
        },
        efter: [
          `Kilder: <a href="${CMOEN}" rel="noopener">Continental: Mønsterdybde</a> og <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.002</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Støtteribber og afslidte riller",
        tekst: [
          `Støtteribber hører ikke til hovedmønsteret, og det gælder også supplerende mønster og dræn, der på engelsk hedder siping. Rillen må derfor være helt afslidt, hvor der sidder en støtteribbe, hvis dybden ved siden af er mindst 1,6 mm. Dækket ser da ud til at have afgrænsede huller i overfladen.`,
          `Visse terrændæk, der kaldes Nato- eller militærdæk, har ikke mønster i midten, men tværgående eller skrå riller i siderne. Terrændæk uden mønster i midten måles i alle tværrillerne. Kilde: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.002</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Slidindikatorer",
        tekst: [
          `Slidindikatorerne er små tværstykker i bunden af hovedmønsterets riller, fordelt rundt om hele dækket. De viser, hvornår mønsteret er slidt ned til 1,6 mm. Når slidbanen flugter med indikatoren, skal dækket skiftes, skriver Continental.`
        ],
        punkter: [
          `<strong>TWI.</strong> Dæk med krav om 1,6 mm skal have slidindikatorer i tværgående rækker i hovedmønsteret, der viser 1,6 mm. En pil eller »TWI« på sidevæggen viser, hvor de sidder.`,
          `<strong>Vinterindikator.</strong> Mange vinterdæk har en ekstra indikator markeret med et snefnug, skriver Continental.`,
          `<strong>Sommerdæk.</strong> Nogle sommerdæk har ekstra indikatorer markeret med en vanddråbe.`,
          `<strong>Nyt mønster.</strong> Der må kun skæres nyt mønster i dæk mærket »Regroovable«.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 208" role="img" aria-label="Snit gennem en rille i slidbanen. I bunden af rillen sidder slidindikatoren, hvis top ligger 1,6 mm over bunden. Når slidbanen er slidt ned til indikatoren, skal dækket skiftes."><text class="tg-lille" x="10" y="16">SNIT GENNEM EN RILLE</text><path class="tg-profil" d="M40,40 H130 V150 H190 V40 H280 V170 H40 Z"/><rect class="tg-modul" x="130" y="132" width="60" height="18"/><line class="tg-skinne" x1="30" y1="132" x2="290" y2="132"/><text class="tg-fremhaev" x="296" y="136">1,6 mm</text><text x="296" y="44">nyt dæk</text><text x="296" y="58">op til 8 mm</text><g class="tg-call"><line x1="160" y1="141" x2="160" y2="180"/><circle cx="160" cy="141" r="3"/><text class="tg-call__navn" x="166" y="186">Slidindikator (TWI)</text><text class="tg-call__under" x="166" y="200">flugter den, skal dækket skiftes</text></g></svg>`,
          tekst: `Skematisk. Slidindikatoren i bunden af rillen viser 1,6 mm. Kilder: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.002</a> og <a href="${CMOEN}" rel="noopener">Continental: Mønsterdybde</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skiftegrænser over lovkravet",
        tekst: [
          `Nye dæk har typisk 7–8 mm mønster, skriver Færdselsstyrelsen. Lovkravet er 1,6 mm. Hessel anbefaler at skifte sommerdæk ved 3 mm og vinterdæk ved 4 mm, og altid når dækkene er mere end 6 år gamle.`,
          `Sverige og Norge kræver 3 mm om vinteren. En varebil, der kører over grænsen i vintermånederne, skal derfor have mere mønster end det danske minimum. Perioderne står i <a href="/til-varebilen/vinterhjul/vinterdaek-i-udlandet/">vinterdæk i udlandet</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 225" role="img" aria-label="Snit gennem slidbanen med nyt mønster på 7–8 mm, slidindikator ved 1,6 mm og skiftegrænser på 3 og 4 mm"><defs><marker id="pil-vinterhjul-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><path d="M50,50 H105 V146 H135 V50 H175 V146 H205 V50 H240 V170 H50 Z" class="tg-profil"/><rect x="105" y="127" width="30" height="19" class="tg-modul"/><line x1="50" y1="98" x2="250" y2="98" class="tg-skinne-tynd"/><line x1="50" y1="110" x2="250" y2="110" class="tg-skinne-tynd"/><line x1="50" y1="127" x2="250" y2="127" class="tg-skinne"/><text x="256" y="102">4 mm Hessel, vinter</text><text x="256" y="114">3 mm vinter SE, NO</text><text x="256" y="131" class="tg-fremhaev">1,6 mm lovkrav</text><g class="tg-maal"><line x1="38" y1="50" x2="38" y2="146" marker-start="url(#pil-vinterhjul-1)" marker-end="url(#pil-vinterhjul-1)"/><text x="30" y="98" text-anchor="middle" transform="rotate(-90 30 98)">nyt dæk 7–8 mm</text></g><g class="tg-call"><line x1="120" y1="140" x2="120" y2="186"/><circle cx="120" cy="140" r="3"/><text x="126" y="196" class="tg-call__navn">Slidindikator (TWI)</text><text x="126" y="210" class="tg-call__under">i hovedmønsterets riller</text></g><text x="130" y="164" class="tg-lille">SLIDBANE, SNIT</text></svg>`,
          tekst: `Skematisk. Snit gennem slidbanen. Kilder: <a href="${FSDAEK}" rel="noopener">Færdselsstyrelsen</a>, <a href="${HES}" rel="noopener">Hessel</a>, <a href="${TSV}" rel="noopener">Transportstyrelsen</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Det bedste mønster bagpå",
        tekst: [
          `Har bilen dæk med forskellig mønsterdybde, anbefaler Transportstyrelsen i Sverige at sætte dækkene med mest mønster eller bedst vejgreb bagpå. Det mindsker risikoen for udskridning, når du bremser og drejer, og rådet gælder både for- og baghjulstrukne biler.`,
          `Reglen om samme dimension og type på samme aksel gælder stadig. Det er de to par dæk, der kan bytte plads mellem for- og bagaksel, ikke de enkelte dæk.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 204" role="img" aria-label="Varebil set ovenfra. Baghjulene er fremhævet, fordi dækkene med mest mønster skal sidde bagpå, og de mere slidte dæk sidder foran."><text class="tg-lille" x="200" y="20" text-anchor="middle">VAREBIL SET OVENFRA</text><text class="tg-lille" x="10" y="104">FRONT</text><rect class="tg-rum" x="60" y="44" width="280" height="100" rx="12"/><rect class="tg-profil" x="90" y="32" width="44" height="16"/><rect class="tg-profil" x="90" y="140" width="44" height="16"/><rect class="tg-modul" x="260" y="32" width="44" height="16"/><rect class="tg-modul" x="260" y="140" width="44" height="16"/><g class="tg-call"><line x1="112" y1="156" x2="112" y2="170"/><circle cx="112" cy="156" r="3"/><text class="tg-call__navn" x="10" y="182">Mindre mønster foran</text><text class="tg-call__under" x="10" y="196">de mest slidte dæk</text></g><g class="tg-call"><line x1="282" y1="156" x2="282" y2="170"/><circle cx="282" cy="156" r="3"/><text class="tg-call__navn" x="390" y="182" text-anchor="end">Mest mønster bagpå</text><text class="tg-call__under" x="390" y="196" text-anchor="end">for- og baghjulstræk</text></g></svg>`,
          tekst: `Skematisk. Transportstyrelsens råd om, hvor dækkene med mest mønster skal sidde. Kilde: <a href="${TSV}" rel="noopener">Transportstyrelsen, Vinterdäck</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dæktryk ved fuld last",
        tekst: [
          `Trykket skal være det, bilfabrikanten foreskriver. Continental skriver, at instruktionsbogen kan have to tal, ét til normal brug og ét til fuld belastning, og at det anbefalede tryk er det mindste tryk i kolde dæk.`,
          `En varebil, der kører fuldt lastet, skal derfor have det tryk, fabrikanten angiver til fuld last. Michelin anbefaler at justere trykket hver måned efter varebilens anvisning, og Continental anbefaler at tjekke det 1–2 gange om måneden og før bilen skal bære mere vægt.`
        ],
        punkter: [
          `<strong>Mål på kolde dæk.</strong> Trykket stiger cirka 1 PSI pr. 12 °C, ifølge Continental.`,
          `<strong>Om vinteren</strong> kan trykket falde op til 5 PSI, skriver Continental.`,
          `<strong>PSI og bar.</strong> Trykket måles i pund pr. kvadrattomme (PSI) eller i bar.`,
          `<strong>Reservehjulet</strong> tjekkes med.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Trykket stiger", "ca. 1", "PSI pr. 12 °C"],
            ["Trykfald om vinteren", "op til 5", "PSI"],
            ["Længere levetid med korrekt pleje", "7.500", "km i gennemsnit"]
          ],
          note: `Tallene er fra <a href="${CTRYK}" rel="noopener">Continental: Dæktryk</a>, set den 7. oktober 2026. Michelin anbefaler at justere trykket hver måned.`
        }
      },
      {
        overskrift: "For lavt og for højt tryk",
        tekst: [
          `For lavt tryk får dækket til at slides hurtigere, og for højt tryk giver uens slid, skriver Continental. Korrekt pleje kan i gennemsnit forlænge dækkets levetid med 7.500 km.`,
          `Trykket påvirker også sikkerheden. Ved for lavt tryk reagerer bilen langsommere, bremselængden bliver længere, og akvaplaning kan opstå tidligere. Ved for højt tryk bliver bilen ustabil, især ved høj fart.`,
          `For lavt tryk øger desuden rullemodstanden og dermed forbruget af diesel eller strøm, skriver Continental. Transportstyrelsen i Sverige skriver, at forkert dæktryk påvirker køreegenskaber, forbrug og dækkenes levetid.`
        ],
        efter: [
          `Kilder: <a href="${CTRYK}" rel="noopener">Continental: Dæktryk</a>, <a href="${CTPMS}" rel="noopener">Continental: TPMS</a> og <a href="${TSV}" rel="noopener">Transportstyrelsen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "TPMS på varebiler",
        tekst: [
          `Varebiler (N1), der er registreret første gang 1. januar 2026 eller senere, skal have dæktrykovervågning. Varebiler fremstillet i lille serie er undtaget. På biler registreret fra 1. juli 2025 skal systemet opfylde FN-regulativ 141-01.`,
          `TPMS står for Tire Pressure Monitoring System. Personbiler har haft kravet siden den 1. november 2014, og små busser i kategori M2 fik kravet samtidig med varebilerne.`,
          `For en flåde betyder det, at nye varebiler kommer med systemet, mens ældre varebiler ikke er omfattet.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["1. november 2014", "Personbiler (M1) skal have dæktrykovervågning."],
            ["1. juli 2025", "Systemet skal opfylde FN-regulativ 141-01."],
            ["1. januar 2026", "Varebiler (N1) og små busser (M2) skal have dæktrykovervågning. Varebiler fremstillet i lille serie er undtaget."]
          ],
          note: `Datoerne gælder biler registreret fra den nævnte dato. Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.004, 8.02.021, 8.02.022 og 8.02.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Indirekte og direkte TPMS",
        tekst: [
          `Der findes to slags systemer. Et indirekte system bruger ABS-sensorerne. Drejer et eller flere hjul med et andet omdrejningstal end de andre under kørsel, er det tegn på lavt tryk, og lampen tænder.`,
          `Et direkte system har en tryksensor i hvert hjul. Forskellen betyder noget, når bilen skifter til vinterhjul. De indirekte systemer virker uden videre, mens de direkte kræver sensorer i alle hjul.`,
          `Efter et hjulskift skal du med et indirekte system pumpe dækkene op til det rigtige tryk og nulstille systemet med en knap eller i en menu. Nogle direkte systemer kalibrerer sig selv efter kort tids kørsel, mens andre skal på værksted. Priser på sensorer står i <a href="/til-varebilen/vinterhjul/vinterhjul-pris/">pris på vinterhjul</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Egenskab", "Indirekte TPMS", "Direkte TPMS"],
          raekker: [
            ["Sådan virker det", "Måler hjulenes omdrejningstal via ABS-sensorerne", "Tryksensor i hvert hjul"],
            ["Vinterhjulene skal have sensorer", "nej", "ja"],
            ["Ved hjulskift", "Korrekt tryk og nulstilling med knap eller i menu", "Nogle kalibrerer sig selv, andre skal på værksted"]
          ],
          note: `Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, Vejledning om syn af køretøjer, afsnit 8.02.004</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan virker en direkte TPMS",
        tekst: [
          `Den direkte TPMS måler trykket inde i hjulet og sender det trådløst til bilen. Continental beskriver systemet i fire dele.`
        ],
        punkter: [
          `<strong>Sensor.</strong> Sensoren er batteridrevet, sidder på fælgen og er bygget sammen med ventilen.`,
          `<strong>Signal.</strong> Sensoren sender et højfrekvent signal til en modtager, og styreenheden viser resultatet på instrumentbrættet.`,
          `<strong>Måling.</strong> Sensoren måler med få sekunders mellemrum under kørsel og sjældnere, når bilen holder stille. Den sender kun data, når trykket ændrer sig.`,
          `<strong>Software.</strong> Styreenheden kan beregne, hvor hurtigt trykket falder, sammenligne temperaturen i dækkene og genkende dækkene automatisk.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 186" role="img" aria-label="Forløb i en direkte TPMS: sensoren på ventilen sender et signal til en modtager, styreenheden beregner trykket, og en lampe på instrumentbrættet tænder ved et trykfald på 20 procent."><defs><marker id="pil-daektryk-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="2" y="20">DIREKTE TPMS</text><rect class="tg-modul" x="2" y="40" width="84" height="56"/><text class="tg-modul__tekst" x="44" y="64" text-anchor="middle">Sensor</text><text class="tg-modul__tekst" x="44" y="82" text-anchor="middle">på ventilen</text><line class="tg-pil" x1="88" y1="68" x2="104" y2="68" marker-end="url(#pil-daektryk-1)"/><rect class="tg-kasse" x="106" y="40" width="84" height="56"/><text class="tg-fremhaev" x="148" y="64" text-anchor="middle">Modtager</text><text x="148" y="82" text-anchor="middle">radiosignal</text><line class="tg-pil" x1="192" y1="68" x2="208" y2="68" marker-end="url(#pil-daektryk-1)"/><rect class="tg-kasse" x="210" y="40" width="84" height="56"/><text class="tg-fremhaev" x="252" y="64" text-anchor="middle">Styreenhed</text><text x="252" y="82" text-anchor="middle">beregner</text><line class="tg-pil" x1="296" y1="68" x2="312" y2="68" marker-end="url(#pil-daektryk-1)"/><rect class="tg-kasse" x="314" y="40" width="84" height="56"/><text class="tg-fremhaev" x="356" y="64" text-anchor="middle">Lampe</text><text x="356" y="82" text-anchor="middle">fald på 20 %</text><text class="tg-lille" x="200" y="130" text-anchor="middle">MÅLER HVERT PAR SEKUNDER UNDER KØRSEL</text><text class="tg-lille" x="200" y="150" text-anchor="middle">SJÆLDNERE, NÅR BILEN HOLDER STILLE</text><text class="tg-lille" x="200" y="170" text-anchor="middle">SENDER KUN, NÅR TRYKKET ÆNDRER SIG</text></svg>`,
          tekst: `Skematisk. Forløbet fra sensor til lampe i en direkte TPMS. Kilder: <a href="${CTPMS}" rel="noopener">Continental: TPMS</a> og <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.004</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lampen og den manuelle kontrol",
        tekst: [
          `Den originale TPMS tænder en gul kontrollampe, når trykket i et eller flere dæk er faldet 20 procent eller mere. Lampen tænder også ved fejl i systemet. Lampen tænder altså først, når trykket er faldet en femtedel.`,
          `Continental skriver, at TPMS ikke erstatter en manuel kontrol 1–2 gange om måneden, og at ca. 40 procent af alle dæksvigt skyldes for lavt dæktryk.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Trykfald, før lampen tænder", "20", "%"],
            ["Manuel kontrol, Continental", "1–2", "pr. md."],
            ["Dæksvigt fra lavt tryk", "ca. 40", "%"]
          ],
          note: `Kilder: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.004</a> og <a href="${CTPMS}" rel="noopener">Continental, TPMS</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Skader og reparation",
        tekst: [
          `Dæk, fælge og hjullejer skal være ubeskadigede. Synsvejledningen nævner de skader, der gør et dæk ulovligt, og skelner mellem permanent reparation og nødtætning.`
        ],
        punkter: [
          `<strong>Skader.</strong> Brud på de bærende lag, stik- og snitskader, revner ind til stål eller lærred og lokale udbulinger.`,
          `<strong>Permanent reparation</strong> følger dækfabrikantens forskrifter.`,
          `<strong>Lappespray og propning udefra</strong> er nødtætning og kun beregnet til kørsel til nærmeste fagmand.`
        ],
        efter: [
          `Continental skriver, at udbulinger i slidbanen eller på sidevæggen betyder, at dækket ikke er sikkert og skal skiftes. Små huller skåret i slidbanen kan opstå, når hjulene er indstillet forkert.`,
          `Kilder: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, Vejledning om syn af køretøjer, afsnit 8.02</a>, set den 4. oktober 2026, og <a href="${CMOEN}" rel="noopener">Continental: Mønsterdybde</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Samme aksel, samme dæk",
        tekst: [
          `Dækkene på samme aksel skal have samme dimension og type. For- og bagaksel må være forskellige, og reservehjulet må afvige. Reglen gælder heller ikke dæk til midlertidig brug, fx et nødreservehjul.`,
          `Typen handler om dækkets opbygning og brug, fx om det er et almindeligt dæk, et M+S-dæk eller et vinterdæk med det alpine symbol. Mere om type og mærkning i <a href="/til-varebilen/vinterhjul/c-daek/">C-dæk til varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Varebil set ovenfra: de to forhjul er ens, de to baghjul er ens, og for- og bagaksel må have forskellige dæk"><text class="tg-fremhaev" x="60" y="34">Foraksel</text><text class="tg-fremhaev" x="250" y="34">Bagaksel</text><text class="tg-lille" x="14" y="114">FRONT</text><rect class="tg-rum" x="60" y="60" width="280" height="100" rx="12"/><rect class="tg-modul" x="90" y="48" width="44" height="16"/><rect class="tg-modul" x="90" y="156" width="44" height="16"/><rect class="tg-kuffert" x="260" y="48" width="44" height="16"/><rect class="tg-kuffert" x="260" y="156" width="44" height="16"/><line class="tg-skinne-tynd" x1="112" y1="64" x2="112" y2="156"/><line class="tg-skinne-tynd" x1="282" y1="64" x2="282" y2="156"/><text class="tg-lille" x="200" y="114" text-anchor="middle">FOR OG BAG MÅ AFVIGE</text><text x="60" y="192">samme dimension</text><text x="60" y="206">og type</text><text x="250" y="192">samme dimension</text><text x="250" y="206">og type</text></svg>`,
          tekst: `Skematisk. Bilen set ovenfra. Reservehjulet må afvige fra de andre dæk. Kilde: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.002</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Afbalancering og efterspænding",
        tekst: [
          `Afbalancering betyder, at vægten fordeles ligeligt rundt om hjulet, skriver Continental. Hessel skriver, at hjul, der ikke er afbalanceret, giver rystelser og slider på ophæng, styretøj, dæk og roterende dele.`,
          `Continental skriver, at møtrikkerne skal efterspændes efter de første 50 km med nye hjul og dæk. Statens vegvesen i Norge nævner ca. 40 km efter hvert hjulskift. Mere om hjulskift i <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel til varebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${CMOEN}" rel="noopener">Continental: Mønsterdybde</a>, <a href="${HES}" rel="noopener">Hessel</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Syn og tilbagelevering",
        tekst: [
          `Dækkene kontrolleres ved syn. Reglerne for syn står i Håndbogen under <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>. Opfylder dækkene ikke kravene, kan politiet også give en bøde, skriver Færdselsstyrelsen.`,
          `Ved operationel leasing står kravet til mønsterdybde ved tilbagelevering i leasingaftalen.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så bliver dæk og tryk sat op efter brugen.",
    spoergsmaal: [
      "Om bilen typisk kører tom, halvt eller fuldt lastet.",
      "Om bilen trækker anhænger.",
      "Om bilen har direkte eller indirekte TPMS.",
      "Leasingaftalens krav til mønsterdybde ved tilbagelevering.",
      "Om bilen skal køre i Sverige eller Norge om vinteren.",
      "Hvor gamle dækkene er."
    ],
    faq: [
      ["Hvad er minimum mønsterdybde på en varebil?", "1,6 mm. Det gælder biler med en tilladt totalvægt både under og over 3.500 kg."],
      ["Hvor måles mønsterdybden?", "I hovedmønsteret: de brede riller i den midterste del af slidbanen, cirka tre fjerdedele af bredden. Støtteribber tæller ikke med."],
      ["Hvordan måler jeg mønsterdybden?", "Sæt en mønsterdybdemåler ned i en rille i hovedmønsteret, og skub den ned, til kraven flugter med slidbanen. Mål flere steder, for det er den laveste dybde, der tæller."],
      ["Hvilket dæktryk skal en varebil have med fuld last?", "Det tryk, bilfabrikanten angiver. Instruktionsbogen kan have ét tal til normal brug og ét til fuld belastning."],
      ["Skal varebiler have TPMS?", "Ja, varebiler (N1) registreret første gang 1. januar 2026 eller senere. Ældre varebiler er ikke omfattet, og varebiler fremstillet i lille serie er undtaget."],
      ["Hvornår lyser TPMS-lampen?", "Når trykket i et eller flere dæk er faldet 20 procent eller mere, eller ved fejl i systemet."],
      ["Må et punkteret dæk lappes med spray?", "Lappespray og propning udefra regnes som nødtætning til kørsel til nærmeste fagmand, ikke som permanent reparation."],
      ["Hvor sidder TPMS-sensoren?", "Den sidder inde i hjulet på fælgen og er bygget sammen med ventilen. Den er batteridrevet og sender trykket trådløst til bilen."],
      ["Hvornår skal varebildæk skiftes?", "Lovkravet er 1,6 mm. Hessel anbefaler at skifte sommerdæk ved 3 mm og vinterdæk ved 4 mm. I Sverige og Norge er kravet 3 mm om vinteren."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, gældende fra 1. september 2026 (afsnit 8.02 Hjul og dæk)", url: SYN, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Ændringer i Detailforskrifter for køretøjer fra 1. juli 2025", url: FSNY, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om dæk", url: FSDAEK, dato: "2026-10-07" },
      { navn: "Continental: Mønsterdybde", url: CMOEN, dato: "2026-10-07" },
      { navn: "Continental: Dæktryk", url: CTRYK, dato: "2026-10-07" },
      { navn: "Michelin: Reinforced tyres for utility vehicles (C, XL og REINF)", url: MICHC, dato: "2026-10-07" },
      { navn: "Hessel: Dækskifte, hjulskifte og dækhotel", url: HES, dato: "2026-10-07" },
      { navn: "Transportstyrelsen (Sverige): Vinterdäck", url: TSV, dato: "2026-10-07" },
      { navn: "Statens vegvesen (Norge): Krav til dekk", url: SVV, dato: "2026-10-07" },
      { navn: "Continental: Dæktryksovervågningssystem (TPMS)", url: CTPMS, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Continental: et dæk med lav mønsterdybde har sværere ved at lede vand væk på våde veje, så akvaplaning lettere opstår; under 1,6 mm har dækket ikke ordentligt vejgreb, og bremselængde og styreegenskaber forringes.", CMOEN],
    ["Færdselsstyrelsen anbefaler at udskifte dæk, før de når minimumsgrænsen, da mere mønsterdybde giver større sikkerhed på våde og glatte veje; et nedslidt vinterdæk kan være farligere i vinterføre end et nyt sommerdæk; dækværkstedet kan måle mønsteret.", FSDAEK],
    ["Continental: med en mønsterdybdemåler sættes pinden i rillen, og måleren skubbes ned, til kraven flugter med slidbanens top; en lille lineal kan også bruges; en 20-kroners mønt giver en tilnærmelsesvis pejling; mål flere steder, da et forkert indstillet hjul kan give uens slid.", CMOEN],
    ["Synsvejledningen 8.02.002: visse terrændæk (Nato- eller militærdæk) har ikke mønster i midtersektionen, men tværgående eller skrå riller i siderne, og måles i samtlige tværriller; dræn kaldes 'siping'.", SYN],
    ["Continental: slidindikatorerne er tværstykker i mønsterrillerne fordelt ensartet over hele dækket; flugter mønsteret med dem, skal dækket udskiftes; nogle sommerdæk har ekstra indikatorer markeret med en vanddråbe.", CMOEN],
    ["Hessel anbefaler altid at skifte dæk, der er mere end 6 år gamle.", HES],
    ["Transportstyrelsen (Sverige): dækkene med størst mønsterdybde eller bedst vejgreb bør monteres bagpå for at mindske risikoen for udskridning ved bremsning og i sving; det gælder både for- og baghjulstrukne biler.", TSV],
    ["Continental: dæktryk måles i PSI eller bar; det anbefalede tryk er minimumsgrænsen for kolde dæk; tjek 1–2 gange om måneden og før bilen skal bære mere vægt; korrekt pleje kan i gennemsnit forlænge levetiden med 7.500 km.", CTRYK],
    ["Continental: for lavt tryk giver hurtigere slid, for højt tryk uens slid; for lavt tryk giver langsommere reaktion, længere bremselængde og tidligere akvaplaning; for højt tryk gør bilen ustabil, især ved høj fart.", CTRYK],
    ["Continental: for lavt dæktryk øger rullemodstanden og brændstofforbruget.", CTPMS],
    ["Transportstyrelsen (Sverige): forkert dæktryk kan påvirke køreegenskaber, brændstofforbrug og dækkenes levetid.", TSV],
    ["Synsvejledningen: personbil M1 skal have dæktrykovervågning (gælder ikke før 1. november 2014); personbil M2 skal have det fra 1. januar 2026.", SYN],
    ["Continental: TPMS-softwaren kan beregne, hvor hurtigt tryktabet sker, sammenligne temperaturen i dækkene og genkende dæk automatisk.", CTPMS],
    ["Continental: udbulinger i dækmønstret eller på sidevæggen betyder, at dækket ikke er sikkert og skal udskiftes; små huller skåret i slidbanen kan opstå, hvis hjulene er indstillet forkert.", CMOEN],
    ["Synsvejledningen 8.02.002: reglen om samme dimension og type på samme aksel gælder ikke dæk til midlertidig brug; dæk opdeles i typer efter opbygning og anvendelseskategori (almindeligt, M+S, M+S med alpint symbol, midlertidig brug).", SYN],
    ["Continental: korrekt dækbalance fordeler vægten ligeligt rundt om hele dækkets omkreds; ubalancerede hjul giver vibrationer og for tidligt slid; møtrikkerne skal efterspændes efter de første 50 km med nye hjul og dæk.", CMOEN],
    ["Hessel: hjul, der ikke er afbalanceret, giver rystelser og slid på ophæng, styretøj, dæk og roterende dele.", HES],
    ["Statens vegvesen: hjulboltene skal efterspændes efter ca. 40 km efter hvert hjulskift.", SVV],
    ["Færdselsstyrelsen: opfylder dækkene ikke kravene, kan politiet udstede en bøde.", FSDAEK]
  ]
};
