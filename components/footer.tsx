import { Logo } from "@/components/logo";
import Link from "next/link";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32 border-t">
      <div className="mx-auto max-w-5xl z-1 px-6">
        <Link
          href="/"
          aria-label="go home"
          className="mx-auto z-10 block size-fit"
        >
          <Logo />
        </Link>

        <div className="my-8 z-1 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground z-10 hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        <span className="text-muted-foreground z-10 block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Analytics, All rights reserved
        </span>
      </div>
    </footer>
  );
}
