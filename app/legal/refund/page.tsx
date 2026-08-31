import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { refundDoc } from "@/content/legal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund & Cancellation",
  description: `Refund & Cancellation for ${siteConfig.brand}.`,
  alternates: { canonical: "/legal/refund" },
};

export default function Page() {
  return <LegalLayout doc={refundDoc} />;
}
