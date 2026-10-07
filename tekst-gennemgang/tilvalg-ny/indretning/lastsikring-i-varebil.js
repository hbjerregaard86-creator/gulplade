// Underside /til-varebilen/indretning/lastsikring-i-varebil/ (07-10-2026)
var EU = `https://download.eumos.eu/20140508_European-best-practices-EN.pdf`;
var BEK3 = `https://www.lovguiden.dk/loven/bekendtg%C3%B8relse-om-udf%C3%B8relse-af-syn-af-erhvervsk%C3%B8ret%C3%B8jer-ved-vejsiden/bilag-3`;
var BEK1 = `https://www.lovguiden.dk/loven/bekendtg%C3%B8relse-om-udf%C3%B8relse-af-syn-af-erhvervsk%C3%B8ret%C3%B8jer-ved-vejsiden/1`;
var FL = `https://www.lovguiden.dk/loven/f%C3%A6rdselsloven/82`;
var VOSAK = `https://cdn.fstyr.dk/faerdselsstyrelsen/Media/639102143281512027/VOSAK11.pdf`;
var AT = `https://at.dk/faa-viden/saerlige-indsatser/arbejd-sikkert-med-gods-pakker-og-varer/til-dig-der-er-lastbilchauffoer-chauffoer-eller-bud/`;
var VK = `https://www.vankompagniet.dk/product-category/indvendigt/lastsikring/`;
var SV = `https://smartvan.dk/kategori/lastsikring-til-varebil/`;
var SVBAR = `https://smartvan.dk/produkt/lastbar-1250-1750mm/`;
var BOXIC = `https://boxic24.com/english/ratgeber/lashing-strap-guide`;

module.exports = {
  id: "indretning/lastsikring-i-varebil",
  side: {
    slug: "lastsikring-i-varebil",
    navn: "Lastsikring i varebil",
    titel: "Lastsikring i varebil: udstyr, regler og pris",
    kort: `Her kan du se surringsskinner, surringsøjer, lastbarer og stropper, de kræfter lasten skal holdes mod, standarderne og priserne.`,
    beskrivelse: `Lastsikring i varebil: kræfterne på lasten, friktionstal, gummimåtter, skinner, lastbarer og stropper med EN 12195-standarderne og priser.`,
    manchet: `Lasten i en varebil holdes på plads på tre måder: gulvets friktion, blokering mod væg, reol eller lastbar, og surring med stropper. Her er udstyret, standarderne bag det, og hvad det koster. Reglerne kort står i <a href="/til-varebilen/indretning/regler/">regler for indretning af varebil</a>.`,
    visuel: {
      hero: "indretning",
      kort_fortalt: [
        ["Kraft fremad", "0,8 × vægten", "ca. 80 daN for 100 kg"],
        ["Til siderne og bagud", "0,5 × vægten", "ca. 50 daN for 100 kg"],
        ["Gummimåtte", "friktionstal 0,6", "mod 0,2–0,45 på krydsfiner"],
        ["Surringsskinne, 3 m", "595–1.820 kr.", "hos VanKompagniet og SmartVan"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Kræfterne lasten skal holdes mod",
        tekst: [
          `Når bilen bremser, svinger eller accelererer, fortsætter lasten i den retning, den kørte. Lastsikringen skal holde den tilbage. Kræfterne regnes som en del af lastens vægt, og fremad er kraften størst, fordi en hård opbremsning skubber lasten mod førerhuset.`,
          `Ved en hård opbremsning skal lasten holdes med en kraft på 0,8 gange dens vægt. Til siderne og bagud er kraften 0,5 gange vægten. En kasse på 100 kg skal altså holdes med ca. 80 daN fremad og ca. 50 daN til siderne og bagud.`,
          `daN står for dekanewton. 1 daN er 10 newton og svarer omtrent til den kraft, 1 kg trykker nedad med. Derfor kan du regne kilo om til daN uden at gange med noget.`
        ],
        tabel: {
          kolonner: ["Retning", "Kraft", "Last på 100 kg"],
          raekker: [
            ["Fremad", "0,8 × lastens vægt", "ca. 80 daN"],
            ["Til siderne", "0,5 × lastens vægt", "ca. 50 daN"],
            ["Bagud", "0,5 × lastens vægt", "ca. 50 daN"]
          ],
          note: `Kilder: <a href="${EU}" rel="noopener">EU-Kommissionen: European Best Practice Guidelines on Cargo Securing for Road Transport (2014)</a> og <a href="${BEK3}" rel="noopener">BEK nr. 1655 af 5. december 2025, bilag 3</a>, set den 4. oktober 2026. 1 daN = 10 newton, ca. den kraft 1 kg giver ved tyngdekraften.`,
          visning: "skjul"
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="En last på 100 kg set ovenfra med pile: 0,8 gange vægten fremad og 0,5 gange vægten til siderne og bagud."><text class="tg-lille" x="0" y="12">SET OVENFRA, FRONTEN OPAD</text><rect class="tg-kuffert" x="160" y="90" width="80" height="60"/><text class="tg-fremhaev" x="179" y="124">100 kg</text><line class="tg-pil" x1="200" y1="90" x2="200" y2="26"/><path class="tg-pil" d="M194,32 L200,26 L206,32"/><text x="212" y="38">Fremad: 0,8 × vægten</text><text class="tg-fremhaev" x="212" y="54">ca. 80 daN</text><line class="tg-pil" x1="160" y1="120" x2="120" y2="120"/><path class="tg-pil" d="M126,114 L120,120 L126,126"/><text x="0" y="104">Til siden</text><text x="0" y="120">0,5 × vægten</text><text class="tg-fremhaev" x="0" y="136">ca. 50 daN</text><line class="tg-pil" x1="240" y1="120" x2="280" y2="120"/><path class="tg-pil" d="M274,114 L280,120 L274,126"/><text x="290" y="104">Til siden</text><text x="290" y="120">0,5 × vægten</text><text class="tg-fremhaev" x="290" y="136">ca. 50 daN</text><line class="tg-pil" x1="200" y1="150" x2="200" y2="190"/><path class="tg-pil" d="M194,184 L200,190 L206,184"/><text x="212" y="178">Bagud: 0,5 × vægten</text><text class="tg-fremhaev" x="212" y="194">ca. 50 daN</text></svg>`,
          tekst: `Skematisk. Tegningen viser de kræfter, EN 12195-1 og EU's retningslinjer regner med for en last på 100 kg. BEK nr. 1655 gælder kun køretøjer over 3,5 t. Kilder: <a href="${EU}" rel="noopener">EU-Kommissionen: European Best Practice Guidelines on Cargo Securing for Road Transport (2014)</a> og <a href="${BEK3}" rel="noopener">BEK nr. 1655 af 5. december 2025, bilag 3</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Lastsikringen skal også forhindre, at lasten vipper. Tallene er dem, EN 12195-1 og EU's retningslinjer for lastsikring regner med ved vejtransport. I dansk ret står de i bekendtgørelsen om syn ved vejsiden, men den gælder kun køretøjer over 3,5 t og stiller ingen krav til varebiler.`,
          `For varebiler er grundreglen <a href="${FL}" rel="noopener">færdselslovens § 82, stk. 3</a>. Gods skal være anbragt, så det ikke kan frembyde fare for personer, skade ejendom eller falde af på vejen.`
        ]
      },
      {
        overskrift: "Friktion: gulvet holder en del",
        tekst: [
          `Friktionstallet viser, hvor stor en del af lastens vægt gulvet selv holder. Et tal på 0,45 betyder, at friktionen holder ca. 45 % af vægten, før lasten begynder at glide.`,
          `Friktionen mellem last og gulv holder altså en del af lasten på plads. Resten skal tages af blokering eller surring. EN 12195-1 har faste friktionstal for de almindelige materialer, så du ikke selv skal måle dem:`
        ],
        tabel: {
          kolonner: ["Last mod gulv", "Friktionstal"],
          raekker: [
            ["Savet træ mod krydsfiner", "0,45"],
            ["Savet træ mod rillet aluminium", "0,4"],
            ["Høvlet træ mod krydsfiner", "0,3"],
            ["Høvlet træ mod rillet aluminium", "0,25"],
            ["Stålkasse mod krydsfiner", "0,45"],
            ["Stålkasse mod rillet aluminium", "0,3"],
            ["Plastpalle mod krydsfiner", "0,2"],
            ["Plastpalle mod rillet aluminium", "0,15"],
            ["Gummimåtte", "0,6"]
          ],
          note: `Kilde: <a href="${EU}" rel="noopener">EU-Kommissionen: European Best Practice Guidelines on Cargo Securing for Road Transport (2014), bilag 3, uddrag af EN 12195-1:2010</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 246" role="img" aria-label="Friktionstal efter EN 12195-1: savet træ 0,45 mod krydsfiner og 0,4 mod rillet aluminium, høvlet træ 0,3 og 0,25, stålkasse 0,45 og 0,3, plastpalle 0,2 og 0,15, gummimåtte 0,6."><rect class="tg-modul" x="0" y="6" width="12" height="10"/><text x="18" y="15">mod krydsfiner</text><rect class="tg-hylde" x="140" y="6" width="12" height="10"/><text x="158" y="15">mod rillet aluminium</text><text class="tg-fremhaev" x="0" y="52">Savet træ</text><rect class="tg-modul" x="110" y="36" width="180" height="12"/><text x="296" y="46">0,45</text><rect class="tg-hylde" x="110" y="50" width="160" height="12"/><text x="276" y="60">0,4</text><text class="tg-fremhaev" x="0" y="92">Høvlet træ</text><rect class="tg-modul" x="110" y="76" width="120" height="12"/><text x="236" y="86">0,3</text><rect class="tg-hylde" x="110" y="90" width="100" height="12"/><text x="216" y="100">0,25</text><text class="tg-fremhaev" x="0" y="132">Stålkasse</text><rect class="tg-modul" x="110" y="116" width="180" height="12"/><text x="296" y="126">0,45</text><rect class="tg-hylde" x="110" y="130" width="120" height="12"/><text x="236" y="140">0,3</text><text class="tg-fremhaev" x="0" y="172">Plastpalle</text><rect class="tg-modul" x="110" y="156" width="80" height="12"/><text x="196" y="166">0,2</text><rect class="tg-hylde" x="110" y="170" width="60" height="12"/><text x="176" y="180">0,15</text><text class="tg-fremhaev" x="0" y="206">Gummimåtte</text><rect class="tg-kasse" x="110" y="196" width="240" height="12"/><text x="356" y="206">0,6</text><text class="tg-lille" x="0" y="238">FRIKTIONSTAL EFTER EN 12195-1</text></svg>`,
          tekst: `Skematisk. Friktionstallene fra EN 12195-1 for rene overflader. Kilde: <a href="${EU}" rel="noopener">EU-Kommissionen: European Best Practice Guidelines on Cargo Securing for Road Transport (2014), bilag 3, uddrag af EN 12195-1:2010</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Tallene gælder rene overflader, tørre eller våde. Er gulvet ikke fejet og fri for frost, is og sne, må der højst regnes med 0,2.`
        ]
      },
      {
        overskrift: "Regneeksempel med en stålkasse",
        tekst: [
          `Eksempel: En stålkasse på 100 kg på krydsfiner holdes af friktion svarende til ca. 45 daN. Fremad skal den holdes mod ca. 80 daN, så de sidste ca. 35 daN skal komme fra blokering eller surring.`,
          `Står den samme kasse på en gummimåtte, er friktionstallet 0,6. Så holder friktionen ca. 60 daN, og der mangler kun ca. 20 daN, som en lastbar eller en strop skal klare.`,
          `Regnestykket viser, hvorfor underlaget betyder noget. Med en bedre friktion skal du bruge færre eller svagere stropper til den samme last. Til siderne og bagud er kraften kun ca. 50 daN, så friktionen holder en større del af den.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Regneeksempel med en stålkasse på 100 kg. På krydsfiner holder friktionen ca. 45 daN af de ca. 80 daN fremad, så ca. 35 daN skal komme fra blokering eller surring. På en gummimåtte holder friktionen ca. 60 daN, og resten er ca. 20 daN."><text class="tg-lille" x="0" y="14">STÅLKASSE PÅ 100 KG, KRAFT FREMAD CA. 80 DAN</text><text class="tg-fremhaev" x="0" y="70">Krydsfiner</text><rect class="tg-modul" x="110" y="54" width="158" height="24"/><text class="tg-modul__tekst" x="118" y="70">friktion 45</text><rect class="tg-kasse" x="268" y="54" width="122" height="24"/><text x="276" y="70">rest 35</text><text class="tg-fremhaev" x="0" y="136">Gummimåtte</text><rect class="tg-modul" x="110" y="120" width="210" height="24"/><text class="tg-modul__tekst" x="118" y="136">friktion 60</text><rect class="tg-kasse" x="320" y="120" width="70" height="24"/><text x="326" y="136">rest 20</text><line class="tg-skinne-tynd" x1="390" y1="44" x2="390" y2="154"/><text x="390" y="170" text-anchor="end">80 daN</text><text class="tg-lille" x="0" y="192">RESTEN KLARES MED BLOKERING ELLER SURRING</text></svg>`,
          tekst: `Skematisk regneeksempel med friktionstallene 0,45 og 0,6 fra EN 12195-1. Kilde: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring, bilag 3 og afsnit 4.2.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Gummimåtter",
        tekst: [
          `En gummimåtte under lasten er den enkleste måde at øge friktionen på. EU's retningslinjer regner med friktionstallet 0,6 for gummimåtter mod ethvert andet materiale, når fladen er ren, tør eller våd. Med sne, is, fedt eller olie på fladen er tallet meget lavere.`,
          `Måtterne findes i tykkelser fra 2 til 30 mm. Der er ingen faste regler for, hvor store de skal være, men lastens vægt skal hvile helt på måtten. Måtter, der er mindre end 10 × 10 cm, kan rulle under lasten og må ikke bruges.`,
          `Under skarpe kanter kan nogle måtter blive gennemhullet af trykket og rystelserne, og så falder friktionen. Et friktionstal højere end 0,6 må kun bruges, hvis det står i et testcertifikat efter EN 12195-1. Gulvets egen overflade er beskrevet i <a href="/til-varebilen/indretning/gulv-og-vaegbeklaedning/">gulv og vægbeklædning</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Friktionstal, gummimåtte", "0,6", "ren flade, tør eller våd"],
            ["Tykkelse", "2–30", "mm"],
            ["Mindste størrelse", "10 × 10", "cm"]
          ],
          note: `Kilde: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring, afsnit 4.2.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fire måder at sikre lasten",
        tekst: [
          `Metoderne må lægges sammen. EU's retningslinjer tillader, at låsning, blokering, direkte surring og surring over toppen tilsammen holder lasten mod at glide, vippe, rulle eller dreje.`,
          `EU's retningslinjer og bilag 3 i bekendtgørelsen om vejsidesyn regner med fire fastgørelsesmetoder, som kan bruges alene eller sammen:`
        ],
        kort: [
          ["Låsning", "Kasser, kufferter og skuffer låses fast i reolen eller i en skinne."],
          ["Blokering", "Lasten står tæt an mod skillevæg, reol, sidevæg eller lastbar, så den ikke kan glide."],
          ["Direkte surring", "En strop går fra lasten til et surringspunkt. Her tæller stroppens LC."],
          ["Surring over toppen", "Stroppen presser lasten ned mod gulvet og øger friktionen. Her tæller STF, ikke LC."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Fire felter med de fire metoder: kufferter låst fast i reolen, en kasse blokeret mod skillevæggen og en lastbar, en kasse surret direkte til surringspunkter i gulvet og en kasse surret over toppen, så stroppen presser den ned."><defs><marker id="pil-lastsikring-i-varebil-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><line class="tg-skinne-tynd" x1="200" y1="8" x2="200" y2="242"/><line class="tg-skinne-tynd" x1="8" y1="125" x2="392" y2="125"/><text class="tg-fremhaev" x="10" y="20">1 Låsning</text><rect class="tg-kasse" x="60" y="34" width="80" height="76"/><line class="tg-skinne-tynd" x1="60" y1="72" x2="140" y2="72"/><rect class="tg-kuffert" x="68" y="46" width="64" height="24"/><rect class="tg-modul" x="96" y="40" width="8" height="8"/><rect class="tg-kuffert" x="68" y="84" width="64" height="24"/><rect class="tg-modul" x="96" y="78" width="8" height="8"/><line class="tg-gulvlinje" x1="10" y1="110" x2="190" y2="110"/><text class="tg-fremhaev" x="210" y="20">2 Blokering</text><rect class="tg-hylde" x="226" y="30" width="8" height="80"/><rect class="tg-kuffert" x="234" y="60" width="60" height="50"/><rect class="tg-modul" x="296" y="30" width="6" height="80"/><text class="tg-lille" x="310" y="64">LASTBAR</text><line class="tg-gulvlinje" x1="210" y1="110" x2="390" y2="110"/><text class="tg-fremhaev" x="10" y="145">3 Direkte surring</text><rect class="tg-kuffert" x="70" y="180" width="60" height="50"/><line class="tg-skinne" x1="72" y1="190" x2="40" y2="230"/><line class="tg-skinne" x1="128" y1="190" x2="160" y2="230"/><circle class="tg-profil" cx="40" cy="230" r="4"/><circle class="tg-profil" cx="160" cy="230" r="4"/><line class="tg-gulvlinje" x1="10" y1="230" x2="190" y2="230"/><text class="tg-fremhaev" x="210" y="145">4 Surring over toppen</text><rect class="tg-kuffert" x="270" y="180" width="60" height="50"/><polyline class="tg-skinne" fill="none" points="250,230 270,180 330,180 350,230"/><line class="tg-pil" x1="300" y1="154" x2="300" y2="174" marker-end="url(#pil-lastsikring-i-varebil-1)"/><line class="tg-gulvlinje" x1="210" y1="230" x2="390" y2="230"/></svg>`,
          tekst: `Skematisk. De fire fastgørelsesmetoder, som kan bruges alene eller sammen. Kilder: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring</a> og <a href="${BEK3}" rel="noopener">BEK nr. 1655, bilag 3</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Blokering og tomme rum",
        tekst: [
          `Blokering virker bedst, når lasten står tæt an mod den flade, der holder den. I en varebil er skillevæggen, reolerne og lastbarerne de faste flader, lasten kan blokeres mod. Hvad en skillevæg tåler, står i <a href="/til-varebilen/indretning/skillevaeg/">skillevæg</a>.`,
          `EU's retningslinjer anbefaler, at tomme rum fyldes, når lasten blokeres mod væggene. Tomme paller, der stilles på højkant eller ned, er et eksempel, og de kan spændes fast med lægter.`,
          `Materialer, der giver sig eller krymper varigt, som klude eller blødt skum, skal ikke bruges som fyld. De bliver trykket sammen under kørslen, og så opstår der luft igen.`
        ]
      },
      {
        overskrift: "Surringsskinner",
        tekst: [
          `En surringsskinne monteres i gulv, sider eller loft. Stropper, surringsøjer og lastbarer klikkes i skinnen, dér hvor lasten står. Airline-skinnen har en rund profil, og Combi Track er en stålskinne med huller.`,
          `Fordelen ved en skinne er, at surringspunktet kan flyttes hen til lasten. Uden skinner skal lasten stå, hvor bilens faste surringsøjer sidder. Alle priser på siden er uden moms.`
        ],
        tabel: {
          kolonner: ["Skinne", "Materiale og mål", "Forhandler", "Pris"],
          raekker: [
            ["Surringsskinne 5513, slim halvrund", "40 × 9,5 mm, 3 m", "VanKompagniet", "595 kr."],
            ["Surringsskinne 5508, firkantet", "40 × 11 mm, 3 m", "VanKompagniet", "695 kr."],
            ["Surringsskinne 5503, halvrund", "50 × 11,5 mm, 3 m", "VanKompagniet", "795 kr."],
            ["Combi Track", "Stål, 3.000 mm", "SmartVan", "1.120 kr."],
            ["Airline Track", "Aluminium, 3.000 mm", "SmartVan", "1.820 kr."]
          ],
          note: `Vejledende webshoppriser. Kilder: <a href="${VK}" rel="noopener">VanKompagniet: Lastsikring</a> og <a href="${SV}" rel="noopener">SmartVan: Lastsikring</a>, set den 4. oktober 2026.`,
          visning: "kort"
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 242" role="img" aria-label="Varerummets sidevæg med surringsskinner i loftet, i siden og i gulvet og en lodret lastbar mellem gulv og loft foran en kasse."><rect class="tg-rum" x="150" y="20" width="240" height="180"/><line class="tg-skinne" x1="158" y1="30" x2="382" y2="30"/><line class="tg-skinne" x1="158" y1="110" x2="382" y2="110"/><line class="tg-skinne" x1="158" y1="192" x2="382" y2="192"/><rect class="tg-kasse" x="200" y="142" width="58" height="50"/><rect class="tg-modul" x="262" y="30" width="8" height="162"/><g class="tg-call"><line x1="160" y1="30" x2="112" y2="30"/><circle cx="160" cy="30" r="3"/><text class="tg-call__navn" x="0" y="34">Skinne i loftet</text></g><g class="tg-call"><line x1="160" y1="110" x2="126" y2="110"/><circle cx="160" cy="110" r="3"/><text class="tg-call__navn" x="0" y="106">Skinne i siden</text><text class="tg-call__under" x="0" y="120">Airline, Combi Track</text></g><g class="tg-call"><line x1="160" y1="192" x2="116" y2="192"/><circle cx="160" cy="192" r="3"/><text class="tg-call__navn" x="0" y="196">Skinne i gulvet</text></g><g class="tg-call"><line x1="266" y1="196" x2="284" y2="208"/><circle cx="266" cy="196" r="3"/><text class="tg-call__navn" x="290" y="218">Lastbar</text><text class="tg-call__under" x="290" y="232">låst i skinnerne</text></g></svg>`,
          tekst: `Skematisk. Skinner i loft, side og gulv med en lastbar imellem. Skinnerne tåler store kræfter på langs, men næsten ingen på tværs. Derfor anbefaler EU's retningslinjer ikke at surre direkte i dem, medmindre producenten skriver, at det kan lade sig gøre.`
        },
        efter: [
          `Skinner i gulv, tag og sider tåler store kræfter på langs, men næsten ingen på tværs af den flade, de sidder på. EU's retningslinjer anbefaler derfor ikke at surre direkte i dem, medmindre producenten angiver det. De bruges med lastbarer, der har et testcertifikat.`
        ]
      },
      {
        overskrift: "Surringsøjer og surringspunkter",
        tekst: [
          `Et surringspunkt er et øje, en krog eller en ring på bilen, som en strop kan sættes direkte i. Standarden for surringspunkter er EN 12640. Til køretøjer fra 3,5 til 7,5 t angiver EU's retningslinjer, at hvert punkt skal tåle mindst 800 daN. Varebiler under 3,5 t er ikke med i den tabel.`,
          `For varebiler stiller Færdselsstyrelsens synsvejledning, pkt. 9.01.024, krav om, at en varebil N1 med lukket varerum har fuld eller delvis adskillelse eller fastgørelsesanordninger, der opfylder ISO 27956:2009. Kravet gælder biler, der er registreret første gang 1. juli 2025 eller senere. ISO 27956 handler om lastsikring i varebiler og stiller krav til adskillelse og fastgørelsesanordninger.`,
          `Surringspunkter med skraldemekanisme, der skrues i karrosseriet, opfylder hverken EN 12640 eller EN 12195-2 og må bruges efter deres eget testcertifikat.`
        ]
      },
      {
        overskrift: "Lastbarer og spærrestænger",
        tekst: [
          `En lastbar, også kaldet spærrestang eller soldat, spændes vandret mellem siderne eller lodret mellem gulv og loft. Den blokerer lasten og kan flyttes hen, hvor lasten står, når varerummet kun er delvist fyldt.`,
          `Hvor meget en lastbar holder, afhænger af, hvordan den sidder fast. En bar, der kun presser mod væggene, holder langt mindre end en bar, der sidder i huller eller i en skinne.`
        ],
        punkter: [
          `<strong>Fastgjort med friktion.</strong> Den almindelige spærrestang holder ved at presse mod væggene. Typisk blokeringsevne er 80–200 daN ifølge EU's retningslinjer.`,
          `<strong>Fastgjort i huller.</strong> Barer, der sidder i huller i bilen, har typisk 200–2.000 daN, afhængigt af fastgørelsen, og leveres med certifikat.`,
          `<strong>Eksempel.</strong> SmartVans lastbar klikkes i Airline-skinner, kan stilles fra 1.250 til 1.750 mm og bærer op til 350 daN. Prisen er 1.802 kr., og 1.820 kr. i længden 1.550–2.050 mm.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Spærrestang, holder med friktion", "80–200", "daN"],
            ["Bar fastgjort i huller", "200–2.000", "daN"],
            ["SmartVans lastbar, op til", 350, "daN"]
          ],
          note: `De to første er typiske tal fra EU's retningslinjer. SmartVans lastbar kan stilles fra 1.250 til 1.750 mm. Kilder: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring</a> og <a href="${SVBAR}" rel="noopener">SmartVan: Lastbar 1250–1750 mm</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Der findes endnu ingen færdig international standard for lastbarer, så blokeringsevnen står i producentens data.`
        ]
      },
      {
        overskrift: "Stropper: LC, STF og etiketten",
        tekst: [
          `Surringsbånd er omfattet af EN 12195-2. VanKompagniet sælger fx en strop med skralde og krog på 7,6 + 0,4 m, mærket 5.000 kg, for 395 kr. og en 50 mm spændestrop med klemlås for 269 kr. (4. oktober 2026).`,
          `Etiketten på stroppen fortæller, hvad den kan. Ved direkte surring er det stroppens styrke, der holder lasten, og så tæller LC. Ved surring over toppen holder stroppen lasten ved at presse den mod gulvet, og så tæller forspændingen STF.`
        ],
        punkter: [
          `<strong>LC (lashing capacity).</strong> Den kraft i daN, stroppen må belastes med ved direkte surring. Brudstyrken er mindst det dobbelte.`,
          `<strong>STF (standard tension force).</strong> Den forspænding, skralden giver med en standard håndkraft (SHF) på 50 daN. Den tæller ved surring over toppen.`,
          `<strong>Etikettens farve.</strong> Blå er polyester, grøn polyamid og brun polypropylen.`,
          `<strong>Kassation.</strong> En strop uden læselig etiket tages ud af brug. Det samme gælder ved snit eller rifter over 10 % af båndets bredde, skader i sømmene og rust eller deformation på skralde og kroge.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Metode", "Det holder lasten", "Tallet, der tæller"],
          raekker: [
            ["Låsning", "Lås i reol eller skinne", "Låsens styrke"],
            ["Blokering", "Væg, reol eller lastbar", "Blokeringsevne i daN"],
            ["Direkte surring", "Strop til surringspunkt", "LC"],
            ["Surring over toppen", "Tryk mod gulvet", "STF"]
          ],
          note: `Kilder: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring</a> og <a href="${BOXIC}" rel="noopener">Boxic: Lashing strap guide</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Lastens tyngdepunkt",
        tekst: [
          `Hvor lasten står, har betydning for bilens styring og bremser. EU's retningslinjer skriver, at den fulde nyttelast som regel kun kan bruges, når lastens tyngdepunkt ligger inden for snævre grænser omkring midten af lastrummets længde.`,
          `Tyngdepunktet er det punkt, hvor lastens samlede vægt trykker ned. De største tilladte vægte må ikke overskrides, og ifølge retningslinjerne skal der også være vægt nok på akslerne til, at bilen kan styre og bremse.`,
          `Producenten af bilen eller opbygningen kan levere et diagram, der viser, hvor meget bilen må laste, alt efter hvor tyngdepunktet ligger. I en varebil med reoler og skuffer tæller indretningens egen vægt med i regnestykket.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Varebil set fra siden med lasten placeret midt i lastrummet. Lastens tyngdepunkt ligger omkring halvdelen af lastrummets længde."><g transform="translate(70,170)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-kuffert" x="118" y="116" width="74" height="44"/><circle class="tg-modul" cx="155" cy="138" r="7"/><line class="tg-gulvlinje" x1="146" y1="138" x2="164" y2="138"/><line class="tg-gulvlinje" x1="155" y1="129" x2="155" y2="147"/><line class="tg-gulvlinje" x1="5" y1="187" x2="395" y2="187"/><line class="tg-skinne-tynd" x1="70" y1="202" x2="240" y2="202"/><line class="tg-skinne-tynd" x1="70" y1="196" x2="70" y2="208"/><line class="tg-skinne-tynd" x1="240" y1="196" x2="240" y2="208"/><line class="tg-skinne" x1="70" y1="202" x2="155" y2="202"/><text x="60" y="224">Lastrummets længde, halvdelen markeret</text><g class="tg-call"><line x1="155" y1="138" x2="96" y2="44"/><circle cx="155" cy="138" r="3"/><text class="tg-call__navn" x="5" y="24">Lastens tyngdepunkt</text><text class="tg-call__under" x="5" y="38">omkring midten af lastrummet</text></g></svg>`,
          tekst: `Skematisk. Den fulde nyttelast kan som regel kun bruges, når tyngdepunktet ligger omkring halvdelen af lastrummets længde. Kilde: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring, afsnit 1.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan kan lastsikringen afprøves",
        tekst: [
          `Kræfterne kan også afprøves i praksis. I en hældningstest vippes lastfladen med lasten på. EU's retningslinjer skriver, at en hældning på 26,6 grader svarer til en kraft på 0,5 g, og at 38,7 grader svarer til 0,8 g.`,
          `g er tyngdeaccelerationen. En kraft på 0,8 g er det samme som 0,8 gange lastens vægt, altså kraften fremad ved en hård opbremsning.`,
          `Glider eller vipper lasten ikke ved den hældning, holder sikringen til den kraft efter standardens enkle regnemåde. Retningslinjerne beskriver testen under metoder til at afprøve emballage og læssede enheder.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="To skrå lastflader med en kasse. Hældes fladen 26,6 grader, svarer det til en kraft på 0,5 g, og ved 38,7 grader svarer det til 0,8 g."><line class="tg-gulvlinje" x1="20" y1="160" x2="180" y2="160"/><line class="tg-doer" x1="20" y1="160" x2="180" y2="80"/><g transform="rotate(-26.6 100 120)"><rect class="tg-kuffert" x="80" y="92" width="40" height="28"/></g><path class="tg-skinne-tynd" fill="none" d="M60,160 A40,40 0 0 0 55.8,142.1"/><text x="66" y="154">26,6°</text><text class="tg-fremhaev" x="20" y="182">svarer til 0,5 g</text><line class="tg-gulvlinje" x1="220" y1="160" x2="380" y2="160"/><line class="tg-doer" x1="220" y1="160" x2="380" y2="32"/><g transform="rotate(-38.7 300 96)"><rect class="tg-kuffert" x="280" y="68" width="40" height="28"/></g><path class="tg-skinne-tynd" fill="none" d="M260,160 A40,40 0 0 0 251.2,135"/><text x="264" y="152">38,7°</text><text class="tg-fremhaev" x="220" y="182">svarer til 0,8 g</text></svg>`,
          tekst: `Skematisk. Hældningstesten efter EN 12195-1's enkle statiske regnemåde. Kilde: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring, afsnit 3.3</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Standarderne bag lastsikringen",
        tekst: [
          `Standarderne er tekniske normer. De bliver bindende, når en regel henviser til dem, som bekendtgørelsen om vejsidesyn gør for lastbiler, og som Færdselsstyrelsens synsvejledning gør med ISO 27956 for nye lukkede varebiler.`,
          `For den, der køber udstyr, er standarderne mest nyttige som mærkning. Står der EN 12195-2 på stroppen, er den testet og mærket efter de samme regler som andre stropper.`
        ],
        tabel: {
          kolonner: ["Standard", "Emne"],
          raekker: [
            ["EN 12195-1", "Beregning af surringskraft"],
            ["EN 12195-2", "Surringsbånd af kunstfibre"],
            ["EN 12195-3", "Surringskæder"],
            ["EN 12195-4", "Stålwirer til surring"],
            ["EN 12640", "Surringspunkter"],
            ["EN 12642", "Styrken af køretøjets konstruktion"],
            ["ISO 27956:2009", "Lastsikring i varebiler: adskillelse og fastgørelsesanordninger"]
          ],
          note: `Kilder: <a href="${BEK3}" rel="noopener">BEK nr. 1655, bilag 3, pkt. 5</a> og <a href="${VOSAK}" rel="noopener">Færdselsstyrelsen: Vejledning om syn af køretøjer, pkt. 9.01.024</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan vurderes lastsikring ved vejsidesyn af lastbiler",
        tekst: [
          `Ved syn ved vejsiden af køretøjer over 3,5 t deles mangler i tre grupper: mindre, væsentlig og farlig. Bilag 3 bruger blandt andet disse grænser.`,
          `Grænserne gælder ikke varebiler, men de viser, hvad myndighederne lægger vægt på, når de vurderer lastsikring.`
        ],
        punkter: [
          `Mere end 15 cm frem til forreste væg, ud til sidevæggen eller bag til bagvæggen, når væggen bruges til blokering, og der er fare for, at lasten går igennem.`,
          `Surring, net og tæpper, der kan modstå mindre end 2/3 af den nødvendige kraft.`,
          `Lastsikringsgrej uden mærkning, beskadiget grej og forkert brug, fx manglende kantbeskyttelse eller knuder.`
        ],
        efter: [
          `Bekendtgørelsen gælder kun køretøjer over 3,5 t og dermed ikke varebiler. Kilder: <a href="${BEK3}" rel="noopener">BEK nr. 1655, bilag 3</a> og <a href="${BEK1}" rel="noopener">§ 1</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Arbejdstilsynets fokus",
        tekst: [
          `Arbejdstilsynets side om sikkert arbejde med gods henvender sig til chauffører i både lastbiler og varebiler. De fleste ulykker sker under på- og aflæsning. Arbejdstilsynets tjekliste for chauffører spørger blandt andet, om det nødvendige surringsgrej og lastsikringsudstyr er med, og om det er i god stand og efterset.`,
          `Kilde: <a href="${AT}" rel="noopener">Arbejdstilsynet: Til dig, der er lastbilchauffør, chauffør eller bud</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Før bilen kører",
        tekst: [
          `EU's retningslinjer har en liste over det, den, der læsser bilen, skal sørge for. I en varebil er det ofte føreren selv, der både læsser og kører, så listen gælder den samme person.`,
          `Punkterne handler om lasten, bilen og udstyret. De passer også til en varebil med reoler, hvor en del af lasten står fast i indretningen, og resten står på gulvet.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Lasten", "Kun gods, der er sikkert og egnet til transport, kommer med."],
            ["Bilen", "Bilen er i god stand, og lastrummet er rent."],
            ["Udstyret", "Stropper, lastbarer og andet udstyr til lastsikring er med og i god stand."],
            ["Fordelingen", "Lasten er fordelt rigtigt på akslerne, og bilen er ikke overlæsset."],
            ["Måtter og fyld", "Skridsikre måtter, fyld og lastbarer er sat på plads under lastningen."]
          ]
        },
        efter: [
          `Kilde: <a href="${EU}" rel="noopener">EU's retningslinjer for lastsikring, afsnit 1.3</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så kan udstyret dimensioneres efter det, bilen faktisk kører med.",
    spoergsmaal: [
      "Hvad bilen kører med, og hvad det tungeste emne vejer.",
      "Om lasten er kasser, paller, maskiner eller lange emner.",
      "Hvilket gulv bilen har: original metalbund, krydsfiner, plast eller aluminium.",
      "Om bilen har reoler, og hvor der er fri gulvplads.",
      "Om lastbarer skal stå vandret eller lodret, og varerummets bredde og højde.",
      "Om skinnerne skal i gulvet, i siderne eller i loftet.",
      "Om der skal gummimåtter med, og hvor store de skal være."
    ],
    faq: [
      ["Hvilke regler gælder for lastsikring i varebil?", "Færdselslovens § 82, stk. 3: godset skal være anbragt, så det ikke kan frembyde fare eller falde af. EN 12195-1 og EU's retningslinjer regner med kræfter på 0,8 gange vægten fremad og 0,5 gange til siderne og bagud. Bekendtgørelsen om vejsidesyn (BEK nr. 1655) bruger de samme tal, men gælder kun køretøjer over 3,5 t."],
      ["Hvad betyder LC på en strop?", "Lashing capacity: den kraft i daN, stroppen må belastes med ved direkte surring. Ved surring over toppen er det STF, der tæller."],
      ["Hvor meget kan en lastbar holde?", "En spærrestang, der holder med friktion mod væggene, blokerer typisk 80–200 daN. Barer fastgjort i huller i bilen har typisk 200–2.000 daN. SmartVans lastbar til Airline-skinner bærer op til 350 daN."],
      ["Hvad koster en surringsskinne?", "595–1.820 kr. for 3 meter hos VanKompagniet og SmartVan (4. oktober 2026)."],
      ["Hvad er ISO 27956?", "Den internationale standard for lastsikring i varebiler. Den stiller krav til adskillelse og fastgørelsesanordninger, og Færdselsstyrelsen henviser til den i kravene til lukkede varebiler, der er registreret første gang 1. juli 2025 eller senere."],
      ["Hjælper en gummimåtte?", "Ja. EN 12195-1 regner med friktionstal 0,6 for en gummimåtte mod 0,2–0,45 for de fleste materialer mod krydsfiner."],
      ["Hvor stor skal en gummimåtte være?", "Der er ingen faste mål, men lastens vægt skal hvile helt på måtten. Ifølge EU's retningslinjer må måtter under 10 × 10 cm ikke bruges, fordi de kan rulle."],
      ["Hvor skal den tunge last stå?", "EU's retningslinjer skriver, at den fulde nyttelast som regel kun kan bruges, når lastens tyngdepunkt ligger omkring midten af lastrummets længde."]
    ],
    kilder: [
      { navn: "BEK nr. 1655 af 05/12/2025, bilag 3 (principper for sikring af last)", url: BEK3, dato: "2026-10-04" },
      { navn: "BEK nr. 1655 af 05/12/2025, § 1 (anvendelsesområde)", url: BEK1, dato: "2026-10-04" },
      { navn: "Færdselsloven (LBK nr. 118 af 12/01/2026), § 82", url: FL, dato: "2026-10-04" },
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, 1. april 2026, pkt. 9.01.024", url: VOSAK, dato: "2026-10-04" },
      { navn: "EU-Kommissionen: European Best Practice Guidelines on Cargo Securing for Road Transport (2014)", url: EU, dato: "2026-10-07" },
      { navn: "Arbejdstilsynet: Til dig, der er lastbilchauffør, chauffør eller bud", url: AT, dato: "2026-10-04" },
      { navn: "VanKompagniet: Lastsikring til varevogne", url: VK, dato: "2026-10-04" },
      { navn: "SmartVan: Lastsikring til varebiler", url: SV, dato: "2026-10-04" },
      { navn: "SmartVan: Lastbar 1250–1750 mm", url: SVBAR, dato: "2026-10-04" },
      { navn: "Boxic: Lashing strap guide (DIN EN 12195-2)", url: BOXIC, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["EU's retningslinjer, afsnit 4.2.2: gummimåtter regnes med friktionstallet 0,6 mod ethvert andet materiale ved ren kontaktflade, tør eller våd; med sne, is, fedt eller olie er det meget lavere; et højere tal kræver testcertifikat efter EN 12195-1:2010.", EU],
    ["EU's retningslinjer, afsnit 4.2.2: måtternes tykkelse varierer mellem 2 og 30 mm; der er ingen generelle regler for mindstemål, men lastens vægt skal overføres fuldt via måtterne; måtter mindre end 10 × 10 cm kan rulle og må ikke bruges.", EU],
    ["EU's retningslinjer, afsnit 4.2.2: under skarpe kanter kan nogle måtter blive perforeret af højt kontakttryk og vibrationer, så friktionen falder.", EU],
    ["Regneeksempel: en stålkasse på 100 kg på gummimåtte (friktionstal 0,6) holdes af friktion svarende til ca. 60 daN; mod ca. 80 daN fremad mangler ca. 20 daN.", EU],
    ["EU's retningslinjer: summen af virkningerne af låsning, blokering, direkte surring og friktionssurring (over toppen) må bruges til at forhindre, at lasten glider, vipper, ruller eller drejer.", EU],
    ["EU's retningslinjer, afsnit 5.4: ved blokering mod væggene bør tomme rum fyldes, fx med tomme paller stillet lodret eller vandret og spændt med lægter; materialer, der deformeres eller krymper varigt, som klude eller skum med lav styrke, bør ikke bruges.", EU],
    ["EU's retningslinjer, afsnit 1.5: den maksimale nyttelast kan generelt kun bruges, når tyngdepunktet ligger inden for snævre grænser omkring halvdelen af lastrummets længde; tilladte vægte må ikke overskrides, og mindste akseltryk skal sikre stabilitet, styring og bremser; lastfordelingsdiagrammer leveres af producenten af køretøjet eller opbygningen.", EU],
    ["EU's retningslinjer, afsnit 3.3: i en hældningstest svarer en hældning af lastfladen på 26,6° til 0,5 g og 38,7° til 0,8 g (simpel statisk metode efter EN 12195-1).", EU],
    ["EU's retningslinjer, afsnit 1.3: den, der læsser, skal bl.a. sikre, at kun sikkert og egnet gods læsses, at køretøjet er i god stand og lastrummet rent, at lastsikringsudstyret er til stede og i god stand, at lasten er korrekt fordelt på akslerne, at køretøjet ikke er overlæsset, og at skridsikre måtter, fyld og lastbarer er sat korrekt på.", EU]
  ]
};
