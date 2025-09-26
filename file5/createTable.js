import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

async function createTable() {
  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database,
  });
  await db.exec(`CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            artist TEXT NOT NULL,
            price REAL NOT NULL,
            image TEXT,
            year INTEGER,
            genre TEXT,
            stock INTEGER
    )`);
  await db.run(`
    INSERT INTO products(artist,price,year, genre)
    VALUES
  ('Electric Mirage', 49.99, 2012, 'Electronic'),
  ('Velvet Echo', 24.50, 1998, 'Jazz'),
  ('Neon Pulse', 39.00, 2020, 'Pop'),
  ('Soul Drift', 18.75, 1987, 'Rock'),
  ('Lunar Tide', 55.20, 2005, 'Classical');

    `);
  await db.close();
  console.log("Table created");
}

createTable();
