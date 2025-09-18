// src/Components/Header.jsx
import React from 'react';
import { Bell, User, Globe } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
      <h1 className="text-xl font-semibold">Virtual Doctor Dashboard</h1>

      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-blue-600">
          <Globe size={20} className="mr-2" />
          English
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
