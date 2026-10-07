// Underside /til-varebilen/salg-af-varebil/indfri-leasingaftale/ (07-10-2026)
var N_UDTR = `https://nordania.dk/erhverv/find-hjaelp/opsigelse-indfrielse-og-koebspris/udtraedelse`;
var N_KOEB = `https://nordania.dk/erhverv/find-hjaelp/opsigelse-indfrielse-og-koebspris/soeg-om-koebspris`;
var N_ANV = `https://nordania.dk/erhverv/find-hjaelp/opsigelse-indfrielse-og-koebspris/anvisning-af-koeber-ved-finansielle-aftaler`;
var N_FORH = `https://nordania.dk/erhverv/find-hjaelp/opsigelse-indfrielse-og-koebspris/indfrielse-forholdsmaessig-registreringsafgift`;
var N_AFL = `https://nordania.dk/erhverv/find-hjaelp/aflevering/leaset-bil-hos-nordania`;
var AYV = `https://www.ayvens.com/da-dk/for-foerere/aflevering-af-bil/aflevering-af-din-firmabil/`;
var MST_FORH = `https://motorst.dk/erhverv/leasing/hvad-er-forholdsmaessig-afgift`;
var MST_KRAV = `https://motorst.dk/erhverv/leasing/krav-til-leasingaftalen`;
var SKAT_BIL = `https://skat.dk/erhverv/moms/fradrag-for-moms/udgifter-du-kan-faa-momsfradrag-for/fradrag-for-moms-af-biludgifter`;
var KV_KOB = `https://www.klaravik.dk/kobsvilkar.html`;

module.exports = {
  id: "salg-af-varebil/indfri-leasingaftale",
  side: {
    slug: "indfri-leasingaftale",
    navn: "Indfri leasingaftale",
    titel: "Indfri leasingaftale på varebil før tid",
    kort: `Førtidig udtrædelse af operationel leasing og indfrielse af restværdien på finansiel leasing.`,
    beskrivelse: `Stop leasingaftalen før tid: udtrædelsespris på operationel leasing, købspris på bilen, og hvordan restværdien indfries på finansiel leasing.`,
    manchet: `En leasingaftale kan stoppes før tid, men vejen afhænger af typen. På operationel leasing beregner leasingselskabet en udtrædelsespris. På finansiel leasing indfrier leasingtager altid restværdien, og spørgsmålet er kun, om virksomheden selv køber bilen eller anviser en køber.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Beregning, Nordania", "1.000 kr.", "for en udtrædelses- eller købspris"],
        ["Udtrædelse, Nordania", "3 uger", "før den 1. i en måned"],
        ["Købspris, Ayvens", "Højst 3 måneder", "til ordinært udløb"],
        ["Restværdi på finansiel leasing", "Leasingtager", "indfrier altid restværdien"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det korte svar",
        tekst: [
          `Det første spørgsmål er, hvilken slags leasingaftale virksomheden har. På en operationel aftale bærer leasingselskabet risikoen for bilens værdi, og bilen går tilbage. På en finansiel aftale bærer leasingtager risikoen, og aftalen slutter med, at restværdien bliver betalt.`,
          `Det andet spørgsmål er, hvornår. Leasingselskaberne regner med faste datoer og frister, og en pris gælder kun for den dato, den er beregnet til.`
        ],
        punkter: [
          `<strong>Operationel leasing.</strong> Leasingselskabet beregner en udtrædelsespris ud fra brugtvognsmarkedet, og bilen afleveres.`,
          `<strong>Operationel leasing, købe bilen.</strong> Nogle selskaber beregner en købspris, typisk kun til leasingtager.`,
          `<strong>Finansiel leasing.</strong> Leasingtager indfrier restværdien ved at købe bilen selv eller anvise en køber.`,
          `<strong>Gebyr.</strong> Nordania tager 1.000 kr. for at beregne en udtrædelses- eller købspris.`
        ],
        efter: [
          `Forskellen på de to aftaletyper står i <a href="/haandbogen/finansiel-og-operationel-leasing/">finansiel og operationel leasing</a>. Alle beløb på siden er uden moms.`
        ]
      },
      {
        overskrift: "Køberet og anvisningspligt",
        tekst: [
          `Hvad virksomheden må og skal ved udløbet, står i leasingaftalen. Når en bil leases ud med forholdsmæssig registreringsafgift, kræver Motorstyrelsen, at aftalen oplyser, om der er aftalt køberet, købepligt, anvisningsret eller anvisningspligt, og på hvilke betingelser.`,
          `Køberet betyder, at virksomheden må købe bilen, men ikke skal. Ved købepligt skal den købe. Anvisningsret og anvisningspligt handler om at finde en køber, der betaler leasingselskabet, og køberen kan være virksomheden selv eller en anden.`,
          `Aftalen skal også beskrive vilkårene for at stoppe før tid, herunder ved misligholdelse, og om aftalen kan opsiges i perioden. De punkter afgør, hvilke af vejene nedenfor der er åbne.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Skema med fire felter. Køberet betyder, at I må købe bilen, og købepligt, at I skal. Anvisningsret betyder, at I må finde en køber, og anvisningspligt, at I skal finde en køber, som også kan være jer selv. Feltet med anvisningspligt er fremhævet."><text class="tg-fremhaev" x="181" y="22" text-anchor="middle">Ret</text><text class="tg-fremhaev" x="329" y="22" text-anchor="middle">Pligt</text><text class="tg-fremhaev" x="0" y="70">Købe bilen</text><text x="0" y="86">selv</text><text class="tg-fremhaev" x="0" y="160">Anvise en</text><text class="tg-fremhaev" x="0" y="176">køber</text><rect class="tg-kasse" x="110" y="34" width="142" height="80"/><text class="tg-fremhaev" x="181" y="60" text-anchor="middle">Køberet</text><text x="181" y="80" text-anchor="middle">I må købe bilen,</text><text x="181" y="96" text-anchor="middle">men skal ikke</text><rect class="tg-kasse" x="258" y="34" width="142" height="80"/><text class="tg-fremhaev" x="329" y="60" text-anchor="middle">Købepligt</text><text x="329" y="80" text-anchor="middle">I skal købe</text><text x="329" y="96" text-anchor="middle">bilen</text><rect class="tg-kasse" x="110" y="124" width="142" height="80"/><text class="tg-fremhaev" x="181" y="150" text-anchor="middle">Anvisningsret</text><text x="181" y="170" text-anchor="middle">I må finde en</text><text x="181" y="186" text-anchor="middle">køber, men skal ikke</text><rect class="tg-modul" x="258" y="124" width="142" height="80"/><text class="tg-modul__tekst" x="329" y="150" text-anchor="middle">ANVISNINGSPLIGT</text><text x="329" y="170" text-anchor="middle">I skal finde en</text><text x="329" y="186" text-anchor="middle">køber, evt. jer selv</text><text class="tg-lille" x="0" y="230">AFTALEN SKAL OPLYSE, HVAD DER ER AFTALT</text></svg>`,
          tekst: `Skematisk. Det fremhævede felt svarer til Nordanias finansielle aftaler, hvor leasingtager anviser en køber for at indfri aftalen. Kilder: <a href="${MST_KRAV}" rel="noopener">Motorstyrelsen: Krav til leasingaftalen</a> og <a href="${N_ANV}" rel="noopener">Nordania: Anvisning af køber</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Operationel: udtrædelse",
        tekst: [
          `Vil I aflevere en operationelt leaset bil før tid, beregner leasingselskabet en udtrædelsespris. Prisen bygger på brugtvognsmarkedet, altså på hvad bilen kan sælges for som brugt.`,
          `Derfor kan prisen kun beregnes et kort stykke frem i tiden. Hos Nordania gælder disse regler:`
        ],
        punkter: [
          `Udtrædelsen sker altid den 1. i en måned.`,
          `Forespørgslen skal være modtaget 3 uger før.`,
          `Prisen kan beregnes 2–3 måneder frem, fordi den bygger på brugtvognsmarkedet.`,
          `Beregningen koster 1.000 kr.`,
          `Fleetkunder går gennem virksomhedens bilansvarlige.`,
          `Sagsbehandlingen tager ifølge Nordania fire til fem dage.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["3 uger før udtrædelsen", "Nordania skal have modtaget forespørgslen."],
            ["Fire til fem dage", "Så lang tid tager sagsbehandlingen ifølge Nordania."],
            ["Den 1. i en måned", "Udtrædelsen sker altid den første i en måned, og bilen afleveres."]
          ],
          note: `Nordania kan beregne prisen 2–3 måneder frem, fordi den bygger på brugtvognsmarkedet. Kilde: <a href="${N_UDTR}" rel="noopener">Nordania: udtrædelse</a>, set den 4. oktober 2026.`
        },
        efter: [
          `I formularen vælger du en udtrædelsesdato i indeværende eller den følgende måned og oplyser den forventede kilometerstand på datoen.`
        ]
      },
      {
        overskrift: "Operationel: købe bilen",
        tekst: [
          `Nordania beregner en købspris midt i eller ved udløb af en operationel aftale, hvis bilen er indregistreret før 3. oktober 2017 og aftalen ikke er forlænget. Bilen sælges kun til leasingtager, forespørgslen skal være modtaget seks uger før købsdatoen, og prisen koster 1.000 kr. at få beregnet.`,
          `Nordania skriver, at en privatperson derfor ikke kan købe firmabilen. Beder virksomheden om en købspris, kan Nordania beregne en udtrædelsespris med i samme omgang uden ekstra betaling, så de to kan sammenlignes.`,
          `Ayvens beregner en købspris, når der er 3 måneder eller mindre til ordinært udløb.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Nordania, forespørgsel før købsdatoen", 6, "uger"],
            ["Nordania, beregning af købspris", "1.000", "kr."],
            ["Ayvens, tid til ordinært udløb", "højst 3", "måneder"]
          ],
          note: `Nordania sælger kun til leasingtager og kun biler, der er indregistreret før den 3. oktober 2017. Kilder: <a href="${N_KOEB}" rel="noopener">Nordania: købspris</a> og <a href="${AYV}" rel="noopener">Ayvens</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Finansiel: restværdien indfries",
        tekst: [
          `Restværdien er den del af bilens pris, som leasingydelserne ikke betaler. Beløbet står i aftalen og skal betales, når aftalen slutter.`,
          `På finansiel leasing har aftalen en restværdi, og det er altid leasingtager, der indfrier den, både ved udløb og ved førtidig indfrielse. Restværdien er fastsat i aftalen og følger ikke brugtvognsmarkedet. Er bilen mindre værd end restværdien, er forskellen leasingtagers tab, og er den mere værd, er forskellen leasingtagers gevinst.`,
          `Stopper aftalen før tid, er der betalt færre ydelser, end aftalen regner med. Hvordan beløbet ved førtidig indfrielse beregnes, står i den aftale, I har skrevet under på.`
        ]
      },
      {
        overskrift: "Markedsværdi og restværdi",
        tekst: [
          `Restværdien står i aftalen. Markedsværdien er det, bilen kan sælges for på dagen. Leasingtager indfrier altid restværdien, så forskellen mellem de to er leasingtagers gevinst eller tab, uanset om bilen købes af eget firma eller af en anvist køber.`,
          `Markedsværdien kan du finde på samme måde som ved et almindeligt salg, ved at sammenligne med tilsvarende biler til salg. Fremgangsmåden står i <a href="/til-varebilen/salg-af-varebil/vurdering-af-brugt-varebil/">vurdering af brugt varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="Søjler: markedsværdi over og under restværdien på en finansiel leasingaftale"><defs><marker id="pil-salg-af-varebil-2" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="40" y="90" width="50" height="100"/><rect class="tg-modul" x="110" y="60" width="50" height="130"/><text x="65" y="84" text-anchor="middle">Restværdi</text><text x="135" y="54" text-anchor="middle">Markedsværdi</text><line class="tg-gulvlinje" x1="30" y1="190" x2="215" y2="190"/><line class="tg-skinne-tynd" x1="90" y1="90" x2="176" y2="90"/><g class="tg-maal"><line x1="172" y1="62" x2="172" y2="88" marker-start="url(#pil-salg-af-varebil-2)" marker-end="url(#pil-salg-af-varebil-2)"/><text x="178" y="79" class="tg-fremhaev">Gevinst</text></g><text x="120" y="212" class="tg-fremhaev" text-anchor="middle">Markedsværdi over restværdi</text><rect class="tg-kasse" x="240" y="90" width="50" height="100"/><rect class="tg-modul" x="330" y="120" width="50" height="70"/><text x="265" y="84" text-anchor="middle">Restværdi</text><text x="355" y="114" text-anchor="middle">Markedsværdi</text><line class="tg-gulvlinje" x1="230" y1="190" x2="425" y2="190"/><line class="tg-skinne-tynd" x1="290" y1="90" x2="404" y2="90"/><g class="tg-maal"><line x1="400" y1="92" x2="400" y2="118" marker-start="url(#pil-salg-af-varebil-2)" marker-end="url(#pil-salg-af-varebil-2)"/><text x="406" y="109" class="tg-fremhaev">Tab</text></g><text x="330" y="212" class="tg-fremhaev" text-anchor="middle">Markedsværdi under restværdi</text><text x="20" y="234" class="tg-lille">FORSKELLEN TILFALDER LEASINGTAGER</text></svg>`,
          tekst: "Finansiel leasing: forskellen mellem markedsværdi og restværdi. Skematisk, uden tal."
        }
      },
      {
        overskrift: "Hvordan restværdien indfries",
        tekst: [
          `Det er her, aftalerne er forskellige. Hos Nordania skal leasingtager anvise en køber for at indfri en finansiel aftale, og køberen kan være leasingtager selv. Der er tre veje:`
        ],
        kort: [
          ["Eget firma", "Leasingtager køber bilen til restværdien og ejer den bagefter."],
          ["Tredjemand", "Leasingtager anviser en køber, fx en forhandler eller en anden virksomhed, der betaler leasingselskabet."],
          ["Med eller uden afgift", "På aftaler med forholdsmæssig registreringsafgift vælges det, om bilen sælges med eller uden registreringsafgift."]
        ],
        efter: [
          `Nordania oplyser en forventet behandlingstid på 3 dage for anvisningen. Skal bilen sælges videre, når virksomheden har købt den, gælder de almindelige regler for salg, også for momsen.`
        ]
      },
      {
        overskrift: "Anvisning trin for trin",
        tekst: [
          `En anvisning er i praksis en kort blanket til leasingselskabet. Det er den vej, hvor en køber overtager bilen direkte fra leasingselskabet.`,
          `Vil køberen ikke betale restværdien, må virksomheden selv dække forskellen eller købe bilen og sælge den senere. Hos Nordania bruges en særlig blanket til aftaler med forholdsmæssig afgift, hvor I også oplyser, om bilen skal sælges med eller uden registreringsafgift.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Find køberen", "Køberen kan være jeres eget firma, en forhandler eller en anden virksomhed."],
            ["Udfyld blanketten", "Aftalenummer eller registreringsnummer, udløbsdato, kilometerstand og en kontaktperson."],
            ["Behandling", "Nordania forventer en behandlingstid på 3 dage."],
            ["Køberen betaler", "Køberen betaler leasingselskabet, og aftalen er indfriet."]
          ]
        },
        efter: [
          `Kilder: <a href="${N_ANV}" rel="noopener">Nordania: Anvisning af køber ved finansielle aftaler</a> og <a href="${N_FORH}" rel="noopener">Indfrielse, forholdsmæssig registreringsafgift</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Forholdsmæssig registreringsafgift",
        tekst: [
          `Nogle leasingbiler er indregistreret med forholdsmæssig registreringsafgift, som leasingselskabet betaler for leasingperioden. Når perioden udløber, skal bilen afmeldes, og opfyldes betingelserne ikke længere, skal der betales fuld registreringsafgift, skriver Motorstyrelsen. Satserne står hos Motorstyrelsen.`,
          `Nordania skriver, at for sen aflevering i værste fald kan udløse krav om fuld registreringsafgift, som viderefaktureres til kunden.`,
          `Skal bilen køre videre i Danmark efter en sådan aftale, skal den registreres på fuld registreringsafgift eller på en ny leasingaftale. Nordanias blanket til de aftaler spørger derfor, om bilen skal sælges med eller uden registreringsafgift.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før indregistrering", "Leasingselskabet betaler afgiften for hele leasingperioden på én gang."],
            ["I leasingperioden", "Bilen kører med forholdsmæssig registreringsafgift."],
            ["Når perioden udløber", "Bilen skal afmeldes."],
            ["Hvis betingelserne ikke længere er opfyldt", "Der skal betales fuld registreringsafgift."]
          ],
          note: `Kilde: <a href="${MST_FORH}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026, og <a href="${MST_KRAV}" rel="noopener">Krav til leasingaftalen</a>, set den 7. oktober 2026. Satserne står hos Motorstyrelsen.`
        }
      },
      {
        overskrift: "Sådan er forholdsmæssig afgift bygget op",
        tekst: [
          `Forholdsmæssig registreringsafgift er en procentdel af den fulde afgift plus rente af restafgiften. Procentdelen afhænger af bilens alder, og renten reguleres 2 gange årligt. Leasingselskabet betaler hele periodens beløb på én gang, før bilen indregistreres. Motorstyrelsen offentliggør satserne i et regneark hvert halve år.`,
          `Bilens alder regnes fra første registrering eller ibrugtagning, også når den var i udlandet. Renten betales af forskellen mellem den fulde afgift og den forholdsmæssige afgift.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Forholdsmæssig registreringsafgift består af en procentdel af den fulde afgift plus rente af restafgiften og betales på én gang før indregistrering."><text class="tg-fremhaev" x="0" y="24">Forholdsmæssig registreringsafgift</text><rect class="tg-modul" x="0" y="38" width="220" height="34"/><text class="tg-modul__tekst" x="10" y="59">PROCENTDEL AF FULD AFGIFT</text><rect class="tg-kasse" x="220" y="38" width="120" height="34"/><text x="230" y="59">+ rente</text><g class="tg-call"><line x1="110" y1="72" x2="110" y2="98"/><circle cx="110" cy="72" r="3"/><text class="tg-call__navn" x="0" y="112">Procentdel</text><text class="tg-call__under" x="0" y="126">afhænger af bilens alder</text></g><g class="tg-call"><line x1="280" y1="72" x2="280" y2="98"/><circle cx="280" cy="72" r="3"/><text class="tg-call__navn" x="222" y="112">Rente af restafgiften</text><text class="tg-call__under" x="222" y="126">reguleres 2 gange årligt</text></g><text class="tg-lille" x="0" y="160">BETALES PÅ ÉN GANG FØR INDREGISTRERING</text><text x="0" y="178">Leasingselskabet betaler hele periodens beløb</text></svg>`,
          tekst: `Tegningen er skematisk og viser uden satser, hvordan den forholdsmæssige afgift er sat sammen. Satserne står hos <a href="${MST_FORH}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Når aftalen ændres eller stopper før tid",
        tekst: [
          `For biler med forholdsmæssig afgift er det ikke ligegyldigt, hvordan aftalen ændres. Motorstyrelsen skriver, at en ændring af leasingaftalen som udgangspunkt betyder, at den oprindelige aftale anses for afbrudt, og at bilen skal afmeldes. Nogle ændringer er undtaget, så længe de ikke fører til en ny beregning af registreringsafgiften.`,
          `Afbrydes aftalen før udløb, skal bilen afmeldes eller omregistreres på tidspunktet for afbrydelsen. Skal den registreres på en ny leasingaftale eller på fuld afgift, kan den omregistreres uden at aflevere nummerpladerne. For de aftaler, Motorstyrelsen selv har oprettet, betaler styrelsen den forholdsmæssige afgift for resten af perioden tilbage.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Ændring", "Skal bilen afmeldes?"],
          raekker: [
            ["Ny leasingtager", "Nej, men leasingselskabet skal melde skiftet før"],
            ["Nyt samlet antal kilometer", "nej"],
            ["Ny restværdi og højere ydelse ved genberegning", "nej"],
            ["Andre ændringer af aftalen", "Som udgangspunkt ja"],
            ["Aftalen afbrydes før udløb", "Afmeldes eller omregistreres"]
          ],
          note: `Gælder biler, der er leaset ud med forholdsmæssig registreringsafgift. Kilde: <a href="${MST_KRAV}" rel="noopener">Motorstyrelsen: Krav til leasingaftalen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forlængelse i stedet for indfrielse",
        tekst: [
          `Er bilen stadig god nok, kan det være et alternativ at forlænge aftalen. For en bil med forholdsmæssig afgift skal leasingselskabet søge Motorstyrelsen om forlængelsen senest 14 dage før, kontrakten udløber, og forlængelsen skal ske på samme vilkår som den oprindelige kontrakt.`,
          `Motorstyrelsen kan også tillade, at afgiften betales for op til en måned mere end leasingperioden. Det er for at klare små forsinkelser, når pladerne skal afleveres, og bilen afmeldes. Hos Nordania kan en forlænget operationel aftale til gengæld ikke få en købspris.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ansøgning om forlængelse, senest", "14", "dage før udløb"],
            ["Ekstra afgiftsperiode, højst", "1", "måned"],
            ["Vilkår ved forlængelse", "Samme", "som den oprindelige kontrakt"]
          ],
          note: `Gælder biler, der er leaset ud med forholdsmæssig registreringsafgift. Kilder: <a href="${MST_KRAV}" rel="noopener">Motorstyrelsen: Krav til leasingaftalen</a> og <a href="${N_KOEB}" rel="noopener">Nordania: Søg om købspris</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Operationel og finansiel side om side",
        tekst: [
          `Tabellen samler forskellene. Den vigtigste række er den om prisen, for den viser, hvem der bærer risikoen for brugtvognsmarkedet.`
        ],
        tabel: {
          kolonner: ["", "Operationel", "Finansiel"],
          raekker: [
            ["Stop før tid", "Udtrædelsespris fra leasingselskabet", "Leasingtager indfrier aftalen, herunder restværdien"],
            ["Hvem indfrier", "Leasingselskabet tager bilen tilbage", "Leasingtager, altid"],
            ["Købe bilen", "Købspris efter selskabets vilkår", "Ja, eller anvise en køber"],
            ["Prisen bygger på", "Brugtvognsmarkedet", "Aftalt restværdi"],
            ["Hos Nordania", "1.000 kr. for at beregne prisen", "Anvisning, forventet behandlingstid 3 dage"]
          ],
          note: `Kilder: <a href="${N_UDTR}" rel="noopener">Nordania</a> og <a href="${AYV}" rel="noopener">Ayvens</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Moms ved købet",
        tekst: [
          `Når bilen købes fri, fakturerer leasingselskabet købet. Fradraget for momsen følger de almindelige regler for varebiler, se <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>. Skal bilen sælges videre bagefter, står reglerne i <a href="/til-varebilen/salg-af-varebil/saelg-firmabil-moms/">moms ved salg af varebil</a>.`,
          `For en varebil til og med 3 tons er der fuldt fradrag for købet, når bilen kun bruges til momspligtige formål. Bruges den også privat eller til momsfrie formål, er der intet fradrag for købet. Det samme valg afgør, om der skal moms på, når virksomheden en dag sælger bilen.`
        ],
        efter: [
          `Kilde: <a href="${SKAT_BIL}" rel="noopener">Skattestyrelsen: Fradrag for moms af biludgifter</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Frister hos Nordania",
        tekst: [
          `Fristerne er forskellige for de tre veje, og de regnes baglæns fra den dato, handlen skal ske. Købsdatoen og udtrædelsesdatoen er altid den 1. i en måned.`
        ],
        punkter: [
          `<strong>Købspris.</strong> Købsdatoen er altid den 1. i en måned. Forespørgslen skal være modtaget seks uger før, og svaret kommer inden otte dage.`,
          `<strong>Udtrædelse.</strong> Du vælger en dato i indeværende eller den følgende måned. Ifølge formularen tager sagsbehandlingen 7–10 dage.`,
          `<strong>Anvisning af køber.</strong> Nordania forventer en behandlingstid på 3 dage.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tidslinje, der tæller baglæns fra den 1. i måneden. Nordania skal have en forespørgsel om købspris seks uger før og en forespørgsel om udtrædelse tre uger før. Købet eller udtrædelsen sker altid den 1. i en måned."><text class="tg-fremhaev" x="60" y="52" text-anchor="middle">6 uger før</text><text x="60" y="68" text-anchor="middle">købspris</text><text class="tg-fremhaev" x="210" y="52" text-anchor="middle">3 uger før</text><text x="210" y="68" text-anchor="middle">udtrædelse</text><text class="tg-fremhaev" x="392" y="52" text-anchor="end">Den 1.</text><text x="392" y="68" text-anchor="end">købsdato eller</text><text x="392" y="84" text-anchor="end">udtrædelse</text><line class="tg-gulvlinje" x1="20" y1="110" x2="380" y2="110"/><line class="tg-skinne" x1="60" y1="110" x2="360" y2="110"/><rect class="tg-modul" x="54" y="104" width="12" height="12"/><rect class="tg-modul" x="204" y="104" width="12" height="12"/><rect class="tg-kuffert" x="354" y="104" width="12" height="12"/><text class="tg-lille" x="60" y="134" text-anchor="middle">−6 UGER</text><text class="tg-lille" x="210" y="134" text-anchor="middle">−3 UGER</text><text class="tg-lille" x="360" y="134" text-anchor="middle">DEN 1.</text><text x="20" y="168">Prisberegning: 1.000 kr. hos Nordania</text><text x="20" y="186">Anvisning af køber: forventet 3 dage</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${N_KOEB}" rel="noopener">Nordania: købspris</a>, <a href="${N_UDTR}" rel="noopener">udtrædelse</a> og <a href="${N_ANV}" rel="noopener">anvisning af køber</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Det spørger Nordania om",
        tekst: [
          `Blanketterne er korte, men prisen afhænger af tallene i dem. Kilometerstanden er den vigtigste, fordi den påvirker, hvad bilen kan sælges for.`
        ],
        punkter: [
          `<strong>Anvisning af køber.</strong> Leasingaftalenummer eller registreringsnummer og antal kørte kilometer på dagen.`,
          `<strong>Forholdsmæssig afgift.</strong> Om bilen skal sælges med eller uden registreringsafgift.`,
          `<strong>Udtrædelse.</strong> Udtrædelsesdato og estimeret kilometerstand på datoen.`
        ]
      },
      {
        overskrift: "Anvist køber via auktion",
        tekst: [
          `En leaset bil kan sælges på auktion, men ejendomsretten skal overgå til opdragsgiver, før salget kan gennemføres. Klaravik skriver, at det kan tage mere end to uger. Se <a href="/til-varebilen/salg-af-varebil/salg-af-varebil-paa-auktion/">salg af varebil på auktion</a>.`,
          `I praksis betyder det, at virksomheden først indfrier aftalen og bliver ejer, og derefter sælger bilen. Den tid kommer oven i auktionens egne frister. Skal bilen i stedet afleveres, står reglerne i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        efter: [
          `Kilde: <a href="${KV_KOB}" rel="noopener">Klaravik: Købsvilkår</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leasingselskabet vide",
    spoergsmaal_manchet: "Så kan selskabet beregne prisen og gøre aftalen op.",
    spoergsmaal: [
      "Aftalenummer eller registreringsnummer.",
      "Ønsket dato for udtrædelse eller indfrielse.",
      "Forventet kilometerstand på datoen.",
      "Om bilen skal afleveres, købes af jer selv eller sælges til en anvist køber.",
      "Ved forholdsmæssig afgift: om bilen skal sælges med eller uden registreringsafgift.",
      "Om I også vil have en udtrædelsespris, når I beder om en købspris."
    ],
    faq: [
      ["Kan man komme ud af en leasingaftale før tid?", "Ja. På operationel leasing beregner leasingselskabet en udtrædelsespris. På finansiel leasing indfrier leasingtager aftalen, herunder restværdien."],
      ["Hvem indfrier restværdien på en finansiel leasingaftale?", "Leasingtager, altid. Det kan ske ved selv at købe bilen eller ved at anvise en køber."],
      ["Kan man selv finde en køber til leasingbilen?", "På finansiel leasing hos Nordania skal leasingtager anvise en køber for at indfri aftalen, og køberen kan være eget firma eller tredjemand."],
      ["Hvad koster det at få beregnet en udtrædelsespris?", "Hos Nordania 1.000 kr. Prisen bygger på brugtvognsmarkedet og gælder altid den 1. i en måned."],
      ["Kan man købe sin operationelt leasede varebil?", "Hos Ayvens kan der beregnes en købspris, når der er 3 måneder eller mindre til udløb. Nordania sælger kun til leasingtager og kun på biler indregistreret før 3. oktober 2017."],
      ["Hvornår skal man søge om købspris hos Nordania?", "Forespørgslen skal være modtaget seks uger før købsdatoen, som altid er den 1. i en måned. Det koster 1.000 kr. at få beregnet prisen."],
      ["Kan en medarbejder købe firmabilen af leasingselskabet?", "Ikke hos Nordania, som kun sælger bilen til den virksomhed, der har leasingaftalen. "],
      ["Kan en leaset varebil sælges på auktion?", "Ja, men ejendomsretten skal overgå til sælger først. Klaravik skriver, at det kan tage mere end to uger."],
      ["Kan leasingaftalen forlænges i stedet?", "Ja, hvis leasingselskabet vil. For en bil med forholdsmæssig afgift skal forlængelsen søges hos Motorstyrelsen senest 14 dage før udløb og ske på samme vilkår som den oprindelige aftale."]
    ],
    kilder: [
      { navn: "Nordania: Søg om udtrædelse", url: N_UDTR, dato: "2026-10-07" },
      { navn: "Nordania: Søg om købspris", url: N_KOEB, dato: "2026-10-07" },
      { navn: "Nordania: Anvisning af køber ved finansielle aftaler", url: N_ANV, dato: "2026-10-07" },
      { navn: "Nordania: Indfrielse, forholdsmæssig registreringsafgift", url: N_FORH, dato: "2026-10-07" },
      { navn: "Nordania: Aflevering af firmabil leaset direkte hos Nordania", url: N_AFL, dato: "2026-10-07" },
      { navn: "Ayvens: Aflevering af din erhvervsleasingbil (køb din leasingbil)", url: AYV, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Hvad er forholdsmæssig afgift?", url: MST_FORH, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Krav til leasingaftalen", url: MST_KRAV, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Fradrag for moms af biludgifter", url: SKAT_BIL, dato: "2026-10-07" },
      { navn: "Klaravik: Købsvilkår", url: KV_KOB, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Motorstyrelsen: en leasingaftale, der indsendes ved ansøgning om forholdsmæssig afgift, skal bl.a. indeholde vilkår om leasingaftalens udløb, oplysninger om der er aftalt køberet, købepligt, anvisningsret eller anvisningspligt og betingelserne for dette, og vilkår for førtidigt ophør, herunder ved misligholdelse og om aftalen kan opsiges i perioden.", MST_KRAV],
    ["Nordania: Nordania sælger kun bilen til den virksomhed, leasingaftalen er indgået med, og det er derfor ikke muligt som privatperson at købe firmabilen.", N_KOEB],
    ["Nordania: ved forespørgsel om købspris kan man også få beregnet en udtrædelsespris uden ekstra beregning.", N_KOEB],
    ["Nordania: i formularen til udtrædelse vælges en udtrædelsesdato inden for indeværende måned plus 1 måned, og den estimerede kilometerstand på udtrædelsesdatoen oplyses.", N_UDTR],
    ["Nordania: blanketten til anvisning af køber spørger, hvornår aftalen udløber, om leasingaftalenummer eller reg.nr., antal kørte kilometer og telefonnummer på kontaktperson; der er en særskilt blanket for finansielle aftaler på forholdsmæssig registreringsafgift, hvor man oplyser, om bilen skal sælges med eller uden registreringsafgift.", N_FORH],
    ["Motorstyrelsen: køretøjets alder (til procentsatsen for forholdsmæssig afgift) regnes fra første registrerings- eller ibrugtagningstidspunkt, uanset om det er i Danmark eller i udlandet; renten betales af differencen mellem fuld afgift og forholdsmæssig afgift.", MST_FORH],
    ["Motorstyrelsen: ændringer af leasingaftalen medfører som udgangspunkt, at den oprindelige aftale anses for afbrudt, og køretøjet skal afmeldes; undtaget er skifte af leasingtager (meddeles før skiftet), skifte af leasinggiver ved omstrukturering (kræver tilladelse), ændring af det samlede antal kilometer, ændring af restværdi og forhøjet leasingydelse ved genberegning og andre ændringer uden betydning for tilladelsen, forudsat at ændringerne ikke fører til omberegning af registreringsafgiften bortset fra genberegning.", MST_KRAV],
    ["Motorstyrelsen (afsnittet for enkeltansøgere og straks-ibrugtagere): afbrydes en leasingaftale før udløb, skal køretøjet afmeldes eller omregistreres på tidspunktet for afbrydelsen; skal det registreres på ny leasingaftale eller fuld registreringsafgift, kan det omregistreres uden at aflevere nummerpladerne; Motorstyrelsen betaler den forholdsmæssige afgift for den resterende leasingperiode tilbage.", MST_KRAV],
    ["Motorstyrelsen: forlængelse af leasingperioden skal søges senest 14 dage inden kontrakten udløber og ske på samme vilkår som den oprindelige kontrakt; Motorstyrelsen kan tillade registreringsafgift for en længere periode end leasingperioden, dog højst yderligere en måned, for at lette ulemper ved småforsinkelser ved aflevering af nummerplader og afmelding.", MST_KRAV],
    ["Nordania: er en operationel aftale blevet forlænget, kan man ikke søge om en købspris.", N_KOEB],
    ["Skattestyrelsen: for varebiler til og med 3 tons er der fuldt fradrag ved køb, når bilen kun bruges til momspligtige formål, og intet fradrag ved køb, når den også bruges til momsfrie formål eller privat; i første tilfælde skal der beregnes moms ved salg, i de andre ikke.", SKAT_BIL]
  ]
};
