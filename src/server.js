// server.js
const OrderController = require('./orderController');

const controller = new OrderController();

// Demo: Create Orders
const order1 = controller.createOrder("Alice", ["Burger", "Fries"]);
const order2 = controller.createOrder("Bob", ["Pizza"]);

// Confirm Payment for order 1
controller.confirmPayment(order1.id);

// Try completing orders
try {
    controller.completeOrder(order1.id); // ✅ Success
    console.log(`Order ${order1.id} completed!`);
    
    controller.completeOrder(order2.id); // ❌ Should throw error
} catch (err) {
    console.error(err.message);
}

// List all orders
console.log("\nAll Orders:");
console.table(controller.listOrders());