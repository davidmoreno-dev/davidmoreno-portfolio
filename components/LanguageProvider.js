"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getLanguageFromPath } from "@/utility/routes";

const LanguageContext = createContext(null);

const SUPPORTED_LANGUAGES = ["es", "ca", "en", "sv"];

export const LANGUAGE_LABELS = {
  es: "ES",
  ca: "CA",
  en: "EN",
  sv: "SV",
};

export const LanguageProvider = ({ children }) => {
  const pathname = usePathname();
  const [language, setLanguage] = useState(() => getLanguageFromPath(pathname) ?? "es");

  useEffect(() => {
    const routeLanguage = getLanguageFromPath(pathname);

    if (routeLanguage) {
      setLanguage(routeLanguage);
      return;
    }

    const savedLanguage = window.localStorage.getItem("portfolio-language");

    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, [pathname]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      supportedLanguages: SUPPORTED_LANGUAGES,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};
