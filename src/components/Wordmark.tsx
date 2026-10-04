export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`block leading-none ${className}`}>
      <span className="font-serif text-[28px] font-semibold tracking-[-0.02em] text-copper">
        Ca Ag
      </span>
      <span className="mt-0.5 block font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-cream">
        Properties
      </span>
    </span>
  );
}
