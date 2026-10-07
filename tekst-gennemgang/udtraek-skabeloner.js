// Trækker de sætninger ud af dist/, som generatorerne skriver på mange sider
// (skabelonsætninger), så de kan gennemgås sprogligt ét sted (04-10-2026).
// Tal, modelnavne og udbydere erstattes med pladsholdere, og sætninger, der
// står på mindst 3 sider, skrives til skabeloner.json sorteret efter antal sider.
//   node tekst-gennemgang/udtraek-skabeloner.js
var fs = require("fs"), path = require("path");
var ROD = path.join(__dirname, "..");
var DIST = path.join(ROD, "dist");

var V = JSON.parse(fs.readFileSync(path.join(ROD, "varebiler.json"), "utf8")).varebiler;
var navne = {}, udbydere = {};
V.forEach(function (b) {
  navne[b.maerke + " " + b.model] = 1; navne[b.model] = 1; navne[b.maerke] = 1;
  (b.tilbud || []).forEach(function (t) { udbydere[t.udbyder] = 1; if (t.variant) navne[t.variant] = 1; });
});
function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
var reUdb = new RegExp(Object.keys(udbydere).sort(function (a, b) { return b.length - a.length; }).map(esc).join("|"), "g");
var reNavn = new RegExp(Object.keys(navne).filter(function (n) { return n.length > 2; })
  .sort(function (a, b) { return b.length - a.length; }).map(esc).join("|"), "g");

function sider(dir) {
  var ud = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (e) {
    var p = path.join(dir, e.name);
    if (e.isDirectory()) ud = ud.concat(sider(p));
    else if (e.name === "index.html") ud.push(p);
  });
  return ud;
}
function tekstAf(html) {
  html = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<(header|footer|nav)[\s\S]*?<\/\1>/g, "");
  var stykker = [];
  html.replace(/<(p|li|summary|dd|figcaption|h1|h2|h3|td)\b[^>]*>([\s\S]*?)<\/\1>/g, function (_, tag, indre) {
    var t = indre.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
    if (t.length > 25) stykker.push({ tag: tag, t: t });
  });
  return stykker;
}
function saetninger(t) { return t.split(/(?<=[.!?])\s+(?=[A-ZÆØÅ"„])/); }
function normal(s) {
  return s.replace(reUdb, "‹udbyder›").replace(reNavn, "‹bil›")
    .replace(/\d+(?:[.,]\d+)*/g, "#").replace(/(‹bil›\s*)+/g, "‹bil› ");
}

var grupper = {};
sider(DIST).forEach(function (fil) {
  var sti = "/" + path.relative(DIST, path.dirname(fil)).split(path.sep).join("/") + "/";
  var type = sti.split("/")[1] || "forside";
  var set = {};
  tekstAf(fs.readFileSync(fil, "utf8")).forEach(function (st) {
    saetninger(st.t).forEach(function (s) {
      if (s.length < 25) return;
      var n = normal(s);
      if (set[n]) return; set[n] = 1;
      var g = grupper[n] = grupper[n] || { skabelon: n, sider: 0, typer: {}, eksempel: s, eksempelSide: sti };
      g.sider++; g.typer[type] = (g.typer[type] || 0) + 1;
    });
  });
});
var liste = Object.keys(grupper).map(function (k) { return grupper[k]; })
  .filter(function (g) { return g.sider >= 3; })
  .sort(function (a, b) { return b.sider - a.sider; });
fs.writeFileSync(path.join(__dirname, "skabeloner.json"), JSON.stringify(liste, null, 1), "utf8");
console.log(liste.length + " skabelonsætninger på 3+ sider");
