import React from 'react';
import './Home.css';
import logo1 from '../assets/nexusgainslogo.jfif'; // Replace with actual logo paths
import logo2 from '../assets/punjablogo.png';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hydro-economic Decision Support System</h1>
        <p>
          This dashboard provides insights into the Water-Energy-Food-Environment (WEFE) Nexus in Pakistan.
          Explore different policy scenarios and their impacts on resources.
        </p>

        <div className="objectives-charts-container">
          <div className="objectives-section">
            <h2>Project Objectives</h2>
            <ul>
              <li>Visualize trends over time and across provinces.</li>
              <li>Gain insights into land resource management.</li>
              <li>Analyze water resource allocation.</li>
              <li>Evaluate labor productivity and crop strategies.</li>
              <li>Explore impacts of population dynamics.</li>
            </ul>

            {/* New Section for Additional Content and Logos */}
            <div className="additional-content">
              <p>
                Our project aims to support sustainable development by optimizing resources across water, land, energy, and ecosystems. 
                We encourage cross-sectoral collaboration to make informed decisions.
              </p>
              <div className="logos-section">
                <img src={logo1} alt="Partner Logo 1" className="partner-logo" />
                <img src={logo2} alt="Partner Logo 2" className="partner-logo" />
              </div>
            </div>
          </div>

          {/* Remove the charts-container */}
        </div>
      </div>
    </div>
  );
}

export default Home;
