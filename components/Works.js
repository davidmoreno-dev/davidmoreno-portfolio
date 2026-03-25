"use client";

import { useLanguage } from "./LanguageProvider";

const featuredWorks = {
  es: [
    {
      title: "Proyectos destacados",
      description:
        "Selección de proyectos con foco en frontend, optimización y experiencia de usuario.",
      isHeader: true,
    },
    {
      title: "Affinitas",
      category: "Desarrollo web a medida",
      image: "images/works/1.webp",
      year: "2026",
      url: "https://techs39.sg-host.com/",
    },
    {
      title: "Fit Today Balmes Gym",
      category: "Desarrollo web a medida",
      image: "images/works/2.webp",
      year: "2026",
      url: "https://fittodaybalmes.com/",
    },
    {
      title: "BCN DH",
      category: "Desarrollo web a medida",
      image: "images/works/1.webp",
      year: "2024",
      url: "https://bcndh.org/",
    },
    {
      title: "Urbanisme Metropolita",
      category: "Desarrollo web a medida",
      image: "images/works/4.webp",
      year: "2026",
      url: "https://urbanismemetropolita.upc.edu/",
    },
    {
      title: "Padel Pineda Beach",
      category: "Desarrollo web a medida",
      image: "images/works/5.webp",
      year: "2025",
      url: "https://padelpinedabeach.com/",
    },
  ],
  ca: [
    {
      title: "Projectes destacats",
      description:
        "Selecció de projectes amb focus en frontend, optimització i experiència d'usuari.",
      isHeader: true,
    },
    {
      title: "Affinitas",
      category: "Desenvolupament web a mida",
      image: "images/works/1.webp",
      year: "2026",
      url: "https://techs39.sg-host.com/",
    },
    {
      title: "Fit Today Balmes Gym",
      category: "Desenvolupament web a mida",
      image: "images/works/2.webp",
      year: "2026",
      url: "https://fittodaybalmes.com/",
    },
    {
      title: "BCN DH",
      category: "Desenvolupament web a mida",
      image: "images/works/1.webp",
      year: "2024",
      url: "https://bcndh.org/",
    },
    {
      title: "Urbanisme Metropolita",
      category: "Desenvolupament web a mida",
      image: "images/works/4.webp",
      year: "2026",
      url: "https://urbanismemetropolita.upc.edu/",
    },
    {
      title: "Padel Pineda Beach",
      category: "Desenvolupament web a mida",
      image: "images/works/5.webp",
      year: "2025",
      url: "https://padelpinedabeach.com/",
    },
  ],
  en: [
    {
      title: "Featured Projects",
      description:
        "A selection of projects focused on frontend, optimization and user experience improvements.",
      isHeader: true,
    },
    {
      title: "Affinitas",
      category: "Custom Website Development",
      image: "images/works/1.webp",
      year: "2026",
      url: "https://techs39.sg-host.com/",
    },
    {
      title: "Fit Today Balmes Gym",
      category: "Custom Website Development",
      image: "images/works/2.webp",
      year: "2026",
      url: "https://fittodaybalmes.com/",
    },
    {
      title: "BCN DH",
      category: "Custom Website Development",
      image: "images/works/1.webp",
      year: "2024",
      url: "https://bcndh.org/",
    },
    {
      title: "Urbanisme Metropolita",
      category: "Custom Website Development",
      image: "images/works/4.webp",
      year: "2026",
      url: "https://urbanismemetropolita.upc.edu/",
    },
    {
      title: "Padel Pineda Beach",
      category: "Custom Website Development",
      image: "images/works/5.webp",
      year: "2025",
      url: "https://padelpinedabeach.com/",
    },
  ],
  sv: [
    {
      title: "Utvalda projekt",
      description:
        "Ett urval projekt med fokus på frontend, optimering och förbättrad användarupplevelse.",
      isHeader: true,
    },
    {
      title: "Affinitas",
      category: "Skräddarsydd webbutveckling",
      image: "images/works/1.webp",
      year: "2026",
      url: "https://techs39.sg-host.com/",
    },
    {
      title: "Fit Today Balmes Gym",
      category: "Skräddarsydd webbutveckling",
      image: "images/works/2.webp",
      year: "2026",
      url: "https://fittodaybalmes.com/",
    },
    {
      title: "BCN DH",
      category: "Skräddarsydd webbutveckling",
      image: "images/works/1.webp",
      year: "2024",
      url: "https://bcndh.org/",
    },
    {
      title: "Urbanisme Metropolita",
      category: "Skräddarsydd webbutveckling",
      image: "images/works/4.webp",
      year: "2026",
      url: "https://urbanismemetropolita.upc.edu/",
    },
    {
      title: "Padel Pineda Beach",
      category: "Skräddarsydd webbutveckling",
      image: "images/works/5.webp",
      year: "2025",
      url: "https://padelpinedabeach.com/",
    },
  ],
};

const Works = () => {
  const { language } = useLanguage();
  const items = featuredWorks[language];

  return (
    <section className="no-top px-4">
      <div className="container-fluid">
        <div className="row g-4 wow fadeInRight" data-wow-delay=".5s">
          {items.map((work, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              {work.isHeader ? (
                <div className="p-lg-5 p-4 bg-color h-100 rounded-1">
                  <div className="subtitle">{work.title}</div>
                  <h2>{work.description}</h2>
                </div>
              ) : (
                (() => {
                  const cardContent = (
                    <div className="bg-dark-2 rounded-1 overflow-hidden">
                      <div className="hover relative overflow-hidden text-light">
                        <div className="overflow-hidden d-block relative">
                          <img
                            src={work.image}
                            className="img-fluid hover-scale-1-2"
                            alt={work.title}
                          />
                        </div>
                        <div className="project-card__meta p-4">
                          <h3 className="project-card__title mb-0 lh-1-2">
                            {work.title}
                          </h3>
                          <div className="project-card__footer d-flex justify-content-between align-items-center">
                            <span className="fs-14">{work.category}</span>
                            <div className="project-card__year fw-bold">
                              {work.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );

                  return work.url ? (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noreferrer"
                      className="d-block"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  );
                })()
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
