import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

/**
 * Brand lockup: a gold mark (growth arrow) in a rounded tile next to the
 * wordmark. This is a clean placeholder for the official "gold bull" logo — drop
 * the real artwork into /public and swap the mark here when it is available.
 */
export function Logo({
  tone = "light",
  withWordmark = true,
  className,
  size = 40,
}: {
  tone?: "light" | "dark";
  withWordmark?: boolean;
  className?: string;
  size?: number;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.brand} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className="flex items-center justify-center rounded-xl bg-gradient-to-br from-gold-light to-gold text-navy shadow-sm ring-1 ring-black/5"
        style={{ width: size, height: size }}
      >
        <TrendingUp size={size - 16} strokeWidth={2.6} />
      </span>
      {withWordmark && (
        <span className="leading-none">
          <span
            className={cn(
              "block text-lg font-extrabold tracking-tight",
              tone === "dark" ? "text-white" : "text-navy"
            )}
          >
            BILLIONIT
          </span>
          <span
            className={cn(
              "block text-[0.62rem] font-semibold uppercase tracking-[0.32em]",
              tone === "dark" ? "text-gold-light" : "text-gold-ink"
            )}
          >
            Wealth
          </span>
        </span>
      )}
    </Link>
  );
}
