# Todo App

A full-stack Todo application built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

##  Features

- Add, edit, delete Todos
- Filter todos based on status (`Pending`, `In Progress`, `Completed`)
- Responsive UI using **Material UI**
- RESTful API integration
- State management using **Context API**
- API error handling and loading indicators

---

##  Tech Stack

###  Frontend
- React
- React Router
- Context API
- Axios
- Material UI
- Vite

###  Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🔧 Setup Instructions

###  Backend (Node.js + Express)
1. Navigate to the backend folder:
   ```bash
   cd backend
2. Install dependencies:
   ```bash
   npm install
   
3. Create env file:
   ```bash
   PORT=8080
   MONGO_URI=mongo url here
4. Start backend server:
   ```bash
   npm start

###  Frontend (React)
1. Navigate to the fronend folder:
   ```bash
   cd frontend
2. Install dependencies:
   ```bash
   npm install
   
3. Create env file:
   ```bash
   VITE_API_BASE_URL='http://localhost:8080/api/todo'
4. Start frontend server:
   ```bash
   npm run dev

