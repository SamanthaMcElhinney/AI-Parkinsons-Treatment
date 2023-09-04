import styles from './styles.module.css';
import convo from './assets/convo.png';
import { useState } from 'react';

export default function FunctionalPhrases() {
  const [topic, setTopic] = useState("");
  const [phrases, setPhrases] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const fetchedPhrases = await generatePhrases();
    setPhrases(fetchedPhrases);
  };

  const generatePhrases = async () => {
    console.log("Generating phrases for topic:", topic); // Debug log
    try {
      const response = await fetch("http://localhost:3002/phrases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: topic }),
      });

      console.log("Received response:", response); // Debug log

      if (!response.ok) {
        return [`Error: ${response.status}`];
      }

      const data = await response.json();
      return data.phrases || [];
    } catch (error) {
      console.error(error);
      return ["An error occurred"];
    }
  };


  return (
    <main className={styles.main}>
      <img src={convo} className={styles.icon} alt="quote icon" />
      <h3 className={styles.centerText}>Functional Phrases Generator</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="topic-description"
          placeholder="Choose your topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input type="submit" value="Generate Phrases" />
      </form>
      <div className={styles.container}>
        <ul className={styles.centerText}>
          {phrases.map((phrase, index) => (
            <li key={index}>{phrase}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
