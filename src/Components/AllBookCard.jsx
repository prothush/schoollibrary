import React from 'react';
import { Link } from 'react-router';

const AllBookCard = ({ book, view }) => {

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={book.image} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.category}</p>
        <p className="text-sm">{book.description}...</p>
        <div className="mt-2">
          <p><strong>Author: {book.author}</strong> </p>
          <p><strong>Quantity: {book.quantity}</strong> </p>
          <p><strong>Rating: {book.rating}</strong> </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/updateBook/${book._id}`}><button className='btn btn-secondary'>Update Book</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;