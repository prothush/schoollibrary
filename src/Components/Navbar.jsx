import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links= <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allBooks">All Books</NavLink></li>
        <li><NavLink to="/addBooks">Add Books</NavLink></li>
        <li><NavLink to="/borrowedBooks">Add Books</NavLink></li>
    </>

    return (
        <div class="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">School Library</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div class="navbar-end gap-3">
    <button to="/login" className='btn btn-primary'>Login</button>
    <button to="/register" className='btn btn-secondary'>Register</button>
  </div>
</div>
    );
};

export default Navbar;