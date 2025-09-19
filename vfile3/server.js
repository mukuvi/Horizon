import express from "express";
import counties from "./data/data.js";

const PORT = 8800;
const app = express();

app.get("/api", (req, res) => {
  let filteredData = counties;
  let { name, province, capital } = req.query;
  if (name) {
    filteredData = filteredData.filter(
      (county) => county.name.toLowerCase() === name.toLowerCase()
    );
  }
  if (province) {
    filteredData = filteredData.filter(
      (county) => county.province.toLowerCase() === province.toLowerCase()
    );
  }
  if (capital) {
    filteredData = filteredData.filter(
      (county) => county.capital.toLowerCase() === capital.toLowerCase()
    );
  }

  res.json(filteredData);
});
app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;
  let someData = counties.filter(
    (county) => county[field].toLowerCase() === term.toLowerCase()
  );
  res.json(someData);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
