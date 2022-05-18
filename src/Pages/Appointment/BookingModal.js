import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);

        // to close the modal
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-secondary">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 justify-items-center gap-5 mt-5'>
                        <input
                            type='text'
                            disabled
                            value={format(date, 'PP')}
                            className='input input-bordered w-full max-w-md'
                        />
                        <select name="slot" className="select select-bordered w-full max-w-md">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input
                            type='text'
                            name="name"
                            placeholder='Full Name'
                            className='input input-bordered w-full max-w-md'
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            className='input input-bordered w-full max-w-md'
                        />
                        <input
                            type='text'
                            name='phone'
                            placeholder='Phone Number'
                            className='input input-bordered w-full max-w-md'
                        />
                        <input
                            type='submit'
                            value='Submit'
                            className='btn text-white border-0 bg-gradient-to-r from-secondary to-primary w-full max-w-md'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;