import React from 'react';
import bg from '../../assest/image/GooBike.jpg';
import PrimaryBtn from '../../Component/PrimeryBtn/PrimaryBtn';


const Banner = () => {
    return (
        <div className="hero min-h-[600px] " style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
        }}>
            <div className="hero-overlay bg-opacity-25"></div>
            <div className="hero-content text-left text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-left font-bold">SELL YOUR <br />
                        <span className='text-primary'> MOTORCYCLE</span>
                        <br />
                        FOR QUICK CASH</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;