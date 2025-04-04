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

        },
        {
            id: 2,
            name: "Azul Chatbot",
            type: "websites",
            image: Chatbot,

        },
        {
            id: 3,
            name: "SportZones",
            type: "websites",
            image: SportsZone,

        },
        {
            id: 4,
            name: "Survey",
            type: "websites",
            image: Survey,

        },
        {
            id: 5,
            name: "Recipe Sharing app",
            type: "mobile",
            image: Recipe,

        },
        {
            id: 6,
            name: "back-office-uir",
            type: "websites",
            image: backofficeuir,

        },
        {
            id: 7,
            name: "booking",
            type: "websites",
            image: booking,

        },
        {
            id: 8,
            name: "iptv",
            type: "websites",
            image: iptv,

        },
        {
            id: 9,
            name: "iptv 2",
            type: "websites",
            image: iptv2,

        },
        {
            id: 10,
            name: "Mansar-real-state",
            type: "websites",
            image: Mansarrealstate,

        },
        {
            id: 11,
            name: "Trips-Morocco",
            type: "websites",
            image: TripsMorocco,

        },
        {
            id: 12,
            name: "Fire-iptv",
            type: "websites",
            image: Fireiptv,

        },
        {
            id: 13,
            name: "Dogg-App",
            type: "mobile",
            image: Doggapp,

        }
    ];

    // Filter projects based on active filter
    const filteredProjects = projects.filter(project =>
        activeFilter === 'all' || project.type === activeFilter
    );

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
                        Projects
                    </h1>
                    <p className={`text-lg mb-12 
                        ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        Here are some of the projects I've worked on.
                    </p>
                </motion.div>

                {/* Filter Navigation */}
                <div className="flex gap-6 mb-8">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 ${activeFilter === filter.id
                                ? isDarkMode
                                    ? 'bg-[#2f2f2f] text-white'
                                    : 'bg-gray-200 text-gray-900'
                                : isDarkMode
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-2 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`group rounded-xl overflow-hidden transition-all duration-300
                                ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}
                                hover:transform hover:scale-[1.02] hover:shadow-xl`}
                        >
                            {/* Project Image */}
                            <div className="relative h-[300px] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-contain transition-transform duration-300
                                        group-hover:scale-105"
                                />
                            </div>
                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className={`text-xl font-semibold mb-2
                                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {project.name}
                                </h3>
                                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm
                                    ${isDarkMode
                                        ? 'bg-gray-700 text-gray-300'
                                        : 'bg-gray-200 text-gray-700'}`}>
                                    {project.type}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;