"use client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { LucideArrowUpRight } from "lucide-react";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0, scale: 0.8 }}
      animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="w-full px-4"
    >
      <div className="justify-self-center mx-auto md:justify-self-end">
        <Image
          src="/hero-dash.png"
          className="rounded-md "
          width={900}
          height={500}
          alt="Dashboard Preview"
          priority
        />
      </div>
    </motion.div>
  );
};

const logos = [
  "/logos/canvalogo.svg",
  "/logos/awslogo.svg",
  "/logos/notionlogo.svg",
  "/logos/shopifylogo.svg",
];
const menuItems = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-20 p-4 font-sans shadow-xs shadow-pink-200 w-full border-b bg-white flex items-center justify-between px-10">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .underline-scroll::after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0px;
                height: 1px;
                background-color: var(--foreground);
                transition: width 0.3s ease;
                margin-top: 1px;
              }

              .underline-scroll:hover::after {
                width: 100%;
              }
            `,
          }}
        ></style>
        <a href="/">
          <img className="h-5" src={"/logos/logoipsum.png"} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4 text-sm items-center">
            {menuItems.map((item, index) => (
              <li className="relative" key={index}>
                <Link
                  href={item.href}
                  className="underline-scroll text-black/80 hover:text-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex flex-col gap-4 border-t pt-4 dark:border-zinc-800 md:ml-2 md:mt-0 md:flex-row md:items-center md:border-t-0 md:border-l md:pt-0 md:dark:border-zinc-800">
          <div className="transform-none opacity-100 blur-none">
            <Link
              href="#"
              className="text-xs rounded-md border-b-[1.5px] border-orange-700 bg-linear-to-b from-orange-400 to-orange-500 px-3 py-2 text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-transform duration-500 ease active:border-b hover:shadow-orange-300"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black/80 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-white h-full w-full shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img className="h-5" src={"/logos/logoipsum.png"} />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-black/80 hover:text-black transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col h-full justify-center items-center space-y-8 px-6">
              <ul className="flex flex-col gap-6 text-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-2xl text-black/80 hover:text-black underline-scroll"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Create Account Button */}
              <div className="pt-8 border-t w-full">
                <Link
                  href="#"
                  className="block text-center w-full text-sm rounded-md border-b-[1.5px] border-orange-700 bg-linear-to-b from-orange-400 to-orange-500 px-5 py-3 text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-transform duration-500 ease active:border-b hover:shadow-orange-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ChangelogBadge = () => {
  return (
    <div className="mx-auto transform-none opacity-100 blur-none">
      <button className="mx-auto w-full cursor-pointer" type="button">
        <div className="group relative flex items-center gap-2 rounded-full bg-pink-100 p-2 font-medium text-gray-900 shadow-lg shadow-blue-400/20 ring-1 ring-black/10 backdrop-blur-[1px] transition-colors hover:bg-blue-500/2.5 focus:outline-hidden sm:text-sm">
          <span className="size-2 animate-pulse rounded-full border bg-orange-700"></span>
          <span className="inline-flex items-center text-xs">
            View Our Changelog
            <LucideArrowUpRight
              className="ml-1 transition-transform group-hover:rotate-45"
              size={12}
            />
          </span>
        </div>
      </button>
    </div>
  );
};
export const HeroText = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter text-white text-center px-4">
        Transform your data into <br />
        <span className="font-serif font-light italic">powerful</span> insights
      </h1>
      <p className="max-w-lg text-sm md:text-base text-white text-center px-4">
        Make data-driven decisions with our advanced analytics platform. Get
        real-time insights, beautiful visualizations, and actionable
        intelligence that grows with your business.
      </p>
    </>
  );
};

const HeroActions = () => {
  return (
    <div className="mx-auto flex w-full place-content-center gap-4 tracking-tight">
      <div className="transform-none opacity-100 blur-none">
        <Link
          href="#"
          className="text-sm rounded-md border-b-[1.5px] border-orange-700 bg-linear-to-b from-orange-400 to-orange-500 px-5 py-3 text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-transform duration-500 ease active:border-b hover:shadow-orange-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

const TrustedLogos = () => {
  return (
    <div className="absolute bottom-0 z-10 flex w-full flex-col items-center justify-center gap-5 bg-black p-4">
      <p className="font-mono text-sm tracking-tight text-white text-center">
        Trusted by the best teams in the world
      </p>
      <InfiniteSlider speed={30} className="max-w-sm">
        {logos.map((logo, i) => (
          <img
            key={`logo-${1 + i}`}
            src={logo}
            alt="Partner logo"
            className="h-7 w-auto"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default function HeroPage() {
  return (
    <>
      <main className="flex min-h-max max-w-400 mx-auto w-full flex-col items-center justify-start bg-[url('/hero-clouds.webp')] bg-black bg-cover bg-no-repeat font-sans">
        <Nav />
        <section className="relative flex min-h-max w-full flex-col items-center justify-center gap-2 pt-10 text-center px-4">
          <div className="absolute inset-0 h-full backdrop-blur-xs" />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 space-y-8 text-center">
            <motion.div
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="flex flex-col items-center space-y-8"
            >
              <ChangelogBadge />
              <HeroText />
              <HeroActions />
            </motion.div>
            <HeroImage />
          </div>
          <TrustedLogos />
        </section>
      </main>
    </>
  );
}
