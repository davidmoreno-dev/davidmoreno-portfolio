"use client";
import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/components/LanguageProvider";
import { getPathForRoute } from "@/utility/routes";

const defaultMenus = [
  { id: 1, href: "/", key: "home" },
  { id: 2, href: "/sobre-mi", key: "about" },
  { id: 3, href: "/servicios", key: "services" },
  { id: 4, href: "/proyectos", key: "projects" },
  { id: 6, href: "/contacto", key: "contact" },
];

const navLabels = {
  es: {
    home: "Inicio",
    about: "Sobre Mí",
    services: "Servicios",
    projects: "Proyectos",
    blog: "Blog",
    contact: "Contacto",
  },
  ca: {
    home: "Inici",
    about: "Sobre mi",
    services: "Serveis",
    projects: "Projectes",
    blog: "Blog",
    contact: "Contacte",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
  },
  sv: {
    home: "Hem",
    about: "Om mig",
    services: "Tjänster",
    projects: "Projekt",
    blog: "Blogg",
    contact: "Kontakt",
  },
};

const Header = ({
  activePage,
  menus = defaultMenus,
  extraClass = "",
}) => {
  const { language } = useLanguage();

  return (
    <div
      className={`d-menu-1 wow position-relative ${extraClass}`}
      data-wow-delay=".3s"
    >
      <ul>
        {menus.map((item, index) => (
          <li
            key={index}
            className={`${activePage == item.id ? "active" : ""} menu-item-${
              item.id
            }`}
          >
            <Link href={getPathForRoute(item.key, language)}>
              {navLabels[language][item.key]}
            </Link>
          </li>
        ))}
      </ul>
      <LanguageSelector />
    </div>
  );
};

export default Header;
