import React from 'react';

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
            </div>
        </div>
    );
};

export default BikeCategory;