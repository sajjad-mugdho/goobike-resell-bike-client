import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BikeCategory from './BikeCategory';

const CategoryByBike = () => {

    const bikeCategories = useLoaderData();

    console.log(bikeCategories);
    return (
        <div className='flex flex-row'>

            <div className='basis-1/4 ' >
                <div className="card sm:w-40 md:w-52 lg:w-96 mt-20 mx-5 bg-secondary-focus shadow-xl">

                    <div className="card-body">
                        <h2 className='text-2xl font-bold flex justify-center'>Bike Category</h2>
                        <div className="btn-group mb-3 btn-group-vertical">
                            <Link to={'/bike-category/Adventure-Bike'}><button className="btn mb-3 w-full btn-outline btn-accent">Adventure Bike</button></Link>
                            <Link to={'/bike-category/Cruiser-Bike'}><button className="btn mb-3 w-full  btn-outline btn-accent">Cruiser Bike</button></Link>
                            <Link to={'/bike-category/Naked-Bike'}><button className="btn mb-3 w-full  btn-outline btn-accent">Naked Bike</button></Link>
                            <Link to={'/bike-category/Sportsbike'}><button className="btn mb-3 w-full  btn-outline btn-accent">Sportsbike</button></Link>
                            <Link to={'/bike-category/Classic-Bike'}><button className="btn mb-3 w-full  btn-outline btn-accent">Classic Bike</button></Link>
                            <Link to={'/bike-category/Scooter-Bike'}><button className="btn mb-3 w-full btn-outline btn-accent">Scooter Bikes</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-1 lg:grid-cols-2  gap-5 ml-5 my-10'>
                {
                    bikeCategories.map(bikeCategory => <BikeCategory
                        bikeCategory={bikeCategory}
                        key={bikeCategory._id}
                    ></BikeCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryByBike;