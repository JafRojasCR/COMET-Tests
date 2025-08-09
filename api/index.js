const express = require('express');
const path = require('path');
require('dotenv').config();
const connectDB = require('../config/db');
const mainRoutes = require('../routes/mainRoutes');
const userRoutes = require('../routes/userRoutes');

const app = express();

// Connect to MongoDB (only once)
connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', mainRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
