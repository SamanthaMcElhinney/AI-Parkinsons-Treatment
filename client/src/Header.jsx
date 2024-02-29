import React from "react";
import speaking from "./assets/speaking.png";
import "./Header.css";

function Header({ selectedExercise, setSelectedExercise }) {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a
            href="/"
            className="header-logo"
            onClick={() => setSelectedExercise("")}
          >
            Parkinson's
          </a>
          <img src={speaking} className="head" alt="speaking icon" />
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation"></section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          Daily Exercises:
          <select
            onChange={(e) => setSelectedExercise(e.target.value)}
            value={selectedExercise}
            className="dropdown"
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="vocal">Vocal Exercises</option>
            <option value="functional">Functional Phrases</option>
            <option value="reading">Reading Paragraphs</option>
          </select>
        </section>
        <section className="header-bottom__email">
          https://www.parkinson.org/
        </section>
      </section>
    </section>
  );
}

export default Header;
