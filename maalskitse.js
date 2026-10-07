// Målskitse til modelsiden i stil med producenternes måltegninger.
//
// Hver model tegnes ud fra sin egen profil (bil.profil i varebiler.json):
// punkter i mm, målt fra bilens front og op fra jorden, aflæst af producentens
// egen målsatte tegning (kilden står i profil.kilde). Profilen beskriver
// formen: omrids, rude, dørlinjer, lygter, kofangere og lister. Vi tegner selv
// i vores stil; vi bruger producentens tal og proportioner, ikke deres streger.
//
// Modeller uden profil får ingen skitse. Mål på stregerne kommer fra bilens
// data og fra profilens overhæng (begge fra producenten); et mål, der ikke er
// oplyst, får ingen streg.
//
// Kaldes fra generate-pages.js: maalskitse(bil, talDK, esc) -> HTML eller "".

module.exports = function maalskitse(bil, talDK, esc) {
  var pr = bil.profil, u = bil.udvendig || {}, lr = bil.lastrum || {};
  var L = u.laengde_mm, H = u.hoejde_mm;
  if (!pr || !L || !H || !pr.omrids) return "";

  // En profil kan vaere maalt paa en anden variant end den, siden viser (fx den
  // korte udgave). Saa strakkes den: alt bag profil.straek_fra_mm flyttes med
  // forskellen i laengde, og hoejden skaleres til producentens tal for varianten.
  if (pr.laengde_mm || pr.hoejde_mm) {
    var dL = pr.laengde_mm ? L - pr.laengde_mm : 0, sf = pr.straek_fra_mm;
    var kH = pr.hoejde_mm ? H / pr.hoejde_mm : 1;
    var tp = function (q) { var n = [q[0] + (sf != null && q[0] >= sf ? dL : 0), Math.round(q[1] * kH)]; if (q[2]) n.push(q[2]); return n; };
    var tl = function (a) { return a.map(tp); };
    var tf = function (f) { return Array.isArray(f) ? tl(f) : Object.assign({}, f, { p: tl(f.p) }); };
    var ff0 = pr.forfra;
    pr = Object.assign({}, pr, {
      omrids: tl(pr.omrids),
      lister: (pr.lister || []).map(tf), ruder: (pr.ruder || []).map(tf),
      lygte: pr.lygte && tf(pr.lygte), baglygte: pr.baglygte && tf(pr.baglygte), spejl: pr.spejl && tf(pr.spejl),
      lygtedetaljer: (pr.lygtedetaljer || []).map(tl), linjer: (pr.linjer || []).map(tl),
      greb: (pr.greb || []).map(tp)
    });
    if (ff0) {
      // Forfra skaleres kun i hoejden; bredden er den samme for alle laengder.
      var ty = function (q) { var n = [q[0], Math.round(q[1] * kH)]; if (q[2]) n.push(q[2]); return n; };
      var tyl = function (a) { return a.map(ty); };
      pr.forfra = Object.assign({}, ff0, {
        omrids_halv: tyl(ff0.omrids_halv), rude_halv: ff0.rude_halv && tyl(ff0.rude_halv),
        grill_halv: ff0.grill_halv && tyl(ff0.grill_halv),
        lister_halv: (ff0.lister_halv || []).map(function (l) { return Object.assign({}, l, { p: tyl(l.p) }); }),
        lygte: ff0.lygte && tyl(ff0.lygte), taagelygte: ff0.taagelygte && tyl(ff0.taagelygte), spejl: ff0.spejl && tyl(ff0.spejl)
      });
    }
  }

  var fo = pr.for_overhaeng_mm, ro = pr.bag_overhaeng_mm;
  var wb = u.akselafstand_mm || (L - fo - ro);
  var xfF = fo, xrF = fo + wb;                    // hjulcentre, mm fra fronten
  var r = pr.daek_radius_mm, R = pr.hjulkasse_r_mm || r + 70, bund = pr.bund_mm || 230;
  var gulv = lr.laesserhoejde_mm || null;

  // Samme skala for alle biler; fronten til hoejre som i producenternes tegninger.
  var s = Math.min(0.085, 560 / L, 250 / H);
  var OX = 130, GY = 300;
  var X = function (xF) { return Math.round((OX + (L - xF) * s) * 10) / 10; };
  var Y = function (y) { return Math.round((GY - y * s) * 10) / 10; };
  var P = function (p) { return X(p[0]) + " " + Y(p[1]); };
  var poly = function (pts) { return "M" + pts.map(P).join(" L") + " Z"; };
  var glat = function (pts, lukket) {
    var q = pts.map(function (p) { return { x: X(p[0]), y: Y(p[1]), k: p[2] === "k" }; });
    var n = q.length, f = function (v) { return Math.round(v * 10) / 10; };
    var hent = function (i) { return lukket ? q[(i + n) % n] : q[Math.max(0, Math.min(n - 1, i))]; };
    var d = "M" + f(q[0].x) + " " + f(q[0].y);
    var stop = lukket ? n : n - 1;
    for (var i = 0; i < stop; i++) {
      var p0 = hent(i - 1), p1 = hent(i), p2 = hent(i + 1), p3 = hent(i + 2);
      if (p1.k) p0 = p1;
      if (p2.k) p3 = p2;
      // Tangenterne begraenses til en tredjedel af stykket, saa kurven aldrig
      // skyder ud over punkterne ved korte stykker ved siden af lange.
      var seg = Math.hypot(p2.x - p1.x, p2.y - p1.y) / 3;
      var klem = function (dx, dy) { var l = Math.hypot(dx, dy); return l > seg && l > 0 ? [dx * seg / l, dy * seg / l] : [dx, dy]; };
      var t1 = klem((p2.x - p0.x) / 6, (p2.y - p0.y) / 6), t2 = klem((p3.x - p1.x) / 6, (p3.y - p1.y) / 6);
      d += " C" + f(p1.x + t1[0]) + " " + f(p1.y + t1[1]) + " " +
        f(p2.x - t2[0]) + " " + f(p2.y - t2[1]) + " " + f(p2.x) + " " + f(p2.y);
    }
    return d + (lukket ? " Z" : "");
  };

  var ud = [];
  var sti = function (kl, d, klip) {
    ud.push('<path class="' + kl + '" d="' + d + '"' + (klip ? ' clip-path="url(#ms-klip-' + bil.id + ')"' : '') + '/>');
  };

  // Karrosseriet: omrids fra profilen + bund med hjulkasser.
  var dy = Math.sqrt(Math.max(R * R - (bund - r) * (bund - r), 1));
  var Rs = (R * s).toFixed(1);
  var bue = function (xc) {        // fra bagsiden af hjulet mod fronten, over hjulet
    return " L" + P([xc + dy, bund]) + " A" + Rs + " " + Rs + " 0 1 1 " + P([xc - dy, bund]);
  };
  var krop = glat(pr.omrids, false) +
    bue(xrF) + bue(xfF) + " L" + P([pr.omrids[0][0], bund]) + " Z";
  ud.push('<clipPath id="ms-klip-' + bil.id + '"><path d="' + krop + '"/></clipPath>');
  sti("ms-krop", krop);

  // Flader inde i karrosseriet (klippes til omridset).
  var flade = function (f) { return f.glat ? glat(f.p, true) : poly(f.p || f); };
  (pr.lister || []).forEach(function (f) { sti(f.kl || "ms-plast", flade(f), true); });
  (pr.ruder || []).forEach(function (f) { sti("ms-rude", flade(f), true); });
  if (pr.lygte) sti("ms-lygte", flade(pr.lygte), true);
  (pr.lygtedetaljer || []).forEach(function (l) { sti("ms-lygtestreg", glat(l, false)); });
  if (pr.baglygte) sti("ms-lygte ms-lygte--bag", flade(pr.baglygte), true);
  (pr.linjer || []).forEach(function (l) { sti("ms-linje", l.length > 2 ? glat(l, false) : "M" + l.map(P).join(" L")); });
  (pr.greb || []).forEach(function (g) { sti("ms-greb", "M" + P([g[0], g[1]]) + " L" + P([g[0] + 170, g[1]])); });
  if (pr.spejl) sti("ms-plast", flade(pr.spejl));
  // Omridset tegnes igen oven paa fladerne, saa kanten er ren.
  sti("ms-kant", krop);

  // Hjul
  [xrF, xfF].forEach(function (x) {
    ud.push('<circle class="ms-daek" cx="' + X(x) + '" cy="' + Y(r) + '" r="' + (r * s).toFixed(1) + '"/>');
    ud.push('<circle class="ms-faelg" cx="' + X(x) + '" cy="' + Y(r) + '" r="' + (r * s * 0.62).toFixed(1) + '"/>');
    var eger = pr.eger || 6;
    for (var k = 0; k < eger; k++) {
      var v = k * 360 / eger - 90, rad = v * Math.PI / 180, rr = r * s * 0.38;
      var ex = X(x) + Math.cos(rad) * rr, ey = Y(r) + Math.sin(rad) * rr;
      ud.push('<ellipse class="ms-egerhul" cx="' + ex.toFixed(1) + '" cy="' + ey.toFixed(1) + '" rx="' + (r * s * 0.13).toFixed(1) +
        '" ry="' + (r * s * 0.075).toFixed(1) + '" transform="rotate(' + (v + 90) + ' ' + ex.toFixed(1) + ' ' + ey.toFixed(1) + ')"/>');
    }
    ud.push('<circle class="ms-faelgring" cx="' + X(x) + '" cy="' + Y(r) + '" r="' + (r * s * 0.6).toFixed(1) + '"/>');
    ud.push('<circle class="ms-nav" cx="' + X(x) + '" cy="' + Y(r) + '" r="' + (r * s * 0.12).toFixed(1) + '"/>');
  });
  ud.push('<ellipse class="ms-skygge" cx="' + ((X(0) + X(L)) / 2) + '" cy="' + GY + '" rx="' + ((X(0) - X(L)) / 2 + 6) + '" ry="3"/>');

  // ---- Maal ----
  var mm = function (v) { return talDK(Math.round(v)); };
  var TIK = 4;
  var linje = function (kl, x1, y1, x2, y2) {
    ud.push('<line class="' + kl + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>');
  };
  var tik = function (x, y) { linje("ms-maal", x - TIK, y + TIK, x + TIK, y - TIK); };
  var vandret = function (x1, x2, y, t) {
    linje("ms-maal", x1, y, x2, y); tik(x1, y); tik(x2, y);
    ud.push('<text class="ms-tal" x="' + ((x1 + x2) / 2) + '" y="' + (y - 4) + '" text-anchor="middle">' + t + '</text>');
  };
  var lodret = function (x, y1, y2, t) {
    linje("ms-maal", x, y1, x, y2); tik(x, y1); tik(x, y2);
    var ym = (y1 + y2) / 2;
    ud.push('<text class="ms-tal" x="' + (x - 5) + '" y="' + ym + '" text-anchor="middle" transform="rotate(-90 ' + (x - 5) + ' ' + ym + ')">' + t + '</text>');
  };
  var xBag = X(L), xFor = X(0);
  [xBag, X(xrF), X(xfF), xFor].forEach(function (x, i) {
    linje("ms-hjaelp", x, (i === 1 || i === 2) ? Y(r) : GY + 2, x, GY + 34);
  });
  linje("ms-hjaelp", xBag, GY + 34, xBag, GY + 60); linje("ms-hjaelp", xFor, GY + 34, xFor, GY + 60);
  if (u.akselafstand_mm) {
    vandret(xBag, X(xrF), GY + 28, mm(ro));
    vandret(X(xrF), X(xfF), GY + 28, mm(wb));
    vandret(X(xfF), xFor, GY + 28, mm(fo));
  }
  vandret(xBag, xFor, GY + 56, mm(L));
  linje("ms-hjaelp", xBag - 44, Y(H), xBag + 20, Y(H));
  lodret(xBag - 40, Y(H), GY, mm(H));
  if (gulv) { linje("ms-hjaelp", xBag - 16, Y(gulv), xBag, Y(gulv)); lodret(xBag - 12, Y(gulv), GY, mm(gulv)); }

  var titel = esc("Målskitse af " + bil.maerke + " " + bil.model);
  var defs = '<defs>' +
    '<linearGradient id="ms-lak" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".62" stop-color="#fbfbfc"/><stop offset="1" stop-color="#e3e6ea"/></linearGradient>' +
    '<linearGradient id="ms-glas" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a4049"/><stop offset=".48" stop-color="#5d6570"/><stop offset=".5" stop-color="#8a929c"/><stop offset=".6" stop-color="#6a727d"/><stop offset="1" stop-color="#8f98a3"/></linearGradient>' +
    '<radialGradient id="ms-faelgfarve" cx=".45" cy=".4" r=".75"><stop offset="0" stop-color="#f2f4f6"/><stop offset="1" stop-color="#a3aab4"/></radialGradient>' +
    '</defs>';
  var venstre = OX - 60, bredde = Math.ceil(xFor + 20 - venstre);
  var top = Math.floor(Y(H) - 14), hoejde = Math.ceil(GY + 66 - top);
  var side = '<svg class="maalskitse__side" viewBox="' + venstre + ' ' + top + ' ' + bredde + ' ' + hoejde + '" width="' + Math.round(bredde * 1.2) + '" height="' + Math.round(hoejde * 1.2) +
    '" role="img" aria-label="' + titel + ', set fra siden" xmlns="http://www.w3.org/2000/svg"><title>' + titel + ', set fra siden</title>' +
    defs + ud.join("") + '</svg>';

  // ---------- Forfra ----------
  // Profilen beskriver hoejre halvdel (x fra midten, mm); tegningen spejles.
  var ff = pr.forfra, foran = "";
  if (ff && ff.omrids_halv) {
    var B = u.bredde_mm, Bs = u.bredde_med_spejle_mm;
    var CX = 0;
    var FX = function (x) { return Math.round((CX + x * s) * 10) / 10; };
    var FP = function (q) { return FX(q[0]) + " " + Y(q[1]); };
    var spejlet = function (halv) {      // halv: fra midten oeverst rundt til midten nederst
      var hoejre = halv.map(function (q) { return [q[0], q[1]]; });
      var venstreDel = halv.slice().reverse().map(function (q) { return [-q[0], q[1]]; });
      return "M" + hoejre.concat(venstreDel).map(FP).join(" L") + " Z";
    };
    var begge = function (pts) {          // en flade paa hoejre side og dens spejlbillede
      return ["M" + pts.map(FP).join(" L") + " Z", "M" + pts.map(function (q) { return FP([-q[0], q[1]]); }).join(" L") + " Z"];
    };
    var f = [];
    var fsti = function (kl, d, klip) { f.push('<path class="' + kl + '" d="' + d + '"' + (klip ? ' clip-path="url(#ms-klip-for-' + bil.id + ')"' : '') + '/>'); };
    // Daek bag karrosseriet
    if (ff.daek) begge([[ff.daek[0], ff.daek[2]], [ff.daek[1], ff.daek[2]], [ff.daek[1], ff.daek[3]], [ff.daek[0], ff.daek[3]]])
      .forEach(function (d) { fsti("ms-daek", d); });
    var kropF = spejlet(ff.omrids_halv);
    f.push('<clipPath id="ms-klip-for-' + bil.id + '"><path d="' + kropF + '"/></clipPath>');
    fsti("ms-krop", kropF);
    (ff.lister_halv || []).forEach(function (l) { fsti(l.kl || "ms-plast", spejlet(l.p), true); });
    if (ff.rude_halv) fsti("ms-rude", spejlet(ff.rude_halv), true);
    if (ff.grill_halv) fsti("ms-plast", spejlet(ff.grill_halv), true);
    (ff.grillstreger || []).forEach(function (l) {
      [1, -1].forEach(function (v) { fsti("ms-kromstreg", "M" + FP([l[0][0] * v, l[0][1]]) + " L" + FP([l[1][0] * v, l[1][1]])); });
    });
    (ff.flader || []).forEach(function (fl0) { begge(fl0.p).forEach(function (d) { fsti(fl0.kl || "ms-plast", d, true); }); });
    (ff.linjer || []).forEach(function (l) {
      [1, -1].forEach(function (v) { fsti("ms-linje", "M" + l.map(function (q) { return FP([q[0] * v, q[1]]); }).join(" L")); });
    });
    (ff.lygte ? begge(ff.lygte) : []).forEach(function (d) { fsti("ms-lygte", d, true); });
    (ff.taagelygte ? begge(ff.taagelygte) : []).forEach(function (d) { fsti("ms-plast--lys", d, true); });
    if (ff.plade) fsti("ms-plade", "M" + FP([-ff.plade[0], ff.plade[2]]) + " L" + FP([ff.plade[0], ff.plade[2]]) + " L" + FP([ff.plade[0], ff.plade[1]]) + " L" + FP([-ff.plade[0], ff.plade[1]]) + " Z");
    if (ff.logo) {
      var ly = ff.logo[0], lr2 = ff.logo[1] / 2, lt = ff.logo[2] || "ruder";
      if (lt === "ruder") {
        fsti("ms-krom", "M" + FP([0, ly + lr2]) + " L" + FP([lr2 * 0.75, ly]) + " L" + FP([0, ly - lr2]) + " L" + FP([-lr2 * 0.75, ly]) + " Z");
      } else {
        f.push('<circle class="ms-krom" cx="' + FX(0) + '" cy="' + Y(ly) + '" r="' + (lr2 * s).toFixed(1) + '"/>');
        if (lt === "stjerne") {
          [90, 210, 330].forEach(function (v) {
            var rad = v * Math.PI / 180;
            fsti("ms-logostreg", "M" + FX(0) + " " + Y(ly) + " L" + FX(Math.cos(rad) * lr2 * 0.85) + " " + Y(ly + Math.sin(rad) * lr2 * 0.85));
          });
        } else if (lt === "vinkel") {
          [0.28, -0.12].forEach(function (dy0) {
            fsti("ms-logostreg", "M" + FP([-lr2 * 0.55, ly + lr2 * dy0 - lr2 * 0.2]) + " L" + FP([0, ly + lr2 * dy0 + lr2 * 0.05]) + " L" + FP([lr2 * 0.55, ly + lr2 * dy0 - lr2 * 0.2]));
          });
        }
      }
    }
    (ff.spejl ? begge(ff.spejl) : []).forEach(function (d) { fsti("ms-plast", d); });
    fsti("ms-kant", kropF);
    f.push('<ellipse class="ms-skygge" cx="' + FX(0) + '" cy="' + GY + '" rx="' + ((B || 1900) * s / 2 + 6) + '" ry="3"/>');

    // Maal: bredde og bredde med spejle
    var fl = function (kl, x1, y1, x2, y2) { f.push('<line class="' + kl + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>'); };
    var fv = function (x1, x2, y, t) {
      fl("ms-maal", x1, y, x2, y); fl("ms-maal", x1 - 4, y + 4, x1 + 4, y - 4); fl("ms-maal", x2 - 4, y + 4, x2 + 4, y - 4);
      f.push('<text class="ms-tal" x="' + ((x1 + x2) / 2) + '" y="' + (y - 4) + '" text-anchor="middle">' + t + '</text>');
    };
    if (B) { fl("ms-hjaelp", FX(-B / 2), Y(600), FX(-B / 2), GY + 34); fl("ms-hjaelp", FX(B / 2), Y(600), FX(B / 2), GY + 34); fv(FX(-B / 2), FX(B / 2), GY + 28, mm(B)); }
    if (Bs) { fl("ms-hjaelp", FX(-Bs / 2), Y(1300), FX(-Bs / 2), GY + 62); fl("ms-hjaelp", FX(Bs / 2), Y(1300), FX(Bs / 2), GY + 62); fv(FX(-Bs / 2), FX(Bs / 2), GY + 56, mm(Bs)); }

    var halvB = ((Bs || B || 2000) / 2) * s + 16;
    var fv0 = Math.floor(FX(0) - halvB), fbr = Math.ceil(halvB * 2);
    foran = '<svg class="maalskitse__for" viewBox="' + fv0 + ' ' + top + ' ' + fbr + ' ' + hoejde + '" width="' + Math.round(fbr * 1.2) + '" height="' + Math.round(hoejde * 1.2) +
      '" role="img" aria-label="' + titel + ', set forfra" xmlns="http://www.w3.org/2000/svg"><title>' + titel + ', set forfra</title>' + f.join("") + '</svg>';
  }

  return '<figure class="maalskitse"><div class="maalskitse__visninger">' + side + foran + '</div>' +
    '<figcaption>Mål i mm for ' + esc(bil.variant_for_maal || "den viste variant") +
    '. Tegnet af Gulplade.dk efter producentens måltegning; målene er producentens.</figcaption></figure>';
};
