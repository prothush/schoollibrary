import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaCalendarAlt, FaLaptop, FaSearch, FaUsers, FaWifi } from 'react-icons/fa';

const LibraryServices = () => {

    return (
        <div>
            <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} viewport={{ once: true }}
             className="py-10 bg-base-100 w-11/12 mx-auto">
                <div className="mx-auto px-4 text-center">
                    <motion.h2 className="text-3xl font-bold mb-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>🎯 Our Library Services</motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        <div className="card bg-base-200 shadow-sm p-6">
                            <div className="text-4xl text-primary mx-auto"><FaBookReader /></div>
                            <h3 className="text-xl font-semibold my-2">Reading Room Access</h3>
                            <p className="text-sm text-gray-600">Enjoy a quiet and comfortable reading space.</p>
                        </div>
                        <div className="card bg-base-200 shadow-sm p-6">
                            <div className="text-4xl text-primary mx-auto"><FaWifi /></div>
                            <h3 className="text-xl font-semibold my-2">Free Wi-Fi</h3>
                            <p className="text-sm text-gray-600">Stay connected with high-speed internet.</p>
                        </div>
                        <div className="card bg-base-200 shadow-sm p-6">
                            <div className="text-4xl text-primary mx-auto"><FaLaptop /></div>
                            <h3 className="text-xl font-semibold my-2">Digital Library</h3>
                            <p className="text-sm text-gray-600">Access thousands of e-books and journals online.</p>
                        </div>
                        <div className="card bg-base-200 shadow-sm p-6">
                            <div className="text-4xl text-primary mx-auto"><FaUsers /></div>
                            <h3 className="text-xl font-semibold my-2">Book Clubs</h3>
                            <p className="text-sm text-gray-600">Join discussions and meet fellow readers.</p>
                        </div>
                        <div className="card bg-base-200 shadow-sm p-6">
                            <div className="text-4xl text-primary mx-auto"><FaCalendarAlt /></div>
                            <h3 className="text-xl font-semibold my-2">Events & Workshops</h3>
                            <p className="text-sm text-gray-600">Participate in library-hosted educational events.</p>
                        </div>
                        <div className="card bg-base-200 shadow-sm p-6">
                            <div className="text-4xl text-primary mx-auto"><FaSearch /></div>
                            <h3 className="text-xl font-semibold my-2">Research Help</h3>
                            <p className="text-sm text-gray-600">Get support from our librarians for academic research.</p>
                        </div>    
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LibraryServices;