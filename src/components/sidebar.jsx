import React, { useState } from 'react';
import { 
  FaHome, 
  FaProjectDiagram, 
  FaStore, 
  FaBlog, 
  FaUser, 
  FaEnvelope, 
  FaInstagram,
  FaSearch
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import Profile from '../assets/avatar.png'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';





const Sidebar = ({ isDarkMode, setIsDarkMode, isTransitioning }) => {
  const location = useLocation();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`w-72 h-screen text-gray-400 flex flex-col fixed
      transition-colors duration-500 ease-in-out
      ${isDarkMode ? 'bg-[#252525]' : 'bg-white'}
      ${isTransitioning ? 'pointer-events-none' : ''}`}
    >
      {/* Profile */}
      <div className="flex items-center p-4">
        <div className="relative">
          <img 
            src={Profile} 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className={`absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2
            transition-colors duration-500 ease-in-out
            ${isDarkMode ? 'border-[#191919]' : 'border-white'}`}
          ></div>
        </div>
        <div className="ml-3">
          <h2 className={`font-medium transition-colors duration-500 ease-in-out
            ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Mohamed Berraho
          </h2>
          <p className="text-sm">Full Stack Developer</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mt-4 flex-1">
        <ul className="px-3">
          <li className={`rounded-xl mb-2 transition-colors duration-500 ease-in-out ${
            location.pathname === '/' 
              ? `${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-gray-200 text-gray-900'}`
              : ''
          }`}>
            <Link to="/" className="flex items-center px-4 py-3">
              <FaHome className="mr-4" />
              <span>Home</span>
            </Link>
          </li>
          <li className={`rounded-xl mb-2 transition-colors duration-500 ease-in-out ${
            location.pathname === '/projects'
              ? `${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-gray-200 text-gray-900'}`
              : ''
          }`}>
            <Link to="/projects" className="flex items-center px-4 py-3">
              <FaProjectDiagram className="mr-4" />
              <span>Projects</span>
            </Link>
          </li>
          <li className={`rounded-xl mb-2 transition-colors duration-500 ease-in-out ${
            location.pathname === '/services'
              ? `${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-gray-200 text-gray-900'}`
              : ''
          }`}>
            <Link to="/services" className="flex items-center px-4 py-3">
              <IoMdSettings className="mr-4" />
              <span>Services</span>
            </Link>
          </li>
          <li className={`rounded-xl mb-2 transition-colors duration-500 ease-in-out ${
            location.pathname === '/blog'
                ? `${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-gray-200 text-gray-900'}`
                : ''
          }`}>
            <Link to="/blog" className="flex items-center px-4 py-3">
              <FaBlog className="mr-4" />
              <span>Blog</span>
            </Link>
          </li>
          <li className={`rounded-xl mb-2 transition-colors duration-500 ease-in-out ${
            location.pathname === '/about'
              ? `${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-gray-200 text-gray-900'}`
              : ''
          }`}>
            <Link to="/about" className="flex items-center px-4 py-3">
              <FaUser className="mr-4" />
              <span>About</span>
            </Link>
          </li>
          <li className={`rounded-xl mb-2 transition-colors duration-500 ease-in-out ${
            location.pathname === '/contact'
                ? `${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-gray-200 text-gray-900'}`
                : ''
          }`}>
            <Link to="/contact" className="flex items-center px-4 py-3">
              <FaEnvelope className="mr-4" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Connect Section */}
      <div className="px-4 pt-6 pb-2">
        <p className="text-sm mb-2">Let's Connect!</p>
        <div className="flex space-x-4 mb-6">
            
          <a href="https://github.com/MohamedBerraho123" 
            className="hover:text-white transition-colors duration-500 ease-in-out">
            <FaGithub size={20} />
          </a>
            
          
          <a href="https://www.linkedin.com/in/mohamed-berraho-666213240/" 
            className="hover:text-white transition-colors duration-500 ease-in-out">
            <CiLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/simo_dge/" 
            className="hover:text-white transition-colors duration-500 ease-in-out">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <MdOutlineDarkMode className="mr-2" />
          <span>Dark Mode</span>
        </div>
        <button 
          onClick={toggleDarkMode}
          className={`w-12 h-6 rounded-full p-1 flex items-center transition-all duration-500 ease-in-out
            ${isDarkMode ? 'bg-blue-600 justify-end' : 'bg-gray-700 justify-start'}`}
        >
          <div className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-500"></div>
        </button>
      </div>

      
      
    </div>
  );
};

export default Sidebar;