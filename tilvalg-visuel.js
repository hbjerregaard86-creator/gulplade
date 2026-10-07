// tilvalg-visuel.js — topbillede, "kort fortalt", indholdsfortegnelse og
// tilbudsstribe paa undersiderne under /til-varebilen/ (forsoeg 05-10-2026).
//
// Brugeren syntes, siderne var for kedelige: lange sider med tekst og tabeller
// og intet billede. Alt her styres af feltet "visuel" paa en underside i
// tilvalg.json:
//   visuel: {
//     ny: true,                         kun i preview, til det er godkendt
//     hero: "forsikring",               topbillede (SVG) fra HERO nedenfor
//     hero_el: true,                    lyn paa bilen (sider om elvarebiler)
//     kort_fortalt: [[etiket, tal, under?], ...],
//     toc: true,                        "Paa siden" med links til sektionerne
//     stribe: { titel?, ids?: [...], drivmiddel?, pr_stoerrelse?, antal? }
//   }
//
// Tegningerne bruger kun CSS-variabler (tv-h-* i style.css), saa de foelger
// lys og moerk tilstand. Ingen fotos af biler, vi ikke har rettigheder til:
// stribens billeder er de samme som paa modelsiderne.

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function talDK(v) { return Number(v).toLocaleString("da-DK"); }
// Samme slug som generate-pages.js, saa linkene rammer modelsiderne.
function slug(s) {
  return String(s || "").toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ë/g, "e")
    .replace(/[./]+/g, "-")
    .replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function idFra(s) { return slug(String(s).replace(/<[^>]+>/g, "")); }

// ── Topbilleder ──────────────────────────────────────────────────────────────

// Kassevogn set fra siden, front mod hoejre. Hjulene tegnes til sidst, saa de
// ligger oven paa karrosseriet.
var BIL = {
  krop: '<path class="tv-h-krop" d="M40,236 L40,92 Q40,78 54,78 L318,78 Q331,78 338,87 L381,140 L407,149 Q420,154 420,167 L420,228 Q420,236 412,236 Z"/>',
  detaljer:
    '<path class="tv-h-rude" d="M331,92 L345,92 L373,137 L331,137 Z"/>' +
    '<line class="tv-h-streg" x1="300" y1="82" x2="300" y2="232"/>' +
    '<line class="tv-h-streg" x1="322" y1="150" x2="336" y2="150"/>' +
    '<rect class="tv-h-lygte" x="408" y="160" width="10" height="12" rx="2"/>' +
    '<rect class="tv-h-plade" x="411" y="200" width="9" height="16" rx="1.5"/>' +
    '<path class="tv-h-spejl" d="M376,128 L388,124 L390,136 L380,138 Z"/>',
  hjul: '<circle class="tv-h-hjul" cx="112" cy="236" r="27"/><circle class="tv-h-faelg" cx="112" cy="236" r="10"/>' +
        '<circle class="tv-h-hjul" cx="350" cy="236" r="27"/><circle class="tv-h-faelg" cx="350" cy="236" r="10"/>',
  vej: '<line class="tv-h-vej" x1="12" y1="263" x2="468" y2="263"/>' +
       '<line class="tv-h-vej tv-h-vej--stiplet" x1="12" y1="280" x2="468" y2="280"/>'
};

// Maerke paa bilens side: en gul cirkel med et symbol.
function maerke(indhold) {
  return '<circle class="tv-h-maerke" cx="176" cy="156" r="50"/>' + indhold;
}

var HERO = {
  forsikring: {
    alt: "Tegning af en varebil med et skjold på siden",
    over: maerke(
      '<path class="tv-h-skjold" d="M176,118 L208,129 L208,156 Q208,182 176,196 Q144,182 144,156 L144,129 Z"/>' +
      '<path class="tv-h-flueben" d="M160,157 L172,169 L194,145"/>')
  },
  service: {
    alt: "Tegning af en varebil med en svensknøgle på siden",
    over: maerke(
      '<g transform="rotate(-45 176 156)">' +
        '<rect class="tv-h-noegle" x="168" y="150" width="16" height="52" rx="7"/>' +
        '<circle class="tv-h-noegle" cx="176" cy="132" r="21"/>' +
        '<path class="tv-h-noegle-hul" d="M169,106 L169,127 L183,127 L183,106"/>' +
      '</g>')
  },
  indretning: {
    alt: "Tegning af en varebil med reoler, skuffer og gulv i varerummet",
    // Varerummet skaaret op: gulv, reol med kasser og skuffer, plader paa siden.
    over:
      '<rect class="tv-h-rum" x="56" y="94" width="232" height="128" rx="4"/>' +
      '<rect class="tv-h-gulv" x="56" y="214" width="232" height="8"/>' +
      '<rect class="tv-h-panel" x="62" y="100" width="40" height="110" rx="2"/>' +
      '<line class="tv-h-streg" x1="112" y1="100" x2="112" y2="210"/>' +
      '<line class="tv-h-streg" x1="276" y1="100" x2="276" y2="210"/>' +
      '<line class="tv-h-hylde" x1="112" y1="134" x2="276" y2="134"/>' +
      '<line class="tv-h-hylde" x1="112" y1="170" x2="276" y2="170"/>' +
      '<rect class="tv-h-kasse" x="122" y="110" width="40" height="24" rx="2"/>' +
      '<rect class="tv-h-kasse tv-h-kasse--gul" x="168" y="114" width="52" height="20" rx="2"/>' +
      '<rect class="tv-h-kasse" x="228" y="106" width="38" height="28" rx="2"/>' +
      '<rect class="tv-h-kasse tv-h-kasse--gul" x="122" y="146" width="62" height="24" rx="2"/>' +
      '<rect class="tv-h-kasse" x="192" y="152" width="34" height="18" rx="2"/>' +
      [176, 190, 202].map(function (y, i) {
        return '<rect class="tv-h-skuffe" x="112" y="' + y + '" width="164" height="' + (i < 2 ? 14 : 12) + '"/>' +
          '<rect class="tv-h-greb" x="186" y="' + (y + 5) + '" width="16" height="3" rx="1.5"/>';
      }).join("")
  },
  vinterhjul: {
    alt: "Tegning af en varebil med et snefnug på siden",
    over: maerke([0, 60, 120].map(function (v) {
      return '<g transform="rotate(' + v + ' 176 156)"><line class="tv-h-fnug" x1="176" y1="122" x2="176" y2="190"/>' +
        '<path class="tv-h-fnug" d="M166,128 L176,138 L186,128 M166,184 L176,174 L186,184"/></g>';
    }).join(""))
  },
  varerumssikring: {
    alt: "Tegning af en varebil med en hængelås på siden",
    over: maerke(
      '<path class="tv-h-boejle" d="M158,152 L158,136 Q158,116 176,116 Q194,116 194,136 L194,152"/>' +
      '<rect class="tv-h-skjold" x="148" y="148" width="56" height="44" rx="6"/>' +
      '<circle class="tv-h-hul" cx="176" cy="165" r="6"/><rect class="tv-h-hul" x="173" y="167" width="6" height="14" rx="2"/>')
  },
  ombygning: {
    alt: "Tegning af en varebil med en lift og en pil, der peger opad",
    under: '<rect class="tv-h-lift" x="14" y="196" width="26" height="8" rx="2"/><line class="tv-h-streg" x1="27" y1="204" x2="27" y2="236"/>',
    over: maerke(
      '<path class="tv-h-skjold" d="M176,116 L204,146 L188,146 L188,178 L164,178 L164,146 L148,146 Z"/>' +
      '<rect class="tv-h-hul" x="148" y="184" width="56" height="8" rx="2"/>')
  },
  folie: {
    alt: "Tegning af en varebil med reklame og en gul stribe på siden",
    over:
      '<path class="tv-h-stribe" d="M41,184 C120,150 210,214 299,168 L299,196 C210,240 120,178 41,212 Z"/>' +
      '<rect class="tv-h-skilt" x="70" y="102" width="120" height="34" rx="5"/>' +
      '<rect class="tv-h-hul" x="82" y="112" width="14" height="14" rx="3"/>' +
      '<line class="tv-h-tekstlinje" x1="104" y1="114" x2="176" y2="114"/>' +
      '<line class="tv-h-tekstlinje tv-h-tekstlinje--tynd" x1="104" y1="126" x2="156" y2="126"/>'
  },
  "traek-og-tagudstyr": {
    alt: "Tegning af en varebil med stige på taget og anhængertræk",
    under: '<path class="tv-h-traek" d="M40,222 L22,222 L22,214"/><circle class="tv-h-kugle" cx="22" cy="210" r="5"/>',
    over:
      '<rect class="tv-h-boejlefod" x="86" y="66" width="10" height="12"/>' +
      '<rect class="tv-h-boejlefod" x="250" y="66" width="10" height="12"/>' +
      '<rect class="tv-h-stige" x="64" y="56" width="236" height="12" rx="2"/>' +
      [84, 108, 132, 156, 180, 204, 228, 252, 276].map(function (x) {
        return '<line class="tv-h-streg" x1="' + x + '" y1="56" x2="' + x + '" y2="68"/>';
      }).join("")
  },
  "el-abonnement": {
    alt: "Tegning af en varebil ved en ladestander med et lyn på siden",
    under: '<rect class="tv-h-skjold" x="2" y="128" width="26" height="135" rx="4"/>' +
      '<rect class="tv-h-skaerm" x="7" y="138" width="16" height="14" rx="2"/>' +
      '<path class="tv-h-kabel" d="M24,176 C40,182 30,160 44,150"/>',
    over: maerke('<path class="tv-h-skjold" d="M186,114 L154,164 L174,164 L164,200 L200,146 L180,146 Z"/>')
  },
  flaadestyring: {
    alt: "Tegning af en varebil med en kortnål på siden",
    over: maerke(
      '<path class="tv-h-skjold" d="M176,200 C160,178 148,164 148,146 A28,28 0 0 1 204,146 C204,164 192,178 176,200 Z"/>' +
      '<circle class="tv-h-pin" cx="176" cy="146" r="10"/>' +
      '<path class="tv-h-signal" d="M152,96 Q176,80 200,96 M160,106 Q176,96 192,106"/>')
  },
  "salg-af-varebil": {
    alt: "Tegning af en varebil med et prismærke på siden",
    over: maerke(
      '<path class="tv-h-skjold" d="M142,134 L188,134 L212,156 L188,178 L142,178 Z"/>' +
      '<circle class="tv-h-hul" cx="198" cy="156" r="4"/>' +
      '<text class="tv-h-tekst" x="166" y="163" text-anchor="middle">kr.</text>')
  },
  // Håndbogens fem emner (07-10-2026, preview med GULPLADE_VIDEN_NY=1): samme bil,
  // og et tegn i det gule mærke.
  "haandbog-regler": {
    alt: "Tegning af en varebil med et paragraftegn på siden",
    over: maerke('<text class="tv-h-tegn" x="176" y="177" text-anchor="middle">§</text>')
  },
  "haandbog-moms": {
    alt: "Tegning af en varebil med et procenttegn på siden",
    over: maerke('<text class="tv-h-tegn" x="176" y="177" text-anchor="middle">%</text>')
  },
  "haandbog-leasing": {
    alt: "Tegning af en varebil med en kontrakt på siden",
    over: maerke(
      '<rect class="tv-h-skilt" x="154" y="122" width="44" height="58" rx="4"/>' +
      '<line class="tv-h-tekstlinje tv-h-tekstlinje--tynd" x1="163" y1="136" x2="189" y2="136"/>' +
      '<line class="tv-h-tekstlinje tv-h-tekstlinje--tynd" x1="163" y1="147" x2="189" y2="147"/>' +
      '<line class="tv-h-tekstlinje tv-h-tekstlinje--tynd" x1="163" y1="158" x2="180" y2="158"/>' +
      '<path class="tv-h-flueben" d="M164,170 L172,176 L190,164" style="stroke-width:4"/>')
  },
  "haandbog-bilvalg": {
    alt: "Tegning af en varebil med en målestok over taget",
    under:
      '<line class="tv-h-streg" x1="40" y1="54" x2="420" y2="54" style="stroke-width:2"/>' +
      '<path class="tv-h-streg" d="M40,46 L40,62 M420,46 L420,62" style="stroke-width:2"/>' +
      '<path class="tv-h-streg" d="M48,48 L40,54 L48,60 M412,48 L420,54 L412,60" style="stroke-width:2;fill:none"/>',
    over: maerke('<text class="tv-h-tegn tv-h-tegn--lille" x="176" y="170" text-anchor="middle">m³</text>')
  },
  "haandbog-groen": {
    alt: "Tegning af en varebil med CO₂ på siden",
    over: maerke('<text class="tv-h-tegn tv-h-tegn--lille" x="176" y="170" text-anchor="middle">CO₂</text>')
  }
};

// Lyn i en lille cirkel ved fronten: siden handler om en elvarebil.
var LYN = '<circle class="tv-h-lyn-bund" cx="388" cy="196" r="18"/>' +
          '<path class="tv-h-lyn" d="M391,182 L380,199 L388,199 L384,211 L396,193 L388,193 Z"/>';

function heroSVG(navn, el) {
  var h = HERO[navn];
  if (!h) throw new Error("tilvalg-visuel: ukendt topbillede " + navn);
  return '<figure class="tv-hero tv-hero--svg"><svg viewBox="0 0 480 300" role="img" aria-label="' + esc(h.alt + (el ? " og et lyn ved fronten" : "")) + '">' +
    '<circle class="tv-h-sol" cx="370" cy="125" r="100"/>' +
    BIL.vej + (h.under || '') + BIL.krop + BIL.detaljer + h.over + (el ? LYN : '') + BIL.hjul +
    '</svg></figure>';
}

// ── Kort fortalt og indholdsfortegnelse ─────────────────────────────────────

function kortFortalt(liste) {
  if (!liste || !liste.length) return "";
  return '<dl class="guidetal tv-kort-fortalt">' + liste.map(function (k) {
    return '<div class="guidetal__felt"><dt>' + esc(k[0]) + '</dt><dd class="guidetal__tal">' + k[1] + '</dd>' +
      (k[2] ? '<dd class="guidetal__under">' + k[2] + '</dd>' : '') + '</div>';
  }).join("") + '</dl>';
}

function toc(afsnit) {
  if (!afsnit || afsnit.length < 4) return "";
  return '<nav class="sektion tv-toc" aria-label="På siden"><h2>På siden</h2><p class="maerkelinks">' +
    afsnit.map(function (a) {
      return '<a href="#' + idFra(a.overskrift) + '">' + esc(a.overskrift) + '</a>';
    }).join("") + '</p></nav>';
}

// ── Tilbudsstriben ──────────────────────────────────────────────────────────
//
// Tre varebiler med foto og den laveste maanedsydelse. Udloebne tilbud
// springes over, ligesom paa resten af sitet.

function stoerrelse(bil) {
  if (bil.karrosseri !== "kassevogn") return null;
  if (bil.stoerrelse) return bil.stoerrelse;
  var l = (bil.udvendig || {}).laengde_mm;
  if (l == null) return null;
  return l < 4750 ? "pizzabil" : (l < 5400 ? "mellem" : "stor");
}
var STR_NAVN = { pizzabil: "Lille varebil", mellem: "Mellemstor kassevogn", stor: "Stor kassevogn" };

function billigste(bil, idag) {
  var t = (bil.tilbud || []).filter(function (x) {
    return x.maanedspris != null && (!x.gyldig_til || x.gyldig_til >= idag);
  });
  if (!t.length) return null;
  return t.sort(function (a, b) { return a.maanedspris - b.maanedspris; })[0];
}

function stribe(cfg, biler) {
  if (!cfg) return "";
  var idag = new Date().toISOString().slice(0, 10);
  var med = biler.map(function (b) { return { b: b, t: billigste(b, idag) }; })
    .filter(function (r) { return r.t && r.b.billede; });
  var valgt;
  if (cfg.ids) {
    valgt = cfg.ids.map(function (id) {
      var r = med.filter(function (x) { return x.b.id === id; })[0];
      if (!r) throw new Error("tilvalg-visuel: ingen aktive tilbud på " + id + " til tilbudsstriben");
      return r;
    });
  } else if (cfg.ids_valgfri) {
    // Bilsiderne under indretning: modellerne paa siden, hvis de har tilbud, og
    // ellers (eller derudover) de billigste i samme stoerrelse.
    var antal = cfg.antal || 3;
    valgt = cfg.ids_valgfri.map(function (id) {
      return med.filter(function (x) { return x.b.id === id; })[0];
    }).filter(Boolean).slice(0, antal);
    if (cfg.fyld && valgt.length < antal) {
      var s = cfg.fyld;
      med.filter(function (r) { return stoerrelse(r.b) === s && valgt.indexOf(r) < 0; })
        .sort(function (a, b) { return a.t.maanedspris - b.t.maanedspris; })
        .slice(0, antal - valgt.length).forEach(function (r) { valgt.push(r); });
    }
  } else {
    var pulje = med.filter(function (r) { return !cfg.drivmiddel || r.b.drivmiddel === cfg.drivmiddel; })
      .sort(function (a, b) { return a.t.maanedspris - b.t.maanedspris; });
    if (cfg.pr_stoerrelse) {
      valgt = ["pizzabil", "mellem", "stor"].map(function (s) {
        return pulje.filter(function (r) { return stoerrelse(r.b) === s; })[0];
      }).filter(Boolean);
    } else {
      valgt = pulje.slice(0, cfg.antal || 3);
    }
  }
  if (!valgt.length) return "";
  return [
    '<section class="sektion tv-stribe">',
    '  <h2>' + esc(cfg.titel || 'Varebiler med tilbud lige nu') + '</h2>',
    '  <ul class="tv-stribe__liste">',
    valgt.map(function (r) {
      var b = r.b, navn = b.maerke + " " + b.model;
      var under = cfg.pr_stoerrelse ? STR_NAVN[stoerrelse(b)] : (b.drivmiddel === "el" && !cfg.drivmiddel ? "Elvarebil" : null);
      return '    <li><a class="tv-stribe__kort" href="/varebiler/' + slug(b.maerke) + '/' + slug(b.model) + '/">' +
        '<span class="tv-stribe__billede"><img src="' + esc(b.billede) + '" alt="' + esc(navn) +
        '" width="800" height="500" loading="lazy" decoding="async"></span>' +
        '<span class="tv-stribe__krop">' + (under ? '<span class="tv-stribe__over">' + esc(under) + '</span>' : '') +
        '<strong>' + esc(navn) + '</strong>' +
        '<span class="tv-stribe__pris">' + talDK(r.t.maanedspris) + ' kr./md.</span>' +
        '<span class="tv-stribe__vilkaar">' + (r.t.foerstegangsydelse ? talDK(r.t.foerstegangsydelse) + ' kr. i udbetaling · ' : 'Ingen udbetaling · ') +
          r.t.loebetid_mdr + ' mdr. · ' + esc(r.t.udbyder) + '</span>' +
        '</span></a></li>';
    }).join("\n"),
    '  </ul>',
    '  <p class="kilde">Vi viser det billigste tilbud på hver bil fra forhandlerens eller leasingselskabets egen prisliste. Leasingpriserne er uden moms. <a href="/">Se alle tilbud</a>.</p>',
    '</section>'
  ].join("\n");
}

// Har bilen et aktivt tilbud med billede? (bruges til titlen paa striben)
function harTilbud(b) {
  return !!(b.billede && billigste(b, new Date().toISOString().slice(0, 10)));
}

module.exports = { heroSVG: heroSVG, kortFortalt: kortFortalt, toc: toc, stribe: stribe, idFra: idFra,
  stoerrelse: stoerrelse, harTilbud: harTilbud, HERO: Object.keys(HERO) };
