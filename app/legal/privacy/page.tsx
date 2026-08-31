import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { privacyDoc } from "@/content/legal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.brand}.`,
  alternates: { canonical: "/legal/privacy" },
};

export default function Page() {
  return <LegalLayout doc={privacyDoc} />;
}
