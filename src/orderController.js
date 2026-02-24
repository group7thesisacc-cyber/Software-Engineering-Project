// orderController.js
const Order = require('./Order');

class OrderController {
    constructor() {
        this.orders = []; // In-memory order storage
        this.nextId = 1;
    }

    createOrder(studentName, items) {
        const order = new Order(this.nextId++, studentName, items);
        this.orders.push(order);
        return order;
    }

    getOrderById(id) {
        return this.orders.find(order => order.id === id);
    }

    confirmPayment(id) {
        const order = this.getOrderById(id);
        if (!order) throw new Error("Order not found");
        order.confirmPayment();
        return order;
    }

    completeOrder(id) {
        const order = this.getOrderById(id);
        if (!order) throw new Error("Order not found");
        order.completeOrder();
        return order;
    }

    listOrders() {
        return this.orders;
    }
}

module.exports = OrderController;