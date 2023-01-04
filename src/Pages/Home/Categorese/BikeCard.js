import React from 'react';
import PrimaryBtn from '../../../Component/PrimeryBtn/PrimaryBtn';

const BikeCard = ({bike}) => {
    const {name, img} =bike;
    return (
        <div className="card transition duration-300 ease-in-out w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Bike" /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary text-2xl">{name}</h2>
               
                <div className="card-actions mt-28 justify-end">
                    <button className='btn transition duration-150 ease-in-out'>test</button>
                   <PrimaryBtn>See</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;