"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [overHero, setOverHero] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateNav = () => {
      const hero = document.getElementById("pocetna");
      if (!hero) {
        setOverHero(window.scrollY < 80);
        return;
      }
      setOverHero(hero.getBoundingClientRect().bottom > 72);
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    return () => {
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, []);

  const onHero = overHero && !isOpen;

  return (
    <header
      className={`nav-slide-down fixed top-0 z-50 w-full transition-all duration-300 ${
        onHero
          ? "bg-transparent"
          : "bg-white/95 shadow-md backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#pocetna" className="flex items-center gap-2">
          <Image
            src="/Stari_Logo_PPMelis1.png"
            alt='P.P. "Melis" logo'
            width={140}
            height={70}
            priority
            className={`h-12 w-auto transition-all duration-300 md:h-14 ${
              onHero ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  onHero
                    ? "text-white hover:text-melis-cyan"
                    : "text-melis-dark hover:text-melis-cyan"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 transition-transform ${
              onHero ? "bg-white" : "bg-melis-navy"
            } ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity ${
              onHero ? "bg-white" : "bg-melis-navy"
            } ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform ${
              onHero ? "bg-white" : "bg-melis-navy"
            } ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {isOpen && (
        <div className="animate-[fade-in_0.3s_ease-out_both] border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base font-medium text-melis-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
