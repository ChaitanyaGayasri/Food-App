 import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({ setLoginUp }) => {

    const [currState,setcurrState] = useState('Login')
  return (
      <div className='login-popup'>
          <form className='login-popup-container'>
              <div className='login-popup-title'>
                  <h1>{currState}</h1>
                  <img onClick={() => setLoginUp(false) } src={assets.cross_icon } alt=''/>
              </div>
              <div className='login-popup-inputs'>
                  {currState === 'Login' ? <></> : <input type='text' placeholder='Enter Your Name' required />}

                  <input type='email' placeholder='Enter Your Email' required />
                  <input type='password' placeholder='Enter Your Password' required/>
              </div>
              <button >{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
              <div className='login-pop-up-condition'>
                  <input type='checkbox' required />
                  <p>By Continueing, i agree to the terms of use & privacy policy</p>
              </div>
              {currState === 'Login' ? <p>Create a New account? <span onClick={() => setcurrState('Sign Up')}>Click Here</span></p> : <p>Already have an account? <span onClick={() => setcurrState('Login')}>Login Here</span></p>}

          </form>
    </div>
  )
}

export default LoginPopUp