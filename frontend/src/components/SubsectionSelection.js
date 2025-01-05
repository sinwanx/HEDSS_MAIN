import React from 'react';

const SubsectionSelection = ({ setSubsection }) => {
  return (
    <div>
      <h2>Select Subsection</h2>
      <button onClick={() => setSubsection('15% reduction in Large farms')}>15% reduction in Large farms</button>
      {/* Add more subsections as needed */}
    </div>
  );
};

export default SubsectionSelection;