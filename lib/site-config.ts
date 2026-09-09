/**
 * SINGLE source of truth for all brand / business / contact details, service
 * payment links and social profiles. Edit values here and they update across the
 * whole site (nav, hero, services, footer, legal pages, structured data, metadata).
 */

export const siteConfig = {
  // Brand
  brand: "Billionit Wealth",
  tagline: "Learn · Trade · Grow",
  // A slightly longer strap used in the hero + metadata description.
  strap: "Learn Today. Trade Tomorrow. Grow Forever.",
  description:
    "Billionit Wealth — trading education and community. Learn from basics to advanced strategies, option selling and hedging, algo trading, and a live trading desk. Learn · Trade · Grow.",
  domain: "billionitwealth.in",
  // Pick one host everywhere (www) so canonical/OG/sitemap never differ per client.
  url: "https://www.billionitwealth.in",

  // Business entity (sole proprietorship — Udyam registered).
  company: {
    legalName: "Billionit Wealth",
    udyam: "UDYAM-DL-06-0098086",
    registeredAddress:
      "Building No. E-55, Grnd Flr, Rajeev Nagar, North West Delhi, New Delhi, India, 110086",
  },

  // Contact (used across the site + legal pages).
  contact: {
    email: "billionitwealth@gmail.com",
    phone: "+91 8527675667",
    phoneHref: "+918527675667",
  },

  // Razorpay payment links for the paid programmes (external checkout).
  payments: {
    basicToAdvance: "https://rzp.io/rzp/uH2dK8B",
    optionSelling: "https://rzp.io/l/UJsNHIeu",
  },

  // Official social profiles.
  social: {
    instagram: "https://www.instagram.com/trading_at_biw",
    facebook: "https://www.facebook.com/share/1MKmDpuC6b/",
    youtube: "https://youtube.com/@trading_at_biw",
    telegram: "https://t.me/Trading_at_BiW",
  },

  links: {
    oiDashboard: "https://oi.billionitwealth.in",
  },

  // SEBI-style risk disclaimer shown in the footer and on legal pages.
  disclaimer:
    "Investments in securities are subject to market risks. Read all the related documents carefully before investing. Billionit Wealth provides education and does not offer investment advice or guarantee any returns.",

  // Last content review date shown on legal pages.
  legalLastUpdated: "31 August 2026",
} as const;

export type SiteConfig = typeof siteConfig;
