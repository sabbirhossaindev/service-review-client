import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {_id ,img, price, title, description} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
            {/* <figure><img src={img} alt="Shoes" className='p-5 rounded-3xl'/></figure> */}
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="img" className='p-5 rounded-3xl'/>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-orange-600 font-semibold'>Price: {price}</p>
                <p className='text-xl text-gray-500'>{description.slice(0, 100) + " ..."}</p>
                <div className="card-actions justify-end">
                    <Link className='btn btn-secondary' to={`/checkout/${_id}`}><button className="text-white text-xl inline-flex justify-center items-center">Details <BsArrowRight /> </button></Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;