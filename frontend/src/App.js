import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import LandAllocationStrategies from './components/LandAllocationStrategies';
import WaterAllocationStrategies from './components/WaterAllocationStrategies';
import LaborProductivity from './components/LaborProductivity';
import CropStrategies from './components/CropStrategies';
import PopulationDynamics from './components/PopulationDynamics';
import LoginPage from './components/LoginPage';
import DataVisualization from './components/DataVisualization';
import Sidebar from './components/Sidebar';
import TopBar from './components/Topbar';
import Visualization from './components/Visualization';
import FileUpload from './components/FileUpload';

function AppContent() {
  const [section, setSection] = useState(null); // Tracks selected main section
  const [subsection, setSubsection] = useState(null); // Tracks selected subsection
  const [scenario, setScenario] = useState(null); // Tracks selected scenario
  const [chartType, setChartType] = useState('Line'); // Tracks chart type selection
  const [metric, setMetric] = useState('Production'); // Tracks selected metric

  const location = useLocation();

  // Debug logs for state values
  console.log('App state:', { section, subsection, scenario, chartType, metric });

  // Specify routes where Sidebar should not render
  const noSidebarRoutes = ['/login'];

  // Conditionally render TopBar
  const showTopBar = location.pathname !== '/login';

  return (
    <div className="app-container">
      {/* Conditionally render TopBar */}
      {showTopBar && <TopBar />}

      {/* Conditionally render Sidebar */}
      {!noSidebarRoutes.includes(location.pathname) && (
        <Sidebar
          setSection={setSection}
          setSubsection={setSubsection}
          setScenario={setScenario}
          setChartType={setChartType}
          setMetric={setMetric}
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

          {/* Visualization Route */}
          <Route
            path="/visualization"
            element={
              <Visualization
                section={section}
                subsection={subsection}
                scenario={scenario}
                chartType={chartType}
                metric={metric}
                setMetric={setMetric}
                setChartType={setChartType}
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
