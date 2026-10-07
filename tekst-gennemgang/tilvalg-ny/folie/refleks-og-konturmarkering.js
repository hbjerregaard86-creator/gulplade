// Underside /til-varebilen/folie/refleks-og-konturmarkering/ (07-10-2026)
var BEK = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var VEJ = `https://www.retsinformation.dk/eli/lta/2025/393`;
var AFS = `https://www.afspaerring.dk/vare-kategori/skiltemateriel/div-refleks`;
var VKSP = `https://www.vankompagniet.dk/product/dekoration-spaerrebom-refleks-for-bag/`;
var M3 = `https://multimedia.3m.com/mws/media/1652112O/ft-film-diamond-grade-retroreflechissant-bi-oriente-pour-vehicules-983.pdf`;

module.exports = {
  id: "folie/refleks-og-konturmarkering",
  side: {
    slug: "refleks-og-konturmarkering",
    navn: "Refleks og konturmarkering",
    titel: "Refleks og konturmarkering på varebil",
    kort: `Hvilke reflekser en varebil skal have og hvor, hvad der er frivilligt, kravene til konturafmærkning og reflekterende reklame, og afmærkning ved vejarbejde.`,
    beskrivelse: `Refleks og konturmarkering på varebil: påbudte reflekser og deres mål, konturafmærkning efter FN-regulativ 104, reklame og afmærkning ved vejarbejde.`,
    manchet: `En varebil skal have to røde reflekser bagpå og gule sidereflekser, hvis den er over 6 m. Konturafmærkning er frivillig på varebiler, men skal opfylde FN-regulativ 104, hvis den sidder der. Her er målene fra detailforskrifterne, kravene til tapen og Vejdirektoratets regler for afmærkning ved vejarbejde.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Reflekser bagpå", "2 røde", "påbudt på varebilen"],
        ["Gule sidereflekser", "over 6,00 m", "påbudt, når bilen er længere"],
        ["Konturafmærkning", "Frivillig", "på varebiler, men skal opfylde klasse C efter FN-regulativ 104"],
        ["Reflekterende materiale", "50–60 mm", "bredt til konturafmærkning"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Krav og frivilligt",
        tekst: [
          `En refleks lyser ikke selv. Den kaster lyset fra andre bilers lygter tilbage, så bilen kan ses i mørke, også når den holder parkeret uden lys.`,
          `Detailforskrifterne skelner mellem påbudte reflekser, som bilen skal have, og udstyr, som er tilladt. En varebil skal have to reflekser bagpå og sidereflekser, hvis den er længere end 6,00 m. Konturafmærkning og reflekterende reklame er frivilligt på en varebil.`,
          `En varebil skal desuden opfylde de samme regler for lygter som en personbil. Det betyder blandt andet, at en varebil over 6,00 m skal have sidemarkeringslygter.`
        ],
        tabel: {
          kolonner: ["Udstyr", "Varebil N1", "Detailforskrifterne"],
          raekker: [
            ["To røde reflekser bagpå", "Påbudt", "Pkt. 6.05.020"],
            ["Gule sidereflekser", "Påbudt, hvis bilen er over 6,00 m", "Pkt. 6.05.020"],
            ["Supplerende reflekser", "Tilladt", "Pkt. 6.05.010"],
            ["Konturafmærkning på side og bag", "Tilladt", "Pkt. 6.13.010"],
            ["Konturafmærkning foran", "Ikke tilladt. Linjeafmærkning foran skal være hvid", "Pkt. 6.13.001 og 6.13.010"],
            ["Lavt reflekterende reklame og logoer", "Tilladt", "Pkt. 6.13.010"],
            ["Rød/hvide eller rød/gule skråstriber", "Tilladt, hvis bilen er særligt indrettet til arbejde på vej", "Pkt. 6.05.363"]
          ],
          note: `Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1484 af 03/12/2025 om detailforskrifter for køretøjers indretning, udstyr og anvendelse</a>, bilag 1, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Farverne",
        tekst: [
          `Reflekser, der vender fremad, skal være hvide, og reflekser, der vender bagud, skal være røde. Reflekser til siden skal være gule.`,
          `Den bageste siderefleks må dog være rød, hvis den er bygget sammen med en baglygte eller en bagrefleks. Påbudte reflekser foran og bagpå må ikke kunne dækkes af døre, bagsmæk eller lignende.`,
          `Trekantede reflekser må kun sidde bag på et påhængskøretøj. På en varebil skal reflekserne derfor have en anden form.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Varebil set ovenfra med reflekser, der vender fremad, bagud og til siden. Farven afhænger af, hvilken vej refleksen vender."><rect class="tg-profil" x="80" y="50" width="240" height="100"/><line class="tg-skinne-tynd" x1="140" y1="52" x2="140" y2="148"/><rect class="tg-kuffert" x="74" y="60" width="6" height="14"/><rect class="tg-kuffert" x="74" y="126" width="6" height="14"/><rect class="tg-modul" x="320" y="60" width="6" height="14"/><rect class="tg-modul" x="320" y="126" width="6" height="14"/><rect class="tg-kuffert" x="170" y="44" width="14" height="6"/><rect class="tg-kuffert" x="250" y="44" width="14" height="6"/><rect class="tg-kuffert" x="170" y="150" width="14" height="6"/><rect class="tg-kuffert" x="250" y="150" width="14" height="6"/><text class="tg-fremhaev" x="40" y="104" text-anchor="middle">Hvid</text><text x="40" y="120" text-anchor="middle">fremad</text><text class="tg-fremhaev" x="362" y="104" text-anchor="middle">Rød</text><text x="362" y="120" text-anchor="middle">bagud</text><text class="tg-fremhaev" x="217" y="32" text-anchor="middle">Gul til siden</text><text class="tg-fremhaev" x="217" y="176" text-anchor="middle">Gul til siden</text><text class="tg-lille" x="80" y="194">FRONT TIL VENSTRE · SET OVENFRA</text></svg>`,
          tekst: `Skematisk. Farven på reflekserne afhænger af, hvilken vej de vender. Sidereflekser er påbudt, når varebilen er over 6,00 m. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.05.001 og 6.05.020</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor reflekserne bagpå skal sidde",
        tekst: [
          `De to påbudte reflekser bagpå er et reflekspar. De skal være ens i størrelse, form, farve og refleksionsevne, og de skal sidde symmetrisk om bilens midte og i samme højde.`,
          `Hver refleks skal sidde højst 0,40 m fra bilens yderste kant, og der skal være mindst 0,40 m mellem de to. De skal sidde mellem 0,25 m og 0,90 m over vejen, men højden kan øges til 1,50 m, hvis bilens opbygning gør det nødvendigt.`,
          `Reflekserne skal kunne ses mindst 30° indad og udad og mindst 10° over og under vandret. Sidder refleksen lavere end 0,75 m, er det nok, at den kan ses 5° under vandret.`,
          `Målene får betydning, når bilen bygges om bagpå, fx med en lift eller en anden kofanger, for reflekserne skal stadig sidde inden for dem.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Varebil set bagfra med to reflekser bagpå. De sidder i samme højde, 0,25 til 0,90 m over vejen, højst 0,40 m fra bilens kant og mindst 0,40 m fra hinanden."><defs><marker id="pil-refleks-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><path class="tg-rum" d="M110,212 L110,62 Q110,46 126,46 L274,46 Q290,46 290,62 L290,212 Z"/><line class="tg-skillevaeg" x1="200" y1="48" x2="200" y2="204"/><rect class="tg-profil" x="124" y="64" width="64" height="50"/><rect class="tg-profil" x="212" y="64" width="64" height="50"/><rect class="tg-kasse" x="114" y="128" width="12" height="36"/><rect class="tg-kasse" x="274" y="128" width="12" height="36"/><rect class="tg-kuffert" x="116" y="176" width="16" height="8"/><rect class="tg-kuffert" x="268" y="176" width="16" height="8"/><rect class="tg-hylde" x="104" y="204" width="192" height="12"/><rect class="tg-hylde" x="122" y="216" width="30" height="16"/><rect class="tg-hylde" x="248" y="216" width="30" height="16"/><line class="tg-gulvlinje" x1="20" y1="232" x2="380" y2="232"/><g class="tg-maal"><line x1="132" y1="196" x2="268" y2="196" marker-start="url(#pil-refleks-1)" marker-end="url(#pil-refleks-1)"/><text x="200" y="192" text-anchor="middle">mindst 0,40 m</text></g><line class="tg-skinne-tynd" x1="284" y1="180" x2="316" y2="180"/><g class="tg-maal"><line x1="310" y1="180" x2="310" y2="232" marker-start="url(#pil-refleks-1)" marker-end="url(#pil-refleks-1)"/><text x="316" y="204">0,25–0,90 m</text><text x="316" y="218">op til 1,50 m</text></g><g class="tg-call"><line x1="118" y1="180" x2="70" y2="118"/><circle cx="118" cy="180" r="3"/><text class="tg-call__navn" x="10" y="96">Højst 0,40 m</text><text class="tg-call__under" x="10" y="110">fra bilens kant</text></g><text class="tg-lille" x="20" y="256">SET BAGFRA · IKKE MÅLFAST</text></svg>`,
          tekst: `Skematisk. Højden kan øges til 1,50 m, hvis bilens opbygning gør det nødvendigt. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.05.001 og 6.05.003</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Godkendelse og mærkning",
        tekst: [
          `En påbudt refleks skal være godkendt og mærket i klasse I efter FN-regulativ 3, hvis den ikke er trekantet, og i klasse III, hvis den er trekantet. En refleks, der er lavet efter den amerikanske standard FMVSS 108 og mærket DOT, opfylder også kravet.`,
          `Når der købes en ny eller en ekstra refleks til bilen, er det klassen og godkendelsesmærket, der viser, om den opfylder kravet.`,
          `En reflekterende nummerplade tæller ikke som refleks. Reklameskilte med reflekterende materiale regnes derimod som supplerende reflekser, og en varebil må have supplerende reflekser både fremad, bagud og til siden.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Refleks", "Godkendelse", "Må sidde på"],
          raekker: [
            ["Ikke-trekantet refleks", "Klasse I, FN-regulativ 3", "Bil og påhængskøretøj"],
            ["Trekantet refleks", "Klasse III, FN-regulativ 3", "Kun bag på påhængskøretøj"],
            ["Refleks efter amerikansk standard", "FMVSS 108 og mærket DOT", "Godkendt som påbudt refleks"],
            ["Reflekterende reklameskilt", "Regnes som supplerende refleks", "Siden, inden for konturen"]
          ],
          note: `Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.05.001, 6.05.010 og 6.13.001</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sidereflekser på varebiler over 6 m",
        tekst: [
          `En varebil, der er længere end 6,00 m, skal have sidereflekser. Ved et påhængskøretøj regnes trækanordningen med i længden.`,
          `Der skal sidde mindst én siderefleks på bilens midterste tredjedel i hver side. Den forreste må højst sidde 3,00 m fra bilens forreste punkt og den bageste højst 1,00 m fra det bageste punkt. Mellem to reflekser må der højst være 3,00 m, eller 4,00 m, hvis bilens opbygning gør det nødvendigt.`,
          `Sidereflekserne skal sidde mellem 0,25 m og 0,90 m over vejen, eller op til 1,50 m, hvis opbygningen kræver det. De skal kunne ses mindst 45° til hver side.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Forreste refleks fra fronten", "højst 3,00", "m"],
            ["Mellem to reflekser", "højst 3,00", "m"],
            ["Bageste refleks fra bagenden", "højst 1,00", "m"],
            ["Højde over vejen", "0,25–0,90", "m"]
          ],
          note: `Afstanden mellem reflekserne må være 4,00 m og højden 1,50 m, hvis bilens opbygning gør det nødvendigt. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.05.004 og 6.05.020</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lygter på lange og brede varebiler",
        tekst: [
          `En varebil skal opfylde de samme regler for lygter som en personbil. Er bilen længere end 6,00 m, skal den have sidemarkeringslygter, og er den bredere end 2,10 m, skal den have to markeringslygter fremad og to bagud.`,
          `Sidemarkeringslygterne følger næsten de samme afstande som sidereflekserne, men den forreste lygte må sidde op til 4,00 m fra fronten, hvis bilens form kræver det. Lygterne skal have samme lysstyrke som positionslygter og kunne ses mindst 45° til hver side.`
        ],
        punkter: [
          `<strong>Farve.</strong> Lygterne skal lyse gult. Den bageste må være rød, hvis den er bygget sammen med baglygte, markeringslygte, tågebaglygte, stoplygte eller bagrefleks.`,
          `<strong>Højde.</strong> Lygterne skal sidde 0,25–1,50 m over vejen eller op til 2,10 m, hvis karrosseriet kræver det.`,
          `<strong>Afstand.</strong> Mindst én lygte skal sidde på bilens midterste tredjedel. Den forreste må højst sidde 3,00 m fra fronten og den bageste højst 1,00 m fra bagenden. Der må højst være 3,00 m mellem lygterne, eller 4,00 m, hvis bilens form kræver det.`,
          `<strong>Synlighed.</strong> Lygterne skal kunne ses tydeligt mindst 300 m til siden uden at blænde.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Lang varebil set fra siden med konturafmærkning, reflekterende reklame inden for konturen og placering af sidemarkeringslygter"><defs><marker id="pil-refleks-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<path class="tg-profil" d="M20,160 L20,118 Q22,110 40,107 L66,74 Q69,71 75,71 L376,71 Q382,71 382,77 L382,160 Z"/><path class="tg-kasse" d="M70,78 L96,78 L96,104 L44,107 Z"/>
<rect class="tg-doer" fill="none" x="130" y="77" width="246" height="78"/><rect class="tg-modul" x="180" y="96" width="140" height="40"/><text class="tg-fremhaev" x="250" y="121" text-anchor="middle">Reklame D eller E</text>
<circle class="tg-hylde" cx="60" cy="162" r="13"/><circle class="tg-hylde" cx="300" cy="162" r="13"/><line class="tg-gulvlinje" x1="10" y1="176" x2="390" y2="176"/>
<circle class="tg-kasse" cx="165" cy="146" r="4"/><circle class="tg-kasse" cx="310" cy="146" r="4"/><circle class="tg-kasse" cx="355" cy="146" r="4"/>
<g class="tg-maal"><line x1="20" y1="196" x2="165" y2="196" marker-start="url(#pil-refleks-2)" marker-end="url(#pil-refleks-2)"/><text x="92" y="214" text-anchor="middle">højst 3,00 m</text></g><g class="tg-maal"><line x1="165" y1="196" x2="310" y2="196" marker-start="url(#pil-refleks-2)" marker-end="url(#pil-refleks-2)"/><text x="237" y="214" text-anchor="middle">højst 3,00 m</text></g><g class="tg-maal"><line x1="355" y1="196" x2="382" y2="196" marker-start="url(#pil-refleks-2)" marker-end="url(#pil-refleks-2)"/><text x="390" y="230" text-anchor="end">højst 1,00 m</text></g>
<g class="tg-call"><line x1="250" y1="77" x2="250" y2="42"/><circle cx="250" cy="77" r="3"/><text class="tg-call__navn" x="140" y="20">Fuld konturafmærkning</text><text class="tg-call__under" x="140" y="34">Gul eller hvid, 50–60 mm, klasse C</text></g></svg>`,
          tekst: `Skematisk. De små cirkler er sidemarkeringslygter. Konturafmærkning er frivillig på varebiler. Reflekterende reklame kræver fuld konturafmærkning på siden og skal sidde inden for den. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.03.008 og 6.13.001</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Konturafmærkning er påbudt på lastbiler",
        tekst: [
          `Konturafmærkning er en reflekterende linje, der viser bilens længde, bredde og højde i mørke. Den er påbudt på lastbiler N2 og N3 over 7.500 kg: fuld konturafmærkning bagpå ved en bredde over 2,10 m og delvis konturafmærkning på siden ved en længde over 6,00 m.`,
          `Kan den påbudte konturafmærkning ikke monteres på grund af bilens form, opbygning eller brug, må en lastbil have linjeafmærkning i stedet.`,
          `Personbiler M1 op til 3.500 kg må ikke have konturafmærkning, og det samme gælder motorcykler og knallerter. For varebiler er den frivillig.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Køretøj", "Konturafmærkning"],
          raekker: [
            ["Varebil N1", "Frivillig"],
            ["Lastbil over 7.500 kg, bredere end 2,10 m", "Påbudt, fuld bagpå"],
            ["Lastbil over 7.500 kg, længere end 6,00 m", "Påbudt, delvis på siden"],
            ["Personbil M1 til 3.500 kg", "nej"],
            ["Påhængsvogn O1", "nej"],
            ["Påhængsvogn O3, bredere end 2,10 m", "Påbudt, fuld bagpå"]
          ],
          note: `Forbuddet på personbiler og påhængsvogne O1 og kravet på lastbiler og påhængsvogne O3 gælder ikke køretøjer fra før 1. juli 2025. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.13.010–6.13.113</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tre slags konturafmærkning",
        tekst: [
          `Detailforskrifterne beskriver tre former. Fuld konturafmærkning viser hele omridset, delvis konturafmærkning viser den nederste linje og de øverste hjørner, og linjeafmærkning viser kun den nederste linje.`,
          `Fuld og delvis konturafmærkning sidder på siden og bagpå, så tæt på bilens yderste kanter som muligt. Linjeafmærkning sidder så tæt på den nederste kant som muligt og må også sidde foran, hvor den skal være hvid.`
        ],
        kort: [
          ["Fuld", "En sammenhængende linje rundt om bilens omrids på siden, bagpå eller begge steder."],
          ["Delvis", "Den nederste vandrette linje og vinkler på mindst 0,25 m i de øverste hjørner."],
          ["Linjeafmærkning", "Kun den nederste vandrette linje. Foran skal den være hvid."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 292" role="img" aria-label="Tre varebiler set fra siden. Den øverste har fuld konturafmærkning rundt om varerummet, den midterste har den nederste linje og de øverste hjørner, og den nederste har kun den nederste linje."><g transform="translate(20,80)"><path class="tg-rum" d="M0,0 L0,-62 Q0,-66 4,-66 L150,-66 L172,-40 L184,-36 L184,0 Z"/><path class="tg-profil" d="M152,-60 L166,-60 L180,-40 L152,-40 Z"/><circle class="tg-profil" cx="34" cy="0" r="11"/><circle class="tg-profil" cx="150" cy="0" r="11"/><line class="tg-gulvlinje" x1="0" y1="11" x2="200" y2="11"/><rect class="tg-doer" fill="none" x="6" y="-60" width="134" height="44"/></g><g transform="translate(20,176)"><path class="tg-rum" d="M0,0 L0,-62 Q0,-66 4,-66 L150,-66 L172,-40 L184,-36 L184,0 Z"/><path class="tg-profil" d="M152,-60 L166,-60 L180,-40 L152,-40 Z"/><circle class="tg-profil" cx="34" cy="0" r="11"/><circle class="tg-profil" cx="150" cy="0" r="11"/><line class="tg-gulvlinje" x1="0" y1="11" x2="200" y2="11"/><line class="tg-doer" x1="6" y1="-16" x2="140" y2="-16"/><path class="tg-doer" fill="none" d="M6,-44 L6,-60 L24,-60"/><path class="tg-doer" fill="none" d="M122,-60 L140,-60 L140,-44"/></g><g transform="translate(20,272)"><path class="tg-rum" d="M0,0 L0,-62 Q0,-66 4,-66 L150,-66 L172,-40 L184,-36 L184,0 Z"/><path class="tg-profil" d="M152,-60 L166,-60 L180,-40 L152,-40 Z"/><circle class="tg-profil" cx="34" cy="0" r="11"/><circle class="tg-profil" cx="150" cy="0" r="11"/><line class="tg-gulvlinje" x1="0" y1="11" x2="200" y2="11"/><line class="tg-doer" x1="6" y1="-16" x2="140" y2="-16"/></g><text class="tg-fremhaev" x="230" y="36">Fuld konturafmærkning</text><text x="230" y="52">hele omridset</text><text class="tg-fremhaev" x="230" y="132">Delvis konturafmærkning</text><text x="230" y="148">nederste linje og</text><text x="230" y="164">hjørner, mindst 0,25 m</text><text class="tg-fremhaev" x="230" y="228">Linjeafmærkning</text><text x="230" y="244">kun nederste linje</text><text x="230" y="260">foran skal den være hvid</text></svg>`,
          tekst: `Skematisk. Den fremhævede linje er konturafmærkningen. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.13.001</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Krav til materialet",
        tekst: [
          `Al konturafmærkning skal være godkendt og mærket i klasse C efter FN-regulativ 104. Klasse C er klassen til konturafmærkning, mens reflekterende reklame bruger klasse D og E.`,
          `Kravene gælder, uanset om konturafmærkningen er påbudt eller frivillig. En varebil med frivillig konturafmærkning skal altså leve op til de samme krav som en lastbil.`
        ],
        punkter: [
          "Godkendt og mærket i klasse C efter FN-regulativ 104, med mindst ét synligt E-mærke på hver del.",
          "50–60 mm bredt reflekterende materiale.",
          "Gul eller hvid på siden. Rød eller gul bagpå.",
          "Nederste del mellem 0,25 m og 1,50 m over vejen, dog op til 2,50 m, hvis opbygningen kræver det.",
          "Mere end 0,20 m fra hver påbudt stoplygte.",
          "Ved brud må afstanden mellem delene højst være 50 % af den korteste dels længde."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Bredde", "50–60", "mm"],
            ["Nederste del over vejen", "0,25–1,50", "m"],
            ["Afstand til stoplygte", "mere end 0,20", "m"]
          ],
          note: `Den nederste del må sidde op til 2,50 m over vejen, hvis opbygningen kræver det. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.13.001</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Konturtape i praksis",
        tekst: [
          `3M's konturtape Diamond Grade 983 er et eksempel på et materiale, der er godkendt efter FN-regulativ 104. I 55 mm bredde har tapen svejsede kanter, så den aktive bredde er 50 mm. Den fås i hvid, gul og rød, men rød fås kun som 55 mm konturtape.`,
          `Godkendelsesnummeret står på tapen med cirka 50 cm mellemrum. Hvert stykke skal have mindst ét synligt E-mærke, så et stykke, der er kortere end afstanden mellem mærkerne, kan komme til at mangle det.`,
          `Konturen må gerne brydes, fx ved en dørsamling, men afstanden mellem to dele må højst være 50 % af den korteste dels længde. 3M skriver, at tapen ikke må sidde hen over nitter, samlinger, svejsninger eller overlappende plader, og at den skal holdes nogle millimeter fra dem.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Udsnit af en varebils side med konturtape langs den nederste kant. Tapen er brudt ved en dørsamling, og der står et godkendelsesmærke med cirka 50 cm mellemrum."><rect class="tg-profil" x="20" y="50" width="360" height="104"/><line class="tg-skillevaeg" x1="220" y1="50" x2="220" y2="154"/><rect class="tg-modul" x="30" y="128" width="184" height="12"/><rect class="tg-modul" x="226" y="128" width="144" height="12"/><text class="tg-modul__tekst" x="70" y="138" text-anchor="middle">E</text><text class="tg-modul__tekst" x="160" y="138" text-anchor="middle">E</text><text class="tg-modul__tekst" x="270" y="138" text-anchor="middle">E</text><text class="tg-modul__tekst" x="350" y="138" text-anchor="middle">E</text><g class="tg-call"><line x1="220" y1="90" x2="236" y2="46"/><circle cx="220" cy="90" r="3"/><text class="tg-call__navn" x="230" y="20">Brud ved samlingen</text><text class="tg-call__under" x="230" y="34">tapen går ikke hen over</text></g><g class="tg-call"><line x1="70" y1="141" x2="70" y2="176"/><circle cx="70" cy="141" r="3"/><text class="tg-call__navn" x="20" y="190">E-mærke</text><text class="tg-call__under" x="20" y="204">ca. hver 50 cm på 3M 983</text></g><g class="tg-call"><line x1="220" y1="141" x2="250" y2="176"/><circle cx="220" cy="141" r="3"/><text class="tg-call__navn" x="380" y="190" text-anchor="end">Mellemrum højst 50 %</text><text class="tg-call__under" x="380" y="204" text-anchor="end">af den korteste del</text></g><text class="tg-lille" x="20" y="218">UDSNIT AF SIDEN · IKKE MÅLFAST</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.13.001</a> og <a href="${M3}" rel="noopener">3M, teknisk datablad for Diamond Grade 983</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Montering og rengøring",
        tekst: [
          `3M beskriver monteringen trin for trin. Tapen må kun sidde på plane flader eller enkle kurver med en radius på mindst 100 mm, og den må ikke sidde på kugleformede eller sammensatte flader.`,
          `3M angiver en holdbarhed på 8 år, når tapen sidder lodret og er sat på efter anvisningerne. Rullerne skal bruges inden for et år efter købet.`,
          `Tapen kan vaskes med svamp, varmt vand og sæbe. Ved højtryksrens skal dysen holdes mindst 30 cm fra tapen og i en vinkel på under 45°, og 3M anbefaler højst 80 bar og højst 60 °C.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Rens fladen", "Snavs, fedt og voks fjernes, der hvor tapen skal sidde."],
            ["Undgå samlinger", "Tapen holdes nogle millimeter fra nitter, samlinger og svejsninger."],
            ["Vælg fladen", "Tapen sættes kun på plane flader eller enkle kurver med en radius på mindst 100 mm."],
            ["Intet overlap", "Stykkerne lægges ikke oven på hinanden."],
            ["Rund hjørnerne", "Afrundede hjørner gør det sværere for tapen at løsne sig."]
          ]
        },
        efter: [
          `Kilde: <a href="${M3}" rel="noopener">3M, teknisk datablad for Diamond Grade 983</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Reflekterende reklame og logoer",
        tekst: [
          `Reklameskilte med reflekterende materiale regnes som supplerende reflekser. Med fuld konturafmærkning på siden må bilen have reflekterende reklamer og logoer på siden inden for konturen.`,
          `Reklamen skal være af et lavt reflekterende materiale, der godt må have alle farver. Klassen afhænger af, hvor stort det reflekterende areal er. Mere om reklamen på bilen i <a href="/til-varebilen/folie/bilreklame-paa-varebil/">bilreklame på varebil</a>.`
        ],
        punkter: [
          "Godkendt efter FN-regulativ 104 i klasse D eller E. Hvidt basismateriale ved fuldtryk uden frie hvide felter skal være klasse D/E.",
          "Lavt reflekterende materiale i alle farver.",
          "Klasse D ved reflekterende arealer under 2,0 m², klasse E ved 2,0 m² og derover."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Materiale", "Klasse, FN-reg. 104", "Placering"],
          raekker: [
            ["Konturafmærkning", "C", "Side og bag"],
            ["Reklame under 2,0 m²", "D", "Side, inden for konturen"],
            ["Reklame fra 2,0 m²", "E", "Side, inden for konturen"],
            ["Hvid basis ved fuldtryk", "D/E", "Side, inden for konturen"]
          ],
          note: `Kilde: detailforskrifterne pkt. 6.13.001, <a href="${BEK}" rel="noopener">BEK nr. 1484 af 03/12/2025</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Lysende reklameskilt på taget",
        tekst: [
          `En varebil må have et reklameskilt med lys på taget, fordi varebiler følger personbilernes regler for lygter, og personbiler må have et sådant skilt.`,
          `Skiltet skal lyse hvidt eller gult og må ikke blinke. Lysstyrken må højst være 60 cd, og skiltet må ikke lyse bagud.`,
          `Reglerne for lysende skilte står under lygterne i detailforskrifterne, mens reglerne for reflekterende reklame står under konturafmærkning.`
        ],
        efter: [
          `Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.03.009, 6.03.021 og 6.03.024</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Skråstriber på køretøjer til vejarbejde",
        tekst: [
          `Et køretøj, der er særligt indrettet til at udføre arbejde på vej, må have supplerende refleksafmærkning på alle sider. Striberne skal være rød og hvide eller rød og gule, diagonale, i 45° ± 5° og 100 mm ± 2,5 mm brede.`,
          `Foran og bagpå skal striberne sidde symmetrisk, så trafikken ledes uden om køretøjet. På siderne skal de sidde, så trafikken ledes foran eller uden om køretøjet. For andre varebiler har detailforskrifterne ingen regel om skråstriber.`,
          `Har køretøjet en grus- eller saltspreder bagpå, skal de påbudte reflekser bagpå kunne ses lige bagfra. Battenburg-mønsteret står i detailforskrifterne under udrykningskøretøjer, og farverne afhænger af, om bilen hører til politiet, ambulancerne eller brand og redning.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Skråstriber på et køretøj til vejarbejde, sat symmetrisk om midten"><text class="tg-lille" x="100" y="26">SKEMATISK · IKKE MÅLFAST</text><rect class="tg-profil" x="100" y="40" width="200" height="100"/><path class="tg-modul" d="M100,40 L128,40 L100,68 Z"/><path class="tg-modul" d="M156,40 L184,40 L100,124 L100,96 Z"/><path class="tg-modul" d="M200,52 L200,80 L140,140 L112,140 Z"/><path class="tg-modul" d="M200,108 L200,136 L196,140 L168,140 Z"/><path class="tg-modul" d="M300,40 L272,40 L300,68 Z"/><path class="tg-modul" d="M244,40 L216,40 L300,124 L300,96 Z"/><path class="tg-modul" d="M200,52 L200,80 L260,140 L288,140 Z"/><path class="tg-modul" d="M200,108 L200,136 L204,140 L232,140 Z"/><line class="tg-skinne-tynd" x1="200" y1="36" x2="200" y2="144"/><text x="100" y="164">Striber i 45° ± 5°, 100 mm ± 2,5 mm brede</text><text x="100" y="182">Rød og hvid eller rød og gul</text></svg>`,
          tekst: `Skematisk. Skråstriber på et køretøj, der er særligt indrettet til arbejde på vej. Foran og bagpå sidder striberne symmetrisk, så trafikken ledes uden om køretøjet. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.05.340 og 6.05.363</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Afmærkning ved vejarbejde",
        tekst: [
          `Vejdirektoratets bekendtgørelse om afmærkning af vejarbejder fra 2025 trådte i kraft den 1. juli 2025. Den fastlægger afmærkningsfladen, som blandt andet skal bruges på motorveje, når et arbejdskøretøj kører 40 km/t eller langsommere på kørebanen.`,
          `Fladen er 2–2,55 m bred og 3,5–3,6 m høj og mindst lige så bred som det køretøj, der bærer den. Den er bygget af O 45 spærrebomme i materieltype 3 med gule Z 93-blinksignaler.`,
          `Der sidder et Z 93-blinksignal i hver side i 1–1,5 m højde og ét i hvert af de yderste felter på den øverste bom. De fire signaler blinker samtidig, og den nederste bom må højst sidde 1 m over terræn. Arbejdskøretøjet varsles med tavlen A 39 Vejarbejde, der højst må stå 3 km før køretøjet.`,
          `Gult blinkende kryds eller pil på et køretøj skal sidde på matsort bund mindst 1,5 m over terræn. Krydset eller pilen er 100 x 100 cm på en flade på 105 x 105 cm eller, hvor en sådan plade ikke kan monteres, 75 x 75 cm på 80 x 80 cm. Gult blink på bilen er beskrevet i <a href="/til-varebilen/traek-og-tagudstyr/arbejdslys-og-advarselslys/">arbejdslys og advarselslys</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Afmærkningsflade, bredde", "2–2,55", "m"],
            ["Afmærkningsflade, højde", "3,5–3,6", "m"],
            ["Gult kryds eller pil over terræn", "mindst 1,5", "m"],
            ["Kryds eller pil", "100 x 100", "cm"]
          ],
          note: `Fladen skal blandt andet bruges på motorveje, når arbejdskøretøjet kører 40 km/t eller langsommere. Krydset eller pilen er 75 x 75 cm, hvis der ikke kan monteres en plade på 105 x 105 cm. Kilde: <a href="${VEJ}" rel="noopener">BEK nr. 393 af 14/04/2025 om afmærkning af vejarbejder</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Udstyr, der rager frem foran bilen",
        tekst: [
          `Udstyr, der rager frem foran bilens karrosseri, fx en kranbjælke, har sine egne regler. Det afmærkes med gule og sorte striber efter standarden DS/ISO 3864 og med lygter.`,
          `Dele, der rager mindre end 1,00 m frem, og dele, der rager bagud, må have striber eller reflekser, men det er ikke et krav.`,
          `En læssebagsmæk må have to særlige afmærkningslygter. De skal lyse gult, sidde højst 0,40 m fra mækkens yderste hjørner, vende bagud, når mækken er i arbejdsstilling, og blinke 100–240 gange i minuttet. De må ikke kunne tændes, når mækken er klappet op.`
        ],
        punkter: [
          "<strong>1,00 m eller mere.</strong> Udstyret skal have gule og sorte striber efter DS/ISO 3864 foran og på de forreste 0,50 m af siderne, mindst én hvid lygte fremad og en gul lygte til hver side.",
          "<strong>2,00 m eller mere.</strong> Udstyret skal også have en afmærkningslygte ved forenden, som kan tændes uden bilens markeringslygter.",
          "<strong>Under 1,00 m og bagud.</strong> Udstyret må males med striber eller have reflekser."
        ],
        efter: [
          `Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.09.001, 6.09.002 og 6.09.020</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Reflekser på anhængeren",
        tekst: [
          `Et påhængskøretøj har andre regler end bilen. Det er det eneste sted, hvor trekantede reflekser må sidde, og de skal sidde bagpå med spidsen opad.`,
          `Afstanden mellem de trekantede reflekser skal være mindst 0,60 m, hvis påhængskøretøjet er mindst 1,30 m bredt. Påhængskøretøjer fra før 1. juli 2025 må have afstande ned til 0,40 m.`,
          `En påhængsvogn O3 skal have fuld konturafmærkning bagpå, hvis den er bredere end 2,10 m, og delvis konturafmærkning på siden, hvis den inklusive trækstang er længere end 6,00 m.`
        ],
        punkter: [
          "<strong>Påbudt.</strong> Anhængeren skal have to fremadvendende reflekser, to trekantede bagudvendende reflekser med spidsen opad og sidereflekser.",
          "<strong>Supplerende bagud.</strong> Ekstra reflekser bagpå skal være trekantede med spidsen opad, medmindre de er bygget sammen med lygter eller indgår i bomærker.",
          "<strong>Konturafmærkning.</strong> En påhængsvogn O1 til højst 750 kg må ikke have konturafmærkning. Andre påhængskøretøjer må have den og lavt reflekterende reklamer."
        ],
        efter: [
          `Kilde: detailforskrifterne pkt. 6.05.003, 6.05.100, 6.13.100, 6.13.111 og 6.13.113. Du kan læse mere om anhængeren i <a href="/haandbogen/anhaenger-bag-varebilen/">anhænger bag varebilen</a>.`
        ]
      },
      {
        overskrift: "Nye regler fra 1. juli 2025",
        tekst: [
          `Flere af reglerne på denne side gælder kun køretøjer fra den 1. juli 2025 og frem. Detailforskrifterne markerer det med "Før 01.07.25", og for ældre køretøjer gælder de tidligere regler.`,
          `Samme dag trådte den nye bekendtgørelse om afmærkning af vejarbejder i kraft. En afmærkningsflade efter de gamle regler må fortsat bruges indtil 1. januar 2028 på en tavlevogn, der er købt før 1. januar 2016.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før 1. juli 2025", "Forbuddet mod konturafmærkning på personbiler M1 til 3.500 kg og påhængsvogne O1 gælder ikke køretøjer fra før denne dato."],
            ["1. juli 2025", "Bekendtgørelsen om afmærkning af vejarbejder træder i kraft. Lastbiler over 7.500 kg fra denne dato skal have konturafmærkning, og trekantede reflekser på brede påhængskøretøjer skal sidde mindst 0,60 m fra hinanden."],
            ["1. januar 2028", "Fristen udløber for afmærkningsflader efter de gamle regler på tavlevogne, der er købt før 1. januar 2016."]
          ],
          note: `Kilder: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 6.05.003 og 6.13</a> og <a href="${VEJ}" rel="noopener">BEK nr. 393 af 14/04/2025, § 98 og § 99</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser",
        tekst: [
          `Konturtape og refleksfolie købes hos skilte- og afspærringsfirmaer. Afspærring.dk sælger Diamond Grade-reflekstape til konturmarkering i rød, hvid og gul og selvklæbende refleksfolie i metermål op til 120 cm bred.`,
          `Afspærring.dk laver også tavleflader efter mål til tavlevogne eller til montering på køretøjer i reflekstype 3. VanKompagniet sælger en dekoration med spærrebom i refleks til for- og bagende.`,
          `Afspærring.dk oplyser ikke rullelængden på reflekstapen.`
        ],
        tabel: {
          kolonner: ["Produkt", "Forhandler", "Fra"],
          raekker: [
            ["Reflekstape Diamond Grade, rød, hvid eller gul, til konturmarkering", "Afspærring.dk", "1.500 kr."],
            ["Spærrebom refleks for/bag", "VanKompagniet", "1.695 kr."],
            ["Refleksfolie i metermål, op til 120 cm bred", "Afspærring.dk", "Pris efter tilbud"],
            ["Tavleflade efter mål, reflekstype 3", "Afspærring.dk", "Pris efter tilbud"]
          ],
          note: `Kilder: <a href="${AFS}" rel="noopener">Afspærring.dk</a> og <a href="${VKSP}" rel="noopener">VanKompagniet</a>, vejledende priser ekskl. moms og uden montering, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så opfylder afmærkningen detailforskrifterne.",
    spoergsmaal: [
      "Bilens længde, bredde og højde.",
      "Om afmærkningen skal være fuld, delvis eller linjeafmærkning.",
      "Om der skal reflekterende reklame på siden, og hvor stort arealet er.",
      "Hvor der er nitter, samlinger og stærke buer på de flader, der skal have tape.",
      "Om bilen har lift eller læssebagsmæk.",
      "Om bilen bruges ved vejarbejde og skal bære afmærkningsflade eller blinkende pil.",
      "Om bilen er leaset, så afmærkningen skal kunne fjernes."
    ],
    faq: [
      ["Skal en varebil have konturmarkering?", "Nej. Konturafmærkning er påbudt på lastbiler over 7.500 kg. På en varebil er den tilladt, men skal opfylde FN-regulativ 104 klasse C."],
      ["Hvilken farve skal reflekserne bag på bilen have?", "Røde. Konturafmærkning bagpå må være rød eller gul."],
      ["Hvor højt skal reflekserne bagpå sidde?", "Mellem 0,25 m og 0,90 m over vejen. Hvis bilens opbygning gør det nødvendigt, må de sidde op til 1,50 m over vejen."],
      ["Må man have reflekterende reklame på varebilen?", "Ja, på siden, hvis bilen har fuld konturafmærkning på siden, og folien er godkendt efter FN-regulativ 104 i klasse D eller E."],
      ["Hvornår skal en varebil have sidereflekser?", "Når den er over 6,00 m lang. De skal være gule."],
      ["Må der sidde konturmarkering foran?", "Nej. Konturafmærkning må ikke sidde foran. Linjeafmærkning foran skal være hvid."],
      ["Hvornår skal en varebil have sidemarkeringslygter?", "Når den er over 6,00 m lang. Den forreste må højst sidde 3,00 m fra fronten og den bageste højst 1,00 m fra bagenden."],
      ["Må en lille trailer have konturafmærkning?", "Nej, ikke en påhængsvogn O1 med en tilladt totalvægt på højst 750 kg. Andre påhængskøretøjer må."],
      ["Må en varebil have trekantede reflekser?", "Nej. Trekantede reflekser må kun sidde bag på et påhængskøretøj."],
      ["Hvor bred skal konturtapen være?", "Konturafmærkning skal være 50–60 mm bred. 3M's tape Diamond Grade 983 er 55 mm bred med svejsede kanter og en aktiv bredde på 50 mm."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), pkt. 6.03, 6.05, 6.09, 6.10 og 6.13", url: BEK, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om afmærkning af vejarbejder, ved akutte trafikfarlige hændelser og ved reparation eller fjernelse af havarerede køretøjer (BEK nr. 393 af 14/04/2025)", url: VEJ, dato: "2026-10-07" },
      { navn: "3M: Film Diamond Grade rétroréfléchissant bi-orienté pour véhicules, série 983, fiche technique", url: M3, dato: "2026-10-07" },
      { navn: "Afspærring.dk: Div. refleks", url: AFS, dato: "2026-10-07" },
      { navn: "VanKompagniet: Dekoration – Spærrebom refleks for/bag", url: VKSP, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Detailforskrifterne pkt. 6.05.001: påbudt refleksanordning skal være godkendt og mærket i klasse I (ikke-trekantet) eller III (trekantet) efter FN-regulativ 3 eller udført efter FMVSS 108 og DOT-mærket; trekantet refleks må kun sidde bag på påhængskøretøj; reflekser i et par skal være ens og sidde symmetrisk og i samme højde; reflekterende nummerplade anses ikke som refleks.", BEK],
    ["Detailforskrifterne pkt. 6.05.003: påbudt bagudvendende refleks skal sidde højst 0,40 m fra køretøjets yderste kant, mindst 0,40 m mellem reflekserne i et par (0,60 m for trekantede, hvis påhængskøretøjet er mindst 1,30 m bredt; før 01.07.25 ned til 0,40 m), 0,25-0,90 m over vejbanen (op til 1,50 m, hvis opbygningen gør det nødvendigt), synlig mindst 30° indad og udad og 10° over og under vandret (5° under, hvis højden er under 0,75 m).", BEK],
    ["Detailforskrifterne pkt. 6.05.004: påbudte sidereflekser skal sidde 0,25-0,90 m over vejbanen (op til 1,50 m), være synlige mindst 45° til hver side, mindst én på midterste tredjedel, den forreste højst 3,00 m fra forreste punkt, højst 3,00 m (4,00 m) mellem dem og den bageste højst 1,00 m fra bageste punkt; ved påhængskøretøjer medregnes tilkoblingsanordningen i længden.", BEK],
    ["Detailforskrifterne pkt. 6.05.010: motordrevet køretøj kan have supplerende fremadvendende, bagudvendende og sidevendte reflekser.", BEK],
    ["Detailforskrifterne pkt. 6.03.024: varebil N1 skal opfylde bestemmelserne for personbil M1 om lygter; pkt. 6.03.021: M1 skal have to fremadrettede og to bagudrettede markeringslygter, hvis bredden overstiger 2,10 m, og sidemarkeringslygter, hvis længden overstiger 6,00 m, og kan have reklameskilt anbragt på taget.", BEK],
    ["Detailforskrifterne pkt. 6.03.008: den forreste sidemarkeringslygte må sidde højst 3,00 m fra køretøjets forreste punkt, dog 4,00 m, hvis køretøjets form gør det påkrævet; lygten skal være synlig mindst 45° til hver side og have lysstyrke som en positionslygte.", BEK],
    ["Detailforskrifterne pkt. 6.03.009: reklameskilt skal afgive hvidt eller gult ikke-blinkende lys, have en lysstyrke på højst 60 cd og må ikke afgive lys bagud.", BEK],
    ["Detailforskrifterne pkt. 6.13.001: konturafmærkning skal vise køretøjets vandrette og lodrette dimensioner; fuld og delvis konturafmærkning sidder så tæt på de yderste kanter som muligt; linjeafmærkning sidder så tæt på den nederste kant som muligt og kan sidde på siden, foran og/eller bagpå.", BEK],
    ["Detailforskrifterne pkt. 6.13.025: lastbil N2 over 7.500 kg skal have bagudrettet fuld konturafmærkning ved bredde over 2,10 m og delvis konturafmærkning til siden ved længde over 6,00 m (gælder ikke før 01.07.25); linjeafmærkning kan monteres i stedet, hvis form, opbygning, konstruktion eller driftsforhold gør det umuligt.", BEK],
    ["Detailforskrifterne pkt. 6.13.021, 6.13.030, 6.13.040 og 6.13.111: personbil M1 til 3.500 kg, motorcykel, knallert og påhængsvogn O1 må ikke have konturafmærkning; for M1 og O1 gælder forbuddet ikke før 01.07.25.", BEK],
    ["Detailforskrifterne pkt. 6.13.113: påhængsvogn O3 over 2,10 m bred skal have bagudrettet fuld konturafmærkning, og over 6,00 m lang inklusive trækstang delvis konturafmærkning til siden (gælder ikke før 01.07.25).", BEK],
    ["Detailforskrifterne pkt. 6.05.363: på køretøj med bagmonteret grus- eller saltspreder skal påbudte bagudvendende reflekser være synlige lige bagfra; skråstriberne skal på siderne anbringes, så trafikken ledes foran eller uden om køretøjet.", BEK],
    ["Detailforskrifterne pkt. 6.05.340: udrykningskøretøjer kan have Battenburg-mønster, blå/gult for politiet, grøn/gult for ambulancer og rød/gult for brand og redning.", BEK],
    ["Detailforskrifterne pkt. 6.09.002: særlige afmærkningslygter på læssebagsmæk skal afgive gult lys, sidde højst 0,40 m fra mækkens yderste hjørner, være rettet bagud i arbejdsstilling, ikke kunne tændes, når mækken er klappet op, og afgive 100-240 blink pr. minut; pkt. 6.09.020 (5): læssebagsmæk kan have to sådanne lygter.", BEK],
    ["BEK nr. 393/2025 er udstedt af Vejdirektoratet og trådte i kraft den 1. juli 2025 (§ 98).", VEJ],
    ["BEK nr. 393/2025 § 84-86: afmærkningsfladen skal mindst være lige så bred som det bærende køretøj; den lavtsiddende vandrette O 45 spærrebom højst 1 m over terræn; Z 93 gult blinksignal i hver side i 1-1,5 m højde og et på hver af den højtsiddende boms yderste felter; de fire blinker samtidig.", VEJ],
    ["BEK nr. 393/2025 § 19, stk. 4: ved arbejdskøretøj på 40 km/h eller lavere på kørebanen på motorvej forvarsles med A 39 Vejarbejde, der højst må stå 3 km før arbejdskøretøjet.", VEJ],
    ["BEK nr. 393/2025 § 99: indtil 1. januar 2028 kan afmærkningsflade efter § 24 i BEK nr. 800/2012 fortsat bruges på en mobil afspærring (tavlevogn) erhvervet før 1. januar 2016.", VEJ],
    ["3M Diamond Grade 983: i 55 mm bredde har konturlinjen svejsede kanter (aktiv bredde 50 mm); farver hvid 983-10, gul 983-71 og rød 983-72, rød kun som 55 mm kontur; godkendt efter ECE 104 med nummeret trykt på tapen med ca. 50 cm mellemrum.", M3],
    ["3M Diamond Grade 983: må ikke sættes på nitter, samlinger, svejsninger eller overlappende karrosseriplader og skal holdes nogle millimeter fra dem; kun på plane flader eller enkle kurver med radius på mindst 100 mm, ikke på kugleformede eller komplekse flader; ingen overlap; hjørner afrundes.", M3],
    ["3M Diamond Grade 983: holdbarhed 8 år ved lodret montering efter anvisningerne; rullerne skal bruges inden for et år efter køb; rengøring med svamp, varmt vand og sæbe; ved højtryk mindst 30 cm afstand, vinkel under 45°, højst 80 bar og 60 °C.", M3],
    ["Afspærring.dk laver tavleflader efter mål til tavlevogn eller montering på køretøjer i reflekstype 3, pris efter tilbud.", AFS]
  ]
};
