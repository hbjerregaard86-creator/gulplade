// kilde-etiket.js — hvad en kilde HEDDER på siden (06-10-2026).
//
// Brugeren: "Kilderne skal ikke hedde ipaper.. etc" og "alt omkring kilderne skal gennemgås, så det
// giver troværdighed". Producenterne lægger deres prislister hos udbydere af PDF-kataloger og
// indholdssystemer (ipaper.ipapercms.dk, edge.sitecorecloud.io, ipaper.wismo.dk, nissan-cdn.net …).
// Domænet ligner en tredjepart, selv om filen er producentens egen. Her får en kilde et navn efter
// afsenderen, landet og typen af dokument: "Peugeots prisliste", "Opels tyske prisliste",
// "Toyotas konfigurator". Linket peger stadig på den fil, vi har læst. Kilder, der ikke kommer fra
// en producent (forhandlere, annoncer, presse), siger det selv.

var ANDRE = [
  [/biltorvet\.dk/i, "Biltorvet (bilannonce)"],
  [/pim\.nellemann\.dk/i, "Kia Danmarks instruktionsbog"],  // Nellemann ejer Kia Import Danmark, filen er linket fra Kias egne data
  [/nellemann\.dk/i, "forhandleren Nellemann"],
  [/hessel\.dk/i, "forhandleren Ejner Hessel"],
  [/leasing\.dk/i, "Leasing.dk"],
  [/bygtek\.dk/i, "Bygtek"],
  [/mynewsdesk\.com/i, "pressemeddelelse"],
  [/zendesk\.com/i, "Kias kundeservice"],
  [/press\.kiamotors\.dk/i, "Kias pressemeddelelse"],
  [/newsroom\.toyota\.eu/i, "Toyota Europas pressemateriale"],
  [/fromtheroad\.ford\.com/i, "Fords pressemateriale"],
  [/man-scandinavia\.com/i, "MAN Skandinavien"],
  [/shop\.volkswagen\.dk/i, "Volkswagens webshop"],
  [/mysortimo\.dk/i, "Sortimos webshop"],
  [/systemedstrom\.com/i, "System Edströms webshop"],
  [/worksystem\.dk/i, "Work Systems webshop"],
  [/smartvan\.dk/i, "SmartVans webshop"]
];

// Mærket i ejefald, fundet i adressen (værten og stien).
var MAERKER = [
  [/peugeot/i, "Peugeots"],
  [/citroen|citroën/i, "Citroëns"],
  [/opel/i, "Opels"],
  [/fiat/i, "Fiats"],
  [/transportvehiclesrenault|renault/i, "Renaults"],
  [/nissan/i, "Nissans"],
  [/ford/i, "Fords"],
  [/volkswagen|vw-nutzfahrzeuge/i, "Volkswagens"],
  [/toyota/i, "Toyotas"],
  [/mercedes/i, "Mercedes-Benz'"],
  [/man\.eu|man-truck/i, "MAN's"],
  [/kia/i, "Kias"],
  [/iveco|hedinnordictruck/i, "Ivecos"],
  [/farizon/i, "Farizons"]
];

// Landet ud fra domænet. Danske og internationale domæner får intet land.
var LANDE = [[/\.de$/i, "tyske"], [/\.at$/i, "østrigske"], [/\.co\.uk$|\.uk$/i, "britiske"], [/\.fr$/i, "franske"],
  [/\.ie$/i, "irske"], [/\.nl$/i, "hollandske"], [/\.se$/i, "svenske"]];

function vaert(url) { return String(url || "").replace(/^https?:\/\/(www\.)?/, "").split("/")[0]; }

// Hvilken slags dokument adressen er. Stien tæller mest: "brochurer.citroen.dk/brochurer/varebiler/jumper/"
// er Citroëns prisliste, og Nissans "/brochures/cpls/" er deres prisliste til kunder.
function type(url) {
  var u = String(url || ""), v = vaert(u), sti = u.replace(/^https?:\/\/[^/]+/, "");
  if (/tilbeh(o|ø)r|eftermarked|accessor/i.test(sti)) return "tilbehørsliste";
  if (/texus|cocadap|configurator|konfigurator/i.test(u) || /^voc\./i.test(v)) return "konfigurator";
  if (/oneweb\.mercedes/i.test(v)) return "tekniske data";
  if (/modelinformation\.toyota/i.test(v)) return /brochure/i.test(sti) ? "brochure" : "prisliste";
  if (/cpls|prisliste|prislister|pricelist|price-list|preisliste|priser/i.test(sti) || /pricelist\./i.test(v)) return "prisliste";
  if (/brochurer\/varebiler\//i.test(sti)) return "prisliste";
  if (/faktablad|tech-?spec|specifikation|specs?\//i.test(sti)) return "tekniske data";
  if (/kampagne/i.test(sti)) return "kampagneside";
  if (/brochure|publitas/i.test(u)) return "brochure";
  // Producenternes PDF'er og prislistedomæner uden andre kendetegn er prislister.
  if (/\.pdf($|\?)/i.test(sti) || /prislister/i.test(v)) return "prisliste";
  return "hjemmeside";
}

// Navnet på en kilde, fx "Peugeots prisliste", "Opels tyske prisliste" eller "Toyotas konfigurator".
function kildeEtiket(url) {
  var u = String(url || ""), v = vaert(u);
  for (var i = 0; i < ANDRE.length; i++) if (ANDRE[i][0].test(u)) return ANDRE[i][1];
  var maerke = null;
  for (var j = 0; j < MAERKER.length; j++) if (MAERKER[j][0].test(u)) { maerke = MAERKER[j][1]; break; }
  if (!maerke) return v;
  var land = "";
  for (var k = 0; k < LANDE.length; k++) if (LANDE[k][0].test(v)) { land = LANDE[k][1] + " "; break; }
  return maerke + " " + land + type(u);
}

module.exports = { kildeEtiket: kildeEtiket, vaert: vaert };
