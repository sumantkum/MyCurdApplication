import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { toast } from 'react-toastify';
import { playUpdateSound } from '../utils/playSound';

const EditUser = () => {
  const { id } = useParams();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/users/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        
        await api.put(`/users/${id}`, form);
        toast.success("✅ User Updated!");
        playUpdateSound()
        navigate("/");

        
    } catch (error) {
        toast.error("❌ Update failed.")
        playUpdateSound();
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Update User</h2>

      {["name", "email", "address", "phone", "age"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          value={form[field] || ""}
          onChange={handleChange}
          required={field === "name" || field === "email"}
          type={field === "age" ? "number" : "text"}
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ))}

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
        Update User
      </button>
      
    </form>
  );
};

export default EditUser;
