# Smart Cafeteria System

## Order Management Subsystem

### Practical Activity Assessment 1 – Demonstrating a Working Subsystem

---

## Project Overview

The **Smart Cafeteria System** is a proposed **web-based solution** designed to improve cafeteria operations through organized food ordering and digital order tracking.

This repository contains the **Order Management Subsystem**, developed as part of:

> **Practical Activity Assessment 1 – Demonstrating a Working Subsystem**

The subsystem focuses on handling cafeteria food orders using a structured architecture composed of **Frontend**, **Backend**, and **Database** components while applying **Object-Oriented Programming (OOP)** and modular design principles.

---

## Objectives

* Demonstrate **subsystem-based software architecture**
* Apply **Object-Oriented Programming (OOP)** concepts
* Implement separation between frontend, backend, and database layers
* Practice modular system development
* Utilize **Git version control workflow**
* Perform basic subsystem testing

---

## Subsystem Description

The **Order Management Subsystem** simulates core cafeteria ordering operations.
Instead of implementing the entire cafeteria platform, this project focuses on a **single functional component** of the larger system.

### Implemented Features

* Create cafeteria food orders
* Send order data from frontend to backend
* Process orders through controller logic
* Store orders in a database table
* Retrieve and validate order information

This subsystem represents the foundational workflow of a smart cafeteria ordering process.

---

## System Architecture

The subsystem follows a simple **three-layer architecture**:

```
User Interface (Frontend)
        ↓
Business Logic (Backend)
        ↓
Data Storage (Database)
```

Each layer performs a specific responsibility to maintain modularity and clarity.

---

## Project Structure

```
smart-cafeteria-system/
│
├── README.md
├── .gitignore
│
├── frontend/                     # Subsystem User Interface
│   ├── orderPage.html            # Order page layout
│   │
│   ├── css/
│   │   └── styles.css            # UI styling
│   │
│   └── js/
│       ├── orderUI.js            # Handles user interaction
│       └── apiClient.js          # Communicates with backend API
│
├── backend/                      # Subsystem Logic Layer
│   ├── server.js                 # Server runner
│   ├── Order.js                  # Order data model
│   └── orderController.js        # Order processing logic
│
├── database/                     # Subsystem Data Layer
│   ├── db.js                     # Database connection
│   └── orderSchema.sql           # Orders table structure
│
└── tests/
    └── order.test.js             # Subsystem tests
```

---

## Technologies Used

* **HTML5** – Frontend structure
* **CSS3** – Interface styling
* **JavaScript (Node.js)** – Application logic
* **Express.js** – Backend server
* **SQL** – Database schema
* **Jest** – Testing framework
* **Git** – Version control

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

### 2. Start the Backend Server

```bash
node backend/server.js
```

### 3. Open the Frontend

Open the file below in a browser:

```
frontend/orderPage.html
```

### 4. Run Tests

```bash
npx jest
```

---

## Development Workflow

The subsystem was developed using an incremental and modular workflow:

1. Designed subsystem scope and architecture
2. Implemented Order data model
3. Created controller logic
4. Built frontend interaction interface
5. Connected backend to database schema
6. Added automated tests
7. Managed versions using Git commits

---

## Developers

* Maria Isabella Francisco
* Janine May S. Andrada
* John Paul M. Tupas
* Gabriel D. Bigcas

**BSCS – 3C**

---

## Academic Purpose

This project was created for educational purposes to demonstrate:

* Subsystem implementation within a larger system
* Modular programming practices
* Frontend–Backend–Database interaction
* Software testing strategies
* Structured software development using Git
