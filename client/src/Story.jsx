import styles from "./Story.css";
import { useState } from "react";

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
      <main className={styles.readingMain}>
        <h3 className={styles.centerText}>Reading/ Conversation Practice</h3>
        <div className={styles.readingText}>
          <p>
            Reading out loud from a paragraph or text can help with
            articulation, breath control, and pacing.
          </p>
          <ul>
            <li>Selection: Choose a paragraph from a book or article.</li>
            <li>
              Read Aloud: Read the paragraph out loud at a comfortable pace.
            </li>
            <li>Articulation: Focus on articulating each word clearly.</li>
            <li>
              Pacing: Maintain a steady pace, taking breaths as necessary but
              not rushing through the text.
            </li>
            <li>
              Expression: Try to incorporate some inflection and emotion, as you
              would in regular conversation.
            </li>
          </ul>
          <p>
            <strong>Goal:</strong> To enhance your ability to speak more
            fluently in real-life situations, by practicing with complex
            sentences and different types of words.
          </p>
        </div>
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
        <div className={styles.readingContainer}>
          <p className={styles.centerText}>{response}</p>
        </div>
      </main>
    );
}

