import { assetPath } from "@/lib/asset";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="relative z-10 bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-14 md:py-28">
        <div className="reveal-stagger flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-[820px] font-serif text-[clamp(2.4rem,4.6vw,4.14rem)] font-semibold leading-[1] tracking-[-0.01em] text-ink">
            Your personal broker team, dedicated to your success.
          </h2>
          <p className="max-w-[420px] font-sans text-[16px] leading-[1.5] text-muted">
            Specialist roles support a single relationship you&apos;re never
            handed between disconnected staff.
          </p>
        </div>

        <div className="reveal-stagger mt-12 grid gap-3 md:grid-cols-12">
          <figure className="overflow-hidden rounded-[20px] md:col-span-8">
            <img
              src={assetPath("/images/foothill-aerial.jpg")}
              alt="Orchard and vineyard rows below the California foothills"
              className="image-zoom-in h-[320px] w-full object-cover object-[center_42%] md:h-[min(70vh,560px)]"
            />
          </figure>
          <figure className="overflow-hidden rounded-[20px] md:col-span-4">
            <img
              src={assetPath("/images/citrus-close.jpg")}
              alt="Close view of citrus fruit on the branch"
              className="image-zoom-in h-[320px] w-full object-cover md:h-[min(70vh,560px)]"
            />
          </figure>
        </div>

        <ul className="reveal-stagger mt-10 grid border-t border-navy/10 md:grid-cols-3">
          {team.map((person) => (
            <li
              key={person.name}
              className="border-navy/10 px-0 py-8 md:border-r md:px-8 md:py-10 last:md:border-r-0 first:md:pl-0 last:md:pr-0"
            >
              <h3 className="font-serif text-[28px] font-semibold tracking-[-0.02em] text-ink">
                {person.name}
              </h3>
              <p className="mt-2 font-sans text-[14px] text-muted">
                {person.role}
              </p>
              <p className="mt-3 font-sans text-[15px] leading-snug text-ink/80">
                {person.focus}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-navy"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
