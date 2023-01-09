import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeCategory from './BikeCategory';

const CategoryByBike = () => {

    const bikeCategories = useLoaderData();
    
    console.log(bikeCategories);
    return (
        <div>
            {
                bikeCategories.map(bikeCategory => <BikeCategory
                bikeCategory={bikeCategory}
                key={bikeCategory._id}
                ></BikeCategory>)
            }
        </div>
    );
};

export default CategoryByBike;