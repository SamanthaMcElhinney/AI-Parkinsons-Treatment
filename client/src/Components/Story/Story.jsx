import { useState } from "react";
import styles from "../../styles.module.css";

const API_URL = "http://localhost:3002/v1/completions";

export default function Story() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(""); 
    try {
      const reply = await generateQuery();
      setResponse(reply);
    } catch (err) {
      setError("Failed to generate story. Please try again.");
      console.error(err);
    }
  };

  const generateQuery = async () => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: prompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.story.trim();
  };

  return (
    <main className={styles.main}>
      <h1>Reading Exercise:</h1>
      <div className={styles.container}>
        <div>
          <p>
            Reading out loud from a paragraph or text can help with articulation,
            breath control, and pacing. Here's how to optimize your reading
            exercises:
          </p>
          <ul>
            <li>
              <strong>Selection:</strong> Choose a topic of interest.
            </li>
            <li>
              <strong>Read Aloud:</strong> Read the paragraph out loud at a
              comfortable pace.
            </li>
            <li>
              <strong>Articulation:</strong> Focus on articulating each word
              clearly.
            </li>
            <li>
              <strong>Pacing:</strong> Maintain a steady pace, taking breaths as necessary but not rushing.
            </li>
            <li>
              <strong>Expression:</strong> Try to incorporate some inflection and emotion, as you would in conversation.
            </li>
          </ul>
          <p>
            <strong>Goal:</strong> To enhance your speaking fluency in real-life
            situations by practicing with complex sentences.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query-description"
            placeholder="Choose topic"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className={styles.input}
          />
          <input
            type="submit"
            value="Generate Story"
            className={styles.submitButton}
          />
        </form>
        {response && <p className={styles.centerText}>{response}</p>}
        {error && <p className={styles.errorText}>{error}</p>}
      </div>
    </main>
  );
}
