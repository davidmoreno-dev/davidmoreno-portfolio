"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getPathForRoute } from "@/utility/routes";

const content = {
  es: {
    rights: "Todos los derechos reservados.",
    cta: "¿Hablamos?",
  },
  ca: {
    rights: "Tots els drets reservats.",
    cta: "Parlem?",
  },
  en: {
    rights: "All rights reserved.",
    cta: "Let's talk",
  },
  sv: {
    rights: "Alla rättigheter förbehållna.",
    cta: "Låt oss prata",
  },
};

const Footer = ({ footerShape = false }) => {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <footer>
      {footerShape &&
        /*
        <img
          src="images/misc/scratches-3.webp"
          className="w-20 me-5 abs bottom-0 abs-center"
          alt=""
        />
        */
        null}
      <div className="container-fluid">
        <div className="px-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="d-menu-1 wow" data-wow-delay=".3s">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/davidmorenojacobsson/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
                <p className="no-bottom">
                  © 2026 David Moreno — {copy.rights}
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a href={getPathForRoute("contact", language)}>
                <h2
                  className="footer-cta fs-84 fw-800 pe-3 shuffle wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  {copy.cta}
                </h2>
              </a>
              <div className="footer-social-mobile">
                <a
                  href="https://www.linkedin.com/in/davidmorenojacobsson/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a
                  href="mailto:info@davidmoreno.dev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-paper-plane" />
                </a>
                <a
                  href="https://wa.me/34690380888"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
