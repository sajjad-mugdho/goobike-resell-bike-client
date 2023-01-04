import React from 'react';
import { Link } from 'react-router-dom';
import navbg from '../../assest/image/navbg.jpg';
import PrimaryBtn from '../../Component/PrimeryBtn/PrimaryBtn';

const Navbar = () => {

    const menuItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>Login</Link></li>
        <li><Link to={'/'}>Dashboard</Link></li>
    <li><Link to={'/'}>Shop</Link></li>
    </>
    return (
        <div className="navbar glass" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">GooBike</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
              <PrimaryBtn>Get Started</PrimaryBtn>  
            </div>
        </div>
    );
};

export default Navbar;