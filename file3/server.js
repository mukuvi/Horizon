import express from "express";
// import { startups } from "./data/data.js";
import { apiRouter } from "./routes/apiRoutes.js";

const PORT = 8000;

const app = express();
const apiRouter = express.Router();

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
