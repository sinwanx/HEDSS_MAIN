import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const modules = [
    { name: 'Land Allocation', path: '/landAllocation', img: 'path/to/landAllocation.jpg' },
    { name: 'Water Allocation', path: '/waterAllocation', img: 'path/to/waterAllocation.jpg' },
    { name: 'Labor Productivity', path: '/labor-productivity', img: 'path/to/laborProductivity.jpg' },
    { name: 'Crop Strategies', path: '/crop-strategies', img: 'path/to/cropStrategies.jpg' },
    { name: 'Population Dynamics', path: '/population-dynamics', img: 'path/to/populationDynamics.jpg' },
    { name: 'Data Visualization', path: '/data-visualization', img: 'path/to/dataVisualization.jpg' },
  ];

  return (
    <div className="landing-page">
      <h1>Welcome to the Dashboard</h1>
      <div className="modules">
        {modules.map((module) => (
          <div key={module.name} className="module" onClick={() => navigate(module.path)}>
            <img src={module.img} alt={module.name} />
            <h3>{module.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
