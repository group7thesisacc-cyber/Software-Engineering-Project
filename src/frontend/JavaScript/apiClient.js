// src/frontend/JavaScript/apiClient.js

const API_URL = "/orders"; // Relative path

export async function createOrder(orderData) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: data.error || "Unknown server error" };
        }

        return data;

    } catch (err) {
        console.error("Network error:", err);
        return { error: "Network error. Could not reach server." };
    }
}