import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceCardDetails from './ServiceCardDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect( () =>{
        fetch(`https://y-six-neon.vercel.app/services?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [user?.email])
    return (
        <section className='mt-10 mb-10'>
            <div>
                <h2 className='text-3xl text-bold text-rose-600 text-center'>My Services Component</h2>
            </div>
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