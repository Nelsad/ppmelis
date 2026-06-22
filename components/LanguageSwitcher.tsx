"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import FlagIcon from "@/components/FlagIcon";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

type LanguageSwitcherProps = {
  onHero: boolean;
};

type MenuPosition = {
  top: number;
  right: number;
  width: number;
};

export default function LanguageSwitcher({ onHero }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateMenuPosition = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 8,
      right: window.innerWidth - rect.right,
      width: Math.max(rect.width, 56),
    });
  };

  useEffect(() => {
    if (!open) return;

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-language-menu]")
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const selectLocale = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  const menu = open && menuPosition && (
    <ul
      data-language-menu
      role="listbox"
      aria-label="Select language"
      style={{
        top: menuPosition.top,
        right: menuPosition.right,
        minWidth: menuPosition.width,
      }}
      className={`fixed z-[100] rounded-md border py-1 shadow-lg ${
        onHero
          ? "border-white/20 bg-melis-navy backdrop-blur-sm"
          : "border-gray-100 bg-white"
      }`}
    >
      {locales.map((code) => (
        <li key={code} role="presentation">
          <button
            type="button"
            role="option"
            aria-selected={locale === code}
            aria-label={localeNames[code]}
            onClick={() => selectLocale(code)}
            className={`flex w-full items-center justify-center px-3 py-2 transition-colors ${
              locale === code
                ? onHero
                  ? "bg-melis-cyan/20"
                  : "bg-melis-cyan/10"
                : onHero
                  ? "hover:bg-white/10"
                  : "hover:bg-gray-50"
            }`}
          >
            <FlagIcon
              locale={code}
              className="h-5 w-7 shrink-0 rounded-sm object-cover shadow-sm"
            />
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
          if (!open) {
            requestAnimationFrame(updateMenuPosition);
          }
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Language: ${localeNames[locale]}`}
        className={`flex items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors ${
          onHero
            ? "border-white/25 bg-white/10 hover:bg-white/20"
            : "border-gray-200 bg-white hover:border-melis-cyan/40 hover:bg-gray-50"
        }`}
      >
        <FlagIcon
          locale={locale}
          className="h-4 w-6 shrink-0 rounded-sm object-cover shadow-sm"
        />
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform ${
            onHero ? "text-white" : "text-melis-navy"
          } ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {mounted && menu ? createPortal(menu, document.body) : null}
    </div>
  );
}
