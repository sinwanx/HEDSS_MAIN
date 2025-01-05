import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import iwmiLogo from '../assets/iwmi.png';
import nexusGainsLogo from '../assets/nexusgainslogo.png';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const validUsername = 'iwmiadmin';
    const validPassword = 'iwmi@1';

    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid username or password'); // Show alert for incorrect credentials
    }
  };

  const handleSignup = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-box-container">
        <div className="login-box-background"></div>
        <div className="login-box">
          <div className="ticker">
            <div className="ticker-inner">
              <img src={nexusGainsLogo} alt="Nexus Gains Logo" className="ticker-logo" />
              <img src={nexusGainsLogo} alt="Nexus Gains Logo" className="ticker-logo" />
            </div>
          </div>
          <img src={iwmiLogo} alt="IWMI Logo" className="logo" />
          <h2>Welcome to the Hydro Economic Decision Support System</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              required
            />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit" className="login-btn">Login</button>
            <button type="button" className="signup-btn" onClick={handleSignup}>Sign Up</button>
          </form>
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
