import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className="bg-black text-white py-10">
            <div className="w-11/12 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-primary mb-2 text-white">School Library</h2>
                    <p>Empowering students through knowledge. A place to learn, grow, and discover the world of books.</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="link link-hover">Home</Link></li>
                        <li><Link to="/allBooks" className="link link-hover">All Books</Link></li>
                        <li><Link to="/addBooks" className="link link-hover">Add Books</Link></li>
                        <li><Link to="/borrowedBooks" className="link link-hover">Borrowed Books</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://www.facebook.com/prothush" target='_blank' className="hover:text-primary"><FaFacebook /></a>
                        <a href="https://www.twitter.com/prothush" target='_blank' className="hover:text-primary"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 text-sm border-t pt-4 border-base-300">
                © 2025 School Library. All rights reserved.
            </div>

        </div>
    );
};

export default Footer;