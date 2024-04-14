import React, { useState } from "react";
import Countdown from "./Pages/Countdown/Countdown";
import FunctionalPhrases from "./Pages/FunctionalPhrases/FunctionalPhrases";
import Story from "./pages/Story/Story";
import Header from "./Components/Header/Header";
import Landing from "./Pages/Landing/Landing";
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
    <div>
      <Header
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
      />
      <main>
        {selectedExercise ? getExerciseComponent() : <Landing />}
      </main>
    </div>
  );
};

export default App;
