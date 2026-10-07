// vis-side.js — viser en side fra tilvalg.json, som den står i dag.
//
//   node tekst-gennemgang/tilvalg-ny/vis-side.js --alle            liste med alle sider og omfang
//   node tekst-gennemgang/tilvalg-ny/vis-side.js forsikring         emnesiden (uden undersider)
//   node tekst-gennemgang/tilvalg-ny/vis-side.js forsikring selvrisiko
//
// Skriver JSON til stdout. Brug den som udgangspunkt for den nye side.

var fs = require("fs");
var path = require("path");
var ROD = path.join(__dirname, "..", "..");
var M = require("./maal.js");

var t = JSON.parse(fs.readFileSync(path.join(ROD, "tilvalg.json"), "utf8"));
var a = process.argv.slice(2);

if (!a.length || a[0] === "--alle") {
  t.emner.forEach(function (e) {
    var m = M.maal(e);
    console.log(e.slug + "  (emneside: " + m.ord + " ord, " + m.figurer + " figurer, " + (e.afsnit || []).length + " afsnit)");
    (e.undersider || []).forEach(function (u) {
      var mu = M.maal(u);
      console.log("   " + e.slug + "/" + u.slug + "  " + mu.ord + " ord, " + mu.figurer + " figurer (" + mu.svg + " tegninger), " + (u.afsnit || []).length + " afsnit");
    });
  });
  process.exit(0);
}

var e = t.emner.filter(function (x) { return x.slug === a[0]; })[0];
if (!e) { console.error("Ukendt emne: " + a[0]); process.exit(1); }
if (a[1]) {
  var u = (e.undersider || []).filter(function (x) { return x.slug === a[1]; })[0];
  if (!u) { console.error("Ukendt underside: " + a[1] + ". Findes: " + e.undersider.map(function (x) { return x.slug; }).join(", ")); process.exit(1); }
  console.log(JSON.stringify(u, null, 1));
} else {
  var kopi = {};
  Object.keys(e).forEach(function (k) { if (k !== "undersider" && k !== "data") kopi[k] = e[k]; });
  kopi._undersider = (e.undersider || []).map(function (x) { return x.slug + " — " + x.navn; });
  console.log(JSON.stringify(kopi, null, 1));
}
