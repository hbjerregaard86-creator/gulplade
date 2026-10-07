// partnere.js — betalte partnere omkring varebilen (indretning, forsikring ...)
//
// Bruges af generate-tilvalg.js (emnesiderne og profilsiderne under /partner/)
// og generate-pages.js (modelsiderne). Data staar i partnere.json.
//
// Reglerne, som salgssiden /annoncer-paa-gulplade/ lover partnerne og
// laeserne:
// - en partner er altid maerket "Partner", og der staar, at de betaler
// - de vises aldrig i leasingsammenligningen, Haandbogen eller Nyheder
// - vi kalder dem ikke bedst eller billigst; vi gengiver, hvad de tilbyder
// - henvendelser gaar gennem os (kontakt@gulplade.dk), saa de kan taelles
// - priser og vaegte staar med kilde og dato, ligesom leasingtilbuddene
//
// En partner kan have to niveauer af data:
// - simpelt: produkter med navn og tekst (evt. vaegt) -> et enkelt kort
// - fuldt: produkter med billede, maal, vaegt, pris og hvilke modeller de
//   passer til, plus "pakker" (en opstilling af flere produkter). Saa faar
//   modelsiden opstillinger med billeder og nyttelasten efter indretning.
//
// Eksempelpartnere (eksempel/forhaand: true) kommer kun med, naar der bygges
// med GULPLADE_PARTNER_EKSEMPEL=1. Det er til preview og maa ikke i produktion.

var fs = require("fs");
var path = require("path");

var EKSEMPEL = process.env.GULPLADE_PARTNER_EKSEMPEL === "1";
// Udkast = salgsskitse til en rigtig virksomhed uden aftale. Kun lokalt.
var UDKAST = process.env.GULPLADE_PARTNER_UDKAST === "1";
var MAIL = "kontakt@gulplade.dk";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function slug(s) {
  return String(s || "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ë/g, "e")
    .replace(/[./]+/g, "-")
    .replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function tal(v) { return Number(v).toLocaleString("da-DK", { maximumFractionDigits: 0 }); }
function kr(v) { return tal(Math.round(v)) + " kr."; }
function datoDa(d) {
  var m = String(d || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return "";
  var md = ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."];
  return Number(m[3]) + ". " + md[Number(m[2]) - 1] + " " + m[1];
}
function bilSti(b) { return "/varebiler/" + slug(b.maerke) + "/" + slug(b.model) + "/"; }

var _alle = null;
function alle() {
  if (_alle) return _alle;
  var fil = path.join(__dirname, "partnere.json");
  if (!fs.existsSync(fil)) return (_alle = []);
  var idag = new Date().toISOString().slice(0, 10);
  _alle = JSON.parse(fs.readFileSync(fil, "utf8")).partnere.filter(function (p) {
    if ((p.eksempel || p.forhaand) && !EKSEMPEL) return false;
    if (p.udkast && !UDKAST) return false;
    // GULPLADE_PARTNER_KUN=sortimo: en preview, der kun viser den ene partner.
    if (process.env.GULPLADE_PARTNER_KUN && process.env.GULPLADE_PARTNER_KUN.split(",").indexOf(p.slug) < 0) return false;
    return (!p.fra || p.fra <= idag) && (!p.til || p.til >= idag);
  });
  return _alle;
}
function tilEmne(emne) { return alle().filter(function (p) { return p.emne === emne; }); }
function tilModel(id) {
  return alle().filter(function (p) { return (p.modeller || []).indexOf(id) >= 0; });
}
// Produkter, der passer til bilen. Produkter uden modelliste passer til alle
// partnerens modeller.
function produkterTil(p, id) {
  // kun_beregner: produkter uden billeder, som kun bruges i købssidens prisberegner (06-10-2026).
  return (p.produkter || []).filter(function (x) { return !x.kun_beregner && (!x.modeller || x.modeller.indexOf(id) >= 0); });
}
function produkt(p, id) { return (p.produkter || []).filter(function (x) { return x.id === id; })[0]; }
function emneNavn(p) { return p.emne === "indretning" ? "Indretning" : p.emne; }

function maerkat(p) {
  return '<span class="partner__maerkat">Partner</span>' +
    (p.eksempel ? '<span class="partner__maerkat partner__maerkat--eksempel">Eksempel</span>' : '') +
    (p.forhaand ? '<span class="partner__maerkat partner__maerkat--eksempel">Forhåndsvisning</span>' : '') +
    (p.udkast ? '<span class="partner__maerkat partner__maerkat--eksempel">Udkast · ingen aftale</span>' : '');
}
function initialer(navn) {
  return navn.replace(/\b(ApS|A\/S|I\/S)\b/g, "").trim().split(/\s+/).slice(0, 2)
    .map(function (o) { return o.charAt(0); }).join("").toUpperCase();
}
function hovedHTML(p, h) {
  var logo = p.logo
    ? '<span class="partner__logo partner__logo--billede"><img src="' + esc(p.logo) + '" alt="' + esc(p.navn) + '" height="22"></span>'
    : '<span class="partner__logo" aria-hidden="true">' + esc(initialer(p.navn)) + '</span>';
  return '<div class="partner__hoved">' + logo + '<div><' + h + ' class="partner__navn">' + esc(p.navn) +
    '</' + h + '><p class="partner__omraade">' + esc(p.omraade) + '</p></div>' +
    '<div class="partner__maerkater">' + maerkat(p) + '</div></div>';
}
// Partnerens egne farver som CSS-variabler. Bruges kun til streger, knapper
// og flader - aldrig til broedtekst, saa kontrasten holder i moerk tilstand.
function brandStil(p) {
  if (!p.farver) return '';
  return ' style="--p-accent:' + esc(p.farver.accent) + ';--p-flade:' +
    esc(p.farver.flade || 'var(--bg-alt)') + ';--p-skrift:' + esc(p.farver.skrift || 'var(--text-soft)') + '"';
}
function brand(p) { return p.farver ? ' partner--brand"' + brandStil(p).slice(0, -1) : ''; }
// Mailen har felterne fra start, saa henvendelsen kan sendes videre til
// partneren uden at vi skal ringe tilbage efter det grundlaeggende.
function mailHref(p, om, bil) {
  var felter = [
    "Bil: " + (bil ? bil.maerke + " " + bil.model : ""),
    "Længde (L1/L2): ",
    "Branche: ",
    "Postnummer: ",
    "Hvornår leveres bilen: ",
    "Telefon: ",
    "",
    "Henvendelsen sendes videre til " + p.navn + "."
  ];
  return "mailto:" + MAIL + "?subject=" + encodeURIComponent(om + " – " + p.navn) +
    "&body=" + encodeURIComponent(felter.join("\r\n"));
}
// Til klikmaalingen i samtykke.js.
function spor(p, bil, type) {
  return ' data-partner="' + esc(p.slug) + '"' + (bil ? ' data-bil="' + esc(bil.id) + '"' : '') +
    ' data-type="' + esc(type) + '"';
}
// Knapper, der aabner sitets tilbudsformular (samtykke.js, data-lead) i stedet
// for mailen. Mailen i href er reserven, hvis formularen ikke kan aabne.
function lead(p, bil, ref) {
  return ' data-lead="indretning" data-partner-navn="' + esc(p.navn) + '"' +
    (bil ? ' data-bil-navn="' + esc(bil.maerke + " " + bil.model) + '"' : '') +
    (ref ? ' data-ref="' + esc(ref) + '"' : '');
}
function noteHTML() {
  return '<p class="partner__note">Partneren betaler for at stå her. Teksten på siden er ' +
    'skrevet uden partneren, og aftalen ændrer den ikke. ' +
    '<a href="/saadan-tjener-vi-penge/">Sådan tjener vi penge</a>.</p>';
}
function billedeHTML(x, cls, w, h) {
  return x.billede ? '<img class="' + cls + '" src="' + esc(x.billede) + '" alt="' + esc(x.navn) +
    '" width="' + (w || 800) + '" height="' + (h || 600) + '" loading="lazy" decoding="async">' : '';
}

// ── Fuldt niveau: moduler og opstillinger ────────────────────────────────────

function modulKort(p, x, bil) {
  var efter = bil && bil.nyttelast_kg && x.vaegt_kg ? bil.nyttelast_kg - x.vaegt_kg : null;
  return [
    '<article class="modul">',
    '  <div class="modul__billede">' + billedeHTML(x, "", 800, 600) + '</div>',
    '  <div class="modul__krop">',
    '    <p class="modul__side">' + esc(x.side === "højre" ? "Højre side" : "Venstre side") +
      (x.laengde_mm ? ' · ' + tal(x.laengde_mm) + ' mm lang' : '') + '</p>',
    '    <h4 class="modul__navn">' + esc(x.navn) + '</h4>',
    '    <p class="modul__tekst">' + esc(x.tekst) + '</p>',
    '    <dl class="modul__fakta">',
    x.vaegt_kg ? '      <div><dt>Vægt</dt><dd>' + tal(x.vaegt_kg) + ' kg</dd></div>' : '',
    efter != null ? '      <div><dt>Nyttelast derefter</dt><dd>ca. ' + tal(efter) + ' kg</dd></div>' : '',
    x.pris ? '      <div><dt>Vejl. pris</dt><dd>' + kr(x.pris) + '</dd></div>' : '',
    '    </dl>',
    '  </div>',
    '</article>'
  ].filter(Boolean).join("\n");
}

function pakkeKort(p, pk, bil) {
  var dele = pk.produkter.map(function (id) { return produkt(p, id); }).filter(Boolean);
  var vaegt = dele.reduce(function (a, x) { return a + (x.vaegt_kg || 0); }, 0);
  var pris = dele.reduce(function (a, x) { return a + (x.pris || 0); }, 0);
  var efter = bil && bil.nyttelast_kg ? bil.nyttelast_kg - vaegt : null;
  var om = "Sortimo Xpress " + pk.navn + (bil ? " til " + bil.maerke + " " + bil.model : "");
  return [
    '<article class="pakke">',
    '  <div class="pakke__billeder">' + dele.map(function (x) {
      return '<figure>' + billedeHTML(x, "", 800, 600) + '<figcaption>' +
        esc(x.side === "højre" ? "Højre" : "Venstre") + '</figcaption></figure>';
    }).join("") + '</div>',
    '  <div class="pakke__krop">',
    '    <p class="pakke__over">' + esc(pk.undertitel || "") + '</p>',
    '    <h3 class="pakke__navn">Xpress ' + esc(pk.navn) + '</h3>',
    '    <p class="pakke__tekst">' + esc(pk.tekst) + '</p>',
    '    <ul class="pakke__dele">' + dele.map(function (x) {
      return '<li><span>' + esc(x.side === "højre" ? "Højre" : "Venstre") + '</span>' + esc(x.navn) +
        (x.laengde_mm ? ' <em>' + tal(x.laengde_mm) + ' mm</em>' : '') + '</li>';
    }).join("") + '</ul>',
    '    <dl class="pakke__fakta">',
    '      <div><dt>Samlet vægt</dt><dd>' + tal(vaegt) + ' kg</dd></div>',
    efter != null ? '      <div><dt>Nyttelast derefter</dt><dd>ca. ' + tal(efter) + ' kg</dd></div>' : '',
    '    </dl>',
    pris ? '    <p class="pakke__pris"><span>Vejl. pris</span> ' + kr(pris) + ' <small>ekskl. moms</small></p>' : '',
    '    <a class="knap knap--primaer pakke__knap" href="' + esc(mailHref(p, "Tilbud på " + om, bil)) + '"' + spor(p, bil, "opstilling") + lead(p, bil, "Xpress " + pk.navn) + '>Bed om tilbud</a>',
    '  </div>',
    '</article>'
  ].filter(Boolean).join("\n");
}

function kildeHTML(p, bil) {
  var k = p.kilde;
  return '<p class="pblok__kilde">' +
    (k ? 'Vejledende priser ekskl. moms, vægte og mål fra <a href="' + esc(k.url) + '" rel="noopener">' +
      esc(k.navn) + '</a>, ' + esc(datoDa(k.dato)) + '. ' : '') +
    (p.krav ? esc(p.krav) + ' ' : '') +
    (p.pakker && p.pakker.length ? 'Opstillingerne er sat sammen af moduler fra samme serie; ' +
      esc(p.navn) + ' bekræfter dem i tilbuddet. ' : '') +
    (bil && bil.nyttelast_kg ? 'Nyttelasten er ' + esc(bil.maerke) + 's tal for den udgave af bilen, vi viser mål for (' +
      tal(bil.nyttelast_kg) + ' kg), minus modulernes vægt.' : '') + '</p>';
}

// ── Modelsiden ───────────────────────────────────────────────────────────────

function modelBlok(bil) {
  var ps = tilModel(bil.id);
  if (!ps.length) return "";
  var navn = bil.maerke + " " + bil.model;
  return ps.map(function (p) {
    var mods = produkterTil(p, bil.id).filter(function (x) { return x.billede; });
    if (!mods.length || !p.pakker) return simpelModelBlok(p, bil);
    var pakker = p.pakker.filter(function (pk) {
      return pk.produkter.every(function (id) { return mods.some(function (x) { return x.id === id; }); });
    }).slice(0, 3); // hoejst tre opstillinger pr. model
    return [
      '<section class="sektion--kort pblok" id="indretning"' + brandStil(p) + '>',
      '  <div class="pblok__hoved">',
      '    <div>',
      '      <p class="pblok__over">' + maerkat(p) + '<span>Indretning til ' + esc(navn) + '</span></p>',
      '      <h2>' + esc(p.navn) + ' Xpress til ' + esc(bil.model) + '</h2>',
      '      <p class="pblok__manchet">Færdige reolmoduler, som ' + esc(p.navn) + ' opgiver passer til ' +
        esc(navn) + '. Det lange modul sidder i venstre side, det korte i højre side bag skydedøren. ' +
        'Vægt og nyttelast herunder er regnet på netop denne bil.</p>',
      '    </div>',
      p.logo ? '    <img class="pblok__logo" src="' + esc(p.logo) + '" alt="' + esc(p.navn) + '" width="225" height="53">' : '',
      '  </div>',
      pakker.length ? '  <div class="pblok__pakker">\n' + pakker.map(function (pk) {
        return pakkeKort(p, pk, bil); }).join("\n") + '\n  </div>' : '',
      '  <details class="pblok__alle">',
      '    <summary>Se alle ' + mods.length + ' moduler til ' + esc(bil.model) + ' enkeltvis</summary>',
      '    <div class="pblok__moduler">\n' + mods.map(function (x) { return modulKort(p, x, bil); }).join("\n") + '\n    </div>',
      '  </details>',
      '  <p class="pblok__knapper"><a class="knap knap--primaer" href="' +
        esc(mailHref(p, "Indretning til " + navn, bil)) + '"' + spor(p, bil, "model") + lead(p, bil) + '>Få tilbud på indretning</a>' +
        '<a class="knap knap--sekundaer" href="/partner/' + p.slug + '/">Mere om ' + esc(p.navn) + '</a></p>',
      '  ' + kildeHTML(p, bil),
      '  ' + noteHTML(),
      '</section>'
    ].filter(Boolean).join("\n");
  }).join("\n");
}

// Partnere uden billeder og opstillinger: et enkelt kort.
function simpelModelBlok(p, bil) {
  var navn = bil.maerke + " " + bil.model;
  return [
    '<section class="sektion--kort">',
    '  <h2>' + esc(emneNavn(p)) + ' til ' + esc(navn) + '</h2>',
    '  <div class="partner' + brand(p) + '">',
    '    ' + hovedHTML(p, "h3"),
    '    <ul class="partner__produkter">',
    produkterTil(p, bil.id).map(function (x) {
      var efter = bil.nyttelast_kg && x.vaegt_kg
        ? '<span class="partner__vaegt">' + tal(x.vaegt_kg) + ' kg · nyttelast derefter ca. <strong>' +
          tal(bil.nyttelast_kg - x.vaegt_kg) + ' kg</strong></span>' : '';
      return '      <li><strong>' + esc(x.navn) + '</strong><span>' + esc(x.tekst) + '</span>' + efter + '</li>';
    }).join("\n"),
    '    </ul>',
    '    <p class="partner__knapper"><a class="knap knap--primaer" href="' +
      esc(mailHref(p, emneNavn(p) + " til " + navn, bil)) + '"' + spor(p, bil, "model") + lead(p, bil) + '>Bed om tilbud til ' + esc(bil.model) + '</a> ' +
      '<a class="knap knap--sekundaer" href="/partner/' + p.slug + '/">Se ' + esc(p.navn) + '</a></p>',
    '  </div>',
    '  ' + noteHTML(),
    '</section>'
  ].join("\n");
}

// ── Emnesiden ────────────────────────────────────────────────────────────────

function emneBlok(emne, overskrift, biler) {
  var ps = tilEmne(emne);
  if (!ps.length) return "";
  biler = biler || JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler;
  return ps.map(function (p) {
    if (!p.hero) return simpelEmneBlok(p, overskrift);
    var modeller = (p.modeller || []).map(function (id) {
      return (biler || []).filter(function (b) { return b.id === id; })[0];
    }).filter(Boolean);
    var priser = (p.produkter || []).map(function (x) { return x.pris; }).filter(Boolean);
    return [
      '<section class="sektion pemne"' + brandStil(p) + '>',
      '  <p class="pblok__over">' + maerkat(p) + '<span>' + esc(overskrift) + '</span></p>',
      '  <div class="pemne__gitter">',
      '    <figure class="pemne__billede"><img src="' + esc(p.hero.billede) + '" alt="' + esc(p.hero.tekst) +
        '" width="1390" height="680" loading="lazy" decoding="async"><figcaption>' + esc(p.hero.tekst) + '</figcaption></figure>',
      '    <div class="pemne__tekst">',
      p.logo ? '      <img class="pblok__logo" src="' + esc(p.logo) + '" alt="' + esc(p.navn) + '" width="225" height="53">' : '',
      '      <p class="pemne__kort">' + esc(p.kort) + '</p>',
      p.linjer ? '      <dl class="pemne__linjer">' + p.linjer.map(function (l) {
        return '<div><dt>' + esc(l.navn) + '</dt><dd>' + esc(l.tekst) + '</dd></div>'; }).join("") + '</dl>' : '',
      '    </div>',
      '  </div>',
      modeller.length ? [
        '  <div class="pemne__modeller">',
        '    <h3>Færdige moduler med mål, vægt og pris</h3>',
        '    <ul>' + modeller.map(function (b) {
          var n = produkterTil(p, b.id).filter(function (x) { return x.billede; }).length;
          return '<li><a href="' + bilSti(b) + '#indretning"' + spor(p, b, "emne-model") + '><strong>' + esc(b.maerke + " " + b.model) +
            '</strong><span>' + n + ' moduler' + (priser.length ? ' · fra ' + kr(Math.min.apply(null, priser)) + ' ekskl. moms' : '') +
            '</span></a></li>';
        }).join("") + '</ul>',
        '  </div>'
      ].join("\n") : '',
      '  <p class="pblok__knapper"><a class="knap knap--primaer" href="' +
        esc(mailHref(p, "Tilbud på " + emneNavn(p).toLowerCase())) + '"' + spor(p, null, "emne") + lead(p, null) + '>Bed om tilbud på indretning</a>' +
        '<a class="knap knap--sekundaer" href="/partner/' + p.slug + '/">Mere om ' + esc(p.navn) + '</a></p>',
      '  ' + noteHTML(),
      '</section>'
    ].filter(Boolean).join("\n");
  }).join("\n");
}

function simpelEmneBlok(p, overskrift) {
  return [
    '<section class="sektion">',
    '  <h2>' + esc(overskrift) + '</h2>',
    '  <div class="partner' + brand(p) + '">',
    '    ' + hovedHTML(p, "h3"),
    '    <p class="partner__kort">' + esc(p.kort) + '</p>',
    '    <ul class="partner__produkter">',
    (p.produkter || []).map(function (x) {
      return '      <li><strong>' + esc(x.navn) + '</strong><span>' + esc(x.tekst) + '</span>' +
        (x.vaegt_kg ? '<span class="partner__vaegt">Vejer ' + tal(x.vaegt_kg) + ' kg</span>' : '') + '</li>';
    }).join("\n"),
    '    </ul>',
    '    <p class="partner__knapper"><a class="knap knap--primaer" href="' +
      esc(mailHref(p, "Tilbud på " + emneNavn(p).toLowerCase())) + '"' + spor(p, null, "emne") + lead(p, null) + '>Bed om tilbud</a> ' +
      '<a class="knap knap--sekundaer" href="/partner/' + p.slug + '/">Se ' + esc(p.navn) + '</a></p>',
    '  </div>',
    '  ' + noteHTML(),
    '</section>'
  ].join("\n");
}

// ── Profilsiden /partner/<slug>/ ─────────────────────────────────────────────
// Rammen (hoved, header, footer) kommer fra generatoren, saa siden ser ud som
// resten af sitet.

function profilSide(p, ramme, biler) {
  var sti = "/partner/" + p.slug + "/";
  var emne = emneNavn(p);
  var modeller = (p.modeller || []).map(function (id) {
    return biler.filter(function (b) { return b.id === id; })[0];
  }).filter(Boolean);

  // Pr. bil: de moduler og opstillinger, der passer (samme regel som modelsiden).
  var pr = modeller.map(function (b) {
    var mods = produkterTil(p, b.id).filter(function (x) { return x.billede; });
    var pk = (p.pakker || []).filter(function (k) {
      return k.produkter.every(function (id) { return mods.some(function (x) { return x.id === id; }); });
    }).slice(0, 3);
    var priser = pk.map(function (k) { return k.produkter.reduce(function (a, id) { return a + (produkt(p, id).pris || 0); }, 0); });
    return { bil: b, mods: mods, pakker: pk, fra: priser.length ? Math.min.apply(null, priser) : null };
  }).filter(function (r) { return r.mods.length; });

  // Noegletal og tal til FAQ, regnet af data.
  var alleMods = (p.produkter || []).filter(function (x) { return x.pris; });
  var modulPriser = alleMods.map(function (x) { return x.pris; });
  var opPriser = [];
  pr.forEach(function (r) { r.pakker.forEach(function (k) {
    opPriser.push(k.produkter.reduce(function (a, id) { return a + produkt(p, id).pris; }, 0)); }); });
  var spaend = function (l) { return l.length ? tal(Math.round(Math.min.apply(null, l) / 100) * 100) + "–" + tal(Math.round(Math.max.apply(null, l) / 100) * 100) : ""; };
  var navne = pr.map(function (r) { return r.bil.maerke + " " + r.bil.model; });
  var VAERDI = {
    modul_pris: spaend(modulPriser), op_pris: spaend(opPriser),
    modelliste: navne.slice(0, -1).join(", ") + (navne.length > 1 ? " og " : "") + navne.slice(-1)
  };
  var fyld = function (t) { return String(t).replace(/\{\{(\w+)\}\}/g, function (_, k) { return VAERDI[k] || ""; }); };

  var titel = (p.titel_seo || emne + " fra " + p.navn) + " | Gulplade.dk";
  var faq = (p.faq || []).map(function (q) { return [q[0], fyld(q[1])]; });
  var schema = JSON.stringify({ "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forsiden", item: "https://gulplade.dk/" },
      { "@type": "ListItem", position: 2, name: "Til varebilen", item: "https://gulplade.dk/til-varebilen/" },
      { "@type": "ListItem", position: 3, name: emne, item: "https://gulplade.dk/til-varebilen/" + p.emne + "/" },
      { "@type": "ListItem", position: 4, name: p.navn }] },
    faq.length ? { "@type": "FAQPage", mainEntity: faq.map(function (q) {
      return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) } : null
  ].filter(Boolean) });
  var hoved = ramme.hoved(titel, p.kort, "https://gulplade.dk" + sti, schema,
    p.hero ? "https://gulplade.dk" + p.hero.billede : null);
  if (p.eksempel || p.forhaand || p.udkast) hoved = hoved.replace('<meta charset="UTF-8">',
    '<meta charset="UTF-8">\n<meta name="robots" content="noindex, nofollow">');

  var bilKort = function (r, i) {
    var b = r.bil;
    return '<a class="vb-kort" href="' + bilSti(b) + '#indretning" data-vaelg="' + esc(b.id) + '"' +
      (i === 0 ? ' aria-current="true"' : '') + spor(p, b, "profil-model") + '>' +
      (b.billede ? '<img src="' + esc(b.billede) + '" alt="" width="320" height="200" loading="lazy" decoding="async">' : '') +
      '<span class="vb-kort__navn">' + esc(b.maerke + " " + b.model) + '</span>' +
      '<span class="vb-kort__info">' + r.mods.length + ' moduler' + (r.fra ? ' · opstilling fra ' + kr(r.fra) : '') + '</span></a>';
  };
  var panel = function (r, i) {
    var b = r.bil, navn = b.maerke + " " + b.model;
    return [
      '<div class="vb-panel" id="bil-' + esc(b.id) + '" data-panel="' + esc(b.id) + '"' + (i === 0 ? '' : ' hidden') + '>',
      '  <div class="vb-panel__hoved"><h3>Xpress til ' + esc(navn) + '</h3>' +
        '<p>' + (b.nyttelast_kg ? 'Nyttelast før indretning: ' + tal(b.nyttelast_kg) + ' kg. ' : '') +
        '<a href="' + bilSti(b) + '">Se ' + esc(b.model) + ' med leasingtilbud og mål</a></p></div>',
      r.pakker.length ? '  <div class="pblok__pakker">\n' + r.pakker.map(function (k) { return pakkeKort(p, k, b); }).join("\n") + '\n  </div>' : '',
      '  <details class="pblok__alle">',
      '    <summary>Se alle ' + r.mods.length + ' moduler til ' + esc(b.model) + ' enkeltvis</summary>',
      '    <div class="pblok__moduler">\n' + r.mods.map(function (x) { return modulKort(p, x, b); }).join("\n") + '\n    </div>',
      '  </details>',
      '</div>'
    ].filter(Boolean).join("\n");
  };
  var fakta = [
    [String(pr.length), "modeller på Gulplade.dk"],
    [String(alleMods.length), "færdige Xpress-moduler"],
    [modulPriser.length ? "fra " + tal(Math.min.apply(null, modulPriser)) + " kr." : "", "pr. modul ekskl. moms"],
    ["5 år", "garanti på SR5"]
  ].filter(function (f) { return f[0]; });

  return [
    hoved,
    ramme.header(),
    '<main id="indhold" class="partner-side' + (p.farver ? ' partner-side--brand' : '') + '"' + brandStil(p) + '>',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li>' +
      '<li><a href="/til-varebilen/">Til varebilen</a></li>' +
      '<li><a href="/til-varebilen/' + p.emne + '/">' + esc(emne) + '</a></li>' +
      '<li aria-current="page">' + esc(p.navn) + '</li></ol></nav>',

    '<section class="profil-hero">',
    '  <div class="profil-hero__tekst">',
    '    <p class="pblok__over">' + maerkat(p) + '</p>',
    p.logo ? '    <img class="profil-hero__logo" src="' + esc(p.logo) + '" alt="' + esc(p.navn) + '" width="225" height="53">' : '',
    '    <h1>' + esc(p.navn) + ' bilindretning</h1>',
    '    <p class="profil-hero__manchet">' + esc(p.kort) + '</p>',
    '    <p class="pblok__knapper"><a class="knap knap--primaer" href="' +
      esc(mailHref(p, "Tilbud på " + emne.toLowerCase())) + '"' + spor(p, null, "profil") + lead(p, null) + '>Få et tilbud</a>' +
      (pr.length ? '<a class="knap knap--sekundaer" href="#vaelg-bil">Find din bil</a>' : '') + '</p>',
    '  </div>',
    p.hero ? '  <figure class="profil-hero__billede"><img src="' + esc(p.hero.billede) + '" alt="' + esc(p.hero.tekst) +
      '" width="' + (p.hero.w || 1390) + '" height="' + (p.hero.h || 680) + '" decoding="async" fetchpriority="high"><figcaption>' + esc(p.hero.tekst) + '</figcaption></figure>' : '',
    '</section>',
    fakta.length ? '<dl class="tg-noegle profil-fakta">' + fakta.map(function (f) {
      return '<div><dt>' + esc(f[1]) + '</dt><dd>' + esc(f[0]) + '</dd></div>'; }).join("") + '</dl>' : '',

    p.fordele ? [
      '<section class="sektion--kort">',
      '  <h2>Derfor ' + esc(p.navn) + '</h2>',
      '  <div class="fordele">' + p.fordele.map(function (f, i) {
        return '<div class="fordel"><span class="fordel__nr">' + (i + 1) + '</span><h3>' + esc(f.titel) + '</h3><p>' + esc(f.tekst) + '</p></div>'; }).join("") + '</div>',
      '</section>'
    ].join("\n") : '',

    pr.length ? [
      '<section class="sektion--kort pblok" id="vaelg-bil">',
      '  <h2>Find indretningen til din bil</h2>',
      '  <p class="pblok__manchet">Vælg bilen. Opstillingerne er de færdige Xpress-moduler, som ' + esc(p.navn) +
        ' opgiver passer til modellen, og nyttelasten er regnet på netop den bil.</p>',
      '  <div class="vb-vaelger" role="list">' + pr.map(bilKort).join("") + '</div>',
      pr.map(panel).join("\n"),
      '  ' + kildeHTML(p, null),
      '</section>',
      // Vaelgeren: uden JavaScript linker kortene til modelsiden, og den foerste bil vises.
      '<script>(function(){var s=document.getElementById("vaelg-bil");if(!s)return;' +
        's.addEventListener("click",function(e){var a=e.target.closest("[data-vaelg]");if(!a)return;e.preventDefault();' +
        'var id=a.getAttribute("data-vaelg");s.querySelectorAll("[data-panel]").forEach(function(p){p.hidden=p.getAttribute("data-panel")!==id;});' +
        's.querySelectorAll("[data-vaelg]").forEach(function(k){if(k===a)k.setAttribute("aria-current","true");else k.removeAttribute("aria-current");});' +
        'var p=document.getElementById("bil-"+id);if(p)p.scrollIntoView({behavior:"smooth",block:"start"});});})();</script>'
    ].join("\n") : '',

    p.linjer ? [
      '<section class="sektion--kort">',
      '  <h2>Produktlinjer</h2>',
      '  <div class="linjer linjer--billeder">' + p.linjer.map(function (l) {
        return '<article class="linje">' + (l.billede ? '<img src="' + esc(l.billede) + '" alt="' + esc(l.navn) + '" loading="lazy" decoding="async">' : '') +
          '<div class="linje__tekst"><h3>' + esc(l.navn) + '</h3><p>' + esc(l.tekst) + '</p></div></article>'; }).join("") + '</div>',
      '</section>'
    ].join("\n") : '',

    '<section class="sektion--kort profil-om">',
    '  <div>',
    '    <h2>Om ' + esc(p.navn) + '</h2>',
    p.om.map(function (t) { return '    <p>' + esc(t) + '</p>'; }).join("\n"),
    '  </div>',
    '  <dl class="partner__fakta"><div><dt>Leverer i</dt><dd>' + esc(p.omraade) + '</dd></div>' +
      (p.leveringstid ? '<div><dt>Leveringstid</dt><dd>' + esc(p.leveringstid) + '</dd></div>' : '') + '</dl>',
    '</section>',

    p.proces ? [
      '<section class="sektion--kort">',
      '  <h2>Sådan foregår det</h2>',
      '  <ol class="tg-proces">' + p.proces.map(function (t, i) {
        return '<li><span class="tg-proces__nr">' + (i + 1) + '</span><strong>' + esc(t[0]) + '</strong><p>' + esc(t[1]) + '</p></li>'; }).join("") + '</ol>',
      '  <p class="pblok__knapper"><a class="knap knap--primaer" href="' + esc(mailHref(p, "Tilbud på " + emne.toLowerCase())) + '"' +
        spor(p, null, "profil-proces") + lead(p, null) + '>Få et tilbud</a></p>',
      '</section>'
    ].join("\n") : '',

    faq.length ? [
      '<section class="sektion--kort">',
      '  <h2>Spørgsmål om ' + esc(p.navn) + '</h2>',
      faq.map(function (q) { return '  <details class="faq__punkt"><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join("\n"),
      '</section>'
    ].join("\n") : '',

    '<section class="sektion">',
    p.kilder ? '  <p class="pblok__kilde">Kilder: ' + p.kilder.map(function (k) {
      return '<a href="' + esc(k.url) + '" rel="noopener">' + esc(k.navn) + '</a>'; }).join(", ") +
      (p.kilde_dato ? ', set den ' + esc(datoDa(p.kilde_dato)) : '') + '.</p>' : '',
    '  <p>Læs også: <a href="/til-varebilen/' + p.emne + '/">' + esc(emne) + ' af varebil</a> med mål, vægt og pris.</p>',
    '  ' + noteHTML(),
    '</section>',
    '</main>',
    ramme.footer(),
    '</body></html>'
  ].filter(Boolean).join("\n");
}

module.exports = { alle: alle, emneBlok: emneBlok, modelBlok: modelBlok, profilSide: profilSide };
