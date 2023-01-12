
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Bike from '../../Component/Dashboard/Bike';

import Spinner from '../../Component/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const ManageBikes = () => {

    const { user, loading } = useContext(AuthContext);
    const url = `https://goobike-assigenment-12-server.vercel.app/bikes/${user?.email}`;

    const { data: bikes = [], refetch } = useQuery({
        queryKey: ['bikes',  user?.email],
        queryFn: async () => {
            const res = await fetch(url);

            const data = await res.json();
            return data;
        }
    })




    if (loading) {
        return <Spinner></Spinner>
    }

    if(bikes){

    }

    return (
        <div className='my-5 ml-5 gap-5 grid md:grid-cols-1 lg:grid-cols-2' >
            {
                bikes?.map(bike => <Bike key={bike._id} refetch={refetch} bike={bike} />)
            }
        </div>
    );
};

export default ManageBikes;