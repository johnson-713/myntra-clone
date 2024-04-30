import './Login.css'

export const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className='login-input-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <input type='password' placeholder='Your Password' />
        </div>
        <div className='login-agree'>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
        <button>Continue</button>
        <p>Already have an account? <span>Login here</span></p>      
      </div>
    </div>
  )
}
