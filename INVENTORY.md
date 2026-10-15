# massage-to-go.nl: inventory of the WordPress site

Source: the wget mirror in `_original/massage-to-go.nl/` (pushed manually, because this sandbox's network policy blocks the live domain).
Rendered locally with Playwright (Chromium 1194). Requests to `massage-to-go.nl` were served from the mirror. Google Fonts were served from `@fontsource` packages with the same families and weights. Third-party hosts were blocked.

Artifacts:
- `_original/screenshots/{375,768,1440}-full.png`: full-page screenshots with the cookie banner hidden and lazy images loaded
- `_original/screenshots/{375,768,1440}-viewport-with-cookiebanner.png`: first view, with the cookie banner as visitors see it
- `_original/screenshots/375-mobile-nav-open.png`: mobile menu open
- `_original/screenshots/1440-language-popup.png`: the "I speak English" popup after clicking 🇬🇧
- `_original/rendered-dom.html`: DOM after JS ran (1440px)
- `_original/computed-styles.json`: computed styles of the key elements at the 3 widths, plus color/font/border/radius frequency tables and all `--wp--preset--*` / `--ast-global-*` tokens

Theme: **Astra 4.14.0** (header builder), Gutenberg blocks. Plugins seen: All in One SEO 5.0.3, MonsterInsights 11.3.0 (GA4), WPConsent (cookie banner), Popup Maker 1.25, WP Go Maps 10.1 (OpenLayers engine), Essential Blocks "Slider Block" (slick.js), "Sticky Menu or Anything", "WA Sticky Button", SiteGround Optimizer (combined CSS, lazysizes).

---

## 1. Sections in order (exact text)

The page is a single long column. The content container is 1200px max (`.ast-container`, 120px side gutters at 1440). Below 922px it's full width with 20px gutters.

### 0. Skip link
`Skip to content` → `#content` (visually hidden)

### 1. Header (sticky? no: static, scrolls away)
- Logo, left: `cropped-MQ6EpOtW-e1691846548561-150x56.jpeg` (150×56), alt `Massage To Go`, links to `/`
- Nav, right (desktop ≥ 922px). On mobile/tablet it collapses into a hamburger (≤ 921px):
  `Home` (#home) · `Behandelingen` (#behandelingen) · `Prijslijst` (#prijslijst) · `Cadeaubon` (#cadeaubon) · `Over mij` (#over-mij) · `Foto’s` (#fotos) · `Contact` (#contact)
- Header bar is 101px tall at 1440 and white. Links are Roboto 22px, color `#045cb4`, 22px horizontal padding.
- Mobile: a 46×46 hamburger at right. The dropdown panel is full width with background `#f9fafb`(ish), stacked links 17px/51px, color `#045cb4`, and an "×" close button with a 1px border.

### 2. Hero (`#home`)
- Full-width cover image `2023/07/m2g-omslag.jpg` (1640×664), `object-position: 50% 0%`, no overlay. **The "MASSAGE TO GO" logo and the tagline "Soepel Verder Gaan!" are part of the image itself**, not HTML text.
- Height: 556px at 1440, 544 at 768, 540 at 375. Because of `object-fit: cover` the logo is cropped at the sides on mobile.
- One button, centered near the bottom: **`Contact`** → `#contact`. Black bg, white text, 2px white border, radius 0, Roboto 500 20px, padding 15/30.

### 3. Language flags row
Right-aligned row (the left 65% column is empty), each flag 36px emoji:
`🇬🇧` · `🇫🇷` · `🇩🇪`
Each one opens a Popup Maker modal (dark overlay, white 640px box, close button "X"):
- 🇬🇧 → title `I speak English`, centered underlined link `Contact me` → #contact
- 🇫🇷 → title `Je parle français`, link `Contactez-moi` → #contact
- 🇩🇪 → title `Ich spreche Deutsch`, link `Kontaktieren Sie mich` → #contact

### 4. Intro
Paragraph (Roboto 25px / 40px line-height, left-aligned):
> Sinds mei 2023 verzorgt Massage To Go Sittard sport- en ontspanningsmassages in sportschool Athletic Performance Studio. Of je nu komt voor herstel na een zware training, pijnklachten of gewoon een moment van ontspanning zoekt, in overleg word er een passende massage voor jou op maat aangeboden. Maak snel een afspraak voor je massage via onderstaande contactmogelijkheden.

Button, centered: **`Lees hier mijn reviews`** → Google reviews search URL (see Links). Same style as the hero button but without the border.

Paragraph:
> Nathalie Hendrix, eigenaar en masseur van Massage To Go, is gediplomeerd massagetherapeut en gecertificeerd sportmasseur. Zij is aangesloten bij het NGS (Nederlands Genootschap voor Sportmassage).

Centered image `2023/10/NGS-masseur-300x179.png` (300×179), links to https://www.ngsmassage.nl/ (new tab). Alt text is empty.

### 5. Benefits
H2 (centered): `Voordelen van massage zijn o.a.:`
Two columns of bulleted lists (25px):
- Spierontspanning
- Pijnverlichting (b.v. bij blessures of een hernia)
- Verhoogde flexibiliteit en bewegingsbereik
- Huidverbetering (o.a. m.b.t. bindweefsel / cellulitis)

- Stressvermindering
- Verbeterde slaapkwaliteit
- Verbeterde bloedcirculatie
- Verbeterde bloeddruk

### 6. Video
Wide (1332px at 1440, full-bleed on mobile) 16:9 `<video controls playsinline>`, poster `2023/06/massage-2-scaled.jpg`, source `2023/06/m2g.mp4`.
⚠️ **`m2g.mp4` is not in the mirror.** I need the file before Phase 2 (see Open questions).

### 7. Behandelingen (`#behandelingen`)
H2: `Behandelingen`

Paragraph:
> **Massages bij Massage To Go**
> Zowel voor de sportmassage als voor de ontspanningsmassage geldt: een massage is nooit 100% hetzelfde.
> We stemmen altijd vooraf af op hetgeen dat voor jou op dat moment de meeste prioriteit heeft. Dat kan ook gewoon een stukje ontspanning zijn, natuurlijk! Geef bij het maken van een afspraak aan of je blessures hebt.

Paragraph:
> Bij de eerste behandeling doen wij een korte intake waarbij we inventariseren wat eventuele problemen en of verwachtingen zijn. Over het algemeen worden rug, nek en schouders standaard gemasseerd; in overleg bekijken we wat er eventueel nog meer moet gebeuren.
> Tijdens de behandeling wordt er in principe niet gepraat zodat je lekker weg kunt zinken in de massage. De massage kan stevig zijn of wat zachter, al naar gelang je wens. Ook kunnen we in overleg triggerpoints (knoopjes) en vast zittende spieren aanpakken; dit kan eventjes gevoelig zijn maar maakt je spieren uiteindelijk veel soepeler.

Paragraph:
> Nota bene:
> •⁠ ⁠Neem aub 1 grote handdoek mee
> •⁠ ⁠Graag contant betalen; Massage To Go heeft geen pinapparaat
> •⁠ ⁠In geval van verhindering wordt u verzocht minimaal 24 uur van te voren te annuleren, anders wordt de voor u gereserveerde tijd in rekening gebracht.
>
> Graag tot ziens bij Massage To Go!

(The bullets are typed characters, `•` plus U+2060 word joiners, with `<br>`. They aren't a real list.)

Two cards side by side (stacked < 782px). Each card: white, 3px solid black border, padding 33px, min-height 650px, gap 24px.
- Card 1: icon `2023/05/dumbell-fitness-svgrepo-com-1.png` at 128×128 · H3 `Sportmassage` · small (13px) subtitle `Activerend of herstellend` · 2px grey `<hr>` · text (20px):
  > De sportmassage is speciaal ontworpen voor actieve mensen. Het helpt je prestaties te verbeteren, blessures te voorkomen en sneller te herstellen na inspanning. Dankzij technieken zoals diepe weefselmassage en stretching, vermindert het spierpijn en bevordert het ontspanning. Of je nu een atleet bent of gewoon fit wilt blijven, een sportmassage ondersteunt je actieve levensstijl.
- Card 2: icon `2023/05/hot-stone-massage-svgrepo-com.png` at 128×128 · H3 `Ontspanningsmassage` (followed by two `<br>`s that stand in for the missing subtitle) · `<hr>` · text:
  > Een ontspanningsmassage helpt je om stress en angst te verminderen, en geeft je een moment van rust. Je zult merken dat je slaap verbetert, spierspanning en pijn verlicht worden, en dat je bloedsomloop en immuunsysteem een boost krijgen.

Paragraph:
> U kunt bij Massage To Go ook terecht voor: hoofdmassage, hand/voetmassages, cupping therapie en kindermassages. Neem contact op voor meer info.

### 8. Prijslijst (`#prijslijst`)
H2: `Prijslijst` (wrapped in `<strong>`, which renders as 700 instead of 600)
Centered paragraphs:
> **Massage behandeling:**
> 30 minuten: €35
> 45 minuten: €50
> 60 minuten: €70
> 90 minuten: €105
> 120 minuten: €140

> **Kindermassages:**
> 30 minuten: €35

### 9. Cadeaubon (`#cadeaubon`)
H2: `Cadeaubon`
> De Massage To Go Cadeaubon bestond al en is er vanaf nu ook in een mooie geschenkverpakking! Leuk idee voor een verjaardag, als bedankje of voor de feestdagen bijvoorbeeld. Cadeaubonnen zijn verkrijgbaar in elk gewenst bedrag.

(No image and no order mechanism. The text only.)

### 10. Over mij (`#over-mij`)
H2: `Over mij`
Profile row: round avatar `2024/10/FotoNathalie3-edited-1.jpg` (435×435, shown at 107×107, `border-radius: 9999px`). Next to it:
- H3 `Nathalie Hendrix`
- 13px underlined link `+31 6 27 96 38 22` (tel)
- Social icons (36px circles, brand colors): LinkedIn → `https://linkedin.com/in/nathaliehendri` ⚠️ (no trailing "x", see Issues), WhatsApp → `https://wa.me/+31627963822`

Paragraph:
> Al zo lang ik mij kan herinneren heb ik een passie voor sporten. Als uitlaatklep, als uitdaging, als gezellig samenzijn en niet in de laatste plaats om mijzelf fysiek en mentaal in fijne conditie te houden.
> Een belangrijke tegenhanger, de ontspanning, heb ik jaren geleden ontdekt in het nemen van (sport)massages.
> Toen wist ik nog niet dat ik ooit heel veel voldoening zou gaan beleven door het zelf geven van massages.

Paragraph:
> Afgestudeerd als dramatherapeut, heb ik altijd graag gewerkt met mensen, met als focus hun krachten en kansen.
> Zelf heb ik zo na intensieve revalidatie (i.v.m. visuele beperking) een mooie carrièreswitch kunnen maken. Ik heb een certificaat behaald voor ontspanningsmassage, en inmiddels ben ik ook door het NGS (Nederlands Genootschap Sportmasseurs) gediplomeerd als sport masseur. Ik beleef enorm veel plezier aan het (oeroude) masseren van zowel sporters als niet-sporters!
> Ik heb een grote drive; ik zie het als een uitdaging om iedereen datgene te bieden waar hij/zij voor komt, of dat nu het optimaliseren van sportprestaties is, het herstel van een blessure of de behoefte aan diepe algehele ontspanning; ik sta voor je klaar.

### 11. Foto’s (`#fotos`)
H2: `Foto’s`
Slick carousel, 1190px wide at 1440 (inset 5px), 900px fixed height, images `object-fit: cover`. It has left/right arrow buttons (FontAwesome circle-arrow icons, 20px, outside the image) and 7 dots below. Autoplay is unknown (couldn't verify). Slides in order:
1. `2024/10/FotoNathalie3.jpg` (1208×1208)
2. `2023/06/massage-1-scaled.jpg` (1373×2560)
3. `2023/06/massage-2-scaled.jpg` (2560×1440)
4. `2023/06/massage-3-scaled.jpg` (1666×2560)
5. `2023/06/intake-scaled.jpg` (2560×1440)
6. `2023/06/DSC_5723-beste-1-scaled.jpg` (2560×1707)
7. `2023/06/Met-oli-scaled.jpg` (2560×2034)

None of them has alt text. The section has bottom padding of `spacing-80` (≈111px).

### 12. Contact (`#contact`)
H2: `Contact`
Centered:
> Massages alleen op afspraak,
> bel, sms, e-mail of stuur een WhatsApp bericht voor meer info of een afspraak.

Two columns (stacked < 782px):
- **Left**: an icon column (80×80 PNGs: `phone-icon.png`, `timing-icon.png`, `map-line-icon.png`) next to the text:
  - **Nathalie** + WhatsApp circle icon → `https://wa.me/+31627963822`
  - `+31 6 27 96 38 22` (plain text, not linked here)
  - `nathalie@massage-to-go.nl` (plain text, **not a mailto link**)
  - **Openingstijden**
    Ma t/m vr: 09.00 – 21.00 uur
    Weekend: In overleg, op basis van beschikbaarheid
  - **Bezoekadres**
    Sportschool Athletic Performance Studio
    *[Rijksweg Noord 5
    6131 CH Sittard](https://goo.gl/maps/GN4wbUi7zfUYoCL4A?coh=178573&entry=tt)* (italic link)
  - ⚠️ At 1440 the address link is **clipped** (cut off below "Rijksweg Noord 5"), because the column has a fixed height. You can see it in the screenshot.
- **Right**: WP Go Maps (OpenLayers + OSM tiles), 588×400. The marker data came via the REST API and isn't in the mirror; the address is Rijksweg Noord 5, 6131 CH Sittard. It rendered empty here (tiles blocked).

Second block, which also has `id="contact"` (a duplicate id):
> **Parkeermogelijkheden**
> Er zijn tween ruime parkeer garages op korte loop afstand van Massage To Go, zie hier onder de locaties:
- [Route naar Parkeergarage Walramstraat.](https://maps.app.goo.gl/UJ7cmt3EKYReXj2A9)
- [Klik hier voor de route naar Linge Parking.](https://maps.app.goo.gl/KE4hXFk9UxZpzx6SA)

Wide image `2023/06/voorgevel-1-1024x570.jpg` (front of the APS gym), 1200×668 at 1440. Empty alt.

Paragraph:
> De massagepraktijk van Massage To Go bevindt zich in sportschool *[Athletic Performance Studio](https://athleticperformancestudio.nl/) (APS)*.

### 13. Bottom info row (still inside the content, 3 centered columns)
1. > Massage To Go is per 01-02-2024 geregistreerd bij de Kamer Van Koophandel onder nummer nummer: 92 82 3572.
   >
   > BTW Nummer: NL004980741B14
2. `Volg ons` (20px), then social icons (36px brand-colored circles): LinkedIn → `https://linkedin.com/in/nathaliehendrix`, Facebook → `https://www.facebook.com/profile.php?id=100092516869985`, Instagram → `https://www.instagram.com/massagetogosittard/`
3. > **Special thanks to:**
   > Webdesign: C.
   > Logo Design: Eefje Schenk
   > Fotografie: Henk Hollemans

### 14. Footer
1px top border `#e2e8f0`, 20px vertical padding, centered 16px text color `#334155`:
> Copyright © 2026 Massage To Go | Powered by [Astra WordPress Theme](https://wpastra.com)

### 15. Floating / overlay elements
- **WhatsApp sticky button**: fixed bottom-left (15px/15px), 75×75 image `wp-content/plugins/wa-sticky-button/assets/default.png` (128×128 green circle). Links to `https://wa.me/31627963822?text=Ik+wil+graag+een+afspraak+maken.` (new tab). No alt.
- **Scroll-to-top** button (Astra), bottom-right, appears on scroll.
- **Cookie banner** (WPConsent): full-width black bar at the bottom. Logo `cropped-WhatsApp-Image-…-3.jpeg`, title "Cookie Consent", the text below, and buttons `Preferences` · `Afwijzen` · `Accepteren`.
  > We gebruiken cookies om uw ervaring op onze site te verbeteren. Door onze site te gebruiken, stemt u in met het gebruik van cookies.
  (Its CSS file wasn't mirrored, so the screenshot shows WPConsent's fallback styling.)

### Other pages in the mirror
- `/cookie-policy/` (and the same page at `/?p=2202`): **"Cookie Policy"**. Boilerplate generated by WPConsent (English) with a table of GA cookies. It links to a "Privacy Policy" that points back to itself. Not in the nav.
- `/feed/`, `/comments/feed/`, `/wp-json/…`: WordPress internals, which won't be ported.

---

## 2. Images

| File (under `wp-content/uploads/`) | Intrinsic | Shown at (1440) | Used in | Alt |
|---|---|---|---|---|
| `2023/08/cropped-MQ6EpOtW-e1691846548561.jpeg` (+150/300/768/1024 variants) | 1182×439 | 150×56 | Header logo; og:image; schema logo | "Massage To Go" |
| `2023/07/m2g-omslag.jpg` (+300/768/1024/1536) | 1640×664 | 1440×556 cover | Hero (logo and tagline baked in) | "" |
| `2023/10/NGS-masseur-300x179.png` (largest mirrored: 2048×1225) | 300×179 | 300×179 | Intro, NGS badge | "" |
| `2023/06/massage-2-scaled.jpg` | 2560×1440 | 1332×749 | Video poster + slide 3 | — |
| `2023/05/dumbell-fitness-svgrepo-com-1.png` | 512×512 | 128×128 | Sportmassage card | "" |
| `2023/05/hot-stone-massage-svgrepo-com.png` | 512×512 | 128×128 | Ontspanningsmassage card | "" |
| `2024/10/FotoNathalie3-edited-1.jpg` | 435×435 | 107×107 round | Over mij avatar | "" |
| `2024/10/FotoNathalie3.jpg` | 1208×1208 | slide | Slide 1 | none |
| `2023/06/massage-1-scaled.jpg` | 1373×2560 | slide | Slide 2 | none |
| `2023/06/massage-3-scaled.jpg` | 1666×2560 | slide | Slide 4 | none |
| `2023/06/intake-scaled.jpg` | 2560×1440 | slide | Slide 5 | none |
| `2023/06/DSC_5723-beste-1-scaled.jpg` | 2560×1707 | slide | Slide 6 | none |
| `2023/06/Met-oli-scaled.jpg` | 2560×2034 | slide | Slide 7 | none |
| `2023/05/phone-icon.png` | 496×512 | 80×80 | Contact icon | "" |
| `2023/05/timing-icon.png` | 512×512 | 80×80 | Contact icon | "" |
| `2023/05/map-line-icon.png` | 498×512 | 80×80 | Contact icon | "" |
| `2023/06/voorgevel-1-2048x1140.jpg` (+1024/1536/768/300) | 2048×1140 | 1200×668 | Contact, building front | "" |
| `2023/08/cropped-WhatsApp-Image-2023-07-21-at-10.32.08-3.jpeg` (+32/180/192) | 512×512 | — | Favicon / apple-touch-icon / cookie banner logo | — |
| `plugins/wa-sticky-button/assets/default.png` | 128×128 | 75×75 | Floating WhatsApp button | none |

Missing from the mirror: `2023/06/m2g.mp4` (video) and the `…-270x270` favicon variant (msapplication tile; I can regenerate it).

Icons drawn as inline SVG (not files): the WordPress social-link icons (LinkedIn, WhatsApp, Facebook, Instagram), the hamburger/close icon, and the scroll-to-top arrow.

---

## 3. Links

**Internal (anchors)**: `#home`, `#behandelingen`, `#prijslijst`, `#cadeaubon`, `#over-mij`, `#fotos`, `#contact` (nav + hero button + popups), `#content` (skip link), `/` (logo), `/?p=2202` = Cookie Policy (from the cookie banner preferences).

**tel:**
- `tel: &nbsp; +31 6 27 96 38 22` (Over mij). ⚠️ This href is malformed (contains a space and `&nbsp;`). It should be `tel:+31627963822`.

**mailto:** none. `nathalie@massage-to-go.nl` is shown as plain text.

**WhatsApp**
- `https://wa.me/+31627963822` (Over mij icon, Contact icon). The `+` is tolerated by wa.me, but the canonical form is `31627963822`.
- `https://wa.me/31627963822?text=Ik+wil+graag+een+afspraak+maken.` (floating button)

**Social**
- LinkedIn `https://linkedin.com/in/nathaliehendrix` (footer row) and `https://linkedin.com/in/nathaliehendri` (Over mij). ⚠️ These two don't match, and one is probably broken.
- Facebook `https://www.facebook.com/profile.php?id=100092516869985`
- Instagram `https://www.instagram.com/massagetogosittard/`

**External**
- Google reviews: `https://www.google.com/search?sa=X&sca_esv=6803a1afa38366d6&rlz=1C5CHFA_enNL889NL889&tbm=lcl&q=Massage+To+Go+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDIwMTI0MzG3NDcxNDGwMDczMtvAyPiKUdQ3sbg4MT1VISRfwT1fISi1LDO1vHgRK3ZxAJeHB6VLAAAA&rldimm=12042164797414087626&hl=nl-NL&ved=2ahUKEwjuhK_WkPuOAxXm8AIHHaCUH9kQ9fQKegQIWhAF&biw=1792&bih=974&dpr=2#lkt=LocalPoiReviews` (a session-specific search URL. A stable alternative is the Google Business Profile review link `https://g.page/r/<id>/review` or `https://search.google.com/local/reviews?placeid=<place_id>`)
- NGS: `https://www.ngsmassage.nl/`
- Address: `https://goo.gl/maps/GN4wbUi7zfUYoCL4A?coh=178573&entry=tt`
- Parking: `https://maps.app.goo.gl/UJ7cmt3EKYReXj2A9`, `https://maps.app.goo.gl/KE4hXFk9UxZpzx6SA`
- APS gym: `https://athleticperformancestudio.nl/`
- Footer: `https://wpastra.com` (theme credit)
- Cookie banner: `https://policies.google.com/privacy`

---

## 4. Design tokens

### Fonts (Google Fonts, `display=swap`)
| Use | Family | Weight | Size 1440 (≥ 922) | Size 768 / 375 | Line-height |
|---|---|---|---|---|---|
| Body | **Roboto** | 400 (700 for `<strong>`, 500 for buttons) | 22px | 17px | 1.65 |
| Intro paragraph, benefit list items | Roboto | 400 | 25px | 25px | 40px / 1.65 |
| H2 | **Barlow Semi Condensed** | 600 | 47px | 32px / 25px | 1.3 |
| H3 | Barlow Semi Condensed | 600 | 30px | 26px / 22px | 1.3 |
| Buttons | Roboto | 500 | 20px | 20px | 1 |
| Card body (`has-medium-font-size`) | Roboto | 400 | 20px | 20px | 1.65 |
| Small (`has-small-font-size`) | Roboto | 400 | 13px | 13px | — |
| Nav | Roboto | 400 | 22px | 17px | 80px bar / 51px mobile |
| Footer | Roboto | 400 | 16px | 16px | — |
| Flags | emoji | — | 36px | 36px | — |

Font Awesome (slider arrows) and Montserrat (declared by a plugin, unused) are cruft.
Barlow Semi Condensed is the closest web match to the logo's lettering.

### Colors
| Token (Astra) | Value | Used for |
|---|---|---|
| text | `#000000` | body text, headings (body color is set to black) |
| `--ast-global-color-0` | `#046bd2` | link hover / accent |
| `--ast-global-color-1` | `#045cb4` | nav links |
| `--ast-global-color-2` | `#1e293b` | links in content (tel, APS, parking), logo link |
| `--ast-global-color-3` | `#334155` | footer text |
| `--ast-global-color-4` / secondary | `#f9fafb` | mobile menu background |
| `--ast-global-color-5` / primary | `#ffffff` | page, cards, button text |
| `--ast-global-color-6` | `#e2e8f0` | footer top border |
| black | `#000000` | buttons background, card border |
| hr | `#cccccc` bg / `#808080` border | card separators |
| WhatsApp | `#25d366` | social icon |
| LinkedIn | `#0d66c2` | social icon |
| Facebook | `#0866ff` | social icon |
| Instagram | `#f00075` | social icon |
| Cookie banner | `#0c0c0c` bg, `#ffffff` text, `#4a4949` secondary buttons | |

### Spacing scale (WordPress presets, rem = 22px desktop / 17px mobile root)
`--20` 0.44rem · `--30` 0.67rem · `--40` 1rem · `--50` 1.5rem · `--60` 2.25rem · `--70` 3.38rem · `--80` 5.06rem
At 1440 that's ≈ 10 / 15 / 22 / 33 / 50 / 74 / 111 px.
- Content max-width **1200px**. Gutters are 120px at 1440 (container centered) and 20px ≤ 921px.
- Wide elements (video): 1332px.
- Section heading margin: 33px (`--50`) above and below.
- Paragraph margin-bottom: 1.6em (≈ 36–50px). Block gap: 24px.
- Card padding: 33px. Columns gap: 24px (2em). Columns stack at < 782px.

### Border radius
**0 everywhere visible** (buttons explicitly `0px`). Only the avatar and social icons are round (9999px). Mobile toggle 2px.

### Breakpoints (Astra/Gutenberg)
- ≤ 921px: mobile header (hamburger), body drops 22→17px, H2 47→32px
- ≤ 781px: Gutenberg columns stack
- ≤ 544px: H2 → 25px, H3 → 22px

---

## 5. Forms, widgets, embeds, analytics

| Thing | What it is | Ports to static? |
|---|---|---|
| Contact/booking form | **None.** Contact is by phone, SMS, email, and WhatsApp only. | n/a. No form needed. I'd **not** add one unless you want it (see Open questions). |
| Booking widget | None. | n/a |
| Map | WP Go Maps, OpenLayers + OSM tiles, ~1 MB of JS | Replace with a **click-to-load OpenStreetMap iframe** (or a static map image linking to Google Maps). That's zero JS until clicked, and no cookies. |
| Video | Self-hosted `<video>` (m2g.mp4) | Ports as-is to `public/`, with `preload="none"` + poster. Need the file. |
| Photo slider | Essential Blocks slider (slick.js + jQuery) | Replace with a **CSS scroll-snap carousel** with prev/next buttons and dots (~30 lines of vanilla JS). |
| Language popups 🇬🇧🇫🇷🇩🇪 | Popup Maker (jQuery) | Replace with the native **`<dialog>`** element (~10 lines of JS), or simpler: a static "I speak English · Je parle français · Ich spreche Deutsch" line linking to #contact. |
| Sticky WhatsApp button | WA Sticky Button plugin | Plain fixed `<a>` + inline SVG. |
| Scroll-to-top | Astra | Optional. A plain anchor, or drop it. |
| Analytics | Google Analytics 4 **G-BQ0NV2DM7W** via MonsterInsights + gtag, Consent Mode v2 (all denied by default) | Keep GA4 behind consent, **or** switch to cookieless analytics (Cloudflare Web Analytics, free on Pages). The cookieless option removes the need for a cookie banner entirely. |
| Cookie banner | WPConsent (opt-in, blocks GA until accepted) | Without GA: delete it. With GA: a tiny custom banner that sets consent mode. |
| Cookie Policy page | WPConsent auto-generated | Only needed if GA stays. |
| SEO plugin | AIOSEO | Static meta in `Base.astro`. |
| Lazy-loading | SiteGround lazysizes | Native `loading="lazy"` via astro:assets. |
| jQuery, React (wp-dist), emoji script, oEmbed, RSD/xmlrpc, feeds, wp-json links | WordPress core | Drop. |

---

## 6. SEO

- `<html lang>`: en-US (wrong: the content is Dutch)
- **title**: `Home - Massage To Go`
- **meta description** (AIOSEO auto-generated from the first text, so it starts with "Contact" and the flag emoji):
  `Contact 🇬🇧 🇫🇷 🇩🇪 Sinds mei 2023 verzorgt Massage To Go Sittard sport- en ontspanningsmassages in sportschool Athletic Performance Studio. Of je nu komt voor herstel na een zware training, pijnklachten of gewoon een moment van ontspanning zoekt, in overleg word er een passende massage voor jou op maat aangeboden. Maak snel een afspraak voor`
- robots: `max-image-preview:large`
- canonical: `https://massage-to-go.nl/`
- **OG**: `og:locale=en_US`, `og:site_name=Massage To Go -`, `og:type=article`, `og:title=Home - Massage To Go`, `og:description` = same as the meta description, `og:url=https://massage-to-go.nl/`, `og:image` (+`secure_url`) = `…/2023/08/cropped-MQ6EpOtW-e1691846548561.jpeg` (logo, 1182×439), `article:published_time=2023-05-08T18:36:25+00:00`, `article:modified_time=2026-04-17T13:31:48+00:00`
- **Twitter**: `summary_large_image`, same title/description/image
- **Favicon**: `cropped-WhatsApp-Image-2023-07-21-at-10.32.08-3` at 32×32 and 192×192 (`rel=icon`), 180×180 (`apple-touch-icon`), 270×270 (`msapplication-TileImage`)
- **Structured data** (AIOSEO JSON-LD @graph): `BreadcrumbList` (Home), `Organization` (name **"My WordPress"** ⚠️, logo), `WebPage`, `WebSite` (name "My WordPress" ⚠️). There is **no `LocalBusiness`/`HealthAndBeautyBusiness`**, so address, phone, and opening hours aren't exposed to Google.
- Headings: no H1 on the page (the visible title is in the hero image). H2s per section, H3s in cards/profile.
- No sitemap or robots.txt in the mirror (WP serves them dynamically).

---

## 7. Issues in the original (preserve or fix? See Open questions)

1. No `<h1>`. The brand name and tagline exist only as pixels in the hero image.
2. `lang="en-US"` and `og:locale=en_US` on a Dutch page. The Schema name is "My WordPress".
3. Meta description starts with "Contact 🇬🇧 🇫🇷 🇩🇪" and is cut off mid-sentence.
4. Malformed `tel:` href. The email isn't clickable.
5. LinkedIn URL differs between two places (`nathaliehendri` vs `nathaliehendrix`).
6. Duplicate `id="contact"`.
7. Contact address is clipped at desktop width (fixed-height column).
8. 5px horizontal overflow at 375px (full screenshot is 380 wide).
9. All content images have empty or missing alt text.
10. Typos in copy: "tween ruime parkeer garages" (→ twee), "onder nummer nummer:", "in overleg word er" (→ wordt). Kept verbatim per your instruction.
11. Footer credits "Powered by Astra WordPress Theme", which becomes untrue after the rebuild.
12. ~1.4 MB JS (map engine alone 900 KB, jQuery, React, slick) for a brochure page.
13. The language popups are `aria-modal="false"` dialogs triggered from `<p>` elements (not keyboard-focusable).

---

## 8. Open questions for Phase 2

1. **Video**: please add `m2g.mp4` (it's at `wp-content/uploads/2023/06/m2g.mp4` on the live site) to `_original/`. Otherwise I'll ship the poster image only.
2. **Analytics/cookies**: my recommendation is **Cloudflare Web Analytics (cookieless) and drop the cookie banner and Cookie Policy page**. Or keep GA4 G-BQ0NV2DM7W with a minimal consent banner.
3. **Contact form**: there isn't one today. Keep it that way (phone/WhatsApp/email), or add a Web3Forms form?
4. **Fix the issues in §7?** My default: fix all technical ones (1–9, 11–13: add a visually hidden `<h1>`, `lang="nl"`, real meta description, mailto/tel links, alt text, the LinkedIn mismatch, unique ids, no clipping). Keep the copy typos in §10 verbatim unless you say "fix typos". I need the correct LinkedIn URL.
5. **Footer**: replace "Powered by Astra WordPress Theme" with just "Copyright © {year} Massage To Go"?
6. **Language popups**: native `<dialog>` (same behavior) or a simpler static line?
