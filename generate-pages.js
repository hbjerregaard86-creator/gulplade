#!/usr/bin/env node
/**
 * gulplade.dk — Statisk sidegenerator
 * Forket fra leasio.dk's generate-pages.js.
 *
 * Kør: node generate-pages.js
 *
 * Genererer:
 *   /varebiler/                      oversigt
 *   /varebiler/<maerke>/<model>/     modelside med tilbudssammenligning
 *   sitemap.xml, robots.txt
 */
"use strict";
const fs   = require("fs");
const path = require("path");
const partnere = require("./partnere.js");

const BASE_URL   = "https://gulplade.dk";
const DATA_JSON  = path.join(__dirname, "varebiler.json");
const UD_DIR     = path.join(__dirname, "varebiler");

// ── Hjælpere ─────────────────────────────────────────────────────────────────

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
// De to haandskrevne sider - tilbudstjek og saadan-tjener-vi-penge - har
// ingen generator. De faar CSS-versionen stemplet ind her, saa de ikke
// bliver haengende paa et gammelt stylesheet efter en aendring.
function skrivVersioneredeFiler() {
  var mappe = path.join(__dirname, "assets");
  [["style", "css", CSS_V], ["samtykke", "js", SAMTYKKE_V]].forEach(function (x) {
    if (!x[2]) return;
    var navn = x[0] + "." + x[2] + "." + x[1];
    fs.copyFileSync(path.join(mappe, x[0] + "." + x[1]), path.join(mappe, navn));
    fs.readdirSync(mappe).forEach(function (f) {
      var m = f.match(new RegExp("^" + x[0] + "\\.([a-f0-9]{8})\\." + x[1] + "$"));
      if (m && m[1] !== x[2]) fs.unlinkSync(path.join(mappe, f));
    });
  });
}

function stemplCssVersion() {
  ["tilbudstjek", "saadan-tjener-vi-penge", "annoncer-paa-gulplade"].forEach(function (navn) {
    var sti = path.join(__dirname, navn, "index.html");
    if (!fs.existsSync(sti)) return;
    var h = fs.readFileSync(sti, "utf8");
    var ny = h.replace(/\/assets\/style(\.[a-f0-9]{8})?\.css(\?v=[a-f0-9]*)?/g,
                       "/assets/" + (CSS_V ? "style." + CSS_V + ".css" : "style.css"))
              .replace(/\/assets\/samtykke(\.[a-f0-9]{8})?\.js(\?v=[a-f0-9]*)?/g,
                       "/assets/samtykke." + SAMTYKKE_V + ".js");
    if (ny !== h) { fs.writeFileSync(sti, ny, "utf8"); console.log("Stemplet CSS-version i /" + navn + "/"); }
  });
}
// ── Titler og beskrivelser til soegemaskiner ─────────────────────────────────
//
// Google klipper titlen omkring 60 tegn og beskrivelsen omkring 160. Bliver de
// klippet, forsvinder netop det, der skulle faa nogen til at klikke. Derfor:
// byg det vigtigste foerst, og haeng sidenavnet paa bagefter - men kun hvis
// der er plads. Domaenet staar alligevel lige under titlen i resultatet.

var TITEL_MAKS = 60;
var DESC_MAKS = 158;
var SIDENAVN = " | Gulplade.dk";

function titel(kerne) {
  kerne = String(kerne).trim();
  if (kerne.length + SIDENAVN.length <= TITEL_MAKS) return kerne + SIDENAVN;
  if (kerne.length <= TITEL_MAKS) return kerne;
  // For lang selv uden sidenavn: klip ved naermeste ordskel, aldrig midt i et ord.
  var k = kerne.slice(0, TITEL_MAKS - 1);
  var i = k.lastIndexOf(" ");
  if (i > TITEL_MAKS * 0.6) k = k.slice(0, i);
  return k.replace(/[\s\u2014\-,\u00b7]+$/, "") + "\u2026";
}

// Flere forslag til samme titel, bedst foerst: brug det foerste, der kan staa
// helt, saa titlen aldrig ender paa "..." midt i en pris.
function titelDerPasser(forslag) {
  forslag = forslag.filter(Boolean);
  for (var i = 0; i < forslag.length; i++) {
    if (String(forslag[i]).trim().length <= TITEL_MAKS) return titel(forslag[i]);
  }
  return titel(forslag[forslag.length - 1]);
}

// Beskrivelsen klippes ved saetningsskel, saa den ender et sted der giver mening.
function beskrivelse(tekst) {
  tekst = String(tekst).replace(/\s+/g, " ").trim();
  if (tekst.length <= DESC_MAKS) return tekst;
  var k = tekst.slice(0, DESC_MAKS);
  // Sidste rigtige sætningsslut. "ekskl.", "kr." og lignende forkortelser er
  // ikke et punktum, beskrivelsen må ende på - før blev den skåret af midt i
  // "Priser ekskl." (28-09-2026).
  var FORKORT = /(?:^|\s)(ekskl|inkl|bl\.a|fx|ca|kr|mdr|md|nr|mv|osv|jf|evt|ift|pr)\.$/i;
  var p = -1, m, re = /[.?!](?=\s)/g;
  while ((m = re.exec(k))) { if (!FORKORT.test(k.slice(0, m.index + 1))) p = m.index; }
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
// Nyheder ligger under /nyheder/, guiderne under /haandbogen/ (se generate-viden.js).
function videnSti(a) { return (a.sektion === "nyheder" ? "/nyheder/" : "/haandbogen/") + a.slug + "/"; }

function esc(s) {
  if (s === 0) return "0";
  if (!s) return "";
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
                  .replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function mkdir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function slug(s) {
  return String(s || "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ë/g, "e")
    .replace(/[./]+/g, "-")
    .replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");
}
// Navnet på bilkortet. "(diesel)" skiller dieselen fra elbilen i URL og titel,
// men på kortet siger undertitlen allerede, hvilken motor bilen har.
function kortNavn(bil) { return String(bil.model || "").replace(/\s*\(diesel\)$/, ""); }
// Drivmidlet som det skal læses. "plugin" er en plug-in hybrid (PHEV).
var DRIVMIDDEL_NAVN = { diesel: "diesel", el: "el", benzin: "benzin", plugin: "plug-in hybrid" };
function drivmiddelNavn(d) { return DRIVMIDDEL_NAVN[d] || d || ""; }
// Har bilen et traktionsbatteri (og dermed batterigaranti)?
function harBatteri(bil) { return bil.drivmiddel === "el" || bil.drivmiddel === "plugin"; }

function kr(n) {
  if (n === null || n === undefined || isNaN(n)) return "–";
  return Math.round(Number(n)).toLocaleString("da-DK") + " kr.";
}
function krMd(n) {
  if (n === null || n === undefined || isNaN(n)) return "–";
  return Math.round(Number(n)).toLocaleString("da-DK") + " kr./md.";
}
function datoDa(d) {
  if (!d) return "";
  try { return new Date(d).toLocaleDateString("da-DK", { year: "numeric", month: "long", day: "numeric" }); }
  catch (e) { return d; }
}

const POST_NAVNE = {
  service_reparation: "Service og reparation",
  daek: "Dæk",
  forsikring: "Forsikring",
  ejerafgift: "Grøn ejerafgift",
  vejhjaelp: "Vejhjælp"
};

function visDato(v) {
  if (!v) return "";
  var d = new Date(v);
  if (isNaN(d.getTime())) return v;
  return d.toLocaleDateString("da-DK", { day: "numeric", month: "short", year: "numeric" });
}
// Fuldt månedsnavn til løbende tekst ("3. oktober 2026"), hvor "okt." ser ud som en tabel.
function datoLang(v) {
  var d = new Date(v);
  return isNaN(d.getTime()) ? v : d.toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });
}

// Dansk opremsning: "a, b og c"
function ogListe(liste) {
  if (!liste.length) return "";
  if (liste.length === 1) return liste[0];
  return liste.slice(0, -1).join(", ") + " og " + liste[liste.length - 1];
}

// ── Beregning ────────────────────────────────────────────────────────────────
//
// Månedspris inkl. udbetaling = førstegangsydelse/løbetid + månedsydelse.
//
// Der lægges IKKE estimater til for de driftsposter udbyderen ikke inkluderer.
// Et estimat for service, dæk, forsikring, ejerafgift og vejhjælp ville være
// vores gæt på en omkostning udbyderen ikke har oplyst, og det gæt ville flytte
// rangordenen mellem tilbud. Tallet her består derfor kun af beløb udbyderen selv
// har annonceret; den eneste bearbejdning er, at udbetalingen fordeles over
// løbetiden, så to tilbud med forskellig udbetaling kan holdes op mod hinanden.
//
// Konsekvensen er, at et tilbud der inkluderer service og forsikring står med et
// højere tal end et bart tilbud på samme bil, uden at være dyrere. Dækningsgraden
// er det, der skal fange det: den siger, hvor stor en del af de fem driftsposter
// udbyderen overhovedet forholder sig til. Et tilbud med lav dækning kan ikke
// prissættes færdigt på det foreliggende grundlag, og det skal siges — ikke gættes.

function beregn(tilbud, forudsaetninger) {
  var poster = forudsaetninger.poster;
  var inkl   = tilbud.inkluderet || [];
  var ikke   = tilbud.ikke_inkluderet || [];

  var oplyst  = poster.filter(function (p) { return inkl.indexOf(p) >= 0 || ikke.indexOf(p) >= 0; });
  var mangler = poster.filter(function (p) { return inkl.indexOf(p) < 0; });

  var kanBeregnes = tilbud.maanedspris != null
                 && tilbud.loebetid_mdr != null
                 && tilbud.foerstegangsydelse != null;

  var maanedligt = kanBeregnes
    ? (tilbud.foerstegangsydelse / tilbud.loebetid_mdr) + tilbud.maanedspris
    : null;

  var samlet = kanBeregnes
    ? tilbud.foerstegangsydelse + (tilbud.maanedspris * tilbud.loebetid_mdr)
    : null;

  return {
    maanedligt: maanedligt,
    samlet: samlet,
    mangler: mangler,
    oplystAntal: oplyst.length,
    posterAntal: poster.length,
    daekning: poster.length ? oplyst.length / poster.length : 0
  };
}

// ── Komponenter ──────────────────────────────────────────────────────────────

function header() {
  return [
    '<a class="spring" href="#indhold">Spring til indholdet</a>',
    '<header class="site-header">',
    '  <a href="/" class="logo">' +
    '    <svg class="logo__plade" viewBox="0 0 38 20" width="30" height="16" aria-hidden="true" focusable="false"><rect x="1.15" y="1.15" width="35.7" height="17.7" rx="3.6" fill="#f2b705" stroke="#14161a" stroke-width="2.3"/><rect x="7.6" y="7.7" width="8" height="4.6" rx="1" fill="#14161a"/><rect x="18.6" y="7.7" width="11.8" height="4.6" rx="1" fill="#14161a"/></svg>' +
    '    <span class="logo__ord">Gulplade<span class="logo__tld">.dk</span></span></a>',
    '  <nav>',
    '    <a href="/">Leasing</a>',
    KOEB_NY ? '    <a href="/koeb-ny-varebil/">Nye</a>' : '',
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

// Mærkerne til footeren. De små mærker (en eller to modeller) fik ellers kun
// links fra deres egne modelsider og blev svære at finde for Google.
var FOOTER_MAERKER = (function () {
  try {
    var m = {};
    JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler
      .forEach(function (b) { m[b.maerke] = 1; });
    return Object.keys(m).sort(function (a, b) { return a.localeCompare(b, "da"); });
  } catch (e) { return []; }
})();

function footer() {
  return [
    '<footer class="site-footer"><div class="site-footer__indhold">',
    FOOTER_MAERKER.length ? '<nav class="bundmenu" aria-label="Leasing efter mærke"><ul>' + FOOTER_MAERKER.map(function (m) {
      return '<li><a href="/varebiler/' + slug(m) + '/">' + esc(m) + ' leasing</a></li>';
    }).join('') + '<li><a href="/bedste-tilbud/bedste-varebil-2026/">Bedste varebil 2026</a></li></ul></nav>' : '',
    '<nav class="bundmenu" aria-label="Leasing efter type"><ul>' +
      '<li><a href="/bedste-tilbud/kassevogn-leasing/">Kassevogn leasing</a></li>' +
      '<li><a href="/bedste-tilbud/erhvervsbil-leasing/">Erhvervsbil leasing</a></li>' +
      '<li><a href="/bedste-tilbud/ladbil/">Ladbil leasing</a></li>' +
      '<li><a href="/bedste-tilbud/el-varebil/">Elvarebil leasing</a></li>' +
      '<li><a href="/bedste-tilbud/billigste-varebil/">Billigste gulpladebil</a></li>' +
      '<li><a href="/bedste-tilbud/lille-varebil/">Lille varebil</a></li>' +
      '<li><a href="/bedste-tilbud/stor-varebil/">Stor varebil</a></li></ul></nav>',
    '<nav class="bundmenu" aria-label="Sidens afsnit"><ul><li><a href="/">Varebilsleasing</a></li>' + (KOEB_NY ? '<li><a href="/koeb-ny-varebil/">Køb ny varebil</a></li>' : '') + '<li><a href="/haandbogen/leasing-af-varebil-til-erhverv/">Sådan leaser du en varebil</a></li><li><a href="/bedste-tilbud/">Bedste tilbud</a></li><li><a href="/haandbogen/">Håndbogen</a></li><li><a href="/haandbogen/gule-plader/">Gule plader</a></li><li><a href="/nyheder/">Nyheder</a></li><li><a href="/til-varebilen/">Til varebilen</a></li><li><a href="/udstyr/">Udstyr</a></li><li><a href="/garanti/">Garanti</a></li><li><a href="/elvarebiler/">Elvarebiler</a></li><li><a href="/groen-omstilling/">Grøn omstilling</a></li><li><a href="/sammenlign/">Sammenlign</a></li><li><a href="/brugte-varebiler/">Brugte varebiler</a></li><li><a href="/udbydere/">Udbydere</a></li><li><a href="/faa-tilbud/">Få tilbud</a></li><li><a href="/tilbudstjek/">Tjek dit tilbud</a></li><li><a href="/leasingberegner/">Leasingberegner</a></li><li><a href="/personbiler/">Personbiler</a></li><li><a href="/kontakt/">Kontakt</a></li><li><a href="/presse/">Presse</a></li><li><a href="/privatliv/">Privatliv</a></li><li><a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a></li><li><a href="https://www.linkedin.com/company/gulplade/" rel="me noopener" target="_blank">LinkedIn</a></li></ul></nav>',
    '<p><strong>Gulplade.dk</strong> — uafhængig sammenligning af erhvervsleasing.</p>',
    '<p>Vi har hentet priserne fra forhandlernes og leasingselskabernes egne prislister og annoncer. Priserne er vejledende og vist uden moms til erhvervskunder. De gælder på de vilkår, der står ved hvert tilbud. Dér står også kilden, og hvornår vi hentede prisen. Ud fra forhandlerens eller leasingselskabets tal har vi selv beregnet månedsprisen med udbetalingen fordelt over løbetiden. Den pris er ikke et tilbud. Vi indregner ikke et skøn for udgifter, som forhandleren eller leasingselskabet ikke oplyser. Vi tager forbehold for ændringer, udsolgte biler og fejl.</p>',
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

// To veje, side om side. Den gratis, hvor forhandleren betaler os, og den
// betalte, hvor kunden goer og ingen forhandler er inde over. Forskellen staar
// i kassen, ikke i en fodnote - ellers ser de to ud som det samme tilbud.
//
// `bil` er modelnavnet paa en modelside, saa knappen kan tage bilen med sig.
function ctaBlok(bil) {
  return [
    '<section class="sektion">',
    '<div class="cta-to">',

    '<div class="kort" style="border-color:var(--gul);border-width:2px">',
    '<h3>Har du ikke et tilbud endnu?</h3>',
    '<p>Så henter vi dem hjem. Du fortæller, hvad bilen skal kunne. Så ringer vi rundt til '
    + 'forhandlerne, beder om det samme hos alle og læser tilbuddene igennem, før du '
    + 'ser dem. Der sidder et menneske og gør det, ikke et system.</p>',
    '<p><strong>Gratis for dig.</strong> Forhandleren betaler os for henvendelsen. '
    + 'Alle betaler det samme beløb, og de betaler, uanset om du siger ja eller nej. '
    + '<a href="/faa-tilbud/">Sådan foregår det</a>.</p>',
    '<p style="margin-top:1.25rem">' + tilbudsknapHTML(bil) + '</p>',
    '</div>',

    '<div class="kort">',
    '<h3>Har du fået et tilbud på bordet?</h3>',
    '<p>Vi regner det igennem, finder ud af, hvad der ikke står i det, og giver dig de '
    + 'spørgsmål, du skal stille leasingselskabet. Her er der <strong>ingen forhandler '
    + 'inde over</strong>. Det er dig, der betaler, og ingen andre.</p>',
    '<p>Det koster 695 kr. ekskl. moms pr. tilbud.</p>',
    '<p style="margin-top:1.25rem"><a href="/tilbudstjek/" class="knap knap--sekundaer">'
    + 'Tjek dit tilbud</a></p>',
    '</div>',

    '</div>',
    '</section>'
  ].join("\n");
}

// ── Modelside ────────────────────────────────────────────────────────────────

// Guider hvor mindst ét af modellens tilbud kvalificerer. Bruges på
// modelsiden, så læseren kan se hvad bilen er god til, og så guiderne får
// links fra de 24 modelsider.
function guiderForModel(bil, data) {
  var alle = alleTilbud(data);
  return GUIDER.filter(function (g) {
    return guideRaekker(g, alle).some(function (x) { return x.r.bil.id === bil.id; });
  });
}

// ── Links til vidensmodulet ──────────────────────────────────────────────────
//
// Artiklerne laeses af viden.json, saa listen ikke skal holdes to steder.
// Rækkefølgen afhaenger af bilen: staar man paa en pickup, er artiklen om
// pickup kontra kassevogn den mest relevante, ikke den om momsfradrag.

function vidensArtikler() {
  // Foretraek den udfyldte udgave fra generate-viden.js: viden.json indeholder
  // {{pladsholdere}}, som ellers stod raa i kortene paa guidesiderne.
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "viden-udfyldt.json"), "utf8")).artikler;
  } catch (e) {}
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "viden.json"), "utf8")).artikler;
  } catch (e) { return []; }
}
var VIDEN = vidensArtikler();

function videnForModel(bil) {
  if (!VIDEN.length) return [];
  var lad = bil.karrosseri === "pickup" || bil.karrosseri === "ladvogn";
  // Vaegt pr. artikel: hoejere tal foerst.
  // Elbiler har naesten ingen groen ejerafgift, saa den artikel er mindre
  // relevant der. Til gengaeld er maalene altid relevante.
  var el = bil.drivmiddel === "el";
  var vaegt = {
    // Karrosseriet foerst: staar man paa en pickup eller en ladvogn, er det
    // artiklen om lad kontra lukket varerum, der svarer paa spoergsmaalet.
    "varebil-eller-pickup": lad ? 14 : 1,
    // Fire artikler fra 27-09-2026. Over 3.500 kg er bilen teknisk en
    // lastbil: 80 km/t og takograf - det skal staa lige der.
    "hastighedsgraenser-for-varebiler": (bil.totalvaegt_kg || 0) > 3500 ? 13.5 : 1.5,
    "takograf-paa-varebil": (bil.totalvaegt_kg || 0) > 3500 ? 12.8 : 2.2,
    "anhaenger-bag-varebilen": (bil.anhaengervaegt_kg || 0) >= 2500 ? 9.5 : 2.4,
    "miljoezoner-og-varebiler": bil.drivmiddel === "diesel" ? 3.2 : 0.5,
    "maal-du-skal-tjekke-foer-du-skriver-under": 11,
    // Reoler sidder i kassevogne.
    "specialindretning-af-varebil": bil.karrosseri === "kassevogn" ? 10 : 1,
    // Elbilartiklen er kun relevant paa en elbil - og der er den vigtig.
    "elvarebil-i-praksis": el ? 13 : 1,
    // Markedstallet er mest relevant paa en elbil, men ikke ligegyldigt paa en
    // diesel: det handler ogsaa om, hvad diesel er vaerd om fem aar.
    "halvdelen-af-nye-varebiler-er-elektriske": el ? 11 : 4,
    "det-staar-ikke-i-leasingtilbuddet": 9,
    "kilometergraensen-paa-leasingaftalen": 8,
    "totalvaegt-nyttelast-og-koerekort": 7,
    // Elbiler betaler naesten ingen groen ejerafgift.
    "groen-ejerafgift-paa-varebil": el ? 2 : 6,
    "fri-bil-paa-gule-plader": 5,
    "hvad-maa-du-koere-i-en-varebil-paa-gule-plader": 4,
    // Pickup med bagsaede er Motorstyrelsens eget eksempel paa en bil, der
    // skal have hvide plader.
    "gule-hvide-eller-papegoejeplader": lad ? 12.5 : 3.5,
    "syn-af-varebil": bil.totalvaegt_kg && bil.totalvaegt_kg > 3500 ? 12 : 3,
    "moms-paa-varebil": 6,
    "leasing-eller-koeb-af-varebil": 2
  };


  var rangeret = VIDEN.slice()
    .sort(function (a, b) { return (vaegt[b.slug] || 0) - (vaegt[a.slug] || 0); });

  // De to mest relevante staar altid — paa en pickup skal pickup-artiklen
  // med, uanset hvad. Den tredje roteres blandt de naeste fire, saa alle
  // artikler faar links fra modelsiderne og ikke kun de samme tre.
  //
  // Forskuddet kommer fra modellens eget id, ikke fra en tilfældighed:
  // samme model giver altid samme tre artikler, saa siden bygger ens hver
  // gang og en URL viser det samme i morgen som i dag.
  var sum = 0;
  for (var i = 0; i < bil.id.length; i++) sum += bil.id.charCodeAt(i);

  // Kun den mest relevante staar fast. De to andre roterer over de naeste
  // otte, saa ogsaa de artikler, der ligger langt nede paa relevans for en
  // given bil, faar links fra modelsiderne. Ellers bliver de aldrig fundet.
  var pulje = rangeret.slice(1, 10);
  if (pulje.length < 2) return rangeret.slice(0, 3);
  var a1 = pulje[sum % pulje.length];
  var a2 = pulje[(sum + 1 + (sum % (pulje.length - 1))) % pulje.length];
  if (a2.slug === a1.slug) a2 = pulje[(pulje.indexOf(a1) + 1) % pulje.length];
  return [rangeret[0], a1, a2];
}

function videnBlokHTML(bil) {
  var v = videnForModel(bil);
  if (!v.length) return '';
  return [
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Før du skriver under</h2>',
    '<p class="sektion__manchet">Tre ting, der afgør mere end månedsprisen: hvad du må '
    + 'køre i bilen, hvad ydelsen ikke dækker, og hvilke tal der ikke står i annoncen. '
    + 'Har du et tilbud fra en anden udbyder, så regn det om i <a href="/leasingberegner/">leasingberegneren</a>.</p>',
    '<div class="vidensgitter">',
    v.map(function (a) {
      return [
        '<article class="videnkort">',
        '  <a href="' + videnSti(a) + '">',
        '    <p class="videnkort__emne">' + esc(a.emne) + '</p>',
        '    <h3>' + esc(a.h1) + '</h3>',
        '    <p class="videnkort__meta">' + a.laesetid + ' min. · ' +
        (a.kilder || []).length + ' kilder</p>',
        '  </a>',
        '</article>'
      ].join('');
    }).join(''),
    '</div>',
    '</section>'
  ].join('');
}
function modelGuiderHTML(bil, data) {
  var g = guiderForModel(bil, data);
  if (!g.length) return '';
  // Med vores valg (GULPLADE_BEDSTE_NY) står de guider, hvor bilen er valgt, først og med pladsen.
  var valgt = 0;
  var raekker = g.map(function (x) {
    var bv = BEDSTE_VALG[x.slug] || {};
    var nr = (bv.valg || []).map(function (v) { return v.model; }).indexOf(bil.id) + 1;
    if (nr) valgt++;
    var h1 = bv.h1 ? String(bv.h1).replace(/%aar%/g, aaretsAar(data)) : x.h1;
    return { nr: nr, html: '<li><a href="/bedste-tilbud/' + x.slug + '/">' + esc(h1) + '</a>' +
      (nr ? ' <span class="guidelinks__valg">Vores valg nr. ' + nr + '</span>' : '') + '</li>' };
  });
  if (valgt) raekker.sort(function (a, b) { return (a.nr || 99) - (b.nr || 99); });
  var links = raekker.map(function (x) { return x.html; }).join('');
  return [
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>' + esc(bil.maerke + ' ' + bil.model) + ' står på disse lister</h2>',
    valgt
      ? '<p class="sektion__manchet">Modellen er med i ' + g.length + ' af vores guider. I ' + valgt + ' af dem er den blandt de biler, vi anbefaler.</p>'
      : '<p class="sektion__manchet">Modellen er med i ' + g.length + ' af vores guider. Hver liste har sit kriterium skrevet ovenover, så du kan se hvad rækkefølgen bygger på.</p>',
    '<ul class="guidelinks">' + links + '</ul>',
    '</section>'
  ].join('');
}

// ── Udstyr ──────────────────────────────────────────────────────────────────
//
// udstyr.json har den samme tjekliste for alle modeller, én celle pr.
// udstyrsniveau. Tjeklisten er fast, så en Caddy og en Berlingo kan læses mod
// hinanden: det er netop det, der er svært at finde hos producenterne, hvor
// hver prisliste har sin egen opstilling og sine egne navne.

var UDSTYR = (function () {
  try {
    var u = JSON.parse(fs.readFileSync(path.join(__dirname, "udstyr.json"), "utf8"));
    // 05-10-2026: de nye poster fra prislisterne ("ny": true) vises kun på preview
    // (GULPLADE_KOEB_NY=1). Elposterne (kun_el) hører ikke hjemme i en tjekliste for
    // alle modeller; dem bruger købssiden (koeb.js) via poster_el.
    if (process.env.GULPLADE_KOEB_NY === "0") u.poster = u.poster.filter(function (p) { return !p.ny; });
    u.poster_el = u.poster.filter(function (p) { return p.kun_el; });
    u.poster = u.poster.filter(function (p) { return !p.kun_el; });
    u.grupper = u.grupper.filter(function (g) { return u.poster.some(function (p) { return p.gruppe === g.id; }); });
    return u;
  }
  catch (e) { return null; }
})();

function udstyrForModel(id) {
  return UDSTYR && UDSTYR.modeller && UDSTYR.modeller[id] || null;
}

// Hvilket udstyrsniveau et tilbud gælder. Afgjort ud fra variantnavnet og
// lagt i udstyr.json, fordi det er udstyrsdata, ikke tilbudsdata.
function tilbudNiveau(bil, t) {
  var u = udstyrForModel(bil.id);
  if (!u || !u.tilbud_niveau) return null;
  var navn = u.tilbud_niveau[t.udbyder + "|" + (t.variant || "")];
  if (!navn) return null;
  for (var i = 0; i < u.niveauer.length; i++) if (u.niveauer[i].navn === navn) return { navn: navn, i: i, u: u };
  return null;
}

function udstyrNiveauLink(bil, t) {
  var n = tilbudNiveau(bil, t);
  if (!n) return '';
  var std = UDSTYR.poster.filter(function (p) { return ((n.u.udstyr[p.id] || [])[n.i] || {}).s === "std"; }).length;
  return '<span class="udbyder-vilkaar"><a href="#udstyr">Niveau ' + esc(n.navn) + '</a> · '
    + std + ' af ' + UDSTYR.poster.length + ' udstyrsposter standard</span>';
}

// Antal poster paa tjeklisten, der er standard paa et givet niveau.
function udstyrStdAntal(id, i) {
  var u = udstyrForModel(id);
  if (!u) return null;
  return UDSTYR.poster.filter(function (p) { return ((u.udstyr[p.id] || [])[i] || {}).s === "std"; }).length;
}

// Kildens navn på siden: "Peugeots prisliste" i stedet for "ipaper.ipapercms.dk" (kilde-etiket.js, 06-10-2026).
function vaertNavn(url) { return require("./kilde-etiket.js").kildeEtiket(url); }

// Escaper en kildenote og goer de URL'er, den naevner, til korte links.
// "(https://...)" i parentes bliver til "(domaene)", saa noten kan laeses.
function linkUrler(tekst) {
  return esc(tekst).replace(/https?:\/\/[^\s)<,;]+/g, function (url) {
    var ren = url.replace(/[.]+$/, '');
    return '<a href="' + ren + '" rel="nofollow noopener" target="_blank">' + vaertNavn(ren) + '</a>' + url.slice(ren.length);
  });
}

// Kort udstyrsopsummering i toppen af modelsiden: hvad der er standard på
// det niveau, det billigste tilbud gaelder (ellers det billigste niveau), og
// hvad de mest efterspurgte tilvalg koster. Resten staar i tabellen laengere nede.
var UDSTYR_FREMHAEV = ["bakkamera", "carplay", "adaptiv_fartpilot", "blindvinkel", "noeglefri",
  "parkeringsvarmer", "saedevarme", "opvarmet_forrude", "psensor_for", "led_forlygter", "elspejle_klap", "dab"];
var UDSTYR_TILVALG_FREMHAEV = ["anhaengertraek", "skydedoer_venstre", "bakkamera", "adaptiv_fartpilot",
  "parkeringsvarmer", "carplay", "saedevarme"];

function udstyrHeroHTML(bil) {
  var u = udstyrForModel(bil.id);
  if (!u) return '';
  var billigst = (bil.tilbud || []).filter(function (t) { return t.maanedspris != null; })
    .sort(function (a, b) { return a.maanedspris - b.maanedspris; })[0];
  var tn = billigst ? tilbudNiveau(bil, billigst) : null;
  var i = tn ? tn.i : 0;
  var celle = function (id) { return (u.udstyr[id] || [])[i] || { s: "ukendt" }; };
  var navn = function (id) {
    var p = UDSTYR.poster.filter(function (x) { return x.id === id; })[0];
    return p ? p.navn : id;
  };
  var std = UDSTYR_FREMHAEV.filter(function (id) { return celle(id).s === "std"; });
  var ekstra = UDSTYR_TILVALG_FREMHAEV.filter(function (id) {
    var c = celle(id); return (c.s === "tilvalg" || c.s === "pakke") && c.pris;
  }).slice(0, 3);
  var antalStd = UDSTYR.poster.filter(function (p) { return celle(p.id).s === "std"; }).length;
  var lille = function (t) { return t.charAt(0).toLowerCase() + t.slice(1); };
  var bevar = /^(Apple|DAB|LED|P-)/;
  var nv = function (id) { var t = navn(id); return bevar.test(t) ? t : lille(t); };

  var linjer = [];
  linjer.push('<strong>' + esc(u.niveauer[i].navn) + '</strong>'
    + (tn ? ' (det billigste tilbuds niveau)' : '') + ' har ' + antalStd + ' af ' + UDSTYR.poster.length
    + ' poster på vores udstyrstjekliste som standard'
    + (std.length ? ', bl.a. ' + ogListe(std.slice(0, 5).map(function (id) { return esc(nv(id)); })) : '') + '.');
  if (ekstra.length) {
    linjer.push('Koster ekstra: ' + ekstra.map(function (id) {
      var c = celle(id);
      return esc(nv(id)) + ' ' + talDK(c.pris) + ' kr.'
        + (c.s === "pakke" ? ' (pakke)' : /tilbehør/i.test(c.note || '') ? ' (tilbehør)' : '');
    }).join(', ') + ' — ekskl. moms.');
  }
  if (elKort(bil)) linjer.push('Opladning: ' + esc(elKort(bil)) + '.');
  var gar = garantiForModel(bil.id);
  if (gar && garantiKort(gar)) {
    linjer.push('Garanti: ' + esc(garantiKort(gar))
      + (harBatteri(bil) && gar.batteri && aarKm(gar.batteri) ? ' · batteri ' + esc(aarKm(gar.batteri)) : '') + '.');
  }
  if (u.niveauer.length > 1) {
    linjer.push('Fås i ' + u.niveauer.length + ' udstyrsniveauer: ' + ogListe(u.niveauer.map(function (n) { return esc(n.navn); })) + '.');
  }
  return '    <div class="bil-hero__udstyr">' + linjer.map(function (l) { return '<p>' + l + '</p>'; }).join('') + '</div>';
}

function udstyrCelleHTML(c) {
  c = c || { s: "ukendt" };
  var note = c.note ? '<span class="udstyr__note">' + esc(c.note) + '</span>' : '';
  // Udledte celler (fx "rude i skillevaeggen er tilvalg, altsaa er der en
  // skillevaeg") er ikke laest direkte i kilden. Det skal kunne ses.
  if (c.s === "std") return '<td class="udstyr--std"><span class="udstyr__v">Standard'
    + (c.note && /udledt/i.test(c.note) ? '<abbr class="udledt" title="Udledt, ikke nævnt direkte i kilden — se noten">*</abbr>' : '')
    + '</span>' + note + '</td>';
  if (c.s === "tilvalg") return '<td class="udstyr--tilvalg"><span class="udstyr__v">'
    + (c.pris === 0 ? 'Uden merpris' : c.pris != null ? talDK(c.pris) + ' kr.' : 'Tilvalg') + '</span>' + note + '</td>';
  if (c.s === "pakke") return '<td class="udstyr--pakke"><span class="udstyr__v">'
    + (c.pris != null ? talDK(c.pris) + ' kr.' : 'Pakke') + '</span>'
    + '<span class="udstyr__note">i ' + esc(c.pakke || 'pakke') + (c.note ? '. ' + esc(c.note) : '') + '</span></td>';
  if (c.s === "nej") return '<td class="udstyr--nej"><span class="udstyr__v">Fås ikke</span>' + note + '</td>';
  return '<td class="udstyr--ukendt"><span class="udstyr__v">Ikke oplyst</span>' + note + '</td>';
}

function udstyrSektionHTML(bil) {
  var u = udstyrForModel(bil.id);
  if (!u) return '';
  var niv = u.niveauer;
  var std0 = UDSTYR.poster.filter(function (p) {
    return ((u.udstyr[p.id] || [])[0] || {}).s === "std";
  }).length;
  var uk0 = UDSTYR.poster.filter(function (p) {
    return (((u.udstyr[p.id] || [])[0] || {}).s || "ukendt") === "ukendt";
  }).length;

  var tilbudPrNiveau = niv.map(function () { return 0; });
  (bil.tilbud || []).forEach(function (t) {
    var n = tilbudNiveau(bil, t);
    if (n) tilbudPrNiveau[n.i]++;
  });

  var hoved = '<tr><th scope="col">Udstyr</th>' + niv.map(function (n, i) {
    return '<th scope="col">' + esc(n.navn)
      + (n.fra_pris != null ? '<span class="udstyr__fra">fra ' + talDK(n.fra_pris) + ' kr.</span>' : '')
      + (tilbudPrNiveau[i] ? '<span class="udstyr__tilbud">' + tilbudPrNiveau[i] + ' tilbud på siden</span>' : '')
      + '</th>';
  }).join('') + '</tr>';

  var krop = UDSTYR.grupper.map(function (g) {
    var poster = UDSTYR.poster.filter(function (p) { return p.gruppe === g.id; });
    return '<tr class="udstyr__gruppe"><th colspan="' + (niv.length + 1) + '" scope="colgroup">' + esc(g.navn) + '</th></tr>'
      + poster.map(function (p) {
        var celler = u.udstyr[p.id] || [];
        return '<tr><th scope="row">' + esc(p.navn) + '</th>'
          + niv.map(function (n, i) { return udstyrCelleHTML(celler[i]); }).join('') + '</tr>';
      }).join('');
  }).join('');

  return [
    modulHTML("udstyr", "Udstyr: standard og tilvalg",
      esc(bil.maerke + ' ' + bil.model) + ' fås i ' + niv.length
      + ' udstyrsniveau' + (niv.length === 1 ? '' : 'er') + '. På det billigste, ' + esc(niv[0].navn) + ', er <strong>'
      + std0 + ' af ' + UDSTYR.poster.length + '</strong> poster på vores tjekliste standard. '
      + 'Priserne er producentens listepris for tilvalget.'
      + (uk0 >= 6 ? ' ' + esc(bil.maerke) + ' oplyser ikke ' + uk0 + ' af posterne i sine offentlige lister — spørg forhandleren.' : ''),
      '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel udstyr-tabel"><thead>' + hoved + '</thead><tbody>' + krop + '</tbody></table></div>',
      'Kilde: <a href="' + esc(u.kilde.url) + '" rel="nofollow noopener" target="_blank">producentens prisliste</a>, set den '
      + esc(visDato(u.kilde.dato)) + '. ' + (u.kilde.note ? linkUrler(u.kilde.note) + ' ' : '')
      + ((u.kilder_ekstra || []).length && !/https?:/.test(u.kilde.note || '') ? 'Suppleret med ' + u.kilder_ekstra.map(function (k) {
          return '<a href="' + esc(k.url) + '" rel="nofollow noopener" target="_blank"'
            + (k.note ? ' title="' + esc(k.note) + '"' : '') + '>' + esc(vaertNavn(k.url)) + '</a>';
        }).join(', ') + '. ' : '')
      + 'Priserne er ekskl. moms. Hvor udstyret er forhandlermonteret tilbehør, står det ved prisen. '
      + 'Fra-prisen er den billigste motor på niveauet. Nødbremse, vognbaneassistent og eCall står ikke på listen: de er lovkrav på alle nye varebiler. '
      + 'Leasingtilbuddene gælder ofte et bestemt niveau — det står i bilens navn ved hvert tilbud.')
  ].join('\n');
}

// ── Batteri og opladning ───────────────────────────────────────────────────
//
// elbil.json har én post pr. el-varebil (og plug-in hybrid): batteri,
// WLTP-rækkevidde og -forbrug, AC- og DC-ladeeffekt og ladetider, V2L og
// varmepumpe. Tallene gælder variant_for_maal.

var ELBIL = (function () {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "elbil.json"), "utf8")); }
  catch (e) { return null; }
})();

function elForModel(id) {
  var e = ELBIL && ELBIL.modeller && ELBIL.modeller[id] || null;
  if (!e) return null;
  // Oplyser el-kilden hverken netto eller brutto, bruges modellens egen
  // batteristørrelse fra varebiler.json (samme prisliste) - uden betegnelse.
  if (e.batteri_netto_kwh == null && e.batteri_brutto_kwh == null && e.batteri_kwh == null && VAREBIL_BATTERI[id] != null) {
    e = Object.assign({}, e, { batteri_kwh: VAREBIL_BATTERI[id] });
  }
  return e;
}
var VAREBIL_BATTERI = (function () {
  var m = {};
  try {
    JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler.forEach(function (b) { m[b.id] = b.batteri_kwh; });
  } catch (e) {}
  return m;
})();

// Kun intervallet ("10–80 %") ud af en ladenote — til korte visninger.
function interval(note) {
  var m = String(note || '').match(/\d+\s*[–-]\s*\d+\s*%/);
  return m ? m[0].replace(/\s*[–-]\s*/, '–') : '';
}

function minTekst(min) {
  if (min == null) return null;
  var t = Math.floor(min / 60), m = Math.round(min % 60);
  return (t ? t + ' t' : '') + (t && m ? ' ' : '') + (m || !t ? m + ' min' : '');
}

function elFelter(bil, e) {
  var ph = bil.drivmiddel === "plugin";
  var kom = function (v) { return v == null ? null : kommaTal(v); };
  return [
    ["Batteri", e.batteri_netto_kwh != null || e.batteri_brutto_kwh != null
      ? [e.batteri_netto_kwh != null ? kom(e.batteri_netto_kwh) + ' kWh netto' : null,
         e.batteri_brutto_kwh != null ? kom(e.batteri_brutto_kwh) + ' kWh brutto' : null].filter(Boolean).join(' · ')
      : e.batteri_kwh != null ? kom(e.batteri_kwh) + ' kWh' : null],
    [ph ? "Elektrisk rækkevidde (WLTP)" : "Rækkevidde (WLTP)", e.raekkevidde_km != null
      ? talDK(e.raekkevidde_km) + ' km' + (e.raekkevidde_by_km != null ? ' · ' + talDK(e.raekkevidde_by_km) + ' km i by' : '') : null],
    ["Forbrug (WLTP)", e.forbrug_kwh_100km != null ? kom(e.forbrug_kwh_100km) + ' kWh/100 km' : null],
    ["AC-lader", e.ac_kw != null ? kom(e.ac_kw) + ' kW' + (e.ac_kw_tilvalg ? ' (' + kom(e.ac_kw_tilvalg) + ' kW som tilvalg)' : '') : null],
    ["Ladetid AC", e.ac_tid_min != null ? minTekst(e.ac_tid_min) + (interval(e.ac_tid_note) ? ' (' + interval(e.ac_tid_note) + ')' : '') : null],
    ["Lynlader (DC)", e.dc_kw != null ? 'op til ' + kom(e.dc_kw) + ' kW' : (ph ? 'Nej' : null)],
    ["Ladetid DC", e.dc_tid_min != null ? minTekst(e.dc_tid_min) + (interval(e.dc_tid_note) ? ' (' + interval(e.dc_tid_note) + ')' : '') : null],
    ["Ladestik", e.ladestik || null],
    ["Strøm ud (V2L)", e.v2l === true ? 'Ja' + (e.v2l_kw ? ', ' + kom(e.v2l_kw) + ' kW' : '') : e.v2l === false ? 'Nej' : null],
    ["Varmepumpe", { std: "Standard", tilvalg: "Tilvalg", nej: "Nej" }[e.varmepumpe] || null]
  ];
}

// Kort linje til toppen af modelsiden.
function elKort(bil) {
  var e = elForModel(bil.id);
  if (!e) return null;
  var d = [];
  if (e.raekkevidde_km != null) d.push(talDK(e.raekkevidde_km) + ' km' + (bil.drivmiddel === "plugin" ? ' på el' : ''));
  if (e.ac_kw != null) d.push(kommaTal(e.ac_kw) + ' kW AC');
  if (e.dc_kw != null) d.push(kommaTal(e.dc_kw) + ' kW DC' + (e.dc_tid_min != null ? ' (' + (interval(e.dc_tid_note) ? interval(e.dc_tid_note) + ' på ' : '') + minTekst(e.dc_tid_min) + ')' : ''));
  return d.length ? d.join(' · ') : null;
}

function elSektionHTML(bil) {
  var e = elForModel(bil.id);
  if (!e) return '';
  var raekker = elFelter(bil, e).map(function (f) {
    return '<div><dt>' + esc(f[0]) + '</dt><dd>' + (f[1] ? esc(f[1]) : '<span class="garanti__ingen">Ikke oplyst</span>') + '</dd></div>';
  }).join('');
  var ph = bil.drivmiddel === "plugin";
  return [
    modulHTML("opladning", "Batteri og opladning",
      (ph
        ? 'Plug-in hybriden kører et stykke på strøm og skifter så til benzinmotoren. Den elektriske rækkevidde er WLTP-tallet.'
        : 'Rækkevidde og forbrug er WLTP-tal. Med last, om vinteren og på motorvej kører bilen kortere.')
        + ' <a href="/elvarebiler/">Sammenlign alle elvarebiler</a>.',
      '<dl class="garanti-grid">' + raekker + '</dl>'
        + (e._mangler ? '<p class="modul__mangler"><strong>Mangler:</strong> ' + esc(e._mangler) + '</p>' : ''),
      'Kilde: <a href="' + esc(e.kilde.url) + '" rel="nofollow noopener" target="_blank">' + esc(vaertNavn(e.kilde.url)) + '</a>, set den '
        + esc(visDato(e.kilde.dato)) + '. ' + (e.kilde.note ? linkUrler(e.kilde.note) : ''))
  ].join('\n');
}

function elIndexHTML(data) {
  if (SIDE_NY.el && !data._gammel) return sideNy().elIndex(data);
  var rader = data.varebiler.filter(function (b) { return elForModel(b.id); })
    .map(function (b) { return { bil: b, e: elForModel(b.id) }; })
    .sort(function (a, b) {
      var pa = a.bil.drivmiddel === "plugin", pb = b.bil.drivmiddel === "plugin";
      if (pa !== pb) return pa ? 1 : -1;
      return (b.e.raekkevidde_km || 0) - (a.e.raekkevidde_km || 0);
    });
  var kol = [
    ["Rækkevidde", function (e) { return e.raekkevidde_km != null ? talDK(e.raekkevidde_km) + ' km' : null; }],
    ["Batteri (netto)", function (e) { return e.batteri_netto_kwh != null ? kommaTal(e.batteri_netto_kwh) + ' kWh' : e.batteri_brutto_kwh != null ? kommaTal(e.batteri_brutto_kwh) + ' kWh brutto' : e.batteri_kwh != null ? kommaTal(e.batteri_kwh) + ' kWh*' : null; }],
    ["Forbrug", function (e) { return e.forbrug_kwh_100km != null ? kommaTal(e.forbrug_kwh_100km) + ' kWh/100 km' : null; }],
    ["AC", function (e) { return e.ac_kw != null ? kommaTal(e.ac_kw) + ' kW' : null; }],
    ["Ladetid AC", function (e) { return e.ac_tid_min != null ? minTekst(e.ac_tid_min) + (interval(e.ac_tid_note) ? ' (' + interval(e.ac_tid_note) + ')' : '') : null; }],
    ["DC", function (e) { return e.dc_kw != null ? kommaTal(e.dc_kw) + ' kW' : null; }],
    ["Ladetid DC", function (e) { return e.dc_tid_min != null ? minTekst(e.dc_tid_min) + (interval(e.dc_tid_note) ? ' (' + interval(e.dc_tid_note) + ')' : '') : null; }],
    ["V2L", function (e) { return e.v2l === true ? 'Ja' : e.v2l === false ? 'Nej' : null; }]
  ];
  var krop = rader.map(function (r) {
    return '<tr><th scope="row"><a href="' + modelSti(r.bil) + '#opladning">' + esc(r.bil.maerke + ' ' + r.bil.model) + '</a>'
      + '<span class="spec-variant">' + esc(r.bil.variant_for_maal || '') + '</span></th>'
      + kol.map(function (k) { var v = k[1](r.e); return v ? '<td>' + esc(v) + '</td>' : '<td class="tom">—</td>'; }).join('') + '</tr>';
  }).join('');
  var antalEl = rader.filter(function (r) { return r.bil.drivmiddel === "el"; }).length;
  var title = titel("Elvarebiler: rækkevidde og opladning sammenlignet");
  var desc = antalEl + " el-varebiler til erhvervsleasing side om side: WLTP-rækkevidde, batteri, forbrug, AC- og DC-ladeeffekt og ladetider — fra producenternes prislister.";
  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/elvarebiler/",
          samlSchema(krummeSchema([["Forsiden", "/"], ["Elvarebiler", null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Elvarebiler</li></ol></nav>',
    '<div class="bil-hero">',
    '  <p class="bil-maerke">' + antalEl + ' elvarebiler</p>',
    '  <h1>Elvarebiler: rækkevidde og opladning</h1>',
    '  <p class="bil-hero__manchet">Hvor langt kommer bilen, og hvor hurtigt er den klar igen? Her er batteri, WLTP-rækkevidde, forbrug og ladetider for hver el-varebil på siden, sorteret efter rækkevidde. Tallene gælder den udgave af bilen, der står under modelnavnet. Hvad skiftet fra diesel koster ved jeres kørsel, regner <a href="/groen-omstilling/#beregner">elberegneren</a> ud.</p>',
    '</div>',
    '<aside class="nyhedsboks"><p class="nyhedsboks__over">På vej</p><p>Den nye Renault Trafic E-Tech kommer i slutningen af 2026 med op til 470 km rækkevidde og 800 volt-lynladning. ' +
      '<a href="/nyheder/ny-renault-trafic-e-tech/">Alt, hvad Renault har oplyst →</a></p></aside>',
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<div class="tilbud-tabel-wrap">',
    '<table class="tilbud-tabel garanti-tabel el-tabel">',
    '<thead><tr><th scope="col">Model</th>' + kol.map(function (k) { return '<th scope="col">' + esc(k[0]) + '</th>'; }).join('') + '</tr></thead>',
    '<tbody>' + krop + '</tbody>',
    '</table>',
    '</div>',
    '<p class="kilde"><strong>AC</strong> er den indbyggede lader, der bruges ved en ladeboks eller en almindelig ladestander; ladetiden er typisk fra tom til fuld. <strong>DC</strong> er lynladning, og tiden er oftest fra 10 til 80 %. * Producenten oplyser ikke, om batteristørrelsen er netto eller brutto. På hver modelside står kilden, og hvilken udgave af bilen tallene gælder.</p>',
    '</section>',
    '<section class="sektion--kort">',
    '  <h2>Rækkevidde i praksis</h2>',
    '  <p>WLTP-tallet er målt under standardbetingelser. Med last, om vinteren og på motorvej kommer en varebil mærkbart kortere, ofte en fjerdedel eller mere. Det er ugens længste dag og ikke gennemsnittet, der afgør, om rækkevidden er nok.</p>',
    '  <p>Lades bilen hjemme eller på firmaets adresse, er det AC-laderen og ladeboksen, der sætter tempoet. En 11 kW-lader fylder de fleste batterier på en nat. En 22 kW-lader gør det på den halve tid, men den kræver en ladeboks og en installation, der kan levere 22 kW.</p>',
    '  <p style="margin-top:1.25rem"><a href="/til-varebilen/el-abonnement/">Hvad koster strømmen oven i leasingydelsen?</a></p>',
    '</section>',
    '<div class="forbehold">',
    '  <h2>Om tallene</h2>',
    '  <p>' + esc(ELBIL._om) + '</p>',
    '</div>',
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// ── Sammenligninger: "A vs. B" ─────────────────────────────────────────────
//
// Hver model får sine tre nærmeste konkurrenter: samme klasse (størrelse eller
// karrosseri) og samme drivlinje (el mod el, resten mod hinanden), valgt efter
// samlet pris pr. md. og lastrum. Alle par ville være over 400 tynde sider;
// her er det de par, folk faktisk sætter op mod hinanden. Siderne skrives ud
// af de samme data som modelsiderne og siger aldrig mere, end tallene bærer.

function sammenlignKlasse(bil) {
  return (stoerrelse(bil) || bil.karrosseri) + "|" + (bil.drivmiddel === "el" ? "el" : "ikke-el");
}

function sammenlignSlug(a, b) {
  return slug(a.maerke + " " + a.model) + "-vs-" + slug(b.maerke + " " + b.model);
}

var _sammenlignPar = null;
function sammenlignPar(data) {
  if (_sammenlignPar) return _sammenlignPar;
  var f = data.forudsaetninger;
  var rad = {};
  data.varebiler.forEach(function (b) { rad[b.id] = forsideRad(b, f); });
  var par = {};
  data.varebiler.forEach(function (a) {
    var ra = rad[a.id];
    var kand = data.varebiler.filter(function (b) {
      return b.id !== a.id && sammenlignKlasse(b) === sammenlignKlasse(a);
    }).map(function (b) {
      var rb = rad[b.id];
      var dp = (ra.samlet && rb.samlet) ? Math.abs(Math.log(ra.samlet / rb.samlet)) : 0.5;
      var va = (a.lastrum || {}).volumen_m3, vb = (b.lastrum || {}).volumen_m3;
      var dv = (va && vb) ? Math.abs(Math.log(va / vb)) : 0.3;
      return { b: b, afstand: dp + dv };
    }).sort(function (x, y) { return x.afstand - y.afstand; }).slice(0, 3);
    kand.forEach(function (k) {
      // Rækkefølgen i URL'en er fast (alfabetisk), så A-vs-B og B-vs-A er én side.
      var x = a, y = k.b;
      if ((y.maerke + y.model).localeCompare(x.maerke + x.model, "da") < 0) { x = k.b; y = a; }
      par[x.id + "|" + y.id] = { a: x, b: y, ra: rad[x.id], rb: rad[y.id], slug: sammenlignSlug(x, y) };
    });
  });
  // Parrene vælges efter nærmeste pris, så de ville skifte, hver gang en pris
  // flytter sig et par kroner - og en offentliggjort sammenligning forsvinde fra
  // Google. Registret husker alle par, der har været udgivet; et par bliver
  // stående, så længe begge modeller har tilbud. (Filen deployes ikke.)
  var regFil = path.join(__dirname, "sammenlign-par.json"), reg = [];
  try { reg = JSON.parse(fs.readFileSync(regFil, "utf8")); } catch (e) {}
  var efterId = {};
  data.varebiler.forEach(function (b) { efterId[b.id] = b; });
  reg.forEach(function (k) {
    var ids = k.split("|"), x = efterId[ids[0]], y = efterId[ids[1]];
    if (x && y && !par[k]) par[k] = { a: x, b: y, ra: rad[x.id], rb: rad[y.id], slug: sammenlignSlug(x, y) };
  });
  var alleNoegler = reg.concat(Object.keys(par)).filter(function (k, i, a) { return a.indexOf(k) === i; }).sort();
  try { fs.writeFileSync(regFil, JSON.stringify(alleNoegler, null, 1) + "\n"); } catch (e) {}
  _sammenlignPar = Object.keys(par).map(function (k) { return par[k]; });
  return _sammenlignPar;
}

function sammenlignForModel(bil, data) {
  return sammenlignPar(data).filter(function (p) { return p.a.id === bil.id || p.b.id === bil.id; });
}

// 02-10-2026: konkurrenterne som tabel med pris og mål, ikke kun navne, så man kan
// se, om sammenligningen er værd at åbne.
function sammenlignLinksHTML(bil, data) {
  var p = sammenlignForModel(bil, data);
  if (!p.length) return '';
  var mig = billigsteSamlet(bil, data);
  function m3(b) { return (b.lastrum || {}).volumen_m3 != null ? kommaTal(b.lastrum.volumen_m3) + ' m³' : '—'; }
  var raekker = p.map(function (x) {
    var anden = x.a.id === bil.id ? x.b : x.a;
    return { x: x, b: anden, r: billigsteSamlet(anden, data) };
  }).sort(function (a, b) { return (a.r ? a.r.samlet : 1e9) - (b.r ? b.r.samlet : 1e9); });
  return [
    '<section class="sektion--kort sammenlign-links">',
    '  <h2>Sammenlign ' + esc(bil.maerke + ' ' + bil.model) + ' med</h2>',
    '  <p class="sektion__manchet">Her er konkurrenterne i samme klasse med den billigste først. Prisen er det billigste tilbud med udbetalingen fordelt over løbetiden.' +
      (mig ? ' ' + esc(bil.model) + ' koster fra ' + talDK(Math.round(mig.samlet)) + ' kr. om måneden.' : '') + '</p>',
    '  <div class="sbs__rul"><table class="sbs sbs--tett"><thead><tr><th>Model</th><th>Fra pr. md.</th><th>Lastrum</th><th>Nyttelast</th><th></th></tr></thead><tbody>',
    raekker.map(function (z) {
      return '<tr><th scope="row"><a href="' + modelSti(z.b) + '">' + esc(z.b.maerke + ' ' + z.b.model) + '</a></th>' +
        '<td>' + (z.r ? talDK(Math.round(z.r.samlet)) + ' kr.' : '—') + '</td>' +
        '<td>' + m3(z.b) + '</td>' +
        '<td>' + esc(nyttelastTekst(z.b) || '—') + '</td>' +
        '<td><a href="/sammenlign/' + z.x.slug + '/">Sammenlign</a></td></tr>';
    }).join(''),
    '  </tbody></table></div>',
    '</section>'
  ].join('\n');
}

function sammenlignSideHTML(p, data) {
  var a = p.a, b = p.b, ra = p.ra, rb = p.rb;
  var na = a.maerke + ' ' + a.model, nb = b.maerke + ' ' + b.model;
  var ea = elForModel(a.id), eb = elForModel(b.id);
  var ga = garantiForModel(a.id), gb = garantiForModel(b.id);
  var la = ga && garantiLaengst(ga), lb = gb && garantiLaengst(gb);
  var sa = udstyrStdAntal(a.id, 0), sb = udstyrStdAntal(b.id, 0);
  var el = a.drivmiddel === "el";
  var rk = function (bil, e) { return e && e.raekkevidde_km != null ? e.raekkevidde_km : bil.raekkevidde_km; };

  // Rækkerne: [navn, værdi A, værdi B, tal A, tal B, retning (1 = højest bedst, -1 = lavest)]
  var mm = function (v) { return v != null ? talDK(v) + ' mm' : null; };
  var raekker = [
    ["Billigste leasingpris", ra.t && ra.t.maanedspris != null ? talDK(ra.t.maanedspris) + ' kr./md.' : null, rb.t && rb.t.maanedspris != null ? talDK(rb.t.maanedspris) + ' kr./md.' : null, ra.t && ra.t.maanedspris, rb.t && rb.t.maanedspris, -1],
    ["Med udbetalingen fordelt", ra.samlet != null ? talDK(Math.round(ra.samlet)) + ' kr./md.' : null, rb.samlet != null ? talDK(Math.round(rb.samlet)) + ' kr./md.' : null, ra.samlet, rb.samlet, -1],
    ["Antal tilbud", String(a.tilbud.length), String(b.tilbud.length), a.tilbud.length, b.tilbud.length, 1],
    ["Vejledende nypris", a.nypris && a.nypris.ekskl_moms_kr != null ? talDK(a.nypris.ekskl_moms_kr) + ' kr.' : null, b.nypris && b.nypris.ekskl_moms_kr != null ? talDK(b.nypris.ekskl_moms_kr) + ' kr.' : null, a.nypris && a.nypris.ekskl_moms_kr, b.nypris && b.nypris.ekskl_moms_kr, -1],
    ["Lastrum", (a.lastrum || {}).volumen_m3 != null ? kommaTal(a.lastrum.volumen_m3) + ' m³' : null, (b.lastrum || {}).volumen_m3 != null ? kommaTal(b.lastrum.volumen_m3) + ' m³' : null, (a.lastrum || {}).volumen_m3, (b.lastrum || {}).volumen_m3, 1],
    ["Nyttelast", nyttelastTekst(a), nyttelastTekst(b), a.nyttelast_kg, b.nyttelast_kg, 1],
    ["Lastrumslængde", mm((a.lastrum || {}).laengde_mm), mm((b.lastrum || {}).laengde_mm), (a.lastrum || {}).laengde_mm, (b.lastrum || {}).laengde_mm, 1],
    ["Bredde mellem hjulkasser", mm((a.lastrum || {}).bredde_mellem_hjulkasser_mm), mm((b.lastrum || {}).bredde_mellem_hjulkasser_mm), (a.lastrum || {}).bredde_mellem_hjulkasser_mm, (b.lastrum || {}).bredde_mellem_hjulkasser_mm, 1],
    ["Europaller", a.europaller != null ? String(a.europaller) : null, b.europaller != null ? String(b.europaller) : null, a.europaller, b.europaller, 1],
    ["Udvendig højde", mm((a.udvendig || {}).hoejde_mm), mm((b.udvendig || {}).hoejde_mm), (a.udvendig || {}).hoejde_mm, (b.udvendig || {}).hoejde_mm, -1],
    ["Udvendig længde", mm((a.udvendig || {}).laengde_mm), mm((b.udvendig || {}).laengde_mm), (a.udvendig || {}).laengde_mm, (b.udvendig || {}).laengde_mm, 0],
    ["Trækvægt", traekTekst(a), traekTekst(b), a.anhaengervaegt_kg, b.anhaengervaegt_kg, 1],
    // Vendediameter og venderadius er to forskellige mål; kun sammenlignelige, når begge har samme slags.
    (a.vendediameter_m != null && b.vendediameter_m != null)
      ? ["Vendediameter", kommaTal(a.vendediameter_m) + ' m', kommaTal(b.vendediameter_m) + ' m', a.vendediameter_m, b.vendediameter_m, -1] : null,
    ["Motor", a.motor_hk != null ? a.motor_hk + ' hk' : null, b.motor_hk != null ? b.motor_hk + ' hk' : null, a.motor_hk, b.motor_hk, 0],
    ["Gearkasse", a.gearkasse || null, b.gearkasse || null, null, null, 0],
    el ? ["Rækkevidde (WLTP)", rk(a, ea) != null ? talDK(rk(a, ea)) + ' km' : null, rk(b, eb) != null ? talDK(rk(b, eb)) + ' km' : null, rk(a, ea), rk(b, eb), 1] : null,
    el ? ["Lynlader (DC)", ea && ea.dc_kw != null ? kommaTal(ea.dc_kw) + ' kW' : null, eb && eb.dc_kw != null ? kommaTal(eb.dc_kw) + ' kW' : null, ea && ea.dc_kw, eb && eb.dc_kw, 1] : null,
    el ? ["AC-lader", ea && ea.ac_kw != null ? kommaTal(ea.ac_kw) + ' kW' : null, eb && eb.ac_kw != null ? kommaTal(eb.ac_kw) + ' kW' : null, ea && ea.ac_kw, eb && eb.ac_kw, 1] : null,
    el ? null : ["Forbrug (WLTP)", a.forbrug_km_pr_l != null ? kommaTal(a.forbrug_km_pr_l) + ' km/l' : null, b.forbrug_km_pr_l != null ? kommaTal(b.forbrug_km_pr_l) + ' km/l' : null, a.forbrug_km_pr_l, b.forbrug_km_pr_l, 1],
    ["Grøn ejerafgift", a.ejerafgift_halvaar_kr != null ? talDK(a.ejerafgift_halvaar_kr) + ' kr./halvår' : null, b.ejerafgift_halvaar_kr != null ? talDK(b.ejerafgift_halvaar_kr) + ' kr./halvår' : null, a.ejerafgift_halvaar_kr, b.ejerafgift_halvaar_kr, -1],
    ["Garanti", la ? aarKm(la) : null, lb ? aarKm(lb) : null, la && la.aar, lb && lb.aar, 1],
    ["Standardudstyr (billigste niveau)", sa != null ? sa + ' af ' + UDSTYR.poster.length : null, sb != null ? sb + ' af ' + UDSTYR.poster.length : null, sa, sb, 1]
  ].filter(function (r) { return r && (r[1] || r[2]); });

  var vinder = function (r) {
    if (r[5] === 0 || r[3] == null || r[4] == null || r[3] === r[4]) return 0;
    return (r[5] > 0 ? r[3] > r[4] : r[3] < r[4]) ? 1 : 2;
  };
  var tabel = raekker.map(function (r) {
    var v = vinder(r);
    return '<tr><th scope="row">' + esc(r[0]) + '</th>'
      + '<td' + (v === 1 ? ' class="bedst"' : '') + '>' + (r[1] ? esc(r[1]) : '<span class="tom">—</span>') + '</td>'
      + '<td' + (v === 2 ? ' class="bedst"' : '') + '>' + (r[2] ? esc(r[2]) : '<span class="tom">—</span>') + '</td></tr>';
  }).join('');

  // Konklusionen: kun påstande, der følger direkte af en række med tal på begge sider.
  var hvem = function (navn) { return function (r) { var v = vinder(r); return v ? (v === 1 ? na : nb) : null; }; };
  var find = function (navn) { return raekker.filter(function (r) { return r[0] === navn; })[0]; };
  var saetninger = [];
  var pris = find("Med udbetalingen fordelt");
  if (pris && vinder(pris)) {
    var billig = vinder(pris) === 1 ? na : nb, forskel = Math.round(Math.abs(pris[3] - pris[4]));
    saetninger.push('<strong>' + esc(billig) + '</strong> er billigst at lease. Den koster ' + talDK(forskel) + ' kr. mindre om måneden, når udbetalingen er fordelt over løbetiden.');
  }
  var vol = find("Lastrum"), ny = find("Nyttelast");
  if (vol && vinder(vol)) saetninger.push(esc(vinder(vol) === 1 ? na : nb) + ' har det største lastrum (' + esc(vinder(vol) === 1 ? vol[1] : vol[2]) + ' mod ' + esc(vinder(vol) === 1 ? vol[2] : vol[1]) + ').');
  if (ny && vinder(ny)) saetninger.push(esc(vinder(ny) === 1 ? na : nb) + ' må laste mest (' + esc(vinder(ny) === 1 ? ny[1] : ny[2]) + ').');
  var rr = find("Rækkevidde (WLTP)");
  if (rr && vinder(rr)) saetninger.push(esc(vinder(rr) === 1 ? na : nb) + ' kører længst på en opladning (' + esc(vinder(rr) === 1 ? rr[1] : rr[2]) + ' efter WLTP).');
  var gg = find("Garanti");
  if (gg && vinder(gg)) saetninger.push(esc(vinder(gg) === 1 ? na : nb) + ' har længst garanti (' + esc((vinder(gg) === 1 ? gg[1] : gg[2]).replace(' / ', ' eller ')) + ').');

  // Udstyr, der er standard på den ene og ikke på den anden (billigste niveau).
  var ua = udstyrForModel(a.id), ub = udstyrForModel(b.id);
  var kunA = [], kunB = [];
  if (ua && ub) UDSTYR.poster.forEach(function (post) {
    var ca = ((ua.udstyr[post.id] || [])[0] || {}).s, cb = ((ub.udstyr[post.id] || [])[0] || {}).s;
    if (ca === "std" && cb && cb !== "std" && cb !== "ukendt") kunA.push(post.navn);
    if (cb === "std" && ca && ca !== "std" && ca !== "ukendt") kunB.push(post.navn);
  });
  var udstyrHTML = (kunA.length || kunB.length) ? [
    '<section class="sektion--kort">',
    '  <h2>Forskelle i standardudstyr</h2>',
    '  <p class="sektion__manchet">Vi sammenligner det billigste udstyrsniveau på begge biler og tager kun udstyr med, som producenten oplyser for dem begge.</p>',
    '  <div class="cta-to">',
    '    <div class="kort"><h3>Kun standard på ' + esc(na) + '</h3>' + (kunA.length ? '<ul class="viden__liste">' + kunA.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '<p class="kilde">Ingen</p>') + '</div>',
    '    <div class="kort"><h3>Kun standard på ' + esc(nb) + '</h3>' + (kunB.length ? '<ul class="viden__liste">' + kunB.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '<p class="kilde">Ingen</p>') + '</div>',
    '  </div>',
    '</section>'
  ].join('\n') : '';

  var sti = '/sammenlign/' + p.slug + '/';
  var title = titelDerPasser([
    na + ' vs. ' + nb + ' — leasing sammenlignet',
    na + ' vs. ' + nb + ' leasing',
    na + ' vs. ' + nb
  ]);
  var desc = na + ' eller ' + nb + '? Leasingpris, lastrum, nyttelast, garanti og udstyr side om side'
    + (el ? ', plus rækkevidde og opladning' : '') + ' — fra udbydernes tilbud og producenternes prislister.';
  var billede = function (bil) {
    return bil.billede ? '<img src="' + esc(bil.billede) + '" alt="' + esc(navnMedType(bil)) + '" width="800" height="450" loading="lazy" decoding="async">' : '';
  };
  return [
    hoved(title, beskrivelse(desc), BASE_URL + sti,
          samlSchema(krummeSchema([["Forsiden", "/"], ["Sammenlign", "/sammenlign/"], [na + ' vs. ' + nb, null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li><a href="/sammenlign/">Sammenlign</a></li><li aria-current="page">' + esc(na + ' vs. ' + nb) + '</li></ol></nav>',
    '<div class="bil-hero">',
    '  <p class="bil-maerke">Sammenligning · ' + esc({ pizzabil: "Pizzabiler", mellem: "Mellemstore kassevogne", stor: "Store kassevogne" }[stoerrelse(a)] || (a.karrosseri === "pickup" ? "Pickups" : "Ladbiler")) + (el ? ' · el' : '') + '</p>',
    '  <h1>' + esc(na) + ' vs. ' + esc(nb) + '</h1>',
    '  <p class="bil-hero__manchet">' + (saetninger.length ? saetninger.join(' ') : 'De to modeller side om side.') + '</p>',
    '</div>',
    '<div class="sammenlign-billeder">',
    '  <a href="' + modelSti(a) + '">' + billede(a) + '<span>' + esc(na) + '</span></a>',
    '  <a href="' + modelSti(b) + '">' + billede(b) + '<span>' + esc(nb) + '</span></a>',
    '</div>',
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel sammenlign-tabel">',
    '<thead><tr><th scope="col"></th><th scope="col"><a href="' + modelSti(a) + '">' + esc(na) + '</a></th><th scope="col"><a href="' + modelSti(b) + '">' + esc(nb) + '</a></th></tr></thead>',
    '<tbody>' + tabel + '</tbody></table></div>',
    '<p class="kilde">Prisen er det billigste annoncerede tilbud på hver model, ekskl. moms. På modelsiden kan du se, hvilken bil tilbuddet gælder, og hvilken forhandler eller hvilket leasingselskab det kommer fra. Mål og vægt gælder den udgave af bilen, der står på modelsiden. Den grønne markering viser det bedste tal i hver række, når det ene tal er tydeligt bedst. En tankestreg betyder, at tallet ikke er oplyst.</p>',
    '</section>',
    udstyrHTML,
    '<section class="sektion--kort">',
    '  <h2>Se tilbuddene</h2>',
    '  <p class="sektion__knapper"><a href="' + modelSti(a) + '#tilbud" class="knap knap--sekundaer">' + a.tilbud.length + ' tilbud på ' + esc(na) + '</a>'
      + ' <a href="' + modelSti(b) + '#tilbud" class="knap knap--sekundaer">' + b.tilbud.length + ' tilbud på ' + esc(nb) + '</a></p>',
    '</section>',
    ctaBlok(na + ' eller ' + nb),
    '</main>',
    footer(),
    '</body></html>'
  ].join('\n');
}

function sammenlignIndexHTML(data) {
  var par = sammenlignPar(data);
  var grupper = {};
  par.forEach(function (p) {
    var k = { pizzabil: "Pizzabiler", mellem: "Mellemstore kassevogne", stor: "Store kassevogne" }[stoerrelse(p.a)] || (p.a.karrosseri === "pickup" ? "Pickups" : "Ladbiler og chassis");
    if (p.a.drivmiddel === "el") k += " — el";
    (grupper[k] = grupper[k] || []).push(p);
  });
  var orden = Object.keys(grupper).sort();
  var title = titel("Sammenlign varebiler — to modeller side om side");
  var desc = par.length + " sammenligninger af varebiler i samme klasse: leasingpris, lastrum, nyttelast, garanti og udstyr side om side.";
  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/sammenlign/",
          samlSchema(krummeSchema([["Forsiden", "/"], ["Sammenlign", null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Sammenlign</li></ol></nav>',
    '<div class="bil-hero">',
    '  <p class="bil-maerke">' + par.length + ' sammenligninger</p>',
    '  <h1>Sammenlign to varebiler</h1>',
    '  <p class="bil-hero__manchet">Hver model er sat op mod sine nærmeste konkurrenter i samme klasse og med samme drivlinje — leasingpris, lastrum, nyttelast, garanti og udstyr side om side. Vil du selv vælge, kan du sætte op til fire modeller sammen på <a href="/#varebiler">forsiden</a>.</p>',
    '</div>',
    orden.map(function (k) {
      return '<section class="sektion--kort"><h2>' + esc(k) + '</h2><ul class="udstyr-indeks">'
        + grupper[k].map(function (p) {
          return '<li><a href="/sammenlign/' + p.slug + '/">' + esc(p.a.maerke + ' ' + p.a.model) + ' vs. ' + esc(p.b.maerke + ' ' + p.b.model) + '</a></li>';
        }).join('') + '</ul></section>';
    }).join('\n'),
    '</main>',
    footer(),
    '</body></html>'
  ].join('\n');
}

// ── Garanti ─────────────────────────────────────────────────────────────────
//
// garanti.json har én post pr. model: fabriksgaranti, forlænget garanti (den
// der følger med på vilkår, typisk service på autoriseret værksted), batteri,
// gennemtæring, lak og vejhjælp. km: null = ubegrænset.

var GARANTI = (function () {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "garanti.json"), "utf8")); }
  catch (e) { return null; }
})();

function garantiForModel(id) {
  return GARANTI && GARANTI.modeller && GARANTI.modeller[id] || null;
}

function aarKm(x) {
  if (!x || x.aar == null) return null;
  return x.aar + ' år' + (x.km != null ? ' / ' + talDK(x.km) + ' km' : x.km_ukendt ? ' (km-grænse ikke oplyst)' : ', ubegrænset km');
}

// Den længste garanti, bilen kan have uden at købe noget: fabriksgarantien
// eller den forlængede, hvis den følger med på vilkår.
function garantiLaengst(g) {
  if (!g || !g.fabrik) return null;
  var f = g.forlaenget && g.forlaenget.aar > (g.fabrik.aar || 0) && g.forlaenget.pris == null ? g.forlaenget : g.fabrik;
  return { aar: f.aar, km: f.km, km_ukendt: !!f.km_ukendt, forlaenget: f !== g.fabrik };
}

function garantiKort(g) {
  var l = garantiLaengst(g);
  if (!l) return null;
  return aarKm(l) + (l.forlaenget ? ' (' + g.fabrik.aar + ' år + forlænget på vilkår)' : '');
}

var GARANTI_POSTER = [
  ["fabrik", "Nyvognsgaranti"],
  ["forlaenget", "Forlænget garanti"],
  ["batteri", "Batterigaranti"],
  ["gennemtaering", "Gennemtæring"],
  ["lak", "Lak"],
  ["vejhjaelp", "Vejhjælp"]
];

// null betyder "producenten giver den ikke" - medmindre posten staar i
// _mangler, saa betyder det "ikke fundet". Det skal ikke staa som "Ingen".
var GARANTI_ORD = { forlaenget: /forl/i, batteri: /batteri/i, gennemtaering: /gennemt/i, lak: /lak/i, vejhjaelp: /vejhj|assistance/i };
function garantiTom(g, k) {
  if (g[k] === null && !(GARANTI_ORD[k] && GARANTI_ORD[k].test(g._mangler || ''))) return 'Ingen';
  return 'Ikke oplyst';
}

function garantiVaerdi(k, x) {
  if (!x) return null;
  var t = k === "vejhjaelp"
    ? (x.aar != null ? x.aar + ' år' : /fornyes|forlænges/i.test(x.note || '') ? 'Til næste service, fornyes' : 'Ja')
    : aarKm(x);
  if (!t) return null;
  if (k === "batteri" && x.soh_pct != null) t += ', min. ' + x.soh_pct + ' % kapacitet';
  if (k === "forlaenget" && x.pris != null) t += ' — tilkøb ' + talDK(x.pris) + ' kr.';
  return t;
}

function garantiSektionHTML(bil) {
  var g = garantiForModel(bil.id);
  if (!g) return '';
  var el = harBatteri(bil);
  var raekker = GARANTI_POSTER.filter(function (p) { return p[0] !== "batteri" || el; }).map(function (p) {
    var x = g[p[0]];
    var v = garantiVaerdi(p[0], x);
    var noteTekst = x ? [x.vilkaar, x.note].filter(Boolean).map(function (t) { return t.replace(/\.*\s*$/, '.'); }).join(' ') : (g[p[0] + '_note'] || '');
    var note = noteTekst ? '<span class="garanti__note">' + esc(noteTekst) + '</span>' : '';
    return '<div><dt>' + esc(p[1]) + '</dt><dd>' + (v ? esc(v) : '<span class="garanti__ingen">' + garantiTom(g, p[0]) + '</span>') + note + '</dd></div>';
  }).join('');
  var l = garantiLaengst(g);
  return [
    modulHTML("garanti", "Garanti",
      (l ? esc(bil.maerke + ' ' + bil.model) + ' har <strong>' + esc(aarKm(l)) + '</strong>'
        + (l.forlaenget ? ', når betingelserne for den forlængede garanti er opfyldt' : ' i nyvognsgaranti') + '. ' : '')
        + 'Garantien følger bilen, også når den er leaset — men det er typisk dig, der skal sørge for, at servicen bliver lavet. '
        + '<a href="/garanti/">Sammenlign garantien på alle modeller</a>.',
      '<dl class="garanti-grid">' + raekker + '</dl>'
        + (g._mangler ? '<p class="modul__mangler"><strong>Mangler:</strong> ' + esc(g._mangler) + '</p>' : ''),
      'Kilde: <a href="' + esc(g.kilde.url) + '" rel="nofollow noopener" target="_blank">' + esc(vaertNavn(g.kilde.url)) + '</a>, set den '
        + esc(visDato(g.kilde.dato)) + '. ' + (g.kilde.note ? linkUrler(g.kilde.note) + ' ' : '')
        + 'Garantivilkårene står hos producenten; spørg leasingselskabet, hvem der betaler, hvis en reparation falder uden for.')
  ].join('\n');
}

function garantiIndexHTML(data) {
  if (SIDE_NY.garanti && !data._gammel) return sideNy().garantiIndex(data);
  var rader = data.varebiler.map(function (bil) { return { bil: bil, g: garantiForModel(bil.id) }; })
    .filter(function (r) { return r.g; })
    .sort(function (a, b) {
      var la = garantiLaengst(a.g) || {}, lb = garantiLaengst(b.g) || {};
      return (lb.aar || 0) - (la.aar || 0) || ((lb.km == null ? 1e9 : lb.km) - (la.km == null ? 1e9 : la.km))
        || (a.bil.maerke + a.bil.model).localeCompare(b.bil.maerke + b.bil.model, "da");
    });
  var harEl = rader.some(function (r) { return harBatteri(r.bil); });
  var kol = GARANTI_POSTER.filter(function (p) { return p[0] !== "batteri" || harEl; });
  var krop = rader.map(function (r) {
    return '<tr><th scope="row"><a href="' + modelSti(r.bil) + '#garanti">' + esc(r.bil.maerke + ' ' + r.bil.model) + '</a></th>'
      + kol.map(function (p) {
        if (p[0] === "batteri" && !harBatteri(r.bil)) return '<td class="tom">—</td>';
        var v = garantiVaerdi(p[0], r.g[p[0]]);
        return v ? '<td>' + esc(v) + '</td>' : '<td class="tom">' + garantiTom(r.g, p[0]) + '</td>';
      }).join('') + '</tr>';
  }).join('');
  var laengst = rader[0] ? garantiLaengst(rader[0].g) : null;
  var title = titel("Garanti på varebiler — alle mærker sammenlignet");
  var desc = "Nyvognsgaranti, forlænget garanti, batterigaranti, gennemtæring og vejhjælp for " + rader.length
    + " varebiler til erhverv, side om side. Fra producenternes danske prislister og garantisider.";
  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/garanti/",
          samlSchema(krummeSchema([["Forsiden", "/"], ["Garanti", null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Garanti</li></ol></nav>',
    '<div class="bil-hero">',
    '  <p class="bil-maerke">' + rader.length + ' modeller</p>',
    '  <h1>Garanti på varebiler, sammenlignet</h1>',
    '  <p class="bil-hero__manchet">Garantien står sjældent i en leasingannonce, men den afgør, hvem der betaler, når noget går i stykker i år fire. '
      + 'Her er den for hver model — sorteret efter den længste garanti, bilen kan have uden at købe noget ekstra.'
      + (laengst ? ' Længst er ' + esc(aarKm(laengst)) + '.' : '') + '</p>',
    '</div>',
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<div class="tilbud-tabel-wrap">',
    '<table class="tilbud-tabel garanti-tabel">',
    '<thead><tr><th scope="col">Model</th>' + kol.map(function (p) { return '<th scope="col">' + esc(p[1]) + '</th>'; }).join('') + '</tr></thead>',
    '<tbody>' + krop + '</tbody>',
    '</table>',
    '</div>',
    '<p class="kilde"><strong>Forlænget garanti</strong> følger med bilen på vilkår — typisk at servicen laves på et autoriseret værksted efter producentens program. Vilkårene står på modelsiden. <strong>Ingen</strong> betyder, at producenten ikke giver den garanti; <strong>ikke oplyst</strong>, at vi ikke har fundet den i producentens danske materiale.</p>',
    '</section>',
    '<section class="sektion--kort">',
    '  <h2>Garanti på en leaset varebil</h2>',
    '  <p>Leasingselskabet ejer bilen, men garantien følger bilen. I de fleste aftaler skal du selv sørge for, at servicen bliver lavet til tiden. Ellers kan en forlænget garanti bortfalde. Aftalen afgør, hvem der betaler en reparation, som garantien ikke dækker.</p>',
    '  <p>En aftale på 60 måneder løber to år længere end en garanti på tre år. De sidste to år kan derfor blive dyre, medmindre service og reparation er med i ydelsen.</p>',
    '</section>',
    '<div class="forbehold">',
    '  <h2>Om tallene</h2>',
    '  <p>' + esc(GARANTI._om) + '</p>',
    '</div>',
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// Tværs af mærker: én side pr. post på tjeklisten. Svaret på "hvilke
// varebiler har bakkamera som standard" står ikke samlet nogen steder.
var UDSTYR_ORDEN = { std: 0, tilvalg: 1, pakke: 2, nej: 3, ukendt: 4 };

function udstyrRaekker(post, data) {
  return data.varebiler.map(function (bil) {
    var u = udstyrForModel(bil.id);
    if (!u) return null;
    var c = u.udstyr[post.id] || [];
    var n = u.niveauer.length;
    return { bil: bil, u: u, lav: c[0] || { s: "ukendt" }, hoej: n > 1 ? (c[n - 1] || { s: "ukendt" }) : null };
  }).filter(Boolean).sort(function (a, b) {
    var d = UDSTYR_ORDEN[a.lav.s] - UDSTYR_ORDEN[b.lav.s];
    if (d) return d;
    return (a.lav.pris || 0) - (b.lav.pris || 0) || (a.bil.maerke + a.bil.model).localeCompare(b.bil.maerke + b.bil.model, "da");
  });
}

function modelSti(bil) { return '/varebiler/' + slug(bil.maerke) + '/' + slug(bil.model) + '/'; }

function udstyrPostHTML(post, data) {
  if (SIDE_NY.udstyr && !data._gammel) return sideNy().udstyrPost(post, data);
  var r = udstyrRaekker(post, data);
  var std = r.filter(function (x) { return x.lav.s === "std"; }).length;
  var stdTop = r.filter(function (x) { return (x.hoej || x.lav).s === "std"; }).length;
  var navnLille = post.navn.charAt(0).toLowerCase() + post.navn.slice(1);
  if (/^[A-ZÆØÅ]{2}|^(Apple|DAB|LED|P-|12V)/.test(post.navn)) navnLille = post.navn;
  var sti = "/udstyr/" + slug(post.navn) + "/";
  var title = titel("Varebiler med " + navnLille + " som standard");
  var desc = navnLille.charAt(0).toUpperCase() + navnLille.slice(1) + " er standard på det billigste udstyrsniveau hos "
    + std + " af " + r.length + " varebiler. Se hvilke, og hvad det koster som tilvalg på resten.";

  var rader = r.map(function (x) {
    return '<tr><th scope="row"><a href="' + modelSti(x.bil) + '#udstyr">' + esc(x.bil.maerke + ' ' + x.bil.model) + '</a></th>'
      + '<td class="udstyr__niv">' + esc(x.u.niveauer[0].navn) + '</td>' + udstyrCelleHTML(x.lav)
      + (x.hoej ? '<td class="udstyr__niv">' + esc(x.u.niveauer[x.u.niveauer.length - 1].navn) + '</td>' + udstyrCelleHTML(x.hoej)
                : '<td class="udstyr__niv" colspan="2">Kun ét niveau</td>')
      + '</tr>';
  }).join('');

  var andre = UDSTYR.poster.filter(function (p) { return p.id !== post.id; }).map(function (p) {
    return '<a href="/udstyr/' + slug(p.navn) + '/">' + esc(p.navn) + '</a>';
  }).join('');

  return [
    hoved(title, beskrivelse(desc), BASE_URL + sti,
          samlSchema(krummeSchema([["Forsiden", "/"], ["Udstyr", "/udstyr/"], [post.navn, null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li><a href="/udstyr/">Udstyr</a></li><li aria-current="page">' + esc(post.navn) + '</li></ol></nav>',
    '<div class="bil-hero">',
    '  <p class="bil-maerke">Udstyr på tværs af mærker</p>',
    '  <h1>Varebiler med ' + esc(navnLille) + ' som standard</h1>',
    '  <p class="bil-hero__manchet">' + esc(navnLille.charAt(0).toUpperCase() + navnLille.slice(1)) + ' er standard på det billigste udstyrsniveau hos <strong>'
      + std + ' af ' + r.length + '</strong> varebiler' + (stdTop > std ? ', og på det dyreste hos ' + stdTop : '')
      + '. Tabellen viser både det billigste og det dyreste udstyrsniveau på hver model. Priserne er producentens listepris for tilvalget, ekskl. moms.</p>',
    '</div>',
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<div class="tilbud-tabel-wrap">',
    '<table class="tilbud-tabel udstyr-tabel udstyr-tabel--tvaers">',
    '<thead><tr><th scope="col">Model</th><th scope="col" colspan="2">Billigste niveau</th><th scope="col" colspan="2">Dyreste niveau</th></tr></thead>',
    '<tbody>' + rader + '</tbody>',
    '</table>',
    '</div>',
    '<p class="kilde">Oplysningerne kommer fra producenternes danske prislister. På modelsiden kan du se kilde og dato. <em>Ikke oplyst</em> betyder, at prislisten ikke nævner udstyret. Det betyder ikke, at bilen mangler det. Spørg forhandleren.</p>',
    '</section>',
    '<section class="sektion--kort">',
    '  <h2>Andet udstyr</h2>',
    '  <p class="maerkelinks">' + andre + '</p>',
    '</section>',
    ctaBlok(),
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

function udstyrForsideHTML(data) {
  if (!UDSTYR) return '';
  var antal = data.varebiler.filter(function (b) { return udstyrForModel(b.id); }).length;
  var bak = UDSTYR.poster.filter(function (p) { return p.id === "bakkamera"; })[0];
  var bakStd = bak ? udstyrRaekker(bak, data).filter(function (x) { return x.lav.s === "std"; }).length : null;
  var udvalg = ["bakkamera", "carplay", "saedevarme", "parkeringsvarmer", "adaptiv_fartpilot", "skydedoer_venstre", "anhaengertraek"];
  return [
    '<section class="sektion--kort" id="udstyr">',
    '  <h2>Udstyr på tværs af mærker</h2>',
    '  <p class="sektion__manchet">Hvad er standard, hvad koster ekstra, og hvad fås slet ikke? '
      + UDSTYR.poster.length + ' poster slået op i producenternes prislister for ' + antal + ' modeller.'
      + (bakStd != null ? ' Bakkamera er fx standard på det billigste niveau hos ' + bakStd + ' af ' + antal + '.' : '') + '</p>',
    '  <p class="maerkelinks">' + udvalg.map(function (id) {
      var p = UDSTYR.poster.filter(function (x) { return x.id === id; })[0];
      return p ? '<a href="/udstyr/' + slug(p.navn) + '/">' + esc(p.navn) + '</a>' : '';
    }).join('') + '</p>',
    '  <p style="margin-top:1.25rem"><a href="/udstyr/">Se alt udstyr</a> · <a href="/garanti/">Sammenlign garantien</a></p>',
    '</section>'
  ].join('\n');
}

function udstyrIndexHTML(data) {
  if (SIDE_NY.udstyr && !data._gammel) return sideNy().udstyrIndex(data);
  var antal = data.varebiler.filter(function (b) { return udstyrForModel(b.id); }).length;
  var title = titel("Udstyr på varebiler — standard og tilvalg på tværs af mærker");
  var desc = "Hvilke varebiler har bakkamera, CarPlay, sædevarme eller skydedør i begge sider som standard? "
    + "Vi har sammenlignet " + UDSTYR.poster.length + " slags udstyr på " + antal + " modeller.";
  var grupper = UDSTYR.grupper.map(function (g) {
    var li = UDSTYR.poster.filter(function (p) { return p.gruppe === g.id; }).map(function (p) {
      var r = udstyrRaekker(p, data);
      var std = r.filter(function (x) { return x.lav.s === "std"; }).length;
      var uk = r.filter(function (x) { return x.lav.s === "ukendt"; }).length;
      return '<li><a href="/udstyr/' + slug(p.navn) + '/">' + esc(p.navn) + '</a>'
        + '<span class="udstyr-indeks__tal">standard på ' + std + ' af ' + r.length
        + (uk ? ' · ' + uk + ' ikke oplyst' : '') + '</span></li>';
    }).join('');
    return '<section class="sektion--kort"><h2>' + esc(g.navn) + '</h2><ul class="udstyr-indeks">' + li + '</ul></section>';
  }).join('\n');

  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/udstyr/",
          samlSchema(krummeSchema([["Forsiden", "/"], ["Udstyr", null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Udstyr</li></ol></nav>',
    '<div class="bil-hero">',
    '  <p class="bil-maerke">' + UDSTYR.poster.length + ' poster · ' + antal + ' modeller</p>',
    '  <h1>Udstyr på varebiler, sammenlignet på tværs af mærker</h1>',
    '  <p class="bil-hero__manchet">Hver producent stiller sin prisliste op på sin egen måde. Her er det samme udstyr slået op hos alle — standard, tilvalg med pris, eller slet ikke. Tallet er, hvor mange modeller der har det som standard på det billigste niveau.</p>',
    '</div>',
    grupper,
    '<div class="forbehold">',
    '  <h2>Om tallene</h2>',
    '  <p>' + esc(UDSTYR._om) + '</p>',
    '</div>',
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// Modul på modelsiden: overskrift, én linjes resumé, indhold og en
// sammenklappet "Kilde og noter". Kildenoterne er lange og detaljerede — de
// skal kunne efterprøves, men ikke drukne de tal, folk kom for.
function modulHTML(id, titel, resume, indhold, kilder) {
  return [
    '<section class="modul" id="' + id + '">',
    '  <header class="modul__hoved"><h2>' + titel + '</h2>' + (resume ? '<p class="modul__resume">' + resume + '</p>' : '') + '</header>',
    indhold,
    kilder ? '  <details class="kildenote"><summary>Kilde og noter</summary><div class="kildenote__indhold">' + kilder + '</div></details>' : '',
    '</section>'
  ].join('\n');
}

// Kort beskrivelse af bilen til toppen af modelsiden. Skrevet ud af data, så
// den passer på alle modeller og aldrig siger mere, end tallene bærer: klasse,
// drivlinje, lastrum, nyttelast, rækkevidde/træk — og hvor bilen skiller sig
// ud i sin egen klasse på siden (kun når klassen har mindst fire modeller).
// Biltypen som søgeord: "kassevogn", "ladbil", "pickup". Står typen allerede i
// modelnavnet ("Daily Ladbil", "Master Chassis"), gentages den ikke.
function typeOrd(bil) {
  var t = bil.karrosseri === "pickup" ? "pickup" : bil.karrosseri === "ladvogn" ? "ladbil" : "kassevogn";
  if (bil.drivmiddel === "el" && t === "kassevogn") t = "el-kassevogn";
  return /ladbil|chassis|boks|pickup|kassevogn/i.test(bil.model) ? "" : t;
}
function navnMedType(bil) { var t = typeOrd(bil); return bil.maerke + " " + bil.model + (t ? " " + t : ""); }

// Navnet, folk søger på: "VW Transporter", "Mercedes Sprinter" (Search Console 02-10-2026).
var KALDENAVN = { "Volkswagen": "VW", "Mercedes-Benz": "Mercedes" };
function hverdagsNavn(bil) { return (KALDENAVN[bil.maerke] || bil.maerke) + " " + bil.model; }
// Producentens eget navn, hvor det afviger fra modelnavnet på siden (fra de danske prislister).
var OFFICIELT_NAVN = {
  "renault-kangoo-e-tech": "Kangoo E-Tech electric",
  "renault-master-e-tech": "Master E-Tech electric",
  "renault-trafic-e-tech": "Trafic E-Tech Electric"
};
function soegeNavn(bil) {
  if (OFFICIELT_NAVN[bil.id]) return bil.maerke + " " + OFFICIELT_NAVN[bil.id];
  // Citroëns ë-modeller søges uden prikker: "e jumpy", "e-berlingo".
  return hverdagsNavn(bil) + (/ë/.test(bil.model) ? " (" + bil.model.replace(/ë/g, "e") + ")" : "");
}

function bilBeskrivelse(bil, data) {
  var navn = bil.maerke + ' ' + bil.model;
  var klasse = stoerrelse(bil);
  var el = bil.drivmiddel === "el", ph = bil.drivmiddel === "plugin";
  var type;
  if (bil.karrosseri === "pickup") type = "pickup";
  else if (bil.karrosseri === "ladvogn") type = /boks|lift/i.test(bil.model) ? "chassis med kasseopbygning" : /chassis/i.test(bil.model) ? "chassis til opbygning" : "ladvogn";
  else type = "kassevogn";
  var stoer = { pizzabil: "lille ", mellem: "mellemstor ", stor: "stor " }[klasse] || "";
  var artikel = /^chassis/.test(type) ? "et " : "en ";
  var s1 = navn + ' er ' + artikel + stoer + (el ? 'elektrisk ' : '') + type
    + (/ med /.test(type) ? ' og ' : ' med ').replace(/^ (og|med) $/, function (m) { return m; })
      .slice(0, (ph || bil.drivmiddel === "diesel" || bil.drivmiddel === "benzin") ? undefined : 0)
    + (ph ? 'plug-in hybrid' : bil.drivmiddel === "diesel" ? 'dieselmotor' : bil.drivmiddel === "benzin" ? 'benzinmotor' : '')
    + (klasse === "pizzabil" ? ' i pizzabil-klassen' : '') + '.';

  var lr = bil.lastrum || {};
  var fakta = [];
  if (lr.volumen_m3 != null) fakta.push(kommaTal(lr.volumen_m3) + ' m³ lastrum');
  if (bil.nyttelast_kg != null) fakta.push(talDK(bil.nyttelast_kg) + ' kg nyttelast');
  if (el && bil.raekkevidde_km != null) fakta.push(talDK(bil.raekkevidde_km) + ' km rækkevidde efter WLTP');
  else if (bil.anhaengervaegt_kg) fakta.push(talDK(bil.anhaengervaegt_kg) + ' kg trækvægt');
  var pron = artikel === "et " ? 'Det' : 'Den';
  var s2 = fakta.length ? pron + ' har ' + ogListe(fakta) + '.' : '';

  // Placering i klassen: lastrum og nyttelast mod de andre i samme klasse.
  var s3 = '';
  if (klasse) {
    var klassen = data.varebiler.filter(function (b) { return stoerrelse(b) === klasse; });
    var rang = function (felt) {
      var med = klassen.filter(function (b) { return felt(b) != null; })
        .sort(function (a, b) { return felt(b) - felt(a); });
      if (med.length < 4 || felt(bil) == null) return null;
      var i = med.indexOf(bil), k = Math.ceil(med.length / 4);
      return i < k ? "top" : i >= med.length - k ? "bund" : null;
    };
    var vol = rang(function (b) { return (b.lastrum || {}).volumen_m3; });
    var ny = rang(function (b) { return b.nyttelast_kg; });
    var klasseNavn = { pizzabil: "pizzabilerne", mellem: "de mellemstore", stor: "de store" }[klasse];
    var dele = [];
    if (vol === "top") dele.push("et af de største lastrum");
    if (ny === "top") dele.push("en af de højeste nyttelaster");
    if (dele.length) s3 = 'Blandt ' + klasseNavn + ' på siden har ' + pron.toLowerCase() + ' ' + ogListe(dele) + '.';
    else if (vol === "bund" && ny === "bund") s3 = 'Målt på både lastrum og nyttelast er ' + pron.toLowerCase() + ' blandt de mindste af ' + klasseNavn + ' på siden.';
  }
  return [s1, s2, s3].filter(Boolean).join(' ');
}

// Spørgsmål, folk søger på om en bestemt model ("hvad koster det at lease en
// Transit Custom", "hvor meget kan en Sprinter laste"). Hvert svar bygges af tal,
// der allerede står på siden med kilde - mangler tallet, udelades spørgsmålet.
// 02-10-2026: diesel- og elmodstykket hos samme mærke. Parrene står i groen.js,
// så elberegneren og modelsiderne bruger den samme liste.
var EL_PAR = require("./groen.js").PAR || {};
function modstykke(bil, data) {
  var id = EL_PAR[bil.id] || Object.keys(EL_PAR).filter(function (k) { return EL_PAR[k] === bil.id; })[0];
  if (!id) return null;
  var b = (data.varebiler || []).filter(function (x) { return x.id === id; })[0];
  return b && (b.tilbud || []).length ? b : null;
}
function billigsteSamlet(bil, data) {
  var rr = alleTilbud(data).filter(function (x) { return x.bil.id === bil.id && x.samlet != null; });
  return rr.length ? rr.reduce(function (m, x) { return x.samlet < m.samlet ? x : m; }) : null;
}
function dieselElHTML(bil, data) {
  var m = modstykke(bil, data);
  if (!m) return '';
  var erEl = bil.drivmiddel === "el";
  var d = erEl ? m : bil, e = erEl ? bil : m;
  var rd = billigsteSamlet(d, data), re = billigsteSamlet(e, data);
  var motor = d.drivmiddel === "benzin" ? "benzinmotor" : "dieselmotor";
  function m3(b) { return (b.lastrum || {}).volumen_m3 != null ? kommaTal(b.lastrum.volumen_m3) + " m³" : "—"; }
  function kg(v) { return v ? talDK(v) + " kg" : "—"; }
  function afg(b) { return b.ejerafgift_halvaar_kr ? talDK(b.ejerafgift_halvaar_kr * 2) + " kr./år" : "—"; }
  var raek = [
    ["Billigste inkl. udbetaling", rd ? talDK(Math.round(rd.samlet)) + " kr./md." : "—", re ? talDK(Math.round(re.samlet)) + " kr./md." : "—"],
    ["Lastrum", m3(d), m3(e)],
    ["Nyttelast", nyttelastTekst(d) || "—", nyttelastTekst(e) || "—"],
    ["Trækvægt", traekTekst(d) || "—", traekTekst(e) || "—"],
    ["Grøn ejerafgift", afg(d), afg(e)]
  ];
  var dNavn = d.maerke + " " + d.model, eNavn = e.maerke + " " + e.model;
  return [
    '<section class="sektion--kort" id="diesel-el">',
    '  <h2>' + (erEl ? 'Findes også med ' + motor : 'Findes også som el') + '</h2>',
    '  <p>' + (erEl
      ? esc(eNavn) + ' har et modstykke med ' + motor + ': <a href="' + modelSti(d) + '">' + esc(dNavn) + '</a>.'
      : esc(dNavn) + ' findes også som elvarebil: <a href="' + modelSti(e) + '">' + esc(eNavn) + '</a>.') +
      ' Her kan du se dem side om side med det billigste tilbud og producentens tal.</p>',
    '  <div class="sbs__rul"><table class="sbs"><thead><tr><th></th><th>' + esc(dNavn) + '</th><th>' + esc(eNavn) + '</th></tr></thead><tbody>',
    raek.map(function (x) { return '<tr><th scope="row">' + x[0] + '</th><td>' + esc(x[1]) + '</td><td>' + esc(x[2]) + '</td></tr>'; }).join(""),
    '  </tbody></table></div>',
    '  <p>Strøm og brændstof er ikke med i tallene. <a href="/groen-omstilling/?d=' + d.id + '&amp;e=' + e.id + '#beregner">Regn diesel mod el ud for din egen kørsel</a> i elberegneren, hvor de to modeller allerede er valgt.</p>',
    '</section>'
  ].join("\n");
}

// "Tilbuddet er operationelt." / "Alle 3 tilbud er finansielle." / "Af de 3 tilbud
// er 1 operationelt og 2 finansielle." Før 04-10-2026 stod der "Af de 1 tilbud er
// 1 operationelt og 0 finansielle" på sider med ét tilbud.
function leasingtypeAntal(n, tO, tF, tU) {
  function a(k, ent, flt) { return k + " " + (k === 1 ? ent : flt); }
  var ukendt = tU ? ", og ved " + tU + " står det ikke" : "";
  if (tO && tF) return "Af de " + n + " tilbud er " + a(tO, "operationelt", "operationelle") + " og " + a(tF, "finansielt", "finansielle") + ukendt + ".";
  var ord = tO ? ["operationelt", "operationelle"] : ["finansielt", "finansielle"], k = tO || tF;
  if (!tU) return n === 1 ? "Tilbuddet er " + ord[0] + "." : (n === 2 ? "Begge" : "Alle " + n) + " tilbud er " + ord[1] + ".";
  return "Af de " + n + " tilbud er " + a(k, ord[0], ord[1]) + ukendt + ".";
}

// ── Om modellen (05-10-2026) ──────────────────────────────────────
// modeller.json samler diesel-, plugin- og eludgaven af samme bil i en familie
// med registreringstal og redaktionel tekst. Fabrikken hentes fra maerker.json.
// GULPLADE_MODEL_NY=1 viser afsnittet og de nye spørgsmål, indtil brugeren har
// godkendt dem.
var MODEL_NY = process.env.GULPLADE_MODEL_NY !== "0";  // godkendt til produktion 05-10-2026
var MODELLER = (function () {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "modeller.json"), "utf8")); }
  catch (e) { return { familier: [] }; }
})();
function modelFamilie(bil) {
  if (!MODEL_NY) return null;
  return (MODELLER.familier || []).filter(function (f) { return f.ids.indexOf(bil.id) >= 0; })[0] || null;
}
function rensModel(n) { return String(n || "").replace(/\s*\([^)]*\)/g, "").trim().toLowerCase(); }
// Fabrikkerne fra maerker.json, der bygger en af familiens biler.
function modelFabrikker(bil, fam) {
  var m = MAERKER[bil.maerke];
  if (!m || !m.fabrikker) return [];
  var navne = [rensModel(bil.model), rensModel(fam.navn)];
  return m.fabrikker.filter(function (x) {
    return x.modeller.some(function (n) { return navne.indexOf(rensModel(n)) >= 0; });
  });
}
// Familiens søskende, der har en side: "diesel", "plugin-hybrid" og "el".
function familieSider(fam, data) {
  var alle = data.varebiler.concat(data._udenTilbud || []);
  return fam.ids.map(function (id) { return alle.filter(function (b) { return b.id === id; })[0]; }).filter(Boolean);
}
function modelRegTekst(bil, fam, data) {
  var r = fam.reg || {}, rang = fam.rang || {}, mk = MODELLER.marked || {}, navn = fam.navn, d = [];
  if (r["2024"] != null && rang["2024"] && !rang["2025"]) {
    d.push("I 2024 blev der registreret " + talDK(r["2024"]) + " nye " + navn + " i Danmark, og den lå nummer " + rang["2024"] + " blandt alle nye varebiler.");
  }
  if (r["2025"] != null) {
    d.push("I 2025 blev der registreret " + talDK(r["2025"]) + " nye " + navn + " i Danmark.");
    if (rang["2025"]) d.push(rang["2025"] === 1 ? "Det gjorde den til Danmarks mest registrerede varebil." : "Den lå dermed nummer " + rang["2025"] + " blandt alle nye varebiler.");
    else if (mk["2025"]) d.push("Det var " + kommaTal(Math.round(r["2025"] / mk["2025"] * 1000) / 10) + " % af alle nye varebiler det år.");
  }
  if (r["2026"] != null) {
    d.push("Fra januar til " + (mk["2026_til"] || "september").replace(/^\d+\.\s*/, "") + " 2026 er der registreret " + talDK(r["2026"]) + " nye " + navn + ".");
    if (rang["2026"]) d.push(rang["2026"] === 1 ? "Den er også den mest registrerede varebil i år." : "Den ligger nummer " + rang["2026"] + " blandt alle nye varebiler i år.");
  }
  if (!d.length) return "";
  var sider = familieSider(fam, data);
  var dm = sider.map(function (b) { return b.drivmiddel; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
  d.push(fam.reg_note || (dm.length === 2 ? "Tallene gælder alle udgaver af " + navn + ", både " + ogListe(dm.map(drivmiddelNavn)) + "." :
    dm.length > 2 ? "Tallene gælder alle udgaver af " + navn + ": " + ogListe(dm.map(drivmiddelNavn)) + "." : ""));
  return d.filter(Boolean).join(" ");
}

function modelOmHTML(bil, data) {
  var fam = modelFamilie(bil);
  if (!fam) return "";
  var navn = bil.maerke + " " + fam.navn;
  var fab = modelFabrikker(bil, fam);
  var sider = familieSider(fam, data);
  var fakta = [];
  if (fam.generation) fakta.push(["Generation", esc(fam.generation)]);
  if (fab.length) fakta.push(["Bygget", esc(fab.map(function (x) { return x.sted + ", " + x.land; }).join(" og "))]);
  if (fam.soester) fakta.push(["Søstermodeller", esc(fam.soester)]);
  if (sider.length > 1) fakta.push(["Fås som", sider.map(function (b) {
    var t = esc(drivmiddelNavn(b.drivmiddel)) + (b.id === bil.id ? "" : "");
    return b.id === bil.id ? '<strong>' + t + '</strong>' : '<a href="' + modelSti(b) + '">' + t + '</a>';
  }).join(", ")]);
  if (fam.udgaver) fakta.push(["Udgaver", esc(fam.udgaver)]);
  var reg = modelRegTekst(bil, fam, data);
  var kilder = (fam.kilder || []).slice();
  if (reg && MODELLER.reg_kilde) kilder.push(MODELLER.reg_kilde);
  return [
    '<section class="sektion--kort maerke-om" id="om">',
    '  <h2>Om ' + esc(navn) + '</h2>',
    (fam.om || []).map(function (p) { return '  <p>' + esc(p) + '</p>'; }).join("\n"),
    fakta.length ? '  <dl class="model-fakta">' + fakta.map(function (x) {
      return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>';
    }).join("") + '</dl>' : '',
    reg ? '<div class="maerke-om__del"><h3>' + esc(fam.navn) + ' i Danmark</h3><p>' + esc(reg) + '</p></div>' : '',
    fam.historie && fam.historie.length ? [
      '<div class="maerke-om__del">',
      '  <h3>Historien om ' + esc(fam.navn) + '</h3>',
      '  <ol class="maerke-tidslinje">' + fam.historie.map(function (h) {
        return '<li><span class="maerke-tidslinje__aar">' + esc(h.aar) + '</span><p>' + esc(h.tekst) + '</p></li>';
      }).join("") + '</ol>',
      '</div>'].join("\n") : '',
    kildeLinks(kilder),
    MAERKER[bil.maerke] ? '  <p><a href="/varebiler/' + slug(bil.maerke) + '/#om">Læs om ' + esc(bil.maerke) + ': fabrikker, historie, service og forhandlere</a></p>' : '',
    '</section>'
  ].filter(Boolean).join("\n");
}

// Spørgsmål, der kan besvares ud fra familien og prislisten.
function modelOmFaq(bil, data) {
  var fam = modelFamilie(bil), faq = [];
  if (!fam) return faq;
  var navn = bil.maerke + " " + bil.model;
  var fab = modelFabrikker(bil, fam);
  if (fab.length) faq.push(["Hvor bliver " + navn + " bygget?",
    "Den bliver bygget " + ogListe(fab.map(function (x) { return "i " + x.sted.replace(/^[^,]+,\s*/, "") + " i " + x.land; })) + "."]);
  var reg = modelRegTekst(bil, fam, data);
  if (reg) faq.push(["Hvor mange " + bil.maerke + " " + fam.navn + " bliver solgt i Danmark?", reg]);
  var koebFaq = KOEB_NY ? koeb().modelFaq(bil) : null;
  if (koebFaq) faq.push(koebFaq);
  else if (bil.nypris && bil.nypris.ekskl_moms_kr != null) faq.push(["Hvad koster en ny " + navn + "?",
    "Den vejledende pris er " + talDK(bil.nypris.ekskl_moms_kr) + " kr. uden moms" + (bil.nypris.variant ? " for " + bil.nypris.variant : "") +
    (bil.nypris.kilde_dato ? " ifølge prislisten den " + datoLang(bil.nypris.kilde_dato) : "") + ". Ved leasing betaler du i stedet en fast ydelse om måneden."]);
  return faq;
}

function modelFaq(bil, beregnelige, billigstAnnonceret, data) {
  var navn = bil.maerke + " " + bil.model, faq = [];
  var lr = bil.lastrum || {}, el = elForModel(bil.id);
  if (billigstAnnonceret != null) {
    var b0 = beregnelige[0], bN = beregnelige[beregnelige.length - 1];
    // Datoen goer svaret citerbart: en AI-soegning, der gengiver prisen, skal
    // kunne sige, hvornaar den gjaldt. Det er den nyeste dato, et tilbud er laest.
    var prisDato = (bil.tilbud || []).map(function (t) { return t.kilde_dato; })
      .filter(function (x) { return /^\d{4}-\d{2}-\d{2}$/.test(x || ""); }).sort().pop();
    faq.push(["Hvad koster det at lease en " + hverdagsNavn(bil) + "?",
      "Det billigste tilbud, vi har fundet, koster " + talDK(billigstAnnonceret) + " kr. om måneden ekskl. moms."
      + (prisDato ? " Prisen er fra den " + datoLang(prisDato) + "." : "")
      + (b0 ? " Med udbetalingen fordelt over løbetiden er det billigste " + talDK(Math.round(b0.b.maanedligt)) + " kr. om måneden hos " + b0.t.udbyder
        + (bN && bN !== b0 ? ", og det dyreste " + talDK(Math.round(bN.b.maanedligt)) + " kr. hos " + bN.t.udbyder : "") + "." : "")
      + " Ved hvert tilbud kan du se løbetid, kilometer og hvad der følger med."]);
  }
  var tF = 0, tO = 0, tU = 0;
  (bil.tilbud || []).forEach(function (t) {
    if (t.leasingtype === "finansiel") tF++; else if (t.leasingtype === "operationel") tO++; else tU++;
  });
  if (tF + tO) faq.push(["Kan man lease en " + navn + " operationelt eller finansielt?",
    (tO && tF ? "Begge dele. " : "") + leasingtypeAntal(bil.tilbud.length, tO, tF, tU) +
    " Ved operationel leasing afleverer du bilen, når aftalen udløber. Ved finansiel leasing hæfter du for restværdien."]);
  if (data) {
    var mm = modstykke(bil, data);
    if (mm) {
      var rm = billigsteSamlet(mm, data);
      faq.push([bil.drivmiddel === "el" ? "Findes " + navn + " med " + (mm.drivmiddel === "benzin" ? "benzinmotor" : "dieselmotor") + "?" : "Findes " + navn + " som elbil?",
        "Ja, den hedder " + mm.maerke + " " + mm.model + "." + (rm ? " Den koster fra " + talDK(Math.round(rm.samlet)) + " kr. om måneden med udbetalingen fordelt over løbetiden hos " + rm.t.udbyder + "." : "") +
        " På modelsiden kan du se de to biler side om side, og elberegneren regner forskellen ud med strøm, brændstof og ejerafgift."]);
    }
  }
  var nl = nyttelastTekst(bil);
  if (nl) faq.push(["Hvor meget må en " + navn + " laste?",
    "Nyttelasten er " + nl + " ifølge producenten" + (bil.totalvaegt_kg != null ? ", med en tilladt totalvægt på " + talDK(bil.totalvaegt_kg) + " kg" : "")
    + ". Fører, passagerer og ekstraudstyr tæller med i nyttelasten."]);
  if (lr.volumen_m3 != null) faq.push(["Hvor stort er lastrummet i en " + navn + "?",
    kommaTal(lr.volumen_m3) + " m³ ifølge producenten" + (bil.europaller ? ", med plads til " + bil.europaller + " europaller" : "")
    + ". Længde, bredde og højde står under Mål og vægt."]);
  if (bil.anhaengervaegt_kg) faq.push(["Hvor meget kan en " + navn + " trække?",
    talDK(bil.anhaengervaegt_kg) + " kg med bremset anhænger ifølge producenten. Uden bremser er grænsen typisk 750 kg."]);
  var rk = el && el.raekkevidde_km != null ? el.raekkevidde_km : bil.raekkevidde_km;
  if (bil.drivmiddel === "el" && rk != null) faq.push(["Hvor langt kører en " + navn + " på en opladning?",
    talDK(rk) + " km efter WLTP ifølge producenten. Om vinteren og med last er rækkevidden lavere."]);
  var g = garantiForModel(bil.id), gk = g && garantiKort(g);
  if (gk) faq.push(["Hvor lang garanti er der på en " + navn + "?", gk + " ifølge mærkets egne garantivilkår. Detaljerne står under Garanti."]);
  if (bil.totalvaegt_kg != null && bil.totalvaegt_kg <= 3500) faq.push(["Kan en " + navn + " køres på almindeligt kørekort?",
    "Ja. Den tilladte totalvægt er " + talDK(bil.totalvaegt_kg) + " kg, og kategori B dækker op til 3.500 kg."]);
  faq = faq.concat(modelOmFaq(bil, data));
  return faq;
}

// Tal hentet fra en anden kilde end den primære måltabel - hvert felt med sit
// eget link, så læseren kan se præcis hvor fx vendediameteren står.
var FELT_NAVNE = {
  "lastrum.volumen_m3": "Lastrumsvolumen", "lastrum.laengde_mm": "Lastrumslængde", "lastrum.bredde_max_mm": "Lastrumsbredde",
  "lastrum.bredde_mellem_hjulkasser_mm": "Bredde mellem hjulkasser", "lastrum.hoejde_mm": "Lastrumshøjde",
  "lastrum.laesserhoejde_mm": "Læssehøjde", "udvendig.hoejde_mm": "Udvendig højde", "udvendig.laengde_mm": "Udvendig længde",
  "udvendig.bredde_mm": "Udvendig bredde", "udvendig.bredde_med_spejle_mm": "Bredde med spejle",
  "udvendig.akselafstand_mm": "Akselafstand", "egenvaegt_kg": "Vægt uden last", "vendediameter_m": "Vendediameter",
  "venderadius_m": "Venderadius", "europaller": "Europaller", "anhaengervaegt_kg": "Trækvægt",
  "motor_hk": "Motor (hk)", "motor_kw": "Motor (kW)", "gearkasse": "Gearkasse",
  "akselafstand_mm": "Akselafstand", "totalvaegt_kg": "Totalvægt", "batteri_kwh": "Batteri",
  "raekkevidde_km": "Rækkevidde", "ejerafgift_halvaar_kr": "Grøn ejerafgift",
  "nyttelast_kg": "Nyttelast", "nyttelast_op_til_kg": "Nyttelast", "anhaengervaegt_op_til_kg": "Trækvægt",
  "traekkrog_fabrik": "Trækvægt"
};
function feltKilderHTML(bil) {
  var fk = bil.feltkilder;
  if (!fk || !Object.keys(fk).length) return '';
  var efterUrl = {};
  Object.keys(fk).forEach(function (f) {
    var k = fk[f], n = efterUrl[k.url] = efterUrl[k.url] || { felter: [], sted: [], noter: [], dato: k.dato };
    n.felter.push(FELT_NAVNE[f] || f);
    if (k.sted && n.sted.indexOf(k.sted) < 0) n.sted.push(k.sted);
    if (k.note) n.noter.push((FELT_NAVNE[f] || f) + ": " + k.note);
  });
  return '<p class="kilde"><strong>Øvrige tal:</strong> ' + Object.keys(efterUrl).map(function (u) {
    // Et PDF-navn ("prisliste-trafic.pdf") siger mere end CDN-værten, det ligger på.
    var n = efterUrl[u], fil = decodeURIComponent(u.split("?")[0].split("/").pop() || "");
    var vaert = vaertNavn(u);  // "Renaults prisliste", ikke filnavnet eller CDN-værten (06-10-2026)
    return esc(n.felter.join(", ")) + ' fra <a href="' + esc(u) + '" rel="nofollow noopener" target="_blank">' + esc(vaert) + '</a>'
      + (n.sted.length ? ' (' + esc(n.sted.join("; ")) + ')' : '') + ', hentet ' + esc(visDato(n.dato)) + '.'
      + (n.noter.length ? ' ' + esc(n.noter.join(" ")) : '');
  }).join(' ') + '</p>';
}

// Redaktionelt link fra kassevognene til /til-varebilen/indretning/ med
// bilens egne lastrumsmaal. Ikke betalt; partnerblokken staar for sig.
function indretningLinkHTML(bil) {
  var l = bil.lastrum || {};
  if (bil.karrosseri !== "kassevogn" || !l.laengde_mm || !l.bredde_mellem_hjulkasser_mm) return "";
  var indSti = require("./indretning-sider.js").stiForBil(bil) || "/til-varebilen/indretning/";
  return '<section class="sektion--kort indretning-link-sektion"><p class="indretning-link"><a href="' + indSti + '"><strong>Indretning til ' +
    esc(bil.model) + '</strong><span>Lastrummet er ' + talDK(l.laengde_mm) + ' mm langt og ' +
    talDK(l.bredde_mellem_hjulkasser_mm) + ' mm mellem hjulkasserne. Se, hvad reoler og skuffer vejer og koster →</span></a></p></section>';
}

function modelSideHTML(bil, data) {
  var f   = data.forudsaetninger;
  var sti = "/varebiler/" + slug(bil.maerke) + "/" + slug(bil.model) + "/";
  var canonical = BASE_URL + sti;
  var navn = bil.maerke + " " + bil.model;

  var beregnet = bil.tilbud.map(function (t) {
    return { t: t, b: beregn(t, f) };
  });

  var beregnelige = beregnet.filter(function (r) { return r.b.maanedligt != null; });
  beregnelige.sort(function (a, b) { return a.b.maanedligt - b.b.maanedligt; });

  var laveste  = beregnelige.length ? beregnelige[0].b.maanedligt : null;
  var hoejeste = beregnelige.length ? beregnelige[beregnelige.length - 1].b.maanedligt : null;
  var billigstAnnonceret = bil.tilbud.reduce(function (m, t) {
    return (t.maanedspris != null && (m == null || t.maanedspris < m)) ? t.maanedspris : m;
  }, null);

  // Titel og beskrivelse er det, man ser i Googles resultat. Prisen er det, folk
  // søger efter; tallene er det, der skiller modellen ud. Ingen generisk skabelon.
  var fraTekst = billigstAnnonceret != null ? " fra " + talDK(billigstAnnonceret) + " kr./md." : "";
  var titelAntal = bil.tilbud.length > 1 ? " — " + bil.tilbud.length + " tilbud" : "";
  // 02-10-2026: modelsiderne blev vist i Google uden at blive klikket. Antal tilbud
  // står nu forrest, fordi det er det, der skiller siden ud fra en enkelt forhandler.
  var title = titelDerPasser([
    bil.tilbud.length > 1 && fraTekst ? navn + " leasing til erhverv — " + bil.tilbud.length + " tilbud" + fraTekst : null,
    bil.tilbud.length > 1 && fraTekst ? navn + " leasing — " + bil.tilbud.length + " tilbud" + fraTekst : null,
    navn + " leasing til erhverv" + fraTekst + titelAntal,
    navn + " leasing til erhverv" + fraTekst,
    fraTekst ? navn + " leasing" + fraTekst + titelAntal : null,
    fraTekst ? navn + " leasing" + fraTekst : null,
    navn + " leasing til erhverv",
    navn + " leasing"
  ]);
  var lrD = bil.lastrum || {}, elMeta = elForModel(bil.id);
  var faktaD = [
    lrD.volumen_m3 != null ? kommaTal(lrD.volumen_m3) + " m³" : null,
    bil.nyttelast_kg != null ? talDK(bil.nyttelast_kg) + " kg nyttelast" : null,
    bil.drivmiddel === "el" && (elMeta || bil).raekkevidde_km != null ? talDK((elMeta || bil).raekkevidde_km) + " km rækkevidde" : null,
    bil.drivmiddel !== "el" && bil.anhaengervaegt_kg ? talDK(bil.anhaengervaegt_kg) + " kg træk" : null
  ].filter(Boolean);
  var udbN = bil.tilbud.map(function (t) { return t.udbyder; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).length;
  // Beskrivelsen: det sælgende først (antal tilbud og pris), så målene, til sidst
  // hvad man kan på siden. beskrivelse() klipper ved en sætning, hvis den er for lang.
  var fakta = faktaD.length ? ogListe(faktaD).charAt(0).toUpperCase() + ogListe(faktaD).slice(1) + ". " : "";
  var desc;
  if (bil.tilbud.length > 1 && billigstAnnonceret != null) {
    desc = "Sammenlign " + bil.tilbud.length + " erhvervstilbud på " + soegeNavn(bil) + (typeOrd(bil) ? " " + typeOrd(bil) : "") + " fra " + udbN +
      (udbN === 1 ? " udbyder" : " udbydere") + " — fra " + talDK(billigstAnnonceret) + " kr./md. ekskl. moms. " +
      fakta + "Se udbetaling, km og hvad der er inkluderet, og få tilbud gratis.";
  } else if (bil.tilbud.length === 1 && billigstAnnonceret != null) {
    desc = soegeNavn(bil) + (typeOrd(bil) ? " " + typeOrd(bil) : "") + " på erhvervsleasing fra " +
      talDK(billigstAnnonceret) + " kr./md. ekskl. moms hos " + bil.tilbud[0].udbyder + ". " +
      fakta + "Se vilkårene, og få flere tilbud gratis.";
  } else {
    desc = "Erhvervsleasing af " + navnMedType(bil) + ". " + fakta +
      "Ingen aktuelle tilbud lige nu — se mål, udstyr og garanti, eller få tilbud gratis.";
  }

  var restBjaelke = function (samlet, rest, skala) {
    if (samlet == null || rest == null) return '';
    var pB = (samlet / skala.max * 100).toFixed(1), pR = (rest / skala.max * 100).toFixed(1);
    // Det billigste tilbud med restvaerdien regnet med er groent.
    var billigst = Math.round(samlet + rest) === Math.round(skala.min);
    return '<span class="restbar' + (billigst ? ' restbar--billigst' : '') + '" aria-hidden="true">' +
      '<span class="restbar__betalt" style="width:' + pB + '%"></span>' +
      '<span class="restbar__rest" style="width:' + pR + '%"></span></span>' +
      '<span class="udbyder-vilkaar' + (billigst ? ' restbar__billigst' : '') + '">' + talDK(Math.round(samlet + rest)) + ' kr. med restværdien</span>';
  };
  // Rækker, sorteret efter månedspris inkl. udbetaling; de uberegnelige til sidst
  var raekkerFor = function (liste, restSkala) { return liste.slice().sort(function (a, b) {
    if (a.b.maanedligt == null) return 1;
    if (b.b.maanedligt == null) return -1;
    return a.b.maanedligt - b.b.maanedligt;
  }).map(function (r) {
    var t = r.t, b = r.b;
    var pct = Math.round(b.daekning * 100);
    var lav = b.daekning < 0.6 ? " daekning--lav" : "";

    var vilkaar = [];
    if (t.loebetid_mdr) vilkaar.push(t.loebetid_mdr + " mdr.");
    if (t.km_pr_aar)    vilkaar.push(Number(t.km_pr_aar).toLocaleString("da-DK") + " km/år"); else if (t.km_fri) vilkaar.push("fri km");
    if (t.gyldig_til) vilkaar.push("gælder til " + visDato(t.gyldig_til));
    // Typen har sin egen kolonne nu og skal ikke ogsaa staa her.

    var inkl = (t.inkluderet || []).map(function (p) { return POST_NAVNE[p] || p; });
    var fravalgt = (t.ikke_inkluderet || []).length;

    // Ingenting inkluderet er ikke det samme som ingenting oplyst. En udbyder
    // der skriver "service er ikke med" har taget stilling, og det skal ikke
    // staa som om de tav.
    // Finansiel leasing har en aftalt restvaerdi; operationel har ikke. Hvor
    // udbyderen oplyser en restvaerdi uden at navngive typen, er typen udledt
    // af netop det, og det markeres.
    var typeCelle;
    if (!t.leasingtype) {
      typeCelle = '<span class="kilde">Ikke oplyst</span>';
    } else {
      var navnet = t.leasingtype_grundlag === "restvaerdi"
        ? '<abbr class="udledt" title="Udbyderen skriver ikke hvilken type aftalen er, men oplyser en restværdi. Det er kendetegnet ved finansiel leasing.">' + esc(t.leasingtype) + '*</abbr>'
        : esc(t.leasingtype);
      typeCelle = navnet + (t.restvaerdi != null
        ? '<span class="udbyder-vilkaar">Restværdi ' + esc(kr(t.restvaerdi)) + '</span>'
        : '');
    }

    var inkluderetCelle = inkl.length
      ? esc(inkl.join(", "))
      : fravalgt
        ? '<span class="kilde">Intet inkluderet</span>'
        : '<span class="kilde">Intet oplyst</span>';

    return [
      '<tr>',
      '<td><a class="udbyder-navn" href="/udbydere/' + slug(t.udbyder) + '/">' + esc(t.udbyder) + '</a>',
      t.variant ? '<span class="udbyder-vilkaar">' + esc(t.variant) + '</span>' : '',
      udstyrNiveauLink(bil, t),
      vilkaar.length ? '<span class="udbyder-vilkaar">' + esc(vilkaar.join(" · ")) + '</span>' : '',
      t.note ? '<details class="raekkenote"><summary>Detaljer</summary><p>' + esc(t.note) + '</p></details>' : '',
      '</td>',
      '<td class="tal">' + krMd(t.maanedspris) + '</td>',
      '<td class="tal">' + (t.foerstegangsydelse != null ? kr(t.foerstegangsydelse) : '–') + '</td>',
      // Den samlede betaling over hele aftalen er et faktisk tal for et faktisk
      // tilbud (udbetaling + ydelse × løbetid) og viser, hvad en lang løbetid koster.
      '<td class="tal tal--stor tal--afledt">' + (b.maanedligt != null ? krMd(b.maanedligt) : '–')
        + (b.samlet != null ? '<span class="udbyder-vilkaar">' + talDK(Math.round(b.samlet)) + ' kr. i alt over ' + t.loebetid_mdr + ' mdr.</span>' : '')
        + (restSkala ? restBjaelke(b.samlet, t.restvaerdi, restSkala) : '') + '</td>',
      '<td>' + typeCelle + '</td>',
      '<td>' + inkluderetCelle + '</td>',
      '<td><div class="daekning' + lav + '">',
      '<div class="daekning__bar"><div class="daekning__fyld" style="width:' + pct + '%"></div></div>',
      '<span class="daekning__tal">' + b.oplystAntal + '/' + b.posterAntal + '</span>',
      '</div></td>',
      '<td class="kilde"><a href="' + esc(t.kilde_url) + '" rel="nofollow noopener" target="_blank">Kilde</a><br>' + esc(visDato(t.kilde_dato)) + '</td>',
      '</tr>'
    ].filter(function (l) { return l !== ''; }).join("\n");
  }).join("\n"); };
  // Finansiel og operationel leasing er to forskellige produkter og staar i hver
  // sin tabel, saa ydelserne ikke sammenlignes paa tvaers.
  var typeGrupper = [
    ["finansiel", "Finansiel leasing", "Aftalen har en restværdi, som du hæfter for, når den udløber."],
    ["operationel", "Operationel leasing", "Du lejer bilen og afleverer den, når aftalen udløber. Der er ingen restværdi, du hæfter for."],
    [null, "Leasingtype ikke oplyst", "Forhandleren eller leasingselskabet skriver ikke, om aftalen er finansiel eller operationel."]
  ].map(function (g) {
    return { navn: g[1], tekst: g[2], liste: beregnet.filter(function (r) {
      return g[0] ? r.t.leasingtype === g[0] : (r.t.leasingtype !== "finansiel" && r.t.leasingtype !== "operationel");
    }) };
  }).filter(function (g) { return g.liste.length; });
  var tabelHoved = '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel"><thead><tr>'
    + '<th>Udbyder</th><th>Annonceret</th><th>Udbetaling</th><th>Inkl. udbetaling</th><th>Type</th><th>Inkluderet</th><th>Oplyst</th><th>Kilde</th>'
    + '</tr></thead><tbody>';
  // Restbjaelken (godkendt til produktion 04-10-2026):
  // I finansiel leasing er en lav ydelse ofte en hoej restvaerdi. Bjaelken viser
  // ydelserne og restvaerdien lagt sammen, i samme skala for hele gruppen.
  var restSkalaFor = function (g) {
    var med = g.liste.filter(function (r) { return r.b.samlet != null && r.t.restvaerdi != null; });
    if (med.length < 2) return 0;
    var sum = med.map(function (r) { return r.b.samlet + r.t.restvaerdi; });
    return { max: Math.max.apply(null, sum), min: Math.min.apply(null, sum) };
  };
  var tilbudTabeller = typeGrupper.map(function (g) {
    var restSkala = restSkalaFor(g);
    return '<div class="tilbudsgruppe"><h3 class="tilbudsgruppe__navn">' + esc(g.navn) +
      ' <span class="tilbudsgruppe__antal">' + g.liste.length + (g.liste.length === 1 ? ' tilbud' : ' tilbud') + '</span></h3>' +
      '<p class="tilbudsgruppe__tekst">' + esc(g.tekst) + ' <a href="/haandbogen/finansiel-og-operationel-leasing/">Forskellen forklaret</a></p>' +
      (restSkala ? '<p class="restbar-legende"><span class="restbar-legende__betalt">Ydelser og udbetaling</span>' +
        '<span class="restbar-legende__rest">Restværdi</span></p>' : '') +
      tabelHoved + raekkerFor(g.liste, restSkala) + '</tbody></table></div></div>';
  }).join("\n");

  // Med restvaerdien regnet med kan forskellen vaere en helt anden. Kun naar alle
  // tilbud med restvaerdi har samme loebetid, ellers er summerne ikke sammenlignelige.
  var restForskel = function () {
    var med = beregnet.filter(function (r) { return r.b.samlet != null && r.t.restvaerdi != null; });
    if (med.length < 2) return '';
    if (med.some(function (r) { return r.t.loebetid_mdr !== med[0].t.loebetid_mdr; })) return '';
    var sum = med.map(function (r) { return r.b.samlet + r.t.restvaerdi; });
    var d = Math.round(Math.max.apply(null, sum) - Math.min.apply(null, sum));
    return d > 0 ? ' Med restværdien regnet med er forskellen ' + talDK(d) + ' kr. over hele aftalen.' : '';
  };
  var spredning = "";
  if (typeGrupper.length === 1 && laveste != null && hoejeste != null && hoejeste - laveste > 1) {
    spredning = '<div class="note"><strong>Forskel mellem billigste og dyreste: ' +
      kr(hoejeste - laveste) + ' om måneden</strong> når udbetalingen er fordelt over løbetiden. ' +
      'Tilbuddene dækker ikke det samme — se kolonnen Oplyst.' + restForskel() + '</div>';
  }

  var tal = function (v, enhed) { return v != null ? Number(v).toLocaleString("da-DK") + " " + enhed : null; };
  var lr  = bil.lastrum || {};
  var uv  = bil.udvendig || {};
  var harLad = bil.karrosseri === "pickup" || bil.karrosseri === "ladvogn";

  var harElModul = !!elForModel(bil.id);
  var specRows = [
    ["Vejledende nypris",
      bil.nypris && bil.nypris.ekskl_moms_kr != null
      ? (bil.nypris.fra ? "fra " : "") + talDK(bil.nypris.ekskl_moms_kr) + " kr. ekskl. moms" : null],
    ["Karrosseri", bil.karrosseri],
    ["Drivmiddel", drivmiddelNavn(bil.drivmiddel)],
    // Motor og gear: kun det, producenten selv skriver - hk og kW omregnes ikke.
    ["Motor", [bil.motor_hk != null ? bil.motor_hk + " hk" : null, bil.motor_kw != null ? bil.motor_kw + " kW" : null].filter(Boolean).join(" / ") || null],
    ["Gearkasse", bil.gearkasse || null],
    ["Tilladt totalvægt", tal(bil.totalvaegt_kg, "kg")],
    // Producenterne definerer vægten forskelligt (køreklar med fører og brændstof,
    // eller ren egenvægt) - definitionen står ved kilden, ikke i rækkens navn.
    ["Vægt uden last", tal(bil.egenvaegt_kg, "kg")],
    ["Nyttelast", nyttelastTekst(bil)],
    ["Lastrumsvolumen", lr.volumen_m3 != null ? String(lr.volumen_m3).replace(".", ",") + " m³" : null],
    [harLad ? "Ladlængde" : "Lastrumslængde", tal(lr.laengde_mm, "mm")],
    [harLad ? "Ladbredde, maks." : "Lastrumsbredde, maks.", tal(lr.bredde_max_mm, "mm")],
    ["Bredde mellem hjulkasser", tal(lr.bredde_mellem_hjulkasser_mm, "mm")],
    [harLad ? "Ladhøjde" : "Lastrumshøjde", tal(lr.hoejde_mm, "mm")],
    ["Læssehøjde over vejen", tal(lr.laesserhoejde_mm, "mm")],
    ["Europaller", bil.europaller],
    ["Udvendig højde", tal(uv.hoejde_mm, "mm")],
    ["Udvendig længde", tal(uv.laengde_mm, "mm")],
    ["Udvendig bredde uden spejle", tal(uv.bredde_mm, "mm")],
    ["Udvendig bredde med spejle", tal(uv.bredde_med_spejle_mm, "mm")],
    ["Udvendig bredde, spejle inde", tal(uv.bredde_spejle_inde_mm, "mm")],
    ["Akselafstand", tal(uv.akselafstand_mm, "mm")],
    // Venderadius og vendediameter er to forskellige maal. Producenterne
    // opgiver det ene eller det andet, og vi regner ikke om mellem dem.
    ["Venderadius", bil.venderadius_m != null ? String(bil.venderadius_m).replace(".", ",") + " m" : null],
    ["Vendediameter", bil.vendediameter_m != null ? String(bil.vendediameter_m).replace(".", ",") + " m" : null],
    ["Trækvægt med bremser", traekTekst(bil)],
    // Elbilens rækkevidde og batteri står i opladningsmodulet, og 0 g/km siger intet.
    ["CO₂ (WLTP)", bil.co2_g_pr_km != null && !(harElModul && bil.co2_g_pr_km === 0) ? bil.co2_g_pr_km + " g/km" : null],
    ["Forbrug (WLTP)", bil.forbrug_km_pr_l != null ? String(bil.forbrug_km_pr_l).replace(".", ",") + " km/l" : null],
    ["Rækkevidde (WLTP)", harElModul ? null : tal(bil.raekkevidde_km, "km")],
    ["Batteri", harElModul ? null : bil.batteri_kwh != null ? String(bil.batteri_kwh).replace(".", ",") + " kWh" : null],
    ["Grøn ejerafgift", bil.ejerafgift_halvaar_kr != null ? tal(bil.ejerafgift_halvaar_kr, "kr. pr. halvår") : null]
  ].filter(function (r) { return r[1]; })
   .map(function (r) {
     // Variantnavnet er tekst og fylder en hel række; resten er tal.
     var heleRaekken = r[0] === "Variant målene gælder";
     return '<div' + (heleRaekken ? ' class="specs-grid--tekst"' : '') +
       '><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
   })
   .join("\n");

  var mk = bil.maal_kilde;
  var maalKilde = mk
    ? '<p class="kilde">Målene gælder den udgave af bilen, der står øverst i tabellen. Vi har hentet dem fra <a href="' + esc(mk.url) + '" rel="nofollow noopener" target="_blank">producentens eller forhandlerens egen specifikation</a> den ' + esc(datoLang(mk.dato)) + '. ' + esc(mk.note || '') + '</p>'
    : '';
  // Den udvendige hoejde er det tal der afgoer om bilen kan koere ind i en
  // p-kaelder. Danske kaeldre ligger typisk paa 1,90-2,10 m, og hoejden staar
  // ikke paa udbydernes sider. Derfor forklares den.
  var hoejdeNote = uv.hoejde_mm != null
    ? '<p class="kilde">Den udvendige højde er målt uden tagantenne eller tilbehør. '
      + 'Frihøjden i danske parkeringskældre er typisk mellem 1,90 og 2,10 m, så højden afgør, '
      + 'om bilen kan komme ind. Tagbøjler, antenne og lastholdere gør bilen højere.</p>'
    : '';

  var np = bil.nypris;
  var nyprisKilde = np && np.ekskl_moms_kr != null
    ? '<p class="kilde">' + (np.fra
        ? 'Nyprisen er en <strong>fra-pris</strong> for hele serien og gælder <em>ikke</em> den udgave af bilen, målene ovenfor gælder for. Producenten oplyser ' + esc(np.variant || "kun den billigste udgave")
        : 'Nyprisen er den vejledende pris på ' + esc(np.variant || bil.variant_for_maal || "samme variant"))
      + ', hentet fra <a href="' + esc(np.kilde_url) + '" rel="nofollow noopener" target="_blank">importørens egen prisliste</a>, set den '
      + esc(np.kilde_dato) + '. Den enkelte forhandler fastsætter selv sin pris og sine rabatter, så den pris du får tilbudt kan være en anden.'
      + (np.note ? ' ' + esc(np.note) : '') + '</p>'
    : '';

  var maalMangler = bil._mangler
    ? '<div class="note"><strong>Det mangler stadig:</strong> ' + esc(bil._mangler) + '</div>'
    : '';

  // Karrosseri og drivmiddel alene er ikke maal. Sig det, hvis der ikke er maalt noget.
  var harMaal = bil.totalvaegt_kg != null || bil.nyttelast_kg != null
             || lr.volumen_m3 != null || lr.laengde_mm != null;
  var ikkeMaalt = harMaal ? ''
    : '<div class="note">Tekniske mål for denne model er ikke indtastet endnu. Lastrumsmål og nyttelast varierer fra udgave til udgave og hentes fra producentens danske prisliste — vi skriver dem ikke ind på gætværk.</div>';

  var specSektion = modulHTML("specifikationer", "Mål og vægt",
    bil.variant_for_maal ? 'Tallene gælder ' + esc(bil.variant_for_maal) + '.' : '',
    // Maalskitsen er slaaet fra, indtil ejeren har godkendt en ny version
    // (GULPLADE_SKITSE=1 viser den, fx til en preview-deploy).
    (process.env.GULPLADE_SKITSE === "1" ? require("./maalskitse.js")(bil, talDK, esc) : "")
      + (specRows ? '<dl class="specs-grid">' + specRows + '</dl>' : '') + ikkeMaalt
      + (bil._mangler ? '<p class="modul__mangler"><strong>Mangler:</strong> ' + esc(bil._mangler) + '</p>' : ''),
    hoejdeNote + maalKilde + nyprisKilde + feltKilderHTML(bil));

  // Modellens billede hører på modelsiden, ikke kun på forsidens kort.
  // Sidens stoerste billede. fetchpriority siger til browseren, at det er
  // vigtigere end alt andet, den ogsaa gerne vil hente.
  var heroSti = bil.billede_stor || bil.billede;
  var heroBillede = heroSti
    ? '<img src="' + esc(heroSti) + '" alt="' + esc(navnMedType(bil)) +
      '" width="1280" height="720" loading="eager" fetchpriority="high" decoding="async">'
    : '<div class="bilkort__intetbillede">' + esc(bil.model) + '<span>billede mangler</span></div>';

  // Uden redaktionel note skrives en manchet af data, så heroen ikke står tom.
  var udbyderNavne = bil.tilbud.map(function (t) { return t.udbyder; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; });
  var manchet = esc(bilBeskrivelse(bil, data)) + (bil.note ? ' ' + esc(bil.note) : '') +
    (OFFICIELT_NAVN[bil.id] ? ' I ' + esc(bil.maerke) + 's danske prisliste hedder den ' + esc(OFFICIELT_NAVN[bil.id]) + '.' : '');

  // Faktachips: de tal, man vurderer en varebil på, i én linje.
  var gar = garantiForModel(bil.id), elD = elForModel(bil.id);
  var rkv = elD && elD.raekkevidde_km != null ? elD.raekkevidde_km : bil.raekkevidde_km;
  var chips = [
    lr.volumen_m3 != null ? [kommaTal(lr.volumen_m3) + ' m³', 'lastrum'] : null,
    bil.nyttelast_kg != null ? [talDK(bil.nyttelast_kg) + ' kg', 'nyttelast'] : null,
    (bil.drivmiddel === "el" && rkv != null) ? [talDK(rkv) + ' km', 'rækkevidde'] : null,
    (bil.drivmiddel !== "el" && bil.anhaengervaegt_kg) ? [talDK(bil.anhaengervaegt_kg) + ' kg', 'trækvægt'] : null,
    uv.hoejde_mm != null ? [kommaTal(Math.round(uv.hoejde_mm / 10) / 100) + ' m', 'høj'] : null,
    gar && garantiLaengst(gar) ? [garantiLaengst(gar).aar + ' år', 'garanti'] : null
  ].filter(Boolean);
  var chipsHTML = chips.length ? '    <ul class="faktachips">' + chips.map(function (c) {
    return '<li><strong>' + esc(c[0]) + '</strong> ' + esc(c[1]) + '</li>';
  }).join('') + '</ul>' : '';

  var klasseOrd = { pizzabil: "Pizzabil", mellem: "Mellemstor kassevogn", stor: "Stor kassevogn" }[stoerrelse(bil)]
    || { pickup: "Pickup", ladvogn: "Ladvogn / chassis" }[bil.karrosseri] || "Varebil";
  var prisboks = [
    '    <div class="prisboks">',
    '      <div class="prisboks__tal">',
    '        <span class="prisboks__etiket">Billigste leasingpris</span>',
    '        <span class="prisboks__pris">' + (billigstAnnonceret != null ? talDK(billigstAnnonceret) + ' <small>kr./md.</small>' : 'Ikke oplyst') + '</span>',
    '        <span class="prisboks__sub">' + (!bil.tilbud.length ? 'Ingen aktuelle tilbud — den seneste kampagne er udløbet'
      : (laveste != null ? talDK(Math.round(laveste)) + ' kr./md. med udbetalingen fordelt · ' : '')
      + bil.tilbud.length + ' tilbud fra ' + esc(ogListe(udbyderNavne))) + '</span>',
    '      </div>',
    '      <div class="prisboks__knapper">' + (bil.tilbud.length ? '<a href="#tilbud" class="knap knap--sekundaer">Se ' + (bil.tilbud.length === 1 ? 'tilbuddet' : 'alle ' + bil.tilbud.length + ' tilbud') + '</a>' : '')
      + tilbudsknapHTML(bil.maerke + " " + bil.model) + '</div>',
    '    </div>'
  ].join('\n');

  var sidenav = '<nav class="sidenav" aria-label="På siden"><div class="sidenav__indre">'
    + '<a href="#tilbud">Tilbud</a>'
    + '<a href="#specifikationer">Mål og vægt</a>'
    + (elForModel(bil.id) ? '<a href="#opladning">Opladning</a>' : '')
    + (udstyrForModel(bil.id) ? '<a href="#udstyr">Udstyr</a>' : '')
    + (KOEB_NY && koeb().harPriser(bil.id) ? '<a href="#koeb">Køb</a>' : '')
    + (garantiForModel(bil.id) ? '<a href="#garanti">Garanti</a>' : '')
    + (modelFamilie(bil) ? '<a href="#om">Om ' + esc(modelFamilie(bil).navn) + '</a>' : '')
    + '</div></nav>';

  // Nøgletallene skal være det man kom efter: pris, last og træk.
  var noegleRows = [
    ["Billigste annonceret", krMd(billigstAnnonceret)],
    ["Billigste inkl. udbetaling", krMd(laveste)],
    KOEB_NY ? koeb().modelNoegletal(bil) : null,
    ["Nyttelast", nyttelastTekst(bil)],
    ["Lastrum", lr.volumen_m3 != null ? kommaTal(lr.volumen_m3) + " m³" : null],
    ["Trækvægt", traekTekst(bil)],
    ["Batteri", bil.batteri_kwh != null ? kommaTal(bil.batteri_kwh) + " kWh" : null],
    ["Udbydere", String(udbyderNavne.length)]
  ].filter(function (x) { return x && x[1] && x[1] !== "–"; }).slice(0, 6);

  var noegletalHTML = '<dl class="noegletal">' + noegleRows.map(function (x) {
    return '<div><dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd></div>';
  }).join("") + '</dl>';

  // Ingen Product/AggregateOffer her. Det stod der foer, med den billigste
  // MAANEDSYDELSE som lowPrice - og schema.org kan ikke sige "pr. md." paa
  // et AggregateOffer. Google ville vise "Fra 2.224 kr." som bilens pris.
  // Vi saelger heller ikke leasingaftalen selv, og Search Console regnede
  // de 28 sider med i rapporten over saelgeropslag, hvor de fejlede (intet
  // billede, AggregateOffer er ikke tilladt). Broedkrummerne bliver.
  // WebPage er ikke et Product og udloeser ingen saelgeropslag. Den fortaeller
  // soegemaskiner og AI-soegning, hvem der staar bag, og hvornaar tallene sidst
  // blev opdateret (modelDato: nyeste tilbud, maal eller nypris).
  var opdateret = modelDato(bil);
  var schema = {
    "@type": "WebPage", "@id": canonical + "#side", url: canonical,
    name: title, description: beskrivelse(desc), inLanguage: "da-DK",
    dateModified: opdateret || undefined,
    isPartOf: { "@type": "WebSite", "@id": BASE_URL + "/#websted", name: "Gulplade.dk", url: BASE_URL + "/" },
    publisher: { "@type": "Organization", "@id": BASE_URL + "/#organisation", name: "Gulplade.dk", url: BASE_URL + "/" },
    primaryImageOfPage: bil.billede ? { "@type": "ImageObject", url: BASE_URL + "/assets/img/varebiler/" + bil.id + "-del.jpg" } : undefined
  };
  var faq = modelFaq(bil, beregnelige, billigstAnnonceret, data);
  var faqSchema = faq.length ? { "@type": "FAQPage", mainEntity: faq.map(function (q) {
    return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } };
  }) } : null;
  var faqHTML = faq.length ? '<section class="sektion--kort faq"><h2>Spørgsmål om ' + esc(navn) + '</h2>'
    + faq.map(function (q) { return '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join('')
    + '</section>' : '';

  return [
    // JPEG, ikke webp: LinkedIn viser ikke webp-delebilleder, og et
    // delebillede der ikke vises, er det samme som intet.
    hoved(title, beskrivelse(desc), canonical,
          samlSchema(schema, faqSchema, krummeSchema([
            ["Forsiden", "/"],
            ["Varebiler", "/varebiler/"],
            [bil.maerke, "/varebiler/" + slug(bil.maerke) + "/"],
            [bil.model, null]
          ])),
          bil.billede ? "/assets/img/varebiler/" + bil.id + "-del.jpg" : null,
          heroSti ? ['<link rel="preload" as="image" href="' + esc(heroSti) + '">'] : null),
    header(),
    '<main id="indhold" class="bil-side">',
    '<nav class="breadcrumb"><ol>',
    '<li><a href="/">Forsiden</a></li>',
    '<li><a href="/varebiler/">Varebiler</a></li>',
    '<li><a href="/varebiler/' + slug(bil.maerke) + '/">' + esc(bil.maerke) + '</a></li>',
    '<li aria-current="page">' + esc(bil.model) + '</li>',
    '</ol></nav>',

    '<div class="bil-hero modelhero">',
    '  <div class="bil-hero__tekst">',
    '    <p class="bil-maerke">Erhvervsleasing · ' + esc(klasseOrd) + '</p>',
    '    <h1>' + esc(navn) + (bil.tilbud.length ? ' leasing til erhverv' : '') + '</h1>',
    '    <p class="bil-hero__manchet">' + manchet + '</p>',
    chipsHTML,
    prisboks,
    '  </div>',
    '  <div class="bil-hero__billede">' + heroBillede + '</div>',
    '</div>',

    sidenav,

    // Nyt om modellen (fx en ny generation på vej) - står i data som bil.nyhed.
    bil.nyhed ? '<aside class="nyhedsboks"><p class="nyhedsboks__over">' + esc(bil.nyhed.over) + '</p>' +
      '<p>' + esc(bil.nyhed.tekst) + ' <a href="' + bil.nyhed.sti + '">' + esc(bil.nyhed.link) + ' →</a></p></aside>' : '',

    !bil.tilbud.length ? modulHTML("tilbud", "Ingen aktuelle tilbud",
      'Vi viser kun tilbud, der gælder i dag, og den seneste kampagne på ' + esc(navn) + ' er udløbet. Vil du have et tilbud på bilen, henter vi det hjem for dig — gratis.',
      '<p>' + tilbudsknapHTML(navn) + '</p>', '') :
    modulHTML("tilbud", bil.tilbud.length === 1 ? "Tilbuddet" : bil.tilbud.length + " tilbud",
      // 04-10-2026: brugeren fik forklaringen over tabellen slettet.
      '',
      tilbudTabeller + spredning,
      ''),


    // Efter tabellen: det øjeblik, hvor man har set priserne og skal videre.
    '<section class="leadboks">' +
      '<div class="leadboks__tekst"><h2>Vil du have et bedre tilbud på ' + esc(navn) + '?</h2>' +
      '<ul class="leadboks__liste"><li>Vi henter tilbud fra flere forhandlere på samme bil</li>' +
      '<li>Vi læser dem igennem og siger, hvad der mangler</li><li>Gratis for dig — du binder dig ikke</li></ul></div>' +
      '<div class="leadboks__handling">' + tilbudsknapHTML(navn, "Få tilbud på " + bil.model) +
      '<span class="leadboks__lille">Et menneske svarer · forhandleren betaler os, ikke dig</span></div>' +
    '</section>',
    specSektion,
    indretningLinkHTML(bil),
    partnere.modelBlok(bil),
    elSektionHTML(bil),
    dieselElHTML(bil, data),
    udstyrSektionHTML(bil),
    KOEB_NY ? koeb().modelTeaser(bil) : '',
    garantiSektionHTML(bil),
    modelOmHTML(bil, data),
    sammenlignLinksHTML(bil, data),
    modelGuiderHTML(bil, data),
    videnBlokHTML(bil),
    brugtBlokHTML(bil),
    faqHTML,
    ctaBlok(bil.maerke + " " + bil.model),

    '<details class="forbehold forbehold--klap">',
    '<summary><h2>Om tallene på denne side</h2></summary>',
    '<p>Vi har hentet priserne fra forhandlernes og leasingselskabernes egne prislister og annoncer på de datoer, der står i tabellen. Priserne er vejledende og gælder med de vilkår, der står ved hvert tilbud.</p>',
    '<p>Månedsprisen inkl. udbetaling har vi selv regnet ud. Vi har lagt månedsydelsen sammen med førstegangsydelsen fordelt over løbetiden, og begge tal kommer fra forhandleren eller leasingselskabet. Den er ikke et tilbud. Vi regner ikke med et skøn for service, dæk, forsikring, ejerafgift eller vejhjælp, heller ikke når forhandleren eller leasingselskabet ikke oplyser beløbene. De afhænger af din virksomhed, og vi vil ikke lade et gæt afgøre, hvilket tilbud der ser billigst ud.</p>',
    '<p>Tallet dækker heller ikke brændstof eller strøm, kørsel ud over det aftalte antal kilometer, gebyrer uden for førstegangsydelsen, eller moms.</p>',
    '<p>Vi viser kun tilbud, som forhandleren eller leasingselskabet giver lige nu. Derfor regner vi ikke løbetid og kilometertal om, så tilbuddene får samme vilkår. Regner vi et tilbud på 60 måneder om til 36, får du en pris, vi selv har fundet på. Ingen forhandler eller leasingselskab tilbyder den. Derfor kan du ved hvert tilbud se løbetid, kilometertal og leasingtype, og dem skal du tage med, når du sammenligner. En lang løbetid fordeler udbetalingen over flere måneder og giver et lavere månedstal, men aftalen bliver ikke billigere af det.</p>',
    '<p>Siden er ikke skatte-, revisions- eller juridisk rådgivning. Hvordan moms, afgift og skat falder ud, afhænger af din virksomhed.</p>',
    '</details>',

    '<div class="lead-bar">' + (billigstAnnonceret != null ? '<span class="lead-bar__pris">fra ' + talDK(billigstAnnonceret) + ' kr./md.</span>' : '') +
      tilbudsknapHTML(navn, "Få tilbud") + '</div><div class="lead-bar-plads"></div>',
    '</main>',
    sidenavScript(),
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// Markerer det modul, man er i, i den faste navigation.
function sidenavScript() {
  return [
    '<script>',
    '(function () {',
    '  var links = [].slice.call(document.querySelectorAll(".sidenav a"));',
    '  if (!links.length || !("IntersectionObserver" in window)) return;',
    '  var byId = {};',
    '  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });',
    '  var io = new IntersectionObserver(function (poster) {',
    '    poster.forEach(function (p) {',
    '      if (p.isIntersecting) {',
    '        links.forEach(function (a) { a.classList.remove("aktiv"); });',
    '        var a = byId[p.target.id]; if (a) a.classList.add("aktiv");',
    '      }',
    '    });',
    '  }, { rootMargin: "-45% 0px -50% 0px" });',
    '  Object.keys(byId).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });',
    '})();',
    '</script>'
  ].join("\n");
}

// ── Oversigtsside: specifikationstabel ──────────────────────────────────────
//
// Forsiden er den interaktive sammenligning. Denne side er noget andet: alle
// modellers tekniske tal i én tabel, så lastrumsmål og nyttelast kan læses
// på tværs uden at klikke rundt. Kolonnerne kan sorteres.

var OVERSIGT_KOL = [
  { navn: "Model",         felt: "navn",        type: "tekst", fast: true },
  { navn: "Lastrum",       felt: "volumen",     enhed: " m³",  komma: true },
  { navn: "Nyttelast",     felt: "nyttelast",   enhed: " kg" },
  { navn: "Længde",        felt: "laengde",     enhed: " mm" },
  { navn: "Bredde",        felt: "bredde",      enhed: " mm" },
  { navn: "Højde",         felt: "hoejde",      enhed: " mm" },
  { navn: "Paller",        felt: "paller",      enhed: "" },
  { navn: "Totalvægt",     felt: "totalvaegt",  enhed: " kg" },
  { navn: "Trækvægt",      felt: "anhaenger",   enhed: " kg" },
  { navn: "Udv. højde",    felt: "udvHoejde",   enhed: " mm" },
  { navn: "CO₂",           felt: "co2",         enhed: " g/km" },
  { navn: "Forbrug",       felt: "forbrug",     enhed: " km/l", komma: true },
  { navn: "Batteri",       felt: "batteri",     enhed: " kWh", komma: true },
  { navn: "Rækkevidde",    felt: "raekkevidde", enhed: " km" },
  { navn: "Ejerafgift",    felt: "ejerafgift",  enhed: " kr." },
  { navn: "Nypris",        felt: "nypris",      enhed: " kr." },
  { navn: "Std.-udstyr",   felt: "udstyrStd",   enhed: " af " + (UDSTYR ? UDSTYR.poster.length : 23) },
  { navn: "Fra",           felt: "maaned",      enhed: " kr./md." },
  { navn: "Tilbud",        felt: "antalTilbud", enhed: "" }
];

function oversigtHTML(data) {
  if (SIDE_NY.oversigt && !data._gammel) return sideNy().oversigt(data);
  var f = data.forudsaetninger;
  var rader = data.varebiler.map(function (bil) { return forsideRad(bil, f); });

  var antalTilbud = data.varebiler.reduce(function (s, b) { return s + b.tilbud.length; }, 0);
  var medMaal = rader.filter(function (r) { return r.bil.nyttelast_kg != null; }).length;

  function celle(r, k) {
    var bil = r.bil;
    var v = ({
      volumen: r.maal.volumen, laengde: r.maal.laengde, bredde: r.maal.bredde, hoejde: r.maal.hoejde,
      nyttelast: bil.nyttelast_kg, paller: bil.europaller, totalvaegt: bil.totalvaegt_kg,
      anhaenger: bil.anhaengervaegt_kg, co2: bil.co2_g_pr_km, forbrug: bil.forbrug_km_pr_l,
      batteri: bil.batteri_kwh, raekkevidde: bil.raekkevidde_km,
      ejerafgift: bil.ejerafgift_halvaar_kr, maaned: r.t.maanedspris, antalTilbud: bil.tilbud.length,
      udvHoejde: (bil.udvendig && bil.udvendig.hoejde_mm != null) ? bil.udvendig.hoejde_mm : null,
      nypris: (bil.nypris && bil.nypris.ekskl_moms_kr != null) ? bil.nypris.ekskl_moms_kr : null,
      udstyrStd: udstyrStdAntal(bil.id, 0)
    })[k.felt];

    if (v == null) return { sort: "", html: '<td class="tom">—</td>' };
    if (k.felt === "nyttelast") {
      return { sort: String(v), html: '<td>' + esc(nyttelastTekst(bil)) + '</td>' };
    }
    var vist = k.komma ? kommaTal(v) : talDK(v);
    return { sort: String(v), html: '<td>' + esc(vist + (k.enhed || "")) + '</td>' };
  }

  var kropRaekker = rader.map(function (r) {
    var bil = r.bil;
    var navn = bil.maerke + " " + bil.model;
    var celler = OVERSIGT_KOL.slice(1).map(function (k) { return celle(r, k); });

    var mk = bil.maal_kilde;
    return [
      '<tr data-sort-navn="' + esc(navn.toLowerCase()) + '"',
      celler.map(function (c, i) {
        return ' data-sort-' + OVERSIGT_KOL[i + 1].felt + '="' + esc(c.sort) + '"';
      }).join(""),
      '>',
      '<th scope="row"><a href="' + r.sti + '">' + esc(navn) + '</a>',
      bil.variant_for_maal ? '<span class="spec-variant">' + esc(bil.variant_for_maal) + '</span>' : '',
      '</th>',
      celler.map(function (c) { return c.html; }).join(""),
      '<td class="spec-kilde">',
      mk ? '<a href="' + esc(mk.url) + '" rel="nofollow noopener" target="_blank">kilde</a>' : '—',
      '</td>',
      '</tr>'
    ].filter(function (l) { return l !== ''; }).join("");
  }).join("\n");

  var hovedRaekke = OVERSIGT_KOL.map(function (k, i) {
    return '<th scope="col"' + (k.fast ? ' class="spec-fast"' : '') +
      '><button type="button" class="spec-sorter" data-felt="' + k.felt +
      '" data-type="' + (k.type || "tal") + '">' + esc(k.navn) + '<span class="spec-pil"></span></button></th>';
  }).join("") + '<th scope="col">Kilde</th>';

  var title = titel("Varebiler: mål, vægt og afgift i én tabel");
  var desc = "Lastrumsmål, nyttelast, totalvægt, CO₂ og grøn ejerafgift for " + data.varebiler.length +
             " varebiler til erhverv, side om side. Tallene er fra producenternes danske prislister med kilde og dato.";

  var schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "numberOfItems": rader.length,
    "itemListElement": rader.map(function (r, i) {
      return { "@type": "ListItem", "position": i + 1,
               "name": r.bil.maerke + " " + r.bil.model, "url": BASE_URL + r.sti };
    })
  };

  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/varebiler/", samlSchema(schema, krummeSchema([["Forsiden", "/"], ["Varebiler", null]]))),
    header(),
    '<main id="indhold" class="oversigt">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Varebiler</li></ol></nav>',

    '<div class="bil-hero">',
    '  <p class="bil-maerke">' + data.varebiler.length + ' modeller · ' + antalTilbud + ' tilbud</p>',
    '  <h1>Alle mål, vægt og afgift i én tabel</h1>',
    '  <p class="bil-hero__manchet">Lastrumsmål, nyttelast og bilens udvendige højde afgør, om varebilen kan bruges til arbejdet — og de tal står sjældent i en leasingannonce. Her er de samlet for alle modellerne på siden, sammen med den vejledende nypris. Klik på en kolonne for at sortere: <strong>Udv. højde</strong> finder de biler, der kan komme ned i en parkeringskælder, og <strong>Nypris</strong> viser, hvad leasingydelsen skal holdes op imod.</p>',
    '  <p class="maerkelinks" style="margin-top:1rem">' + data.varebiler.map(function (b) { return b.maerke; })
      .filter(function (v, i, a) { return a.indexOf(v) === i; }).sort(function (a, b) { return a.localeCompare(b, "da"); })
      .map(function (m) { return '<a href="/varebiler/' + slug(m) + '/">' + esc(m) + '</a>'; }).join('') + '</p>',
    '</div>',

    '<div class="spec-oversigt-wrap">',
    '  <table class="spec-oversigt" id="specTabel">',
    '    <thead><tr>' + hovedRaekke + '</tr></thead>',
    '    <tbody>' + kropRaekker + '</tbody>',
    '  </table>',
    '</div>',

    '<p class="kilde" style="margin-top:1rem">Målene gælder den udgave af bilen, der står under modelnavnet, og er hentet fra producentens danske prisliste eller specifikationsblad — følg kildelinket for at se hvilket. <strong>' +
      medMaal + ' af ' + data.varebiler.length + ' modeller</strong> har mål indtastet. En tankestreg betyder, at tallet ikke er oplyst af producenten, ikke at det er nul. Flere producenter viser lastrummets mål som en målsat tegning frem for tal, og dem kan vi ikke gengive her.</p>',
    UDSTYR ? '<p class="kilde"><strong>Std.-udstyr</strong> er, hvor mange af de ' + UDSTYR.poster.length + ' poster på vores <a href="/udstyr/">udstyrstjekliste</a> der er standard på modellens billigste udstyrsniveau. Udstyr, som prislisten ikke nævner, tæller ikke med — så et lavt tal kan også betyde en tynd prisliste. Se hver post på modelsiden.</p>' : '',

    '<section class="sektion--kort">',
    '  <h2>Hvorfor tallene står som de gør</h2>',
    '  <p>En leasingannonce viser en månedsydelse. Den siger ingenting om, hvorvidt bilen kan bære det du skal have med, eller om reolerne kan stå op ad hjulkasserne. Derfor skriver vi målene ind for hver udgave af bilen fra producenternes egne prislister og skriver kilde og dato på hvert sæt.</p>',
    '  <p>Vi udfylder ikke huller på gætværk. Hvor et felt er tomt, har producenten ikke oplyst tallet i et format vi kan dokumentere, og så skal der stå en tankestreg — ikke et tal vi har regnet baglæns fra noget andet.</p>',
    '  <p style="margin-top:1.5rem"><a href="/#varebiler" class="knap knap--primaer">Sammenlign priser og tilbud</a></p>',
    '</section>',

    ctaBlok(),

    '<div class="forbehold">',
    '  <h2>Om tallene</h2>',
    '  <p>Priskolonnen viser det billigste annoncerede tilbud på modellen, ekskl. moms, indsamlet på den dato der står på modelsiden. Tekniske mål gælder den nævnte udgave af bilen; andre udgaver af samme model har andre mål.</p>',
    '  <p>Grøn ejerafgift er den halvårlige CO₂-ejerafgift inkl. udligningsafgift, som producenten oplyser i prislisten. Den afhænger af bilens CO₂-udledning og ændres ved afgiftsomlægninger.</p>',
    '  <p>Siden er ikke skatte-, revisions- eller juridisk rådgivning.</p>',
    '</div>',

    '</main>',
    footer(),
    oversigtScript(),
    '</body></html>'
  ].join("\n");
}

function oversigtScript() {
  return [
    '<script>',
    '(function () {',
    '  var tabel = document.getElementById("specTabel");',
    '  if (!tabel) return;',
    '  var tbody = tabel.tBodies[0];',
    '  var raekker = Array.prototype.slice.call(tbody.rows);',
    '  var aktivFelt = null, faldende = false;',
    '',
    '  // Tomme felter skal ligge sidst i begge retninger — de er ikke nul.',
    '  function vaerdi(tr, felt, tekst) {',
    '    var v = tr.dataset["sort" + felt.charAt(0).toUpperCase() + felt.slice(1)];',
    '    if (tekst) return v || "";',
    '    if (v === "" || v == null) return null;',
    '    var n = parseFloat(v);',
    '    return isNaN(n) ? null : n;',
    '  }',
    '',
    '  function sorter(felt, tekst) {',
    '    if (aktivFelt === felt) faldende = !faldende;',
    '    else { aktivFelt = felt; faldende = !tekst; }',
    '',
    '    var sorteret = raekker.slice().sort(function (a, b) {',
    '      var x = vaerdi(a, felt, tekst), y = vaerdi(b, felt, tekst);',
    '      if (tekst) return faldende ? y.localeCompare(x, "da") : x.localeCompare(y, "da");',
    '      if (x == null && y == null) return 0;',
    '      if (x == null) return 1;',
    '      if (y == null) return -1;',
    '      return faldende ? y - x : x - y;',
    '    });',
    '    sorteret.forEach(function (tr) { tbody.appendChild(tr); });',
    '',
    '    Array.prototype.forEach.call(tabel.querySelectorAll(".spec-sorter"), function (k) {',
    '      var paa = k.dataset.felt === felt;',
    '      k.classList.toggle("spec-sorter--aktiv", paa);',
    '      k.setAttribute("aria-sort", paa ? (faldende ? "descending" : "ascending") : "none");',
    '      k.classList.toggle("spec-sorter--fald", paa && faldende);',
    '    });',
    '  }',
    '',
    '  Array.prototype.forEach.call(tabel.querySelectorAll(".spec-sorter"), function (k) {',
    '    k.addEventListener("click", function () { sorter(k.dataset.felt, k.dataset.type === "tekst"); });',
    '  });',
    '})();',
    '</script>'
  ].join("\n");
}

// ── Fejlsiden ────────────────────────────────────────────────────────────────
//
// Uden en 404.html serverer Cloudflare Pages forsiden med status 200 for hver
// eneste URL, der ikke findes. Resultatet er hundredvis af sider med identisk
// indhold i Googles indeks - og en doed URL, der aldrig bliver ryddet ud, fordi
// den aldrig siger 404.
//
// Siden faar ingen canonical: den findes ikke paa én adresse, den er svaret paa
// alle de adresser, der ikke findes. Og den er noindex, saa den ikke selv
// bliver indekseret.

function fejlsideHTML(data) {
  var biler = data.varebiler.length;
  var antal = alleTilbud(data).length;
  return [
    '<!DOCTYPE html><html lang="da"><head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>Siden findes ikke | Gulplade.dk</title>',
    '<meta name="robots" content="noindex">',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
    '<meta name="theme-color" content="#f2b705">',
    '<link rel="stylesheet" href="/assets/' + (CSS_V ? 'style.' + CSS_V + '.css' : 'style.css') + '">',
    '<script src="/assets/samtykke.' + SAMTYKKE_V + '.js" defer></script>',
    '</head><body>',
    header(),
    '<main id="indhold">',
    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Fejl 404</p>',
    '  <h1>Den side findes ikke</h1>',
    '  <p class="hero-ny__manchet">Enten er adressen skrevet forkert, eller også har '
    + 'vi flyttet siden. Her er de fire steder, folk oftest skal hen.</p>',
    '</section>',
    '<section class="sektion">',
    '  <h2 class="skjult">Kom videre</h2>',
    '  <p class="maerkelinks">'
    + '<a href="/">Sammenlign ' + antal + ' leasingtilbud</a>'
    + '<a href="/haandbogen/">Håndbogen</a>'
    + '<a href="/brugte-varebiler/">Brugte varebiler</a>'
    + '<a href="/tilbudstjek/">Tjek dit tilbud</a>'
    + '</p>',
    '  <p>Vi har ' + biler + ' modeller og ' + antal + ' tilbud på siden. Er du kommet '
    + 'hertil fra et link et andet sted, så skriv til os — så finder vi ud af, hvad '
    + 'der er gået galt.</p>',
    '</section>',
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}
// ── /faa-tilbud/ — vi henter tilbuddene hjem ───────────────────────
//
// Forhandleren betaler os pr. lead. Det staar oeverst paa siden, ikke i bunden:
// en laeser, der foerst opdager det til sidst, er foert bag lyset, og med rette.
//
// Og mennesket staar i overskriften. Det er forskellen paa os og en leadportal,
// der bare videresender en formular - saa det skal ikke staa i en bisaetning.
//
// Tallene regnes ud af tabellen ved bygning, saa de ikke kan blive forkerte.

// ── /privatliv/ ──────────────────────────────────────────────────────────────
//
// Siden havde ingen privatlivspolitik, samtidig med at en formular i drift
// indsamler navn, firma, e-mail og telefon og sender dem videre til en
// forhandler. Det er den oplysning, databeskyttelsesforordningen kraever
// gives paa indsamlingstidspunktet - isaer hvem oplysningerne deles med.
//
// Fra 28-09-2026 bruger siden Google Analytics 4 - men kun efter samtykke.
// assets/samtykke.js viser banneret og indlaeser foerst gtag.js, naar der er
// trykket "Acceptér". Indtil da er der ingen eksterne scripts og ingen
// cookies; valget gemmes i localStorage. Siden her skal beskrive praecis det.
//
// To ting mangler og skal skrives ind af ejeren: det juridiske
// virksomhedsnavn med CVR, og hvor laenge en henvendelse gemmes.

// ── /personbiler/ ────────────────────────────────────────────────────────────
//
// Henvisning til leasio.dk. Gulplade daekker varebiler paa gule plader; skal
// man bruge en personbil, er det en anden side.
//
// Skillelinjen er karrosseriet, ikke om bilen er privat eller firma: en
// firmabil paa hvide plader hoerer ogsaa til hos Leasio. Det er vaerd at
// skrive praecist, for "erhverv" bruges om begge dele.
//
// FORHOLDET MELLEM DE TO SIDER staar som det, der kan efterproeves - samme
// opbygning, samme princip om kilde og dato paa hvert tal, og begge sider
// oplyser selv, at de kan faa provision for formidlede henvendelser. Om der
// er fael les ejerskab, ved jeg ikke, og det skal skrives ind, hvis der er.
// En henvisning uden oplyst interesse er praecis det, resten af siden
// kritiserer andre for.

function personbilerHTML(data) {
  var biler = data.varebiler.length;
  var antal = alleTilbud(data).length;
  var canonical = BASE_URL + "/personbiler/";
  var desc = beskrivelse("Gulplade.dk dækker varebiler på gule plader. Skal du " +
    "bruge en personbil — privat eller som firmabil på hvide plader — så er " +
    "det Leasio, du skal på.");

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Personbiler", null]]),
    {
      "@type": "WebPage",
      name: "Personbiler — det dækker vi ikke",
      description: desc,
      inLanguage: "da-DK",
      mainEntityOfPage: canonical
    }
  );

  var LEASIO = 'https://leasio.dk/';

  return [
    hoved(titel("Personbiler — skal du bruge en almindelig bil?"), desc,
          canonical, schema),
    header(),
    '<main id="indhold">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>'
    + '<li aria-current="page">Personbiler</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over"><span>Det dækker vi ikke her</span></p>',
    '  <h1>Skal du bruge en personbil?</h1>',
    '  <p class="hero-ny__manchet">Gulplade.dk er kun varebiler på gule plader. '
    + 'Vi har ' + biler + ' modeller og ' + antal + ' tilbud, og de er alle sammen '
    + 'kassevogne, pickupper og ladvogne til erhverv. Skal du bruge en almindelig '
    + 'bil, er det <a href="' + LEASIO + '" rel="noopener">Leasio</a>, du skal på.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Skillelinjen er karrosseriet, ikke firmaet</h2>',
    '  <p>Det bliver tit blandet sammen, fordi ordet „erhverv“ bruges om begge '
    + 'dele. Men de to sider deler ikke efter, <em>hvem</em> der betaler — de '
    + 'deler efter, <em>hvad</em> der står på pladen:</p>',
    '  <div class="trin">',
    '    <div><h3>Her: varebil på gule plader</h3><p>Kassevogn, pickup eller '
    + 'ladvogn, registreret til erhverv. Priser ekskl. moms. Reglerne for, hvad '
    + 'bilen må bruges til, er en del af regnestykket — dem står der om i '
    + '<a href="/haandbogen/">håndbogen</a>.</p></div>',
    '    <div><h3>Hos Leasio: personbil på hvide plader</h3><p>Privatleasing og '
    + 'firmabil. Priser inkl. moms, fordi det er sådan personbiler handles. '
    + 'Beskatningen af fri bil og fradragsreglerne er andre end her.</p></div>',
    '  </div>',
    '  <p style="margin-top:1.5rem">Er du i tvivl: skal der <strong>varer</strong> '
    + 'i bilen, og skal bagsædet væk, er du det rigtige sted. Skal der '
    + '<strong>mennesker</strong> i den, er du ikke.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Sådan hænger de to sider sammen</h2>',
    '  <p>Leasio gør ved personbiler det samme, som vi gør ved varebiler: samler '
    + 'tilbuddene fra udbydernes egne prislister, skriver kilde og dato på hvert '
    + 'tal og forklarer, hvad der ikke står i tilbuddet. De to sider er bygget '
    + 'over den samme tanke, og den ene henviser til den anden, fordi de dækker '
    + 'hver sin halvdel.</p>',
    '  <p><strong>Begge sider oplyser selv, at de kan få provision for '
    + 'formidlede kundehenvendelser.</strong> Det står på deres side, og det står '
    + 'på vores: <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>. '
    + 'En henvisning uden oplyst interesse er præcis det, vi kritiserer andre '
    + 'for, så den står her.</p>',
    '</section>',

    '<section class="sektion">',
    '<div class="kort kort--anden">',
    '<h2>Videre til Leasio</h2>',
    '<p>Privatleasing og firmabil på hvide plader — sammenlignet på samme måde '
    + 'som varebilerne her.</p>',
    '<p style="margin-top:1.25rem"><a href="' + LEASIO + '" rel="noopener" '
    + 'class="knap knap--anden">Gå til leasio.dk</a></p>',
    '</div>',
    '</section>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

function privatlivHTML(data) {
  var canonical = BASE_URL + "/privatliv/";
  var desc = beskrivelse("Gulplade.dk tæller sidevisninger uden at bruge cookies og bruger kun Google Analytics, hvis du siger ja. " +
    "Her kan du se, hvad vi måler, hvad vi gør med de oplysninger, du selv " +
    "sender os, og hvem vi giver dem videre til.");

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Privatliv", null]]),
    {
      "@type": "WebPage",
      name: "Privatliv og cookies",
      description: desc,
      inLanguage: "da-DK",
      mainEntityOfPage: canonical
    }
  );

  return [
    hoved(titel("Privatliv og cookies"), desc, canonical, schema),
    header(),
    '<main id="indhold">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>'
    + '<li aria-current="page">Privatliv</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over"><span>Cookies kun med dit samtykke</span></p>',
    '  <h1>Privatliv og cookies</h1>',
    '  <p class="hero-ny__manchet">Siden sætter <strong>ingen cookies, før du har sagt ja</strong>. '
    + 'Vi tæller alle sidevisninger med Cloudflare Web Analytics, også hvis du siger nej. Det bruger '
    + 'ingen cookies og genkender dig ikke fra det ene besøg til det næste. Siger du ja, bruger vi også '
    + 'Google Analytics til at se, hvor folk kommer fra, og om de kommer igen. Siger du nej, virker '
    + 'siden på samme måde.</p>',
    '</section>',

    '<section class="sektion--kort" id="sidevisninger">',
    '  <h2>Sidevisninger med Cloudflare Web Analytics</h2>',
    '  <p>Vi tæller alle sidevisninger med Cloudflare Web Analytics, også når du har sagt nej til cookies. '
    + 'Et lille script sender Cloudflare, hvilken side du ser, hvilken side du kom fra, hvilken browser '
    + 'du bruger, hvilket land du er i, og hvor hurtigt siden blev vist.</p>',
    '  <p>Scriptet sætter ingen cookies og gemmer intet i din browser. Cloudflare bruger heller ikke din '
    + 'IP-adresse til at genkende dig fra det ene besøg til det næste. Vi kan derfor se, hvor mange gange '
    + 'en side bliver vist, men ikke hvem der har set den.</p>',
    '</section>',

    '<section class="sektion--kort" id="statistik">',
    '  <h2>Statistik med Google Analytics</h2>',
    '  <p>Første gang du besøger siden, spørger vi, om vi må bruge Google Analytics. '
    + 'Indtil du svarer ja, hentes der intet fra Google, og der sættes ingen cookies.</p>',
    '  <p><strong>Siger du ja</strong>, indlæses Google Analytics 4, som sætter cookies (<code>_ga</code> og '
    + '<code>_ga_&lt;id&gt;</code>) for at kunne kende forskel på et nyt og et gentaget besøg. Vi ser '
    + 'hvilke sider der bliver vist, hvor besøget kom fra (fx en søgning), omtrentlig placering '
    + '(land/by), enhed og browser. Vi ser ikke, hvem du er, og vi kobler det ikke sammen med det, '
    + 'du sender os i en formular. Formålet er at finde ud af, hvilke sider og tal der er nyttige.</p>',
    '  <p>Google Ireland Limited behandler oplysningerne for os. Google kan overføre data til USA; '
    + 'Google er certificeret under EU-US Data Privacy Framework. Cookierne udløber efter højst '
    + '2 år, og statistikken gemmes i Google Analytics i den periode, der er sat i kontoen.</p>',
    '  <p><strong>Siger du nej</strong>, husker vi det i din browser (i localStorage, ikke som en '
    + 'cookie), så vi ikke spørger igen. Du kan altid ændre dit valg under '
    + '<a href="#" class="aabn-samtykke">Cookieindstillinger</a> '
    + 'nederst på hver side. Trækker du samtykket tilbage, sletter vi Google Analytics-cookierne '
    + 'i din browser.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Hvad vi får, når du skriver til os</h2>',
    '  <p>Udfylder du formularen på <a href="/faa-tilbud/">Få tilbud</a>, '
    + 'får vi det, du skriver i den: hvad bilen skal bruges til, cirka hvor mange '
    + 'kilometer om året, om bilen skal med hjem, eventuelt en model du har i '
    + 'tankerne, og dit navn, firma, e-mail og telefonnummer. Formularen sender '
    + 'også med, hvilken bilside du kom fra.</p>',
    '  <p>Trykker du „Hør nærmere“, „Ring mig op“, „Find bilen til mig“ eller „Få tilbud“ ved en bil, '
    + 'åbner en formular på siden. Den sender dit navn, telefonnummer og — hvor du udfylder dem — e-mail, '
    + 'firma eller CVR, dit ønske og din besked til os, sammen med hvilken bil og side du kom fra, og hvilket '
    + 'websted der linkede til os (fx en søgemaskine). Har du sagt ja til statistik, husker vi i besøget, hvor du '
    + 'kom fra, og hvilken side du landede på først.</p>',
    '  <p>Når du har sendt den formular, husker din egen browser dit navn, telefonnummer, e-mail og firma, så de er '
    + 'udfyldt næste gang. Det gemmes kun på din enhed, ikke hos os, og forsvinder, når du rydder webstedsdata i browseren.</p>',
    '  <p>Skriver du en almindelig mail, får vi det, der står i den.</p>',
    '  <p>Vi beder ikke om CPR-nummer, kontooplysninger eller andet følsomt, og '
    + 'du skal ikke sende det.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Hvem oplysningerne bliver givet videre til</h2>',
    '  <p><strong>Beder du os om at hente tilbud hjem eller høre nærmere om en bil, sender vi din henvendelse '
    + 'videre til en eller flere forhandlere eller leasingselskaber.</strong> Det er hele formålet med '
    + 'den formular, og uden det kan vi ikke skaffe dig et tilbud. Den, vi sender henvendelsen til, '
    + 'betaler os et honorar for henvendelsen — det samme beløb fra alle. '
    + '<a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '  <p>Ud over det giver vi ikke dine oplysninger videre. Vi sælger dem ikke, '
    + 'og vi lægger dem ikke i et nyhedsbrev, du ikke har bedt om.</p>',
    '  <p>Sender du et tilbud ind til et <a href="/tilbudstjek/">tilbudstjek</a>, '
    + 'går det ikke videre til nogen. Der er ingen forhandler eller leasingselskab inde over den sag.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Hvem der behandler data for os</h2>',
    '  <ul class="viden__liste">',
    '    <li><strong>Tally</strong> leverer formularen på Få tilbud og opbevarer svarene, '
    + 'indtil vi henter dem.</li>',
    '    <li><strong>Web3Forms</strong> modtager formularen ved bilerne og sender den videre til vores '
    + 'indbakke som en e-mail.</li>',
    '    <li><strong>Cloudflare</strong> hoster siden. Som enhver webserver ser Cloudflare din '
    + 'IP-adresse, og hvad din browser henter fra siden. Det bruger de til at levere siden og '
    + 'afvise angreb. Cloudflare tæller også alle sidevisninger for os uden at bruge cookies.</li>',
    '    <li><strong>Google</strong> (Google Ireland Limited) leverer Google Analytics — kun hvis du '
    + 'har sagt ja til statistik.</li>',
    '  </ul>',
    '  <p>Vi bruger ikke Meta-pixel, annoncenetværk eller andre sporingsværktøjer.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Dine rettigheder</h2>',
    '  <p>Du kan bede om at se, hvad vi har om dig, få det rettet, få det slettet '
    + 'eller gøre indsigelse mod, at vi behandler det. Skriv til '
    + '<!--email_off--><a href="mailto:kontakt@gulplade.dk">kontakt@gulplade.dk</a><!--email_on-->, '
    + 'så svarer vi.</p>',
    '  <p>Er du utilfreds med, hvordan vi håndterer dine oplysninger, kan du klage '
    + 'til <a href="https://www.datatilsynet.dk/" rel="noopener">Datatilsynet</a>.</p>',
    '</section>',

    '<div class="forbehold">',
    '  <h2>Forbehold</h2>',
    '  <p>Denne side beskriver, hvordan gulplade.dk faktisk virker. Den er ikke '
    + 'juridisk rådgivning, og den erstatter ikke de vilkår, der gælder mellem dig '
    + 'og den forhandler eller det leasingselskab, du ender med at handle med.</p>',
    '  <p>Har du spørgsmål til noget på siden — eller mener du, at noget er '
    + 'forkert — så skriv. Vi retter hellere end gerne.</p>',
    '</div>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── /kontakt/ ────────────────────────────────────────────────────────────────
//
// Siden havde ingen kontaktside overhovedet - ingen adresse, intet CVR, ingen
// oplysning om hvem der driver den. Det er et problem paa to leder:
//
//   1. E-handelsloven kraever, at en erhvervsdrivende paa nettet er let at
//      identificere. Siden tager nu provision fra forhandlere og beder
//      virksomheder om deres oplysninger; den er utvivlsomt erhvervsdrivende.
//   2. En side, der beder erhvervskunder om at aflevere navn, firma og
//      telefonnummer uden selv at sige, hvem der staar bag, er svaer at stole
//      paa - og med rette.
//
// De juridiske stamoplysninger (virksomhedsnavn, adresse, CVR) staar her
// ikke, fordi jeg ikke kender dem. De skal skrives ind. Alt det oevrige er
// rigtigt og nyttigt i sig selv, og en kontaktside uden CVR er bedre end
// ingen kontaktside.
//
// Rettelsesafsnittet er sidens staerkeste: hvert tal har en kilde og en dato,
// og hvis en udbyder mener, vi har gengivet forkert, skal der vaere et sted
// at sige det.

function kontaktHTML(data) {
  var alle = alleTilbud(data);
  var canonical = BASE_URL + "/kontakt/";
  var desc = beskrivelse("Skriv til os på kontakt@gulplade.dk. Her står også, " +
    "hvordan du får rettet et tal, vi har gengivet forkert, og hvordan " +
    "forhandlere kommer med i netværket.");

  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Kontakt", null]]),
    {
      "@type": "ContactPage",
      name: "Kontakt Gulplade.dk",
      description: desc,
      inLanguage: "da-DK",
      mainEntityOfPage: canonical
    }
  );

  return [
    hoved(titel("Kontakt os om varebiler og leasing"), desc, canonical, schema),
    header(),
    '<main id="indhold">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>'
    + '<li aria-current="page">Kontakt</li></ol></nav>',

    '<section class="hero-ny">',
    '  <p class="hero-ny__over"><span>Vi svarer på hverdage</span></p>',
    '  <h1>Kontakt</h1>',
    '  <p class="hero-ny__manchet">Skriv til '
    + '<!--email_off--><a href="mailto:kontakt@gulplade.dk">kontakt@gulplade.dk</a><!--email_on-->'
    + '. Vi svarer på spørgsmål om tallene på siden, om et '
    + 'tilbud du har fået, og om hvordan vi tjener penge.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Har vi et tal forkert?</h2>',
    '  <p class="sektion__manchet">Så vil vi gerne vide det, og vi retter det.</p>',
    '  <p>Hvert eneste af de ' + alle.length + ' tilbud på siden står med en '
    + 'kilde og en dato. Mener du, vi har gengivet dit tilbud forkert — eller '
    + 'er prisen ændret, siden vi hentede den — så skriv, og skriv gerne hvilken '
    + 'side og hvilket tal det drejer sig om.</p>',
    '  <p>Vi retter tallet og opdaterer datoen. <strong>Vi fjerner ikke et '
    + 'tilbud, fordi en udbyder er utilfreds med at stå ved siden af et '
    + 'billigere</strong> — men et forkert tal er et forkert tal, og det skal '
    + 'væk med det samme.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Er du forhandler?</h2>',
    '  <p>Vi <a href="/faa-tilbud/">henter tilbud hjem</a> for kunder og sender '
    + 'henvendelsen videre til en forhandler, der kan levere den specifikation, '
    + 'kunden har brug for. Forhandleren betaler et honorar for henvendelsen — '
    + 'det samme beløb fra alle, så vi ikke har nogen interesse i, hvem der '
    + 'vinder.</p>',
    '  <p>Vil du med i netværket, så skriv. Bemærk, at det ikke giver en '
    + 'placering: <strong>rækkefølgen i sammenligningen kan ikke købes</strong>, '
    + 'og en aftale om leads ændrer ikke, hvordan vi gengiver jeres priser. '
    + '<a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Hvad vi ikke kan hjælpe med</h2>',
    '  <p>Vi er ikke revisorer, advokater eller skatterådgivere. Vi kan fortælle, '
    + 'hvad der står i et tilbud, hvad der ikke står, og hvad du skal spørge om. '
    + 'Vi kan ikke afgøre, hvordan din virksomhed skal bogføre en leasingaftale, '
    + 'eller hvad der gælder for netop din momsregistrering.</p>',
    '  <p>Vi sælger heller ikke leasing og indgår ikke aftalen for dig. Aftalen '
    + 'er mellem dig og leasingselskabet.</p>',
    '</section>',

    '<section class="sektion">',
    '<div class="kort" style="border-color:var(--gul);border-width:2px">',
    '<h2>Skriv til os</h2>',
    '<p class="kontakt-mail"><!--email_off-->'
    + '<a href="mailto:kontakt@gulplade.dk">kontakt@gulplade.dk</a><!--email_on--></p>',
    '<p class="kilde">Skriver du om et konkret tal, så tag gerne linket til '
    + 'siden med — så går der ikke tid med at finde det.</p>',
    '</div>',
    '</section>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// Største forskel i pris pr. md. (udbetalingen fordelt) mellem to tilbud på
// samme model, rundet ned til hele hundrede. Bruges i forsidens manchet.
function prisSpredning(biler, data) {
  var maks = 0;
  biler.forEach(function (b) {
    var p = (b.tilbud || []).map(function (t) { return beregn(t, data.forudsaetninger).maanedligt; })
      .filter(function (v) { return v != null; });
    if (p.length > 1) maks = Math.max(maks, Math.max.apply(null, p) - Math.min.apply(null, p));
  });
  return Math.floor(maks / 100) * 100;
}

// ── Presse (04-10-2026) ─────────────────────────────────────────
// Til journalister: pressemeddelelser med tal, grafik og metode. Tallene i
// meddelelserne er øjebliksbilleder med dato og regnes ikke om. Grafikken
// ligger i /assets/img/presse/ og tegnes med Python (PIL), ikke ved bygning.
// Siden er i produktion fra 04-10-2026. GULPLADE_PRESSE=0 slår den fra
// (byg-dist.js).
// Ny grafik til alle fire, godkendt 04-10-2026 (GULPLADE_PRESSE_GRAFIK=0 giver den gamle).
var NY_PRESSEGRAFIK = process.env.GULPLADE_PRESSE_GRAFIK !== "0";
var PRESSEMEDDELELSER = [{
  // Opdateret 05-10-2026: elpris 1. halvår 2026 (ENERGI2, 1,33 kr./kWh) og
  // sammenligning med dieselprisen 29.09.2025 (Weekly Oil Bulletin, 10,55 kr./l).
  dato: "2026-10-05",
  titel: "Diesel er steget 44 % på et år, og nu er elvarebilen billigst i alle fire modeller",
  resume: "Diesel kostede 15,17 kr. pr. liter uden moms den 28. september 2026 og 10,55 kr. et år før. Strøm til erhverv er ikke steget. Gulplade.dk har regnet på fire varebiler, der fås med både diesel og el, og i dag sparer elbilen fra 341 til 1.827 kr. om måneden. Med sidste års priser på diesel og strøm ville VW Transporter have været billigst som diesel.",
  artikel: "/nyheder/elvarebil-eller-diesel-maanedlig-pris/",
  grafik: NY_PRESSEGRAFIK ? "/assets/img/presse/elvarebil-diesel-2026-10-05.png" : "/assets/img/presse/elvarebil-diesel-2026-10.png",
  grafikAlt: "Søjlediagram: pris pr. måned for diesel og el. Renault Kangoo 4.099 mod 3.028 kr., VW Transporter 5.534 mod 5.193 kr., Renault Master 5.905 mod 4.483 kr., Fiat Ducato 6.505 mod 4.678 kr.",
  tabel: {
    hoved: ["Pr. måned", "Diesel i dag", "El i dag", "Diesel med 2025-priser", "El med 2025-priser"],
    raekker: [
      ["Renault Kangoo", "4.099 kr.", "3.028 kr.", "3.805 kr.", "3.042 kr."],
      ["VW Transporter", "5.534 kr.", "5.193 kr.", "5.090 kr.", "5.211 kr."],
      ["Renault Master", "5.905 kr.", "4.483 kr.", "5.471 kr.", "4.503 kr."],
      ["Fiat Ducato", "6.505 kr.", "4.678 kr.", "5.980 kr.", "4.701 kr."]
    ],
    note: "Prisen pr. måned er leasingydelsen plus diesel eller strøm og grøn ejerafgift. Diesel- og elbilen er leaset hos samme forhandler eller leasingselskab i 60 måneder med 15.000 km om året. Diesel er regnet til 15,17 kr. pr. liter (28. september 2026) og strøm til 1,33 kr. pr. kWh for de 70 % af opladningen, der sker hjemme eller på firmaets adresse. Med 2025-priser er diesel 10,55 kr. og strøm 1,42 kr., mens leasing og ejerafgift er dagens. Tilbuddene er fra den 5. oktober 2026, og alle priser er uden moms."
  }
}, {
  // Regnet med ladetid.js' model: WLTP-forbrug + 15 %, 90 % af batteriet,
  // lynladning 10–80 %, 10 min. omvej pr. stop, diesel 10 min. pr. 500 km.
  dato: "2026-10-04",
  titel: "Uden egen lader går der 68 til 181 timer mere om året med at lade en elvarebil end med at tanke diesel",
  resume: "Kan elvarebilen ikke lades hjemme eller på firmaets adresse, skal al strømmen lynlades. Gulplade.dk har regnet på, hvor meget ekstra tid det tager for 23 elvarebiler ved 120 km om dagen. Regner firmaet med en timepris på 450 kr., svarer det til fra 30.500 til 81.200 kr. om året.",
  artikel: "/groen-omstilling/ladetid/",
  linktekst: "Regn jeres egen kørsel igennem i ladetidsberegneren",
  grafik: NY_PRESSEGRAFIK ? "/assets/img/presse/ladetid-uden-lader-2026-10.png" : null,
  grafikAlt: "Søjlediagram: ekstra timer om året med at lynlade frem for at tanke diesel ved 120 km om dagen. Kia PV5 Cargo 68 timer, VW ID. Buzz Cargo 77, Ford E-Transit Custom 78, VW e-Transporter 84, Renault Master E-Tech 92, Fiat E-Ducato 115, Renault Kangoo E-Tech 145 og Mercedes-Benz eSprinter 181 timer.",
  tabel: {
    hoved: ["Uden lader, 120 km om dagen", "Ekstra tid om dagen", "Timer om året", "Ved 450 kr. i timen"],
    raekker: [
      ["Kia PV5 Cargo", "19 min.", "68", "30.500 kr."],
      ["VW ID. Buzz Cargo", "21 min.", "77", "34.500 kr."],
      ["Ford E-Transit Custom", "21 min.", "78", "34.900 kr."],
      ["VW e-Transporter", "23 min.", "84", "38.000 kr."],
      ["Renault Master E-Tech", "25 min.", "92", "41.400 kr."],
      ["Fiat E-Ducato", "31 min.", "115", "51.800 kr."],
      ["Renault Kangoo E-Tech", "40 min.", "145", "65.100 kr."],
      ["Mercedes-Benz eSprinter", "49 min.", "181", "81.200 kr."]
    ],
    note: "Al strøm er lynladet fra 10 til 80 %, og hvert stop koster 10 minutters omvej. Forbruget er producentens WLTP-tal plus 15 %. Tiden til at tanke diesel er trukket fra. Kørslen er 120 km om dagen i 220 arbejdsdage. Lader medarbejderen i en pause, falder tallet. Bilernes tal er fra den 4. oktober 2026."
  }
}, {
  dato: "2026-10-04",
  titel: "18 af 23 elvarebiler klarer 200 km om dagen uden at lade undervejs",
  resume: "Har firmaet eller medarbejderen en lader, kan elvarebilen lades om natten. Alle 23 elvarebiler, Gulplade.dk har regnet på, klarer mindst 163 km om dagen på en opladning, og 18 af dem klarer 200 km. Så bruger medarbejderen kun tid på at sætte stikket i.",
  artikel: "/groen-omstilling/ladetid/",
  linktekst: "Regn jeres egen kørsel igennem i ladetidsberegneren",
  grafik: NY_PRESSEGRAFIK ? "/assets/img/presse/ladetid-med-lader-2026-10.png" : null,
  grafikAlt: "Søjlediagram: km om dagen uden ladestop med lader på adressen. Kia PV5 Cargo 295 km, Renault Master E-Tech 287, Fiat E-Ducato 266, Ford E-Transit Custom 255, VW e-Transporter 236, VW ID. Buzz Cargo 225, Renault Kangoo E-Tech 188 og Mercedes-Benz eSprinter 163 km.",
  tabel: {
    hoved: ["Med lader på adressen", "Km om dagen uden ladestop"],
    raekker: [
      ["Kia PV5 Cargo", "295 km"],
      ["Renault Master E-Tech", "287 km"],
      ["Fiat E-Ducato", "266 km"],
      ["Ford E-Transit Custom", "255 km"],
      ["VW e-Transporter", "236 km"],
      ["VW ID. Buzz Cargo", "225 km"],
      ["Renault Kangoo E-Tech", "188 km"],
      ["Mercedes-Benz eSprinter", "163 km"]
    ],
    note: "Rækkevidden er regnet med 90 % af batteriet og producentens WLTP-forbrug plus 15 % for vejr og fart. Last og trailer er ikke regnet med. For 11 af de 23 biler er det brugbare batteri anslået ud fra WLTP-rækkevidden. Bilernes tal er fra den 4. oktober 2026."
  }
}, {
  dato: "2026-10-04",
  titel: "Elvarebilen må trække mindre end dieselbilen i 12 af 15 modeller",
  resume: "Gulplade.dk har sammenlignet trækvægt og nyttelast for varebiler, der fås med både diesel og el. I de fleste modeller må elbilen trække og laste mindre. De store kassevogne fra Fiat, Peugeot, Citroën og Opel må laste 635 kg som el og fra 1.147 til 1.240 kg som diesel.",
  artikel: "/varebiler/",
  linktekst: "Trækvægt og nyttelast for hver model",
  grafik: NY_PRESSEGRAFIK ? "/assets/img/presse/traekvaegt-2026-10.png" : null,
  grafikAlt: "Søjlediagram: trækvægt for diesel og el. Ford Transit 2.750 mod 750 kg, Renault Trafic 2.500 mod 920 kg, Peugeot Expert 2.500 mod 1.000 kg, Toyota Proace 2.000 mod 1.000 kg, Ford Transit Custom og VW Transporter 2.800 mod 2.300 kg, Renault Master 2.500 kg og Mercedes-Benz Sprinter 2.000 kg for begge.",
  tabel: {
    hoved: ["Trækvægt", "Diesel", "El"],
    raekker: [
      ["Ford Transit", "2.750 kg", "750 kg"],
      ["Renault Trafic", "2.500 kg", "920 kg"],
      ["Peugeot Expert", "2.500 kg", "1.000 kg"],
      ["Toyota Proace", "2.000 kg", "1.000 kg"],
      ["Ford Transit Custom", "2.800 kg", "2.300 kg"],
      ["VW Transporter", "2.800 kg", "2.300 kg"],
      ["Renault Master", "2.500 kg", "2.500 kg"],
      ["Mercedes-Benz Sprinter", "2.000 kg", "2.000 kg"]
    ],
    note: "Trækvægten er producentens tal for en trailer med bremser. Tallene gælder den udgave af bilen, modelsiden viser, og er fra den 4. oktober 2026."
  }
}];

function presseHTML(data) {
  var alle = alleTilbud(data);
  var udb = {}; alle.forEach(function (r) { udb[r.t.udbyder] = 1; });
  var canonical = BASE_URL + "/presse/";
  var desc = beskrivelse("Pressemeddelelser, grafik og tal fra Gulplade.dk om erhvervsleasing af varebiler. " +
    "Tallene må bruges med kildeangivelsen Gulplade.dk.");
  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Presse", null]]),
    { "@type": "WebPage", "@id": canonical + "#side", url: canonical, name: "Presse — Gulplade.dk", description: desc,
      inLanguage: "da-DK", dateModified: PRESSEMEDDELELSER[0].dato,
      publisher: { "@type": "Organization", "@id": BASE_URL + "/#organisation", name: "Gulplade.dk", url: BASE_URL + "/" } }
  );
  // Korte kort, hvor tabellen og forudsætningerne er klappet sammen, og grafikken
  // kun er et link. Godkendt af brugeren 04-10-2026; GULPLADE_PRESSE_V2=0 giver
  // den gamle udgave med åbne tabeller og stor grafik.
  var v2 = process.env.GULPLADE_PRESSE_V2 !== "0";
  var meddelelser = PRESSEMEDDELELSER.map(function (p) {
    var tb = p.tabel;
    var link = '<a href="' + p.artikel + '">' + esc(p.linktekst || "Hele regnestykket og kilderne") + '</a>';
    if (v2) return [
      '<article class="sektion--kort">',
      '  <p class="kilde">' + esc(datoLang(p.dato)) + '</p>',
      '  <h3><a href="' + p.artikel + '">' + esc(p.titel) + '</a></h3>',
      '  <p>' + esc(p.resume) + '</p>',
      '  <p>' + link + (p.grafik ? ' · <a href="' + p.grafik + '" download>Hent grafikken (PNG, 1600 × 900)</a>' : '') + '</p>',
      '  <details class="kildenote"><summary>Se tabellen og forudsætningerne</summary>',
      '  <div class="sbs__rul"><table class="sbs sbs--tal"><thead><tr>' + tb.hoved.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>',
      tb.raekker.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + '</th>' + r.slice(1).map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join(''),
      '  </tbody></table></div>',
      '  <p class="kilde">' + esc(tb.note) + '</p>',
      '  </details>',
      '</article>'
    ].join("\n");
    return [
      '<article class="sektion--kort">',
      '  <p class="kilde">' + esc(datoLang(p.dato)) + '</p>',
      '  <h3><a href="' + p.artikel + '">' + esc(p.titel) + '</a></h3>',
      '  <p>' + esc(p.resume) + '</p>',
      '  <div class="sbs__rul"><table class="sbs sbs--tal"><thead><tr>' + tb.hoved.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>',
      tb.raekker.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + '</th>' + r.slice(1).map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join(''),
      '  </tbody></table></div>',
      '  <p class="kilde">' + esc(tb.note) + '</p>',
      p.grafik ? '  <figure class="presse__grafik"><a href="' + p.grafik + '" download><img src="' + p.grafik + '" alt="' + esc(p.grafikAlt) + '" width="1600" height="900" loading="lazy" decoding="async"></a>' +
        '<figcaption><a href="' + p.grafik + '" download>Hent grafikken (PNG, 1600 × 900)</a> · <a href="' + p.artikel + '">' + esc(p.linktekst || "Hele regnestykket og kilderne") + '</a></figcaption></figure>'
        : '  <p><a href="' + p.artikel + '">' + esc(p.linktekst || "Hele regnestykket og kilderne") + '</a></p>',
      '</article>'
    ].join("\n");
  }).join("\n");
  return [
    hoved(titel("Presse: tal og grafik om leasing af varebiler"), desc, canonical, schema),
    header(),
    '<main id="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Presse</li></ol></nav>',
    '<section class="hero-ny">',
    '  <h1>Presse</h1>',
    '  <p class="hero-ny__manchet">Gulplade.dk sammenligner erhvervsleasing af varebiler. Vi viser ' + alle.length + ' tilbud fra ' +
      Object.keys(udb).length + ' forhandlere og leasingselskaber, og der står kilde og dato ved hvert tilbud. Tallene og grafikken her må bruges med kildeangivelsen <strong>Gulplade.dk</strong>.</p>',
    '</section>',
    '<section class="sektion">',
    '  <h2>Pressemeddelelser</h2>',
    meddelelser,
    '</section>',
    '<section class="sektion--kort">',
    '  <h2>Sådan er tallene lavet</h2>',
    '  <p>Leasingpriserne er hentet fra udbydernes egne prislister og annoncer, og datoen står ved hvert tilbud. Det er annoncerede priser, ikke de priser, en virksomhed ender med at forhandle sig til. Udløbne tilbud fjernes, og vi omregner ikke tilbud til fælles løbetid eller kilometertal.</p>',
    '  <p>Mål, vægt, forbrug og ejerafgift er producentens eller importørens egne tal. Regler om gule plader, moms og afgift henviser vi til myndighederne for.</p>',
    '  <p>Gulplade.dk tjener penge, når forhandlere og leasingselskaber betaler for henvendelser fra virksomheder, der vil have tilbud, og på betalte tilbudstjek. Forhandlere og leasingselskaber betaler det samme honorar pr. henvendelse, og ingen kan købe en placering i sammenligningen. <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '</section>',
    '<section class="sektion">',
    '<div class="kort" style="border-color:var(--gul);border-width:2px">',
    '<h2>Kontakt</h2>',
    '<p class="kontakt-mail"><!--email_off--><a href="mailto:kontakt@gulplade.dk">kontakt@gulplade.dk</a><!--email_on--></p>',
    '<p class="kilde">Vi regner gerne andre modeller, klasser eller kilometertal igennem til en artikel. Skriv, hvad I har brug for.</p>',
    '</div>',
    '</section>',
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// ── Forbindelsen til de brugte biler ────────────────────────────
//
// 15 af de 28 modeller findes ogsaa brugt hos Brdr. Jensen. Modelsiden
// linkede kun til brugtsektionen gennem menuen og bunden, og det er en
// oplagt forbindelse at give laeseren: har man lige set, at en ny koster
// 3.525 kr./md., er det relevant, at den samme model findes brugt.
//
// Stien vaelges efter hvilke mapper generatoren FAKTISK skrev — model,
// ellers maerke, ellers oversigten. Saa kan de to generatorer ikke komme
// fra hinanden, uanset hvor graenserne for en egen side ligger.

var BRUGTE = null;
function brugteEfterModel() {
  if (BRUGTE) return BRUGTE;
  BRUGTE = {};
  try {
    var d = JSON.parse(fs.readFileSync(path.join(__dirname, "brugte.json"), "utf8"));
    var rod = path.join(__dirname, "brugte-varebiler");
    var findes = function (p) { return fs.existsSync(path.join(rod, p)); };
    d.biler.forEach(function (b) {
      var k = (b.maerke + " " + b.model).toLowerCase();
      var m = BRUGTE[k] || (BRUGTE[k] = { antal: 0, fra: null, maerke: b.maerke, model: b.model });
      m.antal++;
      if (!b._pris_tvivl && b.pris_ekskl_moms_kr != null &&
          (m.fra == null || b.pris_ekskl_moms_kr < m.fra)) m.fra = b.pris_ekskl_moms_kr;
    });
    Object.keys(BRUGTE).forEach(function (k) {
      var m = BRUGTE[k];
      var ms = slug(m.maerke), mo = slug(m.model);
      m.sti = findes(ms + "/" + mo) ? "/brugte-varebiler/" + ms + "/" + mo + "/"
            : findes(ms) ? "/brugte-varebiler/" + ms + "/"
            : "/brugte-varebiler/";
    });
  } catch (e) {
    console.log("Bem\u00e6rk: brugte.json blev ikke l\u00e6st (" + e.message +
                ") \u2014 modelsiderne linker ikke til brugte biler.");
  }
  return BRUGTE;
}

// Én linje i forsidens top til købsdelen (06-10-2026, kun med GULPLADE_KOEB_NY=1). Tre kort med
// lease, køb ny og køb brugt blev prøvet samme dag, men brugeren syntes, de "ser dumt ud", og menuen
// har allerede de tre punkter. Linjen giver Google links med de ord, folk søger på.
function koebLinjeHTML(data) {
  if (!KOEB_NY) return '';
  var dele = [];
  try {
    var f = koeb().fakta(data);
    if (f.antal) dele.push('<a href="' + koeb().STI + '">kontantpriser på ' + f.antal + ' nye varebiler</a>');
  } catch (e) {}
  try {
    var bb = JSON.parse(fs.readFileSync(path.join(__dirname, "brugte.json"), "utf8")).biler;
    var pr = bb.map(function (x) { return x.pris_ekskl_moms_kr; }).filter(function (v) { return v != null; });
    if (bb.length) dele.push('<a href="/brugte-varebiler/">' + talDK(bb.length) + ' brugte varebiler' + (pr.length ? ' fra ' + talDK(Math.min.apply(null, pr)) + ' kr.' : '') + '</a>');
  } catch (e) {}
  if (!dele.length) return '';
  return '  <p class="hero-ny__koeb">Vil du hellere købe? Se ' + dele.join(' eller ') + '</p>';
}

// Forsidens indgang til de brugte biler. Forsiden er sidens staerkeste side,
// og brugtsektionen var kun linket fra menuen og en bisaetning. Antallet
// laeses af brugte.json; listerne kun hvis generatoren faktisk skrev dem.
function brugtForsideHTML() {
  var antal;
  try {
    antal = JSON.parse(fs.readFileSync(path.join(__dirname, "brugte.json"), "utf8")).biler.length;
  } catch (e) { return ''; }
  var lister = [
    ["brugt-kassevogn", "Brugt kassevogn"],
    ["brugt-ladvogn", "Brugt ladvogn"],
    ["billige-brugte-varebiler", "Billige brugte varebiler"],
    ["nyere-brugte-varebiler", "Nyere brugte varebiler"],
    ["brugt-varebil-med-automatgear", "Med automatgear"],
    ["brugt-elvarebil", "Brugt elvarebil"]
  ].filter(function (l) {
    return fs.existsSync(path.join(__dirname, "brugte-varebiler", l[0], "index.html"));
  });
  return [
    '<section class="sektion--kort" id="brugte">',
    '  <h2>Brugte varebiler til salg</h2>',
    '  <p class="sektion__manchet">Vil du hellere eje? Vi har ' + antal +
      ' brugte varebiler på lager, alle med pris, kilometertal og årgang. ' +
      'Tryk „Hør nærmere“ på en bil, så tjekker vi den for dig.</p>',
    '  <p class="maerkelinks">' + lister.map(function (l) {
      return '<a href="/brugte-varebiler/' + l[0] + '/">' + l[1] + '</a>';
    }).join("") + '</p>',
    '  <p style="margin-top:1.25rem"><a href="/brugte-varebiler/">Se alle ' + antal +
      ' brugte varebiler</a></p>',
    '</section>'
  ].join("\n");
}

function brugtBlokHTML(bil) {
  var m = brugteEfterModel()[(bil.maerke + " " + bil.model).toLowerCase()];
  if (!m || !m.antal) return "";
  var navn = esc(bil.maerke + " " + bil.model);
  return [
    '<section class="sektion--kort">',
    '  <h2>Den findes ogs\u00e5 brugt</h2>',
    '  <p class="sektion__manchet">' +
      (m.antal === 1
        ? 'Der st\u00e5r <strong>\u00e9n brugt ' + navn + '</strong> p\u00e5 lageret'
        : 'Der st\u00e5r <strong>' + m.antal + ' brugte ' + navn + '</strong> p\u00e5 lageret') +
      (m.fra != null ? ', fra ' + talDK(m.fra) + ' kr. ekskl. moms' : '') +
      '. En brugt bil har ingen f\u00f8rstegangsydelse og ingen bindingsperiode, men du ' +
      'st\u00e5r selv med v\u00e6rditabet.</p>',
    '  <p class="maerkelinks"><a href="' + m.sti + '">Se de brugte ' + navn + '</a>' +
      '<a href="/brugte-varebiler/">Alle brugte varebiler</a></p>',
    '  <p class="kilde">Bilerne sælges af en forhandler, vi samarbejder med, og vi kan få betaling for at formidle kontakten. ' +
      '<a href="/saadan-tjener-vi-penge/">S\u00e5dan tjener vi penge</a>.</p>',
    '</section>'
  ].join("\n");
}
// ── /tilbudstjek/tak/ — efter et tilbudstjek ────────────────────────────────
//
// Tally sender hertil, naar tilbuddet er indsendt. Spoergsmaalet om konkurrerende
// tilbud stilles i selve formularen (frivilligt kryds med oplyst betaling), saa
// takkesiden spoerger ikke igen.
function tjekTakHTML() {
  var canonical = BASE_URL + "/tilbudstjek/tak/";
  return [
    hoved(titel("Tak — vi har fået dit tilbud"), "Vi har modtaget dit tilbud og sender rapporten på mail.", canonical, null, null,
      ['<meta name="robots" content="noindex">']),
    header(),
    '<main id="indhold">',
    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Tilbudstjek</p>',
    '  <h1>Tak — vi har fået dit tilbud</h1>',
    '  <p class="hero-ny__manchet">Vi gennemgår det og sender rapporten på mail. Får vi brug for flere oplysninger, skriver eller ringer vi.' +
    ' Har du bedt om konkurrerende tilbud, går vi også i gang med dem.</p>',
    '  <p><a class="knap knap--sekundaer" href="/">Til forsiden</a></p>',
    '</section>',
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

function faaTilbudHTML(data) {
  var alle = alleTilbud(data);
  var antal = alle.length;
  var medNypris = data.varebiler.filter(function (b) { return b.nypris; }).length;

  var canonical = BASE_URL + "/faa-tilbud/";
  var desc = beskrivelse("Få hjælp til at finde og lease din næste varebil. Vi indhenter tilbud fra forhandlere og " +
    "leasingselskaber og gennemgår pris og vilkår med dig. Gratis for dig.");

  // Kun det, der er bekraeftet (01-10-2026). Antal udbydere, svartid og om der
  // kun hentes hos samarbejdspartnere er IKKE bekraeftet og skrives ikke.
  var faq = [
    ["Hvad koster det?",
     "Intet for dig. Den forhandler eller det leasingselskab, vi sender henvendelsen til, betaler os et fast honorar — " +
     "samme beløb fra alle. Honoraret udløses af henvendelsen, ikke af en underskrift, og du forpligter dig ikke til noget."],
    ["Hvem henter I tilbud fra?",
     "Alle relevante forhandlere og leasingselskaber — ikke kun nogle bestemte. De får samme grundlag — bil, " +
     "løbetid og kilometertal — så tilbuddene kan sammenlignes."],
    ["Hvor mange tilbud får jeg?",
     "Normalt tre. Der er næsten altid mere end én udbyder, der kan levere den bil, du skal bruge."],
    ["Hvad får jeg?",
     "En skriftlig sammenligning af tilbuddene: ydelse, udbetaling, løbetid, kilometer, hvad ydelsen dækker, " +
     "og hvad der stadig er uafklaret."],
    ["Hvem får mine oplysninger?",
     "Gulplade.dk, og de forhandlere eller leasingselskaber, vi beder om tilbud på dine vegne. Ingen andre. " +
     "Se privatlivspolitikken."],
    ["Hvem kontakter mig?",
     "Gulplade.dk. Vi svarer inden for 24 timer på mail eller telefon."],
    ["Hvordan undgår I at pege mig mod én udbyder?",
     "Honoraret er det samme fra alle, så vi tjener ikke mere på én udbyder end på en anden. Vi holder tilbuddene op " +
     "mod " + antal + " annoncerede tilbud og vejledende nypriser på " + medNypris + " modeller."],
    ["Hvad er forskellen på at få tilbud og et tilbudstjek?",
     "Når vi henter tilbud, finder vi bilen, indhenter tilbuddene og gennemgår dem med dig — gratis for dig, fordi udbyderen " +
     "betaler os for henvendelsen. Et tilbudstjek er en skriftlig gennemgang af et tilbud, du allerede har fået. Det koster " +
     "695 kr. ekskl. moms, og ingen udbyder betaler os noget."]
  ];
  var schema = samlSchema(
    krummeSchema([["Forsiden", "/"], ["Få tilbud", null]]),
    {
      "@type": "Service",
      name: "Hjælp til at finde og lease en varebil",
      description: desc,
      areaServed: "DK",
      provider: { "@type": "Organization", name: "Gulplade.dk", url: BASE_URL + "/" },
      url: canonical
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(function (x) {
        return { "@type": "Question", name: x[0], acceptedAnswer: { "@type": "Answer", text: x[1] } };
      })
    }
  );

  // Knapperne aabner popup-formularen (assets/samtykke.js); uden JavaScript falder de tilbage til mail.
  var mailRef = "mailto:kontakt@gulplade.dk?subject=" + encodeURIComponent("Jeg vil gerne have hjælp til en varebil");
  var handling = '<div class="ft-handling">' +
    '<a class="knap knap--primaer" data-lead="ny" href="' + mailRef + '">Find min næste varebil</a>' +
    '<a class="knap knap--sekundaer" data-lead="ring" href="' + mailRef + '">Bliv ringet op</a></div>';

  var trin = [
    ["Vi afklarer dit behov", "Biltype, kørsel, budget og hvilken leasingform der passer — du behøver ikke kende modellen."],
    ["Vi finder biler og indhenter tilbud", "Hos forhandlere og leasingselskaber, på samme grundlag, så tilbuddene kan sammenlignes."],
    ["Du får en skriftlig sammenligning", "Pris, hvad ydelsen dækker, risici og de oplysninger, der mangler — og vi gennemgår den med dig."],
    ["Du vælger", "Du skriver under, når du er klar. Vi holder kontakten med udbyderen, til bilen er leveret."]
  ];

  return [
    hoved(titel("Få hjælp til at finde og lease din næste varebil"), desc, canonical, schema),
    header(),
    '<main id="indhold" class="ft">',

    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>'
    + '<li aria-current="page">Få tilbud</li></ol></nav>',

    // To faner, én menuknap: hente tilbud (udbyderen betaler) og tjekke et
    // tilbud (ingen udbyder betaler). Hvem der betaler, staar under hver fane.
    '<nav class="forloeb" aria-label="Hvad skal du have hjælp til?"><a class="forloeb__fane forloeb__fane--aktiv" href="/faa-tilbud/" aria-current="page"><strong>Find tilbud til mig</strong><span>Gratis for dig · udbyderen betaler os</span></a><a class="forloeb__fane" href="/tilbudstjek/"><strong>Tjek et tilbud, jeg har fået</strong><span>Uvildigt · ingen udbyder betaler os</span></a></nav>',

    '<section class="ft-helt">',
    '<div class="ft-helt__tekst">',
    '  <h1>Få hjælp til at finde og lease din næste varebil</h1>',
    '  <p class="ft-helt__manchet">Fortæl os, hvad bilen skal kunne. Vi finder relevante varebiler, indhenter tilbud og '
    + 'gennemgår pris og vilkår med dig — så du har et klart grundlag for at vælge.</p>',
    handling,
    '  <p class="ft-svartid">Vi svarer inden for 24 timer.</p>',
    '  <p class="ft-honorar"><strong>Gratis for dig:</strong> den forhandler eller det leasingselskab, vi sender henvendelsen til, '
    + 'betaler os et fast honorar — samme beløb fra alle. <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a></p>',
    '</div>',
    // Bilvalget sendes med i formularen som bil-feltet.
    '<aside class="ft-kort" aria-label="Kom i gang">',
    '  <h2>Hvilken varebil skal du bruge?</h2>',
    '  <div class="ft-kort__valg">',
    [["Lille varebil", "Caddy, Berlingo, Kangoo"], ["Mellemstor kassevogn", "Trafic, Transit Custom, Vito"],
     ["Stor kassevogn", "Sprinter, Crafter, Master"], ["Elvarebil", "Alle størrelser"],
     ["Pickup eller ladvogn", "Ranger, Amarok, chassis"], ["Ved ikke endnu", "Vi hjælper dig med at vælge"]]
      .map(function (v) {
        return '    <a class="ft-valg" data-lead="ny" data-bil="' + esc(v[0]) + '" href="' + mailRef + '"><strong>' + esc(v[0]) + '</strong><span>' + esc(v[1]) + '</span></a>';
      }).join("\n"),
    '  </div>',
    '  <p class="ft-kort__fod">Vi finder en bil med plads, nyttelast og trækvægt til dit arbejde.</p>',
    '</aside>',
    '</section>',

    '<section class="sektion">',
    '  <h2>Sådan foregår det</h2>',
    '  <ol class="ft-trin ft-trin--fire">',
    trin.map(function (t, i) {
      return '    <li><span class="ft-trin__nr">' + (i + 1) + '</span><h3>' + esc(t[0]) + '</h3><p>' + esc(t[1]) + '</p></li>';
    }).join("\n"),
    '  </ol>',
    '</section>',

    // Fiktivt eksempel med tre tilbud - det normale antal (ejeren, 01-10-2026).
    // Sammenligningen leveres skriftligt.
    '<section class="sektion">',
    '  <h2>Du får en skriftlig sammenligning</h2>',
    '  <p class="sektion__manchet">Normalt indhenter vi tre tilbud. Sådan ser sammenligningen ud:</p>',
    '  <p class="tjek-eks__maerke">Eksempel · tilbuddene er fiktive</p>',
    '  <div class="tilbud-tabel-wrap">',
    '  <table class="tilbud-tabel ft-eks" style="min-width:680px">',
    '    <thead><tr><th></th><th>Tilbud A</th><th>Tilbud B</th><th>Tilbud C</th></tr></thead>',
    '    <tbody>',
    // Tre operationelle tilbud paa samme bil, loebetid og km. Summen er
    // foerstegangsydelse + 48 ydelser + oplyste gebyrer; uafklarede poster er ikke med.
    '      <tr><td>Leasingform</td><td>Operationel</td><td>Operationel</td><td>Operationel</td></tr>',
    '      <tr><td>Løbetid · kilometer pr. år</td><td>48 mdr. · 20.000</td><td>48 mdr. · 20.000</td><td>48 mdr. · 20.000</td></tr>',
    '      <tr><td>Førstegangsydelse</td><td>0 kr.</td><td>25.000 kr.</td><td>50.000 kr.</td></tr>',
    '      <tr><td>Månedlig ydelse</td><td>3.595 kr.</td><td>3.045 kr.</td><td>2.495 kr.</td></tr>',
    '      <tr><td>Etableringsgebyr</td><td>2.500 kr.</td><td>0 kr.</td><td>3.000 kr.</td></tr>',
    '      <tr><td>Afleveringsgebyr</td><td>Ikke oplyst</td><td>1.995 kr.</td><td>0 kr.</td></tr>',
    '      <tr><td>Pris pr. overkørt km</td><td>0,95 kr.</td><td>1,20 kr.</td><td>Ikke oplyst</td></tr>',
    '      <tr><td>Godtgørelse pr. underkørt km</td><td>0,50 kr.</td><td>Ingen</td><td>0,40 kr.</td></tr>',
    '      <tr><td>Inkluderet i ydelsen</td><td>Service, reparation og dæk</td><td>Service, reparation og dæk</td><td>Service, reparation og dæk</td></tr>',
    '      <tr class="ft-eks__sum"><td>Samlet oplyst betaling</td><td>175.060 kr.</td><td>173.155 kr.</td><td>172.760 kr.</td></tr>',
    '      <tr class="ft-eks__sum2"><td>Pr. måned i gennemsnit</td><td>3.647 kr.</td><td>3.607 kr.</td><td>3.599 kr.</td></tr>',
    '      <tr><td>Forsikring (tilvalg)</td><td>695 kr./md.</td><td>745 kr./md.</td><td>650 kr./md.</td></tr>',
    '      <tr class="ft-eks__sum"><td>Samlet med forsikring</td><td>208.420 kr.</td><td>208.915 kr.</td><td>203.960 kr.</td></tr>',
    '      <tr class="ft-eks__sum2"><td>Pr. måned i gennemsnit</td><td>4.342 kr.</td><td>4.352 kr.</td><td>4.249 kr.</td></tr>',
    '      <tr class="ft-eks__aaben"><td>Uafklaret</td><td>Afleveringsgebyr</td><td>Selvrisiko på forsikringen</td><td>Pris pr. overkørt km</td></tr>',
    '    </tbody>',
    '  </table>',
    '  </div>',
    '  <p class="kilde">Alle beløb ekskl. moms. Samlet oplyst betaling er førstegangsydelse, 48 ydelser og de oplyste gebyrer. '
    + 'Forsikring er et tilvalg og står derfor i sin egen sum. Det, tilbuddene ikke oplyser, står som uafklaret og er ikke regnet med.</p>',
    '</section>',

    '<section class="sektion faq">',
    '  <h2>Spørgsmål og svar</h2>',
    faq.map(function (q) { return '  <details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join("\n"),
    '</section>',

    '<section class="ft-baand ft-baand--slut">',
    '  <div><h2>Klar til din næste varebil?</h2><p>Gratis for dig, og vi svarer inden for 24 timer.</p></div>',
    handling,
    '</section>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// Knappen til formularen. Id'et staar i varebiler.json under
// forudsaetninger.leadformular, saa det kan skiftes uden at roere koden. Er det
// tomt, bliver knappen en mailto - saa der aldrig staar en knap paa siden,
// der ikke virker.
var LEAD_FORM = "";
function tilbudsknapHTML(bil, tekst, type) {
  var m = tekst || "Få tilbud";
  if (LEAD_FORM) {
    // data-lead åbner popup-formularen (assets/samtykke.js); Tally er fallback uden JavaScript.
    // type "koeb" (05-10-2026) er en henvendelse om køb af en ny bil, "ny" om leasing.
    return '<a class="knap knap--primaer" data-lead="' + (type || "ny") + '"' + (bil ? ' data-bil="' + esc(bil) + '"' : '') +
      ' href="https://tally.so/r/' + esc(LEAD_FORM) +
      (bil ? '?bil=' + encodeURIComponent(bil) : '') + '">' + esc(m) + '</a>';
  }
  return '<a class="knap knap--primaer" href="mailto:kontakt@gulplade.dk' +
    '?subject=' + encodeURIComponent('Jeg vil gerne have tilbud hjem' +
      (bil ? ' — ' + bil : '')) +
    '&body=' + encodeURIComponent('Skriv kort, hvad bilen skal bruges til: hvad skal ' +
      'der transporteres, hvor mange kilometer om året, og skal bilen med hjem?\n\n') +
    '">' + esc(m) + '</a>';
}

// Siderne under /til-varebilen/ laeses af tilvalg.json, saa listen ikke skal
// holdes to steder. Mangler filen, faar sitemappet bare oversigten - det er
// bedre end at braekke hele bygningen over en sektion, der kan vaere fravalgt.
function tilvalgSitemap() {
  try {
    var t = JSON.parse(fs.readFileSync(path.join(__dirname, "tilvalg.json"), "utf8"));
    // Nye emner og undersider ("ny": true) kun i preview-bygninger, som i generate-tilvalg.js.
    var aktiv = function (x) { return !x.ny || process.env.GULPLADE_TILVALG_NY === "1"; };
    return t.emner.filter(aktiv).map(function (e) {
      return ["  <url><loc>" + BASE_URL + "/til-varebilen/" + e.slug +
        "/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>"].concat(
        (e.undersider || []).filter(aktiv).map(function (u) {
          return "  <url><loc>" + BASE_URL + "/til-varebilen/" + e.slug + "/" + u.slug +
            "/</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>";
        })).join("\n");
    }).join("\n") + "\n" + require("./indretning-sider.js").stier().map(function (st) {
      return "  <url><loc>" + BASE_URL + st + "</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>";
    }).join("\n");
  } catch (e) {
    console.log("Bemærk: tilvalg.json blev ikke læst (" + e.message +
                ") — /til-varebilen/-siderne kom ikke i sitemappet.");
    return "";
  }
}
// Nyeste dato i en models data: tilbud, mål, nypris og feltkilder. Det er den
// dag, siden sidst fik nyt indhold - ikke den dag, den sidst blev bygget.
function modelDato(b) {
  var d = [(b.maal_kilde || {}).dato, (b.nypris || {}).kilde_dato];
  (b.tilbud || []).forEach(function (t) { d.push(t.kilde_dato); });
  Object.keys(b.feltkilder || {}).forEach(function (k) { d.push(b.feltkilder[k].dato); });
  return d.filter(function (x) { return /^\d{4}-\d{2}-\d{2}$/.test(x || ""); }).sort().pop() || null;
}
function genererSitemap(data) {
  var alleDatoer = data.varebiler.concat(data._udenTilbud || []).map(modelDato).filter(Boolean).sort();
  var dataDato = alleDatoer[alleDatoer.length - 1];
  var lmData = dataDato ? '<lastmod>' + dataDato + '</lastmod>' : '';
  var lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <url><loc>' + BASE_URL + '/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>1.0</priority></url>',
    '  <url><loc>' + BASE_URL + '/faa-tilbud/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>',
    '  <url><loc>' + BASE_URL + '/tilbudstjek/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>',
    '  <url><loc>' + BASE_URL + '/varebiler/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>0.8</priority></url>',
    '  <url><loc>' + BASE_URL + '/bedste-tilbud/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>0.9</priority></url>',
    FORSIDE_NY ? '  <url><loc>' + BASE_URL + '/alle-tilbud/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>0.8</priority></url>' : null,
    KOEB_NY ? '  <url><loc>' + BASE_URL + '/koeb-ny-varebil/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>0.9</priority></url>' : null,
    KOEB_NY ? (data.varebiler || []).concat(data._udenTilbud || []).filter(function (b) { return koeb().harPriser(b.id); }).map(function (b) {
      return '  <url><loc>' + BASE_URL + koeb().bilSti(b) + '</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>';
    }).join("\n") : null,
    '  <url><loc>' + BASE_URL + '/leasingberegner/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>',
    '  <url><loc>' + BASE_URL + '/groen-omstilling/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>',
    '  <url><loc>' + BASE_URL + '/groen-omstilling/ladetid/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>',
    '  <url><loc>' + BASE_URL + '/udbydere/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>0.7</priority></url>',
    '  <url><loc>' + BASE_URL + '/brugte-varebiler/</loc><changefreq>daily</changefreq><priority>0.8</priority></url>',
    '  <url><loc>' + BASE_URL + '/nyheder/</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>',
    '  <url><loc>' + BASE_URL + '/haandbogen/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>',
    '  <url><loc>' + BASE_URL + '/til-varebilen/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>',
    tilvalgSitemap(),
    '  <url><loc>' + BASE_URL + '/personbiler/</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>',
    '  <url><loc>' + BASE_URL + '/kontakt/</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>',
    '  <url><loc>' + BASE_URL + '/presse/</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>',
    '  <url><loc>' + BASE_URL + '/privatliv/</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>',
    '  <url><loc>' + BASE_URL + '/saadan-tjener-vi-penge/</loc><changefreq>yearly</changefreq><priority>0.4</priority></url>'
  ];

  // Guidesider
  GUIDER.forEach(function (g) {
    if (!guideRaekker(g, alleTilbud(data)).length) return;
    lines.push('  <url><loc>' + BASE_URL + '/bedste-tilbud/' + g.slug +
               '/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>0.8</priority></url>');
  });

  lines.push("  <url><loc>" + BASE_URL + aaretsSti(data) + "</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>");

  // Maerkesider
  data.varebiler.map(function (b) { return b.maerke; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; })
    .forEach(function (m) {
      lines.push('  <url><loc>' + BASE_URL + '/varebiler/' + slug(m) +
                 '/</loc>' + lmData + '<changefreq>weekly</changefreq><priority>0.7</priority></url>');
    });

  lines.push('  <url><loc>' + BASE_URL + '/sammenlign/</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>');
  sammenlignPar(data).forEach(function (sp) {
    var dp = [modelDato(sp.a), modelDato(sp.b)].filter(Boolean).sort().pop();
    lines.push('  <url><loc>' + BASE_URL + '/sammenlign/' + sp.slug + '/</loc>' + (dp ? '<lastmod>' + dp + '</lastmod>' : '') + '<changefreq>weekly</changefreq><priority>0.6</priority></url>');
  });
  if (ELBIL && Object.keys(ELBIL.modeller).length) {
    lines.push('  <url><loc>' + BASE_URL + '/elvarebiler/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>');
  }
  if (GARANTI && Object.keys(GARANTI.modeller).length) {
    lines.push('  <url><loc>' + BASE_URL + '/garanti/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>');
  }
  if (UDSTYR) {
    lines.push('  <url><loc>' + BASE_URL + '/udstyr/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>');
    UDSTYR.poster.forEach(function (p) {
      lines.push('  <url><loc>' + BASE_URL + '/udstyr/' + slug(p.navn) + '/</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>');
    });
  }

  // Udbydersider
  udbyderData(data).forEach(function (u) {
    var du = u.rader.map(function (r) { return r.t.kilde_dato; }).filter(Boolean).sort().pop();
    lines.push('  <url><loc>' + BASE_URL + u.sti + '</loc>' + (du ? '<lastmod>' + du + '</lastmod>' : '') + '<changefreq>weekly</changefreq><priority>0.6</priority></url>');
  });
  data.varebiler.concat(data._udenTilbud || []).forEach(function (b) {
    var dm = modelDato(b);
    lines.push('  <url><loc>' + BASE_URL + '/varebiler/' + slug(b.maerke) + '/' + slug(b.model) +
               '/</loc>' + (dm ? '<lastmod>' + dm + '</lastmod>' : '') + '<changefreq>weekly</changefreq><priority>0.7</priority></url>');
  });
  // Brugte biler. Laeses direkte fra brugte.json, saa sitemappet er komplet
  // uanset hvilken raekkefoelge de to generatorer er koert i. Findes filen
  // ikke, springes afsnittet over i stedet for at braekke bygningen.
  try {
    var brugte = JSON.parse(fs.readFileSync(path.join(__dirname, "brugte.json"), "utf8"));
    // Lageret skifter dagligt; lastmod fortaeller Google, hvornaar det sidst
    // er hentet, saa nye biler bliver crawlet hurtigere.
    var lm = /^\d{4}-\d{2}-\d{2}$/.test(brugte.sidst_opdateret || "")
      ? '<lastmod>' + brugte.sidst_opdateret + '</lastmod>' : '';
    lines = lines.map(function (l) {
      return l.replace('/brugte-varebiler/</loc>', '/brugte-varebiler/</loc>' + lm);
    });
    brugte.biler.forEach(function (b) {
      lines.push('  <url><loc>' + BASE_URL + '/brugte-varebiler/' + b.slug +
                 '/</loc>' + lm + '<changefreq>daily</changefreq><priority>0.5</priority></url>');
    });

    // Maerke- og modelsiderne. De laeses af mapperne, generatoren faktisk
    // skrev, i stedet for at gentage reglen om hvilke maerker der faar en
    // side - saa kan sitemappet og siderne ikke komme fra hinanden.
    var bilSlugs = {};
    brugte.biler.forEach(function (b) { bilSlugs[b.slug] = true; });
    var rod = path.join(__dirname, "brugte-varebiler");
    if (fs.existsSync(rod)) {
      fs.readdirSync(rod, { withFileTypes: true }).forEach(function (d) {
        if (!d.isDirectory() || bilSlugs[d.name]) return;
        lines.push('  <url><loc>' + BASE_URL + '/brugte-varebiler/' + d.name +
                   '/</loc>' + lm + '<changefreq>daily</changefreq><priority>0.7</priority></url>');
        var u = path.join(rod, d.name);
        fs.readdirSync(u, { withFileTypes: true }).forEach(function (m) {
          if (!m.isDirectory()) return;
          lines.push('  <url><loc>' + BASE_URL + '/brugte-varebiler/' + d.name + '/' + m.name +
                     '/</loc>' + lm + '<changefreq>daily</changefreq><priority>0.7</priority></url>');
        });
      });
    }
  } catch (e) {
    console.log("Bemærk: brugte.json blev ikke læst (" + e.message +
                ") — de brugte biler kom ikke i sitemappet.");
  }

  // Vidensartiklerne.
  try {
    var viden = JSON.parse(fs.readFileSync(path.join(__dirname, "viden.json"), "utf8"));
    viden.artikler.forEach(function (a) {
      lines.push('  <url><loc>' + BASE_URL + videnSti(a) + '</loc>' +
                 (/^\d{4}-\d{2}-\d{2}$/.test(a.opdateret || "") ? '<lastmod>' + a.opdateret + '</lastmod>' : '') +
                 '<changefreq>monthly</changefreq><priority>0.7</priority></url>');
    });
  } catch (e) {
    console.log("Bemærk: viden.json blev ikke læst (" + e.message +
                ") — artiklerne kom ikke i sitemappet.");
  }

  lines.push('</urlset>');
  return lines.join("\n");
}

// Cloudflare Pages uploader hele mappen, så kildefilerne ligger åbent ved
// siden af siderne. Der står ingen nøgler i dem, men de skal ikke indekseres.
// Skal de væk helt, skal outputtet bygges i en undermappe og den deployes.
var IKKE_INDEKSER = [
  "/generate-pages.js", "/generate-brugte.js", "/generate-viden.js",
  "/varebiler.json", "/brugte.json", "/viden.json",
  "/README.md", "/DEPLOY.md", "/deploy-gulplade.bat", "/indexnow.js"
];

// Øjebliksbillede af de aktuelle tilbud til prisindekset (04-10-2026). Udløbne
// tilbud forsvinder fra varebiler.json ved næste bygning, så uden de her filer
// er der ingen historik at måle udviklingen på. Én fil pr. dag i prishistorik/;
// samme dag overskrives. Mappen kommer ikke med i dist (se byg-dist.js).
// Rå felter gemmes, så tallene kan regnes om, hvis metoden ændres senere.
function gemPrisbillede(biler, data, dato) {
  var f = data.forudsaetninger;
  var tilbud = [];
  biler.forEach(function (b) {
    b.tilbud.forEach(function (t) {
      tilbud.push({
        bil: b.id, maerke: b.maerke, model: b.model, karrosseri: b.karrosseri,
        drivmiddel: b.drivmiddel, klasse: stoerrelse(b) || null,
        totalvaegt_kg: b.totalvaegt_kg != null ? b.totalvaegt_kg : null,
        udbyder: t.udbyder, variant: t.variant || null,
        maanedspris: t.maanedspris, foerstegangsydelse: t.foerstegangsydelse,
        loebetid_mdr: t.loebetid_mdr, km_pr_aar: t.km_pr_aar || null, km_fri: !!t.km_fri,
        leasingtype: t.leasingtype || null, restvaerdi: t.restvaerdi != null ? t.restvaerdi : null,
        inkluderet: t.inkluderet || [], ikke_inkluderet: t.ikke_inkluderet || [],
        maanedligt_inkl_udbetaling: (function (m) { return m != null ? Math.round(m) : null; })(beregn(t, f).maanedligt),
        kilde_dato: t.kilde_dato, gyldig_til: t.gyldig_til || null
      });
    });
  });
  var dir = path.join(__dirname, "prishistorik");
  mkdir(dir);
  fs.writeFileSync(path.join(dir, dato + ".json"), JSON.stringify({
    dato: dato, data_opdateret: data.sidst_opdateret || null,
    antal_tilbud: tilbud.length, antal_modeller: biler.length, tilbud: tilbud
  }, null, 1), "utf8");
  console.log("OK: prishistorik/" + dato + ".json (" + tilbud.length + " tilbud)");
}

// llms.txt (llmstxt.org): et kort kort over sitet til sprogmodeller og
// AI-soegning. Tallene regnes ud ved hver bygning ligesom sitemappet, saa
// filen aldrig staar med en pris, der er udloebet.
function genererLlms(data) {
  var biler = data.varebiler.filter(function (b) { return b.tilbud && b.tilbud.length; });
  var antalTilbud = 0, udbydere = {};
  biler.forEach(function (b) { b.tilbud.forEach(function (t) { antalTilbud++; udbydere[t.udbyder] = 1; }); });
  var dato = data.varebiler.concat(data._udenTilbud || []).map(modelDato).filter(Boolean).sort().pop();
  var fra = function (b) {
    return b.tilbud.reduce(function (m, t) { return t.maanedspris != null && (m == null || t.maanedspris < m) ? t.maanedspris : m; }, null);
  };
  var l = [
    "# Gulplade.dk",
    "",
    "> Uafhængig dansk sammenligning af erhvervsleasing af varebiler på gule plader. " +
      antalTilbud + " aktuelle tilbud på " + biler.length + " modeller fra " + Object.keys(udbydere).length +
      " udbydere" + (dato ? ", senest opdateret " + dato : "") + ". Alle priser er ekskl. moms og hentet fra udbydernes egne prislister med kilde og dato ved hvert tilbud.",
    "",
    "Gulplade.dk skriver til virksomheder, håndværkere og flådeansvarlige. Udløbne tilbud fjernes, og priser omregnes ikke til fælles løbetid eller kilometertal. " +
      "Mål, vægt og nyttelast er hentet fra producenternes egne specifikationer. Regler om moms, afgift og gule plader henviser til Motorstyrelsen, Skattestyrelsen og Færdselsstyrelsen. " +
      "Forhandlere og leasingselskaber betaler et honorar pr. henvendelse; det påvirker ikke rækkefølgen (" + BASE_URL + "/saadan-tjener-vi-penge/).",
    "",
    "## Sammenlign",
    "",
    "- [Alle varebiler og tilbud](" + BASE_URL + "/varebiler/): oversigt over modeller med billigste leasingpris",
    "- [Bedste tilbud](" + BASE_URL + "/bedste-tilbud/): guider som billigste varebil, bedste elvarebil, lille, mellemstor og stor varebil",
    "- [Elvarebiler](" + BASE_URL + "/elvarebiler/): rækkevidde, batteri og opladning",
    "- [Sammenlign to varebiler](" + BASE_URL + "/sammenlign/): mål, pris og udstyr side om side",
    "- [Garanti](" + BASE_URL + "/garanti/) og [Udstyr](" + BASE_URL + "/udstyr/): på tværs af mærker",
    "- [Udbydere](" + BASE_URL + "/udbydere/): leasingselskaber og forhandlere",
    "- [Leasingberegner](" + BASE_URL + "/leasingberegner/)",
    "- [Brugte varebiler](" + BASE_URL + "/brugte-varebiler/)",
    "- [Grøn omstilling](" + BASE_URL + "/groen-omstilling/): el eller diesel regnet igennem",
    "",
    "## Modeller med aktuelle tilbud",
    ""
  ];
  biler.slice().sort(function (a, b) { return (a.maerke + a.model).localeCompare(b.maerke + b.model, "da"); })
    .forEach(function (b) {
      var p = fra(b);
      l.push("- [" + b.maerke + " " + b.model + "](" + BASE_URL + modelSti(b) + "): " + b.tilbud.length +
        (b.tilbud.length === 1 ? " tilbud" : " tilbud") + (p != null ? ", fra " + talDK(p) + " kr./md. ekskl. moms" : ""));
    });
  try {
    var viden = JSON.parse(fs.readFileSync(path.join(__dirname, "viden.json"), "utf8"));
    var guider = viden.artikler.filter(function (a) { return a.sektion !== "nyheder"; });
    l.push("", "## Gulplade Håndbogen: regler og råd", "");
    guider.forEach(function (a) {
      l.push("- [" + a.h1 + "](" + BASE_URL + videnSti(a) + ")" + (a.desc ? ": " + a.desc : ""));
    });
  } catch (e) {
    console.log("Bemærk: viden.json blev ikke læst (" + e.message + ") — Håndbogen kom ikke i llms.txt.");
  }
  l.push("", "## Kontakt", "", "- [Få tilbud](" + BASE_URL + "/faa-tilbud/)", "- [Kontakt](" + BASE_URL + "/kontakt/)", "");
  return l.join("\n");
}

function genererRobots() {
  var linjer = ["User-agent: *", "Allow: /"];
  IKKE_INDEKSER.forEach(function (sti) { linjer.push("Disallow: " + sti); });
  linjer.push("", "Sitemap: " + BASE_URL + "/sitemap.xml", "");
  return linjer.join("\n");
}

// ── Forside ──────────────────────────────────────────────────────────────────
//
// Samme opbygning som leasio.dk: sammenligningen er sidens krop, og tilbudstjekket
// er ét punkt i menuen plus én sektion — ikke det hele forsiden peger på.
//
// Alt indhold renderes her i generatoren. Browseren sorterer, skjuler og bygger
// sammenligningstabellen ud af data der allerede står i HTML'en. Siden er derfor
// fuldt læsbar og indekserbar uden JavaScript.

// Stoerrelsesklasse paa en kassevogn. Graenserne er sat efter hvor de danske
// modeller faktisk ligger, ikke efter runde tal:
//   pizzabil  under 4.750 mm  - Caddy, Berlingo, Combo, Transit Courier
//   mellem    4.750-5.400 mm  - Transit Custom, Trafic, Vito, Transporter, Jumpy, Proace
//   stor      over 5.400 mm   - Jumper, Boxer, Master, Daily, Sprinter, Crafter, TGE
// Det er inddelingen, man bruger i branchen. Indtil 28-09-2026 var der fire
// klasser, og Transit Custom-klassen hed "lille" og Jumper/Master "mellem" -
// det passede ikke med, hvad nogen ville kalde bilerne.
// Pickup og ladvogn har ingen stoerrelsesklasse; de er deres egen kategori.
var STOERRELSER = [
  { id: "pizzabil", navn: "Pizzabil",          hint: "under 4,75 m" },
  { id: "mellem",   navn: "Mellem kassevogn",  hint: "4,75–5,4 m" },
  { id: "stor",     navn: "Stor kassevogn",    hint: "over 5,4 m" }
];

function stoerrelse(bil) {
  if (bil.karrosseri !== "kassevogn") return null;
  if (bil.stoerrelse) return bil.stoerrelse;
  var l = (bil.udvendig || {}).laengde_mm;
  if (l != null) {
    if (l < 4750) return "pizzabil";
    if (l < 5400) return "mellem";
    return "stor";
  }
  var v = (bil.lastrum || {}).volumen_m3;
  if (v != null) {
    if (v < 4.5) return "pizzabil";
    if (v < 7) return "mellem";
    return "stor";
  }
  return null;
}

var CHIPS = [
  { id: "alle",     navn: "Alle varebiler",     passer: function () { return true; } },
  { id: "pizzabil", navn: "Pizzabil",           passer: function (b) { return stoerrelse(b) === "pizzabil"; } },
  { id: "mellem",   navn: "Mellem kassevogn",   passer: function (b) { return stoerrelse(b) === "mellem"; } },
  { id: "stor",     navn: "Stor kassevogn",     passer: function (b) { return stoerrelse(b) === "stor"; } },
  { id: "pickup",   navn: "Pickup",             passer: function (b) { return b.karrosseri === "pickup"; } },
  { id: "ladvogn",  navn: "Ladvogn",            passer: function (b) { return b.karrosseri === "ladvogn"; } },
];

// Rækkerne i sammenligningstabellen. retning: 1 = højest er bedst, -1 = lavest er
// bedst, 0 = ingen af delene (så markeres intet som bedst).
// gruppe bruges af den foldbare tabel (standard; GULPLADE_SMB_NY=0 giver den gamle, der
// viser rækkerne i den rækkefølge, de står her).
var SMB_NY = process.env.GULPLADE_SMB_NY !== "0";
// 05-10-2026: kortere forside (12 modelkort, tabellen med alle tilbud på /alle-tilbud/).
// Godkendt af brugeren 05-10-2026. GULPLADE_FORSIDE_NY=0 giver den gamle forside.
var FORSIDE_NY = process.env.GULPLADE_FORSIDE_NY !== "0";
// 05-10-2026: Køb ny varebil (koeb.js): /koeb-ny-varebil/ og "Pris ved køb" på model- og
// mærkesiderne, bygget af priser.json. Kun på preview (GULPLADE_KOEB_NY=1), indtil
// brugeren har godkendt det. Med flaget forsvinder /bedste-tilbud/hvad-koster-en-varebil/,
// som skal 301 til den nye side, når den går i produktion.
var KOEB_NY = process.env.GULPLADE_KOEB_NY !== "0";  // i produktion fra 06-10-2026; GULPLADE_KOEB_NY=0 slår den fra
var KOEB_INST = null;
function koeb() {
  return KOEB_INST || (KOEB_INST = require("./koeb.js")({
    esc: esc, talDK: talDK, slug: slug, hoved: hoved, header: header, footer: footer,
    titelDerPasser: titelDerPasser, beskrivelse: beskrivelse, BASE_URL: BASE_URL, stoerrelse: stoerrelse,
    kortNavn: kortNavn, datoLang: datoLang, visDato: visDato, vaertNavn: vaertNavn, modelSti: modelSti,
    udstyrForModel: udstyrForModel, UDSTYR: UDSTYR, billigsteSamlet: billigsteSamlet,
    tilbudsknapHTML: tilbudsknapHTML, modulHTML: modulHTML, alleTilbud: alleTilbud,
    nyttelastTekst: nyttelastTekst, traekTekst: traekTekst,
    brugteAntal: function () {
      var b = brugteEfterModel(), n = 0;
      Object.keys(b).forEach(function (k) { n += b[k].antal; });
      return n;
    }
  }));
}
var FORSIDE_KORT = 12;
var SMB_GRUPPER = [
  { id: "pris",    navn: "Pris og aftale",            aaben: true },
  { id: "lastrum", navn: "Lastrum og nyttelast",      aaben: true },
  { id: "vaegt",   navn: "Vægt, træk og ydre mål",    aaben: false },
  { id: "drift",   navn: "Motor, forbrug og opladning", aaben: false },
  { id: "garanti", navn: "Garanti",                   aaben: false }
];
var SMB_RAEKKER = [
  { navn: "Billigste annonceret",     felt: "maaned",      enhed: " kr./md.", retning: -1, gruppe: "pris" },
  { navn: "Samlet pr. md.",           felt: "samlet",      enhed: " kr./md.", retning: -1, gruppe: "pris" },
  { navn: "Vejledende nypris",        felt: "nypris",      enhed: " kr.",     retning: -1, gruppe: "pris" },
  { navn: "Udbetaling",               felt: "udbetaling",  enhed: " kr.",     retning: -1, gruppe: "pris" },
  { navn: "Løbetid",                  felt: "loebetid",    enhed: " mdr.",    retning: 0,  gruppe: "pris" },
  { navn: "Km pr. år",                felt: "km",          enhed: " km",      retning: 1,  gruppe: "pris" },
  { navn: "Antal tilbud",             felt: "antalTilbud", enhed: "",         retning: 1,  gruppe: "pris" },
  { navn: "Oplyst i billigste tilbud",     felt: "oplyst",      enhed: " af 5",    retning: 1, gruppe: "pris" },
  { navn: "Lastrumsvolumen",          felt: "volumen",     enhed: " m³",      retning: 1,  gruppe: "lastrum" },
  { navn: "Nyttelast",                felt: "nyttelast",   enhed: " kg",      retning: 1,  gruppe: "lastrum" },
  { navn: "Lastrumslængde",           felt: "laengde",     enhed: " mm",      retning: 1,  gruppe: "lastrum" },
  { navn: "Bredde mellem hjulkasser", felt: "bredde",      enhed: " mm",      retning: 1,  gruppe: "lastrum" },
  { navn: "Lastrumsbredde, maks.",    felt: "breddeMax",   enhed: " mm",      retning: 1,  gruppe: "lastrum" },
  { navn: "Lastrumshøjde",            felt: "hoejde",      enhed: " mm",      retning: 1,  gruppe: "lastrum" },
  { navn: "Læssehøjde over vejen",    felt: "laessehoejde", enhed: " mm",     retning: -1, gruppe: "lastrum" },
  { navn: "Europaller",               felt: "paller",      enhed: "",         retning: 1,  gruppe: "lastrum" },
  { navn: "Tilladt totalvægt",        felt: "totalvaegt",  enhed: " kg",      retning: 0,  gruppe: "vaegt" },
  { navn: "Trækvægt m. bremser",      felt: "anhaenger",   enhed: " kg",      retning: 1,  gruppe: "vaegt" },
  { navn: "Udvendig højde",           felt: "udvHoejde",   enhed: " mm",      retning: -1, gruppe: "vaegt" },
  { navn: "Udvendig længde",          felt: "udvLaengde",  enhed: " mm",      retning: -1, gruppe: "vaegt" },
  { navn: "Batteri",                  felt: "batteri",     enhed: " kWh",     retning: 1,  gruppe: "drift" },
  { navn: "Drivmiddel",               felt: "drivmiddel",  enhed: "",         retning: 0, tekst: true, gruppe: "drift" },
  { navn: "CO₂ (WLTP)",               felt: "co2",         enhed: " g/km",    retning: -1, gruppe: "drift" },
  { navn: "Forbrug (WLTP)",           felt: "forbrug",     enhed: " km/l",    retning: 1,  gruppe: "drift" },
  { navn: "Rækkevidde (WLTP)",        felt: "raekkevidde", enhed: " km",      retning: 1,  gruppe: "drift" },
  { navn: "Grøn ejerafgift",          felt: "ejerafgift",  enhed: " kr./halvår", retning: -1, gruppe: "drift" },
  { navn: "AC-lader",                 felt: "acKw",        enhed: " kW",      retning: 1,  gruppe: "drift" },
  { navn: "Lynlader (DC)",            felt: "dcKw",        enhed: " kW",      retning: 1,  gruppe: "drift" },
  { navn: "Ladetid DC",               felt: "dcTid",       enhed: "",         retning: 0, tekst: true, gruppe: "drift" },
  { navn: "Forbrug (WLTP)",           felt: "elForbrug",   enhed: " kWh/100 km", retning: -1, gruppe: "drift" },
  { navn: "Garanti",                  felt: "garanti",     enhed: "",         retning: 0, tekst: true, gruppe: "garanti" },
  { navn: "Batterigaranti",           felt: "garantiBatteri", enhed: "",      retning: 0, tekst: true, gruppe: "garanti" }
];

var FAQ = [
  ["Hvorfor står priserne ekskl. moms?",
   "Fordi siden er til erhvervskunder, og en momsregistreret virksomhed kan trække momsen fra på en varebil på gule plader, når bilen kun bruges erhvervsmæssigt. Prisen ekskl. moms er derfor den, der rammer virksomhedens regnskab. Bruges bilen også privat, ændrer det både momsfradraget og afgiften, og så er det ikke længere det tal der gælder."],
  ["Hvad betyder “Samlet pr. md.”?",
   "Månedsydelsen plus førstegangsydelsen fordelt over løbetiden. Et tilbud med lav ydelse og høj udbetaling ser billigt ud i annoncen, men er det ikke nødvendigvis. Tallet består udelukkende af to beløb, udbyderen selv har annonceret — det er vores eneste bearbejdning, og det er ikke et tilbud."],
  ["Lægger I service, dæk og forsikring oveni?",
   "Nej. Vi har prøvet og droppede det igen. De poster svinger for meget fra virksomhed til virksomhed og fra bil til bil, og vores skøn ville afgøre, hvilket tilbud der kom øverst i tabellen. Den beslutning skal ikke tages på vores gæt. I stedet viser vi for hvert tilbud, hvor mange af de fem driftsposter udbyderen overhovedet forholder sig til."],
  ["Hvad betyder “Oplyst” ved hvert tilbud?",
   "Hvor mange af de fem driftsposter — service og reparation, dæk, forsikring, grøn ejerafgift og vejhjælp — udbyderen tager stilling til. Læs den sammen med prisen. Et tilbud der inkluderer service og forsikring står med et højere tal end et bart tilbud på samme bil uden at være dyrere, fordi ydelsen dækker mere. Og et tilbud der ikke oplyser noget, er ikke billigere — det er bare ikke gjort færdigt."],
  ["Regner I løbetider om, så tilbuddene kan sammenlignes?",
   "Nej, og det er et bevidst valg. Vi viser kun tilbud, der er aktuelle hos udbyderen. Et tilbud på 60 måneder omregnet til 36 er ikke et tilbud, nogen kan tage imod — prisen ville være opfundet af os. Løbetid og kilometertal står derfor ved hvert tilbud og skal læses med: en lang løbetid fordeler udbetalingen over flere måneder og giver et lavere månedstal, uden at aftalen er billigere."],
  ["Hvor kommer de tekniske mål fra?",
   "Fra producenternes egne danske prislister og specifikationsblade. Hvert sæt mål gælder én bestemt udgave af bilen, og kilde og dato står på modelsiden. Hvor producenten ikke oplyser et mål — eller kun viser det som en tegning, hvilket flere gør — står feltet tomt. Vi udfylder det ikke på gætværk."],
  ["Får I penge fra leasingselskaberne?",
   "Ingen udbyder kan købe en placering i sammenligningen — ingen betaling for placeringer, ingen affiliatehonorarer. Beder du os om at hente tilbud hjem, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til, os et honorar for den. Det er det samme beløb fra alle, og det udløses af henvendelsen, ikke af din underskrift — så vi tjener hverken på at pege dig i en bestemt retning eller på, at du skriver under. Vil du have en gennemgang, hvor ingen forhandler er inde over, betaler du selv for et tilbudstjek."]
];

var POST_ORD = { service_reparation: "service", daek: "dæk", forsikring: "forsikring", ejerafgift: "ejerafgift", vejhjaelp: "vejhjælp" };

function talDK(v) { return v == null ? null : Number(v).toLocaleString("da-DK"); }
function kommaTal(v) { return v == null ? null : String(v).replace(".", ","); }

// Samler alt hvad forsiden skal vide om én model: billigste tilbud, det tal vi
// selv beregner, og de tekniske mål.
// Standardudstyr til forsidens filter: poster, der er standard på det niveau,
// kortets tilbud gælder - eller på det billigste niveau, når det ikke kan afgøres.
function kortUdstyr(bil, t) {
  var u = udstyrForModel(bil.id);
  if (!u) return "";
  var tn = t ? tilbudNiveau(bil, t) : null, i = tn ? tn.i : 0;
  return UDSTYR.poster.filter(function (p) { return ((u.udstyr[p.id] || [])[i] || {}).s === "std"; })
    .map(function (p) { return p.id; }).join(" ");
}

// Posterne i forsidens udstyrsfilter - dem, folk vælger en varebil efter.
var FILTER_UDSTYR = ["bakkamera", "carplay", "adaptiv_fartpilot", "blindvinkel", "psensor_for",
  "noeglefri", "saedevarme", "parkeringsvarmer", "led_forlygter", "skydedoer_venstre", "anhaengertraek"];

function forsideRad(bil, f) {
  var kandidater = [], bedsteDaekning = 0, loebetider = {}, udbydere = [], typer = {};

  bil.tilbud.forEach(function (t) {
    var b = beregn(t, f);
    if (b.daekning > bedsteDaekning) bedsteDaekning = b.daekning;
    if (t.loebetid_mdr) loebetider[t.loebetid_mdr] = 1;
    typer[t.leasingtype || "ukendt"] = 1;
    if (udbydere.indexOf(t.udbyder) < 0) udbydere.push(t.udbyder);
    kandidater.push({ t: t, b: b });
  });

  // Vælg ét tilbud, og lad alle kortets tal komme fra det. Vi foretrækker
  // det med lavest samlet pris pr. md. blandt dem der kan beregnes — et
  // tilbud uden oplyst udbetaling kan ikke prissættes færdigt, og så er en
  // lidt højere annonceret pris at foretrække frem for et blandet regnestykke.
  var beregnelige = kandidater.filter(function (k) { return k.b.maanedligt != null; });
  var valgt;
  if (beregnelige.length) {
    valgt = beregnelige.reduce(function (m, k) { return k.b.maanedligt < m.b.maanedligt ? k : m; });
  } else {
    valgt = kandidater.reduce(function (m, k) {
      if (k.t.maanedspris == null) return m;
      return (m.t.maanedspris == null || k.t.maanedspris < m.t.maanedspris) ? k : m;
    }, kandidater[0]);
  }

  var lr = bil.lastrum || {};
  return {
    bil: bil,
    t: valgt.t,
    b: valgt.b,
    samlet: valgt.b.maanedligt != null ? Math.round(valgt.b.maanedligt) : null,
    andreTilbud: kandidater.length - 1,
    bedsteDaekning: bedsteDaekning,
    udbydere: udbydere,
    loebetider: Object.keys(loebetider).map(Number).sort(function (a, b) { return a - b; }),
    leasingtyper: Object.keys(typer).sort(),
    sti: "/varebiler/" + slug(bil.maerke) + "/" + slug(bil.model) + "/",
    maal: {
      volumen: lr.volumen_m3 != null ? lr.volumen_m3 : null,
      laengde: lr.laengde_mm != null ? lr.laengde_mm : null,
      bredde: lr.bredde_mellem_hjulkasser_mm != null ? lr.bredde_mellem_hjulkasser_mm : null,
      hoejde: lr.hoejde_mm != null ? lr.hoejde_mm : null
    }
  };
}

function forsideHTML(data) {
  var f = data.forudsaetninger;
  var biler = data.varebiler;

  var rader = biler.map(function (bil) { return forsideRad(bil, f); });
  rader.forEach(function (r) { r.bil._bedsteDaekning = r.bedsteDaekning; });

  var flestTilbud = rader.reduce(function (m, r) { return Math.max(m, r.bil.tilbud.length); }, 0);
  var bedstOplyst = rader.reduce(function (m, r) { return Math.max(m, r.bedsteDaekning); }, 0);

  var antalTilbud = biler.reduce(function (s, b) { return s + b.tilbud.length; }, 0);
  var alleUdbydere = {};
  rader.forEach(function (r) {
    r.bil.tilbud.forEach(function (t) {
      if (!alleUdbydere[t.udbyder]) alleUdbydere[t.udbyder] = { navn: t.udbyder, antal: 0, oplyst: 0, poster: 0 };
      var u = alleUdbydere[t.udbyder], b = beregn(t, f);
      u.antal++; u.oplyst += b.oplystAntal; u.poster += b.posterAntal;
    });
  });
  var udbyderListe = Object.keys(alleUdbydere).map(function (k) { return alleUdbydere[k]; })
    .sort(function (a, b) { return (b.oplyst / b.poster) - (a.oplyst / a.poster) || b.antal - a.antal; });

  var billigst = rader.reduce(function (m, r) {
    return (r.t.maanedspris != null && (m == null || r.t.maanedspris < m)) ? r.t.maanedspris : m;
  }, null);

  // Tal til introen. De skal regnes ud her, ikke skrives i haanden: en intro,
  // der siger "11 af 54", er forkert i det oejeblik, der kommer et tilbud mere.
  var alle = alleTilbud(data);
  // Nyhedskortet i artikelbaandet viser altid den seneste nyhed.
  var nyesteNyhed = VIDEN.filter(function (a) { return a.sektion === "nyheder"; })
    .sort(function (a, b) { return String(b.udgivet).localeCompare(String(a.udgivet)); })[0];

  var opdateret = data.sidst_opdateret || "";
  var opdateretKort = opdateret
    ? new Date(opdateret).toLocaleDateString("da-DK", { day: "numeric", month: "short" }) : "";

  // ── Chips ──
  var chipsHTML = CHIPS.map(function (c) {
    var n = biler.filter(c.passer).length;
    if (n === 0) return "";
    var valgt = c.id === "alle";
    return '<button type="button" class="chip' + (valgt ? " chip--valgt" : "") + '" data-chip="' + c.id +
      '" aria-pressed="' + valgt + '">' + esc(c.navn) + '<span class="chip__tal">' + n + '</span></button>';
  }).filter(Boolean).join("\n");

  var maerker = biler.map(function (b) { return b.maerke; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();

  function valg(id, tom, poster) {
    return '<label><span class="skjult">' + esc(tom) + '</span><select id="' + id + '">' +
      '<option value="">' + esc(tom) + '</option>' +
      poster.map(function (p) {
        return '<option value="' + esc(String(p[0])) + '">' + esc(p[1]) + '</option>';
      }).join("") + '</select></label>';
  }

  // ── Data til sammenligningen ──
  var smbData = {};
  rader.forEach(function (r) {
    var bil = r.bil;
    smbData[bil.id] = {
      navn: bil.maerke + " " + bil.model,
      variant: bil.variant_for_maal || null,
      sti: r.sti,
      maaned: r.t.maanedspris != null ? r.t.maanedspris : null,
      samlet: r.samlet,
      udbetaling: r.t.foerstegangsydelse != null ? r.t.foerstegangsydelse : null,
      loebetid: r.t.loebetid_mdr != null ? r.t.loebetid_mdr : null,
      km: r.t.km_pr_aar != null ? r.t.km_pr_aar : null,
      antalTilbud: bil.tilbud.length,
      oplyst: r.b.oplystAntal,
      volumen: r.maal.volumen,
      nyttelast: bil.nyttelast_kg != null ? bil.nyttelast_kg : null,
      laengde: r.maal.laengde,
      bredde: r.maal.bredde,
      hoejde: r.maal.hoejde,
      paller: bil.europaller != null ? bil.europaller : null,
      totalvaegt: bil.totalvaegt_kg != null ? bil.totalvaegt_kg : null,
      anhaenger: bil.anhaengervaegt_kg != null ? bil.anhaengervaegt_kg : null,
      drivmiddel: drivmiddelNavn(bil.drivmiddel) || null,
      co2: bil.co2_g_pr_km != null ? bil.co2_g_pr_km : null,
      forbrug: bil.forbrug_km_pr_l != null ? bil.forbrug_km_pr_l : null,
      raekkevidde: bil.raekkevidde_km != null ? bil.raekkevidde_km : null,
      batteri: bil.batteri_kwh != null ? bil.batteri_kwh : null,
      ejerafgift: bil.ejerafgift_halvaar_kr != null ? bil.ejerafgift_halvaar_kr : null,
      nypris: (bil.nypris && bil.nypris.ekskl_moms_kr != null) ? bil.nypris.ekskl_moms_kr : null,
      breddeMax: (bil.lastrum && bil.lastrum.bredde_max_mm != null) ? bil.lastrum.bredde_max_mm : null,
      laessehoejde: (bil.lastrum && bil.lastrum.laesserhoejde_mm != null) ? bil.lastrum.laesserhoejde_mm : null,
      udvHoejde: (bil.udvendig && bil.udvendig.hoejde_mm != null) ? bil.udvendig.hoejde_mm : null,
      udvLaengde: (bil.udvendig && bil.udvendig.laengde_mm != null) ? bil.udvendig.laengde_mm : null
    };
    // Udstyret paa det niveau, det billigste tilbud gaelder. Er niveauet
    // ikke til at afgoere ud fra variantnavnet, bruges det billigste niveau -
    // og det staar i raekken, saa ingen tror, det er tilbuddets eget.
    var em = elForModel(bil.id);
    if (em) {
      smbData[bil.id].acKw = em.ac_kw != null ? em.ac_kw : null;
      smbData[bil.id].dcKw = em.dc_kw != null ? em.dc_kw : null;
      smbData[bil.id].dcTid = em.dc_tid_min != null ? minTekst(em.dc_tid_min) + (interval(em.dc_tid_note) ? ' (' + interval(em.dc_tid_note) + ')' : '') : null;
      smbData[bil.id].elForbrug = em.forbrug_kwh_100km != null ? em.forbrug_kwh_100km : null;
      if (em.raekkevidde_km != null) smbData[bil.id].raekkevidde = em.raekkevidde_km;
    }
    var gm = garantiForModel(bil.id);
    if (gm) {
      smbData[bil.id].garanti = garantiKort(gm);
      smbData[bil.id].garantiBatteri = harBatteri(bil) && gm.batteri ? aarKm(gm.batteri) : null;
    }
    var uds = udstyrForModel(bil.id);
    if (uds) {
      var tn = tilbudNiveau(bil, r.t);
      var udsI = tn ? tn.i : 0;
      var ud = {};
      UDSTYR.poster.forEach(function (p) {
        var c = (uds.udstyr[p.id] || [])[udsI] || { s: "ukendt" };
        ud[p.id] = c.s === "std" ? "Standard"
          : c.s === "tilvalg" ? (c.pris === 0 ? "Uden merpris" : c.pris != null ? talDK(c.pris) + " kr." : "Tilvalg")
          : c.s === "pakke" ? (c.pris != null ? talDK(c.pris) + " kr. (pakke)" : "I pakke")
          : c.s === "nej" ? "Fås ikke" : null;
      });
      smbData[bil.id].udstyrNiveau = uds.niveauer[udsI].navn + (tn ? " (tilbuddets)" : " (billigste)");
      smbData[bil.id].udstyr = ud;
    }
  });

  // ── Kort ──
  // 2026-09-21 -> 21. sep.
  function kortDato(v) {
    if (!v) return "";
    var d = new Date(v);
    return isNaN(d.getTime()) ? v : d.toLocaleDateString("da-DK", { day: "numeric", month: "short" });
  }

  var kortHTML = rader.map(function (r) {
    var bil = r.bil, m = r.maal;
    var navn = bil.maerke + " " + bil.model;

    // Der sidder ingen "Mest solgte"-badge paa kortene. Den sad paa 10 af 28
    // biler, men kun én af dem er den mest solgte - resten er nr. 2 til nr. 10.
    // Et badge har ikke plads til den forskel, og en manchet har: den
    // praecise placering og kilden staar paa modelsiden i bil.note.
    var badges = [];
    if (bil.drivmiddel === "el") badges.push('<span class="badge">El</span>');
    if (bil.drivmiddel === "plugin") badges.push('<span class="badge">Plug-in</span>');
    if (bil.tilbud.length === flestTilbud && flestTilbud > 1) {
      badges.push('<span class="badge">' + bil.tilbud.length + ' tilbud</span>');
    }

    // Varianten gentager tit modelnavnet ("Berlingo" under "Berlingo").
    // Vis den kun, når den faktisk siger noget nyt.
    var variantVis = null;
    if (r.t.variant) {
      var a = r.t.variant.toLowerCase().replace(/[^a-z0-9]/g, "");
      var b2 = bil.model.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (a.indexOf(b2) < 0 && b2.indexOf(a) < 0) variantVis = r.t.variant;
    }

    var billedeHTML = bil.billede
      ? '<img src="' + esc(bil.billede) + '" alt="' + esc(navnMedType(bil)) + '" width="800" height="500" loading="lazy" decoding="async">'
      : '<div class="bilkort__intetbillede">' + esc(bil.model) + '<span>billede mangler</span></div>';

    // Trækvægt afgør, om varebilen kan trække det den skal, og står derfor
    // altid når den er oplyst. El-modeller får batteri og rækkevidde med.
    var felter = [
      ["Lastrum",   m.volumen != null ? kommaTal(m.volumen) + " m³" : null],
      ["Nyttelast", nyttelastTekst(bil)],
      ["Trækvægt",  traekTekst(bil)]
    ];
    if (bil.batteri_kwh != null) felter.push(["Batteri", kommaTal(bil.batteri_kwh) + " kWh"]);
    if (bil.raekkevidde_km != null) felter.push(["Rækkevidde", talDK(bil.raekkevidde_km) + " km"]);
    felter.push(["Totalvægt", bil.totalvaegt_kg != null ? talDK(bil.totalvaegt_kg) + " kg" : null]);
    felter.push(["Længde", m.laengde != null ? talDK(m.laengde) + " mm" : null]);
    felter = felter.filter(function (x) { return x[1]; }).slice(0, 6);

    var felterHTML = felter.length
      ? '<dl class="bilkort__felter">' + felter.map(function (x) {
          return '<div><dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd></div>';
        }).join("") + '</dl>'
      : '<p class="bilkort__intet">Tekniske mål ikke indtastet endnu</p>';

    // Kortet viser det BILLIGSTE tilbud. Oplyser et dyrere tilbud på samme
    // model mere, er det værd at vide — og det er bedre at skrive det end at
    // sætte en "bedst oplyst"-badge, der modsiger tallet nede i kortet.
    var bedreOplyst = r.bedsteDaekning > r.b.daekning
      ? Math.round(r.bedsteDaekning * r.b.posterAntal) : null;

    // Koebsprisen staar under maanedsydelsen, saa de to tal kan laeses sammen.
    // En fra-pris maerkes, fordi den ikke gaelder den variant maalene gaelder.
    var koebHTML;
    if (bil.nypris && bil.nypris.ekskl_moms_kr != null) {
      koebHTML = '<p class="bilkort__koeb"><span class="bilkort__koeb-navn">Nypris</span> ' +
        (bil.nypris.fra ? 'fra ' : '') + talDK(bil.nypris.ekskl_moms_kr) + ' kr.</p>';
    } else {
      koebHTML = '<p class="bilkort__koeb bilkort__koeb--tom"><span class="bilkort__koeb-navn">Nypris</span> ikke oplyst</p>';
    }

    var vilkaar = [];
    if (r.samlet != null) vilkaar.push(talDK(r.samlet) + " kr./md. samlet");
    if (r.t.loebetid_mdr) vilkaar.push(r.t.loebetid_mdr + " mdr.");
    if (r.t.km_pr_aar) vilkaar.push(talDK(r.t.km_pr_aar) + " km/år"); else if (r.t.km_fri) vilkaar.push("fri km");
    if (r.t.gyldig_til) vilkaar.push("gælder til " + visDato(r.t.gyldig_til));

    var pct = Math.round(r.b.daekning * 100);
    var lavDaekning = r.b.daekning < 0.6 ? " daekning--lav" : "";

    var kilde = "";
    try { kilde = new URL(r.t.kilde_url).hostname.replace(/^www\./, ""); } catch (e) { kilde = ""; }

    var sog = (navn + " " + (bil.karrosseri || "") + " " + (bil.drivmiddel || "") + " " +
               r.udbydere.join(" ")).toLowerCase();

    return [
      '<li class="bilkort' + (bil.drivmiddel === "el" ? " bilkort--el" : "") +'" id="kort-' + esc(bil.id) + '"',
      '    data-id="' + esc(bil.id) + '"',
      '    data-maerke="' + esc(bil.maerke) + '"',
      '    data-drivmiddel="' + esc(bil.drivmiddel || "") + '"',
      '    data-karrosseri="' + esc(bil.karrosseri || "") + '"',
      '    data-stoerrelse="' + esc(stoerrelse(bil) || "") + '"',
      '    data-udbydere="' + esc(r.udbydere.join("|")) + '"',
      '    data-loebetider="' + esc(r.loebetider.join("|")) + '"',
      '    data-leasingtyper="' + esc(r.leasingtyper.join("|")) + '"',
      '    data-nyttelast="' + (bil.nyttelast_kg != null ? bil.nyttelast_kg : "") + '"',
      '    data-volumen="' + (m.volumen != null ? m.volumen : "") + '"',
      '    data-paller="' + (bil.europaller != null ? bil.europaller : "") + '"',
      '    data-traek="' + (bil.anhaengervaegt_kg != null ? bil.anhaengervaegt_kg : "") + '"',
      '    data-daekning="' + r.b.daekning.toFixed(2) + '"',
      '    data-maaned="' + (r.t.maanedspris != null ? r.t.maanedspris : "") + '"',
      '    data-samlet="' + (r.samlet != null ? r.samlet : "") + '"',
      '    data-udbetaling="' + (r.t.foerstegangsydelse != null ? r.t.foerstegangsydelse : "") + '"',
      '    data-nypris="' + (bil.nypris && bil.nypris.ekskl_moms_kr != null ? bil.nypris.ekskl_moms_kr : "") + '"',
      '    data-tilbud="' + bil.tilbud.length + '"',
      '    data-udstyr="' + esc(kortUdstyr(bil, r.t)) + '"',
      '    data-garanti="' + (function () { var g = garantiForModel(bil.id), l = g && garantiLaengst(g); return l ? l.aar : ""; })() + '"',
      '    data-raekkevidde="' + (function () { var e = elForModel(bil.id); var k = e && e.raekkevidde_km != null ? e.raekkevidde_km : bil.raekkevidde_km; return bil.drivmiddel === "el" && k != null ? k : ""; })() + '"',
      '    data-sog="' + esc(sog) + '">',
      '  <a class="bilkort__link" href="' + r.sti + '">',
      '    <div class="bilkort__billede">',
      '      ' + billedeHTML,
      '      <span class="bilkort__maerkat">' + esc(bil.maerke) + '</span>',
      badges.length ? '      <div class="bilkort__badges">' + badges.join("") + '</div>' : '',
      '    </div>',
      '    <div class="bilkort__krop">',
      '      <div class="bilkort__navnblok">',
      '        <h3 class="bilkort__navn">' + esc(kortNavn(bil)) + '</h3>',
      variantVis ? '        <p class="bilkort__variant">' + esc(variantVis) + '</p>' : '',
      '      </div>',
      '      <div class="bilkort__prisblok">',
      '        <p class="bilkort__pris">',
      '          <span class="bilkort__pris-navn">Billigste leasingpris</span>',
      '          <span class="bilkort__pris-vaerdi">'
      + '<span class="bilkort__belob">' + talDK(r.t.maanedspris) + '</span>'
      + '<span class="bilkort__valuta">kr./md.</span></span>',
      '        </p>',
      vilkaar.length
        ? '        <p class="bilkort__vilkaar">' + esc(vilkaar.join(" · ")) + '</p>'
        : '        <p class="bilkort__vilkaar bilkort__vilkaar--tom">Udbetaling ikke oplyst</p>',
      '        ' + koebHTML,
      bedreOplyst != null
        ? '        <p class="bilkort__hint">Et dyrere tilbud oplyser ' + bedreOplyst + '/' + r.b.posterAntal + '</p>'
        : '',
      '      </div>',
      '      ' + felterHTML,
      '      <div class="bilkort__fod">',
      '        <span class="daekning' + lavDaekning + '" title="Billigste tilbud oplyser ' + r.b.oplystAntal + ' af ' + r.b.posterAntal + ' driftsposter">',
      '          <span class="daekning__bar"><span class="daekning__fyld" style="width:' + pct + '%"></span></span>',
      '          <span class="daekning__tal">' + r.b.oplystAntal + '/' + r.b.posterAntal + '</span>',
      '        </span>',
      '        <span class="stempel">' + esc(kortDato(r.t.kilde_dato)) +
        (kilde ? ' <span class="stempel__skil">·</span> ' + esc(kilde) : '') + '</span>',
      '      </div>',
      '    </div>',
      '  </a>',
      '  <label class="bilkort__vaelg">',
      '    <input type="checkbox" class="smb-vaelg" value="' + esc(bil.id) + '" aria-label="Sammenlign ' + esc(navn) + '">',
      '    Sammenlign',
      '  </label>',
      '</li>'
    ].filter(function (l) { return l.trim() !== ''; }).join("\n");
  }).join("\n");

  var udbydereHTML = udbyderListe.map(function (u) {
    var pct = Math.round((u.oplyst / u.poster) * 100);
    var lav = pct < 60 ? " daekning--lav" : "";
    return [
      '<li class="udbyder">',
      '  <p class="udbyder__navn"><a href="/udbydere/' + slug(u.navn) + '/">' + esc(u.navn) + '</a></p>',
      '  <p class="udbyder__tal">' + u.antal + (u.antal === 1 ? ' tilbud' : ' tilbud') + ' på siden</p>',
      '  <div class="udbyder__daekning"><span class="daekning' + lav + '">',
      '    <span class="daekning__bar"><span class="daekning__fyld" style="width:' + pct + '%"></span></span>',
      '    <span class="daekning__tal">oplyser ' + pct + '% af driftsposterne</span>',
      '  </span></div>',
      '</li>'
    ].join("\n");
  }).join("\n");

  // 05-10-2026: to spørgsmål om selve leasingen først, så forsiden svarer på
  // "varebilsleasing" og "erhvervsleasing". Prisen regnes ud af tilbuddene.
  var forsideFaq = [
    billigst != null ? ["Hvad koster varebilsleasing til erhverv?",
      "Blandt de " + antalTilbud + " tilbud, vi har samlet, starter ydelsen ved " + talDK(billigst) + " kr. om måneden. " +
      "Prisen afhænger af bilens størrelse, udbetalingen, løbetiden og hvor mange kilometer du kører om året. " +
      "Øverst på siden kan du sortere tilbuddene efter, hvad de koster om måneden, når udbetalingen er fordelt over hele løbetiden."] : null,
    ["Hvordan foregår erhvervsleasing af en varebil?",
      "Du vælger bilen, løbetiden og hvor mange kilometer du vil køre om året, og får et tilbud fra en forhandler eller et leasingselskab. " +
      "Virksomheden betaler som regel en udbetaling og derefter en fast ydelse hver måned. " +
      "Ved operationel leasing afleverer du bilen, når aftalen udløber. " +
      "Ved finansiel leasing har aftalen en restværdi, som du hæfter for."]
  ].filter(Boolean).concat(FAQ);

  var faqHTML = forsideFaq.map(function (q) {
    return '<details class="faq__punkt"><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>';
  }).join("\n");

  var schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", "mainEntity": forsideFaq.map(function (q) {
          return { "@type": "Question", "name": q[0], "acceptedAnswer": { "@type": "Answer", "text": q[1] } };
        }) },
      { "@type": "ItemList", "numberOfItems": rader.length,
        "itemListElement": rader.map(function (r, i) {
          return { "@type": "ListItem", "position": i + 1,
                   "name": r.bil.maerke + " " + r.bil.model, "url": BASE_URL + r.sti };
        }) },
      // Hvem siden er: giver Google sidenavnet og logoet til søgeresultatet.
      { "@type": "Organization", "@id": BASE_URL + "/#organisation", "name": "Gulplade.dk", "url": BASE_URL + "/",
        "logo": BASE_URL + "/apple-touch-icon.png",
        "description": "Uafhængig sammenligning af erhvervsleasing af varebiler på gule plader.",
        "areaServed": "DK",
        "sameAs": ["https://www.linkedin.com/company/gulplade/"] },
      { "@type": "WebSite", "@id": BASE_URL + "/#websted", "name": "Gulplade.dk", "url": BASE_URL + "/",
        "inLanguage": "da", "publisher": { "@id": BASE_URL + "/#organisation" } }
    ]
  };

  // 02-10-2026: forsiden blev vist på "leasing gulpladebil", "gulplade leasing" og
  // "varebil leasing tilbud" uden klik. Gulpladebil og pris står nu i titlen.
  // 05-10-2026: GSC viste, at forsiden ikke fik visninger på "varebil leasing",
  // "leasing af varebil" eller "erhvervsleasing". Forsiden skal eje de ord.
  var title = titelDerPasser([
    billigst != null ? "Varebil leasing til erhverv: " + antalTilbud + " tilbud fra " + talDK(billigst) + " kr./md." : null,
    billigst != null ? "Varebil leasing til erhverv fra " + talDK(billigst) + " kr./md." : null,
    "Varebil leasing til erhverv: " + antalTilbud + " tilbud"
  ]);
  var desc = "Sammenlign " + antalTilbud + " tilbud på erhvervsleasing af varebiler og gulpladebiler fra " +
             udbyderListe.length + " forhandlere og leasingselskaber" + (billigst != null ? ". Fra " + talDK(billigst) + " kr./md. uden moms" : "") +
             ". Få tilbud gratis.";

  var s_hero = [
    // 05-10-2026: på den korte forside står artiklerne i et lille modul til højre for overskriften.
    FORSIDE_NY ? '<section class="hero-ny hero-ny--artikler">' : '<section class="hero-ny">',
    FORSIDE_NY ? '<div class="hero-ny__tekst">' : '',
    '  <p class="hero-ny__over">',
    '    <span class="hero-ny__maerkat">Uafhængig af importører og forhandlere</span>',
    opdateret ? '    <span>Opdateret ' + esc(visDato(opdateret)) + '</span>' : '',
    '  </p>',
    // 05-10-2026: brugerens forslag, gennemgået af tekstredaktoer. "Erhvervsleasing"
    // og prisen står nu i H1; antallet af udbydere står stadig i title og description.
    '  <h1>Find og sammenlign erhvervsleasing af ' + biler.length + ' varebiler'
    + (billigst != null ? ' fra ' + talDK(billigst) + ' kr./md.' : '') + '</h1>',
    // Spredningen regnes ud af tilbuddene (største forskel pr. md. på samme
    // model), så påstanden altid passer med tabellen.
    '  <p class="hero-ny__manchet">'
    + (prisSpredning(biler, data) >= 500 ? 'Prisen på den samme model kan svinge med over ' + talDK(prisSpredning(biler, data)) + ' kr. om måneden fra tilbud til tilbud. ' : '')
    + 'Her har vi samlet <strong>' + antalTilbud + ' tilbud</strong> på <strong>' + biler.length + ' varebiler</strong>, '
    + 'så du kan sammenligne udbetaling, løbetid, kilometer om året og hvad der følger med, side om side. Alle priser er uden moms.</p>',
    koebLinjeHTML(data),
    FORSIDE_NY ? '</div>' + heroArtiklerHTML(antalTilbud, nyesteNyhed) : '',
    '</section>',
  ].join("\n");

  var s_baand = [
    // Artikelbaandet. \xc9t stort kort med sidens egen tese og fire korte
    // indgange ved siden af - samme opbygning som paa leasio.dk.
    //
    // Baandet er en afrundet flade inde i spalten, ikke fuld bredde. Fuld
    // bredde kraever 100vw, og paa Windows taeller rullepanelet med i vw, saa
    // siden ville faa vandret scroll. Det er en daarlig handel for en baggrund.
    '<section class="baand">',
    '  <div class="baand__hoved">',
    '    <h2 class="baand__navn">Artikler og guides</h2>',
    '    <a href="/haandbogen/">Se alle</a>',
    '  </div>',
    '  <div class="artikelbaand">',
    '    <a class="artikelkort artikelkort--stor" href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">',
    '      <span class="artikelkort__emne">Leasingaftalen</span>',
    '      <h3>Det står ikke i leasingtilbuddet</h3>',
    '      <p>Gennemgang af alle ' + antalTilbud + ' tilbud: hvad ydelsen dækker, '
    + 'og hvilke vilkår der ikke står i annoncen.</p>',
    '    </a>',
    [["Reglerne", "Hvad må du køre i en varebil på gule plader?",
      "/haandbogen/hvad-maa-du-koere-i-en-varebil-paa-gule-plader/"],
     ["Moms", "Hvornår får du fuldt momsfradrag?",
      "/haandbogen/moms-paa-varebil/"],
     nyesteNyhed ? ["Nyhed", nyesteNyhed.h1, videnSti(nyesteNyhed)] : null,
     ["Uden for ydelsen", "Hvad dækker leasingprisen ikke?",
      "/til-varebilen/"]].filter(Boolean).map(function (x) {
      return '    <a class="artikelkort" href="' + x[2] + '">' +
        '<span class="artikelkort__emne">' + esc(x[0]) + '</span>' +
        '<h3>' + esc(x[1]) + '</h3></a>';
    }).join("\n"),
    '  </div>',
    // De spørgsmål, folk stiller i grupper og på Reddit, med et link hver.
    '  <p class="maerkelinks" style="margin-top:.75rem">' + [
      ["Må du tage varebilen med hjem?", "tage-varebilen-med-hjem"],
      ["Dagsbevis", "dagsbevis-varebil"],
      ["Elvarebil på hvide plader", "elvarebil-paa-hvide-plader"],
      ["Regler for mandskabsvogne", "mandskabsvogn-regler"],
      ["Firmabil til skole og kursus", "firmabil-til-skole-og-kursus"],
      ["Må familien køre med?", "familie-i-firmabilen-paa-gule-plader"]
    ].map(function (x) { return '<a href="/haandbogen/' + x[1] + '/">' + esc(x[0]) + '</a>'; }).join('') + '</p>',
    '</section>',
  ].join("\n");

  var s_vaelger = [
    '<section class="vaelger" id="varebiler">',
    '  <div class="vaelger__top">',
    '  <div class="chips" role="group" aria-label="Filtrér efter type">',
    chipsHTML,
    '  </div>',
    '    <div class="vaelger__hoejre">',
    '    <label class="sortvalg"><span>Sortér</span><select id="fSort">' +
      '<option value="maaned">Pris pr. md.</option><option value="nypris">Købspris</option><option value="nyttelast">Nyttelast</option></select></label>',
    '    <div class="visning" role="group" aria-label="Visning">',
    '      <button type="button" data-visning="kort" aria-pressed="true">Kort</button>',
    '      <button type="button" data-visning="tabel" aria-pressed="false">Tabel</button>',
    '    </div>',
    '    </div>',
    '  </div>',
    '  <div class="vaerktoej">',
    '    <div class="filtre">',
    '      <label class="filtre__sog"><span class="skjult">Søg model, mærke eller udbyder</span>',
    '        <input type="search" id="fSog" placeholder="Søg model, mærke eller udbyder" autocomplete="off"></label>',
    valg("fMaerke", "Alle mærker", maerker.map(function (m) { return [m, m]; })).replace("Alle mærker</option>", "Alle mærker</option>"),
    valg("fDrivmiddel", "Drivmiddel", [["diesel", "Diesel"], ["el", "El"], ["plugin", "Plug-in hybrid"], ["benzin", "Benzin"]]
      .filter(function (o) { return data.varebiler.some(function (b) { return b.drivmiddel === o[0]; }); })),
    valg("fNyttelast", "Nyttelast", [[500, "mindst 500 kg"], [700, "mindst 700 kg"], [1000, "mindst 1.000 kg"]]),
    valg("fNypris", "Købspris", [[200000, "under 200.000 kr."], [250000, "under 250.000 kr."], [300000, "under 300.000 kr."]]),
    GARANTI ? valg("fGaranti", "Garanti", [[3, "mindst 3 år"], [5, "mindst 5 år"], [7, "mindst 7 år"]]) : '',
    valg("fRaekkevidde", "Rækkevidde (el)", [[250, "mindst 250 km"], [300, "mindst 300 km"], [350, "mindst 350 km"], [400, "mindst 400 km"]]),
    valg("fLeasing", "Leasingtype", [["finansiel", "Finansiel (med restværdi)"], ["operationel", "Operationel (uden restværdi)"], ["ukendt", "Type ikke oplyst"]]),
    '    </div>',
    '  </div>',
    '  <h2 class="skjult">Alle ' + biler.length + ' varebiler med aktuelle leasingtilbud</h2>',
    '  <p class="vaelger__status"><span id="vStatus" role="status">Viser alle ' + biler.length + ' modeller</span>',
    '     <span class="kilde kun-bred">Vælg to eller flere og sammenlign mål side om side</span></p>',
    '  <ul class="bilkort-grid" id="vGrid">',
    kortHTML,
    '  </ul>',
    FORSIDE_NY ? '  <p class="vaelger__mere" id="vMere" hidden><button type="button" class="knap knap--sekundaer" id="vMereKnap">Vis alle ' + biler.length + ' modeller</button></p>' : '',
    '  <p class="vaelger__intet" id="vIntet" hidden>Ingen modeller passer på de valgte filtre. <button type="button" class="linkknap" id="vNulstil">Nulstil alle filtre</button></p>',
    '  <p class="kilde" style="margin-top:1.5rem">Kortene viser det billigste tilbud på hver model. <strong>Samlet pr. md.</strong> er ydelsen plus udbetalingen fordelt over løbetiden — vores udregning af udbyderens tal. Løbetiderne er ikke ens, så se vilkårene på modelsiden. Datoen er dagen, vi hentede tilbuddet.</p>',
    '</section>',
  ].join("\n");

  var s_tabel = [
    tilbudTabelHTML(data),
  ].join("\n");

  var s_udstyr = [
    udstyrForsideHTML(data),
  ].join("\n");

  var s_brugt = [
    brugtForsideHTML(),
  ].join("\n");

  var s_udbydere = [
    '<section class="sektion--kort">',
    '  <h2>Hvad udbyderne oplyser</h2>',
    '  <p class="sektion__manchet">Hvor mange af de fem driftsposter — service og reparation, dæk, forsikring, grøn ejerafgift og vejhjælp — nævner hver udbyder? Det siger ikke noget om prisen, men om hvor komplet tilbuddet er.</p>',
    '  <ul class="udbydere">',
    udbydereHTML,
    '  </ul>',
    '</section>',
  ].join("\n");

  var s_ydelse = [
    // De to haardeste tal paa hele siden staar her, fordi de er det bedste
    // argument for, at den annoncerede ydelse ikke er prisen. Tallene regnes
    // ud af tabellen, saa de ikke kan blive forkerte.
    '<section class="sektion--kort">',
    '  <h2>Det, ydelsen ikke dækker</h2>',
    '  <p class="sektion__manchet"><strong>Ingen af de ' + alle.length +
      ' tilbud inkluderer forsikring eller dæk.</strong> De kommer oven i ' +
      'månedsprisen — sammen med indretning og, på en elbil, strøm.</p>',
    '  <p class="maerkelinks">' +
      '<a href="/til-varebilen/forsikring/">Forsikring</a>' +
      '<a href="/til-varebilen/vinterhjul/">Vinterhjul og dæk</a>' +
      '<a href="/til-varebilen/indretning/">Indretning</a>' +
      '<a href="/til-varebilen/el-abonnement/">El-abonnement</a>' +
      '<a href="/til-varebilen/varerumssikring/">Varerumssikring</a>' +
      '</p>',
    '  <p style="margin-top:1.25rem"><a href="/til-varebilen/">Se hele oversigten ' +
      'over det, leasingtilbuddet ikke dækker</a></p>',
    '</section>',
  ].join("\n");

  var s_erhverv = [
    '<section class="sektion--kort">',
    '  <h2>Et erhvervstilbud er ikke som et privattilbud</h2>',
    '  <p>Privatleasing har standardkontrakt, fortrydelsesret og krav om at oplyse de samlede omkostninger. Erhvervsleasing har ingen af delene.</p>',
    '  <p>Hvert selskab har sine egne vilkår, gebyrerne er sjældent offentlige, og ved aflevering vurderes bilen efter en skala, du ikke har set på forhånd.</p>',
    '  <p><strong>Månedsydelsen er sjældent hele prisen.</strong></p>',
    '</section>',
  ].join("\n");

  var s_tjek = [
    '<section class="sektion--kort" id="tilbudstjek">',
    '  <h2>Har du fået et tilbud? Så læser vi det igennem</h2>',
    '  <p class="sektion__manchet">Sammenligningen viser, hvad udbyderne annoncerer — ikke om <em>dit</em> tilbud er godt. Det kræver, at nogen læser vilkårene. Et tilbudstjek koster 695 kr. ekskl. moms. Her er det kun dig, der betaler os.</p>',
    '  <div class="kort-grid">',
    '    <div class="kort"><div class="kort__nr">1</div><h3>Regnestykket</h3><p>Hvad tilbuddet koster i alt med udbetaling, gebyrer og det, ydelsen ikke dækker.</p></div>',
    '    <div class="kort"><div class="kort__nr">2</div><h3>Det der ikke står i tilbuddet</h3><p>Fjorten forhold, fra prisen pr. ekstra kilometer til hvem der vurderer bilen ved aflevering.</p></div>',
    '    <div class="kort"><div class="kort__nr">3</div><h3>Faldgruberne</h3><p>For lille kilometerpakke, risikoen ved restværdien og prisen for at komme ud før tid.</p></div>',
    '    <div class="kort"><div class="kort__nr">4</div><h3>Spørgsmålene</h3><p>Klar til at sætte ind i en mail til leasingselskabet.</p></div>',
    '  </div>',
    '  <p class="sektion__knapper"><a href="/tilbudstjek/" class="knap knap--primaer">Tjek dit tilbud</a>',
    '     <a href="/faa-tilbud/" class="knap knap--sekundaer">Eller lad os hente tilbud — gratis</a></p>',
    '</section>',
  ].join("\n");

  var s_behov = [
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '  <h2>Find bilen efter behov</h2>',
    '  <p class="sektion__manchet">' + (function () {
      var n = GUIDER.map(function (g) { return guideKortHTML(g, alleTilbud(data)); }).filter(Boolean).length;
      var ord = ["Ingen", "Én", "To", "Tre", "Fire", "Fem", "Seks", "Syv", "Otte", "Ni", "Ti", "Elleve", "Tolv"][n] || String(n);
      return 'Et udvalg af vores ' + n + ' lister';
    })() + ' — efter fag, leasingform, størrelse og pris. Hver har sit kriterium skrevet ovenover.</p>',
    '  <ul class="guidegrid">',
    // 02-10-2026: et udvalg - alle 50 står grupperet på /bedste-tilbud/.
    GUIDER.filter(function (g) { return forsideGuider().indexOf(g.slug) >= 0; })
      .sort(function (a, b) { return forsideGuider().indexOf(a.slug) - forsideGuider().indexOf(b.slug); })
      .map(function (g) { return guideKortHTML(g, alleTilbud(data)); }).filter(Boolean).join(""),
    '  </ul>',
    '  <p class="sektion__knapper" style="margin-top:1.5rem"><a href="/bedste-tilbud/" class="knap knap--sekundaer">Se alle guider og rangordner</a>'
      + ' <a href="' + aaretsSti(data) + '" class="knap knap--sekundaer">Bedste varebil ' + aaretsAar(data) + '</a></p>',
    '</section>',
  ].join("\n");

  var s_faq = [
    '<section class="sektion--kort faq">',
    '  <h2>Spørgsmål om erhvervsleasing af varebiler</h2>',
    faqHTML,
    '  <p style="margin-top:1.5rem">Hvis du vil se, hvordan det foregår trin for trin, kan du læse <a href="/haandbogen/leasing-af-varebil-til-erhverv/">guiden om leasing af varebil til erhverv</a>. Vi har også en guide om <a href="/haandbogen/finansiel-og-operationel-leasing/">forskellen på finansiel og operationel leasing</a>.</p>',
    '</section>',
  ].join("\n");

  var s_ingen = [
    '<section class="sektion--kort">',
    '  <h2>Ingen udbyder kan købe en placering</h2>',
    '  <p>Rækkefølgen kan ikke købes. Ingen betalte placeringer, ingen affiliatehonorarer, ingen aftaler om omtale. Priserne kommer fra udbydernes egne prislister.</p>',
    '  <p>Branchen betaler os to steder: <a href="/faa-tilbud/">Når vi henter tilbud hjem</a>, betaler forhandleren eller leasingselskabet for henvendelsen — samme beløb fra alle, uanset om du skriver under. Og <a href="/brugte-varebiler/">de brugte varebiler</a> formidler vi for en forhandler, vi samarbejder med — også dér kan vi få betaling for henvendelsen.</p>',
    '  <p><strong>Derfor kan vi kalde et tilbud dårligt — også et, vi selv har hentet hjem.</strong></p>',
    '  <p style="margin-top:1.5rem"><a href="/saadan-tjener-vi-penge/">Læs mere om hvordan vi tjener penge</a></p>',
    '</section>',
  ].join("\n");

  var s_forbehold = [
    '<div class="forbehold">',
    '  <h2>Om tallene på denne side</h2>',
    '  <p>Priserne er vejledende, ekskl. moms og hentet fra udbydernes prislister og annoncer på datoen ved hvert tilbud. Forbehold for ændringer, udsolgte biler og fejl.</p>',
    '  <p>Tekniske mål kommer fra producenternes danske prislister og gælder udgaven på modelsiden. Mangler et mål, står feltet tomt — vi gætter ikke.</p>',
    '  <p>Bilbilleder tilhører producenterne og bruges som illustration.</p>',
    '  <p>Siden er ikke skatte-, revisions- eller juridisk rådgivning. Moms og afgifter afhænger af din virksomheds forhold.</p>',
    '</div>',
  ].join("\n");

  // 05-10-2026: GULPLADE_FORSIDE_NY=1 giver en kortere forside: tilbuddene først, derefter
  // svarene (FAQ, guider efter behov, tilbudstjek). Tabellen med alle tilbud flytter til /alle-tilbud/.
  var s_alleLink = [
    '<section class="sektion--kort" id="alle-tilbud">',
    '  <h2>Alle ' + antalTilbud + ' tilbud i én tabel</h2>',
    '  <p class="sektion__manchet">Kortene viser det billigste tilbud på hver model. I tabellen kan du se alle ' + antalTilbud + ' tilbud fra ' + udbyderListe.length + ' forhandlere og leasingselskaber og sortere dem efter pris, udbetaling og løbetid.</p>',
    '  <p class="sektion__knapper"><a href="/alle-tilbud/" class="knap knap--primaer">Se alle ' + antalTilbud + ' tilbud</a></p>',
    '</section>'
  ].join("\n");

  var raekkefoelge = FORSIDE_NY
    ? [s_hero, s_vaelger, s_alleLink, s_faq, s_behov, s_tjek, s_ydelse, s_erhverv, s_udbydere, s_udstyr, s_brugt, s_ingen, s_forbehold]
    : [s_hero, s_baand, s_vaelger, s_tabel, s_udstyr, s_brugt, s_udbydere, s_ydelse, s_erhverv, s_tjek, s_behov, s_faq, s_ingen, s_forbehold];

  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/", JSON.stringify(schema, null, 2)),
    header(),
    '<main id="indhold" class="forside">',

    raekkefoelge.join("\n"),

    '</main>',

    // ── Sammenligningsbar og -modal ──
    '<div class="smb-bar" id="smbBar" role="region" aria-label="Valgt til sammenligning">',
    '  <div class="smb-bar__venstre">',
    '    <span class="smb-bar__navn">Til sammenligning</span>',
    '    <div class="smb-bar__emner" id="smbEmner"></div>',
    '  </div>',
    '  <div class="smb-bar__hoejre">',
    '    <button type="button" class="smb-bar__ryd" id="smbRyd">Ryd</button>',
    '    <button type="button" class="knap knap--gul" id="smbAabn">Sammenlign <span id="smbAntal"></span></button>',
    '  </div>',
    '</div>',

    '<div class="smb-bg" id="smbBg" role="dialog" aria-modal="true" aria-labelledby="smbTitel" hidden>',
    '  <div class="smb-modal">',
    '    <div class="smb-modal__hoved">',
    '      <h2 id="smbTitel">Sammenligning</h2>',
    // 06-10-2026 (preview): udskriv eller gem som PDF, og et link, der henter sammenligningen igen (?smb=...).
    KOEB_NY ? '      <div class="smb-print"><button type="button" class="beregner__lille" id="smbPrint">Udskriv eller gem som PDF</button>' +
      '<button type="button" class="beregner__lille" id="smbLink">Kopiér link til sammenligningen</button></div>' : '',
    '      <button type="button" class="smb-modal__luk" id="smbLuk" aria-label="Luk sammenligning">&times;</button>',
    '    </div>',
    '    <div class="smb-modal__krop" id="smbKrop"></div>',
    (SMB_NY
      ? '    <details class="smb-modal__fod"><summary>Sådan læser du tabellen</summary><p>Prikken markerer den bedste værdi i rækken, hvor det kan afgøres entydigt. Tomme felter betyder, at producenten eller udbyderen ikke oplyser tallet — de er ikke nul. Pris, udbetaling, løbetid, kilometertal og oplysningsgrad gælder det billigste annoncerede tilbud på hver model og er ekskl. moms. Mål, vægt, CO2, ejerafgift og vejledende nypris gælder den udgave af bilen, der står i kolonnehovedet. Ved udvendig højde, udvendig længde og læssehøjde markerer prikken det <em>laveste</em> tal, fordi en lav bil kommer ind flere steder og en lav læssekant er nemmere at løfte op på. Venderadius og vendediameter vises ikke her: producenterne opgiver det ene eller det andet, og de to mål kan ikke stilles op mod hinanden. Udstyret gælder det niveau, det billigste tilbud er på; kan det ikke afgøres ud fra bilens navn, vises det billigste niveau. Priser på tilvalg er producentens listepris ekskl. moms. <a href="/udstyr/">Se udstyret på tværs af alle modeller</a>.</p></details>'
      : '    <p class="smb-modal__fod">Prikken markerer den bedste værdi i rækken, hvor det kan afgøres entydigt. Tomme felter betyder, at producenten eller udbyderen ikke oplyser tallet — de er ikke nul. Pris, udbetaling, løbetid, kilometertal og oplysningsgrad gælder det billigste annoncerede tilbud på hver model og er ekskl. moms. Mål, vægt, CO2, ejerafgift og vejledende nypris gælder den udgave af bilen, der står i kolonnehovedet. Ved udvendig højde, udvendig længde og læssehøjde markerer prikken det <em>laveste</em> tal, fordi en lav bil kommer ind flere steder og en lav læssekant er nemmere at løfte op på. Venderadius og vendediameter vises ikke her: producenterne opgiver det ene eller det andet, og de to mål kan ikke stilles op mod hinanden. Udstyret gælder det niveau, det billigste tilbud er på; kan det ikke afgøres ud fra bilens navn, vises det billigste niveau. Priser på tilvalg er producentens listepris ekskl. moms. <a href="/udstyr/">Se udstyret på tværs af alle modeller</a>.</p>'),
    '  </div>',
    '</div>',

    footer(),
    forsideScript(smbData),
    FORSIDE_NY ? '' : tilbudTabelScript(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// Filtrering, sortering, visningsskift og sammenligning. Scriptet rører kun
// rækkefølge og synlighed for kortene; sammenligningstabellen bygges ud af den
// samme data som kortene er renderet fra.
function forsideScript(smbData) {
  var json = JSON.stringify(smbData).replace(/</g, "\\u003c");
  var raekker = JSON.stringify(SMB_RAEKKER.map(function (r) {
    return { navn: r.navn, felt: r.felt, enhed: r.enhed, retning: r.retning, tekst: !!r.tekst, gruppe: r.gruppe };
  })).replace(/</g, "\\u003c");
  var grupper = JSON.stringify(SMB_GRUPPER).replace(/</g, "\\u003c");

  return [
    '<script>',
    '(function () {',
    '  var DATA = ' + json + ';',
    '  var RAEKKER = ' + raekker + ';',
    '  var UDSTYR_POSTER = ' + JSON.stringify(UDSTYR ? UDSTYR.poster.map(function (p) { return { id: p.id, navn: p.navn }; }) : []).replace(/</g, "\\u003c") + ';',
    '  var MAKS = 4;',
    '  var SMB_NY = ' + (SMB_NY ? 'true' : 'false') + ';',
    '  var GRUPPER = ' + grupper + ';',
    '  var smbAabne = {}; GRUPPER.concat([{ id: "udstyr", aaben: false }]).forEach(function (g) { smbAabne[g.id] = g.aaben; });',
    '  var smbForskelle = false;',
    '',
    '  var grid = document.getElementById("vGrid");',
    '  if (!grid) return;',
    '  var kort = Array.prototype.slice.call(grid.children);',
    '  var status = document.getElementById("vStatus");',
    '  var intet = document.getElementById("vIntet");',
    '  var sog = document.getElementById("fSog");',
    '  // Uden filter viser forsiden kun de første kort. Et filter eller knappen viser resten.',
    '  var GRAENSE = ' + (FORSIDE_NY ? FORSIDE_KORT : 0) + ', udvidet = false;',
    '  // Paa mobilen staar kortene under hinanden, saa der vises halvt saa mange.',
    '  if (GRAENSE && window.matchMedia && window.matchMedia("(max-width: 640px)").matches) GRAENSE = Math.ceil(GRAENSE / 2);',
    '  var mere = document.getElementById("vMere");',
    '  var mereKnap = document.getElementById("vMereKnap");',
    '  if (mereKnap) mereKnap.addEventListener("click", function () { udvidet = true; tegn(); });',
    '',
    '  var CHIP = {',
    '    alle:     function () { return true; },',
    '    pizzabil: function (d) { return d.stoerrelse === "pizzabil"; },',
    '    mellem:   function (d) { return d.stoerrelse === "mellem"; },',
    '    stor:     function (d) { return d.stoerrelse === "stor"; },',
    '    pickup:   function (d) { return d.karrosseri === "pickup"; },',
    '    ladvogn:  function (d) { return d.karrosseri === "ladvogn"; },',
    '    ladvognSlut: null',
    '  };',
    '',
    '  var valgt = { chip: "alle", maerke: "", drivmiddel: "", nyttelast: "", nypris: "", udstyr: "", garanti: "", raekkevidde: "",',
    '                leasingtyper: [],',
    '                sog: "", sort: "maaned", visning: "kort" };',
    '  var smb = [];',
    '',
    '  function t(v) { var n = parseFloat(v); return isNaN(n) ? -1 : n; }',
    '',
    '  /* ── Filtrering ── */',
    '  function passer(el) {',
    '    var d = el.dataset;',
    '    if (!(CHIP[valgt.chip] || CHIP.alle)(d)) return false;',
    '    if (valgt.maerke && d.maerke !== valgt.maerke) return false;',
    '    if (valgt.drivmiddel && d.drivmiddel !== valgt.drivmiddel) return false;',
    '    if (valgt.leasingtyper.length) {',
    '      var haves = (d.leasingtyper || "").split("|");',
    '      var traf = false;',
    '      for (var i = 0; i < valgt.leasingtyper.length; i++) {',
    '        if (haves.indexOf(valgt.leasingtyper[i]) >= 0) { traf = true; break; }',
    '      }',
    '      if (!traf) return false;',
    '    }',
    '    if (valgt.nyttelast && t(d.nyttelast) < parseFloat(valgt.nyttelast)) return false;',
    '    // En model uden oplyst nypris kan ikke opfylde et prisloft og holdes ude.',
    '    if (valgt.nypris && (t(d.nypris) < 0 || t(d.nypris) > parseFloat(valgt.nypris))) return false;',
    '    if (valgt.udstyr && (" " + (d.udstyr || "") + " ").indexOf(" " + valgt.udstyr + " ") < 0) return false;',
    '    if (valgt.garanti && t(d.garanti) < parseFloat(valgt.garanti)) return false;',
    '    if (valgt.raekkevidde && t(d.raekkevidde) < parseFloat(valgt.raekkevidde)) return false;',
    '    if (valgt.sog && d.sog.indexOf(valgt.sog) < 0) return false;',
    '    return true;',
    '  }',
    '',
    '  // Et filter paa nyttelast eller nypris holder de modeller ude, hvor vi',
    '  // ikke har tallet - de kan ikke bevise, at de klarer graensen. Men det',
    '  // skete tavst, og brugeren kunne ikke se forskel paa "for lille" og "vi',
    '  // ved det ikke". Nu staar det i statuslinjen.',
    '  function utalte() {',
    '    var ud = [];',
    '    [["nyttelast", "nyttelast"], ["nypris", "nypris"]].forEach(function (p) {',
    '      if (!valgt[p[0]]) return;',
    '      var n = kort.filter(function (el) { return t(el.dataset[p[1]]) < 0; }).length;',
    '      if (n) ud.push(n + (n === 1 ? " model" : " modeller") + " uden oplyst " + p[0]);',
    '    });',
    '    return ud.length ? " \\u2014 " + ud.join(" og ") + " er ikke med" : "";',
    '  }',
    '',
    '  // Nyttelast, lastrum og dækning sorteres højest først; priser lavest først.',
    '  // Manglende tal ligger altid sidst.',
    '  var FALDENDE = { nyttelast: 1, volumen: 1, daekning: 1 };',
    '  function noegle(el) { return t(el.dataset[valgt.sort]); }',
    '',
    '  function tegn() {',
    '    var synlige = kort.filter(passer);',
    '    var fald = !!FALDENDE[valgt.sort];',
    '    synlige.sort(function (a, b) {',
    '      var x = noegle(a), y = noegle(b);',
    '      if (x < 0 && y < 0) return 0;',
    '      if (x < 0) return 1;',
    '      if (y < 0) return -1;',
    '      return fald ? y - x : x - y;',
    '    });',
    '    kort.forEach(function (el) { el.hidden = true; });',
    '    synlige.forEach(function (el) { el.hidden = false; grid.appendChild(el); });',
    '    var graense = GRAENSE && !udvidet && synlige.length === kort.length ? GRAENSE : 0;',
    '    if (graense) synlige.slice(graense).forEach(function (el) { el.hidden = true; });',
    '    if (mere) mere.hidden = !graense;',
    '    status.textContent = (graense',
    '      ? "Viser " + graense + " af " + kort.length + " modeller"',
    '      : synlige.length === kort.length',
    '      ? "Viser alle " + kort.length + " modeller"',
    '      : "Viser " + synlige.length + " af " + kort.length + " modeller")',
    '      + utalte();',
    '    intet.hidden = synlige.length > 0;',
    '    gemIUrl();',
    '  }',
    '',
    '  function saetTrykket(knapper, aktiv, klasse) {',
    '    knapper.forEach(function (k) {',
    '      var paa = k === aktiv;',
    '      k.setAttribute("aria-pressed", paa ? "true" : "false");',
    '      if (klasse) k.classList.toggle(klasse, paa);',
    '    });',
    '  }',
    '',
    '  /* ── Sammenligning ── */',
    '  function opdaterBar() {',
    '    var bar = document.getElementById("smbBar");',
    '    var emner = document.getElementById("smbEmner");',
    '    emner.innerHTML = "";',
    '    smb.forEach(function (id) {',
    '      var e = document.createElement("span");',
    '      e.className = "smb-bar__emne";',
    '      e.appendChild(document.createTextNode(DATA[id].navn));',
    '      var x = document.createElement("button");',
    '      x.type = "button"; x.className = "smb-bar__fjern";',
    '      x.setAttribute("aria-label", "Fjern " + DATA[id].navn);',
    '      x.innerHTML = "&times;";',
    '      x.addEventListener("click", function () { fjern(id); });',
    '      e.appendChild(x);',
    '      emner.appendChild(e);',
    '    });',
    '    document.getElementById("smbAntal").textContent = smb.length > 1 ? "(" + smb.length + ")" : "";',
    '    document.getElementById("smbAabn").disabled = smb.length < 2;',
    '    bar.classList.toggle("smb-bar--aaben", smb.length > 0);',
    '    kort.forEach(function (el) {',
    '      var paa = smb.indexOf(el.dataset.id) >= 0;',
    '      el.classList.toggle("bilkort--valgt", paa);',
    '      var boks = el.querySelector(".smb-vaelg");',
    '      if (boks) { boks.checked = paa; boks.disabled = !paa && smb.length >= MAKS; }',
    '    });',
    '    gemIUrl();',
    '  }',
    '',
    '  function fjern(id) { smb = smb.filter(function (x) { return x !== id; }); opdaterBar(); }',
    '',
    '  function vaelg(id, paa) {',
    '    if (paa) { if (smb.indexOf(id) < 0 && smb.length < MAKS) smb.push(id); }',
    '    else smb = smb.filter(function (x) { return x !== id; });',
    '    opdaterBar();',
    '  }',
    '',
    '  function formatTal(v, enhed) {',
    '    if (v == null || v === "") return null;',
    '    if (typeof v === "number") return v.toLocaleString("da-DK") + enhed;',
    '    return String(v) + enhed;',
    '  }',
    '',
    '  // Ny tabel: rækkerne samlet i grupper, der kan foldes, og et valg om kun',
    '  // at vise rækker, hvor bilerne er forskellige.',
    '  function bedstAf(vaerdier, r) {',
    '    if (r.retning === 0 || r.tekst) return null;',
    '    var tal = vaerdier.filter(function (v) { return typeof v === "number"; });',
    '    if (tal.length < 2) return null;',
    '    var b = r.retning > 0 ? Math.max.apply(null, tal) : Math.min.apply(null, tal);',
    '    return tal.filter(function (v) { return v === b; }).length === 1 ? b : null;',
    '  }',
    '  function ens(vaerdier) {',
    '    if (vaerdier.some(function (v) { return v == null || v === ""; })) return false;',
    '    return vaerdier.every(function (v) { return String(v) === String(vaerdier[0]); });',
    '  }',
    '  function raekke(navn, celler, erEns) {',
    '    var tr = document.createElement("tr");',
    '    if (erEns) tr.setAttribute("data-ens", "");',
    '    var lbl = document.createElement("th");',
    '    lbl.scope = "row"; lbl.className = "smb-tabel__navn"; lbl.textContent = navn;',
    '    tr.appendChild(lbl);',
    '    celler.forEach(function (td) { tr.appendChild(td); });',
    '    return tr;',
    '  }',
    '  function gruppe(tabel, id, navn, raekker) {',
    '    if (!raekker.length) return;',
    '    var tb = document.createElement("tbody");',
    '    tb.className = "smb-gruppe" + (smbAabne[id] ? "" : " smb-gruppe--lukket");',
    '    var hr = document.createElement("tr"); hr.className = "smb-gruppe__hoved";',
    '    var th = document.createElement("th"); th.colSpan = smb.length + 1;',
    '    var k = document.createElement("button"); k.type = "button"; k.className = "smb-gruppe__knap";',
    '    k.setAttribute("aria-expanded", smbAabne[id] ? "true" : "false");',
    '    var nEns = raekker.filter(function (r) { return r.hasAttribute("data-ens"); }).length;',
    '    var ant = document.createElement("span"); ant.className = "smb-gruppe__antal";',
    '    ant.textContent = raekker.length + (raekker.length === 1 ? " punkt" : " punkter") + (nEns ? ", " + (nEns === raekker.length ? "alle" : nEns) + " er ens" : "");',
    '    k.appendChild(document.createTextNode(navn)); k.appendChild(ant);',
    '    k.addEventListener("click", function () {',
    '      smbAabne[id] = !smbAabne[id];',
    '      tb.classList.toggle("smb-gruppe--lukket", !smbAabne[id]);',
    '      k.setAttribute("aria-expanded", smbAabne[id] ? "true" : "false");',
    '    });',
    '    th.appendChild(k); hr.appendChild(th); tb.appendChild(hr);',
    '    if (nEns === raekker.length) tb.setAttribute("data-ens", "");',
    '    raekker.forEach(function (r) { tb.appendChild(r); });',
    '    tabel.appendChild(tb);',
    '  }',
    '',
    '  function bygNy() {',
    '    var krop = document.getElementById("smbKrop");',
    '    var tabel = document.createElement("table");',
    '    tabel.className = "smb-tabel smb-tabel--ny" + (smbForskelle ? " smb-tabel--forskelle" : "");',
    '    tabel.style.setProperty("--smb-n", smb.length);',
    '    if (smb.length > 2) tabel.classList.add("smb-tabel--mange");',
    '',
    '    var thead = document.createElement("thead");',
    '    var hr = document.createElement("tr");',
    '    var hjoerne = document.createElement("th");',
    '    hjoerne.className = "smb-tabel__hjoerne";',
    '    var lab = document.createElement("label"); lab.className = "smb-forskelle";',
    '    var cb = document.createElement("input"); cb.type = "checkbox"; cb.checked = smbForskelle;',
    '    cb.addEventListener("change", function () { smbForskelle = cb.checked; tabel.classList.toggle("smb-tabel--forskelle", smbForskelle); });',
    '    lab.appendChild(cb); lab.appendChild(document.createTextNode(" Vis kun forskelle"));',
    '    hjoerne.appendChild(lab);',
    '    hr.appendChild(hjoerne);',
    '    var billigst = bedstAf(smb.map(function (id) { return DATA[id].maaned; }), { retning: -1 });',
    '    smb.forEach(function (id) {',
    '      var d = DATA[id];',
    '      var th = document.createElement("th"); th.scope = "col";',
    '      var a = document.createElement("a"); a.href = d.sti; a.textContent = d.navn; a.className = "smb-kol__navn";',
    '      th.appendChild(a);',
    '      if (d.variant) { var s = document.createElement("small"); s.textContent = d.variant; th.appendChild(s); }',
    '      if (d.maaned != null) {',
    '        var p = document.createElement("span");',
    '        p.className = "smb-kol__pris" + (billigst != null && d.maaned === billigst ? " bedst" : "");',
    '        p.textContent = formatTal(d.maaned, " kr./md.");',
    '        th.appendChild(p);',
    '      }',
    '      var f = document.createElement("button"); f.type = "button"; f.className = "smb-kol__fjern";',
    '      f.textContent = "Fjern"; f.setAttribute("aria-label", "Fjern " + d.navn + " fra sammenligningen");',
    '      f.addEventListener("click", function () { fjern(id); if (smb.length < 2) luk(); else bygNy(); });',
    '      th.appendChild(f);',
    '      hr.appendChild(th);',
    '    });',
    '    thead.appendChild(hr);',
    '    tabel.appendChild(thead);',
    '',
    '    GRUPPER.forEach(function (g) {',
    '      var rk = [];',
    '      RAEKKER.forEach(function (r) {',
    '        if (r.gruppe !== g.id) return;',
    '        var v = smb.map(function (id) { return DATA[id][r.felt]; });',
    '        if (v.every(function (x) { return x == null || x === ""; })) return;',
    '        var b = bedstAf(v, r);',
    '        rk.push(raekke(r.navn, v.map(function (x) {',
    '          var td = document.createElement("td");',
    '          var vis = formatTal(x, r.enhed);',
    '          if (vis == null) { td.className = "tom"; td.textContent = "—"; }',
    '          else { td.textContent = vis; if (b != null && x === b) td.className = "bedst"; }',
    '          return td;',
    '        }), ens(v)));',
    '      });',
    '      gruppe(tabel, g.id, g.navn, rk);',
    '    });',
    '',
    '    if (smb.some(function (id) { return DATA[id].udstyr; })) {',
    '      var rk = [];',
    '      var niv = smb.map(function (id) { return DATA[id].udstyrNiveau || null; });',
    '      rk.push(raekke("Udstyrsniveau", niv.map(function (x) {',
    '        var td = document.createElement("td");',
    '        td.textContent = x || "—"; if (!x) td.className = "tom";',
    '        return td;',
    '      }), false));',
    '      UDSTYR_POSTER.forEach(function (p) {',
    '        var v = smb.map(function (id) { return DATA[id].udstyr ? DATA[id].udstyr[p.id] : null; });',
    '        if (v.every(function (x) { return x == null; })) return;',
    '        var nStd = v.filter(function (x) { return x === "Standard"; }).length;',
    '        rk.push(raekke(p.navn, v.map(function (x) {',
    '          var td = document.createElement("td");',
    '          if (x == null) { td.className = "tom"; td.textContent = "Ikke oplyst"; }',
    '          else { td.textContent = x; if (x === "Standard" && nStd < v.length) td.className = "bedst"; }',
    '          return td;',
    '        }), ens(v)));',
    '      });',
    '      gruppe(tabel, "udstyr", "Udstyr", rk);',
    '    }',
    '',
    '    krop.innerHTML = "";',
    '    krop.appendChild(tabel);',
    '  }',
    '',
    '  function byg() {',
    '    if (SMB_NY) return bygNy();',
    '    var krop = document.getElementById("smbKrop");',
    '    var tabel = document.createElement("table");',
    '    tabel.className = "smb-tabel";',
    '',
    '    var thead = document.createElement("thead");',
    '    var hr = document.createElement("tr");',
    '    hr.appendChild(document.createElement("th"));',
    '    smb.forEach(function (id) {',
    '      var th = document.createElement("th");',
    '      var a = document.createElement("a");',
    '      a.href = DATA[id].sti; a.textContent = DATA[id].navn;',
    '      th.appendChild(a);',
    '      if (DATA[id].variant) {',
    '        var s = document.createElement("small");',
    '        s.textContent = DATA[id].variant;',
    '        th.appendChild(s);',
    '      }',
    '      hr.appendChild(th);',
    '    });',
    '    thead.appendChild(hr);',
    '    tabel.appendChild(thead);',
    '',
    '    var tbody = document.createElement("tbody");',
    '    RAEKKER.forEach(function (r) {',
    '      var vaerdier = smb.map(function (id) { return DATA[id][r.felt]; });',
    '      if (vaerdier.every(function (v) { return v == null || v === ""; })) return;',
    '',
    '      var bedst = null;',
    '      if (r.retning !== 0 && !r.tekst) {',
    '        var tal = vaerdier.filter(function (v) { return typeof v === "number"; });',
    '        if (tal.length > 1) {',
    '          var b = r.retning > 0 ? Math.max.apply(null, tal) : Math.min.apply(null, tal);',
    '          // Markér kun hvis værdien er entydigt bedst.',
    '          if (tal.filter(function (v) { return v === b; }).length === 1) bedst = b;',
    '        }',
    '      }',
    '',
    '      var tr = document.createElement("tr");',
    '      var lbl = document.createElement("td");',
    '      lbl.className = "smb-tabel__navn";',
    '      lbl.textContent = r.navn;',
    '      tr.appendChild(lbl);',
    '      vaerdier.forEach(function (v) {',
    '        var td = document.createElement("td");',
    '        var vis = formatTal(v, r.enhed);',
    '        if (vis == null) { td.className = "tom"; td.textContent = "—"; }',
    '        else {',
    '          td.textContent = vis;',
    '          if (bedst != null && v === bedst) td.className = "bedst";',
    '        }',
    '        tr.appendChild(td);',
    '      });',
    '      tbody.appendChild(tr);',
    '    });',
    '',
    '    // Udstyr: tekst, ikke tal. "Standard" faar prikken, hvis ikke alle har det.',
    '    if (smb.some(function (id) { return DATA[id].udstyr; })) {',
    '      var gr = document.createElement("tr");',
    '      gr.className = "smb-tabel__gruppe";',
    '      var gt = document.createElement("th");',
    '      gt.colSpan = smb.length + 1; gt.textContent = "Udstyr";',
    '      gr.appendChild(gt); tbody.appendChild(gr);',
    '      var nr = document.createElement("tr");',
    '      var nl = document.createElement("td"); nl.className = "smb-tabel__navn"; nl.textContent = "Udstyrsniveau";',
    '      nr.appendChild(nl);',
    '      smb.forEach(function (id) {',
    '        var td = document.createElement("td");',
    '        td.textContent = DATA[id].udstyrNiveau || "—";',
    '        if (!DATA[id].udstyrNiveau) td.className = "tom";',
    '        nr.appendChild(td);',
    '      });',
    '      tbody.appendChild(nr);',
    '      UDSTYR_POSTER.forEach(function (p) {',
    '        var v = smb.map(function (id) { return DATA[id].udstyr ? DATA[id].udstyr[p.id] : null; });',
    '        if (v.every(function (x) { return x == null; })) return;',
    '        var nStd = v.filter(function (x) { return x === "Standard"; }).length;',
    '        var tr = document.createElement("tr");',
    '        var lbl = document.createElement("td");',
    '        lbl.className = "smb-tabel__navn"; lbl.textContent = p.navn;',
    '        tr.appendChild(lbl);',
    '        v.forEach(function (x) {',
    '          var td = document.createElement("td");',
    '          if (x == null) { td.className = "tom"; td.textContent = "Ikke oplyst"; }',
    '          else { td.textContent = x; if (x === "Standard" && nStd < v.length) td.className = "bedst"; }',
    '          tr.appendChild(td);',
    '        });',
    '        tbody.appendChild(tr);',
    '      });',
    '    }',
    '    tabel.appendChild(tbody);',
    '',
    '    krop.innerHTML = "";',
    '    krop.appendChild(tabel);',
    '  }',
    '',
    '  var bg = document.getElementById("smbBg");',
    '  var sidstFokus = null;',
    '',
    '  function aabn() {',
    '    if (smb.length < 2) return;',
    '    byg();',
    '    sidstFokus = document.activeElement;',
    '    bg.hidden = false;',
    '    bg.classList.add("smb-bg--aaben");',
    '    document.body.style.overflow = "hidden";',
    '    document.getElementById("smbLuk").focus();',
    '  }',
    '  function luk() {',
    '    bg.classList.remove("smb-bg--aaben");',
    '    bg.hidden = true;',
    '    document.body.style.overflow = "";',
    '    if (sidstFokus && sidstFokus.focus) sidstFokus.focus();',
    '  }',
    '',
    '  document.getElementById("smbAabn").addEventListener("click", aabn);',
    '  document.getElementById("smbLuk").addEventListener("click", luk);',
    '  var smbPrint = document.getElementById("smbPrint"), smbLink = document.getElementById("smbLink");',
    '  if (smbPrint) smbPrint.addEventListener("click", function () {',
    '    var af = function () { document.documentElement.classList.remove("udskriv-smb"); };',
    '    document.documentElement.classList.add("udskriv-smb");',
    '    window.addEventListener("afterprint", af, { once: true });',
    '    window.print(); setTimeout(af, 1500);',
    '  });',
    '  if (smbLink) smbLink.addEventListener("click", function () {',
    '    var u = location.origin + location.pathname + "?smb=" + smb.join(",") + "#varebiler", t = smbLink.textContent;',
    '    var ok = function () { smbLink.textContent = "Linket er kopieret"; setTimeout(function () { smbLink.textContent = t; }, 2000); };',
    '    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(ok, function () { window.prompt("Kopiér linket:", u); });',
    '    else window.prompt("Kopiér linket:", u);',
    '  });',
    '  document.getElementById("smbRyd").addEventListener("click", function () { smb = []; opdaterBar(); });',
    '  bg.addEventListener("click", function (e) { if (e.target === bg) luk(); });',
    '  document.addEventListener("keydown", function (e) {',
    '    if (bg.hidden) return;',
    '    if (e.key === "Escape") { luk(); return; }',
    '    if (e.key !== "Tab") return;',
    '    // Hold tabulator inde i dialogen, saa baggrunden ikke kan naas',
    '    var kan = bg.querySelectorAll("a[href], button:not([disabled])");',
    '    if (!kan.length) return;',
    '    var foerste = kan[0], sidste = kan[kan.length - 1];',
    '    if (e.shiftKey && document.activeElement === foerste) { e.preventDefault(); sidste.focus(); }',
    '    else if (!e.shiftKey && document.activeElement === sidste) { e.preventDefault(); foerste.focus(); }',
    '  });',
    '',
    '  grid.addEventListener("change", function (e) {',
    '    if (e.target.classList.contains("smb-vaelg")) vaelg(e.target.value, e.target.checked);',
    '  });',
    '',
    '  /* ── Visning ── */',
    '  function saetVisning(v) {',
    '    valgt.visning = v;',
    '    grid.classList.toggle("bilkort-grid--tabel", v === "tabel");',
    '    gemIUrl();',
    '  }',
    '',
    '  /* ── Tilstand i adressen, så en filtreret visning kan deles ── */',
    '  var laeser = false;',
    '  function gemIUrl() {',
    '    if (laeser) return;',
    '    var p = new URLSearchParams();',
    '    if (valgt.chip !== "alle") p.set("type", valgt.chip);',
    '    if (valgt.maerke) p.set("maerke", valgt.maerke);',
    '    if (valgt.drivmiddel) p.set("drivmiddel", valgt.drivmiddel);',
    '    if (valgt.nyttelast) p.set("nyttelast", valgt.nyttelast);',
    '    if (valgt.nypris) p.set("nypris", valgt.nypris);',
    '    ["udstyr", "garanti", "raekkevidde"].forEach(function (k) { if (valgt[k]) p.set(k, valgt[k]); });',
    '    if (valgt.leasingtyper.length) p.set("leasing", valgt.leasingtyper.join(","));',
    '    if (valgt.sog) p.set("q", valgt.sog);',
    '    if (valgt.sort !== "maaned") p.set("sorter", valgt.sort);',
    '    if (valgt.visning !== "kort") p.set("visning", valgt.visning);',
    '    if (smb.length) p.set("smb", smb.join(","));',
    '    var s = p.toString();',
    '    history.replaceState(null, "", s ? "?" + s + "#varebiler" : location.pathname);',
    '  }',
    '',
    '  function laesUrl() {',
    '    var p = new URLSearchParams(location.search);',
    '    if (!p.toString()) return;',
    '    laeser = true;',
    '    if (p.get("type") && CHIP[p.get("type")]) valgt.chip = p.get("type");',
    '    ["maerke", "udbyder"].forEach(function (k) { if (p.get(k)) valgt[k] = p.get(k); });',
    '    if (p.get("drivmiddel")) valgt.drivmiddel = p.get("drivmiddel");',
    '    if (p.get("nyttelast")) valgt.nyttelast = p.get("nyttelast");',
    '    if (p.get("nypris")) valgt.nypris = p.get("nypris");',
    '    ["udstyr", "garanti", "raekkevidde"].forEach(function (k) { if (p.get(k)) valgt[k] = p.get(k); });',
    '    if (p.get("leasing")) {',
    '      valgt.leasingtyper = p.get("leasing").split(",").filter(function (x) {',
    '        return x === "finansiel" || x === "operationel" || x === "ukendt";',
    '      });',
    '    }',
    '    if (p.get("q")) valgt.sog = p.get("q").toLowerCase();',
    '    if (p.get("sorter")) valgt.sort = p.get("sorter");',
    '    if (p.get("visning")) valgt.visning = p.get("visning");',
    '    if (p.get("smb")) {',
    '      p.get("smb").split(",").forEach(function (id) {',
    '        if (DATA[id] && smb.length < MAKS) smb.push(id);',
    '      });',
    '    }',
    '',
    '    // Spejl tilstanden ud i kontrollerne',
    '    var c = document.querySelector(\'[data-chip="\' + valgt.chip + \'"]\');',
    '    if (c) saetTrykket(chips, c, "chip--valgt");',
    '    if (["maaned", "nypris", "nyttelast"].indexOf(valgt.sort) < 0) valgt.sort = "maaned";',
    '    if (fSort) fSort.value = valgt.sort;',
    '    if (fLeasing) fLeasing.value = valgt.leasingtyper.length === 1 ? valgt.leasingtyper[0] : "";',
    '    var v = document.querySelector(\'[data-visning="\' + valgt.visning + \'"]\');',
    '    if (v) saetTrykket(visninger, v, null);',
    '    if (sog) sog.value = valgt.sog;',
    '    FELTER.forEach(function (pr) {',
    '      var el = document.getElementById(pr[0]);',
    '      if (el) el.value = valgt[pr[1]];',
    '    });',
    '    ltBokse.forEach(function (b) { b.checked = valgt.leasingtyper.indexOf(b.value) >= 0; });',
    '    laeser = false;',
    '  }',
    '',
    '  /* ── Bind kontroller ── */',
    '  // De fire rullemenuer. Listen står ét sted, så læsning, binding og',
    '  // nulstilling ikke kan komme fra hinanden.',
    '  var FELTER = [["fMaerke", "maerke"], ["fDrivmiddel", "drivmiddel"],',
    '                ["fNyttelast", "nyttelast"], ["fNypris", "nypris"],',
    '                ["fUdstyr", "udstyr"], ["fGaranti", "garanti"], ["fRaekkevidde", "raekkevidde"]];',
    '',
    '  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-chip]"));',
    '  chips.forEach(function (k) {',
    '    k.addEventListener("click", function () {',
    '      valgt.chip = k.dataset.chip; saetTrykket(chips, k, "chip--valgt"); tegn();',
    '    });',
    '  });',
    '',
    '  var fSort = document.getElementById("fSort");',
    '  var fLeasing = document.getElementById("fLeasing");',
    '  if (fLeasing) fLeasing.addEventListener("change", function () { valgt.leasingtyper = fLeasing.value ? [fLeasing.value] : []; tegn(); });',
    '  if (fSort) fSort.addEventListener("change", function () { valgt.sort = fSort.value; tegn(); });',
    '',
    '  var visninger = Array.prototype.slice.call(document.querySelectorAll("[data-visning]"));',
    '  visninger.forEach(function (k) {',
    '    k.addEventListener("click", function () {',
    '      saetTrykket(visninger, k, null); saetVisning(k.dataset.visning);',
    '    });',
    '  });',
    '',
    '  FELTER.forEach(function (pr) {',
    '    var el = document.getElementById(pr[0]);',
    '    if (el) el.addEventListener("change", function () { valgt[pr[1]] = el.value; tegn(); });',
    '  });',
    '',
    '  var ltBokse = Array.prototype.slice.call(document.querySelectorAll(".lt-vaelg"));',
    '  ltBokse.forEach(function (b) {',
    '    b.addEventListener("change", function () {',
    '      valgt.leasingtyper = ltBokse.filter(function (x) { return x.checked; })',
    '        .map(function (x) { return x.value; });',
    '      tegn();',
    '    });',
    '  });',
    '',
    '  if (sog) sog.addEventListener("input", function () {',
    '    valgt.sog = sog.value.trim().toLowerCase(); tegn();',
    '  });',
    '',
    '  document.getElementById("vNulstil").addEventListener("click", function () {',
    '    valgt.chip = "alle"; valgt.sog = "";',
    '    FELTER.forEach(function (pr) { valgt[pr[1]] = ""; });',
    '    valgt.leasingtyper = [];',
    '    ltBokse.forEach(function (b) { b.checked = false; });',
    '    if (sog) sog.value = "";',
    '    FELTER.forEach(function (pr) {',
    '      var el = document.getElementById(pr[0]); if (el) el.value = "";',
    '    });',
    '    saetTrykket(chips, chips[0], "chip--valgt");',
    '    tegn();',
    '  });',
    '',
    '  laesUrl();',
    '  saetVisning(valgt.visning);',
    '  opdaterBar();',
    '  tegn();',
    // 06-10-2026 (preview): et delt link til en sammenligning åbner den med det samme.
    KOEB_NY ? '  if (/[?&]smb=/.test(location.search) && smb.length >= 2) aabn();' : '',
    '})();',
    '</script>'
  ].join("\n");
}

// ── Alle tilbud i én tabel ───────────────────────────────────────────────────
//
// Kortene ovenfor viser det BILLIGSTE tilbud pr. model. Det svarer ikke på
// "hvilken udbyder er billigst" eller "hvem oplyser mest", for de spørgsmål
// går på tværs af modeller. Derfor står hvert enkelt tilbud også her, med
// udbyder, vilkår, hvad der er inkluderet og kilden.

var TILBUD_KOL = [
  { navn: "Udbyder",        felt: "udbyder",     type: "tekst", fast: true },
  { navn: "Model",          felt: "model",       type: "tekst" },
  { navn: "Annonceret",     felt: "maaned",      enhed: " kr." },
  { navn: "Udbetaling",     felt: "udbetaling",  enhed: " kr." },
  { navn: "Samlet pr. md.", felt: "samlet",      enhed: " kr." },
  { navn: "Løbetid",        felt: "loebetid",    enhed: " mdr." },
  { navn: "Km/år",          felt: "km",          enhed: "" },
  { navn: "Type",           felt: "type",        type: "tekst" },
  { navn: "Restværdi",      felt: "restvaerdi",  enhed: " kr." },
  { navn: "Inkluderet",     felt: "inkl",        type: "tekst" },
  { navn: "Oplyst",         felt: "oplyst",      enhed: "" }
];

function tilbudTabelHTML(data) {
  var f = data.forudsaetninger;

  var raekker = [];
  data.varebiler.forEach(function (bil) {
    var sti = "/varebiler/" + slug(bil.maerke) + "/" + slug(bil.model) + "/";
    bil.tilbud.forEach(function (t) {
      var b = beregn(t, f);
      var inkl = (t.inkluderet || []).map(function (p) { return POST_ORD[p] || p; });
      var kilde = "";
      try { kilde = new URL(t.kilde_url).hostname.replace(/^www\./, ""); } catch (e) {}
      raekker.push({
        bil: bil, t: t, b: b, sti: sti, inkl: inkl, kilde: kilde,
        navn: bil.maerke + " " + bil.model
      });
    });
  });

  // Billigste samlede pris pr. md. markeres, saa raekken kan findes i en tabel
  // paa seksten linjer uden at laese alle tal.
  var laveste = raekker.reduce(function (m, r) {
    return (r.b.maanedligt != null && (m == null || r.b.maanedligt < m)) ? r.b.maanedligt : m;
  }, null);

  raekker.sort(function (a, b) {
    var x = a.b.maanedligt, y = b.b.maanedligt;
    if (x == null && y == null) return 0;
    if (x == null) return 1;
    if (y == null) return -1;
    return x - y;
  });

  var hoved = TILBUD_KOL.map(function (k) {
    return '<th scope="col"' + (k.fast ? ' class="spec-fast"' : '') +
      '><button type="button" class="spec-sorter" data-felt="' + k.felt +
      '" data-type="' + (k.type || "tal") + '">' + esc(k.navn) +
      '<span class="spec-pil"></span></button></th>';
  }).join("") + '<th scope="col">Kilde</th>';

  function td(v, enhed, klasse) {
    if (v == null) return '<td class="tom">—</td>';
    return '<td' + (klasse ? ' class="' + klasse + '"' : '') + '>' +
      esc(talDK(v) + (enhed || "")) + '</td>';
  }

  var krop = raekker.map(function (r) {
    var t = r.t, b = r.b;
    var bedst = b.maanedligt != null && b.maanedligt === laveste;
    var lav = b.daekning < 0.6 ? " daekning--lav" : "";
    var pct = Math.round(b.daekning * 100);

    return [
      '<tr',
      ' data-sort-udbyder="' + esc(t.udbyder.toLowerCase()) + '"',
      ' data-sort-model="' + esc(r.navn.toLowerCase()) + '"',
      ' data-sort-maaned="' + (t.maanedspris != null ? t.maanedspris : "") + '"',
      ' data-sort-udbetaling="' + (t.foerstegangsydelse != null ? t.foerstegangsydelse : "") + '"',
      ' data-sort-samlet="' + (b.maanedligt != null ? Math.round(b.maanedligt) : "") + '"',
      ' data-sort-loebetid="' + (t.loebetid_mdr != null ? t.loebetid_mdr : "") + '"',
      ' data-sort-km="' + (t.km_pr_aar != null ? t.km_pr_aar : "") + '"',
      ' data-sort-type="' + esc((t.leasingtype || "").toLowerCase()) + '"',
      ' data-sort-restvaerdi="' + (t.restvaerdi != null ? t.restvaerdi : "") + '"',
      ' data-sort-inkl="' + r.inkl.join(" ") + '"',
      ' data-sort-oplyst="' + b.oplystAntal + '"',
      ' data-udbyder="' + esc(t.udbyder) + '"',
      ' data-model="' + esc(r.navn) + '"',
      bedst ? ' class="tilbud-bedst"' : '',
      '>',
      '<th scope="row">' + esc(t.udbyder) +
        (bedst ? ' <span class="badge badge--ok">Lavest samlet</span>' : '') + '</th>',
      '<td class="tilbud-model"><a href="' + r.sti + '">' + esc(r.navn) + '</a>' +
        (t.variant ? '<span class="spec-variant">' + esc(t.variant) + '</span>' : '') + '</td>',
      td(t.maanedspris, " kr."),
      td(t.foerstegangsydelse, " kr."),
      b.maanedligt != null
        ? '<td class="' + (bedst ? 'bedst' : '') + '">' + esc(talDK(Math.round(b.maanedligt)) + " kr.") + '</td>'
        : '<td class="tom">—</td>',
      td(t.loebetid_mdr, " mdr."),
      (t.km_pr_aar == null && t.km_fri ? '<td>fri</td>' : td(t.km_pr_aar, "")),
      '<td class="tilbud-tekst">' + (t.leasingtype
        ? (t.leasingtype_grundlag === "restvaerdi"
            ? '<abbr class="udledt" title="Udbyderen skriver ikke hvilken type aftalen er, men oplyser en restværdi. Det er kendetegnet ved finansiel leasing.">' + esc(t.leasingtype) + '*</abbr>'
            : esc(t.leasingtype))
        : '<span class="tom">Ikke oplyst</span>') + '</td>',
      t.restvaerdi != null
        ? '<td>' + esc(talDK(t.restvaerdi) + " kr.") + '</td>'
        : '<td class="tom">—</td>',
      '<td class="tilbud-tekst">' + (r.inkl.length
        ? r.inkl.map(function (p) { return '<span class="postmaerke">' + esc(p) + '</span>'; }).join("")
        : '<span class="tom">intet oplyst</span>') + '</td>',
      '<td><span class="daekning' + lav + '">',
      '<span class="daekning__bar"><span class="daekning__fyld" style="width:' + pct + '%"></span></span>',
      '<span class="daekning__tal">' + b.oplystAntal + '/' + b.posterAntal + '</span></span></td>',
      '<td class="spec-kilde"><a href="' + esc(t.kilde_url) + '" rel="nofollow noopener" target="_blank">' +
        esc(r.kilde || "kilde") + '</a><span class="spec-variant">' + esc(t.kilde_dato || "") + '</span></td>',
      '</tr>'
    ].filter(function (l) { return l !== ''; }).join("");
  }).join("\n");

  var udbydere = raekker.map(function (r) { return r.t.udbyder; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();

  var modeller = raekker.map(function (r) { return r.navn; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();

  return [
    '<section class="sektion--kort" id="alle-tilbud">',
    '  <h2>Alle ' + raekker.length + ' tilbud fra ' + udbydere.length + ' udbydere</h2>',
    '  <p class="sektion__manchet">Her er alle tilbud, ikke kun det billigste pr. model. Klik på en kolonne for at sortere.</p>',
    '  <div class="vaerktoej">',
    '    <div class="filtre">',
    '      <label><span class="skjult">Udbyder</span><select id="tUdbyder"><option value="">Alle udbydere</option>' +
         udbydere.map(function (u) { return '<option value="' + esc(u) + '">' + esc(u) + '</option>'; }).join("") +
         '</select></label>',
    '      <label><span class="skjult">Model</span><select id="tModel"><option value="">Alle modeller</option>' +
         modeller.map(function (m) { return '<option value="' + esc(m) + '">' + esc(m) + '</option>'; }).join("") +
         '</select></label>',
    '    </div>',
    '    <span class="kilde" id="tStatus" role="status">' + raekker.length + ' tilbud</span>',
    '  </div>',
    '  <div class="spec-oversigt-wrap">',
    '    <table class="spec-oversigt" id="tilbudTabel">',
    '      <thead><tr>' + hoved + '</tr></thead>',
    '      <tbody>' + krop + '</tbody>',
    '    </table>',
    '  </div>',
    '  <p class="kilde" style="margin-top:1rem"><strong>Samlet pr. md.</strong> er ydelsen plus udbetalingen fordelt over tilbuddets løbetid. Den er ikke omregnet til fælles vilkår, så læs løbetiden med: 60 måneder giver et lavere tal end 48. <strong>Oplyst</strong> er, hvor mange af de fem driftsposter udbyderen nævner. En tankestreg betyder, at tallet ikke er oplyst.</p>',
    '</section>'
  ].join("\n");
}

function tilbudTabelScript() {
  return [
    '<script>',
    '(function () {',
    '  var tabel = document.getElementById("tilbudTabel");',
    '  if (!tabel) return;',
    '  var tbody = tabel.tBodies[0];',
    '  var alle = Array.prototype.slice.call(tbody.rows);',
    '  var status = document.getElementById("tStatus");',
    '  var fU = document.getElementById("tUdbyder");',
    '  var fM = document.getElementById("tModel");',
    '  var felt = null, faldende = false;',
    '',
    '  function vaerdi(tr, f, tekst) {',
    '    var v = tr.dataset["sort" + f.charAt(0).toUpperCase() + f.slice(1)];',
    '    if (tekst) return v || "";',
    '    if (v === "" || v == null) return null;',
    '    var n = parseFloat(v);',
    '    return isNaN(n) ? null : n;',
    '  }',
    '',
    '  function synlige() {',
    '    var u = fU ? fU.value : "", m = fM ? fM.value : "";',
    '    return alle.filter(function (tr) {',
    '      if (u && tr.dataset.udbyder !== u) return false;',
    '      if (m && tr.dataset.model !== m) return false;',
    '      return true;',
    '    });',
    '  }',
    '',
    '  function tegn() {',
    '    var v = synlige();',
    '    if (felt) {',
    '      var tekst = tabel.querySelector(\'[data-felt="\' + felt + \'"]\').dataset.type === "tekst";',
    '      v.sort(function (a, b) {',
    '        var x = vaerdi(a, felt, tekst), y = vaerdi(b, felt, tekst);',
    '        if (tekst) return faldende ? y.localeCompare(x, "da") : x.localeCompare(y, "da");',
    '        if (x == null && y == null) return 0;',
    '        if (x == null) return 1;',
    '        if (y == null) return -1;',
    '        return faldende ? y - x : x - y;',
    '      });',
    '    }',
    '    alle.forEach(function (tr) { tr.hidden = true; });',
    '    v.forEach(function (tr) { tr.hidden = false; tbody.appendChild(tr); });',
    '    status.textContent = v.length === alle.length',
    '      ? alle.length + " tilbud"',
    '      : v.length + " af " + alle.length + " tilbud";',
    '  }',
    '',
    '  Array.prototype.forEach.call(tabel.querySelectorAll(".spec-sorter"), function (k) {',
    '    k.addEventListener("click", function () {',
    '      var tekst = k.dataset.type === "tekst";',
    '      if (felt === k.dataset.felt) faldende = !faldende;',
    '      else { felt = k.dataset.felt; faldende = !tekst; }',
    '      Array.prototype.forEach.call(tabel.querySelectorAll(".spec-sorter"), function (a) {',
    '        var paa = a === k;',
    '        a.classList.toggle("spec-sorter--aktiv", paa);',
    '        a.classList.toggle("spec-sorter--fald", paa && faldende);',
    '        a.setAttribute("aria-sort", paa ? (faldende ? "descending" : "ascending") : "none");',
    '      });',
    '      tegn();',
    '    });',
    '  });',
    '',
    '  if (fU) fU.addEventListener("change", tegn);',
    '  if (fM) fM.addEventListener("change", tegn);',
    '})();',
    '</script>'
  ].join("\n");
}

// ── Landingssider ────────────────────────────────────────────────────────────
//
// Sider med købsintention: "bedste tilbud", mærke og udbyder. Alt indhold er
// beregnet fra varebiler.json, så der ikke kan opstå sider med tom eller
// opdigtet tekst. Hver rangliste oplyser sit kriterium — en "bedste"-liste
// uden oplyst kriterium er præcis den slags påstand siden kritiserer.

// Alle tilbud som én flad liste, hver med model, beregning og kilde.
// Nyttelast vises som interval, naar producenten opgiver et spaend paa mere
// end 50 kg. Under det er forskellen uden betydning for et koeb, og to tal
// ville bare stoeje. Det laveste tal er altid det der sorteres paa.
var NYTTELAST_SPAEND = 50;

function nyttelastTekst(bil) {
  var min = bil.nyttelast_kg;
  if (min == null) return bil.nyttelast_op_til_kg != null ? 'op til ' + talDK(bil.nyttelast_op_til_kg) + ' kg' : null;
  var max = bil.nyttelast_max_kg;
  if (max != null && max - min > NYTTELAST_SPAEND) {
    return talDK(min) + String.fromCharCode(8211) + talDK(max) + ' kg';
  }
  return talDK(min) + ' kg';
}

// Trækvægten som tekst. "Op til"-tal og "ingen fra fabrikken" er kun til visning:
// de står i egne felter, så de ikke vinder ranglister eller filtre.
function traekTekst(bil) {
  if (bil.anhaengervaegt_kg != null) return talDK(bil.anhaengervaegt_kg) + ' kg';
  if (bil.anhaengervaegt_op_til_kg != null) return 'op til ' + talDK(bil.anhaengervaegt_op_til_kg) + ' kg';
  if (bil.traekkrog_fabrik === false) return 'ingen fra fabrikken';
  return null;
}

function alleTilbud(data) {
  var f = data.forudsaetninger;
  var ud = [];
  data.varebiler.forEach(function (bil) {
    var sti = "/varebiler/" + slug(bil.maerke) + "/" + slug(bil.model) + "/";
    bil.tilbud.forEach(function (t) {
      var b = beregn(t, f);
      var vaert = "";
      try { vaert = new URL(t.kilde_url).hostname.replace(/^www\./, ""); } catch (e) {}
      ud.push({
        bil: bil, t: t, b: b, sti: sti, vaert: vaert,
        navn: bil.maerke + " " + bil.model,
        samlet: b.maanedligt != null ? Math.round(b.maanedligt) : null
      });
    });
  });
  return ud;
}

// En rangliste. maal() giver tallet der sorteres på; null holder rækken ude.
// lavestBedst styrer retningen. vis() formaterer den viste værdi.
function rangliste(rader, opsaet) {
  var kilde = opsaet.filtrer ? rader.filter(opsaet.filtrer) : rader;
  var med = kilde.map(function (r) { return { r: r, v: opsaet.maal(r) }; })
                 .filter(function (x) { return x.v != null && isFinite(x.v); });
  if (!med.length) return "";

  med.sort(function (a, b) {
    return (opsaet.lavestBedst ? a.v - b.v : b.v - a.v) || ((a.r.samlet || 1e9) - (b.r.samlet || 1e9));
  });
  if (opsaet.unikModel) {
    var set = {};
    med = med.filter(function (x) { if (set[x.r.bil.id]) return false; set[x.r.bil.id] = 1; return true; });
  }
  med = med.slice(0, opsaet.antal || 5);

  var poster = med.map(function (x, i) {
    var r = x.r;
    var under = [];
    if (r.t.maanedspris != null) under.push(kr(r.t.maanedspris) + " annonceret");
    if (r.t.foerstegangsydelse != null) under.push(kr(r.t.foerstegangsydelse) + " udbetaling");
    if (r.t.loebetid_mdr) under.push(r.t.loebetid_mdr + " mdr.");
    if (r.t.km_pr_aar) under.push(talDK(r.t.km_pr_aar) + " km/år"); else if (r.t.km_fri) under.push("fri km");
    if (r.t.gyldig_til) under.push("gælder til " + visDato(r.t.gyldig_til));

    return [
      '<li class="rang">',
      '  <span class="rang__nr">' + (i + 1) + '</span>',
      '  <span class="rang__krop">',
      '    <a class="rang__navn" href="' + r.sti + '">' + esc(r.navn) + '</a>',
      '    <span class="rang__udbyder">' + esc(r.t.udbyder) +
           ' · oplyser ' + r.b.oplystAntal + '/' + r.b.posterAntal + ' driftsposter</span>',
      '    <span class="rang__vilkaar">' + esc(under.join(" · ")) + '</span>',
      '  </span>',
      '  <span class="rang__tal">' + esc(opsaet.vis(x.v, r)) + '</span>',
      '</li>'
    ].join("\n");
  }).join("\n");

  return [
    '<div class="rangblok">',
    '  <h' + (opsaet.niveau || 3) + '>' + esc(opsaet.titel) + '</h' + (opsaet.niveau || 3) + '>',
    '  <p class="rangblok__kriterium"><strong>Kriterium:</strong> ' + esc(opsaet.kriterium) + '</p>',
    '  <ol class="rangliste">' + poster + '</ol>',
    opsaet.note ? '  <p class="kilde">' + esc(opsaet.note) + '</p>' : '',
    '</div>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── Guider: én landingsside pr. behov ────────────────────────────────────────
//
// Hver guide er et spørgsmål en varebilskøber faktisk stiller, og den må kun
// findes hvis der er data bag. filtrer() afgør hvilke tilbud der kvalificerer,
// maal() afgør rækkefølgen. Bliver listen tom, skrives siden ikke — en tom
// landingsside er værre end ingen.
//
// ekstra er en anden kolonne end den, der sorteres på, så læseren kan se både
// kriteriet og prisen uden at klikke videre.
var GUIDER = [
  {
    slug: "billigste-varebil",
    h1: "Billig gulpladebil: de billigste varevogne i leasing",
    svar: "Billigste gulpladebil lige nu:",
    kort: "Alle tilbud sorteret efter hvad de koster om måneden, når udbetalingen er regnet med.",
    title: "Billig gulpladebil: billigste varevogn fra %fra% kr./md.",
    desc: "Billig gulpladebil eller ny varevogn? %n% erhvervstilbud sorteret efter pris, fra %fra% kr./md. ekskl. moms — med udbetalingen fordelt over løbetiden.",
    intro: "Den annoncerede månedsydelse er ikke prisen. To tilbud til 3.000 kr. om måneden koster vidt forskelligt, hvis det ene kræver 35.000 kr. i udbetaling og det andet 60.000. Derfor sorterer vi efter månedsydelsen plus udbetalingen fordelt over tilbuddets egen løbetid.",
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    lavestBedst: true,
    kriterium: "månedsydelsen plus udbetalingen fordelt over tilbuddets egen løbetid. Lavest først.",
    faq: [
      ["Hvad er den billigste gulpladebil at lease?",
       "Den, der står øverst på siden. Vi sorterer efter månedsydelsen plus udbetalingen fordelt over løbetiden, fordi den annoncerede ydelse alene ikke siger, hvad bilen koster. Listen opdateres, når udbydernes priser ændrer sig, og datoen står ved hvert tilbud."],
      ["Hvorfor er rækkefølgen en anden end hos udbyderne?",
       "Fordi vi lægger udbetalingen oven i. Udbyderne markedsfører på den annoncerede ydelse, hvor udbetalingen står ved siden af. Vi fordeler den over løbetiden, så to tilbud kan holdes op mod hinanden."],
      ["Regner I løbetiderne om, så de bliver ens?",
       "Nej. Regner vi et tilbud på 60 måneder om til 36, får du en pris, vi selv har fundet på. Ingen forhandler eller leasingselskab tilbyder den. Løbetiden står ved hvert tilbud og skal læses med."],
      ["Er priserne med eller uden moms?",
       "Alle priser på siden er ekskl. moms, fordi en varebil på gule plader købes af en virksomhed, der løfter momsen."]
    ]
  },
  {
    slug: "el-varebil",
    svar: "Billigste elvarebil lige nu:",
    h1: "Leasing af elvarebil til erhverv",
    kort: "Elvarebiler med rækkevidde, batteristørrelse og grøn ejerafgift.",
    // Ny titel 01-10-2026 til "billigste el varebil" og "el varebil pris" (autoforslag).
    title: "Elvarebil leasing — billigste først, med rækkevidde",
    desc: "Sammenlign leasing af elvarebiler til erhverv. Rækkevidde, batteri og halvårlig grøn ejerafgift ved siden af prisen.",
    intro: "En elvarebil har lav grøn ejerafgift og typisk færre driftsomkostninger, men rækkevidden afgør om den passer til din kørsel. Vi viser rækkevidden efter WLTP, som den står hos producenten — den reelle rækkevidde er lavere om vinteren og med last.",
    filtrer: function (r) { return r.bil.drivmiddel === "el"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Rækkevidde", fraRad: function (r) { return r.bil.raekkevidde_km != null ? talDK(r.bil.raekkevidde_km) + " km" : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt de elektriske modeller. Lavest først.",
    faq: [
      ["Hvad koster den grønne ejerafgift på en elvarebil?",
       "Den er markant lavere end på diesel. En ID. Buzz Cargo koster 460 kr. pr. halvår, hvor en dieselvarebil i samme klasse ligger på 3.000 til 5.000 kr. Afgiften står i specifikationerne på hver modelside."],
      ["Er rækkevidden den samme om vinteren?",
       "Nej. WLTP-tallet er målt under standardforhold. Kulde, varme i kabinen og last trækker ned. Vi viser producentens tal, ikke et skøn over hvad du reelt kører."],
      ["Kan en elvarebil trække?",
       "Nogle kan. Trækvægten står i specifikationerne på hver modelside, og den varierer meget: eVito må ikke trække, mens ID. Buzz Cargo må trække 1.000 kg med bremser."]
    ]
  },
  {
    slug: "ladbil",
    h1: "Ladbil leasing: ladvogne og chassis med opbygning",
    svar: "Billigste ladbil lige nu:",
    kort: "Ladbiler og chassis med lad eller kasse, sorteret efter pris med udbetalingen regnet med.",
    title: "Ladbil leasing — ladvogn og chassis fra %fra% kr./md.",
    desc: "Ladbil leasing til erhverv: sammenlign ladbiler, ladvogne og chassis med opbygning. Nyttelast og ladmål ved siden af prisen, med kilde og dato.",
    intro: "En ladbil er et chassis, hvor en opbygger har sat et lad eller en kasse på. Det betyder, at nyttelast og ladmål afhænger af opbygningen — ikke kun af bilen. Vi viser producentens tal for den opbygning, tilbuddet gælder, og sorterer efter månedsydelsen plus udbetalingen fordelt over løbetiden.",
    filtrer: function (r) { return r.bil.karrosseri === "ladvogn"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Nyttelast", fraRad: function (r) { return r.bil.nyttelast_kg != null ? talDK(r.bil.nyttelast_kg) + " kg" : null; } },
    lavestBedst: true,
    kriterium: "månedsydelsen plus udbetalingen fordelt over tilbuddets egen løbetid, blandt ladbiler og chassis med opbygning. Lavest først.",
    faq: [
      ["Hvad er forskellen på en ladbil og et chassis?",
       "Et chassis er bilen uden lad eller kasse — førerhus, motor og ramme. En ladbil er et chassis, hvor en opbygger har monteret et lad. Leaser du et chassis, skal opbygningen aftales for sig; leaser du en færdig ladbil, er den med i ydelsen."],
      ["Hvorfor er nyttelasten lavere, end jeg regnede med?",
       "Fordi opbygningen vejer. Et lad, en kasse eller en bagsmæk med lift tager af den nyttelast, chassiset har. Tallet på siden er producentens for den opbygning, tilbuddet gælder."],
      ["Kan en ladbil køres på almindeligt kørekort?",
       "Ja, hvis den tilladte totalvægt er højst 3.500 kg, som på ladbilerne her. Totalvægten står i specifikationerne på hver modelside."]
    ]
  },
  {
    slug: "stor-varebil",
    svar: "Billigste store varebil lige nu:",
    h1: "Stor varebil og kassevogn",
    kort: "De store kassevogne over 5,4 m — Sprinter, Crafter, Transit, Master og Ducato-klassen.",
    title: "Stor varebil til erhvervsleasing — 3 tons",
    desc: "Sammenlign leasing af store varebiler og kassevogne over 5,4 m: Sprinter, Crafter, Transit, Master og Ducato. Nyttelast, lastrum og pris.",
    intro: "Skal der bæres meget, er en billig lille bil ikke billig. Her er de store kassevogne — over 5,4 m, som Sprinter, Crafter, Transit, Master og Ducato. Bemærk at totalvægten er bilens egen vægt plus lasten — det er nyttelasten, der siger hvor meget du må laste.",
    filtrer: function (r) { return stoerrelse(r.bil) === "stor"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Totalvægt", fraRad: function (r) { return r.bil.totalvaegt_kg != null ? talDK(r.bil.totalvaegt_kg) + " kg" : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt de store kassevogne (over 5,4 m). Lavest først.",
    faq: [
      ["Må jeg køre en varebil på 3,5 tons med almindeligt kørekort?",
       "Ja, kategori B dækker op til 3.500 kg totalvægt. For eldrevne varebiler er grænsen hævet til 4.250 kg i Danmark, fordi batteriet vejer."],
      ["Hvad er forskellen på totalvægt og nyttelast?",
       "Totalvægten er det bilen må veje i alt, inklusive sig selv, fører og last. Nyttelasten er det du må lægge i. En bil på 3.500 kg totalvægt med 1.300 kg nyttelast vejer selv omkring 2.200 kg."]
    ]
  },
  {
    slug: "lille-varebil",
    svar: "Billigste lille varebil lige nu:",
    h1: "Bedste lille varebil 2026",
    kort: "Pizzabilerne: kompakte varebiler under 4,75 m, der kan parkere i byen.",
    title: "Bedste lille varebil 2026 — leasing fra %fra% kr./md.",
    desc: "Bedste lille varebil til byen: sammenlign leasing af små varevogne og pizzabiler under 4,75 m. Mål, nyttelast og pris ekskl. moms.",
    intro: "En lille varebil er lettere at parkere, billigere i afgift og bruger mindre brændstof. Til gengæld sætter lastrummet grænsen. Her er pizzabilerne — varebiler under 4,75 m som Caddy, Berlingo, Partner, Kangoo og deres elversioner. De fleste tager to europaller.",
    filtrer: function (r) { return stoerrelse(r.bil) === "pizzabil"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Lastrum", fraRad: function (r) { var v = (r.bil.lastrum || {}).volumen_m3; return v != null ? String(v).replace(".", ",") + " m³" : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt pizzabilerne (under 4,75 m). Lavest først.",
    faq: [
      ["Hvor mange europaller kan en lille varebil tage?",
       "To, hvis bredden mellem hjulkasserne er mindst 1.200 mm. Det er ikke det samme som lastrummets maksimale bredde, som måles højere oppe. Begge tal står i specifikationerne på hver modelside."],
      ["Er en lille varebil billigere i grøn ejerafgift?",
       "Som regel ja, fordi afgiften følger CO₂-udledningen. En Caddy Cargo koster 2.220 kr. pr. halvår mod 5.100 kr. for en Sprinter."]
    ]
  },
  {
    slug: "varebil-til-parkeringskaelder",
    h1: "Varebil der kan være i en parkeringskælder",
    kort: "Modeller under 2,10 m i højden — det tal, der afgør om du kommer ind.",
    title: "Varebil til parkeringskælder — under 2,10 m høj",
    desc: "Danske parkeringskældre ligger typisk mellem 1,90 og 2,10 m. Se hvilke varebiler der kommer ind, med højden målt fra vejkanten til taget.",
    intro: "Danske parkeringskældre ligger typisk mellem 1,90 og 2,10 m i frihøjde, og en varebil, der ikke kan komme ind, er ubrugelig i indre by. Alligevel oplyser ingen leasingside højden. Her er modellerne under 2,10 m, sorteret efter højde.",
    filtrer: function (r) { var h = (r.bil.udvendig || {}).hoejde_mm; return h != null && h <= 2100; },
    maal: function (r) { return (r.bil.udvendig || {}).hoejde_mm; },
    vis: function (v) { return talDK(v) + " mm"; },
    kolonne: "Udvendig højde",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: true,
    kriterium: "udvendig højde, målt fra vejkanten til kanten af taget. Lavest først.",
    note: "Højden er uden tagantenne, tagbøjler og andet tilbehør, som lægger oveni. Hvor producenten opgiver højden som et interval, fører vi det højeste tal, fordi en ulæsset bil er den højeste.",
    faq: [
      ["Hvor høj må bilen være i en dansk parkeringskælder?",
       "Det varierer. De fleste ligger mellem 1,90 og 2,10 m, og frihøjden står skiltet ved indkørslen. Mål efter på den konkrete kælder, før du binder dig til en aftale på fem år."],
      ["Tæller tagbøjler og antenne med i højden?",
       "Ja, i praksis. Producentens tal er bilen uden tilbehør. Tagbøjler, lastholdere og en fast antenne lægger oveni, og det er den samlede højde, bommen møder."],
      ["Hvilke varebiler kommer ikke ind?",
       "De store kassevogne. Mercedes Sprinter er 2,43 m høj selv med lavt tag, og Renault Master er 2,50 m. De hører til på gadeplan eller i en hal."]
    ]
  },
  {
    slug: "varebil-med-traek",
    h1: "Varebil med trækkraft",
    kort: "Modeller der må trække mindst 2.000 kg med bremset anhænger.",
    title: "Varebil med trækkraft — anhængervægt og pris",
    desc: "Sammenlign varebiler efter hvor meget de må trække. Anhængervægt med bremser, nyttelast og pris ekskl. moms.",
    intro: "Skal der en trailer, en maskine eller en båd bag i, er trækvægten det tal, der afgør valget. Her er modellerne, der må trække mindst 2.000 kg med bremset anhænger, sorteret efter trækvægt. Husk at vogntogsvægten også sætter en grænse: bil og anhænger må tilsammen ikke overstige den.",
    filtrer: function (r) { return (r.bil.anhaengervaegt_kg || 0) >= 2000; },
    maal: function (r) { return r.bil.anhaengervaegt_kg; },
    vis: function (v) { return talDK(v) + " kg"; },
    kolonne: "Trækvægt",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: false,
    kriterium: "største tilladte anhængervægt med bremser. Højest først.",
    note: "Tallet gælder anhænger med bremser. Uden bremser er grænsen typisk 750 kg uanset bil. Trækket skal være monteret fra fabrikken eller godkendt eftermonteret.",
    faq: [
      ["Hvad betyder anhængervægt med og uden bremser?",
       "En anhænger over 750 kg skal have egne bremser. Derfor opgives to tal: det høje gælder bremset anhænger, det lave — typisk 750 kg — gælder uden."],
      ["Må jeg trække 3.500 kg med almindeligt kørekort?",
       "Ikke nødvendigvis. Kategori B dækker et vogntog på op til 3.500 kg i alt. Skal du trække tungt, kræver det B/E eller udvidet B."]
    ]
  },
  {
    slug: "varebil-med-hoej-nyttelast",
    h1: "Varebil med høj nyttelast",
    kort: "Modeller der må laste mindst 1.000 kg.",
    title: "Varebil med høj nyttelast — se hvad du må laste",
    desc: "Sammenlign varebiler efter nyttelast. Se hvilke modeller der må laste mindst 1.000 kg, med pris ekskl. moms.",
    intro: "Nyttelasten er det, du må lægge i bilen — fører, passagerer, værktøj og last tilsammen. Den er ikke det samme som totalvægten, og den er det tal, der oftest overskrides i praksis. Her er modellerne, der må laste mindst 1.000 kg.",
    filtrer: function (r) { return (r.bil.nyttelast_kg || 0) >= 1000; },
    maal: function (r) { return r.bil.nyttelast_kg; },
    vis: function (v) { return talDK(v) + " kg"; },
    kolonne: "Nyttelast",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: false,
    kriterium: "oplyst nyttelast. Højest først.",
    note: "Nyttelasten falder med ekstraudstyr. Et trægulv, en varerumsindretning eller et anhængertræk går fra lasteevnen, og flere producenter opgiver derfor nyttelasten som et interval. Hvor det er tilfældet, fører vi det laveste tal.",
    faq: [
      ["Tæller føreren med i nyttelasten?",
       "Ja. Nyttelasten er alt, hvad der kommer i bilen ud over bilen selv — fører, passagerer, værktøj og last. Regn med 75 kg pr. person."],
      ["Hvad sker der, hvis bilen er overlæsset?",
       "Det er en bødeforseelse, og forsikringen kan afvise dækning ved skade. Overlæs slider også bremser og affjedring hurtigere."]
    ]
  },
  {
    slug: "varebil-med-lav-udbetaling",
    h1: "Varebil med lav udbetaling",
    kort: "Tilbud uden udbetaling eller med en førstegangsydelse på 40.000 kr. eller derunder.",
    title: "Leasing af varebil uden udbetaling — fra %fra% kr./md.",
    desc: "Leasing af varebil uden udbetaling eller med lav førstegangsydelse: %n% tilbud fra %fra% kr./md. ekskl. moms. Udbetaling, ydelse og den reelle pris side om side.",
    tilpas: function (med) {
      var nul = med.filter(function (x) { return x.r.t.foerstegangsydelse === 0; });
      if (!nul.length) return {};
      var navne = nul.map(function (x) { return x.r.bil.maerke + " " + x.r.bil.model + " hos " + x.r.t.udbyder; });
      var en = nul.length === 1;
      return {
        h1: "Varebil uden udbetaling eller med lav udbetaling",
        note: (en ? "Ét tilbud er helt uden udbetaling: " : nul.length + " tilbud er helt uden udbetaling: ") + ogListe(navne) +
          ". Uden udbetaling ligger hele prisen i månedsydelsen — sammenlign kolonnen Inkl. udbetaling, ikke kun ydelsen.",
        faq: [
          ["Findes der erhvervsleasing af varebil helt uden udbetaling?",
           "Ja, men sjældent. Lige nu " + (en ? "er der ét tilbud" : "er der " + nul.length + " tilbud") + " uden udbetaling blandt dem, vi følger: " + ogListe(navne) +
           ". De står øverst på siden. Et tilbud uden udbetaling har typisk en højere månedsydelse eller en højere restværdi."],
          ["Får jeg udbetalingen tilbage ved aftalens udløb?",
           "Nej. Førstegangsydelsen er en forudbetalt del af leasingydelsen, ikke et depositum. Den er brugt, når aftalen udløber."],
          ["Er leasing uden udbetaling billigere?",
           "Ikke nødvendigvis. Udbetalingen forsvinder ikke, den flytter over i ydelsen eller restværdien. Sammenlign den reelle pris pr. måned og restværdien ved en finansiel aftale."]
        ]
      };
    },
    intro: "En lav udbetaling binder mindre likviditet, men den forsvinder ikke — den flytter over i månedsydelsen. Her er tilbuddene med en førstegangsydelse på 40.000 kr. eller derunder, og kolonnen Inkl. udbetaling viser, hvad de reelt koster.",
    filtrer: function (r) { return r.t.foerstegangsydelse != null && r.t.foerstegangsydelse <= 40000; },
    maal: function (r) { return r.t.foerstegangsydelse; },
    vis: function (v) { return talDK(v) + " kr."; },
    kolonne: "Udbetaling",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: true,
    kriterium: "førstegangsydelsen. Lavest først.",
    note: "Ingen af de udbydere, vi følger, tilbyder varebilsleasing helt uden udbetaling.",
    faq: [
      ["Findes der erhvervsleasing helt uden udbetaling?",
       "Ikke hos de udbydere, vi følger. Alle kræver en førstegangsydelse. Et tilbud uden udbetaling vil normalt have en tilsvarende højere månedsydelse."],
      ["Får jeg udbetalingen tilbage ved aftalens udløb?",
       "Nej. Førstegangsydelsen er en forudbetalt del af leasingydelsen, ikke et depositum. Den er brugt, når aftalen udløber."]
    ]
  },
  {
    slug: "finansiel-eller-operationel-leasing",
    h1: "Finansiel eller operationel leasing af varebil",
    kort: "Forskellen på de to aftaletyper — og hvad den betyder for ydelsen.",
    title: "Finansiel eller operationel leasing af varebil — side om side",
    desc: "Finansiel eller operationel leasing? Udbetaling, ydelse, restværdi, service og løbetid side om side — regnet af %n% aktuelle erhvervstilbud på varebiler. Ekskl. moms.",
    intro: "Finansiel leasing har en aftalt restværdi: når aftalen udløber, skal du selv eller en køber, du anviser, overtage bilen til det beløb. Operationel leasing har ingen — bilen leveres tilbage, og udbyderen bærer risikoen for, hvad den er værd til sidst. Det er to forskellige produkter, og en ydelse af den ene type kan ikke uden videre holdes op mod den anden.",
    filtrer: function (r) { return !!r.t.leasingtype; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    lavestBedst: true,
    artikel: function (med) { return leasingformSammenligning(med); },
    kriterium: "samlet pris pr. måned blandt tilbud, hvor udbyderen oplyser aftaletypen. Lavest først.",
    note: "Rækkefølgen blander de to typer med vilje: den viser hvor forskelligt de prissættes. Kolonnen Type siger hvilken aftale der er tale om.",
    faq: [
      ["Hvilken type er billigst?",
       "Det kan ikke afgøres generelt. Den finansielle har ofte en lavere ydelse, fordi en del af bilens værdi står tilbage som restværdi, der skal indfries ved udløb — og service er sjældent med. Den operationelle har typisk service med og ingen restværdi. Tabellen Samme model, begge typer viser forskellen model for model."],
      ["Kan jeg skifte fra den ene type til den anden undervejs?",
       "Normalt ikke uden at afslutte aftalen. Det koster typisk en indfrielse eller kompensation efter aftalens vilkår, så vælg typen, før du skriver under."],
      ["Hvad betyder typen for regnskabet?",
       "Om bilen skal stå i virksomhedens balance, afhænger af aftalen og virksomhedens regnskabsklasse. Det afklarer du med din revisor."],
      ["Hvad sker der ved aftalens udløb?",
       "Ved operationel leasing afleverer du bilen, og udbyderen vurderer stand og kilometertal. Ved finansiel leasing skal bilen afhændes til restværdien — enten til dig selv eller til en køber, du anviser. Kan den ikke sælges til det beløb, hæfter du for forskellen."],
      ["Hvorfor står der Ikke oplyst ved nogle tilbud?",
       "Fordi udbyderen ikke skriver hvilken type aftalen er. Vi gætter den ikke. Hvor en udbyder oplyser en restværdi uden at nævne typen, udleder vi finansiel leasing af det — og markerer det med en stjerne."]
    ]
  }
  ,{
    slug: "varebil-med-service-inkluderet",
    h1: "Varebil med service inkluderet i leasingydelsen",
    kort: "Tilbud hvor service og reparation er dækket af ydelsen — ikke et tilvalg.",
    title: "Varebil med service inkluderet i leasingen",
    desc: "Se erhvervsleasingtilbud på varebiler, hvor service og reparation er inkluderet i månedsydelsen. Med kilde og dato på hvert tilbud.",
    intro: "Er service inkluderet, ligger værkstedsregningen i ydelsen, og budgettet holder. Er den ikke, kommer den oveni — og på en varebil med 15.000 km om året er det ikke et lille beløb. Her er tilbuddene, hvor udbyderen udtrykkeligt skriver, at service og reparation er dækket.",
    filtrer: function (r) { return (r.t.inkluderet || []).indexOf("service_reparation") >= 0; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Oplyst", fraRad: function (r) { return r.b.oplystAntal + "/" + r.b.posterAntal + " poster"; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt tilbud med service inkluderet. Lavest først.",
    note: "Service inkluderet betyder ikke alt inkluderet. Dæk, forsikring og grøn ejerafgift ligger typisk stadig uden for, og kolonnen Oplyst siger hvor mange af de fem driftsposter udbyderen overhovedet forholder sig til.",
    faq: [
      ["Hvad dækker en serviceaftale typisk?",
       "Planlagte eftersyn, olie, filtre og sliddele efter producentens serviceplan. Den dækker normalt ikke dæk, forsikring, brændstof eller skader. Bed altid om at få dækningen på skrift."],
      ["Er det billigere at have service med i aftalen?",
       "Ikke nødvendigvis, men det er mere forudsigeligt. Udbyderen lægger et gennemsnit ind i ydelsen. Kører du lidt og forsigtigt, betaler du måske for meget; kører du meget, er det oftest en fordel."],
      ["Hvorfor står nogle tilbud ikke på listen?",
       "Fordi udbyderen enten skriver, at service ikke er med, eller slet ikke nævner det. Vi antager ikke, at noget er inkluderet, fordi det ikke er nævnt."]
    ]
  }
  ,{
    slug: "varebil-med-kort-loebetid",
    h1: "Varebil med kort løbetid",
    kort: "Aftaler på 36 eller 48 måneder i stedet for de sædvanlige 60.",
    title: "Varebil på kort leasing — 36 eller 48 måneder",
    desc: "De fleste varebilsaftaler løber 60 måneder. Se tilbuddene på 36 og 48 måneder, med samlet pris ekskl. moms.",
    intro: "Standarden på varebiler er 60 måneder, fordi en lang løbetid trykker månedsydelsen. Men fem år er lang tid at binde sig, hvis virksomheden vokser eller opgaverne skifter. Her er aftalerne på 36 og 48 måneder — bemærk at den kortere løbetid som regel koster mere om måneden, netop fordi bilen afdrages hurtigere.",
    filtrer: function (r) { return r.t.loebetid_mdr === 36 || r.t.loebetid_mdr === 48; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Løbetid", fraRad: function (r) { return r.t.loebetid_mdr + " mdr."; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt aftaler på 36 eller 48 måneder. Lavest først.",
    note: "Sammenlign ikke tallene her direkte med en 60-måneders aftale. En kort løbetid fordeler udbetalingen over færre måneder og får derfor et højere tal, uden at aftalen nødvendigvis er dyrere i alt.",
    faq: [
      ["Hvorfor er en kort løbetid dyrere om måneden?",
       "Fordi bilen taber lige så meget værdi uanset aftalens længde, men tabet skal betales over færre måneder. Dertil kommer, at udbetalingen fordeles over færre måneder."],
      ["Kan jeg forlænge en leasingaftale, når den udløber?",
       "Ofte ja, men det er ikke en ret — det skal aftales. Spørg til muligheden inden du skriver under, særligt hvis du vælger en kort løbetid for at holde muligheder åbne."],
      ["Hvad koster det at komme ud af en aftale før tid?",
       "Det afhænger helt af aftalen og kan være dyrt. Bed om at få opsigelsesvilkårene på skrift, før du binder dig — de står sjældent i annoncen."]
    ]
  }
  ,{
    slug: "varebil-under-3500-kr",
    h1: "Varebil til under 3.500 kr. om måneden",
    kort: "Tilbud der holder sig under 3.500 kr., når udbetalingen er regnet med.",
    title: "Varebil under 3.500 kr. om måneden",
    desc: "Se hvilke varebiler der kan leases for under 3.500 kr. om måneden inklusive udbetaling. Priser ekskl. moms med kilde og dato.",
    intro: "Har du et loft for, hvad bilen må koste om måneden, er det den samlede ydelse der tæller — ikke den annoncerede. Her er tilbuddene, der holder sig under 3.500 kr., når udbetalingen er fordelt over løbetiden. Beløbet er ekskl. moms, som en virksomhed løfter.",
    filtrer: function (r) { return r.samlet != null && r.samlet < 3500; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Annonceret", fraRad: function (r) { return r.t.maanedspris != null ? talDK(r.t.maanedspris) + " kr./md." : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned under 3.500 kr. Lavest først.",
    note: "Kolonnen Annonceret viser, hvad udbyderen selv sætter i annoncen. Forskellen mellem de to tal er udbetalingen fordelt over løbetiden — og den er tit større, end man regner med.",
    faq: [
      ["Er 3.500 kr. inklusive alt?",
       "Nej. Beløbet er månedsydelsen plus udbetalingen fordelt over løbetiden. Forsikring, brændstof, grøn ejerafgift og i de fleste tilfælde dæk ligger uden for. Kolonnen Oplyst på modelsiden siger, hvad den enkelte udbyder forholder sig til."],
      ["Hvorfor er beløbet højere end den annoncerede pris?",
       "Fordi udbetalingen er regnet med. Et tilbud til 2.800 kr. om måneden med 60.000 kr. i udbetaling over 60 måneder koster reelt 3.800 kr. om måneden."],
      ["Kan jeg få en varebil billigere end det her?",
       "Ja, hvis du accepterer en længere løbetid eller en større udbetaling. Se guiden Billigste varebil for hele feltet sorteret efter samlet pris."]
    ]
  }
  ,{
    // "el-varebil med træk", "el varebil med træk", "el varebil 4x4" (Search Console 02-10-2026).
    slug: "elvarebil-med-traek",
    h1: "Elvarebil med træk",
    kort: "Elvarebiler sorteret efter anhængervægt — fra 750 kg til over 2 tons.",
    title: "Elvarebil med træk — anhængervægt og pris fra %fra% kr./md.",
    desc: "Hvilken elvarebil trækker mest? Elvarebilerne sorteret efter producentens anhængervægt, med pris inkl. udbetaling. Priser ekskl. moms.",
    intro: "Anhængervægten er der, elvarebilerne adskiller sig mest: fra 750 kg til over 2 tons. Her er elvarebilerne sorteret efter producentens oplyste anhængervægt med bremser, tungest først. Hver model står én gang, med sit billigste tilbud.",
    filtrer: function (r) { return r.bil.drivmiddel === "el" && r.bil.anhaengervaegt_kg > 0 && r.samlet != null; },
    maal: function (r) { return r.bil.anhaengervaegt_kg; },
    vis: function (v) { return talDK(v) + " kg"; },
    kolonne: "Anhængervægt",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: false,
    unikModel: true,
    kriterium: "producentens anhængervægt med bremser for elvarebiler. Tungest først, ét tilbud pr. model.",
    note: "Anhængervægten gælder den udgave af bilen, som målene på modelsiden gælder for. Rækkevidden falder, når der trækkes — hvor meget, oplyser producenterne sjældent. Dit kørekort sætter også en grænse; se Håndbogen om anhænger bag varebilen.",
    faq: [
      ["Hvilken elvarebil kan trække mest?",
       "Den øverste på listen, målt med producentens anhængervægt med bremser. Tallet gælder den udgave af bilen, som målene på modelsiden gælder for."],
      ["Findes der en elvarebil med 4x4?",
       "Ja. Se guiden Varebil 4x4 for de biler, hvor forhandleren eller leasingselskabet oplyser firehjulstræk."],
      ["Må jeg trække en tung trailer på B-kørekort?",
       "Det afhænger af bilens og trailerens vægt tilsammen. Reglerne står i Håndbogen: Anhænger bag varebilen."]
    ]
  }
  // 02-10-2026: faggrupper og leasingtype × størrelse (fabrikkerne står nederst i filen).
  ,fagGuide("elektriker"), fagGuide("vvs"), fagGuide("toemrer"), fagGuide("maler")
  ,fagGuide("murer"), fagGuide("anlaegsgartner"), fagGuide("budkoersel"), fagGuide("servicetekniker")
  ,typeGuide("operationel", "el"), typeGuide("finansiel", "el")
  ,typeGuide("operationel", "pizzabil"), typeGuide("finansiel", "pizzabil")
  ,typeGuide("operationel", "mellem"), typeGuide("finansiel", "mellem")
  ,typeGuide("operationel", "stor"), typeGuide("finansiel", "stor")
  ,{
    // "kassevogn l2h2", "l2h2 varebil" (Googles autoforslag, 01-10-2026).
    slug: "kassevogn-l2h2",
    h1: "Kassevogn L2H2 leasing",
    kort: "Tilbud på kassevogne i L2H2, sorteret efter pris med udbetalingen regnet med.",
    title: "Kassevogn L2H2 leasing — priser og lastrum",
    desc: "Sammenlign leasingtilbud på kassevogne i L2H2: mellemlang og højt tag. Pris inkl. udbetaling, lastrum og kilde. L2 betyder ikke det samme hos alle mærker.",
    intro: "L2H2 betyder mellemlang (L2) og højt tag (H2). Det høje tag giver typisk 1,8–1,9 m lastrumshøjde, uden at bilen bliver lige så lang som en L3. Men L2 er ikke en fælles standard: lastrumslængden svinger med over en meter fra mærke til mærke. Her er tilbuddene, hvor udbyderen selv skriver L2H2, sorteret efter månedsydelsen plus udbetalingen fordelt over løbetiden.",
    filtrer: function (r) { return /L2\s*H2/i.test(r.t.variant || ""); },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Lastrum", fraRad: function (r) { var m = (r.bil.lastrum || {}).volumen_m3; return m ? String(m).replace(".", ",") + " m³" : null; } },
    lavestBedst: true,
    kriterium: "tilbud, hvor forhandleren eller leasingselskabet kalder bilen L2H2. Samlet månedspris inkl. udbetaling, lavest først.",
    note: "Lastrummet er producentens tal for den udgave af bilen, som målene på modelsiden gælder for — ikke nødvendigvis præcis den bil, tilbuddet gælder. Hvad L2 og H2 betyder hos de enkelte mærker, står i Håndbogen: L1H1, L2H2 og L3H2.",
    faq: [
      ["Hvad betyder L2H2?",
       "L2 er den mellemste længde og H2 det høje tag. Betegnelserne er producenternes egne og ikke en fælles standard, så to L2H2-biler kan have forskellige mål. Sammenlign lastrummet i mm og m³."],
      ["Kan man stå oprejst i en L2H2?",
       "Det afhænger af mærket og af, hvor høj du er. L2H2-bilerne på siden har typisk 1,8–1,9 m lastrumshøjde; det præcise tal står i mm på hver modelside."],
      ["Passer en L2H2 i en parkeringskælder?",
       "Sjældent. Med højt tag er de fleste over 2,10 m. Se guiden Varebil til parkeringskælder for modeller under 2,10 m."]
    ]
  }
  ,{
    // "varebil l3h2" (Googles autoforslag, 01-10-2026).
    slug: "varebil-l3h2",
    h1: "Varebil L3H2 leasing",
    kort: "Store kassevogne i L3H2 — lang og høj — sorteret efter pris inkl. udbetaling.",
    title: "Varebil L3H2 leasing — store kassevogne",
    desc: "Sammenlign leasingtilbud på varebiler i L3H2: lang kassevogn med højt tag. Pris inkl. udbetaling, lastrum og nyttelast, med kilde og dato.",
    intro: "L3H2 er den lange kassevogn med højt tag — typisk omkring 13 m³ lastrum og en bil på omkring seks meter. Det er størrelsen til flytning, distribution og håndværkere med meget materiel. Her er tilbuddene, hvor udbyderen selv skriver L3H2, sorteret efter månedsydelsen plus udbetalingen fordelt over løbetiden.",
    filtrer: function (r) { return /L3\s*H2/i.test(r.t.variant || ""); },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Nyttelast", fraRad: function (r) { return r.bil.nyttelast_kg != null ? talDK(r.bil.nyttelast_kg) + " kg" : null; } },
    lavestBedst: true,
    kriterium: "tilbud, hvor forhandleren eller leasingselskabet kalder bilen L3H2. Samlet månedspris inkl. udbetaling, lavest først.",
    note: "Mange L3H2-biler har en totalvægt på 3.500 kg — grænsen for et almindeligt B-kørekort. Totalvægten står på modelsiden; se også Håndbogen om totalvægt, nyttelast og kørekort.",
    faq: [
      ["Hvor meget kan der være i en L3H2?",
       "Det afhænger af mærket. Lastrummet i m³ og målene i mm står på hver modelside — L3 betyder ikke det samme hos alle producenter."],
      ["Må jeg køre en L3H2 på almindeligt kørekort?",
       "Ja, hvis totalvægten er højst 3.500 kg. Tjek totalvægten på modelsiden, især for elvarebiler."]
    ]
  }
  ,{
    // "varebil 4x4", "leasing varebil 4x4", "varebil 4x4 elektrisk" (autoforslag, 01-10-2026).
    slug: "varebil-4x4",
    h1: "Varebil 4x4 leasing",
    kort: "Varebiler og pickupper med firehjulstræk, sorteret efter pris inkl. udbetaling.",
    title: "Varebil 4x4 leasing — firehjulstræk til erhverv",
    desc: "Leasing af varebil med 4x4 til erhverv: kassevogne og pickupper med firehjulstræk, også elektrisk. Pris inkl. udbetaling og anhængervægt, med kilde.",
    intro: "Firehjulstræk på en varebil hedder noget forskelligt fra mærke til mærke: 4x4, 4WD, AWD, 4MOTION eller 4MATIC. Her er de tilbud, hvor forhandleren eller leasingselskabet selv skriver, at bilen har firehjulstræk — både pickupper og kassevogne, diesel og el — sorteret efter månedsydelsen plus udbetalingen fordelt over løbetiden.",
    filtrer: function (r) { return /4x4|4WD|AWD|4MOTION|4MATIC|firehjul/i.test(r.t.variant || ""); },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Anhængervægt", fraRad: function (r) { return r.bil.anhaengervaegt_kg != null ? talDK(r.bil.anhaengervaegt_kg) + " kg" : null; } },
    lavestBedst: true,
    kriterium: "tilbud, hvor bilen har firehjulstræk ifølge forhandleren eller leasingselskabet. Samlet månedspris inkl. udbetaling, lavest først.",
    note: "Anhængervægten er producentens tal for den udgave af bilen, som målene på modelsiden gælder for. Nyttelast og forbrug for udgaven med firehjulstræk står på modelsiden.",
    faq: [
      ["Findes der en elektrisk varebil med 4x4?",
       "Ja. Står en elvarebil med firehjulstræk på listen, er det en udgave med en motor på hver aksel, som fx Volkswagens 4MOTION."],
      ["Er en pickup eller en kassevogn bedst med 4x4?",
       "En pickup trækker typisk mere, mens en kassevogn har et lukket lastrum. Se guiden Pickup leasing og Håndbogen om varebil eller pickup."]
    ]
  }
  ,{
    // "lang varebil", "ekstra lang varebil" (Googles autoforslag, 01-10-2026).
    slug: "lang-varebil",
    h1: "Lang varebil: længste lastrum",
    kort: "Modellerne med det længste lastrum, målt i mm af producenten.",
    title: "Lang varebil — længste lastrum i leasing",
    desc: "Hvilken varebil har det længste lastrum? Modellerne sorteret efter producentens lastrumslængde i mm, med pris inkl. udbetaling. Til rør, profiler og lange emner.",
    intro: "Skal der lange emner med — rør, profiler, lister eller stiger — er det lastrumslængden på gulvet, der afgør det, ikke volumen. Her er modellerne sorteret efter producentens oplyste lastrumslængde, længst først. Hver model står én gang, med sit billigste tilbud.",
    filtrer: function (r) { return r.bil.karrosseri !== "ladvogn" && (r.bil.lastrum || {}).laengde_mm > 0 && r.samlet != null; },
    maal: function (r) { return r.bil.lastrum.laengde_mm; },
    vis: function (v) { return talDK(v) + " mm"; },
    kolonne: "Lastrumslængde",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: false,
    unikModel: true,
    kriterium: "producentens lastrumslængde på gulvet i mm. Længst først, ét tilbud pr. model.",
    note: "Længden gælder den udgave af bilen, som målene på modelsiden gælder for. Mange modeller findes i flere længder — en L3 eller L4 kan have et betydeligt længere lastrum end udgaven her. Ladbiler står ikke på listen, fordi ladets længde afhænger af opbygningen.",
    faq: [
      ["Hvilken varebil har det længste lastrum?",
       "Den øverste på listen, målt på den udgave af bilen, som producentens mål gælder for. Findes modellen i en længere udgave, kan den være endnu længere."],
      ["Hvordan er lastrumslængden målt?",
       "Det er producentens oplyste lastrumslængde. Præcis hvor den er målt, kan variere lidt mellem mærkerne, så mål selv efter, hvis det handler om få centimeter."]
    ]
  }
  ,{
    // "erhvervsleasing pickup" (Googles autoforslag, 01-10-2026). Kun faa modeller,
    // saa siden viser alle tilbud og henviser til guiden om varebil eller pickup.
    slug: "pickup-leasing",
    h1: "Pickup leasing til erhverv",
    kort: "Pickupper på gule plader, sorteret efter pris med udbetalingen regnet med.",
    title: "Pickup leasing til erhverv — priser og trækvægt",
    desc: "Erhvervsleasing af pickup: sammenlign pickupper på gule plader efter samlet månedspris inkl. udbetaling, med anhængervægt og kilde. Priser ekskl. moms.",
    intro: "En pickup kan køre på gule plader som en varebil, hvis den er indrettet til godstransport. Den vælges typisk for trækket og firehjulstrækket, ikke for lastrummet. Her er de pickupper, vi har aktuelle erhvervstilbud på, sorteret efter månedsydelsen plus udbetalingen fordelt over løbetiden.",
    filtrer: function (r) { return r.bil.karrosseri === "pickup"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Anhængervægt", fraRad: function (r) { return r.bil.anhaengervaegt_kg != null ? talDK(r.bil.anhaengervaegt_kg) + " kg" : null; } },
    lavestBedst: true,
    kriterium: "pickupper på gule plader. Samlet månedspris inkl. udbetaling, lavest først.",
    note: "En pickup med siddepladser bagtil opfylder ifølge Motorstyrelsen ikke altid betingelserne for gule plader. Tjek registreringen, før du skriver under — se Håndbogen om varebil eller pickup.",
    faq: [
      ["Kan en pickup køre på gule plader?",
       "Ja, hvis den er indrettet til godstransport. En pickup med siddepladser bagtil kan ifølge Motorstyrelsen falde uden for betingelserne og skal så have hvide plader."],
      ["Varebil eller pickup?",
       "En pickup trækker typisk mere og har firehjulstræk, men en kassevogn har mere og bedre beskyttet lastrum. Forskellen står i Håndbogen: Varebil eller pickup?"],
      ["Hvorfor er der så få pickupper?",
       "Vi viser kun tilbud, der er aktuelle hos udbyderne. Finder vi flere, kommer de på listen."]
    ]
  }
  ,{
    // "bedste varevogn til prisen" (25 visninger i Search Console, pos. 19, 01-10-2026).
    // Hvad man faar for pengene maales som maanedspris pr. m³ lastrum - et tal, der
    // kan regnes ud af vores egne data og genfindes paa modelsiderne.
    slug: "bedste-varevogn-til-prisen",
    h1: "Bedste varevogn til prisen",
    kort: "Mest lastrum for pengene: månedspris pr. m³, inkl. udbetaling.",
    title: "Bedste varevogn til prisen — mest lastrum pr. krone",
    desc: "Hvilken varevogn giver mest for pengene? Vi har regnet månedsprisen inkl. udbetaling om til kr. pr. m³ lastrum. Ét tilbud pr. model, priser ekskl. moms.",
    intro: "Den billigste varevogn er sjældent den, der giver mest for pengene. Her har vi delt den samlede månedspris — ydelsen plus udbetalingen fordelt over løbetiden — med producentens oplyste lastrum i m³. Jo lavere tal, jo mere lastrum får du pr. krone. Hver model står én gang, med sit bedste tilbud.",
    filtrer: function (r) { return r.samlet != null && (r.bil.lastrum || {}).volumen_m3 > 0; },
    maal: function (r) { return Math.round(r.samlet / r.bil.lastrum.volumen_m3); },
    vis: function (v) { return talDK(v) + " kr. pr. m³"; },
    kolonne: "Pr. m³ pr. md.",
    ekstra: { navn: "Lastrum", fraRad: function (r) {
      var m = (r.bil.lastrum || {}).volumen_m3;
      return m ? String(m).replace(".", ",") + " m³" : null; } },
    lavestBedst: true,
    unikModel: true,
    kriterium: "samlet månedspris inkl. udbetaling divideret med producentens lastrum i m³. Lavest først, ét tilbud pr. model.",
    note: "Store kassevogne kommer naturligt højt op, fordi lastrummet vokser hurtigere end prisen. Skal bilen ind i en parkeringskælder eller kunne køres med en lille trailer, er det ikke nødvendigvis den bedste for dig — se også nyttelast og anhængervægt på modelsiden. Modeller uden oplyst lastrum står ikke på listen.",
    faq: [
      ["Hvordan er kr. pr. m³ regnet ud?",
       "Den samlede månedspris — ydelsen plus udbetalingen fordelt over løbetiden, ekskl. moms — divideret med det lastrum i m³, producenten oplyser for den udgave af bilen, som målene gælder for."],
      ["Er den billigste varevogn ikke den bedste til prisen?",
       "Ikke nødvendigvis. En lille varebil har en lav ydelse, men også et lille lastrum. Pr. m³ er de mellemstore og store kassevogne ofte billigere."],
      ["Hvad med service og forsikring?",
       "Det er ikke regnet med. Hvad den enkelte udbyder inkluderer, står ved hvert tilbud på modelsiden."]
    ]
  }
  ,{
    slug: "varebil-til-europaller",
    h1: "Varebil der kan tage europaller",
    kort: "Modeller hvor producenten oplyser, hvor mange europaller der er plads til.",
    title: "Varebil til europaller — se hvor mange der er plads",
    desc: "Sammenlign varebiler efter hvor mange europaller de kan tage. Producentens eget tal, med lastrumsmål og pris ekskl. moms.",
    intro: "En europalle er 1.200 × 800 mm. Om den kan stå i bilen afgøres ikke af lastrummets volumen, men af bredden mellem hjulkasserne — der skal være mindst 1.200 mm, hvis pallen skal ind på tværs. Her er modellerne, hvor producenten selv oplyser det maksimale antal europaller i forlængelse af hinanden.",
    filtrer: function (r) { return (r.bil.europaller || 0) >= 2; },
    maal: function (r) { return r.bil.europaller; },
    vis: function (v) { return v + (v === 1 ? " palle" : " paller"); },
    kolonne: "Europaller",
    ekstra: { navn: "Mellem hjulkasser", fraRad: function (r) {
      var b = (r.bil.lastrum || {}).bredde_mellem_hjulkasser_mm;
      return b != null ? talDK(b) + " mm" : null; } },
    lavestBedst: false,
    kriterium: "producentens oplyste maksimale antal europaller. Flest først.",
    note: "Tallet er producentens eget og gælder paller i forlængelse af hinanden på gulvet. Det forudsætter et fladt lastrum uden indretning — en hyldereol eller et værktøjsskab langs siden tager af pladsen. Modeller, hvor producenten ikke oplyser et pallettal, står ikke på listen; vi regner det ikke ud af målene.",
    faq: [
      ["Hvor bred skal bilen være for at tage en europalle på tværs?",
       "Mindst 1.200 mm mellem hjulkasserne, da pallen er 1.200 mm på den lange led. Målet står i specifikationerne på hver modelside og er ikke det samme som lastrummets maksimale bredde, som måles højere oppe."],
      ["Hvorfor står nogle store varebiler ikke på listen?",
       "Fordi producenten ikke oplyser et pallettal. Vi udleder det ikke af lastrummets mål — om en palle kan komme ind afhænger også af døråbningens bredde og af, hvordan hjulkasserne er formet."],
      ["Kan jeg stable europaller i en varebil?",
       "Det afhænger af lastrumshøjden og af hvad der er på pallen. Højden står i specifikationerne, men husk at lasten skal surres — antallet af fastsurringsringe oplyses af flere producenter."]
    ]
  }
  ,{
    slug: "hvad-koster-en-varebil",
    unikModel: true,
    h1: "Hvad koster en ny varebil?",
    kort: "Vejledende nypriser fra producenternes egne prislister, ved siden af leasingydelsen.",
    title: "Hvad koster en ny varebil? Priser ekskl. moms",
    desc: "Se hvad en ny varebil koster ifølge producenternes egne prislister, ekskl. moms, og hvad den samme bil koster i erhvervsleasing. Kilde og dato på hvert tal.",
    intro: "En leasingydelse siger mest, når du kan se, hvad bilen er værd. Her finder du den vejledende nypris på hver model og det billigste leasingtilbud ved siden af.",
    filtrer: function (r) { return r.bil.nypris && r.bil.nypris.ekskl_moms_kr != null; },
    maal: function (r) { return r.bil.nypris.ekskl_moms_kr; },
    vis: function (v, r) { return (r.bil.nypris.fra ? "fra " : "") + talDK(v) + " kr."; },
    kolonne: "Vejledende nypris",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: true,
    kriterium: "den vejledende nypris, med den laveste først.",
    note: "Den vejledende nypris er den pris, importøren anbefaler forhandleren at sælge bilen for. Forhandleren bestemmer selv sin pris og sine rabatter, så du kan blive tilbudt en anden pris. Prisen gælder den udgave af bilen, som målene på modelsiden er taget fra, og det er ikke altid modellens billigste udgave.",
    faq: [
      ["Hvorfor står prisen ekskl. moms?",
       "Fordi en varebil på gule plader købes af en virksomhed, der løfter momsen, når bilen kun bruges erhvervsmæssigt. Prisen ekskl. moms er derfor den, der rammer regnskabet. Bruges bilen også privat, ændrer det både momsfradraget og afgiften."],
      ["Er registreringsafgiften med i prisen?",
       "Ja. Producenternes prislister opgiver prisen inkl. registreringsafgift, og det er den, vi fører. Leveringsomkostninger ligger derimod typisk uden for — enkelte producenter regner dem med, og det står i kildenoten på modelsiden."],
      ["Kan jeg bruge nyprisen til at regne ud, om et leasingtilbud er godt?",
       "Den giver et pejlemærke, men ikke et facit. Leasingtilbuddene dækker forskellige ting, og nogle har service med, mens andre ikke har. Restværdien afgør også en stor del af ydelsen. Brug nyprisen til at se, om ydelsen står i et rimeligt forhold til bilens værdi. På modelsiden kan du se, hvad hvert tilbud dækker."],
      ["Hvorfor mangler prisen på nogle modeller?",
       "Fordi producenten ikke offentliggør en dansk prisliste. Det gælder Iveco Daily, hvor hverken modelsiden eller kampagnesiden opgiver en nyvognspris — kun leasingydelsen. Vi skriver ikke et tal, vi ikke har læst i en kilde."]
    ]
  },
  // ── Tilfoejet 27-09-2026 ─────────────────────────────────────────────────
  // Mellemstoerrelsen faldt mellem "lille" (til 4 m3) og "stor" (3 tons).
  // Transit Custom, Trafic, Transporter og Stellantis-tvillingerne er netop
  // de biler, flest haandvaerkere koerer i.
  {
    slug: "mellemstor-varebil",
    svar: "Billigste mellemstore varebil lige nu:",
    h1: "Mellemstor varebil",
    kort: "Kassevogne på 4,75–5,4 m — størrelsen, flest håndværkere kører i.",
    title: "Mellemstor varebil til erhvervsleasing",
    desc: "Sammenlign leasing af mellemstore varebiler og kassevogne på 4,75–5,4 m: Transit Custom, Trafic, Transporter og flere. Mål, nyttelast og pris ekskl. moms.",
    intro: "Mellemstørrelsen er kompromiset: plads til reoler og tre europaller, men stadig en bil, der kan parkeres i en almindelig gade. Her er kassevognene på 4,75–5,4 m — Transit Custom, Transporter, Vito, Trafic, Jumpy og deres elversioner.",
    filtrer: function (r) { return stoerrelse(r.bil) === "mellem"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Lastrum", fraRad: function (r) { var v = (r.bil.lastrum || {}).volumen_m3; return v != null ? String(v).replace(".", ",") + " m³" : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt kassevognene på 4,75–5,4 m. Lavest først.",
    faq: [
      ["Hvad er en mellemstor varebil?",
       "Der er ingen officiel definition. Her betyder det et lastrum på over 4 og op til 8 m³ — typisk en kassevogn på omkring fem meter som Ford Transit Custom, Renault Trafic eller VW Transporter."],
      ["Kan en mellemstor varebil køres på almindeligt kørekort?",
       "De mellemstore modeller her, hvor producenten oplyser totalvægten, ligger alle under 3.500 kg, som er grænsen for kategori B. Totalvægten står på modelsiden — tjek den på den bil, du vælger."]
    ]
  },
  // Soegeordet er "operationel leasing varebil", ikke sammenligningen af de to.
  // Samme tilbud som i finansiel-eller-operationel, men kun den ene slags.
  {
    slug: "operationel-leasing-varebil",
    h1: "Operationel leasing af varebil",
    kort: "Kun aftaler uden restværdi: bilen afleveres tilbage, og udbyderen bærer risikoen.",
    artikel: function (med) { return leasingformArtikel("operationel", med); },
    title: "Operationel leasing af varebil — %n% tilbud fra %fra% kr./md.",
    desc: "Sammenlign %n% operationelle leasingtilbud på varebiler fra %fra% kr./md. ekskl. moms. Ingen restværdi — bilen afleveres tilbage. Ydelse og indhold side om side.",
    intro: "På operationel leasing afleverer du bilen, når aftalen udløber, og udbyderen bærer risikoen for, hvad den er værd. Der er ingen restværdi at hæfte for. Til gengæld står kilometergrænsen og tilbageleveringsvilkårene for alvor til regnskab — dem skal du læse.",
    filtrer: function (r) { return r.t.leasingtype === "operationel"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md." ; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Løbetid", fraRad: function (r) { return r.t.loebetid_mdr ? r.t.loebetid_mdr + " mdr." : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt de operationelle tilbud. Lavest først.",
    faq: [
      ["Hvad er operationel leasing af en varebil?",
       "En aftale, hvor bilen leveres tilbage, når løbetiden udløber. Der er ingen restværdi, du hæfter for — udbyderen bærer risikoen for bilens værdi."],
      ["Hvordan ved I, at tilbuddet er operationelt?",
       "Enten skriver udbyderen det selv, eller også oplyses der ingen restværdi, og så er typen sluttet deraf. Hvilken af delene står ved tilbuddet på modelsiden."],
      ["Er operationel leasing billigere end finansiel?",
       "Ikke nødvendigvis, og de to kan ikke sammenlignes direkte. Den finansielle ydelse afdrager bilen ned til en restværdi, du hæfter for."],
      ["Hvad koster det at køre flere kilometer end aftalt?",
       "Der betales pr. ekstra kilometer ved udløb. Ingen af de annoncerede tilbud oplyser prisen, så få den på skrift, før du skriver under."],
      ["Hvad sker der ved aflevering?",
       "Bilen vurderes for skader og slid ud over normal brug efter aftalens skala. Spørg, hvem der vurderer, og om der er et afleveringsgebyr."],
      ["Er service og reparation med i operationel leasing?",
       "Som regel. Hvor mange af tilbuddene der har det med, står i gennemgangen øverst på siden."],
      ["Kan jeg købe bilen efter operationel leasing?",
       "Ikke som en del af aftalen — bilen leveres tilbage. Spørg leasingselskabet, om de vil sælge den til dig."]
    ]
  },
  {
    slug: "finansiel-leasing-varebil",
    h1: "Finansiel leasing af varebil",
    kort: "Kun aftaler med restværdi: ved udløb skal restværdien indfries — af dig eller en køber, du anviser.",
    artikel: function (med) { return leasingformArtikel("finansiel", med); },
    title: "Finansiel leasing af varebil — %n% tilbud fra %fra% kr./md.",
    desc: "Sammenlign %n% finansielle leasingtilbud på varebiler fra %fra% kr./md. ekskl. moms. Ydelse, udbetaling, restværdi og løbetid side om side.",
    intro: "På finansiel leasing er der aftalt en restværdi. Når aftalen udløber, skal du selv eller en køber, du anviser, overtage bilen til det beløb — og er den mindre værd, er det dig, der betaler forskellen. Derfor skal restværdien læses lige så grundigt som ydelsen.",
    filtrer: function (r) { return r.t.leasingtype === "finansiel"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Restværdi", fraRad: function (r) { return r.t.restvaerdi != null ? talDK(r.t.restvaerdi) + " kr." : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt de finansielle tilbud. Lavest først. Restværdien er ikke regnet med.",
    faq: [
      ["Hvad er finansiel leasing af en varebil?",
       "En aftale med en fast restværdi. Når løbetiden udløber, skal du eller en køber, du anviser, overtage bilen til restværdien. Er bilen mindre værd, hæfter du for forskellen."],
      ["Hvorfor er restværdien ikke regnet med i prisen?",
       "Fordi den ikke er en udgift, før aftalen slutter — og om den bliver det, afhænger af, hvad bilen er værd til den tid. Den står ved siden af, så du kan se den."],
      ["Hvem hæfter for restværdien ved finansiel leasing?",
       "Det gør du som leasingtager. Ved udløb skal restværdien indfries — enten overtager du selv bilen, eller du anviser en køber."],
      ["Hvad sker der, hvis bilen er mindre værd end restværdien?",
       "Så betaler du forskellen. Er bilen mere værd, er overskuddet dit."],
      ["Er renten fast eller variabel?",
       "Det afhænger af aftalen. Flere udbydere skriver, at priserne er variable. Spørg, før du skriver under."],
      ["Kan jeg komme ud af en finansiel leasingaftale før tid?",
       "Typisk ved at indfri restgælden. Hvordan den opgøres, og hvilke gebyrer der kommer oveni, står i aftalens vilkår."]
    ]
  },
  {
    slug: "kassevogn-leasing",
    svar: "Billigste kassevogn lige nu:",
    h1: "Kassevogn leasing — sammenlign kassebiler til erhverv",
    kort: "Alle tilbud på lukkede kassevogne — fra små bybiler til store 3,5-tons kassebiler.",
    title: "Lease kassebil eller kassevogn — tilbud fra %fra% kr./md.",
    desc: "Lease en kassebil eller kassevogn til erhverv: %n% tilbud fra %fra% kr./md. ekskl. moms, med lastrum, nyttelast og udbetaling side om side. Få tilbud gratis.",
    intro: "En kassevogn — eller kassebil — er varebilen med lukket lastrum bag førerhuset. Det er langt den mest leasede erhvervsbil, og den findes i tre størrelser: små bybiler som Caddy og Berlingo, mellemstore som Transit Custom og Vito, og store 3,5-tons kassevogne som Sprinter, Crafter og Master. Her er alle tilbuddene på kassevogne, sorteret efter månedsydelsen med udbetalingen fordelt over løbetiden.",
    filtrer: function (r) { return r.bil.karrosseri === "kassevogn"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Lastrum", fraRad: function (r) { var v = (r.bil.lastrum || {}).volumen_m3; return v != null ? String(v).replace(".", ",") + " m³" : null; } },
    lavestBedst: true,
    kriterium: "månedsydelsen plus udbetalingen fordelt over løbetiden, blandt lukkede kassevogne. Lavest først.",
    faq: [
      ["Hvad er forskellen på en kassevogn, en kassebil og en varevogn?",
       "Ingen, i praksis. Kassevogn og kassebil er to ord for det samme: en varebil med lukket lastrum bag førerhuset. Varevogn bruges om alle varebiler, også ladbiler og pickupper."],
      ["Hvilken størrelse kassevogn skal jeg vælge?",
       "Det afhænger af lasten. Hvor producenten oplyser det, tager de små kassevogne på siden to europaller, de mellemstore tre og de store 3,5-tons kassevogne fire eller fem. Den lille kan til gengæld parkere i byen. Se de tre størrelser hver for sig i guiderne til lille, mellemstor og stor varebil."],
      ["Kan jeg køre en kassevogn på almindeligt kørekort?",
       "Ja, når den tilladte totalvægt er højst 3.500 kg, som på de fleste kassevogne her. For elektriske kassevogne må totalvægten være op til 4.250 kg på kategori B i Danmark."],
      ["Kører kassevognen på gule plader?",
       "Ja, en kassevogn til erhverv er registreret til godstransport og kører på gule plader. Så må den som udgangspunkt kun bruges erhvervsmæssigt — reglerne står i håndbogen."]
    ]
  },
  {
    slug: "erhvervsbil-leasing",
    unikModel: true,
    svar: "Billigste erhvervsbil lige nu:",
    h1: "Erhvervsbil leasing: varebil, kassevogn, ladbil og pickup",
    kort: "Den billigste leasingpris på hver erhvervsbil — kassevogne, ladbiler og pickupper på gule plader.",
    title: "Erhvervsbil leasing — %n% modeller fra %fra% kr./md.",
    desc: "Leasing af erhvervsbil til virksomheden: den billigste pris på hver varebil, kassevogn, ladbil og pickup på gule plader, med udbetalingen regnet med.",
    intro: "En erhvervsbil er i leasingsprog en bil til virksomheden på gule plader — en varebil, en kassevogn, en ladbil eller en pickup, registreret til godstransport. Her står hver model én gang, med det billigste tilbud vi har på den, målt på månedsydelsen plus udbetalingen fordelt over løbetiden. Klik på modellen for at se alle tilbud, målene og udstyret.",
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Type", fraRad: function (r) {
      var b = r.bil, s = b.karrosseri === "kassevogn" ? ({ pizzabil: "Lille kassevogn", mellem: "Mellemstor kassevogn", stor: "Stor kassevogn" }[stoerrelse(b)] || "Kassevogn")
        : b.karrosseri === "ladvogn" ? "Ladbil / chassis" : b.karrosseri === "pickup" ? "Pickup" : "Varebil";
      return s + (b.drivmiddel === "el" ? ", el" : b.drivmiddel === "plugin" ? ", plug-in" : "");
    } },
    lavestBedst: true,
    kriterium: "månedsydelsen plus udbetalingen fordelt over løbetiden, billigste tilbud pr. model. Lavest først.",
    faq: [
      ["Hvad er en erhvervsbil?",
       "En bil, virksomheden bruger i sit arbejde. I leasing handler det næsten altid om en varebil på gule plader: en kassevogn, en ladbil eller en pickup, der er registreret til godstransport og derfor har lavere afgift end en personbil."],
      ["Kan en personbil være en erhvervsbil?",
       "Den kan godt ejes af virksomheden, men den kører på hvide plader og beskattes som fri bil, hvis den bruges privat. Gule plader kræver, at bilen er konstrueret til godstransport."],
      ["Hvad er forskellen på erhvervsleasing og privatleasing?",
       "Erhvervsleasing er for virksomheder med CVR-nummer, og priserne er ekskl. moms, fordi virksomheden typisk kan trække momsen fra. Privatleasing er inkl. moms. Alle tilbud på siden er erhvervsleasing."],
      ["Må man køre privat i en erhvervsbil på gule plader?",
       "Som udgangspunkt nej. Der er undtagelser — frokost, op til 25 ture hjem om året, specialindrettede biler — og ellers dagsbevis eller papegøjeplader. Se håndbogen."]
    ]
  },
  {
    slug: "varebil-med-automatgear",
    svar: "Billigste varebil med automatgear lige nu:",
    h1: "Varebil med automatgear i erhvervsleasing",
    kort: "Tilbud, hvor udbyderen selv skriver automatgear — plus elvarebilerne, der alle er automatiske.",
    title: "Varebil med automatgear — leasing til erhverv",
    desc: "Leasing af varebil med automatgear: tilbud på automatiske diesel- og elvarebiler, sorteret efter pris med udbetalingen regnet med. Kilde og dato på hvert tilbud.",
    intro: "Automatgear gør byen og de mange stop lettere, og alle elvarebiler er automatiske. Her er tilbuddene, hvor udbyderen selv skriver automatgear i bilens navn (aut., EAT8, DSG, A8), plus elvarebilerne — sorteret efter månedsydelsen med udbetalingen fordelt over løbetiden. Står der ikke automatgear ved et dieseltilbud, er det ikke med, heller ikke hvis modellen findes med automat.",
    filtrer: function (r) {
      if (r.bil.drivmiddel === "el") return true;
      var v = r.t.variant || "";
      return /\baut\b|\baut\.|auto\b|automat|dsg|eat8|\bA8\b|aut\s?8/i.test(v) && !/\bman\b\.?/i.test(v);
    },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Gear", fraRad: function (r) { return r.bil.drivmiddel === "el" ? "El, automatisk" : "Automatgear"; } },
    lavestBedst: true,
    kriterium: "månedsydelsen plus udbetalingen fordelt over løbetiden, blandt tilbud med automatgear. Lavest først.",
    note: "Et dieseltilbud er kun med, når udbyderen selv skriver automatgear i bilens navn. Mange modeller fås med både manuelt gear og automat, og prisforskellen kan være flere hundrede kroner om måneden.",
    faq: [
      ["Er alle elvarebiler automatiske?",
       "Ja. En elvarebil har ingen gearkasse med flere trin, som man skifter i — den kører som en automat. Derfor er alle elvarebiler med på listen."],
      ["Koster automatgear mere i leasing?",
       "Som regel lidt, fordi bilen koster mere at købe. Sammenlign tilbuddet med den manuelle udgave på modelsiden, hvis modellen findes i begge."],
      ["Hvorfor er min yndlingsmodel ikke med?",
       "Fordi ingen udbyder, vi følger, lige nu har et tilbud på den med automatgear, eller fordi udbyderen ikke skriver gearkassen i tilbuddet. Vi gætter ikke."]
    ]
  },
  {
    slug: "varebil-med-lav-ejerafgift",
    unikModel: true,
    svar: "Billigste model med den laveste ejerafgift:",
    h1: "Varebil med lav grøn ejerafgift",
    kort: "Modellerne sorteret efter den halvårlige grønne ejerafgift — med leasingprisen ved siden af.",
    title: "Varebil med lav ejerafgift — grøn ejerafgift pr. halvår",
    desc: "Se hvilke varebiler der har den laveste grønne ejerafgift pr. halvår, og hvad de koster i erhvervsleasing. Afgiften for hver model med kilde.",
    intro: "Den grønne ejerafgift betales hvert halve år, så længe bilen er indregistreret, og den står sjældent i leasingtilbuddet. Forskellen mellem modellerne er stor, fordi afgiften følger bilens CO₂-udledning. Her er modellerne sorteret efter afgiften, og ved samme afgift efter den billigste samlede leasingpris.",
    filtrer: function (r) { return r.bil.ejerafgift_halvaar_kr != null; },
    maal: function (r) { return r.bil.ejerafgift_halvaar_kr; },
    vis: function (v) { return talDK(v) + " kr./halvår"; },
    kolonne: "Grøn ejerafgift",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: true,
    kriterium: "grøn ejerafgift pr. halvår for den udgave af bilen, som målene på modelsiden gælder for. Lavest først; ved samme afgift den laveste samlede leasingpris.",
    note: "Afgiften gælder den udgave af bilen, som målene på modelsiden gælder for. En anden motor, gearkasse eller karrosserilængde kan give en anden CO₂-værdi og dermed en anden afgift. Står afgiften ikke i leasingtilbuddet, betaler du den oveni.",
    faq: [
      ["Er den grønne ejerafgift med i leasingydelsen?",
       "Det varierer. Nogle udbydere skriver den ind i ydelsen, andre lægger den oveni. Kolonnen Inkluderet på modelsiden viser, hvad hvert tilbud skriver om ejerafgiften."],
      ["Hvorfor har elvarebilerne den laveste afgift?",
       "Fordi den grønne ejerafgift følger bilens CO₂-udledning, og en elvarebil udleder ingen ved kørsel. Derfor ligger alle elvarebilerne på listen på samme lave beløb."],
      ["Hvor finder jeg den præcise afgift for min bil?",
       "Afgiften for en konkret, indregistreret bil kan slås op i Motorregistret ud fra nummerpladen. Tallet her gælder udgaven på modelsiden."]
    ]
  },
  {
    slug: "varebil-med-lavt-braendstofforbrug",
    unikModel: true,
    svar: "Længst på literen:",
    h1: "Varebil med lavt brændstofforbrug",
    kort: "Diesel- og benzinvarebilerne sorteret efter km/l efter WLTP — med leasingprisen ved siden af.",
    title: "Varebil med lavt brændstofforbrug — km/l efter WLTP",
    desc: "Hvilken varebil kører længst på literen? Diesel- og benzinvarebiler sorteret efter producentens WLTP-forbrug, med leasingpris og kilde.",
    intro: "Brændstoffet er en af de største udgifter på en varebil, og det står aldrig i leasingtilbuddet. Her er diesel- og benzinmodellerne sorteret efter producentens forbrugstal efter WLTP. Forskellen mellem en lille og en stor varebil er næsten det dobbelte — regn den med, før du vælger størrelse.",
    filtrer: function (r) { return (r.bil.drivmiddel === "diesel" || r.bil.drivmiddel === "benzin") && r.bil.forbrug_km_pr_l != null; },
    maal: function (r) { return r.bil.forbrug_km_pr_l; },
    vis: function (v) { return String(v).replace(".", ",") + " km/l"; },
    kolonne: "Forbrug (WLTP)",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: false,
    kriterium: "producentens forbrug efter WLTP, blandet kørsel. Længst på literen først.",
    note: "WLTP er målt under standardforhold med en ulæsset bil. Last, kulde, bykørsel og tagbøjler trækker ned, så det reelle forbrug er højere. Plug-in-hybrider er ikke med, fordi deres WLTP-tal forudsætter, at batteriet lades.",
    faq: [
      ["Hvilken varebil bruger mindst brændstof?",
       "Den, der står øverst på siden. Det er typisk de små varebiler i pizzabilklassen, som kører næsten dobbelt så langt på literen som de store kassevogne."],
      ["Hvorfor kører min varebil kortere på literen end oplyst?",
       "Fordi WLTP måles med en ulæsset bil under standardforhold. Med last, i kulde og i bytrafik stiger forbruget. Tallet er bedst til at sammenligne modeller med hinanden."],
      ["Er en elvarebil billigere i drift?",
       "Ofte, men det afhænger af, hvor du lader, og hvad strømmen koster. Elvarebilerne står på en side for sig med rækkevidde og ladetid."]
    ]
  },
  {
    slug: "elvarebil-med-lang-raekkevidde",
    unikModel: true,
    svar: "Længste rækkevidde:",
    h1: "Elvarebil med lang rækkevidde",
    kort: "Elvarebilerne sorteret efter WLTP-rækkevidde — med batteri og leasingpris.",
    title: "Elvarebil med lang rækkevidde — WLTP og pris",
    desc: "Hvilken elvarebil kører længst på en opladning? Elvarebilerne sorteret efter producentens WLTP-rækkevidde, med leasingpris og kilde.",
    intro: "Rækkevidden afgør, om en elvarebil passer til din kørsel. Her er elvarebilerne sorteret efter producentens rækkevidde efter WLTP. Tallet gælder den batteristørrelse, specifikationerne på modelsiden er taget på — flere modeller fås med både et lille og et stort batteri.",
    filtrer: function (r) { return r.bil.drivmiddel === "el"; },
    maal: function (r) { var e = elForModel(r.bil.id); return e && e.raekkevidde_km != null ? e.raekkevidde_km : r.bil.raekkevidde_km; },
    vis: function (v) { return talDK(v) + " km"; },
    kolonne: "Rækkevidde (WLTP)",
    ekstra: { navn: "Inkl. udbetaling", fraRad: function (r) { return r.samlet != null ? talDK(r.samlet) + " kr./md." : null; } },
    lavestBedst: false,
    kriterium: "producentens rækkevidde efter WLTP. Længst først.",
    note: "WLTP er målt under standardforhold. Om vinteren, med last og ved motorvejskørsel er rækkevidden lavere.",
    faq: [
      ["Hvilken elvarebil har den længste rækkevidde?",
       "Den, der står øverst på siden. Tallet er producentens WLTP-rækkevidde for den batteristørrelse, modelsiden viser."],
      ["Hvor langt kører en elvarebil om vinteren?",
       "Kortere end WLTP-tallet. Kulde, opvarmning af kabinen og last trækker ned. Tallet er bedst til at sammenligne modeller med hinanden, ikke til at planlægge en konkret tur."],
      ["Hvor hurtigt lader elvarebilerne?",
       "Det står i modulet om opladning på hver elvarebils modelside, med producentens egne tal."]
    ]
  },
  {
    slug: "elvarebil-med-stort-lastrum",
    unikModel: true,
    svar: "Største lastrum:",
    h1: "Elvarebil med stort lastrum",
    kort: "Elvarebilerne sorteret efter lastrummets volumen — med nyttelast og leasingpris.",
    title: "Elvarebil med stort lastrum — m³, nyttelast og pris",
    desc: "Hvilken elvarebil har det største lastrum? Elvarebilerne sorteret efter producentens volumen i m³, med nyttelast, rækkevidde og leasingpris.",
    intro: "Batteriet tager ikke plads fra varerummet i de fleste elvarebiler, men det tager vægt fra nyttelasten. Her er elvarebilerne sorteret efter lastrummets volumen ifølge producenten, og nyttelasten står ved siden af — et stort lastrum, man ikke må fylde, er ikke meget værd.",
    filtrer: function (r) { return r.bil.drivmiddel === "el"; },
    maal: function (r) { return r.bil.lastrum && r.bil.lastrum.volumen_m3 != null ? r.bil.lastrum.volumen_m3 : null; },
    vis: function (v) { return kommaTal(v) + " m³"; },
    kolonne: "Lastrum",
    ekstra: { navn: "Nyttelast", fraRad: function (r) { return r.bil.nyttelast_kg != null ? talDK(r.bil.nyttelast_kg) + " kg" : null; } },
    lavestBedst: false,
    kriterium: "lastrummets volumen ifølge producenten. Størst først.",
    note: "Volumen og nyttelast gælder den udgave af bilen, der står på modelsiden. Mange modeller fås også i en længere eller højere udgave med mere plads.",
    faq: [
      ["Hvilken elvarebil har det største lastrum?",
       "Den, der står øverst på siden. De store elvarebiler i Ducato-, Master- og Movano-klassen har de største varerum; tallet er producentens eget for den udgave af bilen, modelsiden viser."],
      ["Tager batteriet plads fra lastrummet i en elvarebil?",
       "Sjældent, fordi batteriet ligger under gulvet. Men batteriet vejer, så nyttelasten er ofte lavere end i dieselversionen. Tjek begge tal."],
      ["Hvor langt kører en stor elvarebil?",
       "Det står på hver modelside og i guiden til elvarebiler med lang rækkevidde. De store modeller har typisk de største batterier, men også det højeste forbrug."]
    ]
  },
  // 04-10-2026: tre spørgsmål, folk stiller AI-søgning, som ingen guide svarede på.
  // Første FAQ-svar regnes ud af listen, så det navngiver vinderen med tal.
  {
    slug: "stoerste-varebil-paa-almindeligt-koerekort",
    unikModel: true,
    svar: "Største lastrum på B-kørekort:",
    h1: "Største varebil på almindeligt kørekort",
    kort: "Varebiler med en tilladt totalvægt på højst 3.500 kg, sorteret efter lastrummets volumen.",
    title: "Største varebil på almindeligt kørekort — m³ og pris",
    desc: "Hvilken varebil har mest plads på B-kørekort? Varebiler op til 3.500 kg totalvægt sorteret efter lastrum i m³, med nyttelast og leasingpris ekskl. moms.",
    intro: "Kørekort i kategori B dækker biler med en tilladt totalvægt på højst 3.500 kg. Her er varebilerne inden for den grænse sorteret efter lastrummets volumen ifølge producenten, med nyttelasten ved siden af. Flere store kassevogne fås både som 3.500 kg og i tungere udgaver; tallene gælder den udgave af bilen, modelsiden viser.",
    filtrer: function (r) { return r.bil.totalvaegt_kg != null && r.bil.totalvaegt_kg <= 3500; },
    maal: function (r) { return r.bil.lastrum && r.bil.lastrum.volumen_m3 != null ? r.bil.lastrum.volumen_m3 : null; },
    vis: function (v) { return kommaTal(v) + " m³"; },
    kolonne: "Lastrum",
    ekstra: { navn: "Nyttelast / pris", fraRad: function (r) {
      return (r.bil.nyttelast_kg != null ? talDK(r.bil.nyttelast_kg) + " kg" : "–") + (r.samlet != null ? " · " + talDK(Math.round(r.samlet)) + " kr./md." : "");
    } },
    lavestBedst: false,
    kriterium: "lastrummets volumen ifølge producenten blandt varebiler med en tilladt totalvægt på højst 3.500 kg. Størst først, én pr. model.",
    note: "Totalvægten står på registreringsattesten. Samme model kan fås i flere vægtklasser, så tjek den konkrete bil.",
    tilpas: function (med) {
      var rr = med.map(function (x) { return x.r; });
      if (!rr.length) return {};
      var top = rr[0].bil.lastrum.volumen_m3;
      var lige = rr.filter(function (r) { return r.bil.lastrum.volumen_m3 === top; });
      var billigst = lige.filter(function (r) { return r.samlet != null; })
        .reduce(function (m, r) { return !m || r.samlet < m.samlet ? r : m; }, null);
      return { faq: [["Hvad er den største varebil, man må køre på almindeligt kørekort?",
        ogListe(lige.map(navnR)) + " har det største lastrum blandt varebilerne på højst 3.500 kg: " +
        kommaTal(top) + " m³ ifølge producenten" +
        (billigst ? ". Billigst " + (lige.length > 1 ? "af dem er " + navnR(billigst) + " til " : "er den til ") + talDK(Math.round(billigst.samlet)) + " kr. om måneden med udbetalingen fordelt, hos " + billigst.t.udbyder + ", ekskl. moms" : "") + "."]].concat(this.faq) };
    },
    faq: [
      ["Hvor tung en varebil må man køre på almindeligt kørekort?",
       "Kategori B dækker biler med en tilladt totalvægt på højst 3.500 kg. Totalvægten står på registreringsattesten. Til tungere varebiler kræves kategori C1, der går op til 7.500 kg."],
      ["Hvorfor har de største varebiler en lavere nyttelast?",
       "Totalvægten er et loft. Jo mere bilen selv vejer, jo mindre er der tilbage til last inden for 3.500 kg. Derfor står nyttelasten ved siden af lastrummet."]
    ]
  },
  {
    slug: "elvarebil-med-hurtig-opladning",
    unikModel: true,
    svar: "Højeste ladeeffekt:",
    h1: "Elvarebil med hurtig opladning",
    kort: "Elvarebilerne sorteret efter maksimal DC-ladeeffekt — med ladetid og leasingpris.",
    title: "Elvarebil med hurtig opladning — kW og ladetid",
    desc: "Hvilken elvarebil lader hurtigst? Elvarebilerne sorteret efter producentens maksimale DC-ladeeffekt i kW, med ladetid og leasingpris ekskl. moms.",
    intro: "På en lynlader afgør bilens maksimale DC-effekt, hvor hurtigt batteriet fyldes. Her er elvarebilerne sorteret efter den effekt, producenten oplyser. Ladetiden står ved siden af, men producenterne måler den over forskellige intervaller, fx 10–80 % eller 0–80 %, så intervallet står ved tallet.",
    filtrer: function (r) { var e = elForModel(r.bil.id); return r.bil.drivmiddel === "el" && !!e && e.dc_kw != null; },
    maal: function (r) { return elForModel(r.bil.id).dc_kw; },
    vis: function (v) { return talDK(v) + " kW"; },
    kolonne: "DC-ladeeffekt",
    ekstra: { navn: "Ladetid", fraRad: function (r) {
      var e = elForModel(r.bil.id);
      if (e.dc_tid_min == null) return "Ikke oplyst";
      var interval = e.dc_tid_note ? e.dc_tid_note.split(" ved ")[0].split(".")[0] : "";
      return e.dc_tid_min + " min" + (interval ? " (" + interval + ")" : "") + (/tilvalg/i.test(e.dc_tid_note || "") ? " · DC-lader er tilvalg" : "");
    } },
    lavestBedst: false,
    kriterium: "producentens maksimale DC-ladeeffekt. Højest først, én pr. model.",
    note: "Den maksimale effekt holdes kun i en del af opladningen og afhænger af batteriets temperatur og laderen. Tallene gælder den batteristørrelse, modelsiden viser.",
    tilpas: function (med) {
      var rr = med.map(function (x) { return x.r; });
      if (!rr.length) return {};
      var top = elForModel(rr[0].bil.id).dc_kw;
      var lige = rr.filter(function (r) { return elForModel(r.bil.id).dc_kw === top; });
      return { faq: [["Hvilken elvarebil lader hurtigst?",
        ogListe(lige.map(navnR)) + " kan lade med op til " + talDK(top) + " kW DC ifølge producenten, det højeste blandt elvarebilerne på siden. Ladetiden afhænger også af batteriets størrelse, så den står ved hver model."]].concat(this.faq) };
    },
    faq: [
      ["Hvad betyder DC-ladeeffekt?",
       "Det er den højeste effekt, bilen kan tage imod fra en lynlader med jævnstrøm. Hjemme og på arbejdspladsen lades der med vekselstrøm (AC), hvor bilens indbyggede lader sætter grænsen; den står i modulet om opladning på modelsiden."],
      ["Hvorfor kan ladetiderne ikke sammenlignes direkte?",
       "Producenterne måler over forskellige intervaller, fx 10–80 % eller 0–80 %, og batterierne har forskellig størrelse. Intervallet står ved hver ladetid."]
    ]
  },
  {
    slug: "elvarebil-med-v2l",
    unikModel: true,
    svar: "Billigste elvarebil med V2L:",
    h1: "Elvarebil med strøm til værktøj (V2L)",
    kort: "Elvarebiler, hvor producenten oplyser V2L — strøm fra bilens batteri til værktøj og udstyr.",
    title: "Elvarebil med V2L — strøm til værktøj, fra %fra% kr./md.",
    titelUdenPris: "Elvarebil med V2L — strøm til værktøj",
    desc: "Hvilke elvarebiler kan levere strøm til værktøj? Elvarebiler, hvor producenten oplyser V2L (vehicle-to-load), sorteret efter leasingpris ekskl. moms.",
    intro: "Med V2L (vehicle-to-load) leverer bilens batteri strøm til værktøj, kompressor eller lys, hvor der ikke er en stikkontakt. Her er de elvarebiler, hvor producentens prisliste eller specifikation nævner V2L, sorteret efter den reelle pris. Effekten står ved modellen, hvor producenten oplyser den.",
    filtrer: function (r) { var e = elForModel(r.bil.id); return r.bil.drivmiddel === "el" && !!e && e.v2l === true; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "V2L-effekt", fraRad: function (r) { var e = elForModel(r.bil.id); return e.v2l_kw ? kommaTal(e.v2l_kw) + " kW" : "Ikke oplyst"; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt elvarebiler, hvor producenten oplyser V2L. Lavest først, én pr. model.",
    note: "Listen omfatter kun modeller, hvor producenten selv oplyser V2L i de kilder, der er linket fra modelsiden. Andre modeller kan have funktionen som tilvalg.",
    tilpas: function (med) {
      var rr = med.map(function (x) { return x.r; });
      if (!rr.length) return {};
      var kw = rr.filter(function (r) { return elForModel(r.bil.id).v2l_kw; });
      return { faq: [["Hvilke elvarebiler har V2L?",
        ogListe(rr.map(navnR)) + " ifølge producenterne. Billigst er " + navnR(rr[0]) + " til " + talDK(Math.round(rr[0].samlet)) +
        " kr. om måneden med udbetalingen fordelt, hos " + rr[0].t.udbyder + ", ekskl. moms."]].concat(kw.length ? [["Hvor meget strøm kan en elvarebil levere?",
        "Hvor producenten oplyser effekten, er den " + ogListe(kw.map(function (r) { return navnR(r) + " " + kommaTal(elForModel(r.bil.id).v2l_kw) + " kW"; })) +
        ". Det rækker til de fleste håndværktøjer, men ikke nødvendigvis til flere store maskiner på én gang."]] : []).concat(this.faq) };
    },
    faq: [
      ["Hvad er V2L?",
       "Vehicle-to-load: bilen leverer strøm fra sit batteri til udstyr uden for bilen, enten gennem en stikkontakt i bilen eller en adapter i ladestikket. Strømmen trækkes fra rækkevidden."]
    ]
  },
  {
    slug: "varebil-til-haandvaerker",
    svar: "Billigste håndværkervarebil lige nu:",
    h1: "Bedste varevogn til håndværkere",
    kort: "Kassevogne med mindst 1.000 kg nyttelast og 2.000 kg anhængervægt, sorteret efter den reelle pris.",
    title: "Bedste varevogn til håndværker — leasing fra %fra% kr./md.",
    desc: "Varevogne til håndværkere: kassevogne med mindst 1.000 kg nyttelast og 2.000 kg anhængervægt, sorteret efter den reelle leasingpris ekskl. moms.",
    intro: "En håndværker skal kunne have værktøj og materialer med og trække en trailer. Derfor er her kun kassevogne med mindst 1.000 kg nyttelast og 2.000 kg anhængervægt ifølge producenten, sorteret efter hvad de reelt koster om måneden med udbetalingen fordelt. Tallene står for den udgave af bilen, modelsiden viser.",
    filtrer: function (r) {
      return r.bil.karrosseri === "kassevogn" && r.bil.nyttelast_kg != null && r.bil.nyttelast_kg >= 1000 &&
        r.bil.anhaengervaegt_kg != null && r.bil.anhaengervaegt_kg >= 2000;
    },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Nyttelast / træk", fraRad: function (r) { return talDK(r.bil.nyttelast_kg) + " / " + talDK(r.bil.anhaengervaegt_kg) + " kg"; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt kassevogne med mindst 1.000 kg nyttelast og 2.000 kg anhængervægt. Lavest først.",
    artikel: function () { return fagLinksHTML(null); },
    note: "Grænserne er vores valg, ikke en officiel definition. Skal du bruge indretning, kran eller lift, så læs om specialindretning — det ændrer både nyttelast og afgift.",
    faq: [
      ["Hvad er den bedste varevogn til en håndværker?",
       "Det afhænger af, hvad der skal med. Her er kassevognene med mindst 1.000 kg nyttelast og 2.000 kg anhængervægt, sorteret efter pris. Den billigste står øverst; lastrum og mål står på hver modelside."],
      ["Hvor meget skal en håndværkers varebil kunne trække?",
       "Mange håndværkere trækker en trailer, og 2.000 kg bremset anhængervægt dækker de fleste. Skal der trækkes mere, så tjek modelsiden — flere store kassevogne må trække 2.500–3.500 kg."],
      ["Hvad med indretning af varebilen?",
       "Reoler og værkstedsindretning vejer og trækker fra nyttelasten. Se hvad indretning koster og vejer under Til varebilen."]
    ]
  },
  {
    slug: "diesel-varebil",
    svar: "Billigste dieselvarebil lige nu:",
    h1: "Dieselvarebil i erhvervsleasing",
    kort: "De dieseldrevne modeller, sorteret efter samlet pris.",
    title: "Dieselvarebil til erhvervsleasing — sammenlign tilbud",
    desc: "Sammenlign leasing af dieselvarebiler til erhverv. Samlet pris pr. måned inkl. udbetaling, forbrug og nyttelast ekskl. moms.",
    intro: "Halvdelen af de nye varebiler er elektriske, men diesel er stadig det, de fleste tilbud på siden handler om. Her er de dieseldrevne modeller. Tænk restværdien med: hvad en dieselvarebil er værd om fem år, afhænger af, hvor hurtigt markedet skifter.",
    filtrer: function (r) { return r.bil.drivmiddel === "diesel"; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: { navn: "Forbrug", fraRad: function (r) { return r.bil.forbrug_km_pr_l != null ? String(r.bil.forbrug_km_pr_l).replace(".", ",") + " km/l" : null; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt de dieseldrevne modeller. Lavest først.",
    faq: [
      ["Kan det betale sig at lease en dieselvarebil i 2026?",
       "Det afhænger af kørslen. En dieselvarebil har længere rækkevidde og hurtig tankning, men højere grøn ejerafgift end en elvarebil. Sammenlign begge på samlet pris, og regn afgiften med."]
    ]
  }
];

// Tilbud der kvalificerer til en guide, sorteret efter guidens eget maal.
function guideRaekker(g, rader) {
  var kilde = g.filtrer ? rader.filter(g.filtrer) : rader;
  var med = kilde.map(function (r) { return { r: r, v: g.maal(r) }; })
                 .filter(function (x) { return x.v != null && isFinite(x.v); });
  med.sort(function (a, b) {
    return (g.lavestBedst ? a.v - b.v : b.v - a.v) || ((a.r.samlet || 1e9) - (b.r.samlet || 1e9));
  });
  if (g.unikModel) {
    var set = {}, ud = [];
    med.forEach(function (x) {
      if (set[x.r.bil.id]) return;
      set[x.r.bil.id] = 1; ud.push(x);
    });
    return ud;
  }
  return med;
}

// Kort paa hub-siden. Tallet er antallet af tilbud, ikke modeller: det er tilbud
// man sammenligner, og tallet skal kunne genfindes paa selve guidesiden.
function guideKortHTML(g, rader) {
  var n = guideRaekker(g, rader).length;
  if (!n) return "";
  return [
    '<li class="guidekort">',
    '  <a class="guidekort__link" href="/bedste-tilbud/' + g.slug + '/">',
    '    <span class="guidekort__antal">' + n + (g.unikModel ? ' modeller' : ' tilbud') + '</span>',
    '    <span class="guidekort__navn">' + esc(g.h1) + '</span>',
    '    <span class="guidekort__kort">' + esc(g.kort) + '</span>',
    '    <span class="guidekort__mere">Se guide og tilbud</span>',
    '  </a>',
    '</li>'
  ].join("\n");
}

// Hele listen af kvalificerede tilbud. Ranglisten ovenfor viser de fem bedste;
// den her viser resten, saa siden ikke skjuler noget.
function guideTabelHTML(g, med) {
  var ekstra = g.ekstra;
  var hoved = '<tr><th>Model</th><th>Udbyder</th>' +
    '<th>' + esc(g.kolonne) + '</th>' +
    (ekstra ? '<th>' + esc(ekstra.navn) + '</th>' : '') +
    '<th>Vilkår</th><th>Type</th><th>Kilde</th></tr>';

  var krop = med.map(function (x) {
    var r = x.r, t = r.t;
    var vilkaar = [];
    if (t.loebetid_mdr) vilkaar.push(t.loebetid_mdr + " mdr.");
    if (t.km_pr_aar) vilkaar.push(talDK(t.km_pr_aar) + " km/år"); else if (t.km_fri) vilkaar.push("fri km");
    if (t.gyldig_til) vilkaar.push("gælder til " + visDato(t.gyldig_til));
    var type = t.leasingtype
      ? (t.leasingtype_grundlag === "restvaerdi"
          ? '<abbr class="udledt" title="Udbyderen skriver ikke hvilken type aftalen er, men oplyser en restværdi. Det er kendetegnet ved finansiel leasing.">' + esc(t.leasingtype) + '*</abbr>'
          : esc(t.leasingtype))
      : '<span class="tom">Ikke oplyst</span>';
    var e = ekstra ? ekstra.fraRad(r) : null;
    return [
      '<tr>',
      '<td class="tilbud-model"><a href="' + r.sti + '">' + esc(r.navn) + '</a>' +
        (t.variant ? '<span class="spec-variant">' + esc(t.variant) + '</span>' : '') + '</td>',
      '<td>' + esc(t.udbyder) + '</td>',
      '<td class="tal">' + esc(g.vis(x.v, r)) + '</td>',
      ekstra ? '<td class="tal">' + (e ? esc(e) : '<span class="tom">–</span>') + '</td>' : '',
      '<td class="tilbud-tekst">' + (vilkaar.length ? esc(vilkaar.join(" · ")) : '<span class="tom">Ikke oplyst</span>') + '</td>',
      '<td class="tilbud-tekst">' + type + '</td>',
      '<td class="kilde"><a href="' + esc(t.kilde_url) + '" rel="nofollow noopener" target="_blank">Kilde</a><br>' + esc(visDato(t.kilde_dato)) + '</td>',
      '</tr>'
    ].filter(function (l) { return l !== ''; }).join("");
  }).join("\n");

  return '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel">' +
         '<thead>' + hoved + '</thead><tbody>' + krop + '</tbody></table></div>';
}

function guideFaqHTML(g) {
  if (!g.faq || !g.faq.length) return "";
  var punkter = g.faq.map(function (q) {
    return '<details class="faq__punkt"><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>';
  }).join("\n");
  return '<section class="sektion" style="padding-left:0;padding-right:0">' +
         '<h2>Spørgsmål og svar</h2><div class="faq">' + punkter + '</div></section>';
}

// Hvilken vidensartikel der hoerer til hvilken guide. Uden en tilknytning
// vises de to mest generelle - alle laesere har brug for at vide, hvad der
// ikke staar i tilbuddet, og hvad afgiften goer ved regnestykket.
var GUIDE_VIDEN = {
  "billigste-varebil": ["billig-varebil", "smaa-varebiler", "det-staar-ikke-i-leasingtilbuddet"],
  "varebil-under-3500-kr": ["billig-varebil", "det-staar-ikke-i-leasingtilbuddet", "groen-ejerafgift-paa-varebil"],
  "hvad-koster-en-varebil": ["leasing-eller-koeb-af-varebil", "groen-ejerafgift-paa-varebil", "syn-af-varebil"],
  "el-varebil": ["elvarebil-i-praksis", "takograf-paa-varebil"],
  "varebil-med-hoej-nyttelast": ["totalvaegt-nyttelast-og-koerekort", "maal-du-skal-tjekke-foer-du-skriver-under", "takograf-paa-varebil"],
  "varebil-til-europaller": ["maal-du-skal-tjekke-foer-du-skriver-under", "totalvaegt-nyttelast-og-koerekort"],
  "varebil-til-parkeringskaelder": ["maal-du-skal-tjekke-foer-du-skriver-under", "smaa-varebiler", "specialindretning-af-varebil"],
  "stor-varebil": ["hastighedsgraenser-for-varebiler", "totalvaegt-nyttelast-og-koerekort", "takograf-paa-varebil"],
  "lille-varebil": ["smaa-varebiler", "billig-varebil", "specialindretning-af-varebil"],
  "varebil-med-traek": ["anhaenger-bag-varebilen", "varebil-eller-pickup"],
  "varebil-med-service-inkluderet": ["det-staar-ikke-i-leasingtilbuddet", "syn-af-varebil"],
  "varebil-med-lav-udbetaling": ["det-staar-ikke-i-leasingtilbuddet", "leasing-eller-koeb-af-varebil"],
  "varebil-med-kort-loebetid": ["kilometergraensen-paa-leasingaftalen", "leasing-eller-koeb-af-varebil", "syn-af-varebil"],
  "finansiel-eller-operationel-leasing": ["leasing-eller-koeb-af-varebil", "fri-bil-paa-gule-plader"],
  "mellemstor-varebil": ["maal-du-skal-tjekke-foer-du-skriver-under", "specialindretning-af-varebil"],
  "operationel-leasing-varebil": ["kilometergraensen-paa-leasingaftalen", "det-staar-ikke-i-leasingtilbuddet"],
  "finansiel-leasing-varebil": ["leasing-eller-koeb-af-varebil", "moms-paa-varebil"],
  "diesel-varebil": ["miljoezoner-og-varebiler", "halvdelen-af-nye-varebiler-er-elektriske"],
  "varebil-med-lav-ejerafgift": ["groen-ejerafgift-paa-varebil", "det-staar-ikke-i-leasingtilbuddet"],
  "varebil-med-automatgear": ["elvarebil-i-praksis", "tage-varebilen-med-hjem"],
  "kassevogn-leasing": ["maal-du-skal-tjekke-foer-du-skriver-under", "hvad-maa-du-koere-i-en-varebil-paa-gule-plader", "specialindretning-af-varebil"],
  "erhvervsbil-leasing": ["gule-hvide-eller-papegoejeplader", "moms-paa-varebil", "leasing-eller-koeb-af-varebil"],
  "varebil-med-lavt-braendstofforbrug": ["halvdelen-af-nye-varebiler-er-elektriske", "miljoezoner-og-varebiler"],
  "elvarebil-med-lang-raekkevidde": ["elvarebil-i-praksis", "halvdelen-af-nye-varebiler-er-elektriske"]
};

function guideVidenHTML(g) {
  if (!VIDEN.length) return '';
  var valgt = GUIDE_VIDEN[g.slug] ||
    ["det-staar-ikke-i-leasingtilbuddet", "groen-ejerafgift-paa-varebil"];
  var a = valgt.map(function (slug) {
    return VIDEN.filter(function (x) { return x.slug === slug; })[0];
  }).filter(Boolean);
  if (!a.length) return '';
  return [
    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Læs også</h2>',
    '<div class="vidensgitter">',
    a.map(function (x) {
      return [
        '<article class="videnkort">',
        '  <a href="' + videnSti(x) + '">',
        '    <p class="videnkort__emne">' + esc(x.emne) + '</p>',
        '    <h3>' + esc(x.h1) + '</h3>',
        '    <p class="videnkort__kort">' + esc(String(x.kort || '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')) + '</p>',
        '    <p class="videnkort__meta">' + x.laesetid + ' min. · ' +
        (x.kilder || []).length + ' kilder</p>',
        '  </a>',
        '</article>'
      ].join('');
    }).join(''),
    '</div>',
    '</section>'
  ].join('');
}
function guideAndreHTML(g, rader) {
  var andre = GUIDER.filter(function (x) {
    return x.slug !== g.slug && guideRaekker(x, rader).length > 0;
  }).map(function (x) {
    return '<li><a href="/bedste-tilbud/' + x.slug + '/">' + esc(x.h1) + '</a></li>';
  }).join("\n");
  return '<section class="sektion" style="padding-left:0;padding-right:0">' +
         '<h2>Andre guider</h2><ul class="guidelinks">' + andre + '</ul></section>';
}

// ── /bedste-tilbud/bedste-varebil-<aar>/ ────────────────────────────────────
//
// "Bedste varebil 2026" er det, folk skriver. Der findes ikke én bedste
// varebil, saa siden paastaar det heller ikke: den viser vinderen i hver af
// guiderne, med det tal den vinder paa. Alt kommer fra guideRaekker(), saa
// siden kan aldrig vaere uenig med guiderne.
//
// Aaret laeses af datafilens dato. Skifter aaret, faar siden en ny URL, og
// den gamle skal have en 301 i _redirects.
var AARETS_UDEN = ["finansiel-eller-operationel-leasing"];

function aaretsAar(data) { return String(data.sidst_opdateret || "").slice(0, 4); }
function aaretsSti(data) { return "/bedste-tilbud/bedste-varebil-" + aaretsAar(data) + "/"; }

function aaretsVindere(data) {
  var rader = alleTilbud(data);
  return GUIDER.filter(function (g) { return AARETS_UDEN.indexOf(g.slug) < 0; })
    .map(function (g) {
      var top = guideRaekker(g, rader)[0];
      return top ? { g: g, r: top.r, v: top.v } : null;
    }).filter(Boolean);
}

// ── Årets valg (05-10-2026, preview) ────────────────────────────────────────
// GULPLADE_AARETS_NY=1: øverst står vores samlede vurdering af den bedste bil
// i hver klasse, ikke kun den billigste. Valget og begrundelsen står i
// aarets-valg.json med anmeldelser og kilde. Pris, mål og udbyder kommer fra
// varebiler.json, så tallene følger tilbuddene. De 52 kategorier, der kåres på
// ét tal, står i en sammenklappet tabel nedenunder. Uden flaget ser siden ud som før.
// Godkendt til produktion 05-10-2026. GULPLADE_AARETS_NY=0 giver det gamle udseende.
var AARETS_NY = process.env.GULPLADE_AARETS_NY !== "0";
var AARETS_VALG = (function () {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "aarets-valg.json"), "utf8")); }
  catch (e) { return []; }
})();

// Det billigste tilbud på modellen, målt på samlet pris pr. md.
function aaretsBedsteTilbud(data, id) {
  return alleTilbud(data).filter(function (r) { return r.bil.id === id && r.samlet != null; })
    .sort(function (a, b) { return a.samlet - b.samlet; })[0] || null;
}

function aaretsValg(data) {
  return AARETS_VALG.map(function (v) {
    var r = aaretsBedsteTilbud(data, v.model);
    return r ? { v: v, r: r } : null;
  }).filter(Boolean);
}

function aaretsFaktaLinje(b) {
  var d = [];
  if (b.drivmiddel === "el" && b.raekkevidde_km) d.push(talDK(b.raekkevidde_km) + " km rækkevidde");
  if ((b.lastrum || {}).volumen_m3 != null) d.push(kommaTal(b.lastrum.volumen_m3) + " m³ lastrum");
  if (b.nyttelast_kg) d.push(talDK(b.nyttelast_kg) + " kg nyttelast");
  if (b.anhaengervaegt_kg) d.push(talDK(b.anhaengervaegt_kg) + " kg træk");
  return d.join(" · ");
}

function aaretsPrisLinje(r) {
  var t = r.t, d = [];
  if (t.foerstegangsydelse === 0) d.push("ingen udbetaling");
  else if (t.foerstegangsydelse) d.push(talDK(t.foerstegangsydelse) + " kr. i udbetaling");
  if (t.loebetid_mdr) d.push(t.loebetid_mdr + " måneder");
  d.push("tilbud fra " + (t.udbyder || ""));
  return d.join(" · ");
}

function aaretsKortHTML(data) {
  return '<ol class="aarets">' + aaretsValg(data).map(function (x, i) {
    var v = x.v, r = x.r, b = r.bil;
    var anm = (v.anmeldelser || []).map(function (a) {
      return '<li><a href="' + esc(a.url) + '" rel="noopener">' + esc(a.kilde) + '</a>: ' + esc(a.tekst) + '</li>';
    }).join("");
    return '<li class="aarets__kort' + (i === 0 ? ' aarets__kort--foerst' : '') + '">' +
      '<a class="aarets__billede" href="' + r.sti + '" tabindex="-1" aria-hidden="true">' +
      (b.billede ? '<img src="' + esc(i === 0 && b.billede_stor ? b.billede_stor : b.billede) + '" alt="" width="800" height="500" loading="' + (i < 2 ? 'eager' : 'lazy') + '" decoding="async">' : '') +
      '</a><div class="aarets__krop">' +
      '<p class="aarets__kat">' + esc(v.label) + '</p>' +
      '<h3 class="aarets__navn"><a href="' + r.sti + '">' + esc(r.navn) + '</a></h3>' +
      '<p class="aarets__tal">Fra ' + esc(talDK(Math.round(r.samlet))) + ' kr./md.</p>' +
      '<p class="aarets__fakta">' + esc(aaretsFaktaLinje(b)) + '</p>' +
      '<p class="aarets__hvorfor">' + esc(v.hvorfor) + '</p>' +
      (anm ? '<div class="aarets__anm"><p>Det skriver pressen</p><ul>' + anm + '</ul></div>' : '') +
      '<p class="aarets__hos">' + esc(aaretsPrisLinje(r)) + '</p>' +
      '<p class="aarets__links"><a class="aarets__se" href="' + r.sti + '">Se tilbud på ' + esc(r.navn) + '</a>' +
      (v.guide ? '<a class="aarets__guide" href="/bedste-tilbud/' + esc(v.guide) + '/">Sammenlign med lignende biler</a>' : '') + '</p>' +
      '</div></li>';
  }).join("") + '</ol>';
}

function aaretsHTML(data) {
  var aar = aaretsAar(data);
  var sti = aaretsSti(data);
  var canonical = BASE_URL + sti;
  var vindere = aaretsVindere(data);
  var rader = alleTilbud(data);

  // Hvilke modeller vinder flest kategorier
  var sejre = {};
  vindere.forEach(function (x) {
    var k = x.r.navn;
    (sejre[k] = sejre[k] || { navn: k, sti: x.r.sti, kat: [] }).kat.push(x.g.h1);
  });
  var top = Object.keys(sejre).map(function (k) { return sejre[k]; })
    .sort(function (a, b) { return b.kat.length - a.kat.length; });
  var flest = top[0];

  function vinder(slug) { return vindere.filter(function (x) { return x.g.slug === slug; })[0]; }
  var billigst = vinder("billigste-varebil");
  var el = vinder("el-varebil");

  var faq = [];
  if (AARETS_NY) {
    var valg = aaretsValg(data);
    if (valg.length) faq.push(["Hvad er den bedste varebil i " + aar + "?",
      "Vi har kåret " + valg[0].r.navn + " som årets varebil. " + valg[0].v.hvorfor +
      " Den bedste bil afhænger dog af, hvad den skal bruges til, så vi har også kåret en vinder i hver klasse."]);
    if (billigst) faq.push(["Hvilken varebil er billigst at lease i " + aar + "?",
      "Den billigste er " + billigst.r.navn + " hos " + billigst.r.t.udbyder + ". Den koster " + talDK(Math.round(billigst.r.samlet)) +
      " kr. om måneden, når udbetalingen er fordelt over løbetiden."]);
    if (el) faq.push(["Hvilken elvarebil er billigst at lease i " + aar + "?",
      "Den billigste elvarebil er " + el.r.navn + " hos " + el.r.t.udbyder + ". Den koster " + talDK(Math.round(el.r.samlet)) +
      " kr. om måneden, når udbetalingen er fordelt over løbetiden."]);
  } else {
  faq.push(["Hvad er den bedste varebil i " + aar + "?",
    "Det afhænger af, hvad den skal bruges til — derfor kårer vi en vinder i hver af " + vindere.length +
    " kategorier i stedet for én. " + (flest && flest.kat.length > 1
      ? flest.navn + " vinder flest: " + flest.kat.length + " kategorier."
      : "Ingen model vinder mere end én kategori.")]);
  if (billigst) faq.push(["Hvilken varebil er billigst at lease i " + aar + "?",
    billigst.r.navn + " hos " + billigst.r.t.udbyder + ", til " + billigst.g.vis(billigst.v, billigst.r) +
    " ekskl. moms, når udbetalingen er fordelt over løbetiden."]);
  if (el) faq.push(["Hvilken elvarebil er billigst at lease i " + aar + "?",
    el.r.navn + " hos " + el.r.t.udbyder + ", til " + el.g.vis(el.v, el.r) +
    " ekskl. moms, når udbetalingen er fordelt over løbetiden."]);
  }
  faq.push(["Hvor kommer tallene fra?",
    "Fra " + rader.length + " leasingtilbud, som udbyderne selv har offentliggjort. Kilde og dato står ved hvert tilbud på modelsiden. Ingen udbyder kan købe en placering."]);

  var schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forsiden", item: BASE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Bedste tilbud", item: BASE_URL + "/bedste-tilbud/" },
        { "@type": "ListItem", position: 3, name: "Bedste varebil " + aar } ] },
      { "@type": "FAQPage", mainEntity: faq.map(function (q) {
        return { "@type": "Question", name: q[0],
                 acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) }
    ]
  }, null, 2);

  return [
    // 02-10-2026: "bedste varevogn", "hvilken varebil er bedst" (Search Console).
    AARETS_NY
      ? hoved(titel("Bedste varebil " + aar + ": vinderen i hver klasse"),
        beskrivelse("Hvilken varebil er bedst til erhvervsleasing i " + aar + "? Vi har sammenlignet " + rader.length + " tilbud og kåret vinderen i hver klasse ud fra " +
          "pris, mål og anmeldelser. Se, hvorfor de vandt."),
        canonical, schema)
      : hoved(titel("Bedste varebil og varevogn " + aar + " — vinderen i hver klasse"),
      beskrivelse("Bedste varebil " + aar + " til erhvervsleasing: vinderen i " + vindere.length +
        " kategorier — billigst, el, nyttelast, lastrum, træk og mere. " + rader.length +
        " tilbud ekskl. moms med kilde og dato."),
      canonical, schema),
    header(),
    '<main id="indhold" class="bil-side">',
    '<nav class="breadcrumb"><ol>',
    '<li><a href="/">Forsiden</a></li>',
    '<li><a href="/bedste-tilbud/">Bedste tilbud</a></li>',
    '<li aria-current="page">Bedste varebil ' + esc(aar) + '</li>',
    '</ol></nav>',

    '<div class="bil-hero">',
    '  <div class="bil-hero__tekst">',
    '    <p class="bil-maerke">Uafhængig sammenligning · ingen betalte placeringer</p>',
    '    <h1>Bedste varebil ' + esc(aar) + '</h1>',
    AARETS_NY
      ? '    <p class="bil-hero__manchet">Der findes ikke én bedste varebil. Den bedste til en tømrer, ' +
        'der kører europaller, er ikke den bedste til en elektriker, der parkerer i en kælder. ' +
        'Vi har gennemgået ' + rader.length + ' tilbud på ' + data.varebiler.length + ' modeller og kåret den bedste bil i hver klasse. ' +
        'Vi har set på pris, lastrum, nyttelast og rækkevidde og læst, hvad anmelderne skriver. ' +
        'Ved hver bil kan du læse, hvorfor den vandt.</p>'
      : '    <p class="bil-hero__manchet">Der findes ikke én bedste varebil. Den bedste til en tømrer, ' +
      'der kører europaller, er ikke den bedste til en elektriker, der parkerer i en kælder. ' +
      'Derfor er her vinderen i hver af de ' + vindere.length + ' kategorier, vi sammenligner på — ' +
      'med det tal, den vinder på.</p>',
    GUIDE_NY ? '    <p class="guide-knapper">' + tilbudsknapHTML("", "Få tilbud gratis") + '</p>' + guideTillidHTML() : '',
    '    <p class="bil-hero__variant">' + rader.length + ' tilbud · ' + data.varebiler.length +
      ' modeller · alle priser ' + (AARETS_NY ? 'uden' : 'ekskl.') + ' moms · opdateret ' + esc(visDato(data.sidst_opdateret)) + '</p>',
    '  </div>',
    '</div>',

    AARETS_NY ? [
      '<section class="sektion" style="padding-left:0;padding-right:0">',
      '<h2>Årets vindere</h2>',
      '<p>Vi har kåret vinderne ud fra en samlet vurdering af hver klasse. ' +
        'Ved månedsprisen har vi brugt det billigste tilbud på hver bil og fordelt udbetalingen over løbetiden.</p>',
      aaretsKortHTML(data),
      '</section>',
      '<section class="sektion" style="padding-left:0;padding-right:0">',
      '<h2>Vinderen på tal i ' + vindere.length + ' kategorier</h2>',
      '<p>I hver kategori vinder den bil, der har det bedste tal, for eksempel den laveste pris, den største nyttelast eller den højeste trækvægt. ' +
        'Klikker du på en kategori, ser du alle bilerne sorteret efter det tal.</p>',
      '<details class="aarets-alle"><summary>Vis tabellen med alle ' + vindere.length + '</summary>',
      '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel">',
      '<thead><tr><th scope="col">Kategori</th><th scope="col">Vinder</th>' +
        '<th scope="col">Udbyder</th><th scope="col">Vinder på</th></tr></thead>',
      '<tbody>',
      vindere.map(function (x) {
        return '<tr><th scope="row"><a href="/bedste-tilbud/' + x.g.slug + '/">' + esc((GUIDE_TEKSTER[x.g.slug] || {}).h1 || x.g.h1) + '</a></th>' +
          '<td><a href="' + x.r.sti + '">' + esc(x.r.navn) + '</a></td>' +
          '<td>' + esc(x.r.t.udbyder || "") + '</td>' +
          '<td>' + esc(x.g.vis(x.v, x.r)) + '<br><span class="kilde">' + esc(x.g.kolonne) + '</span></td></tr>';
      }).join("\n"),
      '</tbody></table></div></details>',
      '</section>'
    ].join("\n") : '',

    AARETS_NY ? '' : '<section class="sektion" style="padding-left:0;padding-right:0">',
    AARETS_NY ? '' : '<h2>Vinderne i ' + vindere.length + ' kategorier</h2>',
    AARETS_NY ? '' : GUIDE_NY ? '<ul class="vinderkort">' + vindere.map(function (x) {
      var b = x.r.bil;
      return '<li><a href="/bedste-tilbud/' + x.g.slug + '/">' +
        (b && b.billede ? '<img src="' + esc(b.billede) + '" alt="" width="800" height="500" loading="lazy" decoding="async">' : '') +
        '<span class="vinderkort__kat">' + esc((GUIDE_TEKSTER[x.g.slug] || {}).h1 || x.g.h1) + '</span>' +
        '<span class="vinderkort__navn">' + esc(b ? b.maerke + ' ' + kortNavn(b) : x.r.navn) + '</span>' +
        '<span class="vinderkort__tal">' + esc(x.g.vis(x.v, x.r)) + '</span>' +
        '<span class="vinderkort__hos">' + esc(x.r.t.udbyder || "") + '</span></a></li>';
    }).join("") + '</ul>' : [
    '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel">',
    '<thead><tr><th scope="col">Kategori</th><th scope="col">Vinder</th>' +
      '<th scope="col">Udbyder</th><th scope="col">Vinder på</th></tr></thead>',
    '<tbody>',
    vindere.map(function (x) {
      return '<tr><th scope="row"><a href="/bedste-tilbud/' + x.g.slug + '/">' + esc(x.g.h1) + '</a></th>' +
        '<td><a href="' + x.r.sti + '">' + esc(x.r.navn) + '</a></td>' +
        '<td>' + esc(x.r.t.udbyder || "") + '</td>' +
        '<td>' + esc(x.g.vis(x.v, x.r)) + '<br><span class="kilde">' + esc(x.g.kolonne) + '</span></td></tr>';
    }).join("\n"),
    '</tbody></table></div>'].join("\n"),
    AARETS_NY ? '' : '<p class="kilde">Hver kategori fører til guiden med hele listen og kriteriet skrevet ud. ' +
      'Vinderen er det tilbud, der ligger øverst i guiden i dag.</p>',
    AARETS_NY ? '' : '</section>',

    // Med de nye kort står antallet af sejre på kortet i stedet.
    top.length && !AARETS_NY ? [
      '<section class="sektion" style="padding-left:0;padding-right:0">',
      '<h2>Modellerne med flest sejre</h2>',
      '<ul class="guidelinks">',
      top.slice(0, 5).map(function (m) {
        return '<li><a href="' + m.sti + '">' + esc(m.navn) + '</a> — ' + m.kat.length +
          (m.kat.length === 1 ? ' kategori' : ' kategorier') + ': ' + esc(m.kat.join(", ").toLowerCase()) + '</li>';
      }).join("\n"),
      '</ul>',
      '</section>'
    ].join("\n") : '',

    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Spørgsmål om bedste varebil ' + esc(aar) + '</h2>',
    '<dl class="faq">',
    faq.map(function (q) { return '<div><dt>' + esc(q[0]) + '</dt><dd>' + esc(q[1]) + '</dd></div>'; }).join("\n"),
    '</dl>',
    '</section>',

    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Har du allerede et tilbud?</h2>',
    '<p>Send det ind, så gennemgår vi det på de samme punkter, som vi sammenligner på her.</p>',
    '<p style="margin-top:1.5rem"><a href="/tilbudstjek/" class="knap knap--primaer">Tjek dit tilbud</a></p>',
    '</section>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// Den samme slags bil brugt. Kun hvis listen findes - generate-brugte.js
// skriver den ikke, naar der er for faa biler.
var GUIDE_BRUGT = {
  "billigste-varebil": ["billige-brugte-varebiler", "Billige brugte varebiler"],
  "lille-varebil": ["brugt-lille-varebil", "Brugt lille varebil"],
  "mellemstor-varebil": ["brugt-mellemstor-varebil", "Brugt mellemstor varebil"],
  "stor-varebil": ["brugt-stor-varebil", "Brugt stor varebil"],
  "el-varebil": ["brugt-elvarebil", "Brugt elvarebil"],
  "ladbil": ["brugt-ladvogn", "Brugt ladvogn og ladbil"],
  "varebil-med-traek": ["brugt-varebil-med-traek", "Brugt varebil med træk"],
  "varebil-med-lav-udbetaling": ["brugt-varebil-leasing", "Leasing af brugt varebil"],
  "finansiel-leasing-varebil": ["brugt-varebil-leasing", "Leasing af brugt varebil"]
};
function guideBrugtHTML(g) {
  var b = GUIDE_BRUGT[g.slug];
  if (!b || !fs.existsSync(path.join(__dirname, "brugte-varebiler", b[0], "index.html"))) return '';
  return [
    '<section class="sektion--kort">',
    '  <h2>Hellere en brugt?</h2>',
    '  <p>En brugt bil af samme slags kan købes kontant, og mange kan også leases hos forhandleren. Kilometertal, årgang og grøn ejerafgift står på hver bil. <a href="/brugte-varebiler/' + b[0] + '/">' + esc(b[1]) + '</a></p>',
    '</section>'
  ].join('\n');
}

// Gennemgangen på guiderne om finansiel og operationel leasing (02-10-2026).
// Finansiel ELLER operationel (02-10-2026): de to typer side om side, regnet
// af alle tilbud med oplyst type, og de modeller der findes som begge.
function leasingformSammenligning(med) {
  var rr = med.map(function (x) { return x.r; });
  var F = rr.filter(function (r) { return r.t.leasingtype === "finansiel"; });
  var O = rr.filter(function (r) { return r.t.leasingtype === "operationel"; });
  if (!F.length || !O.length) return '';
  function median(a) {
    a = a.filter(function (x) { return x != null; }).sort(function (p, q) { return p - q; });
    return a.length ? a[Math.floor(a.length / 2)] : null;
  }
  function hyppigst(a) {
    var m = {}, best = null;
    a.filter(function (x) { return x != null; }).forEach(function (x) { m[x] = (m[x] || 0) + 1; if (best == null || m[x] > m[best]) best = x; });
    return best;
  }
  function inkl(L, p) { return L.filter(function (r) { return (r.t.inkluderet || []).indexOf(p) >= 0; }).length; }
  function kr(v) { return v == null ? "—" : talDK(v) + " kr."; }
  function andel(k, L) { return k + " af " + L.length; }
  function laveste(L) { return L.reduce(function (m, r) { return r.samlet != null && (m == null || r.samlet < m.samlet) ? r : m; }, null); }
  var lf = laveste(F), lo = laveste(O);
  var raekker = [
    ["Tilbud på gulplade.dk", String(F.length), String(O.length)],
    ["Typisk førstegangsydelse", kr(median(F.map(function (r) { return r.t.foerstegangsydelse; }))), kr(median(O.map(function (r) { return r.t.foerstegangsydelse; })))],
    ["Typisk ydelse pr. md.", kr(median(F.map(function (r) { return r.t.maanedspris; }))), kr(median(O.map(function (r) { return r.t.maanedspris; })))],
    ["Typisk inkl. udbetaling pr. md.", kr(median(F.map(function (r) { return r.samlet; }))), kr(median(O.map(function (r) { return r.samlet; })))],
    ["Mest brugte løbetid", (hyppigst(F.map(function (r) { return r.t.loebetid_mdr; })) || "—") + " mdr.", (hyppigst(O.map(function (r) { return r.t.loebetid_mdr; })) || "—") + " mdr."],
    ["Restværdi oplyst", andel(F.filter(function (r) { return r.t.restvaerdi != null; }).length, F) + " · typisk " + kr(median(F.map(function (r) { return r.t.restvaerdi; }))), "Ingen — bilen leveres tilbage"],
    ["Service og reparation inkluderet", andel(inkl(F, "service_reparation"), F), andel(inkl(O, "service_reparation"), O)],
    ["Dæk inkluderet", andel(inkl(F, "daek"), F), andel(inkl(O, "daek"), O)],
    ["Laveste inkl. udbetaling", lf ? kr(lf.samlet) + "/md. · " + esc(lf.bil.maerke + " " + lf.bil.model) : "—", lo ? kr(lo.samlet) + "/md. · " + esc(lo.bil.maerke + " " + lo.bil.model) : "—"]
  ];
  var fast = [
    ["Hvem bærer risikoen for bilens værdi", "Dig: restværdien skal indfries af dig eller en køber, du anviser", "Leasingselskabet"],
    ["Ved udløb", "Restværdien indfries — bilen kan overtages", "Bilen afleveres og vurderes"],
    ["Kilometer", "Påvirker restværdien og bilens salgsværdi", "Aftalt grænse; ekstra km betales pr. km"],
    ["Passer til", "Dig, der vil kunne beholde bilen, kører meget eller bygger om", "Dig, der vil kende udgiften og ikke bære værdirisikoen"]
  ];

  // Modeller med begge typer: billigste af hver, målt inkl. udbetaling.
  var pr = {};
  rr.forEach(function (r) {
    if (r.samlet == null) return;
    var p = pr[r.bil.id] = pr[r.bil.id] || { bil: r.bil, sti: r.sti };
    var k = r.t.leasingtype === "finansiel" ? "f" : r.t.leasingtype === "operationel" ? "o" : null;
    if (k && (!p[k] || r.samlet < p[k].samlet)) p[k] = r;
  });
  var par = Object.keys(pr).map(function (k) { return pr[k]; })
    .filter(function (p) { return p.f && p.o; })
    .sort(function (a, b) { return (a.f.samlet + a.o.samlet) - (b.f.samlet + b.o.samlet); });
  var parHTML = '';
  if (par.length) {
    var billigstF = par.filter(function (p) { return p.f.samlet < p.o.samlet; }).length;
    parHTML = [
      '<h3>Samme model, begge typer</h3>',
      '<p>' + par.length + ' modeller kan leases både finansielt og operationelt hos de udbydere, vi følger. Her er det billigste tilbud af hver type, med udbetalingen fordelt over løbetiden. På ' + billigstF + ' af dem er det finansielle tilbud billigst pr. måned — men husk restværdien, som den operationelle aftale ikke har, og servicen, som den finansielle sjældent har.</p>',
      '<div class="sbs__rul"><table class="sbs">',
      '<thead><tr><th>Model</th><th>Finansiel</th><th>Operationel</th></tr></thead><tbody>',
      par.map(function (p) {
        function celle(r, fin) {
          return talDK(r.samlet) + ' kr./md.<small>' + esc(r.t.udbyder) + ' · ' + r.t.loebetid_mdr + ' mdr.' +
            (fin && r.t.restvaerdi != null ? ' · restværdi ' + talDK(r.t.restvaerdi) + ' kr.' : '') +
            (!fin && (r.t.inkluderet || []).indexOf("service_reparation") >= 0 ? ' · service inkl.' : '') + '</small>';
        }
        return '<tr><th scope="row"><a href="' + p.sti + '">' + esc(p.bil.maerke + ' ' + p.bil.model) + '</a></th><td>' + celle(p.f, true) + '</td><td>' + celle(p.o, false) + '</td></tr>';
      }).join(''),
      '</tbody></table></div>',
      '<p class="kilde">Bilerne er ikke nødvendigvis de samme: udbyderne annoncerer hver deres udstyrsniveau og motor. Klik på modellen for at se alle tilbud.</p>'
    ].join('\n');
  }

  return [
    '<section class="sektion leasingform" style="padding-left:0;padding-right:0">',
    '<h2>Finansiel og operationel leasing side om side</h2>',
    '<p class="sektion__manchet">Regnet af alle ' + (F.length + O.length) + ' tilbud på gulplade.dk, hvor aftaletypen er kendt. Beløb ekskl. moms.</p>',
    '<div class="sbs__rul"><table class="sbs">',
    '<thead><tr><th></th><th>Finansiel</th><th>Operationel</th></tr></thead><tbody>',
    raekker.concat(fast).map(function (x) { return '<tr><th scope="row">' + x[0] + '</th><td>' + x[1] + '</td><td>' + x[2] + '</td></tr>'; }).join(''),
    '</tbody></table></div>',
    '<p>Tallene viser forskellen i praksis: de operationelle aftaler har næsten altid service med og ingen restværdi, mens de finansielle typisk løber længere og efterlader et beløb, der skal indfries. Derfor er den laveste ydelse ikke nødvendigvis den billigste aftale.</p>',
    parHTML,
    '<h3>Sådan sammenligner du de to typer</h3>',
    '<ol class="viden__liste">',
    '<li><strong>Fordel udbetalingen</strong> over løbetiden og læg den til ydelsen — det er kolonnen “Inkl. udbetaling”.</li>',
    '<li><strong>Læg service til den finansielle</strong>, hvis den ikke er med: den operationelle har den næsten altid.</li>',
    '<li><strong>Vurder restværdien</strong> på den finansielle: hvad er bilen realistisk værd efter løbetiden og jeres kilometer? Forskellen er din gevinst eller regning.</li>',
    '<li><strong>Tjek kilometer og aflevering</strong> på den operationelle: prisen pr. ekstra km og vurderingsskalaen.</li>',
    '</ol>',
    '<p>Dybere ned i hver type: <a href="/bedste-tilbud/finansiel-leasing-varebil/">finansiel leasing af varebil</a> og <a href="/bedste-tilbud/operationel-leasing-varebil/">operationel leasing af varebil</a> — med regneeksempel, tjekliste og ordliste. Forskellen forklaret: <a href="/haandbogen/finansiel-og-operationel-leasing/">Håndbogen</a>. Vil du have to tilbud regnet op mod hinanden, så brug <a href="/tilbudstjek/">tilbudstjekket</a>.</p>',
    '</section>'
  ].join('\n');
}

function leasingformArtikel(type, med) {
  var t = med.map(function (x) { return x.r.t; });
  var n = t.length;
  if (!n) return '';
  function median(a) {
    a = a.filter(function (x) { return x != null; }).sort(function (p, q) { return p - q; });
    return a.length ? a[Math.floor(a.length / 2)] : null;
  }
  function hyppigst(a) {
    var m = {}, best = null;
    a.filter(function (x) { return x != null; }).forEach(function (x) { m[x] = (m[x] || 0) + 1; if (best == null || m[x] > m[best]) best = x; });
    return best;
  }
  function inkl(p) { return t.filter(function (x) { return (x.inkluderet || []).indexOf(p) >= 0; }).length; }
  function af(k) { return k + ' af ' + n; }
  var udb = median(t.map(function (x) { return x.foerstegangsydelse; }));
  var ydelse = median(t.map(function (x) { return x.maanedspris; }));
  var loeb = hyppigst(t.map(function (x) { return x.loebetid_mdr; }));
  var km = hyppigst(t.map(function (x) { return x.km_pr_aar; }));
  var medRest = t.filter(function (x) { return x.restvaerdi != null; }).length;
  var restMedian = median(t.map(function (x) { return x.restvaerdi; }));

  // Regneeksempel: det billigste tilbud på listen med alle tal oplyst.
  var eks = med.map(function (x) { return x.r; }).filter(function (rr) {
    return rr.t.maanedspris != null && rr.t.foerstegangsydelse != null && rr.t.loebetid_mdr &&
      (type === 'operationel' || rr.t.restvaerdi != null);
  })[0];
  var eksHTML = '';
  if (eks) {
    var e = eks.t, ialt = e.foerstegangsydelse + e.maanedspris * e.loebetid_mdr;
    var navn = eks.bil.maerke + ' ' + eks.bil.model;
    eksHTML = [
      '<h3>Regneeksempel: ' + esc(navn) + ' hos ' + esc(e.udbyder) + '</h3>',
      '<p>Et rigtigt tilbud fra listen herunder, alle beløb ekskl. moms:</p>',
      '<table class="tjek-eks__tal" style="max-width:560px">',
      '<tr><td>Førstegangsydelse</td><td>' + talDK(e.foerstegangsydelse) + ' kr.</td></tr>',
      '<tr><td>' + e.loebetid_mdr + ' × ' + talDK(e.maanedspris) + ' kr.</td><td>' + talDK(e.maanedspris * e.loebetid_mdr) + ' kr.</td></tr>',
      '<tr class="tjek-eks__sum"><td>Betalt i løbetiden</td><td>' + talDK(ialt) + ' kr.</td></tr>',
      type === 'finansiel'
        ? '<tr><td>Restværdi, der skal indfries ved udløb</td><td>' + talDK(e.restvaerdi) + ' kr.</td></tr>' +
          '<tr class="tjek-eks__sum"><td>I alt, hvis du selv overtager bilen</td><td>' + talDK(ialt + e.restvaerdi) + ' kr.</td></tr>'
        : '<tr><td>Pr. måned med udbetalingen fordelt</td><td>' + talDK(Math.round(ialt / e.loebetid_mdr)) + ' kr.</td></tr>',
      '</table>',
      type === 'finansiel'
        ? '<p>Sælger du bilen ved udløb i stedet, går salgsprisen til at indfri restværdien. Er den højere, er overskuddet dit; er den lavere, betaler du forskellen. Dertil kommer de gebyrer og driftsposter, tilbuddet ikke dækker.</p>'
        : '<p>Dertil kommer de poster, ydelsen ikke dækker, betaling for kilometer ud over grænsen og eventuelle udgifter ved aflevering. Bilen leveres tilbage — der er intet at indfri.</p>'
    ].join('\n');
  }

  var tal = type === 'finansiel' ? [
    '<li><strong>' + af(medRest) + '</strong> finansielle tilbud oplyser restværdien' + (restMedian != null ? ' — typisk ' + talDK(restMedian) + ' kr.' : '.') + '</li>',
    '<li><strong>' + af(inkl('service_reparation')) + '</strong> har service og reparation med i ydelsen.</li>',
    udb != null ? '<li>Den typiske førstegangsydelse er <strong>' + talDK(udb) + ' kr.</strong>, og den typiske ydelse <strong>' + talDK(ydelse) + ' kr./md.</strong></li>' : '',
    loeb ? '<li>Den mest brugte løbetid er <strong>' + loeb + ' måneder</strong>' + (km ? ', og det mest brugte kilometertal ' + talDK(km) + ' km om året' : '') + '.</li>' : ''
  ] : [
    '<li><strong>' + af(inkl('service_reparation')) + '</strong> operationelle tilbud har service og reparation med i ydelsen.</li>',
    (inkl('daek') + inkl('forsikring') === 0 ? '<li>Ingen af de ' + n + ' nævner dæk eller forsikring som inkluderet.</li>' : '<li><strong>' + af(inkl('daek')) + '</strong> nævner dæk som inkluderet, og <strong>' + af(inkl('forsikring')) + '</strong> forsikring.</li>'),
    udb != null ? '<li>Den typiske førstegangsydelse er <strong>' + talDK(udb) + ' kr.</strong>, og den typiske ydelse <strong>' + talDK(ydelse) + ' kr./md.</strong></li>' : '',
    loeb ? '<li>Den mest brugte løbetid er <strong>' + loeb + ' måneder</strong>' + (km ? ', og det mest brugte kilometertal ' + talDK(km) + ' km om året' : '') + '.</li>' : ''
  ];

  var F = type === 'finansiel';
  var afsnit = F ? [
    ['Sådan virker finansiel leasing', [
      'Leasingselskabet køber bilen, og du betaler en førstegangsydelse og en månedlig ydelse. Ydelsen dækker den del af bilens værdi, der forsvinder i løbetiden, plus renter og gebyrer. Tilbage står restværdien — det beløb, bilen ifølge aftalen er værd ved udløb.',
      'Ved udløb skal restværdien indfries: enten overtager du selv bilen til restværdien, eller også anviser du en køber, der gør. Den risiko er din. Sælges bilen for mere, er overskuddet dit; sælges den for mindre, betaler du forskellen.'
    ]],
    ['Restværdien og risikoen', [
      'En høj restværdi giver en lav ydelse, fordi mindre af bilens værdi skal betales i løbetiden — men den gør også risikoen ved udløb større. To finansielle tilbud kan derfor ikke sammenlignes på ydelsen alene: førstegangsydelse, ydelse og restværdi skal ses samlet, holdt op mod hvad bilen realistisk er værd efter løbetiden og det antal kilometer, der køres.',
      'Mange finansielle tilbud oplyser også et kilometertal. Spørg, hvad det betyder for restværdien og aftalen, hvis I kører mere.'
    ]],
    ['Rente: fast eller variabel', [
      'Ydelsen indeholder en rente. Flere udbydere skriver i deres vilkår, at priserne er variable, så ydelsen kan følge renten i løbetiden. Spørg, om renten er fast eller variabel, og hvad den følger.'
    ]],
    ['Hvis aftalen skal stoppe før tid', [
      'Skal aftalen afsluttes før udløb, skal restgælden typisk indfries. Hvordan den opgøres, og hvilke gebyrer der kommer oveni, står i aftalens vilkår — få det på skrift, før du skriver under.'
    ]],
    ['Hvornår passer finansiel leasing?', [
      'Når du gerne vil kunne beholde bilen bagefter, kører meget eller uforudsigeligt, bygger bilen om eller sætter indretning i, som gør den mere værd for dig end for andre — og når du er klar til at bære risikoen for, hvad bilen er værd ved udløb.'
    ]]
  ] : [
    ['Sådan virker operationel leasing', [
      'Du lejer bilen i en aftalt periode med et aftalt antal kilometer. Du betaler en førstegangsydelse og en månedlig ydelse, og når perioden slutter, leverer du bilen tilbage. Leasingselskabet ejer bilen og bærer risikoen for, hvad den er værd ved udløb — der er ingen restværdi, du hæfter for.'
    ]],
    ['Kilometergrænse og overkørsel', [
      'Aftalen gælder et bestemt antal kilometer om året. Kører I mere, betales der for hver ekstra kilometer; kører I mindre, giver nogle aftaler en godtgørelse. Ingen af de annoncerede tilbud oplyser prisen pr. ekstra kilometer, så få den på skrift — og vælg et kilometertal, der passer til jeres faktiske kørsel. Se [kilometergrænsen på leasingaftalen](/haandbogen/kilometergraensen-paa-leasingaftalen/).'
    ]],
    ['Aflevering og vurdering', [
      'Når bilen leveres tilbage, vurderes den for skader og slid ud over normal brug. Spørg, hvilken skala der bruges, hvem der foretager vurderingen, og om der er et afleveringsgebyr. Indretning og reoler skal ofte fjernes før aflevering.'
    ]],
    ['Hvis aftalen skal stoppe før tid', [
      'Skal bilen leveres tilbage før tid, opkræver leasingselskabet typisk en kompensation. Hvordan den beregnes, står i aftalens vilkår — få det på skrift, før du skriver under.'
    ]],
    ['Hvornår passer operationel leasing?', [
      'Når du vil kende den samlede udgift på forhånd, ikke vil bære risikoen for bilens værdi om nogle år, kører et forudsigeligt antal kilometer og gerne vil have service og reparation med i én fast ydelse.'
    ]]
  ];

  var tjek = F ? [
    'Restværdiens størrelse — og om bilen realistisk er det værd ved udløb',
    'Hvordan restværdien indfries: selv overtage eller anvise en køber',
    'Fast eller variabel rente, og hvad den følger',
    'Pris for at stoppe før tid',
    'Etablerings- og administrationsgebyrer',
    'Hvad ydelsen dækker: service, dæk, forsikring, ejerafgift'
  ] : [
    'Pris pr. kilometer over grænsen — og om der er godtgørelse for færre',
    'Vurderingsskala ved aflevering, og hvem der vurderer',
    'Afleveringsgebyr',
    'Pris for at stoppe før tid',
    'Hvad ydelsen dækker: service, dæk, forsikring, ejerafgift, vejhjælp',
    'Regler for indretning, og om den skal fjernes ved aflevering'
  ];

  var ord = F ? [
    ['Førstegangsydelse', 'Den første, større betaling ved aftalens start.'],
    ['Restværdi', 'Det beløb, bilen ifølge aftalen er værd ved udløb, og som skal indfries.'],
    ['Indfrielse', 'Betaling af restværdien ved udløb — af dig selv eller en køber, du anviser.'],
    ['Anvisning', 'At du finder en køber, som overtager bilen til restværdien.'],
    ['Variabel rente', 'En rente, der kan ændre sig i løbetiden, så ydelsen følger med.']
  ] : [
    ['Førstegangsydelse', 'Den første, større betaling ved aftalens start.'],
    ['Kilometergrænse', 'Det antal kilometer om året, ydelsen er beregnet til.'],
    ['Overkørte kilometer', 'Kilometer ud over grænsen, som betales pr. km ved aftalens udløb.'],
    ['Normal slitage', 'Det slid, der ikke koster ekstra ved aflevering — defineret i aftalens vurderingsskala.'],
    ['Afleveringsgebyr', 'Et fast gebyr, nogle selskaber opkræver, når bilen leveres tilbage.']
  ];

  function md(x) { return esc(x).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'); }
  return [
    '<section class="sektion leasingform" style="padding-left:0;padding-right:0">',
    '<h2>' + (F ? 'Finansiel leasing af varebil' : 'Operationel leasing af varebil') + ': sådan virker det</h2>',
    '<p class="sektion__manchet">' + (F
      ? 'Alt, hvad du skal vide før du skriver under — med tal fra alle ' + n + ' finansielle tilbud på gulplade.dk.'
      : 'Alt, hvad du skal vide før du skriver under — med tal fra alle ' + n + ' operationelle tilbud på gulplade.dk.') + '</p>',
    '<h3>Det viser tilbuddene</h3>',
    '<ul class="viden__liste">' + tal.filter(Boolean).join('') + '</ul>',
    afsnit.map(function (a) {
      return '<h3>' + esc(a[0]) + '</h3>' + a[1].map(function (p) { return '<p>' + md(p) + '</p>'; }).join('');
    }).join('\n'),
    eksHTML,
    '<h3>Tjekliste før underskrift</h3>',
    '<ul class="viden__liste">' + tjek.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>',
    '<h3>Ordliste</h3>',
    '<dl class="leasingform__ord">' + ord.map(function (o) { return '<div><dt>' + esc(o[0]) + '</dt><dd>' + esc(o[1]) + '</dd></div>'; }).join('') + '</dl>',
    '<p>' + (F
      ? 'Sammenlign med <a href="/bedste-tilbud/operationel-leasing-varebil/">operationel leasing</a>, eller læs <a href="/haandbogen/finansiel-og-operationel-leasing/">forskellen forklaret</a>.'
      : 'Sammenlign med <a href="/bedste-tilbud/finansiel-leasing-varebil/">finansiel leasing</a>, eller læs <a href="/haandbogen/finansiel-og-operationel-leasing/">forskellen forklaret</a>.') +
      ' Har du et tilbud, kan du få det gennemgået med et <a href="/tilbudstjek/">tilbudstjek</a> — eller lade os <a href="/faa-tilbud/">hente tilbud</a> på samme grundlag.' +
      // 05-10-2026: Google sendte "varebil leasing" hertil; linket peger på forsiden, som skal eje ordet.
      ' Du kan også <a href="/">sammenligne alle tilbud på varebilsleasing</a>, både finansiel og operationel leasing.</p>',
    // 02-10-2026: størrelsessiderne for samme leasingform.
    '<h3>' + (F ? 'Finansiel' : 'Operationel') + ' leasing efter størrelse</h3>',
    '<p class="maerkelinks">' + [["elvarebil", "Elvarebil"], ["lille-varebil", "Lille varebil"], ["mellemstor-varebil", "Mellemstor varebil"], ["stor-varebil", "Stor varebil"]].map(function (x) {
      return '<a href="/bedste-tilbud/' + type + '-leasing-' + x[0] + '/">' + x[1] + '</a>';
    }).join('') + '</p>',
    '</section>'
  ].join('\n');
}

// ── Nyt udseende på guiderne (04-10-2026, preview) ─────────────────────────
// GULPLADE_GUIDE_NY=1 giver guiderne en top med de tre bedste som kort,
// tillidspunkter og en tydelig knap, og bruger Google-teksterne fra
// guide-tekster.json (title, desc, h1, intro, svar pr. slug, med %fra%, %n%
// og %aar% som pladsholdere). Uden flaget ser siderne ud som før.
// Godkendt til produktion 04-10-2026. GULPLADE_GUIDE_NY=0 giver det gamle udseende.
var GUIDE_NY = process.env.GULPLADE_GUIDE_NY !== "0";
var GUIDE_TEKSTER = (function () {
  try {
    var l = JSON.parse(fs.readFileSync(path.join(__dirname, "guide-tekster.json"), "utf8")), m = {};
    l.forEach(function (x) { m[x.slug] = x; });
    return m;
  } catch (e) { return {}; }
})();

function guidePodiumHTML(g, med) {
  var sete = {}, top = med.filter(function (x) {
    if (sete[x.r.bil.id]) return false; sete[x.r.bil.id] = 1; return true;
  }).slice(0, 3);
  if (top.length < 2) return '';
  var prisErMaal = /kr\./.test(g.vis(top[0].v, top[0].r));
  return '<ol class="podium">' + top.map(function (x, i) {
    var b = x.r.bil, navn = b.maerke + ' ' + kortNavn(b);
    var billede = b.billede
      ? '<img src="' + esc(b.billede) + '" alt="' + esc(navnMedType(b)) + '" width="800" height="500" loading="eager" decoding="async">'
      : '<div class="bilkort__intetbillede">' + esc(b.model) + '</div>';
    var fra = x.r.samlet != null ? talDK(Math.round(x.r.samlet)) + ' kr./md.' : null;
    return '<li class="podium__kort' + (i === 0 ? ' podium__kort--vinder' : '') + '">' +
      '<a href="' + modelSti(b) + '">' +
      '<div class="podium__billede">' + billede + '<span class="podium__nr">' + (i === 0 ? 'Nr. 1' : 'Nr. ' + (i + 1)) + '</span></div>' +
      '<div class="podium__krop"><h3 class="podium__navn">' + esc(navn) + '</h3>' +
      '<p class="podium__tal">' + esc(g.vis(x.v, x.r)) + (prisErMaal ? '' : ' <span>' + esc(g.kolonne.toLowerCase()) + '</span>') + '</p>' +
      (!prisErMaal && fra ? '<p class="podium__pris">Fra ' + esc(fra) + '</p>' : '') +
      '<p class="podium__hos">' + esc(x.r.t.udbyder) + '</p>' +
      '<span class="podium__se">Se tilbud</span></div></a></li>';
  }).join('') + '</ol>';
}

// ── Mere liv på guiderne (04-10-2026, preview) ──────────────────────────────
// GULPLADE_GUIDE_LIV=1 giver guiderne nøgletal, et prisdiagram med én søjle pr.
// model og en kort opsummering i hele sætninger, som Google og AI-søgning kan
// citere. Desuden WebPage-schema med dateModified (nyeste kildedato på listen)
// og den bedste bils billede som delebillede. Uden flaget ser siderne ud som før.
var GUIDE_LIV = process.env.GULPLADE_GUIDE_LIV === "1";

// Den billigste række pr. model, målt på samlet pris pr. md. (udbetaling fordelt).
function guideBedstPrModel(med) {
  var m = {};
  med.forEach(function (x) {
    var r = x.r;
    if (r.samlet == null) return;
    if (!m[r.bil.id] || r.samlet < m[r.bil.id].samlet) m[r.bil.id] = r;
  });
  return Object.keys(m).map(function (k) { return m[k]; })
    .sort(function (a, b) { return a.samlet - b.samlet; });
}

function guideNoegletalHTML(med) {
  var modeller = guideBedstPrModel(med);
  if (modeller.length < 3) return '';
  var fra = null;
  med.forEach(function (x) {
    var p = x.r.t.maanedspris;
    if (p != null && (!fra || p < fra.t.maanedspris)) fra = x.r;
  });
  var el = modeller.filter(function (r) { return r.bil.drivmiddel === "el"; });
  var udbydere = {};
  med.forEach(function (x) { udbydere[x.r.t.udbyder] = 1; });
  var nUdb = Object.keys(udbydere).length;
  var felter = [
    fra ? ['Laveste månedlige ydelse', talDK(fra.t.maanedspris) + ' kr./md.', fra.navn + ' hos ' + fra.t.udbyder +
      (fra.t.foerstegangsydelse ? ', plus ' + talDK(fra.t.foerstegangsydelse) + ' kr. i udbetaling' : (fra.t.foerstegangsydelse === 0 ? ', uden udbetaling' : ''))] : null,
    ['Typisk pris', talDK(Math.round(median(modeller.map(function (r) { return r.samlet; })))) + ' kr./md.', 'midt på listen, med udbetalingen fordelt'],
    ['Elbiler', el.length + ' af ' + modeller.length, el.length ? 'billigst ' + talDK(el[0].samlet) + ' kr./md.' : 'ingen elbiler på listen'],
    ['Udbydere', String(nUdb), med.length + ' tilbud i alt']
  ].filter(Boolean);
  return '<dl class="guidetal">' + felter.map(function (f) {
    return '<div class="guidetal__felt"><dt>' + esc(f[0]) + '</dt><dd class="guidetal__tal">' + esc(f[1]) +
      '</dd><dd class="guidetal__under">' + esc(f[2]) + '</dd></div>';
  }).join('') + '</dl>';
}

function guidePrisgrafHTML(g, med) {
  var modeller = guideBedstPrModel(med);
  if (modeller.length < 3) return '';
  var MAKS = 20, vist = modeller.slice(0, MAKS);
  var hoejst = vist[vist.length - 1].samlet;
  var billigst = modeller[0], dyrest = modeller[modeller.length - 1];
  var midt = Math.round(median(modeller.map(function (r) { return r.samlet; })));
  var el = modeller.filter(function (r) { return r.bil.drivmiddel === "el"; });
  var udbydere = {};
  med.forEach(function (x) { udbydere[x.r.t.udbyder] = 1; });
  var nUdb = Object.keys(udbydere).length;
  function kr_(v) { return talDK(v) + ' kr.'; }
  function klasse(b) { return b.drivmiddel === "el" ? "el" : (b.drivmiddel === "diesel" ? "diesel" : "andet"); }

  // Opsummeringen er skrevet som hele sætninger, så den kan læses højt og citeres.
  var saet = [];
  var fra_ = nUdb === 1
    ? ' fra ' + Object.keys(udbydere)[0] + '.'
    : ' fra ' + nUdb + ' forhandlere og leasingselskaber.';
  saet.push(g.unikModel || med.length === modeller.length
    ? 'Vi har sammenlignet ' + modeller.length + ' modeller' + fra_
    : 'Vi har sammenlignet ' + med.length + ' tilbud på ' + modeller.length + ' modeller' + fra_);
  saet.push('Den billigste er ' + billigst.navn + ' til ' + kr_(billigst.samlet) + ' om måneden, når vi fordeler udbetalingen over løbetiden.');
  saet.push('Den midterste pris på listen er ' + kr_(midt) + ' om måneden.');
  saet.push('Den dyreste er ' + dyrest.navn + ' til ' + kr_(dyrest.samlet) + ' om måneden.');
  if (el.length === modeller.length) saet.push('Alle modellerne på listen er elbiler.');
  else if (el.length === 1) saet.push(el[0] === billigst
    ? 'Én af modellerne er en elbil, og det er den billigste.'
    : 'Én af modellerne er en elbil, nemlig ' + el[0].navn + ' til ' + kr_(el[0].samlet) + ' om måneden.');
  else if (el.length) saet.push(el[0] === billigst
    ? 'Af de ' + modeller.length + ' modeller er ' + el.length + ' elbiler, og den billigste model er også en elbil.'
    : 'Af de ' + modeller.length + ' modeller er ' + el.length + ' elbiler, og den billigste elbil er ' + el[0].navn + ' til ' + kr_(el[0].samlet) + ' om måneden.');
  else saet.push('Der er ingen elbiler på listen.');

  var findes = {};
  vist.forEach(function (r) { findes[klasse(r.bil)] = 1; });
  var forklaring = [["diesel", "Diesel"], ["el", "El"], ["andet", "Benzin og plugin-hybrid"]]
    .filter(function (x) { return findes[x[0]]; })
    .map(function (x) { return '<li><span class="prisgraf__prik prisgraf__prik--' + x[0] + '"></span>' + x[1] + '</li>'; }).join('');

  return [
    '<section class="sektion prisgraf" style="padding-left:0;padding-right:0">',
    '<h2>Hvad koster de om måneden?</h2>',
    '<p class="sektion__manchet">' + esc(saet.join(' ')) + '</p>',
    '<figure class="prisgraf__figur">',
    '<figcaption class="prisgraf__titel">Det billigste tilbud på hver model i kr. om måneden, med udbetalingen fordelt over løbetiden' +
      (modeller.length > MAKS ? ' (de ' + MAKS + ' billigste af ' + modeller.length + ' modeller)' : '') + '</figcaption>',
    forklaring ? '<ul class="prisgraf__forklaring">' + forklaring + '</ul>' : '',
    '<ol class="prisgraf__liste">' + vist.map(function (r) {
      var pct = Math.max(4, Math.round(r.samlet / hoejst * 100));
      return '<li class="prisgraf__raekke">' +
        '<a class="prisgraf__navn" href="' + r.sti + '">' + esc(r.navn) + (r.bil.drivmiddel === "el" ? ' <span class="prisgraf__el">el</span>' : '') + '</a>' +
        '<span class="prisgraf__spor"><span class="prisgraf__soejle prisgraf__soejle--' + klasse(r.bil) + '" style="width:' + pct + '%"></span></span>' +
        '<span class="prisgraf__tal">' + talDK(r.samlet) + '</span></li>';
    }).join('') + '</ol>',
    '</figure>',
    '</section>'
  ].filter(Boolean).join('\n');
}

// Nyeste kildedato blandt tilbuddene på listen: hvornår tallene sidst ændrede sig.
function guideDato(med, data) {
  var d = null;
  med.forEach(function (x) { if (x.r.t.kilde_dato && (!d || x.r.t.kilde_dato > d)) d = x.r.t.kilde_dato; });
  return d || data.sidst_opdateret;
}

function guideTillidHTML() {
  return '<ul class="tillid"><li>Uafhængig: ingen kan købe en placering</li>' +
    '<li>Kilde og dato ved hvert tilbud</li><li>Vi henter tilbud til dig gratis</li></ul>';
}

// ── Vores valg på guiderne (07-10-2026, preview) ─────────────────────────────
// Brugeren ville have, at guiderne ikke kun kårer efter pris, men bygger på
// anmeldelser og viden om bilerne. GULPLADE_BEDSTE_NY=1 giver hver guide de biler,
// vi anbefaler ud fra en samlet vurdering: anmeldelser, tests, kåringer, Euro NCAP,
// mål og pris. Valget og teksterne står i bedste-valg.json og anmeldelserne pr.
// modelfamilie i anmeldelser.json. Prisen på kortet er det billigste tilbud på
// modellen blandt guidens egne tilbud, så den følger tilbuddene. Forsvinder alle
// tilbud på en valgt model, falder kortet væk af sig selv. Tabellen med alle tilbud
// står stadig nedenunder, sorteret efter guidens tal. Uden flaget ser guiderne ud som før.
var BEDSTE_NY = process.env.GULPLADE_BEDSTE_NY === "1";
function laesJSON(fil, standard) {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, fil), "utf8")); } catch (e) { return standard; }
}
var BEDSTE_FIL = BEDSTE_NY ? laesJSON("bedste-valg.json", {}) : {};
var BEDSTE_VALG = BEDSTE_FIL.guider || {};
var ANMELDELSER = BEDSTE_NY ? (laesJSON("anmeldelser.json", {}).familier || []) : [];

function anmFamilie(id) {
  return ANMELDELSER.filter(function (f) { return (f.ids || []).indexOf(id) >= 0; })[0] || null;
}

// Kåringer og Euro NCAP-resultater, der gælder netop den udgave af bilen.
function anmMaerker(id) {
  var f = anmFamilie(id);
  return f ? (f.maerker || []).filter(function (m) { return !m.ids || m.ids.indexOf(id) >= 0; }) : [];
}

// Valget kan selv angive anmeldelser; ellers bruges familiens udvalgte.
function anmFor(id, v) {
  if (v.anmeldelser && v.anmeldelser.length) return v.anmeldelser;
  var f = anmFamilie(id);
  return f ? (f.udvalgte || []).filter(function (a) { return !a.ids || a.ids.indexOf(id) >= 0; }).slice(0, 3) : [];
}

// De valgte biler med det billigste af guidens tilbud på hver.
function bedsteValg(g, med) {
  var bv = BEDSTE_VALG[g.slug];
  if (!bv) return [];
  return (bv.valg || []).map(function (v) {
    // type: "operationel" eller "finansiel" begrænser valget til tilbud af den type.
    var rk = med.filter(function (x) { return x.r.bil.id === v.model && (!v.type || x.r.t.leasingtype === v.type); })
      .sort(function (a, b) { return (a.r.samlet || 1e9) - (b.r.samlet || 1e9); });
    return rk.length ? { v: v, x: rk[0], r: rk[0].r } : null;
  }).filter(Boolean);
}

// Guidens eget tal først (højde, træk, rækkevidde ...), derefter de faste mål.
var BEDSTE_SAMME = { "Anhængervægt": "træk", "Trækvægt": "træk", "Nyttelast": "nyttelast", "Lastrum": "lastrum",
  "Rækkevidde (WLTP)": "rækkevidde" };
var BEDSTE_ORD = { "Udvendig højde": "høj", "Europaller": "", "Lastrumslængde": "langt lastrum", "Forbrug (WLTP)": "efter WLTP",
  "DC-ladeeffekt": "lynladning", "Rækkevidde (WLTP)": "rækkevidde efter WLTP", "Trækvægt": "træk", "Anhængervægt": "træk",
  "Nyttelast": "nyttelast", "Lastrum": "lastrum", "Grøn ejerafgift": "" };
function bedsteFakta(g, x) {
  var vist = g.vis(x.v, x.r), d = [];
  if (!/kr\./.test(vist) && BEDSTE_ORD.hasOwnProperty(g.kolonne)) d.push(vist + (BEDSTE_ORD[g.kolonne] ? " " + BEDSTE_ORD[g.kolonne] : ""));
  var spring = BEDSTE_SAMME[g.kolonne];
  aaretsFaktaLinje(x.r.bil).split(" · ").forEach(function (s) {
    if (s && !(spring && s.indexOf(spring) >= 0)) d.push(s);
  });
  return d.slice(0, 4).join(" · ");
}

function bedsteKortHTML(g, valg) {
  return '<ol class="aarets valg">' + valg.map(function (y, i) {
    var v = y.v, r = y.r, b = r.bil;
    var pris = r.samlet != null ? r.samlet : r.t.maanedspris;
    var maerker = anmMaerker(b.id).slice(0, 3).map(function (m) {
      return '<li>' + (m.url ? '<a href="' + esc(m.url) + '" rel="noopener">' + esc(m.tekst) + '</a>' : esc(m.tekst)) + '</li>';
    }).join("");
    var anm = anmFor(b.id, v).map(function (a) {
      return '<li><a href="' + esc(a.url) + '" rel="noopener">' + esc(a.kilde) + '</a>: ' + esc(a.tekst) + '</li>';
    }).join("");
    return '<li class="aarets__kort' + (i === 0 ? ' aarets__kort--foerst' : '') + '">' +
      '<a class="aarets__billede" href="' + r.sti + '" tabindex="-1" aria-hidden="true">' +
      (b.billede ? '<img src="' + esc(i === 0 && b.billede_stor ? b.billede_stor : b.billede) + '" alt="" width="800" height="500" loading="' + (i < 2 ? 'eager' : 'lazy') + '" decoding="async">' : '') +
      '<span class="valg__nr">Nr. ' + (i + 1) + '</span></a><div class="aarets__krop">' +
      '<p class="aarets__kat">' + esc(v.label) + '</p>' +
      '<h3 class="aarets__navn"><a href="' + r.sti + '">' + esc(r.navn) + '</a></h3>' +
      (pris != null ? '<p class="aarets__tal">Fra ' + esc(talDK(Math.round(pris))) + ' kr./md.</p>' : '') +
      '<p class="aarets__fakta">' + esc(bedsteFakta(g, y.x)) + '</p>' +
      (maerker ? '<ul class="valg__maerker">' + maerker + '</ul>' : '') +
      '<p class="aarets__hvorfor">' + esc(v.hvorfor) + '</p>' +
      (anm ? '<div class="aarets__anm"><p>Det skriver testerne</p><ul>' + anm + '</ul></div>' : '') +
      '<p class="aarets__hos">' + esc((v.type ? (v.type === "operationel" ? "Operationel leasing · " : "Finansiel leasing · ") : "") + aaretsPrisLinje(r)) + '</p>' +
      '<p class="aarets__links"><a class="aarets__se" href="' + r.sti + '">Se tilbud på ' + esc(r.navn) + '</a></p>' +
      '</div></li>';
  }).join("") + '</ol>';
}

function bedsteOgsaaHTML(g, med, valg) {
  var bv = BEDSTE_VALG[g.slug] || {};
  var valgt = valg.map(function (y) { return y.r.bil.id; });
  var linjer = (bv.ogsaa || []).filter(function (o) { return valgt.indexOf(o.model) < 0; }).map(function (o) {
    var r = med.filter(function (x) { return x.r.bil.id === o.model && x.r.samlet != null; })
      .sort(function (a, b) { return a.r.samlet - b.r.samlet; })[0];
    if (!r) return '';
    return '<li><a href="' + r.r.sti + '">' + esc(r.r.navn) + '</a> <span class="valg__ogsaa-pris">fra ' +
      esc(talDK(Math.round(r.r.samlet))) + ' kr./md.</span><span class="valg__ogsaa-tekst">' + esc(o.tekst) + '</span></li>';
  }).filter(Boolean);
  if (!linjer.length) return '';
  return '<section class="sektion" style="padding-left:0;padding-right:0"><h2>' + esc(bv.ogsaa_overskrift || "Også værd at se på") +
    '</h2><ul class="valg__ogsaa">' + linjer.join("") + '</ul></section>';
}

// Står den billigste bil ikke blandt valgene, siger vi hvorfor. Teksten hører til
// modellen, så den kun vises, mens netop den bil er den billigste.
function bedsteBilligstHTML(g, med, valg) {
  var bv = BEDSTE_VALG[g.slug] || {};
  var billigst = med.filter(function (x) { return x.r.samlet != null; })
    .sort(function (a, b) { return a.r.samlet - b.r.samlet; })[0];
  if (!billigst || valg.some(function (y) { return y.r.bil.id === billigst.r.bil.id; })) return '';
  var id = billigst.r.bil.id;
  var tekst = (bv.om_billigst || {})[id] || (BEDSTE_FIL.om_billigst || {})[id];
  if (!tekst) return '';
  return '<section class="sektion--kort"><h2>Hvorfor er den billigste ikke med?</h2><p>Den billigste bil på listen er <a href="' +
    billigst.r.sti + '">' + esc(billigst.r.navn) + '</a> til ' + esc(talDK(billigst.r.samlet)) + ' kr. om måneden. ' + esc(tekst) + '</p></section>';
}

function bedsteMetodeHTML(g, med) {
  var bv = BEDSTE_VALG[g.slug] || {};
  var fam = {}, modeller = {};
  med.forEach(function (x) {
    var f = anmFamilie(x.r.bil.id);
    if (f) { fam[f.familie] = f; modeller[x.r.bil.id] = 1; }
  });
  var n = 0, kilder = {};
  Object.keys(fam).forEach(function (k) {
    var f = fam[k];
    (f.anmeldelser || []).concat(f.sammenligningstests || [], f.el_test || []).forEach(function (a) {
      n++;
      if (a.kilde) kilder[a.kilde] = (kilder[a.kilde] || 0) + 1;
    });
  });
  if (!n) return '';
  var mest = Object.keys(kilder).sort(function (a, b) { return kilder[b] - kilder[a]; }).slice(0, 5);
  var nM = Object.keys(modeller).length;
  return '<section class="sektion--kort valg__metode"><h2>Sådan har vi valgt</h2><p>' +
    esc('Vi har læst ' + n + ' anmeldelser og tests af ' + (nM === 1 ? 'bilen' : 'de ' + nM + ' modeller') + ' på listen, blandt andet fra ' + ogListe(mest) +
      '. Vi har også set på kåringer og på Euro NCAP\'s sikkerhedstest af varebiler. ' +
      (bv.vaegt || 'Anmeldelserne har vi vægtet sammen med målene og prisen på de tilbud, vi har samlet.') +
      ' Ingen forhandler eller leasingselskab kan betale for en plads på listen.') + '</p></section>';
}

function guideSideHTML(g, data) {
  var rader = alleTilbud(data);
  if (GUIDE_NY && GUIDE_TEKSTER[g.slug]) {
    var gt = GUIDE_TEKSTER[g.slug], aarNu = aaretsAar(data);
    var aa = function (x) { return x ? String(x).replace(/%aar%/g, aarNu) : x; };
    gt = Object.assign({}, gt, { h1: aa(gt.h1), svar: aa(gt.svar) });
    g = Object.assign({}, g, { title: gt.title || g.title, desc: gt.desc || g.desc, h1: gt.h1 || g.h1,
      intro: gt.intro || g.intro, svar: gt.svar || g.svar, titelUdenPris: gt.h1 || g.titelUdenPris });
  }
  // En guide kan tilpasse overskrift, note og FAQ efter de tilbud, der er med
  // ved bygning - saa teksten ikke paastaar noget, dataene har overhalet.
  if (g.tilpas) g = Object.assign({}, g, g.tilpas(guideRaekker(g, rader)));
  // Teksterne i bedste-valg.json gælder over de gamle, når flaget er sat.
  var bv = BEDSTE_VALG[g.slug];
  if (bv) {
    var aar_ = aaretsAar(data), aa_ = function (x) { return x ? String(x).replace(/%aar%/g, aar_) : x; };
    g = Object.assign({}, g, { title: bv.title || g.title, desc: bv.desc || g.desc, h1: aa_(bv.h1) || g.h1,
      intro: bv.intro || g.intro, svar: bv.svar || g.svar, titelUdenPris: aa_(bv.h1) || g.titelUdenPris,
      faq: bv.faq || g.faq, note: bv.note !== undefined ? bv.note : g.note });
  }
  var med = guideRaekker(g, rader);
  var valg = bv ? bedsteValg(g, med) : [];
  var canonical = BASE_URL + "/bedste-tilbud/" + g.slug + "/";
  var modeller = {};
  med.forEach(function (x) { modeller[x.r.bil.id] = 1; });
  var antalModeller = Object.keys(modeller).length;

  var sete = {}, modelListe = med.filter(function (x) {
    if (sete[x.r.bil.id]) return false; sete[x.r.bil.id] = 1; return true;
  }).slice(0, 10);
  // Med vores valg er listen i schema de valgte biler, og første spørgsmål i
  // FAQ'en svarer med dem. Svaret bygges af valgene, så det følger tilbuddene.
  if (valg.length) {
    modelListe = valg.map(function (y) { return y.x; });
    if (bv.faq_bedste) {
      var navne = valg.map(function (y) { return y.r.navn; });
      var svar = "Vores førstevalg er " + navne[0] + ". " + (valg[0].v.kort || "") +
        (navne.length === 2 ? " Nr. 2 er " + navne[1] + "." : "") +
        (navne.length > 2 ? " Nr. 2 er " + navne[1] + ", og nr. 3 er " + navne[2] + "." : "");
      g = Object.assign({}, g, { faq: [[bv.faq_bedste.replace(/%aar%/g, aaretsAar(data)), svar.replace(/\s+/g, " ").trim()]].concat(g.faq || []) });
    }
  }
  var schema = samlSchema(
    (g.faq && g.faq.length) ? { "@type": "FAQPage", "mainEntity": g.faq.map(function (q) {
      return { "@type": "Question", "name": q[0], "acceptedAnswer": { "@type": "Answer", "text": q[1] } };
    }) } : null,
    krummeSchema([["Forsiden", "/"], ["Bedste tilbud", "/bedste-tilbud/"], [g.h1, null]]),
    modelListe.length ? { "@type": "ItemList", "name": g.h1, "numberOfItems": modelListe.length,
      "itemListElement": modelListe.map(function (x, i) {
        return { "@type": "ListItem", "position": i + 1, "name": x.r.bil.maerke + " " + x.r.bil.model, "url": BASE_URL + x.r.sti };
      }) } : null,
    GUIDE_LIV ? {
      "@type": "WebPage", "@id": canonical + "#side", url: canonical, name: g.h1, inLanguage: "da-DK",
      dateModified: guideDato(med, data),
      isPartOf: { "@type": "WebSite", "@id": BASE_URL + "/#websted", name: "Gulplade.dk", url: BASE_URL + "/" },
      publisher: { "@type": "Organization", "@id": BASE_URL + "/#organisation", name: "Gulplade.dk", url: BASE_URL + "/" },
      primaryImageOfPage: med.length && med[0].r.bil.billede ? { "@type": "ImageObject", url: BASE_URL + "/assets/img/varebiler/" + med[0].r.bil.id + "-del.jpg" } : undefined
    } : null);
  var deleBillede = GUIDE_LIV && med.length && med[0].r.bil.billede ? "/assets/img/varebiler/" + med[0].r.bil.id + "-del.jpg" : null;

  var top = rangliste(rader, {
    titel: g.kolonne === "Inkl. udbetaling" ? "De fem bedste, når udbetalingen er regnet med" : "De fem bedste efter " + g.kolonne.toLowerCase(),
    niveau: 2,
    kriterium: g.kriterium,
    filtrer: g.filtrer,
    maal: g.maal,
    vis: g.vis,
    lavestBedst: g.lavestBedst,
    unikModel: g.unikModel,
    antal: 5,
    note: g.note
  });

  // %fra% (laveste annoncerede ydelse) og %n% (antal tilbud) i titel og beskrivelse,
  // saa et tal i Googles resultat altid passer med siden (02-10-2026).
  var fraYdelse = med.reduce(function (m, x) {
    var p = x.r.t.maanedspris; return p != null && (m == null || p < m) ? p : m;
  }, null);
  function tal(s) {
    return String(s).replace(/%fra%/g, fraYdelse != null ? talDK(fraYdelse) : "")
                    .replace(/%n%/g, String(med.length))
                    .replace(/%aar%/g, aaretsAar(data));
  }
  var gTitel = /%fra%/.test(g.title) && fraYdelse == null ? (g.titelUdenPris || g.h1) : tal(g.title);

  return [
    hoved(titel(gTitel), beskrivelse(tal(g.desc)), canonical, schema, deleBillede),
    header(),
    '<main id="indhold" class="bil-side">',
    '<nav class="breadcrumb"><ol>',
    '<li><a href="/">Forsiden</a></li>',
    '<li><a href="/bedste-tilbud/">Bedste tilbud</a></li>',
    '<li aria-current="page">' + esc(g.h1) + '</li>',
    '</ol></nav>',

    '<div class="bil-hero">',
    '  <div class="bil-hero__tekst">',
    '    <p class="bil-maerke">' + (valg.length ? 'Uafhængig vurdering' : 'Uafhængig sammenligning') + ' · ingen betalte placeringer</p>',
    '    <h1>' + esc(g.h1) + '</h1>',
    valg.length ? '    <p class="svarboks"><span class="svarboks__etiket">' + esc(g.svar || 'Vores valg:') + '</span> '
      + '<a href="' + valg[0].r.sti + '">' + esc(valg[0].r.navn) + '</a>. ' + esc(valg[0].v.kort || '') + '</p>' :
    (med.length && g.svar) ? '    <p class="svarboks"><span class="svarboks__etiket">' + esc(g.svar) + '</span> '
      + '<a href="' + modelSti(med[0].r.bil) + '">' + esc(med[0].r.bil.maerke + ' ' + med[0].r.bil.model) + '</a> — '
      + '<strong>' + esc(g.vis(med[0].v, med[0].r)) + '</strong>'
      + (med[0].r.t && !g.unikModel ? ' hos ' + esc(med[0].r.t.udbyder) + '.' : (/\.$/.test(g.vis(med[0].v, med[0].r)) ? '' : '.')) + '</p>' : '',
    '    <p class="bil-hero__manchet">' + esc(tal(g.intro)) + '</p>',
    GUIDE_NY ? '    <p class="guide-knapper">' + tilbudsknapHTML("", "Få tilbud gratis") +
      ' <a class="knap knap--sekundaer" href="#alle">Se alle ' + med.length + (g.unikModel ? ' modeller' : ' tilbud') + '</a></p>' : '',
    GUIDE_NY ? guideTillidHTML() : '',
    '    <p class="bil-hero__variant">' + (valg.length ? valg.length + (valg.length === 1 ? ' anbefaling' : ' anbefalinger') + ' · ' : '') + (g.unikModel
      ? med.length + ' modeller'
      : med.length + ' tilbud fra ' + antalModeller + ' modeller') +
      ' · alle priser ekskl. moms · opdateret ' + esc(visDato(data.sidst_opdateret)) + '</p>',
    '  </div>',
    '</div>',

    // Med det nye udseende afløser kortene top 5-listen; kriteriets note står under kortene.
    valg.length ? '<section class="sektion" id="valg" style="padding-left:0;padding-right:0"><h2>' + esc(bv.valg_overskrift || 'Vores valg') + '</h2>' +
      (bv.valg_manchet ? '<p class="sektion__manchet">' + esc(bv.valg_manchet) + '</p>' : '') + bedsteKortHTML(g, valg) + '</section>' +
      bedsteOgsaaHTML(g, med, valg) + bedsteBilligstHTML(g, med, valg) + bedsteMetodeHTML(g, med) : '',
    GUIDE_NY && !valg.length ? guidePodiumHTML(g, med) + (g.note ? '<p class="kilde podium__note">' + esc(g.note) + '</p>' : '') : '',
    !GUIDE_NY && top ? '<section class="sektion" style="padding-left:0;padding-right:0">' + top + '</section>' : '',
    GUIDE_LIV ? guideNoegletalHTML(med) : '',
    GUIDE_LIV ? guidePrisgrafHTML(g, med) : '',
    g.artikel ? g.artikel(med) : '',

    '<section class="sektion" id="alle" style="padding-left:0;padding-right:0">',
    '<h2>Alle ' + med.length + (g.unikModel ? ' modeller' : ' tilbud') + '</h2>',
    '<p class="sektion__manchet">Sorteret efter ' + esc(g.kriterium) + (valg.length && g.note ? ' ' + esc(g.note) : '') +
      ' Ved hvert tilbud kan du se, hvor og hvornår vi har fundet det. Klik på modelnavnet for at se alle specifikationer på modelsiden.</p>',
    guideTabelHTML(g, med),
    '<p class="kilde">Har du selv fået et tilbud? Se hvor det ligger i <a href="/leasingberegner/">leasingberegneren</a>.</p>',
    '</section>',

    guideBrugtHTML(g),
    guideFaqHTML(g),
    guideVidenHTML(g),
    guideAndreHTML(g, rader),
    '<div class="lead-bar"><span class="lead-bar__pris">' + esc(g.h1.split(/[—:]/)[0].trim()) + '</span>' +
      tilbudsknapHTML("", "Få tilbud") + '</div><div class="lead-bar-plads"></div>',

    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Har du allerede et tilbud?</h2>',
    '<p>Send det ind, så gennemgår vi det på de samme punkter, som vi sammenligner på her: hvad ydelsen dækker, hvad der ligger uden for, og hvad aftalen koster i alt.</p>',
    '<p style="margin-top:1.5rem"><a href="/tilbudstjek/" class="knap knap--primaer">Tjek dit tilbud</a></p>',
    '</section>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── /bedste-tilbud/ — hub for guiderne ──────────────────────────────────────
//
// Siden var før én lang side med seks ranglister. Den er nu indgangen til ni
// guider, én pr. behov, og beholder de rangordner, ingen guide dækker.
// Svaret på "bedste varevogn til prisen": den billigste i hver klasse, målt på
// pris pr. md. med udbetalingen fordelt. Kriteriet står over tabellen — sitet
// kårer ikke en samlet vinder uden at sige, hvad der er målt på.
var EL_KLASSER = [
  // 04-10-2026: brugeren ville have elbiler i tabellen i stedet for diesel.
  ["Lille elvarebil", function (b) { return b.drivmiddel === "el" && stoerrelse(b) === "pizzabil" && b.karrosseri === "kassevogn"; }],
  ["Mellemstor elvarebil", function (b) { return b.drivmiddel === "el" && stoerrelse(b) === "mellem" && b.karrosseri === "kassevogn"; }],
  ["Stor elvarebil", function (b) { return b.drivmiddel === "el" && stoerrelse(b) === "stor" && b.karrosseri === "kassevogn"; }],
  ["Elektrisk ladbil", function (b) { return b.drivmiddel === "el" && b.karrosseri === "ladvogn"; }]
];

function klasseVindereHTML(data) {
  var f = data.forudsaetninger;
  var klasser = EL_KLASSER;
  var raekker = klasser.map(function (k) {
    var bedst = data.varebiler.filter(k[1]).map(function (b) { return forsideRad(b, f); })
      .filter(function (r) { return r.samlet != null; })
      .sort(function (a, b) { return a.samlet - b.samlet; })[0];
    if (!bedst) return '';
    var lr = bedst.bil.lastrum || {};
    return '<tr><th scope="row">' + esc(k[0]) + '</th>'
      + '<td><a href="' + modelSti(bedst.bil) + '">' + esc(bedst.bil.maerke + ' ' + bedst.bil.model) + '</a></td>'
      + '<td class="tal"><strong>' + talDK(Math.round(bedst.samlet)) + ' kr./md.</strong></td>'
      + '<td class="tal">' + (lr.volumen_m3 != null ? kommaTal(lr.volumen_m3) + ' m³' : '—') + '</td>'
      + '<td class="tal">' + (function (e) { var km = e && e.raekkevidde_km != null ? e.raekkevidde_km : bedst.bil.raekkevidde_km; return km != null ? talDK(km) + ' km' : '—'; })(elForModel(bedst.bil.id)) + '</td>'
      + '<td>' + esc(bedst.t.udbyder) + '</td></tr>';
  }).join('');
  return [
    '<section class="sektion sektion--taet" style="padding-left:0;padding-right:0">',
    '<h2>Billigste elvarebil i hver klasse lige nu</h2>',
    '<p class="sektion__manchet">Prisen er månedsydelsen plus udbetalingen fordelt over løbetiden, uden moms. Rækkevidden er producentens WLTP-tal.</p>',
    '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel">',
    '<thead><tr><th>Klasse</th><th>Model</th><th class="tal">Pris pr. md.</th><th class="tal">Lastrum</th><th class="tal">Rækkevidde</th><th>Forhandler</th></tr></thead>',
    '<tbody>' + raekker + '</tbody></table></div>',
    '</section>'
  ].join('\n');
}

function bedsteTilbudHTML(data) {
  if (HUB_NY) return hubHTML(data);
  var rader = alleTilbud(data);
  var antalTilbud = rader.length;
  var medMaal = data.varebiler.filter(function (b) { return b.nyttelast_kg != null; }).length;

  var kort = GUIDER.map(function (g) { return guideKortHTML(g, rader); })
                   .filter(Boolean);
  var antalGuider = kort.length;

  // Rangordner der ikke har deres egen guide, men som er værd at vise.
  var lister = [
    rangliste(rader, {
      titel: "Lavest annonceret månedsydelse",
      kriterium: "det tal udbyderen sætter i annoncen, uden hensyn til udbetaling. Lavest først.",
      maal: function (r) { return r.t.maanedspris; },
      vis: function (v) { return talDK(v) + " kr."; },
      lavestBedst: true,
      note: "Den her rangorden er den, udbyderne selv markedsfører på. Hold den op mod guiden Billigste varebil: rækkefølgen er ikke den samme, fordi udbetalingen ikke er med."
    }),
    rangliste(rader, {
      titel: "Bedst oplyste tilbud",
      kriterium: "hvor mange af de fem driftsposter udbyderen forholder sig til. Flest først, billigste vinder ved lige stand.",
      filtrer: function (r) { return r.b.oplystAntal > 0; },
      maal: function (r) { return r.b.oplystAntal * 1000 - (r.samlet || 0) / 100; },
      vis: function (v, r) { return r.b.oplystAntal + "/" + r.b.posterAntal; },
      lavestBedst: false,
      note: "Listen viser kun de tilbud, der oplyser mindst én af de fem poster — og det er " +
            rader.filter(function (r) { return r.b.oplystAntal > 0; }).length + " af " + rader.length +
            ". Et veloplyst tilbud er ikke det samme som et billigt. Det er et tilbud, hvor du kan regne den endelige pris ud uden at ringe og spørge."
    }),
    rangliste(rader, {
      titel: "Billigst pr. kilo nyttelast",
      kriterium: "samlet pris pr. måned delt med nyttelasten. Lavest først. Kun modeller hvor producenten oplyser nyttelast.",
      maal: function (r) {
        if (r.samlet == null || !r.bil.nyttelast_kg) return null;
        return r.samlet / r.bil.nyttelast_kg;
      },
      vis: function (v) { return v.toFixed(2).replace(".", ",") + " kr./kg"; },
      lavestBedst: true,
      note: "Målet siger, hvad du betaler pr. måned for hvert kilo bilen må bære. Det favoriserer de store varebiler, og det er meningen: skal der bæres meget, er en billig lille bil ikke billig."
    }),
    rangliste(rader, {
      titel: "Billigst pr. kubikmeter lastrum",
      kriterium: "samlet pris pr. måned delt med lastrumsvolumen. Lavest først. Kun modeller hvor producenten oplyser volumen.",
      maal: function (r) {
        var v = r.bil.lastrum && r.bil.lastrum.volumen_m3;
        if (r.samlet == null || !v) return null;
        return r.samlet / v;
      },
      vis: function (v) { return talDK(Math.round(v)) + " kr./m³"; },
      lavestBedst: true,
      note: "Samme logik som nyttelast, men på rumfang. De to lister rangerer ikke ens — en bil kan have plads uden at måtte bære, og omvendt."
    })
  ].filter(Boolean);

  var faq = [
    ["Hvordan kan I vide, hvad der er det bedste tilbud?",
     "Det kan vi ikke, og vi påstår det heller ikke. Der findes et billigste, et bedst oplyste, et med lavest udbetaling og et, der giver mest nyttelast for pengene — og det er fire forskellige tilbud. Derfor står kriteriet over hver liste."],
    ["Er der betalt for placeringerne?",
     "Nej. Rækkefølgen kommer af det kriterium, der står over listen, og intet andet. Hvordan siden tjener penge står på Sådan tjener vi penge."],
    ["Hvor gamle er priserne?",
     "Indsamlingsdatoen står ved hvert eneste tilbud, både i tabellerne og på modelsiderne. Er et tal ældre end du er tryg ved, så tjek det hos udbyderen — linket står samme sted."],
    ["Omregner I løbetider, så tilbuddene kan sammenlignes direkte?",
     "Nej. Vi viser kun tilbud, der er aktuelle hos udbyderen. Et tilbud på 60 måneder omregnet til 36 er ikke et tilbud, nogen giver. Løbetid og kilometertal står ved hvert tilbud og skal læses med."]
  ];

  var faqHTML = faq.map(function (q) {
    return '<details class="faq__punkt"><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>';
  }).join("\n");

  var schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(function (q) {
      return { "@type": "Question", "name": q[0],
               "acceptedAnswer": { "@type": "Answer", "text": q[1] } };
    })
  }, null, 2);

  // 02-10-2026: hubben delte titel med guiden "Bedste varevogn til prisen"; nu bredere.
  // 05-10-2026: "varebil leasing" hører til forsiden. Hubben handler om at vælge efter behov.
  var title = titel("Find varevognen til dit behov: " + antalGuider + " guider med priser");
  var desc = "Find den bedste varebil eller varevogn til prisen efter dit behov: billigst, elektrisk, høj nyttelast, trækkraft " +
             "eller lav nok til en parkeringskælder. " + antalTilbud + " erhvervsleasingtilbud ekskl. moms med kilde og dato.";

  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/bedste-tilbud/", samlSchema(schema, krummeSchema([["Forsiden", "/"], ["Bedste tilbud", null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Bedste tilbud</li></ol></nav>',

    '<div class="bil-hero">',
    '  <p class="bil-maerke">Uafhængig sammenligning · ingen betalte placeringer</p>',
    '  <h1>Find varevognen til dit behov</h1>',
    // 04-10-2026: brugerens tekst. "markedets absolut billigste" er ændret til tilbuddene, vi har samlet (regel 12).
    '  <p class="bil-hero__manchet">Den rigtige varevogn afhænger af dit behov: hvad den skal bære, hvor langt den skal køre, og hvad den må koste om måneden. Her finder du de billigste elvarebiler i hver klasse lige nu, blandt de ' + antalTilbud + ' tilbud, vi har samlet. Brug guiderne nedenfor, hvis du vil dykke ned i nyttelast, træk og udstyr.</p>',
    // 06-10-2026: Ahrefs fandt kun ét internt link til /alle-tilbud/ (fra forsiden).
    '  <p class="bil-hero__variant">' + (FORSIDE_NY ? '<a href="/alle-tilbud/">' + antalTilbud + ' tilbud</a>' : antalTilbud + ' tilbud') + ' · ' + data.varebiler.length + ' modeller · ' +
      antalGuider + ' guider · opdateret ' + esc(visDato(data.sidst_opdateret)) + '</p>',
    '</div>',

    klasseVindereHTML(data),

    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<p class="sektion__manchet"><a href="' + aaretsSti(data) + '"><strong>Bedste varebil ' + aaretsAar(data) + '</strong></a> — vinderen i hver kategori på én side.</p>',
    '<h2>Hvad er vigtigst for dig?</h2>',
    guideGrupperHTML(rader),
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Fra behov til en aftale, du kan sammenligne</h2>',
    '  <div class="trin">',
    '    <div><h3>1. Sæt grænserne</h3><p>Hvad skal bilen bære, hvor lang må den være, og skal den kunne komme ned i en parkeringskælder? De tre svar skærer feltet ned til en håndfuld modeller.</p></div>',
    '    <div><h3>2. Sammenlign på samme tal</h3><p>Se på ydelsen inklusive udbetaling, ikke den annoncerede. Og se efter, hvor mange af de fem driftsposter udbyderen overhovedet forholder sig til.</p></div>',
    '    <div><h3>3. Få vilkårene på skrift</h3><p>Bed om aftaletypen, restværdien, kilometerprisen ved overkørsel og hvad der sker ved aflevering. Står det ikke i tilbuddet, er det ikke aftalt.</p></div>',
    '  </div>',
    '</section>',

    '<div class="note"><strong>Vi kårer ikke en vinder.</strong> En “bedste”-liste uden oplyst kriterium er en påstand, ikke en oplysning — og det er lige præcis den slags, siden findes for at afkode. Derfor står kriteriet over hver liste, og du kan se hvilket tal der er sorteret på.</div>',

    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Andre måder at rangere på</h2>',
    '<p class="sektion__manchet">Fire rangordner, der ikke har deres egen guide, men som ændrer billedet. Særligt den første: den viser, hvordan rækkefølgen ser ud, når man kun ser på det tal, udbyderne annoncerer.</p>',
    '<div class="rangsektion">',
    lister.join("\n"),
    '</div>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Hvorfor rækkefølgen skifter</h2>',
    '  <p>Sammenlign guiden <a href="/bedste-tilbud/billigste-varebil/">Billigste varebil</a> med listen over lavest annoncerede månedsydelse. Den ene lægger udbetalingen oveni og fordeler den over løbetiden; den anden gør ikke. Rækkefølgen er ikke den samme, og det er hele grunden til, at annoncerede månedsydelser er dårlige at træffe beslutninger på.</p>',
    '  <p>Listerne over nyttelast og lastrum kræver, at producenten faktisk oplyser målene. Det gør de for ' +
      medMaal + ' af ' + data.varebiler.length + ' modeller — resten kan ikke rangeres på de kriterier og står derfor ikke på de lister. Vi gætter ikke et mål for at få en model med.</p>',
    '  <p style="margin-top:1.5rem"><a href="/#varebiler" class="knap knap--primaer">Sammenlign alle tilbud</a> <a href="/varebiler/" class="knap knap--sekundaer">Se mål og vægt</a></p>',
    '</section>',

    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Spørgsmål og svar</h2>',
    '<div class="faq">' + faqHTML + '</div>',
    '</section>',

    ctaBlok(),

    '<div class="forbehold">',
    '  <h2>Om rangordnerne</h2>',
    '  <p>Alle tal er indsamlet fra udbydernes egne prislister og annoncer på de datoer der står ved hvert tilbud. Priser er ekskl. moms. Tilbuddene har forskellig løbetid og kilometertal, og de er ikke omregnet til fælles vilkår — vi viser kun tilbud, der er aktuelle, og en omregnet pris ville være et tal, ingen udbyder giver.</p>',
    '  <p>Vi indregner ikke skøn for service, dæk, forsikring, ejerafgift eller vejhjælp. Hvor de poster ikke er inkluderet, mangler de i prisen, og kolonnen med oplyste driftsposter siger hvor meget der mangler.</p>',
    '  <p>Siden er ikke skatte-, revisions- eller juridisk rådgivning.</p>',
    '</div>',

    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// ── /bedste-tilbud/ i nyt udseende (06-10-2026, preview) ────────────────────
//
// Brugeren 06-10-2026: "denne side skal gøres meget bedre med mere grafik og
// forklaring". GULPLADE_HUB_NY=1 giver hubben bilkort med foto, et regnestykke
// for prisen pr. måned, en figur over hvad der er med i ydelsen, tilbuddene i
// tal og guidekort med nr. 1 og foto. Alle tal og sætninger med tal regnes ud af
// varebiler.json. Godkendt af brugeren og i produktion fra 06-10-2026; GULPLADE_HUB_NY=0
// giver den gamle side. Tabellen over finansiel og operationel leasing blev droppet
// samme dag ("fungere ikke. slet den."), og de ti guider står som almindelige kort.
var HUB_NY = process.env.GULPLADE_HUB_NY !== "0";

// 07-10-2026: samme behandling af fire andre sider, der var tabeldumps (sider-ny.js).
// Kun på preview, indtil brugeren har godkendt dem hver for sig.
var SIDE_NY = {
  el: process.env.GULPLADE_ELSIDE_NY !== "0",          // i produktion fra 07-10-2026
  garanti: process.env.GULPLADE_GARANTI_NY !== "0",   // i produktion fra 07-10-2026
  udstyr: process.env.GULPLADE_UDSTYR_NY === "1",      // kun preview: 28 visninger på 90 dage, ingen SEO-værdi
  udbyder: process.env.GULPLADE_UDBYDER_NY === "1",    // kun preview: 119 visninger på 90 dage
  oversigt: process.env.GULPLADE_OVERSIGT_NY !== "0"  // i produktion fra 07-10-2026
};
var SIDE_NY_INST = null;
function sideNy() {
  return SIDE_NY_INST || (SIDE_NY_INST = require("./sider-ny.js")({
    esc: esc, talDK: talDK, kommaTal: kommaTal, hoved: hoved, beskrivelse: beskrivelse, BASE_URL: BASE_URL,
    header: header, footer: footer, titel: titel, samlSchema: samlSchema, krummeSchema: krummeSchema,
    navnMedType: navnMedType, kortNavn: kortNavn, slug: slug, modelSti: modelSti, visDato: visDato,
    tilbudsknapHTML: tilbudsknapHTML, ctaBlok: ctaBlok, stoerrelse: stoerrelse, billigsteSamlet: billigsteSamlet,
    elForModel: elForModel, minTekst: minTekst, interval: interval, ELBIL: ELBIL, elIndexHTML: elIndexHTML,
    garantiForModel: garantiForModel, garantiIndexHTML: garantiIndexHTML, aarKm: aarKm, harBatteri: harBatteri,
    garantiVaerdi: garantiVaerdi, garantiTom: garantiTom, garantiLaengst: garantiLaengst, GARANTI: GARANTI,
    UDSTYR: UDSTYR, udstyrForModel: udstyrForModel, udstyrRaekker: udstyrRaekker, udstyrPostHTML: udstyrPostHTML,
    udbydereIndexHTML: udbydereIndexHTML, udbyderData: udbyderData, udbyderSideHTML: udbyderSideHTML,
    alleTilbud: alleTilbud, POST_NAVNE: POST_NAVNE, ejefald: ejefald,
    oversigtHTML: oversigtHTML, oversigtScript: oversigtScript, nyttelastTekst: nyttelastTekst
  }));
}

var HUB_IKON = {
  fag: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8M3 13h18M10 12v2.5h4V12"/>',
  leasing: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  el: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  stoerrelse: '<path d="M5 16H2V7a1 1 0 0 1 1-1h11v10M9 16h6M14 9h4l3 4v3h-2"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/>',
  last: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  pris: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  filter: '<path d="M3 4h18l-7 8v6l-4 2v-8z"/>',
  soejler: '<path d="M3 20h18M6 20v-8M11 20V5M16 20V9"/>',
  aftale: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 14.5l2 2 4-4"/>'
};

function hubIkon(id) {
  return '<svg class="hubikon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + HUB_IKON[id] + '</svg>';
}

function hubBillede(b, alt) {
  return b.billede
    ? '<img src="' + esc(b.billede) + '" alt="' + esc(alt == null ? navnMedType(b) : alt) + '" width="800" height="500" loading="lazy" decoding="async">'
    : '<span class="bilkort__intetbillede">' + esc(b.model) + '</span>';
}

function hubNavn(b) { return b.maerke + ' ' + kortNavn(b); }
function hubKr(v) { return talDK(Math.round(v)) + ' kr.'; }
var HUB_TALORD = ["nul", "én", "to", "tre", "fire", "fem", "seks", "syv", "otte", "ni", "ti", "elleve", "tolv"];
function hubTalOrd(n) { return HUB_TALORD[n] || talDK(n); }
function hubStort(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// Guiderne med mindst ét tilbud og deres rækker, i GUIDER-rækkefølge.
function hubGuider(rader) {
  var m = {};
  GUIDER.forEach(function (g) {
    var med = guideRaekker(g, rader);
    if (med.length) m[g.slug] = { g: g, med: med };
  });
  return m;
}

var HUB_GRUPPER = [
  ["fag", "Efter fag", "Vi har valgt varebiler efter det, hvert fag typisk har mest brug for."],
  ["leasing", "Leasingform og aftale", "Vælg mellem finansiel og operationel leasing i hver størrelse, eller find tilbud med lav udbetaling, kort løbetid eller service med."],
  ["el", "Elvarebiler", "Sammenlign elvarebilerne på rækkevidde, opladning, lastrum og træk."],
  ["stoerrelse", "Størrelse og type", "Guiderne går fra den lille varebil til den lange kassevogn. Her er også biler, der kan komme ned i en parkeringskælder."],
  ["last", "Last og træk", "Find varebiler med høj nyttelast, stor trækvægt eller firehjulstræk, og se ladbiler og pickupper."],
  ["pris", "Pris og drift", "Find den laveste pris og mest lastrum for pengene, og se, hvad bilerne koster i ejerafgift og brændstof."]
];

function hubGrupper(guider) {
  return HUB_GRUPPER.map(function (gr) {
    var alle = GUIDER.filter(function (g) { return guider[g.slug] && guideGruppe(g.slug) === gr[0]; });
    return { id: gr[0], navn: gr[1], tekst: gr[2], alle: alle };
  }).filter(function (x) { return x.alle.length; });
}

function hubVaelgHTML(grupper) {
  return [
    '<aside class="hubvaelg" aria-labelledby="hubVaelgNavn">',
    '  <h2 class="hubvaelg__navn" id="hubVaelgNavn">Vælg efter behov</h2>',
    '  <ul>',
    grupper.map(function (x) {
      return '    <li><a class="hubvaelg__link" href="#gruppe-' + x.id + '">' + hubIkon(x.id) + '<span class="hubvaelg__gruppe">' + esc(x.navn) +
        '</span><span class="hubvaelg__antal">' + x.alle.length + (x.alle.length === 1 ? ' guide' : ' guider') + '</span></a></li>';
    }).join("\n"),
    '  </ul>',
    '</aside>'
  ].join("\n");
}

function hubKlasseHTML(data, guider) {
  var f = data.forudsaetninger;
  var kort = EL_KLASSER.map(function (k) {
    var bedst = data.varebiler.filter(k[1]).map(function (b) { return forsideRad(b, f); })
      .filter(function (r) { return r.samlet != null; })
      .sort(function (a, b) { return a.samlet - b.samlet; })[0];
    if (!bedst) return '';
    var b = bedst.bil, lr = b.lastrum || {}, e = elForModel(b.id);
    var km = e && e.raekkevidde_km != null ? e.raekkevidde_km : b.raekkevidde_km;
    var fakta = [lr.volumen_m3 != null ? kommaTal(lr.volumen_m3) + ' m³ lastrum' : null,
      km != null ? talDK(km) + ' km rækkevidde' : null].filter(Boolean).join(' · ');
    return '<li class="podium__kort"><a class="hubklasse__link" href="' + modelSti(b) + '">' +
      '<div class="podium__billede">' + hubBillede(b) + '<span class="podium__nr">' + esc(k[0]) + '</span></div>' +
      '<div class="podium__krop"><h3 class="podium__navn">' + esc(hubNavn(b)) + '</h3>' +
      '<p class="podium__tal">' + talDK(bedst.samlet) + ' kr./md.</p>' +
      (fakta ? '<p class="podium__pris">' + esc(fakta) + '</p>' : '') +
      '<p class="podium__hos">Tilbud fra ' + esc(bedst.t.udbyder) + '</p>' +
      '<span class="podium__se">Se tilbud</span></div></a></li>';
  }).filter(Boolean);
  if (!kort.length) return '';
  var el = guider["el-varebil"];
  return [
    '<section class="sektion sektion--taet hubsektion" id="klasser">',
    '<h2>Billigste elvarebil i hver klasse lige nu</h2>',
    '<p class="sektion__manchet">Vi har fordelt udbetalingen over løbetiden og lagt den oven i månedsydelsen. Rækkevidden er producentens WLTP-tal.</p>',
    '<ul class="podium hubklasse">' + kort.join("") + '</ul>',
    el ? '<p class="hublink"><a href="/bedste-tilbud/el-varebil/">Se alle ' + el.med.length + ' tilbud på elvarebiler</a></p>' : '',
    '</section>'
  ].filter(Boolean).join("\n");
}

function hubAaretsHTML(data) {
  var valg = aaretsValg(data);
  if (!valg.length) return '';
  var v0 = valg[0], b0 = v0.r.bil, sti = aaretsSti(data);
  var label = v0.v.label.charAt(0).toLowerCase() + v0.v.label.slice(1);
  return [
    '<section class="hubaarets" aria-labelledby="hubAaretsNavn">',
    '  <a class="hubaarets__billede" href="' + sti + '" tabindex="-1" aria-hidden="true">' + hubBillede(b0, "") + '</a>',
    '  <div class="hubaarets__tekst">',
    '    <p class="hubaarets__over">Bedste varebil ' + esc(aaretsAar(data)) + '</p>',
    '    <h2 id="hubAaretsNavn">' + esc(hubNavn(b0)) + ' er ' + esc(label) + '</h2>',
    '    <p>Vi har kåret en vinder i ' + hubTalOrd(valg.length) + (valg.length === 1 ? ' kategori' : ' kategorier') + ' ud fra pris, mål og anmeldelser.</p>',
    valg.length > 1 ? '    <ul class="hubaarets__liste">' + valg.slice(1).map(function (x) {
      return '<li><span>' + esc(x.v.label) + '</span> <a href="' + modelSti(x.r.bil) + '">' + esc(hubNavn(x.r.bil)) + '</a></li>';
    }).join("") + '</ul>' : '',
    '    <p><a class="knap knap--sekundaer" href="' + sti + '">Se alle vindere</a></p>',
    '  </div>',
    '</section>'
  ].filter(Boolean).join("\n");
}

// Regnestykket bag "pris pr. md." og de laveste månedsydelser sorteret på to måder.
function hubPrisHTML(rader) {
  var sete = {};
  var ann = rader.filter(function (r) { return r.samlet != null && r.t.maanedspris != null; })
    .sort(function (a, b) { return a.t.maanedspris - b.t.maanedspris || a.samlet - b.samlet; })
    .filter(function (r) { if (sete[r.bil.id]) return false; sete[r.bil.id] = 1; return true; })
    .slice(0, 8);
  if (ann.length < 4) return '';
  var reel = ann.slice().sort(function (a, b) { return a.samlet - b.samlet || a.t.maanedspris - b.t.maanedspris; });
  // Den fordelte udbetaling er forskellen, så de to led altid giver summen.
  function fordelt(r) { return r.samlet - r.t.maanedspris; }
  var eks = ann.filter(function (r) { return r.t.foerstegangsydelse > 0; })[0];
  var maks = Math.max.apply(null, ann.map(function (r) { return r.samlet; })) * 1.02;
  function pct(v) { return (v / maks * 100).toFixed(1); }

  var regn = eks ? [
    '<figure class="hubregn">',
    '<figcaption class="hubregn__titel">Eksempel: ' + esc(hubNavn(eks.bil)) + ' hos ' + esc(eks.t.udbyder) + '</figcaption>',
    '<div class="hubregn__stykke">',
    '<div class="hubregn__led"><span class="hubregn__tal"><span class="hubprik hubprik--ydelse"></span>' + hubKr(eks.t.maanedspris) + '</span>' +
      '<span class="hubregn__tekst">månedsydelse</span></div>',
    '<span class="hubregn__tegn">+</span>',
    '<div class="hubregn__led"><span class="hubregn__tal"><span class="hubprik hubprik--udb"></span>' + hubKr(fordelt(eks)) + '</span>' +
      '<span class="hubregn__tekst">' + hubKr(eks.t.foerstegangsydelse) + ' i udbetaling delt med ' + eks.t.loebetid_mdr + ' måneder</span></div>',
    '<span class="hubregn__tegn">=</span>',
    '<div class="hubregn__led hubregn__led--sum"><span class="hubregn__tal">' + hubKr(eks.samlet) + '</span>' +
      '<span class="hubregn__tekst">om måneden</span></div>',
    '</div>',
    '<div class="hubregn__bar" aria-hidden="true"><span class="hubregn__ydelse" style="flex-grow:' + eks.t.maanedspris + '"></span>' +
      '<span class="hubregn__udb" style="flex-grow:' + fordelt(eks) + '"></span></div>',
    '</figure>'
  ].join("\n") : '';

  // Den model, der rykker mest op, og den, der rykker mest ned.
  var op = null, ned = null;
  ann.forEach(function (r, i) {
    var a = i + 1, n = reel.indexOf(r) + 1;
    if (a - n > 0 && (!op || a - n > op.a - op.n)) op = { r: r, a: a, n: n };
    if (n - a > 0 && (!ned || n - a > ned.n - ned.a)) ned = { r: r, a: a, n: n };
  });
  var saet = ['Her er de ' + hubTalOrd(ann.length) + ' modeller med den laveste månedsydelse.'];
  if (op) saet.push(op.r.navn + ' rykker op fra nr. ' + op.a + ' til nr. ' + op.n + ', når udbetalingen er fordelt over løbetiden.');
  if (ned) saet.push(ned.r.navn + ' rykker ned fra nr. ' + ned.a + ' til nr. ' + ned.n + '.');

  var raekker = ann.map(function (r, i) {
    var vilk = ['ydelse ' + hubKr(r.t.maanedspris),
      r.t.foerstegangsydelse ? 'udbetaling ' + hubKr(r.t.foerstegangsydelse) : 'ingen udbetaling',
      r.t.loebetid_mdr + ' mdr.'].join(' · ');
    return '<li class="hubomsort__raekke" data-ann="' + (i + 1) + '" data-reel="' + (reel.indexOf(r) + 1) + '">' +
      '<span class="hubomsort__nr">' + (i + 1) + '</span>' +
      '<span class="hubomsort__navn"><a class="hubomsort__link" href="' + r.sti + '">' + esc(r.navn) + '</a>' +
      '<span class="hubomsort__vilkaar">' + esc(hubStort(vilk)) + '</span></span>' +
      '<span class="hubomsort__spor" aria-hidden="true"><span class="hubomsort__ydelse" style="width:' + pct(r.t.maanedspris) + '%"></span>' +
      (fordelt(r) > 0 ? '<span class="hubomsort__udb" style="width:' + pct(fordelt(r)) + '%"></span>' : '') + '</span>' +
      '<span class="hubomsort__tal">' + hubKr(r.samlet) + '</span></li>';
  });

  return [
    '<section class="sektion hubsektion" id="prisen">',
    '<h2>Sådan regner vi prisen pr. måned</h2>',
    '<p class="sektion__manchet">De fleste tilbud har både en månedsydelse og en udbetaling. Vi fordeler udbetalingen over løbetiden og lægger den oven i ydelsen. Så kan du sammenligne tilbud med forskellig udbetaling på ét tal.</p>',
    regn,
    '<h3 class="hubunder">Rækkefølgen skifter, når udbetalingen kommer med</h3>',
    '<p>' + esc(saet.join(' ')) + '</p>',
    '<figure class="prisgraf__figur hubomsort" id="hubOmsort">',
    '<figcaption class="hubomsort__top">',
    '<span class="prisgraf__titel">Pris pr. måned med udbetalingen fordelt</span>',
    '<div class="visning hubomsort__styr" role="group" aria-label="Sortér efter" hidden>' +
      '<button type="button" data-sort="ann" aria-pressed="true">Månedsydelse</button>' +
      '<button type="button" data-sort="reel" aria-pressed="false">Med udbetaling</button></div>',
    '</figcaption>',
    '<ul class="prisgraf__forklaring"><li><span class="hubprik hubprik--ydelse"></span>Månedsydelse</li>' +
      '<li><span class="hubprik hubprik--udb"></span>Udbetaling fordelt over løbetiden</li></ul>',
    '<ol class="hubomsort__liste">' + raekker.join("") + '</ol>',
    '</figure>',
    '<p class="hublink"><a href="/bedste-tilbud/billigste-varebil/">Se alle tilbud sorteret efter pris med udbetalingen regnet med</a></p>',
    '</section>'
  ].filter(Boolean).join("\n");
}

// Ord efter tallet på kortet, når guiden ikke sorterer på prisen ("607 km rækkevidde").
var HUB_NR1_ORD = { "Anhængervægt": "trækvægt", "Trækvægt": "trækvægt", "DC-ladeeffekt": "ladeeffekt",
  "Grøn ejerafgift": "i ejerafgift", "Lastrum": "lastrum", "Lastrumslængde": "lastrumslængde", "Nyttelast": "nyttelast",
  "Rækkevidde (WLTP)": "rækkevidde", "Udbetaling": "i udbetaling", "Udvendig højde": "i højden" };

function hubGuideKortHTML(x) {
  var g = x.g, top = x.med[0], b = top.r.bil, ord = HUB_NR1_ORD[g.kolonne], vaerdi = g.vis(top.v, top.r) + (ord ? ' ' + ord : '');
  if (g.kolonne === "Udbetaling" && top.v === 0) vaerdi = 'ingen udbetaling';
  if (g.kolonne === "Grøn ejerafgift") vaerdi = vaerdi.replace(' kr./halvår i ejerafgift', ' kr. i ejerafgift pr. halvår');
  // Med vores valg viser kortet førstevalget og dets laveste pris i guiden.
  var valg = bedsteValg(g, x.med)[0];
  if (valg) {
    b = valg.r.bil;
    vaerdi = 'fra ' + talDK(Math.round(valg.r.samlet != null ? valg.r.samlet : valg.r.t.maanedspris)) + ' kr./md.';
  }
  var hubH1 = (BEDSTE_VALG[g.slug] || {}).h1 ? String(BEDSTE_VALG[g.slug].h1).replace(/%aar%/g, String(new Date().getFullYear())) : null;
  return '<li class="hubguide"><a class="hubguide__link" href="/bedste-tilbud/' + g.slug + '/">' +
    '<span class="hubguide__billede">' + hubBillede(b, "") + '</span>' +
    '<span class="hubguide__tekst">' +
    '<span class="hubguide__antal">' + x.med.length + (g.unikModel ? ' modeller' : ' tilbud') + '</span>' +
    '<span class="hubguide__navn">' + esc(hubH1 || (GUIDE_TEKSTER[g.slug] || {}).h1 || g.h1) + '</span>' +
    '<span class="hubguide__kort">' + esc((BEDSTE_VALG[g.slug] || {}).kort || g.kort) + '</span>' +
    '<span class="hubguide__nr1"><span class="hubguide__etiket">' + (valg ? 'Vores valg' : 'Nr. 1') + '</span> ' + esc(hubNavn(b)) + ' · ' + esc(vaerdi) + '</span>' +
    '</span></a></li>';
}

function hubGuiderHTML(guider, grupper) {
  return [
    '<section class="sektion hubsektion" id="guider">',
    '<h2>Hvad er vigtigst for dig?</h2>',
    '<p class="sektion__manchet">Vi har lavet en guide til hvert behov. På hvert kort kan du se, hvilken bil der ligger øverst lige nu.</p>',
    grupper.map(function (x) {
      var kort = x.alle;
      return [
        '<div class="guidegruppe hubgruppe" id="gruppe-' + x.id + '">',
        '<h3 class="hubgruppe__navn">' + hubIkon(x.id) + esc(x.navn) +
          '<span class="hubgruppe__antal">' + x.alle.length + (x.alle.length === 1 ? ' guide' : ' guider') + '</span></h3>',
        '<p class="sektion__manchet">' + esc(x.tekst) + '</p>',
        kort.length ? '<ul class="hubguidegrid">' + kort.map(function (g) { return hubGuideKortHTML(guider[g.slug]); }).join("\n") + '</ul>' : '',
        '</div>'
      ].filter(Boolean).join("\n");
    }).join("\n"),
    '</section>'
  ].join("\n");
}

// Hvor mange tilbud har service, dæk, forsikring, ejerafgift og vejhjælp med?
function hubYdelseHTML(data, rader, guider) {
  var n = rader.length;
  var tal = data.forudsaetninger.poster.map(function (p) {
    var med = rader.filter(function (r) { return (r.t.inkluderet || []).indexOf(p) >= 0; });
    var ikke = rader.filter(function (r) {
      return (r.t.ikke_inkluderet || []).indexOf(p) >= 0 && (r.t.inkluderet || []).indexOf(p) < 0;
    }).length;
    return { p: p, navn: POST_NAVNE[p] || p, med: med, ikke: ikke, uoplyst: n - med.length - ikke };
  });
  var saet = [];
  tal.filter(function (x) { return x.med.length > 1; }).forEach(function (x) {
    saet.push(x.navn + ' er med i ' + x.med.length + ' af de ' + n + ' tilbud.');
  });
  var ingen = tal.filter(function (x) { return !x.med.length; }).map(function (x) { return x.navn.toLowerCase(); });
  if (ingen.length) saet.push('Intet tilbud skriver, at ' + (ingen.length === 1 ? ingen[0]
    : ingen.slice(0, -1).join(', ') + ' eller ' + ingen[ingen.length - 1]) + ' er med i ydelsen.');
  tal.filter(function (x) { return x.med.length === 1; }).forEach(function (x) {
    var r = x.med[0];
    saet.push('Kun ét tilbud skriver, at ' + x.navn.toLowerCase() + ' er med. Det er ' + hubNavn(r.bil) + ' hos ' + r.t.udbyder + '.');
  });
  function seg(k, v) { return v ? '<span class="hubydelse__seg hubydelse__seg--' + k + '" style="flex-grow:' + v + '"></span>' : ''; }
  var service = guider["varebil-med-service-inkluderet"];
  return [
    '<section class="sektion hubsektion" id="ydelsen">',
    '<h2>Hvad er med i ydelsen?</h2>',
    '<p class="sektion__manchet">' + esc(saet.join(' ')) + '</p>',
    '<figure class="prisgraf__figur">',
    '<figcaption class="prisgraf__titel">De ' + n + ' tilbud fordelt efter, hvad forhandleren eller leasingselskabet skriver</figcaption>',
    '<ul class="prisgraf__forklaring"><li><span class="hubprik hubprik--med"></span>Med i ydelsen</li>' +
      '<li><span class="hubprik hubprik--ikke"></span>Ikke med</li><li><span class="hubprik hubprik--uoplyst"></span>Står ikke i tilbuddet</li></ul>',
    '<ul class="hubydelse__liste">' + tal.map(function (x) {
      return '<li class="hubydelse__raekke"><span class="hubydelse__navn">' + esc(x.navn) +
        '<span class="skjult">: med i ' + x.med.length + ', ikke med i ' + x.ikke + ', står ikke i ' + x.uoplyst + '.</span></span>' +
        '<span class="hubydelse__spor" aria-hidden="true">' + seg("med", x.med.length) + seg("ikke", x.ikke) + seg("uoplyst", x.uoplyst) + '</span>' +
        '<span class="hubydelse__tal"><strong>' + x.med.length + '</strong> med</span></li>';
    }).join("") + '</ul>',
    '</figure>',
    service ? '<p class="hublink"><a href="/bedste-tilbud/varebil-med-service-inkluderet/">Se de ' + service.med.length + ' tilbud med service</a></p>' : '',
    '</section>'
  ].filter(Boolean).join("\n");
}

// Løbetid, udbetaling, kilometer og leasingform på tværs af alle tilbud.
function hubTalHTML(rader, guider) {
  var n = rader.length, UKENDT = "Står ikke i tilbuddet";
  function fordel(noegle, orden) {
    var m = {};
    rader.forEach(function (r) { var k = noegle(r); m[k] = (m[k] || 0) + 1; });
    return orden.filter(function (k) { return m[k]; }).map(function (k) { return { navn: k, n: m[k] }; });
  }
  function stoerst(l) { return l.reduce(function (m, x) { return x.navn !== UKENDT && (!m || x.n > m.n) ? x : m; }, null); }

  var mdr = rader.map(function (r) { return r.t.loebetid_mdr; }).filter(function (v, i, a) { return v != null && a.indexOf(v) === i; })
    .sort(function (a, b) { return a - b; });
  var loeb = fordel(function (r) { return r.t.loebetid_mdr != null ? r.t.loebetid_mdr + ' måneder' : UKENDT; },
    mdr.map(function (v) { return v + ' måneder'; }).concat([UKENDT]));

  var UDB = [["Ingen udbetaling", 0, 0], ["Under 30.000 kr.", 1, 29999], ["30.000–49.999 kr.", 30000, 49999],
    ["50.000–59.999 kr.", 50000, 59999], ["60.000 kr. og mere", 60000, Infinity]];
  var udb = fordel(function (r) {
    var v = r.t.foerstegangsydelse;
    if (v == null) return UKENDT;
    for (var i = 0; i < UDB.length; i++) if (v >= UDB[i][1] && v <= UDB[i][2]) return UDB[i][0];
    return UKENDT;
  }, UDB.map(function (x) { return x[0]; }).concat([UKENDT]));
  var udbMidt = median(rader.map(function (r) { return r.t.foerstegangsydelse; }));

  var kmV = rader.map(function (r) { return r.t.km_pr_aar; }).filter(function (v, i, a) { return v != null && a.indexOf(v) === i; })
    .sort(function (a, b) { return a - b; });
  var km = fordel(function (r) {
    return r.t.km_pr_aar ? talDK(r.t.km_pr_aar) + ' km om året' : r.t.km_fri ? 'Fri kilometer' : UKENDT;
  }, kmV.map(function (v) { return talDK(v) + ' km om året'; }).concat(["Fri kilometer", UKENDT]));

  var form = fordel(function (r) {
    return r.t.leasingtype === "finansiel" ? "Finansiel leasing" : r.t.leasingtype === "operationel" ? "Operationel leasing" : UKENDT;
  }, ["Finansiel leasing", "Operationel leasing", UKENDT]);
  var fin = form.filter(function (x) { return x.navn === "Finansiel leasing"; })[0];
  var op = form.filter(function (x) { return x.navn === "Operationel leasing"; })[0];

  var sl = stoerst(loeb), sk = stoerst(km);
  var kort = [
    ["Løbetid", sl ? sl.n + ' af de ' + n + ' tilbud løber i ' + sl.navn + '.' : '', loeb, "varebil-med-kort-loebetid", "Tilbud med kort løbetid"],
    ["Udbetaling", udbMidt != null ? 'Sorterer vi tilbuddene efter udbetaling, ligger den midterste på ' + hubKr(udbMidt) : '', udb, "varebil-med-lav-udbetaling", "Tilbud med lav udbetaling"],
    ["Kilometer", sk ? sk.n + ' af de ' + n + ' tilbud har ' + sk.navn.replace(/^F/, "f") + '.' : '', km, null, null],
    ["Leasingform", (fin ? fin.n : 0) + ' tilbud er finansiel leasing, og ' + (op ? op.n : 0) + ' er operationel leasing.', form,
      "finansiel-eller-operationel-leasing", "Forskellen på finansiel og operationel leasing"]
  ];
  return [
    '<section class="sektion hubsektion" id="tilbuddene">',
    '<h2>Sådan ser tilbuddene ud</h2>',
    '<p class="sektion__manchet">Her kan du se, hvordan de ' + n + ' tilbud fordeler sig på løbetid, udbetaling, kilometer og leasingform.</p>',
    '<div class="hubtal">',
    kort.map(function (k) {
      var maks = Math.max.apply(null, k[2].map(function (x) { return x.n; }));
      return [
        '<div class="hubtal__kort">',
        '<h3>' + esc(k[0]) + '</h3>',
        k[1] ? '<p class="hubtal__fakta">' + esc(k[1]) + (/\.$/.test(k[1]) ? '' : '.') + '</p>' : '',
        '<ul class="hubtal__liste">' + k[2].map(function (x) {
          return '<li><span class="hubtal__navn">' + esc(x.navn) + '</span><span class="hubtal__spor" aria-hidden="true">' +
            '<span class="hubtal__soejle" style="width:' + (x.n / maks * 100).toFixed(1) + '%"></span></span>' +
            '<span class="hubtal__n">' + x.n + '</span></li>';
        }).join("") + '</ul>',
        k[3] && guider[k[3]] ? '<p class="hublink"><a href="/bedste-tilbud/' + k[3] + '/">' + esc(k[4]) + '</a></p>' : '',
        '</div>'
      ].filter(Boolean).join("\n");
    }).join("\n"),
    '</div>',
    '</section>'
  ].join("\n");
}

// Pris pr. m³ lastrum og pr. kg nyttelast, én række pr. model.
function hubPengeHTML(data, rader, guider) {
  function top(fn) {
    var sete = {};
    return rader.map(function (r) { return { r: r, v: fn(r) }; })
      .filter(function (x) { return x.v != null && isFinite(x.v); })
      .sort(function (a, b) { return a.v - b.v || a.r.samlet - b.r.samlet; })
      .filter(function (x) { if (sete[x.r.bil.id]) return false; sete[x.r.bil.id] = 1; return true; })
      .slice(0, 5);
  }
  var m3 = top(function (r) { var v = (r.bil.lastrum || {}).volumen_m3; return r.samlet != null && v ? r.samlet / v : null; });
  var kg = top(function (r) { return r.samlet != null && r.bil.nyttelast_kg ? r.samlet / r.bil.nyttelast_kg : null; });
  if (!m3.length && !kg.length) return '';
  function liste(titel, l, vis, under, slug, linkTekst) {
    if (!l.length) return '';
    return [
      '<div class="hubpenge__blok">',
      '<h3>' + esc(titel) + '</h3>',
      '<ol class="hubpenge__liste">' + l.map(function (x, i) {
        return '<li><a class="hubpenge__link" href="' + x.r.sti + '"><span class="hubpenge__nr">' + (i + 1) + '</span>' +
          '<span class="hubpenge__billede">' + hubBillede(x.r.bil, "") + '</span>' +
          '<span class="hubpenge__navn"><strong>' + esc(hubNavn(x.r.bil)) + '</strong><span>' + esc(under(x.r)) + '</span></span>' +
          '<span class="hubpenge__tal">' + esc(vis(x.v)) + '</span></a></li>';
      }).join("") + '</ol>',
      slug && guider[slug] ? '<p class="hublink"><a href="/bedste-tilbud/' + slug + '/">' + esc(linkTekst) + '</a></p>' : '',
      '</div>'
    ].filter(Boolean).join("\n");
  }
  var biler = data.varebiler;
  var medKg = biler.filter(function (b) { return b.nyttelast_kg != null; }).length;
  var medM3 = biler.filter(function (b) { return (b.lastrum || {}).volumen_m3 != null; }).length;
  return [
    '<section class="sektion hubsektion" id="pengene">',
    '<h2>Mest bil for pengene</h2>',
    '<p class="sektion__manchet">Her har vi delt prisen pr. måned med lastrummet og med nyttelasten. De to lister er ikke ens, for en bil kan have stor plads uden at måtte laste meget.</p>',
    '<div class="hubpenge">',
    liste("Pris pr. m³ lastrum", m3, function (v) { return talDK(Math.round(v)) + ' kr./m³'; },
      function (r) { return talDK(r.samlet) + ' kr./md. for ' + kommaTal(r.bil.lastrum.volumen_m3) + ' m³'; },
      "bedste-varevogn-til-prisen", "Bedste varevogn til prisen"),
    liste("Pris pr. kg nyttelast", kg, function (v) { return v.toFixed(2).replace(".", ",") + ' kr./kg'; },
      function (r) { return talDK(r.samlet) + ' kr./md. for ' + talDK(r.bil.nyttelast_kg) + ' kg'; },
      "varebil-med-hoej-nyttelast", "Varebil med høj nyttelast"),
    '</div>',
    '<p class="kilde">Producenterne oplyser nyttelasten på ' + medKg + ' af de ' + biler.length + ' modeller og lastrummet på ' + medM3 + '. De øvrige modeller er ikke med på listerne.</p>',
    '</section>'
  ].join("\n");
}

function hubTrinHTML() {
  var trin = [
    ["filter", "1. Sæt grænserne", "Hvad skal bilen bære, hvor lang må den være, og skal den kunne komme ned i en parkeringskælder? De tre svar skærer feltet ned til en håndfuld modeller.", "#gruppe-stoerrelse", "Guider om størrelse og type"],
    ["soejler", "2. Sammenlign på samme tal", "Se på prisen med udbetalingen fordelt over løbetiden, ikke kun på månedsydelsen. Se også efter, om service, dæk, forsikring og ejerafgift er med.", "#prisen", "Sådan regner vi prisen"],
    ["aftale", "3. Få vilkårene på skrift", "Bed om at få leasingformen, restværdien og prisen for hver kilometer over det aftalte på skrift. Bed også om vilkårene for, hvordan bilen skal afleveres.", "/tilbudstjek/", "Få dit tilbud tjekket"]
  ];
  return [
    '<section class="sektion hubsektion">',
    '<h2>Fra behov til en aftale, du kan sammenligne</h2>',
    '<ol class="hubtrin">' + trin.map(function (t) {
      return '<li><span class="hubtrin__ikon">' + hubIkon(t[0]) + '</span><h3>' + esc(t[1]) + '</h3><p>' + esc(t[2]) + '</p>' +
        '<p class="hublink"><a href="' + t[3] + '">' + esc(t[4]) + '</a></p></li>';
    }).join("") + '</ol>',
    '</section>'
  ].join("\n");
}

function hubScript() {
  // Knapperne sorterer figuren om og lader rækkerne glide på plads.
  return '<script>(function(){var f=document.getElementById("hubOmsort");if(!f)return;' +
    'var l=f.querySelector("ol"),s=f.querySelector(".hubomsort__styr");s.hidden=false;' +
    's.addEventListener("click",function(e){var b=e.target.closest("button[data-sort]");if(!b||b.getAttribute("aria-pressed")==="true")return;' +
    '[].forEach.call(s.querySelectorAll("button"),function(x){x.setAttribute("aria-pressed",String(x===b));});' +
    'var k=b.getAttribute("data-sort"),r=[].slice.call(l.children),fr=r.map(function(x){return x.getBoundingClientRect().top;});' +
    'var nr=r.slice().sort(function(a,c){return a.getAttribute("data-"+k)-c.getAttribute("data-"+k);});' +
    'nr.forEach(function(x,i){l.appendChild(x);x.querySelector(".hubomsort__nr").textContent=i+1;});' +
    'r.forEach(function(x,i){var d=fr[i]-x.getBoundingClientRect().top;x.style.transition="none";x.style.transform=d?"translateY("+d+"px)":"";});' +
    'void l.offsetHeight;r.forEach(function(x){x.style.transition="";x.style.transform="";});});})();</script>';
}

function hubHTML(data) {
  var rader = alleTilbud(data);
  var guider = hubGuider(rader);
  var grupper = hubGrupper(guider);
  var antalGuider = Object.keys(guider).length;
  var antalTilbud = rader.length;
  var nUdb = rader.map(function (r) { return r.t.udbyder; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).length;

  var faq = [
    ["Hvordan finder I det bedste tilbud?",
     "Det afhænger af, hvad du måler på. Den billigste bil er ikke altid den, der giver mest lastrum for pengene. Derfor skriver vi øverst i hver guide, hvad vi har sorteret efter. På siden Bedste varebil " + aaretsAar(data) + " har vi kåret en vinder i hver kategori ud fra pris, mål og anmeldelser."],
    ["Hvorfor lægger I udbetalingen oven i ydelsen?",
     "To tilbud med samme månedsydelse kan koste vidt forskelligt, hvis det ene har en udbetaling på 20.000 kr. og det andet på 60.000 kr. Vi fordeler udbetalingen over løbetiden, så du kan sammenligne tilbuddene på ét tal."],
    ["Er der betalt for placeringerne?",
     "Nej. Rækkefølgen afhænger kun af det, vi sorterer efter. Læs mere på siden Sådan tjener vi penge."],
    ["Hvor gamle er priserne?",
     "Ved hvert tilbud står den dato, hvor vi har set prisen hos forhandleren eller leasingselskabet. Der står også et link til tilbuddet, så du selv kan tjekke prisen."],
    ["Regner I løbetiderne om, så tilbuddene kan sammenlignes?",
     "Nej. Vi viser kun tilbud, som forhandlerne og leasingselskaberne giver lige nu. Et tilbud på 60 måneder omregnet til 36 måneder er ikke et tilbud, nogen giver. Løbetid og kilometer står ved hvert tilbud."]
  ];
  var schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(function (q) {
      return { "@type": "Question", "name": q[0], "acceptedAnswer": { "@type": "Answer", "text": q[1] } };
    })
  }, null, 2);

  var title = titel("Find varevognen til dit behov: " + antalGuider + " guider med priser");
  var desc = "Find den bedste varebil eller varevogn til prisen efter dit behov: billigst, elektrisk, høj nyttelast, trækkraft " +
             "eller lav nok til en parkeringskælder. " + antalTilbud + " erhvervsleasingtilbud ekskl. moms med kilde og dato.";

  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/bedste-tilbud/", samlSchema(schema, krummeSchema([["Forsiden", "/"], ["Bedste tilbud", null]]))),
    header(),
    '<main id="indhold" class="indhold hubside">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Bedste tilbud</li></ol></nav>',

    '<section class="hero-ny hero-ny--artikler hubhero">',
    '<div class="hero-ny__tekst">',
    '  <p class="hero-ny__over"><span class="hero-ny__maerkat">Uafhængig sammenligning</span>' +
      (data.sidst_opdateret ? '<span>Opdateret ' + esc(visDato(data.sidst_opdateret)) + '</span>' : '') + '</p>',
    '  <h1>Find varevognen til dit behov</h1>',
    // 04-10-2026: brugerens tekst. "markedets absolut billigste" er ændret til tilbuddene, vi har samlet (regel 12).
    '  <p class="hero-ny__manchet">Den rigtige varevogn afhænger af dit behov: hvad den skal bære, hvor langt den skal køre, og hvad den må koste om måneden. Her finder du de billigste elvarebiler i hver klasse lige nu, blandt de <strong>' + antalTilbud + ' tilbud</strong>, vi har samlet. Brug guiderne nedenfor, hvis du vil dykke ned i nyttelast, træk og udstyr.</p>',
    '  <p class="koeb-hero__knapper">' + tilbudsknapHTML("", "Få tilbud gratis") +
      '<a href="' + (FORSIDE_NY ? '/alle-tilbud/' : '/#varebiler') + '" class="knap knap--sekundaer">Se alle ' + antalTilbud + ' tilbud</a></p>',
    '  <p class="hero-ny__note">De ' + antalTilbud + ' tilbud dækker ' + data.varebiler.length + ' modeller og kommer fra ' + nUdb +
      ' forhandlere og leasingselskaber. Ingen har betalt for at stå her. Alle priser er uden moms.</p>',
    '</div>',
    hubVaelgHTML(grupper),
    '</section>',

    hubKlasseHTML(data, guider),
    hubAaretsHTML(data),
    hubPrisHTML(rader),
    hubGuiderHTML(guider, grupper),
    hubYdelseHTML(data, rader, guider),
    hubTalHTML(rader, guider),
    hubPengeHTML(data, rader, guider),
    hubTrinHTML(),

    '<section class="sektion" style="padding-left:0;padding-right:0">',
    '<h2>Spørgsmål og svar</h2>',
    '<div class="faq">' + faq.map(function (q) {
      return '<details class="faq__punkt"><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>';
    }).join("\n") + '</div>',
    '</section>',

    ctaBlok(),

    '<div class="forbehold">',
    '  <h2>Om tallene</h2>',
    '  <p>Vi har hentet alle priser fra forhandlernes og leasingselskabernes egne prislister og annoncer. Datoen står ved hvert tilbud. Tilbuddene har forskellig løbetid og kilometer, og vi regner dem ikke om til samme vilkår.</p>',
    '  <p>Vi lægger ikke et skøn for service, dæk, forsikring, ejerafgift eller vejhjælp oven i prisen. Er de ikke med i tilbuddet, skal de betales ved siden af.</p>',
    '  <p>Siden er ikke skatte-, revisions- eller juridisk rådgivning.</p>',
    '</div>',

    '</main>',
    hubScript(),
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// Hvordan ligger mærket i forhold til de øvrige tilbud på siden? Alle tal
// beregnes, så afsnittet ikke kan komme til at påstå noget forkert.
function median(liste) {
  var v = liste.filter(function (x) { return x != null && isFinite(x); })
               .sort(function (a, b) { return a - b; });
  if (!v.length) return null;
  var m = Math.floor(v.length / 2);
  return v.length % 2 ? v[m] : (v[m - 1] + v[m]) / 2;
}

function maerkeIMarkedet(maerke, mine, alle) {
  var afsnit = [];

  function prKg(r) {
    return (r.samlet != null && r.bil.nyttelast_kg) ? r.samlet / r.bil.nyttelast_kg : null;
  }
  function prM3(r) {
    var v = r.bil.lastrum && r.bil.lastrum.volumen_m3;
    return (r.samlet != null && v) ? r.samlet / v : null;
  }
  function lavest(liste, fn) {
    return liste.map(fn).filter(function (x) { return x != null && isFinite(x); })
                .reduce(function (m, x) { return m == null || x < m ? x : m; }, null);
  }

  // Pris
  var minPris = lavest(mine, function (r) { return r.samlet; });
  var medPris = median(alle.map(function (r) { return r.samlet; }));
  if (minPris != null && medPris) {
    var pct = Math.round(((minPris - medPris) / medPris) * 100);
    afsnit.push(esc(maerke) + "s billigste tilbud lander på <strong>" + talDK(minPris) +
      " kr. pr. måned</strong> samlet, når udbetalingen er fordelt over løbetiden. Medianen for alle " +
      alle.length + " tilbud på siden er " + talDK(Math.round(medPris)) + " kr., så det billigste " +
      esc(maerke) + "-tilbud ligger " + (pct === 0 ? "præcis på medianen" :
      Math.abs(pct) + " % " + (pct < 0 ? "under" : "over") + " midten af feltet") + ".");
  }

  // Nyttelast og lastrum — de to mål der afgør, om bilen kan bruges til arbejdet
  var mKg = lavest(mine, prKg), aKg = median(alle.map(prKg));
  var mM3 = lavest(mine, prM3), aM3 = median(alle.map(prM3));
  if (mKg != null && aKg) {
    afsnit.push("Målt pr. kilo nyttelast koster det billigste " + esc(maerke) + "-tilbud <strong>" +
      mKg.toFixed(2).replace(".", ",") + " kr. pr. kg pr. måned</strong> mod " +
      aKg.toFixed(2).replace(".", ",") + " kr. i median. " +
      (mM3 != null && aM3 ? "Målt pr. m³ lastrum er tallet " + talDK(Math.round(mM3)) + " kr. om måneden mod " +
        talDK(Math.round(aM3)) + " kr. i median. " : "") +
      "De to mål giver ikke samme rækkefølge, for en varebil kan have god plads uden at måtte laste meget, og omvendt.");
  }

  // Oplysningsgrad
  var mO = mine.reduce(function (x, r) { return x + r.b.oplystAntal; }, 0);
  var mP = mine.reduce(function (x, r) { return x + r.b.posterAntal; }, 0);
  var aO = alle.reduce(function (x, r) { return x + r.b.oplystAntal; }, 0);
  var aP = alle.reduce(function (x, r) { return x + r.b.posterAntal; }, 0);
  if (mP && aP) {
    var mPct = Math.round((mO / mP) * 100), aPct = Math.round((aO / aP) * 100);
    afsnit.push("Tilbuddene på " + esc(maerke) + " oplyser <strong>" + mPct +
      " % af de fem udgifter</strong>, vi tjekker for (service, dæk, forsikring, ejerafgift og vejhjælp). For alle tilbud på siden er tallet " + aPct + " %. " +
      (mPct === 0
        ? "Ingen af dem tager stilling til service, dæk, forsikring, ejerafgift eller vejhjælp, så de poster skal lægges oveni prisen, før tilbuddene kan sammenlignes med et der inkluderer noget."
        : mPct < aPct
          ? "Det er under gennemsnittet, og det betyder ikke at tilbuddene er dårlige — men at der mangler mere, før den endelige pris kan opgøres."
          : mPct === aPct
            ? "Det er på niveau med resten af feltet."
            : "Det er over gennemsnittet, så tilbuddene siger mere om, hvad bilen ender med at koste.") +
      " Tallet siger intet om, hvor gode priserne er.");
  }

  // Drivmidler i mærkets udvalg
  var dr = {};
  mine.forEach(function (r) { if (r.bil.drivmiddel) dr[drivmiddelNavn(r.bil.drivmiddel)] = 1; });
  var drl = Object.keys(dr);
  if (drl.length) {
    afsnit.push(esc(maerke) + " er på siden repræsenteret med " +
      (drl.length === 1 ? "udelukkende " + esc(drl[0]) : esc(ogListe(drl))) + ".");
  }

  if (!afsnit.length) return "";
  return [
    '<section class="sektion--kort">',
    '  <h2>Hvordan ' + esc(maerke) + ' ligger i feltet</h2>',
    afsnit.map(function (p) { return '  <p>' + p + '</p>'; }).join("\n"),
    '  <p style="margin-top:1.5rem"><a href="/bedste-tilbud/" class="knap knap--sekundaer">Se alle rangordner</a></p>',
    '</section>'
  ].join("\n");
}

// ── /varebiler/<maerke>/ ─────────────────────────────────────────────────────

// Garantien gælder typisk hele mærket, men ikke altid: elbiler har batteri-
// garanti, og nogle modeller har en forlængelse, andre ikke. Ens garantier slås
// sammen, så siden ikke gentager den samme linje ni gange.
function maerkeGarantiHTML(maerke, biler) {
  var grupper = {};
  biler.forEach(function (b) {
    var g = garantiForModel(b.id);
    if (!g) return;
    var k = [garantiKort(g) || "", harBatteri(b) && g.batteri ? "batteri " + aarKm(g.batteri) : ""].filter(Boolean).join(" · ");
    (grupper[k] = grupper[k] || []).push(b);
  });
  var noegler = Object.keys(grupper).filter(Boolean);
  if (!noegler.length) return '';
  return [
    '<section class="sektion--kort" id="garanti">',
    '  <h2>Garanti hos ' + esc(maerke) + '</h2>',
    '  <ul class="udstyr-indeks">' + noegler.map(function (k) {
      return '<li><span>' + grupper[k].map(function (b) {
        return '<a href="' + modelSti(b) + '#garanti">' + esc(b.model) + '</a>';
      }).join(', ') + '</span><span class="udstyr-indeks__tal">' + esc(k) + '</span></li>';
    }).join('') + '</ul>',
    '  <p style="margin-top:1rem"><a href="/garanti/">Sammenlign garantien på tværs af mærker</a></p>',
    '</section>'
  ].join('\n');
}

// 02-10-2026: mærkets brugte varebiler (fra brugte.json). Brugt-lageret skriver
// "VW" og "Mercedes", siderne "Volkswagen" og "Mercedes-Benz".
function maerkeBrugtHTML(maerke) {
  var navne = [maerke.toLowerCase(), (KALDENAVN[maerke] || "").toLowerCase()].filter(Boolean);
  var alle = brugteEfterModel(), antal = 0, fra = null, slugs = {};
  Object.keys(alle).forEach(function (k) {
    var m = alle[k];
    if (navne.indexOf(String(m.maerke).toLowerCase()) < 0) return;
    antal += m.antal;
    if (m.fra != null && (fra == null || m.fra < fra)) fra = m.fra;
    slugs[slug(m.maerke)] = 1;
  });
  if (!antal) return '';
  var ms = Object.keys(slugs).filter(function (x) { return fs.existsSync(path.join(__dirname, "brugte-varebiler", x)); })[0];
  var sti = ms ? "/brugte-varebiler/" + ms + "/" : "/brugte-varebiler/";
  return [
    '<section class="sektion--kort" id="brugte">',
    '  <h2>Brugte ' + esc(maerke) + ' varebiler</h2>',
    '  <p>Der står <strong>' + antal + ' brugte ' + esc(maerke) + ' varebiler</strong> på lageret' +
      (fra != null ? ', fra ' + talDK(fra) + ' kr. ekskl. moms' : '') + '. En brugt bil har ingen førstegangsydelse og ingen bindingsperiode, men du står selv med værditabet.</p>',
    '  <p class="maerkelinks"><a href="' + sti + '">Se de brugte ' + esc(maerke) + '</a><a href="/brugte-varebiler/">Alle brugte varebiler</a></p>',
    '  <p class="kilde">Bilerne sælges af en forhandler, vi samarbejder med, og vi kan få betaling for at formidle kontakten. <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '</section>'
  ].join('\n');
}

// Sammenligninger, hvor en af mærkets modeller møder et andet mærke.
function maerkeSammenlignHTML(maerke, biler, data) {
  var ids = biler.map(function (b) { return b.id; });
  var par = sammenlignPar(data).filter(function (p) {
    var a = ids.indexOf(p.a.id) >= 0, b = ids.indexOf(p.b.id) >= 0;
    return (a || b) && !(a && b);
  });
  if (!par.length) return '';
  return [
    '<section class="sektion--kort">',
    '  <h2>' + esc(maerke) + ' sammenlignet med andre mærker</h2>',
    '  <p class="maerkelinks">' + par.map(function (p) {
      return '<a href="/sammenlign/' + p.slug + '/">' + esc(p.a.maerke + ' ' + p.a.model) + ' vs. ' + esc(p.b.maerke + ' ' + p.b.model) + '</a>';
    }).join('') + '</p>',
    '</section>'
  ].join('\n');
}

// 02-10-2026: mærkets modeller efter størrelse, og spørgsmål, der kan besvares
// ud fra data (billigst, el, størst, mest nyttelast, mest træk).
var KLASSE_ORD = { pizzabil: "Lille", mellem: "Mellemstor", stor: "Stor" };
var KLASSE_ORDEN = ["pizzabil", "mellem", "stor"];
function maerkeKlasse(b) {
  var k = stoerrelse(b);
  if (k) return k;
  return b.karrosseri === "pickup" ? "pickup" : "andet";
}
function maerkeKlasseOrd(k, b) {
  if (KLASSE_ORD[k]) return KLASSE_ORD[k];
  if (k === "pickup") return "Pickup";
  return b.karrosseri ? b.karrosseri.charAt(0).toUpperCase() + b.karrosseri.slice(1) : "Andet";
}
function maerkeOverblik(maerke, biler, data) {
  var raekker = biler.map(function (b) {
    return { b: b, k: maerkeKlasse(b), r: billigsteSamlet(b, data) };
  }).sort(function (x, y) {
    var ox = KLASSE_ORDEN.indexOf(x.k), oy = KLASSE_ORDEN.indexOf(y.k);
    ox = ox < 0 ? 9 : ox; oy = oy < 0 ? 9 : oy;
    return (ox - oy) || (((x.b.lastrum || {}).volumen_m3 || 0) - ((y.b.lastrum || {}).volumen_m3 || 0));
  });
  var html = biler.length < 2 ? '' : [
    '<section class="sektion--kort" id="stoerrelse">',
    '  <h2>' + esc(maerke) + ' efter størrelse</h2>',
    '  <p class="sektion__manchet">Fra den mindste til den største, med det billigste tilbud inkl. udbetaling. Klik for alle tilbud, mål og garanti.</p>',
    '  <div class="sbs__rul"><table class="sbs sbs--tett"><thead><tr><th>Model</th><th>Størrelse</th><th>Lastrum</th><th>Nyttelast</th><th>Fra pr. md.</th></tr></thead><tbody>',
    raekker.map(function (x) {
      var lr = x.b.lastrum || {};
      return '<tr><th scope="row"><a href="' + modelSti(x.b) + '">' + esc(x.b.model) + '</a>' + (x.b.model.toLowerCase().indexOf(drivmiddelNavn(x.b.drivmiddel)) < 0 ? '<small>' + esc(drivmiddelNavn(x.b.drivmiddel)) + '</small>' : '') + '</th>' +
        '<td>' + esc(maerkeKlasseOrd(x.k, x.b)) + '</td>' +
        '<td>' + (lr.volumen_m3 != null ? kommaTal(lr.volumen_m3) + ' m³' : '—') + '</td>' +
        '<td>' + esc(nyttelastTekst(x.b) || '—') + '</td>' +
        '<td>' + (x.r ? talDK(Math.round(x.r.samlet)) + ' kr.' : '—') + '</td></tr>';
    }).join(""),
    '  </tbody></table></div>',
    '</section>'
  ].join("\n");

  var faq = [];
  var medPris = raekker.filter(function (x) { return x.r; });
  if (medPris.length) {
    var bil1 = medPris.reduce(function (m, x) { return x.r.samlet < m.r.samlet ? x : m; });
    faq.push(["Hvad er den billigste " + maerke + " varebil at lease?",
      bil1.b.model + ": fra " + talDK(Math.round(bil1.r.samlet)) + " kr. om måneden ekskl. moms med udbetalingen fordelt over løbetiden, hos " +
      bil1.r.t.udbyder + ". Den annoncerede ydelse er " + talDK(bil1.r.t.maanedspris) + " kr."]);
  }
  var el = biler.filter(function (b) { return b.drivmiddel === "el"; });
  faq.push(["Hvilke " + maerke + " varebiler fås som el?",
    el.length ? ogListe(el.map(function (b) { return b.model; })) + ". " + (el.length === 1 ? "Den" : "De") + " står med rækkevidde og batteri på modelsiden."
      : "Ingen af de " + maerke + "-modeller, vi har tilbud på, er elektriske."]);
  function stoerst(fn, enhed, hvad, sp, efter) {
    var l = biler.filter(function (b) { return fn(b) != null; });
    if (l.length < 2) return;
    var b = l.reduce(function (m, x) { return fn(x) > fn(m) ? x : m; });
    faq.push([sp, (l.length < biler.length ? "Blandt de modeller, hvor producenten oplyser det: " : "") + b.model + ", med " +
      (enhed === "m³" ? kommaTal(fn(b)) : talDK(fn(b))) + " " + enhed + " " + hvad + " ifølge producenten" + efter]);
  }
  stoerst(function (b) { return (b.lastrum || {}).volumen_m3; }, "m³", "lastrum", "Hvilken " + maerke + " varebil har det største lastrum?", ". Tallet gælder den udgave af bilen, som målene på modelsiden gælder for.");
  stoerst(function (b) { return b.nyttelast_kg; }, "kg", "nyttelast", "Hvilken " + maerke + " varebil kan laste mest?", ". Fører, passagerer og ekstraudstyr tæller med.");
  stoerst(function (b) { return b.anhaengervaegt_kg; }, "kg", "trækvægt", "Hvilken " + maerke + " varebil kan trække mest?", ", med bremset anhænger.");
  return { html: html, faq: faq };
}

// 02-10-2026: hvem leaser mærket - udbyderne med antal tilbud, modeller og billigste pris.
function maerkeUdbydereHTML(maerke, rader) {
  var u = {};
  rader.forEach(function (r) {
    var x = u[r.t.udbyder] = u[r.t.udbyder] || { navn: r.t.udbyder, n: 0, modeller: {}, min: null, fin: 0, op: 0 };
    x.n++; x.modeller[r.bil.model] = 1;
    if (r.samlet != null && (x.min == null || r.samlet < x.min)) x.min = r.samlet;
    if (r.t.leasingtype === "finansiel") x.fin++; else if (r.t.leasingtype === "operationel") x.op++;
  });
  var L = Object.keys(u).map(function (k) { return u[k]; }).sort(function (a, b) { return (a.min || 1e9) - (b.min || 1e9); });
  if (!L.length) return '';
  return [
    '<section class="sektion--kort" id="udbydere">',
    '  <h2>Hvem leaser ' + esc(maerke) + '?</h2>',
    '  <p class="sektion__manchet">Der er tilbud på ' + esc(maerke) + ' fra ' + L.length + (L.length === 1 ? ' forhandler eller leasingselskab' : ' forhandlere og leasingselskaber') + ', og den billigste står først. Prisen er med udbetalingen fordelt over løbetiden.</p>',
    '  <div class="sbs__rul"><table class="sbs sbs--tett"><thead><tr><th>Udbyder</th><th>Tilbud</th><th>Modeller</th><th>Fra pr. md.</th><th>Type</th></tr></thead><tbody>',
    L.map(function (x) {
      var sti = "/udbydere/" + slug(x.navn) + "/";
      var harSide = fs.existsSync(path.join(__dirname, "udbydere", slug(x.navn)));
      var type = x.fin && x.op ? "Finansiel og operationel" : x.op ? "Operationel" : x.fin ? "Finansiel" : "—";
      return '<tr><th scope="row">' + (harSide ? '<a href="' + sti + '">' + esc(x.navn) + '</a>' : esc(x.navn)) + '</th>' +
        '<td>' + x.n + '</td><td>' + esc(Object.keys(x.modeller).join(", ")) + '</td>' +
        '<td>' + (x.min != null ? talDK(Math.round(x.min)) + ' kr.' : '—') + '</td><td>' + type + '</td></tr>';
    }).join(''),
    '  </tbody></table></div>',
    '  <p class="kilde">Vil du have tilbud fra flere af dem på samme bil, så <a href="/faa-tilbud/">henter vi dem</a> — og sammenligner dem skriftligt.</p>',
    '</section>'
  ].join("\n");
}

// 02-10-2026: mærkets elvarebiler, med de to beregnere.
function maerkeElHTML(maerke, biler, data) {
  var el = biler.filter(function (b) { return b.drivmiddel === "el"; });
  if (!el.length) return '';
  return [
    '<section class="sektion--kort" id="el">',
    '  <h2>' + esc(maerke) + ' som el</h2>',
    '  <p class="sektion__manchet">' + el.length + (el.length === 1 ? ' elvarebil' : ' elvarebiler') + ' fra ' + esc(maerke) + ' har aktuelle tilbud. Rækkevidden er producentens WLTP-tal.</p>',
    '  <div class="sbs__rul"><table class="sbs sbs--tett"><thead><tr><th>Model</th><th>Rækkevidde</th><th>Lastrum</th><th>Fra pr. md.</th><th></th></tr></thead><tbody>',
    el.map(function (b) {
      var e = elForModel(b.id) || {}, rk = e.raekkevidde_km != null ? e.raekkevidde_km : b.raekkevidde_km;
      var rr = billigsteSamlet(b, data), m = modstykke(b, data);
      return '<tr><th scope="row"><a href="' + modelSti(b) + '">' + esc(b.model) + '</a></th>' +
        '<td>' + (rk != null ? talDK(rk) + ' km' : '—') + '</td>' +
        '<td>' + ((b.lastrum || {}).volumen_m3 != null ? kommaTal(b.lastrum.volumen_m3) + ' m³' : '—') + '</td>' +
        '<td>' + (rr ? talDK(Math.round(rr.samlet)) + ' kr.' : '—') + '</td>' +
        '<td>' + (m ? '<a href="/groen-omstilling/?d=' + m.id + '&amp;e=' + b.id + '#beregner">Mod ' + esc(m.model) + '</a>' : '') + '</td></tr>';
    }).join(''),
    '  </tbody></table></div>',
    '  <p><a href="/groen-omstilling/#beregner">Elberegneren</a> regner ud, hvad skiftet koster i kroner, og <a href="/groen-omstilling/ladetid/">ladetidsberegneren</a> viser, hvad det koster i tid.</p>',
    '</section>'
  ].join("\n");
}

// 02-10-2026: salgstal fra modellernes noter (med kilde), fx "Danmarks mest solgte varebil".
function maerkeSalgHTML(biler) {
  var n = biler.filter(function (b) { return b.note && /mest solgte/i.test(b.note); });
  if (!n.length) return '';
  return '  <ul class="maerke-salg">' + n.map(function (b) {
    return '<li><a href="' + modelSti(b) + '">' + esc(b.model) + '</a>: ' + esc(b.note.replace(/\.$/, '')) +
      (b.note_kilde_url ? ' <a class="kilde-link" href="' + esc(b.note_kilde_url) + '" rel="nofollow noopener" target="_blank">kilde</a>' : '') + '.</li>';
  }).join('') + '</ul>';
}

// ── Om mærket (05-10-2026) ─────────────────────────────────────────
// maerker.json har redaktionel tekst pr. mærke: fabrikker, historie, mærket i
// Danmark, service og forhandlere, hver med kilde. Godkendt til produktion
// 05-10-2026. GULPLADE_MAERKE_NY=0 slår afsnittet, heroen og den nye titel fra.
var MAERKE_NY = process.env.GULPLADE_MAERKE_NY !== "0";
var MAERKER = (function () {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "maerker.json"), "utf8")).maerker || {}; }
  catch (e) { return {}; }
})();
function maerkeInfo(maerke) { return MAERKE_NY ? MAERKER[maerke] || null : null; }

function kildeLinks(kilder) {
  kilder = (kilder || []).filter(function (k) { return k && k.url; });
  if (!kilder.length) return '';
  return '<p class="kilde">Kilde: ' + kilder.map(function (k) {
    return '<a href="' + esc(k.url) + '" rel="nofollow noopener" target="_blank">' + esc(k.navn || vaertNavn(k.url)) + '</a>';
  }).join(', ') + '</p>';
}


// Billedrække: én bil fra hver størrelse, så siden viser bredden i udvalget.
function maerkeGalleri(maerke, biler, heroId) {
  // Én bil pr. størrelse, de små først og pickups til sidst. Mangler en
  // størrelse en dieselbil, tager vi elbilen.
  var orden = function (b) { var i = KLASSE_ORDEN.indexOf(maerkeKlasse(b)); return i < 0 ? 9 : i; };
  var kandidater = biler.filter(function (b) { return b.billede; })
    .sort(function (a, b) { return orden(a) - orden(b) || (b.tilbud || []).length - (a.tilbud || []).length; });
  var set = {}, valgt = [];
  kandidater.forEach(function (b) {
    if (b.drivmiddel === "el" || set[maerkeKlasse(b)] || valgt.length >= 4) return;
    set[maerkeKlasse(b)] = 1; valgt.push(b);
  });
  kandidater.forEach(function (b) {
    if (valgt.length >= 4 || valgt.indexOf(b) >= 0 || set[maerkeKlasse(b)]) return;
    set[maerkeKlasse(b)] = 1; valgt.push(b);
  });
  valgt.sort(function (a, b) { return orden(a) - orden(b); });
  if (valgt.length < 2) return '';
  return '<ul class="maerke-galleri">' + valgt.map(function (b) {
    return '<li><a href="' + modelSti(b) + '"><img src="' + esc(b.billede) + '" alt="' + esc(navnMedType(b)) +
      '" width="800" height="500" loading="lazy" decoding="async"><span>' + esc(b.model) + '</span></a></li>';
  }).join('') + '</ul>';
}

function maerkeOmHTML(maerke, biler, info) {
  if (!info) return '';
  var dele = [];
  if (info.fabrikker && info.fabrikker.length) {
    dele.push([
      '<div class="maerke-om__del">',
      '  <h3>Hvor bliver ' + esc(maerke) + '-varebilerne bygget?</h3>',
      info.fabrikker_tekst ? '  <p>' + esc(info.fabrikker_tekst) + '</p>' : '',
      '  <div class="sbs__rul"><table class="sbs sbs--tett"><thead><tr><th>Model</th><th>Fabrik</th><th>Land</th></tr></thead><tbody>',
      info.fabrikker.map(function (x) {
        return '<tr><th scope="row">' + esc(x.modeller.join(", ")) + '</th><td>' + esc(x.sted) + '</td><td>' + esc(x.land) + '</td></tr>';
      }).join(''),
      '  </tbody></table></div>',
      kildeLinks(info.fabrikker_kilder),
      '</div>'
    ].filter(Boolean).join('\n'));
  }
  if (info.historie && info.historie.length) {
    dele.push([
      '<div class="maerke-om__del">',
      '  <h3>' + esc(/[sxz]$/i.test(maerke) ? maerke + "'" : maerke + "s") + ' historie med varebiler</h3>',
      '  <ol class="maerke-tidslinje">' + info.historie.map(function (h) {
        return '<li><span class="maerke-tidslinje__aar">' + esc(h.aar) + '</span><p>' + esc(h.tekst) + '</p></li>';
      }).join('') + '</ol>',
      kildeLinks(info.historie_kilder),
      '</div>'
    ].join('\n'));
  }
  [["danmark", esc(maerke) + " i Danmark"], ["service", "Service og værksted"], ["forhandlere", "Forhandlere"]].forEach(function (d) {
    var x = info[d[0]];
    if (!x || !x.tekst || !x.tekst.length) return;
    dele.push([
      '<div class="maerke-om__del">',
      '  <h3>' + d[1] + '</h3>',
      x.tekst.map(function (p) { return '  <p>' + esc(p) + '</p>'; }).join('\n'),
      x.link ? '  <p><a href="' + esc(x.link.url) + '" rel="nofollow noopener" target="_blank">' + esc(x.link.tekst) + '</a></p>' : '',
      kildeLinks(x.kilder),
      '</div>'
    ].filter(Boolean).join('\n'));
  });
  if (!dele.length) return '';
  return [
    '<section class="sektion--kort maerke-om" id="om">',
    '  <h2>Om ' + esc(maerke) + '</h2>',
    info.om ? '  <p class="sektion__manchet">' + esc(info.om) + '</p>' : '',
    maerkeGalleri(maerke, biler, info.hero),
    dele.join('\n'),
    info.kontrolleret ? '  <p class="kilde">Oplysningerne er tjekket den ' + esc(datoLang(info.kontrolleret)) + '.</p>' : '',
    '</section>'
  ].filter(Boolean).join('\n');
}

function maerkeSideHTML(maerke, biler, data) {
  var f = data.forudsaetninger;
  var info = maerkeInfo(maerke);
  var rader = alleTilbud(data).filter(function (r) { return r.bil.maerke === maerke; });
  var sti = "/varebiler/" + slug(maerke) + "/";

  var billigst = rader.reduce(function (m, r) {
    return (r.t.maanedspris != null && (m == null || r.t.maanedspris < m)) ? r.t.maanedspris : m;
  }, null);
  var oplyst = rader.reduce(function (s, r) { return s + r.b.oplystAntal; }, 0);
  var poster = rader.reduce(function (s, r) { return s + r.b.posterAntal; }, 0);
  var pct = poster ? Math.round((oplyst / poster) * 100) : 0;

  var udbydere = rader.map(function (r) { return r.t.udbyder; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();

  var modelKort = biler.map(function (bil) {
    var mine = rader.filter(function (r) { return r.bil.id === bil.id; });
    // Samme regel som på forsiden: ét tilbud, ikke et blandet regnestykke.
    var beregn2 = mine.filter(function (r) { return r.samlet != null; });
    var valgt2 = beregn2.length
      ? beregn2.reduce(function (m, r) { return r.samlet < m.samlet ? r : m; })
      : mine[0];
    var lav = valgt2 ? valgt2.samlet : null;
    var ann = valgt2 ? valgt2.t.maanedspris : null;
    var lr = bil.lastrum || {};
    var s = "/varebiler/" + slug(bil.maerke) + "/" + slug(bil.model) + "/";

    var felter = [
      ["Lastrum", lr.volumen_m3 != null ? kommaTal(lr.volumen_m3) + " m³" : null],
      ["Nyttelast", nyttelastTekst(bil)],
      ["Trækvægt", traekTekst(bil)],
      ["Totalvægt", bil.totalvaegt_kg != null ? talDK(bil.totalvaegt_kg) + " kg" : null],
      ["Batteri", bil.batteri_kwh != null ? kommaTal(bil.batteri_kwh) + " kWh" : null]
    ].filter(function (x) { return x[1]; });

    return [
      '<li class="bilkort">',
      '  <a class="bilkort__link" href="' + s + '">',
      '    <div class="bilkort__billede">',
      bil.billede
        ? '      <img src="' + esc(bil.billede) + '" alt="' + esc(navnMedType(bil)) + '" width="800" height="500" loading="lazy" decoding="async">'
        : '      <div class="bilkort__intetbillede">' + esc(bil.model) + '<span>billede mangler</span></div>',
      '    </div>',
      '    <div class="bilkort__krop">',
      '      <div class="bilkort__navnblok"><h3 class="bilkort__navn">' + esc(kortNavn(bil)) + '</h3>',
      bil.variant_for_maal ? '        <p class="bilkort__variant">' + esc(bil.variant_for_maal) + '</p>' : '',
      '      </div>',
      '      <div class="bilkort__prisblok">',
      '        <p class="bilkort__pris">',
      '          <span class="bilkort__pris-navn">Billigste leasingpris</span>',
      '          <span class="bilkort__pris-vaerdi">'
      + '<span class="bilkort__belob">' + krMd(ann) + '</span></span>',
      '        </p>',
      lav != null ? '        <p class="bilkort__samlet"><strong>' + krMd(lav) + '</strong> samlet pr. md.</p>' : '',
      '      </div>',
      felter.length
        ? '      <dl class="bilkort__felter">' + felter.map(function (x) {
            return '<div><dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd></div>';
          }).join("") + '</dl>'
        : '      <p class="bilkort__intet">Tekniske mål ikke indtastet endnu</p>',
      '      <p class="bilkort__fod">' + mine.length + (mine.length === 1 ? ' tilbud' : ' tilbud') + '</p>',
      '    </div>',
      '  </a>',
      '</li>'
    ].filter(function (l) { return l !== ''; }).join("\n");
  }).join("\n");

  var tilbudRaekker = rader.slice().sort(function (a, b) {
    if (a.samlet == null) return 1;
    if (b.samlet == null) return -1;
    return a.samlet - b.samlet;
  }).map(function (r) {
    var inkl = (r.t.inkluderet || []).map(function (p) { return POST_ORD[p] || p; });
    var lav = r.b.daekning < 0.6 ? " daekning--lav" : "";
    return [
      '<tr>',
      '<th scope="row">' + esc(r.t.udbyder) + '</th>',
      '<td class="tilbud-model"><a href="' + r.sti + '">' + esc(r.bil.model) + '</a></td>',
      '<td>' + esc(r.t.maanedspris != null ? talDK(r.t.maanedspris) + " kr." : "—") + '</td>',
      '<td>' + esc(r.t.foerstegangsydelse != null ? talDK(r.t.foerstegangsydelse) + " kr." : "—") + '</td>',
      '<td>' + esc(r.samlet != null ? talDK(r.samlet) + " kr." : "—") + '</td>',
      '<td>' + esc(r.t.loebetid_mdr != null ? r.t.loebetid_mdr + " mdr." : "—") + '</td>',
      '<td class="tilbud-tekst">' + (inkl.length
        ? inkl.map(function (p) { return '<span class="postmaerke">' + esc(p) + '</span>'; }).join("")
        : (r.t.ikke_inkluderet || []).length
          ? '<span class="tom">intet inkluderet</span>'
          : '<span class="tom">intet oplyst</span>') + '</td>',
      '<td><span class="daekning' + lav + '"><span class="daekning__bar"><span class="daekning__fyld" style="width:' +
        Math.round(r.b.daekning * 100) + '%"></span></span><span class="daekning__tal">' +
        r.b.oplystAntal + '/' + r.b.posterAntal + '</span></span></td>',
      '<td class="spec-kilde"><a href="' + esc(r.t.kilde_url) + '" rel="nofollow noopener" target="_blank">' +
        esc(r.vaert || "kilde") + '</a><span class="spec-variant">' + esc(visDato(r.t.kilde_dato)) + '</span></td>',
      '</tr>'
    ].join("");
  }).join("\n");

  var maerkeFra = billigst != null ? " fra " + talDK(billigst) + " kr./md." : "";
  var maerkeAntal = " — " + biler.length + (biler.length === 1 ? " model" : " modeller");
  // 02-10-2026: antal tilbud forrest i titlen, populære modeller i beskrivelsen.
  var title = info && billigst != null ? titelDerPasser([
    "Lease en " + (KALDENAVN[maerke] || maerke) + "-varebil fra " + talDK(billigst) + " kr./md. — " + rader.length + " tilbud",
    maerke + " varebil leasing fra " + talDK(billigst) + " kr./md. — " + rader.length + " tilbud",
    maerke + " varebil leasing fra " + talDK(billigst) + " kr./md."
  ]) : titelDerPasser([
    billigst != null && rader.length > 1 ? maerke + " varebil leasing — " + rader.length + " tilbud" + maerkeFra : null,
    maerke + " varebil leasing til erhverv" + maerkeFra + maerkeAntal,
    maerke + " varebil leasing til erhverv" + maerkeFra,
    maerke + " varebil leasing" + maerkeFra,
    maerke + " varebil leasing til erhverv"
  ]);
  var topModeller = biler.slice().sort(function (a, b) { return (b.tilbud || []).length - (a.tilbud || []).length; })
    .slice(0, 3).map(function (b) { return b.model; });
  var desc = rader.length === 1 && billigst != null
    ? maerke + " " + biler[0].model + " på erhvervsleasing fra " + talDK(billigst) + " kr./md. ekskl. moms. " +
      "Se tilbuddet, mål og garanti, og få flere tilbud gratis."
    : "Sammenlign " + rader.length + " erhvervstilbud på " + biler.length + " " + (KALDENAVN[maerke] || maerke) +
             (biler.length === 1 ? " varevogn" : " varevogne") + " fra " + udbydere.length +
             (udbydere.length === 1 ? " udbyder" : " udbydere") +
             (biler.length > 1 ? ", bl.a. " + ogListe(topModeller) : "") +
             (billigst != null ? ". Fra " + talDK(billigst) + " kr./md. ekskl. moms" : "") +
             ". Se udbetaling, km og hvad der er inkluderet, og få tilbud gratis.";

  if (info && billigst != null) desc = "Lease en " + (KALDENAVN[maerke] || maerke) + "-varebil fra " + talDK(billigst) + " kr./md. uden moms. " +
    (rader.length === 1 ? "Se tilbuddet" : "Sammenlign " + rader.length + " tilbud") +
    ". Læs også, hvor bilerne bliver bygget, og find værksteder og forhandlere i Danmark.";
  if (info && desc.length > DESC_MAKS) desc = desc.replace(" i Danmark.", ".");
  var ov = maerkeOverblik(maerke, biler, data);
  var heroBil = info ? biler.filter(function (b) { return b.id === info.hero && b.billede; })[0] || null : null;
  var antalEl = biler.filter(function (b) { return b.drivmiddel === "el"; }).length;
  var m3l = biler.map(function (b) { return (b.lastrum || {}).volumen_m3; }).filter(function (v) { return v != null; });
  var faqSchema = ov.faq.length ? { "@type": "FAQPage", mainEntity: ov.faq.map(function (q) {
    return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } };
  }) } : null;
  var schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": maerke + " varebiler til erhvervsleasing",
    "numberOfItems": biler.length,
    "itemListElement": biler.map(function (b, i) {
      return { "@type": "ListItem", "position": i + 1, "name": maerke + " " + b.model,
               "url": BASE_URL + "/varebiler/" + slug(b.maerke) + "/" + slug(b.model) + "/" };
    })
  };

  return [
    hoved(title, beskrivelse(desc), BASE_URL + sti, samlSchema(schema, faqSchema, krummeSchema([["Forsiden", "/"], ["Varebiler", "/varebiler/"], [maerke, null]])),
      heroBil ? "/assets/img/varebiler/" + heroBil.id + "-del.jpg" : null),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li><a href="/varebiler/">Varebiler</a></li><li aria-current="page">' + esc(maerke) + '</li></ol></nav>',

    '<div class="bil-hero">',
    heroBil ? '  <div class="bil-hero__tekst">' : '',
    '  <p class="bil-maerke">' + esc(maerke) + '</p>',
    '  <h1>' + esc(maerke) + ' varebiler til erhvervsleasing</h1>',
    info && info.indledning ? '  <p class="bil-hero__manchet">' + esc(info.indledning.replace("sammenligne {tilbud} tilbud", rader.length === 1 ? "se tilbuddet" : "sammenligne {tilbud} tilbud").replace("{tilbud}", rader.length).replace("{fra}", talDK(billigst))) + '</p>' : '',
    '  <p class="bil-hero__manchet">' +
      (biler.length > 1 && m3l.length > 1
        ? esc(maerke) + ' har ' + biler.length + ' varebiler på siden, fra ' + kommaTal(Math.min.apply(null, m3l)) + ' til ' + kommaTal(Math.max.apply(null, m3l)) + ' m³ lastrum' +
          (antalEl ? ', heraf ' + antalEl + (antalEl === 1 ? ' elvarebil' : ' elvarebiler') : '') + '. '
        : '') +
      (info && info.indledning ? (rader.length === 1 ? 'Tilbuddet er fra ' : 'Tilbuddene er fra ') + esc(ogListe(udbydere)) : rader.length + ' tilbud fra ' + esc(ogListe(udbydere))) + '. Alle priser er uden moms, og ved hvert tal står kilden og den dato, vi hentede det.</p>',
    '  <dl class="noegletal">',
    '    <div><dt>Tilbud</dt><dd>' + rader.length + '</dd></div>',
    '    <div><dt>Modeller</dt><dd>' + biler.length + '</dd></div>',
    '    <div><dt>Fra pr. md.</dt><dd>' + talDK(billigst) + '</dd></div>',
    '    <div><dt>Oplyst</dt><dd>' + pct + '%</dd></div>',
    '  </dl>',
    maerkeSalgHTML(biler),
    heroBil ? '  </div><div class="bil-hero__billede"><img src="' + esc(heroBil.billede_stor || heroBil.billede) + '" alt="' + esc(navnMedType(heroBil)) +
      '" width="1280" height="720" loading="eager" fetchpriority="high" decoding="async"></div>' : '',
    '</div>',
    // Nyt fra mærket (05-10-2026): maerker.json -> nyheder [{over, tekst, sti, link}].
    // Samme nyhedsboks som på modelsiderne og /elvarebiler/.
    ((info && info.nyheder) || []).map(function (n) {
      return '<aside class="nyhedsboks"><p class="nyhedsboks__over">' + esc(n.over) + '</p>' +
        '<p>' + esc(n.tekst) + ' <a href="' + esc(n.sti) + '">' + esc(n.link) + ' →</a></p></aside>';
    }).join(''),
    '<nav class="sidenav" aria-label="På siden"><div class="sidenav__indre">' +
      '<a href="#modeller">Modeller</a>' + (biler.length > 1 ? '<a href="#stoerrelse">Størrelse</a>' : '') +
      '<a href="#udbydere">Udbydere</a>' + (biler.some(function (b) { return b.drivmiddel === "el"; }) ? '<a href="#el">El</a>' : '') +
      (info ? '<a href="#om">Om ' + esc(maerke) + '</a>' : '') +
      '<a href="#tilbud">Alle tilbud</a>' + (KOEB_NY ? '<a href="#koeb">Køb</a>' : '') + '<a href="#garanti">Garanti</a>' +
      (maerkeBrugtHTML(maerke) ? '<a href="#brugte">Brugte</a>' : '') + '<a href="#faq">Spørgsmål</a>' +
    '</div></nav>',

    '<section class="sektion" id="modeller">',
    '  <h2>Modeller</h2>',
    '  <ul class="bilkort-grid">' + modelKort + '</ul>',
    '</section>',

    ov.html,
    maerkeOmHTML(maerke, biler, info),
    maerkeUdbydereHTML(maerke, rader),
    maerkeElHTML(maerke, biler, data),
    KOEB_NY ? koeb().maerkeBlok(maerke, biler.concat((data._udenTilbud || []).filter(function (b) { return b.maerke === maerke; }))) : '',

    '<section class="sektion--kort" id="tilbud">',
    '  <h2>Alle ' + rader.length + ' tilbud på ' + esc(maerke) + '</h2>',
    '  <p class="sektion__manchet">Vi har sorteret tilbuddene efter den samlede pris pr. måned, som er månedsydelsen plus udbetalingen fordelt over løbetiden. Vi har ikke regnet løbetiderne om, så se på løbetiden, når du sammenligner.</p>',
    '  <div class="spec-oversigt-wrap">',
    '    <table class="spec-oversigt">',
    '      <thead><tr><th scope="col" class="spec-fast">Udbyder</th><th scope="col">Model</th>',
    '        <th scope="col">Annonceret</th><th scope="col">Udbetaling</th><th scope="col">Samlet pr. md.</th>',
    '        <th scope="col">Løbetid</th><th scope="col">Inkluderet</th><th scope="col">Oplyst</th>',
    '        <th scope="col">Kilde</th></tr></thead>',
    '      <tbody>' + tilbudRaekker + '</tbody>',
    '    </table>',
    '  </div>',
    '  <p class="kilde" style="margin-top:1rem">' + esc(maerke) + '-tilbuddene på siden oplyser tilsammen ' + pct +
      ' % af det, vi tjekker for: service, dæk, forsikring, ejerafgift og vejhjælp. Tallet viser, hvor færdige tilbuddene er, og ikke om priserne er gode.</p>',
    '</section>',

    maerkeIMarkedet(maerke, rader, alleTilbud(data)),

    (function () {
      // Modeller, hvis kampagne er udløbet, har stadig en side - link til den.
      var u = (data._udenTilbud || []).filter(function (b) { return b.maerke === maerke; });
      return u.length ? '<section class="sektion--kort"><h2>Uden aktuelle tilbud</h2><p class="maerkelinks">'
        + u.map(function (b) { return '<a href="' + modelSti(b) + '">' + esc(b.maerke + ' ' + b.model) + '</a>'; }).join('')
        + '</p></section>' : '';
    })(),
    maerkeGarantiHTML(maerke, biler),
    maerkeSammenlignHTML(maerke, biler, data),
    maerkeBrugtHTML(maerke),

    ov.faq.length ? '<section class="sektion--kort faq" id="faq"><h2>Spørgsmål om ' + esc(maerke) + ' varebiler</h2>' +
      ov.faq.map(function (q) { return '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join('') +
      '</section>' : '',

    ctaBlok(),

    '<div class="forbehold">',
    '  <h2>Om tallene</h2>',
    '  <p>Vi har hentet priserne fra forhandlernes og leasingselskabernes egne prislister og annoncer på de datoer, der står i tabellen. Priserne er vejledende og gælder med de vilkår, der står ved hvert tilbud. De tekniske mål kommer fra ' + esc(maerke) + '-prislister og gælder den udgave af bilen, der står på modelsiden.</p>',
    // 02-10-2026: forhandlere og leasingselskaber betaler et ens honorar pr. henvendelse,
    // så "ingen betaling fra leasingselskaberne" passede ikke længere.
    '  <p>Ingen kan betale sig til en bedre placering, og ' + esc(maerke) + ' og importøren betaler os ikke. Når vi formidler en henvendelse, betaler forhandleren eller leasingselskabet det samme beløb, uanset hvem det er. Se <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '</div>',

    '</main>',
    sidenavScript(),
    footer(),
    '</body></html>'
  ].join("\n");
}

// ── /udbydere/ og /udbydere/<udbyder>/ ───────────────────────────────────────

function udbyderData(data) {
  var rader = alleTilbud(data);
  var m = {};
  rader.forEach(function (r) {
    var n = r.t.udbyder;
    if (!m[n]) m[n] = { navn: n, sti: "/udbydere/" + slug(n) + "/", rader: [], oplyst: 0, poster: 0, vaerter: {} };
    var u = m[n];
    u.rader.push(r);
    u.oplyst += r.b.oplystAntal;
    u.poster += r.b.posterAntal;
    if (r.vaert) u.vaerter[r.vaert] = 1;
  });
  return Object.keys(m).map(function (k) {
    var u = m[k];
    u.pct = u.poster ? Math.round((u.oplyst / u.poster) * 100) : 0;
    u.billigst = u.rader.reduce(function (x, r) {
      return (r.samlet != null && (x == null || r.samlet < x)) ? r.samlet : x;
    }, null);
    u.loebetider = u.rader.map(function (r) { return r.t.loebetid_mdr; })
      .filter(function (v, i, a) { return v != null && a.indexOf(v) === i; })
      .sort(function (a, b) { return a - b; });
    // Hvilke poster inkluderer de nogensinde?
    var inkl = {};
    u.rader.forEach(function (r) { (r.t.inkluderet || []).forEach(function (p) { inkl[p] = (inkl[p] || 0) + 1; }); });
    u.inkluderer = Object.keys(inkl).map(function (p) { return { post: POST_ORD[p] || p, antal: inkl[p] }; });
    return u;
  }).sort(function (a, b) { return b.pct - a.pct || b.rader.length - a.rader.length; });
}

function udbydereIndexHTML(data) {
  if (SIDE_NY.udbyder && !data._gammel) return sideNy().udbydereIndex(data);
  var ud = udbyderData(data);
  var antal = ud.reduce(function (s, u) { return s + u.rader.length; }, 0);

  var kort = ud.map(function (u) {
    var lav = u.pct < 60 ? " daekning--lav" : "";
    return [
      '<li class="udbyder">',
      '  <p class="udbyder__navn"><a href="' + u.sti + '">' + esc(u.navn) + '</a></p>',
      '  <p class="udbyder__tal">' + u.rader.length + (u.rader.length === 1 ? ' tilbud' : ' tilbud') +
        (u.billigst != null ? ' · fra ' + talDK(u.billigst) + ' kr./md. samlet' : '') + '</p>',
      '  <div class="udbyder__daekning"><span class="daekning' + lav + '">',
      '    <span class="daekning__bar"><span class="daekning__fyld" style="width:' + u.pct + '%"></span></span>',
      '    <span class="daekning__tal">oplyser ' + u.pct + '%</span>',
      '  </span></div>',
      '</li>'
    ].join("\n");
  }).join("\n");

  var navne = ud.slice().sort(function (a, b) { return b.rader.length - a.rader.length; }).map(function (u) { return u.navn; });
  var title = titel("Varebil leasingselskaber — " + navne.slice(0, 2).join(", ") + " m.fl.");
  var desc = "De " + ud.length + " leasingselskaber vi har indsamlet " + antal + " tilbud fra, " +
             "rangeret efter hvor meget de oplyser om service, dæk, forsikring, ejerafgift og vejhjælp. " +
             "Ikke en vurdering af priserne — af hvor færdige tilbuddene er.";

  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/udbydere/",
          samlSchema(krummeSchema([
            ["Forsiden", "/"],
            ["Udbydere", null]
          ]), {
            "@type": "CollectionPage",
            name: title,
            description: desc,
            url: BASE_URL + "/udbydere/"
          })),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Udbydere</li></ol></nav>',
    '<div class="bil-hero">',
    '  <p class="bil-maerke">' + ud.length + ' udbydere · ' + antal + ' tilbud</p>',
    '  <h1>Hvad leasingselskaberne oplyser</h1>',
    '  <p class="bil-hero__manchet">Et leasingtilbud kan være billigt og ufuldstændigt på samme tid. Her er de udbydere vi har indsamlet tilbud fra, rangeret efter hvor stor en del af de fem driftsposter de forholder sig til. Det er ikke en vurdering af deres priser eller af deres selskaber — det er et mål for, hvor meget du selv skal grave, før du kan regne den endelige pris ud.</p>',
    '</div>',
    '<section class="sektion"><ul class="udbydere">' + kort + '</ul></section>',
    '<section class="sektion--kort">',
    '  <h2>Sådan er tallet regnet</h2>',
    '  <p>De fem poster er service og reparation, dæk, forsikring, grøn ejerafgift og vejhjælp. For hvert tilbud tæller vi, hvor mange af dem udbyderen tager stilling til — uanset om svaret er “inkluderet” eller “ikke inkluderet”. Begge er oplysninger. En post udbyderen slet ikke nævner, tæller som manglende.</p>',
    '  <p>Procenten er summen over alle udbyderens tilbud på siden. Et selskab med få tilbud får derfor et mere tilfældigt tal end et med mange, og tallet siger kun noget om de tilbud, vi har indsamlet — ikke om alt hvad selskabet sender ud.</p>',
    '</section>',
    ctaBlok(),
    '<div class="forbehold">',
    '  <h2>Om siden</h2>',
    // 07-10-2026: sætningen "Vi modtager ikke provision, henvisningshonorarer ..." modsagde
    // honoraret pr. henvendelse. Nu samme ordlyd som på de enkelte udbydersider.
    '  <p>Ingen forhandler eller leasingselskab kan betale for en placering i sammenligningen. Rækkefølgen er beregnet ud fra oplysningsgraden og kan ikke købes. Når vi henter tilbud hjem for dig, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til, et honorar. Alle betaler det samme beløb. <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '</div>',
    '</main>',
    footer(),
    '</body></html>'
  ].join("\n");
}

// Dansk ejefald af et navn: "Ayvens'", "Leasing.dk's", "Toyotas".
function ejefald(n) {
  if (/\.[a-z]{2,3}$/i.test(n)) return n + "'s";
  if (/[sxz]$/i.test(n)) return n + "'";
  return n + "s";
}

function udbyderSideHTML(u, data) {
  if (SIDE_NY.udbyder && !data._gammel) return sideNy().udbyder(u, data);
  var raekker = u.rader.slice().sort(function (a, b) {
    if (a.samlet == null) return 1;
    if (b.samlet == null) return -1;
    return a.samlet - b.samlet;
  }).map(function (r) {
    var inkl = (r.t.inkluderet || []).map(function (p) { return POST_ORD[p] || p; });
    var ikke = (r.t.ikke_inkluderet || []).map(function (p) { return POST_ORD[p] || p; });
    var lav = r.b.daekning < 0.6 ? " daekning--lav" : "";
    return [
      '<tr>',
      '<th scope="row" class="tilbud-model"><a href="' + r.sti + '">' + esc(r.navn) + '</a>',
      r.t.variant ? '<span class="spec-variant">' + esc(r.t.variant) + '</span>' : '',
      '</th>',
      '<td>' + esc(r.t.maanedspris != null ? talDK(r.t.maanedspris) + " kr." : "—") + '</td>',
      '<td>' + esc(r.t.foerstegangsydelse != null ? talDK(r.t.foerstegangsydelse) + " kr." : "—") + '</td>',
      '<td>' + esc(r.samlet != null ? talDK(r.samlet) + " kr." : "—") + '</td>',
      '<td>' + esc(r.t.loebetid_mdr != null ? r.t.loebetid_mdr + " mdr." : "—") + '</td>',
      '<td>' + esc(r.t.km_pr_aar != null ? talDK(r.t.km_pr_aar) : (r.t.km_fri ? "fri" : "—")) + '</td>',
      '<td class="tilbud-tekst">' + (inkl.length
        ? inkl.map(function (p) { return '<span class="postmaerke">' + esc(p) + '</span>'; }).join("")
        : '<span class="tom">intet</span>') + '</td>',
      '<td class="tilbud-tekst">' + (ikke.length ? esc(ikke.join(", ")) : '<span class="tom">—</span>') + '</td>',
      '<td><span class="daekning' + lav + '"><span class="daekning__bar"><span class="daekning__fyld" style="width:' +
        Math.round(r.b.daekning * 100) + '%"></span></span><span class="daekning__tal">' +
        r.b.oplystAntal + '/' + r.b.posterAntal + '</span></span></td>',
      '<td class="spec-kilde"><a href="' + esc(r.t.kilde_url) + '" rel="nofollow noopener" target="_blank">kilde</a>' +
        '<span class="spec-variant">' + esc(r.t.kilde_dato || "") + '</span></td>',
      '</tr>'
    ].filter(function (l) { return l !== ''; }).join("");
  }).join("\n");

  var modeller = u.rader.map(function (r) { return r.navn; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();

  var inklTekst = u.inkluderer.length
    ? (u.rader.length === 1
        ? 'I det ene tilbud, vi har indsamlet, har ' + u.navn + ' ' + ogListe(u.inkluderer.map(function (x) { return x.post; })) + ' med.'
        : 'I de ' + u.rader.length + ' tilbud, vi har indsamlet, har ' + u.navn + ' ' +
          ogListe(u.inkluderer.map(function (x) { return x.post + ' med i ' + x.antal; })) + '.')
    : 'I de tilbud, vi har indsamlet fra ' + u.navn + ', dækker ydelsen kun bilen. Ydelsen dækker bilen, og service, dæk, forsikring, ejerafgift og vejhjælp skal lægges oveni.';

  var fraAnnonceret = u.rader.reduce(function (x, r) {
    return (r.t.maanedspris != null && (x == null || r.t.maanedspris < x)) ? r.t.maanedspris : x;
  }, null);
  var udbFra = fraAnnonceret != null ? " fra " + talDK(fraAnnonceret) + " kr./md." : "";
  var udbAntal = u.rader.length + " tilbud";
  var title = titelDerPasser([
    u.navn + " leasing af varebil — " + udbAntal + udbFra,
    u.navn + " varebil leasing — " + udbAntal + udbFra,
    u.navn + " leasing af varebil" + udbFra,
    u.navn + " varebil leasing" + udbFra,
    u.navn + " leasing af varebil — " + udbAntal,
    u.navn + " leasing af varebil"
  ]);
  var desc = u.navn + " erhvervsleasing af varebiler: " + ogListe(modeller.slice(0, 3)) + (modeller.length > 3 ? " m.fl." : "")
    + (fraAnnonceret != null ? " fra " + talDK(fraAnnonceret) + " kr./md." : "") + " Se hvad der følger med, og hvad bilen koster andre steder.";

  // Samme model hos andre udbydere: billigste andet tilbud, målt på samlet pris pr. md.
  var alleR = alleTilbud(data);
  var andre = modeller.map(function (navn) {
    var mine = u.rader.filter(function (r) { return r.navn === navn && r.samlet != null; })
      .sort(function (a, b) { return a.samlet - b.samlet; })[0];
    var bedst = alleR.filter(function (r) { return r.navn === navn && r.t.udbyder !== u.navn && r.samlet != null; })
      .sort(function (a, b) { return a.samlet - b.samlet; })[0];
    return { navn: navn, mine: mine, bedst: bedst, sti: (mine || bedst || {}).sti };
  }).filter(function (x) { return x.mine; });
  var andreHTML = andre.length ? [
    '<section class="sektion">',
    '  <h2>Samme bil hos andre udbydere</h2>',
    '  <p class="sektion__manchet">Hvad koster ' + esc(ejefald(u.navn)) + ' billigste tilbud på hver model, sammenlignet med det billigste andre steder? Vi sammenligner den samlede pris pr. måned, altså månedsydelsen plus udbetalingen fordelt over løbetiden. Løbetid og indhold er ikke nødvendigvis ens, så se detaljerne på modelsiden.</p>',
    '  <div class="tilbud-tabel-wrap"><table class="tilbud-tabel">',
    '  <thead><tr><th>Model</th><th>' + esc(u.navn) + '</th><th>Billigste andet sted</th><th>Forskel pr. md.</th></tr></thead><tbody>',
    andre.map(function (x) {
      var d = x.bedst ? Math.round(x.mine.samlet - x.bedst.samlet) : null;
      return '<tr><th scope="row"><a href="' + x.sti + '#tilbud">' + esc(x.navn) + '</a></th>'
        + '<td class="tal">' + talDK(Math.round(x.mine.samlet)) + ' kr.</td>'
        + '<td>' + (x.bedst ? talDK(Math.round(x.bedst.samlet)) + ' kr. <span class="udbyder-vilkaar">' + esc(x.bedst.t.udbyder) + '</span>' : '<span class="tom">Ingen andre på siden</span>') + '</td>'
        + '<td class="tal">' + (d == null ? '—' : d === 0 ? 'samme' : (d < 0 ? '<strong>' + talDK(-d) + ' kr. billigere</strong>' : talDK(d) + ' kr. dyrere')) + '</td></tr>';
    }).join(''),
    '  </tbody></table></div>',
    '</section>'
  ].join('\n') : '';

  // Spørgsmål, folk stiller om udbyderen - besvaret ud af tallene på siden.
  var inklAntal = {};
  u.rader.forEach(function (r) { (r.t.inkluderet || []).forEach(function (p) { inklAntal[p] = (inklAntal[p] || 0) + 1; }); });
  var service = inklAntal.service_reparation || 0;
  var faq = [
    ["Hvilke varebiler kan man lease hos " + u.navn + "?",
     "På Gulplade.dk har vi " + u.rader.length + " tilbud fra " + u.navn + " på " + modeller.length + (modeller.length === 1 ? " model" : " modeller") + ": " + ogListe(modeller) + ". Listen gælder de tilbud, " + u.navn + " selv har offentliggjort, og som vi har indsamlet."],
    ["Hvad koster det at lease en varebil hos " + u.navn + "?",
     fraAnnonceret != null ? "Det billigste tilbud, vi har fra " + u.navn + ", koster " + talDK(fraAnnonceret) + " kr. om måneden ekskl. moms." + (u.billigst != null ? " Når udbetalingen fordeles over løbetiden, bliver det " + talDK(Math.round(u.billigst)) + " kr. om måneden." : "") + " Priserne gælder de oplyste vilkår og kan ændre sig." : "Prisen fremgår af hvert tilbud på siden."],
    ["Er service inkluderet i " + ejefald(u.navn) + " tilbud?",
     service ? "I " + service + " af " + u.rader.length + " tilbud skriver " + u.navn + ", at service og reparation er med i ydelsen. Ved hvert tilbud kan du se, hvad der ellers er inkluderet." : u.navn + " skriver ikke i nogen af de tilbud, vi har indsamlet, at service og reparation er med i ydelsen. Spørg selskabet, før du skriver under."],
    ["Er Gulplade.dk en del af " + u.navn + "?",
     "Nej. Gulplade.dk er en uafhængig sammenligning og er ikke tilknyttet " + u.navn + ". Priserne er hentet fra " + ejefald(u.navn) + " egne offentlige sider, og " + u.navn + " kan ikke købe en bedre placering."]
  ];
  var faqHTML = '<section class="sektion--kort faq"><h2>Spørgsmål om ' + esc(u.navn) + '</h2>'
    + faq.map(function (q) { return '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join('')
    + '</section>';
  var faqSchema = { "@type": "FAQPage", mainEntity: faq.map(function (q) {
    return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } };
  }) };

  return [
    hoved(title, beskrivelse(desc), BASE_URL + u.sti,
          samlSchema(krummeSchema([
            ["Forsiden", "/"],
            ["Udbydere", "/udbydere/"],
            [u.navn, null]
          ]), faqSchema)),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li><a href="/udbydere/">Udbydere</a></li><li aria-current="page">' + esc(u.navn) + '</li></ol></nav>',

    '<div class="bil-hero">',
    '  <p class="bil-maerke">Leasingudbyder · uafhængig gennemgang</p>',
    '  <h1>' + esc(u.navn) + ' leasing af varebiler</h1>',
    '  <p class="bil-hero__manchet">' + esc(inklTekst) + '</p>',
    '  <dl class="noegletal">',
    '    <div><dt>Tilbud</dt><dd>' + u.rader.length + '</dd></div>',
    '    <div><dt>Modeller</dt><dd>' + modeller.length + '</dd></div>',
    u.billigst != null ? '    <div><dt>Fra pr. md.</dt><dd>' + talDK(u.billigst) + '</dd></div>' : '',
    '    <div><dt>Oplyser</dt><dd>' + u.pct + '%</dd></div>',
    u.loebetider.length ? '    <div><dt>Løbetider</dt><dd>' + esc(u.loebetider.join("/")) + '</dd></div>' : '',
    '  </dl>',
    '</div>',

    '<section class="sektion">',
    '  <h2>Alle ' + u.rader.length + (u.rader.length === 1 ? ' tilbud' : ' tilbud') + ' fra ' + esc(u.navn) + '</h2>',
    '  <p class="sektion__manchet">Sorteret efter samlet pris pr. måned. Kolonnen <strong>Inkluderet</strong> viser, hvad ydelsen dækker. Kolonnen <strong>Ikke inkluderet</strong> viser, hvad forhandleren eller leasingselskabet udtrykkeligt har skrevet, at ydelsen ikke dækker. Begge dele tæller med i oplysningsgraden.</p>',
    '  <div class="spec-oversigt-wrap">',
    '    <table class="spec-oversigt">',
    '      <thead><tr><th scope="col" class="spec-fast">Model</th><th scope="col">Annonceret</th>',
    '        <th scope="col">Udbetaling</th><th scope="col">Samlet pr. md.</th><th scope="col">Løbetid</th>',
    '        <th scope="col">Km/år</th><th scope="col">Inkluderet</th><th scope="col">Ikke inkluderet</th>',
    '        <th scope="col">Oplyst</th><th scope="col">Kilde</th></tr></thead>',
    '      <tbody>' + raekker + '</tbody>',
    '    </table>',
    '  </div>',
    '</section>',

    andreHTML,

    faqHTML,

    '<section class="sektion--kort">',
    '  <h2>Hvad tallet ikke siger</h2>',
    '  <p>Oplysningsgraden på ' + u.pct + ' % gælder kun ' +
      (u.rader.length === 1 ? 'det ene tilbud' : 'de ' + u.rader.length + ' tilbud') + ', vi har indsamlet fra ' + esc(u.navn) +
      '. Den siger ikke noget om selskabet som helhed. Et tilbud, du selv får tilsendt, kan være langt mere detaljeret end det, der står på en offentlig prisside. Derfor tilbyder vi at læse dit igennem.</p>',
    '  <p>Tallet siger heller ikke noget om, hvor gode priserne er, om restværdien er sat fornuftigt, eller hvad det koster at aflevere bilen. Det er de forhold, en offentlig prisside aldrig oplyser, og som afgør regningen.</p>',
    '  <p style="margin-top:1.5rem"><a href="/udbydere/" class="knap knap--sekundaer">Sammenlign alle udbydere</a></p>',
    '</section>',

    ctaBlok(),

    '<div class="forbehold">',
    '  <h2>Om siden</h2>',
    '  <p>Vi har hentet priserne fra ' + esc(ejefald(u.navn)) + ' egne offentlige sider. Datoerne står i tabellen, og priserne er vejledende. Vi har ikke kontaktet selskabet, og siden er ikke godkendt af dem.</p>',
    '  <p>Gulplade.dk er ikke tilknyttet ' + esc(u.navn) + ', og ingen forhandler eller leasingselskab kan betale for en placering i sammenligningen. Når vi henter tilbud hjem for dig, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til, et honorar. Alle betaler det samme beløb. <a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>',
    '</div>',

    '</main>',
    footer(),
    '</body></html>'
  ].filter(function (l) { return l !== ''; }).join("\n");
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(DATA_JSON)) {
    console.error("Fejl: Kan ikke finde varebiler.json i " + __dirname);
    process.exit(1);
  }

  var data = JSON.parse(fs.readFileSync(DATA_JSON, "utf8"));
  var biler = data.varebiler || [];
  // Købssiden afløser prisguiden (301 i _redirects, når den går i produktion).
  if (KOEB_NY) GUIDER = GUIDER.filter(function (g) { return g.slug !== "hvad-koster-en-varebil"; });

  // Udløbne kampagner vises aldrig. gyldig_til er sidste gyldige dag; dagen
  // efter er tilbuddet væk fra siden, også selv om ingen har nået at rette
  // datafilen. GULPLADE_IDAG kan sættes for at prøve en dato af.
  var idag = process.env.GULPLADE_IDAG || new Date().toISOString().slice(0, 10);
  biler.forEach(function (b) {
    var foer = (b.tilbud || []).length;
    b.tilbud = (b.tilbud || []).filter(function (t) { return !t.gyldig_til || t.gyldig_til >= idag; });
    if (b.tilbud.length < foer) console.log("UDLØBET: " + (foer - b.tilbud.length) + " tilbud på " + b.maerke + " " + b.model + (b.tilbud.length ? "" : " — modellen har ingen tilbud tilbage"));
  });
  // Modeller uden aktuelle tilbud er ude af lister, guider og sammenligninger
  // (de regner alle med mindst ét tilbud), men får stadig deres modelside.
  var udenTilbud = biler.filter(function (b) { return !b.tilbud.length; });
  data.varebiler = biler = biler.filter(function (b) { return b.tilbud.length; });
  if (!process.env.GULPLADE_IDAG) gemPrisbillede(biler, data, idag);

  // Skal saettes foer foerste side bygges: knappen bruges paa modelsider og
  // guider, som skrives laenge foer /faa-tilbud/.
  LEAD_FORM = ((data.forudsaetninger || {}).leadformular || "").trim();

  console.log("Fandt " + biler.length + " modeller");

  var advarsler = 0;
  mkdir(UD_DIR);

  biler.forEach(function (bil) {
    if (!bil.maerke || !bil.model) { console.warn("Springer over model uden maerke/model"); return; }
    // En model uden aktuelle tilbud beholder sin side (målene, udstyret og
    // garantien gælder stadig), men uden pris. Ellers ville en udløbet kampagne
    // blive liggende på disken fra sidste bygning.

    bil.tilbud.forEach(function (t) {
      if (!t.kilde_url || !t.kilde_dato) {
        console.warn("ADVARSEL: " + bil.model + " / " + t.udbyder + " mangler kilde_url eller kilde_dato");
        advarsler++;
      }
    });

    var dir = path.join(UD_DIR, slug(bil.maerke), slug(bil.model));
    mkdir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), modelSideHTML(bil, data), "utf8");
  });

  udenTilbud.forEach(function (bil) {
    var dir = path.join(UD_DIR, slug(bil.maerke), slug(bil.model));
    mkdir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), modelSideHTML(bil, data), "utf8");
    console.log("Modelside uden aktuelle tilbud: " + bil.maerke + " " + bil.model);
  });
  data._udenTilbud = udenTilbud;

  fs.writeFileSync(path.join(UD_DIR, "index.html"), oversigtHTML(data), "utf8");
  fs.writeFileSync(path.join(__dirname, "index.html"), forsideHTML(data), "utf8");
  // ── Landingssider ──
  var bt = path.join(__dirname, "bedste-tilbud");
  mkdir(bt);
  fs.writeFileSync(path.join(bt, "index.html"), bedsteTilbudHTML(data), "utf8");

  // /alle-tilbud/ findes kun sammen med den nye forside. Uden flaget fjernes en gammel
  // mappe, så et produktionsbyg ikke tager en preview-side med.
  var atDir = path.join(__dirname, "alle-tilbud");
  if (FORSIDE_NY) {
    fs.mkdirSync(atDir, { recursive: true });
    fs.writeFileSync(path.join(atDir, "index.html"), alleTilbudSideHTML(data), "utf8");
  } else {
    fs.rmSync(atDir, { recursive: true, force: true });
  }

  // Leasingberegneren
  var bDir = path.join(__dirname, "leasingberegner");
  mkdir(bDir);
  fs.writeFileSync(path.join(bDir, "index.html"), require("./beregner.js")(data, {
    alleTilbud: alleTilbud, stoerrelse: stoerrelse, titel: titel, beskrivelse: beskrivelse, BASE_URL: BASE_URL,
    hoved: hoved, header: header, footer: footer, esc: esc
  }), "utf8");

  // Grøn omstilling: regler og elberegner (02-10-2026).
  var gDir = path.join(__dirname, "groen-omstilling");
  mkdir(gDir);
  fs.writeFileSync(path.join(gDir, "index.html"), require("./groen.js")(data, {
    alleTilbud: alleTilbud, stoerrelse: stoerrelse, titel: titel, beskrivelse: beskrivelse, BASE_URL: BASE_URL,
    hoved: hoved, header: header, footer: footer, esc: esc, talDK: talDK
  }, require("./groen-tekst.js")), "utf8");
  // Ladetidsberegneren (02-10-2026).
  mkdir(path.join(gDir, "ladetid"));
  fs.writeFileSync(path.join(gDir, "ladetid", "index.html"), require("./ladetid.js")(data, {
    stoerrelse: stoerrelse, titel: titel, beskrivelse: beskrivelse, BASE_URL: BASE_URL,
    hoved: hoved, header: header, footer: footer, esc: esc, talDK: talDK
  }, { faq: [
    ["Hvor meget mere bruger en elvarebil med trailer?", "Det afhænger af trailerens vægt og form og af farten, og producenterne oplyser det sjældent. Beregneren regner med 50 % mere pr. 1.000 kg trailer som udgangspunkt — ret tallet til jeres egne erfaringer."],
    ["Kan en elvarebil trække en trailer?", "Mange kan, men trækvægten varierer fra 750 kg til over 2 tons, og for enkelte modeller oplyser producenten ingen. Beregneren advarer, hvis traileren er tungere, end bilen må trække."],
    ["Tæller tiden ved laderen som arbejdstid?", "Det afhænger af ansættelsesforholdet og en eventuel overenskomst. Vi har ikke fundet en myndighed, der har taget stilling til det, så aftal det med medarbejderen."],
    ["Hvad betyder det at have en lader hjemme?", "At bilen starter dagen med fuldt batteri. Rækker det til dagens kørsel, er den ekstra tid kun at sætte stikket i. Uden lader hjemme eller på arbejdspladsen skal al strøm lynlades undervejs."]
  ] }), "utf8");

  // Køb ny varebil (preview). Uden flaget fjernes mappen, så et produktionsbyg
  // ikke tager preview-siden med; med flaget fjernes den gamle prisguide.
  var kDir = path.join(__dirname, "koeb-ny-varebil");
  var gammelPrisguide = path.join(bt, "hvad-koster-en-varebil");
  if (KOEB_NY) {
    mkdir(kDir);
    fs.writeFileSync(path.join(kDir, "index.html"), koeb().side(data), "utf8");
    // Bilsiderne og beregnerens data pr. bil (06-10-2026).
    var kAlle = (data.varebiler || []).concat(data._udenTilbud || []), kAntal = 0;
    mkdir(path.join(kDir, "data"));
    kAlle.forEach(function (b) {
      var side = koeb().bilSide(b, data);
      if (!side) return;
      var d = path.join(kDir, slug(b.maerke), slug(b.model));
      mkdir(d);
      fs.writeFileSync(path.join(d, "index.html"), side, "utf8");
      fs.writeFileSync(path.join(kDir, "data", b.id + ".js"), koeb().dataJS(b, data), "utf8");
      kAntal++;
    });
    console.log("OK: " + kAntal + " bilsider under /koeb-ny-varebil/ (preview)");
    fs.rmSync(gammelPrisguide, { recursive: true, force: true });
    console.log("OK: /koeb-ny-varebil/ (preview)");
  } else {
    fs.rmSync(kDir, { recursive: true, force: true });
  }

  // Guidesider. En guide uden kvalificerede tilbud skrives ikke.
  var alle = alleTilbud(data);
  var antalGuider = 0;
  GUIDER.forEach(function (g) {
    if (!guideRaekker(g, alle).length) { console.log("SPRINGER OVER (ingen tilbud): " + g.slug); return; }
    var dir = path.join(bt, g.slug);
    mkdir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), guideSideHTML(g, data), "utf8");
    antalGuider++;
  });

  // GULPLADE_DUMP_GUIDER=1 skriver guidernes nuværende tekster og tal til
  // tekst-gennemgang/guider.json, så teksterne kan skrives om ét sted (04-10-2026).
  if (process.env.GULPLADE_DUMP_GUIDER === "1") {
    var dump = GUIDER.map(function (g0) {
      var med = guideRaekker(g0, alle); if (!med.length) return null;
      var g = g0.tilpas ? Object.assign({}, g0, g0.tilpas(med)) : g0;
      var fra = med.reduce(function (m, x) { var p = x.r.t.maanedspris; return p != null && (m == null || p < m) ? p : m; }, null);
      var t = function (s) { return String(s || "").replace(/%fra%/g, fra != null ? talDK(fra) : "").replace(/%n%/g, String(med.length)); };
      return { slug: g.slug, gruppe: guideGruppe(g.slug), h1: g.h1, title: t(g.title), desc: t(g.desc), kort: g.kort, svar: g.svar,
        intro: g.intro, kriterium: g.kriterium, antal: med.length, enhed: g.unikModel ? "modeller" : "tilbud", fra_kr_md: fra,
        top3: med.slice(0, 3).map(function (x) { return x.r.bil.maerke + " " + x.r.bil.model + ": " + g.vis(x.v, x.r); }) };
    }).filter(Boolean);
    fs.writeFileSync(path.join(__dirname, "tekst-gennemgang", "guider.json"), JSON.stringify(dump, null, 1), "utf8");
    console.log("OK: tekst-gennemgang/guider.json (" + dump.length + " guider)");
  }

  // GULPLADE_DUMP_KANDIDATER=1 skriver de modeller, der kan vælges i hver guide,
  // med billigste pris og de vigtigste mål. Grundlaget for bedste-valg.json (07-10-2026).
  if (process.env.GULPLADE_DUMP_KANDIDATER === "1") {
    var kand = {};
    GUIDER.forEach(function (g0) {
      var med = guideRaekker(g0, alle); if (!med.length) return;
      var m = {};
      med.forEach(function (x) {
        var id = x.r.bil.id, b = x.r.bil;
        if (!m[id]) m[id] = { id: id, navn: x.r.navn, maal: g0.vis(x.v, x.r), samlet: x.r.samlet, drivmiddel: b.drivmiddel,
          karrosseri: b.karrosseri, str: stoerrelse(b), nyttelast: b.nyttelast_kg, traek: b.anhaengervaegt_kg,
          m3: (b.lastrum || {}).volumen_m3, laengde_lastrum: (b.lastrum || {}).laengde_mm, hoejde: (b.udvendig || {}).hoejde_mm,
          rk: b.raekkevidde_km, tilbud: 0 };
        m[id].tilbud++;
        if (x.r.samlet != null && (m[id].samlet == null || x.r.samlet < m[id].samlet)) m[id].samlet = x.r.samlet;
      });
      var gt0 = GUIDE_TEKSTER[g0.slug] || {};
      kand[g0.slug] = { h1: gt0.h1 || g0.h1, title: gt0.title || g0.title, desc: gt0.desc || g0.desc, intro: gt0.intro || g0.intro, svar: gt0.svar || g0.svar, kort: g0.kort, note: g0.note, faq: g0.faq, kriterium: g0.kriterium, modeller: Object.keys(m).map(function (k) { return m[k]; }) };
    });
    fs.writeFileSync(path.join(__dirname, "tekst-gennemgang", "kandidater.json"), JSON.stringify(kand, null, 1), "utf8");
    console.log("OK: tekst-gennemgang/kandidater.json (" + Object.keys(kand).length + " guider)");
  }

  // Aarets samleside - vinderen i hver guide.
  var aDir = path.join(__dirname, aaretsSti(data).slice(1));
  mkdir(aDir);
  fs.writeFileSync(path.join(aDir, "index.html"), aaretsHTML(data), "utf8");

  var maerker = {};
  biler.forEach(function (b) { (maerker[b.maerke] = maerker[b.maerke] || []).push(b); });
  var antalMaerker = 0;
  Object.keys(maerker).forEach(function (m) {
    var dir = path.join(UD_DIR, slug(m));
    mkdir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), maerkeSideHTML(m, maerker[m], data), "utf8");
    antalMaerker++;
  });

  var udDir = path.join(__dirname, "udbydere");
  mkdir(udDir);
  fs.writeFileSync(path.join(udDir, "index.html"), udbydereIndexHTML(data), "utf8");
  var udb = udbyderData(data);
  // En udbyder uden aktuelle tilbud har ingen side - fjern den gamle.
  var aktuelleUdb = udb.map(function (u) { return slug(u.navn); });
  fs.readdirSync(udDir, { withFileTypes: true }).forEach(function (e) {
    if (e.isDirectory() && aktuelleUdb.indexOf(e.name) < 0) {
      fs.rmSync(path.join(udDir, e.name), { recursive: true, force: true });
      console.log("Fjernet udbyderside uden aktuelle tilbud: /udbydere/" + e.name + "/");
    }
  });
  udb.forEach(function (u) {
    var dir = path.join(udDir, slug(u.navn));
    mkdir(dir);
    fs.writeFileSync(path.join(dir, "index.html"), udbyderSideHTML(u, data), "utf8");
  });

  if (UDSTYR) {
    var usDir = path.join(__dirname, "udstyr");
    mkdir(usDir);
    fs.writeFileSync(path.join(usDir, "index.html"), udstyrIndexHTML(data), "utf8");
    UDSTYR.poster.forEach(function (p) {
      var dir = path.join(usDir, slug(p.navn));
      mkdir(dir);
      fs.writeFileSync(path.join(dir, "index.html"), udstyrPostHTML(p, data), "utf8");
    });
    console.log("OK: /udstyr/ + " + UDSTYR.poster.length + " udstyrssider");
  }

  var smDir = path.join(__dirname, "sammenlign");
  mkdir(smDir);
  fs.writeFileSync(path.join(smDir, "index.html"), sammenlignIndexHTML(data), "utf8");
  // Parrene følger dataene. Et par, der ikke længere dannes, må ikke blive
  // liggende som en side uden links og uden plads i sitemappet.
  var aktuellePar = sammenlignPar(data).map(function (sp) { return sp.slug; });
  fs.readdirSync(smDir, { withFileTypes: true }).forEach(function (e) {
    if (e.isDirectory() && aktuellePar.indexOf(e.name) < 0) {
      fs.rmSync(path.join(smDir, e.name), { recursive: true, force: true });
      console.log("Fjernet forældet sammenligning: /sammenlign/" + e.name + "/");
    }
  });
  sammenlignPar(data).forEach(function (sp) {
    var d = path.join(smDir, sp.slug);
    mkdir(d);
    fs.writeFileSync(path.join(d, "index.html"), sammenlignSideHTML(sp, data), "utf8");
  });
  console.log("OK: /sammenlign/ + " + sammenlignPar(data).length + " sammenligninger");

  if (ELBIL && Object.keys(ELBIL.modeller).length) {
    var eDir = path.join(__dirname, "elvarebiler");
    mkdir(eDir);
    fs.writeFileSync(path.join(eDir, "index.html"), elIndexHTML(data), "utf8");
    console.log("OK: /elvarebiler/ (" + Object.keys(ELBIL.modeller).length + " modeller)");
  }
  if (GARANTI && Object.keys(GARANTI.modeller).length) {
    var gDir = path.join(__dirname, "garanti");
    mkdir(gDir);
    fs.writeFileSync(path.join(gDir, "index.html"), garantiIndexHTML(data), "utf8");
    console.log("OK: /garanti/ (" + Object.keys(GARANTI.modeller).length + " modeller)");
  }

  fs.writeFileSync(path.join(__dirname, "sitemap.xml"), genererSitemap(data), "utf8");
  fs.writeFileSync(path.join(__dirname, "robots.txt"), genererRobots(), "utf8");
  fs.writeFileSync(path.join(__dirname, "llms.txt"), genererLlms(data), "utf8");

  console.log("OK: forside + " + biler.length + " modelsider + oversigt");
  console.log("OK: bedste-tilbud + " + antalGuider + " guider + " + antalMaerker + " maerkesider + " + (udb.length + 1) + " udbydersider");
  var ft = path.join(__dirname, "faa-tilbud");
  mkdir(ft);
  fs.writeFileSync(path.join(ft, "index.html"), faaTilbudHTML(data), "utf8");
  console.log("OK: /faa-tilbud/" + (LEAD_FORM ? "" : "   (ingen formular sat — knappen er en mailto)"));
  var tt = path.join(__dirname, "tilbudstjek", "tak");
  mkdir(tt);
  fs.writeFileSync(path.join(tt, "index.html"), tjekTakHTML(), "utf8");
  console.log("OK: /tilbudstjek/tak/");
  var kt = path.join(__dirname, "kontakt");
  mkdir(kt);
  fs.writeFileSync(path.join(kt, "index.html"), kontaktHTML(data), "utf8");
  console.log("OK: /kontakt/   (mangler virksomhedsnavn, adresse og CVR — skal skrives ind)");
  if (process.env.GULPLADE_PRESSE !== "0") {  // i produktion fra 04-10-2026
    var pr = path.join(__dirname, "presse");
    mkdir(pr);
    fs.writeFileSync(path.join(pr, "index.html"), presseHTML(data), "utf8");
    console.log("OK: /presse/");
  }
  var pv = path.join(__dirname, "privatliv");
  mkdir(pv);
  fs.writeFileSync(path.join(pv, "index.html"), privatlivHTML(data), "utf8");
  console.log("OK: /privatliv/  (mangler dataansvarlig med CVR og opbevaringsperiode)");
  var pb = path.join(__dirname, "personbiler");
  mkdir(pb);
  fs.writeFileSync(path.join(pb, "index.html"), personbilerHTML(data), "utf8");
  console.log("OK: /personbiler/ — henvisning til leasio.dk");
  fs.writeFileSync(path.join(__dirname, "404.html"), fejlsideHTML(data), "utf8");
  console.log("OK: 404.html");
  skrivVersioneredeFiler();
  stemplCssVersion();
  console.log("OK: sitemap.xml og robots.txt");
  if (advarsler > 0) console.log("OBS: " + advarsler + " tilbud mangler kilde. Ret dem foer publicering.");
  console.log("Deploy: npx wrangler pages deploy .");
}

main();

// ── Faggrupper og leasingtype × størrelse (02-10-2026) ──────────────────────
//
// Fagsiderne vælger bilerne efter det mål, faget typisk har mest brug for.
// Grænserne er vores valg og står i kriteriet; specialindretningen er den regel,
// der betyder mest for de fleste fag, og den har kilde i Håndbogen.
function fagData() { return {
  elektriker: {
    fag: "elektriker", h1: "Varebil til elektriker",
    kort: "Mellemstore kassevogne med plads til reoler — sorteret efter den reelle pris.",
    intro: "En elektriker kører med kabler, materialer og værktøj på reoler, ofte mellem kunder i byen. Her er de mellemstore kassevogne: plads til indretning, men stadig til at parkere. Sorteret efter, hvad de reelt koster om måneden med udbetalingen fordelt.",
    filtrer: function (r) { return stoerrelse(r.bil) === "mellem"; },
    ekstra: { navn: "Lastrum", fraRad: function (r) { return (r.bil.lastrum || {}).volumen_m3 != null ? kommaTal(r.bil.lastrum.volumen_m3) + " m³" : null; } },
    kriterium: "samlet pris pr. måned blandt mellemstore kassevogne. Lavest først, én pr. model."
  },
  vvs: {
    fag: "VVS-installatør", h1: "Varebil til VVS", slugNavn: "vvs",
    kort: "Kassevogne med mindst 2,5 meter lastrum, så rør og lange emner kan ligge i bunden.",
    intro: "Rør, fittings og værktøj fylder i længden. Her er kassevognene med mindst 2,5 meter lastrumslængde ifølge producenten, sorteret efter den reelle pris. Længden står ved hver bil; mål og læssehøjde står på modelsiden.",
    filtrer: function (r) { return r.bil.karrosseri === "kassevogn" && (r.bil.lastrum || {}).laengde_mm >= 2500; },
    ekstra: { navn: "Lastrumslængde", fraRad: function (r) { return talDK(r.bil.lastrum.laengde_mm) + " mm"; } },
    kriterium: "samlet pris pr. måned blandt kassevogne med mindst 2.500 mm lastrumslængde. Lavest først, én pr. model."
  },
  toemrer: {
    fag: "tømrer", h1: "Varebil til tømrer",
    kort: "Lange kassevogne og ladvogne til plader, lægter og lange emner.",
    intro: "Plader, lægter og lange emner kræver længde — enten et langt lastrum eller et lad. Her er kassevognene med mindst 3 meter lastrum og ladvognene, sorteret efter den reelle pris. Trækvægten står på modelsiden, hvis der også skal en trailer med.",
    filtrer: function (r) { return (r.bil.lastrum || {}).laengde_mm >= 3000 || r.bil.karrosseri === "ladvogn"; },
    ekstra: { navn: "Lastrum / lad", fraRad: function (r) { return r.bil.karrosseri === "ladvogn" ? "Ladvogn" : talDK(r.bil.lastrum.laengde_mm) + " mm"; } },
    kriterium: "samlet pris pr. måned blandt kassevogne med mindst 3.000 mm lastrumslængde og ladvogne. Lavest først, én pr. model."
  },
  maler: {
    fag: "maler", h1: "Varebil til maler",
    kort: "Små og mellemstore kassevogne med mindst 3,5 m³ til stiger, spande og afdækning.",
    intro: "En maler skal have stiger, spande og afdækning med, men sjældent de helt tunge læs. Her er de små og mellemstore kassevogne med mindst 3,5 m³ lastrum, sorteret efter den reelle pris med udbetalingen fordelt.",
    filtrer: function (r) { var k = stoerrelse(r.bil); return (k === "pizzabil" || k === "mellem") && (r.bil.lastrum || {}).volumen_m3 >= 3.5; },
    ekstra: { navn: "Lastrum", fraRad: function (r) { return kommaTal(r.bil.lastrum.volumen_m3) + " m³"; } },
    kriterium: "samlet pris pr. måned blandt små og mellemstore kassevogne med mindst 3,5 m³ lastrum. Lavest først, én pr. model."
  },
  murer: {
    fag: "murer", h1: "Varebil til murer",
    kort: "Varebiler med mindst 1.100 kg nyttelast og 2.500 kg trækvægt til tunge materialer.",
    intro: "Mursten, mørtel og stillads vejer. Her er varebilerne med mindst 1.100 kg nyttelast og 2.500 kg bremset trækvægt ifølge producenten, sorteret efter den reelle pris. Husk, at indretning trækker fra nyttelasten.",
    filtrer: function (r) { return r.bil.nyttelast_kg >= 1100 && r.bil.anhaengervaegt_kg >= 2500; },
    ekstra: { navn: "Nyttelast / træk", fraRad: function (r) { return talDK(r.bil.nyttelast_kg) + " / " + talDK(r.bil.anhaengervaegt_kg) + " kg"; } },
    kriterium: "samlet pris pr. måned blandt varebiler med mindst 1.100 kg nyttelast og 2.500 kg anhængervægt. Lavest først, én pr. model."
  },
  anlaegsgartner: {
    fag: "anlægsgartner", h1: "Varebil til anlægsgartner",
    kort: "Ladvogne, pickupper og varebiler, der må trække mindst 3 tons.",
    intro: "Jord, sten, planter og en trailer med maskiner. Her er ladvognene og pickupperne og de varebiler, der må trække mindst 3.000 kg ifølge producenten, sorteret efter den reelle pris.",
    filtrer: function (r) { return r.bil.karrosseri !== "kassevogn" || r.bil.anhaengervaegt_kg >= 3000; },
    ekstra: { navn: "Trækvægt", fraRad: function (r) { return r.bil.anhaengervaegt_kg ? talDK(r.bil.anhaengervaegt_kg) + " kg" : null; } },
    kriterium: "samlet pris pr. måned blandt ladvogne, pickupper og varebiler med mindst 3.000 kg anhængervægt. Lavest først, én pr. model."
  },
  budkoersel: {
    fag: "budkørsel", h1: "Varebil til budkørsel", artikelOrd: "",
    kort: "Store kassevogne med mindst 9 m³, sorteret efter pris pr. m³ lastrum.",
    intro: "Til pakker og gods er det rumfanget, der tjener pengene. Her er kassevognene med mindst 9 m³ lastrum, sorteret efter hvad hver kubikmeter koster om måneden med udbetalingen fordelt.",
    filtrer: function (r) { return (r.bil.lastrum || {}).volumen_m3 >= 9 && r.samlet != null; },
    maal: function (r) { return r.samlet / r.bil.lastrum.volumen_m3; },
    vis: function (v) { return talDK(Math.round(v)) + " kr./m³"; },
    kolonne: "Pr. m³ lastrum",
    ekstra: { navn: "Lastrum / pris", fraRad: function (r) { return kommaTal(r.bil.lastrum.volumen_m3) + " m³ · " + talDK(Math.round(r.samlet)) + " kr./md."; } },
    kriterium: "samlet pris pr. måned delt med lastrummets rumfang, blandt varebiler med mindst 9 m³. Lavest først, én pr. model."
  },
  servicetekniker: {
    fag: "servicetekniker", h1: "Varebil til servicetekniker",
    kort: "Små kassevogne til værktøj og reservedele — lette at parkere, billige i drift.",
    intro: "En servicetekniker kører mange korte ture med værktøj og reservedele, ofte i byen. Her er de små kassevogne, sorteret efter den reelle pris. Flere findes som el; rækkevidden står på modelsiden.",
    filtrer: function (r) { return stoerrelse(r.bil) === "pizzabil"; },
    ekstra: { navn: "Lastrum", fraRad: function (r) { return (r.bil.lastrum || {}).volumen_m3 != null ? kommaTal(r.bil.lastrum.volumen_m3) + " m³" : null; } },
    kriterium: "samlet pris pr. måned blandt små kassevogne. Lavest først, én pr. model."
  }
}; }

function fagGuide(k) {
  var f = fagData()[k];
  return {
    slug: "varebil-til-" + (f.slugNavn || k),
    svar: "Billigste varebil til " + f.fag + " lige nu:",
    h1: f.h1, kort: f.kort,
    title: f.h1 + " — leasing fra %fra% kr./md.",
    titelUdenPris: f.h1 + " — erhvervsleasing",
    desc: f.kort + " %n% erhvervstilbud ekskl. moms, fra %fra% kr./md.",
    intro: f.intro,
    filtrer: f.filtrer,
    maal: f.maal || function (r) { return r.samlet; },
    vis: f.vis || function (v) { return talDK(v) + " kr./md."; },
    kolonne: f.kolonne || "Inkl. udbetaling",
    ekstra: f.ekstra,
    lavestBedst: true,
    unikModel: true,
    kriterium: f.kriterium,
    note: "Grænserne er vores valg, ikke en officiel definition. Har bilen fast indretning til arbejdet, kan den være specialindrettet. Så må den køre mellem hjem og arbejde hver dag. Læs mere i Håndbogen om specialindretning.",
    artikel: function () { return fagLinksHTML(k); },
    // 02-10-2026: spørgsmål, der besvares med netop denne listes tal (ikke ens på alle 8 sider).
    tilpas: function (med) { return { faq: fagFaq(k, f, med).concat(this.faq.slice(1)) }; },
    faq: [
      ["Hvilken varebil skal en " + f.fag.replace(/^budkørsel$/, "budvirksomhed") + " vælge?",
       "Det afhænger af, hvad der skal med. Listen viser de biler, der passer til kriteriet ovenfor, billigste først. Mål, nyttelast og trækvægt står på hver modelside."],
      ["Må varebilen køre hjem hver dag?",
       "En specialindrettet varebil må køre mellem hjem og arbejde hver dag ifølge Motorstyrelsen. Det afgør indretningen, ikke faget. En almindelig varebil på gule plader må køre hjem op til 25 gange om året."],
      ["Kan vi få tilbud på flere biler?",
       "Ja. Vi henter tilbud fra forhandlere og leasingselskaber på samme bil og sammenligner dem skriftligt. Det er gratis for dig."]
    ]
  };
}

// 02-10-2026: tal fra listen selv. med = [{ r, v }] efter guidens sortering.
function listeTal(med) {
  var rr = med.map(function (x) { return x.r; }).filter(function (r) { return r.samlet != null; });
  var s = rr.map(function (r) { return r.samlet; }).sort(function (a, b) { return a - b; });
  var billigst = rr.reduce(function (m, r) { return !m || r.samlet < m.samlet ? r : m; }, null);
  return { rr: rr, billigst: billigst, median: s.length ? s[Math.floor(s.length / 2)] : null };
}
function stoerstAf(rr, fn) {
  return rr.filter(function (r) { return fn(r) != null; }).reduce(function (m, r) { return !m || fn(r) > fn(m) ? r : m; }, null);
}
function navnR(r) { return r.bil.maerke + " " + r.bil.model; }
function fagFaq(k, f, med) {
  var t = listeTal(med), ud = [];
  if (t.billigst) ud.push(["Hvad koster en varebil til " + f.fag + "?",
    "Den billigste på listen er " + navnR(t.billigst) + " hos " + t.billigst.t.udbyder + ". Den koster " + talDK(Math.round(t.billigst.samlet)) + " kr. om måneden, når udbetalingen er fordelt over løbetiden" +
    (t.median ? ". Den typiske bil på listen koster " + talDK(Math.round(t.median)) + " kr. om måneden" : "") + ". Alle priser er ekskl. moms."]);
  var x;
  if (k === "vvs" || k === "toemrer") {
    x = stoerstAf(t.rr, function (r) { return (r.bil.lastrum || {}).laengde_mm; });
    if (x) ud.push(["Hvilken varebil har det længste lastrum?", navnR(x) + " med " + talDK(x.bil.lastrum.laengde_mm) + " mm ifølge producenten, for den udgave af bilen, modelsiden viser. Den koster fra " + talDK(Math.round(x.samlet)) + " kr. om måneden."]);
  } else if (k === "murer") {
    x = stoerstAf(t.rr, function (r) { return r.bil.nyttelast_kg; });
    if (x) ud.push(["Hvilken varebil kan laste mest?", navnR(x) + " med " + talDK(x.bil.nyttelast_kg) + " kg nyttelast ifølge producenten. Indretning og værktøj trækker fra."]);
  } else if (k === "anlaegsgartner") {
    x = stoerstAf(t.rr, function (r) { return r.bil.anhaengervaegt_kg; });
    if (x) ud.push(["Hvilken bil kan trække mest?", navnR(x) + ", der må trække " + talDK(x.bil.anhaengervaegt_kg) + " kg med bremset anhænger ifølge producenten. Hvor meget du selv må trække, afhænger også af kørekortet — se Håndbogen om anhænger bag varebilen."]);
  } else if (k === "maler" || k === "budkoersel") {
    x = stoerstAf(t.rr, function (r) { return (r.bil.lastrum || {}).volumen_m3; });
    if (x) ud.push(["Hvilken varebil har mest lastrum?", navnR(x) + " med " + kommaTal(x.bil.lastrum.volumen_m3) + " m³ ifølge producenten. Den koster fra " + talDK(Math.round(x.samlet)) + " kr. om måneden."]);
  }
  if (k === "elektriker" || k === "servicetekniker" || k === "maler") {
    var el = t.rr.filter(function (r) { return r.bil.drivmiddel === "el"; });
    ud.push(["Findes der en elvarebil til " + f.fag + "?", el.length
      ? "Ja. " + el.length + " af modellerne på listen er elektriske, billigst " + navnR(el.reduce(function (m, r) { return r.samlet < m.samlet ? r : m; })) + " til " + talDK(Math.round(el.reduce(function (m, r) { return r.samlet < m.samlet ? r : m; }).samlet)) + " kr. om måneden. Hvad skiftet koster i strøm og tid, regner beregnerne under Grøn omstilling ud."
      : "Ikke blandt modellerne på denne liste lige nu. Se alle elvarebiler under Elvarebiler."]);
  }
  return ud;
}
function typeFaq(type, S, med) {
  var t = listeTal(med), ud = [], F = type === "finansiel";
  if (t.billigst) ud.push(["Hvad koster " + type + " leasing af en " + S.navn + "?",
    "Den billigste er " + navnR(t.billigst) + " hos " + t.billigst.t.udbyder + ". Den koster " + talDK(Math.round(t.billigst.samlet)) + " kr. om måneden, når udbetalingen er fordelt over løbetiden" +
    (t.median ? ". Et typisk tilbud blandt de " + t.rr.length + " koster " + talDK(Math.round(t.median)) + " kr. om måneden" : "") + ". Alle priser er ekskl. moms."]);
  if (F) {
    var rv = t.rr.map(function (r) { return r.t.restvaerdi; }).filter(function (v) { return v != null; }).sort(function (a, b) { return a - b; });
    if (rv.length) ud.push(["Hvor høj er restværdien typisk?", rv.length + " af de " + t.rr.length + " tilbud oplyser restværdien. Den går fra " + talDK(rv[0]) + " til " + talDK(rv[rv.length - 1]) + " kr., typisk " + talDK(rv[Math.floor(rv.length / 2)]) + " kr."]);
  } else {
    var sv = t.rr.filter(function (r) { return (r.t.inkluderet || []).indexOf("service_reparation") >= 0; }).length;
    ud.push(["Er service med i operationel leasing af en " + S.navn + "?", sv + " af de " + t.rr.length + " tilbud har service og reparation med i ydelsen. Det står ved hvert tilbud, hvad der er inkluderet."]);
  }
  return ud;
}

function fagLinksHTML(aktiv) {
  return [
    '<section class="sektion--kort">',
    '  <h2>Varebil til dit fag</h2>',
    '  <p class="maerkelinks">' + Object.keys(fagData()).filter(function (k) { return k !== aktiv; }).map(function (k) {
      return '<a href="/bedste-tilbud/varebil-til-' + (fagData()[k].slugNavn || k) + '/">' + esc(fagData()[k].h1) + '</a>';
    }).join('') + '<a href="/bedste-tilbud/varebil-til-haandvaerker/">Varevogn til håndværkere</a></p>',
    '  <p>Læs reglerne i Håndbogen om <a href="/haandbogen/specialindretning-af-varebil/">specialindretning af varebil</a> og om at <a href="/haandbogen/tage-varebilen-med-hjem/">tage varebilen med hjem</a>.</p>',
    '</section>'
  ].join("\n");
}

function segData() { return {
  el: { navn: "elvarebil", flertal: "elvarebiler", slug: "elvarebil", hvor: function (r) { return r.bil.drivmiddel === "el"; } },
  pizzabil: { navn: "lille varebil", flertal: "små varebiler", slug: "lille-varebil", hvor: function (r) { return stoerrelse(r.bil) === "pizzabil"; } },
  mellem: { navn: "mellemstor varebil", flertal: "mellemstore varebiler", slug: "mellemstor-varebil", hvor: function (r) { return stoerrelse(r.bil) === "mellem"; } },
  stor: { navn: "stor varebil", flertal: "store varebiler", slug: "stor-varebil", hvor: function (r) { return stoerrelse(r.bil) === "stor"; } }
}; }
function typeGuide(type, seg) {
  var S = segData()[seg], F = type === "finansiel", Type = F ? "Finansiel" : "Operationel";
  var h1 = Type + " leasing af " + S.navn, tf = F ? "finansielle" : "operationelle";
  return {
    slug: type + "-leasing-" + S.slug,
    svar: "Billigste " + (F ? "finansielle" : "operationelle") + " leasing af en " + S.navn + " lige nu:",
    h1: h1,
    kort: F ? "Tilbud med restværdi på " + S.flertal + " — sorteret efter den reelle pris." : "Tilbud, hvor bilen afleveres efter løbetiden — sorteret efter den reelle pris.",
    title: h1 + " fra %fra% kr./md.",
    titelUdenPris: h1,
    desc: "Sammenlign %n% " + tf + " leasingtilbud på " + S.flertal + " fra %fra% kr./md. ekskl. moms. " +
      (F ? "Ydelse, udbetaling og restværdi side om side." : "Ydelse, udbetaling og hvad der er inkluderet side om side."),
    intro: (F
      ? "Ved finansiel leasing er der aftalt en restværdi, som skal indfries, når aftalen udløber. Det gør du selv, eller også gør en køber, du anviser, det. "
      : "Ved operationel leasing lejer du bilen og afleverer den efter løbetiden; leasingselskabet bærer risikoen for, hvad den er værd. ") +
      "Her er de " + tf + " tilbud på " + S.flertal + ", sorteret efter den reelle pris med udbetalingen fordelt over løbetiden.",
    filtrer: function (r) { return r.t.leasingtype === type && S.hvor(r) && r.samlet != null; },
    maal: function (r) { return r.samlet; },
    vis: function (v) { return talDK(v) + " kr./md."; },
    kolonne: "Inkl. udbetaling",
    ekstra: F
      ? { navn: "Restværdi", fraRad: function (r) { return r.t.restvaerdi != null ? talDK(r.t.restvaerdi) + " kr." : "Ikke oplyst"; } }
      : { navn: "Inkluderet", fraRad: function (r) { var i = (r.t.inkluderet || []).map(function (p) { return POST_ORD[p] || p; }); return i.length ? i.join(", ") : "Intet oplyst"; } },
    lavestBedst: true,
    kriterium: "samlet pris pr. måned blandt " + tf + " tilbud på " + S.flertal + ". Lavest først.",
    note: F ? "Restværdien er en del af prisen: jo højere den er, jo lavere ydelse — og jo større beløb skal indfries til sidst." : "Tjek prisen pr. kilometer over grænsen og vurderingen ved aflevering; de står sjældent i annoncen.",
    artikel: function () { return typeLinksHTML(type, seg); },
    tilpas: function (med) { return { faq: typeFaq(type, S, med).concat(this.faq) }; },
    faq: [
      ["Hvad er forskellen på finansiel og operationel leasing?",
       "Ved operationel leasing afleverer du bilen, og leasingselskabet bærer risikoen for dens værdi. Ved finansiel leasing er der aftalt en restværdi, som skal indfries, når aftalen udløber. Det gør du selv, eller også gør en køber, du anviser, det."],
      [F ? "Hvad er restværdien på en finansiel leasing af en " + S.navn + "?" : "Hvad er typisk inkluderet i operationel leasing af en " + S.navn + "?",
       F ? "Den står ved hvert tilbud, hvor udbyderen oplyser den. Sammenlign den med, hvad bilen realistisk er værd efter løbetiden og jeres kilometer."
         : "Det står ved hvert tilbud. De fleste operationelle aftaler har service og reparation med; dæk og forsikring er sjældnere."]
    ]
  };
}

function typeLinksHTML(type, seg) {
  var andre = [];
  ["el", "pizzabil", "mellem", "stor"].forEach(function (k) {
    ["operationel", "finansiel"].forEach(function (t) {
      if (k === seg && t === type) return;
      if (k !== seg && t !== type) return;
      andre.push('<a href="/bedste-tilbud/' + t + '-leasing-' + segData()[k].slug + '/">' + (t === "finansiel" ? "Finansiel" : "Operationel") + ' leasing af ' + segData()[k].navn + '</a>');
    });
  });
  return [
    '<section class="sektion--kort">',
    '  <h2>Andre størrelser og typer</h2>',
    '  <p class="maerkelinks">' + andre.join('') + '</p>',
    '  <p>Se alle ' + (type === "finansiel" ? "finansielle" : "operationelle") + ' tilbud i <a href="/bedste-tilbud/' + type + '-leasing-varebil/">' + type + ' leasing af varebil</a>. Vi sammenligner de to typer i <a href="/bedste-tilbud/finansiel-eller-operationel-leasing/">finansiel eller operationel leasing</a>.</p>',
    '</section>'
  ].join("\n");
}

// ── Grupperne på /bedste-tilbud/ og forsidens udvalg (02-10-2026) ──────────
function forsideGuider() { return ["billigste-varebil", "varebil-til-haandvaerker", "el-varebil", "finansiel-eller-operationel-leasing",
  "varebil-med-lav-udbetaling", "varebil-med-service-inkluderet", "kassevogn-leasing", "varebil-til-elektriker",
  "varebil-til-vvs", "varebil-til-toemrer", "lille-varebil", "stor-varebil"]; }

function guideGruppe(slug) {
  if (/^varebil-til-(?!europaller|parkeringskaelder)/.test(slug)) return "fag";
  if (/^(finansiel|operationel)-|^erhvervsbil-leasing$|^varebil-med-(kort-loebetid|lav-udbetaling|service-inkluderet)$/.test(slug)) return "leasing";
  if (/^el-varebil$|^elvarebil-/.test(slug)) return "el";
  if (/^varebil-med-(hoej-nyttelast|traek)$|^varebil-4x4$|^pickup-leasing$|^ladbil$/.test(slug)) return "last";
  if (/^(billigste-varebil|varebil-under-3500-kr|bedste-varevogn-til-prisen|hvad-koster-en-varebil|varebil-med-lav-ejerafgift|varebil-med-lavt-braendstofforbrug|bedste-varebil-\d+)$/.test(slug)) return "pris";
  return "stoerrelse";
}
function guideGrupper() { return [
  ["fag", "Efter fag", "Varebiler valgt efter det, faget typisk har mest brug for."],
  ["leasing", "Leasingform og aftale", "Finansiel eller operationel, størrelse for størrelse — og aftaler med lav udbetaling, kort løbetid eller service med."],
  ["el", "Elvarebiler", "Rækkevidde, lastrum og trækvægt for elvarebilerne."],
  ["stoerrelse", "Størrelse og type", "Fra den lille varebil til den lange kassevogn — og biler, der kan komme ned i en parkeringskælder."],
  ["last", "Last og træk", "Nyttelast, trækvægt, 4x4, ladbiler og pickupper."],
  ["pris", "Pris og drift", "Den billigste pris, prisen pr. m³ og det, bilen koster at køre."]
]; }
function guideGrupperHTML(rader) {
  var kort = {};
  GUIDER.forEach(function (g) {
    var h = guideKortHTML(g, rader);
    if (!h) return;
    var k = guideGruppe(g.slug);
    (kort[k] = kort[k] || []).push(h);
  });
  var grupper = guideGrupper().filter(function (x) { return kort[x[0]] && kort[x[0]].length; });
  return [
    '<p class="maerkelinks">' + grupper.map(function (x) {
      return '<a href="#gruppe-' + x[0] + '">' + esc(x[1]) + ' (' + kort[x[0]].length + ')</a>';
    }).join('') + '</p>',
    grupper.map(function (x) {
      return '<div class="guidegruppe" id="gruppe-' + x[0] + '"><h3>' + esc(x[1]) + '</h3>' +
        '<p class="sektion__manchet">' + esc(x[2]) + '</p><ul class="guidegrid">' + kort[x[0]].join("\n") + '</ul></div>';
    }).join("\n")
  ].join("\n");
}

// 05-10-2026: tabellen med alle tilbud fik sin egen side, så forsiden kan være kortere.
// Siden skrives kun med GULPLADE_FORSIDE_NY=1, indtil brugeren har godkendt den nye forside.
function alleTilbudSideHTML(data) {
  var alle = alleTilbud(data);
  var udb = alle.map(function (r) { return r.t.udbyder; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
  var billigst = alle.reduce(function (m, r) {
    return (r.t.maanedspris != null && (m == null || r.t.maanedspris < m)) ? r.t.maanedspris : m;
  }, null);
  var title = titelDerPasser([
    "Leasingtilbud på varebiler: alle " + alle.length + " i én tabel",
    "Alle " + alle.length + " leasingtilbud på varebiler"
  ]);
  var desc = "Se alle " + alle.length + " leasingtilbud på varebiler fra " + udb.length + " forhandlere og leasingselskaber" +
    (billigst != null ? ". Priser fra " + talDK(billigst) + " kr./md. uden moms" : "") +
    ". Sortér efter pris og løbetid.";
  var md = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];
  var d = String(data.sidst_opdateret || "").split("-");
  var dato = d.length === 3 ? Number(d[2]) + ". " + md[Number(d[1]) - 1] + " " + d[0] : null;
  return [
    hoved(title, beskrivelse(desc), BASE_URL + "/alle-tilbud/",
      samlSchema(krummeSchema([["Forsiden", "/"], ["Alle tilbud", null]]))),
    header(),
    '<main id="indhold" class="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Alle tilbud</li></ol></nav>',
    '<div class="bil-hero">',
    '  <h1>Alle ' + alle.length + ' leasingtilbud på varebiler</h1>',
    '  <p class="bil-hero__manchet">Her finder du alle tilbud, ikke kun det billigste på hver model. Du kan nøjes med at se tilbuddene fra én forhandler, ét leasingselskab eller én model, og du kan sortere tabellen efter hver kolonne. Alle priser er uden moms.</p>',
    dato ? '  <p class="bil-hero__variant">Opdateret den ' + esc(dato) + '.</p>' : '',
    '  <p><a href="/">Sammenlign modellerne på forsiden</a></p>',
    '</div>',
    tilbudTabelHTML(data),
    '</main>',
    footer(),
    tilbudTabelScript(),
    '</body></html>'
  ].join("\n");
}

// 05-10-2026: artikelbåndet i lille udgave, til højre for forsidens overskrift.
function heroArtiklerHTML(antalTilbud, nyesteNyhed) {
  var punkter = [
    ["Leasingaftalen", "Det står ikke i leasingtilbuddet", "/haandbogen/det-staar-ikke-i-leasingtilbuddet/"],
    ["Reglerne", "Hvad må du køre i en varebil på gule plader?", "/haandbogen/hvad-maa-du-koere-i-en-varebil-paa-gule-plader/"],
    ["Moms", "Hvornår får du fuldt momsfradrag?", "/haandbogen/moms-paa-varebil/"],
    nyesteNyhed ? ["Nyhed", nyesteNyhed.h1, videnSti(nyesteNyhed)] : null
  ].filter(Boolean);
  return [
    '<aside class="hero-artikler" aria-labelledby="heroArtiklerNavn">',
    '  <div class="baand__hoved"><h2 class="hero-artikler__navn" id="heroArtiklerNavn">Det skal du vide, før du leaser</h2><a href="/haandbogen/">Se alle guider</a></div>',
    '  <ul>',
    punkter.map(function (x) {
      return '    <li><a href="' + x[2] + '"><span class="artikelkort__emne">' + esc(x[0]) + '</span>' + esc(x[1]) + '</a></li>';
    }).join("\n"),
    '  </ul>',
    '</aside>'
  ].join("\n");
}
