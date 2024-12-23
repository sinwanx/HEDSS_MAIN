import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import waterAllocationData from '../data/waterallocationdata.json';
import './WaterAllocationStrategies.css';

const WaterAllocationStrategies = () => {
  const [selectedScenarios, setSelectedScenarios] = useState(['base', 'hist']);
  const [chartType, setChartType] = useState('line'); // Default chart type
  const [chartData, setChartData] = useState([]);

  const scenarioKeyMapping = {
    base: 'base',
    'base-with-basha-dam': 'Bbase',
    hist: 'hist',
    'historical-with-basha-dam': 'Bhist',
    lfphe: 'LFPHE',
  };

  useEffect(() => {
    const combinedData = {};

    // Combine data for selected scenarios
    selectedScenarios.forEach((scenario) => {
      const scenarioKey = scenarioKeyMapping[scenario] || scenario;
      if (waterAllocationData[scenarioKey]) {
        const data = waterAllocationData[scenarioKey];
        Object.keys(data).forEach((cropCode) => {
          if (!combinedData[cropCode]) combinedData[cropCode] = [];
          Object.keys(data[cropCode]).forEach((year) => {
            const yearData = combinedData[cropCode].find((d) => d.year === year);
            if (yearData) {
              yearData[scenario] = data[cropCode][year];
            } else {
              combinedData[cropCode].push({
                year: year,
                [scenario]: data[cropCode][year],
              });
            }
          });
        });
      }
    });

    setChartData(combinedData);
  }, [selectedScenarios]);

  const handleScenarioChange = (index, value) => {
    const updatedScenarios = [...selectedScenarios];
    updatedScenarios[index] = value;
    setSelectedScenarios(updatedScenarios);
  };

  return (
    <div className="water-allocation-strategies">
      <h2>Water Allocation Strategies: Compare Scenarios</h2>
      <p>Analyze water allocation trends across crops and years.</p>

      {/* Scenario Selectors */}
      <div className="scenario-selector">
        <label>
          Select Scenario 1:
          <select value={selectedScenarios[0]} onChange={(e) => handleScenarioChange(0, e.target.value)}>
            {Object.keys(scenarioKeyMapping).map((key) => (
              <option key={key} value={key}>
                {key.replace(/-/g, ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select Scenario 2:
          <select value={selectedScenarios[1]} onChange={(e) => handleScenarioChange(1, e.target.value)}>
            {Object.keys(scenarioKeyMapping).map((key) => (
              <option key={key} value={key}>
                {key.replace(/-/g, ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Chart Type Selector */}
      <div className="chart-type-selector">
        <label>
          Select Chart Type:
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="spider">Spider Chart</option>
          </select>
        </label>
      </div>

      {/* Visualization */}
      {Object.keys(chartData).length > 0 ? (
        Object.keys(chartData).map((crop) => (
          <div key={crop} className="visualization">
            <h3>{crop}</h3>
            <ResponsiveContainer width="100%" height={300}>
              {chartType === 'line' && (
                <LineChart data={chartData[crop]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey={selectedScenarios[0]} stroke="#8884d8" />
                  <Line type="monotone" dataKey={selectedScenarios[1]} stroke="#82ca9d" />
                </LineChart>
              )}
              {chartType === 'bar' && (
                <BarChart data={chartData[crop]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey={selectedScenarios[0]} fill="#8884d8" />
                  <Bar dataKey={selectedScenarios[1]} fill="#82ca9d" />
                </BarChart>
              )}
              {chartType === 'spider' && (
                <RadarChart outerRadius={90} data={chartData[crop]}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="year" />
                  <Radar name={selectedScenarios[0]} dataKey={selectedScenarios[0]} stroke="#8884d8" fill="#8884d8" />
                  <Radar name={selectedScenarios[1]} dataKey={selectedScenarios[1]} stroke="#82ca9d" fill="#82ca9d" />
                </RadarChart>
              )}
            </ResponsiveContainer>
          </div>
        ))
      ) : (
        <p>No data available for the selected scenarios.</p>
      )}
    </div>
  );
};

export default WaterAllocationStrategies;
