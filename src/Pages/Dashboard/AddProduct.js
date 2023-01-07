import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {
    const { user, loading } = useContext(AuthContext);


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const sellername = form.sellername.value;
        const email = form.email.value;
        const sellerimage = form.sellerimage.value;
        const bikename = form.bikename.value;
        const price = form.price.value;
        const bikedetails = form.bikedetails.value;
        const category = form.category.value;
        const image = form.image.files[0]


        console.log(sellername, email, sellerimage, bikename, bikedetails, image, category);

        const formData = new FormData()

        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`

        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(imageData => {

            console.log("image:", imageData);
            const sellerData = {
                name: sellername,
                email: email,
                avater: sellerimage,
                bike: bikename,
                price: price,
                details: bikedetails,
                bikeimage: imageData.data.display_url,

            }

            saveBike(sellerData).then(data => {
                console.log(data);
                toast.success("Bike Added")
            })
                .catch(err => console.log(err))



        })

        const saveBike = async sellerData => {
            const url = `http://localhost:5000/bikes`
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(sellerData),
            })
            const data = await res.json();

            return data
        }
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
                Add Bike
            </h1>


            <div className=' flex justify-center items-center'>
                <div className='w-1/2 p-7 shadow-xl'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Seller Name</span></label>
                            <input type="text" value={user?.displayName} disabled className="input input-bordered w-full " placeholder='Name' name="sellername" id="" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Seller Email</span></label>
                            <input type="email" value={user?.email} disabled className="input input-bordered w-full " placeholder='Email' name="email" id="" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Seller Image</span></label>
                            <input type="text" value={user?.photoURL} disabled className="input input-bordered w-full " placeholder='Image' name="sellerimage" id="" />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Bike Name</span></label>
                            <input type="text" className="input input-bordered w-full " placeholder='Bike Name' name="bikename" id="" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Details</span></label>
                            <input type="text" className="input input-bordered w-full " placeholder='Bike Details' name="bikedetails" id="" />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Your Bike Category</span></label>
                            <select name='category' className="select select-secondary w-full ">

                                <option className='hover:bg-primary' value="Sportsbike" >Sportsbike</option>
                                <option value="Naked Bike">Naked Bike</option>
                                <option value="Classic Bike">Classic Bike</option>
                                <option value="Scooter Bike">Scooter Bike</option>
                                <option value="Adventure Bike">Adventure Bike</option>
                                <option value="Cruiser Bike">Cruiser Bike</option>

                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Price</span></label>
                            <input type="text" className="input input-bordered w-full " placeholder='Price' name="price" id="" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Upload Your Bike Photo</span></label>
                            <input type="file" name='image' className="file-input w-full input-primary bg-primary my-5 max-w-xs" />
                        </div>

                        <input className='btn btn-secondary w-full' value="Sign Up" type="submit" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default AddProduct;