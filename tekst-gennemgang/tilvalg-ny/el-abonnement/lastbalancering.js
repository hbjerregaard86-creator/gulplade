// Underside /til-varebilen/el-abonnement/lastbalancering/ (07-10-2026)
var SIK = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/opladning-el-biler`;
var ZPRO = `https://www.zaptec.com/da/ladeloesninger/professionel-opladning/zaptec-pro`;
var ZSENSE = `https://www.zaptec.com/da/ladeloesninger/zaptec-sense`;
var EWII = `https://www.ewii.dk/erhverv/opladning/`;
var OK = `https://www.ok.dk/erhverv/produkter/ladestandere`;
var OKLAST = `https://www.ok.dk/erhverv/produkter/ladestandere/viden/ok-tilbyder-smart-lastbalancering-til-dine-elbiler`;
var OKAMP = `https://www.ok.dk/erhverv/produkter/ladestandere/viden/alt-om-ampere-foer-du-koeber-ladestandere`;
var CLEVER = `https://clever.dk/erhverv/ladeloesninger/ladeudstyr-til-virksomheden/`;
var FORD = `https://katalog.ford.dk/prislister/varebiler/e-transit-custom-van/GetPDF.ashx`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "el-abonnement/lastbalancering",
  side: {
    slug: "lastbalancering",
    navn: "Lastbalancering",
    titel: "Lastbalancering af ladestandere til firmaet",
    kort: `Sådan fordeles strømmen mellem ladestanderne, faserne og bygningen, hvad ekstra ampere koster, og sådan dimensioneres installationen.`,
    beskrivelse: `Lastbalancering af ladestandere: dimensionering efter DS/HD 60364-7-722, ampere og pris, faser, HUB og SAT, Zaptec Sense og udvidelse med flere standere.`,
    manchet: `Når flere varebiler lader på samme adresse, afgør installationens kapacitet ladetiden. Lastbalancering fordeler strømmen mellem ladestanderne og bygningens øvrige forbrug. Her kan du se reglen for dimensionering, et regneeksempel for en flåde, hvordan faserne fordeles, og hvad løsningerne fra OK, EWII og Zaptec kan.`,
    visuel: {
      hero: "el-abonnement",
      hero_el: true,
      kort_fortalt: [
        ["22 kW-udtag", "32 A", "pr. udtag, skriver Clever"],
        ["Samtidighedsfaktor uden styring", "1", "alle standere kan lade med fuld effekt"],
        ["Zaptec Pro kan udvides til", "over 1.000", "ladestandere"],
        ["Øget netkapacitet hos Clever", "16–20 uger", "før installationen er færdig"]
      ],
      toc: true,
      stribe: { drivmiddel: "el", titel: "Elvarebiler med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Hvad lastbalancering gør",
        tekst: [
          `Lastbalancering fordeler den strøm, der er til rådighed, mellem ladestanderne og bygningens øvrige forbrug. Sikkerhedsstyrelsen kalder det belastningsstyring (load sharing), og OK skriver, at det også kaldes lastdeling og load balancing.`,
          `Uden styring skal installationen kunne levere fuld effekt til alle ladestandere på samme tid. Med styring kan virksomheden sætte flere ladeudtag op, end der er ampere til, fordi strømmen bliver delt, når mange biler lader samtidig, skriver OK.`
        ],
        punkter: [
          `<strong>Mod bygningens forbrug.</strong> Zaptec Sense installeres i sikringsskabet, aflæser bygningens strømforbrug og justerer ladehastigheden.`,
          `<strong>Mellem ladestanderne.</strong> Zaptec Pro fordeler strømmen mellem alle tilsluttede biler. EWII, der bruger Zaptec Pro, skriver, at boksen fordeler strømmen mellem flere ladebokse.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Strømmen til rådighed på adressen deles mellem bygningens forbrug og ladestanderne."><text class="tg-fremhaev" x="0" y="16">Strøm til rådighed på adressen</text><rect class="tg-kasse" x="0" y="26" width="150" height="30"/><text x="8" y="46">bygningen</text><rect class="tg-modul" x="150" y="26" width="240" height="30"/><text class="tg-modul__tekst" x="160" y="46">LADESTANDERNE</text><line class="tg-pil" x1="75" y1="56" x2="75" y2="100"/><line class="tg-pil" x1="202" y1="56" x2="202" y2="110"/><line class="tg-pil" x1="272" y1="56" x2="272" y2="110"/><line class="tg-pil" x1="342" y1="56" x2="342" y2="110"/><rect class="tg-rum" x="20" y="100" width="100" height="70"/><rect class="tg-modul" x="40" y="120" width="24" height="16"/><text x="70" y="133">Sense</text><rect class="tg-kasse" x="190" y="110" width="24" height="60"/><rect class="tg-kasse" x="260" y="110" width="24" height="60"/><rect class="tg-kasse" x="330" y="110" width="24" height="60"/><line class="tg-gulvlinje" x1="0" y1="170" x2="400" y2="170"/><text class="tg-lille" x="0" y="192">SENSE AFLÆSER FORBRUGET, PRO FORDELER STRØMMEN</text></svg>`,
          tekst: `Skematisk. Strømmen på adressen deles mellem bygningens forbrug og ladestanderne. Kilder: ` + a(ZSENSE, "Zaptec Sense") + ` og ` + a(ZPRO, "Zaptec Pro") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dimensionering uden styring",
        tekst: [
          `Uden belastningsstyring regner man efter DS/HD 60364-7-722 med samtidighedsfaktor 1, altså at alle ladestandere kører fuld effekt samtidig. Clever skriver, at 22 kW kræver 32 ampere pr. udtag, og at Clevers ladepunkter skal bruge mellem 8 og 32 ampere.`,
          `Samtidighedsfaktoren er den andel af ladestanderne, man regner med lader på samme tid. Med faktor 1 regner man med dem alle sammen. Fem ladeudtag på 22 kW kræver derfor 160 A, når der ikke er styring.`,
          `Sikkerhedsstyrelsen skriver, at belastningsstyring kan være nødvendig, hvis forsyningsselskabet ikke kan levere tilstrækkelig effekt, eller af hensyn til økonomien i installationen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Pr. 22 kW-udtag", "32", "A"],
            ["Fem udtag uden styring", "160", "A"],
            ["Samtidighedsfaktor uden styring", "1", ""]
          ],
          note: `Regneeksempel. Kilder: ` + a(SIK, "Sikkerhedsstyrelsen") + ` og ` + a(CLEVER, "Clever") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Når en bil mere kobler på",
        tekst: [
          `OK viser i et eksempel, hvad der sker, når strømmen ikke rækker til alle. Fire biler lader med næsten fuld effekt på 11 kW, svarende til 16 ampere. Når en femte bil bliver koblet til, falder alle fem biler til cirka 8,5 kW.`,
          `Når en af bilerne er fuldt opladt, får de andre fuld effekt igen, skriver OK. Bilerne lader altså langsommere i en periode, men virksomheden behøver ikke nødvendigvis købe flere ampere.`,
          `OK's erfaring er, at de fleste biler lader om natten eller i arbejdstiden og typisk først bliver flyttet efter 6–8 timer. OK skriver også, at der i mange tilfælde er ledige ladepunkter, så bilerne for det meste kan lade med fuld effekt, før lastbalanceringen træder til.`
        ],
        figur: {
          type: "soejler",
          enhed: "kW pr. bil",
          data: [
            ["Fire biler lader", 11, "næsten fuld effekt, 16 A pr. bil"],
            ["En femte bil kobles til", 8.5, "cirka, for alle fem biler"]
          ],
          note: `Eksempel fra OK. Kilde: ` + a(OKLAST, "OK: Smart lastbalancering til dine elbiler") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ampere og pris",
        tekst: [
          `Ampere er et mål for, hvor meget strøm der løber gennem ledningerne. OK skriver, at der typisk skal være 16 ampere i overskud til at lade en elbil. Er der ikke nok, kan sikringen springe, eller bilerne må lade langsommere.`,
          `Fire ladeudtag på 11 kW kræver en forsyning på 64 ampere, hvis alle skal lade med fuld effekt på én gang. Flere ampere købes hos forsyningsselskabet, og OK anslår, at én ekstra ampere koster cirka 1.400 kr. Den præcise pris får man hos det lokale forsyningsselskab.`,
          `Med OK's cirkapris koster de 16 ampere, der skal til for én bil mere, cirka 22.400 kr. Det er et regneeksempel, og prisen kan være en anden i dit område. OK skriver også, at der i mange kommuner er flere måneders ventetid.`,
          `En elinstallatør kan gennem forsyningsnettet se, hvor mange ampere virksomheden har til rådighed, og hvor mange den bruger, når forbruget er størst, skriver OK.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Overskud til én elbil, typisk", 16, "A"],
            ["Fire 11 kW-udtag med fuld effekt", 64, "A"],
            ["Én ekstra ampere, cirka", "1.400", "kr."]
          ],
          note: `OK's pris er en cirkapris, og OK skriver ikke, om den er med moms. Kilder: ` + a(OKAMP, "OK: Alt om ampere, før du køber ladestandere") + ` og ` + a(OKLAST, "OK: Smart lastbalancering") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Et regneeksempel for en flåde",
        tekst: [
          `Et regneeksempel med OK's tal viser, hvad lastbalancering betyder for en flåde. Ti varebiler skal lade om natten ved firmaets adresse, og der er 64 ampere til ladestanderne. Det svarer til fire ladeudtag på 11 kW, altså 44 kW i alt.`,
          `Lader alle ti biler samtidig, og strømmen fordeles ligeligt, får hver bil cirka 4,4 kW. På 6–8 timer bliver det til 26–35 kWh pr. bil. Med WLTP-forbruget for Ford E-Transit Custom på 218 Wh pr. km svarer det til cirka 120–160 km. Eksemplet ser bort fra tab ved opladningen.`,
          `Uden styring skulle ti udtag på 11 kW have 160 ampere. Kører bilerne kortere end det hver dag, kan de altså lade op om natten på en fjerdedel af den strøm, en installation uden styring skal have.`
        ],
        efter: [
          `Kilder: ` + a(OKAMP, "OK: Alt om ampere") + `, ` + a(OKLAST, "OK: Smart lastbalancering") + ` og ` + a(FORD, "Ford: Prisliste E-Transit Custom") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Faserne",
        tekst: [
          `De fleste bygninger har tre faser, og mange elbiler lader kun på én fase, skriver Zaptec. Lader flere biler på samme fase, falder ladehastigheden. Dynamisk fasebalancering fordeler bilerne på alle tre faser, og afhængigt af bilen kan laderen skifte mellem en- og trefaset ladning. EWII kalder funktionen automatisk faserotation.`,
          `Zaptec beskriver den dynamiske fasebalancering, som om bilerne blev flyttet rundt på parkeringspladsen, så alle tre faser bliver brugt ligeligt. I Zaptec Portal kan virksomheden se status på fasekapaciteten i realtid.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Faserotation: tre enfasede biler fordelt på hver sin af de tre faser"><text x="10" y="20" class="tg-fremhaev">Tre 1-fasede biler, tre faser</text><rect x="10" y="40" width="60" height="150" class="tg-kasse"/><text x="40" y="206" text-anchor="middle">Tavle</text><line x1="70" y1="70" x2="390" y2="70" class="tg-gulvlinje"/><line x1="70" y1="110" x2="390" y2="110" class="tg-gulvlinje"/><line x1="70" y1="150" x2="390" y2="150" class="tg-gulvlinje"/><text x="78" y="64">L1</text><text x="78" y="104">L2</text><text x="78" y="144">L3</text><line x1="160" y1="70" x2="160" y2="180" class="tg-skinne-tynd"/><line x1="250" y1="110" x2="250" y2="180" class="tg-skinne-tynd"/><line x1="340" y1="150" x2="340" y2="180" class="tg-skinne-tynd"/><circle cx="160" cy="70" r="4" class="tg-modul"/><circle cx="250" cy="110" r="4" class="tg-modul"/><circle cx="340" cy="150" r="4" class="tg-modul"/><rect x="140" y="180" width="40" height="36" class="tg-kasse"/><rect x="230" y="180" width="40" height="36" class="tg-kasse"/><rect x="320" y="180" width="40" height="36" class="tg-kasse"/><text x="160" y="203" text-anchor="middle">A</text><text x="250" y="203" text-anchor="middle">B</text><text x="340" y="203" text-anchor="middle">C</text><text x="250" y="234" text-anchor="middle" class="tg-lille">Hver ladestander på sin egen fase</text></svg>`,
          tekst: `Skematisk. Faserotation med tre enfasede biler på hver sin fase. Kilder: ` + a(ZPRO, "Zaptec") + ` og ` + a(EWII, "EWII") + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Mod bygningens forbrug",
        tekst: [
          `Zaptec Sense installeres i sikringsskabet og aflæser bygningens strømforbrug. Bruger bygningen mindre strøm, øger Sense ladehastigheden, og er forbruget højt, sænker den strømmen til opladningen.`,
          `Formålet er at beskytte bygningens sikringer, så installationen aldrig bliver overbelastet. Zaptec skriver, at man også kan sætte en grænse for forbruget, så bilen lader, når strømmen er billigst.`,
          `I Danmark sælges Sense som Sense GEN Bundle. Uden styring sætter elinstallatøren effekten ned for at undgå, at afbryderen slår fra. Så lader bilen med den lavere effekt, også når bygningen bruger lidt strøm.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Skematisk diagram over et døgn. Bygningens forbrug svinger op og ned, og Zaptec Sense lader bilen med den strøm, der er tilbage op til grænsen for bygningen."><path class="tg-modul" d="M40,140 C80,140 100,100 140,110 C180,120 200,80 240,90 C280,100 300,130 340,135 L380,135 L380,50 L40,50 Z"/><path class="tg-kasse" d="M40,180 L40,140 C80,140 100,100 140,110 C180,120 200,80 240,90 C280,100 300,130 340,135 L380,135 L380,180 Z"/><line class="tg-skinne" x1="40" y1="50" x2="380" y2="50"/><line class="tg-skillevaeg" x1="40" y1="30" x2="40" y2="180"/><line class="tg-gulvlinje" x1="40" y1="180" x2="380" y2="180"/><text class="tg-lille" x="44" y="42">GRÆNSE FOR BYGNINGEN</text><text class="tg-modul__tekst" x="150" y="76">OPLADNING</text><text x="150" y="160">Bygningens øvrige forbrug</text><text class="tg-lille" x="40" y="200">TID PÅ DØGNET</text></svg>`,
          tekst: `Skematisk. Sense øger ladningen, når bygningen bruger lidt strøm, og sænker den, når forbruget er højt. Den stiplede linje er grænsen for bygningen. Kilde: ` + a(ZSENSE, "Zaptec Sense") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Master og satellitter",
        tekst: [
          `OK tilbyder lastbalancering med ladestanderen EVBox Businessline. Den første ladestander på adressen er en HUB, også kaldet master, og den styrer de andre. De øvrige ladestandere er satellitter, SAT, som bliver koblet til HUB'en.`,
          `Der kan højst kobles ni SAT'er til én HUB, svarende til 20 ladepunkter. Skal der være flere, skal der sættes en ny HUB op.`,
          `Zaptec Pro har dynamisk fase- og lastbalancering, som fordeler strømmen mellem alle tilsluttede biler, og systemet kan udvides fra én til over 1.000 ladestandere. EWII skriver, at Zaptec Pro fordeler strømmen mellem flere ladebokse, så de ikke bliver overbelastet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="En HUB-ladestander styrer op til ni satellitladestandere, svarende til 20 ladepunkter."><rect class="tg-modul" x="10" y="70" width="80" height="50"/><text class="tg-modul__tekst" x="50" y="99" text-anchor="middle">HUB</text><text class="tg-lille" x="50" y="138" text-anchor="middle">MASTER</text><line class="tg-pil" x1="90" y1="95" x2="170" y2="26"/><line class="tg-pil" x1="90" y1="95" x2="170" y2="68"/><line class="tg-pil" x1="90" y1="95" x2="170" y2="110"/><line class="tg-skinne-tynd" x1="90" y1="95" x2="170" y2="172"/><rect class="tg-kasse" x="170" y="8" width="70" height="36"/><text x="205" y="30" text-anchor="middle">SAT 1</text><rect class="tg-kasse" x="170" y="50" width="70" height="36"/><text x="205" y="72" text-anchor="middle">SAT 2</text><rect class="tg-kasse" x="170" y="92" width="70" height="36"/><text x="205" y="114" text-anchor="middle">SAT 3</text><text x="205" y="144" text-anchor="middle">…</text><rect class="tg-kasse" x="170" y="154" width="70" height="36"/><text x="205" y="176" text-anchor="middle">SAT 9</text><text class="tg-fremhaev" x="262" y="76">Højst ni SAT</text><text x="262" y="96">pr. HUB, svarende</text><text x="262" y="114">til 20 ladepunkter</text></svg>`,
          tekst: `Skematisk. OK's løsning med EVBox Businessline. Kilde: ` + a(OKLAST, "OK: Smart lastbalancering til dine elbiler") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Når nettet ikke rækker",
        tekst: [
          `Sikkerhedsstyrelsen nævner belastningsstyring som en løsning, hvis forsyningsselskabet ikke kan levere tilstrækkelig effekt. Styringen kan også spare tid, fordi det tager længere at få mere strøm end at sætte ladestandere op.`,
          `Hos Clever tager en installation typisk 4–7 uger fra accept til færdig installation. Skal der sættes en måler op fra forsyningsselskabet, tager det 8–12 uger. Skal netkapaciteten øges, tager det typisk 16–20 uger, fordi forsyningsselskaberne ofte har en leveringstid på 8–12 uger.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Typisk installation", "4–7", "uger"],
            ["Ny måler", "8–12", "uger"],
            ["Øget netkapacitet", "16–20", "uger"]
          ],
          note: `Tallene er Clevers installationstid fra accept til færdig installation. Kilde: ` + a(CLEVER, "Clever: Ladeudstyr til virksomheden") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Flere ladestandere senere",
        tekst: [
          `Zaptec skriver, at man kan starte med to ladestandere og senere udvide med fem, 15, 50 eller 200 uden væsentlige eller dyre indgreb, uanset om det sker om et, tre eller ti år. Zaptec Pro kan udvides fra én til over 1.000 ladestandere.`,
          `Zaptec Pro Backplate er en bagplade, der bliver installeret sammen med infrastrukturen. Når bagpladen sidder der, er det primære installationsarbejde gjort, og ladestanderen kan sættes på senere.`,
          `I en offentlig parkeringskælder kan installationen udføres med kanalskinner og forberedes til mange 22 kW-ladestandere, skriver Sikkerhedsstyrelsen. Installationen kan så udvides, efterhånden som der kommer flere elbiler.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Bagpladen", "Zaptec Pro Backplate installeres sammen med infrastrukturen."],
            ["To ladestandere", "Man kan starte med to, skriver Zaptec."],
            ["Over 1.000", "Zaptec Pro kan udvides til over 1.000 ladestandere."]
          ]
        },
        efter: [
          `Kilder: ` + a(ZPRO, "Zaptec Pro") + ` og ` + a(SIK, "Sikkerhedsstyrelsen") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Krav til installationen",
        tekst: [
          `Kapitel 722 i DS/EN 60364-serien beskriver, hvilken fejlstrømsafbryder (RCD) installationen skal have. Sikkerhedsstyrelsen skriver, at man som udgangspunkt kan bruge en RCD type B, som kan håndtere rene DC-reststrømme. Har ladestanderen ikke en indbygget blokering mod DC-reststrømme, er en RCD type B et oplagt valg.`,
          `Når en ladeboks bliver installeret, skal installationen verificeres, og Sikkerhedsstyrelsen viser i en video, hvordan RCD'en testes. Dimensioneringen med eller uden belastningsstyring står i samme vejledning.`
        ],
        efter: [
          `Kilde: ` + a(SIK, "Sikkerhedsstyrelsen: Opladning af el-biler") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Måling pr. ladepunkt",
        tekst: [
          `Zaptec Pro (MID) har et indbygget måleinstrument efter EU's Measuring Instruments Directive, og forbruget pr. opladning vises på standerens display. Zaptec skriver, at MID-certificerede ladestandere er et krav i flere europæiske lande og valgfrit i andre.`,
          `Refusion af elafgift kræver en måler i ladestanderen. Reglerne og beløbene står hos Skattestyrelsen, og ordningen er forklaret i <a href="/til-varebilen/el-abonnement/refusion-af-elafgift/">refusion af elafgift</a>.`
        ]
      },
      {
        overskrift: "Afregning af strømmen",
        tekst: [
          `Hos Clever kan strømmen til ladestanderne afregnes på to måder. Med en særskilt måler, der går uden om bygningens eltavle, afregner Clever forbruget direkte, fordi måleren er tilmeldt Clevers elselskab, Clever Power.`,
          `Går strømmen i stedet gennem bygningens eltavle, betaler virksomheden først hele forbruget til sit elselskab. Bagefter bliver den strøm, der er brugt til opladning, afregnet med Clever til den gældende afregningssats.`,
          `Valget påvirker også installationstiden. Clever skriver, at en måler fra forsyningsselskabet kan trække installationen ud til 8–12 uger.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "Særskilt måler", "Gennem bygningens eltavle"],
          raekker: [
            ["Måleren", "går uden om bygningens eltavle", "bygningens egen"],
            ["Strømmen til opladning", "afregnes direkte af Clever Power", "afregnes med Clever til afregningssatsen"],
            ["Installationstid hos Clever", "8–12 uger med måler fra forsyningsselskabet", "typisk 4–7 uger"]
          ],
          note: `Kilde: ` + a(CLEVER, "Clever: Ladeudstyr til virksomheden") + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Styring og rapporter",
        tekst: [
          `En ladeløsning til flere biler bliver styret fra en portal, hvor virksomheden kan se forbruget og ændre indstillingerne. Zaptec skriver, at de fleste sager kan løses eksternt, fordi Zaptec Portal ligger i skyen.`,
          `EWII sætter tre prisgrupper op i sin opladningsapp, så medarbejdere, gæster og offentligheden kan betale forskellige priser. Med EWII's serviceaftale får virksomheden adgang til forbrugsdata i realtid, og der skal købes en aftale til hver ladeboks.`
        ],
        punkter: [
          `<strong>Portal.</strong> I Zaptec Portal kan du tilføje ladestandere og brugere, ændre indstillinger og se fasekapaciteten i realtid.`,
          `<strong>Forbrug pr. bruger.</strong> Portalen viser forbrug pr. bruger og laderapporter.`,
          `<strong>Forbindelse.</strong> Zaptec Pro kører på wi-fi eller 4G LTE-M og opdateres trådløst.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Kilder: ` + a(ZPRO, "Zaptec Pro") + ` og ` + a(EWII, "EWII: Ladestander til virksomhed") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "OK, EWII og Zaptec",
        tekst: [
          `Flere ladeselskaber sælger lastbalancering som en del af en samlet løsning med installation og service. OK skriver, at prisen afhænger af, hvor mange ladestandere virksomheden vil have, og om den vil eje eller leje dem.`
        ],
        kort: [
          ["OK", "OK leverer ladeløsninger til virksomheder med drift og service og tilbyder lastbalancering med EVBox Businessline."],
          ["EWII", "EWII leverer Zaptec Pro på 22 kW med lastbalancering og faserotation. Serviceaftalen koster 69 kr. om måneden ekskl. moms pr. boks."],
          ["Zaptec Sense", "Zaptec Sense balancerer ladningen mod bygningens forbrug. I Danmark sælges den som Sense GEN Bundle."]
        ],
        efter: [
          `Kilder: ` + a(OK, "OK") + `, ` + a(EWII, "EWII") + ` og ` + a(ZSENSE, "Zaptec") + `, set den 4. oktober 2026, og ` + a(OKLAST, "OK: Smart lastbalancering") + `, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hjemme hos medarbejderen",
        tekst: [
          `Zaptec Sense tilpasser ladningen til husstandens øvrige forbrug, så sikringerne ikke udløses. Uden styring nedsætter elinstallatøren effekten, skriver Zaptec.`,
          `Hjemme har huset typisk én hovedsikring til både husholdningen og ladeboksen, så bilen konkurrerer med komfur, vaskemaskine og varmepumpe om den samme strøm. Du kan læse om afregning af strømmen under <a href="/til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/">ladestander hjemme hos medarbejderen</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal elinstallatøren vide",
    spoergsmaal_manchet: "Så kan installationen dimensioneres til flåden.",
    spoergsmaal: [
      "Antal ladepunkter i dag og ved fuld udbygning.",
      "Bygningens hovedsikring og øvrige forbrug.",
      "Bilernes AC-lader: en- eller trefaset, 11 eller 22 kW.",
      "Hvornår bilerne holder stille og skal være ladet.",
      "Om der skal være en særskilt måler til ladestanderne.",
      "Om forbruget skal måles pr. ladepunkt til refusion af elafgift."
    ],
    faq: [
      ["Hvad er lastbalancering på ladestandere?", "Det er styring, der fordeler den tilgængelige strøm mellem ladestanderne og bygningens øvrige forbrug. Sikkerhedsstyrelsen kalder det belastningsstyring, og det kaldes også lastdeling og load sharing."],
      ["Er lastbalancering et krav?", "Nej. Uden belastningsstyring dimensioneres installationen efter DS/HD 60364-7-722 med samtidighedsfaktor 1, så alle ladestandere kan køre fuld effekt samtidig."],
      ["Hvad sker der, når flere biler lader, end strømmen rækker til?", "Strømmen bliver fordelt, så bilerne lader langsommere. I OK's eksempel lader fire biler med næsten 11 kW, og når en femte kobles til, falder alle til cirka 8,5 kW. Når en bil er fuld, får de andre fuld effekt igen."],
      ["Hvad koster ekstra ampere?", "OK anslår cirka 1.400 kr. pr. ampere og henviser til det lokale forsyningsselskab for den præcise pris. Der skal typisk være 16 ampere i overskud til at lade én elbil."],
      ["Hvad er fasebalancering?", "Det betyder, at bilerne fordeles på bygningens tre faser. Mange elbiler lader kun på én fase, og dynamisk fasebalancering udnytter alle tre, skriver Zaptec."],
      ["Hvor mange ladestandere kan styres sammen?", "Hos OK kan én HUB styre op til ni SAT'er, svarende til 20 ladepunkter. Zaptec Pro kan udvides fra én til over 1.000 ladestandere."],
      ["Kan man starte med få ladestandere og udvide senere?", "Ja. Zaptec Pro kan udvides fra én til over 1.000 ladestandere, og en bagplade kan installeres, før selve standeren sættes op."],
      ["Findes der lastbalancering til hjemmeladning?", "Ja. Zaptec Sense installeres i sikringsskabet og justerer ladehastigheden efter husstandens forbrug."]
    ],
    kilder: [
      { navn: "Sikkerhedsstyrelsen: Opladning af el-biler", url: SIK, dato: "2026-10-07" },
      { navn: "Zaptec: Zaptec Pro", url: ZPRO, dato: "2026-10-07" },
      { navn: "Zaptec: Zaptec Sense", url: ZSENSE, dato: "2026-10-07" },
      { navn: "EWII: Ladestander til virksomhed", url: EWII, dato: "2026-10-07" },
      { navn: "OK: Ladestander til erhverv", url: OK, dato: "2026-10-07" },
      { navn: "OK: Smart lastbalancering til dine elbiler", url: OKLAST, dato: "2026-10-07" },
      { navn: "OK: Alt om ampere, før du køber ladestandere", url: OKAMP, dato: "2026-10-07" },
      { navn: "Clever: Ladeudstyr til virksomheden", url: CLEVER, dato: "2026-10-07" },
      { navn: "Ford: Prisliste E-Transit Custom", url: FORD, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["OK: lastbalancering kaldes også lastdeling, load sharing og load balancing; har man ikke ampere nok, kan man lastbalancere og oplade med flere ladeudtag, end man har ampere til.", OKLAST],
    ["OK tilbyder lastbalancering med EVBox Businessline som HUB/SAT-løsning: den første ladestander er en HUB (master), der styrer de øvrige (SAT); højst ni SAT'er pr. HUB, svarende til 20 ladepunkter; derefter en ny HUB.", OKLAST],
    ["OK's eksempel: fire biler lader med næsten fuld ladeeffekt på 11 kW (16 ampere); når en femte bil kobles til, falder alle til ca. 8,5 kW.", OKLAST],
    ["OK: med lastbalancering fordeles de ampere, man har, ligeligt på bilerne, og når en bil er fuldt opladt, får de resterende fuld effekt igen.", OKAMP],
    ["OK's erfaring: de fleste oplader hen over natten eller i arbejdstiden, hvor bilen typisk først flyttes efter 6-8 timer; i mange tilfælde er der ledige ladepunkter, så bilerne for det meste kan lade med fuld effekt, før lastbalanceringen træder til.", OKLAST],
    ["OK: typisk skal man have 16 ampere i overskud for at oplade en elbil, ellers kan sikringen springe, eller man må lade langsommere; fire ladeudtag på 11 kW kræver en forsyning på 64 ampere ved fuld effekt på én gang; én ekstra ampere koster ca. 1.400 kr. (cirkapris, præcis pris hos lokalt forsyningsselskab); i mange kommuner er der måneders ventetid; en elektriker kan gennem forsyningsnettet se, hvor mange ampere man har, og hvor mange man bruger, når man bruger flest.", OKAMP],
    ["Regneeksempel: 16 ampere med OK's cirkapris på 1.400 kr. pr. ampere er ca. 22.400 kr.", OKAMP],
    ["Regneeksempel: 64 A svarer efter OK til fire 11 kW-udtag (44 kW); fordelt ligeligt på ti biler er det 4,4 kW pr. bil, på 6-8 timer 26,4-35,2 kWh; med Ford E-Transit Customs WLTP-forbrug på 218 Wh pr. km er det ca. 121-161 km; uden styring kræver ti 11 kW-udtag 10 x 16 = 160 A.", FORD],
    ["Sikkerhedsstyrelsen: belastningsstyring kan fx være nødvendig, hvis forsyningsselskabet ikke kan levere tilstrækkelig effekt, eller af hensyn til økonomien i installationen.", SIK],
    ["Clever: Clevers ladepunkter skal bruge mellem 8 og 32 ampere; mangler der ampere, skal de købes hos forsyningsselskabet, hvilket kan kræve udbygning af elinstallationen.", CLEVER],
    ["Clever: en installation tager typisk 4-7 uger fra accept til færdig installation; med en måler fra tredjepart (forsyningsselskabet) 8-12 uger; skal der tilføres ny strøm, har forsyningsselskaberne ofte 8-12 ugers leveringstid, samlet typisk 16-20 uger.", CLEVER],
    ["Clever: virksomheden kan få en særskilt måler uden om bygningens eltavle, tilmeldt Clever Power, så Clever afregner forbruget til opladning direkte; eller strømmen går gennem eltavlen, virksomheden betaler selv forbruget, og strømmen til opladning afregnes med Clever til den gældende afregningssats.", CLEVER],
    ["Zaptec Pro: dynamisk fase- og lastbalancering fordeler strømmen blandt alle køretøjer; man kan starte med to og udvide med fem, 15, 50 eller 200 ladestandere uden væsentlige eller dyre indgreb, uanset om det sker om et, tre eller ti år; når Backplate er installeret, er det primære infrastrukturarbejde fuldført.", ZPRO],
    ["Zaptec: dynamisk fasebalancering er, som om man fysisk flytter bilerne på parkeringspladsen for at udnytte alle tre faser ligeligt; Zaptec Portal viser status på fasekapacitet i realtid; fordi portalen er en cloud-platform, kan de fleste sager løses eksternt; MID-certificerede ladestandere er et krav i flere europæiske lande og valgfrit i andre.", ZPRO],
    ["Zaptec Sense: når bygningen bruger mindre strøm, øges opladningshastigheden, og ved højt forbrug reduceres den; Sense beskytter bygningens sikringer, så systemet aldrig overbelastes; man kan indstille forbrugsgrænsen, så man oplader, når strømprisen er billigst; uden styring nedsætter en elinstallatør effekten for at undgå strømafbrydelser.", ZSENSE],
    ["Sikkerhedsstyrelsen: kapitel 722 i DS/EN 60364-serien beskriver RCD-typen; som udgangspunkt kan man bruge RCD type B, der kan håndtere rene DC-reststrømme; har ladestanderen ikke indbygget blokering mod DC-reststrømme, er RCD type B et oplagt valg; ved installation af en ladeboks skal installationen verificeres (RCD-test vist i video).", SIK],
    ["EWII: Zaptec Pro kan lastbalancere og fordeler strømmen mellem flere ladebokse, så overbelastning undgås; EWII opsætter 3 prisgrupper, og der kan sættes forskellige priser for medarbejdere, gæster og offentligheden; serviceaftalen giver fuld adgang til forbrugsdata i realtid og skal købes til hver ladeboks.", EWII],
    ["OK: prisen på en ladestanderløsning til erhverv afhænger af, hvor mange ladestandere man ønsker, og hvilket ansvar og ejerskab man ønsker (eje- eller leje-løsning).", OK]
  ]
};
