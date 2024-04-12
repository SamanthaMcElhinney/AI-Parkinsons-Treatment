import express from "express";
import cors from "cors";
import openai from "./api.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/v1/completions", async (req, res) => {
  console.log("Request received for /v1/completions");
  const { topic } = req.body;
  if (!topic || typeof topic !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  const storyPrompt = `Write a story for ${topic}.`;

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      max_tokens: 300,
      temperature: 0.7,
      prompt: storyPrompt,
    });

    const story = completion.data.choices[0].text;
    res.json({ story });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/v1/chat/completions", async (req, res) => {
  console.log("Request received for /v1/chat/completions");
  const { topic } = req.body;

  if (!topic || typeof topic !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  const phrasePrompt = `Generate a list of 10 functional phrases related to ${topic}.`;

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      max_tokens: 300,
      temperature: 0.7,
      prompt: phrasePrompt,
    });

    const generatedText = completion.data.choices[0].text.trim();
    const phrases = generatedText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    res.json({ phrases });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
