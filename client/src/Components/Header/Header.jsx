import { Link, useNavigate } from "react-router-dom";
import React from "react";
import speaking from "../../assets/speaking.png";
import "./Header.css";

function Header({ selectedExercise, setSelectedExercise }) {
  const navigate = useNavigate();

  const handleExerciseChange = (exerciseType) => {
    setSelectedExercise(exerciseType);
    navigate(`/${exerciseType}`);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={() => setSelectedExercise("")}>
        AmpliVox PD
        <img src={speaking} alt="speaking icon" />
      </Link>
      <nav className="header-choices">
        <Link
          to="/vocal"
          onClick={() => handleExerciseChange("vocal")}
          className="exercise-link"
        >
          Vocal Exercises
        </Link>
        <Link
          to="/functional"
          onClick={() => handleExerciseChange("functional")}
          className="exercise-link"
        >
          Functional Phrases
        </Link>
        <Link
          to="/reading"
          onClick={() => handleExerciseChange("reading")}
          className="exercise-link"
        >
          Reading Paragraphs
        </Link>
        <a
          href="https://www.parkinson.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="exercise-link"
        >
          Learn More
        </a>
      </nav>
    </header>
  );
}

export default Header;
