import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { OiPurchaseForm } from "@/components/OiPurchaseForm";

export const metadata: Metadata = {
  title: "Get the OI Pulse Dashboard",
  description:
    "Purchase the OI Pulse Dashboard — a local, real-time Open Interest analytics tool for NIFTY & SENSEX that runs on your own PC with your own broker credentials.",
  alternates: { canonical: "/oi" },
};

export default function OiPurchasePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="OI Intelligence"
        title="Get the OI Pulse Dashboard"
        subtitle="A local, real-time Open Interest analytics dashboard for NIFTY & SENSEX. It runs on your own Windows PC using your own broker account — your credentials never leave your computer. Complete the steps below and we'll send your license key and set it up for you."
      />
      <OiPurchaseForm />
    </Section>
  );
}
