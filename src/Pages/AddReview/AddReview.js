import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddReview = () => {

    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const ratting = form.ratting.value;
        const message = form.message.value;
        console.log(name, email, ratting, message);

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            ratting,
            message
        }
        console.log(order);
    }    
    

    return (
        <div className='p-5'>
            <Helmet>
                <title>Add Review</title>
            </Helmet>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl text-center mt-5 text-purple-500">Review For: {title}</h2>
                <h4 className="text-3xl text-center mb-5 text-rose-500">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="text" type="text" placeholder="please ratting" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Feedback..." required></textarea>

                <input className='btn mt-4 mb-4' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;