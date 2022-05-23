import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2K3EADgtfBsgR37n7N948OHnwAeutsuVix2qI7itHaS2UgfGuoUYNqeIdVGely1NC0nLzsAaBbvoDSbuBd2KoQ00rfVslpPB');


const Payment = () => {
    const { id } = useParams();
    const url = `https://blooming-cliffs-74232.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid justify-items-center content-center mt-5'>
            <h3 className="text-2xl font-bold text-accent mt-5">Payment</h3>
            <div className="card w-96 max-w-md bg-base-100 shadow-xl mb-8 mt-6">
                <div className="card-body">
                    <p>Hello, <span className='font-bold'> {appointment.patientName}</span></p>
                    <h2 className='text-lg'>Treatment: <span className='text-secondary font-bold'>{appointment.treatment}</span></h2>
                    <p>Your Appointment: <span className='text-secondary'>{appointment.date}</span></p>
                    <p>Time: {appointment.slot}</p>
                    <p>Price: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-96 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div >

    );
};

export default Payment;