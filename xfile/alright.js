import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

async function createTable() {
  const db = await open({
    filename: path.join("tatabase.db"),
    driver: sqlite3.Database,
  });
  await db.exec(`
        CREATE TABLE IF NOT EXISTS fruits(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price INTEGER )`);
  await db.run(`
            INSERT INTO fruits(id,name,price)
            VALUES
            ("mango","20"),
            ("apple","30"),
            ("orange","15")`);
  await db.close();
  console.log("Table successfully created");
}
createTable();
