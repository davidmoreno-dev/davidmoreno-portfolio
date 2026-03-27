"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";

const content = {
  es: {
    pageTitle: "Proyecto",
    category: "Integración y UX",
    detailsTitle: "Detalles del proyecto",
    overviewTitle: "Overview",
    overview:
      "Proyecto orientado a mejorar la experiencia digital de una marca con alto peso visual, afinando presentación, jerarquía de contenido y puntos de interacción.",
    objectivesTitle: "Objetivos",
    objectives: [
      "Mejorar claridad visual y navegación",
      "Refinar maquetación responsive",
      "Optimizar experiencia de usuario",
      "Reducir fricción en recorridos clave",
    ],
    meta: [
      { title: "Categoría", content: "Website / Frontend" },
      { title: "Rol", content: "Maquetación y frontend" },
      { title: "Cliente", content: "Caso demo" },
      { title: "Año", content: "2024" },
    ],
    quoteTitle: "Resultado",
    quote:
      "El proyecto permitió mejorar la percepción visual del sitio y reforzar la experiencia de navegación desde desktop y mobile.",
    author: "Trabajo de frontend orientado a detalle visual y usabilidad",
  },
  ca: {
    pageTitle: "Projecte",
    category: "Integració i UX",
    detailsTitle: "Detalls del projecte",
    overviewTitle: "Visió general",
    overview:
      "Projecte orientat a millorar l'experiència digital d'una marca amb un fort pes visual, afinant presentació, jerarquia de contingut i punts d'interacció.",
    objectivesTitle: "Objectius",
    objectives: [
      "Millorar claredat visual i navegació",
      "Refinar maquetació responsive",
      "Optimitzar experiència d'usuari",
      "Reduir fricció en recorreguts clau",
    ],
    meta: [
      { title: "Categoria", content: "Website / Frontend" },
      { title: "Rol", content: "Maquetació i frontend" },
      { title: "Client", content: "Cas demo" },
      { title: "Any", content: "2024" },
    ],
    quoteTitle: "Resultat",
    quote:
      "El projecte va permetre millorar la percepció visual del lloc i reforçar l'experiència de navegació des de desktop i mobile.",
    author: "Treball de frontend orientat al detall visual i la usabilitat",
  },
  en: {
    pageTitle: "Project",
    category: "Integration and UX",
    detailsTitle: "Project Details",
    overviewTitle: "Overview",
    overview:
      "A project focused on improving the digital experience of a visually driven brand by refining presentation, content hierarchy and interaction points.",
    objectivesTitle: "Objectives",
    objectives: [
      "Improve visual clarity and navigation",
      "Refine responsive layout",
      "Optimize user experience",
      "Reduce friction in key journeys",
    ],
    meta: [
      { title: "Category", content: "Website / Frontend" },
      { title: "Role", content: "Layout and frontend" },
      { title: "Client", content: "Demo case" },
      { title: "Year", content: "2024" },
    ],
    quoteTitle: "Outcome",
    quote:
      "The project helped improve the site's visual perception and strengthen the browsing experience across desktop and mobile.",
    author: "Frontend work focused on visual detail and usability",
  },
  sv: {
    pageTitle: "Projekt",
    category: "Integration och UX",
    detailsTitle: "Projektdetaljer",
    overviewTitle: "Översikt",
    overview:
      "Ett projekt med fokus på att förbättra den digitala upplevelsen för ett visuellt starkt varumärke genom att förfina presentation, innehållshierarki och interaktionspunkter.",
    objectivesTitle: "Mål",
    objectives: [
      "Förbättra visuell tydlighet och navigation",
      "Förfina responsiv layout",
      "Optimera användarupplevelsen",
      "Minska friktion i viktiga flöden",
    ],
    meta: [
      { title: "Kategori", content: "Webbplats / Frontend" },
      { title: "Roll", content: "Layout och frontend" },
      { title: "Kund", content: "Democase" },
      { title: "År", content: "2024" },
    ],
    quoteTitle: "Resultat",
    quote:
      "Projektet förbättrade webbplatsens visuella uttryck och stärkte användarupplevelsen på både desktop och mobil.",
    author: "Frontendarbete med fokus på visuell precision och användbarhet",
  },
};

const WorkImage = ({ src, category }) => {
  const imageSrc = "/images/work-single/" + src + ".webp";

  return (
    <div className="col-lg-6">
      <div className="hover rounded-1 relative overflow-hidden text-light">
        <a href={imageSrc} className="image-popup overflow-hidden d-block relative">
          <img
            src={imageSrc}
            className="img-fluid hover-scale-1-2"
            alt="Project visual"
          />
          <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
            <div className="d-tag-s2">{category}</div>
            <div className="fw-bold text-uppercase">Case Study</div>
          </div>
        </a>
      </div>
    </div>
  );
};

const ProjectDetail = ({ title, content }) => (
  <div className="col-lg-3 col-sm-2">
    <h6>{title}</h6>
    {content}
  </div>
);

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
        <Breadcrumb title={copy.pageTitle} style={2} />

        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
                <WorkImage src="1" category={copy.category} />
                <WorkImage src="2" category={copy.category} />
              </div>
            </div>
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  {copy.detailsTitle}
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row g-4 gx-5 wow fadeInUp" data-wow-delay=".5s">
                      <div className="col-sm-6">
                        <h4>{copy.overviewTitle}</h4>
                        <p className="no-bottom">{copy.overview}</p>
                      </div>
                      <div className="col-sm-6">
                        <h4>{copy.objectivesTitle}</h4>
                        <ul className="ul-style-2">
                          {copy.objectives.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="spacer-double" />
                    <div className="row g-4 gx-5 wow fadeInUp" data-wow-delay=".6s">
                      {copy.meta.map((item) => (
                        <ProjectDetail
                          key={item.title}
                          title={item.title}
                          content={item.content}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  {copy.quoteTitle}
                </div>
              </div>
              <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
                <h2 className="lh-1">{copy.quote}</h2>
                <p>{copy.author}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DaveLayout>
  );
};

export default page;
