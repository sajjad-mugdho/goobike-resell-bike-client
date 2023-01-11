import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ bike }) => {
    const {_id, name, email, avater, bike_name, price, bikeimage, details, category, condition } = bike;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={bikeimage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bike_name}
                    <div className="badge badge-secondary">{condition}</div>
                </h2>
                <p>{details.slice(0, 200)}...</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-info">{category}</div>
                    <div className="badge badge-warning">${price}</div>
                </div>
                <div className='flex my-5 justify-end'>

                    <Link to={`/bike-details/${_id}`}>
                        <button className='btn btn-primary  text-white'>

                            <ArrowRightIcon className='w-5 h-5'></ArrowRightIcon>
                            <span className='mx-4 font-medium'>Details</span>

                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ShopCard;