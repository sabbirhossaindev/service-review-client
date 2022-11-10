import React from 'react';

const ReviewCart = ({ rev }) => {
    const { _id, customer, message, service, serviceName } = rev;
    return (
        <div>
            {customer}
            {message}
            {service}
            {serviceName}
        </div>
    );
};

export default ReviewCart;