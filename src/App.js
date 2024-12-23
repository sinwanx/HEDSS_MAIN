import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import LandAllocationStrategies from './components/LandAllocationStrategies';
import WaterAllocationStrategies from './components/WaterAllocationStrategies';
import LaborProductivity from './components/LaborProductivity';
import CropStrategies from './components/CropStrategies';
import PopulationDynamics from './components/PopulationDynamics';
import LoginPage from './components/LoginPage';
import DataVisualization from './components/DataVisualization';
import Sidebar from './components/Sidebar';
import TopBar from './components/Topbar'; // Import your TopBar component

function AppContent() {
  const [section, setSection] = useState(null);
  const [subsection, setSubsection] = useState(null);
  const [scenario, setScenario] = useState(null);
  const [chartType, setChartType] = useState(null);

  const location = useLocation();

  // Define routes where the Sidebar should not be displayed
  const noSidebarRoutes = ['/login'];

  return (
    <div className="app-container">
      {/* Always Render TopBar */}
      <TopBar /> {/* Ensure TopBar is always rendered */}
      
      {/* Conditionally render Sidebar */}
      {!noSidebarRoutes.includes(location.pathname) && (
        <Sidebar
          setSection={setSection}
          setSubsection={setSubsection}
          setScenario={setScenario}
          setChartType={setChartType}
        />
      )}
      <div className="content">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Section Routes */}
          <Route
            path="/landAllocation"
            element={
              <LandAllocationStrategies
                section={section}
                subsection={subsection}
                scenario={scenario}
                chartType={chartType}
              />
            }
          />
          <Route
            path="/waterAllocation"
            element={
              <WaterAllocationStrategies
                section={section}
                subsection={subsection}
                scenario={scenario}
                chartType={chartType}
              />
            }
          />
          <Route
            path="/labor-productivity"
            element={
              <LaborProductivity
                section={section}
                subsection={subsection}
                scenario={scenario}
                chartType={chartType}
              />
            }
          />
          <Route
            path="/crop-strategies"
            element={
              <CropStrategies
                section={section}
                subsection={subsection}
                scenario={scenario}
                chartType={chartType}
              />
            }
          />
          <Route
            path="/population-dynamics"
            element={
              <PopulationDynamics
                section={section}
                subsection={subsection}
                scenario={scenario}
                chartType={chartType}
              />
            }
          />

          {/* Data Visualization */}
          <Route
            path="/data-visualization"
            element={
              <DataVisualization
                section={section}
                subsection={subsection}
                scenario={scenario}
                chartType={chartType}
              />
            }
          />

          {/* Catch-All Route */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
