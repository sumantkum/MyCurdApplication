import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { playCreateSound } from '../utils/playSound';
import { toast } from "react-toastify";


const CreateUser = () => {
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "", age: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await api.post("/users", form);
        toast.success("✅ User Created!")
        console.log("🎵 Attempting to play create sound...");
        playCreateSound();
        console.log("✅ Sound function called.");
        navigate("/");        
    } catch (error) {
        toast.error("❌ Error creating user")
        playCreateSound();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Add New User</h2>

      {["name", "email", "address", "phone", "age"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          required={field === "name" || field === "email"}
          type={field === "age" ? "number" : "text"}
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      ))}

      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded">
        Create User
      </button>
    </form>
  );
};

export default CreateUser;
