import React, { useState, useEffect } from 'react';

const LandAllocationStrategies = ({ scenario }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/land-allocation');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); // Runs once when the component mounts

  // Filter data based on the scenario
  const filteredData = scenario
    ? data.filter((item) => item.scenario.toLowerCase() === scenario.toLowerCase())
    : [];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2d5b8a' }}>
        Land Allocation Strategies - {scenario ? scenario.replace(/-/g, ' ') : 'Unknown'}
      </h2>
      {error ? (
        <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>
      ) : filteredData.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
          <thead>
            <tr style={{ backgroundColor: '#2d5b8a', color: '#fff' }}>
              <th>Year</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>No data available for the selected scenario.</p>
      )}
    </div>
  );
};

export default LandAllocationStrategies;
