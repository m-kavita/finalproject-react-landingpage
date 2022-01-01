import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';

function ProfileScreen() {

    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    function logout() {
        updateUser(
            {
                ...{}
            }
        )
        localStorage.clear()
    }

    if (!localStorage.getItem('jsonwebtoken')) {
        return (<Redirect to="/loginscreen" />)
    }
    else {
        return (
            <div>
                <div className="container py-5" style={{maxWidth: 600 }}>
                    <h1>My Profile</h1>
                    <div>
                        <ul>
                            <li>{firstName}</li>
                            <li>{lastName}</li>
                            <li>{email}</li>
                            <li><img src={avatar} width='128' alt={firstName} /></li>
                        </ul>
                    </div>
                    <button onClick={logout} className="btn">Log out</button>
                </div>  
            </div>
        )
    }
}

export default ProfileScreen;