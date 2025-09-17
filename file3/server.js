import path from "node:path";
import fs from "node:fs/promises";

export function serveStatic(baseDir) {
  const filePath = path.join(baseDir, "public", "index.html");
}
