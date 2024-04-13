import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import "./FunctionalPhrases.css";

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
          <ul className="phrase-results-AI">
            {phrases.map((phrase, index) => (
              <li key={index}>{phrase}</li>
            ))}
          </ul>
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
          <form onSubmit={onSubmit}>
            <TextField
              fullWidth
              label="Choose your topic"
              variant="outlined"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
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
                  backgroundColor: "#5a3a36", // Darker shade for hover state
                  color:"white"
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
