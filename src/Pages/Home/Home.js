import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <div className='px-12'>
                <Banner />
                <Info />
                <Services />
            </div>
            <div>
                <MakeAppointment />
            </div>
            <div className='px-12'>
                <Testimonials />
            </div>
            <div>
                <ContactUs />
                <Footer />
            </div>
        </div>
    );
};

export default Home;