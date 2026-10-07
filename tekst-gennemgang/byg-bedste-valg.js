// Fletter guidernes tekster (bedste-tekster.js) og valg (bedste-valg-kladde.js)
// til bedste-valg.json i roden, som generate-pages.js læser med GULPLADE_BEDSTE_NY=1.
// Tjekker samtidig, at hver valgt bil faktisk kan vælges i guiden (kandidater.json,
// som GULPLADE_DUMP_KANDIDATER=1 node generate-pages.js skriver).
//
//   node tekst-gennemgang/byg-bedste-valg.js
var fs = require("fs");
var path = require("path");

var tekster = require("./bedste-tekster.js");
var kladde = require("./bedste-valg-kladde.js");
var kand = JSON.parse(fs.readFileSync(path.join(__dirname, "kandidater.json"), "utf8"));

var ud = {
  _om: "Vores valg på guiderne under /bedste-tilbud/ (07-10-2026). Bygges af tekst-gennemgang/byg-bedste-valg.js. " +
       "Vises kun med GULPLADE_BEDSTE_NY=1, indtil brugeren har godkendt det på preview.",
  om_billigst: kladde._om_billigst || {},
  guider: {}
};
var fejl = 0;

Object.keys(tekster).forEach(function (slug) {
  var t = tekster[slug], v = kladde[slug] || {}, k = kand[slug];
  if (!k) { console.log("ADVARSEL: " + slug + " findes ikke i kandidater.json"); return; }
  var g = Object.assign({}, t, v);
  delete g.faq_ret;
  if (t.faq_ret) {
    var faq = (k.faq || []).slice();
    Object.keys(t.faq_ret).forEach(function (i) { faq[+i] = t.faq_ret[i]; });
    g.faq = faq.filter(Boolean);
  }
  var ids = k.modeller.map(function (m) { return m.id; });
  (g.valg || []).concat(g.ogsaa || []).forEach(function (x) {
    if (ids.indexOf(x.model) < 0) { console.log("FEJL: " + slug + " vælger " + x.model + ", som ikke er med i guiden"); fejl++; }
  });
  if (!(g.valg || []).length) console.log("MANGLER VALG: " + slug);
  ud.guider[slug] = g;
});

fs.writeFileSync(path.join(__dirname, "..", "bedste-valg.json"), JSON.stringify(ud, null, 1), "utf8");
console.log("OK: bedste-valg.json (" + Object.keys(ud.guider).length + " guider" + (fejl ? ", " + fejl + " fejl" : "") + ")");
