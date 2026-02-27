# Suzie Wong's Good Time Bar — Website

## Project Overview

A complete multi-page website for Suzie Wong's Good Time Bar — a Hawaiian-inspired dive bar and live music venue in Fortitude Valley, Brisbane, Australia.

## Personality & Brand

- Chaotic, loud, fun, irreverent, grungy, music-driven
- NOT polished or corporate — raw dive bar energy
- Tone: rebellious, tongue-in-cheek ("So who the f*ck is Suzie Wong?", "Life is too short to drink responsibly")
- Entered through a retro fridge door
- Hawaiian surf shack aesthetic with neon signs

## Pages

- **Home** (`/`) — Hero, marquee strip, live music section, events preview, gallery preview, functions CTA, reviews
- **What's On** (`/whats-on`) — Featured + full events listing with genre tags
- **About** (`/about`) — Brand story, venue features, stats
- **Functions** (`/functions`) — Packages, enquiry form
- **Gallery** (`/gallery`) — Filterable masonry gallery with lightbox, uses real venue photos
- **Contact** (`/contact`) — Contact form, hours, address, social links

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Wouter routing
- **Styling**: Tailwind CSS + Shadcn UI
- **State**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Backend**: Express.js
- **Storage**: In-memory (MemStorage)

## Design Tokens

- **Primary**: Neon hot pink (#FF1F6A / HSL 340 100% 58%)
- **Accent**: Electric green (#0DFF6E) — Jameson neon inspired
- **Secondary**: Warm amber (#FFB300)
- **Background**: Deep near-black with warm undertone (HSL 20 8% 5%)
- **Font**: Montserrat (display/headings), Dancing Script (cursive neon sign quotes)
- Always dark mode — no light mode toggle

## API Endpoints

- `POST /api/enquiries` — Submit function enquiry
- `POST /api/contact` — Submit contact message

## Images

All real venue photos located in `attached_assets/` — referenced via `@assets/` alias.

## Key Components

- `client/src/components/Navigation.tsx` — Sticky nav with mobile menu
- `client/src/components/Footer.tsx` — Footer with hours, links, marquee
- Custom CSS: neon glow effects, grain overlay, marquee animation, fade-in-up scroll animations
