import React from 'react';
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center h-[90vh] space-y-5'>

                <img src="img/404.png" alt="" />
                <h1 className='text-3xl md:text-4xl lg:text-7xl text-red-600 text-center font-bold'>404 Not Found</h1>
                <p className='text-xl text-center'>Oops, The page you are looking for doesn't exist</p>
                <NavLink to="/" className='btn btn-primary rounded-3xl text-white text-lg'>Go Back Home</NavLink>
                
            </div>
        </div>
    );
};

export default Error;