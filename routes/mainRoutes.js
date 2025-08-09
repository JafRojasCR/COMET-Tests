const router = require('express').Router();
const path = require('path');
const express = require('express');

// Ruta para servir archivos estáticos

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html")); // Envía el archivo index.html
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "login.html")); // Envía el archivo login.html
});

module.exports = router;