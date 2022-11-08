import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import me from '../.././../assets/features/Ellipse 2.png'
import me2 from '../.././../assets/features/Ellipse 2 (1).png';
import quote from '../.././../assets/features/quote 1.png';

const Feedback = () => {
    return (
        <section className='mb-14 mt-20'>
            <div className='text-center mb-5 mt-8'>
                <p className="text-2xl font-bold text-rose-600">FeetBack</p>
                <h2 className="text-5xl font-semibold">What Customer Says</h2>
                <p className='mt-3'>“Thank you for being the dedicated, thoughtful, and compassionate doctor that you are! You always go above and beyond and work tirelessly towards a healthy outcome. I feel so blessed to know you and have you as my doctor.”</p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-14 p-3'>
                <div className='p-3 shadow-lg rounded-xl'>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <img src={me} alt="me" />
                            </div>
                            <div>
                                <h3 className='text-2xl bold'>Nadim Joy</h3>
                                <h5 className='text-gray-500'>Student</h5>
                            </div>
                        </div>
                        <div>
                            <img src={quote} alt="icon" />
                        </div>
                    </div>
                    <div className='p-5'>
                        <p className='text-gray-500'>Eye Health Vision Centers, located throughout the South Coast region of Massachusetts and Rhode Island, is very pleased to be able to offer this growing collection of real patient feedback and reviews. Online feedback has become an immensely important way for patients to research medical providers, including optometrists, ophthalmologists, and opticians. At each of our five facilities, our top priority is ensuring our patients best vision and eye health, which are crucial to living a full and independent life.</p>
                        <h4 className='flex mt-3 gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                    </div>
                </div>

                <div className='p-3 shadow-lg rounded-xl'>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <div className='mr-3'>
                                <img src={me2} alt="me" />
                            </div>
                            <div>
                                <h3 className='text-2xl bold'>Sabbir Hossain</h3>
                                <h5 className='text-gray-500'>Developer</h5>
                            </div>
                        </div>
                        <div>
                            <img src={quote} alt="icon" />
                        </div>
                    </div>
                    <div className='p-5'>
                        <p className='text-gray-500'>A blood test sometimes referred to as a blood panel is a laboratory examination of a blood sample used to check for a variety of things, including the functioning of certain organs such as the liver, kidneys, thyroid and heart, infections and certain genetic disorders, as well as to assess an individual's general health.</p>
                        <h4 className='flex mt-3 gap-1'>
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                            <BsFillStarFill className='text-orange-500' />
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;