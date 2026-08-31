import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { termsDoc } from "@/content/legal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${siteConfig.brand}.`,
  alternates: { canonical: "/legal/terms" },
};

export default function Page() {
  return <LegalLayout doc={termsDoc} />;
}
