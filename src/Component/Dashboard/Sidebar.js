import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import PrimaryBtn from '../PrimeryBtn/PrimaryBtn';
import AdminMenu from './AdminMenu';
import BuyerMenu from './BuyerMenu';
import Sellermenu from './Sellermenu';

const Sidebar = () => {
    const { user, logout } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>GooBike</Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
                >
                    <Bars3Icon className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <h2 className='text-3xl cursor-pointer font-semibold text-center text-gray-800 '>
                            <Link to='/'>GooBike</Link>
                        </h2>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>

                            {
                                user?.role === "admin" ? <AdminMenu /> : <>{user?.role !== "Buyer" ? <Sellermenu /> : <BuyerMenu></BuyerMenu>}</>
                            }
                            {/* {user?.role && user?.role !== 'Buyer' ? (
                                <>{user?.role === 'admin' ? <AdminMenu /> : <Sellermenu />} </>
                            ) : (
                                <BuyerMenu />
                            )} */}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <PrimaryBtn handler={logout} classes='flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform'>

                        <ArrowRightOnRectangleIcon className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </PrimaryBtn>


                </div>
            </div>
        </>
    )
}

export default Sidebar;