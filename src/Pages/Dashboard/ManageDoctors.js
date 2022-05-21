import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-accent my-5'>Manage Doctors: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;