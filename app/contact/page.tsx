import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { TelegramIcon } from "@/components/TelegramIcon";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.brand} — courses, option selling & hedging, algo trading and the live trading desk.`,
  alternates: { canonical: "/contact" },
};

const { contact, company, social } = siteConfig;

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact us"
        title="Let's talk trading"
        subtitle="Questions about a course, algo trading, or the live trading desk? Reach us directly — we're happy to help."
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
        <GlassCard>
          <h2 className="text-lg font-semibold text-navy">Get in touch</h2>
          <div className="mt-5 space-y-4 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-navy/75 hover:text-gold-ink"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-ink">
                <Mail size={18} />
              </span>
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phoneHref}`}
              className="flex items-center gap-3 text-navy/75 hover:text-gold-ink"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold-ink">
                <Phone size={18} />
              </span>
              {contact.phone}
            </a>
            <p className="flex items-start gap-3 text-navy/75">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-ink">
                <MapPin size={18} />
              </span>
              {company.registeredAddress}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-outline pt-6">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.brand} on Instagram`}
              className="text-navy/55 hover:text-gold-ink"
            >
              <Instagram size={20} />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.brand} on Facebook`}
              className="text-navy/55 hover:text-gold-ink"
            >
              <Facebook size={20} />
            </a>
            <a
              href={social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.brand} on YouTube`}
              className="text-navy/55 hover:text-gold-ink"
            >
              <Youtube size={20} />
            </a>
            <a
              href={social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.brand} on Telegram`}
              className="text-navy/55 hover:text-gold-ink"
            >
              <TelegramIcon size={20} />
            </a>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col">
          <h2 className="text-lg font-semibold text-navy">Enroll in a programme</h2>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/65">
            Ready to begin? Enroll directly, or write to us for the Algo Trading
            service and the live Trading Desk — we&apos;ll get you set up.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <Button href={siteConfig.payments.basicToAdvance} external size="md">
              Basic to Advance Course
            </Button>
            <Button href={siteConfig.payments.optionSelling} external size="md">
              Option Selling &amp; Hedging
            </Button>
            <Button
              href={`mailto:${contact.email}?subject=Algo%20Trading%20%2F%20Trading%20Desk%20enquiry`}
              variant="secondary"
              size="md"
            >
              Enquire: Algo Trading / Trading Desk
            </Button>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
