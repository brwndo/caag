"use client";

import { useState } from "react";
import { audiences } from "@/lib/content";

export function Clientele() {
  const [active, setActive] = useState(audiences[0].id);
  const current = audiences.find((a) => a.id === active) ?? audiences[0];

  return (
    <section id="clientele" className="relative z-10 bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-24 md:px-14 md:py-28">
        <div className="reveal-stagger max-w-[720px]">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-cream/60">
            Clientele
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.4rem,4.6vw,4.14rem)] font-semibold tracking-[-0.01em] text-cream">
            Who we serve.
          </h2>
          <p className="mt-5 font-sans text-[17px] leading-[1.55] text-cream/75">
            We represent multi-generational growers, family dairies,
            investor-owned operations, wine-grape and ranch families,
            1031-exchange buyers, and funds and private capital. Every client
            works directly with us, by relationship.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="reveal-stagger flex flex-col border-t border-white/10">
            {audiences.map((item) => {
              const isActive = item.id === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`border-b border-white/10 py-4 text-left font-serif text-[22px] leading-tight tracking-[-0.02em] transition-colors md:text-[26px] ${
                    isActive ? "text-cream" : "text-cream/40 hover:text-cream/70"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="reveal overflow-hidden rounded-[20px] bg-navy">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                key={current.id}
                src={current.image}
                alt=""
                className="tab-image-zoom h-full w-full object-cover transition-transform duration-[400ms] ease-out hover:scale-[1.04]"
              />
            </div>
            <div className="space-y-4 p-6 md:p-8">
              <h3 className="font-serif text-[28px] font-semibold text-cream">
                {current.label}
              </h3>
              <p className="font-sans text-[16px] leading-[1.55] text-cream/80">
                {current.lead}
              </p>
              {current.detail ? (
                <p className="font-sans text-[16px] leading-[1.55] text-cream/65">
                  {current.detail}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
