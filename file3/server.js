import express from "express";
import { startups } from "./data/data.js";
const PORT = 8000;

const app = express();

app.get("/api", (req, res) => {
  let filteredData = startups;

  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;

  if (industry) {
    filteredData = filteredData.filter(
      (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
    );
  }

  res.json(filteredData);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
