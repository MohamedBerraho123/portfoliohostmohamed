import { useState, useEffect } from 'react';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import GitProfile from "../assets/gitprof.png";
import Lightprof from "../assets/lightprof.png";
import BookCallModal from './BookCallModal';
import { Link } from "react-router-dom";

const MainContent = ({ isDarkMode, isTransitioning }) => {
    const [hover, setHover] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={`min-h-screen w-full transition-colors duration-500 ease-in-out overflow-x-hidden
            ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}
            ${isTransitioning ? 'pointer-events-none' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="max-w-3xl pt-20">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        I'm Mohamed,
                        <br />
                        turning visions into
                        <br />
                        websites and mobile apps
                    </h1>
                    <p className="text-gray-500 text-lg mb-6">
                        A Junior FullStack Developer creating innovative websites and mobile apps, delivering seamless user experiences with a modern touch.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                        >
                            <FiPhone className="text-lg" />
                            <span>Book a Call</span>
                        </button>
                        <Link
                            to="/contact"
                            className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
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
                    <div className="rounded-xl overflow-hidden transition-transform duration-300 ease-out shadow-lg">
                        <img
                            src={isDarkMode ? GitProfile : Lightprof}
                            alt="Featured work - designer workspace"
                            className="w-full h-auto max-h-screen object-cover"
                        />
                    </div>
                </div>

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