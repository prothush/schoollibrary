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
import Reviews from '../Components/Reviews';

const Home = () => {
    return (
        
        <div>

                <title>Home</title>

            <Slider></Slider>
            <FeaturedProducts></FeaturedProducts>
            <SalesPromotion></SalesPromotion>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;