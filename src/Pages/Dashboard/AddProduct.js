import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const handleSubmit =e => {
        console.log("clickd");
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
                Add Bike
            </h1>


            <div className=' my-20 flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" placeholder='Name' name="name" id="" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" placeholder='Email' name="email" id="" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Are You a Seller Or Buyer?</span></label>
                        <select name='role' className="select select-secondary w-full max-w-xs">

                            <option className='hover:bg-primary' value="Buyer" >Buyer</option>
                            <option value="Seller">Seller</option>

                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Upload Your Photo</span></label>
                        <input type="file" name='image' className="file-input w-full input-primary bg-primary my-5 max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" placeholder='Password' name="password" id="" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>

                    </div>
                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                    <div>

                    </div>
                </form>
                <p>Already have an Account <Link className='text-secondary' to="/login">Login Now</Link></p>
                <div className="divider">OR</div>
                {/* <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
            </div>
        </div>
        </div>
    );
};

export default AddProduct;