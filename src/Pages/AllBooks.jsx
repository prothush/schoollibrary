import React, { useContext, useEffect, useState } from 'react';
import AllBookCard from '../Components/AllBookCard';
import Loading from '../Components/Loading';
import { AuthContext } from '../Contexts/AuthProvider';

const AllBooks = () => {
  const { user } = useContext(AuthContext);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedBooks = [...books];

    if (order === "asc") {
      sortedBooks.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedBooks.sort((a, b) => b.price - a.price);
    }

    setBooks(sortedBooks);
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-6 min-h-screen">
      <title>All Products</title>

      <h1 className="text-xl md:text-3xl font-bold mb-6 text-center">
        All Products
      </h1>

      <div className="flex justify-end mb-6">
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="select select-bordered w-48"
        >
          <option value=""disabled>Sort by</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <AllBookCard key={book._id} book={book}></AllBookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
