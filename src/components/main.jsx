import { useState, useEffect, React } from 'react';
import { FiPhone, FiDownload } from 'react-icons/fi';
import { FaRegStar, FaStar, FaMoon, FaSun } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import GitProfile from "../assets/gitprof.png"
import Lightprof from "../assets/lightprof.png"
import BookCallModal from './BookCallModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";

// Import all tech images
import reactLogo from '../assets/techs/React.png';
import angularLogo from '../assets/techs/Angular.png';
import laravelLogo from '../assets/techs/Laravel.png';
import pythonLogo from '../assets/techs/Python.png';
import csharpLogo from '../assets/techs/Csharp.png';

const MainContent = ({ isDarkMode, isTransitioning }) => {
    const [hover, setHover] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [isAnimatingTech, setIsAnimatingTech] = useState(false);
    const [allTechDisplayed, setAllTechDisplayed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const techStack = [
        { name: 'React', image: reactLogo },
        { name: 'Angular', image: angularLogo },
        { name: 'Laravel', image: laravelLogo },
        { name: 'Python', image: pythonLogo },
        { name: 'C#', image: csharpLogo },
        // ... add other tech stack items
    ];

    useEffect(() => {
        const handleScroll = (e) => {
            const currentPosition = window.scrollY;
            const isScrollUp = currentPosition < lastScrollPosition;
            setIsScrollingUp(isScrollUp);
            setLastScrollPosition(currentPosition);

            // If we're in the tech animation phase, prevent natural scrolling
            if (isAnimatingTech && !allTechDisplayed && !isScrollUp) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            setScrollPosition(currentPosition);

            // Check if we've reached the end of the GitProfile animation
            if (currentPosition >= 150 && currentPosition <= 600 && !isAnimatingTech && !isScrollUp) {
                setIsAnimatingTech(true);
                let currentItem = 0;
                const interval = setInterval(() => {
                    if (currentItem < techStack.length) {
                        setScrollPosition(prev => prev + 70);
                        currentItem++;
                    } else {
                        clearInterval(interval);
                        setAllTechDisplayed(true);
                        setIsAnimatingTech(false);
                    }
                }, 200);
            }

            // Reset states when scrolling back to top or past the section
            if (currentPosition < 150 || currentPosition > 600) {
                setAllTechDisplayed(false);
                setIsAnimatingTech(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: false });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isAnimatingTech, allTechDisplayed, lastScrollPosition]);

    // Prevent scrolling when in animation phase
    useEffect(() => {
        const preventScroll = (e) => {
            if (isAnimatingTech && !allTechDisplayed && !isScrollingUp) {
                e.preventDefault();
                return false;
            }
        };

        if (isAnimatingTech && !allTechDisplayed && !isScrollingUp) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [isAnimatingTech, allTechDisplayed, isScrollingUp]);

    // Calculate translations based on scroll position
    const translateX = (() => {
        if (scrollPosition <= 150) {
            return Math.min(scrollPosition * 2, 300);
        } else if (scrollPosition > 600) {
            return Math.max(300 - (scrollPosition - 600) * 2, 0);
        }
        return 300;
    })();

    const techSectionVisible = scrollPosition > 10 && scrollPosition < 600;

    // Icon animation variants
    const iconVariants = {
        initial: {
            opacity: 0,
            rotate: -180,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            rotate: 180,
            scale: 0.5,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <div className={`min-h-screen w-full transition-colors duration-500 ease-in-out overflow-x-hidden
            ${isDarkMode ? 'bg-[#191919] text-white' : 'bg-gray-50 text-gray-900'}
            ${isTransitioning ? 'pointer-events-none' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:pr-80">
                {/* Theme Icon with Animation */}
                <div className="fixed top-12 right-20 lg:right-80 text-4xl p-2 z-10">
                    <AnimatePresence mode="wait">
                        {isDarkMode ? (
                            <motion.div
                                key="moon"
                                variants={iconVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="cursor-pointer"
                            >
                                <FaMoon className="text-white w-20 h-20 transition-colors duration-500 ease-in-out" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                variants={iconVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="cursor-pointer"
                            >
                                <FaSun className="text-yellow-500 w-20 h-20 transition-colors duration-500 ease-in-out" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hero Section */}
                <div className="max-w-3xl pt-20">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        I'm Mohamed,
                        <br />
                        turning visions into
                        <br />
                        websites and mobile apps
                    </h1>
                    <p className="text-gray-400 text-lg mb-8">
                        Mohamed is a Junior FullStack Developer who designs and
                        develops innovative websites and mobile apps, delivering seamless
                        user experiences with a modern touch.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                        >
                            <FiPhone className="text-lg" />
                            <span>Book a Call</span>
                        </button>
                        <Link
                            to="/contact"
                            className="bg-[#252525] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#2a2a2a] transition-colors"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            {hover ? <HiOutlineMailOpen className="text-lg" /> : <HiOutlineMail className="text-lg" />}
                            <span>Get in Touch</span>
                        </Link>
                    </div>
                </div>

                {/* Featured Work Image */}
                <div className="relative w-full mt-20 mb-10">
                    <div
                        className="rounded-xl overflow-hidden transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        <img
                            src={isDarkMode ? GitProfile : Lightprof}
                            alt="Featured work - designer workspace"
                            className="w-full h-auto max-h-screen object-cover"
                        />
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className={`mt-20 transition-all duration-500 ${techSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
                    <div className="relative">
                        <div className="flex flex-col gap-12">
                            {techStack.map((tech, index) => {
                                const shouldShow = scrollPosition > 300 + (index * 50) && scrollPosition < 600;
                                const translateY = shouldShow
                                    ? Math.min((scrollPosition - (300 + index * 50)) * 0.5, 50)
                                    : 100;

                                return (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-6 transition-all duration-500"
                                        style={{
                                            transform: `translateY(${translateY}px)`,
                                            opacity: shouldShow ? 1 : 0
                                        }}
                                    >
                                        <img
                                            src={tech.image}
                                            alt={tech.name}
                                            className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                        <p className="text-lg text-gray-400">{tech.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Spacer to maintain scroll height */}
                <div className="h-20"></div>

                {/* Add the modal */}
                <BookCallModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    isDarkMode={isDarkMode}
                />
            </div>
        </div>
    );
};

export default MainContent;