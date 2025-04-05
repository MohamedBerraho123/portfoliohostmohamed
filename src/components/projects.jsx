import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SMS from "../assets/projects/SMS.png";
import Chatbot from "../assets/projects/Chatbot.png";
import SportsZone from "../assets/projects/SportZones.png";
import Survey from "../assets/projects/Survey.png";
import Recipe from "../assets/projects/recipesharing.png"
import backofficeuir from "../assets/projects/backofficeuir.png"
import booking from "../assets/projects/booking.jpg"
import iptv from "../assets/projects/iptv.jpg"
import iptv2 from "../assets/projects/iptv2.jpg"
import Mansarrealstate from "../assets/projects/Mansarrealstate.jpg"
import TripsMorocco from "../assets/projects/TripsMorocco.jpg"
import Fireiptv from "../assets/projects/Fireiptv.jpg"
import Doggapp from "../assets/projects/Doggapp.jpg"



// Import all tech images

const Projects = ({ isDarkMode, isTransitioning }) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'websites', label: 'Websites' },
        { id: 'mobile', label: 'Mobile Apps' },
    ];

    // Sample projects data
    const projects = [
        {
            id: 1,
            name: "School Management System",
            type: "websites",
            image: SMS,
            description: "A comprehensive school management system built with React and Laravel.",
            technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"]
        },
        {
            id: 2,
            name: "Azul Chatbot",
            type: "websites",
            image: Chatbot,
            description: "An AI-powered chatbot for customer service.",
            technologies: ["Python", "TensorFlow", "React", "Node.js"]
        },
        {
            id: 3,
            name: "SportZones",
            type: "websites",
            image: SportsZone,
            description: "A sports facility booking platform.",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            id: 4,
            name: "Survey",
            type: "websites",
            image: Survey,
            description: "Online survey creation and management system.",
            technologies: ["Angular", "Firebase", "Bootstrap"]
        },
        {
            id: 5,
            name: "Recipe Sharing app",
            type: "mobile",
            image: Recipe,
            description: "Mobile app for sharing and discovering recipes.",
            technologies: ["React Native", "Firebase", "Redux"]
        },
        {
            id: 6,
            name: "back-office-uir",
            type: "websites",
            image: backofficeuir,
            description: "Back office management system for university.",
            technologies: ["Vue.js", "Laravel", "PostgreSQL"]
        },
        {
            id: 7,
            name: "booking",
            type: "websites",
            image: booking,
            description: "Hotel and accommodation booking platform.",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 8,
            name: "iptv",
            type: "websites",
            image: iptv,
            description: "IPTV streaming service platform.",
            technologies: ["React", "Node.js", "FFmpeg"]
        },
        {
            id: 9,
            name: "iptv 2",
            type: "websites",
            image: iptv2,
            description: "Enhanced version of IPTV platform.",
            technologies: ["React", "Node.js", "FFmpeg", "Redis"]
        },
        {
            id: 10,
            name: "Mansar-real-state",
            type: "websites",
            image: Mansarrealstate,
            description: "Real estate listing and management platform.",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 11,
            name: "Trips-Morocco",
            type: "websites",
            image: TripsMorocco,
            description: "Travel and tourism platform for Morocco.",
            technologies: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 12,
            name: "Fire-iptv",
            type: "websites",
            image: Fireiptv,
            description: "FireTV compatible IPTV application.",
            technologies: ["React Native", "Node.js", "FFmpeg"]
        },
        {
            id: 13,
            name: "Dogg-App",
            type: "mobile",
            image: Doggapp,
            description: "Pet care and dog walking service app.",
            technologies: ["React Native", "Firebase", "Redux"]
        }
    ];

    // Filter projects based on active filter
    const filteredProjects = projects.filter(project =>
        activeFilter === 'all' || project.type === activeFilter
    );

    return (
        <div className={`min-h-screen w-full lg:pr-72 transition-colors duration-500 ease-in-out
            ${isDarkMode ? 'bg-[#191919] text-white' : 'bg-gray-50 text-gray-900'}
            ${isTransitioning ? 'pointer-events-none' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Projects
                    </h1>
                    <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-400">
                        Here are some of the projects I've worked on.
                    </p>
                </motion.div>

                {/* Filter Navigation */}
                <div className="flex flex-wrap gap-4 mb-6 sm:mb-8">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${activeFilter === filter.id
                                    ? 'bg-[#252525] text-white'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`group relative rounded-xl overflow-hidden cursor-pointer
                                ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'} 
                                shadow-lg hover:shadow-xl transition-all duration-300`}
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ y: -5 }}
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className={`text-lg font-semibold mb-2
                                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                                >
                                    {project.name}
                                </h3>
                                <p className={`text-sm mb-3
                                    ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                >
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`text-xs px-2 py-1 rounded-full
                                                ${isDarkMode
                                                    ? 'bg-[#191919] text-gray-300'
                                                    : 'bg-gray-100 text-gray-700'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Project Modal */}
                {selectedProject && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={`relative max-w-2xl w-full rounded-2xl overflow-hidden
                                ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className={`text-2xl font-bold mb-4
                                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                                >
                                    {selectedProject.name}
                                </h2>
                                <p className={`mb-4
                                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                >
                                    {selectedProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`text-sm px-3 py-1 rounded-full
                                                ${isDarkMode
                                                    ? 'bg-[#191919] text-gray-300'
                                                    : 'bg-gray-100 text-gray-700'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <button
                                className={`absolute top-4 right-4 text-3xl
                                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                                onClick={() => setSelectedProject(null)}
                            >
                                &times;
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;