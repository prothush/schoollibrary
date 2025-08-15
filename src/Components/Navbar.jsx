import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';

const Navbar = () => {

  const {user, loading, userLogout, successMsg, errorMsg}= use(AuthContext)

  const handleSignout= ()=>{
    userLogout()
    .then(()=>{
      successMsg("User signout successfully")
    })
    .catch((error)=>{
      errorMsg(error.message)
    })
  }

  const links = <>
    <li><NavLink to="/"
    className={({isActive})=> isActive ? "bg-[#00E958]/50" : ""}
    >Home</NavLink></li>
    <li><NavLink to="/allBooks"
    className={({isActive})=> isActive ? "bg-[#00E958]/50" : ""}
    >All Products</NavLink></li>
    <li><NavLink to="/addBooks"
    className={({isActive})=> isActive ? "bg-[#00E958]/50" : ""}
    >Add Product</NavLink></li>
    <li><NavLink to="/borrowedBooks"
    className={({isActive})=> isActive ? "bg-[#00E958]/50" : ""}
    >Borrowed Books</NavLink></li>
  </>

  return (

    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="font-bold text-xl">Sort & Shop</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-5">

        {

          user ?

            <div className="relative group">
              {user.photoURL ?
                <img
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400 cursor-pointer"
                  src={user.photoURL}
                />
                :
                <button className="btn font-semibold px-4 py-2 rounded-full shadow-md transition duration-200">
                  User
                </button>
              }

              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <div className="p-4 space-y-3 text-sm text-gray-700">
                  <p className="font-semibold break-words">
                    👤 {user.displayName || ''}
                  </p>
                  <button onClick={handleSignout} className="w-full text-center bg-amber-500 text-white py-1.5 rounded-md hover:bg-amber-600 transition duration-200">
                    Sign Out
                  </button>
                </div>
              </div>
            </div> :
            <>
              {
                loading ? <span className="loading loading-spinner loading-xl"></span> : <>
                  <Link to="/auth/login"><button className="btn btn-outline border-[#00E958] hover:bg-[#00E958]/50 btn-sm md:btn-md">Login</button></Link>
                  <Link to="/auth/register"><button className="btn btn-outline border-[#00E958] hover:bg-[#00E958]/50 btn-sm md:btn-md">Register</button></Link>
                </>
              }

            </>

        }
      </div>
    </div>
  );
};

export default Navbar;