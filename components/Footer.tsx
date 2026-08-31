import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { mainNav, legalNav } from "@/lib/nav";
import { Logo } from "./Logo";

const { company, contact, social } = siteConfig;

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white/80">
      <div className="container-mb py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + business block */}
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}. Trading education and community — from market
              basics to advanced strategies, algo trading and a live trading desk.
            </p>

            <div className="mt-6 space-y-1.5 text-sm text-white/60">
              <p>
                <span className="text-white/50">Udyam:</span> {company.udyam}
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                <span>{company.registeredAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-white/40" />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-white/40" />
                <a href={`tel:${contact.phoneHref}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </p>
            </div>

            {/* Follow us */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.brand} on Instagram`}
                className="text-white/60 hover:text-gold"
              >
                <Instagram size={20} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.brand} on Facebook`}
                className="text-white/60 hover:text-gold"
              >
                <Facebook size={20} />
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.brand} on YouTube`}
                className="text-white/60 hover:text-gold"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/45">
          <p>{siteConfig.disclaimer}</p>
          <p className="mt-3">
            © {year} {company.legalName}. All rights reserved. · Payments processed
            securely via Razorpay.
          </p>
        </div>
      </div>
    </footer>
  );
}
