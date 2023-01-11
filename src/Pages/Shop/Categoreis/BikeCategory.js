import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../../../Component/BookingModal/BookingModal';

const BikeCategory = ({ bikeCategory }) => {
    const { name, email, avater, bike_name, price, bikeimage, details, category, condition } = bikeCategory;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={bikeimage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="w-12 rounded-full">
                        <img src={avater} alt="" />
                    </div>
                    <div className="badge badge-secondary">{name}</div>
                </h2>
                <h2 className="card-title">
                    {bike_name}
                    <div className="badge badge-success">NEW</div>
                </h2>
                <p>{details.slice(0, 200)}...</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <div className='flex my-5 justify-end'>
                    <label htmlFor="Booking-modal" className=" btn btn-primary  text-white">
                        <ArrowRightIcon className='w-5 h-5'></ArrowRightIcon>
                        <span className='mx-4 font-medium'>Book Now</span>
                    </label>
                </div>
                <BookingModal bikeCategory={bikeCategory}></BookingModal>
            </div>

        </div>
    );
};

export default BikeCategory;