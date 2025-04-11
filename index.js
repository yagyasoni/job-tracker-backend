const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
