import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLanguage, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiBlender, SiFigma, SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiC, SiReact, SiSwift } from 'react-icons/si';

const About = ({ isDarkMode, isTransitioning }) => {
    const skills = [
        { name: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
        { name: 'Adobe Illustrator', icon: <SiAdobeillustrator /> },
        { name: 'Blender', icon: <SiBlender /> },
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'C', icon: <SiC /> },
        { name: 'React JS', icon: <SiReact /> },
        { name: 'Swift', icon: <SiSwift /> },
    ];

    const languages = [
        { language: 'English', proficiency: 'Fluent' },
        { language: 'Arabic', proficiency: 'Fluent' },
        { language: 'French', proficiency: 'Intermediate' },
    ];

    const experience = [
        {
            title: '.NET/REACT Developer',
            company: 'JobInTech, Rabat',
            period: 'April 2024 – August 2024',
            technologies: 'C#, ASP.NET Web API, Microservices, React Js, Wordpress, Git, GitHub, Scrum, DevOps, Clean Architecture',
            skills: 'Problem-solving, Design patterns & Clean code, .NET development environment configuration, Building and consuming RESTful APIs, Agile methodology (Scrum), React Js fundamentals',
            projects: [
                'Static website to display my CV (HTML, CSS, and JavaScript)',
                'Interactive Polling Application (React Js, Firebase)',
                'UIR Azul ChatBot (React Js, .Net)',
                'Morocco Microsoft Community - Back-Office (React Js, .Net Clean Architecture)',
                'School Management System (React Js, .Net Clean Architecture)',
                'Project Boking UIR(React Js, .Net Clean Architecture)'
            ]
        },
        {
            title: 'Frontend Development Intern',
            company: 'AgriData Consulting, Agadir',
            period: 'April 2023 – May 2023',
        }
    ];

    const education = [
        {
            degree: "Bachelor's in Computer Science Engineering",
            institution: 'International University of Rabat',
            period: '2023 - 2024'
        },
        {
            degree: 'Specialized Technician in Digital Development',
            institution: 'Higher Institute of Applied Technology, Errachidia',
            period: '2021 - 2023'
        }
    ];

    return (
        <div className={`flex-1 ml-6 p-10 overflow-y-auto overflow-x-hidden scrollbar-hide
            transition-colors duration-500 ease-in-out
            ${isDarkMode ? 'bg-[#191919] text-white' : 'bg-gray-50 text-gray-900'}
            ${isTransitioning ? 'pointer-events-none' : ''}`}
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={`text-4xl font-bold mb-6
                        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        About Me
                    </h1>
                    <div className={`p-6 rounded-xl mb-8
                        ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}`}
                    >
                        <p className="text-lg leading-relaxed">
                        Graduated in Professional Bachelor's Degree in Computer Engineering, I
                        specialize in front-end development, with a focus
                        on React.js. Passionate about creating modern and efficient user
                        interfaces, I master the most recent web technologies. I am motivated by the
                        desire to develop intuitive and efficient solutions, adapted to the
                        needs of users.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`p-6 rounded-xl mb-8 ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}`}
                >
                    <div className="flex items-center mb-4">
                        <FaCode className="text-2xl mr-2" />
                        <h2 className="text-2xl font-bold">Technical Skills</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-3 rounded-lg
                                    ${isDarkMode ? 'bg-[#191919]' : 'bg-gray-100'}`}
                            >
                                <span className="text-xl mr-2">{skill.icon}</span>
                                <span className="text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Languages Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`p-6 rounded-xl mb-8 ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}`}
                >
                    <div className="flex items-center mb-4">
                        <FaLanguage className="text-2xl mr-2" />
                        <h2 className="text-2xl font-bold">Languages</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {languages.map((lang, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg
                                    ${isDarkMode ? 'bg-[#191919]' : 'bg-gray-100'}`}
                            >
                                <h3 className="font-semibold">{lang.language}</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {lang.proficiency}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={`p-6 rounded-xl mb-8 ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}`}
                >
                    <div className="flex items-center mb-4">
                        <FaBriefcase className="text-2xl mr-2" />
                        <h2 className="text-2xl font-bold">Professional Experience</h2>
                    </div>
                    {experience.map((exp, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {exp.company} | {exp.period}
                            </p>
                            {exp.technologies && (
                                <div className="mt-2">
                                    <p className="font-medium">Technologies used:</p>
                                    <p className={` ml-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {exp.technologies}
                                    </p>
                                </div>
                            )}
                            {exp.skills && (
                                <div className="mt-2">
                                    <p className="font-medium">Skills:</p>
                                    <p className={`ml-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {exp.skills}
                                    </p>
                                </div>
                            )}
                            {exp.projects && (
                                <div className="mt-2">
                                    <p className="font-medium">Projects:</p>
                                    <ul className="list-disc list-inside ml-6">
                                        {exp.projects.map((project, idx) => (
                                            <li key={idx} className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {project}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`p-6 rounded-xl mb-8 ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}`}
                >
                    <div className="flex items-center mb-4">
                        <FaGraduationCap className="text-2xl mr-2" />
                        <h2 className="text-2xl font-bold">Education and Training</h2>
                    </div>
                    {education.map((edu, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {edu.institution}
                            </p>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {edu.period}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;

