// controllers/controller-cuenta.js
const User = require('../models/model-cuenta');

// Crear un nuevo usuario
const createCuenta = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los usuarios
const getCuenta = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Exportar las funciones del controlador
module.exports = {
  createCuenta,
  getCuenta,
};