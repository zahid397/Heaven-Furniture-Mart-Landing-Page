# Heaven Furniture Mart — Landing Page

Single-page, conversion-focused landing page for Heaven Furniture Mart, a bespoke
furniture brand on Agrabad Access Road, Chattogram. Every call to action opens a
WhatsApp chat with a pre-filled message. There is no backend, no CMS and no API.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3.4 ·
Framer Motion 11 · lucide-react

---

## Getting started

```bash
npm install
cp .env.example .env.local     # optional; sensible defaults are built in
npm run dev                    # http://localhost:3000
```

Production check before deploying:

```bash
npm run typecheck              # tsc --noEmit
npm run lint                   # next lint
npm run build                  # next build
```

> `npm run build` needs internet access the first time: `next/font/google`
> downloads and self-hosts Playfair Display and Inter at build time.

---

## Environment variables

Both are optional — the code falls back to the values below if they are missing.

| Variable | Default | Used for |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+8801960481983` | Every CTA. Non-digits are stripped before the `wa.me` link is built, so `+880…`, `880…` and `+880 1960-481983` all work. |
| `NEXT_PUBLIC_SITE_URL` | `https://heavenfurnituremart.com` | `metadataBase`, absolute OpenGraph/Twitter image URLs, JSON-LD `@id`. No trailing slash. |

Both are `NEXT_PUBLIC_*` because they end up in the rendered HTML. Neither is a
secret. Next.js inlines them at **build** time — change a value in Vercel and you
must redeploy for it to take effect.

---

## Project structure

```
app/
├── layout.tsx                 fonts, SEO metadata, FurnitureStore JSON-LD
├── page.tsx                   assembles every section
├── globals.css                Tailwind layers, focus system, reduced motion
├── data/
│   └── images.ts              every image path + its alt text, in one place
├── lib/
│   └── site.ts                contact details, WhatsApp link builder, nav links
└── components/
    ├── Navbar.tsx             transparent → solid at 50px, full-screen mobile menu
    ├── Hero.tsx               headline, CTA, offset brass-framed photo
    ├── BrandIntro.tsx         one-paragraph positioning statement
    ├── Collections.tsx        Living / Bedroom / Dining, asymmetric grid
    ├── BespokeHighlight.tsx   the differentiator + six trust points
    ├── SocialProof.tsx        MD quote, showroom photo, milestone strip
    ├── Footer.tsx             contact, socials, WhatsApp message composer
    ├── FloatingWhatsApp.tsx   fixed bubble, bottom-right
    ├── StickyMobileCTA.tsx    full-width bar, mobile only
    └── ui/
        ├── Button.tsx         primary / outline / quiet
        ├── FadeIn.tsx         FadeIn + Stagger + StaggerItem
        └── SectionHeading.tsx eyebrow, brass rule, title, subtitle
```

`@/*` resolves to `./app/*`, so `@/data/images` and `@/components/Hero` both work.

---

## Swapping the photography

1. Drop the new file into `/public/images/` using the **same filename**.
2. If the filename changes, update `app/data/images.ts` — nothing else.
3. Update the matching entry in `imageAlt` in the same file.

Every photo currently in `/public/images` came from Heaven Furniture Mart's own
social media exports. Each original had the logo, a "CRAFTED FOR LUXURY LIVING"
headline and a location bar burned into it. Those bands were cropped out so the
page carries its own typography instead of fighting the photo — putting the raw
exports on the page would have produced two headlines and two logos per image,
which reads as a social post, not a showroom.

`public/images/detail-console.jpg` is a spare crop (black console with brass
handles). It is not rendered anywhere — it is kept so you can swap it into
`bespokeDetail` or a collection card without re-cropping.

`public/og-image.jpg` (1200×630) was composed from `bespoke-craft.jpg`. Its serif
is Lora, not Playfair Display — Playfair was not available offline when the card
was generated. Regenerate it in Figma/Canva with Playfair if you want an exact
match; nothing in the code depends on how it was made.

---

## Design tokens

All defined in `tailwind.config.js`.

| Token | Hex | Use |
| --- | --- | --- |
| `charcoal` / `-light` / `-dark` | `#1A2421` `#23302C` `#141D1A` | dark section backgrounds, borders, overlays |
| `ivory` / `-light` / `-dark` | `#F9F8F6` `#FDFCFB` `#F2EFEA` | light backgrounds, cards, dividers |
| `brass` / `-light` / `-dark` | `#C5A059` `#D4B87A` `#A8873F` | CTA, accents, hairlines |
| `coffee` / `-light` / `-dark` | `#3E2723` `#5D4037` `#2C1B19` | body, muted, headings on light |

Type: Playfair Display (400/700) for headlines and quotes, Inter (300–600) for
everything else. One easing curve throughout: `cubic-bezier(0.22, 1, 0.36, 1)`,
0.8s, exposed as `ease-luxe`.

### Contrast — measured, not assumed

| Pair | Ratio | AA normal text |
| --- | --- | --- |
| coffee on ivory | 13.02:1 | pass |
| coffee-light on ivory | 8.78:1 | pass |
| ivory on charcoal | 15.01:1 | pass |
| brass on charcoal | 6.48:1 | pass |
| charcoal on brass (CTA) | 6.48:1 | pass |
| **brass on ivory** | **2.32:1** | **fail** |
| **brass-dark on ivory** | **3.19:1** | **fail** (large text only) |

Consequences, applied throughout the build:

- Brass is **never** used for text on ivory. Eyebrows on light sections use
  `coffee-light`. Brass on ivory appears only as decorative hairlines that carry
  no information.
- The focus ring is **not** a fixed brass ring. `--focus-ring` in `globals.css`
  is charcoal by default and switches to brass inside `.on-dark` sections. A
  brass ring on ivory would be 2.32:1, below the 3:1 floor WCAG 2.1 (1.4.11)
  requires for focus indicators.

---

## Accessibility

- Semantic `header` / `main` / `section` / `footer`, single `h1`, no skipped levels.
- Skip-to-content link, visible on keyboard focus.
- `aria-label` on every icon-only control; mobile menu exposes `aria-expanded`
  and `aria-controls`, traps body scroll, and closes on `Escape`.
- Touch targets at or above 44px; the mobile CTA bar is 50px and respects
  `env(safe-area-inset-bottom)`.
- `prefers-reduced-motion` is honoured twice over: Framer Motion's
  `useReducedMotion()` returns children unanimated, and a CSS media query kills
  transitions, animations and smooth scrolling.

---

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import it in Vercel — the framework is detected automatically.
3. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_SITE_URL` under
   Settings → Environment Variables, then redeploy.
4. Point the domain at the project and set `NEXT_PUBLIC_SITE_URL` to the final
   domain so OpenGraph images resolve absolutely.

Static export (`output: 'export'`) is **not** configured. If you need it, set
`images.unoptimized = true` in `next.config.mjs` — `next/image` cannot optimise
on a static host.

---

## Verification status

Read this before claiming anything about the build.

**Verified**

- All 15 `.ts`/`.tsx` files parse cleanly under the TypeScript 6.0.3 parser
  (0 syntax diagnostics).
- Contrast ratios above were computed with the WCAG 2.1 relative-luminance
  formula, not estimated.
- Every generated image was visually inspected; no leftover logo, headline or
  location-bar pixels remain in any crop.
- Total image payload: ~810 KB across 9 files, before Next.js converts them to
  AVIF/WebP.

**Not verified — do these on your machine**

- `npm install`, `npm run build`, `npm run lint` and `npm run typecheck` have
  **not** been executed. The build environment had no network access, so
  `node_modules` was never installed and no compiler ran against real type
  definitions. Run all four before submitting.
- Nothing has been rendered in a browser. Layout, responsive behaviour, hover
  and focus states, and the scroll-triggered animations are unverified visually.
- Lighthouse / Core Web Vitals numbers (LCP, CLS, page weight) are unmeasured.
  The budget in the brief is a target here, not a result.
- No deployment has happened.

---

## Design review findings (from the static mockups)

Two bugs were caught by composing mockups from the real assets before any build ran:

1. **Hero headline overflowed the image card at `xl`.** With a 6/6 grid the left
   column is ~584px inside `max-w-7xl`, but "Crafted Around You." at
   `text-7xl` (72px) Playfair needs ~660px. Fixed by moving to a **7/5 grid**
   and capping the headline at `xl:text-[64px]`.
2. **The offset brass frame was anchored to the wrong box.** It used
   `inset-0` on a wrapper that also carried `lg:pl-10`, so the frame was
   offset from the padded parent rather than from the photo. Fixed by wrapping
   only the aspect box.

One more change, from looking at the mobile flow: the hero photo sat entirely
below the fold at 390×844. Vertical spacing was tightened and the phone-size
aspect changed from `4/5` to `3/4` so roughly 100px of the photo now sits above
the fold. Still unverified in a browser — check it first on a real device.

If it still feels text-heavy on mobile, the stronger fix is a full-bleed hero
photo behind the text below `lg`, with the two-column card kept for desktop.
That was deliberately **not** done here because it could not be visually
verified in this environment.
#   - H e a v e n - F u r n i t u r e - M a r t - L a n d i n g - P a g e  
 