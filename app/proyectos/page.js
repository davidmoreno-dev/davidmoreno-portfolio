"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";

const content = {
  es: {
    title: "Proyectos",
    introTitle: "Selección de proyectos",
    introDescription:
      "Una selección de proyectos donde he trabajado en frontend, rendimiento y mejoras de experiencia de usuario.",
    categories: {
      custom: "Desarrollo web a medida",
      wordpress: "Desarrollo de themes WordPress",
      shopify: "E-commerce en Shopify",
      prestashop: "E-commerce en PrestaShop",
    },
  },
  ca: {
    title: "Projectes",
    introTitle: "Selecció de projectes",
    introDescription:
      "Una selecció de projectes on he treballat en frontend, rendiment i millores d'experiència d'usuari.",
    categories: {
      custom: "Desenvolupament web a mida",
      wordpress: "Desenvolupament de themes WordPress",
      shopify: "E-commerce a Shopify",
      prestashop: "E-commerce a PrestaShop",
    },
  },
  en: {
    title: "Projects",
    introTitle: "Selected projects",
    introDescription:
      "A selection of projects where I worked on frontend, performance and user experience improvements.",
    categories: {
      custom: "Custom website development",
      wordpress: "WordPress theme development",
      shopify: "Shopify e-commerce",
      prestashop: "PrestaShop e-commerce",
    },
  },
  sv: {
    title: "Projekt",
    introTitle: "Utvalda projekt",
    introDescription:
      "Ett urval projekt där jag arbetat med frontend, prestanda och förbättrad användarupplevelse.",
    categories: {
      custom: "Skräddarsydd webbutveckling",
      wordpress: "WordPress-temautveckling",
      shopify: "Shopify e-handel",
      prestashop: "PrestaShop e-handel",
    },
  },
};

const works = [
  { image: "1", title: "Affinitas", category: "custom", year: "2026", url: "https://techs39.sg-host.com/" },
  { image: "2", title: "Fit Today Balmes Gym", category: "custom", year: "2026", url: "https://fittodaybalmes.com/" },
  { image: "3", title: "Colegio Ausiàs March", category: "wordpress", year: "2026", url: "https://ausiasmarch.com/" },
  { image: "4", title: "Urbanisme Metropolita", category: "custom", year: "2026", url: "https://urbanismemetropolita.upc.edu/" },
  { image: "5", title: "Padel Pineda Beach", category: "custom", year: "2025", url: "https://padelpinedabeach.com/" },
  { image: "1", title: "BCN DH", category: "custom", year: "2024", url: "https://bcndh.org/" },
  { image: "2", title: "Casa Tomàs", category: "custom", year: "2025", url: "https://casatomasrubio.com/" },
  { image: "3", title: "Edah Project", category: "custom", year: "2026", url: "https://edahproject.info/" },
  { image: "4", title: "Ignasi Comillas", category: "custom", year: "2026", url: "https://ignasiconillas.com/" },
  { image: "5", title: "Bague Prats", category: "custom", year: "2026", url: "https://bagueprats.cat/" },
  { image: "1", title: "ETPXavier", category: "custom", year: "2026", url: "https://www.etpxavier.com/" },
  { image: "2", title: "Autoescola Blanes", category: "custom", year: "2026", url: "https://autoescolablanes.com/" },
  { image: "3", title: "Muris Brand", category: "shopify", year: "2026", url: "" },
  { image: "4", title: "EV LINK", category: "custom", year: "2026", url: "https://evlink.ch/" },
  { image: "5", title: "Joyería Floral", category: "custom", year: "2026", url: "https://joyeriafloral.com/" },
  { image: "1", title: "Escola de Defensores", category: "custom", year: "2026", url: "https://www.actionpeace.org/escueladedefensoras/" },
  { image: "2", title: "comunitatsbcn", category: "custom", year: "2023", url: "https://comunitatsbcn.cat/" },
  { image: "3", title: "Nicandra", category: "custom", year: "2022", url: "https://nicandra.es/" },
  { image: "4", title: "Radio Taxi del Vallés", category: "custom", year: "2021", url: "https://www.radiotaxidelvalles.es/" },
  { image: "5", title: "Taxi vallés", category: "custom", year: "2021", url: "https://taxivalles.com/" },
  { image: "1", title: "tilesonline", category: "prestashop", year: "2021", url: "https://www.tilesonline.es/" },
  { image: "2", title: "Calzados Gómez", category: "prestashop", year: "2021", url: "https://calzadosgomez.net/" },
  { image: "3", title: "carmenspainexperience", category: "custom", year: "2020", url: "https://www.carmenspainexperience.com/" },
];

const WorkCard = ({ image, title, category, year, labels, url }) => {
  const imageSrc = "images/works/" + image + ".webp";
  const cardContent = (
    <div className="bg-dark-2 rounded-1 overflow-hidden">
      <div className="hover relative overflow-hidden text-light">
        <div className="overflow-hidden d-block relative">
          <img
            src={imageSrc}
            className="img-fluid hover-scale-1-2"
            alt={title}
          />
        </div>
        <div className="project-card__meta p-4">
          <h3 className="project-card__title mb-0 lh-1-2">{title}</h3>
          <div className="project-card__footer d-flex justify-content-between align-items-center">
            <span className="fs-14">{labels[category]}</span>
            <div className="project-card__year fw-bold">{year}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="col-xl-4 col-md-6">
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="d-block">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  );
};

const page = () => {
  const { language } = useLanguage();
  const copy = content[language];

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
                  activePage={4}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title={copy.title} style={2} />
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4 wow fadeInRight" data-wow-delay=".5s">
              <div className="col-xl-4">
                <div className="p-lg-5 p-4 bg-color h-100 rounded-1">
                  <div className="subtitle">{copy.introTitle}</div>
                  <h2>{copy.introDescription}</h2>
                </div>
              </div>
              {works.map((work, index) => (
                <WorkCard key={index} {...work} labels={copy.categories} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </DaveLayout>
  );
};

export default page;
