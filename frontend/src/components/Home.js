import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo1 from '../assets/nexusgainslogo.png'; // Replace with actual logo paths
import logo2 from '../assets/iwmi.png';
import landAllocationImage from '../assets/landAllocation.jpg';
import waterAllocationImage from '../assets/waterAllocation.jpg';
import laborProductivityImage from '../assets/laborProductivity.jpg';
import cropStrategiesImage from '../assets/cropStrategies.jpg';
import populationDynamicsImage from '../assets/populationDynamics.jpg';

const modules = [
  { name: 'Land Allocation', route: '/visualization?section=landAllocation', image: landAllocationImage },
  { name: 'Water Allocation', route: '/visualization?section=waterAllocation', image: waterAllocationImage },
  { name: 'Resource Efficiency', route: '/visualization?section=resourceEfficiency', image: laborProductivityImage },
  { name: 'Crop Strategies', route: '/visualization?section=cropStrategies', image: cropStrategiesImage },
  { name: 'Macro Policies', route: '/visualization?section=macroPolicies', image: populationDynamicsImage },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1>Hydro-economic Decision Support System</h1>

        <div className="modules-grid">
          {modules.map((module, index) => (
            <div
              key={index}
              className="module-thumbnail"
              onClick={() => navigate(module.route)}
            >
              <img src={module.image} alt={module.name} />
              <h3>{module.name}</h3>
            </div>
          ))}
        </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
