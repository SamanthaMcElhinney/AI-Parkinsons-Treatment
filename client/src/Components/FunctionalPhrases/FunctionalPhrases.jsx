import { useState } from "react";
import styles from "../../styles.module.css";

const API_ENDPOINT = "http://localhost:3002/v1/chat/completions";

export default function FunctionalPhrases() {
  const [topic, setTopic] = useState("");
  const [phrases, setPhrases] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const fetchedPhrases = await fetchPhrases(topic);
      setPhrases(fetchedPhrases);
    } catch (error) {
      console.error("Fetching phrases failed:", error);
      setPhrases(["Error occurred while fetching phrases."]);
    }
  };

  const fetchPhrases = async (topic) => {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.phrases || [];
  };

  return (
    <main className={styles.main}>
      <h1>Functional Phrases Exercises:</h1>
      <div className={styles.container}>
        <div>
          <p>
            Functional phrases are real-world sentences that help you practice
            natural dialogue. Here's how to get the most out of these exercises:
          </p>
          <ul>
            <li>
              <strong>Topic:</strong> Choose a topic that you would normally
              talk about in your daily life.
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
              <strong>Application:</strong> Try using these phrases in your
              daily conversations.
            </li>
          </ul>
          <p>
            <strong>Goal:</strong> To improve your functional language skills
            for everyday conversations.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="topic-description"
            placeholder="Choose your topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={styles.input}
          />
          <input
            type="submit"
            value="Generate Phrases"
            className={styles.submitButton}
          />
        </form>
      </div>
      <div className={styles.container}>
        <ul className={`${styles.centerText} ${styles.noBullets}`}>
          {phrases.map((phrase, index) => (
            <li key={index}>{phrase}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
