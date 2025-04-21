import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ search, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/src/assets/logo.png" 
            alt="Quran Icon" 
            className="w-14 h-14 object-contain"
          />
          <span className="text-3xl font-['Helvetica'] font-bold text-[#35767F] hover:text-[#3F8D98] transition duration-300">
            Holy Quran
          </span>
        </Link>

        {/* Hamburger Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#35767F] text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links */}
        <div className={`flex-col lg:flex-row lg:flex space-y-4 lg:space-y-0 lg:space-x-8 items-center absolute lg:static top-20 left-0 right-0 bg-white lg:bg-transparent p-6 lg:p-0 shadow-md lg:shadow-none ${isOpen ? "flex" : "hidden"} transition-all duration-300`}>
          <Link to="/" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98]" onClick={handleLinkClick}>Home</Link>
          <Link to="/names-of-allah" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98]" onClick={handleLinkClick}>Names of Allah</Link>
          <Link to="/adhkar" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98]" onClick={handleLinkClick}>Adhkar</Link>
          <Link to="/duas" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98]" onClick={handleLinkClick}>Duas</Link>
          <Link to="/tajweed" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98]" onClick={handleLinkClick}>Learn Tajweed</Link>
          <Link to="/kids-corner" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98]" onClick={handleLinkClick}>Kids Corner</Link>
          <Link to="/favorites" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98]" onClick={handleLinkClick}>Favorites</Link>
          <Link to="/islamic-calendar" className="text-lg font-medium text-gray-700 hover:text-[#3F8D98] flex items-center gap-2" onClick={handleLinkClick}>
            <FaCalendarAlt className="text-xl" />
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Surah..."
              className="w-full lg:w-64 px-4 py-2 text-gray-700 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:border-[#35767F] transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
