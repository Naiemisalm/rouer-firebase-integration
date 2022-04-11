import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.int';

const auth= getAuth(app);



const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();

        const from = location?.state?.form?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( () =>{
            navigate(from,{replace:true})
        })
    }
    return (

        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={handleGoogleSignIn }>Google Sign In</button>
            </div>
            <form >
                <input type="email" name="" id="" placeholder='enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='enter your valid password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;