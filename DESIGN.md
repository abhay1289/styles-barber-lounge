# DESIGN

## Job
- Subject: STYLES Barber Lounge — Downtown Los Angeles location landing page
- Audience: Men and families seeking a premium / celebrity barbershop in LA (near Crypto.com Arena / LA Live)
- Single job of the site: Drive bookings (Book Your Chair via Squire) while selling the premium chair experience

## Thesis
The first viewport must prove: *celebrity-grade barbers work these black quilted chairs under mood light — book yours.*

## Own-world
Dark premium lounge interior: black quilted leather chairs, coffered ceiling, warm pin-spot lighting, white marble floors, geometric floral/swirl brand mark. Vernacular is LA night-out + New York fade precision. Clone of [stylesbarberlounge.com/downtown-la](https://www.stylesbarberlounge.com/downtown-la) — match structure, hierarchy, tone, and visual language as closely as practical. Do not invent a softer or brighter alternative look.

## Tokens

### Color
| Name | Hex | Role |
|------|-----|------|
| `void` | `#0A0A0B` | Page background, hero scrim base |
| `ink` | `#111114` | Elevated section panels, footer |
| `snow` | `#F5F5F7` | Primary text, wordmark, ghost CTA border/text |
| `mute` | `#9A9AA3` | Body secondary, captions, hours meta |
| `royal` | `#2B5CFF` | Accent — "THE STARS", primary CTAs, ticker dots, focus rings, links |
| `danger` | `#E5484D` | Form/error only (not marketing) |

Avoid purple gradients, cream grounds, terracotta, and acid-green. Accent is vivid royal/electric blue only.

### Type
| Role | Family | Weight / style | Use |
|------|--------|----------------|-----|
| Display | **Oswald** or **Bebas Neue** (Google Fonts) — heavy condensed uppercase | 600–700 | H1–H3, section titles, menu service names, ticker |
| Body | **DM Sans** or **Inter** fallback only if DM Sans unavailable | 400 / 500 | Supporting sentences, FAQ, reviews, address blocks |
| Mono / data | **JetBrains Mono** or system mono | 400 | Prices, durations, phone numbers in dense rows |

Scale (approx): H1 ~clamp(2.75rem, 8vw, 5.5rem) / tracking tight; H2 ~clamp(1.75rem, 4vw, 3rem); body 1rem–1.125rem / leading 1.55; micro 0.75rem uppercase tracking-wide for eyebrows.

### Space
- Base unit: `8px`
- Section vertical rhythm: `96px` desktop / `64px` mobile between major sections
- Content max width: `1120px`–`1200px`; full-bleed for hero, marquee, cinematic strip, gallery
- Nav height: ~`72px` fixed or sticky over hero

### Radius / line / shadow
- Radius: CTAs and chips `9999px` (pill); cards/media `0`–`4px` max (lounge, not SaaS)
- Line: `1px` borders at `rgba(245,245,247,0.12)` for ghost buttons, menu dividers, FAQ rows
- Shadow: soft black elevation only under sticky nav if needed; no multi-layer colored glow

## Signature
**Split headline accent:** condensed white `STYLISTS FOR /` + electric `THE STARS` on a full-bleed night interior — the brand lives in that blue word, not in chrome chrome.

## Stack recommendation
**Next.js App Router + Tailwind CSS v4** + Framer Motion (or CSS `@keyframes` for marquee). Placeholders via `/public` or Unsplash/Pexels with roles below. Booking CTAs link out to Squire (and STYLES Collective app store URLs when available).

## Sitemap
| Route | Job |
|-------|-----|
| `/` | Redirect to `/downtown-la` **or** render the same Downtown LA page |
| `/downtown-la` | Primary single-page clone — sole implement slice |

Out of scope for routes: separate NY page, blog, booking embed (external link only).

## First viewport

```
┌──────────────────────────────────────────────────────────┐
│ [mark + STYLES]              [☰]  [ Book Now → pill ]    │
│                                                          │
│  Los Angeles · Est. 2018                                 │
│                                                          │
│  STYLISTS FOR                                            │
│  THE STARS          ← "THE STARS" in royal blue          │
│                                                          │
│  Celebrity Barbershop in Los Angeles                     │
│  More than a haircut. It's an experience. …              │
│                                                          │
│  [ Book Your Chair ]  [ The Experience ]                 │
│  ★★★★★  ·  1000+ Google reviews                          │
│                                                          │
│  ▓▓▓▓▓▓▓ full-bleed night interior (chairs) ▓▓▓▓▓▓▓▓▓▓▓ │
└──────────────────────────────────────────────────────────┘
← immediate next: horizontal services marquee
```

Hero budget only: brand-level H1, sub, one supporting sentence, two CTAs, Google reviews line, full-bleed image. **No stats cards in hero.**

## Pages

### `/downtown-la` (and optionally `/`)

**Primary action everywhere:** `Book Your Chair` / `Book Now` → Squire booking URL (placeholder `https://book.squareup.com/` or live Squire link when provided). Secondary: `#experience` / scroll to cinematic or Why section labeled "The Experience".

#### Section order (clone — do not reorder)

1. **Nav**
   - Logo: geometric floral/swirl mark + "STYLES" wordmark, white
   - Hamburger (mobile + desktop clone of live if live uses it)
   - Pill `Book Now` (royal fill)
   - Sticky over dark hero; transparent → slight `ink` fill on scroll optional

2. **Hero**
   - Eyebrow: `Los Angeles · Est. 2018`
   - H1: `STYLISTS FOR` / `THE STARS` (`THE STARS` = `royal`)
   - Sub: `Celebrity Barbershop in Los Angeles`
   - Support: `More than a haircut. It's an experience. Precision fades, beard sculpting and the signature C.E.O Treatment in the heart of Los Angeles, from the chairs trusted by names you know.`
   - CTAs: solid royal `Book Your Chair` + ghost white `The Experience`
   - Meta: `5 · 1000+ Google reviews` with star treatment
   - Image role **HERO**: full-bleed night shop interior — black quilted chairs row, coffered ceiling, warm mood spots; slight dark gradient scrim left/bottom for type legibility

3. **Marquee / ticker**
   - Infinite horizontal loop, uppercase display or tracking-wide body
   - Items: `Precision Cuts` · `Beard Sculpting` · `Hot Towel Shaves` · `The C.E.O Treatment` · `Walk ins Welcome` · `Complimentary Beverage` · `New York` · `Los Angeles`
   - Thin bar, snow text on void; optional royal separators

4. **Cinematic image story strip** ("Down the street, into Styles")
   - Headline: `Down the street, into Styles`
   - Sub-context: `New York · Los Angeles`
   - Horizontal or staggered full-bleed frames (3–5) telling arrival → night exterior/signage → floor marble → craft in-chair
   - Image roles **STORY_01–04**: (1) downtown night street / LA Live adjacency mood, (2) shop entry / neon or logo glow, (3) marble floor + chair reflection, (4) clippers/hands craft close-up — cinematic, desaturated warm blacks

5. **Why We Do It + founder + stats**
   - Title beat: `More than a haircut. It's an experience.`
   - Body (preserve): great cut changes how you carry yourself; precision; trends; comfort
   - Founder: Founded in 2018 by **Shalom Styles** who opened his first shop at just twenty… shops in New York and Los Angeles
   - Tagline lockup: `We STYLE. You SMILE!` (live also uses “We STYLES. You SMILE.” — prefer brand line **We STYLE. You SMILE!**; supporting: family friendly & modern in an upscale environment)
   - Stats row (not in hero): `15 years` Behind the chair · `2 CITIES` New York & Los Angeles · `1,000+` Google reviews

6. **Signature C.E.O Treatment + VIP upsell**
   - H: `The C.E.O Treatment`
   - Pitch: complete head-to-finish; one hour; zero compromise
   - Price: `$100` · one hour, complete
   - Checklist: Facial Scrub x Black Mask · Nose Wax · Haircut & Beard · Eyebrows · Complimentary beverages
   - Upsell card: `Go further: The V.I.P` · `$170` · 1 hr 30 min · full combination copy from live site
   - Image role **CEO**: client in chair mid-treatment / towel or facial mask mood, dark lounge

7. **Menu — "Craft, priced fair."**
   - Intro: full menu from booking page; consultation; walk-ins welcome; booking guarantees chair
   - Service rows (name · price · duration · blurb):
     | Service | Price | Duration |
     |---------|-------|----------|
     | V.I.P | $170 | 1 hr 30 min |
     | Haircut | $45 | 20 min |
     | Haircut and Beard | $60 | 30 min |
     | Beard Trim | $15 | 20 min |
     | Facial Scrub X Black Mask | $30 | 30 min |
     | Hot Towel Shave | $30 | 20 min |
     | Kids Cut | $35 | 20 min |
     | Haircut & Beard with Full Enhancements | $80 | 1 hr |
     | The C.E.O Treatment | $100 | ~1 hr |
   - Quick add-ons: Shape Up $15 · Full Enhancements $20 · Eyebrows $10 · Nose Wax · Shampoo Scalp Treatment Massage $10 · Small Design $15 · Large Design $25 (match live durations)
   - Each primary service: secondary micro-CTA `Book` → Squire
   - Layout: stacked list with hairline dividers, not card grid

8. **Celebrity roll call carousel**
   - H: `The chairs the famous sit in.`
   - Support: Celebrities, athletes and tastemakers…
   - Horizontal scroll / carousel of chair portraits; caption chip `In the chair`
   - Image roles **CELEB_01–N**: placeholder portraits in barber chair (do not hotlink live celebrity photos without rights — use licensed stock “client in chair” lookalikes or silhouetted placeholders with same crop)
   - FAQ may name: Pete Davidson, Lil Jon, Paris Hilton, Bobby Shmurda, Jason Luv, Luisito Comunica, Warren Lotas, Andrei Deiu — use names only where legally appropriate; visuals stay placeholder

9. **The Space gallery**
   - H: `Marble, leather, light.`
   - Support: Black leather chairs, white marble floors and the signature geometric glow
   - Image roles **SPACE_01–04**: marble floors, quilted black chairs, geometric brand light/glow, wide lounge establishing shot — gallery grid or horizontal snap

10. **Reviews**
    - H: `Loved in two cities.`
    - Meta chips: 5★ Google · 1,000+ reviews · 2 Cities · Est. 2018
    - Carousel or grid of Google quote cards (sample from live — preserve voice):
      - Isiah Smith, LJ Stoll, Axan, Tyeisha Dawson, Eric Poff, Julian LeBlanc, Robert Trone, Max Retallick, Ben Smith, Paul, et al.
    - Attribution: name + Los Angeles + Google mark treatment
    - Empty/error: if feed fails, show static curated quotes above

11. **Neighborhood / location / hours / FAQ**
    - H: `Your barbershop in Los Angeles.`
    - Copy: 111 East 11th Street, Los Angeles, CA 90015; near Crypto.com Arena / Staples / LA Live; KTLA 5 three times; neighborhoods served (Koreatown, Echo Park, Silver Lake, Hollywood, Boyle Heights, University Park, Westside)
    - Address / Hours / Call blocks:
      - Address: 111 East 11th Street, Los Angeles, CA 90015
      - Hours: Sunday to Friday 8AM–8PM · Closed Saturdays
      - Phone: (213) 205-8906 (`tel:+12132058906`)
    - FAQ accordion `Questions, answered.` — preserve live Q&As (Sundays, Saturdays closed, prices, walk-ins, arena proximity, fades, KTLA, celebrities, CEO/VIP, loyalty, “where to find a good barber”, men’s cuts, exact address)

12. **Two locations**
    - H: `Two coasts. One standard.`
    - NY: 2234 Victory Boulevard, Staten Island, NY 10314 · (718) 524-6011 · same hours
    - LA: 111 East 11th Street · (213) 205-8906 · same hours
    - Image roles **LOC_NY** / **LOC_LA**: exterior or interior thumb per city (placeholders OK)

13. **Hiring CTA**
    - H: `We're always hiring barbers.`
    - Support: precision, speed, portfolio; one-on-one
    - Dual location contact repeat; CTA `Apply` / mailto or form placeholder

14. **Final book CTA + app links**
    - Strong closing: book chair + App Store / Google Play for STYLES Collective (placeholder badges if URLs unknown)
    - Primary pill Book Your Chair again

15. **Footer**
    - Mark + STYLES, tagline `We STYLE. You SMILE!` / `Stylists for the Stars`
    - Both addresses & phones, hours, Book Now, minimal legal/©
    - Social placeholders if present on live; keep quiet

### Empty / error notes
- Images: CSS gradient + muted label of role name if asset missing (`HERO`, `SPACE_01`, etc.) — never broken icon soup
- Booking: external link; if URL unset, button still visible with `#book` and console/comment TODO
- FAQ: one open at a time preferred; keyboard accessible

## Image roles & mood (placeholders)

| ID | Mood / content | Placement |
|----|----------------|-----------|
| `LOGO_MARK` | White geometric floral/swirl on transparent | Nav, footer |
| `HERO` | Night interior, black quilted chairs, coffered ceiling, mood lighting, full-bleed | Hero |
| `STORY_01` | Downtown LA night street near arena energy | Story strip |
| `STORY_02` | Shop entrance / branded glow | Story strip |
| `STORY_03` | White marble floor, chair reflections | Story strip |
| `STORY_04` | Clippers / hands / fade craft | Story strip |
| `CEO` | Treatment / towel / black mask in lounge | CEO section |
| `CELEB_*` | In-chair portrait crops, dramatic light | Carousel |
| `SPACE_*` | Marble, leather, geometric light | Gallery |
| `LOC_NY` / `LOC_LA` | Location thumbs | Two coasts |

Use Unsplash/Pexels barbershop / marble / night city stock — **do not hotlink** stylesbarberlounge.com assets.

## Motion (2–3 intentional)

1. **Hero entrance:** wordmark/H1 fade-up + slight delay on `THE STARS` color settle; CTAs fade after type (400–700ms, ease-out). Respect `prefers-reduced-motion`.
2. **Marquee:** continuous CSS translate loop of services (pausable on hover/focus).
3. **Scroll reveals:** cinematic strip frames and stats count-up or fade-in once on enter viewport; celebrity carousel drag/snap with momentum.

Avoid ambient particle noise, purple glows, or bounce-everywhere microinteractions.

## Copy voice
- Register: confident, premium, direct — celebrity shop without slang overload
- Use: precision, chair, fade, experience, Book Your Chair, C.E.O Treatment, V.I.P, walk-ins welcome, Stylists for the Stars, We STYLE. You SMILE!
- Avoid: “synergy”, soft wellness spa tone, purple prose, fake scarcity (“Only 2 slots left!”), emoji spam
- CTAs stay consistent: `Book Your Chair` / `Book Now` — never “Submit”

## Out of scope
- Production Next.js implementation (developer owns)
- Live Squire embed / account wiring beyond outbound links
- Official celebrity photo licensing
- Separate multipage IA beyond Downtown LA
- Voice/calling agents, CRM, CMS
- Authentic hotlinked brand photography from the live CDN
