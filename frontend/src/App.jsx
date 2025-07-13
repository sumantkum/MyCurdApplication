import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  const playClickSound = () => {
    new Audio('https://www.soundjay.com/button/sounds/button-3.mp3').play();
  };

  return (
    <Router>
      <nav className="bg-indigo-700 text-white px-4 py-3 shadow-md flex flex-wrap justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide mb-2 sm:mb-0">
          👤 User Management
        </h1>

        <div className="flex flex-wrap gap-2">
          <Link to="/" className="bg-white text-indigo-700 px-3 py-1.5 rounded hover:bg-indigo-100 font-semibold transition" >
            User List
          </Link>

          <Link to="/create" className="bg-green-500 px-3 py-1.5 rounded hover:bg-green-600 text-white font-semibold transition">
            ➕ Add User
          </Link>
        </div>
      </nav>

      <main className="p-4 sm:p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </main>

      <ToastContainer position="top-right" autoClose={2500} />
    </Router>
  );
}

export default App;
