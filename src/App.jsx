import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HiHome, HiCollection, HiCube, HiShoppingCart, HiNewspaper, HiUser, HiMail, HiSearch, HiMenu, HiX } from 'react-icons/hi'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import Sidebar from './components/sidebar'
import MainContent from './components/main'
import Projects from './components/projects'
import Services from './components/services'
import Contact from './components/contact'
import About from './components/about'
import Blog from './components/blog'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleThemeChange = (newMode) => {
    setIsTransitioning(true)
    setIsDarkMode(newMode)
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { icon: <HiHome className="w-5 h-5" />, label: 'Home' },
    { icon: <HiCollection className="w-5 h-5" />, label: 'Projects' },
    { icon: <HiCube className="w-5 h-5" />, label: 'Services' },
    { icon: <HiShoppingCart className="w-5 h-5" />, label: 'Store' },
    { icon: <HiNewspaper className="w-5 h-5" />, label: 'Blog' },
    { icon: <HiUser className="w-5 h-5" />, label: 'About' },
    { icon: <HiMail className="w-5 h-5" />, label: 'Contact' },
  ]

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-500 ease-in-out
        ${isDarkMode ? 'dark bg-[#191919]' : 'bg-gray-50'}`}
      >
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-opacity-80 backdrop-blur-sm
            ${isDarkMode ? 'bg-[#252525] text-white' : 'bg-white text-gray-900'}"
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Main Content */}
        <main className="flex-1 relative">
          <Routes>
            <Route path="/" element={<MainContent isDarkMode={isDarkMode} isTransitioning={isTransitioning} />} />
            <Route path="/projects" element={<Projects isDarkMode={isDarkMode} isTransitioning={isTransitioning} />} />
            <Route path="/services" element={<Services isDarkMode={isDarkMode} isTransitioning={isTransitioning} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} isTransitioning={isTransitioning} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} isTransitioning={isTransitioning} />} />
            <Route path="/blog" element={<Blog isDarkMode={isDarkMode} isTransitioning={isTransitioning} />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full lg:w-72 transition-all duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'w-64 translate-x-0' : 'w-0 translate-x-full lg:w-72 lg:translate-x-0'}`}
        >
          <Sidebar
            isDarkMode={isDarkMode}
            setIsDarkMode={handleThemeChange}
            isTransitioning={isTransitioning}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </div>
    </Router>
  )
}

export default App
