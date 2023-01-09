import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../../Component/PrimeryBtn/PrimaryBtn';
import { AuthContext } from '../../../Context/AuthProvider';

const BikeCard = ({bike,}) => {
    const {category, img} =bike;

   

    
    return (
        <div className="card animate hover:  bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Bike" /></figure>
            <div className="card-body">
                <h2 className="card-title text-primary text-2xl">{category}</h2>
               
                <div className="card-actions  mt-28 justify-end">
                    
                   <Link to={`/bike-category/${category}`}>
                   <PrimaryBtn>See</PrimaryBtn>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default BikeCard;