import express from "express";
import { startups } from "./data/data.js";
import { start } from "repl";
const PORT = 8000;

const app = express();

app.get("/api", (req, res) => {
  let filteredData = startups;
  const { country, continent, city } = req.query;

  if (country) {
    filteredData = filteredData.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase()
    );
  }
  if (continent) {
    filteredData = filteredData.filter(
      (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
    );
  }
  res.json(filteredData);
});

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;

  const filteredData = startups.filter(
    (startup) => startup[field].toLowerCase() === term.toLowerCase()
  );

  res.json(filteredData);
});
app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
