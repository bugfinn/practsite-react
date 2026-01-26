import '../styles/SignUp.css'

function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Side - Image */}
        <div className="signup-image">
          <img src="/images/products/signup.jpg" alt="Shopping" />
        </div>

        {/* Right Side - Form */}
        <div className="signup-form-container">
          <div className="signup-form">
            <h1>Create an account</h1>
            <p className="subtitle">Enter your details below</p>

            <form>
              <input 
                type="text" 
                placeholder="Name" 
                required 
              />
              
              <input 
                type="text" 
                placeholder="Email or Phone Number" 
                required 
              />
              
              <input 
                type="password" 
                placeholder="Password" 
                required 
              />

              <button type="submit" className="create-account-btn">
                Create Account
              </button>

              <button type="button" className="google-btn">
                <img src="/images/icons/Icon-Google.png" alt="Google" />
                Sign up with Google
              </button>
            </form>

            <p className="login-link">
              Already have account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp