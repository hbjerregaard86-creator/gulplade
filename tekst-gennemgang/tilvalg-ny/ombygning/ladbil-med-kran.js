// Underside /til-varebilen/ombygning/ladbil-med-kran/ (07-10-2026)
var AT = `https://at.dk/faa-viden/fysisk-arbejde/tekniske-hjaelpemidler/krav-til-certifikat-ved-brug-af-forskellige-maskiner/`;
var ATU = `https://at.dk/regler/bekendtgoerelse-om-arbejdsmiljoefaglige-uddannelser-sammenskrivning/`;
var TH = `https://www.retsinformation.dk/eli/lta/2022/428`;
var H270 = `https://dk.hmfcranes.com/produkter/lastbilkraner/krantyper/knaekarmskraner-k/270k-rc`;
var H340 = `https://dk.hmfcranes.com/produkter/lastbilkraner/krantyper/knaekarmskraner-k/340k-rc`;
var H610 = `https://dk.hmfcranes.com/produkter/lastbilkraner/krantyper/knaekarmskraner-k/610k-rc`;
var FKH = `https://fyns-karosseribyg.dk/brands/hmf/kran/`;
var FKP = `https://fyns-karosseribyg.dk/brands/palfinger/kran/`;
var BIL = `https://bilstrup-karosseri.dk/eftersyn`;
var REN = `https://www.renault.dk/biler/varevogne/master-chassis`;
var SYN = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var DF = `https://www.retsinformation.dk/eli/lta/2025/1484`;

module.exports = {
  id: "ombygning/ladbil-med-kran",
  side: {
    slug: "ladbil-med-kran",
    navn: "Ladbil med kran",
    titel: "Ladbil med kran: certifikat, eftersyn og vægt",
    kort: `Lastmoment, vægt og støtteben på små kraner til ladbilen, kravet om certifikat over 8 tm og reglerne for belastningsprøve, eftersyn og journal.`,
    beskrivelse: `Se lastmoment, vægt og støtteben på små HMF-kraner til ladbilen, kravet om certifikat over 8 tm og reglerne for belastningsprøve, eftersyn og journal.`,
    manchet: `En kran på ladbilen løfter materialer på og af ladet. Lastmomentet i tonmeter afgør, om føreren skal have certifikat, og om kranen skal have 10-års eftersyn. Kranens vægt går fra nyttelasten, og bilen skal til registreringssyn efter monteringen.`,
    visuel: {
      hero: "ombygning",
      kort_fortalt: [
        ["Certifikat", "over 8 tm", "til og med 8 tm er der intet krav"],
        ["Hovedeftersyn", "mindst hver 12. måned", "af en sagkyndig person"],
        ["Belastningsprøve", "125 %", "af den største tilladte arbejdsbelastning"],
        ["HMF 270K-RC", "386–421 kg", "plus 59 kg standardstøtteben"]
      ],
      toc: true,
      stribe: {
        ids: ["renault-master-chassis", "iveco-daily-ladbil", "renault-master-e-tech-chassis"],
        titel: "Ladvogne med tilbud lige nu"
      }
    },
    afsnit: [
      {
        overskrift: "Kran på ladet",
        tekst: [
          `Kranen monteres på bilens ramme, ofte via en hjælperamme, og står på støtteben, når den løfter. Kranens størrelse angives som lastmoment i tonmeter (tm).`,
          `Lastmomentet er last gange udlæg, og udlægget måles fra kranens søjle til lasten. 1 ton på 2 meters udlæg giver altså et lastmoment på 2 tm. Hvad kranen faktisk må løfte ved et bestemt udlæg, står i kranens lastdiagram.`,
          `Tonmeter bruges også i reglerne. Det er lastmomentet, der afgør, om føreren skal have certifikat, og om kranen skal have 10-års eftersyn.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="Ladbil set fra siden med en kran bag førerhuset, udstrakt kranarm med en last i krogen, nedsat støtteben og udlægget målt fra kranens søjle til lasten">
<defs><marker id="pil-kran-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<rect x="30" y="95" width="70" height="70" rx="6" class="tg-rum"/>
<line x1="30" y1="165" x2="375" y2="165" class="tg-gulvlinje"/>
<rect x="130" y="140" width="240" height="25" class="tg-profil"/>
<circle cx="70" cy="181" r="17" class="tg-kasse"/>
<circle cx="300" cy="181" r="17" class="tg-kasse"/>
<line x1="10" y1="200" x2="430" y2="200" class="tg-gulvlinje"/>
<rect x="106" y="108" width="18" height="57" class="tg-kasse"/>
<line x1="115" y1="110" x2="330" y2="44" class="tg-doer"/>
<line x1="330" y1="44" x2="330" y2="92" class="tg-gulvlinje"/>
<rect x="314" y="92" width="32" height="24" class="tg-modul"/>
<text x="330" y="108" text-anchor="middle" class="tg-modul__tekst">LAST</text>
<line x1="115" y1="165" x2="115" y2="196" class="tg-gulvlinje"/>
<rect x="103" y="196" width="24" height="4" class="tg-hylde"/>
<g class="tg-maal"><line x1="115" y1="222" x2="330" y2="222" marker-start="url(#pil-kran-1)" marker-end="url(#pil-kran-1)"/><text x="222" y="240" text-anchor="middle">udlæg</text></g>
<text x="20" y="30" class="tg-fremhaev">lastmoment (tm) = last (t) × udlæg (m)</text>
<g class="tg-call"><line x1="210" y1="81" x2="200" y2="58"/><circle cx="210" cy="81" r="3"/><text x="150" y="52" class="tg-call__navn">Kranarm</text></g>
<g class="tg-call"><line x1="124" y1="198" x2="60" y2="222"/><circle cx="124" cy="198" r="3"/><text x="8" y="238" class="tg-call__navn">Støtteben</text></g>
</svg>`,
          tekst: `Skematisk. Udlægget måles fra kranens søjle til lasten. Kapaciteten ved et bestemt udlæg står i kranens lastdiagram.`
        }
      },
      {
        overskrift: "Små kraner fra HMF",
        tekst: [
          `HMF laver små knækarmskraner, der passer til en ladbil. Tabellen viser tre modeller fra 2,4 til 6,0 tm.`,
          `Hver model fås med forskellig armlængde. En længere arm giver større hydraulisk rækkevidde, men kranen bliver tungere, og på 270K og 610K falder lastmomentet en smule. HMF 610K-RC går fx fra 6,0 tm og 630 kg med den korteste arm til 5,5 tm og 835 kg med den længste.`,
          `Kranerne kan dreje 370 grader (270K og 340K) og 400 grader (610K). Sammenfoldet er 270K og 340K 1.700 mm brede, og 610K er 2.120 mm.`
        ],
        tabel: {
          kolonner: ["Model", "Lastmoment", "Hydraulisk rækkevidde", "Vægt ekskl. støtteben", "Standardstøtteben"],
          raekker: [
            ["HMF 270K-RC", "2,4–2,5 tm", "5,64–6,99 m", "386–421 kg", "59 kg"],
            ["HMF 340K-RC", "3,2 tm", "4,39–7,15 m", "418–508 kg", "72 kg"],
            ["HMF 610K-RC", "5,5–6,0 tm", "5,2–10,8 m", "630–835 kg", "115 kg"]
          ],
          note: `Kilde: HMF, <a href="${H270}" rel="noopener">270K-RC</a>, <a href="${H340}" rel="noopener">340K-RC</a> og <a href="${H610}" rel="noopener">610K-RC</a>, set den 4. oktober 2026. Intervallerne dækker udgaver med forskellig armlængde. HMF oplyser ikke priser.`
        },
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["HMF 270K-RC", 445],
            ["HMF 340K-RC", 490],
            ["HMF 610K-RC", 745]
          ],
          note: `Korteste udgave inkl. standardstøtteben. Kilde: HMF, <a href="${H270}" rel="noopener">270K-RC</a>, <a href="${H340}" rel="noopener">340K-RC</a> og <a href="${H610}" rel="noopener">610K-RC</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Støtteben og stabilitet",
        tekst: [
          `Støttebenene holder bilen stabil, når kranen løfter. Bekendtgørelsen om anvendelse af tekniske hjælpemidler kræver, at en mobil kran bruges, så den er stabil under alle påregnelige forhold, og underlaget skal indgå i vurderingen. Der skal også være taget forholdsregler mod, at kranen kan vippe, vælte eller glide, og det skal kontrolleres, at de virker.`,
          `Standardstøttebenene er 3.000 mm brede på 270K, 3.300 mm på 340K og 3.400 mm på 610K. Ekstra brede støtteben går op til 3.900 mm på de to mindste kraner og 5.200 mm på 610K, ifølge HMF.`,
          `Bredden afgør, hvor meget plads bilen skal have ved siden af sig, når kranen arbejder.`
        ],
        figur: {
          type: "soejler",
          enhed: "mm",
          data: [
            ["270K, standard", 3000],
            ["270K, ekstra bred", 3900],
            ["340K, standard", 3300],
            ["340K, ekstra bred", 3900],
            ["610K, standard", 3400],
            ["610K, ekstra bred", 5200]
          ],
          note: `Støttebensbredde. Kilde: HMF, <a href="${H270}" rel="noopener">270K-RC</a>, <a href="${H340}" rel="noopener">340K-RC</a> og <a href="${H610}" rel="noopener">610K-RC</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Certifikat efter tonmeter",
        tekst: [
          `Arbejdstilsynet bestemmer, hvilket certifikat kranføreren skal have, ud fra kranens løftekapacitet i tonmeter. Til og med 8 tm er der intet krav, og de tre HMF-kraner ovenfor ligger alle under 8 tm.`,
          `Over 8 tm skal føreren have Kranbasis og Mobile kraner over 8 tonsmeter, og over 30 tm desuden Mobile kraner over 30 tonsmeter. Det sidste kursus findes i en udgave for lastbilkraner og i en længere udgave, hvor mobilkraner med ballast også indgår.`,
          `Ved samløft og personløft er der ingen nedre grænse. Her skal føreren have certifikat til den krantype, der bruges, uanset størrelse. Det er arbejdsgiverens ansvar, at føreren har de nødvendige certifikater, skriver Arbejdstilsynet.`
        ],
        tabel: {
          kolonner: ["Lastbilkran, løftekapacitet", "Certifikat"],
          raekker: [
            ["Til og med 8 tm", "Intet krav"],
            ["Over 8 og til og med 30 tm", "Kranbasis og Mobile kraner over 8 tonsmeter"],
            ["Over 30 tm", "Kranbasis, Mobile kraner over 8 tonsmeter og Mobile kraner over 30 tonsmeter"],
            ["Samløft eller personløft", "Certifikat uanset størrelse"]
          ],
          note: `Kilder: <a href="${AT}" rel="noopener">Arbejdstilsynet: Krav til certifikat ved brug af forskellige maskiner</a>, set den 7. oktober 2026, og <a href="${ATU}" rel="noopener">bekendtgørelse om arbejdsmiljøfaglige uddannelser</a>, §§ 4 og 5, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Skala over kranens løftekapacitet: til og med 8 tonmeter kræves intet certifikat. Over 8 tonmeter kræves Kranbasis og Mobile kraner over 8 tonsmeter, og over 30 tonmeter kræves også Mobile kraner over 30 tonsmeter."><text class="tg-fremhaev" x="140" y="30" text-anchor="middle">8 tm</text><text class="tg-fremhaev" x="280" y="30" text-anchor="middle">30 tm</text><rect class="tg-profil" x="20" y="40" width="120" height="24"/><rect class="tg-modul" x="140" y="40" width="140" height="24"/><rect class="tg-kuffert" x="280" y="40" width="100" height="24"/><text x="26" y="86">Intet krav</text><text x="26" y="100">de tre HMF-kraner</text><text x="146" y="86">Kranbasis og</text><text x="146" y="100">Mobile over 8</text><text x="286" y="86">Også Mobile</text><text x="286" y="100">over 30</text><text class="tg-lille" x="20" y="140">SAMLØFT OG PERSONLØFT: CERTIFIKAT UANSET STØRRELSE</text></svg>`,
          tekst: `Skematisk. De certifikater, føreren skal have efter kranens løftekapacitet. Skalaen er ikke målfast. Kilde: <a href="${AT}" rel="noopener">Arbejdstilsynet</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Når kranen løfter",
        tekst: [
          `Bekendtgørelsen om anvendelse af tekniske hjælpemidler har en række regler for selve løftet. De gælder for alle kraner, også de små under 8 tm, hvor der ikke er krav om certifikat.`,
          `Der må ikke løftes, når der er tvivl om, hvorvidt løftet er forsvarligt, fx på grund af byrdens vægt eller den måde, den er hængt op på. Vægten af byrden med løftetilbehør skal være kendt, når den har betydning for sikkerheden.`,
          `Personer må ikke opholde sig under en ophængt byrde, medmindre arbejdet kræver det. Kan kranføreren ikke se hele byrdens vej, hverken direkte eller med hjælpemidler, skal en signalgiver hjælpe. Udendørs skal løftet stoppe, hvis vejret bliver så dårligt, at kranen ikke længere fungerer sikkert.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Ladbil med kranen i brug. Støttebenet står nede, byrden hænger i krogen, området under byrden er markeret med stiplede linjer, og en signalgiver står ved byrden."><rect class="tg-rum" x="20" y="110" width="60" height="60" rx="6"/><rect class="tg-profil" x="100" y="145" width="150" height="25"/><line class="tg-gulvlinje" x1="20" y1="170" x2="250" y2="170"/><circle class="tg-kasse" cx="50" cy="184" r="14"/><circle class="tg-kasse" cx="210" cy="184" r="14"/><rect class="tg-kasse" x="84" y="112" width="14" height="58"/><line class="tg-gulvlinje" x1="91" y1="170" x2="91" y2="194"/><rect class="tg-hylde" x="81" y="194" width="20" height="4"/><line class="tg-doer" x1="91" y1="114" x2="300" y2="56"/><line class="tg-gulvlinje" x1="300" y1="56" x2="300" y2="110"/><rect class="tg-modul" x="284" y="110" width="32" height="22"/><text class="tg-modul__tekst" x="300" y="125" text-anchor="middle">LAST</text><line class="tg-skinne-tynd" x1="278" y1="132" x2="278" y2="198"/><line class="tg-skinne-tynd" x1="322" y1="132" x2="322" y2="198"/><circle class="tg-profil" cx="362" cy="152" r="6"/><line class="tg-skillevaeg" x1="362" y1="158" x2="362" y2="182"/><line class="tg-skillevaeg" x1="362" y1="182" x2="354" y2="198"/><line class="tg-skillevaeg" x1="362" y1="182" x2="370" y2="198"/><line class="tg-skillevaeg" x1="362" y1="166" x2="350" y2="156"/><line class="tg-gulvlinje" x1="5" y1="198" x2="395" y2="198"/><g class="tg-call"><line x1="362" y1="146" x2="370" y2="44"/><circle cx="362" cy="146" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Signalgiver</text><text class="tg-call__under" x="395" y="38" text-anchor="end">når føreren ikke ser byrden</text></g><g class="tg-call"><line x1="91" y1="196" x2="60" y2="206"/><circle cx="91" cy="196" r="3"/><text class="tg-call__navn" x="5" y="218">Støtteben</text><text class="tg-call__under" x="5" y="232">mod vip og væltning</text></g><g class="tg-call"><line x1="300" y1="180" x2="300" y2="206"/><circle cx="300" cy="180" r="3"/><text class="tg-call__navn" x="395" y="218" text-anchor="end">Ingen under byrden</text><text class="tg-call__under" x="395" y="232" text-anchor="end">medmindre arbejdet kræver det</text></g></svg>`,
          tekst: `Skematisk. Reglerne for selve løftet. Kilde: <a href="${TH}" rel="noopener">Bekendtgørelse om anvendelse af tekniske hjælpemidler, §§ 42, 44, 45, 52, 53 og 57</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Belastningsprøve",
        tekst: [
          `Reglerne står i Arbejdstilsynets bekendtgørelse om anvendelse af tekniske hjælpemidler.`,
          `Prøven skal belaste de bærende dele mest muligt, afprøve stabiliteten i de mest ugunstige stillinger og afprøve de sikkerhedsanordninger, der kontrollerer belastningen.`
        ],
        punkter: [
          `<strong>Før første brug.</strong> En sagkyndig skal lave en statisk belastningsprøve (§ 70).`,
          `<strong>Prøvelast.</strong> Prøven laves med løse vægte på 125 procent af den største tilladte arbejdsbelastning, og den sagkyndige udsteder en attest (§ 71).`,
          `<strong>Igen.</strong> Prøven skal gentages efter ombygning eller reparation, der har betydning for bæreevne eller stabilitet, efter udskiftning af bæremidler og ved hvert hovedeftersyn og 10-års eftersyn (§ 70, stk. 2).`,
          `<strong>Ikke ved hver opstilling.</strong> Lastbilkraner skal ikke prøves efter hver ny opstilling (§ 70, stk. 3).`,
          `<strong>CE-mærket kran.</strong> Har fabrikanten lavet prøven, og ligger dokumentationen i journalen, kræves ingen ny prøve før første brug (§ 70, stk. 5).`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før første brug", "En sagkyndig laver en statisk belastningsprøve med 125 procent af den største tilladte arbejdsbelastning."],
            ["Efter ombygning eller reparation", "Prøven gentages, når bæreevne eller stabilitet er berørt, og når bæremidler skiftes."],
            ["Ved hovedeftersyn", "Prøven gentages ved hvert hovedeftersyn."],
            ["Ved 10-års eftersyn", "Prøven gentages også ved 10-års eftersynet."]
          ],
          note: `Har fabrikanten lavet prøven på en CE-mærket kran, og ligger dokumentationen i journalen, kræves ingen ny prøve før første brug. Kilde: <a href="${TH}" rel="noopener">Bekendtgørelse om anvendelse af tekniske hjælpemidler, §§ 70 og 71</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Eftersyn",
        tekst: [
          `Kranen skal efterses af en sagkyndig person mindst hver 12. måned. Det gælder, selvom bilen selv skal til syn, for kravet om hovedeftersyn omfatter det mekanisk drevne udstyr, der er monteret på bilen.`,
          `Hovedeftersynet følger fabrikantens anvisninger og omfatter altid mekaniske og bærende dele, sikkerhedsudstyr som overlast- og stabilitetssikring, betjeningen, energitilførslen og de hydrauliske, pneumatiske og elektriske dele. Har kranen været lagt op, skal den efterses, før den bruges igen.`
        ],
        punkter: [
          `<strong>Hovedeftersyn.</strong> En sagkyndig person skal efterse kranen mindst hver 12. måned (§ 58), også når kranen sidder på en indregistreret bil (§ 40, stk. 3).`,
          `<strong>10-års eftersyn.</strong> Udendørs løfteudstyr med en tilladelig belastning over 1.000 kg skal have det senest, når det er 10 år, og derefter hvert 10. år (§ 73).`,
          `<strong>Undtagelse.</strong> Kraner fast monteret på indregistrerede last- og varebiler med højst 8 tonsmeter er fritaget for 10-års eftersynet (§ 73, stk. 2).`,
          `<strong>Værksted.</strong> Bilstrup Karosseri er et eksempel på en opbygger, der udfører lovpligtigt kraneftersyn, skriver eftersynsrapport og kan indkalde til det årlige eftersyn.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Kran", "Hovedeftersyn", "10-års eftersyn"],
          raekker: [
            ["Fast monteret på indregistreret last- eller varebil, højst 8 tm", "ja", "nej"],
            ["Andet udendørs løfteudstyr over 1.000 kg", "ja", "ja"]
          ],
          note: `Hovedeftersynet skal laves mindst hver 12. måned. 10-års eftersynet skal laves senest, når kranen er 10 år, og derefter hvert 10. år. Kilde: <a href="${TH}" rel="noopener">Bekendtgørelse om anvendelse af tekniske hjælpemidler, §§ 40, 58 og 73</a>, set den 7. oktober 2026.`
        },
        efter: [
          `10-års eftersynet træder i stedet for 12-måneders eftersynet det år. Det er et særligt grundigt eftersyn, hvor den sagkyndige leder efter revner, udmattelsesbrud, blivende deformation og løse eller beskadigede samlinger. Bagefter får ejeren en rapport om kranens tilstand.`
        ]
      },
      {
        overskrift: "Den sagkyndige person",
        tekst: [
          `Bekendtgørelsen kræver, at den sagkyndige person kender kranens opbygning, funktion og brugsanvisning. Personen skal også være oplært i eftersyn, service og vedligeholdelse og kende Arbejdstilsynets krav til eftersyn, prøvebelastning og journal.`,
          `Til 10-års eftersynet skal den sagkyndige desuden kunne lave styrkeberegninger for bærende konstruktioner og kende metoder til ikke-destruktive undersøgelser. Dele af kranen skal skilles ad, hvor det er nødvendigt for at undersøge dem nærmere.`
        ]
      },
      {
        overskrift: "Journal",
        tekst: [
          `Kraner, der bruges på skiftende opstillingssteder, skal have en journal, der er let tilgængelig for brugerne (§ 72). En kran på en ladbil, der løfter på skiftende byggepladser, skal derfor have en journal. Det samme gælder kraner, der bruges til personløft.`,
          `Journalen indeholder disse oplysninger:`
        ],
        punkter: [
          `Dokumentation for undersøgelse af stabiliteten og statiske belastningsprøver.`,
          `Resultater af eftersyn, herunder 10-års eftersynsrapporter.`,
          `Oplysninger om reparationer og udskiftninger af sikkerheds- og sundhedsmæssig betydning.`
        ]
      },
      {
        overskrift: "Kranen tager af nyttelasten",
        tekst: [
          `Nyttelasten er forskellen på den tilladte totalvægt og bilens egenvægt. Kranens vægt lægges til egenvægten, og totalvægten er uændret, så hvert kilo kran går fra det, bilen må laste.`,
          `Her er et regneeksempel med producenternes tal. I eksemplet er der 1.176 kg tilbage, før hjælperamme, lad og montering er trukket fra. Du kan se regnestykket for en 3.500 kg-bil i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Master Chassis L3", "1.621", "kg"],
            ["HMF 270K-RC med støtteben", "−445", "kg"],
            ["Tilbage før lad", "1.176", "kg"]
          ],
          note: `Beregnet ud fra <a href="${REN}" rel="noopener">Renault</a> (lastvægt for Master Chassis L3) og HMF (386 kg + 59 kg standardstøtteben), set den 4. oktober 2026. Hjælperamme, lad og montering trækkes også fra.`
        }
      },
      {
        overskrift: "Montering på ladbilen",
        tekst: [
          `Detailforskrifterne kræver, at en læssekran monteres efter bilfabrikantens anvisninger. Har bilen en chassisramme af stål, kan en prøvningsinstans i stedet dokumentere, at spændingerne i rammen ikke overstiger 150 newton pr. kvadratmillimeter, når kranen bruges.`,
          `Kranen sidder ofte på en hjælperamme. HMF sælger kranunderrammer, separate støttebensbomme og krankonsoller som tilbehør, så kranen og støttebenene kan tilpasses bilen. Hjælperammen vejer også noget og går fra nyttelasten ligesom kranen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Kran monteret på en ladbil set fra siden. Kranen og støttebenene sidder på en hjælperamme oven på bilens chassisramme, og ladet ligger bag kranen."><rect class="tg-hylde" x="20" y="140" width="360" height="14"/><rect class="tg-modul" x="120" y="126" width="230" height="14"/><rect class="tg-kasse" x="140" y="70" width="30" height="56"/><line class="tg-doer" x1="155" y1="74" x2="300" y2="62"/><line class="tg-doer" x1="300" y1="62" x2="240" y2="86"/><rect class="tg-profil" x="190" y="96" width="180" height="30"/><rect class="tg-kasse" x="132" y="154" width="46" height="10"/><line class="tg-gulvlinje" x1="155" y1="164" x2="155" y2="192"/><rect class="tg-hylde" x="145" y="192" width="20" height="4"/><circle class="tg-profil" cx="135" cy="147" r="3"/><circle class="tg-profil" cx="230" cy="147" r="3"/><circle class="tg-profil" cx="330" cy="147" r="3"/><circle class="tg-profil" cx="320" cy="180" r="16"/><circle class="tg-profil" cx="320" cy="180" r="6"/><line class="tg-gulvlinje" x1="5" y1="196" x2="395" y2="196"/><g class="tg-call"><line x1="150" y1="92" x2="60" y2="44"/><circle cx="150" cy="92" r="3"/><text class="tg-call__navn" x="5" y="24">Kran</text><text class="tg-call__under" x="5" y="38">efter bilfabrikantens anvisninger</text></g><g class="tg-call"><line x1="270" y1="133" x2="340" y2="44"/><circle cx="270" cy="133" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Hjælperamme</text><text class="tg-call__under" x="395" y="38" text-anchor="end">fx kranunderramme</text></g><g class="tg-call"><line x1="60" y1="150" x2="50" y2="200"/><circle cx="60" cy="150" r="3"/><text class="tg-call__navn" x="5" y="214">Chassisramme</text><text class="tg-call__under" x="5" y="228">bilens egen ramme</text></g><g class="tg-call"><line x1="166" y1="180" x2="240" y2="202"/><circle cx="166" cy="180" r="3"/><text class="tg-call__navn" x="395" y="214" text-anchor="end">Støtteben</text><text class="tg-call__under" x="395" y="228" text-anchor="end">standard eller ekstra bred</text></g></svg>`,
          tekst: `Skematisk. Kranen og støttebenene sidder på en hjælperamme oven på chassisrammen. Kilder: <a href="${DF}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 2, pkt. 2.8.2.4</a> og <a href="${H270}" rel="noopener">HMF</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Registreringssyn",
        tekst: [
          `En kran ændrer bilens egenvægt med mere end 50 kg. Så skal bilen godkendes ved et registreringssyn, før den tages i brug igen. Se <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`,
          `Montering af en læssekran står desuden i bilag 2 til detailforskrifterne under de ændringer af karrosseri og chassisramme, der regnes som konstruktive. Synet godkender konstruktive ændringer på grundlag af dokumentation, fx fra bilfabrikanten eller en prøvningsinstans.`
        ]
      },
      {
        overskrift: "Hvem monterer",
        tekst: [
          `Kraner monteres af karrosseriopbyggere. Fyns Karosseribyg fører HMF og Palfinger. Palfinger laver kraner fra 0,8 til 150 tonmeter, og PK-serien er beregnet til mindre køretøjer, skriver Fyns Karosseribyg.`,
          `Spørgsmålene nederst på siden viser, hvad opbyggeren skal vide for at vælge kran og ramme, der passer til bilen og lasten.`
        ]
      },
      {
        overskrift: "Personløft med kran",
        tekst: [
          `Løft af personer i kurv med en kran til gods har egne krav i bilag 1 til bekendtgørelsen om anvendelse af tekniske hjælpemidler. Personløft med en kran til gods er en undtagelse. Det må kun ske ved lejlighedsvist, lettere arbejde eller en helt speciel opgave af kortere varighed.`,
          `Betjeningspladsen skal hele tiden være bemandet, personerne i kurven skal have et sikkert kommunikationsmiddel, og de skal kunne evakueres. Kranen skal have mindst én hejse- og firehastighed på højst 0,3 m pr. sekund, og krogen må højst bevæge sig 0,5 m pr. sekund, når der er personer i kurven.`,
          `Kurven hænger i krogen og regnes som en del af byrden. Den skal have et 1 m højt rækværk med en 15 cm høj fodliste og være mærket med den tilladelige belastning. Kranen skal desuden have en journal.`
        ],
        punkter: [
          `Kranen skal have en tilladelig belastning på mindst 1.500 kg i den stilling, hvor personløftet sker.`,
          `Kurv med personer og materialer må højst veje 1/4 af kranens tilladelige belastning og aldrig over 1.000 kg.`,
          `Føreren skal have kranførercertifikat.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Kranens tilladelige belastning, mindst", "1.500", "kg"],
            ["Kurv med personer og materialer, højst", "1/4", "af kranens tilladelige belastning"],
            ["Kurven, aldrig over", "1.000", "kg"]
          ],
          note: `Føreren skal have kranførercertifikat til personløft. Kilde: <a href="${TH}" rel="noopener">Bekendtgørelse om anvendelse af tekniske hjælpemidler, § 59 og bilag 1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fra montering til første løft",
        tekst: [
          `Trinene nedenfor viser rækkefølgen fra montering til første løft. Belastningsprøven kan springes over før første brug, hvis kranen er CE-mærket, og fabrikantens prøve ligger i journalen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Montering", "Opbyggeren monterer kranen efter bilfabrikantens anvisninger."],
            ["Registreringssyn", "Kranen ændrer egenvægten med mere end 50 kg, så bilen skal godkendes ved syn."],
            ["Belastningsprøve", "En sagkyndig prøver kranen med 125 procent af den største tilladte arbejdsbelastning."],
            ["Journal", "Prøven, eftersyn og reparationer skrives i journalen."],
            ["Hovedeftersyn", "En sagkyndig person efterser kranen mindst hver 12. måned."]
          ]
        }
      }
    ],
    spoergsmaal_titel: "Det skal kranleverandøren vide",
    spoergsmaal_manchet: "Så kan leverandøren vælge kran og ramme, der passer til bil og last.",
    spoergsmaal: [
      "Chassisets mærke, akselafstand og tilladte totalvægt.",
      "Den tungeste last og det længste udlæg, den skal løftes på.",
      "Om kranen skal bruges på skiftende arbejdssteder eller til personløft.",
      "Hvor meget plads der typisk er til støttebenene, der hvor bilen arbejder.",
      "Den nyttelast, der skal være tilbage efter kran og lad.",
      "Hvem der står for registreringssyn, belastningsprøve og årligt eftersyn."
    ],
    faq: [
      ["Skal man have certifikat til en lille lastbilkran?", "Nej, ikke til og med 8 tonmeter, oplyser Arbejdstilsynet. Over 8 tm kræves Kranbasis og Mobile kraner over 8 tonsmeter. Ved samløft og personløft kræves certifikat uanset størrelse."],
      ["Hvor meget vejer en kran til en ladbil?", "HMF 270K-RC på 2,4–2,5 tm vejer 386–421 kg plus 59 kg standardstøtteben. HMF 610K-RC på 5,5–6,0 tm vejer 630–835 kg plus 115 kg."],
      ["Skal en kran på en varebil have 10-års eftersyn?", "Ikke hvis den er fast monteret på en indregistreret last- eller varebil og har højst 8 tonsmeter. Det årlige hovedeftersyn gælder stadig."],
      ["Skal der føres journal over en lastbilkran?", "Ja, når den bruges på skiftende opstillingssteder. Journalen skal være let tilgængelig og indeholde belastningsprøver, eftersyn og reparationer."],
      ["Hvad betyder tonmeter på en kran?", "Det er lastmomentet, altså lasten i tons gange udlægget i meter. Kapaciteten ved et bestemt udlæg står i kranens lastdiagram."],
      ["Hvor brede er støttebenene på en lille kran?", "På HMF 270K-RC er standardstøttebenene 3.000 mm brede og de ekstra brede 3.900 mm. På 610K-RC er målene 3.400 mm og 5.200 mm."],
      ["Må man løfte personer med kranen på ladbilen?", "Kun undtagelsesvist ved lejlighedsvist, lettere arbejde eller en speciel opgave af kortere varighed. Kranen skal kunne løfte mindst 1.500 kg i den stilling, hvor løftet sker, og føreren skal have kranførercertifikat."],
      ["Skal kranen synes, når bilen synes?", "Kranen skal have sit eget hovedeftersyn hos en sagkyndig person mindst hver 12. måned, også når bilen er indregistreret og skal til syn."]
    ],
    kilder: [
      { navn: "Arbejdstilsynet: Krav til certifikat ved brug af forskellige maskiner", url: AT, dato: "2026-10-07" },
      { navn: "Arbejdstilsynet: Bekendtgørelse om arbejdsmiljøfaglige uddannelser (sammenskrivning af BEK nr. 1978 af 27/10/2021)", url: ATU, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om anvendelse af tekniske hjælpemidler (BEK nr. 428 af 05/04/2022)", url: TH, dato: "2026-10-07" },
      { navn: "HMF: 270K-RC", url: H270, dato: "2026-10-07" },
      { navn: "HMF: 340K-RC", url: H340, dato: "2026-10-07" },
      { navn: "HMF: 610K-RC", url: H610, dato: "2026-10-07" },
      { navn: "Fyns Karosseribyg: HMF kran", url: FKH, dato: "2026-10-04" },
      { navn: "Fyns Karosseribyg: Palfinger kran", url: FKP, dato: "2026-10-04" },
      { navn: "Bilstrup Karosseri: Eftersyn af kran, hejs og tip", url: BIL, dato: "2026-10-04" },
      { navn: "Renault Danmark: Master Chassis", url: REN, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025), § 5", url: SYN, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), bilag 2", url: DF, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["HMF: drejevinkel 370° på 270K-RC og 340K-RC og 400° på 610K-RC; bredde sammenfoldet (standard) 1.700 mm på 270K-RC og 340K-RC og 2.120 mm på 610K-RC.", H610],
    ["HMF 610K-RC: lastmoment 6 tm med 5,2 m rækkevidde og 630 kg (K1) til 5,5 tm med 10,8 m rækkevidde og 835 kg (K4); 270K-RC: 2,5 tm (K2) og 2,4 tm (K3); 340K-RC: 3,2 tm i alle udgaver.", H610],
    ["HMF: støttebensbredde, ekstra bred, er 3.900 mm på 270K-RC og 340K-RC og 5.200 mm på 610K-RC (standard 3.000, 3.300 og 3.400 mm).", H270],
    ["HMF sælger kranunderrammer, separate støttebensbomme og krankonsoller som tilbehør til lastbilkraner.", H270],
    ["BEK 428/2022 §§ 42 og 52: et mobilt teknisk hjælpemiddel til løft af byrder skal anvendes, så det er stabilt under alle påregnelige forhold under hensyntagen til underlagets art; der skal træffes foranstaltninger mod, at det kan vippe, vælte eller forskubbe sig og glide, og det skal kontrolleres, at foranstaltningerne virker.", TH],
    ["BEK 428/2022 §§ 44, 45, 53 og 57: der må ikke løftes, når der er tvivl om, hvorvidt løftet er forsvarligt; byrdens vægt inkl. løftetilbehør skal fastslås, hvis det er af sikkerhedsmæssig betydning; personer må ikke opholde sig under ophængte byrder, medmindre det er nødvendigt for arbejdet; kan operatøren ikke observere hele byrdens bevægelsesbane, skal operatøren assisteres af en signalgivende person; udendørs brug afbrydes, hvis vejret går ud over funktionssikkerheden.", TH],
    ["Arbejdstilsynet: ved samløft og personløft med kran skal man have certifikat til krantypen, og der er ingen nedre vægtgrænse; uddannelsen 'Mobile kraner over 30 tonsmeter' udbydes i en version for lastbilkraner og en længerevarende version, hvor mobilkran med ballast indgår.", AT],
    ["BEK 428/2022 § 71, stk. 1: statiske belastningsprøver skal udsætte de bærende dele for de ugunstigste belastninger, afprøve stabiliteten i de ugunstigste stillinger og afprøve sikkerhedsanordninger til kontrol af belastningen.", TH],
    ["BEK 428/2022 § 40, stk. 3, og § 58, stk. 3 og 4: indregistrerede køretøjer med synskrav er undtaget fra hovedeftersyn af selve køretøjet, men påmonterede mekanisk drevne tekniske hjælpemidler er omfattet; hovedeftersynet følger fabrikantens anvisninger og omfatter altid mekaniske og bærende dele, sikkerhedsudstyr inkl. overlast- og stabilitetssikring, betjeningsanordninger, energitilførsel og hydrauliske, pneumatiske og elektriske komponenter; udstyr, der har været lagt op, skal have hovedeftersyn før brug.", TH],
    ["BEK 428/2022 § 73: 10-års eftersynet træder i stedet for 12-måneders eftersynet det år; det omfatter et særligt grundigt eftersyn for revnedannelse eller udmattelsesbrud, permanent deformation og løse eller beskadigede samlinger; dele adskilles, hvor det skønnes nødvendigt; den sagkyndige skal kunne styrkeberegninger og ikke-destruktive undersøgelsesmetoder og udleverer en rapport til ejeren.", TH],
    ["BEK 428/2022 § 58, stk. 2: den sagkyndige person skal have kendskab til hjælpemidlets opbygning og funktion, oplæring i eftersyn, service og vedligeholdelse, kendskab til brugsanvisningen og til Arbejdstilsynets krav om eftersyn, prøvebelastning og journal.", TH],
    ["BEK 428/2022 § 72, stk. 1, nr. 4: der skal føres journal for mekanisk drevne tekniske hjælpemidler til løft af frithængende byrder, der anvendes til personløft.", TH],
    ["BEK 1484/2025 bilag 2, pkt. 2.8.2.4: læssekran skal monteres efter køretøjsfabrikantens anvisninger; har bilen chassisramme af stål, kan en prøvningsinstans alternativt dokumentere, at spændingerne i chassisrammen ikke overstiger 150 N/mm2; punktet står under ændringer af karrosseri og chassisramme, der anses som konstruktive ændringer.", DF],
    ["BEK 428/2022 § 59, stk. 2 og 4: personløft med kran må kun ske undtagelsesvist ved lejlighedsvis, lettere arbejde eller en arbejdsopgave af helt speciel karakter af kortere varighed; betjeningspladsen skal hele tiden være bemandet, personerne skal have et sikkert kommunikationsmiddel og kunne evakueres.", TH],
    ["BEK 428/2022 bilag 1: kurv eller platform er ophængt i krogen og betragtes som en del af byrden; kranen skal have mindst én hejse- og firehastighed på højst 0,3 m/s, krogens hastighed må ved persontransport ikke overstige 0,5 m/s; kurven skal have 1 m højt rækværk med 15 cm fodliste og være mærket med tilladelig belastning.", TH]
  ]
};
