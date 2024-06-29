import React from 'react'
import './Signup.css';
const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>SignUp Now!</h1>
            <div className="input-box">
            <input type="text" placeholder="First Name" required />
            </div>
            <div className="input-box">
            <input type="text" placeholder="Last Name" required />
            </div>

            <div className="input-box">
                <input type ="text" placeholder="Username/Email Id" required />
            </div>

            <div className="input-box">
                <input type ="password" placeholder="password" required />
            </div>

            {/* <div className="remember-forgot">
                <label><input type ="checkbox" />Remember Me</label>
                <a href='#'>Forgot password?</a>
            </div> */}

            <button type="submit">SignUp</button>
            
            {/* <div className='register-link'>
                <p> Don't have an account? <a href='#'>Register</a></p>
            </div> */}


        </form>

    </div>
  )
}

export default LoginForm