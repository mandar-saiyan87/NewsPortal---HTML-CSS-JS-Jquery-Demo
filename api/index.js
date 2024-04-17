const express = require('express');
const axios = require('axios');
const cors = require('cors')
require('dotenv').config()

const app = express();
const PORT = 3000;
app.use(express.json())
app.use(cors())
const API_KEY = process.env.API_KEY;
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

// Route to fetch data from NewAPI
app.get('/news/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const response = await axios.get(`${NEWS_API_URL}?q=${query}&language=en&apiKey=${API_KEY}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://loaclhost:${PORT}`);
});