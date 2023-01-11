import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ bikeCategory }) => {

    const { user } = useContext(AuthContext);

    const { name, email, avater, bike_name, price, bikeimage, details, category, condition } = bikeCategory;
    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center font-bold">{bike_name}</h3>
                    <form className='grid grid-cols-1 gap-3 mx-auto items-center justify-center mt-3'>

                        <label htmlFor="">Name:</label>
                        <input type="text" name='name' disabled value={user?.displayName} placeholder="Name" className="input input-bordered w-full" />

                        <label htmlFor="">Buyer Email:</label>
                        <input type="text" name='email' disabled value={user?.email}   placeholder="Email" className="input input-bordered w-full" />

                        <label htmlFor="">Bike:</label>
                        <input type="text" name='bike' value={bike_name} disabled  placeholder="Bike" className="input input-bordered w-full" />

                        <label htmlFor="">Price:</label>
                        <input name="price" type="text" value={price} disabled placeholder="Type here" className="input input-bordered w-full" />

                        <label htmlFor="">Mobile Number:</label>
                        <input type="Number" placeholder="Number" required className="input input-bordered w-full" />

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