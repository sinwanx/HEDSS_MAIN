import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';
import mockData from '../data/mockData';

const LandAllocationStrategies = ({ section, subsection, scenario, chartType }) => {
  const [selectedChartType, setSelectedChartType] = useState(chartType || 'Production');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      console.log('Fetching data for:', { subsection, scenario, selectedChartType }); // Debug log
      const scenarioData = mockData[subsection]?.[scenario]?.[selectedChartType];
      console.log('Fetched data:', scenarioData); // Debug log
      if (scenarioData) {
        setData(scenarioData.map((value, index) => ({ year: 2014 + index, value })));
      } else {
        console.warn('No data found for the selected options'); // Warning log
        setData([]); // Ensure data is reset if not found
      }
    };
    fetchData();
  }, [subsection, scenario, selectedChartType]);

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
      default:
        return '#8884d8';
    }
  };

  const renderChart = () => {
    switch (selectedChartType) {
      case 'Bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill={getBarColor(scenario)} />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Visualization for {subsection} - {scenario} ({selectedChartType})</h2>
      <div>
        <button onClick={() => setSelectedChartType('Acreage')}>Acreage</button>
        <button onClick={() => setSelectedChartType('Water')}>Water</button>
        <button onClick={() => setSelectedChartType('Production')}>Production</button>
        <button onClick={() => setSelectedChartType('Income')}>Income</button>
        <button onClick={() => setSelectedChartType('Trade')}>Trade</button>
        <button onClick={() => setSelectedChartType('Consumption')}>Consumption</button>
      </div>
      {renderChart()}
    </div>
  );
};

export default LandAllocationStrategies;
