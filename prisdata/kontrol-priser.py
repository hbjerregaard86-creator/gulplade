# Uafhængig kontrol: står hver pris (udgaver, tilvalg, pakker, levering) i den gemte prisliste?
# Finder ikke forkerte koblinger mellem navn og pris, men fanger tal, der ikke findes i kilden.
import json, glob, os, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import pdfplumber

S = os.path.dirname(os.path.abspath(__file__))
PL = os.path.join(S, "prislister")
_cache = {}

def tekst(mid):
    if mid in _cache:
        return _cache[mid]
    t = ""
    for f in glob.glob(os.path.join(PL, mid + "*")):
        try:
            if f.lower().endswith(".pdf"):
                with pdfplumber.open(f) as pdf:
                    t += "\n".join((p.extract_text() or "") for p in pdf.pages)
            else:
                t += open(f, encoding="utf-8", errors="ignore").read()
        except Exception as e:
            t += ""
    t = t.replace(" ", " ").replace(" ", " ")
    _cache[mid] = t
    return t

def findes(n, t):
    if n is None:
        return True
    n = int(round(n))
    s = f"{n:,}".replace(",", ".")
    varianter = {s, s.replace(".", " "), s.replace(".", ","), str(n), s.replace(".", "'")}
    # inkl. moms omregnet: tjek også 1,25 x
    m = int(round(n * 1.25))
    sm = f"{m:,}".replace(",", ".")
    inkl = {sm, sm.replace(".", " "), str(m)}
    for v in varianter:
        if re.search(r"(?<![\d.,])" + re.escape(v) + r"(?![\d])", t):
            return "ok"
    for v in inkl:
        if re.search(r"(?<![\d.,])" + re.escape(v) + r"(?![\d])", t):
            return "inkl"
    return False

for f in sorted(glob.glob(os.path.join(S, "priser-kladde", "*.json"))):
    d = json.load(open(f, encoding="utf-8"))
    for mid, p in d.get("priser", {}).items():
        t = tekst(mid)
        if not t.strip():
            print(f"{mid}: INGEN GEMT KILDE I prislister/")
            continue
        tal = [("udgave", u.get("navn"), u.get("pris_kr")) for u in p.get("udgaver", [])]
        tal += [("tilvalg", x.get("navn"), x.get("pris_kr")) for x in p.get("tilvalg", [])]
        tal += [("pakke", x.get("navn"), x.get("pris_kr")) for x in p.get("pakker", [])]
        tal += [("levering", "", p.get("levering_kr"))]
        mangler = [(k, nv, v) for k, nv, v in tal if v not in (None, 0) and not findes(v, t)]
        inkl = [(k, nv, v) for k, nv, v in tal if v not in (None, 0) and findes(v, t) == "inkl"]
        n = len([1 for _, _, v in tal if v not in (None, 0)])
        print(f"{mid}: {n - len(mangler)}/{n} fundet" + (f" ({len(inkl)} kun som pris med moms)" if inkl else ""))
        for k, nv, v in mangler[:8]:
            print(f"    MANGLER {k}: {v} {nv}")
