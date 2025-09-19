import express from "express";
import { apiRouter } from "./routes/apiRouter.js";

const PORT = 8800;
const app = express();

app.use("/", apiRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
