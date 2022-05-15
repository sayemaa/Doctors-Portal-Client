import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock} cardDescription="Open from 10am to 8pm" />
            <InfoCard bgClass="bg-neutral" cardTitle="Our Location" img={marker} cardDescription="Brooklyn, NY 10036, United States" />
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phone} cardDescription="+000 123 456789" />
        </div>
    );
};

export default Info;