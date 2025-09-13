import http from "node:http";
import { getDataFromDB } from "../db.js";

const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.end("This is from the server");
  }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
