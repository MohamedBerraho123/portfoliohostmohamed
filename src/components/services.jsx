import {React, useState} from 'react';
import { FaCode, FaMobile, FaPaintBrush, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Services = ({ isDarkMode, isTransitioning }) => {
    const services = [
        {
            icon: <FaCode size={40} />,
            title: "Web Development",
            description: "Building responsive and dynamic websites using modern technologies like React, Angular, and Laravel.",
            features: [
                "Custom Web Applications",
                "E-commerce Solutions",
                "API Integration",
                "Performance Optimization"
            ]
        },
        {
            icon: <FaMobile size={40} />,
            title: "Mobile Development",
            description: "Creating native and cross-platform mobile applications that deliver exceptional user experiences.",
            features: [
                "iOS & Android Apps",
                "Cross-platform Solutions",
                "App Store Deployment",
                "Mobile UI/UX Design"
            ]
        },
        {
            icon: <FaPaintBrush size={40} />,
            title: "Web Design",
            description: "Crafting beautiful and intuitive web interfaces that engage users and drive conversions.",
            features: [
                "Responsive Design",
                "UI/UX Design",
                "Website Redesign",
                "Brand Integration"
            ]
        },
        {
            icon: <FaTools size={40} />,
            title: "Mobile App Design",
            description: "Designing user-friendly mobile interfaces that provide seamless experiences across devices.",
            features: [
                "App Wireframing",
                "Interactive Prototypes",
                "User Flow Design",
                "Material/iOS Guidelines"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.3
            }
        }
    };
    const [hover, setHover] = useState(false);

    return (
        <div className={`flex-1 ml-6 p-10 overflow-y-auto overflow-x-hidden scrollbar-hide
            transition-colors duration-500 ease-in-out
            ${isDarkMode ? 'bg-[#191919] text-white' : 'bg-gray-50 text-gray-900'}
            ${isTransitioning ? 'pointer-events-none' : ''}`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={`text-4xl font-bold mb-4
                        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Services
                    </h1>
                    <p className={`text-lg mb-12 
                        ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        Transforming ideas into digital reality with comprehensive development and design solutions.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className={`p-6 rounded-xl transition-colors duration-300
                                ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}
                                hover:shadow-xl`}
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6
                                ${isDarkMode ? 'bg-[#191919] text-white' : 'bg-gray-100 text-gray-900'}`}
                            >
                                {service.icon}
                            </div>
                            
                            <h3 className={`text-2xl font-bold mb-4
                                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                            >
                                {service.title}
                            </h3>
                            
                            <p className={`mb-6
                                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                            >
                                {service.description}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li 
                                        key={idx}
                                        className={`flex items-center
                                            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                    >
                                        <span className={`w-2 h-2 rounded-full mr-3
                                            ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                    <Link
                        to="/contact"
                        className={`flex items-center mx-auto gap-2 px-6 py-3 rounded-lg transition duration-200
                            ${isDarkMode 
                                ? 'bg-[#2f2f2f] hover:bg-[#3a3a3a] text-white' 
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                            }`}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {hover ? <HiOutlineMailOpen className="text-lg" /> : <HiOutlineMail className="text-lg" />}
                        <span>Get in Touch</span>
                    </Link>
                    <div className="text-center">
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Or connect with me on social media
                    </p>
                    <div className="flex justify-center space-x-6">
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
                </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;



