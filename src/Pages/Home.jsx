import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <Categories></Categories>
        </div>
    );
};

export default Home;