import React, { useEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, PointElement, Tooltip as ChartTooltip, Legend, LineElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  PointElement,  // Register the point element
  LineElement,   // Register the line element
  ChartTooltip,
  Legend
);

const sampleData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 80 },
  { name: 'May', value: 65 },
  { name: 'Jun', value: 90 },
];

const radarData = {
  labels: ['Water', 'Land', 'Energy', 'Labor', 'Crops'],
  datasets: [
    {
      label: 'Resource Usage',
      data: [70, 80, 60, 90, 85],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ],
};

function DynamicCharts() {
  const radarChartRef = useRef(null);  // Ref for the radar chart canvas

  useEffect(() => {
    // This ensures the chart is re-rendered if needed and cleans up the previous chart
    const chartInstance = radarChartRef.current && radarChartRef.current.chartInstance;
    if (chartInstance) {
      chartInstance.destroy();  // Destroy the previous chart instance
    }

    return () => {
      // Cleanup when the component unmounts
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <h2>Resource Utilization Trends</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} animationDuration={1500} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-wrapper">
        <h2>Monthly Resource Allocation</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sampleData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="value" fill="rgba(75, 192, 192, 0.6)" animationDuration={1500} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-wrapper">
        <h2>Resource Distribution</h2>
        <Radar
          ref={radarChartRef}
          data={radarData}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              r: {  // This is the radial scale
                angleLines: { color: 'rgba(255, 255, 255, 0.3)' },
                grid: { color: 'rgba(255, 255, 255, 0.3)' },
              },
            },
            plugins: {
              legend: { display: true, position: 'top' },
            },
          }}
        />
      </div>
    </div>
  );
}

export default DynamicCharts;
