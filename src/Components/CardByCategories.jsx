import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router';


const CardByCategories = ({ cat }) => {


    const { _id, image, title, author, category, quantity, rating } = cat


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-sm text-gray-600">{category}</p>
                <div className="mt-2">
                    <p><strong>Author: {author}</strong> </p>
                    <p><strong>Quantity: {quantity}</strong> </p>
                    <StarRatings
                        rating={parseInt(rating)}
                        starDimension="30px"
                        starSpacing="1px"
                        starRatedColor= "yellow"
                    />

                </div>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/bookDetails/${_id}`}><button className='btn btn-secondary'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardByCategories;