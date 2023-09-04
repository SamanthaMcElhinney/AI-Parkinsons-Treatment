import styles from "./styles.module.css";
import speaking from "./assets/speaking.png";
import { useState } from "react";
import Countdown from "./CountDown";
import FunctionalPhrases from "./FunctionalPhrases";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const reply = await generateQuery();
    setResponse(reply);
  };

  const generateQuery = async () => {
    try {
      const response = await fetch("http://localhost:3002/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: prompt }),
      });

      if (!response.ok) {
        return `Error: ${response.status}`;
      }
      const data = await response.json();
      return data.story.trim();
    } catch (error) {
      console.error(error);
      return "An error occurred";
    }
  };

  return (
    <main className={styles.main}>
      <img src={speaking} className={styles.icon} alt="brain icon" />
      <h3 className={styles.centerText}>Parkinson's Daily Practice</h3>
      <Countdown seconds={10} />
      <FunctionalPhrases />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your practice story of interest"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <input type="submit" value="Generate Story" />
      </form>
      <div className={styles.container}>
        <pre className={styles.centerText}>{response}</pre>
      </div>
    </main>
  );
}
