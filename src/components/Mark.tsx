export function Mark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      <circle cx="32" cy="32" r="6" fill="currentColor" />
      <circle cx="49" cy="19" r="4" fill="currentColor" />
    </svg>
  );
}
