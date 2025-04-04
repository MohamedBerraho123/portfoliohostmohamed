import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const BookCallModal = ({ isOpen, onClose, isDarkMode }) => {
    if (!isOpen) return null;

    // Add state for form fields
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate required fields
        if (!userName || !userEmail || !preferredDate || !phoneNumber) {
            alert("Please fill in all required fields");
            return;
        }

        const formData = {
            name: userName,
            email: userEmail,
            date: preferredDate,
            phone: phoneNumber,
            message: userMessage,
        };

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzVItFSldUrBVY9Y8QLknRpOtWKP7Q-qSnfPQS_BOwqavyTpTvzbiFzHIB5-VwYB2FAxQ/exec", {
                method: "POST",
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Since we're using no-cors, we can't check response.ok
            // Instead, we'll assume success if we get here
            alert("Call scheduled successfully!");
            // Reset form
            setUserName('');
            setUserEmail('');
            setPreferredDate('');
            setPhoneNumber('');
            setUserMessage('');
            onClose();
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to schedule call. Please try again later.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`relative w-full max-w-md p-6 rounded-2xl shadow-xl transform transition-all
                ${isDarkMode ? 'bg-[#2f2f2f] text-white' : 'bg-white text-gray-900'}`}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <IoClose size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-6">Book a Call</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className={`block mb-2 text-sm font-medium
                            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Your Name *
                        </label>
                        <input 
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                ${isDarkMode 
                                    ? 'bg-[#191919] text-white focus:ring-blue-500' 
                                    : 'bg-gray-100 text-gray-900 focus:ring-blue-400'}`}
                        />
                    </div>

                    <div>
                        <label className={`block mb-2 text-sm font-medium
                            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Email Address *
                        </label>
                        <input 
                            required
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            type="email"
                            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                ${isDarkMode 
                                    ? 'bg-[#191919] text-white focus:ring-blue-500' 
                                    : 'bg-gray-100 text-gray-900 focus:ring-blue-400'}`}
                        />
                    </div>

                    <div>
                        <label className={`block mb-2 text-sm font-medium
                            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Preferred Date *
                        </label>
                        <input 
                            required
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            type="date"
                            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                ${isDarkMode 
                                    ? 'bg-[#191919] text-white focus:ring-blue-500' 
                                    : 'bg-gray-100 text-gray-900 focus:ring-blue-400'}`}
                        />
                    </div>

                    <div>
                        <label className={`block mb-2 text-sm font-medium
                            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Phone Number *
                        </label>
                        <input 
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="tel"
                            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                ${isDarkMode 
                                    ? 'bg-[#191919] text-white focus:ring-blue-500' 
                                    : 'bg-gray-100 text-gray-900 focus:ring-blue-400'}`}
                        />
                    </div>

                    <div>
                        <label className={`block mb-2 text-sm font-medium
                            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                            Message (Optional)
                        </label>
                        <textarea 
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            rows="3"
                            className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                                ${isDarkMode 
                                    ? 'bg-[#191919] text-white focus:ring-blue-500' 
                                    : 'bg-gray-100 text-gray-900 focus:ring-blue-400'}`}
                        />
                    </div>

                    <button 
                        type="submit"
                        className={`w-full py-3 rounded-lg font-medium transition-colors duration-200
                            ${isDarkMode 
                                ? 'bg-[#2f2f2f] hover:bg-[#3a3a3a] text-white' 
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                            }`}
                    >
                        Schedule Call
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookCallModal; 