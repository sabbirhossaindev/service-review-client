import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import person from '../../../assets/banner/1.jpg'

const About = () => {
    return (
        <section className='my-10'>
            <div>
                <p className="text-2xl text-center font-bold text-rose-600">About Me</p>
            </div>
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' w-full'>
                        <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-full'>
                        <h1 className="my-5 text-5xl font-bold">About My Self </h1>
                        <p className="py-6 text-xl text-gray-500">Assalamu-alaykum I'm Sabbir Hossain CEO & Founder of 𝒮𝒶𝒷𝒷𝒾𝓇..𝕀𝕋 ⏧. I am currently studying for a Diploma in Engineering of Computer Science. My campus name is Habiganj polytechnic Institute. I am a programmer, web developer, app developer & Freelancer. My birth place is located in Rangpur District Badarganj Thana Ramnathpur Union.I love Football & Coding. I like to learn and teach. </p>
                        <Link className='btn btn-secondary' to='/'><button className="text-white text-xl inline-flex justify-center items-center">see all <BsArrowRight /> </button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;