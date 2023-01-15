
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);


    return (
        <>
            <div>
                <h1 className='text-2xl'>Payment For <strong>{booking?.bookedItem?.bike_name}</strong></h1>

                <h2 className="text-xl">Your Price is <strong>${booking?.bookedItem?.price} USD</strong></h2>

            </div>

            <div className='w-96 mt-5 input'>
                <h2 className='text-2xl my-5 text-accent'>Provide Your Card Details</h2>

                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </>
    );
};

export default Payment;