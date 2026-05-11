# QA Report — Suzie Wong's Launch Options Deliverable

## What was built

Three interconnected pages forming a client-facing launch options deliverable:

1. **Landing page** (`/launch`) — Two large interactive cards presenting Option 1 ($1,950) and Option 2 ($3,750). Cards feature hover lift, glow/border response, cursor pointer, and subtle animation. Price visible at the bottom of each card. Option 2 carries a "Most useful" badge.

2. **Option 1 — Live in 24 hours** (`/launch/option-1`) — A scaled-back version of the Suzie Wong's site showing the core website experience with subtle clickable annotation markers explaining what is included. Annotations cover: hero, navigation, what's on, functions/bookings, contact pathway, mobile-ready structure, performance/deployment, and visual polish.

3. **Option 2 — Connected** (`/launch/option-2`) — The full website demo with yellow-tinted annotation markers showing systems and integrations. Includes all Option 1 content plus: mailing capture section, audience capture section, enhanced weekly lineup structure, and annotations covering live music lineup, bookings/functions, mailing capture, analytics/tracking, update/admin setup, and audience capture.

Both option pages include a fixed top bar showing which option is being viewed, a "Back to options" link, and a final CTA section with "Ready to move forward?" messaging.

## Files created/modified

| File | Action |
|------|--------|
| `client/src/pages/LaunchOptions.tsx` | Created — Landing page |
| `client/src/pages/LaunchOption1.tsx` | Created — Option 1 annotated site |
| `client/src/pages/LaunchOption2.tsx` | Created — Option 2 connected site |
| `client/src/App.tsx` | Modified — Added routes, launch pages render without main nav/footer |
| `client/public/_redirects` | Created — Netlify SPA fallback routing |

## How to test

### Landing page (`/launch`)

- [ ] Page loads with headline "Your website is already built. Choose how it goes live."
- [ ] Two cards are visible side by side on desktop, stacked on mobile
- [ ] Option 1 card shows title, inclusions list, $1,950 price, and "Enter site" CTA
- [ ] Option 2 card shows title, inclusions list, $3,750 price, "Most useful" badge, and "Enter connected version" CTA
- [ ] Cards lift on hover with glow/border response
- [ ] Clicking Option 1 card navigates to `/launch/option-1`
- [ ] Clicking Option 2 card navigates to `/launch/option-2`
- [ ] No main site navigation or footer appears on this page

### Option 1 (`/launch/option-1`)

- [ ] Fixed top bar shows "Option 1 — Live in 24 hours — $1,950"
- [ ] "Back to options" link navigates to `/launch`
- [ ] Demo navigation bar with Suzie Wong's logo and nav links appears (non-functional links)
- [ ] Hero section renders with venue image, neon title, tagline, and CTAs
- [ ] Marquee strip animates
- [ ] Live music section, events section, venue section, function CTA, and reviews all render
- [ ] Footer section renders with hours and contact info
- [ ] Pink annotation markers (pulsing circles with `i` icon) appear near relevant sections
- [ ] Clicking an annotation marker opens a tooltip with title and description
- [ ] Clicking the X on the tooltip closes it
- [ ] Tooltips show "Included in Option 1" tag
- [ ] On mobile, a stacked list of all annotations appears below the footer
- [ ] Final CTA reads "Ready to move forward?" with payment terms
- [ ] "Compare options" button navigates back to `/launch`
- [ ] Scroll reveal animations work on sections

### Option 2 (`/launch/option-2`)

- [ ] Fixed top bar shows "Option 2 — Connected — $3,750"
- [ ] "Back to options" link navigates to `/launch`
- [ ] All sections from Option 1 appear plus additional sections
- [ ] "Stay in the Loop" mailing capture section with email input and sign-up button
- [ ] "Turn Visitors into Regulars" audience capture section with benefit list
- [ ] Enhanced weekly lineup section with "Reusable weekly structure" label
- [ ] Gallery preview section included
- [ ] Yellow/gold annotation markers appear (distinct from Option 1's pink markers)
- [ ] Annotation tooltips show "Connected system — Option 2 only" tag
- [ ] On mobile, stacked annotation cards appear with "Connected systems in Option 2" heading
- [ ] Final CTA identical to Option 1
- [ ] All scroll animations work

### Cross-cutting

- [ ] Existing site pages (`/`, `/whats-on`, etc.) still work with normal navigation and footer
- [ ] Launch pages do not show the main site nav or footer
- [ ] No broken images on any page
- [ ] TypeScript compiles without errors
- [ ] Responsive on mobile (375px+), tablet, and desktop
- [ ] All entry types shown as "Free" or "Free Entry" — no paid ticket prices on the launch deliverable pages
- [ ] No invented venue details that aren't already in the source site

## Content accuracy notes

- Event listings use "Free" or "Free Entry" — no paid cover charges
- Band names on the launch option pages are generic placeholders (e.g., "Live Music Thursday") rather than specific invented names
- Venue address kept generic ("Fortitude Valley, Brisbane QLD") on the option pages since these are demo views
- All content in annotation tooltips matches the brief specifications exactly
