// tjek.js — tjekker de nye sider til tilvalg-ny.json, før de flettes ind.
//
//   node tekst-gennemgang/tilvalg-ny/tjek.js forsikring/selvrisiko.js
//   node tekst-gennemgang/tilvalg-ny/tjek.js forsikring            (hele mappen)
//   node tekst-gennemgang/tilvalg-ny/tjek.js                       (alle mapper)
//
// Hver fil er et modul:
//   module.exports = {
//     id: "forsikring/selvrisiko",        // eller "forsikring" for emnesiden (_emne.js)
//     side: { ...hele siden... },
//     nye_fakta: [["påstand", "https://kilde"], ...]
//   };
//
// FEJL skal rettes. ADVARSEL skal læses og vurderes; mange er rigtige fund.
// Stopper med kode 1, hvis der er fejl.

var fs = require("fs");
var path = require("path");
var ROD = path.join(__dirname, "..", "..");
var M = require("./maal.js");
var FIGUR = require(path.join(ROD, "tilvalg-figurer.js"));
var VISUEL = require(path.join(ROD, "tilvalg-visuel.js"));

var GAMMEL = JSON.parse(fs.readFileSync(path.join(ROD, "tilvalg.json"), "utf8"));
var CSS = fs.readFileSync(path.join(ROD, "assets", "style.css"), "utf8");
var KLASSER = {};
(CSS.match(/\.[a-z][a-z0-9_-]*/gi) || []).forEach(function (c) { KLASSER[c.slice(1)] = 1; });
var SITEMAP = {};
(fs.readFileSync(path.join(ROD, "sitemap.xml"), "utf8").match(/<loc>[^<]+<\/loc>/g) || []).forEach(function (l) {
  SITEMAP[l.replace(/<\/?loc>/g, "").replace("https://gulplade.dk", "")] = 1;
});
SITEMAP["/"] = 1;
var GRAFIK = Object.keys(require(path.join(ROD, "indretning-grafik.js")));
var TAL_NOEGLER = ["tilbud", "modeller", "daek_inkl", "daek_ikke", "daek_tavs", "forsikring_inkl",
  "forsikring_ikke", "forsikring_tavs", "el_modeller", "el_tilbud", "nyttelast_modeller",
  "ind_dybde", "ind_gang", "ind_over", "ind_nyttelast", "ind_kgm_hylder", "ind_kgm_skuffer",
  "ind_krm_hylder", "ind_krm_skuffer", "ind_modul_pris", "ind_op_vaegt", "ind_op_pris", "ind_op_pct"];

var B = "[A-Za-zÆØÅæøåÉéÜü0-9]";       // bogstav i et ord (JS's \b kender ikke æøå)
function ord(re) { return new RegExp("(?<!" + B + ")(?:" + re + ")(?!" + B + ")", "i"); }

// CLAUDE.md, reglerne 2, 3, 6, 10 og 12.
var FORBUDT = [
  [ord("energi"), "regel 3: skriv diesel, strøm, brændstof eller el"],
  [ord("drivlinjen?|drivlinjer"), "regel 3"],
  [ord("driftspost(?:er|en|erne)?"), "regel 3"],
  [ord("omkostningselement(?:er|erne)?"), "regel 3"],
  [ord("variant(?:en|er|erne)?"), "regel 2: skriv bil eller model"],
  [ord("modelpar(?:ret|rene)?"), "regel 2"],
  [ord("aktuelle tilbud"), "regel 2: skriv tilbud"],
  [ord("læst fra|læst den|læst \\d"), "regel 6: kildenoter skriver 'set den 7. oktober 2026'"],
  [ord("i forhold til"), "regel 6"],
  [ord("foretage[rt]?|foretog"), "regel 6"],
  [ord("såfremt"), "regel 6"],
  [ord("værd at bemærke|værd at være opmærksom"), "regel 6"],
  [/pr\. \d{1,2}\. (jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)/i, "regel 6: skriv 'den 4. oktober'"],
  [ord("pas på|vær opmærksom|husk at|husk altid"), "regel 10: ingen advarsler"],
  [ord("jungle(?:n)?|markedets bedste|markedets billigste|markedets absolut"), "regel 12"],
  [ord("(fire|tre|fem|seks|to) af \\1"), "regel 6: skriv 'alle fire'"]
];
var FARVER = ord("gul|gule|gult|grå|rød|røde|rødt|grøn|grønne|grønt|blå|sort|sorte|hvid|hvide|orange");

var fejl = [], adv = [];
function F(id, s) { fejl.push(id + ": " + s); }
function A(id, s) { adv.push(id + ": " + s); }

// Synlig tekst: uden tags, attributter og URL'er.
function synlig(s) { return M.ren(String(s).replace(/https?:\/\/\S+/g, " ")); }

// Alle strenge i et objekt med en sti, så fund kan findes igen.
function strenge(x, sti, ud) {
  if (typeof x === "string") ud.push([sti, x]);
  else if (Array.isArray(x)) x.forEach(function (v, i) { strenge(v, sti + "[" + i + "]", ud); });
  else if (x && typeof x === "object") Object.keys(x).forEach(function (k) { strenge(x[k], sti + "." + k, ud); });
  return ud;
}
function harNy(x) {
  if (Array.isArray(x)) return x.some(harNy);
  if (x && typeof x === "object") return Object.keys(x).some(function (k) { return k === "ny" || harNy(x[k]); });
  return false;
}

// Tekst, der vises: alt undtagen svg-markup (her kun <text> og aria-label), url og dato.
function visteTekster(side) {
  return strenge(side, "side", []).filter(function (p) {
    return !/\.(url|dato|slug|hero|type|visning|punkt_ikon|grafik)$/.test(p[0]) && !/\.svg$/.test(p[0]) && !/\.stribe\./.test(p[0]);
  }).concat(svgTekster(side));
}
function svgTekster(side) {
  var ud = [];
  M.figurer(side).forEach(function (f, i) {
    if (f.type !== "svg") return;
    (f.svg.match(/<text[^>]*>[^<]*<\/text>/g) || []).forEach(function (t) { ud.push(["svg" + i + " <text>", t.replace(/<[^>]+>/g, "")]); });
    var al = (f.svg.match(/aria-label="([^"]*)"/) || [])[1];
    if (al) ud.push(["svg" + i + " aria-label", al]);
  });
  return ud;
}

// Grov tjek af, om SVG'en er velformet: tags åbnes og lukkes i orden.
function velformet(svg) {
  var stak = [], re = /<(\/?)([a-zA-Z][\w:-]*)([^>]*?)(\/?)>/g, m;
  while ((m = re.exec(svg))) {
    if (m[1]) { if (stak.pop() !== m[2]) return "lukker </" + m[2] + "> uden at den er åben"; }
    else if (!m[4]) stak.push(m[2]);
  }
  return stak.length ? "<" + stak.join("><") + "> lukkes ikke" : null;
}

function tjekSvg(id, f, n, ids) {
  var s = f.svg, sted = "tegning " + n;
  if (typeof s !== "string" || !/^\s*<svg[\s>]/.test(s)) return F(id, sted + ": svg skal starte med <svg");
  var vf = velformet(s); if (vf) F(id, sted + ": " + vf);
  var vb = (s.match(/viewBox="([^"]+)"/) || [])[1];
  if (!vb) F(id, sted + ": mangler viewBox");
  var b = vb ? Number(vb.split(/[\s,]+/)[2]) : 0, h = vb ? Number(vb.split(/[\s,]+/)[3]) : 0;
  if (vb && (b < 300 || b > 640)) F(id, sted + ": viewBox-bredden skal være 300–640 (er " + b + ")");
  if (vb && h > 420) A(id, sted + ": høj tegning (" + h + "), overvej at dele den");
  if (!/role="img"/.test(s)) F(id, sted + ': mangler role="img"');
  var al = (s.match(/aria-label="([^"]*)"/) || [])[1];
  if (!al || al.length < 20) F(id, sted + ": mangler en aria-label, der beskriver indholdet");
  if (/<(script|image|foreignObject|style|use)\b|\son\w+=|xlink:href|href=/i.test(s)) F(id, sted + ": script, billeder, <style>, <use> og links er ikke tilladt");
  (s.match(/\s(fill|stroke|color|stop-color)="([^"]*)"/g) || []).forEach(function (a) {
    if (!/="(none|url\(#[^)]+\))"$/.test(a)) F(id, sted + ": fast farve " + a.trim() + " (brug tg-klasser, så mørk tilstand virker)");
  });
  (s.match(/style="([^"]*)"/g) || []).forEach(function (a) {
    if (/(^|[;"\s])(fill|stroke|color|background|opacity)\s*:/.test(a)) F(id, sted + ": farve i style-attribut " + a);
  });
  (s.match(/class="([^"]*)"/g) || []).forEach(function (a) {
    a.slice(7, -1).split(/\s+/).filter(Boolean).forEach(function (k) {
      if (!KLASSER[k]) F(id, sted + ": klassen " + k + " findes ikke i style.css");
    });
  });
  (s.match(/\sid="([^"]+)"/g) || []).forEach(function (a) {
    var v = a.slice(5, -1);
    if (ids[v]) F(id, sted + ": id'et " + v + " er brugt to gange på siden");
    ids[v] = 1;
  });
  (s.match(/url\(#([^)]+)\)/g) || []).forEach(function (u) {
    var v = u.slice(5, -1);
    if (s.indexOf('id="' + v + '"') < 0) F(id, sted + ": " + u + " peger på et id, der ikke er i samme tegning");
  });
  // Tekst, der stikker ud over kanten (skøn: 6,6 px pr. tegn ved 11 px mono, 7 px ved sans).
  (s.match(/<text[^>]*>[^<]*<\/text>/g) || []).forEach(function (t) {
    var x = Number((t.match(/\sx="([-\d.]+)"/) || [])[1]);
    if (isNaN(x) || /transform=/.test(t)) return;
    var txt = t.replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, "x");
    var pr = /tg-call__navn|tg-kraft__tekst|tg-last__tekst/.test(t) ? 7.2 : (/tg-call__under/.test(t) ? 6 : 6.6);
    var fs1 = Number((t.match(/font-size="([\d.]+)"/) || [])[1]); if (fs1) pr = fs1 * 0.6;
    var l = txt.length * pr, anker = (t.match(/text-anchor="(\w+)"/) || [])[1];
    var v = anker === "middle" ? x - l / 2 : (anker === "end" ? x - l : x), hj = v + l;
    if (vb && (v < Number(vb.split(/[\s,]+/)[0]) - 4 || hj > b + 6)) A(id, sted + ': teksten "' + txt + '" ser ud til at gå ud over kanten (x ' + Math.round(v) + "–" + Math.round(hj) + " af " + b + ")");
  });
  if (FARVER.test(al || "") || FARVER.test(f.tekst || "")) A(id, sted + ": farveord i billedtekst eller aria-label (farverne skifter i mørk tilstand)");
}

function tjekFigur(id, f, n, ids) {
  if (!f || typeof f !== "object") return F(id, "figur " + n + " er tom");
  if (FIGUR.TYPER.indexOf(f.type) < 0) return F(id, "figur " + n + ": ukendt type " + f.type + " (findes: " + FIGUR.TYPER.join(", ") + ")");
  try { FIGUR.figur(f); } catch (e) { return F(id, "figur " + n + " kan ikke tegnes: " + e.message); }
  if (f.type === "svg") return tjekSvg(id, f, n, ids);
  if (f.type === "noegletal") {
    if (!Array.isArray(f.data) || f.data.length < 2 || f.data.length > 4) F(id, "figur " + n + " (noegletal): 2–4 tal");
    (f.data || []).forEach(function (d) { if (!Array.isArray(d) || d.length < 2) F(id, "figur " + n + " (noegletal): hvert felt er [etiket, tal, enhed]"); });
  }
  if (f.type === "soejler") {
    (f.data || []).forEach(function (d) { if (typeof d[1] !== "number") F(id, "figur " + n + " (soejler): tallet skal være et tal, ikke tekst: " + JSON.stringify(d)); });
    if (!f.note) A(id, "figur " + n + " (soejler): mangler note med kilde");
  }
  if (f.type === "daekning") {
    (f.raekker || []).forEach(function (r) { if (r.length !== f.kolonner.length) F(id, "figur " + n + " (daekning): rækken " + JSON.stringify(r[0]) + " har " + r.length + " celler, men der er " + f.kolonner.length + " kolonner"); });
  }
  if (f.type === "trin" && (f.trin || []).some(function (t) { return !Array.isArray(t) || t.length !== 2; })) F(id, "figur " + n + " (trin): hvert trin er [titel, tekst]");
  if (f.type === "tidslinje" && (f.punkter || []).some(function (t) { return !Array.isArray(t) || t.length !== 2; })) F(id, "figur " + n + " (tidslinje): hvert punkt er [hvornår, tekst]");
}

function tal(s) {
  return (synlig(s).match(/\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+,\d+|\d{2,}/g) || []);
}

function tjekFil(fil) {
  var mod;
  try { delete require.cache[require.resolve(fil)]; mod = require(fil); }
  catch (e) { F(path.basename(fil), "kan ikke indlæses: " + e.message); return; }
  var id = mod.id, side = mod.side;
  if (!id || !side) return F(path.basename(fil), "modulet skal have id og side");
  var del = id.split("/"), emne = GAMMEL.emner.filter(function (e) { return e.slug === del[0]; })[0];
  if (!emne) return F(id, "ukendt emne " + del[0]);
  var erEmne = del.length === 1;
  var gl = erEmne ? emne : (emne.undersider || []).filter(function (u) { return u.slug === del[1]; })[0];
  if (!gl) return F(id, "ukendt underside " + del[1]);
  if (erEmne) { var k0 = {}; Object.keys(gl).forEach(function (k) { if (["undersider", "data", "fag_ekstra"].indexOf(k) < 0) k0[k] = gl[k]; }); gl = k0; }
  var forventet = erEmne ? "_emne.js" : del[1] + ".js";
  if (path.basename(fil) !== forventet || path.basename(path.dirname(fil)) !== del[0]) F(id, "filen skal hedde " + del[0] + "/" + forventet);

  // Felter, der ikke må ændres (links, Google, sitemap).
  ["slug", "navn", "titel"].forEach(function (k) {
    if (side[k] !== gl[k]) F(id, k + " skal være uændret: " + JSON.stringify(gl[k]) + " (er " + JSON.stringify(side[k]) + ")");
  });
  if (erEmne && (side.undersider || side.data || side.fag_ekstra)) F(id, "emnesiden må ikke have undersider, data eller fag_ekstra (de bliver stående fra tilvalg.json)");
  if (harNy(side)) F(id, 'brug ikke "ny": true; hele filen er preview');
  ["kort", "beskrivelse", "manchet"].forEach(function (k) { if (!side[k]) F(id, "mangler " + k); });
  if (side.beskrivelse && side.beskrivelse.replace(/<[^>]+>/g, "").length > 158) A(id, "beskrivelsen er over 158 tegn og bliver klippet");

  // Visuel: topbillede, kort fortalt og indholdsfortegnelse.
  var v = side.visuel;
  if (!v) F(id, "mangler visuel");
  else {
    if (!v.hero || VISUEL.HERO.indexOf(v.hero) < 0) F(id, "visuel.hero skal være et af " + VISUEL.HERO.join(", "));
    if (v.toc !== true) F(id, "visuel.toc skal være true");
    if (!Array.isArray(v.kort_fortalt) || v.kort_fortalt.length < 3 || v.kort_fortalt.length > 4) F(id, "visuel.kort_fortalt skal have 3–4 felter");
    (v.kort_fortalt || []).forEach(function (k) { if (!Array.isArray(k) || k.length < 2) F(id, "kort_fortalt: hvert felt er [etiket, tal, under]"); });
  }

  // Afsnit.
  var af = side.afsnit || [], set = {};
  var minAfsnit = erEmne ? 12 : 12;
  if (af.length < minAfsnit) F(id, "kun " + af.length + " afsnit (mindst " + minAfsnit + ")");
  var ids = {};
  af.forEach(function (a, i) {
    var sted = "afsnit " + (i + 1) + " (" + (a.overskrift || "?") + ")";
    if (!a.overskrift || typeof a.overskrift !== "string") return F(id, sted + ": mangler overskrift");
    if (a.overskrift.length > 70) A(id, sted + ": lang overskrift");
    var hid = VISUEL.idFra(a.overskrift);
    if (set[hid]) F(id, sted + ": to afsnit får samme anker #" + hid);
    set[hid] = 1;
    ["tekst", "punkter", "efter"].forEach(function (k) { if (a[k] && !Array.isArray(a[k])) F(id, sted + ": " + k + " skal være en liste af afsnit"); });
    if (a.kort && (!Array.isArray(a.kort) || a.kort.some(function (k) { return !Array.isArray(k) || k.length !== 2; }))) F(id, sted + ": kort er [[titel, tekst], ...]");
    if (a.tabel) {
      if (!Array.isArray(a.tabel.kolonner) || !Array.isArray(a.tabel.raekker)) F(id, sted + ": tabel skal have kolonner og raekker");
      else a.tabel.raekker.forEach(function (r) { if (r.length !== a.tabel.kolonner.length) F(id, sted + ": tabelrækken " + JSON.stringify(r[0]) + " har forkert antal celler"); });
    }
    if (a.grafik && (del[0] !== "indretning" || GRAFIK.indexOf(a.grafik) < 0)) F(id, sted + ": grafik findes kun på indretning (" + GRAFIK.join(", ") + ")");
    if (a.punkt_ikon && ["ja", "nej", "trin"].indexOf(a.punkt_ikon) < 0) F(id, sted + ": punkt_ikon er ja, nej eller trin");
    var tekst = (a.tekst || []).concat(a.punkter || [], a.efter || []);
    if (!tekst.length && !a.figur && !a.tabel && !a.kort && !a.grafik) F(id, sted + ": tomt afsnit");
    if (!(a.tekst || []).length) A(id, sted + ": intet brødtekstafsnit (kun punkter, tabel eller figur)");
    [].concat(a.figur || []).forEach(function (f, j) { tjekFigur(id, f, (i + 1) + (j ? "." + (j + 1) : ""), ids); });
    // Regel 8: højst ét kolon pr. afsnit, ingen kæder af tankestreger. Regel 1: hele sætninger.
    (a.tekst || []).concat(a.efter || []).forEach(function (p) {
      var s = synlig(String(p).replace(/<a [^>]*>[^<]*<\/a>/g, "link"));
      if (!/^\s*Kilde/.test(s) && (s.match(/:/g) || []).length > 1) A(id, sted + ": mere end ét kolon i samme tekstafsnit (regel 8): " + s.slice(0, 90) + "…");
      s.split(/(?<=[.!?])\s+(?=[A-ZÆØÅ0-9])/).forEach(function (st) {
        if ((st.match(/ [–—] /g) || []).length > 1) A(id, sted + ": to tankestreger i én sætning (regel 8): " + st.slice(0, 90) + "…");
        if (M.antalOrd(st) > 38) A(id, sted + ": sætning på " + M.antalOrd(st) + " ord (regel 8): " + st.slice(0, 90) + "…");
      });
    });
  });

  // Ord og figurer i forhold til den gamle side.
  var mg = M.maal(gl), mn = M.maal(side);
  var minOrd = Math.max(erEmne ? 1100 : 900, Math.round(1.6 * mg.ord));
  if (mn.ord < minOrd) F(id, "brødteksten er " + mn.ord + " ord (før " + mg.ord + "); mindst " + minOrd + ", gerne " + Math.max(erEmne ? 1300 : 1100, 2 * mg.ord));
  else if (mn.ord < 2 * mg.ord) A(id, "brødteksten er " + mn.ord + " ord, under det dobbelte af før (" + mg.ord + ")");
  var minFig = Math.max(erEmne ? 7 : 8, mg.figurer + 3);
  if (mn.figurer < minFig) F(id, mn.figurer + " figurer (før " + mg.figurer + "); mindst " + minFig);
  if (mn.svg < mg.svg + 2) F(id, mn.svg + " tegninger (svg), før " + mg.svg + "; mindst 2 nye");
  var typer = Object.keys(mn.typer).length;
  if (typer < 4) A(id, "kun " + typer + " slags figurer; brug flere typer");

  // FAQ, spørgsmål og kilder.
  if (!Array.isArray(side.faq) || side.faq.length < 6) F(id, "faq skal have mindst 6 spørgsmål");
  (side.faq || []).forEach(function (q) { if (!Array.isArray(q) || q.length !== 2) F(id, "faq: hvert punkt er [spørgsmål, svar]"); });
  if (!Array.isArray(side.spoergsmaal) || side.spoergsmaal.length < 5) A(id, "spoergsmaal har færre end 5 punkter");
  var kilder = side.kilder || [];
  kilder.forEach(function (k) {
    if (!k.navn || !/^https:\/\//.test(k.url || "") || !/^\d{4}-\d{2}-\d{2}$/.test(k.dato || "")) F(id, "kilde " + JSON.stringify(k) + ": skal have navn, https-url og dato ÅÅÅÅ-MM-DD");
  });
  var nyeUrl = {};
  kilder.forEach(function (k) { nyeUrl[k.url] = 1; });
  (gl.kilder || []).forEach(function (k) { if (!nyeUrl[k.url]) A(id, "den gamle kilde er væk: " + k.url); });

  // Tekst: forbudte ord, pladsholdere, links, farver, moms.
  var vist = visteTekster(side), alleStr = strenge(side, "side", []);
  vist.forEach(function (p) {
    var s = synlig(p[1]);
    FORBUDT.forEach(function (r) { var m = s.match(r[0]); if (m) F(id, p[0] + ': "' + m[0] + '" (' + r[1] + ")"); });
    if (/[a-zæøå]\/[a-zæøå]/i.test(s.replace(/km\/t|kr\.?\/(md|mdr|måned|år|time|kWh|km)|kWh\/100|l\/100|m\/s|m³|og\/eller/gi, "")) &&
        !/\.(kolonner|raekker)\[|tabel|daekning/.test(p[0])) A(id, p[0] + ": skråstreg i løbende tekst (regel 7): " + s.slice(0, 80));
    if (ord("udbyder(?:e|en|ne|nes|ens)?").test(s) && !/(kolonner|raekker)/.test(p[0])) A(id, p[0] + ': "udbyder" i løbende tekst (regel 2: forhandleren eller leasingselskabet)');
    if (/(afgift|sats)[^.<]{0,80}?\d[\d.,]*\s*(kr|øre)/i.test(s)) A(id, p[0] + ": ligner en afgiftssats; satser skrives aldrig ind (henvis til myndigheden): " + s.slice(0, 90));
    if (ord("hentet").test(s) && /note|tekst/.test(p[0])) A(id, p[0] + ': kildenoter skriver "set den 7. oktober 2026"');
  });
  alleStr.forEach(function (p) {
    (p[1].match(/\{\{(\w+)\}\}/g) || []).forEach(function (m) {
      if (TAL_NOEGLER.indexOf(m.slice(2, -2)) < 0) F(id, p[0] + ": ukendt pladsholder " + m);
    });
    (p[1].match(/href="([^"]*)"/g) || []).forEach(function (h) {
      var u = h.slice(6, -1);
      if (/^\//.test(u)) { var r = u.split("#")[0]; if (r && !SITEMAP[r]) F(id, p[0] + ": internt link findes ikke: " + u); }
      else if (/^https?:/.test(u)) { if (!/^https:/.test(u)) A(id, p[0] + ": http-link " + u); }
      else if (!/^#/.test(u)) F(id, p[0] + ": mærkeligt link " + u);
    });
    (p[1].match(/<a [^>]*href="https?:[^>]*>/g) || []).forEach(function (a) {
      if (!/rel="noopener"/.test(a)) A(id, p[0] + ': eksternt link uden rel="noopener"');
    });
  });
  var moms = vist.filter(function (p) { return ord("(uden|ekskl\\.|ex\\.?|eksklusive|inkl\\.|inklusive) moms").test(synlig(p[1])); }).length;
  if (moms > 2) A(id, "moms nævnes " + moms + " steder ved tal (regel 9: én gang pr. side)");

  // Fakta: tal fra den gamle side, der ikke står på den nye.
  var nyTekst = vist.map(function (p) { return synlig(p[1]); }).join(" ") + " " + svgTekster(side).map(function (p) { return p[1]; }).join(" ");
  var glTekst = visteTekster(gl);
  var mangler = {};
  glTekst.forEach(function (p) { tal(p[1]).forEach(function (t) { if (nyTekst.indexOf(t) < 0) mangler[t] = 1; }); });
  var ml = Object.keys(mangler);
  if (ml.length) A(id, "tal fra den gamle side, der ikke står på den nye (tjek, at ingen fakta er tabt): " + ml.join(", "));

  // Nye eksterne kilder skal stå i kilder eller nye_fakta.
  var nf = mod.nye_fakta;
  if (!Array.isArray(nf)) F(id, "mangler nye_fakta (en tom liste, hvis der ingen nye fakta er)");
  else nf.forEach(function (x) { if (!Array.isArray(x) || x.length !== 2 || !/^https:\/\//.test(x[1])) F(id, "nye_fakta: hvert punkt er [påstand, https-kilde]"); });
  var glUrl = {};
  strenge(gl, "", []).forEach(function (p) { (p[1].match(/https:\/\/[^"\s<]+/g) || []).forEach(function (u) { glUrl[u] = 1; }); });
  var nfUrl = {};
  (nf || []).forEach(function (x) { nfUrl[x[1]] = 1; });
  alleStr.forEach(function (p) {
    (p[1].match(/https:\/\/[^"\s<]+/g) || []).forEach(function (u) {
      if (!glUrl[u] && !nfUrl[u] && !nyeUrl[u]) A(id, "ny kilde, der hverken står i kilder eller nye_fakta: " + u);
    });
  });

  console.log(id + ": " + mn.ord + " ord (før " + mg.ord + "), " + mn.figurer + " figurer (før " + mg.figurer + "), " +
    mn.svg + " tegninger (før " + mg.svg + "), " + af.length + " afsnit, " + (nf || []).length + " nye fakta");
}

// ── Kør ──────────────────────────────────────────────────────────────────────
var arg = process.argv[2];
var filer = [];
function mappe(d) {
  fs.readdirSync(d).filter(function (f) { return /\.js$/.test(f); }).forEach(function (f) { filer.push(path.join(d, f)); });
}
if (!arg) {
  fs.readdirSync(__dirname, { withFileTypes: true }).filter(function (x) { return x.isDirectory(); })
    .forEach(function (x) { mappe(path.join(__dirname, x.name)); });
} else {
  var p = path.resolve(fs.existsSync(arg) ? arg : path.join(__dirname, arg));
  if (fs.statSync(p).isDirectory()) mappe(p); else filer.push(p);
}
filer.forEach(tjekFil);
if (adv.length) console.log("\nADVARSLER (" + adv.length + "):\n  " + adv.join("\n  "));
if (fejl.length) { console.log("\nFEJL (" + fejl.length + "):\n  " + fejl.join("\n  ")); process.exit(1); }
console.log("\nIngen fejl i " + filer.length + " filer.");
