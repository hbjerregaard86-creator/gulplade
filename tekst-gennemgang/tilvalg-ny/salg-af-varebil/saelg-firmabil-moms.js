// Underside /til-varebilen/salg-af-varebil/saelg-firmabil-moms/ (07-10-2026)
var JV_LOV = `https://tax.dk/jv/da/D_A_5_24_1.htm`;
var JV_SALG = `https://tax.dk/jv/da/D_A_5_24_2.htm`;
var JV_SMAA = `https://tax.dk/jv/da/D_A_11_6_3_2.htm`;
var JV_STORE = `https://tax.dk/jv/da/D_A_11_6_4_2.htm`;
var JV_BRUGT = `https://info.skat.dk/data.aspx?oid=1921231`;
var JV_OVERDRAG = `https://info.skat.dk/data.aspx?oid=1946944`;
var SKAT_BIL = `https://skat.dk/erhverv/moms/fradrag-for-moms/udgifter-du-kan-faa-momsfradrag-for/fradrag-for-moms-af-biludgifter`;
var SKAT_EU = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/moms-ved-handel-med-virksomheder/moms-ved-handel-med-lande-i-eu/moms-ved-salg-af-varer-og-ydelser-i-eu`;
var SKAT_DOK = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/moms-ved-handel-med-virksomheder/moms-ved-handel-med-lande-i-eu/dokumentationskrav-ved-handel-med-lande-i-eu`;
var SKAT_UEU = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/moms-ved-handel-med-virksomheder/moms-ved-handel-med-lande-uden-for-eu/moms-ved-salg-af-varer-og-ydelser-i-lande-uden-for-eu`;
var SKAT_INDB = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/indberet-din-handel-med-udlandet`;
var KV_FAQ = `https://www.klaravik.dk/faq/`;
var KV_KOB = `https://www.klaravik.dk/kobsvilkar.html`;
var RETRADE = `https://retrade.eu/da/terms`;
var AUKH = `https://www.auktionshuset.dk/faq`;

module.exports = {
  id: "salg-af-varebil/saelg-firmabil-moms",
  side: {
    slug: "saelg-firmabil-moms",
    navn: "Moms ved salg af varebil",
    titel: "Moms ved salg af varebil fra firmaet",
    kort: `Hvornår der skal moms på salgsprisen, og hvornår salget er momsfrit efter momslovens § 13, stk. 2.`,
    beskrivelse: `Skal der moms på, når firmaet sælger varebilen? Fradraget ved købet afgør det. Se reglerne under og over 3 tons og ved salg i EU og på auktion.`,
    manchet: `Momsen ved salg af en varebil afgøres af, hvad der skete ved købet. Fik virksomheden fradrag for momsen, skal der moms på salgsprisen, og var anskaffelsen undtaget fra fradrag, er salget momsfrit. Reglerne om fradrag ved køb står i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Købt med fradrag", "Med moms", "der lægges moms på salgsprisen"],
        ["Anskaffelse undtaget fra fradrag", "Momsfrit", "efter momslovens § 13, stk. 2"],
        ["Lille varebil", "Til og med 3 tons", "fradrag kræver udelukkende erhvervsmæssig brug"],
        ["EU-salg uden moms", "Senest den 25.", "i hver måned"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det korte svar",
        tekst: [
          `Når virksomheden sælger sin varebil, skal du først finde købsfakturaen frem. Det er fradraget dengang, der afgør, om der skal lægges moms på salgsprisen nu. Bilens alder, prisen og køberen ændrer ikke på det.`,
          `For de fleste håndværkere er svaret enkelt. En varebil, der kun er brugt i firmaet og købt med fradrag, sælges med moms. En bil, der også er brugt privat, gav ikke fradrag ved købet og sælges momsfrit.`
        ],
        punkter: [
          `<strong>Købt med fradrag.</strong> Salget er momspligtigt, og der lægges moms på salgsprisen.`,
          `<strong>Købt uden fradrag, fordi anskaffelsen var undtaget.</strong> Salget er momsfrit efter momslovens § 13, stk. 2.`,
          `<strong>Købt uden moms på fakturaen</strong>, fx fra en privatperson. Fritagelsen gælder ikke, hvis virksomheden havde fradragsret.`,
          `<strong>Varebiler til og med 3 tons.</strong> Fradrag for anskaffelsen kræver, at bilen udelukkende bruges til virksomhedens fradragsberettigede aktiviteter.`
        ]
      },
      {
        overskrift: "Momslovens § 13, stk. 2",
        tekst: [
          `Bestemmelsen fritager levering af varer, der alene har været brugt i momsfritaget virksomhed, eller hvis anskaffelse eller anvendelse har været undtaget fra retten til fradrag efter momslovens kapitel 9.`,
          `Formålet er at undgå dobbeltbeskatning. Har virksomheden betalt moms ved købet uden at kunne trække den fra, skal der ikke lægges moms på igen ved salget.`,
          `Fritagelsen giver ikke den moms tilbage, som virksomheden betalte ved købet. Den betyder kun, at der ikke kommer ny moms på. Den juridiske vejledning nævner personbiler som eksempel, fordi der ikke er fradrag for købet af en personbil. For varebiler afhænger det af vægten og brugen.`
        ],
        efter: [
          `Kilder: <a href="${JV_LOV}" rel="noopener">Den juridiske vejledning 2026-2, D.A.5.24.1</a> og <a href="${JV_SALG}" rel="noopener">D.A.5.24.2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Varebilen bestemmer fradraget",
        tekst: [
          `For en lille varebil til og med 3 tons kan momsen af anskaffelsen kun trækkes fra, hvis bilen udelukkende bruges til virksomhedens fradragsberettigede aktiviteter. Delvis privat brug udelukker fradrag for anskaffelsen. Momsen af driften kan derimod trækkes fuldt fra, også ved delvis brug, skriver Den juridiske vejledning.`,
          `Reglen står i momslovens § 41, og den kender ikke til delvist fradrag for købet. Det er heller ikke kun privat kørsel, der tæller. Enhver kørsel, der ikke vedrører den momspligtige virksomhed, fx kørsel til en momsfri aktivitet, fjerner fradraget for købet.`,
          `Derfor er det købet, der afgør salget. En bil med fuldt fradrag ved købet sælges med moms, og en bil uden fradrag for anskaffelsen sælges uden.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Fradraget ved købet afgør momsen ved salget: med fradrag sælges bilen med moms, uden fradrag fordi anskaffelsen var undtaget sælges den momsfrit."><rect class="tg-kasse" x="110" y="6" width="180" height="42" rx="3"/><text class="tg-fremhaev" x="200" y="24" text-anchor="middle">Købet af varebilen</text><text x="200" y="40" text-anchor="middle">Fik firmaet fradrag?</text><line class="tg-pil" x1="160" y1="48" x2="95" y2="90"/><line class="tg-pil" x1="240" y1="48" x2="305" y2="90"/><text class="tg-fremhaev" x="118" y="70" text-anchor="end">Ja</text><text class="tg-fremhaev" x="282" y="70">Nej, undtaget</text><rect class="tg-modul" x="10" y="92" width="170" height="54" rx="3"/><text class="tg-modul__tekst" x="95" y="114" text-anchor="middle">SALG MED MOMS</text><text x="95" y="134" text-anchor="middle">moms på salgsprisen</text><rect class="tg-kasse" x="220" y="92" width="170" height="54" rx="3"/><text class="tg-fremhaev" x="305" y="114" text-anchor="middle">Momsfrit salg</text><text x="305" y="134" text-anchor="middle">momslovens § 13, stk. 2</text><text class="tg-lille" x="0" y="174">VAREBIL TIL OG MED 3 TONS</text><text x="0" y="192">Delvis privat brug: intet fradrag ved købet</text></svg>`,
          tekst: `Tegningen er skematisk og viser, at fradraget ved købet afgør, om der skal moms på salget. Kilde: <a href="${JV_SALG}" rel="noopener">Den juridiske vejledning 2026-2, D.A.5.24.2</a> og <a href="${JV_SMAA}" rel="noopener">D.A.11.6.3.2</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Til og med 3 tons eller over",
        tekst: [
          `Grænsen går ved bilens tilladte totalvægt, som står på registreringsattesten. Til og med 3 tons gælder den særlige regel i momslovens § 41. Over 3 tons gælder momslovens almindelige fradragsregler i §§ 37 og 38. Forskellen mellem totalvægt og nyttelast står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`,
          `For en stor varebil over 3 tons kan virksomheden få delvist fradrag for købet, når bilen også bruges privat. Fradraget svarer til den del af brugen, der skønsmæssigt vedrører den momspligtige virksomhed, og Skattestyrelsen nævner en daglig kørebog som dokumentation for skønnet.`,
          `Tidspunktet for købet afgør fradraget. Køber en virksomhed en bil til privat brug og tager den senere i brug i firmaet, giver det ikke adgang til fradrag, skriver Den juridiske vejledning med henvisning til EU-Domstolens dom i Lennartz-sagen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="En skala for tilladt totalvægt med grænsen ved 3.000 kg. Til og med 3 tons gælder momslovens paragraf 41, hvor købet kun giver fradrag, når bilen udelukkende bruges erhvervsmæssigt. Over 3 tons gælder de almindelige regler, hvor købet kan give fuldt eller delvist fradrag, og salget er med moms."><text class="tg-lille" x="20" y="18">TILLADT TOTALVÆGT, SE REGISTRERINGSATTESTEN</text><rect class="tg-modul" x="20" y="30" width="200" height="60"/><text class="tg-modul__tekst" x="120" y="55" text-anchor="middle">TIL OG MED 3 TONS</text><text x="120" y="75" text-anchor="middle">momslovens § 41</text><rect class="tg-kasse" x="220" y="30" width="160" height="60"/><text class="tg-fremhaev" x="300" y="55" text-anchor="middle">Over 3 tons</text><text x="300" y="75" text-anchor="middle">§§ 37 og 38</text><line class="tg-gulvlinje" x1="20" y1="106" x2="380" y2="106"/><line class="tg-skinne" x1="220" y1="24" x2="220" y2="116"/><text class="tg-fremhaev" x="220" y="132" text-anchor="middle">3.000 kg</text><text class="tg-fremhaev" x="20" y="160">Fradrag for købet</text><text x="20" y="178">kun ved udelukkende</text><text x="20" y="194">erhvervsmæssig brug</text><text x="20" y="214">Uden fradrag sælges</text><text x="20" y="230">bilen momsfrit</text><text class="tg-fremhaev" x="236" y="160">Fradrag for købet</text><text x="236" y="178">fuldt eller delvist</text><text x="236" y="194">efter brugen</text><text x="236" y="214">Salget er med moms</text></svg>`,
          tekst: `Skematisk. Grænsen ved 3 tons tilladt totalvægt. Kilder: <a href="${JV_SMAA}" rel="noopener">Den juridiske vejledning, D.A.11.6.3.2</a>, <a href="${JV_STORE}" rel="noopener">D.A.11.6.4.2</a> og <a href="${SKAT_BIL}" rel="noopener">Skattestyrelsen: Fradrag for moms af biludgifter</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Brugen afgør momsen ved salget",
        tekst: [
          `Skattestyrelsen deler reglerne op efter vægt og efter, hvad bilen bruges til. For hver kombination står der, hvilket fradrag virksomheden får ved købet, og om der skal moms på, når bilen sælges.`,
          `For en varebil til og med 3 tons er der kun to udfald. Bruges bilen kun til momspligtige formål, er der fuldt fradrag ved købet og moms af den fulde salgspris. Bruges den også til momsfrie formål eller privat, er der intet fradrag ved købet og ingen moms ved salget.`,
          `Over 3 tons skal der moms på hele salgsprisen i alle tre tilfælde. Skattestyrelsen tilføjer, at der ved blandet brug kan være tilfælde, hvor virksomheden har ret til yderligere momsfradrag, når bilen sælges.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Bilen bruges til", "Til og med 3 tons", "Over 3 tons"],
          raekker: [
            ["Kun momspligtige formål", "Fuldt fradrag ved køb, moms ved salg", "Fuldt fradrag ved køb, moms ved salg"],
            ["Momspligtige og momsfrie formål, aldrig privat", "Intet fradrag ved køb, ingen moms ved salg", "Delvist fradrag efter fradragsprocent, moms ved salg"],
            ["Erhverv og privat", "Intet fradrag ved køb, ingen moms ved salg", "Delvist fradrag efter skøn, moms ved salg"]
          ],
          note: `Moms ved salg betyder moms af den fulde salgspris. Kilde: <a href="${SKAT_BIL}" rel="noopener">Skattestyrelsen: Fradrag for moms af biludgifter</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Privat kørsel og dagsbevis",
        tekst: [
          `En varebil til og med 3 tons, der er købt med fuldt fradrag, mister ikke sin status, fordi den en enkelt dag bruges privat. Betaler virksomheden dagsafgift for den private kørsel, anses bilen stadig for udelukkende brugt i den momspligtige virksomhed. Det står i momslovens § 41, stk. 4.`,
          `Den juridiske vejledning nævner flytning af private ting og kørsel til arrangementer, der ikke vedrører virksomheden, som eksempler. Med dagsbevis bevarer bilen fradraget for købet, og salget bliver derfor med moms. Reglerne for dagsbeviset står i <a href="/haandbogen/dagsbevis-varebil/">dagsbevis til varebil</a>, og satsen står hos Skattestyrelsen.`
        ],
        efter: [
          `Kilde: <a href="${JV_SMAA}" rel="noopener">Den juridiske vejledning 2026-2, D.A.11.6.3.2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Tre situationer",
        tekst: [
          `De fleste salg ligner en af de tre situationer i tabellen. Den tredje kræver en forklaring. En bil købt af en privatperson har ingen moms på fakturaen, men bruges den kun i firmaet, skal der alligevel moms på, når firmaet sælger den.`
        ],
        tabel: {
          kolonner: ["Købt", "Brugt", "Salget"],
          raekker: [
            ["Med moms på fakturaen, fradrag for købsmomsen", "Udelukkende i momspligtig virksomhed", "Momspligtigt"],
            ["Med moms på fakturaen, ingen fradrag for købsmomsen", "Også privat eller til momsfri aktivitet", "Momsfrit, momslovens § 13, stk. 2"],
            ["Uden moms på fakturaen, fx fra en privatperson", "Udelukkende i momspligtig virksomhed", "Momspligtigt, fritagelsen gælder ikke"]
          ],
          note: `Tabellen gælder varebiler til og med 3 tons. Kilde: <a href="${JV_SALG}" rel="noopener">Den juridiske vejledning 2026-2, D.A.5.24.2</a> og <a href="${JV_SMAA}" rel="noopener">D.A.11.6.3.2</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Betingelsen: der skal være betalt moms",
        tekst: [
          `Det er en betingelse for fritagelsen, at virksomheden faktisk er blevet faktureret moms, som den ikke kunne trække fra. Den juridiske vejledning nævner køb fra private som eksempel. Der er ingen moms på fakturaen, og har virksomheden fradragsret for bilen, er salget momspligtigt.`,
          `Det samme gælder, når bilen er købt momsfrit af en anden virksomhed, der solgte den efter § 13, stk. 2. Køberen har ikke betalt moms, og bruger køberen bilen udelukkende i sin momspligtige virksomhed, skal der moms på det næste salg.`,
          `Vejledningen nævner også SKM2021.404.ØLR, hvor en bilforhandlers videresalg af biler, der var taget i bytte fra privatpersoner, ikke var momsfrit.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To veje til samme resultat. En bil købt af en privatperson eller købt momsfrit af en anden virksomhed har ingen moms på fakturaen. Har virksomheden fradragsret for bilen, er der ingen moms at trække fra, og salget er alligevel med moms, fordi fritagelsen ikke gælder."><defs><marker id="pil-saelg-firmabil-moms-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="6" y="16" width="124" height="60"/><text class="tg-fremhaev" x="68" y="38" text-anchor="middle">Privatperson</text><text x="68" y="54" text-anchor="middle">ingen moms på</text><text x="68" y="68" text-anchor="middle">fakturaen</text><rect class="tg-kasse" x="6" y="116" width="124" height="60"/><text class="tg-fremhaev" x="68" y="138" text-anchor="middle">Virksomhed</text><text x="68" y="154" text-anchor="middle">momsfrit salg</text><text x="68" y="168" text-anchor="middle">efter § 13, stk. 2</text><line class="tg-pil" x1="130" y1="50" x2="148" y2="84" marker-end="url(#pil-saelg-firmabil-moms-1)"/><line class="tg-pil" x1="130" y1="142" x2="148" y2="110" marker-end="url(#pil-saelg-firmabil-moms-1)"/><rect class="tg-modul" x="150" y="62" width="112" height="70"/><text class="tg-modul__tekst" x="206" y="86" text-anchor="middle">FRADRAGSRET</text><text x="206" y="104" text-anchor="middle">men ingen moms</text><text x="206" y="120" text-anchor="middle">at trække fra</text><line class="tg-pil" x1="262" y1="97" x2="278" y2="97" marker-end="url(#pil-saelg-firmabil-moms-1)"/><rect class="tg-kasse" x="280" y="62" width="114" height="70"/><text class="tg-fremhaev" x="337" y="86" text-anchor="middle">Salg med moms</text><text x="337" y="104" text-anchor="middle">fritagelsen</text><text x="337" y="120" text-anchor="middle">gælder ikke</text><text class="tg-lille" x="150" y="160">BILEN BRUGES KUN I DEN</text><text class="tg-lille" x="150" y="174">MOMSPLIGTIGE VIRKSOMHED</text></svg>`,
          tekst: `Skematisk. Fritagelsen kræver, at der faktisk er betalt moms ved købet. Kilde: <a href="${JV_SALG}" rel="noopener">Den juridiske vejledning 2026-2, D.A.5.24.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Regnestykket for køberen",
        tekst: [
          `For en momsregistreret køber med fuldt fradrag er det beløbet før moms, der koster noget. Momsen betaler køberen til sælgeren og får den tilbage via sin egen momsangivelse.`,
          `To ens biler kan være annonceret til samme pris, den ene plus moms og den anden momsfrit. For en håndværker med fuldt fradrag koster de det samme, fordi momsen på den første kommer retur.`
        ],
        punkter: [
          `<strong>Salg med moms.</strong> Køberen betaler prisen plus moms og trækker momsen fra. Prisen før moms er den reelle udgift.`,
          `<strong>Momsfrit salg.</strong> Køberen betaler prisen, og der er ingen moms at trække fra.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Salg", "Moms oveni prisen", "Moms at trække fra"],
          raekker: [
            ["Med moms", "ja", "ja"],
            ["Momsfrit", "nej", "nej"]
          ],
          note: "Tabellen gælder for en momsregistreret køber med fuldt momsfradrag. For en køber uden momsfradrag er momsen på et momspligtigt salg en ekstra udgift."
        },
        efter: [
          `For en køber uden momsfradrag er det omvendt. Momsen på et momspligtigt salg er en ekstra udgift, så den momsfri bil er billigere ved samme pris før moms. Køberen kan også selv mangle fradrag, fordi bilen skal bruges privat, og så er momsen en udgift uanset køberens momsregistrering.`
        ]
      },
      {
        overskrift: "Sælges til en forhandler",
        tekst: [
          `Sælger virksomheden en momsfri bil til en bilforhandler, kan forhandleren sælge den videre efter brugtmomsordningen. Ordningen gælder bl.a. varer, som forhandleren har købt af en virksomhed, hvis salg var fritaget efter § 13. Forhandleren betaler så kun moms af sin fortjeneste og ikke af hele salgsprisen.`,
          `Ordningen er frivillig for forhandleren, som senest på fakturaen skal oplyse, om bilen sælges efter brugtmomsreglerne. En bil solgt efter ordningen har ingen moms, som den næste køber kan trække fra. Hvad det betyder for den næste købers fradrag, står i <a href="/haandbogen/momsdoed-varebil/">momsdød varebil</a>.`,
          `Sælges bilen med moms til forhandleren, er det en almindelig handel. Forhandleren trækker momsen fra og lægger moms på hele prisen, når bilen sælges videre.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="To bjælker. Forhandleren køber bilen momsfrit og sælger den videre efter brugtmomsordningen. Ved videresalget beregnes der kun moms af avancen, altså forskellen mellem forhandlerens salgspris og købspris."><text class="tg-fremhaev" x="0" y="18">Forhandlerens køb, momsfrit</text><rect class="tg-kasse" x="0" y="26" width="250" height="30"/><text x="10" y="45">købspris</text><text class="tg-fremhaev" x="0" y="90">Forhandlerens videresalg</text><rect class="tg-kasse" x="0" y="98" width="250" height="30"/><text x="10" y="117">købspris</text><rect class="tg-modul" x="250" y="98" width="100" height="30"/><text class="tg-modul__tekst" x="300" y="117" text-anchor="middle">AVANCE</text><line class="tg-skinne-tynd" x1="250" y1="20" x2="250" y2="136"/><text x="350" y="148" text-anchor="end">moms beregnes kun af avancen</text><text class="tg-lille" x="0" y="184">BRUGTMOMSORDNINGEN ER FRIVILLIG FOR FORHANDLEREN</text></svg>`,
          tekst: `Skematisk og uden tal. Kilde: <a href="${JV_BRUGT}" rel="noopener">Den juridiske vejledning, D.A.18.2 Hvem kan benytte brugtmomsordningen?</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bilen følger med et salg af virksomheden",
        tekst: [
          `Sælges hele virksomheden eller en selvstændig del af den, skal der ikke beregnes moms af varelager, maskiner og andre driftsmidler, der følger med. Det gælder også varebilerne. Reglen står i momslovens § 4, stk. 5, og sælgeren kan ikke selv vælge at lægge moms på.`,
          `Virksomheden skal give Skattestyrelsen besked om den nye ejers navn og adresse og om salgsprisen for aktiverne senest otte dage efter overdragelsen. Den nye ejer skal som udgangspunkt også være momsregistreret for aktiviteten.`,
          `Det er ikke en virksomhedsoverdragelse, når firmaet sælger de fleste af sine driftsmidler til en forhandler, der sælger dem videre til forskellige kunder. Den juridiske vejledning nævner automobilforhandlere som eksempel. Forhandleren driver ikke virksomheden videre, så salget er med moms efter de almindelige regler.`
        ],
        efter: [
          `Kilde: <a href="${JV_OVERDRAG}" rel="noopener">Den juridiske vejledning, D.A.4.1.8 Salg af aktiver som led i en virksomhedsoverdragelse</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Annoncen",
        tekst: [
          `Annonceportalerne har egne kategorier for varebiler med prisen før moms, fordi mange købere er momsregistrerede. Bilhandel viser fx "Varebil ekskl. moms" ved prisen. Står prisen ekskl. moms, lægges momsen oveni ved købet.`,
          `Skriv i annoncen, om bilen sælges med moms eller momsfrit. En momsfri bil kan være mere interessant for en køber uden fradrag, mens en momsregistreret håndværker typisk kigger på prisen før moms. Hvordan prisen findes, står i <a href="/til-varebilen/salg-af-varebil/vurdering-af-brugt-varebil/">vurdering af brugt varebil</a>.`
        ]
      },
      {
        overskrift: "Køber i Danmark, i EU eller uden for EU",
        tekst: [
          `Køberens land afgør, om der skal dansk moms på fakturaen, når salget ellers er momspligtigt. Til en dansk køber lægges der dansk moms på. Til en virksomhed i et andet EU-land og til en køber uden for EU sælges bilen normalt uden dansk moms, men kun med den rette dokumentation.`,
          `Dokumentationen er en betingelse for, at salget kan ske uden dansk moms, skriver Skattestyrelsen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Køber", "Dansk moms på fakturaen", "Sælger skal have"],
          raekker: [
            ["Dansk virksomhed", "Ja, hvis salget er momspligtigt", "Faktura"],
            ["Virksomhed i et andet EU-land", "nej", "Købers momsnummer og transportbevis"],
            ["Køber uden for EU", "nej", "Udførselsangivelse med udpassage-attest"]
          ],
          note: `Kilder: <a href="${SKAT_EU}" rel="noopener">Skattestyrelsen: salg i EU</a> og <a href="${SKAT_UEU}" rel="noopener">salg uden for EU</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Køber er en virksomhed i et andet EU-land",
        tekst: [
          `Sælger en dansk virksomhed varer til en virksomhed i et andet EU-land, skal der normalt ikke opkræves dansk moms. Køberen betaler momsen i sit eget land, og salget indberettes som EU-salg uden moms senest den 25. hver måned.`,
          `Påtegningen kan henvise til momslovens § 34, stk. 1, eller til artikel 138 i momssystemdirektivet. Skattestyrelsen godtager også en anden tydelig påtegning som "momsfritaget", "free of VAT", "0-sats" eller "zero-rated". Gem dokumentationen for, at du har tjekket købers momsnummer.`
        ],
        punkter: [
          `Sælger skaffer købers momsnummer og tjekker det, fx i VIES.`,
          `Fakturaen skal være en fuld faktura med købers momsnummer.`,
          `Fakturaen får en påtegning, fx "momsfritaget efter ML § 34, stk. 1".`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 260" role="img" aria-label="Skitse af faktura ved salg af varebil til virksomhed i et andet EU-land"><rect class="tg-profil" x="20" y="15" width="230" height="232" rx="4"/><text x="34" y="42" class="tg-fremhaev">Faktura</text><text x="34" y="64">Sælger, cvr og momsnr.</text><line class="tg-skinne-tynd" x1="34" y1="70" x2="236" y2="70"/><rect class="tg-modul" x="30" y="78" width="210" height="24" rx="2"/><text x="38" y="94">Købers momsnummer (EU)</text><text x="34" y="122">Varebil, stelnummer</text><line class="tg-skinne-tynd" x1="34" y1="128" x2="236" y2="128"/><text x="34" y="146">Pris</text><line class="tg-skinne-tynd" x1="34" y1="152" x2="236" y2="152"/><rect class="tg-modul" x="30" y="160" width="210" height="24" rx="2"/><text x="38" y="176">momsfritaget, ML § 34, stk. 1</text><line class="tg-skinne-tynd" x1="34" y1="204" x2="236" y2="204"/><line class="tg-skinne-tynd" x1="34" y1="220" x2="180" y2="220"/><g class="tg-call"><line x1="240" y1="90" x2="264" y2="90"/><circle cx="240" cy="90" r="3"/><text x="268" y="86" class="tg-call__navn">Købers momsnr.</text><text x="268" y="100" class="tg-call__under">tjekkes i VIES</text></g><g class="tg-call"><line x1="240" y1="172" x2="264" y2="172"/><circle cx="240" cy="172" r="3"/><text x="268" y="168" class="tg-call__navn">Påtegning</text><text x="268" y="182" class="tg-call__under">fx ML § 34, stk. 1</text></g><g class="tg-call"><line x1="250" y1="225" x2="264" y2="225"/><circle cx="250" cy="225" r="3"/><text x="268" y="221" class="tg-call__navn">EU-salg uden moms</text><text x="268" y="235" class="tg-call__under">indberettes til d. 25.</text></g></svg>`,
          tekst: `Fakturaen ved salg til en momsregistreret virksomhed i et andet EU-land. Skematisk. Kilde: <a href="${SKAT_DOK}" rel="noopener">Skattestyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Indberetning af EU-salget",
        tekst: [
          `Salget til en virksomhed i et andet EU-land skal indberettes to steder i TastSelv Erhverv. Det ene er momsangivelsen, hvor værdien står i rubrik B for varer inden for virksomhedens normale frist. Det andet er systemet EU-salg uden moms, hvor fristen er den 25. i hver måned.`,
          `Beløbet skal være det samme begge steder. Salget indberettes som et samlet beløb pr. kunde for den periode, hvor fakturaen er udstedt, og kundens momsnummer bruges som nøgle. Har virksomheden ikke haft EU-salg i en periode, skal der ikke indberettes nul.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Ved salget", "Sælger tjekker købers momsnummer og udsteder en fuld faktura med påtegning."],
            ["Ved levering", "Bilen køres eller transporteres til køberens land, og sælger samler beviser for transporten."],
            ["Senest den 10. i måneden efter", "Står køberen for transporten, skal sælger have køberens skriftlige erklæring."],
            ["Senest den 25. i måneden", "Salget indberettes i EU-salg uden moms."],
            ["Ved virksomhedens momsfrist", "Samme beløb indberettes i rubrik B for varer på momsangivelsen."]
          ],
          note: `Kilder: <a href="${SKAT_INDB}" rel="noopener">Skattestyrelsen: Indberet din handel med udlandet</a> og <a href="${SKAT_DOK}" rel="noopener">Dokumentationskrav ved handel med lande i EU</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dokumentation for transporten",
        tekst: [
          `Salget er kun uden dansk moms, hvis sælger kan dokumentere, at bilen er kørt eller transporteret til det andet EU-land. Punkterne nedenfor er de harmoniserede EU-krav. Følger sælger dem, formoder myndighederne, at dokumentationen er i orden. Ellers gælder de nationale regler. Kravene afhænger af, hvem der står for transporten.`,
          `Et dokument om transporten kan fx være et underskrevet CMR-fragtbrev eller en faktura fra transportøren. De andre beviser kan være en forsikringspolice for transporten, et bankbilag for betalingen af fragten eller et officielt dokument, der bekræfter, at bilen er nået frem.`,
          `Følger sælger de danske regler i stedet, skal den person, der henter bilen, oplyse sin identitet ved udleveringen, fx med en kopi af kørekortet.`
        ],
        punkter: [
          `<strong>Sælger står for transporten.</strong> Sælger skal have 2 dokumenter om transporten eller ét dokument og ét andet bevis, fx forsikring eller bankbilag for fragten.`,
          `<strong>Køber står for transporten.</strong> Sælger skal have en skriftlig erklæring fra køberen senest den 10. i måneden efter leveringen og de samme 2 beviser.`,
          `<strong>Ved transportmidler</strong> skal erklæringen også have registreringsnummeret på det transportmiddel, der leveres.`,
          `Dokumenterne skal være udstedt af to parter, der er uafhængige af hinanden og af både sælger og køber.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Hvem står for transporten", "2 beviser for transporten", "Skriftlig erklæring fra køberen"],
          raekker: [
            ["Sælger", "ja", "Nævnes ikke"],
            ["Køber", "ja", "Senest den 10. i måneden efter leveringen"]
          ],
          note: `Beviserne kan være 2 dokumenter om transporten eller ét dokument og ét andet bevis, fx forsikring eller bankbilag for fragten. Kilde: <a href="${SKAT_DOK}" rel="noopener">Skattestyrelsen: dokumentationskrav ved handel med lande i EU</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Køberens erklæring skal bl.a. have datoen, destinationslandet, køberens navn og adresse, dato og sted for ankomsten og navnet på den, der modtog bilen. Kilde: <a href="${SKAT_DOK}" rel="noopener">Skattestyrelsen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Køber uden for EU",
        tekst: [
          `Sælges bilen til en køber uden for EU, er salget uden dansk moms, uanset om køberen er en virksomhed eller en privatperson. Til gengæld skal virksomheden kunne dokumentere, at bilen har forladt EU, og salget skal angives som eksport.`,
          `I regnskabet skal salget stå på en særlig konto, og værdien skal med i rubrik C på momsangivelsen. Ud over udførselsangivelsen nævner Skattestyrelsen en skriftlig ordre og korrespondance med køberen som dokumentation.`
        ],
        punkter: [
          `Eksport af varer ud af EU er uden dansk moms, også ved salg til private.`,
          `Virksomheden registreres som eksportør på indberet.virk.dk og får et EORI-nummer.`,
          `Salget angives i DMS Eksport, typisk via en speditør.`,
          `Dokumentationen kan fx være en udførselsangivelse med udpassage-attest.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Eksportør", "Virksomheden registreres som eksportør på indberet.virk.dk og får et EORI-nummer."],
            ["Angivelse", "Salget angives i DMS Eksport, typisk via en speditør."],
            ["Dokumentation", "Udførslen dokumenteres fx med en udførselsangivelse med udpassage-attest."],
            ["Momsangivelsen", "Værdien af salget skrives i rubrik C."]
          ]
        },
        efter: [
          `Kilde: <a href="${SKAT_UEU}" rel="noopener">Skattestyrelsen: Moms ved salg af varer og ydelser i lande uden for EU</a>, set den 7. oktober 2026. Registreringsafgift og eksportgodtgørelse står i <a href="/til-varebilen/salg-af-varebil/eksport-af-varebil/">eksport af varebil</a>.`
        ]
      },
      {
        overskrift: "Moms på auktion",
        tekst: [
          `På en auktion står buddet som regel før moms, og momsen kommer oveni, når salget er momspligtigt. Hos Auktionshuset er buddet før moms og salær, og den samlede pris vises, før buddet bekræftes.`,
          `Klaravik viser på hvert objekt, om der er moms på, og lægger moms på, medmindre andet er angivet. En momsfri bil skal derfor være angivet som momsfri på objektet.`
        ],
        punkter: [
          `<strong>Klaravik.</strong> Der lægges moms på alle objekter, medmindre andet er angivet, og der er altid moms på købersalæret.`,
          `<strong>Brugtmomsordningen (BMO).</strong> Køberen betaler ingen moms af buddet og har ingen moms at trække fra. Sælgeren afregner moms af forskellen mellem salgs- og købspris.`,
          `<strong>Retrade.</strong> Alle bud er før moms, medmindre andet er angivet. En virksomhed med gyldigt momsnummer i et andet land end sælgers faktureres uden lokal moms.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Auktion og situation", "Moms på buddet"],
          raekker: [
            ["Klaravik, almindeligt salg", "Ja, medmindre andet er angivet"],
            ["Klaravik, brugtmomsordningen", "nej"],
            ["Retrade, køber og sælger i samme land", "ja"],
            ["Retrade, virksomhed med momsnummer i et andet land", "nej"]
          ],
          note: `Hos Klaravik er der altid moms på købersalæret. Kilder: <a href="${KV_FAQ}" rel="noopener">Klaravik: Spørgsmål og svar</a> og <a href="${RETRADE}" rel="noopener">Retrade: Auktionsregler og vilkår</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde til Auktionshuset: <a href="${AUKH}" rel="noopener">Auktionshuset: FAQ</a>, set den 7. oktober 2026. Mere om salærer og frister i <a href="/til-varebilen/salg-af-varebil/salg-af-varebil-paa-auktion/">salg af varebil på auktion</a>.`
        ]
      },
      {
        overskrift: "Leaset bil",
        tekst: [
          `En leaset bil ejes af leasingselskabet, og det er leasingselskabet, der fakturerer, når bilen købes fri eller sælges til en anvist køber. Se <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a>.`,
          `Køber virksomheden selv bilen ved udløb, gælder reglerne for køb. En varebil til og med 3 tons giver fuldt fradrag, når den kun bruges til momspligtige formål. Bruges den også privat, er der intet fradrag for købet, og et senere salg fra virksomheden bliver så momsfrit.`,
          `Mens bilen er leaset, gælder en særlig regel for lejen. Bruges en varebil til og med 3 tons ikke udelukkende i virksomheden, kan en tredjedel af momsen af leasingydelsen trækkes fra, når virksomheden sælger momspligtige varer og ydelser for over 50.000 kr. om året.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Leje, kun momspligtige formål", "Fuldt", "fradrag for momsen"],
            ["Leje, også privat eller momsfrit", "1/3", "af momsen af lejen"],
            ["Krav for fradraget ved blandet brug", "50.000", "kr. momspligtigt salg om året"]
          ],
          note: `Reglerne gælder varebiler til og med 3 tons. Kilde: <a href="${SKAT_BIL}" rel="noopener">Skattestyrelsen: Fradrag for moms af biludgifter</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal revisoren vide",
    spoergsmaal_manchet: "Så kan salget faktureres med moms eller momsfrit fra start.",
    spoergsmaal: [
      "Købsfakturaen, og om der stod moms på den.",
      "Om virksomheden trak momsen af anskaffelsen fra.",
      "Om bilen har været brugt privat eller til momsfri aktiviteter, og om der er købt dagsbeviser.",
      "Bilens tilladte totalvægt.",
      "Hvem køberen er: forhandler, virksomhed eller privatperson.",
      "Om køberen hører til i Danmark, i et andet EU-land eller uden for EU.",
      "Om bilen sælges som en del af hele virksomheden."
    ],
    faq: [
      ["Skal der moms på, når jeg sælger firmaets varebil?", "Ja, hvis virksomheden fik fradrag for momsen ved købet. Så lægges der moms på salgsprisen."],
      ["Hvornår er salg af en varebil momsfrit?", "Når anskaffelsen var undtaget fra fradrag efter momslovens kapitel 9, og virksomheden faktisk betalte moms ved købet, som den ikke kunne trække fra."],
      ["Hvad hvis varebilen blev købt af en privatperson?", "Så var der ingen moms på fakturaen. Havde virksomheden fradragsret for bilen, er salget momspligtigt, skriver Den juridiske vejledning."],
      ["Giver delvis privat brug fradrag for købsmomsen?", "Nej, ikke for en varebil til og med 3 tons. Delvis privat brug udelukker fradrag for anskaffelsen. Driftsmomsen kan trækkes fuldt fra."],
      ["Gælder reglerne også for en varebil over 3 tons?", "Nej. Over 3 tons gælder de almindelige fradragsregler, så blandet brug kan give delvist fradrag for købet. Skattestyrelsen skriver, at der skal moms på hele salgsprisen, når en stor varebil sælges."],
      ["Kan køberen trække momsen fra?", "Ja, en momsregistreret køber med fradragsret kan trække momsen fra, når bilen sælges med moms. Ved momsfrit salg er der ingen moms at trække fra."],
      ["Skal der dansk moms på, når varebilen sælges til et firma i et andet EU-land?", "Normalt ikke. Køberen betaler momsen i sit eget land. Sælger skal have købers verificerede momsnummer og dokumentation for, at bilen er transporteret dertil."],
      ["Hvad skal der stå på fakturaen ved salg til en EU-virksomhed?", "Der skal stå købers momsnummer og en påtegning om, at leverancen er momsfritaget, fx med henvisning til momslovens § 34, stk. 1."],
      ["Skal der moms på varebilen, når hele firmaet sælges?", "Nej, når bilen følger med en hel eller delvis overdragelse af virksomheden, beregnes der ikke moms af driftsmidlerne. Virksomheden skal give Skattestyrelsen besked senest otte dage efter overdragelsen."]
    ],
    kilder: [
      { navn: "Den juridiske vejledning 2026-2: D.A.5.24.1 Lovgrundlag (momslovens § 13, stk. 2), gengivet på tax.dk", url: JV_LOV, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: D.A.5.24.2 Betingelser for momsfritagelse af salg af driftsmidler, gengivet på tax.dk", url: JV_SALG, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: D.A.11.6.3.2 Kort om små vare-/lastbiler, gengivet på tax.dk", url: JV_SMAA, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: D.A.11.6.4.2 Anskaffelse, drift og leasing af store vare-/lastbiler, gengivet på tax.dk", url: JV_STORE, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: D.A.18.2 Hvem kan benytte brugtmomsordningen?", url: JV_BRUGT, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: D.A.4.1.8 Salg af aktiver som led i en virksomhedsoverdragelse", url: JV_OVERDRAG, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Fradrag for moms af biludgifter", url: SKAT_BIL, dato: "2026-10-07" },
      { navn: "Bilhandel: Brugte varevogne ekskl. moms", url: "https://bilhandel.dk/varevogn-ekskl-moms", dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Moms ved salg af varer og ydelser i EU", url: SKAT_EU, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Dokumentationskrav ved handel med lande i EU", url: SKAT_DOK, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Indberet din handel med udlandet", url: SKAT_INDB, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Moms ved salg af varer og ydelser i lande uden for EU", url: SKAT_UEU, dato: "2026-10-07" },
      { navn: "Klaravik: Spørgsmål og svar", url: KV_FAQ, dato: "2026-10-07" },
      { navn: "Klaravik: Købsvilkår", url: KV_KOB, dato: "2026-10-04" },
      { navn: "Retrade: Auktionsregler og vilkår", url: RETRADE, dato: "2026-10-07" },
      { navn: "Auktionshuset: FAQ (pris, moms og salær)", url: AUKH, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Den juridiske vejledning D.A.5.24.2: momsfritagelsen omfatter ikke den moms, som er betalt ved købet af driftsmidlerne; fritagelsen gælder fx anskaffelse og drift af personbiler efter ML § 42, stk. 1, nr. 7.", JV_SALG],
    ["Den juridiske vejledning D.A.5.24.2: fritagelsen omfatter ikke salg af driftsmidler, hvor virksomheden havde fradragsret, men ikke fik fradrag, fordi der ikke var moms på fakturaen, fx ved køb fra private eller køb fra momspligtige personer, der ikke har deklareret moms, fordi salget er omfattet af ML § 13, stk. 2.", JV_SALG],
    ["Den juridiske vejledning D.A.11.6.3.2: ML § 41, stk. 1, indebærer, at delvis fradragsret for købsmomsen ikke anvendes for små vare- og lastvogne; ikke kun privat kørsel, men også enhver anden kørsel, der er den momspligtige virksomhed uvedkommende, fx ML § 13-ærinder, udelukker fradrag.", JV_SMAA],
    ["Den juridiske vejledning D.A.11.6.3.2: er der for en vare-/lastbil til og med 3 tons taget fuldt fradrag for anskaffelsen og betalt dagsafgift efter ML § 29 a for privat brug, anses bilen fortsat som anvendt udelukkende til fradragsberettigede leveringer (ML § 41, stk. 4); eksempler er flytning af private ejendele og kørsel til arrangementer, der er virksomheden uvedkommende.", JV_SMAA],
    ["Skattestyrelsen: for varebiler og lastvogne til og med 3 tons brugt kun til momspligtige formål er der fuldt fradrag ved køb, og der skal beregnes moms af den fulde salgspris; ved momspligtige og momsfrie formål eller erhverv og privat er der intet fradrag ved køb, og der skal ikke beregnes moms ved salg.", SKAT_BIL],
    ["Skattestyrelsen: for vare- og lastvogne over 3 tons skal der beregnes moms af den fulde salgspris i alle tre brugssituationer; ved momspligtige og momsfrie formål er der delvist fradrag efter fradragsprocenten, ved erhverv og privat delvist fradrag efter skøn, som skal kunne dokumenteres fx med daglig kørebog; ved blandet brug kan der være tilfælde med ret til yderligere momsfradrag ved salget.", SKAT_BIL],
    ["Skattestyrelsen: ved leje eller leasing af varebil til og med 3 tons, der ikke kun bruges til momspligtige formål, er der delvist fradrag på en tredjedel af momsen af lejen, hvis virksomhedens salg af momspligtige varer og ydelser er over 50.000 kr. om året; ved kun momspligtige formål er der fuldt fradrag.", SKAT_BIL],
    ["Den juridiske vejledning D.A.11.6.4.2: store vare- og lastmotorkøretøjer er køretøjer med tilladt totalvægt over 3 ton og følger ML §§ 37 og 38; bruges en stor varebil også privat, er der kun delvis fradragsret efter ML § 38, stk. 2.", JV_STORE],
    ["Den juridiske vejledning D.A.11.6.4.2: køber og anvender en afgiftspligtig en bil til private formål og anvender den efterfølgende erhvervsmæssigt, er der ikke adgang til fradrag, da tidspunktet for erhvervelsen er afgørende (sag C-97/90, Lennartz).", JV_STORE],
    ["Den juridiske vejledning D.A.18.2: brugtmomsordningen kan anvendes af videreforhandlere for brugte varer leveret af en afgiftspligtig person, når leveringen er fritaget efter § 13; ordningen indebærer moms af fortjenstmargenen i stedet for den fulde salgspris; ordningen er frivillig, og videreforhandleren skal senest ved udstedelse af faktura tilkendegive, om varen sælges efter brugtmomsreglerne.", JV_BRUGT],
    ["Den juridiske vejledning D.A.4.1.8: der skal ikke beregnes moms ved salg af varelager, maskiner og andre driftsmidler som led i en hel eller delvis virksomhedsoverdragelse (ML § 4, stk. 5); den overdragende virksomhed kan ikke frivilligt vælge moms; virksomheden skal inden otte dage informere om den nye indehavers navn og adresse og salgsprisen; køberen skal som udgangspunkt også registreres for aktiviteten.", JV_OVERDRAG],
    ["Den juridiske vejledning D.A.4.1.8: der skal betales moms, når en virksomhed overdrager størstedelen af sine driftsmidler til en forhandler, fx en automobilforhandler, der sælger dem videre til forskellige kunder, fordi forhandleren ikke fortsætter driften.", JV_OVERDRAG],
    ["Skattestyrelsen: påtegningen på fakturaen ved varesalg til andre EU-lande kan henvise til ML § 34, stk. 1, til momssystemdirektivets artikel 138 eller være en anden tydelig påtegning som 'momsfritaget', 'free of VAT', '0-sats' eller 'zero-rated'; dokumentation for tjek af momsnummeret skal gemmes.", SKAT_DOK],
    ["Skattestyrelsen: transportdokumenter kan fx være et underskrevet CMR-dokument eller en faktura fra transportøren; andre beviser kan være en forsikringspolice eller bankbilag for transporten eller officielle dokumenter, der bekræfter varernes ankomst; købers erklæring skal indeholde udstedelsesdato, destinationsland, købers navn og adresse, mængde og art, dato og sted for ankomst og identifikation af modtageren.", SKAT_DOK],
    ["Skattestyrelsen: efter de danske regler skal den person, der afhenter varerne, ved udleveringen give oplysninger, der identificerer vedkommende, fx kopi af kørekort.", SKAT_DOK],
    ["Skattestyrelsen: EU-salg uden moms indberettes to steder i TastSelv Erhverv, på momsindberetningen inden for de normale frister (rubrik B - varer) og under EU-salg uden moms senest den 25. i hver måned; værdien skal være den samme begge steder; der indberettes et samlet beløb pr. kunde for perioden, hvor fakturaen blev udskrevet; der er ikke krav om 0-indberetning.", SKAT_INDB],
    ["Skattestyrelsen: ved salg til lande uden for EU skal der oprettes særlige konti i regnskabet, og værdien oplyses i momsangivelsens rubrik C; dokumentation kan også være skriftlig ordre og korrespondance med køberen; reglerne er de samme ved salg til private og virksomheder.", SKAT_UEU],
    ["Auktionshuset: når du afgiver et bud, er buddet ekskl. moms og salær, og den samlede pris vises, før buddet bekræftes.", AUKH]
  ]
};
