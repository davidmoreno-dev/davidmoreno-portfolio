"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";

const services = {
  es: [
    {
      title: "Desarrollo Frontend",
      description:
        "Desarrollo interfaces responsive, cuidadas y mantenibles, prestando atención a semántica, accesibilidad y rendimiento.",
    },
    {
      title: "WordPress a medida",
      description:
        "Desarrollo themes, plugins, bloques y soluciones personalizadas para proyectos que necesitan flexibilidad, orden y una base sólida.",
    },
    {
      title: "E-commerce (WooCommerce / Shopify)",
      description:
        "Trabajo en tiendas online enfocadas en conversión y usabilidad, optimizando catálogo, ficha, checkout y experiencia de compra.",
    },
    {
      title: "JavaScript y componentes UI",
      description:
        "Construyo interacciones y componentes reutilizables que ayudan a escalar el frontend con consistencia y orden.",
    },
    {
      title: "Gutenberg + ACF",
      description:
        "Creo bloques reutilizables y sistemas editables para que equipos de contenido trabajen con autonomía y control.",
    },
    {
      title: "Optimización y rendimiento",
      description:
        "Optimizo carga, recursos y buenas prácticas para mejorar experiencia de usuario y Core Web Vitals.",
    },
    {
      title: "Mantenimiento evolutivo",
      description:
        "Mantengo proyectos en marcha corrigiendo bugs, refinando interfaces y mejorando estabilidad con criterio técnico.",
    },
    {
      title: "Colaboración y comunicación",
      description:
        "Me coordino con diseño, negocio y clientes para transformar necesidades en soluciones web claras y ejecutables.",
    },
  ],
  ca: [
    {
      title: "Desenvolupament Frontend",
      description:
        "Desenvolupo interfícies responsive, cuidades i mantenibles, posant atenció en la semàntica, l'accessibilitat i el rendiment.",
    },
    {
      title: "WordPress a mida",
      description:
        "Desenvolupo themes, plugins, blocs i solucions personalitzades per a projectes que necessiten flexibilitat, ordre i una base sòlida.",
    },
    {
      title: "E-commerce (WooCommerce / Shopify)",
      description:
        "Treballo en botigues online enfocades en conversió i usabilitat, optimitzant catàleg, fitxa, checkout i experiència de compra.",
    },
    {
      title: "JavaScript i components UI",
      description:
        "Construeixo interaccions i components reutilitzables que ajuden a escalar el frontend amb consistència i ordre.",
    },
    {
      title: "Gutenberg + ACF",
      description:
        "Crec blocs reutilitzables i sistemes editables perquè els equips de contingut treballin amb autonomia i control.",
    },
    {
      title: "Optimització i rendiment",
      description:
        "Optimitzo càrrega, recursos i bones pràctiques per millorar experiència d'usuari i Core Web Vitals.",
    },
    {
      title: "Manteniment evolutiu",
      description:
        "Mantinc projectes en marxa corregint bugs, refinant interfícies i millorant estabilitat amb criteri tècnic.",
    },
    {
      title: "Col·laboració i comunicació",
      description:
        "Em coordino amb disseny, negoci i clients per transformar necessitats en solucions web clares i executables.",
    },
  ],
  en: [
    {
      title: "Frontend Development",
      description:
        "I build responsive, polished and maintainable interfaces, with attention to semantics, accessibility and performance.",
    },
    {
      title: "Custom WordPress",
      description:
        "I build themes, plugins, blocks and tailored solutions for projects that need flexibility, structure and a solid technical base.",
    },
    {
      title: "E-commerce (WooCommerce / Shopify)",
      description:
        "I work on online stores focused on conversion and usability, improving catalog, product pages, checkout and shopping experience.",
    },
    {
      title: "JavaScript and UI Components",
      description:
        "I build interactions and reusable components that help frontend projects scale with consistency and clarity.",
    },
    {
      title: "Gutenberg + ACF",
      description:
        "I create reusable blocks and editable systems so content teams can work with autonomy and control.",
    },
    {
      title: "Optimization and Performance",
      description:
        "I optimize loading, resources and best practices to improve user experience and Core Web Vitals.",
    },
    {
      title: "Continuous Maintenance",
      description:
        "I support ongoing projects by fixing bugs, refining interfaces and improving stability with technical judgment.",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I coordinate with design, business and clients to turn needs into clear and executable web solutions.",
    },
  ],
  sv: [
    {
      title: "Frontendutveckling",
      description:
        "Jag utvecklar responsiva, genomarbetade och hållbara gränssnitt med fokus på semantik, tillgänglighet och prestanda.",
    },
    {
      title: "Skräddarsydd WordPress",
      description:
        "Jag utvecklar teman, plugins, block och anpassade lösningar för projekt som behöver flexibilitet, struktur och en stabil teknisk grund.",
    },
    {
      title: "E-handel (WooCommerce / Shopify)",
      description:
        "Jag arbetar med nätbutiker med fokus på konvertering och användbarhet, och förbättrar katalog, produktsidor, checkout och köpupplevelse.",
    },
    {
      title: "JavaScript och UI-komponenter",
      description:
        "Jag bygger interaktioner och återanvändbara komponenter som hjälper frontendprojekt att växa med tydlighet och konsekvens.",
    },
    {
      title: "Gutenberg + ACF",
      description:
        "Jag skapar återanvändbara block och redigerbara system så att innehållsteam kan arbeta med självständighet och kontroll.",
    },
    {
      title: "Optimering och prestanda",
      description:
        "Jag optimerar laddning, resurser och goda arbetssätt för att förbättra användarupplevelse och Core Web Vitals.",
    },
    {
      title: "Löpande underhåll",
      description:
        "Jag underhåller pågående projekt genom att lösa buggar, förfina gränssnitt och förbättra stabiliteten med tekniskt omdöme.",
    },
    {
      title: "Samarbete och kommunikation",
      description:
        "Jag samordnar med design, verksamhet och kunder för att omvandla behov till tydliga och genomförbara webblösningar.",
    },
  ],
};

const titles = {
  es: "Servicios",
  ca: "Serveis",
  en: "Services",
  sv: "Tjänster",
};

const ServiceCard = ({ title, description }) => (
  <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
    <div className="relative p-lg-5 p-4 bg-color text-dark rounded-1 h-100">
      <div className="row">
        <div className="col-lg-6">
          <h4 className="fs-32 lh-1-2">{title}</h4>
        </div>
        <div className="col-lg-6">
          <p className="fs-20">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const page = () => {
  const { language } = useLanguage();

  return (
    <DaveLayout bodyClass="home-7" darkMode={false}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Header
                  menus={menus.main}
                  activePage={3}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title={titles[language]} style={2} />

        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row g-4">
                  {services[language].map((service, index) => (
                    <ServiceCard key={index} {...service} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DaveLayout>
  );
};

export default page;
