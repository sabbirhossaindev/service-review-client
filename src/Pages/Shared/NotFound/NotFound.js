import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import error from '../../../assets/img/error.gif';


const NotFound = () => {
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-10 mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl items-center justify-center text-center">
                <figure className="px-10 pt-10">
                    <img src={error} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="card-actions">
                    <Link className='btn btn-secondary' to='/'><button className="text-white text-xl inline-flex justify-center items-center">Go Too Home <BsArrowRight /> </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;