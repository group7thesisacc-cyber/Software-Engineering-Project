/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Order UI Tests", () => {
  beforeEach(() => {
    // Mock full DOM (important!)
    document.body.innerHTML = `
      <div id="modalFoodName"></div>
      <div id="modalFoodPrice"></div>
      <div id="quantityValue">1</div>
      <div id="orderModal" class="hidden"></div>
      <div id="successBox" class="hidden"></div>
      <div id="orderCount"></div>

      <input type="checkbox" id="riceAddon" />
      <input type="checkbox" id="utensilAddon" />
      <input type="time" id="pickupTime" />
    `;

    // Load your actual JS file
    const scriptPath = path.resolve(
      __dirname,
      "../frontend/JavaScript/orderUI.js"
    );

    const scriptContent = fs.readFileSync(scriptPath, "utf8");

    eval(scriptContent);
  });

  test("openOrderModal updates modal correctly", () => {
    openOrderModal("Fried Chicken", 120);

    expect(document.getElementById("modalFoodName").textContent)
      .toBe("Fried Chicken");

    expect(document.getElementById("modalFoodPrice").textContent)
      .toBe("₱120.00");

    expect(document.getElementById("quantityValue").textContent)
      .toBe("1");

    expect(document.getElementById("orderModal").classList.contains("hidden"))
      .toBe(false);
  });

  test("quantity increases correctly", () => {
    openOrderModal("Adobo", 90);

    changeQty(1);

    expect(document.getElementById("quantityValue").textContent)
      .toBe("2");
  });

  test("quantity does not go below 1", () => {
    openOrderModal("Adobo", 90);

    changeQty(-1);

    expect(document.getElementById("quantityValue").textContent)
      .toBe("1");
  });

  test("closeModal hides modal", () => {
    openOrderModal("Burger", 80);

    closeModal();

    expect(document.getElementById("orderModal").classList.contains("hidden"))
      .toBe(true);
  });
});