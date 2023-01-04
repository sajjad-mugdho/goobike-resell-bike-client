import React from 'react';
import BikeCard from './BikeCard';

const Categores = () => {
    const bikeCategorese = [
        {
            id: 1,
            name: "Adventure Bike",
            img: "https://www.webbikeworld.com/wp-content/uploads/2019/11/5-6-750x500.jpg",

        },
        {
            id: 2,
            name: "Cruiser Bike",
            img: "https://www.cycleworld.com/resizer/4-22qLmGnlZw5Q4FEu7S5UHtRPM=/arc-photo-octane/arc3-prod/public/4VOBT2GUKFAWVBZTTAYJWHKXYM.jpg",

        },
        {
            id: 3,
            name: "Naked Bike",
            img: "https://cdn.visordown.com/field/image/ktm-125-duke-1.jpg",

        },
        {
            id: 4,
            name: "Sportsbike",
            img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201409/ktm-launch-rc-390_650_090914043057.jpg?size=690:388",

        },
        {
            id: 5,
            name: "Classic Bike",
            img: "https://www.wallpaperup.com/uploads/wallpapers/2012/08/05/8913/25cbc124868ee736a2dedf1e72e17091.jpg",

        },
        {
            id: 6,
            name: "Scooter Bike",
            img: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/06/08/695745759.jpg",

        },
    ]
    return (
        <div className='mx-5' >
            <h2 className='text-4xl font-bold my-10 text-center mx-auto'>Product Categories</h2>
            <div className='grid mx-auto ease-in duration-300 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    bikeCategorese.map(bike => <BikeCard key={bike.id}
                        bike={bike}></BikeCard>)
                }
            </div>

        </div>
    );
};

export default Categores;