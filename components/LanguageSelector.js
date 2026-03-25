"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LANGUAGE_LABELS, useLanguage } from "./LanguageProvider";
import useClickOutside from "@/utility/useClickOutside";
import { translatePath } from "@/utility/routes";

const LANGUAGE_NAMES = {
  es: "Español",
  ca: "Català",
  en: "English",
  sv: "Svenska",
};

const LanguageSelector = () => {
  const { language, setLanguage, supportedLanguages } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(true);
  const dropdownRef = useClickOutside(() => setIsOpen(false));

  useEffect(() => {
    const updateVisibility = () => {
      if (window.innerWidth > 991) {
        setIsMobileVisible(true);
        return;
      }

      setIsMobileVisible(window.scrollY <= window.innerHeight * 0.9);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isMobileVisible) {
      setIsOpen(false);
    }
  }, [isMobileVisible]);

  return (
    <div
      ref={dropdownRef}
      className={`language-switcher ${
        isMobileVisible ? "" : "language-switcher--mobile-hidden"
      }`}
      style={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <button
        type="button"
        className="language-switcher__button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Seleccionar idioma"
      >
        <span className="language-switcher__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14 14 0 0 1 0 18" />
            <path d="M12 3a14 14 0 0 0 0 18" />
          </svg>
        </span>
        <span className="language-switcher__label">{LANGUAGE_LABELS[language]}</span>
        <span
          className={`language-switcher__chevron ${isOpen ? "is-open" : ""}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="language-switcher__menu" role="menu">
          {supportedLanguages.map((item) => (
            <button
              key={item}
              type="button"
              role="menuitemradio"
              aria-checked={language === item}
              onClick={() => {
                setLanguage(item);
                router.push(translatePath(pathname, item));
                setIsOpen(false);
              }}
              className={`language-switcher__option ${
                language === item ? "is-active" : ""
              }`}
            >
              <span className="language-switcher__option-code">
                {LANGUAGE_LABELS[item]}
              </span>
              <span>{LANGUAGE_NAMES[item]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
