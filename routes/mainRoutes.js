const router = require('express').Router();
const path = require('path');
const express = require('express');

// Ruta para servir archivos estáticos

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html")); // Envía el archivo index.html
});

module.exports = router;