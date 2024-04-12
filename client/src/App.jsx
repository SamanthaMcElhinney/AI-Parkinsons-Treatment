import React, { useState } from "react";
import Countdown from "./Components/Countdown/CountDown"
import FunctionalPhrases from "./Components/FunctionalPhrases/FunctionalPhrases";
import Story from "./Components/Story/Story";
import Header from "./Components/Header/Header"
import styles from "./styles.module.css";
import intro from './assets/intro.png'
import Landing from "./Components/Landing/Landing"

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
