import React, { useEffect, useState, memo } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './DataVisualization.css'; // Ensure this file exists in the same directory
import mockData from '../data/mockData';

const DataVisualization = ({ section, subsection, scenario, chartType }) => {
  const [data, setData] = useState(null);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    if (section && subsection && scenario && chartType) {
      // Fetch the data based on the selected scenario and chart type
      const scenarioData = mockData[subsection]?.[scenario];
      if (scenarioData) {
        setData(scenarioData[chartType]);
        setYears(Object.keys(scenarioData[chartType]));
        setSelectedYear(Object.keys(scenarioData[chartType])[0]);
      }
    }
  }, [section, subsection, scenario, chartType]);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: `${subsection} - ${scenario} (${chartType})`,
        data: data ? data[selectedYear] : [],
        borderColor: subsection === 'Water Allocation' ? 'rgba(54, 162, 235, 1)' : 'rgba(153, 102, 51, 1)', // Blue for water, brown for land
        backgroundColor: subsection === 'Water Allocation' ? 'rgba(54, 162, 235, 0.2)' : 'rgba(153, 102, 51, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="data-visualization">
      <h2>Data Visualization</h2>
      <div className="controls">
        <label htmlFor="scenario-select" title="Select a scenario for Land Allocation">Scenario:</label>
        <select id="scenario-select" onChange={(e) => setSelectedYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      {data ? (
        chartType === 'Line' ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                title: {
                  display: true,
                  text: `${subsection} - ${scenario} (${chartType})`,
                },
              },
            }}
          />
        ) : (
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                title: {
                  display: true,
                  text: `${subsection} - ${scenario} (${chartType})`,
                },
              },
            }}
          />
        )
      ) : (
        <p>Please select a scenario to visualize the data.</p>
      )}
    </div>
  );
};

export default memo(DataVisualization);
