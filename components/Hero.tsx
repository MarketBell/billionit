"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site-config";

const trust = [
  "Expert guidance",
  "Practical approach",
  "Live sessions",
  "Risk-management focused",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-navy-deep text-white">
      {/* Aurora / radial glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-hero-radial" />
        <div
          className={`absolute -top-1/3 left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-aurora opacity-[0.16] blur-3xl ${
            reduce ? "" : "animate-aurora-spin"
          }`}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(60% 60% at 50% 35%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-3xl py-28 text-center sm:py-32 lg:py-36"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md">
            <Sparkles size={14} className="text-gold" />
            {siteConfig.tagline}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Learn Today. Trade Tomorrow.
            <br />
            <span className="text-gradient">Grow Forever.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Your journey from learning to financial freedom — expert-led courses,
            option selling &amp; hedging, algo trading, and a live trading desk.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#services" size="lg">
              Explore programmes
              <ArrowRight size={18} />
            </Button>
            <Button href="/contact" variant="onDark" size="lg">
              Contact us
            </Button>
          </div>

          <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/55">
            {trust.map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>

      {/* soft transition into the light body */}
      <div className="h-16 bg-gradient-to-b from-transparent to-lightbg" />
    </section>
  );
}
