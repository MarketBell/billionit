# Billionit Wealth — Website

Marketing website for **Billionit Wealth** — trading education and community.
Tagline: **Learn · Trade · Grow**. Built with Next.js (App Router) and Tailwind CSS,
deployed on Vercel.

- **Status:** Live on Vercel (deployed 1 Sep 2026).
- **Live domain:** https://www.billionitwealth.in
- **Repository:** https://github.com/MarketBell/billionit

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | framer-motion |
| Icons | lucide-react |
| Font | Inter (via `next/font`) |
| Hosting | Vercel |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

## Project structure

```
app/
  layout.tsx            root layout — metadata, fonts, nav + footer
  page.tsx              home (single page: hero → services → why-us → about → OI → contact CTA)
  contact/page.tsx      contact page
  legal/{terms,privacy,refund}/page.tsx   legal pages (thin wrappers)
  globals.css           Tailwind layers + component utilities
  opengraph-image.tsx   dynamic social-share image
  robots.ts / sitemap.ts
components/              reusable UI (Hero, Section, GlassCard, Button, Footer, GlassNav, …)
content/
  services.ts           the four programmes (data-driven cards)
  features.ts           the "Why us" strip
  legal.ts              legal document content
lib/
  site-config.ts        SINGLE source of truth — brand, contact, payments, social, disclaimer
  nav.ts                navigation links
```

## Editing content

Almost everything is centralised — you rarely need to touch components:

- **Brand, contact, address, Udyam, payment links, social links, disclaimer** →
  `lib/site-config.ts`
- **Services:** Basic to Advance Course, Option Selling & Hedging, Algo Trading as a Service, Trading Desk.
- **OI Intelligence:** Direct integration to the real-time open-interest analytics platform (see `Derivatives-OI-Intelligence` sister repository).
- **The four programmes** (title, description, duration, price link vs. contact) →
  `content/services.ts`
- **The "Why us" points** → `content/features.ts`
- **Terms / Privacy / Refund text** → `content/legal.ts`
- **Navigation** → `lib/nav.ts`
- **Colours / theme** → `tailwind.config.ts` (gold + deep navy + emerald tokens)

Payment buttons open the Razorpay links defined in `site-config.ts` (`payments`).
Services set to "contact" route to `/contact` instead.

## Brand assets (to add)

The logo currently uses a clean gold placeholder mark (`components/Logo.tsx`). To use
the official gold-bull logo, add the artwork to `public/` and update `Logo.tsx`. A
browser-tab favicon can be added as `app/icon.png` (and `app/apple-icon.png`).

## OI Intelligence

The home page includes an **"OI Intelligence platform" section** (`app/page.tsx`,
`#oi-intelligence`) with a "Get the platform" button, and an "OI Intelligence" item in the
top navigation (`lib/nav.ts`) that scrolls to that section. OI Pulse Dashboard is a
purchased **Windows desktop app**; the button opens the on-site purchase page at **`/oi`**
(`app/oi/page.tsx`). The old hosted dashboard (`oi.billionitwealth.in`) has been retired.

## Deploying on Vercel

1. Import the `MarketBell/billionit` repository into Vercel (Framework preset: Next.js —
   auto-detected; no extra configuration needed).
2. Add the custom domain `www.billionitwealth.in` in the Vercel project settings.
3. Every push to `main` deploys automatically.

Security headers and a strict Content-Security-Policy are already configured
(`vercel.json`, `middleware.ts`).
