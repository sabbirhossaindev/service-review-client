import React from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const id = form.id.value;
        const img = form.img.value;
        const price = form.price.value;
        const message = form.message.value;
        console.log(title, price, img, id, message);

    const newService = {
        title: title,
        price: price,
        img: img,
        id: id,
        description: message
    }
    fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newService)
    })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            toast.success('Service add successful')
        })
        .catch(error => toast.error(error.message))


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
                    <input name="title" type="text" placeholder="title" className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="text" placeholder="photoURL" className="input input-ghost w-full  input-bordered" />
                    <input name="id" type="text" placeholder="id" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Description" required></textarea>

                <input className='btn mt-4 mb-4' type="submit" value="Submit" />
            </form>
        </div>
        </section>
    );
};

export default AddService;