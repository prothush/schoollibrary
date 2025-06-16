import React from 'react';
import { FaBookReader, FaCalendarAlt, FaLaptop, FaSearch, FaUsers, FaWifi } from 'react-icons/fa';

const LibraryServices = () => {

    return (
        <div>
            <div className="py-10 bg-base-100 w-11/12 mx-auto">
                <div className="mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">🎯 Our Library Services</h2>
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
            </div>
        </div>
    );
};

export default LibraryServices;