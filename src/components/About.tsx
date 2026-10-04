import { assetPath } from "@/lib/asset";
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

        <div className="reveal-stagger mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
          <figure className="overflow-hidden rounded-[20px] sm:col-span-2 lg:col-span-5 lg:row-span-2">
            <img
              src={assetPath("/images/orchard-bloom.jpg")}
              alt="Almond trees in bloom, seen from the orchard row"
              className="image-zoom-in h-[340px] w-full object-cover sm:h-full sm:min-h-[480px]"
            />
          </figure>
          <figure className="overflow-hidden rounded-[20px] lg:col-span-4">
            <img
              src={assetPath("/images/citrus-branch.jpg")}
              alt="Oranges clustered on the branch"
              className="image-zoom-in h-[240px] w-full object-cover object-[center_55%] lg:h-[248px]"
            />
          </figure>
          <figure className="overflow-hidden rounded-[20px] lg:col-span-3">
            <img
              src={assetPath("/images/vineyard-ground.jpg")}
              alt="Vineyard rows at ground level, with foothills beyond"
              className="image-zoom-in h-[240px] w-full object-cover object-[center_62%] lg:h-[248px]"
            />
          </figure>
          <figure className="overflow-hidden rounded-[20px] sm:col-span-2 lg:col-span-7">
            <img
              src={assetPath("/images/orchard-rows.jpg")}
              alt="Low aerial looking down a bearing orchard row"
              className="image-zoom-in h-[260px] w-full object-cover lg:h-[280px]"
            />
          </figure>
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
