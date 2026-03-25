"use client";

import { useLanguage } from "./LanguageProvider";
import { Fragment } from "react";

const Breadcrumb = ({
  title = "Frontend<br>Developer",
  subtitle,
  style = 1,
}) => {
  const { language } = useLanguage();
  const defaultSubtitle = {
    es: "Available for Work",
    ca: "Available for Work",
    en: "Available for Work",
    sv: "Available for Work",
  };

  return (
    <section id="subheader">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h1
              className="fs-120 fs-xs-60 text-resize-h1 lh-0-75 mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <h4
              className={`id-color ${
                style === 2 ? "bg-dark d-inline rounded-20 p-1 px-3 fs-16" : ""
              }`}
            >
              {subtitle ?? defaultSubtitle[language]}
            </h4>
            <div className="spacer-single" />
          </div>
        </div>
      </div>
      {style === 2 && (
        <Fragment>
          <div className="breadcrumb-social sc-icons dark abs abs-middle end-0 me-4">
            <a href="https://www.linkedin.com/in/davidmorenojacobsson/" target="_blank">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="mailto:info@davidmoreno.dev" target="_blank">
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
          {/*
          <img
            src="images/misc/scratches-1.webp"
            className="w-20 ms-4 abs abs-middle"
            alt="image"
          />
          <img
            src="images/misc/scratches-2.webp"
            className="w-20 me-5 abs top-0 end-0"
            alt="image"
          />
          */}
        </Fragment>
      )}
    </section>
  );
};
export default Breadcrumb;
