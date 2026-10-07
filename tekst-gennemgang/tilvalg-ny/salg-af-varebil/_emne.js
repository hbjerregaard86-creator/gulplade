// Emnesiden /til-varebilen/salg-af-varebil/ (07-10-2026)
var MST_OMREG = `https://motorst.dk/erhverv/registrering-og-omregistrering/omregistrering`;
var MST_VAERDI = `https://motorst.dk/erhverv/selvanmelder/saadan-vaerdifastsaetter-du-koeretoejer/vaerdifastsaettelse-af-brugte-varebiler`;
var MST_EKS = `https://motorst.dk/erhverv/eksport-af-bil-eller-mc`;
var JV_SALG = `https://tax.dk/jv/da/D_A_5_24_2.htm`;
var JV_BRUGT = `https://info.skat.dk/data.aspx?oid=1921231`;
var JV_OVERDRAG = `https://info.skat.dk/data.aspx?oid=1946944`;
var SKAT_BIL = `https://skat.dk/erhverv/moms/fradrag-for-moms/udgifter-du-kan-faa-momsfradrag-for/fradrag-for-moms-af-biludgifter`;
var SKAT_EU = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/moms-ved-handel-med-virksomheder/moms-ved-handel-med-lande-i-eu/moms-ved-salg-af-varer-og-ydelser-i-eu`;
var NORD_AFL = `https://nordania.dk/erhverv/find-hjaelp/aflevering/leaset-bil-hos-nordania`;
var NORD_ANV = `https://nordania.dk/erhverv/find-hjaelp/opsigelse-indfrielse-og-koebspris/anvisning-af-koeber-ved-finansielle-aftaler`;
var NORD_UDTR = `https://nordania.dk/erhverv/find-hjaelp/opsigelse-indfrielse-og-koebspris/udtraedelse`;
var AYV = `https://www.ayvens.com/da-dk/for-foerere/aflevering-af-bil/aflevering-af-din-firmabil/`;
var AYV_PDF = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf`;
var FDM = `https://fdm.dk/leasing/returtjek-foer-aflevering`;
var KV_SAELG = `https://www.klaravik.dk/saelg.html`;
var KV_FAQ = `https://www.klaravik.dk/faq/`;
var KV_KOB = `https://www.klaravik.dk/kobsvilkar.html`;
var BB_PANT = `https://support.bilbasen.dk/hc/da/articles/22301344145682-Tjek-for-pant-restg%C3%A6ld-i-bilen`;
var BB_ANN = `https://support.bilbasen.dk/hc/da/articles/22303183521554-Hvordan-indrykker-jeg-en-annonce`;
var AUKH = `https://www.auktionshuset.dk/faq`;
var RETRADE = `https://retrade.eu/da/terms`;

module.exports = {
  id: "salg-af-varebil",
  side: {
    slug: "salg-af-varebil",
    navn: "Salg af den gamle varebil",
    titel: "Salg af brugt varebil: moms, pris og ejerskifte",
    kort: `Salg, auktion, aflevering eller indfrielse af leasingaftalen: moms, pris, plader og frister.`,
    beskrivelse: `Sælg, byt, sæt på auktion eller aflever den gamle varebil. Se momsen ved salget, hvad der afgør prisen, ejerskifte på 4 hverdage og leasingselskabernes krav.`,
    manchet: `Den gamle varebil kan sælges, byttes, sættes på auktion eller, hvis den er leaset, afleveres eller indfries. Momsen afhænger af, om bilen blev købt med fradrag, og prisen af kilometer, stand og indretning. Køberen har 4 hverdage til at omregistrere.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Køber omregistrerer", "4 hverdage", "ellers kan sælger få bilen afmeldt"],
        ["Købt med fradrag", "Med moms", "der lægges moms på salgsprisen"],
        ["Udtrædelsespris, Nordania", "1.000 kr.", "for at få prisen beregnet"],
        ["Aflevering, FDM 2026", "10.122 kr.", "i gennemsnitlig regning pr. bil"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Fire veje ud af bilen",
        tekst: [
          `Hvordan den gamle varebil forlader firmaet, afhænger først af, hvem der ejer den. Ejer virksomheden selv bilen, kan den sælges med en annonce, byttes hos forhandleren eller sættes på auktion. Er den leaset, er det leasingaftalen, der bestemmer, om bilen skal afleveres, købes eller indfries.`,
          `Valget af vej afgør, hvor meget arbejde virksomheden selv har med salget, og hvem der står for papirerne. Ved et salg med annonce klarer virksomheden det hele selv. På en auktion laver auktionsmægleren materialet, og ved en aflevering er det leasingselskabet, der sælger bilen videre. Leasingselskabernes og auktionshusenes priser på siden er uden moms.`
        ],
        kort: [
          ["Sælg selv", `Annonce på fx Bilbasen, Bilhandel eller DBA, med prisen før moms eller med moms. Se <a href="/til-varebilen/salg-af-varebil/vurdering-af-brugt-varebil/">vurdering af brugt varebil</a>.`],
          ["Byt hos forhandleren", `Bilen indgår som byttebil i handlen på den nye.`],
          ["Auktion", `Fx Klaravik, hvor en auktionsmægler laver materialet, og sælger betaler en provision af salgsprisen. Se <a href="/til-varebilen/salg-af-varebil/salg-af-varebil-paa-auktion/">salg af varebil på auktion</a>.`],
          ["Leaset bil", `Aflever den, køb den, eller indfri restværdien. Se <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a> og <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 246" role="img" aria-label="Beslutningstræ. Ejer virksomheden bilen, kan den sælges med annonce, byttes hos forhandleren, sættes på auktion eller sælges til udlandet. Er bilen leaset operationelt, afleveres den, købes eller trædes der ud før tid. Er den leaset finansielt, indfries restværdien ved at købe bilen selv eller anvise en køber."><rect class="tg-kasse" x="120" y="6" width="160" height="36"/><text class="tg-fremhaev" x="200" y="29" text-anchor="middle">Hvem ejer bilen?</text><line class="tg-pil" x1="160" y1="42" x2="95" y2="70"/><line class="tg-pil" x1="240" y1="42" x2="305" y2="70"/><rect class="tg-modul" x="10" y="70" width="170" height="34"/><text class="tg-modul__tekst" x="95" y="91" text-anchor="middle">VIRKSOMHEDEN</text><rect class="tg-kasse" x="220" y="70" width="170" height="34"/><text class="tg-fremhaev" x="305" y="91" text-anchor="middle">Leasingselskabet</text><line class="tg-skinne-tynd" x1="14" y1="114" x2="14" y2="198"/><text x="24" y="134">Sælg med annonce</text><text x="24" y="154">Byt hos forhandleren</text><text x="24" y="174">Sæt på auktion</text><text x="24" y="194">Sælg til udlandet</text><line class="tg-skinne-tynd" x1="224" y1="114" x2="224" y2="234"/><text class="tg-fremhaev" x="234" y="134">Operationel</text><text x="234" y="152">aflever, køb eller</text><text x="234" y="168">træd ud før tid</text><text class="tg-fremhaev" x="234" y="198">Finansiel</text><text x="234" y="216">indfri restværdien</text><text x="234" y="232">selv eller anvis køber</text></svg>`,
          tekst: `Skematisk. De syv undersider til emnet dækker hver sin del af træet, fra vurdering og moms til auktion, eksport, aflevering og indfrielse.`
        }
      },
      {
        overskrift: "Fra vurdering til afmelding",
        tekst: [
          `Et salg har fem led. Køberen har 4 hverdage fra købet til at omregistrere eller afmelde bilen, og indtil da betaler sælger afgifter og ansvarsforsikring.`,
          `Første led er at finde prisen, og sidste led er at tjekke, at bilen ikke længere står i virksomhedens navn. Imellem ligger valget af salgskanal, slutsedlen med dato og underskrifter, og ejerskiftet. Når bilen er omregistreret eller afmeldt, flytter den sig fra Aktuelle til Historiske køretøjer i Motorregistret.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Tidslinje for salg af varebil: vurdering, salgskanal, slutseddel, ejerskifte inden 4 hverdage og tjek i Motorregistret"><defs><marker id="pil-salg-af-varebil-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g class="tg-maal"><line x1="20" y1="90" x2="408" y2="90" marker-end="url(#pil-salg-af-varebil-1)"/></g><rect class="tg-modul" x="24" y="84" width="12" height="12" rx="2"/><rect class="tg-modul" x="114" y="84" width="12" height="12" rx="2"/><rect class="tg-modul" x="204" y="84" width="12" height="12" rx="2"/><rect class="tg-modul" x="294" y="84" width="12" height="12" rx="2"/><rect class="tg-modul" x="384" y="84" width="12" height="12" rx="2"/><text x="20" y="56" class="tg-fremhaev">1 Vurdering</text><text x="20" y="70">tilsvarende biler</text><text x="120" y="120" class="tg-fremhaev" text-anchor="middle">2 Salgskanal</text><text x="120" y="134" text-anchor="middle">annonce, bytte, auktion</text><text x="210" y="56" class="tg-fremhaev" text-anchor="middle">3 Slutseddel</text><text x="210" y="70" text-anchor="middle">dato og underskrifter</text><text x="300" y="120" class="tg-fremhaev" text-anchor="middle">4 Ejerskifte</text><text x="300" y="134" text-anchor="middle">inden 4 hverdage</text><text x="404" y="56" class="tg-fremhaev" text-anchor="end">5 Tjek</text><text x="404" y="70" text-anchor="end">i Motorregistret</text><text x="20" y="168" class="tg-lille">KØBER OMREGISTRERER, ELLERS KAN SÆLGER FÅ BILEN AFMELDT</text></svg>`,
          tekst: `Salget i fem led. Skematisk. Fristen på 4 hverdage og tjekket under Historiske køretøjer er fra <a href="${MST_OMREG}" rel="noopener">Motorstyrelsen</a>, set den 5. oktober 2026.`
        }
      },
      {
        overskrift: "Moms ved salget",
        tekst: [
          `Blev varebilen købt med fradrag for momsen, skal der lægges moms på salgsprisen. Var anskaffelsen undtaget fra fradrag, fx fordi en varebil op til 3 tons også blev brugt privat, er salget momsfrit efter momslovens § 13, stk. 2. Detaljerne står i <a href="/til-varebilen/salg-af-varebil/saelg-firmabil-moms/">moms ved salg af varebil</a>.`,
          `Vægten betyder noget. Skattestyrelsen skriver, at der for en varebil over 3 tons skal beregnes moms af den fulde salgspris, også når den er brugt både i firmaet og privat. Grænsen er bilens tilladte totalvægt, som står på registreringsattesten.`,
          `Fritagelsen kræver, at virksomheden faktisk har betalt moms ved købet. En bil, der er købt af en privatperson og kun brugt i firmaet, sælges derfor med moms. Reglerne for fradrag ved køb står i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${JV_SALG}" rel="noopener">Den juridiske vejledning 2026-2, D.A.5.24.2</a>, set den 4. oktober 2026, og <a href="${SKAT_BIL}" rel="noopener">Skattestyrelsen: Fradrag for moms af biludgifter</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Det afgør prisen",
        tekst: [
          `En brugt varebil prissættes ved at sammenligne med tilsvarende biler til salg og regulere for det, der er anderledes. Motorstyrelsen bruger samme metode, når den værdifastsætter brugte varebiler, og dens regler viser derfor, hvordan markedet regner.`,
          `For en håndværker er indretningen ofte det sværeste at sætte pris på. Reoler og skuffer har kun værdi for en køber, der kan bruge dem, og ekstraudstyr taber værdi hurtigere end selve bilen.`
        ],
        punkter: [
          `<strong>Alder og kilometer.</strong> Sammenlignes med tilsvarende biler til salg.`,
          `<strong>Stand.</strong> Skader, slid i varerummet og dæk.`,
          `<strong>Udstyr og indretning.</strong> Ekstraudstyr taber værdi hurtigt. Motorstyrelsen nedskriver det med bilens alder i sin værdifastsættelse.`,
          `<strong>Service.</strong> Dokumenteret servicehistorik.`,
          `<strong>Brug.</strong> Skiftende chauffører kan give et fradrag i Motorstyrelsens værdifastsættelse, hvis kørslen kan dokumenteres.`
        ],
        efter: [
          `Mere i <a href="/til-varebilen/salg-af-varebil/vurdering-af-brugt-varebil/">vurdering af brugt varebil</a>. Brugte varebiler til salg lige nu står under <a href="/brugte-varebiler/">brugte varebiler</a>. Kilde: <a href="${MST_VAERDI}" rel="noopener">Motorstyrelsen: Værdifastsættelse af brugte varebiler</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Frister",
        tekst: [
          `De fleste frister i et salg er korte, og de gælder både for sælger og køber. Tabellen samler dem, der oftest betyder noget, fra ejerskiftet til leasingselskabernes breve og auktionens udbetaling.`,
          `Hos Klaravik kan køberen typisk hente bilen en uge efter, at auktionsmægleren har været forbi. Er bilen betalt, men ikke afhentet, udbetaler Klaravik pengene den femte arbejdsdag i måneden efter, at køberen har betalt.`
        ],
        tabel: {
          kolonner: ["Hvad", "Frist", "Kilde"],
          raekker: [
            ["Køber omregistrerer eller afmelder", "4 hverdage efter købet", "Motorstyrelsen"],
            ["Nordania sender afleveringsbrev", "ca. 45 dage før udløb", "Nordania"],
            ["Udtrædelse af operationel aftale hos Nordania", "forespørgsel 3 uger før den 1. i måneden", "Nordania"],
            ["Købspris på leasingbilen hos Ayvens", "3 måneder eller mindre før udløb", "Ayvens"],
            ["Aflevering hos Nordania", "senest 1. bankdag efter udløb", "Nordania"],
            ["Udbetaling efter auktion på Klaravik", "senest 7 arbejdsdage efter afhentning", "Klaravik"]
          ],
          note: `Kilder: <a href="${MST_OMREG}" rel="noopener">Motorstyrelsen</a>, <a href="${NORD_AFL}" rel="noopener">Nordania</a>, <a href="${AYV}" rel="noopener">Ayvens</a> og <a href="${KV_SAELG}" rel="noopener">Klaravik</a>, set den 4. oktober 2026.`
        },
        figur: [
          {
            type: "noegletal",
            data: [
              ["Køber omregistrerer", "4", "hverdage"],
              ["Ny registreringsattest", "10", "hverdage"],
              ["Afhentning, Klaravik", "12", "dage"],
              ["Udbetaling, Klaravik", "7", "arbejdsdage"]
            ],
            note: `Kilder: <a href="${MST_OMREG}" rel="noopener">Motorstyrelsen</a> og Klaravik (<a href="${KV_KOB}" rel="noopener">købsvilkår</a> og <a href="${KV_SAELG}" rel="noopener">sælg</a>), set den 4. oktober 2026. Klaraviks udbetaling regnes fra afhentningen.`
          }
        ]
      },
      {
        overskrift: "Byttebil hos forhandleren",
        tekst: [
          `Den gamle bil kan indgå som byttebil i handlen på den nye. Prisen for byttebilen er så en del af den samlede handel, og det er den samlede pris, der kan sammenlignes med et salg med annonce.`,
          `Momsen følger de samme regler som ved andre salg. Er bilen købt med fradrag, sælges den med moms til forhandleren. Er den momsfri, kan forhandleren sælge den videre efter brugtmomsordningen og kun betale moms af sin fortjeneste. Hvad det betyder for den næste køber, står i <a href="/haandbogen/momsdoed-varebil/">momsdød varebil</a>.`
        ],
        efter: [
          `Kilde: <a href="${JV_BRUGT}" rel="noopener">Den juridiske vejledning, D.A.18.2 Hvem kan benytte brugtmomsordningen?</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Når hele firmaet sælges",
        tekst: [
          `Sælges hele virksomheden eller en selvstændig del af den, følger varebilerne typisk med i handlen. Så skal der ikke beregnes moms af bilerne og de andre driftsmidler, fordi en hel eller delvis virksomhedsoverdragelse er undtaget fra moms. Virksomheden skal give Skattestyrelsen besked senest otte dage efter overdragelsen.`,
          `Undtagelsen gælder ikke, når firmaet sælger de fleste af sine biler og maskiner til en forhandler, der sælger dem videre enkeltvis. Den juridiske vejledning nævner automobilforhandlere som eksempel. Mere om momsen står i <a href="/til-varebilen/salg-af-varebil/saelg-firmabil-moms/">moms ved salg af varebil</a>.`
        ],
        efter: [
          `Kilde: <a href="${JV_OVERDRAG}" rel="noopener">Den juridiske vejledning, D.A.4.1.8 Salg af aktiver som led i en virksomhedsoverdragelse</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Leaset bil: aflever eller indfri",
        tekst: [
          `På operationel leasing afleveres bilen, eller den købes eller udtrædes efter leasingselskabets vilkår. På finansiel leasing er det altid leasingtager, der indfrier restværdien, og spørgsmålet er kun, om virksomheden selv køber bilen eller anviser en køber. Se <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a> og <a href="/haandbogen/finansiel-og-operationel-leasing/">finansiel og operationel leasing</a>.`,
          `Skal bilen afleveres, bliver den gennemgået, og skader ud over almindelig slitage faktureres efter leasingselskabets egen guide. FDM oplyser, at den gennemsnitlige regning er 10.122 kr. pr. bil, opgjort på mere end 1.500 leasingafleveringer i 2026. Grænserne og gebyrerne står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Udtrædelsespris, Nordania", "1.000", "kr. for beregningen"],
            ["Købspris, Ayvens", "højst 3", "måneder før udløb"],
            ["Anvisning af køber, Nordania", "3", "dages forventet behandling"],
            ["Gennemsnitlig regning ved aflevering", "10.122", "kr. pr. bil"]
          ],
          note: `Regningen er FDM's gennemsnit for leasingafleveringer hos FDM Test og Bilsyn i 2026. Kilder: <a href="${NORD_UDTR}" rel="noopener">Nordania: udtrædelse</a>, <a href="${NORD_ANV}" rel="noopener">anvisning af køber</a>, <a href="${AYV}" rel="noopener">Ayvens</a> og <a href="${FDM}" rel="noopener">FDM</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Logo, folie og indretning",
        tekst: [
          `Nordania kræver logo og folie fjernet før aflevering. Ayvens tager gebyr for at fjerne logo, fra 400 kr. for et cvr-nummer til 3.500 kr. for fuld foliering (juni 2025). Udstyr, I selv har monteret, må I beholde hos Ayvens, hvis det kan tages af uden skade på bilen.`,
          `Ved salg følger indretningen med, medmindre den skal flyttes til næste bil. Se <a href="/til-varebilen/folie/">bilreklame og folie</a> og <a href="/til-varebilen/indretning/">indretning</a>.`,
          `Om reolerne kan flyttes til den nye bil, afhænger af, om de passer i dens varerum. Målene for de enkelte modeller står på siderne om <a href="/til-varebilen/indretning/">indretning</a>.`
        ]
      },
      {
        overskrift: "Ejerskifte og plader",
        tekst: [
          `Køberen omregistrerer i Motorregistret eller hos en nummerpladeoperatør. Indtil det sker, betaler sælger afgifter og ansvarsforsikring. Afmeldes bilen, afleveres pladerne hos en nummerpladeoperatør. Se <a href="/til-varebilen/salg-af-varebil/afmelding-og-nummerplader/">afmelding og nummerplader</a>.`,
          `Sker omregistreringen ikke, kan sælger bede Motorstyrelsen afmelde bilen. Motorstyrelsen afmelder den dag, henvendelsen kommer, dog tidligst 4 hverdage efter salgsdatoen. Uden slutseddel regnes fristen fra den dag, Motorstyrelsen modtager anmodningen. Biler med en klausul, fx mandskabsvogne, omregistreres hos en nummerpladeoperatør.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Salgsdagen", "Sælger og køber skriver under på slutsedlen med dato."],
            ["Inden 4 hverdage", "Køberen omregistrerer eller afmelder bilen. Indtil da betaler sælger afgifter og ansvarsforsikring."],
            ["Efter 4 hverdage", "Er bilen ikke omregistreret, kan sælger bede Motorstyrelsen afmelde den."],
            ["Inden 10 hverdage", "Køberen får en ny registreringsattest med posten."],
            ["Bagefter", "Den periodiske afgift reguleres, så den svarer til sælgers ejerperiode, og et overskydende beløb udbetales til NemKonto."]
          ],
          note: `Kilde: <a href="${MST_OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Før bilen forlader firmaet",
        tekst: [
          `Forbundne telefoner, adresser i navigationen og brugerprofiler i apps følger bilen, til de slettes. Ayvens kræver dem slettet før aflevering og tager 250 kr. for at kontrollere sletningen. Nordania kræver også data i bilens computersystem slettet.`,
          `Det samme gælder ved et almindeligt salg, hvor køberen ellers får adgang til firmaets adresser og kontakter. Brændstofkort og ladeabonnementer, der hører til bilen, skal også lukkes. Ayvens spærrer selv brændstofkortene på sine biler.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Papirer", "Købsfaktura, registreringsattest og servicehistorik findes frem."],
            ["Indretning og folie", "Det besluttes, om indretningen følger med, og logo og folie fjernes."],
            ["Data og kort", "Telefoner, adresser og app-profiler slettes, og brændstof- og ladekort lukkes."],
            ["Gæld", "Det tjekkes, om der er pant i bilen, før den sælges."]
          ]
        },
        efter: [
          `Kilder: <a href="${AYV_PDF}" rel="noopener">Ayvens afleveringsguide</a>, <a href="${AYV}" rel="noopener">Ayvens</a> og <a href="${NORD_AFL}" rel="noopener">Nordania</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvem betaler hvad i salgskanalen",
        tekst: [
          `På auktion betaler køberen typisk et salær oveni buddet. Det påvirker, hvor højt køberne byder. Auktionshusene oplyser ikke sælgers provision på deres sider. Se <a href="/til-varebilen/salg-af-varebil/salg-af-varebil-paa-auktion/">salg af varebil på auktion</a>.`,
          `Klaravik skriver, at sælger betaler et provisionsbaseret gebyr, der afhænger af salgsbeløbet, men ikke hvor stort det er. Bliver bilen ikke solgt, er der intet gebyr. På en annonceportal som Bilbasen betaler sælger for annoncen, og køberen betaler ikke noget oveni prisen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Kanal", "Køber betaler oveni prisen"],
          raekker: [
            ["Annonceportal, fx Bilbasen", "nej"],
            ["Klaravik", "Købersalær, der står på auktionen"],
            ["Auktionshuset", "20 % salær, min. 50 kr. pr. vare"],
            ["Retrade", "Købersalær og 250 kr. pr. faktura"]
          ],
          note: `Kilder: <a href="${BB_ANN}" rel="noopener">Bilbasen</a> og <a href="${RETRADE}" rel="noopener">Retrade</a>, set den 4. oktober 2026, og <a href="${KV_FAQ}" rel="noopener">Klaravik</a> og <a href="${AUKH}" rel="noopener">Auktionshuset</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Gæld og pant i bilen",
        tekst: [
          `Har en kreditor pant i bilen, er pantet tinglyst i Bilbogen. Pantet skal indfries og aflyses i forbindelse med salget, og det har betydning for alle tre salgsveje i tegningen nedenfor.`
        ],
        punkter: [
          `<strong>Bilbogen.</strong> Pant i en bil er tinglyst i Bilbogen. Bilbasen henviser købere til et pant-tjek med oplysninger derfra.`,
          `<strong>Auktion.</strong> Klaravik sikrer, at gæld i køretøjet afvikles, før køberen bliver ejer. Har en tredjemand sikkerhed i bilen, kan ejerskiftet tage mere end to uger.`,
          `<strong>Eksport.</strong> Motorstyrelsen afviser en anmodning om eksportgodtgørelse, hvis der er tinglyst pant i Bilbogen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 216" role="img" aria-label="Er der tinglyst pant i bilen i Bilbogen, har det tre følger. Ved salg med annonce kan køberen tjekke pantet. Hos Klaravik afvikles gælden, før køberen bliver ejer. Ved eksport afviser Motorstyrelsen eksportgodtgørelsen."><defs><marker id="pil-salg-af-varebil-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="6" y="78" width="124" height="60"/><text class="tg-modul__tekst" x="68" y="104" text-anchor="middle">PANT I BILBOGEN</text><text x="68" y="122" text-anchor="middle">tinglyst gæld</text><line class="tg-pil" x1="130" y1="96" x2="166" y2="36" marker-end="url(#pil-salg-af-varebil-3)"/><line class="tg-pil" x1="130" y1="108" x2="166" y2="108" marker-end="url(#pil-salg-af-varebil-3)"/><line class="tg-pil" x1="130" y1="120" x2="166" y2="180" marker-end="url(#pil-salg-af-varebil-3)"/><rect class="tg-kasse" x="170" y="8" width="224" height="52"/><text class="tg-fremhaev" x="182" y="30">Salg med annonce</text><text x="182" y="48">køberen kan tjekke pantet</text><rect class="tg-kasse" x="170" y="82" width="224" height="52"/><text class="tg-fremhaev" x="182" y="104">Auktion hos Klaravik</text><text x="182" y="122">gælden afvikles først</text><rect class="tg-kasse" x="170" y="156" width="224" height="52"/><text class="tg-fremhaev" x="182" y="178">Eksport</text><text x="182" y="196">godtgørelsen afvises</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${BB_PANT}" rel="noopener">Bilbasen: Tjek for pant</a> og <a href="${KV_KOB}" rel="noopener">Klaravik: Købsvilkår</a>, set den 4. oktober 2026, og <a href="${MST_EKS}" rel="noopener">Motorstyrelsen: Eksport</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Køber i udlandet",
        tekst: [
          `Sælges bilen ud af landet, kan en del af registreringsafgiften betales tilbage som eksportgodtgørelse, og salget til en virksomhed i et andet EU-land er normalt uden dansk moms. Udenlandske købere på Klaravik skal eksportere bilen straks efter afhentning. Se <a href="/til-varebilen/salg-af-varebil/eksport-af-varebil/">eksport af varebil</a>.`,
          `Eksportgodtgørelsen kan ikke blive større end den registreringsafgift, der oprindelig blev betalt for bilen, og bilen skal afmeldes i Motorregistret. Motorstyrelsen oplyser, at der går ca. 9 uger fra fyldestgørende dokumentation, til pengene udbetales. Hvordan beløbet beregnes, står hos Motorstyrelsen.`,
          `For momsen skal sælger have købers momsnummer og bevis for, at bilen er kørt eller transporteret til det andet land. Salget indberettes til Skattestyrelsen senest den 25. i hver måned.`
        ],
        efter: [
          `Kilder: <a href="${MST_EKS}" rel="noopener">Motorstyrelsen: Om eksport og registreringsafgift</a> og <a href="${SKAT_EU}" rel="noopener">Skattestyrelsen: Moms ved salg af varer og ydelser i EU</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal køberen eller leasingselskabet vide",
    spoergsmaal_manchet: "Så kan prisen og handlen gøres færdig uden forsinkelser.",
    spoergsmaal: [
      "Kilometerstand, servicehistorik og kendte skader.",
      "Om bilen sælges med moms eller momsfrit, og hvorfor.",
      "Hvad der følger med: indretning, lift, træk, ekstra hjul og nøgler.",
      "Om der er gæld eller restværdi i bilen, og hvem der står som ejer.",
      "Hvornår bilen kan afhentes, og hvem der står for ejerskiftet.",
      "Bilens tilladte totalvægt, fordi den har betydning for momsen."
    ],
    faq: [
      ["Skal der moms på, når firmaet sælger varebilen?", "Ja, hvis bilen blev købt med momsfradrag. Så lægges der moms på salgsprisen. Var anskaffelsen undtaget fra fradrag, er salget momsfrit."],
      ["Hvor lang tid har køberen til at omregistrere bilen?", "4 hverdage fra købet, skriver Motorstyrelsen. Sker det ikke, kan sælger bede Motorstyrelsen afmelde bilen."],
      ["Hvem indfrier restværdien på en finansiel leasingaftale?", "Leasingtager, altid. Det kan ske ved selv at købe bilen eller ved at anvise en køber."],
      ["Skal folien fjernes, før leasingbilen afleveres?", "Hos Nordania skal logo og folie være fjernet. Ayvens tager gebyr for at fjerne logo, fra 400 kr. til 3.500 kr."],
      ["Hvad koster det at sælge en varebil på auktion?", "Klaravik tager en provision, der afhænger af salgsprisen, og intet gebyr, hvis bilen ikke bliver solgt."],
      ["Hvordan tjekker man, om der er gæld i varebilen?", "Pant i biler er tinglyst i Bilbogen. Bilbasen har et pant-tjek, hvor oplysningerne kommer fra Bilbogen."],
      ["Hvad sker der, hvis den leasede bil er mindre værd end restværdien?", "På finansiel leasing indfrier leasingtager altid restværdien. Er bilen mindre værd, er forskellen leasingtagers tab, og er den mere værd, er forskellen leasingtagers gevinst."],
      ["Hvad koster det at aflevere en leaset varebil?", "Det afhænger af skaderne og leasingselskabets guide. FDM oplyser, at den gennemsnitlige regning er 10.122 kr. pr. bil, opgjort på mere end 1.500 leasingafleveringer i 2026."]
    ],
    kilder: [
      { navn: "Motorstyrelsen: Omregistrering", url: MST_OMREG, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Værdifastsættelse af brugte varebiler", url: MST_VAERDI, dato: "2026-10-04" },
      { navn: "Den juridiske vejledning 2026-2: D.A.5.24.2 Betingelser for momsfritagelse af salg af driftsmidler (tax.dk)", url: JV_SALG, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Fradrag for moms af biludgifter", url: SKAT_BIL, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: D.A.18.2 Hvem kan benytte brugtmomsordningen?", url: JV_BRUGT, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: D.A.4.1.8 Salg af aktiver som led i en virksomhedsoverdragelse", url: JV_OVERDRAG, dato: "2026-10-07" },
      { navn: "Nordania: Aflevering af firmabil leaset direkte hos Nordania", url: NORD_AFL, dato: "2026-10-07" },
      { navn: "Nordania: Anvisning af køber ved finansielle aftaler", url: NORD_ANV, dato: "2026-10-07" },
      { navn: "Nordania: Søg om udtrædelse", url: NORD_UDTR, dato: "2026-10-07" },
      { navn: "Ayvens: Aflevering af din erhvervsleasingbil", url: AYV, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYV_PDF, dato: "2026-10-07" },
      { navn: "FDM: Returtjek før aflevering af leasingbil", url: FDM, dato: "2026-10-07" },
      { navn: "Klaravik: Sælg på Klaravik", url: KV_SAELG, dato: "2026-10-07" },
      { navn: "Bilbasen: Tjek for pant og restgæld i bilen", url: BB_PANT, dato: "2026-10-04" },
      { navn: "Bilbasen: Hvordan indrykker jeg en annonce?", url: BB_ANN, dato: "2026-10-04" },
      { navn: "Klaravik: Spørgsmål og svar", url: KV_FAQ, dato: "2026-10-07" },
      { navn: "Klaravik: Købsvilkår", url: KV_KOB, dato: "2026-10-07" },
      { navn: "Auktionshuset: FAQ (pris, moms og salær)", url: AUKH, dato: "2026-10-07" },
      { navn: "Retrade: Auktionsregler og vilkår", url: RETRADE, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Om eksport og registreringsafgift for bil, motorcykel og autocamper", url: MST_EKS, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Moms ved salg af varer og ydelser i EU", url: SKAT_EU, dato: "2026-10-07" }
    ],
    cta_saetning: "Skal den gamle bil afleveres eller sælges, så skriv det, så tager vi det med i forespørgslen."
  },
  nye_fakta: [
    ["RETTET: Klaravik kalder købers betaling oveni buddet et købersalær for hver auktion, man vinder, og størrelsen fremgår af hver auktion. Den gamle side skrev 'Budgebyr pr. objekt'.", KV_FAQ],
    ["Skattestyrelsen: for vare- og lastvogne over 3 tons skal der beregnes moms af den fulde salgspris, også når bilen bruges både erhvervsmæssigt og privat.", SKAT_BIL],
    ["Den juridiske vejledning D.A.5.24.2: fritagelsen omfatter ikke salg, hvor virksomheden havde fradragsret, men ikke fik fradrag, fordi der ikke var moms på fakturaen, fx ved køb fra private.", JV_SALG],
    ["Motorstyrelsen: Motorstyrelsen afmelder køretøjet den dag, henvendelsen modtages, dog tidligst 4 hverdage efter salgsdatoen; uden slutseddel regnes fristen fra modtagelsen af anmodningen; køretøjer med klausul (fx mandskabsvogne) og ønskenummerplader omregistreres hos en nummerpladeoperatør.", MST_OMREG],
    ["Motorstyrelsen: ved omregistrering eller afmelding ændres den periodiske afgift, så den svarer til ejerperioden, og et overskydende beløb udbetales automatisk til NemKonto, hvis man ikke har gæld til det offentlige; et afmeldt køretøj står under Historiske køretøjer.", MST_OMREG],
    ["Klaravik: efter et besøg fra den lokale auktionsmægler kan køberen afhente objektet en uge senere; mangler kun afhentningen, udbetales pengene den femte arbejdsdag i måneden efter, at køberen har betalt; sælger betaler et provisionsbaseret gebyr, som afhænger af salgsbeløbet, og intet gebyr, hvis objektet ikke bliver solgt.", KV_SAELG],
    ["FDM: den gennemsnitlige regning pr. bil ved aflevering er 10.122 kr., baseret på mere end 1.500 leasingafleveringer foretaget af FDM Test og Bilsyn i 2026.", FDM],
    ["Ayvens: alle brændstofkort spærres automatisk af Ayvens.", AYV],
    ["Den juridiske vejledning D.A.18.2: en videreforhandler kan bruge brugtmomsordningen på brugte varer leveret af en afgiftspligtig person, når leveringen er fritaget efter § 13, og betaler moms af fortjenstmargenen i stedet for den fulde salgspris.", JV_BRUGT],
    ["Den juridiske vejledning D.A.4.1.8: der skal ikke beregnes moms ved salg af driftsmidler som led i en hel eller delvis virksomhedsoverdragelse (ML § 4, stk. 5); virksomheden skal inden otte dage informere om den nye indehaver og salgsprisen; der skal betales moms, når størstedelen af driftsmidlerne overdrages til en forhandler, fx en automobilforhandler, der sælger dem videre.", JV_OVERDRAG],
    ["Auktionshuset: auktionssalæret er 20 % af budsummen, dog minimum 50 kr. pr. vare.", AUKH],
    ["Motorstyrelsen: eksportgodtgørelsen kan ikke overstige den registreringsafgift, der oprindelig er betalt af køretøjet; køretøjet skal være afmeldt i Motorregistret; udbetaling sker ca. 9 uger efter modtagelse af fyldestgørende dokumentation.", MST_EKS],
    ["Skattestyrelsen: ved EU-salg skal sælger skaffe og verificere købers momsnummer og kunne dokumentere, at varen er sendt eller transporteret til det andet EU-land; salget indberettes som EU-salg uden moms senest den 25. hver måned.", SKAT_EU]
  ]
};
