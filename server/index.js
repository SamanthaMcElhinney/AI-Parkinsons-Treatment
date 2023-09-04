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

app.post("/chat", async (req, res) => {
  console.log("chat endpoint hit")
   const { topic } = req.body;
  if (!topic || typeof topic !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  const storyPrompt = `Write a short story about ${topic}.`;

  try {
      console.log("chat endpoint hit");
    const completion = await openai.createCompletion({
      model: "text-davinci-003", 
      max_tokens: 512,
      temperature: 0.7, 
      prompt: storyPrompt,
    });
   res.json({ story: completion.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/phrases", async (req, res) => {
  console.log("Phrases endpoint hit");
  const { topic } = req.body;

  if (!topic || typeof topic !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }


  const phrasePrompt = `Generate a list of 10 functional phrases related to ${topic}.`;

  try {
    console.log("Phrases endpoint hit");
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 100, 
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

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
