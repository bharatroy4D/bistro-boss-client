import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = [
        <li> <NavLink to={'/'}> HOME</NavLink></li>,
        <li> <NavLink to={'/contact'}> CONTACT</NavLink></li>,
        <li> <NavLink to={'/dashboard'}> DASHBOARD</NavLink></li>,
        <li> <NavLink to={'/ourMenu'}> OUR MENU</NavLink></li>,
        <li> <NavLink to={'/ourShop'}> OUR SHOP</NavLink></li>,
    ]

    return (
        <>
            <div className="navbar fixed z-30 max-w-7xl mx-auto  bg-black/60 shadow-sm">
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
                    <a className="btn btn-ghost text-xl">
                        <div>
                            <h1 className='text-xl text-gray-100 font-semibold uppercase'>bistro boss</h1>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
        
            </div>
        </>
    );
};

export default Navbar;