import React from 'react';

const BookingModal = () => {
    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <div className="modal-action">
                        <label htmlFor="Booking-modal" className="btn">Confirm Booking!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;