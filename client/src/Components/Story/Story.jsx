import styles from "../../styles.module.css"
import { useState } from "react";
import "./Story.css"

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
      const response = await fetch(
        "http://localhost:3002/v1/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic: prompt }),
        }
      );

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
        <div>
        <h3>Reading/ Conversation Practice</h3>

          <p>
            Reading out loud from a paragraph or text can help with
            articulation, breath control, and pacing.
          </p>
          <ul>
            <li>Selection: Choose a topic of interest.</li>
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
            placeholder="Choose topic"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <input type="submit" value="Generate Story" />
        </form>
        <div className={styles.container}>
          <p className={styles.container}>{response}</p>
        </div>
      </main>
    );
}

