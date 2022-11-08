import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Team></Team>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;