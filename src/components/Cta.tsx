import { firm } from "@/lib/content";

export function Cta() {
  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-[1440px] flex-col px-6 pt-6 pb-16 md:px-14 md:pt-8 md:pb-20"
    >
      <div className="max-w-[720px]">
        <h2 className="reveal font-serif text-[clamp(2.6rem,5vw,4.14rem)] font-semibold leading-[1] tracking-[-0.01em] text-white">
          Looking for an experienced partner?
        </h2>
        <p className="reveal mt-6 max-w-[560px] font-sans text-[17px] leading-[1.6] text-white/85">
          Whether you are considering a sale, an acquisition, or simply want a
          clearer picture of what you own, every conversation is confidential
          and comes directly to us.
        </p>
        <div className="reveal mt-8 flex flex-wrap items-center gap-5">
          <a
            href={firm.phoneHref}
            className="inline-flex h-[48px] items-center rounded-full bg-white px-6 font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-navy"
          >
            Request a Consultation
          </a>
          <div>
            <a
              href={firm.phoneHref}
              className="font-serif text-[26px] font-semibold text-white"
            >
              {firm.phone}
            </a>
            <p className="font-sans text-[14px] text-white/70">
              Every inquiry is handled personally and in confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
