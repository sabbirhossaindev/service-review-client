import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const service = useLoaderData();
    const {_id, img, price, title, description} = service;
    return (
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
            </div>
        </div>
    );
};

export default ServiceDetail;