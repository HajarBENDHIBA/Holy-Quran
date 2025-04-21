import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm flex justify-between items-center px-8 py-4">
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="/src/assets/logo.png" 
          alt="Quran Icon" 
          className="w-14 h- 14 object-contain"
        />
       <span className="text-3xl font-['Helvetica'] font-bold text-[#35767F] hover:text-[#3F8D98] transition duration-300">
  Holy Quran
</span>

      </Link>
      <div className="flex space-x-8 items-center">
        <Link
          to="/"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/names-of-allah"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300"
        >
          Names of Allah
        </Link>
        <Link
          to="/adhkar"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300"
        >
          Adhkar
        </Link>
        <Link
          to="/duas"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300"
        >
          Duas
        </Link>
        <Link
          to="/tajweed"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300"
        >
          Learn Tajweed
        </Link>
        <Link
          to="/kids-corner"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300"
        >
          Kids Corner
        </Link>
        <Link
          to="/favorites"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300"
        >
          Favorites
        </Link>
        <Link
          to="/islamic-calendar"
          className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] transition-all duration-300 flex items-center gap-2"
        >
          <FaCalendarAlt className="text-xl" />
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Surah..."
            className="w-64 px-4 py-2 text-gray-700 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:border-[#35767F] transition-all duration-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
