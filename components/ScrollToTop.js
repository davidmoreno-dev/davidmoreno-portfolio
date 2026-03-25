"use client";
import { daveUtility } from "@/utility";
import { Fragment, useEffect } from "react";

const ScrollToTop = ({ darkMode = true }) => {
  useEffect(() => {
    daveUtility.backToTop();
  }, []);

  return (
    <Fragment>
      <div
        className={`float-text show-on-scroll adaptive-contrast ${
          darkMode ? "dark" : ""
        }`}
      >
        <span>
          <a href="#">Volver arriba</a>
        </span>
      </div>
      <div
        className={`scrollbar-v show-on-scroll ${darkMode ? "dark" : ""}`}
      />
    </Fragment>
  );
};

export default ScrollToTop;
