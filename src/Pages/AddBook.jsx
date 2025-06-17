import axios from 'axios';
import React from 'react';
import { FaBook } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddBook = () => {



    const handleAddBook = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { quantity, ...rest } = Object.fromEntries(formData.entries())
        const convertedQty = parseInt(quantity)
        const newBook = {
            ...rest,
            quantity: convertedQty
        }

        axios.post("https://school-library-server.vercel.app/books", newBook)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully added the book data ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
            })
            .catch(error => {


            })
    }



    return (
        <div>

            <title>Add Books</title>

            <div className="max-w-3xl mx-auto p-6 mt-10 bg-base-100 shadow-md rounded-lg">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-8">Add Books</h2>
                <form onSubmit={handleAddBook} className="space-y-6">
                    <div>
                        <label className="label font-semibold">Image</label>
                        <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Title of Book</label>
                        <input type="text" name="title" placeholder="Book title" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Quantity</label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Author Name</label>
                        <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Category</label>
                        <select className="select select-bordered w-full" name="category" defaultValue="" required>
                            <option disabled value="">Select a category</option>
                            <option>Novel</option>
                            <option>Thriller</option>
                            <option>History</option>
                            <option>Drama</option>
                            <option>Sci-Fi</option>
                        </select>
                    </div>

                    <div>
                        <label className="label font-semibold">Short Description</label>
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="A brief description of the book" required></textarea>
                    </div>

                    <div>
                        <label className="label font-semibold">Rating</label>
                        <input name="rating" type="number" min="1" max="5" className="input input-bordered w-full" required />
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="btn btn-primary w-full">Add Book</button>
                    </div>

                </form>
                <div className="mt-10 p-5 bg-base-200 rounded">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><FaBook></FaBook> Book Content Example</h3>
                    <p>
                        <strong>"Into the Shadows"</strong> is a gripping <em>thriller novel</em> that takes readers deep into a world of mystery and suspense. Set in a foggy coastal town, the story follows investigative journalist <strong>Clara Dawson</strong> as she uncovers secrets that were meant to stay buried.
                    </p>
                    <p className="mt-2">
                        With every page, the stakes rise, leading to a shocking conclusion. This novel is ideal for fans of thrillers and mysteries, rated <strong>4.5/5</strong> by early readers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddBook;