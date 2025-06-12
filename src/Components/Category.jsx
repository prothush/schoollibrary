import React from 'react';
import { useLoaderData } from 'react-router';
import CardByCategories from './CardByCategories';

const Category = () => {

    const categories = useLoaderData()

    return (
        <div className="w-11/12 mx-auto px-4 py-6">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    categories.map((cat,index) => <CardByCategories key={index} cat={cat}></CardByCategories>)
                }
            </div>
        </div>
    );
};

export default Category;