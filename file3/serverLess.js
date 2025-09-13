import http from "node:http";

const PORT = 8888;

let server = http.createServer((req, res) => {
  res.end("james");
});

server.listen(PORT, () => console.log(`server is runnning on port ${PORT}`));
