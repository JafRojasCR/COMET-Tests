// app.js
const express = require('express');
const app = express();
const path = require('path'); // Add this line
require('dotenv').config();
const connectDB = require('./config/db');
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT;

connectDB();

app.use(express.json()); // Allows receiving JSON data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.use('/', mainRoutes); // Use the routes defined in mainRoutes
app.use('/api/users', userRoutes); // Use the routes defined in userRoutes

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
// NOTE: FOR TESTING I NEED TO DO "npm run dev" IN CONSOLE