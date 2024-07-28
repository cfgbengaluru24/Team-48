// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const indexRoutes = require('./routes/indexRouter')
const dotenv = require('dotenv');  // Add this line to import dotenv
const app = express();
app.use(cors());

dotenv.config();
console.log('MongoDB URI:', process.env.MONGODB_URI);
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.name); // Log error name
    console.error('Error message:', err.message); // Log error message
  });
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve the registration form

// Use the index router for all routes
app.use('/api', indexRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
