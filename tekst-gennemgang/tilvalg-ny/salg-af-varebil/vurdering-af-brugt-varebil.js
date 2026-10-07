// /til-varebilen/salg-af-varebil/vurdering-af-brugt-varebil/ (07-10-2026)
var MST = `https://motorst.dk/erhverv/selvanmelder/saadan-vaerdifastsaetter-du-koeretoejer/vaerdifastsaettelse-af-brugte-varebiler`;
var MST_GENERELT = `https://motorst.dk/erhverv/selvanmelder/saadan-vaerdifastsaetter-du-koeretoejer/generelle-regler-om-vaerdifastsaettelse`;
var MST_DMR = `https://motorst.dk/erhverv/motorregistret-for-virksomheder/om-motorregistret`;
var FS_PERIODISK = `https://www.fstyr.dk/privat/syn/periodisk-syn`;
var FS_REG = `https://www.fstyr.dk/privat/syn/registreringssyn`;
var KV_EKS = `https://www.klaravik.dk/auction/product/kassevogn-med-lift/`;

var MST_LINK = `<a href="` + MST + `" rel="noopener">Motorstyrelsen: Værdifastsættelse af brugte varebiler</a>`;

module.exports = {
  id: "salg-af-varebil/vurdering-af-brugt-varebil",
  side: {
    slug: "vurdering-af-brugt-varebil",
    navn: "Vurdering af brugt varebil",
    titel: "Vurdering af brugt varebil: hvad afgør prisen",
    kort: `Hvad der afgør prisen på en brugt varebil, hvordan Motorstyrelsen finder handelsprisen, og hvor bilen kan sælges.`,
    beskrivelse: `Hvad er din brugte varebil værd? Se Motorstyrelsens metode med 5 % i rabat og regler for kilometer, stand og udstyr, og hvor bilen kan sælges.`,
    manchet: `En brugt varebil prissættes ved at sammenligne med tilsvarende biler til salg og regulere for kilometer, stand og udstyr. Det er også den metode, Motorstyrelsen bruger, når den værdifastsætter brugte varebiler. Her kan du se reglerne med Motorstyrelsens egne regneeksempler, og hvor bilen kan sælges.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Forhandlerrabat", "−5 %", "i Motorstyrelsens handelspris"],
        ["Kilometer", "Over 10 %", "afvigelse ved biler op til 10 år"],
        ["Stand", "±2 %", "over eller under middel"],
        ["Udstyr efter 5 år", "20 %", "af nyprisen"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det afgør prisen",
        tekst: [
          `Prisen på en brugt varebil afhænger først og fremmest af, hvad tilsvarende biler koster i annoncer lige nu. Derefter trækker kilometer, stand, udstyr og servicehistorik prisen op eller ned. Motorstyrelsen bruger de samme forhold, når den værdifastsætter brugte varebiler, og dens regler viser derfor, hvordan markedet regner.`,
          `Indretning og opbygning tæller på en anden måde. Reoler, lift, lad og køl har kun værdi for en køber, der kan bruge dem. De samme hylder kan altså hæve prisen hos én køber og være uden betydning hos en anden.`
        ],
        tabel: {
          kolonner: ["Faktor", "Hvad der tæller"],
          raekker: [
            ["Model og årgang", "Sammenlignelige biler til salg, og om der har været modelskifte eller facelift"],
            ["Kilometer", "Afvigelse fra tilsvarende biler"],
            ["Stand", "Skader, slid i varerum og kabine, dæk"],
            ["Udstyr", "Ekstraudstyr fra fabrikken, nedskrevet med alderen"],
            ["Indretning og opbygning", "Reoler, lift, lad og køl, og om køberen kan bruge dem"],
            ["Service", "Dokumenteret servicehistorik"],
            ["Brug", "Fx skiftende chauffører"]
          ],
          note: `Kilde: ` + MST_LINK + `, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 250" role="img" aria-label="Varebil med fire forhold, Motorstyrelsen regulerer for i værdifastsættelsen: radio og navigation, stand, kilometer og trækkrog."><path class="tg-rum" d="M40,170 L40,136 Q42,118 60,112 L95,100 L120,62 Q124,56 132,56 L370,56 Q378,56 378,64 L378,170 Z"/><path class="tg-kasse" d="M124,68 L166,68 L166,100 L104,100 Z"/><line class="tg-skinne-tynd" x1="170" y1="60" x2="170" y2="166"/><line class="tg-skinne-tynd" x1="250" y1="60" x2="250" y2="166"/><rect class="tg-kasse" x="34" y="150" width="16" height="20" rx="2"/><rect class="tg-kasse" x="372" y="150" width="10" height="20" rx="2"/><line class="tg-gulvlinje" x1="16" y1="192" x2="404" y2="192"/><circle class="tg-profil" cx="95" cy="172" r="20"/><circle class="tg-kasse" cx="95" cy="172" r="8"/><circle class="tg-profil" cx="320" cy="172" r="20"/><circle class="tg-kasse" cx="320" cy="172" r="8"/><rect class="tg-profil" x="380" y="160" width="14" height="4"/><circle class="tg-profil" cx="398" cy="160" r="4"/><g class="tg-call"><line x1="140" y1="84" x2="140" y2="36"/><circle cx="140" cy="84" r="3"/><text x="40" y="18" class="tg-call__navn">Radio og navigation</text><text x="40" y="32" class="tg-call__under">kun værdi over 18.000 kr.</text></g><g class="tg-call"><line x1="290" y1="110" x2="290" y2="36"/><circle cx="290" cy="110" r="3"/><text x="232" y="18" class="tg-call__navn">Stand</text><text x="232" y="32" class="tg-call__under">±2 % over eller under middel</text></g><g class="tg-call"><line x1="95" y1="186" x2="95" y2="210"/><circle cx="95" cy="186" r="3"/><text x="20" y="222" class="tg-call__navn">Kilometer</text><text x="20" y="236" class="tg-call__under">reguleres over 10 % afvigelse</text></g><g class="tg-call"><line x1="398" y1="166" x2="404" y2="210"/><circle cx="398" cy="166" r="3"/><text x="410" y="222" class="tg-call__navn" text-anchor="end">Trækkrog</text><text x="410" y="236" class="tg-call__under" text-anchor="end">ses bort fra efter 1 år</text></g></svg>`,
          tekst: `Skematisk. Fire forhold, Motorstyrelsen regulerer for ved brugte varebiler. Kilde: Motorstyrelsen, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Nypris og handelspris",
        tekst: [
          `Motorstyrelsen arbejder med to priser. Nyprisen er den pris, der var markedsdannende for varebilen, da den var ny, med ekstraudstyr fra fabrikken. Den kan sættes til bilens listepris, altså den officielle vejledende udsalgspris med udstyr.`,
          `Handelsprisen er den pris, en køber må forvente at betale for en tilsvarende varebil på det danske marked. Det er den pris, der betyder noget, når du sælger. Nyprisen skal bruges, når en brugt varebil værdifastsættes i Motorregistret, og udstyrets nypris er grundlaget, når udstyret nedskrives med bilens alder.`,
          `I Motorstyrelsens eksempel har en 5 år gammel varebil en markedsdannende nypris på 455.597 kr. Læderkabine, parkeringshjælp og sædevarme lægger 54.415 kr. oveni, så nyprisen i alt er 510.012 kr.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Markedsdannende nypris", "455.597", "kr."],
            ["Ekstraudstyr i alt", "54.415", "kr."],
            ["Nypris i alt", "510.012", "kr."]
          ],
          note: `Motorstyrelsens eksempel med en 5 år gammel varebil, der har kørt 99.000 km. Kilde: ` + MST_LINK + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan finder Motorstyrelsen handelsprisen",
        tekst: [
          `Motorstyrelsens regler for værdifastsættelse af brugte varebiler bruges til registreringsafgiften. De viser, hvordan markedsprisen findes. Som hovedregel bruger Motorstyrelsen forhandlerannoncer. Privatannoncer må kun bruges af en særlig grund, fx når modellen mest handles mellem private, og de 5 % i rabat trækkes også fra dem.`,
          `Gennemsnittet af annoncerne efter rabatten kaldes handelsprisniveauet. Fra det niveau lægger Motorstyrelsen til eller trækker fra for stand, kilometer, udstyr og særlig anvendelse.`
        ],
        punkter: [
          `<strong>Annoncer.</strong> Prisen findes ud fra forhandlerannoncer for tilsvarende eller sammenlignelige varebiler.`,
          `<strong>Rabat.</strong> Annonceprisen reguleres med −5 % som skønnet gennemsnitlig forhandlerrabat.`,
          `<strong>Fravalg.</strong> Annoncerne med de laveste og højeste priser, engrosannoncer og biler med over 90 liggedage holdes ude.`,
          `<strong>Stand.</strong> Over middel giver +2 %, under middel −2 %.`,
          `<strong>Kilometer.</strong> Der reguleres, når kilometerstanden afviger mere end 10 % fra sammenligningsbilerne.`,
          `<strong>Skiftende chauffører.</strong> Kan give −5 %, hvis kørslen kan dokumenteres.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Find annoncer", "Prisen findes ud fra forhandlerannoncer for tilsvarende eller sammenlignelige varebiler."],
            ["Sorter fra", "Motorstyrelsen ser bort fra de laveste og højeste priser, fra engrosannoncer og fra biler med over 90 liggedage."],
            ["Træk rabat fra", "Motorstyrelsen trækker 5 % fra annonceprisen som en skønnet gennemsnitlig forhandlerrabat."],
            ["Reguler", "Prisen reguleres for stand, kilometer og skiftende chauffører."]
          ]
        }
      },
      {
        overskrift: "Annoncer, der ikke tæller med",
        tekst: [
          `En annonce skal ligne den bil, der skal vurderes. Motorstyrelsen holder annoncer ude, hvis bilen har kørt væsentligt mere eller mindre eller har væsentligt mere eller mindre udstyr. Det samme gælder annoncer for engros- eller afhentningssalg, de billigste og de dyreste annoncer og biler, der har stået til salg i over 90 dage.`,
          `Er der ikke andet at sammenligne med end biler af en anden årgang, må de bruges. Så reguleres annonceprisen for den anden årgang og kilometerstand. Annoncer for biler, man selv har til salg i virksomheden, må ikke bruges.`,
          `Transportomkostninger skal med i prisen, men registreringsudgifter skal ikke. Om der skal lægges til eller trækkes fra, afhænger af, hvad annonceprisen indeholder.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Søjler for annoncepriser på tilsvarende varebiler sorteret efter pris. Den billigste og den dyreste annonce, en engrosannonce og en annonce med over 90 liggedage holdes ude, og gennemsnittet af resten minus 5 procent giver handelsprisniveauet."><text class="tg-lille" x="0" y="16">ANNONCER FOR TILSVARENDE BILER</text><rect class="tg-modul" x="262" y="7" width="10" height="10"/><text x="277" y="16">bruges</text><rect class="tg-kasse" x="322" y="7" width="10" height="10"/><line class="tg-skinne-tynd" x1="322" y1="7" x2="332" y2="17"/><text x="337" y="16">holdes ude</text><rect class="tg-kasse" x="14" y="110" width="44" height="40"/><line class="tg-skinne-tynd" x1="14" y1="110" x2="58" y2="150"/><line class="tg-skinne-tynd" x1="58" y1="110" x2="14" y2="150"/><rect class="tg-modul" x="68" y="100" width="44" height="50"/><rect class="tg-kasse" x="122" y="92" width="44" height="58"/><line class="tg-skinne-tynd" x1="122" y1="92" x2="166" y2="150"/><line class="tg-skinne-tynd" x1="166" y1="92" x2="122" y2="150"/><rect class="tg-modul" x="176" y="84" width="44" height="66"/><rect class="tg-modul" x="230" y="76" width="44" height="74"/><rect class="tg-kasse" x="284" y="66" width="44" height="84"/><line class="tg-skinne-tynd" x1="284" y1="66" x2="328" y2="150"/><line class="tg-skinne-tynd" x1="328" y1="66" x2="284" y2="150"/><rect class="tg-kasse" x="338" y="46" width="44" height="104"/><line class="tg-skinne-tynd" x1="338" y1="46" x2="382" y2="150"/><line class="tg-skinne-tynd" x1="382" y1="46" x2="338" y2="150"/><line class="tg-gulvlinje" x1="0" y1="150" x2="400" y2="150"/><text class="tg-lille" x="36" y="166" text-anchor="middle">BILLIGST</text><text class="tg-lille" x="144" y="166" text-anchor="middle">ENGROS</text><text class="tg-lille" x="306" y="166" text-anchor="middle">90+ DAGE</text><text class="tg-lille" x="360" y="166" text-anchor="middle">DYREST</text><text class="tg-fremhaev" x="0" y="192">Gennemsnittet af de brugte annoncer − 5 %</text><text x="0" y="210">giver handelsprisniveauet før regulering</text></svg>`,
          tekst: `Skematisk. Annoncer, Motorstyrelsen holder ude, når handelsprisen findes. Kilde: ` + MST_LINK + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Motorstyrelsens regneeksempel",
        tekst: [
          `Motorstyrelsen viser handelsprisen på en 5 år gammel varebil, der har kørt 99.000 km. Fra hver annoncepris trækkes 1.180 kr. i registreringsudgifter, og prisen reguleres med −5 %.`,
          `Varebil A er annonceret til 325.500 kr. Uden de 1.180 kr. er prisen 324.320 kr., og 5 % lavere giver det 308.104 kr. Gennemsnittet af de tre handelspriser er 290.529 kr. Det er handelsprisniveauet, før der reguleres for kilometer, stand og udstyr.`
        ],
        tabel: {
          kolonner: ["Sammenligningsbil", "Km", "Annoncepris", "Handelspris"],
          raekker: [
            ["Varebil A, 5 år", "77.500", "325.500 kr.", "308.104 kr."],
            ["Varebil B, 5 år", "84.000", "300.000 kr.", "283.879 kr."],
            ["Varebil C, 5 år", "98.000", "295.500 kr.", "279.604 kr."],
            ["Handelsprisniveau", "", "", "290.529 kr."]
          ],
          note: `Kilde: ` + MST_LINK + `, set den 4. oktober 2026. Niveauet reguleres derefter for km, stand og udstyr.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Varebil A, annonce", 325500],
            ["Varebil A, handelspris", 308104],
            ["Varebil C, annonce", 295500],
            ["Varebil C, handelspris", 279604],
            ["Handelsprisniveau", 290529]
          ],
          note: `Kilde: Motorstyrelsens eksempel, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Kilometer: grænserne",
        tekst: [
          `Kilometerstanden flytter kun prisen, når den afviger mærkbart fra sammenligningsbilerne. Grænsen er 10 % for varebiler op til 10 år og 33 % for ældre varebiler. Inden for grænsen sker der ingen regulering.`,
          `Over grænsen regnes et tillæg eller fradrag ud fra handelsprisniveauet, antallet af kilometer, bilen afviger, og en sats pr. kilometer. Satsen afhænger af bilens alder og er lavest for biler over 3 år. Satserne står hos Motorstyrelsen.`
        ],
        punkter: [
          `Prisen reguleres, når kilometertallet afviger mere end 10 % fra sammenligningsbilernes. For varebiler over 10 år sker det først ved over 33 %.`,
          `Reguleringen må som udgangspunkt højst flytte prisen 10 % af handelsprisniveauet. Ud over det tæller halvdelen af det overskydende.`,
          `Er kilometertallet ikke dokumenteret ved toldsyn, dokumenteres det med servicebog eller værkstedsregninger.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Kilometertallet reguleres, når det afviger mere end 10 procent fra sammenligningsbilerne, og for varebiler over 10 år først ved over 33 procent."><text class="tg-fremhaev" x="0" y="16">Varebil højst 10 år</text><rect class="tg-modul" x="20" y="24" width="140" height="22"/><text class="tg-modul__tekst" x="90" y="39" text-anchor="middle">REGULERES</text><rect class="tg-kasse" x="160" y="24" width="80" height="22"/><text x="200" y="39" text-anchor="middle">±10 %</text><rect class="tg-modul" x="240" y="24" width="140" height="22"/><text class="tg-modul__tekst" x="310" y="39" text-anchor="middle">REGULERES</text><text class="tg-fremhaev" x="0" y="76">Varebil over 10 år</text><rect class="tg-modul" x="20" y="84" width="48" height="22"/><rect class="tg-kasse" x="68" y="84" width="264" height="22"/><text x="200" y="99" text-anchor="middle">±33 %</text><rect class="tg-modul" x="332" y="84" width="48" height="22"/><line class="tg-pil" x1="20" y1="126" x2="380" y2="126"/><line class="tg-pil" x1="200" y1="120" x2="200" y2="132"/><text x="68" y="146" text-anchor="middle">−33 %</text><text x="160" y="146" text-anchor="middle">−10 %</text><text x="200" y="146" text-anchor="middle">0</text><text x="240" y="146" text-anchor="middle">+10 %</text><text x="332" y="146" text-anchor="middle">+33 %</text><text class="tg-lille" x="200" y="174" text-anchor="middle">AFVIGELSE FRA SAMMENLIGNINGSBILERNE</text></svg>`,
          tekst: `Skematisk. Tegningen viser, hvor meget kilometertallet må afvige fra sammenligningsbilerne, før Motorstyrelsen regulerer prisen. Kilde: ` + MST_LINK + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Stand: 2 % op eller ned",
        tekst: [
          `Standen vurderes hverken af sælger eller køber. En synsvirksomhed vurderer den ved et udvidet registreringssyn, og vurderingen står i Motorregistret.`,
          `En varebil i stand over middel får et tillæg på 2 %, og en bil under middel får et fradrag på 2 %. Er varebilen under 6 måneder gammel, når den registreres, gives der hverken tillæg eller fradrag.`,
          `Et eksempel: I Motorstyrelsens regneeksempel er handelsprisniveauet 290.529 kr. Her svarer 2 % til 5.811 kr., som lægges til eller trækkes fra.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Skala med tre trin for vedligeholdelsesstand. Under middel giver minus 2 procent, middel giver 0, og over middel giver plus 2 procent. Med et handelsprisniveau på 290.529 kroner svarer 2 procent til 5.811 kroner."><text class="tg-lille" x="0" y="14">STAND I MOTORREGISTRET</text><rect class="tg-kasse" x="0" y="26" width="128" height="44"/><text class="tg-fremhaev" x="64" y="44" text-anchor="middle">Under middel</text><text x="64" y="60" text-anchor="middle">−2 %</text><rect class="tg-modul" x="136" y="26" width="128" height="44"/><text class="tg-fremhaev" x="200" y="44" text-anchor="middle">Middel</text><text x="200" y="60" text-anchor="middle">0 %</text><rect class="tg-kasse" x="272" y="26" width="128" height="44"/><text class="tg-fremhaev" x="336" y="44" text-anchor="middle">Over middel</text><text x="336" y="60" text-anchor="middle">+2 %</text><text class="tg-lille" x="0" y="94">EKSEMPEL: HANDELSPRISNIVEAU 290.529 KR.</text><text x="64" y="114" text-anchor="middle">−5.811 kr.</text><text x="200" y="114" text-anchor="middle">±0 kr.</text><text x="336" y="114" text-anchor="middle">+5.811 kr.</text><text class="tg-lille" x="0" y="142">UNDER 6 MÅNEDER GAMMEL: INGEN REGULERING</text></svg>`,
          tekst: `Skematisk. Standen, som synsvirksomheden har registreret, og hvad den betyder i Motorstyrelsens eksempel. Kilde: ` + MST_LINK + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skiftende chauffører",
        tekst: [
          `Har varebilen i langt overvejende grad været kørt af skiftende chauffører, kan handelsprisniveauet reguleres med −5 %. Kørslen skal kunne dokumenteres, fx med udlejningskontrakter, logbog, prøvekørselsblanketter, køresedler eller kørte kilometer.`,
          `Fradraget gælder ikke leasingvarebiler, medmindre bilen i overvejende grad har været brugt til udlejning. Så skal det også kunne sandsynliggøres, at de skiftende chauffører har fået bilen til at tabe værdi. Fradraget gælder kun varebiler, der er ældre end 6 måneder.`,
          `Fradrag for stand og særlig anvendelse kan tilsammen højst være 20.000 kr. En varebil i stand under middel, der også har haft skiftende chauffører, kan altså ikke få mere end 20.000 kr. trukket fra for de to forhold.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Fradrag for skiftende chauffører", "−5", "%"],
            ["Fradrag for stand og særlig anvendelse, højst", "20.000", "kr."],
            ["Intet standstillæg eller -fradrag under", 6, "måneder"]
          ],
          note: `Kilde: ` + MST_LINK + `, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Udstyr taber værdi hurtigt",
        tekst: [
          `I Motorstyrelsens værdifastsættelse nedskrives ekstraudstyr med bilens alder: til 70 % efter 1 år, 33 % efter 4 år og 20 % efter 5 år. Når bilen er over 8 år, tæller udstyret ikke med.`,
          `Til og med 4. år regnes der også med måneder. Udstyret nedskrives med 1 % pr. måned ud over hele år, så efter 1 år og 4 måneder er det 70 % − 4 % = 66 %.`,
          `Reguleringen virker begge veje. Har din varebil mere udstyr end sammenligningsbilerne, lægges den nedskrevne værdi til. Har sammenligningsbilerne udstyr, som din bil mangler, trækkes værdien fra.`
        ],
        figur: {
          type: "soejler",
          enhed: "%",
          max: 100,
          data: [
            ["Over 1 år", 70],
            ["Over 2 år", 57],
            ["Over 3 år", 45],
            ["Over 4 år", 33],
            ["Over 5 år", 20],
            ["Over 6 år", 15],
            ["Over 7 år", 10],
            ["Over 8 år", 0]
          ],
          note: `Søjlerne viser, hvor meget ekstraudstyr tæller med af nyprisen i Motorstyrelsens værdifastsættelse. Kilde: ` + MST_LINK + `, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Udstyr, der ikke tæller med",
        tekst: [
          `For varebiler over 1 år ser Motorstyrelsen helt bort fra værdien af en række udstyr. Det gælder også, selvom udstyret står i annoncen. Listen viser, hvilket udstyr der ikke flytter Motorstyrelsens pris.`
        ],
        punkter: [
          `Udstyr med en nyværdi under 6.000 kr. inklusive afgift.`,
          `Aluminiumsfælge.`,
          `Almindeligt radio- og hi-fi-udstyr, navigation og lignende. Kun værdien over 18.000 kr. pr. udstyrsdel tæller med.`,
          `Trækkrog.`,
          `Mobiltelefonudstyr.`,
          `Diverse sikkerhedsudstyr.`
        ],
        punkt_ikon: "nej"
      },
      {
        overskrift: "Ekstraudstyr efter 5 år",
        tekst: [
          `I Motorstyrelsens eksempel er varebilen over 5 år gammel og har læderkabine og parkeringshjælp, som sammenligningsbilerne ikke har. Udstyret tæller med 20 % af nyprisen.`,
          `Læderkabinen kostede 30.555 kr. som ny og tæller med 6.111 kr. Parkeringshjælpen kostede 15.200 kr. og tæller med 3.040 kr.`,
          `Har sammenligningsbilerne selv udstyr, som din bil ikke har, skal deres priser også reguleres, før gennemsnittet regnes.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Læderkabine, nypris", 30555],
            ["Læderkabine, efter 5 år", 6111],
            ["Parkeringshjælp, nypris", 15200],
            ["Parkeringshjælp, efter 5 år", 3040]
          ],
          note: `Kilde: <a href="` + MST + `" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Indretning og opbygning",
        tekst: [
          `Indretning og opbygning værdisættes af køberen. En lift eller et kølerum er mere værd for en køber, der skal bruge det, end for en, der skal bygge om.`,
          `Den samme varebil kan derfor have to priser. Sælges den til en køber i samme fag, kan reolerne være en del af værdien. Sælges den til en køber, der skal bruge et tomt varerum, giver indretningen ingen merpris.`,
          `Hvad brugt indretning er værd, og hvad den kan flyttes til, står under <a href="/til-varebilen/indretning/brugt/">brugt indretning til varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="To ens varebiler med reoler i varerummet. For en køber i samme fag kan reolerne tælle med i prisen, og for en køber, der bygger om, giver de ingen merpris."><g transform="translate(10,20)"><path class="tg-rum" d="M0,70 L0,52 Q1,44 9,41 L26,36 L38,10 Q40,6 45,6 L166,6 Q170,6 170,10 L170,70 Z"/><path class="tg-kasse" d="M41,13 L62,13 L62,34 L30,34 Z"/><line class="tg-skinne-tynd" x1="68" y1="8" x2="68" y2="68"/><rect class="tg-modul" x="96" y="14" width="66" height="44"/><line class="tg-skillevaeg" x1="96" y1="29" x2="162" y2="29"/><line class="tg-skillevaeg" x1="96" y1="44" x2="162" y2="44"/><circle class="tg-profil" cx="32" cy="70" r="11"/><circle class="tg-kasse" cx="32" cy="70" r="4"/><circle class="tg-profil" cx="140" cy="70" r="11"/><circle class="tg-kasse" cx="140" cy="70" r="4"/></g><g transform="translate(220,20)"><path class="tg-rum" d="M0,70 L0,52 Q1,44 9,41 L26,36 L38,10 Q40,6 45,6 L166,6 Q170,6 170,10 L170,70 Z"/><path class="tg-kasse" d="M41,13 L62,13 L62,34 L30,34 Z"/><line class="tg-skinne-tynd" x1="68" y1="8" x2="68" y2="68"/><rect class="tg-skinne-tynd" fill="none" x="96" y="14" width="66" height="44"/><line class="tg-skinne-tynd" x1="96" y1="29" x2="162" y2="29"/><line class="tg-skinne-tynd" x1="96" y1="44" x2="162" y2="44"/><circle class="tg-profil" cx="32" cy="70" r="11"/><circle class="tg-kasse" cx="32" cy="70" r="4"/><circle class="tg-profil" cx="140" cy="70" r="11"/><circle class="tg-kasse" cx="140" cy="70" r="4"/></g><line class="tg-gulvlinje" x1="0" y1="101" x2="400" y2="101"/><text class="tg-fremhaev" x="10" y="126">Køber i samme fag</text><text x="10" y="142">reolerne kan tælle med</text><text class="tg-fremhaev" x="220" y="126">Køber, der bygger om</text><text x="220" y="142">ingen merpris</text></svg>`,
          tekst: `Skematisk. Den samme indretning har kun værdi for en køber, der kan bruge den.`
        }
      },
      {
        overskrift: "Service, syn og skader",
        tekst: [
          `Køberen ser på servicehistorik, dækmønster, kendte skader og kilometerstand. På Klaraviks auktioner står fx lasteevne, aflæst kilometerstand, dækkenes resterende mønster i procent og om der er servicebog i beskrivelsen.`,
          `Synsrapporten viser, at bilen var lovlig at bruge, da den blev synet. Færdselsstyrelsen skriver, at en godkendelse ikke nødvendigvis betyder, at bilen er fejlfri eller i god stand ud fra en økonomisk betragtning.`,
          `Servicebog og værkstedsregninger har derfor to funktioner. De viser køberen, hvordan bilen er passet, og de er Motorstyrelsens dokumentation for kilometerstanden, når den ikke er dokumenteret ved toldsyn.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Skitse af en auktionsbeskrivelse med felter for aflæst kilometerstand, lasteevne, tilladt totalvægt, dækkenes resterende mønster i procent, seneste bilsyn, servicebog og salg til private."><rect class="tg-profil" x="10" y="8" width="250" height="214" rx="4"/><text class="tg-fremhaev" x="24" y="32">Auktionsbeskrivelse</text><text x="24" y="58">Kilometerstand, aflæst</text><line class="tg-skinne-tynd" x1="184" y1="60" x2="246" y2="60"/><text x="24" y="82">Lasteevne</text><line class="tg-skinne-tynd" x1="184" y1="84" x2="246" y2="84"/><text x="24" y="106">Tilladt totalvægt</text><line class="tg-skinne-tynd" x1="184" y1="108" x2="246" y2="108"/><rect class="tg-modul" x="18" y="117" width="234" height="19"/><text x="24" y="130">Dæk, rest i %</text><text x="24" y="154">Seneste bilsyn</text><line class="tg-skinne-tynd" x1="184" y1="156" x2="246" y2="156"/><text x="24" y="178">Servicebog</text><line class="tg-skinne-tynd" x1="184" y1="180" x2="246" y2="180"/><text x="24" y="202">Salg til private</text><line class="tg-skinne-tynd" x1="184" y1="204" x2="246" y2="204"/><g class="tg-call"><line x1="252" y1="127" x2="272" y2="127"/><circle cx="252" cy="127" r="3"/><text class="tg-call__navn" x="276" y="123">Dækmønster</text><text class="tg-call__under" x="276" y="137">i procent pr. aksel</text></g><g class="tg-call"><line x1="246" y1="199" x2="272" y2="199"/><circle cx="246" cy="199" r="3"/><text class="tg-call__navn" x="276" y="195">Til private</text><text class="tg-call__under" x="276" y="209">står som ja eller nej</text></g></svg>`,
          tekst: `Skematisk. Felterne er fra en auktionsbeskrivelse på Klaravik. Kilde: <a href="` + KV_EKS + `" rel="noopener">Klaravik: Kassevogn med lift</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Slå bilen op i Motorregistret",
        tekst: [
          `Alle kan se oplysninger om en varebil, der er registreret i Danmark, i Motorregistret uden at logge på. Du vælger Køretøjsdetaljer og derefter Vis køretøj. Under punktet Syn står synsfristen, og om bilen er indkaldt til syn.`,
          `En varebil med en tilladt totalvægt på højst 3.500 kg skal til periodisk syn første gang 4 år efter første registrering og derefter hvert 2. år. Færdselsstyrelsen sender indkaldelsen 8 uger før synsfristen.`,
          `Har bilen været afmeldt i mere end 1 år, skal den til registreringssyn, før den kan registreres igen. Reglerne for syn ved ejerskifte står under <a href="/til-varebilen/salg-af-varebil/afmelding-og-nummerplader/">afmelding og nummerplader</a>.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Første registrering", "Fristen for det første periodiske syn regnes fra den dato, varebilen blev registreret første gang."],
            ["Efter 4 år", "Første periodiske syn."],
            ["Derefter hvert 2. år", "De følgende periodiske syn."],
            ["8 uger før hver frist", "Færdselsstyrelsen sender en indkaldelse."]
          ],
          note: `Gælder varebiler med en tilladt totalvægt på højst 3.500 kg. Kilde: <a href="` + FS_PERIODISK + `" rel="noopener">Færdselsstyrelsen: Periodisk syn</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Moms i prisen",
        tekst: [
          `Sælges bilen med moms, er det prisen ekskl. moms, en momsregistreret køber sammenligner. Det er også den pris, forhandlerne står med under <a href="/brugte-varebiler/">brugte varebiler</a>. Sælges bilen momsfrit, er der ingen moms at trække fra.`,
          `Om din varebil kan sælges med moms, afhænger af, om virksomheden har trukket momsen fra ved købet. Reglerne står under <a href="/til-varebilen/salg-af-varebil/saelg-firmabil-moms/">moms ved salg af varebil</a> og <a href="/haandbogen/momsdoed-varebil/">momsdød varebil</a>.`
        ]
      },
      {
        overskrift: "Hvor bilen kan sælges",
        tekst: [
          `Der er fem måder at sælge en brugt varebil på. De adskiller sig ved, hvor meget du selv står for, og hvem der tager sig af fremvisning, papirer og betaling.`,
          `Motorstyrelsen bruger ikke engrospriser, når den finder handelsprisen. Sælger du til en opkøber, er det derfor en anden pris end den, Motorstyrelsen regner med.`
        ],
        kort: [
          ["Forhandler", "Bilen indgår som byttebil i handlen på den nye."],
          ["Annonceportaler", "Bilbasen, Bilhandel og DBA har egne kategorier for varebiler ekskl. moms. Sælger står selv for fremvisning og handel."],
          ["Auktion", "Klaravik sælger maskiner og køretøjer for virksomheder. En auktionsmægler laver materialet, og der betales provision af salgsprisen."],
          ["Opkøbere", "Virksomheder, der køber brugte varebiler direkte. Motorstyrelsen holder engrossalg uden for handelsprisen i sin værdifastsættelse."],
          ["Leasingselskabet", "En leaset bil kan købes fri, eller restværdien indfries. <a href=\"/til-varebilen/salg-af-varebil/indfri-leasingaftale/\">Indfri leasingaftale</a>"]
        ]
      },
      {
        overskrift: "Auktion hos Klaravik",
        tekst: [
          `På en netauktion laver auktionshuset materialet, og bilen sælges til den højeste byder. Hos Klaravik foregår det sådan.`
        ],
        punkter: [
          `Alle virksomheder kan sælge, og en lokal auktionsmægler besøger sælger.`,
          `Provisionen afhænger af salgsbeløbet. Bliver bilen ikke solgt, er der intet gebyr.`,
          `Pengene udbetales senest 7 arbejdsdage efter afhentning, når objektet er betalt og afhentet.`,
          `Ejerskiftet sker mellem køber og sælger ved afhentning, og sælger leverer registreringsattestens del 2.`,
          `Klaravik sikrer, at eventuel gæld i køretøjet afvikles, før køberen bliver ejer.`
        ],
        efter: [
          `Vilkårene hos Klaravik, Auktionshuset og Retrade står under <a href="/til-varebilen/salg-af-varebil/salg-af-varebil-paa-auktion/">salg af varebil på auktion</a>.`
        ]
      },
      {
        overskrift: "Sammenlign med markedet",
        tekst: [
          `Prisen måles mod tilsvarende biler til salg. Hvad en køber kigger efter, står i <a href="/haandbogen/koeb-af-brugt-varebil/">køb af brugt varebil</a>.`,
          `Motorstyrelsen giver ikke overslag på værdier eller priser i telefonen eller på mail. En pris på din egen bil får du ved at sammenligne med annoncer eller ved at spørge en forhandler, en opkøber eller et auktionshus.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal køberen have",
    spoergsmaal_manchet: "Så kan bilen vurderes uden at skulle ses flere gange.",
    spoergsmaal: [
      "Registreringsnummer, årgang og kilometerstand.",
      "Servicehistorik og dato for seneste syn.",
      "Kendte skader og dækkenes stand.",
      "Liste over ekstraudstyr, indretning og opbygning.",
      "Om bilen sælges med eller uden moms.",
      "Om der er gæld eller restværdi i bilen."
    ],
    faq: [
      ["Hvad afgør prisen på en brugt varebil?", "Model, årgang, kilometer, stand, udstyr, indretning og servicehistorik, sammenlignet med tilsvarende biler til salg."],
      ["Hvordan finder Motorstyrelsen handelsprisen på en brugt varebil?", "Ud fra forhandlerannoncer for tilsvarende biler, reguleret med −5 % som skønnet forhandlerrabat og for stand, kilometer og udstyr."],
      ["Øger indretning prisen på en brugt varebil?", "Kun for en køber, der kan bruge den. Fabriksudstyr nedskrives hurtigt, i Motorstyrelsens værdifastsættelse til 20 % efter 5 år."],
      ["Hvor kan man sælge en brugt varebil?", "Til en forhandler i bytte, via annonceportaler som Bilbasen, Bilhandel og DBA, på auktion fx hos Klaravik eller til en opkøber."],
      ["Hvad koster det at sælge på Klaravik?", "En provision, der afhænger af salgsbeløbet. Bliver bilen ikke solgt, er der intet gebyr."],
      ["Hvor meget er ekstraudstyr værd på en 5 år gammel varebil?", "I Motorstyrelsens værdifastsættelse tæller det med 20 % af nyprisen. En læderkabine til 30.555 kr. tæller med 6.111 kr. Udstyr under 6.000 kr. ses der bort fra."],
      ["Hvornår reguleres prisen for kilometer?", "Når kilometerstanden afviger mere end 10 % fra sammenligningsbilerne. For varebiler over 10 år sker det først ved over 33 %."],
      ["Hvad betyder stand over eller under middel?", "Standen vurderes af en synsvirksomhed ved et udvidet registreringssyn og står i Motorregistret. Over middel giver et tillæg på 2 %, og under middel giver et fradrag på 2 %."],
      ["Hvor kan jeg se, hvornår varebilen skal synes?", "I Motorregistret under Vis køretøj og punktet Syn. Du behøver ikke logge på. En varebil på højst 3.500 kg skal til periodisk syn første gang efter 4 år og derefter hvert 2. år."]
    ],
    kilder: [
      { navn: "Motorstyrelsen: Værdifastsættelse af brugte varebiler", url: MST, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Generelle regler om værdifastsættelse", url: MST_GENERELT, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Om Motorregistret", url: MST_DMR, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Periodisk syn", url: FS_PERIODISK, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Registreringssyn", url: FS_REG, dato: "2026-10-07" },
      { navn: "Klaravik: Sælg på Klaravik", url: "https://www.klaravik.dk/saelg.html", dato: "2026-10-07" },
      { navn: "Klaravik: Kassevogn med lift (eksempel på auktionsbeskrivelse)", url: KV_EKS, dato: "2026-10-07" },
      { navn: "Bilhandel: Brugte varevogne ekskl. moms", url: "https://bilhandel.dk/varevogn-ekskl-moms", dato: "2026-10-07" },
      { navn: "Bilbasen: Hvad betyder \"Varevogn inkl. moms\" og \"Varevogn ekskl. moms\"?", url: "https://support.bilbasen.dk/hc/da/articles/22301415235730-Hvad-betyder-Varevogn-inkl-moms-og-Varevogn-ekskl-moms", dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Motorstyrelsen: Nyprisen er den pris, der var markedsdannende for varebilen (inklusive ekstraudstyr), da den var ny, og den kan fastsættes til listeprisen, dvs. den officielle vejledende udsalgspris inklusive ekstraudstyr.", MST],
    ["Motorstyrelsen: Handelsprisen er den pris, en køber må forvente at skulle betale for en tilsvarende varebil på det danske marked.", MST],
    ["Nyprisen skal bruges for at kunne værdifastsætte en brugt varebil i Motorregistret, og fradrag og tillæg for ekstraudstyr nedskrives med bilens værditab.", MST],
    ["I Motorstyrelsens eksempel (5 år gammel varebil, 99.000 km) er den markedsdannende nypris 455.597 kr., ekstraudstyret i alt 54.415 kr. (læderkabine, parkeringshjælp, sædevarme) og nyprisen i alt 510.012 kr.", MST],
    ["Hovedreglen er forhandlerannoncer. Privatannoncer kræver særlige grunde, fx at varebilen kun eller i overvejende grad handles på det private marked, og reguleringen med −5 % sker også ved privatannoncer.", MST],
    ["Gennemsnittet af annoncerne efter reguleringer udgør handelsprisniveauet, som derefter reguleres med tillæg og fradrag for stand, kilometer, ekstraudstyr og særlig anvendelse.", MST],
    ["Motorstyrelsen beder om at undgå annoncer med væsentlig under- eller overkørte km, væsentlig mere eller mindre udstyr, engros- eller afhentningssalg og afvigende årgang. Bruges annoncer med afvigende årgang, reguleres annonceprisen for årgang og kilometerstand.", MST],
    ["Annoncer med varebiler, man selv har til salg i egen virksomhed, må ikke bruges.", MST],
    ["Transportomkostninger skal medregnes, registreringsudgifter skal ikke; om der lægges til eller trækkes fra, afhænger af, hvad annonceprisen indeholder.", MST],
    ["Regneeksempel ud fra Motorstyrelsens tal: 325.500 kr. − 1.180 kr. = 324.320 kr.; 95 % heraf = 308.104 kr.", MST],
    ["Kilometertillæg eller -fradrag beregnes ud fra handelsprisniveauet, differencekilometer og en sats, der afhænger af alder; satsen er lavest for varebiler over 3 år.", MST],
    ["Regneeksempel: 2 % af handelsprisniveauet på 290.529 kr. i Motorstyrelsens eksempel er 5.811 kr.", MST],
    ["Varebiler under middel/over middel: −2 %/+2 %; ingen standsregulering for varebiler under 6 måneder ved registrering (gammelt fakta, gentaget i figur).", MST],
    ["Kørsel med skiftende chauffører skal kunne dokumenteres, fx med udlejningskontrakter, logbog, prøvekørselsblanketter, køresedler eller kørte kilometer.", MST],
    ["For leasingvarebiler brugt i overvejende grad til udlejning skal det kunne sandsynliggøres, at skiftende chauffører har medført værditab.", MST],
    ["Fradrag for særlig anvendelse gælder kun varebiler, der er ældre end 6 måneder.", MST],
    ["Nedskrivning af ekstraudstyr: over 2 år 57 %, over 3 år 45 %, over 6 år 15 %, over 7 år 10 %, over 8 år 0 %.", MST],
    ["For varebiler over 1 år ses bort fra værdien af aluminiumsfælge, mobiltelefonudstyr og diverse sikkerhedsudstyr (ud over udstyr under 6.000 kr. inkl. afgift, radio og navigation under 18.000 kr. og trækkrog).", MST],
    ["Har sammenligningsbilerne ekstraudstyr, som den vurderede varebil ikke har, skal prisen på sammenligningsbilerne også reguleres.", MST],
    ["Motorstyrelsen kan ikke give overslag på værdier eller priser på telefon eller mail.", MST_GENERELT],
    ["I Motorregistret kan man se oplysninger om et køretøj uden at logge på ved at vælge Køretøjsdetaljer og derefter Vis køretøj.", MST_DMR],
    ["Under punktet 3. Syn i Motorregistret kan man se synsfristen og om køretøjet er indkaldt til syn.", FS_PERIODISK],
    ["Varebiler med tilladt totalvægt højst 3.500 kg indkaldes til periodisk syn første gang efter 4 år og derefter hvert 2. år; Færdselsstyrelsen sender indkaldelsen 8 uger før synsfristen.", FS_PERIODISK],
    ["En godkendelse ved syn betyder ikke nødvendigvis, at køretøjet er fejlfrit eller i god stand ud fra en økonomisk betragtning, men at det er lovligt at anvende.", FS_REG],
    ["Et køretøj, der har været afmeldt i mere end 1 år, skal registreringssynes.", FS_REG],
    ["Klaraviks auktionsbeskrivelse af en kassevogn har felter for bl.a. aflæst kilometerstand, lasteevne, tilladt totalvægt, dæk pr. aksel med rest i %, seneste bilsyn, servicebog og salg til private.", KV_EKS]
  ]
};
