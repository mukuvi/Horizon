import http from "node:http";
const PORT = 8000;

let server = http.createServer((req, res) => {
  if (req.url === "/api") {
    req.end("My server is correctly running");
  } else {
    res.end("Server error");
  }
});

server.listen(PORT, console.log(`sever running on port ${PORT}`));
