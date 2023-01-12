import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ bikeCategory }) => {

    const { user } = useContext(AuthContext);

    const { name, email, avater, bike_name, price, bikeimage, details, category, condition } = bikeCategory;

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const meetingLocation = form.location.value;
        const itemName = form.bike.value;
        const itemPrice = form.price.value;
        const buyerNumber = form.number.value;

        console.log(buyerName, itemName, itemPrice, buyerNumber, buyerEmail, meetingLocation);

        const bookingData = {
            buyerName,
            buyerNumber,
            buyerEmail,
            meetingLocation,
            itemName,
            itemPrice,

            bookedItem: bikeCategory,
        }

        console.log(bookingData);

        form.reset()

        fetch('https://goobike-assigenment-12-server.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingData)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.acknowledged) {
                
                toast.success("Booking Confirmed")
                
            }
            else {
                toast.error(data.message);
            }
        })
    }
    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center font-bold">{bike_name}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mx-auto items-center justify-center mt-3'>

                        <label htmlFor="">Name:</label>
                        <input type="text" name='name' disabled value={user?.displayName} placeholder="Name" className="input input-bordered w-full" />

                        <label htmlFor="">Buyer Email:</label>
                        <input type="text" name='email' disabled value={user?.email} placeholder="Email" className="input input-bordered w-full" />

                        <label htmlFor="">Bike:</label>
                        <input type="text" name='bike' value={bike_name} disabled placeholder="Bike" className="input input-bordered w-full" />

                        <label htmlFor="">Price:</label>
                        <input name="price" type="text" value={price} disabled placeholder="Type here" className="input input-bordered w-full" />

                        <label htmlFor="">Mobile Number:</label>
                        <input type="number" name='number' placeholder="Number" required className="input input-bordered w-full" />

                        <label htmlFor="">Meeting Location:</label>
                        <input name='location' type="text" placeholder="Location" required className="input input-bordered w-full" />

                        <input type="submit" className='btn btn-primary w-full  text-white' value="Confirm-Booking" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;