import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='px-10 py-14'>

            <div className='text-center pb-8 text-white'>
                <h3 className='text-xl text-secondary font-bold mb-4'>Contact Us</h3>
                <h2 className='text-3xl text-bold text-white mb-5'>Stay connected with us</h2>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section >
    );
};

export default ContactUs;