import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen px-6" style={{
            backgroundImage: `url(${bg})`
        }} >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div className='lg:mr-28'>
                    <h1 className="text-5xl font-bold lg:text-7xl">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div >
    );
};

export default Banner;