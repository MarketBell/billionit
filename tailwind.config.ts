import type { Config } from "tailwindcss";

/**
 * Billionit Wealth design tokens — a premium "gold bull on deep navy" identity.
 * Gold leads as the brand + CTA accent; deep navy is the dark surface/hero base;
 * emerald is the secondary "growth" accent (the GROW in Learn · Trade · Grow).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gold — brand + primary action. `ink` is the darker gold that meets
        // WCAG contrast for gold text/links on a light background.
        gold: {
          DEFAULT: "#E0A81E",
          light: "#F5C542",
          ink: "#A16207",
        },
        navy: {
          DEFAULT: "#0B1120", // headings / dark surfaces
          deep: "#05070E", // dark hero base (near-black premium)
        },
        emerald: { DEFAULT: "#10B981", light: "#34D399" },
        lightbg: "#F7F6F2", // warm off-white to complement gold
        sand: "#F1ECE0", // tinted band (warm)
        outline: "#E5E1D8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(5, 7, 14, 0.10)",
        "glass-lg": "0 24px 64px rgba(5, 7, 14, 0.18)",
        glow: "0 0 48px rgba(224, 168, 30, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(60% 80% at 50% 0%, rgba(224,168,30,0.26) 0%, rgba(5,7,14,0) 70%)",
        aurora:
          "conic-gradient(from 180deg at 50% 50%, #E0A81E 0deg, #10B981 120deg, #F5C542 240deg, #E0A81E 360deg)",
      },
      keyframes: {
        "aurora-spin": {
          "0%": { transform: "rotate(0deg) scale(1.4)" },
          "100%": { transform: "rotate(360deg) scale(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "aurora-spin": "aurora-spin 24s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
