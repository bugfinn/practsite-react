import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Image */}
        <div className="login-image">
          <img src="/images/products/signup.jpg" alt="Shopping" />
        </div>

        {/* Right Side - Form */}
        <div className="login-form-container">
          <div className="login-form">
            <h1>Log in to Exclusive</h1>
            <p className="subtitle">Enter your details below</p>

            <form onSubmit={handleLogin}>
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

              <div className="login-actions">
                <button type="submit" className="login-btn">
                  Log In
                </button>
                <a href="/forgot-password" className="forgot-password">
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;