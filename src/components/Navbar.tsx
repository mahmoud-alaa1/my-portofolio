"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const t = useTranslations("navbar");
  const scrollY = useRef(0);
  useEffect(() => {
    scrollY.current = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const nav = document.querySelector("nav")!;
      if (scrollY.current <= currentScrollPos) {
        nav.classList.add("-translate-y-50");
      } else {
        nav.classList.remove("-translate-y-50");
      }
      scrollY.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="text-white backdrop-blur-lg border border-neutral-800 shadow-sm  bg-neutral-900 fixed top-7 left-1/2 -translate-x-1/2 rounded-xl  duration-300">
      <ul className="flex gap-5 p-4  items-center">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link className="text-sm" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
