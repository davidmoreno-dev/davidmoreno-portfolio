"use client";

import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";

const content = {
  es: {
    title: "Contacto",
    intro:
      "Actualmente estoy abierto a oportunidades como frontend developer en empresa y también a colaboraciones freelance seleccionadas. Si crees que puedo encajar en tu equipo o en tu proyecto, estaré encantado de hablar.",
  },
  ca: {
    title: "Contacte",
    intro:
      "Actualment estic obert a oportunitats com a frontend developer en empresa i també a col·laboracions freelance seleccionades. Si creus que puc encaixar al teu equip o al teu projecte, estaré encantat de parlar.",
  },
  en: {
    title: "Contact",
    intro:
      "I'm currently open to in-house frontend opportunities as well as selected freelance collaborations. If you think I could be a good fit for your team or project, I'd be happy to talk.",
  },
  sv: {
    title: "Kontakt",
    intro:
      "Just nu är jag öppen för frontendroller i företag och även för utvalda frilanssamarbeten. Om du tror att jag skulle passa i ditt team eller projekt pratar jag gärna vidare.",
  },
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
                  activePage={6}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title={copy.title} style={2} />
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4 gx-5">
              <div
                className="col-lg-8 offset-lg-2 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p>{copy.intro}</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </DaveLayout>
  );
};

export default page;
