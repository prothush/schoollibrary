import axios from 'axios';
import React, { use } from 'react';
import { FaBook } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthProvider';

const AddBook = () => {

    const {user}= use(AuthContext)


    


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

        axios.post("http://localhost:3000/books", newBook,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }

        })
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

            <title>Add Products</title>

            <div className="max-w-3xl mx-auto p-6 mt-10 bg-base-100 shadow-md rounded-lg">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-8">Add Products</h2>
                <form onSubmit={handleAddBook} className="space-y-6">
                    <div>
                        <label className="label font-semibold">Image</label>
                        <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Product Name</label>
                        <input type="text" name="title" placeholder="Product name" className="input input-bordered w-full" required />
                    </div>

                                        <div>
                        <label className="label font-semibold">Description</label>
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="A brief description of the products" required></textarea>
                    </div>

                    <div>
                        <label className="label font-semibold">Quantity</label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                    </div>



                    <div>
                        <label className="label font-semibold">Price</label>
                        <input name="price" type="number" className="input input-bordered w-full" required />
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="btn bg-[#00927F] text-white btn-outline border-[#00E958]/50 hover:bg-[#00E958]/50 hover:text-[#000] w-full">Add Products</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddBook;