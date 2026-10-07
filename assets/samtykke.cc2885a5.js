// Samtykke til statistik (Google Analytics 4) på gulplade.dk.
//
// Google Analytics sætter cookies og må derfor først indlæses, når den
// besøgende har sagt ja. Indtil da hentes intet fra Google. Valget gemmes i
// localStorage (ikke en cookie) under "gulplade-samtykke" = "ja" | "nej", og
// "Cookieindstillinger" i bundmenuen åbner banneret igen. Afvis og Acceptér
// er lige store og lige synlige.
(function () {
  var GA_ID = "G-2E2BJJGRLX";
  var NOEGLE = "gulplade-samtykke";

  function hent() { try { return localStorage.getItem(NOEGLE); } catch (e) { return null; } }
  function gem(v) { try { localStorage.setItem(NOEGLE, v); } catch (e) {} }

  var gaIndlaest = false;
  function indlaesGA() {
    if (gaIndlaest) return;
    gaIndlaest = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  // Trækkes samtykket tilbage, slettes Googles cookies på domænet, og siden
  // genindlæses, så scriptet ikke længere kører.
  function sletGACookies() {
    document.cookie.split(";").forEach(function (c) {
      var navn = c.split("=")[0].trim();
      if (/^_ga/.test(navn)) {
        ["", "." + location.hostname, location.hostname.replace(/^www\./, ".")].forEach(function (d) {
          document.cookie = navn + "=; Max-Age=0; path=/" + (d ? "; domain=" + d : "");
        });
      }
    });
  }

  var banner = null;
  function visBanner() {
    if (banner) { banner.hidden = false; return; }
    banner = document.createElement("div");
    banner.className = "samtykke";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", "Samtykke til statistik");
    banner.innerHTML =
      '<p class="samtykke__tekst">Må vi bruge Google Analytics til at se, hvordan siden bliver brugt? ' +
      'Det sætter cookies. Siger du nej, virker alt det samme. ' +
      '<a href="/privatliv/#statistik">Læs mere</a></p>' +
      '<div class="samtykke__knapper">' +
      '<button type="button" class="samtykke__knap" data-valg="nej">Afvis</button>' +
      '<button type="button" class="samtykke__knap" data-valg="ja">Acceptér</button>' +
      '</div>';
    banner.addEventListener("click", function (e) {
      var v = e.target && e.target.getAttribute("data-valg");
      if (!v) return;
      var foer = hent();
      gem(v);
      banner.hidden = true;
      if (v === "ja") indlaesGA();
      else if (foer === "ja") { sletGACookies(); location.reload(); }
    });
    document.body.appendChild(banner);
  }

  function indstillingslink() {
    var ul = document.querySelector(".bundmenu ul");
    var li = document.createElement(ul ? "li" : "p");
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = "Cookieindstillinger";
    a.addEventListener("click", function (e) { e.preventDefault(); visBanner(); });
    li.appendChild(a);
    if (ul) ul.appendChild(li);
    else { var f = document.querySelector(".site-footer__indhold, .site-footer, footer"); if (f) f.appendChild(li); }
  }

  // ── Mobilmenu ─────────────────────────────────────────────────────────
  // Filen er sidens eneste globale script, så menuen bor her også. Headeren
  // findes i seks kopier (fire generatorer + to håndskrevne sider); menuen
  // bygges derfor ud af den nav, der står der, i stedet for at røre dem alle.
  // På en telefon: logo, "Få tilbud" og en Menu-knap, der folder alt ud.
  // Mobilmenuen viser de samme punkter som computeren (brugerens ønske 02-10-2026).
  var EKSTRA = [];
  function mobilmenu() {
    var h = document.querySelector(".site-header");
    var nav = h && h.querySelector("nav");
    if (!nav || h.querySelector(".menuknap")) return;
    nav.id = nav.id || "hovedmenu";
    var har = {};
    [].forEach.call(nav.querySelectorAll("a"), function (a) { har[a.getAttribute("href")] = 1; });
    EKSTRA.forEach(function (x) {
      if (har[x[0]]) return;
      var a = document.createElement("a");
      a.href = x[0]; a.textContent = x[1]; a.className = "nav-ekstra";
      nav.appendChild(a);
    });
    var cta = nav.querySelector(".nav-cta");
    if (cta) { var kopi = cta.cloneNode(true); kopi.className = "nav-cta nav-cta--mobil"; h.insertBefore(kopi, nav); }
    var knap = document.createElement("button");
    knap.type = "button"; knap.className = "menuknap";
    knap.setAttribute("aria-expanded", "false"); knap.setAttribute("aria-controls", nav.id);
    knap.innerHTML = '<span class="menuknap__streger" aria-hidden="true"></span><span>Menu</span>';
    h.insertBefore(knap, nav);
    function saet(aaben) { h.classList.toggle("menu-aaben", aaben); knap.setAttribute("aria-expanded", aaben ? "true" : "false"); }
    knap.addEventListener("click", function () { saet(!h.classList.contains("menu-aaben")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) saet(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") saet(false); });
  }

  // ── Henvendelsesformularen (popup) ─────────────────────────────────────────
  // Alle knapper med data-lead åbner den. Uden JavaScript følger knappen sit
  // href (/faa-tilbud/), så der aldrig står en knap, der ikke virker.
  // Sendes via Web3Forms til ejerens indbakke; intet gemmes på gulplade.dk.
  var W3F_NOEGLE = "60a372fb-3acd-4b06-872c-d9910057f1de";
  var dlg, aktuel = {};
  function e(t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function byg() {
    dlg = document.createElement("dialog");
    dlg.className = "lead-dialog";
    dlg.setAttribute("aria-labelledby", "lead-titel");
    dlg.innerHTML =
      '<form class="lead-dialog__form" novalidate>' +
      '<div class="lead-dialog__hoved"><h2 id="lead-titel"></h2>' +
      '<button type="button" class="lead-dialog__luk" aria-label="Luk">×</button></div>' +
      '<p class="lead-dialog__bil"></p><p class="lead-dialog__intro"></p>' +
      '<input type="checkbox" name="botcheck" hidden tabindex="-1" autocomplete="off">' +
      '<div class="lead-dialog__felter">' +
      '<label>Navn *<input name="navn" autocomplete="name" maxlength="100" required></label>' +
      '<label>Telefon *<input type="tel" name="telefon" autocomplete="tel" maxlength="30" required></label>' +
      '<label>E-mail *<input type="email" name="email" autocomplete="email" maxlength="254" required></label>' +
      '<label>Firma eller CVR<input name="firma" autocomplete="organization" maxlength="120"></label>' +
      '<label class="lead-dialog__bred lead-dialog__valg"></label>' +
      '<label class="lead-dialog__bred lead-dialog__levering">Hvornår skal du bruge bilen?<select name="levering"><option value="">Vælg</option><option>Hurtigst muligt</option><option>Inden for 3 måneder</option><option>Om 3–6 måneder</option><option>Senere</option><option>Ved ikke endnu</option></select></label>' +
      '<label class="lead-dialog__bred lead-dialog__tid">Hvornår må vi ringe?<select name="tidspunkt"><option value="">Når det passer jer</option><option>Hurtigst muligt</option><option>Formiddag</option><option>Eftermiddag</option></select></label>' +
      '<label class="lead-dialog__bred"><span class="lead-dialog__beskedlabel">Besked (valgfrit)</span><textarea name="besked" maxlength="2000" rows="3"></textarea></label>' +
      '<p class="lead-dialog__bred lead-dialog__lille">Send ikke CPR-nummer, kreditoplysninger eller dokumenter her.</p>' +
      '<label class="lead-dialog__bred lead-dialog__samtykke"><input type="checkbox" name="samtykke" required>' +
      '<span>Jeg beder Gulplade.dk kontakte mig om bilen og ved, at henvendelsen kan blive sendt videre til en forhandler eller et leasingselskab, som kan betale Gulplade.dk for den. ' +
      '<a href="/privatliv/" target="_blank" rel="noopener">Sådan bruges oplysningerne</a>.</span></label>' +
      '</div>' +
      '<p class="lead-dialog__note">Gratis for dig. Vi svarer inden for 24 timer.</p>' +
      '<button type="submit" class="knap knap--primaer lead-dialog__send"></button>' +
      '<p class="lead-dialog__status" role="status"></p>' +
      '</form>';
    document.body.appendChild(dlg);
    dlg.querySelector(".lead-dialog__luk").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (ev) { if (ev.target === dlg) dlg.close(); });
    dlg.querySelector("form").addEventListener("submit", send);
  }
  function aabn(knap) {
    if (!dlg) byg();
    var type = knap.getAttribute("data-lead") || "ny";
    var brugt = type === "brugt", soeg = type === "soeg", koeb = type === "koeb";
    aktuel = { bil: knap.getAttribute("data-bil-navn") || knap.getAttribute("data-bil") || "", pris: knap.getAttribute("data-pris") || "",
               ref: knap.getAttribute("data-ref") || "", brugt: brugt, soeg: soeg, type: type,
               partner: knap.getAttribute("data-partner-navn") || "", udstyr: knap.getAttribute("data-udstyr") || "" };
    var f = dlg.querySelector("form");
    f.reset(); f.hidden = false;
    f.querySelectorAll("input, textarea, select, button").forEach(function (x) { x.disabled = false; });
    dlg.querySelector("#lead-titel").textContent = soeg ? "Vi finder bilen til dig" : brugt ? "Hør nærmere om bilen" : koeb ? "Få tilbud på en ny varebil" : "Få et tilbud på bilen";
    dlg.querySelector(".lead-dialog__bil").textContent = aktuel.bil ? aktuel.bil + (aktuel.pris ? " · " + aktuel.pris : "") : "";
    dlg.querySelector(".lead-dialog__intro").textContent = soeg
      ? "Fortæl os, hvad bilen skal kunne, og hvad den må koste. Vi leder på lageret og hos forhandlerne og vender tilbage med biler, der passer — også nye biler på leasing, hvis det er billigere."
      : brugt
      ? "Vi tjekker, at bilen stadig er til salg, svarer på dine spørgsmål og aftaler fremvisning, prøvetur eller et leasingforslag med dig. Et menneske hos Gulplade.dk vender tilbage."
      : koeb
      ? "Vi beder flere forhandlere om en pris på den samme bil. Vi læser tilbuddene igennem, før du ser dem. Et menneske hos Gulplade.dk vender tilbage."
      : "Vi henter et konkret tilbud på bilen hjem til dig og hjælper med at gennemgå det. Et menneske hos Gulplade.dk vender tilbage.";
    dlg.querySelector(".lead-dialog__valg").innerHTML = soeg
      ? 'Budget *<select name="oenske" required><option value="">Vælg</option><option>Under 100.000 kr.</option><option>100.000–200.000 kr.</option><option>200.000–300.000 kr.</option><option>Over 300.000 kr.</option><option>Leasing — pr. måned</option><option>Ved ikke endnu</option></select>'
      : brugt
      ? 'Hvad vil du gerne? *<select name="oenske" required><option value="">Vælg</option><option>Høre mere om bilen</option><option>Se eller prøvekøre bilen</option><option>Et leasingforslag på bilen</option><option>Byttebil med i handlen</option></select>'
      : koeb
      ? 'Hvordan vil du betale? *<select name="oenske" required><option value="">Vælg</option><option>Kontant eller med lån i egen bank</option><option>Med lån gennem forhandleren</option><option>Jeg vil sammenligne køb og leasing</option><option>Ved ikke endnu</option></select>'
      : 'Kilometer om året *<select name="oenske" required><option value="">Vælg</option><option>10.000 km</option><option>15.000 km</option><option>20.000 km</option><option>25.000 km</option><option>30.000 km eller mere</option><option>Hjælp mig med at vælge</option></select>';
    dlg.querySelector(".lead-dialog__send").textContent = soeg ? "Send — find bilen til mig" : brugt ? "Send — hør nærmere om bilen" : koeb ? "Send — få tilbud fra forhandlerne" : "Send — få et tilbud";
    var bs = f.querySelector('[name="besked"]');
    if (bs) bs.placeholder = soeg ? "Fx: kassevogn til 2 europaller, automatgear, under 100.000 km" : "";
    if (bs) bs.required = soeg;
    var bl = f.querySelector(".lead-dialog__beskedlabel");
    if (bl) bl.textContent = soeg ? "Hvad skal bilen kunne? *" : "Besked (valgfrit)";
    // "Ring mig op": kun navn og telefon - den laveste tærskel.
    var ring = type === "ring";
    f.querySelectorAll('[name="email"],[name="firma"],[name="oenske"],[name="besked"]').forEach(function (x) {
      var l = x.closest("label"); if (l) l.hidden = ring;
      x.disabled = ring;
      if (ring) x.required = false;
      else if (x.name === "email" || x.name === "oenske") x.required = true;
    });
    var cpr = f.querySelector(".lead-dialog__lille"); if (cpr) cpr.hidden = ring;
    var nyBil = !ring && !brugt && !soeg;
    var lev = f.querySelector(".lead-dialog__levering"); if (lev) { lev.hidden = !nyBil; lev.querySelector("select").disabled = !nyBil; }
    var tid = f.querySelector(".lead-dialog__tid"); if (tid) { tid.hidden = !ring; tid.querySelector("select").disabled = !ring; }
    if (nyBil && bs) {
      bs.placeholder = "Fx håndværker med værktøj og materialer, to personer, trailer på 1.500 kg";
      if (bl) bl.textContent = "Hvad skal bilen bruges til? (valgfrit)";
    }
    // Indretning (partnere.js): henvendelsen sendes videre til partneren.
    var samt = f.querySelector(".lead-dialog__samtykke span");
    if (samt && !samt.getAttribute("data-standard")) samt.setAttribute("data-standard", samt.innerHTML);
    if (samt) samt.innerHTML = samt.getAttribute("data-standard");
    if (type === "indretning") {
      var pn = e(aktuel.partner || "leverandøren");
      dlg.querySelector("#lead-titel").textContent = "Få et tilbud på indretning";
      dlg.querySelector(".lead-dialog__bil").textContent = (aktuel.bil || "") + (aktuel.ref ? " · " + aktuel.ref : "");
      dlg.querySelector(".lead-dialog__intro").textContent = "Vi sender din henvendelse til " + (aktuel.partner || "leverandøren") +
        ", som vender tilbage med pris, vægt og montering på den opstilling, der passer til bilen.";
      dlg.querySelector(".lead-dialog__valg").innerHTML = 'Branche *<select name="oenske" required><option value="">Vælg</option>' +
        '<option>Tømrer eller snedker</option><option>Elektriker</option><option>VVS eller blik</option><option>Service og montage</option><option>Andet</option></select>';
      dlg.querySelector(".lead-dialog__send").textContent = "Send — få et tilbud på indretning";
      if (bs) bs.placeholder = "Fx L1 eller L2, hvornår bilen leveres, og hvad der skal med på en almindelig dag";
      if (bl) bl.textContent = "Besked (valgfrit)";
      if (samt) samt.innerHTML = "Jeg beder Gulplade.dk sende min henvendelse til " + pn +
        ", som kan betale Gulplade.dk for den. <a href=\"/privatliv/\" target=\"_blank\" rel=\"noopener\">Sådan bruges oplysningerne</a>.";
    }
    if (ring) {
      dlg.querySelector("#lead-titel").textContent = "Vi ringer dig op";
      dlg.querySelector(".lead-dialog__intro").textContent = "Skriv dit navn og nummer, så ringer et menneske fra Gulplade.dk dig op om bilen.";
      dlg.querySelector(".lead-dialog__send").textContent = "Ring mig op";
    } else if (!aktuel.bil && !soeg && !koeb) {
      dlg.querySelector("#lead-titel").textContent = "Find din næste varebil";
    }
    if (typeof window.gtag === "function") window.gtag("event", "lead_open", { item_name: aktuel.bil, lead_type: type });
    dlg.querySelector(".lead-dialog__status").textContent = "";
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    // Udfyld det, den besøgende skrev sidst (gemt i deres egen browser).
    try {
      var husk = JSON.parse(localStorage.getItem("gulplade-kontakt") || "{}");
      ["navn", "telefon", "email", "firma"].forEach(function (k) { var x = f.querySelector('[name="' + k + '"]'); if (x && husk[k] && !x.disabled) x.value = husk[k]; });
    } catch (err) {}
    var foerste = Array.prototype.filter.call(f.querySelectorAll("input:not([type=checkbox]):not([hidden]), select, textarea"),
      function (x) { return !x.disabled && !x.value && !x.closest("[hidden]"); })[0];
    if (foerste) foerste.focus();
  }
  function send(ev) {
    ev.preventDefault();
    var f = ev.target, st = dlg.querySelector(".lead-dialog__status");
    if (!f.checkValidity()) { f.reportValidity(); return; }
    var fd = new FormData(f), d = {};
    fd.forEach(function (v, k) { d[k] = v; });
    if (d.botcheck) return;
    var knap = f.querySelector(".lead-dialog__send");
    knap.disabled = true; st.textContent = "Sender …";
    var data = {
      access_key: W3F_NOEGLE,
      subject: "Gulplade.dk – " + (aktuel.type === "indretning" ? "INDRETNING (" + aktuel.partner + ")" : aktuel.type === "ring" ? "RING OP" : aktuel.soeg ? "find bil til mig" : aktuel.brugt ? "brugt varebil" : aktuel.type === "koeb" ? "KØB af ny varebil" : "ny varebil") + (aktuel.bil ? ": " + aktuel.bil : ""),
      from_name: "Gulplade.dk",
      bil: aktuel.bil, pris: aktuel.pris, lagernummer: aktuel.ref, partner: aktuel.partner || "", udstyr: aktuel.udstyr || "",
      type: aktuel.type === "indretning" ? "Indretning til " + aktuel.partner : aktuel.type === "ring" ? "Ring mig op (brugt varebil)" : aktuel.soeg ? "Søger bil (brugt eller ny)" : aktuel.brugt ? "Brugt varebil" : aktuel.type === "koeb" ? "Ny varebil (køb)" : "Ny varebil (leasing)",
      side: location.href, kom_fra: kilde().ref, landingsside: kilde().land, navn: d.navn, telefon: d.telefon, email: d.email, firma: d.firma || "",
      oenske: d.oenske, levering: d.levering || "", ring_tidspunkt: d.tidspunkt || "", besked: d.besked || "", samtykke: "Ja"
    };
    fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
      .then(function (r) { return r.json(); })
      .then(function (svar) {
        if (!svar || !svar.success) throw new Error("afvist");
        try { localStorage.setItem("gulplade-kontakt", JSON.stringify({ navn: d.navn || "", telefon: d.telefon || "", email: d.email || "", firma: d.firma || "" })); } catch (err) {}
        f.querySelector(".lead-dialog__felter").hidden = true;
        f.querySelector(".lead-dialog__note").hidden = true; knap.hidden = true;
        st.innerHTML = "<strong>Tak, " + e((d.navn || "").split(" ")[0]) + "!</strong> Vi har fået din henvendelse" +
          (aktuel.bil ? " om " + e(aktuel.bil) : "") + " og vender tilbage hurtigst muligt.";
        if (typeof window.gtag === "function") window.gtag("event", "generate_lead", { item_name: aktuel.bil, lead_type: aktuel.type });
      })
      .catch(function () {
        knap.disabled = false;
        st.innerHTML = "Det gik ikke at sende. Prøv igen, eller skriv til " +
          '<a href="mailto:kontakt@gulplade.dk?subject=' + encodeURIComponent("Henvendelse om " + (aktuel.bil || "varebil")) + '">kontakt@gulplade.dk</a>.';
      });
  }
  // Hvor den besøgende kom fra, og hvilken side de landede på først i besøget -
  // så en henvendelse kan kobles til en kanal (Google, Facebook, leasio.dk …).
  function kilde() {
    var k = {};
    try { k = JSON.parse(sessionStorage.getItem("gulplade-kilde") || "{}"); } catch (err) {}
    // Uden samtykke gemmes intet; så bruges kun den aktuelle sides henviser.
    var r = document.referrer, egen = r && r.indexOf(location.host) >= 0;
    return { ref: k.ref || (r && !egen ? r.split("/").slice(0, 3).join("/") : (egen ? "internt link" : "direkte")),
             land: k.land || location.pathname };
  }
  function husKilde() {
    try {
      if (hent() !== "ja") return;  // kun med samtykke til statistik
      if (sessionStorage.getItem("gulplade-kilde")) return;
      var r = document.referrer, egen = r && r.indexOf(location.host) >= 0;
      var utm = /[?&]utm_source=([^&]+)/.exec(location.search);
      sessionStorage.setItem("gulplade-kilde", JSON.stringify({
        ref: utm ? "utm:" + decodeURIComponent(utm[1]) : (r && !egen ? r.split("/").slice(0, 3).join("/") : "direkte"),
        land: location.pathname
      }));
    } catch (err) {}
  }
  function leadKnapper() {
    husKilde();
    document.addEventListener("click", function (ev) {
      var k = ev.target && ev.target.closest && ev.target.closest("[data-lead]");
      if (!k || !window.HTMLDialogElement) return;
      ev.preventDefault(); aabn(k);
    });
  }

  function start() {
    mobilmenu();
    leadKnapper();
    // Links i teksten (fx på privatlivssiden), der åbner banneret.
    document.addEventListener("click", function (e) {
      var a = e.target && e.target.closest && e.target.closest(".aabn-samtykke");
      if (a) { e.preventDefault(); visBanner(); }
    });
    // Klik på partnerknapper (partnere.js, data-partner). Tallene bruges i den
    // månedlige rapport til partneren. Kun med samtykke, ligesom resten af GA.
    document.addEventListener("click", function (e) {
      var a = e.target && e.target.closest && e.target.closest("[data-partner]");
      if (a && typeof window.gtag === "function") {
        window.gtag("event", "partner_klik", {
          partner: a.getAttribute("data-partner"),
          item_name: a.getAttribute("data-bil") || "",
          link_type: a.getAttribute("data-type") || ""
        });
      }
    });
    var v = hent();
    if (v === "ja") indlaesGA();
    else if (v !== "nej") visBanner();
    indstillingslink();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
