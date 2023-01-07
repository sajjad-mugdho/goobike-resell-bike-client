import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Api/useAdmin';
import Sidebar from '../Component/Dashboard/Sidebar';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    


    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default DashboardLayout;