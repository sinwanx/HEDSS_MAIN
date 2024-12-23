import React from 'react';

const ScenarioSelection = ({ setScenario }) => {
  return (
    <div>
      <h2>Select Scenario</h2>
      <button onClick={() => setScenario('base')}>Base</button>
      <button onClick={() => setScenario('hist')}>Historical</button>
    </div>
  );
};

export default ScenarioSelection;