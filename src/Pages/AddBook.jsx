import React from 'react';

const AddBook = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 mt-10 bg-base-100 shadow-md rounded-lg">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-8">Add Books</h2>
                <form className="space-y-6">
                    <div>
                        <label className="label font-semibold">Image</label>
                        <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label font-semibold">Quantity</label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label font-semibold">Author Name</label>
                        <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label font-semibold">Category</label>
                        <select className="select select-bordered w-full" name="category" defaultValue="">
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
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="A brief description of the book"></textarea>
                    </div>

                    <div>
                        <label className="label font-semibold">Rating</label>
                        <input name="rating" type="number" className="input input-bordered w-full" />
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