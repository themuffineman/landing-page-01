import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { MovingBorder, MovingLabel } from "./moving-border";
import Image from "next/image";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import type { Variants } from "framer-motion";
import GradientButton from "./HeroButton";
import { LogoMarquee } from "./logo-marquee";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};
const Hero = () => {
  return (
    <section className="relative z-1 mx-auto max-w-full">
      <div className="z-10 mx-auto max-w-7xl gap-12 px-4 py-10 text-gray-600 md:px-16">
        <div className="mx-auto max-w-3xl space-y-10 text-center leading-0 lg:leading-5">
          <MovingLabel
            borderRadius="1.75rem"
            duration={5500}
            className="  text-white border border-zinc-800 bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_202.08%)] bg-clip-text p-4  inline-flex items-center gap-2.5 cursor-pointer"
            containerClassName="w-[245px]"
          >
            Unlock Your Data's Potential
          </MovingLabel>

          <h2 className="mx-auto bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-6xl">
            Gain Actionable Insights,{" "}
            <span className="bg-linear-to-r from-purple-300 to-orange-200 bg-clip-text text-transparent">
              and scale your business
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-gray-300">
            Our cutting-edge analytics platform empowers you to make data-driven
            decisions and unlock new opportunities. Track metrics, visualize
            trends, and gain a competitive edge.
          </p>
          <GradientButton>Get Started</GradientButton>
        </div>
        <div className="space-y-4 ">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="mask-b-from-85%  dark relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
              <div className="inset-shadow-2xs ring-black inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <img
                  className="bg-background object-cover relative rounded-2xl block"
                  src="/dashboard.svg"
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </AnimatedGroup>
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
};

export default Hero;
