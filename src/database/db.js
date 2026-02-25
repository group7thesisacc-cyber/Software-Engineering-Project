// src/database/db.js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database file path
const dbPath = path.join(__dirname, "smart_cafeteria.sqlite");

// Open (or create) the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to SQLite Database");
    }
});

// Create orders table if not exists
db.run(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT NOT NULL,
        food_item TEXT NOT NULL,
        quantity INTEGER NOT NULL
    )
`);

module.exports = db;