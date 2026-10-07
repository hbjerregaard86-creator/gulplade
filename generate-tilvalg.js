// generate-tilvalg.js — /til-varebilen/
//
// Produkterne omkring bilen: forsikring, vinterhjul, indretning og
// el-abonnement. Det er de poster, der ligger uden for leasingydelsen, og
// afsaettet er sidens egne tal: ikke \xe9t af tilbuddene inkluderer forsikring,
// og ikke \xe9t inkluderer daek.
//
// Hvorfor en egen sektion og ikke artikler i haandbogen: haandbogen er
// udtrykkeligt ikke-kommerciel, og de her sider har knapper, der samler leads.
// Blandes de to, undergraver det haandbogens egen troevaerdighed. De linker
// til hinanden i stedet.
//
// Der staar ingen priser paa siderne. Erhvervsforsikring og opbygning
// prissaettes paa virksomheden og findes ikke i offentlige prislister, vi kan
// indsamle og datere, og kWh-priser er forkerte om tre uger. Samme regel som
// resten af sitet: vi regner kun paa tal, nogen har offentliggjort.

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://gulplade.dk";
// Nye emner og undersider ("ny": true i tilvalg.json) er kun med i
// preview-bygninger, indtil de er godkendt (04-10-2026). Saa kan resten af
// sektionen deployes til produktion som foer.
const MED_NYE = process.env.GULPLADE_TILVALG_NY === "1";
function aktiv(x) { return x && (!x.ny || MED_NYE); }
// 07-10-2026: alle sider med længere tekster og flere figurer (preview).
// Brugeren: "De skal være længere og der skal være mere grafik og illustrationer.
// De må gerne fylde en del da det er opslagstekster." De omskrevne sider står i
// tilvalg-ny.json ({ emner: { slug: felter }, undersider: { "emne/slug": side } }).
// Med GULPLADE_TILVALG_NY=1 erstatter en underside den gamle helt, og et emnes
// felter erstatter emnets (undersiderne røres ikke). Opskriften og tjekket står i
// tekst-gennemgang/tilvalg-ny/.
function tilvalgNy() {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "tilvalg-ny.json"), "utf8")); }
  catch (e) { return {}; }
}
const DATA_JSON = path.join(__dirname, "tilvalg.json");
const UD_DIR = path.join(__dirname, "til-varebilen");
const PARTNER_DIR = path.join(__dirname, "partner");
const partnere = require("./partnere.js");
const FIGUR = require("./tilvalg-figurer.js");
const VISUEL = require("./tilvalg-visuel.js");
// Tegninger og diagrammer til emner med et "data"-felt (indretning).
const GRAFIK = { indretning: require("./indretning-grafik.js") };
var BILER = null;
function grafikCtx(e) {
  if (!e.data || !GRAFIK[e.slug]) return null;
  BILER = BILER || JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler;
  var bil = BILER.filter(function (b) { return b.id === e.data.bil; })[0];
  if (!bil) throw new Error("tilvalg.json: ukendt bil " + e.data.bil + " i emnet " + e.slug);
  return { bil: bil, biler: BILER, data: e.data, g: GRAFIK[e.slug] };
}

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
  t = String(t).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (t.length <= DESC_MAKS) return t;
  var k = t.slice(0, DESC_MAKS);
  var p = Math.max(k.lastIndexOf(". "), k.lastIndexOf("? "), k.lastIndexOf("! "));
  if (p > DESC_MAKS * 0.55) return k.slice(0, p + 1);
  var i = k.lastIndexOf(" ");
  return (i > DESC_MAKS * 0.6 ? k.slice(0, i) : k).replace(/[\s,;—\-]+$/, "") + "…";
}

var DELEBILLEDE = BASE_URL + "/assets/img/del.png";

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
    '<nav class="bundmenu" aria-label="Sidens afsnit"><ul><li><a href="/">Varebilsleasing</a></li><li><a href="/haandbogen/leasing-af-varebil-til-erhverv/">Sådan leaser du en varebil</a></li><li><a href="/bedste-tilbud/">Bedste tilbud</a></li><li><a href="/haandbogen/">Håndbogen</a></li><li><a href="/haandbogen/gule-plader/">Gule plader</a></li><li><a href="/nyheder/">Nyheder</a></li><li><a href="/til-varebilen/">Til varebilen</a></li><li><a href="/udstyr/">Udstyr</a></li><li><a href="/garanti/">Garanti</a></li><li><a href="/elvarebiler/">Elvarebiler</a></li><li><a href="/groen-omstilling/">Grøn omstilling</a></li><li><a href="/sammenlign/">Sammenlign</a></li><li><a href="/brugte-varebiler/">Brugte varebiler</a></li><li><a href="/udbydere/">Udbydere</a></li><li><a href="/faa-tilbud/">Få tilbud</a></li><li><a href="/tilbudstjek/">Tjek dit tilbud</a></li><li><a href="/leasingberegner/">Leasingberegner</a></li><li><a href="/personbiler/">Personbiler</a></li><li><a href="/kontakt/">Kontakt</a></li><li><a href="/privatliv/">Privatliv</a></li><li><a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a></li><li><a href="https://www.linkedin.com/company/gulplade/" rel="me noopener" target="_blank">LinkedIn</a></li></ul></nav>',
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
    '<meta property="og:image" content="' + (billede || DELEBILLEDE) + '">',
    '<meta property="og:image:alt" content="' + esc(title) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + esc(title) + '">',
    '<meta name="twitter:description" content="' + esc(desc) + '">',
    '<meta name="twitter:image" content="' + (billede || DELEBILLEDE) + '">',
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
// Samme regel som i haandbogen: en saetning, der siger "ingen af de 54 tilbud",
// er forkert i det oejeblik, der kommer et tilbud mere. Derfor staar tallene
// som {{noegle}} i tilvalg.json og regnes ud her ved hver bygning.
//
// Mangler en noegle, braekker bygningen. En tom pladsholder i faerdig tekst er
// vaerre end en fejlmeddelelse.

function beregnTal() {
  var d = JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8"));
  var biler = d.varebiler;
  var t = biler.reduce(function (a, b) { return a.concat(b.tilbud || []); }, []);

  function har(x, felt, post) { return (x[felt] || []).indexOf(post) >= 0; }
  function tael(f) { return t.filter(f).length; }

  var tal = { tilbud: t.length, modeller: biler.length };

  ["daek", "forsikring"].forEach(function (p) {
    tal[p + "_inkl"] = tael(function (x) { return har(x, "inkluderet", p); });
    tal[p + "_ikke"] = tael(function (x) { return har(x, "ikke_inkluderet", p); });
    tal[p + "_tavs"] = t.length - tal[p + "_inkl"] - tal[p + "_ikke"];
  });

  var el = biler.filter(function (b) { return b.drivmiddel === "el"; });
  tal.el_modeller = el.length;
  tal.el_tilbud = el.reduce(function (a, b) { return a + (b.tilbud || []).length; }, 0);
  tal.nyttelast_modeller = biler.filter(function (b) { return b.nyttelast_kg != null; }).length;

  // Hvis et af de to noegletal en dag ikke laengere er nul, holder teksterne
  // ikke. Bedre at faa det at vide ved bygning end at opdage det paa siden.
  if (tal.daek_inkl || tal.forsikring_inkl) {
    console.log("ADVARSEL: et tilbud inkluderer nu dæk (" + tal.daek_inkl +
      ") eller forsikring (" + tal.forsikring_inkl + ") — teksterne i " +
      "tilvalg.json siger, at ingen gør. De skal rettes.");
  }

  var ud = {};
  Object.keys(tal).forEach(function (k) {
    ud[k] = typeof tal[k] === "number" ? tal[k].toLocaleString("da-DK") : tal[k];
  });
  return ud;
}

var TAL = {};

// Tallene i indretningsteksten ({{ind_...}}) regnes af modulerne i
// tilvalg.json (emnet indretning, feltet data), saa teksten, tabellerne og
// diagrammerne altid siger det samme.
function indretningTal(raa) {
  var e = raa.emner.filter(function (x) { return x.slug === "indretning"; })[0];
  if (!e || !e.data) return;
  var D = e.data;
  var bil = JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8"))
    .varebiler.filter(function (b) { return b.id === D.bil; })[0];
  var m = function (id) { return D.moduler.filter(function (x) { return x.id === id; })[0]; };
  var fmt = function (v) { return Number(v).toLocaleString("da-DK", { maximumFractionDigits: 1 }); };
  var spaend = function (liste, rund) {
    var lo = Math.min.apply(null, liste), hi = Math.max.apply(null, liste);
    var r = function (v) { return rund ? Math.round(v / rund) * rund : v; };
    return fmt(r(lo)) + "–" + fmt(r(hi));
  };
  var afType = function (type, f) {
    return D.moduler.filter(function (x) { return x.type === type; }).map(f);
  };
  var kgm = function (x) { return x.vaegt_kg / x.laengde_mm * 1000; };
  var krm = function (x) { return x.pris / x.laengde_mm * 1000; };
  var opV = D.opstillinger.map(function (o) { return o.moduler.reduce(function (a, id) { return a + m(id).vaegt_kg; }, 0); });
  var opP = D.opstillinger.map(function (o) { return o.moduler.reduce(function (a, id) { return a + m(id).pris; }, 0); });
  var v = m(D.venstre), h = m(D.hoejre);
  TAL.ind_dybde = fmt(v.dybde_mm);
  TAL.ind_gang = fmt(bil.lastrum.bredde_max_mm - v.dybde_mm - h.dybde_mm);
  TAL.ind_over = fmt(bil.lastrum.hoejde_mm - Math.max(v.hoejde_mm, h.hoejde_mm));
  TAL.ind_nyttelast = fmt(bil.nyttelast_kg);
  TAL.ind_kgm_hylder = spaend(afType("hylder", kgm), 1);
  TAL.ind_kgm_skuffer = spaend(afType("skuffer", kgm), 1);
  TAL.ind_krm_hylder = spaend(afType("hylder", krm), 100);
  TAL.ind_krm_skuffer = spaend(afType("skuffer", krm), 100);
  TAL.ind_modul_pris = spaend(D.moduler.map(function (x) { return x.pris; }), 100);
  TAL.ind_op_vaegt = spaend(opV, 1);
  TAL.ind_op_pris = spaend(opP, 100);
  TAL.ind_op_pct = spaend(opV.map(function (kg) { return Math.round(1000 * kg / bil.nyttelast_kg) / 10; }), 0);
}

function pladsholdere(s) {
  return String(s).replace(/\{\{(\w+)\}\}/g, function (_, n) {
    if (!(n in TAL)) {
      throw new Error("Ukendt pladsholder {{" + n + "}} i tilvalg.json. " +
        "Kendte: " + Object.keys(TAL).sort().join(", "));
    }
    return TAL[n];
  });
}

// Hele traeet koeres igennem \xe9n gang lige efter indlaesning, ikke felt for felt.
// Ellers staar der {{tilbud}} i en titel eller i et schema, foerste gang nogen
// tilfoejer et felt uden at taenke over det.
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

// ── Sider ────────────────────────────────────────────────────────────────────

// saetning: valgfri erstatning for "X kommer med i tilbuddet" (feltet cta_saetning
// i tilvalg.json), til emner hvor den formulering ikke passer.
function ctaBlok(emne, saetning) {
  return [
    '<section class="sektion">',
    '<div class="kort" style="border-color:var(--gul);border-width:2px">',
    '<h2>Skal vi hente tilbuddene hjem?</h2>',
    '<p>Vi ringer rundt til forhandlerne, beder om det samme hos alle og læser ' +
      'tilbuddene igennem, før du ser dem. ' + (saetning || esc(emne.charAt(0).toUpperCase() + emne.slice(1)) +
      ' kommer med i tilbuddet, hvis du ønsker det.') + '</p>',
    '<p><strong>Gratis for dig.</strong> Forhandleren betaler os for henvendelsen. ' +
      'Alle betaler det samme beløb, og de betaler, uanset om du siger ja eller nej.</p>',
    '<p style="margin-top:1.25rem"><a href="/faa-tilbud/" class="knap knap--primaer">' +
      'Få tilbud</a> <a href="/tilbudstjek/" class="knap knap--sekundaer">' +
      'Eller få tjekket et tilbud, du har</a></p>',
    '</div>',
    '</section>'
  ].join("\n");
}

function spoergsmaalHTML(liste, titel, manchet) {
  if (!liste || !liste.length) return "";
  return [
    '<section class="sektion">',
    '  <h2>' + esc(titel || 'Spørgsmål, der skal stilles') + '</h2>',
    '  <p class="sektion__manchet">' + (manchet ? esc(manchet) : 'Kopier dem ind i en mail. Står svaret ikke på ' +
      'skrift, er det ikke aftalt.') + '</p>',
    '  <ul class="viden__liste">',
    liste.map(function (s) { return '    <li>' + s + '</li>'; }).join("\n"),
    '  </ul>',
    '</section>'
  ].join("\n");
}

function faqHTML(faq) {
  if (!faq || !faq.length) return "";
  return [
    '<section class="sektion">',
    '  <h2>Ofte stillede spørgsmål</h2>',
    faq.map(function (q) {
      return '  <details class="faq__punkt"><summary>' + esc(q[0]) +
        '</summary><p>' + q[1] + '</p></details>';
    }).join("\n"),
    '</section>'
  ].join("\n");
}

function kilderHTML(kilder) {
  if (!kilder || !kilder.length) return "";
  return [
    '<div class="forbehold">',
    '  <h2>Kilder</h2>',
    '  <ul class="viden__liste">',
    kilder.map(function (k) {
      return '    <li><a href="' + esc(k.url) + '" rel="noopener">' + esc(k.navn) +
        '</a>' + (k.dato ? ', hentet ' + esc(datoDa(k.dato)) : '') + '</li>';
    }).join("\n"),
    '  </ul>',
    '  <p>Siden er ikke skatte-, revisions- eller juridisk rådgivning. Regler og ' +
      'satser kan være ændret siden den dato, der står ved kilden.</p>',
    '</div>'
  ].join("\n");
}

function andreHTML(emner, nu) {
  var andre = emner.filter(function (e) { return e.slug !== nu; });
  if (!andre.length) return "";
  return [
    '<section class="sektion">',
    '  <h2>Mere til varebilen</h2>',
    '  <ul class="viden__liste">',
    andre.map(function (e) {
      return '    <li><a href="/til-varebilen/' + e.slug + '/"><strong>' +
        esc(e.navn) + '</strong></a> — ' + e.kort + '</li>';
    }).join("\n"),
    '  </ul>',
    '</section>'
  ].join("\n");
}

// En tabel som kort: foerste kolonne er kortets titel, resten staar under med
// kolonnenavnet som etiket. Til tabeller med faa raekker og lange celler.
function tabelKort(t) {
  return '  <div class="tv-tabelkort">' + t.raekker.map(function (r) {
    return '<div class="tv-tabelkort__kort"><h3>' + r[0] + '</h3><dl>' + r.slice(1).map(function (c, i) {
      return c === "—" ? '' : '<dt>' + esc(t.kolonner[i + 1]) + '</dt><dd>' + c + '</dd>';
    }).join("") + '</dl></div>';
  }).join("") + '</div>' + (t.note ? '\n  <p class="kilde">' + t.note + '</p>' : '');
}

// Sektionerne paa en emne- eller underside. Alle felter undtagen overskriften
// er valgfrie: tekst, punkter, tabel, kort, grafik og tekst efter tabellen.
function afsnitHTML(afsnit, gctx) {
  return (afsnit || []).filter(aktiv).map(function (a) {
    // Punktlister med ikoner og tabeller vist som kort (godkendt 05-10-2026).
    var ikon = a.punkt_ikon ? ' tv-ikonliste tv-ikonliste--' + a.punkt_ikon : '';
    return [
      '<section class="sektion" id="' + VISUEL.idFra(a.overskrift) + '">',
      '  <h2>' + esc(a.overskrift) + '</h2>',
      (a.tekst || []).map(function (t) { return '  <p>' + t + '</p>'; }).join("\n"),
      // Valgfri punktliste og tabel - til sider, der gennemgaar et marked
      // (varerumssikring), hvor en oversigt siger mere end fem afsnit.
      a.punkter && a.punkter.length
        ? '  <ul class="viden__liste' + ikon + '">\n' + a.punkter.map(function (p) {
            return '    <li>' + p + '</li>'; }).join("\n") + '\n  </ul>' : '',
      // visning: "kort" viser tabellen som kort, "skjul" udelader den, fordi en
      // figur i samme sektion viser de samme tal.
      a.tabel && a.tabel.visning === "kort" ? tabelKort(a.tabel) : '',
      a.tabel && !a.tabel.visning ? [
        '  <div class="tilbud-tabel-wrap"><table class="tilbud-tabel">',
        '    <thead><tr>' + a.tabel.kolonner.map(function (k) {
          return '<th scope="col">' + esc(k) + '</th>'; }).join("") + '</tr></thead>',
        '    <tbody>',
        a.tabel.raekker.map(function (r) {
          return '      <tr><th scope="row">' + r[0] + '</th>' + r.slice(1).map(function (c) {
            return '<td>' + c + '</td>'; }).join("") + '</tr>';
        }).join("\n"),
        '    </tbody>',
        '  </table></div>',
        a.tabel.note ? '  <p class="kilde">' + a.tabel.note + '</p>' : ''
      ].filter(Boolean).join("\n") : '',
      // Valgfri kort i et gitter: [[titel, tekst], ...]. Kortere end en punktliste.
      a.kort && a.kort.length ? '  <div class="emnekort">' + a.kort.map(function (k) {
        return '<div class="emnekort__kort"><h3>' + esc(k[0]) + '</h3><p>' + k[1] + '</p></div>'; }).join("") + '</div>' : '',
      gctx && a.grafik ? gctx.g[a.grafik](gctx) : '',
      // Illustrationer fra data (tilvalg-figurer.js): noegletal, soejler, daekning, trin, svg.
      a.figur ? FIGUR.figur([].concat(a.figur).filter(aktiv)) : '',
      (a.efter || []).map(function (t) { return '  <p>' + t + '</p>'; }).join("\n"),
      '</section>'
    ].filter(function (l) { return l !== ''; }).join("\n");
  }).join("\n");
}

// Undergrenene til et emne som kort lige under toppen. e._links saettes i
// main(): de generiske undersider plus indretningens egne (fag, regler osv.).
function undersiderHTML(e, nu) {
  var l = (e._links || []).filter(function (x) { return x.sti !== nu; });
  if (!l.length) return "";
  // Kompakte links frem for kort: paa mobil skubbede 17 kort indholdet langt ned.
  return [
    '<section class="sektion">',
    '  <h2>' + (nu ? 'Mere om ' + esc(e.navn.toLowerCase()) : 'Guider om ' + esc(e.navn.toLowerCase())) + '</h2>',
    '  <p class="maerkelinks">' + l.map(function (x) {
      return '<a href="' + x.sti + '">' + esc(x.navn) + '</a>';
    }).join("") + '</p>',
    '</section>'
  ].join("\n");
}

function underSideHTML(e, u, data) {
  var sti = "/til-varebilen/" + e.slug + "/" + u.slug + "/";
  var canonical = BASE_URL + sti;
  var desc = beskrivelse(u.beskrivelse || u.manchet);
  var h1 = u.h1 || u.titel;
  // Topbillede, kort fortalt, indholdsfortegnelse og tilbudsstribe (tilvalg-visuel.js).
  var vis = aktiv(u.visuel) ? u.visuel : null;
  if (vis && vis.stribe) BILER = BILER || JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler;
  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Til varebilen", "/til-varebilen/"],
                  [e.navn, "/til-varebilen/" + e.slug + "/"], [u.navn, null]]),
    {
      "@type": "Article",
      headline: h1,
      description: desc,
      inLanguage: "da-DK",
      mainEntityOfPage: canonical,
      publisher: { "@type": "Organization", name: "Gulplade.dk", url: BASE_URL + "/" },
      dateModified: data.sidst_opdateret
    },
    u.faq && u.faq.length ? {
      "@type": "FAQPage",
      mainEntity: u.faq.map(function (q) {
        return { "@type": "Question", name: q[0],
                 acceptedAnswer: { "@type": "Answer", text: String(q[1]).replace(/<[^>]+>/g, "") } };
      })
    } : null
  );
  return [
    hoved(titel(u.titel), desc, canonical, schema, e.billede ? BASE_URL + e.billede : null),
    header(),
    '<main id="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>' +
      '<li><a href="/til-varebilen/">Til varebilen</a></li>' +
      '<li><a href="/til-varebilen/' + e.slug + '/">' + esc(e.navn) + '</a></li>' +
      '<li aria-current="page">' + esc(u.navn) + '</li></ol></nav>',
    '<section class="hero-ny">',
    '  <p class="hero-ny__over"><span>' + esc(e.navn) + ' · opdateret ' +
      esc(datoDa(data.sidst_opdateret)) + '</span></p>',
    '  <h1>' + esc(h1) + '</h1>',
    '  <p class="hero-ny__manchet">' + u.manchet + '</p>',
    vis && vis.hero ? '  ' + VISUEL.heroSVG(vis.hero, vis.hero_el) : '',
    '</section>',
    vis ? VISUEL.kortFortalt(vis.kort_fortalt) : '',
    vis && vis.toc ? VISUEL.toc((u.afsnit || []).filter(aktiv)) : '',
    afsnitHTML(u.afsnit, null),
    spoergsmaalHTML(u.spoergsmaal, u.spoergsmaal_titel, u.spoergsmaal_manchet),
    partnere.emneBlok(e.slug, "Partner i " + e.navn.toLowerCase()),
    vis ? VISUEL.stribe(vis.stribe, BILER) : '',
    ctaBlok(e.navn.toLowerCase(), e.cta_saetning),
    faqHTML(u.faq),
    undersiderHTML(e, sti),
    '<p style="margin-top:1rem"><a href="/til-varebilen/' + e.slug + '/">' + esc(e.navn) +
      ': hele oversigten</a> · <a href="/til-varebilen/">Alt til varebilen</a></p>',
    kilderHTML(u.kilder),
    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

function emneHTML(e, data) {
  var gctx = grafikCtx(e);
  // Emnesiderne kan have samme "visuel" som undersiderne (07-10-2026, preview).
  var vis = aktiv(e.visuel) ? e.visuel : null;
  if (vis && vis.stribe) BILER = BILER || JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler;
  var canonical = BASE_URL + "/til-varebilen/" + e.slug + "/";
  var desc = beskrivelse(e.beskrivelse || e.manchet);

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Til varebilen", "/til-varebilen/"],
                  [e.navn, null]]),
    {
      "@type": "Article",
      headline: e.titel,
      image: e.billede ? BASE_URL + e.billede : undefined,
      description: desc,
      inLanguage: "da-DK",
      mainEntityOfPage: canonical,
      publisher: { "@type": "Organization", name: "Gulplade.dk", url: BASE_URL + "/" },
      dateModified: data.sidst_opdateret
    },
    e.faq && e.faq.length ? {
      "@type": "FAQPage",
      mainEntity: e.faq.map(function (q) {
        return { "@type": "Question", name: q[0],
                 acceptedAnswer: { "@type": "Answer",
                                   text: String(q[1]).replace(/<[^>]+>/g, "") } };
      })
    } : null
  );

  return [
    hoved(titel(e.titel), desc, canonical, schema, e.billede ? BASE_URL + e.billede : null),
    header(),
    '<main id="indhold">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>' +
      '<li><a href="/til-varebilen/">Til varebilen</a></li>' +
      '<li aria-current="page">' + esc(e.navn) + '</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over"><span>Til varebilen · opdateret ' +
      esc(datoDa(data.sidst_opdateret)) + '</span></p>',
    '  <h1>' + esc(e.titel) + '</h1>',
    '  <p class="hero-ny__manchet">' + e.manchet + '</p>',
    gctx && e.noegletal ? '  ' + gctx.g.noegletal(gctx) : '',
    vis && vis.hero ? '  ' + VISUEL.heroSVG(vis.hero, vis.hero_el) : '',
    '</section>',
    vis ? VISUEL.kortFortalt(vis.kort_fortalt) : '',

    undersiderHTML(e),
    vis && vis.toc ? VISUEL.toc((e.afsnit || []).filter(aktiv)) : '',
    afsnitHTML(e.afsnit, gctx),

    spoergsmaalHTML(e.spoergsmaal, e.spoergsmaal_titel, e.spoergsmaal_manchet),
    partnere.emneBlok(e.slug, "Partner i " + e.navn.toLowerCase()),
    vis ? VISUEL.stribe(vis.stribe, BILER) : '',
    ctaBlok(e.navn.toLowerCase(), e.cta_saetning),
    faqHTML(e.faq),
    andreHTML(data.emner, e.slug),
    kilderHTML(e.kilder),

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

function emneKort(e) {
  var n = (e._links || []).length;
  return [
    '    <article class="videnkort">',
    '      <a href="/til-varebilen/' + e.slug + '/">',
    '        <h3>' + esc(e.navn) + '</h3>',
    '        <p class="videnkort__kort">' + e.kort + '</p>',
    n ? '        <p class="videnkort__meta">' + n + ' guider</p>' : '',
    '      </a>',
    '    </article>'
  ].filter(Boolean).join("\n");
}

var GRUPPER = [
  ["bilen", "Bilen"],
  ["lastrummet", "Lastrummet"],
  ["udenpaa", "Udenpå bilen"],
  ["drift", "Drift og energi"],
  ["udskiftning", "Når bilen skal skiftes ud"]
];

// Oversigten med mange emner: grupperet, og bagefter alle undersider som
// links, saa hver guide kan naas fra /til-varebilen/ i et klik.
function indexGrupper(data) {
  var grp = GRUPPER.map(function (g) {
    var es = data.emner.filter(function (e) { return (e.gruppe || "bilen") === g[0]; });
    if (!es.length) return "";
    return [
      '<section class="sektion" style="padding-left:0;padding-right:0">',
      '  <h2>' + esc(g[1]) + '</h2>',
      '  <div class="vidensgitter">',
      es.map(emneKort).join("\n"),
      '  </div>',
      '</section>'
    ].join("\n");
  }).join("\n");
  var alle = data.emner.filter(function (e) { return (e._links || []).length; }).map(function (e) {
    return '  <h3><a href="/til-varebilen/' + e.slug + '/">' + esc(e.navn) + '</a></h3>\n' +
      '  <p class="maerkelinks">' + e._links.map(function (x) {
        return '<a href="' + x.sti + '">' + esc(x.navn) + '</a>'; }).join("") + '</p>';
  }).join("\n");
  return grp + (alle ? '\n<section class="sektion tv-alle">\n  <h2>Alle guider</h2>\n' + alle + '\n</section>' : '');
}

// Kompakt oversigt (05-10-2026, brugeren: "meget store mellemrum"): eet gitter
// med alle emner. Gruppen staar som lille etiket, og de vigtigste guider som
// smaa links i selve kortet. Erstatter fem gruppesektioner og "Alle guider".
var VIS_GUIDER = 6;
function indexKompakt(data) {
  var navn = {};
  GRUPPER.forEach(function (g) { navn[g[0]] = g[1]; });
  var orden = GRUPPER.map(function (g) { return g[0]; });
  var es = data.emner.slice().sort(function (a, b) {
    return orden.indexOf(a.gruppe || "bilen") - orden.indexOf(b.gruppe || "bilen");
  });
  return [
    '<section class="sektion tv-oversigt">',
    '  <h2 class="skjult">Emnerne</h2>',
    '  <div class="tv-emner">',
    es.map(function (e) {
      var l = e._links || [], rest = l.length - VIS_GUIDER;
      return [
        '    <article class="tv-emne">',
        '      <p class="tv-emne__gruppe">' + esc(navn[e.gruppe || "bilen"]) + '</p>',
        '      <h3><a href="/til-varebilen/' + e.slug + '/">' + esc(e.navn) + '</a></h3>',
        '      <p class="tv-emne__kort">' + e.kort + '</p>',
        l.length ? '      <p class="maerkelinks tv-emne__guider">' + l.slice(0, VIS_GUIDER).map(function (x) {
          return '<a href="' + x.sti + '">' + esc(x.navn) + '</a>'; }).join("") +
          (rest > 0 ? '<a href="/til-varebilen/' + e.slug + '/" class="tv-emne__flere">+' + rest + ' flere</a>' : '') + '</p>' : '',
        '    </article>'
      ].filter(Boolean).join("\n");
    }).join("\n"),
    '  </div>',
    '</section>'
  ].join("\n");
}

function indexHTML(data) {
  var s = data.sektion;
  var canonical = BASE_URL + "/til-varebilen/";
  var desc = beskrivelse(s.beskrivelse);

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Til varebilen", null]]),
    {
      "@type": "CollectionPage",
      name: s.titel,
      description: desc,
      inLanguage: "da-DK",
      mainEntityOfPage: canonical,
      dateModified: data.sidst_opdateret,
      hasPart: data.emner.map(function (e) {
        return { "@type": "Article", headline: e.titel,
                 url: BASE_URL + "/til-varebilen/" + e.slug + "/" };
      })
    }
  );

  return [
    hoved(titel(s.titel), desc, canonical, schema, BASE_URL + "/assets/img/til-varebilen/oversigt-del.jpg"),
    header(),
    '<main id="indhold">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>' +
      '<li aria-current="page">Til varebilen</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over"><span>Opdateret ' +
      esc(datoDa(data.sidst_opdateret)) + ' · tallene regnes af vores egen tabel</span></p>',
    '  <h1>' + esc(s.titel) + '</h1>',
    '  <p class="hero-ny__manchet">' + s.manchet + '</p>',
    s.manchet2 ? '  <p class="hero-ny__manchet">' + s.manchet2 + '</p>' : '',
    // Topbilledet er brugerens eget (godkendt 05-10-2026).
    '  <figure class="tv-hero"><img src="/assets/img/til-varebilen/oversigt-1248.webp" ' +
      'srcset="/assets/img/til-varebilen/oversigt-800.webp 800w, /assets/img/til-varebilen/oversigt-1248.webp 1248w" ' +
      'sizes="(max-width: 1280px) 100vw, 1200px" width="1248" height="832" fetchpriority="high" ' +
      'alt="Varebil med indretning i varerummet og ikoner for forsikring, dæk, service, indretning, sikring, folie, træk, opladning og flådestyring"></figure>',
    '</section>',

    indexKompakt(data) || [
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '  <h2 class="skjult">Emnerne</h2>',
    // Samme gitter og samme kort som haandbogen bruger. En .videnkort uden
    // .vidensgitter omkring sig staar bare som en blok i fuld bredde.
    '  <div class="vidensgitter">',
    data.emner.map(emneKort).join("\n"),
    '  </div>',
    '</section>'].join("\n"),

    // 07-10-2026: "driftsposter" brød regel 3 i CLAUDE.md; den nye tekst er kun i preview.
    MED_NYE ? [
    '<section class="sektion">',
    '  <h2>Det står ikke i leasingydelsen</h2>',
    '  <p>Forsikring, dæk, indretning, opladning og sikring får en pris ud fra ' +
      'virksomheden og den måde, bilen bliver brugt på, og ikke ud fra bilen alene. ' +
      'Derfor står de sjældent i en leasingannonce, og de kommer oven i den månedspris, ' +
      'du sammenligner tilbuddene på.</p>',
    '  <p>I <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">gennemgangen af alle {{tilbud}} tilbud</a> ' +
      'kan du se, hvad der følger med i hvert tilbud, fx service, dæk og forsikring.</p>',
    '</section>'].join("\n") : [
    '<section class="sektion">',
    '  <h2>Poster uden for ydelsen</h2>',
    '  <p>Forsikring, dæk, indretning, opladning og sikring prissættes på ' +
      'virksomheden og bilens brug, ikke på bilen alene. Derfor står de sjældent ' +
      'i en leasingannonce og kommer oven i den månedspris, tilbuddene sammenlignes på.</p>',
    '  <p>Hvilke driftsposter hvert enkelt tilbud dækker, står i ' +
      '<a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">gennemgangen af alle {{tilbud}} tilbud</a>.</p>',
    '</section>'].join("\n"),

    ctaBlok("de poster, der ligger uden for ydelsen"),

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── main ─────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(DATA_JSON)) {
    console.error("Fejl: Kan ikke finde tilvalg.json i " + __dirname);
    process.exit(1);
  }

  TAL = beregnTal();
  var raa = JSON.parse(fs.readFileSync(DATA_JSON, "utf8"));
  if (MED_NYE) {
    var ny = tilvalgNy(), antalNy = 0;
    raa.emner.forEach(function (e) {
      var ne = (ny.emner || {})[e.slug];
      if (ne) {
        antalNy++;
        Object.keys(ne).forEach(function (k) { if (k !== "undersider" && k !== "data") e[k] = ne[k]; });
      }
      e.undersider = (e.undersider || []).map(function (u) {
        var nu = (ny.undersider || {})[e.slug + "/" + u.slug];
        if (nu) antalNy++;
        return nu || u;
      });
    });
    console.log("GULPLADE_TILVALG_NY: " + antalNy + " sider fra tilvalg-ny.json");
  }
  indretningTal(raa);
  var data = fyldUd(raa);
  // Preview-tekster til oversigten, naar de nye emner er med.
  if (MED_NYE && data.sektion.ny) Object.keys(data.sektion.ny).forEach(function (k) { data.sektion[k] = data.sektion.ny[k]; });
  data.emner = data.emner.filter(aktiv);
  data.emner.forEach(function (e) { e.undersider = (e.undersider || []).filter(aktiv); });
  // Nye FAQ og kilder til eksisterende sider ligger i faq_ny/kilder_ny, saa de
  // kun kommer med i preview-bygninger, indtil de er godkendt.
  data.emner.forEach(function (e) {
    [e].concat(e.undersider).forEach(function (x) {
      x.faq = (x.faq || []).concat(MED_NYE ? x.faq_ny || [] : []);
      x.kilder = (x.kilder || []).concat(MED_NYE ? x.kilder_ny || [] : []);
    });
  });

  // Undergrenene pr. emne. Indretning har desuden sine genererede sider
  // (fag, regler, skuffer, brugt); bilsiderne naas fra tabellen paa siden.
  var indSider = require("./indretning-sider.js");
  data.emner.forEach(function (e) {
    e._links = e.undersider.map(function (u) {
      return { sti: "/til-varebilen/" + e.slug + "/" + u.slug + "/", navn: u.navn, kort: u.kort };
    });
    if (e.slug === "indretning") e._links = e._links.concat(indSider.links());
  });

  console.log("Fandt " + data.emner.length + " emner (" + TAL.tilbud +
    " tilbud i datagrundlaget)" + (MED_NYE ? " — med nye sider (preview)" : ""));

  mkdir(UD_DIR);
  // Mapper til emner, der ikke er aktive (fx nye emner efter en preview-
  // bygning), ryddes, saa de ikke kommer med i dist.
  var slugs = data.emner.map(function (e) { return e.slug; });
  fs.readdirSync(UD_DIR, { withFileTypes: true }).forEach(function (x) {
    if (x.isDirectory() && slugs.indexOf(x.name) < 0) fs.rmSync(path.join(UD_DIR, x.name), { recursive: true, force: true });
  });
  fs.writeFileSync(path.join(UD_DIR, "index.html"),
    pladsholdere(indexHTML(data)), "utf8");

  data.emner.forEach(function (e) {
    var dir = path.join(UD_DIR, e.slug);
    mkdir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), emneHTML(e, data), "utf8");
    // Undermapperne ryddes foerst, saa en underside, der udgaar, ogsaa forsvinder.
    fs.readdirSync(dir, { withFileTypes: true }).forEach(function (x) {
      if (x.isDirectory()) fs.rmSync(path.join(dir, x.name), { recursive: true, force: true });
    });
  });

  // Undersider til indretning (bil, fag, regler, skuffer, brugt).
  var indDir = path.join(UD_DIR, "indretning");
  var indE = data.emner.filter(function (e) { return e.slug === "indretning"; })[0];
  var antalInd = indSider.skriv(indDir,
    { hoved: hoved, header: header, footer: footer, titel: titel,
      ekstra: indE ? indE.undersider.map(function (u) { return { sti: "/til-varebilen/indretning/" + u.slug + "/", navn: u.navn }; }) : [] },
    GRAFIK.indretning, partnere);
  console.log("Indretning: " + antalInd + " undersider");

  // De generiske undersider fra tilvalg.json.
  var antalU = 0;
  data.emner.forEach(function (e) {
    e.undersider.forEach(function (u) {
      var d = path.join(UD_DIR, e.slug, u.slug);
      mkdir(d);
      fs.writeFileSync(path.join(d, "index.html"), underSideHTML(e, u, data), "utf8");
      antalU++;
    });
  });
  console.log("Undersider fra tilvalg.json: " + antalU);

  // Profilsiderne bygges forfra hver gang, saa en udloebet partner ogsaa
  // forsvinder fra /partner/ og ikke kun fra emnesiden.
  fs.rmSync(PARTNER_DIR, { recursive: true, force: true });
  var biler = JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler;
  var ps = partnere.alle();
  ps.forEach(function (p) {
    var dir = path.join(PARTNER_DIR, p.slug);
    mkdir(dir);
    fs.writeFileSync(path.join(dir, "index.html"),
      partnere.profilSide(p, { hoved: hoved, header: header, footer: footer }, biler), "utf8");
  });

  console.log("OK: /til-varebilen/ + " + data.emner.length + " sider, " + ps.length + " partnere");
  console.log("Husk: node generate-pages.js bagefter, saa sitemap foelger med.");
}

main();
