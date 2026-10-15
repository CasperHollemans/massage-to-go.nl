# Massage To Go: website

Static Astro site for https://massage-to-go.nl, a massage practice in Sittard (owner: Nathalie Hendrix).
It's a rebuild of the old WordPress/Astra site (the mirror is in `_original/`, the analysis in `INVENTORY.md`).
The site is in Dutch: write all copy in Dutch, and keep `lang="nl"`.

## Stack

- **Astro 7**, `output: 'static'`. No UI framework, no TypeScript config beyond Astro's defaults, no Tailwind.
- **Plain CSS** with custom properties. Global tokens are in `src/styles/global.css`, and component styles go in each component's `<style>` block (scoped).
- **Images** through `astro:assets` `<Image>`. They are converted to WebP at build time, with explicit width/height.
- **Fonts** are self-hosted in `public/fonts/` (Roboto 400/400-italic/700, Barlow Semi Condensed 600/700, latin subset).
- **Dependencies**: `astro` and `@astrojs/sitemap`. Nothing else.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # outputs to dist/
npm run preview   # serves dist/ on http://localhost:4321
```

## Project structure

```
src/
  layouts/Base.astro        <html>/<head>: title, description, canonical, OG/Twitter, favicons,
                            JSON-LD (LocalBusiness), font preloads; renders Header, <main>, Footer, WhatsAppButton
  pages/index.astro         the one-pager: composes the section components in order
  components/
    Header.astro            logo + main navigation (navItems array) + mobile hamburger menu
    Footer.astro            copyright line (year is set at build time)
    WhatsAppButton.astro    floating green WhatsApp button, bottom-left on every page
    Hero.astro              #home: cover photo (logo + "Soepel Verder Gaan!" are IN the photo), Contact button, hidden <h1>
    LanguageFlags.astro     🇬🇧 🇫🇷 🇩🇪 buttons + the three "I speak English / Je parle français / Ich spreche Deutsch" dialogs
    Intro.astro             intro paragraph, "Lees hier mijn reviews" button (Google reviews URL), NGS text + logo
    Benefits.astro          "Voordelen van massage zijn o.a.:" two bullet lists
    PromoVideo.astro        the m2g video (public/video/m2g.mp4) with poster image
    Treatments.astro        #behandelingen: intro text, "Nota bene" notes, Sportmassage + Ontspanningsmassage cards
    Prices.astro            #prijslijst: price list
    GiftCard.astro          #cadeaubon: gift voucher text
    About.astro             #over-mij: avatar, name, phone, LinkedIn/WhatsApp icons, bio
    Photos.astro            #fotos: photo carousel (every file in src/assets/images/fotos/)
    Contact.astro           #contact: phone/email, opening hours, address, map
    MapEmbed.astro          click-to-load Google Map (used by Contact)
    Location.astro          parking info, building photo, "bevindt zich in sportschool APS"
    BusinessInfo.astro      KvK/BTW numbers, "Volg ons" social icons, "Special thanks to" credits
    SocialIcon.astro        round brand-colored icon link: <SocialIcon network="linkedin|whatsapp|facebook|instagram" href="…" />
  styles/global.css         @font-face, design tokens, base element styles, shared classes
  assets/images/            source images (optimized at build time)
    fotos/                  carousel photos, shown in file-name order (1-…, 2-…)
public/
  fonts/                    self-hosted woff2 files
  video/m2g.mp4             promo video (re-encoded to 15 MB; Cloudflare Pages max file size is 25 MiB)
  favicon-32.jpeg, favicon-192.jpeg, apple-touch-icon.jpeg, mstile-270.jpeg, og-image.jpeg
  robots.txt                points to the sitemap
  _redirects                Cloudflare Pages redirects for old WordPress URLs
  _headers                  Cloudflare Pages cache headers
_original/                  reference only: wget mirror, screenshots and computed styles of the old site. Not built.
INVENTORY.md                full inventory of the old site (texts, links, tokens, plugins, SEO)
```

## Where to change things

| I want to… | Edit |
|---|---|
| change a text | the component for that section (table above). Text lives directly in the markup. |
| change prices | `src/components/Prices.astro` |
| change opening hours | `src/components/Contact.astro` **and** `openingHoursSpecification` in `src/layouts/Base.astro` |
| change phone/email/address | `Contact.astro`, `About.astro`, `WhatsAppButton.astro`, the JSON-LD in `Base.astro`, `MapEmbed` query in `Contact.astro` |
| change social links | `About.astro`, `BusinessInfo.astro`, `sameAs` in `Base.astro` |
| change page title / meta description | the `title` and `description` props on `<Base>` in `src/pages/index.astro` |
| change the share image | replace `public/og-image.jpeg` (update `imageWidth`/`imageHeight` defaults in `Base.astro` if the size changes) |
| change a color, font size or spacing | the token in `src/styles/global.css` |

### Swapping or adding images

1. Put the new file in `src/assets/images/` (JPG/PNG; it doesn't need to be pre-optimized, just reasonably large).
2. Import it in the component and render it with `<Image>`:
   ```astro
   ---
   import { Image } from 'astro:assets';
   import photo from '../assets/images/my-photo.jpg';
   ---
   <Image src={photo} alt="Describe what is in the photo" width={600} height={400} />
   ```
   For large/responsive images, use `widths={[400, 800, 1200]}` + `sizes="…"` instead of a fixed width.
   Decorative images get `alt=""`. Everything else gets a Dutch description.
3. To replace an existing image, overwrite the file with the same name. Nothing else needs to change.
4. **Carousel**: add/remove/rename files in `src/assets/images/fotos/`. Order follows the file name, so prefix with `1-`, `2-`, …

The video lives in `public/video/m2g.mp4` and must stay under 25 MiB. Re-encode with:
`ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -maxrate 3M -bufsize 6M -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k public/video/m2g.mp4`

## How to add a page

1. Create `src/pages/<slug>.astro`, e.g. `src/pages/sportmassage.astro`:
   ```astro
   ---
   import Base from '../layouts/Base.astro';
   ---
   <Base title="Sportmassage - Massage To Go" description="One or two Dutch sentences about this page.">
     <section class="container">
       <h1 class="section-title">Sportmassage</h1>
       <p>…</p>
     </section>
   </Base>
   ```
   - Every page needs exactly one `<h1>`. On the home page it's visually hidden in `Hero.astro`.
   - Wrap content in `.container` (1200px max, 20px gutters). Use `.section-title` for centered headings, `.button` for black buttons, `.columns` for side-by-side blocks (stack below 782px).
   - Put page-specific sections in new components in `src/components/`, named after what they are.
   - For a content page, pass `ogType="article"`.
2. Add it to the nav: add `{ href: '/sportmassage/', label: 'Sportmassage' }` to `navItems` in `src/components/Header.astro`.
   `aria-current="page"` is set automatically on the active page.
   Keep anchor links as `/#section` (with the leading slash) so they work from every page.
3. The sitemap picks the page up automatically on build.

## Design tokens (`src/styles/global.css`, `:root`)

The root font-size is 22px (`html { font-size: 137.5% }`), so **1rem = 22px**. This matches the original Astra theme.

| Group | Tokens |
|---|---|
| Colors | `--color-text` #000 · `--color-bg` #fff · `--color-nav` #045cb4 (nav links) · `--color-link` #1e293b · `--color-link-hover` #046bd2 · `--color-muted` #334155 (footer) · `--color-surface` #f9fafb (mobile menu) · `--color-border` #e2e8f0 · `--color-rule` #ccc · `--color-button-bg` / `--color-button-text` · `--color-focus` · brand: `--color-whatsapp` `--color-linkedin` `--color-facebook` `--color-instagram` |
| Fonts | `--font-body` Roboto · `--font-heading` Barlow Semi Condensed (h1–h3) |
| Sizes | `--fs-body` 22px (17px ≤ 921px) · `--fs-lead` 25px · `--fs-h2` 47/32/25px · `--fs-h3` 30/26/22px · `--fs-medium` 20px · `--fs-small` 13px · `--fs-footer` 16px · `--fs-flag` 36px |
| Spacing | `--space-20` 10px · `--space-30` 15px · `--space-40` 22px · `--space-50` 33px · `--space-60` 50px · `--space-70` 74px · `--space-80` 111px · `--gap` 24px |
| Layout | `--content-width` 1200px · `--wide-width` 1332px · `--gutter` 20px · `--header-height` · `--button-padding` |

Breakpoints: **921px** (mobile header, smaller type), **781px** (columns stack), **599px** (extra gap between stacked columns), **544px** (smallest headings).
Border radius is 0 everywhere, except round avatar and social icons.

## Deploy (Cloudflare Pages)

- Connect the GitHub repo in Cloudflare Pages → **Framework preset: Astro**, **Build command:** `npm run build`, **Build output directory:** `dist`.
- Set the environment variable `NODE_VERSION=22` (Astro 7 needs Node ≥ 22.12; also pinned in `.nvmrc`).
- **Analytics**: enable *Web Analytics* in the Pages project settings (Metrics → Web Analytics). It's cookieless, so there's no cookie banner. No code change needed.
- Add the custom domain `massage-to-go.nl` (+ `www` redirect) under *Custom domains*.
- `public/_redirects` sends old WordPress URLs (`/cookie-policy/`, `/feed/`, `/wp-admin`, …) to `/`.

## Verifying changes visually

Claude Code environments usually have Playwright and Chromium available. After a change:
1. `npm run build && npm run preview`
2. Screenshot `http://localhost:4321/` at 375, 768 and 1440px wide (full page) and look at them.
3. The old site's screenshots are in `_original/screenshots/` if you need to compare against the original design.
4. Check the browser console for errors and that the mobile menu, flag dialogs, carousel and map button still work.

## Rules

- **Stay framework-free.** No React/Vue/Svelte/Alpine, no Tailwind, no jQuery. Small interactions are plain `<script>` blocks inside the component that needs them.
- **Reuse tokens.** No hard-coded colors, font families or spacing values when a token exists. Add a token to `global.css` rather than repeating a value.
- **No new dependencies without a clear reason.** Write the reason in the commit message.
- **Text stays in the components.** No CMS, content collections or JSON files for copy.
- **Keep it accessible:** one `<h1>` per page, heading order h1 → h2 → h3, `alt` on every content image (`alt=""` only for decorative ones), visible focus styles, `aria-label` on icon-only links/buttons, everything reachable by keyboard.
- **Images always via `astro:assets`** (not `<img src="/…">` from `public/`), so they get optimized and sized.
- **No third-party scripts or embeds that set cookies on page load.** The map only loads after a click for that reason. If you add one, it needs a consent mechanism.
- **Keep the copy as Nathalie wrote it.** Known typos ("tween", "nummer nummer", "word er") are kept on purpose until she decides otherwise.

## Intentional differences from the old WordPress site

- Real `<h1>` (visually hidden; the brand text is part of the hero photo). `lang="nl"`, `og:locale=nl_NL`.
- Meta description: the original's auto-generated "Contact 🇬🇧 🇫🇷 🇩🇪 …" prefix and mid-sentence cut-off removed. The text itself is the original intro.
- Structured data: `HealthAndBeautyBusiness` with address, phone, email and opening hours, replacing AIOSEO's "My WordPress".
- Phone numbers are `tel:` links and the email is a `mailto:` link (both were plain text or broken). Both LinkedIn links point to `nathaliehendrix`.
- The contact address is no longer clipped (the old site overlapped it with the next block).
- Map: click-to-load Google Maps instead of the OpenLayers plugin (no cookies or JS until clicked).
- Carousel: no autoplay (WCAG 2.2.2). Arrows stay inside the viewport on mobile. Swipe and keyboard arrows work.
- No cookie banner and no Cookie Policy page (cookieless Cloudflare Web Analytics replaces Google Analytics).
- No scroll-to-top button (the nav plus the Home link cover it). The footer no longer says "Powered by Astra WordPress Theme".
- Real bold weights are self-hosted (the old site loaded only Roboto 400 and let the browser fake bold).
- No horizontal overflow on phones (the old site was 5px too wide at 375px).
