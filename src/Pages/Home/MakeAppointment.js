import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}>
            <div className='flex justify-center items-center max-w-7xl mx-auto lg:p-0 p-3 my-28'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-150px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 px-12 py-5 my-5'>
                    <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
                    <h2 className='text-3xl text-bold text-white py-5'>Make an Appointment today</h2>
                    <p className='text-white mr-5 pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;