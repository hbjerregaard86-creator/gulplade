// Leasingberegneren (/leasingberegner/). Ren browser-regning: intet sendes nogen
// steder hen. Den regner det ene tal, resten af siden også regner - ydelsen plus
// udbetalingen fordelt over løbetiden - og viser, hvor tallet ligger blandt de
// tilbud, vi har indsamlet i samme størrelsesklasse.
//
// Kaldes fra generate-pages.js med de hjælpefunktioner, siden i forvejen bruger,
// så header, footer og hoved er de samme som alle andre steder.

module.exports = function beregnerHTML(data, h) {
  var rader = h.alleTilbud(data).filter(function (r) { return r.samlet != null; });
  var klasser = { pizzabil: "Lille varebil", mellem: "Mellemstor varebil", stor: "Stor varebil", andet: "Ladvogn / pickup" };
  var fordeling = { alle: [] };
  rader.forEach(function (r) {
    var k = (r.bil.karrosseri === "kassevogn") ? h.stoerrelse(r.bil) : "andet";
    (fordeling[k] = fordeling[k] || []).push(Math.round(r.samlet));
    fordeling.alle.push(Math.round(r.samlet));
  });
  Object.keys(fordeling).forEach(function (k) { fordeling[k].sort(function (a, b) { return a - b; }); });

  var title = h.titel("Leasingberegner til varebil — hvad koster tilbuddet reelt?");
  var desc = h.beskrivelse("Tast dit leasingtilbud ind og se den reelle pris pr. måned med udbetalingen fordelt, " +
    "samlet betaling og hvordan tilbuddet ligger blandt " + rader.length + " erhvervstilbud på varebiler.");
  var faq = [
    ["Hvordan regner man den reelle månedspris på et leasingtilbud?",
     "Læg udbetalingen (førstegangsydelsen) til, fordelt over løbetiden: månedsydelse + udbetaling ÷ antal måneder. Et tilbud på 2.500 kr. om måneden med 50.000 kr. i udbetaling over 60 måneder koster reelt 3.333 kr. om måneden."],
    ["Er restværdien med i beregningen?",
     "Nej. Restværdien er ikke en udgift, før aftalen slutter, og om den bliver det, afhænger af, hvad bilen er værd til den tid. Ved finansiel leasing hæfter du for forskellen, så den står ved siden af som en risiko."],
    ["Regner beregneren moms med?",
     "Nej, tallene er ekskl. moms, som erhvervstilbud er. Beregneren viser beløbet inkl. moms ved siden af, fordi det er det, der skal betales — momsen får virksomheden igen, hvis den har fradrag."],
    ["Gemmer I de tal, jeg taster ind?",
     "Nej. Beregningen sker i din browser, og intet bliver sendt til os eller andre."]
  ];
  var schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "Leasingberegner til varebil", url: h.BASE_URL + "/leasingberegner/",
        applicationCategory: "FinanceApplication", operatingSystem: "Web", inLanguage: "da",
        offers: { "@type": "Offer", price: "0", priceCurrency: "DKK" } },
      { "@type": "FAQPage", mainEntity: faq.map(function (q) {
        return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forsiden", item: h.BASE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Leasingberegner" } ] }
    ]
  });

  var felt = function (id, label, pladsholder, enhed) {
    return '<label class="beregner__felt"><span>' + label + '</span><span class="beregner__input">' +
      '<input type="number" inputmode="numeric" min="0" step="1" id="' + id + '" placeholder="' + pladsholder + '">' +
      '<em>' + enhed + '</em></span></label>';
  };
  var kolonne = function (n) {
    return [
      '<fieldset class="beregner__tilbud" data-n="' + n + '">',
      '  <legend>Tilbud ' + (n === 1 ? 'A' : 'B') + (n === 2 ? ' <span class="beregner__valgfri">(valgfrit — til sammenligning)</span>' : '') + '</legend>',
      felt("y" + n, "Månedsydelse", n === 1 ? "fx 2.995" : "", "kr./md."),
      felt("u" + n, "Førstegangsydelse (udbetaling)", n === 1 ? "fx 50.000" : "", "kr."),
      felt("l" + n, "Løbetid", n === 1 ? "fx 48" : "", "mdr."),
      felt("k" + n, "Kilometer pr. år", n === 1 ? "fx 15.000" : "", "km"),
      felt("r" + n, "Restværdi (hvis oplyst)", "", "kr."),
      '  <div class="beregner__resultat" id="res' + n + '" aria-live="polite"></div>',
      '</fieldset>'
    ].join("\n");
  };

  return [
    h.hoved(title, desc, h.BASE_URL + "/leasingberegner/", schema),
    h.header(),
    '<main id="indhold">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li aria-current="page">Leasingberegner</li></ol></nav>',
    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Gratis · regnes i din browser · intet gemmes</p>',
    '  <h1>Leasingberegner til varebil</h1>',
    '  <p class="hero-ny__manchet">Den annoncerede ydelse er ikke prisen. Tast tallene fra dit tilbud ind, så lægger vi udbetalingen oven i, fordelt over løbetiden — og viser, hvor tilbuddet ligger blandt de ' +
      rader.length + ' erhvervstilbud på varebiler, vi har indsamlet.</p>',
    '</section>',
    '<section class="sektion beregner">',
    '  <div class="beregner__gitter">' + kolonne(1) + kolonne(2) + '</div>',
    '  <label class="beregner__felt beregner__klasse"><span>Sammenlign med</span><select id="klasse">' +
      '<option value="alle">Alle varebiler</option>' +
      ["pizzabil", "mellem", "stor", "andet"].filter(function (k) { return fordeling[k] && fordeling[k].length; }).map(function (k) {
        return '<option value="' + k + '">' + klasser[k] + ' (' + fordeling[k].length + ' tilbud)</option>';
      }).join("") + '</select></label>',
    '  <div class="beregner__samlet" id="samlet" aria-live="polite"></div>',
    '  <p class="kilde">Alle beløb ekskl. moms. Den reelle pris er månedsydelse + førstegangsydelse ÷ løbetid — samme tal, som hele gulplade.dk sorterer efter. Service, dæk, forsikring, ejerafgift og brændstof er ikke med; tjek hvad dit tilbud dækker i <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">Det står ikke i leasingtilbuddet</a>.</p>',
    '</section>',
    '<section class="sektion--kort faq"><h2>Spørgsmål om beregneren</h2>' +
      faq.map(function (q) { return '<details><summary>' + h.esc(q[0]) + '</summary><p>' + h.esc(q[1]) + '</p></details>'; }).join("") +
    '</section>',
    '<section class="sektion--kort"><h2>Har du fået et tilbud?</h2><p>Beregneren giver dig tallet. Vil du have tilbuddet læst igennem — restværdi, kilometer, hvad der ikke står — så <a href="/tilbudstjek/">tjekker vi det for dig</a>. Og vil du have flere tilbud at sammenligne med, <a href="/faa-tilbud/">henter vi dem hjem</a>.</p></section>',
    '</main>',
    '<script>',
    '(function () {',
    '  var F = ' + JSON.stringify(fordeling) + ';',
    '  function v(id) { var x = document.getElementById(id).value; return x === "" ? null : Number(x); }',
    '  function kr(n) { return Math.round(n).toLocaleString("da-DK") + " kr."; }',
    '  function regn(n) {',
    '    var y = v("y" + n), u = v("u" + n) || 0, l = v("l" + n), k = v("k" + n), r = v("r" + n);',
    '    if (!y || !l) return null;',
    '    var md = y + u / l, i_alt = y * l + u;',
    '    return { md: md, i_alt: i_alt, km: k, l: l, r: r, prKm: k ? i_alt / (k * l / 12) : null };',
    '  }',
    '  function placering(md) {',
    '    var liste = F[document.getElementById("klasse").value] || F.alle;',
    '    var billigere = liste.filter(function (x) { return x < md; }).length;',
    '    return { billigere: billigere, antal: liste.length, median: liste[Math.floor(liste.length / 2)] };',
    '  }',
    '  function vis(n, x) {',
    '    var el = document.getElementById("res" + n);',
    '    if (!x) { el.innerHTML = n === 1 ? "<p>Udfyld mindst månedsydelse og løbetid.</p>" : ""; return; }',
    '    var p = placering(x.md);',
    '    el.innerHTML = "<dl>" +',
    '      "<div class=\\"beregner__stor\\"><dt>Reel pris pr. måned</dt><dd>" + kr(x.md) + "</dd></div>" +',
    '      "<div><dt>Inkl. moms</dt><dd>" + kr(x.md * 1.25) + "</dd></div>" +',
    '      "<div><dt>Samlet betaling i " + x.l + " mdr.</dt><dd>" + kr(x.i_alt) + "</dd></div>" +',
    '      (x.prKm ? "<div><dt>Pr. kørt km</dt><dd>" + (x.i_alt / (x.km * x.l / 12)).toFixed(2).replace(".", ",") + " kr.</dd></div>" : "") +',
    '      (x.r ? "<div><dt>Restværdi (risiko ved finansiel leasing)</dt><dd>" + kr(x.r) + "</dd></div>" : "") +',
    '      "</dl><p class=\\"beregner__placering\\">" + (p.billigere === 0 ? "Billigere end alle " + p.antal + " tilbud" :',
    '        p.billigere + " af " + p.antal + " tilbud på gulplade.dk er billigere") + " (typisk pris: " + kr(p.median) + "/md.).</p>";',
    '  }',
    '  function opdater() {',
    '    var a = regn(1), b = regn(2);',
    '    vis(1, a); vis(2, b);',
    '    var s = document.getElementById("samlet");',
    '    if (a && b) {',
    '      var d = a.md - b.md, billigst = d > 0 ? "B" : "A";',
    '      s.innerHTML = Math.abs(d) < 1 ? "<p>De to tilbud koster det samme pr. måned.</p>" :',
    '        "<p><strong>Tilbud " + billigst + " er " + kr(Math.abs(d)) + " billigere om måneden</strong>" +',
    '        (a.l === b.l ? " — " + kr(Math.abs(d) * a.l) + " over hele løbetiden." : ". Løbetiderne er forskellige, så sammenlign også samlet betaling og hvad der er inkluderet.") + "</p>";',
    '    } else s.innerHTML = "";',
    '  }',
    '  document.querySelectorAll(".beregner input, .beregner select").forEach(function (el) { el.addEventListener("input", opdater); });',
    '  opdater();',
    '})();',
    '</script>',
    h.footer(),
    '</body></html>'
  ].join("\n");
};
