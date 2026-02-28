class Order {
    constructor(customerName, foodItem, quantity, rice, utensils, pickupTime) {
        this.customerName = customerName;
        this.foodItem = foodItem;
        this.quantity = quantity;
        this.rice = rice ? 1 : 0;
        this.utensils = utensils ? 1 : 0;
        this.pickupTime = pickupTime || "";
    }
}

module.exports = Order;