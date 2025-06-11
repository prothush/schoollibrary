import axios from 'axios';
import React, { use } from 'react';
import Swal from 'sweetalert2';

const AddBook = () => {



    const handleAddBook = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newBook = Object.fromEntries(formData.entries())
        console.log(newBook)

        axios.post("http://localhost:3000/books", newBook)
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
                        <input name="rating" type="number" max="5" step="0.1" className="input input-bordered w-full" required />
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="btn btn-primary w-full">Add Book</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddBook;