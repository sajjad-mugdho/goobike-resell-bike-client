import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('https://goobike-assigenment-12-server.vercel.app/users', {
                    method: "GET",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('gooBike-token')}`
                    }

                });
                const data = await res.json();
                return data;

            } catch (error) {

            }
        }
    })

    console.log(users);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {
                            users?.map((user, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-16 mask mask-squircle">
                                            <img src={user.img} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                    <label htmlFor="confirmation-modal" className="btn btn-sm btn-primary text-white">Make Admin</label>
                                    </td>
                                    <td><label htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;