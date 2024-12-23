import React, { useState } from 'react';
import './PopulationDynamics.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// Mock Data for Population Dynamics
const populationGrowthData = [
  { year: 2010, population: 30 },
  { year: 2011, population: 31 },
  { year: 2012, population: 32 },
  { year: 2013, population: 33 },
  { year: 2014, population: 34 },
  { year: 2015, population: 35 },
  { year: 2016, population: 36 },
  { year: 2017, population: 37 },
];

const urbanRuralData = [
  { region: 'Urban', population: 25 },
  { region: 'Rural', population: 15 },
];

const ageDistributionData = [
  { ageGroup: '0-14', population: 12 },
  { ageGroup: '15-24', population: 10 },
  { ageGroup: '25-54', population: 25 },
  { ageGroup: '55+', population: 10 },
];

// Tables for Display
const populationGrowthTable = [
  { year: 2010, population: 30 },
  { year: 2011, population: 31 },
  { year: 2012, population: 32 },
  { year: 2013, population: 33 },
  { year: 2014, population: 34 },
];

const urbanRuralTable = [
  { region: 'Urban', population: 25 },
  { region: 'Rural', population: 15 },
];

const ageDistributionTable = [
  { ageGroup: '0-14', population: 12 },
  { ageGroup: '15-24', population: 10 },
  { ageGroup: '25-54', population: 25 },
  { ageGroup: '55+', population: 10 },
];

function PopulationDynamics() {
  return (
    <div className="population-dynamics">
      <h2>Population Dynamics and Preferences</h2>
      <div className="visualization">
        <h3>Impact of Population Growth</h3>
        <p>Visualization of agricultural response to population growth...</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={populationGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="population" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="visualization">
        <h3>Changes in Cropping Intensity</h3>
        <p>Visualization showing cropping intensity adjustments...</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={urbanRuralData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="population" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="visualization">
        <h3>Age Distribution of Population</h3>
        <p>Age-wise population distribution...</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ageDistributionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ageGroup" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="population" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tables */}
      <div className="table-container">
        <h3>Population Growth Over Years</h3>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Population (Millions)</th>
            </tr>
          </thead>
          <tbody>
            {populationGrowthTable.map((row, idx) => (
              <tr key={idx}>
                <td>{row.year}</td>
                <td>{row.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h3>Urban vs Rural Population</h3>
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Population (Millions)</th>
            </tr>
          </thead>
          <tbody>
            {urbanRuralTable.map((row, idx) => (
              <tr key={idx}>
                <td>{row.region}</td>
                <td>{row.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h3>Age Distribution</h3>
        <table>
          <thead>
            <tr>
              <th>Age Group</th>
              <th>Population (Millions)</th>
            </tr>
          </thead>
          <tbody>
            {ageDistributionTable.map((row, idx) => (
              <tr key={idx}>
                <td>{row.ageGroup}</td>
                <td>{row.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PopulationDynamics;
