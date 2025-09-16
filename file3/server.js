import http from "node:http";
const PORT = 8000;

let server = http.createServer((req, res) => {
  res.end("This is my server");
});

server.listen(PORT, console.log(`sever running on port ${PORT}`));
