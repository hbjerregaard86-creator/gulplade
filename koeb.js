// Køb ny varebil (05-10-2026): /koeb-ny-varebil/, sektionen "Pris ved køb" på
// modelsiderne og prisblokken på mærkesiderne.
//
// Tallene kommer fra priser.json: producenternes danske prislister med alle
// udgaver, tilvalg og pakker. En pris er den vejledende udsalgspris uden moms og
// uden levering, som importøren anbefaler forhandleren at sælge bilen for. Den
// er ikke forhandlerens indkøbspris. Hver model har kilde-URL og dato.
// Ekstraudstyret på tværs af modellerne kommer fra udstyr.json (tjeklisten).
//
// I produktion fra 06-10-2026 (brugeren: "deploy og sæt igang med seo"). GULPLADE_KOEB_NY=0 slår den fra.

var fs = require("fs");
var path = require("path");

var PARTNERE = require("./partnere.js");
var VAEGT = require("./udstyr-vaegt.js");

// Leverandører med priser i partnere.json, som vises som almindelige leverandører i købsdelen og ikke
// som partnere (Sortimo, 06-10-2026: partneraftalen afventer). Eksempelpartnere er aldrig med.
var LEVERANDOERER = (function () {
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "partnere.json"), "utf8")).partnere.filter(function (x) {
      return !x.eksempel && (x.produkter || []).some(function (pr) { return pr.pris != null; });
    });
  } catch (e) { return []; }
})();

var PRISER = (function () {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "priser.json"), "utf8")); }
  catch (e) { return null; }
})();

var STI = "/koeb-ny-varebil/";

// Producenternes officielle danske sider, hvor prislisterne er offentliggjort (06-10-2026).
var KILDESIDER = (function () {
  try { return JSON.parse(fs.readFileSync(path.join(__dirname, "prisdata", "kilder-maerker.json"), "utf8")); }
  catch (e) { return {}; }
})();

var KLASSER = [
  { id: "pizzabil", navn: "Lille varebil" },
  { id: "mellem", navn: "Mellemstor kassevogn" },
  { id: "stor", navn: "Stor kassevogn" },
  { id: "ladvogn", navn: "Ladbil" },
  { id: "pickup", navn: "Pickup" }
];
var DRIV = { diesel: "Diesel", benzin: "Benzin", el: "El", plugin: "Plugin-hybrid", hybrid: "Hybrid" };

var GRUPPER = [
  { id: "traek", navn: "Træk" },
  { id: "varerum", navn: "Døre og varerum" },
  { id: "komfort", navn: "Komfort i førerhuset" },
  { id: "parkering", navn: "Parkering og lys" },
  { id: "assistent", navn: "Førerassistent" },
  { id: "ydre", navn: "Lak, hjul og tag" },
  { id: "el", navn: "Opladning og batteri" },
  { id: "andet", navn: "Andet" }
];

module.exports = function (h) {
  var esc = h.esc, talDK = h.talDK;
  var idag = process.env.GULPLADE_IDAG || new Date().toISOString().slice(0, 10);

  function priser(id) {
    var p = PRISER && PRISER.modeller && PRISER.modeller[id];
    return p && (p.udgaver || []).some(function (u) { return u.pris_kr != null; }) ? p : null;
  }
  function udgaver(p) {
    return (p.udgaver || []).filter(function (u) { return u.pris_kr != null; })
      .slice().sort(function (a, b) { return a.pris_kr - b.pris_kr; });
  }
  function fra(p) { return udgaver(p)[0]; }
  function dyreste(p) { var u = udgaver(p); return u[u.length - 1]; }
  function kr(n) { return talDK(Math.round(n)) + " kr."; }
  // "kr." sidst i en sætning får ikke et punktum mere.
  function rens(t) { return String(t).replace(/kr\.\./g, "kr."); }
  function dato(p) { return p.prisliste_dato || p.hentet; }
  function klasse(bil) { return bil.karrosseri === "kassevogn" ? (h.stoerrelse(bil) || "mellem") : bil.karrosseri; }
  function klasseNavn(id) { var k = KLASSER.filter(function (x) { return x.id === id; })[0]; return k ? k.navn : ""; }
  function navn(bil) { return bil.maerke + " " + h.kortNavn(bil); }
  // "Opels", "Mercedes-Benz'", "MAN's" (retskrivningsreglerne).
  function genitiv(maerke) { return /[sxz]$/i.test(maerke) ? maerke + "'" : /^[A-ZÆØÅ]+$/.test(maerke) ? maerke + "'s" : maerke + "s"; }
  function fraTil(min, max) { return min === max ? kr(min) : "fra " + kr(min) + " til " + kr(max); }
  function modeller(n) { return n === 1 ? "én model" : n + " modeller"; }
  function alleN(n, flertal) { return n === 2 ? "begge " + flertal : "alle " + n + " " + flertal; }
  function ogListe(l) { return l.length < 2 ? l.join("") : l.slice(0, -1).join(", ") + " og " + l[l.length - 1]; }
  // Sætningen om producentens officielle side. Står en model i ikke_paa_siden, linker siden ikke til
  // dens liste, og så nævner vi kun de modeller, siden faktisk linker til.
  function levTekst(levs) {
    levs.sort(function (a, b) { return a.navn.localeCompare(b.navn, "da"); });
    var a = function (y) { return '<a href="' + esc(String(y.url).replace(/^(https?:\/\/[^/]+).*/, "$1/")) + '" rel="nofollow noopener" target="_blank">' + esc(y.navn) + '</a>'; };
    // Datoerne samlet: den dato, de fleste har, bliver "de andres".
    var antal = {};
    levs.forEach(function (y) { if (y.dato) antal[y.dato] = (antal[y.dato] || 0) + 1; });
    var datoer = Object.keys(antal).sort(function (x, y) { return antal[y] - antal[x]; });
    var tekst = levs.length === 1
      ? 'Priserne er fra ' + a(levs[0]).replace('</a>', 's webshop</a>') + '.' + (levs[0].dato ? ' Vi hentede dem den ' + esc(h.datoLang(levs[0].dato)) + '.' : '')
      : 'Priserne er fra webshoppene hos ' + ogListe(levs.map(a)) + '.' + (datoer.length === 1 ? ' Vi hentede priserne den ' + esc(h.datoLang(datoer[0])) + '.'
        : datoer.length > 1 ? ' Vi hentede ' + ogListe(datoer.slice(1).map(function (d) {
            return ogListe(levs.filter(function (y) { return y.dato === d; }).map(function (y) { return esc(genitiv(y.navn)); })) + ' priser den ' + esc(h.datoLang(d));
          })) + ' og de andres den ' + esc(h.datoLang(datoer[0])) + '.' : '');
    return tekst + ' Montering er ikke med i priserne. Leverandørerne betaler ikke for at blive vist.';
  }
  function levKilder() {
    var levs = [];
    Object.keys(PRISER.modeller || {}).forEach(function (id) {
      (PRISER.modeller[id].indretning || []).forEach(function (x) {
        if (!levs.some(function (y) { return y.navn === x.leverandoer; })) levs.push({ navn: x.leverandoer, url: x.url, dato: x.dato });
      });
    });
    LEVERANDOERER.forEach(function (x) {
      levs.push({ navn: x.navn, url: x.kilde && x.kilde.url ? x.kilde.url : "https://www.mysortimo.dk/", dato: x.kilde_dato || (x.kilde || {}).dato });
    });
    if (!levs.length) return "";
    return '<div><dt>Reoler, gulv og beklædning</dt><dd>' + levTekst(levs) + '</dd></div>';
  }
  function offentligSide(ks, biler) {
    if (!ks || !ks.side) return "";
    var ikke = ks.ikke_paa_siden || [], paa = biler.filter(function (b) { return ikke.indexOf(b.id) < 0; });
    if (!paa.length) return "";
    var a = '<a href="' + esc(ks.side) + '" rel="nofollow noopener" target="_blank">' + esc(ks.domaene || ks.side) + '</a>';
    if (paa.length === biler.length) return ' Prislisterne findes på ' + a + '.';
    var nv = paa.map(function (b) { return b.model; }).filter(function (x, i, l) { return l.indexOf(x) === i; });
    return (nv.length > 1 ? ' Prislisterne til ' : ' Prislisten til ') + ogListe(nv) + ' findes på ' + a + '.';
  }
  function udloebet(p) { return p.gyldig_til && p.gyldig_til < idag; }
  function aktuel(x) { return !udloebet(x.p) || !!x.p.bekraeftet; }
  // Gyldighed i løbende tekst. bekraeftet: {dato, kilde} = producenten viste samme priser efter udløbet.
  function gyldigTekst(p) {
    if (!p.gyldig_til) return "";
    if (!udloebet(p)) return "Prislisten gælder til den " + h.datoLang(p.gyldig_til) + ". ";
    return "Prislisten gjaldt til den " + h.datoLang(p.gyldig_til) + (p.bekraeftet
      ? ", men " + p.bekraeftet.kilde + " viste de samme priser den " + h.datoLang(p.bekraeftet.dato) + ". "
      : ", og vi har ikke fundet en nyere. ");
  }
  // Noten øverst på bilsiden, når listen er udløbet, og producenten ikke har bekræftet priserne.
  function udloebetNote(bil, p) {
    if (!udloebet(p) || p.bekraeftet) return "";
    var ks = KILDESIDER[bil.maerke] || {};
    return 'Priserne er fra ' + genitiv(bil.maerke) + ' prisliste, der gjaldt til den ' + h.datoLang(p.gyldig_til) + '. Da vi tjekkede den ' +
      h.datoLang(ks.tjekket || p.hentet) + ', havde ' + bil.maerke + ' ikke lagt en ny prisliste ud.';
  }
  function kildeLink(p, tekst) {
    return '<a href="' + esc(p.kilde_url) + '" rel="nofollow noopener" target="_blank">' + esc(tekst || h.vaertNavn(p.kilde_url)) + '</a>';
  }

  // Alle modeller med en prisliste, også dem uden aktuelle leasingtilbud.
  function biler(data) {
    return (data.varebiler || []).concat(data._udenTilbud || []).filter(function (b) { return priser(b.id); });
  }

  // Én tjeklistepost for én model, lagt sammen over udstyrsniveauerne:
  // standard på alle niveauer, standard på nogle, laveste pris, fås ikke eller ukendt.
  // r: 0 = standard, 1 = koster ekstra, 2 = fås ikke, 3 = ikke oplyst (til sortering).
  function udstyrSum(id, post) {
    var u = h.udstyrForModel(id);
    if (!u) return null;
    var c = (u.udstyr[post] || []).map(function (x) { return x || { s: "ukendt" }; });
    if (!c.length) return null;
    var std = c.filter(function (x) { return x.s === "std"; }).length;
    if (std === c.length) return { r: 0, tekst: "Standard" };
    // "Kun forberedelse til anhængertræk" (fx Peugeot e-Partner) er ikke en pris på selve udstyret.
    var forb = function (x) { return /^kun\s*[„"]?forberedelse/i.test(x.note || ""); };
    if (c.some(forb) && !c.some(function (x) { return !forb(x) && (x.s === "tilvalg" || x.s === "pakke") && x.pris != null; })) {
      var fx = c.filter(forb)[0];
      return { r: 1.5, tekst: "Kun forberedelse" + (fx.pris != null ? " (" + kr(fx.pris) + ")" : "") };
    }
    var betalt = c.filter(function (x) { return (x.s === "tilvalg" || x.s === "pakke") && x.pris != null && !forb(x); });
    if (betalt.length) {
      var min = betalt.reduce(function (m, x) { return x.pris < m.pris ? x : m; });
      var t = min.pris === 0 ? "Uden merpris" : (betalt.some(function (x) { return x.pris !== min.pris; }) ? "fra " : "") + kr(min.pris);
      // Tilbehør monteres af forhandleren og er ikke et tilvalg fra fabrikken (udstyr.json skriver det i noten).
      // Kun første sætning tæller: "Aftageligt, fabriksmonteret (AQ05). Som tilbehør: ..." er et fabrikstræk.
      var foerste = String(min.note || "").split(/\.\s/)[0];
      var tilb = /tilbehør|forhandlermonteret/i.test(foerste) && !/fabriksmonteret/i.test(foerste);
      return { r: std ? 0.5 : 1, pris: min.pris, pakke: min.s === "pakke", tilbehoer: tilb, varierer: betalt.some(function (x) { return x.pris !== min.pris; }),
        tekst: t + (min.s === "pakke" ? " (pakke)" : tilb ? " (tilbehør)" : "") + (std ? ", standard på dyrere udstyrsniveauer" : "") };
    }
    if (std) return { r: 0.5, tekst: "Standard på dyrere udstyrsniveauer" };
    if (c.some(function (x) { return x.s === "nej"; }) && !c.some(function (x) { return x.s === "ukendt"; })) return { r: 2, tekst: "Fås ikke" };
    if (c.some(function (x) { return x.s === "tilvalg" || x.s === "pakke"; })) return { r: 1.5, tekst: "Tilvalg, pris ikke oplyst" };
    return { r: 3, tekst: "Ikke oplyst" };
  }

  // ── Tal til tekst og FAQ ─────────────────────────────────────────────────
  function fakta(data) {
    var bb = biler(data).map(function (b) { return { bil: b, p: priser(b.id), fra: fra(priser(b.id)) }; })
      .sort(function (a, b) { return a.fra.pris_kr - b.fra.pris_kr; });
    var lev = bb.map(function (x) { return x.p.levering_kr; }).filter(function (v) { return v != null; });
    var traek = bb.map(function (x) { return udstyrSum(x.bil.id, "anhaengertraek"); }).filter(Boolean);
    var traekPriser = traek.filter(function (s) { return s.pris != null && s.pris > 0 && !s.pakke && !s.tilbehoer; }).map(function (s) { return s.pris; });
    var traekTilb = traek.filter(function (s) { return s.pris != null && s.pris > 0 && s.tilbehoer; }).map(function (s) { return s.pris; });
    var datoer = bb.map(function (x) { return dato(x.p); }).filter(Boolean).sort();
    return {
      bb: bb,
      antal: bb.length,
      udgaver: bb.reduce(function (s, x) { return s + udgaver(x.p).length; }, 0),
      tilvalg: bb.reduce(function (s, x) { return s + (x.p.tilvalg || []).length; }, 0),
      billigst: bb[0],
      // FAQ-eksemplerne bruger kun prislister, der gælder (eller er bekræftet efter udløbet).
      billigstEl: bb.filter(function (x) { return x.bil.drivmiddel === "el" && aktuel(x); })[0],
      billigstStor: bb.filter(function (x) { return klasse(x.bil) === "stor" && aktuel(x); })[0],
      levMin: lev.length ? Math.min.apply(null, lev) : null,
      levMax: lev.length ? Math.max.apply(null, lev) : null,
      levAntal: lev.length,
      traekMin: traekPriser.length ? Math.min.apply(null, traekPriser) : null,
      traekMax: traekPriser.length ? Math.max.apply(null, traekPriser) : null,
      traekAntal: traekPriser.length,
      tilbMin: traekTilb.length ? Math.min.apply(null, traekTilb) : null,
      tilbMax: traekTilb.length ? Math.max.apply(null, traekTilb) : null,
      tilbAntal: traekTilb.length,
      traekStd: traek.filter(function (s) { return s.r === 0; }).length,
      regAfgAlle: bb.every(function (x) { return x.p.registreringsafgift_i_prisen === true; }),
      nyeste: datoer[datoer.length - 1],
      aeldste: datoer[0]
    };
  }

  function faqListe(f) {
    var q = [];
    if (f.billigst) {
      q.push(["Hvad koster en ny varebil?",
        "Den billigste nye varebil, vi har priser på, er " + navn(f.billigst.bil) + ". Den koster fra " + kr(f.billigst.fra.pris_kr) + " ifølge " +
        genitiv(f.billigst.bil.maerke) + " prisliste fra den " + h.datoLang(dato(f.billigst.p)) + "." +
        (f.billigstStor ? " En stor kassevogn som " + navn(f.billigstStor.bil) + " koster fra " + kr(f.billigstStor.fra.pris_kr) + "." : "") +
        " Prisen afhænger mest af størrelsen, motoren og udstyrsniveauet."]);
    }
    if (f.billigstEl) {
      q.push(["Hvad er den billigste nye elvarebil?",
        navn(f.billigstEl.bil) + " er den billigste elvarebil, vi har priser på. Den koster fra " + kr(f.billigstEl.fra.pris_kr) +
        " ifølge " + genitiv(f.billigstEl.bil.maerke) + " prisliste fra den " + h.datoLang(dato(f.billigstEl.p)) + "."]);
    }
    q.push(["Får jeg bilen til listeprisen?",
      "Ikke nødvendigvis. Listeprisen er den pris, importøren anbefaler forhandleren at sælge bilen for. Forhandleren bestemmer selv sin pris og sine rabatter, så prisen i dit tilbud kan være en anden. Vi kan hente tilbud fra flere forhandlere på den samme bil, så du kan se forskellen."]);
    if (f.levAntal) {
      q.push(["Hvad koster levering af en ny varebil?",
        "Leveringen koster " + fraTil(f.levMin, f.levMax) +
        (f.levAntal === 1 ? " på den ene model, hvor producenten oplyser beløbet. Du kan se, hvilken model det er, ved bilerne øverst på siden."
          : " på de " + f.levAntal + " modeller, hvor producenten oplyser beløbet. Du kan se beløbet ved hver af bilerne øverst på siden.")]);
    }
    if (f.traekAntal || f.tilbAntal) {
      q.push(["Hvad koster et anhængertræk på en ny varebil?",
        (f.traekAntal + f.tilbAntal ? "Et anhængertræk koster " + fraTil(Math.min(f.traekMin == null ? 1e9 : f.traekMin, f.tilbMin == null ? 1e9 : f.tilbMin),
          Math.max(f.traekMax || 0, f.tilbMax || 0)) + (f.traekAntal + f.tilbAntal === 1 ? " på den ene model" : " på de " + (f.traekAntal + f.tilbAntal) + " modeller") +
          ", hvor producenten oplyser prisen. " : "") +
        (f.traekStd ? "På " + modeller(f.traekStd) + " følger trækket med som standard." : "")]);
    }
    if (f.regAfgAlle) {
      q.push(["Er registreringsafgiften med i prisen?",
        "Ja. Producenterne skriver prisen med registreringsafgift, og det er den pris, vi viser. Reglerne for afgiften finder du hos Motorstyrelsen."]);
    }
    return q.map(function (x) { return [x[0], rens(x[1])]; });
  }

  // ── /koeb-ny-varebil/ ────────────────────────────────────────────────────
  //
  // Redesignet 05-10-2026 efter brugerens dom over første udgave ("ligner noget,
  // der er løgn"): samme sprog som forsiden. Bilkort med foto i stedet for en
  // tabel med 63 rækker, en lille figur med startpriser efter størrelse, en
  // søjleliste over udstyrspriser og et konkret regnestykke på én bil.

  // Samme rækkefølge og ord som forsidens filterknapper.
  var CHIPS = [
    { id: "pizzabil", navn: "Pizzabil" },
    { id: "mellem", navn: "Mellem kassevogn" },
    { id: "stor", navn: "Stor kassevogn" },
    { id: "pickup", navn: "Pickup" },
    { id: "ladvogn", navn: "Ladvogn" }
  ];

  // Kort tekst til et bilkort: kun det, der kan siges kort og sikkert.
  function udstyrKort(s) {
    if (!s) return null;
    if (s.r === 0) return { v: "Standard" };
    if (s.pris != null && s.pris > 0) {
      return { v: (s.r === 0.5 || s.varierer ? "fra " : "") + kr(s.pris), tag: s.pakke ? "pakkepris" : s.tilbehoer ? "tilbehør" : null };
    }
    if (s.r === 2) return { v: "Fås ikke" };
    return null;
  }

  function stigeHTML(f) {
    var rk = CHIPS.map(function (c) {
      var l = f.bb.filter(function (x) { return klasse(x.bil) === c.id; }).map(function (x) { return x.fra.pris_kr; });
      return l.length ? { c: c, min: Math.min.apply(null, l), max: Math.max.apply(null, l), n: l.length } : null;
    }).filter(Boolean);
    if (!rk.length) return "";
    var lo = Math.floor(Math.min.apply(null, rk.map(function (r) { return r.min; })) / 50000) * 50000;
    var hi = Math.ceil(Math.max.apply(null, rk.map(function (r) { return r.max; })) / 50000) * 50000;
    var pct = function (v) { return ((v - lo) / (hi - lo) * 100).toFixed(1); };
    return [
      '<aside class="koeb-stige" aria-labelledby="koebStigeNavn">',
      '  <h2 class="koeb-stige__navn" id="koebStigeNavn">Startpriser efter størrelse</h2>',
      '  <ul>',
      rk.map(function (r) {
        var bredde = Math.max(1.5, (r.max - r.min) / (hi - lo) * 100).toFixed(1);
        return '    <li><button type="button" class="koeb-stige__raekke" data-chip="' + r.c.id + '" title="' +
          esc(r.c.navn + ": " + (r.n === 1 ? "Den ene model" : "De " + r.n + " modeller") + " koster " + fraTil(r.min, r.max) + " i den billigste udgave") + '">' +
          '<span class="koeb-stige__klasse">' + esc(r.c.navn) + '<span class="koeb-stige__antal">' + r.n + '</span></span>' +
          '<span class="koeb-stige__spor" aria-hidden="true"><span class="koeb-stige__spaend" style="left:' + pct(r.min) + '%;width:' + bredde + '%"></span>' +
          '<span class="koeb-stige__prik" style="left:' + pct(r.min) + '%"></span></span>' +
          '<span class="koeb-stige__fra">fra ' + kr(r.min) + '</span></button></li>';
      }).join("\n"),
      '  </ul>',
      '</aside>'
    ].join("\n");
  }

  function kortHTML(x, data) {
    var b = x.bil, p = x.p, l = udgaver(p), d = l[l.length - 1];
    var leas = (b.tilbud || []).length ? h.billigsteSamlet(b, data) : null;
    var tr = udstyrKort(udstyrSum(b.id, "anhaengertraek"));
    // Alle kort har de samme fem linjer, så kortene i en række flugter uden huller (brugeren
    // 06-10-2026). Levering er ikke et tilvalg og står i beregneren på bilsiden, ikke her.
    var ikke = '<span class="tom">Ikke oplyst</span>', lr = b.lastrum || {};
    var komma = function (v) { return String(v).replace(".", ","); };
    var felter = [
      ["Anhængertræk", tr ? tr.v + (tr.tag === "pakkepris" ? ' <span class="koeb-tag">pakkepris</span>' : '') : ikke, true],
      ["Leasing fra", leas ? talDK(leas.samlet) + " kr./md." : '<span class="tom">Ingen tilbud lige nu</span>', true],
      ["Lastrum", lr.volumen_m3 != null ? komma(lr.volumen_m3) + " m³" : ikke, true],
      ["Nyttelast", h.nyttelastTekst(b) ? esc(h.nyttelastTekst(b)) : ikke, true]
    ];
    if (b.drivmiddel === "el" || b.drivmiddel === "plugin") {
      felter.push([b.drivmiddel === "plugin" ? "Rækkevidde på el" : "Rækkevidde", b.raekkevidde_km != null ? talDK(b.raekkevidde_km) + " km" : ikke, true]);
    } else {
      felter.push(["Forbrug, " + (DRIV[b.drivmiddel] || b.drivmiddel).toLowerCase(), b.forbrug_km_pr_l != null ? komma(b.forbrug_km_pr_l) + " km/l" : ikke, true]);
    }
    return [
      '<li class="bilkort' + (b.drivmiddel === "el" ? ' bilkort--el' : '') + '" data-klasse="' + klasse(b) + '" data-driv="' + esc(b.drivmiddel) +
        '" data-fra="' + x.fra.pris_kr + '" data-navn="' + esc(navn(b).toLowerCase()) + '"' +
        (b.raekkevidde_km != null && b.drivmiddel === "el" ? ' data-raekkevidde="' + b.raekkevidde_km + '"' : '') + '>',
      '  <a class="bilkort__link" href="' + bilSti(b) + '">',
      '    <div class="bilkort__billede">',
      b.billede ? '      <img src="' + esc(b.billede) + '" alt="' + esc(navn(b)) + '" width="800" height="500" loading="lazy" decoding="async">' : '',
      '      <span class="bilkort__maerkat">' + esc(b.maerke) + '</span>',
      '      <div class="bilkort__badges"><span class="badge badge--blank">' + (l.length === 1 ? '1 udgave' : l.length + ' udgaver') + '</span></div>',
      '    </div>',
      '    <div class="bilkort__krop">',
      '      <div class="bilkort__navnblok"><h3 class="bilkort__navn">' + esc(h.kortNavn(b)) + '</h3>' +
        '<p class="bilkort__variant">' + esc(x.fra.navn) + '</p></div>',
      '      <div class="bilkort__prisblok">',
      '        <p class="bilkort__pris"><span class="bilkort__pris-navn">Ny fra</span>' +
        '<span class="bilkort__pris-vaerdi"><span class="bilkort__belob">' + talDK(x.fra.pris_kr) + '</span><span class="bilkort__valuta">kr.</span></span></p>',
      '      </div>',
      '      <dl class="bilkort__felter">' + felter.map(function (fl) {
        return '<div><dt>' + fl[0] + '</dt><dd>' + (fl[2] ? fl[1] : esc(fl[1])) + '</dd></div>';
      }).join("") + '</dl>',
      // Mærkets navn, ikke domænet: "edge.sitecorecloud.io" (Renaults importør) så ud som en forhandler.
      '      <div class="bilkort__fod"><span class="stempel">' + esc(genitiv(b.maerke)) + ' prisliste <span class="stempel__skil">·</span> <span class="stempel__dato">' +
        (udloebet(p) && !p.bekraeftet ? 'gjaldt til ' + esc(h.visDato(p.gyldig_til)) : esc(h.visDato(dato(p)))) + '</span></span></div>',
      '    </div>',
      '  </a>',
      '</li>'
    ].filter(function (s) { return s !== ''; }).join("\n");
  }

  // Søjlelisten over én udstyrspost. Bygges både her (anhængertræk, uden JavaScript)
  // og i browseren, når læseren vælger en anden post.
  function udstyrRaekker(f, postId) {
    return f.bb.map(function (x, i) {
      var s = udstyrSum(x.bil.id, postId);
      if (!s || s.r >= 3 || s.r === 1.5) return null;
      return { i: i, r: s.r, pris: s.pris != null && s.pris > 0 ? s.pris : null,
        tag: s.pakke ? "pakkepris" : s.tilbehoer && postId !== "anhaengertraek" ? "tilbehør" : s.r === 0.5 ? "standard på dyrere udstyrsniveauer" : null };
    }).filter(Boolean);
  }

  function regnestykkeHTML(f, data) {
    // Danmarks mest solgte varebil, hvis den har levering og et fabrikstræk med pris.
    var x = f.bb.filter(function (y) { return y.bil.id === "ford-transit-custom"; })[0];
    if (!x || x.p.levering_kr == null) return "";
    var s = udstyrSum(x.bil.id, "anhaengertraek");
    if (!s || s.pris == null || s.tilbehoer || s.pakke || s.r === 0.5) return "";
    var i_alt = x.fra.pris_kr + x.p.levering_kr + s.pris;
    var leas = h.billigsteSamlet(x.bil, data);
    var b = x.bil;
    return [
      '<section class="sektion--kort koeb-regn" id="regnestykke">',
      '  <h2>Eksempel: ' + esc(navn(b)) + ' med levering og træk</h2>',
      '  <p class="sektion__manchet">' + esc(navn(b)) + ' var ' + (b.note_kilde_url
        ? '<a href="' + esc(b.note_kilde_url) + '" rel="noopener" target="_blank">Danmarks mest solgte varebil i marts 2026</a>'
        : 'Danmarks mest solgte varebil i marts 2026') + '. Her har vi lagt levering og anhængertræk fra fabrikken oven i prisen på den billigste udgave.</p>',
      '  <div class="koeb-regn__kort">',
      '    <dl class="koeb-regn__liste">',
      '      <div><dt>' + esc(x.fra.navn) + '</dt><dd>' + kr(x.fra.pris_kr) + '</dd></div>',
      '      <div><dt>Levering</dt><dd>' + kr(x.p.levering_kr) + '</dd></div>',
      '      <div><dt>Anhængertræk fra fabrikken</dt><dd>' + kr(s.pris) + '</dd></div>',
      '      <div class="koeb-regn__sum"><dt>I alt</dt><dd>' + kr(i_alt) + '</dd></div>',
      '    </dl>',
      '    <p class="koeb-regn__kilde">Kilde: ' + kildeLink(x.p, genitiv(b.maerke) + ' prisliste') + ' fra den ' + esc(h.datoLang(dato(x.p))) + '.</p>',
      leas ? '    <p class="koeb-regn__lease">Vil du hellere lease? ' + esc(h.kortNavn(b)) + ' kan leases fra <strong>' + talDK(leas.samlet) +
        ' kr. om måneden</strong>, når udbetalingen er fordelt over løbetiden. <a href="' + h.modelSti(b) + '#tilbud">Se tilbuddene</a></p>' : '',
      '  </div>',
      '</section>'
    ].filter(function (s) { return s !== ''; }).join("\n");
  }

  function side(data) {
    var f = fakta(data);
    var aar = String(data.sidst_opdateret || idag).slice(0, 4);
    var maerker = f.bb.map(function (x) { return x.bil.maerke; }).filter(function (v, i, a) { return a.indexOf(v) === i; })
      .sort(function (a, b) { return a.localeCompare(b, "da"); });
    var hentet = f.bb.map(function (x) { return x.p.hentet; }).filter(Boolean).sort().pop();
    var title = h.titelDerPasser([
      "Køb ny varebil " + aar + ": priser på " + f.antal + " modeller fra " + talDK(f.billigst.fra.pris_kr) + " kr.",
      "Køb ny varebil: priser på " + f.antal + " modeller",
      "Køb ny varebil " + aar
    ]);
    var desc = "Se kontantpriserne på " + f.antal + " nye varebiler i " + maerker.length + " mærkers egne prislister. Den billigste koster " + talDK(f.billigst.fra.pris_kr) +
      " kr. uden moms. Få tilbud gratis.";
    var faq = faqListe(f);
    var drivs = Object.keys(DRIV).filter(function (d) { return f.bb.some(function (x) { return x.bil.drivmiddel === d; }); });

    // Ekstraudstyr: data til vælgeren (kun poster, hvor mindst tre modeller har et svar).
    var poster = (h.UDSTYR ? h.UDSTYR.poster.concat(h.UDSTYR.poster_el || []) : []).filter(function (p) {
      return udstyrRaekker(f, p.id).length >= 3;
    });
    var udstyrData = {};
    poster.forEach(function (p) {
      udstyrData[p.id] = udstyrRaekker(f, p.id).map(function (r) { return [r.i, r.r, r.pris, r.tag]; });
    });
    var modelNavne = f.bb.map(function (x) { return [navn(x.bil), h.modelSti(x.bil)]; });
    var traekPost = poster.filter(function (p) { return p.id === "anhaengertraek"; })[0] || poster[0];

    var regAfg = f.bb.filter(function (x) { return x.p.registreringsafgift_i_prisen === true; }).length;
    var regUkendt = f.bb.filter(function (x) { return x.p.registreringsafgift_i_prisen == null; }).length;
    // Lister, hvor leveringen er med i prisen og beløbet ikke er oplyst (Toyotas SUV-varebiler).
    var levMed = f.bb.filter(function (x) { return x.p.levering_i_listen === true && x.p.levering_kr == null; });
    var brugte = h.brugteAntal ? h.brugteAntal() : 0;
    var leasAntal = (data.varebiler || []).reduce(function (s, b) { return s + (b.tilbud || []).length; }, 0);

    var schema = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": h.BASE_URL + STI + "#side", url: h.BASE_URL + STI, name: title, description: h.beskrivelse(desc),
          inLanguage: "da-DK", dateModified: hentet || undefined,
          isPartOf: { "@type": "WebSite", "@id": h.BASE_URL + "/#websted", name: "Gulplade.dk", url: h.BASE_URL + "/" } },
        { "@type": "ItemList", name: "Nye varebiler efter pris", itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: f.antal, itemListElement: f.bb.map(function (x, i) {
            return { "@type": "ListItem", position: i + 1, name: navn(x.bil), url: h.BASE_URL + h.modelSti(x.bil) };
          }) },
        { "@type": "FAQPage", mainEntity: faq.map(function (q) {
          return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Forsiden", item: h.BASE_URL + "/" },
          { "@type": "ListItem", position: 2, name: "Køb ny varebil" } ] }
      ]
    });

    var hero = [
      '<section class="hero-ny hero-ny--artikler koeb-hero">',
      '<div class="hero-ny__tekst">',
      '  <p class="hero-ny__over"><span class="hero-ny__maerkat">Producenternes egne prislister</span>' +
        (hentet ? '<span>Hentet ' + esc(h.visDato(hentet)) + '</span>' : '') + '</p>',
      '  <h1>Køb ny varebil: priser på ' + f.antal + ' modeller fra ' + talDK(f.billigst.fra.pris_kr) + ' kr.</h1>',
      '  <p class="hero-ny__manchet">Her har vi samlet de vejledende priser på <strong>' + f.antal + ' nye varebiler</strong> fra <strong>' +
        maerker.length + ' mærker</strong>. Ved hver bil kan du se startprisen og leasingprisen. På bilens egen side kan du regne prisen ud ' +
        'med udstyr og tilbehør. Alle priser er uden moms.</p>',
      '  <p class="koeb-hero__knapper">' + h.tilbudsknapHTML(null, "Få tilbud på en ny varebil", "koeb") +
        '<a href="#modeller" class="knap knap--sekundaer">Se bilerne</a></p>',
      '</div>',
      stigeHTML(f),
      '</section>'
    ].join("\n");

    var vaelger = [
      '<section class="vaelger" id="modeller">',
      '  <div class="vaelger__top">',
      '  <div class="chips" role="group" aria-label="Filtrér efter størrelse">',
      '<button type="button" class="chip chip--valgt" data-chip="alle" aria-pressed="true">Alle varebiler<span class="chip__tal">' + f.antal + '</span></button>',
      CHIPS.map(function (c) {
        var n = f.bb.filter(function (x) { return klasse(x.bil) === c.id; }).length;
        return n ? '<button type="button" class="chip" data-chip="' + c.id + '" aria-pressed="false">' + esc(c.navn) + '<span class="chip__tal">' + n + '</span></button>' : '';
      }).join("\n"),
      '  </div>',
      '    <div class="vaelger__hoejre">',
      '    <label class="sortvalg"><span>Sortér</span><select id="kSort"><option value="lav">Laveste pris</option><option value="hoej">Højeste pris</option><option value="raekkevidde">Længste rækkevidde</option><option value="navn">Mærke</option></select></label>',
      '    <label class="sortvalg"><span class="skjult">Drivmiddel</span><select id="kDriv"><option value="">Alle drivmidler</option>' +
        drivs.map(function (d) { return '<option value="' + d + '">' + DRIV[d] + '</option>'; }).join("") + '</select></label>',
      '    <div class="visning" role="group" aria-label="Visning">',
      '      <button type="button" data-visning="kort" aria-pressed="true">Kort</button>',
      '      <button type="button" data-visning="tabel" aria-pressed="false">Liste</button>',
      '    </div>',
      '    </div>',
      '  </div>',
      '  <p class="vaelger__status"><span id="kStatus" role="status">Viser alle ' + f.antal + ' modeller</span></p>',
      '  <ul class="bilkort-grid" id="kGrid">',
      f.bb.map(function (x) { return kortHTML(x, data); }).join("\n"),
      '  </ul>',
      '</section>'
    ].join("\n");

    // Beregneren med valg af bil (data hentes pr. bil fra /koeb-ny-varebil/data/<id>.js).
    var valgMaerker = {};
    f.bb.forEach(function (x) { (valgMaerker[x.bil.maerke] = valgMaerker[x.bil.maerke] || []).push(x); });
    var modelValg = Object.keys(valgMaerker).sort(function (a, b) { return a.localeCompare(b, "da"); }).map(function (mk) {
      return [mk, valgMaerker[mk].slice().sort(function (a, b) { return navn(a.bil).localeCompare(navn(b.bil), "da"); })
        .map(function (x) { return [x.bil.id, h.kortNavn(x.bil), x.bil.id === "ford-transit-custom"]; })];
    });
    var udstyr = [
      '<section class="sektion--kort" id="ekstraudstyr">',
      '  <h2>Beregn prisen med udstyr</h2>',
      '  <p class="sektion__manchet">Vælg bil og udgave, og sæt kryds ved det udstyr, du skal bruge. Så ser du prisen i alt. Forhandleren monterer alt, der er mærket "tilbehør".</p>',
      beregnerHTML(null, modelValg),
      traekPost ? '  <details class="koeb-sammenlign"><summary>Se, hvad ' + esc(traekPost.navn.toLowerCase()) + ' og andet udstyr koster på bilerne</summary>' +
        '<div class="koeb-udstyr"><div class="koeb-udstyr__vaelg"><label class="sortvalg"><span>Udstyr</span><select id="kUdstyr">' +
        poster.map(function (p) { return '<option value="' + p.id + '"' + (p === traekPost ? ' selected' : '') + '>' + esc(p.navn) + '</option>'; }).join("") +
        '</select></label><a id="kUdstyrLink" href="/udstyr/' + h.slug(traekPost.navn) + '/">Mere om ' + esc(traekPost.navn.toLowerCase()) + '</a></div>' +
        '<div id="kUdstyrListe">' + udstyrListeHTML(udstyrData[traekPost.id], modelNavne) + '</div>' +
        '<p class="koeb-udstyr__note">Modeller, hvor producenten ikke oplyser prisen, er ikke med.</p></div></details>' : '',
      '</section>'
    ].filter(function (s) { return s !== ''; }).join("\n");

    var oveni = [
      '<section class="sektion--kort" id="oveni">',
      '  <h2>Levering, afgifter og moms</h2>',
      '  <div class="koeb-fakta">',
      '    <div class="koeb-fakta__kort"><h3>Levering</h3><p>Leveringen er ikke med i prisen' + (levMed.length ? ', undtagen på ' + esc(ogListe(levMed.map(function (x) { return navn(x.bil); }))) +
        ', hvor producenten skriver, at den er med' : '') + '.' +
        (f.levAntal ? ' Hvor producenten oplyser beløbet, koster den ' + fraTil(f.levMin, f.levMax) + '.' : '') + '</p></div>',
      '    <div class="koeb-fakta__kort"><h3>Registreringsafgift</h3><p>' + (regAfg === f.antal ? 'I alle ' + f.antal + ' prislister' : 'I ' + regAfg + ' af de ' + f.antal + ' prislister') + ' er registreringsafgiften med i prisen. ' +
        (regUkendt === 1 ? 'I den sidste står der ikke, om afgiften er med. ' : regUkendt > 1 ? 'I de ' + regUkendt + ' andre står der ikke, om afgiften er med. ' : '') +
        'Reglerne finder du hos <a href="https://motorst.dk/erhverv/motorafgifter/registreringsafgift" rel="noopener" target="_blank">Motorstyrelsen</a>.</p></div>',
      '    <div class="koeb-fakta__kort"><h3>Ejerafgift</h3><p>Du betaler ejerafgiften hvert halve år, så længe bilen er indregistreret ' +
        '(<a href="https://motorst.dk/erhverv/motorafgifter/periodiske-afgifter" rel="noopener" target="_blank">Motorstyrelsen</a>). ' +
        'På modelsiderne kan du se beløbet for hver model.</p></div>',
      '    <div class="koeb-fakta__kort"><h3>Moms</h3><p>En momsregistreret virksomhed kan som regel trække momsen fra, når varebilen kun bruges til erhverv. ' +
        'Reglerne står hos <a href="https://info.skat.dk/data.aspx?oid=2085713" rel="noopener" target="_blank">Skattestyrelsen</a>, og i guiden om <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a> kan du læse om undtagelserne.</p></div>',
      '  </div>',
      '</section>'
    ].join("\n");

    var lead = '<section class="leadboks">' +
      '<div class="leadboks__tekst"><h2>Vil du have et tilbud på en ny varebil?</h2>' +
      '<ul class="leadboks__liste"><li>Vi beder flere forhandlere om en pris på den samme bil</li>' +
      '<li>Vi læser tilbuddene igennem og siger, hvad der mangler</li><li>Gratis for dig, og du binder dig ikke</li></ul></div>' +
      '<div class="leadboks__handling">' + h.tilbudsknapHTML(null, "Få tilbud på en ny varebil", "koeb") +
      '<span class="leadboks__lille">Et menneske svarer · forhandleren betaler os, ikke dig</span></div>' +
      '</section>';

    var veje = [
      '<section class="sektion--kort" id="andre-veje">',
      '  <h2>Lease eller køb brugt i stedet?</h2>',
      '  <div class="koeb-veje">',
      '    <a class="koeb-veje__kort" href="/haandbogen/leasing-eller-koeb-af-varebil/"><strong>Leasing eller køb?</strong>' +
        '<span>Svaret afhænger af, hvor længe du beholder bilen, og hvor langt den skal køre.</span></a>',
      '    <a class="koeb-veje__kort" href="/"><strong>' + leasAntal + ' leasingtilbud</strong>' +
        '<span>Sammenlign udbetaling og løbetid, og se, hvad der følger med i hvert tilbud.</span></a>',
      brugte ? '    <a class="koeb-veje__kort" href="/brugte-varebiler/"><strong>' + brugte + ' brugte varebiler</strong>' +
        '<span>En forhandler, vi samarbejder med, sælger bilerne. Vi kan få betaling for din henvendelse.</span></a>' : '',
      '  </div>',
      '</section>'
    ].filter(function (s) { return s !== ''; }).join("\n");

    // 06-10-2026: kilderne står synligt og pr. mærke med producentens officielle side (troværdighed).
    var tilbMaerker = maerker.filter(function (m) { return f.bb.some(function (x) { return x.bil.maerke === m && x.p.tilbehoer && (x.p.tilbehoer.dele || []).length; }); });
    var kilder = '<section class="sektion--kort koeb-kilder" id="kilder"><h2>Kilder: ' + maerker.length + ' producenters egne prislister</h2>' +
      '<p class="sektion__manchet">Vi har selv hentet og læst de vejledende udsalgspriser i producenternes danske prislister. Det er de priser, importørerne anbefaler forhandlerne at sælge bilerne for. ' +
      'Ved "Ny fra" står prisen på den billigste udgave uden levering' + (levMed.length ? ', undtagen på de ' + levMed.length + ' Toyota-modeller, hvor leveringen er med' : '') + '. Klik på et modelnavn for at åbne prislisten.</p>' +
      '<dl class="koeb-kilder__liste">' + maerker.map(function (m) {
        var l = f.bb.filter(function (x) { return x.bil.maerke === m; }).sort(function (a, b) { return navn(a.bil).localeCompare(navn(b.bil), "da"); });
        var ks = KILDESIDER[m];
        return '<div><dt>' + esc(m) + '</dt><dd>' + l.map(function (x) {
          return kildeLink(x.p, h.kortNavn(x.bil)) + ' (' + esc(h.datoLang(dato(x.p))) + (udloebet(x.p) ? '; ' + esc(gyldigTekst(x.p).replace(/\.\s*$/, "").replace(/^P/, "p")) : '') + ')';
        }).join(", ") + '.' + offentligSide(ks, l.map(function (x) { return x.bil; })) + '</dd></div>';
      }).join("") +
      (tilbMaerker.length ? '<div><dt>Tilbehør</dt><dd>Tilbehørslisterne fra ' + esc(ogListe(tilbMaerker)) + '. Kilden står på hver bils side.</dd></div>' : '') +
      levKilder() +
      '</dl></section>';

    return [
      h.hoved(title, h.beskrivelse(desc), h.BASE_URL + STI, schema),
      h.header(),
      '<main id="indhold" class="forside koeb-side">',
      hero,
      vaelger,
      udstyr,
      lead,
      regnestykkeHTML(f, data),
      oveni,
      veje,
      faq.length ? '<section class="sektion--kort faq" id="faq"><h2>Spørgsmål om køb af ny varebil</h2>' +
        faq.map(function (q) { return '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }).join("") + '</section>' : '',
      kilder,
      '</main>',
      h.footer(),
      '<script>(' + klient.toString() + ')(' + JSON.stringify({ d: udstyrData, m: modelNavne,
        p: poster.map(function (p) { return [p.id, p.navn, h.slug(p.navn)]; }) }).replace(/</g, "\\u003c") + ');</script>',
      beregnerScript(STI + "data/", false),
      '</body></html>'
    ].filter(function (l) { return l !== ''; }).join("\n").replace(/kr\.\./g, "kr.");
  }

  // Søjleliste: standard øverst som en linje, så de prissatte med søjle, så "fås ikke".
  function udstyrListeHTML(raekker, m) {
    var r = raekker || [];
    var std = r.filter(function (x) { return x[1] === 0 && x[2] == null; });
    var dyr = r.filter(function (x) { return x[1] === 0.5 && x[2] == null; });
    var pris = r.filter(function (x) { return x[2] != null; }).sort(function (a, b) { return a[2] - b[2]; });
    var nej = r.filter(function (x) { return x[1] === 2; });
    var maks = pris.length ? Math.max.apply(null, pris.map(function (x) { return x[2]; })) : 1;
    var link = function (x) { return '<a href="' + m[x[0]][1] + '#udstyr">' + esc(m[x[0]][0]) + '</a>'; };
    return (std.length ? '<p class="koeb-udstyr__linje"><span class="koeb-udstyr__etiket">Standard</span>' + std.map(link).join(", ") + '</p>' : '') +
      (dyr.length ? '<p class="koeb-udstyr__linje"><span class="koeb-udstyr__etiket koeb-udstyr__etiket--nej">Standard på dyrere udstyrsniveauer</span>' + dyr.map(link).join(", ") + '</p>' : '') +
      (pris.length ? '<ol class="koeb-soejler">' + pris.map(function (x) {
        return '<li><span class="koeb-soejler__navn">' + link(x) + '</span>' +
          '<span class="koeb-soejler__spor" aria-hidden="true"><span class="koeb-soejler__soejle" style="width:' + Math.max(2, x[2] / maks * 100).toFixed(1) + '%"></span></span>' +
          '<span class="koeb-soejler__pris">' + kr(x[2]) + (x[3] ? ' <span class="koeb-tag">' + esc(x[3]) + '</span>' : '') + '</span></li>';
      }).join("") + '</ol>' : '') +
      (nej.length ? '<p class="koeb-udstyr__linje"><span class="koeb-udstyr__etiket koeb-udstyr__etiket--nej">Fås ikke</span>' + nej.map(link).join(", ") + '</p>' : '');
  }

  // Kører i browseren: filterknapper, sortering, drivmiddel, kort/liste,
  // figuren i toppen og vælgeren til ekstraudstyret.
  function klient(U) {
    var grid = document.getElementById("kGrid");
    if (grid) {
      var kort = Array.prototype.slice.call(grid.children);
      var chip = "alle", st = document.getElementById("kStatus");
      var fS = document.getElementById("kSort"), fD = document.getElementById("kDriv");
      var tegn = function () {
        var vis = kort.filter(function (k) {
          return (chip === "alle" || k.getAttribute("data-klasse") === chip) && (!fD.value || k.getAttribute("data-driv") === fD.value);
        });
        vis.sort(function (a, b) {
          if (fS.value === "navn") return a.getAttribute("data-navn").localeCompare(b.getAttribute("data-navn"), "da");
          if (fS.value === "raekkevidde") {
            var ra = +(a.getAttribute("data-raekkevidde") || -1), rb = +(b.getAttribute("data-raekkevidde") || -1);
            if (ra !== rb) return rb - ra;
          }
          var x = +a.getAttribute("data-fra"), y = +b.getAttribute("data-fra");
          return fS.value === "hoej" ? y - x : x - y;
        });
        kort.forEach(function (k) { k.hidden = true; });
        vis.forEach(function (k) { k.hidden = false; grid.appendChild(k); });
        st.textContent = vis.length === kort.length ? "Viser alle " + kort.length + " modeller" : "Viser " + vis.length + " af " + kort.length + " modeller";
      };
      var vaelgChip = function (id) {
        chip = id;
        Array.prototype.forEach.call(document.querySelectorAll(".chips .chip"), function (c) {
          var paa = c.getAttribute("data-chip") === id;
          c.classList.toggle("chip--valgt", paa);
          c.setAttribute("aria-pressed", paa ? "true" : "false");
        });
        tegn();
      };
      Array.prototype.forEach.call(document.querySelectorAll(".chips .chip"), function (c) {
        c.addEventListener("click", function () { vaelgChip(c.getAttribute("data-chip")); });
      });
      Array.prototype.forEach.call(document.querySelectorAll(".koeb-stige__raekke"), function (c) {
        c.addEventListener("click", function () {
          vaelgChip(c.getAttribute("data-chip"));
          document.getElementById("modeller").scrollIntoView({ behavior: "smooth" });
        });
      });
      fS.addEventListener("change", tegn);
      fD.addEventListener("change", tegn);
      Array.prototype.forEach.call(document.querySelectorAll(".visning button"), function (b) {
        b.addEventListener("click", function () {
          var tabel = b.getAttribute("data-visning") === "tabel";
          grid.classList.toggle("bilkort-grid--tabel", tabel);
          Array.prototype.forEach.call(document.querySelectorAll(".visning button"), function (a) { a.setAttribute("aria-pressed", a === b ? "true" : "false"); });
        });
      });
    }
    var vaelg = document.getElementById("kUdstyr"), liste = document.getElementById("kUdstyrListe"), link = document.getElementById("kUdstyrLink");
    if (vaelg && liste) {
      var e = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
      var kr = function (n) { return Number(n).toLocaleString("da-DK") + " kr."; };
      var a = function (x) { return '<a href="' + U.m[x[0]][1] + '#udstyr">' + e(U.m[x[0]][0]) + '</a>'; };
      vaelg.addEventListener("change", function () {
        var r = U.d[vaelg.value] || [];
        var std = r.filter(function (x) { return x[1] === 0 && x[2] == null; });
        var dyr = r.filter(function (x) { return x[1] === 0.5 && x[2] == null; });
        var pris = r.filter(function (x) { return x[2] != null; }).sort(function (p, q) { return p[2] - q[2]; });
        var nej = r.filter(function (x) { return x[1] === 2; });
        var maks = pris.length ? Math.max.apply(null, pris.map(function (x) { return x[2]; })) : 1;
        liste.innerHTML = (std.length ? '<p class="koeb-udstyr__linje"><span class="koeb-udstyr__etiket">Standard</span>' + std.map(a).join(", ") + '</p>' : '') +
          (dyr.length ? '<p class="koeb-udstyr__linje"><span class="koeb-udstyr__etiket koeb-udstyr__etiket--nej">Standard på dyrere udstyrsniveauer</span>' + dyr.map(a).join(", ") + '</p>' : '') +
          (pris.length ? '<ol class="koeb-soejler">' + pris.map(function (x) {
            return '<li><span class="koeb-soejler__navn">' + a(x) + '</span><span class="koeb-soejler__spor" aria-hidden="true"><span class="koeb-soejler__soejle" style="width:' +
              Math.max(2, x[2] / maks * 100).toFixed(1) + '%"></span></span><span class="koeb-soejler__pris">' + kr(x[2]) +
              (x[3] ? ' <span class="koeb-tag">' + e(x[3]) + '</span>' : '') + '</span></li>';
          }).join("") + '</ol>' : '') +
          (nej.length ? '<p class="koeb-udstyr__linje"><span class="koeb-udstyr__etiket koeb-udstyr__etiket--nej">Fås ikke</span>' + nej.map(a).join(", ") + '</p>' : '');
        var p = U.p.filter(function (x) { return x[0] === vaelg.value; })[0];
        if (p && link) { link.href = "/udstyr/" + p[2] + "/"; link.textContent = "Mere om " + p[1].toLowerCase(); }
      });
    }
  }

  // ── Modelsiden: "Pris ved køb" ───────────────────────────────────────────
  function udgaveDetaljer(u, flereNiveauer) {
    var d = [];
    if (flereNiveauer && u.niveau) d.push(u.niveau);
    if (u.totalvaegt_kg) d.push(talDK(u.totalvaegt_kg) + " kg totalvægt");
    if (u.gear) d.push(u.gear === "automat" ? "automatgear" : "manuelt gear");
    if (u.hjultraek && u.hjultraek !== "forhjul") d.push(u.hjultraek + "træk");
    return d.join(" · ");
  }
  // Udstyrsniveauerne side om side (06-10-2026, brugerens ønske): hvad hvert niveau har ud over det
  // niveau, det bygger på, ifølge producentens prisliste. Merprisen er for samme bil, dvs. samme
  // længde, motor og gear. Kort pr. niveau i stedet for en tabel ([[design-ikke-tabeldump]]).
  function niveauHTML(bil, p, l) {
    var nu = p.niveau_udstyr;
    if (!nu || !(nu.niveauer || []).length) return "";
    var solgte = [];
    l.forEach(function (u) { if (u.niveau && solgte.indexOf(u.niveau) < 0) solgte.push(u.niveau); });
    if (solgte.length < 2) return "";
    var data = {};
    nu.niveauer.forEach(function (n) { data[n.navn] = n; });
    if (!solgte.every(function (n) { return data[n]; })) return "";
    var fra = function (n) { return Math.min.apply(null, l.filter(function (u) { return u.niveau === n; }).map(function (u) { return u.pris_kr; })); };
    solgte.sort(function (a, b) { return fra(a) - fra(b); });
    // Sammenligningstabel (06-10-2026). Kortene med "Ud over Trend" og "Ligesom Limited" fungerede
    // ikke, når niveauerne ikke bygger oven på hinanden (brugeren: "det fungerer ikke"). Nu er der én
    // kolonne pr. niveau og kun rækker med udstyr, som ikke er på alle niveauer. Et niveau har sit eget
    // udstyr plus det, det bygger på ifølge kilden (bygger_paa), når det niveau også sælges på modellen.
    var nrm = function (x) { return String(x).toLowerCase().replace(/\s+/g, " ").trim(); };
    // Udstyr af samme slags afløser det arvede: Sports 17" fælge afløser Limiteds 16" fælge.
    var SLAGS = [/fælge|hjulkapsler|navkapsler/, /^trim|indtræk|betræk/, /aircondition|klimaanlæg|klimaautomatik|climatronic|climatic/,
      /touchskærm|touchscreen/, /^(?!tåge).*forlygter/, /fartpilot/, /førersæde/];
    var slags = function (e) { for (var i = 0; i < SLAGS.length; i++) if (SLAGS[i].test(nrm(e))) return i; return -1; };
    var fuld = {};
    var saml = function (n, set) {
      if (set[n]) return [];
      set[n] = 1;
      var egne = (data[n].ekstra || []).slice(), b = data[n].bygger_paa;
      if (!b || b === n || solgte.indexOf(b) < 0) return egne;
      var mine = egne.map(slags).filter(function (x) { return x >= 0; });
      return egne.concat(saml(b, set).filter(function (e) { return mine.indexOf(slags(e)) < 0; }));
    };
    solgte.forEach(function (n) { var k = {}; saml(n, {}).forEach(function (e) { k[nrm(e)] = 1; }); fuld[n] = k; });
    var raekker = [], set = {};
    solgte.forEach(function (n) {
      (data[n].ekstra || []).forEach(function (e) {
        var k = nrm(e);
        if (set[k]) return;
        set[k] = 1;
        var har = solgte.map(function (m) { return !!fuld[m][k]; });
        if (!har.every(Boolean)) raekker.push([e, har]);
      });
    });
    if (!raekker.length) return "";
    // To grupper (brugeren 06-10-2026): udstyret står åbent, design og udseende kan foldes ud.
    var grupper = [[], []];
    raekker.forEach(function (r) { grupper[VAEGT.vaegt(r[0])].push(r); });
    var bredde = 'min-width:calc(11rem + ' + solgte.length + ' * 6rem)';
    var enTabel = function (rr) {
      return '<div class="tilbud-tabel-wrap koeb-niv-wrap koeb-kort-liste"><table class="koeb-niv-tabel" style="' + bredde + '"><colgroup><col class="koeb-niv__c1">' +
        solgte.map(function () { return '<col>'; }).join("") + '</colgroup><thead><tr><th scope="col">Udstyr</th>' +
        solgte.map(function (n) { return '<th scope="col">' + esc(n) + '<small>fra ' + kr(fra(n)) + '</small></th>'; }).join("") + '</tr></thead><tbody>' +
        rr.map(function (r, i) {
          return '<tr' + kortRaekke(i, rr.length) + '><th scope="row">' + esc(r[0]) + '</th>' + r[1].map(function (j) {
            return j ? '<td class="koeb-niv__ja"><span aria-hidden="true">✓</span><span class="koeb-niv__sr">Ja</span></td>'
              : '<td class="koeb-niv__nej"><span aria-hidden="true">–</span><span class="koeb-niv__sr">Nej</span></td>';
          }).join("") + '</tr>';
        }).join("") + '</tbody></table></div>' + visAlleKnap(rr.length, 'forskelle');
    };
    var foerste = grupper.findIndex(function (g) { return g.length; });
    var tabel = grupper.map(function (rr, i) {
      if (!rr.length) return "";
      var titel = esc(VAEGT.GRUPPER[i]) + ' <span class="koeb-niv-grp__antal">' + rr.length + (rr.length === 1 ? ' forskel' : ' forskelle') + '</span>';
      return i === 0 ? '<div class="koeb-niv-grp"><h3 class="koeb-niv-grp__titel">' + titel + '</h3>' + enTabel(rr) + '</div>'
        : '<details class="koeb-niv-grp"' + (i === foerste ? ' open' : '') + '><summary class="koeb-niv-grp__titel">' + titel + '</summary>' + enTabel(rr) + '</details>';
    }).join("");
    var tal = ["", "ét", "to", "tre", "fire", "fem", "seks"][solgte.length] || String(solgte.length);
    // Kilden: prislisten, Fords løsblad, Raptors egen liste eller Mercedes' konfigurator (kilde_fil).
    var filer = [nu.kilde_fil].concat(nu.niveauer.map(function (n) { return n.kilde_fil; })).filter(function (f, i, a) { return f && a.indexOf(f) === i; });
    var ekstra = function (re) { return (p.kilder_ekstra || []).filter(function (k) { return re.test(k.url); })[0]; };
    var a = function (url, tekst) { return '<a href="' + esc(url) + '" rel="nofollow noopener" target="_blank">' + esc(tekst) + '</a>'; };
    var konf = filer.some(function (f) { return /^prislister\/.*konfigurator/.test(f); });
    var links = filer.map(function (f) {
      var k;
      // Ford: løsbladet og prislisten supplerer hinanden, og Raptor har sin egen prisliste.
      if (/loesblad/.test(f) && (k = ekstra(/specifikationer/))) return esc(genitiv(bil.maerke)) + ' ' + a(k.url, 'løsblad') + ' og ' + a(p.kilde_url, 'prisliste');
      if (/raptor/.test(f) && (k = ekstra(/raptor/))) return esc(genitiv(bil.maerke)) + ' prislister for ' + a(p.kilde_url, 'Ranger') + ' og ' + a(k.url, 'Raptor');
      if (/^prislister\/.*konfigurator/.test(f)) return '';
      // Kilder, der er hentet til niveauerne alene (prisdata/niveau-kilder/), fx Volkswagens egne sider.
      if (/^niveau-kilder\//.test(f) && nu.kilde_url) return a(nu.kilde_url, h.vaertNavn(nu.kilde_url));
      return a(p.kilde_url, genitiv(bil.maerke) + ' prisliste');
    }).filter(function (x, i, l) { return x && l.indexOf(x) === i; });
    // Står prislisten allerede i en samlet linje (Ford), nævnes den ikke igen for sig.
    if (links.length > 1) links = links.filter(function (x) { return !(x.indexOf('>' + esc(genitiv(bil.maerke)) + ' prisliste<') >= 0 && links.some(function (y) { return y !== x && y.indexOf(p.kilde_url) >= 0; })); });
    // Volkswagen (Caddy og Transporter): udstyret pr. niveau står på modelsiden, enkelte pakker kun i prislisten.
    var egen = filer.some(function (f) { return /^niveau-kilder\//.test(f); }) && nu.kilde_url;
    var kilde = konf ? 'Udstyret er fra ' + esc(genitiv(bil.maerke)) + ' danske konfigurator, set den ' + esc(h.datoLang(p.hentet)) + '.'
      : egen ? 'Udstyret står på ' + a(nu.kilde_url, genitiv(bil.maerke) + ' hjemmeside') + ' og i ' + a(p.kilde_url, 'prislisten') + '.'
      : 'Udstyret står i ' + ogListe(links) + '.';
    return '<p class="sektion__manchet">' + esc(h.kortNavn(bil)) + ' fås i ' + tal + ' udstyrsniveauer. Her kan du se det udstyr, der ikke er med på ' +
        (solgte.length === 2 ? 'begge' : 'alle ' + tal) + '.</p>' +
      tabel +
      '<p class="koeb-niv__kilde">' + kilde + '</p>';
  }
  var KORT_GRAENSE = 10, KORT_VIS = 8;
  function kortRaekke(i, ialt) { return ialt > KORT_GRAENSE && i >= KORT_VIS ? ' class="koeb-ekstra"' : ''; }
  function visAlleKnap(ialt, hvad) {
    return ialt > KORT_GRAENSE ? '<button type="button" class="koeb-vis-alle" data-vis="Vis alle ' + ialt + ' ' + hvad + '" data-skjul="Vis færre">Vis alle ' + ialt + ' ' + hvad + '</button>' : '';
  }
  var VIS_ALLE_JS = '<script>document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest(".koeb-vis-alle");if(!b)return;' +
    'var w=b.previousElementSibling;var a=w.classList.toggle("er-aaben");b.textContent=a?b.getAttribute("data-skjul"):b.getAttribute("data-vis");' +
    'if(!a)w.scrollIntoView({block:"nearest"});});</script>';
  function udgaveTabel(liste, flereNiveauer) {
    return '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel koeb-udgaver"><thead><tr><th scope="col">Udgave</th><th scope="col">Pris</th></tr></thead><tbody>' +
      liste.map(function (u) {
        var det = udgaveDetaljer(u, flereNiveauer);
        return '<tr><th scope="row">' + esc(u.navn) + (det ? '<span class="spec-variant">' + esc(det) + '</span>' : '') + '</th><td>' + kr(u.pris_kr) + '</td></tr>';
      }).join("") + '</tbody></table></div>';
  }
  function gruppeNoegle(u) {
    var l = u.laengde || "", hh = u.hoejde || "";
    var lh = l.length > 3 && hh ? l + " " + hh : l + hh;
    return lh || u.niveau || "";
  }
  function tilvalgTekst(t) {
    var d = [];
    if (t.gaelder && t.gaelder !== "alle") d.push(t.gaelder);
    if (t.niveau_priser) {
      d.push(Object.keys(t.niveau_priser).map(function (n) {
        var v = t.niveau_priser[n];
        return n + ": " + (v === "std" ? "standard" : v === "nej" ? "fås ikke" : typeof v === "number" ? kr(v) : v);
      }).join(", "));
    }
    if (t.tilbehoer) d.push("tilbehør, som forhandleren monterer");
    if (t.note) d.push(t.note);
    return d.join(" · ");
  }
  function tilvalgPris(t) {
    if (t.pris_kr == null) return '<span class="tom">Ikke oplyst</span>';
    if (t.pris_kr === 0) return "Uden merpris";
    var forskellig = t.niveau_priser && Object.keys(t.niveau_priser).some(function (n) {
      return typeof t.niveau_priser[n] === "number" && t.niveau_priser[n] !== t.pris_kr;
    });
    return (forskellig ? "fra " : "") + kr(t.pris_kr);
  }

  function modelSektion(bil) {
    var p = priser(bil.id);
    if (!p) return "";
    var liste = udgaver(p), billigst = liste[0], dyr = liste[liste.length - 1];
    var niveauer = liste.map(function (u) { return u.niveau; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; });
    var flere = niveauer.length > 1;
    var nv = navn(bil);

    var udgaveHTML;
    var noegler = liste.map(gruppeNoegle).filter(function (v, i, a) { return a.indexOf(v) === i; });
    if (liste.length <= 12 || noegler.length < 2) {
      udgaveHTML = udgaveTabel(liste, flere);
    } else {
      var foerst = function (k) { return liste.filter(function (u) { return gruppeNoegle(u) === k; })[0].pris_kr; };
      noegler.sort(function (a, b) { return foerst(a) - foerst(b) || a.localeCompare(b, "da", { numeric: true }); });
      udgaveHTML = noegler.map(function (k, i) {
        var l = liste.filter(function (u) { return gruppeNoegle(u) === k; });
        return '<details class="koeb-gruppe"' + (i === 0 ? ' open' : '') + '><summary><span>' + esc(k || "Øvrige") + '</span><span class="koeb-gruppe__fra">' +
          l.length + (l.length === 1 ? ' udgave' : ' udgaver') + ', fra ' + kr(l[0].pris_kr) + '</span></summary>' + udgaveTabel(l, flere) + '</details>';
      }).join("");
    }

    var tilvalg = (p.tilvalg || []).filter(function (t) { return t.navn; });
    // Står trækket ikke i prislisten, men i udstyrstjeklisten (typisk forhandlermonteret
    // tilbehør fra en tilbehørsliste), så vises det her også. Kilden står under Udstyr.
    if (!tilvalg.some(function (t) { return t.post === "anhaengertraek"; })) {
      var ts = udstyrSum(bil.id, "anhaengertraek");
      if (ts && ts.pris != null && !ts.pakke) {
        tilvalg = tilvalg.concat([{ navn: "Anhængertræk", gruppe: "traek", pris_kr: ts.pris, tilbehoer: ts.tilbehoer,
          note: "pris og kilde står under Udstyr" }]);
      }
    }
    var tilvalgHTML = tilvalg.length ? '<h3 class="koeb-under">Ekstraudstyr</h3>' + GRUPPER.map(function (g) {
      var l = tilvalg.filter(function (t) { return (t.gruppe || "andet") === g.id; })
        .sort(function (a, b) { return (a.pris_kr == null ? 1e9 : a.pris_kr) - (b.pris_kr == null ? 1e9 : b.pris_kr); });
      if (!l.length) return "";
      return '<details class="koeb-gruppe"' + (g.id === "traek" ? ' open' : '') + '><summary><span>' + esc(g.navn) + '</span><span class="koeb-gruppe__fra">' +
        l.length + (l.length === 1 ? ' tilvalg' : ' tilvalg') + '</span></summary>' +
        '<div class="tilbud-tabel-wrap"><table class="tilbud-tabel koeb-udgaver"><tbody>' + l.map(function (t) {
          var d = tilvalgTekst(t);
          return '<tr><th scope="row">' + esc(t.navn) + (d ? '<span class="spec-variant">' + esc(d) + '</span>' : '') + '</th><td>' + tilvalgPris(t) + '</td></tr>';
        }).join("") + '</tbody></table></div></details>';
    }).join("") : '';

    var pakker = (p.pakker || []).filter(function (x) { return x.navn; });
    var pakkeHTML = pakker.length ? '<details class="koeb-gruppe"><summary><span>Pakker</span><span class="koeb-gruppe__fra">' + pakker.length +
      (pakker.length === 1 ? ' pakke' : ' pakker') + '</span></summary><div class="tilbud-tabel-wrap"><table class="tilbud-tabel koeb-udgaver"><tbody>' +
      pakker.map(function (x) {
        var d = [];
        if ((x.indhold || []).length) d.push(x.indhold.join(", "));
        if (x.gaelder && x.gaelder !== "alle") d.push(x.gaelder);
        return '<tr><th scope="row">' + esc(x.navn) + (d.length ? '<span class="spec-variant">' + esc(d.join(" · ")) + '</span>' : '') + '</th><td>' +
          (x.pris_kr != null ? kr(x.pris_kr) : '<span class="tom">Ikke oplyst</span>') + '</td></tr>';
      }).join("") + '</tbody></table></div></details>' : '';

    var resume = 'En ny ' + esc(nv) + (liste.length > 1
      ? ' koster fra ' + kr(billigst.pris_kr) + ' til ' + kr(dyr.pris_kr) + ', alt efter hvilken af de ' + liste.length + ' udgaver du vælger. Priserne'
      : ' koster ' + kr(billigst.pris_kr) + '. Prisen') +
      ' står i ' + esc(genitiv(bil.maerke)) + ' prisliste fra den ' + esc(h.datoLang(dato(p))) + '.' +
      (p.levering_kr != null ? ' Leveringen koster ' + kr(p.levering_kr) + ' ekstra.' : '');

    var kilde = 'Kilde: ' + kildeLink(p) + (p.prisliste_dato ? ', dateret den ' + esc(h.datoLang(p.prisliste_dato)) : '') +
      ', set den ' + esc(h.datoLang(p.hentet)) + '. ' +
      'Priserne er vejledende udsalgspriser uden levering' + (p.registreringsafgift_i_prisen ? ' og med registreringsafgift' : '') + '. ' +
      'Det er de priser, importøren anbefaler forhandleren at sælge bilen for. ' +
      esc(gyldigTekst(p)) +
      '<a href="' + STI + '">Se priserne på alle nye varebiler</a>.';

    return rens(h.modulHTML("koeb", "Pris ved køb", resume,
      udgaveHTML + tilvalgHTML + pakkeHTML +
      '<p class="koeb-knap">' + h.tilbudsknapHTML(nv, "Få tilbud på en ny " + h.kortNavn(bil), "koeb") + '</p>',
      kilde));
  }

  function modelNoegletal(bil) {
    var p = priser(bil.id);
    return p ? ["Ny fra", kr(fra(p).pris_kr)] : null;
  }

  function modelFaq(bil) {
    var p = priser(bil.id);
    if (!p) return null;
    var l = udgaver(p), nv = navn(bil);
    return ["Hvad koster en ny " + nv + "?",
      "En ny " + nv + " koster " + (l.length > 1 ? "fra " : "") + kr(l[0].pris_kr) + " uden moms ifølge " + genitiv(bil.maerke) +
      " prisliste fra den " + h.datoLang(dato(p)) + ". Prisen gælder " + l[0].navn +
      (l.length > 1 ? ", som er den billigste af de " + l.length + " udgaver. Den dyreste koster " + kr(l[l.length - 1].pris_kr) + "." : ".") +
      (p.levering_kr != null ? " Leveringen koster " + kr(p.levering_kr) + " ekstra." : "") +
      " Ved leasing betaler du i stedet en fast ydelse om måneden."].map(rens);
  }

  // ── Mærkesiden ───────────────────────────────────────────────────────────
  function maerkeBlok(maerke, bilerM) {
    var med = bilerM.filter(function (b) { return priser(b.id); })
      .map(function (b) { return { bil: b, p: priser(b.id) }; })
      .sort(function (a, b) { return fra(a.p).pris_kr - fra(b.p).pris_kr; });
    if (!med.length) return "";
    return [
      '<section class="sektion--kort" id="koeb">',
      '  <h2>Priser på nye ' + esc(maerke) + '-varebiler</h2>',
      '  <div class="spec-oversigt-wrap"><table class="spec-oversigt"><thead><tr><th scope="col" class="spec-fast">Model</th><th scope="col">Fra</th>' +
        '<th scope="col">Udgaver</th><th scope="col">Anhængertræk</th></tr></thead><tbody>' +
        med.map(function (x) {
          var tr = udstyrSum(x.bil.id, "anhaengertraek");
          return '<tr><th scope="row" class="spec-fast"><a href="' + h.modelSti(x.bil) + '#koeb">' + esc(navn(x.bil)) + '</a></th><td>' + kr(fra(x.p).pris_kr) + '</td>' +
            '<td>' + udgaver(x.p).length + '</td>' + (tr && tr.pris != null ? '<td>' + esc(tr.tekst) + '</td>' : '<td class="tilbud-tekst">' + (tr ? esc(tr.tekst) : '<span class="tom">—</span>') + '</td>') + '</tr>';
        }).join("") + '</tbody></table></div>',
      '  <p class="kilde" style="margin-top:1rem">Priserne er fra ' + esc(genitiv(maerke)) + ' egne prislister. <a href="' + STI + '">Se priserne på alle nye varebiler</a>.</p>',
      '</section>'
    ].join("\n");
  }

  // ── Bilsiden og prisberegneren (06-10-2026) ──────────────────────────────
  //
  // Brugeren: "Selve bilsiden skal også gøres fin og tilpasses at bilen skal
  // sælges (dog skal de have en leasing pris med)". Derfor en salgsside pr. bil
  // under /koeb-ny-varebil/<mærke>/<model>/, med en beregner, hvor man vælger
  // udgave, tilvalg fra fabrikken og tilbehør og ser prisen i alt. Leasingsiden
  // (/varebiler/...) beholder sit fokus og får kun en henvisning hertil.

  function bilSti(bil) { return STI + h.slug(bil.maerke) + "/" + h.slug(bil.model) + "/"; }

  // Grupperne i beregneren. Fabrikstilvalg og tilbehør bruger lidt forskellige id'er.
  var BGRUPPER = [
    ["pakker", "Pakker"], ["traek", "Træk"], ["tag", "Tag"], ["varerum", "Varerum"], ["indretning", "Reoler og skuffer"], ["gulv", "Gulv og beklædning"], ["hjul", "Hjul og dæk"],
    ["komfort", "Førerhus og komfort"], ["parkering", "Parkering og førerassistance"], ["ydre", "Lak og ydre"],
    ["el", "Opladning"], ["sikkerhed", "Sikkerhed"], ["andet", "Andet"]
  ];
  var BGRUPPE_ALIAS = { kabine: "komfort", assistent: "parkering" };

  function gruppeNoegleU(u) {
    var l = u.laengde || "", hh = u.hoejde || "";
    return (l.length > 3 && hh ? l + " " + hh : l + hh) || u.niveau || "";
  }

  // Kompakte data til beregneren i browseren.
  function beregnerData(bil, data) {
    var p = priser(bil.id);
    if (!p) return null;
    var tb = p.tilbehoer || null;
    var t = (p.tilvalg || []).filter(function (x) { return x.navn; }).map(function (x) {
      return [x.navn, BGRUPPE_ALIAS[x.gruppe] || x.gruppe || "andet", x.pris_kr == null ? null : x.pris_kr, x.niveau_priser || null,
        x.gaelder && x.gaelder !== "alle" ? x.gaelder.replace(/^alle;\s*/i, "") : "", x.tilbehoer ? 1 : 0, x.note || ""];
    });
    if (tb && tb.dele) {
      tb.dele.forEach(function (x) {
        if (!x.navn || x.pris_kr == null) return;
        t.push([x.navn, BGRUPPE_ALIAS[x.gruppe] || x.gruppe || "andet", x.pris_kr, null,
          x.gaelder && x.gaelder !== "alle" ? x.gaelder.replace(/^alle;\s*/i, "") : "", 2, (x.montering_inkl === false ? "uden montering" : x.montering_inkl === true ? "med montering" : "") + (x.note ? (x.montering_inkl != null ? ". " : "") + x.note : "")]);
      });
    }
    // Reoler og hyldesystemer fra importørens lister står under indretning (brugeren 06-10-2026:
    // "Kan vi ikke få det ind med reoler etc.").
    t.forEach(function (x) {
      if (/programmerbar|opbygger|sædeovertræk|måtte|gummimåtte/i.test(x[0])) return;
      if (/hyldesystem|reol|skuffemodul|indretning/i.test(x[0])) x[1] = "indretning";
      else if (/gulv|bundplade|krydsfiner|sidebeklæd|beklædning af (varerum|lastrum|sider)|vægbeklæd|lastsikring|surringsskinne|hulplade/i.test(x[0])) x[1] = "gulv";
    });
    // Sortimo (Xpress) som almindelig leverandør (type 4). Sortimos krav om gulv og montering står i
    // leverandørlinjen (levNote). Brugeren 06-10-2026: partneraftalen afventer, "skriv blot deres priser".
    var levNote = {};
    LEVERANDOERER.forEach(function (pa) {
      (pa.produkter || []).forEach(function (pr) {
        if (pr.pris == null || (pr.modeller || []).indexOf(bil.id) < 0) return;
        // Sortimos krav til længde og akselafstand for netop denne bil (fx "L2H1 (akselafstand 3300 mm)").
        var gl = (pr.gaelder_pr_model && pr.gaelder_pr_model[bil.id]) || pr.gaelder || "";
        t.push([pr.navn + (pr.side ? ", " + pr.side + " side" : ""), /hulplade|gulv|beklæd/i.test(pr.navn) ? "gulv" : "indretning", Math.round(pr.pris), null, gl, 4,
          [pr.vaegt_kg != null ? talDK(Math.round(pr.vaegt_kg)) + " kg" : "", pr.laengde_mm ? talDK(pr.laengde_mm) + " mm lang" : "", pr.tekst || ""]
            .filter(Boolean).join(" · "), "", "", pa.navn]);
        if (pa.krav) levNote[pa.navn] = pa.krav;
      });
    });
    // Indretning fra leverandørernes webshops (System Edström, Work System, SmartVan; datarunde 3, 06-10-2026).
    // De betaler ikke for at blive vist. Navnet forkortes: Edström og Work System skriver alle modellerne i
    // navnet, SmartVan dørene. Detaljerne står i den lille tekst under navnet. t[9] er leverandøren.
    var ord = function (x) {
      return x.replace(/\s*&\s*/g, " og ").replace(/\b([mM])\//g, "med ").replace(/\b([uU])\//g, "uden ").replace(/\bv\//g, "ved ")
        .replace(/\s*\/\s*/g, ", ").replace(/(\d)mm\b/g, "$1 mm")
        .replace(/\s+RWD\b/g, ", baghjulstræk").replace(/\s+FWD\b/g, ", forhjulstræk").replace(/\bAWD\b/g, "firehjulstræk").replace(/\s+TW\b/g, ", tvillinghjul")
        .replace(/\bEj ([^.]+)/g, "Passer ikke til biler med $1").replace(/\. ([a-zæøå])/g, function (m, c) { return ". " + c.toUpperCase(); })
        .replace(/(træk|hjul) (\d)/g, "$1, $2").replace(/, ([A-ZÆØÅ])(?=[a-zæøå])/g, function (m, c) { return ", " + c.toLowerCase(); })
        .replace(/\s+/g, " ").trim();
    };
    (p.indretning || []).forEach(function (x) {
      var n = String(x.navn || ""), d = n.split(/ \/ /), nv, detalje = "";
      if (d.length >= 3) {
        // SmartVan: "Varerumsgulv / 9mm finer brun / Transit 21- (L3) / 1 skydedør FWD, Beskyttelse …"
        nv = d[0] + (/\d ?mm|finer|plast|TPO|alu/i.test(d[1]) ? ", " + d[1] : "");
        var dore = d.slice(/\d ?mm|finer|plast|TPO|alu/i.test(d[1]) ? 3 : 2).join(", ");
        var m = dore.match(/^([^,.]*(skydedør|bagdør|bagklap|fløjdør)[^,.]*)[,.]?\s*(.*)$/i);
        if (m) { nv += ", " + m[1]; detalje = m[3]; } else detalje = dore;
      } else if (/ til /.test(n)) {
        // Edström og Work System: "Reolsæt F43100 til Berlingo L1 19-, …, venstre side"
        nv = n.split(" til ")[0];
        var efter = n.split(" til ").slice(1).join(" til ").replace(/,\s*(venstre|højre) side$/, "").match(/L\d(H\d)?\s+([a-zæøå][^,]*)$/);
        if (efter && !/side$/.test(efter[2])) nv += ", " + efter[2];
      } else {
        // SmartVan: "Varerumsgulv Berlingo, Partner, … brun – L1, 2 skydedøre"
        var hoved = n.split(/ – | L\d(H\d)?\b/)[0], hale = (n.match(/(?: – )?L\d(H\d)?,?\s*(.*)$/) || [])[2] || "";
        nv = hoved.split(" ")[0] + ((hoved.match(/\b(brun|grå|lysegrå|mørkegrå|sort|hvid)\b/i) || [])[0] ? ", " + hoved.match(/\b(brun|grå|lysegrå|mørkegrå|sort|hvid)\b/i)[0] : "");
        if (hale) nv += ", " + hale;
      }
      if (x.side) nv += ", " + x.side + " side";
      // Montering nævnes én gang over listen. Hvilke biler delen passer til, ved vi allerede.
      if (/Passer IKKE til eldrevne/i.test(x.note || "") && bil.drivmiddel === "el") return;
      var note = String(x.note || "")
        .replace(/SmartVan skriver: [^!.]*passer til [^!]*?[!.](?=\s|$)/, "")
        .replace(/\s*SmartVan skriver: Passer IKKE til eldrevne varebiler!/, "")
        .replace(/,? men selve monteringen er ikke med i prisen/, "")
        .replace(/\s*Prisen er uden montering\./, "").trim();
      var nt = [ord(detalje).replace(/^./, function (c) { return c.toUpperCase(); }), note].filter(Boolean);
      // Gælder-feltet kan nævne flere modeller ("Citan L2, Kangoo L1"). Bilen beholder kun sin egen.
      var gl = String(x.gaelder || "");
      var gd = gl.split(/,\s*/), egne = gd.filter(function (y) { return /^[A-Za-zé]+\s+L\d/.test(y); });
      if (egne.length === gd.length && egne.length) {
        var mine = egne.filter(function (y) { return (bil.model || "").toLowerCase().indexOf(y.split(/\s+/)[0].toLowerCase()) >= 0; });
        if (mine.length) gl = mine.map(function (y) { return y.replace(/^\S+\s+/, ""); }).join(", ");
      }
      gl = ord(gl.replace(/\//g, " eller "));
      t.push([ord(nv), x.type === "reol" ? "indretning" : "gulv", Math.round(x.pris_kr), null, gl, 4, nt.join(" · "), "", "", x.leverandoer, [ord(detalje), note]]);
    });
    // Næsten ens produkter fra samme leverandør (samme navn, længde og pris, fx SmartVans gulve med og
    // uden udskæring ved skydedøren) står som ét produkt. Noten nævner udgaverne (brugeren 06-10-2026).
    // Har de forskellig pris, er det reelle valg, og så står de hver for sig.
    var grp = {}, ud4 = [];
    t.forEach(function (x) {
      if (x[5] !== 4 || !x[10]) { ud4.push(x); return; }
      var k = [x[9], x[1], x[0], x[4], x[2]].join("|");
      if (grp[k]) { grp[k].push(x); return; }
      grp[k] = [x];
      ud4.push(x);
    });
    ud4.forEach(function (x) {
      if (x[5] !== 4 || !x[10]) return;
      var g = grp[[x[9], x[1], x[0], x[4], x[2]].join("|")];
      if (g.length > 1) {
        var det = [];
        g.forEach(function (y) {
          var d = y[10][0] ? (y[10][0].charAt(0).toLowerCase() + y[10][0].slice(1)).replace(/\.\s*$/, "").replace(/\. ([A-ZÆØÅ])/g, function (m, c) { return ", " + c.toLowerCase(); }) : "standard";
          if (det.indexOf(d) < 0) det.push(d);
        });
        var noter = g.map(function (y) { return y[10][1]; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; });
        // Det, alle udgaver har til fælles (fx "passer ikke til biler med inverterpakke"), står én gang bagefter.
        var dele = det.map(function (d) { return d === "standard" ? [] : d.split(/,\s*/); });
        var faelles = det.length > 1 && dele.every(function (x) { return x.length; }) ? dele[0].filter(function (x) { return dele.every(function (y) { return y.indexOf(x) >= 0; }); }) : [];
        if (faelles.length) det = dele.map(function (x) { var r = x.filter(function (y) { return faelles.indexOf(y) < 0; }); return r.length ? r.join(", ") : "standard"; })
          .filter(function (v, i, a) { return a.indexOf(v) === i; });
        var uden = det.length === 2 && det.indexOf("standard") >= 0 ? det.filter(function (d) { return d !== "standard"; })[0] : "";
        var tekst = det.length < 2 ? "" : /^uden /.test(uden) ? "Fås med og " + uden + " til samme pris."
          : "Fås i " + (["", "", "to", "tre", "fire", "fem", "seks"][det.length] || det.length) + " udgaver til samme pris: " +
            (det.some(function (d) { return d.indexOf(",") >= 0; }) ? det.join("; ") : ogListe(det)) + ".";
        if (faelles.length) tekst += " " + faelles.join(", ").replace(/^./, function (c) { return c.toUpperCase(); }) + ".";
        x[6] = [tekst, noter.length === 1 ? noter[0] : ""].filter(Boolean).join(" · ");
      }
      x.length = 10;
    });
    t.length = 0;
    ud4.forEach(function (x) { t.push(x); });
    // Flere importører (fx Opel og Peugeot) sælger trækket både som komplet sæt og som enkeltdele:
    // beslag uden kugle, løs kugle, ledningsnet og adapter. Brugeren forstod ikke "anhængertræk uden
    // kugleled" (06-10-2026). Har tilbehørslisten et komplet sæt, vises enkeltdelene ikke, så ingen
    // tæller trækket med to gange.
    var komplet = t.some(function (x) { return x[1] === "traek" && x[5] === 2 && /inkl\.?.*ledningsnet|komplet/i.test(x[0]); });
    if (komplet) {
      t = t.filter(function (x) {
        return !(x[1] === "traek" && x[5] === 2 && !/inkl/i.test(x[0]) && /uden kugle|løs kugle|ledningsnet|adapter/i.test(x[0]));
      });
      t.forEach(function (x) {
        if (x[5] !== 2 && /^forberedelse til anhængertræk/i.test(x[0])) x[6] = "Fra fabrikken. Selve trækket er tilbehør, som forhandleren monterer.";
        // Pakkernes indhold nævner de samme enkeltdele; de udgør tilsammen et fast træk.
        x[6] = String(x[6] || "").replace(/anhængertræk uden kugleled(?: \(L\d\))?, løs kugle, 13-polet ledningsnet og 13\/7-adapterstik/i,
          "fast anhængertræk med 13-polet ledningsnet og 13/7-adapter");
      });
    }
    t.forEach(function (x) { x[6] = String(x[6] || "").replace(/\s*Flere varenumre\.?/i, "").trim(); });
    // Træk fra udstyrstjeklisten, hvis hverken prislisten eller tilbehørslisten har det.
    if (!t.some(function (x) { return x[1] === "traek" && /træk/i.test(x[0]); })) {
      var ts = udstyrSum(bil.id, "anhaengertraek");
      if (ts && ts.pris != null && !ts.pakke) t.push(["Anhængertræk", "traek", ts.pris, null, "", ts.tilbehoer ? 1 : 0, "pris og kilde står på leasingsiden under Udstyr"]);
    }
    var leas = data && (bil.tilbud || []).length ? h.billigsteSamlet(bil, data) : null;
    var ud = {
      id: bil.id, navn: navn(bil), lev: p.levering_kr != null ? p.levering_kr : null,
      lease: leas ? [leas.samlet, h.modelSti(bil)] : null,
      levMed: p.levering_i_listen === true && p.levering_kr == null,
      u: udgaver(p).map(function (u) { return [u.navn, u.niveau || "", u.pris_kr, gruppeNoegleU(u)]; }),
      t: t,
      ln: levNote,
      k: (p.pakker || []).filter(function (x) { return x.navn && x.pris_kr != null; }).map(function (x) {
        return [x.navn, x.pris_kr, (x.indhold || []).join(", "), x.gaelder && x.gaelder !== "alle" ? x.gaelder : "", x.niveau_priser || null];
      })
    };
    // Stempel på bilens udgaver, tilvalg og pakker. En gemt kode med et andet stempel er lavet på en ældre prisliste.
    ud.v = require("crypto").createHash("sha1").update(JSON.stringify([ud.u, ud.t, ud.k])).digest("hex").slice(0, 4);
    return ud;
  }
  function dataJS(bil, data) {
    var d = beregnerData(bil, data);
    return d ? '(window.KOEBDATA=window.KOEBDATA||{})[' + JSON.stringify(bil.id) + ']=' + JSON.stringify(d).replace(/</g, "\\u003c") + ';' : '';
  }

  // Skelettet; browseren fylder det ud. modelValg: liste af [id, navn, gruppe] til købssiden.
  function beregnerHTML(bil, modelValg) {
    return [
      '<div class="beregner" id="beregner"' + (bil ? ' data-id="' + esc(bil.id) + '"' : '') + '>',
      '  <div class="beregner__valg">',
      '    <div class="beregner__trin"><p class="beregner__trin-titel">' + (modelValg ? '1. Vælg bil og udgave' : '1. Vælg udgave') + '</p>',
      modelValg ? '    <label class="beregner__felt"><span>Bil</span><select data-b="model">' + modelValg.map(function (g) {
        return '<optgroup label="' + esc(g[0]) + '">' + g[1].map(function (m) {
          return '<option value="' + esc(m[0]) + '"' + (m[2] ? ' selected' : '') + '>' + esc(m[1]) + '</option>';
        }).join("") + '</optgroup>';
      }).join("") + '</select></label>' : '',
      '    <label class="beregner__felt"><span>Udgave</span><select data-b="udgave"></select></label></div>',
      '    <p class="beregner__trin-titel beregner__trin-titel--to">2. Sæt kryds ved det udstyr, du skal bruge</p>',
      '    <label class="beregner__felt beregner__sog"><span>Søg i udstyret</span><input type="search" data-b="sog" placeholder="Fx træk, kamera, reol"></label>',
      '    <div data-b="tilvalg" class="beregner__grupper"><noscript><p>Beregneren kræver JavaScript. ' + (bil ? 'Priserne på alle udgaver står længere nede på siden.' : 'Klik på en bil ovenfor for at se priserne på alle udgaver.') + '</p></noscript></div>',
      '  </div>',
      '  <aside class="beregner__sum" data-b="sum" aria-live="polite"></aside>',
      '</div>',
      modelValg ? '<section class="beregner-saml" id="sammenligning" hidden></section>' : '',
      modelValg ? '<form class="beregner-hent" id="hentKode"><label><span>Har du en kode eller et link til en gemt beregning?</span>' +
        '<span class="beregner-hent__felt"><input type="text" placeholder="Indsæt koden eller linket"><button type="submit" class="knap knap--sekundaer">Hent</button></span></label><small></small></form>' : ''
    ].filter(function (s) { return s !== ''; }).join("\n");
  }

  // Kører i browseren. cfg.knap er HTML til tilbudsknappen (data-lead="koeb"), som beregneren
  // giver bil, pris og udstyr med, så henvendelsen beskriver præcis den bil, læseren har regnet på.
  //
  // 06-10-2026 (brugeren): sammenlign en bil med udstyr med en anden bil med udstyr, udskriv eller
  // gem som PDF, og få en kode, så beregningen kan hentes igen. En kode er
  // "<model-id>~<udgave>~<valg>~<version>" (fx "opel-combo~0~t3.t7~a1f2"); flere koder i en
  // sammenligning er adskilt af "_". Versionen er et stempel på bilens data: er prislisten
  // opdateret siden, siger siden det. Intet gemmes hos os; koden ligger i linket.
  function beregnerKlient(cfg) {
    var rod = document.getElementById("beregner");
    if (!rod) return;
    var D = window.KOEBDATA = window.KOEBDATA || {};
    var GR = cfg.grupper, q = function (s) { return rod.querySelector('[data-b="' + s + '"]'); };
    var elM = q("model"), elU = q("udgave"), elT = q("tilvalg"), elS = q("sum"), elSog = q("sog");
    var elSaml = document.getElementById("sammenligning"), elHent = document.getElementById("hentKode");
    var m = null, ui = 0, valgt = {}, gemte = [], LS = "gulplade-sammenligning", MAKS = 3;
    var e = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    var kr = function (n) { return Math.round(n).toLocaleString("da-DK") + " kr."; };
    var bar = document.querySelector(".lead-bar__pris");

    function pris(t, niv) {
      var np = t[3];
      if (np && niv && Object.prototype.hasOwnProperty.call(np, niv)) {
        var x = np[niv];
        if (x === "std") return { std: true };
        if (x === "nej") return { nej: true };
        if (typeof x === "number") return { v: x };
      }
      return { v: t[2] };
    }
    // Pakker og tilvalg til én udgave: [noegle, navn, gruppe, pris-objekt, note, mærke, partner, krav]
    function posterFor(mm, uIdx) {
      var u = mm.u[uIdx] || mm.u[0], niv = u[1], lh = u[3] || "", ud = [];
      // Hjultrækket på udgaven. Leverandørerne af indretning skelner mellem for- og baghjulstræk (fx Crafter og Transit).
      var traek = /forhjulstræk|\bFWD\b/i.test(u[0]) ? "for" : /baghjulstræk|\bRWD\b/i.test(u[0]) ? "bag" : /4x4|4MOTION|firehjulstræk|\bAWD\b|\b4WD\b/i.test(u[0]) ? "4x4" : "";
      mm.k.forEach(function (k, i) {
        ud.push(["k" + i, k[0], "pakker", pris([k[0], null, k[1], k[4]], niv), [k[2], k[3]].filter(Boolean).join(" · "), ""]);
      });
      mm.t.forEach(function (t, i) {
        // Dele mærket med en længde ("L1", "L2H2", "L1, L1H1") vises kun til udgaver med den længde.
        var lk = String(t[4] || "").match(/L\d(H\d)?/g);
        if (lk && /^L\d/.test(lh) && !lk.some(function (x) { return lh.indexOf(x) === 0 || x.indexOf(lh) === 0; })) return;
        // Indretning: mindst én af leverandørens angivelser skal passe til både længden og hjultrækket.
        if (t[5] === 4 && t[4] && !String(t[4]).split(/,\s*/).some(function (d) {
          var l = d.match(/L\d(H\d)?/);
          if (l && /^L\d/.test(lh) && lh.indexOf(l[0]) !== 0 && l[0].indexOf(lh) !== 0) return false;
          if (!/hjulstræk|4x4/i.test(d)) d = t[0];
          if (!traek || !/hjulstræk|4x4/i.test(d)) return true;
          return traek === "for" ? /forhjulstræk/i.test(d) : traek === "bag" ? /baghjulstræk/i.test(d) : /4x4|firehjulstræk/i.test(d);
        })) return;
        // "(L1)" bag navnet og "Gælder: L1" er overflødige, når listen kun viser dele til den valgte længde.
        var kunL = /^L\d(H\d)?(, ?L\d(H\d)?)*$/.test(t[4] || "");
        var nv = kunL ? t[0].replace(/\s*\(L\d(H\d)?\)\s*$/, "").replace(/\s+L\d$/, "") : t[0];
        // [noegle, navn, gruppe, pris, note, mærke, partner, krav, leverandør]
        ud.push(["t" + i, nv, t[1], pris(t, niv), [t[4] && !kunL ? "Gælder: " + t[4] : "", t[6]].filter(Boolean).join(" · "),
          t[5] === 3 ? "partner" : t[5] === 4 ? "" : t[5] && t[1] !== "traek" ? "tilbehør" : "",
          t[5] === 3 ? (t[7] || "") : "", t[5] === 3 ? (t[8] || "") : "", t[5] === 4 ? (t[9] || "") : t[5] === 3 ? (t[7] || "") : ""]);
      });
      return ud;
    }
    function poster() { return posterFor(m, ui); }

    // ── Opgørelsen af én konfiguration (bruges af summen, sammenligningen og udskriften) ──
    function opgoer(kf) {
      var mm = D[kf.id];
      if (!mm) return null;
      var uIdx = kf.ui < mm.u.length ? kf.ui : 0, u = mm.u[uIdx], sum = u[2], linjer = [["Bilen", u[2]]], navne = [];
      if (mm.lev != null) { linjer.push(["Levering", mm.lev]); sum += mm.lev; }
      else linjer.push(["Levering", null, mm.levMed ? "Med i bilens pris" : "Pris ikke oplyst"]);
      var valgtSaet = {}, partnere = [], levs = []; kf.keys.forEach(function (k) { valgtSaet[k] = 1; });
      posterFor(mm, uIdx).forEach(function (p) {
        if (!valgtSaet[p[0]] || p[3].std || p[3].nej || p[3].v == null) return;
        var ln = p[1] + (p[8] && !p[6] ? " (" + p[8] + ")" : "");
        linjer.push([ln, p[3].v]); sum += p[3].v; navne.push(ln);
        if (p[6] && partnere.indexOf(p[6]) < 0) partnere.push(p[6]);
        else if (!p[6] && p[8] && levs.indexOf(p[8]) < 0) levs.push(p[8]);
      });
      return { mm: mm, udgave: u[0], linjer: linjer, sum: sum, navne: navne, partnere: partnere, levs: levs, gammel: kf.v && mm.v && kf.v !== mm.v };
    }
    function kode(mm, uIdx, v) {
      return mm.id + "~" + uIdx.toString(36) + "~" + Object.keys(v).sort().join(".") + "~" + (mm.v || "");
    }
    function laes(k) {
      var d = String(k || "").trim().split("~");
      if (d.length < 2 || !/^[a-z0-9-]+$/.test(d[0])) return null;
      return { id: d[0], ui: parseInt(d[1], 36) || 0, keys: d[2] ? d[2].split(".").filter(function (x) { return /^[tk]\d+$/.test(x); }) : [], v: d[3] || "", k: String(k).trim() };
    }
    function link(koder) { return location.origin + cfg.koebSti + "?k=" + koder.join("_"); }
    function hentData(id, cb) {
      if (D[id]) return cb();
      var s = document.createElement("script");
      s.src = cfg.dataSti + id + ".js";
      s.onload = cb;
      s.onerror = cb;
      document.head.appendChild(s);
    }
    function hentAlle(koder, cb) {
      var n = koder.length;
      if (!n) return cb();
      koder.forEach(function (k) { var kf = laes(k); hentData(kf ? kf.id : "", function () { if (--n === 0) cb(); }); });
    }

    // ── Beregneren ──
    function tegnUdgaver() {
      var grp = [], idx = {};
      m.u.forEach(function (u, i) {
        if (!(u[3] in idx)) { idx[u[3]] = grp.length; grp.push([u[3], []]); }
        grp[idx[u[3]]][1].push(i);
      });
      elU.innerHTML = grp.map(function (g) {
        var opt = g[1].map(function (i) { return '<option value="' + i + '"' + (i === ui ? ' selected' : '') + '>' + e(m.u[i][0]) + ' · ' + kr(m.u[i][2]) + '</option>'; }).join("");
        return grp.length > 1 && g[0] ? '<optgroup label="' + e(g[0]) + '">' + opt + '</optgroup>' : opt;
      }).join("");
    }
    // Partnere skal altid vises med, at de betaler for at være her (partnere.js' regler).
    function partnerLinje(r) {
      var navne = [], krav = [];
      r.forEach(function (p) { if (p[6] && navne.indexOf(p[6]) < 0) { navne.push(p[6]); if (p[7]) krav.push(p[7]); } });
      return navne.length ? '<p class="beregner__partner">' + e(navne.join(" og ")) + ' er partner hos Gulplade.dk og betaler for at blive vist her. ' + e(krav.join(" ")) + '</p>' : '';
    }
    function tegnTilvalg() {
      var sog = (elSog.value || "").trim().toLowerCase(), l = poster(), html = "";
      GR.forEach(function (g) {
        var r = l.filter(function (p) {
          var gg = GR.some(function (x) { return x[0] === p[2]; }) ? p[2] : "andet";
          return gg === g[0] && !p[3].nej && (!sog || p[1].toLowerCase().indexOf(sog) >= 0 || p[4].toLowerCase().indexOf(sog) >= 0);
        }).sort(function (a, b) {
          var x = a[3].std ? -1 : a[3].v == null ? 1e9 : a[3].v, y = b[3].std ? -1 : b[3].v == null ? 1e9 : b[3].v;
          return x - y;
        });
        if (!r.length) return;
        var antalValgt = r.filter(function (p) { return valgt[p[0]]; }).length;
        var li = function (p) {
          var std = p[3].std, v = p[3].v;
          return '<li><label class="beregner__post' + (std ? ' beregner__post--std' : '') + (v == null && !std ? ' beregner__post--udenpris' : '') + '">' +
            '<input type="checkbox" value="' + p[0] + '"' + (std ? ' checked disabled' : valgt[p[0]] ? ' checked' : '') + (v == null && !std ? ' disabled' : '') + '>' +
            '<span class="beregner__postnavn">' + e(p[1]) + (p[5] ? ' <span class="koeb-tag">' + p[5] + '</span>' : '') +
            (p[4] ? '<small>' + e(p[4]) + '</small>' : '') + '</span>' +
            '<span class="beregner__postpris">' + (std ? 'Standard' : v == null ? 'Pris ikke oplyst' : v === 0 ? 'Uden merpris' : kr(v)) + '</span></label></li>';
        };
        // Reoler, gulv og beklædning kommer fra flere leverandører og kan være over hundrede produkter.
        // De står under hver sin leverandør, som man folder ud (06-10-2026).
        var lev = [];
        r.forEach(function (p) { if (lev.indexOf(p[8] || "") < 0) lev.push(p[8] || ""); });
        lev.sort(function (a, b) { return !a ? -1 : !b ? 1 : a.localeCompare(b, "da"); });
        var indhold = (g[0] === "indretning" || g[0] === "gulv") && lev.some(Boolean)
          ? '<div class="beregner__levs">' + lev.map(function (lv) {
              var rr = r.filter(function (p) { return (p[8] || "") === lv; });
              var priser = rr.map(function (p) { return p[3].v; }).filter(function (v) { return v != null; });
              var nv = rr.filter(function (p) { return valgt[p[0]]; }).length;
              return '<details class="beregner__lev"' + (sog || nv || lev.length === 1 ? ' open' : '') + '><summary><span>' + e(lv || "Fra producenten") + '</span><span class="beregner__antal">' +
                rr.length + (priser.length ? ', fra ' + kr(Math.min.apply(null, priser)) : '') + (nv ? ' · ' + nv + ' valgt' : '') + '</span></summary>' +
                (lv && !rr[0][6] ? '<p class="beregner__levnote">Priserne er fra ' + e(lv) + 's webshop og er uden montering.' +
                  (m.ln && m.ln[lv] ? ' ' + e(m.ln[lv]) : '') + '</p>' : partnerLinje(rr)) +
                '<ul>' + rr.map(li).join("") + '</ul></details>';
            }).join("") + '</div>'
          : '<ul>' + r.map(li).join("") + '</ul>';
        html += '<details class="beregner__gruppe"' + (sog || g[0] === "traek" || antalValgt ? ' open' : '') + '><summary><span>' + e(g[1]) + '</span><span class="beregner__antal">' +
          r.length + (antalValgt ? ' · ' + antalValgt + ' valgt' : '') + '</span></summary>' + (indhold.indexOf("beregner__levs") > 0 ? "" : partnerLinje(r)) + indhold + '</details>';
      });
      elT.innerHTML = html || '<p class="beregner__tom">Intet udstyr passer til søgningen.</p>';
    }
    function tegnSum() {
      var o = opgoer({ id: m.id, ui: ui, keys: Object.keys(valgt), v: m.v }), u = m.u[ui];
      var nuKode = kode(m, ui, valgt);
      elS.innerHTML = '<p class="beregner__bil">' + e(m.navn) + '</p><p class="beregner__udgave">' + e(u[0]) + '</p>' +
        '<dl class="beregner__linjer">' + o.linjer.map(function (x) { return '<div><dt>' + e(x[0]) + '</dt><dd>' + (x[1] == null ? e(x[2]) : kr(x[1])) + '</dd></div>'; }).join("") + '</dl>' +
        '<p class="beregner__total"><span>I alt</span><strong>' + kr(o.sum) + '</strong></p>' +
        (m.lease ? '<p class="beregner__lease">Bilen kan også leases fra <a href="' + e(m.lease[1]) + '#tilbud">' + kr(m.lease[0]) + ' om måneden</a>.</p>' : '') +
        '<p class="beregner__note">' + (m.lev == null ? (m.levMed ? 'Producenten skriver, at leveringen er med i prisen. ' : 'Leveringen er ikke regnet med, fordi producenten ikke oplyser prisen. ') : '') +
        cfg.note + '</p>' + cfg.knap +
        '<div class="beregner__handlinger">' +
        '<button type="button" class="knap knap--sekundaer" data-h="saml">' + (cfg.side === "bil" ? 'Sammenlign med en anden bil' : 'Læg bilen i sammenligningen') + '</button>' +
        '<button type="button" class="beregner__lille" data-h="print">Udskriv eller gem som PDF</button>' +
        '<button type="button" class="beregner__lille" data-h="kopier" data-kode="' + e(nuKode) + '">Kopiér link til beregningen</button>' +
        '</div><p class="beregner__kode">Med koden kan du hente beregningen igen: <code>' + e(nuKode) + '</code></p>';
      var k = elS.querySelector("[data-lead]");
      if (k) {
        k.setAttribute("data-bil", m.navn + ", " + u[0]);
        k.setAttribute("data-pris", kr(o.sum) + " uden moms");
        k.setAttribute("data-udstyr", o.navne.join("; "));
      }
      if (bar) bar.textContent = kr(o.sum);
    }
    function tegn() { tegnUdgaver(); tegnTilvalg(); tegnSum(); }
    function brug(kf) {
      m = D[kf.id];
      if (!m) { elS.innerHTML = '<p class="beregner__tom">Beregneren kan ikke finde bilen.</p>'; return; }
      ui = kf.ui < m.u.length ? kf.ui : 0; valgt = {};
      kf.keys.forEach(function (k) { valgt[k] = 1; });
      if (elM && elM.value !== m.id) elM.value = m.id;
      elSog.value = "";
      tegn();
      if (kf.v && m.v && kf.v !== m.v) elS.insertAdjacentHTML("afterbegin", '<p class="beregner__advarsel">Prislisten er opdateret, siden beregningen blev lavet. Tjek, at udgave og udstyr stadig er de rigtige.</p>');
    }
    function hent(kf) {
      if (D[kf.id]) return brug(kf);
      elS.innerHTML = '<p class="beregner__tom">Henter priserne …</p>';
      hentData(kf.id, function () { brug(kf); });
    }

    // ── Sammenligningen ──
    function gemLokalt() { try { localStorage.setItem(LS, JSON.stringify(gemte)); } catch (x) {} }
    function tegnSaml() {
      if (!elSaml) return;
      if (!gemte.length) { elSaml.hidden = true; elSaml.innerHTML = ""; return; }
      hentAlle(gemte, function () {
        var ops = gemte.map(function (k) { return opgoer(laes(k)); });
        var min = Math.min.apply(null, ops.filter(Boolean).map(function (o) { return o.sum; }));
        elSaml.hidden = false;
        elSaml.innerHTML = '<div class="beregner-saml__hoved"><h3>Din sammenligning</h3><div class="beregner-saml__knapper">' +
          '<button type="button" class="beregner__lille" data-h="print-saml">Udskriv eller gem som PDF</button>' +
          '<button type="button" class="beregner__lille" data-h="kopier-saml">Kopiér link til sammenligningen</button>' +
          '<button type="button" class="beregner__lille" data-h="ryd">Fjern alle biler</button></div></div>' +
          (gemte.length < MAKS ? '<p class="beregner-saml__hint">Vælg en anden bil eller udgave ovenfor, og læg den i sammenligningen. Du kan sammenligne op til ' + MAKS + ' biler.</p>' : '') +
          '<div class="beregner-saml__kolonner">' + ops.map(function (o, i) {
            if (!o) return '<div class="beregner-saml__kort"><p>Beregneren kan ikke finde bilen.</p><button type="button" class="beregner__lille" data-h="fjern" data-i="' + i + '">Fjern</button></div>';
            return '<div class="beregner-saml__kort' + (o.sum === min && ops.length > 1 ? ' beregner-saml__kort--lavest' : '') + '">' +
              '<p class="beregner__bil">' + e(o.mm.navn) + '</p><p class="beregner__udgave">' + e(o.udgave) + '</p>' +
              (o.gammel ? '<p class="beregner__advarsel">Prislisten er opdateret, siden beregningen blev lavet.</p>' : '') +
              '<dl class="beregner__linjer">' + o.linjer.map(function (x) { return '<div><dt>' + e(x[0]) + '</dt><dd>' + (x[1] == null ? e(x[2]) : kr(x[1])) + '</dd></div>'; }).join("") + '</dl>' +
              '<p class="beregner__total"><span>I alt</span><strong>' + kr(o.sum) + '</strong></p>' +
              (o.mm.lease ? '<p class="beregner__lease">Bilen kan også leases fra <a href="' + e(o.mm.lease[1]) + '#tilbud">' + kr(o.mm.lease[0]) + ' om måneden</a>.</p>' : '') +
              '<p class="beregner-saml__ret"><button type="button" class="beregner__lille" data-h="ret" data-i="' + i + '">Åbn i beregneren</button>' +
              '<button type="button" class="beregner__lille" data-h="fjern" data-i="' + i + '">Fjern</button></p></div>';
          }).join("") + '</div>' +
          '<p class="beregner__kode">Med koden kan du hente sammenligningen igen: <code>' + e(gemte.join("_")) + '</code></p>';
      });
    }
    function tilfoej(k) {
      if (gemte.indexOf(k) >= 0) return;
      if (gemte.length >= MAKS) gemte.shift();
      gemte.push(k); gemLokalt(); tegnSaml();
    }

    // ── Udskrift ──
    function udskriv(koder) {
      hentAlle(koder, function () {
        var ops = koder.map(function (k) { return opgoer(laes(k)); }).filter(Boolean);
        if (!ops.length) return;
        var partnere = [], levs = []; ops.forEach(function (o) {
          o.partnere.forEach(function (n) { if (partnere.indexOf(n) < 0) partnere.push(n); });
          (o.levs || []).forEach(function (n) { if (levs.indexOf(n) < 0) levs.push(n); });
        });
        var ark = document.getElementById("printark");
        if (!ark) { ark = document.createElement("div"); ark.id = "printark"; ark.className = "printark"; document.body.appendChild(ark); }
        var d = new Date();
        ark.innerHTML = '<p class="printark__logo">Gulplade.dk</p>' +
          '<h1>' + (ops.length > 1 ? 'Sammenligning af nye varebiler' : 'Prisen på en ny ' + e(ops[0].mm.navn)) + '</h1>' +
          '<p class="printark__note">Udskrevet den ' + d.toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" }) + '. ' +
          'Priserne er vejledende listepriser uden moms fra producenternes egne prislister og tilbehørslister' + (partnere.length ? ' og fra ' + e(partnere.join(" og ")) : '') + '. ' +
          (levs.length ? 'Indretningen er fra ' + e(levs.map(function (n) { return n + "s"; }).join(", ").replace(/, ([^,]*)$/, " og $1")) + ' webshop' + (levs.length > 1 ? 's' : '') + ' og er uden montering. ' : '') +
          'Forhandleren bestemmer selv sin pris. Beregneren ved ikke, om to tilvalg kan kombineres. Levering er kun regnet med, hvor producenten oplyser prisen.' +
          (partnere.length ? ' ' + e(partnere.join(" og ")) + ' er partner hos Gulplade.dk og betaler for at blive vist.' : '') + '</p>' +
          '<div class="printark__kolonner">' + ops.map(function (o) {
            return '<div class="printark__kort"><h2>' + e(o.mm.navn) + '</h2><p>' + e(o.udgave) + '</p><table>' +
              o.linjer.map(function (x) { return '<tr><td>' + e(x[0]) + '</td><td>' + (x[1] == null ? e(x[2]) : kr(x[1])) + '</td></tr>'; }).join("") +
              '<tr class="printark__sum"><td>I alt</td><td>' + kr(o.sum) + '</td></tr>' +
              (o.mm.lease ? '<tr><td>Lease fra</td><td>' + kr(o.mm.lease[0]) + '/md.</td></tr>' : '') + '</table></div>';
          }).join("") + '</div>' +
          '<p class="printark__kode">Du kan hente ' + (koder.length > 1 ? 'sammenligningen' : 'beregningen') + ' igen med dette link: ' + e(link(koder)) + '<br>Koden er ' + e(koder.join("_")) + '</p>';
        document.documentElement.classList.add("udskriv");
        var af = function () { document.documentElement.classList.remove("udskriv"); window.removeEventListener("afterprint", af); };
        window.addEventListener("afterprint", af);
        window.print();
        setTimeout(af, 1500);
      });
    }
    function kopier(tekst, knap) {
      var ok = function () { var t = knap.textContent; knap.textContent = "Linket er kopieret"; setTimeout(function () { knap.textContent = t; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(tekst).then(ok, function () { window.prompt("Kopiér linket:", tekst); });
      else window.prompt("Kopiér linket:", tekst);
    }

    // ── Hændelser ──
    elU.addEventListener("change", function () { ui = +elU.value; tegnTilvalg(); tegnSum(); });
    elT.addEventListener("change", function (ev) {
      var c = ev.target; if (!c || c.type !== "checkbox") return;
      if (c.checked) valgt[c.value] = 1; else delete valgt[c.value];
      tegnSum();
      var g = c.closest("details"), n = g ? g.querySelectorAll("input:checked:not(:disabled)").length : 0;
      var a = g && g.querySelector(".beregner__antal");
      if (a) a.textContent = a.textContent.replace(/ · \d+ valgt$/, "") + (n ? " · " + n + " valgt" : "");
    });
    var t0; elSog.addEventListener("input", function () { clearTimeout(t0); t0 = setTimeout(tegnTilvalg, 120); });
    if (elM) elM.addEventListener("change", function () { hent({ id: elM.value, ui: 0, keys: [] }); });
    document.addEventListener("click", function (ev) {
      var b = ev.target.closest && ev.target.closest("[data-h]");
      if (!b || !(rod.contains(b) || (elSaml && elSaml.contains(b)))) return;
      var h = b.getAttribute("data-h"), nu = m ? kode(m, ui, valgt) : "";
      if (h === "saml") {
        if (cfg.side === "bil") {
          // Til købssiden, hvor man kan vælge en anden bil. Sammenligningen følger med i adressen.
          var l = gemte.slice(); if (l.indexOf(nu) < 0) l.push(nu);
          try { localStorage.setItem(LS, JSON.stringify(l.slice(-MAKS))); } catch (x) {}
          location.href = cfg.koebSti + "?k=" + l.slice(-MAKS).join("_") + "#ekstraudstyr";
        } else { tilfoej(nu); if (elSaml) elSaml.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
      } else if (h === "print") udskriv(gemte.length && cfg.side !== "bil" ? gemte.concat(gemte.indexOf(nu) < 0 ? [nu] : []).slice(-MAKS) : [nu]);
      else if (h === "print-saml") udskriv(gemte);
      else if (h === "kopier") kopier(link([b.getAttribute("data-kode")]), b);
      else if (h === "kopier-saml") kopier(link(gemte), b);
      else if (h === "ryd") { gemte = []; gemLokalt(); tegnSaml(); }
      else if (h === "fjern") { gemte.splice(+b.getAttribute("data-i"), 1); gemLokalt(); tegnSaml(); }
      else if (h === "ret") { var kf = laes(gemte[+b.getAttribute("data-i")]); if (kf) { hent(kf); rod.scrollIntoView({ behavior: "smooth" }); } }
    });
    if (elHent) elHent.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var v = elHent.querySelector("input").value.trim(), mt = v.match(/[?&]k=([^&#\s]+)/);
      var koder = decodeURIComponent(mt ? mt[1] : v).split("_").filter(function (k) { return laes(k); });
      if (!koder.length) { elHent.querySelector("small").textContent = "Beregneren kan ikke læse koden. Tjek, at du har fået hele koden eller hele linket med."; return; }
      elHent.querySelector("small").textContent = "";
      start(koder);
      rod.scrollIntoView({ behavior: "smooth" });
    });

    // ── Start: kode i adressen, ellers den gemte sammenligning ──
    function start(koder) {
      var foerste = laes(koder[0]);
      if (cfg.side === "bil") {
        if (foerste && foerste.id === rod.getAttribute("data-id")) return hent(foerste);
        return hent({ id: rod.getAttribute("data-id"), ui: 0, keys: [] });
      }
      if (koder.length > 1 || /[?&]k=/.test(location.search) && cfg.side !== "bil") {
        koder.forEach(function (k) { if (gemte.indexOf(k) < 0) gemte.push(k); });
        gemte = gemte.slice(-MAKS); gemLokalt(); tegnSaml();
      }
      if (koder.length === 1 && foerste) return hent(foerste);
      hent({ id: elM ? elM.value : rod.getAttribute("data-id"), ui: 0, keys: [] });
    }
    try { gemte = JSON.parse(localStorage.getItem(LS) || "[]").filter(function (k) { return laes(k); }).slice(-MAKS); } catch (x) { gemte = []; }
    var mk = location.search.match(/[?&]k=([^&#]+)/);
    var koder = mk ? decodeURIComponent(mk[1]).split("_").filter(function (k) { return laes(k); }) : [];
    if (cfg.side !== "bil") tegnSaml();
    if (koder.length) start(koder);
    else hent({ id: elM ? elM.value : rod.getAttribute("data-id"), ui: 0, keys: [] });
  }

  function beregnerScript(dataSti, kort) {
    var cfg = {
      grupper: BGRUPPER, dataSti: dataSti, side: kort ? "bil" : "koeb", koebSti: STI,
      note: "Priserne er vejledende, og forhandleren bestemmer selv sin pris. Beregneren lægger priserne sammen, men den ved ikke, om to tilvalg kan kombineres.",
      knap: h.tilbudsknapHTML(null, kort ? "Få tilbud på denne bil" : "Få tilbud på bilen", "koeb")
    };
    return '<script>(' + beregnerKlient.toString() + ')(' + JSON.stringify(cfg).replace(/</g, "\\u003c") + ');</script>';
  }

  // ── Bilsiden ─────────────────────────────────────────────────────────────
  function bilSide(bil, data) {
    var p = priser(bil.id);
    if (!p) return null;
    var l = udgaver(p), billigst = l[0], dyr = l[l.length - 1], nv = navn(bil), kn = h.kortNavn(bil);
    var sti = bilSti(bil);
    var leasRaekker = (bil.tilbud || []).length ? h.alleTilbud(data).filter(function (r) { return r.bil.id === bil.id && r.samlet != null; })
      .sort(function (a, b) { return a.samlet - b.samlet; }) : [];
    var leas = leasRaekker[0] || null;
    var lr = bil.lastrum || {};
    // Folk søger på "transit custom pris", så modellen og "pris" står først, og årstallet viser, at prisen er ny.
    var aar = String(dato(p) || p.hentet || "").slice(0, 4);
    var title = h.titelDerPasser([
      l.length > 1 ? nv + " pris " + aar + ": " + l.length + " udgaver fra " + talDK(billigst.pris_kr) + " kr." : null,
      nv + " pris " + aar + ": fra " + talDK(billigst.pris_kr) + " kr.",
      kn + " pris " + aar + ": fra " + talDK(billigst.pris_kr) + " kr.",
      nv + " pris " + aar
    ]);
    var desc = "Kontantprisen på en ny " + nv + " er " + (l.length > 1 ? "fra " : "") + talDK(billigst.pris_kr) + " kr. uden moms. " +
      (l.length > 1 ? "Se " + alleN(l.length, "udgaver") + ", beregn" : "Beregn") + " prisen med udstyr, og få tilbud gratis.";

    var fakta = [
      ["Lastrum", lr.volumen_m3 != null ? String(lr.volumen_m3).replace(".", ",") + " m³" : null],
      ["Nyttelast", h.nyttelastTekst(bil)],
      ["Trækvægt", h.traekTekst(bil)],
      ["Totalvægt", bil.totalvaegt_kg != null ? talDK(bil.totalvaegt_kg) + " kg" : null],
      ["Rækkevidde", bil.raekkevidde_km != null ? talDK(bil.raekkevidde_km) + " km" : null],
      ["Lastrumslængde", lr.laengde_mm != null ? talDK(lr.laengde_mm) + " mm" : null]
    ].filter(function (x) { return x[1]; }).slice(0, 5);

    // Alle udgaver i én tabel med en overskriftsrække pr. længde og højde.
    var grp = [], idx = {};
    l.forEach(function (u) { var k = gruppeNoegleU(u); if (!(k in idx)) { idx[k] = grp.length; grp.push([k, []]); } grp[idx[k]][1].push(u); });
    var flereNiv = l.map(function (u) { return u.niveau; }).filter(function (v, i, a) { return v && a.indexOf(v) === i; }).length > 1;
    var nr = 0;
    var udgaveTabel = '<div class="tilbud-tabel-wrap koeb-kort-liste"><table class="tilbud-tabel koeb-udgaver"><thead><tr><th scope="col">Udgave</th><th scope="col">Pris</th></tr></thead><tbody>' +
      grp.map(function (g) {
        var skjulGruppe = l.length > KORT_GRAENSE && nr >= KORT_VIS;
        return (grp.length > 1 && g[0] ? '<tr class="koeb-udgaver__gruppe' + (skjulGruppe ? ' koeb-ekstra' : '') + '"><th colspan="2" scope="colgroup">' + esc(g[0]) + '</th></tr>' : '') +
          g[1].map(function (u) {
            var det = udgaveDetaljer(u, flereNiv);
            return '<tr' + kortRaekke(nr++, l.length) + '><th scope="row">' + esc(u.navn) + (det ? '<span class="spec-variant">' + esc(det) + '</span>' : '') + '</th><td>' + kr(u.pris_kr) + '</td></tr>';
          }).join("");
      }).join("") + '</tbody></table></div>' + visAlleKnap(l.length, 'udgaver');

    // Standardudstyr på det billigste udstyrsniveau (udstyr.json).
    var u0 = h.udstyrForModel(bil.id), stdListe = [];
    if (u0 && h.UDSTYR) {
      stdListe = h.UDSTYR.poster.filter(function (po) { return ((u0.udstyr[po.id] || [])[0] || {}).s === "std"; }).map(function (po) { return po.navn; });
    }

    var faq = [modelFaq(bil)];
    faq.push(["Hvad er kontantprisen på en ny " + kn + "?",
      "Kontantprisen er den pris, du betaler, når du køber bilen kontant eller med lån i din egen bank. " +
      "Ifølge " + genitiv(bil.maerke) + " prisliste koster den billigste udgave " + kr(billigst.pris_kr) + " uden moms. " +
      (p.levering_kr != null ? "Med levering koster den " + kr(billigst.pris_kr + p.levering_kr) + ". " : "") +
      "Prisen er vejledende, og forhandleren bestemmer selv sin endelige pris. Her på siden kan du få tilbud fra flere forhandlere gratis."]);
    var tr = udstyrSum(bil.id, "anhaengertraek");
    if (tr && tr.pris != null && !tr.pakke) {
      faq.push(["Hvad koster et anhængertræk til en ny " + kn + "?",
        "Et anhængertræk koster " + (tr.varierer ? "fra " : "") + kr(tr.pris) +
        " ifølge " + genitiv(bil.maerke) + " egne lister." + (h.traekTekst(bil) ? " Bilen må trække " + h.traekTekst(bil) + "." : "")]);
    } else if (tr && tr.r === 0) {
      faq.push(["Har en ny " + kn + " anhængertræk?", "Ja. Anhængertrækket følger med som standard." + (h.traekTekst(bil) ? " Bilen må trække " + h.traekTekst(bil) + "." : "")]);
    }
    if (p.levering_kr != null) faq.push(["Hvad koster levering af en ny " + kn + "?", "Leveringen koster " + kr(p.levering_kr) + " ifølge " + genitiv(bil.maerke) + " prisliste."]);
    if (leas) faq.push(["Kan jeg lease en " + kn + " i stedet?", "Ja. Det billigste leasingtilbud, vi har fundet, koster " + talDK(leas.samlet) +
      " kr. om måneden, når udbetalingen er fordelt over løbetiden. Tilbuddet er fra " + leas.t.udbyder + " og har " + leas.t.loebetid_mdr + " måneders løbetid."]);
    faq = faq.filter(Boolean).map(function (x) { return [x[0], rens(x[1])]; });

    var schema = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebPage", "@id": h.BASE_URL + sti + "#side", url: h.BASE_URL + sti, name: title, description: h.beskrivelse(desc), inLanguage: "da-DK",
          dateModified: p.hentet || undefined,
          isPartOf: { "@type": "WebSite", "@id": h.BASE_URL + "/#websted", name: "Gulplade.dk", url: h.BASE_URL + "/" },
          primaryImageOfPage: bil.billede ? { "@type": "ImageObject", url: h.BASE_URL + "/assets/img/varebiler/" + bil.id + "-del.jpg" } : undefined },
        { "@type": "FAQPage", mainEntity: faq.map(function (x) { return { "@type": "Question", name: x[0], acceptedAnswer: { "@type": "Answer", text: x[1] } }; }) },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Forsiden", item: h.BASE_URL + "/" },
          { "@type": "ListItem", position: 2, name: "Køb ny varebil", item: h.BASE_URL + STI },
          { "@type": "ListItem", position: 3, name: nv } ] }
      ]
    });

    var html = [
      h.hoved(title, h.beskrivelse(desc), h.BASE_URL + sti, schema, bil.billede ? "/assets/img/varebiler/" + bil.id + "-del.jpg" : null,
        bil.billede_stor ? ['<link rel="preload" as="image" href="' + esc(bil.billede_stor) + '">'] : null),
      h.header(),
      '<main id="indhold" class="bil-side koeb-bil">',
      '<nav class="breadcrumb"><ol><li><a href="/">Forsiden</a></li><li><a href="' + STI + '">Køb ny varebil</a></li><li aria-current="page">' + esc(nv) + '</li></ol></nav>',
      '<section class="koeb-bil__hero">',
      '  <div class="koeb-bil__tekst">',
      '    <p class="hero-ny__over"><span class="hero-ny__maerkat">' + esc(genitiv(bil.maerke)) + ' prisliste</span><span>' + esc(h.visDato(dato(p))) + '</span></p>',
      '    <h1>Ny ' + esc(nv) + '</h1>',
      '    <p class="hero-ny__manchet">' + esc(nv) + ' fås i ' + (l.length === 1 ? 'én udgave' : l.length + ' udgaver') + '. Her kan du se priserne og regne ud, hvad bilen koster med det udstyr, du skal bruge. Alle priser er uden moms.</p>',
      '    <div class="koeb-bil__priser">',
      '      <div class="koeb-bil__pris"><span>Ny fra</span><strong>' + talDK(billigst.pris_kr) + ' <small>kr.</small></strong>' +
        '<em>' + (l.length === 1 ? 'Én udgave' : l.length + ' udgaver') + '</em></div>',
      leas ? '      <a class="koeb-bil__pris koeb-bil__pris--lease" href="' + h.modelSti(bil) + '#tilbud"><span>Lease fra</span><strong>' + talDK(leas.samlet) + ' <small>kr./md.</small></strong>' +
        '<em>' + (leasRaekker.length === 1 ? '1 leasingtilbud' : leasRaekker.length + ' leasingtilbud') + ' →</em></a>' : '',
      '    </div>',
      udloebetNote(bil, p) ? '    <p class="koeb-bil__note">' + esc(udloebetNote(bil, p)) + '</p>' : '',
      '    <p class="koeb-hero__knapper">' + h.tilbudsknapHTML(nv, "Få tilbud på en ny " + kn, "koeb") + '<a href="#beregn" class="knap knap--sekundaer">Beregn prisen</a></p>',
      '  </div>',
      '  <div class="koeb-bil__billede">' + (bil.billede_stor || bil.billede ? '<img src="' + esc(bil.billede_stor || bil.billede) + '" alt="' + esc(nv) + '" width="1280" height="720" fetchpriority="high" decoding="async">' : '') +
        '<span class="bilkort__maerkat">' + esc(bil.maerke) + '</span></div>',
      '</section>',
      fakta.length ? '<dl class="koeb-bil__fakta">' + fakta.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + esc(x[1]) + '</dd></div>'; }).join("") + '</dl>' : '',

      '<section class="sektion--kort" id="beregn">',
      '  <h2>Beregn prisen på din ' + esc(kn) + '</h2>',
      '  <p class="sektion__manchet">Beregneren lægger levering og det udstyr, du vælger, oven i bilens pris. Forhandleren monterer alt, der er mærket "tilbehør".</p>',
      beregnerHTML(bil, null),
      '</section>',

      stdListe.length ? '<section class="sektion--kort" id="standard"><h2>Det følger med</h2><p class="sektion__manchet">Udstyrsniveauet ' +
        esc(u0.niveauer[0].navn) + ' har ' + stdListe.length + ' af de ' + h.UDSTYR.poster.length + ' ting på vores udstyrsliste som standard.</p><ul class="koeb-std">' +
        stdListe.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") + '</ul><p><a href="' + h.modelSti(bil) + '#udstyr">Se udstyret på alle niveauer</a></p></section>' : '',

      '<section class="sektion--kort" id="udgaver">',
      '  <h2>' + (l.length === 1 ? 'Udgave og pris' : 'Priser på ' + alleN(l.length, 'udgaver')) + '</h2>',
      niveauHTML(bil, p, l),
      niveauHTML(bil, p, l) ? '<h3 class="koeb-udgaver__titel">' + (l.length === 1 ? 'Udgaven' : 'Alle ' + l.length + ' udgaver') + '</h3>' : '',
      udgaveTabel,
      '</section>',

      leasRaekker.length ? '<section class="sektion--kort" id="lease"><h2>Lease en ' + esc(kn) + ' i stedet</h2>' +
        '<p class="sektion__manchet">' + (leasRaekker.length > 3 ? 'Her er de tre billigste leasingtilbud, vi har fundet.' : leasRaekker.length === 1 ? 'Her er det leasingtilbud, vi har fundet.' : 'Her er de leasingtilbud, vi har fundet.') + ' I månedsprisen har vi fordelt udbetalingen over løbetiden.</p>' +
        '<ul class="koeb-lease">' + leasRaekker.slice(0, 3).map(function (r) {
          return '<li><span class="koeb-lease__udbyder">' + esc(r.t.udbyder) + '</span><span class="koeb-lease__vilkaar">' +
            esc([r.t.loebetid_mdr ? r.t.loebetid_mdr + ' mdr.' : '', r.t.km_pr_aar ? talDK(r.t.km_pr_aar) + ' km/år' : (r.t.km_fri ? 'fri km' : ''), r.t.leasingtype || ''].filter(Boolean).join(' · ')) +
            '</span><span class="koeb-lease__pris">' + talDK(r.samlet) + ' kr./md.</span></li>';
        }).join("") + '</ul><p><a href="' + h.modelSti(bil) + '#tilbud">Se, hvad der følger med i ' + (leasRaekker.length === 1 ? 'leasingtilbuddet' : alleN(leasRaekker.length, 'leasingtilbud')) + '</a></p></section>' : '',

      '<section class="leadboks">' +
        '<div class="leadboks__tekst"><h2>Vil du have et tilbud på en ny ' + esc(kn) + '?</h2>' +
        '<ul class="leadboks__liste"><li>Vi beder flere forhandlere om en pris på den samme bil</li>' +
        '<li>Vi læser tilbuddene igennem og siger, hvad der mangler</li><li>Gratis for dig, og du binder dig ikke</li></ul></div>' +
        '<div class="leadboks__handling">' + h.tilbudsknapHTML(nv, "Få tilbud på en ny " + kn, "koeb") +
        '<span class="leadboks__lille">Et menneske svarer · forhandleren betaler os, ikke dig</span></div>' +
      '</section>',

      '<section class="sektion--kort faq" id="faq"><h2>Spørgsmål om en ny ' + esc(kn) + '</h2>' +
        faq.map(function (x) { return '<details><summary>' + esc(x[0]) + '</summary><p>' + esc(x[1]) + '</p></details>'; }).join("") + '</section>',

      kilderHTML(bil, p, data),

      '<div class="lead-bar"><span class="lead-bar__pris">' + kr(billigst.pris_kr) + '</span>' + h.tilbudsknapHTML(nv, "Få tilbud", "koeb") + '</div><div class="lead-bar-plads"></div>',
      '</main>',
      h.footer(),
      '<script>' + dataJS(bil, data) + '</script>',
      beregnerScript(STI + "data/", true),
      VIS_ALLE_JS,
      '</body></html>'
    ].filter(function (s) { return s !== ''; }).join("\n");
    return rens(html);
  }

  // Kildeblokken på bilsiden (06-10-2026: "alt omkring kilderne skal gennemgås, så det giver troværdighed").
  // Én linje pr. slags kilde. Navnet er producentens ("Renaults prisliste"), ikke domænet, og hvor vi
  // kender den officielle side, hvor listen er offentliggjort, står den også.
  function kilderHTML(bil, p, data) {
    var ks = KILDESIDER[bil.maerke] || null;
    var link = function (url, tekst) {
      return '<a href="' + esc(url) + '" rel="nofollow noopener" target="_blank">' + esc(tekst || h.vaertNavn(url)) + '</a>';
    };
    var offentlig = offentligSide(ks, [bil]).replace(" Prislisterne", " " + esc(genitiv(bil.maerke)) + " prislister").replace("Prislisten til ", esc(genitiv(bil.maerke)) + " prisliste til ");
    var linjer = [];
    linjer.push(["Priser på bilen", link(p.kilde_url, genitiv(bil.maerke) + " prisliste for " + h.kortNavn(bil)) +
      (p.prisliste_dato ? ', dateret ' + esc(h.datoLang(p.prisliste_dato)) : '') + '. Hentet ' + esc(h.datoLang(p.hentet)) + '.' + offentlig +
      (gyldigTekst(p) ? ' ' + esc(gyldigTekst(p)) : '')]);
    if (p.tilbehoer && (p.tilbehoer.kilder || []).length) {
      linjer.push(["Tilbehør", p.tilbehoer.kilder.map(function (k) {
        return link(k.url) + (k.dato ? ', ' + esc(h.datoLang(k.dato)) : '');
      }).join("; ") + '.']);
    }
    var levs = [];
    LEVERANDOERER.forEach(function (x) {
      if ((x.produkter || []).some(function (pr) { return pr.pris != null && (pr.modeller || []).indexOf(bil.id) >= 0; }))
        levs.push({ navn: x.navn, url: x.kilde && x.kilde.url ? x.kilde.url : "https://www.mysortimo.dk/", dato: x.kilde_dato || (x.kilde || {}).dato });
    });
    (p.indretning || []).forEach(function (x) {
      if (!levs.some(function (y) { return y.navn === x.leverandoer; })) levs.push({ navn: x.leverandoer, url: x.url, dato: x.dato });
    });
    if (levs.length) {
      linjer.push(["Reoler, gulv og beklædning", levTekst(levs)]);
    }
    var u0 = h.udstyrForModel(bil.id);
    if (u0 && u0.kilde && u0.kilde.url) {
      linjer.push(["Standardudstyr", link(u0.kilde.url) + (u0.kilde.dato ? ', hentet ' + esc(h.datoLang(u0.kilde.dato)) : '') + '.']);
    }
    if ((bil.tilbud || []).length) {
      linjer.push(["Leasingtilbud", 'Ved hvert tilbud på <a href="' + h.modelSti(bil) + '#tilbud">leasingsiden</a> står, hvem der giver det, og hvornår vi hentede det.']);
    }
    linjer.push(["Mål og vægt", 'Gælder ' + esc(bil.variant_for_maal || 'den udgave, der står på leasingsiden') +
      '. Kilderne til hvert tal står under <a href="' + h.modelSti(bil) + '#specifikationer">Mål og vægt</a> på leasingsiden.']);
    return [
      '<section class="sektion--kort koeb-kilder" id="kilder">',
      '  <h2>Kilder</h2>',
      '  <p class="sektion__manchet">Vi har selv hentet og læst ' + esc(genitiv(bil.maerke)) + ' egne lister. Priserne er vejledende udsalgspriser uden levering, ' +
        'som importøren anbefaler forhandleren at sælge bilen for' + (p.levering_i_listen === true && p.levering_kr == null ? ', men her skriver producenten, at leveringen er med' : '') + '.</p>',
      '  <dl class="koeb-kilder__liste">' + linjer.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join("") + '</dl>',
      '</section>'
    ].join("\n");
  }

  // Henvisning på leasingsiden (i stedet for hele prislisten).
  function modelTeaser(bil) {
    var p = priser(bil.id);
    if (!p) return "";
    var l = udgaver(p);
    return '<section class="koeb-teaser" id="koeb"><div><p class="koeb-teaser__over">Vil du hellere købe?</p>' +
      '<p class="koeb-teaser__tekst">En ny ' + esc(navn(bil)) + (l.length > 1 ? ' fås i ' + l.length + ' udgaver. Den billigste koster <strong>' : ' koster <strong>') +
      kr(l[0].pris_kr) + '</strong> ifølge ' + esc(genitiv(bil.maerke)) + ' prisliste.</p></div>' +
      '<a class="knap knap--sekundaer" href="' + bilSti(bil) + '">Beregn prisen med udstyr</a></section>';
  }

  return {
    STI: STI,
    harPriser: function (id) { return !!priser(id); },
    side: side,
    modelSektion: modelSektion,
    modelTeaser: modelTeaser,
    bilSide: bilSide,
    bilSti: bilSti,
    dataJS: dataJS,
    modelNoegletal: modelNoegletal,
    modelFaq: modelFaq,
    maerkeBlok: maerkeBlok,
    fakta: fakta
  };
};
