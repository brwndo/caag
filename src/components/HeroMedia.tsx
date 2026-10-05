"use client";

import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset";

export function HeroMedia() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPlayVideo(!motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  return (
    <div className="hero-media-parallax absolute inset-x-0 -top-[16%] h-[140%] will-change-transform">
      <img
        src={assetPath("/images/hero.jpg")}
        alt="Aerial view of a canal running through California farmland"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {playVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src={assetPath("/videos/caag-hero-sequences.mp4")}
            type="video/mp4"
          />
        </video>
      ) : null}
    </div>
  );
}
