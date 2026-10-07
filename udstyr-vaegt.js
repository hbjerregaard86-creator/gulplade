// udstyr-vaegt.js — deler udstyret i sammenligningstabellen på bilsiden i to grupper (06-10-2026).
//
// Brugeren: "Alt omkring dekorindlæg og design vil jeg gerne have en kategori for." En gruppe for
// "mindre udstyr" blev droppet samme dag: "for de 3 ting er væsentligt" (sidespejle, LED-baglygter og
// trådløs opladning på Transit Custom). Nu er der kun udstyr og design. Ordlisten afgør gruppen, så den
// samme slags udstyr altid havner samme sted. Varme og ventilation i rat og sæder er udstyr, også når
// rattet er af læder.

function re(liste) { return new RegExp(liste.join("|"), "i"); }

var VARME_RAT_SAEDE = /(rat|sæde|sæder)[^.]*(varme|opvarm|ventil)|(varme|opvarm|ventil)[^.]*(rat|sæde|sæder)/i;

var DESIGN = re([
  "dekor", "krom", "chrome", "^trim", "indtræk", "betræk", "kunstlæder", "læder", "ruskind", "stribet stof", "stofsæder",
  "indfarve", "vognfarve", "bilens farve", "i farven", "i farve ", "lakere", "lakeret", "sort tag(?!ræling)", "tag i sort",
  "spoiler", "striber", "skørtekit", "stylingbar", "sportsbar", "grill", "sidespejlkapper", "sidespejlhuse", "displayramme",
  "luftdyser", "pedaler", "look", "ambiente", "lyssignatur", "designdetaljer", "designpakke", "eksteriørpakke",
  "udstyrsniveau life", "logo", "emblem", "bitone", "tofarvet", "fælge", "hjulkaps", "navkaps", "(^|[\\s,(])dæk ",
  "\\d\" hjul", "glastag", "mørktonede", "tonede ruder", "privacy", "gearknop", "dørhåndtag", "pyntelist", "sølvfarvede",
  "sortlakerede", "foliering", "stødfanger", "kofanger", "greb i ", "udvidede hjulkasser", "modelbetegnelse", "indstigningsliste"
]);

// 0 = udstyr, 1 = design og udseende
function vaegt(tekst) {
  var t = String(tekst || "");
  if (VARME_RAT_SAEDE.test(t)) return 0;
  return DESIGN.test(t) ? 1 : 0;
}

module.exports = { vaegt: vaegt, GRUPPER: ["Udstyr", "Design og udseende"] };
