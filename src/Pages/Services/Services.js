import React, { useEffect, useState } from 'react';
import ServiceCardDetails from './ServiceCardDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className='mt-10 mb-10'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCardDetails
                        key={service._id}
                        service={service}
                    ></ServiceCardDetails>)
                }
            </div>
        </section>
    );
};

export default Services;