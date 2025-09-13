import http from "node:http";
const PORT = 8000;
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("Hello from the server");
  }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
