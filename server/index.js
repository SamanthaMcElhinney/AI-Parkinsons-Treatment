import express from "express";
import cors from "cors";
import openai from "./api.js";
import pool from "./db.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/adduser", async (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];

  // Hash the password before saving to database
  const hashedPassword = await bcrypt.hash(password, 10);

  const insertSTMT = `INSERT INTO accounts(username, password) VALUES($1, $2);`;
  pool
    .query(insertSTMT, [username, hashedPassword])
    .then((resp) => {
      console.log("Data Saved");
      res.status(200).send("User added successfully");
    })
    .catch((err) => {
      console.error("Database Error:", err);
      res.status(500).send("Error saving the user");
    });
});

app.post("/chat", async (req, res) => {
  const { topic } = req.body;
  if (!topic || typeof topic !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  const storyPrompt = `Write a short story about ${topic}.`;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 512,
      temperature: 0.7,
      prompt: storyPrompt,
    });

    const story = completion.data.choices[0].text;

    // Save the story to the database
    const saveStorySQL = `INSERT INTO stories(content) VALUES($1);`;
    await pool.query(saveStorySQL, [story]);
    console.log("Story inserted into the database.");

    res.json({ story });
  } catch (error) {
    console.error("Error:", error);
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

app.post("/upload-text", async (req, res) => {
  const uploadParams = {
    Bucket: myBucket,
    Key: myKey,
    Body: myBody,
  };

  try {
    const data = await s3.send(new PutObjectCommand(uploadParams));
    console.log("Successfully uploaded data:", data);
    res.status(200).send(data);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
