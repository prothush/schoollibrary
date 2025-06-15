import React from 'react';
import { Link } from 'react-router';

const TableBody = ({ book }) => {
    return (
        <>
            <tr className="hover:bg-gray-50">
                <td className="p-3 border-b"><img className='w-30 h-30' src={book.image}></img></td>
                <td className="p-3 border-b">{book.title}</td>
                <td className="p-3 border-b">{book.author}</td>
                <td className="p-3 border-b">{book.category}</td>
                <td className="p-3 border-b">{book.description}</td>
                <td className="p-3 border-b">{book.rating}</td>
                <td className="p-3 border-b">{book.quantity}</td>
                <td className="p-3 border-b">
                    <Link to={`/updateBook/${book._id}`}><button className='btn btn-secondary'>Update Book</button></Link>
                </td>
            </tr>
        </>

    );
};

export default TableBody;