import React from 'react';

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
            </tr>
        </>

    );
};

export default TableBody;