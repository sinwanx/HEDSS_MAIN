const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow cross-origin requests

// Serve JSON data from your file
app.get('/api/data', (req, res) => {
  const data = require('./data/landAllocation_reduction15_Productivity.json'); // Ensure this path is correct
  res.json(data);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
