import { assetPath } from "@/lib/asset";
import { Cta } from "./Cta";
import { Footer } from "./Footer";

export function Closing() {
  return (
    <section className="relative">
      <div className="sticky top-0 z-0 h-svh overflow-hidden bg-navy-deep">
        <img
          src={assetPath("/images/cta.jpg")}
          alt="Golden-hour aerial of California farmland"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-scrim/70" />
      </div>

      <div className="relative z-10 -mt-[100svh] flex flex-col gap-3 px-3 pb-3">
        <div className="flex min-h-svh flex-col justify-end">
          <Cta />
        </div>
        <Footer />
      </div>
    </section>
  );
}
