import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';



function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img 
             className='loginScreen__logo'
             src='https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png' 
            alt=''/>
            <button onClick={() => setSignIn(true)}
             className='loginScreen__button'
            >
                Sign in
            </button>
            <div className='loginScreen__gradient'/>
            
        </div>
        <div className='loginScreen__body'>
            {signIn ? (
                <SignupScreen />
            ) : (

            <>
            <h4>(Welcome to Chinna's Netflix clone Project, where you will feel real Netflix UI)</h4>
            <h1>Unlimited films, TV programmes and more.</h1>
        

            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
                Ready to watch? 
                Enter your email to create or restart your
                membership.
            </h3> 
            <div className='loginScreen__input'>
                <form>
                    <input typr="email" placeholder='Email Address' />
                    <button 
                    onClick={() => setSignIn(true)}
                    className='loginScreen__getStarted'>
                        GET STARTED
                    </button>
                </form>
            </div>
            </>   
            )}
        </div>
    </div>
  );
}

export default LoginScreen