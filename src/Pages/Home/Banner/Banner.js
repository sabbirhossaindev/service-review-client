import React from 'react';
import img1 from '../../../assets/banner/1.jpg';
import img2 from '../../../assets/banner/2.jpg';
import img3 from '../../../assets/banner/3.jpg';
import img4 from '../../../assets/banner/4.jpg';
import img5 from '../../../assets/banner/5.jpg';
import img6 from '../../../assets/banner/6.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='p-3'>
            <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full carousel-img">
                <img src={img1} alt="" className="w-full rounded-xl" />
            </div> 
            <div id="item2" className="carousel-item w-full carousel-img">
                <img src={img2} alt="" className="w-full rounded-xl" />
            </div> 
            <div id="item3" className="carousel-item w-full carousel-img">
                <img src={img3} alt="" className="w-full rounded-xl" />
            </div> 
            <div id="item4" className="carousel-item w-full carousel-img">
                <img src={img4} alt="" className="w-full rounded-xl" />
            </div>
            <div id="item5" className="carousel-item w-full carousel-img">
                <img src={img5} alt="" className="w-full rounded-xl" />
            </div>
            <div id="item6" className="carousel-item w-full carousel-img">
                <img src={img6} alt="" className="w-full rounded-xl" />
            </div>
            
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
            <a href="#item5" className="btn btn-xs">5</a>
            <a href="#item6" className="btn btn-xs">6</a>
            </div>
        </div>
    );
};

export default Banner;