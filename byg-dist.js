// Samler det, der skal paa nettet, i dist/ - og kun det.
//
// Indtil 28-09-2026 blev hele projektmappen deployet, saa README, generatorerne,
// datafilerne (bl.a. brugte.json med to tal, der ikke maa gengives) og
// .claude/launch.json kunne hentes paa gulplade.dk. Scannere proever netop den
// slags stier hver dag. Derfor en tilladelsesliste: i roden kommer kun filtyper
// med, som en browser skal bruge; mapper kommer med, medmindre de er skjulte
// eller staar i UDEN.
//
// Koer efter generatorerne:
//   node byg-dist.js && npx wrangler pages deploy dist --project-name=gulplade
var fs = require("fs");
var path = require("path");

var ROD = __dirname;
var DIST = path.join(ROD, "dist");
// prishistorik: øjebliksbilleder til prisindekset, arbejdsdata og ikke en side.
// ai-maaling: de månedlige testspørgsmål og svarene på dem.
// presse-udkast: udkast til pressemails (siden /presse/ bygges af generate-pages.js).
// prisdata: producenternes prislister (PDF), holdenes kladder og scripts bag priser.json (05-10-2026).
var UDEN = ["dist", "node_modules", "skitser", "prishistorik", "ai-maaling", "presse-udkast", "tekst-gennemgang", "prisdata"];
// Salgssiden til partnere er ikke godkendt til produktion endnu (02-10-2026).
// Den kommer kun med i preview-bygninger med partnerflaget.
if (process.env.GULPLADE_PARTNER_EKSEMPEL !== "1") UDEN.push("annoncer-paa-gulplade");
// Pressesiden er i produktion fra 04-10-2026 (GULPLADE_PRESSE=0 slår den fra). Grafikken i
// assets/img/presse/ kommer med i begge tilfælde; den bruges kun derfra.
if (process.env.GULPLADE_PRESSE === "0") UDEN.push("presse");
// Arbejdsfiler i roden, der ikke må på sitet (samlet_haandbog.txt: brugerens
// feedback på tekster, 02-10-2026).
var SPRING_OVER = ["samlet_haandbog.txt"];
var ROD_FILER = /\.(html|txt|xml|png|svg|ico|webmanifest)$/i;
var ROD_NAVNE = ["_headers", "_redirects"];

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST);

var filer = 0, mapper = 0;
fs.readdirSync(ROD, { withFileTypes: true }).forEach(function (e) {
  if (e.name.charAt(0) === ".") return;
  var fra = path.join(ROD, e.name), til = path.join(DIST, e.name);
  if (e.isDirectory()) {
    if (UDEN.indexOf(e.name) >= 0) return;
    fs.cpSync(fra, til, { recursive: true });
    mapper++;
  } else if (SPRING_OVER.indexOf(e.name) < 0 && (ROD_FILER.test(e.name) || ROD_NAVNE.indexOf(e.name) >= 0)) {
    fs.copyFileSync(fra, til);
    filer++;
  }
});

// Sikkerhedsnet: ingen kildefiler maa ende i dist, heller ikke i en undermappe.
var forbudt = [];
(function gaa(d) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(function (e) {
    var p = path.join(d, e.name);
    if (e.isDirectory()) return gaa(p);
    if (/\.(json|md|bat|py)$/i.test(e.name) || e.name.charAt(0) === "." ||
        (/\.js$/i.test(e.name) && path.dirname(p) === DIST)) forbudt.push(path.relative(DIST, p));
  });
})(DIST);
// Salgsskitser til virksomheder, vi ikke har en aftale med (partnere.json,
// udkast: true), maa aldrig paa nettet - heller ikke paa en preview.
(function gaa(d) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(function (e) {
    var p = path.join(d, e.name);
    if (e.isDirectory()) return gaa(p);
    if (/\.html$/i.test(e.name) && fs.readFileSync(p, "utf8").indexOf("ingen aftale</span>") >= 0)
      forbudt.push(path.relative(DIST, p) + " (partner-udkast)");
  });
})(DIST);
if (forbudt.length) {
  console.error("STOP: kildefiler i dist/: " + forbudt.join(", "));
  process.exit(1);
}
console.log("dist/: " + mapper + " mapper og " + filer + " filer i roden");

// 02-10-2026: gamle navne paa samtykke-scriptet. Sider, som browsere og Google har
// gemt med et aeldre filnavn, skal stadig kunne hente scriptet. Blev foer kopieret
// i haanden efter hver bygning.
var GAMLE_SAMTYKKE = ["91804e40", "32534652", "707186f9", "3483fb75", "74fbe990"];
(function () {
  var a = path.join(DIST, "assets");
  if (!fs.existsSync(a)) return;
  var nu = fs.readdirSync(a).filter(function (f) { return /^samtykke\.[0-9a-f]{8}\.js$/.test(f); })[0];
  if (!nu) return;
  GAMLE_SAMTYKKE.forEach(function (h) {
    var t = path.join(a, "samtykke." + h + ".js");
    if (!fs.existsSync(t)) fs.copyFileSync(path.join(a, nu), t);
  });
})();

// 07-10-2026: sikkerhedsnet. generate-pages.js sletter gamle style.<hash>.css, naar
// style.css aendrer sig. Koeres de andre generatorer ikke bagefter, peger Haandbogen,
// Til varebilen og de brugte biler paa en fil, der ikke findes, og siderne staar uden
// CSS i produktion (skete 06-10-2026 om aftenen i ca. en time). Stop hellere bygningen.
(function () {
  var mangler = {};
  (function gaa(d) {
    fs.readdirSync(d, { withFileTypes: true }).forEach(function (e) {
      var p = path.join(d, e.name);
      if (e.isDirectory()) return gaa(p);
      if (!/\.html$/i.test(e.name)) return;
      var s = fs.readFileSync(p, "utf8"), re = /\/assets\/((?:style|samtykke)\.[0-9a-f]{8}\.(?:css|js))/g, m;
      while ((m = re.exec(s))) {
        if (!fs.existsSync(path.join(DIST, "assets", m[1]))) (mangler[m[1]] = mangler[m[1]] || []).push(path.relative(DIST, p));
      }
    });
  })(DIST);
  var navne = Object.keys(mangler);
  if (navne.length) {
    console.error("STOP: sider peger paa filer, der ikke findes i dist/assets/. Koer alle fire generatorer (se DEPLOY.md):");
    navne.forEach(function (n) { console.error("  " + n + ": " + mangler[n].length + " sider, fx /" + mangler[n][0].replace(/\\/g, "/")); });
    process.exit(1);
  }
})();

// 07-10-2026: Cloudflare serverer i nogle minutter efter et deploy HTML fra cachen, og den
// gamle HTML peger paa det forrige style.<hash>.css, som generate-pages.js har slettet. Saa
// staar siderne uden CSS, til cachen er fornyet (otte sider ved deployet 07-10). Derfor
// kommer de seneste ti stylesheet-navne med som kopier af det nuvaerende. Kontrollen ovenfor
// koerer foerst, saa en generator, der ikke er koert, stadig stopper bygningen.
(function () {
  var a = path.join(DIST, "assets"), fil = path.join(ROD, "css-historik.json");
  if (!fs.existsSync(a)) return;
  var nu = fs.readdirSync(a).filter(function (f) { return /^style\.[0-9a-f]{8}\.css$/.test(f); })[0];
  if (!nu) return;
  var liste = [];
  try { liste = JSON.parse(fs.readFileSync(fil, "utf8")); } catch (e) {}
  liste = [nu].concat(liste.filter(function (x) { return x !== nu; })).slice(0, 10);
  liste.forEach(function (navn) {
    var t = path.join(a, navn);
    if (!fs.existsSync(t)) fs.copyFileSync(path.join(a, nu), t);
  });
  if (process.env.GULPLADE_PREVIEW !== "1") fs.writeFileSync(fil, JSON.stringify(liste));
})();

// 02-10-2026: lastmod i sitemappet efter, hvornaar indholdet paa siden sidst
// aendrede sig - ikke datadatoen for alle. Hver sides HTML hashes (uden de
// filnavne paa CSS og JS, der skifter ved enhver stilaendring), og datoen
// gemmes i lastmod.json i roden (kommer ikke i dist).
(function () {
  var crypto = require("crypto");
  var sm = path.join(DIST, "sitemap.xml");
  if (!fs.existsSync(sm)) return;
  var gemt = {}, fil = path.join(ROD, "lastmod.json");
  try { gemt = JSON.parse(fs.readFileSync(fil, "utf8")); } catch (e) {}
  var d = new Date();
  var idag = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  var aendret = 0;
  var xml = fs.readFileSync(sm, "utf8").replace(/<url>([\s\S]*?)<\/url>/g, function (hel, indre) {
    var loc = (indre.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    if (!loc) return hel;
    var rel = loc.replace(/^https?:\/\/[^/]+\//, "");
    var html = path.join(DIST, rel, rel === "" || /\/$/.test(rel) ? "index.html" : "");
    if (!fs.existsSync(html)) return hel;
    var indhold = fs.readFileSync(html, "utf8")
      .replace(/(style|samtykke)\.[0-9a-f]{8}\.(css|js)/g, "$1.$2");
    var h = crypto.createHash("sha1").update(indhold).digest("hex");
    var foer = gemt[loc];
    if (!foer) {
      var eksisterende = (indre.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
      gemt[loc] = { hash: h, dato: eksisterende || idag };
    } else if (foer.hash !== h) {
      gemt[loc] = { hash: h, dato: idag }; aendret++;
    }
    var dato = gemt[loc].dato;
    return "<url>" + (/<lastmod>/.test(indre)
      ? indre.replace(/<lastmod>[^<]*<\/lastmod>/, "<lastmod>" + dato + "</lastmod>")
      : indre.replace(/(<\/loc>)/, "$1<lastmod>" + dato + "</lastmod>")) + "</url>";
  });
  fs.writeFileSync(sm, xml);
  // 05-10-2026: en preview-bygning (fx /koeb-ny-varebil/ med GULPLADE_KOEB_NY=1) ændrer
  // menuen på alle sider. Gemmes hashene, får næste produktionsbygning ~350 falske
  // lastmod-datoer. Derfor gemmes lastmod.json kun ved produktionsbygninger.
  var preview = process.env.GULPLADE_PREVIEW === "1";  // 06-10-2026: købssiden er i produktion, så mappen er ikke længere et tegn på preview
  if (!preview) fs.writeFileSync(fil, JSON.stringify(gemt, null, 0));
  console.log("sitemap: " + aendret + " sider med nyt indhold siden sidste bygning" + (preview ? " (preview: lastmod.json ikke gemt)" : ""));
})();

// 06-10-2026: Cloudflares "Email Address Obfuscation" skriver mailto:kontakt@gulplade.dk om
// til /cdn-cgi/l/email-protection. Den adresse giver 404 for crawlere, og Ahrefs talte 388
// sider med et brudt link. <!--email_off--> faar Cloudflare til at lade adresserne staa.
// Koerer efter lastmod-blokken, saa markoererne ikke giver alle sider en ny dato.
(function () {
  var antal = 0;
  (function gaa(d) {
    fs.readdirSync(d, { withFileTypes: true }).forEach(function (e) {
      var p = path.join(d, e.name);
      if (e.isDirectory()) return gaa(p);
      if (!/\.html$/i.test(e.name)) return;
      var s = fs.readFileSync(p, "utf8");
      if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[a-z]{2,}/.test(s) || s.indexOf("<!--email_off-->") >= 0) return;
      var ny = s.replace(/(<body[^>]*>)/i, "$1<!--email_off-->").replace(/(<\/body>)(?![\s\S]*<\/body>)/i, "<!--/email_off-->$1");
      if (ny !== s) { fs.writeFileSync(p, ny); antal++; }
    });
  })(DIST);
  console.log("email_off: " + antal + " sider med e-mailadresser");
})();
