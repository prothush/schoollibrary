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
                                    Welcome to the Heart of Learning
                                </h2>
                                <p className="text-lg md:text-xl">
                                    Our school library is more than just books — it's a hub for curiosity, imagination, and discovery. Whether you're researching a project or simply exploring new worlds, there's something here for every student.
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
                                    A Space to Read, Reflect, and Grow
                                </h2>
                                <p className="text-lg md:text-xl">
                                    Quiet corners, comfortable seating, and shelves filled with knowledge make our library the perfect place to think deeply, read widely, and grow intellectually.
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
                                    Tools for Academic Success
                                </h2>
                                <p className="text-lg md:text-xl">
                                    From digital resources to study guides and librarian support, the school library provides everything you need to succeed in your academic journey.
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