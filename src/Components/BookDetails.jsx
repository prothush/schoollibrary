import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';
import Loading from './Loading';


const BookDetails = () => {
    const { user, successMsg, errorMsg } = use(AuthContext)
    
    const {id}= useParams()
    const [book, setBook]= useState("")
    const [loading, setLoading]= useState(true)

        
    const today= new Date().toISOString().slice(0, 10)
    

    const [isBorrowed, setIsBorrowed] = useState(false)
    const [quantity, setQuantity] = useState(0)
     useEffect(()=>{
        setQuantity(book?.quantity)
     },[book?.quantity, setQuantity]) 


    useEffect(()=>{
        fetch(`http://localhost:3000/books/id/${id}`,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setBook(data)
            setLoading(false)
        })

    },[id, user.accessToken])
    


    useEffect(() => {

        axios.get(`http://localhost:3000/borrow?email=${user.email}&bookId=${book._id}`,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                setIsBorrowed(res.data.length > 0)
            })
    }, [user.email, book._id, user.accessToken])



    const handleBorrow = (e) => {
        const form = e.target
        if (isBorrowed) {
            errorMsg("You have already borrowed this book")
            e.preventDefault()
            return
        }
        const name = form.name.value
        const email = form.email.value
        const returnDate = form.date.value
        const borrow = {
            name,
            email,
            returnDate,
            bookId: book._id,
            borrowDate: today
        }
        axios.post("http://localhost:3000/borrow", borrow,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }

        })
            .then(res => {
                setIsBorrowed(true)
                setQuantity(quantity - 1)
                successMsg("Successfully borrowed this book")
            })
            .catch(error => {

            })
    }

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-5">

                <title>Book Details</title>

            <img src={book.image} alt="" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
            <div> <strong>Ratings: {book.price}</strong></div>
        </div>
    );
};

export default BookDetails;