import React from 'react';
import { auth } from '../config/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {

    const [user] = useAuthState(auth);

    return (
        <>
            {
                user && <>
                    <img src={user.photoURL} alt="userImage" />
                    <p>User : {user.displayName}</p>
                    <p>Email : {user.email}</p>
                </>
            }
        </>
    )
}

export default Dashboard