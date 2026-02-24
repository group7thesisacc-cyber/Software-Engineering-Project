# Smart Cafeteria System

## Order Management Subsystem

### Practical Activity Assessment 1

---

## Project Overview

The **Smart Cafeteria System** is a proposed **web-based solution** designed to improve cafeteria operations through structured food ordering, payment validation, and order tracking.

This repository presents the **Order Management Subsystem**, developed for:

> **Practical Activity Assessment 1 – Demonstrating a Working Subsystem**

The subsystem focuses on modeling and managing cafeteria food orders using **modular software design** and **Object-Oriented Programming (OOP)** principles.

---

## Objectives

* Demonstrate **subsystem-based software architecture**
* Apply **Object-Oriented Programming concepts**
* Implement **modular separation of responsibilities**
* Practice **Test-Driven Development (TDD)**
* Utilize **Git version control workflow**

---

## Subsystem Description

The **Order Management Subsystem** simulates core cafeteria ordering operations, including:

* Creating student food orders
* Validating payment status
* Completing orders only after confirmation
* Retrieving order records
* Preventing invalid order processing

This subsystem represents the foundational workflow of a smart cafeteria ordering system.

---

## Project Structure

```
smart-cafeteria-system/
│
├── README.md
├── .gitignore
│
├── app/
│   ├── Order.js            # Order Model
│   ├── orderController.js  # Business Logic
│   └── server.js           # Subsystem Runner
│
└── tests/
    └── order.test.js       # Jest Tests
```

---

## Technologies Used

* **JavaScript (Node.js)**
* **Jest** — Testing Framework
* **Git** — Version Control

---

## Development Environment

| Tool             | Version            |
| ---------------- | ------------------ |
| Operating System | Windows 10         |
| IDE              | Visual Studio Code |
| Node.js          | 18.x               |
| Git              | 2.x                |

---

## How to Run the Subsystem

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Demo Subsystem

```bash
node app/server.js
```

### 3. Run Tests

```bash
npx jest
```

---

## Development Workflow

The subsystem was developed using an **incremental development approach**:

1. Order data model creation
2. Controller logic implementation
3. Test creation using TDD methodology
4. Module integration through server execution
5. Version control using feature branches

---

## Developers

* Maria Isabella Francisco
* Janine May S. Andrada
* John Paul M. Tupas
* Gabriel D. Bigcas

**BSCS – 3C**

---

## Academic Purpose

This project was developed for **educational purposes** to demonstrate:

* Subsystem implementation
* Modular programming practices
* Software testing strategies
* Structured software development workflows
