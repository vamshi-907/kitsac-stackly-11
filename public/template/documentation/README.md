# StreetFlame — Mobile Food Truck HTML Template

A premium, production-ready static HTML5 template for mobile food trucks, street food vendors, gourmet food vans, coffee trucks, taco trucks, BBQ trucks, and catering-on-wheels businesses.

- **Framework**: Bootstrap 5.3 + vanilla CSS3 + vanilla JavaScript
- **Icons**: Remix Icons 4
- **Fonts**: Bricolage Grotesque (headings) + Urbanist (body)
- **Pages**: 17 unique templates
- **Features**: Dark/Light mode, RTL support, WCAG 2.1 AA, SEO-ready, responsive from 320px+

## 1. Installation

1. Extract the ZIP archive.
2. Upload the entire `template/` folder to your web host, OR open `pages/index.html` locally in a browser.
3. No build step required — pure HTML/CSS/JS.

To view locally without a server, double-click `pages/index.html`.

## 2. Folder Structure

```
template/
├── index.html              # Redirects to pages/index.html
├── assets/
│   ├── css/
│   │   ├── style.css       # Core design system + components
│   │   ├── components.css  # Extended components
│   │   ├── dark-mode.css   # Dark theme
│   │   ├── rtl.css         # RTL layout support
│   │   └── responsive.css  # Breakpoint tweaks
│   ├── js/
│   │   ├── main.js         # Entry / countdown / year
│   │   ├── theme.js        # Dark mode + RTL toggles
│   │   ├── animations.js   # Fade-in + counters + sticky nav
│   │   ├── gallery.js      # Lightbox
│   │   └── forms.js        # Client validation + toast
│   ├── images/             # (empty — uses Unsplash CDN in demo)
│   ├── fonts/              # (empty — uses Google Fonts CDN)
│   └── plugins/            # (Bootstrap loaded via CDN)
├── pages/
│   ├── index.html
│   ├── about.html
│   ├── menu.html
│   ├── menu-details.html
│   ├── locations.html
│   ├── catering.html
│   ├── catering-details.html
│   ├── booking.html
│   ├── gallery.html
│   ├── testimonials.html
│   ├── blog.html
│   ├── blog-details.html
│   ├── contact.html
│   ├── faq.html
│   ├── merch-preview.html
│   ├── 404.html
│   └── coming-soon.html
└── documentation/
    └── README.md
```

## 3. Customization Guide

### 3.1 Colors (CSS Variables)

All colors live as CSS custom properties in `assets/css/style.css` under `:root`:

| Variable | Purpose | Value |
|---|---|---|
| `--sf-primary` | Electric Raspberry | `#E83E8C` |
| `--sf-secondary` | Turquoise Cyan | `#27D3C3` |
| `--sf-accent` | Lemon Zest | `#FFE45E` |
| `--sf-highlight` | Soft Flamingo | `#FFA8B6` |
| `--sf-bg` | Vanilla White | `#FFFDF7` |
| `--sf-surface` | Light Quartz | `#F4F1EC` |
| `--sf-text` | Charcoal Black | `#2F2A2A` |
| `--sf-success` | Fresh Lime | `#A8D948` |
| `--sf-warning` | Golden Maize | `#F4C542` |
| `--sf-danger` | Hot Cherry | `#E94B5A` |

Change any value in `:root` and the entire template updates. Dark-mode overrides live in `assets/css/dark-mode.css`.

### 3.2 Typography

Two Google Fonts are loaded via `<link>` in every page `<head>`:

- **Headings**: `Bricolage Grotesque` (weights 400/600/700/800)
- **Body**: `Urbanist` (weights 400/500/600/700/800)

Swap by replacing the `<link href="https://fonts.googleapis.com/…">` URL and the `--sf-font-head` / `--sf-font-body` variables.

### 3.3 Spacing System

8-pixel scale via variables (`--sf-s-1` = 8px through `--sf-s-8` = 128px).

## 4. Components Library

All markup is documented inline in each page. Reusable classes:

- `.btn-sf-primary`, `.btn-sf-secondary`, `.btn-sf-outline`, `.btn-sf-ghost` — buttons
- `.food-card` — menu / product card with image + price + actions
- `.loc-card` (add `.today` for highlighted) — location card
- `.pkg-card` (add `.featured` for highlighted) — catering package
- `.review-card` — testimonial
- `.blog-card` — blog list card
- `.cat-tile` — category tile
- `.stat-card` — statistics
- `.merch-card` — merch product
- `.sf-accordion` — FAQ / details accordion
- `.gallery-grid` — masonry gallery with auto-attached lightbox
- `.floating-card` — hero floating info cards
- `.chip` — filter/tab pill
- `.timeline` — vertical timeline
- `.map-placeholder` — map area (swap for Google Maps embed)
- `.countdown` — coming-soon countdown
- `.eyebrow` — small pill label above headings
- `.text-gradient` — brand gradient text
- `.sf-icon-btn` — round icon button (nav/theme)

## 5. JavaScript Modules

| File | Exposes | Notes |
|---|---|---|
| `theme.js` | `[data-sf-theme-toggle]`, `[data-sf-rtl-toggle]` | Persists in `localStorage` (keys `sf-theme`, `sf-dir`) |
| `animations.js` | `[data-sf-fade]`, `[data-sf-count]` + sticky nav | IntersectionObserver-driven |
| `gallery.js` | `.gallery-grid .g-item` | Auto-mounts a full-screen lightbox |
| `forms.js` | `[data-sf-form]`, `data-sf-success="msg"`, `window.sfToast(msg,type)` | Required-field + email validation |
| `main.js` | `[data-year]`, `[data-sf-countdown="ISO datetime"]` | Auto-updates footer year + countdown |

## 6. Gallery System

Wrap every image in `.gallery-grid > .g-item > img`. `gallery.js` auto-attaches a lightbox — no configuration needed.

## 7. Dark Mode

Set `data-theme="dark"` on `<html>` or click any `[data-sf-theme-toggle]` button. State persists in `localStorage`.

## 8. RTL Support

Set `dir="rtl"` on `<html>` or click `[data-sf-rtl-toggle]`. `rtl.css` mirrors floats, paddings, and icon positions.

## 9. Forms

Add `data-sf-form` to any `<form>` for client-side validation + toast confirmation:

```html
<form data-sf-form data-sf-success="Booked! 🔥">
  <input required>
  <input type="email" required>
  <button type="submit">Send</button>
</form>
```

To wire to a real backend, remove `data-sf-form` and add your own handler, or edit `assets/js/forms.js` and replace the toast call with a `fetch(…)`.

## 10. SEO

- Unique `<title>` and `<meta name="description">` per page
- Open Graph + Twitter Card meta on every page
- Canonical `<link rel="canonical">` on every page
- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`
- `robots.txt` and `sitemap.xml` in project root
- All `<img>` have `alt` text; decorative images use `alt=""`
- Add Restaurant / LocalBusiness / Menu / FAQPage JSON-LD as needed

## 11. Accessibility (WCAG 2.1 AA)

- Skip nav via keyboard: tab through, focus rings visible (`--sf-accent`)
- All icon-only buttons carry `aria-label`
- Semantic heading hierarchy per page
- Forms use `<label>` + associated `id`/`for`
- Reduced-motion preference honored via `@media (prefers-reduced-motion: reduce)`
- Color contrast passes AA for all text/background combinations

## 12. Performance

- Lazy loading (`loading="lazy"`) on all non-hero images
- Fonts loaded with `preconnect` + `display=swap`
- CSS/JS split by concern for HTTP/2 multiplexing
- No render-blocking JS (all scripts at end of body)
- Bootstrap loaded from CDN (cached across sites)
- Ready for minification via `csso` / `terser`

Target: Google Lighthouse 90+ on all pages.

## 13. Credits

- **Bootstrap 5.3** — MIT — https://getbootstrap.com
- **Remix Icons** — Apache 2.0 — https://remixicon.com
- **Bricolage Grotesque, Urbanist** — OFL — Google Fonts
- **Demo photos** — Unsplash license — https://unsplash.com

## 14. Changelog

### v1.0.0 — Initial Release
- 17 unique HTML pages
- Dark mode + RTL support
- Full component library
- SEO + a11y baseline
- Countdown, lightbox, form validation, sticky nav

## 15. Support

For customization help or bug reports, contact **support@streetflame.demo** (replace with your ThemeForest support email).

Enjoy StreetFlame — and thanks for the purchase! 🔥