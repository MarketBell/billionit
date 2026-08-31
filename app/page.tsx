import { ArrowRight, Sparkles, LineChart, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { FeatureGrid } from "@/components/FeatureGrid";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Services ─────────────────────────────────────────────── */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we offer"
          title="Programmes built to make you a better trader"
          subtitle="From your first candle to a fully automated desk — pick the path that fits where you are today."
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title} className="h-full">
                <GlassCard interactive className="flex h-full flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-ink">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">
                    {s.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-ink">
                    {s.meta}
                  </p>
                  <div className="mt-5">
                    {s.ctaType === "pay" ? (
                      <Button href={s.href} external size="md" className="w-full">
                        {s.ctaLabel}
                        <ArrowRight size={16} />
                      </Button>
                    ) : (
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="md"
                        className="w-full"
                      >
                        {s.ctaLabel}
                      </Button>
                    )}
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      {/* ── Why us ───────────────────────────────────────────────── */}
      <Section id="why-us" tone="tint">
        <SectionHeading
          eyebrow="Why Billionit Wealth"
          title="A practical, disciplined path to the markets"
          subtitle="Education first, execution always — with risk management at the core of everything we teach."
        />
        <FeatureGrid />
      </Section>

      {/* ── About ────────────────────────────────────────────────── */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-ink">
              About us
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Your journey from learning to financial freedom
            </h2>
            <p className="mt-5 leading-relaxed text-navy/70">
              Billionit Wealth is a trading education and community platform. We
              help aspiring and experienced traders build real, lasting skill —
              from market fundamentals and technical analysis to option selling,
              hedging and fully automated algo strategies.
            </p>
            <p className="mt-4 leading-relaxed text-navy/70">
              Learn today, trade tomorrow, and grow forever — alongside a
              community and a live trading desk that keeps you connected to the
              market every day.
            </p>
            <p className="mt-6 flex items-start gap-2 text-sm text-navy/60">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-ink" />
              {siteConfig.company.registeredAddress}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="bg-white/70">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { k: "Basic → Advance", v: "2-month course" },
                  { k: "Option Selling", v: "20-day intensive" },
                  { k: "Algo Trading", v: "Done-for-you" },
                  { k: "Trading Desk", v: "Live community" },
                ].map((item) => (
                  <div key={item.k}>
                    <p className="text-2xl font-bold text-navy">{item.v}</p>
                    <p className="mt-1 text-sm text-navy/60">{item.k}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* ── OI Intelligence (integration-ready placeholder) ──────── */}
      <Section id="oi-intelligence" tone="dark">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
            <Sparkles size={14} className="text-gold" />
            Coming soon
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            OI Intelligence platform
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            A powerful open-interest analytics platform is on the way — real-time
            insights to sharpen your options and hedging decisions. It will plug
            in right here.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/60">
            <LineChart size={18} className="text-gold" />
            Integration-ready — launching with Billionit Wealth
          </div>
        </div>
      </Section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <Section tone="tint">
        <GlassCard className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Ready to start your trading journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/70">
            Enroll in a programme or talk to us about algo trading and the live
            trading desk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#services" size="lg">
              Explore programmes
              <ArrowRight size={18} />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact us
            </Button>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
