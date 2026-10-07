// Underside /til-varebilen/forsikring/vaerktoejsforsikring/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var TRYGH = `https://tryg.dk/forsikringer-til-haandvaerkere`;
var TOPF = `https://www.topdanmark.dk/faq/erhverv/er-vaerktoj-daekket-af-min-koretojsforsikring/`;
var TOPA = `https://www.topdanmark.dk/erhverv/gode-raad/monter-en-alarm-i-din-varevogn-og-spar-5000-kr-i-selvrisiko/`;
var KFI = `https://www.kfforsikring.dk/media/1328110/transportforsikring_ipid.pdf`;
var KF = `https://www.kfforsikring.dk/erhverv/forsikringer/bil-og-transport/transportforsikring/`;
var KFV = `https://www.kfforsikring.dk/media/beib3bm2/kf_vilkaar-totalerhverv-transportforsikring-te-tr-03-1025.pdf`;
var GJS = `https://gjensidige.dk/filer/erhverv/storkunde-og-maegler/Sikringsoversigt-Forsikringsbetingelserne`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var SG = `https://www.sikringsguiden.dk/raadgivning/raad-om-tyveri/tyveri-fra-varebiler/`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;
var IFT = `https://www.if.dk/erhverv/erhvervsforsikring/transportforsikring`;
var CODAN = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/`;
var FALCK = `https://www.falck.dk/erhverv/assistance-paa-farten/vejhjalp/vejhjalp-til-firmabil/`;

module.exports = {
  id: "forsikring/vaerktoejsforsikring",
  side: {
    slug: "vaerktoejsforsikring",
    navn: "Værktøjsforsikring",
    titel: "Værktøjsforsikring: værktøj i varebilen",
    kort: `Værktøj i bilen dækkes af en transportforsikring, ikke af kaskoen. Her er selskabernes krav til opbrud, alarm, låse, trailer og forsikringssum.`,
    beskrivelse: `Værktøj i varebilen: transportforsikring, synligt opbrud, alarmkrav over 100.000 kr., låse, kassetrailer og 5.000 kr. i alarmrabat hos Topdanmark.`,
    manchet: `Kaskoen dækker bilen, ikke det, der ligger i den. Værktøj og materialer dækkes af en transportforsikring, typisk som tilvalg til løsøreforsikringen. Betingelserne afgør, om et tyveri om natten er dækket, og hvor meget der skal til af alarm og låse.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Værktøj i kaskoen", "Nej", "det dækkes af en transportforsikring"],
        ["Alarmkrav, Gjensidige", "over 100.000 kr.", "i værdi pr. transport"],
        ["Låse og gitter, Gjensidige", "over 200.000 kr.", "i værdi pr. transport"],
        ["Alarmrabat, Topdanmark", "5.000 kr.", "i selvrisiko ved indbrud"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Bilforsikringen dækker ikke værktøjet",
        tekst: [
          `Topdanmark skriver, at værktøj ikke er dækket af køretøjsforsikringen, og henviser til en transportforsikring som tilvalg til løsøreforsikringen. Tryg skriver det samme. GF's ansvarsforsikring undtager udtrykkeligt transporteret gods og varer.`,
          `If skriver, at varebilforsikringen ikke dækker udstyr, værktøj eller andre ejendele, som virksomheden ejer og transporterer i bilen. Købstædernes Forsikring (KF) skriver, at værdier i bilerne ikke automatisk er dækket af løsøreforsikringen.`,
          `Værktøjet kan derfor høre under tre forskellige forsikringer, alt efter hvor det er. Tryg skriver, at erhvervsforsikringen dækker værktøj og maskiner, fx når de bliver stjålet fra arbejdspladsen. Bliver værktøjet stjålet fra varebilen, skal der en transportforsikring til.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 256" role="img" aria-label="Et værksted og en varebil. Værktøj i værkstedet dækkes af løsøreforsikringen, bilen med den faste reol dækkes af kaskoen, og værktøj i bilen dækkes af en transportforsikring."><path class="tg-rum" d="M10,200 L10,100 L75,60 L140,100 L140,200 Z"/><text x="75" y="130" text-anchor="middle">Værksted</text><rect class="tg-kuffert" x="50" y="170" width="50" height="26"/><g transform="translate(150,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-kasse" x="222" y="100" width="28" height="96"/><line class="tg-skinne-tynd" x1="222" y1="132" x2="250" y2="132"/><line class="tg-skinne-tynd" x1="222" y1="164" x2="250" y2="164"/><rect class="tg-kuffert" x="262" y="172" width="46" height="24"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="236" y1="110" x2="236" y2="46"/><circle cx="236" cy="110" r="3"/><text class="tg-call__navn" x="160" y="24">Bilen og den faste reol</text><text class="tg-call__under" x="160" y="38">kasko på bilen</text></g><g class="tg-call"><line x1="75" y1="183" x2="75" y2="222"/><circle cx="75" cy="183" r="3"/><text class="tg-call__navn" x="10" y="236">Værktøj i værkstedet</text><text class="tg-call__under" x="10" y="250">løsøreforsikring</text></g><g class="tg-call"><line x1="285" y1="184" x2="285" y2="222"/><circle cx="285" cy="184" r="3"/><text class="tg-call__navn" x="236" y="236">Værktøj i bilen</text><text class="tg-call__under" x="236" y="250">transportforsikring</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${TRYGH}" rel="noopener">Tryg: Forsikringer til håndværkere</a>, <a href="${IF}" rel="noopener">If: Varebilforsikring</a> og <a href="${KF}" rel="noopener">KF: Transportforsikring</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TOPF}" rel="noopener">Topdanmark</a> og <a href="${GF}" rel="noopener">GF, punkt 3.2</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Løsdele, som bilforsikringen dækker",
        tekst: [
          `Kaskoen dækker enkelte ting, der ikke er fastmonteret. Hos GF gælder det bilens originale tilbehør, fx reservehjul, lappesæt, donkraft og værktøjssæt, og desuden et ekstra sæt dæk med fælge, en cykelholder, en tagboks og opladningsudstyr. Håndværktøj, maskiner og varer er ikke blandt dem.`,
          `Ligger tingene afmonteret i bilen, er det hos GF en betingelse ved tyveri, at de opbevares i et forsvarligt aflåst rum, og at voldeligt opbrud kan konstateres. Tryg dækker afmonteret udstyr og værktøj, der kun kan bruges til den forsikrede varebil, og det højeste beløb pr. skade står i policen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Ting i bilen", "GF kasko", "Tryg kasko", "Transport"],
          raekker: [
            ["Bilens værktøjssæt og reservehjul", "ja", "ja", "–"],
            ["Ekstra sæt dæk med fælge", "ja", "ja", "–"],
            ["Ladekabel", "ja", "El-tilvalg", "–"],
            ["Håndværktøj og maskiner", "nej", "nej", "ja"],
            ["Varer og materialer", "nej", "nej", "ja"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, set den 4. oktober 2026. Tryg dækker afmonteret udstyr og værktøj, der kun kan bruges til den forsikrede varebil. Afmonteret udstyr skal ligge i aflåst rum, og der skal være voldeligt opbrud.`
        }
      },
      {
        overskrift: "Reoler og skuffer hører til bilen",
        tekst: [
          `Grænsen mellem kasko og transportforsikring går ved fastmonteringen. GF regner udstyr for fastmonteret, når det ikke kan fjernes uden værktøj og udelukkende er lavet til brug i bilen. Reoler, skuffer og anden indretning er dækket af GF's kasko, også når de er monteret efter levering.`,
          `KF's transportforsikring undtager fastmonteret biludstyr. Skuffemodulet hører altså til bilen, mens boremaskinen i skuffen hører under transportforsikringen. Mere om indretningen i <a href="/til-varebilen/forsikring/forsikring-af-indretning-og-udstyr/">forsikring af indretning og udstyr</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 266" role="img" aria-label="Varerum med en fastmonteret reol og et skuffemodul, en åben skuffe med en maskine og en løs værktøjskasse på gulvet. Reolen og skuffemodulet hører til bilen, mens indholdet og den løse kasse hører under transportforsikringen."><rect class="tg-rum" x="10" y="50" width="380" height="170"/><rect class="tg-gulv" x="10" y="210" width="380" height="10"/><rect class="tg-hylde" x="30" y="80" width="130" height="6"/><rect class="tg-hylde" x="30" y="112" width="130" height="6"/><rect class="tg-kasse" x="40" y="62" width="30" height="18"/><rect class="tg-kasse" x="80" y="66" width="40" height="14"/><rect class="tg-kasse" x="50" y="96" width="50" height="16"/><rect class="tg-modul" x="30" y="130" width="130" height="80"/><line class="tg-skillevaeg" x1="30" y1="156" x2="160" y2="156"/><line class="tg-skillevaeg" x1="30" y1="182" x2="160" y2="182"/><line class="tg-gulvlinje" x1="85" y1="143" x2="105" y2="143"/><line class="tg-gulvlinje" x1="85" y1="195" x2="105" y2="195"/><rect class="tg-kasse" x="160" y="158" width="60" height="22"/><rect class="tg-kuffert" x="170" y="148" width="40" height="10"/><rect class="tg-kuffert" x="270" y="180" width="70" height="30"/><line class="tg-gulvlinje" x1="295" y1="174" x2="315" y2="174"/><g class="tg-call"><line x1="95" y1="170" x2="95" y2="228"/><circle cx="95" cy="170" r="3"/><text class="tg-call__navn" x="10" y="244">Fast reol og skuffer</text><text class="tg-call__under" x="10" y="258">kasko på bilen</text></g><g class="tg-call"><line x1="190" y1="150" x2="190" y2="40"/><circle cx="190" cy="150" r="3"/><text class="tg-call__navn" x="150" y="20">Indholdet i skufferne</text><text class="tg-call__under" x="150" y="34">transportforsikring</text></g><g class="tg-call"><line x1="305" y1="190" x2="305" y2="228"/><circle cx="305" cy="190" r="3"/><text class="tg-call__navn" x="390" y="244" text-anchor="end">Løs værktøjskasse</text><text class="tg-call__under" x="390" y="258" text-anchor="end">transportforsikring</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1.2 og 4.1.4</a> og <a href="${KFV}" rel="noopener">KF, vilkår TE-TR-03, punkt 2.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det dækker transportforsikringen",
        tekst: [
          `En transportforsikring dækker virksomhedens løsøre, mens det bliver kørt rundt. KF dækker direkte skade på og tab af tingene under transport, mens bilen holder stille, og når de bliver båret fra bilen og hen til en bygning eller en anden bil. Ran og røveri er også dækket.`,
          `KF skriver på sin side, at tingene kan blive i bilerne om aftenen, natten og i weekenden. Forsikringen dækker også ting i de ansattes egne biler og ved eneuheld. KF's vilkår fra oktober 2025 dækker i Danmark og under transporter i Europa på højst en uge.`,
          `Købstædernes Forsikring beskriver dækningen sådan:`
        ],
        punkter: [
          `<strong>Erhvervsløsøre under transport</strong> i Danmark i egne eller ansattes biler.`,
          `<strong>Trailere.</strong> Lukkede kasser og aflåste trailere eller påhængsvogne, der hører til bilen, er med.`,
          `<strong>Holdt og læsning.</strong> Forsikringen dækker, mens bilen holder stille og ved på- og aflæsning til bygning eller bil.`,
          `<strong>Trafikuheld.</strong> Påkørsel, sammenstød og væltning er dækket, også for gods fastgjort på bilen.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Kilder: <a href="${KFI}" rel="noopener">KF: Transportforsikring, IPID TE-TR-02</a>, set den 4. oktober 2026, og <a href="${KFV}" rel="noopener">KF, vilkår TE-TR-03, punkt 3 og 6</a> og <a href="${KF}" rel="noopener">KF: Transportforsikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Transportforsikring under andre navne",
        tekst: [
          `Selskaberne kalder dækningen noget forskelligt, men det er den samme slags forsikring. If sælger transportforsikring af eget gods i eget transportmiddel. Den dækker ejendele under transport, også når bilen er parkeret, fx ved brand, vandskade, trafikuheld og indbrud.`,
          `If's oversigt viser, at forsikringen af eget gods dækker trafikulykke, politianmeldt tyveri under transport, totalt tab under læsning og losning og brækage. Strejke, krig og ekstra omkostninger er ikke med. Hos Topdanmark er transportforsikringen et tilvalg til løsøreforsikringen, og hos KF dækker den erhvervsløsøre i virksomhedens egne og de ansattes biler.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Skade", "KF", "If, eget gods"],
          raekker: [
            ["Tyveri fra bilen", "Ved synligt opbrud", "Politianmeldt tyveri"],
            ["Trafikuheld", "ja", "ja"],
            ["Skade ved af- og pålæsning", "ja", "Totalt tab"],
            ["Ting under presenning", "nej", "ikke nævnt"],
            ["Andres ting", "nej", "Kun eget gods"],
            ["Driftstab og andre indirekte tab", "nej", "ikke nævnt"]
          ],
          note: `Ikke nævnt betyder, at If's oversigt ikke nævner situationen. Kilder: <a href="${KFV}" rel="noopener">KF, vilkår TE-TR-03</a> og <a href="${IFT}" rel="noopener">If: Transportforsikring</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${IF}" rel="noopener">If: Varebilforsikring</a>, <a href="${TOPF}" rel="noopener">Topdanmark</a> og <a href="${KF}" rel="noopener">Købstædernes Forsikring</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Typiske undtagelser",
        tekst: [
          `Undtagelserne afgør, om et tyveri bliver dækket. Kravet om synligt opbrud betyder, at et tyveri fra en bil uden spor af opbrud ikke er dækket hos KF.`,
          `KF's vilkår undtager desuden skader fra vejret, forsinkelse, kortslutning og overspænding i elektronik, ridser, skrammer og slid. Skader, der skyldes dårlig emballering, tildækning eller surring, er heller ikke dækket, og det samme gælder ting, der bliver glemt eller forlagt.`
        ],
        punkter: [
          `<strong>Tyveri uden synligt opbrud.</strong> KF dækker ikke tyveri, når der ikke er tydelige synlige tegn på opbrud af bil, trailer eller påhængsvogn. Gjensidige skriver, at der oftest skal være synligt tegn på opbrud.`,
          `<strong>Presenning.</strong> KF dækker ikke genstande på lad eller i rum, der kun er dækket af dug, lærred eller presenning.`,
          `<strong>Andres ting.</strong> KF dækker ikke kørsel med genstande, der tilhører andre end forsikringstageren.`,
          `<strong>Indirekte tab.</strong> Driftstab og tab af marked er ikke dækket. Gjensidige dækker ikke spildtid, genanskaffelsestid og tid til at opgøre kravet.`,
          `<strong>Bilen.</strong> Skader på selve bilen og traileren er ikke dækket.`,
          `<strong>Beruset fører.</strong> Kørselsuheld, hvor føreren var beruset med forsikringstagerens vidende, er ikke dækket.`
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilder: <a href="${KFI}" rel="noopener">KF, IPID TE-TR-02</a> og <a href="${GJS}" rel="noopener">Gjensidige: Sikringsoversigt</a>, set den 4. oktober 2026, og <a href="${KFV}" rel="noopener">KF, vilkår TE-TR-03, punkt 2 og 4</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Gods for andre kræver anden dækning",
        tekst: [
          `Ansvarsforsikringen dækker ikke transporteret gods. Kører bilen gods for andre mod betaling, kan det dækkes særskilt.`,
          `KF's transportforsikring dækker kun virksomhedens egne ting. Undtagelsen gælder også varer, som virksomheden har solgt og leverer til sine kunder, selvom ejerskabet først går over til kunden ved leveringen. For et VVS-firma, der kører solgte varer ud til kunderne, er de varer altså ikke dækket af KF's transportforsikring.`
        ],
        punkter: [
          `<strong>Gjensidige.</strong> Fragtopgaver kræver tilvalget fragtføreransvar.`,
          `<strong>Codan.</strong> Fragtføreransvar dækker ansvaret for skade på gods, der transporteres mod betaling.`,
          `<strong>Tryg.</strong> Kører bilen gods mod betaling, fx som kurer, skal det oplyses til Tryg, medmindre bilen er registreret til det.`
        ],
        efter: [
          `Kilder: <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${CODAN}" rel="noopener">Codan</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 12</a>, set den 4. oktober 2026, og <a href="${KFV}" rel="noopener">KF, vilkår TE-TR-03, punkt 2.4</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Krav til alarm og låse",
        tekst: [
          `Gjensidige stiller krav efter værdien af indholdet ved hver transport. Over 100.000 kr. skal bilen have en aktiv tyverialarm, der overvåger både kabinen og varerummet. Alarmen skal have åbningskontakter på alle døre og åbninger og glasbrudsdetektorer, og den skal være koblet til bilens horn.`,
          `Over 200.000 kr. skal låsene desuden være dirkefri og boringssikre, og har varerummet vinduer, skal der være stålgitter for dem. Gjensidige skriver, at låsetyperne i oversigten er vejledende og bygger på de klassificeringer, der var kendt den 1. juli 2019.`
        ],
        tabel: {
          kolonner: ["Værdi pr. transport", "Krav"],
          raekker: [
            ["Over 100.000 kr.", "Aktiv tyverialarm, der overvåger kabine og varerum, med åbningskontakter på alle døre, glasbrudsdetektorer og kobling til bilens horn"],
            ["Over 200.000 kr.", "Som ovenfor plus dirkefri og boringssikre låse og stålgitter for vinduer til varerummet"]
          ],
          note: `Kilde: <a href="${GJS}" rel="noopener">Gjensidige: Sikringsoversigt jf. forsikringsbetingelserne</a>, set den 4. oktober 2026.`
        },
        figur: [
          {
            type: "svg",
            svg: `<svg viewBox="0 0 400 255" role="img" aria-label="Varebil set fra siden med bevægelsessensor i varerummet, gitter for sidedørens vindue, åbningskontakt på døren og ekstra lås bagpå."><g transform="translate(40,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-profil" x="150" y="84" width="55" height="100"/><rect class="tg-profil" x="158" y="94" width="40" height="28"/><line class="tg-skinne-tynd" x1="168" y1="94" x2="168" y2="122"/><line class="tg-skinne-tynd" x1="178" y1="94" x2="178" y2="122"/><line class="tg-skinne-tynd" x1="188" y1="94" x2="188" y2="122"/><rect class="tg-kasse" x="100" y="76" width="16" height="6"/><rect class="tg-kuffert" x="200" y="150" width="6" height="12"/><rect class="tg-kuffert" x="36" y="130" width="8" height="16"/><line class="tg-gulvlinje" x1="5" y1="207" x2="395" y2="207"/><g class="tg-call"><line x1="108" y1="82" x2="60" y2="46"/><circle cx="108" cy="82" r="3"/><text class="tg-call__navn" x="5" y="24">Bevægelsessensor</text><text class="tg-call__under" x="5" y="38">Topdanmarks alarmkrav</text></g><g class="tg-call"><line x1="178" y1="108" x2="190" y2="46"/><circle cx="178" cy="108" r="3"/><text class="tg-call__navn" x="160" y="24">Gitter for vindue</text><text class="tg-call__under" x="160" y="38">over 200.000 kr.</text></g><g class="tg-call"><line x1="203" y1="156" x2="340" y2="46"/><circle cx="203" cy="156" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Åbningskontakt</text><text class="tg-call__under" x="395" y="38" text-anchor="end">på alle døre</text></g><g class="tg-call"><line x1="40" y1="138" x2="30" y2="214"/><circle cx="40" cy="138" r="3"/><text class="tg-call__navn" x="5" y="230">Dirkefri lås</text><text class="tg-call__under" x="5" y="244">boringssikker, over 200.000 kr.</text></g></svg>`,
            tekst: `Skematisk. Gjensidige kræver en aktiv alarm med åbningskontakter på alle døre og glasbrudsdetektorer, når værdien pr. transport er over 100.000 kr. Over 200.000 kr. kræver Gjensidige også dirkefri og boringssikre låse og stålgitter for varerummets vinduer. Topdanmark nævner en bevægelsessensor i varerummet i sine alarmkrav. Kilder: <a href="${GJS}" rel="noopener">Gjensidige: Sikringsoversigt</a> og <a href="${TOPA}" rel="noopener">Topdanmark</a>, set den 4. oktober 2026.`
          }
        ]
      },
      {
        overskrift: "Nat, weekend og tidsrum",
        tekst: [
          `KF fremhæver, at selskabet ikke kræver, at tingene er taget ud af bilerne inden for bestemte tidsrum, men kræver synligt opbrud. Hos Gjensidige afhænger kravene af værdien pr. transport og ikke af tidspunktet.`,
          `Det er policen og betingelserne, der afgør, om et tyveri om natten er dækket. Betingelserne for tyveri fra bilen hos to selskaber:`
        ],
        tabel: {
          kolonner: ["Selskab", "Tyveri fra bilen", "Betingelse"],
          raekker: [
            ["KF", "Dækket aften, nat og weekend", "Intet krav om at tømme bilen inden for bestemte tidsrum. Synligt opbrud kræves."],
            ["Gjensidige", "Efter værdi", "Alarm og låsekrav over 100.000 og 200.000 kr. Synligt opbrud."]
          ],
          note: `Kilder: <a href="${KF}" rel="noopener">KF</a> og <a href="${GJS}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Rabat for alarm",
        tekst: [
          `Topdanmark, der i dag er en del af If, giver 5.000 kr. i rabat på selvrisikoen ved indbrud i en varebil med alarm. Er selvrisikoen lavere, betales ingen. Rabatten gælder ikke, hvis Topdanmark har stillet krav om alarm i forsikringsvilkårene.`,
          `Alarmen skal være en DEFA DVS90 eller tilsvarende, monteret af professionelle. Den skal mindst have bevægelsessensor i varerummet, åbningskontakter på dørene, sirene og skilte om alarmovervågning. Den skal være slået til og fungere på tidspunktet for indbruddet.`,
          `Har bilen allerede en alarm, behøver virksomheden ikke kontakte Topdanmark, for rabatten kommer automatisk ved et indbrud. Priser i <a href="/til-varebilen/varerumssikring/alarm-og-gps-tracker/">alarm og GPS-tracker</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Rabat på selvrisikoen ved indbrud", "5.000", "kr."],
            ["Alarm", "DEFA DVS90", "eller tilsvarende"]
          ],
          note: `Rabatten er fra Topdanmark, der i dag er en del af If. Alarmen skal være monteret af professionelle. Kilde: <a href="${TOPA}" rel="noopener">Topdanmark</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forsikringssum og selvrisiko",
        tekst: [
          `Hos KF står forsikringssummen pr. køretøj i policen og er grænsen for erstatningen ved hver skade. Summen indeksreguleres ikke. Der gælder en selvrisiko ved enhver skade, og beløbet står i policen.`,
          `Viser det sig ved en skade, at tingene i bilen samlet var mere værd end forsikringssummen, trækker KF dobbelt selvrisiko fra erstatningen. Summen gælder for hvert køretøj, så det er værdien i den enkelte bil på skadetidspunktet, der tæller.`,
          `Fordi summen ikke stiger af sig selv, kan den blive for lav, når værktøjet bliver skiftet ud med nyt og dyrere.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 172" role="img" aria-label="To bjælker. Er værdien af tingene i bilen under forsikringssummen, gælder én selvrisiko. Er værdien over summen, trækker Købstædernes Forsikring dobbelt selvrisiko fra erstatningen."><text class="tg-fremhaev" x="0" y="16">Værdi under summen</text><text class="tg-lille" x="300" y="16" text-anchor="middle">FORSIKRINGSSUM</text><rect class="tg-kasse" x="0" y="24" width="200" height="26"/><text x="208" y="42">én selvrisiko</text><text class="tg-fremhaev" x="0" y="84">Værdi over summen</text><rect class="tg-kasse" x="0" y="92" width="300" height="26"/><rect class="tg-modul" x="300" y="92" width="60" height="26"/><text x="360" y="136" text-anchor="end">dobbelt selvrisiko</text><line class="tg-skinne-tynd" x1="300" y1="22" x2="300" y2="126"/><text class="tg-lille" x="0" y="164">KF: SUMMEN GÆLDER PR. KØRETØJ</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${KFV}" rel="noopener">KF, vilkår TE-TR-03, punkt 5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Trailer og kassetrailer",
        tekst: [
          `Gjensidige forsikrer kassetrailere under transportdækningen, når sider og tag er lavet af stål, glasfiber eller tilsvarende plademateriale. Ved tyveri fra traileren skal døre og lemme være forsvarligt aflåst.`,
          `Skal hele traileren med indhold være dækket ved tyveri, kræver Gjensidige et rumindhold på mindst 11 kubikmeter. Trækstangen skal være sikret med en original trailerlås, låst med en F&amp;P-registreret boltlås grade 5. Gjensidige nævner Lockit Original trailerlås som et fabrikat, der opfylder kravet.`,
          `KF dækker ting i lukkede kasser og aflåste trailere eller påhængsvogne, der hører til bilen, men ikke ting under presenning på en åben trailer. Gjensidiges krav:`
        ],
        punkter: [
          `<strong>Tyveri fra kassetrailer.</strong> Gjensidige kræver forsvarligt aflåste døre og lemme.`,
          `<strong>Tyveri af hele kassetraileren.</strong> Rumindhold på mindst 11 kubikmeter og trækstangen sikret med original trailerlås og F&amp;P-registreret boltlås grade 5.`,
          `<strong>Selve traileren.</strong> Den skal have sin egen kaskoforsikring.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Kassetrailer med aflåste døre, et rumindhold på mindst 11 kubikmeter og lås på trækstangen."><rect class="tg-rum" x="150" y="44" width="200" height="116"/><line class="tg-doer" x1="344" y1="52" x2="344" y2="152"/><rect class="tg-kuffert" x="334" y="96" width="8" height="14"/><text class="tg-fremhaev" x="245" y="98" text-anchor="middle">Mindst 11 m³</text><text x="245" y="114" text-anchor="middle">rumindhold</text><line class="tg-gulvlinje" x1="150" y1="150" x2="66" y2="158"/><rect class="tg-modul" x="46" y="150" width="20" height="16"/><circle class="tg-profil" cx="250" cy="172" r="16"/><circle class="tg-profil" cx="250" cy="172" r="6"/><line class="tg-gulvlinje" x1="5" y1="190" x2="395" y2="190"/><g class="tg-call"><line x1="56" y1="150" x2="56" y2="40"/><circle cx="56" cy="150" r="3"/><text class="tg-call__navn" x="5" y="16">Original trailerlås</text><text class="tg-call__under" x="5" y="30">og boltlås grade 5</text></g><g class="tg-call"><line x1="338" y1="103" x2="360" y2="40"/><circle cx="338" cy="103" r="3"/><text class="tg-call__navn" x="395" y="16" text-anchor="end">Døre og lemme</text><text class="tg-call__under" x="395" y="30" text-anchor="end">forsvarligt aflåst</text></g></svg>`,
          tekst: `Skematisk. Gjensidiges krav for at dække tyveri fra en kassetrailer og af hele kassetraileren. Kilde: <a href="${GJS}" rel="noopener">Gjensidige: Sikringsoversigt</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Nøgler og nøgleboks",
        tekst: [
          `Gjensidige dækker også tyveri, hvor tyven har skaffet sig adgang med en nøgle, der er stjålet ved et indbrud, som i øvrigt er dækket. Det gælder også en nøgle fra en nøgleboks, som er brudt op.`,
          `Nøgleboksen skal være forsvarligt placeret og fastgjort, men ikke på selve den enhed, den giver adgang til. Den skal opfylde kravene til F&amp;P-registrering klasse 5.`,
          `Tryg kræver, at brugeren altid tager bilnøglen med og låser døre og vinduer, også når bilen kun forlades et kort øjeblik. Mister brugeren nøglen, skal låsene omstilles hurtigst muligt, og indtil da skal bilen sikres på anden vis.`
        ],
        efter: [
          `Kilder: <a href="${GJS}" rel="noopener">Gjensidige: Sikringsoversigt</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sådan sker indbruddene",
        tekst: [
          `Topdanmark skriver, at politiet fik 4.540 anmeldelser om indbrud i varebiler i 2024. Sikringsguiden fra F&amp;P skriver, at tyvene især går efter det værdifulde værktøj.`,
          `Varebiler, hvor varerummet kan åbnes fra førerkabinen, er ifølge Sikringsguiden særligt udsatte. Tyven knuser typisk en lille trekantsrude, kommer ind i kabinen og åbner varerummet indefra. Sikringsguiden peger på at slå funktionen fra, og Tryg peger på at slå centrallåsen fra, så varerummet ikke låses op, når fordøren åbnes.`,
          `Ud over selvrisikoen og nyt værktøj nævner Sikringsguiden tabt arbejdsfortjeneste, værkstedsbesøg og flyttede kundeaftaler som udgifter ved et indbrud. KF dækker ikke driftstab og andre indirekte tab, og Gjensidige dækker ikke spildtid og tid til at genanskaffe værktøjet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 226" role="img" aria-label="Varebil set fra siden. En stiplet pil viser tyvens vej gennem den lille trekantsrude i førerdøren, ind i kabinen og videre ind i varerummet, hvor værktøjet ligger."><defs><marker id="pil-vaerktoej-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse" markerUnits="userSpaceOnUse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(40,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><path class="tg-modul" d="M240,104 L249,116 L240,116 Z"/><rect class="tg-kuffert" x="90" y="170" width="50" height="26"/><path class="tg-skinne" d="M340,70 Q300,82 246,110 L150,170" fill="none" marker-end="url(#pil-vaerktoej-1)"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="244" y1="112" x2="300" y2="46"/><circle cx="244" cy="112" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Lille trekantsrude</text><text class="tg-call__under" x="395" y="38" text-anchor="end">knuses</text></g><g class="tg-call"><line x1="115" y1="170" x2="115" y2="46"/><circle cx="115" cy="170" r="3"/><text class="tg-call__navn" x="10" y="24">Varerummet åbnes</text><text class="tg-call__under" x="10" y="38">indefra fra kabinen</text></g></svg>`,
          tekst: `Skematisk. Fremgangsmåden, som Sikringsguiden beskriver den. Kilder: <a href="${SG}" rel="noopener">Sikringsguiden (F&amp;P): Tyveri fra varebiler</a>, <a href="${TOPA}" rel="noopener">Topdanmark</a> og <a href="${TRYGH}" rel="noopener">Tryg: Forsikringer til håndværkere</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Når bilen bryder sammen med værktøjet",
        tekst: [
          `Tryg Vejhjælp kører gods i varebilen, fx varer, værktøj og byggematerialer, videre til bestemmelsesstedet i Danmark. Det gælder kun én adresse, og af- og pålæsning er ikke med.`,
          `Uden vejhjælp betaler Trygs kasko de nødvendige udgifter til at transportere bilen til nærmeste reparatør efter en dækket skade. Skal gods, varer eller værktøj læsses af før transporten, er den udgift ikke dækket.`,
          `Falck sælger Omlæsning af gods som tilvalg til Vejhjælp Pro. Læs mere i <a href="/til-varebilen/forsikring/vejhjaelp-til-varebil/">vejhjælp til varebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5 og 5.1</a>, set den 7. oktober 2026, og <a href="${FALCK}" rel="noopener">Falck: Vejhjælp Pro</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Dokumentation ved tyveri",
        tekst: [
          `Tyveri skal anmeldes til politiet med det samme. Selskabet kan forlange dokumentation for kravet, fx købsnota eller regning. F&amp;P's Sikringsguiden peger på en liste over værktøjet med mærke og serienumre, og på at fortælle politiet om mærkningen.`,
          `Gjensidige skriver, at dokumentationen skal være i orden ved en anmeldelse af tyveri. Med Trygs Super-pakke følger et DNA-kit, som værktøjet kan mærkes med, så politiet kan se, hvem det tilhører. Mere i <a href="/til-varebilen/varerumssikring/maerkning-af-vaerktoej/">mærkning af værktøj</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Listen", "Sikringsguiden fra F&amp;P peger på en liste over værktøjet med mærke og serienumre."],
            ["Mærkningen", "Værktøjet kan mærkes synligt eller usynligt, fx med Trygs DNA-kit."],
            ["Anmeldelsen", "Du anmelder tyveriet til politiet med det samme og fortæller om mærkningen."],
            ["Kravet", "Selskabet kan forlange dokumentation, fx købsnota eller regning."]
          ]
        },
        efter: [
          `Kilder: <a href="${SG}" rel="noopener">Sikringsguiden</a>, <a href="${GJS}" rel="noopener">Gjensidige: Sikringsoversigt</a> og <a href="${TRYGH}" rel="noopener">Tryg: Forsikringer til håndværkere</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så kan dækningen og summen passe til bilerne.",
    spoergsmaal: [
      "Værdien af værktøj og materialer i den bil, der har mest med.",
      "Om værktøjet ligger i bilen om natten og i weekenden.",
      "Hvor bilerne holder om natten: gade, gård eller aflåst garage.",
      "Alarm, ekstra låse og gitter, med fabrikat.",
      "Om varerummet kan åbnes fra førerkabinen.",
      "Om bilerne kører med kassetrailer eller trailer.",
      "Om bilerne transporterer andres ting, også solgte varer til kunder.",
      "Om bilerne kører i udlandet med værktøjet."
    ],
    faq: [
      ["Er værktøj i varebilen dækket af bilforsikringen?", "Nej. Værktøj dækkes af en transportforsikring, som hos Topdanmark er et tilvalg til løsøreforsikringen."],
      ["Er værktøj dækket, hvis det bliver stjålet om natten?", "Det afhænger af betingelserne. KF har intet krav om at tømme bilen inden for bestemte tidsrum, men kræver tydelige synlige tegn på opbrud. Gjensidiges krav til alarm og låse følger værdien pr. transport."],
      ["Hvad er synligt opbrud?", "Det er tydelige spor af, at bilen er brudt op. Uden dem dækker fx KF ikke tyveri fra bilen."],
      ["Kræver forsikringen alarm i varebilen?", "Hos Gjensidige ja, når værdien pr. transport er over 100.000 kr. Over 200.000 kr. kræves også dirkefri og boringssikre låse og gitter."],
      ["Giver alarm rabat på forsikringen?", "Topdanmark giver 5.000 kr. i rabat på selvrisikoen ved indbrud, hvis bilen har en godkendt alarm, der var slået til."],
      ["Er værktøj på et lad med presenning dækket?", "Ikke hos KF. Genstande dækket af dug, lærred eller presenning er undtaget."],
      ["Er reoler og skuffer dækket af transportforsikringen?", "Nej. Fastmonteret indretning hører til bilen og er hos GF dækket af kaskoen. Transportforsikringen dækker det, der ligger i skufferne."],
      ["Hvad sker der, hvis der er mere værktøj i bilen end forsikringssummen?", "Hos KF trækkes der dobbelt selvrisiko fra erstatningen, når de samlede ting i bilen var mere værd end summen. Summen indeksreguleres heller ikke."],
      ["Kører vejhjælpen værktøjet videre, når varebilen bryder sammen?", "Ja, Tryg Vejhjælp kører det videre til én adresse i Danmark. Af- og pålæsning er ikke med. Falck har omlæsning af gods som tilvalg."],
      ["Er ladekablet dækket som løsdel?", "Ja, hos GF også uden fastmontering. Hos Tryg kræver det tilvalget El- og hybridbil dækning."]
    ],
    kilder: [
      { navn: "Topdanmark: Er værktøj dækket af min køretøjsforsikring?", url: TOPF, dato: "2026-10-07" },
      { navn: "Topdanmark: Montér en alarm i din varebil og spar 5.000 kr. i selvrisiko", url: TOPA, dato: "2026-10-07" },
      { navn: "Købstædernes Forsikring: Transportforsikring, IPID TE-TR-02", url: KFI, dato: "2026-10-07" },
      { navn: "Købstædernes Forsikring: Transportforsikring, vilkår TE-TR-03, oktober 2025", url: KFV, dato: "2026-10-07" },
      { navn: "Købstædernes Forsikring: Transportforsikring", url: KF, dato: "2026-10-07" },
      { navn: "Gjensidige: Sikringsoversigt jf. forsikringsbetingelserne", url: GJS, dato: "2026-10-07" },
      { navn: "Tryg: Forsikringer til håndværkere", url: TRYGH, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Sikringsguiden (F&P): Tyveri fra varebiler", url: SG, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-07" },
      { navn: "If: Transportforsikring", url: IFT, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-04" },
      { navn: "Codan: Firmabilforsikring", url: CODAN, dato: "2026-10-04" },
      { navn: "Falck: Vejhjælp til firmabil (Vejhjælp Pro)", url: FALCK, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["If: varebilforsikringen dækker ikke udstyr, værktøj eller øvrige ejendele ejet af forsikringstageren og transporteret i bilen; forsikring af egne ting i egen bil dækker ejendele under transport, også når bilen er parkeret, bl.a. ved brand, vandskade, trafikuheld og indbrud.", IF],
    ["KF: værdier i bilerne er ikke automatisk dækket af løsøreforsikringen og skal forsikres med transportforsikringen.", KF],
    ["Tryg: erhvervsforsikringen dækker værktøj og maskiner, fx ved tyveri fra arbejdspladsen, brand og hærværk; bliver værktøjet stjålet fra varebilen, kræver det en transportforsikring.", TRYGH],
    ["GF: dækket uden fastmontering er bilens originale tilbehør (fx reservehjul, lappesæt, donkraft og værktøjssæt), højst 5 cd eller dvd, 1 cykelholder, 1 tagbagagebærer eller tagboks, 1 sæt vinter- eller sommerdæk med fælge og opladningsudstyr; afmonteret udstyr skal ved tyveri opbevares i forsvarligt aflåst rum med konstaterbart voldeligt opbrud (punkt 4.1.4-4.1.5).", GF],
    ["Tryg: det maksimale erstatningsbeløb pr. skade for afmonteret og ikke fastmonteret udstyr og tilbehør fremgår af forsikringsaftalen (afsnit 4.5).", TRYG],
    ["GF: fastmonteret betyder, at udstyret ikke kan fjernes uden brug af værktøj og udelukkende er konstrueret til brug i bilen; reoler, skuffer og lignende indretning er dækket, også selvom de ikke er monteret af forhandleren før levering (punkt 4.1.2 og 4.1.4).", GF],
    ["KF, vilkår TE-TR-03 (oktober 2025): fastmonteret biludstyr og genstande, der bliver glemt eller forlagt, er ikke omfattet (punkt 2.1-2.2).", KFV],
    ["KF, vilkår TE-TR-03: ran og røveri er dækket (punkt 3.2); forsikringen dækker i Danmark og under transporter i Europa af højst en uges varighed (punkt 6).", KFV],
    ["KF: der er intet krav om, at tingene skal være taget ud af bilerne inden for bestemte tidsintervaller, så de kan blive i bilerne om aftenen, natten og i weekenden; forsikringen dækker også trafikuheld og eneuheld og genstande i personalets biler.", KF],
    ["If, forsikring af eget gods i eget transportmiddel: inkluderer trafikulykke, havari og katastrofe, tyveri under transport (politianmeldt), totalt tab under læsning og losning og brækage; inkluderer ikke strejke og sabotage, krig og ekstra omkostninger.", IFT],
    ["KF, vilkår TE-TR-03: undtaget er bl.a. luftens eller vejrligets påvirkning, forsinkelse, kortslutning, overspænding eller induktion af elektroniske genstande, ridser og skrammer, slitage, utilstrækkelig emballering eller tildækning og utilstrækkelig fastgøring eller surring (punkt 4.1).", KFV],
    ["KF, vilkår TE-TR-03: undtagelsen for genstande tilhørende andre end forsikringstageren gælder også varer, som forsikringstageren har solgt og leverer til sine kunder, selvom ejerforholdet først overgår ved levering (punkt 2.4).", KFV],
    ["Gjensidige: låsetyperne i sikringsoversigten er vejledende og udtryk for de godkendte klassificeringer, der var kendt den 1. juli 2019; alarmen ved værdi over 100.000 kr. skal være koblet på køretøjets horn.", GJS],
    ["Topdanmark: alarmen skal mindst have bevægelsessensor i varerummet, åbningskontakter på døre, sirene og tydelig skiltning; har varebilen allerede en alarm, behøver man ikke kontakte Topdanmark, og rabatten gives automatisk ved indbrud.", TOPA],
    ["KF, vilkår TE-TR-03: overstiger den samlede værdi af genstandene i transportmidlet på skadetidspunktet den aftalte forsikringssum, fratrækkes dobbelt selvrisiko i erstatningen (punkt 5.3).", KFV],
    ["Gjensidige: kassetrailere forsikret under transportdækningen er trailere, hvor sider og tag er af stål, glasfiber eller tilsvarende plademateriale; Lockit Original trailerlås opfylder kravet til trailerlås.", GJS],
    ["Gjensidige: tyveri, hvor der er skaffet adgang med en tillistet nøgle fra et i øvrigt dækningsberettiget indbrud eller fra opbrud af en forsvarligt placeret nøgleboks, der ikke sidder på selve opbevaringsenheden, er dækket; nøgleboksen skal opfylde F&P-registrering klasse 5.", GJS],
    ["Tryg: brugeren skal altid tage bilnøglen med og låse døre og vinduer; mistes nøglen, skal omstilling af dør- og tændingslås bestilles hurtigst muligt, og bilen sikres på anden vis indtil da (afsnit 1).", TRYG],
    ["Topdanmark skriver, at politiet i 2024 fik 4.540 anmeldelser om indbrud i varebiler.", TOPA],
    ["Sikringsguiden: varebiler, hvor varerummet kan åbnes fra førerkabinen, er særligt udsatte; tyven knuser typisk en lille trekantsrude og åbner varerummet indefra; Sikringsguiden anbefaler at deaktivere funktionen og nævner tabt arbejdsfortjeneste, værkstedsbesøg og flyttede kundeaftaler som udgifter ud over selvrisiko og genanskaffelse.", SG],
    ["Tryg anbefaler at deaktivere centrallåsen, så varerummet ikke automatisk låses op, når fordøren åbnes.", TRYGH],
    ["Tryg: transportomkostninger til nærmeste reparatør efter dækket skade betales under kasko, men omkostninger til aflæsning af gods, varer, værktøj og lignende er ikke omfattet (afsnit 4.5).", TRYG],
    ["Gjensidige opfordrer til at have dokumentationen i orden ved anmeldelse af tyveri, fordi der oftest skal være synligt tegn på opbrud.", GJS],
    ["Tryg: med Super-pakken på varebilforsikringen følger et DNA-kit til mærkning af værktøj og udstyr.", TRYGH],
    ["Sikringsguiden: værktøjet kan mærkes synligt eller usynligt, og ved tyveri skal politiet have besked om mærkningen.", SG]
  ]
};
