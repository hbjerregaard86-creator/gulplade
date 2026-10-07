// Underside /til-varebilen/vinterhjul/daek-til-elvarebil/ (07-10-2026)
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var FSDAEK = `https://www.fstyr.dk/privat/krav-til-koeretoejer/vejledning-om-daek`;
var MICH = `https://www.michelin.ca/en/auto/electric-vehicles-faq`;
var MICHC = `https://www.michelin.co.uk/auto/advice/van/reinforced-tyres-utility-vehicles`;
var TP = `https://tyrepress.com/2021/01/continental-offering-hl-tyres-for-heavy-electric-vehicles`;
var CTRYK = `https://www.continental-tires.com/dk/da/tire-knowledge/tire-pressure/`;
var CTPMS = `https://www.continental-tires.com/dk/da/tire-knowledge/tire-pressure-monitoring-system/`;
var CEU = `https://www.continental-tires.com/dk/da/tire-knowledge/eu-tire-label/`;
var TH4 = `https://www.thansen.dk/bil/daek-og-faelge/helaarsdaek/16-daek/continental-215-65-16c-109-107t-vancontact-4-season-8pr/n-241666596/pn-234101745/`;
var THW = `https://www.thansen.dk/bil/daek-og-faelge/vinterdaek/16-daek/continental-215-65-16c-106-104r-vancontact-winter/n-1930828057/pn-245767309/`;
var VW = `https://www.volkswagen.dk/da/vaerksted/service/elbil-service.html`;
var DIN = `https://dinitrol.dk/rustbeskyttelse-pris/`;
var EU = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32020R0740`;
var FORD = `https://www.fromtheroad.ford.com/content/dam/fordmediasite/eur/en/library/2026/tech-specs/E-Transit_Custom_AWD_2026_tech_spec_EU.pdf`;
var EPREL = `https://eprel.ec.europa.eu/informationsheet/Fiche_671837_DA.pdf`;

module.exports = {
  id: "vinterhjul/daek-til-elvarebil",
  side: {
    slug: "daek-til-elvarebil",
    navn: "Dæk til elvarebil",
    titel: "Dæk til elvarebil: belastning, HL og slid",
    kort: `Elvarebilen er tungere end dieselbilen, og det påvirker dækkenes bæreevne, slid, støj og rækkevidde. Her er reglerne, HL- og C-dæk og EU-dækmærket.`,
    beskrivelse: `Dæk til elvarebil: bæreevne og akseltryk, HL-, XL- og C-dæk, 20 % hurtigere slid og EU-dækmærkets tal for støj og rullemodstand.`,
    manchet: `Batteriet gør elvarebilen tungere end den tilsvarende dieselbil. Reglerne for dækkene er de samme, men vægten og trækkraften slider mere. Michelin oplyser, at elbiler i gennemsnit slider et dæk 20 procent hurtigere end en sammenlignelig bil med forbrændingsmotor.`,
    visuel: {
      hero: "vinterhjul",
      hero_el: true,
      kort_fortalt: [
        ["Dækslid på elbiler", "20 % hurtigere", "i gennemsnit, ifølge Michelin"],
        ["HL-dæk i 245/40 R19", "825 kg", "pr. dæk mod 750 kg for XL"],
        ["Mønsterdybde", "mindst 1,6 mm", "samme krav som på dieselbilen"],
        ["Støj, varebildæk 215/65 R16C", "72–73 dB", "hos Thansen"]
      ],
      toc: true,
      stribe: { drivmiddel: "el", titel: "Elvarebiler med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Samme regler som på dieselbilen",
        tekst: [
          `Færdselsstyrelsens synsvejledning stiller de samme krav til dækkene, uanset om bilen kører på diesel eller strøm. Dækkenes bæreevne skal mindst svare til bilens tilladte akseltryk, og dækkene skal mindst være beregnet til bilens tophastighed.`,
          `Mønsterdybden skal være mindst 1,6 mm, og dækkene på samme aksel skal have samme dimension og type. Dækket skal også passe til fælgen og være mærket med dimension, fabrikantens navn, bæreevne og hastighed.`,
          `Fælgen har sit eget krav, for den skal være beregnet til bilens tilladte akseltryk. Det får betydning, hvis du vil sætte et andet sæt fælge på en tung elvarebil, fx til vinterhjulene.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Krav", "Dieselbil", "Elbil"],
          raekker: [
            ["Bæreevne mindst som det tilladte akseltryk", "ja", "ja"],
            ["Dækket er beregnet til bilens tophastighed", "ja", "ja"],
            ["Mønsterdybde mindst 1,6 mm", "ja", "ja"],
            ["Samme dimension og type på samme aksel", "ja", "ja"],
            ["Fælgen er beregnet til det tilladte akseltryk", "ja", "ja"]
          ],
          note: `Kravene står i <a href="${SYN}" rel="noopener">Færdselsstyrelsens synsvejledning, afsnit 8.02.002 og 8.02.003</a>, set den 7. oktober 2026. De er de samme, uanset om bilen kører på diesel eller strøm.`
        },
        efter: [
          `Akseltrykket står i registreringsattesten. Mere om vægt i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`
        ]
      },
      {
        overskrift: "Vægten sidder i bunden",
        tekst: [
          `Højvoltsbatteriet dækker det meste af elbilens bund, skriver Volkswagen. Dinitrol skriver, at batteriets vægt giver større belastning af undervogn og hjulophæng.`,
          `Dækkene skal bære det akseltryk, der står i registreringsattesten. Det er tallet for hver aksel, du skal sammenligne med dækkenes bæreevne, og ikke bilens samlede vægt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Elvarebil set fra siden med batteriet i bunden mellem akslerne og akseltrykket på for- og bagaksel"><defs><marker id="pil-vinterhjul-3" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><path d="M30,150 V100 L75,55 H370 V150 Z" class="tg-rum"/><rect x="130" y="138" width="150" height="16" class="tg-modul"/><circle cx="95" cy="160" r="22" class="tg-profil"/><circle cx="315" cy="160" r="22" class="tg-profil"/><line x1="10" y1="182" x2="390" y2="182" class="tg-gulvlinje"/><g class="tg-maal"><line x1="95" y1="100" x2="95" y2="134" marker-end="url(#pil-vinterhjul-3)"/><line x1="315" y1="100" x2="315" y2="134" marker-end="url(#pil-vinterhjul-3)"/><text x="95" y="210" text-anchor="middle">akseltryk for</text><text x="315" y="210" text-anchor="middle">akseltryk bag</text></g><g class="tg-call"><line x1="205" y1="146" x2="205" y2="30"/><circle cx="205" cy="146" r="3"/><text x="180" y="22" class="tg-call__navn">Batteri i bunden</text></g></svg>`,
          tekst: `Skematisk. Elvarebil med batteriet mellem akslerne. Kilder: <a href="${VW}" rel="noopener">Volkswagen</a>, set den 7. oktober 2026, og <a href="${DIN}" rel="noopener">Dinitrol</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Et eksempel: E-Transit Custom",
        tekst: [
          `Ford har lagt batteriet under gulvet i E-Transit Custom, og elmotoren sidder bagtil og trækker på baghjulene. Fords tekniske data for 2026 viser, at en Limited Van L1H1 med 100 kW vejer 2.187 kg uden last. Den må veje 3.225 kg i alt, og nyttelasten er 1.038 kg.`,
          `Ford skriver, at nyttelasten afhænger af udstyr og opbygning, og at bæreevnen for den enkelte bil står på mærkatet i dørkarmen. E-Transit Custom har dæktrykovervågning, og serien fås med fælge fra 16 til 19 tommer.`,
          `Eksemplet viser, hvor meget dækkene skal bære på en mellemstor elvarebil. Med fuld last skal de fire dæk tilsammen bære over 3 ton, og hver aksel skal have dæk, der passer til akseltrykket i registreringsattesten.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Egenvægt", "2.187", "kg"],
            ["Nyttelast", "1.038", "kg"],
            ["Tilladt totalvægt", "3.225", "kg"]
          ],
          note: `Ford E-Transit Custom Limited Van L1H1 med 100 kW. Kilde: <a href="${FORD}" rel="noopener">Ford: E-Transit Custom og Transit Custom PHEV, tekniske data 2026</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Akseltryk og belastningsindeks",
        tekst: [
          `Belastningsindekset er et tal på dækkets side, der svarer til en bæreevne i kg pr. dæk. Et højere tal betyder, at dækket må bære mere. På et C-dæk står der ofte to tal, fx 109/107. Det første gælder, når der sidder ét dæk i hver ende af akslen, og det andet gælder tvillingmontering.`,
          `Synsvejledningen lægger bæreevnen for dækkene på samme aksel sammen. De to dæk på en aksel skal altså tilsammen kunne bære mindst det tilladte akseltryk. Hvordan du omregner indekset til kg, kan du læse på siden om <a href="/til-varebilen/vinterhjul/c-daek/">C-dæk til varebil</a>.`,
          `Samme dimension kan fås med flere belastningsindeks. Michelin nævner Agilis CrossClimate i 235/65 R16, der fås med indeks 115/113 eller 121/119, og skriver, at valget skal følge bilens last.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="En aksel set bagfra med to dæk. Det tilladte akseltryk trykker ned på akslen, og de to dæk skal tilsammen kunne bære det."><defs><marker id="pil-elvarebil-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="10" y="16">AKSLEN SET BAGFRA</text><rect class="tg-kuffert" x="130" y="28" width="140" height="36"/><text x="200" y="51" text-anchor="middle">Tilladt akseltryk</text><line class="tg-pil" x1="200" y1="64" x2="200" y2="112" marker-end="url(#pil-elvarebil-1)"/><rect class="tg-hylde" x="104" y="122" width="192" height="12"/><rect class="tg-modul" x="68" y="92" width="36" height="80" rx="8"/><rect class="tg-modul" x="296" y="92" width="36" height="80" rx="8"/><line class="tg-gulvlinje" x1="20" y1="173" x2="380" y2="173"/><g class="tg-call"><line x1="86" y1="150" x2="40" y2="186"/><circle cx="86" cy="150" r="3"/><text class="tg-call__navn" x="10" y="198">Dæk 1</text><text class="tg-call__under" x="10" y="212">bæreevne efter indekset</text></g><g class="tg-call"><line x1="314" y1="150" x2="360" y2="186"/><circle cx="314" cy="150" r="3"/><text class="tg-call__navn" x="390" y="198" text-anchor="end">Dæk 2</text><text class="tg-call__under" x="390" y="212" text-anchor="end">samme dimension og type</text></g><text class="tg-lille" x="200" y="230" text-anchor="middle">TILSAMMEN MINDST DET TILLADTE AKSELTRYK</text></svg>`,
          tekst: `Skematisk. De to dæk på samme aksel skal tilsammen bære mindst det tilladte akseltryk. Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.002</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hastighedsindeks og tophastighed",
        tekst: [
          `Bogstavet efter belastningsindekset er hastighedsindekset. Det viser den højeste hastighed, dækket er beregnet til, fx H for 210 km/t. Synsvejledningen kræver, at dækket mindst er beregnet til bilens tophastighed.`,
          `Har bilen en hastighedsbegrænser, regner synsvejledningen den begrænsede hastighed som bilens tophastighed. En ændring af begrænseren er en ændring af motoren, som skal godkendes og registreres.`,
          `Vinterdæk har en lempelse. En bil må køre på vinterdæk, der er beregnet til mindst 160 km/t, svarende til hastighedsmærket Q, selvom bilens tophastighed er højere.`
        ]
      },
      {
        overskrift: "Hvorfor dækkene slides hurtigere",
        tekst: [
          `Michelin oplyser, at elbiler i gennemsnit slider et dæk 20 procent hurtigere end en sammenlignelig bil med forbrændingsmotor. Michelin peger på tre årsager.`
        ],
        punkter: [
          `<strong>Vægt.</strong> Elbiler er tungere, og vægten er en afgørende faktor for slid. Mere vægt giver hurtigere slid.`,
          `<strong>Moment.</strong> Elbiler har ofte mere moment til rådighed ved acceleration.`,
          `<strong>Regenerering.</strong> Kombinationen af vægt og regenerativ bremsning giver hurtigere slid.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Hurtigere dækslid på elbiler", "20", "% i gennemsnit, Michelin"],
            ["Længere levetid med korrekt pleje", "7.500", "km i gennemsnit, Continental"]
          ],
          note: `Michelin sammenligner med en tilsvarende bil med forbrændingsmotor. Continental skriver, at korrekt pleje kan forlænge dækkets levetid med 7.500 km i gennemsnit. Kilder: <a href="${MICH}" rel="noopener">Michelin</a>, set den 4. oktober 2026, og <a href="${CTRYK}" rel="noopener">Continental: Dæktryk</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kører elvarebilen og dieselbilen lige langt, skal elbilen altså have nye dæk tidligere, hvis Michelins gennemsnit holder for netop den bil.`,
          `Kilde: <a href="${MICH}" rel="noopener">Michelin, Electric vehicles FAQ</a>, set den 4. oktober 2026. Michelin angiver i gennemsnit 20 procent hurtigere slid end en sammenlignelig bil med forbrændingsmotor.`
        ]
      },
      {
        overskrift: "Moment og regenerering",
        tekst: [
          `Michelin skriver, at elbiler ofte har mere moment til rådighed, når de accelererer. Kraften skal gennem dækkets kontaktflade med vejen, og det er her, gummiet slides. Fords E-Transit Custom har fx 415 Nm i den udgave, der kun har baghjulstræk.`,
          `Regenerering betyder, at elmotoren bremser bilen og lader batteriet op. Volkswagen skriver, at den første centimeter af bremsepedalens vandring kun aktiverer regenerering, når batteriet har plads til strømmen. Bremsningen går derfor også gennem dækkene, selvom bremseklodserne bruges mindre.`,
          `Volkswagen skriver også, at bremserne på en elbil risikerer at blive brugt så lidt, at de ruster, før de bliver slidt. Derfor skal de kontrolleres ved hvert service.`,
          `Continental anbefaler at køre jævnt og undgå unødvendigt kraftige accelerationer og opbremsninger, hvis man vil passe på dækkene og holde forbruget nede.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Et hjul set fra siden. Bilens vægt trykker dækket mod vejen, trækkraften ved acceleration og bremsningen ved regenerering går begge gennem kontaktfladen."><defs><marker id="pil-elvarebil-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="10" y="16">KØRSELSRETNING</text><line class="tg-pil" x1="10" y1="26" x2="110" y2="26" marker-end="url(#pil-elvarebil-2)"/><line class="tg-pil" x1="200" y1="4" x2="200" y2="38" marker-end="url(#pil-elvarebil-2)"/><text x="208" y="24">Bilens vægt</text><circle class="tg-profil" cx="200" cy="105" r="60"/><circle class="tg-hylde" cx="200" cy="105" r="36"/><circle class="tg-kasse" cx="200" cy="105" r="9"/><line class="tg-gulvlinje" x1="20" y1="166" x2="380" y2="166"/><rect class="tg-modul" x="175" y="161" width="50" height="6"/><line class="tg-pil" x1="205" y1="186" x2="300" y2="186" marker-end="url(#pil-elvarebil-2)"/><text x="306" y="190">Acceleration</text><line class="tg-pil" x1="195" y1="206" x2="100" y2="206" marker-end="url(#pil-elvarebil-2)"/><text x="94" y="210" text-anchor="end">Regenerering</text><g class="tg-call"><line x1="226" y1="163" x2="330" y2="132"/><circle cx="226" cy="163" r="3"/><text class="tg-call__navn" x="395" y="112" text-anchor="end">Kontaktfladen</text><text class="tg-call__under" x="395" y="126" text-anchor="end">her slides gummiet</text></g></svg>`,
          tekst: `Skematisk. Vægten trykker dækket mod vejen, og både trækkraften og regenereringen går gennem kontaktfladen. Kilder: <a href="${MICH}" rel="noopener">Michelin</a>, set den 4. oktober 2026, og <a href="${VW}" rel="noopener">Volkswagen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kræver elvarebilen særlige dæk",
        tekst: [
          `Nej, ifølge Michelin. Så længe belastningsgrænserne overholdes, fungerer alle Michelins dæklinjer på både elbiler og biler med forbrændingsmotor.`,
          `Michelin skriver, at nye dækgenerationer er gået mod flere XL-størrelser og højere hastighedsindeks for at matche elbilerne. Det er belastningsindekset og hastighedsindekset, der afgør, om dækket er lovligt på bilen, og ikke om det er markedsført til elbiler.`,
          `Er du i tvivl om, hvilket dæk bilen skal have, henviser Michelin til bilfabrikantens anbefalinger i instruktionsbogen.`
        ]
      },
      {
        overskrift: "HL-dæk",
        tekst: [
          `HL står for High Load. Det er en belastningskategori for personbildæk, og Continental lancerede de første HL-dæk i 2021 til tunge el- og hybridpersonbiler. Et HL-dæk bærer mere end et XL-dæk ved samme tryk.`,
          `I dimensionen 245/40 R19 bærer et standarddæk 670 kg, et XL-dæk 750 kg og et HL-dæk 825 kg. HL-dækket bærer dermed knap en fjerdedel mere end standarddækket.`,
          `Continental forstærkede dækkets vulst, som er den kant, der sidder mod fælgen, og ændrede profilen for at holde støjen nede. På sidevæggen står HL foran dimensionen, fx HL 245/40 R19 101Y XL.`
        ],
        tabel: {
          kolonner: ["Kategori", "Indeks", "Bæreevne pr. dæk"],
          raekker: [
            ["Standard (SL)", "94", "670 kg"],
            ["Extra Load (XL)", "98", "750 kg"],
            ["High Load (HL)", "101", "825 kg"]
          ],
          note: `Eksempel i 245/40 R19. Kilde: <a href="${TP}" rel="noopener">Tyrepress om Continentals HL-dæk</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["SL, indeks 94", 670],
            ["XL, indeks 98", 750],
            ["HL, indeks 101", 825]
          ],
          note: `Bæreevne pr. dæk i 245/40 R19. Kilde: <a href="${TP}" rel="noopener">Tyrepress om Continentals HL-dæk</a>, set den 7. oktober 2026.`
        },
        efter: [
          `HL er en kategori for personbildæk. På varebiler, der kører på C-dæk, er det C-dækkets belastningsindeks, der skal passe til akseltrykket. Se <a href="/til-varebilen/vinterhjul/c-daek/">C-dæk til varebil</a>.`
        ]
      },
      {
        overskrift: "Belastningskategorierne side om side",
        tekst: [
          `Mærkningen på sidevæggen viser, hvilken kategori dækket hører til. XL betyder Extra Load, og REINF eller RF betyder reinforced. Michelin skriver, at XL- og REINF-dæk er beregnet til tunge personbiler og ikke til erhvervskøretøjer, fordi C-dæk allerede har en forstærket karkasse.`,
          `Små varebiler på størrelse med en personbil, fx Citroën Berlingo eller Renault Kangoo, kører ikke nødvendigvis på C-dæk. Michelin skriver, at de nogle gange har XL- eller REINF-dæk, og at det er belastningsindekset fra instruktionsbogen, der skal overholdes, når C-dæk ikke er nævnt.`
        ],
        tabel: {
          kolonner: ["Mærkning", "Bruges på", "Kendetegn"],
          raekker: [
            ["SL", "Personbiler", "Standardbelastning"],
            ["XL / REINF", "Tunge personbiler", "Højere belastning, tåler højere tryk"],
            ["HL", "Tunge el- og hybridpersonbiler", "Højere belastning end XL ved samme tryk"],
            ["C", "Varebiler og lette erhvervskøretøjer", "Højere belastningsindeks, ofte to tal for enkelt- og tvillingmontering"]
          ],
          note: `Kilder: <a href="${MICHC}" rel="noopener">Michelin</a> og <a href="${TP}" rel="noopener">Tyrepress/Continental</a>, set den 4. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "C-dæk på elvarebilen",
        tekst: [
          `C-dæk er beregnet til varebiler og lette erhvervskøretøjer. Karkassen, som er dækkets indre opbygning, er forstærket, og belastningsindekset er højere end på et almindeligt personbildæk. Michelin skriver, at forstærkede dæk også tåler kantsten og huller i vejen bedre.`,
          `I EU's dækmærkning hedder varebildæk C2-dæk, og personbildæk hedder C1-dæk. Klassen står på produktdatabladet i EU's database over dæk.`,
          `Piktogrammet for isgreb findes kun på C1-dæk. Et varebildæk kan derfor have snefnugget for krævende sneforhold, men ikke ismærket. Mere om mærkningen på siden om <a href="/til-varebilen/vinterhjul/c-daek/">C-dæk til varebil</a>.`
        ]
      },
      {
        overskrift: "Rullemodstand og rækkevidde",
        tekst: [
          `Når et dæk ruller, bliver det trykket lidt sammen, hvor det rører vejen. En del af kraften bliver til varme, og det er rullemodstanden. Continental skriver, at bilen bruger mindre strøm på at holde farten med dæk, der har lav rullemodstand, og at det kan påvirke en elbils rækkevidde.`,
          `EU-dækmærkets brændstofklasse viser rullemodstanden på en skala fra A til E. Thansens varebildæk i 215/65 R16C spænder fra klasse B (Continental VanContact 4Season) til klasse E (Continental VanContact Winter).`,
          `Continental skriver også, at det faktiske forbrug afhænger af vej, vejr, dæktryk og kørestil. Klassen er derfor et mål til at sammenligne dæk, ikke et løfte om en bestemt rækkevidde.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 165" role="img" aria-label="Brændstofklasse A til E på EU-dækmærket med Continental VanContact 4Season i klasse B og VanContact Winter i klasse E"><text class="tg-lille" x="0" y="16">BRÆNDSTOFKLASSE PÅ EU-DÆKMÆRKET</text><text x="0" y="40">Thansens varebildæk i 215/65 R16C</text><rect class="tg-kasse" x="20" y="56" width="64" height="36"/><text x="48" y="78">A</text><rect class="tg-modul" x="96" y="56" width="64" height="36"/><text class="tg-modul__tekst" x="124" y="78">B</text><rect class="tg-kasse" x="172" y="56" width="64" height="36"/><text x="200" y="78">C</text><rect class="tg-kasse" x="248" y="56" width="64" height="36"/><text x="276" y="78">D</text><rect class="tg-modul" x="324" y="56" width="64" height="36"/><text class="tg-modul__tekst" x="352" y="78">E</text><g class="tg-call"><line x1="128" y1="92" x2="128" y2="118"/><circle cx="128" cy="92" r="3"/><text class="tg-call__navn" x="96" y="132">VanContact 4Season</text><text class="tg-call__under" x="96" y="146">helårsdæk</text></g><g class="tg-call"><line x1="356" y1="92" x2="356" y2="118"/><circle cx="356" cy="92" r="3"/><text class="tg-call__navn" x="280" y="132">VanContact Winter</text><text class="tg-call__under" x="280" y="146">vinterdæk</text></g></svg>`,
          tekst: `Skematisk. Tegningen viser, hvor Thansens varebildæk i 215/65 R16C ligger på skalaen for brændstofklasse. Kilde: Thansen (<a href="${TH4}" rel="noopener">VanContact 4Season</a> og <a href="${THW}" rel="noopener">VanContact Winter</a>), set den 4. oktober 2026.`
        },
        efter: [
          `For lavt dæktryk øger rullemodstanden, skriver Continental. Kilde: <a href="${CEU}" rel="noopener">Continental: EU-dækmærket</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Støj",
        tekst: [
          `En elbil støjer mindre, så støjen fra dæk mod vej fylder mere i kabinen, skriver Michelin.`,
          `EU-dækmærket viser den eksterne støj, altså den støj, dækket sender ud til omgivelserne. Den står i dB og i en klasse fra A til C. Varebildæk i 215/65 R16C hos Thansen ligger på 72–73 dB. Mærket måler altså ikke lyden inde i kabinen.`,
          `Dæk til varebiler skal også være støjgodkendt efter FN-regulativ 117-04. Godkendelsen kan ses på dækket, hvor et s eller S står lige efter godkendelsesnummeret, fx E1 013456 S. Pigdæk er undtaget fra kravet. Dæk, der er godkendt efter de tidligere udgaver 117-02 og 117-03 og fremstillet senest den 6. juli 2026, må monteres indtil den 6. januar 2029.`
        ]
      },
      {
        overskrift: "EU-dækmærket på et varebildæk",
        tekst: [
          `Nye dæk sælges med EU-dækmærket. Det nuværende mærke trådte i kraft den 1. maj 2021 og viser tre egenskaber, nemlig rullemodstand, vådgreb og ekstern rullestøj. Vådgrebet viser, hvor godt dækket bremser på våd vej, på en skala fra A til E.`,
          `Tegningen viser oplysningerne for Continental VanContact Ultra i 225/55 R17 C, som de står i EU's produktdatabase. Dækket er et C2-dæk med brændstofklasse B, vådgrebsklasse A og 71 dB i støjklasse B. Det er beregnet til 210 km/t og har belastningsindeks 109/107.`,
          `Dækket har ikke snefnugget for krævende sneforhold. Produktdatabladet viser også, at produktionen af dækket begyndte i uge 41 i 2021.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Skematisk EU-dækmærke for Continental VanContact Ultra 225/55 R17 C med brændstofklasse B, vådgrebsklasse A og 71 dB i støjklasse B."><rect class="tg-rum" x="16" y="8" width="368" height="220"/><text class="tg-lille" x="32" y="30">EU-DÆKMÆRKET, C2-DÆK</text><text class="tg-fremhaev" x="32" y="50">VanContact Ultra 225/55 R17 C</text><rect class="tg-kasse" x="32" y="64" width="104" height="104"/><text class="tg-lille" x="84" y="84" text-anchor="middle">BRÆNDSTOF</text><rect class="tg-modul" x="62" y="94" width="44" height="44"/><text class="tg-modul__tekst" x="84" y="121" text-anchor="middle">B</text><text x="84" y="158" text-anchor="middle">rullemodstand</text><rect class="tg-kasse" x="148" y="64" width="104" height="104"/><text class="tg-lille" x="200" y="84" text-anchor="middle">VÅDGREB</text><rect class="tg-modul" x="178" y="94" width="44" height="44"/><text class="tg-modul__tekst" x="200" y="121" text-anchor="middle">A</text><text x="200" y="158" text-anchor="middle">bremsning</text><rect class="tg-kasse" x="264" y="64" width="104" height="104"/><text class="tg-lille" x="316" y="84" text-anchor="middle">STØJ</text><rect class="tg-modul" x="284" y="94" width="64" height="44"/><text class="tg-modul__tekst" x="316" y="121" text-anchor="middle">71 dB</text><text x="316" y="158" text-anchor="middle">klasse B</text><text x="32" y="192">Belastning 109/107, hastighed H</text><text x="32" y="212">Intet snefnug for krævende sne</text></svg>`,
          tekst: `Skematisk. Oplysningerne fra produktdatabladet for Continental VanContact Ultra 225/55 R17 C. Kilde: <a href="${EPREL}" rel="noopener">EU's produktdatabase EPREL, produktdatablad 671837</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${CEU}" rel="noopener">Continental: EU-dækmærket</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Det står på dækket og på dækmærket",
        tekst: [
          `Brændstofklassen på dækmærket viser rullemodstanden, som påvirker rækkevidden. Den står kun på mærket, ikke på dækket. M+S står derimod kun på dækket, mens det alpine symbol for krævende sneforhold står begge steder.`,
          `Når du sammenligner tilbud på dæk til en elvarebil, viser dækmærket rullemodstand, vådgreb og støj. Sidevæggen viser dimension, belastning, hastighed og M+S.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Oplysning", "På dækket", "På EU-dækmærket"],
          raekker: [
            ["Dimension", "ja", "ja"],
            ["M+S", "ja", "nej"],
            ["3PMSF", "ja", "ja"],
            ["Brændstofklasse A–E", "nej", "ja"],
            ["Vådgreb A–E", "nej", "ja"],
            ["Støj i dB", "nej", "ja"],
            ["QR-kode", "nej", "ja"]
          ],
          note: `Kilder: <a href="${FSDAEK}" rel="noopener">Færdselsstyrelsen</a> og <a href="${EU}" rel="noopener">forordning (EU) 2020/740</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dæktryk og TPMS",
        tekst: [
          `Trykket skal følge bilfabrikantens anvisning. Continental skriver, at instruktionsbogen kan have ét tryk til normal brug og ét til fuld belastning, og at det anbefalede tryk er det mindste tryk i kolde dæk.`,
          `For lavt tryk øger rullemodstanden og sliddet, og for højt tryk giver uens slid, skriver Continental. Ca. 40 procent af alle dæksvigt skyldes for lavt dæktryk, oplyser Continental.`,
          `Varebiler registreret første gang fra 1. januar 2026 skal have dæktrykovervågning. Mere i <a href="/til-varebilen/vinterhjul/daektryk-og-moensterdybde/">dæktryk og mønsterdybde</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Kolde dæk", "Mål trykket, før bilen har kørt langt, og før solen har varmet dækkene op."],
            ["Find trykket", "Instruktionsbogen viser trykket for og bag, og ofte et særligt tryk til fuld last."],
            ["Mål og justér", "Sæt måleren på ventilen, og justér trykket, så det passer til lasten."],
            ["Gentag", "Continental anbefaler at tjekke trykket 1–2 gange om måneden og før bilen skal bære mere."]
          ]
        },
        efter: [
          `Kilder: <a href="${CTRYK}" rel="noopener">Continental: Dæktryk</a> og <a href="${CTPMS}" rel="noopener">Continental: TPMS</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ujævnt slid og hjulophæng",
        tekst: [
          `Ujævnt slid kan skyldes problemer med hjulindstillingen eller ophænget, skriver Continental. Dinitrol skriver, at batteriets vægt giver større belastning af undervogn og hjulophæng.`,
          `Batteriet gør det sværere at komme til andre dele under bilen, og Volkswagen bruger specialværktøj til elbilerne. Et dækskift kræver ikke en højvoltstekniker. Hos Volkswagen kan det udføres af en medarbejder, der har gennemført træningen i at arbejde med elbiler.`,
          `Du kan læse om undervognsbehandling omkring batteriet i <a href="/til-varebilen/service/service-paa-elvarebil/">service på elvarebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${VW}" rel="noopener">Volkswagen, service på elbil</a> og <a href="${CEU}" rel="noopener">Continental: EU-dækmærket</a>, set den 7. oktober 2026, og <a href="${DIN}" rel="noopener">Dinitrol</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal dækleverandøren vide",
    spoergsmaal_manchet: "Så passer dækkene til en tungere bil.",
    spoergsmaal: [
      "At bilen er en elvarebil, og hvilken model og årgang.",
      "Tilladt akseltryk for og bag fra registreringsattesten.",
      "Den originale dimension, belastningsindeks og hastighedsindeks.",
      "Om bilen har en hastighedsbegrænser.",
      "Kilometer om året og kørselsmønster, fx bykørsel eller motorvej.",
      "Om støj eller rullemodstand skal vægtes.",
      "Om bilen har sensorer til dæktrykovervågning i hjulene."
    ],
    faq: [
      ["Slider en elvarebil dækkene hurtigere?", "Michelin oplyser, at elbiler i gennemsnit slider et dæk 20 procent hurtigere end en sammenlignelig bil med forbrændingsmotor, på grund af vægt, moment og regenerativ bremsning."],
      ["Skal en elvarebil have specielle dæk?", "Ikke ifølge Michelin, så længe belastningsgrænserne overholdes. Bæreevnen skal mindst svare til det tilladte akseltryk."],
      ["Hvad er HL-dæk?", "En belastningskategori for personbildæk til tunge el- og hybridbiler, som Continental lancerede i 2021. I 245/40 R19 bærer et HL-dæk 825 kg mod 750 kg for XL."],
      ["Passer HL-dæk på en varebil?", "HL er en kategori for personbildæk. Varebiler på C-dæk skal have et C-dæk med tilstrækkeligt belastningsindeks."],
      ["Er mønsterkravet anderledes for elbiler?", "Nej. Kravet er 1,6 mm for alle biler."],
      ["Står rullemodstanden på dækket?", "Nej. Brændstofklassen, som viser rullemodstanden, står på EU-dækmærket og i EU's produktdatabase, ikke på dækket."],
      ["Hvilket hastighedsindeks skal dækkene have?", "Dækket skal mindst være beregnet til bilens tophastighed. Har bilen en hastighedsbegrænser, gælder den begrænsede hastighed. Vinterdæk må have hastighedsmærket Q for 160 km/t, selvom bilen kan køre hurtigere."],
      ["Hvad betyder C2 på dækmærket?", "C2 er EU's klasse for varebildæk, og C1 er klassen for personbildæk. Piktogrammet for isgreb findes kun på C1-dæk."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, gældende fra 1. september 2026 (afsnit 8.02 Hjul og dæk)", url: SYN, dato: "2026-10-07" },
      { navn: "Michelin: Electric vehicles FAQ (dækslid på elbiler)", url: MICH, dato: "2026-10-04" },
      { navn: "Michelin: Reinforced tyres for utility vehicles (C, XL og REINF)", url: MICHC, dato: "2026-10-07" },
      { navn: "Tyrepress: Continental offering HL tyres for heavy electric vehicles (01.2021)", url: TP, dato: "2026-10-07" },
      { navn: "Continental: Dæktryk", url: CTRYK, dato: "2026-10-07" },
      { navn: "Continental: Dæktryksovervågningssystem (TPMS)", url: CTPMS, dato: "2026-10-07" },
      { navn: "Continental: EU-dækmærket", url: CEU, dato: "2026-10-07" },
      { navn: "Thansen: Continental 215/65-16C 109/107T VanContact 4Season", url: TH4, dato: "2026-10-04" },
      { navn: "Thansen: Continental 215/65-16C 106/104R VanContact Winter", url: THW, dato: "2026-10-04" },
      { navn: "Volkswagen: Service på elbil", url: VW, dato: "2026-10-07" },
      { navn: "Dinitrol: Undervognsbehandling til elbil", url: DIN, dato: "2026-10-04" },
      { navn: "Færdselsstyrelsen: Vejledning om dæk", url: FSDAEK, dato: "2026-10-07" },
      { navn: "EUR-Lex: Forordning (EU) 2020/740 om dækmærkning", url: EU, dato: "2026-10-04" },
      { navn: "Ford: E-Transit Custom og Transit Custom PHEV, tekniske data 2026", url: FORD, dato: "2026-10-07" },
      { navn: "EPREL: Produktdatablad 671837, Continental VanContact Ultra 225/55 R 17 C", url: EPREL, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Synsvejledningen 8.02.002: dæk skal som minimum være beregnet til køretøjets tophastighed; har køretøjet hastighedsbegrænser, anses den begrænsede hastighed som tophastigheden, og en ændring af hastighedsbegrænseren er en konstruktiv ændring af motoren, der skal godkendes og registreres.", SYN],
    ["Synsvejledningen 8.02.002: dæk skal være dimensioneret og udformet, så det svarer til fælgen, og være mærket med dimensionsbetegnelse, fabrikantens navn eller varemærke samt bæreevne- og hastighedsangivelse.", SYN],
    ["Synsvejledningen 8.02.002: den samlede bæreevne for dæk på samme aksel lægges sammen (afrundes til nærmeste hele tal).", SYN],
    ["Synsvejledningen 8.02.003: fælge skal være beregnet til en belastning svarende til det tilladte akseltryk på køretøjet.", SYN],
    ["Synsvejledningen 8.02.020: bil kan være forsynet med terræn- og vinterdæk, der er beregnet til mindst 160 km/t (hastighedsmærkning mindst Q), uanset at bilens tophastighed overstiger 160 km/t.", SYN],
    ["Synsvejledningen 8.02.020: dæk skal være støjgodkendt og mærket efter FN-regulativ 117-04; støjmærket er »s« eller »S« umiddelbart efter godkendelsesnummeret, fx E1 013456 S; pigdæk er undtaget; dæk typegodkendt efter 117-02 og 117-03 og fremstillet senest 6. juli 2026 kan monteres indtil 6. januar 2029.", SYN],
    ["Ford E-Transit Custom: batteri under gulvet, baghjulstræk med elmotor bagtil, 415 Nm; Limited Van L1H1 100 kW: egenvægt 2.187 kg, nyttelast 1.038 kg, tilladt totalvægt 3.225 kg; nyttelasten afhænger af udstyr og konfiguration og står på mærkatet i dørkarmen; TPMS under chassis safety; fælge fra 16\" til 19\".", FORD],
    ["Michelin: samme dimension kan have flere belastningsindeks, fx 235/65 R16 Agilis CrossClimate med 115/113 eller 121/119, og valget skal ske efter bilens last.", MICHC],
    ["Michelin: XL- og REINF-dæk er beregnet til tunge personbiler, ikke erhvervskøretøjer, da C-dæk allerede har forstærket karkasse; små varebiler som Citroën Berlingo og Renault Kangoo skal ikke nødvendigvis have C-dæk, men nogle gange XL eller REINF; nævner instruktionsbogen ikke C-dæk, skal belastningsindekset overholdes.", MICHC],
    ["Michelin: forstærkede dæk er mere modstandsdygtige over for kantsten og huller i vejen.", MICHC],
    ["Continental (via Tyrepress): HL-dækket bærer knap en fjerdedel mere end et standarddæk; vulsten blev forstærket og konturen ændret for at mindske støjen; HL står foran dimensionen, fx 'HL 245/40 R19 101Y XL'.", TP],
    ["Continental: korrekt pleje (dæktryk) kan i gennemsnit forlænge dækkets levetid med 7.500 km; for lavt tryk giver hurtigere slid, for højt tryk uens slid; anbefalet tryk er minimum for kolde dæk.", CTRYK],
    ["Continental: ca. 40 % af alle dæksvigt skyldes for lavt dæktryk; for lavt dæktryk kan øge rullemodstanden og dækslid.", CTPMS],
    ["Continental: EU-dækmærket trådte i kraft 1. maj 2021; viser rullemodstand, vådgreb (A–E) og ekstern rullestøj i dB i klasser A–C; piktogram for isgreb kun på C1-dæk (personbiler); lavere rullemodstand kan for elbiler påvirke forbrug og rækkevidde; faktisk forbrug afhænger af vej, vejr, dæktryk og kørestil.", CEU],
    ["Continental: kør jævnt og undgå unødvendigt kraftige accelerationer og opbremsninger; ujævnt slid kan skyldes problemer med hjulindstilling eller ophæng; for lavt dæktryk øger rullemodstanden.", CEU],
    ["EPREL produktdatablad 671837: Continental VanContact Ultra 225/55 R 17 C, dækklasse C2, belastningstal 109/107, hastighedskategori H (210 km/t), brændstofeffektivitetsklasse B, vådgrebsklasse A, rullestøj 71 dB klasse B, ikke dæk til krævende sneforhold, produktionsstart uge 41/2021.", EPREL],
    ["Volkswagen: den første centimeter af bremsepedalens vandring aktiverer alene regenerering, hvis batteriet har ledig kapacitet; bremserne på en elbil risikerer at ruste, før de slides, og skal efterses ved hvert service.", VW],
    ["Volkswagen: dækskift kan udføres af en medarbejder, der har gennemført træningen om elbiler; kun højvoltsarbejde kræver højspændingstekniker.", VW]
  ]
};
