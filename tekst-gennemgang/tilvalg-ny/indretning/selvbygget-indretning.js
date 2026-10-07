// Underside /til-varebilen/indretning/selvbygget-indretning/ (07-10-2026)
var VOSAK = `https://cdn.fstyr.dk/faerdselsstyrelsen/Media/639102143281512027/VOSAK11.pdf`;
var BEK3 = `https://www.lovguiden.dk/loven/bekendtg%C3%B8relse-om-udf%C3%B8relse-af-syn-af-erhvervsk%C3%B8ret%C3%B8jer-ved-vejsiden/bilag-3`;
var CROWN = `https://koskisen.fi/en/downloads/koskicrown`;
var KORE = `https://koskisen.fi/en/downloads/kore-floors`;
var DVIP = `https://varebilindretning.dk/prisberegner/indretning/`;
var DVIT = `https://varebilindretning.dk/vi-tilbyder/brugervenlig-bilindretning-i-trae/`;
var SVB = `https://smartvan.dk/kategori/bilindretning-til-varevognen/`;
var SVR = `https://smartvan.dk/produkt/bilindretning-med-udskaering-til-hjulkasse-jumpy-expert-proace-16-vivaro-19-scudo-22-l2/`;
var SVG = `https://smartvan.dk/kategori/varerumsgulv/`;
var MS = `https://www.modul-system.dk/da/content/flooring-lining-modul-system`;
var MSE = `https://www.modul-system.dk/da/content/electric-van-solutions`;
var AUT = `https://autoroladanmark.dk/aflevering/skadeguide/`;
var OPENDO = `https://www.opendo.dk/wp-api/wp-content/uploads/2025/11/Wear-Tear-Guide-Person-og-varebiler-3.pdf`;
var SKM = `https://info.skat.dk/data.aspx?oid=2303451`;

module.exports = {
  id: "indretning/selvbygget-indretning",
  side: {
    slug: "selvbygget-indretning",
    navn: "Selvbygget indretning",
    titel: "Selvbygget indretning i varebil: træ eller modul",
    kort: `Her kan du sammenligne selvbyg i træ, skræddersyet træ og modulsystem på vægt, pris, lastsikring, reglerne for vognbunden og afleveringen af leasingbilen.`,
    beskrivelse: `Selvbygget indretning i varebil: træ mod modulsystem, vægt pr. m², priser fra 5.518 kr., lastsikring, reglerne for vognbunden og afleveringen.`,
    manchet: `En indretning kan bygges selv i krydsfiner, skræddersys i træ af et værksted eller købes som modulsystem. Valget har betydning for vægt, lastsikring og for, hvad der sker, når en leaset bil skal afleveres.`,
    visuel: {
      hero: "indretning",
      kort_fortalt: [
        ["Krydsfiner, 9–12 mm", "6,1–8,2 kg", "pr. m²"],
        ["Reol i træ med 3 hylder", "fra 5.518 kr.", "inkl. montering, Dansk Varebilindretning"],
        ["Kraft fremad ved 100 kg", "ca. 80 daN", "ved en hård opbremsning"],
        ["Huller i gulvet", "K4–K5", "unormal slitage ved aflevering"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Tre måder at indrette på",
        tekst: [
          `Der er tre veje til en indretning. Du kan bygge den selv, få et værksted til at bygge den i træ efter bilens mål eller købe et færdigt modulsystem til modellen.`,
          `Forskellen ligger ikke kun i prisen. Den ligger også i vægten, i dokumentationen for styrken og i, om indretningen kan flyttes til næste bil.`
        ],
        kort: [
          ["Selvbyg i træ", "Reoler og hylder bygges i krydsfiner efter bilens mål. Der er ingen dokumentation for styrken."],
          ["Skræddersyet i træ", "Værksteder som Dansk Varebilindretning bygger i træ med forkanter i aluminium efter kundens behov og monterer indretningen."],
          ["Modulsystem", "Færdige reoler, ofte i aluminium, passer til den konkrete model. SmartVan oplyser, at deres reolpakker er crashtestet."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tre reoler set forfra: en selvbygget reol i krydsfiner, en skræddersyet reol i træ med fremhævede forkanter i aluminium og et modulsystem med sideprofiler, kasser og en skuffe."><rect class="tg-kasse" x="20" y="40" width="96" height="120"/><rect class="tg-hylde" x="20" y="78" width="96" height="5"/><rect class="tg-hylde" x="20" y="118" width="96" height="5"/><rect class="tg-kasse" x="152" y="40" width="96" height="120"/><rect class="tg-hylde" x="152" y="78" width="96" height="5"/><rect class="tg-hylde" x="152" y="118" width="96" height="5"/><rect class="tg-modul" x="152" y="74" width="96" height="6"/><rect class="tg-modul" x="152" y="114" width="96" height="6"/><rect class="tg-modul" x="152" y="40" width="96" height="6"/><rect class="tg-profil" x="284" y="40" width="10" height="120"/><rect class="tg-profil" x="370" y="40" width="10" height="120"/><g class="tg-huller"><circle cx="289" cy="52" r="1.6"/><circle cx="289" cy="66" r="1.6"/><circle cx="289" cy="80" r="1.6"/><circle cx="289" cy="94" r="1.6"/><circle cx="289" cy="108" r="1.6"/><circle cx="289" cy="122" r="1.6"/><circle cx="375" cy="52" r="1.6"/><circle cx="375" cy="66" r="1.6"/><circle cx="375" cy="80" r="1.6"/><circle cx="375" cy="94" r="1.6"/><circle cx="375" cy="108" r="1.6"/><circle cx="375" cy="122" r="1.6"/></g><rect class="tg-hylde" x="294" y="80" width="76" height="5"/><rect class="tg-kasse" x="298" y="50" width="32" height="30"/><rect class="tg-kasse" x="334" y="50" width="32" height="30"/><rect class="tg-skuffe" x="296" y="126" width="72" height="28"/><line class="tg-gulvlinje" x1="5" y1="160" x2="395" y2="160"/><text class="tg-fremhaev" x="68" y="180" text-anchor="middle">Selvbyg i træ</text><text x="68" y="194" text-anchor="middle">krydsfiner</text><text class="tg-fremhaev" x="200" y="180" text-anchor="middle">Skræddersyet i træ</text><text x="200" y="194" text-anchor="middle">forkanter i aluminium</text><text class="tg-fremhaev" x="332" y="180" text-anchor="middle">Modulsystem</text><text x="332" y="194" text-anchor="middle">til modellen</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${DVIT}" rel="noopener">Dansk Varebilindretning: Brugervenlig bilindretning i træ</a> og <a href="${SVB}" rel="noopener">SmartVan: Bilindretning</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Træ eller metal",
        tekst: [
          `Dansk Varebilindretning skriver, at deres skræddersyede indretninger i træ med forkanter i aluminium dæmper støjen og typisk vejer mindre end andre løsninger. Ifølge værkstedet er træ et fleksibelt materiale, der ikke bliver træt af bevægelserne i varerummet, sådan som metal kan blive.`,
          `Værkstedet nævner også, at træ ikke smitter af på fx hvide kabelkanaler og stikkontakter, som indretninger i metal kan gøre. Dansk Varebilindretning samler reolerne på sin egen måde og skriver selv, at de ikke kan sammenlignes med reoler, man bygger selv.`,
          `Producenterne af modulsystemer lægger vægt på den lave vægt. Modul-System skriver, at det letteste materiale er det, der begrænser indretningens påvirkning af miljøet mest gennem bilens levetid.`
        ]
      },
      {
        overskrift: "Hvad materialerne vejer",
        tekst: [
          `Vægten går fra bilens nyttelast, uanset om indretningen er bygget i træ eller aluminium. Krydsfiner opgives i kg pr. m², og det gør det let at regne en selvbygget reol ud, når du kender pladernes mål.`
        ],
        tabel: {
          kolonner: ["Materiale", "Vægt"],
          raekker: [
            ["Birkekrydsfiner, densitet", "ca. 700 kg pr. m³"],
            ["Krydsfiner 9–12 mm", "6,1–8,2 kg pr. m²"],
            ["Polypropylen 10 mm", "4,4 kg pr. m²"],
            ["Aluminiumsreoler til begge sider, Vivaro 19- / Proace 16- L2", "43,6 kg i alt"]
          ],
          note: `Kilder: <a href="${CROWN}" rel="noopener">Koskisen: KoskiCrown</a>, <a href="${KORE}" rel="noopener">Koskisen: Kore van plywood floors</a> og <a href="${SVR}" rel="noopener">SmartVan: reolpakke L2</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "noegletal",
          data: [
            ["Birkekrydsfiner", "ca. 700", "kg pr. m³"],
            ["Krydsfiner, 9–12 mm", "6,1–8,2", "kg pr. m²"],
            ["Polypropylen, 10 mm", 4.4, "kg pr. m²"],
            ["Plade på 2,5 × 1,25 m, 12 mm", "ca. 26", "kg"]
          ],
          note: `Kilder: <a href="${CROWN}" rel="noopener">Koskisen: KoskiCrown</a> og <a href="${KORE}" rel="noopener">Koskisen: Kore van plywood floors</a>, set den 4. oktober 2026.`
        },
        efter: [
          `En plade birkekrydsfiner på 2,5 × 1,25 m i 12 mm vejer ca. 26 kg ved 700 kg pr. m³. Dansk Varebilindretning oplyser, at deres træindretninger typisk vejer mindre end andre løsninger. Vægten afhænger af, hvor meget materiale konstruktionen bruger, så den kan kun sammenlignes på den færdige reol.`
        ]
      },
      {
        overskrift: "Pris: træ fra værksted mod modul",
        tekst: [
          `Priserne kan ikke sammenlignes direkte, fordi de dækker forskellige ting. Dansk Varebilindretnings priser er inkl. montering, og prisberegneren angiver ikke moms. SmartVans priser er uden moms og uden montering, så monteringen kommer oveni.`,
          `En reol i træ til venstre side med 3 hylder koster fra 5.518 kr. hos Dansk Varebilindretning. SmartVans reolpakke i aluminium til begge sider af en Vivaro eller Proace L2 koster 14.800 kr.`
        ],
        tabel: {
          kolonner: ["Indretning", "Forhandler", "Pris"],
          raekker: [
            ["Reol til venstre side med 3 hylder", "Dansk Varebilindretning", "fra 5.518 kr."],
            ["Forvægsreol med 4 skuffer", "Dansk Varebilindretning", "9.442 kr."],
            ["Dobbeltbund med 2 skuffer", "Dansk Varebilindretning", "fra 10.502 kr."],
            ["Dobbelt fag med 4 hylder i aluminium, 32,9 kg", "SmartVan", "13.250 kr."],
            ["Reolpakke i aluminium til begge sider, Vivaro / Proace L2", "SmartVan", "14.800 kr."]
          ],
          note: `Dansk Varebilindretnings priser er inkl. montering. SmartVans priser er uden montering. Kilder: <a href="${DVIP}" rel="noopener">Dansk Varebilindretning: Prisberegner</a> og <a href="${SVB}" rel="noopener">SmartVan: Bilindretning</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Reolpakke i aluminium til begge sider, Vivaro og Proace L2", 14800, "SmartVan"],
            ["Dobbelt fag med 4 hylder i aluminium, 32,9 kg", 13250, "SmartVan"],
            ["Dobbeltbund med 2 skuffer", 10502, "Dansk Varebilindretning, fra"],
            ["Forvægsreol med 4 skuffer", 9442, "Dansk Varebilindretning"],
            ["Reol til venstre side med 3 hylder", 5518, "Dansk Varebilindretning, fra"]
          ],
          note: `Dansk Varebilindretnings priser er inkl. montering. SmartVans priser er uden montering. Kilder: <a href="${DVIP}" rel="noopener">Dansk Varebilindretning: Prisberegner</a> og <a href="${SVB}" rel="noopener">SmartVan: Bilindretning</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Lastsikring i en selvbygget reol",
        tekst: [
          `EN 12195-1 og EU's retningslinjer for lastsikring regner med 0,8 gange vægten fremad og 0,5 gange til siderne og bagud. Det gælder også det, der står på en reol. Står der 100 kg på en reol, skal reolen og dens fastgørelse i bilen tage ca. 80 daN fremad ved en hård opbremsning. 1 daN svarer omtrent til den kraft, 1 kg trykker nedad med.`,
          `Producenter af modulsystemer dokumenterer styrken med test. SmartVan oplyser crashtest efter ECE reg. 17, og Modul-Systems skuffer under dobbeltbunden har et panel, der holder lasten tilbage ved en ulykke. En selvbygget reol har ingen tilsvarende dokumentation.`,
          `Kasser og kufferter, der låses i reolen, og surringsskinner i reolen giver faste punkter til lasten. Se <a href="/til-varebilen/indretning/lastsikring-i-varebil/">lastsikring i varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Reol set fra siden med 100 kg på øverste hylde og en pil fremad: ca. 80 daN ved en hård opbremsning."><rect class="tg-profil" x="150" y="30" width="120" height="150"/><rect class="tg-hylde" x="150" y="80" width="120" height="5"/><rect class="tg-hylde" x="150" y="130" width="120" height="5"/><rect class="tg-kuffert" x="170" y="50" width="70" height="30"/><text class="tg-fremhaev" x="184" y="70">100 kg</text><line class="tg-pil" x1="170" y1="64" x2="80" y2="64"/><path class="tg-pil" d="M86,58 L80,64 L86,70"/><text class="tg-fremhaev" x="0" y="52">ca. 80 daN</text><text x="0" y="84">ved hård</text><text x="0" y="98">opbremsning</text><rect class="tg-modul" x="150" y="174" width="12" height="6"/><rect class="tg-modul" x="258" y="174" width="12" height="6"/><line class="tg-gulvlinje" x1="100" y1="180" x2="380" y2="180"/><g class="tg-call"><line x1="264" y1="177" x2="288" y2="152"/><circle cx="264" cy="177" r="3"/><text class="tg-call__navn" x="290" y="146">Fastgørelse</text><text class="tg-call__under" x="290" y="160">i bilen</text></g><text class="tg-lille" x="0" y="196">FRONTEN TIL VENSTRE</text></svg>`,
          tekst: `Skematisk. 100 kg på en reol. Ifølge EN 12195-1 og EU's retningslinjer skal reolen og dens fastgørelse i bilen tage ca. 80 daN fremad ved en hård opbremsning.`
        }
      },
      {
        overskrift: "Det siger reglerne om varerummet",
        tekst: [
          `Der er ikke særlige regler for, hvem der bygger indretningen. Reglerne handler om varerummet og gælder, uanset om reolerne er bygget selv eller købt færdige. De står i Færdselsstyrelsens vejledning om syn af køretøjer. Oveni gælder færdselslovens § 82 om, at lasten skal være anbragt, så den ikke er til fare og ikke kan falde af.`
        ],
        punkter: [
          `<strong>Reoler er tilladt.</strong> Varerummet må have hylder, reoler, skabe og rumopdelere, der fastholder godset.`,
          `<strong>Ubrudt vognbund.</strong> Gulvet skal være en ubrudt flade, men lemme til stuverum under gulvet er tilladt.`,
          `<strong>Varerummets længde.</strong> I enhver højde mellem 0 og 0,60 m skal varerummet være mindst 1,20 m langt.`,
          `<strong>Adskillelse.</strong> Biler, der er registreret første gang 1. juli 2025 eller senere, skal have adskillelse eller fastgørelsesanordninger efter ISO 27956:2009, uanset indretningen. Se <a href="/til-varebilen/indretning/skillevaeg/">skillevæg</a>.`
        ],
        efter: [
          `Kilde: <a href="${VOSAK}" rel="noopener">Færdselsstyrelsens vejledning om syn af køretøjer</a>, definitionen af varebil og pkt. 9.01.024.`
        ]
      },
      {
        overskrift: "Montering i karrosseriet",
        tekst: [
          `En indretning skal fastgøres i bilen. Modul-System limer gulve, beklædning og fastgørelsespunkter på karrosseriet i stedet for at bore og skriver, at det beskytter restværdien og fjerner risikoen for korrosion. VanKompagniet skriver, at et tilpasset varerumsgulv kan danne grundlag for montering af reoler, og SmartVans plastgulve monteres i bilens egne surringsringe.`,
          `Modul-System sælger borefri løsninger til elvarebiler. Se <a href="/til-varebilen/indretning/indretning-af-elvarebil/">indretning af elvarebil</a>.`,
          `Hvilken metode der passer, afhænger af, om bilen er ejet eller leaset, og om indretningen skal tages ud igen. Gulv og beklædning er beskrevet i <a href="/til-varebilen/indretning/gulv-og-vaegbeklaedning/">gulv og vægbeklædning</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Tre snit af gulvet. Til venstre er et beslag boltet gennem et nyt hul i karrosseriet. I midten er beslaget limet på uden hul. Til højre holdes gulvet af bilens egen surringsring i det eksisterende hul."><text class="tg-lille" x="10" y="20">TRE MÅDER AT FASTGØRE, SNIT</text><path class="tg-profil" d="M40,110 V74 H50 V100 H100 V110 Z"/><rect class="tg-hylde" x="15" y="110" width="105" height="8"/><rect class="tg-kuffert" x="70" y="94" width="8" height="34"/><rect class="tg-kasse" x="64" y="126" width="20" height="7"/><path class="tg-profil" d="M170,104 V68 H180 V94 H236 V104 Z"/><rect class="tg-modul" x="168" y="104" width="70" height="6"/><rect class="tg-hylde" x="145" y="110" width="110" height="8"/><rect class="tg-hylde" x="275" y="110" width="110" height="8"/><rect class="tg-gulv" x="275" y="98" width="110" height="12"/><rect class="tg-kuffert" x="327" y="88" width="6" height="30"/><circle class="tg-profil" cx="330" cy="82" r="8"/><text class="tg-fremhaev" x="68" y="152" text-anchor="middle">Boret</text><text x="68" y="168" text-anchor="middle">hul i karrosseriet</text><text class="tg-fremhaev" x="200" y="152" text-anchor="middle">Limet</text><text x="200" y="168" text-anchor="middle">intet hul</text><text class="tg-fremhaev" x="330" y="152" text-anchor="middle">Surringsring</text><text x="330" y="168" text-anchor="middle">eksisterende hul</text></svg>`,
          tekst: `Skematisk. Det fremhævede lag i midten er limen. Kilder: <a href="${MS}" rel="noopener">Modul-System: Gulv og vægbeklædning</a> og <a href="${SVG}" rel="noopener">SmartVan: Varerumsgulv</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Huller i gulvet",
        tekst: [
          `Huller i læsseområdets gulv regnes som unormal slitage, K4–K5, i både Autorolas og Opendos skadeguider. Det samme gælder rifter, flænger og manglende dele på læssegulvet eller beklædningen.`,
          `En selvbygget reol, der skrues direkte i bilens gulv, efterlader derfor huller, som kan komme på afleveringsrapporten. Reoler, der fastgøres i bilens egne surringspunkter, i et gulv lagt oven på metalbunden eller med lim, efterlader ikke nye huller i karrosseriet.`,
          `Ekstra tilbehør, der er korrekt installeret og overholder bilens forskrifter, regnes som normal slitage i skadeguiderne.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="To varerum set ovenfra. Til venstre er reolen boret fast i gulvet, og hullerne regnes som unormal slitage, K4 til K5. Til højre er reolen fastgjort i bilens egne punkter eller limet, så der ikke er nye huller."><text class="tg-lille" x="10" y="20">VARERUMMET SET OVENFRA</text><rect class="tg-rum" x="10" y="30" width="180" height="110"/><rect class="tg-kasse" x="20" y="38" width="150" height="22"/><circle class="tg-modul" cx="40" cy="66" r="4"/><circle class="tg-modul" cx="95" cy="66" r="4"/><circle class="tg-modul" cx="150" cy="66" r="4"/><circle class="tg-modul" cx="60" cy="110" r="4"/><circle class="tg-modul" cx="130" cy="110" r="4"/><rect class="tg-rum" x="210" y="30" width="180" height="110"/><rect class="tg-kasse" x="220" y="38" width="150" height="22"/><circle class="tg-profil" cx="226" cy="130" r="4"/><circle class="tg-profil" cx="374" cy="130" r="4"/><circle class="tg-profil" cx="226" cy="70" r="4"/><circle class="tg-profil" cx="374" cy="70" r="4"/><text class="tg-fremhaev" x="100" y="162" text-anchor="middle">Boret i gulvet</text><text x="100" y="178" text-anchor="middle">huller er K4–K5</text><text class="tg-fremhaev" x="300" y="162" text-anchor="middle">Uden nye huller</text><text x="300" y="178" text-anchor="middle">bilens punkter eller lim</text></svg>`,
          tekst: `Skematisk. De fremhævede prikker til venstre er nye huller, og prikkerne til højre er bilens egne surringspunkter. Kilder: <a href="${AUT}" rel="noopener">Autorola: Skadeguide</a> og <a href="${OPENDO}" rel="noopener">Opendo: Wear &amp; Tear guide</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tilbagelevering af leasingbilen",
        tekst: [
          `Ved aflevering vurderes skader på en skala fra K1 til K5. Kun K3–K5 kommer på rapporten. K4 betyder, at delen skal repareres eller lakeres, og K5, at den skal skiftes. Autorola og Opendo bruger disse eksempler for varerummet:`
        ],
        tabel: {
          kolonner: ["Eksempel i varerummet", "Kategori"],
          raekker: [
            ["Ekstra tilbehør, der er korrekt installeret og overholder bilens forskrifter", "K1–K3, normal slitage"],
            ["Ridser, skrammer og deformation, der ikke påvirker dørene og ikke kan ses udefra", "K1–K3, normal slitage"],
            ["Afskrabninger og buler på karme og vægge, der ikke påvirker rummets funktion og ikke kan ses udefra", "K1–K3, normal slitage"],
            ["Huller i læsseområdets gulv", "K4–K5, unormal slitage"],
            ["Manglende eller ødelagt beklædning, der begrænser brugen af døre, vinduer eller tilbehør", "K4–K5, unormal slitage"],
            ["Deformation af hjulkasse og tegn på forkert læsning eller utilstrækkelig sikring af gods", "K4–K5, unormal slitage"],
            ["Manglende skillevægge eller deformerede skillevægge", "K4–K5, unormal slitage"],
            ["Buler, ridser og skrammer med rust", "K4–K5, unormal slitage"]
          ],
          note: `Kilder: <a href="${AUT}" rel="noopener">Autorola: Skadeguide</a> og <a href="${OPENDO}" rel="noopener">Opendo: Wear &amp; Tear guide, gældende fra 1. november 2025</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 166" role="img" aria-label="Skala fra K1 til K5. K1 til K3 er normal slitage, K4 og K5 er unormal slitage. K4 skal repareres eller lakeres, K5 skal skiftes. K3 til K5 kommer på rapporten."><text class="tg-lille" x="0" y="22">NORMAL SLITAGE</text><text class="tg-lille" x="237" y="22">UNORMAL SLITAGE</text><path class="tg-pil" d="M0,34 V30 H230 V34"/><path class="tg-pil" d="M237,34 V30 H388 V34"/><rect class="tg-kasse" x="0" y="40" width="72" height="40"/><text class="tg-fremhaev" x="28" y="65">K1</text><rect class="tg-kasse" x="79" y="40" width="72" height="40"/><text class="tg-fremhaev" x="107" y="65">K2</text><rect class="tg-kasse" x="158" y="40" width="72" height="40"/><text class="tg-fremhaev" x="186" y="65">K3</text><rect class="tg-modul" x="237" y="40" width="72" height="40"/><text class="tg-fremhaev" x="265" y="65">K4</text><rect class="tg-modul" x="316" y="40" width="72" height="40"/><text class="tg-fremhaev" x="344" y="65">K5</text><text x="237" y="100">repareres</text><text x="237" y="114">eller lakeres</text><text x="327" y="100">skiftes</text><path class="tg-pil" d="M158,126 V132 H388 V126"/><text class="tg-lille" x="158" y="150">PÅ RAPPORTEN</text></svg>`,
          tekst: `Skematisk. Skalaen fra K1 til K5, som Autorola og Opendo bruger ved aflevering. Kun K3–K5 kommer på rapporten. Kilder: <a href="${AUT}" rel="noopener">Autorola: Skadeguide</a> og <a href="${OPENDO}" rel="noopener">Opendo: Wear &amp; Tear guide</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Retningslinjerne siger ikke, om indretningen skal afmonteres før aflevering. Det står i den enkelte leasingaftale. Se også <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">det står ikke i leasingtilbuddet</a>.`
        ]
      },
      {
        overskrift: "Afleveringen trin for trin",
        tekst: [
          `Hos Opendo gennemgår en uvildig part hele bilen, når den afleveres, fx Autorola Danmark, FDM eller Applus+. Rapporten viser bilens stand på afleveringstidspunktet, også i varerummet.`,
          `Skaderne beregnes i FORSI, som er forsikringsselskabernes fælles system til opgørelse af skader. Opendo vurderer skaderne pr. felt, så det samme felt ikke repareres eller lakeres flere gange, selvom der er flere skader på det.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før afleveringen", "Leasingaftalen viser, hvilket udstyr og tilbehør der skal følge med bilen."],
            ["Gennemgangen", "En uvildig part, fx Autorola Danmark, FDM eller Applus+, gennemgår hele bilen."],
            ["Rapporten", "Skader vurderes fra K1 til K5, og kun K3–K5 kommer på rapporten."],
            ["Opgørelsen", "Skaderne beregnes i FORSI og vurderes pr. felt."]
          ],
          note: `Opendos fremgangsmåde. Andre leasingselskaber kan bruge andre vurderingsfirmaer. Kilde: <a href="${OPENDO}" rel="noopener">Opendo: Wear &amp; Tear guide, gældende fra 1. november 2025</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Udstyr og gebyrer ved afleveringen",
        tekst: [
          `Opendo skriver, at manglende eller defekte dele fra udstyrslisten i leasingkontrakten også vurderes. Leasingaftalen viser, hvilket udstyr og tilbehør der skal følge med bilen, fx tagbøjler og medfølgende værktøj.`,
          `Ud over skaderne kan leasingselskabet opkræve gebyrer, fx for manglende dele eller for at sende glemte ting efter. Opendos gebyrer er uden moms og står i deres guide.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Mangler ved aflevering", "520", "kr."],
            ["Kontrol af sletning af persondata", "240", "kr."],
            ["Forsendelse af glemte effekter", "640", "kr."]
          ],
          note: `Opendos gebyrliste. Kilde: <a href="${OPENDO}" rel="noopener">Opendo: Wear &amp; Tear guide, gældende fra 1. november 2025</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Flytning til næste bil",
        tekst: [
          `Dansk Varebilindretning oplyser, at deres træindretninger kan flyttes til en ny varebil flere gange, og at nogle reoler har kørt i over 25 år. Modulsystemer kan flyttes, når den nye bil har samme lastrumsmål. Se <a href="/til-varebilen/indretning/brugt/">brugt indretning</a>.`,
          `En selvbygget reol er bygget efter målene i én bestemt bil. Har den næste bil andre mål mellem hjulkasserne eller en anden højde, skal reolen bygges om eller laves på ny.`
        ]
      },
      {
        overskrift: "Selvbyg og specialindretning",
        tekst: [
          `Om bilen er specialindrettet, afhænger af behovet for indretningen, ikke af om den er købt eller bygget selv. Kriterierne er et erhvervsmæssigt behov for indretningen, og at bilen er nødvendig for, at brugeren kan udføre sit arbejde (<a href="${SKM}" rel="noopener">Skattestyrelsen</a>). Se <a href="/haandbogen/specialindretning-af-varebil/">specialindretning af varebil</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så kan indretningen bygges, monteres og afleveres uden overraskelser.",
    spoergsmaal: [
      "Model, længde og højde, og om bilen er leaset eller ejet.",
      "Hvad der skal med, og hvad det tungeste vejer.",
      "Om der må bores i karrosseriet, eller om alt skal monteres i gulv og surringspunkter.",
      "Om indretningen skal kunne flyttes til en ny bil.",
      "Hvad leasingaftalen kræver ved aflevering.",
      "Om der skal surringsskinner, låsbare kasser eller dobbeltbund."
    ],
    faq: [
      ["Må man selv bygge indretning i en varebil?", "Ja. Varerummet må have hylder, reoler og skabe, der fastholder godset, og vognbunden skal være en ubrudt flade (Færdselsstyrelsen). Lasten skal være sikret efter færdselslovens § 82."],
      ["Er træ tungere end aluminium?", "Birkekrydsfiner vejer ca. 700 kg pr. m³ og 6,1–8,2 kg pr. m² i 9–12 mm. En aluminiumsreolpakke til begge sider af en Vivaro eller Proace L2 vejer 43,6 kg. Vægten af den færdige reol afhænger af konstruktionen."],
      ["Hvad koster en indretning i træ?", "Hos Dansk Varebilindretning koster en reol til venstre side med 3 hylder fra 5.518 kr. og en dobbeltbund med 2 skuffer fra 10.502 kr., inkl. montering. Prisberegneren angiver ikke moms (4. oktober 2026)."],
      ["Hvad sker der med huller i gulvet, når leasingbilen afleveres?", "Huller i læsseområdets gulv regnes som K4–K5, altså unormal slitage, i Autorolas og Opendos skadeguider."],
      ["Kan en træindretning flyttes til en ny bil?", "Dansk Varebilindretning oplyser, at deres træindretninger kan flyttes flere gange. Det kræver, at målene passer til den nye bil."],
      ["Hvem vurderer skaderne, når bilen afleveres?", "Hos Opendo gennemgår en uvildig part bilen, fx Autorola Danmark, FDM eller Applus+. Skaderne beregnes i FORSI, forsikringsselskabernes fælles system."],
      ["Skal indretningen tages ud, før bilen afleveres?", "Det står i den enkelte leasingaftale. Skadeguiderne regner korrekt installeret ekstra tilbehør som normal slitage, men huller i gulvet som unormal slitage."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, 1. april 2026", url: VOSAK, dato: "2026-10-04" },
      { navn: "BEK nr. 1655 af 05/12/2025, bilag 3", url: BEK3, dato: "2026-10-04" },
      { navn: "Koskisen: KoskiCrown og Kore van plywood floors (produktark)", url: CROWN, dato: "2026-10-04" },
      { navn: "Koskisen: Kore van plywood floors (produktark)", url: KORE, dato: "2026-10-04" },
      { navn: "Dansk Varebilindretning: Prisberegner", url: DVIP, dato: "2026-10-04" },
      { navn: "Dansk Varebilindretning: Brugervenlig bilindretning i træ", url: DVIT, dato: "2026-10-07" },
      { navn: "SmartVan: Bilindretning til varevognen", url: SVB, dato: "2026-10-04" },
      { navn: "SmartVan: reolpakke til Jumpy, Expert, Proace, Vivaro og Scudo L2", url: SVR, dato: "2026-10-04" },
      { navn: "SmartVan: Varerumsgulv", url: SVG, dato: "2026-10-04" },
      { navn: "Modul-System: Gulv og vægbeklædning", url: MS, dato: "2026-10-04" },
      { navn: "Modul-System: Løsninger til elektriske varevogne", url: MSE, dato: "2026-10-07" },
      { navn: "Autorola: Skadeguide ved aflevering", url: AUT, dato: "2026-10-04" },
      { navn: "Opendo: Wear & Tear guide, person- og varebil, gældende fra 1. november 2025", url: OPENDO, dato: "2026-10-07" },
      { navn: "Skatterådet: Bindende svar SKM2021.202.SR om tilladt kørsel i varevogne og mandskabsvogne", url: SKM, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Dansk Varebilindretning: de skræddersyede indretninger i træ med alu-forkanter er støjdæmpende og vejer typisk mindre end andre løsninger; træ er fleksibelt og bliver ikke 'metaltræt'; træ smitter ikke af på fx hvide kabelkanaler og stikkontakter, som indretninger i metal kan gøre; reolerne samles på en særlig måde og kan ikke sammenlignes med gør-det-selv-løsninger i træ.", DVIT],
    ["Modul-System: ifølge deres livscyklusanalyse er det største bidrag til miljøet, at de arbejder med det letteste tilgængelige materiale.", MSE],
    ["Opendo: K4–K5 omfatter også rifter, flænger eller manglende dele på læssegulv eller beklædning.", OPENDO],
    ["Opendo: ved aflevering gennemgås bilen af en uvildig part, fx Autorola Danmark, FDM eller Applus+; rapporten afspejler bilens stand på afleveringstidspunktet; skader beregnes i FORSI, de danske forsikringsselskabers fællessystem; skader vurderes pr. felt, så samme felt ikke repareres, lakeres eller udskiftes flere gange.", OPENDO],
    ["Opendo: 'Udstyr og tilbehør' omfatter manglende eller defekte dele fra udstyrslisten i leasingkontrakten; leasingaftalen viser, hvilket udstyr og tilbehør der skal følge med, fx tagbokse og tagbøjler og medfølgende værktøj.", OPENDO],
    ["Opendo, gebyrliste (ekskl. moms): mangler ved aflevering jf. afleveringsrapport 520 kr., kontrol af sletning af persondata i bilens infosystem 240 kr., forsendelse af glemte effekter 640 kr.", OPENDO]
  ]
};
