import React, { useEffect, useState } from 'react';

import { Link } from 'react-router';

const Categories = () => {

    const [categories, setCategories]= useState([])

    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, [])

    return (
        <div className="py-12 bg-gray-50 ">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Book Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                            <Link
                                to={`/category/${category.name}`}
                                className="inline-block px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                View Books
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;