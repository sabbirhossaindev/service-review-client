import React, {useState } from 'react';
import ReviewCart from './ReviewCart';


const MyReview = () => {
    const [review, setReview] = useState([])
    
    fetch('http://localhost:5000/myReview')
        .then(res => res.json())
        .then(data => setReview(data))
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                review?.map(rev => <ReviewCart
                    key={rev._id}
                    rev={rev}
                >
                </ReviewCart>)
            }
        </div>
    );
};

export default MyReview;