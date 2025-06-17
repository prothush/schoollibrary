import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

const MainLayout = () => {

    const {state}= useNavigation()


    return (
        <div>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main>
                {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;