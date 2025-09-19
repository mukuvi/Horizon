import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";
import { Console } from "node:console";

async function vtest() {
  const db = await open({
    filename: path.join("vtest.db"),
    driver: sqlite3.Database,
  });
  await db.exec(`
    CREATE TABLE IF NOT EXISTS vphones(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    model TEXT NOT NULL,
    year,
    price REAL 
    )`);
  await db.run(`
        INSERT INTO vphones(name,model,year,price)
        VALUES
        ("iphone","17pro",2025,150000),
        ("samsung","s25",2025,140000),
        ("oppo","reno 13",2024,65000),
        ("google pixel","p8",2022,10000)
        `);
  await db.close();
  console.log("Table successfuly created");
}
vtest();
