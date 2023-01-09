import React from 'react';

const Bike = ({bike}) => {
    const {name, email, avater, bike_name, price, bikeimage, details, category, condition } = bike;
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
                <div className='flex my-5 justify-between'>
                    <button className='btn btn-sm btn-primary text-white'>
                        Mark For AD
                    </button>
                    <button className='btn  btn-sm bg-red-500  text-white'>
                        Delete
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Bike;