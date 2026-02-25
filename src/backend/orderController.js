const db = require("../database/db");
const Order = require("./Order");

exports.createOrder = (req, res) => {
    const { customerName, foodItem, quantity } = req.body;

    const order = new Order(customerName, foodItem, quantity);

    const query = "INSERT INTO orders (customer_name, food_item, quantity) VALUES (?, ?, ?)";

    db.query(query, [order.customerName, order.foodItem, order.quantity], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }

        res.json({ message: "Order successfully placed!" });
    });
};