import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { MovingBorder, MovingLabel } from "./moving-border";
import Image from "next/image";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import type { Variants } from "framer-motion";

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
      <div className="z-10 mx-auto max-w-7xl gap-12 px-4 py-28 text-gray-600 md:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-center leading-0 lg:leading-5">
          <MovingLabel
            borderRadius="1.75rem"
            duration={5500}
            className="  text-white border border-zinc-800 bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_202.08%)] bg-clip-text p-4  inline-flex items-center gap-2.5 cursor-pointer"
            containerClassName="w-[245px]"
          >
            Get 80+ headshots in minutes
          </MovingLabel>

          <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-6xl">
            Professional business headshots,{" "}
            <span className="bg-linear-to-r from-purple-300 to-orange-200 bg-clip-text text-transparent">
              without a physical photo shoot
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-gray-300">
            Get professional business headshots in minutes with our AI headshot
            generator. Upload photos, pick your styles & receive 80+ headshots.
            All we need is one selfie.
          </p>
          <div className="space-y-4 mt-20">
            <p className="text-white text-4xl font-caveat">Upload a selfie </p>
            <div className="mt-8 w-full max-w-md mx-auto">
              {/* image here */}
            </div>
            <Button
              variant={"default"}
              className="text-black border p-4 cursor-pointer hover:bg-neutral-200 active:bg-neutral-400 bg-white"
            >
              Create Headshot
            </Button>
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
              <div className="mask-b-from-55% mask-b-from-blue-200 dark relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div className="inset-shadow-2xs ring-black inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative rounded-2xl block"
                    src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
