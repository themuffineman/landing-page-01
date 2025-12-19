"use client";
import Link from "next/link";

const HeroActions = () => {
  return (
    <div className="flex w-full tracking-tight mx-auto place-content-center gap-4">
      <Link
        href="#"
        className="mt-3 cursor-pointer rounded-md border-b border-orange-700 bg-gradient-to-b from-orange-400 to-orange-500 px-5 py-3 whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-500 ease-in-out hover:border-b-2 hover:shadow-orange-300 hover:-translate-y-0.5 active:translate-y-0"
      >
        Start Free Trial
      </Link>
      <Link
        href="#"
        className="mt-3 cursor-pointer rounded-md border border-white/30 bg-white px-5 py-3 whitespace-nowrap text-black backdrop-blur-sm shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.05)] transition-all duration-500 ease-in-out hover:border-white/50 hover:shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5 active:translate-y-0"
      >
        Learn More
      </Link>
    </div>
  );
};

export default HeroActions;
