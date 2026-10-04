import { firm } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="overflow-hidden rounded-[24px] bg-navy-deep/85 px-6 py-16 text-cream backdrop-blur-[2px] md:px-14">
        <div className="reveal-stagger grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Wordmark />
            <p className="mt-6 max-w-[280px] font-sans text-[15px] leading-[1.5] text-cream/70">
              An agricultural real estate brokerage representing growers,
              families, and investors in the sale and acquisition of farmland
              and the water that serves it.
            </p>
          </div>
          <div>
            <h2 className="font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-cream/45">
              Firm
            </h2>
            <ul className="mt-4 space-y-2 font-sans text-[15px] text-cream/85">
              <li>
                <a href="#about">About the firm</a>
              </li>
              <li>
                <a href="#clientele">Clientele</a>
              </li>
              <li>
                <a href="#assets">Properties</a>
              </li>
              <li>
                <a href="#team">The team</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-cream/45">
              Work
            </h2>
            <ul className="mt-4 space-y-2 font-sans text-[15px] text-cream/85">
              <li>
                <a href="#assets">Permanent crops</a>
              </li>
              <li>
                <a href="#assets">Vineyards</a>
              </li>
              <li>
                <a href="#assets">Row crops</a>
              </li>
              <li>
                <a href="#assets">Water</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-[12px] font-medium uppercase tracking-[0.1em] text-cream/45">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 font-sans text-[15px] text-cream/85">
              <li>
                <a href={firm.phoneHref}>{firm.phone}</a>
              </li>
              <li>
                <a href={`mailto:${firm.email}`}>{firm.email}</a>
              </li>
              <li>Fresno, California</li>
              <li>Mon–Fri, 8am – 5pm Pacific</li>
            </ul>
          </div>
        </div>

        <p className="reveal mt-16 border-t border-white/10 pt-6 font-sans text-[12px] leading-relaxed text-cream/45">
          © 2026 {firm.name}. All rights reserved. · {firm.dre}
        </p>
    </footer>
  );
}
