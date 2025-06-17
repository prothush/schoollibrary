import React from 'react';
import { motion } from 'framer-motion';
const Testimonial = () => {

   


    return (
        <div>
            <div className="bg-base-200 py-10">
                <div className="w-11/12 mx-auto px-4 text-center">
                    <motion.h2 className="text-3xl font-bold mb-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                        What Our Readers Say
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <motion.div className="bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} viewport={{ once: true }}>
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" className="w-16 h-16 rounded-full border-4 border-primary mb-4"
                            />
                            <h3 className="text-lg font-semibold">Sara Ahmed</h3>
                            <p className="text-sm text-gray-600 italic">“This library is a treasure! I love the collection and the quiet reading spaces.”</p>
                        </motion.div>

                        <motion.div className="bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1}} viewport={{ once: true }}>
                            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" className="w-16 h-16 rounded-full border-4 border-primary mb-4"
                            />
                            <h3 className="text-lg font-semibold">Rahim Uddin</h3>
                            <p className="text-sm text-gray-600 italic">“The online book borrowing system is incredibly smooth and efficient!”</p>
                        </motion.div>

                        <motion.div className="bg-base-100 shadow-md rounded-xl p-6 flex flex-col items-center text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1}} viewport={{ once: true }}>
                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt="" className="w-16 h-16 rounded-full border-4 border-primary mb-4"
                            />
                            <h3 className="text-lg font-semibold">Lamia Binte</h3>
                            <p className="text-sm text-gray-600 italic">“Great experience! I’ve attended many helpful workshops organized here.”</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;