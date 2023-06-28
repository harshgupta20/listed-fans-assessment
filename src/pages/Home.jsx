import React from 'react';
import { signInWithPopup } from 'firebase/auth';

import "../styles/Home.css";

// BUTTOM IMAGES
import GoogleAuthImage from "../assets/google-signup.png";
import AppleAuthImage from "../assets/apple-signup.png";
import { auth, provider } from '../config/Firebase';

import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const SignInWithGoogle = async () => {
        signInWithPopup(auth, provider).then((res)=> {
            navigate("/dashboard");
            console.log(res)
        }).catch((error)=> {
            alert("A Network Error, Kindly refresh the browser and try again");
            console.log(error);
        })
    }



    return (
        <>
            <div id="home-main">
                <div id="home-left-panel">
                    {/* left=lft, pl=panel */}
                    <h2 id="home-lft-pl-h2">Board.</h2>
                </div>
                <div id="home-right-panel">
                    <div id="home-ryt-pl-signup">
                        <div id="home-ryt-pl-signup-heading">
                            <p id="home-ryt-pl-signup-title">Sign In</p>
                            <p id="home-ryt-pl-signup-title-2">Sign in to your account</p>
                        </div>

                        <div id="home-ryt-pl-signup-btn">
                            <img id="home-ryt-pl-signup-btn1" onClick={SignInWithGoogle} src={GoogleAuthImage} alt="googleAuthImage" />
                            <img id="home-ryt-pl-signup-btn2" src={AppleAuthImage} alt="appleAuthImage" />
                        </div>

                        <div id="home-ryt-pl-form">
                            <div id="home-ryt-pl-email">
                                <label id="home-ryt-pl-email-label" htmlFor="home-ryt-pl-email-input">Email address</label>
                                <input type="text" id='home-ryt-pl-email-input' />
                                <label id="home-ryt-pl-password-label" htmlFor="home-ryt-pl-password-input">Password</label>
                                <input type="password" id='home-ryt-pl-password-input' />

                                <p id="home-ryt-pl-form-forget">Forgot password?</p>

                                <button id="home-ryt-pl-form-btn">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home