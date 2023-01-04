import React from 'react';
import About from './About/About';
import Banner from './Banner';
import Categores from './Categorese/Categores';
import CoutomerReviews from './Reviews/CoutomerReviews';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categores></Categores>
            <CoutomerReviews></CoutomerReviews>
            <About></About>
        </div>
    );
};

export default Home;