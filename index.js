const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Optional: Debug logs
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT); // Check the port Render provides

// Health check for Render
app.get('/health', (req, res) => res.send('Healthy'));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');

    const jobRoutes = require('./routes/jobs');
    app.use('/api/jobs', jobRoutes);

    const PORT = process.env.PORT || 5000; // Use Render's PORT or fallback to 5000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
