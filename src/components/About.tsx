import { pillars } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative z-10 bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-14 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <p className="reveal font-sans text-[15px] font-medium text-muted">
              About the Firm
            </p>
            <h2 className="reveal mt-4 font-serif text-[clamp(2.4rem,4.6vw,4.14rem)] font-semibold leading-[1] tracking-[-0.01em] text-ink">
              The firm was established to represent large-scale agricultural
              holdings.
            </h2>
            <p className="reveal mt-6 inline-flex items-center gap-2 rounded-full border border-navy/15 px-3 py-1.5 font-sans text-[12px] text-muted">
              <span className="size-1.5 rounded-full bg-copper" />
              Proposed copy · drafted for client review
            </p>
          </div>

          <div className="reveal-stagger max-w-[720px] space-y-6 font-sans text-[20px] leading-[1.45] text-navy md:text-[24.5px] md:leading-[1.45]">
            <p>
              We advise the institutions, family offices, operators, and
              families who hold farmland as a lasting asset, and we guide each
              engagement with discretion from the first conversation through
              closing.
            </p>
            <p className="text-[17px] leading-[1.55] text-ink/85 md:text-[18px]">
              We represent buyers and sellers of agricultural real estate
              throughout the western United States. Our work covers orchards,
              vineyards, row crop ground, rangeland, and the water,
              improvements, and operating assets that go with them.
            </p>
          </div>
        </div>

        <ol className="reveal-stagger mt-20 grid gap-8 border-t border-navy/10 pt-12 md:grid-cols-3 md:gap-10">
          {pillars.map((item) => (
            <li key={item.n}>
              <p className="font-serif text-[18px] text-copper">{item.n}</p>
              <h3 className="mt-3 font-serif text-[28px] font-semibold leading-tight tracking-[-0.01em] text-ink md:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[400px] font-sans text-[16px] leading-[1.55] text-ink/80">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
