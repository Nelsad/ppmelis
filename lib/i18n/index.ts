import { bs } from "./translations/bs";
import { en } from "./translations/en";
import { sq } from "./translations/sq";
import type { Locale, SiteContent } from "./types";

export type { Locale, Project, Service, SiteContent } from "./types";

export const locales: Locale[] = ["en", "sq", "bs"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  sq: "Shqip",
  bs: "Bosanski",
};

const dictionaries: Record<Locale, SiteContent> = { en, bs, sq };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getNavLinks(content: SiteContent) {
  return [
    { href: "#pocetna", label: content.nav.home },
    { href: "#usluge", label: content.nav.services },
    { href: "#o-nama", label: content.nav.about },
    { href: "#projekti", label: content.nav.projects },
    { href: "#u-toku", label: content.nav.ongoing },
    { href: "#kontakt", label: content.nav.contact },
  ];
}
