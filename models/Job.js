const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'], 
    default: 'Applied' 
  },
  dateApplied: { type: Date, default: Date.now },
  link: { type: String }
});

module.exports = mongoose.model('Job', jobSchema);