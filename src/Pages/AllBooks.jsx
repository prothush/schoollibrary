import React, { useState } from 'react';
import AllBookCard from '../Components/AllBookCard';
import { useLoaderData } from 'react-router';
import TableBody from '../Components/TableBody';



const AllBooks = () => {

    const books = useLoaderData()

    const [showAvailable, setShowAvailable] = useState(false)
    const [view, setView] = useState("Card")

    const filterBooks = showAvailable ? books.filter(book => book.quantity > 0) : books

    const handleToggleBook = () => {
        setShowAvailable(!showAvailable)
    }

    const handleView = (e) => {
        setView(e.target.value)
    }





    return (
        <div className="w-11/12 mx-auto px-4 py-6">
            <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">All Books</h1>
            <div className='flex flex-col md:flex-row justify-between gap-5 my-5'>
                <button onClick={handleToggleBook} className='btn btn-primary'>Show {showAvailable ? "All" : "Available"} Books</button>

                <select defaultValue="Select View" className="select" onChange={handleView}>
                    <option disabled={true}>Select View</option>
                    <option>Card</option>
                    <option>Table</option>
                </select>
            </div>

            {view === "Card" ?
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {filterBooks.map(book => <AllBookCard key={book._id} book={book} view={view}></AllBookCard>)}


                </div>
                :
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="p-3 border-b">Image</th>
                                <th className="p-3 border-b">Title</th>
                                <th className="p-3 border-b">Author</th>
                                <th className="p-3 border-b">Category</th>
                                <th className="p-3 border-b">Description</th>
                                <th className="p-3 border-b">Rating</th>
                                <th className="p-3 border-b">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterBooks.map(book => <TableBody key={book._id} book={book} view={view}></TableBody>)}
                        </tbody>
                    </table>
                </div>


            }
        </div>
    );
};

export default AllBooks;