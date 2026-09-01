import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

/**
 * Brand lockup: the gold bull emblem next to the wordmark.
 *
 * `/logo-mark.jpeg` is the gold bull emblem cropped from the official artwork
 * (the full logo with wordmark is at /logo.jpeg). It sits in a near-black rounded
 * tile so the emblem's black background blends seamlessly, paired with a crisp
 * text wordmark that stays legible at any size.
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
        className="shrink-0 overflow-hidden rounded-xl bg-navy-deep ring-1 ring-gold/25"
        style={{
          width: size,
          height: size,
          backgroundImage: "url(/logo-mark.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-hidden="true"
      />
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
