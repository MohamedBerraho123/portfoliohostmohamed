import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import article images
import reactImage from '../assets/articles/react.png';
import apiImage from '../assets/articles/rest.png';
import uiuxImage from '../assets/articles/ui.png';
import pythonImage from '../assets/articles/py.png';

const Blog = ({ isDarkMode, isTransitioning }) => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const articles = [
        {
            title: "Building Responsive Web Applications with React",
            date: "March 15, 2024",
            excerpt: "In this article, I will share my journey of building responsive web applications using React. I will cover the best practices and tools that can help you create efficient user interfaces.",
            content: (
                <div>
                    <p>
                        Building responsive web applications with React has been a transformative experience for me. React's component-based architecture allows for reusable UI components, making it easier to manage and scale applications. I started by setting up my development environment with tools like Create React App, which simplifies the initial setup.
                    </p><br/>
                    <p>
                        As I delved deeper, I learned about state management using hooks like <code>useState</code> and <code>useEffect</code>, which are essential for handling dynamic data. These hooks allow functional components to manage state and side effects, making the code cleaner and more readable.
                    </p>
                    <p>
                        Additionally, I explored libraries like React Router for navigation and Axios for API calls. React Router enables seamless navigation between different components without reloading the page, enhancing the user experience. Axios, on the other hand, simplifies the process of making HTTP requests to fetch or send data to a server.
                    </p><br/>
                    <p>
                        The ability to create responsive designs using CSS frameworks like Bootstrap or Tailwind CSS further enhanced my projects. These frameworks provide pre-defined classes that make it easy to create layouts that adapt to different screen sizes. I also learned about media queries in CSS, which allow for more granular control over styles based on the viewport size.
                    </p><br/>
                    <p>
                        Overall, React has empowered me to build modern, efficient applications that provide a seamless user experience across devices. The community support and extensive documentation available make it an excellent choice for both beginners and experienced developers.
                    </p>
                </div>
            ),
            image: reactImage,
        },
        {
            title: "Understanding RESTful APIs",
            date: "February 10, 2024",
            excerpt: "RESTful APIs are essential for modern web applications. In this post, I will explain what RESTful APIs are, how they work, and how to consume them in your applications.",
            content: (
                <div>
                    <p>
                        RESTful APIs, or Representational State Transfer APIs, are a crucial part of modern web development. They allow different software applications to communicate over the internet using standard HTTP methods like GET, POST, PUT, and DELETE. In this article, I will explain the principles of REST, which emphasize stateless communication and resource-based interactions.
                    </p><br/>
                    <p>
                        Each resource is identified by a unique URL, making it easy to access and manipulate data. For example, a user resource might be accessed at <code>https://api.example.com/users</code>. The use of standard HTTP methods allows developers to perform CRUD (Create, Read, Update, Delete) operations on these resources.
                    </p><br/>
                    <p>
                        I will also cover how to design a RESTful API, including best practices for structuring endpoints and handling responses. A well-designed API should be intuitive and easy to use, with clear documentation that outlines the available endpoints, request parameters, and response formats.
                    </p><br/>
                    <p>
                        Additionally, I will demonstrate how to consume RESTful APIs in a React application using Axios, showcasing how to fetch and display data dynamically. Axios provides a simple and powerful way to make HTTP requests, and it supports promises, making it easy to handle asynchronous operations.
                    </p>
                    <p><br/>
                        Understanding RESTful APIs is essential for any developer looking to build scalable and efficient web applications. They form the backbone of modern web services and enable seamless integration between different systems.
                    </p>
                </div>
            ),
            image: apiImage,
        },
        {
            title: "The Importance of UI/UX Design",
            date: "January 5, 2024",
            excerpt: "User Interface and User Experience design play a crucial role in the success of any application. This article discusses the principles of effective UI/UX design.",
            content: (
                <div>
                    <p>
                        User Interface (UI) and User Experience (UX) design are critical components of successful applications. UI focuses on the visual elements of an application, such as layout, colors, and typography, while UX encompasses the overall experience a user has when interacting with the application.
                    </p><br/>
                    <p>
                        In this article, I will discuss the principles of effective UI/UX design, including usability, accessibility, and user-centered design. A well-designed UI enhances the aesthetic appeal of an application, while a positive UX ensures that users can navigate and interact with the application effortlessly.
                    </p><br/>
                    <p>
                        Usability refers to how easy and intuitive an application is to use. It involves creating clear navigation paths, minimizing the number of steps required to complete tasks, and providing helpful feedback to users. Accessibility ensures that all users, including those with disabilities, can use the application effectively.
                    </p><br/>
                    <p>
                        I will also explore tools and methodologies for conducting user research, creating wireframes, and prototyping designs. User research helps designers understand the needs and preferences of their target audience, while wireframes provide a visual representation of the application's layout and functionality.
                    </p><br/>
                    <p>
                        Ultimately, investing in UI/UX design leads to higher user satisfaction and retention, making it a vital aspect of any development project. A well-designed application not only attracts users but also keeps them engaged and encourages them to return.
                    </p>
                </div>
            ),
            image: uiuxImage,
        },
        {
            title: "Getting Started with Python for Web Development",
            date: "December 20, 2023",
            excerpt: "Python is a versatile language that can be used for web development. In this article, I will introduce you to the basics of using Python for building web applications.",
            content: (
                <div>
                    <p>
                        Python is a versatile programming language that has gained immense popularity in web development. In this article, I will introduce you to the basics of using Python for building web applications. I will start by discussing the various frameworks available, such as Django and Flask, which simplify the development process.
                    </p><br/>
                    <p>
                        Django is known for its robustness and built-in features, making it an excellent choice for larger applications. It follows the "batteries-included" philosophy, providing everything you need to build a web application out of the box. Flask, on the other hand, offers flexibility for smaller applications and allows developers to choose the components they want to use.
                    </p><br/>
                    <p>
                        I will guide you through setting up a development environment, creating your first web application, and understanding the MVC (Model-View-Controller) architecture. Additionally, I will cover how to connect your application to a database using ORM (Object-Relational Mapping) tools, which simplify database interactions.
                    </p><br/>
                    <p>
                        By the end of this article, you will have a solid foundation to start your journey in Python web development. Whether you choose Django or Flask, Python provides a powerful and efficient way to build web applications that can scale with your needs.
                    </p>
                </div>
            ),
            image: pythonImage,
        }
    ];

    const handleReadMore = (article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

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
                    <h1 className={`text-4xl font-bold mb-6
                        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Blog
                    </h1>
                    <p className={`text-lg mb-12 
                        ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        Welcome to my blog! Here, I share insights, tutorials, and experiences related to web development and design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            className={`p-6 rounded-lg transition-colors duration-300
                                ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'} hover:shadow-xl`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h2 className={`text-2xl font-bold mb-2
                                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                            >
                                {article.title}
                            </h2>
                            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {article.date}
                            </p>
                            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {article.excerpt}
                            </p>
                            <button 
                                onClick={() => handleReadMore(article)}
                                className={`hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}
                            >
                                Read more
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for displaying the full article */}
                {selectedArticle && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className={`relative w-full max-w-3xl p-8 rounded-2xl shadow-xl transform transition-all
                            ${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-white text-gray-900'}`}
                        >
                            <button 
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
                            <p className="text-sm mb-2">{selectedArticle.date}</p>
                            <img src={selectedArticle.image} alt={selectedArticle.title} className="mb-4 rounded-lg w-full h-48 object-cover" />
                            <div className="mb-4">{selectedArticle.content}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;


