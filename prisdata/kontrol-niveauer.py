# Tjekker, at hvert punkt i niveauer-*.json kan findes i kildefilen (datarunde 4, 06-10-2026).
# Teksten normaliseres (små bogstaver, kun bogstaver og tal), og et punkt tæller som fundet, når
# mindst 80 % af dets ord står i kilden. Punkter under grænsen skrives ud, så de kan tjekkes i hånden.
import json, glob, os, re, sys, io, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
HER = os.path.dirname(os.path.abspath(__file__))

def tekst(fil):
    sti = os.path.join(HER, fil)
    if not os.path.exists(sti):
        return ""
    if sti.lower().endswith(".pdf"):
        try:
            return subprocess.run(["pdftotext", "-enc", "UTF-8", sti, "-"], capture_output=True).stdout.decode("utf-8", "ignore")
        except FileNotFoundError:
            from pypdf import PdfReader
            return "\n".join(p.extract_text() or "" for p in PdfReader(sti).pages)
    return open(sti, encoding="utf-8", errors="ignore").read()

def ord_(s):
    return re.findall(r"[a-zæøåäöüé0-9]+", s.lower())

# PDF'er uden tekstlag, som er tjekket i hånden mod de tegnede sider.
VISUELT = {"nissan-primastar"}  # side 3 og 4, tjekket 06-10-2026

ialt = mangler = 0
for f in sorted(glob.glob(os.path.join(HER, "priser-kladde", "niveauer-*.json"))):
    d = json.load(open(f, encoding="utf-8"))
    for mid, nu in d.get("niveauer", {}).items():
        filer = [nu.get("kilde_fil")] if nu.get("kilde_fil") else []
        filer += [os.path.join("prislister", x) for x in os.listdir(os.path.join(HER, "prislister")) if x.startswith(mid + ".")]
        kilde = " ".join(ord_(" ".join(tekst(x) for x in filer)))
        kord = set(kilde.split())
        samlet = kilde.replace(" ", "")
        for n in nu.get("niveauer", []):
            for pkt in n.get("ekstra", []):
                ialt += 1
                # Kendte omskrivninger: "A/C, automatisk" -> "Automatisk aircondition", "P-sensorer, for" -> "foran".
                w = [x for x in ord_(pkt.replace("aircondition", "").replace("foran", "for")) if len(x) > 2]
                if not w:
                    continue
                andel = sum(1 for x in w if x in kord or any(k.startswith(x[:5]) for k in kord if len(x) > 5)) / len(w)
                if andel < 0.8 and "".join(ord_(pkt)) in samlet:
                    andel = 1  # samme ord uden mellemrum, fx "AppleCarplay"
                if andel < 0.8 and mid in VISUELT:
                    continue
                if andel < 0.8:
                    mangler += 1
                    print(f"{mid} · {n.get('navn')}: \"{pkt}\" ({andel:.0%})")
print(f"\n{ialt} punkter, {mangler} under grænsen")
