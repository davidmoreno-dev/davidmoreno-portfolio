"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import ScrollToTop from "@/components/ScrollToTop";
import { daveUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";

const BODY_THEME_CLASSES = [
  "dark-scheme",
  "light-scheme",
  "home-3",
  "home-4",
  "home-5",
  "home-6",
  "home-7",
  "home-8",
];

const DaveLayout = ({
  children,
  bodyClass = "dark-scheme",
  rootElements = {
    "--primary-color": "#ffffff",
    "--primary-color-rgb": "255, 255, 255",
    "--secondary-color": "#ffffff",
    "--secondary-color-rgb": "255, 255, 255",
  },
  darkMode = true,
  footerShape = false,
  noFooter = false,
  noScroll = false,
}) => {
  useEffect(() => {
    daveUtility.scrollAnimation();
    daveUtility.shuffleText();
    daveUtility.jarallax();
    daveUtility.fitText();
    daveUtility.progressBar();
  }, []);

  useEffect(() => {
    const body = document.body;
    body.classList.remove(...BODY_THEME_CLASSES);

    bodyClass
      .split(/\s+/)
      .filter(Boolean)
      .forEach((className) => body.classList.add(className));
  }, [bodyClass]);

  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      <div id="wrapper" style={rootElements}>
        {!noScroll && <ScrollToTop darkMode={darkMode} />}
        {children}
        {!noFooter && <Footer footerShape={footerShape} />}
      </div>
    </Fragment>
  );
};

export default DaveLayout;
