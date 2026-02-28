const express = require("express");
const cors = require("cors");
const { createOrder } = require("./orderController");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ Correct usage
app.post("/orders", createOrder);

// test route
app.get("/orders", (req, res) => {
    const db = require("../database/db");
    db.all("SELECT * FROM orders", [], (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error." });
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});