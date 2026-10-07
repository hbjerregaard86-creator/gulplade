// Gulplade Håndbogen: /haandbogen/ og Nyheder: /nyheder/
//
// Begge bygges af viden.json. En artikel med "sektion": "nyheder" er en nyhed
// (en ny bil, nye tal) og ligger under /nyheder/; resten er guider i Håndbogen.
//
// Formaalet er at moede folk, der endnu ikke leder efter et leasingtilbud - de
// leder efter et svar. "Maa jeg koere hjem i firmabilen?" kommer foer "hvad
// koster en Transit Custom".
//
// Samme regel som resten af siden: hvert faktuelt udsagn har en kilde med url
// og dato, og hvor en sats ikke kan verificeres, skriver vi ikke et tal. Det
// gaelder isaer her - forkerte momsregler koster laeseren rigtige penge.
//
// Koer: node generate-viden.js

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://gulplade.dk";
const DATA_JSON = path.join(__dirname, "viden.json");
const UD_DIR = path.join(__dirname, "haandbogen");
const NYHED_DIR = path.join(__dirname, "nyheder");

// En lille boks under artiklen, der beder om et foelg paa LinkedIn.
// Godkendt til produktion 05-10-2026. GULPLADE_LINKEDIN_NY=0 slaar den fra.
var LINKEDIN_NY = process.env.GULPLADE_LINKEDIN_NY !== "0";
var LINKEDIN_URL = "https://www.linkedin.com/company/gulplade/";

// 07-10-2026: Håndbogen med længere tekster, figurer og topbillede (preview).
// Brugeren: "De skal være længere og der skal være mere grafik og illustrationer.
// De må gerne fylde en del da det er opslagstekster." De omskrevne artikler står i
// viden-ny.json ({ artikler: { slug: artikel } }) og erstatter artiklen med samme
// slug, når GULPLADE_VIDEN_NY=1. En artikel kan have "visuel" (hero, kort_fortalt,
// toc) og afsnit med "figur". Begge kommer fra Til varebilen (tilvalg-visuel.js og
// tilvalg-figurer.js), så de to dele af sitet ser ens ud.
var VIDEN_NY = process.env.GULPLADE_VIDEN_NY === "1";
var FIGUR = require("./tilvalg-figurer.js");
var VISUEL = require("./tilvalg-visuel.js");
function vidensNy() {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "viden-ny.json"), "utf8")).artikler || {}; }
  catch (e) { return {}; }
}

function erNyhed(a) { return a.sektion === "nyheder"; }
function sti(a) { return (erNyhed(a) ? "/nyheder/" : "/haandbogen/") + a.slug + "/"; }

// ── Faelles med de andre generatorer ─────────────────────────────────────────

function cssVersion() {
  try {
    var css = fs.readFileSync(path.join(__dirname, "assets", "style.css"));
    return require("crypto").createHash("sha1").update(css).digest("hex").slice(0, 8);
  } catch (e) { return ""; }
}
var CSS_V = cssVersion();
// Samtykkescriptet versioneres som stylesheetet, saa en rettelse naar ud med det samme.
var SAMTYKKE_V = (function () {
  try { return require("crypto").createHash("sha1").update(fs.readFileSync(path.join(__dirname, "assets", "samtykke.js"))).digest("hex").slice(0, 8); }
  catch (e) { return "1"; }
})();

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function mkdir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function datoDa(d) {
  if (!d) return "";
  var m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return String(d);
  var md = ["jan.", "feb.", "mar.", "apr.", "maj", "jun.",
            "jul.", "aug.", "sep.", "okt.", "nov.", "dec."];
  return Number(m[3]) + ". " + md[Number(m[2]) - 1] + " " + m[1];
}

var TITEL_MAKS = 60, DESC_MAKS = 158, SIDENAVN = " | Gulplade.dk";
function titel(kerne) {
  kerne = String(kerne).trim();
  if (kerne.length + SIDENAVN.length <= TITEL_MAKS) return kerne + SIDENAVN;
  if (kerne.length <= TITEL_MAKS) return kerne;
  var k = kerne.slice(0, TITEL_MAKS - 1), i = k.lastIndexOf(" ");
  if (i > TITEL_MAKS * 0.6) k = k.slice(0, i);
  return k.replace(/[\s—\-,·]+$/, "") + "…";
}
function beskrivelse(t) {
  t = String(t).replace(/\s+/g, " ").trim();
  if (t.length <= DESC_MAKS) return t;
  var k = t.slice(0, DESC_MAKS);
  var p = Math.max(k.lastIndexOf(". "), k.lastIndexOf("? "), k.lastIndexOf("! "));
  if (p > DESC_MAKS * 0.55) return k.slice(0, p + 1);
  var i = k.lastIndexOf(" ");
  return (i > DESC_MAKS * 0.6 ? k.slice(0, i) : k).replace(/[\s,;—\-]+$/, "") + "…";
}

var DELEBILLEDE = BASE_URL + "/assets/img/del.png";
function delebillede(sti) {
  if (!sti) return DELEBILLEDE;
  if (/^https?:/.test(sti)) return sti;
  return BASE_URL + (sti.charAt(0) === "/" ? "" : "/") + sti;
}

function krummeSchema(trin) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trin.map(function (t, i) {
      return { "@type": "ListItem", position: i + 1, name: t[0],
               item: t[1] ? BASE_URL + t[1] : undefined };
    })
  };
}
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
    '<p>Vi har hentet priserne fra forhandlernes og leasingselskabernes egne prislister og annoncer. Priserne er vejledende og vist uden moms til erhvervskunder. De gælder på de vilkår, der står ved hvert tilbud. Vi tager forbehold for ændringer, udsolgte biler og fejl.</p>',
    '<p><strong>Hverken forhandlere eller leasingselskaber kan købe en placering i sammenligningen.</strong> Vi henter selv priserne ind, og rækkefølgen kan ikke købes. To steder bliver vi betalt af branchen, og det skriver vi, hvor det gælder. <a href="/faa-tilbud/">Når vi henter tilbud hjem til dig</a>, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til. Vi får det samme beløb, uanset om du siger ja eller nej. Vi formidler <a href="/brugte-varebiler/">de brugte varebiler</a> for en forhandler, vi samarbejder med. Også her kan vi blive betalt for en henvendelse. <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '<p>&copy; ' + new Date().getFullYear() + ' Gulplade.dk</p>',
    '</div></footer>'
  ].join("\n");
}

function hoved(title, desc, canonical, schema, billede) {
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
    '<meta property="og:type" content="article">',
    '<meta property="og:site_name" content="Gulplade.dk">',
    '<meta property="og:locale" content="da_DK">',
    '<meta property="og:image" content="' + delebillede(billede) + '">',
    '<meta property="og:image:alt" content="' + esc(title) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + esc(title) + '">',
    '<meta name="twitter:description" content="' + esc(desc) + '">',
    '<meta name="twitter:image" content="' + delebillede(billede) + '">',
    schema ? '<script type="application/ld+json">' + schema + '</script>' : '',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    '<meta name="theme-color" content="#f2b705">',
    '<link rel="stylesheet" href="/assets/' + (CSS_V ? 'style.' + CSS_V + '.css' : 'style.css') + '">',
    '<script src="/assets/samtykke.' + SAMTYKKE_V + '.js" defer></script>',
    '</head><body>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── Tal fra vores egne data ──────────────────────────────────────────────────
//
// En artikel, der siger „ett af 54 tilbud nævner vejhjælp“, er forkert i det
// oejeblik, der kommer et tilbud mere. Tallene skrives derfor ikke i haanden:
// artiklen indeholder {{noegle}}, og generatoren regner vaerdien ud af
// varebiler.json, hver gang siden bygges.
//
// Mangler en noegle, braekker bygningen med det samme. Det er med vilje - en
// tom pladsholder i en faerdig artikel er vaerre end en fejlmeddelelse.

var POSTER = ["service_reparation", "daek", "forsikring", "ejerafgift", "vejhjaelp"];

function beregnTal() {
  var t, biler;
  try {
    var d = JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8"));
    biler = d.varebiler;
    t = biler.reduce(function (a, b) { return a.concat(b.tilbud || []); }, []);
  } catch (e) {
    console.log("Kunne ikke læse varebiler.json: " + e.message);
    return null;
  }

  function tael(f) { return t.filter(f).length; }
  function har(x, felt, post) { return (x[felt] || []).indexOf(post) >= 0; }

  var tal = { tilbud: t.length, modeller: biler.length };

  // Mindste og største værdi af et felt, med bilens navn. fmt skriver tallet
  // færdigt (fx meter med komma); uden fmt formateres det som de andre tal.
  function spaend(liste, felt, noegle, fmt) {
    var m = liste.filter(function (b) { return felt(b) != null; })
      .sort(function (a, b) { return felt(a) - felt(b); });
    if (!m.length) return;
    var lav = m[0], hoej = m[m.length - 1];
    tal[noegle + "_lav"] = fmt ? fmt(felt(lav)) : felt(lav);
    tal[noegle + "_hoej"] = fmt ? fmt(felt(hoej)) : felt(hoej);
    tal[noegle + "_lav_bil"] = navn(lav);
    tal[noegle + "_hoej_bil"] = navn(hoej);
  }

  POSTER.forEach(function (p) {
    tal[p + "_inkl"] = tael(function (x) { return har(x, "inkluderet", p); });
    tal[p + "_ikke"] = tael(function (x) { return har(x, "ikke_inkluderet", p); });
    tal[p + "_tavs"] = t.length - tal[p + "_inkl"] - tal[p + "_ikke"];
  });

  tal.intet = tael(function (x) {
    return !(x.inkluderet || []).length && !(x.ikke_inkluderet || []).length;
  });
  tal.finansiel = tael(function (x) { return x.leasingtype === "finansiel"; });
  tal.operationel = tael(function (x) { return x.leasingtype === "operationel"; });
  tal.utypet = tael(function (x) { return !x.leasingtype; });
  tal.uden_km = tael(function (x) { return !x.km_pr_aar; });
  tal.l60 = tael(function (x) { return x.loebetid_mdr === 60; });
  tal.l48 = tael(function (x) { return x.loebetid_mdr === 48; });
  tal.l36 = tael(function (x) { return x.loebetid_mdr === 36; });

  // Finansiel og operationel hver for sig (artiklen om forskellen, 02-10-2026).
  function median(a) {
    a = a.filter(function (x) { return x != null; }).sort(function (p, q) { return p - q; });
    return a.length ? a[Math.floor(a.length / 2)] : null;
  }
  function hyppigst(a) {
    var m = {}, best = null;
    a.filter(function (x) { return x != null; }).forEach(function (x) { m[x] = (m[x] || 0) + 1; if (best == null || m[x] > m[best]) best = x; });
    return best;
  }
  [["fin", "finansiel"], ["op", "operationel"]].forEach(function (p) {
    var L = t.filter(function (x) { return x.leasingtype === p[1]; });
    tal[p[0] + "_service"] = L.filter(function (x) { return har(x, "inkluderet", "service_reparation"); }).length;
    tal[p[0] + "_daek"] = L.filter(function (x) { return har(x, "inkluderet", "daek"); }).length;
    tal[p[0] + "_udb"] = median(L.map(function (x) { return x.foerstegangsydelse; }));
    tal[p[0] + "_ydelse"] = median(L.map(function (x) { return x.maanedspris; }));
    tal[p[0] + "_loeb"] = hyppigst(L.map(function (x) { return x.loebetid_mdr; }));
  });
  var fl = t.filter(function (x) { return x.leasingtype === "finansiel"; });
  tal.fin_rest = fl.filter(function (x) { return x.restvaerdi != null; }).length;
  tal.fin_rest_median = median(fl.map(function (x) { return x.restvaerdi; }));

  // Grøn ejerafgift. Spredningen er artiklens pointe, så både yderpunkterne og
  // forskellen over en femaarig aftale regnes ud her.
  var af = biler.filter(function (b) { return b.ejerafgift_halvaar_kr; });
  if (af.length) {
    var sorteret = af.slice().sort(function (a, b) {
      return a.ejerafgift_halvaar_kr - b.ejerafgift_halvaar_kr;
    });
    var lav = sorteret[0], hoej = sorteret[sorteret.length - 1];
    tal.afgift_modeller = af.length;
    tal.afgift_lav_bil = lav.maerke + " " + lav.model;
    tal.afgift_lav_aar = lav.ejerafgift_halvaar_kr * 2;
    tal.afgift_hoej_bil = hoej.maerke + " " + hoej.model;
    tal.afgift_hoej_aar = hoej.ejerafgift_halvaar_kr * 2;
    tal.afgift_forskel_5aar = (hoej.ejerafgift_halvaar_kr - lav.ejerafgift_halvaar_kr) * 10;

    // Samme spredning, men kun blandt dieselbilerne - ellers kan man sige, at
    // forskellen bare er el mod diesel.
    var di = af.filter(function (b) { return b.drivmiddel === "diesel"; })
      .sort(function (a, b) { return a.ejerafgift_halvaar_kr - b.ejerafgift_halvaar_kr; });
    if (di.length > 1) {
      var dl = di[0], dh = di[di.length - 1];
      tal.diesel_lav_bil = dl.maerke + " " + dl.model;
      tal.diesel_lav_aar = dl.ejerafgift_halvaar_kr * 2;
      tal.diesel_lav_co2 = dl.co2_g_pr_km;
      tal.diesel_hoej_bil = dh.maerke + " " + dh.model;
      tal.diesel_hoej_aar = dh.ejerafgift_halvaar_kr * 2;
      tal.diesel_hoej_co2 = dh.co2_g_pr_km;
      tal.diesel_forskel_5aar = (dh.ejerafgift_halvaar_kr - dl.ejerafgift_halvaar_kr) * 10;
    }
  }

  // Kilometergraensen. At alle tilbud siger det samme tal er i sig selv et
  // resultat - og at ingen af dem oplyser overkoerselsprisen er et stoerre.
  var km = t.map(function (x) { return x.km_pr_aar; }).filter(Boolean);
  var kmTael = {};
  km.forEach(function (x) { kmTael[x] = (kmTael[x] || 0) + 1; });
  var kmMest = Object.keys(kmTael).sort(function (a, b) { return kmTael[b] - kmTael[a]; })[0];
  tal.km_oplyst = km.length;
  tal.km_mest = kmMest ? Number(kmMest).toLocaleString("da-DK") : null;
  tal.km_mest_antal = kmMest ? kmTael[kmMest] : 0;
  tal.km_varianter = Object.keys(kmTael).length;

  // Elbilerne. Raekkevidde opgives ikke af alle producenter.
  var elb = biler.filter(function (b) { return b.drivmiddel === "el"; });
  tal.el_modeller = elb.length;
  var raek = elb.map(function (b) { return b.raekkevidde_km; }).filter(Boolean)
    .sort(function (a, b) { return a - b; });
  tal.el_raek_antal = raek.length;
  tal.el_raek_lav = raek.length ? raek[0] : null;
  tal.el_raek_hoej = raek.length ? raek[raek.length - 1] : null;

  // Mål vi har for nok modeller til at sige noget om.
  var medHoejde = biler.filter(function (b) { return (b.udvendig || {}).hoejde_mm; });
  tal.hoejde_modeller = medHoejde.length;
  tal.under_210 = medHoejde.filter(function (b) { return b.udvendig.hoejde_mm <= 2100; }).length;
  tal.paller_modeller = biler.filter(function (b) { return b.europaller; }).length;
  tal.laesse_modeller = biler.filter(function (b) { return (b.lastrum || {}).laesserhoejde_mm; }).length;

  // L- og H-koderne (artiklen om L1H1, L2H2 og L3H2). Koden laeses af den
  // variant, producentens maal gaelder for; spaendet viser, at L2 ikke betyder
  // det samme hos alle maerker.
  ["1", "2", "3"].forEach(function (n) {
    var l = biler.filter(function (b) {
      return new RegExp("\\bL" + n + "(?![0-9])").test(b.variant_for_maal || "") && (b.lastrum || {}).laengde_mm;
    }).sort(function (a, b) { return a.lastrum.laengde_mm - b.lastrum.laengde_mm; });
    tal["l" + n + "_antal"] = l.length;
    tal["l" + n + "_lav"] = l.length ? l[0].lastrum.laengde_mm : null;
    tal["l" + n + "_lav_bil"] = l.length ? l[0].maerke + " " + l[0].model : null;
    tal["l" + n + "_hoej"] = l.length ? l[l.length - 1].lastrum.laengde_mm : null;
    tal["l" + n + "_hoej_bil"] = l.length ? l[l.length - 1].maerke + " " + l[l.length - 1].model : null;
    var h = biler.filter(function (b) {
      return new RegExp("H" + n + "(?![0-9])").test(b.variant_for_maal || "") && (b.lastrum || {}).hoejde_mm;
    }).sort(function (a, b) { return a.lastrum.hoejde_mm - b.lastrum.hoejde_mm; });
    tal["h" + n + "_antal"] = h.length;
    tal["h" + n + "_lav"] = h.length ? h[0].lastrum.hoejde_mm : null;
    tal["h" + n + "_hoej"] = h.length ? h[h.length - 1].lastrum.hoejde_mm : null;
  });

  var fg = t.map(function (x) { return x.foerstegangsydelse; })
    .filter(function (x) { return x; }).sort(function (a, b) { return a - b; });
  tal.fg_lav = fg.length ? fg[0] : null;
  tal.fg_hoej = fg.length ? fg[fg.length - 1] : null;
  tal.fg_antal = fg.length;

  tal.data_dato = datoLang(d.sidst_opdateret);

  // Små og billige varebiler (06-10-2026). Search Console viste mange søgninger
  // på "lille varebil" og "billig varebil", og de to artikler henter tallene og
  // tabellerne her. Størrelsen afgøres som i generate-pages.js (stoerrelse).
  var lille = biler.filter(lilleBil);
  var lilleT = lille.reduce(function (a, b) { return a.concat(b.tilbud || []); }, []);
  tal.lille_modeller = lille.length;
  tal.lille_tilbud = lilleT.length;
  tal.lille_el = lille.filter(function (b) { return b.drivmiddel === "el"; }).length;
  tal.lille_diesel = lille.filter(function (b) { return b.drivmiddel === "diesel"; }).length;
  spaend(lille, function (b) { return (b.lastrum || {}).volumen_m3; }, "lille_m3", decimal);
  spaend(lille, function (b) { return b.nyttelast_kg; }, "lille_nytte");
  spaend(lille, function (b) { return (b.udvendig || {}).laengde_mm; }, "lille_laengde", meter);
  spaend(lille, function (b) { return (b.udvendig || {}).hoejde_mm; }, "lille_hoejde", meter);
  spaend(lille.filter(function (b) { return b.drivmiddel === "el"; }),
    function (b) { return b.raekkevidde_km; }, "lille_raek");
  tal.lille_paller = lille.filter(function (b) { return b.europaller >= 2; }).length;
  var lb = billigstAf(lille);
  tal.lille_fra = lb ? prisMd(lb.x) : null;
  tal.lille_fra_bil = lb ? navn(lb.b) : null;
  tal.lille_fra_ydelse = lb ? lb.x.maanedspris : null;
  tal.lille_fra_udb = lb ? lb.x.foerstegangsydelse : null;
  var ln = lille.filter(function (b) { return (b.nypris || {}).ekskl_moms_kr; })
    .sort(function (a, b) { return a.nypris.ekskl_moms_kr - b.nypris.ekskl_moms_kr; });
  tal.lille_nypris_lav = ln.length ? ln[0].nypris.ekskl_moms_kr : null;
  tal.lille_nypris_bil = ln.length ? navn(ln[0]) : null;
  // Personbiler med varebilsudgave (Toyotas bZ4X Van, C-HR+ Van osv.). De er
  // registreret som kassevogne, men er lige så lave som en personbil.
  var suv = biler.filter(suvVan);
  tal.suv_van_antal = suv.length;
  tal.suv_van_navne = og(suv.map(navn));

  var ab = billigstAf(biler);
  tal.billig_fra = ab ? prisMd(ab.x) : null;
  tal.billig_fra_bil = ab ? navn(ab.b) : null;
  tal.billig_fra_ydelse = ab ? ab.x.maanedspris : null;
  tal.billig_fra_udb = ab ? ab.x.foerstegangsydelse : null;
  tal.billig_fra_loeb = ab ? ab.x.loebetid_mdr : null;
  tal.under_3000 = biler.filter(function (b) { var x = billigsteTilbud(b); return x && prisMd(x) < 3000; }).length;
  var an = biler.filter(function (b) { return (b.nypris || {}).ekskl_moms_kr; })
    .sort(function (a, b) { return a.nypris.ekskl_moms_kr - b.nypris.ekskl_moms_kr; });
  tal.nypris_modeller = an.length;
  tal.nypris_lav = an.length ? an[0].nypris.ekskl_moms_kr : null;
  tal.nypris_lav_bil = an.length ? navn(an[0]) : null;
  tal.nypris_under_200 = an.filter(function (b) { return b.nypris.ekskl_moms_kr < 200000; }).length;

  // De brugte varebiler, vi formidler. Kun tal, der tåler at være nul.
  try {
    var br = JSON.parse(fs.readFileSync(path.join(__dirname, "brugte.json"), "utf8")).biler || [];
    // _pris_tvivl: en pris, generate-brugte.js heller ikke viser (fx en ny Sprinter til 15.000 kr.).
    var bp = br.filter(function (x) { return !x._pris_tvivl; })
      .map(function (x) { return x.pris_ekskl_moms_kr; }).filter(Boolean)
      .sort(function (a, b) { return a - b; });
    tal.brugt_antal = br.length;
    tal.brugt_u50 = bp.filter(function (p) { return p < 50000; }).length;
    tal.brugt_u100 = bp.filter(function (p) { return p < 100000; }).length;
    tal.brugt_lav = bp.length ? bp[0] : null;
    tal.brugt_dato = datoLang(JSON.parse(fs.readFileSync(path.join(__dirname, "brugte.json"), "utf8")).sidst_opdateret);
    tal.brugt_personbil = br.filter(function (x) { return x.karrosseri === "personbil-van"; }).length;
    // generate-brugte.js laver kun facetsiden ved mindst 5 biler (MIN_FACET).
    // Er der færre, linker artiklen til oversigten i stedet for en side, der mangler.
    tal.brugt_personbil_sti = fs.existsSync(path.join(__dirname, "brugte-varebiler", "brugt-personbil-paa-gule-plader", "index.html"))
      ? "/brugte-varebiler/brugt-personbil-paa-gule-plader/" : "/brugte-varebiler/";
  } catch (e) {
    console.log("Kunne ikke læse brugte.json: " + e.message);
  }

  // Tabellerne til artiklerne. Kun modeller, hvor alle felter i rækken er
  // oplyst - en celle med "Ikke oplyst" ligner noget, der er løgn (05-10-2026).
  TABELLER.lille = {
    hoved: ["Model", "Drivmiddel", "Lastrum", "Nyttelast", "Pr. md. med udbetaling"],
    raekker: lille.filter(function (b) {
      return (b.lastrum || {}).volumen_m3 && b.nyttelast_kg && billigsteTilbud(b);
    }).sort(function (a, b) { return prisMd(billigsteTilbud(a)) - prisMd(billigsteTilbud(b)); })
      .map(function (b) {
        return [modelLink(b), DRIVMIDDEL[b.drivmiddel] || b.drivmiddel,
          decimal(b.lastrum.volumen_m3) + " m³", kr(b.nyttelast_kg) + " kg",
          kr(prisMd(billigsteTilbud(b))) + " kr."];
      }),
    note: "Priser fra forhandlernes og leasingselskabernes egne sider. Senest opdateret " + datoLang(d.sidst_opdateret) + "."
  };
  TABELLER.billigst_leasing = {
    hoved: ["Model", "Drivmiddel", "Udbetaling", "Pr. md.", "Pr. md. med udbetaling"],
    raekker: biler.filter(billigsteTilbud)
      .sort(function (a, b) { return prisMd(billigsteTilbud(a)) - prisMd(billigsteTilbud(b)); })
      .slice(0, 10).map(function (b) {
        var x = billigsteTilbud(b);
        return [modelLink(b), DRIVMIDDEL[b.drivmiddel] || b.drivmiddel,
          kr(x.foerstegangsydelse) + " kr.", kr(x.maanedspris) + " kr.", kr(prisMd(x)) + " kr."];
      }),
    note: "Vi har brugt det billigste tilbud på hver model. Senest opdateret " + datoLang(d.sidst_opdateret) + "."
  };
  TABELLER.suv_van = {
    hoved: ["Model", "Drivmiddel", "Rækkevidde", "Pr. md. med udbetaling", "Vejledende pris"],
    raekker: suv.filter(function (b) { return billigsteTilbud(b) && b.raekkevidde_km && (b.nypris || {}).ekskl_moms_kr; })
      .sort(function (a, b) { return prisMd(billigsteTilbud(a)) - prisMd(billigsteTilbud(b)); })
      .map(function (b) {
        return [modelLink(b), DRIVMIDDEL[b.drivmiddel] || b.drivmiddel, kr(b.raekkevidde_km) + " km",
          kr(prisMd(billigsteTilbud(b))) + " kr.", kr(b.nypris.ekskl_moms_kr) + " kr."];
      }),
    note: "Rækkevidden er producentens. Priser fra udbydernes egne sider og importørens prisliste. Senest opdateret " + datoLang(d.sidst_opdateret) + "."
  };
  TABELLER.billigst_ny = {
    hoved: ["Model", "Drivmiddel", "Vejledende pris"],
    raekker: an.slice(0, 8).map(function (b) {
      return [koebLink(b), DRIVMIDDEL[b.drivmiddel] || b.drivmiddel, kr(b.nypris.ekskl_moms_kr) + " kr."];
    }),
    note: "Importørernes vejledende priser. Senest opdateret " + datoLang(d.sidst_opdateret) + "."
  };

  // Tal formateres dansk, saa artiklen ikke skal goere det.
  var ud = {};
  Object.keys(tal).forEach(function (k) {
    ud[k] = typeof tal[k] === "number" ? tal[k].toLocaleString("da-DK") : tal[k];
  });
  return ud;
}

var TAL = {};
var TABELLER = {};

// ── Hjælpere til små og billige varebiler (06-10-2026) ───────────────────────

// Samme regel som stoerrelse() i generate-pages.js: en kassevogn under 4,75 m,
// et lille lastrum, når længden mangler, eller feltet stoerrelse, når det står.
function lilleBil(b) {
  if (b.karrosseri !== "kassevogn") return false;
  if (b.stoerrelse) return b.stoerrelse === "pizzabil";
  var l = (b.udvendig || {}).laengde_mm;
  if (l != null) return l < 4750;
  var v = (b.lastrum || {}).volumen_m3;
  return v != null && v < 4.5;
}
// En personbil med varebilsudgave: registreret som kassevogn, men under 1,7 m høj.
function suvVan(b) {
  var h = (b.udvendig || {}).hoejde_mm;
  return b.karrosseri === "kassevogn" && h != null && h < 1700;
}
// Månedsprisen med udbetalingen fordelt over løbetiden, som på /bedste-tilbud/.
function prisMd(x) {
  if (x.maanedspris == null || x.foerstegangsydelse == null || !x.loebetid_mdr) return null;
  return Math.round(x.maanedspris + x.foerstegangsydelse / x.loebetid_mdr);
}
function billigsteTilbud(b) {
  return (b.tilbud || []).filter(function (x) { return prisMd(x) != null; })
    .sort(function (p, q) { return prisMd(p) - prisMd(q); })[0] || null;
}
function billigstAf(liste) {
  var bedst = null;
  liste.forEach(function (b) {
    var x = billigsteTilbud(b);
    if (x && (!bedst || prisMd(x) < prisMd(bedst.x))) bedst = { b: b, x: x };
  });
  return bedst;
}
// "(diesel)" skiller to modeller i URL'en, men hører ikke hjemme i en sætning.
function navn(b) { return b.maerke + " " + String(b.model || "").replace(/\s*\(diesel\)$/, ""); }
function slug(s) {
  return String(s || "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ë/g, "e")
    .replace(/[./]+/g, "-")
    .replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function modelLink(b) {
  return "[" + navn(b) + "](/varebiler/" + slug(b.maerke) + "/" + slug(b.model) + "/)";
}
// Købssiden findes ikke for alle modeller. Mangler den, linker vi til modelsiden.
function koebLink(b) {
  var s = slug(b.maerke) + "/" + slug(b.model);
  return fs.existsSync(path.join(__dirname, "koeb-ny-varebil", s, "index.html"))
    ? "[" + navn(b) + "](/koeb-ny-varebil/" + s + "/)" : modelLink(b);
}
var DRIVMIDDEL = { diesel: "Diesel", el: "El", benzin: "Benzin", plugin: "Plug-in hybrid" };
function kr(n) { return Number(n).toLocaleString("da-DK"); }
function decimal(n) { return String(n).replace(".", ","); }
function meter(mm) { return (mm / 1000).toFixed(2).replace(".", ","); }
function og(liste) {
  return liste.length < 2 ? liste.join("") : liste.slice(0, -1).join(", ") + " og " + liste[liste.length - 1];
}
function datoLang(d) {
  var m = String(d || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return String(d || "");
  var md = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august",
            "september", "oktober", "november", "december"];
  return Number(m[3]) + ". " + md[Number(m[2]) - 1] + " " + m[1];
}

// Hele artiklen koeres igennem én gang, lige efter den er laest - ikke felt for
// felt. Ellers glemmes det i det naeste felt, nogen tilfoejer, og saa staar der
// {{tilbud}} paa en faerdig side.
function fyldUd(x) {
  if (typeof x === "string") return pladsholdere(x);
  if (Array.isArray(x)) return x.map(fyldUd);
  if (x && typeof x === "object") {
    var ud = {};
    Object.keys(x).forEach(function (k) { ud[k] = fyldUd(x[k]); });
    return ud;
  }
  return x;
}

function pladsholdere(s) {
  return String(s).replace(/\{\{(\w+)\}\}/g, function (hel, noegle) {
    if (TAL[noegle] == null) {
      throw new Error("Artiklen bruger {{" + noegle + "}}, som ikke findes i beregnTal()");
    }
    return TAL[noegle];
  });
}
// Et afsnit med "autotabel": "lille" faar tabellen fra beregnTal(). Raekkerne
// regnes ud ved hver bygning, ligesom pladsholderne. Mangler tabellen, braekker
// bygningen.
function autoTabeller(a) {
  (a.afsnit || []).forEach(function (s) {
    if (!s.autotabel) return;
    var tb = TABELLER[s.autotabel];
    if (!tb || !tb.raekker.length) throw new Error("Artiklen " + a.slug + " bruger autotabel " + s.autotabel + ", som er tom eller ikke findes");
    s.tabeller = (s.tabeller || []).concat([tb]);
    delete s.autotabel;
  });
  return a;
}

// ── Let opmaerkning i teksten ────────────────────────────────────────────────
// **fed** og [tekst](link). Ikke et markdown-bibliotek: artiklerne skrives af
// os, og de to ting er alt, broedteksten har brug for. Escapes foerst, saa en
// artikel aldrig kan smugle HTML ind.

function tekst(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function afsnitHTML(a, medId) {
  var ud = ['<h2' + (medId ? ' id="' + VISUEL.idFra(a.h2) + '"' : '') + '>' + esc(a.h2) + '</h2>'];
  (a.tekst || []).forEach(function (t) { ud.push('<p>' + tekst(t) + '</p>'); });
  // Figurer fra Til varebilen (noegletal, soejler, daekning, trin, tidslinje, svg).
  // Pladsholdere i en søjlefigur er udfyldt som dansk tekst ("1.234"). Uden
  // omregning ville figuren læse det som 1,234 og tegne søjlen forkert.
  if (a.figur) ud.push(FIGUR.figur([].concat(a.figur).map(function (f) {
    if (f.type !== "soejler") return f;
    return Object.assign({}, f, { data: f.data.map(function (d) {
      return typeof d[1] === "string" ? [d[0], Number(d[1].replace(/\./g, "").replace(",", "."))].concat(d.slice(2)) : d;
    }) });
  })));
  // Tabeller (04-10-2026): { titel, hoved: [...], raekker: [[...]], sum: true }.
  // Første kolonne er rækkens navn; resten er tal og højrestilles. Med sum
  // fremhæves sidste række som total. Samme .sbs-tabel som på modelsiderne.
  (a.tabeller || []).forEach(function (tb) {
    if (tb.titel) ud.push('<h3 class="sbs-titel">' + tekst(tb.titel) + '</h3>');
    ud.push('<div class="sbs__rul"><table class="sbs sbs--tal"><thead><tr>' +
      tb.hoved.map(function (h) { return '<th>' + tekst(h) + '</th>'; }).join('') + '</tr></thead><tbody>');
    tb.raekker.forEach(function (r, i) {
      var sum = tb.sum && i === tb.raekker.length - 1;
      ud.push('<tr' + (sum ? ' class="sbs__sum"' : '') + '><th scope="row">' + tekst(r[0]) + '</th>' +
        r.slice(1).map(function (c) { return '<td>' + tekst(c) + '</td>'; }).join('') + '</tr>');
    });
    ud.push('</tbody></table></div>');
    if (tb.note) ud.push('<p class="kilde">' + tekst(tb.note) + '</p>');
  });
  if (a.punkter && a.punkter.length) {
    ud.push('<ul class="viden__liste">');
    a.punkter.forEach(function (p) { ud.push('  <li>' + tekst(p) + '</li>'); });
    ud.push('</ul>');
  }
  (a.efter || []).forEach(function (t) { ud.push('<p>' + tekst(t) + '</p>'); });
  return ud.join("\n");
}

// ── Artikelsiden ─────────────────────────────────────────────────────────────

function artikelHTML(a, data) {
  var url = BASE_URL + sti(a);
  var nyhed = erNyhed(a);
  var afsnitNavn = nyhed ? "Nyheder" : "Håndbogen", afsnitSti = nyhed ? "/nyheder/" : "/haandbogen/";
  // Tre forslag, ikke tolv. Samme sektion og gruppe foerst: den, der laeser om
  // moms, skal ikke have syn som det foerste forslag.
  function vaegt(x) { return (erNyhed(x) === nyhed ? 0 : 2) + (x.emne === a.emne ? 0 : 1); }
  var andre = data.artikler.filter(function (x) { return x.slug !== a.slug; })
    .map(function (x, i) { return [vaegt(x), i, x]; })
    .sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; })
    .map(function (p) { return p[2]; }).slice(0, 3);

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], [afsnitNavn, afsnitSti], [a.h1, null]]),
    {
      "@type": nyhed ? "NewsArticle" : "Article",
      datePublished: a.udgivet || undefined,
      headline: a.h1,
      description: a.desc,
      url: url,
      inLanguage: "da-DK",
      dateModified: a.opdateret,
      author: { "@type": "Organization", name: "Gulplade.dk", url: BASE_URL + "/" },
      publisher: { "@type": "Organization", name: "Gulplade.dk", url: BASE_URL + "/" },
      citation: (a.kilder || []).map(function (k) {
        return { "@type": "CreativeWork", name: k.navn, url: k.url };
      })
    },
    (a.faq && a.faq.length) ? {
      "@type": "FAQPage",
      mainEntity: a.faq.map(function (f) {
        return { "@type": "Question", name: f.sp,
                 acceptedAnswer: { "@type": "Answer", text: f.sv } };
      })
    } : null
  );

  return [
    hoved(titel(a.title), beskrivelse(a.desc), url, schema),
    header(),
    '<main id="indhold" class="viden-side">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>' +
    '<li><a href="' + afsnitSti + '">' + afsnitNavn + '</a></li>' +
    '<li aria-current="page">' + esc(a.h1) + '</li></ol></nav>',

    '<article class="viden">',
    nyhed
      ? '  <p class="viden__over">Nyhed · ' + esc(datoDa(a.udgivet)) +
        (a.opdateret && a.opdateret !== a.udgivet ? ' · opdateret ' + esc(datoDa(a.opdateret)) : '') +
        ' · ' + a.laesetid + ' min. læsning</p>'
      : '  <p class="viden__over">' + esc(a.emne) + ' · ' + a.laesetid + ' min. læsning · ' +
        'opdateret ' + esc(datoDa(a.opdateret)) + '</p>',
    '  <h1>' + esc(a.h1) + '</h1>',
    '  <p class="viden__manchet">' + tekst(a.kort) + '</p>',
    a.visuel && a.visuel.hero ? '  ' + VISUEL.heroSVG(a.visuel.hero, a.visuel.hero_el) : '',
    a.visuel ? VISUEL.kortFortalt(a.visuel.kort_fortalt) : '',
    a.visuel && a.visuel.toc ? VISUEL.toc((a.afsnit || []).map(function (s) { return { overskrift: s.h2 }; })) : '',

    (a.afsnit || []).map(function (s) { return afsnitHTML(s, a.visuel && a.visuel.toc); }).join("\n"),

    // Afdaempet henvendelse efter svaret: laeseren har faaet hjaelp uden at skulle
    // give noget, og nogle af dem staar med en varebil, der skal skiftes.
    '  <section class="leadboks">',
    // En artikel om en bestemt bil kan give boksen sin egen tekst via a.lead.
    '    <div class="leadboks__tekst"><h2>' + esc(a.lead ? a.lead.h2 : "Skal du have en ny varebil?") + '</h2>' +
    '<p>' + esc(a.lead ? a.lead.tekst : "Vi henter erhvervstilbud fra flere forhandlere på den bil, du skal bruge, og læser dem igennem, før du ser dem. Gratis for dig.") + '</p></div>',
    '    <div class="leadboks__handling"><a class="knap knap--primaer" data-lead="ny" data-bil="' + esc(a.lead ? a.lead.bil : "") + '" href="/faa-tilbud/">' +
      esc(a.lead ? a.lead.knap : "Få tilbud hjem") + '</a>' +
    '<span class="leadboks__lille">Et menneske svarer · du binder dig ikke</span></div>',
    '  </section>',

    // Kilderne staar i artiklen, ikke i en fodnote. Hele sidens praemis er, at
    // et tal uden kilde ikke er et tal - det gaelder ogsaa her.
    '  <section class="viden__kilder">',
    '    <h2>Kilder</h2>',
    '    <ul>',
    (a.kilder || []).map(function (k) {
      // Vores egne sider som kilde er interne links: ingen nofollow og ingen ny fane
      // (Ahrefs 06-10-2026: "nofollow outgoing internal links").
      var intern = k.url.indexOf(BASE_URL + "/") === 0;
      return '      <li><a href="' + esc(intern ? k.url.slice(BASE_URL.length) : k.url) + '"' +
        (intern ? '' : ' rel="nofollow noopener" target="_blank"') + '>' +
        esc(k.navn) + '</a>, <span class="viden__laest">hentet ' + esc(datoDa(k.dato)) + '</span></li>';
    }).join("\n"),
    '    </ul>',
    '    <p class="kilde">Reglerne ændrer sig, og satser reguleres årligt. Ved hver kilde står datoen,' +
    ' så du kan se, hvor gamle oplysningerne er. Siden er ikke skatte-, revisions- eller' +
    ' juridisk rådgivning. Din revisor kan regne på din virksomheds egne forhold.</p>',
    '  </section>',
    '</article>',

    (a.faq && a.faq.length) ? [
      '<section class="sektion">',
      '  <h2>Spørgsmål og svar</h2>',
      '  <dl class="faq">',
      a.faq.map(function (f) {
        return '    <div><dt>' + esc(f.sp) + '</dt><dd>' + esc(f.sv) + '</dd></div>';
      }).join("\n"),
      '  </dl>',
      '</section>'
    ].join("\n") : '',

    linkedinBoks(),
    ctaBlok(),
    brugtLink(a.slug),

    andre.length ? [
      '<section class="sektion">',
      '  <h2>Læs også</h2>',
      '  <div class="vidensgitter">',
      andre.map(kortHTML).join("\n"),
      '  </div>',
      '</section>'
    ].join("\n") : '',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// Artikler, hvor en brugt bil er et naturligt naeste skridt, linker til den
// liste, der passer. Listen skal findes paa disken - ellers intet link.
var BRUGT_LINK = {
  "leasing-eller-koeb-af-varebil": ["", "Brugte varebiler til salg",
    "Overvejer du at købe i stedet for at lease? Se de brugte varebiler, der står på lager lige nu — med kontantpris ekskl. moms, kilometertal og årgang."],
  "syn-af-varebil": ["", "Brugte varebiler til salg",
    "Skal du købe brugt, står årgang og kilometertal på hver bil i vores liste over brugte varebiler."],
  "groen-ejerafgift-paa-varebil": ["", "Brugte varebiler til salg",
    "Den grønne ejerafgift står på hver bil i vores liste over brugte varebiler."],
  "varebil-eller-pickup": ["brugt-pickup", "Brugte pickupper til salg",
    "Er det en pickup, du står og mangler, kan du se dem, der står brugt på lager lige nu."],
  "specialindretning-af-varebil": ["brugt-varebil-med-indretning", "Brugte varebiler med indretning",
    "En brugt bil med indretningen allerede monteret kan være den hurtige vej. Se dem, der står på lager."],
  "elvarebil-i-praksis": ["brugt-elvarebil", "Brugte elvarebiler til salg",
    "Vil du prøve el uden en ny bil? Se de brugte elvarebiler, der står på lager."],
  "halvdelen-af-nye-varebiler-er-elektriske": ["brugt-elvarebil", "Brugte elvarebiler til salg",
    "Se de brugte elvarebiler, der står på lager lige nu."]
};

function brugtLink(slug) {
  var l = BRUGT_LINK[slug];
  if (!l) return '';
  var sti = "/brugte-varebiler/" + (l[0] ? l[0] + "/" : "");
  if (!fs.existsSync(path.join(__dirname, "brugte-varebiler", l[0], "index.html"))) return '';
  return [
    '<section class="sektion--kort">',
    '  <h2>' + l[1] + '</h2>',
    '  <p>' + l[2] + '</p>',
    '  <p><a href="' + sti + '">' + l[1] + ' →</a></p>',
    '</section>'
  ].join("\n");
}

// Siden poster artiklerne paa LinkedIn. Boksen staar efter artiklen, hvor
// laeseren har faaet sit svar, og foer henvendelsen om et tilbudstjek.
function linkedinBoks() {
  if (!LINKEDIN_NY) return '';
  return [
    '<section class="sektion--kort">',
    '  <h2>Følg Gulplade.dk på LinkedIn</h2>',
    '  <p>Når vi skriver om nye regler for gule plader eller nye varebiler, deler vi artiklen på LinkedIn. Følg siden, så kommer artiklerne i dit feed.</p>',
    '  <p class="sektion__knapper"><a class="knap knap--sekundaer" href="' + LINKEDIN_URL + '" rel="noopener" target="_blank">Følg os på LinkedIn</a></p>',
    '</section>'
  ].join("\n");
}

function ctaBlok() {
  return [
    '<section class="sektion">',
    '<div class="kort" style="border-color:var(--gul);border-width:2px">',
    '<h2>Har du fået et tilbud på bordet?</h2>',
    '<p>Vi regner det igennem, finder ud af, hvad der ikke står i det, og giver dig de spørgsmål, du skal stille leasingselskabet. Tjekket er uvildigt, for leasingselskabet betaler os ikke for at sige god for tilbuddet.</p>',
    '<p>Et tilbudstjek koster 695 kr. ekskl. moms.</p>',
    '<p style="margin-top:1.25rem"><a href="/tilbudstjek/" class="knap knap--primaer">Tjek dit tilbud</a></p>',
    '</div>',
    '</section>'
  ].join("\n");
}

// ── Kort og oversigt ─────────────────────────────────────────────────────────

// udenEmne: paa oversigten staar gruppenavnet allerede som overskrift lige
// ovenover. At gentage det paa hvert kort er stoej, ikke information.
function kortHTML(a, udenEmne) {
  return [
    '<article class="videnkort">',
    '  <a href="' + sti(a) + '">',
    udenEmne ? '' : '    <p class="videnkort__emne">' + (erNyhed(a) ? 'Nyhed · ' + esc(datoDa(a.udgivet)) : esc(a.emne)) + '</p>',
    '    <h3>' + esc(a.h1) + '</h3>',
    '    <p class="videnkort__kort">' + esc(String(a.kort || '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')) + '</p>',
    '    <p class="videnkort__meta">' + a.laesetid + ' min. · ' +
    (a.kilder || []).length + ' kilder</p>',
    '  </a>',
    '</article>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

function oversigtHTML(data) {
  var a = data.artikler.filter(function (x) { return !erNyhed(x); });
  var emner = a.map(function (x) { return x.emne; })
    .filter(function (v, i, arr) { return arr.indexOf(v) === i; });

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Gulplade Håndbogen", null]]),
    {
      "@type": "CollectionPage",
      name: "Gulplade Håndbogen",
      url: BASE_URL + "/haandbogen/",
      inLanguage: "da-DK",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: a.length,
        itemListElement: a.map(function (x, i) {
          return { "@type": "ListItem", position: i + 1,
                   url: BASE_URL + "/haandbogen/" + x.slug + "/", name: x.h1 };
        })
      }
    }
  );

  return [
    // Titel 01-10-2026 til "varebil regler 2026" og "gule plader regler" (autoforslag).
    hoved(titel("Varebil regler 2026: gule plader, moms og afgift samlet"),
      beskrivelse("Må du køre hjem i en gulpladebil? Hvad koster papegøjeplader, og hvor meget " +
        "moms kan du trække fra? " + a.length + " guider med kilde hos myndighederne."),
      BASE_URL + "/haandbogen/", schema),
    header(),
    '<main id="indhold">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>' +
    '<li aria-current="page">Gulplade Håndbogen</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Opdateret ' + esc(datoDa(data.sidst_opdateret)) +
    ' · kilde på hvert udsagn</p>',
    '  <h1>Gulplade Håndbogen</h1>',
    '  <p class="hero-ny__manchet">Hvad må du køre? Hvad kan du trække fra? Og hvilke tal' +
    ' afgør, om bilen overhovedet kan bruges til arbejdet? Svarene står i lovgivningen —' +
    ' bare spredt ud over Motorstyrelsen, Den juridiske vejledning og Færdselsstyrelsen.' +
    ' Her er de samlet, med link til kilden ved hvert udsagn.</p>',
    '</section>',

    // Grupperne staar i viden.json, ikke i koden - raekkefoelgen er en
    // redaktionel beslutning, ikke en teknisk. Er en gruppe tom, springes den
    // over, saa oversigten aldrig viser en overskrift uden indhold.
    (data.grupper || []).map(function (g) {
      var i = a.filter(function (x) { return x.emne === g.navn; });
      if (!i.length) return '';
      return [
        '<section class="sektion haandbog-gruppe">',
        '  <h2>' + esc(g.navn) + '</h2>',
        g.kort ? '  <p class="sektion__manchet">' + esc(g.kort) + '</p>' : '',
        '  <div class="vidensgitter">',
        i.map(function (x) { return kortHTML(x, true); }).join("\n"),
        '  </div>',
        '</section>'
      ].filter(function (l) { return l !== ''; }).join("\n");
    }).join("\n"),

    // Sikkerhedsnet: en artikel med et emne, der ikke staar i grupperne, ville
    // ellers forsvinde fra oversigten uden at nogen opdagede det.
    (function () {
      var kendte = (data.grupper || []).map(function (g) { return g.navn; });
      var rest = a.filter(function (x) { return kendte.indexOf(x.emne) < 0; });
      if (!rest.length) return '';
      return [
        '<section class="sektion haandbog-gruppe">',
        '  <h2>Øvrige</h2>',
        '  <div class="vidensgitter">',
        rest.map(function (x) { return kortHTML(x, true); }).join("\n"),
        '  </div>',
        '</section>'
      ].join("\n");
    })(),

    '<section class="sektion">',
    '  <h2>Hvorfor håndbogen findes</h2>',
    '  <p>Et leasingtilbud er ikke svært at sammenligne, når man ved, hvad man kigger efter.' +
    ' Det svære er alt det udenom: om bilen må køre hjem, hvad momsen gør ved regnestykket,' +
    ' og hvorfor nyttelasten falder, når man krydser af i tilbehørslisten.</p>',
    '  <p>Reglerne står offentligt tilgængeligt, men de står ikke samlet, og de står ikke' +
    ' på dansk, man kan bruge til noget. Derfor den her håndbog. <strong>Hvert faktuelt udsagn' +
    ' har en kilde med dato</strong>, og hvor en sats reguleres årligt, skriver vi ikke tallet' +
    ' — vi henviser til myndigheden. Et forældet tal er værre end intet tal.</p>',
    '  <p>Nyt om bilerne — nye modeller, rækkevidder og registreringstal — står under ' +
    '<a href="/nyheder/">Nyheder</a>.</p>',
    '  <p>Mangler du svar på noget om gule plader, moms eller leasing af varebil, så ' +
    '<a href="/kontakt/">skriv til os</a> — så skriver vi en guide om det.</p>',
    '</section>',

    ctaBlok(),

    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// Nyhederne: nyeste foerst, efter udgivelsesdato.
function nyhedsoversigtHTML(data) {
  var a = data.artikler.filter(erNyhed).sort(function (x, y) {
    return String(y.udgivet).localeCompare(String(x.udgivet));
  });

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Nyheder", null]]),
    {
      "@type": "CollectionPage",
      name: "Nyheder om varebiler",
      url: BASE_URL + "/nyheder/",
      inLanguage: "da-DK",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: a.length,
        itemListElement: a.map(function (x, i) {
          return { "@type": "ListItem", position: i + 1, url: BASE_URL + sti(x), name: x.h1 };
        })
      }
    }
  );

  return [
    hoved(titel("Nyheder om varebiler og erhvervsleasing"),
      beskrivelse("Læs om nye varebiler, rækkevidde, ladetid og pris, og om hvor mange nye varebiler der bliver registreret i Danmark. Alle " + a.length + " nyheder har en kilde ved hvert tal."),
      BASE_URL + "/nyheder/", schema),
    header(),
    '<main id="indhold">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>' +
    '<li aria-current="page">Nyheder</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Senest ' + esc(datoDa(a.length ? a[0].udgivet : data.sidst_opdateret)) +
    ' · kilde på hvert tal</p>',
    '  <h1>Nyheder</h1>',
    '  <p class="hero-ny__manchet">Nye varebiler og nye tal fra producenterne og' +
    ' Mobility Denmark. Reglerne for gule plader, moms og leasing står i' +
    ' <a href="/haandbogen/">Håndbogen</a>.</p>',
    '</section>',

    '<section class="sektion">',
    '  <div class="vidensgitter">',
    a.map(function (x) { return kortHTML(x); }).join("\n"),
    '  </div>',
    '</section>',

    ctaBlok(),

    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// Fjerner undermapper, der ikke laengere svarer til en artikel i sektionen -
// ellers ligger en flyttet artikel tilbage som en kopi under den gamle adresse.
function ryd(dir, slugs) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (e) {
    if (e.isDirectory() && slugs.indexOf(e.name) < 0) {
      fs.rmSync(path.join(dir, e.name), { recursive: true, force: true });
      console.log("Fjernet: " + path.basename(dir) + "/" + e.name + "/");
    }
  });
}

// ── Kør ──────────────────────────────────────────────────────────────────────

function main() {
  var data = JSON.parse(fs.readFileSync(DATA_JSON, "utf8"));
  if (VIDEN_NY) {
    var ny = vidensNy(), antalNy = 0;
    data.artikler = data.artikler.map(function (a) { if (ny[a.slug]) { antalNy++; return ny[a.slug]; } return a; });
    console.log("GULPLADE_VIDEN_NY: " + antalNy + " artikler fra viden-ny.json");
  }
  TAL = beregnTal() || {};
  data.artikler = data.artikler.map(fyldUd).map(autoTabeller);
  // generate-pages viser artiklernes kort paa guide- og modelsider. Den laeser
  // denne fil, saa {{pladsholdere}} er udfyldt dér ogsaa (fejl rettet 01-10-2026).
  // .json i roden kommer ikke med i dist/ (se byg-dist.js).
  fs.writeFileSync(path.join(__dirname, "viden-udfyldt.json"),
    JSON.stringify({ artikler: data.artikler }), "utf8");
  console.log("Fandt " + data.artikler.length + " artikler (" +
              (TAL.tilbud || "?") + " tilbud i datagrundlaget)");

  mkdir(UD_DIR);
  mkdir(NYHED_DIR);
  fs.writeFileSync(path.join(UD_DIR, "index.html"), oversigtHTML(data), "utf8");
  fs.writeFileSync(path.join(NYHED_DIR, "index.html"), nyhedsoversigtHTML(data), "utf8");

  data.artikler.forEach(function (a) {
    var d = path.join(erNyhed(a) ? NYHED_DIR : UD_DIR, a.slug);
    mkdir(d);
    fs.writeFileSync(path.join(d, "index.html"), artikelHTML(a, data), "utf8");
  });

  var nyheder = data.artikler.filter(erNyhed);
  var guider = data.artikler.filter(function (a) { return !erNyhed(a); });
  ryd(UD_DIR, guider.map(function (a) { return a.slug; }));
  ryd(NYHED_DIR, nyheder.map(function (a) { return a.slug; }));

  console.log("OK: /haandbogen/ + " + guider.length + " guider, /nyheder/ + " + nyheder.length + " nyheder");
  console.log("Husk: node generate-pages.js bagefter, saa sitemap foelger med.");
}

main();
