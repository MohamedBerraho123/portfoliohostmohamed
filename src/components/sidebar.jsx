import React from 'react';
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaGithub, FaLinkedin, FaInstagram
} from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isDarkMode, setIsDarkMode, isTransitioning, isMobileMenuOpen, toggleMobileMenu }) => {
  const location = useLocation();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <div className={`w-full lg:w-72 h-screen bg-[#191919] text-gray-400 flex flex-col fixed lg:relative
      transition-colors duration-500 ease-in-out
      ${isTransitioning ? 'pointer-events-none' : ''}`}
    >
      {/* Logo */}
      <div className="p-4 mb-8">
        <h1 className="text-xl font-bold text-white">portfolio</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`flex items-center px-4 py-2 text-sm transition-colors duration-200
                ${location.pathname === '/' ? 'text-white bg-[#252525]' : 'text-gray-400 hover:text-white'}`}
              onClick={handleLinkClick}
            >
              <FaHome className="w-4 h-4 mr-3" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`flex items-center px-4 py-2 text-sm transition-colors duration-200
                ${location.pathname === '/projects' ? 'text-white bg-[#252525]' : 'text-gray-400 hover:text-white'}`}
              onClick={handleLinkClick}
            >
              <FaProjectDiagram className="w-4 h-4 mr-3" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`flex items-center px-4 py-2 text-sm transition-colors duration-200
                ${location.pathname === '/about' ? 'text-white bg-[#252525]' : 'text-gray-400 hover:text-white'}`}
              onClick={handleLinkClick}
            >
              <FaUser className="w-4 h-4 mr-3" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`flex items-center px-4 py-2 text-sm transition-colors duration-200
                ${location.pathname === '/contact' ? 'text-white bg-[#252525]' : 'text-gray-400 hover:text-white'}`}
              onClick={handleLinkClick}
            >
              <FaEnvelope className="w-4 h-4 mr-3" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center space-x-6 ml-30">
                        <a
                            href="https://github.com/MohamedBerraho123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xl transition-colors duration-200
                                ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohamed-berraho-666213240/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xl transition-colors duration-200
                                ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/simo_dge/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xl transition-colors duration-200
                                ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            <FaInstagram />
                        </a>
                    </div>      

      {/* Dark Mode Toggle */}
      <div className="p-4 border-t border-[#252525]">
        <button
          onClick={toggleDarkMode}
          className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200"
        >
          <span className="flex items-center">
            🌙 Light Mode
          </span>
        </button>
      </div>
      
    </div>
  );
};

export default Sidebar;