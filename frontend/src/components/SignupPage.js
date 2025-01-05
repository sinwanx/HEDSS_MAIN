import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'Student', // Default value for user type
  });
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Invalid email format');
      return;
    }
    console.log('Signup successful:', formData);
  };

  return (
    <div className="signup-container">
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Signup Form' : 'Show Signup Form'}
      </button>
      {showForm && (
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
            </select>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignupPage;
