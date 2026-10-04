import { assetPath } from "@/lib/asset";

export function Hero() {
  return (
    <section
      id="top"
      className="sticky top-0 z-0 flex min-h-svh flex-col bg-navy-deep pt-[76px]"
    >
      <div className="relative mx-3 mb-3 flex min-h-[calc(100svh-88px)] flex-1 overflow-hidden rounded-[24px] bg-navy-deep">
        <div className="hero-media-parallax absolute inset-x-0 -top-[16%] h-[140%] will-change-transform">
          <img
            src={assetPath("/images/hero.jpg")}
            alt="Aerial view of a canal running through California farmland"
            className="hero-media h-full w-full object-cover"
          />
        </div>
        <div className="hero-scrim pointer-events-none absolute inset-0 bg-linear-to-b from-scrim/55 via-scrim/28 to-scrim/72" />

        <div className="relative z-10 flex w-full max-w-[1100px] flex-col justify-center px-6 py-16 md:px-11 md:py-24">
          <p className="reveal font-sans text-[12.5px] font-medium uppercase tracking-[0.09em] text-white">
            Agricultural Real Estate Brokerage
          </p>
          <h1 className="reveal mt-4 max-w-[680px] font-serif text-[clamp(2.75rem,6vw,4.68rem)] font-semibold leading-[0.98] tracking-[-0.015em] text-white">
            Representing growers, family farms, and land investors.
          </h1>
          <p className="reveal mt-6 max-w-[590px] font-sans text-[17px] leading-[1.6] text-white/90">
            The firm represents the growers, families, and investors who own
            California&apos;s orchards, vineyards, ranches, and dairies. Every
            listing is backed by in-house spatial analysis, with parcel, water,
            soil, and crop data drawn directly from source.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-[45px] items-center rounded-full bg-white px-6 font-sans text-[12.8px] font-medium uppercase tracking-[0.08em] text-navy"
            >
              Request a Consultation
            </a>
            <a
              href="#assets"
              className="inline-flex h-[47px] items-center rounded-full border border-white/50 px-6 font-sans text-[12.8px] font-medium uppercase tracking-[0.08em] text-white"
            >
              Explore Properties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
