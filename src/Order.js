// Order.js
class Order {
    constructor(id, studentName, items = [], paymentConfirmed = false) {
        this.id = id;
        this.studentName = studentName;
        this.items = items; // Array of food items
        this.paymentConfirmed = paymentConfirmed;
        this.completed = false;
    }

    confirmPayment() {
        this.paymentConfirmed = true;
    }

    completeOrder() {
        if (!this.paymentConfirmed) {
            throw new Error("Cannot complete order: payment not confirmed.");
        }
        this.completed = true;
    }
}

module.exports = Order;