import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LaborProductivity.css';

const LaborProductivity = () => {
  // Sample data for labor and resource productivity
  const data = [
    { year: 2016, laborProductivity: 30, resourceProductivity: 40 },
    { year: 2017, laborProductivity: 40, resourceProductivity: 50 },
    { year: 2018, laborProductivity: 50, resourceProductivity: 60 },
    { year: 2019, laborProductivity: 60, resourceProductivity: 70 },
    { year: 2020, laborProductivity: 70, resourceProductivity: 80 },
    { year: 2021, laborProductivity: 80, resourceProductivity: 90 },
  ];

  return (
    <div className="labor-productivity">
      <h2>Labor and Resource Productivity</h2>
      <div className="visualization">
        <h3>Labor Productivity Trends</h3>
        <p>Visualization of labor productivity over the years.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="laborProductivity" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="visualization">
        <h3>Resource Productivity Trends</h3>
        <p>Visualization of resource productivity over the years.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="resourceProductivity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="visualization">
        <h3>Labor vs Resource Productivity Comparison</h3>
        <p>Compare labor and resource productivity trends side by side.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="laborProductivity" fill="#8884d8" />
            <Bar dataKey="resourceProductivity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LaborProductivity;
