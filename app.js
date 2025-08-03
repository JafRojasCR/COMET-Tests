// app.js
const express = require('express');
const app = express();
const path = require('path'); // Add this line
require('dotenv').config();
const mainRoutes = require('./routes/mainRoutes');
const PORT = process.env.PORT;

app.use(express.json()); // Allows receiving JSON data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.use('/', mainRoutes); // Use the routes defined in mainRoutes

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});