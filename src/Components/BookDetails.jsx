import React from 'react';
import { useLoaderData } from 'react-router';
import StarRatings from 'react-star-ratings';

const BookDetails = () => {
    const book = useLoaderData()
    console.log(book)
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <img src={book.image} alt="Group" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <p className="text-gray-600">Category: {book.category}</p>
            <p className="mt-4">Author: {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Quantity:</strong> {book.quantity}</p>
            <div>
                <StarRatings
                    rating={parseInt(book.rating)}
                    starDimension="30px"
                    starSpacing="1px"
                    starRatedColor="yellow"
                />
            </div>
            <button className="btn btn-success mt-6">Borrow</button>

        </div>
    );
};

export default BookDetails;