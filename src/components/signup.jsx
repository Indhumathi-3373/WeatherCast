import '../styles/signup.css'
import Navbar from './navbar'
import { useState } from 'react';
import Endnav from './footer'


export default function signup() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <div className="signup-card">
     
        {isLogin ? (
          <>
            <h2 >Welcome back {" "} !</h2>

            <form className="signup-form">
              <label>Email*</label>
              <input type="email" placeholder='Enter email' />

              <label>Password*</label> 
              <input type="password" placeholder='Enter your password'/>

              <button>Login</button>
            </form><div className='login-bottom'>
            <span className='login-forgot' onClick={()=> setreset(false)}>{" "}Forgot password ?</span>
            <p className="login-text">
              Don't have an account?
              <span onClick={() => setIsLogin(false)}>
                {" "}Sign Up
              </span>
            </p></div>
          </>
        ) : (
          <>
            <h1>Create Account</h1>

            <form className="signup-form">
              <label>Full Name*</label>
              <input type="text" placeholder='Enter your name' />

              <label>Email*</label>
              <input type="email" placeholder='Enter your email'/>

              <label>Password*</label>
              <input type="password" placeholder='Enter your password'/>

              <label>Confirm Password*</label>
              <input type="password" placeholder='Re-enter you password'/>

              <button>Create Account</button>
            </form>
            
            <p className="login-text" style={{marginTop:'3%'}}>
              Already have an account?
              <span onClick={() => setIsLogin(true)}>
                {" "}Login
              </span>
            </p>
          </>
        )}

      </div>
    </div> <Endnav/></>
  );
}