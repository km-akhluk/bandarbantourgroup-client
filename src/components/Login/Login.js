import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './login.css'



const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const { signInUsingGoogle, user } = useAuth()
    const handleSignInWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
       <div className="login-page">
<div className="login-form">
<h2 className='m-3 barlow'>Please Login</h2>
            <button onClick={handleSignInWithGoogle} className="btn btn-primary ">
                Sign In With Google
            </button>
</div>
       </div>
        </div>
    );
};

export default Login;