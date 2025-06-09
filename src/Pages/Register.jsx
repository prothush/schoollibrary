import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {

    const {createUser, updateUser, setUser, successMsg, errorMsg}= use(AuthContext)
    const [error, setError]= useState("")
    



    const handleRegister= (e)=>{
        e.preventDefault()
        const form= e.target
        const name= form.name.value
        const email= form.email.value
        const photoUrl= form.photoUrl.value
        const password= form.password.value

        


        setError("")
        const regExpression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        
        if(regExpression.test(password) === false){
            setError("Must be more than 6 characters, including number, lowercase letter, uppercase letter")
            return
        }




        createUser(email, password)
        .then(result=>{
            console.log(result)
            const user= result.user
            updateUser({
                displayName: name,
                photoURL: photoUrl
            })
            .then(()=>{
                setUser({...user, displayName: name, photoURL: photoUrl})
            })
            .catch(error=>{
                setUser(user)
            })
            successMsg("User has successfully registered")  
            form.reset()   

        })
        .catch(error=>{
            console.log(error)
            errorMsg("Something went wrong...")
        })
    }


    return (
        <div>
            <div className='flex justify-center items-center my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Your Name" required/>
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Your Email" required/>
                        <label className="label">Photo URL</label>
                        <input type="text" name="photoUrl" className="input" placeholder="Your Photo URL" required/>
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Your Password" required/>
                        <span className='text-red-500 text-xs'>{error}</span>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='font-semibold text-center'>Already Have An Account? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;