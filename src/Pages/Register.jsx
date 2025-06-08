import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {

    const {createUser}= use(AuthContext)


    const handleRegister= (e)=>{
        e.preventDefault()
        const form= e.target
        const name= form.name.value
        const email= form.email.value
        const photoUrl= form.photoUrl.value
        const password= form.password.value

        createUser(email, password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
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
                        <input type="text" name="name" className="input" placeholder="Your Name" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Your Email" />
                        <label className="label">Photo URL</label>
                        <input type="text" name="photoUrl" className="input" placeholder="Your Photo URL" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Your Password" />
                        <span className='text-red-500 text-xs'>Error</span>
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