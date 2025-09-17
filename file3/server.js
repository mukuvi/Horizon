import { Console } from "console";
import express from "express";
const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
