import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import { toast } from 'react-toastify';
import { playDeleteSound } from '../utils/playSound';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    try {
        await api.delete(`/users/${id}`);
        toast.success("🗑️ User Deleted!");
        playDeleteSound();
        fetchUsers();        
        
    } catch (error) {
        toast.error("❌ Delete failed.")
        playDeleteSound();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">All Users</h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-600">⏳ Loading users...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user._id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-600 text-sm">{user.address}</p>
              <p className="text-gray-600 text-sm">Phone: {user.phone}</p>
              <p className="text-gray-600 text-sm">Age: {user.age}</p>

              <div className="mt-4 flex justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                  onClick={() => navigate(`/edit/${user._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
