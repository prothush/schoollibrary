import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
        </div>
    );
};

export default Home;