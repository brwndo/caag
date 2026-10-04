import { clients } from "@/lib/content";

export function LogoMarquee() {
  const row = [...clients, ...clients];

  return (
    <section
      aria-label="Clients we have served"
      className="relative z-10 border-y border-navy/10 bg-cream py-10"
    >
        <div className="reveal mx-auto flex max-w-[1440px] flex-col gap-6 px-4 md:flex-row md:items-center md:px-14">
        <p className="shrink-0 font-sans text-[13px] font-medium text-muted md:w-[220px]">
          Clients we have served
        </p>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="marquee-track flex w-max gap-14 pr-14">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 font-serif text-[22px] font-semibold tracking-[-0.02em] text-ink/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
