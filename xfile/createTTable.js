import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

async function createAndPopulateTable() {
  const db = await open({
    filename: path.join("tatabase.db"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS services(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,  
      name TEXT NOT NULL,
      artist TEXT NOT NULL
    )
  `);

  await db.run(`
    INSERT INTO services (title, name, artist)
    VALUES 
      ('Haircut', 'John Doe', 'Stylist A'),
      ('Tattoo', 'Jane Smith', 'Artist B'),
      ('Makeup', 'Alice Johnson', 'Stylist C')
  `);

  await db.close();
}

createAndPopulateTable();
