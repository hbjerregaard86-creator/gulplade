// Underside /til-varebilen/salg-af-varebil/salg-af-varebil-paa-auktion/ (07-10-2026)
var KSAELG = `https://www.klaravik.dk/saelg.html`;
var KFAQ = `https://www.klaravik.dk/faq/`;
var KVILKAR = `https://www.klaravik.dk/kobsvilkar.html`;
var AH = `https://www.auktionshuset.dk/faq`;
var RVILKAR = `https://retrade.eu/da/terms`;
var RSAELG = `https://retrade.eu/da/sell`;
var OMREG = `https://motorst.dk/erhverv/registrering-og-omregistrering/omregistrering`;

module.exports = {
  id: "salg-af-varebil/salg-af-varebil-paa-auktion",
  side: {
    slug: "salg-af-varebil-paa-auktion",
    navn: "Salg af varebil på auktion",
    titel: "Sælg varebil på auktion: salær og forløb",
    kort: `Provision, købersalær, mindstepris, afhentning, ejerskifte og udbetaling, når virksomheden sælger varebilen på netauktion hos Klaravik, Auktionshuset eller Retrade.`,
    beskrivelse: `Sælg varebilen på netauktion. Se provision, købersalær på 20 %, mindstepris og frister for betaling og afhentning hos Klaravik, Auktionshuset og Retrade.`,
    manchet: `På en netauktion laver en auktionsmægler materialet, og køberne byder online. Sælger betaler en provision, når bilen bliver solgt, og køberen betaler et salær oveni buddet. Her kan du se vilkårene hos Klaravik, Auktionshuset og Retrade.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Købersalær, Auktionshuset", "20 %", "af budsummen, mindst 50 kr. pr. vare"],
        ["Usolgt bil, Klaravik", "Intet gebyr", "sælger betaler provision ved salg"],
        ["Udbetaling, Klaravik", "Senest 7 arbejdsdage", "efter afhentning"],
        ["Afhentning, Klaravik", "12 dage", "har køberen til at hente bilen"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Sådan foregår en netauktion",
        tekst: [
          `På en netauktion sælger auktionshuset bilen på vegne af virksomheden, og køberne byder online døgnet rundt. Auktionshuset er formidler og bliver ikke selv ejer af bilen. Klaravik påtager sig ikke ansvar for bilens stand, og hos Retrade ligger ansvaret for objektet hos sælger. Ingen af de to er eksportør, når bilen sælges til udlandet.`,
          `En auktionsmægler kommer ud til virksomheden, tager billeder og skriver beskrivelsen. Klaravik skriver, at køberen kan hente objektet en uge efter mæglerens besøg. Pengene går gennem auktionshuset, mens bilen går direkte fra sælger til køber, når køberen henter den.`,
          `Auktionshusenes priser og gebyrer på siden er uden moms, medmindre andet står.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 228" role="img" aria-label="Netauktion med tre parter. Køberen betaler bud og købersalær til auktionshuset, auktionshuset udbetaler til sælger, som betaler provision, og bilen går fra sælger til køber ved afhentningen."><defs><marker id="pil-auktion-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="130" y="8" width="140" height="50"/><text class="tg-modul__tekst" x="200" y="30" text-anchor="middle">AUKTIONSHUSET</text><text x="200" y="47" text-anchor="middle">formidler salget</text><rect class="tg-kasse" x="10" y="150" width="120" height="50"/><text class="tg-fremhaev" x="70" y="172" text-anchor="middle">Sælger</text><text x="70" y="189" text-anchor="middle">ejer bilen</text><rect class="tg-kasse" x="270" y="150" width="120" height="50"/><text class="tg-fremhaev" x="330" y="172" text-anchor="middle">Køber</text><text x="330" y="189" text-anchor="middle">byder online</text><line class="tg-pil" x1="160" y1="58" x2="100" y2="148" marker-end="url(#pil-auktion-1)"/><line class="tg-pil" x1="300" y1="148" x2="240" y2="60" marker-end="url(#pil-auktion-1)"/><line class="tg-pil" x1="132" y1="176" x2="266" y2="176" marker-end="url(#pil-auktion-1)"/><text x="10" y="100">udbetaling</text><text class="tg-lille" x="10" y="118">SÆLGER BETALER</text><text class="tg-lille" x="10" y="132">PROVISION</text><text x="390" y="100" text-anchor="end">betaling</text><text class="tg-lille" x="390" y="118" text-anchor="end">BUD OG</text><text class="tg-lille" x="390" y="132" text-anchor="end">KØBERSALÆR</text><text x="200" y="168" text-anchor="middle">afhentning</text><text x="200" y="218" text-anchor="middle">bilen og registreringsattestens del 2</text></svg>`,
          tekst: `Skematisk. Pengene går gennem auktionshuset, og bilen går direkte fra sælger til køber. Kilder: <a href="${KSAELG}" rel="noopener">Klaravik: Sælg på Klaravik</a> og <a href="${KVILKAR}" rel="noopener">Klaravik: Købsvilkår</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tre auktionshuse",
        tekst: [
          `De tre auktionshuse sælger alle for virksomheder, men på forskellige vilkår. Klaravik skriver, at alle virksomheder kan sælge, og at det som regel kun er virksomheder, der sælger. Auktionshuset sælger ikke for private, men for virksomheder, kuratorer, finansieringsselskaber og andre professionelle.`,
          `Retrade er primært for nordiske virksomheder på sælgersiden og henvender sig primært til købere med eget cvr-nummer. Hos Auktionshuset kan både private og firmaer byde.`,
          `Klaravik oplyser, at huset har 140.000 budgivere og holder 63.000 auktioner om året. Retrade skriver, at over 100.000 nordiske virksomheder har brugt det siden 2007.`
        ],
        tabel: {
          kolonner: ["Auktionshus", "Sælgere", "Sælger betaler", "Køber betaler oveni"],
          raekker: [
            ["Klaravik", "Virksomheder", "Provision af salgsbeløbet, intet ved usolgt", "Budgebyr, vist på objektet"],
            ["Auktionshuset", "Virksomheder, konkursboer, professionelle", "Oplyses ikke på siden", "20 % salær, min. 50 kr. pr. vare"],
            ["Retrade", "Primært nordiske virksomheder", "Oplyses ikke på siden", "Købersalær + 250 kr. pr. faktura"]
          ],
          note: `Kilder: <a href="${KFAQ}" rel="noopener">Klaravik</a>, <a href="${AH}" rel="noopener">Auktionshuset</a> og <a href="${RVILKAR}" rel="noopener">Retrade</a>, set den 4. oktober 2026.`,
          visning: "kort"
        },
        figur: {
          type: "noegletal",
          data: [
            ["Budgivere, Klaravik", "140.000"],
            ["Auktioner om året, Klaravik", "63.000"],
            ["Virksomheder, der har brugt Retrade siden 2007", "over 100.000", "nordiske"]
          ],
          note: `Tallene er auktionshusenes egne. Kilder: <a href="${KSAELG}" rel="noopener">Klaravik: Sælg på Klaravik</a> og <a href="${RSAELG}" rel="noopener">Retrade: Sælg dine maskiner og udstyr</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det betaler sælger",
        tekst: [
          `Hos Klaravik betaler sælger en provision, der afhænger af salgsbeløbet. Bliver bilen ikke solgt, koster det ingenting. Klaravik skriver ikke provisionens størrelse på siden og henviser til kundeservice eller den lokale auktionsmægler.`,
          `Auktionshuset og Retrade oplyser heller ikke sælgers pris på deres sider. Prisen for sælger skal derfor komme fra auktionshuset, før bilen sættes til salg. Hos Retrade kan en bil, der er sat på auktion, ikke trækkes tilbage, og den må ikke sælges andre steder, mens auktionen kører.`,
          `Sælger betaler ikke købersalæret. Salæret påvirker alligevel prisen, fordi køberen betaler det oveni buddet og derfor byder ud fra den samlede pris.`
        ]
      },
      {
        overskrift: "Købersalæret og buddet",
        tekst: [
          `Køberen sammenligner sin samlede pris, ikke buddet. Hos Auktionshuset er buddet uden salær og moms, og salæret er 20 % af budsummen, dog mindst 50 kr. pr. vare. Køberen ser den samlede pris, før buddet bekræftes.`,
          `Auktionshuset viser selv regnestykket med et bud på 1.000 kr. Med 20 % i salær bliver det 1.200 kr., og med momsen oveni betaler køberen 1.500 kr. På samme måde koster et bud på 100.000 kr. køberen 120.000 kr. før moms og 150.000 kr. med moms.`,
          `Hos Klaravik er købersalæret et budgebyr, der varierer fra objekt til objekt og står på auktionen, når man er logget ind. Retrade lægger et købersalær på de fleste auktioner og 250 kr. i betalingsomkostninger på hver faktura.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Bud", 100000],
            ["Bud og salær på 20 %", 120000],
            ["Med 25 % moms", 150000]
          ],
          note: `Regneeksempel ud fra salæret på 20 % og momsen på 25 % hos <a href="${AH}" rel="noopener">Auktionshuset</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forløbet hos Klaravik",
        tekst: [
          `Køberen får fakturaen fra PayEx på mail, normalt samme dag som auktionen slutter, og skal betale inden for syv dage. Når Klaravik har registreret betalingen, får køberen en udleveringskvittering med sælgers kontaktoplysninger.`,
          `Køberen kontakter derefter sælger og aftaler et tidspunkt for afhentningen. Sælger har ikke pligt til at tillade afhentning om aftenen eller i weekenden. Sælger får pengene senest 7 arbejdsdage efter afhentningen, når køberen har betalt og afhentet bilen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Besøg", "Den lokale auktionsmægler laver materialet og tager billeder."],
            ["Auktion", "Bud i de sidste tre minutter forlænger auktionen med tre minutter."],
            ["Faktura", "Køberen får fakturaen samme dag og betaler inden syv dage."],
            ["Afhentning", "Køberen har 12 dage til at hente bilen, og ejerskiftet sker ved afhentningen."],
            ["Udbetaling", "Sælger får pengene senest 7 arbejdsdage efter afhentning, når bilen er betalt."]
          ]
        },
        efter: [
          `Er bilen betalt, men ikke hentet, udbetales pengene den femte arbejdsdag i måneden efter betalingen. Der gælder særlige betingelser ved salg til udlandet, ved gæld i bilen, og når køberen har søgt finansiering.`,
          `Kilder: <a href="${KSAELG}" rel="noopener">Klaravik: Sælg på Klaravik</a>, <a href="${KFAQ}" rel="noopener">Spørgsmål og svar</a> og <a href="${KVILKAR}" rel="noopener">Købsvilkår</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Forløbet hos Retrade",
        tekst: [
          `Retrade begynder med at besøge sælger og dokumentere det, der skal sælges. Retrade tager billeder og video og laver en vurdering af standen. Sælger godkender annoncerne og sætter reservationsprisen, og auktionen starter og slutter på de aftalte tidspunkter.`,
          `Når auktionen er slut, får køberen betalingsbetingelserne på mail inden for to arbejdsdage og har 5 dage til at betale. Når betalingen er registreret, får både køber og sælger en udleveringsbekræftelse. Køberen skal straks kontakte sælger og aftale, hvor og hvornår bilen hentes.`,
          `Afregningen sker gennem Retrades system, hvor pengene står på en afregningskonto, til sælger får dem.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Besøg", "Retrade dokumenterer bilen med billeder, video og en vurdering af standen."],
            ["Annonce og pris", "Sælger godkender annoncen og sætter reservationsprisen i samråd med Retrade."],
            ["Auktion", "Et bud i de sidste fem minutter forlænger auktionen med fem minutter."],
            ["Betaling", "Køberen får betalingsbetingelserne inden for to arbejdsdage og betaler inden 5 dage."],
            ["Afhentning", "Køber og sælger får en udleveringsbekræftelse, og fristen for afhentning er 21 dage."]
          ]
        },
        efter: [
          `Kilder: <a href="${RSAELG}" rel="noopener">Retrade: Sælg dine maskiner og udstyr</a> og <a href="${RVILKAR}" rel="noopener">Retrade: Auktionsregler og vilkår</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sluttid og forlængelse",
        tekst: [
          `Alle tre auktionshuse har en fast sluttid, som bliver forlænget, hvis nogen byder i de sidste minutter. Hos Klaravik og Auktionshuset forlænger et bud i de sidste tre minutter auktionen med tre minutter. Hos Retrade er det fem minutter.`,
          `Klaravik sammenligner reglen med første, anden og tredje gang på en fysisk auktion, fordi den giver de andre budgivere en chance for at byde igen. Hos Auktionshuset slutter katalognumrene med 30 sekunders mellemrum, så de ikke alle udløber på samme tid.`,
          `Alle tre lader køberen afgive et maksimalt bud, som systemet byder op til. Hos Klaravik og Retrade kan de andre budgivere ikke se det maksimale bud, og hos Retrade må ejeren eller sælgeren ikke byde på sine egne objekter.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 188" role="img" aria-label="De sidste minutter af en netauktion. Hos Klaravik og Auktionshuset forlænger et bud i de sidste 3 minutter auktionen med 3 minutter, og hos Retrade forlænger et bud i de sidste 5 minutter auktionen med 5 minutter."><text class="tg-lille" x="10" y="16">DE SIDSTE MINUTTER AF AUKTIONEN</text><text x="196" y="57" text-anchor="end">Klaravik, Auktionshuset</text><rect class="tg-modul" x="200" y="46" width="120" height="14"/><text x="326" y="57">+3 min.</text><text x="116" y="87" text-anchor="end">Retrade</text><rect class="tg-modul" x="120" y="76" width="200" height="14"/><text x="326" y="87">+5 min.</text><line class="tg-gulvlinje" x1="20" y1="110" x2="380" y2="110"/><line class="tg-skillevaeg" x1="120" y1="104" x2="120" y2="116"/><line class="tg-skillevaeg" x1="200" y1="104" x2="200" y2="116"/><line class="tg-skinne" x1="320" y1="36" x2="320" y2="118"/><text x="120" y="132" text-anchor="middle">5 min.</text><text x="200" y="132" text-anchor="middle">3 min.</text><text x="320" y="132" text-anchor="middle">sluttid</text><text x="10" y="162">Et bud i den fremhævede periode forlænger</text><text x="10" y="178">auktionen. Hvert nyt bud forlænger igen.</text></svg>`,
          tekst: `Skematisk. Forlængelsen ved bud i de sidste minutter. Kilder: <a href="${KVILKAR}" rel="noopener">Klaravik: Købsvilkår</a>, <a href="${AH}" rel="noopener">Auktionshuset: FAQ</a> og <a href="${RVILKAR}" rel="noopener">Retrade: Auktionsregler og vilkår</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Mindstepris",
        tekst: [
          `Mindsteprisen, som også kaldes reservationsprisen, er den laveste pris, sælger på forhånd har accepteret. På auktionen kan køberne se, om den er nået. Er den nået, er handlen bindende, når auktionen slutter. Hos Retrade fastsætter sælger reservationsprisen i samråd med Retrade, som bidrager med markedsdata og anbefalinger.`,
          `Ligger det højeste bud under mindsteprisen, kan sælger afvise eller acceptere det. Hos Klaravik er buddet bindende for køberen i to hverdage efter auktionens slut. Perioden forlænges med to hverdage, hver gang der kommer et nyt bud under forhandlingen, og Klaravik kontakter køberen for at afslutte handlen.`,
          `Hos Retrade er det højeste bud bindende i 24 timer efter auktionens slut, også under reservationsprisen, og Retrade forhandler for sælger. Hos Auktionshuset kan varer, der ikke bliver solgt, blive udbudt igen eller sendt tilbage til sælger.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Klaravik, bud bindende for køberen", 2, "hverdage"],
            ["Klaravik, forlængelse pr. nyt bud", 2, "hverdage"],
            ["Retrade, højeste bud bindende", 24, "timer"]
          ],
          note: `Fristerne løber fra auktionens slut. Hos Retrade gælder det også, når buddet er under reservationsprisen. Kilder: <a href="${KVILKAR}" rel="noopener">Klaravik</a> og <a href="${RVILKAR}" rel="noopener">Retrade</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Stand og beskrivelse",
        tekst: [
          `Bilen sælges, som den er. Klaravik inspicerer ikke objekterne. Auktionsmægleren laver en interviewbaseret bedømmelse af standen sammen med sælger, så beskrivelsen bygger på det, sælger fortæller.`,
          `Hos Klaravik og Retrade er der normalt ingen fremvisning, mens auktionen kører, og køberne byder ud fra billeder, tekst og eventuelt video. Auktionshuset holder som regel eftersyn, hvor køberne kan se varen, før de byder, men varerne er ikke testet.`,
          `Køberen har undersøgelsespligt og skal reklamere, før bilen forlader sælgers adresse. Det gælder også, når en speditør eller en anden henter bilen for køberen.`
        ],
        punkter: [
          `Hos Klaravik regnes personbiler og lette varevogne med en salgspris under 30.000 kr. som reparationsobjekter. I Klaraviks vilkår for erhvervskøbere er der ingen retur- eller fortrydelsesret ved reparationsobjekter.`,
          `Klaravik er ikke part i en reklamation, men kan formidle mellem køber og sælger.`,
          `Hos Retrade har køberen godkendt objektet, når det forlader sælgers ejendom.`
        ]
      },
      {
        overskrift: "Fortrydelsesret for private købere",
        tekst: [
          `Køber en privatperson bilen, gælder der andre regler end ved et salg til en virksomhed. Hos Auktionshuset har en privat køber 14 dages fortrydelsesret fra den dag, varen bliver udleveret. Erhvervskøbere har ingen fortrydelsesret.`,
          `Retrade giver også private forbrugere 14 dages fortrydelsesret fra det tidspunkt, de får varen. Retrade trækker mindst 25 % af budsummen fra for værdiforringelse, og kører køberen mere end 10 km i et køretøj, hæfter køberen for det ekstra værditab.`,
          `Klaraviks købsvilkår for privatpersoner giver også 14 dages fortrydelsesret efter forbrugeraftaleloven. Hos Retrade kan private kun byde på varer fra deres eget hjemland.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Auktionshus", "Privat køber", "Erhvervskøber"],
          raekker: [
            ["Auktionshuset", "14 dage fra udleveringen", "nej"],
            ["Retrade", "14 dage fra modtagelsen", "nej"]
          ],
          note: `Klaravik giver også private købere 14 dages fortrydelsesret. Kilder: <a href="${AH}" rel="noopener">Auktionshuset: FAQ</a>, <a href="${RVILKAR}" rel="noopener">Retrade: Auktionsregler og vilkår</a> og <a href="${KVILKAR}" rel="noopener">Klaravik: Købsvilkår</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Betaling fra køberen",
        tekst: [
          `Køberen betaler auktionshuset og ikke sælger. Hos Klaravik skal fakturaen betales inden for syv dage, og når køberen har betalt Klaravik, har køberen betalt for bilen.`,
          `Hos Retrade er betalingsfristen 5 dage. Betaler køberen ikke, bliver handlen annulleret, og køberen skal betale en erstatning på 15 %, mindst 3.000 kr. Bilen kan så komme på en ny auktion.`,
          `Hos Auktionshuset skal ordren være betalt senest kl. 12 dagen før første udleveringsdag, og en ordre, der ikke er betalt efter 14 dage, bliver annulleret. Beløb over 20.000 kr. kan kun betales med bankoverførsel.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Klaravik, betalingsfrist", 7, "dage"],
            ["Retrade, betalingsfrist", 5, "dage"],
            ["Retrade, erstatning ved manglende betaling", 15, "%, mindst 3.000 kr."],
            ["Auktionshuset, ubetalt ordre annulleres efter", 14, "dage"]
          ],
          note: `Kilder: <a href="${KVILKAR}" rel="noopener">Klaravik: Købsvilkår</a>, <a href="${RVILKAR}" rel="noopener">Retrade: Auktionsregler og vilkår</a> og <a href="${AH}" rel="noopener">Auktionshuset: FAQ</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Afhentning og ejerskifte",
        tekst: [
          `Hos Klaravik er køber og sælger i fællesskab ansvarlige for at gennemføre ejerskiftet ved afhentningen. Sælger leverer del 2 af registreringsattesten, så køberen kan skrive bilen om. Begge har en kvittering fra Klaravik med en referencekode, og koderne skal stemme overens, så den forkerte ikke henter bilen.`,
          `Hos Auktionshuset følger registreringsattesten med køretøjerne, og i sjældne tilfælde bliver den eftersendt. Hos Retrade henter køberen bilen mod at vise udleveringsbekræftelsen.`,
          `Efter købet har køberen 4 hverdage til at omregistrere bilen, og indtil da betaler sælger afgifter og ansvarsforsikring.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 256" role="img" aria-label="Afhentning efter auktion: sælgers og købers kvittering med samme referencekode og registreringsattestens del 2."><defs><marker id="pil-auktion-4" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text x="10" y="16" class="tg-lille">AFHENTNING EFTER AUKTION PÅ KLARAVIK</text><rect class="tg-profil" x="10" y="28" width="160" height="156" rx="4"/><text x="22" y="50" class="tg-fremhaev">Sælger</text><text x="22" y="64" class="tg-lille">udleveringskvittering</text><rect class="tg-modul" x="22" y="78" width="136" height="26" rx="2"/><text x="30" y="95">referencekode</text><line class="tg-skinne-tynd" x1="22" y1="120" x2="158" y2="120"/><line class="tg-skinne-tynd" x1="22" y1="134" x2="120" y2="134"/><line class="tg-gulvlinje" x1="22" y1="162" x2="158" y2="162"/><text x="22" y="176" class="tg-lille">UNDERSKRIFT</text><rect class="tg-profil" x="270" y="28" width="160" height="156" rx="4"/><text x="282" y="50" class="tg-fremhaev">Køber</text><text x="282" y="64" class="tg-lille">afhentningskvittering</text><rect class="tg-modul" x="282" y="78" width="136" height="26" rx="2"/><text x="290" y="95">referencekode</text><line class="tg-skinne-tynd" x1="282" y1="120" x2="418" y2="120"/><line class="tg-skinne-tynd" x1="282" y1="134" x2="380" y2="134"/><line class="tg-gulvlinje" x1="282" y1="162" x2="418" y2="162"/><text x="282" y="176" class="tg-lille">UNDERSKRIFT</text><g class="tg-maal"><line x1="162" y1="91" x2="278" y2="91" marker-start="url(#pil-auktion-4)" marker-end="url(#pil-auktion-4)"/><text x="220" y="84" text-anchor="middle">skal stemme</text></g><rect class="tg-kuffert" x="130" y="198" width="180" height="48" rx="3"/><text x="142" y="217" class="tg-fremhaev">Registreringsattest</text><text x="142" y="234">del 2, fra sælger</text></svg>`,
          tekst: `Skematisk. Afhentning efter auktion på Klaravik. Kilde: <a href="${KFAQ}" rel="noopener">Klaravik</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${KVILKAR}" rel="noopener">Klaravik: Købsvilkår</a>, <a href="${AH}" rel="noopener">Auktionshuset: FAQ</a> og <a href="${RVILKAR}" rel="noopener">Retrade</a>, set den 7. oktober 2026. Du kan læse mere om ejerskiftet under <a href="/til-varebilen/salg-af-varebil/afmelding-og-nummerplader/">afmelding og nummerplader</a>.`
        ]
      },
      {
        overskrift: "Når køberen ikke henter",
        tekst: [
          `Hos Klaravik har køberen 12 dage efter auktionens slut til at hente bilen. Derefter kan Klaravik opkræve 500 kr. pr. påbegyndt uge for bud under 20.000 kr. og 1.000 kr. for bud over. Er bilen ikke afhentet inden 30 arbejdsdage, kan sælger via Klaravik hæve købet og sætte bilen til salg igen.`,
          `Hos Retrade er fristen for afhentning 21 dage. Bilen står for sælgers regning og risiko, indtil køber og sælger har aftalt afhentningen. Uden en aftale går ansvaret over til køberen den 21. dag efter auktionens slut. Efter 30 dage regnes det som misligholdelse, og Retrade kan opkræve pladsleje på 500 kr. pr. påbegyndt uge.`,
          `Fristen gælder også den anden vej. Kan sælger ikke give køberen mulighed for at hente bilen inden for 12 dage hos Klaravik eller 21 dage hos Retrade, kan køberen kræve handlen opfyldt eller hæve den.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Inden for 12 dage", "Køberen henter bilen."],
            ["Efter 12 dage", "Klaravik kan opkræve 500 kr. pr. påbegyndt uge, når buddet er under 20.000 kr., og 1.000 kr., når det er over."],
            ["Efter 30 arbejdsdage", "Sælger kan hæve købet."]
          ],
          note: `Tidslinjen viser Klaraviks vilkår. Kilde: <a href="${KVILKAR}" rel="noopener">Klaravik</a>, set den 4. oktober 2026. Retrades frister er fra <a href="${RVILKAR}" rel="noopener">Retrade: Auktionsregler og vilkår</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Gæld og leasede biler",
        tekst: [
          `Klaravik sikrer, at gæld i køretøjet afvikles, før køberen bliver ejer. Overtager Klaravik ejerskabet for at afvikle gælden, sker ejerskiftet elektronisk ud fra købers kontooplysninger, og det kan tage nogle ekstra dage.`,
          `Har en tredjemand sikkerhed i bilen, eller er den leaset, skal ejendomsretten først overgå til sælger. Klaravik skriver, at det i nogle tilfælde tager mere end to uger. Retrade kræver, at objektet er bekræftet pantfrit, før det kommer på auktion, og en finansieringspartner skal give skriftligt samtykke til, at kontrakten indfries.`,
          `På finansiel leasing indfrier leasingtager restværdien. Se <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 160" role="img" aria-label="En leaset bil eller en bil med gæld: ejendomsretten overgår først til sælger, hvilket kan tage mere end to uger, og derefter sælges bilen på auktion."><text class="tg-lille" x="0" y="18">GÆLD ELLER LEASING I BILEN</text><rect class="tg-kasse" x="0" y="32" width="120" height="56" rx="3"/><text class="tg-fremhaev" x="60" y="55" text-anchor="middle">Ejer i dag</text><text x="60" y="73" text-anchor="middle">fx leasingselskab</text><path class="tg-pil" d="M122,60 L138,60 M132,55 L138,60 L132,65"/><rect class="tg-modul" x="140" y="32" width="120" height="56" rx="3"/><text class="tg-modul__tekst" x="200" y="55" text-anchor="middle">SÆLGER</text><text class="tg-modul__tekst" x="200" y="73" text-anchor="middle">BLIVER EJER</text><path class="tg-pil" d="M262,60 L278,60 M272,55 L278,60 L272,65"/><rect class="tg-kasse" x="280" y="32" width="120" height="56" rx="3"/><text class="tg-fremhaev" x="340" y="55" text-anchor="middle">Auktion</text><text x="340" y="73" text-anchor="middle">køber bliver ejer</text><text x="200" y="110" text-anchor="middle">kan tage mere end to uger</text><text x="0" y="146">Klaravik sikrer, at gælden afvikles først</text></svg>`,
          tekst: `Skematisk. Derfor tager salget af en leaset bil eller en bil med gæld længere tid. Kilde: <a href="${KVILKAR}" rel="noopener">Klaravik</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${KSAELG}" rel="noopener">Klaravik: Sælg på Klaravik</a> og <a href="${RVILKAR}" rel="noopener">Retrade: Auktionsregler og vilkår</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Moms på auktion",
        tekst: [
          `Om der skal moms på buddet, afhænger af, om bilen sælges med moms, og hvem køberen er. Reglerne for selve salget står i <a href="/til-varebilen/salg-af-varebil/saelg-firmabil-moms/">moms ved salg af varebil</a>. Her er auktionshusenes egne vilkår.`
        ],
        punkter: [
          `<strong>Klaravik</strong> lægger moms på alle objekter, medmindre andet er angivet. Ved brugtmomsordningen er der ingen moms på buddet, men altid på købersalæret.`,
          `<strong>Auktionshuset</strong> afregner alle køb med dansk moms. Skal varen eksporteres, kan køberen få eksportdokumenter og bagefter få momsen refunderet.`,
          `<strong>Retrade</strong> lægger sædvanlig moms på, når køber og sælger er registreret i samme land. En virksomhed med gyldigt momsnummer i et andet land faktureres uden lokal moms.`
        ],
        efter: [
          `Kilder: <a href="${KFAQ}" rel="noopener">Klaravik: Spørgsmål og svar</a>, <a href="${AH}" rel="noopener">Auktionshuset: FAQ</a> og <a href="${RVILKAR}" rel="noopener">Retrade: Auktionsregler og vilkår</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Udenlandske købere",
        tekst: [
          `Udenlandske købere hos Klaravik skal føre bilen ud af Danmark straks efter afhentningen, til det land, hvor de er registreret eller folkeregisterført. Hos Retrade skal en udenlandsk køber også eksportere varen, og afhentningen skal ske med en transportagent eller speditør, der har et CMR-dokument med.`,
          `En udenlandsk virksomhed med gyldigt momsnummer kan få momsen refunderet af Klaravik mod eksportdokumentation. Klaraviks købsvilkår sætter fristen til 10 dage efter udgangen af den måned, hvor bilen blev afhentet.`,
          `Om en del af registreringsafgiften kan betales tilbage, når bilen forlader Danmark, står i <a href="/til-varebilen/salg-af-varebil/eksport-af-varebil/">eksport af varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 212" role="img" aria-label="To lister med de dokumenter, Klaravik skal have for at refundere momsen. Ved salg i EU er det CMR-fragtbrev eller fragtlabel, faktura fra transportfirmaet, Klaraviks eksportdeklaration og købers IBAN- og SWIFT-nummer. Ved eksport uden for EU er det toldpapirer, eksportdeklarationen og IBAN- og SWIFT-nummeret."><text class="tg-fremhaev" x="20" y="22">Køber i EU</text><text class="tg-fremhaev" x="215" y="22">Køber uden for EU</text><rect class="tg-profil" x="10" y="30" width="185" height="174" rx="4"/><rect class="tg-profil" x="205" y="30" width="185" height="174" rx="4"/><rect class="tg-modul" x="22" y="40" width="161" height="34"/><text x="30" y="54">CMR-fragtbrev</text><text x="30" y="68">eller fragtlabel</text><rect class="tg-modul" x="22" y="80" width="161" height="34"/><text x="30" y="94">Faktura fra</text><text x="30" y="108">transportfirmaet</text><rect class="tg-kasse" x="22" y="120" width="161" height="34"/><text x="30" y="134">Klaraviks</text><text x="30" y="148">eksportdeklaration</text><rect class="tg-kasse" x="22" y="160" width="161" height="34"/><text x="30" y="174">Købers IBAN-</text><text x="30" y="188">og SWIFT-nummer</text><rect class="tg-modul" x="217" y="40" width="161" height="34"/><text x="225" y="61">Toldpapirer</text><rect class="tg-kasse" x="217" y="80" width="161" height="34"/><text x="225" y="94">Klaraviks</text><text x="225" y="108">eksportdeklaration</text><rect class="tg-kasse" x="217" y="120" width="161" height="34"/><text x="225" y="134">Købers IBAN-</text><text x="225" y="148">og SWIFT-nummer</text></svg>`,
          tekst: `Skematisk. Dokumenterne, en udenlandsk virksomhed sender til Klaravik for at få momsen refunderet. De fremhævede dokumenter er forskellige i de to lister. Kilde: <a href="${KVILKAR}" rel="noopener">Klaravik: Købsvilkår, punkt 15</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal auktionsmægleren vide",
    spoergsmaal_manchet: "Så kan materialet laves ved første besøg.",
    spoergsmaal: [
      "Registreringsnummer, kilometerstand og servicehistorik.",
      "Kendte fejl og skader.",
      "Om bilen sælges med eller uden moms.",
      "Ønsket mindstepris.",
      "Om der er gæld eller restværdi i bilen, og hvem der står som ejer.",
      "Om et leasing- eller finansieringsselskab skal give samtykke til salget.",
      "Hvor og hvornår bilen kan afhentes, og hvem der udleverer den og registreringsattesten."
    ],
    faq: [
      ["Hvad koster det at sælge en varebil på auktion?", "Hos Klaravik betaler sælger en provision af salgsbeløbet og intet, hvis bilen ikke bliver solgt. Auktionshuset og Retrade oplyser ikke sælgers pris på deres sider."],
      ["Hvad betaler køberen oveni buddet?", "Køberen betaler et salær. Hos Auktionshuset er det 20 % af budsummen, mindst 50 kr. pr. vare, plus moms, og hos Klaravik er det et budgebyr, der vises på objektet."],
      ["Hvornår får sælger pengene fra Klaravik?", "Sælger får pengene senest 7 arbejdsdage efter afhentningen, når bilen er betalt og hentet."],
      ["Er det højeste bud bindende, hvis mindsteprisen ikke er nået?", "Hos Klaravik er buddet bindende for køberen i to hverdage, og sælger kan afvise eller acceptere det. Hos Retrade er det højeste bud bindende i 24 timer efter auktionens slut."],
      ["Hvem står for ejerskiftet ved auktionssalg?", "Køber og sælger laver ejerskiftet sammen ved afhentningen, og sælger leverer registreringsattestens del 2."],
      ["Kan en leaset varebil sælges på auktion?", "Ja, men ejendomsretten skal først overgå til sælger. Klaravik skriver, at det kan tage mere end to uger."],
      ["Kan sælger trække bilen tilbage under auktionen?", "Ikke hos Retrade. Her kan et objekt, der er sat på auktion, ikke trækkes tilbage, og det må ikke sælges andre steder i auktionsperioden."],
      ["Kan en privat køber fortryde købet?", "Hos Auktionshuset og Retrade har private købere 14 dages fortrydelsesret, og det gælder også i Klaraviks vilkår for privatpersoner. Erhvervskøbere har ikke fortrydelsesret hos Auktionshuset og Retrade."],
      ["Hvad sker der, hvis køberen ikke henter bilen?", "Hos Klaravik kan der efter 12 dage komme et gebyr på 500 eller 1.000 kr. pr. påbegyndt uge, og efter 30 arbejdsdage kan sælger hæve købet. Hos Retrade er fristen 21 dage."]
    ],
    kilder: [
      { navn: "Klaravik: Sælg på Klaravik", url: KSAELG, dato: "2026-10-07" },
      { navn: "Klaravik: Spørgsmål og svar", url: KFAQ, dato: "2026-10-07" },
      { navn: "Klaravik: Købsvilkår", url: KVILKAR, dato: "2026-10-07" },
      { navn: "Auktionshuset: FAQ (pris, moms og salær)", url: AH, dato: "2026-10-07" },
      { navn: "Retrade: Auktionsregler og vilkår", url: RVILKAR, dato: "2026-10-07" },
      { navn: "Retrade: Sælg dine maskiner og udstyr", url: RSAELG, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Klaravik påtager sig ikke ansvar for objektets stand og er ikke eksportør ved salg til udlandet (købsvilkår punkt 1 og 3).", KVILKAR],
    ["Retrade: det er altid sælgeren, der er ansvarlig for auktionsobjektet; Retrade påtager sig ikke rollen som eksportør eller toldklarerer ved salg til udenlandske købere.", RVILKAR],
    ["Klaravik: et besøg fra den lokale auktionsmægler er alt, hvad der kræves, og en uge senere kan køberen afhente objektet.", KSAELG],
    ["Klaravik: alle virksomheder kan sælge på Klaravik.", KSAELG],
    ["Auktionshuset sælger ikke varer for private, men for virksomheder, kuratorer, finansieringsselskaber og andre professionelle aktører.", AH],
    ["Retrade henvender sig primært til købere, der er virksomheder registreret med eget CVR-nummer.", RVILKAR],
    ["Hos Auktionshuset kan man byde både som privat og som firma.", AH],
    ["Klaravik oplyser 140.000 budgivere og 63.000 auktioner om året.", KSAELG],
    ["Retrade: siden 2007 har over 100.000 nordiske virksomheder brugt Retrade.", RSAELG],
    ["Klaravik: vil man vide mere om provisionen, kan man kontakte kundeservice eller auktionsmægleren i sit nærområde.", KFAQ],
    ["Retrade: objekter, der er sat på auktion, kan ikke trækkes tilbage og må ikke sælges via andre kanaler i auktionsperioden.", RVILKAR],
    ["Auktionshuset: købers samlede pris vises inkl. moms og salær, før buddet bekræftes.", AH],
    ["Auktionshuset: et bud på 1.000 kr. bliver 1.200 kr. med 20 % salær og 1.500 kr. med moms på 25 %. Regneeksemplet med 100.000 kr., 120.000 kr. og 150.000 kr. bruger samme regel.", AH],
    ["Retrade: på de fleste auktioner tilkommer købersalær, og betalingsomkostninger på 250 kr. ekskl. moms tillægges hver faktura.", RVILKAR],
    ["Klaravik: køberen modtager fakturaen fra PayEx pr. e-mail, normalt samme dag som auktionen slutter.", KFAQ],
    ["Klaravik: når betalingen er registreret, modtager køberen en udleveringskvittering med kontaktoplysninger på sælger og aftaler afhentningstidspunkt med sælger.", KVILKAR],
    ["Klaravik: der gælder særlige betingelser, hvis køberen har søgt finansiering.", KSAELG],
    ["Retrade besøger sælger, tager billeder og video og laver tilstandsvurderinger; sælger godkender annoncerne og sætter reservationspriser; auktionerne starter og slutter på aftalte tidspunkter; afregningen sker via en afregningskonto.", RSAELG],
    ["Retrade: køberen modtager betalingsbetingelserne inden for to arbejdsdage; betalingsfristen er 5 dage; når betalingen er registreret, får køber og sælger en udleveringsbekræftelse, og køber skal straks kontakte sælger for at aftale afhentning.", RVILKAR],
    ["Retrade: en auktion forlænges med fem minutter, hvis der bydes inden for de sidste fem minutter før sluttid.", RVILKAR],
    ["Auktionshuset: et bud inden for de sidste tre minutter forlænger med tre minutter, indtil der ikke kommer flere bud; katalognumrene udløber med 30 sekunders mellemrum.", AH],
    ["Klaravik sammenligner forlængelsen med første-anden-tredje på fysiske auktioner, og den giver andre budgivere en chance for at byde mod.", KFAQ],
    ["Klaravik, Auktionshuset og Retrade har automatiske bud eller maksimumbud, som systemet byder op til; hos Klaravik og Retrade er maksimumbuddet ikke synligt for andre budgivere.", KFAQ],
    ["Retrade: det er ikke tilladt for ejer eller sælger at byde på egne objekter.", RVILKAR],
    ["Retrade: sælger fastsætter reservationsprisen i samråd med Retrade, som bistår med markedsdata, anbefalinger og rådgivning.", RVILKAR],
    ["Klaravik: bindingsperioden på to hverdage forlænges med yderligere to hverdage, hver gang der afgives et nyt bud under forhandling; Klaravik kontakter køberen, når mindsteprisen ikke er nået.", KVILKAR],
    ["Retrade forhandler for sælger, når højeste bud er lavere end reservationsprisen.", RSAELG],
    ["Klaravik og Retrade tilbyder normalt ikke fysisk fremvisning under auktionen; Auktionshuset holder som regel eftersyn, men varerne er ikke testet eller funktionsafprøvet.", AH],
    ["Klaravik: henter en speditør eller fuldmægtig objektet, anses det for godkendt, når det forlader afhentningsstedet; i vilkårene for erhvervskøbere gælder ingen retur- eller fortrydelsesret ved reparationsobjekter; Klaravik er ikke part i en reklamation, men kan formidle.", KVILKAR],
    ["Auktionshuset: privatkøbere har 14 dages fortrydelsesret fra den dag, varen udleveres; erhvervskøbere har ikke fortrydelsesret.", AH],
    ["Retrade: private forbrugere har 14 dages fortrydelsesret fra det tidspunkt, de kommer i besiddelse af auktionsvaren; virksomheder har ingen fortrydelsesret; Retrade fratrækker minimum 25 % værdiforringelse af budsummen; køber hæfter for yderligere værditab ved mere end 10 km kørsel for køretøjer; private kan kun byde på og købe varer fra eget hjemland.", RVILKAR],
    ["Klaraviks købsvilkår for privatpersoner giver 14 dages fortrydelsesret efter forbrugeraftaleloven.", KVILKAR],
    ["Klaravik: betaling til Klaravik sker med frigørende virkning for køber.", KVILKAR],
    ["Retrade: betales der ikke inden fristen, annulleres handlen, og køber skal betale tabserstatning på 15 %, minimum 3.000 kr. ekskl. moms; objektet kan sælges igen på en ny auktion.", RVILKAR],
    ["Auktionshuset: ordren skal være betalt senest kl. 12 dagen før første udleveringsdag; en ordre, der ikke er betalt efter 14 dage, annulleres; beløb over 20.000 kr. kan kun betales med bankoverførsel.", AH],
    ["Klaravik: opdragsgiver og køber er i fællesskab ansvarlige for at gennemføre ejerskiftet ved afhentning.", KVILKAR],
    ["Auktionshuset: der følger registreringsattest med køretøjerne, og i sjældne tilfælde eftersendes den.", AH],
    ["Retrade: køber kan afhente mod fremvisning af udleveringsbekræftelsen.", RVILKAR],
    ["Motorstyrelsen: køberen har 4 hverdage til at omregistrere, og indtil da betaler sælger afgifter og ansvarsforsikring.", OMREG],
    ["Retrade: objektet står for sælgers regning og risiko, indtil afhentning er aftalt; fristen for afhentning er 21 dage; ikke afhentet inden 30 dage er misligholdelse; Retrade kan opkræve pladsleje på 500 kr. ekskl. moms pr. påbegyndt uge.", RVILKAR],
    ["Klaravik og Retrade: kan sælger ikke give køber mulighed for afhentning inden for 12 dage (Klaravik) eller 21 dage (Retrade), kan køber kræve opfyldelse eller hæve købet.", KVILKAR],
    ["Klaravik: overtager Klaravik ejerskabet for at afvikle gæld, udføres et elektronisk ejerskifte baseret på købers kontoinformation, hvilket kan give nogle ekstra dage.", KSAELG],
    ["Retrade: alle salgsobjekter skal være bekræftet pantfrie, før de lægges på auktion, og en finansieringspartner skal give skriftligt samtykke til indfrielse af kontrakten.", RVILKAR],
    ["Auktionshuset: alle køb afregnes med dansk moms; skal varen eksporteres, kan køberen få eksportdokumenter og derefter få momsen refunderet.", AH],
    ["Retrade: er køber og sælger registreret i samme land, lægges sædvanlig moms på; virksomheder med gyldigt momsnummer i et andet land end sælger faktureres uden lokal moms.", RVILKAR],
    ["Klaravik: udenlandske købere skal eksportere objektet til det land, hvor køberen er registreret eller folkeregisterført; momsrefusion kræver ved EU-salg CMR-fragtbrev eller fragtlabel, faktura fra transportfirmaet, Klaraviks eksportdeklaration og IBAN- og SWIFT-nummer, og ved eksport uden for EU toldpapirer, eksportdeklarationen og IBAN- og SWIFT-nummer.", KVILKAR],
    ["Retrade: udenlandske købere skal eksportere auktionsvaren, og afhentning skal ske med transportagent eller speditør med CMR-dokument.", RVILKAR]
  ]
};
