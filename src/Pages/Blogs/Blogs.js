import React from 'react';

const Blogs = () => {
    return (
        <section className='mt-8 mb-10 p-5'>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-3">
                <div className="collapse-title text-xl font-medium">
                    1. Difference between SQL and NoSQL ?
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-3">
                <div className="collapse-title text-xl font-medium">
                    2. What is JWT, and how does it work ?
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-3">
                <div className="collapse-title text-xl font-medium">
                    3. What is the difference between javascript and NodeJS ?
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-3">
                <div className="collapse-title text-xl font-medium">
                    4. How does NodeJS handle multiple requests at the same time ?
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>

        </section>
    );
};

export default Blogs;