import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const BorrowedBooks = () => {

    const { user } = use(AuthContext)


    const [borrowedBooks, setborrowedBooks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/borrow?email=${user.email}`,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }

        })
            .then(res => res.json())
            .then(data => setborrowedBooks(data))
    }, [user.email, user.accessToken])

    const handleReturn = (id, bookId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/borrow/${id}`, {
                    data: {
                        bookId
                    }
                })
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Returned!",
                                text: "Book has been returned",
                                icon: "success"
                            });
                            setborrowedBooks(prev => prev.filter(book => book._id !== id))
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        });


    }




    return (
        <div className="p-4 w-11/12 mx-auto">
            <Helmet>
                <title>Borrowed Books</title>
            </Helmet>
            <h2 className="text-2xl font-bold mb-4">My Borrowed Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {borrowedBooks.map((book) => (
                    <div key={book.id} className="card bg-base-100 shadow-md">
                        {book.image && (
                            <figure>
                                <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
                            </figure>
                        )}

                        <div className="card-body">
                            <h3 className="card-title">{book.title}</h3>
                            <p className="text-sm text-gray-500">{book.category}</p>
                            <p className="text-sm text-gray-500">Author: {book.author}</p>
                            <div className="mt-2 text-sm">
                                <p>Borrowed Date: {book.borrowDate}</p>
                                <p>Return Date: {book.returnDate}</p>
                            </div>
                            <div className="card-actions mt-4 justify-end">
                                <button onClick={() => handleReturn(book._id, book.bookId)} className="btn btn-sm btn-primary">Return</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BorrowedBooks;