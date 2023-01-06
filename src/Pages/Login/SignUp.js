import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)

    // const navigate = useNavigate();
    // const location = location.state?.from?.pathname || '/';


    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const image = form.image.files[0]
        const password = form.password.value;
        console.log("Name:", name, "Email:", email, "Pass:", password, "Image:", image, "role:", role);

        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`

        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(imageData => {

            console.log("Image:", imageData);

            createUser(email, password).then(result => {

                console.log(result);

                updateUserProfile(name, imageData.data.display_url).then(data => {
                    console.log(data);
                    toast.success("User Created Successfully")
                })

            }).catch(err => console.error(err))

        }).catch(err => console.error(err))
    }



    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign-Up</h2>
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
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default SignUp;