import React, { useState } from 'react';
import './Topbar.css';
import logo from '../assets/iwmi.png'; // First logo
import logo2 from '../assets/nexusgainslogo.jfif'; // Second logo
import { FaBell, FaUserCircle, FaSearch, FaUpload } from 'react-icons/fa'; // Notification, User, Search, and Upload icons
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu state
  const [role, setRole] = useState('Guest'); // Role: Guest or Admin
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks Admin authentication
  const [showUploadContainer, setShowUploadContainer] = useState(false); // Show/Hide upload container
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData'); // Clear stored user data
    alert('You have been logged out!');
    navigate('/login'); // Redirect to the login page
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === 'Guest') {
      setIsAuthenticated(false);
      setAdminPassword('');
    }
  };

  const authenticateAdmin = () => {
    const correctPassword = 'admin123';
    if (adminPassword === correctPassword) {
      setIsAuthenticated(true);
      alert('Admin authenticated successfully!');
    } else {
      alert('Incorrect password!');
    }
  };

  const toggleUploadContainer = () => {
    setShowUploadContainer(!showUploadContainer);
  };

  const handleAddScenario = () => {
    alert('Add Scenario clicked!');
    // Add your logic for adding a scenario here
  };

  const handleDeleteScenario = () => {
    alert('Delete Scenario clicked!');
    // Add your logic for deleting a scenario here
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="dashboard-label">CGE-W Dashboard</div>
        <img src={logo} alt="Primary Logo" className="topbar-logo" />
        <img src={logo2} alt="Secondary Logo" className="topbar-logo secondary-logo" />
      </div>

      <div className="topbar-center">
        <h1 className="topbar-title">Hydro-Economic Decision Support System Results</h1>
      </div>

      <div className="topbar-right">
        {/* Search Icon */}
        <div className="topbar-icon-container">
          <FaSearch className="topbar-icon" />
        </div>

        {/* Notification Icon */}
        <div className="topbar-icon-container">
          <FaBell className="topbar-icon" />
        </div>

        {/* Upload Icon */}
        <div className="topbar-icon-container" onClick={toggleUploadContainer}>
          <FaUpload className="topbar-icon" />
          {showUploadContainer && (
            <div className="upload-container">
              <h3>Upload File</h3>
              <input type="file" className="file-input" />
              <button className="upload-button">Upload</button>
            </div>
          )}
        </div>

        {/* Role Selection */}
        <select value={role} onChange={handleRoleChange} className="role-select">
          <option value="Guest">Guest</option>
          <option value="Admin">Admin</option>
        </select>

        {/* Admin Authentication */}
        {role === 'Admin' && !isAuthenticated && (
          <div className="admin-auth-dropdown">
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="admin-password-input"
            />
            <button onClick={authenticateAdmin} className="auth-button">Authenticate</button>
          </div>
        )}

        {/* Admin Actions */}
        {role === 'Admin' && isAuthenticated && (
          <div className="admin-actions">
            <button className="scenario-button" onClick={handleAddScenario}>
              Add Scenario
            </button>
            <button className="scenario-button" onClick={handleDeleteScenario}>
              Delete Scenario
            </button>
          </div>
        )}

        {/* Logout Button */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;
