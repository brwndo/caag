"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionRoot() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        ".hero-media-parallax",
        { yPercent: 0 },
        {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero-stage",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );

      gsap.to(".hero-scrim", {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top 30%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".image-zoom-in").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => el.classList.add("is-inview"),
        });
      });

      const fade = {
        y: 22,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power2.out",
      };

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          ...fade,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((group) => {
        const children = group.querySelectorAll<HTMLElement>(":scope > *");
        if (!children.length) return;

        gsap.from(children, {
          ...fade,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });
    });

    return () => {
      media.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
