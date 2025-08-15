import React from 'react';
import { Link } from 'react-router';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import sliderOne from "../assets/slider1.jpg"
import sliderTwo from "../assets/slider2.jpg"
import sliderThree from "../assets/slider3.jpg"


const Slider = () => {
    return (
        <div className="h-[80vh]">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3500 }}
                loop={true}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <div
                        className="relative w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${sliderOne})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                            <div className="text-center text-white space-y-5 px-5 max-w-4xl">
                                <h2 className="text-2xl md:text-5xl font-bold">
                                    Our Featured Picks
                                </h2>
                                <p className="text-lg md:text-xl">
                                    Handpicked products we love the most – explore top-quality items at the best prices.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="relative w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${sliderTwo})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                            <div className="text-center text-white space-y-5 px-5 max-w-4xl">
                                <h2 className="text-2xl md:text-5xl font-bold">
                                    Trending Now
                                </h2>
                                <p className="text-lg md:text-xl">
                                    See what’s hot and in demand. Don’t miss out on our most popular products!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="relative w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${sliderThree})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                            <div className="text-center text-white space-y-5 px-5 max-w-4xl">
                                <h2 className="text-2xl md:text-5xl font-bold">
                                    Top Rated Products
                                </h2>
                                <p className="text-lg md:text-xl">
                                    Customer favorites with the highest ratings – proven and trusted.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;