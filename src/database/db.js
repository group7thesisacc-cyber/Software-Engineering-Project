// src/database/db.js

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// 📁 Database path
const dbPath = path.join(__dirname, "cafeteria.db");

// 🔌 Create connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Connected to cafeteria.db");
    }
});

// 🧱 Initialize schema safely
db.serialize(() => {

    // ⚠️ OPTIONAL: reset table during development
    // Uncomment if you want a fresh table every run
    // db.run(`DROP TABLE IF EXISTS orders`);

    db.run(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT NOT NULL,
            food_item TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            rice INTEGER NOT NULL DEFAULT 0,
            utensils INTEGER NOT NULL DEFAULT 0,
            pickup_time TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        );
    `, (err) => {
        if (err) {
            console.error("❌ Failed to create orders table:", err.message);
        } else {
            console.log("✅ Orders table is ready.");
        }
    });

});

// 📤 Export AFTER setup
module.exports = db;