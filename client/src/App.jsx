import React, { useState } from "react";
import Countdown from "./CountDown";
import FunctionalPhrases from "./FunctionalPhrases";
import Story from "./Story";
import Header from "./Header";
import styles from "./styles.module.css";
import "./Header.css";
import intro from './assets/intro.png'
import Landing from "./Landing"

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState("");

  let exerciseComponent;
  switch (selectedExercise) {
    case "vocal":
      exerciseComponent = <Countdown />;
      break;
    case "functional":
      exerciseComponent = <FunctionalPhrases />;
      break;
    case "reading":
      exerciseComponent = <Story />;
      break;
    default:
      exerciseComponent = null;
  }

  return (
    <div>
      <Header
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
      />
      {selectedExercise ? (
        <main className={styles.main}>{exerciseComponent}</main>
      ) : (
        <Landing />
      )}
    </div>
  );
}
