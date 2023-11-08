const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// In-memory database (you can use a real database like MongoDB in a production environment)
const database = [];

// Define a route to fetch JSON data from a third-party API and initialize the database
app.get('/initialize-database', async (req, res) => {
  // ... (code from the previous response)
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
