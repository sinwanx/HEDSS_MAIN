import React, { useEffect, useState, memo } from 'react';
import { Line } from 'react-chartjs-2';
import './DataVisualization.css'; // Ensure this file exists in the same directory

const DataVisualization = ({ section, subsection, scenario }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();

        // Filter data based on selected section, subsection, and scenario
        const filteredData = data.find(
          (item) =>
            item.section === section &&
            item.subsection === subsection &&
            item.scenario === scenario
        );

        if (filteredData) {
          const formattedData = {
            labels: filteredData.data.map((entry) => entry.year),
            datasets: [
              {
                label: `${subsection} (${scenario})`,
                data: filteredData.data.map((entry) => entry.value),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
              },
            ],
          };
          setChartData(formattedData);
        } else {
          setChartData(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [section, subsection, scenario]);

  return (
    <div className="data-visualization">
      <h2>Data Visualization</h2>
      {chartData ? (
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
        <p>No data available for the selected options.</p>
      )}
    </div>
  );
};

export default memo(DataVisualization);
