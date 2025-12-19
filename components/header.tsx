"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import MainButton from "./MainButton";

const menuItems = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : "inactive"}
        className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:border-zinc-800 dark:bg-zinc-950/50 lg:dark:bg-transparent"
      >
        <div className="m-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="flex w-full justify-between md:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo className="size-10" />
                <span className="text-xl font-bold">Analytics</span>
              </Link>
              <div
                className={`fixed inset-0 z-10 h-screen w-screen bg-black/10 backdrop-blur-2xl md:hidden ${
                  menuState ? "block" : "hidden"
                }`}
                onClick={() => setMenuState(false)}
              />
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 md:hidden"
              >
                <Menu
                  className={`m-auto size-6 transition-transform duration-300 ${
                    menuState ? "rotate-180 scale-0 opacity-0" : ""
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 transition-transform duration-300 ${
                    !menuState ? "-rotate-180 scale-0 opacity-0" : ""
                  }`}
                />
              </button>
            </div>
            <div
              className={`bg-background text-foreground absolute left-1/2 top-20 z-20 w-[calc(100%-3rem)] -translate-x-1/2 rounded-2xl border border-dashed shadow-2xl shadow-zinc-300/20 dark:border-zinc-800 dark:shadow-transparent md:relative md:left-0 md:top-0 md:w-fit md:translate-x-0 md:border-none md:bg-transparent md:shadow-none ${
                menuState ? "block" : "hidden md:block"
              }`}
            >
              <div
                className={`flex w-full flex-col gap-4 p-4 text-center md:w-fit md:flex-row md:items-center md:p-0`}
              >
                <ul className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:gap-8">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-col gap-4 border-t pt-4 dark:border-zinc-800 md:ml-2 md:mt-0 md:flex-row md:items-center md:border-t-0 md:border-l md:pt-0 md:dark:border-zinc-800">
                  <Link href="#" className="md:pl-4">
                    <MainButton className="w-full rounded-full">
                      Get Started
                    </MainButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
