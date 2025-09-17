import { Console } from "console";
import express from "express";
const PORT = 8000;

const app = express();

const person = {
  name: "james",
  age: 22,
  hobbies: ["swimming", "cooking", "coding"],
};

app.get("/", (req, res) => {
  res.json(person);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
