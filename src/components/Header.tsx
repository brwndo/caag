"use client";

import { useEffect, useState } from "react";
import { firm, nav } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (open) {
      setHidden(false);
      return;
    }

    let lastY = window.scrollY;
    let ticking = false;
    let hideTimer = 0;

    const cancelHide = () => {
      if (!hideTimer) return;
      window.clearTimeout(hideTimer);
      hideTimer = 0;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;

        if (y < 76) {
          cancelHide();
          setHidden(false);
        } else if (delta > 6) {
          if (!hideTimer) {
            hideTimer = window.setTimeout(() => {
              setHidden(true);
              hideTimer = 0;
            }, 220);
          }
        } else if (delta < -6) {
          cancelHide();
          setHidden(false);
        }

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelHide();
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-navy-deep transition-transform ease-out motion-reduce:transition-none ${
        hidden
          ? "pointer-events-none -translate-y-full duration-500"
          : "translate-y-0 duration-300"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-4 md:px-8">
        <a href="#top" className="shrink-0" aria-label={`${firm.name}, home`}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[12px] font-medium uppercase tracking-[0.09em] text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={firm.phoneHref}
            className="font-sans text-[13px] font-medium tracking-[0.03em] text-zinc-100"
          >
            {firm.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex h-[41px] items-center rounded-full bg-white px-5 font-sans text-[12.5px] font-medium uppercase tracking-[0.08em] text-navy"
          >
            Consultation
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy-deep px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[13px] font-medium uppercase tracking-[0.09em] text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-white font-sans text-[12.5px] font-medium uppercase tracking-[0.08em] text-navy"
              onClick={() => setOpen(false)}
            >
              Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
