const express = require('express');
const app = express();
require('dotenv').config();
const mainRoutes = require('./routes/mainRoutes');
const PORT = process.env.PORT;


app.use(express.json()); // Permite recibir datos en formato JSON

app.use('/', mainRoutes); // Usar las rutas definidas en mainRoutes
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});