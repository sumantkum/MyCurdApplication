# 📘 CRUD Application

A **full-stack CRUD (Create, Read, Update, Delete)** application that demonstrates how to build and connect a frontend and backend to perform basic operations on data. This project is ideal for learning how to integrate **MongoDB**, **Node.js**, and **Express.js**, with a clean and simple UI built using **HTML/CSS/JavaScript** or **React.js**.

---

## 🎯 Project Purpose

This CRUD application is developed for educational purposes to show how a typical full-stack web application works. It teaches you:

- How to set up a backend server with RESTful APIs
- How to connect to a database (MongoDB)
- How to perform Create, Read, Update, and Delete operations
- How to send and receive data using HTTP methods
- How to connect the backend with a frontend

---

## 🧩 Core Features

- 🆕 **Create** new records and save them to the database
- 🔍 **Read** and display all records
- ✏️ **Update** existing records by ID
- ❌ **Delete** records permanently by ID
- 📦 Data stored securely in MongoDB
- 🌐 API tested with tools like Postman
- 💡 Clean code structure following MVC pattern

---

## 🧰 Tech Stack

| Layer        | Technology             |
|--------------|-------------------------|
| Frontend     | HTML, CSS, JavaScript or React.js |
| Backend      | Node.js, Express.js     |
| Database     | MongoDB with Mongoose   |
| Dev Tools    | Nodemon, Postman, dotenv, CORS |

---

## 📦 Installation Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/crud-app.git
cd crud-app

npm install
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/crudDB
npm run dev

