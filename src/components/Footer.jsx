import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#35767F]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#3F8D98] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/islamic-calendar" className="text-gray-600 hover:text-[#3F8D98] transition-colors duration-300">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/adhkar" className="text-gray-600 hover:text-[#3F8D98] transition-colors duration-300">
                  Adhkar
                </Link>
              </li>
              <li>
                <Link to="/duas" className="text-gray-600 hover:text-[#3F8D98] transition-colors duration-300">
                  Duas
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#35767F]">About</h3>
            <p className="text-gray-600">
              The Holy Quran is a comprehensive application that provides access to the Quran, Islamic supplications, and daily adhkar. Our mission is to make Islamic knowledge easily accessible to everyone.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#35767F]">Contact</h3>
            <p className="text-gray-600">
              For any questions or suggestions, please feel free to reach out to us.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Holy Quran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;