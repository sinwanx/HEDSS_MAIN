import React, { useState } from 'react';
import './Topbar.css';
import logo from '../assets/iwmi.png'; // First logo
import logo2 from '../assets/nexusgainslogo.jfif'; // Second logo
import { FaBell, FaUserCircle } from 'react-icons/fa'; // Notification and User icons
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu state
  const [role, setRole] = useState('Guest'); // Role: Guest or Admin
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks Admin authentication
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
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {/* Notification Icon */}
        <div className="topbar-icon-container">
          <FaBell className="topbar-icon" />
        </div>


        {/* Logout Button */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;
