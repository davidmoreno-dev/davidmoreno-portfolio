"use client";

import { useLanguage } from "./LanguageProvider";
import Counter from "./Counter";
import { profileStats } from "@/utility/profile";

const content = {
  es: {
    subtitle: "Sobre Mi",
    title:
      "Frontend developer con experiencia construyendo webs e interfaces digitales para clientes y negocios reales. Me enfoco en conectar la parte visual con una implementación sólida en código, cuidando el detalle, la accesibilidad, el rendimiento y la mantenibilidad.",
  },
  ca: {
    subtitle: "Sobre mi",
    title:
      "Frontend developer amb experiència construint webs i interfícies digitals per a clients i negocis reals. Em centro a connectar la part visual amb una implementació sòlida en codi, cuidant el detall, l'accessibilitat, el rendiment i la mantenibilitat.",
  },
  en: {
    subtitle: "About Me",
    title:
      "Frontend developer with experience building websites and digital interfaces for real clients and businesses. I focus on connecting the visual side with solid code implementation, with care for detail, accessibility, performance and maintainability.",
  },
  sv: {
    subtitle: "Om mig",
    title:
      "Frontendutvecklare med erfarenhet av att bygga webbplatser och digitala gränssnitt för riktiga kunder och verksamheter. Jag fokuserar på att koppla ihop den visuella delen med en stabil implementation i kod, med känsla för detaljer, tillgänglighet, prestanda och hållbarhet.",
  },
};

const About = ({ bgColor = "bg-light" }) => {
  const { language } = useLanguage();
  const copy = content[language];
  const stats = profileStats[language];

  return (
    <section className="no-top px-4">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-xl-6">
            <div
              className="relative jarallax auto-height rounded-1 overflow-hidden wow fadeInUp"
              data-wow-delay=".6s"
            >
              <img
                src="/images/misc/4.webp"
                className="jarallax-img"
                alt="Dave"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="relative rounded-1 overflow-hidden p-lg-5 p-4 wow bg-color h-100 fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="align-middle">
                <div className="subtitle">{copy.subtitle}</div>
                <h2>{copy.title}</h2>
              </div>
            </div>
          </div>
          {stats.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className={`de_count ${bgColor} py-4 rounded-1 text-center fs-15 wow fadeInRight`}
                data-wow-delay={item.delay}
              >
                <h3 className="fs-48 mb-1">
                  <span
                    className="timer"
                    data-to={item.count}
                    data-speed={3000}
                  >
                    <Counter end={item.count} />
                  </span>
                </h3>
                <div className="fs-15">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
