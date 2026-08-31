import {
  GraduationCap,
  TrendingUp,
  Cpu,
  Users,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Short meta line (duration / charge / access). */
  meta: string;
  /** "pay" → external Razorpay checkout; "contact" → route to /contact. */
  ctaType: "pay" | "contact";
  /** External payment URL, when ctaType is "pay". */
  href?: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    icon: GraduationCap,
    title: "Basic to Advance Course",
    description:
      "From market basics to advanced strategies — technical analysis, risk management and practical, hands-on trading.",
    meta: "Duration · 2 months",
    ctaType: "pay",
    href: siteConfig.payments.basicToAdvance,
    ctaLabel: "Enroll now",
  },
  {
    icon: TrendingUp,
    title: "Option Selling & Hedging",
    description:
      "Learn proven option selling strategies and hedging techniques to manage risk and improve consistency.",
    meta: "Duration · 20 days",
    ctaType: "pay",
    href: siteConfig.payments.optionSelling,
    ctaLabel: "Enroll now",
  },
  {
    icon: Cpu,
    title: "Algo Trading as a Service",
    description:
      "Fully automated trading solutions built with advanced algorithms to help you trade smarter and faster.",
    meta: "One-time integration charge",
    ctaType: "contact",
    ctaLabel: "Contact us",
  },
  {
    icon: Users,
    title: "Trading Desk",
    description:
      "Get real-time market insights, trade alongside experienced traders and grow together as a strong community.",
    meta: "Community access · office space",
    ctaType: "contact",
    ctaLabel: "Contact us",
  },
];
