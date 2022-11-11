import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://y-six-neon.vercel.app/limitsServices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className='mt-10 mb-20'>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-rose-600">Services</p>
                <h2 className="text-5xl font-semibold">My Service Area</h2>
                <p className='mt-3 p-2 text-xl text-gray-500'>Consulting a healthcare professional, buying medicine, ordering lab <br /> tests and improving your health and wellbeing, all can be done 24/7 with DocTime! </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className='text-center mb-5 mt-8'>
                <Link to='/services'><button className="btn btn-outline text-rose-500">See More</button></Link>
            </div>

        </section>
    );
};

export default Services;