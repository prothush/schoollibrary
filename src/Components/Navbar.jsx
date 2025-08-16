import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthProvider';

const Navbar = () => {

  const { user, loading, userLogout, successMsg, errorMsg, theme, setTheme } = use(AuthContext)

  const handleSignout = () => {
    userLogout()
      .then(() => {
        successMsg("User signout successfully")
      })
      .catch((error) => {
        errorMsg(error.message)
      })
  }

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const links = <>
    <li><NavLink to="/"
      className={({ isActive }) => isActive ? "text-[#D3FFBE]" : ""}
    >Home</NavLink></li>
    <li><NavLink to="/allBooks"
      className={({ isActive }) => isActive ? "text-[#D3FFBE]" : ""}
    >All Products</NavLink></li>
    {
      user &&
      <>
        <li><NavLink to="/addBooks"
          className={({ isActive }) => isActive ? "text-[#D3FFBE]" : ""}
        >Add Product</NavLink></li>
        <li><NavLink to="/contactUs"
          className={({ isActive }) => isActive ? "text-[#D3FFBE]" : ""}
        >Contact Us</NavLink></li>
      </>
    }

    <li><NavLink to="/howItWorks"
      className={({ isActive }) => isActive ? "text-[#D3FFBE]" : ""}
    >How It Works</NavLink></li>
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
            className="menu menu-sm dropdown-content bg-[#00927F] text-white  rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                  <Link to="/auth/login"><button className="btn btn-outline border-[#00E958]/50 hover:bg-[#00E958]/50 hover:text-[#000] btn-sm md:btn-md">Login</button></Link>
                  <Link to="/auth/register"><button className="btn btn-outline border-[#00E958]/50 hover:bg-[#00E958]/50 hover:text-[#000] btn-sm md:btn-md">Register</button></Link>
                </>
              }

            </>

        }
        {
          location.pathname &&
          <label className="swap swap-rotate">

            <input type="checkbox" className="theme-controller" value="synthwave" onChange={handleTheme}
              checked={theme === "light" ? false : true}
            />

            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        }
      </div>
    </div>
  );
};

export default Navbar;