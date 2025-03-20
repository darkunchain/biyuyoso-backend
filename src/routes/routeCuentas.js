// routes/routeCuentas.js
const express = require('express');
const { createCuenta, getCuentas } = require('../controllers/controllerCuenta');

const router = express.Router();

// Rutas para cuentas
router.post('/cuentas', createCuenta);
router.get('/cuentas', getCuentas);

module.exports = router;