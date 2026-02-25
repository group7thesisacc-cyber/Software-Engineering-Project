const API_URL = "http://localhost:3000/orders";

async function createOrder(orderData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
    });

    return response.json();
}