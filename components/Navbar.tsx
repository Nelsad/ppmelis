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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const onHero = overHero && !isOpen;

  return (
    <header
      className={`nav-slide-down fixed top-0 z-50 w-full overflow-hidden transition-all duration-300 ${
        onHero
          ? "bg-transparent"
          : "bg-white/95 shadow-md backdrop-blur-sm"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <Link href="#pocetna" className="logo-hover min-w-0 shrink">
          <Image
            src="/Stari_Logo_PPMelis1.png"
            alt='P.P. "Melis" logo'
            width={140}
            height={70}
            priority
            className={`h-9 w-auto max-w-[120px] transition-all duration-300 sm:h-12 sm:max-w-none md:h-14 ${
              onHero ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link whitespace-nowrap text-sm font-medium transition-colors ${
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
          className="flex shrink-0 flex-col gap-1.5 p-2 lg:hidden"
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
        <div className="mobile-menu max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-gray-50 py-3.5 text-base font-medium text-melis-dark active:text-melis-cyan"
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
