import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 disabled:opacity-60 disabled:pointer-events-none";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy shadow-[0_8px_24px_rgba(224,168,30,0.35)] hover:bg-gold-light hover:shadow-glow",
  secondary:
    "bg-white text-navy border border-outline hover:border-gold/40 hover:text-gold-ink shadow-glass",
  ghost: "text-navy hover:text-gold-ink",
  onDark:
    "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...rest
}: CommonProps & {
  href?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
