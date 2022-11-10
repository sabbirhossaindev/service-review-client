import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BsFillTrash2Fill } from 'react-icons/bs';

const ReviewCart = ({ rev, handleDelete, handleStatusUpdate }) => {
    const { _id, customer, message, service, serviceName, price, status  } = rev;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    return (
        <tr>
            <Helmet>
                <title>My Review</title>
            </Helmet>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><BsFillTrash2Fill className='text-red-700' /></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.img && 
                                <img src={reviewService.img} alt="review img" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{price}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{message}</span>
            </td>
            <th>
                <button 
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs bg-secondary text-white">{status ? status : 'pending'}
                </button>
            </th>
        </tr>
    );
};

export default ReviewCart;