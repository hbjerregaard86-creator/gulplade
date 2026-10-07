// flet.js — samler de godkendte filer i tekst-gennemgang/tilvalg-ny/<emne>/ til
// tilvalg-ny.json i projektets rod, som generate-tilvalg.js læser med
// GULPLADE_TILVALG_NY=1.
//
//   node tekst-gennemgang/tilvalg-ny/flet.js
//
// nye_fakta kommer ikke med; den liste er kun til faktatjekket.

var fs = require("fs");
var path = require("path");
var ROD = path.join(__dirname, "..", "..");

var ud = { _om: "Omskrevne sider til /til-varebilen/ (07-10-2026). Bygges kun med GULPLADE_TILVALG_NY=1. Kilde: tekst-gennemgang/tilvalg-ny/.", emner: {}, undersider: {} };
var n = 0;
fs.readdirSync(__dirname, { withFileTypes: true }).filter(function (x) { return x.isDirectory(); }).forEach(function (d) {
  fs.readdirSync(path.join(__dirname, d.name)).filter(function (f) { return /\.js$/.test(f); }).forEach(function (f) {
    var fil = path.join(__dirname, d.name, f);
    delete require.cache[require.resolve(fil)];
    var m = require(fil);
    if (m.id.indexOf("/") < 0) ud.emner[m.id] = m.side;
    else ud.undersider[m.id] = m.side;
    n++;
  });
});
fs.writeFileSync(path.join(ROD, "tilvalg-ny.json"), JSON.stringify(ud, null, 1), "utf8");
console.log("tilvalg-ny.json: " + Object.keys(ud.emner).length + " emnesider og " + Object.keys(ud.undersider).length + " undersider (" + n + " filer)");
