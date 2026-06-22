"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getContent,
  isLocale,
  type Locale,
  type SiteContent,
} from "@/lib/i18n";

const STORAGE_KEY = "ppmelis-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isLocale(stored)) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
    document.title = getContent(locale).meta.title;
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const content = useMemo(() => getContent(locale), [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
