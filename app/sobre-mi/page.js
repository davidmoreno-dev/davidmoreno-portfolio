"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";
import {
  featuredTools,
  profileStats,
  technicalSkills,
} from "@/utility/profile";

const pageContent = {
  es: {
    title: "Sobre Mí",
    intro:
      "Conecto la parte visual con la implementación en código para convertir ideas en interfaces claras, rápidas y bien ejecutadas. Mi siguiente paso es seguir creciendo dentro de un equipo donde aportar criterio frontend, cuidado por el detalle y visión de producto.",
    whoTitle: "Quién soy",
    paragraph1:
      "Hola, soy David. Llevo más de 8 años trabajando en proyectos web para clientes, agencias y negocios digitales. Esa experiencia me ha dado autonomía, visión práctica y la capacidad de llevar una idea visual a una implementación sólida, alineada con necesidades reales de negocio.",
    paragraph2:
      "Mi base está en HTML, CSS y JavaScript, con experiencia sólida en WordPress a medida, WooCommerce, PHP, Gutenberg/ACF y proyectos de e-commerce. Ahora quiero orientar mi siguiente etapa profesional hacia un rol de frontend developer en empresa, manteniendo abierta la puerta a colaboraciones freelance seleccionadas.",
    stackTitle: "Tecnologías principales",
    experienceTitle: "Experiencia",
    experiences: [
      {
        year: "2023 – Actualidad",
        title: "Desarrollador web freelance",
        company: "Freelance",
        delay: ".4s",
      },
      {
        year: "2022 - 2023",
        title: "Desarrollador web",
        company: "Factoria Creativa Barcelona",
        delay: ".5s",
      },
      {
        year: "2021 - 2022",
        title: "Desarrollador web",
        company: "Mikksa Network",
        delay: ".6s",
      },
    ],
    skillsTitle: "Otras tecnologías y plataformas",
    educationTitle: "Formación",
  },
  ca: {
    title: "Sobre mi",
    intro:
      "Connecto la part visual amb la implementació en codi per convertir idees en interfícies clares, ràpides i ben executades. El meu següent pas és continuar creixent dins d'un equip on aportar criteri frontend, cura pel detall i visió de producte.",
    whoTitle: "Qui soc",
    paragraph1:
      "Hola, soc David. Porto més de 8 anys treballant en projectes web per a clients, agències i negocis digitals. Aquesta experiència m'ha donat autonomia, visió pràctica i la capacitat de portar una idea visual cap a una implementació sòlida, alineada amb necessitats reals de negoci.",
    paragraph2:
      "La meva base és HTML, CSS i JavaScript, amb experiència sòlida en WordPress a mida, WooCommerce, PHP, Gutenberg/ACF i projectes d'e-commerce. Ara vull orientar la meva següent etapa professional cap a un rol de frontend developer en empresa, mantenint oberta la porta a col·laboracions freelance seleccionades.",
    stackTitle: "Tecnologies principals",
    experienceTitle: "Experiència",
    experiences: [
      {
        year: "2023 – Actualitat",
        title: "Desenvolupador web freelance",
        company: "Freelance",
        delay: ".4s",
      },
      {
        year: "2022 - 2023",
        title: "Desenvolupador web",
        company: "Factoria Creativa Barcelona",
        delay: ".5s",
      },
      {
        year: "2021 - 2022",
        title: "Desenvolupador web",
        company: "Mikksa Network",
        delay: ".6s",
      },
    ],
    skillsTitle: "Altres tecnologies i plataformes",
    educationTitle: "Formació",
  },
  en: {
    title: "About",
    intro:
      "I connect the visual side with code implementation to turn ideas into clear, fast and well-executed interfaces. My next step is to keep growing within a team where I can bring frontend judgment, attention to detail and product thinking.",
    whoTitle: "Who I am",
    paragraph1:
      "Hi, I'm David. I've spent more than 8 years working on web projects for clients, agencies and digital businesses. That experience has given me autonomy, practical judgment and the ability to take a visual idea into solid implementation aligned with real business needs.",
    paragraph2:
      "My foundation is HTML, CSS and JavaScript, with solid experience in custom WordPress, WooCommerce, PHP, Gutenberg/ACF and e-commerce projects. I now want to focus my next professional step on an in-house frontend developer role, while staying open to selected freelance collaborations.",
    stackTitle: "Core technologies",
    experienceTitle: "Experience",
    experiences: [
      {
        year: "2023 – Present",
        title: "Freelance Web Developer",
        company: "Freelance",
        delay: ".4s",
      },
      {
        year: "2022 - 2023",
        title: "Web Developer",
        company: "Factoria Creativa Barcelona",
        delay: ".5s",
      },
      {
        year: "2021 - 2022",
        title: "Web Developer",
        company: "Mikksa Network",
        delay: ".6s",
      },
    ],
    skillsTitle: "Other technologies and platforms",
    educationTitle: "Education",
  },
  sv: {
    title: "Om mig",
    intro:
      "Jag kopplar ihop den visuella delen med implementation i kod för att förvandla idéer till tydliga, snabba och väl genomförda gränssnitt. Nästa steg för mig är att fortsätta växa i ett team där jag kan bidra med frontend-omdöme, känsla för detaljer och produktperspektiv.",
    whoTitle: "Vem jag är",
    paragraph1:
      "Hej, jag är David. Jag har arbetat i mer än 8 år med webbprojekt för kunder, byråer och digitala verksamheter. Den erfarenheten har gett mig självständighet, praktiskt omdöme och förmågan att ta en visuell idé till en stabil implementation anpassad till verkliga affärsbehov.",
    paragraph2:
      "Min grund är HTML, CSS och JavaScript, med stark erfarenhet av skräddarsydd WordPress, WooCommerce, PHP, Gutenberg/ACF och e-handelsprojekt. Nu vill jag rikta nästa steg i karriären mot en frontendroll i ett företag, samtidigt som jag håller dörren öppen för utvalda frilansuppdrag.",
    stackTitle: "Viktigaste tekniker",
    experienceTitle: "Erfarenhet",
    experiences: [
      {
        year: "2023 – Nu",
        title: "Frilansande webbutvecklare",
        company: "Freelance",
        delay: ".4s",
      },
      {
        year: "2022 - 2023",
        title: "Webbutvecklare",
        company: "Factoria Creativa Barcelona",
        delay: ".5s",
      },
      {
        year: "2021 - 2022",
        title: "Webbutvecklare",
        company: "Mikksa Network",
        delay: ".6s",
      },
    ],
    skillsTitle: "Andra tekniker och plattformar",
    educationTitle: "Utbildning",
  },
};

const education = [
  {
    year: "2021",
    title: "Máster en Diseño Web Multidispositivo: UX/UI",
    school: "ESDESIGN Barcelona",
    delay: ".4s",
  },
  {
    year: "2019",
    title: "Técnico superior en Desarrollo de Aplicaciones Web",
    school: "IFP – Barcelona",
    delay: ".5s",
  },
  {
    year: "2017",
    title: "Técnico superior en Animación 3D, Videojuegos y Entornos Interactivos",
    school: "INS Mare de Déu de la Mercè – Barcelona",
    delay: ".6s",
  },
  {
    year: "2012",
    title: "Técnico en Sistemas Microinformáticos y Redes",
    school: "Escoles Freta – Calella",
    delay: ".6s",
  },
];

const page = () => {
  const { language } = useLanguage();
  const copy = pageContent[language];
  const stats = profileStats[language];

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
                  activePage={2}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title={copy.title} style={2} />

        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-xl-6">
                <div
                  className="relative jarallax auto-height rounded-1 overflow-hidden wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <img
                    src="images/misc/4.webp"
                    className="jarallax-img"
                    alt="David Moreno"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="relative rounded-1 overflow-hidden p-lg-5 p-4 pb-5 wow bg-color h-100 fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="align-middle">
                    <div className="subtitle">{copy.title}</div>
                    <h2 className="pb-4">{copy.intro}</h2>
                  </div>
                  <div className="about-intro-meta abs bottom-0 text-dark fs-20 pb-5">
                    <div className="about-intro-meta__item d-inline fw-600 me-5">
                      <i className="icofont-phone me-2" />
                      +34 690 380 888
                    </div>
                    <div className="about-intro-meta__item d-inline fw-600">
                      <i className="icofont-envelope me-2" />
                      info@davidmoreno.dev
                    </div>
                  </div>
                </div>
              </div>
              {stats.map((item, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-sm-30">
                  <div
                    className="de_count bg-light py-4 rounded-1 text-center fs-15 wow fadeInRight"
                    data-wow-delay={item.delay}
                  >
                    <h3 className="fs-48 mb-1">
                      <span
                        className="timer"
                        data-to={item.count}
                        data-speed={3000}
                      >
                        <Counter end={item.count} duration={3000} />
                      </span>
                    </h3>
                    <div className="fs-15">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4 justify-content-center">
              <div className="col-xl-8">
                <div className="relative fadeInUp" data-wow-delay=".6s">
                  <div className="text-center">
                    <h2>{copy.whoTitle}</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p>{copy.paragraph1}</p>
                    </div>
                    <div className="col-lg-6">
                      <p>{copy.paragraph2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-single" />
            <div className="row g-4 justify-content-center">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>{copy.stackTitle}</h2>
                </div>
              </div>
            </div>
            <div className="spacer-single" />
            <div className="row g-4">
              {featuredTools.map((tool, index) => (
                <div
                  key={index}
                  className="col-md-3 rounded-1 wow fadeInRight"
                  data-wow-delay={tool.delay}
                >
                  <div className="text-center">
                    {tool.image ? (
                      <img
                        src={`images/logo/${tool.image}`}
                        className="w-80px mb-3"
                        alt={tool.name}
                      />
                    ) : (
                      <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle bg-light text-dark fw-700 fs-24 lh-1" style={{ width: "80px", height: "80px" }}>
                        {tool.name}
                      </div>
                    )}
                    <h4>{tool.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg">
                <div className="relative rounded-1 overflow-hidden p-lg-5 p-4 wow bg-color h-100 fadeInUp">
                  <h3 className="fs-32">{copy.experienceTitle}</h3>
                </div>
              </div>
              {copy.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg text-center wow fadeInRight"
                  data-wow-delay={exp.delay}
                >
                  <div className="p-4 py-lg-5 py-4 bg-light h-100 rounded-1">
                    <h6>{exp.year}</h6>
                    <h3>{exp.title}</h3>
                    <p className="mb-0">{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>{copy.skillsTitle}</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4 gx-5">
                  {technicalSkills.map((item, index) => (
                    <div
                      key={index}
                      className="col-md-6 wow fadeInRight"
                      data-wow-delay={index < 3 ? ".4s" : ".5s"}
                    >
                      <div className="d-skills-bar">
                        <div className="d-bar">
                          <div className="d-skill" data-value={item.value}>
                            <div className="d-info">
                              <span>{item.skill}</span>
                            </div>
                            <div className="d-progress-line">
                              <span className="d-fill-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg">
                <div className="relative rounded-1 overflow-hidden p-lg-5 p-4 wow bg-color h-100 fadeInUp">
                  <h3 className="fs-32">{copy.educationTitle}</h3>
                </div>
              </div>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg text-center wow fadeInRight"
                  data-wow-delay={edu.delay}
                >
                  <div className="p-4 py-lg-5 py-4 bg-light h-100 rounded-1">
                    <h6>{edu.year}</h6>
                    <h3>{edu.title}</h3>
                    <p className="mb-0">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DaveLayout>
  );
};

export default page;
