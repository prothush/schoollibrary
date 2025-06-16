import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import StarRatings from 'react-star-ratings';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const BookDetails = () => {
    const book = useLoaderData()
    const { user, successMsg, errorMsg } = use(AuthContext)
    const today= new Date().toISOString().slice(0, 10)
    console.log(today)

    const [isBorrowed, setIsBorrowed] = useState(false)
    const [quantity, setQuantity] = useState(book.quantity)

    useEffect(() => {
        axios.get(`http://localhost:3000/borrow?email=${user.email}&bookId=${book._id}`)
            .then(res => {
                setIsBorrowed(res.data.length > 0)
            })
    }, [user.email, book._id])



    const handleBorrow = (e) => {
        const form = e.target
        if (isBorrowed) {
            errorMsg("You have already borrowed this book")
            e.preventDefault()
            return
        }
        const name = form.name.value
        const email = form.email.value
        const returnDate = form.date.value
        const borrow = {
            name,
            email,
            returnDate,
            bookId: book._id,
            borrowDate: today
        }
        console.log(borrow)
        axios.post("http://localhost:3000/borrow", borrow)
            .then(res => {
                setIsBorrowed(true)
                setQuantity(quantity - 1)
                successMsg("Successfully borrowed this book")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <Helmet>
                <title>Book Details</title>
            </Helmet>
            <img src={book.image} alt="Group" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <p className="text-gray-600">Category: {book.category}</p>
            <p className="mt-4">Author: {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <div> <strong>Ratings: </strong>
                <StarRatings
                    rating={parseInt(book.rating)}
                    starDimension="30px"
                    starSpacing="1px"
                    starRatedColor="yellow"
                />
            </div>
            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()} disabled={quantity == 0 && "disabled"}>Borrow</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <p className="py-4">Press <span className='text-error bold'>ESC</span> key to close</p>
                    <div>
                        <form method="dialog" onSubmit={handleBorrow}>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Name</legend>
                                <input type="text" name="name" value={user.displayName} className="input" placeholder="Type here" disabled />
                                <legend className="fieldset-legend">Email</legend>
                                <input type="text" name="email" value={user.email} className="input" placeholder="Type here" disabled />
                                <legend className="fieldset-legend">Return Date</legend>
                                <input type="date" name="date" className="input" placeholder="Type here" required />
                            </fieldset>
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>




        </div>
    );
};

export default BookDetails;