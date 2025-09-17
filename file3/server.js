import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";

const PORT = 8000;

const app = express();

app.use("/api", apiRouter);
app.use((req, res) => {
  res
    .status(404)
    .json({
      message: "Endpoint not found. Please check the API documentation.",
    });
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
