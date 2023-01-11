import React from 'react';
import people1 from '../../../assest/image/user-2.jfif';
import people2 from '../../../assest/image/user-3.jfif';
import people3 from '../../../assest/image/user-4.jfif';
import Review from './Review';

const CoutomerReviews = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Calea Almeda',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'New York'
        },
        {
            _id: 2, 
            name: 'Nat Rayondols',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'New Jersey'
        },
        {
            _id: 3, 
            name: 'Bob Robarts',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Pancelvania'
        },
    ]
    return (
        <section className='mb-20 ' >
            <h2 className='text-4xl font-bold my-10 text-center mx-auto'>Customer Review</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default CoutomerReviews;