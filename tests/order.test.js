// order.test.js
const OrderController = require('../app/orderController');

let controller;

beforeEach(() => {
    controller = new OrderController();
});

test('Create a new order', () => {
    const order = controller.createOrder("Charlie", ["Sandwich"]);
    expect(order.id).toBe(1);
    expect(order.studentName).toBe("Charlie");
    expect(order.items).toContain("Sandwich");
    expect(order.completed).toBe(false);
});

test('Cannot complete order before payment', () => {
    const order = controller.createOrder("Diana", ["Salad"]);
    expect(() => controller.completeOrder(order.id)).toThrow("Cannot complete order: payment not confirmed.");
});

test('Confirm payment and complete order', () => {
    const order = controller.createOrder("Eve", ["Soup"]);
    controller.confirmPayment(order.id);
    controller.completeOrder(order.id);
    expect(order.completed).toBe(true);
});