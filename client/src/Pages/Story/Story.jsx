import { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CustomTextField from "../../Components/CustomTextField";
import "./Story.css";

const API_URL = "http://localhost:3002/v1/completions";

export default function Story() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const reply = await generateStory();
      setStory(reply);
    } catch (err) {
      setError("Failed to generate story. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
      setPrompt("");
    }
  };

  const generateStory = async () => {
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
    <main className="story-container">
      <section className="story-title-container">
        <h1 className="story-title">
          Stories that <span className="italic">resonate</span> with
          <span className="color"> YOU!</span>
        </h1>
      </section>
      <section className="story-content-container">
        <div className="story-content-left">
          <h3 className="phrase-goal-container">
            <span className="phrase-goal">Goal:</span> To improve your
            <span className="phrase-goal-bold"> SPEECH </span>for everyday
            conversations.
          </h3>
          <p>
            Reading out loud from a paragraph or text can help with
            articulation, breath control, and pacing. Here's how to get the most
            out of these reading exercises:
          </p>
          <ul>
            <li>
              <span className="bold">Selection:</span> Choose a topic of
              interest.
            </li>
            <li>
              <span className="bold">Read Aloud:</span> Read the paragraph out
              loud at a comfortable pace.
            </li>
            <li>
              <span className="bold">Articulation:</span> Focus on articulating
              each word clearly.
            </li>
            <li>
              <span className="bold">Pacing:</span> Maintain a steady pace,
              taking breaths as necessary but not rushing.
            </li>
            <li>
              <span className="bold">Expression:</span> Try to incorporate some
              inflection and emotion, as you would in conversation.
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <CustomTextField
              label="Choose topic"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                width: 300,
                color: "black",
                backgroundColor: "#dafe7d",
                "&:hover": {
                  backgroundColor: "#5a3a36",
                  color: "white",
                },
              }}
            >
              Generate Story
            </Button>
          </form>
        </div>
        <section className="story-results-container">
          <h3 className="story-results-title">
            <span className="story-title-bold">YOUR</span> Story:
          </h3>
          {isLoading ? (
            <div className="story-results-ai">
              <CircularProgress sx={{ color: "#00b67a" }} />
            </div>
          ) : (
            <div className="story-content-centered">
              {story ? (
                <p>{story}</p>
              ) : error ? (
                <p className="error-text">{error}</p>
              ) : null}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
