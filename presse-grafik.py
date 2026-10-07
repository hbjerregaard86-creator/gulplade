# Presse-grafik til /presse/ (04-10-2026). Tegner PNG'erne i assets/img/presse/
# med PIL, ikke ved bygning. Kør: python presse-grafik.py
# Tallene er de samme som i PRESSEMEDDELELSER i generate-pages.js og i
# presse-udkast/. Ret begge steder, hvis et tal ændres.
from PIL import Image, ImageDraw, ImageFont

W, H = 1600, 900
S = 2  # tegnes i dobbelt størrelse og skaleres ned, så kanterne bliver bløde
BG = "#FFFFFF"
INK = "#1A1A1A"
SOFT = "#4A4F57"
MUTED = "#6B7079"
LINE = "#E3E5E8"
AXIS = "#9AA0A8"
DIESEL = "#B8860B"
EL = "#3061B0"
GUL = "#F2B705"
FONT = "C:/Windows/Fonts/arial.ttf"
FONT_B = "C:/Windows/Fonts/arialbd.ttf"
UD = "assets/img/presse/"


def f(size, bold=False):
    return ImageFont.truetype(FONT_B if bold else FONT, size * S)


def tal(n):
    return f"{n:,}".replace(",", ".")


class Tegning:
    def __init__(self):
        self.im = Image.new("RGB", (W * S, H * S), BG)
        self.d = ImageDraw.Draw(self.im)

    def tekst(self, x, y, s, font, fill=INK, anchor="la"):
        self.d.text((x * S, y * S), s, font=font, fill=fill, anchor=anchor)

    def bredde(self, s, font):
        return self.d.textlength(s, font=font) / S

    def bjaelke(self, x0, y0, x1, y1, fill):
        # Afrundet i den frie ende, lige ved aksen.
        r = 4 * S
        self.d.rounded_rectangle((x0 * S, y0 * S, x1 * S, y1 * S), radius=r, fill=fill)
        self.d.rectangle((x0 * S, y0 * S, min(x1 * S, x0 * S + r), y1 * S), fill=fill)

    def hoved(self, titel, linjer, forklaring=None):
        self.tekst(72, 62, titel, f(46, True))
        y = 124
        for l in linjer:
            self.tekst(72, y, l, f(24), SOFT)
            y += 34
        if forklaring:
            x = 72
            y += 18
            for navn, farve in forklaring:
                self.d.rounded_rectangle((x * S, y * S, (x + 22) * S, (y + 22) * S), radius=4 * S, fill=farve)
                self.tekst(x + 32, y + 1, navn, f(22, True))
                x += 32 + self.bredde(navn, f(22, True)) + 36

    def fod(self, kilde):
        self.d.line((72 * S, 812 * S, (W - 72) * S, 812 * S), fill=LINE, width=S)
        self.d.rounded_rectangle((72 * S, 834 * S, 106 * S, 856 * S), radius=4 * S, fill=GUL)
        self.tekst(118, 833, "Gulplade.dk", f(22, True))
        self.tekst(W - 72, 836, kilde, f(19), MUTED, anchor="ra")

    def gem(self, navn):
        self.im.resize((W, H), Image.LANCZOS).save(UD + navn, optimize=True)
        print("Gemt:", UD + navn)


def soejler(t, rader, serier, enhed, top, bund, hoejre=None, ref=None, maks=None, inde=False):
    """rader: [(navn, [værdi pr. serie], højre-tekst eller None)]"""
    x_akse, x_max = 400, 1250 if hoejre else 1440
    maks = maks or max(v for _, vs, _ in rader for v in vs)
    skala = (x_max - x_akse - 110) / maks
    rh = (bund - top) / len(rader)
    n = len(serier)
    bh = min(36, (rh - 22 - 4 * (n - 1)) / n)
    if hoejre:
        t.tekst(W - 100, top - 34, hoejre, f(19), MUTED, anchor="ra")
    if ref:
        v, label = ref
        x = x_akse + v * skala
        yy = top - 6
        while yy < bund:
            t.d.line((x * S, yy * S, x * S, min(yy + 8, bund) * S), fill=AXIS, width=2 * S)
            yy += 14
        t.tekst(x, top - 30, label, f(19, True), SOFT, anchor="ma")
    for i, (navn, vs, h) in enumerate(rader):
        midt = top + rh * i + rh / 2
        y = midt - (bh * n + 4 * (n - 1)) / 2
        t.tekst(72, midt, navn, f(24, True), INK, anchor="lm")
        for j, v in enumerate(vs):
            if v is None:
                t.tekst(x_akse + 12, y + bh / 2, "ikke oplyst", f(20), MUTED, anchor="lm")
            else:
                x1 = x_akse + v * skala
                t.bjaelke(x_akse, y, x1, y + bh, serier[j])
                if inde:
                    t.tekst(x1 - 12, y + bh / 2, tal(v) + enhed, f(22, True), "#FFFFFF", anchor="rm")
                else:
                    t.tekst(x1 + 12, y + bh / 2, tal(v) + enhed, f(22), INK, anchor="lm")
            y += bh + 4
        if h:
            t.tekst(W - 100, midt, h, f(24, True), INK, anchor="rm")
    t.d.line((x_akse * S, (top - 10) * S, x_akse * S, (bund + 6) * S), fill=AXIS, width=S)


# 1. El mod diesel, pris pr. måned (opdateret 05-10-2026 med elprisen for 1. halvår 2026)
t = Tegning()
t.hoved("Elvarebilen er billigst i alle fire modeller",
        ["Diesel er steget 44 % på et år. Prisen pr. måned omfatter leasing, diesel eller strøm og grøn ejerafgift",
         "ved 15.000 km om året. Diesel- og elbilen er fra samme forhandler eller leasingselskab.",
         "Tilbuddene er fra den 5. oktober 2026, og alle priser er uden moms."],
        [("Diesel", DIESEL), ("El", EL)])
soejler(t, [("Renault Kangoo", [4099, 3028], "1.071 kr."),
            ("VW Transporter", [5534, 5193], "341 kr."),
            ("Renault Master", [5905, 4483], "1.422 kr."),
            ("Fiat Ducato", [6505, 4678], "1.827 kr.")],
        [DIESEL, EL], " kr.", 330, 790, hoejre="El sparer om måneden")
t.fod("Kilde: Gulplade.dk · gulplade.dk/nyheder/elvarebil-eller-diesel-maanedlig-pris")
t.gem("elvarebil-diesel-2026-10-05.png")

# 2. Uden lader: ekstra timer om året
t = Tegning()
t.hoved("Uden egen lader: 68 til 181 timer mere om året",
        ["Så meget længere tid går der med at lynlade en elvarebil end med at tanke diesel ved 120 km om dagen.",
         "Regnet over 220 arbejdsdage med 10 minutters omvej pr. ladestop. Bilernes tal er fra den 4. oktober 2026."])
soejler(t, [("Kia PV5 Cargo", [68], "30.500 kr."),
            ("VW ID. Buzz Cargo", [77], "34.500 kr."),
            ("Ford E-Transit Custom", [78], "34.900 kr."),
            ("VW e-Transporter", [84], "38.000 kr."),
            ("Renault Master E-Tech", [92], "41.400 kr."),
            ("Fiat E-Ducato", [115], "51.800 kr."),
            ("Renault Kangoo E-Tech", [145], "65.100 kr."),
            ("Mercedes-Benz eSprinter", [181], "81.200 kr.")],
        [EL], " timer", 270, 790, hoejre="Ved 450 kr. i timen")
t.fod("Kilde: Gulplade.dk · gulplade.dk/groen-omstilling/ladetid")
t.gem("ladetid-uden-lader-2026-10.png")

# 3. Med lader: km om dagen uden ladestop
t = Tegning()
t.hoved("18 af 23 elvarebiler klarer 200 km om dagen uden ladestop",
        ["Rækkevidden er regnet med 90 % af batteriet og producentens WLTP-forbrug plus 15 % for vejr og fart.",
         "Grafen viser udvalgte modeller. Bilernes tal er fra den 4. oktober 2026."])
soejler(t, [("Kia PV5 Cargo", [295], None),
            ("Renault Master E-Tech", [287], None),
            ("Fiat E-Ducato", [266], None),
            ("Ford E-Transit Custom", [255], None),
            ("VW e-Transporter", [236], None),
            ("VW ID. Buzz Cargo", [225], None),
            ("Renault Kangoo E-Tech", [188], None),
            ("Mercedes-Benz eSprinter", [163], None)],
        [EL], " km", 290, 790, ref=(200, "200 km"), inde=True)
t.fod("Kilde: Gulplade.dk · gulplade.dk/groen-omstilling/ladetid")
t.gem("ladetid-med-lader-2026-10.png")

# 4. Trækvægt, diesel mod el
t = Tegning()
t.hoved("Elvarebilen må trække mindre i 12 af 15 modeller",
        ["Trækvægten er producentens tal for en trailer med bremser.",
         "Tallene gælder den udgave af bilen, modelsiden viser, og er fra den 4. oktober 2026."],
        [("Diesel", DIESEL), ("El", EL)])
soejler(t, [("Ford Transit", [2750, 750], None),
            ("Renault Trafic", [2500, 920], None),
            ("Peugeot Expert", [2500, 1000], None),
            ("Toyota Proace", [2000, 1000], None),
            ("Ford Transit Custom", [2800, 2300], None),
            ("VW Transporter", [2800, 2300], None),
            ("Renault Master", [2500, 2500], None),
            ("Mercedes-Benz Sprinter", [2000, 2000], None)],
        [DIESEL, EL], " kg", 280, 795)
t.fod("Kilde: Gulplade.dk · gulplade.dk/presse")
t.gem("traekvaegt-2026-10.png")
