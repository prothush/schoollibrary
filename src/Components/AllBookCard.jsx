import React from 'react';
import { Link } from 'react-router';

const AllBookCard = ({ book }) => {

  return (
    <div className="card bg-[#D3FFBE] shadow-xl">
      <figure>
        <img src={book.image} className="w-full h-40 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.title.length > 30 ? book.title.slice(0, 30) + "..." : book.title}
          </h2>
        <p className="text-sm text-gray-600">{book.category}</p>
        <p className="text-sm">
          {book.description.length > 80 ? book.description.slice(0, 80) + "..." : book.description}
          </p>
        <div>
          <p><strong>Quantity: {book.quantity}</strong> </p>
          <p><strong>Price: {book.price}</strong> </p>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/bookDetails/${book._id}`}><button className='btn btn-secondary'>Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllBookCard;