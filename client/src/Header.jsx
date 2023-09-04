import React from "react";
import speaking from "./assets/speaking.png";

import "./Header.css";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">
            Parkinson
          </a>
          <img src={speaking} className="icon" alt="speaking icon" />
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation"></section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">Daily Exercises</section>
        <section className="header-bottom__email">
          https://www.parkinson.org/
        </section>
      </section>
    </section>
  );
}

export default Header;
