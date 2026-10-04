import { About } from "@/components/About";
import { AssetTypes } from "@/components/AssetTypes";
import { Clientele } from "@/components/Clientele";
import { Closing } from "@/components/Closing";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { MotionRoot } from "@/components/MotionRoot";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <MotionRoot />
      <Header />
      <main>
        <div>
          <Hero />
          <div className="relative z-10">
            <LogoMarquee />
            <About />
          </div>
        </div>
        <AssetTypes />
        <Clientele />
        <Team />
        <Closing />
      </main>
    </>
  );
}
