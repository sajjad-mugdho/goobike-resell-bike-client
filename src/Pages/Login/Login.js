import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { signin } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password).then(result => {
            const user = result.user;
            console.log(user);
            toast.success("Login SuccessFully")
        }).catch(err => {
            console.error(err)
            toast.error(err.message)
        })
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" placeholder='Email' name="email" id="" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" placeholder='Password' name="password" id="" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>

                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>

                    </div>
                </form>
                <p>New to GooBike? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>

    );
};

export default Login;