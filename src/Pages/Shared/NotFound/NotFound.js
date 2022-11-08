import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import error from '../../../assets/img/error.gif';


const NotFound = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={error} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="card-actions">
                <Link className='btn btn-secondary' to={`/home`}><button className="text-white text-xl inline-flex justify-center items-center">see all <BsArrowRight /> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;