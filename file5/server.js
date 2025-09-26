import express from "express";
const PORT = 8000;
let app = express();
app.get("/", (req, res) => {
  res.send("Hello bro");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
