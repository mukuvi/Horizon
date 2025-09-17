import express from "express";
import { startups } from "./data/data.js";
const PORT = 8000;

const app = express();

const person = {
  name: "james",
  age: 22,
  hobbies: ["swimming", "cooking", "coding"],
};

app.get("/", (req, res) => {
  res.json(startups);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
