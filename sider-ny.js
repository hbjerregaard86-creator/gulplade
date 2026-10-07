// sider-ny.js — nyt udseende på sider, der var store tabeller (07-10-2026, preview).
//
// Brugeren 06-10-2026 om /bedste-tilbud/: "denne side skal gøres meget bedre med mere
// grafik og forklaring", og bagefter: "Find flere af vores eksisterende sider som du kan
// optimere ala denne." Det er /elvarebiler/, /garanti/, /udstyr/ (+ 31 udstyrssider) og
// /udbydere/. De var tabeldumps med mange "Ikke oplyst" (se design-ikke-tabeldump).
//
// Hver side har sit eget flag i generate-pages.js (GULPLADE_ELSIDE_NY, GULPLADE_GARANTI_NY,
// GULPLADE_UDSTYR_NY, GULPLADE_UDBYDER_NY), så de kan godkendes hver for sig. Tabellerne
// står stadig på siderne, men foldet sammen under figurerne. De klippes ud af den gamle
// side, så der kun findes én udgave af hver tabel.
//
// Alle tal og sætninger med tal regnes ud af data. Komponenterne genbruger hubbens og
// købsdelens CSS (podium, koeb-stige, hubtal, hubydelse, prisgraf) plus blokken
// "Nye sider 07-10-2026" sidst i style.css.

module.exports = function (h) {
  var esc = h.esc, talDK = h.talDK, kommaTal = h.kommaTal;

  // ── Fælles byggeklodser ────────────────────────────────────────────────────

  function side(o) {
    return [
      // o.top: hovedet og menuen klippet fra den gamle side (samme title, description og schema).
      o.top || h.hoved(o.title, h.beskrivelse(o.desc), h.BASE_URL + o.sti, o.schema),
      o.top ? '' : h.header(),
      '<main id="indhold" class="' + (o.mainKlasse || 'indhold nyside') + '">',
      '<nav class="breadcrumb"><ol>' + o.krumme.map(function (k) {
        return k[1] ? '<li><a href="' + k[1] + '">' + esc(k[0]) + '</a></li>' : '<li aria-current="page">' + esc(k[0]) + '</li>';
      }).join('') + '</ol></nav>',
      o.indhold.filter(Boolean).join("\n"),
      '</main>',
      o.script || '',
      h.footer(),
      '</body></html>'
    ].filter(function (l) { return l !== ''; }).join("\n");
  }

  function hero(o) {
    return [
      '<section class="hero-ny' + (o.side ? ' hero-ny--artikler' : '') + ' nyhero">',
      '<div class="hero-ny__tekst">',
      '  <p class="hero-ny__over"><span class="hero-ny__maerkat">' + esc(o.maerkat) + '</span>' +
        (o.dato ? '<span>' + esc(o.dato) + '</span>' : '') + '</p>',
      '  <h1>' + esc(o.h1) + '</h1>',
      '  <p class="hero-ny__manchet">' + o.manchet + '</p>',
      o.knapper ? '  <p class="koeb-hero__knapper">' + o.knapper + '</p>' : '',
      o.note ? '  <p class="hero-ny__note">' + o.note + '</p>' : '',
      '</div>',
      o.side || '',
      '</section>'
    ].filter(Boolean).join("\n");
  }

  // Lille faktaboks til højre for overskriften: [etiket, værdi, underlinje, link].
  function faktaboks(titel, linjer) {
    return [
      '<aside class="nyfakta" aria-label="' + esc(titel) + '">',
      '  <h2 class="nyfakta__navn">' + esc(titel) + '</h2>',
      '  <dl>' + linjer.filter(Boolean).map(function (l) {
        var v = l[3] ? '<a href="' + l[3] + '">' + esc(l[1]) + '</a>' : esc(l[1]);
        return '<div><dt>' + esc(l[0]) + '</dt><dd><span class="nyfakta__tal">' + v + '</span>' +
          (l[2] ? '<span class="nyfakta__under">' + esc(l[2]) + '</span>' : '') + '</dd></div>';
      }).join('') + '</dl>',
      '</aside>'
    ].join("\n");
  }

  // Spænd pr. klasse (samme figur som "Startpriser efter størrelse" på købssiden).
  function stige(titel, rk, akse) {
    var lo = akse[0], hi = akse[1];
    function pct(v) { return ((v - lo) / (hi - lo) * 100).toFixed(1); }
    return [
      '<aside class="koeb-stige nystige" aria-label="' + esc(titel) + '">',
      '  <h2 class="koeb-stige__navn">' + esc(titel) + '</h2>',
      '  <ul>' + rk.map(function (r) {
        var bredde = Math.max(1.5, (r.max - r.min) / (hi - lo) * 100).toFixed(1);
        return '<li><a class="koeb-stige__raekke" href="' + r.href + '" title="' + esc(r.title) + '">' +
          '<span class="koeb-stige__klasse">' + esc(r.navn) + '<span class="koeb-stige__antal">' + r.n + '</span></span>' +
          '<span class="koeb-stige__spor" aria-hidden="true"><span class="koeb-stige__spaend" style="left:' + pct(r.min) + '%;width:' + bredde + '%"></span>' +
          '<span class="koeb-stige__prik" style="left:' + pct(r.max) + '%"></span></span>' +
          '<span class="koeb-stige__fra">' + esc(r.tekst) + '</span></a></li>';
      }).join('') + '</ul>',
      '</aside>'
    ].join("\n");
  }

  function billede(b, alt) {
    return b.billede
      ? '<img src="' + esc(b.billede) + '" alt="' + esc(alt == null ? h.navnMedType(b) : alt) + '" width="800" height="500" loading="lazy" decoding="async">'
      : '<span class="bilkort__intetbillede">' + esc(b.model) + '</span>';
  }
  function navn(b) { return b.maerke + ' ' + h.kortNavn(b); }

  // Tre bilkort med foto (samme kort som guidernes podium).
  function podium(liste) {
    return '<ol class="podium">' + liste.map(function (x, i) {
      var b = x.bil;
      return '<li class="podium__kort' + (i === 0 ? ' podium__kort--vinder' : '') + '"><a class="nykort__link" href="' + x.sti + '">' +
        '<div class="podium__billede">' + billede(b) + '<span class="podium__nr">Nr. ' + (i + 1) + '</span></div>' +
        '<div class="podium__krop"><h3 class="podium__navn">' + esc(navn(b)) + '</h3>' +
        '<p class="podium__tal">' + esc(x.tal) + (x.enhed ? ' <span>' + esc(x.enhed) + '</span>' : '') + '</p>' +
        (x.under ? '<p class="podium__pris">' + esc(x.under) + '</p>' : '') +
        (x.hos ? '<p class="podium__hos">' + esc(x.hos) + '</p>' : '') +
        '<span class="podium__se">' + esc(x.se || 'Se bilen') + '</span></div></a></li>';
    }).join('') + '</ol>';
  }

  // Søjler med ét tal pr. række: [{navn, n, vis, href}].
  function soejler(l, klasse) {
    var maks = Math.max.apply(null, l.map(function (x) { return x.n; }).concat([1]));
    return '<ul class="hubtal__liste nysoejler' + (klasse ? ' ' + klasse : '') + '">' + l.map(function (x) {
      var n = x.href ? '<a href="' + x.href + '">' + esc(x.navn) + '</a>' : esc(x.navn);
      return '<li><span class="hubtal__navn">' + n + '</span><span class="hubtal__spor" aria-hidden="true">' +
        (x.n ? '<span class="hubtal__soejle" style="width:' + (x.n / maks * 100).toFixed(1) + '%"></span>' : '') + '</span>' +
        '<span class="hubtal__n">' + esc(x.vis != null ? x.vis : String(x.n)) + '</span></li>';
    }).join('') + '</ul>';
  }

  // Et lille kort med en overskrift, én sætning og søjler (som "Sådan ser tilbuddene ud").
  function talkort(titel, fakta, liste, link) {
    return [
      '<div class="hubtal__kort">',
      '<h3>' + esc(titel) + '</h3>',
      fakta ? '<p class="hubtal__fakta">' + esc(fakta) + '</p>' : '',
      soejler(liste),
      link ? '<p class="hublink"><a href="' + link[0] + '">' + esc(link[1]) + '</a></p>' : '',
      '</div>'
    ].filter(Boolean).join("\n");
  }

  // Stablede søjler med tilstande: [{navn, href, dele: {noegle: antal}, tal}]. Forklaringen
  // står over figuren, og tallene står også som tekst til skærmlæsere.
  function stablet(titel, forklaring, raekker) {
    return [
      '<figure class="prisgraf__figur">',
      '<figcaption class="prisgraf__titel">' + esc(titel) + '</figcaption>',
      '<ul class="prisgraf__forklaring">' + forklaring.map(function (f) {
        return '<li><span class="hubprik nyprik--' + f[0] + '"></span>' + esc(f[1]) + '</li>';
      }).join('') + '</ul>',
      '<ul class="hubydelse__liste">' + raekker.map(function (r) {
        var dele = forklaring.filter(function (f) { return r.dele[f[0]]; });
        return '<li class="hubydelse__raekke"><span class="hubydelse__navn">' +
          (r.href ? '<a class="nystablet__link" href="' + r.href + '">' + esc(r.navn) + '</a>' : esc(r.navn)) +
          '<span class="skjult">: ' + esc(dele.map(function (f) { return f[1].toLowerCase() + ' ' + r.dele[f[0]]; }).join(', ')) + '.</span></span>' +
          '<span class="hubydelse__spor" aria-hidden="true">' + dele.map(function (f) {
            return '<span class="hubydelse__seg nyseg--' + f[0] + '" style="flex-grow:' + r.dele[f[0]] + '"></span>';
          }).join('') + '</span>' +
          '<span class="hubydelse__tal">' + r.tal + '</span></li>';
      }).join('') + '</ul>',
      '</figure>'
    ].join("\n");
  }

  // Figur, der kan sorteres på flere mål. maal: [{id, navn}]. Hver række har d[maal.id] =
  // {v, vis, under}. hoejBedst[maal.id] afgør rækkefølgen. Rækker uden tal skjules.
  function skiftgraf(id, titel, maal, rader) {
    rader.forEach(function (r) {
      maal.forEach(function (m) {
        var d = r.d[m.id];
        if (d && (d.v == null || !isFinite(d.v))) delete r.d[m.id];
      });
    });
    maal.forEach(function (m) {
      var med = rader.filter(function (r) { return r.d[m.id]; });
      var maks = Math.max.apply(null, med.map(function (r) { return r.d[m.id].v; }).concat([1]));
      med.sort(function (a, b) {
        return (m.hoejBedst ? b.d[m.id].v - a.d[m.id].v : a.d[m.id].v - b.d[m.id].v) || ((a.tie || 0) - (b.tie || 0)) || a.navn.localeCompare(b.navn, "da");
      }).forEach(function (r, i) {
        r.d[m.id].r = i + 1;
        r.d[m.id].w = r.d[m.id].v ? Math.max(1.5, r.d[m.id].v / maks * 100).toFixed(1) : '0';
      });
    });
    var m0 = maal[0].id;
    var orden = rader.filter(function (r) { return r.d[m0]; }).sort(function (a, b) { return a.d[m0].r - b.d[m0].r; })
      .concat(rader.filter(function (r) { return !r.d[m0]; }));
    var li = orden.map(function (r) {
      var attr = maal.map(function (m) {
        var d = r.d[m.id];
        return d ? ' data-r-' + m.id + '="' + d.r + '" data-w-' + m.id + '="' + d.w + '" data-vis-' + m.id + '="' + esc(d.vis) +
          '" data-under-' + m.id + '="' + esc(d.under || '') + '"' : '';
      }).join('');
      var d = r.d[m0];
      return '<li class="skift__raekke"' + attr + (d ? '' : ' hidden') + '>' +
        '<span class="skift__nr">' + (d ? d.r : '') + '</span>' +
        '<span class="skift__navn"><a class="skift__link" href="' + r.sti + '">' + esc(r.navn) + '</a>' +
        '<span class="skift__under">' + esc(d ? d.under || '' : '') + '</span></span>' +
        '<span class="skift__spor" aria-hidden="true"><span class="skift__soejle" style="width:' + (d ? d.w : 0) + '%"></span></span>' +
        '<span class="skift__tal">' + esc(d ? d.vis : '') + '</span></li>';
    }).join('');
    return [
      '<figure class="prisgraf__figur skift" id="' + id + '">',
      '<figcaption class="hubomsort__top"><span class="prisgraf__titel">' + esc(titel) + '</span>' +
        '<span class="visning skift__styr" role="group" aria-label="Sortér efter" hidden>' + maal.map(function (m, i) {
          return '<button type="button" data-maal="' + m.id + '" aria-pressed="' + (i === 0) + '">' + esc(m.navn) + '</button>';
        }).join('') + '</span></figcaption>',
      '<ol class="skift__liste">' + li + '</ol>',
      '</figure>'
    ].join("\n");
  }

  function skiftScript() {
    // Knapperne sorterer figuren om og lader rækkerne glide på plads (samme greb som hubben).
    return '<script>(function(){[].forEach.call(document.querySelectorAll(".skift"),function(f){' +
      'var l=f.querySelector("ol"),s=f.querySelector(".skift__styr");if(!s)return;s.hidden=false;' +
      's.addEventListener("click",function(e){var b=e.target.closest("button[data-maal]");if(!b||b.getAttribute("aria-pressed")==="true")return;' +
      '[].forEach.call(s.querySelectorAll("button"),function(x){x.setAttribute("aria-pressed",String(x===b));});' +
      'var k=b.getAttribute("data-maal"),r=[].slice.call(l.children),fr=r.map(function(x){return x.hidden?null:x.getBoundingClientRect().top;});' +
      'r.forEach(function(x){var v=x.getAttribute("data-r-"+k);x.hidden=!v;if(!v)return;x.querySelector(".skift__nr").textContent=v;' +
      'x.querySelector(".skift__soejle").style.width=x.getAttribute("data-w-"+k)+"%";x.querySelector(".skift__tal").textContent=x.getAttribute("data-vis-"+k);' +
      'x.querySelector(".skift__under").textContent=x.getAttribute("data-under-"+k)||"";});' +
      'r.slice().sort(function(a,c){return (+a.getAttribute("data-r-"+k)||999)-(+c.getAttribute("data-r-"+k)||999);}).forEach(function(x){l.appendChild(x);});' +
      'r.forEach(function(x,i){if(x.hidden||fr[i]==null)return;var d=fr[i]-x.getBoundingClientRect().top;x.style.transition="none";x.style.transform=d?"translateY("+d+"px)":"";});' +
      'void l.offsetHeight;r.forEach(function(x){x.style.transition="";x.style.transform="";});});});})();</script>';
  }

  function tabelFoldet(summary, html, id) {
    return '<section class="sektion hubsektion"' + (id ? ' id="' + id + '"' : '') + '><details class="aarets-alle nytabel"><summary>' +
      esc(summary) + '</summary>' + html + '</details></section>';
  }

  // Klipper en del ud af den gamle side (tabellen og noten under den).
  function klip(s, fra, til) {
    var i = s.indexOf(fra);
    if (i < 0) return '';
    var j = s.indexOf(til, i);
    return j < 0 ? '' : s.slice(i, j);
  }

  function kr(v) { return talDK(Math.round(v)) + ' kr.'; }
  function ogEller(l, ord) { return l.length < 2 ? l.join('') : l.slice(0, -1).join(', ') + ' ' + (ord || 'og') + ' ' + l[l.length - 1]; }
  function unik(l) { return l.filter(function (v, i, a) { return a.indexOf(v) === i; }); }
  var TALORD = ["nul", "én", "to", "tre", "fire", "fem", "seks", "syv", "otte", "ni", "ti", "elleve", "tolv"];
  function talOrd(n) { return TALORD[n] || talDK(n); }
  // "Alle 25 elvarebiler", "Ingen af de 25 elvarebiler", "20 af de 25 elvarebiler" (regel 6)
  function andel(n, N, ord) { return n === N ? 'Alle ' + N + ' ' + ord : n === 0 ? 'Ingen af de ' + N + ' ' + ord : n + ' af de ' + N + ' ' + ord; }
  function antal(n) { return n === 1 ? 'én model' : n + ' modeller'; }
  // Verbet efter en opremsning: "kan køre", "kan begge køre", "kan alle køre"
  function flere(n, verbum) { return n === 1 ? ' kan ' + verbum : n === 2 ? ' kan begge ' + verbum : ' kan alle ' + verbum; }

  // ── /elvarebiler/ ──────────────────────────────────────────────────────────

  function elKlasse(b) {
    if (b.karrosseri === "ladvogn") return "ladbil";
    return h.stoerrelse(b);
  }
  var EL_KLASSER = [["pizzabil", "Lille elvarebil"], ["mellem", "Mellemstor elvarebil"], ["stor", "Stor elvarebil"], ["ladbil", "Elektrisk ladbil"]];

  function batteriTekst(e) {
    var v = e.batteri_netto_kwh != null ? e.batteri_netto_kwh : e.batteri_brutto_kwh != null ? e.batteri_brutto_kwh : e.batteri_kwh;
    return v != null ? kommaTal(v) + ' kWh batteri' : '';
  }

  function elIndex(data) {
    var gammel = h.elIndexHTML(Object.assign({}, data, { _gammel: true }));
    var tabel = klip(gammel, '<div class="tilbud-tabel-wrap">', '</section>');
    var nyhed = klip(gammel, '<aside class="nyhedsboks">', '<section class="sektion"');
    var alle = data.varebiler.filter(function (b) { return h.elForModel(b.id); }).map(function (b) {
      return { bil: b, e: h.elForModel(b.id), pris: h.billigsteSamlet(b, data), sti: h.modelSti(b) };
    });
    var el = alle.filter(function (x) { return x.bil.drivmiddel === "el" && x.e.raekkevidde_km != null; });
    var ph = alle.filter(function (x) { return x.bil.drivmiddel === "plugin"; });
    var antalEl = alle.filter(function (x) { return x.bil.drivmiddel === "el"; }).length;

    // Rækkevidde efter klasse (figuren til højre for overskriften)
    var km = el.map(function (x) { return x.e.raekkevidde_km; });
    var lo = Math.floor(Math.min.apply(null, km) / 50) * 50, hi = Math.ceil(Math.max.apply(null, km) / 50) * 50;
    var rk = EL_KLASSER.map(function (k) {
      var l = el.filter(function (x) { return elKlasse(x.bil) === k[0]; }).map(function (x) { return x.e.raekkevidde_km; });
      if (!l.length) return null;
      var mi = Math.min.apply(null, l), ma = Math.max.apply(null, l);
      return { navn: k[1], n: l.length, min: mi, max: ma, href: "#raekkevidde", tekst: "op til " + talDK(ma) + " km",
        title: k[1] + ": " + (l.length === 1 ? "én model" : l.length + " modeller") + " med " + (mi === ma ? talDK(mi) : talDK(mi) + " til " + talDK(ma)) + " km rækkevidde (WLTP)" };
    }).filter(Boolean);

    var top = el.slice().sort(function (a, b) {
      return b.e.raekkevidde_km - a.e.raekkevidde_km || ((a.pris || {}).samlet || 1e9) - ((b.pris || {}).samlet || 1e9);
    }).slice(0, 3);

    var rader = el.map(function (x) {
      var e = x.e, tid = e.dc_tid_min != null ? h.minTekst(e.dc_tid_min) : null, iv = h.interval(e.dc_tid_note);
      return {
        navn: x.bil.maerke + ' ' + x.bil.model, sti: x.sti + '#opladning', tie: x.pris ? x.pris.samlet : 1e9,
        d: {
          km: { v: e.raekkevidde_km, vis: talDK(e.raekkevidde_km) + ' km', under: batteriTekst(e) },
          dc: e.dc_kw != null ? { v: e.dc_kw, vis: kommaTal(e.dc_kw) + ' kW',
            under: tid ? (iv ? 'Lader ' + iv.replace('–', ' til ') + ' på ' + tid : 'Ladetid ' + tid) : '' } : null,
          forbrug: e.forbrug_kwh_100km != null ? { v: e.forbrug_kwh_100km, vis: kommaTal(e.forbrug_kwh_100km) + ' kWh', under: 'pr. 100 km (WLTP)' } : null,
          pris: x.pris ? { v: x.pris.samlet, vis: talDK(x.pris.samlet) + ' kr./md.', under: 'Tilbud fra ' + x.pris.t.udbyder } : null
        }
      };
    });

    // Opladning og udstyr
    var acV = unik(el.map(function (x) { return x.e.ac_kw; }).filter(function (v) { return v != null; })).sort(function (a, b) { return a - b; });
    var ac = acV.map(function (v) { return { navn: kommaTal(v) + ' kW', n: el.filter(function (x) { return x.e.ac_kw === v; }).length }; });
    var acStoerst = ac.slice().sort(function (a, b) { return b.n - a.n; })[0];
    var DC = [["Under 75 kW", 0, 74.99], ["75–99 kW", 75, 99.99], ["100–149 kW", 100, 149.99], ["150 kW og mere", 150, 1e9]];
    var dc = DC.map(function (d) {
      return { navn: d[0], n: el.filter(function (x) { return x.e.dc_kw != null && x.e.dc_kw >= d[1] && x.e.dc_kw <= d[2]; }).length };
    }).filter(function (x) { return x.n; });
    var hurtigst = el.filter(function (x) { return x.e.dc_kw != null; }).sort(function (a, b) { return b.e.dc_kw - a.e.dc_kw; });
    var hurtigsteKw = hurtigst.length ? hurtigst[0].e.dc_kw : null;
    var hurtigsteNavne = hurtigst.filter(function (x) { return x.e.dc_kw === hurtigsteKw; }).map(function (x) { return x.bil.maerke + ' ' + x.bil.model; });
    function tre(felt, ord) {
      return ord.map(function (o) { return { navn: o[1], n: el.filter(function (x) { return o[0](x.e[felt]); }).length }; }).filter(function (x) { return x.n; });
    }
    var v2l = tre("v2l", [[function (v) { return v === true; }, "Ja"], [function (v) { return v === false; }, "Nej"], [function (v) { return v == null; }, "Står ikke i prislisten"]]);
    var vp = tre("varmepumpe", [[function (v) { return v === "std"; }, "Standard"], [function (v) { return v === "tilvalg"; }, "Tilvalg"],
      [function (v) { return v === "nej"; }, "Fås ikke"], [function (v) { return v == null; }, "Står ikke i prislisten"]]);
    var v2lJa = el.filter(function (x) { return x.e.v2l === true; }).length;
    var vpStd = el.filter(function (x) { return x.e.varmepumpe === "std"; }).length;

    var dato = h.ELBIL && h.ELBIL.sidst_opdateret ? 'Opdateret ' + h.visDato(h.ELBIL.sidst_opdateret) : '';
    var title = h.titel("Elvarebiler: rækkevidde og opladning sammenlignet");
    var desc = "Sammenlign rækkevidde, batteri, forbrug og opladning på " + antalEl + " elvarebiler til erhvervsleasing. Tallene er fra producenternes prislister.";

    return side({
      title: title, desc: desc, sti: "/elvarebiler/",
      schema: h.samlSchema(h.krummeSchema([["Forsiden", "/"], ["Elvarebiler", null]])),
      krumme: [["Forsiden", "/"], ["Elvarebiler", null]],
      script: skiftScript(),
      indhold: [
        hero({
          maerkat: "Producenternes egne tal", dato: dato,
          h1: "Elvarebiler: rækkevidde og opladning",
          manchet: 'Hvor langt kommer bilen, og hvor hurtigt er den klar igen? Her kan du sammenligne rækkevidde, batteri, forbrug og opladning på <strong>' +
            antalEl + ' elvarebiler</strong>. Rækkevidden er producentens WLTP-tal. I <a href="/groen-omstilling/#beregner">elberegneren</a> kan du regne ud, hvad det koster at skifte fra diesel ud fra din egen kørsel.',
          knapper: h.tilbudsknapHTML("", "Få tilbud på en elvarebil") + '<a href="/groen-omstilling/#beregner" class="knap knap--sekundaer">Regn på skiftet fra diesel</a>',
          side: stige("Rækkevidde efter størrelse", rk, [lo, hi])
        }),
        nyhed,
        '<section class="sektion sektion--taet hubsektion" id="laengst">',
        '<h2>Længst rækkevidde</h2>',
        '<p class="sektion__manchet">' + esc((function () {
          var lige = el.filter(function (x) { return x.e.raekkevidde_km === top[0].e.raekkevidde_km; })
            .map(function (x) { return x.bil.maerke + ' ' + x.bil.model; });
          return ogEller(lige) + flere(lige.length, 'køre') + ' ' + talDK(top[0].e.raekkevidde_km) +
            ' km på en opladning efter WLTP-normen. Det er længst blandt de ' + el.length + ' elvarebiler, vi har tal for.';
        })()) + '</p>',
        podium(top.map(function (x) {
          return { bil: x.bil, sti: x.sti, tal: talDK(x.e.raekkevidde_km) + ' km', enhed: 'rækkevidde',
            under: x.pris ? 'Leasing fra ' + talDK(x.pris.samlet) + ' kr./md.' : batteriTekst(x.e),
            hos: x.pris ? 'Tilbud fra ' + x.pris.t.udbyder : null };
        })),
        '<p class="hublink"><a href="/bedste-tilbud/elvarebil-med-lang-raekkevidde/">Se alle elvarebiler sorteret efter rækkevidde</a></p>',
        '</section>',
        '<section class="sektion hubsektion" id="raekkevidde">',
        '<h2>Sammenlign rækkevidde, opladning og pris</h2>',
        '<p class="sektion__manchet">Vælg, hvad bilerne skal sorteres efter. Under Pris har vi brugt det billigste tilbud på hver bil og fordelt udbetalingen over løbetiden.' +
          (ph.length ? ' Plug-in hybriderne står i tabellen nederst på siden.' : '') + '</p>',
        skiftgraf("elgraf", "Elvarebilerne sorteret efter", [
          { id: "km", navn: "Rækkevidde", hoejBedst: true },
          { id: "dc", navn: "Lynladning", hoejBedst: true },
          { id: "forbrug", navn: "Forbrug", hoejBedst: false },
          { id: "pris", navn: "Pris", hoejBedst: false }
        ], rader),
        '</section>',
        '<section class="sektion hubsektion" id="opladning">',
        '<h2>Opladning og udstyr</h2>',
        '<p class="sektion__manchet">AC er laderen i bilen, som bruges ved en ladeboks eller en almindelig ladestander. DC er lynladning.</p>',
        '<div class="hubtal">',
        acStoerst ? talkort("Ladeboks (AC)", andel(acStoerst.n, el.length, 'elvarebiler') + ' kan lade med op til ' + acStoerst.navn + ' fra en ladeboks.', ac, null) : '',
        hurtigsteKw != null ? talkort("Lynladning (DC)", ogEller(hurtigsteNavne) + flere(hurtigsteNavne.length, 'lynlade') + ' med op til ' + kommaTal(hurtigsteKw) +
          ' kW. Det er den højeste ladeeffekt blandt elvarebilerne på siden.', dc,
          ["/bedste-tilbud/elvarebil-med-hurtig-opladning/", "Elvarebiler med hurtig opladning"]) : '',
        talkort("Strøm til værktøj (V2L)", andel(v2lJa, el.length, 'elvarebiler') + ' kan levere strøm fra batteriet til værktøj.', v2l,
          v2lJa ? ["/bedste-tilbud/elvarebil-med-v2l/", "Elvarebiler med V2L"] : null),
        talkort("Varmepumpe", andel(vpStd, el.length, 'elvarebiler') + ' har varmepumpe som standard.', vp, null),
        '</div>',
        '</section>',
        '<section class="sektion--kort">',
        '  <h2>Rækkevidde i praksis</h2>',
        '  <p>WLTP-tallet er målt under standardbetingelser. Med last, om vinteren og på motorvej kommer en varebil mærkbart kortere, ofte en fjerdedel eller mere. Det er ugens længste dag og ikke gennemsnittet, der afgør, om rækkevidden er nok.</p>',
        '  <p>Lades bilen hjemme eller på firmaets adresse, er det AC-laderen og ladeboksen, der sætter tempoet. En 11 kW-lader fylder de fleste batterier på en nat. En 22 kW-lader gør det på den halve tid, men den kræver en ladeboks og en installation, der kan levere 22 kW.</p>',
        '  <p style="margin-top:1.25rem"><a href="/til-varebilen/el-abonnement/">Hvad koster strømmen oven i leasingydelsen?</a></p>',
        '</section>',
        tabel ? tabelFoldet('Se alle tal i en tabel', tabel, 'tabel') : '',
        '<div class="forbehold">',
        '  <h2>Om tallene</h2>',
        '  <p>' + esc(h.ELBIL._om) + '</p>',
        '</div>'
      ]
    });
  }

  // ── /garanti/ ──────────────────────────────────────────────────────────────

  // Garantien følger mærket, men ikke altid: Ford giver kun forlænget garanti på nogle
  // modeller. Grupperne er derfor mærke + nyvognsgaranti + forlænget garanti.
  function garantiGrupper(data) {
    var m = {};
    data.varebiler.forEach(function (b) {
      var g = h.garantiForModel(b.id);
      if (!g || !g.fabrik) return;
      var f = g.fabrik, fl = g.forlaenget;
      var noegle = [b.maerke, f.aar, f.km, f.km_ukendt, fl ? fl.aar + '/' + fl.km + '/' + (fl.pris != null) : fl === null ? 'ingen' : '?'].join('|');
      if (!m[noegle]) m[noegle] = { maerke: b.maerke, f: f, fl: fl, flUkendt: fl === undefined, biler: [], priser: [] };
      m[noegle].biler.push(b);
      if (fl && fl.pris != null) m[noegle].priser.push(fl.pris);
    });
    var l = Object.keys(m).map(function (k) { return m[k]; });
    l.forEach(function (x) {
      x.vilkaar = x.fl && x.fl.pris == null && x.fl.aar > x.f.aar ? x.fl.aar : x.f.aar;
      x.tilkoeb = x.fl && x.fl.pris != null && x.fl.aar > x.f.aar ? x.fl.aar : null;
      var flere = l.filter(function (y) { return y.maerke === x.maerke; }).length > 1;
      var modeller = x.biler.map(function (b) { return h.kortNavn(b); });
      x.navn = x.maerke;
      x.hvem = flere || modeller.length <= 3 ? ogEller(modeller) : 'Alle ' + modeller.length + ' modeller';
    });
    return l.sort(function (a, b) {
      return b.vilkaar - a.vilkaar || (b.tilkoeb || 0) - (a.tilkoeb || 0) || b.f.aar - a.f.aar || a.maerke.localeCompare(b.maerke, "da");
    });
  }

  function aarKmKort(x) { return h.aarKm(x); }
  // Til løbende tekst: "10 år eller 185.000 km" i stedet for "10 år / 185.000 km" (regel 7)
  function aarKmTekst(x) { return x.aar + ' år' + (x.km != null ? ' eller ' + talDK(x.km) + ' km' : x.km_ukendt ? '' : ' uden km-grænse'); }

  function garantiFigur(gr) {
    var maks = Math.max.apply(null, gr.map(function (x) { return x.tilkoeb || x.vilkaar; }));
    maks = Math.ceil(maks / 2) * 2;
    function pct(a) { return (a / maks * 100).toFixed(2); }
    var akse = [];
    for (var a = 0; a <= maks; a += 2) akse.push('<span style="left:' + pct(a) + '%">' + a + (a === maks ? ' år' : '') + '</span>');
    return [
      '<figure class="prisgraf__figur garfig">',
      '<figcaption class="prisgraf__titel">Antal år, bilen er dækket af garanti</figcaption>',
      '<ul class="prisgraf__forklaring"><li><span class="hubprik nyprik--fabrik"></span>Nyvognsgaranti</li>' +
        '<li><span class="hubprik nyprik--vilkaar"></span>Forlænget garanti, følger med på vilkår</li>' +
        '<li><span class="hubprik nyprik--tilkoeb"></span>Forlænget garanti, kan købes</li></ul>',
      '<ul class="garfig__liste">' + gr.map(function (x) {
        var tekst = [aarKmKort(x.f)];
        if (x.vilkaar > x.f.aar) tekst.push('forlænget til ' + aarKmKort(x.fl) + ' på vilkår');
        if (x.tilkoeb) {
          var p = unik(x.priser).sort(function (a, b) { return a - b; });
          tekst.push('kan forlænges til ' + aarKmKort(x.fl) + ' for ' + (p.length > 1 ? talDK(p[0]) + '–' + talDK(p[p.length - 1]) : talDK(p[0])) + ' kr.');
        }
        var seg = '<span class="garfig__seg nyseg--fabrik" style="left:0;width:' + pct(x.f.aar) + '%"></span>';
        if (x.vilkaar > x.f.aar) seg += '<span class="garfig__seg nyseg--vilkaar" style="left:' + pct(x.f.aar) + '%;width:' + pct(x.vilkaar - x.f.aar) + '%"></span>';
        if (x.tilkoeb) seg += '<span class="garfig__seg nyseg--tilkoeb" style="left:' + pct(x.vilkaar) + '%;width:' + pct(x.tilkoeb - x.vilkaar) + '%"></span>';
        return '<li class="garfig__raekke"><span class="garfig__navn"><strong>' + esc(x.navn) + '</strong><span>' + esc(x.hvem) + '</span></span>' +
          '<span class="garfig__spor" aria-hidden="true">' + seg + '</span>' +
          '<span class="garfig__tal">' + x.vilkaar + ' år</span>' +
          '<span class="garfig__tekst">' + esc(tekst.join(', ')) + '</span></li>';
      }).join('') + '</ul>',
      '<div class="garfig__akse" aria-hidden="true">' + akse.join('') + '</div>',
      '</figure>'
    ].join("\n");
  }

  function garantiIndex(data) {
    var gammel = h.garantiIndexHTML(Object.assign({}, data, { _gammel: true }));
    var tabel = klip(gammel, '<div class="tilbud-tabel-wrap">', '</section>');
    var gr = garantiGrupper(data);
    var biler = data.varebiler.filter(function (b) { return h.garantiForModel(b.id); });
    var maxFabrik = Math.max.apply(null, gr.map(function (x) { return x.f.aar; }));
    var fabrikTop = gr.filter(function (x) { return x.f.aar === maxFabrik; });
    var maxVilkaar = Math.max.apply(null, gr.map(function (x) { return x.vilkaar; }));
    var vilkaarTop = gr.filter(function (x) { return x.vilkaar === maxVilkaar; });
    var to = biler.filter(function (b) { return h.garantiForModel(b.id).fabrik.aar === 2; }).length;

    // Batterigaranti på elbilerne, grupperet efter vilkår
    var bat = {};
    biler.forEach(function (b) {
      var g = h.garantiForModel(b.id);
      if (!h.harBatteri(b) || !g.batteri) return;
      var k = h.garantiVaerdi("batteri", g.batteri);
      (bat[k] = bat[k] || { tekst: k, aar: g.batteri.aar, maerker: [], n: 0 }).n++;
      if (bat[k].maerker.indexOf(b.maerke) < 0) bat[k].maerker.push(b.maerke);
    });
    var batL = Object.keys(bat).map(function (k) { return bat[k]; }).sort(function (a, b) { return b.n - a.n; });
    var antalBat = batL.reduce(function (s, x) { return s + x.n; }, 0);
    var antalElbiler = biler.filter(function (b) { return b.drivmiddel === "el"; }).length;
    var batAar = unik(batL.map(function (x) { return x.aar; }));

    // Gennemtæring pr. mærke
    var gt = {};
    biler.forEach(function (b) {
      var g = h.garantiForModel(b.id), x = gt[b.maerke] = gt[b.maerke] || { aar: [], tom: [] };
      if (g.gennemtaering && g.gennemtaering.aar != null) x.aar.push(g.gennemtaering.aar);
      else x.tom.push(h.garantiTom(g, "gennemtaering"));
    });
    var gtL = Object.keys(gt).map(function (m) {
      var x = gt[m], mi = x.aar.length ? Math.min.apply(null, x.aar) : null, ma = x.aar.length ? Math.max.apply(null, x.aar) : null;
      return { navn: m, n: ma || 0, tom: ma == null ? (x.tom.indexOf("Ikke oplyst") >= 0 ? "ukendt" : "ingen") : null,
        vis: ma == null ? '' : (mi === ma ? ma + ' år' : mi + '–' + ma + ' år') };
    }).sort(function (a, b) { return b.n - a.n || a.navn.localeCompare(b.navn, "da"); });
    var gtIngen = gtL.filter(function (x) { return x.tom === "ingen"; }).map(function (x) { return x.navn; });
    var gtUkendt = gtL.filter(function (x) { return x.tom === "ukendt"; }).map(function (x) { return x.navn; });
    gtL = gtL.filter(function (x) { return !x.tom; });

    var laengst = biler.map(function (b) { return h.garantiLaengst(h.garantiForModel(b.id)); }).filter(Boolean)
      .sort(function (a, b) { return b.aar - a.aar || ((b.km == null ? 1e9 : b.km) - (a.km == null ? 1e9 : a.km)); })[0];
    var title = h.titel("Garanti på varebiler — alle mærker sammenlignet");
    var desc = "Sammenlign nyvognsgaranti, forlænget garanti, batterigaranti, gennemtæring og vejhjælp på " + biler.length
      + " varebiler til erhverv. Tallene er fra producenternes danske prislister og garantisider.";
    var dato = h.GARANTI && h.GARANTI.sidst_opdateret ? 'Opdateret ' + h.visDato(h.GARANTI.sidst_opdateret) : '';

    return side({
      title: title, desc: desc, sti: "/garanti/",
      schema: h.samlSchema(h.krummeSchema([["Forsiden", "/"], ["Garanti", null]])),
      krumme: [["Forsiden", "/"], ["Garanti", null]],
      indhold: [
        hero({
          maerkat: "Producenternes egne garantier", dato: dato,
          h1: "Garanti på varebiler, sammenlignet",
          manchet: 'Garantien står sjældent i en leasingannonce, men den kan afgøre, hvem der betaler, når noget går i stykker i år fire. Her kan du sammenligne garantien på <strong>' +
            biler.length + ' modeller</strong> og se, hvor længe den kan vare uden tilkøb.' +
            (laengst ? ' Den længste gælder i ' + esc(aarKmTekst(laengst)) + (laengst.forlaenget ? ', hvis vilkårene er opfyldt' : '') + '.' : ''),
          knapper: h.tilbudsknapHTML("", "Få tilbud gratis") + '<a href="#tabel" class="knap knap--sekundaer">Se garantien på hver model</a>',
          side: faktaboks("Kort fortalt", [
            ["Længste nyvognsgaranti", ogEller(unik(fabrikTop.map(function (x) { return x.maerke; }))) + ': ' + maxFabrik + ' år',
              unik(fabrikTop.map(function (x) { return x.maerke; })).length === 1
                ? (fabrikTop[0].f.km != null ? 'højst ' + talDK(fabrikTop[0].f.km) + ' km' : fabrikTop[0].f.km_ukendt ? null : 'uden km-grænse') : null],
            maxVilkaar > maxFabrik ? ["Længst med forlænget garanti", ogEller(unik(vilkaarTop.map(function (x) { return x.maerke; }))) + ': ' + maxVilkaar + ' år', 'på vilkår, uden tilkøb'] : null,
            ["Nyvognsgaranti på 2 år", to + ' af ' + biler.length + ' modeller', null],
            antalBat ? ["Batterigaranti", batAar.length === 1
              ? batAar[0] + ' år på ' + (antalBat === antalElbiler ? 'alle ' : '') + antalBat + ' elvarebiler'
              : batAar.join(' eller ') + ' år', null] : null
          ])
        }),
        '<section class="sektion sektion--taet hubsektion" id="maerker">',
        '<h2>Garantien hos hvert mærke</h2>',
        '<p class="sektion__manchet">' + esc(ogEller(unik(fabrikTop.map(function (x) { return x.maerke; })))) + ' giver den længste nyvognsgaranti på ' + maxFabrik + ' år. ' +
          (maxVilkaar > maxFabrik ? 'Hos ' + esc(ogEller(unik(vilkaarTop.map(function (x) { return x.maerke; })))) + ' kan garantien følge med i op til ' + maxVilkaar + ' år, når bilen bliver serviceret efter producentens program. ' : '') +
          'På ' + to + ' af de ' + biler.length + ' modeller er nyvognsgarantien 2 år.</p>',
        garantiFigur(gr),
        '</section>',
        antalBat ? [
          '<section class="sektion hubsektion" id="batteri">',
          '<h2>Batterigaranti på elvarebilerne</h2>',
          '<p class="sektion__manchet">Batteriet har sin egen garanti. Står der en mindste kapacitet på kortet, dækker garantien, hvis batteriet kommer under den i garantiperioden.</p>',
          '<div class="nybat">' + batL.map(function (x) {
            var m = x.tekst.match(/^(\d+) år(.*)$/);
            return '<div class="nybat__kort"><p class="nybat__aar">' + esc(m ? m[1] + ' år' : x.tekst) + '</p>' +
              '<p class="nybat__vilkaar">' + esc(m ? m[2].replace(/^\s*\/\s*/, '').replace(/^,\s*/, '') : '') + '</p>' +
              '<p class="nybat__hvem">' + x.n + (x.n === 1 ? ' elvarebil' : ' elvarebiler') + ' fra ' + esc(ogEller(x.maerker)) + '</p></div>';
          }).join('') + '</div>',
          '</section>'
        ].join("\n") : '',
        '<section class="sektion hubsektion" id="gennemtaering">',
        '<h2>Garanti mod gennemtæring</h2>',
        '<p class="sektion__manchet">Gennemtæringsgarantien dækker rust, der æder hul i karrosseriet. Den løber ofte længere end nyvognsgarantien.</p>',
        '<div class="hubtal__kort nygt">' + soejler(gtL) + '</div>',
        gtIngen.length ? '<p class="kilde">' + esc(ogEller(gtIngen)) + ' giver ingen garanti mod gennemtæring på varebilerne.</p>' : '',
        gtUkendt.length ? '<p class="kilde">Vi har ikke fundet en garanti mod gennemtæring i det danske materiale fra ' + esc(ogEller(gtUkendt)) + '.</p>' : '',
        '</section>',
        '<section class="sektion--kort">',
        '  <h2>Garanti på en leaset varebil</h2>',
        '  <p>Leasingselskabet ejer bilen, men garantien følger bilen. I de fleste aftaler skal du selv sørge for, at servicen bliver lavet til tiden. Ellers kan en forlænget garanti bortfalde. Aftalen afgør, hvem der betaler en reparation, som garantien ikke dækker.</p>',
        '  <p>En aftale på 60 måneder løber to år længere end en garanti på tre år. De sidste to år kan derfor blive dyre, medmindre service og reparation er med i ydelsen.</p>',
        '</section>',
        tabel ? tabelFoldet('Se garantien på alle ' + biler.length + ' modeller', tabel, 'tabel') : '',
        '<div class="forbehold">',
        '  <h2>Om tallene</h2>',
        '  <p>' + esc(h.GARANTI._om) + '</p>',
        '</div>'
      ]
    });
  }

  // ── /udstyr/ ───────────────────────────────────────────────────────────────

  var UDSTYR_DELE = [["std", "Standard"], ["tilvalg", "Tilvalg"], ["nej", "Fås ikke"], ["ukendt", "Står ikke i prislisten"]];
  function udstyrTal(post, data) {
    var r = h.udstyrRaekker(post, data);
    var t = { std: 0, tilvalg: 0, nej: 0, ukendt: 0 };
    r.forEach(function (x) { var s = x.lav.s === "pakke" ? "tilvalg" : x.lav.s; t[s in t ? s : "ukendt"]++; });
    return { r: r, t: t };
  }
  function postSti(p) { return "/udstyr/" + h.slug(p.navn) + "/"; }
  // Navne, der skal skrives anderledes i en sætning end i en liste (regel 1 og 7)
  var TEKSTNAVN = { "Skydedør højre side": "skydedør i højre side", "Skydedør venstre side": "skydedør i venstre side",
    "DAB+ radio": "DAB+-radio", "P-sensorer for": "P-sensorer foran" };
  function navnLille(p) {
    if (TEKSTNAVN[p.navn]) return TEKSTNAVN[p.navn];
    return /^[A-ZÆØÅ]{2}|^(Apple|DAB|LED|P-|12V)/.test(p.navn) ? p.navn : p.navn.charAt(0).toLowerCase() + p.navn.slice(1);
  }

  function udstyrIndex(data) {
    var U = h.UDSTYR;
    var antal = data.varebiler.filter(function (b) { return h.udstyrForModel(b.id); }).length;
    var tal = U.poster.map(function (p) { var x = udstyrTal(p, data); return { p: p, t: x.t, n: x.r.length }; });
    var mest = tal.slice().sort(function (a, b) { return b.t.std - a.t.std; });
    var title = h.titel("Udstyr på varebiler — standard og tilvalg på tværs af mærker");
    var desc = "Hvilke varebiler har bakkamera, CarPlay, sædevarme eller skydedør i begge sider som standard? "
      + "Vi har sammenlignet " + U.poster.length + " slags udstyr på " + antal + " modeller.";
    var grupper = U.grupper.map(function (g) {
      var l = tal.filter(function (x) { return x.p.gruppe === g.id; });
      if (!l.length) return '';
      return [
        '<section class="sektion hubsektion nyudstyr" id="gruppe-' + esc(g.id) + '">',
        '<h2>' + esc(g.navn) + '</h2>',
        stablet('Det billigste udstyrsniveau på ' + antal + ' modeller', UDSTYR_DELE, l.map(function (x) {
          return { navn: x.p.navn, href: postSti(x.p), dele: x.t, tal: '<strong>' + x.t.std + '</strong> standard' };
        })),
        '</section>'
      ].join("\n");
    }).join("\n");
    return side({
      title: title, desc: desc, sti: "/udstyr/",
      schema: h.samlSchema(h.krummeSchema([["Forsiden", "/"], ["Udstyr", null]])),
      krumme: [["Forsiden", "/"], ["Udstyr", null]],
      indhold: [
        hero({
          maerkat: "Producenternes egne prislister", dato: U.sidst_opdateret ? 'Opdateret ' + h.visDato(U.sidst_opdateret) : '',
          h1: "Udstyr på varebiler, sammenlignet på tværs af mærker",
          manchet: 'Hver producent stiller sin prisliste op på sin egen måde. Vi har slået det samme udstyr op hos alle, så du kan se, hvad der er standard på det billigste udstyrsniveau, hvad der koster ekstra, og hvad der ikke kan fås på det niveau. Det gælder <strong>' +
            U.poster.length + ' slags udstyr</strong> på <strong>' + antal + ' modeller</strong>.',
          side: faktaboks("Oftest standard", mest.slice(0, 4).map(function (x) {
            return [x.p.navn, x.t.std + ' af ' + x.n, null, postSti(x.p)];
          }))
        }),
        '<nav class="nyudstyr__menu" aria-label="Grupper"><p class="maerkelinks">' + U.grupper.map(function (g) {
          return '<a href="#gruppe-' + esc(g.id) + '">' + esc(g.navn) + '</a>';
        }).join('') + '</p></nav>',
        grupper,
        '<div class="forbehold">',
        '  <h2>Om tallene</h2>',
        '  <p>' + esc(U._om) + '</p>',
        '</div>'
      ]
    });
  }

  function chips(liste) {
    // Modellerne grupperet efter mærke: [{bil, tekst, note}]. Noter står under listen.
    var m = {}, noter = [];
    liste.forEach(function (x) { (m[x.bil.maerke] = m[x.bil.maerke] || []).push(x); });
    var ul = '<ul class="nychips">' + Object.keys(m).sort(function (a, b) { return a.localeCompare(b, "da"); }).map(function (mk) {
      return '<li><span class="nychips__maerke">' + esc(mk) + '</span>' + m[mk].map(function (x) {
        if (x.note) noter.push(x.bil.maerke + ' ' + x.bil.model + ': ' + x.note.replace(/\.?$/, '.'));
        return '<a class="nychips__link" href="' + h.modelSti(x.bil) + '#udstyr"' + (x.note ? ' title="' + esc(x.note) + '"' : '') + '>' + esc(h.kortNavn(x.bil)) +
          (x.tekst ? ' <span>' + esc(x.tekst) + '</span>' : '') + '</a>';
      }).join('') + '</li>';
    }).join('') + '</ul>';
    return ul + (noter.length ? '<details class="nychips__detaljer"><summary>Noter fra prislisterne (' + noter.length + ')</summary><ul class="nychips__noter">' +
      noter.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></details>' : '');
  }

  function udstyrPost(post, data) {
    var gammel = h.udstyrPostHTML(post, Object.assign({}, data, { _gammel: true }));
    var tabel = klip(gammel, '<div class="tilbud-tabel-wrap">', '</section>');
    var andre = klip(gammel, '<section class="sektion--kort">\n  <h2>Andet udstyr</h2>', '</section>');
    var x = udstyrTal(post, data), r = x.r, t = x.t;
    var nl = navnLille(post), Nl = nl.charAt(0).toUpperCase() + nl.slice(1);
    var std = r.filter(function (y) { return y.lav.s === "std"; });
    var hoejStd = r.filter(function (y) { return y.lav.s !== "std" && y.hoej && y.hoej.s === "std"; });
    var tilvalg = r.filter(function (y) { return y.lav.s === "tilvalg" || y.lav.s === "pakke"; });
    var medPris = tilvalg.filter(function (y) { return y.lav.pris != null; }).sort(function (a, b) { return a.lav.pris - b.lav.pris; });
    var udenPris = tilvalg.filter(function (y) { return y.lav.pris == null; });
    var nej = r.filter(function (y) { return y.lav.s === "nej"; });
    var ukendt = r.filter(function (y) { return y.lav.s === "ukendt"; });
    var sti = postSti(post);
    var overskrift = std.length ? "Varebiler med " + nl + " som standard" : "Varebiler med " + nl;
    var title = h.titel(overskrift);
    var forste = std.length
      ? Nl + ' er standard på det billigste udstyrsniveau på ' + std.length + ' af ' + r.length + ' varebiler.'
      : 'Ingen af de ' + r.length + ' varebiler har ' + nl + ' som standard på det billigste udstyrsniveau.';
    var desc = forste + (std.length ? ' Se hvilke' + (medPris.length ? ', og hvad det koster som tilvalg.' : '.') : (medPris.length ? ' Se, hvad det koster som tilvalg.' : ''));
    var maksPris = medPris.length ? medPris[medPris.length - 1].lav.pris : 1;

    var prisliste = medPris.length ? [
      '<ul class="koeb-soejler nypris">',
      medPris.map(function (y) {
        var p = y.lav.pris;
        return '<li><span class="koeb-soejler__navn"><a href="' + h.modelSti(y.bil) + '#udstyr">' + esc(y.bil.maerke + ' ' + y.bil.model) + '</a>' +
          '<span class="nypris__niv">' + esc(y.u.niveauer[0].navn) + (y.lav.s === "pakke" ? ', i ' + esc(y.lav.pakke || 'en pakke') : '') +
          (y.lav.note ? '. ' + esc(y.lav.note) : '') + '</span></span>' +
          '<span class="koeb-soejler__spor" aria-hidden="true"><span class="koeb-soejler__soejle" style="width:' + Math.max(1.5, p / maksPris * 100).toFixed(1) + '%"></span></span>' +
          '<span class="koeb-soejler__pris">' + (p === 0 ? 'Uden merpris' : talDK(p) + ' kr.') + '</span></li>';
      }).join(''),
      '</ul>'
    ].join("\n") : '';

    return side({
      title: title, desc: desc, sti: sti,
      schema: h.samlSchema(h.krummeSchema([["Forsiden", "/"], ["Udstyr", "/udstyr/"], [post.navn, null]])),
      krumme: [["Forsiden", "/"], ["Udstyr", "/udstyr/"], [post.navn, null]],
      indhold: [
        hero({
          maerkat: "Udstyr på tværs af mærker", dato: h.UDSTYR.sidst_opdateret ? 'Opdateret ' + h.visDato(h.UDSTYR.sidst_opdateret) : '',
          h1: overskrift,
          manchet: (std.length
              ? esc(Nl) + ' er standard på det billigste udstyrsniveau på <strong>' + std.length + ' af ' + r.length + '</strong> varebiler.'
              : esc(forste)) +
            (hoejStd.length ? ' På ' + antal(hoejStd.length) + ' er det standard på det dyreste niveau.' : ''),
          side: '<aside class="nyfakta nyudstyr__fig" aria-label="Fordeling">' +
            '<h2 class="nyfakta__navn">Det billigste niveau på ' + r.length + ' modeller</h2>' +
            '<span class="hubydelse__spor nyudstyr__bar" aria-hidden="true">' + UDSTYR_DELE.filter(function (d) { return t[d[0]]; }).map(function (d) {
              return '<span class="hubydelse__seg nyseg--' + d[0] + '" style="flex-grow:' + t[d[0]] + '"></span>';
            }).join('') + '</span>' +
            '<dl>' + UDSTYR_DELE.filter(function (d) { return t[d[0]]; }).map(function (d) {
              return '<div><dt><span class="hubprik nyprik--' + d[0] + '"></span>' + esc(d[1]) + '</dt><dd><span class="nyfakta__tal">' + t[d[0]] + '</span></dd></div>';
            }).join('') + '</dl></aside>'
        }),
        std.length ? '<section class="sektion sektion--taet hubsektion"><h2>Standard på det billigste niveau</h2>' +
          '<p class="sektion__manchet">På ' + antal(std.length) + ' er ' + esc(nl) + ' standard allerede på det billigste udstyrsniveau.</p>' +
          chips(std.map(function (y) { return { bil: y.bil, note: y.lav.note }; })) + '</section>' : '',
        hoejStd.length ? '<section class="sektion hubsektion"><h2>Standard på et dyrere niveau</h2>' +
          '<p class="sektion__manchet">På ' + antal(hoejStd.length) + ' er ' + esc(nl) + ' standard på det dyreste udstyrsniveau. Niveauet står ved modellen.</p>' +
          chips(hoejStd.map(function (y) { return { bil: y.bil, tekst: y.u.niveauer[y.u.niveauer.length - 1].navn, note: y.hoej.note }; })) + '</section>' : '',
        tilvalg.length ? '<section class="sektion hubsektion"><h2>Pris som tilvalg</h2>' +
          '<p class="sektion__manchet">' + (medPris.length
            ? 'På ' + antal(tilvalg.length) + ' kan du vælge ' + esc(nl) + ' til på det billigste niveau. ' +
              (medPris.length > 1 ? 'Prisen går fra ' + (medPris[0].lav.pris === 0 ? '0' : talDK(medPris[0].lav.pris)) + ' til ' + talDK(maksPris) + ' kr.' : 'Prisen er ' + talDK(maksPris) + ' kr.') +
              ' Priserne er producentens listepriser uden moms.'
            : 'På ' + antal(tilvalg.length) + ' kan du vælge ' + esc(nl) + ' til, men ' + (tilvalg.length === 1 ? 'prislisten' : 'prislisterne') + ' oplyser ikke prisen.') + '</p>' +
          prisliste +
          (udenPris.length && medPris.length ? '<p class="kilde">På ' + esc(ogEller(udenPris.map(function (y) { return y.bil.maerke + ' ' + y.bil.model; }))) + ' er ' + esc(nl) +
            ' et tilvalg, men ' + (udenPris.length === 1 ? 'prislisten' : 'prislisterne') + ' oplyser ikke prisen.</p>' : '') +
          '</section>' : '',
        nej.length ? '<section class="sektion hubsektion"><h2>Fås ikke</h2>' +
          '<p class="sektion__manchet">På ' + antal(nej.length) + ' kan ' + esc(nl) + ' ikke fås fra fabrikken på det billigste niveau.</p>' +
          chips(nej.map(function (y) { return { bil: y.bil, note: y.lav.note }; })) + '</section>' : '',
        ukendt.length ? '<section class="sektion hubsektion"><h2>Står ikke i prislisten</h2>' +
          '<p class="sektion__manchet">' + (ukendt.length === 1 ? 'Prislisten' : 'Prislisterne') + ' nævner ikke ' + esc(nl) + ' på ' + antal(ukendt.length) +
            '. Det betyder ikke, at ' + (ukendt.length === 1 ? 'bilen' : 'bilerne') + ' mangler det.</p>' +
          chips(ukendt.map(function (y) { return { bil: y.bil }; })) + '</section>' : '',
        tabel ? tabelFoldet('Se både det billigste og det dyreste niveau på alle ' + r.length + ' modeller', tabel, 'tabel') : '',
        andre ? andre + '</section>' : '',
        h.ctaBlok()
      ]
    });
  }

  // ── /udbydere/ ─────────────────────────────────────────────────────────────

  // Faktalinje til den bedste på et mål. Deler flere førstepladsen, står de alle (højst tre).
  function delt(etiket, l, fn, hoej, vis, under) {
    var v = l.map(fn).reduce(function (m, x) { return hoej ? Math.max(m, x) : Math.min(m, x); });
    var top = l.filter(function (u) { return fn(u) === v; });
    var u2 = typeof under === "function" ? under(top) : under || null;
    if (top.length === 1) return [etiket, top[0].navn + ': ' + vis(v), u2, top[0].sti];
    return [etiket, (top.length <= 3 ? ogEller(top.map(function (u) { return u.navn; })) : top.length + ' selskaber') + ': ' + vis(v), u2];
  }

  function udbydereIndex(data) {
    var gammel = h.udbydereIndexHTML(Object.assign({}, data, { _gammel: true }));
    var ud = h.udbyderData(data);
    var antal = ud.reduce(function (s, u) { return s + u.rader.length; }, 0);
    var flest = ud.slice().sort(function (a, b) { return b.rader.length - a.rader.length; })[0];
    var billigst = ud.filter(function (u) { return u.billigst != null; }).sort(function (a, b) { return a.billigst - b.billigst; })[0];
    var bedst = ud[0];
    var navne = ud.slice().sort(function (a, b) { return b.rader.length - a.rader.length; }).map(function (u) { return u.navn; });
    var title = h.titel("Varebil leasingselskaber — " + navne.slice(0, 2).join(", ") + " m.fl.");
    var desc = "Vi har samlet " + antal + " tilbud fra " + ud.length + " forhandlere og leasingselskaber. " +
      "Se, hvor meget hver af dem oplyser om service, dæk, forsikring, ejerafgift og vejhjælp.";
    var schema = klip(gammel, '<script type="application/ld+json">', '</script>').replace('<script type="application/ld+json">', '');

    var rader = ud.map(function (u) {
      var modeller = unik(u.rader.map(function (r) { return r.bil.id; })).length;
      return {
        navn: u.navn, sti: u.sti,
        d: {
          oplyst: { v: u.pct, vis: u.pct + ' %', under: u.rader.length + (u.rader.length === 1 ? ' tilbud' : ' tilbud') + ' på ' + modeller + (modeller === 1 ? ' model' : ' modeller') },
          antal: { v: u.rader.length, vis: u.rader.length + ' tilbud', under: modeller + (modeller === 1 ? ' model' : ' modeller') },
          pris: u.billigst != null ? { v: u.billigst, vis: talDK(u.billigst) + ' kr./md.', under: 'billigste tilbud med udbetalingen fordelt' } : null
        }
      };
    });

    // Service og reparation i ydelsen, pr. forhandler eller leasingselskab
    var service = ud.map(function (u) {
      var med = 0, ikke = 0;
      u.rader.forEach(function (r) {
        if ((r.t.inkluderet || []).indexOf("service_reparation") >= 0) med++;
        else if ((r.t.ikke_inkluderet || []).indexOf("service_reparation") >= 0) ikke++;
      });
      return { navn: u.navn, href: u.sti, dele: { med: med, ikke: ikke, uoplyst: u.rader.length - med - ikke },
        tal: '<strong>' + med + '</strong> af ' + u.rader.length, med: med, n: u.rader.length };
    }).sort(function (a, b) { return (b.med / b.n) - (a.med / a.n) || b.n - a.n; });
    var altid = service.filter(function (x) { return x.med === x.n; }).map(function (x) { return x.navn; });
    var aldrig = service.filter(function (x) { return x.med === 0; }).length;

    return side({
      title: title, desc: desc, sti: "/udbydere/",
      schema: schema,
      krumme: [["Forsiden", "/"], ["Udbydere", null]],
      script: skiftScript(),
      indhold: [
        hero({
          maerkat: "Uafhængig sammenligning", dato: 'Opdateret ' + h.visDato(data.sidst_opdateret),
          h1: "Hvad leasingselskaberne oplyser",
          manchet: 'Et leasingtilbud kan være billigt og ufuldstændigt på samme tid. Her er de <strong>' + ud.length +
            ' forhandlere og leasingselskaber</strong>, vi har samlet ' + antal + ' tilbud fra. Vi har talt, hvor mange af fem udgifter de skriver om i deres tilbud: service, dæk, forsikring, ejerafgift og vejhjælp. Det siger ikke noget om deres priser.',
          knapper: h.tilbudsknapHTML("", "Få tilbud gratis") + '<a href="/tilbudstjek/" class="knap knap--sekundaer">Få dit tilbud tjekket</a>',
          side: faktaboks("Kort fortalt", [
            delt("Oplyser mest", ud, function (u) { return u.pct; }, true, function (v) { return v + ' %'; },
              function (top) { var n = top.reduce(function (s, u) { return s + u.rader.length; }, 0); return 'ud fra ' + n + ' tilbud'; }),
            delt("Flest tilbud", ud, function (u) { return u.rader.length; }, true, function (v) { return String(v); }),
            billigst ? delt("Billigste tilbud", ud.filter(function (u) { return u.billigst != null; }), function (u) { return u.billigst; }, false,
              function (v) { return talDK(v) + ' kr./md.'; }, 'med udbetalingen fordelt') : null
          ])
        }),
        '<section class="sektion sektion--taet hubsektion" id="oversigt">',
        '<h2>Sammenlign forhandlere og leasingselskaber</h2>',
        '<p class="sektion__manchet">Vælg, hvad listen skal sorteres efter.</p>',
        skiftgraf("udbgraf", "Forhandlere og leasingselskaber sorteret efter", [
          { id: "oplyst", navn: "Oplyser", hoejBedst: true },
          { id: "antal", navn: "Antal tilbud", hoejBedst: true },
          { id: "pris", navn: "Laveste pris", hoejBedst: false }
        ], rader),
        '</section>',
        '<section class="sektion hubsektion" id="service">',
        '<h2>Hvem har service med i ydelsen?</h2>',
        '<p class="sektion__manchet">' + esc((function () {
          var mange = service.filter(function (x) { return x.med === x.n && x.n > 1; }).map(function (x) { return x.navn; });
          var et = service.filter(function (x) { return x.med === x.n && x.n === 1; }).map(function (x) { return x.navn; });
          return (mange.length ? ogEller(mange) + ' har service og reparation med i alle ' + (mange.length === 1 ? 'sine' : 'deres') + ' tilbud. ' : '') +
            (et.length ? 'Vi har kun ét tilbud fra ' + (et.length > 1 ? 'hver af ' : '') + ogEller(et) + ', og ' +
              (et.length === 1 ? 'det' : et.length === 2 ? 'begge' : 'alle') + ' har service med. ' : '') +
            (aldrig ? 'Hos ' + aldrig + ' af de ' + ud.length + ' står der ikke i noget tilbud, at service er med.' : '');
        })()) + '</p>',
        stablet('Service og reparation i tilbuddene', [["med", "Med i ydelsen"], ["ikke", "Ikke med"], ["uoplyst", "Står ikke i tilbuddet"]], service),
        '<p class="hublink"><a href="/bedste-tilbud/varebil-med-service-inkluderet/">Se alle tilbud med service</a></p>',
        '</section>',
        '<section class="sektion--kort">',
        '  <h2>Sådan er tallet regnet</h2>',
        '  <p>De fem udgifter er service og reparation, dæk, forsikring, grøn ejerafgift og vejhjælp. For hvert tilbud tæller vi, hvor mange af dem forhandleren eller leasingselskabet skriver noget om. Det tæller med, uanset om der står, at udgiften er med i ydelsen, eller at den ikke er. En udgift, tilbuddet slet ikke nævner, tæller som manglende.</p>',
        '  <p>Procenten gælder alle selskabets tilbud på siden under ét. Et selskab med få tilbud får derfor et mere tilfældigt tal end et selskab med mange. Tallet gælder kun de tilbud, vi har samlet, og ikke alt, hvad selskabet sender ud.</p>',
        '</section>',
        h.ctaBlok(),
        klip(gammel, '<div class="forbehold">', '</main>')
      ]
    });
  }

  // ── /udbydere/<navn>/ ──────────────────────────────────────────────────────

  function udbyder(u, data) {
    var gammel = h.udbyderSideHTML(u, Object.assign({}, data, { _gammel: true }));
    var top = gammel.slice(0, gammel.indexOf('<main'));
    var tabel = klip(gammel, '<div class="spec-oversigt-wrap">', '</section>');
    var faq = klip(gammel, '<section class="sektion--kort faq">', '</section>');
    var ikkeSiger = klip(gammel, '<section class="sektion--kort">\n  <h2>Hvad tallet ikke siger</h2>', '</section>');
    var forbehold = klip(gammel, '<div class="forbehold">', '</main>');
    var manchet = klip(gammel, '<p class="bil-hero__manchet">', '</p>').replace('<p class="bil-hero__manchet">', '');

    var rr = u.rader.slice().sort(function (a, b) {
      if (a.samlet == null) return 1;
      if (b.samlet == null) return -1;
      return a.samlet - b.samlet;
    });
    var modeller = unik(u.rader.map(function (r) { return r.bil.id; })).length;
    var billigste = rr[0] && rr[0].samlet != null ? rr[0] : null;
    var maks = Math.max.apply(null, rr.map(function (r) { return r.samlet || 0; }).concat([1])) * 1.02;
    function pct(v) { return (v / maks * 100).toFixed(1); }

    // Tilbuddene som søjler: månedsydelse plus udbetalingen fordelt (samme figur som hubben)
    var tilbud = rr.filter(function (r) { return r.samlet != null && r.t.maanedspris != null; }).map(function (r, i) {
      var fordelt = r.samlet - r.t.maanedspris;
      var inkl = (r.t.inkluderet || []).map(function (p) { return (h.POST_NAVNE[p] || p).toLowerCase(); });
      var vilk = ['Ydelse ' + kr(r.t.maanedspris), r.t.foerstegangsydelse ? 'udbetaling ' + kr(r.t.foerstegangsydelse) : 'ingen udbetaling',
        r.t.loebetid_mdr + ' mdr.', inkl.length ? ogEller(inkl) + ' med' : null].filter(Boolean).join(' · ');
      return '<li class="hubomsort__raekke"><span class="hubomsort__nr">' + (i + 1) + '</span>' +
        '<span class="hubomsort__navn"><a class="hubomsort__link" href="' + r.sti + '#tilbud">' + esc(r.navn) + '</a>' +
        '<span class="hubomsort__vilkaar">' + esc(vilk) + '</span></span>' +
        '<span class="hubomsort__spor" aria-hidden="true"><span class="hubomsort__ydelse" style="width:' + pct(r.t.maanedspris) + '%"></span>' +
        (fordelt > 0 ? '<span class="hubomsort__udb" style="width:' + pct(fordelt) + '%"></span>' : '') + '</span>' +
        '<span class="hubomsort__tal">' + kr(r.samlet) + '</span></li>';
    });

    // Hvad står der om de fem udgifter i tilbuddene?
    var poster = data.forudsaetninger.poster.map(function (p) {
      var med = 0, ikke = 0;
      u.rader.forEach(function (r) {
        if ((r.t.inkluderet || []).indexOf(p) >= 0) med++;
        else if ((r.t.ikke_inkluderet || []).indexOf(p) >= 0) ikke++;
      });
      return { navn: h.POST_NAVNE[p] || p, dele: { med: med, ikke: ikke, uoplyst: u.rader.length - med - ikke }, tal: '<strong>' + med + '</strong> med' };
    });

    // Samme model hos andre: det billigste tilbud her og det billigste andre steder
    var alle = h.alleTilbud(data);
    var par = unik(u.rader.map(function (r) { return r.navn; })).map(function (navnM) {
      var mine = u.rader.filter(function (r) { return r.navn === navnM && r.samlet != null; }).sort(function (a, b) { return a.samlet - b.samlet; })[0];
      var andet = alle.filter(function (r) { return r.navn === navnM && r.t.udbyder !== u.navn && r.samlet != null; }).sort(function (a, b) { return a.samlet - b.samlet; })[0];
      return mine && andet ? { mine: mine, andet: andet } : null;
    }).filter(Boolean);
    var parMaks = Math.max.apply(null, par.map(function (x) { return Math.max(x.mine.samlet, x.andet.samlet); }).concat([1]));
    var billigereHer = par.filter(function (x) { return x.mine.samlet < x.andet.samlet; }).length;
    var parHTML = par.length ? [
      '<section class="sektion hubsektion" id="andre">',
      '<h2>Samme bil hos andre</h2>',
      '<p class="sektion__manchet">' + esc((par.length === 1 ? 'Én af modellerne findes' : par.length + ' af modellerne findes') + ' også hos andre forhandlere eller leasingselskaber. ' +
        (billigereHer === par.length ? h.ejefald(u.navn) + ' tilbud er billigst på ' + (par.length === 1 ? 'den' : 'dem alle') + '.'
          : billigereHer === 0 ? 'Den er billigere et andet sted på ' + (par.length === 1 ? 'den' : 'dem alle') + '.'
          : h.ejefald(u.navn) + ' tilbud er billigst på ' + billigereHer + ' af dem.') +
        ' Vi sammenligner prisen pr. måned med udbetalingen fordelt.') + '</p>',
      '<figure class="prisgraf__figur">',
      '<ul class="prisgraf__forklaring"><li><span class="hubprik nyprik--fabrik"></span>' + esc(u.navn) + '</li>' +
        '<li><span class="hubprik nyprik--vilkaar"></span>Billigste andet sted</li></ul>',
      '<ul class="nypar">' + par.map(function (x) {
        var d = Math.round(x.mine.samlet - x.andet.samlet);
        return '<li class="nypar__raekke"><span class="nypar__navn"><a class="nypar__link" href="' + x.mine.sti + '#tilbud">' + esc(x.mine.navn) + '</a>' +
          '<span>' + (d === 0 ? 'Samme pris' : d < 0 ? kr(-d) + ' billigere her' : kr(d) + ' billigere hos ' + esc(x.andet.t.udbyder)) + '</span></span>' +
          '<span class="nypar__soejler" aria-hidden="true"><span class="nypar__soejle nyseg--fabrik" style="width:' + (x.mine.samlet / parMaks * 100).toFixed(1) + '%"></span>' +
          '<span class="nypar__soejle nyseg--vilkaar" style="width:' + (x.andet.samlet / parMaks * 100).toFixed(1) + '%"></span></span>' +
          '<span class="nypar__tal"><span>' + kr(x.mine.samlet) + '</span><span>' + kr(x.andet.samlet) + '</span></span></li>';
      }).join('') + '</ul>',
      '</figure>',
      '</section>'
    ].join("\n") : '';

    return side({
      top: top,
      krumme: [["Forsiden", "/"], ["Udbydere", "/udbydere/"], [u.navn, null]],
      indhold: [
        hero({
          maerkat: "Uafhængig gennemgang", dato: 'Opdateret ' + h.visDato(data.sidst_opdateret),
          h1: u.navn + " leasing af varebiler",
          manchet: manchet,
          knapper: h.tilbudsknapHTML("", "Få tilbud gratis") + '<a href="/udbydere/" class="knap knap--sekundaer">Sammenlign alle udbydere</a>',
          side: faktaboks("Kort fortalt", [
            ["Tilbud", u.rader.length + ' på ' + modeller + (modeller === 1 ? ' model' : ' modeller'), null],
            billigste ? ["Billigste tilbud", talDK(billigste.samlet) + ' kr./md.', billigste.navn + ', med udbetalingen fordelt', billigste.sti] : null,
            ["Oplyser", u.pct + ' %', 'af de fem udgifter i tilbuddene', '/udbydere/'],
            u.loebetider.length ? ["Løbetid", ogEller(u.loebetider.map(String)) + ' måneder', null] : null
          ])
        }),
        tilbud.length ? [
          '<section class="sektion sektion--taet hubsektion" id="tilbud">',
          '<h2>' + (u.rader.length === 1 ? 'Tilbuddet' : 'Alle ' + u.rader.length + ' tilbud') + ' fra ' + esc(u.navn) + '</h2>',
          '<p class="sektion__manchet">Vi har fordelt udbetalingen over løbetiden og lagt den oven i månedsydelsen.</p>',
          '<figure class="prisgraf__figur">',
          '<figcaption class="prisgraf__titel">Pris pr. måned med udbetalingen fordelt</figcaption>',
          '<ul class="prisgraf__forklaring"><li><span class="hubprik hubprik--ydelse"></span>Månedsydelse</li>' +
            '<li><span class="hubprik hubprik--udb"></span>Udbetaling fordelt over løbetiden</li></ul>',
          '<ol class="hubomsort__liste">' + tilbud.join('') + '</ol>',
          '</figure>',
          '</section>'
        ].join("\n") : '',
        '<section class="sektion hubsektion" id="ydelsen">',
        '<h2>Hvad er med i ydelsen?</h2>',
        stablet('De fem udgifter i ' + (u.rader.length === 1 ? 'tilbuddet' : 'de ' + u.rader.length + ' tilbud'),
          [["med", "Med i ydelsen"], ["ikke", "Ikke med"], ["uoplyst", "Står ikke i tilbuddet"]], poster),
        '</section>',
        parHTML,
        faq ? faq + '</section>' : '',
        tabel ? tabelFoldet('Se alle tilbud i en tabel med kilder', tabel, 'tabel') : '',
        ikkeSiger ? ikkeSiger + '</section>' : '',
        h.ctaBlok(),
        forbehold
      ]
    });
  }

  // ── /varebiler/ (mål, vægt og afgift) ──────────────────────────────────────
  //
  // Siden er tabellen, så tabellen bliver stående. Over den står en figur med de ti
  // bedste på hvert mål, så de oftest stillede spørgsmål kan besvares uden at sortere.

  function oversigt(data) {
    var gammel = h.oversigtHTML(Object.assign({}, data, { _gammel: true }));
    var top = gammel.slice(0, gammel.indexOf('<main'));
    var resten = klip(gammel, '<div class="spec-oversigt-wrap">', '</main>');
    var maerker = klip(gammel, '<p class="maerkelinks"', '</p>') + '</p>';
    var biler = data.varebiler;
    var antalTilbud = biler.reduce(function (s, b) { return s + b.tilbud.length; }, 0);
    var TOP = 10;
    var rader = biler.map(function (b) {
      var lr = b.lastrum || {}, u = b.udvendig || {}, pris = h.billigsteSamlet(b, data);
      var fra = pris ? 'Leasing fra ' + talDK(pris.samlet) + ' kr./md.' : '';
      return {
        navn: b.maerke + ' ' + b.model, sti: h.modelSti(b),
        d: {
          m3: lr.volumen_m3 != null ? { v: lr.volumen_m3, vis: kommaTal(lr.volumen_m3) + ' m³', under: fra } : null,
          kg: b.nyttelast_kg != null ? { v: b.nyttelast_kg, vis: h.nyttelastTekst(b), under: fra } : null,
          laengde: lr.laengde_mm != null ? { v: lr.laengde_mm, vis: talDK(lr.laengde_mm) + ' mm', under: lr.volumen_m3 != null ? kommaTal(lr.volumen_m3) + ' m³ lastrum' : fra } : null,
          traek: b.anhaengervaegt_kg != null ? { v: b.anhaengervaegt_kg, vis: talDK(b.anhaengervaegt_kg) + ' kg', under: fra } : null,
          hoejde: u.hoejde_mm != null ? { v: u.hoejde_mm, vis: talDK(u.hoejde_mm) + ' mm', under: lr.volumen_m3 != null ? kommaTal(lr.volumen_m3) + ' m³ lastrum' : fra } : null
        }
      };
    });
    // Kun de ti bedste på hvert mål står i figuren.
    var maal = [
      { id: "m3", navn: "Lastrum", hoejBedst: true }, { id: "kg", navn: "Nyttelast", hoejBedst: true },
      { id: "laengde", navn: "Lastrumslængde", hoejBedst: true }, { id: "traek", navn: "Trækvægt", hoejBedst: true },
      { id: "hoejde", navn: "Lavest højde", hoejBedst: false }
    ];
    maal.forEach(function (m) {
      rader.filter(function (r) { return r.d[m.id]; }).sort(function (a, b) {
        return (m.hoejBedst ? b.d[m.id].v - a.d[m.id].v : a.d[m.id].v - b.d[m.id].v) || a.navn.localeCompare(b.navn, "da");
      }).slice(TOP).forEach(function (r) { delete r.d[m.id]; });
    });
    rader = rader.filter(function (r) { return maal.some(function (m) { return r.d[m.id]; }); });
    // Den bedste på et mål til faktaboksen. Deler flere førstepladsen, står antallet.
    function bedst(id, hoej, etiket, efter) {
      var l = rader.filter(function (r) { return r.d[id]; });
      if (!l.length) return null;
      var v = l.map(function (r) { return r.d[id].v; }).reduce(function (m, x) { return hoej ? Math.max(m, x) : Math.min(m, x); });
      var top = l.filter(function (r) { return r.d[id].v === v; });
      return top.length === 1
        ? [etiket, top[0].navn, top[0].d[id].vis + (efter || ''), top[0].sti]
        : [etiket, top.length + ' modeller', top[0].d[id].vis + (efter || '') + ' hver', '#top'];
    }

    return side({
      top: top,
      mainKlasse: "oversigt nyside",
      krumme: [["Forsiden", "/"], ["Varebiler", null]],
      script: skiftScript() + h.oversigtScript(),
      indhold: [
        hero({
          maerkat: "Producenternes egne tal", dato: 'Opdateret ' + h.visDato(data.sidst_opdateret),
          h1: "Alle mål, vægt og afgift i én tabel",
          manchet: 'Lastrumsmål, nyttelast og bilens udvendige højde afgør, om varebilen kan bruges til arbejdet, og de tal står sjældent i en leasingannonce. Her har vi samlet dem for <strong>' +
            biler.length + ' modeller</strong> med kilde. Øverst står de ti bedste på hvert mål, og nederst står alle tallene i en tabel, du kan sortere.',
          knapper: '<a href="#specTabel" class="knap knap--primaer">Gå til tabellen</a><a href="/#varebiler" class="knap knap--sekundaer">Sammenlign ' + antalTilbud + ' tilbud</a>',
          side: faktaboks("Kort fortalt", [
            bedst("m3", true, "Største lastrum"),
            bedst("kg", true, "Højeste nyttelast"),
            bedst("hoejde", false, "Laveste bil", ' høj')
          ])
        }),
        maerker,
        '<section class="sektion sektion--taet hubsektion" id="top">',
        '<h2>De ti bedste på hvert mål</h2>',
        '<p class="sektion__manchet">Vælg et mål. Lavest højde viser de biler, der har bedst chance for at komme ned i en parkeringskælder.</p>',
        skiftgraf("varegraf", "Top 10 efter", maal, rader),
        '</section>',
        '<section class="sektion hubsektion" id="alle"><h2>Alle ' + biler.length + ' modeller</h2>',
        '<p class="sektion__manchet">Klik på en kolonne for at sortere.</p>',
        resten.replace(/\n<section class="sektion--kort">/, '\n</section>\n<section class="sektion--kort">')
      ]
    });
  }

  return { elIndex: elIndex, garantiIndex: garantiIndex, udstyrIndex: udstyrIndex, udstyrPost: udstyrPost, udbydereIndex: udbydereIndex, udbyder: udbyder, oversigt: oversigt };
};
