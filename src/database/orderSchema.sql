DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id INT IDENTITY(1,1) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    food_item VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    rice INT NOT NULL DEFAULT 0,
    utensils INT NOT NULL DEFAULT 0,
    pickup_time VARCHAR(50),
    created_at DATETIME DEFAULT GETDATE()
);