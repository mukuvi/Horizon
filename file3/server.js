import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const app = express();
const apiRouter = express.Router();

app.get("/api");

app.get("/api/:field/:term");

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
