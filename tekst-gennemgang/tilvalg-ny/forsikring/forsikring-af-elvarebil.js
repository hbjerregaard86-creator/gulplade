// Underside /til-varebilen/forsikring/forsikring-af-elvarebil/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var GFS = `https://www.gfforsikring.dk/erhverv/forsikringer/erhvervsbilforsikring/`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var TRYGV = `https://tryg.dk/erhverv/varebilforsikring`;
var TRYGF = `https://tryg.dk/dokumenter/erhverv/fakta-varebil.pdf`;
var FALCK = `https://www.falck.dk/erhverv/assistance-paa-farten/vejhjalp/vejhjalp-til-firmabil/`;
var FALCKE = `https://www.falck.dk/erhverv/assistance-paa-farten/vejhjalp/vejhjalp-til-elbil/`;
var ALMB = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/`;
var FP = `https://www.forsikringogpension.dk/media/rt2lagsz/retningslinjer-for-forsikringsselskaber-og-autovaerksteder-ved-forsikringsskader-paa-biler-2025.pdf`;
var IFE = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/elbilforsikring`;
var SIKP = `https://www.sik.dk/privat/goer-det-sikkert/el/brug-elprodukter-sikkert/pas-paa-naar-du-oplader-din-elbil-almindelig-stikkontakt-0`;
var SIKE = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/opladning-el-biler`;

module.exports = {
  id: "forsikring/forsikring-af-elvarebil",
  side: {
    slug: "forsikring-af-elvarebil",
    navn: "Forsikring af elvarebil",
    titel: "Forsikring af elvarebil: batteri og ladekabel",
    kort: `Batteri, ladekabel og ladestander: hvad kaskoen dækker på en elvarebil, hvor selvrisikoen falder bort, og hvad selskaberne kræver af ladningen.`,
    beskrivelse: `Forsikring af elvarebil: batteriet i kaskoen, ladekabel uden selvrisiko, ladestanderen, ladning fra stikkontakt og vejhjælp fra 1.285 kr. om året.`,
    manchet: `En elvarebil forsikres med de samme dækninger som en dieselbil. Forskellen ligger i batteriet, ladekablet og ladestanderen, og i de krav, selskaberne stiller til den måde, bilen bliver ladet på. Her er, hvad GF, Tryg og Sikkerhedsstyrelsen skriver.`,
    visuel: {
      hero: "forsikring",
      hero_el: true,
      kort_fortalt: [
        ["Ladekabel, GF", "0 kr.", "i selvrisiko, når kun kablet er skadet"],
        ["Ladestander, Tryg", "0 kr.", "i selvrisiko med El- og hybridbil dækning"],
        ["Vejhjælp Pro Elbil, Falck", "1.285 kr.", "om året med 1 års binding"],
        ["Pristrin, GF", "Uændret", "efter skade på ladekablet"]
      ],
      toc: true,
      stribe: { drivmiddel: "el", titel: "Elvarebiler med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Samme forsikring, særlige dækninger",
        tekst: [
          `Tryg har el- og hybriddækning med i alle tre varebilspakker. GF's erhvervsbilbetingelser har særlige regler for opladningsudstyr og ladekabler. De øvrige forskelle ligger i kaskoens almindelige undtagelser.`,
          `Hos Tryg betyder det noget, om el-dækningen står i policen. Trygs kasko dækker nemlig ikke skader, der ville være omfattet af El- og hybridbil dækningen, medmindre den dækning er købt. Tryg skriver, at dækningen omfatter alle dele til el- og plug-in-hybridbiler, herunder kabler, adaptere og ladestandere.`,
          `GF skriver på sin side om erhvervsbilforsikring, at opladningsudstyr kan være omfattet af kaskoen, når virksomheden har elbiler eller plug-in-hybrider. Brugen af elvarebilen i hverdagen står i <a href="/haandbogen/elvarebil-i-praksis/">elvarebil i praksis</a>.`
        ],
        efter: [
          `Kilder: <a href="${TRYGV}" rel="noopener">Tryg: Varebilforsikring</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, <a href="${TRYGF}" rel="noopener">Tryg: Fakta om Varebilforsikring</a> og <a href="${GFS}" rel="noopener">GF: Erhvervsbilforsikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Batteriet",
        tekst: [
          `GF's erhvervsbilbetingelser nævner ikke batteriet særskilt. Kaskoen dækker enhver skade på og tyveri af bilen med de undtagelser, betingelserne nævner, fx ved uheld, brand og hærværk.`,
          `Både GF og Tryg undtager skader, der alene opstår i bilens mekaniske, elektriske eller elektroniske dele, medmindre de skyldes bestemte hændelser. Hos GF er det brand, lynnedslag, eksplosion, tyveri, røveri og hærværk. Hos Tryg er det brand, eksplosion, lynnedslag og hærværk, og skader under transport på eller med et andet befordringsmiddel. Begge dækker følgeskader på dele, der ikke er mekaniske eller elektriske.`,
          `Tryg undtager også skader, der skyldes manglende eller utilstrækkelig vedligeholdelse efter fabrikantens forskrifter. GF skriver, at mangelfuld vedligeholdelse kan have betydning for erstatningen. Batteriets egen garanti står i <a href="/garanti/">garanti</a>.`
        ],
        punkter: [
          `<strong>Slid og fabrikationsfejl.</strong> GF undtager forringelse som følge af alder og brug, herunder slitage, og skader omfattet af fabrikations- eller konstruktionsfejl, reklamationsret og garanti.`,
          `<strong>Mekaniske og elektriske skader.</strong> GF's erhvervsbetingelser undtager skader, der alene opstår i bilens mekaniske, elektriske eller elektroniske dele, medmindre de skyldes brand, lynnedslag, eksplosion, tyveri, røveri eller hærværk.`
        ],
        punkt_ikon: "nej",
        figur: {
          type: "daekning",
          kolonner: ["Skade alene i el-dele, fx batteriet", "GF", "Tryg"],
          raekker: [
            ["Brand, eksplosion og lynnedslag", "ja", "ja"],
            ["Hærværk", "ja", "ja"],
            ["Tyveri og røveri", "ja", "ikke nævnt"],
            ["Under transport på et andet køretøj", "ikke nævnt", "ja"],
            ["Andre årsager", "nej", "nej"],
            ["Slid og alder", "nej", "nej"],
            ["Fabrikationsfejl og garanti", "nej", "nej"]
          ],
          note: `Ikke nævnt betyder, at selskabets undtagelse ikke nævner hændelsen. Følgeskader på dele, der ikke er mekaniske eller elektriske, er dækket hos begge. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.2</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5 a, c og f</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ladekablet",
        tekst: [
          `Ladekablet ligger ofte løst i bilen, og derfor har selskaberne særlige regler for det. Hos GF er det dækket, selvom det ikke er fastmonteret, og en skade alene på kablet koster hverken selvrisiko eller pristrin.`,
          `Hos Tryg er kabler og adaptere dækket under El- og hybridbil dækningen. Har bilen ikke den dækning, er kablerne ikke dækket af kaskoen.`
        ],
        punkter: [
          `<strong>Dækket uden fastmontering.</strong> GF dækker opladningsudstyr, selvom det ikke er fastmonteret.`,
          `<strong>Tyveri under opladning.</strong> GF dækker tyveri af opladningsudstyr, mens det bruges til at lade bilen, selvom det ikke ligger i et aflåst rum.`,
          `<strong>Ingen selvrisiko.</strong> GF opkræver ikke selvrisiko, når skaden alene rammer ladekablet.`,
          `<strong>Ingen pristrinsbelastning.</strong> Hos GF belaster skader på ladekabler ikke pristrinnet, når der er kasko.`,
          `<strong>Tryg.</strong> El- og hybridbil dækningen omfatter kabler, adaptere og ladestander uden selvrisiko. Tyveri af løse kabler og adaptere er dækket, når de ligger i aflåst rum med tegn på voldeligt opbrud, eller når bilen lader.`
        ],
        punkt_ikon: "ja",
        figur: [
          {
            type: "svg",
            svg: `<svg viewBox="0 0 400 255" role="img" aria-label="Elvarebil ved en ladeboks på en væg med ladekablet tilsluttet og batteriet under gulvet."><rect class="tg-hylde" x="350" y="60" width="45" height="157"/><rect class="tg-kasse" x="326" y="112" width="22" height="32"/><g transform="translate(30,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="100" y="186" width="110" height="10"/><path class="tg-skinne" d="M337,144 Q330,190 268,150" fill="none"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="337" y1="112" x2="337" y2="62"/><circle cx="337" cy="112" r="3"/><text class="tg-call__navn" x="395" y="30" text-anchor="end">Ladeboks</text><text class="tg-call__under" x="395" y="44" text-anchor="end">Tryg: med El-tilvalg</text></g><g class="tg-call"><line x1="316" y1="168" x2="230" y2="62"/><circle cx="316" cy="168" r="3"/><text class="tg-call__navn" x="150" y="30">Ladekabel</text><text class="tg-call__under" x="150" y="44">GF: 0 kr. selvrisiko</text></g><g class="tg-call"><line x1="155" y1="191" x2="155" y2="222"/><circle cx="155" cy="191" r="3"/><text class="tg-call__navn" x="162" y="230">Batteri</text><text class="tg-call__under" x="162" y="244">kasko, ikke slid og fabrikationsfejl</text></g></svg>`,
            tekst: `Skematisk. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1 og 13.7</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.2</a>, set den 4. oktober 2026.`
          }
        ]
      },
      {
        overskrift: "Tyveri af ladekablet",
        tekst: [
          `Om et stjålet kabel bliver erstattet, afhænger af, hvor det var. Sidder kablet i bilen og laderen, er tyveriet dækket hos både GF og Tryg, selvom kablet ikke ligger i et aflåst rum.`,
          `Ligger kablet løst, gælder de samme krav som for andet afmonteret udstyr. Det skal opbevares i et forsvarligt aflåst rum, og der skal kunne konstateres voldeligt opbrud. Et kabel, der ligger på et åbent lad, opfylder ikke kravet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Tre situationer. Et kabel, der er sat i bilen under opladning, er dækket. Et kabel i et aflåst rum, der er brudt op, er dækket. Et løst kabel på et åbent lad uden opbrud er ikke dækket."><text class="tg-fremhaev" x="64" y="20" text-anchor="middle">Under opladning</text><text x="64" y="36" text-anchor="middle">ikke aflåst</text><rect class="tg-hylde" x="4" y="50" width="10" height="96"/><rect class="tg-kasse" x="14" y="76" width="16" height="22"/><path class="tg-skinne" d="M22,98 Q30,140 64,112" fill="none"/><rect class="tg-rum" x="64" y="84" width="60" height="46"/><circle class="tg-profil" cx="80" cy="138" r="8"/><circle class="tg-profil" cx="110" cy="138" r="8"/><line class="tg-gulvlinje" x1="0" y1="146" x2="128" y2="146"/><rect class="tg-modul" x="4" y="160" width="120" height="28"/><text class="tg-modul__tekst" x="64" y="178" text-anchor="middle">DÆKKET</text><text class="tg-fremhaev" x="200" y="20" text-anchor="middle">Aflåst rum</text><text x="200" y="36" text-anchor="middle">efter opbrud</text><rect class="tg-rum" x="146" y="70" width="108" height="60"/><circle class="tg-profil" cx="186" cy="108" r="10"/><circle class="tg-profil" cx="186" cy="108" r="5"/><line class="tg-doer" x1="250" y1="74" x2="250" y2="126"/><path class="tg-skinne-tynd" d="M238,92 L245,97 L238,102 L245,107" fill="none"/><circle class="tg-profil" cx="166" cy="138" r="8"/><circle class="tg-profil" cx="234" cy="138" r="8"/><line class="tg-gulvlinje" x1="136" y1="146" x2="264" y2="146"/><rect class="tg-modul" x="140" y="160" width="120" height="28"/><text class="tg-modul__tekst" x="200" y="178" text-anchor="middle">DÆKKET</text><text class="tg-fremhaev" x="336" y="20" text-anchor="middle">Løst på ladet</text><text x="336" y="36" text-anchor="middle">uden opbrud</text><path class="tg-rum" d="M282,108 L282,130 L392,130 L392,108" fill="none"/><circle class="tg-profil" cx="320" cy="120" r="9"/><circle class="tg-profil" cx="320" cy="120" r="4"/><circle class="tg-profil" cx="300" cy="138" r="8"/><circle class="tg-profil" cx="374" cy="138" r="8"/><line class="tg-gulvlinje" x1="272" y1="146" x2="400" y2="146"/><rect class="tg-kasse" x="276" y="160" width="120" height="28"/><text x="336" y="178" text-anchor="middle">Ikke dækket</text></svg>`,
          tekst: `Skematisk. Hos Tryg gælder reglerne, når bilen har El- og hybridbil dækning. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1.5</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ladestanderen",
        tekst: [
          `Trygs El- og hybridbil dækning omfatter ladestander eller -boks, der hører til den forsikrede varebil, når den er ejet eller leaset af forsikringstageren, og forsikringstageren har forsikringspligten. En lejet eller lånt ladeboks uden forsikringspligt er ikke dækket.`,
          `Tryg dækker heller ikke skader fra forkert montering eller tilslutning, skader i strid med vejledningerne for montering og service, og skader, fordi bygningens elinstallation ikke er dimensioneret til opladning. En undersøgelse af elektriske overspændinger i ladeboksen, når der ikke er sket en skade, er heller ikke dækket.`,
          `Sikkerhedsstyrelsen skriver, at en ladeboks kun må installeres af en autoriseret elinstallationsvirksomhed, og at den skal have en separat gruppe i eltavlen. Abonnementer og ladebokse står i <a href="/til-varebilen/el-abonnement/">opladning og ladestander</a>.`
        ],
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.2</a> og <a href="${SIKP}" rel="noopener">Sikkerhedsstyrelsen: Opladning i almindelig stikkontakt</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Skader på ladeudstyr hos Tryg",
        tekst: [
          `El- og hybridbil dækningen hos Tryg dækker skade eller tab efter en række bestemte hændelser. Skader, der er omfattet af en service- eller garantiordning, er undtaget, og det samme gælder manglende vedligeholdelse efter fabrikantens forskrifter.`,
          `Dækningen gælder også, når føreren kører, mens kablet sidder i, fordi Tryg regner det som en pludselig skade.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Hændelse", "El- og hybridbil dækning"],
          raekker: [
            ["Tyveri", "ja"],
            ["Hærværk", "ja"],
            ["Brand", "ja"],
            ["Kortslutning ved lynnedslag eller fejlstrøm", "ja"],
            ["Påkørsel", "ja"],
            ["Kørsel under opladning", "ja"],
            ["Skader under service- eller garantiordning", "nej"],
            ["Lejet eller lånt ladeboks", "nej"]
          ],
          note: `Kilde: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 5.2</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Selvrisiko på el-dele",
        tekst: [
          `Ved skader på ladeudstyret betaler virksomheden typisk ingen selvrisiko. GF opkræver ikke selvrisiko, når skaden alene rammer bilens ladekabel. Hos Tryg står El- og hybridbil dækningen på listen over dækninger, hvor der ikke betales selvrisiko for en skade, som dækningen omfatter.`,
          `Det gælder kun selve udstyret. Bliver batteriet eller bilen skadet, gælder den almindelige selvrisiko på kaskoen. Beløbene står i <a href="/til-varebilen/forsikring/selvrisiko/">selvrisiko</a>.`
        ],
        tabel: {
          kolonner: ["Selskab", "Del", "Selvrisiko"],
          raekker: [
            ["GF", "Ladekabel alene", "0 kr."],
            ["Tryg", "Kabler, adaptere og ladestander med El- og hybridbil dækning", "0 kr."]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, erhvervsbilbetingelser nr. 130-1</a> og <a href="${TRYG}" rel="noopener">Tryg, varebilbetingelser nr. 2303</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "noegletal",
          data: [
            ["Ladekabel alene, GF", 0, "kr. i selvrisiko"],
            ["Kabler, adaptere og ladestander, Tryg", 0, "kr. i selvrisiko"]
          ],
          note: `Hos Tryg gælder det, når bilen har El- og hybridbil dækning. Kilder: <a href="${GF}" rel="noopener">GF, erhvervsbilbetingelser nr. 130-1, punkt 13.7.3</a> og <a href="${TRYG}" rel="noopener">Tryg, varebilbetingelser nr. 2303, afsnit 9</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kasko eller delkasko",
        tekst: [
          `Hos GF belaster skader på ladekabler ikke pristrinnet, når der er købt kasko eller delkasko. Trygs El- og hybridbil dækning hører under fællesbestemmelserne for delkasko og kasko.`,
          `Med ansvarsforsikring alene er hverken bilen, batteriet eller ladeudstyret dækket. Ansvaret dækker kun skader, bilen gør på andre. Se <a href="/til-varebilen/forsikring/ansvarsforsikring-varebil/">ansvarsforsikring til varebil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Forsikring", "Ladekabel", "Ladestander", "Batteri"],
          raekker: [
            ["Ansvar alene", "nej", "nej", "nej"],
            ["GF kasko", "ja", "ikke nævnt", "Med undtagelser"],
            ["Tryg kasko uden el-dækning", "nej", "nej", "Med undtagelser"],
            ["Tryg kasko med el-dækning", "ja", "ja", "Med undtagelser"]
          ],
          note: `Undtagelserne for batteriet står i afsnittet om batteriet. Ikke nævnt betyder, at GF's betingelser ikke nævner en ladestander på bygningen. Kilder: <a href="${GF}" rel="noopener">GF, punkt 3.1, 4.1 og 4.2</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5 og 5.2</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.5.2</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Vejhjælp ved tomt batteri",
        tekst: [
          `Trygs El- og hybridbil dækning giver assistance og transport til en ladestander, når Tryg Vejhjælp er købt. Vejhjælp i Danmark er med i Trygs varebilspakker fra Udvidet.`,
          `Tryg Vejhjælp hjælper, hvis elvarebilen løber tør for strøm under kørsel. Har Tryg udleveret strøm, skal virksomheden betale for den ved levering. Kan bilen ikke køre videre, transporterer Tryg den til et sted i Danmark, som du vælger, fx din adresse, et værksted eller en ladestation.`,
          `GF skriver på sin side om erhvervsbilforsikring, at vejhjælp i Danmark døgnet rundt er en del af kaskoforsikringen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Vejhjælpen", "Du har købt Tryg Vejhjælp. I Danmark er den med i Trygs varebilspakker fra Udvidet."],
            ["Tomt batteri", "Tryg Vejhjælp kommer ud og hjælper. Strøm, der bliver udleveret, betaler du selv."],
            ["Ladestanderen", "Tryg transporterer bilen til en ladestander eller et andet sted i Danmark, du vælger."]
          ]
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.1 og 5.2</a> og <a href="${GFS}" rel="noopener">GF: Erhvervsbilforsikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Vejhjælpsabonnement til elvarebilen",
        tekst: [
          `Vejhjælp kan også købes som et abonnement uden for bilforsikringen. Falck Vejhjælp Pro Elbil koster 1.285 kr. om året med 1 års binding, 110 kr. mere end Vejhjælp Pro uden elbiltillæg.`,
          `Løber bilen tør for strøm, hjælper Falck med strøm på stedet eller bugserer bilen til nærmeste egnede ladestander. Minutgaranti er med i elbilabonnementet, og Falck garanterer at være fremme inden for 45 minutter i Danmark. Abonnementet dækker køretøjer op til 4.250 kg, så mindre varebiler er med.`,
          `Falck skriver, at mekanikerne i 9 ud af 10 tilfælde hjælper på stedet, så bilen selv kan køre videre. Abonnementet har 14 dages fortrydelsesret.`
        ],
        tabel: {
          kolonner: ["Udbyder", "Ydelse ved tomt batteri", "Pris pr. år"],
          raekker: [
            ["Falck Vejhjælp Pro Elbil", "Strøm på stedet eller bugsering til nærmeste egnede ladestander. Fremme inden 45 min.", "1.285 kr."],
            ["Tryg Vejhjælp", "Assistance og transport til ladestander", "Tilvalg, med fra Udvidet"],
            ["Alm. Brand Vejhjælp", "Hjælp, når elbilen løber tør for strøm", "Tilvalg"]
          ],
          note: `Kilder: <a href="${FALCKE}" rel="noopener">Falck: Vejhjælp Pro Elbil</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.1-5.2</a> og <a href="${ALMB}" rel="noopener">Alm. Brand</a>, set den 4. oktober 2026. Falck angiver ikke moms ved prisen. Abonnementet dækker køretøjer op til 4.250 kg.`,
          visning: "kort"
        },
        figur: {
          type: "soejler",
          enhed: "kr. pr. år",
          data: [
            ["Falck Vejhjælp Pro", 1175],
            ["Falck Vejhjælp Pro Elbil", 1285]
          ],
          note: `Årspris med 1 års binding. Kilder: <a href="${FALCK}" rel="noopener">Falck: Vejhjælp Pro</a> og <a href="${FALCKE}" rel="noopener">Falck: Vejhjælp Pro Elbil</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ladning fra stikkontakt",
        tekst: [
          `Tryg stiller krav til elinstallationen, når bilen lades med en nødlader fra en stikkontakt. Nødladeren kaldes også mormorlader. Kravene er der, fordi bygningens installation skal kunne levere strøm på en forsvarlig måde.`,
          `Tryg skriver, at der skal være en fejlstrømsafbryder af typen A eller B, som er tilsluttet en separat sikringsgruppe i bygningens eltavle, og at stikket skal være et CEE-stik:`
        ],
        punkter: [
          `<strong>Fejlstrømsafbryder</strong> af typen A eller B.`,
          `<strong>Separat sikringsgruppe</strong> i bygningens eltavle.`,
          `<strong>CEE-stik</strong>, blåt eller rødt.`
        ],
        efter: [
          `Tryg dækker ikke skader fra fejlopladning, herunder brug af kabeltromle, forkert montering eller en elinstallation, der ikke er dimensioneret til opladning. Kilde: <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.2</a>, set den 4. oktober 2026.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 228" role="img" aria-label="Varebil, der lader fra en stikkontakt. Eltavlen har fejlstrømsafbryder og en separat sikringsgruppe, og stikkontakten er et CEE-stik."><rect class="tg-kasse" x="10" y="60" width="56" height="80"/><rect class="tg-modul" x="18" y="72" width="16" height="24"/><rect class="tg-modul" x="40" y="72" width="16" height="24"/><path class="tg-pil" d="M66,108 L105,108 L105,120"/><rect class="tg-modul" x="96" y="120" width="18" height="18"/><path class="tg-pil" d="M105,138 Q130,176 162,150"/><g transform="translate(150,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="5" y1="190" x2="395" y2="190"/><g class="tg-call"><line x1="26" y1="72" x2="26" y2="38"/><circle cx="26" cy="72" r="3"/><text class="tg-call__navn" x="0" y="16">Fejlstrømsafbryder</text><text class="tg-call__under" x="0" y="30">type A eller B</text></g><g class="tg-call"><line x1="105" y1="129" x2="150" y2="38"/><circle cx="105" cy="129" r="3"/><text class="tg-call__navn" x="150" y="16">CEE-stik</text><text class="tg-call__under" x="150" y="30">blåt eller rødt</text></g><g class="tg-call"><line x1="48" y1="96" x2="48" y2="196"/><circle cx="48" cy="96" r="3"/><text class="tg-call__navn" x="0" y="208">Separat sikringsgruppe</text><text class="tg-call__under" x="0" y="222">i bygningens eltavle</text></g></svg>`,
          tekst: `Skematisk. Trygs krav til elinstallationen, når bilen lades med nødlader fra en stikkontakt. Kilde: <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Nødlader eller ladeboks",
        tekst: [
          `Sikkerhedsstyrelsen skriver, at almindelige stikkontakter i en bolig ikke er beregnet til gentagne belastninger over 6 ampere. Styrelsen anbefaler generelt at undgå den daglige opladning med ladekabler i almindelige boligstikkontakter og i stedet få en vægmonteret ladeboks eller en industristikkontakt.`,
          `Forventes en stikkontakt til opladning at blive belastet med over 6 ampere i mere end 2 timer, skal den være beregnet til længerevarende høj belastning, og der bør være en separat gruppe. En stikkontakt, der kun bruges til opladning, skal have sin egen fejlstrømsafbryder, mindst af type A og med en udløsestrøm på højst 30 mA.`,
          `Der må ikke bruges forlængerledninger mellem bilen og stikkontakten. Det passer med Trygs undtagelse for skader ved brug af kabeltromle.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To måder at lade på. Til venstre en nødlader i en almindelig stikkontakt, som højst bør belastes med 6 ampere over længere tid. Til højre en ladeboks på væggen, installeret af en autoriseret elinstallatør med egen gruppe i eltavlen."><text class="tg-fremhaev" x="95" y="20" text-anchor="middle">Almindelig stikkontakt</text><text x="95" y="36" text-anchor="middle">højst 6 A over længere tid</text><rect class="tg-hylde" x="10" y="50" width="12" height="100"/><rect class="tg-kasse" x="22" y="108" width="12" height="14"/><path class="tg-skinne-tynd" d="M34,115 Q48,124 60,126" fill="none"/><rect class="tg-kasse" x="60" y="120" width="24" height="12"/><path class="tg-skinne-tynd" d="M84,126 Q98,124 110,114" fill="none"/><rect class="tg-rum" x="110" y="90" width="74" height="46"/><circle class="tg-profil" cx="128" cy="142" r="8"/><circle class="tg-profil" cx="168" cy="142" r="8"/><line class="tg-gulvlinje" x1="5" y1="150" x2="190" y2="150"/><text class="tg-lille" x="10" y="172">SIKKERHEDSSTYRELSEN</text><text class="tg-lille" x="10" y="188">FRARÅDER DAGLIG LADNING</text><line class="tg-skillevaeg" x1="200" y1="10" x2="200" y2="190"/><text class="tg-fremhaev" x="305" y="20" text-anchor="middle">Ladeboks eller</text><text x="305" y="36" text-anchor="middle">industristikkontakt</text><rect class="tg-hylde" x="220" y="50" width="12" height="100"/><rect class="tg-modul" x="232" y="80" width="22" height="30"/><path class="tg-skinne" d="M243,110 Q256,140 310,114" fill="none"/><rect class="tg-rum" x="310" y="90" width="80" height="46"/><circle class="tg-profil" cx="328" cy="142" r="8"/><circle class="tg-profil" cx="372" cy="142" r="8"/><line class="tg-gulvlinje" x1="210" y1="150" x2="395" y2="150"/><text class="tg-lille" x="210" y="172">AUTORISERET INSTALLATØR</text><text class="tg-lille" x="210" y="188">OG EGEN GRUPPE I TAVLEN</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${SIKP}" rel="noopener">Sikkerhedsstyrelsen: Opladning i almindelig stikkontakt</a> og <a href="${SIKE}" rel="noopener">Sikkerhedsstyrelsen: Opladning af el-biler</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Elbil og dieselbil i samme forsikring",
        tekst: [
          `Selskaberne forsikrer elvarebiler på de samme vilkår som andre varebiler, men med el-delene som en ekstra dækning. If skriver om sin elbilforsikring til erhverv, at skader på elbiler hurtigt kan blive dyre, fordi reparationen kræver ekstra foranstaltninger, materiel og ressourcer hos værkstederne.`,
          `De fælles retningslinjer fra F&amp;P og autobranchen nævner, at totalskadede elbiler kan give særlige udfordringer, og at værksteder og selskaber skal lave særskilte aftaler om, hvordan bilerne håndteres. Almindeligvis opbevarer værkstederne totalskadede biler i ca. 10 dage efter takseringen.`
        ],
        punkter: [
          `<strong>Alm. Brand.</strong> Der er ingen forskel på erhvervsbil- og elbilforsikring, men på elbilen er ladekablerne dækket.`,
          `<strong>GF.</strong> Opladningsudstyr kan være omfattet af kaskoen på elbiler og plug-in-hybrider.`,
          `<strong>Totalskadede elbiler.</strong> Værksteder og selskaber laver særskilte aftaler om, hvordan bilerne håndteres.`
        ],
        efter: [
          `Kilder: <a href="${ALMB}" rel="noopener">Alm. Brand</a>, <a href="${GFS}" rel="noopener">GF: Erhvervsbilforsikring</a> og <a href="${FP}" rel="noopener">F&amp;P m.fl.: Retningslinjer, september 2025</a>, set den 4. oktober 2026, og <a href="${IFE}" rel="noopener">If: Elbilforsikring til erhverv</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Elvarebilen i økonomien",
        tekst: [
          `Driftsøkonomien for el mod diesel står i <a href="/groen-omstilling/">grøn omstilling</a>. Tilbud på elvarebiler står på <a href="/elvarebiler/">elvarebiler</a>.`,
          `Prisen på forsikringen følger bl.a. bilens værdi, kørslen og den valgte selvrisiko. Den kommer oven i leasingydelsen, når forsikringen ikke er med i tilbuddet.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så dækker forsikringen også el-delene.",
    spoergsmaal: [
      "At bilen er en elvarebil, og bilens batteristørrelse.",
      "Om ladekabler og adaptere ligger løst i bilen.",
      "Hvor bilen lades: firmaadresse, hjemme hos medarbejderen eller offentligt.",
      "Om bilen lades fra en almindelig stikkontakt, et CEE-stik eller en ladeboks.",
      "Om ladeboksen er købt eller leaset, og hvem der ejer den.",
      "Om vejhjælp med hjælp ved tomt batteri skal med.",
      "Om der ønskes udvidet dækning af batteri og højspændingsdele."
    ],
    faq: [
      ["Er batteriet på en elvarebil dækket af kaskoen?", "Hos GF dækker kaskoen enhver skade på bilen, også batteriet, med betingelsernes undtagelser. Slid og fabrikationsfejl er undtaget, og skader alene i elektriske dele er kun dækket, når de skyldes fx brand, tyveri eller hærværk."],
      ["Er ladekablet dækket, hvis det bliver stjålet?", "Hos GF ja, også mens det bruges til opladning og ikke ligger i et aflåst rum. Ligger det løst, skal det være i et aflåst rum, og der skal være voldeligt opbrud. Der er ingen selvrisiko, når kun ladekablet er skadet."],
      ["Er ladestanderen dækket af bilforsikringen?", "Hos Tryg ja, med El- og hybridbil dækningen, når ladestanderen er ejet eller leaset af forsikringstageren, og forsikringstageren har forsikringspligten."],
      ["Dækker Trygs kasko ladekablet uden el-dækningen?", "Nej. Trygs kasko dækker ikke skader, der ville være omfattet af El- og hybridbil dækningen, medmindre den dækning er købt. Den er med i alle tre varebilspakker."],
      ["Er det dyrere at forsikre en elvarebil?", "Prisen følger bl.a. bilens værdi, kilometer og selvrisiko. If skriver, at skader på elbiler hurtigt kan blive dyre, fordi reparationen kræver ekstra materiel og ressourcer."],
      ["Kræver el-dækningerne kasko?", "Hos GF knytter reglen om ladekabler og pristrin sig til kasko eller delkasko. Trygs El- og hybridbil dækning hører under delkasko og kasko."],
      ["Hvad koster vejhjælp til en elvarebil?", "Falck Vejhjælp Pro Elbil koster 1.285 kr. om året med 1 års binding og dækker køretøjer op til 4.250 kg. Hos Tryg indgår hjælp ved tomt batteri i Tryg Vejhjælp."],
      ["Dækker forsikringen ladning fra en almindelig stikkontakt?", "Hos Tryg kræver det fejlstrømsafbryder type A eller B, separat sikringsgruppe og CEE-stik. Skader ved brug af kabeltromle er undtaget."],
      ["Må jeg lade elvarebilen i en almindelig stikkontakt?", "Sikkerhedsstyrelsen anbefaler generelt at undgå daglig opladning i almindelige boligstikkontakter og at begrænse strømmen til 6 ampere. Til daglig ladning anbefaler styrelsen en ladeboks eller en industristikkontakt med egen gruppe."]
    ],
    kilder: [
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring", url: TRYGV, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Tryg: Fakta om Varebilforsikring", url: TRYGF, dato: "2026-10-07" },
      { navn: "Falck: Vejhjælp til firmabil (Vejhjælp Pro)", url: FALCK, dato: "2026-10-07" },
      { navn: "Falck: Vejhjælp Pro Elbil", url: FALCKE, dato: "2026-10-07" },
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: ALMB, dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring til firmabiler", url: GFS, dato: "2026-10-07" },
      { navn: "F&P m.fl.: Retningslinjer for forsikringsselskaber og autoværksteder ved forsikringsskader på biler, september 2025", url: FP, dato: "2026-10-07" },
      { navn: "If: Elbilforsikring til erhverv", url: IFE, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Opladning af elbil i en almindelig stikkontakt", url: SIKP, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Opladning af el-biler", url: SIKE, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Tryg: kaskoen dækker ikke skade, der ville være omfattet af El- og hybridbil dækningen, medmindre den dækning er købt (afsnit 4.5 o).", TRYG],
    ["Tryg: El- og hybridbil dækning dækker alle dele til el- og plug-in-hybridbiler, herunder kabler, adaptere og ladestandere.", TRYGF],
    ["GF: har virksomheden elbiler eller plug-in hybrider, kan opladningsudstyr være omfattet af kaskodækningen.", GFS],
    ["Tryg undtager skade, der alene opstår i de mekaniske, elektriske eller elektroniske dele, medmindre skaden er sket ved brand, eksplosion, lynnedslag og hærværk eller under transport på eller ved hjælp af andet befordringsmiddel; følgeskader på andre dele dækkes (afsnit 4.5 a).", TRYG],
    ["GF: en eventuel følgeskade på dele, der ikke er mekaniske, elektriske eller elektroniske, dækkes (punkt 4.2).", GF],
    ["Tryg undtager skade som følge af manglende eller utilstrækkelig vedligeholdelse efter fabrikantens forskrifter (afsnit 4.5 g); GF: mangelfuld vedligeholdelse eller eftersyn kan have betydning for erstatningen (punkt 1.2).", TRYG],
    ["GF: afmonteret udstyr skal ved tyveri opbevares i forsvarligt aflåst rum med konstaterbart voldeligt opbrud, men tyveri af opladningsudstyr er dækket, når det bruges til opladning, selvom det ikke er i aflåst rum (punkt 4.1.5).", GF],
    ["Tryg El- og hybridbil dækning dækker ikke skader fra forkert montering eller tilslutning, skader i strid med gældende vejledninger for montering og service, skader fordi bygningens elinstallation ikke er dimensioneret til opladning, og udgift til undersøgelse af elektriske overspændinger i ladestander eller -boks, når der ikke er sket en skade (afsnit 5.2).", TRYG],
    ["Sikkerhedsstyrelsen: en ladeboks og en industristikkontakt må kun installeres af en autoriseret elinstallationsvirksomhed, og der skal installeres en separat gruppe i eltavlen.", SIKP],
    ["Tryg El- og hybridbil dækning dækker ikke manglende eller utilstrækkelig vedligeholdelse efter fabrikantens forskrifter; pludselig skade omfatter fx kørsel under opladning (afsnit 5.2).", TRYG],
    ["Tryg: har man købt El- og hybridbil dækning og har en skade omfattet af den, skal man ikke betale selvrisiko (afsnit 9, Dækninger uden selvrisiko).", TRYG],
    ["Tryg Vejhjælp yder assistance, hvis elvarebilen løber tør for strøm under kørsel; udleveret strøm betales ved levering; transporten går til det sted i Danmark, man vælger, fx adresse, værksted eller el-ladestation (afsnit 5.1).", TRYG],
    ["GF: vejhjælp i Danmark 24 timer i døgnet er en del af kaskoforsikringen.", GFS],
    ["Falck Vejhjælp Pro koster 1.175 kr. om året og Vejhjælp Pro Elbil 1.285 kr. om året (mindstepris i bindingsperiode på 1 år); forskellen er 110 kr.", FALCKE],
    ["Falck Vejhjælp Pro Elbil: Minutgaranti er inkluderet med garanti for at være fremme inden for 45 minutter i Danmark; 9 ud af 10 gange hjælper mekanikerne på stedet; ved manglende strøm hjælper Falck med strøm på stedet eller bugserer til nærmeste egnede ladestander; 14 dages fortrydelsesret; dækker køretøjer op til 4.250 kg.", FALCKE],
    ["Tryg: nødladeren kaldes også mormorlader, og bygningens elinstallation skal kunne levere strøm på en forsvarlig måde (afsnit 5.2).", TRYG],
    ["Sikkerhedsstyrelsen: almindelige stikkontakter i en bolig er ikke beregnet til gentagne høje belastninger over 6 ampere; styrelsen anbefaler generelt at undgå daglig opladning via ladekabler i almindelige boligstikkontakter og at vælge en vægmonteret ladeboks eller en industristikkontakt.", SIKP],
    ["Sikkerhedsstyrelsen: forventes stikkontakten til opladning belastet med over 6 A i mere end 2 timer, skal den være beregnet til længerevarende høj belastning, og der bør installeres en separat gruppe; en dedikeret stikkontakt til opladning skal have sin egen RCD, mindst type A med mærkeudløsestrøm på højst 30 mA; der må ikke bruges forlængerledninger mellem elbilen og stikkontakten (HD 60364-7-722).", SIKE],
    ["If (elbilforsikring til erhverv): skader på elbiler kan hurtigt blive dyre, fordi det kræver ekstra foranstaltninger at reparere elbiler og både ekstra materiel og ressourcer for værkstederne.", IFE],
    ["F&P's retningslinjer: værkstederne opbevarer almindeligvis totalskadede biler i ca. 10 dage efter takseringen, og totalskadede elbiler kan udgøre særlige udfordringer, hvor der skal indgås særskilte aftaler om vilkår for håndtering (emne 2).", FP]
  ]
};
