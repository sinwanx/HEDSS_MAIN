import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CropStrategies.css';

function CropStrategies() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const crops = [
    {
      name: 'Wheat',
      description: 'Water and nutrient management strategies for Wheat growth.',
      strategies: [
        {
          name: 'Water Requirements',
          data: [
            { year: 2020, waterUse: 120 },
            { year: 2021, waterUse: 125 },
            { year: 2022, waterUse: 130 },
          ],
          chart: true, // Ensure chart is flagged to show
        },
        {
          name: 'Fertilizer Management',
          tableData: [
            { year: 2020, fertilizer: 'NPK', amount: '50 kg/ha' },
            { year: 2021, fertilizer: 'Urea', amount: '60 kg/ha' },
            { year: 2022, fertilizer: 'NPK', amount: '55 kg/ha' },
          ],
          chart: false, // No chart for this strategy
        },
      ],
    },
    {
      name: 'Rice',
      description: 'Water and nutrient management strategies for Rice growth.',
      strategies: [
        {
          name: 'Water Requirements',
          data: [
            { year: 2020, waterUse: 150 },
            { year: 2021, waterUse: 155 },
            { year: 2022, waterUse: 160 },
          ],
          chart: true,
        },
        {
          name: 'Fertilizer Management',
          tableData: [
            { year: 2020, fertilizer: 'NPK', amount: '80 kg/ha' },
            { year: 2021, fertilizer: 'Urea', amount: '90 kg/ha' },
            { year: 2022, fertilizer: 'NPK', amount: '85 kg/ha' },
          ],
          chart: false,
        },
      ],
    },
    {
      name: 'Maize',
      description: 'Water and nutrient management strategies for Maize growth.',
      strategies: [
        {
          name: 'Water Requirements',
          data: [
            { year: 2020, waterUse: 110 },
            { year: 2021, waterUse: 115 },
            { year: 2022, waterUse: 120 },
          ],
          chart: true,
        },
        {
          name: 'Fertilizer Management',
          tableData: [
            { year: 2020, fertilizer: 'Urea', amount: '100 kg/ha' },
            { year: 2021, fertilizer: 'NPK', amount: '110 kg/ha' },
            { year: 2022, fertilizer: 'Urea', amount: '105 kg/ha' },
          ],
          chart: false,
        },
      ],
    },
    {
      name: 'Barley',
      description: 'Water and nutrient management strategies for Barley growth.',
      strategies: [
        {
          name: 'Water Requirements',
          data: [
            { year: 2020, waterUse: 100 },
            { year: 2021, waterUse: 105 },
            { year: 2022, waterUse: 110 },
          ],
          chart: true,
        },
        {
          name: 'Fertilizer Management',
          tableData: [
            { year: 2020, fertilizer: 'Urea', amount: '70 kg/ha' },
            { year: 2021, fertilizer: 'NPK', amount: '75 kg/ha' },
            { year: 2022, fertilizer: 'Urea', amount: '72 kg/ha' },
          ],
          chart: false,
        },
      ],
    },
  ];

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCrop(null);
  };

  return (
    <div className="crop-strategies">
      <h2>Crop-Specific Strategies</h2>

      <div className="navigation-links">
        {crops.map((crop, index) => (
          <button
            key={index}
            onClick={() => handleCropClick(crop)}
            className="crop-link-btn"
          >
            {crop.name}
          </button>
        ))}
      </div>

      {isModalOpen && selectedCrop && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h3>{selectedCrop.name} Strategies</h3>
            <p>{selectedCrop.description}</p>

            {/* Loop through strategies for this crop */}
            {selectedCrop.strategies.map((strategy, index) => (
              <div key={index} className="strategy-container">
                <h4>{strategy.name}</h4>

                {/* Check if the strategy has a chart to render */}
                {strategy.chart && strategy.data ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={strategy.data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="waterUse" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                ) : null}

                {/* If table data exists, render the table */}
                {strategy.tableData && (
                  <table>
                    <thead>
                      <tr>
                        {Object.keys(strategy.tableData[0]).map((key, idx) => (
                          <th key={idx}>{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {strategy.tableData.map((row, idx) => (
                        <tr key={idx}>
                          {Object.values(row).map((value, i) => (
                            <td key={i}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CropStrategies;
