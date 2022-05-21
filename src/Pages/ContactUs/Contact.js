import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className='grid justify-items-center bg-gray-100 px-10 pb-14 pt-5'>
            <h2 className='text-2xl font-bold text-accent my-5'>Contact Us</h2>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input lg:w-96 w-72 max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input lg:w-96 w-72 max-w-md'
                />
                <textarea
                    className='textarea lg:w-96 w-72 max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;