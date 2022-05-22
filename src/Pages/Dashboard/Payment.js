import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`

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
            <div class="card w-80 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p>Hello, <span className='text-secondary font-bold'> {appointment.patientName}</span></p>
                    <h2 class="card-title">Pay for: <span className='text-secondary'>{appointment.treatment}</span></h2>
                    <p>Your Appointment: <span className='text-secondary'>{appointment.date}</span></p>
                    <p>Time: {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-80 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                </div>
            </div>
        </div >

    );
};

export default Payment;