import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const book = useLoaderData()
    const { _id, image, title, quantity, author, category, description, rating } = book


    const handleUpdateBook = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const {quantity, ...rest} = Object.fromEntries(formData.entries())
        const convertedQty= parseInt(quantity)
        const updatedBookData={
            ...rest,
            quantity : convertedQty
        }
        
        

        axios.put(`http://localhost:3000/books/${_id}`, updatedBookData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully updated the book data ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                
            })



    }

    return (
        <div>
            <Helmet>
                <title>Update Book</title>
            </Helmet>
            <div className="max-w-3xl mx-auto p-6 mt-10 bg-base-100 shadow-md rounded-lg">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-8">Update Books</h2>
                <form onSubmit={handleUpdateBook} className="space-y-6">
                    <div>
                        <label className="label font-semibold">Image</label>
                        <input type="text" name="image" placeholder="Photo URL" defaultValue={image} className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Title of Book</label>
                        <input type="text" name="title" placeholder="Book title" defaultValue={title} className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Quantity</label>
                        <input type="number" name="quantity" placeholder="Quantity" defaultValue={quantity} className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Author Name</label>
                        <input type="text" name="author" placeholder="Author Name" defaultValue={author} className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Category</label>
                        <select className="select select-bordered w-full" name="category" defaultValue={category} required>
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
                        <textarea name="description" defaultValue={description} className="textarea textarea-bordered w-full" placeholder="A brief description of the book" required></textarea>
                    </div>

                    <div>
                        <label className="label font-semibold">Rating</label>
                        <input name="rating" type="number" min="1" max="5" defaultValue={rating} className="input input-bordered w-full" required />
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="btn btn-primary w-full">Update Book</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateBook;