import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';


const BorrowedBooks = () => {

    const {user}= use(AuthContext)

    const [borrowedBooks, setborrowedBooks] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/borrow?email=${user.email}`)
            .then(res => res.json())
            .then(data => setborrowedBooks(data))
    }, [user.email])

    const handleReturn= (id)=>{
        axios.delete(`http://localhost:3000/borrow/${id}`)
        .then(res=>console.log(res.data))
        .catch(error=>{
            console.log(error)
        })
    }




    return (
        <div className="p-4 w-11/12 mx-auto">
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
          <p className="text-sm text-gray-500">Author: {book.author}</p>
          <div className="mt-2 text-sm">
            <p>Borrowed Date: {book.borrowDate}</p>
            <p>Return Date: {book.returnDate}</p>
          </div>
          <div className="card-actions mt-4 justify-end">
            <button onClick={()=>handleReturn(book._id)} className="btn btn-sm btn-error">Return</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    );
};

export default BorrowedBooks;