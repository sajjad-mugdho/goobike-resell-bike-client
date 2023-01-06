import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className=' my-20 flex justify-center items-center'>
            <div className="card h-[600px] w-96 bg-base-100 shadow-xl">
                <figure><img src={user?.photoURL} alt="User" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {user?.displayName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{user?.email}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{user?.role}</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;