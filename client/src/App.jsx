import styles from "./styles.module.css";
import speaking from "./assets/speaking.png";
import { useState } from "react";
import Countdown from "./CountDown";
import FunctionalPhrases from "./FunctionalPhrases";
import Story from "./Story"
import Header from "./Header";

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(""); 
  let exerciseComponent;
  switch (selectedExercise) {
    case "vocal":
      exerciseComponent = <Countdown/>
      break;
    case "functional":
      exerciseComponent = <FunctionalPhrases/>;
      break;
    case "reading":
      exerciseComponent = <Story />;
      break;
    default:
      exerciseComponent = null;
  }

  return (
    <div>
<Header/>
<div/>
    <main className={styles.main}>
      <h3 className={styles.centerText}>Parkinson's Daily Practice</h3>
      <select
        onChange={(e) => setSelectedExercise(e.target.value)}
        value={selectedExercise}
      >
        <option value="" disabled>
          Select an exercise type
        </option>
        <option value="vocal">Vocal Exercises</option>
        <option value="functional">Functional Phrases</option>
        <option value="reading">Reading Paragraphs</option>
      </select>
      {exerciseComponent}
    </main>
    </div>
  );

}