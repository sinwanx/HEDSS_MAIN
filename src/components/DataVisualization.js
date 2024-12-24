import React, { useEffect, useState, memo } from 'react';
import { Line } from 'react-chartjs-2';
import './DataVisualization.css'; // Ensure this file exists in the same directory
import mockData from '../data/mockData';

const DataVisualization = ({ section, subsection, scenario, chartType }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (section && subsection && scenario && chartType) {
      // Fetch the data based on the selected scenario and chart type
      const scenarioData = mockData[subsection]?.[scenario];
      if (scenarioData) {
        setData(scenarioData[chartType]);
      }
    }
  }, [section, subsection, scenario, chartType]);

  const chartData = {
    labels: Array.from({ length: 21 }, (_, i) => 2014 + i), // Years from 2014 to 2034
    datasets: [
      {
        label: `${subsection} - ${scenario} (${chartType})`,
        data: data || [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="data-visualization">
      <h2>Data Visualization</h2>
      {data ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
          }}
        />
      ) : (
        <p>Please select a scenario to visualize the data.</p>
      )}
    </div>
  );
};

export default memo(DataVisualization);
