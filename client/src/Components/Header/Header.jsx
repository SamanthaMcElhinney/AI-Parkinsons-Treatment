import { Link, useNavigate } from "react-router-dom";
import React from "react";
import speaking from "../../assets/speaking.png";
import "./Header.css";

function Header({ selectedExercise, setSelectedExercise }) {
  const navigate = useNavigate();

  const handleExerciseChange = (e) => {
    setSelectedExercise(e.target.value);
    navigate(`/${e.target.value}`);
  };

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <Link
            to="/"
            className="header-logo"
            onClick={() => setSelectedExercise("")}
          >
            Parkinson's
          </Link>
          <img src={speaking} className="head" alt="speaking icon" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          <label htmlFor="exercise-dropdown">Daily Exercises:</label>
          <select
            id="exercise-dropdown"
            onChange={handleExerciseChange}
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
