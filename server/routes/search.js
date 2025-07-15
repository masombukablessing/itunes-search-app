const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/search?term=beatles&media=music
router.get('/', async (req, res) => {
  const { term, media } = req.query;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=${media}`;

  try {
    const response = await axios.get(url);
    res.json(response.data); // Return full response data
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error fetching from iTunes API');
  }
});

module.exports = router;
