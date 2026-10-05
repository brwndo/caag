import { assets } from "@/lib/content";

export function AssetTypes() {
  return (
    <section id="assets" className="relative z-10 bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-14 md:py-28">
        <div className="reveal text-center">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-muted">
            What we broker
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.4rem,4.6vw,4.14rem)] font-semibold tracking-[-0.01em] text-ink">
            Asset Types We Serve
          </h2>
        </div>

        <div className="reveal-stagger mt-12 grid gap-3 md:grid-cols-4">
          {assets.map((tile) => (
            <a
              key={tile.title}
              href="#contact"
              className={`group relative overflow-hidden rounded-[20px] ${tile.className}`}
            >
              <img
                src={tile.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-scrim/80 via-scrim/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-serif text-[26px] font-semibold leading-[0.95] tracking-[-0.015em] text-white">
                  {tile.title}
                </h3>
                <p className="mt-1 max-w-[380px] font-sans text-[15px] leading-snug text-white/85">
                  {tile.body}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
