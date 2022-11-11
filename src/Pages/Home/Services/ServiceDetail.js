import React, { useContext,} from 'react';
import { toast } from 'react-toastify';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetail = () => {

    const service = useLoaderData();
    console.log('service', service);
    const { _id, img, price, title, description } = service;
    const { user } = useContext(AuthContext);


    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const number = form.number.value;
        const message = form.message.value;
        console.log(name, email, number, message);

        const submit = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            number,
            message
        }

        fetch(`https://y-six-neon.vercel.app/services`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submit)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data is cammong',data);
                if(data.acknowledged){
                    toast.success('Submit successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));  
    }
    
    return (
        <section>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="img" className='p-5 rounded-3xl'/>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p className='text-xl text-orange-600 font-semibold'>Price: {price}</p>
                    <p className='text-xl text-gray-500'>{description}</p>
                </div>
            </div>

            <div>
                <div className='p-5'>
                    <form onSubmit={handleService}>
                        <h2 className="text-4xl text-center mt-5 text-purple-500">Service: {title}</h2>
                        <h4 className="text-3xl text-center mb-5 text-rose-500">Price: {price}</h4>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                            <input name="number" type="number" placeholder="Your rating" className="input input-ghost w-full  input-bordered" required />
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your feedback" required></textarea>

                        <input className='btn mt-4 mb-4' type="submit" value="Please Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;