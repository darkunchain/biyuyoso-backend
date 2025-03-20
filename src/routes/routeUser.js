// routes/routeUser.js
const express = require('express');
const { createUser, getUsers } = require('../controllers/controllerUser');

const router = express.Router();

// Rutas para usuarios
router.post('/users', createUser);
router.get('/users', getUsers);

module.exports = router;