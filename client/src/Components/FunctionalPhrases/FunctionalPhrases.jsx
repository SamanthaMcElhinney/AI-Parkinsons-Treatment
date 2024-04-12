import styles from "../../styles.module.css";
import convo from "../../assets/convo.png";
import { useState } from "react";

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
      const response = await fetch(
        "http://localhost:3002/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic: topic }),
        }
      );

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
      <div>
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {" "}
        <img
          src={convo}
          alt="quote icon"
          style={{
            width: "50px",
            height: "50px",
            marginRight:"20px",
            marginBottom: "20px",
          }}
        />
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
      </div>
    </main>
  );
}
