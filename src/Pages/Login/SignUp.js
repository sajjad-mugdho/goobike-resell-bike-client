import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../Api/Auth';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {

    const { user, createUser, updateUserProfile, loading,
        setLoading,
        signInWithGoogle, } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = "admin";
        // const role = form.role.value;
        const image = form.image.files[0]
        const password = form.password.value;
        console.log("Name:", name, "Email:", email, "Pass:", password, "Image:", image, "role:", role);

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`

        fetch(url, {
            method: 'POST',
            body: formData,

        }).then(res => res.json()).then(imageData => {

            console.log("Image:", imageData);

            createUser(email, password).then(result => {

                console.log(result);
                setAuthToken(result.user)

                updateUserProfile(name, imageData.data.display_url).then(data => {
                    console.log(data);

                    const userData = {
                        email: email,
                        name: name,
                        img: imageData.data.display_url,
                        role: role,

                    }
                    console.log(userData);

                    saveUser(userData)
                        .then(data => console.log(data))
                        .catch(err => console.log(err))
                    toast.success("User Created Successfully")
                }).then(result => {
                    setLoading(false)
                    navigate(from, { replace: true })
                }).catch(err => {
                    console.log(err);
                    toast.error(err.message)
                })


            }).catch(err => {
                console.error(err)
                setLoading(false)
                toast.error(err.message)
            })

        }).catch(err => {
            console.log(err)
        })
    };

    const handleGoogleLogin = () => {
        signInWithGoogle().then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(result.user)
            toast.success("User Created Successfully")
            navigate(from, { replace: true })
        }).catch(err => {
            console.error(err)
            setLoading(false)
            toast.error(err.message)
        })
    }

    const saveUser = async userData => {
        const url = `https://goobike-assigenment-12-server.vercel.app/user/${userData?.email}`

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })

        const data = await response.json()

        return data
    }




    return (
        <div className=' my-20 flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl'>
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
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default SignUp;