import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './Dashboard.css';

function Dashboard() {
  const [selectedSections, setSelectedSections] = useState([]);

  const handleCheckboxChange = (section) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="dashboard-layout">
      <Topbar />
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content">
          <div className="dashboard-buttons-container">
            {['Acreage', 'Water', 'Production', 'Income', 'Trade', 'Consumption'].map(
              (section) => (
                <div className="dashboard-button-wrapper" key={section}>
                  <input
                    type="checkbox"
                    id={section}
                    name={section}
                    className="dashboard-checkbox"
                    onChange={() => handleCheckboxChange(section)}
                  />
                  <label htmlFor={section} className="dashboard-button">
                    {section}
                  </label>
                </div>
              )
            )}
            <button className="apply-button">Apply</button>
          </div>
          <div className="section-content">
            <h2>Selected Sections: {selectedSections.join(', ')}</h2>
            <p>
              Explore the sections you have selected by navigating through the
              sidebar or clicking apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
