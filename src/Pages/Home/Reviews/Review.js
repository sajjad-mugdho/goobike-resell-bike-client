import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <div className="">
                    <div className="avatar mr-6">
                        <div className="w-16  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                        
                    </div>
                    <div>
                        <h5 className="text-lg font-bold mb-3 text-center">{name}</h5>
                        <p  className='text-center font-semibold mb-3'>{location}</p>

                        <p className='text-center'>{userReview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;