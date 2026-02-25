// src/backend/server.js
const express = require("express");
const cors = require("cors");
const orderController = require("./orderController");

const app = express();
app.use(cors());
app.use(express.json());

// POST route to handle orders
app.post("/orders", orderController.createOrder);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});