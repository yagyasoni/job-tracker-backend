const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow local frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow DELETE and OPTIONS
  allowedHeaders: ['Content-Type', 'Authorization'] // Optional: Allow common headers
}));

// Debug logs
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT);

// Root route
app.get('/', (req, res) => {
  res.json([]);
});

// Health check route
app.get('/health', (req, res) => res.send('Healthy'));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');

    const jobRoutes = require('./routes/jobs');
    app.use('/api/jobs', jobRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
