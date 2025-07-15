const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const searchRoutes = require('./routes/search');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'secret123'; // Use env vars in production

// Middleware
app.use(cors());
app.use(express.json());

// JWT Middleware
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token required' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
});

// Use the search route
app.use('/api/search', searchRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
