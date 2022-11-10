import React, {useState } from 'react';


const MyReview = () => {
    const [review, setReview] = useState([])
    
    fetch('http://localhost:5000/myReview')
        .then(res => res.json())
        .then(data => setReview(data))
    return (
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium quisquam exercitationem veritatis nobis voluptatibus beatae excepturi rem labore ex id error quis laboriosam illo distinctio, nisi dicta. Dolores cumque voluptatem sint eligendi. Recusandae nisi odit vero explicabo voluptate quaerat dignissimos, labore molestiae reprehenderit </p>
            {
                review?.map(r => <h1></h1> )
            }
        </div>
    );
};

export default MyReview;