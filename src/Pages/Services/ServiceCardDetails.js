import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCardDetails = ({service}) => {
    const { _id, img, price, title, description } = service;
    console.log(service);

    return (
        <section className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="img" className='p-5 rounded-3xl'/>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl text-orange-600 font-semibold'>Price: {price}</p>
                    <p className='text-xl text-gray-500'>{description}</p>
                    <div className="card-actions justify-end">
                        <Link className='btn btn-secondary' to={`/addService${_id}`}><button className="text-white text-3xl inline-flex justify-center items-center"> <BsArrowRight /> </button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCardDetails;