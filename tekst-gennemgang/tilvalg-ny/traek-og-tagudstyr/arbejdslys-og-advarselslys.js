// Underside /til-varebilen/traek-og-tagudstyr/arbejdslys-og-advarselslys/ (07-10-2026)
var B157 = `https://www.retsinformation.dk/eli/lta/1977/157`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var VEJ = `https://www.retsinformation.dk/eli/lta/2025/393`;
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var GRON = `https://www.fstyr.dk/privat/krav-til-koeretoejer/groenne-opmaerksomhedslygter`;
var VK_BLINK = `https://www.vankompagniet.dk/product-category/blink-og-lys/advarselsblink-og-arbejdslys/`;
var VK_BRO = `https://www.vankompagniet.dk/product-category/blink-og-lys/lysbroer/`;
var VK_P = `https://www.vankompagniet.dk/product/`;

module.exports = {
  id: "traek-og-tagudstyr/arbejdslys-og-advarselslys",
  side: {
    slug: "arbejdslys-og-advarselslys",
    navn: "Arbejdslys og advarselslys",
    titel: "Gult blink og arbejdslys på varebil: regler",
    kort: `Hvornår gult blink og rotorlys må bruges, hvilke godkendelser lygten skal have, og hvad reglerne og priserne er for arbejdslygter, LED-bar og søgelygter.`,
    beskrivelse: `Hvornår en varebil må bruge gult blink, krav til afmærkningslygter efter FN-regulativ 65, regler for arbejdslys, LED-bar og søgelygter, og priser.`,
    manchet: `En varebil må have gule afmærkningslygter, men de må kun bruges i bestemte situationer, typisk når bilen holder stille under arbejde på vej. Arbejdslygter skal lyse nedad og må kun kunne tændes med bilens lygter. Her er reglerne fra bekendtgørelsen om afmærkningslygter og detailforskrifterne.`,
    visuel: {
      hero: "traek-og-tagudstyr",
      kort_fortalt: [
        ["Gult blink ved almindelig kørsel", "Nej", "kun i bestemte situationer"],
        ["Blinkfrekvens", "60–240 blink", "pr. minut, gult lys"],
        ["Lygtebøjle", "mindst 2,00 m", "over vejen, også bøjlens laveste del"],
        ["Tagblink, VanKompagniet", "fra 795 kr.", "uden montering"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvornår gult blink må bruges",
        tekst: [
          `I reglerne hedder et gult blink en afmærkningslygte. Hvornår lygten må være tændt, står i en bekendtgørelse fra 1977 med senere ændringer, mens kravene til selve lygten står i detailforskrifterne for køretøjer.`,
          `Udgangspunktet er, at lygten kun må bruges i de situationer, tabellen viser. Al anden brug er forbudt, medmindre politiet giver tilladelse i særlige tilfælde. Det gælder også, selvom lygten sidder fast på bilen.`
        ],
        tabel: {
          kolonner: ["Situation", "Regel"],
          raekker: [
            ["Bil holder stille ved arbejdsstedet under arbejde på vej, og advarsel er nødvendig", "Må bruges"],
            ["Bil, der er særligt indrettet til vejarbejde, kører i strid med færdselsreglerne eller til fare", "Må bruges"],
            ["Bil med kranbjælke eller lignende, der rager mere end 2 m frem", "Skal bruges"],
            ["Slæbning af havareret køretøj bort fra motorvej", "Skal bruges"],
            ["Al anden brug", "Forbudt. Politiet kan give tilladelse i særlige tilfælde"]
          ],
          note: `Kilde: <a href="${B157}" rel="noopener">BEK nr. 157 af 22/04/1977 om anvendelse af afmærkningslygte (gult blinklys)</a> som ændret ved <a href="https://www.retsinformation.dk/eli/lta/1978/105" rel="noopener">BEK nr. 105 af 21/03/1978</a>, <a href="https://www.retsinformation.dk/eli/lta/1979/77" rel="noopener">BEK nr. 77 af 05/03/1979</a> og <a href="https://www.retsinformation.dk/eli/lta/1984/147" rel="noopener">BEK nr. 147 af 09/04/1984</a>, set den 4. oktober 2026.`
        },
        efter: [
          "Overtrædelse straffes med bøde."
        ]
      },
      {
        overskrift: "Hvad der tæller som vejarbejde",
        tekst: [
          `Bekendtgørelsen om afmærkning af vejarbejder fra 2025 definerer vejarbejde bredt. Det omfatter anlæg og vedligeholdelse af vejen og dens udstyr og arbejde med ledninger eller anden infrastruktur over, på eller i vejens areal. Efter den definition kan en elektriker eller kloakmester, der arbejder med ledninger i vejen, udføre vejarbejde.`,
          `Kørende vejarbejde er arbejde, der udføres fra et køretøj, enten mens det kører fremad hele tiden eller med korte stop. Akutte trafikfarlige hændelser og reparation eller fjernelse af havarerede køretøjer regnes ikke som vejarbejde i den bekendtgørelse.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 278" role="img" aria-label="Beslutningstræ for afmærkningslygten. Den må bruges, når bilen holder stille ved arbejde på vej, og advarslen er nødvendig, eller når en bil til vejarbejde kører i strid med færdselsreglerne eller til fare. Den skal bruges, når en kranbjælke rager over 2 m frem, og ved slæb bort fra motorvej. Ellers er den forbudt uden politiets tilladelse."><defs><marker id="pil-lys-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="8" y="8" width="236" height="44"/><text x="126" y="26" text-anchor="middle">Holder bilen stille ved arbejde</text><text x="126" y="42" text-anchor="middle">på vej, og er advarsel nødvendig?</text><rect class="tg-modul" x="284" y="14" width="111" height="32"/><text class="tg-modul__tekst" x="339" y="34" text-anchor="middle">MÅ BRUGES</text><rect class="tg-kasse" x="8" y="76" width="236" height="58"/><text x="126" y="94" text-anchor="middle">Særligt indrettet til vejarbejde</text><text x="126" y="108" text-anchor="middle">og kører i strid med reglerne</text><text x="126" y="122" text-anchor="middle">eller til fare?</text><rect class="tg-modul" x="284" y="89" width="111" height="32"/><text class="tg-modul__tekst" x="339" y="109" text-anchor="middle">MÅ BRUGES</text><rect class="tg-kasse" x="8" y="158" width="236" height="44"/><text x="126" y="176" text-anchor="middle">Kranbjælke over 2 m frem, eller</text><text x="126" y="192" text-anchor="middle">slæb bort fra motorvej?</text><rect class="tg-kuffert" x="284" y="164" width="111" height="32"/><text class="tg-modul__tekst" x="339" y="184" text-anchor="middle">SKAL BRUGES</text><rect class="tg-kasse" x="8" y="226" width="387" height="44"/><text class="tg-fremhaev" x="201" y="244" text-anchor="middle">Forbudt</text><text x="201" y="260" text-anchor="middle">Politiet kan give tilladelse i særlige tilfælde</text><g class="tg-maal"><line x1="244" y1="30" x2="282" y2="30" marker-end="url(#pil-lys-2)"/><line x1="244" y1="105" x2="282" y2="105" marker-end="url(#pil-lys-2)"/><line x1="244" y1="180" x2="282" y2="180" marker-end="url(#pil-lys-2)"/><line x1="126" y1="52" x2="126" y2="74" marker-end="url(#pil-lys-2)"/><line x1="126" y1="134" x2="126" y2="156" marker-end="url(#pil-lys-2)"/><line x1="126" y1="202" x2="126" y2="224" marker-end="url(#pil-lys-2)"/></g><text class="tg-lille" x="263" y="24" text-anchor="middle">JA</text><text class="tg-lille" x="263" y="99" text-anchor="middle">JA</text><text class="tg-lille" x="263" y="174" text-anchor="middle">JA</text><text class="tg-lille" x="134" y="67">NEJ</text><text class="tg-lille" x="134" y="149">NEJ</text><text class="tg-lille" x="134" y="217">NEJ</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${B157}" rel="noopener">BEK nr. 157 af 22/04/1977 om anvendelse af afmærkningslygte</a> med senere ændringer, set den 4. oktober 2026. Definitionerne i teksten er fra <a href="${VEJ}" rel="noopener">BEK nr. 393 af 14/04/2025, § 2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Krav til afmærkningslygten",
        tekst: [
          `Detailforskrifterne stiller fire krav til selve lygten. De gælder, uanset om lygten roterer eller blinker med LED, og uanset om den sidder på taget, i kølergrillen eller i kofangeren.`
        ],
        punkter: [
          "Gult lys.",
          "Synlig fra alle sider og mindst 5° under vandret. Flere lygter, der tilsammen ses fra alle sider, skal have samme kontakt.",
          "60–240 blink pr. minut.",
          "Godkendt og mærket efter FN-regulativ 65."
        ],
        efter: [
          "En bil må efter detailforskrifterne være forsynet med afmærkningslygter. På biler, der er registreret første gang før 1. juli 2025, kan lygten i stedet være godkendt efter en tidligere ordning, fx af Justitsministeriet, svenske Transportstyrelsen eller tyske Kraftfahrt-Bundesamt."
        ]
      },
      {
        overskrift: "To godkendelser: R65 og R10",
        tekst: [
          `Et gult blink skal leve op til to forskellige regulativer. FN-regulativ 65 er kravet til selve afmærkningslygten. Desuden skal elektrisk udstyr, der monteres på en bil, være godkendt efter FN-regulativ 10-05 om elektromagnetisk kompatibilitet eller opfylde reglerne om radioudstyr og elektromagnetiske forhold.`,
          `Elektromagnetisk kompatibilitet betyder, at udstyret ikke forstyrrer bilens elektronik og ikke selv bliver forstyrret af den. På produktsiderne står de to godkendelser ofte som R65 og R10.`,
          `VanKompagniets produktsider nævner forskellige godkendelser. Nogle nævner R65, flere nævner kun R10, og en enkelt nævner ingen af dem.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Lygte hos VanKompagniet", "R65 nævnt", "R10 nævnt"],
          raekker: [
            ["LED Flash Blink 6 x 3 W, planmontage", "ja", "ikke nævnt"],
            ["VK Tagblink, klart glas, Ø112 mm", "ja", "ja"],
            ["Tagblink, klart glas, Ø175 mm", "ikke nævnt", "ja"],
            ["VK LED Flash Blink, 3 LED", "ikke nævnt", "ja"],
            ["VK LED Lysbro 1.067 mm", "ikke nævnt", "ja"],
            ["Tagblink, gult glas, Ø112 mm", "ikke nævnt", "ikke nævnt"]
          ],
          note: `Tabellen viser, hvad produktsiderne nævner. At en godkendelse ikke er nævnt, betyder ikke, at lygten ikke har den. Kilder: <a href="${VK_BLINK}" rel="noopener">VanKompagniet, advarselsblink og arbejdslys</a> og <a href="${VK_BRO}" rel="noopener">lysbroer</a>, set den 7. oktober 2026, og <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 6.01.002 og 6.04.005</a>.`
        }
      },
      {
        overskrift: "Rotorblink og LED-blink",
        tekst: [
          "Reglerne skelner ikke mellem roterende og blinkende LED-lygter. Begge er afmærkningslygter og skal opfylde kravene til farve, blinkfrekvens, synlighed og godkendelse.",
          `LED-blinkene kan ofte stilles til forskellige blinkmønstre. VanKompagniets planmonterede VK-blink har 26 mønstre og er kun 6,6 mm høje, og flere af blinkene har natsænkning.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Krav", "Roterende lygte", "Blinkende LED-lygte"],
          raekker: [
            ["Gult lys", "ja", "ja"],
            ["60–240 blink pr. minut", "ja", "ja"],
            ["Synlig fra alle sider", "ja", "ja"],
            ["Godkendt og mærket efter FN-regulativ 65", "ja", "ja"]
          ],
          note: "Begge typer er afmærkningslygter, og reglerne stiller de samme krav til dem."
        }
      },
      {
        overskrift: "Bagdøre, der dækker baglygterne",
        tekst: [
          "Dækker åbne bagdøre, bagklap eller lignende en påbudt baglygte med mere end 50 % set lige bagfra, skal bilen have en afmærkningslygte. I førerhuset skal der sidde et synligt skilt med teksten »Ved åbning af bagdøre, bagklap og lignende skal andre trafikanter advares med en gul afmærkningslygte«.",
          `Her er afmærkningslygten et krav og ikke kun en mulighed. Det er lygternes placering på den konkrete bil og bagdørenes åbning, der afgør, om reglen gælder.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Varebil set ovenfra med åbne bagdøre, der set lige bagfra dækker mere end halvdelen af baglygterne. Så skal bilen have en afmærkningslygte og et skilt i førerhuset."><defs><marker id="pil-lys-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-rum" x="150" y="50" width="230" height="100" rx="8"/><line class="tg-skillevaeg" x1="330" y1="50" x2="330" y2="150"/><rect class="tg-modul" x="146" y="52" width="6" height="16"/><rect class="tg-modul" x="146" y="132" width="6" height="16"/><line class="tg-doer" x1="150" y1="50" x2="104" y2="70"/><line class="tg-doer" x1="150" y1="150" x2="104" y2="130"/><circle class="tg-kuffert" cx="262" cy="100" r="9"/><line class="tg-pil" x1="20" y1="60" x2="100" y2="60" marker-end="url(#pil-lys-3)"/><line class="tg-pil" x1="20" y1="140" x2="100" y2="140" marker-end="url(#pil-lys-3)"/><text class="tg-lille" x="20" y="104">SET LIGE</text><text class="tg-lille" x="20" y="118">BAGFRA</text><g class="tg-call"><line x1="148" y1="142" x2="96" y2="176"/><circle cx="148" cy="142" r="3"/><text class="tg-call__navn" x="10" y="190">Baglygte dækket</text><text class="tg-call__under" x="10" y="204">over 50 % set bagfra</text></g><g class="tg-call"><line x1="262" y1="109" x2="262" y2="176"/><circle cx="262" cy="109" r="3"/><text class="tg-call__navn" x="228" y="190">Afmærkningslygte</text><text class="tg-call__under" x="228" y="204">og skilt i førerhuset</text></g><text class="tg-lille" x="150" y="34">SET OVENFRA · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Hvor meget dørene dækker, afhænger af bilen og af, hvor langt dørene åbnes. Kilde: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 6.03.003, stk. 3</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Arbejdslys",
        tekst: [
          `En arbejdslygte skal oplyse arbejdsområdet tæt på bilen, fx når der læsses af om aftenen eller arbejdes ved en brønd. Bilen må have en eller flere arbejdslygter.`,
          `Kravet om markeringslys betyder, at arbejdslyset på en bil, der er registreret fra den 1. juli 2025, ikke må kunne tændes, mens bilens lys er slukket.`
        ],
        punkter: [
          "<strong>Formål.</strong> At oplyse et arbejdsområde tæt på bilen.",
          "<strong>Farve.</strong> Hvidt eller selektivt gult lys.",
          "<strong>Mærkning.</strong> Funktionsmærket som baklygte eller manøvreringslygte eller uden funktionsmærkning.",
          "<strong>Retning.</strong> Lyskeglen rettet nedad, så den ikke blænder.",
          "<strong>Tænding.</strong> Arbejdslygter må kun kunne tændes, når bilens påbudte markeringslygter er tændt. Reglen gælder ikke køretøjer fra før 1. juli 2025."
        ],
        efter: [
          "En bil må have en eller flere arbejdslygter."
        ]
      },
      {
        overskrift: "Lygternes regler side om side",
        tekst: [
          `Arbejdslygte, manøvreringslygte, søgelygte og baklygte er fire forskellige lygter med hver sine regler. Forskellen er især, hvor mange bilen må have, og hvornår de må kunne tændes.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Lygte", "Farve", "Antal", "Tænding"],
          raekker: [
            ["Arbejdslygte", "Hvid eller selektiv gul", "En eller flere", "Kun med markeringslys"],
            ["Manøvreringslygte", "Hvid", "En eller to", "Kun med fjern- eller nærlys"],
            ["Søgelygte", "Hvid", "En", "Kun med markeringslys"],
            ["Baklygte", "Hvid", "En eller to", "Bakgear eller speedometerkontakt"]
          ],
          note: `Manøvrerings- og søgelygter slukker automatisk over 15 km/t. Kravet om markeringslys gælder ikke arbejds- og søgelygter på køretøjer fra før 1. juli 2025. Kilde: detailforskrifterne pkt. 6.02.001, 6.02.005–6.02.008 og 6.02.020, <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025</a>.`
        }
      },
      {
        overskrift: "Manøvreringslygter",
        tekst: [
          "En manøvreringslygte giver ekstra lys til siden under langsomme manøvrer. En bil må have én i hver side."
        ],
        punkter: [
          "Lygten skal give hvidt lys og være godkendt og mærket efter FN-regulativ 23 eller 148.",
          "Den må kun kunne tændes, når fjern- eller nærlys er tændt.",
          "Den slukker automatisk over 15 km/t, uanset kontaktens stilling."
        ]
      },
      {
        overskrift: "R23 og R10 på arbejdslygter",
        tekst: [
          `VanKompagniet sælger to LED-arbejdslygter, der ifølge produktsiderne er R23-godkendt, til 495 kr. hver. Den ene lyser med 1.100 lumen og er IP68, og den anden er oval og lyser med 1.000 lumen. FN-regulativ 23 er også et af de regulativer, en manøvreringslygte skal være godkendt efter.`,
          `Arbejdslampen på 45 grader til siden af bilen lyser med 1.994 lumen og er ifølge VanKompagniet IP67 og ECE R10-godkendt. En arbejdslygte må efter detailforskrifterne godt være uden funktionsmærkning, men den skal lyse nedad.`
        ]
      },
      {
        overskrift: "LED-bar og ekstra fjernlys",
        tekst: [
          `Ekstra fjernlys, fx en LED-bar eller runde fjernlys foran på bilen, skal holde sig inden for reglerne for fjernlyslygter. VanKompagniet skriver på siden om Optibeam Operator 7″, at der højst må være 6 fjernlyslygter på en bil, og lygten kan stilles til gult eller hvidt markeringslys.`,
          `Færdselsloven siger, hvornår fjernlyset må bruges. Det må ikke bruges, hvor vejen er tilstrækkeligt oplyst, ved møde med andre køretøjer, hvor føreren kan blændes, eller bag et andet køretøj, hvis den forankørende kan blændes.`
        ],
        punkter: [
          "En bil må have fire eller seks fjernlyslygter, men højst fire må kunne tændes samtidig.",
          "Fjernlys må kun tændes samtidigt eller parvis og skal slukke samtidigt ved nedblænding.",
          "Den samlede lysstyrke for fjernlys, der kan lyse samtidig, må højst være 430.000 cd.",
          "Fjernlys skal være tilsluttet kontrollampe ved førerpladsen.",
          "Lygter i et lygtepar skal være ens og sidde symmetrisk i samme højde."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Fjernlyslygter på bilen", "4 eller 6", ""],
            ["Tændt på samme tid", "højst 4", "lygter"],
            ["Samlet lysstyrke", "højst 430.000", "cd"]
          ],
          note: `Kilder: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 6.02.001, 6.02.002 og 6.02.020</a> og <a href="${FL}" rel="noopener">færdselsloven, § 33</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Højder på bilen",
        tekst: [
          `Lygternes højde måles ved bilens tjenestevægt uden fører, fra vejen til lysåbningens over- og underkant. En påbudt baglygte skal sidde 0,35–1,50 m over vejen, eller op til 2,10 m, hvis karrosseriets form gør det nødvendigt, og den skal kunne ses 300 m bagud.`
        ],
        punkter: [
          "<strong>Baklygte.</strong> Den skal sidde bag på bilen, 0,25–1,20 m over vejen, så den belyser vejen bagved.",
          "<strong>Lygtebøjle.</strong> Bøjlen skal sidde mindst 2,00 m over vejen, og ingen del af den må være lavere.",
          "<strong>Frontbøjle.</strong> På en varebil skal safarigitter og frontbøjle være godkendt, mærket og monteret efter forordning 2021/535/EU, bilag XII."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil set fra siden med lygtebøjle over 2,00 meter, afmærkningslygte på taget, arbejdslygte med lyskeglen nedad og baklygte mellem 0,25 og 1,20 meter over vejen"><defs><marker id="pil-lys-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<path class="tg-profil" d="M40,196 L40,150 Q42,140 66,136 L106,74 Q110,66 120,66 L344,66 Q352,66 352,74 L352,196 Z"/><path class="tg-kasse" d="M112,74 L146,74 L146,120 L84,124 Z"/><circle class="tg-hylde" cx="96" cy="198" r="16"/><circle class="tg-hylde" cx="296" cy="198" r="16"/><line class="tg-gulvlinje" x1="16" y1="214" x2="388" y2="214"/>
<line class="tg-skinne-tynd" x1="16" y1="94" x2="388" y2="94"/><text class="tg-lille" x="18" y="90">2,00 M</text>
<rect class="tg-modul" x="112" y="56" width="50" height="6"/><rect class="tg-kuffert" x="220" y="54" width="18" height="12"/>
<rect class="tg-kasse" x="208" y="70" width="10" height="8"/><path class="tg-skinne-tynd" fill="none" d="M213,78 L183,170 L243,170 Z"/>
<rect class="tg-modul" x="352" y="142" width="8" height="57"/>
<g class="tg-maal"><line x1="378" y1="214" x2="378" y2="142" marker-start="url(#pil-lys-1)" marker-end="url(#pil-lys-1)"/><text x="346" y="168" text-anchor="end">0,25–1,20 m</text></g>
<g class="tg-call"><line x1="137" y1="59" x2="110" y2="36"/><circle cx="137" cy="59" r="3"/><text class="tg-call__navn" x="16" y="22">Lygtebøjle</text><text class="tg-call__under" x="16" y="36">Ingen del under 2,00 m</text></g><g class="tg-call"><line x1="229" y1="54" x2="229" y2="36"/><circle cx="229" cy="54" r="3"/><text class="tg-call__navn" x="180" y="22">Afmærkningslygte</text><text class="tg-call__under" x="180" y="36">Gul, 60–240 blink i minuttet</text></g>
<text x="16" y="232">Arbejdslys: lyskegle nedad · Baklygte: hvid</text><text class="tg-lille" x="16" y="247">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: "Skematisk. Højderne er fra detailforskrifterne pkt. 6.02.005 og 9.06.005 og blinkfrekvensen fra pkt. 6.04.005. En lygtes højde måles ved tjenestevægt uden fører."
        }
      },
      {
        overskrift: "Søgelygte",
        tekst: [
          "En bil må have én søgelygte. Den skal afgive hvidt lys, være funktionsmærket som fjern-, nær- eller tågelygte, kunne bevæges af føreren og slukke automatisk over 15 km/t.",
          `Reglerne for søgelygter og arbejdslygter blev strammet for biler, der er registreret første gang fra den 1. juli 2025. VanKompagniets søgelygte med fjernbetjening kan dreje 360 grader, lyser med 2.400 lumen og koster 6.995 kr. Produktsiden nævner IP-klasser og ECE R10, men ikke funktionsmærkning.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Biler fra før 1. juli 2025", "Arbejdslygter og søgelygter må kunne tændes uden markeringslys. Søgelygten må give gulligt lys og være uden funktionsmærkning, og den behøver ikke slukke automatisk."],
            ["Biler fra 1. juli 2025", "Arbejdslygter og søgelygter må kun kunne tændes med markeringslys. Søgelygten skal give hvidt lys, være funktionsmærket og slukke automatisk over 15 km/t."],
            ["Afmærkningslygten", "På biler fra 1. juli 2025 skal den være godkendt og mærket efter FN-regulativ 65. Ældre biler kan have lygter med en tidligere godkendelse."]
          ],
          note: `Datoerne gælder den dato, bilen er registreret første gang. Kilde: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 1.01.006, 6.02.001, 6.02.006 og 6.04.005</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lys, når bilen holder stille",
        tekst: [
          `Holder en bil parkeret på vejen i lygtetændingstiden, skal positionslys, baglygter og nummerpladelys være tændt. Færdselsloven siger, at andre lygter ikke må holdes tændt, medmindre transportministeren har fastsat regler om det.`,
          `Færdselsloven siger også, at hjælpelygter ikke må bruges til andet end det, lygten er beregnet til, og at lygter ikke må bruges, så andre førere kan blændes. En arbejdslygte er efter detailforskrifterne beregnet til at oplyse et arbejdsområde tæt på bilen.`
        ],
        efter: [
          `Kilde: <a href="${FL}" rel="noopener">færdselsloven, §§ 33 og 35</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Strøm og betjening",
        tekst: [
          `Detailforskrifterne kræver en sikring i kredsløbet, når der monteres elektrisk ekstraudstyr. Ledningerne skal være velisolerede og fastgjort, og hvor en ledning går gennem et hul i en metalplade, skal hullet have en gummigennemføring.`,
          `VanKompagniets blinkpakker har en knap i kabinen, og pakken til Sprinter bruger bilens originale knap. Har bilen mange blink og lygter, sælger VanKompagniet et programmerbart betjeningspanel med 8 knapper og 35 ikoner til 2.295 kr.`
        ],
        efter: [
          `Kilder: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 6.01.001</a> og <a href="${VK_BLINK}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Blinkende kryds og pil ved vejarbejde",
        tekst: [
          "Ved vejarbejde skal gult blinkende kryds eller pil på et køretøj sidde på matsort bund mindst 1,5 m over terræn. Størrelsen er 100 x 100 cm på en flade på 105 x 105 cm, eller 75 x 75 cm på 80 x 80 cm, hvor den store plade ikke kan monteres. Mere om afmærkning i <a href=\"/til-varebilen/folie/refleks-og-konturmarkering/\">refleks og konturmarkering</a>.",
          `Højden måles til underkanten af lysåbningen på de laveste blink i krydset eller pilen. Lysåbningen skal være på mindst 250 cm² på den store plade og 140–150 cm² på den lille. Bekendtgørelsen trådte i kraft den 1. juli 2025.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="To plader med blinkende kryds: 100 x 100 cm på en flade på 105 x 105 cm og 75 x 75 cm på 80 x 80 cm. Pladerne skal sidde mindst 1,5 m over terræn"><defs><marker id="pil-kryds-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="92.5" y="18" text-anchor="middle">Kryds 100 × 100 cm</text><text class="tg-lille" x="92.5" y="34" text-anchor="middle">FLADE 105 × 105 CM</text><text class="tg-fremhaev" x="240" y="18" text-anchor="middle">Kryds 75 × 75 cm</text><text class="tg-lille" x="240" y="34" text-anchor="middle">FLADE 80 × 80 CM</text><rect class="tg-hylde" x="40" y="44" width="105" height="105"/><line class="tg-doer" x1="42.5" y1="46.5" x2="142.5" y2="146.5"/><line class="tg-doer" x1="142.5" y1="46.5" x2="42.5" y2="146.5"/><rect class="tg-hylde" x="200" y="69" width="80" height="80"/><line class="tg-doer" x1="202.5" y1="71.5" x2="277.5" y2="146.5"/><line class="tg-doer" x1="277.5" y1="71.5" x2="202.5" y2="146.5"/><line class="tg-skinne-tynd" x1="40" y1="149" x2="320" y2="149"/><line class="tg-pil" x1="312" y1="149" x2="312" y2="210" marker-start="url(#pil-kryds-1)" marker-end="url(#pil-kryds-1)"/><text x="318" y="184">mindst 1,5 m</text><line class="tg-gulvlinje" x1="20" y1="210" x2="380" y2="210"/><text class="tg-lille" x="20" y="226">MATSORT BUND · HØJDEN ER IKKE MÅLFAST</text></svg>`,
          tekst: `Tegningen er skematisk og viser de to størrelser af blinkende kryds. Den lille plade bruges, hvor den store ikke kan monteres. Pladerne er tegnet i samme målestok, men højden over terræn er ikke målfast. Kilde: <a href="${VEJ}" rel="noopener">BEK nr. 393 af 14/04/2025, § 96</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Grønne opmærksomhedslygter",
        tekst: [
          "Grønt blink er en forsøgsordning, der begyndte den 1. marts 2025 og blev udvidet den 1. februar 2026. Det må kun bruges under en livreddende opgave for en statslig redningstjeneste eller for en frivillig organisation eller ordning, der står i bekendtgørelsens bilag eller er godkendt af Færdselsstyrelsen. Ordningen gælder person- og varebiler op til 3.500 kg, og føreren skal have dokumentation for opgaven med.",
          `Bilaget nævner regionernes 1-1-2-akuthjælperordninger, TrygFonden Hjerteløber og Kystredningstjenesten. Andre ordninger kan søge Færdselsstyrelsen om at komme med. Andre trafikanter har ingen pligter over for en bil med grønt blink, og lygten må ikke virke direkte blændende.`
        ],
        punkter: [
          "Lygten skal blinke 60–240 gange i minuttet.",
          "Den skal være anbragt på taget, men ikke fastmonteret.",
          "Den skal opfylde FN-regulativ 10.",
          "Den giver ingen særlige rettigheder i trafikken."
        ],
        efter: [
          `Kilde: <a href="${GRON}" rel="noopener">Færdselsstyrelsen, grønne opmærksomhedslygter</a>, set den 7. oktober 2026.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["1. marts 2025", "Forsøgsordningen med grønt blink begynder."],
            ["22. januar 2026", "Bekendtgørelsen med bilaget over ordningerne træder i kraft."],
            ["1. februar 2026", "Ordningen bliver udvidet."]
          ],
          note: `Kilde: <a href="${GRON}" rel="noopener">Færdselsstyrelsen, grønne opmærksomhedslygter</a>, set den 4. oktober 2026 og den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Blink på tagbøjlerne",
        tekst: [
          "Har bilen tagbøjler, kan blinket sidde på en plade, der monteres på bøjlerne. VanKompagniet sælger Rhinos holder til 895 kr. Den vejer 3 kg.",
          `Et tagblink med magnetfod og 2,5 m ledning til cigarstikket koster 1.695 kr. og kan tages af, når det ikke bruges. Mere om bøjlerne i <a href="/til-varebilen/traek-og-tagudstyr/tagboejler-og-tagreling/">tagbøjler og tagreling</a>.`
        ]
      },
      {
        overskrift: "Priser",
        tekst: [
          `VanKompagniet sælger både enkelte lygter og færdige pakker med montering. Pakkerne har to blink i kølergrillen og to i bagkofangeren, og de dyrere pakker har også blink på taget, på siden eller en lysbro på taget. VanKompagniets priser er uden moms.`,
          `De enkelte lygter er uden montering. Pakken med lysbro på taget koster 19.995 kr. Lysbroerne findes i flere bredder, og den på 1.067 mm vejer 5 kg.`
        ],
        tabel: {
          kolonner: ["Produkt", "Fra"],
          raekker: [
            ["Arbejdslampe 45°, hvid", "495 kr."],
            ["VK LED arbejds- og baklygte, R23", "495 kr."],
            ["LED-blink 6 x 3 W", "695 kr."],
            ["Tagblink, gult glas, Ø112 mm", "795 kr."],
            ["Tagblink med magnetfod, Ø110 mm", "1.695 kr."],
            ["Fjernlys Optibeam Operator 7″", "2.395 kr."],
            ["LED-lysbro 380 mm med magnetfod", "2.895 kr."],
            ["LED-lysbro 1.067 mm", "7.495 kr."]
          ],
          note: `Kilder: <a href="${VK_BLINK}" rel="noopener">VanKompagniet, advarselsblink og arbejdslys</a> og <a href="${VK_BRO}" rel="noopener">VanKompagniet, lysbroer</a>, vejledende priser uden montering, set den 4. oktober 2026 og den 7. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Blinkpakke 1: 2 for og 2 bag, små og mellem varebiler", 9995, "med montering"],
            ["Blinkpakke 3: 2 for og 2 bag, store varebiler", 10995, "med montering"],
            ["Blinkpakke 5: 2 for, 2 bag og 2 på siden", 11995, "med montering"],
            ["Blinkpakke 2: som pakke 1 plus 2 på taget", 12995, "med montering"],
            ["Blinkpakke 4: som pakke 3 plus 2 på taget", 13995, "med montering"],
            ["Lysbropakke: lysbro på tag, 2 for, 2 bag", 19995, "med montering"]
          ],
          note: `Kilder: <a href="${VK_BLINK}" rel="noopener">VanKompagniet, advarselsblink og arbejdslys</a> og <a href="${VK_BRO}" rel="noopener">VanKompagniet, lysbroer</a>, vejledende priser, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så opfylder lygterne detailforskrifterne fra start.",
    spoergsmaal: [
      "Hvad bilen bruges til, fx vejarbejde, vejhjælp eller service.",
      "Om blinket skal ses fra alle sider.",
      "Om lygterne skal være godkendt efter FN-regulativ 65.",
      "Hvor arbejdslyset skal lyse: bag, side eller varerum.",
      "Om bagdørene dækker baglygterne, når de er åbne.",
      "Om bilen er leaset, og om der må bores i taget."
    ],
    faq: [
      ["Må en håndværker køre med gult blink?", "Nej, ikke under almindelig kørsel. Blinket må bruges, når bilen under arbejde på vej holder stille ved arbejdsstedet, og advarslen er nødvendig. Anden brug kræver politiets tilladelse."],
      ["Må gult blink sidde på bilen under kørsel?", "Ja. En bil må være forsynet med afmærkningslygter. Reglerne begrænser, hvornår de må være tændt."],
      ["Hvilken godkendelse skal et gult blink have?", "Det skal være godkendt og mærket efter FN-regulativ 65, give gult lys og blinke 60–240 gange i minuttet. Som andet elektrisk udstyr skal det også opfylde kravene til elektromagnetisk kompatibilitet, fx FN-regulativ 10-05."],
      ["Hvornår skal en varebil have gult blink?", "Når åbne bagdøre eller en bagklap dækker en påbudt baglygte med mere end 50 % set lige bagfra. Så skal der også sidde et skilt i førerhuset om at advare andre trafikanter."],
      ["Må man have LED-bar på en varebil?", "En bil må have fire eller seks fjernlyslygter, hvis højst fire kan tændes samtidig, og den samlede lysstyrke højst er 430.000 cd."],
      ["Hvornår må arbejdslys være tændt?", "Arbejdslygter skal lyse nedad, så de ikke blænder. På køretøjer fra 1. juli 2025 må de kun kunne tændes, når bilens markeringslygter er tændt."],
      ["Hvad koster gult blink til en varebil?", "Fra 795 kr. for et tagblink og 9.995 kr. for en monteret blinkpakke med fire blink hos VanKompagniet (oktober 2026)."],
      ["Må en håndværker have grønt blink på varebilen?", "Kun under en livreddende opgave for en ordning, der er omfattet af forsøgsordningen, fx regionernes 1-1-2-akuthjælperordninger eller TrygFonden Hjerteløber. Lygterne giver ingen særlige rettigheder i trafikken."],
      ["Hvor mange baklygter må en varebil have?", "En eller to. De skal give hvidt lys og sidde 0,25–1,20 m over vejen."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om anvendelse af afmærkningslygte (gult blinklys) (BEK nr. 157 af 22/04/1977)", url: B157, dato: "2026-10-04" },
      { navn: "Retsinformation: Ændring af bekendtgørelse om anvendelse af afmærkningslygte (BEK nr. 105 af 21/03/1978)", url: "https://www.retsinformation.dk/eli/lta/1978/105", dato: "2026-10-04" },
      { navn: "Retsinformation: Ændring af bekendtgørelse om anvendelse af afmærkningslygte (BEK nr. 77 af 05/03/1979)", url: "https://www.retsinformation.dk/eli/lta/1979/77", dato: "2026-10-04" },
      { navn: "Retsinformation: Ændring af bekendtgørelse om anvendelse af afmærkningslygte (BEK nr. 147 af 09/04/1984)", url: "https://www.retsinformation.dk/eli/lta/1984/147", dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), pkt. 1.01.006, 6.01, 6.02, 6.03 og 6.04", url: DETAIL, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om afmærkning af vejarbejder m.v. (BEK nr. 393 af 14/04/2025), §§ 2, 96 og 98", url: VEJ, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven (LBK nr. 118 af 12/01/2026), §§ 33 og 35", url: FL, dato: "2026-10-07" },
      { navn: "VanKompagniet: Advarselsblink og arbejdslys", url: VK_BLINK, dato: "2026-10-07" },
      { navn: "VanKompagniet: Lysbroer", url: VK_BRO, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Grønne opmærksomhedslygter", url: GRON, dato: "2026-10-07" },
      { navn: "VanKompagniet: Rhino holder til blink på tagbøjler", url: "https://www.vankompagniet.dk/product/holder-til-blitz-blink-pa-vk-tagbojler/", dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: Overgangsreglen 'Før 01.07.25' for afmærkningslygtens godkendelse gælder køretøjer, der er registreret, godkendt eller taget i brug første gang før den dato (pkt. 1.01.006), ikke lygter fra før den dato, som den gamle side skrev.", DETAIL],
    ["BEK 393/2025 § 2: vejarbejde er arbejder inden for eller uden for vejens areal i forbindelse med anlæg og vedligeholdelse af vejen og dens udstyr samt arbejder i forbindelse med ledninger eller anden infrastruktur over, på eller i vejens areal; akutte trafikfarlige hændelser og reparation eller fjernelse af havarerede køretøjer er ikke vejarbejde; kørende vejarbejde er arbejder fra et køretøj, der bevæger sig kontinuerligt fremad eller fremad med korte stop.", VEJ],
    ["Udstyr, der monteres på køretøj omfattet af forordning 2018/858, skal være godkendt efter FN-regulativ 10-05 om elektromagnetisk kompatibilitet (EMC) eller opfylde bekendtgørelsen om radioudstyr og elektromagnetiske forhold; EMC-relevans betyder, at udstyret kan fremkalde elektromagnetiske forstyrrelser, eller at dets funktion kan blive påvirket af sådanne (pkt. 6.01.002).", DETAIL],
    ["VanKompagniets produktsider: LED Flash Blink 6x3W er 'E6-65R godkendte' (R10 ikke nævnt); VK Tagblink transparent Ø112 er 'IP67, R65 samt R10 godkendt'; Tagblink transparent Ø175, VK LED Flash Blink 3 LED og VK LED Lysbro 1.067 mm nævner ECE R10, men ikke R65; Tagblink gul glas Ø112 nævner ingen godkendelse.", VK_BLINK],
    ["VK LED Flash Blink 3 og 6 LED planmonteret er 6,6 mm høje og har 26 forskellige blinkmønstre; flere af VanKompagniets blink har natsænkning.", VK_P + "vk-blink-med-3-dioder-slim/"],
    ["Påbudt baglygte må ikke kunne dækkes af bagdøre, bagsmæk eller lignende med mere end 50 % set lige bagfra; ellers skal køretøjet have afmærkningslygte og et skilt i førerhuset (pkt. 6.03.003, stk. 3).", DETAIL],
    ["Påbudt baglygte skal være anbragt mindst 0,35 m og højst 1,50 m over vejbanen (op til 2,10 m, hvis karrosseriets form gør det påkrævet) og være tydeligt synlig mindst 300 m bag køretøjet; lygtens højde måles ved tjenestevægt eksklusiv fører til lysåbningens over- og underkant (pkt. 6.03.003 og 6.02.001).", DETAIL],
    ["VanKompagniet: VK Firkantet LED arbejdslampe R23 13W lyser med 1.100 lumen og er IP68 og R23-godkendt; VK LED arbejds/baklygte R23 18W lyser med 1.000 lumen og er R23-godkendt; begge koster 495 kr. ekskl. moms.", VK_P + "arbejdslygte-baklygte-firkantet/"],
    ["VanKompagniet: Arbejdslampe 45 grader lyser med 1.994 lumen og er IP67 og ECE R10-godkendt; 495 kr. ekskl. moms.", VK_P + "arbejdslampe-45-grader-hvid/"],
    ["VanKompagniet skriver på siden om Fjernlys Optibeam Operator 7″, at der maksimalt må være 6 fjernlyslygter på en bil, og at lygten kan indstilles til gult eller hvidt markeringslys; 2.395 kr. ekskl. moms.", VK_P + "fjernlys-optibeam-operator-7/"],
    ["Færdselsloven § 33, stk. 3: fjernlys må ikke anvendes på strækning, hvor vejen er tilstrækkeligt oplyst, ved møde med andet køretøj i en afstand, hvor føreren kan blændes, eller bag et andet køretøj, hvis den forankørende kan blændes.", FL],
    ["VanKompagniets søgelygte LED med fjernbetjening kan dreje 360 grader, lyser med 2.400 lumen (2.436 i titlen), er IP68 (hoved) og IP58 (hus) samt ECE R10-godkendt og koster 6.995 kr. ekskl. moms; produktsiden nævner ikke funktionsmærkning.", VK_P + "soegelygte-med-fjernbetjening/"],
    ["Før 01.07.25 (for køretøjer registreret før denne dato): søgelygte kan afgive gulligt lys, kan være uden funktionsmærkning og skal ikke slukke automatisk over 15 km/t; kravet om, at arbejds- og søgelygter kun kan tændes med markeringslys, gælder ikke (pkt. 6.02.001 og 6.02.006).", DETAIL],
    ["Færdselsloven § 35: er køretøj i lygtetændingstiden standset eller parkeret på vej, skal positionslys, baglygter og nummerpladebelysning holdes tændt; transportministeren kan fastsætte, at andre lygter skal eller kan holdes tændt; andre lygter må ikke holdes tændt. § 33, stk. 5-6: hjælpelygter må ikke anvendes til andet formål end det, hvortil lygten er bestemt, og lygter må ikke anvendes, så andre førere kan blændes.", FL],
    ["Ved montering af elektrisk ekstraudstyr skal der være indskudt sikring i kredsløbet; ledninger skal være velisolerede og fastgjort, og hvor en ledning føres gennem hul i plade af ledende materiale, skal hullet have gummigennemføring (pkt. 6.01.001).", DETAIL],
    ["VanKompagniets blinkpakker har betjening med knap i kabinen (Sprinter-pakken med originalknap); betjeningspanel til blink med 8 knapper er programmerbart, leveres med 35 ikoner og koster 2.295 kr. ekskl. moms.", VK_BLINK],
    ["BEK 393/2025 § 96: gult blinkende kryds eller pil på køretøj skal monteres på matsort bund, mindst 1,5 m over terræn målt til underkant af lysåbning for de lavest placerede blink; 100 cm med lysåbningsareal på mindst 250 cm² på en flade på 105 x 105 cm eller 75 cm med lysåbningsareal på 140–150 cm² på en flade på 80 x 80 cm; bekendtgørelsen trådte i kraft 1. juli 2025 (§ 98).", VEJ],
    ["Færdselsstyrelsen: bilag 1 til bekendtgørelsen om forsøgsordningen med grønne opmærksomhedslygter, der trådte i kraft 22. januar 2026, omfatter Regionernes 1-1-2 Akuthjælperordninger, TrygFonden Hjerteløber og Kystredningstjenesten; andre kan ansøge Færdselsstyrelsen; lygten må ikke virke direkte blændende; øvrige trafikanter har ingen forpligtelser over for køretøjer med grønne lygter.", GRON],
    ["VanKompagniet: Tagblink med magnetfod Ø110 har 2,5 meter ledning og 12 V-stik til cigarettænderstikket; 1.695 kr. ekskl. moms.", VK_P + "led-blink-med-magnetfod-oe110-25-m-ledning-12v-stik/"],
    ["VanKompagniets blinkpakker med montering (ekskl. moms): pakke 1 (2 for, 2 bag, små/mellem) 9.995 kr.; pakke 3 (store varebiler) 10.995 kr.; pakke 5 (2 for, 2 bag, 2 på siden) 11.995 kr.; pakke 2 (+2 på tag, små/mellem) 12.995 kr.; pakke 4 (+2 på tag, store) 13.995 kr.; lysbropakke 1 19.995 kr.; blinkene sidder i frontgrillen og bagkofangeren.", VK_BLINK],
    ["VK LED Lysbro 1.067 mm vejer 5 kg og måler 1.067 x 220 x 87 mm med beslag.", VK_BRO]
  ]
};
