import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
        </div>
    );
};

export default Home;