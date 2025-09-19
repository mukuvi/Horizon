import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";
import { abductionsData } from "./abductionsData.js";

async function seedTable() {
  const db = await open({
    filename: path.join("vtestbase.db"),
    driver: sqlite3.Database,
  });

  try {
    // Create the 'abductions' table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS abductions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location TEXT NOT NULL,
        details TEXT NOT NULL
      );
    `);

    await db.exec("BEGIN TRANSACTION");

    for (const { location, details } of abductionsData) {
      await db.run(
        `INSERT INTO abductions (location, details)
        VALUES (?, ?)`,
        [location, details]
      );
    }

    await db.exec("COMMIT");
    console.log("All records inserted");
  } catch (err) {
    await db.exec("ROLLBACK");
    console.log("Error inserting data", err.message);
  } finally {
    await db.close();
    console.log("Connection closed");
  }
}

seedTable();
