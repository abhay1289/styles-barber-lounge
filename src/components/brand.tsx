export const BOOK_URL = "https://book.squareup.com/";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M32 4c6.2 8.4 11.4 10.8 20 10.2-2.8 8.6.2 15.4 6 21.8-8.6 2.2-13.2 7.8-14.8 16.8-6.4-5.4-13.2-6.8-22.4-4.2 3.6-7.8 1.6-14.6-3.6-22C25 24.8 28.4 17.8 32 4Z"
        opacity="0.95"
      />
      <circle cx="32" cy="30" r="9" fill="var(--void)" />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        fill="currentColor"
        fontSize="12"
        fontFamily="var(--font-display), sans-serif"
        fontWeight="700"
      >
        S
      </text>
    </svg>
  );
}

export function BrandLockup({
  className = "",
  markClassName = "h-8 w-8",
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-snow ${className}`}>
      <LogoMark className={markClassName} />
      <span className="font-display text-lg tracking-[0.18em]">STYLES</span>
    </span>
  );
}
