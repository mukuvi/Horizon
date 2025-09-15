import http from "node:http";
const PORT = 8888;

let server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
  }
  res.end("am here");
});

server.listen(PORT, console.log(`server running under port ${PORT}`));
