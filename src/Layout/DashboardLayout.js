import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Api/useAdmin';
import Sidebar from '../Component/Dashboard/Sidebar';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);

    

    



    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content my-5 mx-2 lg:ml-[270px]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;