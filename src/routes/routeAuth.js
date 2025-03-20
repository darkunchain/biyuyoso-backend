const express = require('express');
const { register, verifyEmail, login } = require('../controllers/controllerAuth');

const router = express.Router();

// Ruta de registro
router.post('/register', register);

// Ruta de verificación de correo
router.get('/verify-email', verifyEmail);

// Ruta de login
router.post('/login', login);

module.exports = router;