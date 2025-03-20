// routes/route-user.js
const express = require('express');
const User = require('../models/model-user');
const { createUser, getUsers } = require('../controllers/Controller-user');

const router = express.Router();

// Rutas para usuarios
router.post('/users', createUser);
router.get('/users', getUsers);


module.exports = router;