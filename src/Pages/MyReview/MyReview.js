import React, {useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCart from './ReviewCart';


const MyReview = () => {
    const [review, setReview] = useState([])
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setReview(data)
            })
        
    }, [user?.email, logOut])
    
        const handleDelete = id =>{
            const proceed = window.confirm('Are you sure, you want to cancel this order');
            if(proceed){
                fetch(`http://localhost:5000/myReview/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('Doctor-token')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0){
                        toast.success('deleted successfully!')
                        const remaining = review.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })
            }
        }
    
    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/myReview/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Genius-token')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
            
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = review.filter(odr => odr._id !== id);
                const approving = review.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newReview = [approving, ...remaining];
                setReview(newReview);
            }
        })
    }
    
    return (
        <div>
            <h2 className="text-3xl text-center mb-5 text-purple-600">You have {review.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>FeetBack</th>
                            <th>Approve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review?.map(rev => <ReviewCart
                                key={rev._id}
                                rev={rev}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewCart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;