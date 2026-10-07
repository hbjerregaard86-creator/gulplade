// Underside /til-varebilen/el-abonnement/opladning-af-elvarebil-i-praksis/ (07-10-2026)
var RENAULT = `https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/transportvehiclesrenaultdksite/cardocuments/prisliste-master-e-tech-electric.pdf`;
var VW = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/ID.Buzz_Cargo.pdf`;
var FORD = `https://katalog.ford.dk/prislister/varebiler/e-transit-custom-van/GetPDF.ashx`;
var KIA = `https://api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-priser.pdf`;
var SIK = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/opladning-el-biler`;
var FDM = `https://fdm.dk/guides/elbil/derfor-er-elbilens-raekkevidde-kortere-om-vinteren`;
var OKV = `https://www.ok.dk/privat/produkter/opladning/viden/elbil-om-vinteren`;
var EWII = `https://www.ewii.dk/erhverv/opladning/`;
var ZAPTEC = `https://www.zaptec.com/da/ladeloesninger/professionel-opladning/zaptec-pro`;
var CLEVER = `https://clever.dk/hjaelp/faq/om-clevers-hjemmeladeboks/kom-i-gang/hvad-er-forskellen-paa-ac-og-dc-opladning/`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }
var PRISLISTER = `producenternes danske prislister for ` + a(VW, "VW ID. Buzz Cargo") + `, ` + a(FORD, "Ford E-Transit Custom") + `, ` + a(KIA, "Kia PV5 Cargo") + ` og ` + a(RENAULT, "Renault Master E-Tech");

module.exports = {
  id: "el-abonnement/opladning-af-elvarebil-i-praksis",
  side: {
    slug: "opladning-af-elvarebil-i-praksis",
    navn: "Opladning af elvarebil i praksis",
    titel: "Opladning af elvarebil: ladetid og vinter",
    kort: `Ladetid på AC og DC, bilens egen lader, stikkontakt eller ladeboks, en eller tre faser og opladning om vinteren.`,
    beskrivelse: `Opladning af elvarebil i praksis: ladetid på AC og DC for populære modeller, stikkontakt eller ladeboks, og hvad kulden betyder for forbrug og lynladning.`,
    manchet: `Ladetiden afhænger af tre ting: ladestanderens effekt, bilens egen lader og batteriets temperatur. Her er producenternes ladetider for udvalgte elvarebiler og det, der ændrer sig om vinteren. Afgift, rækkevidde og nyttelast står i <a href="/haandbogen/elvarebil-i-praksis/">elvarebil i praksis</a> i Håndbogen.`,
    visuel: {
      hero: "el-abonnement",
      hero_el: true,
      kort_fortalt: [
        ["Lynladning til 80 %", "24–38 min.", "fra 10 eller 15 % i de fem modeller"],
        ["Stikkontakt, Master E-Tech", "39,7 t", "fra 10 til 100 % ved 2,3 kW"],
        ["Forbrug om vinteren", "20–30 %", "højere, skriver FDM"],
        ["Varmepumpe", "op til 3 gange", "så effektiv som et varmelegeme"]
      ],
      toc: true,
      stribe: {
        ids: ["kia-pv5-cargo", "vw-id-buzz-cargo", "renault-master-e-tech"],
        titel: "Elvarebiler fra ladetabellerne med tilbud lige nu"
      }
    },
    afsnit: [
      {
        overskrift: "AC og DC",
        tekst: [
          `Der findes to slags strøm, og forskellen afgør, hvor hurtigt bilen lader. Elnettet leverer vekselstrøm, AC, men batteriet kan kun lades med jævnstrøm, DC. Strømmen skal derfor omformes et sted på vejen, skriver Clever.`,
          `Ved AC-ladning sker omformningen i bilen, og det er sådan, bilen lader ved ladeboksen på firmaets adresse og hjemme hos medarbejderen. Ved DC-ladning sker omformningen i lynladeren eller i en transformerstation ved siden af, og strømmen går direkte ind i batteriet.`,
          `Ford skriver i prislisten for E-Transit Custom, at AC er hjemmeopladning via Type 2-stik, og at DC er hurtigladning via CCS-stik.`
        ],
        punkter: [
          `<strong>AC.</strong> Hjemme og på firmaets adresse. Bilen omformer strømmen og tager typisk op til 11 kW. Stikket er Type 2.`,
          `<strong>DC.</strong> Lynladere. Strømmen omformes i standeren, så effekten kan være langt højere. Stikket er CCS.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="To rækker. Ved AC-ladning går strømmen fra elnettet gennem ladeboksen til bilens egen omformer og videre til batteriet. Ved DC-ladning omformer lynladeren strømmen, så den går direkte til bilens batteri."><defs><marker id="pil-opladning-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="0" y="16">AC: bilen omformer strømmen</text><rect class="tg-kasse" x="0" y="40" width="64" height="32"/><text x="32" y="60" text-anchor="middle">Elnet</text><line class="tg-pil" x1="64" y1="56" x2="82" y2="56" marker-end="url(#pil-opladning-1)"/><rect class="tg-kasse" x="84" y="40" width="80" height="32"/><text x="124" y="60" text-anchor="middle">Ladeboks</text><line class="tg-pil" x1="164" y1="56" x2="194" y2="56" marker-end="url(#pil-opladning-1)"/><rect class="tg-rum" x="184" y="28" width="212" height="56" rx="6"/><rect class="tg-modul" x="196" y="40" width="92" height="32"/><text class="tg-modul__tekst" x="242" y="60" text-anchor="middle">OMFORMER</text><line class="tg-pil" x1="288" y1="56" x2="300" y2="56" marker-end="url(#pil-opladning-1)"/><rect class="tg-kuffert" x="302" y="40" width="84" height="32"/><text x="344" y="60" text-anchor="middle">Batteri</text><text class="tg-lille" x="124" y="100" text-anchor="middle">TYPE 2-STIK</text><text class="tg-lille" x="290" y="100" text-anchor="middle">BILEN</text><text class="tg-fremhaev" x="0" y="136">DC: laderen omformer strømmen</text><rect class="tg-kasse" x="0" y="160" width="64" height="32"/><text x="32" y="180" text-anchor="middle">Elnet</text><line class="tg-pil" x1="64" y1="176" x2="82" y2="176" marker-end="url(#pil-opladning-1)"/><rect class="tg-rum" x="84" y="148" width="104" height="56" rx="6"/><rect class="tg-modul" x="90" y="160" width="92" height="32"/><text class="tg-modul__tekst" x="136" y="180" text-anchor="middle">OMFORMER</text><line class="tg-pil" x1="188" y1="176" x2="300" y2="176" marker-end="url(#pil-opladning-1)"/><rect class="tg-rum" x="214" y="148" width="182" height="56" rx="6"/><rect class="tg-kuffert" x="302" y="160" width="84" height="32"/><text x="344" y="180" text-anchor="middle">Batteri</text><text class="tg-lille" x="136" y="220" text-anchor="middle">LYNLADEREN</text><text class="tg-lille" x="305" y="220" text-anchor="middle">BILEN, CCS-STIK</text></svg>`,
          tekst: `Skematisk. Ved AC omformer bilen selv strømmen, og ved DC sker det i lynladeren. Kilder: ` + a(CLEVER, "Clever: Hvad er forskellen på AC- og DC-opladning") + ` og ` + a(FORD, "Ford: Prisliste E-Transit Custom") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bilen bestemmer farten",
        tekst: [
          `Ladetiden afhænger af det svageste led. Clever skriver, at den typiske elbil har en omformer, der kan levere op til 11 kW, også selvom ladestanderen kan levere 22 kW. De 11 kW svarer til 16 ampere fordelt på tre faser.`,
          `Ved lynladning er det også bilen, der bestemmer, hvor mange kW den tager imod. Clevers lynladere kan levere op til 300 kW, mens de fleste nyere elbiler kan lade med omkring 100–150 kW, skriver Clever. Det er 10–15 gange så meget som ved AC-ladning.`,
          `Clever forklarer, at DC-ladning er dyrere, fordi ladestanderen er mere kompleks og skal have store mængder strøm. En enkelt lynladestander bruger lige så meget strøm som 50 parcelhuse.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Typisk omformer i bilen", "op til 11", "kW"],
            ["Clevers lynladere", "op til 300", "kW"],
            ["De fleste nyere elbiler på DC", "100–150", "kW"]
          ],
          note: `Kilde: ` + a(CLEVER, "Clever: Hvad er forskellen på AC- og DC-opladning") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Effekten på væggen",
        tekst: [
          `Renault oplyser ladetider for Master E-Tech med 87 kWh fra 10 til 100 % ved forskellig effekt. Tallene viser, hvor meget ladeboksens effekt betyder. Fra en almindelig stikkontakt tager det næsten 40 timer, og fra en 22 kW-ladestander under 4 timer.`,
          `Master E-Tech har en AC-lader på 22 kW som standard og kan bestilles med 11 kW uden merpris. Med 11 kW tager det 7,8 timer at lade fra 10 til 100 %, og det passer til en bil, der holder stille om natten.`,
          `En 22 kW-lader i bilen giver kun kortere ladetid, hvis ladeboksen også kan levere 22 kW. Zaptec skriver om sin Zaptec Pro, at den giver op til 22 kW afhængigt af opsætningen og bilen.`
        ],
        tabel: {
          kolonner: ["Lader", "Effekt", "Ladetid 10–100 %"],
          raekker: [
            ["Stikkontakt i hjemmet", "2,3 kW", "39,7 t"],
            ["Lynstikkontakt", "3,7 kW", "23,9 t"],
            ["Ladestander", "7,4 kW", "11,6 t"],
            ["Ladestander", "11 kW", "7,8 t"],
            ["Ladestander", "22 kW", "3,8 t"]
          ],
          note: `Kilde: ` + a(RENAULT, "Renault: Prisliste Master E-Tech electric") + `, gældende 1. oktober til 31. december 2026, set den 7. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "t",
          data: [
            ["Stikkontakt i hjemmet", 39.7, "2,3 kW"],
            ["Lynstikkontakt", 23.9, "3,7 kW"],
            ["Ladestander", 11.6, "7,4 kW"],
            ["Ladestander", 7.8, "11 kW"],
            ["Ladestander", 3.8, "22 kW"]
          ],
          note: `Søjlerne viser ladetiden fra 10 til 100 % for Renault Master E-Tech med 87 kWh. Kilde: ` + a(RENAULT, "Renault: Prisliste Master E-Tech electric") + `, gældende 1. oktober til 31. december 2026, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Stikkontakt som nødløsning",
        tekst: [
          `Et mode 2-kabel er et ladekabel, der sættes direkte i en almindelig stikkontakt. Sikkerhedsstyrelsen skriver, at den slags opladning ofte kaldes mormorladning, fordi der ikke er et særligt stik til den.`,
          `Sikkerhedsstyrelsen anbefaler, at en almindelig stikkontakt højst belastes med 6 A over længere tid, når bilen lader med et mode 2-kabel. Den anbefaler en vægmonteret ladeboks til daglig opladning. I en stikkontakt i hjemmet tager Renault Master E-Tech 39,7 timer fra 10 til 100 %.`,
          `Skal stikkontakten belastes med mere end 6 A i over 2 timer, skal den være beregnet til længerevarende høj belastning, og der bør installeres en separat gruppe. Standarden HD 60364-7-722 tillader ikke flytbare stikkontakter, så der må ikke bruges forlængerledning mellem bilen og stikkontakten.`,
          `Bilen kan også lade med et mode 2-kabel med en industristikprop, der kan tåle længerevarende høj belastning, skriver Sikkerhedsstyrelsen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Varebil, der lader fra en almindelig stikkontakt med et mode 2-kabel. Stikkontakten bør højst belastes med 6 A over længere tid, der må ikke bruges forlængerledning, og en ladeboks på væggen anbefales til daglig opladning."><rect class="tg-hylde" x="20" y="20" width="14" height="174"/><rect class="tg-modul" x="34" y="58" width="18" height="30"/><rect class="tg-kasse" x="34" y="110" width="14" height="24"/><path class="tg-gulvlinje" d="M48,122 C90,170 140,126 198,124"/><rect class="tg-modul" x="196" y="118" width="8" height="12"/><g transform="translate(196,180) scale(0.8)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="0" y1="194" x2="400" y2="194"/><g class="tg-call"><line x1="52" y1="72" x2="70" y2="40"/><circle cx="52" cy="72" r="3"/><text class="tg-call__navn" x="74" y="30">Ladeboks</text><text class="tg-call__under" x="74" y="44">anbefales til daglig brug</text></g><g class="tg-call"><line x1="44" y1="134" x2="44" y2="204"/><circle cx="44" cy="134" r="3"/><text class="tg-call__navn" x="4" y="218">Højst 6 A over tid</text><text class="tg-call__under" x="4" y="232">i almindelig stikkontakt</text></g><g class="tg-call"><line x1="112" y1="146" x2="180" y2="204"/><circle cx="112" cy="146" r="3"/><text class="tg-call__navn" x="180" y="218">Ingen forlængerledning</text><text class="tg-call__under" x="180" y="232">HD 60364-7-722</text></g></svg>`,
          tekst: `Skematisk. Opladning med mode 2-kabel i en almindelig stikkontakt. Kilde: ` + a(SIK, "Sikkerhedsstyrelsen: Opladning af el-biler") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "En fase eller tre",
        tekst: [
          `De fleste bygninger har tre faser, og mange elbiler lader kun på én fase, skriver Zaptec. Lader flere enfasede biler på samme fase, kan ladehastigheden falde drastisk.`,
          `Afhængigt af bilen kan Zaptec Pro skifte mellem en- og trefaset ladning og fordele bilerne på bygningens tre faser. EWII, der sælger Zaptec Pro, kalder funktionen automatisk faserotation. Mere om fordelingen står i <a href="/til-varebilen/el-abonnement/lastbalancering/">lastbalancering</a>.`,
          `For en enkelt varebil betyder det, at en ladeboks på 11 kW kun giver 11 kW, hvis bilen kan lade på alle tre faser. Clever skriver, at 11 kW svarer til 16 ampere fordelt på tre faser.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="To ladebokse med tre faser. En trefaset bil bruger alle tre faser, mens en enfaset bil kun bruger én af dem."><line class="tg-skillevaeg" x1="200" y1="30" x2="200" y2="205"/><text class="tg-lille" x="32" y="42" text-anchor="middle">LADEBOKS</text><rect class="tg-kasse" x="10" y="50" width="44" height="100"/><line class="tg-doer" x1="54" y1="75" x2="110" y2="75"/><line class="tg-doer" x1="54" y1="100" x2="110" y2="100"/><line class="tg-doer" x1="54" y1="125" x2="110" y2="125"/><text x="62" y="68">L1</text><text x="62" y="93">L2</text><text x="62" y="118">L3</text><rect class="tg-rum" x="110" y="45" width="76" height="110" rx="8"/><text class="tg-lille" x="148" y="104" text-anchor="middle">BIL</text><text class="tg-fremhaev" x="98" y="180" text-anchor="middle">Trefaset bil</text><text x="98" y="198" text-anchor="middle">bruger alle tre faser</text><text class="tg-lille" x="242" y="42" text-anchor="middle">LADEBOKS</text><rect class="tg-kasse" x="220" y="50" width="44" height="100"/><line class="tg-doer" x1="264" y1="75" x2="320" y2="75"/><line class="tg-skinne-tynd" x1="264" y1="100" x2="300" y2="100"/><line class="tg-skinne-tynd" x1="264" y1="125" x2="300" y2="125"/><text x="272" y="68">L1</text><text x="272" y="93">L2</text><text x="272" y="118">L3</text><rect class="tg-rum" x="320" y="45" width="76" height="110" rx="8"/><text class="tg-lille" x="358" y="104" text-anchor="middle">BIL</text><text class="tg-fremhaev" x="308" y="180" text-anchor="middle">Enfaset bil</text><text x="308" y="198" text-anchor="middle">bruger kun én fase</text><text class="tg-lille" x="200" y="226" text-anchor="middle">11 KW SVARER TIL 16 A PÅ TRE FASER</text></svg>`,
          tekst: `Skematisk. En enfaset bil bruger kun én af ladeboksens tre faser. Kilder: ` + a(ZAPTEC, "Zaptec Pro") + ` og ` + a(CLEVER, "Clever") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Batteristørrelse og ladetid",
        tekst: [
          `På samme 11 kW-lader afhænger ladetiden af batteriets størrelse. Kia PV5 Cargo med 51,5 kWh lader fra 0 til 100 % på 4 t 50 min og med 71,2 kWh på 6 t 40 min. Lynladning fra 10 til 80 % tager 30 minutter for begge, oplyser Kia.`,
          `Volkswagen oplyser samme mønster for ID. Buzz Cargo. Med 59 kWh netto tager AC-ladningen 6 t 30 min og med 79 kWh netto 8 t 30 min, i de tekniske data skrevet som 6,5 og 8,5 timer.`,
          `Det store batteri tager længere tid at fylde, men rækker længere. Kia oplyser en rækkevidde på 297 km med det lille batteri og 416 km med det store efter WLTP. ID. Buzz Cargo med 59 kWh netto har en rækkevidde på 327 km og den med 79 kWh netto og 286 hk 449 km.`
        ],
        figur: {
          type: "soejler",
          enhed: "min.",
          data: [
            ["Kia PV5 Cargo 51,5 kWh", 290],
            ["VW ID. Buzz Cargo 59 kWh", 390],
            ["Kia PV5 Cargo 71,2 kWh", 400],
            ["VW ID. Buzz Cargo 79 kWh", 510]
          ],
          note: `Søjlerne viser AC-ladetiden fra 0 til 100 % ved 11 kW. Kilder: prislister fra ` + a(KIA, "Kia") + ` og ` + a(VW, "Volkswagen") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Udstyr, der påvirker opladningen",
        tekst: [
          `Ladetiden afhænger også af udstyret. Bilens AC-lader, den højeste DC-effekt og varmepumpen er forskellige fra model til model, og nogle steder koster de ekstra. Alle priser på siden er uden moms.`,
          `Kia PV5 Cargo har en AC-lader på 11 kW som standard og kan få 22 kW som tilvalg til 8.000 kr. Renault Master E-Tech har 22 kW som standard. VW ID. Buzz Cargo og Ford E-Transit Custom lader med op til 11 kW AC.`,
          `Varmepumpen er standard på Kia PV5 Cargo og Ford E-Transit Custom og et tilvalg til 6.597 kr. på VW ID. Buzz Cargo. Kia har desuden batterivarmer, forvarmning af batteriet før DC-ladning og fjernstyret opvarmning af kabinen som standard.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Udstyr", "Kia PV5 Cargo", "VW ID. Buzz Cargo", "Ford E-Transit Custom"],
          raekker: [
            ["AC-lader", "11 kW, 22 kW som tilvalg", "11 kW", "11 kW"],
            ["Højeste DC-effekt", "150 kW", "165 eller 185 kW", "125 kW"],
            ["Ladetid AC til 100 %", "4 t 50 min eller 6 t 40 min", "6 t 30 min eller 8 t 30 min", "7 t fra 10 %"],
            ["Varmepumpe", "standard", "tilvalg", "standard"]
          ],
          note: `Renault Master E-Tech har en AC-lader på 22 kW og 130 kW DC som standard. Kilder: prislisterne fra ` + a(KIA, "Kia") + `, ` + a(VW, "Volkswagen") + `, ` + a(FORD, "Ford") + ` og ` + a(RENAULT, "Renault") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lynladning",
        tekst: [
          `Lynladning fra 10 til 80 % tager 24–38 minutter for de fem elvarebiler i figuren. Tiderne gælder på en lader, der kan levere bilens maksimale effekt. Renault oplyser tiden ved en hurtiglader på mindst 130 kW og fra 15 til 80 %.`,
          `Den højeste DC-effekt siger ikke alt om ladetiden, fordi batterierne er forskellige. VW ID. Buzz Cargo med 79 kWh netto lader med op til 185 kW og når 80 % på 26 minutter. Ford E-Transit Custom med 71 kWh og 125 kW tager 29 minutter.`
        ],
        tabel: {
          kolonner: ["Model", "Batteri", "Maks. DC", "Ladetid", "Interval"],
          raekker: [
            ["VW ID. Buzz Cargo", "59 kWh netto", "165 kW", "24 min.", "10–80 %"],
            ["VW ID. Buzz Cargo", "79 kWh netto", "185 kW", "26 min.", "10–80 %"],
            ["Ford E-Transit Custom", "71 kWh", "125 kW", "29 min.", "10–80 %"],
            ["Kia PV5 Cargo", "71,2 kWh", "150 kW", "30 min.", "10–80 %"],
            ["Renault Master E-Tech", "87 kWh", "Min. 130 kW", "38 min.", "15–80 %"]
          ],
          note: `Kilder: ` + PRISLISTER + `, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "min.",
          data: [
            ["VW ID. Buzz Cargo", 24, "59 kWh netto, 165 kW, 10–80 %"],
            ["VW ID. Buzz Cargo", 26, "79 kWh netto, 185 kW, 10–80 %"],
            ["Ford E-Transit Custom", 29, "71 kWh, 125 kW, 10–80 %"],
            ["Kia PV5 Cargo", 30, "71,2 kWh, 150 kW, 10–80 %"],
            ["Renault Master E-Tech", 38, "87 kWh, min. 130 kW, 15–80 %"]
          ],
          note: `Søjlerne viser lynladetiden. Under navnet står bilens batteri, højeste DC-effekt og ladeinterval. Kilder: ` + PRISLISTER + `, set den 4. oktober 2026.`
        },
        efter: [
          `Alle elvarebiler med ladetider står på <a href="/elvarebiler/">elvarebiler</a>.`
        ]
      },
      {
        overskrift: "Ladeintervallet",
        tekst: [
          `Producenterne opgiver AC-ladetid fra 0 eller 10 % til 100 % og lynladning fra 10 eller 15 % til 80 %. Tiderne i prislisterne kan derfor ikke sammenlignes direkte.`,
          `Kia og Volkswagen regner AC-ladningen fra 0 %, mens Ford og Renault regner fra 10 %. Ved lynladning regner Renault fra 15 % og de tre andre fra 10 %. Tegningen viser de to intervaller for Kia PV5 Cargo med det store batteri.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Ladeintervaller for Kia PV5 Cargo: AC fra 0 til 100 procent, DC fra 10 til 80 procent"><defs><marker id="pil-el-abonnement-5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g class="tg-maal"><line x1="40" y1="50" x2="340" y2="50" marker-start="url(#pil-el-abonnement-5)" marker-end="url(#pil-el-abonnement-5)"/><text x="190" y="40" text-anchor="middle">AC 0–100 %: 6 t 40 min</text></g><rect x="40" y="65" width="300" height="50" rx="4" class="tg-rum"/><rect x="340" y="80" width="10" height="20" class="tg-kasse"/><rect x="70" y="70" width="210" height="40" class="tg-modul"/><text x="40" y="132" text-anchor="middle">0 %</text><text x="70" y="132" text-anchor="middle">10 %</text><text x="280" y="132" text-anchor="middle">80 %</text><text x="340" y="132" text-anchor="middle">100 %</text><g class="tg-maal"><line x1="70" y1="150" x2="280" y2="150" marker-start="url(#pil-el-abonnement-5)" marker-end="url(#pil-el-abonnement-5)"/><text x="175" y="170" text-anchor="middle">DC 10–80 %: 30 min</text></g><text x="40" y="198" class="tg-lille">Kia PV5 Cargo 71,2 kWh: 11 kW AC, 150 kW DC</text></svg>`,
          tekst: `Skematisk. Ladeintervaller for Kia PV5 Cargo 71,2 kWh. Kilde: ` + a(KIA, "Kia") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Kilometer pr. times ladning",
        tekst: [
          `Vi har divideret 11 kW i én time med WLTP-forbruget i prislisterne. Resultatet er et regneeksempel og ikke en måling, og om vinteren bliver tallet lavere, fordi forbruget stiger.`,
          `EWII oplyser op til 2 km pr. minut på sin 22 kW-lader og skriver, at den typisk kan lade op til 100 km på under en time. Det kræver en bil, der kan lade med 22 kW AC.`,
          `Et regneeksempel viser, hvad det betyder på en arbejdsdag. En varebil, der kører 150 km og bruger lige så meget som Ford E-Transit Custom efter WLTP, skal have cirka 33 kWh. Det tager cirka 3 timer på en 11 kW-ladeboks.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Kia PV5 Cargo", "58", "km"],
            ["VW ID. Buzz Cargo", "54", "km"],
            ["Ford E-Transit Custom", "50", "km"],
            ["Renault Master E-Tech", "44", "km"]
          ],
          note: `Kilometer for én times ladning ved 11 kW. Kilder: prislister fra ` + a(KIA, "Kia") + ` (191 Wh pr. km), ` + a(VW, "VW") + ` (20,5 kWh pr. 100 km), ` + a(FORD, "Ford") + ` (218 Wh pr. km) og ` + a(RENAULT, "Renault") + ` (25,1 kWh pr. 100 km), set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Forbruget om vinteren",
        tekst: [
          `Kabinen varmes med strøm fra batteriet. FDM skriver, at forbruget typisk stiger 20–30 procent afhængigt af temperatur og vejr. OK regner med, at rækkevidden falder cirka 1 procent for hver grad under 20 °C.`,
          `Vinterdæk har større rullemodstand, og et koldt batteri genvinder mindre strøm ved opbremsning. Batteriet bruger også strøm på at holde sig selv varmt, skriver FDM.`,
          `I et regneeksempel med Kia PV5 Cargo med det store batteri falder WLTP-rækkevidden på 416 km til cirka 320–347 km, hvis forbruget stiger 20–30 %.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Forbruget stiger typisk", "20–30", "%"],
            ["Rækkevidden falder pr. grad under 20 °C", "ca. 1", "%"]
          ],
          note: `FDM skriver, at forbruget stiger afhængigt af temperatur og vejr. Tallet for rækkevidden er fra OK. Kilder: ` + a(FDM, "FDM") + ` og ` + a(OKV, "OK") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Lynladning i kulde",
        tekst: [
          `Et koldt batteri tager ikke imod lige så høj strøm, så lynladningen går langsommere, skriver FDM. OK anbefaler at få bilen og batteriet varmt, før bilen når ladestanderen.`,
          `FDM skriver, at lynladningen ikke er effektiv, hvis bilen kører direkte til en lynlader efter en nat i streng kulde. Når opladningen starter, bliver batteriet dog også varmet op. I mange elbiler er forskellen om vinteren derfor ikke til at måle, eller den forlænger opladningen med 3–5 minutter.`,
          `Ved opladning hjemme er der ikke stor forskel på ladehastigheden sommer og vinter, skriver FDM. Lader bilen udendørs i frost, kan ladestikket fryse fast, og OK foreslår at dække ladedækslet til.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["En nat i kulde", "Batteriet er koldt og tager ikke imod lige så høj strøm."],
            ["På vej til lynladeren", "Bilen og batteriet varmes op. Kia PV5 Cargo har forvarmning af batteriet før DC-ladning som standard."],
            ["Ved lynladeren", "Batteriet varmes også op, når opladningen starter."],
            ["Ladetiden", "I mange elbiler er forskellen ikke til at måle eller 3–5 minutter."]
          ],
          note: `Kilder: ` + a(FDM, "FDM") + `, ` + a(OKV, "OK") + ` og ` + a(KIA, "Kia") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Varmepumpe og forvarmning",
        tekst: [
          `Det er især opvarmningen af kabinen, der bruger strøm om vinteren, skriver FDM. Kabinen kan varmes med et almindeligt varmelegeme eller med en varmepumpe, og varmepumpen er op til tre gange så effektiv.`,
          `Forvarmer chaufføren kabinen, mens bilen holder på ladekablet, kommer varmen fra nettet og ikke fra batteriet. Turen starter så med en varm kabine og et fuldt batteri, og det giver den længste rækkevidde, skriver FDM.`
        ],
        punkter: [
          `<strong>Varmepumpe.</strong> Op til tre gange så effektiv som et almindeligt varmelegeme, ifølge FDM. Standard på Kia PV5 Cargo og tilvalg til 6.597 kr. på VW ID. Buzz Cargo.`,
          `<strong>Batteriforvarmning.</strong> Kia PV5 Cargo har forvarmning af batteriet før DC-ladning som standard.`,
          `<strong>Forvarm kabinen på ladekablet.</strong> Så kommer varmen fra nettet og ikke fra batteriet, skriver OK.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Elvarebil ved ladestanderen med varmepumpe, batteri under gulvet og ladekabel."><g class="tg-call"><line x1="180" y1="134" x2="180" y2="34"/><circle cx="180" cy="134" r="3"/><text class="tg-call__navn" x="120" y="14">Batteriet</text><text class="tg-call__under" x="120" y="28">forvarmes i fx Kia PV5</text></g><g class="tg-call"><line x1="315" y1="110" x2="315" y2="34"/><circle cx="315" cy="110" r="3"/><text class="tg-call__navn" x="290" y="14">Varmepumpe</text><text class="tg-call__under" x="290" y="28">op til 3 gange</text></g><path class="tg-profil" d="M110,160 L110,56 Q110,48 118,48 L300,48 L345,100 L360,108 L360,160 Z"/><rect class="tg-modul" x="150" y="128" width="180" height="12"/><rect class="tg-kuffert" x="300" y="100" width="30" height="20"/><line class="tg-gulvlinje" x1="0" y1="178" x2="400" y2="178"/><circle class="tg-kasse" cx="160" cy="162" r="16"/><circle class="tg-kasse" cx="310" cy="162" r="16"/><rect class="tg-kasse" x="20" y="90" width="24" height="88"/><line class="tg-doer" x1="44" y1="120" x2="110" y2="120"/><g class="tg-call"><line x1="77" y1="120" x2="77" y2="184"/><circle cx="77" cy="120" r="3"/><text class="tg-call__navn" x="0" y="198">Forvarm kabinen på kablet</text><text class="tg-call__under" x="0" y="212">varmen kommer fra nettet</text></g></svg>`,
          tekst: `Skematisk. Varmepumpen, forvarmning af batteriet og forvarmning af kabinen, mens bilen holder på ladekablet. Kilder: ` + a(FDM, "FDM") + `, ` + a(OKV, "OK") + ` og ` + a(KIA, "Kia") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Korte ture og holdetid",
        tekst: [
          `FDM skriver, at strømforbruget pr. kilometer stiger mest på korte ture, fordi bilen bruger meget strøm på at varme kabinen op. På længere ture holder bilen en konstant temperatur, og så bruger den mindre pr. kilometer. En håndværker med mange korte ture mellem kunderne mærker derfor vinteren mere end en chauffør på landevejen.`,
          `Holder bilen stille med varmen tændt, bruger den omkring 1–2 kWh i timen på at holde kabinen varm, viser FDM's egne test. Med 50 kWh tilbage på batteriet kan bilen holde cirka 20 grader i 25–50 timer, hvis den ikke kører.`
        ],
        efter: [
          `Kilde: ` + a(FDM, "FDM: Derfor er elbilens rækkevidde kortere om vinteren") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ladekablet",
        tekst: [
          `Til AC-ladning bruger bilen et Type 2-ladekabel. Renault leverer Master E-Tech med et Type 2-ladekabel til ladeboksen som standard. Ford leverer E-Transit Custom med et ladekabel på 5 m, og et kabel på 10 m koster 1.775 kr. som tilvalg.`,
          `Kablets længde afgør, hvor langt fra ladeboksen bilen kan holde. Det betyder noget, hvis varebilen ikke altid kan parkere på den plads, der er nærmest ladeboksen.`
        ],
        efter: [
          `Kilder: ` + a(RENAULT, "Renault: Prisliste Master E-Tech electric") + ` og ` + a(FORD, "Ford: Prisliste E-Transit Custom") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ladetid i arbejdsdagen",
        tekst: [
          `Ved 11 kW tager det 4 t 50 min til 8 t 30 min at lade de modeller, vi har set på, fra tom eller 10 % til fuld. De fleste kan altså nå at lade op i løbet af en nat på adressen eller hjemme hos medarbejderen.`,
          `Hvad skiftet fra diesel til el betyder for jeres kørsel, kan regnes igennem under <a href="/groen-omstilling/">grøn omstilling</a>. Ladestander på adressen og hjemme står på <a href="/til-varebilen/el-abonnement/ladestander-paa-firmaadressen/">ladestander på firmaadressen</a> og <a href="/til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/">ladestander hjemme hos medarbejderen</a>. Priser på offentlig ladning står i <a href="/til-varebilen/el-abonnement/ladekort-og-offentlig-ladning/">ladekort og offentlig ladning</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren svare på",
    spoergsmaal_manchet: "Så kan ladetiden regnes på den konkrete bil.",
    spoergsmaal: [
      "Bilens AC-lader: 11 eller 22 kW, og om 22 kW er tilvalg.",
      "Om bilen lader på én eller tre faser.",
      "Maksimal DC-effekt og ladetid fra 10 til 80 %.",
      "Om bilen har varmepumpe og forvarmning af batteriet.",
      "Om forvarmning kan styres fra app eller tidsplan.",
      "Ladekablets længde og stiktype."
    ],
    faq: [
      ["Hvor lang tid tager det at lade en elvarebil?", "På en 11 kW-ladeboks tager det fra 4 t 50 min til 8 t 30 min fra tom eller 10 % til fuld for de modeller, vi har tjekket. På en lynlader tager det 24–38 minutter fra 10 eller 15 til 80 %."],
      ["Hvad er forskellen på AC og DC?", "AC bruges hjemme og på adressen, og bilen omformer selv strømmen. DC er lynladning, hvor standeren omformer strømmen."],
      ["Kan man lade en elvarebil i en almindelig stikkontakt?", "Ja, med et mode 2-kabel, men Sikkerhedsstyrelsen anbefaler højst 6 A over længere tid og en ladeboks til daglig brug. En Renault Master E-Tech tager 39,7 timer fra 10 til 100 % i en stikkontakt."],
      ["Kan en elvarebil lade med 22 kW?", "Kun hvis bilens AC-lader kan. Renault Master E-Tech har 22 kW som standard, og Kia PV5 Cargo kan få det som tilvalg. VW ID. Buzz Cargo og Ford E-Transit Custom lader med op til 11 kW AC."],
      ["Hvor meget mindre kører en elvarebil om vinteren?", "FDM skriver, at forbruget typisk stiger 20–30 procent afhængigt af temperatur og vejr."],
      ["Lader en elbil langsommere i kulde?", "Ja. Et koldt batteri tager ikke imod lige så høj strøm, skriver FDM. Batteriet varmes op under opladningen, så i mange elbiler er forskellen lille eller 3–5 minutter."],
      ["Hvor mange kilometer lader en elvarebil på en time?", "En time ved 11 kW giver 44–58 km i Renault Master E-Tech, Ford E-Transit Custom, VW ID. Buzz Cargo og Kia PV5 Cargo, regnet med WLTP-forbruget i producenternes prislister."],
      ["Lader en elvarebil med mindre batteri hurtigere?", "Fra tom til fuld, ja. Kia PV5 Cargo med 51,5 kWh lader på 4 t 50 min ved 11 kW, med 71,2 kWh på 6 t 40 min. Lynladning fra 10 til 80 % tager 30 minutter for begge."],
      ["Må man bruge en forlængerledning til opladning?", "Nej. Standarden HD 60364-7-722 tillader ikke flytbare stikkontakter, så der må ikke være en forlængerledning mellem bilen og stikkontakten, skriver Sikkerhedsstyrelsen."]
    ],
    kilder: [
      { navn: "Clever: Hvad er forskellen på AC- og DC-opladning", url: CLEVER, dato: "2026-10-07" },
      { navn: "Renault: Prisliste Master E-Tech electric (1.10.–31.12.2026)", url: RENAULT, dato: "2026-10-07" },
      { navn: "Volkswagen: Prisliste ID. Buzz Cargo", url: VW, dato: "2026-10-07" },
      { navn: "Ford: Prisliste E-Transit Custom (07-07-2026)", url: FORD, dato: "2026-10-07" },
      { navn: "Kia: Priser PV5 Cargo L2H1", url: KIA, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Opladning af el-biler", url: SIK, dato: "2026-10-07" },
      { navn: "FDM: Derfor er elbilens rækkevidde kortere om vinteren (20.05.2025)", url: FDM, dato: "2026-10-07" },
      { navn: "OK: Elbil om vinteren", url: OKV, dato: "2026-10-07" },
      { navn: "EWII: Ladestander til virksomhed", url: EWII, dato: "2026-10-07" },
      { navn: "Zaptec: Zaptec Pro", url: ZAPTEC, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Clever: kun jævnstrøm kan lade bilens batteri, elnettet har vekselstrøm; ved AC-opladning omformer bilen strømmen, ved DC sker det i ladestanderen eller en transformerstation ved siden af; den typiske elbil har en omformer på op til 11 kW (ved 16 A fordelt på 3 faser), også selvom ladestanderen kan levere 22 kW.", CLEVER],
    ["Clever: Clevers lynladestandere kan levere op til 300 kW; de fleste nyere elbiler kan lade med omkring 100-150 kW, ca. 10-15 gange AC; DC er dyrere, fordi ladestanderen er mere kompleks, og der skal tilføres store mængder strøm; én lynladestander bruger lige så meget strøm som 50 parcelhuse.", CLEVER],
    ["Ford, prisliste E-Transit Custom: AC = hjemmeopladning via type 2-ladestik, DC = hurtigladning via CCS ladestik; AC-ladetid 10-100 % ca. 7 t; ladekabel 5 m 0 kr., ladekabel 10 m 1.775 kr. ekskl. moms; varmepumpe standard (S) i alle udstyrsniveauer.", FORD],
    ["Renault Master E-Tech: Onboard charger AC 22 kW + DC 130 kW er standard på både 3.5T og 4.0T; On board charger 11 kW AC og 130 kW DC kan vælges for 0 kr.; Type 2 ladekabel (Wallbox) er standard.", RENAULT],
    ["RETTET: Renaults prisliste (1.10.-31.12.2026) angiver 3,8 timer fra 10 til 100 % ved 22 kW uden at knytte tallet til 4,0 t-versionen. Den gamle side skrev '3,8 t (4,0 t-versionen)'.", RENAULT],
    ["Zaptec Pro giver op til 22 kW afhængigt af opsætningen og bilen.", ZAPTEC],
    ["Sikkerhedsstyrelsen: opladning med mode 2-kabel i almindelig stikkontakt kaldes ofte mormorladning; belastes stikkontakten med over 6 A i mere end 2 timer, skal den være beregnet til længerevarende høj belastning, og der bør installeres en separat gruppe; HD 60364-7-722 tillader ikke flytbare stikkontakter, så der må ikke bruges forlængerledninger; alternativt mode 2-kabel med industristikprop.", SIK],
    ["Volkswagen ID. Buzz Cargo: rækkevidde 327 km (59 kWh netto, 170 hk) og 449 km (79 kWh netto, 286 hk) efter WLTP; tekniske data angiver AC-ladetid 6,5 og 8,5 timer ved 11 kW wallbox.", VW],
    ["Kia PV5 Cargo: rækkevidde 297 km (51,5 kWh) og 416 km (71,2 kWh) efter WLTP; 22 kW On-Board-Charger som tilvalg til 8.000 kr. ekskl. moms; standard er 11 kW On-Board-Charger, varmepumpe, batterivarmer, Pre-Conditioner til DC-ladning af batteri og fjernstyret opvarmning af kabine.", KIA],
    ["Regneeksempel: Kia PV5 Cargo 416 km WLTP divideret med 1,2-1,3 (20-30 % højere forbrug) giver ca. 320-347 km.", KIA],
    ["Regneeksempel: 150 km med Ford E-Transit Custom (218 Wh/km) er ca. 33 kWh, som tager ca. 3 timer ved 11 kW.", FORD],
    ["AC-ladetider: Kia og Volkswagen opgiver dem fra 0 %, Ford og Renault fra 10 %; lynladning: Renault fra 15 %, VW, Ford og Kia fra 10 %.", FORD],
    ["EWII: Zaptec Pro 22 kW AC-lader giver op til 2 km pr. minut og kan typisk lade op til 100 km på under en time.", EWII],
    ["FDM: batteriet bruger energi på at holde sig selv varmt; lynladning er ikke effektiv, hvis man kører direkte til en lynlader efter en nat i streng kulde; når opladningen starter, varmes batteriet op, så forskellen om vinteren i mange elbiler kan være umålelig eller forlænge opladningen 3-5 minutter; ved hjemmeladning er der ikke stor forskel på ladehastigheden.", FDM],
    ["FDM: det er især opvarmning af kabinen, der kræver meget energi; forvarmning af kabinen, mens bilen lader, giver den længste rækkevidde; strømforbruget pr. km stiger mest på korte ture; en elbil bruger omkring 1-2 kWh i timen på at holde kabinen varm, og med 50 kWh tilbage kan den holde ca. 20 grader i 25-50 timer.", FDM],
    ["OK: lader man udendørs i frostvejr, kan ladestikket fryse fast; OK foreslår at dække ladedækslet til.", OKV]
  ]
};
