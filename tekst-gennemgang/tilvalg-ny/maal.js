// maal.js — tæller ord og figurer på en side fra tilvalg.json (bruges af vis-side.js og tjek.js).
//
// "ord" er brødteksten: afsnittenes tekst, punkter, kort og tekst efter figuren.
// Manchet, FAQ, spørgsmål, tabeller og figurer tæller ikke med, så en side ikke
// kan blive "længere" af en større tabel.

function ren(s) {
  return String(s == null ? "" : s).replace(/<[^>]+>/g, " ").replace(/&[a-z]+;|&#\d+;/g, " ");
}
function antalOrd(s) {
  var m = ren(s).match(/[0-9A-Za-zÆØÅæøåÉéÜü][^\s]*/g);
  return m ? m.length : 0;
}

function broedtekst(side) {
  var dele = [];
  (side.afsnit || []).forEach(function (a) {
    dele = dele.concat(a.tekst || [], a.punkter || [], a.efter || []);
    (a.kort || []).forEach(function (k) { dele.push(k[0] + " " + k[1]); });
  });
  return dele;
}

function figurer(side) {
  var f = [];
  (side.afsnit || []).forEach(function (a) {
    [].concat(a.figur || []).forEach(function (x) { if (x) f.push(x); });
    if (a.grafik) f.push({ type: "grafik:" + a.grafik });
  });
  return f;
}

function maal(side) {
  var fs = figurer(side);
  return {
    ord: broedtekst(side).reduce(function (n, s) { return n + antalOrd(s); }, 0),
    figurer: fs.length,
    svg: fs.filter(function (x) { return x.type === "svg"; }).length,
    typer: fs.reduce(function (o, x) { o[x.type] = (o[x.type] || 0) + 1; return o; }, {})
  };
}

module.exports = { maal: maal, antalOrd: antalOrd, ren: ren, broedtekst: broedtekst, figurer: figurer };
