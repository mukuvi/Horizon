import http from "node:http";
const PORT = 8000;
const server = http.createServer((req, res) => {
  res.write("Hello from the server \n");
  res.end();
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
