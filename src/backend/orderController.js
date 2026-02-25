// src/backend/orderController.js
const db = require("../database/db");

exports.createOrder = (req, res) => {
    const { customerName, foodItem, quantity } = req.body;

    // Print submitted form data in VSCode terminal
    console.log("Received order from frontend:", req.body);

    const query = `INSERT INTO orders (customer_name, food_item, quantity) VALUES (?, ?, ?)`;

    db.run(query, [customerName, foodItem, quantity], function(err) {
        if (err) {
            console.error("Database error:", err.message);
            return res.status(500).json({ message: "Database error" });
        }
        res.json({ message: "Order successfully placed!" });
    });
};