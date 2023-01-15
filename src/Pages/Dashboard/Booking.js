import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Component/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const Booking = () => {

    const { user } = useContext(AuthContext);
    const url = `https://goobike-assigenment-12-server-iw16swnw7-sajjad-mugdho.vercel.app/bookings/${user?.email}`


    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }

                });
                const data = await res.json();
                return data;

            } catch (error) {

            }
        }
    });

    if(isLoading){
        return <Spinner></Spinner>
    }

    console.log(bookings);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Bike</th>
                            <th>Seller Name</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={booking?.bookedItem?.bikeimage} alt="" />
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{booking?.bookedItem?.bike_name}</div>
                                        <div className="text-sm rounded-full  px-2 text-white w-12 badge-info">${booking?.bookedItem?.price}</div>
                                    </td>
                                    <td>{booking?.bookedItem?.name}</td>
                                    <td>
                                        <Link to={`/dashboard/payment/${booking._id}`}><button  className='btn btn-sm text-white btn-primary'>Pay!</button></Link>
                                    </td>
                                </tr>)
                        }
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;