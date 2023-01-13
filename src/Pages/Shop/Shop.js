import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import Bike from '../../Component/Dashboard/Bike';
import Spinner from '../../Component/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider';
import ShopCard from './ShopCard';

const Shop = () => {

    const { user, loading } = useContext(AuthContext);

    const url = `https://goobike-assigenment-12-server.vercel.app/bikes?email=${user?.email}`;

    const { data: bikes = [], refetch} = useQuery({
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
        <>
            <div>
                <h1 className=' my-5 text-5xl text-center font-bold'>
                    Find your Dream Bike
                </h1>
            </div>
            <div className='my-5 mx-5 gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
                {
                    bikes.map(bikeCategory => <ShopCard key={bikeCategory._id} refetch={refetch} bikeCategory={bikeCategory} />)
                }
            </div>
        </>
    );
};

export default Shop;