import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HiHome, HiCollection, HiCube, HiShoppingCart, HiNewspaper, HiUser, HiMail, HiSearch } from 'react-icons/hi'
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
  
  const handleThemeChange = (newMode) => {
    setIsTransitioning(true)
    setIsDarkMode(newMode)
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 500)
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
      <div className={`min-h-screen flex transition-colors duration-500 ease-in-out
        ${isDarkMode ? 'dark bg-[#191919]' : 'bg-gray-50'}`}
      >
        {/* Sidebar */}
        <div className="w-72 flex-shrink-0">
          <Sidebar 
            isDarkMode={isDarkMode} 
            setIsDarkMode={handleThemeChange}
            isTransitioning={isTransitioning}
          />
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<MainContent isDarkMode={isDarkMode} isTransitioning={isTransitioning}/>} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} isTransitioning={isTransitioning}/>} />
          <Route path="/services" element={<Services isDarkMode={isDarkMode} isTransitioning={isTransitioning}/>} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} isTransitioning={isTransitioning}/>} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} isTransitioning={isTransitioning}/>} />
          <Route path="/blog" element={<Blog isDarkMode={isDarkMode} isTransitioning={isTransitioning}/>} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
