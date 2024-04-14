import { useState } from "react";
import CustomTextField from "../../Components/CustomTextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import "./FunctionalPhrases.css";

const API_ENDPOINT = "http://localhost:3002/v1/chat/completions";

export default function FunctionalPhrases() {
  const [topic, setTopic] = useState("");
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const fetchedPhrases = await fetchPhrases(topic);
      setPhrases(fetchedPhrases);
    } catch (error) {
      console.error("Fetching phrases failed:", error);
      setError("Failed to generate phrases. Please try again");
    } finally {
      setLoading(false);
      setTopic("");
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
    <main className="phrase-container">
      <section className="phrase-title-container">
        <h1 className="exercise-title">
          <span className="color">Practice </span>what's
          <span className="italic">important </span>to YOU!
        </h1>
      </section>
      <section className="phrase-content-container">
        <section className="phrase-results-container">
          <h3 className="phrase-results-title">
            <span className="phrase-title-bold">YOUR</span> Phrases:
          </h3>
          {loading ? (
            <CircularProgress sx={{ color: "#00b67a" }} />
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <ul className="phrase-results-AI">
              {phrases.map((phrase, index) => (
                <li key={index}>{phrase}</li>
              ))}
            </ul>
          )}
        </section>
        <div className="phrase-content-left">
          <h3 className="phrase-goal-container">
            <span className="phrase-goal">Goal:</span> To improve your
            <span className="phrase-goal-bold"> SPEECH </span>for everyday
            conversations.
          </h3>
          <p>
            Functional phrases are real-world sentences that help you practice
            natural dialogue. Here's how to get the most out of these exercises:
          </p>
          <ul>
            <li>
              <span className="bold">Topic:</span> Choose a topic that you would
              normally talk about in your daily life.
            </li>
            <li>
              <span className="bold">Speech:</span> Try to say the generated
              phrases as naturally as possible.
            </li>
            <li>
              <span className="bold">Repetition:</span> The more you practice,
              the more comfortable you will become.
            </li>
            <li>
              <span className="bold">Application:</span> Try using these phrases
              in your daily conversations.
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <CustomTextField
              label="Choose topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                width: 300,
                backgroundColor: "#dafe7d;",
                color: "black",
                "&:hover": {
                  backgroundColor: "#5a3a36",
                  color: "white",
                },
              }}
            >
              Generate Phrases
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
