import React from 'react';
import img from '../../../assest/image/person.png';
import bg from '../../../assest/image/bg-2.jpg';
import PrimaryBtn from '../../../Component/PrimeryBtn/PrimaryBtn';

const About = () => {
    return (
        <section className="hero mt-32s " style={{
            background: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img  src={img} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg" alt='' />
                <div>
                    <h1 className="text-4xl text-white font-bold">About Us!</h1>
                    <p className="py-6 text-white">We are passionate motorcycle enthusiasts changing the way that riders buy motorcycles. In an increasingly digital world, sometimes you need to get away, and we can help you do that. As a part of the Windy City Motorcycle Company we have the largest independently owned motorcycle inventory in the United States with over 1,000 motorcycles available for purchase. We sell all brands and all kinds, so regardless of what your 2 (or 3) wheeled vice is, we've got it. And you can enjoy peace of mind with your purchase as all of our motorcycles are inspected by factory-trained technicians. Check out our huge and constantly growing inventory and contact us with any questions. We look forward to serving you!</p>
                    
                </div>
            </div>
        </section>
    );
};

export default About;