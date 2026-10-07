// Brugte varebiler fra Brdr. Jensen.
//
// Holdt adskilt fra generate-pages.js, fordi det er en anden slags data: dér
// sammenligner vi modeller, her udstiller vi enkelte biler med kilometertal,
// aargang og stelnummer. En bil bliver solgt og forsvinder; en model goer ikke.
//
// To ting goer denne del anderledes end resten af siden:
//
//   1. Brdr. Jensen er en samarbejdspartner, ikke en kilde vi har fundet selv.
//      Det skal staa paa hver eneste side, ikke kun i bunden.
//   2. Billederne hentes fra CarAds' eget CDN, ikke fra vores egen server.
//      Saelges bilen, forsvinder billedet - og det er bedre end at vi viser et
//      billede af en bil, der ikke staar der laengere.
//
// Koer: node generate-brugte.js

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://gulplade.dk";
const DATA_JSON = path.join(__dirname, "brugte.json");
const UD_DIR = path.join(__dirname, "brugte-varebiler");
const BILLED_CDN = "https://nextgen.carads.io/media/";

// Hvert billede paa disse sider kommer fra CarAds. DNS-opslag, TCP og TLS
// til det domaene tager tid, som browseren ellers foerst begynder paa, naar
// den noterer det foerste <img>. Her starter den med det samme.
var FORUD = [
  '<link rel="preconnect" href="https://nextgen.carads.io" crossorigin>',
  '<link rel="dns-prefetch" href="https://nextgen.carads.io">'
];

// ── Fælles med generate-pages.js ─────────────────────────────────────────────

// Stylesheetet ligger bag fire timers cache. Uden en version i URL'en vil en
// tilbagevendende besoegende faa ny HTML med gammel CSS efter en udrulning.
// Versionen er de foerste otte tegn af filens egen hash.
function cssVersion() {
  try {
    var css = fs.readFileSync(path.join(__dirname, "assets", "style.css"));
    return require("crypto").createHash("sha1").update(css).digest("hex").slice(0, 8);
  } catch (e) {
    return "";
  }
}
var CSS_V = cssVersion();
// Samtykkescriptet versioneres som stylesheetet, saa en rettelse naar ud med det samme.
var SAMTYKKE_V = (function () {
  try { return require("crypto").createHash("sha1").update(fs.readFileSync(path.join(__dirname, "assets", "samtykke.js"))).digest("hex").slice(0, 8); }
  catch (e) { return "1"; }
})();
// ── Titler og beskrivelser til soegemaskiner ─────────────────────────────────
//
// Google klipper titlen omkring 60 tegn og beskrivelsen omkring 160. Bliver de
// klippet, forsvinder netop det, der skulle faa nogen til at klikke. Derfor:
// byg det vigtigste foerst, og haeng sidenavnet paa bagefter - men kun hvis
// der er plads. Domaenet staar alligevel lige under titlen i resultatet.

var TITEL_MAKS = 60;
var DESC_MAKS = 158;
var SIDENAVN = " | Gulplade.dk";

function sidetitel(kerne) {
  kerne = String(kerne).trim();
  if (kerne.length + SIDENAVN.length <= TITEL_MAKS) return kerne + SIDENAVN;
  if (kerne.length <= TITEL_MAKS) return kerne;
  // For lang selv uden sidenavn: klip ved naermeste ordskel, aldrig midt i et ord.
  var k = kerne.slice(0, TITEL_MAKS - 1);
  var i = k.lastIndexOf(" ");
  if (i > TITEL_MAKS * 0.6) k = k.slice(0, i);
  return k.replace(/[\s\u2014\-,\u00b7]+$/, "") + "\u2026";
}

// Beskrivelsen klippes ved saetningsskel, saa den ender et sted der giver mening.
function beskrivelse(tekst) {
  tekst = String(tekst).replace(/\s+/g, " ").trim();
  if (tekst.length <= DESC_MAKS) return tekst;
  var k = tekst.slice(0, DESC_MAKS);
  var p = Math.max(k.lastIndexOf(". "), k.lastIndexOf("? "), k.lastIndexOf("! "));
  if (p > DESC_MAKS * 0.55) return k.slice(0, p + 1);
  var i = k.lastIndexOf(" ");
  return (i > DESC_MAKS * 0.6 ? k.slice(0, i) : k).replace(/[\s,;\u2014\-]+$/, "") + "\u2026";
}
// Delebilledet. Har siden et bilbillede, bruges det; ellers standardkortet.
// Facebook, LinkedIn og Slack kraever en absolut URL - et relativt sti
// virker i browseren, men ikke naar de henter siden.
var DELEBILLEDE = BASE_URL + "/assets/img/del.png";
function delebillede(sti) {
  if (!sti) return DELEBILLEDE;
  if (/^https?:/.test(sti)) return sti;
  return BASE_URL + (sti.charAt(0) === "/" ? "" : "/") + sti;
}
// Broedkrummen som schema. Uden den viser Google den raa URL under titlen;
// med den staar der „gulplade.dk › Varebiler › Ford Transit Custom“, og en
// laesbar sti klikkes oftere. Trinnene skal matche den synlige broedkrumme.
function krummeSchema(trin) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trin.map(function (t, i) {
      return {
        "@type": "ListItem",
        position: i + 1,
        name: t[0],
        item: t[1] ? BASE_URL + t[1] : undefined
      };
    })
  };
}

// Flere schema-blokke paa en side samles i en @graph, saa der kun staar
// ét script-tag i hovedet.
function samlSchema() {
  var d = [].slice.call(arguments).filter(Boolean);
  if (!d.length) return null;
  var g = d.map(function (x) {
    x = typeof x === "string" ? JSON.parse(x) : x;
    delete x["@context"];
    return x;
  });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": g });
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function mkdir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function talDK(v) { return v == null ? null : Number(v).toLocaleString("da-DK"); }
function kr(n) { return n == null ? "—" : talDK(n) + " kr."; }
function kommaTal(v) { return v == null ? null : String(v).replace(".", ","); }

function datoDa(d) {
  if (!d) return "";
  var m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return String(d);
  var md = ["jan.", "feb.", "mar.", "apr.", "maj", "jun.",
            "jul.", "aug.", "sep.", "okt.", "nov.", "dec."];
  return Number(m[3]) + ". " + md[Number(m[2]) - 1] + " " + m[1];
}
// Fuld dato til loebende tekst: "2026-09-25" -> "25. september 2026".
// Tabeller og korte maerkater beholder datoDa.
function datoLang(d) {
  if (!d) return "";
  var m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return String(d);
  var md = ["januar", "februar", "marts", "april", "maj", "juni",
            "juli", "august", "september", "oktober", "november", "december"];
  return Number(m[3]) + ". " + md[Number(m[2]) - 1] + " " + m[1];
}
// "2022-04" -> "04/2022". Foerste registrering staar i maaned og aar, aldrig dag.
function regDa(v) {
  if (!v) return null;
  var m = String(v).match(/^(\d{4})-(\d{2})/);
  return m ? m[2] + "/" + m[1] : String(v);
}

function header() {
  return [
    '<a class="spring" href="#indhold">Spring til indholdet</a>',
    '<header class="site-header">',
    '  <a href="/" class="logo">' +
    '    <svg class="logo__plade" viewBox="0 0 38 20" width="30" height="16" aria-hidden="true" focusable="false"><rect x="1.15" y="1.15" width="35.7" height="17.7" rx="3.6" fill="#f2b705" stroke="#14161a" stroke-width="2.3"/><rect x="7.6" y="7.7" width="8" height="4.6" rx="1" fill="#14161a"/><rect x="18.6" y="7.7" width="11.8" height="4.6" rx="1" fill="#14161a"/></svg>' +
    '    <span class="logo__ord">Gulplade<span class="logo__tld">.dk</span></span></a>',
    '  <nav>',
    '    <a href="/">Leasing</a>',
    process.env.GULPLADE_KOEB_NY !== "0" ? '    <a href="/koeb-ny-varebil/">Nye</a>' : '',  // købssiden, i produktion fra 06-10-2026
    '    <a href="/brugte-varebiler/">Brugte</a>',
    '    <a href="/til-varebilen/">Til varebilen</a>',
    '    <a href="/haandbogen/">Håndbogen</a>',
    '    <a href="/nyheder/">Nyheder</a>',
    '    <a href="/groen-omstilling/">Grøn omstilling</a>',
    '    <a href="/personbiler/" class="nav-anden">Personbiler <span aria-hidden="true">↗</span></a>',
    '    <a href="/faa-tilbud/" class="nav-cta">Få tilbud</a>',
    '  </nav>',
    '</header>'
  ].join("\n");
}

function footer() {
  return [
    '<footer class="site-footer"><div class="site-footer__indhold">',
    '<nav class="bundmenu" aria-label="Sidens afsnit"><ul><li><a href="/">Varebilsleasing</a></li><li><a href="/haandbogen/leasing-af-varebil-til-erhverv/">Sådan leaser du en varebil</a></li><li><a href="/bedste-tilbud/">Bedste tilbud</a></li><li><a href="/haandbogen/">Håndbogen</a></li><li><a href="/haandbogen/gule-plader/">Gule plader</a></li><li><a href="/nyheder/">Nyheder</a></li><li><a href="/til-varebilen/">Til varebilen</a></li><li><a href="/groen-omstilling/">Grøn omstilling</a></li><li><a href="/brugte-varebiler/">Brugte varebiler</a></li><li><a href="/udbydere/">Udbydere</a></li><li><a href="/faa-tilbud/">Få tilbud</a></li><li><a href="/tilbudstjek/">Tjek dit tilbud</a></li><li><a href="/personbiler/">Personbiler</a></li><li><a href="/kontakt/">Kontakt</a></li><li><a href="/privatliv/">Privatliv</a></li><li><a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a></li><li><a href="https://www.linkedin.com/company/gulplade/" rel="me noopener" target="_blank">LinkedIn</a></li></ul></nav>',
    '<p><strong>Gulplade.dk</strong> — uafhængig sammenligning af erhvervsleasing.</p>',
    '<p>Vi har hentet priserne fra forhandlernes og leasingselskabernes egne prislister og annoncer. Priserne er vejledende og vist uden moms til erhvervskunder. De gælder på de vilkår, der står ved hvert tilbud. Dér står også kilden, og hvornår vi hentede prisen. Vi tager forbehold for ændringer, udsolgte biler og fejl.</p>',
    '<p><strong>Hverken forhandlere eller leasingselskaber kan købe en placering i sammenligningen.</strong> Vi henter selv priserne ind, og rækkefølgen kan ikke købes. To steder bliver vi betalt af branchen, og det skriver vi, hvor det gælder. <a href="/faa-tilbud/">Når vi henter tilbud hjem til dig</a>, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til. Vi får det samme beløb, uanset om du siger ja eller nej. Vi formidler <a href="/brugte-varebiler/">de brugte varebiler</a> for en forhandler, vi samarbejder med. Også her kan vi blive betalt for en henvendelse. <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '<p>&copy; ' + new Date().getFullYear() + ' Gulplade.dk</p>',
    '</div></footer>'
  ].join("\n");
}

// `forud` er en liste af <link rel=preload/preconnect>, der skal staa i
// hovedet. Browseren kan saa begynde paa det store billede eller paa
// forbindelsen til billedserveren, foer den har laest resten af siden.
function hoved(title, desc, canonical, schema, billede, forud) {
  return [
    '<!DOCTYPE html><html lang="da"><head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>' + esc(title) + '</title>',
    '<meta name="description" content="' + esc(desc) + '">',
    '<link rel="canonical" href="' + canonical + '">',
    '<meta property="og:title" content="' + esc(title) + '">',
    '<meta property="og:description" content="' + esc(desc) + '">',
    '<meta property="og:url" content="' + canonical + '">',
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="Gulplade.dk">',
    '<meta property="og:locale" content="da_DK">',
    '<meta property="og:image" content="' + delebillede(billede) + '">',
    '<meta property="og:image:alt" content="' + esc(title) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + esc(title) + '">',
    '<meta name="twitter:description" content="' + esc(desc) + '">',
    '<meta name="twitter:image" content="' + delebillede(billede) + '">',
    (forud || []).join("\n"),
    schema ? '<script type="application/ld+json">' + schema + '</script>' : '',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    '<meta name="theme-color" content="#f2b705">',
    '<link rel="stylesheet" href="/assets/' + (CSS_V ? 'style.' + CSS_V + '.css' : 'style.css') + '">',
    '<script src="/assets/samtykke.' + SAMTYKKE_V + '.js" defer></script>',
    '</head><body>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── Oplysningen om samarbejdet ───────────────────────────────────────────────
// Staar paa hver eneste side i afsnittet. Markedsfoeringslovens krav om at
// kommerciel hensigt skal fremgaa klart er ikke opfyldt af en linje i bunden.

// Én linje, ikke en kasse. Læserne er professionelle indkøbere: de skal oplyses,
// ikke belæres. Kravet er, at den kommercielle hensigt fremgår klart — og det gør
// en kort, tydelig linje bedre end tre afsnit, ingen læser til ende.
function samarbejde(f) {
  // Forhandleren navngives ikke (ejerens beslutning 30-09-2026), men det skal
  // stadig være tydeligt, at vi formidler og kan få betaling for det.
  return '<p class="samarbejde">' +
    '<span class="samarbejde__mrk">Formidling</span> ' +
    'En forhandler, vi samarbejder med, sælger bilerne. Du køber bilen hos forhandleren. ' +
    'Vi formidler kontakten og kan få betaling for det. Priserne og tallene kommer fra forhandleren. ' +
    '<a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>' +
    '</p>';
}

// Forhandlerens egen praesentation. Staar paa oversigten og maerkesiderne, hvor
// der er plads til den - ikke paa hver enkelt bilside.
function omForhandler(f) {
  return '';  // forhandleren vises ikke længere (30-09-2026)
  if (!f.om || !f.om.length) return '';
  return [
    '<section class="sektion forhandler">',
    '  <h2>Hvem er ' + esc(f.kort || f.navn) + '?</h2>',
    f.om.map(function (t) { return '  <p>' + esc(t) + '</p>'; }).join("\n"),
    '  <dl class="forhandler__fakta">',
    '    <div><dt>Adresse</dt><dd>' + esc(f.adresse) + '</dd></div>',
    '    <div><dt>Telefon</dt><dd><a href="tel:' + esc((f.telefon || "").replace(/\s/g, "")) +
    '">' + esc(f.telefon) + '</a></dd></div>',
    f.aabningstider ? '    <div><dt>Åbningstider</dt><dd>' + esc(f.aabningstider) + '</dd></div>' : '',
    '    <div><dt>CVR</dt><dd>' + esc(f.cvr) + '</dd></div>',
    '  </dl>',
    '  <p class="kilde">Oplysningerne er forhandlerens egne, fra ' +
    '<a href="' + esc(f.om_kilde || f.url) + '" rel="nofollow noopener" target="_blank">deres egen side</a>.</p>',
    '</section>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── Kategorier ───────────────────────────────────────────────────────────────

var KARROSSERI_NAVN = {
  kassevogn: "Kassevogn",
  ladvogn: "Ladvogn",
  pickup: "Pickup",
  "personbil-van": "Bil på gule plader"
};

var CHIPS = [
  { id: "alle", navn: "Alle biler", passer: function () { return true; } },
  { id: "kassevogn", navn: "Kassevogn", passer: function (b) { return b.karrosseri === "kassevogn"; } },
  { id: "ladvogn", navn: "Ladvogn", passer: function (b) { return b.karrosseri === "ladvogn"; } },
  { id: "pickup", navn: "Pickup", passer: function (b) { return b.karrosseri === "pickup"; } },
  { id: "vaerksted", navn: "Med indretning", passer: harIndretning },
  { id: "lift", navn: "Med lift", passer: harLift },
  { id: "kran", navn: "Med kran", passer: harKran },
  { id: "koel", navn: "Kølebil", passer: function (b) { return har(b, "Kølebil"); } }
];

function har(b, navn) { return (b.opbygning || []).indexOf(navn) >= 0; }

// Indretning i varerummet. Tre kilder, fordi hver for sig taeller forkert:
// CarAds' kategori "Vaerkstedsbil" (43), udstyrsfeltet "Reolsystem /
// indretning" (40) og beskrivelser, der naevner reoler, hylder, skuffer,
// Sortimo eller BOTT. Tilsammen 72. Tekstsporet er gennemgaaet bil for bil
// uden falske traef.
function harIndretning(b) {
  if (har(b, "V\u00e6rkstedsbil")) return true;
  if ((b.udstyr || []).indexOf("Reolsystem / indretning") >= 0) return true;
  return /sortimo|\bbott\b|v\u00e6rksteds(opbygning|indretning)|\breol|\bhylde|\bskuffe/
    .test((b.beskrivelse || "").toLowerCase());
}

// Lift paa kassen. Kun i fritekst. To falske traef er set og holdes ude:
// "lift kan eftermonteres" (bilen har ingen) og skabelonfragmentet
// "aircondition BAR lift", som er kopieret ind paa to biler.
function harLift(b) {
  var t = (b.beskrivelse || "").toLowerCase();
  if (/kan eftermonteres/.test(t)) return false;
  t = t.replace(/aircondition bar lift/g, "");
  return /\blift\b|bagsm\u00e6klift|l\u00e6ssebagsm\u00e6k/.test(t);
}

function harKran(b) { return /\bkran\b/.test((b.beskrivelse || "").toLowerCase()); }

// Firehjulstraek staar i variantnavnet under fem navne. Alle 17 traef er
// gennemgaaet 27-09-2026: ingen falske (Audi SQ5 er en personbil paa gule
// plader, men den har firehjulstraek).
function har4x4(b) {
  return /4x4|\b4wd\b|\bawd\b|4matic|quattro|4motion|firehjulstr\u00e6k/i
    .test(b.variant + " " + (b.beskrivelse || ""));
}
// Dobbeltkabine hedder "DobKab" i variantnavnet og "mandskabsbil",
// "mandskabsvogn" eller "dobbelt kabine" i teksten. 29 traef, alle gennemgaaet
// 27-09-2026 - heraf fem Ford Ranger-pickupper med DobKab.
function harDobbeltkabine(b) {
  return /dobbelt ?kab|\bdobkab\b|mandskabs(bil|vogn)/i
    .test(b.variant + " " + (b.beskrivelse || ""));
}
// "Koele" alene fangede en Sprinter med koeleboks i foererhuset. Kun kolebil
// og koele/frys er en koelebil. 10 traef, alle gennemgaaet.
function harKoel(b) {
  return /k\u00f8lebil|k\u00f8le\/frys/i.test(b.variant + " " + (b.beskrivelse || ""));
}
var MODEL_KLASSE = {
  lille: ["Berlingo", "Dokker", "Transit Connect", "Transit Courier", "Citan", "Partner", "Express", "Kangoo", "Caddy", "Combo"],
  mellem: ["Jumpy", "Scudo", "Expert", "Transit Custom", "Vito", "Trafic", "ProAce", "Transporter", "ID.Buzz Cargo", "Vivaro", "Primastar"],
  stor: ["Jumper", "Ducato", "Boxer", "Transit", "Daily", "TGE", "Sprinter", "Interstar", "Movano", "Master", "Crafter", "e-Deliver 9"]
};
function modelKlasse(b) {
  for (var k in MODEL_KLASSE) if (MODEL_KLASSE[k].indexOf(b.model) >= 0) return k;
  return null;
}

function harTraek(b) { return (b.udstyr || []).indexOf("Anh\u00e6ngertr\u00e6k") >= 0; }

// En kontantpris, der modsiger bilens egne tal, er ikke en pris. Den vises
// ikke, den tæller ikke med i statistik, og den kommer ikke ud som schema.
// Begrundelsen står i data og skrives på bilsiden.
function prisDuer(b) { return !b._pris_tvivl; }
function medPris(biler) { return biler.filter(prisDuer); }

// ── Tilbudsknappen ───────────────────────────────────────────────────────────
//
// Formular-id'et staar i brugte.json, ikke her, saa det kan skiftes uden at
// roere koden. Er det tomt, peger knappen paa bilens side hos forhandleren i
// stedet - der skal aldrig staa en knap, der ikke virker.
//
// Tally forudfylder felter fra query-strengen, saa den, der skriver til os,
// ikke skal beskrive bilen, og saa vi kan se hvilke biler der traekker.

function tilbudsLink(b, data) {
  var id = ((data.tilbudsformular || {}).tally_id || "").trim();
  if (!id) return { url: b.kilde_url, eksternt: true };
  var q = [
    "bil=" + encodeURIComponent(navn(b) + " " + b.variant),
    "pris=" + encodeURIComponent(talDK(b.pris_ekskl_moms_kr) + " kr. ekskl. moms"),
    "lager=" + encodeURIComponent(b.id),
    "kilde=" + encodeURIComponent(b.kilde_url || "")
  ].join("&");
  return { url: "https://tally.so/r/" + id + "?" + q, eksternt: false };
}

// Findes formularen, er "Få tilbud" den primære handling og forhandlerens egen
// side den sekundære. Findes den ikke, er der kun én knap - to knapper til
// samme URL er ikke et valg, det er støj.
// En mailto med bilen skrevet ind. Saa skal den, der skriver, ikke selv
// finde ud af hvad vi har brug for at vide, og vi skal ikke spoerge tilbage.
function kontaktMailto(b) {
  var linjer = [
    navn(b) + " " + b.variant,
    b.aargang ? "Årgang: " + b.aargang : "",
    b.km != null ? "Kilometer: " + talDK(b.km) : "",
    prisDuer(b) ? "Kontantpris: " + kr(b.pris_ekskl_moms_kr) + " ekskl. moms" : "",
    "Lagernummer: " + b.id,
    BASE_URL + "/brugte-varebiler/" + b.slug + "/",
    "", "Hvad vil du gerne vide om bilen?", ""
  ].filter(function (x) { return x !== ""; }).join("\n");
  return "mailto:kontakt@gulplade.dk?subject=" +
    encodeURIComponent("Spørgsmål om " + navn(b) + " (" + b.id + ")") +
    "&body=" + encodeURIComponent(linjer);
}

function leadKnap(b, tekst, klasse) {
  var bil = navn(b) + " " + b.variant + (b.aargang ? ", " + b.aargang : "") + (b.km != null ? ", " + talDK(b.km) + " km" : "");
  return '<a class="knap ' + (klasse || 'knap--primaer') + '" data-lead="brugt" data-bil="' + esc(bil) + '"' +
    (prisDuer(b) ? ' data-pris="' + esc(kr(b.pris_ekskl_moms_kr) + ' ekskl. moms') + '"' : '') +
    ' data-ref="' + esc(b.id) + '" href="' + esc(kontaktMailto(b)) + '">' + esc(tekst || 'Hør nærmere om denne bil') + '</a>';
}

// Forhandlerens fritekst må ikke afsløre, hvem forhandleren er: linjer med
// navn, adresse, telefon, mail eller web tages ud.
function renBeskrivelse(t) {
  return String(t || "").split("\n").filter(function (l) {
    return !/jensen|horsens|kometvej|dj leasing|jensenas|@|www\.|https?:|\+45|\b\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\b|ring (til|på)|kontakt os|besøg os|vores (forretning|værksted|lakereri)/i.test(l);
  }).join("\n");
}

// Boksen lige under toppen: hvad der sker, når man trykker, så knappen ikke
// føles som et spring ud i det uvisse.
function leadBoks(b) {
  return [
    '<section class="leadboks">',
    '  <div class="leadboks__tekst">',
    '    <h2>Interesseret i bilen?</h2>',
    '    <ul class="leadboks__liste">',
    '      <li>Vi tjekker, at bilen stadig er til salg</li>',
    '      <li>Vi aftaler fremvisning, prøvetur eller et leasingforslag</li>',
    '      <li>Du kan få en byttebil med i handlen</li>',
    '    </ul>',
    '  </div>',
    '  <div class="leadboks__handling">' + leadKnap(b) +
    '<span class="leadboks__lille">Gratis og uforpligtende · et menneske svarer</span></div>',
    '</section>'
  ].join("\n");
}

// Efter hver liste: den, der ikke fandt den rigtige, er stadig en køber.
function soegBoks(hvad) {
  return [
    '<section class="leadboks leadboks--soeg">',
    '  <div class="leadboks__tekst">',
    '    <h2>Kan du ikke finde den rigtige?</h2>',
    '    <p>Fortæl os, hvad bilen skal kunne, og hvad den må koste. Vi leder på lageret og hos forhandlerne,' +
    ' og vi siger det, hvis en ny bil på leasing er billigere.</p>',
    '  </div>',
    '  <div class="leadboks__handling"><a class="knap knap--primaer" data-lead="soeg" data-bil="' + esc(hvad || "") + '"' +
    ' href="/faa-tilbud/">Find bilen til mig</a><span class="leadboks__lille">Gratis og uforpligtende · et menneske svarer</span></div>',
    '</section>'
  ].join("\n");
}

// Én faktuel opsummering bygget af bilens egne felter - unik tekst pr. bil
// uden at gætte. Felter, der mangler, springes over.
function bilOpsummering(b) {
  var type = (KARROSSERI_NAVN[b.karrosseri] || b.karrosseri || "varebil").toLowerCase();
  var drev = { diesel: "dieselmotor", benzin: "benzinmotor", el: "elmotor", hybrid: "hybridmotor", plugin: "plug-in hybridmotor" }[b.drivmiddel] || "";
  var s1 = "Det er en brugt " + navn(b) + " " + type + (b.aargang ? " fra " + b.aargang : "") +
    (b.hk || drev ? " med " + [b.hk ? b.hk + " hk" : "", drev].filter(Boolean).join(" ") : "") +
    (b.gear ? " og " + (b.gear === "Automatisk" ? "automatgear" : b.gear === "Manuel" ? "manuelt gear" : b.gear.toLowerCase()) : "") + ".";
  var s2 = [];
  if (b.km != null) s2.push("Den har kørt " + talDK(b.km) + " km");
  if (prisDuer(b)) s2.push((s2.length ? "koster " : "Den koster ") + kr(b.pris_ekskl_moms_kr));
  // kr() ender på "kr.", så der sættes ikke et punktum mere (04-10-2026).
  var t = s2.length ? " " + s2.join(" og ") + (/\.$/.test(s2[s2.length - 1]) ? "" : ".") : "";
  var s3 = [];
  if (b.anhaengervaegt_kg) s3.push("må trække " + talDK(b.anhaengervaegt_kg) + " kg med bremset anhænger");
  if (b.km_pr_l) s3.push("kører " + String(b.km_pr_l).replace(".", ",") + " km/l");
  var u = s3.length ? " Bilen " + (s3.length > 1 ? s3.slice(0, -1).join(", ") + " og " + s3[s3.length - 1] : s3[0]) + "." : "";
  // Leasingprisen er en anden slags oplysning og faar sin egen saetning.
  var l = (b.leasing && b.leasing.maanedspris)
    ? " " + (u ? "Den" : "Bilen") + " kan leases fra " + talDK(b.leasing.maanedspris) + " kr. om måneden." : "";
  return s1 + t + u + l;
}

function handlingsKnapper(b, data, medTilbage) {
  var k = [leadKnap(b), leadKnap(b, "Ring mig op", "knap--sekundaer").replace('data-lead="brugt"', 'data-lead="ring"')];
  if (medTilbage) k.push('<a class="knap knap--sekundaer" href="/brugte-varebiler/">Tilbage til listen</a>');
  return k.join(" ");
  var l = tilbudsLink(b, data);
  // Den primaere handling er at hoere naermere hos os. Foer pegede den
  // eneste knap vaek til forhandleren, og der var ingen vej tilbage til os.
  if (l.eksternt) {
    k.push('<!--email_off--><a class="knap knap--primaer" href="' + kontaktMailto(b) +
      '">Hør nærmere om denne bil</a><!--email_on-->');
  } else {
    k.push('<a class="knap knap--primaer" href="' + esc(l.url) + '">Hør nærmere om denne bil</a>');
  }
  k.push('<a class="knap knap--sekundaer" href="' + esc(b.kilde_url) +
    '" rel="nofollow noopener" target="_blank">Se bilen hos Brdr. Jensen</a>');
  if (medTilbage) k.push('<a class="knap knap--sekundaer" href="/brugte-varebiler/">Tilbage til listen</a>');
  return k.join(" ");
}

// Engros / som den staar. 57 af 329 biler (sept. 2026) saelges uden
// klargoering, de fleste kun til CVR-nummer. Det staar kun i fritekst eller
// i udstyrsfeltet "Afhentning", og det er noget, en koeber skal vide, foer
// vedkommende koerer til Horsens. Alle 57 traef er gennemgaaet: ingen falske.
function harEngros(b) {
  if ((b.udstyr || []).indexOf("Afhentning") >= 0) return true;
  return /afhentning|\bengros?\b|sælges som (den )?står|til eksport/i
    .test(b.beskrivelse || "");
}

function engrosNote(b) {
  if (!harEngros(b)) return '';
  // Kort mærke i toppen; forklaringen står i FAQ'en og i beskrivelsen.
  return '<p class="bil-hero__engros" title="Sælges som den står, typisk uden klargøring og kun til CVR-nummer">' +
    '<strong>Sælges engros</strong> · som den står, typisk kun til CVR</p>';
}

// Linjen under knapperne giver kun mening, hvis forespørgslen går gennem os.
function tilbudsNote(b, data) {
  if (tilbudsLink(b, data).eksternt) return '';
  return '<p class="bil-hero__note">Vi sender din forespørgsel videre til forhandleren og'
    + ' følger op på, at du får svar. Det koster dig ikke noget.</p>';
}

// Titlen paa en bilside skal vaere unik. Brdr. Jensen har fx fire Transit
// Custom fra 2022 til samme pris; med samme titel vil Google vaelge én af dem
// og ignorere de tre andre. Kilometertallet skiller dem ad - og det er
// samtidig det, en koeber ser efter foerst.
//
// Kollidere de stadig, tilfoejes gearkasse, og til sidst lagernummeret. Det
// sidste er grimt, men en grim unik titel slaar en paen dublet.
// 02-10-2026: folk søger "mercedes sprinter", ikke "mercedes-benz sprinter" - og det
// korte navn giver plads til "Brugt" foran i flere titler.
function titelNavn(t) { return String(t).replace(/^Mercedes-Benz\b/, "Mercedes"); }

// En pris, vi selv har markeret som tvivlsom (_pris_tvivl), hører ikke hjemme i
// titlen. Siden viser den heller ikke som pris (06-10-2026: to nye Sprinter til 15.000 kr.).
function prisDel(b) { return prisDuer(b) ? " — " + talDK(b.pris_ekskl_moms_kr) + " kr." : ""; }

function byggTitler(biler) {
  var brugt = {};
  var ud = {};
  function grund(b) {
    return titelNavn(navn(b))
      + (b.aargang ? " " + b.aargang : "")
      + (b.km == null ? "" : ", " + talDK(b.km) + " km")
      + prisDel(b);
  }
  biler.forEach(function (b) {
    var t = grund(b);
    if (brugt[t]) {
      var medGear = titelNavn(navn(b)) + (b.aargang ? " " + b.aargang : "") +
        (b.gear ? ", " + (/aut/i.test(b.gear) ? "aut." : "man.") : "") +
        (b.km == null ? "" : ", " + talDK(b.km) + " km") +
        prisDel(b);
      t = brugt[medGear] ? t + " (nr. " + b.id + ")" : medGear;
    }
    brugt[t] = true;
    // "Brugt" foran, fordi det er ordet, folk soeger paa. Kun hvis titlen
    // stadig kan staa helt - prisen til sidst maa ikke klippes af.
    ud[b.id] = ("Brugt " + t).length <= TITEL_MAKS ? "Brugt " + t : t;
  });
  return ud;
}
var TITLER = {};

// Beskrivelsen paa en bilside. To ens biler (samme model, aargang, km og
// pris) ville faa samme tekst; de faar lagernummeret med, ligesom i titlen.
// 02-10-2026: gear, træk og leasingpris i stedet for "Hør nærmere hos Gulplade.dk".
function bilDesc(b, ekstra) {
  var dele = [];
  if (b.gear === "Automatisk") dele.push("automatgear");
  if (b.anhaengervaegt_kg) dele.push(talDK(b.anhaengervaegt_kg) + " kg træk");
  var fakta = dele.length ? " " + dele.join(" og ").charAt(0).toUpperCase() + dele.join(" og ").slice(1) + "." : "";
  return navn(b) + " " + b.variant + ekstra + (b.aargang ? ", årgang " + b.aargang : "") +
    (b.km == null ? "" : ", " + talDK(b.km) + " km") +
    (b.farve ? ", " + b.farve.toLowerCase() : "") +
    ". Kontantpris " + kr(b.pris_ekskl_moms_kr) + " ekskl. moms" +
    (b.leasing && b.leasing.maanedspris ? ", leasing fra " + talDK(b.leasing.maanedspris) + " kr./md." : ".") +
    fakta + " Svar inden for 24 timer.";
}
var DESC_ANTAL = {};
// ── Bilkortet ────────────────────────────────────────────────────────────────

// CarAds leverer PNG uden komprimering: 800 px vejer 600 kB, 400 px vejer 150.
// Kortene er 258 px brede, saa 400 px beskaaret til 4:3 er rigeligt og
// sparer tre fjerdedele af vaegten paa en side med 325 kort.
function billede(b, format) {
  if (!b.billeder || !b.billeder.length) return null;
  return BILLED_CDN + b.billeder[0] + "/" + format;
}

function navn(b) { return (b.maerke + " " + b.model).trim(); }

function kortHTML(b) {
  var img = billede(b, "400x300/cover");
  var url = "/brugte-varebiler/" + b.slug + "/";
  return [
    '<article class="brugtkort"',
    '  data-id="' + esc(b.id) + '"',
    '  data-maerke="' + esc(b.maerke) + '"',
    '  data-karrosseri="' + esc(b.karrosseri || "") + '"',
    '  data-opbygning="' + esc((b.opbygning || []).join("|")) + '"',
    '  data-indretning="' + (harIndretning(b) ? "1" : "") + '"',
    '  data-lift="' + (harLift(b) ? "1" : "") + '"',
    '  data-kran="' + (harKran(b) ? "1" : "") + '"',
    '  data-drivmiddel="' + esc(b.drivmiddel || "") + '"',
    '  data-gear="' + esc(b.gear || "") + '"',
    '  data-aargang="' + esc(b.aargang == null ? "" : b.aargang) + '"',
    '  data-km="' + esc(b.km == null ? "" : b.km) + '"',
    '  data-pris="' + esc(prisDuer(b) ? b.pris_ekskl_moms_kr : "") + '"',
    '  data-leasing="' + esc(b.leasing ? b.leasing.maanedspris : "") + '"',
    '  data-sog="' + esc((navn(b) + " " + b.variant).toLowerCase()) + '">',
    '  <a class="brugtkort__link" href="' + url + '">',
    '    <div class="brugtkort__billede">',
    harEngros(b) ? '      <span class="brugtkort__skilt">Sælges engros</span>' : null,
    img
      ? '      <img src="' + esc(img) + '" alt="' + esc("Brugt " + navn(b) + " " + b.variant) +
        '" loading="lazy" decoding="async" width="400" height="300">'
      : '      <span class="brugtkort__intetbillede">' + esc(navn(b)) + '</span>',
    '    </div>',
    '    <div class="brugtkort__krop">',
    '      <h3 class="brugtkort__navn">' + esc(navn(b)) + '</h3>',
    '      <p class="brugtkort__variant">' + esc(b.variant) + '</p>',
    '      <dl class="brugtkort__noegletal">',
    '        <div><dt>Årgang</dt><dd>' + esc(b.aargang || "—") + '</dd></div>',
    '        <div><dt>Kilometer</dt><dd>' + (b.km == null ? "—" : talDK(b.km)) + '</dd></div>',
    '        <div><dt>Gear</dt><dd>' + esc(b.gear || "—") + '</dd></div>',
    '      </dl>',
    '      <p class="brugtkort__pris">' + (prisDuer(b)
      ? '<span>Kontant ekskl. moms</span><strong>' + kr(b.pris_ekskl_moms_kr) + '</strong>'
      : '<span>Kontantpris</span><strong class="brugtkort__ingen">under afklaring</strong>')
      + '</p>',
    '      <p class="brugtkort__leasing">' + (b.leasing
      ? '<span>Leasing</span><strong>' + talDK(b.leasing.maanedspris) + ' kr./md.</strong>'
      : '<span>Leasing</span><strong class="brugtkort__ingen">ikke oplyst</strong>') + '</p>',
    '    </div>',
    '  </a>',
    '  <p class="brugtkort__lead">' + leadKnap(b, 'Hør nærmere', 'knap--sekundaer') + '</p>',
    '</article>'
  ].filter(function (l) { return l != null; }).join("\n");
}

// ── Maerke- og modelsider ────────────────────────────────────────────────────
//
// Oversigten viser alle 325 biler og rangerer paa ingenting. Den svarer
// derfor ikke paa „brugt sprinter til salg“. Det goer de her sider, og de
// fordeler samtidig de 325 links ud i et hierarki i stedet for én lang liste.
//
// Graenserne er sat, saa der er noget at skrive om: et maerke skal have mindst
// fire biler, en model mindst fem. Under det ville siden bare gentage
// kortene med en overskrift over.

var MIN_MAERKE = 4;
var MIN_MODEL = 5;

function slugDel(x) {
  var s = String(x).toLowerCase();
  var omlyd = [["\u00e6", "ae"], ["\u00f8", "oe"], ["\u00e5", "aa"], ["\u00e9", "e"], ["\u00e8", "e"], ["\u00ea", "e"], ["\u00eb", "e"], ["\u00fc", "u"], ["\u00fb", "u"], ["\u00f6", "oe"], ["\u00f5", "o"], ["\u00e1", "a"], ["\u00e0", "a"], ["\u00e2", "a"], ["\u00e4", "a"], ["\u00ed", "i"], ["\u00ec", "i"], ["\u00ee", "i"], ["\u00ef", "i"], ["\u00f3", "o"], ["\u00f2", "o"], ["\u00f4", "o"], ["\u00e7", "c"], ["\u00f1", "n"], ["\u00fa", "u"], ["\u00f9", "u"]];
  omlyd.forEach(function (o) { s = s.split(o[0]).join(o[1]); });
  return s.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Tal der kan siges noget om uden at gaette.
function noegletal(biler) {
  var pr = medPris(biler).map(function (b) { return b.pris_ekskl_moms_kr; })
    .sort(function (a, b) { return a - b; });
  var km = biler.map(function (b) { return b.km; }).filter(function (x) { return x != null; }).sort(function (a, b) { return a - b; });
  var aar = biler.map(function (b) { return b.aargang; }).filter(Boolean).sort();
  return {
    antal: biler.length,
    fra: pr[0], til: pr[pr.length - 1], median: pr[Math.floor(pr.length / 2)],
    kmMedian: km.length ? km[Math.floor(km.length / 2)] : null,
    aeldst: aar[0], nyest: aar[aar.length - 1],
    medLeasing: biler.filter(function (b) { return b.leasing; }).length
  };
}

// ── Landingssider paa tvaers af maerker ──────────────────────────────────────
//
// Sektionen havde sider pr. maerke og model, men ingen for de soegninger,
// folk faktisk laver. Antallet i hver facet er talt i data foerst; en side
// med tre biler er ikke en side, den er en skuffelse.
//
// `hvor` faar hele lageret. Facetter, der bygger paa prisen, skal selv
// filtrere de biler fra, hvis pris vi ikke gengiver - en bil uden pris kan
// ikke bevise, at den er billig.

var FACETTER = [
  {
    slug: "billige-brugte-varebiler",
    // "brugt varebil under 100.000" er det, folk skriver (02-10-2026).
    titel: "Brugt varebil under 100.000 kr. — %n% billige til salg",
    saetning: "%n% af de %alt% brugte varebiler på lageret koster under 100.000 kr. ekskl. moms.",
    h1: "Billige brugte varebiler",
    menu: "Under 100.000 kr.",
    kriterium: "kontantpris under 100.000 kr. ekskl. moms",
    hvor: function (b) { return prisDuer(b) && b.pris_ekskl_moms_kr < 100000; },
    om: "Prisen er kontantprisen ekskl. moms, som forhandleren selv oplyser. " +
        "Biler, hvor prisen ikke kan passe, er ikke med \u2014 de kan ikke bevise, " +
        "at de h\u00f8rer til her."
  },
  {
    slug: "brugt-kassevogn",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler på lageret er lukkede kassevogne.",
    h1: "Brugt kassevogn",
    menu: "Kassevogne",
    kriterium: "lukket kassevogn",
    hvor: function (b) { return b.karrosseri === "kassevogn"; },
    om: "Den lukkede kassevogn er den almindelige varebil: lastrum bag " +
        "f\u00f8rerkabinen, ingen lad. Det er langt den st\u00f8rste gruppe p\u00e5 lageret."
  },
  {
    slug: "brugt-ladvogn",
    // "ladbil til salg", "ladbil sælges", "brugt ladbil" (Search Console 02-10-2026).
    titel: "Ladbil til salg \u2014 %n% brugte ladvogne og ladbiler",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler på lageret er ladvogne eller chassiser med opbygning.",
    h1: "Brugt ladvogn og ladbil",
    menu: "Ladvogne",
    kriterium: "\u00e5bent lad eller chassis med opbygning",
    hvor: function (b) { return b.karrosseri === "ladvogn"; },
    om: "Ladvogn og ladbil d\u00e6kker det samme: et \u00e5bent lad frem for et lukket " +
        "lastrum. Bilerne bruges, hvor der skal l\u00e6sses fra siden eller ovenfra."
  },
  {
    slug: "brugt-varebil-med-automatgear",
    saetning: "%n% af de %alt% brugte varebiler på lageret har automatgear.",
    h1: "Brugt varebil med automatgear",
    menu: "Automatgear",
    kriterium: "automatisk gearkasse",
    hvor: function (b) { return b.gear === "Automatisk"; },
    om: "Forhandleren har selv registreret gearkassen. K\u00f8rer bilen " +
        "meget i by eller med skiftende chauff\u00f8rer, er det ofte det, der afg\u00f8r valget."
  },
  {
    // "brugt kassevogn med automatgear" (Googles autoforslag, 02-10-2026).
    slug: "brugt-kassevogn-med-automatgear",
    imenu: false,
    saetning: "%n% af de brugte kassevogne på lageret har automatgear.",
    h1: "Brugt kassevogn med automatgear",
    menu: "Kassevogn automatgear",
    kriterium: "kassevogn med automatisk gearkasse",
    hvor: function (b) { return b.karrosseri === "kassevogn" && b.gear === "Automatisk"; },
    om: "Forhandleren har selv registreret gearkassen. Ladvogne og pickupper med automatgear står på listen over alle varebiler med automatgear."
  },
  {
    // "brugt ladvogn" + "med lift" (Googles autoforslag, 02-10-2026).
    slug: "brugt-ladvogn-med-lift",
    imenu: false,
    saetning: "%n% af de brugte ladvogne på lageret har lift.",
    h1: "Brugt ladvogn med lift",
    menu: "Ladvogn med lift",
    kriterium: "ladvogn med lift eller læssebagsmæk",
    hvor: function (b) { return b.karrosseri === "ladvogn" && harLift(b); },
    om: "Liften står kun i forhandlerens fritekst, ikke i et fast felt. Biler, hvor teksten siger, at en lift kan eftermonteres, er ikke med."
  },
  {
    // "ladbil 3500 kg træk" (Search Console 02-10-2026).
    slug: "brugt-ladbil-med-3500-kg-traek",
    titel: "Ladbil med 3.500 kg træk \u2014 %n% brugte til salg",
    imenu: false,
    saetning: "%n% af de brugte ladvogne på lageret må trække 3.500 kg eller mere.",
    h1: "Brugt ladbil med 3.500 kg træk",
    menu: "Ladbil 3.500 kg træk",
    kriterium: "ladvogn med en tilladt anhængervægt på mindst 3.500 kg",
    hvor: function (b) { return b.karrosseri === "ladvogn" && b.anhaengervaegt_kg >= 3500; },
    om: "Anhængervægten står, som forhandleren har registreret den, og gælder anhænger med bremser. Hvor meget du selv må trække, afhænger også af dit kørekort; se Håndbogen om anhænger bag varebilen."
  },
  {
    // "iveco daily ladvogn til salg" (Search Console 02-10-2026).
    slug: "brugt-iveco-daily-ladvogn",
    titel: "Iveco Daily ladvogn til salg \u2014 %n% brugte",
    imenu: false,
    saetning: "%n% af de brugte Iveco Daily på lageret er ladvogne eller chassiser med opbygning.",
    h1: "Brugt Iveco Daily ladvogn",
    menu: "Iveco Daily ladvogn",
    kriterium: "Iveco Daily med lad eller opbygning",
    hvor: function (b) { return b.maerke === "Iveco" && /daily/i.test(b.model) && b.karrosseri === "ladvogn"; },
    om: "Iveco Daily fås med højere totalvægt end de fleste varebiler. Tjek totalvægten i registreringsattesten: over 3.500 kg kræver kørekort til kategori C1."
  },
  {
    slug: "brugt-mercedes-sprinter-ladvogn",
    titel: "Mercedes Sprinter ladvogn til salg \u2014 %n% brugte",
    imenu: false,
    saetning: "%n% af de brugte Mercedes Sprinter på lageret er ladvogne eller chassiser med opbygning.",
    h1: "Brugt Mercedes Sprinter ladvogn",
    menu: "Mercedes Sprinter ladvogn",
    kriterium: "Mercedes Sprinter med lad eller opbygning",
    hvor: function (b) { return b.maerke === "Mercedes-Benz" && /sprinter/i.test(b.model) && b.karrosseri === "ladvogn"; },
    om: "Opbygningen — lad, tip, alukasse eller lift — står i forhandlerens beskrivelse på hver bil."
  },
  {
    slug: "brugt-renault-master-ladvogn",
    titel: "Renault Master ladvogn til salg — %n% brugte",
    imenu: false,
    saetning: "%n% af de brugte Renault Master på lageret er ladvogne eller chassiser med opbygning.",
    h1: "Brugt Renault Master ladvogn",
    menu: "Renault Master ladvogn",
    kriterium: "Renault Master med lad eller opbygning",
    hvor: function (b) { return b.maerke === "Renault" && /master/i.test(b.model) && !/custom|connect|courier/i.test(b.model) && b.karrosseri === "ladvogn"; },
    om: "Opbygningen — lad, tip, alukasse eller lift — står i forhandlerens beskrivelse på hver bil."
  },
  {
    slug: "brugt-ford-transit-ladvogn",
    titel: "Ford Transit ladvogn til salg — %n% brugte",
    imenu: false,
    saetning: "%n% af de brugte Ford Transit på lageret er ladvogne eller chassiser med opbygning.",
    h1: "Brugt Ford Transit ladvogn",
    menu: "Ford Transit ladvogn",
    kriterium: "Ford Transit med lad eller opbygning",
    hvor: function (b) { return b.maerke === "Ford" && /transit/i.test(b.model) && !/custom|connect|courier/i.test(b.model) && b.karrosseri === "ladvogn"; },
    om: "Opbygningen — lad, tip, alukasse eller lift — står i forhandlerens beskrivelse på hver bil."
  },
  {
    slug: "brugt-varebil-med-alukasse",
    titel: "Varebil med alukasse til salg \u2014 %n% brugte",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler på lageret har alukasse.",
    h1: "Brugt varebil med alukasse",
    menu: "Alukasse",
    kriterium: "chassis med kasseopbygning i aluminium",
    hvor: function (b) { return (b.opbygning || []).indexOf("Alukasse") >= 0; },
    om: "En alukasse er en lukket kasse bygget på et chassis: højere og mere firkantet end en kassevogn, ofte med lift bagpå. Opbygningen står, som forhandleren har registreret den."
  },
  {
    slug: "brugt-vaerkstedsbil",
    titel: "Værkstedsbil til salg \u2014 %n% brugte med indretning",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler på lageret er registreret som værkstedsbiler.",
    h1: "Brugt værkstedsbil",
    menu: "Værkstedsbiler",
    kriterium: "varebil, forhandleren har registreret som værkstedsbil",
    hvor: function (b) { return (b.opbygning || []).indexOf("V\u00e6rkstedsbil") >= 0; },
    om: "En værkstedsbil har fast indretning — reoler, skuffer eller værktøjsvægge — og kan dermed være specialindrettet efter Motorstyrelsens regler, så den må køre mellem hjem og arbejde. Det afgør indretningen, ikke betegnelsen; se Håndbogen om specialindretning."
  },
  {
    // "brugt mercedes sprinter med automatgear" (Googles autoforslag, 02-10-2026).
    slug: "brugt-mercedes-sprinter-med-automatgear",
    imenu: false,
    saetning: "%n% af de brugte Mercedes Sprinter på lageret har automatgear.",
    h1: "Brugt Mercedes Sprinter med automatgear",
    menu: "Mercedes Sprinter automatgear",
    kriterium: "Mercedes Sprinter med automatisk gearkasse",
    hvor: function (b) { return b.maerke === "Mercedes-Benz" && b.model === "Sprinter" && b.gear === "Automatisk"; },
    om: "Forhandleren har selv registreret gearkassen. Alle Mercedes Sprinter på lageret, også dem med manuelt gear, står på modelsiden."
  },
  {
    // "brugt iveco daily med automatgear" (Googles autoforslag, 02-10-2026).
    slug: "brugt-iveco-daily-med-automatgear",
    imenu: false,
    saetning: "%n% af de brugte Iveco Daily på lageret har automatgear.",
    h1: "Brugt Iveco Daily med automatgear",
    menu: "Iveco Daily automatgear",
    kriterium: "Iveco Daily med automatisk gearkasse",
    hvor: function (b) { return b.maerke === "Iveco" && b.model === "Daily" && b.gear === "Automatisk"; },
    om: "Forhandleren har selv registreret gearkassen. Alle Iveco Daily på lageret, også dem med manuelt gear, står på modelsiden."
  },
  {
    // "brugt mercedes vito med automatgear" (Googles autoforslag, 02-10-2026).
    slug: "brugt-mercedes-vito-med-automatgear",
    imenu: false,
    saetning: "%n% af de brugte Mercedes Vito på lageret har automatgear.",
    h1: "Brugt Mercedes Vito med automatgear",
    menu: "Mercedes Vito automatgear",
    kriterium: "Mercedes Vito med automatisk gearkasse",
    hvor: function (b) { return b.maerke === "Mercedes-Benz" && b.model === "Vito" && b.gear === "Automatisk"; },
    om: "Forhandleren har selv registreret gearkassen. Alle Mercedes Vito på lageret, også dem med manuelt gear, står på modelsiden."
  },
  {
    // "brugt ford transit custom med automatgear" (Googles autoforslag, 02-10-2026).
    slug: "brugt-ford-transit-custom-med-automatgear",
    imenu: false,
    saetning: "%n% af de brugte Ford Transit Custom på lageret har automatgear.",
    h1: "Brugt Ford Transit Custom med automatgear",
    menu: "Ford Transit Custom automatgear",
    kriterium: "Ford Transit Custom med automatisk gearkasse",
    hvor: function (b) { return b.maerke === "Ford" && b.model === "Transit Custom" && b.gear === "Automatisk"; },
    om: "Forhandleren har selv registreret gearkassen. Alle Ford Transit Custom på lageret, også dem med manuelt gear, står på modelsiden."
  },
  {
    // "brugt vw transporter med automatgear" (Googles autoforslag, 02-10-2026).
    slug: "brugt-vw-transporter-med-automatgear",
    imenu: false,
    saetning: "%n% af de brugte VW Transporter på lageret har automatgear.",
    h1: "Brugt VW Transporter med automatgear",
    menu: "VW Transporter automatgear",
    kriterium: "VW Transporter med automatisk gearkasse",
    hvor: function (b) { return b.maerke === "VW" && b.model === "Transporter" && b.gear === "Automatisk"; },
    om: "Forhandleren har selv registreret gearkassen. Alle VW Transporter på lageret, også dem med manuelt gear, står på modelsiden."
  },
  {
    slug: "brugt-varebil-med-lav-kilometerstand",
    saetning: "%n% af de %alt% brugte varebiler på lageret har kørt under 100.000 km.",
    h1: "Brugt varebil med lav kilometerstand",
    menu: "Under 100.000 km",
    kriterium: "under 100.000 km p\u00e5 t\u00e6lleren",
    hvor: function (b) { return b.km != null && b.km < 100000; },
    om: "Kilometertallet er forhandlerens egen oplysning p\u00e5 den dato, der " +
        "st\u00e5r p\u00e5 bilens side. Biler uden oplyst kilometertal er ikke med."
  },
  {
    slug: "nyere-brugte-varebiler",
    saetning: "%n% af de %alt% brugte varebiler på lageret er fra 2022 eller nyere.",
    h1: "Nyere brugte varebiler",
    menu: "\u00c5rgang 2022 og nyere",
    kriterium: "\u00e5rgang 2022 eller nyere",
    hvor: function (b) { return b.aargang != null && b.aargang >= 2022; },
    om: "\u00c5rgangen siger ikke alt \u2014 en tre \u00e5r gammel bil med 200.000 km har " +
        "arbejdet mere end en fem \u00e5r gammel med 60.000. Kilometertallet st\u00e5r " +
        "p\u00e5 hvert kort."
  },
  {
    slug: "brugt-elvarebil",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler på lageret er eldrevne el-varevogne.",
    h1: "Brugt elvarebil",
    titel: "Brugt elvarebil til salg \u2014 %n% brugte el-varevogne",
    besk: "Brugt elvarebil til salg: %n% brugte el-varevogne på gule plader fra %fra% kr. ekskl. moms. Rækkevidde, kilometertal og grøn ejerafgift på hver bil.",
    menu: "Elvarebiler",
    kriterium: "eldrevet",
    hvor: function (b) { return b.drivmiddel === "el"; },
    om: "Elvarebiler fylder stadig lidt p\u00e5 det brugte marked, og det kan ses " +
        "her. Til geng\u00e6ld er den gr\u00f8nne ejerafgift markant lavere \u2014 den st\u00e5r " +
        "p\u00e5 hver bil."
  },
  {
    slug: "brugt-pickup",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler på lageret er pickupper.",
    h1: "Brugt pickup",
    menu: "Pickupper",
    kriterium: "pickup med \u00e5bent lad og kabine",
    hvor: function (b) { return b.karrosseri === "pickup"; },
    om: "En pickup har b\u00e5de kabine og \u00e5bent lad. Den er en lille gruppe p\u00e5 " +
        "lageret, men en helt anden bil end en kassevogn."
  },
  {
    slug: "brugt-varebil-med-indretning",
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret har reoler, hylder eller v\u00e6rkstedsindretning i varerummet.",
    imenu: false,
    h1: "Brugt varebil med indretning",
    menu: "Med indretning",
    kriterium: "reoler, hylder, skuffer eller v\u00e6rkstedsopbygning i varerummet",
    hvor: harIndretning,
    om: "Listen samler tre kilder: forhandlerens kategori V\u00e6rkstedsbil, udstyrsfeltet " +
        "\u201eReolsystem / indretning\u201c og beskrivelser, der n\u00e6vner reoler, hylder, " +
        "skuffer, Sortimo eller BOTT. Hver for sig fanger de kun en del. " +
        "Indretningen t\u00e6ller med i bilens v\u00e6gt, s\u00e5 tjek nyttelasten p\u00e5 bilens side."
  },
  {
    slug: "brugt-varebil-med-lift",
    // "varebil med lift til salg", "kassevogn med lift" (Googles autoforslag, 01-10-2026).
    titel: "Varebil med lift til salg — %n% brugte med lift",
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret har lift p\u00e5 kassen.",
    imenu: false,
    h1: "Brugt varebil med lift",
    menu: "Med lift",
    kriterium: "lift eller l\u00e6ssebagsm\u00e6k p\u00e5 kassen",
    hvor: harLift,
    om: "Liften st\u00e5r kun i forhandlerens fritekst, ikke i et fast felt. Biler, hvor " +
        "teksten siger, at en lift kan eftermonteres, er ikke med \u2014 de har ingen."
  },
  {
    slug: "brugt-ladbil-med-kran",
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret har kran.",
    imenu: false,
    h1: "Brugt ladbil med kran",
    menu: "Med kran",
    kriterium: "kran monteret p\u00e5 bilen",
    hvor: harKran,
    om: "Kranen st\u00e5r kun i forhandlerens fritekst. Typen og l\u00f8fteevnen er sj\u00e6ldent " +
        "oplyst \u2014 sp\u00f8rg, f\u00f8r du regner med den."
  },
  // Fem facetter efter soegninger, folk laver: "varebil med traek", "varebil
  // under 50.000", "4x4 varebil", "brugt mandskabsvogn", "brugt koelebil".
  // Ingen af dem i undermenuen - der blev bedt om faerre kategorier.
  {
    slug: "brugt-varebil-med-traek",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret har anh\u00e6ngertr\u00e6k.",
    h1: "Brugt varebil med tr\u00e6k",
    menu: "Med tr\u00e6k",
    kriterium: "anh\u00e6ngertr\u00e6k i forhandlerens udstyrsliste",
    hvor: harTraek,
    om: "Listen bygger p\u00e5 forhandlerens udstyrsfelt. Hvor meget bilen m\u00e5 tr\u00e6kke, " +
        "st\u00e5r under specifikationerne p\u00e5 bilens side \u2014 og kr\u00e6ver det mere end " +
        "3.500 kg samlet, skal k\u00f8rekortet ogs\u00e5 kunne b\u00e6re det."
  },
  {
    slug: "brugt-varebil-under-50000-kr",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret koster under 50.000 kr. ekskl. moms.",
    h1: "Brugt varebil under 50.000 kr.",
    menu: "Under 50.000 kr.",
    kriterium: "kontantpris under 50.000 kr. ekskl. moms",
    hvor: function (b) { return prisDuer(b) && b.pris_ekskl_moms_kr < 50000; },
    om: "I den prisklasse s\u00e6lges mange biler engros, som de st\u00e5r \u2014 det st\u00e5r " +
        "med gult p\u00e5 kortet. L\u00e6s beskrivelsen, og se bilen, f\u00f8r du handler."
  },
  {
    slug: "brugt-4x4-varebil",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret har firehjulstr\u00e6k.",
    h1: "Brugt 4x4 varebil",
    titel: "Brugt 4x4 varebil og gulpladebil \u2014 %n% til salg",
    menu: "4x4",
    kriterium: "firehjulstr\u00e6k (4x4, 4WD, 4Matic, 4Motion, quattro)",
    hvor: har4x4,
    om: "Firehjulstr\u00e6k st\u00e5r i bilens variantnavn under fabrikkens eget navn. " +
        "De fleste er pickupper, men der er ogs\u00e5 kassevogne."
  },
  {
    slug: "brugt-mandskabsvogn",
    // "mandskabsvogn til salg" (pos. 6), "brugt mandskabsvogn til salg" (Search Console 02-10-2026).
    titel: "Mandskabsvogn til salg \u2014 %n% brugte med dobbeltkabine",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret har dobbeltkabine.",
    h1: "Brugt mandskabsvogn med dobbeltkabine",
    menu: "Mandskabsvogne",
    kriterium: "dobbeltkabine med ekstra s\u00e6der bag f\u00f8reren",
    hvor: harDobbeltkabine,
    om: "Mandskabsvogn og dobbeltkabine er det samme: en ekstra s\u00e6der\u00e6kke, s\u00e5 " +
        "holdet kan k\u00f8re sammen. Til geng\u00e6ld bliver varerummet eller ladet kortere. " +
        "Pickupper med dobbeltkabine er ogs\u00e5 med. " +
        "Hvor mange der m\u00e5 sidde i bilen, st\u00e5r i registreringsattesten."
  },
  {
    slug: "brugt-personbil-paa-gule-plader",
    // "gulpladebil til salg", "brugt gulpladebil", "personbil på gule plader"
    // (Search Console 06-10-2026). Kategorien hedder "Bil på gule plader" i chippen.
    titel: "Personbil på gule plader til salg — %n% brugte gulpladebiler",
    imenu: false,
    saetning: "%n% af de %alt% brugte biler på lageret er personbiler eller SUV'er, der er registreret som varebiler.",
    h1: "Brugt personbil på gule plader",
    menu: "Personbil på gule plader",
    kriterium: "personbil eller SUV, som forhandleren sælger som varebil",
    hvor: function (b) { return b.karrosseri === "personbil-van"; },
    // Forhandlerens data siger, at bilen er en varebil, men ikke hvilke plader den har.
    om: "Der gælder de samme regler for bilerne som for andre varebiler på gule plader. " +
        "I Motorregistret kan du slå bilen op på nummerpladen og se, om den har gule " +
        "plader eller papegøjeplader."
  },
  {
    slug: "brugt-koelebil",
    // "varebil med køl", "varevogn med køl" (Search Console, 01-10-2026).
    titel: "Varebil med køl til salg — %n% brugte kølebiler",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret er k\u00f8le- eller frysebiler.",
    h1: "Brugt k\u00f8lebil",
    menu: "K\u00f8lebiler",
    kriterium: "k\u00f8le- eller fryseanl\u00e6g i kassen",
    hvor: harKoel,
    om: "K\u00f8leanl\u00e6gget st\u00e5r kun i forhandlerens fritekst, og dets stand er sj\u00e6ldent " +
        "oplyst. F\u00e5 det testet, f\u00f8r du k\u00f8ber \u2014 et anl\u00e6g, der ikke holder " +
        "temperaturen, er ikke en k\u00f8lebil."
  },
  // Leasing af brugt varebil: forhandlerens eget leasingforslag. Ydelse, loebetid,
  // udbetaling og restvaerdi (den lave, aftalt med forhandleren 01-10-2026).
  // "Totalpris i loebetiden" vises fortsat ikke.
  {
    slug: "brugt-varebil-leasing",
    imenu: false,
    titel: "Leasing af brugt varebil \u2014 %n% biler fra %lfra% kr./md.",
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret kan leases. Den laveste ydelse er %lfra% kr. om m\u00e5neden ekskl. moms, og listen er sorteret efter ydelsen.",
    h1: "Leasing af brugt varebil",
    menu: "Kan leases",
    kriterium: "forhandleren har lagt et leasingforslag p\u00e5 bilen",
    hvor: function (b) { return !!(b.leasing && b.leasing.maanedspris); },
    sorter: function (a, b) { return a.leasing.maanedspris - b.leasing.maanedspris; },
    om: "Forslagene er finansiel erhvervsleasing: du betaler en udbetaling og en m\u00e5nedlig ydelse, " +
        "og aftalen slutter med en restv\u00e6rdi, som du eller en k\u00f8ber, du anviser, skal overtage bilen til. " +
        "Ydelse, l\u00f8betid, udbetaling og restv\u00e6rdi st\u00e5r p\u00e5 hver bils side."
  },
  // Stoerrelse efter modelfamilie. Forhandleren oplyser ikke laengden, saa en
  // kort og en lang udgave af samme model staar samme sted. Klasserne svarer
  // til dem paa de nye varebiler (pizzabil under 4,75 m, mellem, stor over 5,4 m).
  {
    slug: "brugt-lille-varebil",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret er sm\u00e5 varebiler i Caddy-, Partner- og Kangoo-klassen.",
    h1: "Brugt lille varebil",
    menu: "Sm\u00e5 varebiler",
    kriterium: "sm\u00e5 kassevogne som Transit Connect, Partner, Kangoo, Citan, Dokker og Express",
    hvor: function (b) { return b.karrosseri === "kassevogn" && modelKlasse(b) === "lille"; },
    om: "St\u00f8rrelsen f\u00f8lger modellen, ikke den enkelte bils m\u00e5l \u2014 forhandleren oplyser " +
        "ikke længden. En lille varebil er let at parkere og bruger mindre brændstof — " +
        "forbrug og grøn ejerafgift står på hver bil. Personbiler, der er ombygget til varebil, er ikke med."
  },
  {
    slug: "brugt-mellemstor-varebil",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret er mellemstore varebiler i Transporter-, Vito- og Transit Custom-klassen.",
    h1: "Brugt mellemstor varebil",
    menu: "Mellemstore",
    kriterium: "mellemstore varebiler som Transit Custom, Vito, Transporter, Trafic og ProAce",
    hvor: function (b) { return (b.karrosseri === "kassevogn" || b.karrosseri === "ladvogn") && modelKlasse(b) === "mellem"; },
    om: "St\u00f8rrelsen f\u00f8lger modellen, ikke den enkelte bils m\u00e5l \u2014 forhandleren oplyser " +
        "ikke l\u00e6ngden, og mange af modellerne findes i b\u00e5de kort og lang udgave. " +
        "Kort eller lang står som regel i bilens navn."
  },
  {
    slug: "brugt-stor-varebil",
    imenu: false,
    saetning: "%n% af de %alt% brugte varebiler p\u00e5 lageret er store varebiler i Sprinter-, Master- og Daily-klassen.",
    h1: "Brugt stor varebil",
    menu: "Store varebiler",
    kriterium: "store kassevogne og ladvogne som Sprinter, Master, Daily, Transit, Crafter og TGE",
    hvor: function (b) { return (b.karrosseri === "kassevogn" || b.karrosseri === "ladvogn") && modelKlasse(b) === "stor"; },
    om: "St\u00f8rrelsen f\u00f8lger modellen, ikke den enkelte bils m\u00e5l \u2014 forhandleren oplyser " +
        "ikke l\u00e6ngden. Ladvogne og chassiser med kasse er med. Totalv\u00e6gten afg\u00f8r, om bilen " +
        "kan k\u00f8res p\u00e5 almindeligt k\u00f8rekort, og den st\u00e5r i registreringsattesten \u2014 ikke " +
        "i forhandlerens data."
  }
];

// En facet skal kunne baere en side. Under det her er den en skuffelse.
var MIN_FACET = 5;

function landingsider(data) {
  var ud = [];
  var efterMaerke = {};
  data.biler.forEach(function (b) {
    (efterMaerke[b.maerke] = efterMaerke[b.maerke] || []).push(b);
  });

  Object.keys(efterMaerke).sort().forEach(function (m) {
    var biler = efterMaerke[m];
    if (biler.length < MIN_MAERKE) return;
    var mSlug = slugDel(m);
    var modeller = {};
    biler.forEach(function (b) { (modeller[b.model] = modeller[b.model] || []).push(b); });
    var store = Object.keys(modeller).filter(function (x) { return modeller[x].length >= MIN_MODEL; }).sort();

    ud.push({
      slags: "maerke", sti: "/brugte-varebiler/" + mSlug + "/",
      maerke: m, biler: biler,
      undersider: store.map(function (x) {
        return { navn: x, sti: "/brugte-varebiler/" + mSlug + "/" + slugDel(x) + "/", antal: modeller[x].length };
      })
    });

    store.forEach(function (mo) {
      ud.push({
        slags: "model", sti: "/brugte-varebiler/" + mSlug + "/" + slugDel(mo) + "/",
        maerke: m, model: mo, biler: modeller[mo],
        forael: { navn: m, sti: "/brugte-varebiler/" + mSlug + "/" }
      });
    });
  });

  // Facetterne til sidst, saa maerkesiderne ligger foerst i listen og
  // "andre maerker"-blokken ikke bliver fyldt med dem.
  FACETTER.forEach(function (F) {
    var biler = data.biler.filter(F.hvor);
    if (biler.length < MIN_FACET) return;
    ud.push({
      slags: "facet", sti: "/brugte-varebiler/" + F.slug + "/",
      facet: F, biler: biler
    });
  });
  return ud;
}

// Undermenuen til hele brugtsektionen. Den er sektionens egen navigation:
// uden den findes facetsiderne kun i sitemappet, og en bes\u00f8gende, der er
// landet paa \u00e9n af dem, kan ikke komme videre til de andre.
// Kun de facetter, chipsene ikke allerede daekker. Kassevogn, ladvogn og
// pickup stod baade her og i chipsene med det samme tal.
function undermenuHTML(data, nuSti) {
  var f = (data._landing || []).filter(function (x) {
    return x.slags === "facet" && x.facet.imenu !== false;
  });
  if (!f.length) return "";
  return [
    '<nav class="undermenu" aria-label="Brugte varebiler">',
    // Paa oversigten er "Alle" baade et link til den side, man staar paa,
    // og en gentagelse af chippen "Alle biler". Den vises kun andre steder.
    nuSti === "/brugte-varebiler/" ? '' :
      '  <a class="chip" href="/brugte-varebiler/">Alle <span class="chip__tal">' + data.biler.length + '</span></a>',
    f.map(function (x) {
      return '  <a class="chip' + (nuSti === x.sti ? ' chip--valgt' : '') + '" href="' + x.sti + '"' +
        (nuSti === x.sti ? ' aria-current="page"' : '') +
        '>' + esc(x.facet.menu) + ' <span class="chip__tal">' + x.biler.length + '</span></a>';
    }).join("\n"),
    '</nav>'
  ].join("\n");
}

// ── Hvad koster en brugt X? ─────────────────────────────────────────────────
//
// Maerke- og modelsiderne var en liste og intet andet. Men det, folk skriver
// i Google, er spoergsmaal: "hvad koster en brugt sprinter", "brugt transit
// custom 2019". Svaret staar i lageret, saa det regnes ud her - pris og
// kilometer pr. aargang, og en FAQ, der ogsaa gaar ud som FAQPage.
//
// Samme regler som resten af sektionen: "typisk" er median, en aargang skal
// have mindst to biler med pris for at komme i tabellen, og et svar, der ikke
// kan regnes ud, udelades.

function aargangsTabel(biler) {
  var efter = {};
  medPris(biler).forEach(function (b) {
    if (b.aargang) (efter[b.aargang] = efter[b.aargang] || []).push(b);
  });
  return Object.keys(efter).map(Number).sort(function (a, b) { return b - a; })
    .filter(function (a) { return efter[a].length >= 2; })
    .map(function (a) {
      var x = efter[a];
      var km = x.map(function (b) { return b.km; }).filter(function (v) { return v != null; });
      return { aar: a, antal: x.length,
               pris: median(x.map(function (b) { return b.pris_ekskl_moms_kr; })),
               km: km.length ? median(km) : null };
    });
}

// Den karrosseri, der fylder mest - til at finde den rigtige leasingside.
function mestAlmindelig(biler, felt) {
  var n = {};
  biler.forEach(function (b) { n[b[felt]] = (n[b[felt]] || 0) + 1; });
  return Object.keys(n).sort(function (a, b) { return n[b] - n[a]; })[0];
}

function indsigt(L, data) {
  // 02-10-2026: også genvejssiderne (fx "Ladbil til salg") får pris pr. årgang og FAQ,
  // men ikke dem, der selv er en prisgrænse eller et udsnit (under 50.000, billige, nyere, leasing).
  var erFacet = L.slags === "facet" && /^Brugt /.test(L.facet.h1) && !/under-|billige|nyere|leasing/.test(L.facet.slug);
  if (L.slags !== "model" && L.slags !== "maerke" && !erFacet) return { html: "", faq: [] };
  var biler = L.biler;
  var navnet = erFacet ? L.facet.h1.replace(/^Brugt /, "") : L.slags === "model" ? L.maerke + " " + L.model : L.maerke;
  var t = noegletal(biler);
  var rader = aargangsTabel(biler);
  var faq = [];
  var dele = [];

  // Pris efter karrosseri, kun hvor begge grupper kan baere et tal.
  var typer = ["kassevogn", "ladvogn", "pickup"].map(function (k) {
    var x = medPris(biler.filter(function (b) { return b.karrosseri === k; }));
    return { k: k, n: x.length, pris: median(x.map(function (b) { return b.pris_ekskl_moms_kr; })) };
  }).filter(function (x) { return x.n >= MIN_SAMMENLIGN; });

  if (rader.length >= 2) {
    dele.push(
      '<section class="sektion">',
      '  <h2>Hvad koster en brugt ' + esc(navnet) + '?</h2>',
      '  <p>Priserne på lageret går fra ' + kr(t.fra) + ' til ' + kr(t.til) +
        ' ekskl. moms, og halvdelen koster under ' + kr(t.median) + ' Årgangen betyder mest for prisen. Tabellen viser ' +
        'typisk pris og kilometer for hver årgang med mindst to biler.</p>',
      typer.length >= 2 ? '  <p>' + typer.map(function (x) {
        var flertal = { kassevogn: "kassevogne", ladvogn: "ladvogne", pickup: "pickupper" }[x.k] || x.k;
        return x.n === 1
          ? 'Den ene ' + x.k + ' koster ' + kr(x.pris)
          : 'De ' + x.n + ' ' + flertal + ' koster typisk ' + kr(x.pris);
      }).join(' ') + '</p>' : '',
      '  <div class="tilbud-tabel-wrap"><table class="tilbud-tabel">',
      '    <thead><tr><th scope="col">Årgang</th><th scope="col">Biler</th>' +
        '<th scope="col">Typisk pris ekskl. moms</th><th scope="col">Typisk km</th></tr></thead>',
      '    <tbody>',
      rader.map(function (r) {
        return '      <tr><th scope="row">' + r.aar + '</th><td>' + r.antal + '</td><td>' +
          kr(r.pris) + '</td><td>' + (r.km == null ? '—' : talDK(r.km)) + '</td></tr>';
      }).join("\n"),
      '    </tbody>',
      '  </table></div>',
      '  <p class="kilde">Vi har regnet tallene ud fra lageret den ' +
        esc(datoLang(data.sidst_opdateret)) + '. Typisk betyder, at halvdelen er billigere og ' +
        'halvdelen dyrere. Årgange med én bil står kun i listen ovenfor.</p>',
      '</section>'
    );
  }

  if (t.median != null) {
    var nyest = rader[0], aeldst = rader[rader.length - 1];
    faq.push({ sp: "Hvad koster en brugt " + navnet + "?",
      sv: "Bilerne på lageret koster lige nu fra " + kr(t.fra) + " til " + kr(t.til) + " ekskl. moms. " +
        "Halvdelen koster under " + kr(t.median) +
        (rader.length >= 2 ? " En bil fra " + nyest.aar + " koster typisk " + kr(nyest.pris) +
          ", og en fra " + aeldst.aar + " koster typisk " + kr(aeldst.pris) : "") });
  }
  if (t.kmMedian != null) {
    var under = biler.filter(function (b) { return b.km != null && b.km < 100000; }).length;
    faq.push({ sp: "Hvor mange kilometer har en brugt " + navnet + " kørt?",
      sv: "Den typiske " + navnet + " på lageret har kørt " + talDK(t.kmMedian) + " km. " +
        (under ? under + " af de " + t.antal : "Ingen af de " + t.antal) +
        " har kørt under 100.000 km." });
  }
  var auto = biler.filter(function (b) { return b.gear === "Automatisk"; }).length;
  if (auto && !(erFacet && /automatgear|elvarebil/.test(L.facet.slug))) faq.push({ sp: / med /.test(navnet)
      ? "Findes der automatgear i en brugt " + navnet + "?" : "Findes der en brugt " + navnet + " med automatgear?",
    sv: "Ja. " + auto + " af de " + t.antal + " på lageret har automatgear." });
  if (t.medLeasing) faq.push({ sp: "Kan man lease en brugt " + navnet + "?",
    sv: "Forhandleren har lagt et leasingforslag på " + t.medLeasing + " af de " +
      t.antal + " biler. På bilens side kan du se ydelse og restværdi." });

  var leas = L.slags === "model"
    ? leasingModel({ maerke: L.maerke, model: L.model, karrosseri: mestAlmindelig(biler, "karrosseri") })
    : null;
  if (leas) faq.push({ sp: "Hvad koster en ny " + leas.navn + " i leasing?",
    sv: "Vi sammenligner " + leas.antal + " erhvervsleasingtilbud på en ny " + leas.navn +
      (leas.fra ? ". Ydelsen starter ved " + kr(leas.fra) + " om måneden ekskl. moms før udbetaling" : "") +
      ". Ved hvert tilbud kan du se udbetaling, løbetid og hvad der følger med.",
    link: [leas.sti, "Se tilbuddene på en ny " + leas.navn] });

  return { html: dele.filter(function (l) { return l !== ""; }).join("\n"), faq: faq };
}

// Pladsholdere i en facets tekst: %n% biler, %alt% paa lageret, %lfra% laveste leasingydelse.
function facetTekst(tekst, L, data) {
  var ydelser = L.biler.map(function (b) { return b.leasing && b.leasing.maanedspris; })
    .filter(function (x) { return x; });
  return tekst.replace(/%n%/g, L.biler.length).replace(/%alt%/g, data.biler.length)
    .replace(/%lfra%/g, ydelser.length ? talDK(Math.min.apply(null, ydelser)) : "");
}

function landingHTML(L, data) {
  var f = data.forhandler;
  var erFacet = L.slags === "facet";
  var navnet = erFacet ? L.facet.h1
    : (L.slags === "model" ? L.maerke + " " + L.model : L.maerke);
  var t = noegletal(L.biler);
  var url = BASE_URL + L.sti;
  var ind = indsigt(L, data);

  var overskrift = erFacet ? L.facet.h1
    : "Brugt " + navnet + (L.slags === "maerke" ? " varebil" : "");
  var krumme = [["Forsiden", "/"], ["Brugte varebiler", "/brugte-varebiler/"]];
  if (L.forael) krumme.push([L.forael.navn, L.forael.sti]);
  krumme.push([navnet, null]);

  var schema = samlSchema(krummeSchema(krumme), ind.faq.length ? {
    "@type": "FAQPage",
    mainEntity: ind.faq.map(function (q) {
      return { "@type": "Question", name: q.sp,
               acceptedAnswer: { "@type": "Answer", text: q.sv } };
    })
  } : null, {
    "@type": "CollectionPage",
    name: overskrift + (erFacet ? "" : " til salg"),
    url: url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: t.antal,
      itemListElement: L.biler.slice(0, 20).map(function (b, i) {
        return {
          "@type": "ListItem", position: i + 1,
          url: BASE_URL + "/brugte-varebiler/" + b.slug + "/",
          name: navn(b) + " " + b.variant
        };
      })
    }
  });

  // Manchetten bygges af lagerets egne tal. Er der intet at sige, staar der
  // ikke noget - vi fylder ikke en side med ord for ordenes skyld.
  var stk = [];
  if (erFacet) {
    // Hver facet har sin egen sætning. Forsoeget paa at lime "N af de 325
    // ... er <kriterium>" sammen gav "er kontantpris under 100.000 kr." og
    // "325 af de 325 ... er hele lageret".
    stk.push(facetTekst(L.facet.saetning, L, data));
  }
  if (!erFacet) stk.push("Der er " + t.antal + (t.antal === 1 ? " brugt " : " brugte ") + navnet +
    (L.slags === "maerke" ? (t.antal === 1 ? " varevogn" : " varevogne") : "") +
    " p\u00e5 lager.");
  stk.push("Priserne g\u00e5r fra " + talDK(t.fra) + " til " + talDK(t.til) +
    " kr. ekskl. moms, og halvdelen ligger under " + talDK(t.median) + " kr.");
  if (t.aeldst && t.nyest && t.aeldst !== t.nyest) {
    stk.push("Bilerne er fra " + t.aeldst + " til " + t.nyest +
      (t.kmMedian != null ? ", og den typiske bil har k\u00f8rt " + talDK(t.kmMedian) + " km" : "") + ".");
  }

  var andre = (data._landing || []).filter(function (x) {
    return x.slags === "maerke" && x.sti !== L.sti;
  }).slice(0, 12);

  return [
    hoved(
      sidetitel(erFacet
        ? (L.facet.titel ? facetTekst(L.facet.titel, L, data) : overskrift + " \u2014 " + t.antal + " til salg")
        : "Brugt " + titelNavn(navnet) + (L.slags === "maerke" ? " varebil" : "") + " til salg \u2014 " + t.antal + " biler"),
      beskrivelse(erFacet && L.facet.besk
        ? facetTekst(L.facet.besk, L, data).replace(/%fra%/g, talDK(t.fra))
        : salgsBeskrivelse(overskrift, L, t)),
      url, schema,
      L.biler[0].billeder && L.biler[0].billeder.length
        ? BILLED_CDN + L.biler[0].billeder[0] + "/1200x630/cover" : null,
      FORUD),
    header(),
    '<main id="indhold" class="brugt-side">',
    '<nav class="breadcrumb"><ol>' + krumme.map(function (k, i) {
      return i < krumme.length - 1
        ? '<li><a href="' + k[1] + '">' + esc(k[0]) + '</a></li>'
        : '<li aria-current="page">' + esc(k[0]) + '</li>';
    }).join("") + '</ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Opdateret ' + esc(datoDa(data.sidst_opdateret)) +
    ' · formidles af Gulplade.dk</p>',
    '  <h1>' + esc(overskrift) + (erFacet ? '' : ' til salg') + '</h1>',
    '  <p class="hero-ny__manchet">' + esc(stk.join(" ")) + '</p>',
    '  <dl class="hero-stats">',
    '    <div><dt>Biler</dt><dd>' + t.antal + '</dd></div>',
    (erFacet && L.facet.sorter) ? (function () {
      // Leasinglisten: ydelsen er tallet, ikke kontantprisen.
      var y = L.biler.map(function (b) { return b.leasing.maanedspris; }).sort(function (a, b) { return a - b; });
      return '    <div><dt>Fra pr. md.</dt><dd>' + talDK(y[0]) + '</dd></div>\n' +
             '    <div><dt>Typisk ydelse</dt><dd>' + talDK(y[Math.floor(y.length / 2)]) + '</dd></div>';
    })() : '    <div><dt>Fra</dt><dd>' + talDK(t.fra) + '</dd></div>\n' +
      '    <div><dt>Typisk pris</dt><dd>' + talDK(t.median) + '</dd></div>',
    '  </dl>',
    '</section>',

    samarbejde(f),
    undermenuHTML(data, L.sti),

    erFacet ? [
      '<section class="sektion">',
      '  <h2>Hvad står der på listen</h2>',
      '  <p class="sektion__manchet">Kriteriet er <strong>' + esc(L.facet.kriterium) +
        '</strong>. ' + esc(L.facet.om) + '</p>',
      '</section>'
    ].join("\n") : '',

    L.undersider && L.undersider.length ? [
      '<section class="sektion">',
      '  <h2>' + esc(L.maerke) + '-modeller med flest biler på lager</h2>',
      '  <p class="maerkelinks">' + L.undersider.map(function (u) {
        return '<a href="' + u.sti + '">' + esc(L.maerke + " " + u.navn) + ' (' + u.antal + ')</a>';
      }).join(" ") + '</p>',
      '</section>'
    ].join("\n") : '',

    // 02-10-2026: modellens egne genveje øverst (Sprinter med automatgear, Sprinter
    // ladvogn), og fra en modelgenvej tilbage til alle biler af modellen.
    (function () {
      var alle = data._landing || [];
      if (L.slags === "model") {
        var egne = alle.filter(function (x) {
          return x.slags === "facet" && x.biler.length && x.biler.every(function (b) { return navn(b) === navn(L.biler[0]); });
        });
        return egne.length ? '<section class="sektion"><h2>Genveje for ' + esc(titelNavn(navn(L.biler[0]))) + '</h2><p class="maerkelinks">' +
          egne.map(function (x) { return '<a href="' + x.sti + '">' + esc(x.facet.h1) + ' (' + x.biler.length + ')</a>'; }).join(" ") + '</p></section>' : '';
      }
      if (erFacet && L.biler.length && L.biler.every(function (b) { return navn(b) === navn(L.biler[0]); })) {
        var mo = alle.filter(function (x) { return x.slags === "model" && x.biler.length && navn(x.biler[0]) === navn(L.biler[0]); })[0];
        return mo ? '<section class="sektion"><p class="maerkelinks"><a href="' + mo.sti + '">Alle brugte ' + esc(titelNavn(navn(L.biler[0]))) + ' (' + mo.biler.length + ')</a></p></section>' : '';
      }
      return '';
    })(),

    '<section class="vaelger">',
    '  <h2 class="skjult">Alle ' + t.antal + ' ' + esc(navnet) + ' på lager</h2>',
    '  <div class="brugtgitter">',
    // Biler uden oplyst pris sidst. `a.pris - b.pris` lagde dem foerst, fordi
    // null bliver til 0 - samme fejl som paa oversigten og i filtret.
    L.biler.slice().sort(erFacet && L.facet.sorter ? L.facet.sorter : function (a, b) {
      var x = prisDuer(a) ? a.pris_ekskl_moms_kr : null;
      var y = prisDuer(b) ? b.pris_ekskl_moms_kr : null;
      if (x == null && y == null) return 0;
      if (x == null) return 1;
      if (y == null) return -1;
      return x - y;
    }).map(kortHTML).join("\n"),
    '  </div>',
    '</section>',
    soegBoks(overskrift),

    ind.html,
    ind.faq.length ? brugtFaqHTML(ind.faq, "Spørgsmål om brugt " + (erFacet ? L.facet.h1.replace(/^Brugt /, "") : navnet)) : '',

    omForhandler(f),

    // Facetterne, der ikke staar i menuen, linkes her - saa de stadig kan
    // findes, uden at menuen gentager chipsene.
    (data._landing || []).filter(function (x) {
      return x.slags === "facet" && x.facet.imenu === false && x.sti !== L.sti;
    }).length ? [
      '<section class="sektion">',
      '  <h2>Flere lister</h2>',
      '  <p class="maerkelinks">' + (data._landing || []).filter(function (x) {
        return x.slags === "facet" && x.facet.imenu === false && x.sti !== L.sti;
      }).map(function (x) {
        return '<a href="' + x.sti + '">' + esc(x.facet.h1) + ' (' + x.biler.length + ')</a>';
      }).join(" ") + '</p>',
      '</section>'
    ].join("\n") : '',

    '<section class="sektion">',
    '  <h2>' + (erFacet ? 'Mærkerne på lager' : 'Andre mærker på lager') + '</h2>',
    '  <p class="maerkelinks">' + andre.map(function (x) {
      return '<a href="' + x.sti + '">' + esc(x.maerke) + ' (' + x.biler.length + ')</a>';
    }).join(" ") + ' <a href="/brugte-varebiler/">Se alle ' + data.biler.length + ' biler</a></p>',
    '</section>',
    '<div class="lead-bar"><span class="lead-bar__pris">' + t.antal + ' biler</span>' +
      '<a class="knap knap--primaer" data-lead="soeg" data-bil="' + esc(overskrift) + '" href="/faa-tilbud/">Find bilen til mig</a></div><div class="lead-bar-plads"></div>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}
// ── Oversigten ───────────────────────────────────────────────────────────────

// Spoergsmaal og svar paa oversigten. Det er de spoergsmaal, folk skriver i
// Google ("hvad koster en brugt varebil"), og hvert tal regnes ud af lageret
// ved hver koersel - intet er skrevet ind i haanden. Et svar, der ikke kan
// regnes ud (fx ingen elbiler paa lager), udelades.
function brugtFaq(data) {
  var biler = data.biler, f = data.forhandler, t = noegletal(biler), ud = [];
  function typisk(k) {
    var x = noegletal(biler.filter(function (b) { return b.karrosseri === k; }));
    return medPris(biler.filter(function (b) { return b.karrosseri === k; })).length >= 5 ? x.median : null;
  }
  var kv = typisk("kassevogn"), lv = typisk("ladvogn");
  ud.push({ sp: "Hvad koster en brugt varebil?",
    sv: "På lageret lige nu koster den billigste " + talDK(t.fra) + " kr. og den dyreste " +
      talDK(t.til) + " kr. ekskl. moms. Halvdelen af bilerne koster under " + talDK(t.median) + " kr." +
      (kv ? " En brugt kassevogn koster typisk " + talDK(kv) + " kr." : "") +
      (lv ? " En brugt ladvogn koster typisk " + talDK(lv) + " kr." : "") +
      (kv || lv ? " Typisk betyder her, at halvdelen er billigere og halvdelen dyrere." : "") });
  ud.push({ sp: "Er priserne med eller uden moms?",
    sv: "Uden. Alle priser er kontantpriser ekskl. moms, sådan som forhandleren selv har opgivet dem. " +
      "Vi bekræfter den endelige pris, når du hører nærmere om en bil.",
    link: ["/haandbogen/moms-paa-varebil/", "Læs om moms på varebil"] });
  // Search Console 27-09-2026: "varebil paa hvide plader til salg" og
  // "kassevogn paa papegoejeplader". Lagerdataene siger ikke, hvilke plader
  // den enkelte bil har, saa svaret paastaar intet om bilerne - det siger,
  // hvor man slaar det op, og hvad et skifte koster.
  ud.push({ sp: "Er varebilerne på gule eller hvide plader?",
    sv: "Det står ikke i lagerlisten. Slå nummerpladen op i Motorregistret, " +
      "hvor bilens registrerede anvendelse står, eller spørg forhandleren. Skal en varebil på gule " +
      "plader have hvide plader, koster det en engangsafgift, som Motorstyrelsen beregner for den enkelte bil.",
    link: ["/haandbogen/gule-hvide-eller-papegoejeplader/", "Læs om gule, hvide og papegøjeplader"] });
  if (t.kmMedian != null) {
    var lav = biler.filter(function (b) { return b.km != null && b.km < 100000; }).length;
    ud.push({ sp: "Hvor mange kilometer har de brugte varebiler kørt?",
      sv: "Den typiske bil på lageret har kørt " + talDK(t.kmMedian) + " km. " + lav +
        " af de " + t.antal + " biler har kørt under 100.000 km.",
      link: ["/brugte-varebiler/brugt-varebil-med-lav-kilometerstand/", "Se bilerne under 100.000 km"] });
  }
  var el = biler.filter(function (b) { return b.drivmiddel === "el"; }).length;
  if (el) ud.push({ sp: "Kan man købe en brugt elvarebil?",
    sv: "Ja. " + el + " af de " + t.antal + " biler på lageret kører på el.",
    link: ["/brugte-varebiler/brugt-elvarebil/", "Se de brugte elvarebiler"] });
  var eb = biler.filter(harEngros), et = noegletal(eb);
  if (eb.length) ud.push({ sp: "Hvad betyder „Sælges engros“ på en bil?",
    sv: eb.length + " af de " + t.antal + " biler sælges ifølge forhandleren engros, som de står " +
      "eller til afhentning. Det betyder som regel, at bilen ikke klargøres før salget, og at den " +
      "ofte kun sælges til CVR-nummer." +
      (et.median != null ? " Til gengæld er de billigere: halvdelen koster under " + talDK(et.median) +
        " kr. ekskl. moms mod " + talDK(t.median) + " kr. for hele lageret." : "") +
      " Se bilen, før du handler." });
  if (t.medLeasing) ud.push({ sp: "Kan man lease en brugt varebil?",
    sv: "Forhandleren har lagt et leasingforslag på " + t.medLeasing + " af bilerne; ydelse og restværdi står på bilens side." });
  ud.push({ sp: "Hvem sælger bilerne?",
    sv: "En forhandler, vi samarbejder med. Vi er ikke selv forhandler: bilen købes hos forhandleren, " +
      "og vi formidler kontakten. Tryk „Hør nærmere om denne bil“ på bilens side, så svarer et menneske " +
      "hos os, tjekker at bilen stadig er til salg og aftaler resten med dig." });
  // 02-10-2026: tjeklisten i Håndbogen (moms, totalvægt, miljøzone, syn, pant).
  ud.push({ sp: "Hvad skal jeg tjekke, før jeg køber en brugt varebil?",
    sv: "Momsen på fakturaen, totalvægten, miljøzonereglerne for ældre diesel, synet og pant i Bilbogen på tinglysning.dk.",
    link: ["/haandbogen/koeb-af-brugt-varebil/", "Se hele tjeklisten"] });
  return ud;
}

function brugtFaqHTML(faq, titel) {
  return [
    '<section class="sektion">',
    '  <h2>' + esc(titel || "Spørgsmål om brugte varebiler") + '</h2>',
    '  <dl class="faq">',
    faq.map(function (q) {
      return '    <div><dt>' + esc(q.sp) + '</dt><dd>' + esc(q.sv) +
        (q.link ? ' <a href="' + q.link[0] + '">' + esc(q.link[1]) + '</a>' : '') + '</dd></div>';
    }).join("\n"),
    '  </dl>',
    '</section>'
  ].join("\n");
}

// Mdl. ydelse foerst; biler uden ydelse sidst, efter kontantpris.
// Restvaerdien er lagersystemets (lave) tal. Forhandlerens bilside viser 1,25 gange
// det; forhandleren har 01-10-2026 sagt til ejeren, at det lave tal er det rigtige.
function restvaerdi(b) {
  var l = b.leasing || {};
  if (l.restvaerdi != null) return l.restvaerdi;
  return l._omstridt && l._omstridt.restvaerdi_api != null ? l._omstridt.restvaerdi_api : null;
}

function efterYdelse(a, b) {
  var x = a.leasing && a.leasing.maanedspris ? a.leasing.maanedspris : Infinity;
  var y = b.leasing && b.leasing.maanedspris ? b.leasing.maanedspris : Infinity;
  if (x !== y) return x - y;
  var p = a.pris_ekskl_moms_kr == null ? Infinity : a.pris_ekskl_moms_kr;
  var q = b.pris_ekskl_moms_kr == null ? Infinity : b.pris_ekskl_moms_kr;
  return p - q;
}

// Beskrivelsen i Google (02-10-2026): antal og pris først, så leasing, så hvad man
// får — og at et menneske svarer inden for 24 timer (ejerens løfte).
function salgsBeskrivelse(overskrift, L, t) {
  var leas = L.biler.filter(function (b) { return b.leasing && b.leasing.maanedspris; })
    .map(function (b) { return b.leasing.maanedspris; }).sort(function (a, b) { return a - b; });
  var grund = overskrift + " til salg: " + t.antal + (t.antal === 1 ? " bil" : " biler") +
    " fra " + talDK(t.fra) + " kr. ekskl. moms" +
    (leas.length ? ", " + leas.length + " kan leases fra " + talDK(leas[0]) + " kr./md." : ".");
  // 06-10-2026: Over 158 tegn klipper beskrivelse() den anden sætning væk, og så er
  // beskrivelsen for kort (Ahrefs: 39 brugtsider). Den længste hale, der er plads til, vælges.
  var hale = [" Km, årgang og billeder på hver bil — og svar inden for 24 timer.",
    " Se km, årgang og billeder, og få svar inden for 24 timer.",
    " Svar inden for 24 timer."].filter(function (h) { return (grund + h).length <= 158; })[0] || "";
  return grund + hale;
}

function oversigtHTML(data) {
  var biler = data.biler;
  var f = data.forhandler;

  var chipsHTML = CHIPS.map(function (c) {
    var n = biler.filter(c.passer).length;
    if (n === 0) return "";
    var valgt = c.id === "alle";
    return '<button type="button" class="chip' + (valgt ? " chip--valgt" : "") +
      '" data-chip="' + c.id + '" aria-pressed="' + valgt + '">' + esc(c.navn) +
      '<span class="chip__tal">' + n + '</span></button>';
  }).filter(Boolean).join("\n");

  var priser = medPris(biler).map(function (b) { return b.pris_ekskl_moms_kr; })
    .sort(function (a, b) { return a - b; });
  var billigst = priser[0];
  var median = priser[Math.floor(priser.length / 2)];
  var faq = brugtFaq(data);

  function valg(id, tom, poster) {
    return '<label><span class="skjult">' + esc(tom) + '</span><select id="' + id + '">' +
      '<option value="">' + esc(tom) + '</option>' +
      poster.map(function (p) {
        return '<option value="' + esc(String(p[0])) + '">' + esc(p[1]) + '</option>';
      }).join("") + '</select></label>';
  }

  var schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Brugte varebiler",
    description: "Brugte varebiler til salg, formidlet af Gulplade.dk.",
    url: BASE_URL + "/brugte-varebiler/"
  });

  return [
    hoved(sidetitel("Brugte varebiler og gulpladebiler til salg — " + biler.length + " biler"),
      // 02-10-2026: "brugte varebiler (til salg)" blev vist uden klik.
      beskrivelse("Brugte varebiler og gulpladebiler til salg: " + biler.length + " kassevogne, ladvogne og pickupper fra " +
        talDK(billigst) + " kr. ekskl. moms, " + biler.filter(function (b) { return b.leasing && b.leasing.maanedspris; }).length +
        " kan leases. Km, årgang og billeder på hver bil — og svar inden for 24 timer."),
      BASE_URL + "/brugte-varebiler/",
      samlSchema(schema, krummeSchema([
        ["Forsiden", "/"],
        ["Brugte varebiler", null]
      ]), {
        "@type": "FAQPage",
        mainEntity: faq.map(function (q) {
          return { "@type": "Question", name: q.sp,
                   acceptedAnswer: { "@type": "Answer", text: q.sv } };
        })
      }), null, FORUD),
    header(),
    '<main id="indhold" class="brugt-side">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>'
    + '<li aria-current="page">Brugte varebiler</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Opdateret ' + esc(datoDa(data.sidst_opdateret)) +
    ' · formidles af Gulplade.dk</p>',
    '  <h1>Brugte varebiler til salg</h1>',
    '  <p class="hero-ny__manchet">' + biler.length + ' brugte varebiler og gulpladebiler på lager —' +
    ' kassevogne, ladvogne, værkstedsbiler og pickupper. Alle priser er kontantpris' +
    ' ekskl. moms. Tryk „Hør nærmere“ på en bil, så tjekker vi den og vender tilbage til dig.</p>',
    '  <dl class="hero-stats">',
    '    <div><dt>Biler</dt><dd>' + biler.length + '</dd></div>',
    '    <div><dt>Fra</dt><dd>' + talDK(billigst) + '</dd></div>',
    '    <div><dt>Typisk pris</dt><dd>' + talDK(median) + '</dd></div>',
    '  </dl>',
    '</section>',

    // To linjer: typerne, og saa soegning, filtre og sortering. Fra 01-10-2026
    // staar hverken formidlingslinjen eller undermenuen her (brugerens valg);
    // undermenuens lister linkes i stedet fra "Gå direkte til" laengere nede.
    '<section class="vaelger" id="biler">',
    '  <div class="chips" role="group" aria-label="Filtrér efter type">',
    chipsHTML,
    '  </div>',
    '  <div class="vaerktoej">',
    '    <div class="filtre">',
    '      <label class="filtre__sog"><span class="skjult">Søg mærke eller model</span>',
    '        <input type="search" id="fSog" placeholder="Søg mærke eller model" autocomplete="off"></label>',
    valg("fPris", "Pris", [[75000, "under 75.000"], [125000, "under 125.000"],
                           [200000, "under 200.000"], [300000, "under 300.000"]]),
    valg("fKm", "Kilometer", [[50000, "under 50.000"], [100000, "under 100.000"],
                              [150000, "under 150.000"], [250000, "under 250.000"]]),
    valg("fAar", "Årgang", [[2024, "2024 eller nyere"], [2022, "2022 eller nyere"],
                            [2020, "2020 eller nyere"], [2018, "2018 eller nyere"]]),
    '      <label class="sorter"><span class="skjult">Sortér</span><select id="fSorter">',
    '        <option value="leasing" selected>Mdl. ydelse, laveste først</option>',
    '        <option value="pris">Kontantpris, laveste først</option>',
    '        <option value="pris-ned">Kontantpris, højeste først</option>',
    '        <option value="km">Kilometer, laveste først</option>',
    '        <option value="aar">Årgang, nyeste først</option>',
    '      </select></label>',
    '    </div>',
    '  </div>',
    '  <h2 class="skjult">Alle ' + biler.length + ' brugte varebiler på lager</h2>',
    '  <p class="vaelger__status"><span id="antal">Viser ' + biler.length + ' biler</span></p>',
    // Kun naar der faktisk er biler, hvis pris vi ikke gengiver. Ellers
    // staar der en forklaring paa noget, laeseren ikke har set.

    '  <div class="brugtgitter" id="gitter">',
    biler.slice().sort(efterYdelse).map(kortHTML).join("\n"),
    '  </div>',
    '  <p class="vaelger__status" id="tom" hidden>Ingen biler passer på de valg. Ryd et filter, eller ' +
      '<a href="/faa-tilbud/" data-lead="soeg" data-bil="Brugt varebil">lad os finde bilen til dig</a>.</p>',
    '</section>',
    soegBoks("Brugt varebil"),

    (data._landing || []).filter(function (x) { return x.slags === "maerke"; }).length ? [
      '<section class="sektion">',
      '  <h2>Gå direkte til</h2>',
      '  <p class="maerkelinks">' +
      (data._landing || []).filter(function (x) { return x.slags === "facet"; })
        .map(function (x) {
          return '<a href="' + x.sti + '">' + esc(x.facet.menu) + ' (' + x.biler.length + ')</a>';
        }).join(" ") + '</p>',
      '  <p class="maerkelinks">' +
      (data._landing || []).filter(function (x) { return x.slags === "maerke"; })
        .sort(function (a, b) { return b.biler.length - a.biler.length; })
        .map(function (x) {
          return '<a href="' + x.sti + '">' + esc(x.maerke) + ' (' + x.biler.length + ')</a>';
        }).join(" ") + '</p>',
      // 02-10-2026: de mest solgte modeller - folk søger "brugt sprinter", ikke kun mærket.
      '  <p class="maerkelinks">' +
      (data._landing || []).filter(function (x) { return x.slags === "model" && x.biler.length >= 5; })
        .sort(function (a, b) { return b.biler.length - a.biler.length; }).slice(0, 12)
        .map(function (x) {
          return '<a href="' + x.sti + '">' + esc(titelNavn(x.maerke + " " + x.model)) + ' (' + x.biler.length + ')</a>';
        }).join(" ") + '</p>',
      '</section>'
    ].join("\n") : '',

    brugtFaqHTML(faq),

    omForhandler(f),

    '<section class="sektion">',
    '  <h2>Om listen</h2>',
    // Ikke data.note: den navngav forhandleren. Forhandleren vises ikke (30-09-2026).
    '  <p>Lageret er hentet fra forhandlerens lagerdatabase den ' + esc(datoLang(data.sidst_opdateret)) +
    '. Alle tal er forhandlerens. Biler bliver solgt løbende, så en bil kan være væk, før listen er opdateret' +
    ' — tryk „Hør nærmere“, så tjekker vi den.</p>',
    '  <p>Vi gengiver forhandlerens tal, som de står. Vi lægger ikke vores egne tal oveni,' +
    ' og vi regner ikke en samlet ejeromkostning ud — den afhænger af, hvor meget du kører,' +
    ' hvad du forsikrer for, og hvad bilen skal bruges til.</p>',
    '  <p><strong>Leasingforslagene er forhandlerens egne</strong> og vises kun, hvor de har' +
    ' oplyst dem: ydelse, løbetid, udbetaling og restværdi, alle ekskl. moms.</p>',
    '</section>',
    '<div class="lead-bar"><span class="lead-bar__pris">' + biler.length + ' biler</span>' +
      '<a class="knap knap--primaer" data-lead="soeg" data-bil="Brugt varebil" href="/faa-tilbud/">Find bilen til mig</a></div><div class="lead-bar-plads"></div>',

    '</main>',
    footer(),
    '<script>', oversigtScript(), '</script>',
    '</body></html>'
  ].join("\n");
}

// ── Filteret i browseren ─────────────────────────────────────────────────────

function oversigtScript() {
  return [
    '(function () {',
    '  var gitter = document.getElementById("gitter");',
    '  if (!gitter) return;',
    '  var kort = [].slice.call(gitter.querySelectorAll(".brugtkort"));',
    '  var antal = document.getElementById("antal");',
    '  var tom = document.getElementById("tom");',
    '  var valgtChip = "alle";',
    '',
    '  var CHIP = {',
    '    alle: function () { return true; },',
    '    kassevogn: function (d) { return d.karrosseri === "kassevogn"; },',
    '    ladvogn: function (d) { return d.karrosseri === "ladvogn"; },',
    '    pickup: function (d) { return d.karrosseri === "pickup"; },',
    '    vaerksted: function (d) { return d.indretning; },',
    '    lift: function (d) { return d.lift; },',
    '    kran: function (d) { return d.kran; },',
    '    koel: function (d) { return d.opbygning.indexOf("Kølebil") >= 0; }',
    '  };',
    '',
    '  function t(v) { return v === "" || v == null ? null : Number(v); }',
    '',
    '  var data = kort.map(function (k) {',
    '    return {',
    '      el: k,',
    '      maerke: k.dataset.maerke,',
    '      karrosseri: k.dataset.karrosseri,',
    '      opbygning: (k.dataset.opbygning || "").split("|"),',
    '      indretning: k.dataset.indretning === "1",',
    '      lift: k.dataset.lift === "1",',
    '      kran: k.dataset.kran === "1",',
    '      drivmiddel: k.dataset.drivmiddel,',
    '      gear: k.dataset.gear || "",',
    '      aargang: t(k.dataset.aargang),',
    '      km: t(k.dataset.km),',
    '      pris: t(k.dataset.pris),',
    '      leasing: k.dataset.leasing,',
    '      sog: k.dataset.sog',
    '    };',
    '  });',
    '',
    '  var f = {',
    '    sog: document.getElementById("fSog"),',
    '    pris: document.getElementById("fPris"),',
    '    km: document.getElementById("fKm"),',
    '    aar: document.getElementById("fAar"),',
    '    sorter: document.getElementById("fSorter")',
    '  };',
    '',
    '  function opdater() {',
    '    var q = (f.sog.value || "").trim().toLowerCase();',

    '    var maksPris = t(f.pris.value);',
    '    var maksKm = t(f.km.value);',
    '    var minAar = t(f.aar.value);',
    '    var passer = CHIP[valgtChip] || CHIP.alle;',
    '    var vist = 0;',
    '',
    '    var synlige = data.filter(function (d) {',
    '      if (!passer(d)) return false;',
    '      if (q && d.sog.indexOf(q) < 0) return false;',

    '      // En bil uden oplyst pris kan ikke opfylde et prisloft. Uden',
    '      // null-tjekket blev den til 0 og slap igennem som billig.',
    '      if (maksPris != null && !(d.pris != null && d.pris < maksPris)) return false;',
    '      if (maksKm != null && !(d.km != null && d.km < maksKm)) return false;',
    '      if (minAar != null && !(d.aargang != null && d.aargang >= minAar)) return false;',
    '      return true;',
    '    });',
    '',
    '    var s = f.sorter.value;',
    '    synlige.sort(function (a, b) {',
    '      // Ukendt pris ligger sidst i begge retninger. "Mangler" er',
    '      // hverken billigst eller dyrest.',
    '      if (s === "pris" || s === "pris-ned") {',
    '        if (a.pris == null && b.pris == null) return 0;',
    '        if (a.pris == null) return 1;',
    '        if (b.pris == null) return -1;',
    '        return s === "pris" ? a.pris - b.pris : b.pris - a.pris;',
    '      }',
    '      if (s === "km") return (a.km == null ? Infinity : a.km) - (b.km == null ? Infinity : b.km);',
    '      if (s === "aar") return (b.aargang || 0) - (a.aargang || 0);',
    '      if (s === "leasing") {',
    '        var x = a.leasing === "" ? Infinity : Number(a.leasing);',
    '        var y = b.leasing === "" ? Infinity : Number(b.leasing);',
    '        if (x !== y) return x - y;',
    '        return (a.pris == null ? Infinity : a.pris) - (b.pris == null ? Infinity : b.pris);',
    '      }',
    '      return 0;',
    '    });',
    '',
    '    data.forEach(function (d) { d.el.hidden = true; });',
    '    synlige.forEach(function (d) { d.el.hidden = false; gitter.appendChild(d.el); vist++; });',
    '',
    '    // Naar der filtreres paa pris, skal det staa, at nogle biler er',
    '    // holdt ude, fordi prisen mangler - ikke fordi de er for dyre.',
    '    var udenPris = maksPris != null',
    '      ? data.filter(function (d) { return d.pris == null; }).length : 0;',
    '    antal.textContent = (vist === 1 ? "Viser 1 bil" : "Viser " + vist + " biler")',
    '      + (udenPris ? " \u2014 " + udenPris + (udenPris === 1 ? " bil" : " biler")',
    '         + " uden oplyst pris er ikke med" : "");',
    '    tom.hidden = vist > 0;',
    '  }',
    '',
    '  [].slice.call(document.querySelectorAll("[data-chip]")).forEach(function (b) {',
    '    b.addEventListener("click", function () {',
    '      valgtChip = b.dataset.chip;',
    '      [].slice.call(document.querySelectorAll("[data-chip]")).forEach(function (o) {',
    '        var v = o === b;',
    '        o.classList.toggle("chip--valgt", v);',
    '        o.setAttribute("aria-pressed", String(v));',
    '      });',
    '      opdater();',
    '    });',
    '  });',
    '',
    '  Object.keys(f).forEach(function (k) {',
    '    f[k].addEventListener(f[k].tagName === "SELECT" ? "change" : "input", opdater);',
    '  });',
    '',
    '  opdater();',
    '})();'
  ].join("\n");
}

// ── Bilsiden ─────────────────────────────────────────────────────────────────

// Data staar med lille begyndelsesbogstav, fordi vaerdierne ogsaa bruges som
// filternoegler. I tabellen skal de laeses, ikke sammenlignes.
function stort(v) {
  return v == null || v === "" ? v : String(v).charAt(0).toUpperCase() + String(v).slice(1);
}

function specRaekker(b) {
  var r = [];
  function p(navn, vaerdi) { if (vaerdi != null && vaerdi !== "") r.push([navn, vaerdi]); }
  p("Årgang", b.aargang);
  p("1. registrering", regDa(b.foerste_reg));
  p("Kilometer", b.km == null ? null : talDK(b.km) + " km");
  p("Drivmiddel", stort(b.drivmiddel));
  p("Gear", b.gear);
  p("Hestekræfter", b.hk == null ? null : b.hk + " hk");
  p("Forbrug", b.km_pr_l == null ? null : kommaTal(b.km_pr_l) + " km/l");
  p("CO₂", b.co2_g_pr_km == null ? null : talDK(b.co2_g_pr_km) + " g/km");
  p("Farve", b.farve);
  p("Døre", b.doere);
  p("Trækvægt med bremser", b.anhaengervaegt_kg == null ? null : talDK(b.anhaengervaegt_kg) + " kg");
  p("Trækvægt uden bremser", b.anhaengervaegt_u_bremser_kg == null ? null : talDK(b.anhaengervaegt_u_bremser_kg) + " kg");
  if (b.ejerafgift) {
    p("Grøn ejerafgift", talDK(b.ejerafgift.kr) + " kr." +
      (b.ejerafgift.maaneder ? " pr. " + (b.ejerafgift.maaneder === 12 ? "år"
        : b.ejerafgift.maaneder + " mdr.") : ""));
  }
  p("Karrosseri", KARROSSERI_NAVN[b.karrosseri] || b.karrosseri);
  var opb = (b.opbygning || []).filter(function (o) { return o.toLowerCase() !== String(KARROSSERI_NAVN[b.karrosseri] || b.karrosseri || "").toLowerCase(); });
  if (opb.length) p("Opbygning", opb.join(", "));
  return r;
}

// Leddene over bilen i krummestien. De tilfoejes kun, hvis siden faktisk
// er skrevet - et maerke med tre biler faar ingen side, og saa skal der
// heller ikke linkes til den.
function krummeLedFor(b, data) {
  var ud = [];
  (data._landing || []).forEach(function (L) {
    if (L.slags === "maerke" && L.maerke === b.maerke) ud.push([L.maerke, L.sti]);
  });
  (data._landing || []).forEach(function (L) {
    if (L.slags === "model" && L.maerke === b.maerke && L.model === b.model)
      ud.push([L.model, L.sti]);
  });
  return ud;
}

// "Kometvej 1, 8700 Horsens" -> PostalAddress med felter. Google laeste
// den som en adresse uden gade, postnummer og by. Passer formatet ikke,
// sendes teksten som den er.
function postadresse(a) {
  var m = /^(.+?),\s*(\d{4})\s+(.+)$/.exec(String(a || "").trim());
  if (!m) return a;
  return { "@type": "PostalAddress", streetAddress: m[1], postalCode: m[2],
           addressLocality: m[3], addressCountry: "DK" };
}

// ── Sammenlignet med lageret ────────────────────────────────────────────────
//
// Beskrivelse, specifikationer og udstyr staar ordret paa forhandlerens egen
// side, som er kanonisk og aaben for indeksering (tjekket 27-09-2026). Uden
// noget eget ville Google med god grund vaelge deres side og lade vores ligge.
//
// Det her afsnit kan kun vi skrive, fordi vi har hele lageret og
// leasingtabellen: hvor bilen ligger i pris og kilometer mod de andre af samme
// model, de naermeste alternativer, og hvad samme model koster ny i leasing.
// Hvert tal regnes ud ved hver koersel. "Typisk" er median, og det staar der.
// Er der for faa at sammenligne med, udelades saetningen - aldrig et tal
// bygget paa to biler.

var MIN_SAMMENLIGN = 3;
var LEASING = (function () {
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler || [];
  } catch (e) { return []; }
})();

function sidesSlug(s) {
  return String(s || "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ë/g, "e")
    .replace(/[./]+/g, "-")
    .replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function normMaerke(m) { return /^vw$/i.test(m) ? "volkswagen" : sidesSlug(m); }
function normModel(m) { return String(m || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }
function median(tal) {
  var s = tal.slice().sort(function (a, b) { return a - b; });
  return s.length ? s[Math.floor(s.length / 2)] : null;
}
function modelNoegle(b) { return normMaerke(b.maerke) + "|" + normModel(b.model); }

// Kilometer om aaret fra foerste registrering til den dag, listen blev hentet.
// Under et aar gammel giver tallet ingen mening og udelades.
function kmPrAar(b) {
  if (b.km == null || !b.foerste_reg || !b.kilde_dato) return null;
  var fra = new Date(b.foerste_reg + (b.foerste_reg.length === 7 ? "-01" : ""));
  var til = new Date(b.kilde_dato);
  var aar = (til - fra) / (365.25 * 24 * 3600 * 1000);
  if (!(aar >= 1)) return null;
  return b.km / aar;
}
function rundTusind(v) { return Math.round(v / 1000) * 1000; }

// Samme model ny i erhvervsleasing. Kun et praecist navnematch - en brugt
// Toyota ProAce diesel er ikke en Proace Electric, og en Transit er ikke en
// Transit Custom (det foerste forsoeg matchede paa begyndelsen af navnet og
// koblede alle 23 Transit til Custom). Findes modellen i flere
// udgaver (Master og Master Chassis), vaelges den med samme karrosseri.
function leasingModel(b) {
  var kand = LEASING.filter(function (v) {
    return normMaerke(v.maerke) === normMaerke(b.maerke) &&
      (v.tilbud || []).length &&
      (normModel(v.model) === normModel(b.model) ||
       /^(chassis|ladbil)$/.test(normModel(v.model).slice(normModel(b.model).length)) &&
         normModel(v.model).indexOf(normModel(b.model)) === 0);
  });
  if (!kand.length) return null;
  var v = kand.filter(function (x) { return x.karrosseri === b.karrosseri; })[0] ||
    kand.filter(function (x) { return normModel(x.model) === normModel(b.model); })[0];
  if (!v) return null;
  var sti = "/varebiler/" + sidesSlug(v.maerke) + "/" + sidesSlug(v.model) + "/";
  if (!fs.existsSync(path.join(__dirname, sti, "index.html"))) return null;
  var ydelser = v.tilbud.map(function (t) { return t.maanedspris; })
    .filter(function (x) { return x > 0; });
  return { navn: v.maerke + " " + v.model, sti: sti, antal: v.tilbud.length,
           fra: ydelser.length ? Math.min.apply(null, ydelser) : null };
}

function sammenlignHTML(b, data) {
  var navnet = navn(b);
  var alleSamme = data.biler.filter(function (x) {
    return x.id !== b.id && modelNoegle(x) === modelNoegle(b);
  });
  // En Sprinter fra 2011 skal ikke maales mod en fra 2024. Foerst aargange
  // inden for to aar; er der for faa, hele modellen - og saa staar det der.
  var naer = b.aargang ? alleSamme.filter(function (x) {
    return x.aargang && Math.abs(x.aargang - b.aargang) <= 2;
  }) : [];
  var brugNaer = medPris(naer).length >= MIN_SAMMENLIGN;
  var samme = brugNaer ? naer : alleSamme;
  var hvilke = esc(navnet) + (brugNaer
    ? ' fra ' + (b.aargang - 2) + '–' + (b.aargang + 2) : '');
  var sammePris = medPris(samme);
  var linjer = [];

  if (prisDuer(b) && sammePris.length >= MIN_SAMMENLIGN) {
    var priser = sammePris.map(function (x) { return x.pris_ekskl_moms_kr; });
    var med = median(priser);
    var billigere = priser.filter(function (p) { return p < b.pris_ekskl_moms_kr; }).length;
    var forskel = b.pris_ekskl_moms_kr - med;
    linjer.push('<p>Der er ' + (samme.length + 1) + ' ' + hvilke + ' på lageret. De ' +
      sammePris.length + ' andre med en pris koster fra ' + kr(Math.min.apply(null, priser)) +
      ' til ' + kr(Math.max.apply(null, priser)) + ', typisk ' + kr(med) + ' ekskl. moms. ' +
      (billigere === 0 ? 'Denne er den billigste af dem.'
        : billigere === sammePris.length ? 'Denne er den dyreste af dem.'
        : billigere + ' af dem er billigere end denne.') +
      (Math.abs(forskel) >= 1000
        ? ' Den ligger ' + kr(Math.abs(forskel)) + (forskel > 0 ? ' over' : ' under') + ' den typiske pris.'
        : '') + '</p>');
    linjer.push('<p class="kilde">Årgang, kilometer, opbygning og udstyr forklarer det meste af' +
      ' forskellen. Prisen alene siger ikke, om bilen er et godt køb.' +
      (harEngros(b) ? ' Denne sælges engros, og det trækker typisk prisen ned.' : '') + '</p>');
  }

  var egenKm = kmPrAar(b);
  var andreKm = samme.map(kmPrAar).filter(function (v) { return v != null; });
  if (egenKm != null && andreKm.length >= MIN_SAMMENLIGN) {
    var medKm = median(andreKm);
    linjer.push('<p>Bilen har kørt omkring ' + talDK(rundTusind(egenKm)) + ' km om året siden' +
      ' første registrering. De andre ' + hvilke + ' på lageret har typisk kørt ' +
      talDK(rundTusind(medKm)) + ' km om året.</p>');
  }

  // De tre naermeste i pris af samme model. Er der ikke tre, fyldes op med
  // samme karrosseri, saa der altid er et sted at gaa videre hen.
  var alt = [];
  if (prisDuer(b)) {
    var afstand = function (x) { return Math.abs(x.pris_ekskl_moms_kr - b.pris_ekskl_moms_kr); };
    alt = sammePris.slice().sort(function (x, y) { return afstand(x) - afstand(y); }).slice(0, 3);
    if (alt.length < 3) {
      var ids = alt.map(function (x) { return x.id; });
      alt = alt.concat(medPris(data.biler).filter(function (x) {
        return x.id !== b.id && ids.indexOf(x.id) < 0 && x.karrosseri === b.karrosseri;
      }).sort(function (x, y) { return afstand(x) - afstand(y); }).slice(0, 3 - alt.length));
    }
  }

  var leas = leasingModel(b);
  if (!linjer.length && !alt.length && !leas) return '';

  return [
    '<section class="sektion">',
    '  <h2>Sammenlignet med lageret</h2>',
    linjer.join("\n"),
    alt.length ? [
      '  <h3 class="naerliste__titel">Tæt på i pris</h3>',
      '  <ul class="naerliste">',
      alt.map(function (x) {
        return '    <li><a href="/brugte-varebiler/' + x.slug + '/">' + esc(navn(x)) +
          (x.aargang ? ' ' + esc(x.aargang) : '') +
          (x.km != null ? ', ' + talDK(x.km) + ' km' : '') + '</a> — ' +
          kr(x.pris_ekskl_moms_kr) + ' ekskl. moms</li>';
      }).join("\n"),
      '  </ul>'
    ].join("\n") : '',
    leas ? '  <p>Ny i stedet? Vi sammenligner ' + leas.antal + ' ' +
      'erhvervsleasingtilbud' + ' på en ny ' +
      '<a href="' + leas.sti + '">' + esc(leas.navn) + '</a>' +
      (leas.fra ? '. Ydelsen starter ved ' + kr(leas.fra) + ' om måneden ekskl. moms før udbetaling' : '') +
      '.</p>' : '',
    '  <p class="kilde">Vi har regnet tallene ud fra lageret den ' +
      esc(datoLang(b.kilde_dato)) + '. Typisk betyder, at halvdelen er billigere og halvdelen dyrere.</p>',
    '</section>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// En dieselvarebil registreret foer 1. september 2016 maa kun koere i
// miljoezonerne med Euronorm 5 eller et partikelfilter, der er registreret i
// Koeretoejsregisteret (miljoezoner.dk, laest 27-09-2026). Euronormen staar
// ikke i forhandlerens data, saa noten siger, hvor man slaar den op - den
// paastaar ikke, at bilen maa eller ikke maa.
function miljoezoneHTML(b) {
  if (b.drivmiddel !== "diesel" || !b.foerste_reg || b.foerste_reg >= "2016-09") return '';
  var filter = (b.udstyr || []).indexOf("Diesel partikel filter") >= 0;
  return [
    '<section class="sektion">',
    '  <h2>Miljøzonerne</h2>',
    '  <p>Bilen er registreret første gang i ' + esc(regDa(b.foerste_reg)) + ', altså før 1. september 2016. ' +
      'En dieselvarebil fra før den dato må kun køre i miljøzonerne i København, Frederiksberg, Aarhus, ' +
      'Odense og Aalborg, hvis den er mindst Euronorm 5 eller har et partikelfilter, der er registreret i ' +
      'Køretøjsregisteret.</p>',
    '  <p>' + (filter
      ? 'Forhandlerens udstyrsliste nævner partikelfilter, men det er registreringen, der tæller ved kontrol. '
      : 'Forhandlerens oplysninger siger ikke, om bilen opfylder kravet. ') +
      'Slå nummerpladen op i Motorregistret, før bilen skal køre i byerne. ' +
      '<a href="/haandbogen/miljoezoner-og-varebiler/">Læs reglerne for varebiler i miljøzoner</a>.</p>',
    '</section>'
  ].join("\n");
}

// 02-10-2026: producentens batterigaranti på en brugt elvarebil (fra garanti.json).
// Brugt-lageret skriver "Renault Master" om både diesel og el, så elversionen
// slås op under de navne, producenterne bruger til elmodellen.
var GARANTI = null;
function batteriHTML(b) {
  if (b.drivmiddel !== "el") return '';
  if (!GARANTI) { try { GARANTI = JSON.parse(fs.readFileSync(path.join(__dirname, "garanti.json"), "utf8")).modeller || {}; } catch (e) { GARANTI = {}; } }
  var grund = (b.maerke.replace(/^Mercedes-Benz$/, "mercedes") + " " + b.model).toLowerCase()
    .replace(/ë/g, "e").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  var id = [grund + "-e-tech", grund + "-electric", grund].filter(function (k) { return GARANTI[k] && GARANTI[k].batteri; })[0];
  if (!id) return '';
  var g = GARANTI[id], bt = g.batteri;
  return [
    '<section class="sektion">',
    '  <h2>Batteriet</h2>',
    '  <p>Producenten giver ' + bt.aar + ' år' + (bt.km ? ' eller ' + talDK(bt.km) + ' km' : '') + ' garanti på drivbatteriet på en ny ' + esc(navn(b)) +
      (bt.soh_pct ? ', med mindst ' + bt.soh_pct + ' % af den oprindelige kapacitet' : '') + '. Bilen er indregistreret første gang ' +
      esc(String(b.foerste_reg || b.aargang || '').replace(/^(\d{4})-(\d{2})$/, function (m, a, md) {
        return ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"][Number(md) - 1] + " " + a;
      })) + (b.km != null ? ' og har kørt ' + talDK(b.km) + ' km' : '') +
      '. Spørg forhandleren, hvor meget af garantien der er tilbage, og om den følger bilen ved salg.</p>',
    g.kilde && g.kilde.url ? '  <p class="kilde">Kilde: <a href="' + esc(g.kilde.url) + '" rel="nofollow noopener" target="_blank">producentens garantivilkår</a>.</p>' : '',
    '</section>'
  ].filter(Boolean).join("\n");
}

// 02-10-2026: andre biler af samme model i nærmeste prisklasse, og de genveje,
// bilen selv hører under. Bilsiderne var blindgyder for både læsere og Google.
function lignendeHTML(b, data) {
  var p = b.pris_ekskl_moms_kr || 0;
  var samme = data.biler.filter(function (x) {
    return x.id !== b.id && navn(x) === navn(b) && prisDuer(x) && x.pris_ekskl_moms_kr != null;
  }).sort(function (x, y) {
    return Math.abs(x.pris_ekskl_moms_kr - p) - Math.abs(y.pris_ekskl_moms_kr - p);
  }).slice(0, 5).sort(function (x, y) { return x.pris_ekskl_moms_kr - y.pris_ekskl_moms_kr; });
  var genveje = FACETTER.filter(function (F) {
    return F.hvor(b) && data.biler.filter(F.hvor).length >= MIN_FACET;
  });
  var model = krummeLedFor(b, data).slice(-1)[0];
  if (!samme.length && !genveje.length) return '';
  return [
    '<section class="sektion">',
    '  <h2>Lignende brugte biler</h2>',
    samme.length ? '  <p class="sektion__manchet">Her er andre brugte ' + esc(navn(b)) + ' i samme prisklasse.</p>' +
      '<div class="sbs__rul"><table class="sbs sbs--tett"><thead><tr><th>Bil</th><th>Årgang</th><th>Km</th><th>Pris ekskl. moms</th></tr></thead><tbody>' +
      samme.map(function (x) {
        return '<tr><th scope="row"><a href="/brugte-varebiler/' + esc(x.slug) + '/">' + esc(navn(x)) + '</a><small>' + esc(x.variant || '') + '</small></th>' +
          '<td>' + esc(x.aargang || '—') + '</td><td>' + (x.km == null ? '—' : talDK(x.km)) + '</td><td>' + kr(x.pris_ekskl_moms_kr) + '</td></tr>';
      }).join('') + '</tbody></table></div>' : '',
    '  <p class="maerkelinks">' +
      (model ? '<a href="' + model[1] + '">Alle brugte ' + esc(navn(b)) + '</a>' : '') +
      genveje.map(function (F) {
        var n = data.biler.filter(F.hvor).length;
        return '<a href="/brugte-varebiler/' + F.slug + '/">' + esc(F.h1) + ' (' + n + ')</a>';
      }).join('') + '</p>',
    '</section>'
  ].filter(Boolean).join("\n");
}

function bilSideHTML(b, data) {
  var f = data.forhandler;
  var titel = navn(b) + " " + b.variant;
  var url = BASE_URL + "/brugte-varebiler/" + b.slug + "/";
  var billeder = (b.billeder || []).slice(0, 12);

  // Uden en pris, vi tror paa, sendes der ingen Car-data ud. Et Offer uden
  // pris er en fejl i Search Consoles rapport over saelgeropslag, og et
  // Car uden Offer er det ogsaa - saa hellere intet end en halv pris.
  var schema = !prisDuer(b) ? null : JSON.stringify({
    "@context": "https://schema.org",
    // Product + Car: Google laeser kun "Product" som et produkt, der kan
    // vises med pris i soegeresultatet - Car alene blev ignoreret i Googles
    // test. Valgt 25-09-2026 med viden om, at Google viser prisen uden
    // "ekskl. moms"; det staar i priceSpecification og paa siden.
    "@type": ["Product", "Car"],
    name: titel,
    sku: String(b.id),
    description: DESC_ANTAL[bilDesc(b, "")] > 1 ? bilDesc(b, " (lagernr. " + b.id + ")") : bilDesc(b, ""),
    brand: { "@type": "Brand", name: b.maerke },
    model: b.model,
    vehicleModelDate: b.aargang ? String(b.aargang) : undefined,
    mileageFromOdometer: b.km == null ? undefined
      : { "@type": "QuantitativeValue", value: b.km, unitCode: "KMT" },
    fuelType: b.drivmiddel,
    vehicleTransmission: b.gear,
    url: url,
    itemCondition: "https://schema.org/UsedCondition",
    image: billeder.length ? billeder.slice(0, 3).map(function (id) {
      return BILLED_CDN + id + "/1280x0"; }) : undefined,
    offers: {
      "@type": "Offer",
      price: b.pris_ekskl_moms_kr,
      priceCurrency: "DKK",
      priceSpecification: { "@type": "UnitPriceSpecification",
        price: b.pris_ekskl_moms_kr, priceCurrency: "DKK",
        valueAddedTaxIncluded: false },
      itemCondition: "https://schema.org/UsedCondition",
      availability: "https://schema.org/InStock",

      url: url
    }
  }, function (k, v) { return v === undefined ? undefined : v; });

  var spec = specRaekker(b);

  return [
    // Maerke, model, aargang og pris. Aargang skiller to ens biler ad - og det
    // er ogsaa det, folk skriver, naar de soeger: "brugt sprinter 2023".
    hoved(
      sidetitel(TITLER[b.id] || navn(b)),
      beskrivelse(DESC_ANTAL[bilDesc(b, "")] > 1
        ? bilDesc(b, " (lagernr. " + b.id + ")") : bilDesc(b, "")),
      url,
      samlSchema(schema, krummeSchema(
        [["Forsiden", "/"], ["Brugte varebiler", "/brugte-varebiler/"]]
          .concat(krummeLedFor(b, data))
          .concat([[navn(b), null]]))),
      billeder.length ? BILLED_CDN + billeder[0] + "/1200x630/cover" : null,
      FORUD.concat(billeder.length
        ? ['<link rel="preload" as="image" href="' +
           esc(BILLED_CDN + billeder[0] + "/1280x0") + '">']
        : [])),
    header(),
    '<main id="indhold" class="brugt-side">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>'
    + '<li><a href="/brugte-varebiler/">Brugte varebiler</a></li>'
    + krummeLedFor(b, data).map(function (k) {
        return '<li><a href="' + k[1] + '">' + esc(k[0]) + '</a></li>';
      }).join("")
    + '<li aria-current="page">' + esc(navn(b)) + '</li></ol></nav>',

    '<section class="bil-hero">',
    billeder.length
      ? '  <div class="bil-hero__billede"><img src="' + esc(BILLED_CDN + billeder[0] + "/1280x0") +
        '" alt="' + esc("Brugt " + titel) + '" width="1280" height="960" fetchpriority="high" decoding="async"></div>'
      : '',
    '  <div class="bil-hero__tekst">',
    '    <p class="hero-ny__over">Brugt · ' + esc(KARROSSERI_NAVN[b.karrosseri] || b.karrosseri || "varebil") +
    '</p>',
    '    <h1>Brugt ' + esc(navn(b)) + (b.aargang ? ' (' + esc(b.aargang) + ')' : '') + '</h1>',
    '    <p class="bil-hero__variant">' + esc(b.variant) + '</p>',
    '    <dl class="noegletal">',
    '      <div><dt>Kontant ekskl. moms</dt><dd>' +
    (prisDuer(b) ? kr(b.pris_ekskl_moms_kr) : 'under afklaring') + '</dd></div>',
    b.leasing ? '      <div><dt>Leasing fra</dt><dd>' + talDK(b.leasing.maanedspris) + ' kr./md.</dd></div>' : '',
    '      <div><dt>Kilometer</dt><dd>' + (b.km == null ? "—" : talDK(b.km)) + '</dd></div>',
    '      <div><dt>Årgang</dt><dd>' + esc(b.aargang || "—") + '</dd></div>',
    // Fire felter i gitteret: uden leasingpris står gearkassen på den plads.
    b.leasing ? '' : '      <div><dt>Gear</dt><dd>' + esc(b.gear || "—") + '</dd></div>',
    '    </dl>',
    engrosNote(b),
    '    <p class="bil-hero__knapper">' + handlingsKnapper(b, data) + '</p>',
    tilbudsNote(b, data),
    '  </div>',
    '</section>',

    // Formidlingslinjen er fjernet fra bilsiderne 01-10-2026 (ejerens valg);
    // footeren oplyser stadig samarbejdet.

    b._pris_tvivl ? [
      '<section class="sektion">',
      '  <h2>Prisen på denne bil kan ikke passe</h2>',
      '  <p class="note">' + esc(b._pris_tvivl) + '</p>',
      '  <p>Vi kunne have skrevet tallet af og ladet det stå. Men så ville bilen ligge'
      + ' øverst på hver eneste liste over billige varebiler, og det ville være en'
      + ' anbefaling bygget på en tastefejl. Bilen er her stadig — kun tallet mangler.</p>',
      '</section>'
    ].join("\n") : '',

    b.leasing ? [
      '<section class="sektion">',
      '  <h2>Forhandlerens leasingforslag</h2>',
      '  <dl class="specs-grid">',
      '    <div><dt>Type</dt><dd>Finansiel erhvervsleasing</dd></div>',
      '    <div><dt>Månedlig ydelse</dt><dd>' + talDK(b.leasing.maanedspris) + ' kr. ekskl. moms</dd></div>',
      b.leasing.loebetid_mdr ? '    <div><dt>Løbetid</dt><dd>' + b.leasing.loebetid_mdr + ' måneder</dd></div>' : '',
      b.leasing.udbetaling != null ? '    <div><dt>Udbetaling</dt><dd>' + kr(b.leasing.udbetaling) + ' ekskl. moms</dd></div>' : '',
      restvaerdi(b) != null ? '    <div><dt>Restværdi</dt><dd>' + kr(restvaerdi(b)) + ' ekskl. moms</dd></div>' : '',
      '  </dl>',
      '</section>'
    ].join("\n") : '',

    billeder.length > 1 ? [
      '<section class="sektion">',
      '  <h2>Billeder</h2>',
      '  <div class="billedgitter">',
      billeder.slice(1).map(function (id, i) {
        return '    <img src="' + esc(BILLED_CDN + id + "/700x0") + '" alt="' +
          esc("Brugt " + titel + ", billede " + (i + 2) + " af " + billeder.length) +
          '" loading="lazy" decoding="async" width="700" height="525">';
      }).join("\n"),
      '  </div>',
      '  <p class="kilde">Billederne er forhandlerens egne.</p>',
      '</section>'
    ].join("\n") : '',,

    b.beskrivelse ? [
      '<section class="sektion">',
      '  <h2>Forhandlerens beskrivelse</h2>',
      '  <blockquote class="forhandlertekst">' +
      esc(renBeskrivelse(b.beskrivelse)).split("\n").filter(function (l) { return l.trim(); })
        .map(function (l) { return '<p>' + l + '</p>'; }).join("") +
      '</blockquote>',
      '  <p class="kilde">Teksten er forhandlerens egen. Vi har taget kontaktoplysningerne ud.</p>',
      '</section>'
    ].join("\n") : '',

    '<section class="sektion">',
    '  <h2>Specifikationer</h2>',
    '  <p class="sektion__manchet">' + esc(bilOpsummering(b)) + '</p>',
    '  <dl class="specs-grid">',
    spec.map(function (r) {
      return '    <div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
    }).join("\n"),
    '  </dl>',
    '  <p class="kilde">Tallene er forhandlerens egne, og vi hentede dem' +
    ' den ' + esc(datoLang(b.kilde_dato)) + '. Forhandleren oplyser ikke lasteevne og totalvægt.' +
    ' Vi regner dem heller ikke ud, fordi de afhænger af, hvordan den enkelte bil er bygget op.</p>',
    '</section>',

    batteriHTML(b),
    (b.udstyr || []).length ? [
      '<section class="sektion">',
      '  <h2>Udstyr</h2>',
      '  <ul class="udstyrsmaerker">',
      b.udstyr.filter(function (u) { return u !== "Afhentning"; }).map(function (u) { return '<li>' + esc(u) + '</li>'; }).join(""),
      '  </ul>',
      '  <p class="kilde">Forhandleren har selv lavet udstyrslisten. Tjek den på bilen.</p>',
      '</section>'
    ].join("\n") : '',


    leadBoks(b),
    lignendeHTML(b, data),
    '<p class="brugt-forbehold">Vi er ikke selv forhandler. Du køber bilen hos den forhandler, vi samarbejder med, og handlen er' +
      ' forhandlerens ansvar. Vi kan få betaling for at formidle kontakten. Bilen kan være solgt, efter at vi hentede listen' +
      ' den ' + esc(datoLang(b.kilde_dato)) + '. <a href="/haandbogen/koeb-af-brugt-varebil/">Tjekliste før køb</a> · <a href="/brugte-varebiler/">Alle brugte varebiler</a></p>',
    // Fast knap nederst på mobil: handlingen er altid en tommelfinger væk.
    '<div class="lead-bar">' + (prisDuer(b) ? '<span class="lead-bar__pris">' + esc(kr(b.pris_ekskl_moms_kr)) + '</span>' : '') +
      leadKnap(b, "Hør nærmere") + '</div><div class="lead-bar-plads"></div>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── Kør ──────────────────────────────────────────────────────────────────────

// ── Solgte biler ───────────────────────────────────────
//
// Lageret omsaettes. Naar en bil er solgt, forsvinder den fra Brdr. Jensens
// sitemap og dermed fra vores data - men mappen med bilens side bliver
// liggende og viser en bil, der er vaek. Sletter man den bare, giver URL'en
// 404, selvom den kan vaere indekseret og delt.
//
// Her laeses den gamle sides krummesti for at finde maerke og model, siden
// slettes, og der laegges en 301 til den mest praecise side, der stadig
// findes. Posterne udloeber efter 180 dage - saa har soegemaskinerne for
// laengst fulgt omdirigeringen, og _redirects vokser ikke i det uendelige.

var SOLGTE_JSON = path.join(__dirname, "solgte.json");
var SOLGTE_DAGE = 180;

// Et bilslug ender altid paa -<id>. Maerke- og facetmapper goer ikke, saa
// moenstret her er det, der holder de to slags fra hinanden.
function erBilSlug(navn) { return /-\d{5,}$/.test(navn); }

// En landingsside har ikke en krummesti med sig selv i, saa destinationen
// findes ved at gaa et niveau op ad stien, til noget findes.
function opadFra(rel) {
  var dele = rel.split("/");
  while (dele.length > 1) {
    dele.pop();
    var p = dele.join("/");
    if (fs.existsSync(path.join(UD_DIR, p))) return "/brugte-varebiler/" + p + "/";
  }
  return "/brugte-varebiler/";
}

function findDestination(mappe) {
  // Krummestien paa den gamle side har linkene til maerke og model. De
  // bruges direkte, saa vi ikke skal gaette et slug for en bil, vi ikke
  // laengere har data om.
  try {
    var h = fs.readFileSync(path.join(mappe, "index.html"), "utf8");
    var m = h.match(/<nav class="breadcrumb">([\s\S]*?)<\/nav>/);
    if (m) {
      var stier = [];
      var re = /href="(\/brugte-varebiler\/[^"]*)"/g, t;
      while ((t = re.exec(m[1]))) stier.push(t[1]);
      // Den sidste er den mest praecise (model foer maerke foer oversigt).
      for (var i = stier.length - 1; i >= 0; i--) {
        var rel = stier[i].replace(/^\//, "").replace(/\/$/, "");
        if (fs.existsSync(path.join(__dirname, rel))) return stier[i];
      }
    }
  } catch (e) { /* siden kan ikke laeses - saa er oversigten svaret */ }
  return "/brugte-varebiler/";
}

function ryddForaeldede(skrevne) {
  var liste = [];
  try { liste = JSON.parse(fs.readFileSync(SOLGTE_JSON, "utf8")); } catch (e) {}

  var idag = new Date();
  var graense = new Date(idag.getTime() - SOLGTE_DAGE * 86400000);
  var foer = liste.length;
  liste = liste.filter(function (x) { return new Date(x.dato) > graense; });
  var udloebet = foer - liste.length;

  var kendt = {};
  liste.forEach(function (x) { kendt[x.slug] = true; });

  // Alt, generatoren ikke skrev i denne koersel, er foraeldet - uanset om
  // det er en bil, et maerke eller en model. Der gaas nedefra og op, saa en
  // modelside kan naa at pege paa sit maerke, foer maerket selv ryddes.
  var nye = 0;
  function gennemgaa(rel) {
    var abs = rel ? path.join(UD_DIR, rel) : UD_DIR;
    if (!fs.existsSync(abs)) return;
    fs.readdirSync(abs, { withFileTypes: true }).forEach(function (d) {
      if (!d.isDirectory()) return;
      var sti = rel ? rel + "/" + d.name : d.name;
      if (skrevne[sti]) { gennemgaa(sti); return; }   // lever - se i den
      // Bilsider har krummesti at gaa efter; landingssider har kun stien.
      var mappe = path.join(UD_DIR, sti);
      var til = erBilSlug(d.name) ? findDestination(mappe) : opadFra(sti);
      if (!kendt[sti]) {
        liste.push({ slug: sti, til: til, dato: idag.toISOString().slice(0, 10) });
        kendt[sti] = true; nye++;
      }
      fs.rmSync(mappe, { recursive: true, force: true });
    });
  }
  gennemgaa("");

  fs.writeFileSync(SOLGTE_JSON, JSON.stringify(liste, null, 1) + "\n", "utf8");
  return { liste: liste, nye: nye, udloebet: udloebet };
}

// _redirects har en haandskreven del øverst. Den managede blok staar mellem
// to markoerer, saa de to ikke kan komme til at overskrive hinanden.
var MARK_START = "# >>> solgte biler (genereres \u2014 rediger ikke) >>>";
var MARK_SLUT  = "# <<< solgte biler <<<";

function skrivRedirects(liste) {
  var fil = path.join(__dirname, "_redirects");
  var s = "";
  try { s = fs.readFileSync(fil, "utf8"); } catch (e) {}
  var i = s.indexOf(MARK_START), j = s.indexOf(MARK_SLUT);
  if (i >= 0 && j > i) s = s.slice(0, i) + s.slice(j + MARK_SLUT.length);
  s = s.replace(/\n{3,}$/, "\n");

  if (!liste.length) {
    fs.writeFileSync(fil, s.replace(/\s*$/, "\n"), "utf8");
    return 0;
  }
  var blok = [MARK_START,
    "# Biler, der er solgt. De f\u00e5r en 301 til n\u00e6rmeste side, der findes,",
    "# i stedet for en 404. Posterne udl\u00f8ber efter " + SOLGTE_DAGE + " dage."];
  liste.slice().sort(function (a, b) { return a.slug < b.slug ? -1 : 1; })
    .forEach(function (x) {
      blok.push("/brugte-varebiler/" + x.slug + "  " + x.til + "  301");
    });
  blok.push(MARK_SLUT);
  fs.writeFileSync(fil, s.replace(/\s*$/, "\n\n") + blok.join("\n") + "\n", "utf8");
  return liste.length;
}
function main() {
  var data = JSON.parse(fs.readFileSync(DATA_JSON, "utf8"));
  TITLER = byggTitler(data.biler);
  DESC_ANTAL = {};
  data.biler.forEach(function (b) {
    var d = bilDesc(b, "");
    DESC_ANTAL[d] = (DESC_ANTAL[d] || 0) + 1;
  });
  console.log("Fandt " + data.biler.length + " brugte biler");

  mkdir(UD_DIR);

  // Landingsiderne bygges foerst, saa oversigten kan linke til dem.
  var landing = landingsider(data);
  data._landing = landing;

  fs.writeFileSync(path.join(UD_DIR, "index.html"), oversigtHTML(data), "utf8");

  data.biler.forEach(function (b) {
    var d = path.join(UD_DIR, b.slug);
    mkdir(d);
    fs.writeFileSync(path.join(d, "index.html"), bilSideHTML(b, data), "utf8");
  });

  landing.forEach(function (L) {
    var d = path.join(__dirname, L.sti.replace(/^\//, "").replace(/\/$/, ""));
    mkdir(d);
    fs.writeFileSync(path.join(d, "index.html"), landingHTML(L, data), "utf8");
  });

  // Solgte biler ryddes til sidst, saa destinationerne peger paa sider,
  // der lige er blevet skrevet.
  // Alt, generatoren faktisk skrev: bilslugs og landingsstier. Resten under
  // /brugte-varebiler/ er foraeldet.
  var skrevne = {};
  data.biler.forEach(function (b) { skrevne[b.slug] = true; });
  landing.forEach(function (L) {
    skrevne[L.sti.replace("/brugte-varebiler/", "").replace(/\/$/, "")] = true;
  });
  var s = ryddForaeldede(skrevne);
  var antalR = skrivRedirects(s.liste);

  console.log("OK: oversigt + " + data.biler.length + " bilsider + " + landing.length +
              " mærke- og modelsider i /brugte-varebiler/");
  if (s.nye) console.log("Foraeldet siden sidst: " + s.nye + " side(r) fjernet og omdirigeret");
  if (s.udloebet) console.log("Udløbet: " + s.udloebet + " omdirigering(er) fjernet efter " + SOLGTE_DAGE + " dage");
  if (antalR) console.log("_redirects: " + antalR + " solgte biler");
  console.log("Husk: node generate-pages.js bagefter, saa sitemap og header foelger med.");
}

main();
