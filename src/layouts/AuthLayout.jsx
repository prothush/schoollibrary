import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { AuthContext } from '../Contexts/AuthProvider';

const AuthLayout = () => {

    const {theme}= use(AuthContext)



    return (
        <div data-theme={`${location.pathname ? theme: "light"}`}>
            <nav className='mx-auto mb-5 bg-[#00927F] text-white fixed top-0 left-0 right-0 z-50'>
                <Navbar></Navbar>
            </nav>
            <main className='py-20'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;