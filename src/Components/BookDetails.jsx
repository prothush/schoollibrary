import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import StarRatings from 'react-star-ratings';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';

const BookDetails = () => {
    const book = useLoaderData()
    const { user } = use(AuthContext)

    const [isBorrowed, setIsBorrowed] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3000/borrow?email=${user.email}&bookId=${book._id}`)
            .then(res => {
                setIsBorrowed(res.data)
            })
    },[user.email,book._id])

    const handleBorrow = () => {
        const borrow = {
            email: user.email,
            bookId: book._id,
        }
        axios.post("http://localhost:3000/borrow", borrow)
            .then(res => {
                console.log(res.data)
                setIsBorrowed(true)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <img src={book.image} alt="Group" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <p className="text-gray-600">Category: {book.category}</p>
            <p className="mt-4">Author: {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Quantity:</strong> {book.quantity}</p>
            <div> <strong>Ratings: </strong>
                <StarRatings
                    rating={parseInt(book.rating)}
                    starDimension="30px"
                    starSpacing="1px"
                    starRatedColor="yellow"
                />
            </div>
            {
                isBorrowed ? <button className="btn btn-error mt-6">Return</button> : <button onClick={handleBorrow} className="btn btn-success mt-6">Borrow</button> 
            }
            

        </div>
    );
};

export default BookDetails;