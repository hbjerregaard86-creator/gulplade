# Uafhængig kontrol af datarunde 2: står hver tilbehørspris i de gemte kilder (prisdata/tilbehoer-kilder)?
# Tjekker beløbet uden moms og med moms (x 1,25), fordi mange tilbehørslister kun har prisen med moms.
import json, glob, os, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import pdfplumber

S = os.path.dirname(os.path.abspath(__file__))
K = os.path.join(S, "tilbehoer-kilder")
_cache = {}

def tekst(f):
    if f in _cache:
        return _cache[f]
    t = ""
    try:
        if f.lower().endswith(".pdf"):
            with pdfplumber.open(f) as pdf:
                t = "\n".join((p.extract_text() or "") for p in pdf.pages)
        else:
            t = open(f, encoding="utf-8", errors="ignore").read()
    except Exception:
        t = ""
    t = t.replace(" ", " ").replace(" ", " ")
    _cache[f] = t
    return t

def varianter(n):
    s = f"{n:,}".replace(",", ".")
    return {s, s.replace(".", " "), str(n), s + ",00", s.replace(".", "") + ",00", s.replace(".", " ") + ",00", s + ",-"}

def findes(n, t):
    n = int(round(n))
    # Prisen med moms kan være rundet af til begge sider, når den er divideret med 1,25.
    inkl = int(round(n * 1.25))
    for m, art in ((n, "ok"), (inkl, "inkl"), (inkl - 1, "inkl"), (inkl + 1, "inkl")):
        for v in varianter(m):
            if re.search(r"(?<![\d.,])" + re.escape(v) + r"(?![\d])", t):
                return art
    return False

filer = glob.glob(os.path.join(K, "*"))
for f in sorted(glob.glob(os.path.join(S, "priser-kladde", "tilbehoer-*.json"))):
    d = json.load(open(f, encoding="utf-8"))
    print("==", os.path.basename(f))
    for mid, tb in d.get("tilbehoer", {}).items():
        # Kilder, hvis filnavn nævner model-id eller mærket; ellers alle filer
        maerke = mid.split("-")[0]
        egne = [x for x in filer if mid in os.path.basename(x) or maerke in os.path.basename(x).lower()] or filer
        t = "\n".join(tekst(x) for x in egne)
        dele = [x for x in tb.get("dele", []) if x.get("pris_kr")]
        mangler = [x for x in dele if not findes(x["pris_kr"], t)]
        print(f"{mid}: {len(dele) - len(mangler)}/{len(dele)} fundet i {len(egne)} kildefiler")
        for x in mangler[:6]:
            print(f"    MANGLER {x['pris_kr']} {x['navn']}")
