import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Bike from '../../Component/Dashboard/Bike';
import Spinner from '../../Component/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const ManageBikes = () => {

    const { user, loading } = useContext(AuthContext);
    

    const {bikes, setBikes} = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/bikes?email=${user?.email}`
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            setBikes(data)
        })
    },[user?.email])

    

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className="overflow-x-auto w-full">

            <table className="table w-full">
               
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Booked</th>
                        <th>Paid {bikes.length}</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    
                </tbody>
                

            </table>
        </div>
    );
};

export default ManageBikes;