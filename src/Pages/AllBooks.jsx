import React, { use, useEffect, useState } from 'react';
import AllBookCard from '../Components/AllBookCard';
import TableBody from '../Components/TableBody';
import { AuthContext } from '../Contexts/AuthProvider';
import Loading from '../Components/Loading';



const AllBooks = () => {

    const { user } = use(AuthContext)

    const [books, setBooks] = useState([])
    const [loading, setLoading]= useState(true)


    useEffect(() => {

        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setLoading(false)
            })



    })


    const [showAvailable, setShowAvailable] = useState(false)
    const [view, setView] = useState("Card")

    const filterBooks = showAvailable ? books.filter(book => book.quantity > 0) : books

    const handleToggleBook = () => {
        setShowAvailable(!showAvailable)
    }

    if(loading){
        return <Loading></Loading>

    }





    return (
        <div className="w-11/12 mx-auto px-4 py-6 min-h-screen">

            <title>All Products</title>

            <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">All Products</h1>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {filterBooks.map(book => <AllBookCard key={book._id} book={book} view={view}></AllBookCard>)}
                </div>


        </div>

    );
};

export default AllBooks;