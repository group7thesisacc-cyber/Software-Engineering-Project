const db = require("../database/db");

exports.createOrder = (req, res) => {
    const { customerName, foodItem, quantity, rice, utensils, pickupTime } = req.body;

    const sql = `
        INSERT INTO orders
        (customer_name, food_item, quantity, rice, utensils, pickup_time)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(
        sql,
        [customerName, foodItem, quantity, rice ? 1 : 0, utensils ? 1 : 0, pickupTime],
        function (err) {

            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: err.message });
            }

            res.json({
                success: true,
                orderId: this.lastID
            });
        }
    );
};