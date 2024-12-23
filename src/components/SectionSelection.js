import React from 'react';

const SectionSelection = ({ setSection }) => {
  return (
    <div>
      <h2>Select Section</h2>
      <button onClick={() => setSection('Land Allocation Strategies')}>Land Allocation Strategies</button>
      <button onClick={() => setSection('Water Allocation Strategies')}>Water Allocation Strategies</button>
      {/* Add more sections as needed */}
    </div>
  );
};

export default SectionSelection;