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
    console.log("Generating phrases for topic:", topic); 
    try {
      const response = await fetch("http://localhost:3002/phrases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: topic }),
      });

      console.log("Received response:", response); 

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
    <div className={styles.directions}>
      <h3>Functional Phrases Exercises:</h3>
      <p>
        Functional phrases are real-world sentences that help you practice
        natural dialogue. Here's how to get the most out of these exercises:
      </p>
      <ul>
        <li>
          <strong>Topic:</strong> Choose a topic that you would normally talk
          about in your daily life.
        </li>
        <li>
          <strong>Speech:</strong> Try to say the generated phrases as
          naturally as possible.
        </li>
        <li>
          <strong>Repetition:</strong> The more you practice, the more
          comfortable you will become.
        </li>
        <li>
          <strong>Application:</strong> Try using these phrases in your daily
          conversations.
        </li>
      </ul>
      <p>
        <strong>Goal:</strong> To improve your functional language skills for
        everyday conversations.
      </p>
    </div>
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
