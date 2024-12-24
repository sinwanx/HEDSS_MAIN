import React, { useState } from 'react';
import './FileUpload.css';

const FileUpload = () => {
  const [selectedFormat, setSelectedFormat] = useState('');
  const [file, setFile] = useState(null);

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file && selectedFormat) {
      // Handle file upload logic here
      console.log('File uploaded:', file);
      console.log('Selected format:', selectedFormat);
    } else {
      alert('Please select a file and format.');
    }
  };

  return (
    <div className="file-upload-container">
      <h3>Upload File</h3>
      <div className="file-upload-form">
        <select value={selectedFormat} onChange={handleFormatChange} className="file-format-dropdown">
          <option value="" disabled>Select File Format</option>
          <option value="csv">CSV</option>
          <option value="xlsx">Excel</option>
          <option value="json">JSON</option>
        </select>
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button onClick={handleUpload} className="upload-button">Upload</button>
      </div>
    </div>
  );
};

export default FileUpload;
