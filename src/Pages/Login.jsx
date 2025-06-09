import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';

const Login = () => {

    const {loginUser, successMsg, errorMsg}= use(AuthContext)
    const navigate= useNavigate()

    const handleGoogle = () => {

    }

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
        .then(result=>{
            successMsg("Successfully loggedIn")
            navigate("/")
        })
        .catch(error=>{
            errorMsg(error.message)
        })


    }


    return (
        <div className='flex justify-center items-center my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Your Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Your Password" />
                        <div>
                            <Link to="/auth/forgot" className="link link-hover">Forgot password?</Link>
                        </div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <h3 className='text-center text-lg font-semibold'>Or</h3>
                    <button onClick={handleGoogle} className="btn btn-neutral"><FcGoogle size={20} /> Sign In With Google</button>
                    <p className='font-semibold text-center'>Don't Have An Account? <Link className='text-secondary' to="/auth/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;