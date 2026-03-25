"use client";

import About from "@/components/About";
import Breadcrumb from "@/components/Breadcrumb";
import { useLanguage } from "@/components/LanguageProvider";
import Works from "@/components/Works";
import Header from "@/layouts/Header";
import DaveLayout from "@/layouts/DaveLayout";
import { menus } from "@/utility/data";

const content = {
  es: {
    breadcrumbTitle: "David Moreno",
    heroTitle: "Frontend Developer",
    heroDescription:
      "Desarrollo interfaces web rápidas, accesibles y mantenibles. Actualmente busco una oportunidad en empresa donde aportar experiencia real en frontend, sin dejar de lado proyectos freelance bien alineados.",
  },
  ca: {
    breadcrumbTitle: "David Moreno",
    heroTitle: "Frontend Developer",
    heroDescription:
      "Desenvolupo interfícies web ràpides, accessibles i mantenibles. Actualment busco una oportunitat en empresa on aportar experiència real en frontend, sense deixar de banda projectes freelance ben alineats.",
  },
  en: {
    breadcrumbTitle: "David Moreno",
    heroTitle: "Frontend Developer",
    heroDescription:
      "I build fast, accessible and maintainable web interfaces. I'm currently looking for an in-house opportunity where I can bring real frontend experience, while still being open to well-aligned freelance projects.",
  },
  sv: {
    breadcrumbTitle: "David Moreno",
    heroTitle: "Frontend Developer",
    heroDescription:
      "Jag bygger snabba, tillgängliga och hållbara webbgränssnitt. Just nu söker jag en roll i ett företag där jag kan bidra med verklig frontend-erfarenhet, samtidigt som jag är öppen för väl valda frilansprojekt.",
  },
};

const page = () => {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <DaveLayout bodyClass="home-7" footerShape={true}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Header
                  menus={menus.main}
                  activePage={1}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb title={copy.breadcrumbTitle} style={2} />
        <About bgColor="bg-light" />
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="spacer-double d-lg-none d-sm-block" />
            <div className="row justify-content-center g-4 gx-5">
              <div className="col-lg-6 text-center">
                <div className="relative">
                  <h1 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                    {copy.heroTitle}
                  </h1>
                </div>
                <p className="lead wow fadeInUp" data-wow-delay=".5s">
                  {copy.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
        <Works />
      </div>
    </DaveLayout>
  );
};

export default page;
