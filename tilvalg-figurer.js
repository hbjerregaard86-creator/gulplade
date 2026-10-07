// tilvalg-figurer.js — illustrationer paa siderne under /til-varebilen/
//
// En sektion i tilvalg.json kan have "figur": {...} eller en liste af dem.
// Typerne genbruger indretningssidernes klasser (tg-*), saa de foelger lys og
// moerk tilstand uden faste farver:
//   noegletal  { data: [[etiket, tal, enhed], ...], note }
//   soejler    { enhed, data: [[navn, tal, under?], ...], max?, note }   vandrette soejler
//   daekning   { kolonner: [...], raekker: [[navn, "ja"|"nej"|"tilvalg"|tekst, ...]], note }
//   trin       { trin: [[titel, tekst], ...] }
//   tidslinje  { punkter: [[naar, tekst], ...], note }
//   svg        { svg: "<svg ...>", tekst }   egen tegning med tg-klasser

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function tal(v) {
  return Number(v).toLocaleString("da-DK", { maximumFractionDigits: 1 });
}
function note(f) { return f.note ? '<p class="tg-note">' + f.note + '</p>' : ''; }

var TYPER = {
  noegletal: function (f) {
    return '<dl class="tg-noegle">' + f.data.map(function (d) {
      return '<div><dt>' + esc(d[0]) + '</dt><dd>' + (typeof d[1] === "number" ? tal(d[1]) : esc(d[1])) +
        (d[2] ? ' <span>' + esc(d[2]) + '</span>' : '') + '</dd></div>';
    }).join("") + '</dl>' + note(f);
  },
  soejler: function (f) {
    // max: fast skala, fx 100 for procent. Ellers er den hoejeste soejle fuld bredde.
    var max = f.max || Math.max.apply(null, f.data.map(function (d) { return d[1]; }));
    return '<figure class="tg"><div class="tg-soejler">' + f.data.map(function (d) {
      var pct = max ? Math.max(2, Math.round(100 * d[1] / max)) : 0;
      return '<div class="tg-soejle"><span class="tg-soejle__navn">' + esc(d[0]) +
        (d[2] ? '<small>' + esc(d[2]) + '</small>' : '') + '</span>' +
        '<span class="tg-soejle__bar"><i style="width:' + pct + '%;background:var(--gul)"></i></span>' +
        '<span class="tg-soejle__tal">' + tal(d[1]) + (f.enhed ? ' ' + esc(f.enhed) : '') + '</span></div>';
    }).join("") + '</div>' + (f.note ? '<figcaption>' + f.note + '</figcaption>' : '') + '</figure>';
  },
  daekning: function (f) {
    var celle = function (v) {
      if (v === "ja") return '<td class="tg-daek tg-daek--ja"><span aria-hidden="true">✓</span><span class="skjult">Ja</span></td>';
      if (v === "nej") return '<td class="tg-daek tg-daek--nej"><span aria-hidden="true">–</span><span class="skjult">Nej</span></td>';
      if (v === "tilvalg") return '<td class="tg-daek tg-daek--tilvalg">Tilvalg</td>';
      return '<td>' + v + '</td>';
    };
    return '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel tg-daekning"><thead><tr>' +
      f.kolonner.map(function (k) { return '<th scope="col">' + esc(k) + '</th>'; }).join("") +
      '</tr></thead><tbody>' + f.raekker.map(function (r) {
        return '<tr><th scope="row">' + r[0] + '</th>' + r.slice(1).map(celle).join("") + '</tr>';
      }).join("") + '</tbody></table></div>' + note(f);
  },
  trin: function (f) {
    var n = f.trin.length;
    return '<ol class="tg-proces"' + (n !== 4 && n <= 5 ? ' style="grid-template-columns:repeat(' + n + ',1fr)"' : '') + '>' +
      f.trin.map(function (t, i) {
        return '<li><span class="tg-proces__nr">' + (i + 1) + '</span><strong>' + esc(t[0]) + '</strong><p>' + t[1] + '</p></li>';
      }).join("") + '</ol>';
  },
  // Lodret tidslinje med prikker: forloebet efter en skade, aaret for daekskift.
  tidslinje: function (f) {
    return '<figure class="tg"><ol class="maerke-tidslinje tv-tidslinje">' + f.punkter.map(function (p) {
      return '<li><span class="maerke-tidslinje__aar">' + esc(p[0]) + '</span><p>' + p[1] + '</p></li>';
    }).join("") + '</ol>' + (f.note ? '<figcaption>' + f.note + '</figcaption>' : '') + '</figure>';
  },
  svg: function (f) {
    if (!/^\s*<svg[\s>]/.test(f.svg) || /<script|on\w+=/i.test(f.svg)) throw new Error("figur svg: ugyldig eller usikker SVG");
    return '<figure class="tg tg-tegning">' + f.svg + (f.tekst ? '<figcaption>' + f.tekst + '</figcaption>' : '') + '</figure>';
  }
};

function figur(f) {
  if (!f) return "";
  if (Array.isArray(f)) return f.map(figur).join("\n");
  var t = TYPER[f.type];
  if (!t) throw new Error("Ukendt figurtype: " + f.type);
  return t(f);
}

module.exports = { figur: figur, TYPER: Object.keys(TYPER) };
