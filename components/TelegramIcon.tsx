/**
 * Telegram brand glyph. lucide-react has no Telegram icon, so this is a small
 * inline SVG that takes a `size` prop and inherits `currentColor`, matching how
 * the lucide icons are used elsewhere.
 */
export function TelegramIcon({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M21.94 4.6a1.2 1.2 0 0 0-1.24-.2L3.4 11.2c-.86.34-.83 1.6.05 1.9l4.3 1.42 1.62 5.02a.9.9 0 0 0 1.46.4l2.4-2.15 4.28 3.15c.6.44 1.46.12 1.62-.6l3.1-14.2a1.2 1.2 0 0 0-.35-1.14ZM9.9 14.14l8.02-5.04c.16-.1.33.12.19.25l-6.6 6.02a.9.9 0 0 0-.28.55l-.22 2.02-1.11-3.4a.4.4 0 0 1 .01-.4Z" />
    </svg>
  );
}
