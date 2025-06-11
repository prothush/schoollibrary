import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import AllBookCard from '../Components/AllBookCard';

// const bookPromise= axios.get("http://localhost:3000/books").then(res=>res.data)


const AllBooks = () => {

    
    const [books, setBooks]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/books").then(res=>setBooks(res.data))
    },[])
    

    return (
        <div className="w-11/12 mx-auto px-4 py-6">
            <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">All Books</h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {books.map(book=> <AllBookCard key={book._id} book={book}></AllBookCard>)}
            </div>
        </div>
    );
};

export default AllBooks;