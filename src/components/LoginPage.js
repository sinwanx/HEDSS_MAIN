import React, { useState } from 'react';
import './LoginPage.css';
import iwmiLogo from '../assets/iwmi.png';
import userIcon from '../assets/usericon.jpg';
import lockIcon from '../assets/lockicon.png';
import punjabLogo from '../assets/punjablogo.png';
import nexusGainsLogo from '../assets/nexusgainslogo.jfif';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function LoginPage() {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Initialize navigate function

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

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Ticker section with sliding logos */}
        <div className="ticker">
          <div className="ticker-inner">
            <img src={punjabLogo} alt="Punjab Logo" className="ticker-logo" />
            <img src={nexusGainsLogo} alt="Nexus Gains Logo" className="ticker-logo" />
            <img src={punjabLogo} alt="Punjab Logo" className="ticker-logo" />
            <img src={nexusGainsLogo} alt="Nexus Gains Logo" className="ticker-logo" />
          </div>
        </div>

        {/* IWMI Logo and login form */}
        <img src={iwmiLogo} alt="IWMI Logo" className="logo" />
        <h2>International Water Management Institute</h2>
        <h3>Welcome to Hydro-economic Decision Support System</h3>
        <p>Please sign-in to your account</p>

        <form className="login-form" onSubmit={handleLogin}> {/* Attach handleLogin to form submission */}
          <div className="input-container">
            <img src={userIcon} alt="User Icon" className="input-icon" />
            <input
              type="text"
              placeholder="Email or Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
          </div>
          <div className="input-container">
            <img src={lockIcon} alt="Lock Icon" className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
