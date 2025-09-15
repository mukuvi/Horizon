import http from "node:http";
const PORT = 8888;

let server = http.createServer((req, res) => {
  res.end("am here");
});

server.listen(PORT, console.log(`server running under port ${PORT}`));
