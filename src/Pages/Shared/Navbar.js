
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import PrimaryBtn from '../../Component/PrimeryBtn/PrimaryBtn';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const menuItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li><Link to={'/shop'}>Shop</Link></li>

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
            <div className=" navbar-end ">
                {
                    user?.email ?
                        <div className="avatar dropdown dropdown-hover dropdown-end">
                            <div className="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="" />
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                                    <li><Link to={'/profile'}>Profile</Link></li>
                                    <li onClick={logout}><Link>Sign Out</Link></li>
                                </ul>
                            </div>
                        </div> : <Link to={"/login"}><PrimaryBtn>Login</PrimaryBtn></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;