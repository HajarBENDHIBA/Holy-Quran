import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import logoImage from '../assets/logo.png';

const Navbar = ({ search, setSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoImage} 
              alt="Quran Icon" 
              className="w-14 h-14 object-contain"
            />
            <span className="text-3xl font-['Helvetica'] font-bold text-[#35767F] hover:text-[#3F8D98] transition duration-300">
              Holy Quran
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#3F8D98] focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
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
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/names-of-allah"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Names of Allah
          </Link>
          <Link
            to="/adhkar"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Adhkar
          </Link>
          <Link
            to="/duas"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Duas
          </Link>
          <Link
            to="/tajweed"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Learn Tajweed
          </Link>
          <Link
            to="/kids-corner"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Kids Corner
          </Link>
          <Link
            to="/favorites"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Favorites
          </Link>
          <Link
            to="/islamic-calendar"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#3F8D98] hover:bg-gray-50 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Islamic Calendar
          </Link>
          <div className="px-3 py-2">
            <input
              type="text"
              placeholder="Search Surah..."
              className="w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:border-[#35767F] transition-all duration-300"
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
