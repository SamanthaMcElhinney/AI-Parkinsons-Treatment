import React, { useState } from "react";
import Countdown from "./Components/Countdown/Countdown";
import FunctionalPhrases from "./Components/FunctionalPhrases/FunctionalPhrases";
import Story from "./Components/Story/Story";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import styles from "./styles.module.css";
import "./App.css"

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState("");

  const getExerciseComponent = () => {
    switch (selectedExercise) {
      case "vocal":
        return <Countdown />;
      case "functional":
        return <FunctionalPhrases />;
      case "reading":
        return <Story />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.appContainer}>
      <Header
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
      />
      <main className={styles.centeredMain}>
        {selectedExercise ? getExerciseComponent() : <Landing />}
      </main>
    </div>
  );
};

export default App;
