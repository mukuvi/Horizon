import express from "express";

const PORT = 8800;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
