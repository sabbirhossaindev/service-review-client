import React from 'react';
import { Helmet } from 'react-helmet';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const service = form.service.value;
        const number = form.number.value;
        const message = form.message.value;
        console.log(serviceName, service, number, message);
    }
    
    return (
        <section>
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <div>
                <h2 className='text-center text-3xl'>Add service</h2>
            </div>
            <div className='p-5'>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="serviceName" type="text" placeholder="edit service name" className="input input-ghost w-full  input-bordered" />
                    <input name="service" type="text" placeholder="Enter Service Id" className="input input-ghost w-full  input-bordered" />
                    <input name="name" type="text" placeholder="Service url" className="input input-ghost w-full  input-bordered" />
                    <input name="number" type="text" placeholder="Balance" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Description" required></textarea>

                <input className='btn mt-4 mb-4' type="submit" value="Submit" />
            </form>
        </div>
        </section>
    );
};

export default AddService;