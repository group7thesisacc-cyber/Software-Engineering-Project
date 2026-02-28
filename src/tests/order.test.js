/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

describe("Order UI Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="modalFoodName"></div>
      <div id="modalFoodPrice"></div>
      <div id="quantityValue">1</div>
      <img id="modalFoodImage" />
      <div id="orderModal" class="hidden"></div>

      <!-- REQUIRED ELEMENTS -->
      <div id="successBox" class="hidden"></div>
      <input type="checkbox" id="riceAddon" />
      <input type="checkbox" id="utensilAddon" />
      <input type="time" id="pickupTime" />
      <span id="orderCount"></span>
    `;

        const scriptPath = path.resolve(__dirname, "../frontend/JavaScript/orderUI.js");
        console.log("LOADING FILE:", scriptPath);

        const scriptContent = fs.readFileSync(scriptPath, "utf8");
        console.log(scriptContent);

    eval(scriptContent);
  });

  test("openOrderModal updates modal content correctly", () => {
    openOrderModal("Fried Chicken", 120); // ✅ fixed

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
    openOrderModal("Adobo", 90); // ✅ fixed

    changeQty(1);
    expect(document.getElementById("quantityValue").textContent).toBe("2");
  });

  test("quantity does not go below 1", () => {
    openOrderModal("Adobo", 90); // ✅ fixed

    changeQty(-1);
    expect(document.getElementById("quantityValue").textContent).toBe("1");
  });
});