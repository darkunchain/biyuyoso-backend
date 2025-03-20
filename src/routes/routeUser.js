// routes/routeUser.js
const express = require('express');
const { createUser, getUsers } = require('../controllers/controllerUser');
const authMiddleware = require('../middlewares/authMiddle'); // Importar el middleware


const router = express.Router();

// Rutas para usuarios
router.post('/users', createUser);
router.get('/users', authMiddleware, getUsers);

module.exports = router;