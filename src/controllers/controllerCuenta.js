// controllers/controllerCuenta.js
const Cuenta = require('../models/modelCuenta');

const createCuenta = async (req, res) => {
  try {
    const { nombre, saldo } = req.body;
    const newCuenta = new Cuenta({ nombre, saldo });
    await newCuenta.save();
    res.status(201).json(newCuenta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCuentas = async (req, res) => {
  try {
    const cuentas = await Cuenta.find();
    res.status(200).json(cuentas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCuenta,
  getCuentas,
};
