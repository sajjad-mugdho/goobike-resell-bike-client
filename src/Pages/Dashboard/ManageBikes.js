
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Bike from '../../Component/Dashboard/Bike';
import Spinner from '../../Component/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const ManageBikes = () => {

    const { user, loading } = useContext(AuthContext);
    const url = `http://localhost:5000/bikes?email=${user?.email}`;

    const { data: bikes = [] } = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            const res = await fetch(url,);

            const data = await res.json();
            return data;
        }
    })




    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className="overflow-x-auto w-full">

            <table className="table w-full">

                <thead>
                    <tr>
                        
                        <th className='ml-3'>Bike</th>
                        <th>Seller</th>
                        <th>Booked</th>
                        <th>Booked</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bikes.map((bike, i) => <tr className='hover' key={bike._id}>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <th>{i + 1}</th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={bike.bikeimage
                                            } alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{bike.bike}</div>
                                        <div className="text-sm opacity-50">${bike.price}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {bike.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{bike.email}</span>
                            </td>
                            <td>Purple</td>
                            <td>Purple</td>

                            <th>
                                <button className="btn btn-xs">Pay</button>
                            </th>

                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default ManageBikes;