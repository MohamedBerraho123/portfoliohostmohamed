import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = ({ isDarkMode, isTransitioning }) => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        emailjs.init("QYOgbxA4W7aXK7Scd");
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        console.log('Form data:', {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            message: form.current.message.value
        });

        emailjs.sendForm(
            'service_vi1qgbi',
            'template_3wvc9mm',
            form.current,
            'QYOgbxA4W7aXK7Scd'
        )
        .then((result) => {
            console.log('Success:', result.text);
            setSubmitStatus('success');
            form.current.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: "Phone",
            value: "+212 6 79 86 93 72",
            
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            value: "berrahomohamedit@gmail.com",
            link: "berrahomohamedit@gmail.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Location",
            value: "Rabat, Morocco",
            link: "https://maps.google.com/?q=Rabat,Morocco"
        }
    ];

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
                        Get in Touch
                    </h1>
                    <p className={`text-lg mb-12 
                        ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        Have a project in mind? Let's discuss how we can work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 rounded-xl transition-all duration-300
                                ${isDarkMode ? 'bg-[#2f2f2f] hover:bg-[#3a3a3a]' : 'bg-white hover:bg-gray-50'}
                                hover:shadow-xl`}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4
                                ${isDarkMode ? 'bg-[#191919] text-white' : 'bg-gray-100 text-gray-900'}`}
                            >
                                {info.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                                {info.value}
                            </p>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`p-8 rounded-xl mb-8
                        ${isDarkMode ? 'bg-[#2f2f2f]' : 'bg-white'}`}
                >
                    <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={`block mb-2 text-sm font-medium
                                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                        ${isDarkMode 
                                            ? 'bg-[#191919] text-white focus:ring-white' 
                                            : 'bg-gray-100 text-gray-900 focus:ring-gray-900'}`}
                                />
                            </div>
                            <div>
                                <label className={`block mb-2 text-sm font-medium
                                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                        ${isDarkMode 
                                            ? 'bg-[#191919] text-white focus:ring-white' 
                                            : 'bg-gray-100 text-gray-900 focus:ring-gray-900'}`}
                                />
                            </div>
                        </div>
                        <div>
                            <label className={`block mb-2 text-sm font-medium
                                ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                required
                                rows="6"
                                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                    ${isDarkMode 
                                        ? 'bg-[#191919] text-white focus:ring-white' 
                                        : 'bg-gray-100 text-gray-900 focus:ring-gray-900'}`}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-lg font-medium transition-colors duration-200
                                    ${isDarkMode 
                                        ? 'bg-[#2f2f2f] hover:bg-[#3a3a3a] text-white' 
                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}
                                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>

                    {submitStatus === 'success' && (
                        <div className="mt-4 p-4 bg-gray-100 text-gray-900 rounded-lg">
                            Message sent successfully!
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mt-4 p-4 bg-gray-100 text-gray-900 rounded-lg">
                            Failed to send message. Please try again.
                        </div>
                    )}
                </motion.div>

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
            </div>
        </div>
    );
};

export default Contact;


