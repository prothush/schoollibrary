import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import LibraryServices from '../Components/LibraryServices';
import Testimonial from '../Components/Testimonial';
import FeaturedProducts from '../Components/FeaturedProducts';
import SalesPromotion from '../Components/SalesPromotion';

const Home = () => {
    return (
        
        <div>

                <title>Home</title>

            <Slider></Slider>
            <FeaturedProducts></FeaturedProducts>
            <SalesPromotion></SalesPromotion>

        </div>
    );
};

export default Home;