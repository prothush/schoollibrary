import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const MainLayout = () => {

    const {state}= useNavigation()


    return (
        <div>
            <nav className='mx-auto mb-5 bg-[#00927F] text-white fixed top-0 left-0 right-0 z-50'>
                <Navbar></Navbar>
            </nav>
            <main className='my-20'>
                {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;