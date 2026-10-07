// indretning-sider.js — undersider under /til-varebilen/indretning/
//
// Fanger soegningerne omkring indretning, som hovedsiden ikke kan daekke alene:
// - en side pr. varebil ("indretning ford transit custom"). Modeller med samme
//   maerke og samme lastrum (fx diesel og el) deler side, saa der ikke bliver
//   naesten ens sider.
// - fag (toemrer, elektriker, VVS, service), regler, brugt og skuffer.
//
// Alle tal regnes af varebiler.json og af modulerne i tilvalg.json (emnet
// indretning, feltet data). Siderne er redaktionelle; en partnerblok kommer kun
// med paa bilsiderne via partnere.modelBlok, og kun hvor en partner er aktiv.

var fs = require("fs");
var path = require("path");

var VISUEL = require("./tilvalg-visuel.js");
var FIGUR = require("./tilvalg-figurer.js");

var BASE_URL = "https://gulplade.dk";
// Nye sider ("ny": true) kommer kun med i preview-bygninger; se generate-tilvalg.js.
var MED_NYE = process.env.GULPLADE_TILVALG_NY === "1";
function aktiv(x) { return x && (!x.ny || MED_NYE); }
var ROD = "/til-varebilen/indretning/";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function slug(s) {
  return String(s || "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ë/g, "e")
    .replace(/[./]+/g, "-").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function tal(v, dec) {
  return Number(v).toLocaleString("da-DK", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
}
function bilSti(b) { return "/varebiler/" + slug(b.maerke) + "/" + slug(b.model) + "/"; }

// ── Data ─────────────────────────────────────────────────────────────────────

var _d = null;
function data() {
  if (_d) return _d;
  var biler = JSON.parse(fs.readFileSync(path.join(__dirname, "varebiler.json"), "utf8")).varebiler;
  var t = JSON.parse(fs.readFileSync(path.join(__dirname, "tilvalg.json"), "utf8"));
  var ind = t.emner.filter(function (e) { return e.slug === "indretning"; })[0];
  var D = ind.data;
  var modul = function (id) { return D.moduler.filter(function (m) { return m.id === id; })[0]; };
  var opstillinger = D.opstillinger.map(function (o) {
    return { navn: o.navn, kg: o.moduler.reduce(function (a, id) { return a + modul(id).vaegt_kg; }, 0),
             pris: o.moduler.reduce(function (a, id) { return a + modul(id).pris; }, 0) };
  }).sort(function (a, b) { return a.kg - b.kg; });
  var dybde = modul(D.venstre).dybde_mm;

  var egnet = biler.filter(function (b) {
    var l = b.lastrum || {};
    return b.karrosseri === "kassevogn" && l.laengde_mm && l.bredde_mellem_hjulkasser_mm && l.hoejde_mm && b.nyttelast_kg;
  });
  // Grupper: samme maerke og samme lastrum. Den foerste i datafilen (oftest den
  // mest populaere) giver navn og adresse.
  var grupper = [], noegle = {};
  egnet.forEach(function (b) {
    var l = b.lastrum, k = [b.maerke, l.laengde_mm, l.bredde_mellem_hjulkasser_mm, l.hoejde_mm].join("|");
    if (!noegle[k]) { noegle[k] = { biler: [], slug: slug(b.maerke) + "-" + slug(b.model) }; grupper.push(noegle[k]); }
    noegle[k].biler.push(b);
  });
  grupper.forEach(function (g) { g.hoved = g.biler[0]; });
  var tilBil = {};
  grupper.forEach(function (g) { g.biler.forEach(function (b) { tilBil[b.id] = g; }); });
  return (_d = { biler: biler, egnet: egnet, grupper: grupper, tilBil: tilBil, D: D, modul: modul,
                 opstillinger: opstillinger, dybde: dybde, kilde: D.kilde });
}

// Adressen til en bils indretningsside (bruges af modelsiderne).
function stiForBil(bil) {
  var g = data().tilBil[bil.id];
  return g ? ROD + g.slug + "/" : null;
}

// ── Faelles byggeklodser ─────────────────────────────────────────────────────

function krumme(navn) {
  return '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li><a href="/til-varebilen/">Til varebilen</a></li>' +
    '<li><a href="' + ROD + '">Indretning</a></li><li aria-current="page">' + esc(navn) + '</li></ol></nav>';
}
function schema(sti, titel, desc, navn, faq) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forsiden", item: BASE_URL + "/" },
      { "@type": "ListItem", position: 2, name: "Til varebilen", item: BASE_URL + "/til-varebilen/" },
      { "@type": "ListItem", position: 3, name: "Indretning", item: BASE_URL + ROD },
      { "@type": "ListItem", position: 4, name: navn }] },
    { "@type": "Article", headline: titel, description: desc, inLanguage: "da-DK", mainEntityOfPage: BASE_URL + sti,
      publisher: { "@type": "Organization", name: "Gulplade.dk", url: BASE_URL + "/" }, dateModified: new Date().toISOString().slice(0, 10) },
    faq && faq.length ? { "@type": "FAQPage", mainEntity: faq.map(function (q) {
      return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: String(q[1]).replace(/<[^>]+>/g, "") } }; }) } : null
  ].filter(Boolean) });
}
function faqHTML(faq) {
  if (!faq || !faq.length) return "";
  return '<section class="sektion"><h2>Ofte stillede spørgsmål</h2>' + faq.map(function (q) {
    return '<details class="faq__punkt"><summary>' + esc(q[0]) + '</summary><p>' + q[1] + '</p></details>'; }).join("") + '</section>';
}
function kortHTML(kort) {
  return '<div class="emnekort">' + kort.map(function (k) {
    return '<div class="emnekort__kort"><h3>' + esc(k[0]) + '</h3><p>' + k[1] + '</p></div>'; }).join("") + '</div>';
}
function side(r, o) {
  // o: sti, titel (title), h1, desc, navn (kruemmesti), manchet, indhold[], faq,
  //    hero (html), kort (kort fortalt), stribe (tilvalg-visuel.js)
  // Sektionerne faar id'er, saa "Paa siden" kan linke til dem (05-10-2026).
  var overskrifter = [];
  var indhold = o.indhold.filter(Boolean).join("\n").replace(/<section class="sektion"><h2>([^<]+)<\/h2>/g, function (_, h) {
    var ren = h.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    overskrifter.push({ overskrift: ren });
    return '<section class="sektion" id="' + VISUEL.idFra(ren) + '"><h2>' + h + '</h2>';
  });
  return [
    r.hoved(r.titel(o.titel), o.desc, BASE_URL + o.sti, schema(o.sti, o.h1, o.desc, o.navn, o.faq), o.billede || null),
    r.header(),
    '<main id="indhold">',
    krumme(o.navn),
    '<section class="hero-ny"><p class="hero-ny__over"><span>Indretning af varebil</span></p>',
    '<h1>' + esc(o.h1) + '</h1><p class="hero-ny__manchet">' + o.manchet + '</p>' + (o.hero || VISUEL.heroSVG("indretning")) + '</section>',
    VISUEL.kortFortalt(o.kort),
    VISUEL.toc(overskrifter),
    indhold,
    VISUEL.stribe(o.stribe || { pr_stoerrelse: true }, data().biler),
    faqHTML(o.faq),
    '<section class="sektion"><h2>Mere om indretning</h2><ul class="viden__liste">' +
      '<li><a href="' + ROD + '"><strong>Indretning af varebil</strong></a>: moduler, vægt, pris og regler</li>' +
      alleFag().filter(function (f) { return ROD + f.slug + "/" !== o.sti; }).map(function (f) {
        return '<li><a href="' + ROD + f.slug + '/"><strong>' + esc(f.navn) + '</strong></a></li>'; }).join("") +
      ['regler', 'skuffer', 'brugt'].filter(function (s) { return ROD + s + "/" !== o.sti; }).map(function (s) {
        return '<li><a href="' + ROD + s + '/"><strong>' + esc(EKSTRA[s].navn) + '</strong></a></li>'; }).join("") +
      (r.ekstra || []).filter(function (x) { return x.sti !== o.sti; }).map(function (x) {
        return '<li><a href="' + x.sti + '"><strong>' + esc(x.navn) + '</strong></a></li>'; }).join("") +
      '</ul></section>',
    '</main>',
    r.footer(),
    '</body></html>'
  ].join("\n");
}

// Snit set bagfra med to moduler; samme tegnestil som hovedsiden.
function snit(b, dybde, hoejde) {
  var l = b.lastrum, B = l.bredde_max_mm || l.bredde_mellem_hjulkasser_mm, H = l.hoejde_mm;
  var t = 300 / B, x1 = 60, yb = 40 + H * t, SW = B * t, SH = H * t;
  var d = dybde * t, mh = Math.min(hoejde, H - 100) * t, hk = (B - l.bredde_mellem_hjulkasser_mm) / 2 * t;
  var gang = B - 2 * dybde;
  var pil = '<defs><marker id="pil" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker>' +
    '<pattern id="skraa" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" class="tg-skraa"/></pattern></defs>';
  var m = function (x1_, y1, x2, y2, tx, side_) {
    var v = y1 === y2;
    return '<g class="tg-maal"><line x1="' + x1_ + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" marker-start="url(#pil)" marker-end="url(#pil)"/>' +
      (v ? '<text x="' + ((x1_ + x2) / 2) + '" y="' + (y1 + (side_ === "under" ? 15 : -6)) + '" text-anchor="middle">' + tx + '</text>'
         : '<text x="' + (x1_ - 6) + '" y="' + ((y1 + y2) / 2 + 4) + '" text-anchor="end">' + tx + '</text>') + '</g>';
  };
  var svg = '<svg viewBox="0 0 400 ' + Math.round(yb + 60) + '" role="img" aria-label="Lastrummet i ' + esc(b.maerke + " " + b.model) + ' set bagfra med to reolmoduler">' + pil +
    '<path class="tg-rum" d="M' + x1 + ',' + yb + ' V' + (yb - SH + 14) + ' Q' + x1 + ',' + (yb - SH) + ' ' + (x1 + 14) + ',' + (yb - SH) +
      ' H' + (x1 + SW - 14) + ' Q' + (x1 + SW) + ',' + (yb - SH) + ' ' + (x1 + SW) + ',' + (yb - SH + 14) + ' V' + yb + ' Z"/>' +
    '<rect class="tg-hjul" x="' + x1 + '" y="' + (yb - 40) + '" width="' + hk + '" height="40"/>' +
    '<rect class="tg-hjul" x="' + (x1 + SW - hk) + '" y="' + (yb - 40) + '" width="' + hk + '" height="40"/>' +
    (gang >= 500 ? '<rect class="tg-modul" x="' + x1 + '" y="' + (yb - mh) + '" width="' + d + '" height="' + mh + '"/>' +
      '<rect class="tg-modul" x="' + (x1 + SW - d) + '" y="' + (yb - mh) + '" width="' + d + '" height="' + mh + '"/>' +
      m(x1 + d, yb - mh / 2, x1 + SW - d, yb - mh / 2, '<tspan class="tg-fremhaev">' + tal(gang) + ' fri gang</tspan>') : '') +
    '<line class="tg-gulvlinje" x1="' + (x1 - 8) + '" y1="' + yb + '" x2="' + (x1 + SW + 8) + '" y2="' + yb + '"/>' +
    m(x1 - 20, yb - SH, x1 - 20, yb, tal(H)) +
    m(x1, yb + 20, x1 + SW, yb + 20, tal(B), "under") +
    m(x1 + hk, yb + 42, x1 + SW - hk, yb + 42, tal(l.bredde_mellem_hjulkasser_mm) + ' mellem hjulkasser', "under") +
    '</svg>';
  return '<figure class="tg tg--lille">' + svg + '<figcaption>Set bagfra. Mål i mm. Modulerne er ' + tal(dybde) +
    ' mm dybe. Tagets form og hjulkassernes højde er tegnet skematisk.</figcaption></figure>';
}

// Lastrummet set ovenfra med de to moduler fra hovedsiden: det lange i venstre
// side og det korte i hoejre side, begge fra skillevaeggen. Fronten til hoejre,
// saa venstre side staar oeverst. Returnerer "" hvis modulerne ikke kan vaere der.
function plan(b) {
  var X = data(), l = b.lastrum, L = l.laengde_mm, B = l.bredde_max_mm;
  var v = X.modul(X.D.venstre), h = X.modul(X.D.hoejre);
  if (!B || v.laengde_mm > L || h.laengde_mm > L || B - v.dybde_mm - h.dybde_mm < 300) return "";
  var t = 290 / L, x0 = 60, y0 = 34, W = L * t, H = B * t, xf = x0 + W;
  var gang = B - v.dybde_mm - h.dybde_mm;
  var pil = '<defs><marker id="planpil" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>';
  var maal = function (x1, y1, x2, y2) { return '<line class="tg-pil" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" marker-start="url(#planpil)" marker-end="url(#planpil)"/>'; };
  var vy = y0, vh = v.dybde_mm * t, hh = h.dybde_mm * t, hy = y0 + H - hh;
  var midt = y0 + vh + (H - vh - hh) / 2;
  var svg = '<svg viewBox="0 0 400 ' + Math.round(y0 + H + 46) + '" role="img" aria-label="Lastrummet i ' + esc(b.maerke + " " + b.model) +
    ' set ovenfra med et langt modul i venstre side, et kort modul i højre side og ' + tal(gang) + ' mm fri gang imellem.">' + pil +
    '<rect class="tg-rum" x="' + x0 + '" y="' + y0 + '" width="' + W + '" height="' + H + '"/>' +
    '<rect class="tg-modul" x="' + (xf - v.laengde_mm * t) + '" y="' + vy + '" width="' + (v.laengde_mm * t) + '" height="' + vh + '"/>' +
    '<rect class="tg-modul" x="' + (xf - h.laengde_mm * t) + '" y="' + hy + '" width="' + (h.laengde_mm * t) + '" height="' + hh + '"/>' +
    '<text class="tg-modul__tekst" x="' + (xf - 8) + '" y="' + (vy + vh / 2 + 4) + '" text-anchor="end">VENSTRE ' + tal(v.laengde_mm) + ' MM</text>' +
    '<text class="tg-modul__tekst" x="' + (xf - 8) + '" y="' + (hy + hh / 2 + 4) + '" text-anchor="end">HØJRE ' + tal(h.laengde_mm) + ' MM</text>' +
    maal(x0 + 30, y0 + vh, x0 + 30, y0 + H - hh) +
    '<text class="tg-fremhaev" x="' + (x0 + 38) + '" y="' + (midt + 4) + '">' + tal(gang) + ' mm fri gang</text>' +
    '<line class="tg-gulvlinje" x1="' + xf + '" y1="' + (y0 - 6) + '" x2="' + xf + '" y2="' + (y0 + H + 6) + '"/>' +
    '<text class="tg-lille" x="' + (xf + 8) + '" y="' + (y0 + H / 2 + 4) + '">FRONT</text>' +
    maal(x0, y0 - 14, xf, y0 - 14) +
    '<text x="' + (x0 + W / 2) + '" y="' + (y0 - 20) + '" text-anchor="middle">' + tal(L) + ' mm</text>' +
    maal(x0 - 14, y0, x0 - 14, y0 + H) +
    '<text x="' + (x0 - 20) + '" y="' + (y0 + H / 2 + 4) + '" text-anchor="end">' + tal(B) + '</text>' +
    '<text class="tg-lille" x="' + x0 + '" y="' + (y0 + H + 22) + '">BAGDØRE TIL VENSTRE · SET OVENFRA · MÅL I MM</text>' +
    '</svg>';
  return FIGUR.figur({ type: "svg", svg: svg, tekst: "Tegningen er skematisk og viser lastrummet set ovenfra med modulerne fra " +
    esc(X.kilde.split(",")[0]) + ". De er " + tal(v.dybde_mm) + " mm dybe og står op ad skillevæggen." });
}

// De fem grupper, hvis lastrum ligger naermest i laengde, med bilen selv.
function naermeste(g) {
  var X = data(), L = g.hoved.lastrum.laengde_mm;
  return X.grupper.slice().sort(function (a, b) {
    return Math.abs(a.hoved.lastrum.laengde_mm - L) - Math.abs(b.hoved.lastrum.laengde_mm - L);
  }).slice(0, 5).sort(function (a, b) { return b.hoved.lastrum.laengde_mm - a.hoved.lastrum.laengde_mm; });
}

// ── Bilsider ─────────────────────────────────────────────────────────────────

function bilSide(g, r, partnere) {
  var X = data(), b = g.hoved, l = b.lastrum, navn = b.maerke + " " + b.model;
  var B = l.bredde_max_mm, gang2 = B ? B - 2 * X.dybde : null, gang1 = B ? B - X.dybde : null;
  var sti = ROD + g.slug + "/";
  var andre = g.biler.slice(1).map(function (x) { return x.maerke + " " + x.model; });
  var nyt = g.biler.map(function (x) { return x.nyttelast_kg; });
  var desc = "Indretning til " + navn + ": lastrum " + tal(l.laengde_mm) + " × " + tal(l.bredde_mellem_hjulkasser_mm) +
    " mm mellem hjulkasserne, fri gang med reoler i begge sider og nyttelast efter indretning.";

  var raekker = g.biler.map(function (x) {
    return '<tr><th scope="row"><a href="' + bilSti(x) + '">' + esc(x.maerke + " " + x.model) + '</a></th><td>' +
      tal(x.nyttelast_kg) + ' kg</td>' + X.opstillinger.map(function (o) {
        return '<td>' + tal(x.nyttelast_kg - o.kg) + ' kg</td>'; }).join("") + '</tr>';
  }).join("");

  var faq = [
    ["Hvor stort er lastrummet i " + navn + "?", "I den udgave af bilen, vi viser mål for, er lastrummet " + tal(l.laengde_mm) + " mm langt, " + (B ? tal(B) + " mm bredt, " : "") +
      tal(l.bredde_mellem_hjulkasser_mm) + " mm mellem hjulkasserne og " + tal(l.hoejde_mm) + " mm højt" +
      (l.volumen_m3 ? " (" + tal(l.volumen_m3, 1) + " m³)" : "") + "."],
    gang2 ? ["Hvor bred er gangen med reoler i begge sider?", "Med moduler på " + tal(X.dybde) + " mm i dybden i begge sider er der " +
      tal(gang2) + " mm fri gang. Med ét modul i venstre side er der " + tal(gang1) + " mm."] : null,
    ["Hvor meget nyttelast er der efter indretning?", "En opstilling med et modul i hver side vejer " + tal(X.opstillinger[0].kg) + "–" +
      tal(X.opstillinger[X.opstillinger.length - 1].kg) + " kg. Med " + tal(b.nyttelast_kg) + " kg nyttelast er der " +
      tal(b.nyttelast_kg - X.opstillinger[X.opstillinger.length - 1].kg) + "–" + tal(b.nyttelast_kg - X.opstillinger[0].kg) + " kg tilbage."]
  ].filter(Boolean);

  var lettest = X.opstillinger[0], tungest = X.opstillinger[X.opstillinger.length - 1];
  var str = VISUEL.stoerrelse(b);
  var egneTilbud = g.biler.filter(VISUEL.harTilbud);
  var sammen = naermeste(g);
  return side(r, {
    // Bilens eget foto som topbillede (05-10-2026). Ingen foto: tegningen.
    hero: b.billede ? '<figure class="tv-hero tv-hero--foto"><img src="' + esc(b.billede) + '" alt="' + esc(navn) +
      '" width="800" height="500" fetchpriority="high" decoding="async"></figure>' : null,
    kort: [
      gang2 ? ["Fri gang", tal(gang2) + " mm", "med " + tal(X.dybde) + " mm dybe reoler i begge sider"] : ["Mellem hjulkasser", tal(l.bredde_mellem_hjulkasser_mm) + " mm", "lastrummets smalleste sted"],
      ["Nyttelast efter indretning", tal(b.nyttelast_kg - tungest.kg) + "–" + tal(b.nyttelast_kg - lettest.kg) + " kg", "med et modul i hver side"],
      ["Lastrum", tal(l.laengde_mm) + " mm", "langt" + (l.volumen_m3 ? ", " + tal(l.volumen_m3, 1) + " m³" : "")],
      ["Opstilling", PRIS().op + " kr.", "for et modul i hver side, uden gulv og montering"]
    ],
    stribe: {
      ids_valgfri: g.biler.map(function (x) { return x.id; }), fyld: str,
      titel: egneTilbud.length ? "Tilbud lige nu på " + egneTilbud.map(function (x) { return x.maerke + " " + x.model; })[0] +
        (egneTilbud.length < 3 && str ? " og varebiler i samme størrelse" : "") : "Tilbud lige nu på varebiler i samme størrelse"
    },
    sti: sti, navn: navn, faq: faq, desc: desc, billede: b.billede ? BASE_URL + b.billede.replace(/\.webp$/, "-del.jpg") : null,
    titel: "Indretning til " + navn + ": mål og vægt",
    h1: "Indretning til " + navn,
    manchet: "Lastrummet i " + esc(navn) + " er " + tal(l.laengde_mm) + " mm langt og " + tal(l.bredde_mellem_hjulkasser_mm) +
      " mm bredt mellem hjulkasserne. Her kan du se de mål, du planlægger indretningen efter, og hvor meget nyttelast den tager." +
      (andre.length ? " Siden gælder også " + esc(andre.join(" og ")) + ", der har samme lastrum." : ""),
    indhold: [
      '<section class="sektion"><h2>Lastrumsmål</h2>',
      '<div class="ind-maal">',
      '<dl class="ind-tal">' +
        [["Længde", l.laengde_mm, "mm"], ["Bredde", B, "mm"], ["Mellem hjulkasser", l.bredde_mellem_hjulkasser_mm, "mm"],
         ["Højde", l.hoejde_mm, "mm"], ["Volumen", l.volumen_m3, "m³"], ["Læssehøjde", l.laesserhoejde_mm, "mm"],
         ["Nyttelast", b.nyttelast_kg, "kg"]].filter(function (x) { return x[1]; }).map(function (x) {
          return '<div><dt>' + x[0] + '</dt><dd>' + tal(x[1], x[2] === "m³" ? 1 : 0) + ' <span>' + x[2] + '</span></dd></div>'; }).join("") +
      '</dl>',
      snit(b, X.dybde, 1130),
      '</div>',
      '<p class="kilde">Målene gælder den udgave af bilen, vi viser på <a href="' + bilSti(b) + '">modelsiden</a>. Der kan du også se kilde og dato. Længere og højere udgaver har større lastrum.</p>',
      '</section>',
      gang2 ? '<section class="sektion"><h2>Plads til reoler</h2><p>Med moduler på ' + tal(X.dybde) + ' mm i dybden giver to moduler ' +
        tal(gang2) + ' mm fri gang, og ét modul i venstre side giver ' + tal(gang1) + ' mm. Det lange modul sidder i venstre side, ' +
        'det korte i højre side bag skydedøren. Højden på ' + tal(l.hoejde_mm) + ' mm giver plads over modulerne til lange emner.</p>' + plan(b) + '</section>' : '',
      '<section class="sektion"><h2>Lastrummet sammenlignet</h2><p>Søjlerne viser lastrummets længde i ' + esc(navn) +
        ' og i de fire modeller, der kommer tættest på i længde.</p>' +
        FIGUR.figur({ type: "soejler", enhed: "mm", data: sammen.map(function (x) {
          return [x.hoved.maerke + " " + x.hoved.model, x.hoved.lastrum.laengde_mm, x === g ? "denne bil" : tal(x.hoved.lastrum.bredde_mellem_hjulkasser_mm) + " mm mellem hjulkasser"];
        }), note: "Målene gælder den udgave af hver bil, vi viser på modelsiden." }) +
        '<p class="maerkelinks">' + sammen.filter(function (x) { return x !== g; }).map(function (x) {
          return '<a href="' + ROD + x.slug + '/">Indretning til ' + esc(x.hoved.maerke + " " + x.hoved.model) + '</a>'; }).join("") + '</p></section>',
      '<section class="sektion"><h2>Nyttelast efter indretning</h2>',
      '<p>Søjlerne viser, hvor meget der er tilbage af de ' + tal(b.nyttelast_kg) + ' kg nyttelast med tre typiske opstillinger. Hver opstilling har et modul i hver side.</p>',
      FIGUR.figur({ type: "soejler", enhed: "kg", max: b.nyttelast_kg, data: X.opstillinger.map(function (o) {
        return [o.navn, Math.round(b.nyttelast_kg - o.kg), "indretningen vejer " + tal(o.kg) + " kg"]; }) }),
      g.biler.length > 1 ? '<p>I tabellen kan du se nyttelasten efter indretning for hver model med samme lastrum.</p>' : '',
      // Tabellen kun, naar flere modeller deler siden. Ellers viser soejlerne det hele.
      g.biler.length < 2 ? '' : '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel tg-tabel tg-maal-tabel"><thead><tr><th scope="col">Model</th><th scope="col">Nyttelast</th>' +
        X.opstillinger.map(function (o) { return '<th scope="col">' + esc(o.navn) + ' (' + tal(o.kg) + ' kg)</th>'; }).join("") +
        '</tr></thead><tbody>' + raekker + '</tbody></table></div>',
      '<p class="kilde">Modulvægte: ' + esc(X.kilde) + '</p>',
      '</section>',
      partnere ? partnere.modelBlok(b) : '',
      '<section class="sektion"><h2>Pris</h2><p>Færdige moduler til mellemstore varebiler koster ' + PRIS().modul + ' kr. pr. modul. ' +
        'En opstilling med et modul i hver side koster ' + PRIS().op + ' kr., og gulv og montering kommer oveni. Alle priser er uden moms. ' +
        'Se <a href="' + ROD + '">priser pr. meter og moduler</a>. Du kan ofte få indretningen med i leasingaftalen på ' +
        '<a href="' + bilSti(b) + '">' + esc(navn) + '</a>.</p></section>'
    ]
  });
}

function PRIS() {
  var X = data(), p = X.D.moduler.map(function (m) { return m.pris; }), o = X.opstillinger.map(function (x) { return x.pris; });
  var r = function (v) { return tal(Math.round(v / 100) * 100); };
  return { modul: r(Math.min.apply(null, p)) + "–" + r(Math.max.apply(null, p)), op: r(Math.min.apply(null, o)) + "–" + r(Math.max.apply(null, o)) };
}

// ── Fag ──────────────────────────────────────────────────────────────────────

var FAG = [
  { slug: "toemrer", navn: "Indretning til tømrer", kort: "tømrer og snedker",
    manchet: "En tømrerbil skal have plads til maskiner i kufferter, beslag og skruer og til plader og lange emner. Indretningen er derfor ofte åben, med fri midtergang og et tagsystem.",
    kort_: [["Venstre side", "Hylder til maskinkufferter og smådelskasser til skruer og beslag."],
            ["Højre side", "Åbne bakker til materialer og forbrugsvarer bag skydedøren."],
            ["Midtergang", "Fri til plader, lægter og lange emner."],
            ["Taget", "Tagsystem til stiger og lange emner."]],
    vaegt: "En åben opstilling uden skuffer vejer mindst og efterlader mest nyttelast til materialer.",
    liste: "laengde", listeTitel: "Varebiler med det længste lastrum" },
  { slug: "elektriker", navn: "Indretning til elektriker", kort: "elektriker",
    manchet: "En elektrikerbil skal holde styr på mange små dele: dåser, stik, kabelsko og fittings, og den skal have plads til kabeltromler og stiger.",
    kort_: [["Smådelskasser", "Mange kasser med inddelinger til installationsmateriel."],
            ["Skuffer", "Til håndværktøj og måleudstyr."],
            ["Forneden", "Plads til kabeltromler og tungt materiel."],
            ["Taget", "Tagsystem til stiger."]],
    vaegt: "Mange skuffer og kasser giver orden, men vejer mere. Et modul med tre skuffer vejer to til tre gange så meget pr. meter som hylder.",
    liste: "volumen", listeTitel: "Varebiler med størst lastrum" },
  { slug: "vvs", navn: "Indretning til VVS", kort: "VVS og blik",
    manchet: "En VVS-bil kører med tungt materiel: fittings, rør, pressemaskine og værktøj. Indretningen skal derfor bære meget og holde rør og maskiner fast.",
    kort_: [["Skuffer", "Tunge skuffer til fittings og værktøj."],
            ["Maskiner", "Fast plads til pressemaskine og kufferter."],
            ["Rør", "Rørholder på taget eller i varerummet."],
            ["Lastsikring", "Surringsskinner til rør og tunge emner."]],
    vaegt: "Med tunge skuffer og meget materiel betyder nyttelasten mest. Listen herunder viser modellerne med størst nyttelast.",
    liste: "nyttelast", listeTitel: "Varebiler med størst nyttelast" },
  { slug: "service", navn: "Indretning til service og montage", kort: "service og montage",
    manchet: "En servicebil skal have reservedele og værktøj klar, så opgaven kan løses ved første besøg, og kufferter, der kan tages med ind hos kunden.",
    kort_: [["Kufferter", "Værktøj i kufferter, der låses i reolen og tages med ind."],
            ["Kasser efter opgave", "Reservedele sorteret i kasser, så de er hurtige at finde."],
            ["Skuffer", "Til tungt værktøj og måleudstyr."],
            ["Mindre bil", "Mange serviceopgaver kan klares i en mindre varebil."]],
    vaegt: "Kufferter og kasser vejer mindre end skuffer. En mindre varebil har mindre nyttelast, så vægten betyder relativt mere.",
    liste: "lille", listeTitel: "Mindre varebiler" }
];

// De faste fag plus nye fag fra tilvalg.json (emnet indretning, feltet fag_ekstra).
function alleFag() {
  var ind = JSON.parse(fs.readFileSync(path.join(__dirname, "tilvalg.json"), "utf8"))
    .emner.filter(function (e) { return e.slug === "indretning"; })[0];
  return FAG.concat((ind && ind.fag_ekstra) || []).filter(aktiv);
}

function fagUdvalg(f) {
  var X = data(), G = X.grupper.map(function (g) { return g.hoved; });
  var v = {
    laengde: function () { return G.slice().sort(function (a, b) { return b.lastrum.laengde_mm - a.lastrum.laengde_mm; }); },
    volumen: function () { return G.filter(function (b) { return b.lastrum.volumen_m3; }).sort(function (a, b) { return b.lastrum.volumen_m3 - a.lastrum.volumen_m3; }); },
    nyttelast: function () { return G.slice().sort(function (a, b) { return b.nyttelast_kg - a.nyttelast_kg; }); },
    lille: function () { return G.filter(function (b) { return b.lastrum.laengde_mm < 2300; }).sort(function (a, b) { return b.nyttelast_kg - a.nyttelast_kg; }); }
  }[f.liste]().slice(0, 6);
  return v;
}

function fagListe(f) {
  var v = fagUdvalg(f);
  return '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel tg-tabel tg-maal-tabel"><thead><tr><th scope="col">Model</th>' +
    '<th scope="col">Længde</th><th scope="col">Mellem hjulkasser</th><th scope="col">Volumen</th><th scope="col">Nyttelast</th></tr></thead><tbody>' +
    v.map(function (b) {
      var l = b.lastrum;
      return '<tr><th scope="row"><a href="' + stiForBil(b) + '">' + esc(b.maerke + " " + b.model) + '</a></th><td>' + tal(l.laengde_mm) +
        ' mm</td><td>' + tal(l.bredde_mellem_hjulkasser_mm) + ' mm</td><td>' + (l.volumen_m3 ? tal(l.volumen_m3, 1) + ' m³' : '–') +
        '</td><td>' + tal(b.nyttelast_kg) + ' kg</td></tr>';
    }).join("") + '</tbody></table></div>';
}

function fagSide(f, r) {
  var X = data(), sti = ROD + f.slug + "/";
  var lettest = X.opstillinger[0], tungest = X.opstillinger[X.opstillinger.length - 1];
  var faq = [
    ["Hvilken indretning passer til " + f.kort + "?", f.kort_.map(function (k) { return k[0] + ": " + k[1].charAt(0).toLowerCase() + k[1].slice(1); }).join(" ")],
    ["Hvad vejer en indretning?", "En opstilling med et modul i hver side vejer " + tal(lettest.kg) + "–" + tal(tungest.kg) + " kg. Skuffer vejer mest."],
    ["Hvad koster en indretning?", "Færdige moduler koster " + PRIS().modul + " kr. pr. modul. En opstilling med et modul i hver side koster " + PRIS().op + " kr., og gulv og montering kommer oveni. Alle priser er uden moms."]
  ];
  var udvalg = fagUdvalg(f);
  var maal = {
    laengde: ["Lastrummets længde", "mm", function (b) { return b.lastrum.laengde_mm; }],
    volumen: ["Lastrummets volumen", "m³", function (b) { return b.lastrum.volumen_m3; }],
    nyttelast: ["Nyttelast", "kg", function (b) { return b.nyttelast_kg; }],
    lille: ["Nyttelast", "kg", function (b) { return b.nyttelast_kg; }]
  }[f.liste];
  return side(r, {
    kort: [
      ["Hylder og kasser", tal(lettest.kg) + " kg", "et modul i hver side"],
      ["Skuffer i begge sider", "op til " + tal(tungest.kg) + " kg", "et modul i hver side"],
      ["Pris pr. modul", PRIS().modul + " kr.", "uden moms"],
      ["Opstilling", PRIS().op + " kr.", "uden gulv og montering"]
    ],
    stribe: { ids_valgfri: udvalg.map(function (b) { return b.id; }), titel: "Tilbud lige nu på " + f.listeTitel.charAt(0).toLowerCase() + f.listeTitel.slice(1) },
    sti: sti, navn: f.navn, faq: faq,
    titel: f.navn + ": varebil med reoler og skuffer",
    h1: f.navn,
    desc: f.navn + " af varebil: typisk opstilling, vægt og nyttelast, og de varebiler, der passer bedst til " + f.kort + ".",
    manchet: f.manchet,
    indhold: [
      '<section class="sektion"><h2>Den typiske opstilling</h2>' + kortHTML(f.kort_) + '</section>',
      '<section class="sektion"><h2>Vægt og nyttelast</h2><p>' + f.vaegt + ' En opstilling med hylder og kasser vejer ' + tal(lettest.kg) +
        ' kg, en med skuffer i begge sider op til ' + tal(tungest.kg) + ' kg (' + esc(X.kilde) + ').</p>' +
        FIGUR.figur({ type: "soejler", enhed: "kg", data: X.opstillinger.map(function (o) { return [o.navn, Math.round(o.kg), "et modul i hver side"]; }),
          note: "Søjlerne viser, hvad hver opstilling vejer uden gulv og beslag." }) + '</section>',
      '<section class="sektion"><h2>' + esc(f.listeTitel) + '</h2><p>Målene gælder den udgave af bilen, vi viser på modelsiden. Klik for indretning til modellen.</p>' +
        FIGUR.figur({ type: "soejler", enhed: maal[1], data: udvalg.map(function (b) { return [b.maerke + " " + b.model, maal[2](b)]; }),
          note: "Søjlerne viser " + maal[0].toLowerCase() + ". I tabellen kan du se de andre mål." }) + fagListe(f) + '</section>'
    ]
  });
}

// ── Regler, skuffer og brugt ─────────────────────────────────────────────────

var EKSTRA = {
  regler: { navn: "Regler for indretning" },
  skuffer: { navn: "Skuffer til varebil" },
  brugt: { navn: "Brugt indretning" }
};

function reglerSide(r, g) {
  var faq = [
    ["Hvilke regler gælder for indretning af varebil?", "Færdselsloven kræver, at lasten er anbragt, så den ikke er til fare og ikke kan falde af. Sikringen dimensioneres efter 0,8 gange lastens vægt fremad og 0,5 gange til siderne og bagud (EN 12195-1). Er indretningen nødvendig for arbejdet, kan bilen være specialindrettet."],
    ["Hvornår er en varebil specialindrettet?", "Når der er et erhvervsmæssigt behov for indretningen, og den er nødvendig for arbejdet. Et skillerum alene er ikke nok."],
    ["Skal en indretning godkendes på forhånd?", "Skattestyrelsen godkender ikke en indretning på forhånd. Det afgøres ud fra, om betingelserne er opfyldt."]
  ];
  return side(r, {
    kort: [
      ["Fremad", "0,8 × lastens vægt", "den kraft, sikringen dimensioneres efter"],
      ["Til siderne og bagud", "0,5 × lastens vægt", "efter EN 12195-1"],
      ["Færdselsloven", "§ 82, stk. 3", "lasten må ikke være til fare"],
      ["Godkendelse på forhånd", "Nej", "Skattestyrelsen godkender ikke indretningen"]
    ],
    sti: ROD + "regler/", navn: "Regler", faq: faq,
    titel: "Regler for indretning af varebil",
    h1: "Regler for indretning af varebil",
    desc: "Regler for indretning af varebil: færdselslovens krav til lastsikring, kræfterne den dimensioneres efter, og hvornår en varebil er specialindrettet.",
    manchet: "To regelsæt er relevante for en indretning: kravene til lastsikring og reglerne for specialindrettede varebiler, som afgør, om kørsel mellem hjem og arbejde er i virksomhedens interesse.",
    indhold: [
      '<section class="sektion"><h2>Lastsikring</h2><p>Lasten skal være anbragt, så den ikke er til fare og ikke kan falde af (færdselslovens § 82, stk. 3). ' +
        'Sikringen dimensioneres efter kræfter på 0,8 gange lastens vægt fremad og 0,5 gange til siderne og bagud. Tallene kommer fra standarden EN 12195-1 ' +
        'og står også i bilag 3 til bekendtgørelse nr. 1655 af 5. december 2025, som gælder syn ved vejsiden af køretøjer over 3,5 t. En indretning har derfor surringsskinner og surringspunkter i reol og gulv, ' +
        'og kasser, kufferter og skuffer låses fast i modulerne under kørslen.</p>' + g.kraefter() + '</section>',
      '<section class="sektion"><h2>Specialindrettet varebil</h2><p>Kørsel mellem hjem og arbejde i en specialindrettet varebil anses for at være i virksomhedens interesse, ' +
        'når der er et erhvervsmæssigt behov for indretningen, og den er nødvendig for arbejdet. Et skillerum alene er ikke nok. ' +
        'Skattestyrelsen godkender ikke en indretning på forhånd. Reglen er gennemgået i <a href="/haandbogen/specialindretning-af-varebil/">specialindretning af varebil</a>.</p>' +
        FIGUR.figur({ type: "daekning", kolonner: ["Betingelse", "Specialindrettet varebil"], raekker: [
          ["Erhvervsmæssigt behov for indretningen", "Skal være opfyldt"], ["Nødvendig for arbejdet", "Skal være opfyldt"], ["Kun et skillerum", "Er ikke nok"]],
          note: "Tabellen viser betingelserne fra Håndbogens gennemgang af reglen." }) + '</section>',
      '<p class="kilde">Kilder: <a href="https://www.lovguiden.dk/loven/f%C3%A6rdselsloven/82" rel="noopener">Færdselsloven § 82</a>; <a href="https://www.lovguiden.dk/loven/bekendtgørelse-om-udførelse-af-syn-af-erhvervskøretøjer-ved-vejsiden/bilag-3" rel="noopener">BEK nr. 1655 af 05/12/2025, bilag 3</a>; ' +
        '<a href="/haandbogen/specialindretning-af-varebil/">Håndbogen: specialindretning</a>.</p>'
    ]
  });
}

function skufferSide(r) {
  var X = data();
  var ms = X.D.moduler.filter(function (m) { return m.type !== "hylder"; }).sort(function (a, b) { return a.pris / a.laengde_mm - b.pris / b.laengde_mm; });
  var hyl = X.D.moduler.filter(function (m) { return m.type === "hylder"; });
  var kgm = function (m) { return m.vaegt_kg / m.laengde_mm * 1000; };
  var spaend = function (l, rund) { var a = Math.min.apply(null, l), b = Math.max.apply(null, l); var f = function (v) { return tal(rund ? Math.round(v / rund) * rund : v); }; return f(a) + "–" + f(b); };
  var faq = [
    ["Hvad vejer skuffer i en varebil?", "Moduler med tre skuffer vejer " + spaend(X.D.moduler.filter(function (m) { return m.type === "skuffer"; }).map(kgm)) +
      " kg pr. meter reol mod " + spaend(hyl.map(kgm)) + " kg for hylder og kasser."],
    ["Hvad koster et skuffemodul?", "Moduler med skuffer koster " + spaend(ms.map(function (m) { return m.pris; }), 100) + " kr. ekskl. moms pr. modul."],
    ["Hvor sidder skufferne?", "Typisk i et kort modul i højre side bag skydedøren og forneden i det lange modul i venstre side, hvor de er lette at nå."]
  ];
  return side(r, {
    kort: [
      ["Skuffemoduler", spaend(X.D.moduler.filter(function (m) { return m.type === "skuffer"; }).map(kgm)) + " kg", "pr. meter reol"],
      ["Hylder og kasser", spaend(hyl.map(kgm)) + " kg", "pr. meter reol"],
      ["Moduler med skuffer", spaend(ms.map(function (m) { return m.pris; }), 100) + " kr.", "pr. modul"]
    ],
    sti: ROD + "skuffer/", navn: "Skuffer", faq: faq,
    titel: "Skuffer til varebil: vægt og pris",
    h1: "Skuffer til varebil",
    desc: "Skuffer til varebil: hvad skuffemoduler vejer og koster pr. meter sammenlignet med hylder, og hvor de sidder i varerummet.",
    manchet: "Skuffer med fuldt udtræk giver orden i tungt værktøj og småting, der skal findes hurtigt. De vejer og koster mere end hylder, fordi hver skuffe har sit eget udtræk og sin egen bund.",
    indhold: [
      '<section class="sektion"><h2>Skuffemoduler</h2><div class="tilbud-tabel-wrap"><table class="tilbud-tabel tg-tabel"><thead><tr><th scope="col">Modul</th><th scope="col">Indhold</th>' +
        '<th scope="col">Længde</th><th scope="col">Vægt</th><th scope="col">Kg pr. meter</th><th scope="col">Pris</th></tr></thead><tbody>' +
        ms.map(function (m) { return '<tr><th scope="row">' + esc(m.navn) + '</th><td>' + esc(m.beskr) + '</td><td>' + tal(m.laengde_mm) + ' mm</td><td>' +
          tal(m.vaegt_kg, m.vaegt_kg % 1 ? 1 : 0) + ' kg</td><td>' + tal(kgm(m), 1) + '</td><td>' + tal(m.pris) + ' kr.</td></tr>'; }).join("") +
        '</tbody></table></div><p class="kilde">Priserne er vejledende og uden moms. Kilde: ' + esc(X.kilde) + '</p></section>',
      '<section class="sektion"><h2>Vægt pr. meter</h2><p>Søjlerne viser, hvad hvert modul vejer pr. meter reol. Hylder og kasser er med til sammenligning.</p>' +
        FIGUR.figur({ type: "soejler", enhed: "kg pr. m", data: X.D.moduler.slice().sort(function (a, b) { return kgm(b) - kgm(a); }).map(function (m) {
          return [m.navn, Math.round(kgm(m) * 10) / 10, m.beskr.toLowerCase()]; }) }) + '</section>',
      '<section class="sektion"><h2>Pris pr. modul</h2>' +
        FIGUR.figur({ type: "soejler", enhed: "kr.", data: X.D.moduler.slice().sort(function (a, b) { return b.pris - a.pris; }).map(function (m) {
          return [m.navn, m.pris, tal(m.laengde_mm) + " mm, " + m.beskr.toLowerCase()]; }), note: "Søjlerne viser de vejledende priser fra " + esc(X.kilde.split(",")[0]) + "." }) + '</section>',
      '<section class="sektion"><h2>Skuffer eller hylder</h2>' + kortHTML([
        ["Skuffer", "Fuldt udtræk og lås under kørsel. Bedst til tungt værktøj og småting. Vejer og koster mest."],
        ["Hylder og kasser", "Lettere og billigere. Bedst til materialer og kufferter, der tages med ud."],
        ["Blandet", "Et langt modul med hylder og én skuffe og et kort skuffemodul bag skydedøren."]]) + '</section>'
    ]
  });
}

function brugtSide(r) {
  var X = data();
  var faq = [
    ["Kan man købe brugt indretning til varebil?", "Ja. Modulsystemer sælges brugt og kan flyttes mellem biler med samme lastrumsmål."],
    ["Passer en brugt indretning til min bil?", "Modulets længde og dybde skal passe til lastrummets længde og bredde. Målene for hver model står på bilsiderne herunder."],
    ["Kan gulvet genbruges?", "Gulvpladen er skåret til den enkelte model og passer derfor sjældent i en anden bil."]
  ];
  var top = X.grupper.slice(0, 12);
  return side(r, {
    kort: [
      ["Moduldybde", tal(X.dybde) + " mm", "de moduler, vi regner med"],
      ["Fri gang", tal(1777 - 2 * X.dybde) + " mm", "med to moduler i et 1.777 mm bredt lastrum"],
      ["Gulvpladen", "Passer sjældent", "den er skåret til den enkelte model"]
    ],
    sti: ROD + "brugt/", navn: "Brugt indretning", faq: faq,
    titel: "Brugt indretning til varebil",
    h1: "Brugt indretning til varebil",
    desc: "Brugt indretning til varebil: hvad der skal passe, når reoler flyttes mellem biler, lastrumsmål på de mest solgte modeller og brugte varebiler med indretning.",
    manchet: "Modulsystemer kan flyttes mellem biler, og de sælges også brugt. Det afgørende er, at modulerne passer til lastrummets længde og bredde.",
    indhold: [
      '<section class="sektion"><h2>Det skal passe</h2>' + kortHTML([
        ["Længde", "Det lange modul skal være kortere end lastrummet, og det korte modul skal kunne stå bag skydedøren."],
        ["Dybde", "To moduler skal efterlade en fri gang. Med moduler på " + tal(X.dybde) + " mm i en bil med 1.777 mm bredde er der 905 mm."],
        ["Gulv og beslag", "Gulvpladen er skåret til den enkelte model og følger sjældent med til en ny bil."]]) + '</section>',
      '<section class="sektion"><h2>Lastrumsmål pr. model</h2><p>Søjlerne viser lastrummets længde i tolv af de modeller, vi har mål på. Klik på en model for mål, fri gang og nyttelast efter indretning.</p>' +
        FIGUR.figur({ type: "soejler", enhed: "mm", data: top.slice().sort(function (a, b) { return b.hoved.lastrum.laengde_mm - a.hoved.lastrum.laengde_mm; }).map(function (g) {
          return [g.hoved.maerke + " " + g.hoved.model, g.hoved.lastrum.laengde_mm, tal(g.hoved.lastrum.bredde_mellem_hjulkasser_mm) + " mm mellem hjulkasser"]; }) }) +
        '<p class="maerkelinks">' +
        top.map(function (g) { return '<a href="' + ROD + g.slug + '/">' + esc(g.hoved.maerke + " " + g.hoved.model) + '</a>'; }).join("") + '</p></section>',
      '<section class="sektion"><h2>Brugte varebiler med indretning</h2><p>En brugt varebil, der allerede er indrettet, er den hurtigste vej. ' +
        '<a href="/brugte-varebiler/brugt-varebil-med-indretning/">Se brugte varebiler med indretning til salg</a>.</p></section>'
    ]
  });
}

// ── Udgang ───────────────────────────────────────────────────────────────────

// Skriver alle undersider. r: { hoved, header, footer, titel } fra generatoren.
function skriv(udDir, r, grafik, partnere) {
  var X = data(), n = 0;
  var gem = function (s, html) {
    var d = path.join(udDir, s); if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, "index.html"), html, "utf8"); n++;
  };
  X.grupper.forEach(function (g) { gem(g.slug, bilSide(g, r, partnere)); });
  alleFag().forEach(function (f) { gem(f.slug, fagSide(f, r)); });
  gem("regler", reglerSide(r, grafik));
  gem("skuffer", skufferSide(r));
  gem("brugt", brugtSide(r));
  return n;
}

// Alle stier til sitemappet.
function stier() {
  var X = data();
  return X.grupper.map(function (g) { return ROD + g.slug + "/"; })
    .concat(alleFag().map(function (f) { return ROD + f.slug + "/"; }))
    .concat(["regler", "skuffer", "brugt"].map(function (s) { return ROD + s + "/"; }));
}

// Fag og de faste undersider som kort paa emnesiden (bilsiderne er ikke med).
function links() {
  return alleFag().map(function (f) {
    return { sti: ROD + f.slug + "/", navn: f.navn, kort: f.manchet.split(". ")[0].replace(/\.$/, "") + "." };
  }).concat([
    { sti: ROD + "regler/", navn: EKSTRA.regler.navn, kort: "Lastsikring og specialindretning." },
    { sti: ROD + "skuffer/", navn: EKSTRA.skuffer.navn, kort: "Vægt og pris pr. meter sammenlignet med hylder." },
    { sti: ROD + "brugt/", navn: EKSTRA.brugt.navn, kort: "Hvad der skal passe, når reoler flyttes mellem biler." }
  ]);
}

module.exports = { skriv: skriv, stier: stier, stiForBil: stiForBil, FAG: FAG, links: links, grupper: function () { return data().grupper; } };
