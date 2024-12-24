import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';
import mockData from '../data/mockData';
import './Visualization.css';

const Visualization = ({ section, subsection, scenario, chartType, metric, setMetric, setChartType }) => {
  const [data, setData] = useState([]);
  const [comparisonData, setComparisonData] = useState([]);
  const [comparisonScenario, setComparisonScenario] = useState(null);
  const [comparisonSubsection, setComparisonSubsection] = useState(null);
  const [yearFilter, setYearFilter] = useState({ start: 2014, end: 2023 });
  const [showBaseScenario, setShowBaseScenario] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      console.log('Fetching data for:', { subsection, scenario, metric }); // Debug log
      const scenarioData = mockData[subsection]?.[scenario]?.[metric];
      console.log('Fetched data:', scenarioData); // Debug log
      if (scenarioData) {
        setData(scenarioData.map((value, index) => ({ year: 2014 + index, value })));
      } else {
        console.warn('No data found for the selected options'); // Warning log
        setData([]); // Ensure data is reset if not found
      }
    };
    fetchData();
  }, [subsection, scenario, metric]);

  useEffect(() => {
    const fetchComparisonData = () => {
      if (comparisonSubsection && comparisonScenario) {
        console.log('Fetching comparison data for:', { comparisonSubsection, comparisonScenario, metric }); // Debug log
        const scenarioData = mockData[comparisonSubsection]?.[comparisonScenario]?.[metric];
        console.log('Fetched comparison data:', scenarioData); // Debug log
        if (scenarioData) {
          setComparisonData(scenarioData.map((value, index) => ({ year: 2014 + index, value })));
        } else {
          console.warn('No comparison data found for the selected options'); // Warning log
          setComparisonData([]); // Ensure data is reset if not found
        }
      }
    };
    fetchComparisonData();
  }, [comparisonSubsection, comparisonScenario, metric]);

  const filteredData = data.filter(d => d.year >= yearFilter.start && d.year <= yearFilter.end);
  const filteredComparisonData = comparisonData.filter(d => d.year >= yearFilter.start && d.year <= yearFilter.end);

  if (!data.length) {
    return <p>No data available for the selected options.</p>;
  }

  const getBarColor = (scenario) => {
    switch (scenario) {
      case '15% Reduction in Large Farms':
        return '#ff6384';
      case '15% Increase in Large Farms':
        return '#36a2eb';
      case '15% Reduction in Small Farms':
        return '#ffcd56';
      case '15% Increase in Small Farms':
        return '#4bc0c0';
      case '30 MAF - Historical':
      case '30 MAF - Climate':
        return '#9966ff';
      case '40 MAF - Historical':
      case '40 MAF - Climate':
        return '#ff9f40';
      case '50 MAF - Historical':
      case '50 MAF - Climate':
        return '#ff6384';
      case '10% Growth Rate':
        return '#36a2eb';
      case '20% Growth Rate':
        return '#ffcd56';
      case '10% from Base Growth':
        return '#4bc0c0';
      case '20% from Base Growth':
        return '#9966ff';
      case 'Rice':
        return '#ff9f40';
      case 'Textile':
        return '#ff6384';
      case 'Oilseed':
        return '#36a2eb';
      case 'Petroleum':
        return '#ffcd56';
      case '10% Growth Rate':
        return '#4bc0c0';
      case '20% Growth Rate':
        return '#9966ff';
      case '10%':
        return '#ff9f40';
      case '20%':
        return '#ff6384';
      case '30%':
        return '#36a2eb';
      case 'Base':
        return '#8e44ad'; // Purple color for the Base scenario
      default:
        return '#8884d8';
    }
  };

  const renderChart = (chartData, scenario, color) => {
    switch (chartType) {
      case 'Bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill={color} animationDuration={1500} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'Radar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="year" />
              <PolarRadiusAxis />
              <Tooltip />
              <Legend />
              <Radar name={`${subsection} - ${scenario} (${metric})`} dataKey="value" stroke={color} fill={color} fillOpacity={0.6} animationDuration={1500} />
            </RadarChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke={color} animationDuration={1500} />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  const getTitle = () => {
    if (comparisonSubsection && comparisonScenario) {
      return `Visualization for ${subsection} - ${scenario} (${metric}) vs ${comparisonSubsection} - ${comparisonScenario} (${metric})`;
    }
    return `Visualization for ${subsection} - ${scenario} (${metric})`;
  };

  return (
    <div className="visualization-container">
      <h2 className="visualization-title">{getTitle()}</h2>
      <div className="visualization-buttons">
        <button onClick={() => setMetric('Acreage')}>Acreage</button>
        <button onClick={() => setMetric('Water')}>Water</button>
        <button onClick={() => setMetric('Production')}>Production</button>
        <button onClick={() => setMetric('Income')}>Income</button>
        <button onClick={() => setMetric('Trade')}>Trade</button>
        <button onClick={() => setMetric('Consumption')}>Consumption</button>
      </div>
      <div className="visualization-buttons">
        <button onClick={() => setChartType('Line')}>Line Chart</button>
        <button onClick={() => setChartType('Bar')}>Bar Chart</button>
        <button onClick={() => setChartType('Radar')}>Radar Chart</button>
      </div>
      <div className="visualization-buttons">
        <select className="dropdown" onChange={(e) => setComparisonSubsection(e.target.value)} value={comparisonSubsection || ''}>
          <option value="" disabled>Select Subsection for Comparison</option>
          {Object.keys(mockData).map((subsection) => (
            <option key={subsection} value={subsection}>{subsection}</option>
          ))}
        </select>
        {comparisonSubsection && (
          <select className="dropdown" onChange={(e) => setComparisonScenario(e.target.value)} value={comparisonScenario || ''}>
            <option value="" disabled>Select Scenario for Comparison</option>
            {Object.keys(mockData[comparisonSubsection]).map((scenario) => (
              <option key={scenario} value={scenario}>{scenario}</option>
            ))}
          </select>
        )}
        {comparisonSubsection && (
          <button onClick={() => { setComparisonSubsection(null); setComparisonScenario(null); setComparisonData([]); }}>Back to Single Scenario</button>
        )}
      </div>
      <div className="visualization-buttons">
        <label>
          Start Year:
          <input type="number" value={yearFilter.start} onChange={(e) => setYearFilter({ ...yearFilter, start: parseInt(e.target.value) })} />
        </label>
        <label>
          End Year:
          <input type="number" value={yearFilter.end} onChange={(e) => setYearFilter({ ...yearFilter, end: parseInt(e.target.value) })} />
        </label>
      </div>
      <div className="visualization-buttons">
        <button onClick={() => setShowBaseScenario(!showBaseScenario)}>
          {showBaseScenario ? 'Hide Base Scenario' : 'Show Base Scenario'}
        </button>
      </div>
      <div className="chart-container">
        {renderChart(filteredData, scenario, getBarColor(scenario))}
        {comparisonData.length > 0 && renderChart(filteredComparisonData, comparisonScenario, getBarColor(comparisonScenario))}
        {showBaseScenario && renderChart(filteredData, 'Base', getBarColor('Base'))}
      </div>
    </div>
  );
};

export default Visualization;
