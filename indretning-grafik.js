// indretning-grafik.js — tegninger og diagrammer til /til-varebilen/indretning/
//
// Alt regnes ud af tal: bilens maal fra varebiler.json og modulernes maal,
// vaegt og pris fra tilvalg.json (emne "indretning", feltet data). Skifter
// bilen eller modulerne, tegner siden sig selv om. Tegningerne bruger kun
// sidens farvevariabler, saa de virker i baade lyst og moerkt tema.

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function tal(v, dec) {
  return Number(v).toLocaleString("da-DK", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
}
function modul(ctx, id) { return ctx.data.moduler.filter(function (m) { return m.id === id; })[0]; }
function kgPrM(m) { return m.vaegt_kg / (m.laengde_mm / 1000); }
function krPrM(m) { return m.pris / (m.laengde_mm / 1000); }
function minMax(liste) { return [Math.min.apply(null, liste), Math.max.apply(null, liste)]; }
function opVaegt(ctx, o) { return o.moduler.reduce(function (a, id) { return a + modul(ctx, id).vaegt_kg; }, 0); }
function opPris(ctx, o) { return o.moduler.reduce(function (a, id) { return a + modul(ctx, id).pris; }, 0); }
function figur(indhold, tekst, cls) {
  return '<figure class="tg' + (cls ? ' ' + cls : '') + '">' + indhold +
    (tekst ? '<figcaption>' + tekst + '</figcaption>' : '') + '</figure>';
}

// Maallinje med pile og tal. Vandret hvis y1 === y2, ellers lodret.
function maal(x1, y1, x2, y2, tekst, side) {
  var vandret = y1 === y2, mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  var t = vandret
    ? '<text x="' + mx + '" y="' + (y1 + (side === "under" ? 15 : -6)) + '" text-anchor="middle">' + tekst + '</text>'
    : '<text x="' + (x1 + (side === "venstre" ? -6 : 6)) + '" y="' + (my + 4) + '" text-anchor="' +
      (side === "venstre" ? "end" : "start") + '">' + tekst + '</text>';
  return '<g class="tg-maal"><line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 +
    '" marker-start="url(#pil)" marker-end="url(#pil)"/>' + t + '</g>';
}
var DEFS = '<defs><marker id="pil" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
  '<path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker>' +
  '<pattern id="skraa" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
  '<line x1="0" y1="0" x2="0" y2="6" class="tg-skraa"/></pattern></defs>';

// ── Noegletal under overskriften ─────────────────────────────────────────────
function noegletal(ctx) {
  var b = ctx.bil, v = modul(ctx, ctx.data.venstre), h = modul(ctx, ctx.data.hoejre);
  var gang = b.lastrum.bredde_max_mm - v.dybde_mm - h.dybde_mm;
  var vaegte = ctx.data.opstillinger.map(function (o) { return opVaegt(ctx, o); });
  var priser = ctx.data.opstillinger.map(function (o) { return opPris(ctx, o); });
  var kgm = minMax(ctx.data.moduler.map(kgPrM)), vv = minMax(vaegte), pp = minMax(priser);
  function k(tal1, enhed, tekst) {
    return '<div><dt>' + tekst + '</dt><dd>' + tal1 + ' <span>' + enhed + '</span></dd></div>';
  }
  return '<dl class="tg-noegle">' +
    k(tal(vv[0]) + '–' + tal(vv[1]), 'kg', 'Vægt, et modul i hver side') +
    k(tal(Math.round(kgm[0])) + '–' + tal(Math.round(kgm[1])), 'kg/m', 'Vægt pr. meter reol') +
    k(tal(gang), 'mm', 'Fri gang i en ' + esc(b.model) + ' L1') +
    k(tal(Math.round(pp[0] / 1000) * 1000) + '–' + tal(Math.round(pp[1] / 1000) * 1000), 'kr.', 'Pris, et modul i hver side, ekskl. moms') +
    '</dl>';
}

// ── Anatomi: et reolmodul set forfra ─────────────────────────────────────────
function anatomi() {
  var kasser = function (y, n, h) {
    var s = "", w = 320 / n;
    for (var i = 0; i < n; i++) s += '<rect class="tg-kasse" x="' + (58 + i * w + 3) + '" y="' + y + '" width="' + (w - 6) + '" height="' + h + '" rx="3"/>' +
      '<rect class="tg-greb" x="' + (58 + i * w + w / 2 - 9) + '" y="' + (y + h / 2 - 2) + '" width="18" height="4" rx="2"/>';
    return s;
  };
  var DELE = [
    ["Smådelskasser", "på en åben topbakke", 57],
    ["Kufferter", "låses i hylden og tages med ud", 116],
    ["Plastkasser", "til forbrugsvarer", 184],
    ["Skuffe med fuldt udtræk", "til tungt værktøj", 255],
    ["Åben bakke", "med skillevægge til materialer", 329],
    ["Surringsskinne i gulvet", "til stropper og lastsikring", 386],
    ["Sideprofil i aluminium", "bærer modulet; hullerne giver hylderne deres plads", 214]
  ];
  var nr = function (i) {
    var y = DELE[i][2], x = i === 6 ? 390 : 412;
    return '<g class="tg-nr"><circle cx="' + x + '" cy="' + y + '" r="11"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle">' + (i + 1) + '</text></g>';
  };
  var svg = '<svg viewBox="0 0 440 420" role="img" aria-label="Et reolmodul set forfra med nummererede dele">' + DEFS +
    // gulv og surringsskinne
    '<rect class="tg-gulv" x="20" y="392" width="398" height="12"/>' +
    '<line class="tg-skinne" x1="30" y1="386" x2="408" y2="386"/>' +
    // sideprofiler
    '<rect class="tg-profil" x="40" y="36" width="16" height="356"/><rect class="tg-profil" x="382" y="36" width="16" height="356"/>' +
    '<g class="tg-huller">' + (function () { var s = ""; for (var y = 50; y < 380; y += 14) s += '<circle cx="48" cy="' + y + '" r="1.6"/><circle cx="390" cy="' + y + '" r="1.6"/>'; return s; })() + '</g>' +
    // top: bakke med smaa kasser
    '<rect class="tg-hylde" x="56" y="70" width="326" height="6"/>' + kasser(44, 6, 26) +
    // kufferter
    '<rect class="tg-hylde" x="56" y="140" width="326" height="6"/>' +
    '<rect class="tg-kuffert" x="62" y="92" width="152" height="48" rx="4"/><rect class="tg-kuffert" x="224" y="92" width="152" height="48" rx="4"/>' +
    '<path class="tg-handtag" d="M118,92 v-6 h40 v6 M280,92 v-6 h40 v6"/>' +
    // plastkasser
    '<rect class="tg-hylde" x="56" y="206" width="326" height="6"/>' + kasser(162, 4, 44) +
    // skuffe
    '<rect class="tg-skuffe" x="58" y="226" width="322" height="58" rx="3"/><rect class="tg-greb tg-greb--skuffe" x="179" y="252" width="80" height="6" rx="3"/>' +
    '<line class="tg-skinne-tynd" x1="58" y1="290" x2="380" y2="290"/>' +
    // aaben bakke
    '<path class="tg-bakke" d="M58,312 h322 v34 h-322 z"/><line class="tg-skillevaeg" x1="165" y1="314" x2="165" y2="346"/><line class="tg-skillevaeg" x1="272" y1="314" x2="272" y2="346"/>' +
    DELE.map(function (d, i) { return nr(i); }).join('') +
    '</svg>';
  var liste = '<ol class="tg-dele">' + DELE.map(function (d) {
    return '<li><strong>' + d[0] + '</strong><span>' + d[1] + '</span></li>'; }).join('') + '</ol>';
  return figur('<div class="tg-anatomi__gitter">' + svg + liste + '</div>',
    'Et modul set forfra. Hylder, kasser og skuffer sidder i profilernes huller og kan flyttes.', 'tg-anatomi');
}

// ── Plan og snit af varerummet ───────────────────────────────────────────────
function plan(ctx) {
  var b = ctx.bil, lr = b.lastrum, v = modul(ctx, ctx.data.venstre), h = modul(ctx, ctx.data.hoejre);
  var hjul = (lr.bredde_max_mm - lr.bredde_mellem_hjulkasser_mm) / 2;
  var gang = lr.bredde_max_mm - v.dybde_mm - h.dybde_mm;
  var over = lr.hoejde_mm - Math.max(v.hoejde_mm, h.hoejde_mm);

  // Set oppefra, front opad. Bilens venstre side er til venstre.
  var s = 0.165, x0 = 92, y0 = 46, W = lr.bredde_max_mm * s, L = lr.laengde_mm * s;
  var dv = v.dybde_mm * s, dh = h.dybde_mm * s, hk = hjul * s;
  var ha = y0 + L * 0.56, hh = L * 0.24; // hjulkassens placering er skematisk
  var plan = '<svg viewBox="0 0 430 560" role="img" aria-label="Varerummet set oppefra med to moduler">' + DEFS +
    '<text class="tg-lille" x="' + (x0 + W / 2) + '" y="' + (y0 - 16) + '" text-anchor="middle">FRONT · skillevæg</text>' +
    '<text class="tg-lille" x="' + (x0 + W / 2) + '" y="' + (y0 + L + 54) + '" text-anchor="middle">BAGDØRE</text>' +
    '<rect class="tg-rum" x="' + x0 + '" y="' + y0 + '" width="' + W + '" height="' + L + '"/>' +
    '<rect class="tg-hjul" x="' + x0 + '" y="' + ha + '" width="' + hk + '" height="' + hh + '"/>' +
    '<rect class="tg-hjul" x="' + (x0 + W - hk) + '" y="' + ha + '" width="' + hk + '" height="' + hh + '"/>' +
    // skydedoer i hoejre side
    '<line class="tg-doer" x1="' + (x0 + W) + '" y1="' + (y0 + 14) + '" x2="' + (x0 + W) + '" y2="' + (y0 + L * 0.42) + '"/>' +
    '<text class="tg-lille" x="' + (x0 + W + 8) + '" y="' + (y0 + L * 0.21) + '" transform="rotate(90 ' + (x0 + W + 8) + ' ' + (y0 + L * 0.21) + ')" text-anchor="middle">SKYDEDØR</text>' +
    // moduler
    '<rect class="tg-modul" x="' + x0 + '" y="' + y0 + '" width="' + dv + '" height="' + (v.laengde_mm * s) + '"/>' +
    '<text class="tg-modul__tekst" x="' + (x0 + dv / 2) + '" y="' + (y0 + v.laengde_mm * s / 2) + '" transform="rotate(-90 ' + (x0 + dv / 2) + ' ' + (y0 + v.laengde_mm * s / 2) + ')" text-anchor="middle">VENSTRE · ' + tal(v.laengde_mm) + ' mm</text>' +
    '<rect class="tg-modul" x="' + (x0 + W - dh) + '" y="' + (y0 + L - h.laengde_mm * s) + '" width="' + dh + '" height="' + (h.laengde_mm * s) + '"/>' +
    '<text class="tg-modul__tekst" x="' + (x0 + W - dh / 2) + '" y="' + (y0 + L - h.laengde_mm * s / 2) + '" transform="rotate(-90 ' + (x0 + W - dh / 2) + ' ' + (y0 + L - h.laengde_mm * s / 2) + ')" text-anchor="middle">HØJRE · ' + tal(h.laengde_mm) + '</text>' +
    // maal
    maal(x0 - 26, y0, x0 - 26, y0 + L, tal(lr.laengde_mm), "venstre") +
    maal(x0, y0 + L + 22, x0 + W, y0 + L + 22, tal(lr.bredde_max_mm), "under") +
    maal(x0 + dv, y0 + L - 34, x0 + W - dh, y0 + L - 34, '<tspan class="tg-fremhaev">' + tal(gang) + ' fri gang</tspan>') +
    maal(x0 + dv, y0 + 40, x0 + W, y0 + 40, tal(lr.bredde_max_mm - v.dybde_mm)) +
    '</svg>';

  // Snit set bagfra.
  var t = 0.2, x1 = 66, yb = 352, SW = lr.bredde_max_mm * t, SH = lr.hoejde_mm * t;
  var mv = v.hoejde_mm * t, mh = h.hoejde_mm * t, ddv = v.dybde_mm * t, ddh = h.dybde_mm * t, hkt = hjul * t;
  var snit = '<svg viewBox="0 0 470 420" role="img" aria-label="Varerummet set bagfra i snit med to moduler">' + DEFS +
    '<path class="tg-rum" d="M' + x1 + ',' + yb + ' V' + (yb - SH + 18) + ' Q' + x1 + ',' + (yb - SH) + ' ' + (x1 + 18) + ',' + (yb - SH) +
      ' H' + (x1 + SW - 18) + ' Q' + (x1 + SW) + ',' + (yb - SH) + ' ' + (x1 + SW) + ',' + (yb - SH + 18) + ' V' + yb + ' Z"/>' +
    '<rect class="tg-hjul" x="' + x1 + '" y="' + (yb - 52) + '" width="' + hkt + '" height="52"/>' +
    '<rect class="tg-hjul" x="' + (x1 + SW - hkt) + '" y="' + (yb - 52) + '" width="' + hkt + '" height="52"/>' +
    '<rect class="tg-modul" x="' + x1 + '" y="' + (yb - mv) + '" width="' + ddv + '" height="' + mv + '"/>' +
    '<rect class="tg-modul" x="' + (x1 + SW - ddh) + '" y="' + (yb - mh) + '" width="' + ddh + '" height="' + mh + '"/>' +
    '<line class="tg-gulvlinje" x1="' + (x1 - 10) + '" y1="' + yb + '" x2="' + (x1 + SW + 10) + '" y2="' + yb + '"/>' +
    maal(x1 - 24, yb - SH, x1 - 24, yb, tal(lr.hoejde_mm), "venstre") +
    maal(x1, yb + 22, x1 + SW, yb + 22, tal(lr.bredde_max_mm), "under") +
    maal(x1 + hkt, yb + 46, x1 + SW - hkt, yb + 46, tal(lr.bredde_mellem_hjulkasser_mm) + ' mellem hjulkasser', "under") +
    maal(x1 + ddv, yb - 150, x1 + SW - ddh, yb - 150, '<tspan class="tg-fremhaev">' + tal(gang) + ' fri gang</tspan>') +
    maal(x1, yb - mv - 18, x1 + ddv, yb - mv - 18, tal(v.dybde_mm)) +
    maal(x1 + SW + 22, yb - SH, x1 + SW + 22, yb - Math.max(mv, mh), tal(over), "hoejre") +
    maal(x1 + SW + 22, yb - Math.max(mv, mh), x1 + SW + 22, yb, tal(Math.max(v.hoejde_mm, h.hoejde_mm)), "hoejre") +
    '<text class="tg-lille" x="' + (x1 + SW / 2) + '" y="' + (yb - SH - 14) + '" text-anchor="middle">SET BAGFRA</text>' +
    '</svg>';

  return '<div class="tg-par">' +
    figur(plan, 'Set oppefra. Mål i mm.') +
    figur(snit, 'Set bagfra. Mål i mm.') +
    '</div><p class="tg-note">' + esc(ctx.data.bil_note) + ' Hjulkassernes placering i længden og tagets form er tegnet skematisk.</p>';
}

// ── Vaegt pr. meter ──────────────────────────────────────────────────────────
var TYPE = { hylder: "Hylder og kasser", blandet: "Med én skuffe", skuffer: "Med tre skuffer" };
function soejler(rows, max, enhed, dec) {
  return '<div class="tg-soejler">' + rows.map(function (r) {
    return '<div class="tg-soejle tg-soejle--' + r.type + '"><span class="tg-soejle__navn">' + esc(r.navn) +
      '<small>' + esc(r.under) + '</small></span><span class="tg-soejle__bar"><i style="width:' +
      (100 * r.v / max).toFixed(1) + '%"></i></span><span class="tg-soejle__tal">' + tal(r.v, dec) + ' ' + enhed + '</span></div>';
  }).join("") + '</div>';
}
function forklaring() {
  return '<p class="tg-forklaring">' + Object.keys(TYPE).map(function (k) {
    return '<span class="tg-forklaring__' + k + '">' + TYPE[k] + '</span>'; }).join("") + '</p>';
}
function vaegt(ctx) {
  var rows = ctx.data.moduler.map(function (m) {
    return { navn: m.navn, under: tal(m.laengde_mm) + ' mm · ' + tal(m.vaegt_kg, m.vaegt_kg % 1 ? 1 : 0) + ' kg', v: kgPrM(m), type: m.type };
  }).sort(function (a, b) { return b.v - a.v; });
  return figur(forklaring() + soejler(rows, rows[0].v, 'kg/m', 1),
    'Vægt pr. meter reol for syv færdige moduler til mellemstore varebiler. Kilde: Sortimo Xpress, mysortimo.dk, 2. okt. 2026.');
}

// ── Nyttelast ────────────────────────────────────────────────────────────────
function nyttelast(ctx) {
  var n = ctx.bil.nyttelast_kg;
  var rows = ctx.data.opstillinger.map(function (o) {
    var kg = opVaegt(ctx, o);
    return '<div class="tg-nytte"><span class="tg-nytte__navn">' + esc(o.navn) + '<small>' +
      o.moduler.map(function (id) { return modul(ctx, id).navn; }).join(" + ") + '</small></span>' +
      '<span class="tg-nytte__bar"><i class="tg-nytte__ind" style="width:' + (100 * kg / n).toFixed(1) + '%"></i><i class="tg-nytte__rest"></i></span>' +
      '<span class="tg-nytte__tal"><b>' + tal(kg) + ' kg</b> · ' + tal(100 * kg / n, 1) + ' %<small>' + tal(n - kg) + ' kg tilbage</small></span></div>';
  }).join("");
  return figur('<div class="tg-nytter">' + rows + '</div>',
    'Andel af nyttelasten på ' + esc(ctx.bil.maerke + ' ' + ctx.bil.model) + ' L1 (' + tal(n) + ' kg, Fords tal), der går til indretningen.');
}

// ── Pris pr. meter ───────────────────────────────────────────────────────────
function pris(ctx) {
  var ms = ctx.data.moduler.slice().sort(function (a, b) { return krPrM(a) - krPrM(b); });
  return figur('<div class="tilbud-tabel-wrap"><table class="tilbud-tabel tg-tabel"><thead><tr>' +
    '<th scope="col">Modul</th><th scope="col">Indhold</th><th scope="col">Længde</th><th scope="col">Vægt</th>' +
    '<th scope="col">Pris</th><th scope="col">Kr. pr. meter</th></tr></thead><tbody>' +
    ms.map(function (m) {
      return '<tr><th scope="row"><span class="tg-prik tg-prik--' + m.type + '"></span>' + esc(m.navn) + '</th><td>' + esc(m.beskr) + '</td><td>' +
        tal(m.laengde_mm) + ' mm</td><td>' + tal(m.vaegt_kg, m.vaegt_kg % 1 ? 1 : 0) + ' kg</td><td>' + tal(m.pris) + ' kr.</td><td><b>' +
        tal(Math.round(krPrM(m) / 100) * 100) + ' kr.</b></td></tr>';
    }).join("") + '</tbody></table></div>',
    'Uden gulv og montering. Kilde: ' + esc(ctx.data.kilde));
}

// ── Lastsikring: kraefterne ──────────────────────────────────────────────────
function kraefter() {
  var cx = 200, cy = 140;
  var pil = function (x1, y1, x2, y2, cls) { return '<line class="tg-kraft ' + (cls || '') + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" marker-end="url(#kraftpil)"/>'; };
  var svg = '<svg viewBox="0 0 400 270" role="img" aria-label="Kræfterne på lasten: 0,8 gange vægten fremad, 0,5 gange bagud og til siderne">' +
    '<defs><marker id="kraftpil" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="tg-kraftpil"/></marker></defs>' +
    '<text class="tg-lille" x="20" y="22">↑ KØRERETNING</text>' +
    '<rect class="tg-last" x="' + (cx - 50) + '" y="' + (cy - 40) + '" width="100" height="80" rx="4"/>' +
    '<text class="tg-last__tekst" x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle">LAST</text>' +
    pil(cx, cy - 44, cx, cy - 124, 'tg-kraft--stor') + '<text class="tg-kraft__tekst" x="' + (cx + 18) + '" y="' + (cy - 84) + '">0,8 × vægt</text>' +
    pil(cx, cy + 44, cx, cy + 104) + '<text class="tg-kraft__tekst" x="' + (cx + 18) + '" y="' + (cy + 84) + '">0,5 × vægt</text>' +
    pil(cx - 54, cy, cx - 134, cy) + '<text class="tg-kraft__tekst" x="' + (cx - 94) + '" y="' + (cy - 14) + '" text-anchor="middle">0,5 × vægt</text>' +
    pil(cx + 54, cy, cx + 134, cy) + '<text class="tg-kraft__tekst" x="' + (cx + 94) + '" y="' + (cy - 14) + '" text-anchor="middle">0,5 × vægt</text>' +
    '</svg>';
  var eks = [100, 200, 400].map(function (kg) {
    return '<tr><th scope="row">' + kg + ' kg</th><td>' + tal(kg * 0.8) + ' kg</td><td>' + tal(kg * 0.5) + ' kg</td></tr>';
  }).join("");
  return '<div class="tg-par tg-par--kraft">' + figur(svg, 'Kræfterne set oppefra. Kilde: EN 12195-1. Samme tal i BEK nr. 1655, bilag 3, for køretøjer over 3,5 t.') +
    '<div class="tg-kraft-tabel"><table class="tilbud-tabel tg-tabel"><thead><tr><th scope="col">Lastens vægt</th>' +
    '<th scope="col">Skal holdes fremad</th><th scope="col">Til siderne og bagud</th></tr></thead><tbody>' + eks +
    '</tbody></table></div></div>';
}

// ── Proces ───────────────────────────────────────────────────────────────────
function proces() {
  var trin = [
    ["Behov", "Værktøj, maskiner, reservedele og materialer, der skal med på en almindelig dag."],
    ["Opstilling", "Færdige moduler til modellen eller en opstilling sat sammen i producentens konfigurator."],
    ["Tilbud", "Pris, vægt og leveringstid på den konkrete opstilling."],
    ["Montering", "Hos opbyggeren eller med montør. Bestilt samtidig med bilen er den klar ved levering."]
  ];
  return '<ol class="tg-proces">' + trin.map(function (t, i) {
    return '<li><span class="tg-proces__nr">' + (i + 1) + '</span><strong>' + t[0] + '</strong><p>' + t[1] + '</p></li>';
  }).join("") + '</ol>';
}

// ── Lastrummets maal paa de mest solgte kassevogne ──────────────────────────
function slug(s) {
  return String(s || "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ë/g, "e")
    .replace(/[./]+/g, "-").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function maaltabel(ctx) {
  var rows = ctx.biler.filter(function (b) {
    var l = b.lastrum || {};
    return b.karrosseri === "kassevogn" && l.laengde_mm && l.bredde_mellem_hjulkasser_mm && l.hoejde_mm;
  });
  // De populaere foerst, derefter i datafilens orden. Seks vises, resten er foldet sammen.
  rows = rows.filter(function (b) { return b.populaer; }).concat(rows.filter(function (b) { return !b.populaer; })).slice(0, 18);
  var c = function (v) { return v ? tal(v) : "–"; };
  var tabel = function (liste) {
    return '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel tg-tabel tg-maal-tabel"><thead><tr>' +
      '<th scope="col">Model</th><th scope="col">Længde</th><th scope="col">Mellem hjulkasser</th>' +
      '<th scope="col">Højde</th></tr></thead><tbody>' +
      liste.map(function (b) {
        var l = b.lastrum;
        var st = require("./indretning-sider.js").stiForBil(b) || ('/varebiler/' + slug(b.maerke) + '/' + slug(b.model) + '/');
        return '<tr><th scope="row"><a href="' + st + '">' + esc(b.maerke + ' ' + b.model) +
          '</a></th><td>' + c(l.laengde_mm) + '</td><td>' + c(l.bredde_mellem_hjulkasser_mm) + '</td><td>' + c(l.hoejde_mm) + '</td></tr>';
      }).join("") + '</tbody></table></div>';
  };
  return figur(tabel(rows.slice(0, 6)) +
    (rows.length > 6 ? '<details class="tg-flere"><summary>Se ' + (rows.length - 6) + ' modeller mere</summary>' + tabel(rows.slice(6)) + '</details>' : ''),
    'Indvendige mål i mm for den udgave af bilen, vi viser mål for på modelsiden. Klik på en model for fri gang og nyttelast efter indretning.') +
    '<details class="tg-flere"><summary>Indretning til alle ' + require("./indretning-sider.js").grupper().length + ' modeller</summary><p class="maerkelinks">' +
    require("./indretning-sider.js").grupper().map(function (g) {
      return '<a href="/til-varebilen/indretning/' + g.slug + '/">' + esc(g.hoved.maerke + ' ' + g.hoved.model) + '</a>'; }).join("") + '</p></details>';
}

module.exports = { maaltabel: maaltabel,  noegletal: noegletal, anatomi: anatomi, plan: plan, vaegt: vaegt, nyttelast: nyttelast, pris: pris, kraefter: kraefter, proces: proces };
