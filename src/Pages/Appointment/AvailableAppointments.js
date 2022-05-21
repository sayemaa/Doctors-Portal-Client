import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://blooming-cliffs-74232.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12 px-12'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointments;