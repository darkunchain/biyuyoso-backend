// routes/route-cuenta.js
const express = require('express');
const User = require('../models/model-cuenta');
const { createCuenta, getCuenta } = require('../controllers/Controller-cuenta');

const router = express.Router();

// Rutas para usuarios
router.post('/cuentas', createCuenta);
router.get('/cuentas', getCuenta);


module.exports = router;