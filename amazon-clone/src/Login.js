import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = (event) => {
        // stops the refresh
        event.preventDefault();

        // login logic
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in, redirect to homepage
            history.push("/");
        })
        .catch((error)=> alert(error.message));
        
    };

    const register = (event) => {
        // stops the refresh
        event.preventDefault();

        // register logic
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // create a user and logged in, redirect to homepage
            history.push("/");
        })
        .catch((error)=> alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
