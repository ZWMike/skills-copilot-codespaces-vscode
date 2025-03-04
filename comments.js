// Create web server
const express = require('express');
const app = express();

// Create a simple web server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen for connections on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});