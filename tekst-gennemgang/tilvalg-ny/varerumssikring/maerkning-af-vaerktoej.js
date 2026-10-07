// Underside /til-varebilen/varerumssikring/maerkning-af-vaerktoej/ (07-10-2026)
var SG = `https://www.sikringsguiden.dk/raadgivning/raad-om-tyveri/tyveri-fra-varebiler/`;
var POLHAEL = `https://politi.dk/indbrud/undgaa-at-blive-haeler`;
var POLHITTE = `https://politi.dk/hittegods-og-tyvekoster`;
var UNIERHV = `https://unisecure.dk/vare-kategori/erhverv/`;
var UNIKIT = `https://unisecure.dk/vare/dna-maerkning-til-1-varebil-og-25-stykker-vaerktoej/`;
var SEL = `https://www.selectadna.dk/`;
var SELFAQ = `https://www.selectadna.dk/faqs-sprgsml-svar`;
var TRYGH = `https://tryg.dk/forsikringer-til-haandvaerkere`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var INST25 = `https://www.installator.dk/tyveri-af-vaerktoj-fra-varebiler-boomer-det-gor-maerkningen-ikke`;
var FP24 = `https://via.ritzau.dk/pressemeddelelse/13782161/voldsom-stigning-i-tyveri-fra-handvaerkerbiler-i-kobenhavnsomradet?publisherId=4901971&lang=da`;
var TDFOREBYG = `https://www.topdanmark.dk/erhverv/gode-raad/forebyg-indbrud-i-vare-vognen/`;

module.exports = {
  id: "varerumssikring/maerkning-af-vaerktoej",
  side: {
    slug: "maerkning-af-vaerktoej",
    navn: "Mærkning af værktøj",
    titel: "Mærkning af værktøj: DNA-mærkning og serienumre",
    kort: `DNA-mærkning, synlige sikringsmærker og en liste over serienumre: priser på DNA-kit og det, F&P, politiet og forsikringen skriver.`,
    beskrivelse: `Mærkning af værktøj i varebilen: DNA-kit fra 796 kr., sikringsmærker, liste over serienumre, og hvad F&P, politiet og forsikringen skriver.`,
    manchet: `Mærkning stopper ikke indbruddet. Den gør værktøjet sværere at sælge og gør det muligt at bevise, hvem det tilhører, når politiet finder det. Her kan du se, hvordan DNA-mærkning virker, hvad et kit koster, og hvordan en liste over serienumre hjælper ved anmeldelsen.`,
    visuel: {
      hero: "varerumssikring",
      kort_fortalt: [
        ["DNA-kit til 1 varebil", "895 kr.", "og 25 stk. værktøj"],
        ["Pris pr. mærket stk.", "ca. 13-36 kr.", "fra største til mindste varebilskit"],
        ["Holdbarhed", "mindst 5 år", "også udendørs, oplyser SelectaDNA"],
        ["Registret", "over 40 lande", "hvor politiet kan søge i det"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Tre metoder",
        tekst: [
          `Værktøj kan mærkes på tre måder, og de supplerer hinanden. DNA-mærkningen er nærmest usynlig for det blotte øje, men den beviser, hvem værktøjet tilhører. Synlige mærker viser tyven, at tingene er mærket, og listen over serienumre gør det muligt at beskrive præcis, hvad der er stjålet.`
        ],
        kort: [
          ["DNA-mærkning", "Usynlig væske med en unik kode, UV-sporstof og mikrodots. Koden registreres i en database."],
          ["Synlig mærkning", "Sikringsmærker på bil og værktøj, der viser tyven, at tingene er mærket, og firmanavnet indgraveret i værktøjet."],
          ["Serienumre", "En liste over værktøjet med mærke, model og serienummer og gerne et billede af hvert stykke."]
        ]
      },
      {
        overskrift: "Hvorfor umærket værktøj ikke kommer hjem",
        tekst: [
          `Unisecure har til fagbladet Installatør forklaret, at politiet finder meget værktøj, men ikke kan bevise, at umærket værktøj er stjålet, og derfor må lade det ligge. Ifølge Unisecure er 70-80 procent af det værktøj, firmaet finder hos tyvene sammen med politiet, ikke mærket.`,
          `Det Kriminalpræventive Råd har opgjort, at omkring 250.000 danskere køber hælervarer hvert år, og at 80 procent af de stjålne ting bliver solgt videre i Danmark. Kun hver femte hælervare bliver kørt ud af landet, gengav Installatør i 2025. Ifølge artiklen betyder det, at en stor del af hælervarerne kan komme tilbage til ejerne.`,
          `Værdien kan være høj. En VVS-virksomhed med 60 montører fortalte samme sted, at den typisk køber værktøj for omkring 42.000 kr., når den ansætter en ny medarbejder.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Køber hælervarer hvert år", "ca. 250.000", "danskere"],
            ["Stjålne ting solgt videre i Danmark", "80", "%"],
            ["Umærket værktøj hos tyvene", "70-80", "%, ifølge Unisecure"]
          ],
          note: `Tallene for hælervarer er Det Kriminalpræventive Råds. Kilde: <a href="${INST25}" rel="noopener">Installatør, 13. februar 2025</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det skriver F&amp;P",
        tekst: [
          `Forsikring &amp; Pensions Sikringsguiden anbefaler at mærke værktøjet synligt eller usynligt og sætte et klistermærke på bilen, så tyven kan se, at værktøjet er mærket. F&amp;P gentog rådene i en pressemeddelelse i februar 2024 og tilføjede, at man ikke skal kunne kigge ind i varerummet udefra.`,
          `Sikringsguiden peger også på en liste over værktøjet med mærke og serienumre, og på at oplyse politiet om mærkningen ved en anmeldelse.`,
          `Kilder: <a href="${SG}" rel="noopener">Sikringsguiden: Tyveri fra varebiler</a>, set den 4. oktober 2026, og <a href="${FP24}" rel="noopener">F&amp;P: Voldsom stigning i tyveri fra håndværkerbiler</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Det skriver politiet",
        tekst: [
          `Politiet skriver, at den, der har købt tyvekoster, ikke ejer dem, selvom der er betalt for dem. Politiet kan konfiskere tingene.`,
          `Ser du en genstand, der tilhører dig, blandt politiets hittegods og tyvekoster, kan du ringe til politiets servicecenter på 114. Mærkningen og listen over serienumre gør det lettere at vise, at tingen er din.`,
          `Kilder: <a href="${POLHAEL}" rel="noopener">Politiet: Undgå at blive hæler</a> og <a href="${POLHITTE}" rel="noopener">Politiet: Hittegods og tyvekoster</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Sådan virker DNA-mærkningen",
        tekst: [
          `Hver flaske indeholder et unikt syntetisk DNA i et vandbaseret UV-klæbemiddel med hundredvis af mikroprikker. Du mærker selv tingene og registrerer dem bagefter i en online database. Bliver værktøjet stjålet og fundet, kan politiet se mærkningen med en UV-lygte og aflæse koden.`,
          `SelectaDNA skriver, at deres DNA er testet efter PAS 820, og at mærkningen beskytter i mindst 5 år, også udendørs. Det syntetiske DNA kan ikke analyseres uden kendskab til nøglekoderne og kan derfor ikke kopieres.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Forløb i fem trin med pile. Værktøjet mærkes, koden registreres i databasen, politiet finder værktøjet med en UV-lygte, mikroprikken aflæses i et mikroskop, og databasen viser, hvem ejeren er."><defs><marker id="pil-maerkning-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="10" y="30" width="112" height="56"/><text class="tg-modul__tekst" x="66" y="54" text-anchor="middle">MÆRK</text><text class="tg-modul__tekst" x="66" y="70" text-anchor="middle">VÆRKTØJET</text><line class="tg-pil" x1="124" y1="58" x2="150" y2="58" marker-end="url(#pil-maerkning-1)"/><rect class="tg-kasse" x="154" y="30" width="112" height="56"/><text x="210" y="54" text-anchor="middle">registrér</text><text x="210" y="70" text-anchor="middle">koden</text><line class="tg-skinne-tynd" x1="210" y1="88" x2="210" y2="122"/><text class="tg-lille" x="218" y="110">TYVERI</text><rect class="tg-kasse" x="10" y="160" width="112" height="56"/><text x="66" y="184" text-anchor="middle">politiet finder</text><text x="66" y="200" text-anchor="middle">det med UV-lys</text><line class="tg-pil" x1="124" y1="188" x2="150" y2="188" marker-end="url(#pil-maerkning-1)"/><rect class="tg-kasse" x="154" y="160" width="112" height="56"/><text x="210" y="184" text-anchor="middle">mikroprikken</text><text x="210" y="200" text-anchor="middle">aflæses</text><line class="tg-pil" x1="268" y1="188" x2="290" y2="188" marker-end="url(#pil-maerkning-1)"/><rect class="tg-modul" x="294" y="160" width="100" height="56"/><text class="tg-modul__tekst" x="344" y="184" text-anchor="middle">DATABASEN</text><text class="tg-modul__tekst" x="344" y="200" text-anchor="middle">VISER EJEREN</text><path class="tg-pil" fill="none" d="M210,124 L210,136 L66,136 L66,156" marker-end="url(#pil-maerkning-1)"/><g class="tg-nr"><circle cx="16" cy="30" r="9"/><text x="16" y="34" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="160" cy="30" r="9"/><text x="160" y="34" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="16" cy="160" r="9"/><text x="16" y="164" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="160" cy="160" r="9"/><text x="160" y="164" text-anchor="middle">4</text></g><g class="tg-nr"><circle cx="300" cy="160" r="9"/><text x="300" y="164" text-anchor="middle">5</text></g><text class="tg-lille" x="200" y="244" text-anchor="middle">SKEMATISK</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${SEL}" rel="noopener">SelectaDNA Danmark</a> og <a href="${SELFAQ}" rel="noopener">SelectaDNA: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan påføres væsken",
        tekst: [
          `SelectaDNA beskriver påføringen trin for trin. Det er en lille mængde, der skal til, og politiet kan finde selv et tyndt lag med deres UV-lygter. Derfor handler det mest om at vælge stederne med omtanke.`
        ],
        punkter: [
          `<strong>Ryst.</strong> Ryst flasken ca. 30 sekunder, før du dypper podepinden.`,
          `<strong>Mængde.</strong> Påfør et tyndt lag på størrelse med en 1-krone. Jo tykkere lag, jo mere synlig bliver mærkningen.`,
          `<strong>Sted.</strong> Sæt mærkningen, hvor den ikke ses, gerne i riller, sprækker og samlinger. SelectaDNA foreslår to steder på hver genstand.`,
          `<strong>Værktøj.</strong> Lidt ekstra væske gør ikke noget på værktøj, der bruges dagligt, skriver SelectaDNA.`,
          `<strong>Registrering.</strong> Bagefter registrerer du de mærkede genstande i den online database.`
        ],
        punkt_ikon: "trin",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 240" role="img" aria-label="Skematisk boremaskine med to DNA-mærkninger: en i samlingen under håndtaget og en i en rille på batteriet">
<rect x="120" y="50" width="150" height="50" rx="10" class="tg-profil"/>
<rect x="270" y="62" width="40" height="26" class="tg-kasse"/>
<line x1="310" y1="75" x2="360" y2="75" class="tg-gulvlinje"/>
<path d="M160,100 L198,100 L188,165 L150,165 Z" class="tg-profil"/>
<rect x="132" y="165" width="76" height="32" rx="4" class="tg-kasse"/>
<line x1="140" y1="181" x2="200" y2="181" class="tg-skinne-tynd"/>
<circle cx="192" cy="104" r="6" class="tg-modul"/>
<circle cx="150" cy="181" r="6" class="tg-modul"/>
<g class="tg-call"><line x1="192" y1="104" x2="300" y2="130"/><circle cx="192" cy="104" r="3"/><text x="304" y="128" class="tg-call__navn">Mærkning 1</text><text x="304" y="143" class="tg-call__under">i en samling</text></g>
<g class="tg-call"><line x1="150" y1="181" x2="96" y2="150"/><circle cx="150" cy="181" r="3"/><text x="8" y="140" class="tg-call__navn">Mærkning 2</text><text x="8" y="155" class="tg-call__under">i en rille</text></g>
<text x="210" y="228" text-anchor="middle" class="tg-lille">TYNDT LAG, CA. EN 1-KRONE STOR</text>
</svg>`,
          tekst: `Skematisk. Maskinen har to mærkninger, en i en samling og en i en rille. I riller og sprækker bliver et spor af klæbemidlet med DNA og UV siddende, selv hvis mikroprikkerne skrabes af. Kilde: <a href="${SELFAQ}" rel="noopener">SelectaDNA: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Nogle overflader tager ikke så godt imod væsken. SelectaDNA skriver, at det afhænger af overfladens struktur og af, hvordan producenten har behandlet den.`
        ]
      },
      {
        overskrift: "DNA-kit og priser",
        tekst: [
          `Unisecure sælger SelectaDNA i kit efter antallet af mærkninger. Priserne er uden moms. Varebilskittene indeholder også mærkater til bilerne, og Unisecure sælger virksomhedskit med samme antal mærkninger til de samme priser. Kittet er en engangsudgift, og der er intet abonnement.`
        ],
        tabel: {
          kolonner: ["Kit", "Dækker", "Pris"],
          raekker: [
            ["SelectaDNA Mærknings Kit", "25 mærkninger", "796 kr."],
            ["SelectaDNA Varebils Kit 25", "1 varebil og 25 stk. værktøj", "895 kr."],
            ["SelectaDNA Varebils Kit 100", "4 varebiler og 100 stk. værktøj", "2.995 kr."],
            ["SelectaDNA Varebils Kit 500", "20 varebiler og 500 stk. værktøj", "9.495 kr."],
            ["SelectaDNA Varebils Kit 1000", "40 varebiler og 1.000 stk. værktøj", "13.395 kr."],
            ["SelectaDNA Metallic DNA", "Metallisk udgave", "2.995 kr."]
          ],
          note: `Kilde: <a href="${UNIERHV}" rel="noopener">Unisecure: erhverv</a>, webshoppriser, set den 7. oktober 2026.`
        },
        efter: [
          `Prisen pr. mærket stykke værktøj ligger på omkring 36 kr. i det mindste varebilskit og omkring 13 kr. i det største. Installatør skrev i 2025, at mærkning til varebilen og alt værktøjet kan fås for 7-800 kr.`
        ],
        figur: [
          {
            type: "soejler",
            enhed: "kr. pr. stk.",
            data: [
              ["Varebils Kit 25", 35.8],
              ["Varebils Kit 100", 29.95],
              ["Varebils Kit 500", 18.99],
              ["Varebils Kit 1000", 13.4]
            ],
            note: `Beregnet ud fra <a href="${UNIERHV}" rel="noopener">Unisecures</a> priser delt med antal mærkninger, set den 7. oktober 2026.`
          }
        ]
      },
      {
        overskrift: "Indholdet i et varebilskit",
        tekst: [
          `Det mindste varebilskit er beregnet til én bil og 25 stykker værktøj. Ud over væsken følger der mærkater med til både værktøjet og bilen, så tyven kan se, at tingene er mærket.`
        ],
        punkter: [
          `<strong>Væsken.</strong> 8 ml SelectaDNA med UV-sporstof, mikrodots og en unik DNA-kode, plus podepind.`,
          `<strong>Mærker.</strong> 36 runde sikringsmærker på 28 mm, tre bilmærkater på 7 x 9,5 cm og et ark med to mærkater på 5 x 5 cm til ruderne.`,
          `<strong>Registrering.</strong> Koden registreres gratis i en international database med plads til 50 udstyrsbeskrivelser.`,
          `<strong>Holdbarhed.</strong> SelectaDNA oplyser, at mærkningen beskytter i mindst 5 år, også udendørs.`,
          `<strong>Database.</strong> SelectaDNA oplyser, at politiet i over 40 lande kan søge i registret.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["SelectaDNA-væske", 8, "ml"],
            ["Runde sikringsmærker, 28 mm", 36, "stk."],
            ["Bilmærkater, 7 x 9,5 cm", 3, "stk."],
            ["Udstyrsbeskrivelser i databasen", 50, "stk."]
          ],
          note: `Tallene gælder SelectaDNAs varebilskit, som Unisecure sælger. Kilde: <a href="${UNIKIT}" rel="noopener">Unisecure: SelectaDNA Varebils Kit</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Mærkater på bilen",
        tekst: [
          `Mærkaterne er den synlige del af mærkningen. De tre store bilmærkater er til den udvendige side af bagdørene og sidedørene, og de små mærkater på 5 x 5 cm sidder indvendigt, fx i sideruderne i førerhuset.`,
          `SelectaDNA skriver, at advarselsmærkaterne går i mange små stykker, hvis nogen prøver at fjerne dem. De runde mærker på værktøjet krakelerer på samme måde, oplyser Unisecure.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil set fra siden med tre mærkater. Store mærkater sidder udvendigt på bagdøren og skydedøren, og en lille mærkat sidder indvendigt i sideruden i førerhuset."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-skinne-tynd" x1="120" y1="84" x2="120" y2="200"/><line class="tg-skinne-tynd" x1="200" y1="84" x2="200" y2="200"/><rect class="tg-modul" x="86" y="120" width="14" height="19"/><rect class="tg-modul" x="150" y="120" width="14" height="19"/><rect class="tg-modul" x="262" y="100" width="10" height="10"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="93" y1="120" x2="60" y2="58"/><circle cx="93" cy="120" r="3"/><text class="tg-call__navn" x="5" y="30">Bagdør</text><text class="tg-call__under" x="5" y="44">7 x 9,5 cm udvendigt</text></g><g class="tg-call"><line x1="157" y1="120" x2="190" y2="58"/><circle cx="157" cy="120" r="3"/><text class="tg-call__navn" x="160" y="30">Skydedør</text><text class="tg-call__under" x="160" y="44">7 x 9,5 cm udvendigt</text></g><g class="tg-call"><line x1="267" y1="100" x2="330" y2="58"/><circle cx="267" cy="100" r="3"/><text class="tg-call__navn" x="395" y="30" text-anchor="end">Førerhus</text><text class="tg-call__under" x="395" y="44" text-anchor="end">5 x 5 cm indvendigt</text></g><text class="tg-lille" x="395" y="240" text-anchor="end">SKEMATISK</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${UNIKIT}" rel="noopener">Unisecure: SelectaDNA Varebils Kit</a> og <a href="${SELFAQ}" rel="noopener">SelectaDNA: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sikringsmærker og udstyr",
        tekst: [
          `Har virksomheden flere biler eller skal mærkaterne skiftes, sælger Unisecure dem også enkeltvis. Flere af mærkerne kræver, at man i forvejen er kunde. Unisecure sælger også en UV-lygte og et mikroskop.`
        ],
        tabel: {
          kolonner: ["Produkt", "Pris"],
          raekker: [
            ["Komplet sæt sikringsmærker til en varebil", "105 kr."],
            ["Bil- og varevognsmærke 5 x 5 cm, ark med 2", "35 kr."],
            ["Destruerbare sikringsmærker 28 mm, 12 stk.", "35 kr."],
            ["Vinduesmærker, ark med 2", "45 kr."],
            ["Skilt i hård plast, 30 x 30 cm", "155 kr."],
            ["UV-lygte FATBOY 10 W", "1.095 kr."],
            ["LED-mikroskop 60-120x", "220 kr."]
          ],
          note: `Kilde: <a href="${UNIERHV}" rel="noopener">Unisecure</a>, set den 7. oktober 2026. Flere af sikringsmærkerne kræver, at man er eksisterende kunde.`
        },
        efter: [
          `Mærkerne kan ikke fjernes uden synlige skader. UV-lygten viser UV-sporstoffet i mærkningen.`
        ]
      },
      {
        overskrift: "Firmanavn og skilt i forruden",
        tekst: [
          `Topdanmark foreslår at mærke værktøjet med firmanavnet. Det kan gøres med et lille gravørværktøj, og bagefter kan der stå et skilt i forruden om, at værktøjet er mærket med firmanavn.`,
          `Topdanmark foreslår også at tømme varebilen om natten og sætte et skilt i forruden med teksten "Intet værktøj i bilen". Kilde: <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Listen over serienumre",
        tekst: [
          `Listen er det, du har brug for, når tyveriet skal anmeldes. Den viser politiet, hvad der skal ledes efter, og den viser forsikringsselskabet, hvad der er stjålet. Topdanmark foreslår at registrere serienumrene og tage billeder af værktøjet, så politiet kan spore det.`,
          `GF skriver i sine erhvervsbilbetingelser, at selskabet kan forlange dokumentation for et krav, fx den originale købekontrakt, en købsnota, en finansierings- eller leasingaftale eller en regning. Findes der ingen dokumentation, kan GF afvise kravet eller fastsætte beløbet skønsmæssigt.`
        ],
        punkter: [
          `<strong>Indhold.</strong> Mærke, model og serienummer pr. stykke værktøj, jf. Sikringsguiden.`,
          `<strong>Billeder.</strong> Et billede af hvert stykke gør det lettere at genkende det, skriver Topdanmark.`,
          `<strong>Anmeldelse.</strong> Tyveri skal anmeldes til politiet med det samme. Listen og DNA-koden kan gives med.`,
          `<strong>Værdien pr. bil.</strong> Listen viser også, hvad der ligger i hver bil, når forsikringssummen skal sættes. Se <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Listen", "Skriv mærke, model og serienummer for hvert stykke værktøj, og tag et billede."],
            ["Anmeldelsen", "Anmeld tyveriet til politiet med det samme, og giv listen og DNA-koden med."],
            ["Forsikringen", "GF kan forlange dokumentation for kravet, fx købsnota eller regning."]
          ]
        },
        efter: [
          `Kilder: <a href="${TDFOREBYG}" rel="noopener">Topdanmark</a> og <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.3</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "En liste pr. bil",
        tekst: [
          `Har virksomheden flere biler, er det praktisk at føre listen pr. bil. Så kan du hurtigt se, hvad der lå i den bil, der blev brudt op, og hvilken DNA-kode værktøjet er mærket med. Listen passer kun, så længe den bliver rettet, når der købes nyt værktøj, eller når værktøj flyttes mellem bilerne.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Skematisk værktøjsliste med kolonnerne mærke, model, serienummer, bil, DNA-kode og billede. Hver række er et stykke værktøj."><rect class="tg-rum" x="10" y="20" width="380" height="180"/><rect class="tg-modul" x="10" y="20" width="380" height="30"/><text class="tg-modul__tekst" x="20" y="40">MÆRKE</text><text class="tg-modul__tekst" x="84" y="40">MODEL</text><text class="tg-modul__tekst" x="148" y="40">SERIENR.</text><text class="tg-modul__tekst" x="226" y="40">BIL</text><text class="tg-modul__tekst" x="270" y="40">DNA-KODE</text><text class="tg-modul__tekst" x="346" y="40">FOTO</text><line class="tg-skillevaeg" x1="10" y1="80" x2="390" y2="80"/><line class="tg-skillevaeg" x1="10" y1="110" x2="390" y2="110"/><line class="tg-skillevaeg" x1="10" y1="140" x2="390" y2="140"/><line class="tg-skillevaeg" x1="10" y1="170" x2="390" y2="170"/><line class="tg-skinne-tynd" x1="20" y1="66" x2="70" y2="66"/><line class="tg-skinne-tynd" x1="84" y1="66" x2="134" y2="66"/><line class="tg-skinne-tynd" x1="148" y1="66" x2="212" y2="66"/><line class="tg-skinne-tynd" x1="226" y1="66" x2="256" y2="66"/><line class="tg-skinne-tynd" x1="270" y1="66" x2="330" y2="66"/><rect class="tg-kasse" x="350" y="57" width="22" height="16"/><line class="tg-skinne-tynd" x1="20" y1="96" x2="70" y2="96"/><line class="tg-skinne-tynd" x1="84" y1="96" x2="134" y2="96"/><line class="tg-skinne-tynd" x1="148" y1="96" x2="212" y2="96"/><line class="tg-skinne-tynd" x1="226" y1="96" x2="256" y2="96"/><line class="tg-skinne-tynd" x1="270" y1="96" x2="330" y2="96"/><rect class="tg-kasse" x="350" y="87" width="22" height="16"/><line class="tg-skinne-tynd" x1="20" y1="126" x2="70" y2="126"/><line class="tg-skinne-tynd" x1="84" y1="126" x2="134" y2="126"/><line class="tg-skinne-tynd" x1="148" y1="126" x2="212" y2="126"/><line class="tg-skinne-tynd" x1="226" y1="126" x2="256" y2="126"/><line class="tg-skinne-tynd" x1="270" y1="126" x2="330" y2="126"/><rect class="tg-kasse" x="350" y="117" width="22" height="16"/><text class="tg-lille" x="200" y="214" text-anchor="middle">ÉN RÆKKE PR. STYKKE VÆRKTØJ</text></svg>`,
          tekst: `Skematisk. Kolonnerne følger Sikringsguidens råd om mærke og serienumre og Topdanmarks råd om at tage billeder.`
        }
      },
      {
        overskrift: "Kittets holdbarhed",
        tekst: [
          `Et uåbnet kit kan ligge i køleskab i op til 12 måneder. Når flasken er åbnet, skal væsken bruges inden for 4 måneder, og du kan åbne flasken flere gange i den periode, når låget bliver skruet tæt til.`,
          `Der er ingen måneds- eller årsafgift på kittet, oplyser SelectaDNA. Mærkningen er garanteret i 5 år, og registreringen ligger i databasen, så længe produktet findes.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Uåbnet", "Kittet kan ligge i køleskab i op til 12 måneder."],
            ["Åbnet", "Væsken skal bruges inden for 4 måneder."],
            ["Efter mærkningen", "Mærkningen er garanteret i 5 år."],
            ["Registreringen", "Den ligger i databasen, så længe produktet findes."]
          ],
          note: `SelectaDNA oplyser, at der ikke er nogen måneds- eller årsafgift på kittet. Kilde: <a href="${SELFAQ}" rel="noopener">SelectaDNA: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Mikroprikkerne",
        tekst: [
          `Mikroprikkerne gør det muligt for politiet at identificere en fundet genstand med det samme, skriver SelectaDNA. De kan ses med det blotte øje, men koden kræver et mikroskop.`
        ],
        punkter: [
          `<strong>Indhold.</strong> Hver prik har kundens registreringskode og databasens telefonnummer.`,
          `<strong>Størrelse.</strong> Prikkerne er på størrelse med knappenålshoveder, og koden aflæses i et mikroskop.`,
          `<strong>UV.</strong> Mærkningen lyser kraftigt blåt under politiets UV-lygter.`,
          `<strong>Kopi.</strong> Det syntetiske DNA kan ikke analyseres uden kendskab til nøglekoderne, skriver SelectaDNA.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 180" role="img" aria-label="En mikroprik på størrelse med et knappenålshoved og den samme prik forstørret i et mikroskop, hvor koden og telefonnummeret kan læses"><defs><marker id="pil-prik-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><circle class="tg-modul" cx="60" cy="90" r="3"/><text x="60" y="114" text-anchor="middle">på størrelse med</text><text x="60" y="128" text-anchor="middle">et knappenålshoved</text><line class="tg-pil" x1="124" y1="90" x2="212" y2="90" marker-end="url(#pil-prik-1)"/><text x="167" y="80" text-anchor="middle">i mikroskop</text><circle class="tg-modul" cx="290" cy="90" r="70"/><text class="tg-modul__tekst" x="290" y="84" text-anchor="middle">KODE</text><text class="tg-modul__tekst" x="290" y="104" text-anchor="middle">TELEFONNR.</text><text class="tg-lille" x="0" y="174">SKEMATISK · IKKE MÅLFAST</text></svg>`,
          tekst: `Tegningen er skematisk og viser en mikroprik, der er på størrelse med et knappenålshoved. I et mikroskop kan man læse kundens registreringskode og databasens telefonnummer.`
        },
        efter: [
          `Kilde: <a href="${SELFAQ}" rel="noopener">SelectaDNA: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Databasen og politiet",
        tekst: [
          `SelectaDNA skriver, at politiet i de lande, hvor SelectaDNA er repræsenteret, kan søge i databasen døgnet rundt. Værktøj, der bliver fundet i fx Polen, kan derfor komme tilbage til den rette ejer.`,
          `Databasen er akkrediteret efter LPS 1224, og firmaet bag, Selectamark, er ISO 9001-akkrediteret, blev etableret i 1985 og har en Secured by Design-licens. Kilde: <a href="${SELFAQ}" rel="noopener">SelectaDNA: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Salg og udlån af mærket værktøj",
        tekst: [
          `Sælges en mærket maskine, registreres den nye ejer i databasen under samme kode. Politiet kan se, hvem der har været registreret som ejer, skriver SelectaDNA. Flere ejere kan stå registreret med samme kode.`,
          `Lånes værktøjet ud i en periode, kan du på samme måde registrere en ny besidder. Den nye ejer skal ikke mærke værktøjet med sin egen DNA, for det bliver i stedet registreret om til den nye ejer og adresse.`
        ]
      },
      {
        overskrift: "DNA-kit via forsikringen",
        tekst: [
          `Trygs varebilforsikring Super indeholder et DNA-kit til mærkning af værktøj og udstyr. Tryg skriver samtidig, at du skal have en transportforsikring for at få dækket værktøj, der bliver stjålet fra varebilen.`,
          `Værktøjsproducenten Festool giver ifølge Installatør tre års garanti på værktøj, der er registreret, så det lettere kan finde tilbage til ejeren efter et tyveri. Kilder: <a href="${TRYGH}" rel="noopener">Tryg: Forsikringer til håndværkere</a> og <a href="${INST25}" rel="noopener">Installatør, 13. februar 2025</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så passer kittet til virksomheden.",
    spoergsmaal: [
      "Antal varebiler.",
      "Antal stykker værktøj og maskiner, der skal mærkes.",
      "Om mærkningen skal kunne ses, eller kun under UV-lys.",
      "Om virksomheden skal registreres under CVR-nummer.",
      "Om forsikringen allerede indeholder et DNA-kit.",
      "Hvem der fører listen over serienumre, og hvor den gemmes."
    ],
    faq: [
      ["Hvad koster DNA-mærkning af værktøj?", "Hos Unisecure 895 kr. for et kit til 1 varebil og 25 stykker værktøj og 13.395 kr. for 40 varebiler og 1.000 stykker. Priserne er uden moms (oktober 2026)."],
      ["Hvordan virker DNA-mærkning?", "En væske med en unik kode, UV-sporstof og mikrodots påføres værktøjet. Koden registreres i en database, som politiet kan søge i."],
      ["Hvor længe holder DNA-mærkningen?", "SelectaDNA oplyser mindst 5 år, også udendørs."],
      ["Hjælper det at sætte mærkater på bilen?", "F&amp;P's Sikringsguiden anbefaler et klistermærke på bilen, så tyven kan se, at værktøjet er mærket. SelectaDNAs mærkater går i små stykker, hvis nogen prøver at fjerne dem."],
      ["Skal jeg have en liste over serienumre?", "Sikringsguiden anbefaler en liste med mærke og serienumre, og Topdanmark foreslår også billeder. Forsikringsselskabet kan forlange dokumentation for kravet ved tyveri."],
      ["Hvor på værktøjet skal DNA-mærkningen sidde?", "SelectaDNA anbefaler steder, der ikke ses, gerne i riller, sprækker og samlinger og gerne to steder pr. genstand. Et tyndt lag på størrelse med en 1-krone er nok."],
      ["Hvor længe kan DNA-væsken holde, før den bruges?", "Op til 12 måneder uåbnet i køleskab og 4 måneder efter åbning, oplyser SelectaDNA."],
      ["Hvad sker der, når jeg sælger mærket værktøj?", "Den nye ejer registreres i databasen under samme kode. Politiet kan se, hvem der har været registreret som ejer."]
    ],
    kilder: [
      { navn: "Sikringsguiden (F&P): Tyveri fra varebiler", url: SG, dato: "2026-10-04" },
      { navn: "F&P: Voldsom stigning i tyveri fra håndværkerbiler i københavnsområdet (13.02.2024)", url: FP24, dato: "2026-10-07" },
      { navn: "Politiet: Undgå at blive hæler", url: POLHAEL, dato: "2026-10-04" },
      { navn: "Politiet: Hittegods og tyvekoster", url: POLHITTE, dato: "2026-10-04" },
      { navn: "Unisecure: Erhverv (DNA-kit og sikringsmærker)", url: UNIERHV, dato: "2026-10-07" },
      { navn: "Unisecure: SelectaDNA Varebils Kit, 25 mærkninger", url: UNIKIT, dato: "2026-10-07" },
      { navn: "SelectaDNA Danmark", url: SEL, dato: "2026-10-07" },
      { navn: "SelectaDNA: Spørgsmål og svar", url: SELFAQ, dato: "2026-10-07" },
      { navn: "Tryg: Forsikringer til håndværkere", url: TRYGH, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Installatør: Tyveri af værktøj fra varebiler boomer, det gør mærkningen ikke (13.02.2025)", url: INST25, dato: "2026-10-07" },
      { navn: "Topdanmark: Forebyg indbrud i varebilen", url: TDFOREBYG, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: Prisen med moms på Varebils Kit 25 (1.118,75 kr.) er udeladt, fordi siden nævner moms én gang. Prisen uden moms er uændret 895 kr.", UNIERHV],
    ["Unisecure til Installatør: 70-80 % af det værktøj, Unisecure finder hos tyvene sammen med politiet, er ikke mærket og forbliver derfor hos dem.", INST25],
    ["Installatør 2025 gengiver Det Kriminalpræventive Råd: omkring 250.000 danskere køber hælervarer hvert år, 80 % af stjålne genstande videresælges i Danmark, og kun hver femte hælervare transporteres til andre lande.", INST25],
    ["En VVS-virksomhed med over 80 medarbejdere, heraf 60 montører, fortalte Installatør, at den typisk indkøber værktøj for omkring 42.000 kr. til en ny medarbejder.", INST25],
    ["Installatør 2025: mærkning til varebilen og alt værktøjet kan fås for 7-800 kr.", INST25],
    ["F&P's pressemeddelelse 13.02.2024 råder til at mærke værktøjet synligt eller usynligt, sætte et klistermærke på bilen og sørge for, at man ikke kan kigge ind i varerummet udefra.", FP24],
    ["SelectaDNA: hver beholder indeholder et unikt syntetisk DNA i et vandbaseret UV-klæbemiddel med hundredvis af mikroprikker; kunden mærker selv og registrerer bagefter i den online database.", SELFAQ],
    ["SelectaDNA: DNA'et testes til PAS 820, og mærkningen beskytter i mindst 5 år, også udendørs.", SEL],
    ["SelectaDNA: nogle overflader har dårligere hæftningsevne; det afhænger af overfladestruktur og producentens behandling.", SELFAQ],
    ["Unisecure: Varebils Kit 25 indeholder også 1 ark med 2 bilsikringsmærker på 5 x 5 cm til indvendig montering, fx sideruder i førerhuset; de 3 bilmærkater på 7 x 9,5 cm er til bag- og sidedøre udvendigt; kittet er en engangsudgift uden abonnement.", UNIKIT],
    ["Unisecure: de runde sikringsmærker kan ikke fjernes efter påføring uden at krakelere i bittesmå stykker.", UNIKIT],
    ["SelectaDNA: advarselsmærkaterne er sikrede, så de går i mange små stykker, hvis man forsøger at fjerne dem.", SELFAQ],
    ["Unisecure sælger virksomhedskit med 100, 500 og 1.000 mærkninger til samme priser som varebilskittene (2.995, 9.495 og 13.395 kr. uden moms).", UNIERHV],
    ["Unisecure sælger vinduessikringsmærker (ark med 2) til 45 kr. og et sikringsskilt i hård plast på 30 x 30 cm til 155 kr., uden moms.", UNIERHV],
    ["Topdanmark foreslår at mærke værktøj med firmanavn med et lille gravørværktøj og sætte et skilt i forruden om det, at tømme varebilen om natten med et skilt om 'Intet værktøj i bilen', og at registrere serienumre og tage billeder af værktøjet.", TDFOREBYG],
    ["GF: dokumentation for et krav kan bestå i fx original købekontrakt, købsnota, finansierings- eller leasingaftale eller regning (punkt 4.3).", GF],
    ["SelectaDNA: flasken kan åbnes flere gange i de 4 måneder, når låget skrues tæt til, og den lægges tilbage i køleskabet.", SELFAQ],
    ["SelectaDNA: mikroprikkerne kan ses med det blotte øje og gør det muligt for politiet at identificere fundne ejendele straks.", SEL],
    ["SelectaDNA: politiet i lande, hvor SelectaDNA er repræsenteret, har adgang til databasen døgnet rundt, så ejendele fundet i fx Polen kan returneres til ejeren.", SELFAQ],
    ["SelectaDNA: databasen har LPS 1224-akkreditering, Selectamark er ISO 9001-akkrediteret, blev etableret i 1985 og har en Secured by Design-licens.", SELFAQ],
    ["SelectaDNA: lånes en ejendel ud, kan der registreres en ny registreret besidder; en ny ejer mærker ikke med egen DNA, men ejendelen omregistreres til ny ejer og adresse.", SELFAQ],
    ["Tryg: vælger man Super-pakken på varebilforsikringen, får man et DNA-kit; værktøj stjålet fra varebilen kræver en transportforsikring.", TRYGH],
    ["Installatør 2025: Festool giver tre års garanti på værktøj, der er registreret.", INST25]
  ]
};
