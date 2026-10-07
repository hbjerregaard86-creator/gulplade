// Ladetidsberegneren (/groen-omstilling/ladetid/), 02-10-2026: hvad koster en
// elvarebil medarbejderen i ekstra tid? Bilens tal (batteri, forbrug, AC- og
// DC-ladning, nyttelast, trækvægt) er producentens fra elbil.json og
// varebiler.json. Alt det, der afhænger af virksomheden - kørsel, opladning
// hjemme eller på arbejdet, last, trailer, timepris - taster brugeren selv.
// Antagelserne (merforbrug for last og trailer, omvej pr. ladestop) står som
// antagelser og kan rettes. Regnes i browseren; intet gemmes.

module.exports = function ladetidHTML(data, h, opt) {
  var el = {};
  try { el = require("./elbil.json").modeller || {}; } catch (e) {}
  var KL = { pizzabil: "Lille varebil", mellem: "Mellemstor varebil", stor: "Stor varebil", andet: "Ladvogn / chassis" };
  var ORDEN = ["pizzabil", "mellem", "stor", "andet"];

  // DC-vinduet står i producentens note, fx "10–80 %"; uden note regnes med 10–80.
  function vindue(note) {
    var m = String(note || "").match(/(\d+)\s*[–-]\s*(\d+)\s*%/);
    return m ? Math.max(0.3, (Number(m[2]) - Number(m[1])) / 100) : 0.7;
  }
  var modeller = (data.varebiler || []).filter(function (b) {
    return b.drivmiddel === "el" && (b.tilbud || []).length && el[b.id];
  }).map(function (b) {
    var e = el[b.id];
    var forbrug = e.forbrug_kwh_100km || null;
    // Brugbar kapacitet: producentens nettotal; ellers brutto; ellers WLTP-rækkevidde
    // gange WLTP-forbrug fratrukket ca. 10 % ladetab, som WLTP-forbruget indeholder.
    var batteri = e.batteri_netto_kwh || (e.batteri_brutto_kwh ? Math.round(e.batteri_brutto_kwh * 0.93) : null) ||
      (e.raekkevidde_km && forbrug ? Math.round(e.raekkevidde_km * forbrug / 100 * 0.9) : null);
    var dcEff = null;
    if (batteri && e.dc_tid_min) dcEff = Math.round(batteri * vindue(e.dc_tid_note) / (e.dc_tid_min / 60));
    else if (e.dc_kw) dcEff = Math.round(e.dc_kw * 0.7);
    return {
      id: b.id, navn: b.maerke + " " + b.model, k: (h.stoerrelse && h.stoerrelse(b)) || "andet",
      batteri: batteri, estimeret: !e.batteri_netto_kwh, forbrug: forbrug, ac: e.ac_kw || 11, dc: dcEff,
      dcTid: e.dc_tid_min || null, dcNote: e.dc_tid_note || null,
      nyttelast: b.nyttelast_kg || null, traek: b.anhaengervaegt_kg != null ? b.anhaengervaegt_kg : null,
      raek: e.raekkevidde_km || null
    };
  }).sort(function (a, b) { return a.navn.localeCompare(b.navn, "da"); });
  var start = modeller.filter(function (m) { return m.id === "ford-e-transit-custom"; })[0] ? "ford-e-transit-custom" : modeller[0].id;

  var title = h.titel("Ladetid med elvarebil — hvad koster det i medarbejdertid?");
  var desc = h.beskrivelse("Hvor meget ekstra tid bruger medarbejderen på at lade en elvarebil? Regn med hjemmelader, opladning på arbejdspladsen, last og trailer for " +
    modeller.length + " elvarebiler — og se det i timer og kroner pr. år.");
  var tider = modeller.map(function (m) { return m.dcTid; }).filter(Boolean);
  var faq = (tider.length ? [["Hvor lang tid tager det at lade en elvarebil?",
    "Med en ladeboks hjemme eller på arbejdspladsen lader den om natten, og den eneste tid, det koster, er at sætte stikket i. Ved en lynlader tager det ifølge producenterne " + Math.min.apply(null, tider) + " til " + Math.max.apply(null, tider) + " minutter at lade fra cirka 10 til 80 % for de elvarebiler, vi har tilbud på."]] : []).concat(opt.faq);
  var schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "Ladetidsberegner til elvarebil", url: h.BASE_URL + "/groen-omstilling/ladetid/",
        applicationCategory: "BusinessApplication", operatingSystem: "Web", inLanguage: "da",
        offers: { "@type": "Offer", price: "0", priceCurrency: "DKK" } },
      { "@type": "FAQPage", mainEntity: faq.map(function (q) {
        return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Forsiden", item: h.BASE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Grøn omstilling", item: h.BASE_URL + "/groen-omstilling/" },
        { "@type": "ListItem", position: 3, name: "Ladetid" } ] }
    ]
  });

  function felt(id, label, enhed, step, hj) {
    return '<label class="beregner__felt"><span>' + label + '</span><span class="beregner__input">' +
      '<input type="number" inputmode="decimal" min="0" step="' + (step || 1) + '" id="' + id + '">' +
      '<em>' + enhed + '</em></span>' + (hj ? '<small class="groen__hj">' + hj + '</small>' : '') + '</label>';
  }
  function valg(id, ja, nej, hjemme) {
    return '<div class="groen-lad" role="group" aria-label="' + ja + '" data-valg="' + id + '">' +
      '<button type="button" data-v="1" aria-pressed="' + (hjemme ? 'true' : 'false') + '">' + ja + '</button>' +
      '<button type="button" data-v="0" aria-pressed="' + (hjemme ? 'false' : 'true') + '">' + nej + '</button></div>';
  }
  var vaelg = '<select id="m">' + ORDEN.map(function (k) {
    var L = modeller.filter(function (m) { return m.k === k; });
    return L.length ? '<optgroup label="' + KL[k] + '">' + L.map(function (m) {
      return '<option value="' + m.id + '"' + (m.id === start ? ' selected' : '') + '>' + h.esc(m.navn) + '</option>';
    }).join("") + '</optgroup>' : '';
  }).join("") + '</select>';

  return [
    h.hoved(title, desc, h.BASE_URL + "/groen-omstilling/ladetid/", schema),
    h.header(),
    '<main id="indhold" class="groen-side">',
    '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li><a href="/groen-omstilling/">Grøn omstilling</a></li><li aria-current="page">Ladetid</li></ol></nav>',
    '<section class="hero-ny">',
    '  <p class="hero-ny__over">Grøn omstilling · ladetidsberegner</p>',
    '  <h1>Hvad koster elvarebilen medarbejderen i tid?</h1>',
    '  <p class="hero-ny__manchet">Med en lader hjemme eller på arbejdspladsen er bilen fuld hver morgen, og den ekstra tid er få minutter om dagen. Uden lader, med lange dage, tung last eller trailer bliver det lynladestop. Vælg bilen, sæt jeres kørsel ind, og se tiden i minutter, timer og kroner.</p>',
    '  <p class="groen-hop"><a class="knap knap--primaer" href="#beregner">Til beregneren ↓</a><a class="knap knap--sekundaer" href="/groen-omstilling/#beregner">Hvad koster skiftet i kroner?</a></p>',
    '</section>',
    '<hr class="groen-skiller">',

    '<section class="sektion beregner groen-beregner lt" id="beregner">',
    '  <h2>Ladetidsberegner</h2>',
    '  <p class="sektion__manchet">Bilens tal er producentens og hentes fra vores data — du kan rette dem alle. Alt regnes i din browser, intet gemmes.</p>',

    // 02-10-2026: kun det, man selv ved, er synligt. Bilens tal og vores antagelser
    // ligger i to sammenklappede felter, man kan åbne og rette.
    '  <fieldset class="beregner__tilbud groen-faelles"><legend>Bil og kørsel</legend>',
    '  <label class="beregner__felt"><span>Elvarebil</span>' + vaelg + '</label>',
    '  <div class="lt-valg"><span class="lt-valg__lbl">Lader hjemme</span>' + valg("hjem", "Ja", "Nej", true) + '</div>',
    '  <div class="lt-valg"><span class="lt-valg__lbl">Lader på arbejdspladsen</span>' + valg("arb", "Ja", "Nej", false) + '</div>',
    '  <div class="groen-faelles__gitter groen-faelles__gitter--5">',
    felt("km", "Kørsel pr. dag", "km", 1),
    felt("dage", "Arbejdsdage pr. år", "dage", 1),
    felt("last", "Typisk last", "kg", 1, '<span id="lasth"></span>'),
    felt("trailer", "Trailer i snit", "kg", 1, '<span id="trailh"></span>'),
    felt("tp", "Timepris", "kr./t", 1, "Løn og overhead"),
    '  </div></fieldset>',

    '  <details class="lt-mere"><summary>Bilens tal fra producenten</summary>',
    '  <div class="groen-faelles__gitter">',
    felt("bat", "Brugbart batteri", "kWh", 0.1, '<span id="bath"></span>'),
    felt("fb", "Forbrug (WLTP)", "kWh/100 km", 0.1),
    felt("dc", "Lynladning i snit", "kW", 1, '<span id="dch"></span>'),
    felt("ac", "Bilens AC-ladning", "kW", 0.1, "Højeste effekt fra en ladeboks"),
    '  </div></details>',

    '  <details class="lt-mere"><summary>Justér antagelserne</summary>',
    '  <div class="groen-faelles__gitter">',
    felt("box", "Ladeboks", "kW", 0.1, "Typisk 11 kW"),
    felt("park", "Står stille om natten", "timer", 1),
    felt("omvej", "Omvej pr. lynladestop", "min.", 1, "Kør til, sæt i, betal"),
    felt("stik", "Sæt i og tag ud", "min./dag", 1),
    felt("pause", "Pause ved lynlader", "min./dag", 1, "Fx frokost"),
    felt("till", "Tillæg til WLTP", "%", 1, "Kulde, fart, varme"),
    felt("pl", "Merforbrug pr. 100 kg last", "%", 0.1),
    felt("pt", "Merforbrug pr. 1.000 kg trailer", "%", 1),
    felt("dtank", "Diesel: km pr. tank", "km", 1, "Uden last og trailer"),
    felt("dtid", "Diesel: tid pr. tankning", "min.", 1),
    '  </div></details>',

    '  <div class="groen-res" id="res" aria-live="polite"></div>',
    '  <p class="kilde">Batteri, forbrug, lynladetid, AC-effekt, nyttelast og trækvægt er producentens tal for den udgave af bilen, modelsiden viser. Hvor producenten ikke oplyser det brugbare batteri, er det anslået ud fra WLTP-rækkevidden. Lynladning regnes fra 10 til 80 %, med den gennemsnitlige effekt producenten oplyser for det interval. Merforbrug for last og trailer, omvej pr. ladestop og tankningstid for diesel er vores antagelser — ret dem til jeres egne erfaringer.</p>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Sådan regner beregneren</h2>',
    '  <ul class="viden__liste">',
    '    <li><strong>Forbruget</strong> er producentens WLTP-tal plus tillægget for vejr og fart, plus merforbrug for last og trailer.</li>',
    '    <li><strong>Med lader hjemme eller på arbejdspladsen</strong> starter bilen dagen med det, den kan nå at lade om natten — højst fra 10 til 100 %. Den tid, det tager at sætte stikket i, tæller med.</li>',
    '    <li><strong>Rækker det ikke</strong>, eller er der ingen lader, bliver resten lynladet fra 10 til 80 % ad gangen. Hvert stop koster ladetid plus omvej. Ladetid i en pause, man alligevel holder, tæller ikke.</li>',
    '    <li><strong>Diesel</strong> tæller også: tankning tager tid. Resultatet er forskellen.</li>',
    '  </ul>',
    '</section>',

    '<section class="sektion--kort">',
    '  <h2>Læs videre</h2>',
    '  <ul class="viden__liste">',
    '    <li><a href="/groen-omstilling/#beregner">Elberegneren</a> — hvad skiftet fra diesel til el koster i leasing, strøm og afgift</li>',
    '    <li><a href="/haandbogen/faa-medarbejdere-til-at-skifte-til-elvarebil/">Få medarbejderne til at skifte til elvarebil</a> — ladeboks hjemme, strøm og skat</li>',
    '    <li><a href="/elvarebiler/">Elvarebiler: rækkevidde og opladning</a> — batteri og ladetider for hver model</li>',
    '    <li><a href="/bedste-tilbud/elvarebil-med-traek/">Elvarebil med træk</a> — sorteret efter trækvægt</li>',
    '  </ul>',
    '</section>',

    '<section class="sektion--kort faq"><h2>Spørgsmål om ladetid</h2>' +
      faq.map(function (q) { return '<details><summary>' + h.esc(q[0]) + '</summary><p>' + h.esc(q[1]) + '</p></details>'; }).join("") +
    '</section>',
    '</main>',
    '<script>',
    '(function () {',
    '  var M = ' + JSON.stringify(modeller) + ';',
    '  var STD = ' + JSON.stringify({ box: 11, park: 12, omvej: 10, stik: 1, pause: 0, km: 120, dage: 220, last: 300, trailer: 0, till: 15, pl: 3, pt: 50, tp: 450, dtank: 500, dtid: 10 }) + ';',
    '  var V = { hjem: 1, arb: 0 };',
    '  function $(id) { return document.getElementById(id); }',
    '  function v(id) { var x = $(id).value; return x === "" ? null : Number(x); }',
    '  function kr(n) { return Math.round(n).toLocaleString("da-DK") + " kr."; }',
    '  function tal(n, d) { return (Math.round(n * Math.pow(10, d || 0)) / Math.pow(10, d || 0)).toLocaleString("da-DK"); }',
    '  function min(n) { return n < 1 && n > 0 ? "under 1 min." : tal(n) + " min."; }',
    '  var bil = null;',
    '  function fyld() {',
    '    bil = M.filter(function (m) { return m.id === $("m").value; })[0];',
    '    $("bat").value = bil.batteri || ""; $("fb").value = bil.forbrug || ""; $("dc").value = bil.dc || ""; $("ac").value = bil.ac || "";',
    '    $("bath").textContent = bil.estimeret ? "Anslået ud fra WLTP-rækkevidden" : "Producentens nettotal";',
    '    $("dch").textContent = bil.dcTid ? "Producenten: " + bil.dcNote.split(/[(,;]/)[0].trim() + " på " + bil.dcTid + " min." : "Anslået ud fra højeste DC-effekt";',
    '    $("lasth").textContent = bil.nyttelast ? "Bilens nyttelast: " + tal(bil.nyttelast) + " kg" : "";',
    '    $("trailh").textContent = bil.traek == null ? "Trækvægt ikke oplyst" : bil.traek ? "Må trække " + tal(bil.traek) + " kg" : "Producenten oplyser ingen trækvægt";',
    '  }',
    '  Object.keys(STD).forEach(function (k) { $(k).value = STD[k]; });',
    '  fyld();',
    '  $("m").addEventListener("change", function () { fyld(); opdater(); });',
    '  document.querySelectorAll("[data-valg]").forEach(function (g) {',
    '    g.querySelectorAll("button").forEach(function (b) {',
    '      b.addEventListener("click", function () {',
    '        V[g.getAttribute("data-valg")] = Number(b.getAttribute("data-v"));',
    '        g.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });',
    '        opdater();',
    '      });',
    '    });',
    '  });',
    '  function opdater() {',
    '    var r = $("res");',
    '    var B = v("bat"), fb = v("fb"), dc = v("dc"), ac = v("ac"), km = v("km"), dage = v("dage") || 0;',
    '    if (!B || !fb || !dc || !km) { r.innerHTML = "<p>Udfyld batteri, forbrug, lynladning og kørsel. Producenten oplyser ikke alle tal for alle modeller.</p>"; return; }',
    '    var last = v("last") || 0, trailer = v("trailer") || 0;',
    '    var f = fb * (1 + (v("till") || 0) / 100) * (1 + last / 100 * (v("pl") || 0) / 100) * (1 + trailer / 1000 * (v("pt") || 0) / 100);',
    '    var E = km * f / 100;',
    '    var lader = V.hjem || V.arb;',
    '    var nat = lader ? Math.min(B * 0.9, Math.min(ac || 11, v("box") || 11) * (v("park") || 0)) : 0;',
    '    var dcVindue = B * 0.7;',
    '    var behov = Math.max(0, E - nat);',
    '    var stop = behov > 0 ? (lader ? Math.ceil(behov / dcVindue) : behov / dcVindue) : 0;',
    '    var ladeMin = behov / dc * 60;',
    '    var pause = Math.min(v("pause") || 0, ladeMin);',
    '    ladeMin -= pause;',
    '    var omvejMin = stop * (v("omvej") || 0);',
    '    var stikMin = lader ? (v("stik") || 0) : 0;',
    '    var elMin = ladeMin + omvejMin + stikMin;',
    // Last og trailer koster også dieselbilen rækkevidde: samme merforbrug.
    '    var lastFaktor = (1 + last / 100 * (v("pl") || 0) / 100) * (1 + trailer / 1000 * (v("pt") || 0) / 100);',
    '    var dMin = km / ((v("dtank") || 500) / lastFaktor) * (v("dtid") || 0);',
    '    var netto = elMin - dMin;',
    '    var tp = v("tp") || 0;',
    '    var aarTimer = netto * dage / 60;',
    '    var raek = B * 0.9 / f * 100;',
    '    var adv = [];',
    '    if (bil.nyttelast && last > bil.nyttelast) adv.push("Lasten er større end bilens nyttelast på " + tal(bil.nyttelast) + " kg.");',
    '    if (trailer > 0 && bil.traek === 0) adv.push("Producenten oplyser ingen trækvægt for " + bil.navn + ".");',
    '    else if (trailer > 0 && bil.traek && trailer > bil.traek) adv.push(bil.navn + " må højst trække " + tal(bil.traek) + " kg.");',
    '    function rk(n, x) { return "<tr><th scope=\\"row\\">" + n + "</th><td>" + x + "</td></tr>"; }',
    '    r.innerHTML = (adv.length ? "<div class=\\"lt-adv\\">" + adv.map(function (a) { return "<p>" + a + "</p>"; }).join("") + "</div>" : "") +',
    '      "<div class=\\"sbs__rul\\"><table class=\\"sbs\\"><thead><tr><th>Pr. arbejdsdag</th><th>El</th></tr></thead><tbody>" +',
    '      rk("Forbrug med last og trailer", tal(f, 1) + " kWh/100 km") +',
    '      rk("Strøm til dagens kørsel", tal(E, 1) + " kWh") +',
    '      rk("Rækkevidde fra fuldt batteri", tal(raek) + " km") +',
    '      (lader ? rk("Ladet om natten", tal(nat, 1) + " kWh") : "") +',
    '      rk("Lynladestop", stop ? (lader ? tal(stop) : tal(stop, 1) + " i snit") : "Ingen") +',
    '      (behov ? rk("Ladetid ved lynlader" + (pause ? " (efter pause)" : ""), min(ladeMin)) : "") +',
    '      (omvejMin ? rk("Omvej til lynlader", min(omvejMin)) : "") +',
    '      (stikMin ? rk("Sæt i og tag ud", min(stikMin)) : "") +',
    '      "<tr class=\\"groen-res__sum\\"><th scope=\\"row\\">Tid med elbilen</th><td>" + min(elMin) + "</td></tr>" +',
    '      rk("Tankning med diesel", min(dMin)) +',
    '      "<tr class=\\"groen-res__sum\\"><th scope=\\"row\\">Ekstra tid med el</th><td>" + (Math.abs(netto) < 1 ? "Under 1 min." : netto > 0 ? min(netto) : min(-netto) + " mindre end diesel") + "</td></tr>" +',
    '      "</tbody></table></div>" +',
    '      "<div class=\\"groen-res__boks\\"><p class=\\"groen-res__konklusion\\"><strong>" +',
    '      (Math.abs(netto) < 1 ? "Elbilen koster næsten ingen ekstra tid" : netto > 0 ? "Elbilen koster " + tal(aarTimer, 1) + " timer om året" : "Elbilen sparer " + tal(-aarTimer, 1) + " timer om året") + "</strong>" +',
    '      (Math.abs(netto) >= 1 && tp ? " — " + kr(Math.abs(aarTimer) * tp) + " ved " + tal(tp) + " kr. i timen og " + tal(dage) + " arbejdsdage." : ".") + "</p>" +',
    '      "<p>" + (lader ? (behov ? "Natteladningen dækker ikke hele dagen, så der skal lynlades undervejs." : "Natteladningen dækker hele dagens kørsel — det eneste, der koster tid, er at sætte stikket i.")',
    '        : "Uden lader hjemme eller på arbejdspladsen bliver al strøm lynladet. En lader ændrer regnestykket mest.") + "</p></div>";',
    '  }',
    '  document.querySelectorAll(".groen-beregner input, .groen-beregner select").forEach(function (x) { x.addEventListener("input", opdater); });',
    '  opdater();',
    '})();',
    '</script>',
    h.footer(),
    '</body></html>'
  ].join("\n");
};
