import http from "node:http";
import { getDataFromDB } from "./db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method;

  // Fetch data once at request time
  const destinations = await getDataFromDB();

  // Set default headers
  res.setHeader("Content-Type", "application/json");

  // Route: GET /api — return all destinations
  if (pathname === "/api" && method === "GET") {
    res.statusCode = 200;
    return res.end(JSON.stringify(destinations));
  }

  // Route: GET /api/continent/:name — filter by continent
  if (pathname.startsWith("/api/continent/") && method === "GET") {
    const parts = pathname.split("/"); // ["", "api", "continent", "Asia"]
    const continent = parts[3]; // the dynamic part

    if (!continent) {
      res.statusCode = 400;
      return res.end(
        JSON.stringify({
          error: "Bad Request",
          message: "Continent name is missing in the URL.",
        })
      );
    }

    const filtered = destinations.filter(
      (dest) => dest.continent.toLowerCase() === continent.toLowerCase()
    );

    res.statusCode = 200;
    return res.end(JSON.stringify(filtered));
  }

  // If no route matched: 404
  res.statusCode = 404;
  res.end(
    JSON.stringify({
      error: "Not Found",
      message: "The requested route does not exist.",
    })
  );
});

// Start server
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
