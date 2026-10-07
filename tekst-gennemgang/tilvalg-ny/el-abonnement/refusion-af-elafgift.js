// Underside /til-varebilen/el-abonnement/refusion-af-elafgift/ (07-10-2026)
var JV = `https://info.skat.dk/data.aspx?oid=2062223`;
var JVM = `https://info.skat.dk/data.aspx?oid=2062289`;
var SKM555 = `https://info.skat.dk/data.aspx?oid=2436135`;
var UDV = `https://skat.dk/erhverv/afgifter-paa-varer-og-ydelser-punktafgifter/nyhedsbrev-afgifter/udvidet-refusionsordning-for-elafgift-ved-opladning-af-elbiler`;
var NED = `https://skat.dk/erhverv/afgifter-paa-varer-og-ydelser-punktafgifter/nyhedsbrev-afgifter/midlertidig-nedsaettelse-af-elafgiften-i-2026-og-2027`;

module.exports = {
  id: "el-abonnement/refusion-af-elafgift",
  side: {
    slug: "refusion-af-elafgift",
    navn: "Refusion af elafgift",
    titel: "Refusion af elafgift på opladning af elbil",
    kort: `Godtgørelse af elafgift på opladning af elbiler: hvem der kan få den, og hvad måling og dokumentation kræver.`,
    beskrivelse: `Refusion af elafgift på opladning af elbiler: hvem der kan få den efter elafgiftslovens § 11 g, og hvad måling og dokumentation kræver frem til 2030.`,
    manchet: `Virksomheder, der driver ladestandere, kan få elafgiften på strømmen til registrerede elbiler tilbage. Ordningen står i elafgiftslovens § 11 g og gælder til og med 2030. Her er betingelserne, målingen og dokumentationen. Satserne står hos Skatteministeriet.`,
    visuel: {
      hero: "el-abonnement",
      hero_el: true,
      kort_fortalt: [
        ["Ordningen gælder", "til 31. december 2030", "fra 1. januar 2026"],
        ["Lovgrundlag", "§ 11 g", "i elafgiftsloven"],
        ["Data ved VE-anlæg gemmes", "5 år", "efter regnskabsårets udløb"],
        ["Statsstøtteregister", "100.000 euro", "eller mere i et kalenderår skal indberettes"]
      ],
      toc: true,
      stribe: { drivmiddel: "el", titel: "Elvarebiler med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Ordningen kort",
        tekst: [
          `Elafgiften er en afgift på strøm, og den står på elregningen. En virksomhed, der driver ladestandere, kan få afgiften tilbage for den strøm, der går til at lade registrerede elbiler. Reglen kaldes særordningen for elbiler og står i elafgiftslovens § 11 g.`,
          `Ordningen gælder registrerede elbiler, også hybridbiler, og dermed også en elvarebil på gule plader. Pengene går til den virksomhed, der driver ladestanderen. Det er ikke nødvendigvis den virksomhed, der ejer bilen.`
        ],
        punkter: [
          `<strong>Lovgrundlag.</strong> Elafgiftslovens § 11 g, indsat ved lov nr. 1776 af 29. december 2025. Reglerne stod før i § 21 i lov nr. 1353 af 21. december 2012.`,
          `<strong>Periode.</strong> 1. januar 2026 til og med 31. december 2030.`,
          `<strong>Hvad.</strong> Elafgift af strøm, som virksomheden forbruger til opladning af batterier i registrerede elbiler, også hybridbiler.`,
          `<strong>Hvor.</strong> I ladestandere, der drives for virksomhedens regning og risiko, og på batteriskiftestationer.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ordningen gælder fra", "1. januar", "2026"],
            ["Og til og med", "31. december", "2030"],
            ["Data ved solceller gemmes", "5", "år"]
          ],
          note: `Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan virker godtgørelsen",
        tekst: [
          `Virksomheden betaler først den fulde elafgift over elregningen. Bagefter opgør den, hvor meget strøm måleren i ladestanderen har registreret, og indberetter beløbet i sin momsangivelse. Skattestyrelsen betaler så afgiften tilbage, bortset fra EU's minimumssats.`,
          `Ordningen har en lempelse, som de almindelige regler ikke har. Normalt kan en virksomhed kun få elafgift godtgjort i samme omfang, som den har fradrag for moms af strøm. Det krav gælder ikke for strøm til opladning af elbiler i særordningen.`,
          `Beløbet pr. kWh står ikke på denne side, fordi satserne ændrer sig. Skatteministeriet har den aktuelle sats på <a href="https://skm.dk/elafgiftsloven" rel="noopener">skm.dk</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Strømmen går fra elnettet gennem en ladestander med måler til virksomheden, som betaler elafgiften. Virksomheden indberetter strømmen i momsangivelsen, og Skattestyrelsen betaler afgiften tilbage ned til EU's minimumssats."><defs><marker id="pil-refusion-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="0" y="24" width="76" height="46"/><text x="38" y="51" text-anchor="middle">Elnet</text><rect class="tg-modul" x="100" y="24" width="96" height="46"/><text class="tg-modul__tekst" x="148" y="44" text-anchor="middle">LADESTANDER</text><text class="tg-modul__tekst" x="148" y="60" text-anchor="middle">MED MÅLER</text><rect class="tg-rum" x="220" y="24" width="80" height="46"/><text x="260" y="51" text-anchor="middle">Virksomhed</text><rect class="tg-kasse" x="324" y="24" width="76" height="46"/><text x="362" y="44" text-anchor="middle">Skatte-</text><text x="362" y="60" text-anchor="middle">styrelsen</text><g class="tg-maal"><line x1="76" y1="47" x2="98" y2="47" marker-end="url(#pil-refusion-1)"/><line x1="196" y1="47" x2="218" y2="47" marker-end="url(#pil-refusion-1)"/><line x1="300" y1="38" x2="322" y2="38" marker-end="url(#pil-refusion-1)"/><line x1="324" y1="58" x2="302" y2="58" marker-end="url(#pil-refusion-1)"/></g><text x="148" y="88" text-anchor="middle">måler strømmen</text><text x="255" y="88" text-anchor="middle">betaler afgiften</text><g class="tg-call"><line x1="311" y1="58" x2="311" y2="132"/><circle cx="311" cy="58" r="3"/><text class="tg-call__navn" x="400" y="146" text-anchor="end">Momsangivelsen</text><text class="tg-call__under" x="400" y="160" text-anchor="end">strømmen indberettes</text></g><text class="tg-fremhaev" x="0" y="128">Det betales tilbage</text><text x="0" y="146">elafgiften af den målte strøm</text><text x="0" y="162">minus EU's minimumssats</text><text class="tg-lille" x="0" y="184">BELØBET PR. KWH STÅR PÅ SKM.DK</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a> og <a href="${UDV}" rel="noopener">Skattestyrelsen: Udvidet refusionsordning</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvem kan få den",
        tekst: [
          `Virksomheder, der driver ladestandere for egen regning og risiko og er involveret i driften. Det ejendomsretlige ejerforhold til ladestanderen er ikke afgørende (SKM2020.12.SR). Det afgørende er, hvem der driver standeren og bærer risikoen, og ikke hvem der ejer den.`,
          `Ifølge lovforarbejderne kan godtgørelsen også gives for ladebokse, som virksomheden driver i kunders private hjem, hvor strømmen kommer fra husstandens almindelige elforsyning, og husstanden betaler elregningen.`,
          `Ordningen gælder erhvervsmæssig opladning. En kommune kunne ikke få godtgørelse for strøm til bilerne i den kommunale hjemmepleje, fordi Skatterådet så hjemmeplejen som en opgave, kommunen løser som offentlig myndighed (SKM2024.373.SR). Afgørelsen er påklaget til Landsskatteretten.`
        ]
      },
      {
        overskrift: "Regning og risiko i praksis",
        tekst: [
          `Skatterådet har svaret på flere sager om ladebokse, som en ladeoperatør driver hos kunder mod et fast abonnement. Svarene viser, hvor grænsen går. Betaler kunden selv for dele af ladeboksens drift eller udskiftning, er kravet ikke opfyldt.`,
          `I SKM2021.379.SR var kravet opfyldt, når operatøren stod for ubegrænset service og reparation. Det var ikke opfyldt, når operatøren kun stod for to aftalte serviceringer om året og ikke bar risikoen for, at ladestanderen gik til ved et hændeligt uheld.`,
          `I SKM2021.354.SR var kravet ikke opfyldt, når kunden selv skulle betale en ny ladestander, hvis den gamle var slidt op. Det var opfyldt, når kunden kun betalte et fast månedligt abonnement. Om operatøren havde risikoen for udsving i elprisen, var uden betydning.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Aftalen mellem operatør og kunde", "Regning og risiko opfyldt"],
          raekker: [
            ["Kunden betaler kun et fast månedligt abonnement", "ja"],
            ["Operatøren står for ubegrænset service og reparation", "ja"],
            ["Operatøren står kun for to serviceringer om året", "nej"],
            ["Kunden betaler selv en ny ladestander efter slid", "nej"],
            ["Operatøren har ikke risikoen for udsving i elprisen", "Uden betydning"]
          ],
          note: `Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a> om SKM2021.379.SR og SKM2021.354.SR, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Egen ladestander på firmaets adresse",
        tekst: [
          `Den enkleste opsætning er en ladestander på virksomhedens egen adresse, som virksomheden selv driver. Strømmen kommer over virksomhedens elregning, og måleren i standeren viser, hvor meget der er gået til bilerne. Virksomheden søger selv godtgørelsen i sin momsangivelse.`,
          `Det gælder også, når andre end virksomhedens egne biler lader. I SKM2022.432.SR kunne en virksomhed få godtgørelse efter særordningen for strøm til gratis opladning af medarbejdernes private elbiler og af kunders, leverandørers og samarbejdspartneres elbiler på adressen.`,
          `Samme virksomhed kunne ikke bruge de almindelige regler om godtgørelse af elafgift, fordi kravet om momsfradrag ikke var opfyldt. Svaret handler også om moms og skat af den gratis opladning. Installationen står i <a href="/til-varebilen/el-abonnement/ladestander-paa-firmaadressen/">ladestander på firmaadressen</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Firmaets adresse med en ladestander, der har sin egen måler. Fra samme ladestander lader firmabilen, en ansats private elbil og en kundes bil."><rect class="tg-rum" x="0" y="70" width="104" height="115"/><text class="tg-fremhaev" x="52" y="96" text-anchor="middle">Firmaets</text><text class="tg-fremhaev" x="52" y="112" text-anchor="middle">adresse</text><rect class="tg-kasse" x="22" y="130" width="40" height="30"/><text x="42" y="149" text-anchor="middle">Tavle</text><line class="tg-skinne" x1="62" y1="145" x2="124" y2="145"/><rect class="tg-kasse" x="124" y="104" width="24" height="81"/><rect class="tg-modul" x="128" y="114" width="16" height="12"/><path class="tg-skinne-tynd" fill="none" d="M148,128 L360,128 M200,128 L200,146 M280,128 L280,146 M360,128 L360,146"/><path class="tg-profil" d="M170,176 L170,150 Q170,146 174,146 L212,146 L226,160 L230,164 L230,176 Z"/><circle class="tg-profil" cx="184" cy="178" r="7"/><circle class="tg-profil" cx="216" cy="178" r="7"/><path class="tg-profil" d="M250,176 L250,150 Q250,146 254,146 L292,146 L306,160 L310,164 L310,176 Z"/><circle class="tg-profil" cx="264" cy="178" r="7"/><circle class="tg-profil" cx="296" cy="178" r="7"/><path class="tg-profil" d="M330,176 L330,150 Q330,146 334,146 L372,146 L386,160 L390,164 L390,176 Z"/><circle class="tg-profil" cx="344" cy="178" r="7"/><circle class="tg-profil" cx="376" cy="178" r="7"/><line class="tg-gulvlinje" x1="0" y1="185" x2="400" y2="185"/><text x="200" y="204" text-anchor="middle">Firmabil</text><text x="280" y="204" text-anchor="middle">Ansats elbil</text><text x="360" y="204" text-anchor="middle">Kundens bil</text><g class="tg-call"><line x1="136" y1="120" x2="136" y2="44"/><circle cx="136" cy="120" r="3"/><text class="tg-call__navn" x="130" y="24">Måler i ladestanderen</text><text class="tg-call__under" x="130" y="38">grundlag for godtgørelsen</text></g><text class="tg-lille" x="400" y="70" text-anchor="end">SKM2022.432.SR</text></svg>`,
          tekst: `Skematisk. Én ladestander på virksomhedens adresse kan lade flere slags biler under særordningen. Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a> om SKM2022.432.SR, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tre opsætninger",
        tekst: [
          `Hvem der får pengene, afhænger af, hvem der driver ladestanderen, og ikke af, hvem der ejer bilen. Står ladeboksen hjemme hos en medarbejder og drives af en ladeoperatør, er det operatøren, der får godtgørelsen. Det samme gælder hos en kunde.`,
          `Kravene til dokumentation stiger, jo længere strømmen er fra virksomhedens egen elregning. Hos en husstand med solceller skal operatøren også bruge husstandens timedata.`
        ],
        tabel: {
          kolonner: ["Opsætning", "Hvem får godtgørelsen", "Krav"],
          raekker: [
            ["Egen ladestander på firmaets adresse", "Virksomheden, der driver standeren", "Måler i ladestanderen"],
            ["Ladeboks hos medarbejder eller kunde, drevet af en ladeoperatør", "Ladeoperatøren", "Måler i boksen og dokumentation for, at husstanden har betalt fuld elafgift"],
            ["Ladeboks hos husstand med solceller", "Ladeoperatøren", "Samtykke, timedata fra DataHub og måling i ladestanderen"]
          ],
          note: `Kilder: <a href="${JV}" rel="noopener">Den juridiske vejledning 2026-2, E.A.4.6.3.2</a> og <a href="${UDV}" rel="noopener">Skattestyrelsen, 18. december 2025</a>, set den 4. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Ladeboks hjemme hos medarbejderen",
        tekst: [
          `Hjemme hos en medarbejder kommer strømmen fra husstandens almindelige elforsyning, og husstanden betaler elregningen. Ladeoperatøren skal derfor kunne dokumentere, at husstanden har betalt fuld elafgift af hele sit forbrug, også strømmen til ladeboksen.`,
          `Har husstanden elvarme og betaler den lavere elvarmesats, kan operatøren stadig få godtgørelse for de perioder, hvor husstanden har betalt fuld elafgift. Det bekræftede Skatterådet i SKM2026.174.SR. Operatøren skal kunne vise husstandens forbrug fra det aftagenummer, der forsyner ladestanderen.`,
          `Operatøren har ingen pligt til at give pengene videre til kunden. Hvordan medarbejderen får strømmen betalt, står i <a href="/til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/">ladestander hjemme hos medarbejderen</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 176" role="img" aria-label="Husstanden betaler elregningen med fuld elafgift. Ladeoperatøren måler strømmen i ladeboksen og får elafgiften tilbage fra Skattestyrelsen. Operatøren kan give pengene videre som rabat, men har ikke pligt til det."><defs><marker id="pil-refusion-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="0" y="14">LADEBOKS HOS EN HUSSTAND</text><rect class="tg-rum" x="0" y="26" width="110" height="50"/><text x="55" y="47" text-anchor="middle">Husstanden</text><text x="55" y="63" text-anchor="middle">betaler afgift</text><rect class="tg-modul" x="145" y="26" width="110" height="50"/><text class="tg-modul__tekst" x="200" y="47" text-anchor="middle">LADEOPERATØR</text><text class="tg-modul__tekst" x="200" y="63" text-anchor="middle">MÅLER I BOKSEN</text><rect class="tg-kasse" x="290" y="26" width="110" height="50"/><text x="345" y="47" text-anchor="middle">Skattestyrelsen</text><text x="345" y="63" text-anchor="middle">godtgør</text><g class="tg-maal"><line x1="110" y1="51" x2="143" y2="51" marker-end="url(#pil-refusion-2)"/><line x1="290" y1="51" x2="257" y2="51" marker-end="url(#pil-refusion-2)"/></g><text x="127" y="94" text-anchor="middle">dokumentation</text><text x="272" y="94" text-anchor="middle">pengene</text><path class="tg-skinne-tynd" fill="none" d="M200,76 L200,128 L55,128 L55,80" marker-end="url(#pil-refusion-2)"/><text x="64" y="148">rabat, hvis pengene gives videre</text><text x="64" y="164">ingen pligt (SKM2025.506.SR)</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a> og <a href="${JVM}" rel="noopener">E.A.4.6.14.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Måling",
        tekst: [
          `Måleren skal være placeret i selve ladestanderen, uanset om standeren står i det offentlige rum, hos en husstand eller andre steder. Det er altså ikke nok med bygningens eller husstandens egen elmåler.`,
          `Kravet gælder også for virksomheder, der lader batterier på batteriskiftestationer.`
        ],
        punkter: [
          `<strong>Måleren sidder i ladestanderen.</strong> Kravet gælder, uanset om standeren står i det offentlige rum, hos husholdninger eller andre steder.`,
          `<strong>Batteriskift.</strong> Kravet om måling gælder også på batteriskiftestationer.`,
          `<strong>Målertekniske krav.</strong> Står i Den juridiske vejledning, afsnit E.A.4.6.14.5.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 192" role="img" aria-label="Tre steder med en måler i ladestanderen: i det offentlige rum, hos en husstand og på en batteriskiftestation."><g class="tg-call"><line x1="65" y1="106" x2="65" y2="40"/><circle cx="65" cy="106" r="3"/><text class="tg-call__navn" x="10" y="20">Måler i ladestanderen</text><text class="tg-call__under" x="10" y="34">kravet gælder alle steder</text></g><line class="tg-gulvlinje" x1="0" y1="160" x2="400" y2="160"/><rect class="tg-kasse" x="53" y="90" width="24" height="70"/><rect class="tg-modul" x="57" y="100" width="16" height="12"/><text x="65" y="180" text-anchor="middle">Offentligt rum</text><polygon class="tg-profil" points="145,95 175,70 205,95"/><rect class="tg-rum" x="150" y="95" width="50" height="65"/><rect class="tg-kasse" x="218" y="90" width="24" height="70"/><rect class="tg-modul" x="222" y="100" width="16" height="12"/><text x="196" y="180" text-anchor="middle">Husstand</text><rect class="tg-rum" x="290" y="90" width="90" height="70"/><rect class="tg-modul" x="327" y="110" width="16" height="12"/><text x="335" y="180" text-anchor="middle">Batteriskift</text></svg>`,
          tekst: `Tegningen er skematisk og viser, at måleren sidder i ladestanderen, uanset hvor standeren står. Kilder: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a> og <a href="${JVM}" rel="noopener">E.A.4.6.14.5</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Krav til måleren i ladestanderen",
        tekst: [
          `Skatterådet tog i SKM2024.303.SR stilling til forskellige typer interne målere hos en ladestandervirksomhed. Skattestyrelsen ændrede derefter praksis med styresignalet SKM2024.555.SKTST.`,
          `Efter praksisændringen er spørgsmålet, om målingerne kan dokumentere, hvor meget afgiftspligtig strøm der er brugt. Skatterådet har brugt den praksis siden. I SKM2025.506.SR skulle en bimåler i ladestanderen opfylde de krav, der står i styresignalet.`
        ],
        tabel: {
          kolonner: ["", "Krav til elmåleren"],
          raekker: [
            ["Før praksisændringen", "Måleren skulle opfylde kravene i BEK 582 af 28. maj 2018 og MI-003 i BEK 774 af 1. juni 2022. MID-godkendelse var ikke en betingelse."],
            ["Efter praksisændringen", "Målingerne skal kunne dokumentere mængden af forbrugt afgiftspligtig elektricitet."]
          ],
          note: `Kilder: <a href="${SKM555}" rel="noopener">SKM2024.555.SKTST</a> og <a href="${JVM}" rel="noopener">Den juridiske vejledning E.A.4.6.14.5</a>, set den 4. oktober 2026. Styresignalet fastsætter frister for genoptagelse.`,
          visning: "skjul"
        },
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før praksisændringen", "Måleren skulle opfylde kravene i BEK 582 af 28. maj 2018 og MI-003 i BEK 774 af 1. juni 2022. MID-godkendelse var ikke en betingelse."],
            ["SKM2024.303.SR", "Skatterådet tog stilling til forskellige typer interne målere hos en ladestandervirksomhed."],
            ["SKM2024.555.SKTST", "Skattestyrelsen ændrede praksis. Nu skal målingerne kunne dokumentere, hvor meget afgiftspligtig strøm der er brugt."],
            ["SKM2025.506.SR", "En bimåler i ladestanderen skulle opfylde kravene i styresignalet."]
          ],
          note: `Kilder: <a href="${SKM555}" rel="noopener">SKM2024.555.SKTST</a> og <a href="${JVM}" rel="noopener">Den juridiske vejledning E.A.4.6.14.5</a>, set den 7. oktober 2026. Styresignalet har frister for, hvornår sager kan genoptages.`
        }
      },
      {
        overskrift: "Dokumentation",
        tekst: [
          `Virksomheden skal fremlægge opgørelserne af målingerne, når Skattestyrelsen beder om det. Kravene afhænger af, hvem der betaler elregningen, og om der er solceller på adressen.`
        ],
        punkter: [
          `Opgørelser af målinger af den forbrugte strøm i ladestanderne, som skal fremlægges på anmodning.`,
          `Fakturaer eller særskilte opgørelser, hvor afgiftens størrelse fremgår (SKM2021.379.SR).`,
          `Når kunden betaler elregningen: dokumentation for, at der er betalt fuld elafgift af husstandens forbrug inkl. ladestanderen.`,
          `Ved VE-anlæg: adressen, ladestanderen er tilknyttet, og målinger fra aftagenummeret med angivelse af aftagenummeret. Oplysningerne gemmes i 5 år efter regnskabsårets udløb.`
        ]
      },
      {
        overskrift: "Solceller fra 2026",
        tekst: [
          `Før 2026 kunne en ladeoperatør ikke få elafgiften tilbage for en kunde med solceller på adressen. Fra 1. januar 2026 kan den, for den strøm husstanden trækker fra nettet og bruger i ladestanderen.`,
          `Tilbagebetalingen opgøres time for time. Måledata fra DataHub og ladestanderen sammenholdes, og den laveste af de to målinger i hver time danner grundlaget.`,
          `Formålet med udvidelsen er at fremskynde udviklingen af grøn transport i Danmark, skriver Den juridiske vejledning. Kunderne kan være både private og virksomheder.`
        ],
        tabel: {
          kolonner: ["Time 10–11 (Skattestyrelsens eksempel)", "kWh"],
          raekker: [
            ["Forbrug i ladestanderen", "5"],
            ["Trukket fra nettet ifølge DataHub", "2"],
            ["Fra solcellerne", "3"],
            ["Grundlag for tilbagebetaling", "2"]
          ],
          note: `Kilde: <a href="${UDV}" rel="noopener">Skattestyrelsen: Udvidet refusionsordning for elafgift ved opladning af elbiler</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Time med solceller: 5 kWh i ladestanderen, 2 kWh fra nettet og 3 kWh fra solcellerne"><defs><marker id="pil-el-abonnement-4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><polygon points="10,95 90,45 170,95" class="tg-profil"/><polygon points="100,51 145,79 139,86 94,58" class="tg-modul"/><rect x="20" y="95" width="140" height="105" class="tg-rum"/><line x1="0" y1="200" x2="400" y2="200" class="tg-gulvlinje"/><text x="2" y="142">Net</text><rect x="30" y="135" width="45" height="30" class="tg-kasse"/><text x="52" y="154" text-anchor="middle">Måler</text><rect x="95" y="135" width="45" height="30" class="tg-kasse"/><text x="117" y="154" text-anchor="middle">Tavle</text><g class="tg-maal"><line x1="0" y1="150" x2="28" y2="150" marker-end="url(#pil-el-abonnement-4)"/><line x1="75" y1="150" x2="93" y2="150" marker-end="url(#pil-el-abonnement-4)"/><line x1="119" y1="86" x2="117" y2="133" marker-end="url(#pil-el-abonnement-4)"/><line x1="140" y1="150" x2="178" y2="150" marker-end="url(#pil-el-abonnement-4)"/></g><text x="124" y="114">sol</text><rect x="180" y="125" width="26" height="75" class="tg-kuffert"/><line x1="206" y1="160" x2="250" y2="165" class="tg-doer"/><rect x="250" y="130" width="140" height="58" rx="8" class="tg-rum"/><circle cx="280" cy="190" r="10" class="tg-kasse"/><circle cx="360" cy="190" r="10" class="tg-kasse"/><text x="230" y="24" class="tg-fremhaev">Time 10–11</text><text x="230" y="42">Ladestander: 5 kWh</text><text x="230" y="58">DataHub (net): 2 kWh</text><text x="230" y="74">Solceller: 3 kWh</text><text x="230" y="94" class="tg-fremhaev">Grundlag: 2 kWh</text><text x="10" y="226" class="tg-lille">Laveste af de to målinger pr. time er grundlaget</text></svg>`,
          tekst: `Skematisk. I Skattestyrelsens eksempel bruger ladestanderen 5 kWh, og 2 kWh kommer fra nettet. Kilde: <a href="${UDV}" rel="noopener">Skattestyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Laveste måling i hver time",
        tekst: [
          `Reglen er den samme i hver time. Har ladestanderen brugt mere strøm, end husstanden har trukket fra nettet, går Skattestyrelsen ud fra, at resten kom fra solcellerne. Så er der kun godtgørelse for den strøm, der kom fra nettet.`,
          `Den juridiske vejledning har to eksempler. Bruger ladestanderen 10 kWh i en time, hvor husstanden trækker 5 kWh fra nettet, er der godtgørelse for 5 kWh. Trækker husstanden 15 kWh fra nettet i samme time, er der godtgørelse for alle 10 kWh.`
        ],
        figur: {
          type: "soejler",
          enhed: "kWh",
          data: [
            ["Time 1, ladestanderen", 10],
            ["Time 1, fra nettet", 5],
            ["Time 1, grundlag", 5, "laveste måling"],
            ["Time 2, ladestanderen", 10],
            ["Time 2, fra nettet", 15],
            ["Time 2, grundlag", 10, "laveste måling"]
          ],
          note: `Eksemplerne i Den juridiske vejledning. Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Samtykke og data fra DataHub",
        tekst: [
          `Ladeoperatøren skal have samtykke fra hver husstand med solceller til at hente data om elforbruget fra det kollektive net via DataHub. Uden samtykket kan operatøren ikke dokumentere, hvor meget strøm der kom fra nettet.`,
          `Operatøren skal også have en it-løsning, der kan dokumentere forbruget i ladestanderen og forbruget fra nettet time for time. Skattestyrelsen kræver, at måledata bliver oplyst, så de tydeligt kan afstemmes med data fra DataHub.`
        ]
      },
      {
        overskrift: "Sådan søges pengene tilbage",
        tekst: [
          `Beløbet indberettes i virksomhedens momsangivelse. Ved VE-anlæg skal måledata oplyses, så Skattestyrelsen kan afstemme dem med data fra DataHub.`,
          `Skattestyrelsen skriver, at mange virksomheder regner godtgørelsen ud i et internt regneark. Regnearket skal have den sats, der gælder i perioden, og satsen blev ændret den 1. januar 2026.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Mål strømmen", "Måleren i ladestanderen opgør den strøm, bilerne har ladet."],
            ["Indberet", "Virksomheden indberetter beløbet i sin momsangivelse."],
            ["Ved VE-anlæg", "Måledata oplyses, så Skattestyrelsen kan afstemme dem med data fra DataHub."],
            ["Gem oplysningerne", "Ved VE-anlæg gemmes oplysningerne i 5 år efter regnskabsårets udløb."]
          ]
        }
      },
      {
        overskrift: "Elafgiften i 2026 og 2027",
        tekst: [
          `Elafgiften er sat midlertidigt ned fra 1. januar 2026 til 31. december 2027 ved lov nr. 1775 af 29. december 2025, ifølge Skattestyrelsen og Den juridiske vejledning. Godtgørelsen er forskellen mellem elafgiften og EU's minimumssats, så beløbet pr. kWh er mindre i de to år. Den aktuelle sats står på <a href="https://skm.dk/elafgiftsloven" rel="noopener">skm.dk</a>.`,
          `Skattestyrelsen skriver, at beløbet på momsangivelsen derfor bliver betydeligt lavere, end virksomhederne er vant til. Nedsættelsen gælder til og med den 31. december 2027.`
        ]
      },
      {
        overskrift: "Efter 2030",
        tekst: [
          `Fra 1. januar 2031 opkræves som udgangspunkt fuld elafgift på opladning af elbiler, både erhvervsmæssigt og privat, uden mulighed for tilbagebetaling, ifølge Den juridiske vejledning.`,
          `Fuld elafgift på opladning blev første gang vedtaget med lov nr. 687 af 8. juni 2017 med virkning fra 2020. Tidspunktet er siden udskudt to gange, senest med lov nr. 203 af 13. februar 2021.`
        ]
      },
      {
        overskrift: "Statsstøtte",
        tekst: [
          `Ordningen er omfattet af reglerne om statsstøtte. Virksomheder skal indberette til EU's statsstøtteregister, hvis støtten i ordningen er 100.000 euro eller mere i et kalenderår.`,
          `Støttemodtageren er den virksomhed, der får afgiften tilbage. Støtten er forskellen mellem den almindelige elafgift og EU's minimumssats for den strøm, virksomheden har brugt. Virksomheder, der skal indberette, sender beløb og oplysninger til Skatteforvaltningen.`,
          `Ordningen følger EU's gruppefritagelsesforordning, og betingelserne skal være opfyldt hele tiden. Kriseramte virksomheder må fx ikke bruge støtteordningen. Reglerne står i bekendtgørelse nr. 578 af 28. maj 2024.`
        ]
      },
      {
        overskrift: "Ladeoperatøren og kunden",
        tekst: [
          `Skatterådets svar i SKM2025.506.SR handler om en operatør, der både driver ladebokse og leverer strøm til private elbilkunder. Svaret gælder også, når strømmen leveres af et selskab, der er fællesregistreret for moms med operatøren.`
        ],
        punkter: [
          `<strong>Ingen pligt til at give refusionen videre.</strong> En ladestanderoperatør, der har fået elafgiften tilbage, er ikke forpligtet til at give den videre til elbilkunderne (SKM2025.506.SR).`,
          `<strong>Rabat.</strong> Gives refusionen videre, kan den anses som rabat på operatørens levering af drift, vedligehold og elektricitet efter momslovens § 27, stk. 4.`,
          `<strong>Moms.</strong> Operatøren har ikke momsfradrag for afgiften af den el, kunden har betalt, efter momslovens § 37, stk. 1.`
        ],
        efter: [
          `Kilde: <a href="${JVM}" rel="noopener">Den juridiske vejledning E.A.4.6.14.5</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Ordningens historik",
        tekst: [
          `Særordningen har været midlertidig fra begyndelsen og er forlænget flere gange. Hver gang er tidspunktet for fuld elafgift på opladning rykket tilsvarende.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["2010", "Skatterådets afgørelse 27. april 2010 om godtgørelse af elafgift ved opladning af elbiler (SKM2011.259.SKAT)."],
            ["2012", "Særordningen i § 21 i lov nr. 1353 af 21. december 2012."],
            ["2017", "Lov nr. 687 af 8. juni 2017 indfører fuld elafgift på opladning fra 2020."],
            ["2019", "Lov nr. 1585 af 27. december 2019 forlænger ordningen og udskyder den fulde afgift til 2022."],
            ["2021", "Lov nr. 203 af 13. februar 2021 forlænger ordningen til 31. december 2030."],
            ["2026", "Reglerne flyttes til elafgiftslovens § 11 g og udvides til kunder med VE-anlæg, fx solceller."],
            ["2031", "Opladning får fuld elafgift, og som udgangspunkt er der ingen tilbagebetaling."]
          ],
          note: `Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal ladeoperatøren vide",
    spoergsmaal_manchet: "Så kan måling og dokumentation sættes op til godtgørelsen.",
    spoergsmaal: [
      "Hvem der driver ladestanderne og bærer risikoen.",
      "Om ladestanderne står på firmaets adresse eller hos medarbejdere.",
      "Om ladestanderne også lader medarbejdernes private elbiler eller kunders biler.",
      "Om der er solceller, andre VE-anlæg eller elvarme på adressen.",
      "Hvordan måledata leveres til momsangivelsen.",
      "Hvordan dokumentationen gemmes i 5 år."
    ],
    faq: [
      ["Kan virksomheder få elafgiften tilbage på opladning af elbiler?", "Ja, hvis virksomheden driver ladestanderen for egen regning og risiko, og strømmen måles i standeren. Ordningen gælder til og med 31. december 2030."],
      ["Kan firmaet få elafgiften tilbage på opladning hjemme hos medarbejderen?", "Godtgørelsen går til den virksomhed, der driver ladeboksen. Det er typisk en ladeoperatør, der måler forbruget i boksen og dokumenterer, at husstanden har betalt fuld elafgift."],
      ["Hvad kræver målingen?", "En måler placeret i ladestanderen. Ved solceller på adressen skal der også bruges timedata fra DataHub."],
      ["Hvor indberettes refusionen?", "I virksomhedens momsangivelse."],
      ["Hvor meget får man tilbage?", "Elafgiften godtgøres ned til EU's minimumssats. Elafgiften er midlertidigt nedsat i 2026 og 2027, så beløbet er mindre i de år. Satserne står på skm.dk."],
      ["Skal måleren i ladestanderen være MID-godkendt?", "Nej. Efter styresignalet SKM2024.555.SKTST skal målingerne kunne dokumentere mængden af forbrugt afgiftspligtig elektricitet. Kravene i BEK 582 af 28. maj 2018 og MI-003 gælder ikke længere som betingelse."],
      ["Skal ladeoperatøren give refusionen videre til kunden?", "Nej. Skatterådet bekræftede i SKM2025.506.SR, at operatøren ikke er forpligtet til det. Gives den videre, kan den momsmæssigt anses som rabat."],
      ["Gælder ordningen for gratis opladning af medarbejdernes private elbiler?", "Ja. I SKM2022.432.SR kunne en virksomhed få godtgørelse efter særordningen for strøm til gratis opladning af medarbejdernes private elbiler og af kunders og leverandørers elbiler på sin adresse."],
      ["Kan en kommune få godtgørelsen for strøm til hjemmeplejens biler?", "Nej, ifølge Skatterådets svar i SKM2024.373.SR, fordi hjemmeplejen ikke er erhvervsmæssig opladning. Afgørelsen er påklaget til Landsskatteretten."]
    ],
    kilder: [
      { navn: "Den juridiske vejledning 2026-2: E.A.4.6.3.2 Godtgørelse af afgift af elektricitet", url: JV, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Udvidet refusionsordning for elafgift ved opladning af elbiler (18.12.2025)", url: UDV, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Midlertidig nedsættelse af elafgiften i 2026 og 2027", url: NED, dato: "2026-10-07" },
      { navn: "Clever: Forstå Clevers tilbagebetaling", url: "https://clever.dk/erhverv/viden/forstaa-clevers-tilbagebetaling/", dato: "2026-10-04" },
      { navn: "Den juridiske vejledning: E.A.4.6.14.5 Elforbrugsmålere", url: JVM, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Styresignal SKM2024.555.SKTST om krav til elmålere", url: SKM555, dato: "2026-10-04" },
      { navn: "Skatteministeriet: Elafgiftsloven, satser", url: "https://skm.dk/elafgiftsloven", dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Særordningen omfatter batterier til elbiler, herunder også hybridbiler (E.A.4.6.3.2).", JV],
    ["§ 11 g: tilbagebetalingen ydes uanset betingelsen i § 11, stk. 5, så elbilvirksomheden skal ikke opfylde kravet om, at godtgørelsen følger virksomhedens momsfradragsret for elektricitet.", JV],
    ["Elafgiften godtgøres bortset fra EU's minimumssats; beløbet indberettes i momsangivelsen.", UDV],
    ["SKM2024.373.SR: en kommune kunne ikke få elafgiftsgodtgørelse efter særordningen for opladning af elbiler i den kommunale hjemmepleje, fordi aktiviteten blev anset for ikke-erhvervsmæssig og udøvet som offentlig myndighed; afgørelsen er påklaget til Landsskatteretten.", JV],
    ["SKM2021.379.SR (abonnementsordninger på privat grund): regning og risiko var opfyldt, når operatøren stod for ubegrænset service/reparation, men ikke når operatøren kun stod for to aftalte årlige serviceringer og ikke bar risikoen for bl.a. ladestanderens hændelige undergang.", JV],
    ["SKM2021.354.SR: regning og risiko var ikke opfyldt, når kunden ud over abonnementet skulle betale en ny ladestander efter almindelig ælde og slitage; den var opfyldt, når kunden kun betalte et fast månedligt abonnement; risikoen for udsving i elprisen var uden betydning.", JV],
    ["SKM2022.432.SR: en virksomhed kunne ikke få godtgørelse efter de almindelige regler, fordi kravet om momsfradragsret ikke var opfyldt, men kunne få godtgørelse efter særordningen for strøm til gratis opladning af medarbejdernes private elbiler og kunders, leverandørers og samarbejdspartneres elbiler på virksomhedens adresse. Svaret omhandler også moms og skat.", JV],
    ["SKM2026.174.SR: en ladestanderoperatør kan få tilbagebetaling efter § 11 g for opladning hos private husstande på elvarmesatsen for en periode, hvor der er betalt fuld elafgift, når operatøren kan fremlægge målinger af kundens fuldt afgiftspligtige forbrug fra det aftagenummer, der forsyner ladestanderen.", JV],
    ["SKM2025.506.SR: en bimåler i ladestanderen skulle opfylde kravene til målere i styresignalet SKM2024.555.SKTST.", JVM],
    ["SKM2025.506.SR: rabatvurderingen gælder også, når elektriciteten leveres af et selskab, der er fællesregistreret med operatøren.", JV],
    ["Ved solceller: forbruger ladestanderen 10 kWh i en time og der trækkes 5 kWh fra nettet, godtgøres 5 kWh; trækkes 15 kWh fra nettet, godtgøres 10 kWh. Bruger ladestanderen mere end trukket fra nettet, lægges det til grund, at der er brugt strøm fra VE-anlægget.", JV],
    ["Formålet med udvidelsen er at fremskynde udviklingen af grøn transport i Danmark; kunderne kan være både fysiske og juridiske personer.", JV],
    ["Ladeoperatøren skal have samtykke fra hver husstand med VE-anlæg til at hente data om elforbruget fra det kollektive net via DataHub, og skal kunne dokumentere forbruget i ladestanderen og fra nettet time for time (krav til dokumentation og it-løsning).", UDV],
    ["Skattestyrelsen skriver, at godtgørelsesbeløbet på momsangivelsen i 2026-2027 vil være betydeligt lavere, end virksomhederne er vant til, og at mange virksomheder har interne regneark, der skal opdateres med den korrekte sats.", NED],
    ["Fuld elafgift på opladning blev indført ved lov nr. 687 af 8. juni 2017 med virkning fra 1. januar 2020; udskudt ved lov nr. 1585 af 27. december 2019 til 1. januar 2022 og ved lov nr. 203 af 13. februar 2021 til efter 31. december 2030.", JV],
    ["Støttemodtageren er den virksomhed, der benytter tilbagebetalingen; støtten opgøres som forskellen mellem den almindelige elafgift og minimumsafgiften; virksomheder omfattet af indberetningskravet indberetter til Skatteforvaltningen; ordningen er omfattet af gruppefritagelsesforordningen, og kriseramte virksomheder må ikke benytte den; reglerne står i BEK nr. 578 af 28. maj 2024.", JV]
  ]
};
