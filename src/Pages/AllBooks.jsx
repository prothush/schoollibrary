import React, { useState } from 'react';
import AllBookCard from '../Components/AllBookCard';
import { useLoaderData } from 'react-router';



const AllBooks = () => {
    
    const books= useLoaderData()

    const [showAvailable, setShowAvailable]= useState(false)

    const filterBooks= showAvailable ? books.filter(book=> book.quantity > 0) : books

    const handleToggleBook = ()=>{
        setShowAvailable(!showAvailable)
    }



    

    return (
        <div className="w-11/12 mx-auto px-4 py-6">
            <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">All Books</h1>
            <button onClick={handleToggleBook} className='btn btn-primary mb-3'>Show {showAvailable ? "All" : "Available"} Books</button>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filterBooks.map(book=> <AllBookCard key={book._id} book={book}></AllBookCard>)}
            </div>
        </div>
    );
};

export default AllBooks;