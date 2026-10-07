# Fletter holdenes kladder (priser-kladde/*.json) ind i projektets priser.json og udstyr.json.
# Kør igen, hver gang en ny kladde er kommet; det er idempotent.
import json, glob, os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

PROJ = r"C:\biltilbud\gulplade claude"
KLADDE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "priser-kladde")
IDAG = "2026-10-05"

NYE_POSTER = [
    ("metallak", "ydre", "Metallak"),
    ("reservehjul", "ydre", "Reservehjul"),
    ("tagbaerer", "ydre", "Tagbøjler eller tagræling"),
    ("alarm", "ydre", "Tyverialarm"),
    ("dobbelt_passagersaede", "komfort", "Dobbelt passagersæde"),
    ("navigation", "komfort", "Navigation"),
    ("beklaedning_varerum", "varerum", "Beklædning af siderne i varerummet"),
    ("stik_230v", "varerum", "230V-stikkontakt"),
    ("lader_22kw", "el", "22 kW AC-lader"),
    ("varmepumpe", "el", "Varmepumpe"),
]
NYE_GRUPPER = [("ydre", "Lak, hjul og sikring"), ("el", "Opladning")]

vb = json.load(open(os.path.join(PROJ, "varebiler.json"), encoding="utf-8"))
biler = {b["id"]: b for b in vb["varebiler"]}
ustr = json.load(open(os.path.join(PROJ, "udstyr.json"), encoding="utf-8"))

# Bilerne, hvor trækket ikke kommer fra fabrikken (traekkrog_fabrik: false), beholder
# "ukendt" på anhængertræk: forhandleren kan måske montere et (brugerens valg 05-10).
ingen_fabrikstraek = {i for i, b in biler.items() if b.get("traekkrog_fabrik") is False}

priser = {}
tilbehoer = {}
advarsler = []
for f in sorted(glob.glob(os.path.join(KLADDE, "*.json"))):
    d = json.load(open(f, encoding="utf-8"))
    for mid, p in d.get("priser", {}).items():
        if mid not in biler:
            advarsler.append(f"{os.path.basename(f)}: ukendt model-id {mid}")
            continue
        priser[mid] = p
    # Datarunde 2 (06-10-2026): importørernes tilbehørslister, tilbehoer-<gruppe>.json
    for mid, tb in d.get("tilbehoer", {}).items():
        if mid not in biler:
            advarsler.append(f"{os.path.basename(f)}: ukendt model-id {mid}")
            continue
        tilbehoer[mid] = tb

    # Nye modeller i udstyr.json
    for mid, m in d.get("udstyr_nye_modeller", {}).items():
        if mid in ustr["modeller"]:
            continue
        ustr["modeller"][mid] = m
        print("udstyr: ny model", mid)

    # Patch: nye poster helt, eksisterende kun hvor feltet er ukendt
    eksisterende = {p["id"] for p in ustr["poster"] if not p.get("ny")}
    for mid, poster in d.get("udstyr_patch", {}).items():
        m = ustr["modeller"].get(mid)
        if not m:
            advarsler.append(f"udstyr_patch: {mid} findes ikke i udstyr.json")
            continue
        n = len(m["niveauer"])
        for pid, celler in poster.items():
            if not isinstance(celler, list) or len(celler) != n:
                advarsler.append(f"udstyr_patch: {mid}.{pid} har {len(celler) if isinstance(celler, list) else '?'} felter, niveauerne er {n}")
                continue
            if pid not in eksisterende:
                m["udstyr"][pid] = celler
                continue
            gamle = m["udstyr"].get(pid) or [{"s": "ukendt"}] * n
            nye = []
            for i, (g, c) in enumerate(zip(gamle, celler)):
                g = g or {"s": "ukendt"}
                if g.get("s") == "ukendt" and c and c.get("s") not in (None, "ukendt"):
                    if pid == "anhaengertraek" and mid in ingen_fabrikstraek and c.get("s") == "nej":
                        nye.append(g)
                        continue
                    nye.append(c)
                    print(f"udstyr: {mid}.{pid}[{i}] ukendt -> {c.get('s')} {c.get('pris', '')}")
                else:
                    nye.append(g)
            m["udstyr"][pid] = nye

# Nye poster og grupper i tjeklisten. "ny": true holder dem på preview (generate-pages.js).
gids = {g["id"] for g in ustr["grupper"]}
for gid, navn in NYE_GRUPPER:
    if gid not in gids:
        ustr["grupper"].append({"id": gid, "navn": navn})
pids = {p["id"] for p in ustr["poster"]}
for pid, gid, navn in NYE_POSTER:
    if pid not in pids:
        post = {"id": pid, "gruppe": gid, "navn": navn, "ny": True}
        if gid == "el":
            post["kun_el"] = True
        ustr["poster"].append(post)

# Rettelser oven på holdenes kladder (kontrolleret 05-10-2026).
TILLAEG = {
    # Listerne skriver, at elbilernes priser gælder til 30-09-2026; konfiguratoren viste de samme 05-10.
    "toyota-proace": {"bekraeftet": {"dato": "2026-10-05", "kilde": "Toyotas konfigurator"}},
    "toyota-proace-city": {"bekraeftet": {"dato": "2026-10-05", "kilde": "Toyotas konfigurator"}},
    "toyota-proace-max": {"bekraeftet": {"dato": "2026-10-05", "kilde": "Toyotas konfigurator"}},
}
for mid, t in TILLAEG.items():
    if mid in priser:
        priser[mid].update(t)

# Dele, hvor kilden modsiger sig selv, vises ikke (06-10-2026): Kias hjulsæt har en trykt pris
# uden moms, der er 0,85 x prisen med moms, ikke prisen med moms / 1,25. Én af dem er forkert.
UDELAD = {("kia-pv5-cargo", "hjul")}

# Tilbehøret lægges på modellen (koeb.js viser det i beregneren med mærket "tilbehør").
for mid, tb in tilbehoer.items():
    if mid in priser:
        dele = [x for x in tb.get("dele", []) if x.get("navn") and x.get("pris_kr") is not None
                and (mid, x.get("gruppe")) not in UDELAD]
        for x in dele:
            if x["pris_kr"] < 0 or x["pris_kr"] > 200000:
                advarsler.append(f"{mid}: mistænkelig tilbehørspris {x['pris_kr']} ({x['navn']})")
        priser[mid]["tilbehoer"] = dict(tb, dele=dele)
    else:
        advarsler.append(f"tilbehør til {mid}, som ikke har en prisliste")
print("tilbehør:", len(tilbehoer), "modeller,", sum(len(t.get("dele", [])) for t in tilbehoer.values()), "dele")

# Datarunde 3 (06-10-2026): indretning fra leverandørernes webshops (System Edström, Work System,
# SmartVan). Sortimo står i partnere.json (partner), og Sortimos gulve er fra en brochure fra 2024,
# så de springes over her. Produkter kobles kun på de model-id'er, leverandøren selv nævner.
indretning = {}
for f in sorted(glob.glob(os.path.join(KLADDE, "indretning-*.json"))):
    d = json.load(open(f, encoding="utf-8"))
    for x in d.get("produkter", []):
        if x.get("leverandoer") == "Sortimo" or x.get("pris_kr") is None:
            continue
        for m in x.get("modeller", []):
            if m not in biler:
                advarsler.append(f"{os.path.basename(f)}: ukendt model-id {m}")
                continue
            indretning.setdefault(m, []).append({k: x.get(k) for k in
                ("leverandoer", "navn", "type", "pris_kr", "gaelder", "side", "url", "note", "vaegt_kg", "dato")})
for m, l in indretning.items():
    if m in priser:
        priser[m]["indretning"] = l
print("indretning:", len(indretning), "modeller,", sum(len(l) for l in indretning.values()), "koblinger")

# Datarunde 4 (06-10-2026): udstyr pr. niveau fra prislisterne (niveauer-spec.md). koeb.js viser
# niveauerne side om side på bilsiden. Navnene skal være de samme som på udgaverne.
niv_antal = 0
for f in sorted(glob.glob(os.path.join(KLADDE, "niveauer-*.json"))):
    d = json.load(open(f, encoding="utf-8"))
    for mid, nu in d.get("niveauer", {}).items():
        if mid not in priser:
            advarsler.append(f"{os.path.basename(f)}: {mid} har ingen prisliste")
            continue
        solgte = {u.get("niveau") for u in priser[mid].get("udgaver", []) if u.get("niveau")}
        navne = {n.get("navn") for n in nu.get("niveauer", [])}
        if nu.get("niveauer") and not solgte <= navne:
            advarsler.append(f"niveauer: {mid} mangler {sorted(solgte - navne)}")
        priser[mid]["niveau_udstyr"] = {k: nu.get(k) for k in ("kilde_fil", "kilde_url", "niveauer", "note") if nu.get(k) is not None}
        niv_antal += 1
print("niveauer:", niv_antal, "modeller")

# Kontrol: nyprisen i varebiler.json skal findes blandt udgaverne
for mid, p in sorted(priser.items()):
    np = (biler[mid].get("nypris") or {}).get("ekskl_moms_kr")
    u = [x for x in p.get("udgaver", []) if x.get("pris_kr") is not None]
    if not u:
        advarsler.append(f"{mid}: ingen udgaver med pris")
        continue
    if np is not None and not any(x["pris_kr"] == np for x in u):
        advarsler.append(f"{mid}: nyprisen {np} findes ikke blandt udgaverne ({min(x['pris_kr'] for x in u)}–{max(x['pris_kr'] for x in u)})")
    if p.get("gyldig_til") and p["gyldig_til"] < IDAG and not p.get("bekraeftet"):
        advarsler.append(f"{mid}: prislisten gjaldt til {p['gyldig_til']}")
    for x in u:
        if x["pris_kr"] < 80000 or x["pris_kr"] > 900000:
            advarsler.append(f"{mid}: mistænkelig pris {x['pris_kr']} ({x.get('navn')})")

ud = {
    "_om": "Producenternes danske prislister: alle udgaver, tilvalg og pakker pr. model. Alle beløb er i kroner uden moms. pris_kr på en udgave er uden levering. Det er den vejledende udsalgspris, importøren anbefaler forhandleren at sælge for. Bygget af holdenes kladder med flet-priser.py. Bruges af koeb.js (GULPLADE_KOEB_NY=1).",
    "sidst_opdateret": IDAG,
    "modeller": dict(sorted(priser.items())),
}
LF = chr(10)  # som originalfilerne (ikke CRLF)
json.dump(ud, open(os.path.join(PROJ, "priser.json"), "w", encoding="utf-8", newline=LF), ensure_ascii=False, indent=2)
ustr["sidst_opdateret"] = IDAG
json.dump(ustr, open(os.path.join(PROJ, "udstyr.json"), "w", encoding="utf-8", newline=LF), ensure_ascii=False, indent=2)

print(f"\npriser.json: {len(priser)} modeller, {sum(len(p.get('udgaver', [])) for p in priser.values())} udgaver, "
      f"{sum(len(p.get('tilvalg', [])) for p in priser.values())} tilvalg")
print("mangler:", ", ".join(sorted(set(biler) - set(priser))))
for a in advarsler:
    print("ADVARSEL:", a)
