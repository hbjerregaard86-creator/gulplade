// Grøn omstilling (/groen-omstilling/), 02-10-2026: reglerne for diesel i byerne
// samlet ét sted, og en beregner, der regner skiftet fra diesel til el ud med
// vores egne tal pr. model: billigste tilbud, producentens forbrug og ejerafgift.
// Energipriser og tillæg er brugerens egne - standardværdierne står med kilde.
//
// Kaldes fra generate-pages.js med de samme hjælpefunktioner som beregner.js.

// Diesel/benzin-modellen og dens elektriske modstykke hos samme mærke.
var PAR = {
  "opel-combo": "opel-combo-electric",
  "peugeot-partner": "peugeot-e-partner",
  "renault-kangoo": "renault-kangoo-e-tech",
  "mercedes-citan": "mercedes-ecitan",
  "toyota-proace-city-diesel": "toyota-proace-city",
  "ford-transit-courier": "ford-e-transit-courier",
  "ford-transit-custom": "ford-e-transit-custom",
  "renault-trafic": "renault-trafic-e-tech",
  "peugeot-expert": "peugeot-e-expert",
  "citroen-jumpy": "citroen-e-jumpy",
  "toyota-proace-diesel": "toyota-proace",
  "mercedes-vito": "mercedes-evito",
  "volkswagen-transporter": "vw-e-transporter",
  "mercedes-sprinter": "mercedes-esprinter",
  "ford-transit": "ford-e-transit",
  "renault-master": "renault-master-e-tech",
  "opel-movano": "opel-movano-electric",
  "peugeot-boxer": "peugeot-e-boxer",
  "citroen-jumper": "citroen-e-jumper",
  "fiat-ducato": "fiat-e-ducato",
  "toyota-proace-max-diesel": "toyota-proace-max"
};

module.exports = function groenHTML(data, h, opt) {
  var el = {};
  try { el = require("./elbil.json").modeller || {}; } catch (e) {}
  var rader = h.alleTilbud(data).filter(function (r) { return r.samlet != null; });
  var billigst = {};
  rader.forEach(function (r) {
    if (!billigst[r.bil.id] || r.samlet < billigst[r.bil.id].samlet) billigst[r.bil.id] = r;
  });
  function model(b) {
    var r = billigst[b.id];
    return {
      id: b.id, navn: b.maerke + " " + b.model, dm: b.drivmiddel,
      ydelse: r ? Math.round(r.samlet) : null,
      udbyder: r ? r.t.udbyder : null,
      kmL: b.forbrug_km_pr_l || null,
      kwh: (el[b.id] || {}).forbrug_kwh_100km || null,
      afgift: b.ejerafgift_halvaar_kr ? b.ejerafgift_halvaar_kr * 2 : null,
      co2: b.co2_g_pr_km != null ? b.co2_g_pr_km : null,
      m3: (b.lastrum || {}).volumen_m3 || null,
      k: (h.stoerrelse && h.stoerrelse(b)) || "andet",
      sti: r ? r.sti : null
    };
  }
  var biler = data.varebiler || [];
  var fossil = biler.filter(function (b) { return (b.drivmiddel === "diesel" || b.drivmiddel === "benzin") && billigst[b.id]; })
    .map(model).sort(function (a, b) { return a.navn.localeCompare(b.navn, "da"); });
  var elM = biler.filter(function (b) { return b.drivmiddel === "el" && billigst[b.id]; })
    .map(model).sort(function (a, b) { return a.navn.localeCompare(b.navn, "da"); });
  var par = {};
  Object.keys(PAR).forEach(function (k) {
    if (fossil.some(function (m) { return m.id === k; }) && elM.some(function (m) { return m.id === PAR[k]; })) par[k] = PAR[k];
  });
  var start = par["mercedes-vito"] ? "mercedes-vito" : Object.keys(par)[0];
  var KL = { pizzabil: "Lille varebil", mellem: "Mellemstor varebil", stor: "Stor varebil", andet: "Ladvogn / pickup" };
  var ORDEN = ["pizzabil", "mellem", "stor", "andet"];
  var klasser = ORDEN.filter(function (k) {
    return Object.keys(par).some(function (d) { return fossil.some(function (m) { return m.id === d && m.k === k; }); });
  });
  function etiket(m) { return m.navn + (m.m3 ? " · " + String(m.m3).replace(".", ",") + " m³" : ""); }

  // Par-tabellen: billigste tilbud af hver, side om side.
  var parRader = Object.keys(par).map(function (k) {
    var d = fossil.filter(function (m) { return m.id === k; })[0], e = elM.filter(function (m) { return m.id === par[k]; })[0];
    return { d: d, e: e, forskel: e.ydelse - d.ydelse };
  }).sort(function (a, b) { return (ORDEN.indexOf(a.d.k) - ORDEN.indexOf(b.d.k)) || (a.forskel - b.forskel); });
  var billigereEl = parRader.filter(function (p) { return p.forskel <= 0; }).length;

  var P = opt.priser;
  var title = h.titel("Grøn omstilling af varebilen — regler og elberegner");
  var desc = h.beskrivelse("Miljøzoner, nulemissionszoner og bøder for varebiler — og hvad det koster at skifte fra diesel til el. Beregner med " +
    Object.keys(par).length + " modelpar og aktuelle leasingtilbud.");
  var faq = opt.faq;
  var schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "Elberegner til varebil: diesel eller el", url: h.BASE_URL + "/groen-omstilling/",
        applicationCategory: "FinanceApplication", operatingSystem: "Web", inLanguage: "da",
        offers: { "@type": "Offer", price: "0", priceCurrency: "DKK" } },
      { "@type": "FAQPage", mainEntity: faq.map(function (q) {
        return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forsiden", item: h.BASE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Grøn omstilling" } ] }
    ]
  });

  function felt(id, label, enhed, step, hj) {
    return '<label class="beregner__felt"><span>' + label + '</span><span class="beregner__input">' +
      '<input type="number" inputmode="decimal" min="0" step="' + (step || 1) + '" id="' + id + '">' +
      '<em>' + enhed + '</em></span>' + (hj ? '<small class="groen__hj">' + hj + '</small>' : '') + '</label>';
  }
  // Grupperet efter størrelse, så listen kan læses uden filteret (og uden JS).
  function vaelg(id, liste, valgt) {
    return '<select id="' + id + '">' + ORDEN.map(function (k) {
      var L = liste.filter(function (m) { return m.k === k; });
      return L.length ? '<optgroup label="' + KL[k] + '">' + L.map(function (m) {
        return '<option value="' + m.id + '"' + (m.id === valgt ? ' selected' : '') + '>' + h.esc(etiket(m)) + '</option>';
      }).join("") + '</optgroup>' : '';
    }).join("") + '</select>';
  }

  return [
    h.hoved(title, desc, h.BASE_URL + "/groen-omstilling/", schema),
    h.header(),
    '<main id="indhold" class="groen-side">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Grøn omstilling</li></ol></nav>',
    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Regler · zoner · beregner</p>',
    '  <h1>Grøn omstilling af varebilen</h1>',
    '  <p class="hero-ny__manchet">' + opt.manchet + '</p>',
    '  <p class="groen-hop"><a class="knap knap--primaer" href="#beregner">Regn skiftet ud i elberegneren ↓</a>' +
      '<a class="knap knap--sekundaer" href="/groen-omstilling/ladetid/">Hvad koster det i ladetid?</a>' +
      '<a class="knap knap--sekundaer" href="#regler">Se reglerne</a></p>',
    '</section>',
    '<hr class="groen-skiller">',

    '<section class="sektion groen-regler" id="regler">',
    '  <h2>Reglerne, der gælder nu</h2>',
    '  <p class="kilde">Gennemgået ' + opt.dato + ' hos myndighederne. Kilderne står under hvert punkt.</p>',
    '  <div class="groen-regler__gitter">',
    opt.regler.map(function (x) {
      return '<article class="groen-kort"><p class="groen-kort__status">' + x.status + '</p><h3>' + x.h + '</h3>' +
        x.p.map(function (p) { return '<p>' + p + '</p>'; }).join('') +
        (x.link ? '<p class="groen-kort__link"><a href="' + x.link[1] + '">' + x.link[0] + ' →</a></p>' : '') +
        '<p class="kilde">Kilde: ' + x.kilder.map(function (k) { return '<a href="' + k[1] + '" rel="noopener" target="_blank">' + k[0] + '</a>'; }).join(', ') + '</p></article>';
    }).join("\n"),
    '  </div>',
    '</section>',

    '<section class="sektion beregner groen-beregner" id="beregner">',
    '  <h2>Hvad koster det at skifte fra diesel til el?</h2>',
    '  <p class="sektion__manchet">Vælg din nuværende eller påtænkte bil og dens elektriske modstykke. Ydelse, forbrug og ejerafgift hentes fra vores data — du kan rette alle tal. Alt regnes i din browser, intet gemmes.</p>',
    '  <div class="groen-str" role="group" aria-label="Størrelse">' +
      '<span class="groen-str__lbl">Størrelse</span>' +
      '<button type="button" data-k="alle" aria-pressed="true">Alle</button>' +
      klasser.map(function (k) { return '<button type="button" data-k="' + k + '" aria-pressed="false">' + KL[k].replace(" varebil", "") + '</button>'; }).join("") +
    '</div>',
    '  <div class="beregner__gitter">',
    '    <fieldset class="beregner__tilbud"><legend>Diesel / benzin</legend>',
    '      <label class="beregner__felt"><span>Model</span>' + vaelg("dm", fossil, start) + '</label>',
    felt("dy", "Leasing inkl. udbetaling", "kr./md.", 1, '<span id="dyk"></span>'),
    felt("df", "Forbrug (WLTP)", "km/l", 0.1),
    felt("da", "Grøn ejerafgift", "kr./år"),
    '    </fieldset>',
    '    <fieldset class="beregner__tilbud"><legend>El</legend>',
    '      <label class="beregner__felt"><span>Model</span>' + vaelg("em", elM, par[start]) + '</label>',
    felt("ey", "Leasing inkl. udbetaling", "kr./md.", 1, '<span id="eyk"></span>'),
    felt("ef", "Forbrug (WLTP)", "kWh/100 km", 0.1),
    felt("ea", "Grøn ejerafgift", "kr./år"),
    '    </fieldset>',
    '  </div>',
    '  <fieldset class="beregner__tilbud groen-faelles"><legend>Din kørsel og dieselprisen</legend>',
    '  <div class="groen-faelles__gitter groen-faelles__gitter--5">',
    felt("km", "Kørsel pr. år", "km"),
    felt("mdr", "Periode", "mdr."),
    felt("pd", "Dieselpris ekskl. moms", "kr./l", 0.01, P.diesel.hj),
    felt("till", "Tillæg til WLTP", "%", 1, "Vores antagelse"),
    felt("lade", "Ladeboks", "kr.", 1, "Inkl. installation"),
    '  </div></fieldset>',
    '  <fieldset class="beregner__tilbud groen-faelles"><legend>Strøm til elbilen</legend>',
    '  <div class="groen-lad" role="group" aria-label="Sådan betales strømmen">' +
      '<button type="button" data-lad="kwh" aria-pressed="true">Pr. kWh, hjemme og ude</button>' +
      '<button type="button" data-lad="fast" aria-pressed="false">Fastpris hos Clever</button></div>',
    '  <div class="groen-faelles__gitter" id="lad-kwh">',
    felt("pe", "Strøm hjemme ekskl. moms", "kr./kWh", 0.01, P.el.hj),
    felt("ude", "Andel ladet ude", "%", 1, P.ude.hj),
    felt("pu", "Pris ude ekskl. moms", "kr./kWh", 0.01, P.ude.prisHj),
    '  </div>',
    '  <div class="groen-faelles__gitter" id="lad-fast" hidden>',
    felt("cm", "Clever One Business Van", "kr./md.", 1, P.clever.hj),
    felt("ct", "Evt. energitillæg", "kr./md.", 1, "Clever kan lægge et tillæg til"),
    '  </div></fieldset>',
    '  <div class="groen-res" id="res" aria-live="polite"></div>',
    '  <p class="kilde">Beløb ekskl. moms, som tilbuddene. Leasing er det billigste aktuelle tilbud på modellen med udbetalingen fordelt over løbetiden; udstyr, løbetid og indhold kan være forskellige. Forbrug og ejerafgift er producentens tal for den udgave af bilen, modelsiden viser. Service, dæk og forsikring er ikke med — se hvad tilbuddet dækker på modelsiden.</p>',
    '  <p class="kilde">' + P.note + '</p>',
    '</section>',

    parRader.length ? [
      '<section class="sektion">',
      '  <h2>Diesel og el side om side</h2>',
      '  <p>' + parRader.length + ' modeller findes både med dieselmotor og som el hos samme mærke. Her er det billigste aktuelle tilbud på hver, inkl. udbetaling. På ' + billigereEl + ' af dem er elversionen allerede billigst at lease.</p>',
      '  <div class="sbs__rul"><table class="sbs">',
      '  <thead><tr><th>Model</th><th>Diesel</th><th>El</th><th>Forskel</th></tr></thead><tbody>',
      parRader.map(function (p, i) {
        var ny = i === 0 || parRader[i - 1].d.k !== p.d.k;
        return (ny ? '<tr class="sbs__gruppe"><th colspan="4" scope="rowgroup">' + KL[p.d.k] + '</th></tr>' : '') +
          '<tr><th scope="row">' + h.esc(p.d.navn) + (p.d.m3 ? '<small>' + String(p.d.m3).replace(".", ",") + ' m³</small>' : '') + '</th>' +
          '<td><a href="' + p.d.sti + '">' + h.talDK(p.d.ydelse) + ' kr./md.</a><small>' + h.esc(p.d.udbyder) + '</small></td>' +
          '<td><a href="' + p.e.sti + '">' + h.talDK(p.e.ydelse) + ' kr./md.</a><small>' + h.esc(p.e.navn) + ' · ' + h.esc(p.e.udbyder) + '</small></td>' +
          '<td>' + (p.forskel > 0 ? '+' : p.forskel < 0 ? '−' : '') + h.talDK(Math.abs(p.forskel)) + ' kr.</td></tr>';
      }).join(""),
      '  </tbody></table></div>',
      '  <p class="kilde">Forskel er el minus diesel pr. måned. Energi og ejerafgift er ikke med her — det er dem, beregneren lægger til.</p>',
      '</section>'
    ].join("\n") : '',

    (function () {
      var art = [];
      try { art = JSON.parse(require("fs").readFileSync(require("path").join(__dirname, "viden-udfyldt.json"), "utf8")).artikler; } catch (e) {}
      art = art.filter(function (a) { return a.emne === "Grøn omstilling"; });
      if (!art.length) return '';
      function rens(s) { return h.esc(String(s || "").replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")); }
      return [
        '<section class="sektion">',
        '  <h2>Artikler om grøn omstilling</h2>',
        '  <div class="vidensgitter">',
        art.map(function (a) {
          var sti = (a.sektion === "nyheder" ? "/nyheder/" : "/haandbogen/") + a.slug + "/";
          return '<article class="videnkort"><a href="' + sti + '">' +
            (a.sektion === "nyheder" ? '<p class="videnkort__emne">Nyhed</p>' : '') +
            '<h3>' + h.esc(a.h1) + '</h3><p class="videnkort__kort">' + rens(a.kort) + '</p>' +
            '<p class="videnkort__meta">' + a.laesetid + ' min. · ' + (a.kilder || []).length + ' kilder</p></a></article>';
        }).join("\n"),
        '  </div>',
        '</section>'
      ].join("\n");
    })(),

    '<section class="sektion--kort">',
    '  <h2>Læs videre</h2>',
    '  <ul class="viden__liste">',
    opt.links.map(function (l) { return '<li><a href="' + l[1] + '">' + l[0] + '</a>' + (l[2] ? ' — ' + l[2] : '') + '</li>'; }).join(""),
    '  </ul>',
    '</section>',

    '<section class="sektion--kort faq"><h2>Spørgsmål om grøn omstilling</h2>' +
      faq.map(function (q) { return '<details><summary>' + h.esc(q[0]) + '</summary><p>' + h.esc(q[1]) + '</p></details>'; }).join("") +
    '</section>',
    '<section class="sektion--kort"><h2>Skal flåden skifte?</h2><p>Vi henter tilbud på elvarebiler fra forhandlere og leasingselskaber og sammenligner dem skriftligt med det, I kører i i dag. <a href="/faa-tilbud/">Få tilbud</a> — eller få et eksisterende tilbud gennemgået med et <a href="/tilbudstjek/">tilbudstjek</a>.</p></section>',
    '</main>',
    '<script>',
    '(function () {',
    '  var D = ' + JSON.stringify(fossil.map(function (m) { return [m.id, m.ydelse, m.kmL, m.afgift, m.co2, m.udbyder, m.k, etiket(m)]; })) + ';',
    '  var E = ' + JSON.stringify(elM.map(function (m) { return [m.id, m.ydelse, m.kwh, m.afgift, m.udbyder, m.k, etiket(m)]; })) + ';',
    '  var KL = ' + JSON.stringify(KL) + ', ORDEN = ' + JSON.stringify(ORDEN) + ';',
    '  var PAR = ' + JSON.stringify(par) + ';',
    '  var STD = ' + JSON.stringify({ km: 15000, mdr: 60, pd: P.diesel.v, pe: P.el.v, ude: P.ude.v, pu: P.ude.pris, cm: P.clever.v, ct: 0, till: 15, lade: 6000 }) + ';',
    '  function $(id) { return document.getElementById(id); }',
    '  function find(L, id) { for (var i = 0; i < L.length; i++) if (L[i][0] === id) return L[i]; return null; }',
    '  function v(id) { var x = $(id).value; return x === "" ? null : Number(x); }',
    '  function kr(n) { return Math.round(n).toLocaleString("da-DK") + " kr."; }',
    '  var co2 = null;',
    '  function fyldD() { var m = find(D, $("dm").value); co2 = m[4]; $("dy").value = m[1] || ""; $("df").value = m[2] || ""; $("da").value = m[3] || "";',
    '    $("dyk").textContent = m[5] ? "Billigste tilbud: " + m[5] : ""; }',
    '  function fyldE() { var m = find(E, $("em").value); $("ey").value = m[1] || ""; $("ef").value = m[2] || ""; $("ea").value = m[3] || "";',
    '    $("eyk").textContent = m[4] ? "Billigste tilbud: " + m[4] : ""; }',
    '  Object.keys(STD).forEach(function (k) { $(k).value = STD[k]; });',
    '  try { var q = new URLSearchParams(location.search), qd = q.get("d"), qe = q.get("e");',
    '    if (qd && find(D, qd)) $("dm").value = qd; if (qe && find(E, qe)) $("em").value = qe; } catch (x) {}',
    '  fyldD(); fyldE();',
    '  $("dm").addEventListener("change", function () { fyldD(); if (PAR[$("dm").value] && find(E, PAR[$("dm").value]) && [].some.call($("em").options, function (o) { return o.value === PAR[$("dm").value]; })) { $("em").value = PAR[$("dm").value]; fyldE(); } opdater(); });',
    '  function byg(sel, L, ki, k, valgt) {',
    '    sel.innerHTML = ORDEN.filter(function (o) { return k === "alle" || o === k; }).map(function (o) {',
    '      var M = L.filter(function (m) { return m[ki] === o; });',
    '      return M.length ? "<optgroup label=\\"" + KL[o] + "\\">" + M.map(function (m) { return "<option value=\\"" + m[0] + "\\">" + m[ki + 1] + "</option>"; }).join("") + "</optgroup>" : "";',
    '    }).join("");',
    '    if (valgt && [].some.call(sel.options, function (o) { return o.value === valgt; })) sel.value = valgt;',
    '  }',
    '  document.querySelectorAll(".groen-str button").forEach(function (b) {',
    '    b.addEventListener("click", function () {',
    '      document.querySelectorAll(".groen-str button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });',
    '      var k = b.getAttribute("data-k"), d = $("dm").value;',
    '      byg($("dm"), D, 6, k, d);',
    '      if ($("dm").value !== d || k !== "alle") {',
    '        var medPar = [].filter.call($("dm").options, function (o) { return PAR[o.value]; })[0];',
    '        if ($("dm").value !== d && medPar) $("dm").value = medPar.value;',
    '      }',
    '      byg($("em"), E, 5, k, PAR[$("dm").value] || $("em").value);',
    '      fyldD(); fyldE(); opdater();',
    '    });',
    '  });',
    '  $("em").addEventListener("change", function () { fyldE(); opdater(); });',
    '  var lad = "kwh";',
    '  document.querySelectorAll(".groen-lad button").forEach(function (b) {',
    '    b.addEventListener("click", function () {',
    '      lad = b.getAttribute("data-lad");',
    '      document.querySelectorAll(".groen-lad button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });',
    '      $("lad-kwh").hidden = lad !== "kwh"; $("lad-fast").hidden = lad !== "fast";',
    '      opdater();',
    '    });',
    '  });',
    '  function opdater() {',
    '    var km = v("km"), mdr = v("mdr"), t = 1 + (v("till") || 0) / 100, lade = v("lade") || 0;',
    '    var r = $("res");',
    '    if (!km || !mdr || v("pd") == null || (lad === "kwh" ? v("pe") == null || v("pu") == null : v("cm") == null)) { r.innerHTML = "<p>Udfyld kørsel, periode og energipriser.</p>"; return; }',
    '    var mangler = [];',
    '    if (!v("df")) mangler.push("forbrug på dieselbilen"); if (!v("ef")) mangler.push("forbrug på elbilen");',
    '    if (v("da") == null) mangler.push("ejerafgift på dieselbilen"); if (v("ea") == null) mangler.push("ejerafgift på elbilen");',
    '    if (mangler.length) { r.innerHTML = "<p>Producenten oplyser ikke " + mangler.join(" og ") + " for den valgte model i vores data. Tast tallet fra prislisten, så regner beregneren videre.</p>"; return; }',
    '    var andelUde = Math.min(Math.max((v("ude") || 0) / 100, 0), 1);',
    '    var dE = km / 12 / v("df") * t * v("pd");',
    '    var eE = lad === "fast" ? (v("cm") || 0) + (v("ct") || 0)',
    '      : km / 12 * v("ef") / 100 * t * ((1 - andelUde) * v("pe") + andelUde * v("pu"));',
    '    var dA = (v("da") || 0) / 12, eA = (v("ea") || 0) / 12, dY = v("dy") || 0, eY = v("ey") || 0;',
    '    var dM = dY + dE + dA, eM = eY + eE + eA, diff = dM - eM;',
    '    var dT = dM * mdr, eT = eM * mdr + lade, tdiff = dT - eT;',
    '    function rk(n, a, b) { return "<tr><th scope=\\"row\\">" + n + "</th><td>" + kr(a) + "</td><td>" + kr(b) + "</td></tr>"; }',
    '    var tilbage = lade > 0 && diff > 0 ? Math.ceil(lade / diff) : null;',
    '    var ton = co2 ? co2 * km / 1e6 * t : null;',
    '    r.innerHTML = "<div class=\\"sbs__rul\\"><table class=\\"sbs\\"><thead><tr><th>Pr. måned</th><th>Diesel</th><th>El</th></tr></thead><tbody>" +',
    '      rk("Leasing", dY, eY) + rk(lad === "fast" ? "Brændstof / strøm (Clever fastpris)" : "Brændstof / strøm", dE, eE) + rk("Grøn ejerafgift", dA, eA) +',
    '      "<tr class=\\"groen-res__sum\\"><th scope=\\"row\\">I alt pr. måned</th><td>" + kr(dM) + "</td><td>" + kr(eM) + "</td></tr>" +',
    '      "<tr><th scope=\\"row\\">I alt over " + mdr + " mdr." + (lade ? " (el inkl. ladeboks)" : "") + "</th><td>" + kr(dT) + "</td><td>" + kr(eT) + "</td></tr>" +',
    '      "</tbody></table></div>" +',
    '      "<div class=\\"groen-res__boks\\"><p class=\\"groen-res__konklusion\\"><strong>" + (Math.abs(tdiff) < 1 ? "De to koster det samme over perioden." :',
    '        (tdiff > 0 ? "El er " + kr(tdiff) + " billigere" : "El er " + kr(-tdiff) + " dyrere") + " over " + mdr + " måneder") + "</strong>" +',
    '      (Math.abs(diff) >= 1 ? " — " + kr(Math.abs(diff)) + " " + (diff > 0 ? "mindre" : "mere") + " om måneden" + (lade ? " før ladeboksen" : "") + "." : ".") +',
    '      (tilbage ? " Ladeboksen er tjent hjem efter " + tilbage + " måneder." : "") + "</p>" +',
    '      (ton ? "<p class=\\"groen-res__co2\\">Dieselbilen udleder omkring <strong>" + ton.toFixed(1).replace(".", ",") + " ton CO₂ om året</strong> ved din kørsel (producentens WLTP-tal plus dit tillæg). Elbilen udleder intet fra udstødningen.</p>" : "") + "</div>";',
    '  }',
    '  document.querySelectorAll(".groen-beregner input, .groen-beregner select").forEach(function (x) { x.addEventListener("input", opdater); });',
    '  opdater();',
    '})();',
    '</script>',
    h.footer(),
    '</body></html>'
  ].join("\n");
};

// Parrene bruges også af modelsiderne (generate-pages.js).
module.exports.PAR = PAR;
