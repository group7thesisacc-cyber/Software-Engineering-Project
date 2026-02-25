document.getElementById("orderForm")
.addEventListener("submit", async function(e) {
    e.preventDefault();

    const order = {
        customerName: document.getElementById("customerName").value,
        foodItem: document.getElementById("foodItem").value,
        quantity: document.getElementById("quantity").value
    };

    try {
        const result = await createOrder(order);
        document.getElementById("responseMessage").innerText = result.message;
        this.reset();
    } catch (error) {
        document.getElementById("responseMessage").innerText = "Error submitting order.";
    }
});