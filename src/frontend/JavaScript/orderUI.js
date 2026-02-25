// src/frontend/JavaScript/orderUI.js

// Function to send data to backend
async function createOrder(order) {
    const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
    });
    return await response.json();
}

// Listen to form submit
document.getElementById("orderForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const order = {
        customerName: document.getElementById("customerName").value,
        foodItem: document.getElementById("foodItem").value,
        quantity: document.getElementById("quantity").value
    };

    // Send to backend
    try {
        const result = await createOrder(order);
        document.getElementById("responseMessage").innerText = result.message;
        this.reset(); // clear form
    } catch (err) {
        document.getElementById("responseMessage").innerText = "Error submitting order";
        console.error(err);
    }
});